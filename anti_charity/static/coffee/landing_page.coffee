'use strict'

require('../css/landing_page.css')
Ractive = require 'ractive'
_ = require 'underscore'
$ = require 'jquery'

LandingPage = Ractive.extend(
  template: require('./templates/landing_page.html')
)


$( ->
  el = document.getElementById('landing_page')

  landing_page = new LandingPage(
    el: el
  )
)