'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

WhyAnticharity = Ractive.extend({
  template: require('./why_anticharity.html')
})

module.exports = WhyAnticharity