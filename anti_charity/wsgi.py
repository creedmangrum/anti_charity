# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

WSGI config for anti_charity project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see:
http://flask.pocoo.org/docs/deploying/mod_wsgi/
http://bucksnort.pennington.net/blog/post/deploy-flask-mod_wsgi_virtenv/

"""


from __future__ import unicode_literals
from __future__ import print_function

activate_this = '/var/www/anti_charity/shared/virtualenv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

import sys
import os

app_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.insert(0, app_dir)

from anti_charity import app, settings

env = os.environ.get('APP_ENVIRONMENT', 'development')
if env.lower() == 'production':
    config = settings.Production
elif env.lower() == 'staging':
    config = settings.Staging
elif env.lower() == 'demo-prd':
    config = settings.Demo_prd
else:
    config = settings.Development

application = app.create_app(config=config)
