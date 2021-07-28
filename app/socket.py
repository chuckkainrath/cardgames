from flask_socketio import SocketIO, join_room, leave_room, send, emit
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


