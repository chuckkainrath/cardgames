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


@socketio.on('join')
def on_join(data):
    username = data['username']
    joined = False
    for i in range(len(rooms)):
        if len(rooms[i]) < 4:
            rooms[i].append(username)
            join_room(i)
            joined = True
            break

    if not joined:
        rooms.append(1)
        join_room(i + 1)

    emit('player_joined', { 'players': rooms[i] }, to=str(i))


@socketio.on('leave')
def on_leave(data):
    room = data['room']
    username = data['username']
    leave_room(room)
    rooms[room] = [player for player in rooms[room] if player != username]
    emit('player_left', { 'players': rooms[room] }, to=str(room))
