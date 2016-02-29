# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Utility classes for tests

"""


from __future__ import unicode_literals
from __future__ import print_function

from flask.ext.testing import TestCase

from anti_charity.app import create_app
from anti_charity.core.models import DB, init_db, drop_db


class BaseTestCase(TestCase):
    """
    Extend all tests cases with this class to properly setup and teardown the test DB
    """

    def create_app(self):
        import os
        # This key is set in a Jenkins job and used for automated tests.
        key = 'FLASK_TEST_ENVIRONMENT'
        test_default_env = 'Test'

        if key not in os.environ:
            os.environ.setdefault(key, test_default_env)

        env_name = os.environ[key].title()
        settings = __import__('anti_charity.settings', fromlist=[env_name])
        test_config = getattr(settings, env_name)
        app = create_app(config=test_config)
        return app

    def setUp(self):
        self.session = DB.session
        init_db()

    def tearDown(self):
        self.session.close()
        drop_db()
        self.session.remove()
