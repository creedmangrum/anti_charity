# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Flask app creation logic for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

from flask import Flask, jsonify
from flask_graphql import GraphQL

from anti_charity import settings as config
from anti_charity.core.models import DB
from anti_charity.core.utils import InvalidUsage, CustomJSONEncoder

from anti_charity.core.schema import schema, User, AntiCharity, Goal


def create_app(config=config.Local):
    app = Flask(__name__)
    app.config.from_object(config)
    app.json_encoder = CustomJSONEncoder
    DB.init_app(app)
    GraphQL(app, schema=schema)


    register_blueprints(app)

    @app.before_request
    def set_logging_context():
        """
        Extract the logging context from the request and add it to the kloggyr factory.
        """
        # TODO add these for anti_charity. Standard analytics logging requirements are specified in
        #   the 'Standard Analytics Kloggyr Event Names' document on Confluence.
        #   https://kyruus.jira.com/wiki/display/ANL/Standard+Analytics+Kloggyr+Events

    @app.errorhandler(InvalidUsage)
    def handle_invalid_usage(error):
        """A handler for any endpoint that raises an InvalidUsage exception"""
        return jsonify(error.to_dict()), error.status_code

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        DB.session.remove()

    return app


def register_blueprints(app):
    # Import and register blueprints here.
    from anti_charity.core import views as coreViews
    app.register_blueprint(coreViews.CORE)
    app.register_blueprint(coreViews.API)

    from anti_charity.docs.views import mod as docsModule
    app.register_blueprint(docsModule)
    return None




