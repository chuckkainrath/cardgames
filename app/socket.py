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

rooms = []

userRoomMap = {}

@socketio.on('join')
def on_join(data):
    username = data['username']
    joined = False
    room = -1
    for i in range(len(rooms)):
        if len(rooms[i]) < 4:
            rooms[i].append(username)
            join_room(i)
            userRoomMap[username] = i
            room = i
            joined = True
            break

    if not joined:
        rooms.append([username])
        join_room(len(rooms) - 1)
        userRoomMap[username] = len(rooms) - 1
        room = len(rooms) - 1


    emit('player_joined', { 'players': rooms[room] }, to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = userRoomMap[username]
    leave_room(room)
    del userRoomMap[username]

    rooms[room] = [player for player in rooms[room] if player != username]
    emit('player_left', { 'players': rooms[room] }, to=room)
