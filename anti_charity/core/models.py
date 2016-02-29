# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Core models for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

from flask.ext.sqlalchemy import SQLAlchemy


DB = SQLAlchemy()


class Base(DB.Model):
    """
    This extends the declarative base `DB.Model`. You can extend other models from this one if you need inheritance
    relationships. Check out http://docs.sqlalchemy.org/en/latest/orm/inheritance.html for more info.

    If you don't require inheritance, then your other models should just extend DB.Model. See the quickstart guide for
    examples: https://pythonhosted.org/Flask-SQLAlchemy/quickstart.html
    """
    id = DB.Column(DB.Integer, primary_key=True)
    created_at = DB.Column(DB.DateTime(), default=DB.func.now())


def init_db():
    # Import all models here
    DB.create_all()


def drop_db():
    # Import all models here
    DB.drop_all()
