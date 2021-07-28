from flask_socketio import SocketIO, join_room, leave_room, emit
import os
from app.models import db, User
import json

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

    emit('player_joined', { 'players': rooms[room], 'seat': userSeatMap[username], 'status': roomStatus[room] }, to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = userRoomMap[username]
    leave_room(room)
    del userRoomMap[username]
    del userSeatMap[username]

    if username in userStatusMap:
        del userStatusMap[username]

    rooms[room] = [player for player in rooms[room] if player != username]
    emit('player_left', { 'players': rooms[room] }, to=room)


@socketio.on('ready')
def on_ready(data):
    username = data['username']
    userStatusMap[username] = READY


@socketio.on('game_over')
def on_game_over(data):
    username = data['username']
    userStatusMap[username] = GAME_OVER


@socketio.on('hit')
def on_hit(data):
    username = data['username']
    card_idx = data['cardIdx']
