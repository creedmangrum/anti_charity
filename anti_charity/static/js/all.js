'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

require('babel-polyfill');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _Location = require('./core/Location');

var _Location2 = _interopRequireDefault(_Location);

var _DOMUtils = require('./core/DOMUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var cssContainer = document.getElementById('css');
var appContainer = document.getElementById('app');
var context = {
  insertCss: function insertCss(styles) {
    return styles._insertCss();
  },
  onSetTitle: function onSetTitle(value) {
    return document.title = value;
  },
  onSetMeta: function onSetMeta(name, content) {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    var elements = document.getElementsByTagName('meta');
    (0, _from2.default)(elements).forEach(function (element) {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    var meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
};

// Google Analytics tracking. Don't send 'pageview' event after the first
// rendering, as it was already sent by the Html component.
var _trackPageview = function trackPageview() {
  return _trackPageview = function trackPageview() {
    return window.ga('send', 'pageview');
  };
};

function render(state) {
  _routes2.default.dispatch(state, function (newState, component) {
    _reactDom2.default.render(component, appContainer, function () {
      // Restore the scroll position if it was saved into the state
      if (state.scrollY !== undefined) {
        window.scrollTo(state.scrollX, state.scrollY);
      } else {
        window.scrollTo(0, 0);
      }

      _trackPageview();

      // Remove the pre-rendered CSS because it's no longer used
      // after the React app is launched
      if (cssContainer) {
        cssContainer.parentNode.removeChild(cssContainer);
        cssContainer = null;
      }
    });
  });
}

function run() {
  var currentLocation = null;
  var currentState = null;

  // Make taps on links and buttons work fast on mobiles
  _fastclick2.default.attach(document.body);

  // Re-render the app when window.location changes
  var unlisten = _Location2.default.listen(function (location) {
    currentLocation = location;
    currentState = (0, _assign2.default)({}, location.state, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context: context
    });
    render(currentState);
  });

  // Save the page scroll position into the current location's state
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var setPageOffset = function setPageOffset() {
    currentLocation.state = currentLocation.state || (0, _create2.default)(null);
    if (supportPageOffset) {
      currentLocation.state.scrollX = window.pageXOffset;
      currentLocation.state.scrollY = window.pageYOffset;
    } else {
      currentLocation.state.scrollX = isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      currentLocation.state.scrollY = isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
  };

  (0, _DOMUtils.addEventListener)(window, 'scroll', setPageOffset);
  (0, _DOMUtils.addEventListener)(window, 'pagehide', function () {
    (0, _DOMUtils.removeEventListener)(window, 'scroll', setPageOffset);
    unlisten();
  });
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

var port = exports.port = process.env.PORT || 3000;
var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;

var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'postgresql://cmangrum:cmangrum11@localhost/db_anti_charity';

var analytics = exports.analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' }

};

var auth = exports.auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Router = require('react-routing/src/Router');

var _Router2 = _interopRequireDefault(_Router);

var _fetch = require('./core/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _ContentPage = require('./components/ContentPage');

var _ContentPage2 = _interopRequireDefault(_ContentPage);

var _ContactPage = require('./components/ContactPage');

var _ContactPage2 = _interopRequireDefault(_ContactPage);

var _LoginPage = require('./components/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = require('./components/RegisterPage');

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _ErrorPage = require('./components/ErrorPage');

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var router = new _Router2.default(function (on) {
  on('*', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(state, next) {
      var component;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              component = _context.sent;
              return _context.abrupt('return', component && _react2.default.createElement(
                _App2.default,
                { context: state.context },
                component
              ));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })),
        _this = undefined;
    return function (_x, _x2) {
      return ref.apply(_this, arguments);
    };
  }());

  on('/contact', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', _react2.default.createElement(_ContactPage2.default, null));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  on('/login', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', _react2.default.createElement(_LoginPage2.default, null));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  on('/register', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', _react2.default.createElement(_RegisterPage2.default, null));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })));

  on('*', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(state) {
      var query, response, _ref, data;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              query = '/graphql?query={content(path:"' + state.path + '"){path,title,content,component}}';
              _context5.next = 3;
              return (0, _fetch2.default)(query);

            case 3:
              response = _context5.sent;
              _context5.next = 6;
              return response.json();

            case 6:
              _ref = _context5.sent;
              data = _ref.data;
              return _context5.abrupt('return', data && data.content && _react2.default.createElement(_ContentPage2.default, data.content));

            case 9:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    })),
        _this = undefined;
    return function (_x3) {
      return ref.apply(_this, arguments);
    };
  }());

  on('error', function (state, error) {
    return state.statusCode === 404 ? _react2.default.createElement(
      _App2.default,
      { context: state.context, error: error },
      _react2.default.createElement(_NotFoundPage2.default, null)
    ) : _react2.default.createElement(
      _App2.default,
      { context: state.context, error: error },
      _react2.default.createElement(_ErrorPage2.default, null)
    );
  });
});

exports.default = router;
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _passport = require('./core/passport');

var _passport2 = _interopRequireDefault(_passport);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _assets = require('./assets');

var _assets2 = _interopRequireDefault(_assets);

var _config = require('./config');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var server = global.server = (0, _express2.default)();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
server.use((0, _cookieParser2.default)());
server.use(_bodyParser2.default.urlencoded({ extended: true }));
server.use(_bodyParser2.default.json());

//
// Authentication
// -----------------------------------------------------------------------------
server.use((0, _expressJwt2.default)({
  secret: _config.auth.jwt.secret,
  credentialsRequired: false,
  /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
  getToken: function getToken(req) {
    return req.cookies.id_token;
  }
}));
/* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
server.use(_passport2.default.initialize());

server.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
server.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
  var expiresIn = 60 * 60 * 24 * 180; // 180 days
  var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/graphql', (0, _expressGraphql2.default)(function (req) {
  return {
    schema: _schema2.default,
    graphiql: true,
    rootValue: { request: req },
    pretty: process.env.NODE_ENV !== 'production'
  };
}));

//
// Endpoint to talk to localhost:5000
// -----------------------------------------------------------------------------
server.get('/flask', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _nodeFetch2.default)('http://localhost:5000/status').then(function (res) {
              return res.json();
            }).then(function (json) {
              console.log(json);
            });
            res.send('received');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })),
      _this = undefined;
  return function (_x, _x2, _x3) {
    return ref.apply(_this, arguments);
  };
}());

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {
              var statusCode, template, data, css, context;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      statusCode = 200;
                      template = require('./views/index.jade');
                      data = { title: '', description: '', css: '', body: '', entry: _assets2.default.main.js };


                      if (process.env.NODE_ENV === 'production') {
                        data.trackingId = _config.analytics.google.trackingId;
                      }

                      css = [];
                      context = {
                        insertCss: function insertCss(styles) {
                          return css.push(styles._getCss());
                        },
                        onSetTitle: function onSetTitle(value) {
                          return data.title = value;
                        },
                        onSetMeta: function onSetMeta(key, value) {
                          return data[key] = value;
                        },
                        onPageNotFound: function onPageNotFound() {
                          return statusCode = 404;
                        }
                      };
                      _context2.next = 8;
                      return _routes2.default.dispatch({ path: req.path, query: req.query, context: context }, function (state, component) {
                        data.body = _server2.default.renderToString(component);
                        data.css = css.join('');
                      });

                    case 8:

                      res.status(statusCode);
                      res.send(template(data));

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, undefined);
            })(), 't0', 2);

          case 2:
            _context3.next = 7;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t1 = _context3['catch'](0);

            next(_context3.t1);

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 4]]);
  })),
      _this = undefined;
  return function (_x4, _x5, _x6) {
    return ref.apply(_this, arguments);
  };
}());

//
// Error handling
// -----------------------------------------------------------------------------
var pe = new _prettyError2.default();
pe.skipNodeFiles();
pe.skipPackage('express');

server.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  var template = require('./views/error.jade');
  var statusCode = err.status || 500;
  res.status(statusCode);
  res.send(template({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack
  }));
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(_config.port, function () {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + _config.port + '/');
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars


var EE = void 0; /**
                  * React Starter Kit (https://www.reactstarterkit.com/)
                  *
                  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                  *
                  * This source code is licensed under the MIT license found in the
                  * LICENSE.txt file in the root directory of this source tree.
                  */

var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
var RESIZE_EVENT = 'resize';

function handleWindowResize() {
  if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
    viewport = { width: window.innerWidth, height: window.innerHeight };
    EE.emit(RESIZE_EVENT, viewport);
  }
}

function withViewport(ComposedComponent) {
  return function (_Component) {
    (0, _inherits3.default)(WithViewport, _Component);

    function WithViewport() {
      (0, _classCallCheck3.default)(this, WithViewport);

      var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(WithViewport).call(this));

      _this.state = {
        viewport: _ExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
      };
      return _this;
    }

    (0, _createClass3.default)(WithViewport, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!EE) {
          EE = new _eventemitter2.default();
          window.addEventListener('resize', handleWindowResize);
          window.addEventListener('orientationchange', handleWindowResize);
        }

        EE.on(RESIZE_EVENT, this.handleResize, this);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        EE.removeListener(RESIZE_EVENT, this.handleResize, this);
        if (!EE.listeners(RESIZE_EVENT, true)) {
          window.removeEventListener('resize', handleWindowResize);
          window.removeEventListener('orientationchange', handleWindowResize);
          EE = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, { viewport: this.state.viewport }));
      }
    }, {
      key: 'handleResize',
      value: function handleResize(value) {
        this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
      }
    }]);
    return WithViewport;
  }(_react.Component);
}

exports.default = withViewport;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyMirror = require('fbjs/lib/keyMirror');

var _keyMirror2 = _interopRequireDefault(_keyMirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _keyMirror2.default)({}); /**
                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                 *
                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                 *
                                                 * This source code is licensed under the MIT license found in the
                                                 * LICENSE.txt file in the root directory of this source tree.
                                                 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent("on" + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent("on" + event, listener);
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = require('history/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var location = (0, _useQueries2.default)(process.env.BROWSER ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                   *
                                                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                   *
                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                   */

exports.default = location;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Customize database connection settings
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
_pg2.default.defaults.ssl = true; /**
                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                   *
                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                   *
                                   * This source code is licensed under the MIT license found in the
                                   * LICENSE.txt file in the root directory of this source tree.
                                   */

