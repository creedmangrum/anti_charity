'use strict'

require('../css/anti_charity.css')
Ractive = require 'ractive'
Backbone = require 'backbone'
_ = require 'underscore'
$ = require 'jquery'
Backbone.$ = $
backboneAdaptor = require 'ractive-adaptors-backbone'


backboneAdaptor.Backbone = Backbone

$( ->
  Container = require('./views/container.coffee')
  container = new Container(
    el: document.getElementById('app')
    data:
    	home_page: false
    	login_page: true
  )
)
