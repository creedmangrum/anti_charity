'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./under_construction.css')


UnderConstruction = Ractive.extend({
  template: require('./under_construction.html')
  components:
    SubmitInterestedEmail: require('../submit_interested_email/submit_interested_email.coffee')
})

module.exports = UnderConstruction