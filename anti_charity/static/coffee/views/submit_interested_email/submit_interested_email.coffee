'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./submit_interested_email.css')


SubmitInterestedEmail = Ractive.extend({
  template: require('./submit_interested_email.html')

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
          toastr.success('You\'ll be hearing from us soon!')
      )


})

module.exports = SubmitInterestedEmail
