'use strict'

require('../css/landing_page.css')
Ractive = require 'ractive'
_ = require 'underscore'
$ = require 'jquery'

LandingPage = Ractive.extend(
  template: require('./templates/landing_page.html')

  submit_email: ->
    email = @get('email')
    $.ajax(
      url: '/api/interested-email'
      type: 'POST'
      contentType: 'application/json'
      data: JSON.stringify({'email': email})
      dataType: 'json'
      success: (result) =>
        @set('email', '')
        if result.email isnt undefined
          @set('success', true)
          @set('message', result.response)
    )
)


$( ->
  el = document.getElementById('landing_page')
  landing_page = new LandingPage(
    el: el
  )
)