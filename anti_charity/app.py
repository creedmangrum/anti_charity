# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, AntiCharity.  All rights reserved.

Flask app creation logic for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

from flask import Flask, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.util._collections import immutabledict

from anti_charity import settings as config
from anti_charity.core.utils import InvalidUsage, CustomJSONEncoder

db = SQLAlchemy(session_options={'autocommit': False, 'autoflush': False, 'expire_on_commit': True})
db.metadata.naming_convention = immutabledict({'ix': '%(column_0_label)s'})


def create_app(config=config.Local):
    app = Flask(__name__)
    app.config.from_object(config)
    app.json_encoder = CustomJSONEncoder
    db.init_app(app)


    register_blueprints(app)

    @app.before_request
    def set_logging_context():
        """
        Extract the logging context from the request and add it to the kloggyr factory.
        """
        # TODO add these for anti_charity. Standard analytics logging requirements are specified in
        #   the 'Standard Analytics Kloggyr Event Names' document on Confluence.
        #   https://kyruus.jira.com/wiki/display/ANL/Standard+Analytics+Kloggyr+Events

    @app.context_processor
    def get_landing_page_js_url():
        if app.config.get('LOCAL_JS'):
            url = 'static/js/anticharity_landing_page.js'
        else:
            url = 'https://s3-us-west-2.amazonaws.com/anticharity/js/manual_upload/anticharity_landing_page.min.js'
        return {'landing_page_js_url': url}

    @app.context_processor
    def get_app_js_url():
        if app.config.get('LOCAL_JS'):
            url = 'static/js/anti_charity.js'
        else:
            url = 'https://s3-us-west-2.amazonaws.com/anticharity/js/manual_upload/anti_charity.min.js'
        return {'app_js_url': url}


    @app.errorhandler(InvalidUsage)
    def handle_invalid_usage(error):
        """A handler for any endpoint that raises an InvalidUsage exception"""
        return jsonify(error.to_dict()), error.status_code

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db.session.remove()

    return app


def register_blueprints(app):
    # Import and register blueprints here.
    from anti_charity.core import views as coreViews
    app.register_blueprint(coreViews.CORE)
    app.register_blueprint(coreViews.API)

    from anti_charity.docs.views import mod as docsModule
    app.register_blueprint(docsModule)
    return None




