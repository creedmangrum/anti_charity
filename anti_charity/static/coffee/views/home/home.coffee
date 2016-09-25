'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./home.css')

Home = Ractive.extend({
  template: require('./home.html')
})

module.exports = Home