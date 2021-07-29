from flask_socketio import SocketIO, join_room, leave_room, emit
import os
from app.models import db, User
import json
import random

if os.environ.get("FLASK_ENV") == 'production':
    origins = [
        # Put heroku links here
    ]
else:
    origins = "*"


# Create SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

IN_GAME = 'IN_GAME'
GAME_OVER = 'GAME_OVER'
READY = 'READY'

rooms = []

roomStatus = []

userStatusMap = {}

userSeatMap = {}

userRoomMap = {}

@socketio.on('join')
def on_join(data):
    username = data['username']
    joined = False
    room = -1
    print(rooms)
    print(roomStatus)
    print(userStatusMap)
    print(userSeatMap)
    print(userRoomMap)
    for i in range(len(rooms)):
        if len(rooms[i]) < 4:
            join_room(i)
            seats = [0, 1, 2, 3]
            for player in rooms[i]:
                seats[userSeatMap[player]] = -1
            playerSeat = -1
            for seat in seats:
                if seat != -1:
                    playerSeat = seat
                    break
            print('Player seat at table: ', playerSeat)
            userRoomMap[username] = i
            rooms[i].append(username)
            userSeatMap[username] = playerSeat
            room = i
            joined = True
            break

    if not joined:
        rooms.append([username])
        roomStatus.append(GAME_OVER)
        join_room(len(rooms) - 1)
        userRoomMap[username] = len(rooms) - 1
        userSeatMap[username] = 0
        print('Player seat at table: ', 0)
        room = len(rooms) - 1

    userStatusMap[username] = GAME_OVER
    emit('player_joined', { 'username': username, 'players': rooms[room], 'seat': userSeatMap[username], 'status': roomStatus[room] }, to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = userRoomMap[username]
    leave_room(room)
    del userRoomMap[username]
    del userSeatMap[username]
    del userStatusMap[username]

    rooms[room].remove(username)

    # If room is empty, change room status to game over
    if len(rooms[room]) == 0:
        roomStatus[room] = GAME_OVER

    # If player leaves, start game if others are ready
    # TODO

    emit('player_left', { 'players': rooms[room] }, to=room)


@socketio.on('ready')
def on_ready(data):
    username = data['username']
    userStatusMap[username] = READY
    room = userRoomMap[username]

    for player in rooms[room]:
        if userStatusMap[player] != READY:
            return

    # If here, all players ready
    playerOrder = [0] * len(rooms[room])
    for player in rooms[room]:
        playerOrder[userSeatMap[player]] = player

        # Also change player status
        userStatusMap[player] = IN_GAME

    roomStatus[room] = IN_GAME

    # Generate random indices
    deckSize = 4 * 52
    drawIndices = []

    # Each player + dealer draws 2 cards
    for i in range(len(playerOrder) * 2 + 2):
        drawIndices.append(random.randint(0, deckSize))
        deckSize -= 1


    emit('start_game', { 'drawIndices': drawIndices, 'playerOrder': playerOrder }, to=room)


@socketio.on('game_over')
def on_game_over(data):
    username = data['username']
    userStatusMap[username] = GAME_OVER
    room = userRoomMap[username]

    for player in rooms[room]:
        if userStatusMap[player] != GAME_OVER:
            return

    # If here, all players done
    roomStatus[room] = GAME_OVER
    emit('game_over', to=room)


@socketio.on('hit')
def on_hit(data):
    username = data['username']
    card_idx = data['cardIdx']
    room = userRoomMap[username]
    print('PLAYER HITEEREREERE')
    print('card IDX', card_idx)
    emit('on_hit', { 'username': username, 'card_idx': card_idx}, to=room)


@socketio.on('hold')
def on_hold(data):
    username = data['username']
    room = userRoomMap[username]
    emit('on_stand', { 'username': username}, to=room)


@socketio.on('game_end')
def on_game_end(data):
    dealer_card_indices = data['dealerCardIndices']
    room = userRoomMap[data['username']]
    roomStatus[room] = GAME_OVER
    emit('game_end', { 'dealer_card_indices': dealer_card_indices}, to=room)
