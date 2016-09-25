# -*- coding: utf-8 -*-

"""

Core views for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import flask

from flask import render_template, jsonify, request

from anti_charity.core.models import InterestedEmail, User
from anti_charity.app import db
from anti_charity.core.utils import Cryptography

import json

from anti_charity.api.giftbit import GiftbitAPI


CORE = flask.Blueprint('core', __name__, url_prefix='')
API = flask.Blueprint('api', __name__, url_prefix='/api')


@CORE.route('/status', methods=['GET'])
def get_status():
    response = {'status': 'ok'}  # if this service is versioned, add a 'version' key to this dict
    return flask.jsonify(response), 200


@CORE.route('/landing-page', methods=['GET'])
def landing_page():
    return render_template('landing_page.html')


@CORE.route('/', methods=['GET'])
def index():
  return render_template('index.html')



@API.route('/giftbit/marketplace', methods=['GET'])
def get_giftbit_marketplace():
    marketplace = GiftbitAPI().get_marketplace()

    return jsonify(marketplace)


@API.route('/giftbit/campaign', methods=['POST'])
def post_giftbit_campaign():
    data = request.data
    new_gift_card = GiftbitAPI().post_campaign(data=data)


@API.route('/interested-email', methods=['POST'])
def post_interested_email():
    data = request.data
    email = json.loads(data).get('email')
    if email:
        interested = InterestedEmail(email)
        db.session.add(interested)

        try:
            db.session.commit()
        except:
            db.session.rollback()
        return jsonify({'response': 'Thanks, we\'ll be helping you soon'})
    return jsonify({'response': 'Something went wrong',
                    'email': email})


@API.route('/register', methods=['POST'])
def post_register_new_user():
    data = json.loads(request.data)
    user = User(data.get('email'), data.get('password'))
    db.session.add(user)
    try:
        db.session.commit()
    except:
        db.session.rollback()
        return jsonify({'response': 'Something went wrong'})
    return jsonify({'response': 'Thanks for signing up'})


@API.route('/login', methods=['POST'])
def post_login():
    data = json.loads(request.data)
    authenticated = False
    import ipdb; ipdb.set_trace()
    try:
        user = db.session.query(User).filter(User.email == data.get('email')).first()
        if user.password == data.get('password'):
            authenticated = True
    except:
        return jsonify({'response': 'Sorry this email doesn\'t exist yet'}), 401
    return jsonify({'response': 'logged in',
                    'email': data.get('email')}) if authenticated else \
        jsonify({'response': 'Incorrect password'})