'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

ProfileCampaignInformation = Ractive.extend({
  template: require('./profile_campaign_information.html')
})

module.exports = ProfileCampaignInformation