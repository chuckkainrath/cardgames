from flask import Blueprint, jsonify
from flask.globals import request
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:user_id>', methods=['PATCH'])
def updateWinLoss(user_id):
    user = User.query.get(user_id)
    if request.json['won']:
        user.wins += 1
    else:
        user.losses += 1
    db.session.commit()
    return user.to_dict()
