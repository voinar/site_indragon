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
})({"4ixHu":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "517f7cb0ff85684f";
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

},{}],"h1r2N":[function(require,module,exports) {
var global = arguments[3];
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t1(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function e1(t, e) {
        for(var i = 0; i < e.length; i++){
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function i1(t, i, s) {
        return i && e1(t.prototype, i), s && e1(t, s), t;
    }
    function s1(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t;
    }
    function n1(t, e2) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e2 && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), i.push.apply(i, s);
        }
        return i;
    }
    function o1(t) {
        for(var e3 = 1; e3 < arguments.length; e3++){
            var i = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? n1(Object(i), !0).forEach(function(e) {
                s1(t, e, i[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n1(Object(i)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
            });
        }
        return t;
    }
    function l1(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && a1(t, e);
    }
    function r1(t2) {
        return (r1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t2);
    }
    function a1(t3, e4) {
        return (a1 = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t3, e4);
    }
    function c1(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h1(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c1(t) : e;
    }
    function d1(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function() {
            var i, s = r1(t);
            if (e) {
                var n = r1(this).constructor;
                i = Reflect.construct(s, arguments, n);
            } else i = s.apply(this, arguments);
            return h1(this, i);
        };
    }
    function u1(t4, e5, i2) {
        return (u1 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t5, e6, i) {
            var s = function(t, e) {
                for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r1(t)););
                return t;
            }(t5, e6);
            if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e6);
                return n.get ? n.get.call(i) : n.value;
            }
        })(t4, e5, i2 || t4);
    }
    function f1(t6, e7) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t6) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var i = [], s = !0, n = !1, o = void 0;
            try {
                for(var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
            } catch (t7) {
                n = !0, o = t7;
            } finally{
                try {
                    s || null == r.return || r.return();
                } finally{
                    if (n) throw o;
                }
            }
            return i;
        }(t6, e7) || m1(t6, e7) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function p1(t8) {
        return function(t) {
            if (Array.isArray(t)) return v1(t);
        }(t8) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }(t8) || m1(t8) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function m1(t, e) {
        if (t) {
            if ("string" == typeof t) return v1(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v1(t, e) : void 0;
        }
    }
    function v1(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var i = 0, s = new Array(e); i < e; i++)s[i] = t[i];
        return s;
    }
    var y1 = {
        el: document,
        name: "scroll",
        offset: [
            0,
            0
        ],
        repeat: !1,
        smooth: !1,
        initPosition: {
            x: 0,
            y: 0
        },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: 0.1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
        },
        smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    }, b1 = function() {
        function e8() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t1(this, e8), Object.assign(this, y1, i), this.smartphone = y1.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y1.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1);
        }
        return i1(e8, [
            {
                key: "init",
                value: function() {
                    this.initEvents();
                }
            },
            {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll();
                }
            },
            {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function() {
                        t.resize(), t.resizeTick = !1;
                    }));
                }
            },
            {
                key: "resize",
                value: function() {}
            },
            {
                key: "checkContext",
                value: function() {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context) ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload();
                    }
                }
            },
            {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(e) {
                        e.addEventListener("click", t.setScrollTo, !1);
                    });
                }
            },
            {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    });
                }
            },
            {
                key: "addElements",
                value: function() {}
            },
            {
                key: "detectElements",
                value: function(t) {
                    var e = this, i = this.instance.scroll.y, s = i + this.windowHeight, n = this.instance.scroll.x, o = n + this.windowWidth;
                    Object.entries(this.els).forEach(function(l) {
                        var r = f1(l, 2), a = r[0], c = r[1];
                        if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView) {
                            if ("horizontal" === e.direction) {
                                var h = c.right - c.left;
                                c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (o < c.left || n > c.right) && e.setOutOfView(c, a);
                            } else {
                                var d = c.bottom - c.top;
                                c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight), (s < c.top || i > c.bottom) && e.setOutOfView(c, a);
                            }
                        }
                    }), this.hasScrollTicking = !1;
                }
            },
            {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1));
                }
            },
            {
                key: "setOutOfView",
                value: function(t9, e) {
                    var i = this;
                    this.els[e].inView = !1, Object.keys(this.currentElements).forEach(function(t) {
                        t === e && delete i.currentElements[t];
                    }), t9.call && this.hasCallEventSet && this.dispatchCall(t9, "exit"), t9.repeat && t9.el.classList.remove(t9.class);
                }
            },
            {
                key: "dispatchCall",
                value: function(t10, e) {
                    this.callWay = e, this.callValue = t10.call.split(",").map(function(t) {
                        return t.trim();
                    }), this.callObj = t10, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i);
                }
            },
            {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t);
                }
            },
            {
                key: "setEvents",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0));
                }
            },
            {
                key: "unsetEvents",
                value: function(t, e) {
                    if (this.listeners[t]) {
                        var i = this.listeners[t], s = i.indexOf(e);
                        s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1));
                    }
                }
            },
            {
                key: "checkEvent",
                value: function(t11) {
                    var e = this, i = t11.type.replace(this.namespace, ""), s = this.listeners[i];
                    s && 0 !== s.length && s.forEach(function(t) {
                        switch(i){
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t();
                        }
                    });
                }
            },
            {
                key: "startScroll",
                value: function() {}
            },
            {
                key: "stopScroll",
                value: function() {}
            },
            {
                key: "setScroll",
                value: function(t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    };
                }
            },
            {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(e) {
                        t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                    }), this.listeners = {}, this.scrollToEls.forEach(function(e) {
                        e.removeEventListener("click", t.setScrollTo, !1);
                    }), this.html.classList.remove(this.initClass);
                }
            }
        ]), e8;
    }(), g1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function w1(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    var S1 = w1(function(t12, e9) {
        t12.exports = {
            polyfill: function() {
                var t13 = window, e10 = document;
                if (!("scrollBehavior" in e10.documentElement.style) || !0 === t13.__forceSmoothScrollPolyfill__) {
                    var i3, s2 = t13.HTMLElement || t13.Element, n = {
                        scroll: t13.scroll || t13.scrollTo,
                        scrollBy: t13.scrollBy,
                        elementScroll: s2.prototype.scroll || r2,
                        scrollIntoView: s2.prototype.scrollIntoView
                    }, o2 = t13.performance && t13.performance.now ? t13.performance.now.bind(t13.performance) : Date.now, l = (i3 = t13.navigator.userAgent, new RegExp([
                        "MSIE ",
                        "Trident/",
                        "Edge/"
                    ].join("|")).test(i3) ? 1 : 0);
                    t13.scroll = t13.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== a2(arguments[0]) ? p.call(t13, e10.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t13.scrollX || t13.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t13.scrollY || t13.pageYOffset) : n.scroll.call(t13, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t13.scrollX || t13.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t13.scrollY || t13.pageYOffset));
                    }, t13.scrollBy = function() {
                        void 0 !== arguments[0] && (a2(arguments[0]) ? n.scrollBy.call(t13, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t13, e10.body, ~~arguments[0].left + (t13.scrollX || t13.pageXOffset), ~~arguments[0].top + (t13.scrollY || t13.pageYOffset)));
                    }, s2.prototype.scroll = s2.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0]) {
                            if (!0 !== a2(arguments[0])) {
                                var t = arguments[0].left, e = arguments[0].top;
                                p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                            }
                        }
                    }, s2.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== a2(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
                    }, s2.prototype.scrollIntoView = function() {
                        if (!0 !== a2(arguments[0])) {
                            var i = u2(this), s = i.getBoundingClientRect(), o = this.getBoundingClientRect();
                            i !== e10.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top), "fixed" !== t13.getComputedStyle(i).position && t13.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })) : t13.scrollBy({
                                left: o.left,
                                top: o.top,
                                behavior: "smooth"
                            });
                        } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                    };
                }
                function r2(t, e) {
                    this.scrollLeft = t, this.scrollTop = e;
                }
                function a2(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                    if ("object" == typeof t && "smooth" === t.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
                }
                function c2(t, e) {
                    return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0;
                }
                function h2(e, i) {
                    var s = t13.getComputedStyle(e, null)["overflow" + i];
                    return "auto" === s || "scroll" === s;
                }
                function d2(t) {
                    var e = c2(t, "Y") && h2(t, "Y"), i = c2(t, "X") && h2(t, "X");
                    return e || i;
                }
                function u2(t) {
                    for(; t !== e10.body && !1 === d2(t);)t = t.parentNode || t.host;
                    return t;
                }
                function f(e) {
                    var i, s, n, l, r = (o2() - e.startTime) / 468;
                    l = r = r > 1 ? 1 : r, i = 0.5 * (1 - Math.cos(Math.PI * l)), s = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, s, n), s === e.x && n === e.y || t13.requestAnimationFrame(f.bind(t13, e));
                }
                function p(i, s, l) {
                    var a, c, h, d, u = o2();
                    i === e10.body ? (a = t13, c = t13.scrollX || t13.pageXOffset, h = t13.scrollY || t13.pageYOffset, d = n.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, d = r2), f({
                        scrollable: a,
                        method: d,
                        startTime: u,
                        startX: c,
                        startY: h,
                        x: s,
                        y: l
                    });
                }
            }
        };
    }), x1 = (S1.polyfill, function(e11) {
        l1(n2, e11);
        var s4 = d1(n2);
        function n2() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t1(this, n2), (e = s4.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", e.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = S1, window.smoothscrollPolyfill.polyfill()), e;
        }
        return i1(n2, [
            {
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), u1(r1(n2.prototype), "init", this).call(this);
                }
            },
            {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    u1(r1(n2.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                        t.detectElements();
                    }), this.hasScrollTicking = !0));
                }
            },
            {
                key: "addDirection",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
                }
            },
            {
                key: "addSpeed",
                value: function() {
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0;
                }
            },
            {
                key: "resize",
                value: function() {
                    Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements());
                }
            },
            {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(e, i) {
                        e.getBoundingClientRect();
                        var s, n, o, l = e.dataset[t.name + "Class"] || t.class, r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i, a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, c = e.dataset[t.name + "Repeat"], h = e.dataset[t.name + "Call"], d = e.dataset[t.name + "Target"], u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                        s = u.top + t.instance.scroll.y, n = u.left + t.instance.scroll.x;
                        var f = s + o.offsetHeight, p = n + o.offsetWidth;
                        c = "false" != c && (null != c || t.repeat);
                        var m = t.getRelativeOffset(a), v = {
                            el: e,
                            targetEl: o,
                            id: r,
                            class: l,
                            top: s += m[0],
                            bottom: f -= m[1],
                            left: n,
                            right: p,
                            offset: a,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: h
                        };
                        t.els[r] = v, e.classList.contains(l) && t.setInView(t.els[r], r);
                    });
                }
            },
            {
                key: "updateElements",
                value: function() {
                    var t = this;
                    Object.entries(this.els).forEach(function(e) {
                        var i = f1(e, 2), s = i[0], n = i[1], o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y, l = o + n.targetEl.offsetHeight, r = t.getRelativeOffset(n.offset);
                        t.els[s].top = o + r[0], t.els[s].bottom = l - r[1];
                    }), this.hasScrollTicking = !1;
                }
            },
            {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [
                        0,
                        0
                    ];
                    if (t) for(var i = 0; i < t.length; i++)"string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                    return e;
                }
            },
            {
                key: "scrollTo",
                value: function(t14) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = parseInt(e.offset) || 0, s = !!e.callback && e.callback;
                    if ("string" == typeof t14) {
                        if ("top" === t14) t14 = this.html;
                        else if ("bottom" === t14) t14 = this.html.offsetHeight - window.innerHeight;
                        else if (!(t14 = document.querySelector(t14))) return;
                    } else if ("number" == typeof t14) t14 = parseInt(t14);
                    else if (!t14 || !t14.tagName) return void console.warn("`target` parameter is not valid");
                    i = "number" != typeof t14 ? t14.getBoundingClientRect().top + i + this.instance.scroll.y : t14 + i;
                    var n = function() {
                        return parseInt(window.pageYOffset) === parseInt(i);
                    };
                    if (s) {
                        if (n()) return void s();
                        var o = function t() {
                            n() && (window.removeEventListener("scroll", t), s());
                        };
                        window.addEventListener("scroll", o);
                    }
                    window.scrollTo({
                        top: i,
                        behavior: 0 === e.duration ? "auto" : "smooth"
                    });
                }
            },
            {
                key: "update",
                value: function() {
                    this.addElements(), this.detectElements();
                }
            },
            {
                key: "destroy",
                value: function() {
                    u1(r1(n2.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
                }
            }
        ]), n2;
    }(b1)), k1 = Object.getOwnPropertySymbols, T1 = Object.prototype.hasOwnProperty, E1 = Object.prototype.propertyIsEnumerable;
    function A1(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t);
    }
    var O1 = function() {
        try {
            if (!Object.assign) return !1;
            var t15 = new String("abc");
            if (t15[5] = "de", "5" === Object.getOwnPropertyNames(t15)[0]) return !1;
            for(var e = {}, i = 0; i < 10; i++)e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t];
            }).join("")) return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                s[t] = t;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("");
        } catch (t) {
            return !1;
        }
    }() ? Object.assign : function(t, e) {
        for(var i, s, n = A1(t), o = 1; o < arguments.length; o++){
            for(var l in i = Object(arguments[o]))T1.call(i, l) && (n[l] = i[l]);
            if (k1) {
                s = k1(i);
                for(var r = 0; r < s.length; r++)E1.call(i, s[r]) && (n[s[r]] = i[s[r]]);
            }
        }
        return n;
    };
    function D1() {}
    D1.prototype = {
        on: function(t, e, i) {
            var s = this.e || (this.e = {});
            return (s[t] || (s[t] = [])).push({
                fn: e,
                ctx: i
            }), this;
        },
        once: function(t, e, i) {
            var s = this;
            function n() {
                s.off(t, n), e.apply(i, arguments);
            }
            return n._ = e, this.on(t, n, i);
        },
        emit: function(t) {
            for(var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++)i[s].fn.apply(i[s].ctx, e);
            return this;
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}), s = i[t], n = [];
            if (s && e) for(var o = 0, l = s.length; o < l; o++)s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
            return n.length ? i[t] = n : delete i[t], this;
        }
    };
    var C1 = D1, L1 = w1(function(t17, e12) {
        (function() {
            (null !== e12 ? e12 : this).Lethargy = function() {
                function t18(t19, e13, i5, s) {
                    this.stability = null != t19 ? Math.abs(t19) : 8, this.sensitivity = null != e13 ? 1 + Math.abs(e13) : 100, this.tolerance = null != i5 ? 1 + Math.abs(i5) : 1.1, this.delay = null != s ? s : 150, this.lastUpDeltas = (function() {
                        var t, e, i;
                        for(i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)i.push(null);
                        return i;
                    }).call(this), this.lastDownDeltas = (function() {
                        var t, e, i;
                        for(i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)i.push(null);
                        return i;
                    }).call(this), this.deltasTimestamp = (function() {
                        var t, e, i;
                        for(i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)i.push(null);
                        return i;
                    }).call(this);
                }
                return t18.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1));
                }, t18.prototype.isInertia = function(t20) {
                    var e14, i, s, n, o, l, r;
                    return null === (e14 = -1 === t20 ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t20 : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e14[0] === e14[2 * this.stability - 1]) && (s = e14.slice(0, this.stability), i = e14.slice(this.stability, 2 * this.stability), r = s.reduce(function(t, e) {
                        return t + e;
                    }), o = i.reduce(function(t, e) {
                        return t + e;
                    }), l = r / s.length, n = o / i.length, Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t20);
                }, t18.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas;
                }, t18.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas;
                }, t18;
            }();
        }).call(g1);
    }), M = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    }, j = Object.prototype.toString, _ = Object.prototype.hasOwnProperty;
    function B(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    }
    var W = L1.Lethargy, H = "virtualscroll", R = V, P = 37, Y = 38, I = 39, z = 40, X = 32;
    function V(t21) {
        !function(t) {
            if (!t) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length) for(var i in t)_.call(t, i) && "function" == typeof t[i] && "[object Function]" == j.call(t[i]) && e.push(i);
            for(var s = 0; s < e.length; s++){
                var n = e[s];
                t[n] = B(t[n], t);
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t21 && t21.el && (this.el = t21.el, delete t21.el), this.options = O1({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t21), this.options.limitInertia && (this._lethargy = new W), this._emitter = new C1, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        });
    }
    function F(t, e, i) {
        return (1 - i) * t + i * e;
    }
    function q(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t), s = i.transform || i.webkitTransform || i.mozTransform, n = s.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e;
        }
    }
    function K(t) {
        for(var e = []; t && t !== document; t = t.parentNode)e.push(t);
        return e;
    }
    V.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(H, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        });
    }, V.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t);
        }
    }, V.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t);
        }
    }, V.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY;
    }, V.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event, s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = s.pageX, this.touchStartY = s.pageY, this._notify(t);
    }, V.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch(t.keyCode){
            case P:
            case Y:
                e.deltaY = this.options.keyStep;
                break;
            case I:
            case z:
                e.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                e.deltaY = i;
                break;
            case X:
                e.deltaY = -i;
                break;
            default:
                return;
        }
        this._notify(t);
    }, V.prototype._bind = function() {
        M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
    }, V.prototype._unbind = function() {
        M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
    }, V.prototype.on = function(t, e) {
        this._emitter.on(H, t, e);
        var i = this._emitter.e;
        i && i[H] && 1 === i[H].length && this._bind();
    }, V.prototype.off = function(t, e) {
        this._emitter.off(H, t, e);
        var i = this._emitter.e;
        (!i[H] || i[H].length <= 0) && this._unbind();
    }, V.prototype.reset = function() {
        var t = this._event;
        t.x = 0, t.y = 0;
    }, V.prototype.destroy = function() {
        this._emitter.off(), this._unbind();
    };
    var N = "function" == typeof Float32Array;
    function U(t, e) {
        return 1 - 3 * e + 3 * t;
    }
    function $(t, e) {
        return 3 * e - 6 * t;
    }
    function G(t) {
        return 3 * t;
    }
    function J(t, e, i) {
        return ((U(e, i) * t + $(e, i)) * t + G(e)) * t;
    }
    function Q(t, e, i) {
        return 3 * U(e, i) * t * t + 2 * $(e, i) * t + G(e);
    }
    function Z(t) {
        return t;
    }
    var tt = function(t22, e15, i6, s5) {
        if (!(0 <= t22 && t22 <= 1 && 0 <= i6 && i6 <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        if (t22 === e15 && i6 === s5) return Z;
        for(var n3 = N ? new Float32Array(11) : new Array(11), o4 = 0; o4 < 11; ++o4)n3[o4] = J(0.1 * o4, t22, i6);
        function l2(e16) {
            for(var s6 = 0, o5 = 1; 10 !== o5 && n3[o5] <= e16; ++o5)s6 += 0.1;
            --o5;
            var l3 = s6 + 0.1 * ((e16 - n3[o5]) / (n3[o5 + 1] - n3[o5])), r3 = Q(l3, t22, i6);
            return r3 >= 0.001 ? function(t, e, i, s) {
                for(var n = 0; n < 4; ++n){
                    var o = Q(e, i, s);
                    if (0 === o) return e;
                    e -= (J(e, i, s) - t) / o;
                }
                return e;
            }(e16, l3, t22, i6) : 0 === r3 ? l3 : function(t, e, i, s, n) {
                var o, l, r = 0;
                do (o = J(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l;
                while (Math.abs(o) > 0.0000001 && ++r < 10)
                return l;
            }(e16, s6, s6 + 0.1, t22, i6);
        }
        return function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : J(l2(t), e15, s5);
        };
    }, et = 38, it = 40, st = 32, nt = 9, ot = 33, lt = 34, rt = 36, at = 35, ct = function(e17) {
        l1(n4, e17);
        var s7 = d1(n4);
        function n4() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t1(this, n4), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (e = s7.call(this, i)).inertia && (e.lerp = 0.1 * e.inertia), e.isScrolling = !1, e.isDraggingScrollbar = !1, e.isTicking = !1, e.hasScrollTicking = !1, e.parallaxElements = {}, e.stop = !1, e.scrollbarContainer = i.scrollbarContainer, e.checkKey = e.checkKey.bind(c1(e)), window.addEventListener("keydown", e.checkKey, !1), e;
        }
        return i1(n4, [
            {
                key: "init",
                value: function() {
                    var t = this;
                    this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o1({
                        delta: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        },
                        scroll: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        }
                    }, this.instance), this.vs = new R({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0
                    }), this.vs.on(function(e) {
                        t.stop || t.isDraggingScrollbar || requestAnimationFrame(function() {
                            t.updateDelta(e), t.isScrolling || t.startScrolling();
                        });
                    }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), u1(r1(n4.prototype), "init", this).call(this);
                }
            },
            {
                key: "setScrollLimit",
                value: function() {
                    if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                        for(var t = 0, e = this.el.children, i = 0; i < e.length; i++)t += e[i].offsetWidth;
                        this.instance.limit.x = t - this.windowWidth;
                    }
                }
            },
            {
                key: "startScrolling",
                value: function() {
                    this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
                }
            },
            {
                key: "stopScrolling",
                value: function() {
                    cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass);
                }
            },
            {
                key: "checkKey",
                value: function(t) {
                    var e = this;
                    if (this.stop) t.keyCode == nt && requestAnimationFrame(function() {
                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0;
                    });
                    else {
                        switch(t.keyCode){
                            case nt:
                                requestAnimationFrame(function() {
                                    e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                        offset: -window.innerHeight / 2
                                    });
                                });
                                break;
                            case et:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                break;
                            case it:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                break;
                            case ot:
                                this.instance.delta[this.directionAxis] -= window.innerHeight;
                                break;
                            case lt:
                                this.instance.delta[this.directionAxis] += window.innerHeight;
                                break;
                            case rt:
                                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                break;
                            case at:
                                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                break;
                            case st:
                                this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                break;
                            default:
                                return;
                        }
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
                    }
                }
            },
            {
                key: "isActiveElementScrollSensitive",
                value: function() {
                    return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement);
                }
            },
            {
                key: "checkScroll",
                value: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function() {
                            return t.checkScroll();
                        }), this.hasScrollTicking = !0), this.updateScroll();
                        var i7 = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]), s8 = Date.now() - this.startScrollTs;
                        if (!this.animatingScroll && s8 > 100 && (i7 < 0.5 && 0 != this.instance.delta[this.directionAxis] || i7 < 0.5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach(function(i) {
                            var s = f1(i, 2), n = (s[0], s[1]);
                            n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]), n.inView || (n.inView = !0, n.el.style.opacity = 1, n.el.style.pointerEvents = "all", n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1, n.el.style.opacity = 0, n.el.style.pointerEvents = "none", n.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(n.el, 0, 0));
                        }), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                            var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                            "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o);
                        }
                        u1(r1(n4.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1;
                    }
                }
            },
            {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    }, this.update();
                }
            },
            {
                key: "updateDelta",
                value: function(t) {
                    var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                    e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
                }
            },
            {
                key: "updateScroll",
                value: function(t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = F(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                }
            },
            {
                key: "addDirection",
                value: function() {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left");
                }
            },
            {
                key: "addSpeed",
                value: function() {
                    this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0;
                }
            },
            {
                key: "initScrollBar",
                value: function() {
                    if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                    this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    };
                }
            },
            {
                key: "reinitScrollBar",
                value: function() {
                    if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                    this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    };
                }
            },
            {
                key: "destroyScrollBar",
                value: function() {
                    this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove();
                }
            },
            {
                key: "getScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
                }
            },
            {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
                }
            },
            {
                key: "moveScrollBar",
                value: function(t) {
                    var e = this;
                    this.isDraggingScrollbar && requestAnimationFrame(function() {
                        var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100, s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                        s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                    });
                }
            },
            {
                key: "addElements",
                value: function() {
                    var t23 = this;
                    this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function(e18, i) {
                        var s, n, o, l = K(e18), r = Object.entries(t23.sections).map(function(t) {
                            var e = f1(t, 2);
                            e[0];
                            return e[1];
                        }).find(function(t) {
                            return l.includes(t.el);
                        }), a = e18.dataset[t23.name + "Class"] || t23.class, c = "string" == typeof e18.dataset[t23.name + "Id"] ? e18.dataset[t23.name + "Id"] : "el" + i, h = e18.dataset[t23.name + "Repeat"], d = e18.dataset[t23.name + "Call"], u = e18.dataset[t23.name + "Position"], p = e18.dataset[t23.name + "Delay"], m = e18.dataset[t23.name + "Direction"], v = "string" == typeof e18.dataset[t23.name + "Sticky"], y = !!e18.dataset[t23.name + "Speed"] && parseFloat(e18.dataset[t23.name + "Speed"]) / 10, b = "string" == typeof e18.dataset[t23.name + "Offset"] ? e18.dataset[t23.name + "Offset"].split(",") : t23.offset, g = e18.dataset[t23.name + "Target"], w = (o = void 0 !== g ? document.querySelector("".concat(g)) : e18).getBoundingClientRect();
                        null === r || r.inView ? (s = w.top + t23.instance.scroll.y - q(o).y, n = w.left + t23.instance.scroll.x - q(o).x) : (s = w.top - q(r.el).y - q(o).y, n = w.left - q(r.el).x - q(o).x);
                        var S = s + o.offsetHeight, x = n + o.offsetWidth, k = {
                            x: (x - n) / 2 + n,
                            y: (S - s) / 2 + s
                        };
                        if (v) {
                            var T = e18.getBoundingClientRect(), E = T.top, A = T.left, O = {
                                x: A - n,
                                y: E - s
                            };
                            s += window.innerHeight, n += window.innerWidth, S = E + o.offsetHeight - e18.offsetHeight - O[t23.directionAxis], k = {
                                x: ((x = A + o.offsetWidth - e18.offsetWidth - O[t23.directionAxis]) - n) / 2 + n,
                                y: (S - s) / 2 + s
                            };
                        }
                        h = "false" != h && (null != h || t23.repeat);
                        var D = [
                            0,
                            0
                        ];
                        if (b) {
                            if ("horizontal" === t23.direction) {
                                for(var C = 0; C < b.length; C++)"string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t23.windowWidth / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                n += D[0], x -= D[1];
                            } else {
                                for(C = 0; C < b.length; C++)"string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t23.windowHeight / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                s += D[0], S -= D[1];
                            }
                        }
                        var L = {
                            el: e18,
                            id: c,
                            class: a,
                            section: r,
                            top: s,
                            middle: k,
                            bottom: S,
                            left: n,
                            right: x,
                            offset: b,
                            progress: 0,
                            repeat: h,
                            inView: !1,
                            call: d,
                            speed: y,
                            delay: p,
                            position: u,
                            target: o,
                            direction: m,
                            sticky: v
                        };
                        t23.els[c] = L, e18.classList.contains(a) && t23.setInView(t23.els[c], c), (!1 !== y || v) && (t23.parallaxElements[c] = L);
                    });
                }
            },
            {
                key: "addSections",
                value: function() {
                    var t = this;
                    this.sections = {};
                    var e19 = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === e19.length && (e19 = [
                        this.el
                    ]), e19.forEach(function(e, i) {
                        var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i, n = e.getBoundingClientRect(), o = {
                            x: n.left - 1.5 * window.innerWidth - q(e).x,
                            y: n.top - 1.5 * window.innerHeight - q(e).y
                        }, l = {
                            x: o.x + n.width + 2 * window.innerWidth,
                            y: o.y + n.height + 2 * window.innerHeight
                        }, r = "string" == typeof e.dataset[t.name + "Persistent"];
                        e.setAttribute("data-scroll-section-id", s);
                        var a = {
                            el: e,
                            offset: o,
                            limit: l,
                            inView: !1,
                            persistent: r,
                            id: s
                        };
                        t.sections[s] = a;
                    });
                }
            },
            {
                key: "transform",
                value: function(t, e, i, s) {
                    var n;
                    if (s) {
                        var o = q(t), l = F(o.x, e, s), r = F(o.y, i, s);
                        n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)");
                    } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                    t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n;
                }
            },
            {
                key: "transformElements",
                value: function(t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = this.instance.scroll.x + this.windowWidth, n = this.instance.scroll.y + this.windowHeight, o = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y
                    };
                    Object.entries(this.parallaxElements).forEach(function(l) {
                        var r = f1(l, 2), a = (r[0], r[1]), c = !1;
                        if (t && (c = 0), a.inView || i) switch(a.position){
                            case "top":
                                c = e.instance.scroll[e.directionAxis] * -a.speed;
                                break;
                            case "elementTop":
                                c = (n - a.top) * -a.speed;
                                break;
                            case "bottom":
                                c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                                break;
                            case "left":
                                c = e.instance.scroll[e.directionAxis] * -a.speed;
                                break;
                            case "elementLeft":
                                c = (s - a.left) * -a.speed;
                                break;
                            case "right":
                                c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                                break;
                            default:
                                c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed;
                        }
                        a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight), !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay));
                    });
                }
            },
            {
                key: "scrollTo",
                value: function(t24) {
                    var e20 = this, i9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = parseInt(i9.offset) || 0, n = isNaN(parseInt(i9.duration)) ? 1000 : parseInt(i9.duration), o = i9.easing || [
                        0.25,
                        0,
                        0.35,
                        1
                    ], l = !!i9.disableLerp, r = !!i9.callback && i9.callback;
                    if (o = tt.apply(void 0, p1(o)), "string" == typeof t24) {
                        if ("top" === t24) t24 = 0;
                        else if ("bottom" === t24) t24 = this.instance.limit.y;
                        else if ("left" === t24) t24 = 0;
                        else if ("right" === t24) t24 = this.instance.limit.x;
                        else if (!(t24 = document.querySelector(t24))) return;
                    } else if ("number" == typeof t24) t24 = parseInt(t24);
                    else if (!t24 || !t24.tagName) return void console.warn("`target` parameter is not valid");
                    if ("number" != typeof t24) {
                        var a = K(t24).includes(this.el);
                        if (!a) return;
                        var c = t24.getBoundingClientRect(), h = c.top, d = c.left, u = K(t24), m = u.find(function(t25) {
                            return Object.entries(e20.sections).map(function(t) {
                                var e = f1(t, 2);
                                e[0];
                                return e[1];
                            }).find(function(e) {
                                return e.el == t25;
                            });
                        }), v = 0;
                        v = m ? q(m)[this.directionAxis] : -this.instance.scroll[this.directionAxis], s = "horizontal" === this.direction ? d + s - v : h + s - v;
                    } else s = t24 + s;
                    var y = parseFloat(this.instance.delta[this.directionAxis]), b = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])), g = b - y, w = function(t) {
                        l ? "horizontal" === e20.direction ? e20.setScroll(y + g * t, e20.instance.delta.y) : e20.setScroll(e20.instance.delta.x, y + g * t) : e20.instance.delta[e20.directionAxis] = y + g * t;
                    };
                    this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                    var S = Date.now(), x = function t() {
                        var i = (Date.now() - S) / n;
                        i > 1 ? (w(1), e20.animatingScroll = !1, 0 == n && e20.update(), r && r()) : (e20.scrollToRaf = requestAnimationFrame(t), w(o(i)));
                    };
                    x();
                }
            },
            {
                key: "update",
                value: function() {
                    this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
                }
            },
            {
                key: "startScroll",
                value: function() {
                    this.stop = !1;
                }
            },
            {
                key: "stopScroll",
                value: function() {
                    this.stop = !0;
                }
            },
            {
                key: "setScroll",
                value: function(t, e) {
                    this.instance = o1(o1({}, this.instance), {}, {
                        scroll: {
                            x: t,
                            y: e
                        },
                        delta: {
                            x: t,
                            y: e
                        },
                        speed: 0
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    u1(r1(n4.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1);
                }
            }
        ]), n4;
    }(b1);
    return function() {
        function e21() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t1(this, e21), this.options = i, Object.assign(this, y1, i), this.smartphone = y1.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y1.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init();
        }
        return i1(e21, [
            {
                key: "init",
                value: function() {
                    if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ct(this.options) : this.scroll = new x1(this.options), this.scroll.init(), window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length), e = document.getElementById(t);
                        e && this.scroll.scrollTo(e);
                    }
                }
            },
            {
                key: "update",
                value: function() {
                    this.scroll.update();
                }
            },
            {
                key: "start",
                value: function() {
                    this.scroll.startScroll();
                }
            },
            {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll();
                }
            },
            {
                key: "scrollTo",
                value: function(t, e) {
                    this.scroll.scrollTo(t, e);
                }
            },
            {
                key: "setScroll",
                value: function(t, e) {
                    this.scroll.setScroll(t, e);
                }
            },
            {
                key: "on",
                value: function(t, e) {
                    this.scroll.setEvents(t, e);
                }
            },
            {
                key: "off",
                value: function(t, e) {
                    this.scroll.unsetEvents(t, e);
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.scroll.destroy();
                }
            }
        ]), e21;
    }();
});

},{}]},["4ixHu","h1r2N"], "h1r2N", "parcelRequiredc16")

//# sourceMappingURL=index.ff85684f.js.map
