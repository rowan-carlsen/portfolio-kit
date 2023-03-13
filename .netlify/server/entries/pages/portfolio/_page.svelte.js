import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.2 - 2021-10-18
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */
!function(u) {
  var f, l, a, x, M, I, k, r, m, F, i, g, z;
  function h() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  }
  function O(e2, n2, i2) {
    e2.addEventListener(n2, i2, false);
  }
  function R(e2, n2, i2) {
    e2.removeEventListener(n2, i2, false);
  }
  function o(e2) {
    return M + "[" + (e2 = "Host page: " + (n2 = e2), e2 = window.top !== window.self ? window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + n2 : "Nested host page: " + n2 : e2) + "]";
    var n2;
  }
  function t(e2) {
    return F[e2] ? F[e2].log : l;
  }
  function T(e2, n2) {
    s("log", e2, n2, t(e2));
  }
  function E(e2, n2) {
    s("info", e2, n2, t(e2));
  }
  function N(e2, n2) {
    s("warn", e2, n2, true);
  }
  function s(e2, n2, i2, t2) {
    true === t2 && "object" == typeof window.console && console[e2](o(n2), i2);
  }
  function e(n2) {
    function i2() {
      t2("Height"), t2("Width"), L(function() {
        A(y2), H(v2), l2("onResized", y2);
      }, y2, "init");
    }
    function e2() {
      var e3 = b2.substr(I).split(":"), n3 = e3[1] ? parseInt(e3[1], 10) : 0, i3 = F[e3[0]] && F[e3[0]].iframe, t3 = getComputedStyle(i3);
      return { iframe: i3, id: e3[0], height: n3 + function(e4) {
        if ("border-box" !== e4.boxSizing)
          return 0;
        var n4 = e4.paddingTop ? parseInt(e4.paddingTop, 10) : 0, e4 = e4.paddingBottom ? parseInt(e4.paddingBottom, 10) : 0;
        return n4 + e4;
      }(t3) + function(e4) {
        if ("border-box" !== e4.boxSizing)
          return 0;
        var n4 = e4.borderTopWidth ? parseInt(e4.borderTopWidth, 10) : 0, e4 = e4.borderBottomWidth ? parseInt(e4.borderBottomWidth, 10) : 0;
        return n4 + e4;
      }(t3), width: e3[2], type: e3[3] };
    }
    function t2(e3) {
      var n3 = Number(F[v2]["max" + e3]), i3 = Number(F[v2]["min" + e3]), t3 = e3.toLowerCase(), e3 = Number(y2[t3]);
      T(v2, "Checking " + t3 + " is in range " + i3 + "-" + n3), e3 < i3 && (e3 = i3, T(v2, "Set " + t3 + " to min value")), n3 < e3 && (e3 = n3, T(v2, "Set " + t3 + " to max value")), y2[t3] = "" + e3;
    }
    function o2() {
      function e3() {
        return t3.constructor === Array ? function() {
          var e5 = 0, n3 = false;
          for (T(v2, "Checking connection is from allowed list of origins: " + t3); e5 < t3.length; e5++)
            if (t3[e5] === i3) {
              n3 = true;
              break;
            }
          return n3;
        }() : (e4 = F[v2] && F[v2].remoteHost, T(v2, "Checking connection is from: " + e4), i3 === e4);
        var e4;
      }
      var i3 = n2.origin, t3 = F[v2] && F[v2].checkOrigin;
      if (t3 && "" + i3 != "null" && !e3())
        throw new Error("Unexpected message received from: " + i3 + " for " + y2.iframe.id + ". Message was: " + n2.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
      return 1;
    }
    function a2(e3) {
      return b2.substr(b2.indexOf(":") + x + e3);
    }
    function s2(i3, t3) {
      var e3, n3, o3;
      e3 = function() {
        var e4, n4;
        B("Send Page Info", "pageInfo:" + (e4 = document.body.getBoundingClientRect(), n4 = y2.iframe.getBoundingClientRect(), JSON.stringify({ iframeHeight: n4.height, iframeWidth: n4.width, clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), offsetTop: parseInt(n4.top - e4.top, 10), offsetLeft: parseInt(n4.left - e4.left, 10), scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, documentHeight: document.documentElement.clientHeight, documentWidth: document.documentElement.clientWidth, windowHeight: window.innerHeight, windowWidth: window.innerWidth })), i3, t3);
      }, n3 = 32, z[o3 = t3] || (z[o3] = setTimeout(function() {
        z[o3] = null, e3();
      }, n3));
    }
    function r2(e3) {
      e3 = e3.getBoundingClientRect();
      return S(v2), { x: Math.floor(Number(e3.left) + Number(k.x)), y: Math.floor(Number(e3.top) + Number(k.y)) };
    }
    function d2(e3) {
      var n3 = e3 ? r2(y2.iframe) : { x: 0, y: 0 }, i3 = { x: Number(y2.width) + n3.x, y: Number(y2.height) + n3.y };
      T(v2, "Reposition requested from iFrame (offset x:" + n3.x + " y:" + n3.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e3 ? "Offset" : "")](i3.x, i3.y) : N(v2, "Unable to scroll to requested position, window.parentIFrame not found") : (k = i3, c2(), T(v2, "--"));
    }
    function c2() {
      false !== l2("onScroll", k) ? H(v2) : j();
    }
    function u2(e3) {
      var n3, i3 = e3.split("#")[1] || "", e3 = decodeURIComponent(i3), t3 = document.getElementById(e3) || document.getElementsByName(e3)[0];
      t3 ? (n3 = r2(t3), T(v2, "Moving to in page link (#" + i3 + ") at x: " + n3.x + " y: " + n3.y), k = { x: n3.x, y: n3.y }, c2(), T(v2, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(i3) : T(v2, "In page link #" + i3 + " not found and window.parentIFrame not found") : T(v2, "In page link #" + i3 + " not found");
    }
    function f2(e3) {
      var n3, i3 = {};
      i3 = 0 === Number(y2.width) && 0 === Number(y2.height) ? { x: (n3 = a2(9).split(":"))[1], y: n3[0] } : { x: y2.width, y: y2.height }, l2(e3, { iframe: y2.iframe, screenX: Number(i3.x), screenY: Number(i3.y), type: y2.type });
    }
    function l2(e3, n3) {
      return W(v2, e3, n3);
    }
    function m2() {
      switch (F[v2] && F[v2].firstRun && F[v2] && (F[v2].firstRun = false), y2.type) {
        case "close":
          C(y2.iframe);
          break;
        case "message":
          n3 = a2(6), T(v2, "onMessage passed: {iframe: " + y2.iframe.id + ", message: " + n3 + "}"), l2("onMessage", { iframe: y2.iframe, message: JSON.parse(n3) }), T(v2, "--");
          break;
        case "mouseenter":
          f2("onMouseEnter");
          break;
        case "mouseleave":
          f2("onMouseLeave");
          break;
        case "autoResize":
          F[v2].autoResize = JSON.parse(a2(9));
          break;
        case "scrollTo":
          d2(false);
          break;
        case "scrollToOffset":
          d2(true);
          break;
        case "pageInfo":
          s2(F[v2] && F[v2].iframe, v2), r3 = v2, e3("Add ", O), F[r3] && (F[r3].stopPageInfo = o3);
          break;
        case "pageInfoStop":
          F[v2] && F[v2].stopPageInfo && (F[v2].stopPageInfo(), delete F[v2].stopPageInfo);
          break;
        case "inPageLink":
          u2(a2(9));
          break;
        case "reset":
          P(y2);
          break;
        case "init":
          i2(), l2("onInit", y2.iframe);
          break;
        default:
          0 === Number(y2.width) && 0 === Number(y2.height) ? N("Unsupported message received (" + y2.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : i2();
      }
      function e3(n4, i3) {
        function t3() {
          F[r3] ? s2(F[r3].iframe, r3) : o3();
        }
        ["scroll", "resize"].forEach(function(e4) {
          T(r3, n4 + e4 + " listener for sendPageInfo"), i3(window, e4, t3);
        });
      }
      function o3() {
        e3("Remove ", R);
      }
      var r3, n3;
    }
    var g2, h2, p2, w2, b2 = n2.data, y2 = {}, v2 = null;
    "[iFrameResizerChild]Ready" === b2 ? function() {
      for (var e3 in F)
        B("iFrame requested init", q(e3), F[e3].iframe, e3);
    }() : M === ("" + b2).substr(0, I) && b2.substr(I).split(":")[0] in F ? (y2 = e2(), v2 = y2.id, F[v2] && (F[v2].loaded = true), (w2 = y2.type in { true: 1, false: 1, undefined: 1 }) && T(v2, "Ignoring init message from meta parent page"), !w2 && (p2 = true, F[h2 = v2] || (p2 = false, N(y2.type + " No settings for " + h2 + ". Message was: " + b2)), p2) && (T(v2, "Received: " + b2), g2 = true, null === y2.iframe && (N(v2, "IFrame (" + y2.id + ") not found"), g2 = false), g2 && o2() && m2())) : E(v2, "Ignored: " + b2);
  }
  function W(e2, n2, i2) {
    var t2 = null, o2 = null;
    if (F[e2]) {
      if ("function" != typeof (t2 = F[e2][n2]))
        throw new TypeError(n2 + " on iFrame[" + e2 + "] is not a function");
      o2 = t2(i2);
    }
    return o2;
  }
  function p(e2) {
    e2 = e2.id;
    delete F[e2];
  }
  function C(e2) {
    var n2 = e2.id;
    if (false !== W(n2, "onClose", n2)) {
      T(n2, "Removing iFrame: " + n2);
      try {
        e2.parentNode && e2.parentNode.removeChild(e2);
      } catch (e3) {
        N(e3);
      }
      W(n2, "onClosed", n2), T(n2, "--"), p(e2);
    } else
      T(n2, "Close iframe cancelled by onClose event");
  }
  function S(e2) {
    null === k && T(e2, "Get page position: " + (k = { x: window.pageXOffset !== u ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== u ? window.pageYOffset : document.documentElement.scrollTop }).x + "," + k.y);
  }
  function H(e2) {
    null !== k && (window.scrollTo(k.x, k.y), T(e2, "Set page position: " + k.x + "," + k.y), j());
  }
  function j() {
    k = null;
  }
  function P(e2) {
    T(e2.id, "Size reset requested by " + ("init" === e2.type ? "host page" : "iFrame")), S(e2.id), L(function() {
      A(e2), B("reset", "reset", e2.iframe, e2.id);
    }, e2, "reset");
  }
  function A(o2) {
    function i2(e3) {
      function n2() {
        Object.keys(F).forEach(function(e4) {
          function n3(e5) {
            return "0px" === (F[i4] && F[i4].iframe.style[e5]);
          }
          var i4;
          F[i4 = e4] && null !== F[i4].iframe.offsetParent && (n3("height") || n3("width")) && B("Visibility change", "resize", F[i4].iframe, i4);
        });
      }
      function i3(e4) {
        T("window", "Mutation observed: " + e4[0].target + " " + e4[0].type), c(n2, 16);
      }
      var t2;
      a || "0" !== o2[e3] || (a = true, T(r2, "Hidden iFrame detected, creating visibility listener"), (t2 = h()) && function() {
        var e4 = document.querySelector("body");
        new t2(i3).observe(e4, { attributes: true, attributeOldValue: false, characterData: true, characterDataOldValue: false, childList: true, subtree: true });
      }());
    }
    function e2(e3) {
      var n2;
      n2 = e3, o2.id ? (o2.iframe.style[n2] = o2[n2] + "px", T(o2.id, "IFrame (" + r2 + ") " + n2 + " set to " + o2[n2] + "px")) : T("undefined", "messageData id not set"), i2(e3);
    }
    var r2 = o2.iframe.id;
    F[r2] && (F[r2].sizeHeight && e2("height"), F[r2].sizeWidth && e2("width"));
  }
  function L(e2, n2, i2) {
    i2 !== n2.type && r && !window.jasmine ? (T(n2.id, "Requesting animation frame"), r(e2)) : e2();
  }
  function B(n2, i2, t2, o2, e2) {
    function r2() {
      var e3;
      t2 && "contentWindow" in t2 && null !== t2.contentWindow ? (e3 = F[o2] && F[o2].targetOrigin, T(o2, "[" + n2 + "] Sending msg to iframe[" + o2 + "] (" + i2 + ") targetOrigin: " + e3), t2.contentWindow.postMessage(M + i2, e3)) : N(o2, "[" + n2 + "] IFrame(" + o2 + ") not found");
    }
    function a2() {
      e2 && F[o2] && F[o2].warningTimeout && (F[o2].msgTimeout = setTimeout(function() {
        !F[o2] || F[o2].loaded || s2 || (s2 = true, N(o2, "IFrame has not responded within " + F[o2].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."));
      }, F[o2].warningTimeout));
    }
    var s2 = false;
    o2 = o2 || t2.id, F[o2] && (r2(), a2());
  }
  function q(e2) {
    return e2 + ":" + F[e2].bodyMarginV1 + ":" + F[e2].sizeWidth + ":" + F[e2].log + ":" + F[e2].interval + ":" + F[e2].enablePublicMethods + ":" + F[e2].autoResize + ":" + F[e2].bodyMargin + ":" + F[e2].heightCalculationMethod + ":" + F[e2].bodyBackground + ":" + F[e2].bodyPadding + ":" + F[e2].tolerance + ":" + F[e2].inPageLinks + ":" + F[e2].resizeFrom + ":" + F[e2].widthCalculationMethod + ":" + F[e2].mouseEvents;
  }
  function d(t2, e2) {
    function n2(i3) {
      var e3, n3 = h();
      n3 && (e3 = n3, t2.parentNode && new e3(function(e4) {
        e4.forEach(function(e5) {
          Array.prototype.slice.call(e5.removedNodes).forEach(function(e6) {
            e6 === t2 && C(t2);
          });
        });
      }).observe(t2.parentNode, { childList: true })), O(t2, "load", function() {
        var e4, n4;
        B("iFrame.onload", i3, t2, u, true), e4 = F[s2] && F[s2].firstRun, n4 = F[s2] && F[s2].heightCalculationMethod in m, !e4 && n4 && P({ iframe: t2, height: 0, width: 0, type: "init" });
      }), B("init", i3, t2, u, true);
    }
    function i2(e3) {
      var n3 = e3.split("Callback");
      2 === n3.length && (this[n3 = "on" + n3[0].charAt(0).toUpperCase() + n3[0].slice(1)] = this[e3], delete this[e3], N(s2, "Deprecated: '" + e3 + "' has been renamed '" + n3 + "'. The old method will be removed in the next major version."));
    }
    function o2(e3) {
      e3 = e3 || {}, F[s2] = { firstRun: true, iframe: t2, remoteHost: t2.src && t2.src.split("/").slice(0, 3).join("/") }, function(e4) {
        if ("object" != typeof e4)
          throw new TypeError("Options is not an object");
      }(e3), Object.keys(e3).forEach(i2, e3), function(e4) {
        for (var n3 in g)
          Object.prototype.hasOwnProperty.call(g, n3) && (F[s2][n3] = (Object.prototype.hasOwnProperty.call(e4, n3) ? e4 : g)[n3]);
      }(e3), F[s2] && (F[s2].targetOrigin = true === F[s2].checkOrigin ? "" === (e3 = F[s2].remoteHost) || null !== e3.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : e3 : "*");
    }
    var r2, a2, s2 = ("" === (r2 = t2.id) && (t2.id = (a2 = e2 && e2.id || g.id + f++, null !== document.getElementById(a2) && (a2 += f++), r2 = a2), l = (e2 || {}).log, T(r2, "Added missing iframe ID: " + r2 + " (" + t2.src + ")")), r2);
    function d2(e3) {
      var n3 = F[s2][e3];
      1 / 0 !== n3 && 0 !== n3 && (t2.style[e3] = "number" == typeof n3 ? n3 + "px" : n3, T(s2, "Set " + e3 + " = " + t2.style[e3]));
    }
    function c2(e3) {
      if (F[s2]["min" + e3] > F[s2]["max" + e3])
        throw new Error("Value for min" + e3 + " can not be greater than max" + e3);
    }
    s2 in F && "iFrameResizer" in t2 ? N(s2, "Ignored iFrame, already setup.") : (o2(e2), function() {
      switch (T(s2, "IFrame scrolling " + (F[s2] && F[s2].scrolling ? "enabled" : "disabled") + " for " + s2), t2.style.overflow = false === (F[s2] && F[s2].scrolling) ? "hidden" : "auto", F[s2] && F[s2].scrolling) {
        case "omit":
          break;
        case true:
          t2.scrolling = "yes";
          break;
        case false:
          t2.scrolling = "no";
          break;
        default:
          t2.scrolling = F[s2] ? F[s2].scrolling : "no";
      }
    }(), c2("Height"), c2("Width"), d2("maxHeight"), d2("minHeight"), d2("maxWidth"), d2("minWidth"), "number" != typeof (F[s2] && F[s2].bodyMargin) && "0" !== (F[s2] && F[s2].bodyMargin) || (F[s2].bodyMarginV1 = F[s2].bodyMargin, F[s2].bodyMargin = F[s2].bodyMargin + "px"), n2(q(s2)), F[s2] && (F[s2].iframe.iFrameResizer = { close: C.bind(null, F[s2].iframe), removeListeners: p.bind(null, F[s2].iframe), resize: B.bind(null, "Window resize", "resize", F[s2].iframe), moveToAnchor: function(e3) {
      B("Move to anchor", "moveToAnchor:" + e3, F[s2].iframe, s2);
    }, sendMessage: function(e3) {
      B("Send Message", "message:" + (e3 = JSON.stringify(e3)), F[s2].iframe, s2);
    } }));
  }
  function c(e2, n2) {
    null === i && (i = setTimeout(function() {
      i = null, e2();
    }, n2));
  }
  function n() {
    "hidden" !== document.visibilityState && (T("document", "Trigger event: Visibility change"), c(function() {
      w("Tab Visible", "resize");
    }, 16));
  }
  function w(i2, t2) {
    Object.keys(F).forEach(function(e2) {
      var n2;
      F[n2 = e2] && "parent" === F[n2].resizeFrom && F[n2].autoResize && !F[n2].firstRun && B(i2, t2, F[e2].iframe, e2);
    });
  }
  function b() {
    O(window, "message", e), O(window, "resize", function() {
      var e2;
      T("window", "Trigger event: " + (e2 = "resize")), c(function() {
        w("Window " + e2, "resize");
      }, 16);
    }), O(document, "visibilitychange", n), O(document, "-webkit-visibilitychange", n);
  }
  function y() {
    function t2(e2, n2) {
      n2 && (function() {
        if (!n2.tagName)
          throw new TypeError("Object is not a valid DOM element");
        if ("IFRAME" !== n2.tagName.toUpperCase())
          throw new TypeError("Expected <IFRAME> tag, found <" + n2.tagName + ">");
      }(), d(n2, e2), o2.push(n2));
    }
    var o2;
    return function() {
      for (var e2 = ["moz", "webkit", "o", "ms"], n2 = 0; n2 < e2.length && !r; n2 += 1)
        r = window[e2[n2] + "RequestAnimationFrame"];
      r ? r = r.bind(window) : T("setup", "RequestAnimationFrame not supported");
    }(), b(), function(e2, n2) {
      var i2;
      switch (o2 = [], (i2 = e2) && i2.enablePublicMethods && N("enablePublicMethods option has been removed, public methods are now always available in the iFrame"), typeof n2) {
        case "undefined":
        case "string":
          Array.prototype.forEach.call(document.querySelectorAll(n2 || "iframe"), t2.bind(u, e2));
          break;
        case "object":
          t2(e2, n2);
          break;
        default:
          throw new TypeError("Unexpected data type (" + typeof n2 + ")");
      }
      return o2;
    };
  }
  function v(e2) {
    e2.fn ? e2.fn.iFrameResize || (e2.fn.iFrameResize = function(i2) {
      return this.filter("iframe").each(function(e3, n2) {
        d(n2, i2);
      }).end();
    }) : E("", "Unable to bind to jQuery, it is not fully loaded.");
  }
  "undefined" != typeof window && (x = "message".length, I = (M = "[iFrameSizer]").length, r = window.requestAnimationFrame, g = { autoResize: !(i = k = null), bodyBackground: null, bodyMargin: null, bodyMarginV1: 8, bodyPadding: null, checkOrigin: !(a = l = false), inPageLinks: !(F = {}), enablePublicMethods: !(f = 0), heightCalculationMethod: "bodyOffset", id: "iFrameResizer", interval: 32, log: !(m = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }), maxHeight: 1 / 0, maxWidth: 1 / 0, minHeight: 0, minWidth: 0, mouseEvents: true, resizeFrom: "parent", scrolling: false, sizeHeight: true, sizeWidth: false, warningTimeout: 5e3, tolerance: 0, widthCalculationMethod: "scroll", onClose: function() {
    return true;
  }, onClosed: function() {
  }, onInit: function() {
  }, onMessage: function() {
    N("onMessage function not defined");
  }, onMouseEnter: function() {
  }, onMouseLeave: function() {
  }, onResized: function() {
  }, onScroll: function() {
    return true;
  } }, z = {}, window.jQuery && v(window.jQuery), "function" == typeof define && define.amd ? define([], y) : "object" == typeof module && "object" == typeof module.exports && (module.exports = y()), window.iFrameResize = window.iFrameResize || y());
}();
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "iframe.svelte-1j7xp64{margin:1em 0;background:#ffffffaa;transition:height 0.5s}select.svelte-1j7xp64{margin:0 auto;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const samples = [
    {
      name: "Sorting Activity",
      path: "./methods-sort",
      desc: `This is a sorting activity`
    },
    {
      name: "Python Interpreter",
      path: "./sample-python.html",
      desc: `python desc`
    },
    {
      name: "Collision Detection",
      path: "./sample-collision.html",
      desc: `collision desc`
    },
    {
      name: "Tools of the Fed",
      path: "./sample-fed-tools.html",
      desc: `fed desc`
    },
    {
      name: "Rotating 3D Objects",
      path: "./sample-3d-objects.html",
      desc: `3d desc`
    },
    {
      name: "Due Diligence Infographic",
      path: "./sample-diligence.html",
      desc: `due desc`
    },
    {
      name: "Tracing Images",
      path: "./sample-tracing.html",
      desc: `tracing desc`
    }
  ];
  $$result.css.add(css);
  return `<h2 id="${"portfolio"}">Portfolio</h2>
<select class="${"svelte-1j7xp64"}"><option value="${"null"}">Choose an item:</option>${each(samples, (sample, i) => {
    return `<option${add_attribute("value", i, 0)}>${escape(sample.name)}</option>`;
  })}</select>
${``}`;
});
export {
  Page as default
};
