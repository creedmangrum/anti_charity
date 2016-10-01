'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./new_campaign.css')

NewCampaign = Ractive.extend({
  template: require('./new_campaign.html')
  partials:
    add_friends: require('./new_campaign_add_friends.html')
    choose_anticharity: require('./new_campaign_choose_anticharity.html')
    set_goal: require('./new_campaign_set_goal.html')
  data:
    campaign_wizard_page: 'set'

  next_campaign_wizard_page: ->
    current_page = @get('campaign_wizard_page')
    if current_page == 'set'
      @set('campaign_wizard_page', 'choose')
    else
      @set('campaign_wizard_page', 'add')

  previous_campaign_wizard_page: ->
    current_page = @get('campaign_wizard_page')
    if current_page == 'choose'
      @set('campaign_wizard_page', 'set')
    else
      @set('campaign_wizard_page', 'choose')

  set_new_campaign_wizard_page: (page) ->
    @set('campaign_wizard_page', page);
})

module.exports = NewCampaign