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
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _button = require("./button");
var _flex = require("./flex");
var _icon = require("./icon");
var _input = require("./input");
var _typography = require("./typography");
customElements.define("wui-button", (0, _button.Button));
customElements.define("wui-flex", (0, _flex.Flex));
customElements.define("wui-input", (0, _input.Input));
customElements.define("wui-icon", (0, _icon.Icon));
customElements.define("wui-h1", (0, _typography.H1));
customElements.define("wui-h2", (0, _typography.H2));
customElements.define("wui-h3", (0, _typography.H3));
customElements.define("wui-h4", (0, _typography.H4));
customElements.define("wui-h5", (0, _typography.H5));
customElements.define("wui-paragraph", (0, _typography.Paragraph));

},{"./button":"8vF2p","./flex":"hYruH","./icon":"ldcbf","./input":"fCNBe","./typography":"6qJqP"}],"8vF2p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("./button");
parcelHelpers.exportAll(_button, exports);

},{"./button":"fRGkH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRGkH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _buttonHtml = require("bundle-text:./button.html");
var _buttonHtmlDefault = parcelHelpers.interopDefault(_buttonHtml);
var _core = require("../core");
const template = document.createElement("template");
template.innerHTML = (0, _buttonHtmlDefault.default);
class Button extends (0, _core.WUIBase) {
    constructor(){
        super(template);
        this.button = this.root.querySelector("button");
        this.listeners = [];
        this.hasIcon = false;
    }
    static get observedAttributes() {
        return [
            "label",
            "disabled",
            "variant"
        ];
    }
    get label() {
        return this.getAttribute("label") || "Default label";
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    get disabled() {
        return this.getAttribute("disabled") === "";
    }
    get variant() {
        return this.getAttribute("variant")?.toLowerCase();
    }
    connectedCallback() {
        const slots = this.root.querySelectorAll("slot");
        this.listeners = [
            ...slots
        ].map((slot)=>{
            const listener = (evt)=>{
                const nodes = slot.assignedNodes();
                this.hasIcon = nodes.length > 0;
                this.update();
            };
            slot.addEventListener("slotchange", listener);
            return ()=>slot.removeEventListener("slotchange", listener);
        });
    }
    disconnectedCallback() {
        this.listeners.forEach((removeFunc)=>removeFunc());
    }
    update() {
        if (this.variant) {
            this.button.setAttribute("variant", this.variant);
            this.button.style.setProperty("--button-background-h", `var(--${this.variant}-color-h)`);
            this.button.style.setProperty("--button-background-s", `var(--${this.variant}-color-s)`);
            this.button.style.setProperty("--button-background-l", `var(--${this.variant}-color-l)`);
        }
        this.button.querySelector(".label").innerHTML = this.label;
        if (this.disabled) this.button.setAttribute("disabled", "");
        else this.button.removeAttribute("disabled");
        this.button.style.setProperty("--button-horizontal-padding", this.hasIcon ? "var(--button-horizontal-padding-with-icon)" : "var(--button-horizontal-padding-without-icon)");
    }
}

},{"bundle-text:./button.html":"1hvsG","../core":"aNgPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hvsG":[function(require,module,exports) {
module.exports = "<style>button {\n  --greyscale-percentage: 100%;\n  --button-horizontal-padding-with-icon: 1.25rem;\n  --button-horizontal-padding-without-icon: 2.5rem;\n  --button-horizontal-padding: var(--button-horizontal-padding-without-icon);\n  --button-background-h: 0;\n  --button-background-s: 0%;\n  --button-background-l: 100%;\n  --button-background-color: hsl(var(--button-background-h), var(--button-background-s), var(--button-background-l));\n  --button-hover-background-l: calc(var(--button-background-l)  - var(--hover-darken));\n  --button-hover-background-color: hsl(var(--button-background-h), var(--button-background-s), var(--button-hover-background-l));\n  --button-hover-text-color-l: calc((var(--button-hover-background-l)  - var(--contrast-threshold)) * -100);\n  --button-hover-text-color: hsl(0, 0%, var(--button-hover-text-color-l));\n  --button-active-background-l: calc(var(--button-background-l)  - var(--active-darken));\n  --button-active-background-color: hsl(var(--button-background-h), var(--button-background-s), var(--button-active-background-l));\n  --button-active-text-color-l: calc((var(--button-active-background-l)  - var(--contrast-threshold)) * -100);\n  --button-active-text-color: hsl(0, 0%, var(--button-active-text-color-l));\n  --button-border-color: var(--text-color);\n  --button-text-color-l: calc((var(--button-background-l)  - var(--contrast-threshold)) * -100);\n  --button-text-color: hsl(0, 0%, var(--button-text-color-l));\n  --button-border-width: var(--border-width);\n  --icon-color: var(--button-text-color);\n  transition: background-color ease-in-out var(--transition-base), border-color ease-in-out var(--transition-base);\n  padding: .25rem var(--button-horizontal-padding);\n  height: 2.5rem;\n  margin: var(--component-margin);\n  box-sizing: border-box;\n  background: var(--button-background-color);\n  border: none;\n  border-width: var(--button-border-width);\n  border-style: solid;\n  border-color: var(--button-border-color);\n  color: var(--button-text-color);\n  font: var(--theme-font);\n  border-radius: 1.2rem;\n  outline: none;\n  align-items: center;\n  line-height: 1rem;\n  display: flex;\n  overflow: hidden;\n}\n\nbutton:is([variant=\"primary\"], [variant=\"secondary\"], [variant=\"neutral\"], [variant=\"success\"], [variant=\"warning\"], [variant=\"error\"]) {\n  --button-border-color: var(--button-background-color);\n}\n\nbutton:enabled:is([variant=\"primary\"], [variant=\"secondary\"], [variant=\"neutral\"], [variant=\"success\"], [variant=\"warning\"], [variant=\"error\"]):hover {\n  --button-border-color: var(--button-hover-background-color);\n}\n\nbutton:enabled:is([variant=\"primary\"], [variant=\"secondary\"], [variant=\"neutral\"], [variant=\"success\"], [variant=\"warning\"], [variant=\"error\"]):active {\n  --button-border-color: var(--button-active-background-color);\n}\n\nbutton:hover:enabled {\n  background-color: var(--button-hover-background-color);\n  color: var(--button-hover-text-color);\n}\n\nbutton:active:enabled {\n  background-color: var(--button-active-background-color);\n}\n\nbutton:focus-visible:enabled {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\nbutton:disabled {\n  opacity: var(--disabled-background-opacity);\n  color: hsla(0, 0%, var(--button-text-color-l), var(--disabled-text-opacity));\n  cursor: not-allowed;\n  pointer-events: visible;\n}\n\n::slotted(*) {\n  margin-right: .25rem;\n  font-size: 18px;\n}\n\n.label {\n  text-transform: uppercase;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  position: relative;\n}\n\n</style>\n<button>\n  <slot name=\"left-icon\"></slot>\n  <span class=\"label\">Default label</span>\n  <slot name=\"right-icon\"></slot>\n</button>\n<script src=\"/button.1171f859.js\"></script>";

},{}],"aNgPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _wuiBase = require("./wuiBase");
parcelHelpers.exportAll(_wuiBase, exports);

},{"./wuiBase":"9OZvT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OZvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WUIBase", ()=>WUIBase);
class WUIBase extends HTMLElement {
    constructor(template){
        super();
        const shadowRoot = this.attachShadow({
            mode: "open"
        });
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = shadowRoot;
    }
    attributeChangedCallback() {
        this.update();
    }
    update() {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"hYruH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flex = require("./flex");
parcelHelpers.exportAll(_flex, exports);

},{"./flex":"cMU0F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMU0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Flex", ()=>Flex);
var _flexHtml = require("bundle-text:./flex.html");
var _flexHtmlDefault = parcelHelpers.interopDefault(_flexHtml);
var _core = require("../core");
const template = document.createElement("template");
template.innerHTML = (0, _flexHtmlDefault.default);
class Flex extends (0, _core.WUIBase) {
    constructor(){
        super(template);
        this.rootNode = this.root.querySelector("div");
        this.update();
    }
    static get observedAttributes() {
        return [
            "class",
            "raised",
            "inline",
            "direction",
            "wrap"
        ];
    }
    get inline() {
        return this.getAttribute("inline") === "";
    }
    get raised() {
        return this.getAttribute("raised") === "";
    }
    get classes() {
        return this.getAttribute("class")?.split(",") || [];
    }
    get direction() {
        return this.getAttribute("direction") || "row";
    }
    get wrap() {
        return this.getAttribute("wrap") || "nowrap";
    }
    update() {
        this.rootNode.style.setProperty("--flex-direction", this.direction);
        this.rootNode.style.setProperty("--flex-wrap", this.wrap);
        if (this.raised) this.rootNode.classList.add("raised");
        else this.rootNode.classList.remove("raised");
        if (this.inline) {
            this.rootNode.classList.add("inline-flex");
            this.rootNode.classList.remove("flex");
        } else {
            this.rootNode.classList.remove("inline-flex");
            this.rootNode.classList.add("flex");
        }
        this.classes.forEach((className)=>this.rootNode.classList.add(className));
    }
}

},{"bundle-text:./flex.html":"7l4ul","../core":"aNgPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7l4ul":[function(require,module,exports) {
module.exports = "<style>.flex {\n  flex-direction: var(--flex-direction);\n  flex-wrap: var(--flex-wrap);\n  display: flex;\n}\n\n.inline-flex {\n  flex-direction: var(--flex-direction);\n  flex-wrap: var(--flex-wrap);\n  display: inline-flex;\n}\n\n.raised {\n  box-shadow: 0 0 .25rem hsla(0, 0%, 0%, var(--small-shadow-opacity));\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n</style>\n<div><slot></slot></div>\n<script src=\"/flex.9792ca5d.js\"></script>";

},{}],"ldcbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _icon = require("./icon");
parcelHelpers.exportAll(_icon, exports);

},{"./icon":"5LcF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LcF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Icon", ()=>Icon);
var _iconHtml = require("bundle-text:./icon.html");
var _iconHtmlDefault = parcelHelpers.interopDefault(_iconHtml);
var _core = require("../core");
const template = document.createElement("template");
template.innerHTML = (0, _iconHtmlDefault.default);
class Icon extends (0, _core.WUIBase) {
    constructor(){
        super(template);
        this.iconContainer = this.root.querySelector("span");
        const inheritedColor = getComputedStyle(this).getPropertyValue("--icon-color");
        this.iconContainer.style.setProperty("--icon-color", inheritedColor);
        const inheritedFontSize = getComputedStyle(this).fontSize;
        this.iconContainer.style.setProperty("--font-size-base", inheritedFontSize);
    }
    static get observedAttributes() {
        return [
            "grayscale",
            "greyscale"
        ];
    }
    get greyscale() {
        return this.getAttribute("grayscale") === "" || this.getAttribute("greyscale") === "";
    }
    attributeChangedCallback() {
        this.iconContainer.style.setProperty("--grayscale-percentage", this.greyscale ? "100%" : "0%");
    }
}

},{"bundle-text:./icon.html":"CKt1E","../core":"aNgPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CKt1E":[function(require,module,exports) {
module.exports = "<style>.aligner {\n  --effective-icon-color: var(--icon-color, var(--text-color));\n  width: 1.5em;\n  height: 1.5em;\n  min-width: 1.5em;\n  min-height: 1.5em;\n  color: var(--effective-icon-color);\n  -webkit-user-select: none;\n  user-select: none;\n  justify-content: center;\n  align-items: center;\n  display: inline-flex;\n}\n\n.content {\n  filter: grayscale(var(--grayscale-percentage));\n  pointer-events: none;\n  display: inline-block;\n}\n\n</style>\n\n<div class=\"aligner\">\n  <span class=\"content\"><slot>⁉️</slot> </span>\n</div>\n<script src=\"/icon.c2c4e30c.js\"></script>";

},{}],"fCNBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _input = require("./input");
parcelHelpers.exportAll(_input, exports);

},{"./input":"7aWQy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7aWQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _inputHtml = require("bundle-text:./input.html");
var _inputHtmlDefault = parcelHelpers.interopDefault(_inputHtml);
var _core = require("../core");
const template = document.createElement("template");
template.innerHTML = (0, _inputHtmlDefault.default);
const variants = [
    "success",
    "warning",
    "error"
];
class Input extends (0, _core.WUIBase) {
    constructor(){
        super(template);
        this.inputNode = this.root.querySelector("input");
        this.labelNode = this.root.querySelector("label");
        this.update();
    }
    static get observedAttributes() {
        return [
            "class",
            "label",
            "name",
            "disabled",
            "value",
            "type"
        ];
    }
    get label() {
        return this.getAttribute("label");
    }
    get name() {
        return this.getAttribute("name");
    }
    get disabled() {
        return this.getAttribute("disabled") === "";
    }
    get placeholder() {
        return this.getAttribute("placeholder");
    }
    get classes() {
        return this.getAttribute("class")?.split(",") || [];
    }
    get value() {
        return this.getAttribute("value") || "";
    }
    get type() {
        return this.getAttribute("type") || "text";
    }
    get variant() {
        return this.getAttribute("variant") || "default";
    }
    connectedCallback() {
        if (this.value) this.inputNode.setAttribute("value", this.value);
    }
    update() {
        this.classes.forEach((className)=>this.inputNode.classList.add(className));
        this.labelNode.textContent = this.label;
        if (this.name) {
            this.labelNode.setAttribute("for", this.name);
            this.inputNode.setAttribute("name", this.name);
        }
        if (this.placeholder) this.inputNode.setAttribute("placeholder", this.placeholder);
        else this.inputNode.removeAttribute("placeholder");
        if (this.disabled) this.inputNode.setAttribute("disabled", "");
        else this.inputNode.removeAttribute("disabled");
        this.inputNode.setAttribute("type", this.type);
        if (variants.includes(this.variant)) this.inputNode.setAttribute("variant", this.variant);
        else this.inputNode.removeAttribute("variant");
    }
}

},{"bundle-text:./input.html":"1TuXI","../core":"aNgPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TuXI":[function(require,module,exports) {
module.exports = "<style>input {\n  --input-inactive-border-color: var(--grey-shade-4);\n  --input-placeholder-color: var(--grey-shade-4);\n  --input-focused-border-color: var(--primary-color);\n  transition: background-color ease-in-out var(--transition-base), border-color ease-in-out var(--transition-base);\n}\n\nlabel {\n  transition: color ease-in-out var(--transition-base);\n}\n\ndiv {\n  margin: var(--component-margin);\n  flex-direction: column;\n  display: inline-flex;\n}\n\ninput {\n  border-radius: var(--border-radius);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  border-color: var(--input-inactive-border-color);\n  border-style: solid;\n  padding: .5rem 1rem;\n}\n\ninput:enabled:focus, input:enabled:focus-visible {\n  outline-color: var(--input-focused-border-color);\n  outline-offset: 0;\n}\n\ninput::placeholder {\n  color: var(--input-placeholder-color);\n}\n\ninput:disabled {\n  cursor: not-allowed;\n  background-color: var(--grey-shade-5);\n  color: var(--text-color-disabled);\n}\n\ninput:enabled:invalid {\n  border: var(--border-width) solid var(--warning-color);\n}\n\ninput[variant=\"error\"]:enabled {\n  border: var(--border-width) solid var(--error-color);\n}\n\ninput[variant=\"success\"]:enabled {\n  border: var(--border-width) solid var(--success-color);\n}\n\nlabel {\n  text-transform: uppercase;\n  margin-bottom: .5rem;\n}\n\nlabel:has( + input:disabled) {\n  color: var(--text-color-disabled);\n}\n\nlabel:has( + input:enabled:focus) {\n  color: var(--primary-color);\n}\n\nlabel:has( + input[variant=\"error\"]:enabled:not(:focus)) {\n  color: var(--error-color);\n}\n\nlabel:has( + input[variant=\"success\"]:enabled:not(:focus)) {\n  color: var(--success-color);\n}\n\nlabel:has( + input:invalid) {\n  color: var(--warning-color);\n}\n\n</style>\n<div>\n  <label> </label>\n  <input>\n</div>\n<script src=\"/input.0d46b316.js\"></script>";

},{}],"6qJqP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _headings = require("./headings");
parcelHelpers.exportAll(_headings, exports);
var _paragraph = require("./paragraph");
parcelHelpers.exportAll(_paragraph, exports);

},{"./headings":"cUwfW","./paragraph":"kCn33","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUwfW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "H1", ()=>H1);
parcelHelpers.export(exports, "H2", ()=>H2);
parcelHelpers.export(exports, "H3", ()=>H3);
parcelHelpers.export(exports, "H4", ()=>H4);
parcelHelpers.export(exports, "H5", ()=>H5);
var _typography = require("./typography");
class H1 extends (0, _typography.Typography) {
    constructor(){
        super("h1");
    }
}
class H2 extends (0, _typography.Typography) {
    constructor(){
        super("h2");
    }
}
class H3 extends (0, _typography.Typography) {
    constructor(){
        super("h3");
    }
}
class H4 extends (0, _typography.Typography) {
    constructor(){
        super("h4");
    }
}
class H5 extends (0, _typography.Typography) {
    constructor(){
        super("h5");
        this.tag.style.setProperty("text-transform", "uppercase");
    }
}

},{"./typography":"4drdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4drdp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Typography", ()=>Typography);
var _core = require("../core");
var _templates = require("./templates");
class Typography extends (0, _core.WUIBase) {
    constructor(tagName){
        super((0, _templates.templateMap)[tagName]);
        this.tag = this.root.querySelector(tagName);
    }
    static get observedAttributes() {
        return [
            "underline"
        ];
    }
    get underline() {
        return this.getAttribute("underline") === "";
    }
    update() {
        if (this.underline) {
            this.tag.style.setProperty("--border-width", "var(--border-width-underline)");
            this.tag.style.setProperty("--padding-bottom", "var(--border-width-underline)");
        } else this.tag.style.setProperty("--border-width", "0");
    }
}

},{"../core":"aNgPG","./templates":"3nncs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nncs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateMap", ()=>templateMap);
var _paragraphHtml = require("bundle-text:./paragraph.html");
var _paragraphHtmlDefault = parcelHelpers.interopDefault(_paragraphHtml);
var _range = require("../utils/range");
var _constants = require("./constants");
const templates = (0, _range.range)(1, 6).map((level)=>{
    const tagName = `h${level}`;
    const template = document.createElement("template");
    const fontSize = (0, _constants.typeSizes)[tagName] / 16;
    const margin = Math.max(0.5, fontSize * 0.3).toPrecision(3);
    template.innerHTML = `
    <style>
      ${tagName} {
          --border-width: 0;
          --bottom-padding: 0;
          font-size: ${fontSize}rem;
          margin-top: ${margin}rem;
          margin-bottom: ${margin}rem;
          border-bottom-style: solid;
          border-width: var(--border-width);
          border-color: var(--primary-color);
          padding-bottom: var(--padding-bottom);
          color: var(--text-color);
      }
    </style>
      <${tagName}><slot>Foo</slot></${tagName}>
    `;
    return [
        tagName,
        template
    ];
});
const headingMap = Object.fromEntries(templates);
const templateP = document.createElement("template");
templateP.innerHTML = (0, _paragraphHtmlDefault.default);
const templateMap = {
    ...headingMap,
    p: templateP
};

},{"bundle-text:./paragraph.html":"6BEZs","../utils/range":"Grjt2","./constants":"1ZdNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BEZs":[function(require,module,exports) {
module.exports = "<style>p {\n  color: var(--text-color);\n  font-size: 1rem;\n  line-height: 1.33rem;\n}\n\n</style>\n\n<p>\n  <slot></slot>\n</p>\n<script src=\"/paragraph.76651d76.js\"></script>";

},{}],"Grjt2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
const range = (from, to)=>{
    const n = Math.abs(to - from);
    return Array.apply(null, Array(n)).map(function(_, i) {
        return from + i;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZdNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "typeSizes", ()=>typeSizes);
const typeSizes = {
    h1: 50,
    h2: 38,
    h3: 28,
    h4: 21,
    h5: 12,
    p: 16,
    tooltip: 14,
    small: 12
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCn33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Paragraph", ()=>Paragraph);
var _typography = require("./typography");
class Paragraph extends (0, _typography.Typography) {
    constructor(){
        super("p");
    }
}

},{"./typography":"4drdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire7c42")

//# sourceMappingURL=index.b71e74eb.js.map
