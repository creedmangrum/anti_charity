'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./profile.css')


Profile = Ractive.extend({
  template: require('./profile.html')

})

module.exports = Profile