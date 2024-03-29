var app = function() {
    "use strict";

    function e() {}

    function t(e) {
        return e()
    }

    function s() {
        return Object.create(null)
    }

    function n(e) {
        e.forEach(t)
    }

    function i(e) {
        return "function" == typeof e
    }

    function a(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let c, l;

    function o(e, t) {
        return c || (c = document.createElement("a")), c.href = t, e === c.href
    }

    function r(e, t) {
        e.appendChild(t)
    }

    function d(e, t, s) {
        e.insertBefore(t, s || null)
    }

    function m(e) {
        e.parentNode.removeChild(e)
    }

    function g(e, t) {
        for (let s = 0; s < e.length; s += 1) e[s] && e[s].d(t)
    }

    function u(e) {
        return document.createElement(e)
    }

    function p(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function h(e) {
        return document.createTextNode(e)
    }

    function v() {
        return h(" ")
    }

    function f(e, t, s) {
        null == s ? e.removeAttribute(t) : e.getAttribute(t) !== s && e.setAttribute(t, s)
    }

    function j(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function y(e) {
        l = e
    }

    function w() {
        if (!l) throw new Error("Function called outside component initialization");
        return l
    }
    const b = [],
        k = [],
        x = [],
        _ = [],
        $ = Promise.resolve();
    let M = !1;

    function T(e) {
        x.push(e)
    }
    const C = new Set;
    let S = 0;

    function z() {
        const e = l;
        do {
            for (; S < b.length;) {
                const e = b[S];
                S++, y(e), B(e.$$)
            }
            for (y(null), b.length = 0, S = 0; k.length;) k.pop()();
            for (let e = 0; e < x.length; e += 1) {
                const t = x[e];
                C.has(t) || (C.add(t), t())
            }
            x.length = 0
        } while (b.length);
        for (; _.length;) _.pop()();
        M = !1, C.clear(), y(e)
    }

    function B(e) {
        if (null !== e.fragment) {
            e.update(), n(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(T)
        }
    }
    const L = new Set;

    function A(e, t) {
        -1 === e.$$.dirty[0] && (b.push(e), M || (M = !0, $.then(z)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function H(a, c, o, r, d, g, u, p = [-1]) {
        const h = l;
        y(a);
        const v = a.$$ = {
            fragment: null,
            ctx: null,
            props: g,
            update: e,
            not_equal: d,
            bound: s(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(c.context || (h ? h.$$.context : [])),
            callbacks: s(),
            dirty: p,
            skip_bound: !1,
            root: c.target || h.$$.root
        };
        u && u(v.root);
        let f = !1;
        if (v.ctx = o ? o(a, c.props || {}, ((e, t, ...s) => {
                const n = s.length ? s[0] : t;
                return v.ctx && d(v.ctx[e], v.ctx[e] = n) && (!v.skip_bound && v.bound[e] && v.bound[e](n), f && A(a, e)), t
            })) : [], v.update(), f = !0, n(v.before_update), v.fragment = !!r && r(v.ctx), c.target) {
            if (c.hydrate) {
                const e = function(e) {
                    return Array.from(e.childNodes)
                }(c.target);
                v.fragment && v.fragment.l(e), e.forEach(m)
            } else v.fragment && v.fragment.c();
            c.intro && ((j = a.$$.fragment) && j.i && (L.delete(j), j.i(w))),
                function(e, s, a, c) {
                    const {
                        fragment: l,
                        on_mount: o,
                        on_destroy: r,
                        after_update: d
                    } = e.$$;
                    l && l.m(s, a), c || T((() => {
                        const s = o.map(t).filter(i);
                        r ? r.push(...s) : n(s), e.$$.on_mount = []
                    })), d.forEach(T)
                }(a, c.target, c.anchor, c.customElement), z()
        }
        var j, w;
        y(h)
    }

    function E(e, t, s) {
        const n = e.slice();
        return n[3] = t[s], n
    }

    function N(e, t, s) {
        const n = e.slice();
        return n[6] = t[s], n
    }

    function D(e) {
        let t, s, n, i, a, c, l, o, g, y, w, b, k, x, _, $, M, T, C, S, z, B, L, A, H, E, N, D, O, Z, P, R, U, W, J, K, G, F, X, V, Y, q, Q, ee, te, se, ne, ie, ae, ce, le, oe, re, de, me, ge = e[6].data.playing.toLocaleString() + "",
            ue = e[6].title + "",
            pe = I(e[6].data.visits) + "",
            he = e[6].data.created.toLocaleDateString() + "";
        return {
            c() {
                t = u("div"), s = u("a"), n = u("div"), i = u("div"), a = v(), c = u("div"), l = u("div"), o = u("div"), g = v(), y = u("span"), w = u("span"), w.innerHTML = '<i class="fas fa-circle"></i>', b = v(), k = u("span"), x = h(ge), _ = h(" Players Online"), $ = v(), M = u("div"), T = u("div"), C = u("p"), S = h(ue), z = v(), B = u("div"), L = v(), A = u("div"), H = u("figure"), E = u("a"), N = p("svg"), D = p("path"), Z = v(), P = u("div"), R = u("figure"), U = u("a"), W = p("svg"), J = p("path"), X = v(), V = u("div"), Y = u("div"), q = u("p"), q.textContent = "Total Play Sessions", Q = v(), ee = u("p"), te = u("b"), se = h(pe), ne = h("+"), ie = v(), ae = u("div"), ce = u("p"), ce.textContent = "Released", le = v(), oe = u("p"), re = u("b"), de = h(he), me = v(), f(i, "class", "bottombg svelte-jjy36c"), f(o, "class", "image-window svelte-jjy36c"), f(w, "class", "icon online-green svelte-jjy36c"), f(k, "class", "players-online svelte-jjy36c"), f(y, "class", "icon-text"), f(C, "class", "is-size-3 has-text-weight-semibold"), f(T, "class", "column is-full-mobile game-title"), f(B, "class", "column is-hidden-touch"), f(D, "d", "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"), f(N, "width", "24"), f(N, "height", "24"), f(N, "viewBox", "0 0 248 204"), f(E, "class", "is-flex is-align-content-center"), f(E, "href", O = e[6].twitter), f(E, "alt", "twitter logo"), f(E, "target", "_blank"), f(H, "class", "is-flex mx-auto image is-24x24"), f(A, "class", "column is-narrow"), f(J, "d", "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"), f(W, "width", "24"), f(W, "height", "24"), f(W, "viewBox", "0 0 127.14 96.36"), f(U, "class", "is-flex is-align-content-center"), f(U, "href", K = e[6].discord), f(U, "alt", "discord logo"), f(U, "target", "_blank"), f(R, "class", "is-flex mx-auto image is-24x24"), f(P, "class", "column is-narrow"), f(M, "class", "columns is-multiline is-vcentered is-mobile"), f(l, "class", "content"), f(c, "class", "card-content svelte-jjy36c"), f(n, "class", G = "card " + e[6].cardCSS + " game-card svelte-jjy36c"), f(s, "href", F = e[6].link), f(s, "target", "_blank"), f(q, "class", "game-stat-title mt-2 is-size-6 svelte-jjy36c"), f(ee, "class", "is-size-5"), f(Y, "class", "column has-text-left"), f(ce, "class", "game-stat-title mt-2 is-size-6 svelte-jjy36c"), f(oe, "class", "is-size-5"), f(ae, "class", "column has-text-left"), f(V, "class", "game-stats columns is-mobile mt-1 svelte-jjy36c"), f(t, "class", "column game-card-container")
            },
            m(e, m) {
                d(e, t, m), r(t, s), r(s, n), r(n, i), r(n, a), r(n, c), r(c, l), r(l, o), r(l, g), r(l, y), r(y, w), r(y, b), r(y, k), r(k, x), r(k, _), r(l, $), r(l, M), r(M, T), r(T, C), r(C, S), r(M, z), r(M, B), r(M, L), r(M, A), r(A, H), r(H, E), r(E, N), r(N, D), r(M, Z), r(M, P), r(P, R), r(R, U), r(U, W), r(W, J), r(t, X), r(t, V), r(V, Y), r(Y, q), r(Y, Q), r(Y, ee), r(ee, te), r(te, se), r(te, ne), r(V, ie), r(V, ae), r(ae, ce), r(ae, le), r(ae, oe), r(oe, re), r(re, de), r(t, me)
            },
            p(e, t) {
                1 & t && ge !== (ge = e[6].data.playing.toLocaleString() + "") && j(x, ge), 1 & t && ue !== (ue = e[6].title + "") && j(S, ue), 1 & t && O !== (O = e[6].twitter) && f(E, "href", O), 1 & t && K !== (K = e[6].discord) && f(U, "href", K), 1 & t && G !== (G = "card " + e[6].cardCSS + " game-card svelte-jjy36c") && f(n, "class", G), 1 & t && F !== (F = e[6].link) && f(s, "href", F), 1 & t && pe !== (pe = I(e[6].data.visits) + "") && j(se, pe), 1 & t && he !== (he = e[6].data.created.toLocaleDateString() + "") && j(de, he)
            },
            d(e) {
                e && m(t)
            }
        }
    }

    function O(t) {
        let s, n, i, a, c, l, g;
        return {
            c() {
                s = u("div"), n = u("figure"), i = u("a"), a = u("img"), f(a, "class", "is-rounded svelte-jjy36c"), o(a.src, c = "./profiles/" + t[3].image) || f(a, "src", c), f(a, "alt", "team member profile"), f(i, "class", "image"), f(i, "data-tooltip", l = t[3].name), f(i, "href", g = t[3].link), f(i, "target", "_blank"), f(s, "class", "team-member-avatar column is-narrow svelte-jjy36c")
            },
            m(e, t) {
                d(e, s, t), r(s, n), r(n, i), r(i, a)
            },
            p: e,
            d(e) {
                e && m(s)
            }
        }
    }

    function Z(t) {
        let s, n, i, a, c, l, p, y, w, b, k, x, _, $, M, T, C, S, z, B, L, A, H, Z, P, R, U, W, J, K, G, F, X, V, Y, q, Q, ee, te, se, ne, ie, ae, ce, le, oe, re, de, me, ge, ue, pe, he, ve, fe, je, ye, we, be, ke, xe, _e, $e = t[0].length + "",
            Me = I(t[1]) + "",
            Te = t[0],
            Ce = [];
        for (let e = 0; e < Te.length; e += 1) Ce[e] = D(N(t, Te, e));
        let Se = t[2],
            ze = [];
        for (let e = 0; e < Se.length; e += 1) ze[e] = O(E(t, Se, e));
        return {
            c() {
                s = u("div"), s.innerHTML = '<div class="parallax-hero-banner svelte-jjy36c"></div> \n\t<div class="header columns has-text-left is-centered is-flex is-flex-align-content-center is-vcentered is-desktop svelte-jjy36c"><div class="column is-vcentered is-centered"><img class="is-full ml-auto" src="./img/text_logo_white.png" alt="easy.gg-logo"/> \n\t\t\t<p class="has-text-weight-medium is-size-3 is-size-4-mobile">We&#39;re an independent Roblox game development studio.</p></div> \n        <div class="column is-hidden-touch is-hidden-desktop-only is-flex is-vcentered is-centered"><img class="mascot ml-auto svelte-jjy36c" src="./img/easy_mascot_white_narrow.png" alt="mascot"/></div></div>', n = v(), i = u("section"), a = u("img"), l = v(), p = u("div"), y = u("div"), y.innerHTML = '<div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div> \n            <p class="section-title is-narrow svelte-jjy36c">Games</p> \n            <div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div>', w = v(), b = u("p"), k = h("We've created "), x = u("span"), _ = h($e), $ = h(" games and shipped over "), M = u("span"), M.textContent = "200", T = h(" content updates."), C = v(), S = u("div");
                for (let e = 0; e < Ce.length; e += 1) Ce[e].c();
                z = v(), B = u("section"), L = u("img"), H = v(), Z = u("div"), P = u("div"), P.innerHTML = '<div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div> \n            <p class="section-title svelte-jjy36c">COMMUNITY</p> \n            <div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div>', R = v(), U = u("p"), U.innerHTML = 'We&#39;ve developed a <span class="text-easy-red">thriving</span> community.', W = v(), J = u("div"), K = u("div"), G = u("div"), F = u("div"), X = u("div"), V = u("p"), Y = h(Me), q = h("+"), Q = v(), ee = u("p"), ee.textContent = "Play Sessions", te = v(), se = u("div"), se.innerHTML = '<div class="card metric metric-2 is-flex is-align-items-center is-justify-content-center svelte-jjy36c"><div class="card-content "><div class="content"><p class="title is-size-1 mb-5 text-easy-red">350k+</p> \n\t\t\t\t\t\t<p class="is-size-5">Peak Concurrent Users</p></div></div></div>', ne = v(), ie = u("div"), ie.innerHTML = '<div class="card metric metric-3 is-flex is-align-items-center is-justify-content-center svelte-jjy36c"><div class="card-content "><div class="content"><p class="title is-size-1 mb-5 text-easy-red">20M+</p> \n\t\t\t\t\t\t<p class="is-size-5">Monthly Active Users</p></div></div></div>', ae = v(), ce = u("section"), le = u("img"), re = v(), de = u("div"), me = u("div"), me.innerHTML = '<div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div> \n            <p class="section-title svelte-jjy36c">TEAM</p> \n            <div class="column is-one-third divider is-hidden-touch svelte-jjy36c"></div>', ge = v(), ue = u("p"), pe = h("We've built a team of "), he = u("span"), he.textContent = `${t[2].length}`, ve = h(" people from all over the world."), fe = v(), je = u("div");
                for (let e = 0; e < ze.length; e += 1) ze[e].c();
                ye = v(), we = u("div"), we.innerHTML = '<figure><a class="image" data-tooltip="Your Name" href="https://angel.co/company/easy-games/jobs" target="_blank"><img class="is-rounded svelte-jjy36c" src="./img/addteam.png" alt="add team member button"/></a></figure>', be = v(), ke = u("section"), ke.innerHTML = '<div class="jobs-parallax-bg svelte-jjy36c"></div> \n    <div class="container"><p class="is-size-3">Now we want to create even <span class="text-easy-red">more</span>.</p> \n        <a href="https://angel.co/company/easy-games/jobs" target="_blank" class="join-link px-6 py-4 mt-6 is-size-5 svelte-jjy36c">View Jobs</a></div>', xe = v(), _e = u("section"), _e.innerHTML = '<div class="container"><a href="/"><img class="mt-6 bottom-logo svelte-jjy36c" src="./img/easy_mascot_white.png" alt="easy_logo"/></a> \n        <div class="columns is-vcentered"><div class="column"><p>Want to talk to us?</p> \n\t\t\t\t<p class="text-easy-red">innovatestudios@mikumusicteam.cf</p></div></div> \n\t\t<p class="pt-6 copyright svelte-jjy36c">© 2022 Easy Games - All rights reserved.</p></div>', f(s, "class", "header-bg svelte-jjy36c"), f(a, "class", "art-sketch-games is-hidden-touch svelte-jjy36c"), o(a.src, c = "./img/Bedwars_BugTamerKit.png") || f(a, "src", "./img/Bedwars_BugTamerKit.png"), f(a, "alt", "tree-buffalo-art"), f(y, "class", "columns is-centered section-title-container mb-5 svelte-jjy36c"), f(x, "class", "text-easy-red"), f(M, "class", "text-easy-red"), f(b, "class", "is-size-3 pb-4"), f(S, "class", "columns pt-6 is-vcentered has-text-left"), f(p, "class", "container"), f(i, "class", "games-bg section is-medium has-text-centered svelte-jjy36c"), f(L, "class", "art-sketch-community is-hidden-touch svelte-jjy36c"), o(L.src, A = "./img/TreeBuffallo_NOBackround.png") || f(L, "src", "./img/TreeBuffallo_NOBackround.png"), f(L, "alt", "bug-tamer-art"), f(P, "class", "columns section-title-container mb-5 svelte-jjy36c"), f(U, "class", "is-size-3 pb-4"), f(V, "class", "title mb-5 text-easy-red svelte-jjy36c"), f(ee, "class", "is-size-4"), f(X, "class", "content"), f(F, "class", "card-content "), f(G, "class", "card metric metric-1 is-flex is-align-items-center is-justify-content-center svelte-jjy36c"), f(K, "class", "column is-full"), f(se, "class", "column is-half"), f(ie, "class", "column is-half"), f(J, "class", "columns is-multiline is-vcentered pt-6"), f(Z, "class", "container"), f(B, "class", "community-bg section is-medium has-text-centered svelte-jjy36c"), f(le, "class", "art-sketch-team is-hidden-touch svelte-jjy36c"), o(le.src, oe = "./img/Smoke_NOBackround.png") || f(le, "src", "./img/Smoke_NOBackround.png"), f(le, "alt", "kit-art"), f(me, "class", "columns section-title-container mb-5 svelte-jjy36c"), f(he, "class", "text-easy-red"), f(ue, "class", "is-size-3 pb-4"), f(we, "class", "team-member-avatar column is-narrow svelte-jjy36c"), f(je, "class", "team-grid columns is-multiline is-vcentered is-flex is-justify-content-center pt-6 svelte-jjy36c"), f(de, "class", "container"), f(ce, "class", "team-bg section is-medium has-text-centered svelte-jjy36c"), f(ke, "class", "jobs-bg section is-medium has-text-centered is-vcentered svelte-jjy36c"), f(_e, "class", "bottom-bg section is-small has-text-centered svelte-jjy36c")
            },
            m(e, t) {
                d(e, s, t), d(e, n, t), d(e, i, t), r(i, a), r(i, l), r(i, p), r(p, y), r(p, w), r(p, b), r(b, k), r(b, x), r(x, _), r(b, $), r(b, M), r(b, T), r(p, C), r(p, S);
                for (let e = 0; e < Ce.length; e += 1) Ce[e].m(S, null);
                d(e, z, t), d(e, B, t), r(B, L), r(B, H), r(B, Z), r(Z, P), r(Z, R), r(Z, U), r(Z, W), r(Z, J), r(J, K), r(K, G), r(G, F), r(F, X), r(X, V), r(V, Y), r(V, q), r(X, Q), r(X, ee), r(J, te), r(J, se), r(J, ne), r(J, ie), d(e, ae, t), d(e, ce, t), r(ce, le), r(ce, re), r(ce, de), r(de, me), r(de, ge), r(de, ue), r(ue, pe), r(ue, he), r(ue, ve), r(de, fe), r(de, je);
                for (let e = 0; e < ze.length; e += 1) ze[e].m(je, null);
                r(je, ye), r(je, we), d(e, be, t), d(e, ke, t), d(e, xe, t), d(e, _e, t)
            },
            p(e, [t]) {
                if (1 & t && $e !== ($e = e[0].length + "") && j(_, $e), 1 & t) {
                    let s;
                    for (Te = e[0], s = 0; s < Te.length; s += 1) {
                        const n = N(e, Te, s);
                        Ce[s] ? Ce[s].p(n, t) : (Ce[s] = D(n), Ce[s].c(), Ce[s].m(S, null))
                    }
                    for (; s < Ce.length; s += 1) Ce[s].d(1);
                    Ce.length = Te.length
                }
                if (2 & t && Me !== (Me = I(e[1]) + "") && j(Y, Me), 4 & t) {
                    let s;
                    for (Se = e[2], s = 0; s < Se.length; s += 1) {
                        const n = E(e, Se, s);
                        ze[s] ? ze[s].p(n, t) : (ze[s] = O(n), ze[s].c(), ze[s].m(je, ye))
                    }
                    for (; s < ze.length; s += 1) ze[s].d(1);
                    ze.length = Se.length
                }
            },
            i: e,
            o: e,
            d(e) {
                e && m(s), e && m(n), e && m(i), g(Ce, e), e && m(z), e && m(B), e && m(ae), e && m(ce), g(ze, e), e && m(be), e && m(ke), e && m(xe), e && m(_e)
            }
        }
    }

    function I(e) {
        var t = e;
        if (e >= 1e3) {
            for (var s = Math.floor(("" + e).length / 3), n = "", i = 2; i >= 1; i--) {
                if (((n = parseFloat((0 != s ? e / Math.pow(1e3, s) : e).toPrecision(i))) + "").replace(/[^a-zA-Z 0-9]+/g, "").length <= 2) break
            }
            n % 1 != 0 && (n = n.toFixed(1)), t = n + ["", "K", "M", "B", "T"][s]
        }
        return t
    }

    function P(e, t, s) {
        const n = [{
                name: "Asen",
                image: "asen.jpg",
                link: "https://twitter.com/AsenDev"
            }, {
                name: "Ben Douglas-Almond",
                image: "ben.jpg",
                link: "https://bdasound.com"
            }, {
                name: "Brooke",
                image: "brooke.webp",
                link: "https://twitter.com/grilme99"
            }, {
                name: "Bryan Tran",
                image: "bryan.jpg",
                link: "https://twitter.com/bryantran38"
            }, {
                name: "Cat Pereira",
                image: "cat.png",
                link: "https://twitter.com/midciel_"
            }, {
                name: "chase",
                image: "chase.jpg",
                link: "https://twitter.com/vovl_"
            }, {
                name: "Dominic",
                image: "dom.jpg",
                link: "https://twitter.com/spruxs"
            }, {
                name: "Xuleos",
                image: "evan.webp",
                link: "https://twitter.com/Xuleos_"
            }, {
                name: "Jack Schaffner",
                image: "jack.jpg",
                link: "https://www.linkedin.com/in/jackschaffner/"
            }, {
                name: "mr_jkj",
                image: "jkj.png",
                link: "https://twitter.com/mrjkj2"
            }, {
                name: "spleenhook",
                image: "liam.jpg",
                link: "https://twitter.com/spleenhook"
            }, {
                name: "Luke Chatton",
                image: "luke.jpg",
                link: "https://twitter.com/lukechatton"
            }, {
                name: "Nar Genc",
                image: "nar.jpg",
                link: "https://narderinn.artstation.com"
            }, {
                name: "Rascal",
                image: "rascal.png",
                link: "https://twitter.com/LordRascal"
            }, {
                name: "SteamPulse",
                image: "steampulse.jpg",
                link: "https://twitter.com/SteamPulse"
            }, {
                name: "Jonathan Holmes",
                image: "vorlias.jpg",
                link: "https://twitter.com/Vorlias"
            }, {
                name: "Andy Truong",
                image: "andy.jpg",
                link: "https://www.linkedin.com/in/andy-truong-860b191a3/"
            }, {
                name: "Joshua Mire",
                image: "joshua.jpg",
                link: "https://joshuamire.wordpress.com/"
            }, {
                name: "Michelle Menara",
                image: "michelle.png",
                link: "https://twitter.com/harhtRBLX"
            }, {
                name: "Zhengyang Zhang",
                image: "zhen.jpg",
                link: "https://www.linkedin.com/in/zhengyang-zhang-439008178/"
            }, {
                name: "Robbie",
                image: "robbie.png",
                link: "https://twitter.com/r_xbbie"
            }, {
                name: "Stephen Leitnick",
                image: "stephen.jpg",
                link: "https://twitter.com/sleitnick"
            }, {
                name: "Jake Woodall",
                image: "jake.png",
                link: "https://twitter.com/jakewoodaII"
            }, {
                name: "KOSHABI",
                image: "KOSHABI.jpg",
                link: "https://twitter.com/koshabi27"
            }, {
                name: "Matthew Mitchell",
                image: "matthew.jpg",
                link: "https://www.linkedin.com/in/matthew-mitchell-29639b79/"
            }, {
                name: "Chloe",
                image: "chloe.jpg",
                link: "https://twitter.com/ChloeLapen"
            }].sort(((e, t) => e.name.localeCompare(t.name))),
            i = [{
                title: "Awoken",
                cardCSS: "bedwars-card",
                link: "https://www.roblox.com/games/10934994843",
                twitter: "https://twitter.com/RobloxBedwars",
                discord: "https://discord.gg/robloxbedwars",
                data: {
                    visits: 0,
                    playing: 0,
                    favorites: 0,
                    created: new Date("2020-04-08T02:47:17.397Z"),
                    lastUpdated: new Date("2020-04-08T02:47:17.397Z")
                }
            }, {
                title: "Islands",
                cardCSS: "islands-card",
                link: "https://www.roblox.com/games/4872321990",
                twitter: "https://twitter.com/RobloxIslands",
                discord: "https://discord.gg/islands",
                data: {
                    visits: 0,
                    playing: 0,
                    favorites: 0,
                    created: new Date("2021-05-27T15:14:38.887Z"),
                    lastUpdated: new Date("2021-12-29T17:56:17.0448267Z")
                }
            }];
        let a = 0;
        var c;
        return c = async () => {
                const e = await fetch("https://metrics.easy.gg/roblox/stats", {
                        method: "GET"
                    }),
                    t = await e.json();
                for (let e = 0; e < i.length; e++) s(0, i[e].data = {
                    visits: t.data[e].visits,
                    playing: t.data[e].playing,
                    favorites: t.data[e].favoritedCount,
                    created: new Date(t.data[e].created),
                    lastUpdated: new Date(t.data[e].updated)
                }, i), s(1, a += t.data[e].visits)
            }, w().$$.on_mount.push(c),
            function(e) {
                w().$$.on_destroy.push(e)
            }((() => {
                clearInterval(up), clearInterval(down)
            })), [i, a, n]
    }
    return new class extends class {
        $destroy() {
            ! function(e, t) {
                const s = e.$$;
                null !== s.fragment && (n(s.on_destroy), s.fragment && s.fragment.d(t), s.on_destroy = s.fragment = null, s.ctx = [])
            }(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return s.push(t), () => {
                const e = s.indexOf(t); - 1 !== e && s.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    } {
        constructor(e) {
            super(), H(this, e, P, Z, a, {})
        }
    }({
        target: document.body,
        props: {
            name: "world"
        }
    })
}();