_pg2.default.defaults.poolSize = 2;
_pg2.default.defaults.application_name = 'RSK';
/* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */

/**
 * Promise-based wrapper for pg.Client
 * https://github.com/brianc/node-postgres/wiki/Client
 */
function AsyncClient(client) {
  this.client = client;
  this.query = this.query.bind(this);
  this.end = this.end.bind(this);
}

AsyncClient.prototype.query = function query(sql) {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new _bluebird2.default(function (resolve, reject) {
    if (args.length) {
      _this.client.query(sql, args, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      _this.client.query(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};

AsyncClient.prototype.end = function end() {
  this.client.end();
};

/**
 * Promise-based wrapper for pg.connect()
 * https://github.com/brianc/node-postgres/wiki/pg
 */
_pg2.default.connect = function (connect) {
  return function (callback) {
    return new _bluebird2.default(function (resolve, reject) {
      connect.call(_pg2.default, _config.databaseUrl, function (err, client, done) {
        if (err) {
          if (client) {
            done(client);
          }

          reject(err);
        } else {
          callback(new AsyncClient(client)).then(function () {
            done();
            resolve();
          }).catch(function (error) {
            done(client);
            reject(error);
          });
        }
      });
    });
  };
}(_pg2.default.connect);

exports.default = _pg2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sign in with Facebook.
 */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

_passport2.default.use(new _passportFacebook.Strategy({
  clientID: _config.auth.facebook.id,
  clientSecret: _config.auth.facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
  var loginName = 'facebook';
  _db2.default.connect(function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var query = _ref.query;

      var result, _result, userId;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!req.user) {
                _context.next = 24;
                break;
              }

              _context.next = 3;
              return query('SELECT 1 FROM user_login WHERE name = $1 AND key = $2', loginName, profile.id);

            case 3:
              result = _context.sent;

              if (!result.rowCount) {
                _context.next = 8;
                break;
              }

              // There is already a Facebook account that belongs to you.
              // Sign in with that account or delete it, then link it with your current account.
              done();
              _context.next = 22;
              break;

            case 8:
              _context.next = 10;
              return query('\n          INSERT INTO user_account (id, email) SELECT $1, $2::character\n            WHERE NOT EXISTS (SELECT 1 FROM user_account WHERE id = $1);', req.user.id, profile._json.email);

            case 10:
              _context.next = 12;
              return query('\n          INSERT INTO user_login (user_id, name, key) VALUES ($1, \'facebook\', $2);', req.user.id, profile.id);

            case 12:
              _context.next = 14;
              return query('\n          INSERT INTO user_claim (user_id, type, value) VALUES\n            ($1, \'urn:facebook:access_token\', $3);', req.user.id, profile.id);

            case 14:
              _context.next = 16;
              return query('\n          INSERT INTO user_profile (user_id) SELECT $1\n            WHERE NOT EXISTS (SELECT 1 FROM user_profile WHERE user_id = $1);', req.user.id);

            case 16:
              _context.next = 18;
              return query('\n          UPDATE user_profile SET\n            display_name = COALESCE(NULLIF(display_name, \'\'), $2),\n            gender       = COALESCE(NULLIF(gender, \'\'), $3),\n            picture      = COALESCE(NULLIF(picture, \'\'), $4),\n          WHERE user_id = $1;', req.user.id, profile.displayName, profile._json.gender, 'https://graph.facebook.com/' + profile.id + '/picture?type=large');

            case 18:
              _context.next = 20;
              return query('\n          SELECT id, email FROM user_account WHERE id = $1;', req.user.id);

            case 20:
              result = _context.sent;

              done(null, result.rows[0]);

            case 22:
              _context.next = 52;
              break;

            case 24:
              _context.next = 26;
              return query('\n        SELECT u.id, u.email FROM user_account AS u\n          LEFT JOIN user_login AS l ON l.user_id = u.id\n        WHERE l.name = $1 AND l.key = $2', loginName, profile.id);

            case 26:
              _result = _context.sent;

              if (!_result.rowCount) {
                _context.next = 31;
                break;
              }

              done(null, _result.rows[0]);
              _context.next = 52;
              break;

            case 31:
              _context.next = 33;
              return query('SELECT 1 FROM user_account WHERE email = $1', profile._json.email);

            case 33:
              _result = _context.sent;

              if (!_result.rowCount) {
                _context.next = 38;
                break;
              }

              // There is already an account using this email address. Sign in to
              // that account and link it with Facebook manually from Account Settings.
              done(null);
              _context.next = 52;
              break;

            case 38:
              _context.next = 40;
              return query('\n            INSERT INTO user_account (email) VALUES ($1) RETURNING (id)', profile._json.email);

            case 40:
              _result = _context.sent;
              userId = _result.rows[0].id;
              _context.next = 44;
              return query('\n            INSERT INTO user_login (user_id, name, key) VALUES ($1, \'facebook\', $2)', userId, profile.id);

            case 44:
              _context.next = 46;
              return query('\n            INSERT INTO user_claim (user_id, type, value) VALUES\n              ($1, \'urn:facebook:access_token\', $2);', userId, accessToken);

            case 46:
              _context.next = 48;
              return query('\n            INSERT INTO user_profile (user_id, display_name, gender, picture)\n            VALUES ($1, $2, $3, $4);', userId, profile.displayName, profile._json.gender, 'https://graph.facebook.com/' + profile.id + '/picture?type=large');

            case 48:
              _context.next = 50;
              return query('SELECT id, email FROM user_account WHERE id = $1;', userId);

            case 50:
              _result = _context.sent;

              done(null, _result.rows[0]);

            case 52:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })),
        _this = undefined;
    return function (_x) {
      return ref.apply(_this, arguments);
    };
  }()).catch(done);
}));

exports.default = _passport2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _me = require('./queries/me');

var _me2 = _interopRequireDefault(_me);

var _content = require('./queries/content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      me: _me2.default,
      content: _content2.default
    }
  })
}); /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

exports.default = schema;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emptyFunction = require('fbjs/lib/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

var _App = require('./App.scss');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Feedback = require('../Feedback');

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var context = this.props.context;
      return {
        insertCss: context.insertCss || _emptyFunction2.default,
        onSetTitle: context.onSetTitle || _emptyFunction2.default,
        onSetMeta: context.onSetMeta || _emptyFunction2.default,
        onPageNotFound: context.onPageNotFound || _emptyFunction2.default
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var insertCss = this.props.context.insertCss;

      this.removeCss = insertCss(_App2.default);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeCss();
    }
  }, {
    key: 'render',
    value: function render() {
      return !this.props.error ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Feedback2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      ) : this.props.children;
    }
  }]);
  return App;
}(_react.Component);

App.propTypes = {
  context: _react.PropTypes.shape({
    insertCss: _react.PropTypes.func,
    onSetTitle: _react.PropTypes.func,
    onSetMeta: _react.PropTypes.func,
    onPageNotFound: _react.PropTypes.func
  }),
  children: _react.PropTypes.element.isRequired,
  error: _react.PropTypes.object
};
App.childContextTypes = {
  insertCss: _react.PropTypes.func.isRequired,
  onSetTitle: _react.PropTypes.func.isRequired,
  onSetMeta: _react.PropTypes.func.isRequired,
  onPageNotFound: _react.PropTypes.func.isRequired
};
exports.default = App;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ContactPage = require('./ContactPage.scss');

var _ContactPage2 = _interopRequireDefault(_ContactPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Contact Us'; /**
                           * React Starter Kit (https://www.reactstarterkit.com/)
                           *
                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                           *
                           * This source code is licensed under the MIT license found in the
                           * LICENSE.txt file in the root directory of this source tree.
                           */

var ContactPage = function (_Component) {
  (0, _inherits3.default)(ContactPage, _Component);

  function ContactPage() {
    (0, _classCallCheck3.default)(this, ContactPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContactPage).apply(this, arguments));
  }

  (0, _createClass3.default)(ContactPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.onSetTitle(title);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ContactPage2.default.root },
        _react2.default.createElement(
          'div',
          { className: _ContactPage2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      );
    }
  }]);
  return ContactPage;
}(_react.Component);

ContactPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(ContactPage, _ContactPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ContentPage = require('./ContentPage.scss');

var _ContentPage2 = _interopRequireDefault(_ContentPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentPage = function (_Component) {
  (0, _inherits3.default)(ContentPage, _Component);

  function ContentPage() {
    (0, _classCallCheck3.default)(this, ContentPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContentPage).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentPage, [{
    key: 'render',
    value: function render() {
      this.context.onSetTitle(this.props.title);
      return _react2.default.createElement(
        'div',
        { className: _ContentPage2.default.root },
        _react2.default.createElement(
          'div',
          { className: _ContentPage2.default.container },
          this.props.path === '/' ? null : _react2.default.createElement(
            'h1',
            null,
            this.props.title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
        )
      );
    }
  }]);
  return ContentPage;
}(_react.Component); /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

ContentPage.propTypes = {
  path: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string
};
ContentPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(ContentPage, _ContentPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Feedback = require('./Feedback.scss');

var _Feedback2 = _interopRequireDefault(_Feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feedback = function (_Component) {
  (0, _inherits3.default)(Feedback, _Component);

  function Feedback() {
    (0, _classCallCheck3.default)(this, Feedback);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Feedback).apply(this, arguments));
  }

  (0, _createClass3.default)(Feedback, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Feedback2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Feedback2.default.container },
          _react2.default.createElement(
            'a',
            {
              className: _Feedback2.default.link,
              href: 'https://gitter.im/kriasoft/react-starter-kit'
            },
            'Ask a question'
          ),
          _react2.default.createElement(
            'span',
            { className: _Feedback2.default.spacer },
            '|'
          ),
          _react2.default.createElement(
            'a',
            {
              className: _Feedback2.default.link,
              href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
            },
            'Report an issue'
          )
        )
      );
    }
  }]);
  return Feedback;
}(_react.Component); /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

