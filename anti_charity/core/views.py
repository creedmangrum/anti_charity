# -*- coding: utf-8 -*-

"""

Core views for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import flask

from flask import render_template, jsonify, request

import json

from anti_charity.api.giftbit import GiftbitAPI


CORE = flask.Blueprint('core', __name__, url_prefix='')
API = flask.Blueprint('api', __name__, url_prefix='/api')


@CORE.route('/status', methods=['GET'])
def get_status():
    response = {'status': 'ok'}  # if this service is versioned, add a 'version' key to this dict
    return flask.jsonify(response), 200


@CORE.route('/', methods=['GET'])
def landing_page():
    return render_template('landing_page.html')


@CORE.route('/home_page', methods=['GET'])
def index():
  return render_template('index.html')



@API.route('/giftbit/marketplace', methods=['GET'])
def get_giftbit_marketplace():
    marketplace = GiftbitAPI().get_marketplace()

    return jsonify(marketplace)


@API.route('/giftbit/campaign', methods='[POST]')
def post_giftbit_campaign():
    data = request.data
    new_gift_card = GiftbitAPI().post_campaign(data=data)