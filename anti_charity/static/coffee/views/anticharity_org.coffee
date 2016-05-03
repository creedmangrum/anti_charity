'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

AnticharityOrg = Ractive.extend({
  template: require('./anticharity_org.html')
})

module.exports = AnticharityOrg