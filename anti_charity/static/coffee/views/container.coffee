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
      BrowseCampaigns: require('./under_construction/under_construction.coffee')
      Campaign: require('./under_construction/under_construction.coffee')
      Footer: require('./footer.coffee')
      Home: require('./home/home.coffee')
      LoginPage: require('./under_construction/under_construction.coffee')
      NewCampaign: require('./under_construction/under_construction.coffee')
      Profile: require('./profile/profile.coffee')
      SignupPage: require('./under_construction/under_construction.coffee')
      Toolbar: require('./toolbar/toolbar.coffee')
      WhyAnticharity: require('./home/home.coffee')
  })

module.exports = Container