exports.default = (0, _withStyles2.default)(Feedback, _Feedback2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = require('./Header.scss');

var _Header2 = _interopRequireDefault(_Header);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _Navigation = require('../Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Header2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Header2.default.container },
          _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav }),
          _react2.default.createElement(
            _Link2.default,
            { className: _Header2.default.brand, to: '/' },
            _react2.default.createElement('img', { src: require('./logo-small.png'), width: '38', height: '38', alt: 'React' }),
            _react2.default.createElement(
              'span',
              { className: _Header2.default.brandTxt },
              'AntiCharity'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _Header2.default.banner },
            _react2.default.createElement(
              'h1',
              { className: _Header2.default.bannerTitle },
              'Creed'
            ),
            _react2.default.createElement(
              'p',
              { className: _Header2.default.bannerDesc },
              'Help you not them!!'
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component); /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

exports.default = (0, _withStyles2.default)(Header, _Header2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Location = require('../../core/Location');

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
      var allowTransition = true;
      var clickResult = void 0;

      if (_this.props && _this.props.onClick) {
        clickResult = _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (clickResult === false || event.defaultPrevented === true) {
        allowTransition = false;
      }

      event.preventDefault();

      if (allowTransition) {
        var link = event.currentTarget;
        if (_this.props && _this.props.to) {
          _Location2.default.push(_this.props.to);
        } else {
          _Location2.default.push({ pathname: link.pathname, search: link.search });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var to = _props.to;
      var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define

      return _react2.default.createElement('a', (0, _extends3.default)({ href: _Location2.default.createHref(to) }, props, { onClick: this.handleClick }));
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = {
  to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  onClick: _react.PropTypes.func
};
exports.default = Link;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _LoginPage = require('./LoginPage.scss');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Log In'; /**
                       * React Starter Kit (https://www.reactstarterkit.com/)
                       *
                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                       *
                       * This source code is licensed under the MIT license found in the
                       * LICENSE.txt file in the root directory of this source tree.
                       */

var LoginPage = function (_Component) {
  (0, _inherits3.default)(LoginPage, _Component);

  function LoginPage() {
    (0, _classCallCheck3.default)(this, LoginPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginPage).apply(this, arguments));
  }

  (0, _createClass3.default)(LoginPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.onSetTitle(title);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _LoginPage2.default.root },
        _react2.default.createElement(
          'div',
          { className: _LoginPage2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      );
    }
  }]);
  return LoginPage;
}(_react.Component);

LoginPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(LoginPage, _LoginPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NotFoundPage = require('./NotFoundPage.scss');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Page Not Found'; /**
                               * React Starter Kit (https://www.reactstarterkit.com/)
                               *
                               * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                               *
                               * This source code is licensed under the MIT license found in the
                               * LICENSE.txt file in the root directory of this source tree.
                               */

var NotFoundPage = function (_Component) {
  (0, _inherits3.default)(NotFoundPage, _Component);

  function NotFoundPage() {
    (0, _classCallCheck3.default)(this, NotFoundPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NotFoundPage).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFoundPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.onSetTitle(title);
      this.context.onPageNotFound();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          'Sorry, but the page you were trying to view does not exist.'
        )
      );
    }
  }]);
  return NotFoundPage;
}(_react.Component);

NotFoundPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired,
  onPageNotFound: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(NotFoundPage, _NotFoundPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _RegisterPage = require('./RegisterPage.scss');

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'New User Registration'; /**
                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                      *
                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                      *
                                      * This source code is licensed under the MIT license found in the
                                      * LICENSE.txt file in the root directory of this source tree.
                                      */

var RegisterPage = function (_Component) {
  (0, _inherits3.default)(RegisterPage, _Component);

  function RegisterPage() {
    (0, _classCallCheck3.default)(this, RegisterPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RegisterPage).apply(this, arguments));
  }

  (0, _createClass3.default)(RegisterPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.onSetTitle(title);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _RegisterPage2.default.root },
        _react2.default.createElement(
          'div',
          { className: _RegisterPage2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      );
    }
  }]);
  return RegisterPage;
}(_react.Component);

RegisterPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(RegisterPage, _RegisterPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Navigation = require('./Navigation.scss');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation() {
    (0, _classCallCheck3.default)(this, Navigation);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Navigation).apply(this, arguments));
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_Navigation2.default.root, this.props.className), role: 'navigation' },
        _react2.default.createElement(
          _Link2.default,
          { className: _Navigation2.default.link, to: '/about' },
          'About'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Navigation2.default.link, to: '/contact' },
          'Contact'
        ),
        _react2.default.createElement(
          'span',
          { className: _Navigation2.default.spacer },
          ' | '
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Navigation2.default.link, to: '/login' },
          'Log in'
        ),
        _react2.default.createElement(
          'span',
          { className: _Navigation2.default.spacer },
          'or'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: (0, _classnames2.default)(_Navigation2.default.link, _Navigation2.default.highlight), to: '/register' },
          'Sign up'
        )
      );
    }
  }]);
  return Navigation;
}(_react.Component); /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

Navigation.propTypes = {
  className: _react.PropTypes.string
};
exports.default = (0, _withStyles2.default)(Navigation, _Navigation2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _TextBox = require('./TextBox.scss');

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBox = function (_Component) {
  (0, _inherits3.default)(TextBox, _Component);

  function TextBox() {
    (0, _classCallCheck3.default)(this, TextBox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextBox).apply(this, arguments));
  }

  (0, _createClass3.default)(TextBox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _TextBox2.default.root },
        this.props.maxLines > 1 ? _react2.default.createElement('textarea', (0, _extends3.default)({}, this.props, {
          className: _TextBox2.default.input,
          ref: 'input',
          key: 'input',
          rows: this.props.maxLines
        })) : _react2.default.createElement('input', (0, _extends3.default)({}, this.props, {
          className: _TextBox2.default.input,
          ref: 'input',
          key: 'input'
        }))
      );
    }
  }]);
  return TextBox;
}(_react.Component); /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

TextBox.propTypes = {
  maxLines: _react.PropTypes.number
};
TextBox.defaultProps = {
  maxLines: 1
};
exports.default = TextBox;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var resolveExtension = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
    var fileNameBase, ext, fileName;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
            ext = extension;

            if (!ext.startsWith('.')) {
              ext = '.' + extension;
            }

            fileName = fileNameBase + ext;
            _context.next = 6;
            return fileExists(fileName);

          case 6:
            if (_context.sent) {
              _context.next = 9;
              break;
            }

            fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
            fileName = fileNameBase + ext;

          case 9:
            _context.next = 11;
            return fileExists(fileName);

          case 11:
            if (_context.sent) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', { success: false });

          case 13:
            return _context.abrupt('return', { success: true, fileName: fileName });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function resolveExtension(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

var resolveFileName = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
    var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            extensions = ['.jade', '.md', '.html'];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 4;
            _iterator = (0, _getIterator3.default)(extensions);

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 16;
              break;
            }

            extension = _step.value;
            _context2.next = 10;
            return resolveExtension(path, extension);

          case 10:
            maybeFileName = _context2.sent;

            if (!maybeFileName.success) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });

          case 13:
            _iteratorNormalCompletion = true;
            _context2.next = 6;
            break;

          case 16:
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 22:
            _context2.prev = 22;
            _context2.prev = 23;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 25:
            _context2.prev = 25;

            if (!_didIteratorError) {
              _context2.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context2.finish(25);

          case 29:
            return _context2.finish(22);

          case 30:
            return _context2.abrupt('return', { success: false, fileName: null, extension: null });

          case 31:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
  }));
  return function resolveFileName(_x3) {
    return ref.apply(this, arguments);
  };
}();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _graphql = require('graphql');

var _ContentType = require('../types/ContentType');

var _ContentType2 = _interopRequireDefault(_ContentType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var md = new _markdownIt2.default();

// A folder with Jade/Markdown/HTML content pages
var CONTENT_DIR = (0, _path.join)(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
var parseContent = function parseContent(path, fileContent, extension) {
  var fmContent = (0, _frontMatter2.default)(fileContent);
  var htmlContent = void 0;
  switch (extension) {
    case '.jade':
      htmlContent = _jade2.default.render(fmContent.body);
      break;
    case '.md':
      htmlContent = md.render(fmContent.body);
      break;
    case '.html':
      htmlContent = fmContent.body;
      break;
    default:
      return null;
  }
  var smth = (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  return smth;
};

var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
var fileExists = function fileExists(filename) {
  return new _bluebird2.default(function (resolve) {
    _fs2.default.exists(filename, resolve);
  });
};

var content = {
  type: _ContentType2.default,
  args: {
    path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  },
  resolve: function resolve(_ref, _ref2) {
    var _this = this;

    var request = _ref.request;
    var path = _ref2.path;
    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var _ref3, success, fileName, extension, source;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return resolveFileName(path);

            case 2:
              _ref3 = _context3.sent;
              success = _ref3.success;
              fileName = _ref3.fileName;
              extension = _ref3.extension;

              if (success) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt('return', null);

            case 8:
              _context3.next = 10;
              return readFile(fileName, { encoding: 'utf8' });

            case 10:
              source = _context3.sent;
              return _context3.abrupt('return', parseContent(path, source, extension));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }))();
  }
};

exports.default = content;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserType = require('../types/UserType');

var _UserType2 = _interopRequireDefault(_UserType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var me = {
  type: _UserType2.default,
  resolve: function resolve(_ref) {
    var request = _ref.request;

    return request.user && {
      id: request.user.id,
      email: request.user.email
    };
  }
}; /**
    * React Starter Kit (https://www.reactstarterkit.com/)
    *
    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.txt file in the root directory of this source tree.
    */

exports.default = me;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var ContentType = new _graphql.GraphQLObjectType({
  name: 'Content',
  fields: {
    path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  }
}); /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

exports.default = ContentType;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    email: { type: _graphql.GraphQLString }
  }
}); /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

exports.default = UserType;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Request = exports.Headers = undefined;

require('whatwg-fetch');

exports.default = self.fetch.bind(self); /**
                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                          *
                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                          *
                                          * This source code is licensed under the MIT license found in the
                                          * LICENSE.txt file in the root directory of this source tree.
                                          */

