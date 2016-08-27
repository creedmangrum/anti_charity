'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

LoginPage = Ractive.extend({
  template: require('./login_page.html')
  log_in: ->
    data =
      email: @get('email')
      password: @get('password')
    $.ajax(
      url: '/api/login'
      type: 'POST'
      contentType: 'application/json'
      data: JSON.stringify(data)
      dataType: 'json'
      success: (result) =>
        if result.response is 'logged in'
          @set('authenticated', true)
          @set('email', result.email)
        else
          @set('authenticated', false)
          @set('error_message', result.response)
    )
})

module.exports = LoginPage