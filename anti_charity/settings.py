# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Environment-specific settings for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

import os
import importlib
import logging


class Common(object):
    _basedir = os.path.abspath(os.path.dirname(__file__))
    DEBUG = None
    # TODO: Replace with valid email address
    ADMINS = frozenset(['creed.mangrum@gmail.com'])
    SECRET_KEY = ')\xdd\x10\x04\xf8\xfc\xe2\xe1\xff\xbe\x16\xf7\xcf>\xcb\xc7>k\xe8\xde\x92\xa1\x8d\xe8'

    DATABASE_CONNECT_OPTIONS = {}
    THREADS_PER_PAGE = 8
    WTF_CSRF_ENABLED = os.environ.get('WTF_CSRF_ENABLED', False)
    WTF_CSRF_SECRET_KEY = '\xef\x83\xc0\xc51a\x04yFg\xa1A/\xba\x80\x8c\xca]\xb68d\xf5\xc5\x80'

    # TODO: Replace with sentry dsn
    SENTRY_DSN = ''

    # ISO time format
    TIME_FORMAT = '%Y-%m-%dT%H:%M:%S.%fZ'
    UH_KEY = 'uh'

    LOGGING_LEVEL = logging.INFO
    LOGGING_STDOUT = True

    GIFTBIT_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ==.dVZxR0hWeHNnTlNTZlovZ1ZZamZzbk5OOWR5OXVhQkNWakZ3N0x' \
                        'qemZEbWN0Q0JZZ2JBTUVFVVhTK21XNit4a2NNa3VDNGZyc0IreldRbkpCYVgzY0tOWU5FVDNERWg4UUdRczZjd21QRUt' \
                        '0dGlvZlozVU1TRmxlb2p5Z3BONkc=.XOvDLIJQ+C8tg7oZd8izSCCeUqh50LcMlCCxP4nTvaI='
    GIFTBIT_API_URL = 'https://testbedapp.giftbit.com/papi/v1'


class Local(Common):
    SQLALCHEMY_DATABASE_URI = 'postgresql://cmangrum:cmangrum11@localhost/db_anti_charity'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SENTRY_DSN = ''
    DEBUG = True
    LOGGING_STDOUT = True


class Development(Common):
    # Replace with development connection uri
    DEBUG = True


class Staging(Common):
    # Replace with staging connection uri
    DEBUG = False


class Production(Common):
    # Replace with production connection uri
    DEBUG = False


class Test(Common):
    SQLALCHEMY_DATABASE_URI = 'postgresql://cmangrum:cmangrum11@localhost/db_anti_charity_test'
    LOGGING_LEVEL = logging.CRITICAL
    LOGGING_STDOUT = False


class Demo_prd(Common):
    DEBUG = True


class Jenkins(Common):
    # This class is for Jenkins to use when running automated tests
    # Replace with development connection uri
    DEBUG = True


# The following code enables the use of personal settings files.
#
# There are two styles, with different purposes and properties:
#
#   dev_settings_<user>.py
#
#     If you use this naming convention, it's recommended that you check
#     your settings file into git, since it will still only be used by
#     you.  Some advantages of checked-in settings are:
#       - They are backed up.
#       - They are versioned.
#       - They are available for team members to use as a reference.
#
#   local_settings.py
#
#     If you use this naming convention, you must NOT check in your
#     settings file, since it would then get checked out by others.
#     Possible advantages of a not-checked-in personal settings file are:
#
#       - They are private (so might more comfortably contain passwords).
#       - They are ephemeral (so can be created/edited/deleted without git)
#
# Note that if you have both in play, the local_settings.py, which is the
# most emphemeral one, is loaded second so it can override the other one,
# which has things that are probably more enduring.

try:
    globals().update(importlib.import_module('dev_settings_%s' % os.environ['USER']).__dict__)
except ImportError:
    pass

try:
    from local_settings import *
except ImportError:
    pass
