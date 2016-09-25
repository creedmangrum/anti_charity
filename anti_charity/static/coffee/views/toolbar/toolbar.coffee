'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./toolbar.css')


Toolbar = Ractive.extend({
  template: require('./toolbar.html')
})

module.exports = Toolbar
