'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

Profile = Ractive.extend({
  template: require('./profile.html')
  components:
  	ProfileGeneralInformation: require('./profile_general_information.coffee')
  	ProfileCampaignInformation: require('./profile_campaign_information.coffee')
})

module.exports = Profile