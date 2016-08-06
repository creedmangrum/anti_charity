# -*- coding: utf-8 -*-

"""
© Copyright 2016, AntiCharity.  All rights reserved.

Giftbit - AntiCharity API Integration

"""

from __future__ import unicode_literals
import os, operator
import flask
from flask import current_app

import requests


class GiftbitAPI(object):

    def __init__(self):
        self.GIFTBIT_API_TOKEN = current_app.config['GIFTBIT_API_TOKEN']
        self.GIFTBIT_API_URL = current_app.config['GIFTBIT_API_URL']

    def get_marketplace(self):
        url = self.GIFTBIT_API_URL + '/marketplace'
        headers = {'Authorization': self.GIFTBIT_API_TOKEN}
        r = requests.get(url, headers=headers)

        return r.json()

    def post_campaign(self, data):
        fake_data = {
            "message":"Thanks for being such an awesome customer!",
            "subject":"Please enjoy this gift!",
            "contacts": [
                {
                    "firstname":"Creed",
                     "lastname":"Mangrum",
                     "email":"creed.mangrum@gmail.com"
                 }
            ],
            "marketplace_gifts": [
                {
                    "id":1,
                    "price_in_cents":1000
                }
            ],
            "expiry":"2017-01-01",
            "id":"clientProvidedGiftId_abc123"
        }
        pass