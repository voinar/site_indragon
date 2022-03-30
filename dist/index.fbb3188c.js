// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aIdiY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//------------------------
// MAIN JAVASCRIPT FILE
//---------------------
// CONTENTS:
// - locomotive scroll
// - navbar behavior
// - portfolio section scroll
//------------------------
//------------------------
// LOCOMOTIVE SCROLL
//------------------------
var _locomotiveScrollJs = require("/node_modules/locomotive-scroll/src/locomotive-scroll.js");
var _locomotiveScrollJsDefault = parcelHelpers.interopDefault(_locomotiveScrollJs);
const scroll = new _locomotiveScrollJsDefault.default({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
//------------------------
// NAVBAR
//------------------------
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navHeader = document.querySelector('.nav-header');
const modalOverlay = document.querySelector('.modal-overlay');
const bodyScroll = document.querySelector('body');
var intViewportWidth = window.innerWidth;
var menuVisibility = false;
//watch for viewport change & adjust navbar functionality accordingly, reset mobile menu on viewport change
function reportWindowSize() {
    var intViewportWidth1 = window.innerWidth;
    if (intViewportWidth1 == 768 || intViewportWidth1 > 768) {
        hideModalOverlay();
        navLinks.style.display = 'flex';
        navHeader.style.visibility = 'visible';
        navToggle.style.visibility = 'hidden';
        navToggle.style.transition = '0s';
        menuVisibility = false;
    } else if (intViewportWidth1 < 768 && menuVisibility == false) {
        hideModalOverlay();
        navLinks.style.display = 'none';
        navHeader.style.visibility = 'visible';
        navToggle.style.visibility = 'visible';
        navToggle.style.transition = '0.3s';
    } else if (intViewportWidth1 < 768 && menuVisibility == true) {
        showModalOverlay();
        navLinks.style.display = 'flex';
        navToggle.style.visibility = 'visible';
        navToggle.style.transition = '0.3s';
        navToggle.style.top = '2rem';
    }
}
//mobile view: open-close menu on burger button click
function toggleMenu() {
    if (!menuVisibility) showMenu();
    else if (menuVisibility) hideMenu();
}
//show-hide mobile menu
function showMenu() {
    navLinks.style.display = 'flex';
    navHeader.style.visibility = 'hidden';
    modalOverlay.classList.remove('hide-container');
    menuVisibility = true;
    bodyScroll.style.position = 'fixed';
// console.log(menuVisibility);
}
function hideMenu() {
    navLinks.style.display = 'none';
    navHeader.style.visibility = 'visible';
    modalOverlay.classList.add('hide-container');
    menuVisibility = false;
    bodyScroll.style.position = 'relative';
// console.log(menuVisibility);
}
//toggle modal overlay
function showModalOverlay() {
    modalOverlay.classList.remove('hide-container');
    modalOverlay.classList.add('show-container');
}
function hideModalOverlay() {
    modalOverlay.classList.remove('show-container');
    modalOverlay.classList.add('hide-container');
}
//revert menu to defualt state on page load
function resetMenuOnLoad() {
    if (intViewportWidth == 768 || intViewportWidth <= 768) hideMenu();
}
//apply blur effect to navbar on scroll beyond default position
function navbarBackgroundHandler() {
    let scroll1 = this.scrollY;
    if (Math.round(scroll1) > 60) {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-alt');
    } else if (Math.round(scroll1) <= 60) {
        navbar.classList.remove('navbar-alt');
        navbar.classList.add('navbar-solid');
    }
}
navToggle.addEventListener('click', toggleMenu); //mobile view: open-close menu on burger button click
window.addEventListener('load', resetMenuOnLoad); //revert menu to defualt state on page load
window.onresize = reportWindowSize; //watch for viewport change & adjust navbar functionality accordingly
window.addEventListener('scroll', navbarBackgroundHandler); //apply blur effect to navbar on scroll beyond default position
modalOverlay.addEventListener('click', toggleMenu); //hide mobile menu on click outside the menu container
//------------------------
// PORTFOLIO NAVIGATION SCROLL
//------------------------
const navigationLeft = document.querySelector('.navigation-left');
const navigationRight = document.querySelector('.navigation-right');
const navigationArrows = document.querySelector('.navigation-arrows');
const portfolioProjectCards = document.querySelector('.portfolio-project-cards');
var currentMarginOffset = parseInt(window.getComputedStyle(portfolioProjectCards).getPropertyValue('margin-left'));
var portfolioCard = document.querySelector('.portfolioCard');
var newMarginOffset = 0;
function getCardWidth() {
    return portfolioCard.width + 20;
}
// function scrollLeft() {
//     var intViewportWidth = window.innerWidth;
//     navigationRight.style.opacity = "1";
//     navigationLeft.style.opacity = "1";
//     if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
//         if (currentMarginOffset < 0) {
//             currentMarginOffset += scrollOffset;
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else {
//             navigationLeft.style.opacity = ".3";
//         }
//     } else if (intViewportWidth < 1000) { //scroll behavior for viewport width under 1000px
//         if (currentMarginOffset < 0) {
//             currentMarginOffset += (scrollOffset + 50);
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else {
//             navigationLeft.style.opacity = ".3";
//         }
//     }
// }
function scrollLeft() {
    navigationRight.style.opacity = "1";
    navigationLeft.style.opacity = "1";
    currentMarginOffset += getCardWidth();
    portfolioProjectCards.style.marginLeft = currentMarginOffset + "px";
}
function scrollRight() {
    // var intViewportWidth = window.innerWidth;
    navigationRight.style.opacity = "1";
    navigationLeft.style.opacity = "1";
    currentMarginOffset -= getCardWidth();
    portfolioProjectCards.style.marginLeft = currentMarginOffset + "px";
// if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
//     } else if (currentMarginOffset <= -30) {
//         navigationRight.style.opacity = ".3";
//     }
}
// function scrollRight() {
//     var intViewportWidth = window.innerWidth;
//     navigationRight.style.opacity = "1";
//     navigationLeft.style.opacity = "1";
//     if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
//         if (currentMarginOffset >= -30) {
//             currentMarginOffset -= scrollOffset;
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else if (currentMarginOffset <= -30) {
//             navigationRight.style.opacity = ".3";
//         }
//     } else if (intViewportWidth < 1000) { //scroll behavior for viewport width under 1000px
//         if (currentMarginOffset >= -30) {
//             currentMarginOffset -= (scrollOffset + 50);
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else if (currentMarginOffset <= -30) {
//             navigationRight.style.opacity = ".3";
//         }
//     }
// }
navigationLeft.addEventListener('click', scrollLeft);
navigationRight.addEventListener('click', scrollRight);

},{"/node_modules/locomotive-scroll/src/locomotive-scroll.js":"lE83F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lE83F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_mainDefault.default
);
parcelHelpers.export(exports, "Native", ()=>_nativeMain.Native
);
parcelHelpers.export(exports, "Smooth", ()=>_main.Smooth
);
var _main = require("./scripts/Main");
var _mainDefault = parcelHelpers.interopDefault(_main);
var _nativeMain = require("./scripts/NativeMain");

},{"./scripts/Main":"5hvdL","./scripts/NativeMain":"lHJ2s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5hvdL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Smooth", ()=>Smooth
);
var _options = require("./options");
var _native = require("./Native");
var _nativeDefault = parcelHelpers.interopDefault(_native);
var _smooth = require("./Smooth");
var _smoothDefault = parcelHelpers.interopDefault(_smooth);
class Smooth {
    constructor(options = {}){
        this.options = options;
        // Override default options with given ones
        Object.assign(this, _options.defaults, options);
        this.smartphone = _options.defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = _options.defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
        if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
        if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
        this.init();
    }
    init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) this.scroll = new _smoothDefault.default(this.options);
        else this.scroll = new _nativeDefault.default(this.options);
        this.scroll.init();
        if (window.location.hash) {
            // Get the hash without the '#' and find the matching element
            const id = window.location.hash.slice(1, window.location.hash.length);
            let target = document.getElementById(id);
            // If found, scroll to the element
            if (target) this.scroll.scrollTo(target);
        }
    }
    update() {
        this.scroll.update();
    }
    start() {
        this.scroll.startScroll();
    }
    stop() {
        this.scroll.stopScroll();
    }
    scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
    }
    setScroll(x, y) {
        this.scroll.setScroll(x, y);
    }
    on(event, func) {
        this.scroll.setEvents(event, func);
    }
    off(event, func) {
        this.scroll.unsetEvents(event, func);
    }
    destroy() {
        this.scroll.destroy();
    }
}
exports.default = Smooth;

},{"./options":"921bg","./Native":"1wSK4","./Smooth":"8NLkl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"921bg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults
);
const defaults = {
    el: document,
    name: 'scroll',
    offset: [
        0,
        0
    ],
    repeat: false,
    smooth: false,
    initPosition: {
        x: 0,
        y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    class: 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1wSK4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("./Core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _smoothscrollPolyfill = require("smoothscroll-polyfill");
var _smoothscrollPolyfillDefault = parcelHelpers.interopDefault(_smoothscrollPolyfill);
exports.default = class extends _coreDefault.default {
    constructor(options = {}){
        super(options);
        if (this.resetNativeScroll) {
            if (history.scrollRestoration) history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }
        window.addEventListener('scroll', this.checkScroll, false);
        if (window.smoothscrollPolyfill === undefined) {
            window.smoothscrollPolyfill = _smoothscrollPolyfillDefault.default;
            window.smoothscrollPolyfill.polyfill();
        }
    }
    init() {
        this.instance.scroll.y = window.pageYOffset;
        this.addElements();
        this.detectElements();
        super.init();
    }
    checkScroll() {
        super.checkScroll();
        if (this.getDirection) this.addDirection();
        if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
        }
        this.instance.scroll.y = window.pageYOffset;
        if (Object.entries(this.els).length) {
            if (!this.hasScrollTicking) {
                requestAnimationFrame(()=>{
                    this.detectElements();
                });
                this.hasScrollTicking = true;
            }
        }
    }
    addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
            if (this.instance.direction !== 'down') this.instance.direction = 'down';
        } else if (window.pageYOffset < this.instance.scroll.y) {
            if (this.instance.direction !== 'up') this.instance.direction = 'up';
        }
    }
    addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
        else this.instance.speed = 0;
    }
    resize() {
        if (Object.entries(this.els).length) {
            this.windowHeight = window.innerHeight;
            this.updateElements();
        }
    }
    addElements() {
        this.els = {};
        const els = this.el.querySelectorAll('[data-' + this.name + ']');
        els.forEach((el, index)=>{
            const BCR = el.getBoundingClientRect();
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let id = typeof el.dataset[this.name + 'Id'] === 'string' ? el.dataset[this.name + 'Id'] : index;
            let top;
            let left;
            let offset = typeof el.dataset[this.name + 'Offset'] === 'string' ? el.dataset[this.name + 'Offset'].split(',') : this.offset;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];
            let target = el.dataset[this.name + 'Target'];
            let targetEl;
            if (target !== undefined) targetEl = document.querySelector(`${target}`);
            else targetEl = el;
            const targetElBCR = targetEl.getBoundingClientRect();
            top = targetElBCR.top + this.instance.scroll.y;
            left = targetElBCR.left + this.instance.scroll.x;
            let bottom = top + targetEl.offsetHeight;
            let right = left + targetEl.offsetWidth;
            if (repeat == 'false') repeat = false;
            else if (repeat != undefined) repeat = true;
            else repeat = this.repeat;
            let relativeOffset = this.getRelativeOffset(offset);
            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];
            const mappedEl = {
                el: el,
                targetEl: targetEl,
                id,
                class: cl,
                top: top,
                bottom: bottom,
                left,
                right,
                offset,
                progress: 0,
                repeat,
                inView: false,
                call
            };
            this.els[id] = mappedEl;
            if (el.classList.contains(cl)) this.setInView(this.els[id], id);
        });
    }
    updateElements() {
        Object.entries(this.els).forEach(([i, el])=>{
            const top = el.targetEl.getBoundingClientRect().top + this.instance.scroll.y;
            const bottom = top + el.targetEl.offsetHeight;
            const relativeOffset = this.getRelativeOffset(el.offset);
            this.els[i].top = top + relativeOffset[0];
            this.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
    }
    getRelativeOffset(offset) {
        let relativeOffset = [
            0,
            0
        ];
        if (offset) {
            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                else relativeOffset[i] = parseInt(offset[i]);
            } else relativeOffset[i] = offset[i];
        }
        return relativeOffset;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */ scrollTo(target, options = {}) {
        // Parse options
        let offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
        const callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
        if (typeof target === 'string') {
            // Selector or boundaries
            if (target === 'top') target = this.html;
            else if (target === 'bottom') target = this.html.offsetHeight - window.innerHeight;
            else {
                target = document.querySelector(target);
                // If the query fails, abort
                if (!target) return;
            }
        } else if (typeof target === 'number') // Absolute coordinate
        target = parseInt(target);
        else if (target && target.tagName) ;
        else {
            console.warn('`target` parameter is not valid');
            return;
        }
        // We have a target that is not a coordinate yet, get it
        if (typeof target !== 'number') offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        else offset = target + offset;
        const isTargetReached = ()=>{
            return parseInt(window.pageYOffset) === parseInt(offset);
        };
        if (callback) {
            if (isTargetReached()) {
                callback();
                return;
            } else {
                let onScroll = function() {
                    if (isTargetReached()) {
                        window.removeEventListener('scroll', onScroll);
                        callback();
                    }
                };
                window.addEventListener('scroll', onScroll);
            }
        }
        window.scrollTo({
            top: offset,
            behavior: options.duration === 0 ? 'auto' : 'smooth'
        });
    }
    update() {
        this.addElements();
        this.detectElements();
    }
    destroy() {
        super.destroy();
        window.removeEventListener('scroll', this.checkScroll, false);
    }
};

},{"./Core":"46USk","smoothscroll-polyfill":"1W2LT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46USk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _options = require("./options");
exports.default = class {
    constructor(options = {}){
        Object.assign(this, _options.defaults, options);
        this.smartphone = _options.defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = _options.defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.namespace = 'locomotive';
        this.html = document.documentElement;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.els = {};
        this.currentElements = {};
        this.listeners = {};
        this.hasScrollTicking = false;
        this.hasCallEventSet = false;
        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);
        this.checkEvent = this.checkEvent.bind(this);
        this.instance = {
            scroll: {
                x: 0,
                y: 0
            },
            limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
            },
            currentElements: this.currentElements
        };
        if (this.isMobile) {
            if (this.isTablet) this.context = 'tablet';
            else this.context = 'smartphone';
        } else this.context = 'desktop';
        if (this.isMobile) this.direction = this[this.context].direction;
        if (this.direction === 'horizontal') this.directionAxis = 'x';
        else this.directionAxis = 'y';
        if (this.getDirection) this.instance.direction = null;
        if (this.getDirection) this.instance.speed = 0;
        this.html.classList.add(this.initClass);
        window.addEventListener('resize', this.checkResize, false);
    }
    init() {
        this.initEvents();
    }
    checkScroll() {
        this.dispatchScroll();
    }
    checkResize() {
        if (!this.resizeTick) {
            this.resizeTick = true;
            requestAnimationFrame(()=>{
                this.resize();
                this.resizeTick = false;
            });
        }
    }
    resize() {}
    checkContext() {
        if (!this.reloadOnContextChange) return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        let oldContext = this.context;
        if (this.isMobile) {
            if (this.isTablet) this.context = 'tablet';
            else this.context = 'smartphone';
        } else this.context = 'desktop';
        if (oldContext != this.context) {
            let oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
            let newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
            if (oldSmooth != newSmooth) window.location.reload();
        }
    }
    initEvents() {
        this.scrollToEls = this.el.querySelectorAll(`[data-${this.name}-to]`);
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach((el)=>{
            el.addEventListener('click', this.setScrollTo, false);
        });
    }
    setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute(`data-${this.name}-href`) || event.currentTarget.getAttribute('href'), {
            offset: event.currentTarget.getAttribute(`data-${this.name}-offset`)
        });
    }
    addElements() {}
    detectElements(hasCallEventSet) {
        const scrollTop = this.instance.scroll.y;
        const scrollBottom = scrollTop + this.windowHeight;
        const scrollLeft = this.instance.scroll.x;
        const scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(([i, el])=>{
            if (el && (!el.inView || hasCallEventSet)) {
                if (this.direction === 'horizontal') {
                    if (scrollRight >= el.left && scrollLeft < el.right) this.setInView(el, i);
                } else if (scrollBottom >= el.top && scrollTop < el.bottom) this.setInView(el, i);
            }
            if (el && el.inView) {
                if (this.direction === 'horizontal') {
                    let width = el.right - el.left;
                    el.progress = (this.instance.scroll.x - (el.left - this.windowWidth)) / (width + this.windowWidth);
                    if (scrollRight < el.left || scrollLeft > el.right) this.setOutOfView(el, i);
                } else {
                    let height = el.bottom - el.top;
                    el.progress = (this.instance.scroll.y - (el.top - this.windowHeight)) / (height + this.windowHeight);
                    if (scrollBottom < el.top || scrollTop > el.bottom) this.setOutOfView(el, i);
                }
            }
        });
        // this.els = this.els.filter((current, i) => {
        //     return current !== null;
        // });
        this.hasScrollTicking = false;
    }
    setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current.class);
        this.currentElements[i] = current;
        if (current.call && this.hasCallEventSet) {
            this.dispatchCall(current, 'enter');
            if (!current.repeat) this.els[i].call = false;
        }
    // if (!current.repeat && !current.speed && !current.sticky) {
    //     if (!current.call || current.call && this.hasCallEventSet) {
    //        this.els[i] = null
    //     }
    // }
    }
    setOutOfView(current, i) {
        // if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false;
        // }
        Object.keys(this.currentElements).forEach((el)=>{
            el === i && delete this.currentElements[el];
        });
        if (current.call && this.hasCallEventSet) this.dispatchCall(current, 'exit');
        if (current.repeat) current.el.classList.remove(current.class);
    }
    dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(',').map((item)=>item.trim()
        );
        this.callObj = current;
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        const callEvent = new Event(this.namespace + 'call');
        this.el.dispatchEvent(callEvent);
    }
    dispatchScroll() {
        const scrollEvent = new Event(this.namespace + 'scroll');
        this.el.dispatchEvent(scrollEvent);
    }
    setEvents(event, func) {
        if (!this.listeners[event]) this.listeners[event] = [];
        const list = this.listeners[event];
        list.push(func);
        if (list.length === 1) this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        if (event === 'call') {
            this.hasCallEventSet = true;
            this.detectElements(true);
        }
    }
    unsetEvents(event, func) {
        if (!this.listeners[event]) return;
        const list = this.listeners[event];
        const index = list.indexOf(func);
        if (index < 0) return;
        list.splice(index, 1);
        if (list.index === 0) this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
    }
    checkEvent(event) {
        const name = event.type.replace(this.namespace, '');
        const list = this.listeners[name];
        if (!list || list.length === 0) return;
        list.forEach((func)=>{
            switch(name){
                case 'scroll':
                    return func(this.instance);
                case 'call':
                    return func(this.callValue, this.callWay, this.callObj);
                default:
                    return func();
            }
        });
    }
    startScroll() {}
    stopScroll() {}
    setScroll(x, y) {
        this.instance.scroll = {
            x: 0,
            y: 0
        };
    }
    destroy() {
        window.removeEventListener('resize', this.checkResize, false);
        Object.keys(this.listeners).forEach((event)=>{
            this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach((el)=>{
            el.removeEventListener('click', this.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
    }
};

},{"./options":"921bg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W2LT":[function(require,module,exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */ (function() {
    // polyfill
    function polyfill() {
        // aliases
        var w = window;
        var d = document;
        // return if scroll behavior is supported and polyfill is not forced
        if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
        // globals
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        // object gathering original scroll methods
        var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elementScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
        };
        // define timing method
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
            var userAgentPatterns = [
                'MSIE ',
                'Trident/',
                'Edge/'
            ];
            return new RegExp(userAgentPatterns.join('|')).test(userAgent);
        }
        /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
        /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
            if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
            if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') // first argument is an object and behavior is smooth
            return false;
            // throw error when behavior is not supported
            throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
        }
        /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
            if (axis === 'Y') return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
            if (axis === 'X') return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
        /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
            var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
            return overflowValue === 'auto' || overflowValue === 'scroll';
        }
        /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
            var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
            var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
            return isScrollableY || isScrollableX;
        }
        /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
            while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
            return el;
        }
        /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME;
            // avoid elapsed times higher than one
            elapsed = elapsed > 1 ? 1 : elapsed;
            // apply easing to elapsed time
            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY);
            // scroll more if we have not reached our destination
            if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
        }
        /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now();
            // define scroll context
            if (el === d.body) {
                scrollable = w;
                startX = w.scrollX || w.pageXOffset;
                startY = w.scrollY || w.pageYOffset;
                method = original.scroll;
            } else {
                scrollable = el;
                startX = el.scrollLeft;
                startY = el.scrollTop;
                method = scrollElement;
            }
            // scroll looping over a frame
            step({
                scrollable: scrollable,
                method: method,
                startTime: startTime,
                startX: startX,
                startY: startY,
                x: x,
                y: y
            });
        }
        // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };
        // w.scrollBy
        w.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                // if one number is passed, throw error to match Firefox implementation
                if (typeof arguments[0] === 'number' && arguments[1] === undefined) throw new SyntaxError('Value could not be converted');
                original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                return;
            }
            var left = arguments[0].left;
            var top = arguments[0].top;
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
        };
        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                return;
            }
            this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
            });
        };
        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();
            if (scrollableParent !== d.body) {
                // reveal element inside parent
                smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                // reveal parent in viewport unless is fixed
                if (w.getComputedStyle(scrollableParent).position !== 'fixed') w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth'
                });
            } else // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth'
            });
        };
    }
    // commonjs
    module.exports = {
        polyfill: polyfill
    };
})();

},{}],"8NLkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _virtualScroll = require("virtual-scroll");
var _virtualScrollDefault = parcelHelpers.interopDefault(_virtualScroll);
var _core = require("./Core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _maths = require("./utils/maths");
var _transform = require("./utils/transform");
var _html = require("./utils/html");
var _bezierEasing = require("bezier-easing");
var _bezierEasingDefault = parcelHelpers.interopDefault(_bezierEasing);
const keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
};
exports.default = class extends _coreDefault.default {
    constructor(options = {}){
        if (history.scrollRestoration) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        super(options);
        if (this.inertia) this.lerp = this.inertia * 0.1;
        this.isScrolling = false;
        this.isDraggingScrollbar = false;
        this.isTicking = false;
        this.hasScrollTicking = false;
        this.parallaxElements = {};
        this.stop = false;
        this.scrollbarContainer = options.scrollbarContainer;
        this.checkKey = this.checkKey.bind(this);
        window.addEventListener('keydown', this.checkKey, false);
    }
    init() {
        this.html.classList.add(this.smoothClass);
        this.html.setAttribute(`data-${this.name}-direction`, this.direction);
        this.instance = {
            delta: {
                x: this.initPosition.x,
                y: this.initPosition.y
            },
            scroll: {
                x: this.initPosition.x,
                y: this.initPosition.y
            },
            ...this.instance
        };
        this.vs = new _virtualScrollDefault.default({
            el: this.scrollFromAnywhere ? document : this.el,
            mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: false,
            passive: true
        });
        this.vs.on((e)=>{
            if (this.stop) return;
            if (!this.isDraggingScrollbar) requestAnimationFrame(()=>{
                this.updateDelta(e);
                if (!this.isScrolling) this.startScrolling();
            });
        });
        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();
        this.checkScroll(true);
        this.transformElements(true, true);
        super.init();
    }
    setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
        if (this.direction === 'horizontal') {
            let totalWidth = 0;
            let nodes = this.el.children;
            for(let i = 0; i < nodes.length; i++)totalWidth += nodes[i].offsetWidth;
            this.instance.limit.x = totalWidth - this.windowWidth;
        }
    }
    startScrolling() {
        this.startScrollTs = Date.now(); // Record timestamp
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }
    stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
        //Pevent scrollbar glitch/locking
        this.startScrollTs = undefined;
        if (this.scrollToRaf) {
            cancelAnimationFrame(this.scrollToRaf);
            this.scrollToRaf = null;
        }
        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
    }
    checkKey(e) {
        if (this.stop) {
            // If we are stopped, we don't want any scroll to occur because of a keypress
            // Prevent tab to scroll to activeElement
            if (e.keyCode == keyCodes.TAB) requestAnimationFrame(()=>{
                // Make sure native scroll is always at top of page
                this.html.scrollTop = 0;
                document.body.scrollTop = 0;
                this.html.scrollLeft = 0;
                document.body.scrollLeft = 0;
            });
            return;
        }
        switch(e.keyCode){
            case keyCodes.TAB:
                // Do not remove the RAF
                // It allows to override the browser's native scrollTo, which is essential
                requestAnimationFrame(()=>{
                    // Make sure native scroll is always at top of page
                    this.html.scrollTop = 0;
                    document.body.scrollTop = 0;
                    this.html.scrollLeft = 0;
                    document.body.scrollLeft = 0;
                    // Request scrollTo on the focusedElement, putting it at the center of the screen
                    this.scrollTo(document.activeElement, {
                        offset: -window.innerHeight / 2
                    });
                });
                break;
            case keyCodes.UP:
                if (this.isActiveElementScrollSensitive()) this.instance.delta[this.directionAxis] -= 240;
                break;
            case keyCodes.DOWN:
                if (this.isActiveElementScrollSensitive()) this.instance.delta[this.directionAxis] += 240;
                break;
            case keyCodes.PAGEUP:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;
            case keyCodes.PAGEDOWN:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;
            case keyCodes.HOME:
                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                break;
            case keyCodes.END:
                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                break;
            case keyCodes.SPACE:
                if (this.isActiveElementScrollSensitive()) {
                    if (e.shiftKey) this.instance.delta[this.directionAxis] -= window.innerHeight;
                    else this.instance.delta[this.directionAxis] += window.innerHeight;
                }
                break;
            default:
                return;
        }
        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
    }
    isActiveElementScrollSensitive() {
        return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
    }
    checkScroll(forced = false) {
        if (forced || this.isScrolling || this.isDraggingScrollbar) {
            if (!this.hasScrollTicking) {
                this.checkScrollRaf = requestAnimationFrame(()=>this.checkScroll()
                );
                this.hasScrollTicking = true;
            }
            this.updateScroll();
            const distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
            const timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms
            if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) this.stopScrolling();
            Object.entries(this.sections).forEach(([i, section])=>{
                if (section.persistent || this.instance.scroll[this.directionAxis] > section.offset[this.directionAxis] && this.instance.scroll[this.directionAxis] < section.limit[this.directionAxis]) {
                    if (this.direction === 'horizontal') this.transform(section.el, -this.instance.scroll[this.directionAxis], 0);
                    else this.transform(section.el, 0, -this.instance.scroll[this.directionAxis]);
                    if (!section.inView) {
                        section.inView = true;
                        section.el.style.opacity = 1;
                        section.el.style.pointerEvents = 'all';
                        section.el.setAttribute(`data-${this.name}-section-inview`, '');
                    }
                } else {
                    if (section.inView || forced) {
                        section.inView = false;
                        section.el.style.opacity = 0;
                        section.el.style.pointerEvents = 'none';
                        section.el.removeAttribute(`data-${this.name}-section-inview`);
                    }
                    this.transform(section.el, 0, 0);
                }
            });
            if (this.getDirection) this.addDirection();
            if (this.getSpeed) {
                this.addSpeed();
                this.speedTs = Date.now();
            }
            this.detectElements();
            this.transformElements();
            if (this.hasScrollbar) {
                const scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                if (this.direction === 'horizontal') this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                else this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }
            super.checkScroll();
            this.hasScrollTicking = false;
        }
    }
    resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.checkContext();
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.update();
    }
    updateDelta(e) {
        let delta;
        const gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
        if (gestureDirection === 'both') delta = e.deltaX + e.deltaY;
        else if (gestureDirection === 'vertical') delta = e.deltaY;
        else if (gestureDirection === 'horizontal') delta = e.deltaX;
        else delta = e.deltaY;
        this.instance.delta[this.directionAxis] -= delta * this.multiplier;
        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }
    updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) this.instance.scroll[this.directionAxis] = _maths.lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
        else {
            if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
            else if (this.instance.scroll.y < 0) this.setScroll(this.instance.scroll[this.directionAxis], 0);
            else this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
    }
    addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
            if (this.instance.direction !== 'down') this.instance.direction = 'down';
        } else if (this.instance.delta.y < this.instance.scroll.y) {
            if (this.instance.direction !== 'up') this.instance.direction = 'up';
        }
        if (this.instance.delta.x > this.instance.scroll.x) {
            if (this.instance.direction !== 'right') this.instance.direction = 'right';
        } else if (this.instance.delta.x < this.instance.scroll.x) {
            if (this.instance.direction !== 'left') this.instance.direction = 'left';
        }
    }
    addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
        else this.instance.speed = 0;
    }
    initScrollBar() {
        this.scrollbar = document.createElement('span');
        this.scrollbarThumb = document.createElement('span');
        this.scrollbar.classList.add(`${this.scrollbarClass}`);
        this.scrollbarThumb.classList.add(`${this.scrollbarClass}_thumb`);
        this.scrollbar.append(this.scrollbarThumb);
        if (this.scrollbarContainer) this.scrollbarContainer.append(this.scrollbar);
        else document.body.append(this.scrollbar);
        // Scrollbar Events
        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);
        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar);
        // Set scrollbar values
        this.hasScrollbar = false;
        if (this.direction == 'horizontal') {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
        } else {
            if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === 'horizontal') this.scrollbarThumb.style.width = `${this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth)}px`;
        else this.scrollbarThumb.style.height = `${this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight)}px`;
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
    }
    reinitScrollBar() {
        this.hasScrollbar = false;
        if (this.direction == 'horizontal') {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
        } else {
            if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === 'horizontal') this.scrollbarThumb.style.width = `${this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth)}px`;
        else this.scrollbarThumb.style.height = `${this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight)}px`;
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
    }
    destroyScrollBar() {
        this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
        window.removeEventListener('mouseup', this.releaseScrollBar);
        window.removeEventListener('mousemove', this.moveScrollBar);
        this.scrollbar.remove();
    }
    getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
    }
    releaseScrollBar(e) {
        this.isDraggingScrollbar = false;
        if (this.isScrolling) this.html.classList.add(this.scrollingClass);
        this.html.classList.remove(this.draggingClass);
    }
    moveScrollBar(e) {
        if (this.isDraggingScrollbar) requestAnimationFrame(()=>{
            let x = (e.clientX - this.scrollbarBCR.left) * 100 / this.scrollbarWidth * this.instance.limit.x / 100;
            let y = (e.clientY - this.scrollbarBCR.top) * 100 / this.scrollbarHeight * this.instance.limit.y / 100;
            if (y > 0 && y < this.instance.limit.y) this.instance.delta.y = y;
            if (x > 0 && x < this.instance.limit.x) this.instance.delta.x = x;
        });
    }
    addElements() {
        this.els = {};
        this.parallaxElements = {};
        // this.sections.forEach((section, y) => {
        const els = this.el.querySelectorAll(`[data-${this.name}]`);
        els.forEach((el, index)=>{
            // Try and find the target's parent section
            const targetParents = _html.getParents(el);
            let section1 = Object.entries(this.sections).map(([key, section])=>section
            ).find((section)=>targetParents.includes(section.el)
            );
            let cl = el.dataset[this.name + 'Class'] || this.class;
            let id = typeof el.dataset[this.name + 'Id'] === 'string' ? el.dataset[this.name + 'Id'] : 'el' + index;
            let top;
            let left;
            let repeat = el.dataset[this.name + 'Repeat'];
            let call = el.dataset[this.name + 'Call'];
            let position = el.dataset[this.name + 'Position'];
            let delay = el.dataset[this.name + 'Delay'];
            let direction = el.dataset[this.name + 'Direction'];
            let sticky = typeof el.dataset[this.name + 'Sticky'] === 'string';
            let speed = el.dataset[this.name + 'Speed'] ? parseFloat(el.dataset[this.name + 'Speed']) / 10 : false;
            let offset = typeof el.dataset[this.name + 'Offset'] === 'string' ? el.dataset[this.name + 'Offset'].split(',') : this.offset;
            let target = el.dataset[this.name + 'Target'];
            let targetEl;
            if (target !== undefined) targetEl = document.querySelector(`${target}`);
            else targetEl = el;
            const targetElBCR = targetEl.getBoundingClientRect();
            if (section1 === null) {
                top = targetElBCR.top + this.instance.scroll.y - _transform.getTranslate(targetEl).y;
                left = targetElBCR.left + this.instance.scroll.x - _transform.getTranslate(targetEl).x;
            } else if (!section1.inView) {
                top = targetElBCR.top - _transform.getTranslate(section1.el).y - _transform.getTranslate(targetEl).y;
                left = targetElBCR.left - _transform.getTranslate(section1.el).x - _transform.getTranslate(targetEl).x;
            } else {
                top = targetElBCR.top + this.instance.scroll.y - _transform.getTranslate(targetEl).y;
                left = targetElBCR.left + this.instance.scroll.x - _transform.getTranslate(targetEl).x;
            }
            let bottom = top + targetEl.offsetHeight;
            let right = left + targetEl.offsetWidth;
            let middle = {
                x: (right - left) / 2 + left,
                y: (bottom - top) / 2 + top
            };
            if (sticky) {
                const elBCR = el.getBoundingClientRect();
                const elTop = elBCR.top;
                const elLeft = elBCR.left;
                const elDistance = {
                    x: elLeft - left,
                    y: elTop - top
                };
                top += window.innerHeight;
                left += window.innerWidth;
                bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[this.directionAxis];
                right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[this.directionAxis];
                middle = {
                    x: (right - left) / 2 + left,
                    y: (bottom - top) / 2 + top
                };
            }
            if (repeat == 'false') repeat = false;
            else if (repeat != undefined) repeat = true;
            else repeat = this.repeat;
            let relativeOffset = [
                0,
                0
            ];
            if (offset) {
                if (this.direction === 'horizontal') {
                    for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                        if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowWidth / 100);
                        else relativeOffset[i] = parseInt(offset[i]);
                    } else relativeOffset[i] = offset[i];
                    left = left + relativeOffset[0];
                    right = right - relativeOffset[1];
                } else {
                    for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                        if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                        else relativeOffset[i] = parseInt(offset[i]);
                    } else relativeOffset[i] = offset[i];
                    top = top + relativeOffset[0];
                    bottom = bottom - relativeOffset[1];
                }
            }
            const mappedEl = {
                el,
                id: id,
                class: cl,
                section: section1,
                top,
                middle,
                bottom,
                left,
                right,
                offset,
                progress: 0,
                repeat,
                inView: false,
                call,
                speed,
                delay,
                position,
                target: targetEl,
                direction,
                sticky
            };
            this.els[id] = mappedEl;
            if (el.classList.contains(cl)) this.setInView(this.els[id], id);
            if (speed !== false || sticky) this.parallaxElements[id] = mappedEl;
        });
    // });
    }
    addSections() {
        this.sections = {};
        let sections = this.el.querySelectorAll(`[data-${this.name}-section]`);
        if (sections.length === 0) sections = [
            this.el
        ];
        sections.forEach((section, index)=>{
            let id = typeof section.dataset[this.name + 'Id'] === 'string' ? section.dataset[this.name + 'Id'] : 'section' + index;
            const sectionBCR = section.getBoundingClientRect();
            let offset = {
                x: sectionBCR.left - window.innerWidth * 1.5 - _transform.getTranslate(section).x,
                y: sectionBCR.top - window.innerHeight * 1.5 - _transform.getTranslate(section).y
            };
            let limit = {
                x: offset.x + sectionBCR.width + window.innerWidth * 2,
                y: offset.y + sectionBCR.height + window.innerHeight * 2
            };
            let persistent = typeof section.dataset[this.name + 'Persistent'] === 'string';
            section.setAttribute('data-scroll-section-id', id);
            const mappedSection = {
                el: section,
                offset: offset,
                limit: limit,
                inView: false,
                persistent: persistent,
                id: id
            };
            this.sections[id] = mappedSection;
        });
    }
    transform(element, x, y, delay) {
        let transform;
        if (!delay) transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${x},${y},0,1)`;
        else {
            let start = _transform.getTranslate(element);
            let lerpX = _maths.lerp(start.x, x, delay);
            let lerpY = _maths.lerp(start.y, y, delay);
            transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${lerpX},${lerpY},0,1)`;
        }
        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
    }
    transformElements(isForced, setAllElements = false) {
        const scrollRight = this.instance.scroll.x + this.windowWidth;
        const scrollBottom = this.instance.scroll.y + this.windowHeight;
        const scrollMiddle = {
            x: this.instance.scroll.x + this.windowMiddle.x,
            y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(([i, current])=>{
            let transformDistance = false;
            if (isForced) transformDistance = 0;
            if (current.inView || setAllElements) switch(current.position){
                case 'top':
                    transformDistance = this.instance.scroll[this.directionAxis] * -current.speed;
                    break;
                case 'elementTop':
                    transformDistance = (scrollBottom - current.top) * -current.speed;
                    break;
                case 'bottom':
                    transformDistance = (this.instance.limit[this.directionAxis] - scrollBottom + this.windowHeight) * current.speed;
                    break;
                case 'left':
                    transformDistance = this.instance.scroll[this.directionAxis] * -current.speed;
                    break;
                case 'elementLeft':
                    transformDistance = (scrollRight - current.left) * -current.speed;
                    break;
                case 'right':
                    transformDistance = (this.instance.limit[this.directionAxis] - scrollRight + this.windowHeight) * current.speed;
                    break;
                default:
                    transformDistance = (scrollMiddle[this.directionAxis] - current.middle[this.directionAxis]) * -current.speed;
                    break;
            }
            if (current.sticky) {
                if (current.inView) {
                    if (this.direction === 'horizontal') transformDistance = this.instance.scroll.x - current.left + window.innerWidth;
                    else transformDistance = this.instance.scroll.y - current.top + window.innerHeight;
                } else if (this.direction === 'horizontal') {
                    if (this.instance.scroll.x < current.left - window.innerWidth && this.instance.scroll.x < current.left - window.innerWidth / 2) transformDistance = 0;
                    else if (this.instance.scroll.x > current.right && this.instance.scroll.x > current.right + 100) transformDistance = current.right - current.left + window.innerWidth;
                    else transformDistance = false;
                } else {
                    if (this.instance.scroll.y < current.top - window.innerHeight && this.instance.scroll.y < current.top - window.innerHeight / 2) transformDistance = 0;
                    else if (this.instance.scroll.y > current.bottom && this.instance.scroll.y > current.bottom + 100) transformDistance = current.bottom - current.top + window.innerHeight;
                    else transformDistance = false;
                }
            }
            if (transformDistance !== false) {
                if (current.direction === 'horizontal' || this.direction === 'horizontal' && current.direction !== 'vertical') this.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
                else this.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
        });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */ scrollTo(target, options = {}) {
        // Parse options
        let offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
        const duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds
        let easing = options.easing || [
            0.25,
            0,
            0.35,
            1
        ]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
        const disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true
        const callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
        easing = _bezierEasingDefault.default(...easing);
        if (typeof target === 'string') {
            // Selector or boundaries
            if (target === 'top') target = 0;
            else if (target === 'bottom') target = this.instance.limit.y;
            else if (target === 'left') target = 0;
            else if (target === 'right') target = this.instance.limit.x;
            else {
                target = document.querySelector(target);
                // If the query fails, abort
                if (!target) return;
            }
        } else if (typeof target === 'number') // Absolute coordinate
        target = parseInt(target);
        else if (target && target.tagName) ;
        else {
            console.warn('`target` parameter is not valid');
            return;
        }
        // We have a target that is not a coordinate yet, get it
        if (typeof target !== 'number') {
            // Verify the given target belongs to this scroll scope
            let targetInScope = _html.getParents(target).includes(this.el);
            if (!targetInScope) // If the target isn't inside our main element, abort any action
            return;
            // Get target offset from top
            const targetBCR = target.getBoundingClientRect();
            const offsetTop = targetBCR.top;
            const offsetLeft = targetBCR.left;
            // Try and find the target's parent section
            const targetParents = _html.getParents(target);
            const parentSection = targetParents.find((candidate)=>{
                return Object.entries(this.sections) // Get sections associative array as a regular array
                .map(([key, section])=>section
                ) // map to section only (we dont need the key here)
                .find((section)=>section.el == candidate
                ); // finally find the section that matches the candidate
            });
            let parentSectionOffset = 0;
            if (parentSection) parentSectionOffset = _transform.getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
            else // if no parent section is found we need to use instance scroll directly
            parentSectionOffset = -this.instance.scroll[this.directionAxis];
            // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
            if (this.direction === 'horizontal') offset = offsetLeft + offset - parentSectionOffset;
            else offset = offsetTop + offset - parentSectionOffset;
        } else offset = target + offset;
        // Actual scrollto
        // ==========================================================================
        // Setup
        const scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        const scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries
        const scrollDiff = scrollTarget - scrollStart;
        const render = (p)=>{
            if (disableLerp) {
                if (this.direction === 'horizontal') this.setScroll(scrollStart + scrollDiff * p, this.instance.delta.y);
                else this.setScroll(this.instance.delta.x, scrollStart + scrollDiff * p);
            } else this.instance.delta[this.directionAxis] = scrollStart + scrollDiff * p;
        };
        // Prepare the scroll
        this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
        this.startScrolling(); // Restart the scroll
        // Start the animation loop
        const start = Date.now();
        const loop = ()=>{
            var p = (Date.now() - start) / duration; // Animation progress
            if (p > 1) {
                // Animation ends
                render(1);
                this.animatingScroll = false;
                if (duration == 0) this.update();
                if (callback) callback();
            } else {
                this.scrollToRaf = requestAnimationFrame(loop);
                render(easing(p));
            }
        };
        loop();
    }
    update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();
        this.checkScroll(true);
    }
    startScroll() {
        this.stop = false;
    }
    stopScroll() {
        this.stop = true;
    }
    setScroll(x, y) {
        this.instance = {
            ...this.instance,
            scroll: {
                x: x,
                y: y
            },
            delta: {
                x: x,
                y: y
            },
            speed: 0
        };
    }
    destroy() {
        super.destroy();
        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener('keydown', this.checkKey, false);
    }
};

},{"virtual-scroll":"kX6z8","./Core":"46USk","./utils/maths":"4gfKc","./utils/transform":"gzB1s","./utils/html":"fHFTb","bezier-easing":"jezh8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kX6z8":[function(require,module,exports) {
'use strict';
var objectAssign = require('object-assign');
var Emitter = require('tiny-emitter');
var Lethargy = require('lethargy').Lethargy;
var support = require('./support');
var clone = require('./clone');
var bindAll = require('bindall-standalone');
var EVT_ID = 'virtualscroll';
module.exports = VirtualScroll;
var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
function VirtualScroll(options) {
    bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);
    if (this.options.limitInertia) this._lethargy = new Lethargy();
    this._emitter = new Emitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== undefined) this.listenerOptions = {
        passive: this.options.passive
    };
}
VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
    });
};
VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if (support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
};
VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
};
VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};
VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) e.preventDefault();
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
};
VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch(e.keyCode){
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;
        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = -this.options.keyStep;
            break;
        case keyCodes.SPACE && e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = -windowHeight;
            break;
        default:
            return;
    }
    this._notify(e);
};
VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);
    if (support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};
VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};
VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};
VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

},{"object-assign":"7OXxh","tiny-emitter":"2GwCf","lethargy":"1abQx","./support":"3eRJO","./clone":"2MwXX","bindall-standalone":"9DE6t"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 'use strict';
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"2GwCf":[function(require,module,exports) {
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
module.exports = E;

},{}],"1abQx":[function(require,module,exports) {
// Generated by CoffeeScript 1.9.2
(function() {
    var root;
    root = exports !== null ? exports : this;
    root.Lethargy = function() {
        function Lethargy(stability, sensitivity, tolerance, delay) {
            this.stability = stability != null ? Math.abs(stability) : 8;
            this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
            this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
            this.delay = delay != null ? delay : 150;
            this.lastUpDeltas = (function() {
                var i, ref, results;
                results = [];
                for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                return results;
            }).call(this);
            this.lastDownDeltas = (function() {
                var i, ref, results;
                results = [];
                for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                return results;
            }).call(this);
            this.deltasTimestamp = (function() {
                var i, ref, results;
                results = [];
                for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                return results;
            }).call(this);
        }
        Lethargy.prototype.check = function(e) {
            var lastDelta;
            e = e.originalEvent || e;
            if (e.wheelDelta != null) lastDelta = e.wheelDelta;
            else if (e.deltaY != null) lastDelta = e.deltaY * -40;
            else if (e.detail != null || e.detail === 0) lastDelta = e.detail * -40;
            this.deltasTimestamp.push(Date.now());
            this.deltasTimestamp.shift();
            if (lastDelta > 0) {
                this.lastUpDeltas.push(lastDelta);
                this.lastUpDeltas.shift();
                return this.isInertia(1);
            } else {
                this.lastDownDeltas.push(lastDelta);
                this.lastDownDeltas.shift();
                return this.isInertia(-1);
            }
            return false;
        };
        Lethargy.prototype.isInertia = function(direction) {
            var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
            lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
            if (lastDeltas[0] === null) return direction;
            if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) return false;
            lastDeltasOld = lastDeltas.slice(0, this.stability);
            lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
            oldSum = lastDeltasOld.reduce(function(t, s) {
                return t + s;
            });
            newSum = lastDeltasNew.reduce(function(t, s) {
                return t + s;
            });
            oldAverage = oldSum / lastDeltasOld.length;
            newAverage = newSum / lastDeltasNew.length;
            if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) return direction;
            else return false;
        };
        Lethargy.prototype.showLastUpDeltas = function() {
            return this.lastUpDeltas;
        };
        Lethargy.prototype.showLastDownDeltas = function() {
            return this.lastDownDeltas;
        };
        return Lethargy;
    }();
}).call(this);

},{}],"3eRJO":[function(require,module,exports) {
'use strict';
module.exports = function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
}();

},{}],"2MwXX":[function(require,module,exports) {
'use strict';
module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};

},{}],"9DE6t":[function(require,module,exports) {
'use strict';
var toString = Object.prototype.toString, hasOwnProperty = Object.prototype.hasOwnProperty;
module.exports = function(object) {
    if (!object) return console.warn('bindAll requires at least one argument.');
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) for(var method in object){
        if (hasOwnProperty.call(object, method)) {
            if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") functions.push(method);
        }
    }
    for(var i = 0; i < functions.length; i++){
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/ function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

},{}],"4gfKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lerp", ()=>lerp
);
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzB1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transform", ()=>transform
);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate
);
function transform(el, transformValue) {
    el.style.webkitTransform = transformValue;
    el.style.msTransform = transformValue;
    el.style.transform = transformValue;
}
function getTranslate(el) {
    const translate = {};
    if (!window.getComputedStyle) return;
    const style = getComputedStyle(el);
    const transform1 = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform1.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
        mat = transform1.match(/^matrix\((.+)\)$/);
        translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }
    return translate;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHFTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */ parcelHelpers.export(exports, "getParents", ()=>getParents
);
// https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
parcelHelpers.export(exports, "queryClosestParent", ()=>queryClosestParent
);
function getParents(elem) {
    // Set up a parent array
    let parents = [];
    // Push each parent element to the array
    for(; elem && elem !== document; elem = elem.parentNode)parents.push(elem);
    // Return our parent array
    return parents;
}
function queryClosestParent(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
        while(--i >= 0 && matches.item(i) !== this);
        return i > -1;
    };
    // Get the closest matching element
    for(; elem && elem !== document; elem = elem.parentNode){
        if (elem.matches(selector)) return elem;
    }
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jezh8":[function(require,module,exports) {
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
    return 3 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) aB = currentT;
        else aA = currentT;
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
    if (mX1 === mY1 && mX2 === mY2) return LinearEasing;
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        else if (initialSlope === 0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
    };
};

},{}],"lHJ2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Native", ()=>Native
);
var _options = require("./options");
var _native = require("./Native");
var _nativeDefault = parcelHelpers.interopDefault(_native);
class Native {
    constructor(options = {}){
        this.options = options;
        // Override default options with given ones
        Object.assign(this, _options.defaults, options);
        this.smartphone = _options.defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = _options.defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.init();
    }
    init() {
        this.scroll = new _nativeDefault.default(this.options);
        this.scroll.init();
        if (window.location.hash) {
            // Get the hash without the '#' and find the matching element
            const id = window.location.hash.slice(1, window.location.hash.length);
            let target = document.getElementById(id);
            // If found, scroll to the element
            if (target) this.scroll.scrollTo(target);
        }
    }
    update() {
        this.scroll.update();
    }
    start() {
        this.scroll.startScroll();
    }
    stop() {
        this.scroll.stopScroll();
    }
    scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
    }
    setScroll(x, y) {
        this.scroll.setScroll(x, y);
    }
    on(event, func) {
        this.scroll.setEvents(event, func);
    }
    off(event, func) {
        this.scroll.unsetEvents(event, func);
    }
    destroy() {
        this.scroll.destroy();
    }
}

},{"./options":"921bg","./Native":"1wSK4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aIdiY","bDbGG"], "bDbGG", "parcelRequiredc16")

//# sourceMappingURL=index.fbb3188c.js.map
