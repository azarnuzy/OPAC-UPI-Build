function Wy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function Qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var xm = { exports: {} },
  Zl = {},
  wm = { exports: {} },
  Q = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for('react.element'),
  Ky = Symbol.for('react.portal'),
  Qy = Symbol.for('react.fragment'),
  qy = Symbol.for('react.strict_mode'),
  Yy = Symbol.for('react.profiler'),
  Jy = Symbol.for('react.provider'),
  Gy = Symbol.for('react.context'),
  Xy = Symbol.for('react.forward_ref'),
  Zy = Symbol.for('react.suspense'),
  e0 = Symbol.for('react.memo'),
  t0 = Symbol.for('react.lazy'),
  sf = Symbol.iterator
function n0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (sf && e[sf]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var bm = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sm = Object.assign,
  Em = {}
function qr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || bm)
}
qr.prototype.isReactComponent = {}
qr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
qr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Cm() {}
Cm.prototype = qr.prototype
function Cc(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || bm)
}
var Tc = (Cc.prototype = new Cm())
Tc.constructor = Cc
Sm(Tc, qr.prototype)
Tc.isPureReactComponent = !0
var uf = Array.isArray,
  Tm = Object.prototype.hasOwnProperty,
  Pc = { current: null },
  Pm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Om(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Tm.call(t, r) && !Pm.hasOwnProperty(r) && (o[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) o.children = n
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2]
    o.children = s
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r])
  return { $$typeof: si, type: e, key: i, ref: l, props: o, _owner: Pc.current }
}
function r0(e, t) {
  return {
    $$typeof: si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Oc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === si
}
function o0(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var cf = /\/+/g
function es(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? o0('' + e.key)
    : t.toString(36)
}
function qi(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case si:
          case Ky:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + es(l, 0) : r),
      uf(o)
        ? ((n = ''),
          e != null && (n = e.replace(cf, '$&/') + '/'),
          qi(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (Oc(o) &&
            (o = r0(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(cf, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), uf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a]
      var s = r + es(i, a)
      l += qi(i, t, n, s, o)
    }
  else if (((s = n0(e)), typeof s == 'function'))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + es(i, a++)), (l += qi(i, t, n, s, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return l
}
function Pi(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    qi(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function i0(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ke = { current: null },
  Yi = { transition: null },
  l0 = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: Yi,
    ReactCurrentOwner: Pc,
  }
Q.Children = {
  map: Pi,
  forEach: function (e, t, n) {
    Pi(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Pi(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Pi(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Oc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
Q.Component = qr
Q.Fragment = Qy
Q.Profiler = Yy
Q.PureComponent = Cc
Q.StrictMode = qy
Q.Suspense = Zy
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Sm({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Pc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (s in t)
      Tm.call(t, s) &&
        !Pm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    a = Array(s)
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: si, type: e.type, key: o, ref: i, props: r, _owner: l }
}
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jy, _context: e }),
    (e.Consumer = e)
  )
}
Q.createElement = Om
Q.createFactory = function (e) {
  var t = Om.bind(null, e)
  return (t.type = e), t
}
Q.createRef = function () {
  return { current: null }
}
Q.forwardRef = function (e) {
  return { $$typeof: Xy, render: e }
}
Q.isValidElement = Oc
Q.lazy = function (e) {
  return { $$typeof: t0, _payload: { _status: -1, _result: e }, _init: i0 }
}
Q.memo = function (e, t) {
  return { $$typeof: e0, type: e, compare: t === void 0 ? null : t }
}
Q.startTransition = function (e) {
  var t = Yi.transition
  Yi.transition = {}
  try {
    e()
  } finally {
    Yi.transition = t
  }
}
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
Q.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t)
}
Q.useContext = function (e) {
  return Ke.current.useContext(e)
}
Q.useDebugValue = function () {}
Q.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e)
}
Q.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t)
}
Q.useId = function () {
  return Ke.current.useId()
}
Q.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n)
}
Q.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t)
}
Q.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t)
}
Q.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t)
}
Q.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n)
}
Q.useRef = function (e) {
  return Ke.current.useRef(e)
}
Q.useState = function (e) {
  return Ke.current.useState(e)
}
Q.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n)
}
Q.useTransition = function () {
  return Ke.current.useTransition()
}
Q.version = '18.2.0'
wm.exports = Q
var d = wm.exports
const D = Qr(d),
  ml = Wy({ __proto__: null, default: D }, [d])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0 = d,
  s0 = Symbol.for('react.element'),
  u0 = Symbol.for('react.fragment'),
  c0 = Object.prototype.hasOwnProperty,
  d0 = a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  f0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function $m(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) c0.call(t, r) && !f0.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: s0, type: e, key: i, ref: l, props: o, _owner: d0.current }
}
Zl.Fragment = u0
Zl.jsx = $m
Zl.jsxs = $m
xm.exports = Zl
var m = xm.exports,
  eu = {},
  km = { exports: {} },
  at = {},
  Nm = { exports: {} },
  Rm = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(j, F) {
    var z = j.length
    j.push(F)
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        Y = j[K]
      if (0 < o(Y, F)) (j[K] = F), (j[z] = Y), (z = K)
      else break e
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0]
  }
  function r(j) {
    if (j.length === 0) return null
    var F = j[0],
      z = j.pop()
    if (z !== F) {
      j[0] = z
      e: for (var K = 0, Y = j.length, He = Y >>> 1; K < He; ) {
        var _ = 2 * (K + 1) - 1,
          U = j[_],
          V = _ + 1,
          je = j[V]
        if (0 > o(U, z))
          V < Y && 0 > o(je, U)
            ? ((j[K] = je), (j[V] = z), (K = V))
            : ((j[K] = U), (j[_] = z), (K = _))
        else if (V < Y && 0 > o(je, z)) (j[K] = je), (j[V] = z), (K = V)
        else break e
      }
    }
    return F
  }
  function o(j, F) {
    var z = j.sortIndex - F.sortIndex
    return z !== 0 ? z : j.id - F.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var l = Date,
      a = l.now()
    e.unstable_now = function () {
      return l.now() - a
    }
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    g = !1,
    x = !1,
    y = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function w(j) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u)
      else if (F.startTime <= j) r(u), (F.sortIndex = F.expirationTime), t(s, F)
      else break
      F = n(u)
    }
  }
  function S(j) {
    if (((y = !1), w(j), !x))
      if (n(s) !== null) (x = !0), ne(E)
      else {
        var F = n(u)
        F !== null && ie(S, F.startTime - j)
      }
  }
  function E(j, F) {
    ;(x = !1), y && ((y = !1), v(T), (T = -1)), (g = !0)
    var z = p
    try {
      for (
        w(F), f = n(s);
        f !== null && (!(f.expirationTime > F) || (j && !R()));

      ) {
        var K = f.callback
        if (typeof K == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var Y = K(f.expirationTime <= F)
          ;(F = e.unstable_now()),
            typeof Y == 'function' ? (f.callback = Y) : f === n(s) && r(s),
            w(F)
        } else r(s)
        f = n(s)
      }
      if (f !== null) var He = !0
      else {
        var _ = n(u)
        _ !== null && ie(S, _.startTime - F), (He = !1)
      }
      return He
    } finally {
      ;(f = null), (p = z), (g = !1)
    }
  }
  var C = !1,
    O = null,
    T = -1,
    k = 5,
    $ = -1
  function R() {
    return !(e.unstable_now() - $ < k)
  }
  function H() {
    if (O !== null) {
      var j = e.unstable_now()
      $ = j
      var F = !0
      try {
        F = O(!0, j)
      } finally {
        F ? W() : ((C = !1), (O = null))
      }
    } else C = !1
  }
  var W
  if (typeof h == 'function')
    W = function () {
      h(H)
    }
  else if (typeof MessageChannel < 'u') {
    var M = new MessageChannel(),
      q = M.port2
    ;(M.port1.onmessage = H),
      (W = function () {
        q.postMessage(null)
      })
  } else
    W = function () {
      b(H, 0)
    }
  function ne(j) {
    ;(O = j), C || ((C = !0), W())
  }
  function ie(j, F) {
    T = b(function () {
      j(e.unstable_now())
    }, F)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), ne(E))
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (k = 0 < j ? Math.floor(1e3 / j) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3
          break
        default:
          F = p
      }
      var z = p
      p = F
      try {
        return j()
      } finally {
        p = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, F) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          j = 3
      }
      var z = p
      p = j
      try {
        return F()
      } finally {
        p = z
      }
    }),
    (e.unstable_scheduleCallback = function (j, F, z) {
      var K = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? K + z : K))
          : (z = K),
        j)
      ) {
        case 1:
          var Y = -1
          break
        case 2:
          Y = 250
          break
        case 5:
          Y = 1073741823
          break
        case 4:
          Y = 1e4
          break
        default:
          Y = 5e3
      }
      return (
        (Y = z + Y),
        (j = {
          id: c++,
          callback: F,
          priorityLevel: j,
          startTime: z,
          expirationTime: Y,
          sortIndex: -1,
        }),
        z > K
          ? ((j.sortIndex = z),
            t(u, j),
            n(s) === null &&
              j === n(u) &&
              (y ? (v(T), (T = -1)) : (y = !0), ie(S, z - K)))
          : ((j.sortIndex = Y), t(s, j), x || g || ((x = !0), ne(E))),
        j
      )
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (j) {
      var F = p
      return function () {
        var z = p
        p = F
        try {
          return j.apply(this, arguments)
        } finally {
          p = z
        }
      }
    })
})(Rm)
Nm.exports = Rm
var p0 = Nm.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm = d,
  it = p0
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var _m = new Set(),
  Do = {}
function lr(e, t) {
  Ar(e, t), Ar(e + 'Capture', t)
}
function Ar(e, t) {
  for (Do[e] = t, e = 0; e < t.length; e++) _m.add(t[e])
}
var Gt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  tu = Object.prototype.hasOwnProperty,
  m0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  df = {},
  ff = {}
function h0(e) {
  return tu.call(ff, e)
    ? !0
    : tu.call(df, e)
    ? !1
    : m0.test(e)
    ? (ff[e] = !0)
    : ((df[e] = !0), !1)
}
function v0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function g0(e, t, n, r) {
  if (t === null || typeof t > 'u' || v0(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Qe(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var Ie = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Qe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ie[t] = new Qe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ie[e] = new Qe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new Qe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ie[e] = new Qe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new Qe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var $c = /[\-:]([a-z])/g
function kc(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($c, kc)
    Ie[t] = new Qe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($c, kc)
    Ie[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace($c, kc)
  Ie[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ie.xlinkHref = new Qe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Nc(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (g0(t, n, o, r) && (n = null),
    r || o === null
      ? h0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rn = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oi = Symbol.for('react.element'),
  dr = Symbol.for('react.portal'),
  fr = Symbol.for('react.fragment'),
  Rc = Symbol.for('react.strict_mode'),
  nu = Symbol.for('react.profiler'),
  Lm = Symbol.for('react.provider'),
  Am = Symbol.for('react.context'),
  jc = Symbol.for('react.forward_ref'),
  ru = Symbol.for('react.suspense'),
  ou = Symbol.for('react.suspense_list'),
  _c = Symbol.for('react.memo'),
  un = Symbol.for('react.lazy'),
  Im = Symbol.for('react.offscreen'),
  pf = Symbol.iterator
function ao(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pf && e[pf]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var ve = Object.assign,
  ts
function So(e) {
  if (ts === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ts = (t && t[1]) || ''
    }
  return (
    `
` +
    ts +
    e
  )
}
var ns = !1
function rs(e, t) {
  if (!e || ns) return ''
  ns = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= l && 0 <= a)
          break
        }
    }
  } finally {
    ;(ns = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? So(e) : ''
}
function y0(e) {
  switch (e.tag) {
    case 5:
      return So(e.type)
    case 16:
      return So('Lazy')
    case 13:
      return So('Suspense')
    case 19:
      return So('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = rs(e.type, !1)), e
    case 11:
      return (e = rs(e.type.render, !1)), e
    case 1:
      return (e = rs(e.type, !0)), e
    default:
      return ''
  }
}
function iu(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case fr:
      return 'Fragment'
    case dr:
      return 'Portal'
    case nu:
      return 'Profiler'
    case Rc:
      return 'StrictMode'
    case ru:
      return 'Suspense'
    case ou:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Am:
        return (e.displayName || 'Context') + '.Consumer'
      case Lm:
        return (e._context.displayName || 'Context') + '.Provider'
      case jc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case _c:
        return (
          (t = e.displayName || null), t !== null ? t : iu(e.type) || 'Memo'
        )
      case un:
        ;(t = e._payload), (e = e._init)
        try {
          return iu(e(t))
        } catch {}
    }
  return null
}
function x0(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return iu(t)
    case 8:
      return t === Rc ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Nn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Dm(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function w0(e) {
  var t = Dm(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (l) {
          ;(r = '' + l), i.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function $i(e) {
  e._valueTracker || (e._valueTracker = w0(e))
}
function Fm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Dm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function hl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function lu(e, t) {
  var n = t.checked
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function mf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Mm(e, t) {
  ;(t = t.checked), t != null && Nc(e, 'checked', t, !1)
}
function au(e, t) {
  Mm(e, t)
  var n = Nn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? su(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && su(e, t.type, Nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function hf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function su(e, t, n) {
  ;(t !== 'number' || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Eo = Array.isArray
function Cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Nn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91))
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function vf(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92))
      if (Eo(n)) {
        if (1 < n.length) throw Error(N(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Nn(n) }
}
function Um(e, t) {
  var n = Nn(t.value),
    r = Nn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function gf(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function zm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function cu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? zm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ki,
  Bm = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ki = ki || document.createElement('div'),
          ki.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Fo(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var $o = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  b0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys($o).forEach(function (e) {
  b0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($o[t] = $o[e])
  })
})
function Hm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || ($o.hasOwnProperty(e) && $o[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Vm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Hm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var S0 = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function du(e, t) {
  if (t) {
    if (S0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62))
  }
}
function fu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var pu = null
function Lc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var mu = null,
  Tr = null,
  Pr = null
function yf(e) {
  if ((e = di(e))) {
    if (typeof mu != 'function') throw Error(N(280))
    var t = e.stateNode
    t && ((t = oa(t)), mu(e.stateNode, e.type, t))
  }
}
function Wm(e) {
  Tr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Tr = e)
}
function Km() {
  if (Tr) {
    var e = Tr,
      t = Pr
    if (((Pr = Tr = null), yf(e), t)) for (e = 0; e < t.length; e++) yf(t[e])
  }
}
function Qm(e, t) {
  return e(t)
}
function qm() {}
var os = !1
function Ym(e, t, n) {
  if (os) return e(t, n)
  os = !0
  try {
    return Qm(e, t, n)
  } finally {
    ;(os = !1), (Tr !== null || Pr !== null) && (qm(), Km())
  }
}
function Mo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = oa(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n))
  return n
}
var hu = !1
if (Gt)
  try {
    var so = {}
    Object.defineProperty(so, 'passive', {
      get: function () {
        hu = !0
      },
    }),
      window.addEventListener('test', so, so),
      window.removeEventListener('test', so, so)
  } catch {
    hu = !1
  }
function E0(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var ko = !1,
  vl = null,
  gl = !1,
  vu = null,
  C0 = {
    onError: function (e) {
      ;(ko = !0), (vl = e)
    },
  }
function T0(e, t, n, r, o, i, l, a, s) {
  ;(ko = !1), (vl = null), E0.apply(C0, arguments)
}
function P0(e, t, n, r, o, i, l, a, s) {
  if ((T0.apply(this, arguments), ko)) {
    if (ko) {
      var u = vl
      ;(ko = !1), (vl = null)
    } else throw Error(N(198))
    gl || ((gl = !0), (vu = u))
  }
}
function ar(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Jm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function xf(e) {
  if (ar(e) !== e) throw Error(N(188))
}
function O0(e) {
  var t = e.alternate
  if (!t) {
    if (((t = ar(e)), t === null)) throw Error(N(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xf(o), e
        if (i === r) return xf(o), t
        i = i.sibling
      }
      throw Error(N(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          ;(l = !0), (n = o), (r = i)
          break
        }
        if (a === r) {
          ;(l = !0), (r = o), (n = i)
          break
        }
        a = a.sibling
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            ;(l = !0), (n = i), (r = o)
            break
          }
          if (a === r) {
            ;(l = !0), (r = i), (n = o)
            break
          }
          a = a.sibling
        }
        if (!l) throw Error(N(189))
      }
    }
    if (n.alternate !== r) throw Error(N(190))
  }
  if (n.tag !== 3) throw Error(N(188))
  return n.stateNode.current === n ? e : t
}
function Gm(e) {
  return (e = O0(e)), e !== null ? Xm(e) : null
}
function Xm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Xm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Zm = it.unstable_scheduleCallback,
  wf = it.unstable_cancelCallback,
  $0 = it.unstable_shouldYield,
  k0 = it.unstable_requestPaint,
  we = it.unstable_now,
  N0 = it.unstable_getCurrentPriorityLevel,
  Ac = it.unstable_ImmediatePriority,
  eh = it.unstable_UserBlockingPriority,
  yl = it.unstable_NormalPriority,
  R0 = it.unstable_LowPriority,
  th = it.unstable_IdlePriority,
  ea = null,
  It = null
function j0(e) {
  if (It && typeof It.onCommitFiberRoot == 'function')
    try {
      It.onCommitFiberRoot(ea, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ot = Math.clz32 ? Math.clz32 : A0,
  _0 = Math.log,
  L0 = Math.LN2
function A0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_0(e) / L0) | 0)) | 0
}
var Ni = 64,
  Ri = 4194304
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function xl(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var a = l & ~o
    a !== 0 ? (r = Co(a)) : ((i &= l), i !== 0 && (r = Co(i)))
  } else (l = n & ~o), l !== 0 ? (r = Co(l)) : i !== 0 && (r = Co(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function I0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function D0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Ot(i),
      a = 1 << l,
      s = o[l]
    s === -1
      ? (!(a & n) || a & r) && (o[l] = I0(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a)
  }
}
function gu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function nh() {
  var e = Ni
  return (Ni <<= 1), !(Ni & 4194240) && (Ni = 64), e
}
function is(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ui(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ot(t)),
    (e[t] = n)
}
function F0(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ot(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Ic(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ot(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var ee = 0
function rh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var oh,
  Dc,
  ih,
  lh,
  ah,
  yu = !1,
  ji = [],
  yn = null,
  xn = null,
  wn = null,
  Uo = new Map(),
  zo = new Map(),
  dn = [],
  M0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function bf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      yn = null
      break
    case 'dragenter':
    case 'dragleave':
      xn = null
      break
    case 'mouseover':
    case 'mouseout':
      wn = null
      break
    case 'pointerover':
    case 'pointerout':
      Uo.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      zo.delete(t.pointerId)
  }
}
function uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = di(t)), t !== null && Dc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function U0(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (yn = uo(yn, e, t, n, r, o)), !0
    case 'dragenter':
      return (xn = uo(xn, e, t, n, r, o)), !0
    case 'mouseover':
      return (wn = uo(wn, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Uo.set(i, uo(Uo.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), zo.set(i, uo(zo.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function sh(e) {
  var t = Wn(e.target)
  if (t !== null) {
    var n = ar(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jm(n)), t !== null)) {
          ;(e.blockedOn = t),
            ah(e.priority, function () {
              ih(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ji(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(pu = r), n.target.dispatchEvent(r), (pu = null)
    } else return (t = di(n)), t !== null && Dc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Sf(e, t, n) {
  Ji(e) && n.delete(t)
}
function z0() {
  ;(yu = !1),
    yn !== null && Ji(yn) && (yn = null),
    xn !== null && Ji(xn) && (xn = null),
    wn !== null && Ji(wn) && (wn = null),
    Uo.forEach(Sf),
    zo.forEach(Sf)
}
function co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yu ||
      ((yu = !0), it.unstable_scheduleCallback(it.unstable_NormalPriority, z0)))
}
function Bo(e) {
  function t(o) {
    return co(o, e)
  }
  if (0 < ji.length) {
    co(ji[0], e)
    for (var n = 1; n < ji.length; n++) {
      var r = ji[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    yn !== null && co(yn, e),
      xn !== null && co(xn, e),
      wn !== null && co(wn, e),
      Uo.forEach(t),
      zo.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    sh(n), n.blockedOn === null && dn.shift()
}
var Or = rn.ReactCurrentBatchConfig,
  wl = !0
function B0(e, t, n, r) {
  var o = ee,
    i = Or.transition
  Or.transition = null
  try {
    ;(ee = 1), Fc(e, t, n, r)
  } finally {
    ;(ee = o), (Or.transition = i)
  }
}
function H0(e, t, n, r) {
  var o = ee,
    i = Or.transition
  Or.transition = null
  try {
    ;(ee = 4), Fc(e, t, n, r)
  } finally {
    ;(ee = o), (Or.transition = i)
  }
}
function Fc(e, t, n, r) {
  if (wl) {
    var o = xu(e, t, n, r)
    if (o === null) hs(e, t, r, bl, n), bf(e, r)
    else if (U0(o, e, t, n, r)) r.stopPropagation()
    else if ((bf(e, r), t & 4 && -1 < M0.indexOf(e))) {
      for (; o !== null; ) {
        var i = di(o)
        if (
          (i !== null && oh(i),
          (i = xu(e, t, n, r)),
          i === null && hs(e, t, r, bl, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else hs(e, t, r, null, n)
  }
}
var bl = null
function xu(e, t, n, r) {
  if (((bl = null), (e = Lc(r)), (e = Wn(e)), e !== null))
    if (((t = ar(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Jm(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (bl = e), null
}
function uh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (N0()) {
        case Ac:
          return 1
        case eh:
          return 4
        case yl:
        case R0:
          return 16
        case th:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var hn = null,
  Mc = null,
  Gi = null
function ch() {
  if (Gi) return Gi
  var e,
    t = Mc,
    n = t.length,
    r,
    o = 'value' in hn ? hn.value : hn.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Gi = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Xi(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function _i() {
  return !0
}
function Ef() {
  return !1
}
function st(e) {
  function t(n, r, o, i, l) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _i
        : Ef),
      (this.isPropagationStopped = Ef),
      this
    )
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = _i))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = _i))
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  )
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uc = st(Yr),
  ci = ve({}, Yr, { view: 0, detail: 0 }),
  V0 = st(ci),
  ls,
  as,
  fo,
  ta = ve({}, ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== fo &&
            (fo && e.type === 'mousemove'
              ? ((ls = e.screenX - fo.screenX), (as = e.screenY - fo.screenY))
              : (as = ls = 0),
            (fo = e)),
          ls)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : as
    },
  }),
  Cf = st(ta),
  W0 = ve({}, ta, { dataTransfer: 0 }),
  K0 = st(W0),
  Q0 = ve({}, ci, { relatedTarget: 0 }),
  ss = st(Q0),
  q0 = ve({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y0 = st(q0),
  J0 = ve({}, Yr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  G0 = st(J0),
  X0 = ve({}, Yr, { data: 0 }),
  Tf = st(X0),
  Z0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  ex = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  tx = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function nx(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = tx[e]) ? !!t[e] : !1
}
function zc() {
  return nx
}
var rx = ve({}, ci, {
    key: function (e) {
      if (e.key) {
        var t = Z0[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Xi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ex[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zc,
    charCode: function (e) {
      return e.type === 'keypress' ? Xi(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  ox = st(rx),
  ix = ve({}, ta, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pf = st(ix),
  lx = ve({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc,
  }),
  ax = st(lx),
  sx = ve({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ux = st(sx),
  cx = ve({}, ta, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  dx = st(cx),
  fx = [9, 13, 27, 32],
  Bc = Gt && 'CompositionEvent' in window,
  No = null
Gt && 'documentMode' in document && (No = document.documentMode)
var px = Gt && 'TextEvent' in window && !No,
  dh = Gt && (!Bc || (No && 8 < No && 11 >= No)),
  Of = String.fromCharCode(32),
  $f = !1
function fh(e, t) {
  switch (e) {
    case 'keyup':
      return fx.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function ph(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var pr = !1
function mx(e, t) {
  switch (e) {
    case 'compositionend':
      return ph(t)
    case 'keypress':
      return t.which !== 32 ? null : (($f = !0), Of)
    case 'textInput':
      return (e = t.data), e === Of && $f ? null : e
    default:
      return null
  }
}
function hx(e, t) {
  if (pr)
    return e === 'compositionend' || (!Bc && fh(e, t))
      ? ((e = ch()), (Gi = Mc = hn = null), (pr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return dh && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var vx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!vx[e.type] : t === 'textarea'
}
function mh(e, t, n, r) {
  Wm(r),
    (t = Sl(t, 'onChange')),
    0 < t.length &&
      ((n = new Uc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Ro = null,
  Ho = null
function gx(e) {
  Th(e, 0)
}
function na(e) {
  var t = vr(e)
  if (Fm(t)) return e
}
function yx(e, t) {
  if (e === 'change') return t
}
var hh = !1
if (Gt) {
  var us
  if (Gt) {
    var cs = 'oninput' in document
    if (!cs) {
      var Nf = document.createElement('div')
      Nf.setAttribute('oninput', 'return;'),
        (cs = typeof Nf.oninput == 'function')
    }
    us = cs
  } else us = !1
  hh = us && (!document.documentMode || 9 < document.documentMode)
}
function Rf() {
  Ro && (Ro.detachEvent('onpropertychange', vh), (Ho = Ro = null))
}
function vh(e) {
  if (e.propertyName === 'value' && na(Ho)) {
    var t = []
    mh(t, Ho, e, Lc(e)), Ym(gx, t)
  }
}
function xx(e, t, n) {
  e === 'focusin'
    ? (Rf(), (Ro = t), (Ho = n), Ro.attachEvent('onpropertychange', vh))
    : e === 'focusout' && Rf()
}
function wx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return na(Ho)
}
function bx(e, t) {
  if (e === 'click') return na(t)
}
function Sx(e, t) {
  if (e === 'input' || e === 'change') return na(t)
}
function Ex(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var kt = typeof Object.is == 'function' ? Object.is : Ex
function Vo(e, t) {
  if (kt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!tu.call(t, o) || !kt(e[o], t[o])) return !1
  }
  return !0
}
function jf(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function _f(e, t) {
  var n = jf(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = jf(n)
  }
}
function gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gh(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function yh() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = hl(e.document)
  }
  return t
}
function Hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Cx(e) {
  var t = yh(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = _f(n, i))
        var l = _f(n, r)
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Tx = Gt && 'documentMode' in document && 11 >= document.documentMode,
  mr = null,
  wu = null,
  jo = null,
  bu = !1
function Lf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  bu ||
    mr == null ||
    mr !== hl(r) ||
    ((r = mr),
    'selectionStart' in r && Hc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jo && Vo(jo, r)) ||
      ((jo = r),
      (r = Sl(wu, 'onSelect')),
      0 < r.length &&
        ((t = new Uc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mr))))
}
function Li(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var hr = {
    animationend: Li('Animation', 'AnimationEnd'),
    animationiteration: Li('Animation', 'AnimationIteration'),
    animationstart: Li('Animation', 'AnimationStart'),
    transitionend: Li('Transition', 'TransitionEnd'),
  },
  ds = {},
  xh = {}
Gt &&
  ((xh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  'TransitionEvent' in window || delete hr.transitionend.transition)
function ra(e) {
  if (ds[e]) return ds[e]
  if (!hr[e]) return e
  var t = hr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in xh) return (ds[e] = t[n])
  return e
}
var wh = ra('animationend'),
  bh = ra('animationiteration'),
  Sh = ra('animationstart'),
  Eh = ra('transitionend'),
  Ch = new Map(),
  Af =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function An(e, t) {
  Ch.set(e, t), lr(t, [e])
}
for (var fs = 0; fs < Af.length; fs++) {
  var ps = Af[fs],
    Px = ps.toLowerCase(),
    Ox = ps[0].toUpperCase() + ps.slice(1)
  An(Px, 'on' + Ox)
}
An(wh, 'onAnimationEnd')
An(bh, 'onAnimationIteration')
An(Sh, 'onAnimationStart')
An('dblclick', 'onDoubleClick')
An('focusin', 'onFocus')
An('focusout', 'onBlur')
An(Eh, 'onTransitionEnd')
Ar('onMouseEnter', ['mouseout', 'mouseover'])
Ar('onMouseLeave', ['mouseout', 'mouseover'])
Ar('onPointerEnter', ['pointerout', 'pointerover'])
Ar('onPointerLeave', ['pointerout', 'pointerover'])
lr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
lr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
lr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
lr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
lr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
lr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var To =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  $x = new Set('cancel close invalid load scroll toggle'.split(' ').concat(To))
function If(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), P0(r, t, void 0, e), (e.currentTarget = null)
}
function Th(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e
          If(o, a, u), (i = s)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e
          If(o, a, u), (i = s)
        }
    }
  }
  if (gl) throw ((e = vu), (gl = !1), (vu = null), e)
}
function se(e, t) {
  var n = t[Pu]
  n === void 0 && (n = t[Pu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Ph(t, e, 2, !1), n.add(r))
}
function ms(e, t, n) {
  var r = 0
  t && (r |= 4), Ph(n, e, r, t)
}
var Ai = '_reactListening' + Math.random().toString(36).slice(2)
function Wo(e) {
  if (!e[Ai]) {
    ;(e[Ai] = !0),
      _m.forEach(function (n) {
        n !== 'selectionchange' && ($x.has(n) || ms(n, !1, e), ms(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ai] || ((t[Ai] = !0), ms('selectionchange', !1, t))
  }
}
function Ph(e, t, n, r) {
  switch (uh(t)) {
    case 1:
      var o = B0
      break
    case 4:
      o = H0
      break
    default:
      o = Fc
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !hu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function hs(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return
            l = l.return
          }
        for (; a !== null; ) {
          if (((l = Wn(a)), l === null)) return
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  Ym(function () {
    var u = i,
      c = Lc(n),
      f = []
    e: {
      var p = Ch.get(e)
      if (p !== void 0) {
        var g = Uc,
          x = e
        switch (e) {
          case 'keypress':
            if (Xi(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = ox
            break
          case 'focusin':
            ;(x = 'focus'), (g = ss)
            break
          case 'focusout':
            ;(x = 'blur'), (g = ss)
            break
          case 'beforeblur':
          case 'afterblur':
            g = ss
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Cf
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = K0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = ax
            break
          case wh:
          case bh:
          case Sh:
            g = Y0
            break
          case Eh:
            g = ux
            break
          case 'scroll':
            g = V0
            break
          case 'wheel':
            g = dx
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = G0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Pf
        }
        var y = (t & 4) !== 0,
          b = !y && e === 'scroll',
          v = y ? (p !== null ? p + 'Capture' : null) : p
        y = []
        for (var h = u, w; h !== null; ) {
          w = h
          var S = w.stateNode
          if (
            (w.tag === 5 &&
              S !== null &&
              ((w = S),
              v !== null && ((S = Mo(h, v)), S != null && y.push(Ko(h, S, w)))),
            b)
          )
            break
          h = h.return
        }
        0 < y.length &&
          ((p = new g(p, x, null, n, c)), f.push({ event: p, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== pu &&
            (x = n.relatedTarget || n.fromElement) &&
            (Wn(x) || x[Xt]))
        )
          break e
        if (
          (g || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = u),
              (x = x ? Wn(x) : null),
              x !== null &&
                ((b = ar(x)), x !== b || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((y = Cf),
            (S = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Pf),
              (S = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (h = 'pointer')),
            (b = g == null ? p : vr(g)),
            (w = x == null ? p : vr(x)),
            (p = new y(S, h + 'leave', g, n, c)),
            (p.target = b),
            (p.relatedTarget = w),
            (S = null),
            Wn(c) === u &&
              ((y = new y(v, h + 'enter', x, n, c)),
              (y.target = w),
              (y.relatedTarget = b),
              (S = y)),
            (b = S),
            g && x)
          )
            t: {
              for (y = g, v = x, h = 0, w = y; w; w = ur(w)) h++
              for (w = 0, S = v; S; S = ur(S)) w++
              for (; 0 < h - w; ) (y = ur(y)), h--
              for (; 0 < w - h; ) (v = ur(v)), w--
              for (; h--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t
                ;(y = ur(y)), (v = ur(v))
              }
              y = null
            }
          else y = null
          g !== null && Df(f, p, g, y, !1),
            x !== null && b !== null && Df(f, b, x, y, !0)
        }
      }
      e: {
        if (
          ((p = u ? vr(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var E = yx
        else if (kf(p))
          if (hh) E = Sx
          else {
            E = wx
            var C = xx
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = bx)
        if (E && (E = E(e, u))) {
          mh(f, E, n, c)
          break e
        }
        C && C(e, p, u),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            su(p, 'number', p.value)
      }
      switch (((C = u ? vr(u) : window), e)) {
        case 'focusin':
          ;(kf(C) || C.contentEditable === 'true') &&
            ((mr = C), (wu = u), (jo = null))
          break
        case 'focusout':
          jo = wu = mr = null
          break
        case 'mousedown':
          bu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(bu = !1), Lf(f, n, c)
          break
        case 'selectionchange':
          if (Tx) break
        case 'keydown':
        case 'keyup':
          Lf(f, n, c)
      }
      var O
      if (Bc)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        pr
          ? fh(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (dh &&
          n.locale !== 'ko' &&
          (pr || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && pr && (O = ch())
            : ((hn = c),
              (Mc = 'value' in hn ? hn.value : hn.textContent),
              (pr = !0))),
        (C = Sl(u, T)),
        0 < C.length &&
          ((T = new Tf(T, e, null, n, c)),
          f.push({ event: T, listeners: C }),
          O ? (T.data = O) : ((O = ph(n)), O !== null && (T.data = O)))),
        (O = px ? mx(e, n) : hx(e, n)) &&
          ((u = Sl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Tf('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = O)))
    }
    Th(f, t)
  })
}
function Ko(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Sl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Mo(e, n)),
      i != null && r.unshift(Ko(e, i, o)),
      (i = Mo(e, t)),
      i != null && r.push(Ko(e, i, o))),
      (e = e.return)
  }
  return r
}
function ur(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Df(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode
    if (s !== null && s === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Mo(n, i)), s != null && l.unshift(Ko(n, s, a)))
        : o || ((s = Mo(n, i)), s != null && l.push(Ko(n, s, a)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var kx = /\r\n?/g,
  Nx = /\u0000|\uFFFD/g
function Ff(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      kx,
      `
`
    )
    .replace(Nx, '')
}
function Ii(e, t, n) {
  if (((t = Ff(t)), Ff(e) !== t && n)) throw Error(N(425))
}
function El() {}
var Su = null,
  Eu = null
function Cu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Tu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Rx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Mf = typeof Promise == 'function' ? Promise : void 0,
  jx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Mf < 'u'
      ? function (e) {
          return Mf.resolve(null).then(e).catch(_x)
        }
      : Tu
function _x(e) {
  setTimeout(function () {
    throw e
  })
}
function vs(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Bo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Bo(t)
}
function bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Uf(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Jr = Math.random().toString(36).slice(2),
  Lt = '__reactFiber$' + Jr,
  Qo = '__reactProps$' + Jr,
  Xt = '__reactContainer$' + Jr,
  Pu = '__reactEvents$' + Jr,
  Lx = '__reactListeners$' + Jr,
  Ax = '__reactHandles$' + Jr
function Wn(e) {
  var t = e[Lt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xt] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uf(e); e !== null; ) {
          if ((n = e[Lt])) return n
          e = Uf(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function di(e) {
  return (
    (e = e[Lt] || e[Xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(N(33))
}
function oa(e) {
  return e[Qo] || null
}
var Ou = [],
  gr = -1
function In(e) {
  return { current: e }
}
function ue(e) {
  0 > gr || ((e.current = Ou[gr]), (Ou[gr] = null), gr--)
}
function le(e, t) {
  gr++, (Ou[gr] = e.current), (e.current = t)
}
var Rn = {},
  Be = In(Rn),
  Xe = In(!1),
  Xn = Rn
function Ir(e, t) {
  var n = e.type.contextTypes
  if (!n) return Rn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ze(e) {
  return (e = e.childContextTypes), e != null
}
function Cl() {
  ue(Xe), ue(Be)
}
function zf(e, t, n) {
  if (Be.current !== Rn) throw Error(N(168))
  le(Be, t), le(Xe, n)
}
function Oh(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(N(108, x0(e) || 'Unknown', o))
  return ve({}, n, r)
}
function Tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
    (Xn = Be.current),
    le(Be, e),
    le(Xe, Xe.current),
    !0
  )
}
function Bf(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(N(169))
  n
    ? ((e = Oh(e, t, Xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Xe),
      ue(Be),
      le(Be, e))
    : ue(Xe),
    le(Xe, n)
}
var Vt = null,
  ia = !1,
  gs = !1
function $h(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e)
}
function Ix(e) {
  ;(ia = !0), $h(e)
}
function Dn() {
  if (!gs && Vt !== null) {
    gs = !0
    var e = 0,
      t = ee
    try {
      var n = Vt
      for (ee = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Vt = null), (ia = !1)
    } catch (o) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), Zm(Ac, Dn), o)
    } finally {
      ;(ee = t), (gs = !1)
    }
  }
  return null
}
var yr = [],
  xr = 0,
  Pl = null,
  Ol = 0,
  ft = [],
  pt = 0,
  Zn = null,
  Wt = 1,
  Kt = ''
function Un(e, t) {
  ;(yr[xr++] = Ol), (yr[xr++] = Pl), (Pl = e), (Ol = t)
}
function kh(e, t, n) {
  ;(ft[pt++] = Wt), (ft[pt++] = Kt), (ft[pt++] = Zn), (Zn = e)
  var r = Wt
  e = Kt
  var o = 32 - Ot(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - Ot(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Wt = (1 << (32 - Ot(t) + o)) | (n << o) | r),
      (Kt = i + e)
  } else (Wt = (1 << i) | (n << o) | r), (Kt = e)
}
function Vc(e) {
  e.return !== null && (Un(e, 1), kh(e, 1, 0))
}
function Wc(e) {
  for (; e === Pl; )
    (Pl = yr[--xr]), (yr[xr] = null), (Ol = yr[--xr]), (yr[xr] = null)
  for (; e === Zn; )
    (Zn = ft[--pt]),
      (ft[pt] = null),
      (Kt = ft[--pt]),
      (ft[pt] = null),
      (Wt = ft[--pt]),
      (ft[pt] = null)
}
var ot = null,
  rt = null,
  fe = !1,
  Tt = null
function Nh(e, t) {
  var n = mt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Hf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (rt = bn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (rt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zn !== null ? { id: Wt, overflow: Kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (rt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function $u(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ku(e) {
  if (fe) {
    var t = rt
    if (t) {
      var n = t
      if (!Hf(e, t)) {
        if ($u(e)) throw Error(N(418))
        t = bn(n.nextSibling)
        var r = ot
        t && Hf(e, t)
          ? Nh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ot = e))
      }
    } else {
      if ($u(e)) throw Error(N(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (ot = e)
    }
  }
}
function Vf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ot = e
}
function Di(e) {
  if (e !== ot) return !1
  if (!fe) return Vf(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Cu(e.type, e.memoizedProps))),
    t && (t = rt))
  ) {
    if ($u(e)) throw (Rh(), Error(N(418)))
    for (; t; ) Nh(e, t), (t = bn(t.nextSibling))
  }
  if ((Vf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              rt = bn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      rt = null
    }
  } else rt = ot ? bn(e.stateNode.nextSibling) : null
  return !0
}
function Rh() {
  for (var e = rt; e; ) e = bn(e.nextSibling)
}
function Dr() {
  ;(rt = ot = null), (fe = !1)
}
function Kc(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e)
}
var Dx = rn.ReactCurrentBatchConfig
function St(e, t) {
  if (e && e.defaultProps) {
    ;(t = ve({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var $l = In(null),
  kl = null,
  wr = null,
  Qc = null
function qc() {
  Qc = wr = kl = null
}
function Yc(e) {
  var t = $l.current
  ue($l), (e._currentValue = t)
}
function Nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function $r(e, t) {
  ;(kl = e),
    (Qc = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null))
}
function yt(e) {
  var t = e._currentValue
  if (Qc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (kl === null) throw Error(N(308))
      ;(wr = e), (kl.dependencies = { lanes: 0, firstContext: e })
    } else wr = wr.next = e
  return t
}
var Kn = null
function Jc(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e)
}
function jh(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Jc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Zt(e, r)
  )
}
function Zt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var cn = !1
function Gc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function _h(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Sn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), X & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Zt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Jc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Zt(e, n)
  )
}
function Zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ic(e, n)
  }
}
function Wf(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Nl(e, t, n, r) {
  var o = e.updateQueue
  cn = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending
  if (a !== null) {
    o.shared.pending = null
    var s = a,
      u = s.next
    ;(s.next = null), l === null ? (i = u) : (l.next = u), (l = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(l = 0), (c = u = s = null), (a = i)
    do {
      var p = a.lane,
        g = a.eventTime
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var x = e,
            y = a
          switch (((p = t), (g = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == 'function')) {
                f = x.call(g, f, p)
                break e
              }
              f = x
              break e
            case 3:
              x.flags = (x.flags & -65537) | 128
            case 0:
              if (
                ((x = y.payload),
                (p = typeof x == 'function' ? x.call(g, f, p) : x),
                p == null)
              )
                break e
              f = ve({}, f, p)
              break e
            case 2:
              cn = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a))
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
          (l |= p)
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break
        ;(p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (l |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(tr |= l), (e.lanes = l), (e.memoizedState = f)
  }
}
function Kf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(N(191, o))
        o.call(r)
      }
    }
}
var Lh = new jm.Component().refs
function Ru(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var la = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      o = Cn(e),
      i = qt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && ($t(t, e, o, r), Zi(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      o = Cn(e),
      i = qt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && ($t(t, e, o, r), Zi(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = We(),
      r = Cn(e),
      o = qt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Sn(e, o, r)),
      t !== null && ($t(t, e, r, n), Zi(t, e, r))
  },
}
function Qf(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vo(n, r) || !Vo(o, i)
      : !0
  )
}
function Ah(e, t, n) {
  var r = !1,
    o = Rn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = yt(i))
      : ((o = Ze(t) ? Xn : Be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ir(e, o) : Rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = la),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function qf(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && la.enqueueReplaceState(t, t.state, null)
}
function ju(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Lh), Gc(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = yt(i))
    : ((i = Ze(t) ? Xn : Be.current), (o.context = Ir(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ru(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && la.enqueueReplaceState(o, o.state, null),
      Nl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function po(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309))
        var r = n.stateNode
      }
      if (!r) throw Error(N(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs
            a === Lh && (a = o.refs = {}), l === null ? delete a[i] : (a[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(N(284))
    if (!n._owner) throw Error(N(290, e))
  }
  return e
}
function Fi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Yf(e) {
  var t = e._init
  return t(e._payload)
}
function Ih(e) {
  function t(v, h) {
    if (e) {
      var w = v.deletions
      w === null ? ((v.deletions = [h]), (v.flags |= 16)) : w.push(h)
    }
  }
  function n(v, h) {
    if (!e) return null
    for (; h !== null; ) t(v, h), (h = h.sibling)
    return null
  }
  function r(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling)
    return v
  }
  function o(v, h) {
    return (v = Tn(v, h)), (v.index = 0), (v.sibling = null), v
  }
  function i(v, h, w) {
    return (
      (v.index = w),
      e
        ? ((w = v.alternate),
          w !== null
            ? ((w = w.index), w < h ? ((v.flags |= 2), h) : w)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    )
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v
  }
  function a(v, h, w, S) {
    return h === null || h.tag !== 6
      ? ((h = Cs(w, v.mode, S)), (h.return = v), h)
      : ((h = o(h, w)), (h.return = v), h)
  }
  function s(v, h, w, S) {
    var E = w.type
    return E === fr
      ? c(v, h, w.props.children, S, w.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === un &&
            Yf(E) === h.type))
      ? ((S = o(h, w.props)), (S.ref = po(v, h, w)), (S.return = v), S)
      : ((S = il(w.type, w.key, w.props, null, v.mode, S)),
        (S.ref = po(v, h, w)),
        (S.return = v),
        S)
  }
  function u(v, h, w, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== w.containerInfo ||
      h.stateNode.implementation !== w.implementation
      ? ((h = Ts(w, v.mode, S)), (h.return = v), h)
      : ((h = o(h, w.children || [])), (h.return = v), h)
  }
  function c(v, h, w, S, E) {
    return h === null || h.tag !== 7
      ? ((h = Jn(w, v.mode, S, E)), (h.return = v), h)
      : ((h = o(h, w)), (h.return = v), h)
  }
  function f(v, h, w) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Cs('' + h, v.mode, w)), (h.return = v), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Oi:
          return (
            (w = il(h.type, h.key, h.props, null, v.mode, w)),
            (w.ref = po(v, null, h)),
            (w.return = v),
            w
          )
        case dr:
          return (h = Ts(h, v.mode, w)), (h.return = v), h
        case un:
          var S = h._init
          return f(v, S(h._payload), w)
      }
      if (Eo(h) || ao(h)) return (h = Jn(h, v.mode, w, null)), (h.return = v), h
      Fi(v, h)
    }
    return null
  }
  function p(v, h, w, S) {
    var E = h !== null ? h.key : null
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return E !== null ? null : a(v, h, '' + w, S)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Oi:
          return w.key === E ? s(v, h, w, S) : null
        case dr:
          return w.key === E ? u(v, h, w, S) : null
        case un:
          return (E = w._init), p(v, h, E(w._payload), S)
      }
      if (Eo(w) || ao(w)) return E !== null ? null : c(v, h, w, S, null)
      Fi(v, w)
    }
    return null
  }
  function g(v, h, w, S, E) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (v = v.get(w) || null), a(h, v, '' + S, E)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Oi:
          return (v = v.get(S.key === null ? w : S.key) || null), s(h, v, S, E)
        case dr:
          return (v = v.get(S.key === null ? w : S.key) || null), u(h, v, S, E)
        case un:
          var C = S._init
          return g(v, h, w, C(S._payload), E)
      }
      if (Eo(S) || ao(S)) return (v = v.get(w) || null), c(h, v, S, E, null)
      Fi(h, S)
    }
    return null
  }
  function x(v, h, w, S) {
    for (
      var E = null, C = null, O = h, T = (h = 0), k = null;
      O !== null && T < w.length;
      T++
    ) {
      O.index > T ? ((k = O), (O = null)) : (k = O.sibling)
      var $ = p(v, O, w[T], S)
      if ($ === null) {
        O === null && (O = k)
        break
      }
      e && O && $.alternate === null && t(v, O),
        (h = i($, h, T)),
        C === null ? (E = $) : (C.sibling = $),
        (C = $),
        (O = k)
    }
    if (T === w.length) return n(v, O), fe && Un(v, T), E
    if (O === null) {
      for (; T < w.length; T++)
        (O = f(v, w[T], S)),
          O !== null &&
            ((h = i(O, h, T)), C === null ? (E = O) : (C.sibling = O), (C = O))
      return fe && Un(v, T), E
    }
    for (O = r(v, O); T < w.length; T++)
      (k = g(O, v, T, w[T], S)),
        k !== null &&
          (e && k.alternate !== null && O.delete(k.key === null ? T : k.key),
          (h = i(k, h, T)),
          C === null ? (E = k) : (C.sibling = k),
          (C = k))
    return (
      e &&
        O.forEach(function (R) {
          return t(v, R)
        }),
      fe && Un(v, T),
      E
    )
  }
  function y(v, h, w, S) {
    var E = ao(w)
    if (typeof E != 'function') throw Error(N(150))
    if (((w = E.call(w)), w == null)) throw Error(N(151))
    for (
      var C = (E = null), O = h, T = (h = 0), k = null, $ = w.next();
      O !== null && !$.done;
      T++, $ = w.next()
    ) {
      O.index > T ? ((k = O), (O = null)) : (k = O.sibling)
      var R = p(v, O, $.value, S)
      if (R === null) {
        O === null && (O = k)
        break
      }
      e && O && R.alternate === null && t(v, O),
        (h = i(R, h, T)),
        C === null ? (E = R) : (C.sibling = R),
        (C = R),
        (O = k)
    }
    if ($.done) return n(v, O), fe && Un(v, T), E
    if (O === null) {
      for (; !$.done; T++, $ = w.next())
        ($ = f(v, $.value, S)),
          $ !== null &&
            ((h = i($, h, T)), C === null ? (E = $) : (C.sibling = $), (C = $))
      return fe && Un(v, T), E
    }
    for (O = r(v, O); !$.done; T++, $ = w.next())
      ($ = g(O, v, T, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? T : $.key),
          (h = i($, h, T)),
          C === null ? (E = $) : (C.sibling = $),
          (C = $))
    return (
      e &&
        O.forEach(function (H) {
          return t(v, H)
        }),
      fe && Un(v, T),
      E
    )
  }
  function b(v, h, w, S) {
    if (
      (typeof w == 'object' &&
        w !== null &&
        w.type === fr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == 'object' && w !== null)
    ) {
      switch (w.$$typeof) {
        case Oi:
          e: {
            for (var E = w.key, C = h; C !== null; ) {
              if (C.key === E) {
                if (((E = w.type), E === fr)) {
                  if (C.tag === 7) {
                    n(v, C.sibling),
                      (h = o(C, w.props.children)),
                      (h.return = v),
                      (v = h)
                    break e
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === un &&
                    Yf(E) === C.type)
                ) {
                  n(v, C.sibling),
                    (h = o(C, w.props)),
                    (h.ref = po(v, C, w)),
                    (h.return = v),
                    (v = h)
                  break e
                }
                n(v, C)
                break
              } else t(v, C)
              C = C.sibling
            }
            w.type === fr
              ? ((h = Jn(w.props.children, v.mode, S, w.key)),
                (h.return = v),
                (v = h))
              : ((S = il(w.type, w.key, w.props, null, v.mode, S)),
                (S.ref = po(v, h, w)),
                (S.return = v),
                (v = S))
          }
          return l(v)
        case dr:
          e: {
            for (C = w.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === w.containerInfo &&
                  h.stateNode.implementation === w.implementation
                ) {
                  n(v, h.sibling),
                    (h = o(h, w.children || [])),
                    (h.return = v),
                    (v = h)
                  break e
                } else {
                  n(v, h)
                  break
                }
              else t(v, h)
              h = h.sibling
            }
            ;(h = Ts(w, v.mode, S)), (h.return = v), (v = h)
          }
          return l(v)
        case un:
          return (C = w._init), b(v, h, C(w._payload), S)
      }
      if (Eo(w)) return x(v, h, w, S)
      if (ao(w)) return y(v, h, w, S)
      Fi(v, w)
    }
    return (typeof w == 'string' && w !== '') || typeof w == 'number'
      ? ((w = '' + w),
        h !== null && h.tag === 6
          ? (n(v, h.sibling), (h = o(h, w)), (h.return = v), (v = h))
          : (n(v, h), (h = Cs(w, v.mode, S)), (h.return = v), (v = h)),
        l(v))
      : n(v, h)
  }
  return b
}
var Fr = Ih(!0),
  Dh = Ih(!1),
  fi = {},
  Dt = In(fi),
  qo = In(fi),
  Yo = In(fi)
function Qn(e) {
  if (e === fi) throw Error(N(174))
  return e
}
function Xc(e, t) {
  switch ((le(Yo, t), le(qo, e), le(Dt, fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cu(t, e))
  }
  ue(Dt), le(Dt, t)
}
function Mr() {
  ue(Dt), ue(qo), ue(Yo)
}
function Fh(e) {
  Qn(Yo.current)
  var t = Qn(Dt.current),
    n = cu(t, e.type)
  t !== n && (le(qo, e), le(Dt, n))
}
function Zc(e) {
  qo.current === e && (ue(Dt), ue(qo))
}
var me = In(0)
function Rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ys = []
function ed() {
  for (var e = 0; e < ys.length; e++) ys[e]._workInProgressVersionPrimary = null
  ys.length = 0
}
var el = rn.ReactCurrentDispatcher,
  xs = rn.ReactCurrentBatchConfig,
  er = 0,
  he = null,
  Te = null,
  $e = null,
  jl = !1,
  _o = !1,
  Jo = 0,
  Fx = 0
function De() {
  throw Error(N(321))
}
function td(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1
  return !0
}
function nd(e, t, n, r, o, i) {
  if (
    ((er = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? Bx : Hx),
    (e = n(r, o)),
    _o)
  ) {
    i = 0
    do {
      if (((_o = !1), (Jo = 0), 25 <= i)) throw Error(N(301))
      ;(i += 1),
        ($e = Te = null),
        (t.updateQueue = null),
        (el.current = Vx),
        (e = n(r, o))
    } while (_o)
  }
  if (
    ((el.current = _l),
    (t = Te !== null && Te.next !== null),
    (er = 0),
    ($e = Te = he = null),
    (jl = !1),
    t)
  )
    throw Error(N(300))
  return e
}
function rd() {
  var e = Jo !== 0
  return (Jo = 0), e
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return $e === null ? (he.memoizedState = $e = e) : ($e = $e.next = e), $e
}
function xt() {
  if (Te === null) {
    var e = he.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Te.next
  var t = $e === null ? he.memoizedState : $e.next
  if (t !== null) ($e = t), (Te = e)
  else {
    if (e === null) throw Error(N(310))
    ;(Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      $e === null ? (he.memoizedState = $e = e) : ($e = $e.next = e)
  }
  return $e
}
function Go(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ws(e) {
  var t = xt(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = Te,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var l = o.next
      ;(o.next = i.next), (i.next = l)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var a = (l = null),
      s = null,
      u = i
    do {
      var c = u.lane
      if ((er & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        s === null ? ((a = s = f), (l = r)) : (s = s.next = f),
          (he.lanes |= c),
          (tr |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    s === null ? (l = r) : (s.next = a),
      kt(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (he.lanes |= i), (tr |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function bs(e) {
  var t = xt(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var l = (o = o.next)
    do (i = e(i, l.action)), (l = l.next)
    while (l !== o)
    kt(i, t.memoizedState) || (Ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Mh() {}
function Uh(e, t) {
  var n = he,
    r = xt(),
    o = t(),
    i = !kt(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Ge = !0)),
    (r = r.queue),
    od(Hh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xo(9, Bh.bind(null, n, r, o, t), void 0, null),
      ke === null)
    )
      throw Error(N(349))
    er & 30 || zh(n, t, o)
  }
  return o
}
function zh(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Bh(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Vh(t) && Wh(e)
}
function Hh(e, t, n) {
  return n(function () {
    Vh(t) && Wh(e)
  })
}
function Vh(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !kt(e, n)
  } catch {
    return !0
  }
}
function Wh(e) {
  var t = Zt(e, 1)
  t !== null && $t(t, e, 1, -1)
}
function Jf(e) {
  var t = _t()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zx.bind(null, he, e)),
    [t.memoizedState, e]
  )
}
function Xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Kh() {
  return xt().memoizedState
}
function tl(e, t, n, r) {
  var o = _t()
  ;(he.flags |= e),
    (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r))
}
function aa(e, t, n, r) {
  var o = xt()
  r = r === void 0 ? null : r
  var i = void 0
  if (Te !== null) {
    var l = Te.memoizedState
    if (((i = l.destroy), r !== null && td(r, l.deps))) {
      o.memoizedState = Xo(t, n, i, r)
      return
    }
  }
  ;(he.flags |= e), (o.memoizedState = Xo(1 | t, n, i, r))
}
function Gf(e, t) {
  return tl(8390656, 8, e, t)
}
function od(e, t) {
  return aa(2048, 8, e, t)
}
function Qh(e, t) {
  return aa(4, 2, e, t)
}
function qh(e, t) {
  return aa(4, 4, e, t)
}
function Yh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Jh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), aa(4, 4, Yh.bind(null, t, e), n)
  )
}
function id() {}
function Gh(e, t) {
  var n = xt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && td(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Xh(e, t) {
  var n = xt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && td(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Zh(e, t, n) {
  return er & 21
    ? (kt(n, t) || ((n = nh()), (he.lanes |= n), (tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n))
}
function Mx(e, t) {
  var n = ee
  ;(ee = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = xs.transition
  xs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ee = n), (xs.transition = r)
  }
}
function ev() {
  return xt().memoizedState
}
function Ux(e, t, n) {
  var r = Cn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tv(e))
  )
    nv(t, n)
  else if (((n = jh(e, t, n, r)), n !== null)) {
    var o = We()
    $t(n, e, r, o), rv(n, t, r)
  }
}
function zx(e, t, n) {
  var r = Cn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (tv(e)) nv(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n)
        if (((o.hasEagerState = !0), (o.eagerState = a), kt(a, l))) {
          var s = t.interleaved
          s === null
            ? ((o.next = o), Jc(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = jh(e, t, o, r)),
      n !== null && ((o = We()), $t(n, e, r, o), rv(n, t, r))
  }
}
function tv(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function nv(e, t) {
  _o = jl = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function rv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ic(e, n)
  }
}
var _l = {
    readContext: yt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Bx = {
    readContext: yt,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: yt,
    useEffect: Gf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        tl(4194308, 4, Yh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return tl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return tl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = _t()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = _t()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ux.bind(null, he, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = _t()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Jf,
    useDebugValue: id,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e)
    },
    useTransition: function () {
      var e = Jf(!1),
        t = e[0]
      return (e = Mx.bind(null, e[1])), (_t().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        o = _t()
      if (fe) {
        if (n === void 0) throw Error(N(407))
        n = n()
      } else {
        if (((n = t()), ke === null)) throw Error(N(349))
        er & 30 || zh(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        Gf(Hh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xo(9, Bh.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = _t(),
        t = ke.identifierPrefix
      if (fe) {
        var n = Kt,
          r = Wt
        ;(n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Jo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Fx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Hx = {
    readContext: yt,
    useCallback: Gh,
    useContext: yt,
    useEffect: od,
    useImperativeHandle: Jh,
    useInsertionEffect: Qh,
    useLayoutEffect: qh,
    useMemo: Xh,
    useReducer: ws,
    useRef: Kh,
    useState: function () {
      return ws(Go)
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = xt()
      return Zh(t, Te.memoizedState, e)
    },
    useTransition: function () {
      var e = ws(Go)[0],
        t = xt().memoizedState
      return [e, t]
    },
    useMutableSource: Mh,
    useSyncExternalStore: Uh,
    useId: ev,
    unstable_isNewReconciler: !1,
  },
  Vx = {
    readContext: yt,
    useCallback: Gh,
    useContext: yt,
    useEffect: od,
    useImperativeHandle: Jh,
    useInsertionEffect: Qh,
    useLayoutEffect: qh,
    useMemo: Xh,
    useReducer: bs,
    useRef: Kh,
    useState: function () {
      return bs(Go)
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = xt()
      return Te === null ? (t.memoizedState = e) : Zh(t, Te.memoizedState, e)
    },
    useTransition: function () {
      var e = bs(Go)[0],
        t = xt().memoizedState
      return [e, t]
    },
    useMutableSource: Mh,
    useSyncExternalStore: Uh,
    useId: ev,
    unstable_isNewReconciler: !1,
  }
function Ur(e, t) {
  try {
    var n = '',
      r = t
    do (n += y0(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function _u(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Wx = typeof WeakMap == 'function' ? WeakMap : Map
function ov(e, t, n) {
  ;(n = qt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Al || ((Al = !0), (Hu = r)), _u(e, t)
    }),
    n
  )
}
function iv(e, t, n) {
  ;(n = qt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        _u(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        _u(e, t),
          typeof r != 'function' &&
            (En === null ? (En = new Set([this])) : En.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Xf(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Wx()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = i1.bind(null, e, t, n)), t.then(e, e))
}
function Zf(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function ep(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qt(-1, 1)), (t.tag = 2), Sn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Kx = rn.ReactCurrentOwner,
  Ge = !1
function Ve(e, t, n, r) {
  t.child = e === null ? Dh(t, null, n, r) : Fr(t, e.child, n, r)
}
function tp(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    $r(t, o),
    (r = nd(e, t, n, r, i, o)),
    (n = rd()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (fe && n && Vc(t), (t.flags |= 1), Ve(e, t, r, o), t.child)
  )
}
function np(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !pd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), lv(e, t, i, r, o))
      : ((e = il(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Vo), n(l, r) && e.ref === t.ref)
    )
      return en(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function lv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Vo(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ge = !0)
      else return (t.lanes = e.lanes), en(e, t, o)
  }
  return Lu(e, t, n, r, o)
}
function av(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(Sr, tt),
        (tt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(Sr, tt),
          (tt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(Sr, tt),
        (tt |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(Sr, tt),
      (tt |= r)
  return Ve(e, t, o, n), t.child
}
function sv(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Lu(e, t, n, r, o) {
  var i = Ze(n) ? Xn : Be.current
  return (
    (i = Ir(t, i)),
    $r(t, o),
    (n = nd(e, t, n, r, i, o)),
    (r = rd()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (fe && r && Vc(t), (t.flags |= 1), Ve(e, t, n, o), t.child)
  )
}
function rp(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0
    Tl(t)
  } else i = !1
  if (($r(t, o), t.stateNode === null))
    nl(e, t), Ah(t, n, r), ju(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps
    l.props = a
    var s = l.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = yt(u))
      : ((u = Ze(n) ? Xn : Be.current), (u = Ir(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== r || s !== u) && qf(t, l, r, u)),
      (cn = !1)
    var p = t.memoizedState
    ;(l.state = p),
      Nl(t, r, l, o),
      (s = t.memoizedState),
      a !== r || p !== s || Xe.current || cn
        ? (typeof c == 'function' && (Ru(t, n, c, r), (s = t.memoizedState)),
          (a = cn || Qf(t, n, a, r, p, s, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      _h(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : St(t.type, a)),
      (l.props = u),
      (f = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = yt(s))
        : ((s = Ze(n) ? Xn : Be.current), (s = Ir(t, s)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== f || p !== s) && qf(t, l, r, s)),
      (cn = !1),
      (p = t.memoizedState),
      (l.state = p),
      Nl(t, r, l, o)
    var x = t.memoizedState
    a !== f || p !== x || Xe.current || cn
      ? (typeof g == 'function' && (Ru(t, n, g, r), (x = t.memoizedState)),
        (u = cn || Qf(t, n, u, r, p, x, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, x, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, x, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Au(e, t, n, r, i, o)
}
function Au(e, t, n, r, o, i) {
  sv(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && Bf(t, n, !1), en(e, t, i)
  ;(r = t.stateNode), (Kx.current = t)
  var a =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Fr(t, e.child, null, i)), (t.child = Fr(t, null, a, i)))
      : Ve(e, t, a, i),
    (t.memoizedState = r.state),
    o && Bf(t, n, !0),
    t.child
  )
}
function uv(e) {
  var t = e.stateNode
  t.pendingContext
    ? zf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zf(e, t.context, !1),
    Xc(e, t.containerInfo)
}
function op(e, t, n, r, o) {
  return Dr(), Kc(o), (t.flags |= 256), Ve(e, t, n, r), t.child
}
var Iu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Du(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function cv(e, t, n) {
  var r = t.pendingProps,
    o = me.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(me, o & 1),
    e === null)
  )
    return (
      ku(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = ca(l, r, 0, null)),
              (e = Jn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Du(n)),
              (t.memoizedState = Iu),
              e)
            : ld(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Qx(e, t, l, r, a, o, n)
  if (i) {
    ;(i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Tn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Tn(a, i)) : ((i = Jn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Du(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Iu),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function ld(e, t) {
  return (
    (t = ca({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Mi(e, t, n, r) {
  return (
    r !== null && Kc(r),
    Fr(t, e.child, null, n),
    (e = ld(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Qx(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ss(Error(N(422)))), Mi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ca({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Jn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Fr(t, e.child, null, l),
        (t.child.memoizedState = Du(l)),
        (t.memoizedState = Iu),
        i)
  if (!(t.mode & 1)) return Mi(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (i = Error(N(419))), (r = Ss(i, r, void 0)), Mi(e, t, l, r)
  }
  if (((a = (l & e.childLanes) !== 0), Ge || a)) {
    if (((r = ke), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Zt(e, o), $t(r, e, o, -1))
    }
    return fd(), (r = Ss(Error(N(421)))), Mi(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = l1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (rt = bn(o.nextSibling)),
      (ot = t),
      (fe = !0),
      (Tt = null),
      e !== null &&
        ((ft[pt++] = Wt),
        (ft[pt++] = Kt),
        (ft[pt++] = Zn),
        (Wt = e.id),
        (Kt = e.overflow),
        (Zn = t)),
      (t = ld(t, r.children)),
      (t.flags |= 4096),
      t)
}
function ip(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Nu(e.return, t, n)
}
function Es(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function dv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((Ve(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ip(e, n, t)
        else if (e.tag === 19) ip(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((le(me, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Rl(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Es(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Rl(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Es(t, !0, n, null, i)
        break
      case 'together':
        Es(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function en(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(N(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function qx(e, t, n) {
  switch (t.tag) {
    case 3:
      uv(t), Dr()
      break
    case 5:
      Fh(t)
      break
    case 1:
      Ze(t.type) && Tl(t)
      break
    case 4:
      Xc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      le($l, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? cv(e, t, n)
          : (le(me, me.current & 1),
            (e = en(e, t, n)),
            e !== null ? e.sibling : null)
      le(me, me.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dv(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(me, me.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), av(e, t, n)
  }
  return en(e, t, n)
}
var fv, Fu, pv, mv
fv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Fu = function () {}
pv = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Qn(Dt.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = lu(e, o)), (r = lu(e, r)), (i = [])
        break
      case 'select':
        ;(o = ve({}, o, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = uu(e, o)), (r = uu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = El)
    }
    du(n, r)
    var l
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u]
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Do.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var s = r[u]
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]))
          } else n || (i || (i = []), i.push(u, n)), (n = s)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(u, '' + s)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Do.hasOwnProperty(u)
                ? (s != null && u === 'onScroll' && se('scroll', e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s))
    }
    n && (i = i || []).push('style', n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
mv = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function mo(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Yx(e, t, n) {
  var r = t.pendingProps
  switch ((Wc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(t), null
    case 1:
      return Ze(t.type) && Cl(), Fe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Mr(),
        ue(Xe),
        ue(Be),
        ed(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Di(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (Ku(Tt), (Tt = null)))),
        Fu(e, t),
        Fe(t),
        null
      )
    case 5:
      Zc(t)
      var o = Qn(Yo.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        pv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166))
          return Fe(t), null
        }
        if (((e = Qn(Dt.current)), Di(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Lt] = t), (r[Qo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              se('cancel', r), se('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              se('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < To.length; o++) se(To[o], r)
              break
            case 'source':
              se('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              se('error', r), se('load', r)
              break
            case 'details':
              se('toggle', r)
              break
            case 'input':
              mf(r, i), se('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                se('invalid', r)
              break
            case 'textarea':
              vf(r, i), se('invalid', r)
          }
          du(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l]
              l === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Do.hasOwnProperty(l) &&
                  a != null &&
                  l === 'onScroll' &&
                  se('scroll', r)
            }
          switch (n) {
            case 'input':
              $i(r), hf(r, i, !0)
              break
            case 'textarea':
              $i(r), gf(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = El)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = zm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Lt] = t),
            (e[Qo] = r),
            fv(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = fu(n, r)), n)) {
              case 'dialog':
                se('cancel', e), se('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                se('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < To.length; o++) se(To[o], e)
                o = r
                break
              case 'source':
                se('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                se('error', e), se('load', e), (o = r)
                break
              case 'details':
                se('toggle', e), (o = r)
                break
              case 'input':
                mf(e, r), (o = lu(e, r)), se('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ve({}, r, { value: void 0 })),
                  se('invalid', e)
                break
              case 'textarea':
                vf(e, r), (o = uu(e, r)), se('invalid', e)
                break
              default:
                o = r
            }
            du(n, o), (a = o)
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i]
                i === 'style'
                  ? Vm(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Bm(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Fo(e, s)
                    : typeof s == 'number' && Fo(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Do.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && se('scroll', e)
                      : s != null && Nc(e, i, s, l))
              }
            switch (n) {
              case 'input':
                $i(e), hf(e, r, !1)
                break
              case 'textarea':
                $i(e), gf(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Nn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Cr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Cr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = El)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Fe(t), null
    case 6:
      if (e && t.stateNode != null) mv(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166))
        if (((n = Qn(Yo.current)), Qn(Dt.current), Di(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (i = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ii(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r)
      }
      return Fe(t), null
    case 13:
      if (
        (ue(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && rt !== null && t.mode & 1 && !(t.flags & 128))
          Rh(), Dr(), (t.flags |= 98560), (i = !1)
        else if (((i = Di(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317))
            i[Lt] = t
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Fe(t), (i = !1)
        } else Tt !== null && (Ku(Tt), (Tt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Pe === 0 && (Pe = 3) : fd())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null)
    case 4:
      return (
        Mr(), Fu(e, t), e === null && Wo(t.stateNode.containerInfo), Fe(t), null
      )
    case 10:
      return Yc(t.type._context), Fe(t), null
    case 17:
      return Ze(t.type) && Cl(), Fe(t), null
    case 19:
      if ((ue(me), (i = t.memoizedState), i === null)) return Fe(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) mo(i, !1)
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Rl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return le(me, (me.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            we() > zr &&
            ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Rl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !fe)
            )
              return Fe(t), null
          } else
            2 * we() - i.renderingStartTime > zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (n = me.current),
          le(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null)
    case 22:
    case 23:
      return (
        dd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(N(156, t.tag))
}
function Jx(e, t) {
  switch ((Wc(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Cl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Mr(),
        ue(Xe),
        ue(Be),
        ed(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Zc(t), null
    case 13:
      if (
        (ue(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340))
        Dr()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ue(me), null
    case 4:
      return Mr(), null
    case 10:
      return Yc(t.type._context), null
    case 22:
    case 23:
      return dd(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ui = !1,
  Ue = !1,
  Gx = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null
function br(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ye(e, t, r)
      }
    else n.current = null
}
function Mu(e, t, n) {
  try {
    n()
  } catch (r) {
    ye(e, t, r)
  }
}
var lp = !1
function Xx(e, t) {
  if (((Su = wl), (e = yh()), Hc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (p === n && ++u === o && (a = l),
                p === i && ++c === r && (s = l),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = p), (p = f.parentNode)
            }
            f = g
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Eu = { focusedElem: e, selectionRange: n }, wl = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e)
    else
      for (; I !== null; ) {
        t = I
        try {
          var x = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    b = x.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : St(t.type, y),
                      b
                    )
                  v.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var w = t.stateNode.containerInfo
                w.nodeType === 1
                  ? (w.textContent = '')
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(N(163))
            }
        } catch (S) {
          ye(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (I = e)
          break
        }
        I = t.return
      }
  return (x = lp), (lp = !1), x
}
function Lo(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Mu(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function sa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Uu(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function hv(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), hv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[Qo], delete t[Pu], delete t[Lx], delete t[Ax])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function vv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ap(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vv(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function zu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = El))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zu(e, t, n), e = e.sibling; e !== null; ) zu(e, t, n), (e = e.sibling)
}
function Bu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), (e = e.sibling)
}
var Le = null,
  Ct = !1
function an(e, t, n) {
  for (n = n.child; n !== null; ) gv(e, t, n), (n = n.sibling)
}
function gv(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == 'function')
    try {
      It.onCommitFiberUnmount(ea, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || br(n, t)
    case 6:
      var r = Le,
        o = Ct
      ;(Le = null),
        an(e, t, n),
        (Le = r),
        (Ct = o),
        Le !== null &&
          (Ct
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode))
      break
    case 18:
      Le !== null &&
        (Ct
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? vs(e.parentNode, n)
              : e.nodeType === 1 && vs(e, n),
            Bo(e))
          : vs(Le, n.stateNode))
      break
    case 4:
      ;(r = Le),
        (o = Ct),
        (Le = n.stateNode.containerInfo),
        (Ct = !0),
        an(e, t, n),
        (Le = r),
        (Ct = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            l = i.destroy
          ;(i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Mu(n, t, l),
            (o = o.next)
        } while (o !== r)
      }
      an(e, t, n)
      break
    case 1:
      if (
        !Ue &&
        (br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          ye(n, t, a)
        }
      an(e, t, n)
      break
    case 21:
      an(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), an(e, t, n), (Ue = r))
        : an(e, t, n)
      break
    default:
      an(e, t, n)
  }
}
function sp(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Gx()),
      t.forEach(function (r) {
        var o = a1.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function bt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          l = t,
          a = l
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(Le = a.stateNode), (Ct = !1)
              break e
            case 3:
              ;(Le = a.stateNode.containerInfo), (Ct = !0)
              break e
            case 4:
              ;(Le = a.stateNode.containerInfo), (Ct = !0)
              break e
          }
          a = a.return
        }
        if (Le === null) throw Error(N(160))
        gv(i, l, o), (Le = null), (Ct = !1)
        var s = o.alternate
        s !== null && (s.return = null), (o.return = null)
      } catch (u) {
        ye(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yv(t, e), (t = t.sibling)
}
function yv(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((bt(t, e), jt(e), r & 4)) {
        try {
          Lo(3, e, e.return), sa(3, e)
        } catch (y) {
          ye(e, e.return, y)
        }
        try {
          Lo(5, e, e.return)
        } catch (y) {
          ye(e, e.return, y)
        }
      }
      break
    case 1:
      bt(t, e), jt(e), r & 512 && n !== null && br(n, n.return)
      break
    case 5:
      if (
        (bt(t, e),
        jt(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Fo(o, '')
        } catch (y) {
          ye(e, e.return, y)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Mm(o, i),
              fu(a, l)
            var u = fu(a, i)
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1]
              c === 'style'
                ? Vm(o, f)
                : c === 'dangerouslySetInnerHTML'
                ? Bm(o, f)
                : c === 'children'
                ? Fo(o, f)
                : Nc(o, c, f, u)
            }
            switch (a) {
              case 'input':
                au(o, i)
                break
              case 'textarea':
                Um(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var g = i.value
                g != null
                  ? Cr(o, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Cr(o, !!i.multiple, i.defaultValue, !0)
                      : Cr(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Qo] = i
          } catch (y) {
            ye(e, e.return, y)
          }
      }
      break
    case 6:
      if ((bt(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (y) {
          ye(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (bt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bo(t.containerInfo)
        } catch (y) {
          ye(e, e.return, y)
        }
      break
    case 4:
      bt(t, e), jt(e)
      break
    case 13:
      bt(t, e),
        jt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ud = we())),
        r & 4 && sp(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), bt(t, e), (Ue = u)) : bt(t, e),
        jt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((p = I), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lo(4, p, p.return)
                  break
                case 1:
                  br(p, p.return)
                  var x = p.stateNode
                  if (typeof x.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount()
                    } catch (y) {
                      ye(r, n, y)
                    }
                  }
                  break
                case 5:
                  br(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    cp(f)
                    continue
                  }
              }
              g !== null ? ((g.return = p), (I = g)) : cp(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (a.style.display = Hm('display', l)))
              } catch (y) {
                ye(e, e.return, y)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (y) {
                ye(e, e.return, y)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      bt(t, e), jt(e), r & 4 && sp(e)
      break
    case 21:
      break
    default:
      bt(t, e), jt(e)
  }
}
function jt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vv(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(N(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Fo(o, ''), (r.flags &= -33))
          var i = ap(e)
          Bu(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ap(e)
          zu(e, a, l)
          break
        default:
          throw Error(N(161))
      }
    } catch (s) {
      ye(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Zx(e, t, n) {
  ;(I = e), xv(e)
}
function xv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ui
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Ue
        a = Ui
        var u = Ue
        if (((Ui = l), (Ue = s) && !u))
          for (I = o; I !== null; )
            (l = I),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? dp(o)
                : s !== null
                ? ((s.return = l), (I = s))
                : dp(o)
        for (; i !== null; ) (I = i), xv(i), (i = i.sibling)
        ;(I = o), (Ui = a), (Ue = u)
      }
      up(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : up(e)
  }
}
function up(e) {
  for (; I !== null; ) {
    var t = I
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || sa(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && Kf(t, i, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Kf(t, l, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && Bo(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(N(163))
          }
        Ue || (t.flags & 512 && Uu(t))
      } catch (p) {
        ye(t, t.return, p)
      }
    }
    if (t === e) {
      I = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (I = n)
      break
    }
    I = t.return
  }
}
function cp(e) {
  for (; I !== null; ) {
    var t = I
    if (t === e) {
      I = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (I = n)
      break
    }
    I = t.return
  }
}
function dp(e) {
  for (; I !== null; ) {
    var t = I
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            sa(4, t)
          } catch (s) {
            ye(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              ye(t, o, s)
            }
          }
          var i = t.return
          try {
            Uu(t)
          } catch (s) {
            ye(t, i, s)
          }
          break
        case 5:
          var l = t.return
          try {
            Uu(t)
          } catch (s) {
            ye(t, l, s)
          }
      }
    } catch (s) {
      ye(t, t.return, s)
    }
    if (t === e) {
      I = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (I = a)
      break
    }
    I = t.return
  }
}
var e1 = Math.ceil,
  Ll = rn.ReactCurrentDispatcher,
  ad = rn.ReactCurrentOwner,
  ht = rn.ReactCurrentBatchConfig,
  X = 0,
  ke = null,
  Ee = null,
  Ae = 0,
  tt = 0,
  Sr = In(0),
  Pe = 0,
  Zo = null,
  tr = 0,
  ua = 0,
  sd = 0,
  Ao = null,
  Je = null,
  ud = 0,
  zr = 1 / 0,
  Ht = null,
  Al = !1,
  Hu = null,
  En = null,
  zi = !1,
  vn = null,
  Il = 0,
  Io = 0,
  Vu = null,
  rl = -1,
  ol = 0
function We() {
  return X & 6 ? we() : rl !== -1 ? rl : (rl = we())
}
function Cn(e) {
  return e.mode & 1
    ? X & 2 && Ae !== 0
      ? Ae & -Ae
      : Dx.transition !== null
      ? (ol === 0 && (ol = nh()), ol)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uh(e.type))),
        e)
    : 1
}
function $t(e, t, n, r) {
  if (50 < Io) throw ((Io = 0), (Vu = null), Error(N(185)))
  ui(e, n, r),
    (!(X & 2) || e !== ke) &&
      (e === ke && (!(X & 2) && (ua |= n), Pe === 4 && fn(e, Ae)),
      et(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((zr = we() + 500), ia && Dn()))
}
function et(e, t) {
  var n = e.callbackNode
  D0(e, t)
  var r = xl(e, e === ke ? Ae : 0)
  if (r === 0)
    n !== null && wf(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wf(n), t === 1))
      e.tag === 0 ? Ix(fp.bind(null, e)) : $h(fp.bind(null, e)),
        jx(function () {
          !(X & 6) && Dn()
        }),
        (n = null)
    else {
      switch (rh(r)) {
        case 1:
          n = Ac
          break
        case 4:
          n = eh
          break
        case 16:
          n = yl
          break
        case 536870912:
          n = th
          break
        default:
          n = yl
      }
      n = Ov(n, wv.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function wv(e, t) {
  if (((rl = -1), (ol = 0), X & 6)) throw Error(N(327))
  var n = e.callbackNode
  if (kr() && e.callbackNode !== n) return null
  var r = xl(e, e === ke ? Ae : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r)
  else {
    t = r
    var o = X
    X |= 2
    var i = Sv()
    ;(ke !== e || Ae !== t) && ((Ht = null), (zr = we() + 500), Yn(e, t))
    do
      try {
        r1()
        break
      } catch (a) {
        bv(e, a)
      }
    while (1)
    qc(),
      (Ll.current = i),
      (X = o),
      Ee !== null ? (t = 0) : ((ke = null), (Ae = 0), (t = Pe))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = gu(e)), o !== 0 && ((r = o), (t = Wu(e, o)))), t === 1)
    )
      throw ((n = Zo), Yn(e, 0), fn(e, r), et(e, we()), n)
    if (t === 6) fn(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !t1(o) &&
          ((t = Dl(e, r)),
          t === 2 && ((i = gu(e)), i !== 0 && ((r = i), (t = Wu(e, i)))),
          t === 1))
      )
        throw ((n = Zo), Yn(e, 0), fn(e, r), et(e, we()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345))
        case 2:
          zn(e, Je, Ht)
          break
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = ud + 500 - we()), 10 < t))
          ) {
            if (xl(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Tu(zn.bind(null, e, Je, Ht), t)
            break
          }
          zn(e, Je, Ht)
          break
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ot(r)
            ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
          }
          if (
            ((r = o),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * e1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tu(zn.bind(null, e, Je, Ht), r)
            break
          }
          zn(e, Je, Ht)
          break
        case 5:
          zn(e, Je, Ht)
          break
        default:
          throw Error(N(329))
      }
    }
  }
  return et(e, we()), e.callbackNode === n ? wv.bind(null, e) : null
}
function Wu(e, t) {
  var n = Ao
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    (e = Dl(e, t)),
    e !== 2 && ((t = Je), (Je = n), t !== null && Ku(t)),
    e
  )
}
function Ku(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e)
}
function t1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!kt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function fn(e, t) {
  for (
    t &= ~sd,
      t &= ~ua,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ot(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function fp(e) {
  if (X & 6) throw Error(N(327))
  kr()
  var t = xl(e, 0)
  if (!(t & 1)) return et(e, we()), null
  var n = Dl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = gu(e)
    r !== 0 && ((t = r), (n = Wu(e, r)))
  }
  if (n === 1) throw ((n = Zo), Yn(e, 0), fn(e, t), et(e, we()), n)
  if (n === 6) throw Error(N(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, Je, Ht),
    et(e, we()),
    null
  )
}
function cd(e, t) {
  var n = X
  X |= 1
  try {
    return e(t)
  } finally {
    ;(X = n), X === 0 && ((zr = we() + 500), ia && Dn())
  }
}
function nr(e) {
  vn !== null && vn.tag === 0 && !(X & 6) && kr()
  var t = X
  X |= 1
  var n = ht.transition,
    r = ee
  try {
    if (((ht.transition = null), (ee = 1), e)) return e()
  } finally {
    ;(ee = r), (ht.transition = n), (X = t), !(X & 6) && Dn()
  }
}
function dd() {
  ;(tt = Sr.current), ue(Sr)
}
function Yn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Rx(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n
      switch ((Wc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Cl()
          break
        case 3:
          Mr(), ue(Xe), ue(Be), ed()
          break
        case 5:
          Zc(r)
          break
        case 4:
          Mr()
          break
        case 13:
          ue(me)
          break
        case 19:
          ue(me)
          break
        case 10:
          Yc(r.type._context)
          break
        case 22:
        case 23:
          dd()
      }
      n = n.return
    }
  if (
    ((ke = e),
    (Ee = e = Tn(e.current, null)),
    (Ae = tt = t),
    (Pe = 0),
    (Zo = null),
    (sd = ua = tr = 0),
    (Je = Ao = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var l = i.next
          ;(i.next = o), (r.next = l)
        }
        n.pending = r
      }
    Kn = null
  }
  return e
}
function bv(e, t) {
  do {
    var n = Ee
    try {
      if ((qc(), (el.current = _l), jl)) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        jl = !1
      }
      if (
        ((er = 0),
        ($e = Te = he = null),
        (_o = !1),
        (Jo = 0),
        (ad.current = null),
        n === null || n.return === null)
      ) {
        ;(Pe = 1), (Zo = t), (Ee = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t
        if (
          ((t = Ae),
          (a.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = a,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = Zf(l)
          if (g !== null) {
            ;(g.flags &= -257),
              ep(g, l, a, i, t),
              g.mode & 1 && Xf(i, u, t),
              (t = g),
              (s = u)
            var x = t.updateQueue
            if (x === null) {
              var y = new Set()
              y.add(s), (t.updateQueue = y)
            } else x.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Xf(i, u, t), fd()
              break e
            }
            s = Error(N(426))
          }
        } else if (fe && a.mode & 1) {
          var b = Zf(l)
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              ep(b, l, a, i, t),
              Kc(Ur(s, a))
            break e
          }
        }
        ;(i = s = Ur(s, a)),
          Pe !== 4 && (Pe = 2),
          Ao === null ? (Ao = [i]) : Ao.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var v = ov(i, s, t)
              Wf(i, v)
              break e
            case 1:
              a = s
              var h = i.type,
                w = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (w !== null &&
                    typeof w.componentDidCatch == 'function' &&
                    (En === null || !En.has(w))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var S = iv(i, a, t)
                Wf(i, S)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Cv(n)
    } catch (E) {
      ;(t = E), Ee === n && n !== null && (Ee = n = n.return)
      continue
    }
    break
  } while (1)
}
function Sv() {
  var e = Ll.current
  return (Ll.current = _l), e === null ? _l : e
}
function fd() {
  ;(Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    ke === null || (!(tr & 268435455) && !(ua & 268435455)) || fn(ke, Ae)
}
function Dl(e, t) {
  var n = X
  X |= 2
  var r = Sv()
  ;(ke !== e || Ae !== t) && ((Ht = null), Yn(e, t))
  do
    try {
      n1()
      break
    } catch (o) {
      bv(e, o)
    }
  while (1)
  if ((qc(), (X = n), (Ll.current = r), Ee !== null)) throw Error(N(261))
  return (ke = null), (Ae = 0), Pe
}
function n1() {
  for (; Ee !== null; ) Ev(Ee)
}
function r1() {
  for (; Ee !== null && !$0(); ) Ev(Ee)
}
function Ev(e) {
  var t = Pv(e.alternate, e, tt)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Cv(e) : (Ee = t),
    (ad.current = null)
}
function Cv(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jx(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Ee = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Pe = 6), (Ee = null)
        return
      }
    } else if (((n = Yx(n, t, tt)), n !== null)) {
      Ee = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t
      return
    }
    Ee = t = e
  } while (t !== null)
  Pe === 0 && (Pe = 5)
}
function zn(e, t, n) {
  var r = ee,
    o = ht.transition
  try {
    ;(ht.transition = null), (ee = 1), o1(e, t, n, r)
  } finally {
    ;(ht.transition = o), (ee = r)
  }
  return null
}
function o1(e, t, n, r) {
  do kr()
  while (vn !== null)
  if (X & 6) throw Error(N(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (F0(e, i),
    e === ke && ((Ee = ke = null), (Ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      Ov(yl, function () {
        return kr(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = ht.transition), (ht.transition = null)
    var l = ee
    ee = 1
    var a = X
    ;(X |= 4),
      (ad.current = null),
      Xx(e, n),
      yv(n, e),
      Cx(Eu),
      (wl = !!Su),
      (Eu = Su = null),
      (e.current = n),
      Zx(n),
      k0(),
      (X = a),
      (ee = l),
      (ht.transition = i)
  } else e.current = n
  if (
    (zi && ((zi = !1), (vn = e), (Il = o)),
    (i = e.pendingLanes),
    i === 0 && (En = null),
    j0(n.stateNode),
    et(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Al) throw ((Al = !1), (e = Hu), (Hu = null), e)
  return (
    Il & 1 && e.tag !== 0 && kr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vu ? Io++ : ((Io = 0), (Vu = e))) : (Io = 0),
    Dn(),
    null
  )
}
function kr() {
  if (vn !== null) {
    var e = rh(Il),
      t = ht.transition,
      n = ee
    try {
      if (((ht.transition = null), (ee = 16 > e ? 16 : e), vn === null))
        var r = !1
      else {
        if (((e = vn), (vn = null), (Il = 0), X & 6)) throw Error(N(331))
        var o = X
        for (X |= 4, I = e.current; I !== null; ) {
          var i = I,
            l = i.child
          if (I.flags & 16) {
            var a = i.deletions
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s]
                for (I = u; I !== null; ) {
                  var c = I
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(8, c, i)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (I = f)
                  else
                    for (; I !== null; ) {
                      c = I
                      var p = c.sibling,
                        g = c.return
                      if ((hv(c), c === u)) {
                        I = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = g), (I = p)
                        break
                      }
                      I = g
                    }
                }
              }
              var x = i.alternate
              if (x !== null) {
                var y = x.child
                if (y !== null) {
                  x.child = null
                  do {
                    var b = y.sibling
                    ;(y.sibling = null), (y = b)
                  } while (y !== null)
                }
              }
              I = i
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (I = l)
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lo(9, i, i.return)
                }
              var v = i.sibling
              if (v !== null) {
                ;(v.return = i.return), (I = v)
                break e
              }
              I = i.return
            }
        }
        var h = e.current
        for (I = h; I !== null; ) {
          l = I
          var w = l.child
          if (l.subtreeFlags & 2064 && w !== null) (w.return = l), (I = w)
          else
            e: for (l = h; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sa(9, a)
                  }
                } catch (E) {
                  ye(a, a.return, E)
                }
              if (a === l) {
                I = null
                break e
              }
              var S = a.sibling
              if (S !== null) {
                ;(S.return = a.return), (I = S)
                break e
              }
              I = a.return
            }
        }
        if (
          ((X = o), Dn(), It && typeof It.onPostCommitFiberRoot == 'function')
        )
          try {
            It.onPostCommitFiberRoot(ea, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ee = n), (ht.transition = t)
    }
  }
  return !1
}
function pp(e, t, n) {
  ;(t = Ur(n, t)),
    (t = ov(e, t, 1)),
    (e = Sn(e, t, 1)),
    (t = We()),
    e !== null && (ui(e, 1, t), et(e, t))
}
function ye(e, t, n) {
  if (e.tag === 3) pp(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pp(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (En === null || !En.has(r)))
        ) {
          ;(e = Ur(n, e)),
            (e = iv(t, e, 1)),
            (t = Sn(t, e, 1)),
            (e = We()),
            t !== null && (ui(t, 1, e), et(t, e))
          break
        }
      }
      t = t.return
    }
}
function i1(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Ae & n) === n &&
      (Pe === 4 || (Pe === 3 && (Ae & 130023424) === Ae && 500 > we() - ud)
        ? Yn(e, 0)
        : (sd |= n)),
    et(e, t)
}
function Tv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ri), (Ri <<= 1), !(Ri & 130023424) && (Ri = 4194304))
      : (t = 1))
  var n = We()
  ;(e = Zt(e, t)), e !== null && (ui(e, t, n), et(e, n))
}
function l1(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Tv(e, n)
}
function a1(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(N(314))
  }
  r !== null && r.delete(t), Tv(e, n)
}
var Pv
Pv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ge = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), qx(e, t, n)
      Ge = !!(e.flags & 131072)
    }
  else (Ge = !1), fe && t.flags & 1048576 && kh(t, Ol, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      nl(e, t), (e = t.pendingProps)
      var o = Ir(t, Be.current)
      $r(t, n), (o = nd(null, t, r, e, o, n))
      var i = rd()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), Tl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gc(t),
            (o.updater = la),
            (t.stateNode = o),
            (o._reactInternals = t),
            ju(t, r, e, n),
            (t = Au(null, t, r, !0, i, n)))
          : ((t.tag = 0), fe && i && Vc(t), Ve(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = u1(r)),
          (e = St(r, e)),
          o)
        ) {
          case 0:
            t = Lu(null, t, r, e, n)
            break e
          case 1:
            t = rp(null, t, r, e, n)
            break e
          case 11:
            t = tp(null, t, r, e, n)
            break e
          case 14:
            t = np(null, t, r, St(r.type, e), n)
            break e
        }
        throw Error(N(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Lu(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        rp(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((uv(t), e === null)) throw Error(N(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          _h(e, t),
          Nl(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Ur(Error(N(423)), t)), (t = op(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Ur(Error(N(424)), t)), (t = op(e, t, r, n, o))
            break e
          } else
            for (
              rt = bn(t.stateNode.containerInfo.firstChild),
                ot = t,
                fe = !0,
                Tt = null,
                n = Dh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Dr(), r === o)) {
            t = en(e, t, n)
            break e
          }
          Ve(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Fh(t),
        e === null && ku(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Cu(r, o) ? (l = null) : i !== null && Cu(r, i) && (t.flags |= 32),
        sv(e, t),
        Ve(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && ku(t), null
    case 13:
      return cv(e, t, n)
    case 4:
      return (
        Xc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        tp(e, t, r, o, n)
      )
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          le($l, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (kt(i.value, l)) {
            if (i.children === o.children && !Xe.current) {
              t = en(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies
              if (a !== null) {
                l = i.child
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ;(s = qt(-1, n & -n)), (s.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s)
                      }
                    }
                    ;(i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Nu(i.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341))
                ;(l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Nu(l, n, t),
                  (l = i.sibling)
              } else l = i.child
              if (l !== null) l.return = i
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((i = l.sibling), i !== null)) {
                    ;(i.return = l.return), (l = i)
                    break
                  }
                  l = l.return
                }
              i = l
            }
        Ve(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $r(t, n),
        (o = yt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = St(r, t.pendingProps)),
        (o = St(r.type, o)),
        np(e, t, r, o, n)
      )
    case 15:
      return lv(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        nl(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Tl(t)) : (e = !1),
        $r(t, n),
        Ah(t, r, o),
        ju(t, r, o, n),
        Au(null, t, r, !0, e, n)
      )
    case 19:
      return dv(e, t, n)
    case 22:
      return av(e, t, n)
  }
  throw Error(N(156, t.tag))
}
function Ov(e, t) {
  return Zm(e, t)
}
function s1(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function mt(e, t, n, r) {
  return new s1(e, t, n, r)
}
function pd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function u1(e) {
  if (typeof e == 'function') return pd(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === jc)) return 11
    if (e === _c) return 14
  }
  return 2
}
function Tn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function il(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) pd(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case fr:
        return Jn(n.children, o, i, t)
      case Rc:
        ;(l = 8), (o |= 8)
        break
      case nu:
        return (e = mt(12, n, t, o | 2)), (e.elementType = nu), (e.lanes = i), e
      case ru:
        return (e = mt(13, n, t, o)), (e.elementType = ru), (e.lanes = i), e
      case ou:
        return (e = mt(19, n, t, o)), (e.elementType = ou), (e.lanes = i), e
      case Im:
        return ca(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Lm:
              l = 10
              break e
            case Am:
              l = 9
              break e
            case jc:
              l = 11
              break e
            case _c:
              l = 14
              break e
            case un:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(N(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = mt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function Jn(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e
}
function ca(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = Im),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Cs(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e
}
function Ts(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function c1(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = is(0)),
    (this.expirationTimes = is(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = is(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function md(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new c1(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gc(i),
    e
  )
}
function d1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: dr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function $v(e) {
  if (!e) return Rn
  e = e._reactInternals
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(N(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(N(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ze(n)) return Oh(e, n, t)
  }
  return t
}
function kv(e, t, n, r, o, i, l, a, s) {
  return (
    (e = md(n, r, !0, e, o, i, l, a, s)),
    (e.context = $v(null)),
    (n = e.current),
    (r = We()),
    (o = Cn(n)),
    (i = qt(r, o)),
    (i.callback = t ?? null),
    Sn(n, i, o),
    (e.current.lanes = o),
    ui(e, o, r),
    et(e, r),
    e
  )
}
function da(e, t, n, r) {
  var o = t.current,
    i = We(),
    l = Cn(o)
  return (
    (n = $v(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Sn(o, t, l)),
    e !== null && ($t(e, o, l, i), Zi(e, o, l)),
    l
  )
}
function Fl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function mp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function hd(e, t) {
  mp(e, t), (e = e.alternate) && mp(e, t)
}
function f1() {
  return null
}
var Nv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function vd(e) {
  this._internalRoot = e
}
fa.prototype.render = vd.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(N(409))
  da(e, t, null, null)
}
fa.prototype.unmount = vd.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    nr(function () {
      da(null, e, null, null)
    }),
      (t[Xt] = null)
  }
}
function fa(e) {
  this._internalRoot = e
}
fa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lh()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && sh(e)
  }
}
function gd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function pa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function hp() {}
function p1(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var u = Fl(l)
        i.call(u)
      }
    }
    var l = kv(t, r, e, 0, null, !1, !1, '', hp)
    return (
      (e._reactRootContainer = l),
      (e[Xt] = l.current),
      Wo(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var u = Fl(s)
      a.call(u)
    }
  }
  var s = md(e, 0, !1, null, null, !1, !1, '', hp)
  return (
    (e._reactRootContainer = s),
    (e[Xt] = s.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      da(t, s, n, r)
    }),
    s
  )
}
function ma(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var a = o
      o = function () {
        var s = Fl(l)
        a.call(s)
      }
    }
    da(t, l, e, o)
  } else l = p1(n, t, e, o, r)
  return Fl(l)
}
oh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes)
        n !== 0 &&
          (Ic(t, n | 1), et(t, we()), !(X & 6) && ((zr = we() + 500), Dn()))
      }
      break
    case 13:
      nr(function () {
        var r = Zt(e, 1)
        if (r !== null) {
          var o = We()
          $t(r, e, 1, o)
        }
      }),
        hd(e, 1)
  }
}
Dc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e, 134217728)
    if (t !== null) {
      var n = We()
      $t(t, e, 134217728, n)
    }
    hd(e, 134217728)
  }
}
ih = function (e) {
  if (e.tag === 13) {
    var t = Cn(e),
      n = Zt(e, t)
    if (n !== null) {
      var r = We()
      $t(n, e, t, r)
    }
    hd(e, t)
  }
}
lh = function () {
  return ee
}
ah = function (e, t) {
  var n = ee
  try {
    return (ee = e), t()
  } finally {
    ee = n
  }
}
mu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((au(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = oa(r)
            if (!o) throw Error(N(90))
            Fm(r), au(r, o)
          }
        }
      }
      break
    case 'textarea':
      Um(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Cr(e, !!n.multiple, t, !1)
  }
}
Qm = cd
qm = nr
var m1 = { usingClientEntryPoint: !1, Events: [di, vr, oa, Wm, Km, cd] },
  ho = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  h1 = {
    bundleType: ho.bundleType,
    version: ho.version,
    rendererPackageName: ho.rendererPackageName,
    rendererConfig: ho.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gm(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ho.findFiberByHostInstance || f1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      ;(ea = Bi.inject(h1)), (It = Bi)
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!gd(t)) throw Error(N(200))
  return d1(e, t, null, n)
}
at.createRoot = function (e, t) {
  if (!gd(e)) throw Error(N(299))
  var n = !1,
    r = '',
    o = Nv
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = md(e, 1, !1, null, null, n, !1, r, o)),
    (e[Xt] = t.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    new vd(t)
  )
}
at.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)))
  return (e = Gm(t)), (e = e === null ? null : e.stateNode), e
}
at.flushSync = function (e) {
  return nr(e)
}
at.hydrate = function (e, t, n) {
  if (!pa(t)) throw Error(N(200))
  return ma(null, e, t, !0, n)
}
at.hydrateRoot = function (e, t, n) {
  if (!gd(e)) throw Error(N(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Nv
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = kv(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Xt] = t.current),
    Wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new fa(t)
}
at.render = function (e, t, n) {
  if (!pa(t)) throw Error(N(200))
  return ma(null, e, t, !1, n)
}
at.unmountComponentAtNode = function (e) {
  if (!pa(e)) throw Error(N(40))
  return e._reactRootContainer
    ? (nr(function () {
        ma(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Xt] = null)
        })
      }),
      !0)
    : !1
}
at.unstable_batchedUpdates = cd
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!pa(n)) throw Error(N(200))
  if (e == null || e._reactInternals === void 0) throw Error(N(38))
  return ma(e, t, n, !1, r)
}
at.version = '18.2.0-next-9e3b772b8-20220608'
function Rv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)
    } catch (e) {
      console.error(e)
    }
}
Rv(), (km.exports = at)
var sr = km.exports
const v1 = Qr(sr)
var vp = sr
;(eu.createRoot = vp.createRoot), (eu.hydrateRoot = vp.hydrateRoot)
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ei.apply(this, arguments)
  )
}
var gn
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(gn || (gn = {}))
const gp = 'popstate'
function g1(e) {
  e === void 0 && (e = {})
  function t(r, o) {
    let { pathname: i, search: l, hash: a } = r.location
    return Qu(
      '',
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Ml(o)
  }
  return x1(t, n, null, e)
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function yd(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function y1() {
  return Math.random().toString(36).substr(2, 8)
}
function yp(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Qu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ei(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Gr(t) : t,
      { state: n, key: (t && t.key) || r || y1() }
    )
  )
}
function Ml(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Gr(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function x1(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = gn.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), l.replaceState(ei({}, l.state, { idx: u }), ''))
  function c() {
    return (l.state || { idx: null }).idx
  }
  function f() {
    a = gn.Pop
    let b = c(),
      v = b == null ? null : b - u
    ;(u = b), s && s({ action: a, location: y.location, delta: v })
  }
  function p(b, v) {
    a = gn.Push
    let h = Qu(y.location, b, v)
    n && n(h, b), (u = c() + 1)
    let w = yp(h, u),
      S = y.createHref(h)
    try {
      l.pushState(w, '', S)
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E
      o.location.assign(S)
    }
    i && s && s({ action: a, location: y.location, delta: 1 })
  }
  function g(b, v) {
    a = gn.Replace
    let h = Qu(y.location, b, v)
    n && n(h, b), (u = c())
    let w = yp(h, u),
      S = y.createHref(h)
    l.replaceState(w, '', S),
      i && s && s({ action: a, location: y.location, delta: 0 })
  }
  function x(b) {
    let v = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof b == 'string' ? b : Ml(b)
    return (
      Ce(
        v,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, v)
    )
  }
  let y = {
    get action() {
      return a
    },
    get location() {
      return e(o, l)
    },
    listen(b) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(gp, f),
        (s = b),
        () => {
          o.removeEventListener(gp, f), (s = null)
        }
      )
    },
    createHref(b) {
      return t(o, b)
    },
    createURL: x,
    encodeLocation(b) {
      let v = x(b)
      return { pathname: v.pathname, search: v.search, hash: v.hash }
    },
    push: p,
    replace: g,
    go(b) {
      return l.go(b)
    },
  }
  return y
}
var xp
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(xp || (xp = {}))
function w1(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Gr(t) : t,
    o = xd(r.pathname || '/', n)
  if (o == null) return null
  let i = jv(e)
  b1(i)
  let l = null
  for (let a = 0; l == null && a < i.length; ++a) l = N1(i[a], _1(o))
  return l
}
function jv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    }
    s.relativePath.startsWith('/') &&
      (Ce(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let u = Pn([r, s.relativePath]),
      c = n.concat(s)
    i.children &&
      i.children.length > 0 &&
      (Ce(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      jv(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: $1(u, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, l) => {
      var a
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, l)
      else for (let s of _v(i.path)) o(i, l, s)
    }),
    t
  )
}
function _v(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '')
  if (r.length === 0) return o ? [i, ''] : [i]
  let l = _v(r.join('/')),
    a = []
  return (
    a.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && a.push(...l),
    a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function b1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : k1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const S1 = /^:\w+$/,
  E1 = 3,
  C1 = 2,
  T1 = 1,
  P1 = 10,
  O1 = -2,
  wp = (e) => e === '*'
function $1(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(wp) && (r += O1),
    t && (r += C1),
    n
      .filter((o) => !wp(o))
      .reduce((o, i) => o + (S1.test(i) ? E1 : i === '' ? T1 : P1), r)
  )
}
function k1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function N1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = []
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = R1(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      )
    if (!c) return null
    Object.assign(r, c.params)
    let f = a.route
    i.push({
      params: r,
      pathname: Pn([o, c.pathname]),
      pathnameBase: D1(Pn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (o = Pn([o, c.pathnameBase]))
  }
  return i
}
function R1(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = j1(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1)
  return {
    params: r.reduce((u, c, f) => {
      if (c === '*') {
        let p = a[f] || ''
        l = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1')
      }
      return (u[c] = L1(a[f] || '', c)), u
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  }
}
function j1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    yd(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, a) => (r.push(a), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  )
}
function _1(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      yd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function L1(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      yd(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    )
  }
}
function xd(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function A1(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Gr(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : I1(n, t)) : t,
    search: F1(r),
    hash: M1(o),
  }
}
function I1(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Ps(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Lv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function Av(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == 'string'
    ? (o = Gr(e))
    : ((o = ei({}, e)),
      Ce(
        !o.pathname || !o.pathname.includes('?'),
        Ps('?', 'pathname', 'search', o)
      ),
      Ce(
        !o.pathname || !o.pathname.includes('#'),
        Ps('#', 'pathname', 'hash', o)
      ),
      Ce(!o.search || !o.search.includes('#'), Ps('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    a
  if (r || l == null) a = n
  else {
    let f = t.length - 1
    if (l.startsWith('..')) {
      let p = l.split('/')
      for (; p[0] === '..'; ) p.shift(), (f -= 1)
      o.pathname = p.join('/')
    }
    a = f >= 0 ? t[f] : '/'
  }
  let s = A1(o, a),
    u = l && l !== '/' && l.endsWith('/'),
    c = (i || l === '.') && n.endsWith('/')
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s
}
const Pn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  D1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  F1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  M1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function U1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Iv = ['post', 'put', 'patch', 'delete']
new Set(Iv)
const z1 = ['get', ...Iv]
new Set(z1)
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ul.apply(this, arguments)
  )
}
const wd = d.createContext(null),
  B1 = d.createContext(null),
  Xr = d.createContext(null),
  ha = d.createContext(null),
  on = d.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dv = d.createContext(null)
function H1(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  pi() || Ce(!1)
  let { basename: r, navigator: o } = d.useContext(Xr),
    { hash: i, pathname: l, search: a } = Mv(e, { relative: n }),
    s = l
  return (
    r !== '/' && (s = l === '/' ? r : Pn([r, l])),
    o.createHref({ pathname: s, search: a, hash: i })
  )
}
function pi() {
  return d.useContext(ha) != null
}
function Zr() {
  return pi() || Ce(!1), d.useContext(ha).location
}
function Fv(e) {
  d.useContext(Xr).static || d.useLayoutEffect(e)
}
function ln() {
  let { isDataRoute: e } = d.useContext(on)
  return e ? iw() : V1()
}
function V1() {
  pi() || Ce(!1)
  let e = d.useContext(wd),
    { basename: t, navigator: n } = d.useContext(Xr),
    { matches: r } = d.useContext(on),
    { pathname: o } = Zr(),
    i = JSON.stringify(Lv(r).map((s) => s.pathnameBase)),
    l = d.useRef(!1)
  return (
    Fv(() => {
      l.current = !0
    }),
    d.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return
        if (typeof s == 'number') {
          n.go(s)
          return
        }
        let c = Av(s, JSON.parse(i), o, u.relative === 'path')
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Pn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u)
      },
      [t, n, i, o, e]
    )
  )
}
const W1 = d.createContext(null)
function K1(e) {
  let t = d.useContext(on).outlet
  return t && d.createElement(W1.Provider, { value: e }, t)
}
function Q1() {
  let { matches: e } = d.useContext(on),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function Mv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = d.useContext(on),
    { pathname: o } = Zr(),
    i = JSON.stringify(Lv(r).map((l) => l.pathnameBase))
  return d.useMemo(() => Av(e, JSON.parse(i), o, n === 'path'), [e, i, o, n])
}
function q1(e, t) {
  return Y1(e, t)
}
function Y1(e, t, n) {
  pi() || Ce(!1)
  let { navigator: r } = d.useContext(Xr),
    { matches: o } = d.useContext(on),
    i = o[o.length - 1],
    l = i ? i.params : {}
  i && i.pathname
  let a = i ? i.pathnameBase : '/'
  i && i.route
  let s = Zr(),
    u
  if (t) {
    var c
    let y = typeof t == 'string' ? Gr(t) : t
    a === '/' || ((c = y.pathname) != null && c.startsWith(a)) || Ce(!1),
      (u = y)
  } else u = s
  let f = u.pathname || '/',
    p = a === '/' ? f : f.slice(a.length) || '/',
    g = w1(e, { pathname: p }),
    x = ew(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: Pn([
              a,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? a
                : Pn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    )
  return t && x
    ? d.createElement(
        ha.Provider,
        {
          value: {
            location: Ul(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: gn.Pop,
          },
        },
        x
      )
    : x
}
function J1() {
  let e = ow(),
    t = U1(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null
  return d.createElement(
    d.Fragment,
    null,
    d.createElement('h2', null, 'Unexpected Application Error!'),
    d.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? d.createElement('pre', { style: o }, n) : null,
    i
  )
}
const G1 = d.createElement(J1, null)
class X1 extends d.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error
      ? d.createElement(
          on.Provider,
          { value: this.props.routeContext },
          d.createElement(Dv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function Z1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = d.useContext(wd)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    d.createElement(on.Provider, { value: t }, r)
  )
}
function ew(e, t, n) {
  var r
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors
  if (l != null) {
    let a = i.findIndex(
      (s) => s.route.id && (l == null ? void 0 : l[s.route.id])
    )
    a >= 0 || Ce(!1), (i = i.slice(0, Math.min(i.length, a + 1)))
  }
  return i.reduceRight((a, s, u) => {
    let c = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      f = null
    n && (f = s.route.errorElement || G1)
    let p = t.concat(i.slice(0, u + 1)),
      g = () => {
        let x
        return (
          c
            ? (x = f)
            : s.route.Component
            ? (x = d.createElement(s.route.Component, null))
            : s.route.element
            ? (x = s.route.element)
            : (x = a),
          d.createElement(Z1, {
            match: s,
            routeContext: { outlet: a, matches: p, isDataRoute: n != null },
            children: x,
          })
        )
      }
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? d.createElement(X1, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g()
  }, null)
}
var qu
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate')
})(qu || (qu = {}))
var ti
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId')
})(ti || (ti = {}))
function tw(e) {
  let t = d.useContext(wd)
  return t || Ce(!1), t
}
function nw(e) {
  let t = d.useContext(B1)
  return t || Ce(!1), t
}
function rw(e) {
  let t = d.useContext(on)
  return t || Ce(!1), t
}
function Uv(e) {
  let t = rw(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Ce(!1), n.route.id
}
function ow() {
  var e
  let t = d.useContext(Dv),
    n = nw(ti.UseRouteError),
    r = Uv(ti.UseRouteError)
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function iw() {
  let { router: e } = tw(qu.UseNavigateStable),
    t = Uv(ti.UseNavigateStable),
    n = d.useRef(!1)
  return (
    Fv(() => {
      n.current = !0
    }),
    d.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Ul({ fromRouteId: t }, i)))
      },
      [e, t]
    )
  )
}
function lw(e) {
  return K1(e.context)
}
function Hn(e) {
  Ce(!1)
}
function aw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = gn.Pop,
    navigator: i,
    static: l = !1,
  } = e
  pi() && Ce(!1)
  let a = t.replace(/^\/*/, '/'),
    s = d.useMemo(() => ({ basename: a, navigator: i, static: l }), [a, i, l])
  typeof r == 'string' && (r = Gr(r))
  let {
      pathname: u = '/',
      search: c = '',
      hash: f = '',
      state: p = null,
      key: g = 'default',
    } = r,
    x = d.useMemo(() => {
      let y = xd(u, a)
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: p, key: g },
            navigationType: o,
          }
    }, [a, u, c, f, p, g, o])
  return x == null
    ? null
    : d.createElement(
        Xr.Provider,
        { value: s },
        d.createElement(ha.Provider, { children: n, value: x })
      )
}
function zv(e) {
  let { children: t, location: n } = e
  return q1(Yu(t), n)
}
var bp
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error')
})(bp || (bp = {}))
new Promise(() => {})
function Yu(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    d.Children.forEach(e, (r, o) => {
      if (!d.isValidElement(r)) return
      let i = [...t, o]
      if (r.type === d.Fragment) {
        n.push.apply(n, Yu(r.props.children, i))
        return
      }
      r.type !== Hn && Ce(!1), !r.props.index || !r.props.children || Ce(!1)
      let l = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (l.children = Yu(r.props.children, i)), n.push(l)
    }),
    n
  )
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ju() {
  return (
    (Ju = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ju.apply(this, arguments)
  )
}
function sw(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    i
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function uw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function cw(e, t) {
  return e.button === 0 && (!t || t === '_self') && !uw(e)
}
function Gu(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n]
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]])
          }, [])
    )
  )
}
function dw(e, t) {
  let n = Gu(e)
  if (t)
    for (let r of t.keys())
      n.has(r) ||
        t.getAll(r).forEach((o) => {
          n.append(r, o)
        })
  return n
}
const fw = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  pw = 'startTransition',
  Sp = ml[pw]
function mw(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = d.useRef()
  i.current == null && (i.current = g1({ window: o, v5Compat: !0 }))
  let l = i.current,
    [a, s] = d.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = d.useCallback(
      (f) => {
        u && Sp ? Sp(() => s(f)) : s(f)
      },
      [s, u]
    )
  return (
    d.useLayoutEffect(() => l.listen(c), [l, c]),
    d.createElement(aw, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
    })
  )
}
const hw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  vw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ye = d.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
      } = t,
      f = sw(t, fw),
      { basename: p } = d.useContext(Xr),
      g,
      x = !1
    if (typeof u == 'string' && vw.test(u) && ((g = u), hw))
      try {
        let h = new URL(window.location.href),
          w = u.startsWith('//') ? new URL(h.protocol + u) : new URL(u),
          S = xd(w.pathname, p)
        w.origin === h.origin && S != null
          ? (u = S + w.search + w.hash)
          : (x = !0)
      } catch {}
    let y = H1(u, { relative: o }),
      b = gw(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: o,
      })
    function v(h) {
      r && r(h), h.defaultPrevented || b(h)
    }
    return d.createElement(
      'a',
      Ju({}, f, { href: g || y, onClick: x || i ? r : v, ref: n, target: s })
    )
  })
var Ep
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher')
})(Ep || (Ep = {}))
var Cp
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Cp || (Cp = {}))
function gw(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    a = ln(),
    s = Zr(),
    u = Mv(e, { relative: l })
  return d.useCallback(
    (c) => {
      if (cw(c, n)) {
        c.preventDefault()
        let f = r !== void 0 ? r : Ml(s) === Ml(u)
        a(e, { replace: f, state: o, preventScrollReset: i, relative: l })
      }
    },
    [s, a, u, r, o, n, e, i, l]
  )
}
function va(e) {
  let t = d.useRef(Gu(e)),
    n = d.useRef(!1),
    r = Zr(),
    o = d.useMemo(() => dw(r.search, n.current ? null : t.current), [r.search]),
    i = ln(),
    l = d.useCallback(
      (a, s) => {
        const u = Gu(typeof a == 'function' ? a(o) : a)
        ;(n.current = !0), i('?' + u, s)
      },
      [i, o]
    )
  return [o, l]
}
const yw = () => {
  const { pathname: e } = Zr()
  d.useEffect(() => {
    window.scrollTo(0, 0)
  }, [e])
}
function xw() {
  return m.jsxs('main', {
    className: 'App',
    children: [m.jsx(yw, {}), m.jsx(lw, {})],
  })
}
function ga() {
  return m.jsxs('div', {
    className: 'bg-dark-gray relative overflow-hidden',
    children: [
      m.jsx('div', {
        className: 'absolute -top-10 -left-5 overflow-hidden',
        children: m.jsx('img', {
          src: '/opacnew/opac/ornament1.svg',
          alt: 'ornament',
        }),
      }),
      m.jsx('div', {
        className: 'absolute -bottom-10 right-0 overflow-hidden',
        children: m.jsx('img', {
          src: '/opacnew/opac/ornament1.svg',
          alt: 'ornament',
        }),
      }),
      m.jsxs('div', {
        className:
          'w-full mx-auto max-w-7xl flex flex-col gap-8 sm:gap-0 sm:flex-row items-start sm:items-center justify-between text-white relative px-3 py-4',
        children: [
          m.jsxs('div', {
            className: 'flex flex-col gap-8 max-w-[360px]',
            children: [
              m.jsx('img', {
                src: '/opacnew/opac/logo1.svg',
                alt: 'logo',
                className: 'w-[300px]',
              }),
              m.jsx('p', {
                children:
                  'Online Public Access Catalog Universitas Pendidikan Indonesia',
              }),
              m.jsxs('div', {
                className: 'flex justify-between items-center',
                children: [
                  m.jsx(Ye, {
                    children: m.jsx('img', {
                      src: '/opacnew/opac/facebook-circle.svg',
                      alt: 'facebook',
                      width: 30,
                    }),
                  }),
                  m.jsx(Ye, {
                    children: m.jsx('img', {
                      src: '/opacnew/opac/linkedin-circle.svg',
                      alt: 'linkedin',
                      width: 30,
                    }),
                  }),
                  m.jsx(Ye, {
                    children: m.jsx('img', {
                      src: '/opacnew/opac/Twitter.svg',
                      alt: 'twitter',
                      width: 30,
                    }),
                  }),
                  m.jsx(Ye, {
                    children: m.jsx('img', {
                      src: '/opacnew/opac/youtube-circle.svg',
                      alt: 'youtube',
                      width: 30,
                    }),
                  }),
                ],
              }),
              m.jsx('p', { children: '© 2023 UPI. All Rights Reserved.' }),
            ],
          }),
          m.jsxs('div', {
            className: 'flex flex-col gap-8',
            children: [
              m.jsx('h4', {
                className: 'text-xl font-semibold',
                children: 'IMPORTANT LINKS',
              }),
              m.jsxs('ul', {
                className: 'list-none text-lg',
                children: [
                  m.jsx('li', {
                    children: m.jsx(Ye, {
                      to: '/#',
                      children: 'Privacy Policy',
                    }),
                  }),
                  m.jsx('li', {
                    children: m.jsx(Ye, { to: '/#', children: 'FAQs' }),
                  }),
                  m.jsx('li', {
                    children: m.jsx(Ye, {
                      to: '/#',
                      children: 'Terms of Services',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function ya() {
  return m.jsx('div', {
    className: 'top-bar-bg py-[10px]',
    children: m.jsxs('div', {
      className:
        'w-full mx-auto max-w-7xl lg:px-3 sm:px-5  flex items-center justify-center sm:justify-between text-white ',
      children: [
        m.jsxs('div', {
          className: 'flex gap-8 text-[12px] items-center',
          children: [
            m.jsxs('div', {
              className: 'flex gap-2 items-center',
              children: [
                m.jsx('img', { src: '/opacnew/opac/call.svg', alt: 'phone' }),
                m.jsx('p', { children: '0859-5999-9300' }),
              ],
            }),
            m.jsxs('div', {
              className: 'flex gap-2 items-center',
              children: [
                m.jsx('img', { src: '/opacnew/opac/Mail.svg', alt: 'mail' }),
                m.jsx('p', { children: 'perpustakaan@upi.edu' }),
              ],
            }),
          ],
        }),
        m.jsxs('div', {
          className: 'hidden sm:flex gap-2 items-center ',
          children: [
            m.jsx('span', { children: 'INA' }),
            m.jsx('div', { className: 'w-[1px] h-[14px] bg-white' }),
            m.jsxs('div', {
              className: 'flex gap-1',
              children: [
                m.jsx('img', {
                  src: '/opacnew/opac/Facebook.svg',
                  alt: 'Facebook',
                }),
                m.jsx('img', {
                  src: '/opacnew/opac/Twitter.svg',
                  alt: 'Twitter',
                }),
                m.jsx('img', {
                  src: '/opacnew/opac/Linkedin.svg',
                  alt: 'Linkedin',
                }),
                m.jsx('img', {
                  src: '/opacnew/opac/Youtube.svg',
                  alt: 'Youtube',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
var ww = Object.defineProperty,
  bw = (e, t, n) =>
    t in e
      ? ww(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Os = (e, t, n) => (bw(e, typeof t != 'symbol' ? t + '' : t, n), n)
let Sw = class {
    constructor() {
      Os(this, 'current', this.detect()),
        Os(this, 'handoffState', 'pending'),
        Os(this, 'currentId', 0)
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = 'pending'),
        (this.currentId = 0),
        (this.current = t))
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === 'server'
    }
    get isClient() {
      return this.current === 'client'
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client'
    }
    handoff() {
      this.handoffState === 'pending' && (this.handoffState = 'complete')
    }
    get isHandoffComplete() {
      return this.handoffState === 'complete'
    }
  },
  Yt = new Sw(),
  ae = (e, t) => {
    Yt.isServer ? d.useEffect(e, t) : d.useLayoutEffect(e, t)
  }
function vt(e) {
  let t = d.useRef(e)
  return (
    ae(() => {
      t.current = e
    }, [e]),
    t
  )
}
function mi(e, t) {
  let [n, r] = d.useState(e),
    o = vt(e)
  return ae(() => r(o.current), [o, r, ...t]), n
}
function xa(e) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t
          })
        )
}
function Nt() {
  let e = [],
    t = {
      addEventListener(n, r, o, i) {
        return (
          n.addEventListener(r, o, i),
          t.add(() => n.removeEventListener(r, o, i))
        )
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n)
        return t.add(() => cancelAnimationFrame(r))
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
      },
      setTimeout(...n) {
        let r = setTimeout(...n)
        return t.add(() => clearTimeout(r))
      },
      microTask(...n) {
        let r = { current: !0 }
        return (
          xa(() => {
            r.current && n[0]()
          }),
          t.add(() => {
            r.current = !1
          })
        )
      },
      style(n, r, o) {
        let i = n.style.getPropertyValue(r)
        return (
          Object.assign(n.style, { [r]: o }),
          this.add(() => {
            Object.assign(n.style, { [r]: i })
          })
        )
      },
      group(n) {
        let r = Nt()
        return n(r), this.add(() => r.dispose())
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n)
            if (r >= 0) for (let o of e.splice(r, 1)) o()
          }
        )
      },
      dispose() {
        for (let n of e.splice(0)) n()
      },
    }
  return t
}
function Mt() {
  let [e] = d.useState(Nt)
  return d.useEffect(() => () => e.dispose(), [e]), e
}
let L = function (e) {
  let t = vt(e)
  return D.useCallback((...n) => t.current(...n), [t])
}
function eo() {
  let [e, t] = d.useState(Yt.isHandoffComplete)
  return (
    e && Yt.isHandoffComplete === !1 && t(!1),
    d.useEffect(() => {
      e !== !0 && t(!0)
    }, [e]),
    d.useEffect(() => Yt.handoff(), []),
    e
  )
}
var Tp
let qe =
  (Tp = D.useId) != null
    ? Tp
    : function () {
        let e = eo(),
          [t, n] = D.useState(e ? () => Yt.nextId() : null)
        return (
          ae(() => {
            t === null && n(Yt.nextId())
          }, [t]),
          t != null ? '' + t : void 0
        )
      }
function re(e, t, ...n) {
  if (e in t) {
    let o = t[e]
    return typeof o == 'function' ? o(...n) : o
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(r, re), r)
}
function wa(e) {
  return Yt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty('current') && e.current instanceof Node
    ? e.current.ownerDocument
    : document
}
let Xu = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(',')
var Vn = ((e) => (
    (e[(e.First = 1)] = 'First'),
    (e[(e.Previous = 2)] = 'Previous'),
    (e[(e.Next = 4)] = 'Next'),
    (e[(e.Last = 8)] = 'Last'),
    (e[(e.WrapAround = 16)] = 'WrapAround'),
    (e[(e.NoScroll = 32)] = 'NoScroll'),
    e
  ))(Vn || {}),
  Bv = ((e) => (
    (e[(e.Error = 0)] = 'Error'),
    (e[(e.Overflow = 1)] = 'Overflow'),
    (e[(e.Success = 2)] = 'Success'),
    (e[(e.Underflow = 3)] = 'Underflow'),
    e
  ))(Bv || {}),
  Ew = ((e) => (
    (e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e
  ))(Ew || {})
function Cw(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Xu)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      )
}
var bd = ((e) => (
  (e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e
))(bd || {})
function Hv(e, t = 0) {
  var n
  return e === ((n = wa(e)) == null ? void 0 : n.body)
    ? !1
    : re(t, {
        0() {
          return e.matches(Xu)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(Xu)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var Tw = ((e) => (
  (e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e
))(Tw || {})
typeof window < 'u' &&
  typeof document < 'u' &&
  (document.addEventListener(
    'keydown',
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = '')
    },
    !0
  ),
  document.addEventListener(
    'click',
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = '')
    },
    !0
  ))
function Gn(e) {
  e == null || e.focus({ preventScroll: !0 })
}
let Pw = ['textarea', 'input'].join(',')
function Ow(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Pw)) !=
    null
    ? n
    : !1
}
function Sd(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n),
      i = t(r)
    if (o === null || i === null) return 0
    let l = o.compareDocumentPosition(i)
    return l & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : l & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0
  })
}
function ll(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    l = Array.isArray(e) ? (n ? Sd(e) : e) : Cw(e)
  o.length > 0 && l.length > 1 && (l = l.filter((g) => !o.includes(g))),
    (r = r ?? i.activeElement)
  let a = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    s = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, l.indexOf(r)) - 1
      if (t & 4) return Math.max(0, l.indexOf(r)) + 1
      if (t & 8) return l.length - 1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    c = 0,
    f = l.length,
    p
  do {
    if (c >= f || c + f <= 0) return 0
    let g = s + c
    if (t & 16) g = (g + f) % f
    else {
      if (g < 0) return 3
      if (g >= f) return 1
    }
    ;(p = l[g]), p == null || p.focus(u), (c += a)
  } while (p !== i.activeElement)
  return t & 6 && Ow(p) && p.select(), 2
}
function Hi(e, t, n) {
  let r = vt(t)
  d.useEffect(() => {
    function o(i) {
      r.current(i)
    }
    return (
      document.addEventListener(e, o, n),
      () => document.removeEventListener(e, o, n)
    )
  }, [e, n])
}
function Vv(e, t, n) {
  let r = vt(t)
  d.useEffect(() => {
    function o(i) {
      r.current(i)
    }
    return (
      window.addEventListener(e, o, n),
      () => window.removeEventListener(e, o, n)
    )
  }, [e, n])
}
function Ed(e, t, n = !0) {
  let r = d.useRef(!1)
  d.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n
    })
  }, [n])
  function o(l, a) {
    if (!r.current || l.defaultPrevented) return
    let s = a(l)
    if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return
    let u = (function c(f) {
      return typeof f == 'function'
        ? c(f())
        : Array.isArray(f) || f instanceof Set
        ? f
        : [f]
    })(e)
    for (let c of u) {
      if (c === null) continue
      let f = c instanceof HTMLElement ? c : c.current
      if (
        (f != null && f.contains(s)) ||
        (l.composed && l.composedPath().includes(f))
      )
        return
    }
    return !Hv(s, bd.Loose) && s.tabIndex !== -1 && l.preventDefault(), t(l, s)
  }
  let i = d.useRef(null)
  Hi(
    'pointerdown',
    (l) => {
      var a, s
      r.current &&
        (i.current =
          ((s = (a = l.composedPath) == null ? void 0 : a.call(l)) == null
            ? void 0
            : s[0]) || l.target)
    },
    !0
  ),
    Hi(
      'mousedown',
      (l) => {
        var a, s
        r.current &&
          (i.current =
            ((s = (a = l.composedPath) == null ? void 0 : a.call(l)) == null
              ? void 0
              : s[0]) || l.target)
      },
      !0
    ),
    Hi(
      'click',
      (l) => {
        i.current && (o(l, () => i.current), (i.current = null))
      },
      !0
    ),
    Hi(
      'touchend',
      (l) => o(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0
    ),
    Vv(
      'blur',
      (l) =>
        o(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    )
}
function Pp(e) {
  var t
  if (e.type) return e.type
  let n = (t = e.as) != null ? t : 'button'
  if (typeof n == 'string' && n.toLowerCase() === 'button') return 'button'
}
function Wv(e, t) {
  let [n, r] = d.useState(() => Pp(e))
  return (
    ae(() => {
      r(Pp(e))
    }, [e.type, e.as]),
    ae(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'))
    }, [n, t]),
    n
  )
}
let Kv = Symbol()
function $w(e, t = !0) {
  return Object.assign(e, { [Kv]: t })
}
function Se(...e) {
  let t = d.useRef(e)
  d.useEffect(() => {
    t.current = e
  }, [e])
  let n = L((r) => {
    for (let o of t.current)
      o != null && (typeof o == 'function' ? o(r) : (o.current = r))
  })
  return e.every((r) => r == null || (r == null ? void 0 : r[Kv])) ? void 0 : n
}
function kw({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let o = d.useRef(t),
    i = d.useRef(n)
  d.useEffect(() => {
    ;(o.current = t), (i.current = n)
  }, [t, n]),
    ae(() => {
      if (!e || !r) return
      let l = wa(e)
      if (!l) return
      let a = o.current,
        s = i.current,
        u = Object.assign((f) => a(f), { acceptNode: a }),
        c = l.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, u, !1)
      for (; c.nextNode(); ) s(c.currentNode)
    }, [e, r, o, i])
}
function Nw(e) {
  throw new Error('Unexpected object: ' + e)
}
var Z = ((e) => (
  (e[(e.First = 0)] = 'First'),
  (e[(e.Previous = 1)] = 'Previous'),
  (e[(e.Next = 2)] = 'Next'),
  (e[(e.Last = 3)] = 'Last'),
  (e[(e.Specific = 4)] = 'Specific'),
  (e[(e.Nothing = 5)] = 'Nothing'),
  e
))(Z || {})
function Qv(e, t) {
  let n = t.resolveItems()
  if (n.length <= 0) return null
  let r = t.resolveActiveIndex(),
    o = r ?? -1,
    i = (() => {
      switch (e.focus) {
        case 0:
          return n.findIndex((l) => !t.resolveDisabled(l))
        case 1: {
          let l = n
            .slice()
            .reverse()
            .findIndex((a, s, u) =>
              o !== -1 && u.length - s - 1 >= o ? !1 : !t.resolveDisabled(a)
            )
          return l === -1 ? l : n.length - 1 - l
        }
        case 2:
          return n.findIndex((l, a) => (a <= o ? !1 : !t.resolveDisabled(l)))
        case 3: {
          let l = n
            .slice()
            .reverse()
            .findIndex((a) => !t.resolveDisabled(a))
          return l === -1 ? l : n.length - 1 - l
        }
        case 4:
          return n.findIndex((l) => t.resolveId(l) === e.id)
        case 5:
          return null
        default:
          Nw(e)
      }
    })()
  return i === -1 ? r : i
}
function Zu(...e) {
  return e.filter(Boolean).join(' ')
}
var jn = ((e) => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(jn || {}),
  Qt = ((e) => (
    (e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e
  ))(Qt || {})
function ge({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: i = !0,
  name: l,
}) {
  let a = qv(t, e)
  if (i) return Vi(a, n, r, l)
  let s = o ?? 0
  if (s & 2) {
    let { static: u = !1, ...c } = a
    if (u) return Vi(c, n, r, l)
  }
  if (s & 1) {
    let { unmount: u = !0, ...c } = a
    return re(u ? 0 : 1, {
      0() {
        return null
      },
      1() {
        return Vi({ ...c, hidden: !0, style: { display: 'none' } }, n, r, l)
      },
    })
  }
  return Vi(a, n, r, l)
}
function Vi(e, t = {}, n, r) {
  let {
      as: o = n,
      children: i,
      refName: l = 'ref',
      ...a
    } = $s(e, ['unmount', 'static']),
    s = e.ref !== void 0 ? { [l]: e.ref } : {},
    u = typeof i == 'function' ? i(t) : i
  'className' in a &&
    a.className &&
    typeof a.className == 'function' &&
    (a.className = a.className(t))
  let c = {}
  if (t) {
    let f = !1,
      p = []
    for (let [g, x] of Object.entries(t))
      typeof x == 'boolean' && (f = !0), x === !0 && p.push(g)
    f && (c['data-headlessui-state'] = p.join(' '))
  }
  if (o === d.Fragment && Object.keys(zl(a)).length > 0) {
    if (!d.isValidElement(u) || (Array.isArray(u) && u.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${r} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(a).map((x) => `  - ${x}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((x) => `  - ${x}`).join(`
`),
        ].join(`
`)
      )
    let f = u.props,
      p =
        typeof (f == null ? void 0 : f.className) == 'function'
          ? (...x) => Zu(f == null ? void 0 : f.className(...x), a.className)
          : Zu(f == null ? void 0 : f.className, a.className),
      g = p ? { className: p } : {}
    return d.cloneElement(
      u,
      Object.assign(
        {},
        qv(u.props, zl($s(a, ['ref']))),
        c,
        s,
        Rw(u.ref, s.ref),
        g
      )
    )
  }
  return d.createElement(
    o,
    Object.assign(
      {},
      $s(a, ['ref']),
      o !== d.Fragment && s,
      o !== d.Fragment && c
    ),
    u
  )
}
function Rw(...e) {
  return {
    ref: e.every((t) => t == null)
      ? void 0
      : (t) => {
          for (let n of e)
            n != null && (typeof n == 'function' ? n(t) : (n.current = t))
        },
  }
}
function qv(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let r of e)
    for (let o in r)
      o.startsWith('on') && typeof r[o] == 'function'
        ? (n[o] != null || (n[o] = []), n[o].push(r[o]))
        : (t[o] = r[o])
  if (t.disabled || t['aria-disabled'])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    )
  for (let r in n)
    Object.assign(t, {
      [r](o, ...i) {
        let l = n[r]
        for (let a of l) {
          if (
            (o instanceof Event ||
              (o == null ? void 0 : o.nativeEvent) instanceof Event) &&
            o.defaultPrevented
          )
            return
          a(o, ...i)
        }
      },
    })
  return t
}
function pe(e) {
  var t
  return Object.assign(d.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  })
}
function zl(e) {
  let t = Object.assign({}, e)
  for (let n in t) t[n] === void 0 && delete t[n]
  return t
}
function $s(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Cd(e) {
  let t = e.parentElement,
    n = null
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === ''
  return r && jw(n) ? !1 : r
}
function jw(e) {
  if (!e) return !1
  let t = e.previousElementSibling
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1
    t = t.previousElementSibling
  }
  return !0
}
function Td(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Jv(n, Yv(t, r), o)
  return n
}
function Yv(e, t) {
  return e ? e + '[' + t + ']' : t
}
function Jv(e, t, n) {
  if (Array.isArray(n))
    for (let [r, o] of n.entries()) Jv(e, Yv(t, r.toString()), o)
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == 'boolean'
      ? e.push([t, n ? '1' : '0'])
      : typeof n == 'string'
      ? e.push([t, n])
      : typeof n == 'number'
      ? e.push([t, `${n}`])
      : n == null
      ? e.push([t, ''])
      : Td(n, t, e)
}
let _w = 'div'
var Br = ((e) => (
  (e[(e.None = 1)] = 'None'),
  (e[(e.Focusable = 2)] = 'Focusable'),
  (e[(e.Hidden = 4)] = 'Hidden'),
  e
))(Br || {})
function Lw(e, t) {
  let { features: n = 1, ...r } = e,
    o = {
      ref: t,
      'aria-hidden': (n & 2) === 2 ? !0 : void 0,
      style: {
        position: 'fixed',
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: 'none' }),
      },
    }
  return ge({
    ourProps: o,
    theirProps: r,
    slot: {},
    defaultTag: _w,
    name: 'Hidden',
  })
}
let ni = pe(Lw),
  Pd = d.createContext(null)
Pd.displayName = 'OpenClosedContext'
var be = ((e) => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(be || {})
function hi() {
  return d.useContext(Pd)
}
function Od({ value: e, children: t }) {
  return D.createElement(Pd.Provider, { value: e }, t)
}
var J = ((e) => (
  (e.Space = ' '),
  (e.Enter = 'Enter'),
  (e.Escape = 'Escape'),
  (e.Backspace = 'Backspace'),
  (e.Delete = 'Delete'),
  (e.ArrowLeft = 'ArrowLeft'),
  (e.ArrowUp = 'ArrowUp'),
  (e.ArrowRight = 'ArrowRight'),
  (e.ArrowDown = 'ArrowDown'),
  (e.Home = 'Home'),
  (e.End = 'End'),
  (e.PageUp = 'PageUp'),
  (e.PageDown = 'PageDown'),
  (e.Tab = 'Tab'),
  e
))(J || {})
function Gv(e, t, n) {
  let [r, o] = d.useState(n),
    i = e !== void 0,
    l = d.useRef(i),
    a = d.useRef(!1),
    s = d.useRef(!1)
  return (
    i && !l.current && !a.current
      ? ((a.current = !0),
        (l.current = i),
        console.error(
          'A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.'
        ))
      : !i &&
        l.current &&
        !s.current &&
        ((s.current = !0),
        (l.current = i),
        console.error(
          'A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.'
        )),
    [i ? e : r, L((u) => (i || o(u), t == null ? void 0 : t(u)))]
  )
}
function ri(e, t) {
  let n = d.useRef([]),
    r = L(e)
  d.useEffect(() => {
    let o = [...n.current]
    for (let [i, l] of t.entries())
      if (n.current[i] !== l) {
        let a = r(t, o)
        return (n.current = t), a
      }
  }, [r, ...t])
}
function Op(e) {
  return [e.screenX, e.screenY]
}
function Xv() {
  let e = d.useRef([-1, -1])
  return {
    wasMoved(t) {
      let n = Op(t)
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0)
    },
    update(t) {
      e.current = Op(t)
    },
  }
}
function Zv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Aw() {
  return /Android/gi.test(window.navigator.userAgent)
}
function Iw() {
  return Zv() || Aw()
}
var Dw = ((e) => (
    (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e
  ))(Dw || {}),
  Fw = ((e) => (
    (e[(e.Single = 0)] = 'Single'), (e[(e.Multi = 1)] = 'Multi'), e
  ))(Fw || {}),
  Mw = ((e) => (
    (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e
  ))(Mw || {}),
  Uw = ((e) => (
    (e[(e.OpenCombobox = 0)] = 'OpenCombobox'),
    (e[(e.CloseCombobox = 1)] = 'CloseCombobox'),
    (e[(e.GoToOption = 2)] = 'GoToOption'),
    (e[(e.RegisterOption = 3)] = 'RegisterOption'),
    (e[(e.UnregisterOption = 4)] = 'UnregisterOption'),
    (e[(e.RegisterLabel = 5)] = 'RegisterLabel'),
    e
  ))(Uw || {})
function ks(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = Sd(t(e.options.slice()), (i) => i.dataRef.current.domRef.current),
    o = n ? r.indexOf(n) : null
  return o === -1 && (o = null), { options: r, activeOptionIndex: o }
}
let zw = {
    1(e) {
      var t
      return ((t = e.dataRef.current) != null && t.disabled) ||
        e.comboboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, comboboxState: 1 }
    },
    0(e) {
      var t
      if (
        ((t = e.dataRef.current) != null && t.disabled) ||
        e.comboboxState === 0
      )
        return e
      let n = e.activeOptionIndex
      if (e.dataRef.current) {
        let { isSelected: r } = e.dataRef.current,
          o = e.options.findIndex((i) => r(i.dataRef.current.value))
        o !== -1 && (n = o)
      }
      return { ...e, comboboxState: 0, activeOptionIndex: n }
    },
    2(e, t) {
      var n, r, o, i
      if (
        ((n = e.dataRef.current) != null && n.disabled) ||
        ((r = e.dataRef.current) != null &&
          r.optionsRef.current &&
          !(
            (o = e.dataRef.current) != null && o.optionsPropsRef.current.static
          ) &&
          e.comboboxState === 1)
      )
        return e
      let l = ks(e)
      if (l.activeOptionIndex === null) {
        let s = l.options.findIndex((u) => !u.dataRef.current.disabled)
        s !== -1 && (l.activeOptionIndex = s)
      }
      let a = Qv(t, {
        resolveItems: () => l.options,
        resolveActiveIndex: () => l.activeOptionIndex,
        resolveId: (s) => s.id,
        resolveDisabled: (s) => s.dataRef.current.disabled,
      })
      return {
        ...e,
        ...l,
        activeOptionIndex: a,
        activationTrigger: (i = t.trigger) != null ? i : 1,
      }
    },
    3: (e, t) => {
      var n, r
      let o = { id: t.id, dataRef: t.dataRef },
        i = ks(e, (a) => [...a, o])
      e.activeOptionIndex === null &&
        (n = e.dataRef.current) != null &&
        n.isSelected(t.dataRef.current.value) &&
        (i.activeOptionIndex = i.options.indexOf(o))
      let l = { ...e, ...i, activationTrigger: 1 }
      return (
        (r = e.dataRef.current) != null &&
          r.__demoMode &&
          e.dataRef.current.value === void 0 &&
          (l.activeOptionIndex = 0),
        l
      )
    },
    4: (e, t) => {
      let n = ks(e, (r) => {
        let o = r.findIndex((i) => i.id === t.id)
        return o !== -1 && r.splice(o, 1), r
      })
      return { ...e, ...n, activationTrigger: 1 }
    },
    5: (e, t) => ({ ...e, labelId: t.id }),
  },
  $d = d.createContext(null)
$d.displayName = 'ComboboxActionsContext'
function vi(e) {
  let t = d.useContext($d)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, vi), n)
  }
  return t
}
let kd = d.createContext(null)
kd.displayName = 'ComboboxDataContext'
function to(e) {
  let t = d.useContext(kd)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, to), n)
  }
  return t
}
function Bw(e, t) {
  return re(t.type, zw, e, t)
}
let Hw = d.Fragment
function Vw(e, t) {
  let {
      value: n,
      defaultValue: r,
      onChange: o,
      form: i,
      name: l,
      by: a = (_, U) => _ === U,
      disabled: s = !1,
      __demoMode: u = !1,
      nullable: c = !1,
      multiple: f = !1,
      ...p
    } = e,
    [g = f ? [] : void 0, x] = Gv(n, o, r),
    [y, b] = d.useReducer(Bw, {
      dataRef: d.createRef(),
      comboboxState: u ? 0 : 1,
      options: [],
      activeOptionIndex: null,
      activationTrigger: 1,
      labelId: null,
    }),
    v = d.useRef(!1),
    h = d.useRef({ static: !1, hold: !1 }),
    w = d.useRef(null),
    S = d.useRef(null),
    E = d.useRef(null),
    C = d.useRef(null),
    O = L(
      typeof a == 'string'
        ? (_, U) => {
            let V = a
            return (_ == null ? void 0 : _[V]) === (U == null ? void 0 : U[V])
          }
        : a
    ),
    T = d.useCallback(
      (_) => re(k.mode, { 1: () => g.some((U) => O(U, _)), 0: () => O(g, _) }),
      [g]
    ),
    k = d.useMemo(
      () => ({
        ...y,
        optionsPropsRef: h,
        labelRef: w,
        inputRef: S,
        buttonRef: E,
        optionsRef: C,
        value: g,
        defaultValue: r,
        disabled: s,
        mode: f ? 1 : 0,
        get activeOptionIndex() {
          if (
            v.current &&
            y.activeOptionIndex === null &&
            y.options.length > 0
          ) {
            let _ = y.options.findIndex((U) => !U.dataRef.current.disabled)
            if (_ !== -1) return _
          }
          return y.activeOptionIndex
        },
        compare: O,
        isSelected: T,
        nullable: c,
        __demoMode: u,
      }),
      [g, r, s, f, c, u, y]
    ),
    $ = d.useRef(
      k.activeOptionIndex !== null ? k.options[k.activeOptionIndex] : null
    )
  d.useEffect(() => {
    let _ = k.activeOptionIndex !== null ? k.options[k.activeOptionIndex] : null
    $.current !== _ && ($.current = _)
  }),
    ae(() => {
      y.dataRef.current = k
    }, [k]),
    Ed(
      [k.buttonRef, k.inputRef, k.optionsRef],
      () => z.closeCombobox(),
      k.comboboxState === 0
    )
  let R = d.useMemo(
      () => ({
        open: k.comboboxState === 0,
        disabled: s,
        activeIndex: k.activeOptionIndex,
        activeOption:
          k.activeOptionIndex === null
            ? null
            : k.options[k.activeOptionIndex].dataRef.current.value,
        value: g,
      }),
      [k, s, g]
    ),
    H = L((_) => {
      let U = k.options.find((V) => V.id === _)
      U && F(U.dataRef.current.value)
    }),
    W = L(() => {
      if (k.activeOptionIndex !== null) {
        let { dataRef: _, id: U } = k.options[k.activeOptionIndex]
        F(_.current.value), z.goToOption(Z.Specific, U)
      }
    }),
    M = L(() => {
      b({ type: 0 }), (v.current = !0)
    }),
    q = L(() => {
      b({ type: 1 }), (v.current = !1)
    }),
    ne = L(
      (_, U, V) => (
        (v.current = !1),
        _ === Z.Specific
          ? b({ type: 2, focus: Z.Specific, id: U, trigger: V })
          : b({ type: 2, focus: _, trigger: V })
      )
    ),
    ie = L(
      (_, U) => (
        b({ type: 3, id: _, dataRef: U }),
        () => {
          var V
          ;((V = $.current) == null ? void 0 : V.id) === _ && (v.current = !0),
            b({ type: 4, id: _ })
        }
      )
    ),
    j = L((_) => (b({ type: 5, id: _ }), () => b({ type: 5, id: null }))),
    F = L((_) =>
      re(k.mode, {
        0() {
          return x == null ? void 0 : x(_)
        },
        1() {
          let U = k.value.slice(),
            V = U.findIndex((je) => O(je, _))
          return (
            V === -1 ? U.push(_) : U.splice(V, 1), x == null ? void 0 : x(U)
          )
        },
      })
    ),
    z = d.useMemo(
      () => ({
        onChange: F,
        registerOption: ie,
        registerLabel: j,
        goToOption: ne,
        closeCombobox: q,
        openCombobox: M,
        selectActiveOption: W,
        selectOption: H,
      }),
      []
    ),
    K = t === null ? {} : { ref: t },
    Y = d.useRef(null),
    He = Mt()
  return (
    d.useEffect(() => {
      Y.current &&
        r !== void 0 &&
        He.addEventListener(Y.current, 'reset', () => {
          F(r)
        })
    }, [Y, F]),
    D.createElement(
      $d.Provider,
      { value: z },
      D.createElement(
        kd.Provider,
        { value: k },
        D.createElement(
          Od,
          { value: re(k.comboboxState, { 0: be.Open, 1: be.Closed }) },
          l != null &&
            g != null &&
            Td({ [l]: g }).map(([_, U], V) =>
              D.createElement(ni, {
                features: Br.Hidden,
                ref:
                  V === 0
                    ? (je) => {
                        var Fn
                        Y.current =
                          (Fn = je == null ? void 0 : je.closest('form')) !=
                          null
                            ? Fn
                            : null
                      }
                    : void 0,
                ...zl({
                  key: _,
                  as: 'input',
                  type: 'hidden',
                  hidden: !0,
                  readOnly: !0,
                  form: i,
                  name: _,
                  value: U,
                }),
              })
            ),
          ge({
            ourProps: K,
            theirProps: p,
            slot: R,
            defaultTag: Hw,
            name: 'Combobox',
          })
        )
      )
    )
  )
}
let Ww = 'input'
function Kw(e, t) {
  var n, r, o, i
  let l = qe(),
    {
      id: a = `headlessui-combobox-input-${l}`,
      onChange: s,
      displayValue: u,
      type: c = 'text',
      ...f
    } = e,
    p = to('Combobox.Input'),
    g = vi('Combobox.Input'),
    x = Se(p.inputRef, t),
    y = d.useRef(!1),
    b = Mt(),
    v = (function () {
      var R
      return typeof u == 'function' && p.value !== void 0
        ? (R = u(p.value)) != null
          ? R
          : ''
        : typeof p.value == 'string'
        ? p.value
        : ''
    })()
  ri(
    ([R, H], [W, M]) => {
      if (y.current) return
      let q = p.inputRef.current
      q &&
        (((M === 0 && H === 1) || R !== W) && (q.value = R),
        requestAnimationFrame(() => {
          if (y.current || !q) return
          let { selectionStart: ne, selectionEnd: ie } = q
          Math.abs((ie ?? 0) - (ne ?? 0)) === 0 &&
            ne === 0 &&
            q.setSelectionRange(q.value.length, q.value.length)
        }))
    },
    [v, p.comboboxState]
  ),
    ri(
      ([R], [H]) => {
        if (R === 0 && H === 1) {
          if (y.current) return
          let W = p.inputRef.current
          if (!W) return
          let M = W.value,
            { selectionStart: q, selectionEnd: ne, selectionDirection: ie } = W
          ;(W.value = ''),
            (W.value = M),
            ie !== null
              ? W.setSelectionRange(q, ne, ie)
              : W.setSelectionRange(q, ne)
        }
      },
      [p.comboboxState]
    )
  let h = d.useRef(!1),
    w = L(() => {
      h.current = !0
    }),
    S = L(() => {
      b.nextFrame(() => {
        h.current = !1
      })
    }),
    E = L((R) => {
      switch (((y.current = !0), R.key)) {
        case J.Backspace:
        case J.Delete:
          if (p.mode !== 0 || !p.nullable) return
          let H = R.currentTarget
          b.requestAnimationFrame(() => {
            H.value === '' &&
              (g.onChange(null),
              p.optionsRef.current && (p.optionsRef.current.scrollTop = 0),
              g.goToOption(Z.Nothing))
          })
          break
        case J.Enter:
          if (((y.current = !1), p.comboboxState !== 0 || h.current)) return
          if (
            (R.preventDefault(),
            R.stopPropagation(),
            p.activeOptionIndex === null)
          ) {
            g.closeCombobox()
            return
          }
          g.selectActiveOption(), p.mode === 0 && g.closeCombobox()
          break
        case J.ArrowDown:
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            re(p.comboboxState, {
              0: () => {
                g.goToOption(Z.Next)
              },
              1: () => {
                g.openCombobox()
              },
            })
          )
        case J.ArrowUp:
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            re(p.comboboxState, {
              0: () => {
                g.goToOption(Z.Previous)
              },
              1: () => {
                g.openCombobox(),
                  b.nextFrame(() => {
                    p.value || g.goToOption(Z.Last)
                  })
              },
            })
          )
        case J.Home:
          if (R.shiftKey) break
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            g.goToOption(Z.First)
          )
        case J.PageUp:
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            g.goToOption(Z.First)
          )
        case J.End:
          if (R.shiftKey) break
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            g.goToOption(Z.Last)
          )
        case J.PageDown:
          return (
            (y.current = !1),
            R.preventDefault(),
            R.stopPropagation(),
            g.goToOption(Z.Last)
          )
        case J.Escape:
          return (
            (y.current = !1),
            p.comboboxState !== 0
              ? void 0
              : (R.preventDefault(),
                p.optionsRef.current &&
                  !p.optionsPropsRef.current.static &&
                  R.stopPropagation(),
                g.closeCombobox())
          )
        case J.Tab:
          if (((y.current = !1), p.comboboxState !== 0)) return
          p.mode === 0 && g.selectActiveOption(), g.closeCombobox()
          break
      }
    }),
    C = L((R) => {
      s == null || s(R), g.openCombobox()
    }),
    O = L(() => {
      y.current = !1
    }),
    T = mi(() => {
      if (p.labelId) return [p.labelId].join(' ')
    }, [p.labelId]),
    k = d.useMemo(
      () => ({ open: p.comboboxState === 0, disabled: p.disabled }),
      [p]
    ),
    $ = {
      ref: x,
      id: a,
      role: 'combobox',
      type: c,
      'aria-controls': (n = p.optionsRef.current) == null ? void 0 : n.id,
      'aria-expanded': p.comboboxState === 0,
      'aria-activedescendant':
        p.activeOptionIndex === null ||
        (r = p.options[p.activeOptionIndex]) == null
          ? void 0
          : r.id,
      'aria-labelledby': T,
      'aria-autocomplete': 'list',
      defaultValue:
        (i =
          (o = e.defaultValue) != null
            ? o
            : p.defaultValue !== void 0
            ? u == null
              ? void 0
              : u(p.defaultValue)
            : null) != null
          ? i
          : p.defaultValue,
      disabled: p.disabled,
      onCompositionStart: w,
      onCompositionEnd: S,
      onKeyDown: E,
      onChange: C,
      onBlur: O,
    }
  return ge({
    ourProps: $,
    theirProps: f,
    slot: k,
    defaultTag: Ww,
    name: 'Combobox.Input',
  })
}
let Qw = 'button'
function qw(e, t) {
  var n
  let r = to('Combobox.Button'),
    o = vi('Combobox.Button'),
    i = Se(r.buttonRef, t),
    l = qe(),
    { id: a = `headlessui-combobox-button-${l}`, ...s } = e,
    u = Mt(),
    c = L((y) => {
      switch (y.key) {
        case J.ArrowDown:
          return (
            y.preventDefault(),
            y.stopPropagation(),
            r.comboboxState === 1 && o.openCombobox(),
            u.nextFrame(() => {
              var b
              return (b = r.inputRef.current) == null
                ? void 0
                : b.focus({ preventScroll: !0 })
            })
          )
        case J.ArrowUp:
          return (
            y.preventDefault(),
            y.stopPropagation(),
            r.comboboxState === 1 &&
              (o.openCombobox(),
              u.nextFrame(() => {
                r.value || o.goToOption(Z.Last)
              })),
            u.nextFrame(() => {
              var b
              return (b = r.inputRef.current) == null
                ? void 0
                : b.focus({ preventScroll: !0 })
            })
          )
        case J.Escape:
          return r.comboboxState !== 0
            ? void 0
            : (y.preventDefault(),
              r.optionsRef.current &&
                !r.optionsPropsRef.current.static &&
                y.stopPropagation(),
              o.closeCombobox(),
              u.nextFrame(() => {
                var b
                return (b = r.inputRef.current) == null
                  ? void 0
                  : b.focus({ preventScroll: !0 })
              }))
        default:
          return
      }
    }),
    f = L((y) => {
      if (Cd(y.currentTarget)) return y.preventDefault()
      r.comboboxState === 0
        ? o.closeCombobox()
        : (y.preventDefault(), o.openCombobox()),
        u.nextFrame(() => {
          var b
          return (b = r.inputRef.current) == null
            ? void 0
            : b.focus({ preventScroll: !0 })
        })
    }),
    p = mi(() => {
      if (r.labelId) return [r.labelId, a].join(' ')
    }, [r.labelId, a]),
    g = d.useMemo(
      () => ({
        open: r.comboboxState === 0,
        disabled: r.disabled,
        value: r.value,
      }),
      [r]
    ),
    x = {
      ref: i,
      id: a,
      type: Wv(e, r.buttonRef),
      tabIndex: -1,
      'aria-haspopup': 'listbox',
      'aria-controls': (n = r.optionsRef.current) == null ? void 0 : n.id,
      'aria-expanded': r.comboboxState === 0,
      'aria-labelledby': p,
      disabled: r.disabled,
      onClick: f,
      onKeyDown: c,
    }
  return ge({
    ourProps: x,
    theirProps: s,
    slot: g,
    defaultTag: Qw,
    name: 'Combobox.Button',
  })
}
let Yw = 'label'
function Jw(e, t) {
  let n = qe(),
    { id: r = `headlessui-combobox-label-${n}`, ...o } = e,
    i = to('Combobox.Label'),
    l = vi('Combobox.Label'),
    a = Se(i.labelRef, t)
  ae(() => l.registerLabel(r), [r])
  let s = L(() => {
      var c
      return (c = i.inputRef.current) == null
        ? void 0
        : c.focus({ preventScroll: !0 })
    }),
    u = d.useMemo(
      () => ({ open: i.comboboxState === 0, disabled: i.disabled }),
      [i]
    )
  return ge({
    ourProps: { ref: a, id: r, onClick: s },
    theirProps: o,
    slot: u,
    defaultTag: Yw,
    name: 'Combobox.Label',
  })
}
let Gw = 'ul',
  Xw = jn.RenderStrategy | jn.Static
function Zw(e, t) {
  let n = qe(),
    { id: r = `headlessui-combobox-options-${n}`, hold: o = !1, ...i } = e,
    l = to('Combobox.Options'),
    a = Se(l.optionsRef, t),
    s = hi(),
    u = (() =>
      s !== null ? (s & be.Open) === be.Open : l.comboboxState === 0)()
  ae(() => {
    var g
    l.optionsPropsRef.current.static = (g = e.static) != null ? g : !1
  }, [l.optionsPropsRef, e.static]),
    ae(() => {
      l.optionsPropsRef.current.hold = o
    }, [l.optionsPropsRef, o]),
    kw({
      container: l.optionsRef.current,
      enabled: l.comboboxState === 0,
      accept(g) {
        return g.getAttribute('role') === 'option'
          ? NodeFilter.FILTER_REJECT
          : g.hasAttribute('role')
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT
      },
      walk(g) {
        g.setAttribute('role', 'none')
      },
    })
  let c = mi(() => {
      var g, x
      return (x = l.labelId) != null
        ? x
        : (g = l.buttonRef.current) == null
        ? void 0
        : g.id
    }, [l.labelId, l.buttonRef.current]),
    f = d.useMemo(() => ({ open: l.comboboxState === 0 }), [l]),
    p = {
      'aria-labelledby': c,
      role: 'listbox',
      'aria-multiselectable': l.mode === 1 ? !0 : void 0,
      id: r,
      ref: a,
    }
  return ge({
    ourProps: p,
    theirProps: i,
    slot: f,
    defaultTag: Gw,
    features: Xw,
    visible: u,
    name: 'Combobox.Options',
  })
}
let eb = 'li'
function tb(e, t) {
  var n, r
  let o = qe(),
    {
      id: i = `headlessui-combobox-option-${o}`,
      disabled: l = !1,
      value: a,
      ...s
    } = e,
    u = to('Combobox.Option'),
    c = vi('Combobox.Option'),
    f =
      u.activeOptionIndex !== null
        ? u.options[u.activeOptionIndex].id === i
        : !1,
    p = u.isSelected(a),
    g = d.useRef(null),
    x = vt({
      disabled: l,
      value: a,
      domRef: g,
      textValue:
        (r = (n = g.current) == null ? void 0 : n.textContent) == null
          ? void 0
          : r.toLowerCase(),
    }),
    y = Se(t, g),
    b = L(() => c.selectOption(i))
  ae(() => c.registerOption(i, x), [x, i])
  let v = d.useRef(!u.__demoMode)
  ae(() => {
    if (!u.__demoMode) return
    let k = Nt()
    return (
      k.requestAnimationFrame(() => {
        v.current = !0
      }),
      k.dispose
    )
  }, []),
    ae(() => {
      if (
        u.comboboxState !== 0 ||
        !f ||
        !v.current ||
        u.activationTrigger === 0
      )
        return
      let k = Nt()
      return (
        k.requestAnimationFrame(() => {
          var $, R
          ;(R = ($ = g.current) == null ? void 0 : $.scrollIntoView) == null ||
            R.call($, { block: 'nearest' })
        }),
        k.dispose
      )
    }, [g, f, u.comboboxState, u.activationTrigger, u.activeOptionIndex])
  let h = L((k) => {
      if (l) return k.preventDefault()
      b(),
        u.mode === 0 && c.closeCombobox(),
        Iw() ||
          requestAnimationFrame(() => {
            var $
            return ($ = u.inputRef.current) == null ? void 0 : $.focus()
          })
    }),
    w = L(() => {
      if (l) return c.goToOption(Z.Nothing)
      c.goToOption(Z.Specific, i)
    }),
    S = Xv(),
    E = L((k) => S.update(k)),
    C = L((k) => {
      S.wasMoved(k) && (l || f || c.goToOption(Z.Specific, i, 0))
    }),
    O = L((k) => {
      S.wasMoved(k) &&
        (l ||
          (f && (u.optionsPropsRef.current.hold || c.goToOption(Z.Nothing))))
    }),
    T = d.useMemo(() => ({ active: f, selected: p, disabled: l }), [f, p, l])
  return ge({
    ourProps: {
      id: i,
      ref: y,
      role: 'option',
      tabIndex: l === !0 ? void 0 : -1,
      'aria-disabled': l === !0 ? !0 : void 0,
      'aria-selected': p,
      disabled: void 0,
      onClick: h,
      onFocus: w,
      onPointerEnter: E,
      onMouseEnter: E,
      onPointerMove: C,
      onMouseMove: C,
      onPointerLeave: O,
      onMouseLeave: O,
    },
    theirProps: s,
    slot: T,
    defaultTag: eb,
    name: 'Combobox.Option',
  })
}
let nb = pe(Vw),
  rb = pe(qw),
  ob = pe(Kw),
  ib = pe(Jw),
  lb = pe(Zw),
  ab = pe(tb),
  vo = Object.assign(nb, {
    Input: ob,
    Button: rb,
    Label: ib,
    Options: lb,
    Option: ab,
  })
var Po = ((e) => (
  (e[(e.Forwards = 0)] = 'Forwards'), (e[(e.Backwards = 1)] = 'Backwards'), e
))(Po || {})
function sb() {
  let e = d.useRef(0)
  return (
    Vv(
      'keydown',
      (t) => {
        t.key === 'Tab' && (e.current = t.shiftKey ? 1 : 0)
      },
      !0
    ),
    e
  )
}
function gi() {
  let e = d.useRef(!1)
  return (
    ae(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    e
  )
}
function yi(...e) {
  return d.useMemo(() => wa(...e), [...e])
}
function eg(e, t, n, r) {
  let o = vt(n)
  d.useEffect(() => {
    e = e ?? window
    function i(l) {
      o.current(l)
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r)
  }, [e, t, r])
}
function ub(e) {
  function t() {
    document.readyState !== 'loading' &&
      (e(), document.removeEventListener('DOMContentLoaded', t))
  }
  typeof window < 'u' &&
    typeof document < 'u' &&
    (document.addEventListener('DOMContentLoaded', t), t())
}
function tg(e) {
  let t = L(e),
    n = d.useRef(!1)
  d.useEffect(
    () => (
      (n.current = !1),
      () => {
        ;(n.current = !0),
          xa(() => {
            n.current && t()
          })
      }
    ),
    [t]
  )
}
function ng(e) {
  if (!e) return new Set()
  if (typeof e == 'function') return new Set(e())
  let t = new Set()
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current)
  return t
}
let cb = 'div'
var rg = ((e) => (
  (e[(e.None = 1)] = 'None'),
  (e[(e.InitialFocus = 2)] = 'InitialFocus'),
  (e[(e.TabLock = 4)] = 'TabLock'),
  (e[(e.FocusLock = 8)] = 'FocusLock'),
  (e[(e.RestoreFocus = 16)] = 'RestoreFocus'),
  (e[(e.All = 30)] = 'All'),
  e
))(rg || {})
function db(e, t) {
  let n = d.useRef(null),
    r = Se(n, t),
    { initialFocus: o, containers: i, features: l = 30, ...a } = e
  eo() || (l = 1)
  let s = yi(n)
  mb({ ownerDocument: s }, !!(l & 16))
  let u = hb({ ownerDocument: s, container: n, initialFocus: o }, !!(l & 2))
  vb(
    { ownerDocument: s, container: n, containers: i, previousActiveElement: u },
    !!(l & 8)
  )
  let c = sb(),
    f = L((y) => {
      let b = n.current
      b &&
        ((v) => v())(() => {
          re(c.current, {
            [Po.Forwards]: () => {
              ll(b, Vn.First, { skipElements: [y.relatedTarget] })
            },
            [Po.Backwards]: () => {
              ll(b, Vn.Last, { skipElements: [y.relatedTarget] })
            },
          })
        })
    }),
    p = Mt(),
    g = d.useRef(!1),
    x = {
      ref: r,
      onKeyDown(y) {
        y.key == 'Tab' &&
          ((g.current = !0),
          p.requestAnimationFrame(() => {
            g.current = !1
          }))
      },
      onBlur(y) {
        let b = ng(i)
        n.current instanceof HTMLElement && b.add(n.current)
        let v = y.relatedTarget
        v instanceof HTMLElement &&
          v.dataset.headlessuiFocusGuard !== 'true' &&
          (og(b, v) ||
            (g.current
              ? ll(
                  n.current,
                  re(c.current, {
                    [Po.Forwards]: () => Vn.Next,
                    [Po.Backwards]: () => Vn.Previous,
                  }) | Vn.WrapAround,
                  { relativeTo: y.target }
                )
              : y.target instanceof HTMLElement && Gn(y.target)))
      },
    }
  return D.createElement(
    D.Fragment,
    null,
    !!(l & 4) &&
      D.createElement(ni, {
        as: 'button',
        type: 'button',
        'data-headlessui-focus-guard': !0,
        onFocus: f,
        features: Br.Focusable,
      }),
    ge({ ourProps: x, theirProps: a, defaultTag: cb, name: 'FocusTrap' }),
    !!(l & 4) &&
      D.createElement(ni, {
        as: 'button',
        type: 'button',
        'data-headlessui-focus-guard': !0,
        onFocus: f,
        features: Br.Focusable,
      })
  )
}
let fb = pe(db),
  go = Object.assign(fb, { features: rg }),
  pn = []
ub(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      pn[0] !== t.target &&
      (pn.unshift(t.target),
      (pn = pn.filter((n) => n != null && n.isConnected)),
      pn.splice(10))
  }
  window.addEventListener('click', e, { capture: !0 }),
    window.addEventListener('mousedown', e, { capture: !0 }),
    window.addEventListener('focus', e, { capture: !0 }),
    document.body.addEventListener('click', e, { capture: !0 }),
    document.body.addEventListener('mousedown', e, { capture: !0 }),
    document.body.addEventListener('focus', e, { capture: !0 })
})
function pb(e = !0) {
  let t = d.useRef(pn.slice())
  return (
    ri(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          xa(() => {
            t.current.splice(0)
          }),
          r === !1 && n === !0 && (t.current = pn.slice())
      },
      [e, pn, t]
    ),
    L(() => {
      var n
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null
    })
  )
}
function mb({ ownerDocument: e }, t) {
  let n = pb(t)
  ri(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Gn(n()))
  }, [t]),
    tg(() => {
      t && Gn(n())
    })
}
function hb({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = d.useRef(null),
    i = gi()
  return (
    ri(() => {
      if (!r) return
      let l = t.current
      l &&
        xa(() => {
          if (!i.current) return
          let a = e == null ? void 0 : e.activeElement
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === a) {
              o.current = a
              return
            }
          } else if (l.contains(a)) {
            o.current = a
            return
          }
          n != null && n.current
            ? Gn(n.current)
            : ll(l, Vn.First) === Bv.Error &&
              console.warn(
                'There are no focusable elements inside the <FocusTrap />'
              ),
            (o.current = e == null ? void 0 : e.activeElement)
        })
    }, [r]),
    o
  )
}
function vb(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  o
) {
  let i = gi()
  eg(
    e == null ? void 0 : e.defaultView,
    'focus',
    (l) => {
      if (!o || !i.current) return
      let a = ng(n)
      t.current instanceof HTMLElement && a.add(t.current)
      let s = r.current
      if (!s) return
      let u = l.target
      u && u instanceof HTMLElement
        ? og(a, u)
          ? ((r.current = u), Gn(u))
          : (l.preventDefault(), l.stopPropagation(), Gn(s))
        : Gn(r.current)
    },
    !0
  )
}
function og(e, t) {
  for (let n of e) if (n.contains(t)) return !0
  return !1
}
let ig = d.createContext(!1)
function gb() {
  return d.useContext(ig)
}
function ec(e) {
  return D.createElement(ig.Provider, { value: e.force }, e.children)
}
function yb(e) {
  let t = gb(),
    n = d.useContext(lg),
    r = yi(e),
    [o, i] = d.useState(() => {
      if ((!t && n !== null) || Yt.isServer) return null
      let l = r == null ? void 0 : r.getElementById('headlessui-portal-root')
      if (l) return l
      if (r === null) return null
      let a = r.createElement('div')
      return (
        a.setAttribute('id', 'headlessui-portal-root'), r.body.appendChild(a)
      )
    })
  return (
    d.useEffect(() => {
      o !== null &&
        ((r != null && r.body.contains(o)) ||
          r == null ||
          r.body.appendChild(o))
    }, [o, r]),
    d.useEffect(() => {
      t || (n !== null && i(n.current))
    }, [n, i, t]),
    o
  )
}
let xb = d.Fragment
function wb(e, t) {
  let n = e,
    r = d.useRef(null),
    o = Se(
      $w((c) => {
        r.current = c
      }),
      t
    ),
    i = yi(r),
    l = yb(r),
    [a] = d.useState(() => {
      var c
      return Yt.isServer
        ? null
        : (c = i == null ? void 0 : i.createElement('div')) != null
        ? c
        : null
    }),
    s = d.useContext(tc),
    u = eo()
  return (
    ae(() => {
      !l ||
        !a ||
        l.contains(a) ||
        (a.setAttribute('data-headlessui-portal', ''), l.appendChild(a))
    }, [l, a]),
    ae(() => {
      if (a && s) return s.register(a)
    }, [s, a]),
    tg(() => {
      var c
      !l ||
        !a ||
        (a instanceof Node && l.contains(a) && l.removeChild(a),
        l.childNodes.length <= 0 &&
          ((c = l.parentElement) == null || c.removeChild(l)))
    }),
    u
      ? !l || !a
        ? null
        : sr.createPortal(
            ge({
              ourProps: { ref: o },
              theirProps: n,
              defaultTag: xb,
              name: 'Portal',
            }),
            a
          )
      : null
  )
}
let bb = d.Fragment,
  lg = d.createContext(null)
function Sb(e, t) {
  let { target: n, ...r } = e,
    o = { ref: Se(t) }
  return D.createElement(
    lg.Provider,
    { value: n },
    ge({ ourProps: o, theirProps: r, defaultTag: bb, name: 'Popover.Group' })
  )
}
let tc = d.createContext(null)
function Eb() {
  let e = d.useContext(tc),
    t = d.useRef([]),
    n = L((i) => (t.current.push(i), e && e.register(i), () => r(i))),
    r = L((i) => {
      let l = t.current.indexOf(i)
      l !== -1 && t.current.splice(l, 1), e && e.unregister(i)
    }),
    o = d.useMemo(() => ({ register: n, unregister: r, portals: t }), [n, r, t])
  return [
    t,
    d.useMemo(
      () =>
        function ({ children: i }) {
          return D.createElement(tc.Provider, { value: o }, i)
        },
      [o]
    ),
  ]
}
let Cb = pe(wb),
  Tb = pe(Sb),
  nc = Object.assign(Cb, { Group: Tb }),
  ag = d.createContext(null)
function sg() {
  let e = d.useContext(ag)
  if (e === null) {
    let t = new Error(
      'You used a <Description /> component, but it is not inside a relevant parent.'
    )
    throw (Error.captureStackTrace && Error.captureStackTrace(t, sg), t)
  }
  return e
}
function Pb() {
  let [e, t] = d.useState([])
  return [
    e.length > 0 ? e.join(' ') : void 0,
    d.useMemo(
      () =>
        function (n) {
          let r = L(
              (i) => (
                t((l) => [...l, i]),
                () =>
                  t((l) => {
                    let a = l.slice(),
                      s = a.indexOf(i)
                    return s !== -1 && a.splice(s, 1), a
                  })
              )
            ),
            o = d.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            )
          return D.createElement(ag.Provider, { value: o }, n.children)
        },
      [t]
    ),
  ]
}
let Ob = 'p'
function $b(e, t) {
  let n = qe(),
    { id: r = `headlessui-description-${n}`, ...o } = e,
    i = sg(),
    l = Se(t)
  ae(() => i.register(r), [r, i.register])
  let a = { ref: l, ...i.props, id: r }
  return ge({
    ourProps: a,
    theirProps: o,
    slot: i.slot || {},
    defaultTag: Ob,
    name: i.name || 'Description',
  })
}
let kb = pe($b),
  Nb = Object.assign(kb, {}),
  Nd = d.createContext(() => {})
Nd.displayName = 'StackContext'
var rc = ((e) => ((e[(e.Add = 0)] = 'Add'), (e[(e.Remove = 1)] = 'Remove'), e))(
  rc || {}
)
function Rb() {
  return d.useContext(Nd)
}
function jb({ children: e, onUpdate: t, type: n, element: r, enabled: o }) {
  let i = Rb(),
    l = L((...a) => {
      t == null || t(...a), i(...a)
    })
  return (
    ae(() => {
      let a = o === void 0 || o === !0
      return (
        a && l(0, n, r),
        () => {
          a && l(1, n, r)
        }
      )
    }, [l, n, r, o]),
    D.createElement(Nd.Provider, { value: l }, e)
  )
}
function _b(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const Lb = typeof Object.is == 'function' ? Object.is : _b,
  { useState: Ab, useEffect: Ib, useLayoutEffect: Db, useDebugValue: Fb } = ml
function Mb(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = Ab({ inst: { value: r, getSnapshot: t } })
  return (
    Db(() => {
      ;(o.value = r), (o.getSnapshot = t), Ns(o) && i({ inst: o })
    }, [e, r, t]),
    Ib(
      () => (
        Ns(o) && i({ inst: o }),
        e(() => {
          Ns(o) && i({ inst: o })
        })
      ),
      [e]
    ),
    Fb(r),
    r
  )
}
function Ns(e) {
  const t = e.getSnapshot,
    n = e.value
  try {
    const r = t()
    return !Lb(n, r)
  } catch {
    return !0
  }
}
function Ub(e, t, n) {
  return t()
}
const zb =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Bb = !zb,
  Hb = Bb ? Ub : Mb,
  Vb = 'useSyncExternalStore' in ml ? ((e) => e.useSyncExternalStore)(ml) : Hb
function Wb(e) {
  return Vb(e.subscribe, e.getSnapshot, e.getSnapshot)
}
function Kb(e, t) {
  let n = e(),
    r = new Set()
  return {
    getSnapshot() {
      return n
    },
    subscribe(o) {
      return r.add(o), () => r.delete(o)
    },
    dispatch(o, ...i) {
      let l = t[o].call(n, ...i)
      l && ((n = l), r.forEach((a) => a()))
    },
  }
}
function Qb() {
  let e
  return {
    before({ doc: t }) {
      var n
      let r = t.documentElement
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        o = r.clientWidth - r.offsetWidth,
        i = e - o
      n.style(r, 'paddingRight', `${i}px`)
    },
  }
}
function qb() {
  if (!Zv()) return {}
  let e
  return {
    before() {
      e = window.pageYOffset
    },
    after({ doc: t, d: n, meta: r }) {
      function o(l) {
        return r.containers.flatMap((a) => a()).some((a) => a.contains(l))
      }
      n.style(t.body, 'marginTop', `-${e}px`), window.scrollTo(0, 0)
      let i = null
      n.addEventListener(
        t,
        'click',
        (l) => {
          if (l.target instanceof HTMLElement)
            try {
              let a = l.target.closest('a')
              if (!a) return
              let { hash: s } = new URL(a.href),
                u = t.querySelector(s)
              u && !o(u) && (i = u)
            } catch {}
        },
        !0
      ),
        n.addEventListener(
          t,
          'touchmove',
          (l) => {
            l.target instanceof HTMLElement &&
              !o(l.target) &&
              l.preventDefault()
          },
          { passive: !1 }
        ),
        n.add(() => {
          window.scrollTo(0, window.pageYOffset + e),
            i &&
              i.isConnected &&
              (i.scrollIntoView({ block: 'nearest' }), (i = null))
        })
    },
  }
}
function Yb() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, 'overflow', 'hidden')
    },
  }
}
function Jb(e) {
  let t = {}
  for (let n of e) Object.assign(t, n(t))
  return t
}
let qn = Kb(() => new Map(), {
  PUSH(e, t) {
    var n
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Nt(), meta: new Set() }
    return r.count++, r.meta.add(t), this.set(e, r), this
  },
  POP(e, t) {
    let n = this.get(e)
    return n && (n.count--, n.meta.delete(t)), this
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Jb(n) },
      o = [qb(), Qb(), Yb()]
    o.forEach(({ before: i }) => (i == null ? void 0 : i(r))),
      o.forEach(({ after: i }) => (i == null ? void 0 : i(r)))
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose()
  },
  TEARDOWN({ doc: e }) {
    this.delete(e)
  },
})
qn.subscribe(() => {
  let e = qn.getSnapshot(),
    t = new Map()
  for (let [n] of e) t.set(n, n.documentElement.style.overflow)
  for (let n of e.values()) {
    let r = t.get(n.doc) === 'hidden',
      o = n.count !== 0
    ;((o && !r) || (!o && r)) &&
      qn.dispatch(n.count > 0 ? 'SCROLL_PREVENT' : 'SCROLL_ALLOW', n),
      n.count === 0 && qn.dispatch('TEARDOWN', n)
  }
})
function Gb(e, t, n) {
  let r = Wb(qn),
    o = e ? r.get(e) : void 0,
    i = o ? o.count > 0 : !1
  return (
    ae(() => {
      if (!(!e || !t))
        return qn.dispatch('PUSH', e, n), () => qn.dispatch('POP', e, n)
    }, [t, e]),
    i
  )
}
let Rs = new Map(),
  yo = new Map()
function $p(e, t = !0) {
  ae(() => {
    var n
    if (!t) return
    let r = typeof e == 'function' ? e() : e.current
    if (!r) return
    function o() {
      var l
      if (!r) return
      let a = (l = yo.get(r)) != null ? l : 1
      if ((a === 1 ? yo.delete(r) : yo.set(r, a - 1), a !== 1)) return
      let s = Rs.get(r)
      s &&
        (s['aria-hidden'] === null
          ? r.removeAttribute('aria-hidden')
          : r.setAttribute('aria-hidden', s['aria-hidden']),
        (r.inert = s.inert),
        Rs.delete(r))
    }
    let i = (n = yo.get(r)) != null ? n : 0
    return (
      yo.set(r, i + 1),
      i !== 0 ||
        (Rs.set(r, {
          'aria-hidden': r.getAttribute('aria-hidden'),
          inert: r.inert,
        }),
        r.setAttribute('aria-hidden', 'true'),
        (r.inert = !0)),
      o
    )
  }, [e, t])
}
function Xb({ defaultContainers: e = [], portals: t } = {}) {
  let n = d.useRef(null),
    r = yi(n),
    o = L(() => {
      var i
      let l = []
      for (let a of e)
        a !== null &&
          (a instanceof HTMLElement
            ? l.push(a)
            : 'current' in a &&
              a.current instanceof HTMLElement &&
              l.push(a.current))
      if (t != null && t.current) for (let a of t.current) l.push(a)
      for (let a of (i =
        r == null ? void 0 : r.querySelectorAll('html > *, body > *')) != null
        ? i
        : [])
        a !== document.body &&
          a !== document.head &&
          a instanceof HTMLElement &&
          a.id !== 'headlessui-portal-root' &&
          (a.contains(n.current) || l.some((s) => a.contains(s)) || l.push(a))
      return l
    })
  return {
    resolveContainers: o,
    contains: L((i) => o().some((l) => l.contains(i))),
    mainTreeNodeRef: n,
    MainTreeNode: d.useMemo(
      () =>
        function () {
          return D.createElement(ni, { features: Br.Hidden, ref: n })
        },
      [n]
    ),
  }
}
var Zb = ((e) => (
    (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e
  ))(Zb || {}),
  eS = ((e) => ((e[(e.SetTitleId = 0)] = 'SetTitleId'), e))(eS || {})
let tS = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id }
    },
  },
  Bl = d.createContext(null)
Bl.displayName = 'DialogContext'
function xi(e) {
  let t = d.useContext(Bl)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, xi), n)
  }
  return t
}
function nS(e, t, n = () => [document.body]) {
  Gb(e, t, (r) => {
    var o
    return { containers: [...((o = r.containers) != null ? o : []), n] }
  })
}
function rS(e, t) {
  return re(t.type, tS, e, t)
}
let oS = 'div',
  iS = jn.RenderStrategy | jn.Static
function lS(e, t) {
  var n
  let r = qe(),
    {
      id: o = `headlessui-dialog-${r}`,
      open: i,
      onClose: l,
      initialFocus: a,
      __demoMode: s = !1,
      ...u
    } = e,
    [c, f] = d.useState(0),
    p = hi()
  i === void 0 && p !== null && (i = (p & be.Open) === be.Open)
  let g = d.useRef(null),
    x = Se(g, t),
    y = yi(g),
    b = e.hasOwnProperty('open') || p !== null,
    v = e.hasOwnProperty('onClose')
  if (!b && !v)
    throw new Error(
      'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
    )
  if (!b)
    throw new Error(
      'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
    )
  if (!v)
    throw new Error(
      'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
    )
  if (typeof i != 'boolean')
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`
    )
  if (typeof l != 'function')
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`
    )
  let h = i ? 0 : 1,
    [w, S] = d.useReducer(rS, {
      titleId: null,
      descriptionId: null,
      panelRef: d.createRef(),
    }),
    E = L(() => l(!1)),
    C = L((_e) => S({ type: 0, id: _e })),
    O = eo() ? (s ? !1 : h === 0) : !1,
    T = c > 1,
    k = d.useContext(Bl) !== null,
    [$, R] = Eb(),
    {
      resolveContainers: H,
      mainTreeNodeRef: W,
      MainTreeNode: M,
    } = Xb({
      portals: $,
      defaultContainers: [(n = w.panelRef.current) != null ? n : g.current],
    }),
    q = T ? 'parent' : 'leaf',
    ne = p !== null ? (p & be.Closing) === be.Closing : !1,
    ie = (() => (k || ne ? !1 : O))(),
    j = d.useCallback(() => {
      var _e, Bt
      return (Bt = Array.from(
        (_e = y == null ? void 0 : y.querySelectorAll('body > *')) != null
          ? _e
          : []
      ).find((ct) =>
        ct.id === 'headlessui-portal-root'
          ? !1
          : ct.contains(W.current) && ct instanceof HTMLElement
      )) != null
        ? Bt
        : null
    }, [W])
  $p(j, ie)
  let F = (() => (T ? !0 : O))(),
    z = d.useCallback(() => {
      var _e, Bt
      return (Bt = Array.from(
        (_e =
          y == null
            ? void 0
            : y.querySelectorAll('[data-headlessui-portal]')) != null
          ? _e
          : []
      ).find((ct) => ct.contains(W.current) && ct instanceof HTMLElement)) !=
        null
        ? Bt
        : null
    }, [W])
  $p(z, F)
  let K = (() => !(!O || T))()
  Ed(H, E, K)
  let Y = (() => !(T || h !== 0))()
  eg(y == null ? void 0 : y.defaultView, 'keydown', (_e) => {
    Y &&
      (_e.defaultPrevented ||
        (_e.key === J.Escape &&
          (_e.preventDefault(), _e.stopPropagation(), E())))
  })
  let He = (() => !(ne || h !== 0 || k))()
  nS(y, He, H),
    d.useEffect(() => {
      if (h !== 0 || !g.current) return
      let _e = new ResizeObserver((Bt) => {
        for (let ct of Bt) {
          let Ti = ct.target.getBoundingClientRect()
          Ti.x === 0 && Ti.y === 0 && Ti.width === 0 && Ti.height === 0 && E()
        }
      })
      return _e.observe(g.current), () => _e.disconnect()
    }, [h, g, E])
  let [_, U] = Pb(),
    V = d.useMemo(
      () => [{ dialogState: h, close: E, setTitleId: C }, w],
      [h, w, E, C]
    ),
    je = d.useMemo(() => ({ open: h === 0 }), [h]),
    Fn = {
      ref: x,
      id: o,
      role: 'dialog',
      'aria-modal': h === 0 ? !0 : void 0,
      'aria-labelledby': w.titleId,
      'aria-describedby': _,
    }
  return D.createElement(
    jb,
    {
      type: 'Dialog',
      enabled: h === 0,
      element: g,
      onUpdate: L((_e, Bt) => {
        Bt === 'Dialog' &&
          re(_e, {
            [rc.Add]: () => f((ct) => ct + 1),
            [rc.Remove]: () => f((ct) => ct - 1),
          })
      }),
    },
    D.createElement(
      ec,
      { force: !0 },
      D.createElement(
        nc,
        null,
        D.createElement(
          Bl.Provider,
          { value: V },
          D.createElement(
            nc.Group,
            { target: g },
            D.createElement(
              ec,
              { force: !1 },
              D.createElement(
                U,
                { slot: je, name: 'Dialog.Description' },
                D.createElement(
                  go,
                  {
                    initialFocus: a,
                    containers: H,
                    features: O
                      ? re(q, {
                          parent: go.features.RestoreFocus,
                          leaf: go.features.All & ~go.features.FocusLock,
                        })
                      : go.features.None,
                  },
                  D.createElement(
                    R,
                    null,
                    ge({
                      ourProps: Fn,
                      theirProps: u,
                      slot: je,
                      defaultTag: oS,
                      features: iS,
                      visible: h === 0,
                      name: 'Dialog',
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    D.createElement(M, null)
  )
}
let aS = 'div'
function sS(e, t) {
  let n = qe(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
    [{ dialogState: i, close: l }] = xi('Dialog.Overlay'),
    a = Se(t),
    s = L((c) => {
      if (c.target === c.currentTarget) {
        if (Cd(c.currentTarget)) return c.preventDefault()
        c.preventDefault(), c.stopPropagation(), l()
      }
    }),
    u = d.useMemo(() => ({ open: i === 0 }), [i])
  return ge({
    ourProps: { ref: a, id: r, 'aria-hidden': !0, onClick: s },
    theirProps: o,
    slot: u,
    defaultTag: aS,
    name: 'Dialog.Overlay',
  })
}
let uS = 'div'
function cS(e, t) {
  let n = qe(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
    [{ dialogState: i }, l] = xi('Dialog.Backdrop'),
    a = Se(t)
  d.useEffect(() => {
    if (l.panelRef.current === null)
      throw new Error(
        'A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.'
      )
  }, [l.panelRef])
  let s = d.useMemo(() => ({ open: i === 0 }), [i])
  return D.createElement(
    ec,
    { force: !0 },
    D.createElement(
      nc,
      null,
      ge({
        ourProps: { ref: a, id: r, 'aria-hidden': !0 },
        theirProps: o,
        slot: s,
        defaultTag: uS,
        name: 'Dialog.Backdrop',
      })
    )
  )
}
let dS = 'div'
function fS(e, t) {
  let n = qe(),
    { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
    [{ dialogState: i }, l] = xi('Dialog.Panel'),
    a = Se(t, l.panelRef),
    s = d.useMemo(() => ({ open: i === 0 }), [i]),
    u = L((c) => {
      c.stopPropagation()
    })
  return ge({
    ourProps: { ref: a, id: r, onClick: u },
    theirProps: o,
    slot: s,
    defaultTag: dS,
    name: 'Dialog.Panel',
  })
}
let pS = 'h2'
function mS(e, t) {
  let n = qe(),
    { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
    [{ dialogState: i, setTitleId: l }] = xi('Dialog.Title'),
    a = Se(t)
  d.useEffect(() => (l(r), () => l(null)), [r, l])
  let s = d.useMemo(() => ({ open: i === 0 }), [i])
  return ge({
    ourProps: { ref: a, id: r },
    theirProps: o,
    slot: s,
    defaultTag: pS,
    name: 'Dialog.Title',
  })
}
let hS = pe(lS),
  vS = pe(cS),
  gS = pe(fS),
  yS = pe(sS),
  xS = pe(mS),
  js = Object.assign(hS, {
    Backdrop: vS,
    Panel: gS,
    Overlay: yS,
    Title: xS,
    Description: Nb,
  }),
  kp =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
function Np(e) {
  var t, n
  let r = (t = e.innerText) != null ? t : '',
    o = e.cloneNode(!0)
  if (!(o instanceof HTMLElement)) return r
  let i = !1
  for (let a of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (i = !0)
  let l = i ? ((n = o.innerText) != null ? n : '') : r
  return kp.test(l) && (l = l.replace(kp, '')), l
}
function wS(e) {
  let t = e.getAttribute('aria-label')
  if (typeof t == 'string') return t.trim()
  let n = e.getAttribute('aria-labelledby')
  if (n) {
    let r = n
      .split(' ')
      .map((o) => {
        let i = document.getElementById(o)
        if (i) {
          let l = i.getAttribute('aria-label')
          return typeof l == 'string' ? l.trim() : Np(i).trim()
        }
        return null
      })
      .filter(Boolean)
    if (r.length > 0) return r.join(', ')
  }
  return Np(e).trim()
}
function bS(e) {
  let t = d.useRef(''),
    n = d.useRef('')
  return L(() => {
    let r = e.current
    if (!r) return ''
    let o = r.innerText
    if (t.current === o) return n.current
    let i = wS(r).trim().toLowerCase()
    return (t.current = o), (n.current = i), i
  })
}
var SS = ((e) => (
    (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e
  ))(SS || {}),
  ES = ((e) => (
    (e[(e.Single = 0)] = 'Single'), (e[(e.Multi = 1)] = 'Multi'), e
  ))(ES || {}),
  CS = ((e) => (
    (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e
  ))(CS || {}),
  TS = ((e) => (
    (e[(e.OpenListbox = 0)] = 'OpenListbox'),
    (e[(e.CloseListbox = 1)] = 'CloseListbox'),
    (e[(e.GoToOption = 2)] = 'GoToOption'),
    (e[(e.Search = 3)] = 'Search'),
    (e[(e.ClearSearch = 4)] = 'ClearSearch'),
    (e[(e.RegisterOption = 5)] = 'RegisterOption'),
    (e[(e.UnregisterOption = 6)] = 'UnregisterOption'),
    (e[(e.RegisterLabel = 7)] = 'RegisterLabel'),
    e
  ))(TS || {})
function _s(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = Sd(t(e.options.slice()), (i) => i.dataRef.current.domRef.current),
    o = n ? r.indexOf(n) : null
  return o === -1 && (o = null), { options: r, activeOptionIndex: o }
}
let PS = {
    1(e) {
      return e.dataRef.current.disabled || e.listboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, listboxState: 1 }
    },
    0(e) {
      if (e.dataRef.current.disabled || e.listboxState === 0) return e
      let t = e.activeOptionIndex,
        { isSelected: n } = e.dataRef.current,
        r = e.options.findIndex((o) => n(o.dataRef.current.value))
      return (
        r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t }
      )
    },
    2(e, t) {
      var n
      if (e.dataRef.current.disabled || e.listboxState === 1) return e
      let r = _s(e),
        o = Qv(t, {
          resolveItems: () => r.options,
          resolveActiveIndex: () => r.activeOptionIndex,
          resolveId: (i) => i.id,
          resolveDisabled: (i) => i.dataRef.current.disabled,
        })
      return {
        ...e,
        ...r,
        searchQuery: '',
        activeOptionIndex: o,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      }
    },
    3: (e, t) => {
      if (e.dataRef.current.disabled || e.listboxState === 1) return e
      let n = e.searchQuery !== '' ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        o = (
          e.activeOptionIndex !== null
            ? e.options
                .slice(e.activeOptionIndex + n)
                .concat(e.options.slice(0, e.activeOptionIndex + n))
            : e.options
        ).find((l) => {
          var a
          return (
            !l.dataRef.current.disabled &&
            ((a = l.dataRef.current.textValue) == null
              ? void 0
              : a.startsWith(r))
          )
        }),
        i = o ? e.options.indexOf(o) : -1
      return i === -1 || i === e.activeOptionIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeOptionIndex: i, activationTrigger: 1 }
    },
    4(e) {
      return e.dataRef.current.disabled ||
        e.listboxState === 1 ||
        e.searchQuery === ''
        ? e
        : { ...e, searchQuery: '' }
    },
    5: (e, t) => {
      let n = { id: t.id, dataRef: t.dataRef },
        r = _s(e, (o) => [...o, n])
      return (
        e.activeOptionIndex === null &&
          e.dataRef.current.isSelected(t.dataRef.current.value) &&
          (r.activeOptionIndex = r.options.indexOf(n)),
        { ...e, ...r }
      )
    },
    6: (e, t) => {
      let n = _s(e, (r) => {
        let o = r.findIndex((i) => i.id === t.id)
        return o !== -1 && r.splice(o, 1), r
      })
      return { ...e, ...n, activationTrigger: 1 }
    },
    7: (e, t) => ({ ...e, labelId: t.id }),
  },
  Rd = d.createContext(null)
Rd.displayName = 'ListboxActionsContext'
function wi(e) {
  let t = d.useContext(Rd)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, wi), n)
  }
  return t
}
let jd = d.createContext(null)
jd.displayName = 'ListboxDataContext'
function bi(e) {
  let t = d.useContext(jd)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, bi), n)
  }
  return t
}
function OS(e, t) {
  return re(t.type, PS, e, t)
}
let $S = d.Fragment
function kS(e, t) {
  let {
    value: n,
    defaultValue: r,
    form: o,
    name: i,
    onChange: l,
    by: a = (_, U) => _ === U,
    disabled: s = !1,
    horizontal: u = !1,
    multiple: c = !1,
    ...f
  } = e
  const p = u ? 'horizontal' : 'vertical'
  let g = Se(t),
    [x = c ? [] : void 0, y] = Gv(n, l, r),
    [b, v] = d.useReducer(OS, {
      dataRef: d.createRef(),
      listboxState: 1,
      options: [],
      searchQuery: '',
      labelId: null,
      activeOptionIndex: null,
      activationTrigger: 1,
    }),
    h = d.useRef({ static: !1, hold: !1 }),
    w = d.useRef(null),
    S = d.useRef(null),
    E = d.useRef(null),
    C = L(
      typeof a == 'string'
        ? (_, U) => {
            let V = a
            return (_ == null ? void 0 : _[V]) === (U == null ? void 0 : U[V])
          }
        : a
    ),
    O = d.useCallback(
      (_) => re(T.mode, { 1: () => x.some((U) => C(U, _)), 0: () => C(x, _) }),
      [x]
    ),
    T = d.useMemo(
      () => ({
        ...b,
        value: x,
        disabled: s,
        mode: c ? 1 : 0,
        orientation: p,
        compare: C,
        isSelected: O,
        optionsPropsRef: h,
        labelRef: w,
        buttonRef: S,
        optionsRef: E,
      }),
      [x, s, c, b]
    )
  ae(() => {
    b.dataRef.current = T
  }, [T]),
    Ed(
      [T.buttonRef, T.optionsRef],
      (_, U) => {
        var V
        v({ type: 1 }),
          Hv(U, bd.Loose) ||
            (_.preventDefault(), (V = T.buttonRef.current) == null || V.focus())
      },
      T.listboxState === 0
    )
  let k = d.useMemo(
      () => ({ open: T.listboxState === 0, disabled: s, value: x }),
      [T, s, x]
    ),
    $ = L((_) => {
      let U = T.options.find((V) => V.id === _)
      U && ie(U.dataRef.current.value)
    }),
    R = L(() => {
      if (T.activeOptionIndex !== null) {
        let { dataRef: _, id: U } = T.options[T.activeOptionIndex]
        ie(_.current.value), v({ type: 2, focus: Z.Specific, id: U })
      }
    }),
    H = L(() => v({ type: 0 })),
    W = L(() => v({ type: 1 })),
    M = L((_, U, V) =>
      _ === Z.Specific
        ? v({ type: 2, focus: Z.Specific, id: U, trigger: V })
        : v({ type: 2, focus: _, trigger: V })
    ),
    q = L(
      (_, U) => (v({ type: 5, id: _, dataRef: U }), () => v({ type: 6, id: _ }))
    ),
    ne = L((_) => (v({ type: 7, id: _ }), () => v({ type: 7, id: null }))),
    ie = L((_) =>
      re(T.mode, {
        0() {
          return y == null ? void 0 : y(_)
        },
        1() {
          let U = T.value.slice(),
            V = U.findIndex((je) => C(je, _))
          return (
            V === -1 ? U.push(_) : U.splice(V, 1), y == null ? void 0 : y(U)
          )
        },
      })
    ),
    j = L((_) => v({ type: 3, value: _ })),
    F = L(() => v({ type: 4 })),
    z = d.useMemo(
      () => ({
        onChange: ie,
        registerOption: q,
        registerLabel: ne,
        goToOption: M,
        closeListbox: W,
        openListbox: H,
        selectActiveOption: R,
        selectOption: $,
        search: j,
        clearSearch: F,
      }),
      []
    ),
    K = { ref: g },
    Y = d.useRef(null),
    He = Mt()
  return (
    d.useEffect(() => {
      Y.current &&
        r !== void 0 &&
        He.addEventListener(Y.current, 'reset', () => {
          ie(r)
        })
    }, [Y, ie]),
    D.createElement(
      Rd.Provider,
      { value: z },
      D.createElement(
        jd.Provider,
        { value: T },
        D.createElement(
          Od,
          { value: re(T.listboxState, { 0: be.Open, 1: be.Closed }) },
          i != null &&
            x != null &&
            Td({ [i]: x }).map(([_, U], V) =>
              D.createElement(ni, {
                features: Br.Hidden,
                ref:
                  V === 0
                    ? (je) => {
                        var Fn
                        Y.current =
                          (Fn = je == null ? void 0 : je.closest('form')) !=
                          null
                            ? Fn
                            : null
                      }
                    : void 0,
                ...zl({
                  key: _,
                  as: 'input',
                  type: 'hidden',
                  hidden: !0,
                  readOnly: !0,
                  form: o,
                  name: _,
                  value: U,
                }),
              })
            ),
          ge({
            ourProps: K,
            theirProps: f,
            slot: k,
            defaultTag: $S,
            name: 'Listbox',
          })
        )
      )
    )
  )
}
let NS = 'button'
function RS(e, t) {
  var n
  let r = qe(),
    { id: o = `headlessui-listbox-button-${r}`, ...i } = e,
    l = bi('Listbox.Button'),
    a = wi('Listbox.Button'),
    s = Se(l.buttonRef, t),
    u = Mt(),
    c = L((b) => {
      switch (b.key) {
        case J.Space:
        case J.Enter:
        case J.ArrowDown:
          b.preventDefault(),
            a.openListbox(),
            u.nextFrame(() => {
              l.value || a.goToOption(Z.First)
            })
          break
        case J.ArrowUp:
          b.preventDefault(),
            a.openListbox(),
            u.nextFrame(() => {
              l.value || a.goToOption(Z.Last)
            })
          break
      }
    }),
    f = L((b) => {
      switch (b.key) {
        case J.Space:
          b.preventDefault()
          break
      }
    }),
    p = L((b) => {
      if (Cd(b.currentTarget)) return b.preventDefault()
      l.listboxState === 0
        ? (a.closeListbox(),
          u.nextFrame(() => {
            var v
            return (v = l.buttonRef.current) == null
              ? void 0
              : v.focus({ preventScroll: !0 })
          }))
        : (b.preventDefault(), a.openListbox())
    }),
    g = mi(() => {
      if (l.labelId) return [l.labelId, o].join(' ')
    }, [l.labelId, o]),
    x = d.useMemo(
      () => ({
        open: l.listboxState === 0,
        disabled: l.disabled,
        value: l.value,
      }),
      [l]
    ),
    y = {
      ref: s,
      id: o,
      type: Wv(e, l.buttonRef),
      'aria-haspopup': 'listbox',
      'aria-controls': (n = l.optionsRef.current) == null ? void 0 : n.id,
      'aria-expanded': l.listboxState === 0,
      'aria-labelledby': g,
      disabled: l.disabled,
      onKeyDown: c,
      onKeyUp: f,
      onClick: p,
    }
  return ge({
    ourProps: y,
    theirProps: i,
    slot: x,
    defaultTag: NS,
    name: 'Listbox.Button',
  })
}
let jS = 'label'
function _S(e, t) {
  let n = qe(),
    { id: r = `headlessui-listbox-label-${n}`, ...o } = e,
    i = bi('Listbox.Label'),
    l = wi('Listbox.Label'),
    a = Se(i.labelRef, t)
  ae(() => l.registerLabel(r), [r])
  let s = L(() => {
      var c
      return (c = i.buttonRef.current) == null
        ? void 0
        : c.focus({ preventScroll: !0 })
    }),
    u = d.useMemo(
      () => ({ open: i.listboxState === 0, disabled: i.disabled }),
      [i]
    )
  return ge({
    ourProps: { ref: a, id: r, onClick: s },
    theirProps: o,
    slot: u,
    defaultTag: jS,
    name: 'Listbox.Label',
  })
}
let LS = 'ul',
  AS = jn.RenderStrategy | jn.Static
function IS(e, t) {
  var n
  let r = qe(),
    { id: o = `headlessui-listbox-options-${r}`, ...i } = e,
    l = bi('Listbox.Options'),
    a = wi('Listbox.Options'),
    s = Se(l.optionsRef, t),
    u = Mt(),
    c = Mt(),
    f = hi(),
    p = (() =>
      f !== null ? (f & be.Open) === be.Open : l.listboxState === 0)()
  d.useEffect(() => {
    var v
    let h = l.optionsRef.current
    h &&
      l.listboxState === 0 &&
      h !== ((v = wa(h)) == null ? void 0 : v.activeElement) &&
      h.focus({ preventScroll: !0 })
  }, [l.listboxState, l.optionsRef])
  let g = L((v) => {
      switch ((c.dispose(), v.key)) {
        case J.Space:
          if (l.searchQuery !== '')
            return v.preventDefault(), v.stopPropagation(), a.search(v.key)
        case J.Enter:
          if (
            (v.preventDefault(),
            v.stopPropagation(),
            l.activeOptionIndex !== null)
          ) {
            let { dataRef: h } = l.options[l.activeOptionIndex]
            a.onChange(h.current.value)
          }
          l.mode === 0 &&
            (a.closeListbox(),
            Nt().nextFrame(() => {
              var h
              return (h = l.buttonRef.current) == null
                ? void 0
                : h.focus({ preventScroll: !0 })
            }))
          break
        case re(l.orientation, {
          vertical: J.ArrowDown,
          horizontal: J.ArrowRight,
        }):
          return v.preventDefault(), v.stopPropagation(), a.goToOption(Z.Next)
        case re(l.orientation, {
          vertical: J.ArrowUp,
          horizontal: J.ArrowLeft,
        }):
          return (
            v.preventDefault(), v.stopPropagation(), a.goToOption(Z.Previous)
          )
        case J.Home:
        case J.PageUp:
          return v.preventDefault(), v.stopPropagation(), a.goToOption(Z.First)
        case J.End:
        case J.PageDown:
          return v.preventDefault(), v.stopPropagation(), a.goToOption(Z.Last)
        case J.Escape:
          return (
            v.preventDefault(),
            v.stopPropagation(),
            a.closeListbox(),
            u.nextFrame(() => {
              var h
              return (h = l.buttonRef.current) == null
                ? void 0
                : h.focus({ preventScroll: !0 })
            })
          )
        case J.Tab:
          v.preventDefault(), v.stopPropagation()
          break
        default:
          v.key.length === 1 &&
            (a.search(v.key), c.setTimeout(() => a.clearSearch(), 350))
          break
      }
    }),
    x = mi(() => {
      var v, h, w
      return (w = (v = l.labelRef.current) == null ? void 0 : v.id) != null
        ? w
        : (h = l.buttonRef.current) == null
        ? void 0
        : h.id
    }, [l.labelRef.current, l.buttonRef.current]),
    y = d.useMemo(() => ({ open: l.listboxState === 0 }), [l]),
    b = {
      'aria-activedescendant':
        l.activeOptionIndex === null ||
        (n = l.options[l.activeOptionIndex]) == null
          ? void 0
          : n.id,
      'aria-multiselectable': l.mode === 1 ? !0 : void 0,
      'aria-labelledby': x,
      'aria-orientation': l.orientation,
      id: o,
      onKeyDown: g,
      role: 'listbox',
      tabIndex: 0,
      ref: s,
    }
  return ge({
    ourProps: b,
    theirProps: i,
    slot: y,
    defaultTag: LS,
    features: AS,
    visible: p,
    name: 'Listbox.Options',
  })
}
let DS = 'li'
function FS(e, t) {
  let n = qe(),
    {
      id: r = `headlessui-listbox-option-${n}`,
      disabled: o = !1,
      value: i,
      ...l
    } = e,
    a = bi('Listbox.Option'),
    s = wi('Listbox.Option'),
    u =
      a.activeOptionIndex !== null
        ? a.options[a.activeOptionIndex].id === r
        : !1,
    c = a.isSelected(i),
    f = d.useRef(null),
    p = bS(f),
    g = vt({
      disabled: o,
      value: i,
      domRef: f,
      get textValue() {
        return p()
      },
    }),
    x = Se(t, f)
  ae(() => {
    if (a.listboxState !== 0 || !u || a.activationTrigger === 0) return
    let C = Nt()
    return (
      C.requestAnimationFrame(() => {
        var O, T
        ;(T = (O = f.current) == null ? void 0 : O.scrollIntoView) == null ||
          T.call(O, { block: 'nearest' })
      }),
      C.dispose
    )
  }, [f, u, a.listboxState, a.activationTrigger, a.activeOptionIndex]),
    ae(() => s.registerOption(r, g), [g, r])
  let y = L((C) => {
      if (o) return C.preventDefault()
      s.onChange(i),
        a.mode === 0 &&
          (s.closeListbox(),
          Nt().nextFrame(() => {
            var O
            return (O = a.buttonRef.current) == null
              ? void 0
              : O.focus({ preventScroll: !0 })
          }))
    }),
    b = L(() => {
      if (o) return s.goToOption(Z.Nothing)
      s.goToOption(Z.Specific, r)
    }),
    v = Xv(),
    h = L((C) => v.update(C)),
    w = L((C) => {
      v.wasMoved(C) && (o || u || s.goToOption(Z.Specific, r, 0))
    }),
    S = L((C) => {
      v.wasMoved(C) && (o || (u && s.goToOption(Z.Nothing)))
    }),
    E = d.useMemo(() => ({ active: u, selected: c, disabled: o }), [u, c, o])
  return ge({
    ourProps: {
      id: r,
      ref: x,
      role: 'option',
      tabIndex: o === !0 ? void 0 : -1,
      'aria-disabled': o === !0 ? !0 : void 0,
      'aria-selected': c,
      disabled: void 0,
      onClick: y,
      onFocus: b,
      onPointerEnter: h,
      onMouseEnter: h,
      onPointerMove: w,
      onMouseMove: w,
      onPointerLeave: S,
      onMouseLeave: S,
    },
    theirProps: l,
    slot: E,
    defaultTag: DS,
    name: 'Listbox.Option',
  })
}
let MS = pe(kS),
  US = pe(RS),
  zS = pe(_S),
  BS = pe(IS),
  HS = pe(FS),
  ze = Object.assign(MS, { Button: US, Label: zS, Options: BS, Option: HS })
function VS(e = 0) {
  let [t, n] = d.useState(e),
    r = gi(),
    o = d.useCallback(
      (s) => {
        r.current && n((u) => u | s)
      },
      [t, r]
    ),
    i = d.useCallback((s) => !!(t & s), [t]),
    l = d.useCallback(
      (s) => {
        r.current && n((u) => u & ~s)
      },
      [n, r]
    ),
    a = d.useCallback(
      (s) => {
        r.current && n((u) => u ^ s)
      },
      [n]
    )
  return { flags: t, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: a }
}
function WS(e) {
  let t = { called: !1 }
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n)
  }
}
function Ls(e, ...t) {
  e && t.length > 0 && e.classList.add(...t)
}
function As(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t)
}
function KS(e, t) {
  let n = Nt()
  if (!e) return n.dispose
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [i, l] = [r, o].map((s) => {
      let [u = 0] = s
        .split(',')
        .filter(Boolean)
        .map((c) => (c.includes('ms') ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, f) => f - c)
      return u
    }),
    a = i + l
  if (a !== 0) {
    n.group((u) => {
      u.setTimeout(() => {
        t(), u.dispose()
      }, a),
        u.addEventListener(e, 'transitionrun', (c) => {
          c.target === c.currentTarget && u.dispose()
        })
    })
    let s = n.addEventListener(e, 'transitionend', (u) => {
      u.target === u.currentTarget && (t(), s())
    })
  } else t()
  return n.add(() => t()), n.dispose
}
function QS(e, t, n, r) {
  let o = n ? 'enter' : 'leave',
    i = Nt(),
    l = r !== void 0 ? WS(r) : () => {}
  o === 'enter' && (e.removeAttribute('hidden'), (e.style.display = ''))
  let a = re(o, { enter: () => t.enter, leave: () => t.leave }),
    s = re(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = re(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom })
  return (
    As(
      e,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Ls(e, ...a, ...u),
    i.nextFrame(() => {
      As(e, ...u),
        Ls(e, ...s),
        KS(e, () => (As(e, ...a), Ls(e, ...t.entered), l()))
    }),
    i.dispose
  )
}
function qS({ container: e, direction: t, classes: n, onStart: r, onStop: o }) {
  let i = gi(),
    l = Mt(),
    a = vt(t)
  ae(() => {
    let s = Nt()
    l.add(s.dispose)
    let u = e.current
    if (u && a.current !== 'idle' && i.current)
      return (
        s.dispose(),
        r.current(a.current),
        s.add(
          QS(u, n.current, a.current === 'enter', () => {
            s.dispose(), o.current(a.current)
          })
        ),
        s.dispose
      )
  }, [t])
}
function Mn(e = '') {
  return e.split(' ').filter((t) => t.trim().length > 1)
}
let ba = d.createContext(null)
ba.displayName = 'TransitionContext'
var YS = ((e) => ((e.Visible = 'visible'), (e.Hidden = 'hidden'), e))(YS || {})
function JS() {
  let e = d.useContext(ba)
  if (e === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return e
}
function GS() {
  let e = d.useContext(Sa)
  if (e === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return e
}
let Sa = d.createContext(null)
Sa.displayName = 'NestingContext'
function Ea(e) {
  return 'children' in e
    ? Ea(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === 'visible').length > 0
}
function ug(e, t) {
  let n = vt(e),
    r = d.useRef([]),
    o = gi(),
    i = Mt(),
    l = L((g, x = Qt.Hidden) => {
      let y = r.current.findIndex(({ el: b }) => b === g)
      y !== -1 &&
        (re(x, {
          [Qt.Unmount]() {
            r.current.splice(y, 1)
          },
          [Qt.Hidden]() {
            r.current[y].state = 'hidden'
          },
        }),
        i.microTask(() => {
          var b
          !Ea(r) && o.current && ((b = n.current) == null || b.call(n))
        }))
    }),
    a = L((g) => {
      let x = r.current.find(({ el: y }) => y === g)
      return (
        x
          ? x.state !== 'visible' && (x.state = 'visible')
          : r.current.push({ el: g, state: 'visible' }),
        () => l(g, Qt.Unmount)
      )
    }),
    s = d.useRef([]),
    u = d.useRef(Promise.resolve()),
    c = d.useRef({ enter: [], leave: [], idle: [] }),
    f = L((g, x, y) => {
      s.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([b]) => b !== g)),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((b) => {
              s.current.push(b)
            }),
          ]),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((b) => {
              Promise.all(c.current[x].map(([v, h]) => h)).then(() => b())
            }),
          ]),
        x === 'enter'
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => y(x)))
          : y(x)
    }),
    p = L((g, x, y) => {
      Promise.all(c.current[x].splice(0).map(([b, v]) => v))
        .then(() => {
          var b
          ;(b = s.current.shift()) == null || b()
        })
        .then(() => y(x))
    })
  return d.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: l,
      onStart: f,
      onStop: p,
      wait: u,
      chains: c,
    }),
    [a, l, r, f, p, c, u]
  )
}
function XS() {}
let ZS = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave']
function Rp(e) {
  var t
  let n = {}
  for (let r of ZS) n[r] = (t = e[r]) != null ? t : XS
  return n
}
function eE(e) {
  let t = d.useRef(Rp(e))
  return (
    d.useEffect(() => {
      t.current = Rp(e)
    }, [e]),
    t
  )
}
let tE = 'div',
  cg = jn.RenderStrategy
function nE(e, t) {
  let {
      beforeEnter: n,
      afterEnter: r,
      beforeLeave: o,
      afterLeave: i,
      enter: l,
      enterFrom: a,
      enterTo: s,
      entered: u,
      leave: c,
      leaveFrom: f,
      leaveTo: p,
      ...g
    } = e,
    x = d.useRef(null),
    y = Se(x, t),
    b = g.unmount ? Qt.Unmount : Qt.Hidden,
    { show: v, appear: h, initial: w } = JS(),
    [S, E] = d.useState(v ? 'visible' : 'hidden'),
    C = GS(),
    { register: O, unregister: T } = C,
    k = d.useRef(null)
  d.useEffect(() => O(x), [O, x]),
    d.useEffect(() => {
      if (b === Qt.Hidden && x.current) {
        if (v && S !== 'visible') {
          E('visible')
          return
        }
        return re(S, { hidden: () => T(x), visible: () => O(x) })
      }
    }, [S, x, O, T, v, b])
  let $ = vt({
      enter: Mn(l),
      enterFrom: Mn(a),
      enterTo: Mn(s),
      entered: Mn(u),
      leave: Mn(c),
      leaveFrom: Mn(f),
      leaveTo: Mn(p),
    }),
    R = eE({ beforeEnter: n, afterEnter: r, beforeLeave: o, afterLeave: i }),
    H = eo()
  d.useEffect(() => {
    if (H && S === 'visible' && x.current === null)
      throw new Error(
        'Did you forget to passthrough the `ref` to the actual DOM node?'
      )
  }, [x, S, H])
  let W = w && !h,
    M = (() => (!H || W || k.current === v ? 'idle' : v ? 'enter' : 'leave'))(),
    q = VS(0),
    ne = L((K) =>
      re(K, {
        enter: () => {
          q.addFlag(be.Opening), R.current.beforeEnter()
        },
        leave: () => {
          q.addFlag(be.Closing), R.current.beforeLeave()
        },
        idle: () => {},
      })
    ),
    ie = L((K) =>
      re(K, {
        enter: () => {
          q.removeFlag(be.Opening), R.current.afterEnter()
        },
        leave: () => {
          q.removeFlag(be.Closing), R.current.afterLeave()
        },
        idle: () => {},
      })
    ),
    j = ug(() => {
      E('hidden'), T(x)
    }, C)
  qS({
    container: x,
    classes: $,
    direction: M,
    onStart: vt((K) => {
      j.onStart(x, K, ne)
    }),
    onStop: vt((K) => {
      j.onStop(x, K, ie), K === 'leave' && !Ea(j) && (E('hidden'), T(x))
    }),
  }),
    d.useEffect(() => {
      W && (b === Qt.Hidden ? (k.current = null) : (k.current = v))
    }, [v, W, S])
  let F = g,
    z = { ref: y }
  return (
    h &&
      v &&
      w &&
      (F = {
        ...F,
        className: Zu(g.className, ...$.current.enter, ...$.current.enterFrom),
      }),
    D.createElement(
      Sa.Provider,
      { value: j },
      D.createElement(
        Od,
        { value: re(S, { visible: be.Open, hidden: be.Closed }) | q.flags },
        ge({
          ourProps: z,
          theirProps: F,
          defaultTag: tE,
          features: cg,
          visible: S === 'visible',
          name: 'Transition.Child',
        })
      )
    )
  )
}
function rE(e, t) {
  let { show: n, appear: r = !1, unmount: o, ...i } = e,
    l = d.useRef(null),
    a = Se(l, t)
  eo()
  let s = hi()
  if (
    (n === void 0 && s !== null && (n = (s & be.Open) === be.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      'A <Transition /> is used but it is missing a `show={true | false}` prop.'
    )
  let [u, c] = d.useState(n ? 'visible' : 'hidden'),
    f = ug(() => {
      c('hidden')
    }),
    [p, g] = d.useState(!0),
    x = d.useRef([n])
  ae(() => {
    p !== !1 &&
      x.current[x.current.length - 1] !== n &&
      (x.current.push(n), g(!1))
  }, [x, n])
  let y = d.useMemo(() => ({ show: n, appear: r, initial: p }), [n, r, p])
  d.useEffect(() => {
    if (n) c('visible')
    else if (!Ea(f)) c('hidden')
    else {
      let w = l.current
      if (!w) return
      let S = w.getBoundingClientRect()
      S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && c('hidden')
    }
  }, [n, f])
  let b = { unmount: o },
    v = L(() => {
      var w
      p && g(!1), (w = e.beforeEnter) == null || w.call(e)
    }),
    h = L(() => {
      var w
      p && g(!1), (w = e.beforeLeave) == null || w.call(e)
    })
  return D.createElement(
    Sa.Provider,
    { value: f },
    D.createElement(
      ba.Provider,
      { value: y },
      ge({
        ourProps: {
          ...b,
          as: d.Fragment,
          children: D.createElement(dg, {
            ref: a,
            ...b,
            ...i,
            beforeEnter: v,
            beforeLeave: h,
          }),
        },
        theirProps: {},
        defaultTag: d.Fragment,
        features: cg,
        visible: u === 'visible',
        name: 'Transition',
      })
    )
  )
}
function oE(e, t) {
  let n = d.useContext(ba) !== null,
    r = hi() !== null
  return D.createElement(
    D.Fragment,
    null,
    !n && r
      ? D.createElement(oc, { ref: t, ...e })
      : D.createElement(dg, { ref: t, ...e })
  )
}
let oc = pe(rE),
  dg = pe(nE),
  iE = pe(oE),
  On = Object.assign(oc, { Child: iE, Root: oc })
var fg = { exports: {} },
  lE = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  aE = lE,
  sE = aE
function pg() {}
function mg() {}
mg.resetWarningCache = pg
var uE = function () {
  function e(r, o, i, l, a, s) {
    if (s !== sE) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: mg,
    resetWarningCache: pg,
  }
  return (n.PropTypes = n), n
}
fg.exports = uE()
var cE = fg.exports
const A = Qr(cE)
var hg = { exports: {} },
  vg = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = d
function dE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var fE = typeof Object.is == 'function' ? Object.is : dE,
  pE = Hr.useState,
  mE = Hr.useEffect,
  hE = Hr.useLayoutEffect,
  vE = Hr.useDebugValue
function gE(e, t) {
  var n = t(),
    r = pE({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1]
  return (
    hE(
      function () {
        ;(o.value = n), (o.getSnapshot = t), Is(o) && i({ inst: o })
      },
      [e, n, t]
    ),
    mE(
      function () {
        return (
          Is(o) && i({ inst: o }),
          e(function () {
            Is(o) && i({ inst: o })
          })
        )
      },
      [e]
    ),
    vE(n),
    n
  )
}
function Is(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !fE(e, n)
  } catch {
    return !0
  }
}
function yE(e, t) {
  return t()
}
var xE =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? yE
    : gE
vg.useSyncExternalStore =
  Hr.useSyncExternalStore !== void 0 ? Hr.useSyncExternalStore : xE
hg.exports = vg
var wE = hg.exports,
  gg = { exports: {} },
  yg = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca = d,
  bE = wE
function SE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var EE = typeof Object.is == 'function' ? Object.is : SE,
  CE = bE.useSyncExternalStore,
  TE = Ca.useRef,
  PE = Ca.useEffect,
  OE = Ca.useMemo,
  $E = Ca.useDebugValue
yg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = TE(null)
  if (i.current === null) {
    var l = { hasValue: !1, value: null }
    i.current = l
  } else l = i.current
  i = OE(
    function () {
      function s(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var x = l.value
            if (o(x, g)) return (f = x)
          }
          return (f = g)
        }
        if (((x = f), EE(c, g))) return x
        var y = r(g)
        return o !== void 0 && o(x, y) ? x : ((c = g), (f = y))
      }
      var u = !1,
        c,
        f,
        p = n === void 0 ? null : n
      return [
        function () {
          return s(t())
        },
        p === null
          ? void 0
          : function () {
              return s(p())
            },
      ]
    },
    [t, n, r, o]
  )
  var a = CE(e, i[0], i[1])
  return (
    PE(
      function () {
        ;(l.hasValue = !0), (l.value = a)
      },
      [a]
    ),
    $E(a),
    a
  )
}
gg.exports = yg
var kE = gg.exports
function NE(e) {
  e()
}
let xg = NE
const RE = (e) => (xg = e),
  jE = () => xg,
  jp = Symbol.for(`react-redux-context-${d.version}`),
  _p = globalThis
function _E() {
  let e = _p[jp]
  return e || ((e = d.createContext(null)), (_p[jp] = e)), e
}
const _n = new Proxy(
  {},
  new Proxy(
    {},
    {
      get(e, t) {
        const n = _E()
        return (r, ...o) => Reflect[t](n, ...o)
      },
    }
  )
)
function _d(e = _n) {
  return function () {
    return d.useContext(e)
  }
}
const wg = _d(),
  LE = () => {
    throw new Error('uSES not initialized!')
  }
let bg = LE
const AE = (e) => {
    bg = e
  },
  IE = (e, t) => e === t
function DE(e = _n) {
  const t = e === _n ? wg : _d(e)
  return function (r, o = {}) {
    const {
        equalityFn: i = IE,
        stabilityCheck: l = void 0,
        noopCheck: a = void 0,
      } = typeof o == 'function' ? { equalityFn: o } : o,
      {
        store: s,
        subscription: u,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: p,
      } = t()
    d.useRef(!0)
    const g = d.useCallback(
        {
          [r.name](y) {
            return r(y)
          },
        }[r.name],
        [r, f, l]
      ),
      x = bg(u.addNestedSub, s.getState, c || s.getState, g, i)
    return d.useDebugValue(x), x
  }
}
const ce = DE()
function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ne.apply(this, arguments)
  )
}
var Sg = { exports: {} },
  te = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Re = typeof Symbol == 'function' && Symbol.for,
  Ld = Re ? Symbol.for('react.element') : 60103,
  Ad = Re ? Symbol.for('react.portal') : 60106,
  Ta = Re ? Symbol.for('react.fragment') : 60107,
  Pa = Re ? Symbol.for('react.strict_mode') : 60108,
  Oa = Re ? Symbol.for('react.profiler') : 60114,
  $a = Re ? Symbol.for('react.provider') : 60109,
  ka = Re ? Symbol.for('react.context') : 60110,
  Id = Re ? Symbol.for('react.async_mode') : 60111,
  Na = Re ? Symbol.for('react.concurrent_mode') : 60111,
  Ra = Re ? Symbol.for('react.forward_ref') : 60112,
  ja = Re ? Symbol.for('react.suspense') : 60113,
  FE = Re ? Symbol.for('react.suspense_list') : 60120,
  _a = Re ? Symbol.for('react.memo') : 60115,
  La = Re ? Symbol.for('react.lazy') : 60116,
  ME = Re ? Symbol.for('react.block') : 60121,
  UE = Re ? Symbol.for('react.fundamental') : 60117,
  zE = Re ? Symbol.for('react.responder') : 60118,
  BE = Re ? Symbol.for('react.scope') : 60119
function ut(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Ld:
        switch (((e = e.type), e)) {
          case Id:
          case Na:
          case Ta:
          case Oa:
          case Pa:
          case ja:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ka:
              case Ra:
              case La:
              case _a:
              case $a:
                return e
              default:
                return t
            }
        }
      case Ad:
        return t
    }
  }
}
function Eg(e) {
  return ut(e) === Na
}
te.AsyncMode = Id
te.ConcurrentMode = Na
te.ContextConsumer = ka
te.ContextProvider = $a
te.Element = Ld
te.ForwardRef = Ra
te.Fragment = Ta
te.Lazy = La
te.Memo = _a
te.Portal = Ad
te.Profiler = Oa
te.StrictMode = Pa
te.Suspense = ja
te.isAsyncMode = function (e) {
  return Eg(e) || ut(e) === Id
}
te.isConcurrentMode = Eg
te.isContextConsumer = function (e) {
  return ut(e) === ka
}
te.isContextProvider = function (e) {
  return ut(e) === $a
}
te.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ld
}
te.isForwardRef = function (e) {
  return ut(e) === Ra
}
te.isFragment = function (e) {
  return ut(e) === Ta
}
te.isLazy = function (e) {
  return ut(e) === La
}
te.isMemo = function (e) {
  return ut(e) === _a
}
te.isPortal = function (e) {
  return ut(e) === Ad
}
te.isProfiler = function (e) {
  return ut(e) === Oa
}
te.isStrictMode = function (e) {
  return ut(e) === Pa
}
te.isSuspense = function (e) {
  return ut(e) === ja
}
te.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ta ||
    e === Na ||
    e === Oa ||
    e === Pa ||
    e === ja ||
    e === FE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === La ||
        e.$$typeof === _a ||
        e.$$typeof === $a ||
        e.$$typeof === ka ||
        e.$$typeof === Ra ||
        e.$$typeof === UE ||
        e.$$typeof === zE ||
        e.$$typeof === BE ||
        e.$$typeof === ME))
  )
}
te.typeOf = ut
Sg.exports = te
var HE = Sg.exports,
  Cg = HE,
  VE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  WE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Tg = {}
Tg[Cg.ForwardRef] = VE
Tg[Cg.Memo] = WE
var oe = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd = Symbol.for('react.element'),
  Fd = Symbol.for('react.portal'),
  Aa = Symbol.for('react.fragment'),
  Ia = Symbol.for('react.strict_mode'),
  Da = Symbol.for('react.profiler'),
  Fa = Symbol.for('react.provider'),
  Ma = Symbol.for('react.context'),
  KE = Symbol.for('react.server_context'),
  Ua = Symbol.for('react.forward_ref'),
  za = Symbol.for('react.suspense'),
  Ba = Symbol.for('react.suspense_list'),
  Ha = Symbol.for('react.memo'),
  Va = Symbol.for('react.lazy'),
  QE = Symbol.for('react.offscreen'),
  Pg
Pg = Symbol.for('react.module.reference')
function wt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Dd:
        switch (((e = e.type), e)) {
          case Aa:
          case Da:
          case Ia:
          case za:
          case Ba:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case KE:
              case Ma:
              case Ua:
              case Va:
              case Ha:
              case Fa:
                return e
              default:
                return t
            }
        }
      case Fd:
        return t
    }
  }
}
oe.ContextConsumer = Ma
oe.ContextProvider = Fa
oe.Element = Dd
oe.ForwardRef = Ua
oe.Fragment = Aa
oe.Lazy = Va
oe.Memo = Ha
oe.Portal = Fd
oe.Profiler = Da
oe.StrictMode = Ia
oe.Suspense = za
oe.SuspenseList = Ba
oe.isAsyncMode = function () {
  return !1
}
oe.isConcurrentMode = function () {
  return !1
}
oe.isContextConsumer = function (e) {
  return wt(e) === Ma
}
oe.isContextProvider = function (e) {
  return wt(e) === Fa
}
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Dd
}
oe.isForwardRef = function (e) {
  return wt(e) === Ua
}
oe.isFragment = function (e) {
  return wt(e) === Aa
}
oe.isLazy = function (e) {
  return wt(e) === Va
}
oe.isMemo = function (e) {
  return wt(e) === Ha
}
oe.isPortal = function (e) {
  return wt(e) === Fd
}
oe.isProfiler = function (e) {
  return wt(e) === Da
}
oe.isStrictMode = function (e) {
  return wt(e) === Ia
}
oe.isSuspense = function (e) {
  return wt(e) === za
}
oe.isSuspenseList = function (e) {
  return wt(e) === Ba
}
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Aa ||
    e === Da ||
    e === Ia ||
    e === za ||
    e === Ba ||
    e === QE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Va ||
        e.$$typeof === Ha ||
        e.$$typeof === Fa ||
        e.$$typeof === Ma ||
        e.$$typeof === Ua ||
        e.$$typeof === Pg ||
        e.getModuleId !== void 0))
  )
}
oe.typeOf = wt
function qE() {
  const e = jE()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let r = t
        for (; r; ) r.callback(), (r = r.next)
      })
    },
    get() {
      let r = [],
        o = t
      for (; o; ) r.push(o), (o = o.next)
      return r
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n })
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next))
        }
      )
    },
  }
}
const Lp = { notify() {}, get: () => [] }
function YE(e, t) {
  let n,
    r = Lp
  function o(f) {
    return s(), r.subscribe(f)
  }
  function i() {
    r.notify()
  }
  function l() {
    c.onStateChange && c.onStateChange()
  }
  function a() {
    return !!n
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = qE()))
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = Lp))
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: l,
    isSubscribed: a,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: () => r,
  }
  return c
}
const JE =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  GE = JE ? d.useLayoutEffect : d.useEffect
function XE({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = 'once',
  noopCheck: i = 'once',
}) {
  const l = d.useMemo(() => {
      const u = YE(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: i,
      }
    }, [e, r, o, i]),
    a = d.useMemo(() => e.getState(), [e])
  GE(() => {
    const { subscription: u } = l
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0)
      }
    )
  }, [l, a])
  const s = t || _n
  return D.createElement(s.Provider, { value: l }, n)
}
function Og(e = _n) {
  const t = e === _n ? wg : _d(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
const ZE = Og()
function eC(e = _n) {
  const t = e === _n ? ZE : Og(e)
  return function () {
    return t().dispatch
  }
}
const Rt = eC()
AE(kE.useSyncExternalStoreWithSelector)
RE(sr.unstable_batchedUpdates)
function Pt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function Ln(e) {
  return !!e && !!e[de]
}
function tn(e) {
  var t
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1
      var r = Object.getPrototypeOf(n)
      if (r === null) return !0
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === uC)
      )
    })(e) ||
      Array.isArray(e) ||
      !!e[zp] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[zp]) ||
      Md(e) ||
      Ud(e))
  )
}
function rr(e, t, n) {
  n === void 0 && (n = !1),
    no(e) === 0
      ? (n ? Object.keys : Rr)(e).forEach(function (r) {
          ;(n && typeof r == 'symbol') || t(r, e[r], e)
        })
      : e.forEach(function (r, o) {
          return t(o, r, e)
        })
}
function no(e) {
  var t = e[de]
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Md(e)
    ? 2
    : Ud(e)
    ? 3
    : 0
}
function Nr(e, t) {
  return no(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function tC(e, t) {
  return no(e) === 2 ? e.get(t) : e[t]
}
function $g(e, t, n) {
  var r = no(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function kg(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Md(e) {
  return aC && e instanceof Map
}
function Ud(e) {
  return sC && e instanceof Set
}
function Bn(e) {
  return e.o || e.t
}
function zd(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = Rg(e)
  delete t[de]
  for (var n = Rr(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o]
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function Bd(e, t) {
  return (
    t === void 0 && (t = !1),
    Hd(e) ||
      Ln(e) ||
      !tn(e) ||
      (no(e) > 1 && (e.set = e.add = e.clear = e.delete = nC),
      Object.freeze(e),
      t &&
        rr(
          e,
          function (n, r) {
            return Bd(r, !0)
          },
          !0
        )),
    e
  )
}
function nC() {
  Pt(2)
}
function Hd(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function Ft(e) {
  var t = sc[e]
  return t || Pt(18, e), t
}
function rC(e, t) {
  sc[e] || (sc[e] = t)
}
function ic() {
  return oi
}
function Ds(e, t) {
  t && (Ft('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function Hl(e) {
  lc(e), e.p.forEach(oC), (e.p = null)
}
function lc(e) {
  e === oi && (oi = e.l)
}
function Ap(e) {
  return (oi = { p: [], l: oi, h: e, m: !0, _: 0 })
}
function oC(e) {
  var t = e[de]
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0)
}
function Fs(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    r = e !== void 0 && e !== n
  return (
    t.h.O || Ft('ES5').S(t, e, r),
    r
      ? (n[de].P && (Hl(t), Pt(4)),
        tn(e) && ((e = Vl(t, e)), t.l || Wl(t, e)),
        t.u && Ft('Patches').M(n[de].t, e, t.u, t.s))
      : (e = Vl(t, n, [])),
    Hl(t),
    t.u && t.v(t.u, t.s),
    e !== Ng ? e : void 0
  )
}
function Vl(e, t, n) {
  if (Hd(t)) return t
  var r = t[de]
  if (!r)
    return (
      rr(
        t,
        function (a, s) {
          return Ip(e, r, t, a, s, n)
        },
        !0
      ),
      t
    )
  if (r.A !== e) return t
  if (!r.P) return Wl(e, r.t, !0), r.t
  if (!r.I) {
    ;(r.I = !0), r.A._--
    var o = r.i === 4 || r.i === 5 ? (r.o = zd(r.k)) : r.o,
      i = o,
      l = !1
    r.i === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      rr(i, function (a, s) {
        return Ip(e, r, o, a, s, n, l)
      }),
      Wl(e, o, !1),
      n && e.u && Ft('Patches').N(r, n, e.u, e.s)
  }
  return r.o
}
function Ip(e, t, n, r, o, i, l) {
  if (Ln(o)) {
    var a = Vl(e, o, i && t && t.i !== 3 && !Nr(t.R, r) ? i.concat(r) : void 0)
    if (($g(n, r, a), !Ln(a))) return
    e.m = !1
  } else l && n.add(o)
  if (tn(o) && !Hd(o)) {
    if (!e.h.D && e._ < 1) return
    Vl(e, o), (t && t.A.l) || Wl(e, o)
  }
}
function Wl(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Bd(t, n)
}
function Ms(e, t) {
  var n = e[de]
  return (n ? Bn(n) : e)[t]
}
function Dp(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) return r
      n = Object.getPrototypeOf(n)
    }
}
function mn(e) {
  e.P || ((e.P = !0), e.l && mn(e.l))
}
function Us(e) {
  e.o || (e.o = zd(e.t))
}
function ac(e, t, n) {
  var r = Md(t)
    ? Ft('MapSet').F(t, n)
    : Ud(t)
    ? Ft('MapSet').T(t, n)
    : e.O
    ? (function (o, i) {
        var l = Array.isArray(o),
          a = {
            i: l ? 1 : 0,
            A: i ? i.A : ic(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = a,
          u = ii
        l && ((s = [a]), (u = Oo))
        var c = Proxy.revocable(s, u),
          f = c.revoke,
          p = c.proxy
        return (a.k = p), (a.j = f), p
      })(t, n)
    : Ft('ES5').J(t, n)
  return (n ? n.A : ic()).p.push(r), r
}
function iC(e) {
  return (
    Ln(e) || Pt(22, e),
    (function t(n) {
      if (!tn(n)) return n
      var r,
        o = n[de],
        i = no(n)
      if (o) {
        if (!o.P && (o.i < 4 || !Ft('ES5').K(o))) return o.t
        ;(o.I = !0), (r = Fp(n, i)), (o.I = !1)
      } else r = Fp(n, i)
      return (
        rr(r, function (l, a) {
          ;(o && tC(o.t, l) === a) || $g(r, l, t(a))
        }),
        i === 3 ? new Set(r) : r
      )
    })(e)
  )
}
function Fp(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return zd(e)
}
function lC() {
  function e(i, l) {
    var a = o[i]
    return (
      a
        ? (a.enumerable = l)
        : (o[i] = a =
            {
              configurable: !0,
              enumerable: l,
              get: function () {
                var s = this[de]
                return ii.get(s, i)
              },
              set: function (s) {
                var u = this[de]
                ii.set(u, i, s)
              },
            }),
      a
    )
  }
  function t(i) {
    for (var l = i.length - 1; l >= 0; l--) {
      var a = i[l][de]
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && mn(a)
            break
          case 4:
            n(a) && mn(a)
        }
    }
  }
  function n(i) {
    for (var l = i.t, a = i.k, s = Rr(a), u = s.length - 1; u >= 0; u--) {
      var c = s[u]
      if (c !== de) {
        var f = l[c]
        if (f === void 0 && !Nr(l, c)) return !0
        var p = a[c],
          g = p && p[de]
        if (g ? g.t !== f : !kg(p, f)) return !0
      }
    }
    var x = !!l[de]
    return s.length !== Rr(l).length + (x ? 0 : 1)
  }
  function r(i) {
    var l = i.k
    if (l.length !== i.t.length) return !0
    var a = Object.getOwnPropertyDescriptor(l, l.length - 1)
    if (a && !a.get) return !0
    for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0
    return !1
  }
  var o = {}
  rC('ES5', {
    J: function (i, l) {
      var a = Array.isArray(i),
        s = (function (c, f) {
          if (c) {
            for (var p = Array(f.length), g = 0; g < f.length; g++)
              Object.defineProperty(p, '' + g, e(g, !0))
            return p
          }
          var x = Rg(f)
          delete x[de]
          for (var y = Rr(x), b = 0; b < y.length; b++) {
            var v = y[b]
            x[v] = e(v, c || !!x[v].enumerable)
          }
          return Object.create(Object.getPrototypeOf(f), x)
        })(a, i),
        u = {
          i: a ? 5 : 4,
          A: l ? l.A : ic(),
          P: !1,
          I: !1,
          R: {},
          l,
          t: i,
          k: s,
          o: null,
          g: !1,
          C: !1,
        }
      return Object.defineProperty(s, de, { value: u, writable: !0 }), s
    },
    S: function (i, l, a) {
      a
        ? Ln(l) && l[de].A === i && t(i.p)
        : (i.u &&
            (function s(u) {
              if (u && typeof u == 'object') {
                var c = u[de]
                if (c) {
                  var f = c.t,
                    p = c.k,
                    g = c.R,
                    x = c.i
                  if (x === 4)
                    rr(p, function (w) {
                      w !== de &&
                        (f[w] !== void 0 || Nr(f, w)
                          ? g[w] || s(p[w])
                          : ((g[w] = !0), mn(c)))
                    }),
                      rr(f, function (w) {
                        p[w] !== void 0 || Nr(p, w) || ((g[w] = !1), mn(c))
                      })
                  else if (x === 5) {
                    if ((r(c) && (mn(c), (g.length = !0)), p.length < f.length))
                      for (var y = p.length; y < f.length; y++) g[y] = !1
                    else for (var b = f.length; b < p.length; b++) g[b] = !0
                    for (
                      var v = Math.min(p.length, f.length), h = 0;
                      h < v;
                      h++
                    )
                      p.hasOwnProperty(h) || (g[h] = !0),
                        g[h] === void 0 && s(p[h])
                  }
                }
              }
            })(i.p[0]),
          t(i.p))
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i)
    },
  })
}
var Mp,
  oi,
  Vd = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  aC = typeof Map < 'u',
  sC = typeof Set < 'u',
  Up = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Ng = Vd
    ? Symbol.for('immer-nothing')
    : (((Mp = {})['immer-nothing'] = !0), Mp),
  zp = Vd ? Symbol.for('immer-draftable') : '__$immer_draftable',
  de = Vd ? Symbol.for('immer-state') : '__$immer_state',
  uC = '' + Object.prototype.constructor,
  Rr =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          )
        }
      : Object.getOwnPropertyNames,
  Rg =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Rr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  sc = {},
  ii = {
    get: function (e, t) {
      if (t === de) return e
      var n = Bn(e)
      if (!Nr(n, t))
        return (function (o, i, l) {
          var a,
            s = Dp(i, l)
          return s
            ? 'value' in s
              ? s.value
              : (a = s.get) === null || a === void 0
              ? void 0
              : a.call(o.k)
            : void 0
        })(e, n, t)
      var r = n[t]
      return e.I || !tn(r)
        ? r
        : r === Ms(e.t, t)
        ? (Us(e), (e.o[t] = ac(e.A.h, r, e)))
        : r
    },
    has: function (e, t) {
      return t in Bn(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Bn(e))
    },
    set: function (e, t, n) {
      var r = Dp(Bn(e), t)
      if (r != null && r.set) return r.set.call(e.k, n), !0
      if (!e.P) {
        var o = Ms(Bn(e), t),
          i = o == null ? void 0 : o[de]
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0
        if (kg(n, o) && (n !== void 0 || Nr(e.t, t))) return !0
        Us(e), mn(e)
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      )
    },
    deleteProperty: function (e, t) {
      return (
        Ms(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Us(e), mn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Bn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      )
    },
    defineProperty: function () {
      Pt(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      Pt(12)
    },
  },
  Oo = {}
rr(ii, function (e, t) {
  Oo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (Oo.deleteProperty = function (e, t) {
    return Oo.set.call(this, e, t, void 0)
  }),
  (Oo.set = function (e, t, n) {
    return ii.set.call(this, e[0], t, n, e[0])
  })
var cC = (function () {
    function e(n) {
      var r = this
      ;(this.O = Up),
        (this.D = !0),
        (this.produce = function (o, i, l) {
          if (typeof o == 'function' && typeof i != 'function') {
            var a = i
            i = o
            var s = r
            return function (y) {
              var b = this
              y === void 0 && (y = a)
              for (
                var v = arguments.length, h = Array(v > 1 ? v - 1 : 0), w = 1;
                w < v;
                w++
              )
                h[w - 1] = arguments[w]
              return s.produce(y, function (S) {
                var E
                return (E = i).call.apply(E, [b, S].concat(h))
              })
            }
          }
          var u
          if (
            (typeof i != 'function' && Pt(6),
            l !== void 0 && typeof l != 'function' && Pt(7),
            tn(o))
          ) {
            var c = Ap(r),
              f = ac(r, o, void 0),
              p = !0
            try {
              ;(u = i(f)), (p = !1)
            } finally {
              p ? Hl(c) : lc(c)
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (y) {
                    return Ds(c, l), Fs(y, c)
                  },
                  function (y) {
                    throw (Hl(c), y)
                  }
                )
              : (Ds(c, l), Fs(u, c))
          }
          if (!o || typeof o != 'object') {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === Ng && (u = void 0),
              r.D && Bd(u, !0),
              l)
            ) {
              var g = [],
                x = []
              Ft('Patches').M(o, u, g, x), l(g, x)
            }
            return u
          }
          Pt(21, o)
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (u) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), p = 1;
                p < c;
                p++
              )
                f[p - 1] = arguments[p]
              return r.produceWithPatches(u, function (g) {
                return o.apply(void 0, [g].concat(f))
              })
            }
          var l,
            a,
            s = r.produce(o, i, function (u, c) {
              ;(l = u), (a = c)
            })
          return typeof Promise < 'u' && s instanceof Promise
            ? s.then(function (u) {
                return [u, l, a]
              })
            : [s, l, a]
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        tn(n) || Pt(8), Ln(n) && (n = iC(n))
        var r = Ap(this),
          o = ac(this, n, void 0)
        return (o[de].C = !0), lc(r), o
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[de],
          i = o.A
        return Ds(i, r), Fs(void 0, i)
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n
      }),
      (t.setUseProxies = function (n) {
        n && !Up && Pt(20), (this.O = n)
      }),
      (t.applyPatches = function (n, r) {
        var o
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o]
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value
            break
          }
        }
        o > -1 && (r = r.slice(o + 1))
        var l = Ft('Patches').$
        return Ln(n)
          ? l(n, r)
          : this.produce(n, function (a) {
              return l(a, r)
            })
      }),
      e
    )
  })(),
  lt = new cC(),
  jg = lt.produce
lt.produceWithPatches.bind(lt)
lt.setAutoFreeze.bind(lt)
lt.setUseProxies.bind(lt)
lt.applyPatches.bind(lt)
lt.createDraft.bind(lt)
lt.finishDraft.bind(lt)
function li(e) {
  '@babel/helpers - typeof'
  return (
    (li =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    li(e)
  )
}
function dC(e, t) {
  if (li(e) !== 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (li(r) !== 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function fC(e) {
  var t = dC(e, 'string')
  return li(t) === 'symbol' ? t : String(t)
}
function pC(e, t, n) {
  return (
    (t = fC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Bp(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Hp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Bp(Object(n), !0).forEach(function (r) {
          pC(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Bp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Me(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var Vp = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  zs = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  Kl = {
    INIT: '@@redux/INIT' + zs(),
    REPLACE: '@@redux/REPLACE' + zs(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + zs()
    },
  }
function mC(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function _g(e, t, n) {
  var r
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Me(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Me(1))
    return n(_g)(e, t)
  }
  if (typeof e != 'function') throw new Error(Me(2))
  var o = e,
    i = t,
    l = [],
    a = l,
    s = !1
  function u() {
    a === l && (a = l.slice())
  }
  function c() {
    if (s) throw new Error(Me(3))
    return i
  }
  function f(y) {
    if (typeof y != 'function') throw new Error(Me(4))
    if (s) throw new Error(Me(5))
    var b = !0
    return (
      u(),
      a.push(y),
      function () {
        if (b) {
          if (s) throw new Error(Me(6))
          ;(b = !1), u()
          var h = a.indexOf(y)
          a.splice(h, 1), (l = null)
        }
      }
    )
  }
  function p(y) {
    if (!mC(y)) throw new Error(Me(7))
    if (typeof y.type > 'u') throw new Error(Me(8))
    if (s) throw new Error(Me(9))
    try {
      ;(s = !0), (i = o(i, y))
    } finally {
      s = !1
    }
    for (var b = (l = a), v = 0; v < b.length; v++) {
      var h = b[v]
      h()
    }
    return y
  }
  function g(y) {
    if (typeof y != 'function') throw new Error(Me(10))
    ;(o = y), p({ type: Kl.REPLACE })
  }
  function x() {
    var y,
      b = f
    return (
      (y = {
        subscribe: function (h) {
          if (typeof h != 'object' || h === null) throw new Error(Me(11))
          function w() {
            h.next && h.next(c())
          }
          w()
          var S = b(w)
          return { unsubscribe: S }
        },
      }),
      (y[Vp] = function () {
        return this
      }),
      y
    )
  }
  return (
    p({ type: Kl.INIT }),
    (r = { dispatch: p, subscribe: f, getState: c, replaceReducer: g }),
    (r[Vp] = x),
    r
  )
}
function hC(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Kl.INIT })
    if (typeof r > 'u') throw new Error(Me(12))
    if (typeof n(void 0, { type: Kl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Me(13))
  })
}
function vC(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r]
    typeof e[o] == 'function' && (n[o] = e[o])
  }
  var i = Object.keys(n),
    l
  try {
    hC(n)
  } catch (a) {
    l = a
  }
  return function (s, u) {
    if ((s === void 0 && (s = {}), l)) throw l
    for (var c = !1, f = {}, p = 0; p < i.length; p++) {
      var g = i[p],
        x = n[g],
        y = s[g],
        b = x(y, u)
      if (typeof b > 'u') throw (u && u.type, new Error(Me(14)))
      ;(f[g] = b), (c = c || b !== y)
    }
    return (c = c || i.length !== Object.keys(s).length), c ? f : s
  }
}
function Ql() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return t.length === 0
    ? function (r) {
        return r
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments))
        }
      })
}
function gC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Me(15))
        },
        l = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments)
          },
        },
        a = t.map(function (s) {
          return s(l)
        })
      return (
        (i = Ql.apply(void 0, a)(o.dispatch)),
        Hp(Hp({}, o), {}, { dispatch: i })
      )
    }
  }
}
function Lg(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState
    return function (l) {
      return function (a) {
        return typeof a == 'function' ? a(o, i, e) : l(a)
      }
    }
  }
  return t
}
var Ag = Lg()
Ag.withExtraArgument = Lg
const Wp = Ag
var Ig =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          )
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype =
          n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })(),
  yC =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        l
      return (
        (l = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == 'function' &&
          (l[Symbol.iterator] = function () {
            return this
          }),
        l
      )
      function a(u) {
        return function (c) {
          return s([u, c])
        }
      }
      function s(u) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u
                break
              case 4:
                return n.label++, { value: u[1], done: !1 }
              case 5:
                n.label++, (o = u[1]), (u = [0])
                continue
              case 7:
                ;(u = n.ops.pop()), n.trys.pop()
                continue
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0
                  continue
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  n.label = u[1]
                  break
                }
                if (u[0] === 6 && n.label < i[1]) {
                  ;(n.label = i[1]), (i = u)
                  break
                }
                if (i && n.label < i[2]) {
                  ;(n.label = i[2]), n.ops.push(u)
                  break
                }
                i[2] && n.ops.pop(), n.trys.pop()
                continue
            }
            u = t.call(e, n)
          } catch (c) {
            ;(u = [6, c]), (o = 0)
          } finally {
            r = i = 0
          }
        if (u[0] & 5) throw u[1]
        return { value: u[0] ? u[1] : void 0, done: !0 }
      }
    },
  Vr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n]
      return e
    },
  xC = Object.defineProperty,
  wC = Object.defineProperties,
  bC = Object.getOwnPropertyDescriptors,
  Kp = Object.getOwnPropertySymbols,
  SC = Object.prototype.hasOwnProperty,
  EC = Object.prototype.propertyIsEnumerable,
  Qp = function (e, t, n) {
    return t in e
      ? xC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  $n = function (e, t) {
    for (var n in t || (t = {})) SC.call(t, n) && Qp(e, n, t[n])
    if (Kp)
      for (var r = 0, o = Kp(t); r < o.length; r++) {
        var n = o[r]
        EC.call(t, n) && Qp(e, n, t[n])
      }
    return e
  },
  Bs = function (e, t) {
    return wC(e, bC(t))
  },
  CC = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (s) {
          try {
            a(n.next(s))
          } catch (u) {
            o(u)
          }
        },
        l = function (s) {
          try {
            a(n.throw(s))
          } catch (u) {
            o(u)
          }
        },
        a = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(i, l)
        }
      a((n = n.apply(e, t)).next())
    })
  },
  TC =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Ql
              : Ql.apply(null, arguments)
        }
function PC(e) {
  if (typeof e != 'object' || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n)
  return t === n
}
var OC = (function (e) {
    Ig(t, e)
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      var o = e.apply(this, n) || this
      return Object.setPrototypeOf(o, t.prototype), o
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Vr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Vr([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array),
  $C = (function (e) {
    Ig(t, e)
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      var o = e.apply(this, n) || this
      return Object.setPrototypeOf(o, t.prototype), o
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Vr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Vr([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array)
function uc(e) {
  return tn(e) ? jg(e, function () {}) : e
}
function kC(e) {
  return typeof e == 'boolean'
}
function NC() {
  return function (t) {
    return RC(t)
  }
}
function RC(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var r = new OC()
  return (
    n && (kC(n) ? r.push(Wp) : r.push(Wp.withExtraArgument(n.extraArgument))), r
  )
}
var jC = !0
function _C(e) {
  var t = NC(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    l = i === void 0 ? t() : i,
    a = n.devTools,
    s = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    f = n.enhancers,
    p = f === void 0 ? void 0 : f,
    g
  if (typeof o == 'function') g = o
  else if (PC(o)) g = vC(o)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  var x = l
  typeof x == 'function' && (x = x(t))
  var y = gC.apply(void 0, x),
    b = Ql
  s && (b = TC($n({ trace: !jC }, typeof s == 'object' && s)))
  var v = new $C(y),
    h = v
  Array.isArray(p) ? (h = Vr([y], p)) : typeof p == 'function' && (h = p(v))
  var w = b.apply(void 0, h)
  return _g(g, c, w)
}
function kn(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
    if (t) {
      var i = t.apply(void 0, r)
      if (!i) throw new Error('prepareAction did not return an object')
      return $n(
        $n({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      )
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = function () {
      return '' + e
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e
    }),
    n
  )
}
function Dg(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, l) {
        var a = typeof i == 'string' ? i : i.type
        if (a in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          )
        return (t[a] = l), o
      },
      addMatcher: function (i, l) {
        return n.push({ matcher: i, reducer: l }), o
      },
      addDefaultCase: function (i) {
        return (r = i), o
      },
    }
  return e(o), [t, n, r]
}
function LC(e) {
  return typeof e == 'function'
}
function AC(e, t, n, r) {
  n === void 0 && (n = [])
  var o = typeof t == 'function' ? Dg(t) : [t, n, r],
    i = o[0],
    l = o[1],
    a = o[2],
    s
  if (LC(e))
    s = function () {
      return uc(e())
    }
  else {
    var u = uc(e)
    s = function () {
      return u
    }
  }
  function c(f, p) {
    f === void 0 && (f = s())
    var g = Vr(
      [i[p.type]],
      l
        .filter(function (x) {
          var y = x.matcher
          return y(p)
        })
        .map(function (x) {
          var y = x.reducer
          return y
        })
    )
    return (
      g.filter(function (x) {
        return !!x
      }).length === 0 && (g = [a]),
      g.reduce(function (x, y) {
        if (y)
          if (Ln(x)) {
            var b = x,
              v = y(b, p)
            return v === void 0 ? x : v
          } else {
            if (tn(x))
              return jg(x, function (h) {
                return y(h, p)
              })
            var v = y(x, p)
            if (v === void 0) {
              if (x === null) return x
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              )
            }
            return v
          }
        return x
      }, f)
    )
  }
  return (c.getInitialState = s), c
}
function IC(e, t) {
  return e + '/' + t
}
function Wd(e) {
  var t = e.name
  if (!t) throw new Error('`name` is a required option for createSlice')
  typeof process < 'u'
  var n =
      typeof e.initialState == 'function' ? e.initialState : uc(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    l = {},
    a = {}
  o.forEach(function (c) {
    var f = r[c],
      p = IC(t, c),
      g,
      x
    'reducer' in f ? ((g = f.reducer), (x = f.prepare)) : (g = f),
      (i[c] = g),
      (l[p] = g),
      (a[c] = x ? kn(p, x) : kn(p))
  })
  function s() {
    var c =
        typeof e.extraReducers == 'function'
          ? Dg(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      p = f === void 0 ? {} : f,
      g = c[1],
      x = g === void 0 ? [] : g,
      y = c[2],
      b = y === void 0 ? void 0 : y,
      v = $n($n({}, p), l)
    return AC(n, function (h) {
      for (var w in v) h.addCase(w, v[w])
      for (var S = 0, E = x; S < E.length; S++) {
        var C = E[S]
        h.addMatcher(C.matcher, C.reducer)
      }
      b && h.addDefaultCase(b)
    })
  }
  var u
  return {
    name: t,
    reducer: function (c, f) {
      return u || (u = s()), u(c, f)
    },
    actions: a,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = s()), u.getInitialState()
    },
  }
}
var DC = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  FC = function (e) {
    e === void 0 && (e = 21)
    for (var t = '', n = e; n--; ) t += DC[(Math.random() * 64) | 0]
    return t
  },
  MC = ['name', 'message', 'stack', 'code'],
  Hs = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  qp = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  UC = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = MC; n < r.length; n++) {
        var o = r[n]
        typeof e[o] == 'string' && (t[o] = e[o])
      }
      return t
    }
    return { message: String(e) }
  },
  ro = (function () {
    function e(t, n, r) {
      var o = kn(t + '/fulfilled', function (u, c, f, p) {
          return {
            payload: u,
            meta: Bs($n({}, p || {}), {
              arg: f,
              requestId: c,
              requestStatus: 'fulfilled',
            }),
          }
        }),
        i = kn(t + '/pending', function (u, c, f) {
          return {
            payload: void 0,
            meta: Bs($n({}, f || {}), {
              arg: c,
              requestId: u,
              requestStatus: 'pending',
            }),
          }
        }),
        l = kn(t + '/rejected', function (u, c, f, p, g) {
          return {
            payload: p,
            error: ((r && r.serializeError) || UC)(u || 'Rejected'),
            meta: Bs($n({}, g || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!p,
              requestStatus: 'rejected',
              aborted: (u == null ? void 0 : u.name) === 'AbortError',
              condition: (u == null ? void 0 : u.name) === 'ConditionError',
            }),
          }
        }),
        a =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  }
                }
                return (u.prototype.abort = function () {}), u
              })()
      function s(u) {
        return function (c, f, p) {
          var g = r != null && r.idGenerator ? r.idGenerator(u) : FC(),
            x = new a(),
            y
          function b(h) {
            ;(y = h), x.abort()
          }
          var v = (function () {
            return CC(this, null, function () {
              var h, w, S, E, C, O, T
              return yC(this, function (k) {
                switch (k.label) {
                  case 0:
                    return (
                      k.trys.push([0, 4, , 5]),
                      (E =
                        (h = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : h.call(r, u, { getState: f, extra: p })),
                      BC(E) ? [4, E] : [3, 2]
                    )
                  case 1:
                    ;(E = k.sent()), (k.label = 2)
                  case 2:
                    if (E === !1 || x.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message:
                          'Aborted due to condition callback returning false.',
                      }
                    return (
                      (C = new Promise(function ($, R) {
                        return x.signal.addEventListener('abort', function () {
                          return R({
                            name: 'AbortError',
                            message: y || 'Aborted',
                          })
                        })
                      })),
                      c(
                        i(
                          g,
                          u,
                          (w = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : w.call(
                                r,
                                { requestId: g, arg: u },
                                { getState: f, extra: p }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          C,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: f,
                              extra: p,
                              requestId: g,
                              signal: x.signal,
                              abort: b,
                              rejectWithValue: function ($, R) {
                                return new Hs($, R)
                              },
                              fulfillWithValue: function ($, R) {
                                return new qp($, R)
                              },
                            })
                          ).then(function ($) {
                            if ($ instanceof Hs) throw $
                            return $ instanceof qp
                              ? o($.payload, g, u, $.meta)
                              : o($, g, u)
                          }),
                        ]),
                      ]
                    )
                  case 3:
                    return (S = k.sent()), [3, 5]
                  case 4:
                    return (
                      (O = k.sent()),
                      (S =
                        O instanceof Hs
                          ? l(null, g, u, O.payload, O.meta)
                          : l(O, g, u)),
                      [3, 5]
                    )
                  case 5:
                    return (
                      (T =
                        r &&
                        !r.dispatchConditionRejection &&
                        l.match(S) &&
                        S.meta.condition),
                      T || c(S),
                      [2, S]
                    )
                }
              })
            })
          })()
          return Object.assign(v, {
            abort: b,
            requestId: g,
            arg: u,
            unwrap: function () {
              return v.then(zC)
            },
          })
        }
      }
      return Object.assign(s, {
        pending: i,
        rejected: l,
        fulfilled: o,
        typePrefix: t,
      })
    }
    return (
      (e.withTypes = function () {
        return e
      }),
      e
    )
  })()
function zC(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function BC(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var Kd = 'listenerMiddleware'
kn(Kd + '/add')
kn(Kd + '/removeAll')
kn(Kd + '/remove')
var Yp
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  )
lC()
function Fg(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: HC } = Object.prototype,
  { getPrototypeOf: Qd } = Object,
  Wa = ((e) => (t) => {
    const n = HC.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Ut = (e) => ((e = e.toLowerCase()), (t) => Wa(t) === e),
  Ka = (e) => (t) => typeof t === e,
  { isArray: oo } = Array,
  ai = Ka('undefined')
function VC(e) {
  return (
    e !== null &&
    !ai(e) &&
    e.constructor !== null &&
    !ai(e.constructor) &&
    gt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Mg = Ut('ArrayBuffer')
function WC(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Mg(e.buffer)),
    t
  )
}
const KC = Ka('string'),
  gt = Ka('function'),
  Ug = Ka('number'),
  Qa = (e) => e !== null && typeof e == 'object',
  QC = (e) => e === !0 || e === !1,
  al = (e) => {
    if (Wa(e) !== 'object') return !1
    const t = Qd(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  qC = Ut('Date'),
  YC = Ut('File'),
  JC = Ut('Blob'),
  GC = Ut('FileList'),
  XC = (e) => Qa(e) && gt(e.pipe),
  ZC = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (gt(e.append) &&
          ((t = Wa(e)) === 'formdata' ||
            (t === 'object' &&
              gt(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  eT = Ut('URLSearchParams'),
  tT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function Si(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), oo(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length
    let a
    for (r = 0; r < l; r++) (a = i[r]), t.call(null, e[a], a, e)
  }
}
function zg(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Bg = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Hg = (e) => !ai(e) && e !== Bg
function cc() {
  const { caseless: e } = (Hg(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && zg(t, o)) || o
      al(t[i]) && al(r)
        ? (t[i] = cc(t[i], r))
        : al(r)
        ? (t[i] = cc({}, r))
        : oo(r)
        ? (t[i] = r.slice())
        : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Si(arguments[r], n)
  return t
}
const nT = (e, t, n, { allOwnKeys: r } = {}) => (
    Si(
      t,
      (o, i) => {
        n && gt(o) ? (e[i] = Fg(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  rT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  oT = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  iT = (e, t, n, r) => {
    let o, i, l
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0))
      e = n !== !1 && Qd(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  lT = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  aT = (e) => {
    if (!e) return null
    if (oo(e)) return e
    let t = e.length
    if (!Ug(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  sT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Qd(Uint8Array)),
  uT = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  cT = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  dT = Ut('HTMLFormElement'),
  fT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  Jp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  pT = Ut('RegExp'),
  Vg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Si(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o)
    }),
      Object.defineProperties(e, r)
  },
  mT = (e) => {
    Vg(e, (t, n) => {
      if (gt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (gt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  hT = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return oo(e) ? r(e) : r(String(e).split(t)), n
  },
  vT = () => {},
  gT = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Vs = 'abcdefghijklmnopqrstuvwxyz',
  Gp = '0123456789',
  Wg = { DIGIT: Gp, ALPHA: Vs, ALPHA_DIGIT: Vs + Vs.toUpperCase() + Gp },
  yT = (e = 16, t = Wg.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function xT(e) {
  return !!(
    e &&
    gt(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const wT = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Qa(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = oo(r) ? [] : {}
            return (
              Si(r, (l, a) => {
                const s = n(l, o + 1)
                !ai(s) && (i[a] = s)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  bT = Ut('AsyncFunction'),
  ST = (e) => e && (Qa(e) || gt(e)) && gt(e.then) && gt(e.catch),
  P = {
    isArray: oo,
    isArrayBuffer: Mg,
    isBuffer: VC,
    isFormData: ZC,
    isArrayBufferView: WC,
    isString: KC,
    isNumber: Ug,
    isBoolean: QC,
    isObject: Qa,
    isPlainObject: al,
    isUndefined: ai,
    isDate: qC,
    isFile: YC,
    isBlob: JC,
    isRegExp: pT,
    isFunction: gt,
    isStream: XC,
    isURLSearchParams: eT,
    isTypedArray: sT,
    isFileList: GC,
    forEach: Si,
    merge: cc,
    extend: nT,
    trim: tT,
    stripBOM: rT,
    inherits: oT,
    toFlatObject: iT,
    kindOf: Wa,
    kindOfTest: Ut,
    endsWith: lT,
    toArray: aT,
    forEachEntry: uT,
    matchAll: cT,
    isHTMLForm: dT,
    hasOwnProperty: Jp,
    hasOwnProp: Jp,
    reduceDescriptors: Vg,
    freezeMethods: mT,
    toObjectSet: hT,
    toCamelCase: fT,
    noop: vT,
    toFiniteNumber: gT,
    findKey: zg,
    global: Bg,
    isContextDefined: Hg,
    ALPHABET: Wg,
    generateString: yT,
    isSpecCompliantForm: xT,
    toJSONObject: wT,
    isAsyncFn: bT,
    isThenable: ST,
  }
function G(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
P.inherits(G, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Kg = G.prototype,
  Qg = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Qg[e] = { value: e }
})
Object.defineProperties(G, Qg)
Object.defineProperty(Kg, 'isAxiosError', { value: !0 })
G.from = (e, t, n, r, o, i) => {
  const l = Object.create(Kg)
  return (
    P.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype
      },
      (a) => a !== 'isAxiosError'
    ),
    G.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  )
}
const ET = null
function dc(e) {
  return P.isPlainObject(e) || P.isArray(e)
}
function qg(e) {
  return P.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Xp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = qg(o)), !n && i ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function CT(e) {
  return P.isArray(e) && !e.some(dc)
}
const TT = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function qa(e, t, n) {
  if (!P.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, b) {
        return !P.isUndefined(b[y])
      }
    ))
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && P.isSpecCompliantForm(t)
  if (!P.isFunction(o)) throw new TypeError('visitor must be a function')
  function u(x) {
    if (x === null) return ''
    if (P.isDate(x)) return x.toISOString()
    if (!s && P.isBlob(x))
      throw new G('Blob is not supported. Use a Buffer instead.')
    return P.isArrayBuffer(x) || P.isTypedArray(x)
      ? s && typeof Blob == 'function'
        ? new Blob([x])
        : Buffer.from(x)
      : x
  }
  function c(x, y, b) {
    let v = x
    if (x && !b && typeof x == 'object') {
      if (P.endsWith(y, '{}'))
        (y = r ? y : y.slice(0, -2)), (x = JSON.stringify(x))
      else if (
        (P.isArray(x) && CT(x)) ||
        ((P.isFileList(x) || P.endsWith(y, '[]')) && (v = P.toArray(x)))
      )
        return (
          (y = qg(y)),
          v.forEach(function (w, S) {
            !(P.isUndefined(w) || w === null) &&
              t.append(
                l === !0 ? Xp([y], S, i) : l === null ? y : y + '[]',
                u(w)
              )
          }),
          !1
        )
    }
    return dc(x) ? !0 : (t.append(Xp(b, y, i), u(x)), !1)
  }
  const f = [],
    p = Object.assign(TT, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: dc,
    })
  function g(x, y) {
    if (!P.isUndefined(x)) {
      if (f.indexOf(x) !== -1)
        throw Error('Circular reference detected in ' + y.join('.'))
      f.push(x),
        P.forEach(x, function (v, h) {
          ;(!(P.isUndefined(v) || v === null) &&
            o.call(t, v, P.isString(h) ? h.trim() : h, y, p)) === !0 &&
            g(v, y ? y.concat(h) : [h])
        }),
        f.pop()
    }
  }
  if (!P.isObject(e)) throw new TypeError('data must be an object')
  return g(e), t
}
function Zp(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function qd(e, t) {
  ;(this._pairs = []), e && qa(e, this, t)
}
const Yg = qd.prototype
Yg.append = function (t, n) {
  this._pairs.push([t, n])
}
Yg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Zp)
      }
    : Zp
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function PT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Jg(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || PT,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = P.isURLSearchParams(t) ? t.toString() : new qd(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#')
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class OT {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const em = OT,
  Gg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $T = typeof URLSearchParams < 'u' ? URLSearchParams : qd,
  kT = typeof FormData < 'u' ? FormData : null,
  NT = typeof Blob < 'u' ? Blob : null,
  RT = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  jT = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  At = {
    isBrowser: !0,
    classes: { URLSearchParams: $T, FormData: kT, Blob: NT },
    isStandardBrowserEnv: RT,
    isStandardBrowserWebWorkerEnv: jT,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  }
function _T(e, t) {
  return qa(
    e,
    new At.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return At.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function LT(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  )
}
function AT(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function Xg(e) {
  function t(n, r, o, i) {
    let l = n[i++]
    const a = Number.isFinite(+l),
      s = i >= n.length
    return (
      (l = !l && P.isArray(o) ? o.length : l),
      s
        ? (P.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !a)
        : ((!o[l] || !P.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && P.isArray(o[l]) && (o[l] = AT(o[l])),
          !a)
    )
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {}
    return (
      P.forEachEntry(e, (r, o) => {
        t(LT(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
const IT = { 'Content-Type': void 0 }
function DT(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const Ya = {
  transitional: Gg,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = P.isObject(t)
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return o && o ? JSON.stringify(Xg(t)) : t
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t)
      )
        return t
      if (P.isArrayBufferView(t)) return t.buffer
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let a
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return _T(t, this.formSerializer).toString()
        if ((a = P.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData
          return qa(a ? { 'files[]': t } : t, s && new s(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), DT(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ya.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && P.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (a) {
          if (l)
            throw a.name === 'SyntaxError'
              ? G.from(a, G.ERR_BAD_RESPONSE, this, null, this.response)
              : a
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: At.classes.FormData, Blob: At.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
P.forEach(['delete', 'get', 'head'], function (t) {
  Ya.headers[t] = {}
})
P.forEach(['post', 'put', 'patch'], function (t) {
  Ya.headers[t] = P.merge(IT)
})
const Yd = Ya,
  FT = P.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  MT = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            ;(o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && FT[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  tm = Symbol('internals')
function xo(e) {
  return e && String(e).trim().toLowerCase()
}
function sl(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(sl) : String(e)
}
function UT(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const zT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Ws(e, t, n, r, o) {
  if (P.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1
    if (P.isRegExp(r)) return r.test(t)
  }
}
function BT(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function HT(e, t) {
  const n = P.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l)
      },
      configurable: !0,
    })
  })
}
class Ja {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(a, s, u) {
      const c = xo(s)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = P.findKey(o, c)
      ;(!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || s] = sl(a))
    }
    const l = (a, s) => P.forEach(a, (u, c) => i(u, c, s))
    return (
      P.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : P.isString(t) && (t = t.trim()) && !zT(t)
        ? l(MT(t), n)
        : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = xo(t)), t)) {
      const r = P.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return UT(o)
        if (P.isFunction(n)) return n.call(this, o, r)
        if (P.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = xo(t)), t)) {
      const r = P.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Ws(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(l) {
      if (((l = xo(l)), l)) {
        const a = P.findKey(r, l)
        a && (!n || Ws(r, r[a], a, n)) && (delete r[a], (o = !0))
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const i = n[r]
      ;(!t || Ws(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      P.forEach(this, (o, i) => {
        const l = P.findKey(r, i)
        if (l) {
          ;(n[l] = sl(o)), delete n[i]
          return
        }
        const a = t ? BT(i) : String(i).trim()
        a !== i && delete n[i], (n[a] = sl(o)), (r[a] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      P.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && P.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[tm] = this[tm] = { accessors: {} }).accessors,
      o = this.prototype
    function i(l) {
      const a = xo(l)
      r[a] || (HT(o, l), (r[a] = !0))
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this
  }
}
Ja.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
P.freezeMethods(Ja.prototype)
P.freezeMethods(Ja)
const Jt = Ja
function Ks(e, t) {
  const n = this || Yd,
    r = t || n,
    o = Jt.from(r.headers)
  let i = r.data
  return (
    P.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function Zg(e) {
  return !!(e && e.__CANCEL__)
}
function Ei(e, t, n) {
  G.call(this, e ?? 'canceled', G.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
P.inherits(Ei, G, { __CANCEL__: !0 })
function VT(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new G(
          'Request failed with status code ' + n.status,
          [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const WT = At.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, a) {
          const s = []
          s.push(n + '=' + encodeURIComponent(r)),
            P.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
            P.isString(i) && s.push('path=' + i),
            P.isString(l) && s.push('domain=' + l),
            a === !0 && s.push('secure'),
            (document.cookie = s.join('; '))
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          )
          return r ? decodeURIComponent(r[3]) : null
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function KT(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function QT(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function ey(e, t) {
  return e && !KT(t) ? QT(e, t) : t
}
const qT = At.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(i) {
        let l = i
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const a = P.isString(l) ? o(l) : l
          return a.protocol === r.protocol && a.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function YT(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function JT(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    l
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[i]
      l || (l = u), (n[o] = s), (r[o] = u)
      let f = i,
        p = 0
      for (; f !== o; ) (p += n[f++]), (f = f % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return
      const g = c && u - c
      return g ? Math.round((p * 1e3) / g) : void 0
    }
  )
}
function nm(e, t) {
  let n = 0
  const r = JT(50, 250)
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      a = i - n,
      s = r(a),
      u = i <= l
    n = i
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && l && u ? (l - i) / s : void 0,
      event: o,
    }
    ;(c[t ? 'download' : 'upload'] = !0), e(c)
  }
}
const GT = typeof XMLHttpRequest < 'u',
  XT =
    GT &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const i = Jt.from(e.headers).normalize(),
          l = e.responseType
        let a
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener('abort', a)
        }
        P.isFormData(o) &&
          (At.isStandardBrowserEnv || At.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType('multipart/form-data;', !1))
        let u = new XMLHttpRequest()
        if (e.auth) {
          const g = e.auth.username || '',
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          i.set('Authorization', 'Basic ' + btoa(g + ':' + x))
        }
        const c = ey(e.baseURL, e.url)
        u.open(e.method.toUpperCase(), Jg(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout)
        function f() {
          if (!u) return
          const g = Jt.from(
              'getAllResponseHeaders' in u && u.getAllResponseHeaders()
            ),
            y = {
              data:
                !l || l === 'text' || l === 'json'
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: g,
              config: e,
              request: u,
            }
          VT(
            function (v) {
              n(v), s()
            },
            function (v) {
              r(v), s()
            },
            y
          ),
            (u = null)
        }
        if (
          ('onloadend' in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(f)
              }),
          (u.onabort = function () {
            u && (r(new G('Request aborted', G.ECONNABORTED, e, u)), (u = null))
          }),
          (u.onerror = function () {
            r(new G('Network Error', G.ERR_NETWORK, e, u)), (u = null)
          }),
          (u.ontimeout = function () {
            let x = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const y = e.transitional || Gg
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
              r(
                new G(
                  x,
                  y.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null)
          }),
          At.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || qT(c)) &&
            e.xsrfCookieName &&
            WT.read(e.xsrfCookieName)
          g && i.set(e.xsrfHeaderName, g)
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in u &&
            P.forEach(i.toJSON(), function (x, y) {
              u.setRequestHeader(y, x)
            }),
          P.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            u.addEventListener('progress', nm(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            u.upload &&
            u.upload.addEventListener('progress', nm(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (g) => {
              u &&
                (r(!g || g.type ? new Ei(null, e, u) : g),
                u.abort(),
                (u = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)))
        const p = YT(c)
        if (p && At.protocols.indexOf(p) === -1) {
          r(new G('Unsupported protocol ' + p + ':', G.ERR_BAD_REQUEST, e))
          return
        }
        u.send(o || null)
      })
    },
  ul = { http: ET, xhr: XT }
P.forEach(ul, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const ZT = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e]
    const { length: t } = e
    let n, r
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = P.isString(n) ? ul[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new G(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            P.hasOwnProp(ul, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          )
    if (!P.isFunction(r)) throw new TypeError('adapter is not a function')
    return r
  },
  adapters: ul,
}
function Qs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ei(null, e)
}
function rm(e) {
  return (
    Qs(e),
    (e.headers = Jt.from(e.headers)),
    (e.data = Ks.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    ZT.getAdapter(e.adapter || Yd.adapter)(e).then(
      function (r) {
        return (
          Qs(e),
          (r.data = Ks.call(e, e.transformResponse, r)),
          (r.headers = Jt.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          Zg(r) ||
            (Qs(e),
            r &&
              r.response &&
              ((r.response.data = Ks.call(e, e.transformResponse, r.response)),
              (r.response.headers = Jt.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const om = (e) => (e instanceof Jt ? e.toJSON() : e)
function Wr(e, t) {
  t = t || {}
  const n = {}
  function r(u, c, f) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: f }, u, c)
      : P.isPlainObject(c)
      ? P.merge({}, c)
      : P.isArray(c)
      ? c.slice()
      : c
  }
  function o(u, c, f) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, f)
    } else return r(u, c, f)
  }
  function i(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c)
  }
  function l(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u)
    } else return r(void 0, c)
  }
  function a(u, c, f) {
    if (f in t) return r(u, c)
    if (f in e) return r(void 0, u)
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (u, c) => o(om(u), om(c), !0),
  }
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = s[c] || o,
        p = f(e[c], t[c], c)
      ;(P.isUndefined(p) && f !== a) || (n[c] = p)
    }),
    n
  )
}
const ty = '1.4.0',
  Jd = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Jd[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const im = {}
Jd.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      '[Axios v' +
      ty +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? '. ' + r : '')
    )
  }
  return (i, l, a) => {
    if (t === !1)
      throw new G(
        o(l, ' has been removed' + (n ? ' in ' + n : '')),
        G.ERR_DEPRECATED
      )
    return (
      n &&
        !im[l] &&
        ((im[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, l, a) : !0
    )
  }
}
function eP(e, t, n) {
  if (typeof e != 'object')
    throw new G('options must be an object', G.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i]
    if (l) {
      const a = e[i],
        s = a === void 0 || l(a, i, e)
      if (s !== !0)
        throw new G('option ' + i + ' must be ' + s, G.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new G('Unknown option ' + i, G.ERR_BAD_OPTION)
  }
}
const fc = { assertOptions: eP, validators: Jd },
  sn = fc.validators
class ql {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new em(), response: new em() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Wr(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      fc.assertOptions(
        r,
        {
          silentJSONParsing: sn.transitional(sn.boolean),
          forcedJSONParsing: sn.transitional(sn.boolean),
          clarifyTimeoutError: sn.transitional(sn.boolean),
        },
        !1
      ),
      o != null &&
        (P.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : fc.assertOptions(
              o,
              { encode: sn.function, serialize: sn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let l
    ;(l = i && P.merge(i.common, i[n.method])),
      l &&
        P.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (x) => {
            delete i[x]
          }
        ),
      (n.headers = Jt.concat(l, i))
    const a = []
    let s = !0
    this.interceptors.request.forEach(function (y) {
      ;(typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
        ((s = s && y.synchronous), a.unshift(y.fulfilled, y.rejected))
    })
    const u = []
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected)
    })
    let c,
      f = 0,
      p
    if (!s) {
      const x = [rm.bind(this), void 0]
      for (
        x.unshift.apply(x, a),
          x.push.apply(x, u),
          p = x.length,
          c = Promise.resolve(n);
        f < p;

      )
        c = c.then(x[f++], x[f++])
      return c
    }
    p = a.length
    let g = n
    for (f = 0; f < p; ) {
      const x = a[f++],
        y = a[f++]
      try {
        g = x(g)
      } catch (b) {
        y.call(this, b)
        break
      }
    }
    try {
      c = rm.call(this, g)
    } catch (x) {
      return Promise.reject(x)
    }
    for (f = 0, p = u.length; f < p; ) c = c.then(u[f++], u[f++])
    return c
  }
  getUri(t) {
    t = Wr(this.defaults, t)
    const n = ey(t.baseURL, t.url)
    return Jg(n, t.params, t.paramsSerializer)
  }
}
P.forEach(['delete', 'get', 'head', 'options'], function (t) {
  ql.prototype[t] = function (n, r) {
    return this.request(
      Wr(r || {}, { method: t, url: n, data: (r || {}).data })
    )
  }
})
P.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, a) {
      return this.request(
        Wr(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l,
        })
      )
    }
  }
  ;(ql.prototype[t] = n()), (ql.prototype[t + 'Form'] = n(!0))
})
const cl = ql
class Gd {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (i) {
      n = i
    })
    const r = this
    this.promise.then((o) => {
      if (!r._listeners) return
      let i = r._listeners.length
      for (; i-- > 0; ) r._listeners[i](o)
      r._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const l = new Promise((a) => {
          r.subscribe(a), (i = a)
        }).then(o)
        return (
          (l.cancel = function () {
            r.unsubscribe(i)
          }),
          l
        )
      }),
      t(function (i, l, a) {
        r.reason || ((r.reason = new Ei(i, l, a)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Gd(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const tP = Gd
function nP(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function rP(e) {
  return P.isObject(e) && e.isAxiosError === !0
}
const pc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(pc).forEach(([e, t]) => {
  pc[t] = e
})
const oP = pc
function ny(e) {
  const t = new cl(e),
    n = Fg(cl.prototype.request, t)
  return (
    P.extend(n, cl.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return ny(Wr(e, o))
    }),
    n
  )
}
const Oe = ny(Yd)
Oe.Axios = cl
Oe.CanceledError = Ei
Oe.CancelToken = tP
Oe.isCancel = Zg
Oe.VERSION = ty
Oe.toFormData = qa
Oe.AxiosError = G
Oe.Cancel = Oe.CanceledError
Oe.all = function (t) {
  return Promise.all(t)
}
Oe.spread = nP
Oe.isAxiosError = rP
Oe.mergeConfig = Wr
Oe.AxiosHeaders = Jt
Oe.formToJSON = (e) => Xg(P.isHTMLForm(e) ? new FormData(e) : e)
Oe.HttpStatusCode = oP
Oe.default = Oe
const io = Oe,
  lo = { baseUrl: 'http://perpustakaan.upi.edu:8000' },
  ry = (e) => {
    switch (e) {
      case 'call_number':
        return 'Nomor Panggil'
      case 'collection':
        return 'Koleksi'
      case 'title':
        return 'Judul'
      case 'author':
        return 'Pengarang'
      case 'material':
        return 'Material'
      case 'subtitle':
        return 'Sub Judul'
      case 'available':
        return 'Ketersediaan'
      case 'copies':
        return 'Jumlah Salinan'
    }
  },
  iP = (e) => {
    switch (e) {
      case 'Judul':
        return 'title'
      case 'Pengarang':
        return 'author'
      case 'Penerbit':
        return 'publisher'
      case 'ISBN':
        return 'isbn'
      case 'Tahun Terbit':
        return 'year'
      case 'Kategori':
        return 'category'
      default:
        return ''
    }
  },
  jr = (e) => {
    switch (e) {
      case 'Paling Relevan':
        return 'bibid'
      case 'Dari yang Terbaru':
        return 'date'
      case 'Dari yang Terlama':
        return 'date'
    }
  },
  _r = (e) => {
    switch (e) {
      case 'Paling Relevan':
        return 'asc'
      case 'Dari yang Terbaru':
        return 'desc'
      case 'Dari yang Terlama':
        return 'asc'
    }
  },
  lP = (e) => {
    switch (e) {
      case 'call_number':
        return 'Nomor Panggil'
      case 'title':
        return 'Judul'
      case 'subtitle':
        return 'Subjudul'
      case 'subjects':
        return 'Subjek'
      case 'author':
        return 'Penulis'
      case 'responsibility':
        return 'Tanggung Jawab'
      case 'collection':
        return 'Koleksi'
      case 'material':
        return 'Material'
      case 'no_id':
        return 'Nomor Identitas'
      case 'abstract':
        return 'Abstrak'
      case 'edition_stmt':
        return 'Pernyataan Edisi'
      case 'ddc':
        return 'Klasifikasi Desimal Dewey (DDC)'
      case 'pub_place':
        return 'Tempat Terbit'
      case 'pages':
        return 'Jumlah Halaman'
      case 'availability_term':
        return 'Ketersediaan'
      case 'publisher':
        return 'Penerbit'
      case 'pub_year':
        return 'Tahun Terbit'
      case 'phisical_detail':
        return 'Detail Fisik'
      case 'dimention':
        return 'Dimensi'
      case 'source':
        return 'Sumber'
      case 'operator':
        return 'Operator'
      case 'classification':
        return 'Klasifikasi'
      default:
        return ''
    }
  },
  oy = (e, t) => {
    if (e === 'asc' && t === 'bibid') return { name: 'Paling Relevan' }
    if (e === 'asc' && t === 'date') return { name: 'Dari yang Terbaru' }
    if (e === 'desc' && t === 'date') return { name: 'Dari yang Terlama' }
  },
  iy = ({
    subtitle: e,
    call_number: t,
    collection: n,
    material: r,
    available: o,
    copies: i,
  }) => ({
    subtitle: e,
    call_number: t,
    collection: n,
    material: r,
    available: o,
    copies: i,
  }),
  aP = [
    'title',
    'subtitle',
    'call_number',
    'subjects',
    'author',
    'responsibility',
    'collection',
    'material',
    'no_id',
    'edition_stmt',
    'ddc',
    'pub_place',
    'pages',
    'availability_term',
    'publisher',
    'pub_year',
    'phisical_detail',
    'dimention',
    'source',
    'operator',
    'classification',
  ],
  sP = (e) => {
    const t = {}
    return (
      aP.forEach((n) => {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      }),
      t
    )
  },
  lm = (e) => {
    const t = new Date(e)
    return e === null || isNaN(t)
      ? '-'
      : t.toLocaleString('id-ID', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
          timeZone: 'Asia/Jakarta',
        })
  },
  am = (e) => {
    const t = { title: '', author: '', subject: '', all: '' }
    return (
      e.forEach((n) => {
        const { keyword: r, search: o } = n
        o === 'Judul'
          ? (t.title += r + ',')
          : o === 'Pengarang'
          ? (t.author += r + ',')
          : o === 'Subjek'
          ? (t.subject += r + ',')
          : (o === 'Semua' || o === '') && (t.all += r + ',')
      }),
      (t.title = t.title.slice(0, -1)),
      (t.author = t.author.slice(0, -1)),
      (t.subject = t.subject.slice(0, -1)),
      (t.all = t.all.slice(0, -1)),
      t
    )
  },
  uP = (e) =>
    e
      .slice(0, 30)
      .map((n) => ({ code: n.publisher, description: n.publisher })),
  cP = {
    search: '',
    searchFilter: '',
    keyword: '',
    data: [],
    isFirstFetch: !1,
    isFirstFetchAdvanced: !1,
    collections: [],
    materials: [],
    publishers: [],
    page: 1,
    totalPage: 1,
    totalData: 0,
    limit: 10,
    sort: 'bibid',
    type: 'asc',
    isLoading: !1,
    formAdvanced: {
      material: '',
      collection: '',
      all: '',
      title: '',
      author: '',
      subject: '',
      publisher: '',
      year: '',
    },
  },
  or = ro(
    'search/fetchSearch',
    async ({ keyword: e, search: t, page: n, limit: r, sort: o, type: i }) => {
      try {
        return (
          await io.get(
            `${lo.baseUrl}/v1/biblios/basic-search?search=${t}&key=${e}&page=${n}&limit=${r}&sort=${o}&type=${i}`
          )
        ).data
      } catch (l) {
        console.error(l)
      }
    }
  ),
  ly = ro('search/fetchCollections', async () => {
    try {
      return (await io.get(`${lo.baseUrl}/v1/collections`)).data
    } catch (e) {
      console.error(e)
    }
  }),
  ay = ro('search/fetchMaterials', async () => {
    try {
      return (await io.get(`${lo.baseUrl}/v1/materials`)).data
    } catch (e) {
      console.error(e)
    }
  }),
  sy = ro('search/fetchPublisher', async (e) => {
    try {
      return (await io.get(`${lo.baseUrl}/v1/details/publishers?key=${e}`)).data
    } catch (t) {
      console.error(t)
    }
  }),
  Kr = ro('search/fetchSearchAdvanced', async ({ formAdvanced: e }) => {
    try {
      const {
          material: t,
          collection: n,
          title: r,
          author: o,
          subject: i,
          publisher: l = '',
          year: a = '',
          sort: s = 'bibid',
          type: u = 'asc',
          limit: c = 10,
          page: f = 1,
          all: p,
        } = e,
        g = {
          material: t,
          collection: n,
          title: r,
          author: o,
          subject: i,
          sort: s,
          type: u,
          limit: c,
          publisher: l,
          year: a,
          page: f,
          all: p,
        }
      return (
        await io.get(`${lo.baseUrl}/v1/biblios/advanced-search`, { params: g })
      ).data
    } catch (t) {
      console.error(t)
    }
  }),
  uy = Wd({
    name: 'search',
    initialState: cP,
    reducers: {
      setSearch(e, t) {
        ;(e.search = t.payload), (e.searchFilter = iP(t.payload))
      },
      setKeyword(e, t) {
        e.keyword = t.payload
      },
      setPagination(e, t) {
        ;(e.page = t.payload.page),
          (e.limit = t.payload.limit),
          (e.sort = t.payload.sort),
          (e.type = t.payload.type)
      },
      setSort(e, t) {
        e.sort = t.payload
      },
      setType(e, t) {
        e.type = t.payload
      },
      setIsLoading(e, t) {
        e.isLoading = t.payload
      },
      setFormAdvanced(e, t) {
        e.formAdvanced = { ...e.formAdvanced, [t.payload.name]: t.payload.code }
      },
      setEmptyFormAdvanced(e) {
        e.formAdvanced = {
          material: '',
          collection: '',
          title: '',
          author: '',
          subject: '',
          publisher: '',
          year: '',
        }
      },
    },
    extraReducers(e) {
      e.addCase(or.pending, (t) => {
        t.isLoading = !0
      }),
        e.addCase(or.fulfilled, (t, n) => {
          ;(t.isFirstFetch = !0),
            (t.data = n.payload),
            (t.totalData = n.payload.pagination.totalRows),
            (t.page = n.payload.pagination.currentPage),
            (t.totalPage = n.payload.pagination.totalPages),
            (t.isLoading = !1)
        }),
        e.addCase(ly.fulfilled, (t, n) => {
          t.collections = {
            ...n.payload,
            data: [
              { code: '', description: 'Semua Koleksi' },
              ...n.payload.data,
            ],
          }
        }),
        e.addCase(ay.fulfilled, (t, n) => {
          t.materials = {
            ...n.payload,
            data: [
              { code: '', description: 'Semua Material' },
              ...n.payload.data,
            ],
          }
        }),
        e.addCase(Kr.pending, (t) => {
          t.isLoading = !0
        }),
        e.addCase(Kr.fulfilled, (t, n) => {
          ;(t.isFirstFetchAdvanced = !0),
            (t.data = n.payload),
            (t.totalData = n.payload.pagination.totalRows),
            (t.page = n.payload.pagination.currentPage),
            (t.totalPage = n.payload.pagination.totalPages),
            (t.isLoading = !1)
        }),
        e.addCase(sy.fulfilled, (t, n) => {
          const r = uP(n.payload.data)
          t.publishers = {
            ...n.payload,
            data: [{ code: '', description: 'Semua Penerbit' }, ...r],
          }
        })
    },
  }),
  cy = (e) => e.search.keyword,
  dP = (e) => e.search.searchFilter,
  dy = (e) => e.search.data,
  fy = (e) => e.search.isFirstFetch,
  fP = (e) => e.search.collections,
  pP = (e) => e.search.materials,
  py = (e) => e.search.page,
  my = (e) => e.search.totalData,
  Xd = (e) => e.search.limit,
  hy = (e) => e.search.totalPage,
  vy = (e) => e.search.isLoading,
  mP = (e) => e.search.formAdvanced,
  hP = (e) => e.search.publishers,
  {
    setSearch: gy,
    setKeyword: Yl,
    setPagination: yy,
    setSort: xy,
    setType: wy,
    setIsLoading: Zd,
    setFormAdvanced: Et,
    setEmptyFormAdvanced: by,
  } = uy.actions,
  vP = uy.reducer
function Sy({
  filters: e,
  handleInputChange: t,
  name: n,
  index: r,
  width: o = 'min-w-[300px]',
  search: i,
}) {
  const [, l] = d.useState({ name: 'Semua' })
  return m.jsx(ze, {
    value: i,
    onChange: (a) => {
      l(a), t(r, a.name, n)
    },
    children: m.jsxs('div', {
      className: `relative ${o}`,
      children: [
        m.jsxs(ze.Button, {
          className:
            'relative w-full cursor-default rounded-lg bg-slate-200 text-light-gray-3 opacity-70 pl-3 pr-10 text-left  sm:text-sm py-2',
          children: [
            m.jsx('span', {
              className: 'block truncate text-clip',
              children:
                e[r].search.length > 0 ? e[r].search : i || 'Pilih Semua',
            }),
            m.jsx('span', {
              className:
                'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
              children: m.jsx('img', {
                src: '/opacnew/opac/chevron-up-down2.svg',
                alt: 'chevron_up_down',
                className: 'h-5 w-5 text-light-gray-3',
                'aria-hidden': 'true',
              }),
            }),
          ],
        }),
        m.jsx(On, {
          as: d.Fragment,
          leave: 'transition ease-in duration-100',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
          children: m.jsx(ze.Options, {
            className:
              'absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30',
            children: e[r].filters.map((a, s) =>
              m.jsx(
                ze.Option,
                {
                  className: ({ active: u }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      u ? 'bg-soft-yellow text-white' : 'text-dark-gray'
                    }`,
                  value: a,
                  children: ({ selected: u }) =>
                    m.jsx(m.Fragment, {
                      children: m.jsx('span', {
                        className: `block truncate ${
                          u ? 'font-medium' : 'font-normal'
                        }`,
                        children: a.name,
                      }),
                    }),
                },
                s
              )
            ),
          }),
        }),
      ],
    }),
  })
}
Sy.propTypes = {
  filters: A.array,
  handleInputChange: A.func,
  name: A.string,
  index: A.number,
  width: A.string,
  search: A.string,
}
const gP = (e, t = 500) => {
  const [n, r] = d.useState(e)
  return (
    d.useEffect(() => {
      const o = setTimeout(() => {
        r(e)
      }, t)
      return () => {
        clearTimeout(o)
      }
    }, [e, t]),
    n
  )
}
function Ey({ selected: e, setSelected: t }) {
  const n = Rt(),
    r = ce(hP).data,
    [o, i] = d.useState(''),
    l = gP(o, 800)
  d.useEffect(() => {
    n(sy(l))
  }, [l, n])
  let a =
    l === ''
      ? r
      : r.filter((s) => {
          const u = l.toLowerCase().replace(/\s+/g, ''),
            c = s.description.toLowerCase().replace(/\s+/g, '')
          return s.description === 'Semua Penerbit' || c.includes(u)
        })
  return m.jsx('div', {
    className: '',
    children: m.jsx(vo, {
      value: e,
      onChange: (s) => {
        n(Et({ name: 'publisher', code: s.code })), t(s)
      },
      children: m.jsxs('div', {
        className: 'relative',
        children: [
          m.jsxs('div', {
            className: '',
            children: [
              m.jsx(vo.Input, {
                className:
                  'w-full sm:w-[300px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                displayValue: (s) => s.description,
                onChange: (s) => {
                  i(s.target.value)
                },
              }),
              m.jsx(vo.Button, {
                className: 'absolute inset-y-0 right-0 flex items-center pr-2',
                children: m.jsx('img', {
                  src: '/opacnew/opac/chevron-up-down2.svg',
                  alt: 'chevron_up_down',
                  width: 20,
                  className: ' text-gray-400',
                  'aria-hidden': 'true',
                }),
              }),
            ],
          }),
          m.jsx(On, {
            as: d.Fragment,
            leave: 'transition ease-in duration-100',
            leaveFrom: 'opacity-100',
            leaveTo: 'opacity-0',
            afterLeave: () => i(''),
            children: m.jsx(vo.Options, {
              className:
                'absolute max-h-40 z-30 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
              children:
                (a == null ? void 0 : a.length) === 0 && l !== ''
                  ? m.jsx('div', {
                      className:
                        'relative cursor-default select-none py-2 px-4 text-gray-700',
                      children: 'Nothing found.',
                    })
                  : a == null
                  ? void 0
                  : a.map((s, u) =>
                      m.jsx(
                        vo.Option,
                        {
                          className: ({ active: c }) =>
                            `relative cursor-default select-none py-2  px-4 ${
                              c ? 'bg-soft-yellow text-white' : 'text-gray-900'
                            }`,
                          value: s,
                          children: ({ selected: c }) =>
                            m.jsx(m.Fragment, {
                              children: m.jsx('span', {
                                className: `block truncate ${
                                  c ? 'font-medium' : 'font-normal'
                                }`,
                                children: s.description,
                              }),
                            }),
                        },
                        u
                      )
                    ),
            }),
          }),
        ],
      }),
    }),
  })
}
Ey.propTypes = { people: A.array, selected: A.string, setSelected: A.func }
function mc({
  filters: e,
  width: t = 'min-w-[300px]',
  name: n,
  selected: r,
  setSelected: o,
}) {
  const i = Rt()
  return m.jsx(ze, {
    value: r,
    onChange: (l) => {
      o(l),
        n === 'material'
          ? i(Et({ name: 'material', code: l.code }))
          : n === 'collection' && i(Et({ name: 'collection', code: l.code }))
    },
    children: m.jsxs('div', {
      className: `relative ${t}`,
      children: [
        m.jsxs(ze.Button, {
          className:
            'relative w-full cursor-default rounded-lg bg-slate-200 text-light-gray-3 opacity-70 pl-3 pr-10 text-left  sm:text-sm py-2',
          children: [
            m.jsx('span', {
              className: 'block truncate ',
              children: r.description || r,
            }),
            m.jsx('span', {
              className:
                'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
              children: m.jsx('img', {
                src: '/opacnew/opac/chevron-up-down2.svg',
                alt: 'chevron_up_down',
                className: 'h-5 w-5 text-light-gray-3',
                'aria-hidden': 'true',
              }),
            }),
          ],
        }),
        m.jsx(On, {
          as: d.Fragment,
          leave: 'transition ease-in duration-100',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
          children: m.jsx(ze.Options, {
            className:
              'absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30',
            children:
              e == null
                ? void 0
                : e.map((l, a) =>
                    m.jsx(
                      ze.Option,
                      {
                        className: ({ active: s }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            s ? 'bg-soft-yellow text-white' : 'text-dark-gray'
                          }`,
                        value: l,
                        children: ({ selected: s }) =>
                          m.jsx(m.Fragment, {
                            children: m.jsx('span', {
                              className: `block truncate ${
                                s ? 'font-medium' : 'font-normal'
                              }`,
                              children: l.description,
                            }),
                          }),
                      },
                      a
                    )
                  ),
          }),
        }),
      ],
    }),
  })
}
mc.propTypes = {
  filters: A.array,
  width: A.string,
  name: A.string,
  selected: A.object,
  setSelected: A.func,
}
const qs = [
  { name: 'Semua' },
  { name: 'Judul' },
  { name: 'Pengarang' },
  { name: 'Subjek' },
]
function ef({ isOpen: e, setIsOpen: t }) {
  const n = Rt()
  function r() {
    t(!1)
  }
  d.useEffect(() => {
    n(ly()), n(ay())
  }, [n])
  const o = ce(fP),
    i = ce(pP),
    l = ce(mP),
    a = ln(),
    [s, u] = d.useState([{ keyword: '', search: '', filters: qs }]),
    [c, f] = d.useState({ code: '', description: 'Semua Material' }),
    [p, g] = d.useState({ code: '', description: 'Semua Koleksi' }),
    [x, y] = d.useState({ code: '', description: 'Semua Penerbit' }),
    [b, v] = d.useState(!0),
    [h, w] = d.useState({ from: '', to: '', year: '' }),
    S = ($) => {
      console.log($),
        n(Et({ name: 'title', code: $.title })),
        n(Et({ name: 'author', code: $.author })),
        n(Et({ name: 'subject', code: $.subject })),
        n(Et({ name: 'all', code: $.all }))
    },
    E = () => {
      u([...s, { keyword: '', search: '', filters: qs }])
    },
    C = ($) => {
      const R = s.filter((W, M) => M !== $)
      u(R)
      const H = am(R)
      S(H)
    },
    O = ($, R, H) => {
      const W = [...s]
      W[$][H] = R
      const M = am(W)
      S(M), u(W)
    },
    T = () => {
      n(by()),
        u([{ keyword: '', search: '', filters: qs }]),
        f({ code: '', description: 'Semua Material' }),
        g({ code: '', description: 'Semua Koleksi' }),
        y({ code: '', description: 'Semua Penerbit' }),
        w({ from: '', to: '', year: '' })
    },
    k = async ($) => {
      $.preventDefault(), await n(Kr({ formAdvanced: l }))
      const R = { ...l, page: 1, limit: 10, sort: 'bibid', type: 'asc' }
      a({
        pathname: '/advanced-search',
        search: `?${new URLSearchParams(R).toString()}`,
      })
    }
  return m.jsx(m.Fragment, {
    children: m.jsx(On, {
      appear: !0,
      show: e,
      as: d.Fragment,
      children: m.jsxs(js, {
        as: 'div',
        className: 'relative z-10',
        onClose: r,
        children: [
          m.jsx(On.Child, {
            as: d.Fragment,
            enter: 'ease-out duration-300',
            enterFrom: 'opacity-0',
            enterTo: 'opacity-100',
            leave: 'ease-in duration-200',
            leaveFrom: 'opacity-100',
            leaveTo: 'opacity-0',
            children: m.jsx('div', {
              className: 'fixed inset-0 bg-black bg-opacity-25',
            }),
          }),
          m.jsx('div', {
            className: 'fixed inset-0 overflow-y-auto',
            children: m.jsx('form', {
              onSubmit: ($) => k($),
              className:
                'flex min-h-full items-center justify-center p-4 text-center',
              children: m.jsx(On.Child, {
                as: d.Fragment,
                enter: 'ease-out duration-300',
                enterFrom: 'opacity-0 scale-95',
                enterTo: 'opacity-100 scale-100',
                leave: 'ease-in duration-200',
                leaveFrom: 'opacity-100 scale-100',
                leaveTo: 'opacity-0 scale-95',
                children: m.jsxs(js.Panel, {
                  className:
                    'w-fit transform overflow rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                  children: [
                    m.jsx(js.Title, {
                      as: 'h3',
                      className: 'text-lg font-medium leading-6 text-gray-900',
                      children: 'Advanced Search',
                    }),
                    m.jsx('div', {
                      className: 'w-full h-[1px] bg-gray-300 my-3',
                    }),
                    m.jsxs('div', {
                      className:
                        'grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between w-full',
                      children: [
                        m.jsxs('div', {
                          className: 'flex flex-col gap-2',
                          children: [
                            m.jsx('label', {
                              htmlFor: 'material',
                              className:
                                'font-semibold text-light-gray-3 text-sm',
                              children: 'Material',
                            }),
                            m.jsx(mc, {
                              filters: i == null ? void 0 : i.data,
                              name: 'material',
                              selected: c,
                              setSelected: f,
                            }),
                          ],
                        }),
                        m.jsxs('div', {
                          className: 'flex flex-col gap-2',
                          children: [
                            m.jsx('label', {
                              htmlFor: 'koleksi',
                              className:
                                'font-semibold text-light-gray-3 text-sm',
                              children: 'Koleksi',
                            }),
                            m.jsx(mc, {
                              filters: o == null ? void 0 : o.data,
                              name: 'collection',
                              selected: p,
                              setSelected: g,
                            }),
                          ],
                        }),
                        m.jsxs('div', {
                          className: 'flex flex-col gap-2',
                          children: [
                            m.jsx('label', {
                              htmlFor: 'publisher',
                              className:
                                'font-semibold text-light-gray-3 text-sm',
                              children: 'Penerbit',
                            }),
                            m.jsx(Ey, { selected: x, setSelected: y }),
                          ],
                        }),
                        m.jsxs('div', {
                          className: 'flex flex-col gap-2',
                          children: [
                            m.jsxs('label', {
                              htmlFor: 'year',
                              className:
                                'font-semibold text-light-gray-3 text-sm flex gap-2 items-center justify-between',
                              children: [
                                b ? 'Tahun' : 'Rentang Tahun',
                                m.jsx('div', {
                                  className: 'cursor-pointer',
                                  onClick: () => {
                                    n(Et({ name: 'year', code: '' })),
                                      v(!b),
                                      w(
                                        b
                                          ? { ...h, from: '', to: '' }
                                          : { ...h, year: '' }
                                      )
                                  },
                                  children: m.jsx('img', {
                                    src: '/opacnew/opac/change.svg',
                                    alt: 'change',
                                    width: 20,
                                    height: 20,
                                  }),
                                }),
                              ],
                            }),
                            m.jsx('div', {
                              className: 'flex gap-2 sm:w-[300px] w-full',
                              children: b
                                ? m.jsx('input', {
                                    name: 'year',
                                    id: 'year',
                                    type: 'number',
                                    min: 1900,
                                    max: 2100,
                                    placeholder: 'Semua Tahun ',
                                    className:
                                      'w-full  text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                                    value: h.year,
                                    onChange: ($) => {
                                      w({ ...h, year: $.target.value }),
                                        n(
                                          Et({
                                            name: 'year',
                                            code: $.target.value,
                                          })
                                        )
                                    },
                                  })
                                : m.jsxs(m.Fragment, {
                                    children: [
                                      m.jsx('input', {
                                        name: 'fromYear',
                                        id: 'fromYear',
                                        type: 'number',
                                        min: 1900,
                                        max: 2100,
                                        required: h.to !== '',
                                        placeholder: 'Dari ',
                                        className:
                                          'w-full sm:w-1/2 text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                                        value: h.from,
                                        onChange: ($) => {
                                          w({ ...h, from: $.target.value }),
                                            n(
                                              Et({
                                                name: 'year',
                                                code: `${$.target.value},${h.to}`,
                                              })
                                            )
                                        },
                                      }),
                                      m.jsx('input', {
                                        name: 'year',
                                        id: 'year',
                                        type: 'number',
                                        min: 1900,
                                        max: 2100,
                                        required: h.from !== '',
                                        placeholder: 'Sampai ',
                                        className:
                                          'w-full sm:w-1/2 text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                                        value: h.to,
                                        onChange: ($) => {
                                          w({ ...h, to: $.target.value }),
                                            n(
                                              Et({
                                                name: 'year',
                                                code: `${h.from},${$.target.value}`,
                                              })
                                            )
                                        },
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.map(($, R) =>
                      m.jsxs(
                        'div',
                        {
                          className: 'flex flex-col gap-2 mt-3',
                          children: [
                            R === 0 &&
                              m.jsx('label', {
                                htmlFor: 'Bahasa',
                                className:
                                  'font-semibold text-light-gray-3 text-sm',
                                children: 'Kata Kunci',
                              }),
                            m.jsxs('div', {
                              className: 'flex gap-3',
                              children: [
                                m.jsx(Sy, {
                                  filters: s,
                                  width:
                                    'sm:w-[calc(100%-420px)] w-[calc(100%-225px)]',
                                  handleInputChange: O,
                                  name: 'search',
                                  index: R,
                                  search: $.search,
                                }),
                                m.jsx('input', {
                                  name: 'keyword',
                                  id: 'search-input',
                                  placeholder: 'Ketik disini',
                                  className:
                                    'w-[calc(100%-150px)] sm:w-[370px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                                  value: $.keyword,
                                  onChange: (H) => {
                                    O(R, H.target.value, 'keyword')
                                  },
                                }),
                                R !== 0 &&
                                  m.jsx('button', {
                                    type: 'button',
                                    onClick: () => {
                                      C(R)
                                    },
                                    children: m.jsx('img', {
                                      src: '/opacnew/opac/minus.svg',
                                      alt: 'minus',
                                    }),
                                  }),
                                R === 0 &&
                                  m.jsx('button', {
                                    type: 'button',
                                    onClick: E,
                                    children: m.jsx('img', {
                                      src: '/opacnew/opac/plus.svg',
                                      alt: 'plus',
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        },
                        R
                      )
                    ),
                    m.jsxs('div', {
                      className: 'w-full flex justify-end gap-2 mt-3',
                      children: [
                        m.jsx('button', {
                          type: 'button',
                          className:
                            'bg-gray-300 w-[120px] py-2  rounded-full text-dark-gray  text-sm font-medium',
                          onClick: T,
                          children: 'Hapus',
                        }),
                        m.jsx('button', {
                          className:
                            'bg-soft-yellow w-[120px] py-2  rounded-full text-white text-sm font-medium',
                          type: 'submit',
                          children: 'Cari',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    }),
  })
}
ef.propTypes = { isOpen: A.bool, setIsOpen: A.func }
function nt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o)
  }
}
function yP(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function Cy(...e) {
  return (t) => e.forEach((n) => yP(n, t))
}
function ir(...e) {
  return d.useCallback(Cy(...e), e)
}
function Ty(e, t = []) {
  let n = []
  function r(i, l) {
    const a = d.createContext(l),
      s = n.length
    n = [...n, l]
    function u(f) {
      const { scope: p, children: g, ...x } = f,
        y = (p == null ? void 0 : p[e][s]) || a,
        b = d.useMemo(() => x, Object.values(x))
      return d.createElement(y.Provider, { value: b }, g)
    }
    function c(f, p) {
      const g = (p == null ? void 0 : p[e][s]) || a,
        x = d.useContext(g)
      if (x) return x
      if (l !== void 0) return l
      throw new Error(`\`${f}\` must be used within \`${i}\``)
    }
    return (u.displayName = i + 'Provider'), [u, c]
  }
  const o = () => {
    const i = n.map((l) => d.createContext(l))
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || i
      return d.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s])
    }
  }
  return (o.scopeName = e), [r, xP(o, ...t)]
}
function xP(...e) {
  const t = e[0]
  if (e.length === 1) return t
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }))
    return function (i) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const f = s(i)[`__scope${u}`]
        return { ...a, ...f }
      }, {})
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l])
    }
  }
  return (n.scopeName = t.scopeName), n
}
const Jl = d.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = d.Children.toArray(n),
    i = o.find(bP)
  if (i) {
    const l = i.props.children,
      a = o.map((s) =>
        s === i
          ? d.Children.count(l) > 1
            ? d.Children.only(null)
            : d.isValidElement(l)
            ? l.props.children
            : null
          : s
      )
    return d.createElement(
      hc,
      Ne({}, r, { ref: t }),
      d.isValidElement(l) ? d.cloneElement(l, void 0, a) : null
    )
  }
  return d.createElement(hc, Ne({}, r, { ref: t }), n)
})
Jl.displayName = 'Slot'
const hc = d.forwardRef((e, t) => {
  const { children: n, ...r } = e
  return d.isValidElement(n)
    ? d.cloneElement(n, { ...SP(r, n.props), ref: t ? Cy(t, n.ref) : n.ref })
    : d.Children.count(n) > 1
    ? d.Children.only(null)
    : null
})
hc.displayName = 'SlotClone'
const wP = ({ children: e }) => d.createElement(d.Fragment, null, e)
function bP(e) {
  return d.isValidElement(e) && e.type === wP
}
function SP(e, t) {
  const n = { ...t }
  for (const r in t) {
    const o = e[r],
      i = t[r]
    ;/^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a)
          })
        : o && (n[r] = o)
      : r === 'style'
      ? (n[r] = { ...o, ...i })
      : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '))
  }
  return { ...e, ...n }
}
function EP(e) {
  const t = e + 'CollectionProvider',
    [n, r] = Ty(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (g) => {
      const { scope: x, children: y } = g,
        b = D.useRef(null),
        v = D.useRef(new Map()).current
      return D.createElement(o, { scope: x, itemMap: v, collectionRef: b }, y)
    },
    a = e + 'CollectionSlot',
    s = D.forwardRef((g, x) => {
      const { scope: y, children: b } = g,
        v = i(a, y),
        h = ir(x, v.collectionRef)
      return D.createElement(Jl, { ref: h }, b)
    }),
    u = e + 'CollectionItemSlot',
    c = 'data-radix-collection-item',
    f = D.forwardRef((g, x) => {
      const { scope: y, children: b, ...v } = g,
        h = D.useRef(null),
        w = ir(x, h),
        S = i(u, y)
      return (
        D.useEffect(
          () => (
            S.itemMap.set(h, { ref: h, ...v }), () => void S.itemMap.delete(h)
          )
        ),
        D.createElement(Jl, { [c]: '', ref: w }, b)
      )
    })
  function p(g) {
    const x = i(e + 'CollectionConsumer', g)
    return D.useCallback(() => {
      const b = x.collectionRef.current
      if (!b) return []
      const v = Array.from(b.querySelectorAll(`[${c}]`))
      return Array.from(x.itemMap.values()).sort(
        (S, E) => v.indexOf(S.ref.current) - v.indexOf(E.ref.current)
      )
    }, [x.collectionRef, x.itemMap])
  }
  return [{ Provider: l, Slot: s, ItemSlot: f }, p, r]
}
const CP = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  zt = CP.reduce((e, t) => {
    const n = d.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        a = i ? Jl : t
      return (
        d.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        d.createElement(a, Ne({}, l, { ref: o }))
      )
    })
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
  }, {})
function Py(e, t) {
  e && sr.flushSync(() => e.dispatchEvent(t))
}
function nn(e) {
  const t = d.useRef(e)
  return (
    d.useEffect(() => {
      t.current = e
    }),
    d.useMemo(
      () =>
        (...n) => {
          var r
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n)
        },
      []
    )
  )
}
function TP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nn(e)
  d.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o)
    }
    return (
      t.addEventListener('keydown', r),
      () => t.removeEventListener('keydown', r)
    )
  }, [n, t])
}
const vc = 'dismissableLayer.update',
  PP = 'dismissableLayer.pointerDownOutside',
  OP = 'dismissableLayer.focusOutside'
let sm
const Oy = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $P = d.forwardRef((e, t) => {
    var n
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: a,
        onDismiss: s,
        ...u
      } = e,
      c = d.useContext(Oy),
      [f, p] = d.useState(null),
      g =
        (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, x] = d.useState({}),
      y = ir(t, (T) => p(T)),
      b = Array.from(c.layers),
      [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = b.indexOf(v),
      w = f ? b.indexOf(f) : -1,
      S = c.layersWithOutsidePointerEventsDisabled.size > 0,
      E = w >= h,
      C = NP((T) => {
        const k = T.target,
          $ = [...c.branches].some((R) => R.contains(k))
        !E ||
          $ ||
          (i == null || i(T),
          a == null || a(T),
          T.defaultPrevented || s == null || s())
      }, g),
      O = RP((T) => {
        const k = T.target
        ;[...c.branches].some((R) => R.contains(k)) ||
          (l == null || l(T),
          a == null || a(T),
          T.defaultPrevented || s == null || s())
      }, g)
    return (
      TP((T) => {
        w === c.layers.size - 1 &&
          (o == null || o(T),
          !T.defaultPrevented && s && (T.preventDefault(), s()))
      }, g),
      d.useEffect(() => {
        if (f)
          return (
            r &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((sm = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = 'none')),
              c.layersWithOutsidePointerEventsDisabled.add(f)),
            c.layers.add(f),
            um(),
            () => {
              r &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = sm)
            }
          )
      }, [f, g, r, c]),
      d.useEffect(
        () => () => {
          f &&
            (c.layers.delete(f),
            c.layersWithOutsidePointerEventsDisabled.delete(f),
            um())
        },
        [f, c]
      ),
      d.useEffect(() => {
        const T = () => x({})
        return (
          document.addEventListener(vc, T),
          () => document.removeEventListener(vc, T)
        )
      }, []),
      d.createElement(
        zt.div,
        Ne({}, u, {
          ref: y,
          style: {
            pointerEvents: S ? (E ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: nt(e.onFocusCapture, O.onFocusCapture),
          onBlurCapture: nt(e.onBlurCapture, O.onBlurCapture),
          onPointerDownCapture: nt(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    )
  }),
  kP = d.forwardRef((e, t) => {
    const n = d.useContext(Oy),
      r = d.useRef(null),
      o = ir(t, r)
    return (
      d.useEffect(() => {
        const i = r.current
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i)
            }
          )
      }, [n.branches]),
      d.createElement(zt.div, Ne({}, e, { ref: o }))
    )
  })
function NP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nn(e),
    r = d.useRef(!1),
    o = d.useRef(() => {})
  return (
    d.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              $y(PP, n, u, { discrete: !0 })
            }
            var s = c
            const u = { originalEvent: a }
            a.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = c),
                t.addEventListener('click', o.current, { once: !0 }))
              : c()
          }
          r.current = !1
        },
        l = window.setTimeout(() => {
          t.addEventListener('pointerdown', i)
        }, 0)
      return () => {
        window.clearTimeout(l),
          t.removeEventListener('pointerdown', i),
          t.removeEventListener('click', o.current)
      }
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  )
}
function RP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nn(e),
    r = d.useRef(!1)
  return (
    d.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          $y(OP, n, { originalEvent: i }, { discrete: !1 })
      }
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      )
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  )
}
function um() {
  const e = new CustomEvent(vc)
  document.dispatchEvent(e)
}
function $y(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), r ? Py(o, i) : o.dispatchEvent(i)
}
const jP = $P,
  _P = kP,
  LP = d.forwardRef((e, t) => {
    var n
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e
    return r
      ? v1.createPortal(d.createElement(zt.div, Ne({}, o, { ref: t })), r)
      : null
  }),
  gc = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {}
function AP(e, t) {
  return d.useReducer((n, r) => {
    const o = t[n][r]
    return o ?? n
  }, e)
}
const ky = (e) => {
  const { present: t, children: n } = e,
    r = IP(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : d.Children.only(n),
    i = ir(r.ref, o.ref)
  return typeof n == 'function' || r.isPresent
    ? d.cloneElement(o, { ref: i })
    : null
}
ky.displayName = 'Presence'
function IP(e) {
  const [t, n] = d.useState(),
    r = d.useRef({}),
    o = d.useRef(e),
    i = d.useRef('none'),
    l = e ? 'mounted' : 'unmounted',
    [a, s] = AP(l, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    })
  return (
    d.useEffect(() => {
      const u = Wi(r.current)
      i.current = a === 'mounted' ? u : 'none'
    }, [a]),
    gc(() => {
      const u = r.current,
        c = o.current
      if (c !== e) {
        const p = i.current,
          g = Wi(u)
        e
          ? s('MOUNT')
          : g === 'none' || (u == null ? void 0 : u.display) === 'none'
          ? s('UNMOUNT')
          : s(c && p !== g ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e)
      }
    }, [e, s]),
    gc(() => {
      if (t) {
        const u = (f) => {
            const g = Wi(r.current).includes(f.animationName)
            f.target === t && g && sr.flushSync(() => s('ANIMATION_END'))
          },
          c = (f) => {
            f.target === t && (i.current = Wi(r.current))
          }
        return (
          t.addEventListener('animationstart', c),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', c),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u)
          }
        )
      } else s('ANIMATION_END')
    }, [t, s]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(a),
      ref: d.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u)
      }, []),
    }
  )
}
function Wi(e) {
  return (e == null ? void 0 : e.animationName) || 'none'
}
function DP({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = FP({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    a = nn(n),
    s = d.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == 'function' ? u(e) : u
          f !== e && a(f)
        } else o(u)
      },
      [i, e, o, a]
    )
  return [l, s]
}
function FP({ defaultProp: e, onChange: t }) {
  const n = d.useState(e),
    [r] = n,
    o = d.useRef(r),
    i = nn(t)
  return (
    d.useEffect(() => {
      o.current !== r && (i(r), (o.current = r))
    }, [r, o, i]),
    n
  )
}
const Ny = d.forwardRef((e, t) =>
    d.createElement(
      zt.span,
      Ne({}, e, {
        ref: t,
        style: {
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          ...e.style,
        },
      })
    )
  ),
  Ry = 'ToastProvider',
  [tf, MP, UP] = EP('Toast'),
  [jy, s$] = Ty('Toast', [UP]),
  [zP, Ga] = jy(Ry),
  _y = (e) => {
    const {
        __scopeToast: t,
        label: n = 'Notification',
        duration: r = 5e3,
        swipeDirection: o = 'right',
        swipeThreshold: i = 50,
        children: l,
      } = e,
      [a, s] = d.useState(null),
      [u, c] = d.useState(0),
      f = d.useRef(!1),
      p = d.useRef(!1)
    return d.createElement(
      tf.Provider,
      { scope: t },
      d.createElement(
        zP,
        {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: s,
          onToastAdd: d.useCallback(() => c((g) => g + 1), []),
          onToastRemove: d.useCallback(() => c((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: p,
        },
        l
      )
    )
  }
_y.propTypes = {
  label(e) {
    if (e.label && typeof e.label == 'string' && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${Ry}\`. Expected non-empty \`string\`.`
      return new Error(t)
    }
    return null
  },
}
const BP = 'ToastViewport',
  HP = ['F8'],
  yc = 'toast.viewportPause',
  xc = 'toast.viewportResume',
  VP = d.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = HP,
        label: o = 'Notifications ({hotkey})',
        ...i
      } = e,
      l = Ga(BP, n),
      a = MP(n),
      s = d.useRef(null),
      u = d.useRef(null),
      c = d.useRef(null),
      f = d.useRef(null),
      p = ir(t, f, l.onViewportChange),
      g = r.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      x = l.toastCount > 0
    d.useEffect(() => {
      const b = (v) => {
        var h
        r.every((S) => v[S] || v.code === S) &&
          ((h = f.current) === null || h === void 0 || h.focus())
      }
      return (
        document.addEventListener('keydown', b),
        () => document.removeEventListener('keydown', b)
      )
    }, [r]),
      d.useEffect(() => {
        const b = s.current,
          v = f.current
        if (x && b && v) {
          const h = () => {
              if (!l.isClosePausedRef.current) {
                const C = new CustomEvent(yc)
                v.dispatchEvent(C), (l.isClosePausedRef.current = !0)
              }
            },
            w = () => {
              if (l.isClosePausedRef.current) {
                const C = new CustomEvent(xc)
                v.dispatchEvent(C), (l.isClosePausedRef.current = !1)
              }
            },
            S = (C) => {
              !b.contains(C.relatedTarget) && w()
            },
            E = () => {
              b.contains(document.activeElement) || w()
            }
          return (
            b.addEventListener('focusin', h),
            b.addEventListener('focusout', S),
            b.addEventListener('pointermove', h),
            b.addEventListener('pointerleave', E),
            window.addEventListener('blur', h),
            window.addEventListener('focus', w),
            () => {
              b.removeEventListener('focusin', h),
                b.removeEventListener('focusout', S),
                b.removeEventListener('pointermove', h),
                b.removeEventListener('pointerleave', E),
                window.removeEventListener('blur', h),
                window.removeEventListener('focus', w)
            }
          )
        }
      }, [x, l.isClosePausedRef])
    const y = d.useCallback(
      ({ tabbingDirection: b }) => {
        const h = a().map((w) => {
          const S = w.ref.current,
            E = [S, ...aO(S)]
          return b === 'forwards' ? E : E.reverse()
        })
        return (b === 'forwards' ? h.reverse() : h).flat()
      },
      [a]
    )
    return (
      d.useEffect(() => {
        const b = f.current
        if (b) {
          const v = (h) => {
            const w = h.altKey || h.ctrlKey || h.metaKey
            if (h.key === 'Tab' && !w) {
              const T = document.activeElement,
                k = h.shiftKey
              if (h.target === b && k) {
                var E
                ;(E = u.current) === null || E === void 0 || E.focus()
                return
              }
              const H = y({ tabbingDirection: k ? 'backwards' : 'forwards' }),
                W = H.findIndex((M) => M === T)
              if (Ys(H.slice(W + 1))) h.preventDefault()
              else {
                var C, O
                k
                  ? (C = u.current) === null || C === void 0 || C.focus()
                  : (O = c.current) === null || O === void 0 || O.focus()
              }
            }
          }
          return (
            b.addEventListener('keydown', v),
            () => b.removeEventListener('keydown', v)
          )
        }
      }, [a, y]),
      d.createElement(
        _P,
        {
          ref: s,
          role: 'region',
          'aria-label': o.replace('{hotkey}', g),
          tabIndex: -1,
          style: { pointerEvents: x ? void 0 : 'none' },
        },
        x &&
          d.createElement(cm, {
            ref: u,
            onFocusFromOutsideViewport: () => {
              const b = y({ tabbingDirection: 'forwards' })
              Ys(b)
            },
          }),
        d.createElement(
          tf.Slot,
          { scope: n },
          d.createElement(zt.ol, Ne({ tabIndex: -1 }, i, { ref: p }))
        ),
        x &&
          d.createElement(cm, {
            ref: c,
            onFocusFromOutsideViewport: () => {
              const b = y({ tabbingDirection: 'backwards' })
              Ys(b)
            },
          })
      )
    )
  }),
  WP = 'ToastFocusProxy',
  cm = d.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Ga(WP, n)
    return d.createElement(
      Ny,
      Ne({ 'aria-hidden': !0, tabIndex: 0 }, o, {
        ref: t,
        style: { position: 'fixed' },
        onFocus: (l) => {
          var a
          const s = l.relatedTarget
          !((a = i.viewport) !== null && a !== void 0 && a.contains(s)) && r()
        },
      })
    )
  }),
  Xa = 'Toast',
  KP = 'toast.swipeStart',
  QP = 'toast.swipeMove',
  qP = 'toast.swipeCancel',
  YP = 'toast.swipeEnd',
  JP = d.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...l } = e,
      [a = !0, s] = DP({ prop: r, defaultProp: o, onChange: i })
    return d.createElement(
      ky,
      { present: n || a },
      d.createElement(
        Ly,
        Ne({ open: a }, l, {
          ref: t,
          onClose: () => s(!1),
          onPause: nn(e.onPause),
          onResume: nn(e.onResume),
          onSwipeStart: nt(e.onSwipeStart, (u) => {
            u.currentTarget.setAttribute('data-swipe', 'start')
          }),
          onSwipeMove: nt(e.onSwipeMove, (u) => {
            const { x: c, y: f } = u.detail.delta
            u.currentTarget.setAttribute('data-swipe', 'move'),
              u.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-x',
                `${c}px`
              ),
              u.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-y',
                `${f}px`
              )
          }),
          onSwipeCancel: nt(e.onSwipeCancel, (u) => {
            u.currentTarget.setAttribute('data-swipe', 'cancel'),
              u.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x'
              ),
              u.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y'
              ),
              u.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
              u.currentTarget.style.removeProperty('--radix-toast-swipe-end-y')
          }),
          onSwipeEnd: nt(e.onSwipeEnd, (u) => {
            const { x: c, y: f } = u.detail.delta
            u.currentTarget.setAttribute('data-swipe', 'end'),
              u.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x'
              ),
              u.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y'
              ),
              u.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-x',
                `${c}px`
              ),
              u.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-y',
                `${f}px`
              ),
              s(!1)
          }),
        })
      )
    )
  }),
  [GP, XP] = jy(Xa, { onClose() {} }),
  Ly = d.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = 'foreground',
        duration: o,
        open: i,
        onClose: l,
        onEscapeKeyDown: a,
        onPause: s,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: p,
        onSwipeEnd: g,
        ...x
      } = e,
      y = Ga(Xa, n),
      [b, v] = d.useState(null),
      h = ir(t, (M) => v(M)),
      w = d.useRef(null),
      S = d.useRef(null),
      E = o || y.duration,
      C = d.useRef(0),
      O = d.useRef(E),
      T = d.useRef(0),
      { onToastAdd: k, onToastRemove: $ } = y,
      R = nn(() => {
        var M
        ;(b == null ? void 0 : b.contains(document.activeElement)) &&
          ((M = y.viewport) === null || M === void 0 || M.focus()),
          l()
      }),
      H = d.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(T.current),
            (C.current = new Date().getTime()),
            (T.current = window.setTimeout(R, M)))
        },
        [R]
      )
    d.useEffect(() => {
      const M = y.viewport
      if (M) {
        const q = () => {
            H(O.current), u == null || u()
          },
          ne = () => {
            const ie = new Date().getTime() - C.current
            ;(O.current = O.current - ie),
              window.clearTimeout(T.current),
              s == null || s()
          }
        return (
          M.addEventListener(yc, ne),
          M.addEventListener(xc, q),
          () => {
            M.removeEventListener(yc, ne), M.removeEventListener(xc, q)
          }
        )
      }
    }, [y.viewport, E, s, u, H]),
      d.useEffect(() => {
        i && !y.isClosePausedRef.current && H(E)
      }, [i, E, y.isClosePausedRef, H]),
      d.useEffect(() => (k(), () => $()), [k, $])
    const W = d.useMemo(() => (b ? Dy(b) : null), [b])
    return y.viewport
      ? d.createElement(
          d.Fragment,
          null,
          W &&
            d.createElement(
              ZP,
              {
                __scopeToast: n,
                role: 'status',
                'aria-live': r === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
              },
              W
            ),
          d.createElement(
            GP,
            { scope: n, onClose: R },
            sr.createPortal(
              d.createElement(
                tf.ItemSlot,
                { scope: n },
                d.createElement(
                  jP,
                  {
                    asChild: !0,
                    onEscapeKeyDown: nt(a, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || R(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1)
                    }),
                  },
                  d.createElement(
                    zt.li,
                    Ne(
                      {
                        role: 'status',
                        'aria-live': 'off',
                        'aria-atomic': !0,
                        tabIndex: 0,
                        'data-state': i ? 'open' : 'closed',
                        'data-swipe-direction': y.swipeDirection,
                      },
                      x,
                      {
                        ref: h,
                        style: {
                          userSelect: 'none',
                          touchAction: 'none',
                          ...e.style,
                        },
                        onKeyDown: nt(e.onKeyDown, (M) => {
                          M.key === 'Escape' &&
                            (a == null || a(M.nativeEvent),
                            M.nativeEvent.defaultPrevented ||
                              ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                              R()))
                        }),
                        onPointerDown: nt(e.onPointerDown, (M) => {
                          M.button === 0 &&
                            (w.current = { x: M.clientX, y: M.clientY })
                        }),
                        onPointerMove: nt(e.onPointerMove, (M) => {
                          if (!w.current) return
                          const q = M.clientX - w.current.x,
                            ne = M.clientY - w.current.y,
                            ie = !!S.current,
                            j = ['left', 'right'].includes(y.swipeDirection),
                            F = ['left', 'up'].includes(y.swipeDirection)
                              ? Math.min
                              : Math.max,
                            z = j ? F(0, q) : 0,
                            K = j ? 0 : F(0, ne),
                            Y = M.pointerType === 'touch' ? 10 : 2,
                            He = { x: z, y: K },
                            _ = { originalEvent: M, delta: He }
                          ie
                            ? ((S.current = He), Ki(QP, f, _, { discrete: !1 }))
                            : dm(He, y.swipeDirection, Y)
                            ? ((S.current = He),
                              Ki(KP, c, _, { discrete: !1 }),
                              M.target.setPointerCapture(M.pointerId))
                            : (Math.abs(q) > Y || Math.abs(ne) > Y) &&
                              (w.current = null)
                        }),
                        onPointerUp: nt(e.onPointerUp, (M) => {
                          const q = S.current,
                            ne = M.target
                          if (
                            (ne.hasPointerCapture(M.pointerId) &&
                              ne.releasePointerCapture(M.pointerId),
                            (S.current = null),
                            (w.current = null),
                            q)
                          ) {
                            const ie = M.currentTarget,
                              j = { originalEvent: M, delta: q }
                            dm(q, y.swipeDirection, y.swipeThreshold)
                              ? Ki(YP, g, j, { discrete: !0 })
                              : Ki(qP, p, j, { discrete: !0 }),
                              ie.addEventListener(
                                'click',
                                (F) => F.preventDefault(),
                                { once: !0 }
                              )
                          }
                        }),
                      }
                    )
                  )
                )
              ),
              y.viewport
            )
          )
        )
      : null
  })
Ly.propTypes = {
  type(e) {
    if (e.type && !['foreground', 'background'].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${Xa}\`. Expected \`foreground | background\`.`
      return new Error(t)
    }
    return null
  },
}
const ZP = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ga(Xa, t),
      [i, l] = d.useState(!1),
      [a, s] = d.useState(!1)
    return (
      iO(() => l(!0)),
      d.useEffect(() => {
        const u = window.setTimeout(() => s(!0), 1e3)
        return () => window.clearTimeout(u)
      }, []),
      a
        ? null
        : d.createElement(
            LP,
            { asChild: !0 },
            d.createElement(
              Ny,
              r,
              i && d.createElement(d.Fragment, null, o.label, ' ', n)
            )
          )
    )
  },
  eO = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e
    return d.createElement(zt.div, Ne({}, r, { ref: t }))
  }),
  tO = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e
    return d.createElement(zt.div, Ne({}, r, { ref: t }))
  }),
  nO = 'ToastAction',
  Ay = d.forwardRef((e, t) => {
    const { altText: n, ...r } = e
    return n
      ? d.createElement(
          Iy,
          { altText: n, asChild: !0 },
          d.createElement(oO, Ne({}, r, { ref: t }))
        )
      : null
  })
Ay.propTypes = {
  altText(e) {
    return e.altText
      ? null
      : new Error(`Missing prop \`altText\` expected on \`${nO}\``)
  },
}
const rO = 'ToastClose',
  oO = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = XP(rO, n)
    return d.createElement(
      Iy,
      { asChild: !0 },
      d.createElement(
        zt.button,
        Ne({ type: 'button' }, r, { ref: t, onClick: nt(e.onClick, o.onClose) })
      )
    )
  }),
  Iy = d.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e
    return d.createElement(
      zt.div,
      Ne(
        {
          'data-radix-toast-announce-exclude': '',
          'data-radix-toast-announce-alt': r || void 0,
        },
        o,
        { ref: t }
      )
    )
  })
function Dy(e) {
  const t = []
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        lO(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === 'none',
          i = r.dataset.radixToastAnnounceExclude === ''
        if (!o)
          if (i) {
            const l = r.dataset.radixToastAnnounceAlt
            l && t.push(l)
          } else t.push(...Dy(r))
      }
    }),
    t
  )
}
function Ki(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), r ? Py(o, i) : o.dispatchEvent(i)
}
const dm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o
  return t === 'left' || t === 'right' ? i && r > n : !i && o > n
}
function iO(e = () => {}) {
  const t = nn(e)
  gc(() => {
    let n = 0,
      r = 0
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
      }
    )
  }, [t])
}
function lO(e) {
  return e.nodeType === e.ELEMENT_NODE
}
function aO(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden'
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP
      },
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function Ys(e) {
  const t = document.activeElement
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  )
}
const sO = _y,
  uO = VP,
  cO = JP,
  dO = eO,
  fO = tO,
  pO = Ay,
  Fy = d.createContext({})
function mO({ children: e }) {
  const [t, n] = d.useState(!1),
    r = d.useRef(new Date()),
    o = d.useRef(0),
    l = {
      open: t,
      setOpen: n,
      eventDateRef: r,
      timerRef: o,
      handleNotification: () => {
        n(!1),
          window.clearTimeout(o.current),
          (o.current = window.setTimeout(() => {
            n(!0)
          }, 100))
      },
    }
  return m.jsx(Fy.Provider, { value: l, children: e })
}
const nf = () => d.useContext(Fy),
  rf = ({ message: e, status: t }) => {
    const { open: n, setOpen: r, timerRef: o } = nf()
    return (
      d.useEffect(() => () => clearTimeout(o.current), []),
      m.jsxs(sO, {
        swipeDirection: 'right',
        children: [
          m.jsxs(cO, {
            className:
              "bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut",
            open: n,
            onOpenChange: () => {
              r(!1)
            },
            children: [
              m.jsx(dO, {
                className:
                  '[grid-area:_title] mb-[5px] font-semibold text-yellow-600  ',
                children: t,
              }),
              m.jsx(fO, {
                asChild: !0,
                children: m.jsx('div', {
                  className:
                    '[grid-area:_description] m-0 text-gray-500 text-[13px] leading-[1.3] font-semibold',
                  children: e,
                }),
              }),
              m.jsx(pO, {
                className: '[grid-area:_action]',
                asChild: !0,
                altText: 'Goto schedule to undo',
                children: m.jsx('button', {
                  className:
                    'inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8',
                  children: 'cancel',
                }),
              }),
            ],
          }),
          m.jsx(uO, {
            className:
              '[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none',
          }),
        ],
      })
    )
  }
rf.propTypes = { message: A.string, status: A.string }
const hO = { data: {}, dataFilter: {}, isFirstFetch: !1, isLoading: !1 },
  wc = ro('search/fetchDetailBiblio', async ({ id: e }) => {
    try {
      return (await io.get(`${lo.baseUrl}/v1/biblios/${e}`)).data
    } catch (t) {
      console.error(t)
    }
  }),
  My = Wd({
    name: 'detail',
    initialState: hO,
    reducers: {
      setIsLoading(e, t) {
        e.isLoading = t.payload
      },
    },
    extraReducers(e) {
      e.addCase(wc.pending, (t) => {
        t.isLoading = !0
      }),
        e.addCase(wc.fulfilled, (t, n) => {
          ;(t.data = n.payload),
            (t.dataFilter = sP(n.payload.data)),
            (t.isFirstFetch = !0),
            (t.isLoading = !1)
        })
    },
  }),
  vO = (e) => e.detail.data,
  gO = (e) => e.detail.dataFilter,
  yO = (e) => e.detail.isLoading,
  { setIsLoading: Uy } = My.actions,
  xO = My.reducer
function Za({ isLoading: e }) {
  const t = Rt()
  return m.jsxs('div', {
    className: `${
      e ? 'fixed ' : 'hidden '
    } inset-0 z-50 flex items-center justify-center bg-[#00000041]`,
    children: [
      m.jsx('div', {
        className: 'absolute top-5 right-5 z-50',
        children: m.jsx('img', {
          src: '/opacnew/opac/cross.svg',
          alt: 'cross',
          className:
            'font-white w-10 h-10 cursor-pointer text-[30px] text-white',
          onClick: () => {
            t(Zd(!1)), t(Uy(!1))
          },
        }),
      }),
      m.jsxs('svg', {
        className: 'mr-3 h-10 w-10 animate-spin text-center',
        viewBox: '0 0 24 24',
        children: [
          m.jsx('path', {
            className: 'fill-light-red',
            d: 'M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z',
          }),
          m.jsx('path', {
            className: 'fill-blue-100',
            d: 'M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z',
          }),
        ],
      }),
    ],
  })
}
Za.propTypes = {
  isLoading: A.bool.isRequired,
  setIsLoading: A.object.isRequired,
}
function wO() {
  let [e, t] = d.useState(!1)
  const [n, r] = d.useState(''),
    [o, i] = d.useState(''),
    { handleNotification: l } = nf(),
    a = Rt(),
    s = ce(cy),
    u = ce(vy)
  d.useEffect(() => {
    a(gy('')), a(Yl(''))
  }, [a])
  const c = ln()
  function f() {
    t(!0)
  }
  const p = (g) => {
    if ((g.preventDefault(), s !== '')) {
      a(
        or({
          keyword: s,
          search: '',
          page: 1,
          limit: 10,
          sort: 'bibid',
          type: 'asc',
        })
      ),
        a(by())
      const x = new URLSearchParams({
        keyword: s,
        page: 1,
        limit: 10,
        sort: 'bibid',
        type: 'asc',
      })
      c({ pathname: '/search', search: x.toString() })
    } else r('Kolom pencarian tidak boleh kosong'), i('Peringatan'), l()
  }
  return m.jsxs('div', {
    className:
      'w-full h-[calc(100vh-44px)] flex flex-col items-center pt-16 sm:pt-0 sm:justify-center bg-cover object-center relative z-10',
    children: [
      m.jsx(rf, { message: n, status: o }),
      m.jsx('img', {
        src: '/opacnew/opac/logo1.svg',
        alt: 'logo',
        className: 'w-[300px] sm:w-min mb-10',
      }),
      m.jsx('div', {
        className:
          'mb-10 text-3xl sm:text-5xl text-center font-bold text-white',
        children: 'Online Public Access Catalog',
      }),
      m.jsxs('form', {
        onSubmit: p,
        className:
          'flex sm:flex-row md:max-w-[600px] items-center bg-search-home px-4 gap-2 relative z-10 sm:py-2 py-3 w-[calc(100%-20px)]',
        children: [
          m.jsxs('div', {
            className: 'flex gap-1 w-full pl-2 items-center',
            children: [
              m.jsx('label', {
                htmlFor: 'search-input',
                children: m.jsx('img', {
                  src: '/opacnew/opac/search.svg',
                  alt: 'search',
                  width: 20,
                  className: '',
                }),
              }),
              m.jsx('input', {
                id: 'search-input',
                value: s,
                placeholder: 'Ketik disini',
                className:
                  'w-full text-white bg-transparent text-lg focus:outline-none placeholder-white  py-1',
                onChange: (g) => a(Yl(g.target.value)),
              }),
            ],
          }),
          m.jsx('button', {
            className:
              'bg-white rounded-3xl px-4 text-dark-blue text-sm font-semibold w-fit py-1 flex  items-center text-center',
            type: 'submit',
            children: 'Search',
          }),
        ],
      }),
      m.jsx('div', {
        className: 'relative w-full sm:w-[650px] flex justify-center',
        children: m.jsxs('div', {
          className:
            'flex justify-center items-center absolute bg-white z-0 rounded-b-2xl text-dark-blue w-[calc(100%-60px)] sm:w-[calc(100%-120px)] gap-2 pb-1 pt-2 -top-1',
          children: [
            m.jsx('p', {
              className:
                'font-bold text-dark-blue text-[12px] sm:text-[14px] text-center',
              children: 'Cari berdasarkan judul, subjek, tahun, pengarang, dll',
            }),
            m.jsx('div', {
              className: 'w-[1px] h-[20px] bg-dark-blue opacity-80',
            }),
            m.jsx('button', {
              type: 'button',
              onClick: f,
              className:
                'text-dark-blue w-auto text-[14px] underline font-bold',
              children: 'Advanced Search',
            }),
          ],
        }),
      }),
      m.jsx('div', {
        className: 'px-4 py-2 bg-search-home mt-20',
        children: m.jsx(Ye, {
          target: '_blank',
          to: 'https://perpustakaan.upi.edu/desiderata',
          className: 'text-white text-[14px] underline font-bold',
          children: 'Usulkan Buku Baru',
        }),
      }),
      m.jsx(ef, { isOpen: e, setIsOpen: t }),
      m.jsx(Za, { isLoading: u, setIsLoading: a(Zd) }),
    ],
  })
}
var bO = typeof Element < 'u',
  SO = typeof Map == 'function',
  EO = typeof Set == 'function',
  CO = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function dl(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var n, r, o
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1
      for (r = n; r-- !== 0; ) if (!dl(e[r], t[r])) return !1
      return !0
    }
    var i
    if (SO && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1
      for (i = e.entries(); !(r = i.next()).done; )
        if (!dl(r.value[1], t.get(r.value[0]))) return !1
      return !0
    }
    if (EO && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1
      return !0
    }
    if (CO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1
      return !0
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf()
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString()
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1
    if (bO && e instanceof Element) return !1
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === '_owner' || o[r] === '__v' || o[r] === '__o') &&
          e.$$typeof
        ) &&
        !dl(e[o[r]], t[o[r]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var TO = function (t, n) {
  try {
    return dl(t, n)
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw r
  }
}
const PO = Qr(TO)
var OO = function (e, t, n, r, o, i, l, a) {
    if (!e) {
      var s
      if (t === void 0)
        s = new Error(
          'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
        )
      else {
        var u = [n, r, o, i, l, a],
          c = 0
        ;(s = new Error(
          t.replace(/%s/g, function () {
            return u[c++]
          })
        )),
          (s.name = 'Invariant Violation')
      }
      throw ((s.framesToPop = 1), s)
    }
  },
  $O = OO
const fm = Qr($O)
var kO = function (t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0
  if (i !== void 0) return !!i
  if (t === n) return !0
  if (typeof t != 'object' || !t || typeof n != 'object' || !n) return !1
  var l = Object.keys(t),
    a = Object.keys(n)
  if (l.length !== a.length) return !1
  for (
    var s = Object.prototype.hasOwnProperty.bind(n), u = 0;
    u < l.length;
    u++
  ) {
    var c = l[u]
    if (!s(c)) return !1
    var f = t[c],
      p = n[c]
    if (
      ((i = r ? r.call(o, f, p, c) : void 0),
      i === !1 || (i === void 0 && f !== p))
    )
      return !1
  }
  return !0
}
const NO = Qr(kO)
function xe() {
  return (
    (xe =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }),
    xe.apply(this, arguments)
  )
}
function of(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    bc(e, t)
}
function bc(e, t) {
  return (
    (bc =
      Object.setPrototypeOf ||
      function (n, r) {
        return (n.__proto__ = r), n
      }),
    bc(e, t)
  )
}
function pm(e, t) {
  if (e == null) return {}
  var n,
    r,
    o = {},
    i = Object.keys(e)
  for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n])
  return o
}
var B = {
    BASE: 'base',
    BODY: 'body',
    HEAD: 'head',
    HTML: 'html',
    LINK: 'link',
    META: 'meta',
    NOSCRIPT: 'noscript',
    SCRIPT: 'script',
    STYLE: 'style',
    TITLE: 'title',
    FRAGMENT: 'Symbol(react.fragment)',
  },
  RO = { rel: ['amphtml', 'canonical', 'alternate'] },
  jO = { type: ['application/ld+json'] },
  _O = {
    charset: '',
    name: ['robots', 'description'],
    property: [
      'og:type',
      'og:title',
      'og:url',
      'og:image',
      'og:image:alt',
      'og:description',
      'twitter:url',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:image:alt',
      'twitter:card',
      'twitter:site',
    ],
  },
  mm = Object.keys(B).map(function (e) {
    return B[e]
  }),
  Gl = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  LO = Object.keys(Gl).reduce(function (e, t) {
    return (e[Gl[t]] = t), e
  }, {}),
  Lr = function (e, t) {
    for (var n = e.length - 1; n >= 0; n -= 1) {
      var r = e[n]
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
    }
    return null
  },
  AO = function (e) {
    var t = Lr(e, B.TITLE),
      n = Lr(e, 'titleTemplate')
    if ((Array.isArray(t) && (t = t.join('')), n && t))
      return n.replace(/%s/g, function () {
        return t
      })
    var r = Lr(e, 'defaultTitle')
    return t || r || void 0
  },
  IO = function (e) {
    return Lr(e, 'onChangeClientState') || function () {}
  },
  Js = function (e, t) {
    return t
      .filter(function (n) {
        return n[e] !== void 0
      })
      .map(function (n) {
        return n[e]
      })
      .reduce(function (n, r) {
        return xe({}, n, r)
      }, {})
  },
  DO = function (e, t) {
    return t
      .filter(function (n) {
        return n[B.BASE] !== void 0
      })
      .map(function (n) {
        return n[B.BASE]
      })
      .reverse()
      .reduce(function (n, r) {
        if (!n.length)
          for (var o = Object.keys(r), i = 0; i < o.length; i += 1) {
            var l = o[i].toLowerCase()
            if (e.indexOf(l) !== -1 && r[l]) return n.concat(r)
          }
        return n
      }, [])
  },
  wo = function (e, t, n) {
    var r = {}
    return n
      .filter(function (o) {
        return (
          !!Array.isArray(o[e]) ||
          (o[e] !== void 0 &&
            console &&
            typeof console.warn == 'function' &&
            console.warn(
              'Helmet: ' +
                e +
                ' should be of type "Array". Instead found type "' +
                typeof o[e] +
                '"'
            ),
          !1)
        )
      })
      .map(function (o) {
        return o[e]
      })
      .reverse()
      .reduce(function (o, i) {
        var l = {}
        i.filter(function (f) {
          for (var p, g = Object.keys(f), x = 0; x < g.length; x += 1) {
            var y = g[x],
              b = y.toLowerCase()
            t.indexOf(b) === -1 ||
              (p === 'rel' && f[p].toLowerCase() === 'canonical') ||
              (b === 'rel' && f[b].toLowerCase() === 'stylesheet') ||
              (p = b),
              t.indexOf(y) === -1 ||
                (y !== 'innerHTML' && y !== 'cssText' && y !== 'itemprop') ||
                (p = y)
          }
          if (!p || !f[p]) return !1
          var v = f[p].toLowerCase()
          return (
            r[p] || (r[p] = {}),
            l[p] || (l[p] = {}),
            !r[p][v] && ((l[p][v] = !0), !0)
          )
        })
          .reverse()
          .forEach(function (f) {
            return o.push(f)
          })
        for (var a = Object.keys(l), s = 0; s < a.length; s += 1) {
          var u = a[s],
            c = xe({}, r[u], l[u])
          r[u] = c
        }
        return o
      }, [])
      .reverse()
  },
  FO = function (e, t) {
    if (Array.isArray(e) && e.length) {
      for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0
    }
    return !1
  },
  zy = function (e) {
    return Array.isArray(e) ? e.join('') : e
  },
  Gs = function (e, t) {
    return Array.isArray(e)
      ? e.reduce(
          function (n, r) {
            return (
              (function (o, i) {
                for (var l = Object.keys(o), a = 0; a < l.length; a += 1)
                  if (i[l[a]] && i[l[a]].includes(o[l[a]])) return !0
                return !1
              })(r, t)
                ? n.priority.push(r)
                : n.default.push(r),
              n
            )
          },
          { priority: [], default: [] }
        )
      : { default: e }
  },
  hm = function (e, t) {
    var n
    return xe({}, e, (((n = {})[t] = void 0), n))
  },
  MO = [B.NOSCRIPT, B.SCRIPT, B.STYLE],
  Xs = function (e, t) {
    return (
      t === void 0 && (t = !0),
      t === !1
        ? String(e)
        : String(e)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
    )
  },
  vm = function (e) {
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n] !== void 0 ? n + '="' + e[n] + '"' : '' + n
      return t ? t + ' ' + r : r
    }, '')
  },
  gm = function (e, t) {
    return (
      t === void 0 && (t = {}),
      Object.keys(e).reduce(function (n, r) {
        return (n[Gl[r] || r] = e[r]), n
      }, t)
    )
  },
  fl = function (e, t) {
    return t.map(function (n, r) {
      var o,
        i = (((o = { key: r })['data-rh'] = !0), o)
      return (
        Object.keys(n).forEach(function (l) {
          var a = Gl[l] || l
          a === 'innerHTML' || a === 'cssText'
            ? (i.dangerouslySetInnerHTML = { __html: n.innerHTML || n.cssText })
            : (i[a] = n[l])
        }),
        D.createElement(e, i)
      )
    })
  },
  dt = function (e, t, n) {
    switch (e) {
      case B.TITLE:
        return {
          toComponent: function () {
            return (
              (o = t.titleAttributes),
              ((i = { key: (r = t.title) })['data-rh'] = !0),
              (l = gm(o, i)),
              [D.createElement(B.TITLE, l, r)]
            )
            var r, o, i, l
          },
          toString: function () {
            return (function (r, o, i, l) {
              var a = vm(i),
                s = zy(o)
              return a
                ? '<' +
                    r +
                    ' data-rh="true" ' +
                    a +
                    '>' +
                    Xs(s, l) +
                    '</' +
                    r +
                    '>'
                : '<' + r + ' data-rh="true">' + Xs(s, l) + '</' + r + '>'
            })(e, t.title, t.titleAttributes, n)
          },
        }
      case 'bodyAttributes':
      case 'htmlAttributes':
        return {
          toComponent: function () {
            return gm(t)
          },
          toString: function () {
            return vm(t)
          },
        }
      default:
        return {
          toComponent: function () {
            return fl(e, t)
          },
          toString: function () {
            return (function (r, o, i) {
              return o.reduce(function (l, a) {
                var s = Object.keys(a)
                    .filter(function (f) {
                      return !(f === 'innerHTML' || f === 'cssText')
                    })
                    .reduce(function (f, p) {
                      var g = a[p] === void 0 ? p : p + '="' + Xs(a[p], i) + '"'
                      return f ? f + ' ' + g : g
                    }, ''),
                  u = a.innerHTML || a.cssText || '',
                  c = MO.indexOf(r) === -1
                return (
                  l +
                  '<' +
                  r +
                  ' data-rh="true" ' +
                  s +
                  (c ? '/>' : '>' + u + '</' + r + '>')
                )
              }, '')
            })(e, t, n)
          },
        }
    }
  },
  Sc = function (e) {
    var t = e.baseTag,
      n = e.bodyAttributes,
      r = e.encode,
      o = e.htmlAttributes,
      i = e.noscriptTags,
      l = e.styleTags,
      a = e.title,
      s = a === void 0 ? '' : a,
      u = e.titleAttributes,
      c = e.linkTags,
      f = e.metaTags,
      p = e.scriptTags,
      g = {
        toComponent: function () {},
        toString: function () {
          return ''
        },
      }
    if (e.prioritizeSeoTags) {
      var x = (function (y) {
        var b = y.linkTags,
          v = y.scriptTags,
          h = y.encode,
          w = Gs(y.metaTags, _O),
          S = Gs(b, RO),
          E = Gs(v, jO)
        return {
          priorityMethods: {
            toComponent: function () {
              return [].concat(
                fl(B.META, w.priority),
                fl(B.LINK, S.priority),
                fl(B.SCRIPT, E.priority)
              )
            },
            toString: function () {
              return (
                dt(B.META, w.priority, h) +
                ' ' +
                dt(B.LINK, S.priority, h) +
                ' ' +
                dt(B.SCRIPT, E.priority, h)
              )
            },
          },
          metaTags: w.default,
          linkTags: S.default,
          scriptTags: E.default,
        }
      })(e)
      ;(g = x.priorityMethods),
        (c = x.linkTags),
        (f = x.metaTags),
        (p = x.scriptTags)
    }
    return {
      priority: g,
      base: dt(B.BASE, t, r),
      bodyAttributes: dt('bodyAttributes', n, r),
      htmlAttributes: dt('htmlAttributes', o, r),
      link: dt(B.LINK, c, r),
      meta: dt(B.META, f, r),
      noscript: dt(B.NOSCRIPT, i, r),
      script: dt(B.SCRIPT, p, r),
      style: dt(B.STYLE, l, r),
      title: dt(B.TITLE, { title: s, titleAttributes: u }, r),
    }
  },
  Qi = [],
  Ec = function (e, t) {
    var n = this
    t === void 0 && (t = typeof document < 'u'),
      (this.instances = []),
      (this.value = {
        setHelmet: function (r) {
          n.context.helmet = r
        },
        helmetInstances: {
          get: function () {
            return n.canUseDOM ? Qi : n.instances
          },
          add: function (r) {
            ;(n.canUseDOM ? Qi : n.instances).push(r)
          },
          remove: function (r) {
            var o = (n.canUseDOM ? Qi : n.instances).indexOf(r)
            ;(n.canUseDOM ? Qi : n.instances).splice(o, 1)
          },
        },
      }),
      (this.context = e),
      (this.canUseDOM = t),
      t ||
        (e.helmet = Sc({
          baseTag: [],
          bodyAttributes: {},
          encodeSpecialCharacters: !0,
          htmlAttributes: {},
          linkTags: [],
          metaTags: [],
          noscriptTags: [],
          scriptTags: [],
          styleTags: [],
          title: '',
          titleAttributes: {},
        }))
  },
  By = D.createContext({}),
  UO = A.shape({
    setHelmet: A.func,
    helmetInstances: A.shape({ get: A.func, add: A.func, remove: A.func }),
  }),
  zO = typeof document < 'u',
  Er = (function (e) {
    function t(n) {
      var r
      return (
        ((r = e.call(this, n) || this).helmetData = new Ec(
          r.props.context,
          t.canUseDOM
        )),
        r
      )
    }
    return (
      of(t, e),
      (t.prototype.render = function () {
        return D.createElement(
          By.Provider,
          { value: this.helmetData.value },
          this.props.children
        )
      }),
      t
    )
  })(d.Component)
;(Er.canUseDOM = zO),
  (Er.propTypes = {
    context: A.shape({ helmet: A.shape() }),
    children: A.node.isRequired,
  }),
  (Er.defaultProps = { context: {} }),
  (Er.displayName = 'HelmetProvider')
var cr = function (e, t) {
    var n,
      r = document.head || document.querySelector(B.HEAD),
      o = r.querySelectorAll(e + '[data-rh]'),
      i = [].slice.call(o),
      l = []
    return (
      t &&
        t.length &&
        t.forEach(function (a) {
          var s = document.createElement(e)
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) &&
              (u === 'innerHTML'
                ? (s.innerHTML = a.innerHTML)
                : u === 'cssText'
                ? s.styleSheet
                  ? (s.styleSheet.cssText = a.cssText)
                  : s.appendChild(document.createTextNode(a.cssText))
                : s.setAttribute(u, a[u] === void 0 ? '' : a[u]))
          s.setAttribute('data-rh', 'true'),
            i.some(function (c, f) {
              return (n = f), s.isEqualNode(c)
            })
              ? i.splice(n, 1)
              : l.push(s)
        }),
      i.forEach(function (a) {
        return a.parentNode.removeChild(a)
      }),
      l.forEach(function (a) {
        return r.appendChild(a)
      }),
      { oldTags: i, newTags: l }
    )
  },
  Zs = function (e, t) {
    var n = document.getElementsByTagName(e)[0]
    if (n) {
      for (
        var r = n.getAttribute('data-rh'),
          o = r ? r.split(',') : [],
          i = [].concat(o),
          l = Object.keys(t),
          a = 0;
        a < l.length;
        a += 1
      ) {
        var s = l[a],
          u = t[s] || ''
        n.getAttribute(s) !== u && n.setAttribute(s, u),
          o.indexOf(s) === -1 && o.push(s)
        var c = i.indexOf(s)
        c !== -1 && i.splice(c, 1)
      }
      for (var f = i.length - 1; f >= 0; f -= 1) n.removeAttribute(i[f])
      o.length === i.length
        ? n.removeAttribute('data-rh')
        : n.getAttribute('data-rh') !== l.join(',') &&
          n.setAttribute('data-rh', l.join(','))
    }
  },
  ym = function (e, t) {
    var n = e.baseTag,
      r = e.htmlAttributes,
      o = e.linkTags,
      i = e.metaTags,
      l = e.noscriptTags,
      a = e.onChangeClientState,
      s = e.scriptTags,
      u = e.styleTags,
      c = e.title,
      f = e.titleAttributes
    Zs(B.BODY, e.bodyAttributes),
      Zs(B.HTML, r),
      (function (y, b) {
        y !== void 0 && document.title !== y && (document.title = zy(y)),
          Zs(B.TITLE, b)
      })(c, f)
    var p = {
        baseTag: cr(B.BASE, n),
        linkTags: cr(B.LINK, o),
        metaTags: cr(B.META, i),
        noscriptTags: cr(B.NOSCRIPT, l),
        scriptTags: cr(B.SCRIPT, s),
        styleTags: cr(B.STYLE, u),
      },
      g = {},
      x = {}
    Object.keys(p).forEach(function (y) {
      var b = p[y],
        v = b.newTags,
        h = b.oldTags
      v.length && (g[y] = v), h.length && (x[y] = p[y].oldTags)
    }),
      t && t(),
      a(e, g, x)
  },
  bo = null,
  Xl = (function (e) {
    function t() {
      for (var r, o = arguments.length, i = new Array(o), l = 0; l < o; l++)
        i[l] = arguments[l]
      return ((r = e.call.apply(e, [this].concat(i)) || this).rendered = !1), r
    }
    of(t, e)
    var n = t.prototype
    return (
      (n.shouldComponentUpdate = function (r) {
        return !NO(r, this.props)
      }),
      (n.componentDidUpdate = function () {
        this.emitChange()
      }),
      (n.componentWillUnmount = function () {
        this.props.context.helmetInstances.remove(this), this.emitChange()
      }),
      (n.emitChange = function () {
        var r,
          o,
          i = this.props.context,
          l = i.setHelmet,
          a = null,
          s =
            ((r = i.helmetInstances.get().map(function (u) {
              var c = xe({}, u.props)
              return delete c.context, c
            })),
            {
              baseTag: DO(['href'], r),
              bodyAttributes: Js('bodyAttributes', r),
              defer: Lr(r, 'defer'),
              encode: Lr(r, 'encodeSpecialCharacters'),
              htmlAttributes: Js('htmlAttributes', r),
              linkTags: wo(B.LINK, ['rel', 'href'], r),
              metaTags: wo(
                B.META,
                ['name', 'charset', 'http-equiv', 'property', 'itemprop'],
                r
              ),
              noscriptTags: wo(B.NOSCRIPT, ['innerHTML'], r),
              onChangeClientState: IO(r),
              scriptTags: wo(B.SCRIPT, ['src', 'innerHTML'], r),
              styleTags: wo(B.STYLE, ['cssText'], r),
              title: AO(r),
              titleAttributes: Js('titleAttributes', r),
              prioritizeSeoTags: FO(r, 'prioritizeSeoTags'),
            })
        Er.canUseDOM
          ? ((o = s),
            bo && cancelAnimationFrame(bo),
            o.defer
              ? (bo = requestAnimationFrame(function () {
                  ym(o, function () {
                    bo = null
                  })
                }))
              : (ym(o), (bo = null)))
          : Sc && (a = Sc(s)),
          l(a)
      }),
      (n.init = function () {
        this.rendered ||
          ((this.rendered = !0),
          this.props.context.helmetInstances.add(this),
          this.emitChange())
      }),
      (n.render = function () {
        return this.init(), null
      }),
      t
    )
  })(d.Component)
;(Xl.propTypes = { context: UO.isRequired }),
  (Xl.displayName = 'HelmetDispatcher')
var BO = ['children'],
  HO = ['children'],
  pl = (function (e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    of(t, e)
    var n = t.prototype
    return (
      (n.shouldComponentUpdate = function (r) {
        return !PO(hm(this.props, 'helmetData'), hm(r, 'helmetData'))
      }),
      (n.mapNestedChildrenToProps = function (r, o) {
        if (!o) return null
        switch (r.type) {
          case B.SCRIPT:
          case B.NOSCRIPT:
            return { innerHTML: o }
          case B.STYLE:
            return { cssText: o }
          default:
            throw new Error(
              '<' +
                r.type +
                ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
            )
        }
      }),
      (n.flattenArrayTypeChildren = function (r) {
        var o,
          i = r.child,
          l = r.arrayTypeChildren
        return xe(
          {},
          l,
          (((o = {})[i.type] = [].concat(l[i.type] || [], [
            xe(
              {},
              r.newChildProps,
              this.mapNestedChildrenToProps(i, r.nestedChildren)
            ),
          ])),
          o)
        )
      }),
      (n.mapObjectTypeChildren = function (r) {
        var o,
          i,
          l = r.child,
          a = r.newProps,
          s = r.newChildProps,
          u = r.nestedChildren
        switch (l.type) {
          case B.TITLE:
            return xe(
              {},
              a,
              (((o = {})[l.type] = u), (o.titleAttributes = xe({}, s)), o)
            )
          case B.BODY:
            return xe({}, a, { bodyAttributes: xe({}, s) })
          case B.HTML:
            return xe({}, a, { htmlAttributes: xe({}, s) })
          default:
            return xe({}, a, (((i = {})[l.type] = xe({}, s)), i))
        }
      }),
      (n.mapArrayTypeChildrenToProps = function (r, o) {
        var i = xe({}, o)
        return (
          Object.keys(r).forEach(function (l) {
            var a
            i = xe({}, i, (((a = {})[l] = r[l]), a))
          }),
          i
        )
      }),
      (n.warnOnInvalidChildren = function (r, o) {
        return (
          fm(
            mm.some(function (i) {
              return r.type === i
            }),
            typeof r.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : 'Only elements types ' +
                  mm.join(', ') +
                  ' are allowed. Helmet does not support rendering <' +
                  r.type +
                  '> elements. Refer to our API for more information.'
          ),
          fm(
            !o ||
              typeof o == 'string' ||
              (Array.isArray(o) &&
                !o.some(function (i) {
                  return typeof i != 'string'
                })),
            'Helmet expects a string as a child of <' +
              r.type +
              '>. Did you forget to wrap your children in braces? ( <' +
              r.type +
              '>{``}</' +
              r.type +
              '> ) Refer to our API for more information.'
          ),
          !0
        )
      }),
      (n.mapChildrenToProps = function (r, o) {
        var i = this,
          l = {}
        return (
          D.Children.forEach(r, function (a) {
            if (a && a.props) {
              var s = a.props,
                u = s.children,
                c = pm(s, BO),
                f = Object.keys(c).reduce(function (g, x) {
                  return (g[LO[x] || x] = c[x]), g
                }, {}),
                p = a.type
              switch (
                (typeof p == 'symbol'
                  ? (p = p.toString())
                  : i.warnOnInvalidChildren(a, u),
                p)
              ) {
                case B.FRAGMENT:
                  o = i.mapChildrenToProps(u, o)
                  break
                case B.LINK:
                case B.META:
                case B.NOSCRIPT:
                case B.SCRIPT:
                case B.STYLE:
                  l = i.flattenArrayTypeChildren({
                    child: a,
                    arrayTypeChildren: l,
                    newChildProps: f,
                    nestedChildren: u,
                  })
                  break
                default:
                  o = i.mapObjectTypeChildren({
                    child: a,
                    newProps: o,
                    newChildProps: f,
                    nestedChildren: u,
                  })
              }
            }
          }),
          this.mapArrayTypeChildrenToProps(l, o)
        )
      }),
      (n.render = function () {
        var r = this.props,
          o = r.children,
          i = pm(r, HO),
          l = xe({}, i),
          a = i.helmetData
        return (
          o && (l = this.mapChildrenToProps(o, l)),
          !a || a instanceof Ec || (a = new Ec(a.context, a.instances)),
          a
            ? D.createElement(
                Xl,
                xe({}, l, { context: a.value, helmetData: void 0 })
              )
            : D.createElement(By.Consumer, null, function (s) {
                return D.createElement(Xl, xe({}, l, { context: s }))
              })
        )
      }),
      t
    )
  })(d.Component)
;(pl.propTypes = {
  base: A.object,
  bodyAttributes: A.object,
  children: A.oneOfType([A.arrayOf(A.node), A.node]),
  defaultTitle: A.string,
  defer: A.bool,
  encodeSpecialCharacters: A.bool,
  htmlAttributes: A.object,
  link: A.arrayOf(A.object),
  meta: A.arrayOf(A.object),
  noscript: A.arrayOf(A.object),
  onChangeClientState: A.func,
  script: A.arrayOf(A.object),
  style: A.arrayOf(A.object),
  title: A.string,
  titleAttributes: A.object,
  titleTemplate: A.string,
  prioritizeSeoTags: A.bool,
  helmetData: A.object,
}),
  (pl.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1,
  }),
  (pl.displayName = 'Helmet')
const Ci = ({ title: e, description: t, keywords: n, ogImage: r }) =>
  m.jsxs(pl, {
    children: [
      m.jsx('title', { children: e }),
      m.jsx('meta', { name: 'description', content: t }),
      n && m.jsx('meta', { name: 'keywords', content: n }),
      m.jsx('meta', { property: 'og:title', content: e }),
      m.jsx('meta', { property: 'og:description', content: t }),
      m.jsx('meta', { property: 'og:image', content: r }),
      m.jsx('meta', { property: 'og:type', content: 'website' }),
      m.jsx('meta', { name: 'twitter:card', content: 'summary_large_image' }),
      m.jsx('meta', { name: 'twitter:title', content: e }),
      m.jsx('meta', { name: 'twitter:description', content: t }),
      m.jsx('meta', { name: 'twitter:image', content: r }),
      m.jsx('link', {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon/favicon.ico',
      }),
      m.jsx('link', { rel: 'image_src', href: r }),
    ],
  })
Ci.propTypes = {
  title: A.string,
  description: A.string,
  keywords: A.string,
  ogTitle: A.string,
  ogDescription: A.string,
  ogImage: A.string,
}
function VO() {
  return m.jsxs('div', {
    className: 'h-screen',
    children: [
      m.jsx(Ci, {
        title: 'Online Public Access Catalog UPI',
        description:
          'Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.',
        keywords:
          'online catalog, UPI library, academic resources, searching, availability updates',
        ogImage: '/assets/home.png',
      }),
      m.jsx(ya, {}),
      m.jsx(wO, {}),
      m.jsx(ga, {}),
    ],
  })
}
function lf() {
  let [e, t] = d.useState(!1)
  const [n, r] = d.useState(''),
    [o, i] = d.useState(''),
    { handleNotification: l } = nf(),
    a = ce(cy),
    s = ce(dP),
    u = ce(vy),
    c = ln(),
    f = Rt()
  d.useEffect(() => {
    f(gy('')), f(Yl(''))
  }, [f])
  function p() {
    t(!0)
  }
  const g = (x) => {
    if ((x.preventDefault(), a !== '')) {
      f(
        or({
          keyword: a,
          search: s,
          page: 1,
          limit: 10,
          sort: 'bibid',
          type: 'asc',
        })
      )
      const y = new URLSearchParams({
        keyword: a,
        page: 1,
        limit: 10,
        sort: 'bibid',
        type: 'asc',
      })
      c({ pathname: '/search', search: y.toString() })
    } else r('Kolom pencarian tidak boleh kosong'), i('Peringatan'), l()
  }
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs('div', {
        className:
          'flex flex-col lg:flex-row items-center sm:justify-between w-full mx-auto max-w-7xl lg:px-3 sm:px-5 py-2',
        children: [
          m.jsx(Ye, {
            to: '/',
            children: m.jsx('img', {
              src: '/opacnew/opac/logo2.svg',
              alt: 'logo',
              className: 'w-[200px] sm:w-[300px]',
            }),
          }),
          m.jsxs('form', {
            onSubmit: g,
            className:
              'flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-2 items-center',
            children: [
              m.jsx('input', {
                type: 'text',
                placeholder: 'Ketik disini',
                className:
                  'w-[350px] text-light-gray-3 bg-slate-200  focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg',
                value: a,
                onChange: (x) => f(Yl(x.target.value)),
              }),
              m.jsxs('button', {
                className:
                  'flex items-center pl-2 pr-4 lg:p-0 gap-2 bg-light-gray rounded-full',
                type: 'submit',
                children: [
                  m.jsx('img', {
                    src: '/opacnew/opac/search2.svg',
                    alt: 'search',
                    width: 38,
                    className: 'p-2',
                  }),
                  m.jsx('p', {
                    className: 'lg:hidden text-light-gray-3 font-semibold',
                    children: 'Search',
                  }),
                ],
              }),
              m.jsx('div', {
                className:
                  ' w-[1px] bg-gray-400 h-[40px] sm:flex items-center mx-2',
              }),
              m.jsx('button', {
                type: 'button',
                onClick: p,
                className:
                  ' text-light-gray-3 bg-slate-200 py-2 rounded-lg w-auto text-[14px] px-3 font-bold',
                children: 'Advanced Search',
              }),
            ],
          }),
        ],
      }),
      m.jsx(rf, { message: n, status: o }),
      m.jsx(ef, { isOpen: e, setIsOpen: t }),
      m.jsx(Za, { isLoading: u, setIsLoading: f(Zd) }),
    ],
  })
}
const af = ({ currentPage: e, totalPages: t, onPageChange: n }) => {
  const r = () => {
      e > 1 && n(e - 1)
    },
    o = () => {
      e < t && n(e + 1)
    },
    i = (a) => {
      n(a)
    },
    l = () => {
      const a = []
      if (t <= 4) for (let s = 1; s <= t; s++) a.push(s)
      else
        e <= 2
          ? a.push(1, 2, 3, '...', t)
          : e >= t - 1
          ? a.push(1, '...', t - 2, t - 1, t)
          : a.push(1, '...', e, e + 1, t)
      return a
    }
  return m.jsxs('div', {
    className: 'flex items-center justify-center my-4',
    children: [
      m.jsx('button', {
        className: 'px-4 py-2 mr-2 border rounded-md hover:bg-gray-200 text-sm',
        onClick: r,
        disabled: e === 1,
        children: 'Prev',
      }),
      l().map((a, s) =>
        m.jsx(
          'button',
          {
            className: `px-2 sm:px-4 py-1 sm:py-2 sm:mx-2 mx-1 border rounded-md text-sm ${
              a === e ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`,
            onClick: () => {
              typeof a == 'number' && i(a)
            },
            children: a,
          },
          s
        )
      ),
      m.jsx('button', {
        className:
          ' px-2 sm:px-4  py-1 sm:py-2 ml-2 border text-sm rounded-md hover:bg-gray-200',
        onClick: o,
        disabled: e === t,
        children: 'Next',
      }),
    ],
  })
}
af.propTypes = {
  currentPage: A.number.isRequired,
  totalPages: A.number.isRequired,
  onPageChange: A.func.isRequired,
}
function WO() {
  var g, x, y, b
  const [e] = va(),
    t = e.get('keyword'),
    n = e.get('page'),
    r = e.get('limit'),
    o = e.get('sort'),
    i = e.get('type'),
    l = ce(fy),
    a = ce(dy),
    s = ce(hy),
    u = ln()
  let c = []
  a && (c = (g = a == null ? void 0 : a.data) == null ? void 0 : g.map(iy))
  const f = (v) => {
      window.scrollTo(0, 0), p(yy({ page: v, limit: r, sort: o, type: i }))
      const h = new URLSearchParams({
        keyword: t,
        page: v,
        limit: 10,
        sort: o,
        type: i,
      })
      u({ pathname: '/search', search: h.toString() }),
        p(or({ keyword: t, search: '', page: v, limit: r, sort: o, type: i }))
    },
    p = Rt()
  return (
    d.useEffect(() => {
      window.scrollTo(0, 0),
        l ||
          p(
            or({ keyword: t, search: '', page: n, limit: 10, sort: o, type: i })
          )
    }, [p, l, t, n, o, i]),
    m.jsx('div', {
      className: 'bg-light-gray-2 w-full min-h-[calc(100vh-496px)]',
      children: m.jsxs('div', {
        className: 'lg:max-w-7xl px-3 mx-auto ',
        children: [
          m.jsx('div', {
            className: 'grid grid-cols-1 gap-4 py-5',
            children:
              ((x = a == null ? void 0 : a.data) == null ? void 0 : x.length) >
              0
                ? (y = a == null ? void 0 : a.data) == null
                  ? void 0
                  : y.map((v, h) => {
                      var w
                      return m.jsx(
                        Ye,
                        {
                          to: `/detail/${v.biblio_id}`,
                          className:
                            'bg-white rounded-lg shadow-lg border border-solid border-light-gray',
                          children: m.jsxs('div', {
                            className:
                              'p-3 flex flex-col sm:flex-row items-center gap-5',
                            children: [
                              m.jsx('img', {
                                src: '/opacnew/opac/assets/book.png',
                                alt: 'book-cover',
                                width: 150,
                                height: 200,
                                className: 'rounded-sm shadow-md',
                              }),
                              m.jsxs('div', {
                                className: 'flex flex-col w-full',
                                children: [
                                  m.jsxs('div', {
                                    className: 'flex flex-col mb-3',
                                    children: [
                                      m.jsx('p', {
                                        className:
                                          'text-light-gray-3 text-xl font-bold',
                                        children: v.title,
                                      }),
                                      m.jsx('p', {
                                        className:
                                          'text-light-gray-3 text-lg font-medium',
                                        children: v.author ? v.author : '-',
                                      }),
                                    ],
                                  }),
                                  m.jsx('table', {
                                    className: 'w-full',
                                    children: m.jsx('tbody', {
                                      className:
                                        'grid gap-2 grid-cols-1 md:grid-cols-2',
                                      children:
                                        (w = Object.entries(c[h])) == null
                                          ? void 0
                                          : w.map(([S, E]) =>
                                              m.jsxs(
                                                'tr',
                                                {
                                                  children: [
                                                    m.jsx('td', {
                                                      className:
                                                        ' items-start text-light-gray-3 font-bold grid-cols-2 md:w-[120px] lg:w-36 ',
                                                      children: ry(S),
                                                    }),
                                                    m.jsx('td', {
                                                      className:
                                                        'font-semibold w-4',
                                                      children: ':',
                                                    }),
                                                    m.jsx('td', {
                                                      className:
                                                        'text-light-gray-3 font-mono',
                                                      children: E || '-',
                                                    }),
                                                  ],
                                                },
                                                S
                                              )
                                            ),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        v + h
                      )
                    })
                : m.jsxs('div', {
                    className:
                      'h-full flex flex-col md:py-10 items-center justify-center',
                    children: [
                      m.jsx('img', {
                        src: '/opacnew/opac/noData.svg',
                        alt: 'no-data',
                        width: 300,
                      }),
                      m.jsx('h4', {
                        className: 'font-bold text-light-gray-3 text-xl',
                        children: 'Data Tidak Ditemukan',
                      }),
                    ],
                  }),
          }),
          ((b = a == null ? void 0 : a.data) == null ? void 0 : b.length) > 0 &&
            m.jsx(af, {
              currentPage: Number(n),
              totalPages: Number(s),
              onPageChange: f,
            }),
        ],
      }),
    })
  )
}
function Hy({ filters: e, width: t = 'min-w-[300px]' }) {
  const n = Rt(),
    [r] = va(),
    o = r.get('type'),
    i = r.get('sort'),
    [l, a] = d.useState(oy(o, i)),
    s = r.get('keyword'),
    u = ce(Xd),
    c = ln()
  return m.jsx(ze, {
    value: l,
    onChange: (f) => {
      a(f), n(xy(jr(f.name))), n(wy(_r(f.name)))
      const p = new URLSearchParams({
        keyword: s,
        page: 1,
        limit: u,
        sort: jr(f.name),
        type: _r(f.name),
      })
      n(
        or({
          keyword: s,
          search: '',
          page: 1,
          limit: u,
          sort: jr(f.name),
          type: _r(f.name),
        })
      ),
        c({ pathname: '/search', search: p.toString() })
    },
    children: m.jsxs('div', {
      className: `relative ${t}`,
      children: [
        m.jsxs(ze.Button, {
          className:
            'flex py-1 px-3 bg-light-gray-2 gap-2 rounded-full items-center',
          children: [
            m.jsx('img', {
              src: '/opacnew/opac/filter.svg',
              alt: 'filter',
              width: 27,
            }),
            m.jsx('p', {
              className: 'text-light-gray-3 text-sm font-semibold',
              children: l.name,
            }),
          ],
        }),
        m.jsx(On, {
          as: d.Fragment,
          leave: 'transition ease-in duration-100',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
          children: m.jsx(ze.Options, {
            className:
              'absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30',
            children: e.map((f, p) =>
              m.jsx(
                ze.Option,
                {
                  className: ({ active: g }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      g ? 'bg-soft-yellow text-white' : 'text-dark-gray'
                    }`,
                  value: f,
                  children: ({ selected: g }) =>
                    m.jsx(m.Fragment, {
                      children: m.jsx('span', {
                        className: `block truncate ${
                          g ? 'font-medium' : 'font-normal'
                        }`,
                        children: f.name,
                      }),
                    }),
                },
                p
              )
            ),
          }),
        }),
      ],
    }),
  })
}
Hy.propTypes = { filters: A.array, width: A.string }
const KO = [
  { name: 'Paling Relevan' },
  { name: 'Dari yang Terbaru' },
  { name: 'Dari yang Terlama' },
]
function QO() {
  const e = ce(py),
    t = Number(ce(Xd)),
    n = ce(my)
  return m.jsx('div', {
    className: ' border-t-[1px] border-light-grayw-full',
    children: m.jsxs('div', {
      className:
        'flex flex-col sm:flex-row  justify-center sm:justify-between max-w-7xl lg:px-3 sm:px-5 pt-5 sm:py-2 border-t-[1px] border-light-gray mx-auto w-full flex-wrap gap-y-3 items-center',
      children: [
        m.jsxs('div', {
          className: 'flex gap-2 items-center',
          children: [
            m.jsx(Ye, {
              className: 'text-light-gray font-medium hover:underline',
              to: '/',
              children: 'Pencarian',
            }),
            m.jsx('div', {
              className: 'rotate-[10deg] w-[1px] bg-light-gray h-[20px]',
            }),
            m.jsx('div', {
              className: ' text-light-gray-3 cursor-pointer  hover:underline',
              children: 'Hasil Pencarian',
            }),
          ],
        }),
        m.jsxs('div', {
          className:
            'order-3 lg:order-2 flex flex-col sm:flex-row justify-center w-full sm:w-fit md:w-full md:mx-auto lg:w-fit gap-2 items-center px-4 sm:px-0',
          children: [
            m.jsx('p', {
              className: 'text-light-gray-3 font-semibold',
              children: 'Menampilkan Pencarian',
            }),
            m.jsx('img', {
              src: '/opacnew/opac/arrow.svg',
              alt: 'arrow',
              width: 30,
              className: 'hidden sm:block',
            }),
            m.jsxs('p', {
              className: 'font-semibold text-light-gray-3',
              children: [
                (e - 1) * t + 1,
                ' - ',
                Math.min(e * t, n),
                ' dari',
                ' ',
                n,
                ' data',
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'order-2 lg:order-3',
          children: m.jsx(Hy, { filters: KO, width: 'w-fit' }),
        }),
      ],
    }),
  })
}
function qO() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(Ci, {
        title: 'Online Public Access Catalog UPI',
        description:
          'Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.',
        keywords:
          'online catalog, UPI library, academic resources, searching, availability updates',
        ogImage: '/assets/home.png',
      }),
      m.jsx(ya, {}),
      m.jsx(lf, {}),
      m.jsx(QO, {}),
      m.jsx(WO, {}),
      m.jsx(ga, {}),
    ],
  })
}
function YO() {
  var c, f, p, g, x, y, b, v, h, w, S, E
  const { id: e } = Q1(),
    t = Rt(),
    n = ce(vO)
  let r = ce(gO)
  const o = ce(yO)
  d.useEffect(() => {
    t(wc({ id: e }))
  }, [t, e])
  const i = 5,
    [l, a] = d.useState(i),
    s = () => {
      var C, O
      a(
        (O =
          (C = n == null ? void 0 : n.data) == null
            ? void 0
            : C.recommendation) == null
          ? void 0
          : O.length
      )
    },
    u = () => {
      a(i)
    }
  return m.jsxs('div', {
    className:
      'border-t-[1px] pt-5 border-light-gray w-full bg-light-gray-2 min-h-[calc(100vh-539px)] lg:min-h-[calc(100vh-455px)] my-3',
    children: [
      m.jsxs('div', {
        className:
          'flex gap-3 flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-end lg:justify-normal max-w-7xl mx-auto px-4',
        children: [
          m.jsx('div', {
            className:
              'w-full md:w-fit flex flex-col justify-center items-center md:justify-normal',
            children: m.jsx('img', {
              src: '/opacnew/opac/assets/book.png',
              alt: 'book',
              width: 250,
              className: 'w-[250px] h-[330px]  rounded-md shadow-md',
            }),
          }),
          m.jsxs('div', {
            className:
              'flex w-full h-fit bg-white shadow-md border border-slate-200 rounded-lg p-3 flex-col gap-1 items-start md:w-[calc(100%-265px)] lg:w-[calc(100%-500px)]',
            children: [
              m.jsxs('div', {
                className: 'flex gap-2',
                children: [
                  m.jsx('img', {
                    src: '/opacnew/opac/bookmark.svg',
                    alt: 'bookmark',
                    width: 20,
                  }),
                  m.jsx('p', {
                    className: 'text-light-gray-3 font-semibold',
                    children:
                      (c = n == null ? void 0 : n.data) == null
                        ? void 0
                        : c.material,
                  }),
                ],
              }),
              m.jsx('p', {
                className: 'text-light-gray-3 text-xl font-bold',
                children:
                  (f = n == null ? void 0 : n.data) == null ? void 0 : f.title,
              }),
              m.jsx('p', {
                className: 'text-light-gray-3 font-semibold',
                children:
                  (p = n == null ? void 0 : n.data) == null ? void 0 : p.author,
              }),
              m.jsx('div', { className: 'w-full h-[1px] bg-slate-300 mb-3' }),
              m.jsx('h4', {
                className: 'text-lg text-light-gray-3 font-bold mb-3',
                children: 'Anotasi/Abstrak',
              }),
              m.jsx('p', {
                className: 'text-light-gray-3',
                children:
                  (g = n == null ? void 0 : n.data) == null
                    ? void 0
                    : g.abstract,
              }),
              m.jsx('div', { className: 'w-full h-[1px] bg-slate-300 mb-3' }),
              m.jsx('h4', {
                className: 'text-lg text-light-gray-3 font-bold mb-3',
                children: 'Informasi Bibliografi',
              }),
              m.jsx('table', {
                className: 'w-full',
                children: m.jsx('tbody', {
                  className: 'grid gap-2 grid-cols-1 ',
                  children:
                    (x = Object.entries(r)) == null
                      ? void 0
                      : x.map(([C, O]) =>
                          m.jsxs(
                            'tr',
                            {
                              className: 'flex items-start',
                              children: [
                                m.jsx('td', {
                                  className:
                                    'pr-4 items-start text-light-gray-3 font-bold grid-cols-2 md:w-52 ',
                                  children: lP(C),
                                }),
                                m.jsx('td', {
                                  className: 'font-semibold w-4',
                                  children: ':',
                                }),
                                m.jsx('td', {
                                  className: 'text-light-gray-3  font-mono',
                                  children: O || '-',
                                }),
                              ],
                            },
                            C
                          )
                        ),
                }),
              }),
              m.jsx('div', { className: 'w-full h-[1px] bg-slate-300 mb-3' }),
              m.jsx('h4', {
                className: 'text-lg text-light-gray-3 font-bold mb-3',
                children: 'Informasi Salinan Bibliografi',
              }),
              m.jsx('div', {
                className: 'w-full overflow-auto',
                children: m.jsxs('table', {
                  className: 'table-auto w-full border',
                  children: [
                    m.jsx('thead', {
                      children: m.jsxs('tr', {
                        className: 'bg-gray-800 text-white',
                        children: [
                          m.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'No',
                          }),
                          m.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'Barcode',
                          }),
                          m.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'Status',
                          }),
                          m.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'Mulai Status',
                          }),
                          m.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'Pengembalian',
                          }),
                        ],
                      }),
                    }),
                    m.jsx('tbody', {
                      children:
                        (v =
                          (b =
                            (y = n == null ? void 0 : n.data) == null
                              ? void 0
                              : y.copies) == null
                            ? void 0
                            : b.copiesData) == null
                          ? void 0
                          : v.map((C) =>
                              m.jsxs(
                                'tr',
                                {
                                  className: 'bg-gray-200 text-gray-800',
                                  children: [
                                    m.jsx('td', {
                                      className: 'border px-4 py-2',
                                      children: C.copy_id,
                                    }),
                                    m.jsx('td', {
                                      className: 'border px-4 py-2',
                                      children: C.barcode,
                                    }),
                                    m.jsx('td', {
                                      className: 'border px-4 py-2',
                                      children: C.status,
                                    }),
                                    m.jsx('td', {
                                      className: 'border px-4 py-2',
                                      children: lm(C.begin_date),
                                    }),
                                    m.jsx('td', {
                                      className: 'border px-4 py-2',
                                      children: lm(C.back_date),
                                    }),
                                  ],
                                },
                                C.id
                              )
                            ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          m.jsxs('div', {
            className:
              'lg:w-[250px] md:w-[calc(100%-265px)] w-full h-fit bg-white shadow-md border border-slate-200 rounded-lg p-3',
            children: [
              m.jsx('h2', {
                className: 'text-lg font-semibold text-dark-gray mb-4',
                children: 'Rekomendasi',
              }),
              m.jsx('ul', {
                className: 'space-y-2',
                children:
                  (w =
                    (h = n == null ? void 0 : n.data) == null
                      ? void 0
                      : h.recommendation) == null
                    ? void 0
                    : w
                        .slice(1, l)
                        .map((C) =>
                          m.jsx(
                            'li',
                            {
                              children: m.jsxs(Ye, {
                                to: `/detail/${C.bibid}`,
                                className:
                                  'block text-blue-600 hover:underline',
                                children: [
                                  m.jsx('div', {
                                    className: 'font-semibold',
                                    children: C.title,
                                  }),
                                  m.jsxs('div', {
                                    className: 'text-gray-600',
                                    children: [
                                      'by ',
                                      C.author.length > 0 ? C.author : '-',
                                    ],
                                  }),
                                  m.jsxs('div', {
                                    className: 'text-gray-600',
                                    children: [C.publisher, ', ', C.year],
                                  }),
                                ],
                              }),
                            },
                            C.bibid
                          )
                        ),
              }),
              l <
                ((E =
                  (S = n == null ? void 0 : n.data) == null
                    ? void 0
                    : S.recommendation) == null
                  ? void 0
                  : E.length) &&
                m.jsx('div', {
                  className: 'mt-2',
                  children: m.jsx('button', {
                    className: 'text-blue-600 hover:underline mr-2',
                    onClick: s,
                    children: 'Show More',
                  }),
                }),
              l > i &&
                m.jsx('div', {
                  className: 'mt-2',
                  children: m.jsx('button', {
                    className: 'text-blue-600 hover:underline',
                    onClick: u,
                    children: 'Show Less',
                  }),
                }),
            ],
          }),
        ],
      }),
      m.jsx(Za, { isLoading: o, setIsLoading: t(Uy) }),
    ],
  })
}
function JO() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(Ci, {
        title: 'Online Public Access Catalog UPI',
        description:
          'Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.',
        keywords:
          'online catalog, UPI library, academic resources, searching, availability updates',
        ogImage: '/assets/home.png',
      }),
      m.jsx(ya, {}),
      m.jsx(lf, {}),
      m.jsx(YO, {}),
      m.jsx(ga, {}),
    ],
  })
}
function GO() {
  var S, E, C, O
  const [e] = va(),
    t = e.get('material'),
    n = e.get('collection'),
    r = e.get('title'),
    o = e.get('author'),
    i = e.get('subject'),
    l = e.get('publisher'),
    a = e.get('year'),
    s = e.get('page'),
    u = e.get('limit'),
    c = e.get('sort'),
    f = e.get('type'),
    p = ln(),
    g = d.useMemo(
      () => ({
        material: t,
        collection: n,
        title: r,
        author: o,
        subject: i,
        publisher: l,
        year: a,
      }),
      [o, n, t, l, i, r, a]
    ),
    x = ce(fy),
    y = ce(dy),
    b = ce(hy)
  let v = []
  y && (v = (S = y == null ? void 0 : y.data) == null ? void 0 : S.map(iy))
  const h = (T) => {
      window.scrollTo(0, 0), w(yy({ page: T, limit: u, sort: c, type: f }))
      const k = new URLSearchParams({
        ...g,
        page: T,
        limit: 10,
        sort: c,
        type: f,
      })
      p({ pathname: '/advanced-search', search: k.toString() }),
        w(Kr({ formAdvanced: { ...g, page: T, sort: c, type: f } }))
    },
    w = Rt()
  return (
    d.useEffect(() => {
      x || w(Kr({ formAdvanced: { ...g, page: s, sort: c, type: f } }))
    }, [w, g, x, c, f, s]),
    m.jsx('div', {
      className: 'bg-light-gray-2 w-full min-h-[calc(100vh-496px)]',
      children: m.jsxs('div', {
        className: 'lg:max-w-7xl px-3 mx-auto ',
        children: [
          m.jsx('div', {
            className: 'grid grid-cols-1 gap-4 py-5',
            children:
              ((E = y == null ? void 0 : y.data) == null ? void 0 : E.length) >
              0
                ? (C = y == null ? void 0 : y.data) == null
                  ? void 0
                  : C.map((T, k) => {
                      var $
                      return m.jsx(
                        Ye,
                        {
                          to: `/detail/${T.biblio_id}`,
                          className:
                            'bg-white rounded-lg shadow-lg border border-solid border-light-gray',
                          children: m.jsxs('div', {
                            className:
                              'p-3 flex flex-col sm:flex-row items-center gap-5',
                            children: [
                              m.jsx('img', {
                                src: '/opacnew/opac/assets/book.png',
                                alt: 'book-cover',
                                width: 150,
                                height: 200,
                                className: 'rounded-sm shadow-md',
                              }),
                              m.jsxs('div', {
                                className: 'flex flex-col w-full',
                                children: [
                                  m.jsxs('div', {
                                    className: 'flex flex-col mb-3',
                                    children: [
                                      m.jsx('p', {
                                        className:
                                          'text-light-gray-3 text-xl font-bold',
                                        children: T.title,
                                      }),
                                      m.jsx('p', {
                                        className:
                                          'text-light-gray-3 text-lg font-medium',
                                        children: T.author ? T.author : '-',
                                      }),
                                    ],
                                  }),
                                  m.jsx('div', {
                                    className:
                                      'grid gap-2 grid-cols-1 md:grid-cols-2',
                                    children:
                                      ($ = Object.entries(v[k])) == null
                                        ? void 0
                                        : $.map(([R, H]) => {
                                            const W = H
                                              ? H.toString().length
                                              : 0
                                            return m.jsxs(
                                              'div',
                                              {
                                                className: `flex gap-2 items-center ${
                                                  W > 30 ? 'md:col-span-2' : ''
                                                }`,
                                                children: [
                                                  m.jsx('p', {
                                                    className:
                                                      'text-light-gray-3 font-semibold',
                                                    children: ry(R),
                                                  }),
                                                  m.jsx('p', {
                                                    className:
                                                      'text-light-gray-3',
                                                    children: H || '-',
                                                  }),
                                                ],
                                              },
                                              R
                                            )
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        T + k
                      )
                    })
                : m.jsxs('div', {
                    className:
                      'h-full flex flex-col md:py-10 items-center justify-center',
                    children: [
                      m.jsx('img', {
                        src: '/opacnew/opac/noData.svg',
                        alt: 'no-data',
                        width: 300,
                      }),
                      m.jsx('h4', {
                        className: 'font-bold text-light-gray-3 text-xl',
                        children: 'Data Tidak Ditemukan',
                      }),
                    ],
                  }),
          }),
          ((O = y == null ? void 0 : y.data) == null ? void 0 : O.length) > 0 &&
            m.jsx(af, {
              currentPage: Number(s),
              totalPages: Number(b),
              onPageChange: h,
            }),
        ],
      }),
    })
  )
}
function Vy({ filters: e, width: t = 'min-w-[300px]' }) {
  const n = Rt(),
    [r] = va(),
    o = r.get('material'),
    i = r.get('collection'),
    l = r.get('title'),
    a = r.get('author'),
    s = r.get('subject'),
    u = r.get('publisher'),
    c = r.get('year'),
    f = r.get('type'),
    p = r.get('sort'),
    g = r.get('limit'),
    x = ln(),
    [y, b] = d.useState(oy(f, p)),
    v = d.useMemo(
      () => ({
        material: o,
        collection: i,
        title: l,
        author: a,
        subject: s,
        publisher: u,
        year: c,
      }),
      [a, i, o, u, s, l, c]
    )
  return m.jsx(ze, {
    value: y,
    onChange: (h) => {
      b(h), n(xy(jr(h.name))), n(wy(_r(h.name)))
      const w = new URLSearchParams({
        ...v,
        sort: jr(h.name),
        type: _r(h.name),
        page: 1,
        limit: g,
      })
      n(Kr({ formAdvanced: { ...v, sort: jr(h.name), type: _r(h.name) } })),
        x({ pathname: '/advanced-search', search: w.toString() })
    },
    children: m.jsxs('div', {
      className: `relative ${t}`,
      children: [
        m.jsxs(ze.Button, {
          className:
            'flex py-1 px-3 bg-light-gray-2 gap-2 rounded-full items-center',
          children: [
            m.jsx('img', {
              src: '/opacnew/opac/filter.svg',
              alt: 'filter',
              width: 27,
            }),
            m.jsx('p', {
              className: 'text-light-gray-3 text-sm font-semibold',
              children: y.name,
            }),
          ],
        }),
        m.jsx(On, {
          as: d.Fragment,
          leave: 'transition ease-in duration-100',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
          children: m.jsx(ze.Options, {
            className:
              'absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30',
            children: e.map((h, w) =>
              m.jsx(
                ze.Option,
                {
                  className: ({ active: S }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      S ? 'bg-soft-yellow text-white' : 'text-dark-gray'
                    }`,
                  value: h,
                  children: ({ selected: S }) =>
                    m.jsx(m.Fragment, {
                      children: m.jsx('span', {
                        className: `block truncate ${
                          S ? 'font-medium' : 'font-normal'
                        }`,
                        children: h.name,
                      }),
                    }),
                },
                w
              )
            ),
          }),
        }),
      ],
    }),
  })
}
Vy.propTypes = { filters: A.array, width: A.string }
const XO = [
  { name: 'Paling Relevan' },
  { name: 'Dari yang Terbaru' },
  { name: 'Dari yang Terlama' },
]
function ZO() {
  const e = ce(py),
    t = Number(ce(Xd)),
    n = ce(my)
  return m.jsx('div', {
    className: ' border-t-[1px] border-light-grayw-full',
    children: m.jsxs('div', {
      className:
        'flex flex-col sm:flex-row  justify-center sm:justify-between max-w-7xl lg:px-3 sm:px-5 pt-5 sm:py-2 border-t-[1px] border-light-gray mx-auto w-full flex-wrap gap-y-3 items-center',
      children: [
        m.jsxs('div', {
          className: 'flex gap-2 items-center',
          children: [
            m.jsx(Ye, {
              className: 'text-light-gray font-medium hover:underline',
              to: '/',
              children: 'Pencarian',
            }),
            m.jsx('div', {
              className: 'rotate-[10deg] w-[1px] bg-light-gray h-[20px]',
            }),
            m.jsx('div', {
              className: ' text-light-gray-3 cursor-pointer  hover:underline',
              children: 'Hasil Pencarian',
            }),
          ],
        }),
        m.jsxs('div', {
          className:
            'order-3 lg:order-2 flex flex-col sm:flex-row justify-center w-full sm:w-fit md:w-full md:mx-auto lg:w-fit gap-2 items-center px-4 sm:px-0',
          children: [
            m.jsx('p', {
              className: 'text-light-gray-3 font-semibold',
              children: 'Menampilkan Pencarian',
            }),
            m.jsx('img', {
              src: '/opacnew/opac/arrow.svg',
              alt: 'arrow',
              width: 30,
              className: 'hidden sm:block',
            }),
            m.jsxs('p', {
              className: 'font-semibold text-light-gray-3',
              children: [
                (e - 1) * t + 1,
                ' - ',
                Math.min(e * t, n),
                ' dari',
                ' ',
                n,
                ' data',
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'order-2 lg:order-3',
          children: m.jsx(Vy, { filters: XO, width: 'w-fit' }),
        }),
      ],
    }),
  })
}
function e$() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(Ci, {
        title: 'Online Public Access Catalog UPI',
        description:
          'Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.',
        keywords:
          'online catalog, UPI library, academic resources, searching, availability updates',
        ogImage: '/assets/home.png',
      }),
      m.jsx(ya, {}),
      m.jsx(lf, {}),
      m.jsx(ZO, {}),
      m.jsx(GO, {}),
      m.jsx(ga, {}),
    ],
  })
}
function t$() {
  return m.jsx(zv, {
    children: m.jsxs(Hn, {
      path: '/',
      element: m.jsx(xw, {}),
      children: [
        m.jsx(Hn, { path: '/', element: m.jsx(VO, {}) }),
        m.jsx(Hn, { path: '/search', element: m.jsx(qO, {}) }),
        m.jsx(Hn, { path: '/advanced-search', element: m.jsx(e$, {}) }),
        m.jsx(Hn, { path: '/detail/:id', element: m.jsx(JO, {}) }),
      ],
    }),
  })
}
function n$() {
  return m.jsx(zv, {
    children: m.jsx(Hn, { path: '/*', element: m.jsx(t$, {}) }),
  })
}
const r$ = { open: !1, timeRef: null },
  o$ = Wd({
    name: 'alert',
    initialState: r$,
    reducers: {
      setOpen: (e, t) => {
        e.open = t.payload
      },
      handleNotification: (e) => {
        ;(e.open = !1),
          window.setTimeout(() => {
            e.open = !0
          }, 100)
      },
    },
  }),
  i$ = o$.reducer,
  l$ = _C({ reducer: { search: vP, alert: i$, detail: xO } })
eu.createRoot(document.getElementById('root')).render(
  m.jsx(D.StrictMode, {
    children: m.jsx(XE, {
      store: l$,
      children: m.jsx(mO, {
        children: m.jsx(Er, {
          children: m.jsx(mw, {
            basename: '/opacnew/opac',
            children: m.jsx(n$, {}),
          }),
        }),
      }),
    }),
  })
)
