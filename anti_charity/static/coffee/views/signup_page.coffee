'use strict'
$ = require 'jquery'
Ractive = require('ractive')
_ = require('underscore')
FacebookStrategy = require('passport-facebook').Strategy;

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
  sign_up_facebook: ->
    debugger
})

module.exports = SignupPage