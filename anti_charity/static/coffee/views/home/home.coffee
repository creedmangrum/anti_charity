'use strict'
$ = require 'jquery'
Ractive = require('ractive')
require('./home.css')

Home = Ractive.extend({
  template: require('./home.html')
  components:
    SubmitInterestedEmail: require('../submit_interested_email/submit_interested_email.coffee')
  data:
    current_scrollable: 0
    home_page_scrollables: [
      {
        image_url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/185/885/SANDCASTLES.png?1318627593',
        paragraph: 'Welcome to AntiCharity. Where we help you win. Not only do we help you win, but we also
                    help you to not help them, i.e., the bad guys, your bad guys.'
      },
      {
        image_url: 'https://cdn.meme.am/instances/500x/28321879.jpg',
        paragraph: 'We want you to reach your goals. We are here to help you find the motivation to reach your goals.
                    Goals are hard, but they are worth it.'
      },
      {
        image_url: 'https://pbs.twimg.com/media/CEUn09zWAAEz3Wk.jpg',
        paragraph: 'With a little bit of healthy motivation, there\'s nothing but gains on the horizon for you. Literally
                    any type of gain, unless you actually want to lose, well, not lose, but lose weight, for one example,
                    we can help with that too.'
      },
      {
        image_url: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2Fscontent-b.cdninstagram.com%2Fhphotos-xpa1%2Ft51.2885-15%2F925367_1468251120109571_1002441364_n.jpg&width=810',
        paragraph: 'Superman has Lex Luthor. The Jedi have the Sith.  Apple has Microsoft.
                    The Dallas Cowboys have the Redskins, wait, bad example, they both are terrible now, at least they
                    have each other.'
      },
      {
        image_url: 'https://cdn.meme.am/instances/500x/37264390.jpg',
        paragraph: 'We know that by implementing a system of (1) smart goal setting practices and
                    (2) the power of Loss Aversion and Social Accountability, we can make, you guessed it, your wildest
                    dreams come true.'
      },
      {
        image_url: 'http://s2.quickmeme.com/img/5c/5c0b3f2e25a56b3f0569d7b15b9af981fb832178f529b100760027e0edc29d77.jpg',
        paragraph: 'What if you set a goal and knew that failure would mean giving money to your AntiCharity?  And what if all your friends knew about it?
                    You might think twice about hitting that snooze button and decide to skip leg day.'
      },
      {
        gif: true
        paragraph: 'Sign up, and let us, help you.'
      }
    ]

  onrender: () ->


  next: (initial) ->
    if !initial
      if @get('current_scrollable') is @get('home_page_scrollables').length - 1
        @set('current_scrollable', 0)
      else
        @set('current_scrollable', @get('current_scrollable') + 1)



  show: (scrollable_page) ->
    @set('current_scrollable', scrollable_page)

})

module.exports = Home