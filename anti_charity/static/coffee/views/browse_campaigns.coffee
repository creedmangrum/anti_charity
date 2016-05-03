'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

BrowseCampaigns = Ractive.extend({
  template: require('./browse_campaigns.html')
})

module.exports = BrowseCampaigns