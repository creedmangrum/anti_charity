'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

ProfileGeneralInformation = Ractive.extend({
  template: require('./profile_general_information.html')
})

module.exports = ProfileGeneralInformation