// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/google-maps/lib/loader.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loader = /** @class */ (function () {
    function Loader(apiKey, options) {
        if (apiKey === void 0) { apiKey = null; }
        if (options === void 0) { options = {}; }
        this.apiKey = apiKey;
        this.options = options;
        if (typeof window === 'undefined') {
            throw new Error('google-maps is supported only in browser environment');
        }
    }
    Loader.prototype.load = function () {
        var _this = this;
        if (typeof this.api !== 'undefined') {
            return Promise.resolve(this.api);
        }
        if (typeof this.loader !== 'undefined') {
            return this.loader;
        }
        window[Loader.CALLBACK_NAME] = function () {
            _this.api = window['google'];
            if (typeof _this.resolve === 'undefined') {
                throw new Error('Should not happen');
            }
            _this.resolve(_this.api);
        };
        window['gm_authFailure'] = function () {
            if (typeof _this.reject === 'undefined') {
                throw new Error('Should not happen');
            }
            _this.reject(new Error('google-maps: authentication error'));
        };
        return this.loader = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
            var script = document.createElement('script');
            script.src = _this.createUrl();
            script.async = true;
            script.onerror = function (e) { return reject(e); };
            document.head.appendChild(script);
        });
    };
    Loader.prototype.createUrl = function () {
        var parameters = [
            "callback=" + Loader.CALLBACK_NAME,
        ];
        if (this.apiKey) {
            parameters.push("key=" + this.apiKey);
        }
        for (var name_1 in this.options) {
            if (this.options.hasOwnProperty(name_1)) {
                var value = this.options[name_1];
                if (name_1 === 'version') {
                    name_1 = 'v';
                }
                if (name_1 === 'libraries') {
                    value = value.join(',');
                }
                parameters.push(name_1 + "=" + value);
            }
        }
        return "//maps.googleapis.com/maps/api/js?" + parameters.join('&');
    };
    Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';
    return Loader;
}());
exports.Loader = Loader;

},{}],"node_modules/google-maps/lib/index.js":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./loader"));

},{"./loader":"node_modules/google-maps/lib/loader.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _googleMaps = require("google-maps");

// BECAUSE THE HTML PAGE LOADS THE GOOGLE MAPS API BEFORE THE JS FILE RUNS, IT DOESN'T RECOGNIZE THE FUNCTION: initMap(). THAT'S WHY IT HAS TO GO BEFORE THE DOC.READY FUNCTION
// require('dotenv').config()
// const apiKey = process.env.GOOGLE_API_KEY
// const googleScript = `maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
// (function(){
var loader = new _googleMaps.Loader("AIzaSyDQ3WNxkaa6G6nRIB0lUqdlp4kQl6TG1FU"); // let map
// function initMap() {

loader.load().then(function (google) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.7078,
      lng: -73.4444
    },
    zoom: 15,
    mapTypeId: 'hybrid'
  }); //-----FARMINGDALE HIGH SCHOOL INFO WINDOW-----
  // creates a variable for fhsinfo window, where I want it on the map

  var fhs = {
    lat: 40.7078,
    lng: -73.4444
  }; //creates content for the info window

  var fhsHeading = 'Farmingdale High School';
  var fhsContent = " is located close to the South Shore in the center of Long Island. Just east of Massapequa Preserve and south of Bethpage State Park, Farmingdale has a lot of opportunities for residents to enjoy the outdoors. Another opportunity for residents to enjoy nature is Jones Beach, which is 12.5 miles to the south-east of Farmingdale. Farmingdale's geography also allows for residents to travel easily to Manhattan and the rest of Long Island.";
  var fhsContentString = "\n      <div id=\"content\">\n        <div id=\"siteNotice\">\n        </div>\n        <h1 id=\"firstHeading\" class=\"firstHeading\">".concat(fhsHeading, "</h1>\n        <div id=\"bodyContent\">\n          <p><b>").concat(fhsHeading, " </b>").concat(fhsContent, " </p>\n        </div>\n      </div>\n        "); //creates an infowindow object for text of fhs

  var fhsInfoWindow = new google.maps.InfoWindow({
    content: fhsContentString
  }); //creates a marker object for fhs

  var fhsMarker = new google.maps.Marker({
    position: fhs,
    map: map,
    title: fhsHeading
  }); //adds a click event to the fhs info window

  fhsMarker.addListener('click', function () {
    fhsInfoWindow.open(map, fhsMarker);
  });
});
$(document).ready(function () {
  //allows hamburger icon to toggle when clicked in mobile
  $('.navbar-toggler').click(function () {
    $('#navbarToggleExternalContent').toggle();
  }); //google classroom button on HOMEPAGE

  $('#google-classroom-button').click(function () {
    // console.log('google classroom button clicked')
    var url = 'https://google.com/classroom';
    window.open(url);
  }); //navbar search form

  $('form').submit(function (event) {
    // prevent default behavior of forms
    event.preventDefault(); // read data from form, store in variable

    var q = $('input').val(); // console.log(q)
    //add the variable to the link

    window.open("https://google.com/search?q=".concat(q, " "));
  });
}); //routes
//database
//server
},{"google-maps":"node_modules/google-maps/lib/index.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60397" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map