var Headers = exports.Headers = self.Headers;
var Request = exports.Request = self.Request;
var Response = exports.Response = self.Response;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Headers = exports.Request = exports.default = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function localUrl(url) {
  if (url.startsWith('//')) {
    return 'https:' + url;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return 'http://' + _config.host + url;
}

function localFetch(url, options) {
  return (0, _nodeFetch2.default)(localUrl(url), options);
}

exports.default = localFetch;
exports.Request = _nodeFetch.Request;
exports.Headers = _nodeFetch.Headers;
exports.Response = _nodeFetch.Response;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ErrorPage = require('./ErrorPage.scss');

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Error'; /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */

var ErrorPage = function (_Component) {
  (0, _inherits3.default)(ErrorPage, _Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ErrorPage).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.onSetTitle(title);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          'Sorry, an critical error occurred on this page.'
        )
      );
    }
  }]);
  return ErrorPage;
}(_react.Component);

ErrorPage.contextTypes = {
  onSetTitle: _react.PropTypes.func.isRequired,
  onPageNotFound: _react.PropTypes.func.isRequired
};
exports.default = (0, _withStyles2.default)(ErrorPage, _ErrorPage2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Footer = require('./Footer.scss');

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Footer2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Footer2.default.container },
          _react2.default.createElement(
            'span',
            { className: _Footer2.default.text },
            '© Your Company'
          ),
          _react2.default.createElement(
            'span',
            { className: _Footer2.default.spacer },
            '·'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Footer2.default.link, to: '/' },
            'Home'
          ),
          _react2.default.createElement(
            'span',
            { className: _Footer2.default.spacer },
            '·'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Footer2.default.link, to: '/privacy' },
            'Privacy'
          ),
          _react2.default.createElement(
            'span',
            { className: _Footer2.default.spacer },
            '·'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Footer2.default.link, to: '/not-found' },
            'Not Found'
          )
        )
      );
    }
  }]);
  return Footer;
}(_react.Component);

