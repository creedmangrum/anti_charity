(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./anti_charity/static/coffee/landing_page.coffee":[function(require,module,exports){
'use strict';
var $, LandingPage, Ractive, _;

require('../css/landing_page.css');

Ractive = require('ractive');

_ = require('underscore');

$ = require('jquery');

LandingPage = Ractive.extend({
  template: require('./templates/landing_page.html'),
  submit_email: function() {
    var email;
    email = this.get('email');
    return $.ajax({
      url: '/api/interested-email',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        'email': email
      }),
      dataType: 'json',
      success: (function(_this) {
        return function(result) {
          _this.set('email', '');
          if (result.email !== void 0) {
            _this.set('success', true);
            return _this.set('message', result.response);
          }
        };
      })(this)
    });
  }
});

$(function() {
  var el, landing_page;
  el = document.getElementById('landing_page');
  return landing_page = new LandingPage({
    el: el
  });
});



},{"../css/landing_page.css":"/Users/creedmangrum/anti_charity/anti_charity/static/css/landing_page.css","./templates/landing_page.html":"/Users/creedmangrum/anti_charity/anti_charity/static/coffee/templates/landing_page.html","jquery":"/Users/creedmangrum/anti_charity/node_modules/jquery/dist/jquery.js","ractive":"/Users/creedmangrum/anti_charity/node_modules/ractive/ractive.runtime.min.js","underscore":"/Users/creedmangrum/anti_charity/node_modules/underscore/underscore.js"}],"/Users/creedmangrum/anti_charity/anti_charity/static/coffee/templates/landing_page.html":[function(require,module,exports){
module.exports={"v":1,"t":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row-fluid"},"f":[{"t":7,"e":"div","a":{"class":"col-md-5"},"f":[{"t":7,"e":"img","a":{"src":"http://d1mqoh213yi928.cloudfront.net/img/anticharity_app_iconRGB-01.png","height":"450px"}}]}," ",{"t":7,"e":"div","a":{"class":"col-md-7"},"f":[{"t":7,"e":"div","a":{"id":"brand-name"},"f":["AntiCharity"]}," ",{"t":7,"e":"div","a":{"id":"mission-statement"},"f":["Our mission is to help you reach your goals. We do this by helping you to NOT help them."]}," ",{"t":7,"e":"div","a":{"id":"help-me-help-you"},"f":[{"t":7,"e":"iframe","a":{"src":"//giphy.com/embed/uRb2p09vY8lEs","width":"480","height":"275","frameBorder":"0","class":"giphy-embed"}}]}," ",{"t":7,"e":"div","a":{"id":"why-landing-page"},"f":["For now this is just a landing page, BUT in the very near and not so distant future, we will be up and running. If you'd like to know more, or just want to be notified when we are live, go ahead and throw your email in the box below."]}," ",{"t":7,"e":"div","a":{"class":"row-fluid"},"f":[{"t":4,"n":50,"r":"success","f":[{"t":7,"e":"div","f":[{"t":2,"r":"message"}]}]},{"t":4,"n":51,"f":[{"t":7,"e":"div","a":{"id":"interested-email"},"f":[{"t":7,"e":"input","a":{"type":"email","placeholder":"Email","value":[{"t":2,"r":"email"}]}}]}," ",{"t":7,"e":"button","a":{"id":"submit-email"},"v":{"click":{"m":"submit_email","a":{"r":[],"s":"[]"}}},"f":["Submit"]}],"r":"success"}]}]}]}]}]}
},{}],"/Users/creedmangrum/anti_charity/anti_charity/static/css/landing_page.css":[function(require,module,exports){
var css = ""; (require("/Users/creedmangrum/anti_charity/node_modules/browserify-css").createStyle(css, { "href": "../../../anti_charity/static/css/landing_page.css"})); module.exports = css;
},{"/Users/creedmangrum/anti_charity/node_modules/browserify-css":"/Users/creedmangrum/anti_charity/node_modules/browserify-css/browser.js"}],"/Users/creedmangrum/anti_charity/node_modules/browserify-css/browser.js":[function(require,module,exports){
//
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.
//

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) {
            style.sheet.cssText = cssText;
        } else if (style.styleSheet) {
            style.styleSheet.cssText = cssText;
        } else {
            style.appendChild(document.createTextNode(cssText));
        }

        head.appendChild(style);
    }
};

},{}],"/Users/creedmangrum/anti_charity/node_modules/jquery/dist/jquery.js":[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

},{}],"/Users/creedmangrum/anti_charity/node_modules/ractive/ractive.runtime.min.js":[function(require,module,exports){
/*
	ractive.runtime.min.js v0.6.1
	2014-10-25 - commit 3a576eb3 

	http://ractivejs.org
	http://twitter.com/RactiveJS

	Released under the MIT License.
*/

!function(a){"use strict";var b=a.Ractive,c=function(){var a={el:void 0,append:!1,template:{v:1,t:[]},"yield":null,preserveWhitespace:!1,sanitize:!1,stripComments:!0,data:{},computed:{},magic:!1,modifyArrays:!0,adapt:[],isolated:!1,twoway:!0,lazy:!1,noIntro:!1,transitionsEnabled:!0,complete:void 0,noCssTransform:!1,debug:!1};return a}(),d={linear:function(a){return a},easeIn:function(a){return Math.pow(a,3)},easeOut:function(a){return Math.pow(a-1,3)+1},easeInOut:function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)}},e=[],f=Object.prototype.hasOwnProperty,g=function(){var a=Object.prototype.toString;return function(b){return"[object Array]"===a.call(b)}}(),h=function(){var a=Object.prototype.toString;return function(b){return b&&"[object Object]"===a.call(b)}}(),i=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},j=function(a,b,c,d,e){var f,g,h;return a.push(function(){g=a.interpolate}),h=/^([+-]?[0-9]+\.?(?:[0-9]+)?)(px|em|ex|%|in|cm|mm|pt|pc)$/,f={number:function(a,b){var c;return e(a)&&e(b)?(a=+a,b=+b,c=b-a,c?function(b){return a+b*c}:function(){return a}):null},array:function(a,b){var d,e,f,h;if(!c(a)||!c(b))return null;for(d=[],e=[],h=f=Math.min(a.length,b.length);h--;)e[h]=g(a[h],b[h]);for(h=f;h<a.length;h+=1)d[h]=a[h];for(h=f;h<b.length;h+=1)d[h]=b[h];return function(a){for(var b=f;b--;)d[b]=e[b](a);return d}},object:function(a,c){var e,f,h,i,j;if(!d(a)||!d(c))return null;e=[],i={},h={};for(j in a)b.call(a,j)&&(b.call(c,j)?(e.push(j),h[j]=g(a[j],c[j])):i[j]=a[j]);for(j in c)b.call(c,j)&&!b.call(a,j)&&(i[j]=c[j]);return f=e.length,function(a){for(var b,c=f;c--;)b=e[c],i[b]=h[b](a);return i}}}}(e,f,g,h,i),k=function(){var a;return a="undefined"==typeof document?!1:document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}(),l=function(){var a,b={};return a="undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply?function(a,c){if(!c){if(b[a])return;b[a]=!0}console.warn("%cRactive.js: %c"+a,"color: rgb(114, 157, 52);","color: rgb(85, 85, 85);")}:function(){}}(),m={missingParser:"Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser",mergeComparisonFail:"Merge operation: comparison failed. Falling back to identity checking",noComponentEventArguments:"Components currently only support simple events - you cannot include arguments. Sorry!",noTemplateForPartial:'Could not find template for partial "{name}"',noNestedPartials:"Partials ({{>{name}}}) cannot contain nested inline partials",evaluationError:'Error evaluating "{uniqueString}": {err}',badArguments:"Bad arguments \"{arguments}\". I'm not allowed to argue unless you've paid.",failedComputation:'Failed to compute "{key}": {err}',missingPlugin:'Missing "{name}" {plugin} plugin. You may need to download a {plugin} via http://docs.ractivejs.org/latest/plugins#{plugin}s',badRadioInputBinding:"A radio input can have two-way binding on its name attribute, or its checked attribute - not both",noRegistryFunctionReturn:'A function was specified for "{name}" {registry}, but no {registry} was returned',defaultElSpecified:"The <{name}/> component has a default `el` property; it has been disregarded",noElementProxyEventWildcards:'Only component proxy-events may contain "*" wildcards, <{element} on-{event}/> is not valid.',methodDeprecated:'The method "{deprecated}" has been deprecated in favor of "{replacement}" and will likely be removed in a future release. See http://docs.ractivejs.org/latest/migrating for more information.'},n=function(a,b){function c(a){var c=b[a.message]||a.message||"";return d(c,a.args)}function d(a,b){return a.replace(/{([^{}]*)}/g,function(a,c){return b[c]})}var e={warn:function(a,b){(a.debug||b)&&this.warnAlways(a)},warnAlways:function(a){this.logger(c(a),a.allowDuplicates)},error:function(a){this.errorOnly(a),a.debug||this.warn(a,!0)},errorOnly:function(a){a.debug&&this.critical(a)},critical:function(a){var b=a.err||new Error(c(a));this.thrower(b)},logger:a,thrower:function(a){throw a}};return e}(l,m),o=function(a){function b(a){this.event=a,this.method="on"+a,this.deprecate=c[a]}var c={construct:{deprecated:"beforeInit",replacement:"onconstruct"},render:{deprecated:"init",message:'The "init" method has been deprecated and will likely be removed in a future release. You can either use the "oninit" method which will fire only once prior to, and regardless of, any eventual ractive instance being rendered, or if you need to access the rendered DOM, use "onrender" instead. See http://docs.ractivejs.org/latest/migrating for more information.'},complete:{deprecated:"complete",replacement:"oncomplete"}};return b.prototype.fire=function(b,c){function d(a){return b[a]?(c?b[a](c):b[a](),!0):void 0}d(this.method),!b[this.method]&&this.deprecate&&d(this.deprecate.deprecated)&&a.warnAlways({debug:b.debug,message:this.deprecate.message||"methodDeprecated",args:this.deprecate}),c?b.fire(this.event,c):b.fire(this.event)},b}(n),p=function(a,b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},q=function(){function a(a){setTimeout(a,0)}function b(a,b){return function(){for(var c;c=a.shift();)c(b)}}function c(a,b,d,f){var g;if(b===a)throw new TypeError("A promise's fulfillment handler cannot return the same promise");if(b instanceof e)b.then(d,f);else if(!b||"object"!=typeof b&&"function"!=typeof b)d(b);else{try{g=b.then}catch(h){return void f(h)}if("function"==typeof g){var i,j,k;j=function(b){i||(i=!0,c(a,b,d,f))},k=function(a){i||(i=!0,f(a))};try{g.call(b,j,k)}catch(h){if(!i)return f(h),void(i=!0)}}else d(b)}}var d,e,f={},g={},h={};return"function"==typeof q?e=q:(e=function(d){var i,j,k,l,m,n,o=[],p=[],q=f;k=function(c){return function(d){q===f&&(i=d,q=c,j=b(q===g?o:p,i),a(j))}},l=k(g),m=k(h);try{d(l,m)}catch(r){m(r)}return n={then:function(b,d){var g=new e(function(e,h){var i=function(a,b,d){b.push("function"==typeof a?function(b){var d;try{d=a(b),c(g,d,e,h)}catch(f){h(f)}}:d)};i(b,o,e),i(d,p,h),q!==f&&a(j)});return g}},n["catch"]=function(a){return this.then(null,a)},n},e.all=function(a){return new e(function(b,c){var d,e,f,g=[];if(!a.length)return void b(g);for(f=function(e){a[e].then(function(a){g[e]=a,--d||b(g)},c)},d=e=a.length;e--;)f(e)})},e.resolve=function(a){return new e(function(b){b(a)})},e.reject=function(a){return new e(function(b,c){c(a)})}),d=e}(),r=function(){var a=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g;return function(b){return(b||"").replace(a,".$1")}}(),s=function(a){do if(void 0!==a.context)return a.context;while(a=a.parent);return""},t=function(a,b){return null===a&&null===b?!0:"object"==typeof a||"object"==typeof b?!1:a===b},u=function(a,b){function c(a,b){var c=a.computations[b];return!c||c.setter}var d;a.push(function(){return d=a.runloop});var e=function(a,b,c,d){var e=this;this.root=a,this.keypath=b,this.otherInstance=c,this.otherKeypath=d,this.lock=function(){return e.updating=!0},this.unlock=function(){return e.updating=!1},this.bind(),this.value=this.root.viewmodel.get(this.keypath)};return e.prototype={isLocked:function(){return this.updating||this.counterpart&&this.counterpart.updating},shuffle:function(a,b){this.propagateChange(b,a)},setValue:function(a){this.propagateChange(a)},propagateChange:function(a,e){var f;return this.isLocked()?void(this.value=a):void(b(a,this.value)||(this.lock(),d.addViewmodel(f=this.otherInstance.viewmodel)||this.counterpart.value===a||d.scheduleTask(function(){return d.addViewmodel(f)}),e?f.smartUpdate(this.otherKeypath,a,e):c(f,this.otherKeypath)&&f.set(this.otherKeypath,a),this.value=a,d.scheduleTask(this.unlock)))},refineValue:function(a){var b,c=this;this.isLocked()||(this.lock(),d.addViewmodel(b=this.otherInstance.viewmodel),a.map(function(a){return c.otherKeypath+a.substr(c.keypath.length)}).forEach(function(a){return b.mark(a)}),d.scheduleTask(this.unlock))},bind:function(){this.root.viewmodel.register(this.keypath,this)},rebind:function(a){this.unbind(),this.keypath=a,this.counterpart.otherKeypath=a,this.bind()},unbind:function(){this.root.viewmodel.unregister(this.keypath,this)}},function(a,b,c,d){var f,g,h,i,j;f=c+"="+d,h=a.bindings,h[f]||(g=a.instance,i=new e(b,c,g,d),h.push(i),g.twoway&&(j=new e(g,d,b,c),h.push(j),i.counterpart=j,j.counterpart=i),h[f]=i)}}(e,t),v=function(a,b,c){function d(a,b){var c;if("."===b)return a;if(c=a?a.split("."):[],"../"===b.substr(0,3)){for(;"../"===b.substr(0,3);){if(!c.length)throw new Error(f);c.pop(),b=b.substring(3)}return c.push(b),c.join(".")}return a?a+b.replace(/^\.\//,"."):b.replace(/^\.\/?/,"")}var e,f,g;return f='Could not resolve reference - too many "../" prefixes',g={evaluateWrapped:!0},e=function h(e,f,i,j){var k,l,m,n,o,p,q,r,s,t;if(f=a(f),"~/"===f.substr(0,2))return f.substring(2);if("."===f.charAt(0))return d(b(i),f);l=f.split(".")[0],i=i||{};do if(k=i.context,k&&(p=!0,o=e.viewmodel.get(k,g),o&&("object"==typeof o||"function"==typeof o)&&l in o))return k+"."+f;while(i=i.parent);if(l in e.data||l in e.viewmodel.computations)return f;if(e._parent&&!e.isolated){if(p=!0,i=e.component.parentFragment,i.indexRefs&&void 0!==(m=i.indexRefs[f]))return e.component.indexRefBindings[f]=f,void e.viewmodel.set(f,m,!0);if(n=h(e._parent,f,i,!0)){for(q=n.split("."),r=f.split(".");q.length>1&&r.length>1&&q[q.length-1]===r[r.length-1];)q.pop(),r.pop();return s=q.join("."),t=r.join("."),e.viewmodel.set(t,e._parent.viewmodel.get(s),!0),c(e.component,e._parent,s,t),f}}return j||p?void 0!==e.viewmodel.get(f)?f:void 0:(e.viewmodel.set(f,void 0),f)}}(r,s,u),w=function(a){function b(a){a.detach()}function c(a){a.detachNodes()}function d(a){!a.ready||a.outros.length||a.outroChildren||(a.outrosComplete||(a.parent?a.parent.decrementOutros(a):a.detachNodes(),a.outrosComplete=!0),a.intros.length||a.totalChildren||("function"==typeof a.callback&&a.callback(),a.parent&&a.parent.decrementTotal()))}var e=function(a,b){this.callback=a,this.parent=b,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.outrosComplete=!1,b&&b.addChild(this)};return e.prototype={addChild:function(a){this.children.push(a),this.totalChildren+=1,this.outroChildren+=1},decrementOutros:function(){this.outroChildren-=1,d(this)},decrementTotal:function(){this.totalChildren-=1,d(this)},add:function(a){var b=a.isIntro?this.intros:this.outros;b.push(a)},remove:function(b){var c=b.isIntro?this.intros:this.outros;a(c,b),d(this)},init:function(){this.ready=!0,d(this)},detachNodes:function(){this.detachQueue.forEach(b),this.children.forEach(c)}},e}(p),x=function(a,b,c,d,e,f){function g(){var a,b,c;for(a=0;a<k.viewmodels.length;a+=1)b=k.viewmodels[a],c=b.applyChanges(),c&&n.fire(b.ractive,c);for(k.viewmodels.length=0,h(),a=0;a<k.views.length;a+=1)k.views[a].update();for(k.views.length=0,a=0;a<k.tasks.length;a+=1)k.tasks[a]();return k.tasks.length=0,k.viewmodels.length?g():void 0}function h(){var a,b,c,d;for(a=m.length;a--;)b=m[a],b.keypath&&m.splice(a,1),(c=e(b.root,b.ref,b.parentFragment))&&((d||(d=[])).push({item:b,keypath:c}),m.splice(a,1));d&&d.forEach(i)}function i(a){a.item.resolve(a.keypath)}var j,k,l,m=[],n=new b("change");return l={start:function(a,b){var c,e;return b&&(c=new d(function(a){return e=a})),k={previousBatch:k,transitionManager:new f(e,k&&k.transitionManager),views:[],tasks:[],viewmodels:[],instance:a},a&&k.viewmodels.push(a.viewmodel),c},end:function(){g(),k.transitionManager.init(),!k.previousBatch&&k.instance&&(k.instance.viewmodel.changes=[]),k=k.previousBatch},addViewmodel:function(a){return k?-1===k.viewmodels.indexOf(a)?(k.viewmodels.push(a),!0):!1:(a.applyChanges(),!1)},registerTransition:function(a){a._manager=k.transitionManager,k.transitionManager.add(a)},addView:function(a){k.views.push(a)},addUnresolved:function(a){m.push(a)},removeUnresolved:function(a){c(m,a)},detachWhenReady:function(a){k.transitionManager.detachQueue.push(a)},scheduleTask:function(a,b){var c;if(k){for(c=k;b&&c.previousBatch;)c=c.previousBatch;c.tasks.push(a)}else a()}},a.runloop=l,j=l}(e,o,p,q,v,w),y=function(){var a=/^\s*[0-9]+\s*$/;return function(b){return a.test(b)?[]:{}}}(),z=function(a,b,c){function d(b,c,d){function e(b){var d,e;b.value=c,b.updating||(e=b.ractive,d=b.keypath,b.updating=!0,a.start(e),e.viewmodel.mark(d),a.end(),b.updating=!1)}var f,g,h,i,j,k;if(f=b.obj,g=b.prop,d&&!d.configurable){if("length"===g)return;throw new Error('Cannot use magic mode with property "'+g+'" - object is not configurable')}d&&(h=d.get,i=d.set),j=h||function(){return c},k=function(a){i&&i(a),c=h?h():a,k._ractiveWrappers.forEach(e)},k._ractiveWrappers=[b],Object.defineProperty(f,g,{get:j,set:k,enumerable:!0,configurable:!0})}var e,f,g;try{Object.defineProperty({},"test",{value:0}),f={filter:function(a,b,d){var e,f,g,h,i;return b?(e=b.split("."),f=e.pop(),g=e.join("."),(h=d.viewmodel.wrapped[g])&&!h.magic?!1:(i=d.get(g),c(i)&&/^[0-9]+$/.test(f)?!1:i&&("object"==typeof i||"function"==typeof i))):!1},wrap:function(a,b,c){return new g(a,b,c)}},g=function(a,b,c){var e,f,g,h;return this.magic=!0,this.ractive=a,this.keypath=c,this.value=b,e=c.split("."),this.prop=e.pop(),f=e.join("."),this.obj=f?a.get(f):a.data,g=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),g&&g.set&&(h=g.set._ractiveWrappers)?void(-1===h.indexOf(this)&&h.push(this)):void d(this,b,g)},g.prototype={get:function(){return this.value},reset:function(b){this.updating||(this.updating=!0,this.obj[this.prop]=b,a.addViewmodel(this.ractive.viewmodel),this.ractive.viewmodel.mark(this.keypath),this.updating=!1)},set:function(a,c){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=b(a),this.updating=!1),this.obj[this.prop][a]=c)},teardown:function(){var a,b,c,d,e;return this.updating?!1:(a=Object.getOwnPropertyDescriptor(this.obj,this.prop),b=a&&a.set,void(b&&(d=b._ractiveWrappers,e=d.indexOf(this),-1!==e&&d.splice(e,1),d.length||(c=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=c))))}}}catch(h){f=!1}return e=f}(x,y,g),A=function(a){return!!a}(z),B={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},C=function(a,b){var c;return c=a?function(a,c){return c&&c!==b.html?document.createElementNS(c,a):document.createElement(a)}:function(a,c){if(c&&c!==b.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information";return document.createElement(a)}}(k,B),D=function(){var a="object"==typeof document;return a}(),E=function(a){var b;try{Object.defineProperty({},"test",{value:0}),a&&Object.defineProperty(document.createElement("div"),"test",{value:0}),b=Object.defineProperty}catch(c){b=function(a,b,c){a[b]=c.value}}return b}(D),F=function(a,b,c){var d;try{try{Object.defineProperties({},{test:{value:0}})}catch(e){throw e}c&&Object.defineProperties(a("div"),{test:{value:0}}),d=Object.defineProperties}catch(e){d=function(a,c){var d;for(d in c)c.hasOwnProperty(d)&&b(a,d,c[d])}}return d}(C,E,D),G=function(a){return function(b,c,d){var e;if("string"!=typeof c||!a(d))throw new Error("Bad arguments");if(e=+b.get(c)||0,!a(e))throw new Error("Cannot add to a non-numeric value");return b.set(c,e+d)}}(i),H=function(a){return function(b,c){return a(this,b,void 0===c?1:+c)}}(G),I=function(a){var b=/^\.+/;return function(c){return a(c).replace(b,"")}}(r),J=["o","ms","moz","webkit"],K=function(a){var b;return"undefined"==typeof window?b=null:(!function(a,b,c){var d,e;if(!c.requestAnimationFrame){for(d=0;d<a.length&&!c.requestAnimationFrame;++d)c.requestAnimationFrame=c[a[d]+"RequestAnimationFrame"];c.requestAnimationFrame||(e=c.setTimeout,c.requestAnimationFrame=function(a){var c,d,f;return c=Date.now(),d=Math.max(0,16-(c-b)),f=e(function(){a(c+d)},d),b=c+d,f})}}(a,0,window),b=window.requestAnimationFrame),b}(J),L=function(){var a;return a="undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),M=function(a,b,c){var d=[],e={tick:function(){var f,g,h;for(h=b(),c.start(),f=0;f<d.length;f+=1)g=d[f],g.tick(h)||d.splice(f--,1);c.end(),d.length?a(e.tick):e.running=!1},add:function(b){d.push(b),e.running||(e.running=!0,a(e.tick))},abort:function(a,b){for(var c,e=d.length;e--;)c=d[e],c.root===b&&c.keypath===a&&c.stop()}};return e}(K,L,x),N=function(){function a(a){return a.trim?a.trim():a.replace(/^\s+/,"").replace(/\s+$/,"")}function b(a){return a.str}var c,d=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,e=/\/\*.*?\*\//g,f=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~]+)?\s*[\s\+\>\~]?)\s*/g,g=/^@media/,h=/\[data-rvcguid="[a-z0-9-]+"]/g;return c=function(c,i){var j,k;return k=function(a){var c,d,e,g,h,j,k,l,m=[];for(c=[];d=f.exec(a);)c.push({str:d[0],base:d[1],modifiers:d[2]});for(g='[data-rvcguid="'+i+'"]',h=c.map(b),l=c.length;l--;)k=h.slice(),e=c[l],k[l]=e.base+g+e.modifiers||"",j=h.slice(),j[l]=g+" "+j[l],m.push(k.join(" "),j.join(" "));return m.join(", ")},j=h.test(c)?c.replace(h,'[data-rvcguid="'+i+'"]'):c.replace(e,"").replace(d,function(b,c){var d,e;return g.test(c)?b:(d=c.split(",").map(a),e=d.map(k).join(", ")+" ",b.replace(c,e))})}}(),O=function(a){function b(a,b,d){var e,f=b.constructor._guid;(e=c(d.css,d,f)||c(a.css,a,f))&&(b.constructor.css=e)}function c(b,c,d){return b?c.noCssTransform?b:a(b,d):void 0}var d={name:"css",extend:b,init:function(){}};return d}(N),P=function(){function a(a,b){return"function"==typeof b&&/_super/.test(a)}var b;return b=function(b,c,d){return d||a(b,c)?function(){var a,d="_super"in this,e=this._super;return this._super=c,a=b.apply(this,arguments),d&&(this._super=e),a}:b}}(),Q=function(a){function b(a,b,c){var d=c.data||{},e=f(a.prototype.data);if("object"!=typeof d&&"function"!=typeof d)throw new TypeError('data option must be an object or a function, "'+d+'" is not valid');return g(e,d)}function c(a,c,d){c.data=b(a,c,d)}function d(a,c,d){var e=d.data,f=b(a,c,d);return"function"==typeof f&&(f=f.call(c,e)||e),c.data=f||{}}function e(a){var b=this.init(a.constructor,a,a);return b?(a.data=b,!0):void 0}function f(a){if("function"!=typeof a||!Object.keys(a).length)return a;var b={};return h(a,b),g(a,b)}function g(a,b){return"function"==typeof b?k(b,a):"function"==typeof a?j(b,a):i(b,a)}function h(a,b,c){for(var d in a)c&&d in b||(b[d]=a[d])}function i(a,b){return a=a||{},b?(h(b,a,!0),a):a}function j(a,b){return function(c){var d;if(a){d=[];for(var e in a)c&&e in c||d.push(e)}return c=b.call(this,c)||c,d&&d.length&&(c=c||{},d.forEach(function(b){c[b]=a[b]})),c}}function k(b,c){var d;return d="function"!=typeof c?function(a){i(a,c)}:function(b){return c=a(c,function(){},!0),c.call(this,b)||b},a(b,d)}var l,m={name:"data",extend:c,init:d,reset:e};return l=m}(P),R=null,S=function(){var a;try{Object.create(null),a=Object.create}catch(b){a=function(){var a=function(){};return function(b,c){var d;return null===b?{}:(a.prototype=b,d=new a,c&&Object.defineProperties(d,c),d)}}()}return a}(),T=null,U=function(){return function(a,b){var c=a.map(b);return a.forEach(function(a,b){c[a]=c[b]}),c}}(T),V=function(a){var b,c;return b=["preserveWhitespace","sanitize","stripComments","delimiters","tripleDelimiters","interpolate"],c=a(b,function(a){return a})}(U),W=function(a,b,c,d,e){function f(a){var b=d(l);return b.parse=function(b,c){return g(b,c||a)},b}function g(b,d){if(!c)throw new Error(a.missingParser);return c(b,d||this.options)}function h(a,c){var d;if(!b){if(c&&c.noThrow)return;throw new Error("Cannot retrieve template #"+a+" as Ractive is not running in a browser.")}if(i(a)&&(a=a.substring(1)),!(d=document.getElementById(a))){if(c&&c.noThrow)return;throw new Error("Could not find template element with id #"+a)}if("SCRIPT"!==d.tagName.toUpperCase()){if(c&&c.noThrow)return;throw new Error("Template element with id #"+a+", must be a <script> element")}return d.innerHTML}function i(a){return a&&"#"===a.charAt(0)}function j(a){return!("string"==typeof a)}function k(a){return a.defaults&&(a=a.defaults),e.reduce(function(b,c){return b[c]=a[c],b},{})}var l={parse:g,fromId:h,isHashedId:i,isParsed:j,getParseOptions:k,createHelper:f};return l}(m,D,R,S,V),X=function(a,b){function c(a){var b,c=a._config.template;if(c&&c.fn)return b=d(a,c.fn),b!==c.result?(c.result=b,b=e(b,a)):void 0}function d(b,c){var d=a.createHelper(a.getParseOptions(b));return c.call(b,b.data,d)}function e(c,d){if("string"==typeof c)"#"===c[0]&&(c=a.fromId(c)),c=b(c,a.getParseOptions(d));else if(1!==c.v)throw new Error("Mismatched template version! Please ensure you are using the latest version of Ractive.js in your build process as well as in your app");return c}function f(a,b,c){if(b)for(var d in b)(c||!a.hasOwnProperty(d))&&(a[d]=b[d])}var g={name:"template",extend:function(a,b,c){var d;"template"in c&&(d=c.template,b.template="function"==typeof d?d:e(d,b))},init:function(a,b,c){var g,h;g="template"in c?c.template:a.prototype.template,"function"==typeof g&&(h=g,g=d(b,h),b._config.template={fn:h,result:g}),g=e(g,b),b.template=g.t,g.p&&f(b.partials,g.p)},reset:function(a){var b,d=c(a);return d?(b=e(d,a),a.template=b.t,f(a.partials,b.p,!0),!0):void 0}};return g}(W,R),Y=function(a){function b(a,b){this.name=a,this.useDefaults=b}function c(a,b){var d,e;return(d=b(a))?d:!a.isolated&&(e=a._parent)?c(e,b):void 0}return b.prototype={constructor:b,extend:function(a,b,c){this.configure(this.useDefaults?a.defaults:a,this.useDefaults?b:b.constructor,c)},init:function(a,b,c){this.configure(this.useDefaults?a.defaults:a,b,c)},configure:function(b,c,d){var e,f=this.name,g=d[f];e=a(b[f]);for(var h in g)e[h]=g[h];c[f]=e},reset:function(a){var b=a[this.name],c=!1;return Object.keys(b).forEach(function(a){var d=b[a];d._fn&&(d._fn.isOwner?b[a]=d._fn:delete b[a],c=!0)}),c},findOwner:function(a,b){return a[this.name].hasOwnProperty(b)?a:this.findConstructor(a.constructor,b)},findConstructor:function(a,b){return a?a[this.name].hasOwnProperty(b)?a:this.findConstructor(a._parent,b):void 0},find:function(a,b){var d=this;return c(a,function(a){return a[d.name][b]})},findInstance:function(a,b){var d=this;return c(a,function(a){return a[d.name][b]?a:void 0})}},b}(S,T),Z=function(a,b){var c=["adaptors","components","computed","decorators","easing","events","interpolators","partials","transitions"],d=a(c,function(a){return new b(a,"computed"===a)});return d}(U,Y),$=function(){},_=function(a){function b(b,c){var d;if(c in b){var e=b[c];d="function"==typeof e?e:function(){return e}}else d=a;return d}var c;return c=function(a,c,d){if(!/_super/.test(d))return d;var e=function(){var a,f=b(e._parent,c),g="_super"in this,h=this._super;return this._super=f,a=d.apply(this,arguments),g?this._super=h:delete this._super,a};return e._parent=a,e._method=d,e}}($),ab=function(a,b){function c(b,c,e){if(c in b){if(e in b)throw new Error(d(c,e,!0));a(d(c,e)),b[e]=b[c]}}function d(a,b,c){return"options."+a+" has been deprecated in favour of options."+b+"."+(c?" You cannot specify both options, please use options."+b+".":"")}function e(a){c(a,"eventDefinitions","events")}function f(a){b(a.adaptors)&&c(a,"adaptors","adapt")}return function(a){c(a,"beforeInit","onconstruct"),c(a,"init","onrender"),c(a,"complete","oncomplete"),e(a),f(a)}}(l,g),bb=function(a,b,c,d,e,f,g,h){function i(a,b,c,d,e){m[b][a](c,d,e)}function j(a){return a in c&&!(a in o.parseOptions)&&!(a in m)}function k(a,b,c,d){h(d),i(a,"data",b,c,d),o.parseOptions.forEach(function(a){a in d&&(c[a]=d[a])});for(var e in d)if(j(e)){var f=d[e];c[e]="function"==typeof f?g(b.prototype,e,f):f}o.registries.forEach(function(e){e[a](b,c,d)}),i(a,"template",b,c,d),i(a,"css",b,c,d),l(b.prototype,c,d)}function l(a,b,c){for(var d in c)if(!(d in p)&&c.hasOwnProperty(d)){var e=c[d];"function"==typeof e&&(e=g(a,d,e)),b[d]=e}}var m,n,o,p;p={_parent:!0,_component:!0},m={data:b,template:d,css:a},n=Object.keys(c).filter(function(a){return!f[a]&&!m[a]&&!e[a]}),o=[].concat(m.data,e,n,f,m.template,m.css);for(var q in m)o[q]=m[q];return o.keys=Object.keys(c).concat(f.map(function(a){return a.name})).concat(["css"]),o.keys.forEach(function(a){return p[a]=!0}),o.parseOptions=e,o.registries=f,o.extend=function(a,b,c){k("extend",a,b,c)},o.init=function(a,b,c){k("init",a,b,c)},o.reset=function(a){return o.filter(function(b){return b.reset&&b.reset(a)}).map(function(a){return a.name})},o.getConstructTarget=function(a,b){return b.onconstruct?{onconstruct:g(a,"onconstruct",b.onconstruct).bind(a),fire:a.fire.bind(a)}:a},o}(O,Q,c,X,V,Z,_,ab),cb=function(a,b,c,d){function e(a){return function(){return a}}var f,g=function(a,f,g,h){if(a===f)return e(f);if(h){var i=d.registries.interpolators.find(g,h);if(i)return i(a,f)||e(f);b('Missing "'+h+'" interpolator. You may need to download a plugin from [TODO]')}return c.number(a,f)||c.array(a,f)||c.object(a,f)||e(f)};return a.interpolate=g,f=g}(e,l,j,bb),db=function(a,b,c){var d=function(a){var b;this.startTime=Date.now();for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);this.interpolator=c(this.from,this.to,this.root,this.interpolator),this.running=!0,this.tick()};return d.prototype={tick:function(){var c,d,e,f,g,h;return h=this.keypath,this.running?(f=Date.now(),c=f-this.startTime,c>=this.duration?(null!==h&&(b.start(this.root),this.root.viewmodel.set(h,this.to),b.end()),this.step&&this.step(1,this.to),this.complete(this.to),g=this.root._animations.indexOf(this),-1===g&&a("Animation was not found"),this.root._animations.splice(g,1),this.running=!1,!1):(d=this.easing?this.easing(c/this.duration):c/this.duration,null!==h&&(e=this.interpolator(d),b.start(this.root),this.root.viewmodel.set(h,e),b.end()),this.step&&this.step(d,e),!0)):!1},stop:function(){var b;this.running=!1,b=this.root._animations.indexOf(this),-1===b&&a("Animation was not found"),this.root._animations.splice(b,1)}},d}(l,x,cb),eb=function(a,b,c,d,e){function f(b,f,g,h){var j,k,l,m;return f&&(f=c(f)),null!==f&&(m=b.viewmodel.get(f)),d.abort(f,b),a(m,g)?(h.complete&&h.complete(h.to),i):(h.easing&&(j="function"==typeof h.easing?h.easing:b.easing[h.easing],"function"!=typeof j&&(j=null)),k=void 0===h.duration?400:h.duration,l=new e({keypath:f,from:m,to:g,root:b,duration:k,easing:j,interpolator:h.interpolator,step:h.step,complete:h.complete}),d.add(l),b._animations.push(l),l)}var g,h=function(){},i={stop:h};return g=function(a,c,d){var e,g,i,j,k,l,m,n,o,p,q,r,s,t;if(e=new b(function(a){g=a}),"object"==typeof a){d=c||{},l=d.easing,m=d.duration,k=[],n=d.step,o=d.complete,(n||o)&&(q={},d.step=null,d.complete=null,p=function(a){return function(b,c){q[a]=c}});for(i in a)a.hasOwnProperty(i)&&((n||o)&&(r=p(i),d={easing:l,duration:m},n&&(d.step=r)),d.complete=o?r:h,k.push(f(this,i,a[i],d)));return t={easing:l,duration:m},n&&(t.step=function(a){n(a,q)}),o&&e.then(function(a){o(a,q)}),t.complete=g,s=f(this,null,null,t),k.push(s),e.stop=function(){for(var a;a=k.pop();)a.stop();s&&s.stop()},e}return d=d||{},d.complete&&e.then(d.complete),d.complete=g,j=f(this,a,c,d),e.stop=function(){j.stop()},e}}(t,q,I,M,db),fb=function(a,b){var c=new a("detach");return function(){return this.detached?this.detached:(this.el&&b(this.el.__ractive_instances__,this),this.detached=this.fragment.detach(),c.fire(this),this.detached)}}(o,p),gb=function(a){return this.el?this.fragment.find(a):null},hb=function(a,b,c){var d,e,f,g,h,i,j,k;if(a){for(e=c("div"),f=["matches","matchesSelector"],k=function(a){return function(b,c){return b[a](c)}},i=f.length;i--&&!d;)if(g=f[i],e[g])d=k(g);else for(j=b.length;j--;)if(h=b[i]+g.substr(0,1).toUpperCase()+g.substring(1),e[h]){d=k(h);break}d||(d=function(a,b){var c,d,f;for(d=a.parentNode,d||(e.innerHTML="",d=e,a=a.cloneNode(),e.appendChild(a)),c=d.querySelectorAll(b),f=c.length;f--;)if(c[f]===a)return!0;return!1})}else d=null;return d}(D,J,C),ib=function(a){return function(b,c){var d=this._isComponentQuery?!this.selector||b.name===this.selector:a(b.node,this.selector);return d?(this.push(b.node||b.instance),c||this._makeDirty(),!0):void 0}}(hb),jb=function(){var a,b,c;a=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],b=this.selector,c=a.indexOf(b),-1!==c&&(a.splice(c,1),a[b]=null)},kb=function(){function a(a){var b;return(b=a.parentFragment)?b.owner:a.component&&(b=a.component.parentFragment)?b.owner:void 0}function b(b){var c,d;for(c=[b],d=a(b);d;)c.push(d),d=a(d);return c}var c;return c=function(a,c){var d,e,f,g,h,i,j,k,l,m;for(d=b(a.component||a._ractive.proxy),e=b(c.component||c._ractive.proxy),f=d[d.length-1],g=e[e.length-1];f&&f===g;)d.pop(),e.pop(),h=f,f=d[d.length-1],g=e[e.length-1];if(f=f.component||f,g=g.component||g,l=f.parentFragment,m=g.parentFragment,l===m)return i=l.items.indexOf(f),j=m.items.indexOf(g),i-j||d.length-e.length;if(k=h.fragments)return i=k.indexOf(l),j=k.indexOf(m),i-j||d.length-e.length;throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")}}(),lb=function(a){return function(b,c){var d;return b.compareDocumentPosition?(d=b.compareDocumentPosition(c),2&d?1:-1):a(b,c)}}(kb),mb=function(a,b){return function(){this.sort(this._isComponentQuery?b:a),this._dirty=!1}}(lb,kb),nb=function(a){return function(){var b=this;this._dirty||(this._dirty=!0,a.scheduleTask(function(){b._sort()}))}}(x),ob=function(a){var b=this.indexOf(this._isComponentQuery?a.instance:a);-1!==b&&this.splice(b,1)},pb=function(a,b,c,d,e,f){return function(g,h,i,j){var k=[];return a(k,{selector:{value:h},live:{value:i},_isComponentQuery:{value:j},_test:{value:b}}),i?(a(k,{cancel:{value:c},_root:{value:g},_sort:{value:d},_makeDirty:{value:e},_remove:{value:f},_dirty:{value:!1,writable:!0}}),k):k}}(F,ib,jb,mb,nb,ob),qb=function(a){return function(b,c){var d,e;return this.el?(c=c||{},d=this._liveQueries,(e=d[b])?c&&c.live?e:e.slice():(e=a(this,b,!!c.live,!1),e.live&&(d.push(b),d["_"+b]=e),this.fragment.findAll(b,e),e)):[]}}(pb),rb=function(a){return function(b,c){var d,e;return c=c||{},d=this._liveComponentQueries,(e=d[b])?c&&c.live?e:e.slice():(e=a(this,b,!!c.live,!0),e.live&&(d.push(b),d["_"+b]=e),this.fragment.findAllComponents(b,e),e)}}(pb),sb=function(a){return this.fragment.findComponent(a)},tb=function(){function a(a){var b,d,e,f,g,h="";if(!c[a]){for(e=[];h.length<a;)h+=1;for(b=parseInt(h,2),f=function(a){return"1"===a},g=0;b>=g;g+=1){for(d=g.toString(2);d.length<a;)d="0"+d;e[g]=Array.prototype.map.call(d,f)}c[a]=e}return c[a]}var b,c={};return b=function(b){var d,e,f,g,h,i;for(d=b.split("."),(e=c[d.length])||(e=a(d.length)),h=[],f=function(a,b){return a?"*":d[b]},g=e.length;g--;)i=e[g].map(f).join("."),h.hasOwnProperty(i)||(h.push(i),h[i]=!0);return h}}(),ub=function(a){function b(d,e,f,g){var h=arguments[4];void 0===h&&(h=!1);var i,j,k=!0;for(f&&(d.event=f),j=e.length;j>=0;j--)i=d._subs[e[j]],i&&(k=c(d,i,f,g)&&k);if(f&&delete d.event,d._parent&&k){if(h&&d.component){var l=d.component.name+"."+e[e.length-1];e=a(l),f&&(f.component=d)}b(d._parent,e,f,g)}}function c(a,b,c,d){var e=null,f=!1;c&&!c._noArg&&(d=[c].concat(d));for(var g=0,h=b.length;h>g;g+=1)b[g].apply(a,d)===!1&&(f=!0);return c&&!c._noArg&&f&&(e=c.original)&&(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()),!f}var d;return d=function(c,d){var e=arguments[2];if(void 0===e&&(e={}),d){e.event?e.event.name=d:e.event={name:d,context:c.data,keypath:"",_noArg:!0};var f=a(d);b(c,f,e.event,e.args,!0)}}}(tb),vb=function(a){return function(b){var c={args:Array.prototype.slice.call(arguments,1)};a(this,b,c)}}(ub),wb=function(a,b){var c={capture:!0};return function(d){var e;return d=a(d),e=this.viewmodel.get(d,c),void 0===e&&this._parent&&!this.isolated&&b(this,d,this.fragment)&&(e=this.viewmodel.get(d)),e
}}(I,v),xb=function(a){var b;if(a&&"boolean"!=typeof a)return"undefined"!=typeof window&&document&&a?a.nodeType?a:"string"==typeof a&&(b=document.getElementById(a),!b&&document.querySelector&&(b=document.querySelector(a)),b&&b.nodeType)?b:a[0]&&a[0].nodeType?a[0]:null:null},yb=function(a,b){function c(a){e.fire(a),a.findAllComponents("*").forEach(function(a){c(a.instance)})}var d,e=new a("insert");return d=function(a,d){if(!this.fragment.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.");if(a=b(a),d=b(d)||null,!a)throw new Error("You must specify a valid target to insert into");a.insertBefore(this.detach(),d),this.el=a,(a.__ractive_instances__||(a.__ractive_instances__=[])).push(this),this.detached=null,c(this)}}(o,xb),zb=function(a,b,c){return function(d,e,f){var g,h;return d=c(d),g=this.viewmodel.get(d),b(g)&&b(e)?(h=a.start(this,!0),this.viewmodel.merge(d,g,e,f),a.end(),f&&f.complete&&h.then(f.complete),h):this.set(d,e,f&&f.complete)}}(x,g,I),Ab=function(a,b){var c=function(a,b,c,d){this.root=a,this.keypath=b,this.callback=c,this.defer=d.defer,this.context=d&&d.context?d.context:a};return c.prototype={init:function(a){this.value=this.root.get(this.keypath),a!==!1?this.update():this.oldValue=this.value},setValue:function(c){var d=this;b(c,this.value)||(this.value=c,this.defer&&this.ready?a.scheduleTask(function(){return d.update()}):this.update())},update:function(){this.updating||(this.updating=!0,this.callback.call(this.context,this.value,this.oldValue,this.keypath),this.oldValue=this.value,this.updating=!1)}},c}(x,t),Bb=function(a){return function(b,c){function d(c,d){var e,f,g;e=b.viewmodel.wrapped[d]?b.viewmodel.wrapped[d].get():b.get(d);for(f in e)!e.hasOwnProperty(f)||"_ractive"===f&&a(e)||(g=d?d+"."+f:f,c.push(g));return c}function e(a){return function(b){return b?b+"."+a:a}}var f,g,h;for(f=c.split("."),h=[""];g=f.shift();)"*"===g?h=h.reduce(d,[]):""===h[0]?h[0]=g:h=h.map(e(g));return h}}(g),Cb=function(a){return function(b,c){var d,e;return d=a(b,c),e={},d.forEach(function(a){e[a]=b.get(a)}),e}}(Bb),Db=function(a,b,c){var d,e=/\*/,f=Array.prototype.slice;return d=function(a,b,c,d){this.root=a,this.callback=c,this.defer=d.defer,this.keypath=b,this.regex=new RegExp("^"+b.replace(/\./g,"\\.").replace(/\*/g,"([^\\.]+)")+"$"),this.values={},this.defer&&(this.proxies=[]),this.context=d&&d.context?d.context:a},d.prototype={init:function(a){var b,d;if(b=c(this.root,this.keypath),a!==!1)for(d in b)b.hasOwnProperty(d)&&this.update(d);else this.values=b},update:function(b){var d,f=this;if(e.test(b)){d=c(this.root,b);for(b in d)d.hasOwnProperty(b)&&this.update(b)}else if(!this.root.viewmodel.implicitChanges[b])return this.defer&&this.ready?void a.scheduleTask(function(){return f.getProxy(b).update()}):void this.reallyUpdate(b)},reallyUpdate:function(a){var c,d,e;return c=this.root.viewmodel.get(a),this.updating?void(this.values[a]=c):(this.updating=!0,b(c,this.values[a])&&this.ready||(d=f.call(this.regex.exec(a),1),e=[c,this.values[a],a].concat(d),this.callback.apply(this.context,e),this.values[a]=c),void(this.updating=!1))},getProxy:function(a){var b=this;return this.proxies[a]||(this.proxies[a]={update:function(){b.reallyUpdate(a)}}),this.proxies[a]}},d}(x,t,Cb),Eb=function(a,b,c){var d=/\*/,e={};return function(f,g,h,i){var j,k,l;return g=a(g),i=i||e,d.test(g)?(j=new c(f,g,h,i),f.viewmodel.patternObservers.push(j),k=!0):j=new b(f,g,h,i),f.viewmodel.register(g,j,k?"patternObservers":"observers"),j.init(i.init),j.ready=!0,{cancel:function(){var a;l||(k?(a=f.viewmodel.patternObservers.indexOf(j),f.viewmodel.patternObservers.splice(a,1),f.viewmodel.unregister(g,j,"patternObservers")):f.viewmodel.unregister(g,j,"observers"),l=!0)}}}}(I,Ab,Db),Fb=function(a,b){return function(c,d,e){var f,g,h,i;if(a(c)){e=d,g=c,f=[];for(c in g)g.hasOwnProperty(c)&&(d=g[c],f.push(this.observe(c,d,e)));return{cancel:function(){for(;f.length;)f.pop().cancel()}}}if("function"==typeof c)return e=d,d=c,c="",b(this,c,d,e);if(h=c.split(" "),1===h.length)return b(this,c,d,e);for(f=[],i=h.length;i--;)c=h[i],c&&f.push(b(this,c,d,e));return{cancel:function(){for(;f.length;)f.pop().cancel()}}}}(h,Eb),Gb=function(a){return a.trim()},Hb=function(a){return""!==a},Ib=function(a,b){return function(c,d){var e,f=this;if(c)e=c.split(" ").map(a).filter(b),e.forEach(function(a){var b,c;(b=f._subs[a])&&(d?(c=b.indexOf(d),-1!==c&&b.splice(c,1)):f._subs[a]=[])});else for(c in this._subs)delete this._subs[c];return this}}(Gb,Hb),Jb=function(a,b){return function(c,d){var e,f,g,h=this,i=this;if("object"==typeof c){e=[];for(f in c)c.hasOwnProperty(f)&&e.push(this.on(f,c[f]));return{cancel:function(){for(var a;a=e.pop();)a.cancel()}}}return g=c.split(" ").map(a).filter(b),g.forEach(function(a){(h._subs[a]||(h._subs[a]=[])).push(d)}),{cancel:function(){i.off(c,d)}}}}(Gb,Hb),Kb=function(){function a(a,b,c){switch(b){case"splice":for(void 0!==c[0]&&c[0]<0&&(c[0]=a.length+Math.max(c[0],-a.length));c.length<2;)c.push(0);return c[1]=Math.min(c[1],a.length-c[0]),c;case"sort":case"reverse":return null;case"pop":return a.length?[a.length-1,1]:null;case"push":return[a.length,0].concat(c);case"shift":return[0,1];case"unshift":return[0,0].concat(c)}}var b;return b=function(b,c,d){var e,f,g,h,i,j,k=[];if(e=a(b,c,d),!e)return null;for(f=b.length,i=e.length-2-e[1],g=Math.min(f,e[0]),h=g+e[1],j=0;g>j;j+=1)k.push(j);for(;h>j;j+=1)k.push(-1);for(;f>j;j+=1)k.push(j+i);return k}}(),Lb=function(a,b,c){var d=Array.prototype;return function(e){return function(f){var g,h,i,j,k=Array.prototype.slice,l=k.call(arguments,1),m=[];if(g=this.get(f),h=g.length,!a(g))throw new Error("Called ractive."+e+"('"+f+"'), but '"+f+"' does not refer to an array");return m=c(g,e,l),j=d[e].apply(g,l),i=b.start(this,!0).then(function(){return j}),m?this.viewmodel.smartUpdate(f,g,m):this.viewmodel.mark(f),b.end(),i}}}(g,x,Kb),Mb=function(a){return a("pop")}(Lb),Nb=function(a){return a("push")}(Lb),Ob=function(a,b,c){var d,e,f,g,h,i,j,k="/* Ractive.js component styles */\n",l={},m=[];return b?(a.push(function(){f=a.runloop}),g=document.createElement("style"),g.type="text/css",h=document.getElementsByTagName("head")[0],j=!1,i=g.styleSheet,e=function(){var a;m.length?(a=k+m.join(" "),i?i.cssText=a:g.innerHTML=a,j||(h.appendChild(g),j=!0)):j&&(h.removeChild(g),j=!1)},d={add:function(a){a.css&&(l[a._guid]||(l[a._guid]=0,m.push(a.css),e()),l[a._guid]+=1)},remove:function(a){a.css&&(l[a._guid]-=1,l[a._guid]||(c(m,a.css),f.scheduleTask(e)))}}):d=null,d}(e,D,p),Pb=function(a,b,c,d){var e=new b("render"),f=new b("complete");return function(b,g){var h,i,j,k=this;if(j=this.transitionsEnabled,this.noIntro&&(this.transitionsEnabled=!1),h=d.start(this,!0),d.scheduleTask(function(){return e.fire(k)},!0),this.fragment.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first");return b=c(b)||this.el,g=c(g)||this.anchor,this.el=b,this.anchor=g,this.constructor.css&&a.add(this.constructor),b&&((i=b.__ractive_instances__)?i.push(this):b.__ractive_instances__=[this],g?b.insertBefore(this.fragment.render(),g):b.appendChild(this.fragment.render())),d.end(),this.transitionsEnabled=j,h.then(function(){return f.fire(k)}),h}}(Ob,o,xb,x),Qb=function(){this.dirtyValue=this.dirtyArgs=!0,this.bound&&"function"==typeof this.owner.bubble&&this.owner.bubble()},Rb=function(){var a;return 1===this.items.length?this.items[0].detach():(a=document.createDocumentFragment(),this.items.forEach(function(b){var c=b.detach();c&&a.appendChild(c)}),a)},Sb=function(a){var b,c,d,e;if(this.items){for(c=this.items.length,b=0;c>b;b+=1)if(d=this.items[b],d.find&&(e=d.find(a)))return e;return null}},Tb=function(a,b){var c,d,e;if(this.items)for(d=this.items.length,c=0;d>c;c+=1)e=this.items[c],e.findAll&&e.findAll(a,b);return b},Ub=function(a,b){var c,d,e;if(this.items)for(d=this.items.length,c=0;d>c;c+=1)e=this.items[c],e.findAllComponents&&e.findAllComponents(a,b);return b},Vb=function(a){var b,c,d,e;if(this.items){for(b=this.items.length,c=0;b>c;c+=1)if(d=this.items[c],d.findComponent&&(e=d.findComponent(a)))return e;return null}},Wb=function(a){var b,c=a.index;return b=this.items[c+1]?this.items[c+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)},Xb=function(){return this.items&&this.items[0]?this.items[0].firstNode():null},Yb=function(){var a=this;do if(a.pElement)return a.pElement.node;while(a=a.parent);return this.root.detached||this.root.el},Zb={TEXT:1,INTERPOLATOR:2,TRIPLE:3,SECTION:4,INVERTED:5,CLOSING:6,ELEMENT:7,PARTIAL:8,COMMENT:9,DELIMCHANGE:10,MUSTACHE:11,TAG:12,ATTRIBUTE:13,CLOSING_TAG:14,COMPONENT:15,NUMBER_LITERAL:20,STRING_LITERAL:21,ARRAY_LITERAL:22,OBJECT_LITERAL:23,BOOLEAN_LITERAL:24,GLOBAL:26,KEY_VALUE_PAIR:27,REFERENCE:30,REFINEMENT:31,MEMBER:32,PREFIX_OPERATOR:33,BRACKETED:34,CONDITIONAL:35,INFIX_OPERATOR:36,INVOCATION:40,SECTION_IF:50,SECTION_UNLESS:51,SECTION_EACH:52,SECTION_WITH:53,SECTION_IF_WITH:54},$b={expectedExpression:"Expected a JavaScript expression",expectedParen:"Expected closing paren"},_b=function(a){var b=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/;return function(c){var d;return(d=c.matchPattern(b))?{t:a.NUMBER_LITERAL,v:d}:null}}(Zb),ac=function(a){return function(b){var c=b.remaining();return"true"===c.substr(0,4)?(b.pos+=4,{t:a.BOOLEAN_LITERAL,v:"true"}):"false"===c.substr(0,5)?(b.pos+=5,{t:a.BOOLEAN_LITERAL,v:"false"}):null}}(Zb),bc=function(){var a,b,c;return a=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,b=/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,c=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/,function(d){return function(e){var f,g,h,i;for(f=e.pos,g='"',h=!1;!h;)i=e.matchPattern(a)||e.matchPattern(b)||e.matchString(d),i?g+='"'===i?'\\"':"\\'"===i?"'":i:(i=e.matchPattern(c),i?g+="\\u"+("000"+i.charCodeAt(1).toString(16)).slice(-4):h=!0);return g+='"',JSON.parse(g)}}}(),cc=function(a){return a('"')}(bc),dc=function(a){return a("'")}(bc),ec=function(a,b,c){return function(d){var e,f;return e=d.pos,d.matchString('"')?(f=c(d),d.matchString('"')?{t:a.STRING_LITERAL,v:f}:(d.pos=e,null)):d.matchString("'")?(f=b(d),d.matchString("'")?{t:a.STRING_LITERAL,v:f}:(d.pos=e,null)):null}}(Zb,cc,dc),fc={name:/^[a-zA-Z_$][a-zA-Z_$0-9]*/},gc=function(a,b,c){var d=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;return function(e){var f;return(f=a(e))?d.test(f.v)?f.v:'"'+f.v.replace(/"/g,'\\"')+'"':(f=b(e))?f.v:(f=e.matchPattern(c.name))?f:void 0}}(ec,_b,fc),hc=function(a,b){return function(c){var d,e,f;return d=c.pos,c.allowWhitespace(),e=b(c),null===e?(c.pos=d,null):(c.allowWhitespace(),c.matchString(":")?(c.allowWhitespace(),f=c.readExpression(),null===f?(c.pos=d,null):{t:a.KEY_VALUE_PAIR,k:e,v:f}):(c.pos=d,null))}}(Zb,gc),ic=function(a){return function b(c){var d,e,f,g;return d=c.pos,f=a(c),null===f?null:(e=[f],c.matchString(",")?(g=b(c),g?e.concat(g):(c.pos=d,null)):e)}}(hc),jc=function(a,b){return function(c){var d,e;return d=c.pos,c.allowWhitespace(),c.matchString("{")?(e=b(c),c.allowWhitespace(),c.matchString("}")?{t:a.OBJECT_LITERAL,m:e}:(c.pos=d,null)):(c.pos=d,null)}}(Zb,ic),kc=function(a){return function b(c){function d(a){f.push(a)}var e,f,g,h;return e=c.pos,c.allowWhitespace(),g=c.readExpression(),null===g?null:(f=[g],c.allowWhitespace(),c.matchString(",")&&(h=b(c),null===h&&c.error(a.expectedExpression),h.forEach(d)),f)}}($b),lc=function(a,b){return function(c){var d,e;return d=c.pos,c.allowWhitespace(),c.matchString("[")?(e=b(c),c.matchString("]")?{t:a.ARRAY_LITERAL,m:e}:(c.pos=d,null)):(c.pos=d,null)}}(Zb,kc),mc=function(a,b,c,d,e){return function(f){var g=a(f)||b(f)||c(f)||d(f)||e(f);return g}}(_b,ac,ec,jc,lc),nc=function(a,b){var c,d,e,f,g;return c=/^\.[a-zA-Z_$0-9]+/,e=function(a){var b=a.matchPattern(d);return b?"."+b:null},d=/^\[(0|[1-9][0-9]*)\]/,f=/^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)$/,g=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/,function(d){var h,i,j,k,l,m,n;if(h=d.pos,d.matchString("~/"))i="~/";else for(i="";d.matchString("../");)i+="../";if(i||(k=d.matchString("./")||d.matchString(".")||""),j=d.matchPattern(/^@(?:keypath|index|key)/)||d.matchPattern(b.name)||"",g.test(j))return d.pos=h,null;if(!i&&!k&&f.test(j))return{t:a.GLOBAL,v:j};if(l=(i||k)+j,!l)return null;for(;m=d.matchPattern(c)||e(d);)l+=m;return d.matchString("(")&&(n=l.lastIndexOf("."),-1!==n?(l=l.substr(0,n),d.pos=h+l.length):d.pos-=1),{t:a.REFERENCE,n:l.replace(/^this\./,"./").replace(/^this$/,".")}}}(Zb,fc),oc=function(a,b){return function(c){var d,e;return d=c.pos,c.matchString("(")?(c.allowWhitespace(),e=c.readExpression(),e||c.error(b.expectedExpression),c.allowWhitespace(),c.matchString(")")||c.error(b.expectedParen),{t:a.BRACKETED,x:e}):null}}(Zb,$b),pc=function(a,b,c){return function(d){return a(d)||b(d)||c(d)}}(mc,nc,oc),qc=function(a,b,c){return function(d){var e,f,g;if(e=d.pos,d.allowWhitespace(),d.matchString(".")){if(d.allowWhitespace(),f=d.matchPattern(c.name))return{t:a.REFINEMENT,n:f};d.error("Expected a property name")}return d.matchString("[")?(d.allowWhitespace(),g=d.readExpression(),g||d.error(b.expectedExpression),d.allowWhitespace(),d.matchString("]")||d.error("Expected ']'"),{t:a.REFINEMENT,x:g}):null}}(Zb,$b,fc),rc=function(a,b,c,d,e){return function(f){var g,h,i,j;if(h=b(f),!h)return null;for(;h;)if(g=f.pos,i=d(f))h={t:a.MEMBER,x:h,r:i};else{if(!f.matchString("("))break;f.allowWhitespace(),j=c(f),f.allowWhitespace(),f.matchString(")")||f.error(e.expectedParen),h={t:a.INVOCATION,x:h},j&&(h.o=j)}return h}}(Zb,pc,kc,qc,$b),sc=function(a,b,c){var d,e;return e=function(c,d){return function(e){var f;return(f=d(e))?f:e.matchString(c)?(e.allowWhitespace(),f=e.readExpression(),f||e.error(b.expectedExpression),{s:c,o:f,t:a.PREFIX_OPERATOR}):null}},function(){var a,b,f,g,h;for(g="! ~ + - typeof".split(" "),h=c,a=0,b=g.length;b>a;a+=1)f=e(g[a],h),h=f;d=h}(),d}(Zb,$b,rc),tc=function(a,b){var c,d;return d=function(b,c){return function(d){var e,f,g;if(f=c(d),!f)return null;for(;;){if(e=d.pos,d.allowWhitespace(),!d.matchString(b))return d.pos=e,f;if("in"===b&&/[a-zA-Z_$0-9]/.test(d.remaining().charAt(0)))return d.pos=e,f;if(d.allowWhitespace(),g=c(d),!g)return d.pos=e,f;f={t:a.INFIX_OPERATOR,s:b,o:[f,g]}}}},function(){var a,e,f,g,h;for(g="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),h=b,a=0,e=g.length;e>a;a+=1)f=d(g[a],h),h=f;c=h}(),c}(Zb,sc),uc=function(a,b,c){return function(d){var e,f,g,h;return(f=b(d))?(e=d.pos,d.allowWhitespace(),d.matchString("?")?(d.allowWhitespace(),g=d.readExpression(),g||d.error(c.expectedExpression),d.allowWhitespace(),d.matchString(":")||d.error('Expected ":"'),d.allowWhitespace(),h=d.readExpression(),h||d.error(c.expectedExpression),{t:a.CONDITIONAL,o:[f,g,h]}):(d.pos=e,f)):null}}(Zb,tc,$b),vc=function(a,b){function c(a){return JSON.stringify(String(a))}function d(c,e){var f,g;if(c.t===a.REFERENCE&&-1===e.indexOf(c.n)&&e.unshift(c.n),g=c.o||c.m)if(b(g))d(g,e);else for(f=g.length;f--;)d(g[f],e);c.x&&d(c.x,e),c.r&&d(c.r,e),c.v&&d(c.v,e)}function e(b,d,f){var g=function(a){return e(b,a,f)};switch(d.t){case a.BOOLEAN_LITERAL:case a.GLOBAL:case a.NUMBER_LITERAL:return d.v;case a.STRING_LITERAL:return c(d.v);case a.ARRAY_LITERAL:return"["+(d.m?d.m.map(g).join(","):"")+"]";case a.OBJECT_LITERAL:return"{"+(d.m?d.m.map(g).join(","):"")+"}";case a.KEY_VALUE_PAIR:return d.k+":"+e(b,d.v,f);case a.PREFIX_OPERATOR:return("typeof"===d.s?"typeof ":d.s)+e(b,d.o,f);case a.INFIX_OPERATOR:return e(b,d.o[0],f)+("in"===d.s.substr(0,2)?" "+d.s+" ":d.s)+e(b,d.o[1],f);case a.INVOCATION:return e(b,d.x,f)+"("+(d.o?d.o.map(g).join(","):"")+")";case a.BRACKETED:return"("+e(b,d.x,f)+")";case a.MEMBER:return e(b,d.x,f)+e(b,d.r,f);case a.REFINEMENT:return d.n?"."+d.n:"["+e(b,d.x,f)+"]";case a.CONDITIONAL:return e(b,d.o[0],f)+"?"+e(b,d.o[1],f)+":"+e(b,d.o[2],f);case a.REFERENCE:return"_"+f.indexOf(d.n);default:b.error("Expected legal JavaScript")}}var f;return f=function(a){var b,c=[];return d(a,c),b={r:c,s:e(this,a,c)}}}(Zb,h),wc=function(a,b,c,d,e){var f,g,h=/^\s+/;return g=function(a){this.name="ParseError",this.message=a;try{throw new Error(a)}catch(b){this.stack=b.stack}},g.prototype=Error.prototype,f=function(a,b){var c,d,e=0;for(this.str=a,this.options=b||{},this.pos=0,this.lines=this.str.split("\n"),this.lineEnds=this.lines.map(function(a){var b=e+a.length+1;return e=b,b},0),this.init&&this.init(a,b),c=[];this.pos<this.str.length&&(d=this.read());)c.push(d);this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(c,b):c},f.prototype={read:function(a){var b,c,d,e;for(a||(a=this.converters),b=this.pos,d=a.length,c=0;d>c;c+=1)if(this.pos=b,e=a[c](this))return e;return null},readExpression:function(){return d(this)},flattenExpression:e,getLinePos:function(a){for(var b,c=0,d=0;a>=this.lineEnds[c];)d=this.lineEnds[c],c+=1;return b=a-d,[c+1,b+1,a]},error:function(a){var b,c,d,e,f,h;throw b=this.getLinePos(this.pos),c=b[0],d=b[1],e=this.lines[b[0]-1],f=e+"\n"+new Array(b[1]).join(" ")+"^----",h=new g(a+" at line "+c+" character "+d+":\n"+f),h.line=b[0],h.character=b[1],h.shortMessage=a,h},matchString:function(a){return this.str.substr(this.pos,a.length)===a?(this.pos+=a.length,a):void 0},matchPattern:function(a){var b;return(b=a.exec(this.remaining()))?(this.pos+=b[0].length,b[1]||b[0]):void 0},allowWhitespace:function(){this.matchPattern(h)},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)}},f.extend=function(a){var d,e,g=this;d=function(a,b){f.call(this,a,b)},d.prototype=b(g.prototype);for(e in a)c.call(a,e)&&(d.prototype[e]=a[e]);return d.extend=f.extend,d},a.Parser=f,f}(e,S,f,uc,vc),xc=function(a,b,c){function d(a){var b,d,e;return a.allowWhitespace(),(b=c(a))?(e={key:b},a.allowWhitespace(),a.matchString(":")?(a.allowWhitespace(),(d=a.read())?(e.value=d.v,e):null):null):null}var e,f,g,h,i,j,k;return f={"true":!0,"false":!1,undefined:void 0,"null":null},g=new RegExp("^(?:"+Object.keys(f).join("|")+")"),h=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,i=/\$\{([^\}]+)\}/g,j=/^\$\{([^\}]+)\}/,k=/^\s*$/,e=a.extend({init:function(a,b){this.values=b.values,this.allowWhitespace()},postProcess:function(a){return 1===a.length&&k.test(this.leftover)?{value:a[0].v}:null},converters:[function(a){var b;return a.values?(b=a.matchPattern(j),b&&a.values.hasOwnProperty(b)?{v:a.values[b]}:void 0):null},function(a){var b;return(b=a.matchPattern(g))?{v:f[b]}:void 0},function(a){var b;return(b=a.matchPattern(h))?{v:+b}:void 0},function(a){var c,d=b(a);return d&&(c=a.values)?{v:d.v.replace(i,function(a,b){return b in c?c[b]:b})}:d},function(a){var b,c;if(!a.matchString("{"))return null;if(b={},a.allowWhitespace(),a.matchString("}"))return{v:b};for(;c=d(a);){if(b[c.key]=c.value,a.allowWhitespace(),a.matchString("}"))return{v:b};if(!a.matchString(","))return null}return null},function(a){var b,c;if(!a.matchString("["))return null;if(b=[],a.allowWhitespace(),a.matchString("]"))return{v:b};for(;c=a.read();){if(b.push(c.v),a.allowWhitespace(),a.matchString("]"))return{v:b};if(!a.matchString(","))return null;a.allowWhitespace()}return null}]}),function(a,b){var c=new e(a,{values:b});return c.result}}(wc,ec,gc),yc=function(a){function b(a,c,d,e){return e=e||0,a.map(function(a){var f,g,h;return a.text?a.text:a.fragments?a.fragments.map(function(a){return b(a.items,c,d,e)}).join(""):(f=d+"-"+e++,h=(g=a.root.viewmodel.wrapped[a.keypath])?g.value:a.getValue(),c[f]=h,"${"+f+"}")}).join("")}var c,d={};return c=function(){var c=arguments[0];void 0===c&&(c=d);var e,f,g,h,i,j,k;return e=c.args,i=e?"argsList":"value",j=e?"dirtyArgs":"dirtyValue",this[j]&&(g=b(this.items,f={},this.root._guid),h=a(e?"["+g+"]":g,f),k=h?h.value:e?[this.toString()]:this.toString(),this[i]=k,this[j]=!1),this[i]}}(xc),zc=function(){var a=/</g,b=/>/g,c=/&/g;return function(d){return d.replace(c,"&amp;").replace(a,"&lt;").replace(b,"&gt;")}}(),Ac=function(a){return a&&a.parentNode&&a.parentNode.removeChild(a),a},Bc=function(a){return function(){return a(this.node)}}(Ac),Cc=function(a,b,c){var d=function(b){this.type=a.TEXT,this.text=b.template};return d.prototype={detach:c,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createTextNode(this.text)),this.node},toString:function(a){return a?b(this.text):this.text},unrender:function(a){return a?this.detach():void 0}},d}(Zb,zc,Bc),Dc=function(){this.registered&&this.root.viewmodel.unregister(this.keypath,this),this.resolver&&this.resolver.unbind()},Ec=function(){return this.value},Fc=function(a,b){return a&&b&&a.substr(0,b.length+1)===b+"."},Gc=function(a){return function(b,c,d){return b===c?void 0!==d?d:null:a(b,c)?null===d?d:b.replace(c+".",d+"."):void 0}}(Fc),Hc=function(a,b,c){var d=function(c,d,e){var f;this.ref=d,this.resolved=!1,this.root=c.root,this.parentFragment=c.parentFragment,this.callback=e,f=b(c.root,d,c.parentFragment),void 0!==f?this.resolve(f):a.addUnresolved(this)};return d.prototype={resolve:function(a){this.resolved=!0,this.keypath=a,this.callback(a)},forceResolution:function(){this.resolve(this.ref)},rebind:function(a,b,d,e){var f;void 0!==this.keypath&&(f=c(this.keypath,d,e),void 0!==f&&this.resolve(f))},unbind:function(){this.resolved||a.removeUnresolved(this)}},d}(x,v,Gc),Ic=function(){var a=function(a,b,c){this.parentFragment=a.parentFragment,this.ref=b,this.callback=c,this.rebind()};return a.prototype={rebind:function(){var a=this.ref,b=this.parentFragment;if("@keypath"===a)for(;b;){if(b.context)return this.callback("@"+b.context);b=b.parent}if("@index"===a||"@key"===a)for(;b;){if(void 0!==b.index)return this.callback("@"+b.index);b=b.parent}throw new Error('Unknown special reference "'+a+'" - valid references are @index, @key and @keypath')},unbind:function(){}},a}(),Jc=function(){var a=function(a,b,c){this.parentFragment=a.parentFragment,this.ref=b,this.callback=c,this.rebind()};return a.prototype={rebind:function(){var a=this.ref,b=this.parentFragment.indexRefs,c=b[a];void 0!==c&&this.callback("@"+c)},unbind:function(){}},a}(),Kc=function(a,b,c){return function(d,e,f){var g,h;return"@"===e.charAt(0)?new b(d,e,f):(g=d.parentFragment.indexRefs,g&&void 0!==(h=g[e])?new c(d,e,f):new a(d,e,f))}}(Hc,Ic,Jc),Lc=function(){var a={};return function(b,c){var d,e;if(a[b])return a[b];for(e=[];c--;)e[c]="_"+c;return d=new Function(e.join(","),"return("+b+")"),a[b]=d,d}}(),Mc=function(a,b,c,d){function e(a){return a.call()}function f(a,c){return a.replace(/_([0-9]+)/g,function(a,d){var e,f;return e=c[d],void 0===e?"undefined":"@"===e[0]?(f=e.slice(1),b(f)?f:'"'+f+'"'):e})}function g(a){return"${"+a.replace(/[\.\[\]]/g,"-")+"}"}function h(a){return void 0!==a&&"@"!==a[0]}function i(b,c){var d,e,f;if(b._noWrap)return b;if(e="__ractive_"+c._guid,d=b[e])return d;if(/this/.test(b.toString())){a(b,e,{value:l.call(b,c)});for(f in b)b.hasOwnProperty(f)&&(b[e][f]=b[f]);return b[e]}return a(b,"__ractive_nowrap",{value:b}),b.__ractive_nowrap}var j,k,l=Function.prototype.bind;return k=function(a,b,d,e){var f,g,h=this;f=a.root,h.root=f,h.parentFragment=b,h.callback=e,h.owner=a,h.str=d.s,h.keypaths=[],g=b.indexRefs,h.pending=d.r.length,h.refResolvers=d.r.map(function(a,b){return c(h,a,function(a){h.resolve(b,a)})}),h.ready=!0,h.bubble()},k.prototype={bubble:function(){this.ready&&(this.uniqueString=f(this.str,this.keypaths),this.keypath=g(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},unbind:function(){for(var a;a=this.refResolvers.pop();)a.unbind()},resolve:function(a,b){this.keypaths[a]=b,this.bubble()},createEvaluator:function(){var a,c,f,g,j=this,k=this;a=this.root.viewmodel.computations[this.keypath],a?this.root.viewmodel.mark(this.keypath):(g=d(this.str,this.refResolvers.length),c=this.keypaths.map(function(a){var c;return"undefined"===a?function(){return void 0}:"@"===a[0]?(c=a.slice(1),b(c)?function(){return+c}:function(){return c}):function(){var b=j.root.viewmodel.get(a);return"function"==typeof b&&(b=i(b,k.root)),b}}),f={deps:this.keypaths.filter(h),get:function(){var a=c.map(e);return g.apply(null,a)}},a=this.root.viewmodel.compute(this.keypath,f))},rebind:function(a,b,c,d){this.refResolvers.forEach(function(e){return e.rebind(a,b,c,d)})}},j=k}(E,i,Kc,Lc,T),Nc=function(a,b,c){var d=function(d,e,f){var g=this;g.resolver=e,g.root=e.root,g.parentFragment=f,g.viewmodel=e.root.viewmodel,"string"==typeof d?g.value=d:d.t===a.REFERENCE?g.refResolver=b(this,d.n,function(a){g.resolve(a)}):new c(e,f,d,function(a){g.resolve(a)})};return d.prototype={resolve:function(a){this.keypath&&this.viewmodel.unregister(this.keypath,this),this.keypath=a,this.value=this.viewmodel.get(a),this.bind(),this.resolver.bubble()},bind:function(){this.viewmodel.register(this.keypath,this)},rebind:function(a,b,c,d){this.refResolver&&this.refResolver.rebind(a,b,c,d)},setValue:function(a){this.value=a,this.resolver.bubble()},unbind:function(){this.keypath&&this.viewmodel.unregister(this.keypath,this),this.unresolved&&this.unresolved.unbind()},forceResolution:function(){this.refResolver&&this.refResolver.forceResolution()}},d}(Zb,Kc,Mc),Oc=function(a,b,c){function d(a){return a.value}function e(a){return void 0!=a}function f(a){a.unbind()}var g=function(d,e,f){var g,h,i,j,k=this,l=this;l.parentFragment=j=d.parentFragment,l.root=g=d.root,l.mustache=d,l.ref=h=e.r,l.callback=f,l.unresolved=[],(i=a(g,h,j))?l.base=i:l.baseResolver=new b(this,h,function(a){l.base=a,l.baseResolver=null,l.bubble()}),l.members=e.m.map(function(a){return new c(a,k,j)}),l.ready=!0,l.bubble()};return g.prototype={getKeypath:function(){var a=this.members.map(d);return!a.every(e)||this.baseResolver?null:this.base+"."+a.join(".")},bubble:function(){this.ready&&!this.baseResolver&&this.callback(this.getKeypath())},unbind:function(){this.members.forEach(f)},rebind:function(a,b,c,d){var e;this.members.forEach(function(f){f.rebind(a,b,c,d)&&(e=!0)}),e&&this.bubble()},forceResolution:function(){this.baseResolver&&(this.base=this.ref,this.baseResolver.unbind(),this.baseResolver=null),this.members.forEach(function(a){return a.forceResolution()}),this.bubble()}},g}(v,Hc,Nc),Pc=function(a,b,c,d){return function(e,f){function g(a){e.resolve(a)}function h(a){var b=e.keypath;a!==b&&(e.resolve(a),void 0!==b&&e.fragments&&e.fragments.forEach(function(c){c.rebind(null,null,b,a)}))}var i,j,k;j=f.parentFragment,k=f.template,e.root=j.root,e.parentFragment=j,e.pElement=j.pElement,e.template=f.template,e.index=f.index||0,e.isStatic=f.template.s,e.type=f.template.t,e.registered=!1,(i=k.r)&&(e.resolver=new b(e,i,g)),f.template.x&&(e.resolver=new d(e,j,f.template.x,h)),f.template.rx&&(e.resolver=new c(e,f.template.rx,h)),e.template.n!==a.SECTION_UNLESS||e.hasOwnProperty("value")||e.setValue(void 0)}}(Zb,Kc,Oc,Mc),Qc=function(a){return function(b){var c,d,e;return b&&"@"===b[0]?(d=b.slice(1),a(d)&&(d=+d),this.keypath=b,void this.setValue(d)):(this.registered&&(this.root.viewmodel.unregister(this.keypath,this),this.registered=!1,c=!0),this.keypath=b,void 0!=b&&(d=this.root.viewmodel.get(b),this.root.viewmodel.register(b,this),this.registered=!0),this.setValue(d),void(c&&(e=this.twowayBinding)&&e.rebound()))}}(i),Rc=function(a,b,c,d){this.fragments&&this.fragments.forEach(function(e){return e.rebind(a,b,c,d)}),this.resolver&&this.resolver.rebind(a,b,c,d)},Sc=function(a,b,c,d){return{getValue:a,init:b,resolve:c,rebind:d}}(Ec,Pc,Qc,Rc),Tc=function(a,b,c,d,e,f,g,h){var i=function(b){this.type=a.INTERPOLATOR,g.init(this,b)};return i.prototype={update:function(){this.node.data=void 0==this.value?"":this.value},resolve:g.resolve,rebind:g.rebind,detach:h,unbind:f,render:function(){return this.node||(this.node=document.createTextNode(void 0!=this.value?this.value:"")),this.node},unrender:function(a){a&&d(this.node)},getValue:g.getValue,setValue:function(a){var c;(c=this.root.viewmodel.wrapped[this.keypath])&&(a=c.get()),e(a,this.value)||(this.value=a,this.parentFragment.bubble(),this.node&&b.addView(this))},firstNode:function(){return this.node},toString:function(a){var b=void 0!=this.value?""+this.value:"";return a?c(b):b}},i}(Zb,x,zc,Ac,t,Dc,Sc,Bc),Uc=function(){this.parentFragment.bubble()},Vc=function(){var a;return 1===this.fragments.length?this.fragments[0].detach():(a=document.createDocumentFragment(),this.fragments.forEach(function(b){a.appendChild(b.detach())}),a)},Wc=function(a){var b,c,d;for(c=this.fragments.length,b=0;c>b;b+=1)if(d=this.fragments[b].find(a))return d;return null},Xc=function(a,b){var c,d;for(d=this.fragments.length,c=0;d>c;c+=1)this.fragments[c].findAll(a,b)},Yc=function(a,b){var c,d;for(d=this.fragments.length,c=0;d>c;c+=1)this.fragments[c].findAllComponents(a,b)},Zc=function(a){var b,c,d;for(c=this.fragments.length,b=0;c>b;b+=1)if(d=this.fragments[b].findComponent(a))return d;return null},$c=function(a){return this.fragments[a.index+1]?this.fragments[a.index+1].firstNode():this.parentFragment.findNextNode(this)},_c=function(){var a,b,c;if(a=this.fragments.length)for(b=0;a>b;b+=1)if(c=this.fragments[b].firstNode())return c;return this.parentFragment.findNextNode(this)},ad=function(a,b,c){var d;return c.push(function(){d=c.Fragment}),function(c){var d,e,f,g,h,i,j,k=this,l=this;if(!(this.shuffling||this.unbound||this.subtype&&this.subtype!==a.SECTION_EACH)){if(this.shuffling=!0,b.scheduleTask(function(){return k.shuffling=!1}),d=this.parentFragment,h=[],c.forEach(function(a,b){var c,d,f,g;return a===b?void(h[a]=l.fragments[b]):(c=l.fragments[b],void 0===e&&(e=b),-1===a?(l.fragmentsToUnrender.push(c),void c.unbind()):(d=a-b,f=l.keypath+"."+b,g=l.keypath+"."+a,c.rebind(l.template.i,a,f,g),c.index=a,void(h[a]=c)))}),g=this.root.get(this.keypath).length,void 0===e){if(this.length===g)return;e=this.length}for(this.length=this.fragments.length=g,this.rendered&&b.addView(this),i={template:this.template.f,root:this.root,owner:this},this.template.i&&(i.indexRef=this.template.i),f=e;g>f;f+=1)j=h[f],j||this.fragmentsToCreate.push(f),this.fragments[f]=j}}}(Zb,x,e),bd=function(){var a;return a=this.docFrag=document.createDocumentFragment(),this.update(),this.rendered=!0,a},cd=function(){var a=/^\[object (?:Array|FileList)\]$/,b=Object.prototype.toString;return function(c){return a.test(b.call(c))}}(),dd=function(a,b,c,d,e){function f(d,e){var f={template:d.template.f,root:d.root,pElement:d.parentFragment.pElement,owner:d};if(d.subtype)switch(d.subtype){case a.SECTION_IF:return k(d,e,!1,f);case a.SECTION_UNLESS:return k(d,e,!0,f);case a.SECTION_WITH:return j(d,f);case a.SECTION_IF_WITH:return i(d,e,f);case a.SECTION_EACH:if(c(e))return h(d,e,f)}return d.ordered=!!b(e),d.ordered?g(d,e,f):c(e)||"function"==typeof e?d.template.i?h(d,e,f):j(d,f):k(d,e,!1,f)}function g(a,b,c){var d,e,f;if(e=b.length,e===a.length)return!1;if(e<a.length)a.fragmentsToUnrender=a.fragments.splice(e,a.length-e),a.fragmentsToUnrender.forEach(m);else if(e>a.length)for(d=a.length;e>d;d+=1)c.context=a.keypath+"."+d,c.index=d,a.template.i&&(c.indexRef=a.template.i),f=new p(c),a.fragmentsToRender.push(a.fragments[d]=f);return a.length=e,!0}function h(a,b,c){var d,e,f,g,h;for(f=a.hasKey||(a.hasKey={}),e=a.fragments.length;e--;)g=a.fragments[e],g.index in b||(h=!0,g.unbind(),a.fragmentsToUnrender.push(g),a.fragments.splice(e,1),f[g.index]=!1);for(d in b)f[d]||(h=!0,c.context=a.keypath+"."+d,c.index=d,a.template.i&&(c.indexRef=a.template.i),g=new p(c),a.fragmentsToRender.push(g),a.fragments.push(g),f[d]=!0);return a.length=a.fragments.length,h}function i(a,b,c){return b?j(a,c):l(a)}function j(a,b){var c;return a.length?void 0:(b.context=a.keypath,b.index=0,c=new p(b),a.fragmentsToRender.push(a.fragments[0]=c),a.length=1,!0)
}function k(a,d,e,f){var g,h,i,j,k;if(h=b(d)&&0===d.length,i=!1,!b(d)&&c(d)){i=!0;for(k in d){i=!1;break}}return g=e?h||i||!d:d&&!h&&!i,g?a.length?a.length>1?(a.fragmentsToUnrender=a.fragments.splice(1),a.fragmentsToUnrender.forEach(m),!0):void 0:(f.index=0,j=new p(f),a.fragmentsToRender.push(a.fragments[0]=j),a.length=1,!0):l(a)}function l(a){return a.length?(a.fragmentsToUnrender=a.fragments.splice(0,a.fragments.length).filter(n),a.fragmentsToUnrender.forEach(m),a.length=a.fragmentsToRender.length=0,!0):void 0}function m(a){a.unbind()}function n(a){return a.rendered}var o,p;return e.push(function(){p=e.Fragment}),o=function(a){var b,c,e=this;this.updating||(this.updating=!0,(b=this.root.viewmodel.wrapped[this.keypath])&&(a=b.get()),this.fragmentsToCreate.length?(c={template:this.template.f,root:this.root,pElement:this.pElement,owner:this,indexRef:this.template.i},this.fragmentsToCreate.forEach(function(a){var b;c.context=e.keypath+"."+a,c.index=a,b=new p(c),e.fragmentsToRender.push(e.fragments[a]=b)}),this.fragmentsToCreate.length=0):f(this,a)&&(this.bubble(),this.rendered&&d.addView(this)),this.value=a,this.updating=!1)}}(Zb,cd,h,x,e),ed=function(a){var b,c,d;for(b="",c=0,d=this.length,c=0;d>c;c+=1)b+=this.fragments[c].toString(a);return b},fd=function(a){function b(a){a.unbind()}var c;return c=function(){this.fragments.forEach(b),a.call(this),this.length=0,this.unbound=!0}}(Dc),gd=function(){function a(a){a.unrender(!0)}function b(a){a.unrender(!1)}var c;return c=function(c){this.fragments.forEach(c?a:b)}}(),hd=function(){var a,b,c,d,e,f,g;for(c=this.renderedFragments;a=this.fragmentsToUnrender.pop();)a.unrender(!0),c.splice(c.indexOf(a),1);for(;a=this.fragmentsToRender.shift();)a.render();for(this.rendered&&(e=this.parentFragment.getNode()),g=this.fragments.length,f=0;g>f;f+=1)a=this.fragments[f],b=c.indexOf(a,f),b!==f?(this.docFrag.appendChild(a.detach()),-1!==b&&c.splice(b,1),c.splice(f,0,a)):this.docFrag.childNodes.length&&(d=a.firstNode(),e.insertBefore(this.docFrag,d));this.rendered&&this.docFrag.childNodes.length&&(d=this.parentFragment.findNextNode(this),e.insertBefore(this.docFrag,d)),this.renderedFragments=this.fragments.slice()},id=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=function(c){this.type=a.SECTION,this.subtype=c.template.n,this.inverted=this.subtype===a.SECTION_UNLESS,this.pElement=c.pElement,this.fragments=[],this.fragmentsToCreate=[],this.fragmentsToRender=[],this.fragmentsToUnrender=[],this.renderedFragments=[],this.length=0,b.init(this,c)};return r.prototype={bubble:c,detach:d,find:e,findAll:f,findAllComponents:g,findComponent:h,findNextNode:i,firstNode:j,getValue:b.getValue,shuffle:k,rebind:b.rebind,render:l,resolve:b.resolve,setValue:m,toString:n,unbind:o,unrender:p,update:q},r}(Zb,Sc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,dd,ed,fd,gd,hd),jd=function(){var a,b;if(this.docFrag){for(a=this.nodes.length,b=0;a>b;b+=1)this.docFrag.appendChild(this.nodes[b]);return this.docFrag}},kd=function(a){return function(b){var c,d,e,f;for(d=this.nodes.length,c=0;d>c;c+=1)if(e=this.nodes[c],1===e.nodeType){if(a(e,b))return e;if(f=e.querySelector(b))return f}return null}}(hb),ld=function(a){return function(b,c){var d,e,f,g,h,i;for(e=this.nodes.length,d=0;e>d;d+=1)if(f=this.nodes[d],1===f.nodeType&&(a(f,b)&&c.push(f),g=f.querySelectorAll(b)))for(h=g.length,i=0;h>i;i+=1)c.push(g[i])}}(hb),md=function(){return this.rendered&&this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)},nd=function(a,b){function c(a){return g[a]||(g[a]=b(a))}var d,e,f,g={};try{b("table").innerHTML="foo"}catch(h){e=!0,f={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}return d=function(b,d,g){var h,i,j,k,l,m=[];if(null!=b&&""!==b){for(e&&(i=f[d.tagName])?(h=c("DIV"),h.innerHTML=i[0]+b+i[1],h=h.querySelector(".x"),"SELECT"===h.tagName&&(j=h.options[h.selectedIndex])):d.namespaceURI===a.svg?(h=c("DIV"),h.innerHTML='<svg class="x">'+b+"</svg>",h=h.querySelector(".x")):(h=c(d.tagName),h.innerHTML=b,"SELECT"===h.tagName&&(j=h.options[h.selectedIndex]));k=h.firstChild;)m.push(k),g.appendChild(k);if("SELECT"===d.tagName)for(l=m.length;l--;)m[l]!==j&&(m[l].selected=!1)}return m}}(B,C),od=function(a){for(var b=[],c=a.length;c--;)b[c]=a[c];return b},pd=function(a){function b(a){return a.selected}var c;return c=function(c){var d,e,f;c&&"select"===c.name&&c.binding&&(d=a(c.node.options).filter(b),c.getAttribute("multiple")?f=d.map(function(a){return a.value}):(e=d[0])&&(f=e.value),void 0!==f&&c.binding.setValue(f),c.bubble())}}(od),qd=function(a,b){return function(){if(this.rendered)throw new Error("Attempted to render an item that was already rendered");return this.docFrag=document.createDocumentFragment(),this.nodes=a(this.value,this.parentFragment.getNode(),this.docFrag),b(this.pElement),this.rendered=!0,this.docFrag}}(nd,pd),rd=function(a){return function(b){var c;(c=this.root.viewmodel.wrapped[this.keypath])&&(b=c.get()),b!==this.value&&(this.value=b,this.parentFragment.bubble(),this.rendered&&a.addView(this))}}(x),sd=function(){function a(a){return a?10===a?32:128>a?a:159>=a?d[a-128]:55296>a?a:57343>=a?65533:65535>=a?a:65533:65533}var b,c,d,e;return c={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},d=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],e=new RegExp("&(#?(?:x[\\w\\d]+|\\d+|"+Object.keys(c).join("|")+"));?","g"),b=function(b){return b.replace(e,function(b,d){var e;return e="#"!==d[0]?c[d]:"x"===d[1]?parseInt(d.substring(2),16):parseInt(d.substring(1),10),e?String.fromCharCode(a(e)):b})}}(T),td=function(a){return function(){return void 0!=this.value?a(""+this.value):""}}(sd),ud=function(a){return function(b){this.rendered&&b&&(this.nodes.forEach(a),this.rendered=!1)}}(Ac),vd=function(a,b){return function(){var c,d;if(this.rendered){for(;this.nodes&&this.nodes.length;)c=this.nodes.pop(),c.parentNode.removeChild(c);d=this.parentFragment.getNode(),this.nodes=a(this.value,d,this.docFrag),d.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),b(this.pElement)}}}(nd,pd),wd=function(a,b,c,d,e,f,g,h,i,j,k,l){var m=function(c){this.type=a.TRIPLE,b.init(this,c)};return m.prototype={detach:c,find:d,findAll:e,firstNode:f,getValue:b.getValue,rebind:b.rebind,render:g,resolve:b.resolve,setValue:h,toString:i,unbind:l,unrender:j,update:k},m}(Zb,Sc,jd,kd,ld,md,qd,rd,td,ud,vd,Dc),xd=function(){this.parentFragment.bubble()},yd=function(){var a,b=this.node;return b?((a=b.parentNode)&&a.removeChild(b),b):void 0},zd=function(a){return function(b){return a(this.node,b)?this.node:this.fragment&&this.fragment.find?this.fragment.find(b):void 0}}(hb),Ad=function(a,b){b._test(this,!0)&&b.live&&(this.liveQueries||(this.liveQueries=[])).push(b),this.fragment&&this.fragment.findAll(a,b)},Bd=function(a,b){this.fragment&&this.fragment.findAllComponents(a,b)},Cd=function(a){return this.fragment?this.fragment.findComponent(a):void 0},Dd=function(){return null},Ed=function(){return this.node},Fd=function(a){return this.attributes&&this.attributes[a]?this.attributes[a].value:void 0},Gd=function(){var a,b,c,d;return a="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),b="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),c=function(a){for(var b={},c=a.length;c--;)b[a[c].toLowerCase()]=a[c];return b},d=c(a.concat(b)),function(a){var b=a.toLowerCase();return d[b]||b}}(),Hd=function(a,b){return function(){var c=this.fragment.getValue();b(c,this.value)||("id"===this.name&&this.value&&delete this.root.nodes[this.value],this.value=c,"value"===this.name&&this.node&&(this.node._ractive.value=c),this.rendered&&a.addView(this))}}(x,t),Id=function(){var a=/^(allowFullscreen|async|autofocus|autoplay|checked|compact|controls|declare|default|defaultChecked|defaultMuted|defaultSelected|defer|disabled|draggable|enabled|formNoValidate|hidden|indeterminate|inert|isMap|itemScope|loop|multiple|muted|noHref|noResize|noShade|noValidate|noWrap|open|pauseOnExit|readOnly|required|reversed|scoped|seamless|selected|sortable|translate|trueSpeed|typeMustMatch|visible)$/i;return a}(),Jd=function(a,b){return function(c,d){var e,f;if(e=d.indexOf(":"),-1===e||(f=d.substr(0,e),"xmlns"===f))c.name=c.element.namespace!==a.html?b(d):d;else if(d=d.substring(e+1),c.name=b(d),c.namespace=a[f.toLowerCase()],c.namespacePrefix=f,!c.namespace)throw'Unknown namespace ("'+f+'")'}}(B,Gd),Kd=function(a){return function(b){var c=b.fragment.items;if(1===c.length)return c[0].type===a.INTERPOLATOR?c[0]:void 0}}(Zb),Ld=function(a,b){var c={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"};return function(d,e){var f;!d.pNode||d.namespace||e.pNode.namespaceURI&&e.pNode.namespaceURI!==a.html||(f=c[d.name]||d.name,void 0!==e.pNode[f]&&(d.propertyName=f),(b.test(f)||"value"===f)&&(d.useProperty=!0))}}(B,Id),Md=function(a,b,c,d,e,f){var g;return f.push(function(){g=f.Fragment}),function(f){return this.type=a.ATTRIBUTE,this.element=f.element,this.root=f.root,c(this,f.name),f.value&&"string"!=typeof f.value?(this.parentFragment=this.element.parentFragment,this.fragment=new g({template:f.value,root:this.root,owner:this}),this.value=this.fragment.getValue(),this.interpolator=d(this),this.isBindable=!!this.interpolator&&!this.interpolator.isStatic,e(this,f),void(this.ready=!0)):void(this.value=b.test(this.name)?!0:f.value||"")}}(Zb,Id,Jd,Kd,Ld,e),Nd=function(a,b,c,d){this.fragment&&this.fragment.rebind(a,b,c,d)},Od=function(a,b){var c={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"};return function(d){var e;this.node=d,d.namespaceURI&&d.namespaceURI!==a.html||(e=c[this.name]||this.name,void 0!==d[e]&&(this.propertyName=e),(b.test(e)||"value"===e)&&(this.useProperty=!0),"value"===e&&(this.useProperty=!0,d._ractive.value=this.value)),this.rendered=!0,this.update()}}(B,Id),Pd=function(a){function b(a){return a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var c;return c=function(){var c=(g=this).name,d=g.namespacePrefix,e=g.value,f=g.interpolator,g=g.fragment;if(("value"!==c||"select"!==this.element.name&&"textarea"!==this.element.name)&&("value"!==c||void 0===this.element.getAttribute("contenteditable")))return"name"===c&&"input"===this.element.name&&f?"name={{"+(f.keypath||f.ref)+"}}":a.test(c)?e?c:"":(g&&(e=g.toString()),d&&(c=d+":"+c),e?c+'="'+b(e)+'"':c)}}(Id),Qd=function(){this.fragment&&this.fragment.unbind(),"id"===this.name&&delete this.root.nodes[this.value]},Rd=function(){var a,b,c,d,e=this.value;if(!this.locked)for(this.node._ractive.value=e,a=this.node.options,d=a.length;d--;)if(b=a[d],c=b._ractive?b._ractive.value:b.value,c==e){b.selected=!0;break}},Sd=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]==b)return!0;return!1},Td=function(a,b){return function(){var c,d,e,f,g=this.value;for(b(g)||(g=[g]),c=this.node.options,d=c.length;d--;)e=c[d],f=e._ractive?e._ractive.value:e.value,e.selected=a(g,f)}}(Sd,g),Ud=function(){var a=(b=this).node,b=b.value;a.checked=b==a._ractive.value},Vd=function(a){return function(){var b,c,d,e,f=this.node;if(b=f.checked,f.value=this.element.getAttribute("value"),f.checked=this.element.getAttribute("value")===this.element.getAttribute("name"),b&&!f.checked&&this.element.binding&&(d=this.element.binding.siblings,e=d.length)){for(;e--;){if(c=d[e],!c.element.node)return;if(c.element.node.checked)return a.addViewmodel(c.root.viewmodel),c.handleChange()}a.addViewmodel(c.root.viewmodel),this.root.viewmodel.set(c.keypath,void 0)}}}(x),Wd=function(a){return function(){var b,c,d=(f=this).element,e=f.node,f=f.value;if(b=d.getAttribute("value"),a(f)){for(c=f.length;c--;)if(b==f[c])return void(e.checked=!0);e.checked=!1}else e.checked=f==b}}(g),Xd=function(){var a,b;a=this.node,b=this.value,void 0===b&&(b=""),a.className=b},Yd=function(){var a=(b=this).node,b=b.value;this.root.nodes[b]=a,a.id=b},Zd=function(){var a,b;a=this.node,b=this.value,void 0===b&&(b=""),a.style.setAttribute("cssText",b)},$d=function(){var a=this.value;void 0===a&&(a=""),this.locked||(this.node.innerHTML=a)},_d=function(){var a=(b=this).node,b=b.value;a._ractive.value=b,this.locked||(a.value=void 0==b?"":b)},ae=function(){this.locked||(this.node[this.propertyName]=this.value)},be=function(a){return function(){var b=(f=this).node,c=f.namespace,d=f.name,e=f.value,f=f.fragment;c?b.setAttributeNS(c,d,(f||e).toString()):a.test(d)?e?b.setAttribute(d,""):b.removeAttribute(d):b.setAttribute(d,(f||e).toString())}}(Id),ce=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return function(){var o,p,q=(s=this).name,r=s.element,s=s.node;"id"===q?p=i:"value"===q?"select"===r.name&&"value"===q?p=r.getAttribute("multiple")?d:c:"textarea"===r.name?p=l:null!=r.getAttribute("contenteditable")?p=k:"input"===r.name&&(o=r.getAttribute("type"),p="file"===o?b:"radio"===o&&r.binding&&"name"===r.binding.name?f:l):this.twoway&&"name"===q?"radio"===s.type?p=e:"checkbox"===s.type&&(p=g):"style"===q&&s.style.setAttribute?p=j:"class"!==q||s.namespaceURI&&s.namespaceURI!==a.html?this.useProperty&&(p=m):p=h,p||(p=n),this.update=p,this.update()}}(B,$,Rd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be),de=function(a,b,c,d,e,f,g){var h=function(a){this.init(a)};return h.prototype={bubble:a,init:b,rebind:c,render:d,toString:e,unbind:f,update:g},h}(Hd,Md,Nd,Od,Pd,Qd,ce),ee=function(a){return function(b,c){var d,e,f=[];for(d in c)c.hasOwnProperty(d)&&(e=new a({element:b,name:d,value:c[d],root:b.root}),f.push(f[d]=e));return f}}(de),fe=function(a,b,c,d){function e(a,b){var c=b?"svg":"div";return i.innerHTML="<"+c+" "+a+"></"+c+">",d(i.childNodes[0].attributes)}function f(a,b){for(var c=a.length;c--;)if(a[c].name===b.name)return!1;return!0}var g,h,i;"undefined"!=typeof document&&(i=c("div")),a.push(function(){h=a.Fragment});var j=function(a,b){this.element=a,this.root=a.root,this.parentFragment=a.parentFragment,this.attributes=[],this.fragment=new h({root:a.root,owner:this,template:[b]})};return j.prototype={bubble:function(){this.node&&this.update(),this.element.bubble()},rebind:function(a,b,c,d){this.fragment.rebind(a,b,c,d)},render:function(a){this.node=a,this.isSvg=a.namespaceURI===b.svg,this.update()},unbind:function(){this.fragment.unbind()},update:function(){var a,b,c=this;a=this.fragment.toString(),b=e(a,this.isSvg),this.attributes.filter(function(a){return f(b,a)}).forEach(function(a){c.node.removeAttribute(a.name)}),b.forEach(function(a){c.node.setAttribute(a.name,a.value)}),this.attributes=b},toString:function(){return this.fragment.toString()}},g=j}(e,B,C,od),ge=function(a){return function(b,c){return c?c.map(function(c){return new a(b,c)}):[]}}(fe),he=function(a){for(var b,c,d=Array.prototype.slice,e=d.call(arguments,1);c=e.shift();)for(b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a},ie=function(a,b,c,d,e){var f=function(a){var c,d,e;return this.element=a,this.root=a.root,this.attribute=a.attributes[this.name||"value"],c=this.attribute.interpolator,c.twowayBinding=this,c.keypath&&"${"===c.keypath.substr(0,2)?(b("Two-way binding does not work with expressions (`"+c.keypath.slice(2,-1)+"`)"),!1):(c.keypath||c.resolver.forceResolution(),this.keypath=d=c.keypath,void(void 0===this.root.viewmodel.get(d)&&this.getInitialValue&&(e=this.getInitialValue(),void 0!==e&&this.root.viewmodel.set(d,e))))};return f.prototype={handleChange:function(){var b=this;a.start(this.root),this.attribute.locked=!0,this.root.viewmodel.set(this.keypath,this.getValue()),a.scheduleTask(function(){return b.attribute.locked=!1}),a.end()},rebound:function(){var a,b,c;b=this.keypath,c=this.attribute.interpolator.keypath,b!==c&&(e(this.root._twowayBindings[b],this),this.keypath=c,a=this.root._twowayBindings[c]||(this.root._twowayBindings[c]=[]),a.push(this))},unbind:function(){}},f.extend=function(a){var b,e=this;return b=function(a){f.call(this,a),this.init&&this.init()},b.prototype=c(e.prototype),d(b.prototype,a),b.extend=f.extend,b},f}(x,l,S,he,p),je=function(){this._ractive.binding.handleChange()},ke=function(a,b){var c=a.extend({getInitialValue:function(){return this.element.fragment?this.element.fragment.toString():""},render:function(){var a=this.element.node;a.addEventListener("change",b,!1),this.root.lazy||(a.addEventListener("input",b,!1),a.attachEvent&&a.addEventListener("keyup",b,!1))},unrender:function(){var a=this.element.node;a.removeEventListener("change",b,!1),a.removeEventListener("input",b,!1),a.removeEventListener("keyup",b,!1)},getValue:function(){return this.element.node.innerHTML}});return c}(ie,je),le=function(){var a={};return function(b,c,d){var e=b+c+d;return a[e]||(a[e]=[])}}(),me=function(a,b,c,d,e){var f=c.extend({name:"checked",init:function(){this.siblings=d(this.root._guid,"radio",this.element.getAttribute("name")),this.siblings.push(this)},render:function(){var a=this.element.node;a.addEventListener("change",e,!1),a.attachEvent&&a.addEventListener("click",e,!1)},unrender:function(){var a=this.element.node;a.removeEventListener("change",e,!1),a.removeEventListener("click",e,!1)},handleChange:function(){a.start(this.root),this.siblings.forEach(function(a){a.root.viewmodel.set(a.keypath,a.getValue())}),a.end()},getValue:function(){return this.element.node.checked},unbind:function(){b(this.siblings,this)}});return f}(x,p,ie,le,je),ne=function(a,b,c,d){var e=b.extend({name:"name",init:function(){this.siblings=d(this.root._guid,"radioname",this.keypath),this.siblings.push(this),this.radioName=!0,this.attribute.twoway=!0},getInitialValue:function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},render:function(){var a=this.element.node;a.name="{{"+this.keypath+"}}",a.checked=this.root.viewmodel.get(this.keypath)==this.element.getAttribute("value"),a.addEventListener("change",c,!1),a.attachEvent&&a.addEventListener("click",c,!1)},unrender:function(){var a=this.element.node;a.removeEventListener("change",c,!1),a.removeEventListener("click",c,!1)},getValue:function(){var a=this.element.node;return a._ractive?a._ractive.value:a.value},handleChange:function(){this.element.node.checked&&b.prototype.handleChange.call(this)},rebound:function(a,c,d,e){var f;b.prototype.rebound.call(this,a,c,d,e),(f=this.element.node)&&(f.name="{{"+this.keypath+"}}")},unbind:function(){a(this.siblings,this)}});return e}(p,ie,je,le),oe=function(a,b,c,d,e,f){function g(a){return a.isChecked}function h(a){return a.element.getAttribute("value")}var i=d.extend({name:"name",getInitialValue:function(){return this.noInitialValue=!0,[]},init:function(){var a,b;this.checkboxName=!0,this.attribute.twoway=!0,this.siblings=e(this.root._guid,"checkboxes",this.keypath),this.siblings.push(this),this.noInitialValue&&(this.siblings.noInitialValue=!0),this.siblings.noInitialValue&&this.element.getAttribute("checked")&&(a=this.root.viewmodel.get(this.keypath),b=this.element.getAttribute("value"),a.push(b))},unbind:function(){c(this.siblings,this)},render:function(){var c,d,e=this.element.node;c=this.root.viewmodel.get(this.keypath),d=this.element.getAttribute("value"),this.isChecked=a(c)?b(c,d):c==d,e.name="{{"+this.keypath+"}}",e.checked=this.isChecked,e.addEventListener("change",f,!1),e.attachEvent&&e.addEventListener("click",f,!1)},unrender:function(){var a=this.element.node;a.removeEventListener("change",f,!1),a.removeEventListener("click",f,!1)},changed:function(){var a=!!this.isChecked;return this.isChecked=this.element.node.checked,this.isChecked===a},handleChange:function(){this.isChecked=this.element.node.checked,d.prototype.handleChange.call(this)},getValue:function(){return this.siblings.filter(g).map(h)}});return i}(g,Sd,p,ie,le,je),pe=function(a,b){var c=a.extend({name:"checked",render:function(){var a=this.element.node;a.addEventListener("change",b,!1),a.attachEvent&&a.addEventListener("click",b,!1)},unrender:function(){var a=this.element.node;a.removeEventListener("change",b,!1),a.removeEventListener("click",b,!1)},getValue:function(){return this.element.node.checked}});return c}(ie,je),qe=function(a,b,c){var d=b.extend({getInitialValue:function(){var a,b,c,d,e=this.element.options;if(void 0===this.element.getAttribute("value")&&(b=a=e.length,a)){for(;b--;)if(e[b].getAttribute("selected")){c=e[b].getAttribute("value"),d=!0;break}if(!d)for(;++b<a;)if(!e[b].getAttribute("disabled")){c=e[b].getAttribute("value");break}return void 0!==c&&(this.element.attributes.value.value=c),c}},render:function(){this.element.node.addEventListener("change",c,!1)},unrender:function(){this.element.node.removeEventListener("change",c,!1)},setValue:function(b){a.addViewmodel(this.root.viewmodel),this.root.viewmodel.set(this.keypath,b)},getValue:function(){var a,b,c,d,e;for(a=this.element.node.options,c=a.length,b=0;c>b;b+=1)if(d=a[b],a[b].selected)return e=d._ractive?d._ractive.value:d.value},forceUpdate:function(){var b=this,c=this.getValue();void 0!==c&&(this.attribute.locked=!0,a.addViewmodel(this.root.viewmodel),a.scheduleTask(function(){return b.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,c))}});return d}(x,ie,je),re=function(a){return function(b,c){var d;if(!a(b)||!a(c))return!1;if(b.length!==c.length)return!1;for(d=b.length;d--;)if(b[d]!==c[d])return!1;return!0}}(g),se=function(a,b,c,d){var e=c.extend({getInitialValue:function(){return this.element.options.filter(function(a){return a.getAttribute("selected")}).map(function(a){return a.getAttribute("value")})},render:function(){var a;this.element.node.addEventListener("change",d,!1),a=this.root.viewmodel.get(this.keypath),void 0===a&&this.handleChange()},unrender:function(){this.element.node.removeEventListener("change",d,!1)},setValue:function(){throw new Error("TODO not implemented yet")},getValue:function(){var a,b,c,d,e,f;for(a=[],b=this.element.node.options,d=b.length,c=0;d>c;c+=1)e=b[c],e.selected&&(f=e._ractive?e._ractive.value:e.value,a.push(f));return a},handleChange:function(){var a,d,e;return a=this.attribute,d=a.value,e=this.getValue(),void 0!==d&&b(e,d)||c.prototype.handleChange.call(this),this},forceUpdate:function(){var b=this,c=this.getValue();void 0!==c&&(this.attribute.locked=!0,a.addViewmodel(this.root.viewmodel),a.scheduleTask(function(){return b.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,c))},updateModel:function(){void 0!==this.attribute.value&&this.attribute.value.length||this.root.viewmodel.set(this.keypath,this.initialValue)}});return e}(x,re,qe,je),te=function(a,b){var c=a.extend({render:function(){this.element.node.addEventListener("change",b,!1)},unrender:function(){this.element.node.removeEventListener("change",b,!1)},getValue:function(){return this.element.node.files}});return c}(ie,je),ue=function(a,b){function c(){var a;b.call(this),a=this._ractive.root.viewmodel.get(this._ractive.binding.keypath,f),this.value=void 0==a?"":a}var d,e,f;return f={evaluateWrapped:!0},e=a.extend({getInitialValue:function(){return""},getValue:function(){return this.element.node.value},render:function(){var a=this.element.node;a.addEventListener("change",b,!1),this.root.lazy||(a.addEventListener("input",b,!1),a.attachEvent&&a.addEventListener("keyup",b,!1)),a.addEventListener("blur",c,!1)},unrender:function(){var a=this.element.node;a.removeEventListener("change",b,!1),a.removeEventListener("input",b,!1),a.removeEventListener("keyup",b,!1),a.removeEventListener("blur",c,!1)}}),d=e}(ie,je),ve=function(a){return a.extend({getInitialValue:function(){return void 0},getValue:function(){var a=parseFloat(this.element.node.value);return isNaN(a)?void 0:a}})}(ue),we=function(a,b,c,d,e,f,g,h,i,j,k){function l(a){return a&&a.isBindable}var m;return m=function(m){var n,o,p,q,r=m.attributes;return m.binding&&(m.binding.teardown(),m.binding=null),(m.getAttribute("contenteditable")||r.contenteditable&&l(r.contenteditable))&&l(r.value)?o=b:"input"===m.name?(n=m.getAttribute("type"),"radio"===n||"checkbox"===n?(p=l(r.name),q=l(r.checked),p&&q&&a.error({message:"badRadioInputBinding"}),p?o="radio"===n?d:e:q&&(o="radio"===n?c:f)):"file"===n&&l(r.value)?o=i:l(r.value)&&(o="number"===n||"range"===n?j:k)):"select"===m.name&&l(r.value)?o=m.getAttribute("multiple")?h:g:"textarea"===m.name&&l(r.value)&&(o=k),o?new o(m):void 0}}(n,ke,me,ne,oe,pe,qe,se,te,ve,ue),xe=function(){var a=this.getAction();a&&!this.hasListener?this.listen():!a&&this.hasListener&&this.unrender()},ye=function(a){return function(b){a(this.root,this.getAction(),{event:b})}}(ub),ze=function(){return this.action.toString().trim()},Ae=function(a,b,c,d,e){function f(a){var b,c,d;if(b=this.root,"function"!=typeof b[this.method])throw new Error('Attempted to call a non-existent method ("'+this.method+'")');c=this.keypaths.map(function(c){var d,e,f;if(void 0===c)return void 0;if(c.eventObject){if(d=a,e=c.refinements.length)for(f=0;e>f;f+=1)d=d[c.refinements[f]]}else d=b.viewmodel.get(c);return d}),b.event=a,d=this.fn.apply(null,c),b[this.method].apply(b,d),delete b.event}function g(a){d(this.root,this.getAction(),{event:a,args:this.params})}function h(a){var b=this.dynamicParams.getValue(k);"string"==typeof b&&(b=b.substr(1,b.length-2)),d(this.root,this.getAction(),{event:a,args:b})}var i,j,k={args:!0},l=/^event(?:\.(.+))?/;return c.push(function(){j=c.Fragment}),i=function(c,d,i){var k,m,n,o=this;o.element=c,o.root=c.root,o.name=d,-1!==d.indexOf("*")&&(e.error({debug:this.root.debug,message:"noElementProxyEventWildcards",args:{element:c.tagName,event:d}}),this.invalid=!0),i.m?(m=i.a.r,o.method=i.m,o.keypaths=[],o.fn=a(i.a.s,m.length),o.parentFragment=c.parentFragment,n=o.root,o.refResolvers=m.map(function(a,c){var d;return(d=l.exec(a))?(o.keypaths[c]={eventObject:!0,refinements:d[1]?d[1].split("."):[]},null):b(o,a,function(a){o.resolve(c,a)})}),this.fire=f):(k=i.n||i,"string"!=typeof k&&(k=new j({template:k,root:this.root,owner:this})),this.action=k,i.d?(this.dynamicParams=new j({template:i.d,root:this.root,owner:this.element}),this.fire=h):i.a&&(this.params=i.a,this.fire=g))}}(Lc,Kc,e,ub,n),Be=function(a){var b,c;b=this._ractive,c=b.events[a.type],c.fire({node:this,original:a,index:b.index,keypath:b.keypath,context:b.root.get(b.keypath)})},Ce=function(a,b,c){function d(a){return f[a]||(f[a]=function(b){var c=b.node._ractive;b.index=c.index,b.keypath=c.keypath,b.context=c.root.get(c.keypath),c.events[a].fire(b)}),f[a]}var e,f={},g={touchstart:!0,touchmove:!0,touchend:!0,touchcancel:!0,touchleave:!0};return e=function(){var e,f=this.name;if(!this.invalid){if(e=a.registries.events.find(this.root,f))this.custom=e(this.node,d(f));else{if(!("on"+f in this.node||window&&"on"+f in window))return void(g[f]||c.error({debug:this.root.debug,message:"missingPlugin",args:{plugin:"event",name:f}}));this.node.addEventListener(f,b,!1)}this.hasListener=!0}}}(bb,Be,n),De=function(a,b,c,d){function e(e){e&&e.rebind(a,b,c,d)}var f;return this.method?(f=this.element.parentFragment,void this.refResolvers.forEach(e)):("string"!=typeof this.action&&e(this.action),void(this.dynamicParams&&e(this.dynamicParams)))},Ee=function(){this.node=this.element.node,this.node._ractive.events[this.name]=this,(this.method||this.getAction())&&this.listen()},Fe=function(a,b){this.keypaths[a]=b},Ge=function(){function a(a){a.unbind()}var b;return b=function(){return this.method?void this.refResolvers.forEach(a):("string"!=typeof this.action&&this.action.unbind(),void(this.dynamicParams&&this.dynamicParams.unbind()))}}(),He=function(a){return function(){this.custom?this.custom.teardown():this.node.removeEventListener(this.name,a,!1),this.hasListener=!1}}(Be),Ie=function(a,b,c,d,e,f,g,h,i,j){var k=function(a,b,c){this.init(a,b,c)};return k.prototype={bubble:a,fire:b,getAction:c,init:d,listen:e,rebind:f,render:g,resolve:h,unbind:i,unrender:j},k
}(xe,ye,ze,Ae,Ce,De,Ee,Fe,Ge,He),Je=function(a){return function(b,c){var d,e,f,g,h=[];for(e in c)if(c.hasOwnProperty(e))for(f=e.split("-"),d=f.length;d--;)g=new a(b,f[d],c[e]),h.push(g);return h}}(Ie),Ke=function(a,b,c){var d,e,f;return b.push(function(){d=b.Fragment}),e={args:!0},f=function(b,f){var g,h,i,j=this;j.element=b,j.root=g=b.root,h=f.n||f,"string"!=typeof h&&(i=new d({template:h,root:g,owner:b}),h=i.toString(),i.unbind()),f.a?j.params=f.a:f.d&&(j.fragment=new d({template:f.d,root:g,owner:b}),j.params=j.fragment.getValue(e),j.fragment.bubble=function(){this.dirtyArgs=this.dirtyValue=!0,j.params=this.getValue(e),j.ready&&j.update()}),j.fn=c.registries.decorators.find(g,h),j.fn||a.error({debug:g.debug,message:"missingPlugin",args:{plugin:"decorator",name:h}})},f.prototype={init:function(){var a,b,c,d=this;if(a=d.element.node,d.params?(c=[a].concat(d.params),b=d.fn.apply(d.root,c)):b=d.fn.call(d.root,a),!b||!b.teardown)throw new Error("Decorator definition must return an object with a teardown method");d.actual=b,d.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},rebind:function(a,b,c,d){this.fragment&&this.fragment.rebind(a,b,c,d)},teardown:function(a){this.actual.teardown(),!a&&this.fragment&&this.fragment.unbind()}},f}(n,e,bb),Le=function(a){function b(a,b){for(var c=a.length;c--;)if(a[c]==b)return!0}var c;return c=function(c){var d,e,f,g,h;d=c.node,d&&(g=a(d.options),e=c.getAttribute("value"),f=c.getAttribute("multiple"),void 0!==e?(g.forEach(function(a){var c,d;c=a._ractive?a._ractive.value:a.value,d=f?b(e,c):e==c,d&&(h=!0),a.selected=d}),h||(g[0]&&(g[0].selected=!0),c.binding&&c.binding.forceUpdate())):c.binding&&c.binding.forceUpdate())}}(od),Me=function(a,b){return function(){var c=this;this.dirty||(this.dirty=!0,a.scheduleTask(function(){b(c),c.dirty=!1})),this.parentFragment.bubble()}}(x,Le),Ne=function(a){do if("select"===a.name)return a;while(a=a.parent)},Oe=function(a){return function(b,c){b.select=a(b.parent),b.select&&(b.select.options.push(b),c.a||(c.a={}),void 0!==c.a.value||c.a.hasOwnProperty("disabled")||(c.a.value=c.f),"selected"in c.a&&void 0!==b.select.getAttribute("value")&&delete c.a.selected)}}(Ne),Pe=function(a,b,c,d,e,f,g,h,i,j){var k;return j.push(function(){k=j.Fragment}),function(j){var l,m,n,o,p;this.type=a.ELEMENT,l=this.parentFragment=j.parentFragment,m=this.template=j.template,this.parent=j.pElement||l.pElement,this.root=n=l.root,this.index=j.index,this.name=b(m.e),"option"===this.name&&i(this,m),"select"===this.name&&(this.options=[],this.bubble=h),this.attributes=c(this,m.a),this.conditionalAttributes=d(this,m.m),m.f&&(this.fragment=new k({template:m.f,root:n,owner:this,pElement:this})),n.twoway&&(o=e(this,m.a))&&(this.binding=o,p=this.root._twowayBindings[o.keypath]||(this.root._twowayBindings[o.keypath]=[]),p.push(o)),m.v&&(this.eventHandlers=f(this,m.v)),m.o&&(this.decorator=new g(this,m.o)),this.intro=m.t0||m.t1,this.outro=m.t0||m.t2}}(Zb,Gd,ee,ge,we,Je,Ke,Me,Oe,e),Qe=function(a){return function(b,c){return b===c||a(b,c)}}(Fc),Re=function(a,b){return function(c,d,e,f){var g=c[d];g&&!a(g,f)&&a(g,e)&&(c[d]=b(g,e,f))}}(Qe,Gc),Se=function(a){return function(b,c,d,e){function f(a){a.rebind(b,c,d,e)}var g,h,i,j;if(this.attributes&&this.attributes.forEach(f),this.conditionalAttributes&&this.conditionalAttributes.forEach(f),this.eventHandlers&&this.eventHandlers.forEach(f),this.decorator&&f(this.decorator),this.fragment&&f(this.fragment),i=this.liveQueries)for(j=this.root,g=i.length;g--;)i[g]._makeDirty();this.node&&(h=this.node._ractive)&&(a(h,"keypath",d,e),void 0!=b&&(h.index[b]=c))}}(Re),Te=function(a){var b;(a.attributes.width||a.attributes.height)&&a.node.addEventListener("load",b=function(){var c=a.getAttribute("width"),d=a.getAttribute("height");void 0!==c&&a.node.setAttribute("width",c),void 0!==d&&a.node.setAttribute("height",d),a.node.removeEventListener("load",b,!1)},!1)},Ue=function(a,b,c){var d,e={};return c.push(function(){d=c.Fragment}),function(c,f,g){var h,i,j,k=this;return k.element=c,k.root=h=c.root,k.isIntro=g,i=f.n||f,"string"!=typeof i&&(j=new d({template:i,root:h,owner:c}),i=j.toString(),j.unbind()),k.name=i,f.a?k.params=f.a:f.d&&(j=new d({template:f.d,root:h,owner:c}),k.params=j.getValue(e),j.unbind()),k._fn=b.registries.transitions.find(h,i),k._fn?void 0:void a.error({debug:h.debug,message:"missingPlugin",args:{plugin:"transition",name:i}})}}(n,bb,e),Ve=function(a){return a.replace(/-([a-zA-Z])/g,function(a,b){return b.toUpperCase()})},We=function(a,b,c,d){var e,f,g;return a?(f={},g=c("div").style,e=function(a){var c,e,h;if(a=d(a),!f[a])if(void 0!==g[a])f[a]=a;else for(h=a.charAt(0).toUpperCase()+a.substring(1),c=b.length;c--;)if(e=b[c],void 0!==g[e+h]){f[a]=e+h;break}return f[a]}):e=null,e}(D,J,C,Ve),Xe=function(a,b,c,d){var e,f;return b?(f=window.getComputedStyle||a.getComputedStyle,e=function(a){var b,e,g,h,i;if(b=f(this.node),"string"==typeof a)return i=b[d(a)],"0px"===i&&(i=0),i;if(!c(a))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties");for(e={},g=a.length;g--;)h=a[g],i=b[d(h)],"0px"===i&&(i=0),e[h]=i;return e}):e=null,e}(T,D,g,We),Ye=function(a){return function(b,c){var d;if("string"==typeof b)this.node.style[a(b)]=c;else for(d in b)b.hasOwnProperty(d)&&(this.node.style[a(d)]=b[d]);return this}}(We),Ze=function(a,b,c){function d(a){return a}var e,f=function(e){var f;this.duration=e.duration,this.step=e.step,this.complete=e.complete,"string"==typeof e.easing?(f=e.root.easing[e.easing],f||(a('Missing easing function ("'+e.easing+'"). You may need to download a plugin from [TODO]'),f=d)):f="function"==typeof e.easing?e.easing:d,this.easing=f,this.start=b(),this.end=this.start+this.duration,this.running=!0,c.add(this)};return f.prototype={tick:function(a){var b,c;return this.running?a>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(b=a-this.start,c=this.easing(b/this.duration),this.step&&this.step(c),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}},e=f}(l,L,M),$e=function(a){var b=new RegExp("^-(?:"+a.join("|")+")-");return function(a){return a.replace(b,"")}}(J),_e=function(a){var b=new RegExp("^(?:"+a.join("|")+")([A-Z])");return function(a){var c;return a?(b.test(a)&&(a="-"+a),c=a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):""}}(J),af=function(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r={},s={};return a?(k=c("div").style,function(){void 0!==k.transition?(l="transition",m="transitionend",n=!0):void 0!==k.webkitTransition?(l="webkitTransition",m="webkitTransitionEnd",n=!0):n=!1}(),l&&(o=l+"Duration",p=l+"Property",q=l+"TimingFunction"),j=function(a,c,j,k,l){setTimeout(function(){var t,u,v,w,x;w=function(){u&&v&&(a.root.fire(a.name+":end",a.node,a.isIntro),l())},t=(a.node.namespaceURI||"")+a.node.tagName,a.node.style[p]=k.map(g).map(i).join(","),a.node.style[q]=i(j.easing||"linear"),a.node.style[o]=j.duration/1e3+"s",x=function(b){var c;c=k.indexOf(d(h(b.propertyName))),-1!==c&&k.splice(c,1),k.length||(a.node.removeEventListener(m,x,!1),v=!0,w())},a.node.addEventListener(m,x,!1),setTimeout(function(){for(var h,i,l,o,p,q=k.length,y=[];q--;)o=k[q],h=t+o,n&&!s[h]&&(a.node.style[g(o)]=c[o],r[h]||(i=a.getStyle(o),r[h]=a.getStyle(o)!=c[o],s[h]=!r[h],s[h]&&(a.node.style[g(o)]=i))),(!n||s[h])&&(void 0===i&&(i=a.getStyle(o)),l=k.indexOf(o),-1===l?b("Something very strange happened with transitions. If you see this message, please let @RactiveJS know. Thanks!"):k.splice(l,1),p=/[^\d]*$/.exec(c[o])[0],y.push({name:g(o),interpolator:e(parseFloat(i),parseFloat(c[o])),suffix:p}));y.length?new f({root:a.root,duration:j.duration,easing:d(j.easing||""),step:function(b){var c,d;for(d=y.length;d--;)c=y[d],a.node.style[c.name]=c.interpolator(b)+c.suffix},complete:function(){u=!0,w()}}):u=!0,k.length||(a.node.removeEventListener(m,x,!1),v=!0,w())},0)},j.delay||0)}):j=null,j}(D,l,C,Ve,cb,Ze,We,$e,_e),bf=function(a){function b(){i.hidden=document[e]}function c(){i.hidden=!0}function d(){i.hidden=!1}var e,f,g,h,i;if("undefined"!=typeof document){if(e="hidden",i={},e in document)g="";else for(h=a.length;h--;)f=a[h],e=f+"Hidden",e in document&&(g=f);void 0!==g?(document.addEventListener(g+"visibilitychange",b),b()):("onfocusout"in document?(document.addEventListener("focusout",c),document.addEventListener("focusin",d)):(window.addEventListener("pagehide",c),window.addEventListener("blur",c),window.addEventListener("pageshow",d),window.addEventListener("focus",d)),i.hidden=!1)}return i}(J),cf=function(a,b,c,d,e,f,g){var h,i,j;return b?(i=window.getComputedStyle||a.getComputedStyle,h=function(a,b,h,k){var l,m=this;if(g.hidden)return this.setStyle(a,b),j||(j=d.resolve());"string"==typeof a?(l={},l[a]=b):(l=a,k=h,h=b),h||(c('The "'+m.name+'" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340'),h=m,k=m.complete);var n=new d(function(a){var b,c,d,g,j,k,n;if(!h.duration)return m.setStyle(l),void a();for(b=Object.keys(l),c=[],d=i(m.node),j={},k=b.length;k--;)n=b[k],g=d[e(n)],"0px"===g&&(g=0),g!=l[n]&&(c.push(n),m.node.style[e(n)]=g);return c.length?void f(m,l,h,c,a):void a()});return k&&(c("t.animateStyle returns a Promise as of 0.4.0. Transition authors should do t.animateStyle(...).then(callback)"),n.then(k)),n}):h=null,h}(T,D,l,q,We,af,bf),df=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);return c.forEach(function(b){for(var c in b)!b.hasOwnProperty(c)||c in a||(a[c]=b[c])}),a},ef=function(a){return function(b,c){return"number"==typeof b?b={duration:b}:"string"==typeof b?b="slow"===b?{duration:600}:"fast"===b?{duration:200}:{duration:400}:b||(b={}),a({},b,c)}}(df),ff=function(){function a(a,b){b?a.setAttribute("style",b):(a.getAttribute("style"),a.removeAttribute("style"))}var b;return b=function(){var b,c,d,e=this;return b=e.node=e.element.node,c=b.getAttribute("style"),e.complete=function(f){d||(!f&&e.isIntro&&a(b,c),b._ractive.transition=null,e._manager.remove(e),d=!0)},e._fn?void e._fn.apply(e.root,[e].concat(e.params)):void e.complete()}}(),gf=function(a,b,c,d,e,f,g){var h,i;return g.push(function(){h=g.Fragment}),i=function(a,b,c){this.init(a,b,c)},i.prototype={init:a,start:f,getStyle:b,setStyle:c,animateStyle:d,processParams:e},i}(Ue,Xe,Ye,cf,ef,ff,e),hf=function(a,b,c,d,e,f,g,h,i,j,k){function l(b){var c,d,e;return c=(d=b.getAttribute("xmlns"))?d:"svg"===b.name?a.svg:(e=b.parent)?"foreignObject"===e.name?a.html:e.node.namespaceURI:b.root.el.namespaceURI}function m(a){var c,d,e;if(a.select&&(d=a.select.getAttribute("value"),void 0!==d))if(c=a.getAttribute("value"),a.select.node.multiple&&b(d)){for(e=d.length;e--;)if(c==d[e]){a.node.selected=!0;break}}else a.node.selected=c==d}function n(a){var b,c,d,e,f;b=a.root;do for(c=b._liveQueries,d=c.length;d--;)e=c[d],f=c["_"+e],f._test(a)&&(a.liveQueries||(a.liveQueries=[])).push(f);while(b=b._parent)}var o,p,q;return p=function(){var a=this.node,b=this.fragment.toString(!1);if(window&&window.appearsToBeIELessEqual8&&(a.type="text/css"),a.styleSheet)a.styleSheet.cssText=b;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(b))}},q=function(){this.node.type&&"text/javascript"!==this.node.type||c("Script tag was updated. This does not cause the code to be re-evaluated!"),this.node.text=this.fragment.toString(!1)},o=function(){var a,b,c=this,o=this.root;if(a=l(this),b=this.node=e(this.name,a),o.constructor.css&&this.parentFragment.getNode()===o.el&&this.node.setAttribute("data-rvcguid",o.constructor._guid),f(this.node,"_ractive",{value:{proxy:this,keypath:i(this.parentFragment),index:this.parentFragment.indexRefs,events:d(null),root:o}}),this.attributes.forEach(function(a){return a.render(b)}),this.conditionalAttributes.forEach(function(a){return a.render(b)}),this.fragment&&("script"===this.name?(this.bubble=q,this.node.text=this.fragment.toString(!1),this.fragment.unrender=g):"style"===this.name?(this.bubble=p,this.bubble(),this.fragment.unrender=g):this.binding&&this.getAttribute("contenteditable")?this.fragment.unrender=g:this.node.appendChild(this.fragment.render())),this.eventHandlers&&this.eventHandlers.forEach(function(a){return a.render()}),this.binding&&(this.binding.render(),this.node._ractive.binding=this.binding),"img"===this.name&&j(this),this.decorator&&this.decorator.fn&&h.scheduleTask(function(){return c.decorator.init()},!0),o.transitionsEnabled&&this.intro){var r=new k(this,this.intro,!0);h.registerTransition(r),h.scheduleTask(function(){return r.start()},!0),this.transition=r}return"option"===this.name&&m(this),this.node.autofocus&&h.scheduleTask(function(){return c.node.focus()},!0),n(this),this.node}}(B,g,l,S,C,E,$,x,s,Te,gf),jf=function(){var a=/^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;return a}(),kf=function(a,b,c){function d(a){var c,d,e;if(c=a.getAttribute("value"),void 0===c||!a.select)return!1;if(d=a.select.getAttribute("value"),d==c)return!0;if(a.select.getAttribute("multiple")&&b(d))for(e=d.length;e--;)if(d[e]==c)return!0}function e(a){var b,c,d,e;return b=a.attributes,c=b.type,d=b.value,e=b.name,c&&"radio"===c.value&&d&&e.interpolator&&d.value===e.interpolator.value?!0:void 0}function f(a){var b=a.toString();return b?" "+b:""}var g;return g=function(){var b,g;return b="<"+(this.template.y?"!DOCTYPE":this.template.e),b+=this.attributes.map(f).join("")+this.conditionalAttributes.map(f).join(""),"option"===this.name&&d(this)&&(b+=" selected"),"input"===this.name&&e(this)&&(b+=" checked"),b+=">","textarea"===this.name&&void 0!==this.getAttribute("value")?b+=c(this.getAttribute("value")):void 0!==this.getAttribute("contenteditable")&&(b+=this.getAttribute("value")),this.fragment&&(g="script"!==this.name&&"style"!==this.name,b+=this.fragment.toString(g)),a.test(this.template.e)||(b+="</"+this.template.e+">"),b}}(jf,g,zc),lf=function(a){return function(b){b.select&&a(b.select.options,b)}}(p),mf=function(a){function b(a){a.unbind()}var c;return c=function(){this.fragment&&this.fragment.unbind(),this.binding&&this.binding.unbind(),this.eventHandlers&&this.eventHandlers.forEach(b),"option"===this.name&&a(this),this.attributes.forEach(b),this.conditionalAttributes.forEach(b)}}(lf),nf=function(a,b){function c(a){var b,c,d;for(d=a.liveQueries.length;d--;)b=a.liveQueries[d],c=b.selector,b._remove(a.node)}var d;return d=function(d){var e,f;if(this.transition&&this.transition.complete(),"option"===this.name?this.detach():d&&a.detachWhenReady(this),this.fragment&&this.fragment.unrender(!1),(e=this.binding)&&(this.binding.unrender(),this.node._ractive.binding=null,f=this.root._twowayBindings[e.keypath],f.splice(f.indexOf(e),1)),this.eventHandlers&&this.eventHandlers.forEach(function(a){return a.unrender()}),this.decorator&&this.decorator.teardown(),this.root.transitionsEnabled&&this.outro){var g=new b(this,this.outro,!1);a.registerTransition(g),a.scheduleTask(function(){return g.start()})}this.liveQueries&&c(this)}}(x,gf),of=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=function(a){this.init(a)};return p.prototype={bubble:a,detach:b,find:c,findAll:d,findAllComponents:e,findComponent:f,findNextNode:g,firstNode:h,getAttribute:i,init:j,rebind:k,render:l,toString:m,unbind:n,unrender:o},p}(xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Pe,Se,hf,kf,mf,nf),pf=function(){function a(a,b){var c=d.exec(b)[0];return null===a||c.length<a.length?c:a}var b,c=/^\s*$/,d=/^\s*/;return b=function(b){var d,e,f,g;return d=b.split("\n"),e=d[0],void 0!==e&&c.test(e)&&d.shift(),f=d[d.length-1],void 0!==f&&c.test(f)&&d.pop(),g=d.reduce(a,null),g&&(b=d.map(function(a){return a.replace(g,"")}).join("\n")),b}}(),qf=function(a,b,c,d){function e(d,e){var f=b.registries.partials,g=f.findInstance(d,e);if(g){var h,i=g.partials[e];if("function"==typeof i&&(h=i.bind(g),h.isOwner=g.partials.hasOwnProperty(e),i=h(g.data,c)),!i)return void a.warn({debug:d.debug,message:"noRegistryFunctionReturn",args:{registry:"partial",name:e}});if(!c.isParsed(i)){var j=c.parse(i,c.getParseOptions(g));j.p&&a.warn({debug:d.debug,message:"noNestedPartials",args:{rname:e}});var k=h?g:f.findOwner(g,e);k.partials[e]=i=j.t}return h&&(i._fn=h),i.v?i.t:i}}var f;return f=function(a,b){var f;if(f=e(a,b))return f;if(f=c.fromId(b,{noThrow:!0})){f=d(f);var g=c.parse(f,c.getParseOptions(a));return a.partials[b]=g.t}}}(n,bb,W,pf),rf=function(a,b){var c;return b?c=a.split("\n").map(function(a,c){return c?b+a:a}).join("\n"):a},sf=function(a,b,c,d,e,f,g,h,i){var j,k;return e.push(function(){k=e.Fragment}),j=function(a){var d,e;d=this.parentFragment=a.parentFragment,this.root=d.root,this.type=b.PARTIAL,this.index=a.index,this.name=a.template.r,this.fragment=this.fragmentToRender=this.fragmentToUnrender=null,g.init(this,a),!this.keypath&&(e=c(this.root,this.name))&&(i.call(this),this.isNamed=!0,this.setTemplate(e))},j.prototype={bubble:function(){this.parentFragment.bubble()},detach:function(){return this.fragment.detach()},find:function(a){return this.fragment.find(a)},findAll:function(a,b){return this.fragment.findAll(a,b)},findComponent:function(a){return this.fragment.findComponent(a)},findAllComponents:function(a,b){return this.fragment.findAllComponents(a,b)},firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},getValue:function(){return this.fragment.getValue()},rebind:function(a,b,c,d){h.call(this,a,b,c,d),this.fragment.rebind(a,b,c,d)},render:function(){return this.docFrag=document.createDocumentFragment(),this.update(),this.rendered=!0,this.docFrag},resolve:g.resolve,setValue:function(b){var d;(void 0===b||b!==this.value)&&(d=c(this.root,""+b),!d&&this.name&&(d=c(this.root,this.name))&&(i.call(this),this.isNamed=!0),d||a.error({debug:this.root.debug,message:"noTemplateForPartial",args:{name:this.name}}),this.setTemplate(d||[]),this.value=b,this.bubble(),this.rendered&&f.addView(this))},setTemplate:function(a){this.fragment&&(this.fragment.unbind(),this.fragmentToUnrender=this.fragment),this.fragment=new k({template:a,root:this.root,owner:this,pElement:this.parentFragment.pElement}),this.fragmentToRender=this.fragment},toString:function(a){var c,e,f,g;return c=this.fragment.toString(a),e=this.parentFragment.items[this.index-1],e&&e.type===b.TEXT?(f=e.text.split("\n").pop(),(g=/^\s+$/.exec(f))?d(c,g[0]):c):c},unbind:function(){this.isNamed||i.call(this),this.fragment&&this.fragment.unbind()},unrender:function(a){this.rendered&&(this.fragment&&this.fragment.unrender(a),this.rendered=!1)},update:function(){var a,b;this.fragmentToUnrender&&(this.fragmentToUnrender.unrender(!0),this.fragmentToUnrender=null),this.fragmentToRender&&(this.docFrag.appendChild(this.fragmentToRender.render()),this.fragmentToRender=null),this.rendered&&(a=this.parentFragment.getNode(),b=this.parentFragment.findNextNode(this),a.insertBefore(this.docFrag,b))}},j}(n,Zb,qf,rf,e,x,Sc,Rc,Dc),tf=function(a,b,c){var d;return c.push(function(){d=c.Ractive}),function e(c,d){var f,g=a.registries.components.findInstance(c,d);if(g&&(f=g.components[d],!f._parent)){var h=f.bind(g);if(h.isOwner=g.components.hasOwnProperty(d),f=h(g.data),!f)return void b.warn({debug:c.debug,message:"noRegistryFunctionReturn",args:{registry:"component",name:d}});"string"==typeof f&&(f=e(c,f)),f._fn=h,g.components[d]=f}return f}}(bb,n,e),uf=function(a){var b=new a("detach");return function(){var a=this.instance.fragment.detach();return b.fire(this.instance),a}}(o),vf=function(a){return this.instance.fragment.find(a)},wf=function(a,b){return this.instance.fragment.findAll(a,b)},xf=function(a,b){b._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(a,b)},yf=function(a){return a&&a!==this.name?this.instance.fragment?this.instance.fragment.findComponent(a):null:this.instance},zf=function(){return this.parentFragment.findNextNode(this)},Af=function(){return this.rendered?this.instance.fragment.firstNode():null},Bf=function(a,b){var c,d;return b.push(function(){c=b.Fragment}),d=function(a,b,d){this.parentFragment=a.parentFragment,this.component=a,this.key=b,this.fragment=new c({template:d,root:a.root,owner:this}),this.value=this.fragment.getValue()},d.prototype={bubble:function(){this.dirty||(this.dirty=!0,a.addView(this))},update:function(){var b=this.fragment.getValue();this.component.instance.viewmodel.set(this.key,b),a.addViewmodel(this.component.instance.viewmodel),this.value=b,this.dirty=!1},rebind:function(a,b,c,d){this.fragment.rebind(a,b,c,d)},unbind:function(){this.fragment.unbind()}},d}(x,e),Cf=function(a,b){var c=function(c,d,e,f){var g=this;this.root=c.root,this.parentFragment=c.parentFragment,this.ready=!1,this.hash=null,this.resolver=new a(this,e,function(a){g.binding||(g.binding=c.bindings[g.hash])?(c.bindings[g.hash]=null,g.binding.rebind(a),g.hash=a+"="+d,c.bindings[g.hash]):g.ready?b(c,c.root,a,d):f.push({childKeypath:d,parentKeypath:a}),g.value=c.root.viewmodel.get(a)})};return c.prototype={rebind:function(a,b,c,d){this.resolver.rebind(a,b,c,d)},unbind:function(){this.resolver.unbind()}},c}(Oc,u),Df=function(a,b,c,d,e){function f(f,g,h,i){var j,k,l,m,n,o;if(l=f.root,m=f.parentFragment,"string"==typeof h)return k=b(h),k?k.value:h;if(null===h)return!0;if(1===h.length&&h[0].t===a.INTERPOLATOR){if(h[0].r)return m.indexRefs&&void 0!==m.indexRefs[o=h[0].r]?(f.indexRefBindings[o]=g,m.indexRefs[o]):(n=c(l,h[0].r,m)||h[0].r,i.push({childKeypath:g,parentKeypath:n}),l.viewmodel.get(n));if(h[0].rx)return j=new e(f,g,h[0].rx,i),f.complexParameters.push(j),j.ready=!0,j.value}return j=new d(f,g,h),f.complexParameters.push(j),j.value}var g;return g=function(a,b,c,d){var e,g,h={};a.complexParameters=[];for(e in c)c.hasOwnProperty(e)&&(g=f(a,e,c[e],d),(void 0!==g||void 0===b[e])&&(h[e]=g));return h}}(Zb,xc,v,Bf,Cf),Ef=function(a){return function(b,c,d,e){var f,g,h,i;return g=b.parentFragment,i=b.root,h={content:e||[]},c.defaults.el&&a.warn({debug:i.debug,message:"defaultElSpecified",args:{name:b.name}}),f=new c({el:null,append:!0,data:d,partials:h,magic:i.magic||c.defaults.magic,modifyArrays:i.modifyArrays,_parent:i,_component:b,adapt:i.adapt,"yield":{template:e,instance:i}})}}(n),Ff=function(a){return function(b,c){c.forEach(function(c){var d,e;a(b,b.root,c.parentKeypath,c.childKeypath),d=b.instance.viewmodel.get(c.childKeypath),e=b.root.viewmodel.get(c.parentKeypath),void 0!==d&&void 0===e&&b.root.viewmodel.set(c.parentKeypath,d)})}}(u),Gf=function(a,b,c){function d(a,d,e,f){"string"!=typeof f&&c.error({debug:d.debug,message:"noComponentEventArguments"}),a.on(e,function(){var a,c;return arguments.length&&arguments[0]&&arguments[0].node&&(a=Array.prototype.shift.call(arguments)),c=Array.prototype.slice.call(arguments),b(d,f,{event:a,args:c}),!1})}var e,f;return a.push(function(){f=a.Fragment}),e=function(a,b){var c;for(c in b)b.hasOwnProperty(c)&&d(a.instance,a.root,c,b[c])}}(e,ub,n),Hf=function(a){var b,c;for(b=a.root;b;)(c=b._liveComponentQueries["_"+a.name])&&c.push(a.instance),b=b._parent},If=function(a,b,c,d,e,f,g){return function(h,i){var j,k,l,m;if(j=this.parentFragment=h.parentFragment,k=j.root,this.root=k,this.type=a.COMPONENT,this.name=h.template.e,this.index=h.index,this.indexRefBindings={},this.bindings=[],this.yielders=[],!i)throw new Error('Component "'+this.name+'" not found');m=[],l=c(this,i.defaults.data||{},h.template.a,m),d(this,i,l,h.template.f),e(this,m),f(this,h.template.v),(h.template.t1||h.template.t2||h.template.o)&&b('The "intro", "outro" and "decorator" directives have no effect on components'),g(this)}}(Zb,l,Df,Ef,Ff,Gf,Hf),Jf=function(a,b){return function(c,d,e,f){function g(a){a.rebind(c,d,e,f)}var h,i,j=this.instance,k=j._parent;this.bindings.forEach(function(a){var c;a.root===k&&(c=b(a.keypath,e,f))&&a.rebind(c)}),this.complexParameters.forEach(g),this.yielders[0]&&g(this.yielders[0]),(h=this.indexRefBindings[c])&&(a.addViewmodel(j.viewmodel),j.viewmodel.set(h,d)),(i=this.root._liveComponentQueries["_"+this.name])&&i._makeDirty()}}(x,Gc),Kf=function(){var a=this.instance;return a.render(this.parentFragment.getNode()),this.rendered=!0,a.fragment.detach()},Lf=function(){return this.instance.fragment.toString()},Mf=function(a,b){function c(a){a.unbind()}function d(a){var b,c;b=a.root;do(c=b._liveComponentQueries["_"+a.name])&&c._remove(a);while(b=b._parent)}var e,f=new a("teardown");return e=function(){var a=this.instance;this.complexParameters.forEach(c),this.bindings.forEach(c),d(this),a.fragment.unbind(),a.viewmodel.teardown(),a.fragment.rendered&&a.el.__ractive_instances__&&b(a.el.__ractive_instances__,a),f.fire(a)}}(o,p),Nf=function(a){this.shouldDestroy=a,this.instance.unrender()},Of=function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=function(a,b){this.init(a,b)};return n.prototype={detach:a,find:b,findAll:c,findAllComponents:d,findComponent:e,findNextNode:f,firstNode:g,init:h,rebind:i,render:j,toString:k,unbind:l,unrender:m},n}(uf,vf,wf,xf,yf,zf,Af,If,Jf,Kf,Lf,Mf,Nf),Pf=function(a,b){var c=function(b){this.type=a.COMMENT,this.value=b.template.c};return c.prototype={detach:b,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createComment(this.value)),this.node},toString:function(){return"<!--"+this.value+"-->"},unrender:function(a){a&&this.node.parentNode.removeChild(this.node)}},c}(Zb,Bc),Qf=function(a,b,c){var d;c.push(function(){d=c.Fragment});var e=function(b){var c,e;c=b.parentFragment.root,this.component=e=c.component,this.surrogateParent=b.parentFragment,this.parentFragment=e.parentFragment,this.fragment=new d({owner:this,root:c.yield.instance,template:c.yield.template,pElement:this.surrogateParent.pElement}),e.yielders.push(this),a.scheduleTask(function(){if(e.yielders.length>1)throw new Error("A component template can only have one {{yield}} declaration at a time")})};return e.prototype={detach:function(){return this.fragment.detach()},find:function(a){return this.fragment.find(a)},findAll:function(a,b){return this.fragment.findAll(a,b)},findComponent:function(a){return this.fragment.findComponent(a)},findAllComponents:function(a,b){return this.fragment.findAllComponents(a,b)},findNextNode:function(){return this.surrogateParent.findNextNode(this)},firstNode:function(){return this.fragment.firstNode()},getValue:function(a){return this.fragment.getValue(a)},render:function(){return this.fragment.render()},unbind:function(){this.fragment.unbind()},unrender:function(a){this.fragment.unrender(a),b(this.component.yielders,this)},rebind:function(a,b,c,d){this.fragment.rebind(a,b,c,d)},toString:function(){return this.fragment.toString()}},e}(x,p,e),Rf=function(a,b,c,d,e,f,g,h,i,j,k){return function(l){if("string"==typeof l.template)return new b(l);switch(l.template.t){case a.INTERPOLATOR:return"yield"===l.template.r?new k(l):new c(l);case a.SECTION:return new d(l);case a.TRIPLE:return new e(l);case a.ELEMENT:var m;return(m=h(l.parentFragment.root,l.template.e))?new i(l,m):new f(l);case a.PARTIAL:return new g(l);case a.COMMENT:return new j(l);default:throw new Error("Something very strange happened. Please file an issue at https://github.com/ractivejs/ractive/issues. Thanks!")}}}(Zb,Cc,Tc,id,wd,of,sf,tf,Of,Pf,Qf),Sf=function(a,b,c){return function(d){var e,f,g,h=this;if(this.owner=d.owner,e=this.parent=this.owner.parentFragment,this.root=d.root,this.pElement=d.pElement,this.context=d.context,this.owner.type===a.SECTION&&(this.index=d.index),e&&(f=e.indexRefs)){this.indexRefs=b(null);for(g in f)this.indexRefs[g]=f[g]}d.indexRef&&(this.indexRefs||(this.indexRefs={}),this.indexRefs[d.indexRef]=d.index),"string"==typeof d.template?d.template=[d.template]:d.template||(d.template=[]),this.items=d.template.map(function(a,b){return c({parentFragment:h,pElement:d.pElement,template:a,index:b})}),this.value=this.argsList=null,this.dirtyArgs=this.dirtyValue=!0,this.bound=!0}}(Zb,S,Rf),Tf=function(a){return function(b,c,d,e){this.index=c,a(this,"context",d,e),this.indexRefs&&void 0!==this.indexRefs[b]&&(this.indexRefs[b]=c),this.items.forEach(function(a){a.rebind&&a.rebind(b,c,d,e)})}}(Re),Uf=function(){var a;return 1===this.items.length?a=this.items[0].render():(a=document.createDocumentFragment(),this.items.forEach(function(b){a.appendChild(b.render())})),this.rendered=!0,a},Vf=function(a){return this.items?this.items.map(function(b){return b.toString(a)}).join(""):""},Wf=function(){function a(a){a.unbind&&a.unbind()}var b;return b=function(){this.bound&&(this.items.forEach(a),this.bound=!1)}}(),Xf=function(a){if(!this.rendered)throw new Error("Attempted to unrender a fragment that was not rendered");this.items.forEach(function(b){return b.unrender(a)}),this.rendered=!1},Yf=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=function(a){this.init(a)};return r.prototype={bubble:a,detach:b,find:c,findAll:d,findAllComponents:e,findComponent:f,findNextNode:g,firstNode:h,getNode:i,getValue:j,init:k,rebind:l,render:m,toString:n,unbind:o,unrender:p},q.Fragment=r,r}(Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,yc,Sf,Tf,Uf,Vf,Wf,Xf,e),Zf=function(a,b,c,d){var e=["template","partials","components","decorators","events"],f=new a("reset");return function(a,g){var h,i,j,k,l;if("function"!=typeof a||g?a=a||{}:(g=a,a={}),"object"!=typeof a)throw new Error("The reset method takes either no arguments, or an object containing new data");for((i=this.viewmodel.wrapped[""])&&i.reset?i.reset(a)===!1&&(this.data=a):this.data=a,j=d.reset(this),k=j.length;k--;)if(e.indexOf(j[k])>-1){l=!0;break}if(l){var m;this.viewmodel.mark(""),(m=this.component)&&(m.shouldDestroy=!0),this.unrender(),m&&(m.shouldDestroy=!1),this.fragment.template!==this.template&&(this.fragment.unbind(),this.fragment=new c({template:this.template,root:this,owner:this})),h=this.render(this.el,this.anchor)}else h=b.start(this,!0),this.viewmodel.mark(""),b.end();return f.fire(this,a),g&&h.then(g),h}}(o,x,Yf,bb),$f=function(a,b){return function(c){var d,e;a.template.init(null,this,{template:c}),d=this.transitionsEnabled,this.transitionsEnabled=!1,(e=this.component)&&(e.shouldDestroy=!0),this.unrender(),e&&(e.shouldDestroy=!1),this.fragment.unbind(),this.fragment=new b({template:this.template,root:this,owner:this}),this.render(this.el,this.anchor),this.transitionsEnabled=d}}(bb,Yf),_f=function(a){return a("reverse")}(Lb),ag=function(a,b,c,d){var e=/\*/;return function(f,g,h){var i,j,k=this;if(j=a.start(this,!0),b(f)){i=f,h=g;for(f in i)i.hasOwnProperty(f)&&(g=i[f],f=c(f),this.viewmodel.set(f,g))}else f=c(f),e.test(f)?d(this,f).forEach(function(a){k.viewmodel.set(a,g)}):this.viewmodel.set(f,g);return a.end(),h&&j.then(h.bind(this)),j}}(x,h,I,Bb),bg=function(a){return a("shift")}(Lb),cg=function(a){return a("sort")}(Lb),dg=function(a){return a("splice")}(Lb),eg=function(a){return function(b,c){return a(this,b,void 0===c?-1:-c)}}(G),fg=function(a,b,c){var d=new a("teardown");return function(a){var e;return this.fragment.unbind(),this.viewmodel.teardown(),this.fragment.rendered&&this.el.__ractive_instances__&&c(this.el.__ractive_instances__,this),this.shouldDestroy=!0,e=this.fragment.rendered?this.unrender():b.resolve(),d.fire(this),a&&e.then(a.bind(this)),e}}(o,q,p),gg=function(a){return function(b,c){var d;return"string"!=typeof b&&a.errorOnly({debug:this.debug,messsage:"badArguments",arg:{arguments:b}}),d=this.get(b),this.set(b,!d,c)}}(n),hg=function(){return this.fragment.toString(!0)},ig=function(a,b,c,d,e,f){var g=new b("unrender");return function(){var b,h,i=this;if(!this.fragment.rendered)return c.warn({debug:this.debug,message:"ractive.unrender() was called on a Ractive instance that was not rendered"}),d.resolve();for(b=f.start(this,!0),h=!this.component||this.component.shouldDestroy||this.shouldDestroy,this.constructor.css&&b.then(function(){a.remove(i.constructor)});this._animations[0];)this._animations[0].stop();return this.fragment.unrender(h),e(this.el.__ractive_instances__,this),g.fire(this),f.end(),b}}(Ob,o,n,q,p,x),jg=function(a){return a("unshift")
}(Lb),kg=function(a,b){var c=new a("update");return function(a,d){var e;return"function"==typeof a?(d=a,a=""):a=a||"",e=b.start(this,!0),this.viewmodel.mark(a),b.end(),c.fire(this,a),d&&e.then(d.bind(this)),e}}(o,x),lg=function(a,b){function c(d,e,f,g){var h,i,j,k,l,m,n=[];if(h=d._twowayBindings[e],h&&(j=h.length))for(;j--;)k=h[j],(!k.radioName||k.element.node.checked)&&(k.checkboxName?n[k.keypath]||k.changed()||(n.push(k.keypath),n[k.keypath]=k):(l=k.attribute.value,m=k.getValue(),a(l,m)||b(l,m)||(f[e]=m)));if(n.length&&n.forEach(function(b){var c,d,e;c=n[b],d=c.attribute.value,e=c.getValue(),a(d,e)||(f[b]=e)}),g&&(i=d.viewmodel.depsMap["default"][e]))for(j=i.length;j--;)c(d,i[j],f,g)}var d;return d=function(a,b){var d;return"string"!=typeof a&&(a="",b=!0),c(this,a,d={},b),this.set(d)}}(re,t),mg=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return{add:a,animate:b,detach:c,find:d,findAll:e,findAllComponents:f,findComponent:g,fire:h,get:i,insert:j,merge:k,observe:l,off:m,on:n,pop:o,push:p,render:q,reset:r,resetTemplate:s,reverse:t,set:u,shift:v,sort:w,splice:x,subtract:y,teardown:z,toggle:A,toHTML:B,unrender:C,unshift:D,update:E,updateModel:F}}(H,eb,fb,gb,qb,rb,sb,vb,wb,yb,zb,Fb,Ib,Jb,Mb,Nb,Pb,Zf,$f,_f,ag,bg,cg,dg,eg,fg,gg,hg,ig,jg,kg,lg),ng=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b,c;return b=16*Math.random()|0,c="x"==a?b:3&b|8,c.toString(16)})},og=function(){var a=0;return function(){return"r-"+a++}}(),pg=function(a){function b(b){this.hook=new a(b),this.inProcess={},this.queue={}}function c(a,b){return a[b._guid]||(a[b._guid]=[])}function d(a,b){var e=c(a.queue,b);for(a.hook.fire(b);e.length;)d(a,e.shift());delete a.queue[b._guid]}return b.prototype={constructor:b,begin:function(a){this.inProcess[a._guid]=!0},end:function(a){var b=a._parent;b&&this.inProcess[b._guid]?c(this.queue,b).push(a):d(this,a),delete this.inProcess[a._guid]}},b}(o),qg=function(a,b,c,d){var e=a.root,f=a.keypath;return"sort"===c||"reverse"===c?void e.viewmodel.set(f,b):void e.viewmodel.smartUpdate(f,b,d)},rg=function(a,b,c,d){var e,f,g,h=[],i=["pop","push","reverse","shift","sort","splice","unshift"];return i.forEach(function(e){var f=function(){var b,f,g,h,i=Array.prototype.slice,j=i.call(arguments,0);for(b=c(this,e,j),f=Array.prototype[e].apply(this,arguments),a.start(),this._ractive.setting=!0,h=this._ractive.wrappers.length;h--;)g=this._ractive.wrappers[h],a.addViewmodel(g.root.viewmodel),d(g,this,e,b);return a.end(),this._ractive.setting=!1,f};b(h,e,{value:f})}),e={},e.__proto__?(f=function(a){a.__proto__=h},g=function(a){a.__proto__=Array.prototype}):(f=function(a){var c,d;for(c=i.length;c--;)d=i[c],b(a,d,{value:h[d],configurable:!0})},g=function(a){var b;for(b=i.length;b--;)delete a[i[b]]}),f.unpatch=g,f}(x,E,Kb,qg),sg=function(a,b,c){var d,e,f;return d={filter:function(a){return b(a)&&(!a._ractive||!a._ractive.setting)},wrap:function(a,b,c){return new e(a,b,c)}},e=function(b,d,e){this.root=b,this.value=d,this.keypath=e,d._ractive||(a(d,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),c(d)),d._ractive.instances[b._guid]||(d._ractive.instances[b._guid]=0,d._ractive.instances.push(b)),d._ractive.instances[b._guid]+=1,d._ractive.wrappers.push(this)},e.prototype={get:function(){return this.value},teardown:function(){var a,b,d,e,g;if(a=this.value,b=a._ractive,d=b.wrappers,e=b.instances,b.setting)return!1;if(g=d.indexOf(this),-1===g)throw new Error(f);if(d.splice(g,1),d.length){if(e[this.root._guid]-=1,!e[this.root._guid]){if(g=e.indexOf(this.root),-1===g)throw new Error(f);e.splice(g,1)}}else delete a._ractive,c.unpatch(this.value)}},f="Something went wrong in a rather interesting way",d}(E,g,rg),tg=function(a,b){var c,d;return a&&(c={filter:function(c,d,e){return a.filter(c,d,e)&&b.filter(c)},wrap:function(a,b,c){return new d(a,b,c)}},d=function(c,d,e){this.value=d,this.magic=!0,this.magicWrapper=a.wrap(c,d,e),this.arrayWrapper=b.wrap(c,d,e)},d.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(a){return this.magicWrapper.reset(a)}}),c}(z,sg),ug=function(a,b,c,d,e){function f(a,b){var c,d={};if(!b)return a;b+=".";for(c in a)a.hasOwnProperty(c)&&(d[b+c]=a[c]);return d}function g(a){var b;return i[a]||(b=a?a+".":"",i[a]=function(c,d){var e;return"string"==typeof c?(e={},e[b+c]=d,e):"object"==typeof c?b?f(c,a):c:void 0}),i[a]}var h,i={};return h=function(f,h){var i,j,k,l,m=this.ractive;for(i=m.adapt.length,j=0;i>j;j+=1){if(k=m.adapt[j],"string"==typeof k){var n=a.registries.adaptors.find(m,k);if(!n)return c.critical({debug:m.debug,message:"missingPlugin",args:{plugin:"adaptor",name:k}});k=m.adapt[j]=n}if(k.filter(h,f,m))return l=this.wrapped[f]=k.wrap(m,h,f,g(f)),l.value=h,h}return m.magic?e.filter(h,f,m)?this.wrapped[f]=e.wrap(m,h,f):d.filter(h,f,m)&&(this.wrapped[f]=d.wrap(m,h,f)):m.modifyArrays&&b.filter(h,f,m)&&(this.wrapped[f]=b.wrap(m,h,f)),h}}(bb,sg,n,z,tg),vg=function(a){var b,c,d,e,f=[""];for(b=a.length;b--;)for(c=a[b],d=c.split(".");d.length>1;)d.pop(),e=d.join("."),-1===f.indexOf(e)&&f.push(e);return f},wg=function(){function a(a){var b,d,e,f,g,h="";if(!c[a]){for(e=[];h.length<a;)h+=1;for(b=parseInt(h,2),f=function(a){return"1"===a},g=0;b>=g;g+=1){for(d=g.toString(2);d.length<a;)d="0"+d;e[g]=Array.prototype.map.call(d,f)}c[a]=e}return c[a]}var b,c={};return b=function(b){var c,d,e,f;return c=b.split("."),d=a(c.length),e=function(a,b){return a?"*":c[b]},f=d.map(function(a){return a.map(e).join(".")})}}(),xg=function(a){function b(b,e,f){var g;d(b,e),f||(g=a(e),g.forEach(function(a){c(b,a,e)}))}function c(a,b,e){var g,h,i;g=a.depsMap.patternObservers,h=g[b],h&&h.forEach(function(b){var g=f.exec(b)[0];i=e?e+"."+g:g,d(a,i),c(a,b,i)})}function d(a,b){a.patternObservers.forEach(function(a){a.regex.test(b)&&a.update(b)})}var e,f=/[^\.]+$/;return e=b}(wg),yg=function(a,b){function c(a){a.invalidate()}function d(a){return a.key}function e(a,b,c,d){var e,f;(e=h(a,c,d))&&(f=a.get(c),e.forEach(function(a){b&&a.refineValue?b.push(a):a.setValue(f)}))}function f(a,b,c){b.forEach(function(b){for(var d=!1,e=0,f=c.length,g=[];f>e;){var h=c[e];if(h===b.keypath){d=!0;break}h.slice(0,b.keypath.length)===b.keypath&&g.push(h),e++}d&&b.setValue(a.get(b.keypath)),g.length&&b.refineValue(g)})}function g(a,b,c){function d(a){a.forEach(e),a.forEach(f)}function e(b){var d=h(a,b,c);d&&i.push({keypath:b,deps:d})}function f(b){var e;(e=a.depsMap[c][b])&&d(e)}function g(b){var c=a.get(b.keypath);b.deps.forEach(function(a){return a.setValue(c)})}var i=[];d(b),i.forEach(g)}function h(a,b,c){var d=a.deps[c];return d?d[b]:null}var i;return i=function(){function h(a){var b,e,f;m.noCascade.hasOwnProperty(a)||((e=m.deps.computed[a])&&(e.forEach(c),f=e.map(d),f.forEach(i),f.forEach(h)),(b=m.depsMap.computed[a])&&b.forEach(h))}function i(a){m.mark(a)}var j,k,l=this,m=this,n={};if(j=this.changes,j.length){if(j.forEach(h),k=a(j),k.forEach(function(a){var b,e;(b=m.deps.computed[a])&&(b.forEach(c),e=b.map(d),e.forEach(i),e.forEach(h))}),this.changes=[],this.patternObservers.length&&(k.forEach(function(a){return b(l,a,!0)}),j.forEach(function(a){return b(l,a)})),this.deps.observers&&(k.forEach(function(a){return e(l,null,a,"observers")}),g(this,j,"observers")),this.deps["default"]){var o=[];k.forEach(function(a){return e(l,o,a,"default")}),o.length&&f(this,o,j),g(this,j,"default")}return j.forEach(function(a){n[a]=l.get(a)}),this.implicitChanges={},this.noCascade={},n}}}(vg,xg),zg=function(){this.captureGroups.push([])},Ag=function(a,b){var c,d;if(b||(d=this.wrapped[a])&&d.teardown()!==!1&&(this.wrapped[a]=null),this.cache[a]=void 0,c=this.cacheMap[a])for(;c.length;)this.clearCache(c.pop())},Bg=function(){function a(a){var b="var __ractive=this;return("+a.replace(c,function(a,b){return'__ractive.get("'+b+'")'})+")";return new Function(b)}var b,c=/\$\{([^\}]+)\}/g;return b=function(b){return"function"==typeof b?{get:b}:"string"==typeof b?{get:a(b)}:("object"==typeof b&&"string"==typeof b.get&&(b={get:a(b.get),set:b.set}),b)}}(),Cg=function(a,b){var c=function(a,b,c){var d=this;this.ractive=a,this.viewmodel=a.viewmodel,this.key=b,this.getter=c.get,this.setter=c.set,this.hardDeps=c.deps||[],this.softDeps=[],this.depValues={},this.hardDeps&&this.hardDeps.forEach(function(b){return a.viewmodel.register(b,d,"computed")}),this._dirty=this._firstRun=!0};return c.prototype={constructor:c,init:function(){var a;this.bypass=!0,a=this.ractive.viewmodel.get(this.key),this.ractive.viewmodel.clearCache(this.key),this.bypass=!1,this.setter&&void 0!==a&&this.set(a)},invalidate:function(){this._dirty=!0},get:function(){var c,d,e,f=this,g=!1;if(!this.getting){if(this.getting=!0,this._dirty){if(c=this.ractive,this._firstRun||!this.hardDeps.length&&!this.softDeps.length?g=!0:[this.hardDeps,this.softDeps].forEach(function(a){var d,e,h;if(!g)for(h=a.length;h--;)if(d=a[h],e=c.viewmodel.get(d),!b(e,f.depValues[d]))return f.depValues[d]=e,void(g=!0)}),g){c.viewmodel.capture();try{this.value=this.getter.call(c)}catch(h){a.warn({debug:c.debug,message:"failedComputation",args:{key:this.key,err:h.message||h}}),this.value=void 0}d=c.viewmodel.release(),e=this.updateDependencies(d),e&&[this.hardDeps,this.softDeps].forEach(function(a){a.forEach(function(a){f.depValues[a]=c.viewmodel.get(a)})})}this._dirty=!1}return this.getting=this._firstRun=!1,this.value}},set:function(a){if(this.setting)return void(this.value=a);if(!this.setter)throw new Error("Computed properties without setters are read-only. (This may change in a future version of Ractive!)");this.setter.call(this.ractive,a)},updateDependencies:function(a){var b,c,d,e;for(c=this.softDeps,b=c.length;b--;)d=c[b],-1===a.indexOf(d)&&(e=!0,this.viewmodel.unregister(d,this,"computed"));for(b=a.length;b--;)d=a[b],-1!==c.indexOf(d)||this.hardDeps&&-1!==this.hardDeps.indexOf(d)||(e=!0,this.viewmodel.register(d,this,"computed"));return e&&(this.softDeps=a.slice()),e}},c}(n,t),Dg=function(a,b){return function(c,d){return d=a(d),this.computations[c]=new b(this.ractive,c,d)}}(Bg,Cg),Eg={FAILED_LOOKUP:!0},Fg=function(a,b){var c={},d=function(a,d){this.viewmodel=a,this.root=a.ractive,this.ref=d,this.parentFragment=c,a.unresolvedImplicitDependencies[d]=!0,a.unresolvedImplicitDependencies.push(this),b.addUnresolved(this)};return d.prototype={resolve:function(){this.viewmodel.mark(this.ref),this.viewmodel.unresolvedImplicitDependencies[this.ref]=!1,a(this.viewmodel.unresolvedImplicitDependencies,this)},teardown:function(){b.removeUnresolved(this)}},d}(p,x),Gg=function(a,b,c){function d(a,c){var d,e,f,g,h,i,j;return d=c.split("."),e=d.pop(),f=d.join("."),g=a.get(f),(j=a.wrapped[f])&&(g=j.get()),null!==g&&void 0!==g?((h=a.cacheMap[f])?-1===h.indexOf(c)&&h.push(c):a.cacheMap[f]=[c],"object"!=typeof g||e in g?(i=g[e],a.adapt(c,i,!1),a.cache[c]=i,i):a.cache[c]=b):void 0}var e,f={};return e=function(e){var g=arguments[1];void 0===g&&(g=f);var h,i,j,k,l=this.ractive,m=this.cache;return"@"===e[0]?(h=e.slice(1),a(h)?+h:h):(void 0===m[e]?((i=this.computations[e])&&!i.bypass?(h=i.get(),this.adapt(e,h)):(j=this.wrapped[e])?h=j.value:e?h=d(this,e):(this.adapt("",l.data),h=l.data),m[e]=h):h=m[e],g.evaluateWrapped&&(j=this.wrapped[e])&&(h=j.get()),g.capture&&(k=this.captureGroups[this.captureGroups.length-1])&&(~k.indexOf(e)||(k.push(e),h===b&&this.unresolvedImplicitDependencies[e]!==!0&&new c(this,e))),h===b?void 0:h)}}(i,Eg,Fg),Hg=function(){function a(a){a.init()}var b;return b=function(){var b,c,d=[];for(b in this.ractive.computed)c=this.compute(b,this.ractive.computed[b]),d.push(c);d.forEach(a)}}(),Ig=function(a,b){var c;b&&(b.implicit&&(this.implicitChanges[a]=!0),b.noCascade&&(this.noCascade[a]=!0)),(c=this.computations[a])&&c.invalidate(),-1===this.changes.indexOf(a)&&this.changes.push(a),this.clearCache(a)},Jg=function(a,b){var c,d,e,f;return c={},d=0,e=a.map(function(a,e){var g,h,i;h=d,i=b.length;do{if(g=b.indexOf(a,h),-1===g)return f=!0,-1;h=g+1}while(c[g]&&i>h);return g===d&&(d+=1),g!==e&&(f=!0),c[g]=!0,g})},Kg=function(a,b){function c(a){return JSON.stringify(a)}function d(a){if(a===!0)return c;if("string"==typeof a)return f[a]||(f[a]=function(b){return b[a]}),f[a];if("function"==typeof a)return a;throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}var e,f={};return e=function(c,e,f,g){var h,i,j,k;if(this.mark(c),g&&g.compare){j=d(g.compare);try{h=e.map(j),i=f.map(j)}catch(l){if(this.debug)throw l;a("Merge operation: comparison failed. Falling back to identity checking"),h=e,i=f}}else h=e,i=f;k=b(h,i),this.smartUpdate(c,f,k,e.length!==f.length)}}(l,Jg),Lg=function(){function a(a,b,c){var d,e,f,g;for(d=b.split(".");d.length;)d.pop(),e=d.join("."),f=a.depsMap[c]||(a.depsMap[c]={}),g=f[e]||(f[e]=[]),void 0===g[b]&&(g[b]=0,g.push(b)),g[b]+=1,b=e}var b;return b=function(b,c){var d=arguments[2];void 0===d&&(d="default");var e,f;c.isStatic||(e=this.deps[d]||(this.deps[d]={}),f=e[b]||(e[b]=[]),f.push(c),b&&a(this,b,d))}}(),Mg=function(){return this.captureGroups.pop()},Ng=function(a,b){function c(a,c,d){var e,f,g,h,i,j,k;j=function(){h.set?h.set(f,d):(i=h.get(),k())},k=function(){i||(i=b(f),a.set(g,i,!0)),i[f]=d},e=c.split("."),f=e.pop(),g=e.join("."),h=a.wrapped[g],h?j():(i=a.get(g),(h=a.wrapped[g])?j():k())}var d;return d=function(b,d,e){var f,g,h;if(f=this.computations[b]){if(f.setting)return;f.set(d),d=f.get()}a(this.cache[b],d)||(g=this.wrapped[b],g&&g.reset&&(h=g.reset(d)!==!1,h&&(d=g.get())),f||h||c(this,b,d),e?this.clearCache(b):this.mark(b))}}(t,y),Og=function(){function a(a){return"function"==typeof a.shuffle}var b,c={implicit:!0},d={noCascade:!0};return b=function(b,e,f){var g,h,i=this;if(h=f.length,f.forEach(function(a,c){-1===a&&i.mark(b+"."+c,d)}),this.set(b,e,!0),(g=this.deps["default"][b])&&g.filter(a).forEach(function(a){return a.shuffle(f,e)}),h!==e.length){this.mark(b+".length",c);for(var j=h;j<e.length;j+=1)this.mark(b+"."+j);for(var k=e.length;h>k;k+=1)this.mark(b+"."+k,d)}}}(),Pg=function(){var a,b=this;for(Object.keys(this.cache).forEach(function(a){return b.clearCache(a)});a=this.unresolvedImplicitDependencies.pop();)a.teardown()},Qg=function(){function a(a,b,c){var d,e,f,g;for(d=b.split(".");d.length;)d.pop(),e=d.join("."),f=a.depsMap[c],g=f[e],g[b]-=1,g[b]||(g.splice(g.indexOf(b),1),g[b]=void 0),b=e}var b;return b=function(b,c){var d=arguments[2];void 0===d&&(d="default");var e,f;if(!c.isStatic){if(e=this.deps[d][b],f=e.indexOf(c),-1===f)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks");e.splice(f,1),b&&a(this,b,d)}}}(),Rg=function(){function a(a){return"string"==typeof a&&(a=[a]),a}var b={lookup:function(a,b){var c,d=a.adapt;if(!d||!d.length)return d;if(b&&Object.keys(b).length&&(c=d.length))for(;c--;){var e=d[c];"string"==typeof e&&(d[c]=b[e]||e)}return d},combine:function(b,c){return b=a(b),c=a(c),b&&b.length?c&&c.length?(b.forEach(function(a){-1===c.indexOf(a)&&c.push(a)}),c):b.slice():c}};return b}(),Sg=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;try{Object.defineProperty({},"test",{value:0})}catch(s){r=!0}var t=function(b){this.ractive=b,t.extend(b.constructor,b),this.cache={},this.cacheMap=a(null),this.deps={computed:{},"default":{}},this.depsMap={computed:{},"default":{}},this.patternObservers=[],this.wrapped=a(null),this.computations=a(null),this.captureGroups=[],this.unresolvedImplicitDependencies=[],this.changes=[],this.implicitChanges={},this.noCascade={}};return t.extend=function(a,b){if(b.magic&&r)throw new Error("Getters and setters (magic mode) are not supported in this browser");b.adapt=q.combine(a.prototype.adapt,b.adapt)||[],b.adapt=q.lookup(b,b.adaptors)},t.prototype={adapt:b,applyChanges:c,capture:d,clearCache:e,compute:f,get:g,init:h,mark:i,merge:j,register:k,release:l,set:m,smartUpdate:n,teardown:o,unregister:p},t}(S,ug,yg,zg,Ag,Dg,Gg,Hg,Ig,Kg,Lg,Mg,Ng,Og,Pg,Qg,Rg),Tg=function(a,b,c,d,e,f,g,h){function i(a,c){a._guid=e(),a._subs=b(null),a._config={},a._twowayBindings=b(null),a._animations=[],a.nodes={},a._liveQueries=[],a._liveComponentQueries=[],c._parent&&c._component&&(a._parent=c._parent,a.component=c._component,c._component.instance=a)}var j,k=new f("construct"),l=new f("config"),m=new g("init");return j=function(b){var e=arguments[1];void 0===e&&(e={});var f;if(i(b,e),k.fire(a.getConstructTarget(b,e),e),a.init(b.constructor,b,e),l.fire(b),(f=d(b.el))&&!b.append){if(f.__ractive_instances__)try{f.__ractive_instances__.splice(0,f.__ractive_instances__.length).forEach(function(a){return a.teardown()})}catch(g){}f.innerHTML=""}m.begin(b),b.viewmodel=new h(b),b.viewmodel.init(),b.template&&(b.fragment=new c({template:b.template,root:b,owner:b})),m.end(b),f&&b.render(f,b.append)}}(bb,S,Yf,xb,og,o,pg,Sg),Ug=function(a,b,c){function d(a,b,c){var d,e=Object.keys(a[c]);e.length&&((d=b[c])||(d=b[c]={}),e.filter(function(a){return!(a in d)}).forEach(function(b){return d[b]=a[c][b]}))}var e,f;return c.push(function(){f=c.Ractive}),e=function(c){if(!(c.prototype instanceof f))return c;for(var e={};c;)b.registries.forEach(function(a){d(a.useDefaults?c.prototype:c,e,a.name)}),Object.keys(c.prototype).forEach(function(b){if("computed"!==b){var d=c.prototype[b];if(b in e){if("function"==typeof e[b]&&"function"==typeof d&&e[b]._method){var f,g=d._method;g&&(d=d._method),f=a(e[b]._method,d),g&&(f._method=f),e[b]=f}}else e[b]=d._method?d._method:d}}),c=c._parent!==f?c._parent:!1;return e}}(P,bb,e),Vg=function(a,b,c,d,e,f,g){return function h(){var i=arguments[0];void 0===i&&(i={});var j,k,l,m=this;return i=g(i),j=function(a){e(this,a)},k=a(m.prototype),k.constructor=j,l={_guid:{value:c()},defaults:{value:k},extend:{value:h,writable:!0,configurable:!0},_parent:{value:m}},b(j,l),d.extend(m,k,i),f.extend(m,k),j.prototype=k,j}}(S,F,ng,bb,Tg,Sg,Ug),Wg=function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o;for(n=function(a){l(this,a)},o={extend:{value:j},parse:{value:k},Promise:{value:h},svg:{value:d},magic:{value:e},VERSION:{value:"0.6.1"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:b},events:{writable:!0,value:{}},interpolators:{writable:!0,value:c},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}}},f(n,o),n.prototype=i(g,a),n.prototype.constructor=n,n.defaults=n.prototype,m.Ractive=n;m.length;)m.pop()();var p="function";if(typeof Date.now!==p||typeof String.prototype.trim!==p||typeof Object.keys!==p||typeof Array.prototype.indexOf!==p||typeof Array.prototype.forEach!==p||typeof Array.prototype.map!==p||typeof Array.prototype.filter!==p||"undefined"!=typeof window&&typeof window.addEventListener!==p)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.");return n}(c,d,j,k,A,F,mg,q,he,Vg,R,Tg,e);"undefined"!=typeof module&&module.exports?module.exports=Wg:"function"==typeof define&&define.amd&&define(function(){return Wg}),a.Ractive=Wg,Wg.noConflict=function(){return a.Ractive=b,Wg}}("undefined"!=typeof window?window:this);
},{}],"/Users/creedmangrum/anti_charity/node_modules/underscore/underscore.js":[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},["./anti_charity/static/coffee/landing_page.coffee"])