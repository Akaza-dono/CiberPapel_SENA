/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
(function (g, y) { "object" === typeof exports && "undefined" !== typeof module ? y(exports) : "function" === typeof define && define.amd ? define("rxjs", ["exports"], y) : y(g.rxjs = {}) })(this, function (g) {
    function y(b, a) { function c() { this.constructor = b } if ("function" !== typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null"); Ta(b, a); b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype, new c) } function Zd(b, a) {
        var c = {}, d; for (d in b) Object.prototype.hasOwnProperty.call(b,
            d) && 0 > a.indexOf(d) && (c[d] = b[d]); if (null != b && "function" === typeof Object.getOwnPropertySymbols) { var e = 0; for (d = Object.getOwnPropertySymbols(b); e < d.length; e++)0 > a.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(b, d[e]) && (c[d[e]] = b[d[e]]) } return c
    } function $d(b, a, c, d) {
        function e(a) { return a instanceof c ? a : new c(function (b) { b(a) }) } return new (c || (c = Promise))(function (c, h) {
            function f(a) { try { z(d.next(a)) } catch (v) { h(v) } } function k(a) { try { z(d["throw"](a)) } catch (v) { h(v) } } function z(a) {
                a.done ? c(a.value) :
                e(a.value).then(f, k)
            } z((d = d.apply(b, a || [])).next())
        })
    } function Ua(b, a) {
        function c(a) { return function (b) { return d([a, b]) } } function d(c) {
            if (f) throw new TypeError("Generator is already executing."); for (; e;)try {
                if (f = 1, h && (l = c[0] & 2 ? h["return"] : c[0] ? h["throw"] || ((l = h["return"]) && l.call(h), 0) : h.next) && !(l = l.call(h, c[1])).done) return l; if (h = 0, l) c = [c[0] & 2, l.value]; switch (c[0]) {
                    case 0: case 1: l = c; break; case 4: return e.label++, { value: c[1], done: !1 }; case 5: e.label++; h = c[1]; c = [0]; continue; case 7: c = e.ops.pop(); e.trys.pop();
                        continue; default: if (!(l = e.trys, l = 0 < l.length && l[l.length - 1]) && (6 === c[0] || 2 === c[0])) { e = 0; continue } if (3 === c[0] && (!l || c[1] > l[0] && c[1] < l[3])) e.label = c[1]; else if (6 === c[0] && e.label < l[1]) e.label = l[1], l = c; else if (l && e.label < l[2]) e.label = l[2], e.ops.push(c); else { l[2] && e.ops.pop(); e.trys.pop(); continue }
                }c = a.call(b, e)
            } catch (p) { c = [6, p], h = 0 } finally { f = l = 0 } if (c[0] & 5) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }
        } var e = { label: 0, sent: function () { if (l[0] & 1) throw l[1]; return l[1] }, trys: [], ops: [] }, f, h, l, k; return k =
            { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (k[Symbol.iterator] = function () { return this }), k
    } function F(b) { var a = "function" === typeof Symbol && Symbol.iterator, c = a && b[a], d = 0; if (c) return c.call(b); if (b && "number" === typeof b.length) return { next: function () { b && d >= b.length && (b = void 0); return { value: b && b[d++], done: !b } } }; throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined."); } function w(b, a) {
        var c = "function" === typeof Symbol && b[Symbol.iterator]; if (!c) return b; b =
            c.call(b); var d, e = [], f; try { for (; (void 0 === a || 0 < a--) && !(d = b.next()).done;)e.push(d.value) } catch (h) { f = { error: h } } finally { try { d && !d.done && (c = b["return"]) && c.call(b) } finally { if (f) throw f.error; } } return e
    } function x(b, a, c) { if (c || 2 === arguments.length) for (var d = 0, e = a.length, f; d < e; d++)!f && d in a || (f || (f = Array.prototype.slice.call(a, 0, d)), f[d] = a[d]); return b.concat(f || Array.prototype.slice.call(a)) } function ca(b) { return this instanceof ca ? (this.v = b, this) : new ca(b) } function ae(b, a, c) {
        function d(a) {
            k[a] && (z[a] =
                function (c) { return new Promise(function (b, d) { 1 < p.push([a, c, b, d]) || e(a, c) }) })
        } function e(a, c) { try { var b = k[a](c); b.value instanceof ca ? Promise.resolve(b.value.v).then(f, h) : l(p[0][2], b) } catch (u) { l(p[0][3], u) } } function f(a) { e("next", a) } function h(a) { e("throw", a) } function l(a, c) { (a(c), p.shift(), p.length) && e(p[0][0], p[0][1]) } if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var k = c.apply(b, a || []), z, p = []; return z = {}, d("next"), d("throw"), d("return"), z[Symbol.asyncIterator] =
            function () { return this }, z
    } function be(b) { function a(a) { e[a] = b[a] && function (d) { return new Promise(function (e, f) { d = b[a](d); c(e, f, d.done, d.value) }) } } function c(a, c, b, d) { Promise.resolve(d).then(function (c) { a({ value: c, done: b }) }, c) } if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var d = b[Symbol.asyncIterator], e; return d ? d.call(b) : (b = "function" === typeof F ? F(b) : b[Symbol.iterator](), e = {}, a("next"), a("throw"), a("return"), e[Symbol.asyncIterator] = function () { return this }, e) }
    function t(b) { return "function" === typeof b } function R(b) { b = b(function (a) { Error.call(a); a.stack = Error().stack }); b.prototype = Object.create(Error.prototype); return b.prototype.constructor = b } function M(b, a) { b && (a = b.indexOf(a), 0 <= a && b.splice(a, 1)) } function Ib(b) { return b instanceof D || b && "closed" in b && t(b.remove) && t(b.add) && t(b.unsubscribe) } function Jb(b) { da.setTimeout(function () { var a = S.onUnhandledError; if (a) a(b); else throw b; }) } function C() { } function J(b, a, c) { return { kind: b, value: a, error: c } } function Ba(b) {
        if (S.useDeprecatedSynchronousErrorHandling) {
            var a =
                !U; a && (U = { errorThrown: !1, error: null }); b(); if (a && (a = U, b = a.errorThrown, a = a.error, U = null, b)) throw a;
        } else b()
    } function Ca(b) { S.useDeprecatedSynchronousErrorHandling ? S.useDeprecatedSynchronousErrorHandling && U && (U.errorThrown = !0, U.error = b) : Jb(b) } function Wa(b, a) { var c = S.onStoppedNotification; c && da.setTimeout(function () { return c(b, a) }) } function E(b) { return b } function Xa() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return Kb(b) } function Kb(b) {
        return 0 === b.length ? E : 1 === b.length ? b[0] : function (a) {
            return b.reduce(function (a,
                b) { return b(a) }, a)
        }
    } function Lb(b) { var a; return null !== (a = null !== b && void 0 !== b ? b : S.Promise) && void 0 !== a ? a : Promise } function ce(b) { var a; (a = b && b instanceof na) || (a = b && t(b.next) && t(b.error) && t(b.complete) && Ib(b)); return a } function n(b) { return function (a) { if (t(null === a || void 0 === a ? void 0 : a.lift)) return a.lift(function (a) { try { return b(a, this) } catch (d) { this.error(d) } }); throw new TypeError("Unable to lift unknown Observable type"); } } function m(b, a, c, d, e) { return new Ya(b, a, c, d, e) } function Za() {
        return n(function (b,
            a) { var c = null; b._refCount++; var d = m(a, void 0, void 0, void 0, function () { if (!b || 0 >= b._refCount || 0 < --b._refCount) c = null; else { var d = b._connection, f = c; c = null; !d || f && d !== f || d.unsubscribe(); a.unsubscribe() } }); b.subscribe(d); d.closed || (c = b.connect()) })
    } function Mb(b) { return new r(function (a) { var c = b || Da, d = c.now(), e = 0, f = function () { a.closed || (e = N.requestAnimationFrame(function (h) { e = 0; var l = c.now(); a.next({ timestamp: b ? l : h, elapsed: l - d }); f() })) }; f(); return function () { e && N.cancelAnimationFrame(e) } }) } function Nb(b) {
        return b in
            $a ? (delete $a[b], !0) : !1
    } function de(b) { return new r(function (a) { return b.schedule(function () { return a.complete() }) }) } function Ea(b) { return b && t(b.schedule) } function oa(b) { return t(b[b.length - 1]) ? b.pop() : void 0 } function O(b) { return Ea(b[b.length - 1]) ? b.pop() : void 0 } function Ob(b) { return Symbol.asyncIterator && t(null === b || void 0 === b ? void 0 : b[Symbol.asyncIterator]) } function Pb(b) { return new TypeError("You provided " + (null !== b && "object" === typeof b ? "an invalid object" : "'" + b + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.") }
    function Qb(b) { return t(null === b || void 0 === b ? void 0 : b[ab]) } function Rb(b) { return ae(this, arguments, function () { var a, c, d, e; return Ua(this, function (f) { switch (f.label) { case 0: a = b.getReader(), f.label = 1; case 1: f.trys.push([1, , 9, 10]), f.label = 2; case 2: return [4, ca(a.read())]; case 3: return c = f.sent(), d = c.value, (e = c.done) ? [4, ca(void 0)] : [3, 5]; case 4: return [2, f.sent()]; case 5: return [4, ca(d)]; case 6: return [4, f.sent()]; case 7: return f.sent(), [3, 2]; case 8: return [3, 10]; case 9: return a.releaseLock(), [7]; case 10: return [2] } }) }) }
    function q(b) { if (b instanceof r) return b; if (null != b) { if (t(b[pa])) return ee(b); if (bb(b)) return fe(b); if (t(null === b || void 0 === b ? void 0 : b.then)) return ge(b); if (Ob(b)) return Sb(b); if (Qb(b)) return he(b); if (t(null === b || void 0 === b ? void 0 : b.getReader)) return Sb(Rb(b)) } throw Pb(b); } function ee(b) { return new r(function (a) { var c = b[pa](); if (t(c.subscribe)) return c.subscribe(a); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }) } function fe(b) {
        return new r(function (a) {
            for (var c =
                0; c < b.length && !a.closed; c++)a.next(b[c]); a.complete()
        })
    } function ge(b) { return new r(function (a) { b.then(function (c) { a.closed || (a.next(c), a.complete()) }, function (c) { return a.error(c) }).then(null, Jb) }) } function he(b) { return new r(function (a) { var c, d; try { for (var e = F(b), f = e.next(); !f.done; f = e.next())if (a.next(f.value), a.closed) return } catch (h) { c = { error: h } } finally { try { f && !f.done && (d = e.return) && d.call(e) } finally { if (c) throw c.error; } } a.complete() }) } function Sb(b) { return new r(function (a) { ie(b, a).catch(function (c) { return a.error(c) }) }) }
    function ie(b, a) {
        var c, d, e, f; return $d(this, void 0, void 0, function () {
            var h, l; return Ua(this, function (k) {
                switch (k.label) {
                    case 0: k.trys.push([0, 5, 6, 11]), c = be(b), k.label = 1; case 1: return [4, c.next()]; case 2: if (d = k.sent(), d.done) return [3, 4]; h = d.value; a.next(h); if (a.closed) return [2]; k.label = 3; case 3: return [3, 1]; case 4: return [3, 11]; case 5: return l = k.sent(), e = { error: l }, [3, 11]; case 6: return k.trys.push([6, , 9, 10]), d && !d.done && (f = c.return) ? [4, f.call(c)] : [3, 8]; case 7: k.sent(), k.label = 8; case 8: return [3, 10]; case 9: if (e) throw e.error;
                        return [7]; case 10: return [7]; case 11: return a.complete(), [2]
                }
            })
        })
    } function G(b, a, c, d, e) { void 0 === d && (d = 0); void 0 === e && (e = !1); a = a.schedule(function () { c(); e ? b.add(this.schedule(null, d)) : this.unsubscribe() }, d); b.add(a); if (!e) return a } function qa(b, a) { void 0 === a && (a = 0); return n(function (c, d) { c.subscribe(m(d, function (c) { return G(d, b, function () { return d.next(c) }, a) }, function () { return G(d, b, function () { return d.complete() }, a) }, function (c) { return G(d, b, function () { return d.error(c) }, a) })) }) } function ra(b, a) {
        void 0 ===
        a && (a = 0); return n(function (c, d) { d.add(b.schedule(function () { return c.subscribe(d) }, a)) })
    } function je(b, a) { return new r(function (c) { var d = 0; return a.schedule(function () { d === b.length ? c.complete() : (c.next(b[d++]), c.closed || this.schedule()) }) }) } function Tb(b, a) {
        return new r(function (c) {
            var d; G(c, a, function () { d = b[ab](); G(c, a, function () { var a, b, h; try { a = d.next(), b = a.value, h = a.done } catch (l) { c.error(l); return } h ? c.complete() : c.next(b) }, 0, !0) }); return function () {
                return t(null === d || void 0 === d ? void 0 : d.return) &&
                    d.return()
            }
        })
    } function Ub(b, a) { if (!b) throw Error("Iterable cannot be null"); return new r(function (c) { G(c, a, function () { var d = b[Symbol.asyncIterator](); G(c, a, function () { d.next().then(function (a) { a.done ? c.complete() : c.next(a.value) }) }, 0, !0) }) }) } function Vb(b, a) {
        if (null != b) {
            if (t(b[pa])) return q(b).pipe(ra(a), qa(a)); if (bb(b)) return je(b, a); if (t(null === b || void 0 === b ? void 0 : b.then)) return q(b).pipe(ra(a), qa(a)); if (Ob(b)) return Ub(b, a); if (Qb(b)) return Tb(b, a); if (t(null === b || void 0 === b ? void 0 : b.getReader)) return Ub(Rb(b),
                a)
        } throw Pb(b);
    } function P(b, a) { return a ? Vb(b, a) : q(b) } function cb() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; a = O(b); return P(b, a) } function Wb(b, a) { var c = t(b) ? b : function () { return b }, d = function (a) { return a.error(c()) }; return new r(a ? function (c) { return a.schedule(d, 0, c) } : d) } function Fa(b, a) {
        var c, d, e, f = b.kind, h = b.value; b = b.error; if ("string" !== typeof f) throw new TypeError('Invalid notification, missing "kind"'); "N" === f ? null === (c = a.next) || void 0 === c ? void 0 : c.call(a, h) : "E" === f ? null === (d =
            a.error) || void 0 === d ? void 0 : d.call(a, b) : null === (e = a.complete) || void 0 === e ? void 0 : e.call(a)
    } function db(b) { return b instanceof Date && !isNaN(b) } function eb(b, a) {
        b = db(b) ? { first: b } : "number" === typeof b ? { each: b } : b; var c = b.first, d = b.each, e = b.with, f = void 0 === e ? ke : e, e = b.scheduler, h = void 0 === e ? null !== a && void 0 !== a ? a : I : e; a = b.meta; var l = void 0 === a ? null : a; if (null == c && null == d) throw new TypeError("No timeout provided."); return n(function (a, b) {
            var e, k, z = null, g = 0, u = function (a) {
                k = G(b, h, function () {
                    try {
                        e.unsubscribe(),
                        q(f({ meta: l, lastValue: z, seen: g })).subscribe(b)
                    } catch (V) { b.error(V) }
                }, a)
            }; e = a.subscribe(m(b, function (a) { null === k || void 0 === k ? void 0 : k.unsubscribe(); g++; b.next(z = a); 0 < d && u(d) }, void 0, void 0, function () { (null === k || void 0 === k ? 0 : k.closed) || (null === k || void 0 === k ? void 0 : k.unsubscribe()); z = null })); !g && u(null != c ? "number" === typeof c ? c : +c - h.now() : d)
        })
    } function ke(b) { throw new Xb(b); } function Q(b, a) { return n(function (c, d) { var e = 0; c.subscribe(m(d, function (c) { d.next(b.call(a, c, e++)) })) }) } function W(b) {
        return Q(function (a) {
            return le(a) ?
                b.apply(void 0, x([], w(a))) : b(a)
        })
    } function Ga(b, a, c, d) {
        if (c) if (Ea(c)) d = c; else return function () { for (var e = [], f = 0; f < arguments.length; f++)e[f] = arguments[f]; return Ga(b, a, d).apply(this, e).pipe(W(c)) }; return d ? function () { for (var c = [], f = 0; f < arguments.length; f++)c[f] = arguments[f]; return Ga(b, a).apply(this, c).pipe(ra(d), qa(d)) } : function () {
            for (var c = this, d = [], h = 0; h < arguments.length; h++)d[h] = arguments[h]; var l = new fb, k = !0; return new r(function (e) {
                e = l.subscribe(e); if (k) {
                    var f = k = !1, h = !1; a.apply(c, x(x([], w(d)),
                        [function () { for (var a = [], c = 0; c < arguments.length; c++)a[c] = arguments[c]; if (b && (c = a.shift(), null != c)) { l.error(c); return } l.next(1 < a.length ? a : a[0]); h = !0; f && l.complete() }])); h && l.complete(); f = !0
                } return e
            })
        }
    } function Yb(b) { if (1 === b.length) { var a = b[0]; if (me(a)) return { args: a, keys: null }; if (a && "object" === typeof a && ne(a) === oe) return b = pe(a), { args: b.map(function (c) { return a[c] }), keys: b } } return { args: b, keys: null } } function Zb(b, a) { return b.reduce(function (c, b, e) { return c[b] = a[e], c }, {}) } function $b() {
        for (var b = [],
            a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = O(b), a = oa(b), b = Yb(b), d = b.args, e = b.keys; if (0 === d.length) return P([], c); c = new r(ac(d, c, e ? function (a) { return Zb(e, a) } : E)); return a ? c.pipe(W(a)) : c
    } function ac(b, a, c) { void 0 === c && (c = E); return function (d) { bc(a, function () { for (var e = b.length, f = Array(e), h = e, l = e, k = function (e) { bc(a, function () { var k = !1; P(b[e], a).subscribe(m(d, function (a) { f[e] = a; k || (k = !0, l--); l || d.next(c(f.slice())) }, function () { --h || d.complete() })) }, d) }, g = 0; g < e; g++)k(g) }, d) } } function bc(b, a, c) {
        b ?
            G(c, b, a) : a()
    } function gb(b, a, c, d, e, f, h, l) {
        var k = [], g = 0, p = 0, v = !1, B = function (a) { return g < d ? n(a) : k.push(a) }, n = function (b) { f && a.next(b); g++; var l = !1; q(c(b, p++)).subscribe(m(a, function (c) { null === e || void 0 === e ? void 0 : e(c); f ? B(c) : a.next(c) }, function () { l = !0 }, void 0, function () { if (l) try { g--; for (var c = function () { var c = k.shift(); h ? G(a, h, function () { return n(c) }) : n(c) }; k.length && g < d;)c(); !v || k.length || g || a.complete() } catch (X) { a.error(X) } })) }; b.subscribe(m(a, B, function () { v = !0; !v || k.length || g || a.complete() })); return function () {
            null ===
            l || void 0 === l ? void 0 : l()
        }
    } function H(b, a, c) { void 0 === c && (c = Infinity); if (t(a)) return H(function (c, e) { return Q(function (b, d) { return a(c, b, e, d) })(q(b(c, e))) }, c); "number" === typeof a && (c = a); return n(function (a, e) { return gb(a, e, b, c) }) } function sa(b) { void 0 === b && (b = Infinity); return H(E, b) } function Ha() { return sa(1) } function ta() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return Ha()(P(b, O(b))) } function Ia(b) { return new r(function (a) { q(b()).subscribe(a) }) } function hb(b, a, c, d) {
        t(c) && (d = c, c =
            void 0); if (d) return hb(b, a, c).pipe(W(d)); d = w(qe(b) ? re.map(function (d) { return function (e) { return b[d](a, e, c) } }) : se(b) ? te.map(cc(b, a)) : ue(b) ? ve.map(cc(b, a)) : [], 2); var e = d[0], f = d[1]; if (!e && bb(b)) return H(function (b) { return hb(b, a, c) })(q(b)); if (!e) throw new TypeError("Invalid event target"); return new r(function (a) { var c = function () { for (var c = [], b = 0; b < arguments.length; b++)c[b] = arguments[b]; return a.next(1 < c.length ? c : c[0]) }; e(c); return function () { return f(c) } })
    } function cc(b, a) {
        return function (c) {
            return function (d) {
                return b[c](a,
                    d)
            }
        }
    } function se(b) { return t(b.addListener) && t(b.removeListener) } function ue(b) { return t(b.on) && t(b.off) } function qe(b) { return t(b.addEventListener) && t(b.removeEventListener) } function dc(b, a, c) { return c ? dc(b, a).pipe(W(c)) : new r(function (c) { var d = function () { for (var a = [], b = 0; b < arguments.length; b++)a[b] = arguments[b]; return c.next(1 === a.length ? a[0] : a) }, f = b(d); return t(a) ? function () { return a(d, f) } : void 0 }) } function Y(b, a, c) {
        void 0 === b && (b = 0); void 0 === c && (c = ib); var d = -1; null != a && (Ea(a) ? c = a : d = a); return new r(function (a) {
            var e =
                db(b) ? +b - c.now() : b; 0 > e && (e = 0); var h = 0; return c.schedule(function () { a.closed || (a.next(h++), 0 <= d ? this.schedule(void 0, d) : a.complete()) }, e)
        })
    } function ec(b, a) { void 0 === b && (b = 0); void 0 === a && (a = I); 0 > b && (b = 0); return Y(b, b, a) } function Z(b) { return 1 === b.length && we(b[0]) ? b[0] : b } function fc() {
        for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = Z(b); return new r(function (a) {
            var b = 0, d = function () {
                if (b < c.length) {
                    var e = void 0; try { e = q(c[b++]) } catch (k) { d(); return } var f = new Ya(a, void 0, C, C); e.subscribe(f);
                    f.add(d)
                } else a.complete()
            }; d()
        })
    } function gc(b, a) { return function (c, d) { return !b.call(a, c, d) } } function K(b, a) { return n(function (c, d) { var e = 0; c.subscribe(m(d, function (c) { return b.call(a, c, e++) && d.next(c) })) }) } function hc(b) { return function (a) { for (var c = [], d = function (d) { c.push(q(b[d]).subscribe(m(a, function (b) { if (c) { for (var e = 0; e < c.length; e++)e !== d && c[e].unsubscribe(); c = null } a.next(b) }))) }, e = 0; c && !a.closed && e < b.length; e++)d(e) } } function jb() {
        for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a];
        var c = oa(b), d = Z(b); return d.length ? new r(function (a) { var b = d.map(function () { return [] }), e = d.map(function () { return !1 }); a.add(function () { b = e = null }); for (var l = function (f) { q(d[f]).subscribe(m(a, function (d) { b[f].push(d); b.every(function (a) { return a.length }) && (d = b.map(function (a) { return a.shift() }), a.next(c ? c.apply(void 0, x([], w(d))) : d), b.some(function (a, c) { return !a.length && e[c] }) && a.complete()) }, function () { e[f] = !0; !b[f].length && a.complete() })) }, k = 0; !a.closed && k < d.length; k++)l(k); return function () { b = e = null } }) :
            L
    } function kb(b) { return n(function (a, c) { var d = !1, e = null, f = null, h = !1, l = function () { null === f || void 0 === f ? void 0 : f.unsubscribe(); f = null; if (d) { d = !1; var a = e; e = null; c.next(a) } h && c.complete() }, k = function () { f = null; h && c.complete() }; a.subscribe(m(c, function (a) { d = !0; e = a; f || q(b(a)).subscribe(f = m(c, l, k)) }, function () { h = !0; d && f && !f.closed || c.complete() })) }) } function ic(b, a) { void 0 === a && (a = I); return kb(function () { return Y(b, a) }) } function jc(b) {
        return n(function (a, c) {
            var d = []; a.subscribe(m(c, function (a) { return d.push(a) },
                function () { c.next(d); c.complete() })); q(b).subscribe(m(c, function () { var a = d; d = []; c.next(a) }, C)); return function () { d = null }
        })
    } function kc(b, a) {
        void 0 === a && (a = null); a = null !== a && void 0 !== a ? a : b; return n(function (c, d) {
            var e = [], f = 0; c.subscribe(m(d, function (c) {
                var h, k, g, p, v = null; 0 === f++ % a && e.push([]); try { for (var m = F(e), n = m.next(); !n.done; n = m.next()) { var u = n.value; u.push(c); b <= u.length && (v = null !== v && void 0 !== v ? v : [], v.push(u)) } } catch (X) { h = { error: X } } finally {
                    try { n && !n.done && (k = m.return) && k.call(m) } finally {
                        if (h) throw h.error;
                    }
                } if (v) try { for (var ea = F(v), V = ea.next(); !V.done; V = ea.next())u = V.value, M(e, u), d.next(u) } catch (X) { g = { error: X } } finally { try { V && !V.done && (p = ea.return) && p.call(ea) } finally { if (g) throw g.error; } }
            }, function () { var a, c; try { for (var b = F(e), f = b.next(); !f.done; f = b.next())d.next(f.value) } catch (p) { a = { error: p } } finally { try { f && !f.done && (c = b.return) && c.call(b) } finally { if (a) throw a.error; } } d.complete() }, void 0, function () { e = null }))
        })
    } function lc(b) {
        for (var a, c, d = [], e = 1; e < arguments.length; e++)d[e - 1] = arguments[e]; var f = null !==
            (a = O(d)) && void 0 !== a ? a : I, h = null !== (c = d[0]) && void 0 !== c ? c : null, l = d[1] || Infinity; return n(function (a, c) {
                var d = [], e = !1, k = function (a) { var b = a.buffer; a.subs.unsubscribe(); M(d, a); c.next(b); e && g() }, g = function () { if (d) { var a = new D; c.add(a); var e = { buffer: [], subs: a }; d.push(e); G(a, f, function () { return k(e) }, b) } }; null !== h && 0 <= h ? G(c, f, g, h, !0) : e = !0; g(); var z = m(c, function (a) {
                    var c, b, e = d.slice(); try { for (var f = F(e), h = f.next(); !h.done; h = f.next()) { var g = h.value, p = g.buffer; p.push(a); l <= p.length && k(g) } } catch (ze) { c = { error: ze } } finally {
                        try {
                            h &&
                            !h.done && (b = f.return) && b.call(f)
                        } finally { if (c) throw c.error; }
                    }
                }, function () { for (; null === d || void 0 === d ? 0 : d.length;)c.next(d.shift().buffer); null === z || void 0 === z ? void 0 : z.unsubscribe(); c.complete(); c.unsubscribe() }, void 0, function () { return d = null }); a.subscribe(z)
            })
    } function mc(b, a) {
        return n(function (c, d) {
            var e = []; q(b).subscribe(m(d, function (c) { var b = []; e.push(b); var f = new D; f.add(q(a(c)).subscribe(m(d, function () { M(e, b); d.next(b); f.unsubscribe() }, C))) }, C)); c.subscribe(m(d, function (a) {
                var c, b; try {
                    for (var d =
                        F(e), f = d.next(); !f.done; f = d.next())f.value.push(a)
                } catch (p) { c = { error: p } } finally { try { f && !f.done && (b = d.return) && b.call(d) } finally { if (c) throw c.error; } }
            }, function () { for (; 0 < e.length;)d.next(e.shift()); d.complete() }))
        })
    } function nc(b) {
        return n(function (a, c) {
            var d = null, e = null, f = function () { null === e || void 0 === e ? void 0 : e.unsubscribe(); var a = d; d = []; a && c.next(a); q(b()).subscribe(e = m(c, f, C)) }; f(); a.subscribe(m(c, function (a) { return null === d || void 0 === d ? void 0 : d.push(a) }, function () { d && c.next(d); c.complete() }, void 0,
                function () { return d = e = null }))
        })
    } function lb(b) { return n(function (a, c) { var d = null, e = !1, f, d = a.subscribe(m(c, void 0, void 0, function (h) { f = q(b(h, lb(b)(a))); d ? (d.unsubscribe(), d = null, f.subscribe(c)) : e = !0 })); e && (d.unsubscribe(), d = null, f.subscribe(c)) }) } function oc(b, a, c, d, e) { return function (f, h) { var l = c, k = a, g = 0; f.subscribe(m(h, function (a) { var c = g++; k = l ? b(k, a, c) : (l = !0, a); d && h.next(k) }, e && function () { l && h.next(k); h.complete() })) } } function fa(b, a) { return n(oc(b, a, 2 <= arguments.length, !1, !0)) } function mb() {
        return n(function (b,
            a) { fa(Ae, [])(b).subscribe(a) })
    } function pc(b, a) { return Xa(mb(), H(function (a) { return b(a) }), a ? W(a) : E) } function Ja(b) { return pc($b, b) } function nb() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return (a = oa(b)) ? Xa(nb.apply(void 0, x([], w(b))), W(a)) : n(function (a, d) { ac(x([a], w(Z(b))))(d) }) } function qc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return nb.apply(void 0, x([], w(b))) } function Ka(b, a) { return t(a) ? H(b, a, 1) : H(b, 1) } function rc(b, a) {
        return t(a) ? Ka(function () { return b },
            a) : Ka(function () { return b })
    } function sc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = O(b); return n(function (a, e) { Ha()(P(x([a], w(b)), c)).subscribe(e) }) } function tc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return sc.apply(void 0, x([], w(b))) } function Be(b) { return new r(function (a) { return b.subscribe(a) }) } function La(b, a) { void 0 === a && (a = Ce); var c = a.connector; return n(function (a, e) { var d = c(); q(b(Be(d))).subscribe(e); e.add(a.subscribe(d)) }) } function uc(b) {
        return fa(function (a,
            c, d) { return !b || b(c, d) ? a + 1 : a }, 0)
    } function vc(b) { return n(function (a, c) { var d = !1, e = null, f = null, h = function () { null === f || void 0 === f ? void 0 : f.unsubscribe(); f = null; if (d) { d = !1; var a = e; e = null; c.next(a) } }; a.subscribe(m(c, function (a) { null === f || void 0 === f ? void 0 : f.unsubscribe(); d = !0; e = a; f = m(c, h, C); q(b(a)).subscribe(f) }, function () { h(); c.complete() }, void 0, function () { e = f = null })) }) } function wc(b, a) {
        void 0 === a && (a = I); return n(function (c, d) {
            function e() {
                var c = l + b, e = a.now(); e < c ? (f = this.schedule(void 0, c - e), d.add(f)) :
                    k()
            } var f = null, h = null, l = null, k = function () { if (f) { f.unsubscribe(); f = null; var a = h; h = null; d.next(a) } }; c.subscribe(m(d, function (c) { h = c; l = a.now(); f || (f = a.schedule(e, b), d.add(f)) }, function () { k(); d.complete() }, void 0, function () { h = f = null }))
        })
    } function ua(b) { return n(function (a, c) { var d = !1; a.subscribe(m(c, function (a) { d = !0; c.next(a) }, function () { d || c.next(b); c.complete() })) }) } function ga(b) { return 0 >= b ? function () { return L } : n(function (a, c) { var d = 0; a.subscribe(m(c, function (a) { ++d <= b && (c.next(a), b <= d && c.complete()) })) }) }
    function ob() { return n(function (b, a) { b.subscribe(m(a, C)) }) } function pb(b) { return Q(function () { return b }) } function Ma(b, a) { return a ? function (c) { return ta(a.pipe(ga(1), ob()), c.pipe(Ma(b))) } : H(function (a, d) { return q(b(a, d)).pipe(ga(1), pb(a)) }) } function xc(b, a) { void 0 === a && (a = I); var c = Y(b, a); return Ma(function () { return c }) } function yc() { return n(function (b, a) { b.subscribe(m(a, function (c) { return Fa(c, a) })) }) } function zc(b, a) {
        return n(function (c, d) {
            var e = new Set; c.subscribe(m(d, function (a) {
                var c = b ? b(a) :
                    a; e.has(c) || (e.add(c), d.next(a))
            })); a && q(a).subscribe(m(d, function () { return e.clear() }, C))
        })
    } function qb(b, a) { void 0 === a && (a = E); b = null !== b && void 0 !== b ? b : De; return n(function (c, d) { var e, f = !0; c.subscribe(m(d, function (c) { var h = a(c); if (f || !b(e, h)) f = !1, e = h, d.next(c) })) }) } function De(b, a) { return b === a } function Ac(b, a) { return qb(function (c, d) { return a ? a(c[b], d[b]) : c[b] === d[b] }) } function va(b) {
        void 0 === b && (b = Ee); return n(function (a, c) {
            var d = !1; a.subscribe(m(c, function (a) { d = !0; c.next(a) }, function () {
                return d ?
                    c.complete() : c.error(b())
            }))
        })
    } function Ee() { return new aa } function Bc(b, a) { if (0 > b) throw new rb; var c = 2 <= arguments.length; return function (d) { return d.pipe(K(function (a, c) { return c === b }), ga(1), c ? ua(a) : va(function () { return new rb })) } } function Cc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return function (a) { return ta(a, cb.apply(void 0, x([], w(b)))) } } function Dc(b, a) {
        return n(function (c, d) {
            var e = 0; c.subscribe(m(d, function (f) { b.call(a, f, e++, c) || (d.next(!1), d.complete()) }, function () {
                d.next(!0);
                d.complete()
            }))
        })
    } function Na(b, a) { return a ? function (c) { return c.pipe(Na(function (c, e) { return q(b(c, e)).pipe(Q(function (b, d) { return a(c, b, e, d) })) })) } : n(function (a, d) { var c = 0, f = null, h = !1; a.subscribe(m(d, function (a) { f || (f = m(d, void 0, function () { f = null; h && d.complete() }), q(b(a, c++)).subscribe(f)) }, function () { h = !0; !f && d.complete() })) }) } function Oa() { return Na(E) } function Ec(b, a, c) { void 0 === a && (a = Infinity); a = 1 > (a || 0) ? Infinity : a; return n(function (d, e) { return gb(d, e, b, a, void 0, !0, c) }) } function Fc(b) {
        return n(function (a,
            c) { try { a.subscribe(c) } finally { c.add(b) } })
    } function Gc(b, a) { return n(Hc(b, a, "value")) } function Hc(b, a, c) { var d = "index" === c; return function (c, f) { var e = 0; c.subscribe(m(f, function (h) { var l = e++; b.call(a, h, l, c) && (f.next(d ? l : h), f.complete()) }, function () { f.next(d ? -1 : void 0); f.complete() })) } } function Ic(b, a) { return n(Hc(b, a, "index")) } function Jc(b, a) { var c = 2 <= arguments.length; return function (d) { return d.pipe(b ? K(function (a, c) { return b(a, c, d) }) : E, ga(1), c ? ua(a) : va(function () { return new aa })) } } function Kc(b,
        a, c, d) {
            return n(function (e, f) {
                function h(a, c) { var b = new r(function (a) { v++; var b = c.subscribe(a); return function () { b.unsubscribe(); 0 === --v && n && Va.unsubscribe() } }); b.key = a; return b } var l; a && "function" !== typeof a ? (c = a.duration, l = a.element, d = a.connector) : l = a; var k = new Map, g = function (a) { k.forEach(a); a(f) }, p = function (a) { return g(function (c) { return c.error(a) }) }, v = 0, n = !1, Va = new Ya(f, function (a) {
                    try {
                        var e = b(a), g = k.get(e); if (!g) {
                            k.set(e, g = d ? d() : new A); var z = h(e, g); f.next(z); if (c) {
                                var v = m(g, function () {
                                    g.complete();
                                    null === v || void 0 === v ? void 0 : v.unsubscribe()
                                }, void 0, void 0, function () { return k.delete(e) }); Va.add(q(c(z)).subscribe(v))
                            }
                        } g.next(l ? l(a) : a)
                    } catch (xe) { p(xe) }
                }, function () { return g(function (a) { return a.complete() }) }, p, function () { return k.clear() }, function () { n = !0; return 0 === v }); e.subscribe(Va)
            })
    } function Lc() { return n(function (b, a) { b.subscribe(m(a, function () { a.next(!1); a.complete() }, function () { a.next(!0); a.complete() })) }) } function sb(b) {
        return 0 >= b ? function () { return L } : n(function (a, c) {
            var d = []; a.subscribe(m(c,
                function (a) { d.push(a); b < d.length && d.shift() }, function () { var a, b; try { for (var h = F(d), l = h.next(); !l.done; l = h.next())c.next(l.value) } catch (k) { a = { error: k } } finally { try { l && !l.done && (b = h.return) && b.call(h) } finally { if (a) throw a.error; } } c.complete() }, void 0, function () { d = null }))
        })
    } function Mc(b, a) { var c = 2 <= arguments.length; return function (d) { return d.pipe(b ? K(function (a, c) { return b(a, c, d) }) : E, sb(1), c ? ua(a) : va(function () { return new aa })) } } function Nc() {
        return n(function (b, a) {
            b.subscribe(m(a, function (c) { a.next(Pa.createNext(c)) },
                function () { a.next(Pa.createComplete()); a.complete() }, function (c) { a.next(Pa.createError(c)); a.complete() }))
        })
    } function Oc(b) { return fa(t(b) ? function (a, c) { return 0 < b(a, c) ? a : c } : function (a, c) { return a > c ? a : c }) } function Pc(b, a, c) { void 0 === c && (c = Infinity); if (t(a)) return H(function () { return b }, a, c); "number" === typeof a && (c = a); return H(function () { return b }, c) } function Qc(b, a, c) {
        void 0 === c && (c = Infinity); return n(function (d, e) {
            var f = a; return gb(d, e, function (a, c) { return b(f, a, c) }, c, function (a) { f = a }, !1, void 0,
                function () { return f = null })
        })
    } function Rc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = O(b), d = "number" === typeof b[b.length - 1] ? b.pop() : Infinity, b = Z(b); return n(function (a, f) { sa(d)(P(x([a], w(b)), c)).subscribe(f) }) } function Sc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return Rc.apply(void 0, x([], w(b))) } function Tc(b) { return fa(t(b) ? function (a, c) { return 0 > b(a, c) ? a : c } : function (a, c) { return a < c ? a : c }) } function Qa(b, a) {
        var c = t(b) ? b : function () { return b }; return t(a) ? La(a,
            { connector: c }) : function (a) { return new Ra(a, c) }
    } function Uc() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = Z(b); return function (a) { return fc.apply(void 0, x([a], w(c))) } } function Vc() { return n(function (b, a) { var c, d = !1; b.subscribe(m(a, function (b) { var e = c; c = b; d && a.next([e, b]); d = !0 })) }) } function Wc() {
        for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = b.length; if (0 === c) throw Error("list of properties cannot be empty."); return Q(function (a) {
            var d = a; for (a = 0; a < c; a++)if (d = null ===
                d || void 0 === d ? void 0 : d[b[a]], "undefined" === typeof d) return; return d
        })
    } function Xc(b) { return b ? function (a) { return La(b)(a) } : function (a) { return Qa(new A)(a) } } function Yc(b) { return function (a) { var c = new Zc(b); return new Ra(a, function () { return c }) } } function $c() { return function (b) { var a = new fb; return new Ra(b, function () { return a }) } } function ad(b, a, c, d) { c && !t(c) && (d = c); var e = t(c) ? c : void 0; return function (c) { return Qa(new ha(b, a, d), e)(c) } } function tb() {
        for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a];
        return b.length ? n(function (a, d) { hc(x([a], w(b)))(d) }) : E
    } function bd(b) {
        var a, c = Infinity, d; null != b && ("object" === typeof b ? (a = b.count, c = void 0 === a ? Infinity : a, d = b.delay) : c = b); return 0 >= c ? function () { return L } : n(function (a, b) {
            var e = 0, f, k = function () { null === f || void 0 === f ? void 0 : f.unsubscribe(); f = null; if (null != d) { var a = "number" === typeof d ? Y(d) : q(d(e)), c = m(b, function () { c.unsubscribe(); g() }); a.subscribe(c) } else g() }, g = function () {
                var d = !1; f = a.subscribe(m(b, void 0, function () { ++e < c ? f ? k() : d = !0 : b.complete() })); d &&
                    k()
            }; g()
        })
    } function cd(b) { return n(function (a, c) { var d, e = !1, f, h = !1, l = !1, k = function () { f || (f = new A, q(b(f)).subscribe(m(c, function () { d ? g() : e = !0 }, function () { h = !0; l && h && c.complete() }))); return f }, g = function () { l = !1; d = a.subscribe(m(c, void 0, function () { (l = !0, h) && (c.complete(), !0) || k().next() })); e && (d.unsubscribe(), d = null, e = !1, g()) }; g() }) } function dd(b) {
        void 0 === b && (b = Infinity); b = b && "object" === typeof b ? b : { count: b }; var a = b.count, c = void 0 === a ? Infinity : a, d = b.delay; b = b.resetOnSuccess; var e = void 0 === b ? !1 : b; return 0 >=
            c ? E : n(function (a, b) { var f = 0, h, g = function () { var l = !1; h = a.subscribe(m(b, function (a) { e && (f = 0); b.next(a) }, void 0, function (a) { if (f++ < c) { var e = function () { h ? (h.unsubscribe(), h = null, g()) : l = !0 }; if (null != d) { a = "number" === typeof d ? Y(d) : q(d(a, f)); var k = m(b, function () { k.unsubscribe(); e() }, function () { b.complete() }); a.subscribe(k) } else e() } else b.error(a) })); l && (h.unsubscribe(), h = null, g()) }; g() })
    } function ed(b) {
        return n(function (a, c) {
            var d, e = !1, f, h = function () {
                d = a.subscribe(m(c, void 0, void 0, function (a) {
                    f || (f = new A,
                        q(b(f)).subscribe(m(c, function () { return d ? h() : e = !0 }))); f && f.next(a)
                })); e && (d.unsubscribe(), d = null, e = !1, h())
            }; h()
        })
    } function ub(b) { return n(function (a, c) { var d = !1, e = null; a.subscribe(m(c, function (a) { d = !0; e = a })); q(b).subscribe(m(c, function () { if (d) { d = !1; var a = e; e = null; c.next(a) } }, C)) }) } function fd(b, a) { void 0 === a && (a = I); return ub(ec(b, a)) } function gd(b, a) { return n(oc(b, a, 2 <= arguments.length, !0)) } function hd(b, a) {
        void 0 === a && (a = function (a, b) { return a === b }); return n(function (c, d) {
            var e = { buffer: [], complete: !1 },
            f = { buffer: [], complete: !1 }, h = function (c, b) { var e = m(d, function (e) { var f = b.buffer, h = b.complete; 0 === f.length ? h ? (d.next(!1), d.complete()) : c.buffer.push(e) : a(e, f.shift()) || (d.next(!1), d.complete()) }, function () { c.complete = !0; var a = b.buffer; b.complete && (d.next(0 === a.length), d.complete()); null === e || void 0 === e ? void 0 : e.unsubscribe() }); return e }; c.subscribe(h(e, f)); q(b).subscribe(h(f, e))
        })
    } function vb(b) {
        void 0 === b && (b = {}); var a = b.connector, c = void 0 === a ? function () { return new A } : a, a = b.resetOnError, d = void 0 ===
            a ? !0 : a, a = b.resetOnComplete, e = void 0 === a ? !0 : a; b = b.resetOnRefCountZero; var f = void 0 === b ? !0 : b; return function (a) {
                var b, h, g, p = 0, v = !1, m = !1, t = function () { null === h || void 0 === h ? void 0 : h.unsubscribe(); h = void 0 }, u = function () { t(); b = g = void 0; v = m = !1 }, ea = function () { var a = b; u(); null === a || void 0 === a ? void 0 : a.unsubscribe() }; return n(function (a, l) {
                    p++; m || v || t(); var k = g = null !== g && void 0 !== g ? g : c(); l.add(function () { p--; 0 !== p || m || v || (h = wb(ea, f)) }); k.subscribe(l); !b && 0 < p && (b = new ia({
                        next: function (a) { return k.next(a) }, error: function (a) {
                            m =
                            !0; t(); h = wb(u, d, a); k.error(a)
                        }, complete: function () { v = !0; t(); h = wb(u, e); k.complete() }
                    }), q(a).subscribe(b))
                })(a)
            }
    } function wb(b, a) { for (var c = [], d = 2; d < arguments.length; d++)c[d - 2] = arguments[d]; if (!0 === a) b(); else if (!1 !== a) { var e = new ia({ next: function () { e.unsubscribe(); b() } }); return q(a.apply(void 0, x([], w(c)))).subscribe(e) } } function id(b, a, c) {
        var d, e; d = !1; b && "object" === typeof b ? (d = b.bufferSize, e = void 0 === d ? Infinity : d, d = b.windowTime, a = void 0 === d ? Infinity : d, d = b.refCount, d = void 0 === d ? !1 : d, c = b.scheduler) :
            e = null !== b && void 0 !== b ? b : Infinity; return vb({ connector: function () { return new ha(e, a, c) }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: d })
    } function jd(b) { return n(function (a, c) { var d = !1, e, f = !1, h = 0; a.subscribe(m(c, function (l) { f = !0; if (!b || b(l, h++, a)) d && c.error(new kd("Too many matching values")), d = !0, e = l }, function () { d ? (c.next(e), c.complete()) : c.error(f ? new ld("No matching values") : new aa) })) }) } function md(b) { return K(function (a, c) { return b <= c }) } function nd(b) {
        return 0 >= b ? E : n(function (a, c) {
            var d =
                Array(b), e = 0; a.subscribe(m(c, function (a) { var f = e++; if (f < b) d[f] = a; else { var f = f % b, l = d[f]; d[f] = a; c.next(l) } })); return function () { d = null }
        })
    } function od(b) { return n(function (a, c) { var d = !1, e = m(c, function () { null === e || void 0 === e ? void 0 : e.unsubscribe(); d = !0 }, C); q(b).subscribe(e); a.subscribe(m(c, function (a) { return d && c.next(a) })) }) } function pd(b) { return n(function (a, c) { var d = !1, e = 0; a.subscribe(m(c, function (a) { return (d || (d = !b(a, e++))) && c.next(a) })) }) } function qd() {
        for (var b = [], a = 0; a < arguments.length; a++)b[a] =
            arguments[a]; var c = O(b); return n(function (a, e) { (c ? ta(b, a, c) : ta(b, a)).subscribe(e) })
    } function ja(b, a) { return n(function (c, d) { var e = null, f = 0, h = !1; c.subscribe(m(d, function (c) { null === e || void 0 === e ? void 0 : e.unsubscribe(); var l = 0, g = f++; q(b(c, g)).subscribe(e = m(d, function (b) { return d.next(a ? a(c, b, g, l++) : b) }, function () { e = null; h && !e && d.complete() })) }, function () { (h = !0, !e) && d.complete() })) }) } function rd() { return ja(E) } function sd(b, a) { return t(a) ? ja(function () { return b }, a) : ja(function () { return b }) } function td(b,
        a) { return n(function (c, d) { var e = a; ja(function (a, c) { return b(e, a, c) }, function (a, c) { return e = c, c })(c).subscribe(d); return function () { e = null } }) } function ud(b) { return n(function (a, c) { q(b).subscribe(m(c, function () { return c.complete() }, C)); !c.closed && a.subscribe(c) }) } function vd(b, a) { void 0 === a && (a = !1); return n(function (c, d) { var e = 0; c.subscribe(m(d, function (c) { var f = b(c, e++); (f || a) && d.next(c); !f && d.complete() })) }) } function wd(b, a, c) {
            var d = t(b) || a || c ? { next: b, error: a, complete: c } : b; return d ? n(function (a, c) {
                var b;
                null === (b = d.subscribe) || void 0 === b ? void 0 : b.call(d); var e = !0; a.subscribe(m(c, function (a) { var b; null === (b = d.next) || void 0 === b ? void 0 : b.call(d, a); c.next(a) }, function () { var a; e = !1; null === (a = d.complete) || void 0 === a ? void 0 : a.call(d); c.complete() }, function (a) { var b; e = !1; null === (b = d.error) || void 0 === b ? void 0 : b.call(d, a); c.error(a) }, function () { var a, c; e && (null === (a = d.unsubscribe) || void 0 === a ? void 0 : a.call(d)); null === (c = d.finalize) || void 0 === c ? void 0 : c.call(d) }))
            }) : E
        } function xb(b, a) {
            return n(function (c, d) {
                var e =
                    null !== a && void 0 !== a ? a : {}, f = e.leading, h = void 0 === f ? !0 : f, e = e.trailing, l = void 0 === e ? !1 : e, g = !1, z = null, p = null, v = !1, n = function () { null === p || void 0 === p ? void 0 : p.unsubscribe(); p = null; l && (u(), v && d.complete()) }, t = function () { p = null; v && d.complete() }, u = function () { if (g) { g = !1; var a = z; z = null; d.next(a); !v && (p = q(b(a)).subscribe(m(d, n, t))) } }; c.subscribe(m(d, function (a) { g = !0; z = a; (!p || p.closed) && (h ? u() : p = q(b(a)).subscribe(m(d, n, t))) }, function () { v = !0; l && g && p && !p.closed || d.complete() }))
            })
        } function xd(b, a, c) {
            void 0 === a &&
            (a = I); var d = Y(b, a); return xb(function () { return d }, c)
        } function yd(b) { void 0 === b && (b = I); return n(function (a, c) { var d = b.now(); a.subscribe(m(c, function (a) { var e = b.now(), h = e - d; d = e; c.next(new Fe(a, h)) })) }) } function zd(b, a, c) { var d, e; c = null !== c && void 0 !== c ? c : ib; db(b) ? d = b : "number" === typeof b && (e = b); if (a) b = function () { return a }; else throw new TypeError("No observable provided to switch to"); if (null == d && null == e) throw new TypeError("No timeout provided."); return eb({ first: d, each: e, scheduler: c, with: b }) } function Ad(b) {
            void 0 ===
            b && (b = ka); return Q(function (a) { return { value: a, timestamp: b.now() } })
        } function Bd(b) { return n(function (a, c) { var d = new A; c.next(d.asObservable()); var e = function (a) { d.error(a); c.error(a) }; a.subscribe(m(c, function (a) { return null === d || void 0 === d ? void 0 : d.next(a) }, function () { d.complete(); c.complete() }, e)); q(b).subscribe(m(c, function () { d.complete(); c.next(d = new A) }, C, e)); return function () { null === d || void 0 === d ? void 0 : d.unsubscribe(); d = null } }) } function Cd(b, a) {
            void 0 === a && (a = 0); var c = 0 < a ? a : b; return n(function (a,
                e) { var d = [new A], h = 0; e.next(d[0].asObservable()); a.subscribe(m(e, function (a) { var f, l; try { for (var g = F(d), v = g.next(); !v.done; v = g.next())v.value.next(a) } catch (B) { f = { error: B } } finally { try { v && !v.done && (l = g.return) && l.call(g) } finally { if (f) throw f.error; } } a = h - b + 1; 0 <= a && 0 === a % c && d.shift().complete(); 0 === ++h % c && (a = new A, d.push(a), e.next(a.asObservable())) }, function () { for (; 0 < d.length;)d.shift().complete(); e.complete() }, function (a) { for (; 0 < d.length;)d.shift().error(a); e.error(a) }, function () { d = null })) })
        } function Dd(b) {
            for (var a,
                c, d = [], e = 1; e < arguments.length; e++)d[e - 1] = arguments[e]; var f = null !== (a = O(d)) && void 0 !== a ? a : I, h = null !== (c = d[0]) && void 0 !== c ? c : null, g = d[1] || Infinity; return n(function (a, c) {
                    var d = [], e = !1, l = function (a) { var c = a.subs; a.window.complete(); c.unsubscribe(); M(d, a); e && k() }, k = function () { if (d) { var a = new D; c.add(a); var e = new A, h = { window: e, subs: a, seen: 0 }; d.push(h); c.next(e.asObservable()); G(a, f, function () { return l(h) }, b) } }; null !== h && 0 <= h ? G(c, f, k, h, !0) : e = !0; k(); var n = function (a) {
                        d.slice().forEach(function (c) { return a(c.window) });
                        a(c); c.unsubscribe()
                    }; a.subscribe(m(c, function (a) { d.slice().forEach(function (c) { c.window.next(a); g <= ++c.seen && l(c) }) }, function () { return n(function (a) { return a.complete() }) }, function (a) { return n(function (c) { return c.error(a) }) })); return function () { d = null }
                })
        } function Ed(b, a) {
            return n(function (c, d) {
                var e = [], f = function (a) { for (; 0 < e.length;)e.shift().error(a); d.error(a) }; q(b).subscribe(m(d, function (c) {
                    var b = new A; e.push(b); var h = new D, g; try { g = q(a(c)) } catch (p) { f(p); return } d.next(b.asObservable()); h.add(g.subscribe(m(d,
                        function () { M(e, b); b.complete(); h.unsubscribe() }, C, f)))
                }, C)); c.subscribe(m(d, function (a) { var c, b, d = e.slice(); try { for (var f = F(d), h = f.next(); !h.done; h = f.next())h.value.next(a) } catch (B) { c = { error: B } } finally { try { h && !h.done && (b = f.return) && b.call(f) } finally { if (c) throw c.error; } } }, function () { for (; 0 < e.length;)e.shift().complete(); d.complete() }, f, function () { for (; 0 < e.length;)e.shift().unsubscribe() }))
            })
        } function Fd(b) {
            return n(function (a, c) {
                var d, e, f = function (a) { d.error(a); c.error(a) }, h = function () {
                    null === e ||
                    void 0 === e ? void 0 : e.unsubscribe(); null === d || void 0 === d ? void 0 : d.complete(); d = new A; c.next(d.asObservable()); var a; try { a = q(b()) } catch (k) { f(k); return } a.subscribe(e = m(c, h, h, f))
                }; h(); a.subscribe(m(c, function (a) { return d.next(a) }, function () { d.complete(); c.complete() }, f, function () { null === e || void 0 === e ? void 0 : e.unsubscribe(); d = null }))
            })
        } function Gd() {
            for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var c = oa(b); return n(function (a, e) {
                for (var d = b.length, h = Array(d), g = b.map(function () { return !1 }), k =
                    !1, n = function (a) { q(b[a]).subscribe(m(e, function (c) { h[a] = c; k || g[a] || (g[a] = !0, (k = g.every(E)) && (g = null)) }, C)) }, p = 0; p < d; p++)n(p); a.subscribe(m(e, function (a) { k && (a = x([a], w(h)), e.next(c ? c.apply(void 0, x([], w(a))) : a)) }))
            })
        } function Hd(b) { return pc(jb, b) } function Id() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return n(function (a, d) { jb.apply(void 0, x([a], w(b))).subscribe(d) }) } function Jd() { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return Id.apply(void 0, x([], w(b))) } function Kd(b,
            a) { for (var c = 0, d = a.length; c < d; c++)for (var e = a[c], f = Object.getOwnPropertyNames(e.prototype), h = 0, g = f.length; h < g; h++) { var k = f[h]; b.prototype[k] = e.prototype[k] } } function Ld(b) { switch (b.responseType) { case "json": return "response" in b ? b.response : JSON.parse(b.responseText); case "document": return b.responseXML; default: return "response" in b ? b.response : b.responseText } } function Ge(b, a) { return ba({ method: "GET", url: b, headers: a }) } function He(b, a, c) { return ba({ method: "POST", url: b, body: a, headers: c }) } function Ie(b,
                a) { return ba({ method: "DELETE", url: b, headers: a }) } function Je(b, a, c) { return ba({ method: "PUT", url: b, body: a, headers: c }) } function Ke(b, a, c) { return ba({ method: "PATCH", url: b, body: a, headers: c }) } function Le(b, a) { return Me(ba({ method: "GET", url: b, headers: a })) } function Ne(b) {
                    return new r(function (a) {
                        var c, d, e = T({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, b), f = e.queryParams, h = e.body, g = e.headers, k = e.url; if (!k) throw new TypeError("url is required"); if (f) {
                            var m; if (k.includes("?")) {
                                k =
                                k.split("?"); if (2 < k.length) throw new TypeError("invalid url"); m = new URLSearchParams(k[1]); (new URLSearchParams(f)).forEach(function (a, c) { return m.set(c, a) }); k = k[0] + "?" + m
                            } else m = new URLSearchParams(f), k = k + "?" + m
                        } f = {}; if (g) for (var p in g) g.hasOwnProperty(p) && (f[p.toLowerCase()] = g[p]); var n = e.crossDomain; n || "x-requested-with" in f || (f["x-requested-with"] = "XMLHttpRequest"); var t = e.xsrfCookieName, g = e.xsrfHeaderName; (e.withCredentials || !n) && t && g && (n = null !== (d = null === (c = null === document || void 0 === document ?
                            void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")\x3d([^;]*)"))) || void 0 === c ? void 0 : c.pop()) && void 0 !== d ? d : "") && (f[g] = n); c = Oe(h, f); var q = T(T({}, e), { url: k, headers: f, body: c }), u; u = b.createXHR ? b.createXHR() : new XMLHttpRequest; var r = b.progressSubscriber, e = b.includeDownloadProgress, e = void 0 === e ? !1 : e; d = b.includeUploadProgress; d = void 0 === d ? !1 : d; h = function (c, b) { u.addEventListener(c, function () { var c, d = b(); null === (c = null === r || void 0 === r ? void 0 : r.error) || void 0 === c ? void 0 : c.call(r, d); a.error(d) }) }; h("timeout",
                                function () { return new Md(u, q) }); h("abort", function () { return new wa("aborted", u, q) }); var w = function (c, b, d) { c.addEventListener(b, function (c) { a.next(new yb(c, u, q, d + "_" + c.type)) }) }; d && [zb, Ab, Nd].forEach(function (a) { return w(u.upload, a, Pe) }); r && [zb, Ab].forEach(function (a) { return u.upload.addEventListener(a, function (a) { var c; return null === (c = null === r || void 0 === r ? void 0 : r.next) || void 0 === c ? void 0 : c.call(r, a) }) }); e && [zb, Ab].forEach(function (a) { return w(u, a, Od) }); var x = function (c) {
                                    a.error(new wa("ajax error" +
                                        (c ? " " + c : ""), u, q))
                                }; u.addEventListener("error", function (a) { var c; null === (c = null === r || void 0 === r ? void 0 : r.error) || void 0 === c ? void 0 : c.call(r, a); x() }); u.addEventListener(Nd, function (c) { var b, d, e = u.status; if (400 > e) { null === (b = null === r || void 0 === r ? void 0 : r.complete) || void 0 === b ? void 0 : b.call(r); b = void 0; try { b = new yb(c, u, q, Od + "_" + c.type) } catch (ye) { a.error(ye); return } a.next(b); a.complete() } else null === (d = null === r || void 0 === r ? void 0 : r.error) || void 0 === d ? void 0 : d.call(r, c), x(e) }); e = q.user; d = q.method; h = q.async;
                        e ? u.open(d, k, h, e, q.password) : u.open(d, k, h); h && (u.timeout = q.timeout, u.responseType = q.responseType); "withCredentials" in u && (u.withCredentials = q.withCredentials); for (p in f) f.hasOwnProperty(p) && u.setRequestHeader(p, f[p]); c ? u.send(c) : u.send(); return function () { u && 4 !== u.readyState && u.abort() }
                    })
                } function Oe(b, a) {
                    var c; if (!b || "string" === typeof b || "undefined" !== typeof FormData && b instanceof FormData || "undefined" !== typeof URLSearchParams && b instanceof URLSearchParams || Bb(b, "ArrayBuffer") || Bb(b, "File") || Bb(b,
                        "Blob") || "undefined" !== typeof ReadableStream && b instanceof ReadableStream) return b; if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView(b)) return b.buffer; if ("object" === typeof b) return a["content-type"] = null !== (c = a["content-type"]) && void 0 !== c ? c : "application/json;charset\x3dutf-8", JSON.stringify(b); throw new TypeError("Unknown body type");
                } function Bb(b, a) { return Qe.call(b) === "[object " + a + "]" } var Ta = function (b, a) {
                    Ta = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) {
                        a.__proto__ =
                        b
                    } || function (a, b) { for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]) }; return Ta(b, a)
                }, T = function () { T = Object.assign || function (b) { for (var a, c = 1, d = arguments.length; c < d; c++) { a = arguments[c]; for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (b[e] = a[e]) } return b }; return T.apply(this, arguments) }, Sa = R(function (b) {
                    return function (a) {
                        b(this); this.message = a ? a.length + " errors occurred during unsubscription:\n" + a.map(function (a, b) { return b + 1 + ") " + a.toString() }).join("\n  ") : ""; this.name =
                            "UnsubscriptionError"; this.errors = a
                    }
                }), D = function () {
                    function b(a) { this.initialTeardown = a; this.closed = !1; this._finalizers = this._parentage = null } b.prototype.unsubscribe = function () {
                        var a, c, b, e, f; if (!this.closed) {
                            this.closed = !0; var h = this._parentage; if (h) if (this._parentage = null, Array.isArray(h)) try { for (var g = F(h), k = g.next(); !k.done; k = g.next())k.value.remove(this) } catch (B) { a = { error: B } } finally { try { k && !k.done && (c = g.return) && c.call(g) } finally { if (a) throw a.error; } } else h.remove(this); a = this.initialTeardown;
                            if (t(a)) try { a() } catch (B) { f = B instanceof Sa ? B.errors : [B] } if (a = this._finalizers) { this._finalizers = null; try { for (var m = F(a), p = m.next(); !p.done; p = m.next()) { var n = p.value; try { a = n, t(a) ? a() : a.unsubscribe() } catch (B) { f = null !== f && void 0 !== f ? f : [], B instanceof Sa ? f = x(x([], w(f)), w(B.errors)) : f.push(B) } } } catch (B) { b = { error: B } } finally { try { p && !p.done && (e = m.return) && e.call(m) } finally { if (b) throw b.error; } } } if (f) throw new Sa(f);
                        }
                    }; b.prototype.add = function (a) {
                        var c; if (a && a !== this) if (this.closed) t(a) ? a() : a.unsubscribe();
                        else { if (a instanceof b) { if (a.closed || a._hasParent(this)) return; a._addParent(this) } (this._finalizers = null !== (c = this._finalizers) && void 0 !== c ? c : []).push(a) }
                    }; b.prototype._hasParent = function (a) { var c = this._parentage; return c === a || Array.isArray(c) && c.includes(a) }; b.prototype._addParent = function (a) { var c = this._parentage; this._parentage = Array.isArray(c) ? (c.push(a), c) : c ? [c, a] : a }; b.prototype._removeParent = function (a) { var c = this._parentage; c === a ? this._parentage = null : Array.isArray(c) && M(c, a) }; b.prototype.remove =
                        function (a) { var c = this._finalizers; c && M(c, a); a instanceof b && a._removeParent(this) }; b.EMPTY = function () { var a = new b; a.closed = !0; return a }(); return b
                }(), Pd = D.EMPTY, S = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 }, da = {
                    setTimeout: function (b, a) {
                        for (var c = [], d = 2; d < arguments.length; d++)c[d - 2] = arguments[d]; d = da.delegate; return (null === d || void 0 === d ? 0 : d.setTimeout) ? d.setTimeout.apply(d, x([b, a], w(c))) : setTimeout.apply(void 0,
                            x([b, a], w(c)))
                    }, clearTimeout: function (b) { var a = da.delegate; return ((null === a || void 0 === a ? void 0 : a.clearTimeout) || clearTimeout)(b) }, delegate: void 0
                }, xa = J("C", void 0, void 0), U = null, na = function (b) {
                    function a(a) { var c = b.call(this) || this; c.isStopped = !1; a ? (c.destination = a, Ib(a) && a.add(c)) : c.destination = Re; return c } y(a, b); a.create = function (a, b, e) { return new ia(a, b, e) }; a.prototype.next = function (a) { this.isStopped ? Wa(J("N", a, void 0), this) : this._next(a) }; a.prototype.error = function (a) {
                        this.isStopped ? Wa(J("E",
                            void 0, a), this) : (this.isStopped = !0, this._error(a))
                    }; a.prototype.complete = function () { this.isStopped ? Wa(xa, this) : (this.isStopped = !0, this._complete()) }; a.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, b.prototype.unsubscribe.call(this), this.destination = null) }; a.prototype._next = function (a) { this.destination.next(a) }; a.prototype._error = function (a) { try { this.destination.error(a) } finally { this.unsubscribe() } }; a.prototype._complete = function () { try { this.destination.complete() } finally { this.unsubscribe() } };
                    return a
                }(D), Cb = Function.prototype.bind, Se = function () { function b(a) { this.partialObserver = a } b.prototype.next = function (a) { var c = this.partialObserver; if (c.next) try { c.next(a) } catch (d) { Ca(d) } }; b.prototype.error = function (a) { var c = this.partialObserver; if (c.error) try { c.error(a) } catch (d) { Ca(d) } else Ca(a) }; b.prototype.complete = function () { var a = this.partialObserver; if (a.complete) try { a.complete() } catch (c) { Ca(c) } }; return b }(), ia = function (b) {
                    function a(a, d, e) {
                        var c = b.call(this) || this; t(a) || !a ? a = {
                            next: null !== a &&
                                void 0 !== a ? a : void 0, error: null !== d && void 0 !== d ? d : void 0, complete: null !== e && void 0 !== e ? e : void 0
                        } : c && S.useDeprecatedNextContext && (d = Object.create(a), d.unsubscribe = function () { return c.unsubscribe() }, a = { next: a.next && Cb.call(a.next, d), error: a.error && Cb.call(a.error, d), complete: a.complete && Cb.call(a.complete, d) }); c.destination = new Se(a); return c
                    } y(a, b); return a
                }(na), Re = { closed: !0, next: C, error: function (b) { throw b; }, complete: C }, pa = "function" === typeof Symbol && Symbol.observable || "@@observable", r = function () {
                    function b(a) {
                        a &&
                        (this._subscribe = a)
                    } b.prototype.lift = function (a) { var c = new b; c.source = this; c.operator = a; return c }; b.prototype.subscribe = function (a, c, b) { var d = this, f = ce(a) ? a : new ia(a, c, b); Ba(function () { var a = d.operator, c = d.source; f.add(a ? a.call(f, c) : c ? d._subscribe(f) : d._trySubscribe(f)) }); return f }; b.prototype._trySubscribe = function (a) { try { return this._subscribe(a) } catch (c) { a.error(c) } }; b.prototype.forEach = function (a, c) {
                        var b = this; c = Lb(c); return new c(function (c, d) {
                            var e = new ia({
                                next: function (c) {
                                    try { a(c) } catch (k) {
                                        d(k),
                                        e.unsubscribe()
                                    }
                                }, error: d, complete: c
                            }); b.subscribe(e)
                        })
                    }; b.prototype._subscribe = function (a) { var c; return null === (c = this.source) || void 0 === c ? void 0 : c.subscribe(a) }; b.prototype[pa] = function () { return this }; b.prototype.pipe = function () { for (var a = [], c = 0; c < arguments.length; c++)a[c] = arguments[c]; return Kb(a)(this) }; b.prototype.toPromise = function (a) { var c = this; a = Lb(a); return new a(function (a, b) { var d; c.subscribe(function (a) { return d = a }, function (a) { return b(a) }, function () { return a(d) }) }) }; b.create = function (a) { return new b(a) };
                    return b
                }(), Ya = function (b) {
                    function a(a, d, e, f, h, g) { var c = b.call(this, a) || this; c.onFinalize = h; c.shouldUnsubscribe = g; c._next = d ? function (c) { try { d(c) } catch (p) { a.error(p) } } : b.prototype._next; c._error = f ? function (c) { try { f(c) } catch (p) { a.error(p) } finally { this.unsubscribe() } } : b.prototype._error; c._complete = e ? function () { try { e() } catch (z) { a.error(z) } finally { this.unsubscribe() } } : b.prototype._complete; return c } y(a, b); a.prototype.unsubscribe = function () {
                        var a; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                            var d =
                                this.closed; b.prototype.unsubscribe.call(this); !d && (null === (a = this.onFinalize) || void 0 === a ? void 0 : a.call(this))
                        }
                    }; return a
                }(na), Ra = function (b) {
                    function a(a, d) { var c = b.call(this) || this; c.source = a; c.subjectFactory = d; c._subject = null; c._refCount = 0; c._connection = null; t(null === a || void 0 === a ? void 0 : a.lift) && (c.lift = a.lift); return c } y(a, b); a.prototype._subscribe = function (a) { return this.getSubject().subscribe(a) }; a.prototype.getSubject = function () {
                        var a = this._subject; if (!a || a.isStopped) this._subject = this.subjectFactory();
                        return this._subject
                    }; a.prototype._teardown = function () { this._refCount = 0; var a = this._connection; this._subject = this._connection = null; null === a || void 0 === a ? void 0 : a.unsubscribe() }; a.prototype.connect = function () { var a = this, b = this._connection; if (!b) { var b = this._connection = new D, e = this.getSubject(); b.add(this.source.subscribe(m(e, void 0, function () { a._teardown(); e.complete() }, function (b) { a._teardown(); e.error(b) }, function () { return a._teardown() }))); b.closed && (this._connection = null, b = D.EMPTY) } return b }; a.prototype.refCount =
                        function () { return Za()(this) }; return a
                }(r), Da = { now: function () { return (Da.delegate || performance).now() }, delegate: void 0 }, N = {
                    schedule: function (b) { var a = requestAnimationFrame, c = cancelAnimationFrame, d = N.delegate; d && (a = d.requestAnimationFrame, c = d.cancelAnimationFrame); var e = a(function (a) { c = void 0; b(a) }); return new D(function () { return null === c || void 0 === c ? void 0 : c(e) }) }, requestAnimationFrame: function () {
                        for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; a = N.delegate; return ((null === a || void 0 === a ? void 0 :
                            a.requestAnimationFrame) || requestAnimationFrame).apply(void 0, x([], w(b)))
                    }, cancelAnimationFrame: function () { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; a = N.delegate; return ((null === a || void 0 === a ? void 0 : a.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, x([], w(b))) }, delegate: void 0
                }, Te = Mb(), Qd = R(function (b) { return function () { b(this); this.name = "ObjectUnsubscribedError"; this.message = "object unsubscribed" } }), A = function (b) {
                    function a() {
                        var a = b.call(this) || this; a.closed = !1; a.currentObservers =
                            null; a.observers = []; a.isStopped = !1; a.hasError = !1; a.thrownError = null; return a
                    } y(a, b); a.prototype.lift = function (a) { var b = new Db(this, this); b.operator = a; return b }; a.prototype._throwIfClosed = function () { if (this.closed) throw new Qd; }; a.prototype.next = function (a) {
                        var b = this; Ba(function () {
                            var c, d; b._throwIfClosed(); if (!b.isStopped) {
                                b.currentObservers || (b.currentObservers = Array.from(b.observers)); try { for (var h = F(b.currentObservers), g = h.next(); !g.done; g = h.next())g.value.next(a) } catch (k) { c = { error: k } } finally {
                                    try {
                                        g &&
                                        !g.done && (d = h.return) && d.call(h)
                                    } finally { if (c) throw c.error; }
                                }
                            }
                        })
                    }; a.prototype.error = function (a) { var b = this; Ba(function () { b._throwIfClosed(); if (!b.isStopped) { b.hasError = b.isStopped = !0; b.thrownError = a; for (var c = b.observers; c.length;)c.shift().error(a) } }) }; a.prototype.complete = function () { var a = this; Ba(function () { a._throwIfClosed(); if (!a.isStopped) { a.isStopped = !0; for (var b = a.observers; b.length;)b.shift().complete() } }) }; a.prototype.unsubscribe = function () {
                        this.isStopped = this.closed = !0; this.observers = this.currentObservers =
                            null
                    }; Object.defineProperty(a.prototype, "observed", { get: function () { var a; return 0 < (null === (a = this.observers) || void 0 === a ? void 0 : a.length) }, enumerable: !1, configurable: !0 }); a.prototype._trySubscribe = function (a) { this._throwIfClosed(); return b.prototype._trySubscribe.call(this, a) }; a.prototype._subscribe = function (a) { this._throwIfClosed(); this._checkFinalizedStatuses(a); return this._innerSubscribe(a) }; a.prototype._innerSubscribe = function (a) {
                        var b = this, c = this.isStopped, f = this.observers; if (this.hasError ||
                            c) return Pd; this.currentObservers = null; f.push(a); return new D(function () { b.currentObservers = null; M(f, a) })
                    }; a.prototype._checkFinalizedStatuses = function (a) { var b = this.thrownError, c = this.isStopped; this.hasError ? a.error(b) : c && a.complete() }; a.prototype.asObservable = function () { var a = new r; a.source = this; return a }; a.create = function (a, b) { return new Db(a, b) }; return a
                }(r), Db = function (b) {
                    function a(a, d) { var c = b.call(this) || this; c.destination = a; c.source = d; return c } y(a, b); a.prototype.next = function (a) {
                        var b, c;
                        null === (c = null === (b = this.destination) || void 0 === b ? void 0 : b.next) || void 0 === c ? void 0 : c.call(b, a)
                    }; a.prototype.error = function (a) { var b, c; null === (c = null === (b = this.destination) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a) }; a.prototype.complete = function () { var a, b; null === (b = null === (a = this.destination) || void 0 === a ? void 0 : a.complete) || void 0 === b ? void 0 : b.call(a) }; a.prototype._subscribe = function (a) {
                        var b, c; return null !== (c = null === (b = this.source) || void 0 === b ? void 0 : b.subscribe(a)) && void 0 !== c ?
                            c : Pd
                    }; return a
                }(A), Zc = function (b) {
                    function a(a) { var c = b.call(this) || this; c._value = a; return c } y(a, b); Object.defineProperty(a.prototype, "value", { get: function () { return this.getValue() }, enumerable: !1, configurable: !0 }); a.prototype._subscribe = function (a) { var c = b.prototype._subscribe.call(this, a); !c.closed && a.next(this._value); return c }; a.prototype.getValue = function () { var a = this.thrownError, b = this._value; if (this.hasError) throw a; this._throwIfClosed(); return b }; a.prototype.next = function (a) {
                        b.prototype.next.call(this,
                            this._value = a)
                    }; return a
                }(A), ka = { now: function () { return (ka.delegate || Date).now() }, delegate: void 0 }, ha = function (b) {
                    function a(a, d, e) { void 0 === a && (a = Infinity); void 0 === d && (d = Infinity); void 0 === e && (e = ka); var c = b.call(this) || this; c._bufferSize = a; c._windowTime = d; c._timestampProvider = e; c._buffer = []; c._infiniteTimeWindow = Infinity === d; c._bufferSize = Math.max(1, a); c._windowTime = Math.max(1, d); return c } y(a, b); a.prototype.next = function (a) {
                        var c = this._buffer, e = this._infiniteTimeWindow, f = this._timestampProvider,
                        h = this._windowTime; this.isStopped || (c.push(a), !e && c.push(f.now() + h)); this._trimBuffer(); b.prototype.next.call(this, a)
                    }; a.prototype._subscribe = function (a) { this._throwIfClosed(); this._trimBuffer(); for (var b = this._innerSubscribe(a), c = this._infiniteTimeWindow, f = this._buffer.slice(), h = 0; h < f.length && !a.closed; h += c ? 1 : 2)a.next(f[h]); this._checkFinalizedStatuses(a); return b }; a.prototype._trimBuffer = function () {
                        var a = this._bufferSize, b = this._timestampProvider, e = this._buffer, f = this._infiniteTimeWindow, h = (f ? 1 :
                            2) * a; Infinity > a && h < e.length && e.splice(0, e.length - h); if (!f) { a = b.now(); b = 0; for (f = 1; f < e.length && e[f] <= a; f += 2)b = f; b && e.splice(0, b + 1) }
                    }; return a
                }(A), fb = function (b) {
                    function a() { var a = null !== b && b.apply(this, arguments) || this; a._value = null; a._hasValue = !1; a._isComplete = !1; return a } y(a, b); a.prototype._checkFinalizedStatuses = function (a) { var b = this._hasValue, c = this._value, f = this.thrownError, h = this.isStopped, g = this._isComplete; if (this.hasError) a.error(f); else if (h || g) b && a.next(c), a.complete() }; a.prototype.next =
                        function (a) { this.isStopped || (this._value = a, this._hasValue = !0) }; a.prototype.complete = function () { var a = this._hasValue, d = this._value; this._isComplete || (this._isComplete = !0, a && b.prototype.next.call(this, d), b.prototype.complete.call(this)) }; return a
                }(A), la = {
                    setInterval: function (b, a) { for (var c = [], d = 2; d < arguments.length; d++)c[d - 2] = arguments[d]; d = la.delegate; return (null === d || void 0 === d ? 0 : d.setInterval) ? d.setInterval.apply(d, x([b, a], w(c))) : setInterval.apply(void 0, x([b, a], w(c))) }, clearInterval: function (b) {
                        var a =
                            la.delegate; return ((null === a || void 0 === a ? void 0 : a.clearInterval) || clearInterval)(b)
                    }, delegate: void 0
                }, ya = function (b) {
                    function a(a, d) { var c = b.call(this, a, d) || this; c.scheduler = a; c.work = d; c.pending = !1; return c } y(a, b); a.prototype.schedule = function (a, b) { var c; void 0 === b && (b = 0); if (this.closed) return this; this.state = a; a = this.id; var d = this.scheduler; null != a && (this.id = this.recycleAsyncId(d, a, b)); this.pending = !0; this.delay = b; this.id = null !== (c = this.id) && void 0 !== c ? c : this.requestAsyncId(d, this.id, b); return this };
                    a.prototype.requestAsyncId = function (a, b, e) { void 0 === e && (e = 0); return la.setInterval(a.flush.bind(a, this), e) }; a.prototype.recycleAsyncId = function (a, b, e) { void 0 === e && (e = 0); if (null != e && this.delay === e && !1 === this.pending) return b; null != b && la.clearInterval(b) }; a.prototype.execute = function (a, b) { if (this.closed) return Error("executing a cancelled action"); this.pending = !1; if (a = this._execute(a, b)) return a; !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)) }; a.prototype._execute =
                        function (a, b) { b = !1; var c; try { this.work(a) } catch (f) { b = !0, c = f ? f : Error("Scheduled action threw falsy error") } if (b) return this.unsubscribe(), c }; a.prototype.unsubscribe = function () { if (!this.closed) { var a = this.id, d = this.scheduler, e = d.actions; this.work = this.state = this.scheduler = null; this.pending = !1; M(e, this); null != a && (this.id = this.recycleAsyncId(d, a, null)); this.delay = null; b.prototype.unsubscribe.call(this) } }; return a
                }(function (b) {
                    function a(a, d) { return b.call(this) || this } y(a, b); a.prototype.schedule = function (a,
                        b) { return this }; return a
                }(D)), Ue = 1, Eb, $a = {}, Ve = function (b) { var a = Ue++; $a[a] = !0; Eb || (Eb = Promise.resolve()); Eb.then(function () { return Nb(a) && b() }); return a }, We = function (b) { Nb(b) }, ma = { setImmediate: function () { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; a = ma.delegate; return ((null === a || void 0 === a ? void 0 : a.setImmediate) || Ve).apply(void 0, x([], w(b))) }, clearImmediate: function (b) { var a = ma.delegate; return ((null === a || void 0 === a ? void 0 : a.clearImmediate) || We)(b) }, delegate: void 0 }, Xe = function (b) {
                    function a(a,
                        d) { var c = b.call(this, a, d) || this; c.scheduler = a; c.work = d; return c } y(a, b); a.prototype.requestAsyncId = function (a, d, e) { void 0 === e && (e = 0); if (null !== e && 0 < e) return b.prototype.requestAsyncId.call(this, a, d, e); a.actions.push(this); return a._scheduled || (a._scheduled = ma.setImmediate(a.flush.bind(a, void 0))) }; a.prototype.recycleAsyncId = function (a, d, e) {
                            var c; void 0 === e && (e = 0); if (null != e ? 0 < e : 0 < this.delay) return b.prototype.recycleAsyncId.call(this, a, d, e); e = a.actions; null != d && (null === (c = e[e.length - 1]) || void 0 ===
                                c ? void 0 : c.id) !== d && (ma.clearImmediate(d), a._scheduled === d && (a._scheduled = void 0))
                        }; return a
                }(ya), Fb = function () { function b(a, c) { void 0 === c && (c = b.now); this.schedulerActionCtor = a; this.now = c } b.prototype.schedule = function (a, b, d) { void 0 === b && (b = 0); return (new this.schedulerActionCtor(this, a)).schedule(d, b) }; b.now = ka.now; return b }(), za = function (b) {
                    function a(a, d) { void 0 === d && (d = Fb.now); a = b.call(this, a, d) || this; a.actions = []; a._active = !1; return a } y(a, b); a.prototype.flush = function (a) {
                        var b = this.actions; if (this._active) b.push(a);
                        else { var c; this._active = !0; do if (c = a.execute(a.state, a.delay)) break; while (a = b.shift()); this._active = !1; if (c) { for (; a = b.shift();)a.unsubscribe(); throw c; } }
                    }; return a
                }(Fb), Rd = new (function (b) {
                    function a() { return null !== b && b.apply(this, arguments) || this } y(a, b); a.prototype.flush = function (a) {
                        this._active = !0; var b = this._scheduled; this._scheduled = void 0; var c = this.actions, f; a = a || c.shift(); do if (f = a.execute(a.state, a.delay)) break; while ((a = c[0]) && a.id === b && c.shift()); this._active = !1; if (f) {
                            for (; (a = c[0]) && a.id ===
                                b && c.shift();)a.unsubscribe(); throw f;
                        }
                    }; return a
                }(za))(Xe), I = new za(ya), ib = I, Ye = function (b) {
                    function a(a, d) { var c = b.call(this, a, d) || this; c.scheduler = a; c.work = d; return c } y(a, b); a.prototype.schedule = function (a, d) { void 0 === d && (d = 0); if (0 < d) return b.prototype.schedule.call(this, a, d); this.delay = d; this.state = a; this.scheduler.flush(this); return this }; a.prototype.execute = function (a, d) { return 0 < d || this.closed ? b.prototype.execute.call(this, a, d) : this._execute(a, d) }; a.prototype.requestAsyncId = function (a, d, e) {
                        void 0 ===
                        e && (e = 0); if (null != e && 0 < e || null == e && 0 < this.delay) return b.prototype.requestAsyncId.call(this, a, d, e); a.flush(this); return 0
                    }; return a
                }(ya), Sd = new (function (b) { function a() { return null !== b && b.apply(this, arguments) || this } y(a, b); return a }(za))(Ye), Ze = function (b) {
                    function a(a, d) { var c = b.call(this, a, d) || this; c.scheduler = a; c.work = d; return c } y(a, b); a.prototype.requestAsyncId = function (a, d, e) {
                        void 0 === e && (e = 0); if (null !== e && 0 < e) return b.prototype.requestAsyncId.call(this, a, d, e); a.actions.push(this); return a._scheduled ||
                            (a._scheduled = N.requestAnimationFrame(function () { return a.flush(void 0) }))
                    }; a.prototype.recycleAsyncId = function (a, d, e) { var c; void 0 === e && (e = 0); if (null != e ? 0 < e : 0 < this.delay) return b.prototype.recycleAsyncId.call(this, a, d, e); e = a.actions; null != d && (null === (c = e[e.length - 1]) || void 0 === c ? void 0 : c.id) !== d && (N.cancelAnimationFrame(d), a._scheduled = void 0) }; return a
                }(ya), Td = new (function (b) {
                    function a() { return null !== b && b.apply(this, arguments) || this } y(a, b); a.prototype.flush = function (a) {
                        this._active = !0; var b =
                            this._scheduled; this._scheduled = void 0; var c = this.actions, f; a = a || c.shift(); do if (f = a.execute(a.state, a.delay)) break; while ((a = c[0]) && a.id === b && c.shift()); this._active = !1; if (f) { for (; (a = c[0]) && a.id === b && c.shift();)a.unsubscribe(); throw f; }
                    }; return a
                }(za))(Ze), Ud = function (b) {
                    function a(a, d) { void 0 === a && (a = Gb); void 0 === d && (d = Infinity); var c = b.call(this, a, function () { return c.frame }) || this; c.maxFrames = d; c.frame = 0; c.index = -1; return c } y(a, b); a.prototype.flush = function () {
                        for (var a = this.actions, b = this.maxFrames,
                            e, f; (f = a[0]) && f.delay <= b && !(a.shift(), this.frame = f.delay, e = f.execute(f.state, f.delay));); if (e) { for (; f = a.shift();)f.unsubscribe(); throw e; }
                    }; a.frameTimeFactor = 10; return a
                }(za), Gb = function (b) {
                    function a(a, d, e) { void 0 === e && (e = a.index += 1); var c = b.call(this, a, d) || this; c.scheduler = a; c.work = d; c.index = e; c.active = !0; c.index = a.index = e; return c } y(a, b); a.prototype.schedule = function (c, d) {
                        void 0 === d && (d = 0); if (Number.isFinite(d)) {
                            if (!this.id) return b.prototype.schedule.call(this, c, d); this.active = !1; var e = new a(this.scheduler,
                                this.work); this.add(e); return e.schedule(c, d)
                        } return D.EMPTY
                    }; a.prototype.requestAsyncId = function (b, d, e) { void 0 === e && (e = 0); this.delay = b.frame + e; b = b.actions; b.push(this); b.sort(a.sortActions); return 1 }; a.prototype.recycleAsyncId = function (a, b, e) { }; a.prototype._execute = function (a, d) { if (!0 === this.active) return b.prototype._execute.call(this, a, d) }; a.sortActions = function (a, b) { return a.delay === b.delay ? a.index === b.index ? 0 : a.index > b.index ? 1 : -1 : a.delay > b.delay ? 1 : -1 }; return a
                }(ya), L = new r(function (b) { return b.complete() }),
                    bb = function (b) { return b && "number" === typeof b.length && "function" !== typeof b }, ab; ab = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"; (function (b) { b.NEXT = "N"; b.ERROR = "E"; b.COMPLETE = "C" })(g.NotificationKind || (g.NotificationKind = {})); var Pa = function () {
                        function b(a, b, d) { this.kind = a; this.value = b; this.error = d; this.hasValue = "N" === a } b.prototype.observe = function (a) { return Fa(this, a) }; b.prototype.do = function (a, b, d) {
                            var c = this.kind, f = this.value, h = this.error; return "N" === c ? null === a || void 0 ===
                                a ? void 0 : a(f) : "E" === c ? null === b || void 0 === b ? void 0 : b(h) : null === d || void 0 === d ? void 0 : d()
                        }; b.prototype.accept = function (a, b, d) { return t(null === a || void 0 === a ? void 0 : a.next) ? this.observe(a) : this.do(a, b, d) }; b.prototype.toObservable = function () { var a = this.kind, b = this.value, d = this.error, b = "N" === a ? cb(b) : "E" === a ? Wb(function () { return d }) : "C" === a ? L : 0; if (!b) throw new TypeError("Unexpected notification kind " + a); return b }; b.createNext = function (a) { return new b("N", a) }; b.createError = function (a) {
                            return new b("E", void 0,
                                a)
                        }; b.createComplete = function () { return b.completeNotification }; b.completeNotification = new b("C"); return b
                    }(), aa = R(function (b) { return function () { b(this); this.name = "EmptyError"; this.message = "no elements in sequence" } }), rb = R(function (b) { return function () { b(this); this.name = "ArgumentOutOfRangeError"; this.message = "argument out of range" } }), ld = R(function (b) { return function (a) { b(this); this.name = "NotFoundError"; this.message = a } }), kd = R(function (b) {
                        return function (a) {
                            b(this); this.name = "SequenceError"; this.message =
                                a
                        }
                    }), Xb = R(function (b) { return function (a) { void 0 === a && (a = null); b(this); this.message = "Timeout has occurred"; this.name = "TimeoutError"; this.info = a } }), le = Array.isArray, me = Array.isArray, ne = Object.getPrototypeOf, oe = Object.prototype, pe = Object.keys, $e = { connector: function () { return new A }, resetOnDisconnect: !0 }, te = ["addListener", "removeListener"], re = ["addEventListener", "removeEventListener"], ve = ["on", "off"], Vd = new r(C), we = Array.isArray, Ae = function (b, a) { return b.push(a), b }, Ce = { connector: function () { return new A } },
                        Fe = function () { return function (b, a) { this.value = b; this.interval = a } }(), af = Object.freeze({
                            audit: kb, auditTime: ic, buffer: jc, bufferCount: kc, bufferTime: lc, bufferToggle: mc, bufferWhen: nc, catchError: lb, combineAll: Ja, combineLatestAll: Ja, combineLatest: nb, combineLatestWith: qc, concat: sc, concatAll: Ha, concatMap: Ka, concatMapTo: rc, concatWith: tc, connect: La, count: uc, debounce: vc, debounceTime: wc, defaultIfEmpty: ua, delay: xc, delayWhen: Ma, dematerialize: yc, distinct: zc, distinctUntilChanged: qb, distinctUntilKeyChanged: Ac, elementAt: Bc,
                            endWith: Cc, every: Dc, exhaust: Oa, exhaustAll: Oa, exhaustMap: Na, expand: Ec, filter: K, finalize: Fc, find: Gc, findIndex: Ic, first: Jc, groupBy: Kc, ignoreElements: ob, isEmpty: Lc, last: Mc, map: Q, mapTo: pb, materialize: Nc, max: Oc, merge: Rc, mergeAll: sa, flatMap: H, mergeMap: H, mergeMapTo: Pc, mergeScan: Qc, mergeWith: Sc, min: Tc, multicast: Qa, observeOn: qa, onErrorResumeNext: Uc, pairwise: Vc, partition: function (b, a) { return function (c) { return [K(b, a)(c), K(gc(b, a))(c)] } }, pluck: Wc, publish: Xc, publishBehavior: Yc, publishLast: $c, publishReplay: ad,
                            race: function () { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; return tb.apply(void 0, x([], w(Z(b)))) }, raceWith: tb, reduce: fa, repeat: bd, repeatWhen: cd, retry: dd, retryWhen: ed, refCount: Za, sample: ub, sampleTime: fd, scan: gd, sequenceEqual: hd, share: vb, shareReplay: id, single: jd, skip: md, skipLast: nd, skipUntil: od, skipWhile: pd, startWith: qd, subscribeOn: ra, switchAll: rd, switchMap: ja, switchMapTo: sd, switchScan: td, take: ga, takeLast: sb, takeUntil: ud, takeWhile: vd, tap: wd, throttle: xb, throttleTime: xd, throwIfEmpty: va,
                            timeInterval: yd, timeout: eb, timeoutWith: zd, timestamp: Ad, toArray: mb, window: Bd, windowCount: Cd, windowTime: Dd, windowToggle: Ed, windowWhen: Fd, withLatestFrom: Gd, zip: Id, zipAll: Hd, zipWith: Jd
                        }), Aa = function () { return function (b, a) { void 0 === a && (a = Infinity); this.subscribedFrame = b; this.unsubscribedFrame = a } }(), Wd = function () {
                            function b() { this.subscriptions = [] } b.prototype.logSubscribedFrame = function () { this.subscriptions.push(new Aa(this.scheduler.now())); return this.subscriptions.length - 1 }; b.prototype.logUnsubscribedFrame =
                                function (a) { var b = this.subscriptions; b[a] = new Aa(b[a].subscribedFrame, this.scheduler.now()) }; return b
                        }(), Hb = function (b) {
                            function a(a, d) { var c = b.call(this, function (a) { var b = this, c = b.logSubscribedFrame(), d = new D; d.add(new D(function () { b.logUnsubscribedFrame(c) })); b.scheduleMessages(a); return d }) || this; c.messages = a; c.subscriptions = []; c.scheduler = d; return c } y(a, b); a.prototype.scheduleMessages = function (a) {
                                for (var b = this.messages.length, c = 0; c < b; c++) {
                                    var f = this.messages[c]; a.add(this.scheduler.schedule(function (a) {
                                        Fa(a.message.notification,
                                            a.subscriber)
                                    }, f.frame, { message: f, subscriber: a }))
                                }
                            }; return a
                        }(r); Kd(Hb, [Wd]); var Xd = function (b) {
                            function a(a, d) { var c = b.call(this) || this; c.messages = a; c.subscriptions = []; c.scheduler = d; return c } y(a, b); a.prototype._subscribe = function (a) { var c = this, e = c.logSubscribedFrame(), f = new D; f.add(new D(function () { c.logUnsubscribedFrame(e) })); f.add(b.prototype._subscribe.call(this, a)); return f }; a.prototype.setup = function () {
                                for (var a = this, b = a.messages.length, e = function (b) {
                                    (function () {
                                        var c = a.messages[b], d = c.notification;
                                        a.scheduler.schedule(function () { Fa(d, a) }, c.frame)
                                    })()
                                }, f = 0; f < b; f++)e(f)
                            }; return a
                        }(A); Kd(Xd, [Wd]); var bf = function (b) {
                            function a(a) { var c = b.call(this, Gb, 750) || this; c.assertDeepEqual = a; c.hotObservables = []; c.coldObservables = []; c.flushTests = []; c.runMode = !1; return c } y(a, b); a.prototype.createTime = function (b) { b = this.runMode ? b.trim().indexOf("|") : b.indexOf("|"); if (-1 === b) throw Error('marble diagram for time should have a completion marker "|"'); return b * a.frameTimeFactor }; a.prototype.createColdObservable =
                                function (b, d, e) { if (-1 !== b.indexOf("^")) throw Error('cold observable cannot have subscription offset "^"'); if (-1 !== b.indexOf("!")) throw Error('cold observable cannot have unsubscription marker "!"'); b = a.parseMarbles(b, d, e, void 0, this.runMode); b = new Hb(b, this); this.coldObservables.push(b); return b }; a.prototype.createHotObservable = function (b, d, e) {
                                    if (-1 !== b.indexOf("!")) throw Error('hot observable cannot have unsubscription marker "!"'); b = a.parseMarbles(b, d, e, void 0, this.runMode); b = new Xd(b, this); this.hotObservables.push(b);
                                    return b
                                }; a.prototype.materializeInnerObservable = function (a, b) { var c = this, d = []; a.subscribe({ next: function (a) { d.push({ frame: c.frame - b, notification: J("N", a, void 0) }) }, error: function (a) { d.push({ frame: c.frame - b, notification: J("E", void 0, a) }) }, complete: function () { d.push({ frame: c.frame - b, notification: xa }) } }); return d }; a.prototype.expectObservable = function (b, d) {
                                    var c = this; void 0 === d && (d = null); var f = [], g = { actual: f, ready: !1 }; d = a.parseMarblesAsSubscriptions(d, this.runMode); var l = Infinity === d.subscribedFrame ?
                                        0 : d.subscribedFrame; d = d.unsubscribedFrame; var k; this.schedule(function () { k = b.subscribe({ next: function (a) { a = a instanceof r ? c.materializeInnerObservable(a, c.frame) : a; f.push({ frame: c.frame, notification: J("N", a, void 0) }) }, error: function (a) { f.push({ frame: c.frame, notification: J("E", void 0, a) }) }, complete: function () { f.push({ frame: c.frame, notification: xa }) } }) }, l); Infinity !== d && this.schedule(function () { return k.unsubscribe() }, d); this.flushTests.push(g); var m = this.runMode; return {
                                            toBe: function (b, c, d) {
                                                g.ready =
                                                !0; g.expected = a.parseMarbles(b, c, d, !0, m)
                                            }, toEqual: function (a) { g.ready = !0; g.expected = []; c.schedule(function () { k = a.subscribe({ next: function (a) { a = a instanceof r ? c.materializeInnerObservable(a, c.frame) : a; g.expected.push({ frame: c.frame, notification: J("N", a, void 0) }) }, error: function (a) { g.expected.push({ frame: c.frame, notification: J("E", void 0, a) }) }, complete: function () { g.expected.push({ frame: c.frame, notification: xa }) } }) }, l) }
                                        }
                                }; a.prototype.expectSubscriptions = function (b) {
                                    var c = { actual: b, ready: !1 }; this.flushTests.push(c);
                                    var e = this.runMode; return { toBe: function (b) { b = "string" === typeof b ? [b] : b; c.ready = !0; c.expected = b.map(function (b) { return a.parseMarblesAsSubscriptions(b, e) }).filter(function (a) { return Infinity !== a.subscribedFrame }) } }
                                }; a.prototype.flush = function () { for (var a = this, d = this.hotObservables; 0 < d.length;)d.shift().setup(); b.prototype.flush.call(this); this.flushTests = this.flushTests.filter(function (b) { return b.ready ? (a.assertDeepEqual(b.actual, b.expected), !1) : !0 }) }; a.parseMarblesAsSubscriptions = function (a, b) {
                                    var c =
                                        this; void 0 === b && (b = !1); if ("string" !== typeof a) return new Aa(Infinity); var d = x([], w(a)); a = d.length; for (var g = -1, l = Infinity, k = Infinity, m = 0, p = function (a) {
                                            var e = m, f = function (a) { e += a * c.frameTimeFactor }, h = d[a]; switch (h) {
                                                case " ": b || f(1); break; case "-": f(1); break; case "(": g = m; f(1); break; case ")": g = -1; f(1); break; case "^": if (Infinity !== l) throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one."); l = -1 < g ? g : m; f(1); break; case "!": if (Infinity !== k) throw Error("found a second unsubscription point '!' in a subscription marble diagram. There can only be one.");
                                                    k = -1 < g ? g : m; break; default: if (b && h.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) { var p = d.slice(a).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /); if (p) { a += p[0].length - 1; var h = parseFloat(p[1]), q = void 0; switch (p[2]) { case "ms": q = h; break; case "s": q = 1E3 * h; break; case "m": q = 6E4 * h }f(q / n.frameTimeFactor); break } } throw Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" + h + "'.");
                                            }m = e; r = a
                                        }, n = this, r, q = 0; q < a; q++)p(q), q = r; return 0 > k ? new Aa(l) : new Aa(l, k)
                                }; a.parseMarbles = function (a,
                                    b, e, f, g) {
                                        var c = this; void 0 === f && (f = !1); void 0 === g && (g = !1); if (-1 !== a.indexOf("!")) throw Error('conventional marble diagrams cannot have the unsubscription marker "!"'); var d = x([], w(a)), h = d.length, p = []; a = g ? a.replace(/^[ ]+/, "").indexOf("^") : a.indexOf("^"); var m = -1 === a ? 0 : a * -this.frameTimeFactor, n = "object" !== typeof b ? function (a) { return a } : function (a) { return f && b[a] instanceof Hb ? b[a].messages : b[a] }, q = -1; a = function (a) {
                                            var b = m, f = function (a) { b += a * c.frameTimeFactor }, h = void 0, k = d[a]; switch (k) {
                                                case " ": g || f(1);
                                                    break; case "-": f(1); break; case "(": q = m; f(1); break; case ")": q = -1; f(1); break; case "|": h = xa; f(1); break; case "^": f(1); break; case "#": h = J("E", void 0, e || "error"); f(1); break; default: if (g && k.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) { var l = d.slice(a).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /); if (l) { a += l[0].length - 1; var k = parseFloat(l[1]), v = void 0; switch (l[2]) { case "ms": v = k; break; case "s": v = 1E3 * k; break; case "m": v = 6E4 * k }f(v / r.frameTimeFactor); break } } h = J("N", n(k), void 0); f(1)
                                            }h && p.push({
                                                frame: -1 < q ? q : m,
                                                notification: h
                                            }); m = b; t = a
                                        }; for (var r = this, t, y = 0; y < h; y++)a(y), y = t; return p
                                }; a.prototype.createAnimator = function () {
                                    var b = this; if (!this.runMode) throw Error("animate() must only be used in run mode"); var d = 0, e; return {
                                        animate: function (c) {
                                            var d, f; if (e) throw Error("animate() must not be called more than once within run()"); if (/[|#]/.test(c)) throw Error("animate() must not complete or error"); e = new Map; c = a.parseMarbles(c, void 0, void 0, void 0, !0); try {
                                                for (var g = F(c), m = g.next(); !m.done; m = g.next())b.schedule(function () {
                                                    var a,
                                                    c, d = b.now(), f = Array.from(e.values()); e.clear(); try { for (var g = (a = void 0, F(f)), h = g.next(); !h.done; h = g.next()) { var k = h.value; k(d) } } catch (X) { a = { error: X } } finally { try { h && !h.done && (c = g.return) && c.call(g) } finally { if (a) throw a.error; } }
                                                }, m.value.frame)
                                            } catch (p) { d = { error: p } } finally { try { m && !m.done && (f = g.return) && f.call(g) } finally { if (d) throw d.error; } }
                                        }, delegate: {
                                            requestAnimationFrame: function (a) { if (!e) throw Error("animate() was not called within run()"); var b = ++d; e.set(b, a); return b }, cancelAnimationFrame: function (a) {
                                                if (!e) throw Error("animate() was not called within run()");
                                                e.delete(a)
                                            }
                                        }
                                    }
                                }; a.prototype.createDelegates = function () {
                                    var a = this, b = 0, e = new Map, f = function () {
                                        var b = a.now(), c = Array.from(e.values()).filter(function (a) { return a.due <= b }), d = c.filter(function (a) { return "immediate" === a.type }); if (0 < d.length) d = d[0], c = d.handle, d = d.handler, e.delete(c), d(); else if (d = c.filter(function (a) { return "interval" === a.type }), 0 < d.length) { var c = d[0], g = c.duration, d = c.handler; c.due = b + g; c.subscription = a.schedule(f, g); d() } else if (c = c.filter(function (a) { return "timeout" === a.type }), 0 < c.length) d =
                                            c[0], c = d.handle, d = d.handler, e.delete(c), d(); else throw Error("Expected a due immediate or interval");
                                    }; return {
                                        immediate: { setImmediate: function (c) { var d = ++b; e.set(d, { due: a.now(), duration: 0, handle: d, handler: c, subscription: a.schedule(f, 0), type: "immediate" }); return d }, clearImmediate: function (a) { var b = e.get(a); b && (b.subscription.unsubscribe(), e.delete(a)) } }, interval: {
                                            setInterval: function (c, d) {
                                                void 0 === d && (d = 0); var g = ++b; e.set(g, {
                                                    due: a.now() + d, duration: d, handle: g, handler: c, subscription: a.schedule(f, d),
                                                    type: "interval"
                                                }); return g
                                            }, clearInterval: function (a) { var b = e.get(a); b && (b.subscription.unsubscribe(), e.delete(a)) }
                                        }, timeout: { setTimeout: function (c, d) { void 0 === d && (d = 0); var g = ++b; e.set(g, { due: a.now() + d, duration: d, handle: g, handler: c, subscription: a.schedule(f, d), type: "timeout" }); return g }, clearTimeout: function (a) { var b = e.get(a); b && (b.subscription.unsubscribe(), e.delete(a)) } }
                                    }
                                }; a.prototype.run = function (b) {
                                    var c = a.frameTimeFactor, e = this.maxFrames; a.frameTimeFactor = 1; this.maxFrames = Infinity; this.runMode =
                                        !0; var f = this.createAnimator(), g = this.createDelegates(); N.delegate = f.delegate; ka.delegate = this; ma.delegate = g.immediate; la.delegate = g.interval; da.delegate = g.timeout; Da.delegate = this; f = { cold: this.createColdObservable.bind(this), hot: this.createHotObservable.bind(this), flush: this.flush.bind(this), time: this.createTime.bind(this), expectObservable: this.expectObservable.bind(this), expectSubscriptions: this.expectSubscriptions.bind(this), animate: f.animate }; try { var l = b(f); this.flush(); return l } finally {
                                            a.frameTimeFactor =
                                            c, this.maxFrames = e, this.runMode = !1, N.delegate = void 0, ka.delegate = void 0, ma.delegate = void 0, la.delegate = void 0, da.delegate = void 0, Da.delegate = void 0
                                        }
                                }; a.frameTimeFactor = 10; return a
                        }(Ud), cf = Object.freeze({ TestScheduler: bf }), yb = function () {
                            return function (b, a, c, d) {
                                void 0 === d && (d = "download_load"); this.originalEvent = b; this.xhr = a; this.request = c; this.type = d; c = a.status; d = a.responseType; this.status = null !== c && void 0 !== c ? c : 0; this.responseType = null !== d && void 0 !== d ? d : ""; this.responseHeaders = (c = a.getAllResponseHeaders()) ?
                                    c.split("\n").reduce(function (a, b) { var c = b.indexOf(": "); a[b.slice(0, c)] = b.slice(c + 2); return a }, {}) : {}; this.response = Ld(a); a = b.total; this.loaded = b.loaded; this.total = a
                            }
                        }(), wa = R(function (b) { return function (a, b, d) { this.message = a; this.name = "AjaxError"; this.xhr = b; this.request = d; this.status = b.status; this.responseType = b.responseType; var c; try { c = Ld(b) } catch (f) { c = b.responseText } this.response = c } }), Md = function () {
                            function b(a, b) { wa.call(this, "ajax timeout", a, b); this.name = "AjaxTimeoutError"; return this } b.prototype =
                                Object.create(wa.prototype); return b
                        }(), Me = Q(function (b) { return b.response }), ba = function () { var b = function (a) { return Ne("string" === typeof a ? { url: a } : a) }; b.get = Ge; b.post = He; b.delete = Ie; b.put = Je; b.patch = Ke; b.getJSON = Le; return b }(), Pe = "upload", Od = "download", zb = "loadstart", Ab = "progress", Nd = "load", Qe = Object.prototype.toString, df = Object.freeze({ ajax: ba, AjaxError: wa, AjaxTimeoutError: Md, AjaxResponse: yb }), ef = { url: "", deserializer: function (b) { return JSON.parse(b.data) }, serializer: function (b) { return JSON.stringify(b) } },
                            Yd = function (b) {
                                function a(a, d) { var c = b.call(this) || this; c._socket = null; if (a instanceof r) c.destination = d, c.source = a; else { d = c._config = T({}, ef); c._output = new A; if ("string" === typeof a) d.url = a; else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]); if (!d.WebSocketCtor && WebSocket) d.WebSocketCtor = WebSocket; else if (!d.WebSocketCtor) throw Error("no WebSocket constructor can be found"); c.destination = new ha } return c } y(a, b); a.prototype.lift = function (b) {
                                    var c = new a(this._config, this.destination); c.operator = b; c.source =
                                        this; return c
                                }; a.prototype._resetState = function () { this._socket = null; this.source || (this.destination = new ha); this._output = new A }; a.prototype.multiplex = function (a, b, e) { var c = this; return new r(function (d) { try { c.next(a()) } catch (k) { d.error(k) } var f = c.subscribe({ next: function (a) { try { e(a) && d.next(a) } catch (z) { d.error(z) } }, error: function (a) { return d.error(a) }, complete: function () { return d.complete() } }); return function () { try { c.next(b()) } catch (k) { d.error(k) } f.unsubscribe() } }) }; a.prototype._connectSocket = function () {
                                    var a =
                                        this, b = this._config, e = b.WebSocketCtor, f = b.protocol, g = b.url, b = b.binaryType, l = this._output, k = null; try { this._socket = k = f ? new e(g, f) : new e(g), b && (this._socket.binaryType = b) } catch (p) { l.error(p); return } var m = new D(function () { a._socket = null; k && 1 === k.readyState && k.close() }); k.onopen = function (b) {
                                            if (a._socket) {
                                                var c = a._config.openObserver; c && c.next(b); b = a.destination; a.destination = na.create(function (b) { if (1 === k.readyState) try { var c = a._config.serializer; k.send(c(b)) } catch (u) { a.destination.error(u) } }, function (b) {
                                                    var c =
                                                        a._config.closingObserver; c && c.next(void 0); b && b.code ? k.close(b.code, b.reason) : l.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")); a._resetState()
                                                }, function () { var b = a._config.closingObserver; b && b.next(void 0); k.close(); a._resetState() }); b && b instanceof ha && m.add(b.subscribe(a.destination))
                                            } else k.close(), a._resetState()
                                        }; k.onerror = function (b) { a._resetState(); l.error(b) }; k.onclose = function (b) {
                                            k ===
                                            a._socket && a._resetState(); var c = a._config.closeObserver; c && c.next(b); b.wasClean ? l.complete() : l.error(b)
                                        }; k.onmessage = function (b) { try { var c = a._config.deserializer; l.next(c(b)) } catch (B) { l.error(B) } }
                                }; a.prototype._subscribe = function (a) { var b = this, c = this.source; if (c) return c.subscribe(a); this._socket || this._connectSocket(); this._output.subscribe(a); a.add(function () { var a = b._socket; 0 === b._output.observers.length && (!a || 1 !== a.readyState && 0 !== a.readyState || a.close(), b._resetState()) }); return a }; a.prototype.unsubscribe =
                                    function () { var a = this._socket; !a || 1 !== a.readyState && 0 !== a.readyState || a.close(); this._resetState(); b.prototype.unsubscribe.call(this) }; return a
                            }(Db), ff = Object.freeze({ webSocket: function (b) { return new Yd(b) }, WebSocketSubject: Yd }), gf = Object.freeze({
                                fromFetch: function (b, a) {
                                    void 0 === a && (a = {}); var c = a.selector, d = Zd(a, ["selector"]); return new r(function (a) {
                                        var e = new AbortController, g = e.signal, l = !0, k = d.signal; if (k) if (k.aborted) e.abort(); else {
                                            var n = function () { g.aborted || e.abort() }; k.addEventListener("abort",
                                                n); a.add(function () { return k.removeEventListener("abort", n) })
                                        } var p = T(T({}, d), { signal: g }), r = function (b) { l = !1; a.error(b) }; fetch(b, p).then(function (b) { c ? q(c(b)).subscribe(m(a, void 0, function () { l = !1; a.complete() }, r)) : (l = !1, a.next(b), a.complete()) }).catch(r); return function () { l && e.abort() }
                                    })
                                }
                            }); g.operators = af; g.testing = cf; g.ajax = df; g.webSocket = ff; g.fetch = gf; g.Observable = r; g.ConnectableObservable = Ra; g.observable = pa; g.animationFrames = function (b) { return b ? Mb(b) : Te }; g.Subject = A; g.BehaviorSubject = Zc; g.ReplaySubject =
                                ha; g.AsyncSubject = fb; g.asap = Rd; g.asapScheduler = Rd; g.async = ib; g.asyncScheduler = I; g.queue = Sd; g.queueScheduler = Sd; g.animationFrame = Td; g.animationFrameScheduler = Td; g.VirtualTimeScheduler = Ud; g.VirtualAction = Gb; g.Scheduler = Fb; g.Subscription = D; g.Subscriber = na; g.Notification = Pa; g.pipe = Xa; g.noop = C; g.identity = E; g.isObservable = function (b) { return !!b && (b instanceof r || t(b.lift) && t(b.subscribe)) }; g.lastValueFrom = function (b, a) {
                                    var c = "object" === typeof a; return new Promise(function (d, e) {
                                        var f = !1, g; b.subscribe({
                                            next: function (a) {
                                                g =
                                                a; f = !0
                                            }, error: e, complete: function () { f ? d(g) : c ? d(a.defaultValue) : e(new aa) }
                                        })
                                    })
                                }; g.firstValueFrom = function (b, a) { var c = "object" === typeof a; return new Promise(function (d, e) { var f = new ia({ next: function (a) { d(a); f.unsubscribe() }, error: e, complete: function () { c ? d(a.defaultValue) : e(new aa) } }); b.subscribe(f) }) }; g.ArgumentOutOfRangeError = rb; g.EmptyError = aa; g.NotFoundError = ld; g.ObjectUnsubscribedError = Qd; g.SequenceError = kd; g.TimeoutError = Xb; g.UnsubscriptionError = Sa; g.bindCallback = function (b, a, c) {
                                    return Ga(!1, b,
                                        a, c)
                                }; g.bindNodeCallback = function (b, a, c) { return Ga(!0, b, a, c) }; g.combineLatest = $b; g.concat = ta; g.connectable = function (b, a) { void 0 === a && (a = $e); var c = null, d = a.connector; a = a.resetOnDisconnect; var e = void 0 === a ? !0 : a, f = d(); a = new r(function (a) { return f.subscribe(a) }); a.connect = function () { if (!c || c.closed) c = Ia(function () { return b }).subscribe(f), e && c.add(function () { return f = d() }); return c }; return a }; g.defer = Ia; g.empty = function (b) { return b ? de(b) : L }; g.forkJoin = function () {
                                    for (var b = [], a = 0; a < arguments.length; a++)b[a] =
                                        arguments[a]; var a = oa(b), b = Yb(b), c = b.args, d = b.keys, b = new r(function (a) { var b = c.length; if (b) for (var e = Array(b), g = b, k = b, n = function (b) { var f = !1; q(c[b]).subscribe(m(a, function (a) { f || (f = !0, k--); e[b] = a }, function () { return g-- }, void 0, function () { g && f || (k || a.next(d ? Zb(d, e) : e), a.complete()) })) }, p = 0; p < b; p++)n(p); else a.complete() }); return a ? b.pipe(W(a)) : b
                                }; g.from = P; g.fromEvent = hb; g.fromEventPattern = dc; g.generate = function (b, a, c, d, e) {
                                    function f() {
                                        var b; return Ua(this, function (d) {
                                            switch (d.label) {
                                                case 0: b = k, d.label =
                                                    1; case 1: return a && !a(b) ? [3, 4] : [4, l(b)]; case 2: d.sent(), d.label = 3; case 3: return b = c(b), [3, 1]; case 4: return [2]
                                            }
                                        })
                                    } var g, l, k; 1 === arguments.length ? (k = b.initialState, a = b.condition, c = b.iterate, g = b.resultSelector, l = void 0 === g ? E : g, e = b.scheduler) : (k = b, !d || Ea(d) ? (l = E, e = d) : l = d); return Ia(e ? function () { return Tb(f(), e) } : f)
                                }; g.iif = function (b, a, c) { return Ia(function () { return b() ? a : c }) }; g.interval = ec; g.merge = function () {
                                    for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; var a = O(b), c = "number" === typeof b[b.length -
                                        1] ? b.pop() : Infinity; return b.length ? 1 === b.length ? q(b[0]) : sa(c)(P(b, a)) : L
                                }; g.never = function () { return Vd }; g.of = cb; g.onErrorResumeNext = fc; g.pairs = function (b, a) { return P(Object.entries(b), a) }; g.partition = function (b, a, c) { return [K(a, c)(q(b)), K(gc(a, c))(q(b))] }; g.race = function () { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; b = Z(b); return 1 === b.length ? q(b[0]) : new r(hc(b)) }; g.range = function (b, a, c) {
                                    null == a && (a = b, b = 0); if (0 >= a) return L; var d = a + b; return new r(c ? function (a) {
                                        var e = b; return c.schedule(function () {
                                            e <
                                            d ? (a.next(e++), this.schedule()) : a.complete()
                                        })
                                    } : function (a) { for (var c = b; c < d && !a.closed;)a.next(c++); a.complete() })
                                }; g.throwError = Wb; g.timer = Y; g.using = function (b, a) { return new r(function (c) { var d = b(), e = a(d); (e ? q(e) : L).subscribe(c); return function () { d && d.unsubscribe() } }) }; g.zip = jb; g.scheduled = Vb; g.EMPTY = L; g.NEVER = Vd; g.config = S; g.audit = kb; g.auditTime = ic; g.buffer = jc; g.bufferCount = kc; g.bufferTime = lc; g.bufferToggle = mc; g.bufferWhen = nc; g.catchError = lb; g.combineAll = Ja; g.combineLatestAll = Ja; g.combineLatestWith =
                                    qc; g.concatAll = Ha; g.concatMap = Ka; g.concatMapTo = rc; g.concatWith = tc; g.connect = La; g.count = uc; g.debounce = vc; g.debounceTime = wc; g.defaultIfEmpty = ua; g.delay = xc; g.delayWhen = Ma; g.dematerialize = yc; g.distinct = zc; g.distinctUntilChanged = qb; g.distinctUntilKeyChanged = Ac; g.elementAt = Bc; g.endWith = Cc; g.every = Dc; g.exhaust = Oa; g.exhaustAll = Oa; g.exhaustMap = Na; g.expand = Ec; g.filter = K; g.finalize = Fc; g.find = Gc; g.findIndex = Ic; g.first = Jc; g.groupBy = Kc; g.ignoreElements = ob; g.isEmpty = Lc; g.last = Mc; g.map = Q; g.mapTo = pb; g.materialize =
                                        Nc; g.max = Oc; g.mergeAll = sa; g.flatMap = H; g.mergeMap = H; g.mergeMapTo = Pc; g.mergeScan = Qc; g.mergeWith = Sc; g.min = Tc; g.multicast = Qa; g.observeOn = qa; g.onErrorResumeNextWith = Uc; g.pairwise = Vc; g.pluck = Wc; g.publish = Xc; g.publishBehavior = Yc; g.publishLast = $c; g.publishReplay = ad; g.raceWith = tb; g.reduce = fa; g.repeat = bd; g.repeatWhen = cd; g.retry = dd; g.retryWhen = ed; g.refCount = Za; g.sample = ub; g.sampleTime = fd; g.scan = gd; g.sequenceEqual = hd; g.share = vb; g.shareReplay = id; g.single = jd; g.skip = md; g.skipLast = nd; g.skipUntil = od; g.skipWhile = pd;
    g.startWith = qd; g.subscribeOn = ra; g.switchAll = rd; g.switchMap = ja; g.switchMapTo = sd; g.switchScan = td; g.take = ga; g.takeLast = sb; g.takeUntil = ud; g.takeWhile = vd; g.tap = wd; g.throttle = xb; g.throttleTime = xd; g.throwIfEmpty = va; g.timeInterval = yd; g.timeout = eb; g.timeoutWith = zd; g.timestamp = Ad; g.toArray = mb; g.window = Bd; g.windowCount = Cd; g.windowTime = Dd; g.windowToggle = Ed; g.windowWhen = Fd; g.withLatestFrom = Gd; g.zipAll = Hd; g.zipWith = Jd; Object.defineProperty(g, "__esModule", { value: !0 })
});
//# sourceMappingURL=rxjs.umd.min.js.map