exports.default = (0, _withStyles2.default)(Footer, _Footer2.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5qcyIsImNvbmZpZy5qcyIsInJvdXRlcy5qcyIsInNlcnZlci5qcyIsImNvbXBvbmVudHMvd2l0aFZpZXdwb3J0LmpzIiwiY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzIiwiY29yZS9ET01VdGlscy5qcyIsImNvcmUvTG9jYXRpb24uanMiLCJjb3JlL2RiLmpzIiwiY29yZS9wYXNzcG9ydC5qcyIsImRhdGEvc2NoZW1hLmpzIiwiY29tcG9uZW50cy9BcHAvQXBwLmpzIiwiY29tcG9uZW50cy9Db250YWN0UGFnZS9Db250YWN0UGFnZS5qcyIsImNvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UuanMiLCJjb21wb25lbnRzL0ZlZWRiYWNrL0ZlZWRiYWNrLmpzIiwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9MaW5rL0xpbmsuanMiLCJjb21wb25lbnRzL0xvZ2luUGFnZS9Mb2dpblBhZ2UuanMiLCJjb21wb25lbnRzL05vdEZvdW5kUGFnZS9Ob3RGb3VuZFBhZ2UuanMiLCJjb21wb25lbnRzL1JlZ2lzdGVyUGFnZS9SZWdpc3RlclBhZ2UuanMiLCJjb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsImNvbXBvbmVudHMvVGV4dEJveC9UZXh0Qm94LmpzIiwiZGF0YS9xdWVyaWVzL2NvbnRlbnQuanMiLCJkYXRhL3F1ZXJpZXMvbWUuanMiLCJkYXRhL3R5cGVzL0NvbnRlbnRUeXBlLmpzIiwiZGF0YS90eXBlcy9Vc2VyVHlwZS5qcyIsImNvcmUvZmV0Y2gvZmV0Y2guY2xpZW50LmpzIiwiY29yZS9mZXRjaC9mZXRjaC5zZXJ2ZXIuanMiLCJjb21wb25lbnRzL0Vycm9yUGFnZS9FcnJvclBhZ2UuanMiLCJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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SUFBRixFQUFRLElBQUcsVUFBSCxFQUF6Qjs7V0FMRjtVQU1FOztjQUFNLFdBQVcsaUJBQUUsTUFBRixFQUFqQjs7V0FORjtVQU9FOztjQUFNLFdBQVcsaUJBQUUsSUFBRixFQUFRLElBQUcsWUFBSCxFQUF6Qjs7V0FQRjtTQURGO09BREYsQ0FETzs7O1NBRkw7OztrQkFvQlMsMEJBQVcsTUFBWCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRmFzdENsaWNrIGZyb20gJ2Zhc3RjbGljayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuL2NvcmUvTG9jYXRpb24nO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vY29yZS9ET01VdGlscyc7XG5cbmxldCBjc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3NzJyk7XG5jb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5jb25zdCBjb250ZXh0ID0ge1xuICBpbnNlcnRDc3M6IHN0eWxlcyA9PiBzdHlsZXMuX2luc2VydENzcygpLFxuICBvblNldFRpdGxlOiB2YWx1ZSA9PiAoZG9jdW1lbnQudGl0bGUgPSB2YWx1ZSksXG4gIG9uU2V0TWV0YTogKG5hbWUsIGNvbnRlbnQpID0+IHtcbiAgICAvLyBSZW1vdmUgYW5kIGNyZWF0ZSBhIG5ldyA8bWV0YSAvPiB0YWcgaW4gb3JkZXIgdG8gbWFrZSBpdCB3b3JrXG4gICAgLy8gd2l0aCBib29rbWFya3MgaW4gU2FmYXJpXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSBuYW1lKSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBjb250ZW50KTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgICAgIC5hcHBlbmRDaGlsZChtZXRhKTtcbiAgfSxcbn07XG5cbi8vIEdvb2dsZSBBbmFseXRpY3MgdHJhY2tpbmcuIERvbid0IHNlbmQgJ3BhZ2V2aWV3JyBldmVudCBhZnRlciB0aGUgZmlyc3Rcbi8vIHJlbmRlcmluZywgYXMgaXQgd2FzIGFscmVhZHkgc2VudCBieSB0aGUgSHRtbCBjb21wb25lbnQuXG5sZXQgdHJhY2tQYWdldmlldyA9ICgpID0+ICh0cmFja1BhZ2V2aWV3ID0gKCkgPT4gd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JykpO1xuXG5mdW5jdGlvbiByZW5kZXIoc3RhdGUpIHtcbiAgUm91dGVyLmRpc3BhdGNoKHN0YXRlLCAobmV3U3RhdGUsIGNvbXBvbmVudCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcihjb21wb25lbnQsIGFwcENvbnRhaW5lciwgKCkgPT4ge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlmIGl0IHdhcyBzYXZlZCBpbnRvIHRoZSBzdGF0ZVxuICAgICAgaWYgKHN0YXRlLnNjcm9sbFkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oc3RhdGUuc2Nyb2xsWCwgc3RhdGUuc2Nyb2xsWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRyYWNrUGFnZXZpZXcoKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBwcmUtcmVuZGVyZWQgQ1NTIGJlY2F1c2UgaXQncyBubyBsb25nZXIgdXNlZFxuICAgICAgLy8gYWZ0ZXIgdGhlIFJlYWN0IGFwcCBpcyBsYXVuY2hlZFxuICAgICAgaWYgKGNzc0NvbnRhaW5lcikge1xuICAgICAgICBjc3NDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjc3NDb250YWluZXIpO1xuICAgICAgICBjc3NDb250YWluZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICBsZXQgY3VycmVudExvY2F0aW9uID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cbiAgLy8gTWFrZSB0YXBzIG9uIGxpbmtzIGFuZCBidXR0b25zIHdvcmsgZmFzdCBvbiBtb2JpbGVzXG4gIEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG5cbiAgLy8gUmUtcmVuZGVyIHRoZSBhcHAgd2hlbiB3aW5kb3cubG9jYXRpb24gY2hhbmdlc1xuICBjb25zdCB1bmxpc3RlbiA9IExvY2F0aW9uLmxpc3Rlbihsb2NhdGlvbiA9PiB7XG4gICAgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgY3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYXRpb24uc3RhdGUsIHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5LFxuICAgICAgc3RhdGU6IGxvY2F0aW9uLnN0YXRlLFxuICAgICAgY29udGV4dCxcbiAgICB9KTtcbiAgICByZW5kZXIoY3VycmVudFN0YXRlKTtcbiAgfSk7XG5cbiAgLy8gU2F2ZSB0aGUgcGFnZSBzY3JvbGwgcG9zaXRpb24gaW50byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHN0YXRlXG4gIGNvbnN0IHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzQ1NTMUNvbXBhdCA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCAnJykgPT09ICdDU1MxQ29tcGF0Jyk7XG4gIGNvbnN0IHNldFBhZ2VPZmZzZXQgPSAoKSA9PiB7XG4gICAgY3VycmVudExvY2F0aW9uLnN0YXRlID0gY3VycmVudExvY2F0aW9uLnN0YXRlIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKHN1cHBvcnRQYWdlT2Zmc2V0KSB7XG4gICAgICBjdXJyZW50TG9jYXRpb24uc3RhdGUuc2Nyb2xsWCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5zdGF0ZS5zY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50TG9jYXRpb24uc3RhdGUuc2Nyb2xsWCA9IGlzQ1NTMUNvbXBhdCA/XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgY3VycmVudExvY2F0aW9uLnN0YXRlLnNjcm9sbFkgPSBpc0NTUzFDb21wYXQgP1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuICB9O1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc2Nyb2xsJywgc2V0UGFnZU9mZnNldCk7XG4gIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncGFnZWhpZGUnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzY3JvbGwnLCBzZXRQYWdlT2Zmc2V0KTtcbiAgICB1bmxpc3RlbigpO1xuICB9KTtcbn1cblxuLy8gUnVuIHRoZSBhcHBsaWNhdGlvbiB3aGVuIGJvdGggRE9NIGlzIHJlYWR5IGFuZCBwYWdlIGNvbnRlbnQgaXMgbG9hZGVkXG5pZiAoWydjb21wbGV0ZScsICdsb2FkZWQnLCAnaW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhkb2N1bWVudC5yZWFkeVN0YXRlKSAmJiBkb2N1bWVudC5ib2R5KSB7XG4gIHJ1bigpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJ1biwgZmFsc2UpO1xufVxuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBqc2NzOmRpc2FibGUgbWF4aW11bUxpbmVMZW5ndGggKi9cblxuZXhwb3J0IGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5leHBvcnQgY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52LldFQlNJVEVfSE9TVE5BTUUgfHwgYGxvY2FsaG9zdDoke3BvcnR9YDtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIHx8ICdwb3N0Z3Jlc3FsOi8vY21hbmdydW06Y21hbmdydW0xMUBsb2NhbGhvc3QvZGJfYW50aV9jaGFyaXR5JztcblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IHtcblxuICAvLyBodHRwczovL2FuYWx5dGljcy5nb29nbGUuY29tL1xuICBnb29nbGU6IHsgdHJhY2tpbmdJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1RSQUNLSU5HX0lEIHx8ICdVQS1YWFhYWC1YJyB9LFxuXG59O1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IHtcblxuICBqd3Q6IHsgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICdSZWFjdCBTdGFydGVyIEtpdCcgfSxcblxuICAvLyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL1xuICBmYWNlYm9vazoge1xuICAgIGlkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19BUFBfSUQgfHwgJzE4NjI0NDU1MTc0NTYzMScsXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19BUFBfU0VDUkVUIHx8ICdhOTcwYWUzMjQwYWI0YjliOGFhZTBmOWYwNjYxYzZmYycsXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2NvbnNvbGUvcHJvamVjdFxuICBnb29nbGU6IHtcbiAgICBpZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCAnMjUxNDEwNzMwNTUwLWFoY2cwb3U1bWdmaGw4aGx1aTF1cnJ1N2puNXMxMmttLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8ICdZOHlSOXlaQWhtOWpROEZLQUw4UUlFY2QnLFxuICB9LFxuXG4gIC8vIGh0dHBzOi8vYXBwcy50d2l0dGVyLmNvbS9cbiAgdHdpdHRlcjoge1xuICAgIGtleTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9LRVkgfHwgJ0llMjBBWnZMSkkybFFENURzZ3hnamF1bnMnLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQgfHwgJ0tUWjZjeG9LbkVha1FDZVNwWmxhVUNKV0dBbFRFQkpqMHkyRU1rVUJ1akE3eldTdmFRJyxcbiAgfSxcblxufTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGluZy9zcmMvUm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICcuL2NvcmUvZmV0Y2gnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnO1xuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0UGFnZSc7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpblBhZ2UnO1xuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXJQYWdlJztcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kUGFnZSc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vY29tcG9uZW50cy9FcnJvclBhZ2UnO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKG9uID0+IHtcbiAgb24oJyonLCBhc3luYyAoc3RhdGUsIG5leHQpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBhd2FpdCBuZXh0KCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudCAmJiA8QXBwIGNvbnRleHQ9e3N0YXRlLmNvbnRleHR9Pntjb21wb25lbnR9PC9BcHA+O1xuICB9KTtcblxuICBvbignL2NvbnRhY3QnLCBhc3luYyAoKSA9PiA8Q29udGFjdFBhZ2UgLz4pO1xuXG4gIG9uKCcvbG9naW4nLCBhc3luYyAoKSA9PiA8TG9naW5QYWdlIC8+KTtcblxuICBvbignL3JlZ2lzdGVyJywgYXN5bmMgKCkgPT4gPFJlZ2lzdGVyUGFnZSAvPik7XG5cbiAgb24oJyonLCBhc3luYyAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGAvZ3JhcGhxbD9xdWVyeT17Y29udGVudChwYXRoOlwiJHtzdGF0ZS5wYXRofVwiKXtwYXRoLHRpdGxlLGNvbnRlbnQsY29tcG9uZW50fX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhICYmIGRhdGEuY29udGVudCAmJiA8Q29udGVudFBhZ2Ugey4uLmRhdGEuY29udGVudH0gLz47XG4gIH0pO1xuXG4gIG9uKCdlcnJvcicsIChzdGF0ZSwgZXJyb3IpID0+IHN0YXRlLnN0YXR1c0NvZGUgPT09IDQwNCA/XG4gICAgPEFwcCBjb250ZXh0PXtzdGF0ZS5jb250ZXh0fSBlcnJvcj17ZXJyb3J9PjxOb3RGb3VuZFBhZ2UgLz48L0FwcD4gOlxuICAgIDxBcHAgY29udGV4dD17c3RhdGUuY29udGV4dH0gZXJyb3I9e2Vycm9yfT48RXJyb3JQYWdlIC8+PC9BcHA+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGV4cHJlc3NKd3QgZnJvbSAnZXhwcmVzcy1qd3QnO1xuaW1wb3J0IGV4cHJlc3NHcmFwaFFMIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICcuL2NvcmUvcGFzc3BvcnQnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL2RhdGEvc2NoZW1hJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgeyBwb3J0LCBhdXRoLCBhbmFseXRpY3MgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cblxuY29uc3Qgc2VydmVyID0gZ2xvYmFsLnNlcnZlciA9IGV4cHJlc3MoKTtcblxuLy9cbi8vIFRlbGwgYW55IENTUyB0b29saW5nIChzdWNoIGFzIE1hdGVyaWFsIFVJKSB0byB1c2UgYWxsIHZlbmRvciBwcmVmaXhlcyBpZiB0aGVcbi8vIHVzZXIgYWdlbnQgaXMgbm90IGtub3duLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmdsb2JhbC5uYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yIHx8IHt9O1xuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgPSBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnYWxsJztcblxuLy9cbi8vIFJlZ2lzdGVyIE5vZGUuanMgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnNlcnZlci51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XG5zZXJ2ZXIudXNlKGNvb2tpZVBhcnNlcigpKTtcbnNlcnZlci51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuc2VydmVyLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbi8vXG4vLyBBdXRoZW50aWNhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnNlcnZlci51c2UoZXhwcmVzc0p3dCh7XG4gIHNlY3JldDogYXV0aC5qd3Quc2VjcmV0LFxuICBjcmVkZW50aWFsc1JlcXVpcmVkOiBmYWxzZSxcbiAgLyoganNjczpkaXNhYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzICovXG4gIGdldFRva2VuOiByZXEgPT4gcmVxLmNvb2tpZXMuaWRfdG9rZW4sXG4gIC8qIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzICovXG59KSk7XG5zZXJ2ZXIudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbnNlcnZlci5nZXQoJy9sb2dpbi9mYWNlYm9vaycsXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7IHNjb3BlOiBbJ2VtYWlsJywgJ3VzZXJfbG9jYXRpb24nXSwgc2Vzc2lvbjogZmFsc2UgfSlcbik7XG5zZXJ2ZXIuZ2V0KCcvbG9naW4vZmFjZWJvb2svcmV0dXJuJyxcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdmYWNlYm9vaycsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJywgc2Vzc2lvbjogZmFsc2UgfSksXG4gIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDE4MDsgLy8gMTgwIGRheXNcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlcS51c2VyLCBhdXRoLmp3dC5zZWNyZXQsIHsgZXhwaXJlc0luIH0pO1xuICAgIHJlcy5jb29raWUoJ2lkX3Rva2VuJywgdG9rZW4sIHsgbWF4QWdlOiAxMDAwICogZXhwaXJlc0luLCBodHRwT25seTogdHJ1ZSB9KTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuKTtcblxuLy9cbi8vIFJlZ2lzdGVyIEFQSSBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2VydmVyLnVzZSgnL2dyYXBocWwnLCBleHByZXNzR3JhcGhRTChyZXEgPT4gKHtcbiAgc2NoZW1hLFxuICBncmFwaGlxbDogdHJ1ZSxcbiAgcm9vdFZhbHVlOiB7IHJlcXVlc3Q6IHJlcSB9LFxuICBwcmV0dHk6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG59KSkpO1xuXG5cbi8vXG4vLyBFbmRwb2ludCB0byB0YWxrIHRvIGxvY2FsaG9zdDo1MDAwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2VydmVyLmdldCgnL2ZsYXNrJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvc3RhdHVzJylcbiAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgfSk7XG4gIHJlcy5zZW5kKCdyZWNlaXZlZCcpO1xufSk7XG5cbi8vXG4vLyBSZWdpc3RlciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnNlcnZlci5nZXQoJyonLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgc3RhdHVzQ29kZSA9IDIwMDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdmlld3MvaW5kZXguamFkZScpO1xuICAgIGNvbnN0IGRhdGEgPSB7IHRpdGxlOiAnJywgZGVzY3JpcHRpb246ICcnLCBjc3M6ICcnLCBib2R5OiAnJywgZW50cnk6IGFzc2V0cy5tYWluLmpzIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgZGF0YS50cmFja2luZ0lkID0gYW5hbHl0aWNzLmdvb2dsZS50cmFja2luZ0lkO1xuICAgIH1cblxuICAgIGNvbnN0IGNzcyA9IFtdO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBpbnNlcnRDc3M6IHN0eWxlcyA9PiBjc3MucHVzaChzdHlsZXMuX2dldENzcygpKSxcbiAgICAgIG9uU2V0VGl0bGU6IHZhbHVlID0+IChkYXRhLnRpdGxlID0gdmFsdWUpLFxuICAgICAgb25TZXRNZXRhOiAoa2V5LCB2YWx1ZSkgPT4gKGRhdGFba2V5XSA9IHZhbHVlKSxcbiAgICAgIG9uUGFnZU5vdEZvdW5kOiAoKSA9PiAoc3RhdHVzQ29kZSA9IDQwNCksXG4gICAgfTtcblxuICAgIGF3YWl0IFJvdXRlci5kaXNwYXRjaCh7IHBhdGg6IHJlcS5wYXRoLCBxdWVyeTogcmVxLnF1ZXJ5LCBjb250ZXh0IH0sIChzdGF0ZSwgY29tcG9uZW50KSA9PiB7XG4gICAgICBkYXRhLmJvZHkgPSBSZWFjdERPTS5yZW5kZXJUb1N0cmluZyhjb21wb25lbnQpO1xuICAgICAgZGF0YS5jc3MgPSBjc3Muam9pbignJyk7XG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpO1xuICAgIHJlcy5zZW5kKHRlbXBsYXRlKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59KTtcblxuLy9cbi8vIEVycm9yIGhhbmRsaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgcGUgPSBuZXcgUHJldHR5RXJyb3IoKTtcbnBlLnNraXBOb2RlRmlsZXMoKTtcbnBlLnNraXBQYWNrYWdlKCdleHByZXNzJyk7XG5cbnNlcnZlci51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb25zb2xlLmxvZyhwZS5yZW5kZXIoZXJyKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICBjb25zdCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdmlld3MvZXJyb3IuamFkZScpO1xuICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnN0YXR1cyB8fCA1MDA7XG4gIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSk7XG4gIHJlcy5zZW5kKHRlbXBsYXRlKHtcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICBzdGFjazogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcnIDogZXJyLnN0YWNrLFxuICB9KSk7XG59KTtcblxuLy9cbi8vIExhdW5jaCB0aGUgc2VydmVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgY29uc29sZS5sb2coYFRoZSBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XG59KTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCB7IGNhblVzZURPTSB9IGZyb20gJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JztcblxubGV0IEVFO1xubGV0IHZpZXdwb3J0ID0geyB3aWR0aDogMTM2NiwgaGVpZ2h0OiA3NjggfTsgLy8gRGVmYXVsdCBzaXplIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbmNvbnN0IFJFU0laRV9FVkVOVCA9ICdyZXNpemUnO1xuXG5mdW5jdGlvbiBoYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gIGlmICh2aWV3cG9ydC53aWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgdmlld3BvcnQuaGVpZ2h0ICE9PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICB2aWV3cG9ydCA9IHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9O1xuICAgIEVFLmVtaXQoUkVTSVpFX0VWRU5ULCB2aWV3cG9ydCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2l0aFZpZXdwb3J0KENvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHJldHVybiBjbGFzcyBXaXRoVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2aWV3cG9ydDogY2FuVXNlRE9NID8geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0gOiB2aWV3cG9ydCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIUVFKSB7XG4gICAgICAgIEVFID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgIH1cblxuICAgICAgRUUub24oUkVTSVpFX0VWRU5ULCB0aGlzLmhhbmRsZVJlc2l6ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBFRS5yZW1vdmVMaXN0ZW5lcihSRVNJWkVfRVZFTlQsIHRoaXMuaGFuZGxlUmVzaXplLCB0aGlzKTtcbiAgICAgIGlmICghRUUubGlzdGVuZXJzKFJFU0laRV9FVkVOVCwgdHJ1ZSkpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgICAgIEVFID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB2aWV3cG9ydD17dGhpcy5zdGF0ZS52aWV3cG9ydH0gLz47XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlld3BvcnQ6IHZhbHVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLXNldC1zdGF0ZVxuICAgIH1cblxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVmlld3BvcnQ7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAnZmJqcy9saWIva2V5TWlycm9yJztcblxuZXhwb3J0IGRlZmF1bHQga2V5TWlycm9yKHtcblxufSk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXR0YWNoRXZlbnQoYG9uJHtldmVudH1gLCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudChgb24ke2V2ZW50fWAsIGxpc3RlbmVyKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcbmltcG9ydCB1c2VRdWVyaWVzIGZyb20gJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnO1xuXG5jb25zdCBsb2NhdGlvbiA9IHVzZVF1ZXJpZXMocHJvY2Vzcy5lbnYuQlJPV1NFUiA/IGNyZWF0ZUhpc3RvcnkgOiBjcmVhdGVNZW1vcnlIaXN0b3J5KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbjtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGRiIGZyb20gJ3BnJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCB7IGRhdGFiYXNlVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLy8gVE9ETzogQ3VzdG9taXplIGRhdGFiYXNlIGNvbm5lY3Rpb24gc2V0dGluZ3Ncbi8qIGpzY3M6ZGlzYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVycyAqL1xuZGIuZGVmYXVsdHMuc3NsID0gdHJ1ZTtcbmRiLmRlZmF1bHRzLnBvb2xTaXplID0gMjtcbmRiLmRlZmF1bHRzLmFwcGxpY2F0aW9uX25hbWUgPSAnUlNLJztcbi8qIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzICovXG5cbi8qKlxuICogUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZvciBwZy5DbGllbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9icmlhbmMvbm9kZS1wb3N0Z3Jlcy93aWtpL0NsaWVudFxuICovXG5mdW5jdGlvbiBBc3luY0NsaWVudChjbGllbnQpIHtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmJpbmQodGhpcyk7XG4gIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKTtcbn1cblxuQXN5bmNDbGllbnQucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gcXVlcnkoc3FsLCAuLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNsaWVudC5xdWVyeShzcWwsIGFyZ3MsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGllbnQucXVlcnkoc3FsLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbkFzeW5jQ2xpZW50LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gIHRoaXMuY2xpZW50LmVuZCgpO1xufTtcblxuLyoqXG4gKiBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZm9yIHBnLmNvbm5lY3QoKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JyaWFuYy9ub2RlLXBvc3RncmVzL3dpa2kvcGdcbiAqL1xuZGIuY29ubmVjdCA9IChjb25uZWN0ID0+IGNhbGxiYWNrID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29ubmVjdC5jYWxsKGRiLCBkYXRhYmFzZVVybCwgKGVyciwgY2xpZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICBkb25lKGNsaWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhuZXcgQXN5bmNDbGllbnQoY2xpZW50KSkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBkb25lKGNsaWVudCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSkpKGRiLmNvbm5lY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyoqXG4gKiBQYXNzcG9ydC5qcyByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uXG4gKiBUaGUgZGF0YWJhc2Ugc2NoZW1hIHVzZWQgaW4gdGhpcyBzYW1wbGUgaXMgYXZhaWxhYmxlIGF0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmRiL3RyZWUvbWFzdGVyL3Bvc3RncmVzXG4gKi9cblxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCB7IFN0cmF0ZWd5IGFzIEZhY2Vib29rU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1mYWNlYm9vayc7XG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBhdXRoIGFzIGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICogU2lnbiBpbiB3aXRoIEZhY2Vib29rLlxuICovXG5wYXNzcG9ydC51c2UobmV3IEZhY2Vib29rU3RyYXRlZ3koe1xuICBjbGllbnRJRDogY29uZmlnLmZhY2Vib29rLmlkLFxuICBjbGllbnRTZWNyZXQ6IGNvbmZpZy5mYWNlYm9vay5zZWNyZXQsXG4gIGNhbGxiYWNrVVJMOiAnL2xvZ2luL2ZhY2Vib29rL3JldHVybicsXG4gIHByb2ZpbGVGaWVsZHM6IFsnbmFtZScsICdlbWFpbCcsICdsaW5rJywgJ2xvY2FsZScsICd0aW1lem9uZSddLFxuICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcbn0sIChyZXEsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpID0+IHtcbiAgY29uc3QgbG9naW5OYW1lID0gJ2ZhY2Vib29rJztcbiAgZGIuY29ubmVjdChhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gICAgaWYgKHJlcS51c2VyKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgMSBGUk9NIHVzZXJfbG9naW4gV0hFUkUgbmFtZSA9ICQxIEFORCBrZXkgPSAkMicsXG4gICAgICAgIGxvZ2luTmFtZSwgcHJvZmlsZS5pZFxuICAgICAgKTtcbiAgICAgIGlmIChyZXN1bHQucm93Q291bnQpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgYWxyZWFkeSBhIEZhY2Vib29rIGFjY291bnQgdGhhdCBiZWxvbmdzIHRvIHlvdS5cbiAgICAgICAgLy8gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LlxuICAgICAgICBkb25lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBxdWVyeShgXG4gICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9hY2NvdW50IChpZCwgZW1haWwpIFNFTEVDVCAkMSwgJDI6OmNoYXJhY3RlclxuICAgICAgICAgICAgV0hFUkUgTk9UIEVYSVNUUyAoU0VMRUNUIDEgRlJPTSB1c2VyX2FjY291bnQgV0hFUkUgaWQgPSAkMSk7YCxcbiAgICAgICAgICByZXEudXNlci5pZCwgcHJvZmlsZS5fanNvbi5lbWFpbCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2xvZ2luICh1c2VyX2lkLCBuYW1lLCBrZXkpIFZBTFVFUyAoJDEsICdmYWNlYm9vaycsICQyKTtgLFxuICAgICAgICAgIHJlcS51c2VyLmlkLCBwcm9maWxlLmlkKTtcbiAgICAgICAgYXdhaXQgcXVlcnkoYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfY2xhaW0gKHVzZXJfaWQsIHR5cGUsIHZhbHVlKSBWQUxVRVNcbiAgICAgICAgICAgICgkMSwgJ3VybjpmYWNlYm9vazphY2Nlc3NfdG9rZW4nLCAkMyk7YCxcbiAgICAgICAgICByZXEudXNlci5pZCwgcHJvZmlsZS5pZCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX3Byb2ZpbGUgKHVzZXJfaWQpIFNFTEVDVCAkMVxuICAgICAgICAgICAgV0hFUkUgTk9UIEVYSVNUUyAoU0VMRUNUIDEgRlJPTSB1c2VyX3Byb2ZpbGUgV0hFUkUgdXNlcl9pZCA9ICQxKTtgLFxuICAgICAgICAgIHJlcS51c2VyLmlkKTtcbiAgICAgICAgYXdhaXQgcXVlcnkoYFxuICAgICAgICAgIFVQREFURSB1c2VyX3Byb2ZpbGUgU0VUXG4gICAgICAgICAgICBkaXNwbGF5X25hbWUgPSBDT0FMRVNDRShOVUxMSUYoZGlzcGxheV9uYW1lLCAnJyksICQyKSxcbiAgICAgICAgICAgIGdlbmRlciAgICAgICA9IENPQUxFU0NFKE5VTExJRihnZW5kZXIsICcnKSwgJDMpLFxuICAgICAgICAgICAgcGljdHVyZSAgICAgID0gQ09BTEVTQ0UoTlVMTElGKHBpY3R1cmUsICcnKSwgJDQpLFxuICAgICAgICAgIFdIRVJFIHVzZXJfaWQgPSAkMTtgLFxuICAgICAgICAgIHJlcS51c2VyLmlkLCBwcm9maWxlLmRpc3BsYXlOYW1lLCBwcm9maWxlLl9qc29uLmdlbmRlcixcbiAgICAgICAgICBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJHtwcm9maWxlLmlkfS9waWN0dXJlP3R5cGU9bGFyZ2VgKTtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICAgIFNFTEVDVCBpZCwgZW1haWwgRlJPTSB1c2VyX2FjY291bnQgV0hFUkUgaWQgPSAkMTtgLFxuICAgICAgICAgIHJlcS51c2VyLmlkKTtcbiAgICAgICAgZG9uZShudWxsLCByZXN1bHQucm93c1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCB1LmlkLCB1LmVtYWlsIEZST00gdXNlcl9hY2NvdW50IEFTIHVcbiAgICAgICAgICBMRUZUIEpPSU4gdXNlcl9sb2dpbiBBUyBsIE9OIGwudXNlcl9pZCA9IHUuaWRcbiAgICAgICAgV0hFUkUgbC5uYW1lID0gJDEgQU5EIGwua2V5ID0gJDJgLCBsb2dpbk5hbWUsIHByb2ZpbGUuaWQpO1xuICAgICAgaWYgKHJlc3VsdC5yb3dDb3VudCkge1xuICAgICAgICBkb25lKG51bGwsIHJlc3VsdC5yb3dzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgMSBGUk9NIHVzZXJfYWNjb3VudCBXSEVSRSBlbWFpbCA9ICQxJywgcHJvZmlsZS5fanNvbi5lbWFpbCk7XG4gICAgICAgIGlmIChyZXN1bHQucm93Q291bnQpIHtcbiAgICAgICAgICAvLyBUaGVyZSBpcyBhbHJlYWR5IGFuIGFjY291bnQgdXNpbmcgdGhpcyBlbWFpbCBhZGRyZXNzLiBTaWduIGluIHRvXG4gICAgICAgICAgLy8gdGhhdCBhY2NvdW50IGFuZCBsaW5rIGl0IHdpdGggRmFjZWJvb2sgbWFudWFsbHkgZnJvbSBBY2NvdW50IFNldHRpbmdzLlxuICAgICAgICAgIGRvbmUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9hY2NvdW50IChlbWFpbCkgVkFMVUVTICgkMSkgUkVUVVJOSU5HIChpZClgLFxuICAgICAgICAgICAgcHJvZmlsZS5fanNvbi5lbWFpbFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdXNlcklkID0gcmVzdWx0LnJvd3NbMF0uaWQ7XG4gICAgICAgICAgYXdhaXQgcXVlcnkoYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9sb2dpbiAodXNlcl9pZCwgbmFtZSwga2V5KSBWQUxVRVMgKCQxLCAnZmFjZWJvb2snLCAkMilgLFxuICAgICAgICAgICAgdXNlcklkLCBwcm9maWxlLmlkKTtcbiAgICAgICAgICBhd2FpdCBxdWVyeShgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2NsYWltICh1c2VyX2lkLCB0eXBlLCB2YWx1ZSkgVkFMVUVTXG4gICAgICAgICAgICAgICgkMSwgJ3VybjpmYWNlYm9vazphY2Nlc3NfdG9rZW4nLCAkMik7YCxcbiAgICAgICAgICAgIHVzZXJJZCwgYWNjZXNzVG9rZW4pO1xuICAgICAgICAgIGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfcHJvZmlsZSAodXNlcl9pZCwgZGlzcGxheV9uYW1lLCBnZW5kZXIsIHBpY3R1cmUpXG4gICAgICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KTtgLFxuICAgICAgICAgICAgdXNlcklkLCBwcm9maWxlLmRpc3BsYXlOYW1lLCBwcm9maWxlLl9qc29uLmdlbmRlcixcbiAgICAgICAgICAgIGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3Byb2ZpbGUuaWR9L3BpY3R1cmU/dHlwZT1sYXJnZWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgaWQsIGVtYWlsIEZST00gdXNlcl9hY2NvdW50IFdIRVJFIGlkID0gJDE7JywgdXNlcklkKTtcbiAgICAgICAgICBkb25lKG51bGwsIHJlc3VsdC5yb3dzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSkuY2F0Y2goZG9uZSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhc3Nwb3J0O1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQge1xuICBHcmFwaFFMU2NoZW1hIGFzIFNjaGVtYSxcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCBtZSBmcm9tICcuL3F1ZXJpZXMvbWUnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9xdWVyaWVzL2NvbnRlbnQnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcXVlcnk6IG5ldyBPYmplY3RUeXBlKHtcbiAgICBuYW1lOiAnUXVlcnknLFxuICAgIGZpZWxkczoge1xuICAgICAgbWUsXG4gICAgICBjb250ZW50LFxuICAgIH0sXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVtcHR5RnVuY3Rpb24gZnJvbSAnZmJqcy9saWIvZW1wdHlGdW5jdGlvbic7XG5pbXBvcnQgcyBmcm9tICcuL0FwcC5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBGZWVkYmFjayBmcm9tICcuLi9GZWVkYmFjayc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaW5zZXJ0Q3NzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2V0VGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25TZXRNZXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uUGFnZU5vdEZvdW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgaW5zZXJ0Q3NzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2V0VGl0bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TZXRNZXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUGFnZU5vdEZvdW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgIHJldHVybiB7XG4gICAgICBpbnNlcnRDc3M6IGNvbnRleHQuaW5zZXJ0Q3NzIHx8IGVtcHR5RnVuY3Rpb24sXG4gICAgICBvblNldFRpdGxlOiBjb250ZXh0Lm9uU2V0VGl0bGUgfHwgZW1wdHlGdW5jdGlvbixcbiAgICAgIG9uU2V0TWV0YTogY29udGV4dC5vblNldE1ldGEgfHwgZW1wdHlGdW5jdGlvbixcbiAgICAgIG9uUGFnZU5vdEZvdW5kOiBjb250ZXh0Lm9uUGFnZU5vdEZvdW5kIHx8IGVtcHR5RnVuY3Rpb24sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGluc2VydENzcyB9ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgIHRoaXMucmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVDc3MoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gIXRoaXMucHJvcHMuZXJyb3IgPyAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8RmVlZGJhY2sgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQ29udGFjdFBhZ2Uuc2Nzcyc7XG5cbmNvbnN0IHRpdGxlID0gJ0NvbnRhY3QgVXMnO1xuXG5jbGFzcyBDb250YWN0UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBvblNldFRpdGxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQub25TZXRUaXRsZSh0aXRsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD4uLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoQ29udGFjdFBhZ2UsIHMpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0NvbnRlbnRQYWdlLnNjc3MnO1xuXG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgb25TZXRUaXRsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250ZXh0Lm9uU2V0VGl0bGUodGhpcy5wcm9wcy50aXRsZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnBhdGggPT09ICcvJyA/IG51bGwgOiA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT59XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuY29udGVudCB8fCAnJyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKENvbnRlbnRQYWdlLCBzKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRmVlZGJhY2suc2Nzcyc7XG5cbmNsYXNzIEZlZWRiYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3MubGlua31cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdHRlci5pbS9rcmlhc29mdC9yZWFjdC1zdGFydGVyLWtpdFwiXG4gICAgICAgICAgPkFzayBhIHF1ZXN0aW9uPC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9Pnw8L3NwYW4+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cy5saW5rfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9yZWFjdC1zdGFydGVyLWtpdC9pc3N1ZXMvbmV3XCJcbiAgICAgICAgICA+UmVwb3J0IGFuIGlzc3VlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKEZlZWRiYWNrLCBzKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vSGVhZGVyLnNjc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9OYXZpZ2F0aW9uJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGNsYXNzTmFtZT17cy5uYXZ9IC8+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmJyYW5kfSB0bz1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuL2xvZ28tc21hbGwucG5nJyl9IHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIGFsdD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5icmFuZFR4dH0+QW50aUNoYXJpdHk8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJhbm5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmJhbm5lclRpdGxlfT5DcmVlZDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MuYmFubmVyRGVzY30+SGVscCB5b3Ugbm90IHRoZW0hITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhIZWFkZXIsIHMpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSAnLi4vLi4vY29yZS9Mb2NhdGlvbic7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgYWxsb3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBsZXQgY2xpY2tSZXN1bHQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIGNsaWNrUmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGlmICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMudG8pIHtcbiAgICAgICAgTG9jYXRpb24ucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvY2F0aW9uLnB1c2goeyBwYXRobmFtZTogbGluay5wYXRobmFtZSwgc2VhcmNoOiBsaW5rLnNlYXJjaCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgcmV0dXJuIDxhIGhyZWY9e0xvY2F0aW9uLmNyZWF0ZUhyZWYodG8pfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpblBhZ2Uuc2Nzcyc7XG5cbmNvbnN0IHRpdGxlID0gJ0xvZyBJbic7XG5cbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBvblNldFRpdGxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQub25TZXRUaXRsZSh0aXRsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD4uLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoTG9naW5QYWdlLCBzKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ob3RGb3VuZFBhZ2Uuc2Nzcyc7XG5cbmNvbnN0IHRpdGxlID0gJ1BhZ2UgTm90IEZvdW5kJztcblxuY2xhc3MgTm90Rm91bmRQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG9uU2V0VGl0bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25QYWdlTm90Rm91bmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5vblNldFRpdGxlKHRpdGxlKTtcbiAgICB0aGlzLmNvbnRleHQub25QYWdlTm90Rm91bmQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8cD5Tb3JyeSwgYnV0IHRoZSBwYWdlIHlvdSB3ZXJlIHRyeWluZyB0byB2aWV3IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKE5vdEZvdW5kUGFnZSwgcyk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vUmVnaXN0ZXJQYWdlLnNjc3MnO1xuXG5jb25zdCB0aXRsZSA9ICdOZXcgVXNlciBSZWdpc3RyYXRpb24nO1xuXG5jbGFzcyBSZWdpc3RlclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgb25TZXRUaXRsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jb250ZXh0Lm9uU2V0VGl0bGUodGl0bGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+Li4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKFJlZ2lzdGVyUGFnZSwgcyk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vTmF2aWdhdGlvbi5zY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnJvb3QsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gcm9sZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+IHwgPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbG9naW5cIj5Mb2cgaW48L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9Pm9yPC9zcGFuPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e2N4KHMubGluaywgcy5oaWdobGlnaHQpfSB0bz1cIi9yZWdpc3RlclwiPlNpZ24gdXA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhOYXZpZ2F0aW9uLCBzKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9UZXh0Qm94LnNjc3MnO1xuXG5jbGFzcyBUZXh0Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1heExpbmVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWF4TGluZXM6IDEsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubWF4TGluZXMgPiAxID9cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIGtleT1cImlucHV0XCJcbiAgICAgICAgICAgICAgcm93cz17dGhpcy5wcm9wcy5tYXhMaW5lc31cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIGtleT1cImlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0Qm94O1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IGphZGUgZnJvbSAnamFkZSc7XG5pbXBvcnQgZm0gZnJvbSAnZnJvbnQtbWF0dGVyJztcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gJ21hcmtkb3duLWl0JztcblxuaW1wb3J0IHtcbiAgR3JhcGhRTFN0cmluZyBhcyBTdHJpbmdUeXBlLFxuICBHcmFwaFFMTm9uTnVsbCBhcyBOb25OdWxsLFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IENvbnRlbnRUeXBlIGZyb20gJy4uL3R5cGVzL0NvbnRlbnRUeXBlJztcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG4vLyBBIGZvbGRlciB3aXRoIEphZGUvTWFya2Rvd24vSFRNTCBjb250ZW50IHBhZ2VzXG5jb25zdCBDT05URU5UX0RJUiA9IGpvaW4oX19kaXJuYW1lLCAnLi9jb250ZW50Jyk7XG5cbi8vIEV4dHJhY3QgJ2Zyb250IG1hdHRlcicgbWV0YWRhdGEgYW5kIGdlbmVyYXRlIEhUTUxcbmNvbnN0IHBhcnNlQ29udGVudCA9IChwYXRoLCBmaWxlQ29udGVudCwgZXh0ZW5zaW9uKSA9PiB7XG4gIGNvbnN0IGZtQ29udGVudCA9IGZtKGZpbGVDb250ZW50KTtcbiAgbGV0IGh0bWxDb250ZW50O1xuICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgIGNhc2UgJy5qYWRlJzpcbiAgICAgIGh0bWxDb250ZW50ID0gamFkZS5yZW5kZXIoZm1Db250ZW50LmJvZHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLm1kJzpcbiAgICAgIGh0bWxDb250ZW50ID0gbWQucmVuZGVyKGZtQ29udGVudC5ib2R5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy5odG1sJzpcbiAgICAgIGh0bWxDb250ZW50ID0gZm1Db250ZW50LmJvZHk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgc210aCA9IE9iamVjdC5hc3NpZ24oeyBwYXRoLCBjb250ZW50OiBodG1sQ29udGVudCB9LCBmbUNvbnRlbnQuYXR0cmlidXRlcyk7XG4gIHJldHVybiBzbXRoO1xufTtcblxuY29uc3QgcmVhZEZpbGUgPSBQcm9taXNlLnByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5jb25zdCBmaWxlRXhpc3RzID0gZmlsZW5hbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIGZzLmV4aXN0cyhmaWxlbmFtZSwgcmVzb2x2ZSk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUV4dGVuc2lvbihwYXRoLCBleHRlbnNpb24pIHtcbiAgbGV0IGZpbGVOYW1lQmFzZSA9IGpvaW4oQ09OVEVOVF9ESVIsIGAke3BhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aH1gKTtcbiAgbGV0IGV4dCA9IGV4dGVuc2lvbjtcbiAgaWYgKCFleHQuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgZXh0ID0gYC4ke2V4dGVuc2lvbn1gO1xuICB9XG5cbiAgbGV0IGZpbGVOYW1lID0gZmlsZU5hbWVCYXNlICsgZXh0O1xuXG4gIGlmICghKGF3YWl0IGZpbGVFeGlzdHMoZmlsZU5hbWUpKSkge1xuICAgIGZpbGVOYW1lQmFzZSA9IGpvaW4oQ09OVEVOVF9ESVIsIGAke3BhdGh9L2luZGV4YCk7XG4gICAgZmlsZU5hbWUgPSBmaWxlTmFtZUJhc2UgKyBleHQ7XG4gIH1cblxuICBpZiAoIShhd2FpdCBmaWxlRXhpc3RzKGZpbGVOYW1lKSkpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmlsZU5hbWUgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUZpbGVOYW1lKHBhdGgpIHtcbiAgY29uc3QgZXh0ZW5zaW9ucyA9IFsnLmphZGUnLCAnLm1kJywgJy5odG1sJ107XG5cbiAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgIGNvbnN0IG1heWJlRmlsZU5hbWUgPSBhd2FpdCByZXNvbHZlRXh0ZW5zaW9uKHBhdGgsIGV4dGVuc2lvbik7XG4gICAgaWYgKG1heWJlRmlsZU5hbWUuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmlsZU5hbWU6IG1heWJlRmlsZU5hbWUuZmlsZU5hbWUsIGV4dGVuc2lvbiB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBmaWxlTmFtZTogbnVsbCwgZXh0ZW5zaW9uOiBudWxsIH07XG59XG5cbmNvbnN0IGNvbnRlbnQgPSB7XG4gIHR5cGU6IENvbnRlbnRUeXBlLFxuICBhcmdzOiB7XG4gICAgcGF0aDogeyB0eXBlOiBuZXcgTm9uTnVsbChTdHJpbmdUeXBlKSB9LFxuICB9LFxuICBhc3luYyByZXNvbHZlKHsgcmVxdWVzdCB9LCB7IHBhdGggfSkge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgZmlsZU5hbWUsIGV4dGVuc2lvbiB9ID0gYXdhaXQgcmVzb2x2ZUZpbGVOYW1lKHBhdGgpO1xuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgcmVhZEZpbGUoZmlsZU5hbWUsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcbiAgICByZXR1cm4gcGFyc2VDb250ZW50KHBhdGgsIHNvdXJjZSwgZXh0ZW5zaW9uKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBVc2VyVHlwZSBmcm9tICcuLi90eXBlcy9Vc2VyVHlwZSc7XG5cbmNvbnN0IG1lID0ge1xuICB0eXBlOiBVc2VyVHlwZSxcbiAgcmVzb2x2ZSh7IHJlcXVlc3QgfSkge1xuICAgIHJldHVybiByZXF1ZXN0LnVzZXIgJiYge1xuICAgICAgaWQ6IHJlcXVlc3QudXNlci5pZCxcbiAgICAgIGVtYWlsOiByZXF1ZXN0LnVzZXIuZW1haWwsXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQge1xuICBHcmFwaFFMT2JqZWN0VHlwZSBhcyBPYmplY3RUeXBlLFxuICBHcmFwaFFMU3RyaW5nIGFzIFN0cmluZ1R5cGUsXG4gIEdyYXBoUUxOb25OdWxsIGFzIE5vbk51bGwsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBDb250ZW50VHlwZSA9IG5ldyBPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0NvbnRlbnQnLFxuICBmaWVsZHM6IHtcbiAgICBwYXRoOiB7IHR5cGU6IG5ldyBOb25OdWxsKFN0cmluZ1R5cGUpIH0sXG4gICAgdGl0bGU6IHsgdHlwZTogbmV3IE5vbk51bGwoU3RyaW5nVHlwZSkgfSxcbiAgICBjb250ZW50OiB7IHR5cGU6IG5ldyBOb25OdWxsKFN0cmluZ1R5cGUpIH0sXG4gICAgY29tcG9uZW50OiB7IHR5cGU6IG5ldyBOb25OdWxsKFN0cmluZ1R5cGUpIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFR5cGU7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7XG4gIEdyYXBoUUxPYmplY3RUeXBlIGFzIE9iamVjdFR5cGUsXG4gIEdyYXBoUUxJRCBhcyBJRCxcbiAgR3JhcGhRTFN0cmluZyBhcyBTdHJpbmdUeXBlLFxuICBHcmFwaFFMTm9uTnVsbCBhcyBOb25OdWxsLFxufSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgVXNlclR5cGUgPSBuZXcgT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdVc2VyJyxcbiAgZmllbGRzOiB7XG4gICAgaWQ6IHsgdHlwZTogbmV3IE5vbk51bGwoSUQpIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nVHlwZSB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUeXBlO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbmV4cG9ydCBjb25zdCBIZWFkZXJzID0gc2VsZi5IZWFkZXJzO1xuZXhwb3J0IGNvbnN0IFJlcXVlc3QgPSBzZWxmLlJlcXVlc3Q7XG5leHBvcnQgY29uc3QgUmVzcG9uc2UgPSBzZWxmLlJlc3BvbnNlO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgZmV0Y2gsIHsgUmVxdWVzdCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB7IGhvc3QgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5mdW5jdGlvbiBsb2NhbFVybCh1cmwpIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgcmV0dXJuIGBodHRwczoke3VybH1gO1xuICB9XG5cbiAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgcmV0dXJuIGBodHRwOi8vJHtob3N0fSR7dXJsfWA7XG59XG5cbmZ1bmN0aW9uIGxvY2FsRmV0Y2godXJsLCBvcHRpb25zKSB7XG4gIHJldHVybiBmZXRjaChsb2NhbFVybCh1cmwpLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IHsgbG9jYWxGZXRjaCBhcyBkZWZhdWx0LCBSZXF1ZXN0LCBIZWFkZXJzLCBSZXNwb25zZSB9O1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0Vycm9yUGFnZS5zY3NzJztcblxuY29uc3QgdGl0bGUgPSAnRXJyb3InO1xuXG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgb25TZXRUaXRsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblBhZ2VOb3RGb3VuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jb250ZXh0Lm9uU2V0VGl0bGUodGl0bGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxwPlNvcnJ5LCBhbiBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBvbiB0aGlzIHBhZ2UuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoRXJyb3JQYWdlLCBzKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRm9vdGVyLnNjc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudGV4dH0+wqkgWW91ciBDb21wYW55PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9PsK3PC9zcGFuPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9PsK3PC9zcGFuPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9wcml2YWN5XCI+UHJpdmFjeTwvTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT7Ctzwvc3Bhbj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbm90LWZvdW5kXCI+Tm90IEZvdW5kPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKEZvb3Rlciwgcyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
