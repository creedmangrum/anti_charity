# -*- coding: utf-8 -*-

"""\
© Copyright 2014-2015, Kyruus.  All rights reserved.

Docs views for anti_charity

"""


from __future__ import unicode_literals
from __future__ import print_function

from flask import Blueprint, render_template


mod = Blueprint('docs', __name__, url_prefix='/docs')


@mod.route('/')
def index():
    return render_template('docs/index.html')
