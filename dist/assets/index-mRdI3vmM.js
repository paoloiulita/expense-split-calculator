var ev = Object.defineProperty
var tv = (e, t, n) =>
  t in e
    ? ev(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var No = (e, t, n) => tv(e, typeof t != 'symbol' ? t + '' : t, n)
function nv(e, t) {
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
              i.get ? i : { enumerable: !0, get: () => r[o] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
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
function Em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Pm = { exports: {} },
  Cl = {},
  $m = { exports: {} },
  le = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fi = Symbol.for('react.element'),
  rv = Symbol.for('react.portal'),
  ov = Symbol.for('react.fragment'),
  iv = Symbol.for('react.strict_mode'),
  sv = Symbol.for('react.profiler'),
  lv = Symbol.for('react.provider'),
  av = Symbol.for('react.context'),
  uv = Symbol.for('react.forward_ref'),
  cv = Symbol.for('react.suspense'),
  dv = Symbol.for('react.memo'),
  fv = Symbol.for('react.lazy'),
  Jd = Symbol.iterator
function pv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Jd && e[Jd]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Rm = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tm = Object.assign,
  Im = {}
function Ro(e, t, n) {
  ;((this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || Rm))
}
Ro.prototype.isReactComponent = {}
Ro.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Mm() {}
Mm.prototype = Ro.prototype
function Cc(e, t, n) {
  ;((this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || Rm))
}
var wc = (Cc.prototype = new Mm())
wc.constructor = Cc
Tm(wc, Ro.prototype)
wc.isPureReactComponent = !0
var ef = Array.isArray,
  Nm = Object.prototype.hasOwnProperty,
  bc = { current: null },
  Om = { key: !0, ref: !0, __self: !0, __source: !0 }
function Lm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Nm.call(t, r) && !Om.hasOwnProperty(r) && (o[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) o.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r])
  return { $$typeof: Fi, type: e, key: i, ref: s, props: o, _owner: bc.current }
}
function mv(e, t) {
  return {
    $$typeof: Fi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function kc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Fi
}
function hv(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var tf = /\/+/g
function ka(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? hv('' + e.key)
    : t.toString(36)
}
function Es(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Fi:
          case rv:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + ka(s, 0) : r),
      ef(o)
        ? ((n = ''),
          e != null && (n = e.replace(tf, '$&/') + '/'),
          Es(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (kc(o) &&
            (o = mv(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(tf, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), ef(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l]
      var a = r + ka(i, l)
      s += Es(i, t, n, a, o)
    }
  else if (((a = pv(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done;)
      ((i = i.value), (a = r + ka(i, l++)), (s += Es(i, t, n, a, o)))
  else if (i === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      )
    )
  return s
}
function Zi(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Es(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function gv(e) {
  if (e._status === -1) {
    var t = e._result
    ;((t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var wt = { current: null },
  Ps = { transition: null },
  yv = {
    ReactCurrentDispatcher: wt,
    ReactCurrentBatchConfig: Ps,
    ReactCurrentOwner: bc,
  }
function zm() {
  throw Error('act(...) is not supported in production builds of React.')
}
le.Children = {
  map: Zi,
  forEach: function (e, t, n) {
    Zi(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      Zi(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Zi(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!kc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
le.Component = Ro
le.Fragment = ov
le.Profiler = sv
le.PureComponent = Cc
le.StrictMode = iv
le.Suspense = cv
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv
le.act = zm
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = Tm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = bc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t)
      Nm.call(t, a) &&
        !Om.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Fi, type: e.type, key: o, ref: i, props: r, _owner: s }
}
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: av,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lv, _context: e }),
    (e.Consumer = e)
  )
}
le.createElement = Lm
le.createFactory = function (e) {
  var t = Lm.bind(null, e)
  return ((t.type = e), t)
}
le.createRef = function () {
  return { current: null }
}
le.forwardRef = function (e) {
  return { $$typeof: uv, render: e }
}
le.isValidElement = kc
le.lazy = function (e) {
  return { $$typeof: fv, _payload: { _status: -1, _result: e }, _init: gv }
}
le.memo = function (e, t) {
  return { $$typeof: dv, type: e, compare: t === void 0 ? null : t }
}
le.startTransition = function (e) {
  var t = Ps.transition
  Ps.transition = {}
  try {
    e()
  } finally {
    Ps.transition = t
  }
}
le.unstable_act = zm
le.useCallback = function (e, t) {
  return wt.current.useCallback(e, t)
}
le.useContext = function (e) {
  return wt.current.useContext(e)
}
le.useDebugValue = function () {}
le.useDeferredValue = function (e) {
  return wt.current.useDeferredValue(e)
}
le.useEffect = function (e, t) {
  return wt.current.useEffect(e, t)
}
le.useId = function () {
  return wt.current.useId()
}
le.useImperativeHandle = function (e, t, n) {
  return wt.current.useImperativeHandle(e, t, n)
}
le.useInsertionEffect = function (e, t) {
  return wt.current.useInsertionEffect(e, t)
}
le.useLayoutEffect = function (e, t) {
  return wt.current.useLayoutEffect(e, t)
}
le.useMemo = function (e, t) {
  return wt.current.useMemo(e, t)
}
le.useReducer = function (e, t, n) {
  return wt.current.useReducer(e, t, n)
}
le.useRef = function (e) {
  return wt.current.useRef(e)
}
le.useState = function (e) {
  return wt.current.useState(e)
}
le.useSyncExternalStore = function (e, t, n) {
  return wt.current.useSyncExternalStore(e, t, n)
}
le.useTransition = function () {
  return wt.current.useTransition()
}
le.version = '18.3.1'
$m.exports = le
var x = $m.exports
const nn = Em(x),
  au = nv({ __proto__: null, default: nn }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vv = x,
  Sv = Symbol.for('react.element'),
  xv = Symbol.for('react.fragment'),
  Cv = Object.prototype.hasOwnProperty,
  wv = vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Am(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  ;(n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref))
  for (r in t) Cv.call(t, r) && !bv.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Sv, type: e, key: i, ref: s, props: o, _owner: wv.current }
}
Cl.Fragment = xv
Cl.jsx = Am
Cl.jsxs = Am
Pm.exports = Cl
var b = Pm.exports,
  uu = {},
  jm = { exports: {} },
  jt = {},
  Fm = { exports: {} },
  _m = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(z, I) {
    var D = z.length
    z.push(I)
    e: for (; 0 < D;) {
      var H = (D - 1) >>> 1,
        Y = z[H]
      if (0 < o(Y, I)) ((z[H] = I), (z[D] = Y), (D = H))
      else break e
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0]
  }
  function r(z) {
    if (z.length === 0) return null
    var I = z[0],
      D = z.pop()
    if (D !== I) {
      z[0] = D
      e: for (var H = 0, Y = z.length, ae = Y >>> 1; H < ae;) {
        var Z = 2 * (H + 1) - 1,
          K = z[Z],
          J = Z + 1,
          ce = z[J]
        if (0 > o(K, D))
          J < Y && 0 > o(ce, K)
            ? ((z[H] = ce), (z[J] = D), (H = J))
            : ((z[H] = K), (z[Z] = D), (H = Z))
        else if (J < Y && 0 > o(ce, D)) ((z[H] = ce), (z[J] = D), (H = J))
        else break e
      }
    }
    return I
  }
  function o(z, I) {
    var D = z.sortIndex - I.sortIndex
    return D !== 0 ? D : z.id - I.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    y = !1,
    v = !1,
    C = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(z) {
    for (var I = n(u); I !== null;) {
      if (I.callback === null) r(u)
      else if (I.startTime <= z)
        (r(u), (I.sortIndex = I.expirationTime), t(a, I))
      else break
      I = n(u)
    }
  }
  function S(z) {
    if (((C = !1), m(z), !v))
      if (n(a) !== null) ((v = !0), A(P))
      else {
        var I = n(u)
        I !== null && W(S, I.startTime - z)
      }
  }
  function P(z, I) {
    ;((v = !1), C && ((C = !1), h(E), (E = -1)), (y = !0))
    var D = p
    try {
      for (
        m(I), f = n(a);
        f !== null && (!(f.expirationTime > I) || (z && !R()));
      ) {
        var H = f.callback
        if (typeof H == 'function') {
          ;((f.callback = null), (p = f.priorityLevel))
          var Y = H(f.expirationTime <= I)
          ;((I = e.unstable_now()),
            typeof Y == 'function' ? (f.callback = Y) : f === n(a) && r(a),
            m(I))
        } else r(a)
        f = n(a)
      }
      if (f !== null) var ae = !0
      else {
        var Z = n(u)
        ;(Z !== null && W(S, Z.startTime - I), (ae = !1))
      }
      return ae
    } finally {
      ;((f = null), (p = D), (y = !1))
    }
  }
  var $ = !1,
    w = null,
    E = -1,
    T = 5,
    c = -1
  function R() {
    return !(e.unstable_now() - c < T)
  }
  function M() {
    if (w !== null) {
      var z = e.unstable_now()
      c = z
      var I = !0
      try {
        I = w(!0, z)
      } finally {
        I ? O() : (($ = !1), (w = null))
      }
    } else $ = !1
  }
  var O
  if (typeof g == 'function')
    O = function () {
      g(M)
    }
  else if (typeof MessageChannel < 'u') {
    var j = new MessageChannel(),
      L = j.port2
    ;((j.port1.onmessage = M),
      (O = function () {
        L.postMessage(null)
      }))
  } else
    O = function () {
      k(M, 0)
    }
  function A(z) {
    ;((w = z), $ || (($ = !0), O()))
  }
  function W(z, I) {
    E = k(function () {
      z(e.unstable_now())
    }, I)
  }
  ;((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), A(P))
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (T = 0 < z ? Math.floor(1e3 / z) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (z) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3
          break
        default:
          I = p
      }
      var D = p
      p = I
      try {
        return z()
      } finally {
        p = D
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, I) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          z = 3
      }
      var D = p
      p = z
      try {
        return I()
      } finally {
        p = D
      }
    }),
    (e.unstable_scheduleCallback = function (z, I, D) {
      var H = e.unstable_now()
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? H + D : H))
          : (D = H),
        z)
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
        (Y = D + Y),
        (z = {
          id: d++,
          callback: I,
          priorityLevel: z,
          startTime: D,
          expirationTime: Y,
          sortIndex: -1,
        }),
        D > H
          ? ((z.sortIndex = D),
            t(u, z),
            n(a) === null &&
              z === n(u) &&
              (C ? (h(E), (E = -1)) : (C = !0), W(S, D - H)))
          : ((z.sortIndex = Y), t(a, z), v || y || ((v = !0), A(P))),
        z
      )
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (z) {
      var I = p
      return function () {
        var D = p
        p = I
        try {
          return z.apply(this, arguments)
        } finally {
          p = D
        }
      }
    }))
})(_m)
Fm.exports = _m
var kv = Fm.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ev = x,
  At = kv
function _(e) {
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
var Bm = new Set(),
  mi = {}
function Fr(e, t) {
  ;(vo(e, t), vo(e + 'Capture', t))
}
function vo(e, t) {
  for (mi[e] = t, e = 0; e < t.length; e++) Bm.add(t[e])
}
var Nn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  cu = Object.prototype.hasOwnProperty,
  Pv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nf = {},
  rf = {}
function $v(e) {
  return cu.call(rf, e)
    ? !0
    : cu.call(nf, e)
      ? !1
      : Pv.test(e)
        ? (rf[e] = !0)
        : ((nf[e] = !0), !1)
}
function Rv(e, t, n, r) {
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
function Tv(e, t, n, r) {
  if (t === null || typeof t > 'u' || Rv(e, t, n, r)) return !0
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
function bt(e, t, n, r, o, i, s) {
  ;((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s))
}
var lt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    lt[e] = new bt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  lt[t] = new bt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  lt[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  lt[e] = new bt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    lt[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  lt[e] = new bt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  lt[e] = new bt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  lt[e] = new bt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  lt[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Ec = /[\-:]([a-z])/g
function Pc(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ec, Pc)
    lt[t] = new bt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ec, Pc)
    lt[t] = new bt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ec, Pc)
  lt[t] = new bt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  lt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
lt.xlinkHref = new bt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  lt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function $c(e, t, n, r) {
  var o = lt.hasOwnProperty(t) ? lt[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Tv(t, n, o, r) && (n = null),
    r || o === null
      ? $v(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Fn = Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ji = Symbol.for('react.element'),
  Xr = Symbol.for('react.portal'),
  qr = Symbol.for('react.fragment'),
  Rc = Symbol.for('react.strict_mode'),
  du = Symbol.for('react.profiler'),
  Dm = Symbol.for('react.provider'),
  Wm = Symbol.for('react.context'),
  Tc = Symbol.for('react.forward_ref'),
  fu = Symbol.for('react.suspense'),
  pu = Symbol.for('react.suspense_list'),
  Ic = Symbol.for('react.memo'),
  Hn = Symbol.for('react.lazy'),
  Um = Symbol.for('react.offscreen'),
  of = Symbol.iterator
function Oo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (of && e[of]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Oe = Object.assign,
  Ea
function Qo(e) {
  if (Ea === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Ea = (t && t[1]) || ''
    }
  return (
    `
` +
    Ea +
    e
  )
}
var Pa = !1
function $a(e, t) {
  if (!e || Pa) return ''
  Pa = !0
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
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];
      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;((Pa = !1), (Error.prepareStackTrace = n))
  }
  return (e = e ? e.displayName || e.name : '') ? Qo(e) : ''
}
function Iv(e) {
  switch (e.tag) {
    case 5:
      return Qo(e.type)
    case 16:
      return Qo('Lazy')
    case 13:
      return Qo('Suspense')
    case 19:
      return Qo('SuspenseList')
    case 0:
    case 2:
    case 15:
      return ((e = $a(e.type, !1)), e)
    case 11:
      return ((e = $a(e.type.render, !1)), e)
    case 1:
      return ((e = $a(e.type, !0)), e)
    default:
      return ''
  }
}
function mu(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case qr:
      return 'Fragment'
    case Xr:
      return 'Portal'
    case du:
      return 'Profiler'
    case Rc:
      return 'StrictMode'
    case fu:
      return 'Suspense'
    case pu:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Wm:
        return (e.displayName || 'Context') + '.Consumer'
      case Dm:
        return (e._context.displayName || 'Context') + '.Provider'
      case Tc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ic:
        return (
          (t = e.displayName || null),
          t !== null ? t : mu(e.type) || 'Memo'
        )
      case Hn:
        ;((t = e._payload), (e = e._init))
        try {
          return mu(e(t))
        } catch {}
    }
  return null
}
function Mv(e) {
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
      return mu(t)
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
function sr(e) {
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
function Hm(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Nv(e) {
  var t = Hm(e) ? 'checked' : 'value',
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
        set: function (s) {
          ;((r = '' + s), i.call(this, s))
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;((e._valueTracker = null), delete e[t])
        },
      }
    )
  }
}
function es(e) {
  e._valueTracker || (e._valueTracker = Nv(e))
}
function Vm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Hm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Hs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function hu(e, t) {
  var n = t.checked
  return Oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function sf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;((n = sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    }))
}
function Km(e, t) {
  ;((t = t.checked), t != null && $c(e, 'checked', t, !1))
}
function gu(e, t) {
  Km(e, t)
  var n = sr(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  ;(t.hasOwnProperty('value')
    ? yu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && yu(e, t.type, sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked))
}
function lf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!(
      (r !== 'submit' && r !== 'reset') ||
      (t.value !== void 0 && t.value !== null)
    ))
      return
    ;((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t))
  }
  ;((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n))
}
function yu(e, t, n) {
  ;(t !== 'number' || Hs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Yo = Array.isArray
function uo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0))
  } else {
    for (n = '' + sr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;((e[o].selected = !0), r && (e[o].defaultSelected = !0))
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function vu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91))
  return Oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function af(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92))
      if (Yo(n)) {
        if (1 < n.length) throw Error(_(93))
        n = n[0]
      }
      t = n
    }
    ;(t == null && (t = ''), (n = t))
  }
  e._wrapperState = { initialValue: sr(n) }
}
function Gm(e, t) {
  var n = sr(t.value),
    r = sr(t.defaultValue)
  ;(n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r))
}
function uf(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Qm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Su(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Qm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ts,
  Ym = (function (e) {
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
        ts = ts || document.createElement('div'),
          ts.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ts.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild)
      for (; t.firstChild;) e.appendChild(t.firstChild)
    }
  })
function hi(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ni = {
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
  Ov = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ni).forEach(function (e) {
  Ov.forEach(function (t) {
    ;((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ni[t] = ni[e]))
  })
})
function Xm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ni.hasOwnProperty(e) && ni[e])
      ? ('' + t).trim()
      : t + 'px'
}
function qm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Xm(n, t[n], r)
      ;(n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o))
    }
}
var Lv = Oe(
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
  },
)
function xu(e, t) {
  if (t) {
    if (Lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62))
  }
}
function Cu(e, t) {
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
var wu = null
function Mc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var bu = null,
  co = null,
  fo = null
function cf(e) {
  if ((e = Di(e))) {
    if (typeof bu != 'function') throw Error(_(280))
    var t = e.stateNode
    t && ((t = Pl(t)), bu(e.stateNode, e.type, t))
  }
}
function Zm(e) {
  co ? (fo ? fo.push(e) : (fo = [e])) : (co = e)
}
function Jm() {
  if (co) {
    var e = co,
      t = fo
    if (((fo = co = null), cf(e), t)) for (e = 0; e < t.length; e++) cf(t[e])
  }
}
function eh(e, t) {
  return e(t)
}
function th() {}
var Ra = !1
function nh(e, t, n) {
  if (Ra) return e(t, n)
  Ra = !0
  try {
    return eh(e, t, n)
  } finally {
    ;((Ra = !1), (co !== null || fo !== null) && (th(), Jm()))
  }
}
function gi(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Pl(n)
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
      ;((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r))
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n))
  return n
}
var ku = !1
if (Nn)
  try {
    var Lo = {}
    ;(Object.defineProperty(Lo, 'passive', {
      get: function () {
        ku = !0
      },
    }),
      window.addEventListener('test', Lo, Lo),
      window.removeEventListener('test', Lo, Lo))
  } catch {
    ku = !1
  }
function zv(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var ri = !1,
  Vs = null,
  Ks = !1,
  Eu = null,
  Av = {
    onError: function (e) {
      ;((ri = !0), (Vs = e))
    },
  }
function jv(e, t, n, r, o, i, s, l, a) {
  ;((ri = !1), (Vs = null), zv.apply(Av, arguments))
}
function Fv(e, t, n, r, o, i, s, l, a) {
  if ((jv.apply(this, arguments), ri)) {
    if (ri) {
      var u = Vs
      ;((ri = !1), (Vs = null))
    } else throw Error(_(198))
    Ks || ((Ks = !0), (Eu = u))
  }
}
function _r(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return;) t = t.return
  else {
    e = t
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return))
    while (e)
  }
  return t.tag === 3 ? n : null
}
function rh(e) {
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
function df(e) {
  if (_r(e) !== e) throw Error(_(188))
}
function _v(e) {
  var t = e.alternate
  if (!t) {
    if (((t = _r(e)), t === null)) throw Error(_(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ;) {
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
      for (i = o.child; i;) {
        if (i === n) return (df(o), e)
        if (i === r) return (df(o), t)
        i = i.sibling
      }
      throw Error(_(188))
    }
    if (n.return !== r.return) ((n = o), (r = i))
    else {
      for (var s = !1, l = o.child; l;) {
        if (l === n) {
          ;((s = !0), (n = o), (r = i))
          break
        }
        if (l === r) {
          ;((s = !0), (r = o), (n = i))
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = i.child; l;) {
          if (l === n) {
            ;((s = !0), (n = i), (r = o))
            break
          }
          if (l === r) {
            ;((s = !0), (r = i), (n = o))
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(_(189))
      }
    }
    if (n.alternate !== r) throw Error(_(190))
  }
  if (n.tag !== 3) throw Error(_(188))
  return n.stateNode.current === n ? e : t
}
function oh(e) {
  return ((e = _v(e)), e !== null ? ih(e) : null)
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null;) {
    var t = ih(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var sh = At.unstable_scheduleCallback,
  ff = At.unstable_cancelCallback,
  Bv = At.unstable_shouldYield,
  Dv = At.unstable_requestPaint,
  Ue = At.unstable_now,
  Wv = At.unstable_getCurrentPriorityLevel,
  Nc = At.unstable_ImmediatePriority,
  lh = At.unstable_UserBlockingPriority,
  Gs = At.unstable_NormalPriority,
  Uv = At.unstable_LowPriority,
  ah = At.unstable_IdlePriority,
  wl = null,
  yn = null
function Hv(e) {
  if (yn && typeof yn.onCommitFiberRoot == 'function')
    try {
      yn.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var rn = Math.clz32 ? Math.clz32 : Gv,
  Vv = Math.log,
  Kv = Math.LN2
function Gv(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vv(e) / Kv) | 0)) | 0)
}
var ns = 64,
  rs = 4194304
function Xo(e) {
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
function Qs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~o
    l !== 0 ? (r = Xo(l)) : ((i &= s), i !== 0 && (r = Xo(i)))
  } else ((s = n & ~o), s !== 0 ? (r = Xo(s)) : i !== 0 && (r = Xo(i)))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - rn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o))
  return r
}
function Qv(e, t) {
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
function Yv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - rn(i),
      l = 1 << s,
      a = o[s]
    ;(a === -1
      ? (!(l & n) || l & r) && (o[s] = Qv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l))
  }
}
function Pu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function uh() {
  var e = ns
  return ((ns <<= 1), !(ns & 4194240) && (ns = 64), e)
}
function Ta(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function _i(e, t, n) {
  ;((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rn(t)),
    (e[t] = n))
}
function Xv(e, t) {
  var n = e.pendingLanes & ~t
  ;((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements))
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - rn(n),
      i = 1 << o
    ;((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i))
  }
}
function Oc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n;) {
    var r = 31 - rn(n),
      o = 1 << r
    ;((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o))
  }
}
var ve = 0
function ch(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1)
}
var dh,
  Lc,
  fh,
  ph,
  mh,
  $u = !1,
  os = [],
  Xn = null,
  qn = null,
  Zn = null,
  yi = new Map(),
  vi = new Map(),
  Kn = [],
  qv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function pf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Xn = null
      break
    case 'dragenter':
    case 'dragleave':
      qn = null
      break
    case 'mouseover':
    case 'mouseout':
      Zn = null
      break
    case 'pointerover':
    case 'pointerout':
      yi.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      vi.delete(t.pointerId)
  }
}
function zo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Di(t)), t !== null && Lc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Zv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return ((Xn = zo(Xn, e, t, n, r, o)), !0)
    case 'dragenter':
      return ((qn = zo(qn, e, t, n, r, o)), !0)
    case 'mouseover':
      return ((Zn = zo(Zn, e, t, n, r, o)), !0)
    case 'pointerover':
      var i = o.pointerId
      return (yi.set(i, zo(yi.get(i) || null, e, t, n, r, o)), !0)
    case 'gotpointercapture':
      return (
        (i = o.pointerId),
        vi.set(i, zo(vi.get(i) || null, e, t, n, r, o)),
        !0
      )
  }
  return !1
}
function hh(e) {
  var t = Cr(e.target)
  if (t !== null) {
    var n = _r(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rh(n)), t !== null)) {
          ;((e.blockedOn = t),
            mh(e.priority, function () {
              fh(n)
            }))
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
function $s(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;((wu = r), n.target.dispatchEvent(r), (wu = null))
    } else return ((t = Di(n)), t !== null && Lc(t), (e.blockedOn = n), !1)
    t.shift()
  }
  return !0
}
function mf(e, t, n) {
  $s(e) && n.delete(t)
}
function Jv() {
  ;(($u = !1),
    Xn !== null && $s(Xn) && (Xn = null),
    qn !== null && $s(qn) && (qn = null),
    Zn !== null && $s(Zn) && (Zn = null),
    yi.forEach(mf),
    vi.forEach(mf))
}
function Ao(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $u ||
      (($u = !0), At.unstable_scheduleCallback(At.unstable_NormalPriority, Jv)))
}
function Si(e) {
  function t(o) {
    return Ao(o, e)
  }
  if (0 < os.length) {
    Ao(os[0], e)
    for (var n = 1; n < os.length; n++) {
      var r = os[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Xn !== null && Ao(Xn, e),
      qn !== null && Ao(qn, e),
      Zn !== null && Ao(Zn, e),
      yi.forEach(t),
      vi.forEach(t),
      n = 0;
    n < Kn.length;
    n++
  )
    ((r = Kn[n]), r.blockedOn === e && (r.blockedOn = null))
  for (; 0 < Kn.length && ((n = Kn[0]), n.blockedOn === null);)
    (hh(n), n.blockedOn === null && Kn.shift())
}
var po = Fn.ReactCurrentBatchConfig,
  Ys = !0
function e0(e, t, n, r) {
  var o = ve,
    i = po.transition
  po.transition = null
  try {
    ;((ve = 1), zc(e, t, n, r))
  } finally {
    ;((ve = o), (po.transition = i))
  }
}
function t0(e, t, n, r) {
  var o = ve,
    i = po.transition
  po.transition = null
  try {
    ;((ve = 4), zc(e, t, n, r))
  } finally {
    ;((ve = o), (po.transition = i))
  }
}
function zc(e, t, n, r) {
  if (Ys) {
    var o = Ru(e, t, n, r)
    if (o === null) (_a(e, t, r, Xs, n), pf(e, r))
    else if (Zv(o, e, t, n, r)) r.stopPropagation()
    else if ((pf(e, r), t & 4 && -1 < qv.indexOf(e))) {
      for (; o !== null;) {
        var i = Di(o)
        if (
          (i !== null && dh(i),
          (i = Ru(e, t, n, r)),
          i === null && _a(e, t, r, Xs, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else _a(e, t, r, null, n)
  }
}
var Xs = null
function Ru(e, t, n, r) {
  if (((Xs = null), (e = Mc(r)), (e = Cr(e)), e !== null))
    if (((t = _r(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = rh(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return ((Xs = e), null)
}
function gh(e) {
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
      switch (Wv()) {
        case Nc:
          return 1
        case lh:
          return 4
        case Gs:
        case Uv:
          return 16
        case ah:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Qn = null,
  Ac = null,
  Rs = null
function yh() {
  if (Rs) return Rs
  var e,
    t = Ac,
    n = t.length,
    r,
    o = 'value' in Qn ? Qn.value : Qn.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Rs = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Ts(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function is() {
  return !0
}
function hf() {
  return !1
}
function Ft(e) {
  function t(n, r, o, i, s) {
    ;((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null))
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? is
        : hf),
      (this.isPropagationStopped = hf),
      this
    )
  }
  return (
    Oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = is))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = is))
      },
      persist: function () {},
      isPersistent: is,
    }),
    t
  )
}
var To = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jc = Ft(To),
  Bi = Oe({}, To, { view: 0, detail: 0 }),
  n0 = Ft(Bi),
  Ia,
  Ma,
  jo,
  bl = Oe({}, Bi, {
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
    getModifierState: Fc,
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
        : (e !== jo &&
            (jo && e.type === 'mousemove'
              ? ((Ia = e.screenX - jo.screenX), (Ma = e.screenY - jo.screenY))
              : (Ma = Ia = 0),
            (jo = e)),
          Ia)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ma
    },
  }),
  gf = Ft(bl),
  r0 = Oe({}, bl, { dataTransfer: 0 }),
  o0 = Ft(r0),
  i0 = Oe({}, Bi, { relatedTarget: 0 }),
  Na = Ft(i0),
  s0 = Oe({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l0 = Ft(s0),
  a0 = Oe({}, To, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  u0 = Ft(a0),
  c0 = Oe({}, To, { data: 0 }),
  yf = Ft(c0),
  d0 = {
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
  f0 = {
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
  p0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function m0(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = p0[e]) ? !!t[e] : !1
}
function Fc() {
  return m0
}
var h0 = Oe({}, Bi, {
    key: function (e) {
      if (e.key) {
        var t = d0[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Ts(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? f0[e.keyCode] || 'Unidentified'
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
    getModifierState: Fc,
    charCode: function (e) {
      return e.type === 'keypress' ? Ts(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ts(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  g0 = Ft(h0),
  y0 = Oe({}, bl, {
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
  vf = Ft(y0),
  v0 = Oe({}, Bi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc,
  }),
  S0 = Ft(v0),
  x0 = Oe({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C0 = Ft(x0),
  w0 = Oe({}, bl, {
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
  b0 = Ft(w0),
  k0 = [9, 13, 27, 32],
  _c = Nn && 'CompositionEvent' in window,
  oi = null
Nn && 'documentMode' in document && (oi = document.documentMode)
var E0 = Nn && 'TextEvent' in window && !oi,
  vh = Nn && (!_c || (oi && 8 < oi && 11 >= oi)),
  Sf = ' ',
  xf = !1
function Sh(e, t) {
  switch (e) {
    case 'keyup':
      return k0.indexOf(t.keyCode) !== -1
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
function xh(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null)
}
var Zr = !1
function P0(e, t) {
  switch (e) {
    case 'compositionend':
      return xh(t)
    case 'keypress':
      return t.which !== 32 ? null : ((xf = !0), Sf)
    case 'textInput':
      return ((e = t.data), e === Sf && xf ? null : e)
    default:
      return null
  }
}
function $0(e, t) {
  if (Zr)
    return e === 'compositionend' || (!_c && Sh(e, t))
      ? ((e = yh()), (Rs = Ac = Qn = null), (Zr = !1), e)
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
      return vh && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var R0 = {
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
function Cf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!R0[e.type] : t === 'textarea'
}
function Ch(e, t, n, r) {
  ;(Zm(r),
    (t = qs(t, 'onChange')),
    0 < t.length &&
      ((n = new jc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })))
}
var ii = null,
  xi = null
function T0(e) {
  Nh(e, 0)
}
function kl(e) {
  var t = to(e)
  if (Vm(t)) return e
}
function I0(e, t) {
  if (e === 'change') return t
}
var wh = !1
if (Nn) {
  var Oa
  if (Nn) {
    var La = 'oninput' in document
    if (!La) {
      var wf = document.createElement('div')
      ;(wf.setAttribute('oninput', 'return;'),
        (La = typeof wf.oninput == 'function'))
    }
    Oa = La
  } else Oa = !1
  wh = Oa && (!document.documentMode || 9 < document.documentMode)
}
function bf() {
  ii && (ii.detachEvent('onpropertychange', bh), (xi = ii = null))
}
function bh(e) {
  if (e.propertyName === 'value' && kl(xi)) {
    var t = []
    ;(Ch(t, xi, e, Mc(e)), nh(T0, t))
  }
}
function M0(e, t, n) {
  e === 'focusin'
    ? (bf(), (ii = t), (xi = n), ii.attachEvent('onpropertychange', bh))
    : e === 'focusout' && bf()
}
function N0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return kl(xi)
}
function O0(e, t) {
  if (e === 'click') return kl(t)
}
function L0(e, t) {
  if (e === 'input' || e === 'change') return kl(t)
}
function z0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var sn = typeof Object.is == 'function' ? Object.is : z0
function Ci(e, t) {
  if (sn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!cu.call(t, o) || !sn(e[o], t[o])) return !1
  }
  return !0
}
function kf(e) {
  for (; e && e.firstChild;) e = e.firstChild
  return e
}
function Ef(e, t) {
  var n = kf(e)
  e = 0
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = kf(n)
  }
}
function kh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? kh(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Eh() {
  for (var e = window, t = Hs(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Hs(e.document)
  }
  return t
}
function Bc(e) {
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
function A0(e) {
  var t = Eh(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    kh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ef(n, i)))
        var s = Ef(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top))
  }
}
var j0 = Nn && 'documentMode' in document && 11 >= document.documentMode,
  Jr = null,
  Tu = null,
  si = null,
  Iu = !1
function Pf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Iu ||
    Jr == null ||
    Jr !== Hs(r) ||
    ((r = Jr),
    'selectionStart' in r && Bc(r)
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
    (si && Ci(si, r)) ||
      ((si = r),
      (r = qs(Tu, 'onSelect')),
      0 < r.length &&
        ((t = new jc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jr))))
}
function ss(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var eo = {
    animationend: ss('Animation', 'AnimationEnd'),
    animationiteration: ss('Animation', 'AnimationIteration'),
    animationstart: ss('Animation', 'AnimationStart'),
    transitionend: ss('Transition', 'TransitionEnd'),
  },
  za = {},
  Ph = {}
Nn &&
  ((Ph = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete eo.animationend.animation,
    delete eo.animationiteration.animation,
    delete eo.animationstart.animation),
  'TransitionEvent' in window || delete eo.transitionend.transition)
function El(e) {
  if (za[e]) return za[e]
  if (!eo[e]) return e
  var t = eo[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Ph) return (za[e] = t[n])
  return e
}
var $h = El('animationend'),
  Rh = El('animationiteration'),
  Th = El('animationstart'),
  Ih = El('transitionend'),
  Mh = new Map(),
  $f =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function cr(e, t) {
  ;(Mh.set(e, t), Fr(t, [e]))
}
for (var Aa = 0; Aa < $f.length; Aa++) {
  var ja = $f[Aa],
    F0 = ja.toLowerCase(),
    _0 = ja[0].toUpperCase() + ja.slice(1)
  cr(F0, 'on' + _0)
}
cr($h, 'onAnimationEnd')
cr(Rh, 'onAnimationIteration')
cr(Th, 'onAnimationStart')
cr('dblclick', 'onDoubleClick')
cr('focusin', 'onFocus')
cr('focusout', 'onBlur')
cr(Ih, 'onTransitionEnd')
vo('onMouseEnter', ['mouseout', 'mouseover'])
vo('onMouseLeave', ['mouseout', 'mouseover'])
vo('onPointerEnter', ['pointerout', 'pointerover'])
vo('onPointerLeave', ['pointerout', 'pointerover'])
Fr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
Fr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
Fr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Fr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
Fr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
Fr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var qo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  B0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(qo))
function Rf(e, t, n) {
  var r = e.type || 'unknown-event'
  ;((e.currentTarget = n), Fv(r, t, void 0, e), (e.currentTarget = null))
}
function Nh(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e
          ;(Rf(o, l, u), (i = a))
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e
          ;(Rf(o, l, u), (i = a))
        }
    }
  }
  if (Ks) throw ((e = Eu), (Ks = !1), (Eu = null), e)
}
function $e(e, t) {
  var n = t[zu]
  n === void 0 && (n = t[zu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Oh(t, e, 2, !1), n.add(r))
}
function Fa(e, t, n) {
  var r = 0
  ;(t && (r |= 4), Oh(n, e, r, t))
}
var ls = '_reactListening' + Math.random().toString(36).slice(2)
function wi(e) {
  if (!e[ls]) {
    ;((e[ls] = !0),
      Bm.forEach(function (n) {
        n !== 'selectionchange' && (B0.has(n) || Fa(n, !1, e), Fa(n, !0, e))
      }))
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[ls] || ((t[ls] = !0), Fa('selectionchange', !1, t))
  }
}
function Oh(e, t, n, r) {
  switch (gh(t)) {
    case 1:
      var o = e0
      break
    case 4:
      o = t0
      break
    default:
      o = zc
  }
  ;((n = o.bind(null, t, n, e)),
    (o = void 0),
    !ku ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1))
}
function _a(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null;) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            s = s.return
          }
        for (; l !== null;) {
          if (((s = Cr(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  nh(function () {
    var u = i,
      d = Mc(n),
      f = []
    e: {
      var p = Mh.get(e)
      if (p !== void 0) {
        var y = jc,
          v = e
        switch (e) {
          case 'keypress':
            if (Ts(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = g0
            break
          case 'focusin':
            ;((v = 'focus'), (y = Na))
            break
          case 'focusout':
            ;((v = 'blur'), (y = Na))
            break
          case 'beforeblur':
          case 'afterblur':
            y = Na
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
            y = gf
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = o0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = S0
            break
          case $h:
          case Rh:
          case Th:
            y = l0
            break
          case Ih:
            y = C0
            break
          case 'scroll':
            y = n0
            break
          case 'wheel':
            y = b0
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = u0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = vf
        }
        var C = (t & 4) !== 0,
          k = !C && e === 'scroll',
          h = C ? (p !== null ? p + 'Capture' : null) : p
        C = []
        for (var g = u, m; g !== null;) {
          m = g
          var S = m.stateNode
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = gi(g, h)), S != null && C.push(bi(g, S, m)))),
            k)
          )
            break
          g = g.return
        }
        0 < C.length &&
          ((p = new y(p, v, null, n, d)), f.push({ event: p, listeners: C }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== wu &&
            (v = n.relatedTarget || n.fromElement) &&
            (Cr(v) || v[On]))
        )
          break e
        if (
          (y || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Cr(v) : null),
              v !== null &&
                ((k = _r(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((C = gf),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((C = vf),
              (S = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (g = 'pointer')),
            (k = y == null ? p : to(y)),
            (m = v == null ? p : to(v)),
            (p = new C(S, g + 'leave', y, n, d)),
            (p.target = k),
            (p.relatedTarget = m),
            (S = null),
            Cr(d) === u &&
              ((C = new C(h, g + 'enter', v, n, d)),
              (C.target = m),
              (C.relatedTarget = k),
              (S = C)),
            (k = S),
            y && v)
          )
            t: {
              for (C = y, h = v, g = 0, m = C; m; m = Wr(m)) g++
              for (m = 0, S = h; S; S = Wr(S)) m++
              for (; 0 < g - m;) ((C = Wr(C)), g--)
              for (; 0 < m - g;) ((h = Wr(h)), m--)
              for (; g--;) {
                if (C === h || (h !== null && C === h.alternate)) break t
                ;((C = Wr(C)), (h = Wr(h)))
              }
              C = null
            }
          else C = null
          ;(y !== null && Tf(f, p, y, C, !1),
            v !== null && k !== null && Tf(f, k, v, C, !0))
        }
      }
      e: {
        if (
          ((p = u ? to(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var P = I0
        else if (Cf(p))
          if (wh) P = L0
          else {
            P = N0
            var $ = M0
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (P = O0)
        if (P && (P = P(e, u))) {
          Ch(f, P, n, d)
          break e
        }
        ;($ && $(e, p, u),
          e === 'focusout' &&
            ($ = p._wrapperState) &&
            $.controlled &&
            p.type === 'number' &&
            yu(p, 'number', p.value))
      }
      switch ((($ = u ? to(u) : window), e)) {
        case 'focusin':
          ;(Cf($) || $.contentEditable === 'true') &&
            ((Jr = $), (Tu = u), (si = null))
          break
        case 'focusout':
          si = Tu = Jr = null
          break
        case 'mousedown':
          Iu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;((Iu = !1), Pf(f, n, d))
          break
        case 'selectionchange':
          if (j0) break
        case 'keydown':
        case 'keyup':
          Pf(f, n, d)
      }
      var w
      if (_c)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart'
              break e
            case 'compositionend':
              E = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              E = 'onCompositionUpdate'
              break e
          }
          E = void 0
        }
      else
        Zr
          ? Sh(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart')
      ;(E &&
        (vh &&
          n.locale !== 'ko' &&
          (Zr || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && Zr && (w = yh())
            : ((Qn = d),
              (Ac = 'value' in Qn ? Qn.value : Qn.textContent),
              (Zr = !0))),
        ($ = qs(u, E)),
        0 < $.length &&
          ((E = new yf(E, e, null, n, d)),
          f.push({ event: E, listeners: $ }),
          w ? (E.data = w) : ((w = xh(n)), w !== null && (E.data = w)))),
        (w = E0 ? P0(e, n) : $0(e, n)) &&
          ((u = qs(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new yf('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = w))))
    }
    Nh(f, t)
  })
}
function bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function qs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null;) {
    var o = e,
      i = o.stateNode
    ;(o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = gi(e, n)),
      i != null && r.unshift(bi(e, i, o)),
      (i = gi(e, t)),
      i != null && r.push(bi(e, i, o))),
      (e = e.return))
  }
  return r
}
function Wr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Tf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    ;(l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = gi(n, i)), a != null && s.unshift(bi(n, a, l)))
        : o || ((a = gi(n, i)), a != null && s.push(bi(n, a, l)))),
      (n = n.return))
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var D0 = /\r\n?/g,
  W0 = /\u0000|\uFFFD/g
function If(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      D0,
      `
`,
    )
    .replace(W0, '')
}
function as(e, t, n) {
  if (((t = If(t)), If(e) !== t && n)) throw Error(_(425))
}
function Zs() {}
var Mu = null,
  Nu = null
function Ou(e, t) {
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
var Lu = typeof setTimeout == 'function' ? setTimeout : void 0,
  U0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Mf = typeof Promise == 'function' ? Promise : void 0,
  H0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Mf < 'u'
        ? function (e) {
            return Mf.resolve(null).then(e).catch(V0)
          }
        : Lu
function V0(e) {
  setTimeout(function () {
    throw e
  })
}
function Ba(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          ;(e.removeChild(o), Si(t))
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Si(t)
}
function Jn(e) {
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
function Nf(e) {
  e = e.previousSibling
  for (var t = 0; e;) {
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
var Io = Math.random().toString(36).slice(2),
  hn = '__reactFiber$' + Io,
  ki = '__reactProps$' + Io,
  On = '__reactContainer$' + Io,
  zu = '__reactEvents$' + Io,
  K0 = '__reactListeners$' + Io,
  G0 = '__reactHandles$' + Io
function Cr(e) {
  var t = e[hn]
  if (t) return t
  for (var n = e.parentNode; n;) {
    if ((t = n[On] || n[hn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Nf(e); e !== null;) {
          if ((n = e[hn])) return n
          e = Nf(e)
        }
      return t
    }
    ;((e = n), (n = e.parentNode))
  }
  return null
}
function Di(e) {
  return (
    (e = e[hn] || e[On]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function to(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(_(33))
}
function Pl(e) {
  return e[ki] || null
}
var Au = [],
  no = -1
function dr(e) {
  return { current: e }
}
function Re(e) {
  0 > no || ((e.current = Au[no]), (Au[no] = null), no--)
}
function ke(e, t) {
  ;(no++, (Au[no] = e.current), (e.current = t))
}
var lr = {},
  yt = dr(lr),
  Pt = dr(!1),
  Ir = lr
function So(e, t) {
  var n = e.type.contextTypes
  if (!n) return lr
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
function $t(e) {
  return ((e = e.childContextTypes), e != null)
}
function Js() {
  ;(Re(Pt), Re(yt))
}
function Of(e, t, n) {
  if (yt.current !== lr) throw Error(_(168))
  ;(ke(yt, t), ke(Pt, n))
}
function Lh(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(_(108, Mv(e) || 'Unknown', o))
  return Oe({}, n, r)
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lr),
    (Ir = yt.current),
    ke(yt, e),
    ke(Pt, Pt.current),
    !0
  )
}
function Lf(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(_(169))
  ;(n
    ? ((e = Lh(e, t, Ir)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Re(Pt),
      Re(yt),
      ke(yt, e))
    : Re(Pt),
    ke(Pt, n))
}
var Rn = null,
  $l = !1,
  Da = !1
function zh(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e)
}
function Q0(e) {
  ;(($l = !0), zh(e))
}
function fr() {
  if (!Da && Rn !== null) {
    Da = !0
    var e = 0,
      t = ve
    try {
      var n = Rn
      for (ve = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;((Rn = null), ($l = !1))
    } catch (o) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), sh(Nc, fr), o)
    } finally {
      ;((ve = t), (Da = !1))
    }
  }
  return null
}
var ro = [],
  oo = 0,
  tl = null,
  nl = 0,
  Wt = [],
  Ut = 0,
  Mr = null,
  Tn = 1,
  In = ''
function gr(e, t) {
  ;((ro[oo++] = nl), (ro[oo++] = tl), (tl = e), (nl = t))
}
function Ah(e, t, n) {
  ;((Wt[Ut++] = Tn), (Wt[Ut++] = In), (Wt[Ut++] = Mr), (Mr = e))
  var r = Tn
  e = In
  var o = 32 - rn(r) - 1
  ;((r &= ~(1 << o)), (n += 1))
  var i = 32 - rn(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Tn = (1 << (32 - rn(t) + o)) | (n << o) | r),
      (In = i + e))
  } else ((Tn = (1 << i) | (n << o) | r), (In = e))
}
function Dc(e) {
  e.return !== null && (gr(e, 1), Ah(e, 1, 0))
}
function Wc(e) {
  for (; e === tl;)
    ((tl = ro[--oo]), (ro[oo] = null), (nl = ro[--oo]), (ro[oo] = null))
  for (; e === Mr;)
    ((Mr = Wt[--Ut]),
      (Wt[Ut] = null),
      (In = Wt[--Ut]),
      (Wt[Ut] = null),
      (Tn = Wt[--Ut]),
      (Wt[Ut] = null))
}
var Lt = null,
  Ot = null,
  Ie = !1,
  tn = null
function jh(e, t) {
  var n = Vt(5, null, null, 0)
  ;((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n))
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Lt = e), (Ot = Jn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Lt = e), (Ot = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mr !== null ? { id: Tn, overflow: In } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Lt = e),
            (Ot = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function ju(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Fu(e) {
  if (Ie) {
    var t = Ot
    if (t) {
      var n = t
      if (!zf(e, t)) {
        if (ju(e)) throw Error(_(418))
        t = Jn(n.nextSibling)
        var r = Lt
        t && zf(e, t)
          ? jh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ie = !1), (Lt = e))
      }
    } else {
      if (ju(e)) throw Error(_(418))
      ;((e.flags = (e.flags & -4097) | 2), (Ie = !1), (Lt = e))
    }
  }
}
function Af(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return
  Lt = e
}
function us(e) {
  if (e !== Lt) return !1
  if (!Ie) return (Af(e), (Ie = !0), !1)
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ou(e.type, e.memoizedProps))),
    t && (t = Ot))
  ) {
    if (ju(e)) throw (Fh(), Error(_(418)))
    for (; t;) (jh(e, t), (t = Jn(t.nextSibling)))
  }
  if ((Af(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317))
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ot = Jn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ot = null
    }
  } else Ot = Lt ? Jn(e.stateNode.nextSibling) : null
  return !0
}
function Fh() {
  for (var e = Ot; e;) e = Jn(e.nextSibling)
}
function xo() {
  ;((Ot = Lt = null), (Ie = !1))
}
function Uc(e) {
  tn === null ? (tn = [e]) : tn.push(e)
}
var Y0 = Fn.ReactCurrentBatchConfig
function Fo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309))
        var r = n.stateNode
      }
      if (!r) throw Error(_(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs
            s === null ? delete l[i] : (l[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(_(284))
    if (!n._owner) throw Error(_(290, e))
  }
  return e
}
function cs(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    )
  )
}
function jf(e) {
  var t = e._init
  return t(e._payload)
}
function _h(e) {
  function t(h, g) {
    if (e) {
      var m = h.deletions
      m === null ? ((h.deletions = [g]), (h.flags |= 16)) : m.push(g)
    }
  }
  function n(h, g) {
    if (!e) return null
    for (; g !== null;) (t(h, g), (g = g.sibling))
    return null
  }
  function r(h, g) {
    for (h = new Map(); g !== null;)
      (g.key !== null ? h.set(g.key, g) : h.set(g.index, g), (g = g.sibling))
    return h
  }
  function o(h, g) {
    return ((h = rr(h, g)), (h.index = 0), (h.sibling = null), h)
  }
  function i(h, g, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < g ? ((h.flags |= 2), g) : m)
            : ((h.flags |= 2), g))
        : ((h.flags |= 1048576), g)
    )
  }
  function s(h) {
    return (e && h.alternate === null && (h.flags |= 2), h)
  }
  function l(h, g, m, S) {
    return g === null || g.tag !== 6
      ? ((g = Qa(m, h.mode, S)), (g.return = h), g)
      : ((g = o(g, m)), (g.return = h), g)
  }
  function a(h, g, m, S) {
    var P = m.type
    return P === qr
      ? d(h, g, m.props.children, S, m.key)
      : g !== null &&
          (g.elementType === P ||
            (typeof P == 'object' &&
              P !== null &&
              P.$$typeof === Hn &&
              jf(P) === g.type))
        ? ((S = o(g, m.props)), (S.ref = Fo(h, g, m)), (S.return = h), S)
        : ((S = As(m.type, m.key, m.props, null, h.mode, S)),
          (S.ref = Fo(h, g, m)),
          (S.return = h),
          S)
  }
  function u(h, g, m, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== m.containerInfo ||
      g.stateNode.implementation !== m.implementation
      ? ((g = Ya(m, h.mode, S)), (g.return = h), g)
      : ((g = o(g, m.children || [])), (g.return = h), g)
  }
  function d(h, g, m, S, P) {
    return g === null || g.tag !== 7
      ? ((g = $r(m, h.mode, S, P)), (g.return = h), g)
      : ((g = o(g, m)), (g.return = h), g)
  }
  function f(h, g, m) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return ((g = Qa('' + g, h.mode, m)), (g.return = h), g)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Ji:
          return (
            (m = As(g.type, g.key, g.props, null, h.mode, m)),
            (m.ref = Fo(h, null, g)),
            (m.return = h),
            m
          )
        case Xr:
          return ((g = Ya(g, h.mode, m)), (g.return = h), g)
        case Hn:
          var S = g._init
          return f(h, S(g._payload), m)
      }
      if (Yo(g) || Oo(g))
        return ((g = $r(g, h.mode, m, null)), (g.return = h), g)
      cs(h, g)
    }
    return null
  }
  function p(h, g, m, S) {
    var P = g !== null ? g.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return P !== null ? null : l(h, g, '' + m, S)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Ji:
          return m.key === P ? a(h, g, m, S) : null
        case Xr:
          return m.key === P ? u(h, g, m, S) : null
        case Hn:
          return ((P = m._init), p(h, g, P(m._payload), S))
      }
      if (Yo(m) || Oo(m)) return P !== null ? null : d(h, g, m, S, null)
      cs(h, m)
    }
    return null
  }
  function y(h, g, m, S, P) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return ((h = h.get(m) || null), l(g, h, '' + S, P))
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Ji:
          return (
            (h = h.get(S.key === null ? m : S.key) || null),
            a(g, h, S, P)
          )
        case Xr:
          return (
            (h = h.get(S.key === null ? m : S.key) || null),
            u(g, h, S, P)
          )
        case Hn:
          var $ = S._init
          return y(h, g, m, $(S._payload), P)
      }
      if (Yo(S) || Oo(S)) return ((h = h.get(m) || null), d(g, h, S, P, null))
      cs(g, S)
    }
    return null
  }
  function v(h, g, m, S) {
    for (
      var P = null, $ = null, w = g, E = (g = 0), T = null;
      w !== null && E < m.length;
      E++
    ) {
      w.index > E ? ((T = w), (w = null)) : (T = w.sibling)
      var c = p(h, w, m[E], S)
      if (c === null) {
        w === null && (w = T)
        break
      }
      ;(e && w && c.alternate === null && t(h, w),
        (g = i(c, g, E)),
        $ === null ? (P = c) : ($.sibling = c),
        ($ = c),
        (w = T))
    }
    if (E === m.length) return (n(h, w), Ie && gr(h, E), P)
    if (w === null) {
      for (; E < m.length; E++)
        ((w = f(h, m[E], S)),
          w !== null &&
            ((g = i(w, g, E)), $ === null ? (P = w) : ($.sibling = w), ($ = w)))
      return (Ie && gr(h, E), P)
    }
    for (w = r(h, w); E < m.length; E++)
      ((T = y(w, h, E, m[E], S)),
        T !== null &&
          (e && T.alternate !== null && w.delete(T.key === null ? E : T.key),
          (g = i(T, g, E)),
          $ === null ? (P = T) : ($.sibling = T),
          ($ = T)))
    return (
      e &&
        w.forEach(function (R) {
          return t(h, R)
        }),
      Ie && gr(h, E),
      P
    )
  }
  function C(h, g, m, S) {
    var P = Oo(m)
    if (typeof P != 'function') throw Error(_(150))
    if (((m = P.call(m)), m == null)) throw Error(_(151))
    for (
      var $ = (P = null), w = g, E = (g = 0), T = null, c = m.next();
      w !== null && !c.done;
      E++, c = m.next()
    ) {
      w.index > E ? ((T = w), (w = null)) : (T = w.sibling)
      var R = p(h, w, c.value, S)
      if (R === null) {
        w === null && (w = T)
        break
      }
      ;(e && w && R.alternate === null && t(h, w),
        (g = i(R, g, E)),
        $ === null ? (P = R) : ($.sibling = R),
        ($ = R),
        (w = T))
    }
    if (c.done) return (n(h, w), Ie && gr(h, E), P)
    if (w === null) {
      for (; !c.done; E++, c = m.next())
        ((c = f(h, c.value, S)),
          c !== null &&
            ((g = i(c, g, E)), $ === null ? (P = c) : ($.sibling = c), ($ = c)))
      return (Ie && gr(h, E), P)
    }
    for (w = r(h, w); !c.done; E++, c = m.next())
      ((c = y(w, h, E, c.value, S)),
        c !== null &&
          (e && c.alternate !== null && w.delete(c.key === null ? E : c.key),
          (g = i(c, g, E)),
          $ === null ? (P = c) : ($.sibling = c),
          ($ = c)))
    return (
      e &&
        w.forEach(function (M) {
          return t(h, M)
        }),
      Ie && gr(h, E),
      P
    )
  }
  function k(h, g, m, S) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === qr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ji:
          e: {
            for (var P = m.key, $ = g; $ !== null;) {
              if ($.key === P) {
                if (((P = m.type), P === qr)) {
                  if ($.tag === 7) {
                    ;(n(h, $.sibling),
                      (g = o($, m.props.children)),
                      (g.return = h),
                      (h = g))
                    break e
                  }
                } else if (
                  $.elementType === P ||
                  (typeof P == 'object' &&
                    P !== null &&
                    P.$$typeof === Hn &&
                    jf(P) === $.type)
                ) {
                  ;(n(h, $.sibling),
                    (g = o($, m.props)),
                    (g.ref = Fo(h, $, m)),
                    (g.return = h),
                    (h = g))
                  break e
                }
                n(h, $)
                break
              } else t(h, $)
              $ = $.sibling
            }
            m.type === qr
              ? ((g = $r(m.props.children, h.mode, S, m.key)),
                (g.return = h),
                (h = g))
              : ((S = As(m.type, m.key, m.props, null, h.mode, S)),
                (S.ref = Fo(h, g, m)),
                (S.return = h),
                (h = S))
          }
          return s(h)
        case Xr:
          e: {
            for ($ = m.key; g !== null;) {
              if (g.key === $)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === m.containerInfo &&
                  g.stateNode.implementation === m.implementation
                ) {
                  ;(n(h, g.sibling),
                    (g = o(g, m.children || [])),
                    (g.return = h),
                    (h = g))
                  break e
                } else {
                  n(h, g)
                  break
                }
              else t(h, g)
              g = g.sibling
            }
            ;((g = Ya(m, h.mode, S)), (g.return = h), (h = g))
          }
          return s(h)
        case Hn:
          return (($ = m._init), k(h, g, $(m._payload), S))
      }
      if (Yo(m)) return v(h, g, m, S)
      if (Oo(m)) return C(h, g, m, S)
      cs(h, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        g !== null && g.tag === 6
          ? (n(h, g.sibling), (g = o(g, m)), (g.return = h), (h = g))
          : (n(h, g), (g = Qa(m, h.mode, S)), (g.return = h), (h = g)),
        s(h))
      : n(h, g)
  }
  return k
}
var Co = _h(!0),
  Bh = _h(!1),
  rl = dr(null),
  ol = null,
  io = null,
  Hc = null
function Vc() {
  Hc = io = ol = null
}
function Kc(e) {
  var t = rl.current
  ;(Re(rl), (e._currentValue = t))
}
function _u(e, t, n) {
  for (; e !== null;) {
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
function mo(e, t) {
  ;((ol = e),
    (Hc = io = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Et = !0), (e.firstContext = null)))
}
function Gt(e) {
  var t = e._currentValue
  if (Hc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), io === null)) {
      if (ol === null) throw Error(_(308))
      ;((io = e), (ol.dependencies = { lanes: 0, firstContext: e }))
    } else io = io.next = e
  return t
}
var wr = null
function Gc(e) {
  wr === null ? (wr = [e]) : wr.push(e)
}
function Dh(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Gc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ln(e, r)
  )
}
function Ln(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return))
  return n.tag === 3 ? n.stateNode : null
}
var Vn = !1
function Qc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Wh(e, t) {
  ;((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }))
}
function Mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function er(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), de & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ln(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Gc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ln(e, n)
  )
}
function Is(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n))
  }
}
function Ff(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        ;(i === null ? (o = i = s) : (i = i.next = s), (n = n.next))
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n))
    return
  }
  ;((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t))
}
function il(e, t, n, r) {
  var o = e.updateQueue
  Vn = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending
  if (l !== null) {
    o.shared.pending = null
    var a = l,
      u = a.next
    ;((a.next = null), s === null ? (i = u) : (s.next = u), (s = a))
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var f = o.baseState
    ;((s = 0), (d = u = a = null), (l = i))
    do {
      var p = l.lane,
        y = l.eventTime
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var v = e,
            C = l
          switch (((p = t), (y = n), C.tag)) {
            case 1:
              if (((v = C.payload), typeof v == 'function')) {
                f = v.call(y, f, p)
                break e
              }
              f = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = C.payload),
                (p = typeof v == 'function' ? v.call(y, f, p) : v),
                p == null)
              )
                break e
              f = Oe({}, f, p)
              break e
            case 2:
              Vn = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [l]) : p.push(l))
      } else
        ((y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (a = f)) : (d = d.next = y),
          (s |= p))
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break
        ;((p = l),
          (l = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null))
      }
    } while (!0)
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do ((s |= o.lane), (o = o.next))
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;((Or |= s), (e.lanes = s), (e.memoizedState = f))
  }
}
function _f(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(_(191, o))
        o.call(r)
      }
    }
}
var Wi = {},
  vn = dr(Wi),
  Ei = dr(Wi),
  Pi = dr(Wi)
function br(e) {
  if (e === Wi) throw Error(_(174))
  return e
}
function Yc(e, t) {
  switch ((ke(Pi, t), ke(Ei, e), ke(vn, Wi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Su(null, '')
      break
    default:
      ;((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Su(t, e)))
  }
  ;(Re(vn), ke(vn, t))
}
function wo() {
  ;(Re(vn), Re(Ei), Re(Pi))
}
function Uh(e) {
  br(Pi.current)
  var t = br(vn.current),
    n = Su(t, e.type)
  t !== n && (ke(Ei, e), ke(vn, n))
}
function Xc(e) {
  Ei.current === e && (Re(vn), Re(Ei))
}
var Me = dr(0)
function sl(e) {
  for (var t = e; t !== null;) {
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
      ;((t.child.return = t), (t = t.child))
      continue
    }
    if (t === e) break
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;((t.sibling.return = t.return), (t = t.sibling))
  }
  return null
}
var Wa = []
function qc() {
  for (var e = 0; e < Wa.length; e++) Wa[e]._workInProgressVersionPrimary = null
  Wa.length = 0
}
var Ms = Fn.ReactCurrentDispatcher,
  Ua = Fn.ReactCurrentBatchConfig,
  Nr = 0,
  Ne = null,
  Ye = null,
  Ze = null,
  ll = !1,
  li = !1,
  $i = 0,
  X0 = 0
function ft() {
  throw Error(_(321))
}
function Zc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sn(e[n], t[n])) return !1
  return !0
}
function Jc(e, t, n, r, o, i) {
  if (
    ((Nr = i),
    (Ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ms.current = e === null || e.memoizedState === null ? e1 : t1),
    (e = n(r, o)),
    li)
  ) {
    i = 0
    do {
      if (((li = !1), ($i = 0), 25 <= i)) throw Error(_(301))
      ;((i += 1),
        (Ze = Ye = null),
        (t.updateQueue = null),
        (Ms.current = n1),
        (e = n(r, o)))
    } while (li)
  }
  if (
    ((Ms.current = al),
    (t = Ye !== null && Ye.next !== null),
    (Nr = 0),
    (Ze = Ye = Ne = null),
    (ll = !1),
    t)
  )
    throw Error(_(300))
  return e
}
function ed() {
  var e = $i !== 0
  return (($i = 0), e)
}
function fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return (Ze === null ? (Ne.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze)
}
function Qt() {
  if (Ye === null) {
    var e = Ne.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Ye.next
  var t = Ze === null ? Ne.memoizedState : Ze.next
  if (t !== null) ((Ze = t), (Ye = e))
  else {
    if (e === null) throw Error(_(310))
    ;((Ye = e),
      (e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null,
      }),
      Ze === null ? (Ne.memoizedState = Ze = e) : (Ze = Ze.next = e))
  }
  return Ze
}
function Ri(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ha(e) {
  var t = Qt(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = Ye,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;((o.next = i.next), (i.next = s))
    }
    ;((r.baseQueue = o = i), (n.pending = null))
  }
  if (o !== null) {
    ;((i = o.next), (r = r.baseState))
    var l = (s = null),
      a = null,
      u = i
    do {
      var d = u.lane
      if ((Nr & d) === d)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)))
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        ;(a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Ne.lanes |= d),
          (Or |= d))
      }
      u = u.next
    } while (u !== null && u !== i)
    ;(a === null ? (s = r) : (a.next = l),
      sn(r, t.memoizedState) || (Et = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r))
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do ((i = o.lane), (Ne.lanes |= i), (Or |= i), (o = o.next))
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Va(e) {
  var t = Qt(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do ((i = e(i, s.action)), (s = s.next))
    while (s !== o)
    ;(sn(i, t.memoizedState) || (Et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i))
  }
  return [i, r]
}
function Hh() {}
function Vh(e, t) {
  var n = Ne,
    r = Qt(),
    o = t(),
    i = !sn(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Et = !0)),
    (r = r.queue),
    td(Qh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ti(9, Gh.bind(null, n, r, o, t), void 0, null),
      Je === null)
    )
      throw Error(_(349))
    Nr & 30 || Kh(n, t, o)
  }
  return o
}
function Kh(e, t, n) {
  ;((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
}
function Gh(e, t, n, r) {
  ;((t.value = n), (t.getSnapshot = r), Yh(t) && Xh(e))
}
function Qh(e, t, n) {
  return n(function () {
    Yh(t) && Xh(e)
  })
}
function Yh(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !sn(e, n)
  } catch {
    return !0
  }
}
function Xh(e) {
  var t = Ln(e, 1)
  t !== null && on(t, e, 1, -1)
}
function Bf(e) {
  var t = fn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ri,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = J0.bind(null, Ne, e)),
    [t.memoizedState, e]
  )
}
function Ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function qh() {
  return Qt().memoizedState
}
function Ns(e, t, n, r) {
  var o = fn()
  ;((Ne.flags |= e),
    (o.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r)))
}
function Rl(e, t, n, r) {
  var o = Qt()
  r = r === void 0 ? null : r
  var i = void 0
  if (Ye !== null) {
    var s = Ye.memoizedState
    if (((i = s.destroy), r !== null && Zc(r, s.deps))) {
      o.memoizedState = Ti(t, n, i, r)
      return
    }
  }
  ;((Ne.flags |= e), (o.memoizedState = Ti(1 | t, n, i, r)))
}
function Df(e, t) {
  return Ns(8390656, 8, e, t)
}
function td(e, t) {
  return Rl(2048, 8, e, t)
}
function Zh(e, t) {
  return Rl(4, 2, e, t)
}
function Jh(e, t) {
  return Rl(4, 4, e, t)
}
function eg(e, t) {
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
function tg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Rl(4, 4, eg.bind(null, t, e), n)
  )
}
function nd() {}
function ng(e, t) {
  var n = Qt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Zc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function rg(e, t) {
  var n = Qt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Zc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function og(e, t, n) {
  return Nr & 21
    ? (sn(n, t) || ((n = uh()), (Ne.lanes |= n), (Or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Et = !0)), (e.memoizedState = n))
}
function q0(e, t) {
  var n = ve
  ;((ve = n !== 0 && 4 > n ? n : 4), e(!0))
  var r = Ua.transition
  Ua.transition = {}
  try {
    ;(e(!1), t())
  } finally {
    ;((ve = n), (Ua.transition = r))
  }
}
function ig() {
  return Qt().memoizedState
}
function Z0(e, t, n) {
  var r = nr(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sg(e))
  )
    lg(t, n)
  else if (((n = Dh(e, t, n, r)), n !== null)) {
    var o = Ct()
    ;(on(n, e, r, o), ag(n, t, r))
  }
}
function J0(e, t, n) {
  var r = nr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (sg(e)) lg(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = l), sn(l, s))) {
          var a = t.interleaved
          ;(a === null
            ? ((o.next = o), Gc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o))
          return
        }
      } catch {
      } finally {
      }
    ;((n = Dh(e, t, o, r)),
      n !== null && ((o = Ct()), on(n, e, r, o), ag(n, t, r)))
  }
}
function sg(e) {
  var t = e.alternate
  return e === Ne || (t !== null && t === Ne)
}
function lg(e, t) {
  li = ll = !0
  var n = e.pending
  ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t))
}
function ag(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n))
  }
}
var al = {
    readContext: Gt,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1,
  },
  e1 = {
    readContext: Gt,
    useCallback: function (e, t) {
      return ((fn().memoizedState = [e, t === void 0 ? null : t]), e)
    },
    useContext: Gt,
    useEffect: Df,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ns(4194308, 4, eg.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ns(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ns(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = fn()
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      )
    },
    useReducer: function (e, t, n) {
      var r = fn()
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
        (e = e.dispatch = Z0.bind(null, Ne, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = fn()
      return ((e = { current: e }), (t.memoizedState = e))
    },
    useState: Bf,
    useDebugValue: nd,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e)
    },
    useTransition: function () {
      var e = Bf(!1),
        t = e[0]
      return ((e = q0.bind(null, e[1])), (fn().memoizedState = e), [t, e])
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ne,
        o = fn()
      if (Ie) {
        if (n === void 0) throw Error(_(407))
        n = n()
      } else {
        if (((n = t()), Je === null)) throw Error(_(349))
        Nr & 30 || Kh(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        Df(Qh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ti(9, Gh.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = fn(),
        t = Je.identifierPrefix
      if (Ie) {
        var n = In,
          r = Tn
        ;((n = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = $i++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'))
      } else ((n = X0++), (t = ':' + t + 'r' + n.toString(32) + ':'))
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  t1 = {
    readContext: Gt,
    useCallback: ng,
    useContext: Gt,
    useEffect: td,
    useImperativeHandle: tg,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: rg,
    useReducer: Ha,
    useRef: qh,
    useState: function () {
      return Ha(Ri)
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = Qt()
      return og(t, Ye.memoizedState, e)
    },
    useTransition: function () {
      var e = Ha(Ri)[0],
        t = Qt().memoizedState
      return [e, t]
    },
    useMutableSource: Hh,
    useSyncExternalStore: Vh,
    useId: ig,
    unstable_isNewReconciler: !1,
  },
  n1 = {
    readContext: Gt,
    useCallback: ng,
    useContext: Gt,
    useEffect: td,
    useImperativeHandle: tg,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: rg,
    useReducer: Va,
    useRef: qh,
    useState: function () {
      return Va(Ri)
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = Qt()
      return Ye === null ? (t.memoizedState = e) : og(t, Ye.memoizedState, e)
    },
    useTransition: function () {
      var e = Va(Ri)[0],
        t = Qt().memoizedState
      return [e, t]
    },
    useMutableSource: Hh,
    useSyncExternalStore: Vh,
    useId: ig,
    unstable_isNewReconciler: !1,
  }
function Jt(e, t) {
  if (e && e.defaultProps) {
    ;((t = Oe({}, t)), (e = e.defaultProps))
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Bu(e, t, n, r) {
  ;((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n))
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _r(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ct(),
      o = nr(e),
      i = Mn(r, o)
    ;((i.payload = t),
      n != null && (i.callback = n),
      (t = er(e, i, o)),
      t !== null && (on(t, e, o, r), Is(t, e, o)))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ct(),
      o = nr(e),
      i = Mn(r, o)
    ;((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = er(e, i, o)),
      t !== null && (on(t, e, o, r), Is(t, e, o)))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ct(),
      r = nr(e),
      o = Mn(n, r)
    ;((o.tag = 2),
      t != null && (o.callback = t),
      (t = er(e, o, r)),
      t !== null && (on(t, e, r, n), Is(t, e, r)))
  },
}
function Wf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ci(n, r) || !Ci(o, i)
        : !0
  )
}
function ug(e, t, n) {
  var r = !1,
    o = lr,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Gt(i))
      : ((o = $t(t) ? Ir : yt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? So(e, o) : lr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Uf(e, t, n, r) {
  ;((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null))
}
function Du(e, t, n, r) {
  var o = e.stateNode
  ;((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Qc(e))
  var i = t.contextType
  ;(typeof i == 'object' && i !== null
    ? (o.context = Gt(i))
    : ((i = $t(t) ? Ir : yt.current), (o.context = So(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Bu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Tl.enqueueReplaceState(o, o.state, null),
      il(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
}
function bo(e, t) {
  try {
    var n = '',
      r = t
    do ((n += Iv(r)), (r = r.return))
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
function Ka(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Wu(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var r1 = typeof WeakMap == 'function' ? WeakMap : Map
function cg(e, t, n) {
  ;((n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null }))
  var r = t.value
  return (
    (n.callback = function () {
      ;(cl || ((cl = !0), (Zu = r)), Wu(e, t))
    }),
    n
  )
}
function dg(e, t, n) {
  ;((n = Mn(-1, n)), (n.tag = 3))
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;((n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Wu(e, t)
      }))
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ;(Wu(e, t),
          typeof r != 'function' &&
            (tr === null ? (tr = new Set([this])) : tr.add(this)))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function Hf(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new r1()
    var o = new Set()
    r.set(t, o)
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)))
  o.has(n) || (o.add(n), (e = y1.bind(null, e, t, n)), t.then(e, e))
}
function Vf(e) {
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
function Kf(e, t, n, r, o) {
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
              : ((t = Mn(-1, 1)), (t.tag = 2), er(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var o1 = Fn.ReactCurrentOwner,
  Et = !1
function xt(e, t, n, r) {
  t.child = e === null ? Bh(t, null, n, r) : Co(t, e.child, n, r)
}
function Gf(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    mo(t, o),
    (r = Jc(e, t, n, r, i, o)),
    (n = ed()),
    e !== null && !Et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zn(e, t, o))
      : (Ie && n && Dc(t), (t.flags |= 1), xt(e, t, r, o), t.child)
  )
}
function Qf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !cd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fg(e, t, i, r, o))
      : ((e = As(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Ci), n(s, r) && e.ref === t.ref)
    )
      return zn(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = rr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function fg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Ci(i, r) && e.ref === t.ref)
      if (((Et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Et = !0)
      else return ((t.lanes = e.lanes), zn(e, t, o))
  }
  return Uu(e, t, n, r, o)
}
function pg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(lo, Mt),
        (Mt |= n))
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
          ke(lo, Mt),
          (Mt |= e),
          null
        )
      ;((t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        ke(lo, Mt),
        (Mt |= r))
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ke(lo, Mt),
      (Mt |= r))
  return (xt(e, t, o, n), t.child)
}
function mg(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Uu(e, t, n, r, o) {
  var i = $t(n) ? Ir : yt.current
  return (
    (i = So(t, i)),
    mo(t, o),
    (n = Jc(e, t, n, r, i, o)),
    (r = ed()),
    e !== null && !Et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zn(e, t, o))
      : (Ie && r && Dc(t), (t.flags |= 1), xt(e, t, n, o), t.child)
  )
}
function Yf(e, t, n, r, o) {
  if ($t(n)) {
    var i = !0
    el(t)
  } else i = !1
  if ((mo(t, o), t.stateNode === null))
    (Os(e, t), ug(t, n, r), Du(t, n, r, o), (r = !0))
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Gt(u))
      : ((u = $t(n) ? Ir : yt.current), (u = So(t, u)))
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    ;(f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Uf(t, s, r, u)),
      (Vn = !1))
    var p = t.memoizedState
    ;((s.state = p),
      il(t, r, s, o),
      (a = t.memoizedState),
      l !== r || p !== a || Pt.current || Vn
        ? (typeof d == 'function' && (Bu(t, n, d, r), (a = t.memoizedState)),
          (l = Vn || Wf(t, n, l, r, p, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)))
  } else {
    ;((s = t.stateNode),
      Wh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Jt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (p = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Gt(a))
        : ((a = $t(n) ? Ir : yt.current), (a = So(t, a))))
    var y = n.getDerivedStateFromProps
    ;((d =
      typeof y == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || p !== a) && Uf(t, s, r, a)),
      (Vn = !1),
      (p = t.memoizedState),
      (s.state = p),
      il(t, r, s, o))
    var v = t.memoizedState
    l !== f || p !== v || Pt.current || Vn
      ? (typeof y == 'function' && (Bu(t, n, y, r), (v = t.memoizedState)),
        (u = Vn || Wf(t, n, u, r, p, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Hu(e, t, n, r, i, o)
}
function Hu(e, t, n, r, o, i) {
  mg(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return (o && Lf(t, n, !1), zn(e, t, i))
  ;((r = t.stateNode), (o1.current = t))
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Co(t, e.child, null, i)), (t.child = Co(t, null, l, i)))
      : xt(e, t, l, i),
    (t.memoizedState = r.state),
    o && Lf(t, n, !0),
    t.child
  )
}
function hg(e) {
  var t = e.stateNode
  ;(t.pendingContext
    ? Of(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Of(e, t.context, !1),
    Yc(e, t.containerInfo))
}
function Xf(e, t, n, r, o) {
  return (xo(), Uc(o), (t.flags |= 256), xt(e, t, n, r), t.child)
}
var Vu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ku(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function gg(e, t, n) {
  var r = t.pendingProps,
    o = Me.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ke(Me, o & 1),
    e === null)
  )
    return (
      Fu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Nl(s, r, 0, null)),
              (e = $r(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ku(n)),
              (t.memoizedState = Vu),
              e)
            : rd(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return i1(e, t, s, r, l, o, n)
  if (i) {
    ;((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling))
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = rr(l, i)) : ((i = $r(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ku(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vu),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = rr(i, { mode: 'visible', children: r.children })),
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
function rd(e, t) {
  return (
    (t = Nl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ds(e, t, n, r) {
  return (
    r !== null && Uc(r),
    Co(t, e.child, null, n),
    (e = rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function i1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ka(Error(_(422)))), ds(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Nl({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = $r(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Co(t, e.child, null, s),
          (t.child.memoizedState = Ku(s)),
          (t.memoizedState = Vu),
          i)
  if (!(t.mode & 1)) return ds(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
    return (
      (r = l),
      (i = Error(_(419))),
      (r = Ka(i, r, void 0)),
      ds(e, t, s, r)
    )
  }
  if (((l = (s & e.childLanes) !== 0), Et || l)) {
    if (((r = Je), r !== null)) {
      switch (s & -s) {
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
      ;((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ln(e, o), on(r, e, o, -1)))
    }
    return (ud(), (r = Ka(Error(_(421)))), ds(e, t, s, r))
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = v1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ot = Jn(o.nextSibling)),
      (Lt = t),
      (Ie = !0),
      (tn = null),
      e !== null &&
        ((Wt[Ut++] = Tn),
        (Wt[Ut++] = In),
        (Wt[Ut++] = Mr),
        (Tn = e.id),
        (In = e.overflow),
        (Mr = t)),
      (t = rd(t, r.children)),
      (t.flags |= 4096),
      t)
}
function qf(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  ;(r !== null && (r.lanes |= t), _u(e.return, t, n))
}
function Ga(e, t, n, r, o) {
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
function yg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((xt(e, t, r.children, n), (r = Me.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128))
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, n, t)
        else if (e.tag === 19) qf(e, n, t)
        else if (e.child !== null) {
          ;((e.child.return = e), (e = e.child))
          continue
        }
        if (e === t) break e
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;((e.sibling.return = e.return), (e = e.sibling))
      }
    r &= 1
  }
  if ((ke(Me, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null;)
          ((e = n.alternate),
            e !== null && sl(e) === null && (o = n),
            (n = n.sibling))
        ;((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ga(t, !1, o, n, i))
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null;) {
          if (((e = o.alternate), e !== null && sl(e) === null)) {
            t.child = o
            break
          }
          ;((e = o.sibling), (o.sibling = n), (n = o), (o = e))
        }
        Ga(t, !0, n, null, i)
        break
      case 'together':
        Ga(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Os(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function zn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(_(153))
  if (t.child !== null) {
    for (
      e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling), (n = n.sibling = rr(e, e.pendingProps)), (n.return = t))
    n.sibling = null
  }
  return t.child
}
function s1(e, t, n) {
  switch (t.tag) {
    case 3:
      ;(hg(t), xo())
      break
    case 5:
      Uh(t)
      break
    case 1:
      $t(t.type) && el(t)
      break
    case 4:
      Yc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      ;(ke(rl, r._currentValue), (r._currentValue = o))
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(Me, Me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? gg(e, t, n)
            : (ke(Me, Me.current & 1),
              (e = zn(e, t, n)),
              e !== null ? e.sibling : null)
      ke(Me, Me.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yg(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ke(Me, Me.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return ((t.lanes = 0), pg(e, t, n))
  }
  return zn(e, t, n)
}
var vg, Gu, Sg, xg
vg = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;((n.child.return = n), (n = n.child))
      continue
    }
    if (n === t) break
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;((n.sibling.return = n.return), (n = n.sibling))
  }
}
Gu = function () {}
Sg = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;((e = t.stateNode), br(vn.current))
    var i = null
    switch (n) {
      case 'input':
        ;((o = hu(e, o)), (r = hu(e, r)), (i = []))
        break
      case 'select':
        ;((o = Oe({}, o, { value: void 0 })),
          (r = Oe({}, r, { value: void 0 })),
          (i = []))
        break
      case 'textarea':
        ;((o = vu(e, o)), (r = vu(e, r)), (i = []))
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Zs)
    }
    xu(n, r)
    var s
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (mi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''))
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]))
          } else (n || (i || (i = []), i.push(u, n)), (n = a))
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (mi.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && $e('scroll', e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a))
    }
    n && (i = i || []).push('style', n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
xg = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function _o(e, t) {
  if (!Ie)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling))
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling))
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null;)
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling))
  else
    for (o = e.child; o !== null;)
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling))
  return ((e.subtreeFlags |= r), (e.childLanes = n), t)
}
function l1(e, t, n) {
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
      return (pt(t), null)
    case 1:
      return ($t(t.type) && Js(), pt(t), null)
    case 3:
      return (
        (r = t.stateNode),
        wo(),
        Re(Pt),
        Re(yt),
        qc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (us(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (tc(tn), (tn = null)))),
        Gu(e, t),
        pt(t),
        null
      )
    case 5:
      Xc(t)
      var o = br(Pi.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        (Sg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166))
          return (pt(t), null)
        }
        if (((e = br(vn.current)), us(t))) {
          ;((r = t.stateNode), (n = t.type))
          var i = t.memoizedProps
          switch (((r[hn] = t), (r[ki] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ;($e('cancel', r), $e('close', r))
              break
            case 'iframe':
            case 'object':
            case 'embed':
              $e('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < qo.length; o++) $e(qo[o], r)
              break
            case 'source':
              $e('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ;($e('error', r), $e('load', r))
              break
            case 'details':
              $e('toggle', r)
              break
            case 'input':
              ;(sf(r, i), $e('invalid', r))
              break
            case 'select':
              ;((r._wrapperState = { wasMultiple: !!i.multiple }),
                $e('invalid', r))
              break
            case 'textarea':
              ;(af(r, i), $e('invalid', r))
          }
          ;(xu(n, i), (o = null))
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      as(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      as(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : mi.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  $e('scroll', r)
            }
          switch (n) {
            case 'input':
              ;(es(r), lf(r, i, !0))
              break
            case 'textarea':
              ;(es(r), uf(r))
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Zs)
          }
          ;((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4))
        } else {
          ;((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Qm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[hn] = t),
            (e[ki] = r),
            vg(e, t, !1, !1),
            (t.stateNode = e))
          e: {
            switch (((s = Cu(n, r)), n)) {
              case 'dialog':
                ;($e('cancel', e), $e('close', e), (o = r))
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ;($e('load', e), (o = r))
                break
              case 'video':
              case 'audio':
                for (o = 0; o < qo.length; o++) $e(qo[o], e)
                o = r
                break
              case 'source':
                ;($e('error', e), (o = r))
                break
              case 'img':
              case 'image':
              case 'link':
                ;($e('error', e), $e('load', e), (o = r))
                break
              case 'details':
                ;($e('toggle', e), (o = r))
                break
              case 'input':
                ;(sf(e, r), (o = hu(e, r)), $e('invalid', e))
                break
              case 'option':
                o = r
                break
              case 'select':
                ;((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Oe({}, r, { value: void 0 })),
                  $e('invalid', e))
                break
              case 'textarea':
                ;(af(e, r), (o = vu(e, r)), $e('invalid', e))
                break
              default:
                o = r
            }
            ;(xu(n, o), (l = o))
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i]
                i === 'style'
                  ? qm(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && Ym(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && hi(e, a)
                        : typeof a == 'number' && hi(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (mi.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && $e('scroll', e)
                          : a != null && $c(e, i, a, s))
              }
            switch (n) {
              case 'input':
                ;(es(e), lf(e, r, !1))
                break
              case 'textarea':
                ;(es(e), uf(e))
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + sr(r.value))
                break
              case 'select':
                ;((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? uo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      uo(e, !!r.multiple, r.defaultValue, !0))
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Zs)
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
      return (pt(t), null)
    case 6:
      if (e && t.stateNode != null) xg(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166))
        if (((n = br(Pi.current)), br(vn.current), us(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[hn] = t),
            (i = r.nodeValue !== n) && ((e = Lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                as(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  as(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[hn] = t),
            (t.stateNode = r))
      }
      return (pt(t), null)
    case 13:
      if (
        (Re(Me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ie && Ot !== null && t.mode & 1 && !(t.flags & 128))
          (Fh(), xo(), (t.flags |= 98560), (i = !1))
        else if (((i = us(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317))
            i[hn] = t
          } else
            (xo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
          ;(pt(t), (i = !1))
        } else (tn !== null && (tc(tn), (tn = null)), (i = !0))
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Me.current & 1 ? Xe === 0 && (Xe = 3) : ud())),
          t.updateQueue !== null && (t.flags |= 4),
          pt(t),
          null)
    case 4:
      return (
        wo(),
        Gu(e, t),
        e === null && wi(t.stateNode.containerInfo),
        pt(t),
        null
      )
    case 10:
      return (Kc(t.type._context), pt(t), null)
    case 17:
      return ($t(t.type) && Js(), pt(t), null)
    case 19:
      if ((Re(Me), (i = t.memoizedState), i === null)) return (pt(t), null)
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) _o(i, !1)
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((s = sl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    _o(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling))
                return (ke(Me, (Me.current & 1) | 2), t.child)
              }
              e = e.sibling
            }
          i.tail !== null &&
            Ue() > ko &&
            ((t.flags |= 128), (r = !0), _o(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = sl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _o(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Ie)
            )
              return (pt(t), null)
          } else
            2 * Ue() - i.renderingStartTime > ko &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _o(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ue()),
          (t.sibling = null),
          (n = Me.current),
          ke(Me, r ? (n & 1) | 2 : n & 1),
          t)
        : (pt(t), null)
    case 22:
    case 23:
      return (
        ad(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Mt & 1073741824 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(_(156, t.tag))
}
function a1(e, t) {
  switch ((Wc(t), t.tag)) {
    case 1:
      return (
        $t(t.type) && Js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        wo(),
        Re(Pt),
        Re(yt),
        qc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return (Xc(t), null)
    case 13:
      if (
        (Re(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340))
        xo()
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return (Re(Me), null)
    case 4:
      return (wo(), null)
    case 10:
      return (Kc(t.type._context), null)
    case 22:
    case 23:
      return (ad(), null)
    case 24:
      return null
    default:
      return null
  }
}
var fs = !1,
  gt = !1,
  u1 = typeof WeakSet == 'function' ? WeakSet : Set,
  U = null
function so(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        je(e, t, r)
      }
    else n.current = null
}
function Qu(e, t, n) {
  try {
    n()
  } catch (r) {
    je(e, t, r)
  }
}
var Zf = !1
function c1(e, t) {
  if (((Mu = Ys), (e = Eh()), Bc(e))) {
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
            ;(n.nodeType, i.nodeType)
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((p = f), (f = y))
            for (;;) {
              if (f === e) break t
              if (
                (p === n && ++u === o && (l = s),
                p === i && ++d === r && (a = s),
                (y = f.nextSibling) !== null)
              )
                break
              ;((f = p), (p = f.parentNode))
            }
            f = y
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Nu = { focusedElem: e, selectionRange: n }, Ys = !1, U = t; U !== null;)
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (U = e))
    else
      for (; U !== null;) {
        t = U
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var C = v.memoizedProps,
                    k = v.memoizedState,
                    h = t.stateNode,
                    g = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Jt(t.type, C),
                      k,
                    )
                  h.__reactInternalSnapshotBeforeUpdate = g
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(_(163))
            }
        } catch (S) {
          je(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;((e.return = t.return), (U = e))
          break
        }
        U = t.return
      }
  return ((v = Zf), (Zf = !1), v)
}
function ai(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;((o.destroy = void 0), i !== void 0 && Qu(t, n, i))
      }
      o = o.next
    } while (o !== r)
  }
}
function Il(e, t) {
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
function Yu(e) {
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
function Cg(e) {
  var t = e.alternate
  ;(t !== null && ((e.alternate = null), Cg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[hn], delete t[ki], delete t[zu], delete t[K0], delete t[G0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null))
}
function wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Jf(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || wg(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;((e.child.return = e), (e = e.child))
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Xu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zs)))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xu(e, t, n), e = e.sibling; e !== null;) (Xu(e, t, n), (e = e.sibling))
}
function qu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null;) (qu(e, t, n), (e = e.sibling))
}
var rt = null,
  en = !1
function Dn(e, t, n) {
  for (n = n.child; n !== null;) (bg(e, t, n), (n = n.sibling))
}
function bg(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == 'function')
    try {
      yn.onCommitFiberUnmount(wl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      gt || so(n, t)
    case 6:
      var r = rt,
        o = en
      ;((rt = null),
        Dn(e, t, n),
        (rt = r),
        (en = o),
        rt !== null &&
          (en
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode)))
      break
    case 18:
      rt !== null &&
        (en
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ba(e.parentNode, n)
              : e.nodeType === 1 && Ba(e, n),
            Si(e))
          : Ba(rt, n.stateNode))
      break
    case 4:
      ;((r = rt),
        (o = en),
        (rt = n.stateNode.containerInfo),
        (en = !0),
        Dn(e, t, n),
        (rt = r),
        (en = o))
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !gt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Qu(n, t, s),
            (o = o.next))
        } while (o !== r)
      }
      Dn(e, t, n)
      break
    case 1:
      if (
        !gt &&
        (so(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount())
        } catch (l) {
          je(n, t, l)
        }
      Dn(e, t, n)
      break
    case 21:
      Dn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((gt = (r = gt) || n.memoizedState !== null), Dn(e, t, n), (gt = r))
        : Dn(e, t, n)
      break
    default:
      Dn(e, t, n)
  }
}
function ep(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    ;(n === null && (n = e.stateNode = new u1()),
      t.forEach(function (r) {
        var o = S1.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      }))
  }
}
function Zt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          l = s
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              ;((rt = l.stateNode), (en = !1))
              break e
            case 3:
              ;((rt = l.stateNode.containerInfo), (en = !0))
              break e
            case 4:
              ;((rt = l.stateNode.containerInfo), (en = !0))
              break e
          }
          l = l.return
        }
        if (rt === null) throw Error(_(160))
        ;(bg(i, s, o), (rt = null), (en = !1))
        var a = o.alternate
        ;(a !== null && (a.return = null), (o.return = null))
      } catch (u) {
        je(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (kg(t, e), (t = t.sibling))
}
function kg(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), an(e), r & 4)) {
        try {
          ;(ai(3, e, e.return), Il(3, e))
        } catch (C) {
          je(e, e.return, C)
        }
        try {
          ai(5, e, e.return)
        } catch (C) {
          je(e, e.return, C)
        }
      }
      break
    case 1:
      ;(Zt(t, e), an(e), r & 512 && n !== null && so(n, n.return))
      break
    case 5:
      if (
        (Zt(t, e),
        an(e),
        r & 512 && n !== null && so(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          hi(o, '')
        } catch (C) {
          je(e, e.return, C)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            ;(l === 'input' && i.type === 'radio' && i.name != null && Km(o, i),
              Cu(l, s))
            var u = Cu(l, i)
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                f = a[s + 1]
              d === 'style'
                ? qm(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? Ym(o, f)
                  : d === 'children'
                    ? hi(o, f)
                    : $c(o, d, f, u)
            }
            switch (l) {
              case 'input':
                gu(o, i)
                break
              case 'textarea':
                Gm(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var y = i.value
                y != null
                  ? uo(o, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? uo(o, !!i.multiple, i.defaultValue, !0)
                      : uo(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[ki] = i
          } catch (C) {
            je(e, e.return, C)
          }
      }
      break
    case 6:
      if ((Zt(t, e), an(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162))
        ;((o = e.stateNode), (i = e.memoizedProps))
        try {
          o.nodeValue = i
        } catch (C) {
          je(e, e.return, C)
        }
      }
      break
    case 3:
      if (
        (Zt(t, e), an(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Si(t.containerInfo)
        } catch (C) {
          je(e, e.return, C)
        }
      break
    case 4:
      ;(Zt(t, e), an(e))
      break
    case 13:
      ;(Zt(t, e),
        an(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sd = Ue())),
        r & 4 && ep(e))
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((gt = (u = gt) || d), Zt(t, e), (gt = u)) : Zt(t, e),
        an(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (U = e, d = e.child; d !== null;) {
            for (f = U = d; U !== null;) {
              switch (((p = U), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, p, p.return)
                  break
                case 1:
                  so(p, p.return)
                  var v = p.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;((r = p), (n = p.return))
                    try {
                      ;((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount())
                    } catch (C) {
                      je(r, n, C)
                    }
                  }
                  break
                case 5:
                  so(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    np(f)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (U = y)) : np(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ;) {
          if (f.tag === 5) {
            if (d === null) {
              d = f
              try {
                ;((o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = Xm('display', s))))
              } catch (C) {
                je(e, e.return, C)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (C) {
                je(e, e.return, C)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;((f.child.return = f), (f = f.child))
            continue
          }
          if (f === e) break e
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e) break e
            ;(d === f && (d = null), (f = f.return))
          }
          ;(d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling))
        }
      }
      break
    case 19:
      ;(Zt(t, e), an(e), r & 4 && ep(e))
      break
    case 21:
      break
    default:
      ;(Zt(t, e), an(e))
  }
}
function an(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (wg(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(_(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (hi(o, ''), (r.flags &= -33))
          var i = Jf(e)
          qu(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Jf(e)
          Xu(e, l, s)
          break
        default:
          throw Error(_(161))
      }
    } catch (a) {
      je(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function d1(e, t, n) {
  ;((U = e), Eg(e))
}
function Eg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null;) {
    var o = U,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || fs
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || gt
        l = fs
        var u = gt
        if (((fs = s), (gt = a) && !u))
          for (U = o; U !== null;)
            ((s = U),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rp(o)
                : a !== null
                  ? ((a.return = s), (U = a))
                  : rp(o))
        for (; i !== null;) ((U = i), Eg(i), (i = i.sibling))
        ;((U = o), (fs = l), (gt = u))
      }
      tp(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (U = i)) : tp(e)
  }
}
function tp(e) {
  for (; U !== null;) {
    var t = U
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || Il(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !gt)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Jt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && _f(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                _f(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
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
                  var d = u.memoizedState
                  if (d !== null) {
                    var f = d.dehydrated
                    f !== null && Si(f)
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
              throw Error(_(163))
          }
        gt || (t.flags & 512 && Yu(t))
      } catch (p) {
        je(t, t.return, p)
      }
    }
    if (t === e) {
      U = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;((n.return = t.return), (U = n))
      break
    }
    U = t.return
  }
}
function np(e) {
  for (; U !== null;) {
    var t = U
    if (t === e) {
      U = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;((n.return = t.return), (U = n))
      break
    }
    U = t.return
  }
}
function rp(e) {
  for (; U !== null;) {
    var t = U
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Il(4, t)
          } catch (a) {
            je(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              je(t, o, a)
            }
          }
          var i = t.return
          try {
            Yu(t)
          } catch (a) {
            je(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            Yu(t)
          } catch (a) {
            je(t, s, a)
          }
      }
    } catch (a) {
      je(t, t.return, a)
    }
    if (t === e) {
      U = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;((l.return = t.return), (U = l))
      break
    }
    U = t.return
  }
}
var f1 = Math.ceil,
  ul = Fn.ReactCurrentDispatcher,
  od = Fn.ReactCurrentOwner,
  Kt = Fn.ReactCurrentBatchConfig,
  de = 0,
  Je = null,
  Ge = null,
  st = 0,
  Mt = 0,
  lo = dr(0),
  Xe = 0,
  Ii = null,
  Or = 0,
  Ml = 0,
  id = 0,
  ui = null,
  kt = null,
  sd = 0,
  ko = 1 / 0,
  $n = null,
  cl = !1,
  Zu = null,
  tr = null,
  ps = !1,
  Yn = null,
  dl = 0,
  ci = 0,
  Ju = null,
  Ls = -1,
  zs = 0
function Ct() {
  return de & 6 ? Ue() : Ls !== -1 ? Ls : (Ls = Ue())
}
function nr(e) {
  return e.mode & 1
    ? de & 2 && st !== 0
      ? st & -st
      : Y0.transition !== null
        ? (zs === 0 && (zs = uh()), zs)
        : ((e = ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gh(e.type))),
          e)
    : 1
}
function on(e, t, n, r) {
  if (50 < ci) throw ((ci = 0), (Ju = null), Error(_(185)))
  ;(_i(e, n, r),
    (!(de & 2) || e !== Je) &&
      (e === Je && (!(de & 2) && (Ml |= n), Xe === 4 && Gn(e, st)),
      Rt(e, r),
      n === 1 && de === 0 && !(t.mode & 1) && ((ko = Ue() + 500), $l && fr())))
}
function Rt(e, t) {
  var n = e.callbackNode
  Yv(e, t)
  var r = Qs(e, e === Je ? st : 0)
  if (r === 0)
    (n !== null && ff(n), (e.callbackNode = null), (e.callbackPriority = 0))
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ff(n), t === 1))
      (e.tag === 0 ? Q0(op.bind(null, e)) : zh(op.bind(null, e)),
        H0(function () {
          !(de & 6) && fr()
        }),
        (n = null))
    else {
      switch (ch(r)) {
        case 1:
          n = Nc
          break
        case 4:
          n = lh
          break
        case 16:
          n = Gs
          break
        case 536870912:
          n = ah
          break
        default:
          n = Gs
      }
      n = Og(n, Pg.bind(null, e))
    }
    ;((e.callbackPriority = t), (e.callbackNode = n))
  }
}
function Pg(e, t) {
  if (((Ls = -1), (zs = 0), de & 6)) throw Error(_(327))
  var n = e.callbackNode
  if (ho() && e.callbackNode !== n) return null
  var r = Qs(e, e === Je ? st : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r)
  else {
    t = r
    var o = de
    de |= 2
    var i = Rg()
    ;(Je !== e || st !== t) && (($n = null), (ko = Ue() + 500), Pr(e, t))
    do
      try {
        h1()
        break
      } catch (l) {
        $g(e, l)
      }
    while (!0)
    ;(Vc(),
      (ul.current = i),
      (de = o),
      Ge !== null ? (t = 0) : ((Je = null), (st = 0), (t = Xe)))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Pu(e)), o !== 0 && ((r = o), (t = ec(e, o)))), t === 1)
    )
      throw ((n = Ii), Pr(e, 0), Gn(e, r), Rt(e, Ue()), n)
    if (t === 6) Gn(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !p1(o) &&
          ((t = fl(e, r)),
          t === 2 && ((i = Pu(e)), i !== 0 && ((r = i), (t = ec(e, i)))),
          t === 1))
      )
        throw ((n = Ii), Pr(e, 0), Gn(e, r), Rt(e, Ue()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345))
        case 2:
          yr(e, kt, $n)
          break
        case 3:
          if (
            (Gn(e, r), (r & 130023424) === r && ((t = sd + 500 - Ue()), 10 < t))
          ) {
            if (Qs(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ;(Ct(), (e.pingedLanes |= e.suspendedLanes & o))
              break
            }
            e.timeoutHandle = Lu(yr.bind(null, e, kt, $n), t)
            break
          }
          yr(e, kt, $n)
          break
        case 4:
          if ((Gn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var s = 31 - rn(r)
            ;((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i))
          }
          if (
            ((r = o),
            (r = Ue() - r),
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
                          : 1960 * f1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lu(yr.bind(null, e, kt, $n), r)
            break
          }
          yr(e, kt, $n)
          break
        case 5:
          yr(e, kt, $n)
          break
        default:
          throw Error(_(329))
      }
    }
  }
  return (Rt(e, Ue()), e.callbackNode === n ? Pg.bind(null, e) : null)
}
function ec(e, t) {
  var n = ui
  return (
    e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = kt), (kt = n), t !== null && tc(t)),
    e
  )
}
function tc(e) {
  kt === null ? (kt = e) : kt.push.apply(kt, e)
}
function p1(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!sn(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n))
    else {
      if (t === e) break
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
  }
  return !0
}
function Gn(e, t) {
  for (
    t &= ~id,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rn(t),
      r = 1 << n
    ;((e[n] = -1), (t &= ~r))
  }
}
function op(e) {
  if (de & 6) throw Error(_(327))
  ho()
  var t = Qs(e, 0)
  if (!(t & 1)) return (Rt(e, Ue()), null)
  var n = fl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Pu(e)
    r !== 0 && ((t = r), (n = ec(e, r)))
  }
  if (n === 1) throw ((n = Ii), Pr(e, 0), Gn(e, t), Rt(e, Ue()), n)
  if (n === 6) throw Error(_(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yr(e, kt, $n),
    Rt(e, Ue()),
    null
  )
}
function ld(e, t) {
  var n = de
  de |= 1
  try {
    return e(t)
  } finally {
    ;((de = n), de === 0 && ((ko = Ue() + 500), $l && fr()))
  }
}
function Lr(e) {
  Yn !== null && Yn.tag === 0 && !(de & 6) && ho()
  var t = de
  de |= 1
  var n = Kt.transition,
    r = ve
  try {
    if (((Kt.transition = null), (ve = 1), e)) return e()
  } finally {
    ;((ve = r), (Kt.transition = n), (de = t), !(de & 6) && fr())
  }
}
function ad() {
  ;((Mt = lo.current), Re(lo))
}
function Pr(e, t) {
  ;((e.finishedWork = null), (e.finishedLanes = 0))
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), U0(n)), Ge !== null))
    for (n = Ge.return; n !== null;) {
      var r = n
      switch ((Wc(r), r.tag)) {
        case 1:
          ;((r = r.type.childContextTypes), r != null && Js())
          break
        case 3:
          ;(wo(), Re(Pt), Re(yt), qc())
          break
        case 5:
          Xc(r)
          break
        case 4:
          wo()
          break
        case 13:
          Re(Me)
          break
        case 19:
          Re(Me)
          break
        case 10:
          Kc(r.type._context)
          break
        case 22:
        case 23:
          ad()
      }
      n = n.return
    }
  if (
    ((Je = e),
    (Ge = e = rr(e.current, null)),
    (st = Mt = t),
    (Xe = 0),
    (Ii = null),
    (id = Ml = Or = 0),
    (kt = ui = null),
    wr !== null)
  ) {
    for (t = 0; t < wr.length; t++)
      if (((n = wr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;((i.next = o), (r.next = s))
        }
        n.pending = r
      }
    wr = null
  }
  return e
}
function $g(e, t) {
  do {
    var n = Ge
    try {
      if ((Vc(), (Ms.current = al), ll)) {
        for (var r = Ne.memoizedState; r !== null;) {
          var o = r.queue
          ;(o !== null && (o.pending = null), (r = r.next))
        }
        ll = !1
      }
      if (
        ((Nr = 0),
        (Ze = Ye = Ne = null),
        (li = !1),
        ($i = 0),
        (od.current = null),
        n === null || n.return === null)
      ) {
        ;((Xe = 1), (Ii = t), (Ge = null))
        break
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t
        if (
          ((t = st),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            d = l,
            f = d.tag
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var y = Vf(s)
          if (y !== null) {
            ;((y.flags &= -257),
              Kf(y, s, l, i, t),
              y.mode & 1 && Hf(i, u, t),
              (t = y),
              (a = u))
            var v = t.updateQueue
            if (v === null) {
              var C = new Set()
              ;(C.add(a), (t.updateQueue = C))
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              ;(Hf(i, u, t), ud())
              break e
            }
            a = Error(_(426))
          }
        } else if (Ie && l.mode & 1) {
          var k = Vf(s)
          if (k !== null) {
            ;(!(k.flags & 65536) && (k.flags |= 256),
              Kf(k, s, l, i, t),
              Uc(bo(a, l)))
            break e
          }
        }
        ;((i = a = bo(a, l)),
          Xe !== 4 && (Xe = 2),
          ui === null ? (ui = [i]) : ui.push(i),
          (i = s))
        do {
          switch (i.tag) {
            case 3:
              ;((i.flags |= 65536), (t &= -t), (i.lanes |= t))
              var h = cg(i, a, t)
              Ff(i, h)
              break e
            case 1:
              l = a
              var g = i.type,
                m = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (tr === null || !tr.has(m))))
              ) {
                ;((i.flags |= 65536), (t &= -t), (i.lanes |= t))
                var S = dg(i, l, t)
                Ff(i, S)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Ig(n)
    } catch (P) {
      ;((t = P), Ge === n && n !== null && (Ge = n = n.return))
      continue
    }
    break
  } while (!0)
}
function Rg() {
  var e = ul.current
  return ((ul.current = al), e === null ? al : e)
}
function ud() {
  ;((Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    Je === null || (!(Or & 268435455) && !(Ml & 268435455)) || Gn(Je, st))
}
function fl(e, t) {
  var n = de
  de |= 2
  var r = Rg()
  ;(Je !== e || st !== t) && (($n = null), Pr(e, t))
  do
    try {
      m1()
      break
    } catch (o) {
      $g(e, o)
    }
  while (!0)
  if ((Vc(), (de = n), (ul.current = r), Ge !== null)) throw Error(_(261))
  return ((Je = null), (st = 0), Xe)
}
function m1() {
  for (; Ge !== null;) Tg(Ge)
}
function h1() {
  for (; Ge !== null && !Bv();) Tg(Ge)
}
function Tg(e) {
  var t = Ng(e.alternate, e, Mt)
  ;((e.memoizedProps = e.pendingProps),
    t === null ? Ig(e) : (Ge = t),
    (od.current = null))
}
function Ig(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = a1(n, t)), n !== null)) {
        ;((n.flags &= 32767), (Ge = n))
        return
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null))
      else {
        ;((Xe = 6), (Ge = null))
        return
      }
    } else if (((n = l1(n, t, Mt)), n !== null)) {
      Ge = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ge = t
      return
    }
    Ge = t = e
  } while (t !== null)
  Xe === 0 && (Xe = 5)
}
function yr(e, t, n) {
  var r = ve,
    o = Kt.transition
  try {
    ;((Kt.transition = null), (ve = 1), g1(e, t, n, r))
  } finally {
    ;((Kt.transition = o), (ve = r))
  }
  return null
}
function g1(e, t, n, r) {
  do ho()
  while (Yn !== null)
  if (de & 6) throw Error(_(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177))
  ;((e.callbackNode = null), (e.callbackPriority = 0))
  var i = n.lanes | n.childLanes
  if (
    (Xv(e, i),
    e === Je && ((Ge = Je = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ps ||
      ((ps = !0),
      Og(Gs, function () {
        return (ho(), null)
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;((i = Kt.transition), (Kt.transition = null))
    var s = ve
    ve = 1
    var l = de
    ;((de |= 4),
      (od.current = null),
      c1(e, n),
      kg(n, e),
      A0(Nu),
      (Ys = !!Mu),
      (Nu = Mu = null),
      (e.current = n),
      d1(n),
      Dv(),
      (de = l),
      (ve = s),
      (Kt.transition = i))
  } else e.current = n
  if (
    (ps && ((ps = !1), (Yn = e), (dl = o)),
    (i = e.pendingLanes),
    i === 0 && (tr = null),
    Hv(n.stateNode),
    Rt(e, Ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }))
  if (cl) throw ((cl = !1), (e = Zu), (Zu = null), e)
  return (
    dl & 1 && e.tag !== 0 && ho(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ju ? ci++ : ((ci = 0), (Ju = e))) : (ci = 0),
    fr(),
    null
  )
}
function ho() {
  if (Yn !== null) {
    var e = ch(dl),
      t = Kt.transition,
      n = ve
    try {
      if (((Kt.transition = null), (ve = 16 > e ? 16 : e), Yn === null))
        var r = !1
      else {
        if (((e = Yn), (Yn = null), (dl = 0), de & 6)) throw Error(_(331))
        var o = de
        for (de |= 4, U = e.current; U !== null;) {
          var i = U,
            s = i.child
          if (U.flags & 16) {
            var l = i.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (U = u; U !== null;) {
                  var d = U
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, d, i)
                  }
                  var f = d.child
                  if (f !== null) ((f.return = d), (U = f))
                  else
                    for (; U !== null;) {
                      d = U
                      var p = d.sibling,
                        y = d.return
                      if ((Cg(d), d === u)) {
                        U = null
                        break
                      }
                      if (p !== null) {
                        ;((p.return = y), (U = p))
                        break
                      }
                      U = y
                    }
                }
              }
              var v = i.alternate
              if (v !== null) {
                var C = v.child
                if (C !== null) {
                  v.child = null
                  do {
                    var k = C.sibling
                    ;((C.sibling = null), (C = k))
                  } while (C !== null)
                }
              }
              U = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (U = s))
          else
            e: for (; U !== null;) {
              if (((i = U), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, i, i.return)
                }
              var h = i.sibling
              if (h !== null) {
                ;((h.return = i.return), (U = h))
                break e
              }
              U = i.return
            }
        }
        var g = e.current
        for (U = g; U !== null;) {
          s = U
          var m = s.child
          if (s.subtreeFlags & 2064 && m !== null) ((m.return = s), (U = m))
          else
            e: for (s = g; U !== null;) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Il(9, l)
                  }
                } catch (P) {
                  je(l, l.return, P)
                }
              if (l === s) {
                U = null
                break e
              }
              var S = l.sibling
              if (S !== null) {
                ;((S.return = l.return), (U = S))
                break e
              }
              U = l.return
            }
        }
        if (
          ((de = o), fr(), yn && typeof yn.onPostCommitFiberRoot == 'function')
        )
          try {
            yn.onPostCommitFiberRoot(wl, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;((ve = n), (Kt.transition = t))
    }
  }
  return !1
}
function ip(e, t, n) {
  ;((t = bo(n, t)),
    (t = cg(e, t, 1)),
    (e = er(e, t, 1)),
    (t = Ct()),
    e !== null && (_i(e, 1, t), Rt(e, t)))
}
function je(e, t, n) {
  if (e.tag === 3) ip(e, e, n)
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        ip(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (tr === null || !tr.has(r)))
        ) {
          ;((e = bo(n, e)),
            (e = dg(t, e, 1)),
            (t = er(t, e, 1)),
            (e = Ct()),
            t !== null && (_i(t, 1, e), Rt(t, e)))
          break
        }
      }
      t = t.return
    }
}
function y1(e, t, n) {
  var r = e.pingCache
  ;(r !== null && r.delete(t),
    (t = Ct()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Je === e &&
      (st & n) === n &&
      (Xe === 4 || (Xe === 3 && (st & 130023424) === st && 500 > Ue() - sd)
        ? Pr(e, 0)
        : (id |= n)),
    Rt(e, t))
}
function Mg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = rs), (rs <<= 1), !(rs & 130023424) && (rs = 4194304))
      : (t = 1))
  var n = Ct()
  ;((e = Ln(e, t)), e !== null && (_i(e, t, n), Rt(e, n)))
}
function v1(e) {
  var t = e.memoizedState,
    n = 0
  ;(t !== null && (n = t.retryLane), Mg(e, n))
}
function S1(e, t) {
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
      throw Error(_(314))
  }
  ;(r !== null && r.delete(t), Mg(e, n))
}
var Ng
Ng = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current) Et = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Et = !1), s1(e, t, n))
      Et = !!(e.flags & 131072)
    }
  else ((Et = !1), Ie && t.flags & 1048576 && Ah(t, nl, t.index))
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ;(Os(e, t), (e = t.pendingProps))
      var o = So(t, yt.current)
      ;(mo(t, n), (o = Jc(null, t, r, e, o, n)))
      var i = ed()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $t(r) ? ((i = !0), el(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Qc(t),
            (o.updater = Tl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Du(t, r, e, n),
            (t = Hu(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ie && i && Dc(t), xt(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Os(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = C1(r)),
          (e = Jt(r, e)),
          o)
        ) {
          case 0:
            t = Uu(null, t, r, e, n)
            break e
          case 1:
            t = Yf(null, t, r, e, n)
            break e
          case 11:
            t = Gf(null, t, r, e, n)
            break e
          case 14:
            t = Qf(null, t, r, Jt(r.type, e), n)
            break e
        }
        throw Error(_(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Jt(r, o)),
        Uu(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Jt(r, o)),
        Yf(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((hg(t), e === null)) throw Error(_(387))
        ;((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Wh(e, t),
          il(t, r, null, n))
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;((o = bo(Error(_(423)), t)), (t = Xf(e, t, r, n, o)))
            break e
          } else if (r !== o) {
            ;((o = bo(Error(_(424)), t)), (t = Xf(e, t, r, n, o)))
            break e
          } else
            for (
              Ot = Jn(t.stateNode.containerInfo.firstChild),
                Lt = t,
                Ie = !0,
                tn = null,
                n = Bh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling))
        else {
          if ((xo(), r === o)) {
            t = zn(e, t, n)
            break e
          }
          xt(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Uh(t),
        e === null && Fu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ou(r, o) ? (s = null) : i !== null && Ou(r, i) && (t.flags |= 32),
        mg(e, t),
        xt(e, t, s, n),
        t.child
      )
    case 6:
      return (e === null && Fu(t), null)
    case 13:
      return gg(e, t, n)
    case 4:
      return (
        Yc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Co(t, null, r, n)) : xt(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Jt(r, o)),
        Gf(e, t, r, o, n)
      )
    case 7:
      return (xt(e, t, t.pendingProps, n), t.child)
    case 8:
      return (xt(e, t, t.pendingProps.children, n), t.child)
    case 12:
      return (xt(e, t, t.pendingProps.children, n), t.child)
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ke(rl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (sn(i.value, s)) {
            if (i.children === o.children && !Pt.current) {
              t = zn(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var l = i.dependencies
              if (l !== null) {
                s = i.child
                for (var a = l.firstContext; a !== null;) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;((a = Mn(-1, n & -n)), (a.tag = 2))
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        ;(d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a))
                      }
                    }
                    ;((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      _u(i.return, n, t),
                      (l.lanes |= n))
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341))
                ;((s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  _u(s, n, t),
                  (s = i.sibling))
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null;) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;((i.return = s.return), (s = i))
                    break
                  }
                  s = s.return
                }
              i = s
            }
        ;(xt(e, t, o.children, n), (t = t.child))
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        mo(t, n),
        (o = Gt(o)),
        (r = r(o)),
        (t.flags |= 1),
        xt(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = Jt(r, t.pendingProps)),
        (o = Jt(r.type, o)),
        Qf(e, t, r, o, n)
      )
    case 15:
      return fg(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Jt(r, o)),
        Os(e, t),
        (t.tag = 1),
        $t(r) ? ((e = !0), el(t)) : (e = !1),
        mo(t, n),
        ug(t, r, o),
        Du(t, r, o, n),
        Hu(null, t, r, !0, e, n)
      )
    case 19:
      return yg(e, t, n)
    case 22:
      return pg(e, t, n)
  }
  throw Error(_(156, t.tag))
}
function Og(e, t) {
  return sh(e, t)
}
function x1(e, t, n, r) {
  ;((this.tag = e),
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
    (this.alternate = null))
}
function Vt(e, t, n, r) {
  return new x1(e, t, n, r)
}
function cd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent))
}
function C1(e) {
  if (typeof e == 'function') return cd(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Tc)) return 11
    if (e === Ic) return 14
  }
  return 2
}
function rr(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Vt(e.tag, t, e.key, e.mode)),
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
function As(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) cd(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case qr:
        return $r(n.children, o, i, t)
      case Rc:
        ;((s = 8), (o |= 8))
        break
      case du:
        return (
          (e = Vt(12, n, t, o | 2)),
          (e.elementType = du),
          (e.lanes = i),
          e
        )
      case fu:
        return ((e = Vt(13, n, t, o)), (e.elementType = fu), (e.lanes = i), e)
      case pu:
        return ((e = Vt(19, n, t, o)), (e.elementType = pu), (e.lanes = i), e)
      case Um:
        return Nl(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Dm:
              s = 10
              break e
            case Wm:
              s = 9
              break e
            case Tc:
              s = 11
              break e
            case Ic:
              s = 14
              break e
            case Hn:
              ;((s = 16), (r = null))
              break e
          }
        throw Error(_(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Vt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  )
}
function $r(e, t, n, r) {
  return ((e = Vt(7, e, r, t)), (e.lanes = n), e)
}
function Nl(e, t, n, r) {
  return (
    (e = Vt(22, e, r, t)),
    (e.elementType = Um),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Qa(e, t, n) {
  return ((e = Vt(6, e, null, t)), (e.lanes = n), e)
}
function Ya(e, t, n) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function w1(e, t, n, r, o) {
  ;((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ta(0)),
    (this.expirationTimes = Ta(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ta(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null))
}
function dd(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new w1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Vt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qc(i),
    e
  )
}
function b1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Xr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Lg(e) {
  if (!e) return lr
  e = e._reactInternals
  e: {
    if (_r(e) !== e || e.tag !== 1) throw Error(_(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(_(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if ($t(n)) return Lh(e, n, t)
  }
  return t
}
function zg(e, t, n, r, o, i, s, l, a) {
  return (
    (e = dd(n, r, !0, e, o, i, s, l, a)),
    (e.context = Lg(null)),
    (n = e.current),
    (r = Ct()),
    (o = nr(n)),
    (i = Mn(r, o)),
    (i.callback = t ?? null),
    er(n, i, o),
    (e.current.lanes = o),
    _i(e, o, r),
    Rt(e, r),
    e
  )
}
function Ol(e, t, n, r) {
  var o = t.current,
    i = Ct(),
    s = nr(o)
  return (
    (n = Lg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = er(o, t, s)),
    e !== null && (on(e, o, s, i), Is(e, o, s)),
    s
  )
}
function pl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function sp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function fd(e, t) {
  ;(sp(e, t), (e = e.alternate) && sp(e, t))
}
function k1() {
  return null
}
var Ag =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function pd(e) {
  this._internalRoot = e
}
Ll.prototype.render = pd.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(_(409))
  Ol(e, t, null, null)
}
Ll.prototype.unmount = pd.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    ;(Lr(function () {
      Ol(null, e, null, null)
    }),
      (t[On] = null))
  }
}
function Ll(e) {
  this._internalRoot = e
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ph()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Kn.length && t !== 0 && t < Kn[n].priority; n++);
    ;(Kn.splice(n, 0, e), n === 0 && hh(e))
  }
}
function md(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function lp() {}
function E1(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var u = pl(s)
        i.call(u)
      }
    }
    var s = zg(t, r, e, 0, null, !1, !1, '', lp)
    return (
      (e._reactRootContainer = s),
      (e[On] = s.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      s
    )
  }
  for (; (o = e.lastChild);) e.removeChild(o)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = pl(a)
      l.call(u)
    }
  }
  var a = dd(e, 0, !1, null, null, !1, !1, '', lp)
  return (
    (e._reactRootContainer = a),
    (e[On] = a.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      Ol(t, a, n, r)
    }),
    a
  )
}
function Al(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var l = o
      o = function () {
        var a = pl(s)
        l.call(a)
      }
    }
    Ol(t, s, e, o)
  } else s = E1(n, t, e, o, r)
  return pl(s)
}
dh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Xo(t.pendingLanes)
        n !== 0 &&
          (Oc(t, n | 1), Rt(t, Ue()), !(de & 6) && ((ko = Ue() + 500), fr()))
      }
      break
    case 13:
      ;(Lr(function () {
        var r = Ln(e, 1)
        if (r !== null) {
          var o = Ct()
          on(r, e, 1, o)
        }
      }),
        fd(e, 1))
  }
}
Lc = function (e) {
  if (e.tag === 13) {
    var t = Ln(e, 134217728)
    if (t !== null) {
      var n = Ct()
      on(t, e, 134217728, n)
    }
    fd(e, 134217728)
  }
}
fh = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      n = Ln(e, t)
    if (n !== null) {
      var r = Ct()
      on(n, e, t, r)
    }
    fd(e, t)
  }
}
ph = function () {
  return ve
}
mh = function (e, t) {
  var n = ve
  try {
    return ((ve = e), t())
  } finally {
    ve = n
  }
}
bu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((gu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Pl(r)
            if (!o) throw Error(_(90))
            ;(Vm(r), gu(r, o))
          }
        }
      }
      break
    case 'textarea':
      Gm(e, n)
      break
    case 'select':
      ;((t = n.value), t != null && uo(e, !!n.multiple, t, !1))
  }
}
eh = ld
th = Lr
var P1 = { usingClientEntryPoint: !1, Events: [Di, to, Pl, Zm, Jm, ld] },
  Bo = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  $1 = {
    bundleType: Bo.bundleType,
    version: Bo.version,
    rendererPackageName: Bo.rendererPackageName,
    rendererConfig: Bo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = oh(e)), e === null ? null : e.stateNode)
    },
    findFiberByHostInstance: Bo.findFiberByHostInstance || k1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ms = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ms.isDisabled && ms.supportsFiber)
    try {
      ;((wl = ms.inject($1)), (yn = ms))
    } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P1
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!md(t)) throw Error(_(200))
  return b1(e, t, null, n)
}
jt.createRoot = function (e, t) {
  if (!md(e)) throw Error(_(299))
  var n = !1,
    r = '',
    o = Ag
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = dd(e, 1, !1, null, null, n, !1, r, o)),
    (e[On] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new pd(t)
  )
}
jt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)))
  return ((e = oh(t)), (e = e === null ? null : e.stateNode), e)
}
jt.flushSync = function (e) {
  return Lr(e)
}
jt.hydrate = function (e, t, n) {
  if (!zl(t)) throw Error(_(200))
  return Al(null, e, t, !0, n)
}
jt.hydrateRoot = function (e, t, n) {
  if (!md(e)) throw Error(_(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Ag
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = zg(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[On] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o))
  return new Ll(t)
}
jt.render = function (e, t, n) {
  if (!zl(t)) throw Error(_(200))
  return Al(null, e, t, !1, n)
}
jt.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(_(40))
  return e._reactRootContainer
    ? (Lr(function () {
        Al(null, null, e, !1, function () {
          ;((e._reactRootContainer = null), (e[On] = null))
        })
      }),
      !0)
    : !1
}
jt.unstable_batchedUpdates = ld
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(_(200))
  if (e == null || e._reactInternals === void 0) throw Error(_(38))
  return Al(e, t, n, !1, r)
}
jt.version = '18.3.1-next-f1338f8080-20240426'
function jg() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)
    } catch (e) {
      console.error(e)
    }
}
;(jg(), (jm.exports = jt))
var hd = jm.exports
const hs = Em(hd)
var ap = hd
;((uu.createRoot = ap.createRoot), (uu.hydrateRoot = ap.hydrateRoot))
const Mi = { black: '#000', white: '#fff' },
  Ur = {
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    700: '#d32f2f',
    800: '#c62828',
  },
  Hr = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  Vr = {
    50: '#e3f2fd',
    200: '#90caf9',
    400: '#42a5f5',
    700: '#1976d2',
    800: '#1565c0',
  },
  Kr = {
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    700: '#0288d1',
    900: '#01579b',
  },
  Gr = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  Do = {
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    700: '#f57c00',
    900: '#e65100',
  },
  R1 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  }
function An(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`)
  return (
    t.forEach((r) => n.searchParams.append('args[]', r)),
    `Minified MUI error #${e}; visit ${n} for the full message.`
  )
}
const Sn = '$$material'
function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ml.apply(null, arguments)
  )
}
function T1(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function I1(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var M1 = (function () {
    function e(n) {
      var r = this
      ;((this._insertTag = function (o) {
        var i
        ;(r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o))
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null))
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(I1(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = T1(o)
          try {
            i.insertRule(r, i.cssRules.length)
          } catch {}
        } else o.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        ;(this.tags.forEach(function (r) {
          var o
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0))
      }),
      e
    )
  })(),
  mt = '-ms-',
  hl = '-moz-',
  pe = '-webkit-',
  Fg = 'comm',
  gd = 'rule',
  yd = 'decl',
  N1 = '@import',
  _g = '@keyframes',
  O1 = '@layer',
  L1 = Math.abs,
  jl = String.fromCharCode,
  z1 = Object.assign
function A1(e, t) {
  return ot(e, 0) ^ 45
    ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^
        ot(e, 3)
    : 0
}
function Bg(e) {
  return e.trim()
}
function j1(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function me(e, t, n) {
  return e.replace(t, n)
}
function nc(e, t) {
  return e.indexOf(t)
}
function ot(e, t) {
  return e.charCodeAt(t) | 0
}
function Ni(e, t, n) {
  return e.slice(t, n)
}
function pn(e) {
  return e.length
}
function vd(e) {
  return e.length
}
function gs(e, t) {
  return (t.push(e), e)
}
function F1(e, t) {
  return e.map(t).join('')
}
var Fl = 1,
  Eo = 1,
  Dg = 0,
  Tt = 0,
  Ke = 0,
  Mo = ''
function _l(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Fl,
    column: Eo,
    length: s,
    return: '',
  }
}
function Wo(e, t) {
  return z1(_l('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function _1() {
  return Ke
}
function B1() {
  return (
    (Ke = Tt > 0 ? ot(Mo, --Tt) : 0),
    Eo--,
    Ke === 10 && ((Eo = 1), Fl--),
    Ke
  )
}
function zt() {
  return (
    (Ke = Tt < Dg ? ot(Mo, Tt++) : 0),
    Eo++,
    Ke === 10 && ((Eo = 1), Fl++),
    Ke
  )
}
function xn() {
  return ot(Mo, Tt)
}
function js() {
  return Tt
}
function Ui(e, t) {
  return Ni(Mo, e, t)
}
function Oi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Wg(e) {
  return ((Fl = Eo = 1), (Dg = pn((Mo = e))), (Tt = 0), [])
}
function Ug(e) {
  return ((Mo = ''), e)
}
function Fs(e) {
  return Bg(Ui(Tt - 1, rc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function D1(e) {
  for (; (Ke = xn()) && Ke < 33;) zt()
  return Oi(e) > 2 || Oi(Ke) > 3 ? '' : ' '
}
function W1(e, t) {
  for (
    ;
    --t &&
    zt() &&
    !(Ke < 48 || Ke > 102 || (Ke > 57 && Ke < 65) || (Ke > 70 && Ke < 97));
  );
  return Ui(e, js() + (t < 6 && xn() == 32 && zt() == 32))
}
function rc(e) {
  for (; zt();)
    switch (Ke) {
      case e:
        return Tt
      case 34:
      case 39:
        e !== 34 && e !== 39 && rc(Ke)
        break
      case 40:
        e === 41 && rc(e)
        break
      case 92:
        zt()
        break
    }
  return Tt
}
function U1(e, t) {
  for (; zt() && e + Ke !== 57;) if (e + Ke === 84 && xn() === 47) break
  return '/*' + Ui(t, Tt - 1) + '*' + jl(e === 47 ? e : zt())
}
function H1(e) {
  for (; !Oi(xn());) zt()
  return Ui(e, Tt)
}
function V1(e) {
  return Ug(_s('', null, null, null, [''], (e = Wg(e)), 0, [0], e))
}
function _s(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0,
      d = 0,
      f = s,
      p = 0,
      y = 0,
      v = 0,
      C = 1,
      k = 1,
      h = 1,
      g = 0,
      m = '',
      S = o,
      P = i,
      $ = r,
      w = m;
    k;
  )
    switch (((v = g), (g = zt()))) {
      case 40:
        if (v != 108 && ot(w, f - 1) == 58) {
          nc((w += me(Fs(g), '&', '&\f')), '&\f') != -1 && (h = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        w += Fs(g)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        w += D1(v)
        break
      case 92:
        w += W1(js() - 1, 7)
        continue
      case 47:
        switch (xn()) {
          case 42:
          case 47:
            gs(K1(U1(zt(), js()), t, n), a)
            break
          default:
            w += '/'
        }
        break
      case 123 * C:
        l[u++] = pn(w) * h
      case 125 * C:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            k = 0
          case 59 + d:
            ;(h == -1 && (w = me(w, /\f/g, '')),
              y > 0 &&
                pn(w) - f &&
                gs(
                  y > 32
                    ? cp(w + ';', r, n, f - 1)
                    : cp(me(w, ' ', '') + ';', r, n, f - 2),
                  a,
                ))
            break
          case 59:
            w += ';'
          default:
            if (
              (gs(($ = up(w, t, n, u, d, o, l, m, (S = []), (P = []), f)), i),
              g === 123)
            )
              if (d === 0) _s(w, t, $, $, S, i, f, l, P)
              else
                switch (p === 99 && ot(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _s(
                      e,
                      $,
                      $,
                      r && gs(up(e, $, $, 0, 0, o, l, m, o, (S = []), f), P),
                      o,
                      P,
                      f,
                      l,
                      r ? S : P,
                    )
                    break
                  default:
                    _s(w, $, $, $, [''], P, 0, l, P)
                }
        }
        ;((u = d = y = 0), (C = h = 1), (m = w = ''), (f = s))
        break
      case 58:
        ;((f = 1 + pn(w)), (y = v))
      default:
        if (C < 1) {
          if (g == 123) --C
          else if (g == 125 && C++ == 0 && B1() == 125) continue
        }
        switch (((w += jl(g)), g * C)) {
          case 38:
            h = d > 0 ? 1 : ((w += '\f'), -1)
            break
          case 44:
            ;((l[u++] = (pn(w) - 1) * h), (h = 1))
            break
          case 64:
            ;(xn() === 45 && (w += Fs(zt())),
              (p = xn()),
              (d = f = pn((m = w += H1(js())))),
              g++)
            break
          case 45:
            v === 45 && pn(w) == 2 && (C = 0)
        }
    }
  return i
}
function up(e, t, n, r, o, i, s, l, a, u, d) {
  for (
    var f = o - 1, p = o === 0 ? i : [''], y = vd(p), v = 0, C = 0, k = 0;
    v < r;
    ++v
  )
    for (var h = 0, g = Ni(e, f + 1, (f = L1((C = s[v])))), m = e; h < y; ++h)
      (m = Bg(C > 0 ? p[h] + ' ' + g : me(g, /&\f/g, p[h]))) && (a[k++] = m)
  return _l(e, t, n, o === 0 ? gd : l, a, u, d)
}
function K1(e, t, n) {
  return _l(e, t, n, Fg, jl(_1()), Ni(e, 2, -2), 0)
}
function cp(e, t, n, r) {
  return _l(e, t, n, yd, Ni(e, 0, r), Ni(e, r + 1, -1), r)
}
function go(e, t) {
  for (var n = '', r = vd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ''
  return n
}
function G1(e, t, n, r) {
  switch (e.type) {
    case O1:
      if (e.children.length) break
    case N1:
    case yd:
      return (e.return = e.return || e.value)
    case Fg:
      return ''
    case _g:
      return (e.return = e.value + '{' + go(e.children, r) + '}')
    case gd:
      e.value = e.props.join(',')
  }
  return pn((n = go(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function Q1(e) {
  var t = vd(e)
  return function (n, r, o, i) {
    for (var s = '', l = 0; l < t; l++) s += e[l](n, r, o, i) || ''
    return s
  }
}
function Y1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
function Hg(e) {
  var t = Object.create(null)
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n])
  }
}
var X1 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = xn()), o === 38 && i === 12 && (n[r] = 1), !Oi(i);
    )
      zt()
    return Ui(t, Tt)
  },
  q1 = function (t, n) {
    var r = -1,
      o = 44
    do
      switch (Oi(o)) {
        case 0:
          ;(o === 38 && xn() === 12 && (n[r] = 1), (t[r] += X1(Tt - 1, n, r)))
          break
        case 2:
          t[r] += Fs(o)
          break
        case 4:
          if (o === 44) {
            ;((t[++r] = xn() === 58 ? '&\f' : ''), (n[r] = t[r].length))
            break
          }
        default:
          t[r] += jl(o)
      }
    while ((o = zt()))
    return t
  },
  Z1 = function (t, n) {
    return Ug(q1(Wg(t), n))
  },
  dp = new WeakMap(),
  J1 = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';
      )
        if (((r = r.parent), !r)) return
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !dp.get(r)) &&
        !o
      ) {
        dp.set(t, !0)
        for (
          var i = [], s = Z1(n, i), l = r.props, a = 0, u = 0;
          a < s.length;
          a++
        )
          for (var d = 0; d < l.length; d++, u++)
            t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + ' ' + s[a]
      }
    }
  },
  eS = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function Vg(e, t) {
  switch (A1(e, t)) {
    case 5103:
      return pe + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return pe + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return pe + e + hl + e + mt + e + e
    case 6828:
    case 4268:
      return pe + e + mt + e + e
    case 6165:
      return pe + e + mt + 'flex-' + e + e
    case 5187:
      return (
        pe + e + me(e, /(\w+).+(:[^]+)/, pe + 'box-$1$2' + mt + 'flex-$1$2') + e
      )
    case 5443:
      return pe + e + mt + 'flex-item-' + me(e, /flex-|-self/, '') + e
    case 4675:
      return (
        pe +
        e +
        mt +
        'flex-line-pack' +
        me(e, /align-content|flex-|-self/, '') +
        e
      )
    case 5548:
      return pe + e + mt + me(e, 'shrink', 'negative') + e
    case 5292:
      return pe + e + mt + me(e, 'basis', 'preferred-size') + e
    case 6060:
      return (
        pe +
        'box-' +
        me(e, '-grow', '') +
        pe +
        e +
        mt +
        me(e, 'grow', 'positive') +
        e
      )
    case 4554:
      return pe + me(e, /([^-])(transform)/g, '$1' + pe + '$2') + e
    case 6187:
      return (
        me(
          me(me(e, /(zoom-|grab)/, pe + '$1'), /(image-set)/, pe + '$1'),
          e,
          '',
        ) + e
      )
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, pe + '$1$`$1')
    case 4968:
      return (
        me(
          me(e, /(.+:)(flex-)?(.*)/, pe + 'box-pack:$3' + mt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        pe +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, pe + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break
          case 102:
            return (
              me(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  pe +
                  '$2-$3$1' +
                  hl +
                  (ot(e, t + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            )
          case 115:
            return ~nc(e, 'stretch')
              ? Vg(me(e, 'stretch', 'fill-available'), t) + e
              : e
        }
      break
    case 4949:
      if (ot(e, t + 1) !== 115) break
    case 6444:
      switch (ot(e, pn(e) - 3 - (~nc(e, '!important') && 10))) {
        case 107:
          return me(e, ':', ':' + pe) + e
        case 101:
          return (
            me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                pe +
                (ot(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                pe +
                '$2$3$1' +
                mt +
                '$2box$3',
            ) + e
          )
      }
      break
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return pe + e + mt + me(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return pe + e + mt + me(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return pe + e + mt + me(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return pe + e + mt + e + e
  }
  return e
}
var tS = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case yd:
          t.return = Vg(t.value, t.length)
          break
        case _g:
          return go([Wo(t, { value: me(t.value, '@', '@' + pe) })], o)
        case gd:
          if (t.length)
            return F1(t.props, function (i) {
              switch (j1(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return go(
                    [Wo(t, { props: [me(i, /:(read-\w+)/, ':' + hl + '$1')] })],
                    o,
                  )
                case '::placeholder':
                  return go(
                    [
                      Wo(t, {
                        props: [me(i, /:(plac\w+)/, ':' + pe + 'input-$1')],
                      }),
                      Wo(t, { props: [me(i, /:(plac\w+)/, ':' + hl + '$1')] }),
                      Wo(t, { props: [me(i, /:(plac\w+)/, mt + 'input-$1')] }),
                    ],
                    o,
                  )
              }
              return ''
            })
      }
  },
  nS = [tS],
  rS = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (C) {
        var k = C.getAttribute('data-emotion')
        k.indexOf(' ') !== -1 &&
          (document.head.appendChild(C), C.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || nS,
      i = {},
      s,
      l = []
    ;((s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (C) {
          for (
            var k = C.getAttribute('data-emotion').split(' '), h = 1;
            h < k.length;
            h++
          )
            i[k[h]] = !0
          l.push(C)
        },
      ))
    var a,
      u = [J1, eS]
    {
      var d,
        f = [
          G1,
          Y1(function (C) {
            d.insert(C)
          }),
        ],
        p = Q1(u.concat(o, f)),
        y = function (k) {
          return go(V1(k), p)
        }
      a = function (k, h, g, m) {
        ;((d = g),
          y(k ? k + '{' + h.styles + '}' : h.styles),
          m && (v.inserted[h.name] = !0))
      }
    }
    var v = {
      key: n,
      sheet: new M1({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    }
    return (v.sheet.hydrate(l), v)
  },
  Kg = { exports: {} },
  Se = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tt = typeof Symbol == 'function' && Symbol.for,
  Sd = tt ? Symbol.for('react.element') : 60103,
  xd = tt ? Symbol.for('react.portal') : 60106,
  Bl = tt ? Symbol.for('react.fragment') : 60107,
  Dl = tt ? Symbol.for('react.strict_mode') : 60108,
  Wl = tt ? Symbol.for('react.profiler') : 60114,
  Ul = tt ? Symbol.for('react.provider') : 60109,
  Hl = tt ? Symbol.for('react.context') : 60110,
  Cd = tt ? Symbol.for('react.async_mode') : 60111,
  Vl = tt ? Symbol.for('react.concurrent_mode') : 60111,
  Kl = tt ? Symbol.for('react.forward_ref') : 60112,
  Gl = tt ? Symbol.for('react.suspense') : 60113,
  oS = tt ? Symbol.for('react.suspense_list') : 60120,
  Ql = tt ? Symbol.for('react.memo') : 60115,
  Yl = tt ? Symbol.for('react.lazy') : 60116,
  iS = tt ? Symbol.for('react.block') : 60121,
  sS = tt ? Symbol.for('react.fundamental') : 60117,
  lS = tt ? Symbol.for('react.responder') : 60118,
  aS = tt ? Symbol.for('react.scope') : 60119
function _t(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Sd:
        switch (((e = e.type), e)) {
          case Cd:
          case Vl:
          case Bl:
          case Wl:
          case Dl:
          case Gl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hl:
              case Kl:
              case Yl:
              case Ql:
              case Ul:
                return e
              default:
                return t
            }
        }
      case xd:
        return t
    }
  }
}
function Gg(e) {
  return _t(e) === Vl
}
Se.AsyncMode = Cd
Se.ConcurrentMode = Vl
Se.ContextConsumer = Hl
Se.ContextProvider = Ul
Se.Element = Sd
Se.ForwardRef = Kl
Se.Fragment = Bl
Se.Lazy = Yl
Se.Memo = Ql
Se.Portal = xd
Se.Profiler = Wl
Se.StrictMode = Dl
Se.Suspense = Gl
Se.isAsyncMode = function (e) {
  return Gg(e) || _t(e) === Cd
}
Se.isConcurrentMode = Gg
Se.isContextConsumer = function (e) {
  return _t(e) === Hl
}
Se.isContextProvider = function (e) {
  return _t(e) === Ul
}
Se.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Sd
}
Se.isForwardRef = function (e) {
  return _t(e) === Kl
}
Se.isFragment = function (e) {
  return _t(e) === Bl
}
Se.isLazy = function (e) {
  return _t(e) === Yl
}
Se.isMemo = function (e) {
  return _t(e) === Ql
}
Se.isPortal = function (e) {
  return _t(e) === xd
}
Se.isProfiler = function (e) {
  return _t(e) === Wl
}
Se.isStrictMode = function (e) {
  return _t(e) === Dl
}
Se.isSuspense = function (e) {
  return _t(e) === Gl
}
Se.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Bl ||
    e === Vl ||
    e === Wl ||
    e === Dl ||
    e === Gl ||
    e === oS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Yl ||
        e.$$typeof === Ql ||
        e.$$typeof === Ul ||
        e.$$typeof === Hl ||
        e.$$typeof === Kl ||
        e.$$typeof === sS ||
        e.$$typeof === lS ||
        e.$$typeof === aS ||
        e.$$typeof === iS))
  )
}
Se.typeOf = _t
Kg.exports = Se
var uS = Kg.exports,
  Qg = uS,
  cS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  dS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Yg = {}
Yg[Qg.ForwardRef] = cS
Yg[Qg.Memo] = dS
var fS = !0
function Xg(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : o && (r += o + ' ')
    }),
    r
  )
}
var wd = function (t, n, r) {
    var o = t.key + '-' + n.name
    ;(r === !1 || fS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles)
  },
  bd = function (t, n, r) {
    wd(t, n, r)
    var o = t.key + '-' + n.name
    if (t.inserted[n.name] === void 0) {
      var i = n
      do (t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next))
      while (i !== void 0)
    }
  }
function pS(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    ((n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;((t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var mS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hS = /[A-Z]|^ms/g,
  gS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  qg = function (t) {
    return t.charCodeAt(1) === 45
  },
  fp = function (t) {
    return t != null && typeof t != 'boolean'
  },
  Xa = Hg(function (e) {
    return qg(e) ? e : e.replace(hS, '-$&').toLowerCase()
  }),
  pp = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(gS, function (r, o, i) {
            return ((mn = { name: o, styles: i, next: mn }), o)
          })
    }
    return mS[t] !== 1 && !qg(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n
  }
function Li(e, t, n) {
  if (n == null) return ''
  var r = n
  if (r.__emotion_styles !== void 0) return r
  switch (typeof n) {
    case 'boolean':
      return ''
    case 'object': {
      var o = n
      if (o.anim === 1)
        return ((mn = { name: o.name, styles: o.styles, next: mn }), o.name)
      var i = n
      if (i.styles !== void 0) {
        var s = i.next
        if (s !== void 0)
          for (; s !== void 0;)
            ((mn = { name: s.name, styles: s.styles, next: mn }), (s = s.next))
        var l = i.styles + ';'
        return l
      }
      return yS(e, t, n)
    }
    case 'function': {
      if (e !== void 0) {
        var a = mn,
          u = n(e)
        return ((mn = a), Li(e, t, u))
      }
      break
    }
  }
  var d = n
  if (t == null) return d
  var f = t[d]
  return f !== void 0 ? f : d
}
function yS(e, t, n) {
  var r = ''
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Li(e, t, n[o]) + ';'
  else
    for (var i in n) {
      var s = n[i]
      if (typeof s != 'object') {
        var l = s
        t != null && t[l] !== void 0
          ? (r += i + '{' + t[l] + '}')
          : fp(l) && (r += Xa(i) + ':' + pp(i, l) + ';')
      } else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          fp(s[a]) && (r += Xa(i) + ':' + pp(i, s[a]) + ';')
      else {
        var u = Li(e, t, s)
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += Xa(i) + ':' + u + ';'
            break
          }
          default:
            r += i + '{' + u + '}'
        }
      }
    }
  return r
}
var mp = /label:\s*([^\s;{]+)\s*(;|$)/g,
  mn
function Hi(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == 'object' &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0]
  var r = !0,
    o = ''
  mn = void 0
  var i = e[0]
  if (i == null || i.raw === void 0) ((r = !1), (o += Li(n, t, i)))
  else {
    var s = i
    o += s[0]
  }
  for (var l = 1; l < e.length; l++)
    if (((o += Li(n, t, e[l])), r)) {
      var a = i
      o += a[l]
    }
  mp.lastIndex = 0
  for (var u = '', d; (d = mp.exec(o)) !== null;) u += '-' + d[1]
  var f = pS(o) + u
  return { name: f, styles: o, next: mn }
}
var vS = function (t) {
    return t()
  },
  Zg = au.useInsertionEffect ? au.useInsertionEffect : !1,
  Jg = Zg || vS,
  hp = Zg || x.useLayoutEffect,
  ey = x.createContext(typeof HTMLElement < 'u' ? rS({ key: 'css' }) : null)
ey.Provider
var kd = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext(ey)
      return t(n, o, r)
    })
  },
  Vi = x.createContext({}),
  Ed = {}.hasOwnProperty,
  oc = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  SS = function (t, n) {
    var r = {}
    for (var o in n) Ed.call(n, o) && (r[o] = n[o])
    return ((r[oc] = t), r)
  },
  xS = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag
    return (
      wd(n, r, o),
      Jg(function () {
        return bd(n, r, o)
      }),
      null
    )
  },
  CS = kd(function (e, t, n) {
    var r = e.css
    typeof r == 'string' && t.registered[r] !== void 0 && (r = t.registered[r])
    var o = e[oc],
      i = [r],
      s = ''
    typeof e.className == 'string'
      ? (s = Xg(t.registered, i, e.className))
      : e.className != null && (s = e.className + ' ')
    var l = Hi(i, void 0, x.useContext(Vi))
    s += t.key + '-' + l.name
    var a = {}
    for (var u in e) Ed.call(e, u) && u !== 'css' && u !== oc && (a[u] = e[u])
    return (
      (a.className = s),
      n && (a.ref = n),
      x.createElement(
        x.Fragment,
        null,
        x.createElement(xS, {
          cache: t,
          serialized: l,
          isStringTag: typeof o == 'string',
        }),
        x.createElement(o, a),
      )
    )
  }),
  wS = CS,
  gp = function (t, n) {
    var r = arguments
    if (n == null || !Ed.call(n, 'css')) return x.createElement.apply(void 0, r)
    var o = r.length,
      i = new Array(o)
    ;((i[0] = wS), (i[1] = SS(t, n)))
    for (var s = 2; s < o; s++) i[s] = r[s]
    return x.createElement.apply(null, i)
  }
;(function (e) {
  var t
  t || (t = e.JSX || (e.JSX = {}))
})(gp || (gp = {}))
var bS = kd(function (e, t) {
  var n = e.styles,
    r = Hi([n], void 0, x.useContext(Vi)),
    o = x.useRef()
  return (
    hp(
      function () {
        var i = t.key + '-global',
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          l = !1,
          a = document.querySelector(
            'style[data-emotion="' + i + ' ' + r.name + '"]',
          )
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          a !== null &&
            ((l = !0), a.setAttribute('data-emotion', i), s.hydrate([a])),
          (o.current = [s, l]),
          function () {
            s.flush()
          }
        )
      },
      [t],
    ),
    hp(
      function () {
        var i = o.current,
          s = i[0],
          l = i[1]
        if (l) {
          i[1] = !1
          return
        }
        if ((r.next !== void 0 && bd(t, r.next, !0), s.tags.length)) {
          var a = s.tags[s.tags.length - 1].nextElementSibling
          ;((s.before = a), s.flush())
        }
        t.insert('', r, s, !1)
      },
      [t, r.name],
    ),
    null
  )
})
function Pd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return Hi(t)
}
function Ki() {
  var e = Pd.apply(void 0, arguments),
    t = 'animation-' + e.name
  return {
    name: t,
    styles: '@keyframes ' + t + '{' + e.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
    },
  }
}
var kS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ES = Hg(function (e) {
    return (
      kS.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    )
  }),
  PS = ES,
  $S = function (t) {
    return t !== 'theme'
  },
  yp = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? PS : $S
  },
  vp = function (t, n, r) {
    var o
    if (n) {
      var i = n.shouldForwardProp
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s)
            }
          : i
    }
    return (typeof o != 'function' && r && (o = t.__emotion_forwardProp), o)
  },
  RS = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag
    return (
      wd(n, r, o),
      Jg(function () {
        return bd(n, r, o)
      }),
      null
    )
  },
  TS = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s
    n !== void 0 && ((i = n.label), (s = n.target))
    var l = vp(t, n, r),
      a = l || yp(o),
      u = !a('as')
    return function () {
      var d = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if (
        (i !== void 0 && f.push('label:' + i + ';'),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d)
      else {
        var p = d[0]
        f.push(p[0])
        for (var y = d.length, v = 1; v < y; v++) f.push(d[v], p[v])
      }
      var C = kd(function (k, h, g) {
        var m = (u && k.as) || o,
          S = '',
          P = [],
          $ = k
        if (k.theme == null) {
          $ = {}
          for (var w in k) $[w] = k[w]
          $.theme = x.useContext(Vi)
        }
        typeof k.className == 'string'
          ? (S = Xg(h.registered, P, k.className))
          : k.className != null && (S = k.className + ' ')
        var E = Hi(f.concat(P), h.registered, $)
        ;((S += h.key + '-' + E.name), s !== void 0 && (S += ' ' + s))
        var T = u && l === void 0 ? yp(m) : a,
          c = {}
        for (var R in k) (u && R === 'as') || (T(R) && (c[R] = k[R]))
        return (
          (c.className = S),
          g && (c.ref = g),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(RS, {
              cache: h,
              serialized: E,
              isStringTag: typeof m == 'string',
            }),
            x.createElement(m, c),
          )
        )
      })
      return (
        (C.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (C.defaultProps = t.defaultProps),
        (C.__emotion_real = C),
        (C.__emotion_base = o),
        (C.__emotion_styles = f),
        (C.__emotion_forwardProp = l),
        Object.defineProperty(C, 'toString', {
          value: function () {
            return '.' + s
          },
        }),
        (C.withComponent = function (k, h) {
          var g = e(k, ml({}, n, h, { shouldForwardProp: vp(C, h, !0) }))
          return g.apply(void 0, f)
        }),
        C
      )
    }
  },
  IS = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  ic = TS.bind(null)
IS.forEach(function (e) {
  ic[e] = ic(e)
})
function MS(e) {
  return e == null || Object.keys(e).length === 0
}
function ty(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (o) => t(MS(o) ? n : o) : t
  return b.jsx(bS, { styles: r })
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function ny(e, t) {
  return ic(e, t)
}
function NS(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles))
}
const Sp = []
function or(e) {
  return ((Sp[0] = e), Hi(Sp))
}
var ry = { exports: {} },
  we = {}
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d = Symbol.for('react.transitional.element'),
  Rd = Symbol.for('react.portal'),
  Xl = Symbol.for('react.fragment'),
  ql = Symbol.for('react.strict_mode'),
  Zl = Symbol.for('react.profiler'),
  Jl = Symbol.for('react.consumer'),
  ea = Symbol.for('react.context'),
  ta = Symbol.for('react.forward_ref'),
  na = Symbol.for('react.suspense'),
  ra = Symbol.for('react.suspense_list'),
  oa = Symbol.for('react.memo'),
  ia = Symbol.for('react.lazy'),
  OS = Symbol.for('react.view_transition'),
  LS = Symbol.for('react.client.reference')
function Yt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case $d:
        switch (((e = e.type), e)) {
          case Xl:
          case Zl:
          case ql:
          case na:
          case ra:
          case OS:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ea:
              case ta:
              case ia:
              case oa:
                return e
              case Jl:
                return e
              default:
                return t
            }
        }
      case Rd:
        return t
    }
  }
}
we.ContextConsumer = Jl
we.ContextProvider = ea
we.Element = $d
we.ForwardRef = ta
we.Fragment = Xl
we.Lazy = ia
we.Memo = oa
we.Portal = Rd
we.Profiler = Zl
we.StrictMode = ql
we.Suspense = na
we.SuspenseList = ra
we.isContextConsumer = function (e) {
  return Yt(e) === Jl
}
we.isContextProvider = function (e) {
  return Yt(e) === ea
}
we.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === $d
}
we.isForwardRef = function (e) {
  return Yt(e) === ta
}
we.isFragment = function (e) {
  return Yt(e) === Xl
}
we.isLazy = function (e) {
  return Yt(e) === ia
}
we.isMemo = function (e) {
  return Yt(e) === oa
}
we.isPortal = function (e) {
  return Yt(e) === Rd
}
we.isProfiler = function (e) {
  return Yt(e) === Zl
}
we.isStrictMode = function (e) {
  return Yt(e) === ql
}
we.isSuspense = function (e) {
  return Yt(e) === na
}
we.isSuspenseList = function (e) {
  return Yt(e) === ra
}
we.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Xl ||
    e === Zl ||
    e === ql ||
    e === na ||
    e === ra ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ia ||
        e.$$typeof === oa ||
        e.$$typeof === ea ||
        e.$$typeof === Jl ||
        e.$$typeof === ta ||
        e.$$typeof === LS ||
        e.getModuleId !== void 0))
  )
}
we.typeOf = Yt
ry.exports = we
var oy = ry.exports
function gn(e) {
  if (typeof e != 'object' || e === null) return !1
  const t = Object.getPrototypeOf(e)
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function iy(e) {
  if (x.isValidElement(e) || oy.isValidElementType(e) || !gn(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach((n) => {
      t[n] = iy(e[n])
    }),
    t
  )
}
function et(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e
  return (
    gn(e) &&
      gn(t) &&
      Object.keys(t).forEach((o) => {
        x.isValidElement(t[o]) || oy.isValidElementType(t[o])
          ? (r[o] = t[o])
          : gn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && gn(e[o])
            ? (r[o] = et(e[o], t[o], n))
            : n.clone
              ? (r[o] = gn(t[o]) ? iy(t[o]) : t[o])
              : (r[o] = t[o])
      }),
    r
  )
}
const zS = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || []
  return (
    t.sort((n, r) => n.val - r.val),
    t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
  )
}
function AS(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
      ...o
    } = e,
    i = zS(t),
    s = Object.keys(i)
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`
  }
  function a(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`
  }
  function u(p, y) {
    const v = s.indexOf(y)
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == 'number' ? t[s[v]] : y) - r / 100}${n})`
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p)
  }
  function f(p) {
    const y = s.indexOf(p)
    return y === 0
      ? l(s[1])
      : y === s.length - 1
        ? a(s[y])
        : u(p, s[s.indexOf(p) + 1]).replace('@media', '@media not all and')
  }
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: d,
    not: f,
    unit: n,
    ...o,
  }
}
function xp(e, t) {
  if (!e.containerQueries) return t
  const n = Object.keys(t)
    .filter((r) => r.startsWith('@container'))
    .sort((r, o) => {
      var s, l
      const i = /min-width:\s*([0-9.]+)/
      return (
        +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) -
        +(((l = o.match(i)) == null ? void 0 : l[1]) || 0)
      )
    })
  return n.length
    ? n.reduce(
        (r, o) => {
          const i = t[o]
          return (delete r[o], (r[o] = i), r)
        },
        { ...t },
      )
    : t
}
function jS(e, t) {
  return (
    t === '@' ||
    (t.startsWith('@') &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  )
}
function FS(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/)
  if (!n) return null
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r
  return e.containerQueries(o).up(i)
}
function _S(e) {
  const t = (i, s) => i.replace('@media', s ? `@container ${s}` : '@container')
  function n(i, s) {
    ;((i.up = (...l) => t(e.breakpoints.up(...l), s)),
      (i.down = (...l) => t(e.breakpoints.down(...l), s)),
      (i.between = (...l) => t(e.breakpoints.between(...l), s)),
      (i.only = (...l) => t(e.breakpoints.only(...l), s)),
      (i.not = (...l) => {
        const a = t(e.breakpoints.not(...l), s)
        return a.includes('not all and')
          ? a
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : a
      }))
  }
  const r = {},
    o = (i) => (n(r, i), r)
  return (n(o), { ...e, containerQueries: o })
}
const BS = { borderRadius: 4 }
function di(e, t) {
  return t ? et(e, t, { clone: !1 }) : e
}
const sa = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Cp = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${sa[e]}px)`,
  },
  DS = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == 'number' ? t : sa[t] || t
        return (
          typeof n == 'number' && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        )
      },
    }),
  }
function It(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const i = r.breakpoints || Cp
    return t.reduce((s, l, a) => ((s[i.up(i.keys[a])] = n(t[a])), s), {})
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || Cp
    return Object.keys(t).reduce((s, l) => {
      if (jS(i.keys, l)) {
        const a = FS(r.containerQueries ? r : DS, l)
        a && (s[a] = n(t[l], l))
      } else if (Object.keys(i.values || sa).includes(l)) {
        const a = i.up(l)
        s[a] = n(t[l], l)
      } else {
        const a = l
        s[a] = t[a]
      }
      return s
    }, {})
  }
  return n(t)
}
function sy(e = {}) {
  var n
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, o) => {
          const i = e.up(o)
          return ((r[i] = {}), r)
        }, {})) || {}
  )
}
function sc(e, t) {
  return e.reduce((n, r) => {
    const o = n[r]
    return ((!o || Object.keys(o).length === 0) && delete n[r], n)
  }, t)
}
function WS(e, ...t) {
  const n = sy(e),
    r = [n, ...t].reduce((o, i) => et(o, i), {})
  return sc(Object.keys(n), r)
}
function US(e, t) {
  if (typeof e != 'object') return {}
  const n = {},
    r = Object.keys(t)
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0)
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0)
        }),
    n
  )
}
function Rr({ values: e, breakpoints: t, base: n }) {
  const r = n || US(e, t),
    o = Object.keys(r)
  if (o.length === 0) return e
  let i
  return o.reduce(
    (s, l, a) => (
      Array.isArray(e)
        ? ((s[l] = e[a] != null ? e[a] : e[i]), (i = a))
        : typeof e == 'object'
          ? ((s[l] = e[l] != null ? e[l] : e[i]), (i = l))
          : (s[l] = e),
      s
    ),
    {},
  )
}
function F(e) {
  if (typeof e != 'string') throw new Error(An(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function la(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e)
}
function gl(e, t, n, r = n) {
  let o
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = la(e, n) || r),
    t && (o = t(o, r, e)),
    o
  )
}
function He(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null
      const l = s[t],
        a = s.theme,
        u = la(a, r) || {}
      return It(s, l, (f) => {
        let p = gl(u, o, f)
        return (
          f === p &&
            typeof f == 'string' &&
            (p = gl(u, o, `${t}${f === 'default' ? '' : F(f)}`, f)),
          n === !1 ? p : { [n]: p }
        )
      })
    }
  return ((i.propTypes = {}), (i.filterProps = [t]), i)
}
function HS(e) {
  const t = {}
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const VS = { m: 'margin', p: 'padding' },
  KS = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  wp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  GS = HS((e) => {
    if (e.length > 2)
      if (wp[e]) e = wp[e]
      else return [e]
    const [t, n] = e.split(''),
      r = VS[t],
      o = KS[n] || ''
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o]
  }),
  Td = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Id = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ]
;[...Td, ...Id]
function Gi(e, t, n, r) {
  const o = la(e, t, !0) ?? n
  return typeof o == 'number' || typeof o == 'string'
    ? (i) =>
        typeof i == 'string'
          ? i
          : typeof o == 'string'
            ? `calc(${i} * ${o})`
            : o * i
    : Array.isArray(o)
      ? (i) => {
          if (typeof i == 'string') return i
          const s = Math.abs(i),
            l = o[s]
          return i >= 0 ? l : typeof l == 'number' ? -l : `-${l}`
        }
      : typeof o == 'function'
        ? o
        : () => {}
}
function aa(e) {
  return Gi(e, 'spacing', 8)
}
function zr(e, t) {
  return typeof t == 'string' || t == null ? t : e(t)
}
function QS(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = zr(t, n)), r), {})
}
function YS(e, t, n, r) {
  if (!t.includes(n)) return null
  const o = GS(n),
    i = QS(o, r),
    s = e[n]
  return It(e, s, i)
}
function ly(e, t) {
  const n = aa(e.theme)
  return Object.keys(e)
    .map((r) => YS(e, t, r, n))
    .reduce(di, {})
}
function ze(e) {
  return ly(e, Td)
}
ze.propTypes = {}
ze.filterProps = Td
function Ae(e) {
  return ly(e, Id)
}
Ae.propTypes = {}
Ae.filterProps = Id
function ay(e = 8, t = aa({ spacing: e })) {
  if (e.mui) return e
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((i) => {
        const s = t(i)
        return typeof s == 'number' ? `${s}px` : s
      })
      .join(' ')
  return ((n.mui = !0), n)
}
function ua(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? di(o, t[i](r)) : o), {})
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  )
}
function Ht(e) {
  return typeof e != 'number' ? e : `${e}px solid`
}
function Xt(e, t) {
  return He({ prop: e, themeKey: 'borders', transform: t })
}
const XS = Xt('border', Ht),
  qS = Xt('borderTop', Ht),
  ZS = Xt('borderRight', Ht),
  JS = Xt('borderBottom', Ht),
  ex = Xt('borderLeft', Ht),
  tx = Xt('borderColor'),
  nx = Xt('borderTopColor'),
  rx = Xt('borderRightColor'),
  ox = Xt('borderBottomColor'),
  ix = Xt('borderLeftColor'),
  sx = Xt('outline', Ht),
  lx = Xt('outlineColor'),
  ca = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Gi(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: zr(t, r) })
      return It(e, e.borderRadius, n)
    }
    return null
  }
ca.propTypes = {}
ca.filterProps = ['borderRadius']
ua(XS, qS, ZS, JS, ex, tx, nx, rx, ox, ix, ca, sx, lx)
const da = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Gi(e.theme, 'spacing', 8),
      n = (r) => ({ gap: zr(t, r) })
    return It(e, e.gap, n)
  }
  return null
}
da.propTypes = {}
da.filterProps = ['gap']
const fa = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Gi(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: zr(t, r) })
    return It(e, e.columnGap, n)
  }
  return null
}
fa.propTypes = {}
fa.filterProps = ['columnGap']
const pa = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Gi(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: zr(t, r) })
    return It(e, e.rowGap, n)
  }
  return null
}
pa.propTypes = {}
pa.filterProps = ['rowGap']
const ax = He({ prop: 'gridColumn' }),
  ux = He({ prop: 'gridRow' }),
  cx = He({ prop: 'gridAutoFlow' }),
  dx = He({ prop: 'gridAutoColumns' }),
  fx = He({ prop: 'gridAutoRows' }),
  px = He({ prop: 'gridTemplateColumns' }),
  mx = He({ prop: 'gridTemplateRows' }),
  hx = He({ prop: 'gridTemplateAreas' }),
  gx = He({ prop: 'gridArea' })
ua(da, fa, pa, ax, ux, cx, dx, fx, px, mx, hx, gx)
function yo(e, t) {
  return t === 'grey' ? t : e
}
const yx = He({ prop: 'color', themeKey: 'palette', transform: yo }),
  vx = He({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: yo,
  }),
  Sx = He({ prop: 'backgroundColor', themeKey: 'palette', transform: yo })
ua(yx, vx, Sx)
function Nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const xx = He({ prop: 'width', transform: Nt }),
  Md = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var o, i, s, l, a
        const r =
          ((s =
            (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : i.values) == null
            ? void 0
            : s[n]) || sa[n]
        return r
          ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null
              ? void 0
              : a.unit) !== 'px'
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: Nt(n) }
      }
      return It(e, e.maxWidth, t)
    }
    return null
  }
Md.filterProps = ['maxWidth']
const Cx = He({ prop: 'minWidth', transform: Nt }),
  wx = He({ prop: 'height', transform: Nt }),
  bx = He({ prop: 'maxHeight', transform: Nt }),
  kx = He({ prop: 'minHeight', transform: Nt })
He({ prop: 'size', cssProperty: 'width', transform: Nt })
He({ prop: 'size', cssProperty: 'height', transform: Nt })
const Ex = He({ prop: 'boxSizing' })
ua(xx, Md, Cx, wx, bx, kx, Ex)
const Qi = {
  border: { themeKey: 'borders', transform: Ht },
  borderTop: { themeKey: 'borders', transform: Ht },
  borderRight: { themeKey: 'borders', transform: Ht },
  borderBottom: { themeKey: 'borders', transform: Ht },
  borderLeft: { themeKey: 'borders', transform: Ht },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: Ht },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: ca },
  color: { themeKey: 'palette', transform: yo },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: yo,
  },
  backgroundColor: { themeKey: 'palette', transform: yo },
  p: { style: Ae },
  pt: { style: Ae },
  pr: { style: Ae },
  pb: { style: Ae },
  pl: { style: Ae },
  px: { style: Ae },
  py: { style: Ae },
  padding: { style: Ae },
  paddingTop: { style: Ae },
  paddingRight: { style: Ae },
  paddingBottom: { style: Ae },
  paddingLeft: { style: Ae },
  paddingX: { style: Ae },
  paddingY: { style: Ae },
  paddingInline: { style: Ae },
  paddingInlineStart: { style: Ae },
  paddingInlineEnd: { style: Ae },
  paddingBlock: { style: Ae },
  paddingBlockStart: { style: Ae },
  paddingBlockEnd: { style: Ae },
  m: { style: ze },
  mt: { style: ze },
  mr: { style: ze },
  mb: { style: ze },
  ml: { style: ze },
  mx: { style: ze },
  my: { style: ze },
  margin: { style: ze },
  marginTop: { style: ze },
  marginRight: { style: ze },
  marginBottom: { style: ze },
  marginLeft: { style: ze },
  marginX: { style: ze },
  marginY: { style: ze },
  marginInline: { style: ze },
  marginInlineStart: { style: ze },
  marginInlineEnd: { style: ze },
  marginBlock: { style: ze },
  marginBlockStart: { style: ze },
  marginBlockEnd: { style: ze },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: da },
  rowGap: { style: pa },
  columnGap: { style: fa },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Nt },
  maxWidth: { style: Md },
  minWidth: { transform: Nt },
  height: { transform: Nt },
  maxHeight: { transform: Nt },
  minHeight: { transform: Nt },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
}
function Px(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t)
  return e.every((r) => n.size === Object.keys(r).length)
}
function $x(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Rx() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      l = i[n]
    if (!l) return { [n]: r }
    const { cssProperty: a = n, themeKey: u, transform: d, style: f } = l
    if (r == null) return null
    if (u === 'typography' && r === 'inherit') return { [n]: r }
    const p = la(o, u) || {}
    return f
      ? f(s)
      : It(s, r, (v) => {
          let C = gl(p, d, v)
          return (
            v === C &&
              typeof v == 'string' &&
              (C = gl(p, d, `${n}${v === 'default' ? '' : F(v)}`, v)),
            a === !1 ? C : { [a]: C }
          )
        })
  }
  function t(n) {
    const { sx: r, theme: o = {}, nested: i } = n || {}
    if (!r) return null
    const s = o.unstable_sxConfig ?? Qi
    function l(a) {
      let u = a
      if (typeof a == 'function') u = a(o)
      else if (typeof a != 'object') return a
      if (!u) return null
      const d = sy(o.breakpoints),
        f = Object.keys(d)
      let p = d
      return (
        Object.keys(u).forEach((y) => {
          const v = $x(u[y], o)
          if (v != null)
            if (typeof v == 'object')
              if (s[y]) p = di(p, e(y, v, o, s))
              else {
                const C = It({ theme: o }, v, (k) => ({ [y]: k }))
                Px(C, v)
                  ? (p[y] = t({ sx: v, theme: o, nested: !0 }))
                  : (p = di(p, C))
              }
            else p = di(p, e(y, v, o, s))
        }),
        !i && o.modularCssLayers
          ? { '@layer sx': xp(o, sc(f, p)) }
          : xp(o, sc(f, p))
      )
    }
    return Array.isArray(r) ? r.map(l) : l(r)
  }
  return t
}
const ar = Rx()
ar.filterProps = ['sx']
function Tx(e, t) {
  var r
  const n = this
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != 'function'
    )
      return {}
    let o = n.getColorSchemeSelector(e)
    return o === '&'
      ? t
      : ((o.includes('data-') || o.includes('.')) &&
          (o = `*:where(${o.replace(/\s*&$/, '')}) &`),
        { [o]: t })
  }
  return n.palette.mode === e ? t : {}
}
function Yi(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: o,
      shape: i = {},
      ...s
    } = e,
    l = AS(n),
    a = ay(o)
  let u = et(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...r },
      spacing: a,
      shape: { ...BS, ...i },
    },
    s,
  )
  return (
    (u = _S(u)),
    (u.applyStyles = Tx),
    (u = t.reduce((d, f) => et(d, f), u)),
    (u.unstable_sxConfig = {
      ...Qi,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (u.unstable_sx = function (f) {
      return ar({ sx: f, theme: this })
    }),
    u
  )
}
function Ix(e) {
  return Object.keys(e).length === 0
}
function Nd(e = null) {
  const t = x.useContext(Vi)
  return !t || Ix(t) ? e : t
}
const Mx = Yi()
function ma(e = Mx) {
  return Nd(e)
}
function qa(e) {
  const t = or(e)
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) ||
        (t.styles = `@layer global{${t.styles}}`),
      t)
    : e
}
function uy({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = ma(n),
    o = (t && r[t]) || r
  let i = typeof e == 'function' ? e(o) : e
  return (
    o.modularCssLayers &&
      (Array.isArray(i)
        ? (i = i.map((s) => qa(typeof s == 'function' ? s(o) : s)))
        : (i = qa(i))),
    b.jsx(ty, { styles: i })
  )
}
const Nx = (e) => {
  var r
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? Qi
  return (
    Object.keys(e).forEach((o) => {
      n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o])
    }),
    t
  )
}
function ha(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: o } = Nx(n)
  let i
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
        ? (i = (...s) => {
            const l = t(...s)
            return gn(l) ? { ...r, ...l } : r
          })
        : (i = { ...r, ...t }),
    { ...o, sx: i }
  )
}
const bp = (e) => e,
  Ox = () => {
    let e = bp
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = bp
      },
    }
  },
  cy = Ox()
function dy(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length
      for (t = 0; t < o; t++)
        e[t] && (n = dy(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function V() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = dy(e)) && (r && (r += ' '), (r += t))
  return r
}
function Lx(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = 'MuiBox-root',
      generateClassName: o,
    } = e,
    i = ny('div', {
      shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as',
    })(ar)
  return x.forwardRef(function (a, u) {
    const d = ma(n),
      { className: f, component: p = 'div', ...y } = ha(a)
    return b.jsx(i, {
      as: p,
      ref: u,
      className: V(f, o ? o(r) : r),
      theme: (t && d[t]) || d,
      ...y,
    })
  })
}
const zx = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
}
function ee(e, t, n = 'Mui') {
  const r = zx[t]
  return r ? `${n}-${r}` : `${cy.generate(e)}-${t}`
}
function q(e, t, n = 'Mui') {
  const r = {}
  return (
    t.forEach((o) => {
      r[o] = ee(e, o, n)
    }),
    r
  )
}
function fy(e) {
  const { variants: t, ...n } = e,
    r = { variants: t, style: or(n), isProcessed: !0 }
  return (
    r.style === n ||
      (t &&
        t.forEach((o) => {
          typeof o.style != 'function' && (o.style = or(o.style))
        })),
    r
  )
}
const Ax = Yi()
function Za(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
function kr(e, t) {
  return (
    t &&
      e &&
      typeof e == 'object' &&
      e.styles &&
      !e.styles.startsWith('@layer') &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  )
}
function jx(e) {
  return e ? (t, n) => n[e] : null
}
function Fx(e, t, n) {
  e.theme = Bx(e.theme) ? n : e.theme[t] || e.theme
}
function Bs(e, t, n) {
  const r = typeof t == 'function' ? t(e) : t
  if (Array.isArray(r)) return r.flatMap((o) => Bs(e, o, n))
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o
    if (r.isProcessed) o = n ? kr(r.style, n) : r.style
    else {
      const { variants: i, ...s } = r
      o = n ? kr(or(s), n) : s
    }
    return py(e, r.variants, [o], n)
  }
  return r != null && r.isProcessed
    ? n
      ? kr(or(r.style), n)
      : r.style
    : n
      ? kr(or(r), n)
      : r
}
function py(e, t, n = [], r = void 0) {
  var i
  let o
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s]
    if (typeof l.props == 'function') {
      if (
        (o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !l.props(o))
      )
        continue
    } else
      for (const a in l.props)
        if (
          e[a] !== l.props[a] &&
          ((i = e.ownerState) == null ? void 0 : i[a]) !== l.props[a]
        )
          continue e
    typeof l.style == 'function'
      ? (o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        n.push(r ? kr(or(l.style(o)), r) : l.style(o)))
      : n.push(r ? kr(or(l.style), r) : l.style)
  }
  return n
}
function my(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ax,
    rootShouldForwardProp: r = Za,
    slotShouldForwardProp: o = Za,
  } = e
  function i(l) {
    Fx(l, t, n)
  }
  return (l, a = {}) => {
    NS(l, ($) => $.filter((w) => w !== ar))
    const {
        name: u,
        slot: d,
        skipVariantsResolver: f,
        skipSx: p,
        overridesResolver: y = jx(Wx(d)),
        ...v
      } = a,
      C = (u && u.startsWith('Mui')) || d ? 'components' : 'custom',
      k = f !== void 0 ? f : (d && d !== 'Root' && d !== 'root') || !1,
      h = p || !1
    let g = Za
    d === 'Root' || d === 'root' ? (g = r) : d ? (g = o) : Dx(l) && (g = void 0)
    const m = ny(l, { shouldForwardProp: g, label: _x(), ...v }),
      S = ($) => {
        if ($.__emotion_real === $) return $
        if (typeof $ == 'function')
          return function (E) {
            return Bs(E, $, E.theme.modularCssLayers ? C : void 0)
          }
        if (gn($)) {
          const w = fy($)
          return function (T) {
            return w.variants
              ? Bs(T, w, T.theme.modularCssLayers ? C : void 0)
              : T.theme.modularCssLayers
                ? kr(w.style, C)
                : w.style
          }
        }
        return $
      },
      P = (...$) => {
        const w = [],
          E = $.map(S),
          T = []
        if (
          (w.push(i),
          u &&
            y &&
            T.push(function (O) {
              var W, z
              const L =
                (z = (W = O.theme.components) == null ? void 0 : W[u]) == null
                  ? void 0
                  : z.styleOverrides
              if (!L) return null
              const A = {}
              for (const I in L)
                A[I] = Bs(O, L[I], O.theme.modularCssLayers ? 'theme' : void 0)
              return y(O, A)
            }),
          u &&
            !k &&
            T.push(function (O) {
              var A, W
              const j = O.theme,
                L =
                  (W =
                    (A = j == null ? void 0 : j.components) == null
                      ? void 0
                      : A[u]) == null
                    ? void 0
                    : W.variants
              return L
                ? py(O, L, [], O.theme.modularCssLayers ? 'theme' : void 0)
                : null
            }),
          h || T.push(ar),
          Array.isArray(E[0]))
        ) {
          const M = E.shift(),
            O = new Array(w.length).fill(''),
            j = new Array(T.length).fill('')
          let L
          ;((L = [...O, ...M, ...j]),
            (L.raw = [...O, ...M.raw, ...j]),
            w.unshift(L))
        }
        const c = [...w, ...E, ...T],
          R = m(...c)
        return (l.muiName && (R.muiName = l.muiName), R)
      }
    return (m.withConfig && (P.withConfig = m.withConfig), P)
  }
}
function _x(e, t) {
  return void 0
}
function Bx(e) {
  for (const t in e) return !1
  return !0
}
function Dx(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96
}
function Wx(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1)
}
const hy = my()
function zi(e, t) {
  const n = { ...t }
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r
      if (o === 'components' || o === 'slots') n[o] = { ...e[o], ...n[o] }
      else if (o === 'componentsProps' || o === 'slotProps') {
        const i = e[o],
          s = t[o]
        if (!s) n[o] = i || {}
        else if (!i) n[o] = s
        else {
          n[o] = { ...s }
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const a = l
              n[o][a] = zi(i[a], s[a])
            }
        }
      } else n[o] === void 0 && (n[o] = e[o])
    }
  return n
}
function Ux(e) {
  const { theme: t, name: n, props: r } = e
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : zi(t.components[n].defaultProps, r)
}
function gy({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ma(n)
  return (r && (o = o[r] || o), Ux({ theme: o, name: t, props: e }))
}
const Cn = typeof window < 'u' ? x.useLayoutEffect : x.useEffect
function Hx(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n))
}
function Od(e, t = 0, n = 1) {
  return Hx(e, t, n)
}
function Vx(e) {
  e = e.slice(1)
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g')
  let n = e.match(t)
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  )
}
function ur(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return ur(Vx(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(n))
    throw new Error(An(9, e))
  let r = e.substring(t + 1, e.length - 1),
    o
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(
        o,
      ))
    )
      throw new Error(An(10, o))
  } else r = r.split(',')
  return (
    (r = r.map((i) => parseFloat(i))),
    { type: n, values: r, colorSpace: o }
  )
}
const Kx = (e) => {
    const t = ur(e)
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes('hsl') && r !== 0 ? `${n}%` : n))
      .join(' ')
  },
  Zo = (e, t) => {
    try {
      return Kx(e)
    } catch {
      return e
    }
  }
function ga(e) {
  const { type: t, colorSpace: n } = e
  let { values: r } = e
  return (
    t.includes('rgb')
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes('hsl') && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes('color') ? (r = `${n} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${t}(${r})`
  )
}
function yy(e) {
  e = ur(e)
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1)
  let l = 'rgb'
  const a = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ]
  return (
    e.type === 'hsla' && ((l += 'a'), a.push(t[3])),
    ga({ type: l, values: a })
  )
}
function lc(e) {
  e = ur(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? ur(yy(e)).values : e.values
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  )
}
function Gx(e, t) {
  const n = lc(e),
    r = lc(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function ye(e, t) {
  return (
    (e = ur(e)),
    (t = Od(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ga(e)
  )
}
function ys(e, t, n) {
  try {
    return ye(e, t)
  } catch {
    return e
  }
}
function Ar(e, t) {
  if (((e = ur(e)), (t = Od(t)), e.type.includes('hsl'))) e.values[2] *= 1 - t
  else if (e.type.includes('rgb') || e.type.includes('color'))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return ga(e)
}
function xe(e, t, n) {
  try {
    return Ar(e, t)
  } catch {
    return e
  }
}
function jr(e, t) {
  if (((e = ur(e)), (t = Od(t)), e.type.includes('hsl')))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.includes('rgb'))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.includes('color'))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return ga(e)
}
function Ce(e, t, n) {
  try {
    return jr(e, t)
  } catch {
    return e
  }
}
function Qx(e, t = 0.15) {
  return lc(e) > 0.5 ? Ar(e, t) : jr(e, t)
}
function vs(e, t, n) {
  try {
    return Qx(e, t)
  } catch {
    return e
  }
}
function kp(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            ;(t.apply(this, o), n.apply(this, o))
          },
    () => {},
  )
}
function vy(e, t = 166) {
  let n
  function r(...o) {
    const i = () => {
      e.apply(this, o)
    }
    ;(clearTimeout(n), (n = setTimeout(i, t)))
  }
  return (
    (r.clear = () => {
      clearTimeout(n)
    }),
    r
  )
}
function Ds(e, t) {
  var n, r, o
  return (
    x.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : o.muiName),
    ) !== -1
  )
}
function ln(e) {
  return (e && e.ownerDocument) || document
}
function jn(e) {
  return ln(e).defaultView || window
}
function Ep(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
let Pp = 0
function Yx(e) {
  const [t, n] = x.useState(e),
    r = e || t
  return (
    x.useEffect(() => {
      t == null && ((Pp += 1), n(`mui-${Pp}`))
    }, [t]),
    r
  )
}
const Xx = { ...au },
  $p = Xx.useId
function Xi(e) {
  if ($p !== void 0) {
    const t = $p()
    return e ?? t
  }
  return Yx(e)
}
function ac({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: o } = x.useRef(e !== void 0),
    [i, s] = x.useState(t),
    l = o ? e : i,
    a = x.useCallback((u) => {
      o || s(u)
    }, [])
  return [l, a]
}
function Tr(e) {
  const t = x.useRef(e)
  return (
    Cn(() => {
      t.current = e
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  )
}
function at(...e) {
  const t = x.useRef(void 0),
    n = x.useCallback((r) => {
      const o = e.map((i) => {
        if (i == null) return null
        if (typeof i == 'function') {
          const s = i,
            l = s(r)
          return typeof l == 'function'
            ? l
            : () => {
                s(null)
              }
        }
        return (
          (i.current = r),
          () => {
            i.current = null
          }
        )
      })
      return () => {
        o.forEach((i) => (i == null ? void 0 : i()))
      }
    }, e)
  return x.useMemo(
    () =>
      e.every((r) => r == null)
        ? null
        : (r) => {
            ;(t.current && (t.current(), (t.current = void 0)),
              r != null && (t.current = n(r)))
          },
    e,
  )
}
const Rp = {}
function Sy(e, t) {
  const n = x.useRef(Rp)
  return (n.current === Rp && (n.current = e(t)), n)
}
const qx = []
function Zx(e) {
  x.useEffect(e, qx)
}
class Ld {
  constructor() {
    No(this, 'currentId', null)
    No(this, 'clear', () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null))
    })
    No(this, 'disposeEffect', () => this.clear)
  }
  static create() {
    return new Ld()
  }
  start(t, n) {
    ;(this.clear(),
      (this.currentId = setTimeout(() => {
        ;((this.currentId = null), n())
      }, t)))
  }
}
function xy() {
  const e = Sy(Ld.create).current
  return (Zx(e.disposeEffect), e)
}
function Tp(e) {
  try {
    return e.matches(':focus-visible')
  } catch {}
  return !1
}
function Cy(e = window) {
  const t = e.document.documentElement.clientWidth
  return e.innerWidth - t
}
function te(e, t, n = void 0) {
  const r = {}
  for (const o in e) {
    const i = e[o]
    let s = '',
      l = !0
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a]
      u &&
        ((s += (l === !0 ? '' : ' ') + t(u)),
        (l = !1),
        n && n[u] && (s += ' ' + n[u]))
    }
    r[o] = s
  }
  return r
}
function Jx(e) {
  return typeof e == 'string'
}
function wy(e, t, n) {
  return e === void 0 || Jx(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } }
}
function by(e, t = []) {
  if (e === void 0) return {}
  const n = {}
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r),
      )
      .forEach((r) => {
        n[r] = e[r]
      }),
    n
  )
}
function Ip(e) {
  if (e === void 0) return {}
  const t = {}
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n]
      }),
    t
  )
}
function ky(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e
  if (!t) {
    const y = V(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      v = {
        ...(n == null ? void 0 : n.style),
        ...(o == null ? void 0 : o.style),
        ...(r == null ? void 0 : r.style),
      },
      C = { ...n, ...o, ...r }
    return (
      y.length > 0 && (C.className = y),
      Object.keys(v).length > 0 && (C.style = v),
      { props: C, internalRef: void 0 }
    )
  }
  const s = by({ ...o, ...r }),
    l = Ip(r),
    a = Ip(o),
    u = t(s),
    d = V(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className,
    ),
    f = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
      ...(r == null ? void 0 : r.style),
    },
    p = { ...u, ...n, ...a, ...l }
  return (
    d.length > 0 && (p.className = d),
    Object.keys(f).length > 0 && (p.style = f),
    { props: p, internalRef: u.ref }
  )
}
function Ey(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e
}
function eC(e) {
  var f
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: o = !1,
      ...i
    } = e,
    s = o ? {} : Ey(n, r),
    { props: l, internalRef: a } = ky({ ...i, externalSlotProps: s }),
    u = at(
      a,
      s == null ? void 0 : s.ref,
      (f = e.additionalProps) == null ? void 0 : f.ref,
    )
  return wy(t, { ...l, ref: u }, r)
}
function qi(e) {
  var t
  return parseInt(x.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null
}
const Py = x.createContext(null)
function zd() {
  return x.useContext(Py)
}
const tC = typeof Symbol == 'function' && Symbol.for,
  nC = tC ? Symbol.for('mui.nested') : '__THEME_NESTED__'
function rC(e, t) {
  return typeof t == 'function' ? t(e) : { ...e, ...t }
}
function oC(e) {
  const { children: t, theme: n } = e,
    r = zd(),
    o = x.useMemo(() => {
      const i = r === null ? { ...n } : rC(r, n)
      return (i != null && (i[nC] = r !== null), i)
    }, [n, r])
  return b.jsx(Py.Provider, { value: o, children: t })
}
const $y = x.createContext()
function iC({ value: e, ...t }) {
  return b.jsx($y.Provider, { value: e ?? !0, ...t })
}
const sC = () => x.useContext($y) ?? !1,
  Ry = x.createContext(void 0)
function lC({ value: e, children: t }) {
  return b.jsx(Ry.Provider, { value: e, children: t })
}
function aC(e) {
  const { theme: t, name: n, props: r } = e
  if (!t || !t.components || !t.components[n]) return r
  const o = t.components[n]
  return o.defaultProps
    ? zi(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
      ? zi(o, r)
      : r
}
function uC({ props: e, name: t }) {
  const n = x.useContext(Ry)
  return aC({ props: e, name: t, theme: { components: n } })
}
function cC(e) {
  const t = Nd(),
    n = Xi() || '',
    { modularCssLayers: r } = e
  let o = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx'
  return (
    !r || t !== null
      ? (o = '')
      : typeof r == 'string'
        ? (o = r.replace(/mui(?!\.)/g, o))
        : (o = `@layer ${o};`),
    Cn(() => {
      var l, a
      const i = document.querySelector('head')
      if (!i) return
      const s = i.firstChild
      if (o) {
        if (
          s &&
          (l = s.hasAttribute) != null &&
          l.call(s, 'data-mui-layer-order') &&
          s.getAttribute('data-mui-layer-order') === n
        )
          return
        const u = document.createElement('style')
        ;(u.setAttribute('data-mui-layer-order', n),
          (u.textContent = o),
          i.prepend(u))
      } else
        (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null ||
          a.remove()
    }, [o, n]),
    o ? b.jsx(uy, { styles: o }) : null
  )
}
const Mp = {}
function Np(e, t, n, r = !1) {
  return x.useMemo(() => {
    const o = (e && t[e]) || t
    if (typeof n == 'function') {
      const i = n(o),
        s = e ? { ...t, [e]: i } : i
      return r ? () => s : s
    }
    return e ? { ...t, [e]: n } : { ...t, ...n }
  }, [e, t, n, r])
}
function Ty(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Nd(Mp),
    i = zd() || Mp,
    s = Np(r, o, n),
    l = Np(r, i, n, !0),
    a = (r ? s[r] : s).direction === 'rtl',
    u = cC(s)
  return b.jsx(oC, {
    theme: l,
    children: b.jsx(Vi.Provider, {
      value: s,
      children: b.jsx(iC, {
        value: a,
        children: b.jsxs(lC, {
          value: r ? s[r].components : s.components,
          children: [u, t],
        }),
      }),
    }),
  })
}
const Op = { theme: void 0 }
function dC(e) {
  let t, n
  return function (o) {
    let i = t
    return (
      (i === void 0 || o.theme !== n) &&
        ((Op.theme = o.theme), (i = fy(e(Op))), (t = i), (n = o.theme)),
      i
    )
  }
}
const Ad = 'mode',
  jd = 'color-scheme',
  fC = 'data-color-scheme'
function pC(e) {
  const {
    defaultMode: t = 'system',
    defaultLightColorScheme: n = 'light',
    defaultDarkColorScheme: r = 'dark',
    modeStorageKey: o = Ad,
    colorSchemeStorageKey: i = jd,
    attribute: s = fC,
    colorSchemeNode: l = 'document.documentElement',
    nonce: a,
  } = e || {}
  let u = '',
    d = s
  if (
    (s === 'class' && (d = '.%s'),
    s === 'data' && (d = '[data-%s]'),
    d.startsWith('.'))
  ) {
    const p = d.substring(1)
    u += `${l}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${l}.classList.add('${p}'.replace('%s', colorScheme));`
  }
  const f = d.match(/\[([^\]]+)\]/)
  if (f) {
    const [p, y] = f[1].split('=')
    ;(y ||
      (u += `${l}.removeAttribute('${p}'.replace('%s', light));
      ${l}.removeAttribute('${p}'.replace('%s', dark));`),
      (u += `
      ${l}.setAttribute('${p}'.replace('%s', colorScheme), ${y ? `${y}.replace('%s', colorScheme)` : '""'});`))
  } else u += `${l}.setAttribute('${d}', colorScheme);`
  return b.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? a : '',
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`,
      },
    },
    'mui-color-scheme-init',
  )
}
function mC() {}
const hC = ({ key: e, storageWindow: t }) => (
  !t && typeof window < 'u' && (t = window),
  {
    get(n) {
      if (typeof window > 'u') return
      if (!t) return n
      let r
      try {
        r = t.localStorage.getItem(e)
      } catch {}
      return r || n
    },
    set: (n) => {
      if (t)
        try {
          t.localStorage.setItem(e, n)
        } catch {}
    },
    subscribe: (n) => {
      if (!t) return mC
      const r = (o) => {
        const i = o.newValue
        o.key === e && n(i)
      }
      return (
        t.addEventListener('storage', r),
        () => {
          t.removeEventListener('storage', r)
        }
      )
    },
  }
)
function Ja() {}
function Lp(e) {
  if (
    typeof window < 'u' &&
    typeof window.matchMedia == 'function' &&
    e === 'system'
  )
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
function Iy(e, t) {
  if (e.mode === 'light' || (e.mode === 'system' && e.systemMode === 'light'))
    return t('light')
  if (e.mode === 'dark' || (e.mode === 'system' && e.systemMode === 'dark'))
    return t('dark')
}
function gC(e) {
  return Iy(e, (t) => {
    if (t === 'light') return e.lightColorScheme
    if (t === 'dark') return e.darkColorScheme
  })
}
function yC(e) {
  const {
      defaultMode: t = 'light',
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = Ad,
      colorSchemeStorageKey: s = jd,
      storageWindow: l = typeof window > 'u' ? void 0 : window,
      storageManager: a = hC,
      noSsr: u = !1,
    } = e,
    d = o.join(','),
    f = o.length > 1,
    p = x.useMemo(
      () => (a == null ? void 0 : a({ key: i, storageWindow: l })),
      [a, i, l],
    ),
    y = x.useMemo(
      () => (a == null ? void 0 : a({ key: `${s}-light`, storageWindow: l })),
      [a, s, l],
    ),
    v = x.useMemo(
      () => (a == null ? void 0 : a({ key: `${s}-dark`, storageWindow: l })),
      [a, s, l],
    ),
    [C, k] = x.useState(() => {
      const E = (p == null ? void 0 : p.get(t)) || t,
        T = (y == null ? void 0 : y.get(n)) || n,
        c = (v == null ? void 0 : v.get(r)) || r
      return {
        mode: E,
        systemMode: Lp(E),
        lightColorScheme: T,
        darkColorScheme: c,
      }
    }),
    [h, g] = x.useState(u || !f)
  x.useEffect(() => {
    g(!0)
  }, [])
  const m = gC(C),
    S = x.useCallback(
      (E) => {
        k((T) => {
          if (E === T.mode) return T
          const c = E ?? t
          return (p == null || p.set(c), { ...T, mode: c, systemMode: Lp(c) })
        })
      },
      [p, t],
    ),
    P = x.useCallback(
      (E) => {
        E
          ? typeof E == 'string'
            ? E && !d.includes(E)
              ? console.error(
                  `\`${E}\` does not exist in \`theme.colorSchemes\`.`,
                )
              : k((T) => {
                  const c = { ...T }
                  return (
                    Iy(T, (R) => {
                      ;(R === 'light' &&
                        (y == null || y.set(E), (c.lightColorScheme = E)),
                        R === 'dark' &&
                          (v == null || v.set(E), (c.darkColorScheme = E)))
                    }),
                    c
                  )
                })
            : k((T) => {
                const c = { ...T },
                  R = E.light === null ? n : E.light,
                  M = E.dark === null ? r : E.dark
                return (
                  R &&
                    (d.includes(R)
                      ? ((c.lightColorScheme = R), y == null || y.set(R))
                      : console.error(
                          `\`${R}\` does not exist in \`theme.colorSchemes\`.`,
                        )),
                  M &&
                    (d.includes(M)
                      ? ((c.darkColorScheme = M), v == null || v.set(M))
                      : console.error(
                          `\`${M}\` does not exist in \`theme.colorSchemes\`.`,
                        )),
                  c
                )
              })
          : k(
              (T) => (
                y == null || y.set(n),
                v == null || v.set(r),
                { ...T, lightColorScheme: n, darkColorScheme: r }
              ),
            )
      },
      [d, y, v, n, r],
    ),
    $ = x.useCallback(
      (E) => {
        C.mode === 'system' &&
          k((T) => {
            const c = E != null && E.matches ? 'dark' : 'light'
            return T.systemMode === c ? T : { ...T, systemMode: c }
          })
      },
      [C.mode],
    ),
    w = x.useRef($)
  return (
    (w.current = $),
    x.useEffect(() => {
      if (typeof window.matchMedia != 'function' || !f) return
      const E = (...c) => w.current(...c),
        T = window.matchMedia('(prefers-color-scheme: dark)')
      return (
        T.addListener(E),
        E(T),
        () => {
          T.removeListener(E)
        }
      )
    }, [f]),
    x.useEffect(() => {
      if (f) {
        const E =
            (p == null
              ? void 0
              : p.subscribe((R) => {
                  ;(!R || ['light', 'dark', 'system'].includes(R)) && S(R || t)
                })) || Ja,
          T =
            (y == null
              ? void 0
              : y.subscribe((R) => {
                  ;(!R || d.match(R)) && P({ light: R })
                })) || Ja,
          c =
            (v == null
              ? void 0
              : v.subscribe((R) => {
                  ;(!R || d.match(R)) && P({ dark: R })
                })) || Ja
        return () => {
          ;(E(), T(), c())
        }
      }
    }, [P, S, d, t, l, f, p, y, v]),
    {
      ...C,
      mode: h ? C.mode : void 0,
      systemMode: h ? C.systemMode : void 0,
      colorScheme: h ? m : void 0,
      setMode: S,
      setColorScheme: P,
    }
  )
}
const vC =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function SC(e) {
  const {
      themeId: t,
      theme: n = {},
      modeStorageKey: r = Ad,
      colorSchemeStorageKey: o = jd,
      disableTransitionOnChange: i = !1,
      defaultColorScheme: s,
      resolveTheme: l,
    } = e,
    a = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    u = x.createContext(void 0),
    d = () => x.useContext(u) || a,
    f = {},
    p = {}
  function y(h) {
    var Ve, kn, _n, Bn
    const {
        children: g,
        theme: m,
        modeStorageKey: S = r,
        colorSchemeStorageKey: P = o,
        disableTransitionOnChange: $ = i,
        storageManager: w,
        storageWindow: E = typeof window > 'u' ? void 0 : window,
        documentNode: T = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: c = typeof document > 'u'
          ? void 0
          : document.documentElement,
        disableNestedContext: R = !1,
        disableStyleSheetGeneration: M = !1,
        defaultMode: O = 'system',
        noSsr: j,
      } = h,
      L = x.useRef(!1),
      A = zd(),
      W = x.useContext(u),
      z = !!W && !R,
      I = x.useMemo(() => m || (typeof n == 'function' ? n() : n), [m]),
      D = I[t],
      H = D || I,
      { colorSchemes: Y = f, components: ae = p, cssVarPrefix: Z } = H,
      K = Object.keys(Y)
        .filter((Le) => !!Y[Le])
        .join(','),
      J = x.useMemo(() => K.split(','), [K]),
      ce = typeof s == 'string' ? s : s.light,
      ut = typeof s == 'string' ? s : s.dark,
      Ee =
        Y[ce] && Y[ut]
          ? O
          : ((kn =
              (Ve = Y[H.defaultColorScheme]) == null ? void 0 : Ve.palette) ==
            null
              ? void 0
              : kn.mode) || ((_n = H.palette) == null ? void 0 : _n.mode),
      {
        mode: X,
        setMode: oe,
        systemMode: re,
        lightColorScheme: Fe,
        darkColorScheme: ie,
        colorScheme: be,
        setColorScheme: ct,
      } = yC({
        supportedColorSchemes: J,
        defaultLightColorScheme: ce,
        defaultDarkColorScheme: ut,
        modeStorageKey: S,
        colorSchemeStorageKey: P,
        defaultMode: Ee,
        storageManager: w,
        storageWindow: E,
        noSsr: j,
      })
    let Qe = X,
      fe = be
    z && ((Qe = W.mode), (fe = W.colorScheme))
    const dt = x.useMemo(() => {
        var ge
        const Le = fe || H.defaultColorScheme,
          De =
            ((ge = H.generateThemeVars) == null ? void 0 : ge.call(H)) ||
            H.vars,
          We = {
            ...H,
            components: ae,
            colorSchemes: Y,
            cssVarPrefix: Z,
            vars: De,
          }
        if (
          (typeof We.generateSpacing == 'function' &&
            (We.spacing = We.generateSpacing()),
          Le)
        ) {
          const qe = Y[Le]
          qe &&
            typeof qe == 'object' &&
            Object.keys(qe).forEach((vt) => {
              qe[vt] && typeof qe[vt] == 'object'
                ? (We[vt] = { ...We[vt], ...qe[vt] })
                : (We[vt] = qe[vt])
            })
        }
        return l ? l(We) : We
      }, [H, fe, ae, Y, Z]),
      _e = H.colorSchemeSelector
    ;(Cn(() => {
      if (fe && c && _e && _e !== 'media') {
        const Le = _e
        let De = _e
        if (
          (Le === 'class' && (De = '.%s'),
          Le === 'data' && (De = '[data-%s]'),
          Le != null &&
            Le.startsWith('data-') &&
            !Le.includes('%s') &&
            (De = `[${Le}="%s"]`),
          De.startsWith('.'))
        )
          (c.classList.remove(
            ...J.map((We) => De.substring(1).replace('%s', We)),
          ),
            c.classList.add(De.substring(1).replace('%s', fe)))
        else {
          const We = De.replace('%s', fe).match(/\[([^\]]+)\]/)
          if (We) {
            const [ge, qe] = We[1].split('=')
            ;(qe ||
              J.forEach((vt) => {
                c.removeAttribute(ge.replace(fe, vt))
              }),
              c.setAttribute(ge, qe ? qe.replace(/"|'/g, '') : ''))
          } else c.setAttribute(De, fe)
        }
      }
    }, [fe, _e, c, J]),
      x.useEffect(() => {
        let Le
        if ($ && L.current && T) {
          const De = T.createElement('style')
          ;(De.appendChild(T.createTextNode(vC)),
            T.head.appendChild(De),
            window.getComputedStyle(T.body),
            (Le = setTimeout(() => {
              T.head.removeChild(De)
            }, 1)))
        }
        return () => {
          clearTimeout(Le)
        }
      }, [fe, $, T]),
      x.useEffect(
        () => (
          (L.current = !0),
          () => {
            L.current = !1
          }
        ),
        [],
      ))
    const Be = x.useMemo(
      () => ({
        allColorSchemes: J,
        colorScheme: fe,
        darkColorScheme: ie,
        lightColorScheme: Fe,
        mode: Qe,
        setColorScheme: ct,
        setMode: oe,
        systemMode: re,
      }),
      [J, fe, ie, Fe, Qe, ct, oe, re, dt.colorSchemeSelector],
    )
    let G = !0
    ;(M ||
      H.cssVariables === !1 ||
      (z && (A == null ? void 0 : A.cssVarPrefix) === Z)) &&
      (G = !1)
    const qt = b.jsxs(x.Fragment, {
      children: [
        b.jsx(Ty, { themeId: D ? t : void 0, theme: dt, children: g }),
        G &&
          b.jsx(ty, {
            styles:
              ((Bn = dt.generateStyleSheets) == null ? void 0 : Bn.call(dt)) ||
              [],
          }),
      ],
    })
    return z ? qt : b.jsx(u.Provider, { value: Be, children: qt })
  }
  const v = typeof s == 'string' ? s : s.light,
    C = typeof s == 'string' ? s : s.dark
  return {
    CssVarsProvider: y,
    useColorScheme: d,
    getInitColorSchemeScript: (h) =>
      pC({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: v,
        defaultDarkColorScheme: C,
        modeStorageKey: r,
        ...h,
      }),
  }
}
function xC(e = '') {
  function t(...r) {
    if (!r.length) return ''
    const o = r[0]
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ''}${o}${t(...r.slice(1))})`
      : `, ${o}`
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ''}${r}${t(...o)})`
}
const zp = (e, t, n, r = []) => {
    let o = e
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == 'object' && (o[i] = n)
        : o &&
          typeof o == 'object' &&
          (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]))
    })
  },
  CC = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([l, a]) => {
        ;(!n || (n && !n([...i, l]))) &&
          a != null &&
          (typeof a == 'object' && Object.keys(a).length > 0
            ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s)
            : t([...i, l], a, s))
      })
    }
    r(e)
  },
  wC = (e, t) =>
    typeof t == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((r) =>
          e.includes(r),
        ) || e[e.length - 1].toLowerCase().includes('opacity')
        ? t
        : `${t}px`
      : t
function eu(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {}
  return (
    CC(
      e,
      (l, a, u) => {
        if (
          (typeof a == 'string' || typeof a == 'number') &&
          (!r || !r(l, a))
        ) {
          const d = `--${n ? `${n}-` : ''}${l.join('-')}`,
            f = wC(l, a)
          ;(Object.assign(o, { [d]: f }),
            zp(i, l, `var(${d})`, u),
            zp(s, l, `var(${d}, ${f})`, u))
        }
      },
      (l) => l[0] === 'vars',
    ),
    { css: o, vars: i, varsWithDefaults: s }
  )
}
function bC(e, t = {}) {
  const {
      getSelector: n = k,
      disableCssColorScheme: r,
      colorSchemeSelector: o,
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: l = 'light',
      ...a
    } = e,
    { vars: u, css: d, varsWithDefaults: f } = eu(a, t)
  let p = f
  const y = {},
    { [l]: v, ...C } = i
  if (
    (Object.entries(C || {}).forEach(([m, S]) => {
      const { vars: P, css: $, varsWithDefaults: w } = eu(S, t)
      ;((p = et(p, w)), (y[m] = { css: $, vars: P }))
    }),
    v)
  ) {
    const { css: m, vars: S, varsWithDefaults: P } = eu(v, t)
    ;((p = et(p, P)), (y[l] = { css: m, vars: S }))
  }
  function k(m, S) {
    var $, w
    let P = o
    if (
      (o === 'class' && (P = '.%s'),
      o === 'data' && (P = '[data-%s]'),
      o != null &&
        o.startsWith('data-') &&
        !o.includes('%s') &&
        (P = `[${o}="%s"]`),
      m)
    ) {
      if (P === 'media')
        return e.defaultColorScheme === m
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${((w = ($ = i[m]) == null ? void 0 : $.palette) == null ? void 0 : w.mode) || m})`]:
                { ':root': S },
            }
      if (P)
        return e.defaultColorScheme === m
          ? `:root, ${P.replace('%s', String(m))}`
          : P.replace('%s', String(m))
    }
    return ':root'
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let m = { ...u }
      return (
        Object.entries(y).forEach(([, { vars: S }]) => {
          m = et(m, S)
        }),
        m
      )
    },
    generateStyleSheets: () => {
      var E, T
      const m = [],
        S = e.defaultColorScheme || 'light'
      function P(c, R) {
        Object.keys(R).length &&
          m.push(typeof c == 'string' ? { [c]: { ...R } } : c)
      }
      P(n(void 0, { ...d }), d)
      const { [S]: $, ...w } = y
      if ($) {
        const { css: c } = $,
          R =
            (T = (E = i[S]) == null ? void 0 : E.palette) == null
              ? void 0
              : T.mode,
          M = !r && R ? { colorScheme: R, ...c } : { ...c }
        P(n(S, { ...M }), M)
      }
      return (
        Object.entries(w).forEach(([c, { css: R }]) => {
          var j, L
          const M =
              (L = (j = i[c]) == null ? void 0 : j.palette) == null
                ? void 0
                : L.mode,
            O = !r && M ? { colorScheme: M, ...R } : { ...R }
          P(n(c, { ...O }), O)
        }),
        m
      )
    },
  }
}
function kC(e) {
  return function (n) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${n})`
      : e
        ? e.startsWith('data-') && !e.includes('%s')
          ? `[${e}="${n}"] &`
          : e === 'class'
            ? `.${n} &`
            : e === 'data'
              ? `[data-${n}] &`
              : `${e.replace('%s', n)} &`
        : '&'
  }
}
const EC = Yi(),
  PC = hy('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[`maxWidth${F(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ]
    },
  }),
  $C = (e) => gy({ props: e, name: 'MuiContainer', defaultTheme: EC }),
  RC = (e, t) => {
    const n = (a) => ee(t, a),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      l = {
        root: [
          'root',
          s && `maxWidth${F(String(s))}`,
          o && 'fixed',
          i && 'disableGutters',
        ],
      }
    return te(l, n, r)
  }
function TC(e = {}) {
  const {
      createStyledComponent: t = PC,
      useThemeProps: n = $C,
      componentName: r = 'MuiContainer',
    } = e,
    o = t(
      ({ theme: s, ownerState: l }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!l.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up('sm')]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: l }) =>
        l.fixed &&
        Object.keys(s.breakpoints.values).reduce((a, u) => {
          const d = u,
            f = s.breakpoints.values[d]
          return (
            f !== 0 &&
              (a[s.breakpoints.up(d)] = {
                maxWidth: `${f}${s.breakpoints.unit}`,
              }),
            a
          )
        }, {}),
      ({ theme: s, ownerState: l }) => ({
        ...(l.maxWidth === 'xs' && {
          [s.breakpoints.up('xs')]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(l.maxWidth &&
          l.maxWidth !== 'xs' && {
            [s.breakpoints.up(l.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[l.maxWidth]}${s.breakpoints.unit}`,
            },
          }),
      }),
    )
  return x.forwardRef(function (l, a) {
    const u = n(l),
      {
        className: d,
        component: f = 'div',
        disableGutters: p = !1,
        fixed: y = !1,
        maxWidth: v = 'lg',
        classes: C,
        ...k
      } = u,
      h = { ...u, component: f, disableGutters: p, fixed: y, maxWidth: v },
      g = RC(h, r)
    return b.jsx(o, {
      as: f,
      ownerState: h,
      className: V(g.root, d),
      ref: a,
      ...k,
    })
  })
}
const IC = Yi(),
  MC = hy('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })
function NC(e) {
  return gy({ props: e, name: 'MuiStack', defaultTheme: IC })
}
function OC(e, t) {
  const n = x.Children.toArray(e).filter(Boolean)
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(x.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    [],
  )
}
const LC = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom',
    })[e],
  zC = ({ ownerState: e, theme: t }) => {
    let n = {
      display: 'flex',
      flexDirection: 'column',
      ...It(
        { theme: t },
        Rr({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r }),
      ),
    }
    if (e.spacing) {
      const r = aa(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (a, u) => (
            ((typeof e.spacing == 'object' && e.spacing[u] != null) ||
              (typeof e.direction == 'object' && e.direction[u] != null)) &&
              (a[u] = !0),
            a
          ),
          {},
        ),
        i = Rr({ values: e.direction, base: o }),
        s = Rr({ values: e.spacing, base: o })
      ;(typeof i == 'object' &&
        Object.keys(i).forEach((a, u, d) => {
          if (!i[a]) {
            const p = u > 0 ? i[d[u - 1]] : 'column'
            i[a] = p
          }
        }),
        (n = et(
          n,
          It({ theme: t }, s, (a, u) =>
            e.useFlexGap
              ? { gap: zr(r, a) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    [`margin${LC(u ? i[u] : e.direction)}`]: zr(r, a),
                  },
                },
          ),
        )))
    }
    return ((n = WS(t.breakpoints, n)), n)
  }
function AC(e = {}) {
  const {
      createStyledComponent: t = MC,
      useThemeProps: n = NC,
      componentName: r = 'MuiStack',
    } = e,
    o = () => te({ root: ['root'] }, (a) => ee(r, a), {}),
    i = t(zC)
  return x.forwardRef(function (a, u) {
    const d = n(a),
      f = ha(d),
      {
        component: p = 'div',
        direction: y = 'column',
        spacing: v = 0,
        divider: C,
        children: k,
        className: h,
        useFlexGap: g = !1,
        ...m
      } = f,
      S = { direction: y, spacing: v, useFlexGap: g },
      P = o()
    return b.jsx(i, {
      as: p,
      ownerState: S,
      ref: u,
      className: V(P.root, h),
      ...m,
      children: C ? OC(k, C) : k,
    })
  })
}
function My() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Mi.white, default: Mi.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  }
}
const jC = My()
function Ny() {
  return {
    text: {
      primary: Mi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Mi.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  }
}
const Ap = Ny()
function jp(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
        ? (e.light = jr(e.main, o))
        : t === 'dark' && (e.dark = Ar(e.main, i)))
}
function FC(e = 'light') {
  return e === 'dark'
    ? { main: Vr[200], light: Vr[50], dark: Vr[400] }
    : { main: Vr[700], light: Vr[400], dark: Vr[800] }
}
function _C(e = 'light') {
  return e === 'dark'
    ? { main: Hr[200], light: Hr[50], dark: Hr[400] }
    : { main: Hr[500], light: Hr[300], dark: Hr[700] }
}
function BC(e = 'light') {
  return e === 'dark'
    ? { main: Ur[500], light: Ur[300], dark: Ur[700] }
    : { main: Ur[700], light: Ur[400], dark: Ur[800] }
}
function DC(e = 'light') {
  return e === 'dark'
    ? { main: Kr[400], light: Kr[300], dark: Kr[700] }
    : { main: Kr[700], light: Kr[500], dark: Kr[900] }
}
function WC(e = 'light') {
  return e === 'dark'
    ? { main: Gr[400], light: Gr[300], dark: Gr[700] }
    : { main: Gr[800], light: Gr[500], dark: Gr[900] }
}
function UC(e = 'light') {
  return e === 'dark'
    ? { main: Do[400], light: Do[300], dark: Do[700] }
    : { main: '#ed6c02', light: Do[500], dark: Do[900] }
}
function Fd(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...o
    } = e,
    i = e.primary || FC(t),
    s = e.secondary || _C(t),
    l = e.error || BC(t),
    a = e.info || DC(t),
    u = e.success || WC(t),
    d = e.warning || UC(t)
  function f(C) {
    return Gx(C, Ap.text.primary) >= n ? Ap.text.primary : jC.text.primary
  }
  const p = ({
    color: C,
    name: k,
    mainShade: h = 500,
    lightShade: g = 300,
    darkShade: m = 700,
  }) => {
    if (
      ((C = { ...C }),
      !C.main && C[h] && (C.main = C[h]),
      !C.hasOwnProperty('main'))
    )
      throw new Error(An(11, k ? ` (${k})` : '', h))
    if (typeof C.main != 'string')
      throw new Error(An(12, k ? ` (${k})` : '', JSON.stringify(C.main)))
    return (
      jp(C, 'light', g, r),
      jp(C, 'dark', m, r),
      C.contrastText || (C.contrastText = f(C.main)),
      C
    )
  }
  let y
  return (
    t === 'light' ? (y = My()) : t === 'dark' && (y = Ny()),
    et(
      {
        common: { ...Mi },
        mode: t,
        primary: p({ color: i, name: 'primary' }),
        secondary: p({
          color: s,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: p({ color: l, name: 'error' }),
        warning: p({ color: d, name: 'warning' }),
        info: p({ color: a, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: R1,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r,
        ...y,
      },
      o,
    )
  )
}
function HC(e) {
  const t = {}
  return (
    Object.entries(e).forEach((r) => {
      const [o, i] = r
      typeof i == 'object' &&
        (t[o] =
          `${i.fontStyle ? `${i.fontStyle} ` : ''}${i.fontVariant ? `${i.fontVariant} ` : ''}${i.fontWeight ? `${i.fontWeight} ` : ''}${i.fontStretch ? `${i.fontStretch} ` : ''}${i.fontSize || ''}${i.lineHeight ? `/${i.lineHeight} ` : ''}${i.fontFamily || ''}`)
    }),
    t
  )
}
function VC(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 },
    },
    ...t,
  }
}
function KC(e) {
  return Math.round(e * 1e5) / 1e5
}
const Fp = { textTransform: 'uppercase' },
  _p = '"Roboto", "Helvetica", "Arial", sans-serif'
function Oy(e, t) {
  const {
      fontFamily: n = _p,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: a = 16,
      allVariants: u,
      pxToRem: d,
      ...f
    } = typeof t == 'function' ? t(e) : t,
    p = r / 14,
    y = d || ((k) => `${(k / a) * p}rem`),
    v = (k, h, g, m, S) => ({
      fontFamily: n,
      fontWeight: k,
      fontSize: y(h),
      lineHeight: g,
      ...(n === _p ? { letterSpacing: `${KC(m / h)}em` } : {}),
      ...S,
      ...u,
    }),
    C = {
      h1: v(o, 96, 1.167, -1.5),
      h2: v(o, 60, 1.2, -0.5),
      h3: v(i, 48, 1.167, 0),
      h4: v(i, 34, 1.235, 0.25),
      h5: v(i, 24, 1.334, 0),
      h6: v(s, 20, 1.6, 0.15),
      subtitle1: v(i, 16, 1.75, 0.15),
      subtitle2: v(s, 14, 1.57, 0.1),
      body1: v(i, 16, 1.5, 0.15),
      body2: v(i, 14, 1.43, 0.15),
      button: v(s, 14, 1.75, 0.4, Fp),
      caption: v(i, 12, 1.66, 0.4),
      overline: v(i, 12, 2.66, 1, Fp),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    }
  return et(
    {
      htmlFontSize: a,
      pxToRem: y,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: l,
      ...C,
    },
    f,
    { clone: !1 },
  )
}
const GC = 0.2,
  QC = 0.14,
  YC = 0.12
function Te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${GC})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${QC})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${YC})`,
  ].join(',')
}
const XC = [
    'none',
    Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  qC = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  ZC = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  }
function Bp(e) {
  return `${Math.round(e)}ms`
}
function JC(e) {
  if (!e) return 0
  const t = e / 36
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3)
}
function ew(e) {
  const t = { ...qC, ...e.easing },
    n = { ...ZC, ...e.duration }
  return {
    getAutoHeightDuration: JC,
    create: (o = ['all'], i = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: a = 0,
        ...u
      } = i
      return (Array.isArray(o) ? o : [o])
        .map(
          (d) =>
            `${d} ${typeof s == 'string' ? s : Bp(s)} ${l} ${typeof a == 'string' ? a : Bp(a)}`,
        )
        .join(',')
    },
    ...e,
    easing: t,
    duration: n,
  }
}
const tw = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}
function nw(e) {
  return (
    gn(e) ||
    typeof e > 'u' ||
    typeof e == 'string' ||
    typeof e == 'boolean' ||
    typeof e == 'number' ||
    Array.isArray(e)
  )
}
function Ly(e = {}) {
  const t = { ...e }
  function n(r) {
    const o = Object.entries(r)
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i]
      !nw(l) || s.startsWith('unstable_')
        ? delete r[s]
        : gn(l) && ((r[s] = { ...l }), n(r[s]))
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  )
}
function uc(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: a,
    ...u
  } = e
  if (e.vars && e.generateThemeVars === void 0) throw new Error(An(20))
  const d = Fd(i),
    f = Yi(e)
  let p = et(f, {
    mixins: VC(f.breakpoints, r),
    palette: d,
    shadows: XC.slice(),
    typography: Oy(d, l),
    transitions: ew(s),
    zIndex: { ...tw },
  })
  return (
    (p = et(p, u)),
    (p = t.reduce((y, v) => et(y, v), p)),
    (p.unstable_sxConfig = {
      ...Qi,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (p.unstable_sx = function (v) {
      return ar({ sx: v, theme: this })
    }),
    (p.toRuntimeSource = Ly),
    p
  )
}
function cc(e) {
  let t
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  )
}
const rw = [...Array(25)].map((e, t) => {
  if (t === 0) return 'none'
  const n = cc(t)
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`
})
function zy(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38,
  }
}
function Ay(e) {
  return e === 'dark' ? rw : []
}
function ow(e) {
  const { palette: t = { mode: 'light' }, opacity: n, overlays: r, ...o } = e,
    i = Fd(t)
  return {
    palette: i,
    opacity: { ...zy(i.mode), ...n },
    overlays: r || Ay(i.mode),
    ...o,
  }
}
function iw(e) {
  var t
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  )
}
const sw = (e) => [
    ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ''}overlays-${n}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  lw = (e) => (t, n) => {
    const r = e.rootSelector || ':root',
      o = e.colorSchemeSelector
    let i = o
    if (
      (o === 'class' && (i = '.%s'),
      o === 'data' && (i = '[data-%s]'),
      o != null &&
        o.startsWith('data-') &&
        !o.includes('%s') &&
        (i = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === 'dark') {
        const s = {}
        return (
          sw(e.cssVarPrefix).forEach((l) => {
            ;((s[l] = n[l]), delete n[l])
          }),
          i === 'media'
            ? { [r]: n, '@media (prefers-color-scheme: dark)': { [r]: s } }
            : i
              ? { [i.replace('%s', t)]: s, [`${r}, ${i.replace('%s', t)}`]: n }
              : { [r]: { ...n, ...s } }
        )
      }
      if (i && i !== 'media') return `${r}, ${i.replace('%s', String(t))}`
    } else if (t) {
      if (i === 'media')
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } }
      if (i) return i.replace('%s', String(t))
    }
    return r
  }
function aw(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {})
  })
}
function N(e, t, n) {
  !e[t] && n && (e[t] = n)
}
function Jo(e) {
  return typeof e != 'string' || !e.startsWith('hsl') ? e : yy(e)
}
function En(e, t) {
  ;`${t}Channel` in e || (e[`${t}Channel`] = Zo(Jo(e[t])))
}
function uw(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
      ? e
      : '8px'
}
const un = (e) => {
    try {
      return e()
    } catch {}
  },
  cw = (e = 'mui') => xC(e)
function tu(e, t, n, r) {
  if (!t) return
  t = t === !0 ? {} : t
  const o = r === 'dark' ? 'dark' : 'light'
  if (!n) {
    e[r] = ow({
      ...t,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    })
    return
  }
  const { palette: i, ...s } = uc({
    ...n,
    palette: { mode: o, ...(t == null ? void 0 : t.palette) },
  })
  return (
    (e[r] = {
      ...t,
      palette: i,
      opacity: { ...zy(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || Ay(o),
    }),
    s
  )
}
function dw(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = 'mui',
      shouldSkipGeneratingVar: s = iw,
      colorSchemeSelector: l = n.light && n.dark ? 'media' : void 0,
      rootSelector: a = ':root',
      ...u
    } = e,
    d = Object.keys(n)[0],
    f = r || (n.light && d !== 'light' ? 'light' : d),
    p = cw(i),
    { [f]: y, light: v, dark: C, ...k } = n,
    h = { ...k }
  let g = y
  if (
    (((f === 'dark' && !('dark' in n)) || (f === 'light' && !('light' in n))) &&
      (g = !0),
    !g)
  )
    throw new Error(An(21, f))
  const m = tu(h, g, u, f)
  ;(v && !h.light && tu(h, v, void 0, 'light'),
    C && !h.dark && tu(h, C, void 0, 'dark'))
  let S = {
    defaultColorScheme: f,
    ...m,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: a,
    getCssVar: p,
    colorSchemes: h,
    font: { ...HC(m.typography), ...m.font },
    spacing: uw(u.spacing),
  }
  ;(Object.keys(S.colorSchemes).forEach((T) => {
    const c = S.colorSchemes[T].palette,
      R = (M) => {
        const O = M.split('-'),
          j = O[1],
          L = O[2]
        return p(M, c[j][L])
      }
    if (
      (c.mode === 'light' &&
        (N(c.common, 'background', '#fff'),
        N(c.common, 'onBackground', '#000')),
      c.mode === 'dark' &&
        (N(c.common, 'background', '#000'),
        N(c.common, 'onBackground', '#fff')),
      aw(c, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      c.mode === 'light')
    ) {
      ;(N(c.Alert, 'errorColor', xe(c.error.light, 0.6)),
        N(c.Alert, 'infoColor', xe(c.info.light, 0.6)),
        N(c.Alert, 'successColor', xe(c.success.light, 0.6)),
        N(c.Alert, 'warningColor', xe(c.warning.light, 0.6)),
        N(c.Alert, 'errorFilledBg', R('palette-error-main')),
        N(c.Alert, 'infoFilledBg', R('palette-info-main')),
        N(c.Alert, 'successFilledBg', R('palette-success-main')),
        N(c.Alert, 'warningFilledBg', R('palette-warning-main')),
        N(
          c.Alert,
          'errorFilledColor',
          un(() => c.getContrastText(c.error.main)),
        ),
        N(
          c.Alert,
          'infoFilledColor',
          un(() => c.getContrastText(c.info.main)),
        ),
        N(
          c.Alert,
          'successFilledColor',
          un(() => c.getContrastText(c.success.main)),
        ),
        N(
          c.Alert,
          'warningFilledColor',
          un(() => c.getContrastText(c.warning.main)),
        ),
        N(c.Alert, 'errorStandardBg', Ce(c.error.light, 0.9)),
        N(c.Alert, 'infoStandardBg', Ce(c.info.light, 0.9)),
        N(c.Alert, 'successStandardBg', Ce(c.success.light, 0.9)),
        N(c.Alert, 'warningStandardBg', Ce(c.warning.light, 0.9)),
        N(c.Alert, 'errorIconColor', R('palette-error-main')),
        N(c.Alert, 'infoIconColor', R('palette-info-main')),
        N(c.Alert, 'successIconColor', R('palette-success-main')),
        N(c.Alert, 'warningIconColor', R('palette-warning-main')),
        N(c.AppBar, 'defaultBg', R('palette-grey-100')),
        N(c.Avatar, 'defaultBg', R('palette-grey-400')),
        N(c.Button, 'inheritContainedBg', R('palette-grey-300')),
        N(c.Button, 'inheritContainedHoverBg', R('palette-grey-A100')),
        N(c.Chip, 'defaultBorder', R('palette-grey-400')),
        N(c.Chip, 'defaultAvatarColor', R('palette-grey-700')),
        N(c.Chip, 'defaultIconColor', R('palette-grey-700')),
        N(c.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        N(c.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        N(c.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        N(c.LinearProgress, 'primaryBg', Ce(c.primary.main, 0.62)),
        N(c.LinearProgress, 'secondaryBg', Ce(c.secondary.main, 0.62)),
        N(c.LinearProgress, 'errorBg', Ce(c.error.main, 0.62)),
        N(c.LinearProgress, 'infoBg', Ce(c.info.main, 0.62)),
        N(c.LinearProgress, 'successBg', Ce(c.success.main, 0.62)),
        N(c.LinearProgress, 'warningBg', Ce(c.warning.main, 0.62)),
        N(c.Skeleton, 'bg', `rgba(${R('palette-text-primaryChannel')} / 0.11)`),
        N(c.Slider, 'primaryTrack', Ce(c.primary.main, 0.62)),
        N(c.Slider, 'secondaryTrack', Ce(c.secondary.main, 0.62)),
        N(c.Slider, 'errorTrack', Ce(c.error.main, 0.62)),
        N(c.Slider, 'infoTrack', Ce(c.info.main, 0.62)),
        N(c.Slider, 'successTrack', Ce(c.success.main, 0.62)),
        N(c.Slider, 'warningTrack', Ce(c.warning.main, 0.62)))
      const M = vs(c.background.default, 0.8)
      ;(N(c.SnackbarContent, 'bg', M),
        N(
          c.SnackbarContent,
          'color',
          un(() => c.getContrastText(M)),
        ),
        N(c.SpeedDialAction, 'fabHoverBg', vs(c.background.paper, 0.15)),
        N(c.StepConnector, 'border', R('palette-grey-400')),
        N(c.StepContent, 'border', R('palette-grey-400')),
        N(c.Switch, 'defaultColor', R('palette-common-white')),
        N(c.Switch, 'defaultDisabledColor', R('palette-grey-100')),
        N(c.Switch, 'primaryDisabledColor', Ce(c.primary.main, 0.62)),
        N(c.Switch, 'secondaryDisabledColor', Ce(c.secondary.main, 0.62)),
        N(c.Switch, 'errorDisabledColor', Ce(c.error.main, 0.62)),
        N(c.Switch, 'infoDisabledColor', Ce(c.info.main, 0.62)),
        N(c.Switch, 'successDisabledColor', Ce(c.success.main, 0.62)),
        N(c.Switch, 'warningDisabledColor', Ce(c.warning.main, 0.62)),
        N(c.TableCell, 'border', Ce(ys(c.divider, 1), 0.88)),
        N(c.Tooltip, 'bg', ys(c.grey[700], 0.92)))
    }
    if (c.mode === 'dark') {
      ;(N(c.Alert, 'errorColor', Ce(c.error.light, 0.6)),
        N(c.Alert, 'infoColor', Ce(c.info.light, 0.6)),
        N(c.Alert, 'successColor', Ce(c.success.light, 0.6)),
        N(c.Alert, 'warningColor', Ce(c.warning.light, 0.6)),
        N(c.Alert, 'errorFilledBg', R('palette-error-dark')),
        N(c.Alert, 'infoFilledBg', R('palette-info-dark')),
        N(c.Alert, 'successFilledBg', R('palette-success-dark')),
        N(c.Alert, 'warningFilledBg', R('palette-warning-dark')),
        N(
          c.Alert,
          'errorFilledColor',
          un(() => c.getContrastText(c.error.dark)),
        ),
        N(
          c.Alert,
          'infoFilledColor',
          un(() => c.getContrastText(c.info.dark)),
        ),
        N(
          c.Alert,
          'successFilledColor',
          un(() => c.getContrastText(c.success.dark)),
        ),
        N(
          c.Alert,
          'warningFilledColor',
          un(() => c.getContrastText(c.warning.dark)),
        ),
        N(c.Alert, 'errorStandardBg', xe(c.error.light, 0.9)),
        N(c.Alert, 'infoStandardBg', xe(c.info.light, 0.9)),
        N(c.Alert, 'successStandardBg', xe(c.success.light, 0.9)),
        N(c.Alert, 'warningStandardBg', xe(c.warning.light, 0.9)),
        N(c.Alert, 'errorIconColor', R('palette-error-main')),
        N(c.Alert, 'infoIconColor', R('palette-info-main')),
        N(c.Alert, 'successIconColor', R('palette-success-main')),
        N(c.Alert, 'warningIconColor', R('palette-warning-main')),
        N(c.AppBar, 'defaultBg', R('palette-grey-900')),
        N(c.AppBar, 'darkBg', R('palette-background-paper')),
        N(c.AppBar, 'darkColor', R('palette-text-primary')),
        N(c.Avatar, 'defaultBg', R('palette-grey-600')),
        N(c.Button, 'inheritContainedBg', R('palette-grey-800')),
        N(c.Button, 'inheritContainedHoverBg', R('palette-grey-700')),
        N(c.Chip, 'defaultBorder', R('palette-grey-700')),
        N(c.Chip, 'defaultAvatarColor', R('palette-grey-300')),
        N(c.Chip, 'defaultIconColor', R('palette-grey-300')),
        N(c.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        N(c.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        N(c.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        N(c.LinearProgress, 'primaryBg', xe(c.primary.main, 0.5)),
        N(c.LinearProgress, 'secondaryBg', xe(c.secondary.main, 0.5)),
        N(c.LinearProgress, 'errorBg', xe(c.error.main, 0.5)),
        N(c.LinearProgress, 'infoBg', xe(c.info.main, 0.5)),
        N(c.LinearProgress, 'successBg', xe(c.success.main, 0.5)),
        N(c.LinearProgress, 'warningBg', xe(c.warning.main, 0.5)),
        N(c.Skeleton, 'bg', `rgba(${R('palette-text-primaryChannel')} / 0.13)`),
        N(c.Slider, 'primaryTrack', xe(c.primary.main, 0.5)),
        N(c.Slider, 'secondaryTrack', xe(c.secondary.main, 0.5)),
        N(c.Slider, 'errorTrack', xe(c.error.main, 0.5)),
        N(c.Slider, 'infoTrack', xe(c.info.main, 0.5)),
        N(c.Slider, 'successTrack', xe(c.success.main, 0.5)),
        N(c.Slider, 'warningTrack', xe(c.warning.main, 0.5)))
      const M = vs(c.background.default, 0.98)
      ;(N(c.SnackbarContent, 'bg', M),
        N(
          c.SnackbarContent,
          'color',
          un(() => c.getContrastText(M)),
        ),
        N(c.SpeedDialAction, 'fabHoverBg', vs(c.background.paper, 0.15)),
        N(c.StepConnector, 'border', R('palette-grey-600')),
        N(c.StepContent, 'border', R('palette-grey-600')),
        N(c.Switch, 'defaultColor', R('palette-grey-300')),
        N(c.Switch, 'defaultDisabledColor', R('palette-grey-600')),
        N(c.Switch, 'primaryDisabledColor', xe(c.primary.main, 0.55)),
        N(c.Switch, 'secondaryDisabledColor', xe(c.secondary.main, 0.55)),
        N(c.Switch, 'errorDisabledColor', xe(c.error.main, 0.55)),
        N(c.Switch, 'infoDisabledColor', xe(c.info.main, 0.55)),
        N(c.Switch, 'successDisabledColor', xe(c.success.main, 0.55)),
        N(c.Switch, 'warningDisabledColor', xe(c.warning.main, 0.55)),
        N(c.TableCell, 'border', xe(ys(c.divider, 1), 0.68)),
        N(c.Tooltip, 'bg', ys(c.grey[700], 0.92)))
    }
    ;(En(c.background, 'default'),
      En(c.background, 'paper'),
      En(c.common, 'background'),
      En(c.common, 'onBackground'),
      En(c, 'divider'),
      Object.keys(c).forEach((M) => {
        const O = c[M]
        M !== 'tonalOffset' &&
          O &&
          typeof O == 'object' &&
          (O.main && N(c[M], 'mainChannel', Zo(Jo(O.main))),
          O.light && N(c[M], 'lightChannel', Zo(Jo(O.light))),
          O.dark && N(c[M], 'darkChannel', Zo(Jo(O.dark))),
          O.contrastText &&
            N(c[M], 'contrastTextChannel', Zo(Jo(O.contrastText))),
          M === 'text' && (En(c[M], 'primary'), En(c[M], 'secondary')),
          M === 'action' &&
            (O.active && En(c[M], 'active'),
            O.selected && En(c[M], 'selected')))
      }))
  }),
    (S = t.reduce((T, c) => et(T, c), S)))
  const P = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: lw(S),
    },
    { vars: $, generateThemeVars: w, generateStyleSheets: E } = bC(S, P)
  return (
    (S.vars = $),
    Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([T, c]) => {
      S[T] = c
    }),
    (S.generateThemeVars = w),
    (S.generateStyleSheets = E),
    (S.generateSpacing = function () {
      return ay(u.spacing, aa(this))
    }),
    (S.getColorSchemeSelector = kC(l)),
    (S.spacing = S.generateSpacing()),
    (S.shouldSkipGeneratingVar = s),
    (S.unstable_sxConfig = {
      ...Qi,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (S.unstable_sx = function (c) {
      return ar({ sx: c, theme: this })
    }),
    (S.toRuntimeSource = Ly),
    S
  )
}
function Dp(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: Fd({ ...(n === !0 ? {} : n.palette), mode: t }),
    })
}
function ya(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : { light: !0 },
      defaultColorScheme: i = n == null ? void 0 : n.mode,
      ...s
    } = e,
    l = i || 'light',
    a = o == null ? void 0 : o[l],
    u = {
      ...o,
      ...(n
        ? { [l]: { ...(typeof a != 'boolean' && a), palette: n } }
        : void 0),
    }
  if (r === !1) {
    if (!('colorSchemes' in e)) return uc(e, ...t)
    let d = n
    'palette' in e ||
      (u[l] &&
        (u[l] !== !0
          ? (d = u[l].palette)
          : l === 'dark' && (d = { mode: 'dark' })))
    const f = uc({ ...e, palette: d }, ...t)
    return (
      (f.defaultColorScheme = l),
      (f.colorSchemes = u),
      f.palette.mode === 'light' &&
        ((f.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: f.palette,
        }),
        Dp(f, 'dark', u.dark)),
      f.palette.mode === 'dark' &&
        ((f.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: f.palette,
        }),
        Dp(f, 'light', u.light)),
      f
    )
  }
  return (
    !n && !('light' in u) && l === 'light' && (u.light = !0),
    dw(
      {
        ...s,
        colorSchemes: u,
        defaultColorScheme: l,
        ...(typeof r != 'boolean' && r),
      },
      ...t,
    )
  )
}
const _d = ya()
function va() {
  const e = ma(_d)
  return e[Sn] || e
}
function jy(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const Bt = (e) => jy(e) && e !== 'classes',
  B = my({ themeId: Sn, defaultTheme: _d, rootShouldForwardProp: Bt })
function fw({ theme: e, ...t }) {
  const n = Sn in e ? e[Sn] : void 0
  return b.jsx(Ty, { ...t, themeId: n ? Sn : void 0, theme: n || e })
}
const Ss = {
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode',
  },
  { CssVarsProvider: pw } = SC({
    themeId: Sn,
    theme: () => ya({ cssVariables: !0 }),
    colorSchemeStorageKey: Ss.colorSchemeStorageKey,
    modeStorageKey: Ss.modeStorageKey,
    defaultColorScheme: {
      light: Ss.defaultLightColorScheme,
      dark: Ss.defaultDarkColorScheme,
    },
    resolveTheme: (e) => {
      const t = { ...e, typography: Oy(e.palette, e.typography) }
      return (
        (t.unstable_sx = function (r) {
          return ar({ sx: r, theme: this })
        }),
        t
      )
    },
  }),
  mw = pw
function hw({ theme: e, ...t }) {
  const n = x.useMemo(() => {
    if (typeof e == 'function') return e
    const r = Sn in e ? e[Sn] : e
    return 'colorSchemes' in r ? null : 'vars' in r ? e : { ...e, vars: null }
  }, [e])
  return n ? b.jsx(fw, { theme: n, ...t }) : b.jsx(mw, { theme: e, ...t })
}
function gw(e) {
  return b.jsx(uy, { ...e, defaultTheme: _d, themeId: Sn })
}
function Bd(e) {
  return function (n) {
    return b.jsx(gw, {
      styles: typeof e == 'function' ? (r) => e({ theme: r, ...n }) : e,
    })
  }
}
function yw() {
  return ha
}
const ue = dC
function ne(e) {
  return uC(e)
}
function vw(e) {
  return ee('MuiSvgIcon', e)
}
q('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
])
const Sw = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${F(t)}`, `fontSize${F(n)}`],
      }
    return te(o, vw, r)
  },
  xw = B('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.color !== 'inherit' && t[`color${F(n.color)}`],
        t[`fontSize${F(n.fontSize)}`],
      ]
    },
  })(
    ue(({ theme: e }) => {
      var t, n, r, o, i, s, l, a, u, d, f, p, y, v
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, 'fill', {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (C) => !C.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : s.call(i, 20)) || '1.25rem',
            },
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((a = (l = e.typography) == null ? void 0 : l.pxToRem) == null
                  ? void 0
                  : a.call(l, 24)) || '1.5rem',
            },
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : d.call(u, 35)) || '2.1875rem',
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, C]) => C && C.main)
            .map(([C]) => {
              var k, h
              return {
                props: { color: C },
                style: {
                  color:
                    (h = (k = (e.vars ?? e).palette) == null ? void 0 : k[C]) ==
                    null
                      ? void 0
                      : h.main,
                },
              }
            }),
          {
            props: { color: 'action' },
            style: {
              color:
                (p = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) ==
                null
                  ? void 0
                  : p.active,
            },
          },
          {
            props: { color: 'disabled' },
            style: {
              color:
                (v = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : v.disabled,
            },
          },
          { props: { color: 'inherit' }, style: { color: void 0 } },
        ],
      }
    }),
  ),
  dc = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: l = 'svg',
        fontSize: a = 'medium',
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: p = '0 0 24 24',
        ...y
      } = r,
      v = x.isValidElement(o) && o.type === 'svg',
      C = {
        ...r,
        color: s,
        component: l,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: p,
        hasSvgAsChild: v,
      },
      k = {}
    d || (k.viewBox = p)
    const h = Sw(C)
    return b.jsxs(xw, {
      as: l,
      className: V(h.root, i),
      focusable: 'false',
      color: u,
      'aria-hidden': f ? void 0 : !0,
      role: f ? 'img' : void 0,
      ref: n,
      ...k,
      ...y,
      ...(v && o.props),
      ownerState: C,
      children: [
        v ? o.props.children : o,
        f ? b.jsx('title', { children: f }) : null,
      ],
    })
  })
dc.muiName = 'SvgIcon'
function wn(e, t) {
  function n(r, o) {
    return b.jsx(dc, { 'data-testid': `${t}Icon`, ref: o, ...r, children: e })
  }
  return ((n.muiName = dc.muiName), x.memo(x.forwardRef(n)))
}
function Cw(e, t) {
  if (!e) return t
  if (typeof e == 'function' || typeof t == 'function')
    return (o) => {
      const i = typeof t == 'function' ? t(o) : t,
        s = typeof e == 'function' ? e({ ...o, ...i }) : e,
        l = V(
          o == null ? void 0 : o.className,
          i == null ? void 0 : i.className,
          s == null ? void 0 : s.className,
        )
      return {
        ...i,
        ...s,
        ...(!!l && { className: l }),
        ...((i == null ? void 0 : i.style) &&
          (s == null ? void 0 : s.style) && {
            style: { ...i.style, ...s.style },
          }),
        ...((i == null ? void 0 : i.sx) &&
          (s == null ? void 0 : s.sx) && {
            sx: [
              ...(Array.isArray(i.sx) ? i.sx : [i.sx]),
              ...(Array.isArray(s.sx) ? s.sx : [s.sx]),
            ],
          }),
      }
    }
  const n = t,
    r = V(n == null ? void 0 : n.className, e == null ? void 0 : e.className)
  return {
    ...t,
    ...e,
    ...(!!r && { className: r }),
    ...((n == null ? void 0 : n.style) &&
      (e == null ? void 0 : e.style) && { style: { ...n.style, ...e.style } }),
    ...((n == null ? void 0 : n.sx) &&
      (e == null ? void 0 : e.sx) && {
        sx: [
          ...(Array.isArray(n.sx) ? n.sx : [n.sx]),
          ...(Array.isArray(e.sx) ? e.sx : [e.sx]),
        ],
      }),
  }
}
function Fy(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue
      n[r] = e[r]
    }
  return n
}
function fc(e, t) {
  return (
    (fc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return ((n.__proto__ = r), n)
        }),
    fc(e, t)
  )
}
function _y(e, t) {
  ;((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    fc(e, t))
}
const Wp = { disabled: !1 },
  yl = nn.createContext(null)
var ww = function (t) {
    return t.scrollTop
  },
  ei = 'unmounted',
  vr = 'exited',
  Sr = 'entering',
  Yr = 'entered',
  pc = 'exiting',
  bn = (function (e) {
    _y(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = vr), (i.appearStatus = Sr))
            : (a = Yr)
          : r.unmountOnExit || r.mountOnEnter
            ? (a = ei)
            : (a = vr),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      )
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in
      return s && i.status === ei ? { status: vr } : null
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function (o) {
        var i = null
        if (o !== this.props) {
          var s = this.state.status
          this.props.in
            ? s !== Sr && s !== Yr && (i = Sr)
            : (s === Sr || s === Yr) && (i = pc)
        }
        this.updateStatus(!1, i)
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l
        return (
          (i = s = l = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (s = o.enter),
            (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        )
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Sr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : hs.findDOMNode(this)
              s && ww(s)
            }
            this.performEnter(o)
          } else this.performExit()
        else
          this.props.unmountOnExit &&
            this.state.status === vr &&
            this.setState({ status: ei })
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [hs.findDOMNode(this), l],
          u = a[0],
          d = a[1],
          f = this.getTimeouts(),
          p = l ? f.appear : f.enter
        if ((!o && !s) || Wp.disabled) {
          this.safeSetState({ status: Yr }, function () {
            i.props.onEntered(u)
          })
          return
        }
        ;(this.props.onEnter(u, d),
          this.safeSetState({ status: Sr }, function () {
            ;(i.props.onEntering(u, d),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: Yr }, function () {
                  i.props.onEntered(u, d)
                })
              }))
          }))
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : hs.findDOMNode(this)
        if (!i || Wp.disabled) {
          this.safeSetState({ status: vr }, function () {
            o.props.onExited(l)
          })
          return
        }
        ;(this.props.onExit(l),
          this.safeSetState({ status: pc }, function () {
            ;(o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: vr }, function () {
                  o.props.onExited(l)
                })
              }))
          }))
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function (o, i) {
        ;((i = this.setNextCallback(i)), this.setState(o, i))
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l))
          }),
          (this.nextCallback.cancel = function () {
            s = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i)
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : hs.findDOMNode(this),
          l = o == null && !this.props.addEndListener
        if (!s || l) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = a[0],
            d = a[1]
          this.props.addEndListener(u, d)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (n.render = function () {
        var o = this.state.status
        if (o === ei) return null
        var i = this.props,
          s = i.children
        ;(i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef)
        var l = Fy(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ])
        return nn.createElement(
          yl.Provider,
          { value: null },
          typeof s == 'function'
            ? s(o, l)
            : nn.cloneElement(nn.Children.only(s), l),
        )
      }),
      t
    )
  })(nn.Component)
bn.contextType = yl
bn.propTypes = {}
function Qr() {}
bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Qr,
  onEntering: Qr,
  onEntered: Qr,
  onExit: Qr,
  onExiting: Qr,
  onExited: Qr,
}
bn.UNMOUNTED = ei
bn.EXITED = vr
bn.ENTERING = Sr
bn.ENTERED = Yr
bn.EXITING = pc
function bw(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  return e
}
function Dd(e, t) {
  var n = function (i) {
      return t && x.isValidElement(i) ? t(i) : i
    },
    r = Object.create(null)
  return (
    e &&
      x.Children.map(e, function (o) {
        return o
      }).forEach(function (o) {
        r[o.key] = n(o)
      }),
    r
  )
}
function kw(e, t) {
  ;((e = e || {}), (t = t || {}))
  function n(d) {
    return d in t ? t[d] : e[d]
  }
  var r = Object.create(null),
    o = []
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i)
  var s,
    l = {}
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s]
        l[r[a][s]] = n(u)
      }
    l[a] = n(a)
  }
  for (s = 0; s < o.length; s++) l[o[s]] = n(o[s])
  return l
}
function Er(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}
function Ew(e, t) {
  return Dd(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Er(n, 'appear', e),
      enter: Er(n, 'enter', e),
      exit: Er(n, 'exit', e),
    })
  })
}
function Pw(e, t, n) {
  var r = Dd(e.children),
    o = kw(t, r)
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i]
      if (x.isValidElement(s)) {
        var l = i in t,
          a = i in r,
          u = t[i],
          d = x.isValidElement(u) && !u.props.in
        a && (!l || d)
          ? (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Er(s, 'exit', e),
              enter: Er(s, 'enter', e),
            }))
          : !a && l && !d
            ? (o[i] = x.cloneElement(s, { in: !1 }))
            : a &&
              l &&
              x.isValidElement(u) &&
              (o[i] = x.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: Er(s, 'exit', e),
                enter: Er(s, 'enter', e),
              }))
      }
    }),
    o
  )
}
var $w =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  Rw = {
    component: 'div',
    childFactory: function (t) {
      return t
    },
  },
  Wd = (function (e) {
    _y(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = i.handleExited.bind(bw(i))
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      )
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        ;((this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } }))
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          l = i.handleExited,
          a = i.firstRender
        return { children: a ? Ew(o, l) : Pw(o, s, l), firstRender: !1 }
      }),
      (n.handleExited = function (o, i) {
        var s = Dd(this.props.children)
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var a = ml({}, l.children)
              return (delete a[o.key], { children: a })
            }))
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          l = Fy(o, ['component', 'childFactory']),
          a = this.state.contextValue,
          u = $w(this.state.children).map(s)
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? nn.createElement(yl.Provider, { value: a }, u)
            : nn.createElement(
                yl.Provider,
                { value: a },
                nn.createElement(i, l, u),
              )
        )
      }),
      t
    )
  })(nn.Component)
Wd.propTypes = {}
Wd.defaultProps = Rw
const By = (e) => e.scrollTop
function vl(e, t) {
  const { timeout: n, easing: r, style: o = {} } = e
  return {
    duration:
      o.transitionDuration ?? (typeof n == 'number' ? n : n[t.mode] || 0),
    easing:
      o.transitionTimingFunction ?? (typeof r == 'object' ? r[t.mode] : r),
    delay: o.transitionDelay,
  }
}
function Tw(e) {
  return ee('MuiPaper', e)
}
q('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
])
const Iw = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          'root',
          r,
          !t && 'rounded',
          r === 'elevation' && `elevation${n}`,
        ],
      }
    return te(i, Tw, o)
  },
  Mw = B('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === 'elevation' && t[`elevation${n.elevation}`],
      ]
    },
  })(
    ue(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: 'var(--Paper-shadow)',
            backgroundImage: 'var(--Paper-overlay)',
          },
        },
      ],
    })),
  ),
  xr = x.forwardRef(function (t, n) {
    var y
    const r = ne({ props: t, name: 'MuiPaper' }),
      o = va(),
      {
        className: i,
        component: s = 'div',
        elevation: l = 1,
        square: a = !1,
        variant: u = 'elevation',
        ...d
      } = r,
      f = { ...r, component: s, elevation: l, square: a, variant: u },
      p = Iw(f)
    return b.jsx(Mw, {
      as: s,
      ownerState: f,
      className: V(p.root, i),
      ref: n,
      ...d,
      style: {
        ...(u === 'elevation' && {
          '--Paper-shadow': (o.vars || o).shadows[l],
          ...(o.vars && {
            '--Paper-overlay': (y = o.vars.overlays) == null ? void 0 : y[l],
          }),
          ...(!o.vars &&
            o.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${ye('#fff', cc(l))}, ${ye('#fff', cc(l))})`,
            }),
        }),
        ...d.style,
      },
    })
  })
function he(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      internalForwardedProps: s,
      shouldForwardComponentProp: l = !1,
      ...a
    } = t,
    {
      component: u,
      slots: d = { [e]: void 0 },
      slotProps: f = { [e]: void 0 },
      ...p
    } = i,
    y = d[e] || r,
    v = Ey(f[e], o),
    {
      props: { component: C, ...k },
      internalRef: h,
    } = ky({
      className: n,
      ...a,
      externalForwardedProps: e === 'root' ? p : void 0,
      externalSlotProps: v,
    }),
    g = at(h, v == null ? void 0 : v.ref, t.ref),
    m = e === 'root' ? C || u : C,
    S = wy(
      y,
      {
        ...(e === 'root' && !u && !d[e] && s),
        ...(e !== 'root' && !d[e] && s),
        ...k,
        ...(m && !l && { as: m }),
        ...(m && l && { component: m }),
        ref: g,
      },
      o,
    )
  return [y, S]
}
class Sl {
  constructor() {
    No(this, 'mountEffect', () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve())
    })
    ;((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null))
  }
  static create() {
    return new Sl()
  }
  static use() {
    const t = Sy(Sl.create).current,
      [n, r] = x.useState(!1)
    return (
      (t.shouldMount = n),
      (t.setShouldMount = r),
      x.useEffect(t.mountEffect, [n]),
      t
    )
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = Ow()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    )
  }
  start(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.start(...t)
    })
  }
  stop(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.stop(...t)
    })
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t)
    })
  }
}
function Nw() {
  return Sl.use()
}
function Ow() {
  let e, t
  const n = new Promise((r, o) => {
    ;((e = r), (t = o))
  })
  return ((n.resolve = e), (n.reject = t), n)
}
function Lw(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: l,
      onExited: a,
      timeout: u,
    } = e,
    [d, f] = x.useState(!1),
    p = V(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = V(n.child, d && n.childLeaving, r && n.childPulsate)
  return (
    !l && !d && f(!0),
    x.useEffect(() => {
      if (!l && a != null) {
        const C = setTimeout(a, u)
        return () => {
          clearTimeout(C)
        }
      }
    }, [a, l, u]),
    b.jsx('span', {
      className: p,
      style: y,
      children: b.jsx('span', { className: v }),
    })
  )
}
const Dt = q('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  mc = 550,
  zw = 80,
  Aw = Ki`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  jw = Ki`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  Fw = Ki`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  _w = B('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  Bw = B(Lw, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Aw};
    animation-duration: ${mc}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${Dt.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Dt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Dt.childLeaving} {
    opacity: 0;
    animation-name: ${jw};
    animation-duration: ${mc}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${Dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Fw};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  Dw = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s, ...l } = r,
      [a, u] = x.useState([]),
      d = x.useRef(0),
      f = x.useRef(null)
    x.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [a])
    const p = x.useRef(!1),
      y = xy(),
      v = x.useRef(null),
      C = x.useRef(null),
      k = x.useCallback(
        (S) => {
          const { pulsate: P, rippleX: $, rippleY: w, rippleSize: E, cb: T } = S
          ;(u((c) => [
            ...c,
            b.jsx(
              Bw,
              {
                classes: {
                  ripple: V(i.ripple, Dt.ripple),
                  rippleVisible: V(i.rippleVisible, Dt.rippleVisible),
                  ripplePulsate: V(i.ripplePulsate, Dt.ripplePulsate),
                  child: V(i.child, Dt.child),
                  childLeaving: V(i.childLeaving, Dt.childLeaving),
                  childPulsate: V(i.childPulsate, Dt.childPulsate),
                },
                timeout: mc,
                pulsate: P,
                rippleX: $,
                rippleY: w,
                rippleSize: E,
              },
              d.current,
            ),
          ]),
            (d.current += 1),
            (f.current = T))
        },
        [i],
      ),
      h = x.useCallback(
        (S = {}, P = {}, $ = () => {}) => {
          const {
            pulsate: w = !1,
            center: E = o || P.pulsate,
            fakeElement: T = !1,
          } = P
          if ((S == null ? void 0 : S.type) === 'mousedown' && p.current) {
            p.current = !1
            return
          }
          ;(S == null ? void 0 : S.type) === 'touchstart' && (p.current = !0)
          const c = T ? null : C.current,
            R = c
              ? c.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 }
          let M, O, j
          if (
            E ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            ((M = Math.round(R.width / 2)), (O = Math.round(R.height / 2)))
          else {
            const { clientX: L, clientY: A } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S
            ;((M = Math.round(L - R.left)), (O = Math.round(A - R.top)))
          }
          if (E)
            ((j = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3)),
              j % 2 === 0 && (j += 1))
          else {
            const L =
                Math.max(Math.abs((c ? c.clientWidth : 0) - M), M) * 2 + 2,
              A = Math.max(Math.abs((c ? c.clientHeight : 0) - O), O) * 2 + 2
            j = Math.sqrt(L ** 2 + A ** 2)
          }
          S != null && S.touches
            ? v.current === null &&
              ((v.current = () => {
                k({ pulsate: w, rippleX: M, rippleY: O, rippleSize: j, cb: $ })
              }),
              y.start(zw, () => {
                v.current && (v.current(), (v.current = null))
              }))
            : k({ pulsate: w, rippleX: M, rippleY: O, rippleSize: j, cb: $ })
        },
        [o, k, y],
      ),
      g = x.useCallback(() => {
        h({}, { pulsate: !0 })
      }, [h]),
      m = x.useCallback(
        (S, P) => {
          if (
            (y.clear(),
            (S == null ? void 0 : S.type) === 'touchend' && v.current)
          ) {
            ;(v.current(),
              (v.current = null),
              y.start(0, () => {
                m(S, P)
              }))
            return
          }
          ;((v.current = null),
            u(($) => ($.length > 0 ? $.slice(1) : $)),
            (f.current = P))
        },
        [y],
      )
    return (
      x.useImperativeHandle(n, () => ({ pulsate: g, start: h, stop: m }), [
        g,
        h,
        m,
      ]),
      b.jsx(_w, {
        className: V(Dt.root, i.root, s),
        ref: C,
        ...l,
        children: b.jsx(Wd, { component: null, exit: !0, children: a }),
      })
    )
  })
function Ww(e) {
  return ee('MuiButtonBase', e)
}
const Uw = q('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  Hw = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = te({ root: ['root', t && 'disabled', n && 'focusVisible'] }, Ww, o)
    return (n && r && (s.root += ` ${r}`), s)
  },
  Vw = B('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${Uw.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  Po = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: l,
        component: a = 'button',
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: f = !1,
        focusRipple: p = !1,
        focusVisibleClassName: y,
        LinkComponent: v = 'a',
        onBlur: C,
        onClick: k,
        onContextMenu: h,
        onDragLeave: g,
        onFocus: m,
        onFocusVisible: S,
        onKeyDown: P,
        onKeyUp: $,
        onMouseDown: w,
        onMouseLeave: E,
        onMouseUp: T,
        onTouchEnd: c,
        onTouchMove: R,
        onTouchStart: M,
        tabIndex: O = 0,
        TouchRippleProps: j,
        touchRippleRef: L,
        type: A,
        ...W
      } = r,
      z = x.useRef(null),
      I = Nw(),
      D = at(I.ref, L),
      [H, Y] = x.useState(!1)
    ;(u && H && Y(!1),
      x.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ;(Y(!0), z.current.focus())
          },
        }),
        [],
      ))
    const ae = I.shouldMount && !d && !u
    x.useEffect(() => {
      H && p && !d && I.pulsate()
    }, [d, p, H, I])
    const Z = Pn(I, 'start', w, f),
      K = Pn(I, 'stop', h, f),
      J = Pn(I, 'stop', g, f),
      ce = Pn(I, 'stop', T, f),
      ut = Pn(
        I,
        'stop',
        (G) => {
          ;(H && G.preventDefault(), E && E(G))
        },
        f,
      ),
      Ee = Pn(I, 'start', M, f),
      X = Pn(I, 'stop', c, f),
      oe = Pn(I, 'stop', R, f),
      re = Pn(
        I,
        'stop',
        (G) => {
          ;(Tp(G.target) || Y(!1), C && C(G))
        },
        !1,
      ),
      Fe = Tr((G) => {
        ;(z.current || (z.current = G.currentTarget),
          Tp(G.target) && (Y(!0), S && S(G)),
          m && m(G))
      }),
      ie = () => {
        const G = z.current
        return a && a !== 'button' && !(G.tagName === 'A' && G.href)
      },
      be = Tr((G) => {
        ;(p &&
          !G.repeat &&
          H &&
          G.key === ' ' &&
          I.stop(G, () => {
            I.start(G)
          }),
          G.target === G.currentTarget &&
            ie() &&
            G.key === ' ' &&
            G.preventDefault(),
          P && P(G),
          G.target === G.currentTarget &&
            ie() &&
            G.key === 'Enter' &&
            !u &&
            (G.preventDefault(), k && k(G)))
      }),
      ct = Tr((G) => {
        ;(p &&
          G.key === ' ' &&
          H &&
          !G.defaultPrevented &&
          I.stop(G, () => {
            I.pulsate(G)
          }),
          $ && $(G),
          k &&
            G.target === G.currentTarget &&
            ie() &&
            G.key === ' ' &&
            !G.defaultPrevented &&
            k(G))
      })
    let Qe = a
    Qe === 'button' && (W.href || W.to) && (Qe = v)
    const fe = {}
    Qe === 'button'
      ? ((fe.type = A === void 0 ? 'button' : A), (fe.disabled = u))
      : (!W.href && !W.to && (fe.role = 'button'),
        u && (fe['aria-disabled'] = u))
    const dt = at(n, z),
      _e = {
        ...r,
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: O,
        focusVisible: H,
      },
      Be = Hw(_e)
    return b.jsxs(Vw, {
      as: Qe,
      className: V(Be.root, l),
      ownerState: _e,
      onBlur: re,
      onClick: k,
      onContextMenu: K,
      onFocus: Fe,
      onKeyDown: be,
      onKeyUp: ct,
      onMouseDown: Z,
      onMouseLeave: ut,
      onMouseUp: ce,
      onDragLeave: J,
      onTouchEnd: X,
      onTouchMove: oe,
      onTouchStart: Ee,
      ref: dt,
      tabIndex: u ? -1 : O,
      type: A,
      ...fe,
      ...W,
      children: [s, ae ? b.jsx(Dw, { ref: D, center: i, ...j }) : null],
    })
  })
function Pn(e, t, n, r = !1) {
  return Tr((o) => (n && n(o), r || e[t](o), !0))
}
function Kw(e) {
  return typeof e.main == 'string'
}
function Gw(e, t = []) {
  if (!Kw(e)) return !1
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != 'string') return !1
  return !0
}
function it(e = []) {
  return ([, t]) => t && Gw(t, e)
}
function Qw(e) {
  return ee('MuiAlert', e)
}
const Up = q('MuiAlert', [
  'root',
  'action',
  'icon',
  'message',
  'filled',
  'colorSuccess',
  'colorInfo',
  'colorWarning',
  'colorError',
  'filledSuccess',
  'filledInfo',
  'filledWarning',
  'filledError',
  'outlined',
  'outlinedSuccess',
  'outlinedInfo',
  'outlinedWarning',
  'outlinedError',
  'standard',
  'standardSuccess',
  'standardInfo',
  'standardWarning',
  'standardError',
])
function Yw(e) {
  return ee('MuiCircularProgress', e)
}
q('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
])
const Wn = 44,
  hc = Ki`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  gc = Ki`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  Xw =
    typeof hc != 'string'
      ? Pd`
        animation: ${hc} 1.4s linear infinite;
      `
      : null,
  qw =
    typeof gc != 'string'
      ? Pd`
        animation: ${gc} 1.4s ease-in-out infinite;
      `
      : null,
  Zw = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ['root', n, `color${F(r)}`],
        svg: ['svg'],
        circle: ['circle', `circle${F(n)}`, o && 'circleDisableShrink'],
      }
    return te(i, Yw, t)
  },
  Jw = B('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[n.variant], t[`color${F(n.color)}`]]
    },
  })(
    ue(({ theme: e }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: Xw || { animation: `${hc} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(it())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
      ],
    })),
  ),
  eb = B('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({ display: 'block' }),
  tb = B('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.circle,
        t[`circle${F(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ]
    },
  })(
    ue(({ theme: e }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === 'indeterminate' && !t.disableShrink,
          style: qw || { animation: `${gc} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  Dy = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiCircularProgress' }),
      {
        className: o,
        color: i = 'primary',
        disableShrink: s = !1,
        size: l = 40,
        style: a,
        thickness: u = 3.6,
        value: d = 0,
        variant: f = 'indeterminate',
        ...p
      } = r,
      y = {
        ...r,
        color: i,
        disableShrink: s,
        size: l,
        thickness: u,
        value: d,
        variant: f,
      },
      v = Zw(y),
      C = {},
      k = {},
      h = {}
    if (f === 'determinate') {
      const g = 2 * Math.PI * ((Wn - u) / 2)
      ;((C.strokeDasharray = g.toFixed(3)),
        (h['aria-valuenow'] = Math.round(d)),
        (C.strokeDashoffset = `${(((100 - d) / 100) * g).toFixed(3)}px`),
        (k.transform = 'rotate(-90deg)'))
    }
    return b.jsx(Jw, {
      className: V(v.root, o),
      style: { width: l, height: l, ...k, ...a },
      ownerState: y,
      ref: n,
      role: 'progressbar',
      ...h,
      ...p,
      children: b.jsx(eb, {
        className: v.svg,
        ownerState: y,
        viewBox: `${Wn / 2} ${Wn / 2} ${Wn} ${Wn}`,
        children: b.jsx(tb, {
          className: v.circle,
          style: C,
          ownerState: y,
          cx: Wn,
          cy: Wn,
          r: (Wn - u) / 2,
          fill: 'none',
          strokeWidth: u,
        }),
      }),
    })
  })
function nb(e) {
  return ee('MuiIconButton', e)
}
const Hp = q('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper',
  ]),
  rb = (e) => {
    const {
        classes: t,
        disabled: n,
        color: r,
        edge: o,
        size: i,
        loading: s,
      } = e,
      l = {
        root: [
          'root',
          s && 'loading',
          n && 'disabled',
          r !== 'default' && `color${F(r)}`,
          o && `edge${F(o)}`,
          `size${F(i)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      }
    return te(l, nb, t)
  },
  ob = B(Po, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.loading && t.loading,
        n.color !== 'default' && t[`color${F(n.color)}`],
        n.edge && t[`edge${F(n.edge)}`],
        t[`size${F(n.size)}`],
      ]
    },
  })(
    ue(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            '--IconButton-hoverBg': e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : ye(e.palette.action.active, e.palette.action.hoverOpacity),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    ue(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(it())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        ...Object.entries(e.palette)
          .filter(it())
          .map(([t]) => ({
            props: { color: t },
            style: {
              '--IconButton-hoverBg': e.vars
                ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ye(
                    (e.vars || e).palette[t].main,
                    e.palette.action.hoverOpacity,
                  ),
            },
          })),
        {
          props: { size: 'small' },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: 'large' },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${Hp.disabled}`]: {
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${Hp.loading}`]: { color: 'transparent' },
    })),
  ),
  ib = B('span', {
    name: 'MuiIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (e, t) => t.loadingIndicator,
  })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  Ws = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: l = 'default',
        disabled: a = !1,
        disableFocusRipple: u = !1,
        size: d = 'medium',
        id: f,
        loading: p = null,
        loadingIndicator: y,
        ...v
      } = r,
      C = Xi(f),
      k = y ?? b.jsx(Dy, { 'aria-labelledby': C, color: 'inherit', size: 16 }),
      h = {
        ...r,
        edge: o,
        color: l,
        disabled: a,
        disableFocusRipple: u,
        loading: p,
        loadingIndicator: k,
        size: d,
      },
      g = rb(h)
    return b.jsxs(ob, {
      id: p ? C : f,
      className: V(g.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: a || p,
      ref: n,
      ...v,
      ownerState: h,
      children: [
        typeof p == 'boolean' &&
          b.jsx('span', {
            className: g.loadingWrapper,
            style: { display: 'contents' },
            children: b.jsx(ib, {
              className: g.loadingIndicator,
              ownerState: h,
              children: p && k,
            }),
          }),
        i,
      ],
    })
  }),
  sb = wn(
    b.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined',
  ),
  lb = wn(
    b.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined',
  ),
  ab = wn(
    b.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline',
  ),
  ub = wn(
    b.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined',
  ),
  cb = wn(
    b.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close',
  ),
  db = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ['root', `color${F(n || r)}`, `${t}${F(n || r)}`, `${t}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      }
    return te(i, Qw, o)
  },
  fb = B(xr, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${F(n.color || n.severity)}`],
      ]
    },
  })(
    ue(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? Ar : jr,
        n = e.palette.mode === 'light' ? jr : Ar
      return {
        ...e.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(e.palette)
            .filter(it(['light']))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: 'standard' },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${r}StandardBg`]
                  : n(e.palette[r].light, 0.9),
                [`& .${Up.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(it(['light']))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: 'outlined' },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[r].light}`,
                [`& .${Up.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(it(['dark']))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: 'filled' },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${r}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === 'dark'
                          ? e.palette[r].dark
                          : e.palette[r].main,
                      color: e.palette.getContrastText(e.palette[r].main),
                    }),
              },
            })),
        ],
      }
    }),
  ),
  pb = B('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  mb = B('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (e, t) => t.message,
  })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
  hb = B('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (e, t) => t.action,
  })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  Vp = {
    success: b.jsx(sb, { fontSize: 'inherit' }),
    warning: b.jsx(lb, { fontSize: 'inherit' }),
    error: b.jsx(ab, { fontSize: 'inherit' }),
    info: b.jsx(ub, { fontSize: 'inherit' }),
  },
  gb = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiAlert' }),
      {
        action: o,
        children: i,
        className: s,
        closeText: l = 'Close',
        color: a,
        components: u = {},
        componentsProps: d = {},
        icon: f,
        iconMapping: p = Vp,
        onClose: y,
        role: v = 'alert',
        severity: C = 'success',
        slotProps: k = {},
        slots: h = {},
        variant: g = 'standard',
        ...m
      } = r,
      S = { ...r, color: a, severity: C, variant: g, colorSeverity: a || C },
      P = db(S),
      $ = {
        slots: { closeButton: u.CloseButton, closeIcon: u.CloseIcon, ...h },
        slotProps: { ...d, ...k },
      },
      [w, E] = he('root', {
        ref: n,
        shouldForwardComponentProp: !0,
        className: V(P.root, s),
        elementType: fb,
        externalForwardedProps: { ...$, ...m },
        ownerState: S,
        additionalProps: { role: v, elevation: 0 },
      }),
      [T, c] = he('icon', {
        className: P.icon,
        elementType: pb,
        externalForwardedProps: $,
        ownerState: S,
      }),
      [R, M] = he('message', {
        className: P.message,
        elementType: mb,
        externalForwardedProps: $,
        ownerState: S,
      }),
      [O, j] = he('action', {
        className: P.action,
        elementType: hb,
        externalForwardedProps: $,
        ownerState: S,
      }),
      [L, A] = he('closeButton', {
        elementType: Ws,
        externalForwardedProps: $,
        ownerState: S,
      }),
      [W, z] = he('closeIcon', {
        elementType: cb,
        externalForwardedProps: $,
        ownerState: S,
      })
    return b.jsxs(w, {
      ...E,
      children: [
        f !== !1 ? b.jsx(T, { ...c, children: f || p[C] || Vp[C] }) : null,
        b.jsx(R, { ...M, children: i }),
        o != null ? b.jsx(O, { ...j, children: o }) : null,
        o == null && y
          ? b.jsx(O, {
              ...j,
              children: b.jsx(L, {
                size: 'small',
                'aria-label': l,
                title: l,
                color: 'inherit',
                onClick: y,
                ...A,
                children: b.jsx(W, { fontSize: 'small', ...z }),
              }),
            })
          : null,
      ],
    })
  })
function yb(e) {
  return ee('MuiTypography', e)
}
const Kp = q('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph',
  ]),
  vb = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  Sb = yw(),
  xb = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      l = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${F(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          o && 'paragraph',
        ],
      }
    return te(l, yb, s)
  },
  Cb = B('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${F(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ]
    },
  })(
    ue(({ theme: e }) => {
      var t
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: {
              font: 'inherit',
              lineHeight: 'inherit',
              letterSpacing: 'inherit',
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== 'inherit' && r && typeof r == 'object')
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(it())
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == 'string')
            .map(([n]) => ({
              props: { color: `text${F(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== 'inherit',
            style: { textAlign: 'var(--Typography-textAlign)' },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: '0.35em' },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      }
    }),
  ),
  Gp = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  ht = x.forwardRef(function (t, n) {
    const { color: r, ...o } = ne({ props: t, name: 'MuiTypography' }),
      i = !vb[r],
      s = Sb({ ...o, ...(i && { color: r }) }),
      {
        align: l = 'inherit',
        className: a,
        component: u,
        gutterBottom: d = !1,
        noWrap: f = !1,
        paragraph: p = !1,
        variant: y = 'body1',
        variantMapping: v = Gp,
        ...C
      } = s,
      k = {
        ...s,
        align: l,
        color: r,
        className: a,
        component: u,
        gutterBottom: d,
        noWrap: f,
        paragraph: p,
        variant: y,
        variantMapping: v,
      },
      h = u || (p ? 'p' : v[y] || Gp[y]) || 'span',
      g = xb(k)
    return b.jsx(Cb, {
      as: h,
      ref: n,
      className: V(g.root, a),
      ...C,
      ownerState: k,
      style: {
        ...(l !== 'inherit' && { '--Typography-textAlign': l }),
        ...C.style,
      },
    })
  })
function wb(e) {
  return typeof e == 'function' ? e() : e
}
const bb = x.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, l] = x.useState(null),
      a = at(x.isValidElement(r) ? qi(r) : null, n)
    if (
      (Cn(() => {
        i || l(wb(o) || document.body)
      }, [o, i]),
      Cn(() => {
        if (s && !i)
          return (
            Ep(n, s),
            () => {
              Ep(n, null)
            }
          )
      }, [n, s, i]),
      i)
    ) {
      if (x.isValidElement(r)) {
        const u = { ref: a }
        return x.cloneElement(r, u)
      }
      return r
    }
    return s && hd.createPortal(r, s)
  }),
  kb = wn(
    b.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
    'Cancel',
  )
function Eb(e) {
  return ee('MuiChip', e)
}
const se = q('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible',
  ]),
  Pb = (e) => {
    const {
        classes: t,
        disabled: n,
        size: r,
        color: o,
        iconColor: i,
        onDelete: s,
        clickable: l,
        variant: a,
      } = e,
      u = {
        root: [
          'root',
          a,
          n && 'disabled',
          `size${F(r)}`,
          `color${F(o)}`,
          l && 'clickable',
          l && `clickableColor${F(o)}`,
          s && 'deletable',
          s && `deletableColor${F(o)}`,
          `${a}${F(o)}`,
        ],
        label: ['label', `label${F(r)}`],
        avatar: ['avatar', `avatar${F(r)}`, `avatarColor${F(o)}`],
        icon: ['icon', `icon${F(r)}`, `iconColor${F(i)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${F(r)}`,
          `deleteIconColor${F(o)}`,
          `deleteIcon${F(a)}Color${F(o)}`,
        ],
      }
    return te(u, Eb, t)
  },
  $b = B('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          color: r,
          iconColor: o,
          clickable: i,
          onDelete: s,
          size: l,
          variant: a,
        } = n
      return [
        { [`& .${se.avatar}`]: t.avatar },
        { [`& .${se.avatar}`]: t[`avatar${F(l)}`] },
        { [`& .${se.avatar}`]: t[`avatarColor${F(r)}`] },
        { [`& .${se.icon}`]: t.icon },
        { [`& .${se.icon}`]: t[`icon${F(l)}`] },
        { [`& .${se.icon}`]: t[`iconColor${F(o)}`] },
        { [`& .${se.deleteIcon}`]: t.deleteIcon },
        { [`& .${se.deleteIcon}`]: t[`deleteIcon${F(l)}`] },
        { [`& .${se.deleteIcon}`]: t[`deleteIconColor${F(r)}`] },
        { [`& .${se.deleteIcon}`]: t[`deleteIcon${F(a)}Color${F(r)}`] },
        t.root,
        t[`size${F(l)}`],
        t[`color${F(r)}`],
        i && t.clickable,
        i && r !== 'default' && t[`clickableColor${F(r)})`],
        s && t.deletable,
        s && r !== 'default' && t[`deletableColor${F(r)}`],
        t[a],
        t[`${a}${F(r)}`],
      ]
    },
  })(
    ue(({ theme: e }) => {
      const t =
        e.palette.mode === 'light' ? e.palette.grey[700] : e.palette.grey[300]
      return {
        maxWidth: '100%',
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        color: (e.vars || e).palette.text.primary,
        backgroundColor: (e.vars || e).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: e.transitions.create(['background-color', 'box-shadow']),
        cursor: 'unset',
        outline: 0,
        textDecoration: 'none',
        border: 0,
        padding: 0,
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        [`&.${se.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
          pointerEvents: 'none',
        },
        [`& .${se.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
          fontSize: e.typography.pxToRem(12),
        },
        [`& .${se.avatarColorPrimary}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark,
        },
        [`& .${se.avatarColorSecondary}`]: {
          color: (e.vars || e).palette.secondary.contrastText,
          backgroundColor: (e.vars || e).palette.secondary.dark,
        },
        [`& .${se.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10),
        },
        [`& .${se.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${se.deleteIcon}`]: {
          WebkitTapHighlightColor: 'transparent',
          color: e.vars
            ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
            : ye(e.palette.text.primary, 0.26),
          fontSize: 22,
          cursor: 'pointer',
          margin: '0 5px 0 -6px',
          '&:hover': {
            color: e.vars
              ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
              : ye(e.palette.text.primary, 0.4),
          },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              height: 24,
              [`& .${se.icon}`]: {
                fontSize: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              [`& .${se.deleteIcon}`]: {
                fontSize: 16,
                marginRight: 4,
                marginLeft: -4,
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(it(['contrastText']))
            .map(([n]) => ({
              props: { color: n },
              style: {
                backgroundColor: (e.vars || e).palette[n].main,
                color: (e.vars || e).palette[n].contrastText,
                [`& .${se.deleteIcon}`]: {
                  color: e.vars
                    ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)`
                    : ye(e.palette[n].contrastText, 0.7),
                  '&:hover, &:active': {
                    color: (e.vars || e).palette[n].contrastText,
                  },
                },
              },
            })),
          {
            props: (n) => n.iconColor === n.color,
            style: {
              [`& .${se.icon}`]: {
                color: e.vars ? e.vars.palette.Chip.defaultIconColor : t,
              },
            },
          },
          {
            props: (n) => n.iconColor === n.color && n.color !== 'default',
            style: { [`& .${se.icon}`]: { color: 'inherit' } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${se.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : ye(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(it(['dark']))
            .map(([n]) => ({
              props: { color: n, onDelete: !0 },
              style: {
                [`&.${se.focusVisible}`]: {
                  background: (e.vars || e).palette[n].dark,
                },
              },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                  : ye(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.hoverOpacity,
                    ),
              },
              [`&.${se.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : ye(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
              '&:active': { boxShadow: (e.vars || e).shadows[1] },
            },
          },
          ...Object.entries(e.palette)
            .filter(it(['dark']))
            .map(([n]) => ({
              props: { color: n, clickable: !0 },
              style: {
                [`&:hover, &.${se.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[n].dark,
                },
              },
            })),
          {
            props: { variant: 'outlined' },
            style: {
              backgroundColor: 'transparent',
              border: e.vars
                ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                : `1px solid ${e.palette.mode === 'light' ? e.palette.grey[400] : e.palette.grey[700]}`,
              [`&.${se.clickable}:hover`]: {
                backgroundColor: (e.vars || e).palette.action.hover,
              },
              [`&.${se.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette.action.focus,
              },
              [`& .${se.avatar}`]: { marginLeft: 4 },
              [`& .${se.avatarSmall}`]: { marginLeft: 2 },
              [`& .${se.icon}`]: { marginLeft: 4 },
              [`& .${se.iconSmall}`]: { marginLeft: 2 },
              [`& .${se.deleteIcon}`]: { marginRight: 5 },
              [`& .${se.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(e.palette)
            .filter(it())
            .map(([n]) => ({
              props: { variant: 'outlined', color: n },
              style: {
                color: (e.vars || e).palette[n].main,
                border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ye(e.palette[n].main, 0.7)}`,
                [`&.${se.clickable}:hover`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ye(e.palette[n].main, e.palette.action.hoverOpacity),
                },
                [`&.${se.focusVisible}`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                    : ye(e.palette[n].main, e.palette.action.focusOpacity),
                },
                [`& .${se.deleteIcon}`]: {
                  color: e.vars
                    ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)`
                    : ye(e.palette[n].main, 0.7),
                  '&:hover, &:active': { color: (e.vars || e).palette[n].main },
                },
              },
            })),
        ],
      }
    }),
  ),
  Rb = B('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { size: r } = n
      return [t.label, t[`label${F(r)}`]]
    },
  })({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
      {
        props: { variant: 'outlined' },
        style: { paddingLeft: 11, paddingRight: 11 },
      },
      { props: { size: 'small' }, style: { paddingLeft: 8, paddingRight: 8 } },
      {
        props: { size: 'small', variant: 'outlined' },
        style: { paddingLeft: 7, paddingRight: 7 },
      },
    ],
  })
function Qp(e) {
  return e.key === 'Backspace' || e.key === 'Delete'
}
const Tb = x.forwardRef(function (t, n) {
  const r = ne({ props: t, name: 'MuiChip' }),
    {
      avatar: o,
      className: i,
      clickable: s,
      color: l = 'default',
      component: a,
      deleteIcon: u,
      disabled: d = !1,
      icon: f,
      label: p,
      onClick: y,
      onDelete: v,
      onKeyDown: C,
      onKeyUp: k,
      size: h = 'medium',
      variant: g = 'filled',
      tabIndex: m,
      skipFocusWhenDisabled: S = !1,
      ...P
    } = r,
    $ = x.useRef(null),
    w = at($, n),
    E = (I) => {
      ;(I.stopPropagation(), v && v(I))
    },
    T = (I) => {
      ;(I.currentTarget === I.target && Qp(I) && I.preventDefault(), C && C(I))
    },
    c = (I) => {
      ;(I.currentTarget === I.target && v && Qp(I) && v(I), k && k(I))
    },
    R = s !== !1 && y ? !0 : s,
    M = R || v ? Po : a || 'div',
    O = {
      ...r,
      component: M,
      disabled: d,
      size: h,
      color: l,
      iconColor: (x.isValidElement(f) && f.props.color) || l,
      onDelete: !!v,
      clickable: R,
      variant: g,
    },
    j = Pb(O),
    L =
      M === Po
        ? {
            component: a || 'div',
            focusVisibleClassName: j.focusVisible,
            ...(v && { disableRipple: !0 }),
          }
        : {}
  let A = null
  v &&
    (A =
      u && x.isValidElement(u)
        ? x.cloneElement(u, {
            className: V(u.props.className, j.deleteIcon),
            onClick: E,
          })
        : b.jsx(kb, { className: V(j.deleteIcon), onClick: E }))
  let W = null
  o &&
    x.isValidElement(o) &&
    (W = x.cloneElement(o, { className: V(j.avatar, o.props.className) }))
  let z = null
  return (
    f &&
      x.isValidElement(f) &&
      (z = x.cloneElement(f, { className: V(j.icon, f.props.className) })),
    b.jsxs($b, {
      as: M,
      className: V(j.root, i),
      disabled: R && d ? !0 : void 0,
      onClick: y,
      onKeyDown: T,
      onKeyUp: c,
      ref: w,
      tabIndex: S && d ? -1 : m,
      ownerState: O,
      ...L,
      ...P,
      children: [
        W || z,
        b.jsx(Rb, { className: V(j.label), ownerState: O, children: p }),
        A,
      ],
    })
  )
})
function xs(e) {
  return parseInt(e, 10) || 0
}
const Ib = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
}
function Mb(e) {
  for (const t in e) return !1
  return !0
}
function Yp(e) {
  return Mb(e) || (e.outerHeightStyle === 0 && !e.overflowing)
}
const Nb = x.forwardRef(function (t, n) {
  const {
      onChange: r,
      maxRows: o,
      minRows: i = 1,
      style: s,
      value: l,
      ...a
    } = t,
    { current: u } = x.useRef(l != null),
    d = x.useRef(null),
    f = at(n, d),
    p = x.useRef(null),
    y = x.useRef(null),
    v = x.useCallback(() => {
      const m = d.current,
        S = y.current
      if (!m || !S) return
      const $ = jn(m).getComputedStyle(m)
      if ($.width === '0px') return { outerHeightStyle: 0, overflowing: !1 }
      ;((S.style.width = $.width),
        (S.value = m.value || t.placeholder || 'x'),
        S.value.slice(-1) ===
          `
` && (S.value += ' '))
      const w = $.boxSizing,
        E = xs($.paddingBottom) + xs($.paddingTop),
        T = xs($.borderBottomWidth) + xs($.borderTopWidth),
        c = S.scrollHeight
      S.value = 'x'
      const R = S.scrollHeight
      let M = c
      ;(i && (M = Math.max(Number(i) * R, M)),
        o && (M = Math.min(Number(o) * R, M)),
        (M = Math.max(M, R)))
      const O = M + (w === 'border-box' ? E + T : 0),
        j = Math.abs(M - c) <= 1
      return { outerHeightStyle: O, overflowing: j }
    }, [o, i, t.placeholder]),
    C = Tr(() => {
      const m = d.current,
        S = v()
      if (!m || !S || Yp(S)) return !1
      const P = S.outerHeightStyle
      return p.current != null && p.current !== P
    }),
    k = x.useCallback(() => {
      const m = d.current,
        S = v()
      if (!m || !S || Yp(S)) return
      const P = S.outerHeightStyle
      ;(p.current !== P && ((p.current = P), (m.style.height = `${P}px`)),
        (m.style.overflow = S.overflowing ? 'hidden' : ''))
    }, [v]),
    h = x.useRef(-1)
  ;(Cn(() => {
    const m = vy(k),
      S = d == null ? void 0 : d.current
    if (!S) return
    const P = jn(S)
    P.addEventListener('resize', m)
    let $
    return (
      typeof ResizeObserver < 'u' &&
        (($ = new ResizeObserver(() => {
          C() &&
            ($.unobserve(S),
            cancelAnimationFrame(h.current),
            k(),
            (h.current = requestAnimationFrame(() => {
              $.observe(S)
            })))
        })),
        $.observe(S)),
      () => {
        ;(m.clear(),
          cancelAnimationFrame(h.current),
          P.removeEventListener('resize', m),
          $ && $.disconnect())
      }
    )
  }, [v, k, C]),
    Cn(() => {
      k()
    }))
  const g = (m) => {
    ;(u || k(), r && r(m))
  }
  return b.jsxs(x.Fragment, {
    children: [
      b.jsx('textarea', {
        value: l,
        onChange: g,
        ref: f,
        rows: i,
        style: s,
        ...a,
      }),
      b.jsx('textarea', {
        'aria-hidden': !0,
        className: t.className,
        readOnly: !0,
        ref: y,
        tabIndex: -1,
        style: { ...Ib.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  })
})
function Ai(e) {
  return typeof e == 'string'
}
function Br({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > 'u' && (r[o] = n[o]), r),
    {},
  )
}
const Ud = x.createContext(void 0)
function pr() {
  return x.useContext(Ud)
}
function Xp(e) {
  return e != null && !(Array.isArray(e) && e.length === 0)
}
function xl(e, t = !1) {
  return (
    e &&
    ((Xp(e.value) && e.value !== '') ||
      (t && Xp(e.defaultValue) && e.defaultValue !== ''))
  )
}
function Ob(e) {
  return e.startAdornment
}
function Lb(e) {
  return ee('MuiInputBase', e)
}
const $o = q('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel',
])
var qp
const Sa = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === 'small' && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${F(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ]
  },
  xa = (e, t) => {
    const { ownerState: n } = e
    return [
      t.input,
      n.size === 'small' && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === 'search' && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ]
  },
  zb = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: l,
        fullWidth: a,
        hiddenLabel: u,
        multiline: d,
        readOnly: f,
        size: p,
        startAdornment: y,
        type: v,
      } = e,
      C = {
        root: [
          'root',
          `color${F(n)}`,
          r && 'disabled',
          o && 'error',
          a && 'fullWidth',
          s && 'focused',
          l && 'formControl',
          p && p !== 'medium' && `size${F(p)}`,
          d && 'multiline',
          y && 'adornedStart',
          i && 'adornedEnd',
          u && 'hiddenLabel',
          f && 'readOnly',
        ],
        input: [
          'input',
          r && 'disabled',
          v === 'search' && 'inputTypeSearch',
          d && 'inputMultiline',
          p === 'small' && 'inputSizeSmall',
          u && 'inputHiddenLabel',
          y && 'inputAdornedStart',
          i && 'inputAdornedEnd',
          f && 'readOnly',
        ],
      }
    return te(C, Lb, t)
  },
  Ca = B('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Sa })(
    ue(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${$o.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: 'default',
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: '4px 0 5px' },
        },
        {
          props: ({ ownerState: t, size: n }) => t.multiline && n === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  wa = B('input', {
    name: 'MuiInputBase',
    slot: 'Input',
    overridesResolver: xa,
  })(
    ue(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        n = {
          color: 'currentColor',
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', {
            duration: e.transitions.duration.shorter,
          }),
        },
        r = { opacity: '0 !important' },
        o = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 }
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': n,
        '&::-moz-placeholder': n,
        '&::-ms-input-placeholder': n,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${$o.formControl} &`]: {
          '&::-webkit-input-placeholder': r,
          '&::-moz-placeholder': r,
          '&::-ms-input-placeholder': r,
          '&:focus::-webkit-input-placeholder': o,
          '&:focus::-moz-placeholder': o,
          '&:focus::-ms-input-placeholder': o,
        },
        [`&.${$o.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': {
                animationDuration: '5000s',
                animationName: 'mui-auto-fill',
              },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: {
              height: 'auto',
              resize: 'none',
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      }
    }),
  ),
  Zp = Bd({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  Hd = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': o,
        autoComplete: i,
        autoFocus: s,
        className: l,
        color: a,
        components: u = {},
        componentsProps: d = {},
        defaultValue: f,
        disabled: p,
        disableInjectingGlobalStyles: y,
        endAdornment: v,
        error: C,
        fullWidth: k = !1,
        id: h,
        inputComponent: g = 'input',
        inputProps: m = {},
        inputRef: S,
        margin: P,
        maxRows: $,
        minRows: w,
        multiline: E = !1,
        name: T,
        onBlur: c,
        onChange: R,
        onClick: M,
        onFocus: O,
        onKeyDown: j,
        onKeyUp: L,
        placeholder: A,
        readOnly: W,
        renderSuffix: z,
        rows: I,
        size: D,
        slotProps: H = {},
        slots: Y = {},
        startAdornment: ae,
        type: Z = 'text',
        value: K,
        ...J
      } = r,
      ce = m.value != null ? m.value : K,
      { current: ut } = x.useRef(ce != null),
      Ee = x.useRef(),
      X = x.useCallback((ge) => {}, []),
      oe = at(Ee, S, m.ref, X),
      [re, Fe] = x.useState(!1),
      ie = pr(),
      be = Br({
        props: r,
        muiFormControl: ie,
        states: [
          'color',
          'disabled',
          'error',
          'hiddenLabel',
          'size',
          'required',
          'filled',
        ],
      })
    ;((be.focused = ie ? ie.focused : re),
      x.useEffect(() => {
        !ie && p && re && (Fe(!1), c && c())
      }, [ie, p, re, c]))
    const ct = ie && ie.onFilled,
      Qe = ie && ie.onEmpty,
      fe = x.useCallback(
        (ge) => {
          xl(ge) ? ct && ct() : Qe && Qe()
        },
        [ct, Qe],
      )
    Cn(() => {
      ut && fe({ value: ce })
    }, [ce, fe, ut])
    const dt = (ge) => {
        ;(O && O(ge),
          m.onFocus && m.onFocus(ge),
          ie && ie.onFocus ? ie.onFocus(ge) : Fe(!0))
      },
      _e = (ge) => {
        ;(c && c(ge),
          m.onBlur && m.onBlur(ge),
          ie && ie.onBlur ? ie.onBlur(ge) : Fe(!1))
      },
      Be = (ge, ...qe) => {
        if (!ut) {
          const vt = ge.target || Ee.current
          if (vt == null) throw new Error(An(1))
          fe({ value: vt.value })
        }
        ;(m.onChange && m.onChange(ge, ...qe), R && R(ge, ...qe))
      }
    x.useEffect(() => {
      fe(Ee.current)
    }, [])
    const G = (ge) => {
      ;(Ee.current && ge.currentTarget === ge.target && Ee.current.focus(),
        M && M(ge))
    }
    let qt = g,
      Ve = m
    E &&
      qt === 'input' &&
      (I
        ? (Ve = { type: void 0, minRows: I, maxRows: I, ...Ve })
        : (Ve = { type: void 0, maxRows: $, minRows: w, ...Ve }),
      (qt = Nb))
    const kn = (ge) => {
      fe(
        ge.animationName === 'mui-auto-fill-cancel'
          ? Ee.current
          : { value: 'x' },
      )
    }
    x.useEffect(() => {
      ie && ie.setAdornedStart(!!ae)
    }, [ie, ae])
    const _n = {
        ...r,
        color: be.color || 'primary',
        disabled: be.disabled,
        endAdornment: v,
        error: be.error,
        focused: be.focused,
        formControl: ie,
        fullWidth: k,
        hiddenLabel: be.hiddenLabel,
        multiline: E,
        size: be.size,
        startAdornment: ae,
        type: Z,
      },
      Bn = zb(_n),
      Le = Y.root || u.Root || Ca,
      De = H.root || d.root || {},
      We = Y.input || u.Input || wa
    return (
      (Ve = { ...Ve, ...(H.input ?? d.input) }),
      b.jsxs(x.Fragment, {
        children: [
          !y && typeof Zp == 'function' && (qp || (qp = b.jsx(Zp, {}))),
          b.jsxs(Le, {
            ...De,
            ref: n,
            onClick: G,
            ...J,
            ...(!Ai(Le) && { ownerState: { ..._n, ...De.ownerState } }),
            className: V(
              Bn.root,
              De.className,
              l,
              W && 'MuiInputBase-readOnly',
            ),
            children: [
              ae,
              b.jsx(Ud.Provider, {
                value: null,
                children: b.jsx(We, {
                  'aria-invalid': be.error,
                  'aria-describedby': o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: f,
                  disabled: be.disabled,
                  id: h,
                  onAnimationStart: kn,
                  name: T,
                  placeholder: A,
                  readOnly: W,
                  required: be.required,
                  rows: I,
                  value: ce,
                  onKeyDown: j,
                  onKeyUp: L,
                  type: Z,
                  ...Ve,
                  ...(!Ai(We) && {
                    as: qt,
                    ownerState: { ..._n, ...Ve.ownerState },
                  }),
                  ref: oe,
                  className: V(
                    Bn.input,
                    Ve.className,
                    W && 'MuiInputBase-readOnly',
                  ),
                  onBlur: _e,
                  onChange: Be,
                  onFocus: dt,
                }),
              }),
              v,
              z ? z({ ...be, startAdornment: ae }) : null,
            ],
          }),
        ],
      })
    )
  })
function Ab(e) {
  return ee('MuiInput', e)
}
const Uo = { ...$o, ...q('MuiInput', ['root', 'underline', 'input']) }
function jb(e) {
  return ee('MuiOutlinedInput', e)
}
const cn = {
  ...$o,
  ...q('MuiOutlinedInput', ['root', 'notchedOutline', 'input']),
}
function Fb(e) {
  return ee('MuiFilledInput', e)
}
const mr = {
    ...$o,
    ...q('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  _b = wn(b.jsx('path', { d: 'M7 10l5 5 5-5z' }), 'ArrowDropDown'),
  Bb = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Db = x.forwardRef(function (t, n) {
    const r = va(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: l,
        easing: a,
        in: u,
        onEnter: d,
        onEntered: f,
        onEntering: p,
        onExit: y,
        onExited: v,
        onExiting: C,
        style: k,
        timeout: h = o,
        TransitionComponent: g = bn,
        ...m
      } = t,
      S = x.useRef(null),
      P = at(S, qi(l), n),
      $ = (j) => (L) => {
        if (j) {
          const A = S.current
          L === void 0 ? j(A) : j(A, L)
        }
      },
      w = $(p),
      E = $((j, L) => {
        By(j)
        const A = vl({ style: k, timeout: h, easing: a }, { mode: 'enter' })
        ;((j.style.webkitTransition = r.transitions.create('opacity', A)),
          (j.style.transition = r.transitions.create('opacity', A)),
          d && d(j, L))
      }),
      T = $(f),
      c = $(C),
      R = $((j) => {
        const L = vl({ style: k, timeout: h, easing: a }, { mode: 'exit' })
        ;((j.style.webkitTransition = r.transitions.create('opacity', L)),
          (j.style.transition = r.transitions.create('opacity', L)),
          y && y(j))
      }),
      M = $(v),
      O = (j) => {
        i && i(S.current, j)
      }
    return b.jsx(g, {
      appear: s,
      in: u,
      nodeRef: S,
      onEnter: E,
      onEntered: T,
      onEntering: w,
      onExit: R,
      onExited: M,
      onExiting: c,
      addEndListener: O,
      timeout: h,
      ...m,
      children: (j, { ownerState: L, ...A }) =>
        x.cloneElement(l, {
          style: {
            opacity: 0,
            visibility: j === 'exited' && !u ? 'hidden' : void 0,
            ...Bb[j],
            ...k,
            ...l.props.style,
          },
          ref: P,
          ...A,
        }),
    })
  })
function Wb(e) {
  return ee('MuiBackdrop', e)
}
q('MuiBackdrop', ['root', 'invisible'])
const Ub = (e) => {
    const { classes: t, invisible: n } = e
    return te({ root: ['root', n && 'invisible'] }, Wb, t)
  },
  Hb = B('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.invisible && t.invisible]
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: 'transparent' } },
    ],
  }),
  Vb = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiBackdrop' }),
      {
        children: o,
        className: i,
        component: s = 'div',
        invisible: l = !1,
        open: a,
        components: u = {},
        componentsProps: d = {},
        slotProps: f = {},
        slots: p = {},
        TransitionComponent: y,
        transitionDuration: v,
        ...C
      } = r,
      k = { ...r, component: s, invisible: l },
      h = Ub(k),
      g = { transition: y, root: u.Root, ...p },
      m = { ...d, ...f },
      S = { slots: g, slotProps: m },
      [P, $] = he('root', {
        elementType: Hb,
        externalForwardedProps: S,
        className: V(h.root, i),
        ownerState: k,
      }),
      [w, E] = he('transition', {
        elementType: Db,
        externalForwardedProps: S,
        ownerState: k,
      })
    return b.jsx(w, {
      in: a,
      timeout: v,
      ...C,
      ...E,
      children: b.jsx(P, {
        'aria-hidden': !0,
        ...$,
        classes: h,
        ref: n,
        children: o,
      }),
    })
  }),
  Kb = q('MuiBox', ['root']),
  Gb = ya(),
  nu = Lx({
    themeId: Sn,
    defaultTheme: Gb,
    defaultClassName: Kb.root,
    generateClassName: cy.generate,
  })
function Qb(e) {
  return ee('MuiButton', e)
}
const hr = q('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd',
  ]),
  Yb = x.createContext({}),
  Xb = x.createContext(void 0),
  qb = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        loading: s,
        loadingPosition: l,
        classes: a,
      } = e,
      u = {
        root: [
          'root',
          s && 'loading',
          i,
          `${i}${F(t)}`,
          `size${F(o)}`,
          `${i}Size${F(o)}`,
          `color${F(t)}`,
          n && 'disableElevation',
          r && 'fullWidth',
          s && `loadingPosition${F(l)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${F(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${F(o)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      d = te(u, Qb, a)
    return { ...a, ...d }
  },
  Wy = [
    {
      props: { size: 'small' },
      style: { '& > *:nth-of-type(1)': { fontSize: 18 } },
    },
    {
      props: { size: 'medium' },
      style: { '& > *:nth-of-type(1)': { fontSize: 20 } },
    },
    {
      props: { size: 'large' },
      style: { '& > *:nth-of-type(1)': { fontSize: 22 } },
    },
  ],
  Zb = B(Po, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${F(n.color)}`],
        t[`size${F(n.size)}`],
        t[`${n.variant}Size${F(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
        n.loading && t.loading,
      ]
    },
  })(
    ue(({ theme: e }) => {
      const t =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        n =
          e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700]
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: e.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${hr.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] },
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${hr.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${hr.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${hr.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(e.palette)
            .filter(it())
            .map(([r]) => ({
              props: { color: r },
              style: {
                '--variant-textColor': (e.vars || e).palette[r].main,
                '--variant-outlinedColor': (e.vars || e).palette[r].main,
                '--variant-outlinedBorder': e.vars
                  ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)`
                  : ye(e.palette[r].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[r]
                  .contrastText,
                '--variant-containedBg': (e.vars || e).palette[r].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[r].dark,
                    '--variant-textBg': e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : ye(e.palette[r].main, e.palette.action.hoverOpacity),
                    '--variant-outlinedBorder': (e.vars || e).palette[r].main,
                    '--variant-outlinedBg': e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : ye(e.palette[r].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : n,
                  '--variant-textBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ye(e.palette.text.primary, e.palette.action.hoverOpacity),
                  '--variant-outlinedBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ye(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${hr.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${hr.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: e.transitions.create(
                ['background-color', 'box-shadow', 'border-color'],
                { duration: e.transitions.duration.short },
              ),
              [`&.${hr.loading}`]: { color: 'transparent' },
            },
          },
        ],
      }
    }),
  ),
  Jb = B('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.startIcon,
        n.loading && t.startIconLoadingStart,
        t[`iconSize${F(n.size)}`],
      ]
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'start', loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...Wy,
    ],
  })),
  ek = B('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.endIcon,
        n.loading && t.endIconLoadingEnd,
        t[`iconSize${F(n.size)}`],
      ]
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'end', loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...Wy,
    ],
  })),
  tk = B('span', {
    name: 'MuiButton',
    slot: 'LoadingIndicator',
    overridesResolver: (e, t) => t.loadingIndicator,
  })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    variants: [
      { props: { loading: !0 }, style: { display: 'flex' } },
      { props: { loadingPosition: 'start' }, style: { left: 14 } },
      {
        props: { loadingPosition: 'start', size: 'small' },
        style: { left: 10 },
      },
      {
        props: { variant: 'text', loadingPosition: 'start' },
        style: { left: 6 },
      },
      {
        props: { loadingPosition: 'center' },
        style: {
          left: '50%',
          transform: 'translate(-50%)',
          color: (e.vars || e).palette.action.disabled,
        },
      },
      { props: { loadingPosition: 'end' }, style: { right: 14 } },
      {
        props: { loadingPosition: 'end', size: 'small' },
        style: { right: 10 },
      },
      {
        props: { variant: 'text', loadingPosition: 'end' },
        style: { right: 6 },
      },
      {
        props: { loadingPosition: 'start', fullWidth: !0 },
        style: { position: 'relative', left: -10 },
      },
      {
        props: { loadingPosition: 'end', fullWidth: !0 },
        style: { position: 'relative', right: -10 },
      },
    ],
  })),
  Jp = B('span', {
    name: 'MuiButton',
    slot: 'LoadingIconPlaceholder',
    overridesResolver: (e, t) => t.loadingIconPlaceholder,
  })({ display: 'inline-block', width: '1em', height: '1em' }),
  Cs = x.forwardRef(function (t, n) {
    const r = x.useContext(Yb),
      o = x.useContext(Xb),
      i = zi(r, t),
      s = ne({ props: i, name: 'MuiButton' }),
      {
        children: l,
        color: a = 'primary',
        component: u = 'button',
        className: d,
        disabled: f = !1,
        disableElevation: p = !1,
        disableFocusRipple: y = !1,
        endIcon: v,
        focusVisibleClassName: C,
        fullWidth: k = !1,
        id: h,
        loading: g = null,
        loadingIndicator: m,
        loadingPosition: S = 'center',
        size: P = 'medium',
        startIcon: $,
        type: w,
        variant: E = 'text',
        ...T
      } = s,
      c = Xi(h),
      R = m ?? b.jsx(Dy, { 'aria-labelledby': c, color: 'inherit', size: 16 }),
      M = {
        ...s,
        color: a,
        component: u,
        disabled: f,
        disableElevation: p,
        disableFocusRipple: y,
        fullWidth: k,
        loading: g,
        loadingIndicator: R,
        loadingPosition: S,
        size: P,
        type: w,
        variant: E,
      },
      O = qb(M),
      j =
        ($ || (g && S === 'start')) &&
        b.jsx(Jb, {
          className: O.startIcon,
          ownerState: M,
          children:
            $ ||
            b.jsx(Jp, { className: O.loadingIconPlaceholder, ownerState: M }),
        }),
      L =
        (v || (g && S === 'end')) &&
        b.jsx(ek, {
          className: O.endIcon,
          ownerState: M,
          children:
            v ||
            b.jsx(Jp, { className: O.loadingIconPlaceholder, ownerState: M }),
        }),
      A = o || '',
      W =
        typeof g == 'boolean'
          ? b.jsx('span', {
              className: O.loadingWrapper,
              style: { display: 'contents' },
              children:
                g &&
                b.jsx(tk, {
                  className: O.loadingIndicator,
                  ownerState: M,
                  children: R,
                }),
            })
          : null
    return b.jsxs(Zb, {
      ownerState: M,
      className: V(r.className, O.root, d, A),
      component: u,
      disabled: f || g,
      focusRipple: !y,
      focusVisibleClassName: V(O.focusVisible, C),
      ref: n,
      type: w,
      id: g ? c : h,
      ...T,
      classes: O,
      children: [j, S !== 'end' && W, l, S === 'end' && W, L],
    })
  })
function nk(e) {
  return ee('PrivateSwitchBase', e)
}
q('PrivateSwitchBase', [
  'root',
  'checked',
  'disabled',
  'input',
  'edgeStart',
  'edgeEnd',
])
const rk = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ['root', n && 'checked', r && 'disabled', o && `edge${F(o)}`],
        input: ['input'],
      }
    return te(i, nk, t)
  },
  ok = B(Po, { name: 'MuiSwitchBase' })({
    padding: 9,
    borderRadius: '50%',
    variants: [
      { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === 'start' && t.size !== 'small',
        style: { marginLeft: -12 },
      },
      { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === 'end' && t.size !== 'small',
        style: { marginRight: -12 },
      },
    ],
  }),
  ik = B('input', { name: 'MuiSwitchBase', shouldForwardProp: Bt })({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  sk = x.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        defaultChecked: s,
        disabled: l,
        disableFocusRipple: a = !1,
        edge: u = !1,
        icon: d,
        id: f,
        inputProps: p,
        inputRef: y,
        name: v,
        onBlur: C,
        onChange: k,
        onFocus: h,
        readOnly: g,
        required: m = !1,
        tabIndex: S,
        type: P,
        value: $,
        slots: w = {},
        slotProps: E = {},
        ...T
      } = t,
      [c, R] = ac({
        controlled: o,
        default: !!s,
        name: 'SwitchBase',
        state: 'checked',
      }),
      M = pr(),
      O = (K) => {
        ;(h && h(K), M && M.onFocus && M.onFocus(K))
      },
      j = (K) => {
        ;(C && C(K), M && M.onBlur && M.onBlur(K))
      },
      L = (K) => {
        if (K.nativeEvent.defaultPrevented) return
        const J = K.target.checked
        ;(R(J), k && k(K, J))
      }
    let A = l
    M && typeof A > 'u' && (A = M.disabled)
    const W = P === 'checkbox' || P === 'radio',
      z = { ...t, checked: c, disabled: A, disableFocusRipple: a, edge: u },
      I = rk(z),
      D = { slots: w, slotProps: { input: p, ...E } },
      [H, Y] = he('root', {
        ref: n,
        elementType: ok,
        className: I.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...D, component: 'span', ...T },
        getSlotProps: (K) => ({
          ...K,
          onFocus: (J) => {
            var ce
            ;((ce = K.onFocus) == null || ce.call(K, J), O(J))
          },
          onBlur: (J) => {
            var ce
            ;((ce = K.onBlur) == null || ce.call(K, J), j(J))
          },
        }),
        ownerState: z,
        additionalProps: {
          centerRipple: !0,
          focusRipple: !a,
          disabled: A,
          role: void 0,
          tabIndex: null,
        },
      }),
      [ae, Z] = he('input', {
        ref: y,
        elementType: ik,
        className: I.input,
        externalForwardedProps: D,
        getSlotProps: (K) => ({
          onChange: (J) => {
            var ce
            ;((ce = K.onChange) == null || ce.call(K, J), L(J))
          },
        }),
        ownerState: z,
        additionalProps: {
          autoFocus: r,
          checked: o,
          defaultChecked: s,
          disabled: A,
          id: W ? f : void 0,
          name: v,
          readOnly: g,
          required: m,
          tabIndex: S,
          type: P,
          ...(P === 'checkbox' && $ === void 0 ? {} : { value: $ }),
        },
      })
    return b.jsxs(H, { ...Y, children: [b.jsx(ae, { ...Z }), c ? i : d] })
  }),
  lk = TC({
    createStyledComponent: B('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: n } = e
        return [
          t.root,
          t[`maxWidth${F(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ]
      },
    }),
    useThemeProps: (e) => ne({ props: e, name: 'MuiContainer' }),
  }),
  yc = typeof Bd({}) == 'function',
  ak = (e, t) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
    ...(t && !e.vars && { colorScheme: e.palette.mode }),
  }),
  uk = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    '@media print': { backgroundColor: (e.vars || e).palette.common.white },
  }),
  Uy = (e, t = !1) => {
    var i, s
    const n = {}
    t &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == 'function' &&
      Object.entries(e.colorSchemes).forEach(([l, a]) => {
        var d, f
        const u = e.getColorSchemeSelector(l)
        u.startsWith('@')
          ? (n[u] = {
              ':root': {
                colorScheme: (d = a.palette) == null ? void 0 : d.mode,
              },
            })
          : (n[u.replace(/\s*&/, '')] = {
              colorScheme: (f = a.palette) == null ? void 0 : f.mode,
            })
      })
    let r = {
      html: ak(e, t),
      '*, *::before, *::after': { boxSizing: 'inherit' },
      'strong, b': { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...uk(e),
        '&::backdrop': {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...n,
    }
    const o =
      (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null
        ? void 0
        : s.styleOverrides
    return (o && (r = [r, o]), r)
  },
  Us = 'mui-ecs',
  ck = (e) => {
    const t = Uy(e, !1),
      n = Array.isArray(t) ? t[0] : t
    return (
      !e.vars &&
        n &&
        (n.html[`:root:has(${Us})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([r, o]) => {
          var s, l
          const i = e.getColorSchemeSelector(r)
          i.startsWith('@')
            ? (n[i] = {
                [`:root:not(:has(.${Us}))`]: {
                  colorScheme: (s = o.palette) == null ? void 0 : s.mode,
                },
              })
            : (n[i.replace(/\s*&/, '')] = {
                [`&:not(:has(.${Us}))`]: {
                  colorScheme: (l = o.palette) == null ? void 0 : l.mode,
                },
              })
        }),
      t
    )
  },
  dk = Bd(
    yc
      ? ({ theme: e, enableColorScheme: t }) => Uy(e, t)
      : ({ theme: e }) => ck(e),
  )
function fk(e) {
  const t = ne({ props: e, name: 'MuiCssBaseline' }),
    { children: n, enableColorScheme: r = !1 } = t
  return b.jsxs(x.Fragment, {
    children: [
      yc && b.jsx(dk, { enableColorScheme: r }),
      !yc && !r && b.jsx('span', { className: Us, style: { display: 'none' } }),
      n,
    ],
  })
}
function pk(e) {
  const t = ln(e)
  return t.body === e
    ? jn(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight
}
function fi(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden')
}
function em(e) {
  return parseInt(jn(e).getComputedStyle(e).paddingRight, 10) || 0
}
function mk(e) {
  const n = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(e.tagName),
    r = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden'
  return n || r
}
function tm(e, t, n, r, o) {
  const i = [t, n, ...r]
  ;[].forEach.call(e.children, (s) => {
    const l = !i.includes(s),
      a = !mk(s)
    l && a && fi(s, o)
  })
}
function ru(e, t) {
  let n = -1
  return (e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n)
}
function hk(e, t) {
  const n = [],
    r = e.container
  if (!t.disableScrollLock) {
    if (pk(r)) {
      const s = Cy(jn(r))
      ;(n.push({
        value: r.style.paddingRight,
        property: 'padding-right',
        el: r,
      }),
        (r.style.paddingRight = `${em(r) + s}px`))
      const l = ln(r).querySelectorAll('.mui-fixed')
      ;[].forEach.call(l, (a) => {
        ;(n.push({
          value: a.style.paddingRight,
          property: 'padding-right',
          el: a,
        }),
          (a.style.paddingRight = `${em(a) + s}px`))
      })
    }
    let i
    if (r.parentNode instanceof DocumentFragment) i = ln(r).body
    else {
      const s = r.parentElement,
        l = jn(r)
      i =
        (s == null ? void 0 : s.nodeName) === 'HTML' &&
        l.getComputedStyle(s).overflowY === 'scroll'
          ? s
          : r
    }
    ;(n.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i },
    ),
      (i.style.overflow = 'hidden'))
  }
  return () => {
    n.forEach(({ value: i, el: s, property: l }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l)
    })
  }
}
function gk(e) {
  const t = []
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute('aria-hidden') === 'true' && t.push(n)
    }),
    t
  )
}
class yk {
  constructor() {
    ;((this.modals = []), (this.containers = []))
  }
  add(t, n) {
    let r = this.modals.indexOf(t)
    if (r !== -1) return r
    ;((r = this.modals.length),
      this.modals.push(t),
      t.modalRef && fi(t.modalRef, !1))
    const o = gk(n)
    tm(n, t.mount, t.modalRef, o, !0)
    const i = ru(this.containers, (s) => s.container === n)
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r)
  }
  mount(t, n) {
    const r = ru(this.containers, (i) => i.modals.includes(t)),
      o = this.containers[r]
    o.restore || (o.restore = hk(o, n))
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t)
    if (r === -1) return r
    const o = ru(this.containers, (s) => s.modals.includes(t)),
      i = this.containers[o]
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      (i.restore && i.restore(),
        t.modalRef && fi(t.modalRef, n),
        tm(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1))
    else {
      const s = i.modals[i.modals.length - 1]
      s.modalRef && fi(s.modalRef, !1)
    }
    return r
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
  }
}
const vk = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',')
function Sk(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10)
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' ||
        e.nodeName === 'VIDEO' ||
        e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t
}
function xk(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`)
  let n = t(`[name="${e.name}"]:checked`)
  return (n || (n = t(`[name="${e.name}"]`)), n !== e)
}
function Ck(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    xk(e)
  )
}
function wk(e) {
  const t = [],
    n = []
  return (
    Array.from(e.querySelectorAll(vk)).forEach((r, o) => {
      const i = Sk(r)
      i === -1 ||
        !Ck(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }))
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex,
      )
      .map((r) => r.node)
      .concat(t)
  )
}
function bk() {
  return !0
}
function kk(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = wk,
      isEnabled: s = bk,
      open: l,
    } = e,
    a = x.useRef(!1),
    u = x.useRef(null),
    d = x.useRef(null),
    f = x.useRef(null),
    p = x.useRef(null),
    y = x.useRef(!1),
    v = x.useRef(null),
    C = at(qi(t), v),
    k = x.useRef(null)
  ;(x.useEffect(() => {
    !l || !v.current || (y.current = !n)
  }, [n, l]),
    x.useEffect(() => {
      if (!l || !v.current) return
      const m = ln(v.current)
      return (
        v.current.contains(m.activeElement) ||
          (v.current.hasAttribute('tabIndex') ||
            v.current.setAttribute('tabIndex', '-1'),
          y.current && v.current.focus()),
        () => {
          o ||
            (f.current &&
              f.current.focus &&
              ((a.current = !0), f.current.focus()),
            (f.current = null))
        }
      )
    }, [l]),
    x.useEffect(() => {
      if (!l || !v.current) return
      const m = ln(v.current),
        S = (w) => {
          ;((k.current = w),
            !(r || !s() || w.key !== 'Tab') &&
              m.activeElement === v.current &&
              w.shiftKey &&
              ((a.current = !0), d.current && d.current.focus()))
        },
        P = () => {
          var T, c
          const w = v.current
          if (w === null) return
          if (!m.hasFocus() || !s() || a.current) {
            a.current = !1
            return
          }
          if (
            w.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== d.current)
          )
            return
          if (m.activeElement !== p.current) p.current = null
          else if (p.current !== null) return
          if (!y.current) return
          let E = []
          if (
            ((m.activeElement === u.current || m.activeElement === d.current) &&
              (E = i(v.current)),
            E.length > 0)
          ) {
            const R = !!(
                (T = k.current) != null &&
                T.shiftKey &&
                ((c = k.current) == null ? void 0 : c.key) === 'Tab'
              ),
              M = E[0],
              O = E[E.length - 1]
            typeof M != 'string' &&
              typeof O != 'string' &&
              (R ? O.focus() : M.focus())
          } else w.focus()
        }
      ;(m.addEventListener('focusin', P), m.addEventListener('keydown', S, !0))
      const $ = setInterval(() => {
        m.activeElement && m.activeElement.tagName === 'BODY' && P()
      }, 50)
      return () => {
        ;(clearInterval($),
          m.removeEventListener('focusin', P),
          m.removeEventListener('keydown', S, !0))
      }
    }, [n, r, o, s, l, i]))
  const h = (m) => {
      ;(f.current === null && (f.current = m.relatedTarget),
        (y.current = !0),
        (p.current = m.target))
      const S = t.props.onFocus
      S && S(m)
    },
    g = (m) => {
      ;(f.current === null && (f.current = m.relatedTarget), (y.current = !0))
    }
  return b.jsxs(x.Fragment, {
    children: [
      b.jsx('div', {
        tabIndex: l ? 0 : -1,
        onFocus: g,
        ref: u,
        'data-testid': 'sentinelStart',
      }),
      x.cloneElement(t, { ref: C, onFocus: h }),
      b.jsx('div', {
        tabIndex: l ? 0 : -1,
        onFocus: g,
        ref: d,
        'data-testid': 'sentinelEnd',
      }),
    ],
  })
}
function Ek(e) {
  return typeof e == 'function' ? e() : e
}
function Pk(e) {
  return e ? e.props.hasOwnProperty('in') : !1
}
const nm = () => {},
  ws = new yk()
function $k(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: l,
      onClose: a,
      open: u,
      rootRef: d,
    } = e,
    f = x.useRef({}),
    p = x.useRef(null),
    y = x.useRef(null),
    v = at(y, d),
    [C, k] = x.useState(!u),
    h = Pk(l)
  let g = !0
  ;(e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1)
  const m = () => ln(p.current),
    S = () => (
      (f.current.modalRef = y.current),
      (f.current.mount = p.current),
      f.current
    ),
    P = () => {
      ;(ws.mount(S(), { disableScrollLock: r }),
        y.current && (y.current.scrollTop = 0))
    },
    $ = Tr(() => {
      const L = Ek(t) || m().body
      ;(ws.add(S(), L), y.current && P())
    }),
    w = () => ws.isTopModal(S()),
    E = Tr((L) => {
      ;((p.current = L), L && (u && w() ? P() : y.current && fi(y.current, g)))
    }),
    T = x.useCallback(() => {
      ws.remove(S(), g)
    }, [g])
  ;(x.useEffect(
    () => () => {
      T()
    },
    [T],
  ),
    x.useEffect(() => {
      u ? $() : (!h || !o) && T()
    }, [u, T, h, o, $]))
  const c = (L) => (A) => {
      var W
      ;((W = L.onKeyDown) == null || W.call(L, A),
        !(A.key !== 'Escape' || A.which === 229 || !w()) &&
          (n || (A.stopPropagation(), a && a(A, 'escapeKeyDown'))))
    },
    R = (L) => (A) => {
      var W
      ;((W = L.onClick) == null || W.call(L, A),
        A.target === A.currentTarget && a && a(A, 'backdropClick'))
    }
  return {
    getRootProps: (L = {}) => {
      const A = by(e)
      ;(delete A.onTransitionEnter, delete A.onTransitionExited)
      const W = { ...A, ...L }
      return { role: 'presentation', ...W, onKeyDown: c(W), ref: v }
    },
    getBackdropProps: (L = {}) => {
      const A = L
      return { 'aria-hidden': !0, ...A, onClick: R(A), open: u }
    },
    getTransitionProps: () => {
      const L = () => {
          ;(k(!1), i && i())
        },
        A = () => {
          ;(k(!0), s && s(), o && T())
        }
      return {
        onEnter: kp(L, (l == null ? void 0 : l.props.onEnter) ?? nm),
        onExited: kp(A, (l == null ? void 0 : l.props.onExited) ?? nm),
      }
    },
    rootRef: v,
    portalRef: E,
    isTopModal: w,
    exited: C,
    hasTransition: h,
  }
}
function Rk(e) {
  return ee('MuiModal', e)
}
q('MuiModal', ['root', 'hidden', 'backdrop'])
const Tk = (e) => {
    const { open: t, exited: n, classes: r } = e
    return te(
      { root: ['root', !t && n && 'hidden'], backdrop: ['backdrop'] },
      Rk,
      r,
    )
  },
  Ik = B('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.open && n.exited && t.hidden]
    },
  })(
    ue(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: 'hidden' },
        },
      ],
    })),
  ),
  Mk = B(Vb, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  Nk = x.forwardRef(function (t, n) {
    const r = ne({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: o = Mk,
        BackdropProps: i,
        classes: s,
        className: l,
        closeAfterTransition: a = !1,
        children: u,
        container: d,
        component: f,
        components: p = {},
        componentsProps: y = {},
        disableAutoFocus: v = !1,
        disableEnforceFocus: C = !1,
        disableEscapeKeyDown: k = !1,
        disablePortal: h = !1,
        disableRestoreFocus: g = !1,
        disableScrollLock: m = !1,
        hideBackdrop: S = !1,
        keepMounted: P = !1,
        onBackdropClick: $,
        onClose: w,
        onTransitionEnter: E,
        onTransitionExited: T,
        open: c,
        slotProps: R = {},
        slots: M = {},
        theme: O,
        ...j
      } = r,
      L = {
        ...r,
        closeAfterTransition: a,
        disableAutoFocus: v,
        disableEnforceFocus: C,
        disableEscapeKeyDown: k,
        disablePortal: h,
        disableRestoreFocus: g,
        disableScrollLock: m,
        hideBackdrop: S,
        keepMounted: P,
      },
      {
        getRootProps: A,
        getBackdropProps: W,
        getTransitionProps: z,
        portalRef: I,
        isTopModal: D,
        exited: H,
        hasTransition: Y,
      } = $k({ ...L, rootRef: n }),
      ae = { ...L, exited: H },
      Z = Tk(ae),
      K = {}
    if ((u.props.tabIndex === void 0 && (K.tabIndex = '-1'), Y)) {
      const { onEnter: oe, onExited: re } = z()
      ;((K.onEnter = oe), (K.onExited = re))
    }
    const J = {
        slots: { root: p.Root, backdrop: p.Backdrop, ...M },
        slotProps: { ...y, ...R },
      },
      [ce, ut] = he('root', {
        ref: n,
        elementType: Ik,
        externalForwardedProps: { ...J, ...j, component: f },
        getSlotProps: A,
        ownerState: ae,
        className: V(
          l,
          Z == null ? void 0 : Z.root,
          !ae.open && ae.exited && (Z == null ? void 0 : Z.hidden),
        ),
      }),
      [Ee, X] = he('backdrop', {
        ref: i == null ? void 0 : i.ref,
        elementType: o,
        externalForwardedProps: J,
        shouldForwardComponentProp: !0,
        additionalProps: i,
        getSlotProps: (oe) =>
          W({
            ...oe,
            onClick: (re) => {
              ;($ && $(re), oe != null && oe.onClick && oe.onClick(re))
            },
          }),
        className: V(
          i == null ? void 0 : i.className,
          Z == null ? void 0 : Z.backdrop,
        ),
        ownerState: ae,
      })
    return !P && !c && (!Y || H)
      ? null
      : b.jsx(bb, {
          ref: I,
          container: d,
          disablePortal: h,
          children: b.jsxs(ce, {
            ...ut,
            children: [
              !S && o ? b.jsx(Ee, { ...X }) : null,
              b.jsx(kk, {
                disableEnforceFocus: C,
                disableAutoFocus: v,
                disableRestoreFocus: g,
                isEnabled: D,
                open: c,
                children: x.cloneElement(u, K),
              }),
            ],
          }),
        })
  }),
  rm = q('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  Ok = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: l,
      } = e,
      a = {
        root: [
          'root',
          !n && 'underline',
          r && 'adornedStart',
          o && 'adornedEnd',
          i === 'small' && `size${F(i)}`,
          s && 'hiddenLabel',
          l && 'multiline',
        ],
        input: ['input'],
      },
      u = te(a, Fb, t)
    return { ...t, ...u }
  },
  Lk = B(Ca, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [...Sa(e, t), !n.disableUnderline && t.underline]
    },
  })(
    ue(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        n = t ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        r = t ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        o = t ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        i = t ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          '@media (hover: none)': {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
          },
        },
        [`&.${mr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        },
        [`&.${mr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${mr.focused}:after`]: {
                transform: 'scaleX(1) translateX(0)',
              },
              [`&.${mr.error}`]: {
                '&::before, &::after': {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              '&::before': {
                borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${mr.disabled}, .${mr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${mr.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(e.palette)
            .filter(it())
            .map(([s]) => {
              var l
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`,
                  },
                },
              }
            }),
          {
            props: ({ ownerState: s }) => s.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: s }) => s.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: s }) => s.multiline,
            style: { padding: '25px 12px 8px' },
          },
          {
            props: ({ ownerState: s, size: l }) => s.multiline && l === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) =>
              s.multiline && s.hiddenLabel && s.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      }
    }),
  ),
  zk = B(wa, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: xa })(
    ue(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': {
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        {
          props: { size: 'small' },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    })),
  ),
  Vd = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiFilledInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: l = !1,
        hiddenLabel: a,
        inputComponent: u = 'input',
        multiline: d = !1,
        slotProps: f,
        slots: p = {},
        type: y = 'text',
        ...v
      } = r,
      C = {
        ...r,
        disableUnderline: o,
        fullWidth: l,
        inputComponent: u,
        multiline: d,
        type: y,
      },
      k = Ok(r),
      h = { root: { ownerState: C }, input: { ownerState: C } },
      g = (f ?? s) ? et(h, f ?? s) : h,
      m = p.root ?? i.Root ?? Lk,
      S = p.input ?? i.Input ?? zk
    return b.jsx(Hd, {
      slots: { root: m, input: S },
      slotProps: g,
      fullWidth: l,
      inputComponent: u,
      multiline: d,
      ref: n,
      type: y,
      ...v,
      classes: k,
    })
  })
Vd.muiName = 'Input'
function Ak(e) {
  return ee('MuiFormControl', e)
}
q('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
])
const jk = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ['root', n !== 'none' && `margin${F(n)}`, r && 'fullWidth'] }
    return te(o, Ak, t)
  },
  Fk = B('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[`margin${F(n.margin)}`], n.fullWidth && t.fullWidth]
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      {
        props: { margin: 'normal' },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  Hy = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiFormControl' }),
      {
        children: o,
        className: i,
        color: s = 'primary',
        component: l = 'div',
        disabled: a = !1,
        error: u = !1,
        focused: d,
        fullWidth: f = !1,
        hiddenLabel: p = !1,
        margin: y = 'none',
        required: v = !1,
        size: C = 'medium',
        variant: k = 'outlined',
        ...h
      } = r,
      g = {
        ...r,
        color: s,
        component: l,
        disabled: a,
        error: u,
        fullWidth: f,
        hiddenLabel: p,
        margin: y,
        required: v,
        size: C,
        variant: k,
      },
      m = jk(g),
      [S, P] = x.useState(() => {
        let L = !1
        return (
          o &&
            x.Children.forEach(o, (A) => {
              if (!Ds(A, ['Input', 'Select'])) return
              const W = Ds(A, ['Select']) ? A.props.input : A
              W && Ob(W.props) && (L = !0)
            }),
          L
        )
      }),
      [$, w] = x.useState(() => {
        let L = !1
        return (
          o &&
            x.Children.forEach(o, (A) => {
              Ds(A, ['Input', 'Select']) &&
                (xl(A.props, !0) || xl(A.props.inputProps, !0)) &&
                (L = !0)
            }),
          L
        )
      }),
      [E, T] = x.useState(!1)
    a && E && T(!1)
    const c = d !== void 0 && !a ? d : E
    let R
    x.useRef(!1)
    const M = x.useCallback(() => {
        w(!0)
      }, []),
      O = x.useCallback(() => {
        w(!1)
      }, []),
      j = x.useMemo(
        () => ({
          adornedStart: S,
          setAdornedStart: P,
          color: s,
          disabled: a,
          error: u,
          filled: $,
          focused: c,
          fullWidth: f,
          hiddenLabel: p,
          size: C,
          onBlur: () => {
            T(!1)
          },
          onFocus: () => {
            T(!0)
          },
          onEmpty: O,
          onFilled: M,
          registerEffect: R,
          required: v,
          variant: k,
        }),
        [S, s, a, u, $, c, f, p, R, O, M, v, C, k],
      )
    return b.jsx(Ud.Provider, {
      value: j,
      children: b.jsx(Fk, {
        as: l,
        ownerState: g,
        className: V(m.root, i),
        ref: n,
        ...h,
        children: o,
      }),
    })
  })
function _k(e) {
  return ee('MuiFormControlLabel', e)
}
const ti = q('MuiFormControlLabel', [
    'root',
    'labelPlacementStart',
    'labelPlacementTop',
    'labelPlacementBottom',
    'disabled',
    'label',
    'error',
    'required',
    'asterisk',
  ]),
  Bk = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          'root',
          n && 'disabled',
          `labelPlacement${F(r)}`,
          o && 'error',
          i && 'required',
        ],
        label: ['label', n && 'disabled'],
        asterisk: ['asterisk', o && 'error'],
      }
    return te(s, _k, t)
  },
  Dk = B('label', {
    name: 'MuiFormControlLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${ti.label}`]: t.label },
        t.root,
        t[`labelPlacement${F(n.labelPlacement)}`],
      ]
    },
  })(
    ue(({ theme: e }) => ({
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      [`&.${ti.disabled}`]: { cursor: 'default' },
      [`& .${ti.label}`]: {
        [`&.${ti.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      variants: [
        {
          props: { labelPlacement: 'start' },
          style: { flexDirection: 'row-reverse', marginRight: -11 },
        },
        {
          props: { labelPlacement: 'top' },
          style: { flexDirection: 'column-reverse' },
        },
        {
          props: { labelPlacement: 'bottom' },
          style: { flexDirection: 'column' },
        },
        {
          props: ({ labelPlacement: t }) =>
            t === 'start' || t === 'top' || t === 'bottom',
          style: { marginLeft: 16 },
        },
      ],
    })),
  ),
  Wk = B('span', {
    name: 'MuiFormControlLabel',
    slot: 'Asterisk',
    overridesResolver: (e, t) => t.asterisk,
  })(
    ue(({ theme: e }) => ({
      [`&.${ti.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Uk = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiFormControlLabel' }),
      {
        checked: o,
        className: i,
        componentsProps: s = {},
        control: l,
        disabled: a,
        disableTypography: u,
        inputRef: d,
        label: f,
        labelPlacement: p = 'end',
        name: y,
        onChange: v,
        required: C,
        slots: k = {},
        slotProps: h = {},
        value: g,
        ...m
      } = r,
      S = pr(),
      P = a ?? l.props.disabled ?? (S == null ? void 0 : S.disabled),
      $ = C ?? l.props.required,
      w = { disabled: P, required: $ }
    ;['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((L) => {
      typeof l.props[L] > 'u' && typeof r[L] < 'u' && (w[L] = r[L])
    })
    const E = Br({ props: r, muiFormControl: S, states: ['error'] }),
      T = { ...r, disabled: P, labelPlacement: p, required: $, error: E.error },
      c = Bk(T),
      R = { slots: k, slotProps: { ...s, ...h } },
      [M, O] = he('typography', {
        elementType: ht,
        externalForwardedProps: R,
        ownerState: T,
      })
    let j = f
    return (
      j != null &&
        j.type !== ht &&
        !u &&
        (j = b.jsx(M, {
          component: 'span',
          ...O,
          className: V(c.label, O == null ? void 0 : O.className),
          children: j,
        })),
      b.jsxs(Dk, {
        className: V(c.root, i),
        ownerState: T,
        ref: n,
        ...m,
        children: [
          x.cloneElement(l, w),
          $
            ? b.jsxs('div', {
                children: [
                  j,
                  b.jsxs(Wk, {
                    ownerState: T,
                    'aria-hidden': !0,
                    className: c.asterisk,
                    children: [' ', '*'],
                  }),
                ],
              })
            : j,
        ],
      })
    )
  })
function Hk(e) {
  return ee('MuiFormHelperText', e)
}
const om = q('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
])
var im
const Vk = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: l,
        required: a,
      } = e,
      u = {
        root: [
          'root',
          o && 'disabled',
          i && 'error',
          r && `size${F(r)}`,
          n && 'contained',
          l && 'focused',
          s && 'filled',
          a && 'required',
        ],
      }
    return te(u, Hk, t)
  },
  Kk = B('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.size && t[`size${F(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ]
    },
  })(
    ue(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${om.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${om.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  Gk = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiFormHelperText' }),
      {
        children: o,
        className: i,
        component: s = 'p',
        disabled: l,
        error: a,
        filled: u,
        focused: d,
        margin: f,
        required: p,
        variant: y,
        ...v
      } = r,
      C = pr(),
      k = Br({
        props: r,
        muiFormControl: C,
        states: [
          'variant',
          'size',
          'disabled',
          'error',
          'filled',
          'focused',
          'required',
        ],
      }),
      h = {
        ...r,
        component: s,
        contained: k.variant === 'filled' || k.variant === 'outlined',
        variant: k.variant,
        size: k.size,
        disabled: k.disabled,
        error: k.error,
        filled: k.filled,
        focused: k.focused,
        required: k.required,
      }
    delete h.ownerState
    const g = Vk(h)
    return b.jsx(Kk, {
      as: s,
      className: V(g.root, i),
      ref: n,
      ...v,
      ownerState: h,
      children:
        o === ' '
          ? im ||
            (im = b.jsx('span', {
              className: 'notranslate',
              'aria-hidden': !0,
              children: '​',
            }))
          : o,
    })
  })
function Qk(e) {
  return ee('MuiFormLabel', e)
}
const pi = q('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  Yk = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: l,
      } = e,
      a = {
        root: [
          'root',
          `color${F(n)}`,
          o && 'disabled',
          i && 'error',
          s && 'filled',
          r && 'focused',
          l && 'required',
        ],
        asterisk: ['asterisk', i && 'error'],
      }
    return te(a, Qk, t)
  },
  Xk = B('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.color === 'secondary' && t.colorSecondary,
        n.filled && t.filled,
      ]
    },
  })(
    ue(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(it())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${pi.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${pi.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${pi.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  qk = B('span', {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (e, t) => t.asterisk,
  })(
    ue(({ theme: e }) => ({
      [`&.${pi.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Zk = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiFormLabel' }),
      {
        children: o,
        className: i,
        color: s,
        component: l = 'label',
        disabled: a,
        error: u,
        filled: d,
        focused: f,
        required: p,
        ...y
      } = r,
      v = pr(),
      C = Br({
        props: r,
        muiFormControl: v,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      k = {
        ...r,
        color: C.color || 'primary',
        component: l,
        disabled: C.disabled,
        error: C.error,
        filled: C.filled,
        focused: C.focused,
        required: C.required,
      },
      h = Yk(k)
    return b.jsxs(Xk, {
      as: l,
      ownerState: k,
      className: V(h.root, i),
      ref: n,
      ...y,
      children: [
        o,
        C.required &&
          b.jsxs(qk, {
            ownerState: k,
            'aria-hidden': !0,
            className: h.asterisk,
            children: [' ', '*'],
          }),
      ],
    })
  }),
  sm = x.createContext()
function Jk(e) {
  return ee('MuiGrid', e)
}
const e2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  t2 = ['column-reverse', 'column', 'row-reverse', 'row'],
  n2 = ['nowrap', 'wrap-reverse', 'wrap'],
  Ho = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ji = q('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...e2.map((e) => `spacing-xs-${e}`),
    ...t2.map((e) => `direction-xs-${e}`),
    ...n2.map((e) => `wrap-xs-${e}`),
    ...Ho.map((e) => `grid-xs-${e}`),
    ...Ho.map((e) => `grid-sm-${e}`),
    ...Ho.map((e) => `grid-md-${e}`),
    ...Ho.map((e) => `grid-lg-${e}`),
    ...Ho.map((e) => `grid-xl-${e}`),
  ])
function r2({ theme: e, ownerState: t }) {
  let n
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {}
    if ((t[o] && (n = t[o]), !n)) return r
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' }
    else if (n === 'auto')
      i = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto',
      }
    else {
      const s = Rr({ values: t.columns, breakpoints: e.breakpoints.values }),
        l = typeof s == 'object' ? s[o] : s
      if (l == null) return r
      const a = `${Math.round((n / l) * 1e8) / 1e6}%`
      let u = {}
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing)
        if (d !== '0px') {
          const f = `calc(${a} + ${d})`
          u = { flexBasis: f, maxWidth: f }
        }
      }
      i = { flexBasis: a, flexGrow: 0, maxWidth: a, ...u }
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    )
  }, {})
}
function o2({ theme: e, ownerState: t }) {
  const n = Rr({ values: t.direction, breakpoints: e.breakpoints.values })
  return It({ theme: e }, n, (r) => {
    const o = { flexDirection: r }
    return (
      r.startsWith('column') && (o[`& > .${ji.item}`] = { maxWidth: 'none' }),
      o
    )
  })
}
function Vy({ breakpoints: e, values: t }) {
  let n = ''
  Object.keys(t).forEach((o) => {
    n === '' && t[o] !== 0 && (n = o)
  })
  const r = Object.keys(e).sort((o, i) => e[o] - e[i])
  return r.slice(0, r.indexOf(n))
}
function i2({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t
  let o = {}
  if (n && r !== 0) {
    const i = Rr({ values: r, breakpoints: e.breakpoints.values })
    let s
    ;(typeof i == 'object' &&
      (s = Vy({ breakpoints: e.breakpoints.values, values: i })),
      (o = It({ theme: e }, i, (l, a) => {
        const u = e.spacing(l)
        return u !== '0px'
          ? {
              marginTop: `calc(-1 * ${u})`,
              [`& > .${ji.item}`]: { paddingTop: u },
            }
          : s != null && s.includes(a)
            ? {}
            : { marginTop: 0, [`& > .${ji.item}`]: { paddingTop: 0 } }
      })))
  }
  return o
}
function s2({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t
  let o = {}
  if (n && r !== 0) {
    const i = Rr({ values: r, breakpoints: e.breakpoints.values })
    let s
    ;(typeof i == 'object' &&
      (s = Vy({ breakpoints: e.breakpoints.values, values: i })),
      (o = It({ theme: e }, i, (l, a) => {
        const u = e.spacing(l)
        if (u !== '0px') {
          const d = `calc(-1 * ${u})`
          return {
            width: `calc(100% + ${u})`,
            marginLeft: d,
            [`& > .${ji.item}`]: { paddingLeft: u },
          }
        }
        return s != null && s.includes(a)
          ? {}
          : {
              width: '100%',
              marginLeft: 0,
              [`& > .${ji.item}`]: { paddingLeft: 0 },
            }
      })))
  }
  return o
}
function l2(e, t, n = {}) {
  if (!e || e <= 0) return []
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [n[`spacing-xs-${String(e)}`]]
  const r = []
  return (
    t.forEach((o) => {
      const i = e[o]
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`])
    }),
    r
  )
}
const a2 = B('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: l,
        zeroMinWidth: a,
        breakpoints: u,
      } = n
    let d = []
    r && (d = l2(s, u, t))
    const f = []
    return (
      u.forEach((p) => {
        const y = n[p]
        y && f.push(t[`grid-${p}-${String(y)}`])
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        a && t.zeroMinWidth,
        ...d,
        o !== 'row' && t[`direction-xs-${String(o)}`],
        l !== 'wrap' && t[`wrap-xs-${String(l)}`],
        ...f,
      ]
    )
  },
})(
  ({ ownerState: e }) => ({
    boxSizing: 'border-box',
    ...(e.container && { display: 'flex', flexWrap: 'wrap', width: '100%' }),
    ...(e.item && { margin: 0 }),
    ...(e.zeroMinWidth && { minWidth: 0 }),
    ...(e.wrap !== 'wrap' && { flexWrap: e.wrap }),
  }),
  o2,
  i2,
  s2,
  r2,
)
function u2(e, t) {
  if (!e || e <= 0) return []
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [`spacing-xs-${String(e)}`]
  const n = []
  return (
    t.forEach((r) => {
      const o = e[r]
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`
        n.push(i)
      }
    }),
    n
  )
}
const c2 = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: l,
      breakpoints: a,
    } = e
    let u = []
    n && (u = u2(i, a))
    const d = []
    a.forEach((p) => {
      const y = e[p]
      y && d.push(`grid-${p}-${String(y)}`)
    })
    const f = {
      root: [
        'root',
        n && 'container',
        o && 'item',
        l && 'zeroMinWidth',
        ...u,
        r !== 'row' && `direction-xs-${String(r)}`,
        s !== 'wrap' && `wrap-xs-${String(s)}`,
        ...d,
      ],
    }
    return te(f, Jk, t)
  },
  dn = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiGrid' }),
      { breakpoints: o } = va(),
      i = ha(r),
      {
        className: s,
        columns: l,
        columnSpacing: a,
        component: u = 'div',
        container: d = !1,
        direction: f = 'row',
        item: p = !1,
        rowSpacing: y,
        spacing: v = 0,
        wrap: C = 'wrap',
        zeroMinWidth: k = !1,
        ...h
      } = i,
      g = y || v,
      m = a || v,
      S = x.useContext(sm),
      P = d ? l || 12 : S,
      $ = {},
      w = { ...h }
    o.keys.forEach((c) => {
      h[c] != null && (($[c] = h[c]), delete w[c])
    })
    const E = {
        ...i,
        columns: P,
        container: d,
        direction: f,
        item: p,
        rowSpacing: g,
        columnSpacing: m,
        wrap: C,
        zeroMinWidth: k,
        spacing: v,
        ...$,
        breakpoints: o.keys,
      },
      T = c2(E)
    return b.jsx(sm.Provider, {
      value: P,
      children: b.jsx(a2, {
        ownerState: E,
        className: V(T.root, s),
        as: u,
        ref: n,
        ...w,
      }),
    })
  })
function vc(e) {
  return `scale(${e}, ${e ** 2})`
}
const d2 = {
    entering: { opacity: 1, transform: vc(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  ou =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Sc = x.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: l,
        onEnter: a,
        onEntered: u,
        onEntering: d,
        onExit: f,
        onExited: p,
        onExiting: y,
        style: v,
        timeout: C = 'auto',
        TransitionComponent: k = bn,
        ...h
      } = t,
      g = xy(),
      m = x.useRef(),
      S = va(),
      P = x.useRef(null),
      $ = at(P, qi(i), n),
      w = (L) => (A) => {
        if (L) {
          const W = P.current
          A === void 0 ? L(W) : L(W, A)
        }
      },
      E = w(d),
      T = w((L, A) => {
        By(L)
        const {
          duration: W,
          delay: z,
          easing: I,
        } = vl({ style: v, timeout: C, easing: s }, { mode: 'enter' })
        let D
        ;(C === 'auto'
          ? ((D = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = D))
          : (D = W),
          (L.style.transition = [
            S.transitions.create('opacity', { duration: D, delay: z }),
            S.transitions.create('transform', {
              duration: ou ? D : D * 0.666,
              delay: z,
              easing: I,
            }),
          ].join(',')),
          a && a(L, A))
      }),
      c = w(u),
      R = w(y),
      M = w((L) => {
        const {
          duration: A,
          delay: W,
          easing: z,
        } = vl({ style: v, timeout: C, easing: s }, { mode: 'exit' })
        let I
        ;(C === 'auto'
          ? ((I = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = I))
          : (I = A),
          (L.style.transition = [
            S.transitions.create('opacity', { duration: I, delay: W }),
            S.transitions.create('transform', {
              duration: ou ? I : I * 0.666,
              delay: ou ? W : W || I * 0.333,
              easing: z,
            }),
          ].join(',')),
          (L.style.opacity = 0),
          (L.style.transform = vc(0.75)),
          f && f(L))
      }),
      O = w(p),
      j = (L) => {
        ;(C === 'auto' && g.start(m.current || 0, L), r && r(P.current, L))
      }
    return b.jsx(k, {
      appear: o,
      in: l,
      nodeRef: P,
      onEnter: T,
      onEntered: c,
      onEntering: E,
      onExit: M,
      onExited: O,
      onExiting: R,
      addEndListener: j,
      timeout: C === 'auto' ? null : C,
      ...h,
      children: (L, { ownerState: A, ...W }) =>
        x.cloneElement(i, {
          style: {
            opacity: 0,
            transform: vc(0.75),
            visibility: L === 'exited' && !l ? 'hidden' : void 0,
            ...d2[L],
            ...v,
            ...i.props.style,
          },
          ref: $,
          ...W,
        }),
    })
  })
Sc && (Sc.muiSupportAuto = !0)
const f2 = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = te({ root: ['root', !n && 'underline'], input: ['input'] }, Ab, t)
    return { ...t, ...o }
  },
  p2 = B(Ca, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [...Sa(e, t), !n.disableUnderline && t.underline]
    },
  })(
    ue(({ theme: e }) => {
      let n =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.42)'
          : 'rgba(255, 255, 255, 0.7)'
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: r }) => r.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Uo.focused}:after`]: {
                  transform: 'scaleX(1) translateX(0)',
                },
                [`&.${Uo.error}`]: {
                  '&::before, &::after': {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                '&::before': {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Uo.disabled}, .${Uo.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${n}` },
                },
                [`&.${Uo.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(e.palette)
              .filter(it())
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(e.vars || e).palette[r].main}`,
                  },
                },
              })),
          ],
        }
      )
    }),
  ),
  m2 = B(wa, { name: 'MuiInput', slot: 'Input', overridesResolver: xa })({}),
  Kd = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: l = !1,
        inputComponent: a = 'input',
        multiline: u = !1,
        slotProps: d,
        slots: f = {},
        type: p = 'text',
        ...y
      } = r,
      v = f2(r),
      k = { root: { ownerState: { disableUnderline: o } } },
      h = (d ?? s) ? et(d ?? s, k) : k,
      g = f.root ?? i.Root ?? p2,
      m = f.input ?? i.Input ?? m2
    return b.jsx(Hd, {
      slots: { root: g, input: m },
      slotProps: h,
      fullWidth: l,
      inputComponent: a,
      multiline: u,
      ref: n,
      type: p,
      ...y,
      classes: v,
    })
  })
Kd.muiName = 'Input'
function h2(e) {
  return ee('MuiInputLabel', e)
}
q('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
])
const g2 = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: l,
      } = e,
      a = {
        root: [
          'root',
          n && 'formControl',
          !i && 'animated',
          o && 'shrink',
          r && r !== 'normal' && `size${F(r)}`,
          s,
        ],
        asterisk: [l && 'asterisk'],
      },
      u = te(a, h2, t)
    return { ...t, ...u }
  },
  y2 = B(Zk, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${pi.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === 'small' && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ]
    },
  })(
    ue(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        {
          props: { size: 'small' },
          style: { transform: 'translate(0, 17px) scale(1)' },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ['color', 'transform', 'max-width'],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              },
            ),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: n }) => t === 'filled' && n.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) =>
            t === 'filled' && n.shrink && r === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: n }) =>
            t === 'outlined' && n.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    })),
  ),
  Ky = x.forwardRef(function (t, n) {
    const r = ne({ name: 'MuiInputLabel', props: t }),
      {
        disableAnimation: o = !1,
        margin: i,
        shrink: s,
        variant: l,
        className: a,
        ...u
      } = r,
      d = pr()
    let f = s
    typeof f > 'u' && d && (f = d.filled || d.focused || d.adornedStart)
    const p = Br({
        props: r,
        muiFormControl: d,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      y = {
        ...r,
        disableAnimation: o,
        formControl: d,
        shrink: f,
        size: p.size,
        variant: p.variant,
        required: p.required,
        focused: p.focused,
      },
      v = g2(y)
    return b.jsx(y2, {
      'data-shrink': f,
      ref: n,
      className: V(v.root, a),
      ...u,
      ownerState: y,
      classes: v,
    })
  }),
  ir = x.createContext({})
function v2(e) {
  return ee('MuiList', e)
}
q('MuiList', ['root', 'padding', 'dense', 'subheader'])
const S2 = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e
    return te(
      { root: ['root', !n && 'padding', r && 'dense', o && 'subheader'] },
      v2,
      t,
    )
  },
  x2 = B('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ]
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  xc = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: l = !1,
        disablePadding: a = !1,
        subheader: u,
        ...d
      } = r,
      f = x.useMemo(() => ({ dense: l }), [l]),
      p = { ...r, component: s, dense: l, disablePadding: a },
      y = S2(p)
    return b.jsx(ir.Provider, {
      value: f,
      children: b.jsxs(x2, {
        as: s,
        className: V(y.root, i),
        ref: n,
        ownerState: p,
        ...d,
        children: [u, o],
      }),
    })
  })
function C2(e) {
  return ee('MuiListItem', e)
}
q('MuiListItem', [
  'root',
  'container',
  'dense',
  'alignItemsFlexStart',
  'divider',
  'gutters',
  'padding',
  'secondaryAction',
])
const w2 = q('MuiListItemButton', [
  'root',
  'focusVisible',
  'dense',
  'alignItemsFlexStart',
  'disabled',
  'divider',
  'gutters',
  'selected',
])
function b2(e) {
  return ee('MuiListItemSecondaryAction', e)
}
q('MuiListItemSecondaryAction', ['root', 'disableGutters'])
const k2 = (e) => {
    const { disableGutters: t, classes: n } = e
    return te({ root: ['root', t && 'disableGutters'] }, b2, n)
  },
  E2 = B('div', {
    name: 'MuiListItemSecondaryAction',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.disableGutters && t.disableGutters]
    },
  })({
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)',
    variants: [
      { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
    ],
  }),
  Gy = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiListItemSecondaryAction' }),
      { className: o, ...i } = r,
      s = x.useContext(ir),
      l = { ...r, disableGutters: s.disableGutters },
      a = k2(l)
    return b.jsx(E2, { className: V(a.root, o), ownerState: l, ref: n, ...i })
  })
Gy.muiName = 'ListItemSecondaryAction'
const P2 = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === 'flex-start' && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.hasSecondaryAction && t.secondaryAction,
    ]
  },
  $2 = (e) => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disableGutters: o,
      disablePadding: i,
      divider: s,
      hasSecondaryAction: l,
    } = e
    return te(
      {
        root: [
          'root',
          r && 'dense',
          !o && 'gutters',
          !i && 'padding',
          s && 'divider',
          t === 'flex-start' && 'alignItemsFlexStart',
          l && 'secondaryAction',
        ],
        container: ['container'],
      },
      C2,
      n,
    )
  },
  R2 = B('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: P2 })(
    ue(({ theme: e }) => ({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      variants: [
        {
          props: ({ ownerState: t }) => !t.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) =>
            !t.disablePadding && !!t.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: t }) => !!t.secondaryAction,
          style: { [`& > .${w2.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: 'flex-start' },
          style: { alignItems: 'flex-start' },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: 'padding-box',
          },
        },
        {
          props: ({ ownerState: t }) => t.button,
          style: {
            transition: e.transitions.create('background-color', {
              duration: e.transitions.duration.shortest,
            }),
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: (e.vars || e).palette.action.hover,
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    })),
  ),
  T2 = B('li', {
    name: 'MuiListItem',
    slot: 'Container',
    overridesResolver: (e, t) => t.container,
  })({ position: 'relative' }),
  lm = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiListItem' }),
      {
        alignItems: o = 'center',
        children: i,
        className: s,
        component: l,
        components: a = {},
        componentsProps: u = {},
        ContainerComponent: d = 'li',
        ContainerProps: { className: f, ...p } = {},
        dense: y = !1,
        disableGutters: v = !1,
        disablePadding: C = !1,
        divider: k = !1,
        secondaryAction: h,
        slotProps: g = {},
        slots: m = {},
        ...S
      } = r,
      P = x.useContext(ir),
      $ = x.useMemo(
        () => ({ dense: y || P.dense || !1, alignItems: o, disableGutters: v }),
        [o, P.dense, y, v],
      ),
      w = x.useRef(null),
      E = x.Children.toArray(i),
      T = E.length && Ds(E[E.length - 1], ['ListItemSecondaryAction']),
      c = {
        ...r,
        alignItems: o,
        dense: $.dense,
        disableGutters: v,
        disablePadding: C,
        divider: k,
        hasSecondaryAction: T,
      },
      R = $2(c),
      M = at(w, n),
      O = m.root || a.Root || R2,
      j = g.root || u.root || {},
      L = { className: V(R.root, j.className, s), ...S }
    let A = l || 'li'
    return T
      ? ((A = !L.component && !l ? 'div' : A),
        d === 'li' &&
          (A === 'li'
            ? (A = 'div')
            : L.component === 'li' && (L.component = 'div')),
        b.jsx(ir.Provider, {
          value: $,
          children: b.jsxs(T2, {
            as: d,
            className: V(R.container, f),
            ref: M,
            ownerState: c,
            ...p,
            children: [
              b.jsx(O, {
                ...j,
                ...(!Ai(O) && { as: A, ownerState: { ...c, ...j.ownerState } }),
                ...L,
                children: E,
              }),
              E.pop(),
            ],
          }),
        }))
      : b.jsx(ir.Provider, {
          value: $,
          children: b.jsxs(O, {
            ...j,
            as: A,
            ref: M,
            ...(!Ai(O) && { ownerState: { ...c, ...j.ownerState } }),
            ...L,
            children: [E, h && b.jsx(Gy, { children: h })],
          }),
        })
  }),
  am = q('MuiListItemIcon', ['root', 'alignItemsFlexStart'])
function I2(e) {
  return ee('MuiListItemText', e)
}
const ao = q('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  M2 = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e
    return te(
      {
        root: ['root', n && 'inset', i && 'dense', r && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      I2,
      t,
    )
  },
  N2 = B('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${ao.primary}`]: t.primary },
        { [`& .${ao.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ]
    },
  })({
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${Kp.root}:where(& .${ao.primary})`]: { display: 'block' },
    [`.${Kp.root}:where(& .${ao.secondary})`]: { display: 'block' },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  um = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiListItemText' }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: l = !1,
        primary: a,
        primaryTypographyProps: u,
        secondary: d,
        secondaryTypographyProps: f,
        slots: p = {},
        slotProps: y = {},
        ...v
      } = r,
      { dense: C } = x.useContext(ir)
    let k = a ?? o,
      h = d
    const g = {
        ...r,
        disableTypography: s,
        inset: l,
        primary: !!k,
        secondary: !!h,
        dense: C,
      },
      m = M2(g),
      S = { slots: p, slotProps: { primary: u, secondary: f, ...y } },
      [P, $] = he('root', {
        className: V(m.root, i),
        elementType: N2,
        externalForwardedProps: { ...S, ...v },
        ownerState: g,
        ref: n,
      }),
      [w, E] = he('primary', {
        className: m.primary,
        elementType: ht,
        externalForwardedProps: S,
        ownerState: g,
      }),
      [T, c] = he('secondary', {
        className: m.secondary,
        elementType: ht,
        externalForwardedProps: S,
        ownerState: g,
      })
    return (
      k != null &&
        k.type !== ht &&
        !s &&
        (k = b.jsx(w, {
          variant: C ? 'body2' : 'body1',
          component: E != null && E.variant ? void 0 : 'span',
          ...E,
          children: k,
        })),
      h != null &&
        h.type !== ht &&
        !s &&
        (h = b.jsx(T, {
          variant: 'body2',
          color: 'textSecondary',
          ...c,
          children: h,
        })),
      b.jsxs(P, { ...$, children: [k, h] })
    )
  })
function iu(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
        ? null
        : e.firstChild
}
function cm(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild
}
function Qy(e, t) {
  if (t === void 0) return !0
  let n = e.innerText
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
        ? n[0] === t.keys[0]
        : n.startsWith(t.keys.join(''))
  )
}
function Vo(e, t, n, r, o, i) {
  let s = !1,
    l = o(e, t, t ? n : !1)
  for (; l;) {
    if (l === e.firstChild) {
      if (s) return !1
      s = !0
    }
    const a = r ? !1 : l.disabled || l.getAttribute('aria-disabled') === 'true'
    if (!l.hasAttribute('tabindex') || !Qy(l, i) || a) l = o(e, l, n)
    else return (l.focus(), !0)
  }
  return !1
}
const O2 = x.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: l,
      disabledItemsFocusable: a = !1,
      disableListWrap: u = !1,
      onKeyDown: d,
      variant: f = 'selectedMenu',
      ...p
    } = t,
    y = x.useRef(null),
    v = x.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    })
  ;(Cn(() => {
    o && y.current.focus()
  }, [o]),
    x.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (m, { direction: S }) => {
          const P = !y.current.style.width
          if (m.clientHeight < y.current.clientHeight && P) {
            const $ = `${Cy(jn(m))}px`
            ;((y.current.style[S === 'rtl' ? 'paddingLeft' : 'paddingRight'] =
              $),
              (y.current.style.width = `calc(100% + ${$})`))
          }
          return y.current
        },
      }),
      [],
    ))
  const C = (m) => {
      const S = y.current,
        P = m.key
      if (m.ctrlKey || m.metaKey || m.altKey) {
        d && d(m)
        return
      }
      const w = ln(S).activeElement
      if (P === 'ArrowDown') (m.preventDefault(), Vo(S, w, u, a, iu))
      else if (P === 'ArrowUp') (m.preventDefault(), Vo(S, w, u, a, cm))
      else if (P === 'Home') (m.preventDefault(), Vo(S, null, u, a, iu))
      else if (P === 'End') (m.preventDefault(), Vo(S, null, u, a, cm))
      else if (P.length === 1) {
        const E = v.current,
          T = P.toLowerCase(),
          c = performance.now()
        ;(E.keys.length > 0 &&
          (c - E.lastTime > 500
            ? ((E.keys = []), (E.repeating = !0), (E.previousKeyMatched = !0))
            : E.repeating && T !== E.keys[0] && (E.repeating = !1)),
          (E.lastTime = c),
          E.keys.push(T))
        const R = w && !E.repeating && Qy(w, E)
        E.previousKeyMatched && (R || Vo(S, w, !1, a, iu, E))
          ? m.preventDefault()
          : (E.previousKeyMatched = !1)
      }
      d && d(m)
    },
    k = at(y, n)
  let h = -1
  x.Children.forEach(s, (m, S) => {
    if (!x.isValidElement(m)) {
      h === S && ((h += 1), h >= s.length && (h = -1))
      return
    }
    ;(m.props.disabled ||
      (((f === 'selectedMenu' && m.props.selected) || h === -1) && (h = S)),
      h === S &&
        (m.props.disabled ||
          m.props.muiSkipListHighlight ||
          m.type.muiSkipListHighlight) &&
        ((h += 1), h >= s.length && (h = -1)))
  })
  const g = x.Children.map(s, (m, S) => {
    if (S === h) {
      const P = {}
      return (
        i && (P.autoFocus = !0),
        m.props.tabIndex === void 0 && f === 'selectedMenu' && (P.tabIndex = 0),
        x.cloneElement(m, P)
      )
    }
    return m
  })
  return b.jsx(xc, {
    role: 'menu',
    ref: k,
    className: l,
    onKeyDown: C,
    tabIndex: o ? 0 : -1,
    ...p,
    children: g,
  })
})
function L2(e) {
  return ee('MuiPopover', e)
}
q('MuiPopover', ['root', 'paper'])
function dm(e, t) {
  let n = 0
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
        ? (n = e.height / 2)
        : t === 'bottom' && (n = e.height),
    n
  )
}
function fm(e, t) {
  let n = 0
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
        ? (n = e.width / 2)
        : t === 'right' && (n = e.width),
    n
  )
}
function pm(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == 'number' ? `${t}px` : t))
    .join(' ')
}
function bs(e) {
  return typeof e == 'function' ? e() : e
}
const z2 = (e) => {
    const { classes: t } = e
    return te({ root: ['root'], paper: ['paper'] }, L2, t)
  },
  A2 = B(Nk, {
    name: 'MuiPopover',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  Yy = B(xr, {
    name: 'MuiPopover',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  j2 = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiPopover' }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: 'top', horizontal: 'left' },
        anchorPosition: l,
        anchorReference: a = 'anchorEl',
        children: u,
        className: d,
        container: f,
        elevation: p = 8,
        marginThreshold: y = 16,
        open: v,
        PaperProps: C = {},
        slots: k = {},
        slotProps: h = {},
        transformOrigin: g = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: m,
        transitionDuration: S = 'auto',
        TransitionProps: P = {},
        disableScrollLock: $ = !1,
        ...w
      } = r,
      E = x.useRef(),
      T = {
        ...r,
        anchorOrigin: s,
        anchorReference: a,
        elevation: p,
        marginThreshold: y,
        transformOrigin: g,
        TransitionComponent: m,
        transitionDuration: S,
        TransitionProps: P,
      },
      c = z2(T),
      R = x.useCallback(() => {
        if (a === 'anchorPosition') return l
        const X = bs(i),
          re = (
            X && X.nodeType === 1 ? X : ln(E.current).body
          ).getBoundingClientRect()
        return {
          top: re.top + dm(re, s.vertical),
          left: re.left + fm(re, s.horizontal),
        }
      }, [i, s.horizontal, s.vertical, l, a]),
      M = x.useCallback(
        (X) => ({
          vertical: dm(X, g.vertical),
          horizontal: fm(X, g.horizontal),
        }),
        [g.horizontal, g.vertical],
      ),
      O = x.useCallback(
        (X) => {
          const oe = { width: X.offsetWidth, height: X.offsetHeight },
            re = M(oe)
          if (a === 'none')
            return { top: null, left: null, transformOrigin: pm(re) }
          const Fe = R()
          let ie = Fe.top - re.vertical,
            be = Fe.left - re.horizontal
          const ct = ie + oe.height,
            Qe = be + oe.width,
            fe = jn(bs(i)),
            dt = fe.innerHeight - y,
            _e = fe.innerWidth - y
          if (y !== null && ie < y) {
            const Be = ie - y
            ;((ie -= Be), (re.vertical += Be))
          } else if (y !== null && ct > dt) {
            const Be = ct - dt
            ;((ie -= Be), (re.vertical += Be))
          }
          if (y !== null && be < y) {
            const Be = be - y
            ;((be -= Be), (re.horizontal += Be))
          } else if (Qe > _e) {
            const Be = Qe - _e
            ;((be -= Be), (re.horizontal += Be))
          }
          return {
            top: `${Math.round(ie)}px`,
            left: `${Math.round(be)}px`,
            transformOrigin: pm(re),
          }
        },
        [i, a, R, M, y],
      ),
      [j, L] = x.useState(v),
      A = x.useCallback(() => {
        const X = E.current
        if (!X) return
        const oe = O(X)
        ;(oe.top !== null && X.style.setProperty('top', oe.top),
          oe.left !== null && (X.style.left = oe.left),
          (X.style.transformOrigin = oe.transformOrigin),
          L(!0))
      }, [O])
    x.useEffect(
      () => (
        $ && window.addEventListener('scroll', A),
        () => window.removeEventListener('scroll', A)
      ),
      [i, $, A],
    )
    const W = () => {
        A()
      },
      z = () => {
        L(!1)
      }
    ;(x.useEffect(() => {
      v && A()
    }),
      x.useImperativeHandle(
        o,
        () =>
          v
            ? {
                updatePosition: () => {
                  A()
                },
              }
            : null,
        [v, A],
      ),
      x.useEffect(() => {
        if (!v) return
        const X = vy(() => {
            A()
          }),
          oe = jn(bs(i))
        return (
          oe.addEventListener('resize', X),
          () => {
            ;(X.clear(), oe.removeEventListener('resize', X))
          }
        )
      }, [i, v, A]))
    let I = S
    const D = {
        slots: { transition: m, ...k },
        slotProps: { transition: P, paper: C, ...h },
      },
      [H, Y] = he('transition', {
        elementType: Sc,
        externalForwardedProps: D,
        ownerState: T,
        getSlotProps: (X) => ({
          ...X,
          onEntering: (oe, re) => {
            var Fe
            ;((Fe = X.onEntering) == null || Fe.call(X, oe, re), W())
          },
          onExited: (oe) => {
            var re
            ;((re = X.onExited) == null || re.call(X, oe), z())
          },
        }),
        additionalProps: { appear: !0, in: v },
      })
    S === 'auto' && !H.muiSupportAuto && (I = void 0)
    const ae = f || (i ? ln(bs(i)).body : void 0),
      [Z, { slots: K, slotProps: J, ...ce }] = he('root', {
        ref: n,
        elementType: A2,
        externalForwardedProps: { ...D, ...w },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: k.backdrop },
          slotProps: {
            backdrop: Cw(
              typeof h.backdrop == 'function' ? h.backdrop(T) : h.backdrop,
              { invisible: !0 },
            ),
          },
          container: ae,
          open: v,
        },
        ownerState: T,
        className: V(c.root, d),
      }),
      [ut, Ee] = he('paper', {
        ref: E,
        className: c.paper,
        elementType: Yy,
        externalForwardedProps: D,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: p, style: j ? void 0 : { opacity: 0 } },
        ownerState: T,
      })
    return b.jsx(Z, {
      ...ce,
      ...(!Ai(Z) && { slots: K, slotProps: J, disableScrollLock: $ }),
      children: b.jsx(H, {
        ...Y,
        timeout: I,
        children: b.jsx(ut, { ...Ee, children: u }),
      }),
    })
  })
function F2(e) {
  return ee('MuiMenu', e)
}
q('MuiMenu', ['root', 'paper', 'list'])
const _2 = { vertical: 'top', horizontal: 'right' },
  B2 = { vertical: 'top', horizontal: 'left' },
  D2 = (e) => {
    const { classes: t } = e
    return te({ root: ['root'], paper: ['paper'], list: ['list'] }, F2, t)
  },
  W2 = B(j2, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  U2 = B(Yy, {
    name: 'MuiMenu',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: 'calc(100% - 96px)', WebkitOverflowScrolling: 'touch' }),
  H2 = B(O2, {
    name: 'MuiMenu',
    slot: 'List',
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  V2 = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiMenu' }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: l = !1,
        MenuListProps: a = {},
        onClose: u,
        open: d,
        PaperProps: f = {},
        PopoverClasses: p,
        transitionDuration: y = 'auto',
        TransitionProps: { onEntering: v, ...C } = {},
        variant: k = 'selectedMenu',
        slots: h = {},
        slotProps: g = {},
        ...m
      } = r,
      S = sC(),
      P = {
        ...r,
        autoFocus: o,
        disableAutoFocusItem: l,
        MenuListProps: a,
        onEntering: v,
        PaperProps: f,
        transitionDuration: y,
        TransitionProps: C,
        variant: k,
      },
      $ = D2(P),
      w = o && !l && d,
      E = x.useRef(null),
      T = (I, D) => {
        ;(E.current &&
          E.current.adjustStyleForScrollbar(I, {
            direction: S ? 'rtl' : 'ltr',
          }),
          v && v(I, D))
      },
      c = (I) => {
        I.key === 'Tab' && (I.preventDefault(), u && u(I, 'tabKeyDown'))
      }
    let R = -1
    x.Children.map(i, (I, D) => {
      x.isValidElement(I) &&
        (I.props.disabled ||
          (((k === 'selectedMenu' && I.props.selected) || R === -1) && (R = D)))
    })
    const M = {
        slots: h,
        slotProps: { list: a, transition: C, paper: f, ...g },
      },
      O = eC({
        elementType: h.root,
        externalSlotProps: g.root,
        ownerState: P,
        className: [$.root, s],
      }),
      [j, L] = he('paper', {
        className: $.paper,
        elementType: U2,
        externalForwardedProps: M,
        shouldForwardComponentProp: !0,
        ownerState: P,
      }),
      [A, W] = he('list', {
        className: V($.list, a.className),
        elementType: H2,
        shouldForwardComponentProp: !0,
        externalForwardedProps: M,
        getSlotProps: (I) => ({
          ...I,
          onKeyDown: (D) => {
            var H
            ;(c(D), (H = I.onKeyDown) == null || H.call(I, D))
          },
        }),
        ownerState: P,
      }),
      z =
        typeof M.slotProps.transition == 'function'
          ? M.slotProps.transition(P)
          : M.slotProps.transition
    return b.jsx(W2, {
      onClose: u,
      anchorOrigin: { vertical: 'bottom', horizontal: S ? 'right' : 'left' },
      transformOrigin: S ? _2 : B2,
      slots: {
        root: h.root,
        paper: j,
        backdrop: h.backdrop,
        ...(h.transition && { transition: h.transition }),
      },
      slotProps: {
        root: O,
        paper: L,
        backdrop: typeof g.backdrop == 'function' ? g.backdrop(P) : g.backdrop,
        transition: {
          ...z,
          onEntering: (...I) => {
            var D
            ;(T(...I),
              (D = z == null ? void 0 : z.onEntering) == null ||
                D.call(z, ...I))
          },
        },
      },
      open: d,
      ref: n,
      transitionDuration: y,
      ownerState: P,
      ...m,
      classes: p,
      children: b.jsx(A, {
        actions: E,
        autoFocus: o && (R === -1 || l),
        autoFocusItem: w,
        variant: k,
        ...W,
        children: i,
      }),
    })
  })
function K2(e) {
  return ee('MuiMenuItem', e)
}
const Ko = q('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  G2 = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ]
  },
  Q2 = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      a = te(
        {
          root: [
            'root',
            n && 'dense',
            t && 'disabled',
            !o && 'gutters',
            r && 'divider',
            i && 'selected',
          ],
        },
        K2,
        s,
      )
    return { ...s, ...a }
  },
  Y2 = B(Po, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: G2,
  })(
    ue(({ theme: e }) => ({
      ...e.typography.body1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      [`&.${Ko.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : ye(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${Ko.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : ye(
                e.palette.primary.main,
                e.palette.action.selectedOpacity +
                  e.palette.action.focusOpacity,
              ),
        },
      },
      [`&.${Ko.selected}:hover`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : ye(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity,
            ),
        '@media (hover: none)': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ye(e.palette.primary.main, e.palette.action.selectedOpacity),
        },
      },
      [`&.${Ko.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Ko.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      [`& + .${rm.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${rm.inset}`]: { marginLeft: 52 },
      [`& .${ao.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${ao.inset}`]: { paddingLeft: 36 },
      [`& .${am.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: 'padding-box',
          },
        },
        {
          props: ({ ownerState: t }) => !t.dense,
          style: { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${am.root} svg`]: { fontSize: '1.25rem' },
          },
        },
      ],
    })),
  ),
  X2 = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiMenuItem' }),
      {
        autoFocus: o = !1,
        component: i = 'li',
        dense: s = !1,
        divider: l = !1,
        disableGutters: a = !1,
        focusVisibleClassName: u,
        role: d = 'menuitem',
        tabIndex: f,
        className: p,
        ...y
      } = r,
      v = x.useContext(ir),
      C = x.useMemo(
        () => ({ dense: s || v.dense || !1, disableGutters: a }),
        [v.dense, s, a],
      ),
      k = x.useRef(null)
    Cn(() => {
      o && k.current && k.current.focus()
    }, [o])
    const h = { ...r, dense: C.dense, divider: l, disableGutters: a },
      g = Q2(r),
      m = at(k, n)
    let S
    return (
      r.disabled || (S = f !== void 0 ? f : -1),
      b.jsx(ir.Provider, {
        value: C,
        children: b.jsx(Y2, {
          ref: m,
          role: d,
          tabIndex: S,
          component: i,
          focusVisibleClassName: V(g.focusVisible, u),
          className: V(g.root, p),
          ...y,
          ownerState: h,
          classes: g,
        }),
      })
    )
  })
function q2(e) {
  return ee('MuiNativeSelect', e)
}
const Gd = q('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  Z2 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      l = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${F(n)}`, i && 'iconOpen', r && 'disabled'],
      }
    return te(l, q2, t)
  },
  Xy = B('select', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${Gd.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== 'filled' && t.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  J2 = B(Xy, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: Bt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Gd.multiple}`]: t.multiple },
      ]
    },
  })({}),
  qy = B('svg', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${Gd.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: 'rotate(180deg)' },
      },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  eE = B(qy, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.icon,
        n.variant && t[`icon${F(n.variant)}`],
        n.open && t.iconOpen,
      ]
    },
  })({}),
  tE = x.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: l,
        variant: a = 'standard',
        ...u
      } = t,
      d = { ...t, disabled: o, variant: a, error: i },
      f = Z2(d)
    return b.jsxs(x.Fragment, {
      children: [
        b.jsx(J2, {
          ownerState: d,
          className: V(f.select, r),
          disabled: o,
          ref: l || n,
          ...u,
        }),
        t.multiple
          ? null
          : b.jsx(eE, { as: s, ownerState: d, className: f.icon }),
      ],
    })
  })
var mm
const nE = B('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: Bt })(
    {
      textAlign: 'left',
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden',
      minWidth: '0%',
    },
  ),
  rE = B('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: Bt })(
    ue(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  )
function oE(e) {
  const {
      children: t,
      classes: n,
      className: r,
      label: o,
      notched: i,
      ...s
    } = e,
    l = o != null && o !== '',
    a = { ...e, notched: i, withLabel: l }
  return b.jsx(nE, {
    'aria-hidden': !0,
    className: r,
    ownerState: a,
    ...s,
    children: b.jsx(rE, {
      ownerState: a,
      children: l
        ? b.jsx('span', { children: o })
        : mm ||
          (mm = b.jsx('span', {
            className: 'notranslate',
            'aria-hidden': !0,
            children: '​',
          })),
    }),
  })
}
const iE = (e) => {
    const { classes: t } = e,
      r = te(
        {
          root: ['root'],
          notchedOutline: ['notchedOutline'],
          input: ['input'],
        },
        jb,
        t,
      )
    return { ...t, ...r }
  },
  sE = B(Ca, {
    shouldForwardProp: (e) => Bt(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: Sa,
  })(
    ue(({ theme: e }) => {
      const t =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.23)'
          : 'rgba(255, 255, 255, 0.23)'
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${cn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        '@media (hover: none)': {
          [`&:hover .${cn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : t,
          },
        },
        [`&.${cn.focused} .${cn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(it())
            .map(([n]) => ({
              props: { color: n },
              style: {
                [`&.${cn.focused} .${cn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[n].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${cn.error} .${cn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${cn.disabled} .${cn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: n }) => n.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: n }) => n.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: n }) => n.multiline,
            style: { padding: '16.5px 14px' },
          },
          {
            props: ({ ownerState: n, size: r }) => n.multiline && r === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      }
    }),
  ),
  lE = B(oE, {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: (e, t) => t.notchedOutline,
  })(
    ue(({ theme: e }) => {
      const t =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.23)'
          : 'rgba(255, 255, 255, 0.23)'
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      }
    }),
  ),
  aE = B(wa, {
    name: 'MuiOutlinedInput',
    slot: 'Input',
    overridesResolver: xa,
  })(
    ue(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    })),
  ),
  Qd = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiOutlinedInput' }),
      {
        components: o = {},
        fullWidth: i = !1,
        inputComponent: s = 'input',
        label: l,
        multiline: a = !1,
        notched: u,
        slots: d = {},
        slotProps: f = {},
        type: p = 'text',
        ...y
      } = r,
      v = iE(r),
      C = pr(),
      k = Br({
        props: r,
        muiFormControl: C,
        states: [
          'color',
          'disabled',
          'error',
          'focused',
          'hiddenLabel',
          'size',
          'required',
        ],
      }),
      h = {
        ...r,
        color: k.color || 'primary',
        disabled: k.disabled,
        error: k.error,
        focused: k.focused,
        formControl: C,
        fullWidth: i,
        hiddenLabel: k.hiddenLabel,
        multiline: a,
        size: k.size,
        type: p,
      },
      g = d.root ?? o.Root ?? sE,
      m = d.input ?? o.Input ?? aE,
      [S, P] = he('notchedOutline', {
        elementType: lE,
        className: v.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: h,
        externalForwardedProps: { slots: d, slotProps: f },
        additionalProps: {
          label:
            l != null && l !== '' && k.required
              ? b.jsxs(x.Fragment, { children: [l, ' ', '*'] })
              : l,
        },
      })
    return b.jsx(Hd, {
      slots: { root: g, input: m },
      slotProps: f,
      renderSuffix: ($) =>
        b.jsx(S, {
          ...P,
          notched:
            typeof u < 'u' ? u : !!($.startAdornment || $.filled || $.focused),
        }),
      fullWidth: i,
      inputComponent: s,
      multiline: a,
      ref: n,
      type: p,
      ...y,
      classes: { ...v, notchedOutline: null },
    })
  })
Qd.muiName = 'Input'
function Zy(e) {
  return ee('MuiSelect', e)
}
const Go = q('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
])
var hm
const uE = B(Xy, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`&.${Go.select}`]: t.select },
        { [`&.${Go.select}`]: t[n.variant] },
        { [`&.${Go.error}`]: t.error },
        { [`&.${Go.multiple}`]: t.multiple },
      ]
    },
  })({
    [`&.${Go.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  cE = B(qy, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.icon,
        n.variant && t[`icon${F(n.variant)}`],
        n.open && t.iconOpen,
      ]
    },
  })({}),
  dE = B('input', {
    shouldForwardProp: (e) => jy(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  })
function gm(e, t) {
  return typeof t == 'object' && t !== null ? e === t : String(e) === String(t)
}
function fE(e) {
  return e == null || (typeof e == 'string' && !e.trim())
}
const pE = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      l = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${F(n)}`, i && 'iconOpen', r && 'disabled'],
        nativeInput: ['nativeInput'],
      }
    return te(l, Zy, t)
  },
  mE = x.forwardRef(function (t, n) {
    var qd
    const {
        'aria-describedby': r,
        'aria-label': o,
        autoFocus: i,
        autoWidth: s,
        children: l,
        className: a,
        defaultOpen: u,
        defaultValue: d,
        disabled: f,
        displayEmpty: p,
        error: y = !1,
        IconComponent: v,
        inputRef: C,
        labelId: k,
        MenuProps: h = {},
        multiple: g,
        name: m,
        onBlur: S,
        onChange: P,
        onClose: $,
        onFocus: w,
        onOpen: E,
        open: T,
        readOnly: c,
        renderValue: R,
        required: M,
        SelectDisplayProps: O = {},
        tabIndex: j,
        type: L,
        value: A,
        variant: W = 'standard',
        ...z
      } = t,
      [I, D] = ac({ controlled: A, default: d, name: 'Select' }),
      [H, Y] = ac({ controlled: T, default: u, name: 'Select' }),
      ae = x.useRef(null),
      Z = x.useRef(null),
      [K, J] = x.useState(null),
      { current: ce } = x.useRef(T != null),
      [ut, Ee] = x.useState(),
      X = at(n, C),
      oe = x.useCallback((Q) => {
        ;((Z.current = Q), Q && J(Q))
      }, []),
      re = K == null ? void 0 : K.parentNode
    ;(x.useImperativeHandle(
      X,
      () => ({
        focus: () => {
          Z.current.focus()
        },
        node: ae.current,
        value: I,
      }),
      [I],
    ),
      x.useEffect(() => {
        u && H && K && !ce && (Ee(s ? null : re.clientWidth), Z.current.focus())
      }, [K, s]),
      x.useEffect(() => {
        i && Z.current.focus()
      }, [i]),
      x.useEffect(() => {
        if (!k) return
        const Q = ln(Z.current).getElementById(k)
        if (Q) {
          const Pe = () => {
            getSelection().isCollapsed && Z.current.focus()
          }
          return (
            Q.addEventListener('click', Pe),
            () => {
              Q.removeEventListener('click', Pe)
            }
          )
        }
      }, [k]))
    const Fe = (Q, Pe) => {
        ;(Q ? E && E(Pe) : $ && $(Pe),
          ce || (Ee(s ? null : re.clientWidth), Y(Q)))
      },
      ie = (Q) => {
        Q.button === 0 && (Q.preventDefault(), Z.current.focus(), Fe(!0, Q))
      },
      be = (Q) => {
        Fe(!1, Q)
      },
      ct = x.Children.toArray(l),
      Qe = (Q) => {
        const Pe = ct.find((nt) => nt.props.value === Q.target.value)
        Pe !== void 0 && (D(Pe.props.value), P && P(Q, Pe))
      },
      fe = (Q) => (Pe) => {
        let nt
        if (Pe.currentTarget.hasAttribute('tabindex')) {
          if (g) {
            nt = Array.isArray(I) ? I.slice() : []
            const Dr = I.indexOf(Q.props.value)
            Dr === -1 ? nt.push(Q.props.value) : nt.splice(Dr, 1)
          } else nt = Q.props.value
          if (
            (Q.props.onClick && Q.props.onClick(Pe), I !== nt && (D(nt), P))
          ) {
            const Dr = Pe.nativeEvent || Pe,
              Zd = new Dr.constructor(Dr.type, Dr)
            ;(Object.defineProperty(Zd, 'target', {
              writable: !0,
              value: { value: nt, name: m },
            }),
              P(Zd, Q))
          }
          g || Fe(!1, Pe)
        }
      },
      dt = (Q) => {
        c ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(Q.key) &&
            (Q.preventDefault(), Fe(!0, Q)))
      },
      _e = K !== null && H,
      Be = (Q) => {
        !_e &&
          S &&
          (Object.defineProperty(Q, 'target', {
            writable: !0,
            value: { value: I, name: m },
          }),
          S(Q))
      }
    delete z['aria-invalid']
    let G, qt
    const Ve = []
    let kn = !1
    ;(xl({ value: I }) || p) && (R ? (G = R(I)) : (kn = !0))
    const _n = ct.map((Q) => {
      if (!x.isValidElement(Q)) return null
      let Pe
      if (g) {
        if (!Array.isArray(I)) throw new Error(An(2))
        ;((Pe = I.some((nt) => gm(nt, Q.props.value))),
          Pe && kn && Ve.push(Q.props.children))
      } else ((Pe = gm(I, Q.props.value)), Pe && kn && (qt = Q.props.children))
      return x.cloneElement(Q, {
        'aria-selected': Pe ? 'true' : 'false',
        onClick: fe(Q),
        onKeyUp: (nt) => {
          ;(nt.key === ' ' && nt.preventDefault(),
            Q.props.onKeyUp && Q.props.onKeyUp(nt))
        },
        role: 'option',
        selected: Pe,
        value: void 0,
        'data-value': Q.props.value,
      })
    })
    kn &&
      (g
        ? Ve.length === 0
          ? (G = null)
          : (G = Ve.reduce(
              (Q, Pe, nt) => (
                Q.push(Pe),
                nt < Ve.length - 1 && Q.push(', '),
                Q
              ),
              [],
            ))
        : (G = qt))
    let Bn = ut
    !s && ce && K && (Bn = re.clientWidth)
    let Le
    typeof j < 'u' ? (Le = j) : (Le = f ? null : 0)
    const De = O.id || (m ? `mui-component-select-${m}` : void 0),
      We = { ...t, variant: W, value: I, open: _e, error: y },
      ge = pE(We),
      qe = {
        ...h.PaperProps,
        ...((qd = h.slotProps) == null ? void 0 : qd.paper),
      },
      vt = Xi()
    return b.jsxs(x.Fragment, {
      children: [
        b.jsx(uE, {
          as: 'div',
          ref: oe,
          tabIndex: Le,
          role: 'combobox',
          'aria-controls': _e ? vt : void 0,
          'aria-disabled': f ? 'true' : void 0,
          'aria-expanded': _e ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': o,
          'aria-labelledby': [k, De].filter(Boolean).join(' ') || void 0,
          'aria-describedby': r,
          'aria-required': M ? 'true' : void 0,
          'aria-invalid': y ? 'true' : void 0,
          onKeyDown: dt,
          onMouseDown: f || c ? null : ie,
          onBlur: Be,
          onFocus: w,
          ...O,
          ownerState: We,
          className: V(O.className, ge.select, a),
          id: De,
          children: fE(G)
            ? hm ||
              (hm = b.jsx('span', {
                className: 'notranslate',
                'aria-hidden': !0,
                children: '​',
              }))
            : G,
        }),
        b.jsx(dE, {
          'aria-invalid': y,
          value: Array.isArray(I) ? I.join(',') : I,
          name: m,
          ref: ae,
          'aria-hidden': !0,
          onChange: Qe,
          tabIndex: -1,
          disabled: f,
          className: ge.nativeInput,
          autoFocus: i,
          required: M,
          ...z,
          ownerState: We,
        }),
        b.jsx(cE, { as: v, className: ge.icon, ownerState: We }),
        b.jsx(V2, {
          id: `menu-${m || ''}`,
          anchorEl: re,
          open: _e,
          onClose: be,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...h,
          slotProps: {
            ...h.slotProps,
            list: {
              'aria-labelledby': k,
              role: 'listbox',
              'aria-multiselectable': g ? 'true' : void 0,
              disableListWrap: !0,
              id: vt,
              ...h.MenuListProps,
            },
            paper: {
              ...qe,
              style: { minWidth: Bn, ...(qe != null ? qe.style : null) },
            },
          },
          children: _n,
        }),
      ],
    })
  }),
  hE = (e) => {
    const { classes: t } = e,
      r = te({ root: ['root'] }, Zy, t)
    return { ...t, ...r }
  },
  Yd = {
    name: 'MuiSelect',
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Bt(e) && e !== 'variant',
    slot: 'Root',
  },
  gE = B(Kd, Yd)(''),
  yE = B(Qd, Yd)(''),
  vE = B(Vd, Yd)(''),
  Xd = x.forwardRef(function (t, n) {
    const r = ne({ name: 'MuiSelect', props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: l,
        defaultOpen: a = !1,
        displayEmpty: u = !1,
        IconComponent: d = _b,
        id: f,
        input: p,
        inputProps: y,
        label: v,
        labelId: C,
        MenuProps: k,
        multiple: h = !1,
        native: g = !1,
        onClose: m,
        onOpen: S,
        open: P,
        renderValue: $,
        SelectDisplayProps: w,
        variant: E = 'outlined',
        ...T
      } = r,
      c = g ? tE : mE,
      R = pr(),
      M = Br({ props: r, muiFormControl: R, states: ['variant', 'error'] }),
      O = M.variant || E,
      j = { ...r, variant: O, classes: s },
      L = hE(j),
      { root: A, ...W } = L,
      z =
        p ||
        {
          standard: b.jsx(gE, { ownerState: j }),
          outlined: b.jsx(yE, { label: v, ownerState: j }),
          filled: b.jsx(vE, { ownerState: j }),
        }[O],
      I = at(n, qi(z))
    return b.jsx(x.Fragment, {
      children: x.cloneElement(z, {
        inputComponent: c,
        inputProps: {
          children: i,
          error: M.error,
          IconComponent: d,
          variant: O,
          type: void 0,
          multiple: h,
          ...(g
            ? { id: f }
            : {
                autoWidth: o,
                defaultOpen: a,
                displayEmpty: u,
                labelId: C,
                MenuProps: k,
                onClose: m,
                onOpen: S,
                open: P,
                renderValue: $,
                SelectDisplayProps: { id: f, ...w },
              }),
          ...y,
          classes: y ? et(W, y.classes) : W,
          ...(p ? p.props.inputProps : {}),
        },
        ...(((h && g) || u) && O === 'outlined' ? { notched: !0 } : {}),
        ref: I,
        className: V(z.props.className, l, L.root),
        ...(!p && { variant: O }),
        ...T,
      }),
    })
  })
Xd.muiName = 'Select'
const ks = AC({
  createStyledComponent: B('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  }),
  useThemeProps: (e) => ne({ props: e, name: 'MuiStack' }),
})
function SE(e) {
  return ee('MuiSwitch', e)
}
const St = q('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track',
  ]),
  xE = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: s,
      } = e,
      l = {
        root: ['root', n && `edge${F(n)}`, `size${F(r)}`],
        switchBase: [
          'switchBase',
          `color${F(o)}`,
          i && 'checked',
          s && 'disabled',
        ],
        thumb: ['thumb'],
        track: ['track'],
        input: ['input'],
      },
      a = te(l, SE, t)
    return { ...t, ...a }
  },
  CE = B('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.edge && t[`edge${F(n.edge)}`], t[`size${F(n.size)}`]]
    },
  })({
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: 'middle',
    '@media print': { colorAdjust: 'exact' },
    variants: [
      { props: { edge: 'start' }, style: { marginLeft: -8 } },
      { props: { edge: 'end' }, style: { marginRight: -8 } },
      {
        props: { size: 'small' },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${St.thumb}`]: { width: 16, height: 16 },
          [`& .${St.switchBase}`]: {
            padding: 4,
            [`&.${St.checked}`]: { transform: 'translateX(16px)' },
          },
        },
      },
    ],
  }),
  wE = B(sk, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.switchBase,
        { [`& .${St.input}`]: t.input },
        n.color !== 'default' && t[`color${F(n.color)}`],
      ]
    },
  })(
    ue(({ theme: e }) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${e.palette.mode === 'light' ? e.palette.common.white : e.palette.grey[300]}`,
      transition: e.transitions.create(['left', 'transform'], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${St.checked}`]: { transform: 'translateX(20px)' },
      [`&.${St.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${e.palette.mode === 'light' ? e.palette.grey[100] : e.palette.grey[600]}`,
      },
      [`&.${St.checked} + .${St.track}`]: { opacity: 0.5 },
      [`&.${St.disabled} + .${St.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === 'light' ? 0.12 : 0.2}`,
      },
      [`& .${St.input}`]: { left: '-100%', width: '300%' },
    })),
    ue(({ theme: e }) => ({
      '&:hover': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
          : ye(e.palette.action.active, e.palette.action.hoverOpacity),
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      variants: [
        ...Object.entries(e.palette)
          .filter(it(['light']))
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${St.checked}`]: {
                color: (e.vars || e).palette[t].main,
                '&:hover': {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ye(e.palette[t].main, e.palette.action.hoverOpacity),
                  '@media (hover: none)': { backgroundColor: 'transparent' },
                },
                [`&.${St.disabled}`]: {
                  color: e.vars
                    ? e.vars.palette.Switch[`${t}DisabledColor`]
                    : `${e.palette.mode === 'light' ? jr(e.palette[t].main, 0.62) : Ar(e.palette[t].main, 0.55)}`,
                },
              },
              [`&.${St.checked} + .${St.track}`]: {
                backgroundColor: (e.vars || e).palette[t].main,
              },
            },
          })),
      ],
    })),
  ),
  bE = B('span', {
    name: 'MuiSwitch',
    slot: 'Track',
    overridesResolver: (e, t) => t.track,
  })(
    ue(({ theme: e }) => ({
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: e.transitions.create(['opacity', 'background-color'], {
        duration: e.transitions.duration.shortest,
      }),
      backgroundColor: e.vars
        ? e.vars.palette.common.onBackground
        : `${e.palette.mode === 'light' ? e.palette.common.black : e.palette.common.white}`,
      opacity: e.vars
        ? e.vars.opacity.switchTrack
        : `${e.palette.mode === 'light' ? 0.38 : 0.3}`,
    })),
  ),
  kE = B('span', {
    name: 'MuiSwitch',
    slot: 'Thumb',
    overridesResolver: (e, t) => t.thumb,
  })(
    ue(({ theme: e }) => ({
      boxShadow: (e.vars || e).shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%',
    })),
  ),
  EE = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiSwitch' }),
      {
        className: o,
        color: i = 'primary',
        edge: s = !1,
        size: l = 'medium',
        sx: a,
        slots: u = {},
        slotProps: d = {},
        ...f
      } = r,
      p = { ...r, color: i, edge: s, size: l },
      y = xE(p),
      v = { slots: u, slotProps: d },
      [C, k] = he('root', {
        className: V(y.root, o),
        elementType: CE,
        externalForwardedProps: v,
        ownerState: p,
        additionalProps: { sx: a },
      }),
      [h, g] = he('thumb', {
        className: y.thumb,
        elementType: kE,
        externalForwardedProps: v,
        ownerState: p,
      }),
      m = b.jsx(h, { ...g }),
      [S, P] = he('track', {
        className: y.track,
        elementType: bE,
        externalForwardedProps: v,
        ownerState: p,
      })
    return b.jsxs(C, {
      ...k,
      children: [
        b.jsx(wE, {
          type: 'checkbox',
          icon: m,
          checkedIcon: m,
          ref: n,
          ownerState: p,
          ...f,
          classes: { ...y, root: y.switchBase },
          slots: {
            ...(u.switchBase && { root: u.switchBase }),
            ...(u.input && { input: u.input }),
          },
          slotProps: {
            ...(d.switchBase && {
              root:
                typeof d.switchBase == 'function'
                  ? d.switchBase(p)
                  : d.switchBase,
            }),
            ...(d.input && {
              input: typeof d.input == 'function' ? d.input(p) : d.input,
            }),
          },
        }),
        b.jsx(S, { ...P }),
      ],
    })
  }),
  Jy = x.createContext()
function PE(e) {
  return ee('MuiTable', e)
}
q('MuiTable', ['root', 'stickyHeader'])
const $E = (e) => {
    const { classes: t, stickyHeader: n } = e
    return te({ root: ['root', n && 'stickyHeader'] }, PE, t)
  },
  RE = B('table', {
    name: 'MuiTable',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.stickyHeader && t.stickyHeader]
    },
  })(
    ue(({ theme: e }) => ({
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      '& caption': {
        ...e.typography.body2,
        padding: e.spacing(2),
        color: (e.vars || e).palette.text.secondary,
        textAlign: 'left',
        captionSide: 'bottom',
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: { borderCollapse: 'separate' },
        },
      ],
    })),
  ),
  ym = 'table',
  TE = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTable' }),
      {
        className: o,
        component: i = ym,
        padding: s = 'normal',
        size: l = 'medium',
        stickyHeader: a = !1,
        ...u
      } = r,
      d = { ...r, component: i, padding: s, size: l, stickyHeader: a },
      f = $E(d),
      p = x.useMemo(() => ({ padding: s, size: l, stickyHeader: a }), [s, l, a])
    return b.jsx(Jy.Provider, {
      value: p,
      children: b.jsx(RE, {
        as: i,
        role: i === ym ? null : 'table',
        ref: n,
        className: V(f.root, o),
        ownerState: d,
        ...u,
      }),
    })
  }),
  ba = x.createContext()
function IE(e) {
  return ee('MuiTableBody', e)
}
q('MuiTableBody', ['root'])
const ME = (e) => {
    const { classes: t } = e
    return te({ root: ['root'] }, IE, t)
  },
  NE = B('tbody', {
    name: 'MuiTableBody',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-row-group' }),
  OE = { variant: 'body' },
  vm = 'tbody',
  LE = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTableBody' }),
      { className: o, component: i = vm, ...s } = r,
      l = { ...r, component: i },
      a = ME(l)
    return b.jsx(ba.Provider, {
      value: OE,
      children: b.jsx(NE, {
        className: V(a.root, o),
        as: i,
        ref: n,
        role: i === vm ? null : 'rowgroup',
        ownerState: l,
        ...s,
      }),
    })
  })
function zE(e) {
  return ee('MuiTableCell', e)
}
const AE = q('MuiTableCell', [
    'root',
    'head',
    'body',
    'footer',
    'sizeSmall',
    'sizeMedium',
    'paddingCheckbox',
    'paddingNone',
    'alignLeft',
    'alignCenter',
    'alignRight',
    'alignJustify',
    'stickyHeader',
  ]),
  jE = (e) => {
    const {
        classes: t,
        variant: n,
        align: r,
        padding: o,
        size: i,
        stickyHeader: s,
      } = e,
      l = {
        root: [
          'root',
          n,
          s && 'stickyHeader',
          r !== 'inherit' && `align${F(r)}`,
          o !== 'normal' && `padding${F(o)}`,
          `size${F(i)}`,
        ],
      }
    return te(l, zE, t)
  },
  FE = B('td', {
    name: 'MuiTableCell',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`size${F(n.size)}`],
        n.padding !== 'normal' && t[`padding${F(n.padding)}`],
        n.align !== 'inherit' && t[`align${F(n.align)}`],
        n.stickyHeader && t.stickyHeader,
      ]
    },
  })(
    ue(({ theme: e }) => ({
      ...e.typography.body2,
      display: 'table-cell',
      verticalAlign: 'inherit',
      borderBottom: e.vars
        ? `1px solid ${e.vars.palette.TableCell.border}`
        : `1px solid
    ${e.palette.mode === 'light' ? jr(ye(e.palette.divider, 1), 0.88) : Ar(ye(e.palette.divider, 1), 0.68)}`,
      textAlign: 'left',
      padding: 16,
      variants: [
        {
          props: { variant: 'head' },
          style: {
            color: (e.vars || e).palette.text.primary,
            lineHeight: e.typography.pxToRem(24),
            fontWeight: e.typography.fontWeightMedium,
          },
        },
        {
          props: { variant: 'body' },
          style: { color: (e.vars || e).palette.text.primary },
        },
        {
          props: { variant: 'footer' },
          style: {
            color: (e.vars || e).palette.text.secondary,
            lineHeight: e.typography.pxToRem(21),
            fontSize: e.typography.pxToRem(12),
          },
        },
        {
          props: { size: 'small' },
          style: {
            padding: '6px 16px',
            [`&.${AE.paddingCheckbox}`]: {
              width: 24,
              padding: '0 12px 0 16px',
              '& > *': { padding: 0 },
            },
          },
        },
        {
          props: { padding: 'checkbox' },
          style: { width: 48, padding: '0 0 0 4px' },
        },
        { props: { padding: 'none' }, style: { padding: 0 } },
        { props: { align: 'left' }, style: { textAlign: 'left' } },
        { props: { align: 'center' }, style: { textAlign: 'center' } },
        {
          props: { align: 'right' },
          style: { textAlign: 'right', flexDirection: 'row-reverse' },
        },
        { props: { align: 'justify' }, style: { textAlign: 'justify' } },
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            backgroundColor: (e.vars || e).palette.background.default,
          },
        },
      ],
    })),
  ),
  Un = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTableCell' }),
      {
        align: o = 'inherit',
        className: i,
        component: s,
        padding: l,
        scope: a,
        size: u,
        sortDirection: d,
        variant: f,
        ...p
      } = r,
      y = x.useContext(Jy),
      v = x.useContext(ba),
      C = v && v.variant === 'head'
    let k
    s ? (k = s) : (k = C ? 'th' : 'td')
    let h = a
    k === 'td' ? (h = void 0) : !h && C && (h = 'col')
    const g = f || (v && v.variant),
      m = {
        ...r,
        align: o,
        component: k,
        padding: l || (y && y.padding ? y.padding : 'normal'),
        size: u || (y && y.size ? y.size : 'medium'),
        sortDirection: d,
        stickyHeader: g === 'head' && y && y.stickyHeader,
        variant: g,
      },
      S = jE(m)
    let P = null
    return (
      d && (P = d === 'asc' ? 'ascending' : 'descending'),
      b.jsx(FE, {
        as: k,
        ref: n,
        className: V(S.root, i),
        'aria-sort': P,
        scope: h,
        ownerState: m,
        ...p,
      })
    )
  })
function _E(e) {
  return ee('MuiTableHead', e)
}
q('MuiTableHead', ['root'])
const BE = (e) => {
    const { classes: t } = e
    return te({ root: ['root'] }, _E, t)
  },
  DE = B('thead', {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-header-group' }),
  WE = { variant: 'head' },
  Sm = 'thead',
  UE = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTableHead' }),
      { className: o, component: i = Sm, ...s } = r,
      l = { ...r, component: i },
      a = BE(l)
    return b.jsx(ba.Provider, {
      value: WE,
      children: b.jsx(DE, {
        as: i,
        className: V(a.root, o),
        ref: n,
        role: i === Sm ? null : 'rowgroup',
        ownerState: l,
        ...s,
      }),
    })
  })
function HE(e) {
  return ee('MuiTableRow', e)
}
const xm = q('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']),
  VE = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: i } = e
    return te(
      {
        root: [
          'root',
          n && 'selected',
          r && 'hover',
          o && 'head',
          i && 'footer',
        ],
      },
      HE,
      t,
    )
  },
  KE = B('tr', {
    name: 'MuiTableRow',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.head && t.head, n.footer && t.footer]
    },
  })(
    ue(({ theme: e }) => ({
      color: 'inherit',
      display: 'table-row',
      verticalAlign: 'middle',
      outline: 0,
      [`&.${xm.hover}:hover`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
      },
      [`&.${xm.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : ye(e.palette.primary.main, e.palette.action.selectedOpacity),
        '&:hover': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ye(
                e.palette.primary.main,
                e.palette.action.selectedOpacity +
                  e.palette.action.hoverOpacity,
              ),
        },
      },
    })),
  ),
  Cm = 'tr',
  wm = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTableRow' }),
      {
        className: o,
        component: i = Cm,
        hover: s = !1,
        selected: l = !1,
        ...a
      } = r,
      u = x.useContext(ba),
      d = {
        ...r,
        component: i,
        hover: s,
        selected: l,
        head: u && u.variant === 'head',
        footer: u && u.variant === 'footer',
      },
      f = VE(d)
    return b.jsx(KE, {
      as: i,
      ref: n,
      className: V(f.root, o),
      role: i === Cm ? null : 'row',
      ownerState: d,
      ...a,
    })
  })
function GE(e) {
  return ee('MuiTextField', e)
}
q('MuiTextField', ['root'])
const QE = { standard: Kd, filled: Vd, outlined: Qd },
  YE = (e) => {
    const { classes: t } = e
    return te({ root: ['root'] }, GE, t)
  },
  XE = B(Hy, {
    name: 'MuiTextField',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  su = x.forwardRef(function (t, n) {
    const r = ne({ props: t, name: 'MuiTextField' }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: l,
        color: a = 'primary',
        defaultValue: u,
        disabled: d = !1,
        error: f = !1,
        FormHelperTextProps: p,
        fullWidth: y = !1,
        helperText: v,
        id: C,
        InputLabelProps: k,
        inputProps: h,
        InputProps: g,
        inputRef: m,
        label: S,
        maxRows: P,
        minRows: $,
        multiline: w = !1,
        name: E,
        onBlur: T,
        onChange: c,
        onFocus: R,
        placeholder: M,
        required: O = !1,
        rows: j,
        select: L = !1,
        SelectProps: A,
        slots: W = {},
        slotProps: z = {},
        type: I,
        value: D,
        variant: H = 'outlined',
        ...Y
      } = r,
      ae = {
        ...r,
        autoFocus: i,
        color: a,
        disabled: d,
        error: f,
        fullWidth: y,
        multiline: w,
        required: O,
        select: L,
        variant: H,
      },
      Z = YE(ae),
      K = Xi(C),
      J = v && K ? `${K}-helper-text` : void 0,
      ce = S && K ? `${K}-label` : void 0,
      ut = QE[H],
      Ee = {
        slots: W,
        slotProps: {
          input: g,
          inputLabel: k,
          htmlInput: h,
          formHelperText: p,
          select: A,
          ...z,
        },
      },
      X = {},
      oe = Ee.slotProps.inputLabel
    ;(H === 'outlined' &&
      (oe && typeof oe.shrink < 'u' && (X.notched = oe.shrink), (X.label = S)),
      L &&
        ((!A || !A.native) && (X.id = void 0),
        (X['aria-describedby'] = void 0)))
    const [re, Fe] = he('root', {
        elementType: XE,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Ee, ...Y },
        ownerState: ae,
        className: V(Z.root, l),
        ref: n,
        additionalProps: {
          disabled: d,
          error: f,
          fullWidth: y,
          required: O,
          color: a,
          variant: H,
        },
      }),
      [ie, be] = he('input', {
        elementType: ut,
        externalForwardedProps: Ee,
        additionalProps: X,
        ownerState: ae,
      }),
      [ct, Qe] = he('inputLabel', {
        elementType: Ky,
        externalForwardedProps: Ee,
        ownerState: ae,
      }),
      [fe, dt] = he('htmlInput', {
        elementType: 'input',
        externalForwardedProps: Ee,
        ownerState: ae,
      }),
      [_e, Be] = he('formHelperText', {
        elementType: Gk,
        externalForwardedProps: Ee,
        ownerState: ae,
      }),
      [G, qt] = he('select', {
        elementType: Xd,
        externalForwardedProps: Ee,
        ownerState: ae,
      }),
      Ve = b.jsx(ie, {
        'aria-describedby': J,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: y,
        multiline: w,
        name: E,
        rows: j,
        maxRows: P,
        minRows: $,
        type: I,
        value: D,
        id: K,
        inputRef: m,
        onBlur: T,
        onChange: c,
        onFocus: R,
        placeholder: M,
        inputProps: dt,
        slots: { input: W.htmlInput ? fe : void 0 },
        ...be,
      })
    return b.jsxs(re, {
      ...Fe,
      children: [
        S != null &&
          S !== '' &&
          b.jsx(ct, { htmlFor: K, id: ce, ...Qe, children: S }),
        L
          ? b.jsx(G, {
              'aria-describedby': J,
              id: K,
              labelId: ce,
              value: D,
              input: Ve,
              ...qt,
              children: s,
            })
          : Ve,
        v && b.jsx(_e, { id: J, ...Be, children: v }),
      ],
    })
  }),
  bm = wn(
    b.jsx('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z',
    }),
    'Delete',
  ),
  qE = wn(
    b.jsx('path', {
      d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
    }),
    'Edit',
  ),
  ZE = wn(
    b.jsx('path', {
      d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z',
    }),
    'UploadFile',
  )
function JE(e, t) {
  const n = e.reduce((r, o) => ((r[o.name] = 0), r), {})
  return (
    e.length === 0 ||
      t.forEach((r) => {
        const o = r.amount / e.length
        e.forEach((i) => {
          i.name === r.payer
            ? (n[i.name] = Number((n[i.name] + r.amount - o).toFixed(2)))
            : (n[i.name] = Number((n[i.name] - o).toFixed(2)))
        })
      }),
    n
  )
}
function eP(e, t) {
  const n = e
      .filter((i) => t[i.name] > 0.01)
      .map((i) => ({ name: i.name, amount: Number(t[i.name].toFixed(2)) })),
    r = e
      .filter((i) => t[i.name] < -0.01)
      .map((i) => ({
        name: i.name,
        amount: Number(Math.abs(t[i.name]).toFixed(2)),
      })),
    o = []
  for (; n.length > 0 && r.length > 0;) {
    const i = n[0],
      s = r[0],
      l = Number(Math.min(i.amount, s.amount).toFixed(2))
    if (l <= 0) break
    ;(o.push({ from: s.name, to: i.name, amount: l }),
      (i.amount = Number((i.amount - l).toFixed(2))),
      (s.amount = Number((s.amount - l).toFixed(2))),
      i.amount <= 0.01 && n.shift(),
      s.amount <= 0.01 && r.shift())
  }
  return o
}
function tP(e) {
  const t = e
      .split(/\r?\n/)
      .map((o) => o.trim())
      .filter(Boolean),
    n = new Map(),
    r = []
  return (
    t.forEach((o, i) => {
      const [s, l] = o.split(/\s+/),
        a = Number(l)
      !s ||
        Number.isNaN(a) ||
        (n.has(s) || n.set(s, { id: `${s.toLowerCase()}-${i}`, name: s }),
        r.push({
          id: `imported-${i}`,
          description: `Imported expense ${i + 1}`,
          amount: Number(a.toFixed(2)),
          payer: s,
        }))
    }),
    { people: Array.from(n.values()), expenses: r }
  )
}
const lu = 'expense-split-calculator-state-v1',
  km = [
    { id: 'alice', name: 'Alice' },
    { id: 'bob', name: 'Bob' },
    { id: 'carol', name: 'Carol' },
  ],
  nP = ya({
    palette: {
      mode: 'dark',
      primary: { main: '#90caf9' },
      secondary: { main: '#ffb74d' },
    },
    typography: { fontFamily: 'Inter, system-ui, sans-serif' },
  })
function rP() {
  var $
  const [e, t] = x.useState(km),
    [n, r] = x.useState([]),
    [o, i] = x.useState(''),
    [s, l] = x.useState({
      description: '',
      amount: '',
      payer: (($ = km[0]) == null ? void 0 : $.name) ?? '',
    }),
    [a, u] = x.useState(null),
    [d, f] = x.useState('merge'),
    [p, y] = x.useState(null)
  ;(x.useEffect(() => {
    var E, T
    const w = window.localStorage.getItem(lu)
    if (w)
      try {
        const c = JSON.parse(w)
        ;((E = c.people) != null && E.length && t(c.people),
          (T = c.expenses) != null && T.length && r(c.expenses))
      } catch {
        window.localStorage.removeItem(lu)
      }
  }, []),
    x.useEffect(() => {
      window.localStorage.setItem(
        lu,
        JSON.stringify({ people: e, expenses: n }),
      )
    }, [e, n]),
    x.useEffect(() => {
      e.length &&
        (!s.payer || !e.some((w) => w.name === s.payer)) &&
        l((w) => ({ ...w, payer: e[0].name }))
    }, [e, s.payer]))
  const v = x.useMemo(() => JE(e, n), [e, n]),
    C = x.useMemo(() => eP(e, v), [e, v]),
    k = (w) => {
      w.preventDefault()
      const E = o.trim()
      if (!E) {
        y('Please enter a person name before adding them.')
        return
      }
      if (e.some((c) => c.name.toLowerCase() === E.toLowerCase())) {
        y(`${E} is already part of the group.`)
        return
      }
      const T = { id: crypto.randomUUID(), name: E }
      ;(t((c) => [...c, T]),
        l((c) => ({ ...c, payer: E })),
        i(''),
        y(`${E} added to the travel group.`))
    },
    h = (w) => {
      if ((w.preventDefault(), !e.length)) {
        y('Add at least one person before logging an expense.')
        return
      }
      const E = s.description.trim(),
        T = Number(s.amount),
        c = s.payer || e[0].name
      if (!E || Number.isNaN(T) || T <= 0) {
        y('Please fill in a valid description and amount.')
        return
      }
      const R = {
        id: a ?? crypto.randomUUID(),
        description: E,
        amount: Number(T.toFixed(2)),
        payer: c,
      }
      ;(a
        ? (r((M) => M.map((O) => (O.id === a ? R : O))), u(null))
        : r((M) => [R, ...M]),
        l({ description: '', amount: '', payer: e[0].name }),
        y(a ? 'Expense updated.' : 'Expense added.'))
    },
    g = (w) => {
      ;(u(w.id),
        l({
          description: w.description,
          amount: w.amount.toString(),
          payer: w.payer,
        }))
    },
    m = (w) => {
      var E
      ;(r((T) => T.filter((c) => c.id !== w)),
        a === w &&
          (u(null),
          l({
            description: '',
            amount: '',
            payer: ((E = e[0]) == null ? void 0 : E.name) ?? '',
          })))
    },
    S = (w) => {
      var R
      const E = e.find((M) => M.id === w)
      if (!E) return
      const T = e.filter((M) => M.id !== w),
        c = n.filter((M) => M.payer !== E.name)
      ;(t(T),
        r(c),
        a && !c.some((M) => M.id === a)
          ? (u(null),
            l({
              description: '',
              amount: '',
              payer: ((R = T[0]) == null ? void 0 : R.name) ?? '',
            }))
          : s.payer === E.name &&
            l((M) => {
              var O
              return {
                ...M,
                payer: ((O = T[0]) == null ? void 0 : O.name) ?? '',
              }
            }),
        y(`${E.name} was removed and their expenses were deleted.`))
    },
    P = async (w) => {
      var R
      const E = (R = w.target.files) == null ? void 0 : R[0]
      if (!E) return
      const T = await E.text(),
        c = tP(T)
      if (d === 'overwrite')
        (t(c.people),
          r(c.expenses),
          y(
            `Imported ${c.expenses.length} expenses and replaced the current list.`,
          ))
      else {
        const M = new Set(e.map((j) => j.name.toLowerCase())),
          O = [...e]
        ;(c.people.forEach((j) => {
          M.has(j.name.toLowerCase()) ||
            (M.add(j.name.toLowerCase()), O.push(j))
        }),
          t(O),
          r((j) => [...j, ...c.expenses]),
          y(
            `Imported ${c.expenses.length} expenses and merged them into the current list.`,
          ))
      }
      w.target.value = ''
    }
  return b.jsxs(hw, {
    theme: nP,
    children: [
      b.jsx(fk, {}),
      b.jsx(lk, {
        maxWidth: 'lg',
        sx: { py: 4 },
        children: b.jsxs(ks, {
          spacing: 3,
          children: [
            b.jsxs(xr, {
              sx: { p: { xs: 3, md: 4 }, borderRadius: 3 },
              children: [
                b.jsx(ht, {
                  variant: 'h3',
                  fontWeight: 700,
                  gutterBottom: !0,
                  children: 'Expense Split Calculator',
                }),
                b.jsx(ht, {
                  color: 'text.secondary',
                  maxWidth: '720px',
                  children:
                    'Track people, log shared expenses, and see who should pay whom in real time.',
                }),
              ],
            }),
            p
              ? b.jsx(gb, {
                  severity: 'info',
                  onClose: () => y(null),
                  children: p,
                })
              : null,
            b.jsxs(dn, {
              container: !0,
              spacing: 3,
              alignItems: 'stretch',
              children: [
                b.jsx(dn, {
                  item: !0,
                  xs: 12,
                  md: 5,
                  children: b.jsxs(xr, {
                    sx: {
                      p: 3,
                      borderRadius: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      b.jsx(ht, {
                        variant: 'h5',
                        fontWeight: 600,
                        gutterBottom: !0,
                        children: 'Manage people',
                      }),
                      b.jsxs(nu, {
                        component: 'form',
                        onSubmit: k,
                        sx: { mt: 2 },
                        children: [
                          b.jsx(su, {
                            label: 'Person name',
                            value: o,
                            onChange: (w) => i(w.target.value),
                            fullWidth: !0,
                            size: 'small',
                          }),
                          b.jsx(Cs, {
                            type: 'submit',
                            variant: 'contained',
                            sx: { mt: 2 },
                            children: 'Add person',
                          }),
                        ],
                      }),
                      b.jsx(xc, {
                        dense: !0,
                        sx: { mt: 2, flexGrow: 1 },
                        children: e.map((w) =>
                          b.jsx(
                            lm,
                            {
                              disablePadding: !0,
                              secondaryAction: b.jsx(Ws, {
                                edge: 'end',
                                'aria-label': `delete ${w.name}`,
                                onClick: () => S(w.id),
                                children: b.jsx(bm, {}),
                              }),
                              children: b.jsx(um, { primary: w.name }),
                            },
                            w.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                b.jsx(dn, {
                  item: !0,
                  xs: 12,
                  md: 7,
                  children: b.jsxs(xr, {
                    sx: { p: 3, borderRadius: 3, height: '100%' },
                    children: [
                      b.jsx(ht, {
                        variant: 'h5',
                        fontWeight: 600,
                        gutterBottom: !0,
                        children: a ? 'Edit expense' : 'Add an expense',
                      }),
                      b.jsxs(nu, {
                        component: 'form',
                        onSubmit: h,
                        sx: { mt: 2 },
                        children: [
                          b.jsxs(dn, {
                            container: !0,
                            spacing: 2,
                            children: [
                              b.jsx(dn, {
                                item: !0,
                                xs: 12,
                                children: b.jsx(su, {
                                  label: 'Description',
                                  name: 'description',
                                  value: s.description,
                                  onChange: (w) =>
                                    l((E) => ({
                                      ...E,
                                      description: w.target.value,
                                    })),
                                  fullWidth: !0,
                                  required: !0,
                                }),
                              }),
                              b.jsx(dn, {
                                item: !0,
                                xs: 12,
                                sm: 6,
                                children: b.jsx(su, {
                                  label: 'Amount',
                                  name: 'amount',
                                  type: 'number',
                                  value: s.amount,
                                  onChange: (w) =>
                                    l((E) => ({
                                      ...E,
                                      amount: w.target.value,
                                    })),
                                  fullWidth: !0,
                                  inputProps: { min: 0, step: '0.01' },
                                  required: !0,
                                }),
                              }),
                              b.jsx(dn, {
                                item: !0,
                                xs: 12,
                                sm: 6,
                                children: b.jsxs(Hy, {
                                  fullWidth: !0,
                                  children: [
                                    b.jsx(Ky, {
                                      id: 'payer-label',
                                      children: 'Payer',
                                    }),
                                    b.jsx(Xd, {
                                      labelId: 'payer-label',
                                      value: s.payer,
                                      label: 'Payer',
                                      onChange: (w) =>
                                        l((E) => ({
                                          ...E,
                                          payer: w.target.value,
                                        })),
                                      children: e.map((w) =>
                                        b.jsx(
                                          X2,
                                          { value: w.name, children: w.name },
                                          w.id,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          b.jsxs(ks, {
                            direction: { xs: 'column', sm: 'row' },
                            spacing: 2,
                            sx: { mt: 2 },
                            children: [
                              b.jsx(Cs, {
                                type: 'submit',
                                variant: 'contained',
                                children: a ? 'Save expense' : 'Add expense',
                              }),
                              a
                                ? b.jsx(Cs, {
                                    variant: 'outlined',
                                    onClick: () => {
                                      var w
                                      ;(u(null),
                                        l({
                                          description: '',
                                          amount: '',
                                          payer:
                                            ((w = e[0]) == null
                                              ? void 0
                                              : w.name) ?? '',
                                        }))
                                    },
                                    children: 'Cancel edit',
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      b.jsxs(TE, {
                        sx: { mt: 3 },
                        size: 'small',
                        children: [
                          b.jsx(UE, {
                            children: b.jsxs(wm, {
                              children: [
                                b.jsx(Un, { children: 'Description' }),
                                b.jsx(Un, { children: 'Amount' }),
                                b.jsx(Un, { children: 'Payer' }),
                                b.jsx(Un, {
                                  align: 'right',
                                  children: 'Actions',
                                }),
                              ],
                            }),
                          }),
                          b.jsx(LE, {
                            children: n.map((w) =>
                              b.jsxs(
                                wm,
                                {
                                  hover: !0,
                                  children: [
                                    b.jsx(Un, { children: w.description }),
                                    b.jsx(Un, {
                                      children: w.amount.toFixed(2),
                                    }),
                                    b.jsx(Un, { children: w.payer }),
                                    b.jsxs(Un, {
                                      align: 'right',
                                      children: [
                                        b.jsx(Ws, {
                                          'aria-label': `edit ${w.description}`,
                                          onClick: () => g(w),
                                          children: b.jsx(qE, {}),
                                        }),
                                        b.jsx(Ws, {
                                          'aria-label': `delete ${w.description}`,
                                          onClick: () => m(w.id),
                                          children: b.jsx(bm, {}),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                w.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            b.jsxs(dn, {
              container: !0,
              spacing: 3,
              children: [
                b.jsx(dn, {
                  item: !0,
                  xs: 12,
                  md: 5,
                  children: b.jsxs(xr, {
                    sx: { p: 3, borderRadius: 3 },
                    children: [
                      b.jsx(ht, {
                        variant: 'h5',
                        fontWeight: 600,
                        gutterBottom: !0,
                        children: 'Import from file',
                      }),
                      b.jsx(ht, {
                        variant: 'body2',
                        color: 'text.secondary',
                        sx: { mb: 2 },
                        children:
                          'Upload a text file with one line per expense in the form name amount. The importer can merge or overwrite current entries.',
                      }),
                      b.jsxs(ks, {
                        direction: { xs: 'column', sm: 'row' },
                        spacing: 2,
                        alignItems: 'flex-start',
                        children: [
                          b.jsxs(Cs, {
                            component: 'label',
                            variant: 'outlined',
                            startIcon: b.jsx(ZE, {}),
                            children: [
                              'Upload file',
                              b.jsx('input', {
                                hidden: !0,
                                accept: '.txt,.csv,text/plain',
                                type: 'file',
                                onChange: P,
                              }),
                            ],
                          }),
                          b.jsx(Uk, {
                            control: b.jsx(EE, {
                              checked: d === 'overwrite',
                              onChange: () =>
                                f((w) =>
                                  w === 'merge' ? 'overwrite' : 'merge',
                                ),
                            }),
                            label: d === 'overwrite' ? 'Overwrite' : 'Merge',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                b.jsx(dn, {
                  item: !0,
                  xs: 12,
                  md: 7,
                  children: b.jsxs(xr, {
                    sx: { p: 3, borderRadius: 3 },
                    children: [
                      b.jsx(ht, {
                        variant: 'h5',
                        fontWeight: 600,
                        gutterBottom: !0,
                        children: 'Balance summary',
                      }),
                      b.jsx(ks, {
                        spacing: 2,
                        sx: { mt: 2 },
                        children: e.map((w) =>
                          b.jsxs(
                            nu,
                            {
                              sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              },
                              children: [
                                b.jsx(ht, { children: w.name }),
                                b.jsx(Tb, {
                                  label: `${v[w.name] >= 0 ? '+' : ''}${v[w.name].toFixed(2)}`,
                                  color: v[w.name] >= 0 ? 'success' : 'warning',
                                }),
                              ],
                            },
                            w.id,
                          ),
                        ),
                      }),
                      b.jsx(ht, {
                        variant: 'h6',
                        fontWeight: 600,
                        sx: { mt: 3 },
                        children: 'Who owes whom',
                      }),
                      C.length
                        ? b.jsx(xc, {
                            dense: !0,
                            children: C.map((w, E) =>
                              b.jsx(
                                lm,
                                {
                                  disablePadding: !0,
                                  children: b.jsx(um, {
                                    primary: `${w.from} pays ${w.to} ${w.amount.toFixed(2)}`,
                                  }),
                                },
                                `${w.from}-${w.to}-${E}`,
                              ),
                            ),
                          })
                        : b.jsx(ht, {
                            color: 'text.secondary',
                            children: 'Everyone is settled up.',
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  })
}
uu.createRoot(document.getElementById('root')).render(
  b.jsx(nn.StrictMode, { children: b.jsx(rP, {}) }),
)
