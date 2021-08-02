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
    if request.json['winner'] == 'Dealer':
        user.losses += 1
    else:
        user.wins += 1
    db.session.commit()
    return user.to_dict()


@user_routes.route('/leaderboard')
def getLeaderboard():
    topPlayersQuery = User.query.order_by(User.ratio.desc()).limit(10)

    topPlayers = []
    for player in topPlayersQuery:
        playerObj = player.to_dict()
        topPlayers.append(playerObj)

    return { 'topPlayers': topPlayers }
