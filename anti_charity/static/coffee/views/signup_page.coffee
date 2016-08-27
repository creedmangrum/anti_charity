'use strict'
Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $
Ractive = require('ractive')
backboneAdaptor = require('ractive-adaptors-backbone')
backboneAdaptor.Backbone = Backbone
_ = require('underscore')

SignupPage = Ractive.extend({
  template: require('./signup_page.html')
  sign_up: ->
    data =
      name: @get('name')
      email: @get('email')
      password: @get('password')
    $.ajax(
      url: '/api/register'
      type: 'POST'
      contentType: 'application/json'
      data: JSON.stringify(data)
      dataType: 'json'
      success: (result) =>
        debugger
    )
})

module.exports = SignupPage