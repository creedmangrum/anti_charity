'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

Container = Ractive.extend({
    template: require('./container.html')
    components:
      AnticharityOrg: require('./anticharity_org.coffee')
      BrowseCampaigns: require('./browse_campaigns.coffee')
      Campaign: require('./campaign.coffee')
      Footer: require('./footer.coffee')
      Home: require('./home/home.coffee')
      LoginPage: require('./login_page.coffee')
      NewCampaign: require('./new_campaign.coffee')
      Profile: require('./profile/profile.coffee')
      SignupPage: require('./signup_page.coffee')
      Toolbar: require('./toolbar/toolbar.coffee')
      WhyAnticharity: require('./home/home.coffee')
  })

module.exports = Container
