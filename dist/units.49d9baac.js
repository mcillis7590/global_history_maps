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
})({"images/americas_overlay.gif":[function(require,module,exports) {
module.exports = "/americas_overlay.6b1f046f.gif";
},{}],"images/classical_overlay.jpeg":[function(require,module,exports) {
module.exports = "/classical_overlay.9e2af3ac.jpeg";
},{}],"images/exploration_overlay.jpeg":[function(require,module,exports) {
module.exports = "/exploration_overlay.168c1530.jpeg";
},{}],"images/farmingdale-logo.png":[function(require,module,exports) {
module.exports = "/farmingdale-logo.48d7ce91.png";
},{}],"images/medieval_europe_overlay.jpg":[function(require,module,exports) {
module.exports = "/medieval_europe_overlay.4eab0b36.jpg";
},{}],"images/post_classical_overlay.jpeg":[function(require,module,exports) {
module.exports = "/post_classical_overlay.7992faad.jpeg";
},{}],"images/reformation_overlay.jpeg":[function(require,module,exports) {
module.exports = "/reformation_overlay.ee12ad5f.jpeg";
},{}],"images/river_valley_overlay.png":[function(require,module,exports) {
module.exports = "/river_valley_overlay.ea2a3286.png";
},{}],"images/spread_of_renaissance_overlay.jpeg":[function(require,module,exports) {
module.exports = "/spread_of_renaissance_overlay.0398b8fa.jpeg";
},{}],"images/*.*":[function(require,module,exports) {
module.exports = {
  "americas_overlay": {
    "gif": require("./americas_overlay.gif")
  },
  "classical_overlay": {
    "jpeg": require("./classical_overlay.jpeg")
  },
  "exploration_overlay": {
    "jpeg": require("./exploration_overlay.jpeg")
  },
  "farmingdale-logo": {
    "png": require("./farmingdale-logo.png")
  },
  "medieval_europe_overlay": {
    "jpg": require("./medieval_europe_overlay.jpg")
  },
  "post_classical_overlay": {
    "jpeg": require("./post_classical_overlay.jpeg")
  },
  "reformation_overlay": {
    "jpeg": require("./reformation_overlay.jpeg")
  },
  "river_valley_overlay": {
    "png": require("./river_valley_overlay.png")
  },
  "spread_of_renaissance_overlay": {
    "jpeg": require("./spread_of_renaissance_overlay.jpeg")
  }
};
},{"./americas_overlay.gif":"images/americas_overlay.gif","./classical_overlay.jpeg":"images/classical_overlay.jpeg","./exploration_overlay.jpeg":"images/exploration_overlay.jpeg","./farmingdale-logo.png":"images/farmingdale-logo.png","./medieval_europe_overlay.jpg":"images/medieval_europe_overlay.jpg","./post_classical_overlay.jpeg":"images/post_classical_overlay.jpeg","./reformation_overlay.jpeg":"images/reformation_overlay.jpeg","./river_valley_overlay.png":"images/river_valley_overlay.png","./spread_of_renaissance_overlay.jpeg":"images/spread_of_renaissance_overlay.jpeg"}],"node_modules/google-maps/lib/loader.js":[function(require,module,exports) {
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

},{"./loader":"node_modules/google-maps/lib/loader.js"}],"js/units.js":[function(require,module,exports) {
"use strict";

var _googleMaps = require("google-maps");

// const apiKey = process.env.GOOGLE_API_KEY
var images = require('../images/*.*');

var loader = new _googleMaps.Loader("AIzaSyDQ3WNxkaa6G6nRIB0lUqdlp4kQl6TG1FU");
var rvMap;
var classicalMap;
var americasMap;
var pcMap;
var medievalMap;
var renMap;
var refMap;
var expMap;
console.log(images); // function initMap() {

loader.load().then(function (google) {
  //*****RIVER VALLEY MAP INITIALIZATION*****
  var rvMap;
  var classicalMap;
  var americasMap;
  var pcMap;
  var medievalMap;
  var renMap;
  var refMap;
  var expMap; //initalize a new google map, select the div associated with where i want the map

  rvMap = new google.maps.Map(document.getElementById('rvMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {
      lat: 25,
      lng: 75
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var rvImageBounds = {
    north: 52,
    south: 7.5,
    east: 135,
    west: 11.5
  }; //set the image overlay using the link

  var rvOverlay = new google.maps.GroundOverlay(Object.values(images.river_valley_overlay)[0], rvImageBounds);
  rvOverlay.setMap(rvMap); //*****CLASSICAL MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  classicalMap = new google.maps.Map(document.getElementById('classicalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2.5,
    //where I want the center of the initial map to be
    center: {
      lat: 30,
      lng: 30
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var classicalImageBounds = {
    north: 65,
    south: 20,
    east: 150,
    west: -22
  }; //set the image overlay using the link

  var classicalOverlay = new google.maps.GroundOverlay(Object.values(images.classical_overlay)[0], classicalImageBounds);
  classicalOverlay.setMap(classicalMap);

  function addClassicalOverlay() {
    classicalOverlay.setMap(map);
  }

  function removeClassicalOverlay() {
    classicalOverlay.setMap(null);
  } //*****AMERICAS MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i wantthe map


  americasMap = new google.maps.Map(document.getElementById('americasMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {
      lat: 5,
      lng: -20
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var americasImageBounds = {
    north: 33,
    south: -55,
    east: -35,
    west: -120
  }; //set the image overlay using the link

  var americasOverlay = new google.maps.GroundOverlay(Object.values(images.americas_overlay)[0], americasImageBounds);
  americasOverlay.setMap(americasMap); //*****POST-CLASSICAL MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  pcMap = new google.maps.Map(document.getElementById('pcMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2.5,
    //where I want the center of the initial map to be
    center: {
      lat: 15,
      lng: 30
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var pcImageBounds = {
    north: 65,
    south: -25,
    east: 140,
    west: -45
  }; //set the image overlay using the link

  var pcOverlay = new google.maps.GroundOverlay(Object.values(images.post_classical_overlay)[0], pcImageBounds);
  pcOverlay.setMap(pcMap); //*****MEDIEVAL MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  medievalMap = new google.maps.Map(document.getElementById('medievalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {
      lat: 50,
      lng: 28
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var medievalImageBounds = {
    north: 60,
    south: 28,
    east: 52,
    west: -17
  }; //set the image overlay using the link

  var medievalOverlay = new google.maps.GroundOverlay(Object.values(images.medieval_europe_overlay)[0], medievalImageBounds);
  medievalOverlay.setMap(medievalMap); //*****RENAISSANCE MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  renMap = new google.maps.Map(document.getElementById('renMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {
      lat: 45,
      lng: 28
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var renImageBounds = {
    north: 65,
    south: 35,
    east: 25,
    west: -50
  }; //set the image overlay using the link

  var renOverlay = new google.maps.GroundOverlay(Object.values(images.spread_of_renaissance_overlay)[0], renImageBounds);
  renOverlay.setMap(renMap); //*****REFORMATION MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  refMap = new google.maps.Map(document.getElementById('refMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {
      lat: 50,
      lng: 30
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var refImageBounds = {
    north: 62,
    south: 32,
    east: 45,
    west: -30
  }; //set the image overlay using the link

  var refOverlay = new google.maps.GroundOverlay(Object.values(images.reformation_overlay)[0], refImageBounds);
  refOverlay.setMap(refMap); //*****EXPLORATION MAP INITIALIZATION*****
  //initalize a new google map, select the div associated with where i want the map

  expMap = new google.maps.Map(document.getElementById('expMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 1.5,
    //where I want the center of the initial map to be
    center: {
      lat: 10,
      lng: 0
    },
    mapTypeId: 'hybrid'
  }); //boundaries of the image overlay

  var expImageBounds = {
    north: 80,
    south: -68,
    east: 35,
    west: -165
  }; //set the image overlay using the link

  var expOverlay = new google.maps.GroundOverlay(Object.values(images.exploration_overlay)[0], expImageBounds);
  expOverlay.setMap(expMap); //**********INFO-WINDOWS*****
  //-----MESOPOTAMIA INFO WINDOW-----
  //creates a variable for the mesopotamia info window, where I want it on the map

  var mesopotamia = {
    lat: 30,
    lng: 44
  }; //creates content for the info window, USE BACKTICKS AND MAYBE STORE THE HEADINGS AND STUFF IN A VARIABLE

  var mesopotamiaHeading = 'Mesopotamia';
  var mesopotamiaContent = 'encompasses the land between the Euphrates and Tigris rivers, both of which have their headwaters in the Taurus Mountains. Both rivers are fed by numerous tributaries, and the entire river system drains a vast mountainous region. Overland routes in Mesopotamia usually follow the Euphrates because the banks of the Tigris are frequently steep and difficult. The climate of the region is semi-arid with a vast desert expanse in the north which gives way to a 15,000-square-kilometre (5,800 sq mi) region of marshes, lagoons, mud flats, and reed banks in the south. In the extreme south, the Euphrates and the Tigris unite and empty into the Persian Gulf.';
  var mesopotamiaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(mesopotamiaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(mesopotamiaHeading, " </b>").concat(mesopotamiaContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of Mesopotamia

  var mesopotamiaInfoWindow = new google.maps.InfoWindow({
    content: mesopotamiaContentString
  }); //creates a marker object for Mesoptomaia

  var mesopotamiaMarker = new google.maps.Marker({
    position: mesopotamia,
    map: rvMap,
    title: 'Mesopotamia'
  }); //adds a click event to the mesoptamia info window, FAILED W/ JQUERY

  mesopotamiaMarker.addListener('click', function () {
    mesopotamiaInfoWindow.open(rvMap, mesopotamiaMarker);
  }); //-----HUANG HE INFO WINDOW-----
  //creates a variable for the mesopotamia info window, where I want it on the map

  var hhe = {
    lat: 43.5,
    lng: 105.5
  }; //creates content for the info window, USE BACKTICKS AND MAYBE STORE THE HEADINGS AND STUFF IN A VARIABLE

  var hheHeading = 'Huang He River Valley';
  var hheContent = 'was the birthplace of ancient Chinese civilization, and it was the most prosperous region in early Chinese history. There are frequent devastating floods and course changes produced by the continual elevation of the river bed, sometimes above the level of its surrounding farm fields.';
  var hheContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(hheHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The <b>").concat(hheHeading, " </b>").concat(hheContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of Mesopotamia

  var hheInfoWindow = new google.maps.InfoWindow({
    content: hheContentString
  }); //creates a marker object for Mesoptomaia

  var hheMarker = new google.maps.Marker({
    position: hhe,
    map: rvMap,
    title: hheHeading
  }); //adds a click event to the mesoptamia info window, FAILED W/ JQUERY

  hheMarker.addListener('click', function () {
    hheInfoWindow.open(rvMap, hheMarker);
  }); //-----NILE RIVER VALLEY INFO WINDOW-----
  // creates a variable for the nile info window, where I want it on the map

  var nile = {
    lat: 25.0,
    lng: 30.5
  }; //creates content for the info window

  var nileHeading = 'Nile River Valley'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var nileContent = 'also created irrigation systems from their local river, the Nile River, more complex than previous systems. They would rotate legumes with cereal which would stop salt buildup from the freshwater and enhance the fertility of their fields. The Nile River also allowed easier travel, eventually resulting in the creation of two kingdoms in the north and south areas of the river until both were unified into one society by 3000 BC.';
  var nileContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(nileHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The Egyptians of the <b>").concat(nileHeading, " </b>").concat(nileContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of Nile River Valley

  var nileInfoWindow = new google.maps.InfoWindow({
    content: nileContentString
  }); //creates a marker object for Nile River Valley

  var nileMarker = new google.maps.Marker({
    position: nile,
    map: rvMap,
    title: nileHeading
  }); //adds a click event to the nile river valley info window, FAILED W/ JQUERY

  nileMarker.addListener('click', function () {
    nileInfoWindow.open(rvMap, nileMarker);
  }); //-----INDUS RIVER VALLEY INFO WINDOW-----
  // creates a variable for the indus info window, where I want it on the map

  var indus = {
    lat: 26.0,
    lng: 70.5
  }; //creates content for the info window

  var indusHeading = 'Indus River Valley'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var indusContent = 'is unknown. Discovered in the 1920s, Harappan society remains a mystery because the Harappan system of writing has not yet been deciphered. It was larger than either Egypt or Mesopotamia. Historians have found no evidence of violence or a ruling class; there are no distinctive burial sites and there is not a lot of evidence to suggest a formal military. However, historians believe that the lack of knowledge about the ruling class and the military is mainly due to the inability to read Harappan writing.';
  var indusContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(indusHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>Much of the history of the <b>").concat(indusHeading, " </b>").concat(indusContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of Indus River Valley

  var indusInfoWindow = new google.maps.InfoWindow({
    content: indusContentString
  }); //creates a marker object for Indus River Valley

  var indusMarker = new google.maps.Marker({
    position: indus,
    map: rvMap,
    title: indusHeading
  }); //adds a click event to the indus river valley info window, FAILED W/ JQUERY

  indusMarker.addListener('click', function () {
    indusInfoWindow.open(rvMap, indusMarker);
  }); //-----CLASSICAL CHINA INFO WINDOW-----
  // creates a variable for classical china info window, where I want it on the map

  var classicalChina = {
    lat: 33,
    lng: 108
  }; //creates content for the info window

  var classicalChinaHeading = 'Classical China'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var classicalChinaContent = 'laid the foundations for arguably the single most important civilization in the history of the planet. Any stereotypical ideas you have about the way China is from borders, language, writing, technology, empires, rulers, etc. come from this era. From the point where the region was first unified under the legalist Qin Shi Huangdi to the fall of the Han empire, what we know as China today took shape.';
  var classicalChinaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(classicalChinaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(classicalChinaHeading, " </b>").concat(classicalChinaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/file/d/1h2q1b9Fp6Ecf397CTTvTN9RwB6QmFw2e/view?usp=sharing\" class=\"class-notes\" target=\"_blank\">Qin Dynasty Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/file/d/1ugqjMzbcf5-lfjK9GR1S8puwn8GzucEk/view?usp=sharing\" class=\"class-notes\" target=\"_blank\">Han Dynasty Notes</a></p>\n\t\t\t<p><a href=\"https://docs.google.com/presentation/d/15zBuTWQaRMEQeXTolsVM0c48f4VEIfviiHFE9halXG4/edit?usp=sharing\" class=\"class-notes\" target=\"_blank\">Han Dynasty Slides</a></p>\n\t\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of classical china

  var classicalChinaInfoWindow = new google.maps.InfoWindow({
    content: classicalChinaContentString
  }); //creates a marker object for classical china

  var classicalChinaMarker = new google.maps.Marker({
    position: classicalChina,
    map: classicalMap,
    title: classicalChinaHeading
  }); //adds a click event to classical china info window, FAILED W/ JQUERY

  classicalChinaMarker.addListener('click', function () {
    classicalChinaInfoWindow.open(classicalMap, classicalChinaMarker);
  }); //-----CLASSICAL INDIA INFO WINDOW-----
  // creates a variable for classical india info window, where I want it on the map

  var classicalIndia = {
    lat: 25,
    lng: 75
  }; //creates content for the info window

  var classicalIndiaHeading = 'Classical India'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var classicalIndiaContent = "included both the Mauryan, and later Guptan Empire, which laid the foundation for what is quickly becoming the largest civilization on the planet today. When looking at Classical India, focus more on the social and religious; both of which were tied directly to the world's oldest religion: Hinduism.";
  var classicalIndiaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(classicalIndiaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(classicalIndiaHeading, " </b>").concat(classicalIndiaContent, " </p>\n\t\t\t<p><a href=\"https://docs.google.com/document/d/10Z749eoMefkHA33Vv8fRYbsbyi12yIqeHM3bWMxhsaQ/edit?usp=sharing\" class=\"class-notes\" target=\"_blank\">Maurya Empire Notes</a></p>\n\t\t\t<p><a href=\"https://docs.google.com/document/d/1dL2mR7bX0rUR8hSBClmDw3nVFoq80g3cptYwP4oactc/edit?usp=sharing\" class=\"class-notes\" target=\"_blank\">Gupta Empire Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1v1Q3BEBjZ3OQn0jKKTnRK_GuNuhdu3Ae\" class=\"class-notes\" target=\"_blank\">Gupta Empire Slides</a></p>\n\t\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of classical india

  var classicalIndiaInfoWindow = new google.maps.InfoWindow({
    content: classicalIndiaContentString
  }); //creates a marker object for classical india

  var classicalIndiaMarker = new google.maps.Marker({
    position: classicalIndia,
    map: classicalMap,
    title: classicalIndiaHeading
  }); //adds a click event to the classical india info window, FAILED W/ JQUERY

  classicalIndiaMarker.addListener('click', function () {
    classicalIndiaInfoWindow.open(classicalMap, classicalIndiaMarker);
  }); //-----CLASSICAL GREECE INFO WINDOW-----
  // creates a variable for classical greece info window, where I want it on the map

  var classicalGreece = {
    lat: 40,
    lng: 21.5
  }; //creates content for the info window

  var classicalGreeceHeading = 'Classical Greece'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var classicalGreeceContent = 'had a powerful influence on the Roman Empire and on the foundations of Western civilization. Much of modern Western politics, artistic thought (architecture, sculpture), scientific thought, theatre, literature and philosophy derives from this period of Greek history.';
  var classicalGreeceContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(classicalGreeceHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(classicalGreeceHeading, " </b>").concat(classicalGreeceContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1Df59Q6H8zqa9tAvU1vsm0HDi2I9p79Gm\" class=\"class-notes\" target=\"_blank\">Greek City-States Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1-LYV6YADkoj1S2gfN5TzOim8e48BIMyx\" class=\"class-notes\" target=\"_blank\">Power in Classical Greece Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1Z8v_cxBoFgrel9s1rjos11F7nMPXt6WREF8V3AoWiYM\" class=\"class-notes\" target=\"_blank\">Conflict in Classical Greece Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1X_6MZwxwgkO-DUuONpzRXKB17RRD5BGevZ7Qi08-XYY\" class=\"class-notes\" target=\"_blank\">Golden Age of Athens Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1AzL_lUBQWnhKFQSeftn9DQLJdwz4FgdW\" class=\"class-notes\" target=\"_blank\">Golden Age of Athens Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of classical greece

  var classicalGreeceInfoWindow = new google.maps.InfoWindow({
    content: classicalGreeceContentString
  }); //creates a marker object for classical greece

  var classicalGreeceMarker = new google.maps.Marker({
    position: classicalGreece,
    map: classicalMap,
    title: classicalGreeceHeading
  }); //adds a click event to the classical greece info window, FAILED W/ JQUERY

  classicalGreeceMarker.addListener('click', function () {
    classicalGreeceInfoWindow.open(classicalMap, classicalGreeceMarker);
  }); //-----CLASSICAL ROME INFO WINDOW-----
  // creates a variable for classical rome info window, where I want it on the map

  var classicalRome = {
    lat: 50,
    lng: 8
  }; //creates content for the info window

  var classicalRomeHeading = 'Classical Rome'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var classicalRomeContent = 'is Roman civilization from the founding of the Italian city of Rome in the 8th century BC to the collapse of the Western Roman Empire in the 5th century AD, encompassing the Roman Kingdom (753 BC–509 BC), Roman Republic (509 BC–27 BC) and Roman Empire (27 BC–476 AD) until the fall of the western empire.';
  var classicalRomeContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(classicalRomeHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(classicalRomeHeading, " </b>").concat(classicalRomeContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1xXJ1EDeuWx0Hp5tHqAxFBWR99whIfP0p\" class=\"class-notes\" target=\"_blank\">Power in the Roman Republic Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1Yzcikpityz999ms4DuVd0BMqCUcmvzeCe7OInLYamdY\" class=\"class-notes\" target=\"_blank\">Julius Caesar Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1i8gyOuTtKqRaqPwSQ4tsxcFb692Y17fZKd1f5bYG25w\" class=\"class-notes\" target=\"_blank\">Octavian Augustus Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1qry32isEvMPxWJLTDoW8jl83o-6udx7mErObI1j6qIs\" class=\"class-notes\" target=\"_blank\">Pax Romana Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1-pKnIt_nVxBw3qVzS0F5K8aZq2Vy6meTBVkkoZvO7hY\" class=\"class-notes\" target=\"_blank\">Pax Romana Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of classical rome

  var classicalRomeInfoWindow = new google.maps.InfoWindow({
    content: classicalRomeContentString
  }); //creates a marker object for classical rome

  var classicalRomeMarker = new google.maps.Marker({
    position: classicalRome,
    map: classicalMap,
    title: classicalRomeHeading
  }); //adds a click event to the classical rome info window, FAILED W/ JQUERY

  classicalRomeMarker.addListener('click', function () {
    classicalRomeInfoWindow.open(classicalMap, classicalRomeMarker);
  }); //-----CLASSICAL PERSIA INFO WINDOW-----
  // creates a variable for classical persia info window, where I want it on the map

  var classicalPersia = {
    lat: 35,
    lng: 50
  }; //creates content for the info window

  var classicalPersiaHeading = 'Classical Persia'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var classicalPersiaContent = " was the most dominant empire on earth. To this day, (as a % of earth's population) the Persian Empire was the largest in history. The Persian Empires emerged in Southwest Asia (Middle East).";
  var classicalPersiaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(classicalPersiaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(classicalPersiaHeading, " </b>").concat(classicalPersiaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1xnxw5eHB7lWvjtmqerqwPeyD5SxTnv2r5D88NVP1OIw\" class=\"class-notes\" target=\"_blank\">Persian Empire Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=0BwvSTOvf97U1dUhKVmo2RXpvek0\" class=\"class-notes\" target=\"_blank\">Persian Empire Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of classical persia

  var classicalPersiaInfoWindow = new google.maps.InfoWindow({
    content: classicalPersiaContentString
  }); //creates a marker object for classical persia

  var classicalPersiaMarker = new google.maps.Marker({
    position: classicalPersia,
    map: classicalMap,
    title: classicalPersiaHeading
  }); //adds a click event to the classical persia info window, FAILED W/ JQUERY

  classicalPersiaMarker.addListener('click', function () {
    classicalPersiaInfoWindow.open(classicalMap, classicalPersiaMarker);
  }); //-----MAYA INFO WINDOW-----
  // creates a variable for the maya info window, where I want it on the map

  var maya = {
    lat: 15,
    lng: -93
  }; //creates content for the info window

  var mayaHeading = 'Maya'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var mayaContent = 'civilization was a Mesoamerican civilization developed by the Maya peoples, and noted for its logosyllabic script—the most sophisticated and highly developed writing system in pre-Columbian Americas—as well as for its art, architecture, mathematics, calendar, and astronomical system. The Maya civilization developed in an area that encompasses southeastern Mexico, all of Guatemala and Belize, and the western portions of Honduras and El Salvador. This region consists of the northern lowlands encompassing the Yucatán Peninsula, and the highlands of the Sierra Madre, running from the Mexican state of Chiapas, across southern Guatemala and onwards into El Salvador, and the southern lowlands of the Pacific littoral plain. The overarching term "Maya" is a modern collective term that refers to the peoples of the region, however, the term was not used by the indigenous populations themselves since there never was a common sense of identity or political unity among the distinct populations.';
  var mayaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(mayaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The <b>").concat(mayaHeading, " </b>").concat(mayaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1xRZteYJRvc-I5aj7bHo8P4vElHhzUC6JS47Bf2qgrkM\" class=\"class-notes\" target=\"_blank\">Maya Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of maya

  var mayaInfoWindow = new google.maps.InfoWindow({
    content: mayaContentString
  }); //creates a marker object for maya

  var mayaMarker = new google.maps.Marker({
    position: maya,
    map: americasMap,
    title: mayaHeading
  }); //adds a click event to the maya info window, FAILED W/ JQUERY

  mayaMarker.addListener('click', function () {
    mayaInfoWindow.open(americasMap, mayaMarker);
  }); //-----AZTEC INFO WINDOW-----
  // creates a variable for the aztec info window, where I want it on the map

  var aztec = {
    lat: 19,
    lng: -103
  }; //creates content for the info window

  var aztecHeading = 'Aztec'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var aztecContent = ' were a Mesoamerican culture that flourished in central Mexico in the post-classic period from 1300 to 1521. The Aztec peoples included different ethnic groups of central Mexico, particularly those groups who spoke the Nahuatl language and who dominated large parts of Mesoamerica from the 14th to the 16th centuries. Aztec culture was organized into city-states (altepetl), some of which joined to form alliances, political confederations, or empires. The Aztec Empire was a confederation of three city-states established in 1427: Tenochtitlan, city-state of the Mexica or Tenochca; Texcoco; and Tlacopan, previously part of the Tepanec empire, whose dominant power was Azcapotzalco. Although the term Aztecs is often narrowly restricted to the Mexica of Tenochtitlan, it is also broadly used to refer to Nahua polities or peoples of central Mexico in the prehispanic era, as well as the Spanish colonial era (1521–1821).';
  var aztecContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(aztecHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The <b>").concat(aztecHeading, "s</b>").concat(aztecContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=113vJxvRuSgmoXhZJeh-iKpnJqRN4X38g-NyAPOlO-j8\" class=\"class-notes\" target=\"_blank\">Aztec Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of the aztec

  var aztecInfoWindow = new google.maps.InfoWindow({
    content: aztecContentString
  }); //creates a marker object for classical persia

  var aztecMarker = new google.maps.Marker({
    position: aztec,
    map: americasMap,
    title: aztecHeading
  }); //adds a click event to the classical persia info window, FAILED W/ JQUERY

  aztecMarker.addListener('click', function () {
    aztecInfoWindow.open(americasMap, aztecMarker);
  }); //-----INCA INFO WINDOW-----
  // creates a variable for the inca info window, where I want it on the map

  var inca = {
    lat: -20,
    lng: -70
  }; //creates content for the info window

  var incaHeading = 'Inca'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var incaContent = ' was the largest empire in pre-Columbian America. The administrative, political and military center of the empire was located in the city of Cusco. The Inca civilization arose from the Peruvian highlands sometime in the early 13th century. Its last stronghold was conquered by the Spanish in 1572. From 1438 to 1533, the Incas incorporated a large portion of western South America, centered on the Andean Mountains, using conquest and peaceful assimilation, among other methods. At its largest, the empire joined Peru, southwest Ecuador, western and south central Bolivia, northwest Argentina, a large portion of what is today Chile, and southwest Colombia into a state comparable to the historical empires of Eurasia.';
  var incaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(incaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The <b>").concat(incaHeading, " Empire</b>").concat(incaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1P5ZBJQ5Mtu9ZFeQPQfiacOJ_KaMGmfsl4FpScfMVv1I\" class=\"class-notes\" target=\"_blank\">Inca Slides</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of the inca

  var incaInfoWindow = new google.maps.InfoWindow({
    content: incaContentString
  }); //creates a marker object for the inca

  var incaMarker = new google.maps.Marker({
    position: inca,
    map: americasMap,
    title: incaHeading
  }); //adds a click event to the inca info window, FAILED W/ JQUERY

  incaMarker.addListener('click', function () {
    incaInfoWindow.open(americasMap, incaMarker);
  }); //-----BYZANTINE INFO WINDOW-----
  // creates a variable for the byzantine info window, where I want it on the map

  var byzantine = {
    lat: 30,
    lng: 35
  }; //creates content for the info window

  var byzantineHeading = 'Byzantine Empire'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var byzantineContent = " This term wasn't even used until 100 years after the Empire itself fell. The Byzantine Empire is the Eastern half of the Roman Empire. When Rome 'fell', the Byzantines thrived.";
  var byzantineContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(byzantineHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(byzantineHeading, "? </b>").concat(byzantineContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1T5kKtuXQsd8MmRQiDlUHh1LiwfJBk09wUgSl57myBCw\" class=\"class-notes\" target=\"_blank\">Byzantine/Justinian Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1aArsJrj2lJIyrz7YuXMqJDWr8un9GWw10_XZrBi8ock\" class=\"class-notes\" target=\"_blank\">Byzantine/Justinian Organizer</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1vHq6DYzQ7aW-k_bL4BpUtQf5irnft5Wb6a7SgIaUxDQ\" class=\"class-notes\" target=\"_blank\">Byzantine Legacy Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1wuaR-vOgIx7mKca-ZwzbvLalgIX5pdc-DkQMF0xtReg\" class=\"class-notes\" target=\"_blank\">Byzantine Legacy Documents</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of the byzantine

  var byzantineInfoWindow = new google.maps.InfoWindow({
    content: byzantineContentString
  }); //creates a marker object for the byzantine

  var byzantineMarker = new google.maps.Marker({
    position: byzantine,
    map: pcMap,
    title: byzantineHeading
  }); //adds a click event to the byzantine info window, FAILED W/ JQUERY

  byzantineMarker.addListener('click', function () {
    byzantineInfoWindow.open(pcMap, byzantineMarker);
  }); //-----ISLAMIC CALIPHATES INFO WINDOW-----
  // creates a variable for the islamic caliphates info window, where I want it on the map

  var islam = {
    lat: 25,
    lng: 48
  }; //creates content for the info window

  var islamHeading = 'Islamic Caliphates'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var islamContent = ' This is where the Islamic Caliphates goes';
  var islamContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(islamHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(islamHeading, " </b>").concat(islamContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1kJ-Ks7o_II9gtRrx-eqMCbQFVy-_c4Pi\" class=\"class-notes\" target=\"_blank\">Spread of Islam Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1UpOeQ5SY3yZPKAYzft1o06taHTGe5rn2\" class=\"class-notes\" target=\"_blank\">Abbasid Caliphate Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=15npEAglRkrxatZIHvHokSCkJIjuJ2mLY\" class=\"class-notes\" target=\"_blank\">Ottoman Empire Notes</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of the islamic caliphates

  var islamInfoWindow = new google.maps.InfoWindow({
    content: islamContentString
  }); //creates a marker object for the islamic caliphates

  var islamMarker = new google.maps.Marker({
    position: islam,
    map: pcMap,
    title: islamHeading
  }); //adds a click event to the islamic info window, FAILED W/ JQUERY

  islamMarker.addListener('click', function () {
    islamInfoWindow.open(pcMap, islamMarker);
  }); //-----POST-CLASSICAL CHINA INFO WINDOW-----
  // creates a variable for the post-classical china info window, where I want it on the map

  var pcChina = {
    lat: 40,
    lng: 100
  }; //creates content for the info window

  var pcChinaHeading = 'Post-Classical China'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var pcChinaContent = "is when China experiences it's second Golden Age.. After centuries of decentralized rule, the SUI DYNASTY emerged and reunited the Empire (and built the Grand Canal). The short-lived SUI DYNASTY gave way to arguably China's greatest Dynasty, THE TANG. After the TANG came the SONG and then... THE MONGOLS! If the Post-Classical Period is remembered for Muslims & Mongols; China is a close third.";
  var pcChinaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(pcChinaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p><b>").concat(pcChinaHeading, " </b>").concat(pcChinaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1SV6zEA4lCYrtsUC-6ifPkJspAKLohmDzULjTeTima-k\" class=\"class-notes\" target=\"_blank\">Tang & Song Dynasty Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1io36XWiY1XBnRbGXCPmLcm2ynmgCKUB_\" class=\"class-notes\" target=\"_blank\"></a>Profile of the Tang & Song Dynasties</p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1sYPJsKWoAJ4ZjNGb5GQ85GJHfbYBaPxk\" class=\"class-notes\" target=\"_blank\">Mongols Notes</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1T_r1RJKQ1N7dTarIb2sQmr3euM2skduWFFSjdpoSsJM\" class=\"class-notes\" target=\"_blank\">Mongols Slides</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1aX6nCnO6suPf6sDzSQzMrfDYEB4Jwha2JFOodU6Nz9E\" class=\"class-notes\" target=\"_blank\">Ming Dynasty Historical Context</a></p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1-tZKGe7DSZDgszUhaxHpuQE1Jhwb56wDbqV8qelt09U\" class=\"class-notes\" target=\"_blank\">Power in the Ming Dynasty</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of post-classical China

  var pcChinaInfoWindow = new google.maps.InfoWindow({
    content: pcChinaContentString
  }); //creates a marker object for post-classical China

  var pcChinaMarker = new google.maps.Marker({
    position: pcChina,
    map: pcMap,
    title: pcChinaHeading
  }); //adds a click event to the post-classical china info window, FAILED W/ JQUERY

  pcChinaMarker.addListener('click', function () {
    pcChinaInfoWindow.open(pcMap, pcChinaMarker);
  }); //-----WEST AFRICA INFO WINDOW-----
  // creates a variable for the west Africa info window, where I want it on the map

  var westAfrica = {
    lat: 15,
    lng: -5
  }; //creates content for the info window

  var westAfricaHeading = 'West African Kingdoms'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var westAfricaContent = ' were forming, relatively close to each other. These were the three kingdoms of Ghana, Mali, and Songhai. These three kingdoms settled along regions near the Niger River.';
  var westAfricaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(westAfricaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>By at least 800 CE, a handful of <b>").concat(westAfricaHeading, " </b>").concat(westAfricaContent, " </p>\n\t\t\t<p><a href=\"https://drive.google.com/open?id=1PznwYOD4F2EEwm0lDy5G8vH3e_zZqosC\" class=\"class-notes\" target=\"_blank\">West African Kindoms Notes</a></p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of west african kingdoms

  var westAfricaInfoWindow = new google.maps.InfoWindow({
    content: westAfricaContentString
  }); //creates a marker object for west-african kingdoms

  var westAfricaMarker = new google.maps.Marker({
    position: westAfrica,
    map: pcMap,
    title: westAfricaHeading
  }); //adds a click event to the west-africa info window, FAILED W/ JQUERY

  westAfricaMarker.addListener('click', function () {
    westAfricaInfoWindow.open(pcMap, westAfricaMarker);
  }); //-----EAST AFRICA INFO WINDOW-----
  // creates a variable for the east Africa info window, where I want it on the map

  var eastAfrica = {
    lat: 5,
    lng: 40
  }; //creates content for the info window

  var eastAfricaHeading = 'East African Kingdoms'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var eastAfricaContent = "East Africa may well be the birthplace of humanity. The oldest human skeletons are found in modern-day Ethiopia, and there's pretty good evidence that this is where modern humans evolved. This means that East Africa can claim a longer human heritage than anywhere else on Earth. So, it's not surprising to learn that some of the world's oldest kingdoms also developed in this area. Not all of them are names we immediately recognize today, but to people of the ancient world, there were few greater powers than those of East Africa.";
  var eastAfricaContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(eastAfricaHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>Prior to <b>").concat(eastAfricaHeading, ", </b>").concat(eastAfricaContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of east african kingdoms

  var eastAfricaInfoWindow = new google.maps.InfoWindow({
    content: eastAfricaContentString
  }); //creates a marker object for east-african kingdoms

  var eastAfricaMarker = new google.maps.Marker({
    position: eastAfrica,
    map: pcMap,
    title: eastAfricaHeading
  }); //adds a click event to the east-africa info window, FAILED W/ JQUERY

  eastAfricaMarker.addListener('click', function () {
    eastAfricaInfoWindow.open(pcMap, eastAfricaMarker);
  }); //-----EUROPE EXPLORATION INFO WINDOW-----
  // creates a variable for the europe exploration info window, where I want it on the map

  var europeExploration = {
    lat: 48,
    lng: -3
  }; //creates content for the info window

  var europeExplorationHeading = 'European Exploration'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var europeExplorationContent = 'The interconnection of the Eastern and Western hemispheres made possible by transoceanic voyaging marked a key transformation of this period. Technological innovations helped to make transoceanic connections possible. Changing patterns of long-distance trade included the global circulation of some commodities and the formation of new regional markets and financial centers. Increased trans-regional and global trade networks facilitated the spread of religion and other elements of culture as well as the migration of large numbers of people. Germs carried to the Americas ravaged the indigenous peoples, while the global exchange of crops and animals altered agriculture, diets, and populations around the planet.';
  var europeExplorationContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(europeExplorationHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>").concat(europeExplorationContent, "</p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of europe exploration

  var europeExplorationInfoWindow = new google.maps.InfoWindow({
    content: europeExplorationContentString
  }); //creates a marker object for europe exploration

  var europeExplorationMarker = new google.maps.Marker({
    position: europeExploration,
    map: expMap,
    title: europeExplorationHeading
  }); //adds a click event to the europe exploration info window, FAILED W/ JQUERY

  europeExplorationMarker.addListener('click', function () {
    europeExplorationInfoWindow.open(expMap, europeExplorationMarker);
  }); //-----CARIBBEAN EXPLORATION INFO WINDOW-----
  // creates a variable for the caribbean exploration info window, where I want it on the map

  var caribbeanExploration = {
    lat: 30,
    lng: -90
  }; //creates content for the info window

  var caribbeanExplorationHeading = 'Caribbean Colonies'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var caribbeanExplorationContent = ' The new connections between the Eastern and Western hemispheres resulted in the Columbian Exchange. European colonization led to the spread of diseases— including smallpox, measles, and influenza — that were endemic in the Eastern Hemisphere among Amerindian populations and the unintentional transfer of disease vectors, including mosquitoes and rats.';
  var caribbeanExplorationContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(caribbeanExplorationHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>Christopher Columbus was one of the first to land in the <b>").concat(caribbeanExplorationHeading, "</b>").concat(caribbeanExplorationContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of caribbean exploration

  var caribbeanExplorationInfoWindow = new google.maps.InfoWindow({
    content: caribbeanExplorationContentString
  }); //creates a marker object for caribbean exploration

  var caribbeanExplorationMarker = new google.maps.Marker({
    position: caribbeanExploration,
    map: expMap,
    title: caribbeanExplorationHeading
  }); //adds a click event to the caribbean exploration info window, FAILED W/ JQUERY

  caribbeanExplorationMarker.addListener('click', function () {
    caribbeanExplorationInfoWindow.open(expMap, caribbeanExplorationMarker);
  }); //-----AMERICAS EXPLORATION INFO WINDOW-----
  // creates a variable for the americas exploration info window, where I want it on the map

  var americasExploration = {
    lat: 45,
    lng: -86
  }; //creates content for the info window

  var americasExplorationHeading = 'American Colonies'; //MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?

  var americasExplorationContent = 'were used for European mercantilisim. Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories, and joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and compete against one another in global trade. American foods (potatoes, maize, manioc) became staple crops in various parts of Europe, Asia, and Africa. Cash crops (sugar, tobacco) were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East in this period.';
  var americasExplorationContentString = "\n\t\t<div id=\"content\">\n\t\t<div id=\"siteNotice\">\n\t\t</div>\n\t\t<h1 id=\"firstHeading\" class=\"firstHeading\">".concat(americasExplorationHeading, "</h1>\n\t\t<div id=\"bodyContent\">\n\t\t\t<p>The <b>").concat(americasExplorationHeading, " </b>").concat(americasExplorationContent, " </p>\n\t\t</div>\n\t\t</div>\n\t\t"); //creates an infowindow object for text of americas exploration

  var americasExplorationInfoWindow = new google.maps.InfoWindow({
    content: americasExplorationContentString
  }); //creates a marker object for americas exploration

  var americasExplorationMarker = new google.maps.Marker({
    position: americasExploration,
    map: expMap,
    title: americasExplorationHeading
  }); //adds a click event to the ameriacs exploration info window, FAILED W/ JQUERY

  americasExplorationMarker.addListener('click', function () {
    americasExplorationInfoWindow.open(expMap, americasExplorationMarker);
  });
}); // })();

$(document).ready(function () {
  //allows hamburger icon to toggle when clicked in mobile
  $('.navbar-toggler').click(function () {
    $('#navbarToggleExternalContent').toggle();
  }); //navbar search form

  $('form').submit(function (event) {
    // prevent default behavior of forms
    event.preventDefault(); // read data from form, store in variable

    var q = $('input').val(); // console.log(q)
    //add the variable to the link

    window.open("https://google.com/search?q=".concat(q, " "));
  });
});
},{"../images/*.*":"images/*.*","google-maps":"node_modules/google-maps/lib/index.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/units.js"], null)
//# sourceMappingURL=/units.49d9baac.js.map