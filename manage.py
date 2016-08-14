#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Management commands for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import os

from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand
from flask.ext.sqlalchemy import sqlalchemy

from anti_charity import models
from anti_charity.app import create_app, db
from anti_charity.core.models import InterestedEmail


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
print("Imported %s settings!" % env_name)

app = create_app(config=settings)
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)



@manager.shell
def make_shell_context():
    return dict(app=app, db=DB, models=models)


@manager.command
def test():
    import subprocess
    command = 'nosetests'
    subprocess.call(command)


@manager.command
def setup_db():
    (base_uri, local_db) = settings.SQLALCHEMY_DATABASE_URI.rsplit('/', 1)
    engine = sqlalchemy.create_engine('/'.join([base_uri, DEFAULT_DB]))
    conn = engine.connect()
    conn.execute('commit')
    # The dbname part of the database URI for the selected configuration.
    conn.execute(CREATE_DB % local_db)
    conn.execute('commit')
    # By convention, the name as the normal db but with "_test" appended.
    test_db = local_db + "_test"
    conn.execute(CREATE_DB % test_db)
    conn.close()


if __name__ == "__main__":
    manager.run()

