# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    chuck = User(username='Chuck', email='chuck@gmail.com', password='kooper21', wins=95, losses=5, ratio=0.95)
    tristan = User(username='Tristan', email='tristan@gmail.com', password='tristan21', wins=50, losses=25, ratio=0.66666666)
    jeb = User(username='Jeb', email='jeb@gmail.com', password='jeb21', wins=80, losses=20, ratio=0.80)
    josh = User(username='Josh', email='josh@gmail.com', password='josh21', wins=60, losses=40, ratio=0.60)
    mimi = User(username='Mimi', email='mimi@gmail.com', password='mimi', wins=70, losses=30, ratio=0.70)
    mb = User(username='Mintbean', email='mb@gmail.com', password='mb21', wins=40, losses=40, ratio=0.50)
    christian = User(username='Christian', email='christian@gmail.com', password='christian21', wins=65, losses=35, ratio=0.65)
    maricio = User(username='Maricio', email='maricio@gmail.com', password='maricio21', wins=55, losses=45, ratio=0.55)
    john = User(username='John', email='john@gmail.com', password='john21', wins=42, losses=58, ratio=0.42)

    db.session.add(chuck)
    db.session.add(tristan)
    db.session.add(jeb)
    db.session.add(josh)
    db.session.add(mimi)
    db.session.add(mb)
    db.session.add(christian)
    db.session.add(demo)
    db.session.add(maricio)
    db.session.add(john)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
