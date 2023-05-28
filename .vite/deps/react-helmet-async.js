import {
  require_prop_types
} from "./chunk-J44HHDLI.js";
import "./chunk-UCPK3CVF.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!equal(i2.value[1], b2.get(i2.value[0])))
              return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b2.valueOf === "function")
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b2.toString === "function")
          return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
            return false;
        if (hasElementType && a2 instanceof Element)
          return false;
        for (i2 = length; i2-- !== 0; ) {
          if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal(a2[keys[i2]], b2[keys[i2]]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function isEqual(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant = function(condition, format, a2, b2, c2, d2, e2, f2) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a2, b2, c2, d2, e2, f2];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/react-helmet-async/lib/index.module.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_react_fast_compare = __toESM(require_react_fast_compare());
var import_invariant = __toESM(require_browser());
var import_shallowequal = __toESM(require_shallowequal());
function a() {
  return a = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t2[n2] = r2[n2]);
    }
    return t2;
  }, a.apply(this, arguments);
}
function s(t2, e2) {
  t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, c(t2, e2);
}
function c(t2, e2) {
  return c = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, c(t2, e2);
}
function u(t2, e2) {
  if (null == t2)
    return {};
  var r2, n2, i2 = {}, o2 = Object.keys(t2);
  for (n2 = 0; n2 < o2.length; n2++)
    e2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = t2[r2]);
  return i2;
}
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" };
var p = { rel: ["amphtml", "canonical", "alternate"] };
var f = { type: ["application/ld+json"] };
var d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] };
var h = Object.keys(l).map(function(t2) {
  return l[t2];
});
var m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" };
var y = Object.keys(m).reduce(function(t2, e2) {
  return t2[m[e2]] = e2, t2;
}, {});
var T = function(t2, e2) {
  for (var r2 = t2.length - 1; r2 >= 0; r2 -= 1) {
    var n2 = t2[r2];
    if (Object.prototype.hasOwnProperty.call(n2, e2))
      return n2[e2];
  }
  return null;
};
var g = function(t2) {
  var e2 = T(t2, l.TITLE), r2 = T(t2, "titleTemplate");
  if (Array.isArray(e2) && (e2 = e2.join("")), r2 && e2)
    return r2.replace(/%s/g, function() {
      return e2;
    });
  var n2 = T(t2, "defaultTitle");
  return e2 || n2 || void 0;
};
var b = function(t2) {
  return T(t2, "onChangeClientState") || function() {
  };
};
var v = function(t2, e2) {
  return e2.filter(function(e3) {
    return void 0 !== e3[t2];
  }).map(function(e3) {
    return e3[t2];
  }).reduce(function(t3, e3) {
    return a({}, t3, e3);
  }, {});
};
var A = function(t2, e2) {
  return e2.filter(function(t3) {
    return void 0 !== t3[l.BASE];
  }).map(function(t3) {
    return t3[l.BASE];
  }).reverse().reduce(function(e3, r2) {
    if (!e3.length)
      for (var n2 = Object.keys(r2), i2 = 0; i2 < n2.length; i2 += 1) {
        var o2 = n2[i2].toLowerCase();
        if (-1 !== t2.indexOf(o2) && r2[o2])
          return e3.concat(r2);
      }
    return e3;
  }, []);
};
var C = function(t2, e2, r2) {
  var n2 = {};
  return r2.filter(function(e3) {
    return !!Array.isArray(e3[t2]) || (void 0 !== e3[t2] && console && "function" == typeof console.warn && console.warn("Helmet: " + t2 + ' should be of type "Array". Instead found type "' + typeof e3[t2] + '"'), false);
  }).map(function(e3) {
    return e3[t2];
  }).reverse().reduce(function(t3, r3) {
    var i2 = {};
    r3.filter(function(t4) {
      for (var r4, o3 = Object.keys(t4), a2 = 0; a2 < o3.length; a2 += 1) {
        var s3 = o3[a2], c3 = s3.toLowerCase();
        -1 === e2.indexOf(c3) || "rel" === r4 && "canonical" === t4[r4].toLowerCase() || "rel" === c3 && "stylesheet" === t4[c3].toLowerCase() || (r4 = c3), -1 === e2.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r4 = s3);
      }
      if (!r4 || !t4[r4])
        return false;
      var u3 = t4[r4].toLowerCase();
      return n2[r4] || (n2[r4] = {}), i2[r4] || (i2[r4] = {}), !n2[r4][u3] && (i2[r4][u3] = true, true);
    }).reverse().forEach(function(e3) {
      return t3.push(e3);
    });
    for (var o2 = Object.keys(i2), s2 = 0; s2 < o2.length; s2 += 1) {
      var c2 = o2[s2], u2 = a({}, n2[c2], i2[c2]);
      n2[c2] = u2;
    }
    return t3;
  }, []).reverse();
};
var O = function(t2, e2) {
  if (Array.isArray(t2) && t2.length) {
    for (var r2 = 0; r2 < t2.length; r2 += 1)
      if (t2[r2][e2])
        return true;
  }
  return false;
};
var S = function(t2) {
  return Array.isArray(t2) ? t2.join("") : t2;
};
var E = function(t2, e2) {
  return Array.isArray(t2) ? t2.reduce(function(t3, r2) {
    return function(t4, e3) {
      for (var r3 = Object.keys(t4), n2 = 0; n2 < r3.length; n2 += 1)
        if (e3[r3[n2]] && e3[r3[n2]].includes(t4[r3[n2]]))
          return true;
      return false;
    }(r2, e2) ? t3.priority.push(r2) : t3.default.push(r2), t3;
  }, { priority: [], default: [] }) : { default: t2 };
};
var I = function(t2, e2) {
  var r2;
  return a({}, t2, ((r2 = {})[e2] = void 0, r2));
};
var P = [l.NOSCRIPT, l.SCRIPT, l.STYLE];
var w = function(t2, e2) {
  return void 0 === e2 && (e2 = true), false === e2 ? String(t2) : String(t2).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var x = function(t2) {
  return Object.keys(t2).reduce(function(e2, r2) {
    var n2 = void 0 !== t2[r2] ? r2 + '="' + t2[r2] + '"' : "" + r2;
    return e2 ? e2 + " " + n2 : n2;
  }, "");
};
var L = function(t2, e2) {
  return void 0 === e2 && (e2 = {}), Object.keys(t2).reduce(function(e3, r2) {
    return e3[m[r2] || r2] = t2[r2], e3;
  }, e2);
};
var j = function(e2, r2) {
  return r2.map(function(r3, n2) {
    var i2, o2 = ((i2 = { key: n2 })["data-rh"] = true, i2);
    return Object.keys(r3).forEach(function(t2) {
      var e3 = m[t2] || t2;
      "innerHTML" === e3 || "cssText" === e3 ? o2.dangerouslySetInnerHTML = { __html: r3.innerHTML || r3.cssText } : o2[e3] = r3[t2];
    }), import_react.default.createElement(e2, o2);
  });
};
var M = function(e2, r2, n2) {
  switch (e2) {
    case l.TITLE:
      return { toComponent: function() {
        return n3 = r2.titleAttributes, (i2 = { key: e3 = r2.title })["data-rh"] = true, o2 = L(n3, i2), [import_react.default.createElement(l.TITLE, o2, e3)];
        var e3, n3, i2, o2;
      }, toString: function() {
        return function(t2, e3, r3, n3) {
          var i2 = x(r3), o2 = S(e3);
          return i2 ? "<" + t2 + ' data-rh="true" ' + i2 + ">" + w(o2, n3) + "</" + t2 + ">" : "<" + t2 + ' data-rh="true">' + w(o2, n3) + "</" + t2 + ">";
        }(e2, r2.title, r2.titleAttributes, n2);
      } };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: function() {
        return L(r2);
      }, toString: function() {
        return x(r2);
      } };
    default:
      return { toComponent: function() {
        return j(e2, r2);
      }, toString: function() {
        return function(t2, e3, r3) {
          return e3.reduce(function(e4, n3) {
            var i2 = Object.keys(n3).filter(function(t3) {
              return !("innerHTML" === t3 || "cssText" === t3);
            }).reduce(function(t3, e5) {
              var i3 = void 0 === n3[e5] ? e5 : e5 + '="' + w(n3[e5], r3) + '"';
              return t3 ? t3 + " " + i3 : i3;
            }, ""), o2 = n3.innerHTML || n3.cssText || "", a2 = -1 === P.indexOf(t2);
            return e4 + "<" + t2 + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o2 + "</" + t2 + ">");
          }, "");
        }(e2, r2, n2);
      } };
  }
};
var k = function(t2) {
  var e2 = t2.baseTag, r2 = t2.bodyAttributes, n2 = t2.encode, i2 = t2.htmlAttributes, o2 = t2.noscriptTags, a2 = t2.styleTags, s2 = t2.title, c2 = void 0 === s2 ? "" : s2, u2 = t2.titleAttributes, h2 = t2.linkTags, m2 = t2.metaTags, y2 = t2.scriptTags, T2 = { toComponent: function() {
  }, toString: function() {
    return "";
  } };
  if (t2.prioritizeSeoTags) {
    var g2 = function(t3) {
      var e3 = t3.linkTags, r3 = t3.scriptTags, n3 = t3.encode, i3 = E(t3.metaTags, d), o3 = E(e3, p), a3 = E(r3, f);
      return { priorityMethods: { toComponent: function() {
        return [].concat(j(l.META, i3.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
      }, toString: function() {
        return M(l.META, i3.priority, n3) + " " + M(l.LINK, o3.priority, n3) + " " + M(l.SCRIPT, a3.priority, n3);
      } }, metaTags: i3.default, linkTags: o3.default, scriptTags: a3.default };
    }(t2);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e2, n2), bodyAttributes: M("bodyAttributes", r2, n2), htmlAttributes: M("htmlAttributes", i2, n2), link: M(l.LINK, h2, n2), meta: M(l.META, m2, n2), noscript: M(l.NOSCRIPT, o2, n2), script: M(l.SCRIPT, y2, n2), style: M(l.STYLE, a2, n2), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n2) };
};
var H = [];
var N = function(t2, e2) {
  var r2 = this;
  void 0 === e2 && (e2 = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: function(t3) {
    r2.context.helmet = t3;
  }, helmetInstances: { get: function() {
    return r2.canUseDOM ? H : r2.instances;
  }, add: function(t3) {
    (r2.canUseDOM ? H : r2.instances).push(t3);
  }, remove: function(t3) {
    var e3 = (r2.canUseDOM ? H : r2.instances).indexOf(t3);
    (r2.canUseDOM ? H : r2.instances).splice(e3, 1);
  } } }, this.context = t2, this.canUseDOM = e2, e2 || (t2.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
};
var R = import_react.default.createContext({});
var D = import_prop_types.default.shape({ setHelmet: import_prop_types.default.func, helmetInstances: import_prop_types.default.shape({ get: import_prop_types.default.func, add: import_prop_types.default.func, remove: import_prop_types.default.func }) });
var U = "undefined" != typeof document;
var q = function(e2) {
  function r2(t2) {
    var n2;
    return (n2 = e2.call(this, t2) || this).helmetData = new N(n2.props.context, r2.canUseDOM), n2;
  }
  return s(r2, e2), r2.prototype.render = function() {
    return import_react.default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r2;
}(import_react.Component);
q.canUseDOM = U, q.propTypes = { context: import_prop_types.default.shape({ helmet: import_prop_types.default.shape() }), children: import_prop_types.default.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = function(t2, e2) {
  var r2, n2 = document.head || document.querySelector(l.HEAD), i2 = n2.querySelectorAll(t2 + "[data-rh]"), o2 = [].slice.call(i2), a2 = [];
  return e2 && e2.length && e2.forEach(function(e3) {
    var n3 = document.createElement(t2);
    for (var i3 in e3)
      Object.prototype.hasOwnProperty.call(e3, i3) && ("innerHTML" === i3 ? n3.innerHTML = e3.innerHTML : "cssText" === i3 ? n3.styleSheet ? n3.styleSheet.cssText = e3.cssText : n3.appendChild(document.createTextNode(e3.cssText)) : n3.setAttribute(i3, void 0 === e3[i3] ? "" : e3[i3]));
    n3.setAttribute("data-rh", "true"), o2.some(function(t3, e4) {
      return r2 = e4, n3.isEqualNode(t3);
    }) ? o2.splice(r2, 1) : a2.push(n3);
  }), o2.forEach(function(t3) {
    return t3.parentNode.removeChild(t3);
  }), a2.forEach(function(t3) {
    return n2.appendChild(t3);
  }), { oldTags: o2, newTags: a2 };
};
var B = function(t2, e2) {
  var r2 = document.getElementsByTagName(t2)[0];
  if (r2) {
    for (var n2 = r2.getAttribute("data-rh"), i2 = n2 ? n2.split(",") : [], o2 = [].concat(i2), a2 = Object.keys(e2), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e2[c2] || "";
      r2.getAttribute(c2) !== u2 && r2.setAttribute(c2, u2), -1 === i2.indexOf(c2) && i2.push(c2);
      var l2 = o2.indexOf(c2);
      -1 !== l2 && o2.splice(l2, 1);
    }
    for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1)
      r2.removeAttribute(o2[p2]);
    i2.length === o2.length ? r2.removeAttribute("data-rh") : r2.getAttribute("data-rh") !== a2.join(",") && r2.setAttribute("data-rh", a2.join(","));
  }
};
var K = function(t2, e2) {
  var r2 = t2.baseTag, n2 = t2.htmlAttributes, i2 = t2.linkTags, o2 = t2.metaTags, a2 = t2.noscriptTags, s2 = t2.onChangeClientState, c2 = t2.scriptTags, u2 = t2.styleTags, p2 = t2.title, f2 = t2.titleAttributes;
  B(l.BODY, t2.bodyAttributes), B(l.HTML, n2), function(t3, e3) {
    void 0 !== t3 && document.title !== t3 && (document.title = S(t3)), B(l.TITLE, e3);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r2), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t3) {
    var e3 = d2[t3], r3 = e3.newTags, n3 = e3.oldTags;
    r3.length && (h2[t3] = r3), n3.length && (m2[t3] = d2[t3].oldTags);
  }), e2 && e2(), s2(t2, h2, m2);
};
var _ = null;
var z = function(t2) {
  function e2() {
    for (var e3, r3 = arguments.length, n2 = new Array(r3), i2 = 0; i2 < r3; i2++)
      n2[i2] = arguments[i2];
    return (e3 = t2.call.apply(t2, [this].concat(n2)) || this).rendered = false, e3;
  }
  s(e2, t2);
  var r2 = e2.prototype;
  return r2.shouldComponentUpdate = function(t3) {
    return !(0, import_shallowequal.default)(t3, this.props);
  }, r2.componentDidUpdate = function() {
    this.emitChange();
  }, r2.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r2.emitChange = function() {
    var t3, e3, r3 = this.props.context, n2 = r3.setHelmet, i2 = null, o2 = (t3 = r3.helmetInstances.get().map(function(t4) {
      var e4 = a({}, t4.props);
      return delete e4.context, e4;
    }), { baseTag: A(["href"], t3), bodyAttributes: v("bodyAttributes", t3), defer: T(t3, "defer"), encode: T(t3, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t3), linkTags: C(l.LINK, ["rel", "href"], t3), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t3), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t3), onChangeClientState: b(t3), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t3), styleTags: C(l.STYLE, ["cssText"], t3), title: g(t3), titleAttributes: v("titleAttributes", t3), prioritizeSeoTags: O(t3, "prioritizeSeoTags") });
    q.canUseDOM ? (e3 = o2, _ && cancelAnimationFrame(_), e3.defer ? _ = requestAnimationFrame(function() {
      K(e3, function() {
        _ = null;
      });
    }) : (K(e3), _ = null)) : k && (i2 = k(o2)), n2(i2);
  }, r2.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r2.render = function() {
    return this.init(), null;
  }, e2;
}(import_react.Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"];
var G = ["children"];
var W = function(e2) {
  function r2() {
    return e2.apply(this, arguments) || this;
  }
  s(r2, e2);
  var o2 = r2.prototype;
  return o2.shouldComponentUpdate = function(t2) {
    return !(0, import_react_fast_compare.default)(I(this.props, "helmetData"), I(t2, "helmetData"));
  }, o2.mapNestedChildrenToProps = function(t2, e3) {
    if (!e3)
      return null;
    switch (t2.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e3 };
      case l.STYLE:
        return { cssText: e3 };
      default:
        throw new Error("<" + t2.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o2.flattenArrayTypeChildren = function(t2) {
    var e3, r3 = t2.child, n2 = t2.arrayTypeChildren;
    return a({}, n2, ((e3 = {})[r3.type] = [].concat(n2[r3.type] || [], [a({}, t2.newChildProps, this.mapNestedChildrenToProps(r3, t2.nestedChildren))]), e3));
  }, o2.mapObjectTypeChildren = function(t2) {
    var e3, r3, n2 = t2.child, i2 = t2.newProps, o3 = t2.newChildProps, s2 = t2.nestedChildren;
    switch (n2.type) {
      case l.TITLE:
        return a({}, i2, ((e3 = {})[n2.type] = s2, e3.titleAttributes = a({}, o3), e3));
      case l.BODY:
        return a({}, i2, { bodyAttributes: a({}, o3) });
      case l.HTML:
        return a({}, i2, { htmlAttributes: a({}, o3) });
      default:
        return a({}, i2, ((r3 = {})[n2.type] = a({}, o3), r3));
    }
  }, o2.mapArrayTypeChildrenToProps = function(t2, e3) {
    var r3 = a({}, e3);
    return Object.keys(t2).forEach(function(e4) {
      var n2;
      r3 = a({}, r3, ((n2 = {})[e4] = t2[e4], n2));
    }), r3;
  }, o2.warnOnInvalidChildren = function(t2, e3) {
    return (0, import_invariant.default)(h.some(function(e4) {
      return t2.type === e4;
    }), "function" == typeof t2.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t2.type + "> elements. Refer to our API for more information."), (0, import_invariant.default)(!e3 || "string" == typeof e3 || Array.isArray(e3) && !e3.some(function(t3) {
      return "string" != typeof t3;
    }), "Helmet expects a string as a child of <" + t2.type + ">. Did you forget to wrap your children in braces? ( <" + t2.type + ">{``}</" + t2.type + "> ) Refer to our API for more information."), true;
  }, o2.mapChildrenToProps = function(e3, r3) {
    var n2 = this, i2 = {};
    return import_react.default.Children.forEach(e3, function(t2) {
      if (t2 && t2.props) {
        var e4 = t2.props, o3 = e4.children, a2 = u(e4, F), s2 = Object.keys(a2).reduce(function(t3, e5) {
          return t3[y[e5] || e5] = a2[e5], t3;
        }, {}), c2 = t2.type;
        switch ("symbol" == typeof c2 ? c2 = c2.toString() : n2.warnOnInvalidChildren(t2, o3), c2) {
          case l.FRAGMENT:
            r3 = n2.mapChildrenToProps(o3, r3);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i2 = n2.flattenArrayTypeChildren({ child: t2, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o3 });
            break;
          default:
            r3 = n2.mapObjectTypeChildren({ child: t2, newProps: r3, newChildProps: s2, nestedChildren: o3 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i2, r3);
  }, o2.render = function() {
    var e3 = this.props, r3 = e3.children, n2 = u(e3, G), i2 = a({}, n2), o3 = n2.helmetData;
    return r3 && (i2 = this.mapChildrenToProps(r3, i2)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? import_react.default.createElement(z, a({}, i2, { context: o3.value, helmetData: void 0 })) : import_react.default.createElement(R.Consumer, null, function(e4) {
      return import_react.default.createElement(z, a({}, i2, { context: e4 }));
    });
  }, r2;
}(import_react.Component);
W.propTypes = { base: import_prop_types.default.object, bodyAttributes: import_prop_types.default.object, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]), defaultTitle: import_prop_types.default.string, defer: import_prop_types.default.bool, encodeSpecialCharacters: import_prop_types.default.bool, htmlAttributes: import_prop_types.default.object, link: import_prop_types.default.arrayOf(import_prop_types.default.object), meta: import_prop_types.default.arrayOf(import_prop_types.default.object), noscript: import_prop_types.default.arrayOf(import_prop_types.default.object), onChangeClientState: import_prop_types.default.func, script: import_prop_types.default.arrayOf(import_prop_types.default.object), style: import_prop_types.default.arrayOf(import_prop_types.default.object), title: import_prop_types.default.string, titleAttributes: import_prop_types.default.object, titleTemplate: import_prop_types.default.string, prioritizeSeoTags: import_prop_types.default.bool, helmetData: import_prop_types.default.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";
export {
  W as Helmet,
  N as HelmetData,
  q as HelmetProvider
};
//# sourceMappingURL=react-helmet-async.js.map
