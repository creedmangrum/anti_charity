# -*- coding: utf-8 -*-


from __future__ import unicode_literals
from __future__ import print_function

from anti_charity.app import db

# class Base(db.Model):
#     """
#     This extends the declarative base `db.Model`. You can extend other models from this one if you need inheritance
#     relationships. Check out http://docs.sqlalchemy.org/en/latest/orm/inheritance.html for more info.
#
#     If you don't require inheritance, then your other models should just extend db.Model. See the quickstart guide for
#     examples: https://pythonhosted.org/Flask-SQLAlchemy/quickstart.html
#     """
#     id = db.Column(db.Integer, primary_key=True)
#     created_at = db.Column(db.DateTime(), default=db.func.now())


# class Goal(Base):
#     __tablename__ = 'goal'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
#
#
# class AntiCharity(Base):
#     __tablename__ = 'anticharity'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
#
#
# class User(Base):
#     __tablename__ = 'user'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
#     started_on = Column(DateTime, default=func.now())
#     deadline = Column(DateTime)
#     anticharity = Column(String)


class InterestedEmail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)

    def __init__(self, email):
        self.email = email

    def __repr__(self):
        return '<email %r>' % self.email

def init_db():
    # Import all models here
    import anti_charity.models
    db.create_all()


def drop_db():
    # Import all models here
    db.drop_all()
