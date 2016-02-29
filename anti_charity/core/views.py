# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Core views for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import flask


CORE = flask.Blueprint('core', __name__, url_prefix='')


@CORE.route('/status', methods=['GET'])
def get_status():
    response = {'status': 'ok'}  # if this service is versioned, add a 'version' key to this dict
    return flask.jsonify(response), 200
