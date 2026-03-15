const c = j;
(function (a, b) {
    const q = j, r = a();
    while (!![]) {
        try {
            const s = -parseInt(q(0x1a9)) / 0x1 * (-parseInt(q(0x19c)) / 0x2) + parseInt(q(0x1b3)) / 0x3 * (parseInt(q(0x1a5)) / 0x4) + -parseInt(q(0x178)) / 0x5 + -parseInt(q(0x184)) / 0x6 * (-parseInt(q(0x16a)) / 0x7) + parseInt(q(0x1b7)) / 0x8 + parseInt(q(0x18f)) / 0x9 + -parseInt(q(0x17c)) / 0xa;
            if (s === b)
                break;
            else
                r['push'](r['shift']());
        } catch (t) {
            r['push'](r['shift']());
        }
    }
}(p, 0xeac55));
const d = (function () {
        const q = (function () {
                let t = !![];
                return function (u, v) {
                    const w = t ? function () {
                        if (v) {
                            const x = v['apply'](u, arguments);
                            return v = null, x;
                        }
                    } : function () {
                    };
                    return t = ![], w;
                };
            }()), r = q(this, function () {
                let t;
                try {
                    const w = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                    t = w();
                } catch (x) {
                    t = window;
                }
                const u = t['console'] = t['console'] || {}, v = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let y = 0x0; y < v['length']; y++) {
                    const z = q['constructor']['prototype']['bind'](q), A = v[y], B = u[A] || z;
                    z['__proto__'] = q['bind'](q), z['toString'] = B['toString']['bind'](B), u[A] = z;
                }
            });
        r();
        let s = !![];
        return function (t, u) {
            const v = s ? function () {
                const w = j;
                if (u) {
                    const x = u[w(0x19d)](t, arguments);
                    return u = null, x;
                }
            } : function () {
            };
            return s = ![], v;
        };
    }()), e = d(this, function () {
        const a = j, b = function () {
                const t = j;
                let u;
                try {
                    u = Function(t(0x179) + t(0x177) + ');')();
                } catch (v) {
                    u = window;
                }
                return u;
            }, q = b(), r = q['console'] = q[a(0x17e)] || {}, s = [
                a(0x171),
                a(0x1af),
                a(0x170),
                a(0x186),
                a(0x175),
                a(0x194),
                a(0x187)
            ];
        for (let t = 0x0; t < s[a(0x183)]; t++) {
            const u = d[a(0x1ba)][a(0x1a2)]['bind'](d), v = s[t], w = r[v] || u;
            u[a(0x1ab)] = d[a(0x1a6)](d), u['toString'] = w[a(0x18b)][a(0x1a6)](w), r[v] = u;
        }
    });
