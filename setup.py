# -*- coding: utf-8 -*-

"""\
© Copyright 2015, Kyruus. All rights reserved.

"""

from __future__ import unicode_literals

import sys

from setuptools import find_packages, setup

__author__ = "Kyruus"

MAJOR = 0
MINOR = 0
PATCH = 0
CANDIDATE = ''
VERSION = "{0}.{1}.{2}{3}".format(MAJOR, MINOR, PATCH, CANDIDATE)

BITBUCKET_STRING = "git@bitbucket.org/kyruus/"


def pkg_name_and_version_from_bitbucket_link(line):
    if "#egg=" in line:
        egg_info = line.split("#egg=")[-1]
        pkg_name = '-'.join(egg_info.split('-')[:-1])
        pkg_version = egg_info.split('-')[-1]
        return pkg_name, pkg_version
    else:
        raise ValueError("Egg info not found in bitbucket link")


def read_from_req(f_name="requirements.txt"):
    ret = []
    with open(f_name) as f:
        for line in f:
            line = line.strip()
            if BITBUCKET_STRING in line:
                ret.append('=='.join(pkg_name_and_version_from_bitbucket_link(line)))
            elif line.startswith('-') or line.startswith('#'):
                # This is a comment or index url, ignore it
                pass
            elif line:
                ret.append(line)
    return ret


requires = read_from_req()

setup(name="anti_charity",
      version=VERSION,
      description="DESCRIPTION",
      packages=find_packages(),
      install_requires=requires,
      entry_points={
          'console_scripts': [
              # e.g. 'run_queue_worker_manager = mobiuus.workers.base:run',
          ],
          'gui_scripts': [
              # eg: 'baz = my_package_gui.start_func',
          ]
      },
      # initially include everything in source control in created packages
      include_package_data=True,
      # and put this particular data, local to a developer only, in the pkg_resources namespace
      # (See here for package_data documentation:
      #  https://docs.python.org/2/distutils/setupscript.html#distutils-installing-package-data )
      # NOTE: YOU MAY HAVE TO COMMENT OUT THE 'from __future__ import unicode_literals' TO GET
      # PACKAGE DATA TO WORK PROPERLY! See
      # http://stackoverflow.com/questions/23174738/setup-py-packages-and-unicode-literals
      #package_data={'credentials': ['*.txt']}, ??
      # but never distribute that stuff in an sdist or an egg
      #exclude_package_data={'credentials': ['*.txt', '*.*', '*']}, ??
      )

