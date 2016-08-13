'use strict'

require('../css/anti_charity.css')
Ractive = require 'ractive'
_ = require 'underscore'
$ = require 'jquery'


$( ->
  Container = require('./views/container.coffee')
  container = new Container(
    el: document.getElementById('app')
    data:
    	home_page: true
    	login_page: false
    	new_campaign_page: false
    	profile_page: false
    	signup_page: false
    	why_anticharity_page: false
    	authenticated: true
  )

  $('#signup-toolbar').click( ->
  	container.set(
  		home_page: false
  		login_page: false
  		new_campaign_page: false
  		profile_page: false
  		signup_page: true
  		why_anticharity_page: false
  	))

  $('#login-toolbar').click( ->
  	container.set(
  		home_page: false
  		login_page: true
  		new_campaign_page: false
  		profile_page: false
  		signup_page: false
  		why_anticharity_page: false

  	))

  $('#anticharity-home-toolbar').click( ->
  	container.set(
  		home_page: true
  		login_page: false
  		new_campaign_page: false
  		profile_page: false
  		signup_page: false
  		why_anticharity_page: false
  	))

  $('#profile-toolbar').click( ->
  	container.set(
  		home_page: false
  		login_page: false
  		new_campaign_page: false
  		profile_page: true
  		signup_page: false
  		user:
  			name: 'Creeder'
  		why_anticharity_page: false
  	))

  $('#why-anticharity-toolbar').click( ->
  	container.set(
  		home_page: false
  		login_page: false
  		new_campaign_page: false
  		profile_page: false
  		signup_page: false
  		why_anticharity_page: true
  	))

  $('#set-a-goal-toolbar').click( ->
  	container.set(
  		home_page: false
  		login_page: false
  		new_campaign_page: true
  		profile_page: false
  		signup_page: false
  		why_anticharity_page: false
  	))
)
