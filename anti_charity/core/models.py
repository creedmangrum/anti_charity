# -*- coding: utf-8 -*-


from __future__ import unicode_literals
from __future__ import print_function

import os

import sqlalchemy
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy import *
from sqlalchemy.orm import (scoped_session, sessionmaker, relationship,
                            backref)
from sqlalchemy.ext.declarative import declarative_base

DB = SQLAlchemy()

key = 'APP_ENVIRONMENT'
default_env = 'Local'
DEFAULT_DB = 'postgres'
CREATE_DB = 'create database %s'
key_set = True

if key not in os.environ:
    key_set = False
    print("%s is not set, defaulting to %s." % (key, default_env))
    os.environ.setdefault(key, default_env)

env_name = os.environ[key].capitalize()
print("Environment variable: %s=%s" % (key, env_name))
settings = __import__('anti_charity.settings', fromlist=[env_name])
settings = getattr(settings, env_name)


(base_uri, local_db) = settings.SQLALCHEMY_DATABASE_URI.rsplit('/', 1)
engine = sqlalchemy.create_engine('/'.join([base_uri, DEFAULT_DB]), convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))


Base = declarative_base()
Base.query = DB.session.query_property()

# class Base(DB.Model):
#     """
#     This extends the declarative base `DB.Model`. You can extend other models from this one if you need inheritance
#     relationships. Check out http://docs.sqlalchemy.org/en/latest/orm/inheritance.html for more info.
#
#     If you don't require inheritance, then your other models should just extend DB.Model. See the quickstart guide for
#     examples: https://pythonhosted.org/Flask-SQLAlchemy/quickstart.html
#     """
#     id = DB.Column(DB.Integer, primary_key=True)
#     created_at = DB.Column(DB.DateTime(), default=DB.func.now())


class Goal(Base):
    __tablename__ = 'goal'
    id = Column(Integer, primary_key=True)
    name = Column(String)


class AntiCharity(Base):
    __tablename__ = 'anticharity'
    id = Column(Integer, primary_key=True)
    name = Column(String)

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    started_on = Column(DateTime, default=func.now())
    deadline = Column(DateTime)
    anticharity = Column(String)


def init_db():
    # Import all models here
    DB.create_all()


def drop_db():
    # Import all models here
    DB.drop_all()
