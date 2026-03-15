const c = d;
function d(a, b) {
    a = a - 0xf2;
    const g = f();
    let h = g[a];
    if (d['HrWUAl'] === undefined) {
        var i = function (m) {
            const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let o = '', p = '';
            for (let q = 0x0, r, s, t = 0x0; s = m['charAt'](t++); ~s && (r = q % 0x4 ? r * 0x40 + s : s, q++ % 0x4) ? o += String['fromCharCode'](0xff & r >> (-0x2 * q & 0x6)) : 0x0) {
                s = n['indexOf'](s);
            }
            for (let u = 0x0, v = o['length']; u < v; u++) {
                p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(p);
        };
        d['NxDuUt'] = i, d['OWRMyE'] = {}, d['HrWUAl'] = !![];
    }
    const j = g[0x0], k = a + j, l = d['OWRMyE'][k];
    return !l ? (h = d['NxDuUt'](h), d['OWRMyE'][k] = h) : h = l, h;
}
(function (g, h) {
    const i = (function () {
            let m = !![];
            return function (n, o) {
                const p = m ? function () {
                    if (o) {
                        const q = o['apply'](n, arguments);
                        return o = null, q;
                    }
                } : function () {
                };
                return m = ![], p;
            };
        }()), j = i(this, function () {
            let m;
            try {
                const p = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                m = p();
            } catch (q) {
                m = window;
            }
            const n = m['console'] = m['console'] || {}, o = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let r = 0x0; r < o['length']; r++) {
                const s = i['constructor']['prototype']['bind'](i), t = o[r], u = n[t] || s;
                s['__proto__'] = i['bind'](i), s['toString'] = u['toString']['bind'](u), n[t] = s;
            }
        });
    j();
    const k = d, l = g();
    while (!![]) {
        try {
            const m = -parseInt(k(0x103)) / 0x1 * (parseInt(k(0x140)) / 0x2) + parseInt(k(0x152)) / 0x3 + -parseInt(k(0x13a)) / 0x4 + parseInt(k(0x12c)) / 0x5 * (parseInt(k(0xf8)) / 0x6) + -parseInt(k(0x156)) / 0x7 + parseInt(k(0x144)) / 0x8 * (parseInt(k(0xf5)) / 0x9) + parseInt(k(0x11a)) / 0xa * (parseInt(k(0x137)) / 0xb);
            if (m === h)
                break;
            else
                l['push'](l['shift']());
        } catch (n) {
            l['push'](l['shift']());
        }
    }
}(f, 0x79ab5));
function e() {
    const a = d, b = (function () {
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
        }()), g = document[a(0x10b)](a(0x13d)), h = document['getElementById'](a(0x111)), i = document[a(0x102)](a(0x112)), j = document['getElementById'](a(0x11e)), k = document[a(0x102)](a(0x105)), l = document[a(0x123)](a(0x157));
    function m() {
        const t = a, u = b(this, function () {
                const v = d, w = function () {
                        const A = d;
                        let B;
                        try {
                            B = Function('return\x20(function()\x20' + A(0x124) + ');')();
                        } catch (C) {
                            B = window;
                        }
                        return B;
                    }, x = w(), y = x[v(0xf6)] = x[v(0xf6)] || {}, z = [
                        v(0x101),
                        v(0x12f),
                        v(0x11c),
                        'error',
                        v(0x118),
                        'table',
                        v(0x131)
                    ];
                for (let A = 0x0; A < z[v(0x106)]; A++) {
                    const B = b[v(0x129)][v(0x153)]['bind'](b), C = z[A], D = y[C] || B;
                    B[v(0x139)] = b[v(0x109)](b), B[v(0x136)] = D['toString'][v(0x109)](D), y[C] = B;
                }
            });
        u(), h && (h['style']['display'] = t(0x150), h[t(0xfe)][t(0x135)]('active')), i && (i['style']['display'] = t(0x150), i['classList'][t(0x135)](t(0x13e))), j && (j[t(0x107)]['display'] = t(0x150), j['classList'][t(0x135)](t(0x13e))), k && (k[t(0x107)][t(0x104)] = 'none', k['classList'][t(0x135)](t(0x13e)));
    }
    function n(t) {
        g['forEach'](u => {
            const v = d;
            u['classList'][v(0x135)](v(0x13e)), u[v(0x13f)]('data-target') === t && u[v(0xfe)][v(0x126)](v(0x13e));
        });
    }
    m();
    const o = localStorage[a(0x14a)](a(0xfa));
    let p = a(0x14d);
    o && [
        a(0x14d),
        'portal',
        a(0x13c),
        a(0xf4)
    ][a(0x12e)](o) && (p = o);
    if (p === a(0x14d) && h)
        h['style'][a(0x104)] = a(0x120), h[a(0xfe)][a(0x126)](a(0x13e)), n(a(0x10d)), setTimeout(() => {
            const t = a;
            window[t(0x110)] && window[t(0x110)][t(0x128)]();
        }, 0x64);
    else {
        if (p === a(0x12d) && i)
            i[a(0x107)][a(0x104)] = a(0x120), i[a(0xfe)][a(0x126)](a(0x13e)), n('Portal');
        else {
            if (p === a(0x13c) && j)
                j[a(0x107)][a(0x104)] = a(0x120), j['classList']['add']('active'), n(a(0xf2)), typeof window[a(0x14c)] !== a(0xfc) && window[a(0x14c)] && !window[a(0x14c)][a(0x12b)] && window[a(0x14c)][a(0x11d)]();
            else {
                if (p === a(0xf4) && k) {
                    k['style'][a(0x104)] = a(0x120), k['classList'][a(0x126)](a(0x13e)), n(a(0x14e));
                    if (l)
                        l[a(0x107)][a(0x104)] = a(0x150);
                } else {
                    h && (h[a(0x107)][a(0x104)] = a(0x120), h['classList'][a(0x126)](a(0x13e))), n('Dashboard');
                    if (l)
                        l[a(0x107)][a(0x104)] = a(0x150);
                }
            }
        }
    }
    l && (l[a(0x107)][a(0x14b)] = a(0x138), l[a(0xfe)][a(0x135)](a(0x10f))), g[a(0x147)](t => {
        const u = a;
        t['addEventListener'](u(0x142), v => {
            const w = u;
            v['preventDefault']();
            const x = t[w(0x13f)](w(0x143)) || '', y = String(x)['toLowerCase']();
            console['log'](w(0x125), x), n(x), m(), l && (l[w(0x107)][w(0x14b)] = w(0x138), l[w(0xfe)][w(0x135)](w(0x10f)));
            if (y === w(0x14d)) {
                localStorage['setItem']('currentNavigationTarget', w(0x14d)), console[w(0x101)](w(0x11b)), h && (h[w(0x107)][w(0x104)] = w(0x120), h[w(0xfe)][w(0x126)]('active'), window[w(0x110)] && setTimeout(() => {
                    const z = w;
                    window[z(0x110)]['updateCharts']();
                }, 0x32));
                if (l) {
                    l['style'][w(0x104)] = 'none';
                    try {
                        if (typeof window[w(0x10c)] === 'function')
                            window[w(0x10c)](!![]);
                    } catch (z) {
                        console[w(0x10a)](w(0x114), z);
                    }
                }
            } else {
                if (y === w(0x12d)) {
                    localStorage[w(0x10e)](w(0xfa), w(0x12d)), console[w(0x101)](w(0xf9)), i && (i[w(0x107)][w(0x104)] = w(0x120), i[w(0xfe)][w(0x126)](w(0x13e)));
                    if (l) {
                        l[w(0x107)]['cssText'] = w(0x138), l['classList']['remove'](w(0x10f));
                        try {
                            if (typeof window['dockInputInstantly'] === w(0x119))
                                window[w(0x10c)](!![]);
                        } catch (A) {
                            console[w(0x10a)](w(0x114), A);
                        }
                    }
                } else {
                    if (y === w(0x13c) || y === w(0x121) || y === w(0xfd)) {
                        localStorage['setItem'](w(0xfa), w(0x13c)), console[w(0x101)]('Switching\x20to\x20clips\x20view'), j && (j['style'][w(0x104)] = w(0x120), j[w(0xfe)][w(0x126)](w(0x13e)), typeof window[w(0x14c)] !== w(0xfc) && window[w(0x14c)] && !window[w(0x14c)]['initialized'] && window[w(0x14c)][w(0x11d)]());
                        if (l) {
                            l['style'][w(0x14b)] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', l[w(0xfe)][w(0x135)](w(0x10f));
                            try {
                                if (typeof window['dockInputInstantly'] === w(0x119))
                                    window[w(0x10c)](!![]);
                            } catch (B) {
                                console[w(0x10a)](w(0x114), B);
                            }
                        }
                    } else {
                        if (y === w(0x117) || y === w(0xf4)) {
                            localStorage[w(0x10e)]('currentNavigationTarget', 'custom'), console[w(0x101)](w(0x154)), k && (k[w(0x107)][w(0x104)] = 'block', k[w(0xfe)][w(0x126)](w(0x13e)));
                            if (l) {
                                l[w(0x107)][w(0x14b)] = w(0x138), l[w(0xfe)]['remove'](w(0x10f));
                                try {
                                    if (typeof window[w(0x10c)] === 'function')
                                        window['dockInputInstantly'](!![]);
                                } catch (C) {
                                    console[w(0x10a)](w(0x114), C);
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    const q = document[a(0x102)](a(0x146));
    q && q[a(0xff)](a(0x142), function (t) {
        const u = a;
        t[u(0x149)](), t[u(0x116)]();
        const v = document[u(0x102)](u(0x132)), w = this[u(0x123)](u(0xf3));
        if (v)
            v['classList'][u(0x134)](u(0x11f));
        if (w)
            w[u(0xfe)][u(0x134)](u(0x145));
        if (!v || !v[u(0x133)](t['target'])) {
            const x = document[u(0x102)](u(0x11e)), y = document['querySelector'](u(0x157));
            document[u(0x10b)](u(0x14f))[u(0x147)](z => {
                const A = u;
                z[A(0x107)][A(0x104)] = 'none', z[A(0xfe)][A(0x135)](A(0x13e));
            }), x && (x[u(0x107)][u(0x104)] = 'block', x[u(0xfe)][u(0x126)](u(0x13e)), typeof window[u(0x14c)] !== u(0xfc) && window[u(0x14c)] && !window[u(0x14c)][u(0x12b)] && window['clipsStudio'][u(0x11d)]());
            if (y) {
                y['style'][u(0x104)] = 'none';
                try {
                    if (typeof window[u(0x10c)] === u(0x119))
                        window[u(0x10c)](!![]);
                } catch (z) {
                    console[u(0x10a)](u(0x114), z);
                }
            }
            n(u(0x13c));
        }
    });
    const r = document[a(0x10b)](a(0x148));
    r['forEach'](t => {
        const u = a;
        t[u(0xff)](u(0x142), function (v) {
            const w = u;
            v[w(0x149)]();
            const x = this[w(0x13f)]('data-target');
            if (x === w(0x121)) {
                const y = document['getElementById'](w(0x11e)), z = document[w(0x123)]('.input-section');
                document[w(0x10b)](w(0x14f))[w(0x147)](C => {
                    const D = w;
                    C[D(0x107)][D(0x104)] = 'none', C[D(0xfe)][D(0x135)]('active');
                }), y && (y[w(0x107)]['display'] = 'block', y[w(0xfe)][w(0x126)](w(0x13e)), typeof window[w(0x14c)] !== 'undefined' && window[w(0x14c)] && !window[w(0x14c)]['initialized'] && window['clipsStudio'][w(0x11d)]());
                if (z) {
                    z[w(0x107)][w(0x104)] = w(0x150);
                    try {
                        if (typeof window[w(0x10c)] === w(0x119))
                            window[w(0x10c)](!![]);
                    } catch (C) {
                        console[w(0x10a)]('Error\x20docking\x20input:', C);
                    }
                }
                n('clips');
                const A = document['getElementById'](w(0x132)), B = document[w(0x123)]('#clips-toggle\x20.chevron-icon');
                if (A)
                    A[w(0xfe)][w(0x135)]('open');
                if (B)
                    B[w(0xfe)][w(0x135)](w(0x145));
            }
        });
    }), document[a(0xff)](a(0x142), function (t) {
        const u = a, v = document['getElementById']('clips-toggle'), w = document[u(0x102)]('clips-submenu');
        if (w && v && !v['contains'](t[u(0x100)]) && !w[u(0x133)](t[u(0x100)])) {
            w[u(0xfe)][u(0x135)]('open');
            const x = v[u(0x123)](u(0xf3));
            if (x)
                x[u(0xfe)][u(0x135)]('rotated');
        }
    });
    const s = document[a(0x123)]('.nav-item[data-target=\x22Portal\x22]');
    s && s[a(0xff)](a(0x142), function (t) {
        const u = a;
        t[u(0x149)](), console[u(0x101)](u(0x155));
        const v = document['getElementById'](u(0x112)), w = document[u(0x102)](u(0x111)), x = document['getElementById'](u(0x11e)), y = document[u(0x123)]('.input-section');
        w && (w[u(0x107)][u(0x104)] = u(0x150), w[u(0xfe)][u(0x135)]('active')), x && (x['style'][u(0x104)] = u(0x150), x[u(0xfe)][u(0x135)](u(0x13e))), y && (y[u(0x107)][u(0x104)] = u(0x150)), v && (v[u(0x107)][u(0x104)] = u(0x120), v[u(0xfe)][u(0x126)](u(0x13e))), n(u(0x122));
    }), document['addEventListener'](a(0x13b), t => {
        const u = a;
        if ((t[u(0x141)] || t[u(0x127)]) && t[u(0xfb)] === 'k') {
            t[u(0x149)]();
            const v = document[u(0x123)](u(0x12a));
            if (v) {
                v[u(0xfe)][u(0x134)](u(0x108));
                const w = v[u(0xfe)][u(0x133)](u(0x108));
                localStorage[u(0x10e)](u(0x151), w);
            }
        }
    });
}
document[c(0xf7)] === c(0x130) ? document[c(0xff)](c(0x113), e) : e();
function f() {
    const a = [
        'Dg9Nz2XL',
        'CMvTB3zL',
        'Dg9tDhjPBMC',
        'mtm1m1b1rw1msa',
        'zgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50oYbWB3nPDgLVBJOGywjZB2X1DguGiwLTCg9YDgfUDdSGDMLZAwjPBgL0EtOGAgLKzgvUicfPBxbVCNrHBNq7ihOTAw5KzxG6ic0XmdaWmcaHAw1WB3j0yw50oYbWB2LUDgvYlwv2zw50CZOGBM9UzsaHAw1WB3j0yw50oW',
        'x19WCM90B19F',
        'mtq2odC1mLH1zLLoDW',
        'A2v5zg93BG',
        'y2XPChm',
        'lM5HDI1PDgvTw2rHDgeTDgfYz2v0xq',
        'ywn0AxzL',
        'z2v0qxr0CMLIDxrL',
        'mta0nJi2qwXZzvz0',
        'y3rYBeTLEq',
        'y2XPy2S',
        'zgf0ys10yxjNzxq',
        'mtK5mJHnr1bABMy',
        'CM90yxrLza',
        'y2XPChmTDg9Nz2XL',
        'zM9YrwfJAa',
        'lMnSAxbZlxn1yM1LBNuGlM5HDI1PDgvT',
        'ChjLDMvUDerLzMf1Bhq',
        'z2v0sxrLBq',
        'y3nZvgv4Da',
        'y2XPChntDhvKAw8',
        'zgfZAgjVyxjK',
        'q3vZDg9T',
        'lMrHC2HIB2fYzc1JB250ywLUzxiSic5WB3j0ywWTy29UDgfPBMvY',
        'BM9Uzq',
        'C2LKzwjHCKv4CgfUzgvK',
        'mJmZmJa0nevjvLDtAG',
        'ChjVDg90ExbL',
        'u3DPDgnOAw5NihrVign1C3rVBsbLzgL0B3iGDMLLDW',
        'ug9YDgfSignSAwnRzwq',
        'mZi2ndi2mxPgteDHEq',
        'lMLUChv0lxnLy3rPB24',
        'q2XPChm',
        'lMnOzxzYB24TAwnVBG',
        'y3vZDg9T',
        'mtC3m0zXzNDfzq',
        'y29UC29Szq',
        'CMvHzhLtDgf0zq',
        'nLnxzw9gyW',
        'u3DPDgnOAw5NihrVihbVCNrHBcb2Awv3',
        'y3vYCMvUDe5HDMLNyxrPB25uyxjNzxq',
        'A2v5',
        'Dw5KzwzPBMvK',
        'y2XPChnJB250ywLUzxi',
        'y2XHC3nmAxn0',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'DgfYz2v0',
        'Bg9N',
        'z2v0rwXLBwvUDej5swq',
        'mtj6tfDQwMy',
        'zgLZCgXHEq',
        'y3vZDg9TrwrPDg9Yq29UDgfPBMvY',
        'BgvUz3rO',
        'C3r5Bgu',
        'zxHWyw5Kzwq',
        'yMLUza',
        'zxjYB3i',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'zg9JA0LUChv0sw5ZDgfUDgX5',
        'rgfZAgjVyxjK',
        'C2v0sxrLBq',
        'AxmTzMLYC3qTChjVBxb0',
        'yw5HBhL0AwnZtwfUywDLCG',
        'zgfZAgjVyxjKq29UDgfPBMvY',
        'Cg9YDgfSq29UDgfPBMvY',
        're9nq29UDgvUDeXVywrLza',
        'rxjYB3iGzg9JA2LUzYbPBNb1DdO',
        'zxHWB3j0CW',
        'C3rVCfbYB3bHz2f0Aw9U',
        'y3vZDg9TlwvKAxq',
        'zxHJzxb0Aw9U',
        'zNvUy3rPB24',
        'nJe2mhPTtMnwDq',
        'u3DPDgnOAw5NihrVigrHC2HIB2fYzcb2Awv3',
        'Aw5MBW',
        'Aw5PDa',
        'y2XPChndB250ywLUzxi',
        'B3bLBG',
        'yMXVy2S',
        'y2XPChmTC3r1zgLV',
        'ug9YDgfS',
        'CxvLCNLtzwXLy3rVCG',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'tMf2AwDHDgLVBIbJBgLJA2vKoG',
        'ywrK',
        'Bwv0yuTLEq',
        'DxbKyxrLq2HHCNrZ',
        'y29UC3rYDwn0B3i',
        'lNnPzgvIyxi',
        'Aw5PDgLHBgL6zwq',
        'mZa3odKWnvnky2jNsG',
        'Cg9YDgfS',
        'Aw5JBhvKzxm',
        'D2fYBG',
        'Bg9HzgLUzW',
        'DhjHy2u',
        'y2XPChmTC3vIBwvUDq',
        'y29UDgfPBNm'
    ];
    return f = function () {
        return a;
    }, f();
}
typeof module !== 'undefined' && module[c(0x115)] && (module['exports'] = { 'initNavigation': e });