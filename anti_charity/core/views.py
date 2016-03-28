# -*- coding: utf-8 -*-

"""

Core views for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import flask

from flask import render_template


CORE = flask.Blueprint('core', __name__, url_prefix='')


@CORE.route('/status', methods=['GET'])
def get_status():
    response = {'status': 'ok'}  # if this service is versioned, add a 'version' key to this dict
    return flask.jsonify(response), 200


@CORE.route('/', methods=['GET'])
def index():
  return render_template('index.html')
