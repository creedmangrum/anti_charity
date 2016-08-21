# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Utility classes and methods

"""


from __future__ import unicode_literals
from __future__ import print_function

from datetime import datetime

from flask.json import JSONEncoder

from cryptography.fernet import Fernet

from flask import current_app


class Cryptography(object):
    """Class for encryption"""

    def __init__(self):
        import ipdb; ipdb.set_trace()
        self.key = current_app.config['ENCRYPTION_KEY']
        self.f = Fernet(self.key)

    def encrypt_this(self, not_yet_secret):
        import ipdb; ipdb.set_trace()
        secret = self.f.encrypt(not_yet_secret)
        return secret

    def decrypt_this(self, secret):
        not_secret = self.f.decrypt(secret)
        return not_secret


class InvalidUsage(Exception):
    """A handy class for notifying clients when things go wrong"""

    def __init__(self, message, status_code=400, payload=None):
        Exception.__init__(self)
        self.message = message
        self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        result = dict(self.payload or ())
        result['message'] = self.message
        return result


class CustomJSONEncoder(JSONEncoder):

    def default(self, obj):
        try:
            if isinstance(obj, datetime):
                return obj.isoformat()
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)