e();
const f = c(0x1b8);
async function g() {
    const a = c;
    try {
        const b = await fetch(window[a(0x1b0)] + a(0x169), {
            'method': 'GET',
            'credentials': a(0x181)
        });
        if (b['ok']) {
            const q = await b[a(0x18c)]();
            if (q[a(0x190)]) {
                const r = document[a(0x1b1)]('meta[name=\x22csrf-token\x22]');
                r && (r[a(0x192)](a(0x17d), q[a(0x190)]), console['log'](a(0x18e)));
            }
        } else
            console[a(0x1af)](a(0x196));
    } catch (s) {
        console[a(0x1af)](a(0x1a7), s);
    }
}
function h() {
    const a = c, b = document[a(0x1b1)](a(0x1bb));
    if (b && b['content'] && b[a(0x17d)][a(0x183)] >= 0x20)
        return b[a(0x17d)];
    return null;
}
async function i(a, b = {}) {
    const q = c, r = {};
    if (b[q(0x168)] && [
            'POST',
            'PUT',
            'DELETE',
            'PATCH'
        ]['includes'](b['method'][q(0x1b4)]())) {
        const s = h();
        if (!s)
            throw new Error('CSRF\x20token\x20not\x20available\x20-\x20cannot\x20make\x20state-changing\x20request');
        r[q(0x16c)] = s;
    }
    return fetch(a, {
        ...b,
        'credentials': q(0x181),
        'headers': {
            ...r,
            ...b['headers']
        }
    });
}
window[c(0x195)]['protocol'] === c(0x17b) && window[c(0x195)][c(0x193)] !== 'localhost' && window[c(0x195)][c(0x193)] !== c(0x176) && console[c(0x1af)]('⚠️\x20Warning:\x20Connection\x20is\x20not\x20secure.\x20Use\x20HTTPS\x20in\x20production.'), document[c(0x199)](c(0x19a), g);
function j(a, b) {
    a = a - 0x168;
    const q = p();
    let r = q[a];
    if (j['JlZvyV'] === undefined) {
        var s = function (w) {
            const x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let y = '', z = '';
            for (let A = 0x0, B, C, D = 0x0; C = w['charAt'](D++); ~C && (B = A % 0x4 ? B * 0x40 + C : C, A++ % 0x4) ? y += String['fromCharCode'](0xff & B >> (-0x2 * A & 0x6)) : 0x0) {
                C = x['indexOf'](C);
            }
            for (let E = 0x0, F = y['length']; E < F; E++) {
                z += '%' + ('00' + y['charCodeAt'](E)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(z);
        };
        j['ubCFWd'] = s, j['lwkLln'] = {}, j['JlZvyV'] = !![];
    }
    const t = q[0x0], u = a + t, v = j['lwkLln'][u];
    return !v ? (r = j['ubCFWd'](r), j['lwkLln'][u] = r) : r = v, r;
}
function k() {
    const a = c, b = sessionStorage[a(0x172)](a(0x1b9));
    return !b;
}
function l() {
    const a = c;
    sessionStorage[a(0x182)](a(0x1b9), a(0x16d));
}
function m(a) {
    const b = c;
    if (!a || typeof a !== b(0x1a8))
        throw new Error(b(0x174));
    const q = [
            'id',
            b(0x173),
            'name',
            'role',
            b(0x1a4),
            b(0x17f),
            b(0x16b)
        ], r = {};
    for (const s of q) {
        if (s in a) {
            const t = a[s];
            (typeof t === b(0x18a) || typeof t === b(0x1b5)) && (r[s] = t);
        }
    }
    return r;
}
function n() {
    const a = c, b = sessionStorage[a(0x172)]('appVersion');
    b && b !== f && sessionStorage[a(0x182)](a(0x19f), a(0x16d)), sessionStorage['setItem'](a(0x1bc), f);
}
async function o() {
    const a = c;
    try {
        const b = window[a(0x1b0)] + a(0x188);
        console[a(0x171)](a(0x180), b);
        const q = await i(b, {
            'method': a(0x198),
            'headers': { 'Content-Type': a(0x191) }
        });
        console[a(0x171)](a(0x1a3), q[a(0x197)]);
        const r = await q[a(0x18c)]();
        console[a(0x171)](a(0x1b2), r);
        if (q['ok']) {
            if (!r || typeof r !== 'object' || !r[a(0x1ac)])
                throw new Error(a(0x189));
            const s = m(r['user']);
            sessionStorage[a(0x182)](a(0x18d), String(s['id']));
            const t = k();
            l(), n(), window[a(0x1b6)][a(0x19b)]({}, document[a(0x1bd)], window[a(0x195)][a(0x1a0)]), console[a(0x171)](a(0x185), t ? a(0x1ae) : 'dashboard');
            const u = t ? '/welcome.html' : a(0x16f);
            setTimeout(() => {
                const v = a;
                window[v(0x195)][v(0x19e)] = u;
            }, 0x64);
        } else
            console[a(0x171)](a(0x17a) + q['status'] + '),\x20redirecting\x20to\x20login'), console[a(0x171)](a(0x16e), r), setTimeout(() => {
                const v = a;
                window[v(0x195)]['href'] = v(0x1a1);
            }, 0x64);
    } catch (v) {
        console[a(0x186)](a(0x1aa), v[a(0x1ad)], v), setTimeout(() => {
            const w = a;
            window[w(0x195)]['href'] = w(0x1a1);
        }, 0x64);
    }
}
setTimeout(() => {
    o();
}, 0x1f4);
function p() {
    const a = [
        'mZu3mtm0mZbLCKLUC1q',
        'y29UDgvUDa',
        'y29UC29Szq',
        'CgXHBG',
        '8j+uJsbwzxjPzNLPBMCGC2vZC2LVBIbHDdO',
        'Aw5JBhvKzq',
        'C2v0sxrLBq',
        'BgvUz3rO',
        'mtaWmJzby0v0rui',
        '4PYfifnLC3nPB24GDMvYAwzPzwqSihjLzgLYzwn0Aw5NihrVoG',
        'zxjYB3i',
        'DhjHy2u',
        'l2f1DgGVDMvYAwz5',
        'sw52ywXPzcbbueKGCMvZCg9UC2uGzM9YBwf0',
        'C3rYAw5N',
        'Dg9tDhjPBMC',
        'ANnVBG',
        'DxnLCKLK',
        'w09lxsbdu1jgihrVA2vUigLUAxrPywXPEMvK',
        'mtCYmZmYotLHEuXdrLy',
        'Dg9Rzw4',
        'yxbWBgLJyxrPB24VANnVBG',
        'C2v0qxr0CMLIDxrL',
        'Ag9ZDg5HBwu',
        'DgfIBgu',
        'Bg9JyxrPB24',
        'w1DbuK5jtKDDiezHAwXLzcb0BYbMzxrJAcbdu1jgihrVA2vU',
        'C3rHDhvZ',
        'r0vu',
        'ywrKrxzLBNrmAxn0zw5LCG',
        're9nq29UDgvUDeXVywrLza',
        'CMvWBgfJzvn0yxrL',
        'nJa4mNLtEg1Sqq',
        'yxbWBhK',
        'AhjLzG',
        'C2HVD1zLCNnPB25vCgrHDgu',
        'Cgf0Ag5HBwu',
        'l2XVz2LUlMH0BwW',
        'ChjVDg90ExbL',
        '8j+tOsbwzxjPzNKGCMvZCg9UC2uGC3rHDhvZoG',
        'CgLJDhvYzq',
        'mti3nZe3nNLsDhHjEa',
        'yMLUza',
        'w1DbuK5jtKDDientuKyGDg9Rzw4GzMv0y2GGzxjYB3i6',
        'B2jQzwn0',
        'mtCXBhboEKfY',
        '4P2mievYCM9Yigr1CMLUzYb2zxjPzMLJyxrPB246',
        'x19WCM90B19F',
        'DxnLCG',
        'BwvZC2fNzq',
        'D2vSy29Tzq',
        'D2fYBG',
        'qvbjx0jbu0vFvvjm',
        'CxvLCNLtzwXLy3rVCG',
        '8j+tHcbwzxjPzNKGCMvZCg9UC2uGzgf0ytO',
        'ou5cCxnNBW',
        'Dg9vChbLCKnHC2u',
        'BNvTyMvY',
        'AgLZDg9YEq',
        'nJe4mduZnMDmzM9jzW',
        'ms4WlJa',
        'C29SAxnFDMLZAxrLza',
        'y29UC3rYDwn0B3i',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'yxbWvMvYC2LVBG',
        'DgL0Bgu',
        'Bwv0Ag9K',
        'l2f1DgGVy3nYzI10B2TLBG',
        'mJe0ou9qEfLuDW',
        'yxv0Af9WCM92AwrLCG',
        'wc1du1jglvrVA2vU',
        'Dhj1zq',
        'uMvZCg9UC2u6',
        'l2rHC2HIB2fYzc5ODg1S',
        'Aw5MBW',
        'Bg9N',
        'z2v0sxrLBq',
        'zw1HAwW',
        'sw52ywXPzcb1C2vYig9IAMvJDa',
        'zxHJzxb0Aw9U',
        'mti3lJaUmc4X',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'nZi2ntiWEu5IAwns',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        '4P2mifnLC3nPB24GAw52ywXPzcaOC3rHDhvZia',
        'Ahr0CdO'
    ];
    return p = function () {
        return a;
    }, p();
}