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
})({"jQ3NR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d0fbc3d93c339a23";
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

},{}],"dJJuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// ------------------------
// HERO SECTION TYPEWRITER EFFECT
// ------------------------
var _core = require("/node_modules/typewriter-effect/dist/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
new _coreDefault.default('#typewriter', {
    strings: [
        'Reinvent',
        'Recreate',
        'Rediscover'
    ],
    autoStart: true,
    loop: true,
    delay: 70
});

},{"/node_modules/typewriter-effect/dist/core":"gppl0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gppl0":[function(require,module,exports) {
var process = require("process");
!function(e, t) {
    module.exports = t();
}("undefined" != typeof self ? self : this, function() {
    return (()=>{
        var e1 = {
            75: function(e2) {
                (function() {
                    var t, n, r, o, a, s;
                    "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
                        return (t() - a) / 1000000;
                    }, n = process.hrtime, o = (t = function() {
                        var e;
                        return 1000000000 * (e = n())[0] + e[1];
                    })(), s = 1000000000 * process.uptime(), a = o - s) : Date.now ? (e2.exports = function() {
                        return Date.now() - r;
                    }, r = Date.now()) : (e2.exports = function() {
                        return (new Date).getTime() - r;
                    }, r = (new Date).getTime());
                }).call(this);
            },
            4087: (e3, t2, n2)=>{
                for(var r = n2(75), o = "undefined" == typeof window ? n2.g : window, a = [
                    "moz",
                    "webkit"
                ], s = "AnimationFrame", i = o["request" + s], u = o["cancel" + s] || o["cancelRequest" + s], l = 0; !i && l < a.length; l++)i = o[a[l] + "Request" + s], u = o[a[l] + "Cancel" + s] || o[a[l] + "CancelRequest" + s];
                if (!i || !u) {
                    var c = 0, p = 0, d = [];
                    i = function(e4) {
                        if (0 === d.length) {
                            var t3 = r(), n = Math.max(0, 16.666666666666668 - (t3 - c));
                            c = n + t3, setTimeout(function() {
                                var e = d.slice(0);
                                d.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(c);
                                } catch (e5) {
                                    setTimeout(function() {
                                        throw e5;
                                    }, 0);
                                }
                            }, Math.round(n));
                        }
                        return d.push({
                            handle: ++p,
                            callback: e4,
                            cancelled: !1
                        }), p;
                    }, u = function(e) {
                        for(var t = 0; t < d.length; t++)d[t].handle === e && (d[t].cancelled = !0);
                    };
                }
                e3.exports = function(e) {
                    return i.call(o, e);
                }, e3.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e3.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = i, e.cancelAnimationFrame = u;
                };
            }
        }, t1 = {};
        function n1(r) {
            var o = t1[r];
            if (void 0 !== o) return o.exports;
            var a = t1[r] = {
                exports: {}
            };
            return e1[r].call(a.exports, a, a.exports, n1), a.exports;
        }
        n1.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default
             : ()=>e
            ;
            return n1.d(t, {
                a: t
            }), t;
        }, n1.d = (e, t)=>{
            for(var r in t)n1.o(t, r) && !n1.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n1.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n1.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t)
        ;
        var r1 = {};
        return (()=>{
            n1.d(r1, {
                default: ()=>S1
            });
            var e6 = n1(4087), t5 = n1.n(e6);
            const o1 = function(e) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(e);
            }, a1 = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.childNodes;
            }, s1 = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            };
            var i1 = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", l = "REMOVE_ALL", c = "REMOVE_LAST_VISIBLE_NODE", p = "PAUSE_FOR", d = "CALL_FUNCTION", f = "ADD_HTML_TAG_ELEMENT", v = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", m = "CHANGE_CURSOR", y = "PASTE_STRING", g = "HTML_TAG";
            function E1(e, t6) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t6 && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function w(e) {
                for(var t7 = 1; t7 < arguments.length; t7++){
                    var n = null != arguments[t7] ? arguments[t7] : {};
                    t7 % 2 ? E1(Object(n), !0).forEach(function(t) {
                        N1(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function T(e7) {
                return function(e) {
                    if (Array.isArray(e)) return b1(e);
                }(e7) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e7) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return b1(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b1(e, t) : void 0;
                    }
                }(e7) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function b1(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function A1(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function N1(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            const S1 = function() {
                function n3(r3, E3) {
                    var b = this;
                    if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n3), N1(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), N1(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        pauseFor: 1500,
                        deleteSpeed: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor",
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null
                    }), N1(this, "setupWrapperElement", function() {
                        b.state.elements.container && (b.state.elements.wrapper.className = b.options.wrapperClassName, b.state.elements.cursor.className = b.options.cursorClassName, b.state.elements.cursor.innerHTML = b.options.cursor, b.state.elements.container.innerHTML = "", b.state.elements.container.appendChild(b.state.elements.wrapper), b.state.elements.container.appendChild(b.state.elements.cursor));
                    }), N1(this, "start", function() {
                        return b.state.eventLoopPaused = !1, b.runEventLoop(), b;
                    }), N1(this, "pause", function() {
                        return b.state.eventLoopPaused = !0, b;
                    }), N1(this, "stop", function() {
                        return b.state.eventLoop && ((0, e6.cancel)(b.state.eventLoop), b.state.eventLoop = null), b;
                    }), N1(this, "pauseFor", function(e) {
                        return b.addEventToQueue(p, {
                            ms: e
                        }), b;
                    }), N1(this, "typeOutAllStrings", function() {
                        return "string" == typeof b.options.strings ? (b.typeString(b.options.strings).pauseFor(b.options.pauseFor), b) : (b.options.strings.forEach(function(e) {
                            b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed);
                        }), b);
                    }), N1(this, "typeString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (o1(e)) return b.typeOutHTMLString(e, t);
                        if (e) {
                            var n = b.options || {}, r = n.stringSplitter, a = "function" == typeof r ? r(e) : e.split("");
                            b.typeCharacters(a, t);
                        }
                        return b;
                    }), N1(this, "pasteString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return o1(e) ? b.typeOutHTMLString(e, t, !0) : (e && b.addEventToQueue(y, {
                            character: e,
                            node: t
                        }), b);
                    }), N1(this, "typeOutHTMLString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0, r = a1(e);
                        if (r.length > 0) for(var o = 0; o < r.length; o++){
                            var s = r[o], i = s.innerHTML;
                            s && 3 !== s.nodeType ? (s.innerHTML = "", b.addEventToQueue(f, {
                                node: s,
                                parentNode: t
                            }), n ? b.pasteString(i, s) : b.typeString(i, s)) : s.textContent && (n ? b.pasteString(s.textContent, t) : b.typeString(s.textContent, t));
                        }
                        return b;
                    }), N1(this, "deleteAll", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                        return b.addEventToQueue(l, {
                            speed: e
                        }), b;
                    }), N1(this, "changeDeleteSpeed", function(e) {
                        if (!e) throw new Error("Must provide new delete speed");
                        return b.addEventToQueue(v, {
                            speed: e
                        }), b;
                    }), N1(this, "changeDelay", function(e) {
                        if (!e) throw new Error("Must provide new delay");
                        return b.addEventToQueue(h, {
                            delay: e
                        }), b;
                    }), N1(this, "changeCursor", function(e) {
                        if (!e) throw new Error("Must provide new cursor");
                        return b.addEventToQueue(m, {
                            cursor: e
                        }), b;
                    }), N1(this, "deleteChars", function(e) {
                        if (!e) throw new Error("Must provide amount of characters to delete");
                        for(var t = 0; t < e; t++)b.addEventToQueue(u);
                        return b;
                    }), N1(this, "callFunction", function(e, t) {
                        if (!e || "function" != typeof e) throw new Error("Callbak must be a function");
                        return b.addEventToQueue(d, {
                            cb: e,
                            thisArg: t
                        }), b;
                    }), N1(this, "typeCharacters", function(e8) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!e8 || !Array.isArray(e8)) throw new Error("Characters must be an array");
                        return e8.forEach(function(e) {
                            b.addEventToQueue(i1, {
                                character: e,
                                node: t
                            });
                        }), b;
                    }), N1(this, "removeCharacters", function(e) {
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function() {
                            b.addEventToQueue(u);
                        }), b;
                    }), N1(this, "addEventToQueue", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return b.addEventToStateProperty(e, t, n, "eventQueue");
                    }), N1(this, "addReverseCalledEvent", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = b.options.loop;
                        return r ? b.addEventToStateProperty(e, t, n, "reverseCalledEvents") : b;
                    }), N1(this, "addEventToStateProperty", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 ? arguments[3] : void 0, o = {
                            eventName: e,
                            eventArgs: t || {}
                        };
                        return b.state[r] = n ? [
                            o
                        ].concat(T(b.state[r])) : [].concat(T(b.state[r]), [
                            o
                        ]), b;
                    }), N1(this, "runEventLoop", function() {
                        b.state.lastFrameTime || (b.state.lastFrameTime = Date.now());
                        var e = Date.now(), n = e - b.state.lastFrameTime;
                        if (!b.state.eventQueue.length) {
                            if (!b.options.loop) return;
                            b.state.eventQueue = T(b.state.calledEvents), b.state.calledEvents = [], b.options = w({}, b.state.initialOptions);
                        }
                        if (b.state.eventLoop = t5()(b.runEventLoop), !b.state.eventLoopPaused) {
                            if (b.state.pauseUntil) {
                                if (e < b.state.pauseUntil) return;
                                b.state.pauseUntil = null;
                            }
                            var r, o = T(b.state.eventQueue), a = o.shift();
                            if (!(n <= (r = a.eventName === c || a.eventName === u ? "natural" === b.options.deleteSpeed ? s1(40, 80) : b.options.deleteSpeed : "natural" === b.options.delay ? s1(120, 160) : b.options.delay))) {
                                var E = a.eventName, A = a.eventArgs;
                                switch(b.logInDevMode({
                                    currentEvent: a,
                                    state: b.state,
                                    delay: r
                                }), E){
                                    case y:
                                    case i1:
                                        var N = A.character, S = A.node, C = document.createTextNode(N), _ = C;
                                        b.options.onCreateTextNode && "function" == typeof b.options.onCreateTextNode && (_ = b.options.onCreateTextNode(N, C)), _ && (S ? S.appendChild(_) : b.state.elements.wrapper.appendChild(_)), b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [
                                            {
                                                type: "TEXT_NODE",
                                                character: N,
                                                node: _
                                            }
                                        ]);
                                        break;
                                    case u:
                                        o.unshift({
                                            eventName: c,
                                            eventArgs: {
                                                removingCharacterNode: !0
                                            }
                                        });
                                        break;
                                    case p:
                                        var O = a.eventArgs.ms;
                                        b.state.pauseUntil = Date.now() + parseInt(O);
                                        break;
                                    case d:
                                        var L = a.eventArgs, D = L.cb, M = L.thisArg;
                                        D.call(M, {
                                            elements: b.state.elements
                                        });
                                        break;
                                    case f:
                                        var x = a.eventArgs, P = x.node, R = x.parentNode;
                                        R ? R.appendChild(P) : b.state.elements.wrapper.appendChild(P), b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [
                                            {
                                                type: g,
                                                node: P,
                                                parentNode: R || b.state.elements.wrapper
                                            }
                                        ]);
                                        break;
                                    case l:
                                        var j = b.state.visibleNodes, k = A.speed, Q = [];
                                        k && Q.push({
                                            eventName: v,
                                            eventArgs: {
                                                speed: k,
                                                temp: !0
                                            }
                                        });
                                        for(var F = 0, H = j.length; F < H; F++)Q.push({
                                            eventName: c,
                                            eventArgs: {
                                                removingCharacterNode: !1
                                            }
                                        });
                                        k && Q.push({
                                            eventName: v,
                                            eventArgs: {
                                                speed: b.options.deleteSpeed,
                                                temp: !0
                                            }
                                        }), o.unshift.apply(o, Q);
                                        break;
                                    case c:
                                        var I = a.eventArgs.removingCharacterNode;
                                        if (b.state.visibleNodes.length) {
                                            var U = b.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                                            b.options.onRemoveNode && "function" == typeof b.options.onRemoveNode && b.options.onRemoveNode({
                                                node: G,
                                                character: Y
                                            }), G && G.parentNode.removeChild(G), q === g && I && o.unshift({
                                                eventName: c,
                                                eventArgs: {}
                                            });
                                        }
                                        break;
                                    case v:
                                        b.options.deleteSpeed = a.eventArgs.speed;
                                        break;
                                    case h:
                                        b.options.delay = a.eventArgs.delay;
                                        break;
                                    case m:
                                        b.options.cursor = a.eventArgs.cursor, b.state.elements.cursor.innerHTML = a.eventArgs.cursor;
                                }
                                b.options.loop && (a.eventName === c || a.eventArgs && a.eventArgs.temp || (b.state.calledEvents = [].concat(T(b.state.calledEvents), [
                                    a
                                ]))), b.state.eventQueue = o, b.state.lastFrameTime = e;
                            }
                        }
                    }), r3) {
                        if ("string" == typeof r3) {
                            var A2 = document.querySelector(r3);
                            if (!A2) throw new Error("Could not find container element");
                            this.state.elements.container = A2;
                        } else this.state.elements.container = r3;
                    }
                    E3 && (this.options = w(w({}, this.options), E3)), this.state.initialOptions = w({}, this.options), this.init();
                }
                var r2, E2;
                return r2 = n3, E2 = [
                    {
                        key: "init",
                        value: function() {
                            var e, t;
                            this.setupWrapperElement(), this.addEventToQueue(m, {
                                cursor: this.options.cursor
                            }, !0), this.addEventToQueue(l, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                        }
                    },
                    {
                        key: "logInDevMode",
                        value: function(e) {
                            this.options.devMode && console.log(e);
                        }
                    }
                ], A1(r2.prototype, E2), n3;
            }();
        })(), r1.default;
    })();
});

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"gkKU3":[function(require,module,exports) {
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

},{}]},["jQ3NR","dJJuw"], "dJJuw", "parcelRequiredc16")

//# sourceMappingURL=index.3c339a23.js.map
