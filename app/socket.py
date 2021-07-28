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
        if rooms[i] < 4:
            rooms[i] += 1
            join_room(i)
            joined = True
            break

    if not joined:
        rooms.append(1)
        join_room(i + 1)

    emit('player_joined', { 'username': username }, to=str(i))


@socketio.on('leave')
def on_leave(data):
    room = data['room']
    leave_room(room)
    rooms[room] -= 1
