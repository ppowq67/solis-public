const c = j;
(function (a, b) {
    const r = j, s = a();
    while (!![]) {
        try {
            const t = -parseInt(r(0x10a)) / 0x1 * (-parseInt(r(0x127)) / 0x2) + -parseInt(r(0xd5)) / 0x3 * (parseInt(r(0xe1)) / 0x4) + parseInt(r(0xf2)) / 0x5 + -parseInt(r(0x10d)) / 0x6 * (-parseInt(r(0x101)) / 0x7) + parseInt(r(0xd4)) / 0x8 + parseInt(r(0x105)) / 0x9 * (parseInt(r(0xf5)) / 0xa) + -parseInt(r(0x103)) / 0xb * (parseInt(r(0xe9)) / 0xc);
            if (t === b)
                break;
            else
                s['push'](s['shift']());
        } catch (u) {
            s['push'](s['shift']());
        }
    }
}(p, 0x481ba));
const d = (function () {
        const r = (function () {
                let u = !![];
                return function (v, w) {
                    const x = u ? function () {
                        if (w) {
                            const y = w['apply'](v, arguments);
                            return w = null, y;
                        }
                    } : function () {
                    };
                    return u = ![], x;
                };
            }()), s = r(this, function () {
                const u = function () {
                        let y;
                        try {
                            y = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (z) {
                            y = window;
                        }
                        return y;
                    }, v = u(), w = v['console'] = v['console'] || {}, x = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let y = 0x0; y < x['length']; y++) {
                    const z = r['constructor']['prototype']['bind'](r), A = x[y], B = w[A] || z;
                    z['__proto__'] = r['bind'](r), z['toString'] = B['toString']['bind'](B), w[A] = z;
                }
            });
        s();
        let t = !![];
        return function (u, v) {
            const w = t ? function () {
                const x = j;
                if (v) {
                    const y = v[x(0xfe)](u, arguments);
                    return v = null, y;
                }
            } : function () {
            };
            return t = ![], w;
        };
    }()), e = d(this, function () {
        const a = j;
        let b;
        try {
            const t = Function(a(0x11c) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            b = t();
        } catch (u) {
            b = window;
        }
        const r = b['console'] = b['console'] || {}, s = [
                a(0x125),
                a(0x118),
                a(0x137),
                a(0xff),
                a(0xd2),
                a(0xeb),
                a(0xd1)
            ];
        for (let v = 0x0; v < s[a(0xd7)]; v++) {
            const w = d[a(0xd8)][a(0x116)][a(0xc9)](d), x = s[v], y = r[x] || w;
            w['__proto__'] = d[a(0xc9)](d), w[a(0xdb)] = y[a(0xdb)]['bind'](y), r[x] = w;
        }
    });
e();
const f = window[c(0x11e)] || c(0xdc), g = { 'selectedPlanType': c(0xfa) }, h = [
        c(0xf6),
        c(0xfa),
        c(0x139)
    ];
function i(a) {
    const b = c, r = Number(a);
    if (!Number[b(0x134)](r) || r < 0x0)
        return 0x1e;
    return r;
}
function j(a, b) {
    a = a - 0xc9;
    const r = p();
    let s = r[a];
    if (j['hGMmOz'] === undefined) {
        var t = function (x) {
            const y = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let z = '', A = '';
            for (let B = 0x0, C, D, E = 0x0; D = x['charAt'](E++); ~D && (C = B % 0x4 ? C * 0x40 + D : D, B++ % 0x4) ? z += String['fromCharCode'](0xff & C >> (-0x2 * B & 0x6)) : 0x0) {
                D = y['indexOf'](D);
            }
            for (let F = 0x0, G = z['length']; F < G; F++) {
                A += '%' + ('00' + z['charCodeAt'](F)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(A);
        };
        j['DjgDBL'] = t, j['YZhbIN'] = {}, j['hGMmOz'] = !![];
    }
    const u = r[0x0], v = a + u, w = j['YZhbIN'][v];
    return !w ? (s = j['DjgDBL'](s), j['YZhbIN'][v] = s) : s = w, s;
}
async function k() {
    const a = c;
    try {
        const b = await fetch(f + a(0x113), {
            'method': 'GET',
            'credentials': a(0x102),
            'headers': { 'Content-Type': a(0xca) }
        });
        if (!b['ok'])
            throw new Error('Failed\x20to\x20check\x20limit');
        const r = await b[a(0x110)]();
        return r;
    } catch (s) {
        return null;
    }
}
function l(a) {
    const b = c;
    try {
        if (!a || typeof a !== b(0x108)) {
            console['error'](b(0x136));
            return;
        }
        const {
                used: r,
                limit: s,
                plan_type: t,
                last_video_date: u,
                cooldown_seconds: v,
                remaining_seconds: w
            } = a, x = Number[b(0x134)](r) ? Math['max'](0x0, r) : 0x0, y = Number[b(0x134)](s) ? Math[b(0x13d)](0x1, s) : 0x1, z = h[b(0x115)](t) ? t : b(0x106), A = i(w) || i(v);
        let B = Math[b(0x13d)](0x0, A), C = b(0x11d);
        if (B > 0x0) {
            const a5 = Math[b(0x12e)](B / 0x3c), a6 = B % 0x3c;
            a5 > 0x0 ? C = a5 + 'm\x20' + a6 + 's' : C = a6 + 's';
        }
        let D = 'Never';
        if (u && u !== '1970-01-01') {
            const a7 = String(u)[b(0x112)]('\x20'), a8 = a7[0x0], a9 = a7[0x1] || b(0xfb);
            /^\d{4}-\d{2}-\d{2}$/[b(0xf9)](a8) && /^\d{2}:\d{2}/[b(0xf9)](a9) && (D = a8 + b(0x124) + a9);
        }
        const E = document[b(0xea)](b(0xe6));
        E[b(0x11a)] = 'limit-overlay', E['id'] = b(0x121);
        const F = document[b(0xea)](b(0xe6));
        F['className'] = b(0x122);
        const G = document[b(0xea)]('div');
        G[b(0x11a)] = b(0x12d);
        const H = document['createElement'](b(0xe6));
        H[b(0x11a)] = b(0xee);
        const I = document[b(0xea)](b(0xe6));
        I[b(0x11a)] = b(0x10c), I[b(0x10f)] = b(0x131), H[b(0xe7)](I);
        const J = document[b(0xea)]('h1');
        J[b(0x12f)] = 'You\x27ve\x20hit\x20your\x0adaily\x20limit', H[b(0xe7)](J);
        const K = document[b(0xea)]('p');
        K['className'] = b(0xf4), K[b(0x12f)] = b(0xe0) + y + b(0x11f), H[b(0xe7)](K), G[b(0xe7)](H);
        const L = document[b(0xea)](b(0xe6));
        L['className'] = b(0xdd);
        const M = document[b(0xea)](b(0xe6));
        M[b(0x11a)] = b(0xcc);
        const N = document['createElement'](b(0xe6));
        N[b(0x11a)] = b(0x12a), N['innerHTML'] = b(0x143), N[b(0xe7)](document[b(0xef)](b(0x142))), M[b(0xe7)](N);
        const O = document['createElement'](b(0xe6));
        O[b(0x11a)] = b(0xfd), O[b(0x12f)] = x + b(0x10b) + y + b(0x13e), M[b(0xe7)](O), L[b(0xe7)](M);
        const P = document['createElement'](b(0xe6));
        P[b(0x11a)] = 'usage-bar-track';
        const Q = document[b(0xea)](b(0xe6));
        Q[b(0x11a)] = 'usage-bar-fill', Q['style'][b(0xe8)] = b(0x123), P['appendChild'](Q), L['appendChild'](P);
        const R = document[b(0xea)](b(0xe6));
        R[b(0x11a)] = b(0x13f), R[b(0x12f)] = b(0x130);
        const S = document[b(0xea)](b(0xe3));
        S[b(0x12f)] = D, R[b(0xe7)](S), L['appendChild'](R);
        const T = document[b(0xea)](b(0xe6));
        T[b(0x11a)] = b(0x13f), T[b(0x12f)] = b(0x100);
        const U = document['createElement']('span');
        U[b(0x12f)] = C, T[b(0xe7)](U), T[b(0xe7)](document[b(0xef)](b(0x135))), L[b(0xe7)](T), G[b(0xe7)](L), F[b(0xe7)](G);
        const V = document[b(0xea)]('div');
        V['className'] = b(0xdf);
        const W = document['createElement'](b(0x132));
        W[b(0x11a)] = b(0x107), W[b(0x117)](b(0x133), o), W['innerHTML'] = b(0xcb), V[b(0xe7)](W);
        const X = document[b(0xea)]('div'), Y = document[b(0xea)](b(0xe6));
        Y[b(0x11a)] = b(0x13c), Y[b(0x12f)] = b(0x12c), X['appendChild'](Y);
        const Z = document['createElement']('div');
        Z[b(0x11a)] = b(0x11b);
        const a0 = document[b(0xea)](b(0xe6));
        a0[b(0x11a)] = b(0x119) + (z === b(0x106) ? b(0xfc) : ''), a0['setAttribute']('data-plan', b(0xf6)), a0[b(0x117)](b(0x133), function (aa) {
            const ab = b;
            m(aa['currentTarget'], ab(0xf6));
        }), a0[b(0x10f)] = '<div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22basicGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#f1f5f9;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#cbd5e1;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#94a3b8;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#basicGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Basic</strong><span>5\x20generations/day</span></div><div\x20class=\x22plan-card-price\x22>$18.99/mo</div>', Z[b(0xe7)](a0);
        const a1 = document[b(0xea)]('div');
        a1[b(0x11a)] = b(0x10e), a1[b(0xf1)](b(0xf3), 'prime'), a1['addEventListener'](b(0x133), function (aa) {
            const ab = b;
            m(aa['currentTarget'], ab(0xfa));
        }), a1['innerHTML'] = b(0xcf), Z[b(0xe7)](a1);
        const a2 = document[b(0xea)]('div');
        a2[b(0x11a)] = 'plan-card', a2['setAttribute'](b(0xf3), b(0x139)), a2[b(0x117)](b(0x133), function (aa) {
            const ab = b;
            m(aa[ab(0xf7)], ab(0x139));
        }), a2['innerHTML'] = b(0x13a), Z[b(0xe7)](a2), X[b(0xe7)](Z), V[b(0xe7)](X);
        const a3 = document[b(0xea)]('div');
        a3[b(0x11a)] = b(0xe4);
        const a4 = document[b(0xea)](b(0x132));
        a4[b(0x11a)] = 'cta-btn', a4[b(0x117)]('click', n), a4['innerHTML'] = b(0x138), a3['appendChild'](a4), V[b(0xe7)](a3), F[b(0xe7)](V), E[b(0xe7)](F), document[b(0xf0)]['appendChild'](E), setTimeout(() => {
            const aa = b;
            E[aa(0x109)]['opacity'] = '1';
        }, 0xa);
    } catch (aa) {
        console[b(0xff)]('[LimitModal]\x20Error\x20rendering\x20modal:', aa);
    }
}
function m(a, b) {
    const r = c;
    if (!h[r(0x115)](b)) {
        console[r(0x118)](r(0xce), b);
        return;
    }
    g[r(0x141)] = b;
    const s = a[r(0x114)](r(0x126))[r(0xd0)]('.plan-card');
    s['forEach'](t => t['classList'][r(0xcd)]('highlighted')), a['classList'][r(0x128)]('highlighted');
}
function n() {
    const a = c, b = g[a(0x141)];
    if (!h['includes'](b)) {
        console[a(0xff)](a(0xde), b);
        return;
    }
    const r = new URL(a(0x140), window[a(0xec)][a(0xd6)]);
    r[a(0xe2)]['set'](a(0xed), b), window[a(0xec)][a(0x12b)] = r[a(0xdb)]();
}
function o() {
    const a = c, b = document[a(0xd3)](a(0x121));
    b && (b[a(0x109)][a(0xf8)] = '0', setTimeout(() => b[a(0xcd)](), 0xfa));
}
function p() {
    const a = [
        'mJe1mtLNqNHqwxK',
        'zNjLzq',
        'y2XVC2uTyNrU',
        'B2jQzwn0',
        'C3r5Bgu',
        'ndqWndK3vLnlwMj5',
        'ic8G',
        'BgLTAxqTD3jHCa',
        'mJrpy29jrfG',
        'CgXHBI1JyxjKigHPz2HSAwDODgvK',
        'Aw5Uzxjive1m',
        'ANnVBG',
        'y2HLy2Thzw5LCMf0Aw9UtgLTAxq',
        'C3bSAxq',
        'l3vZzxiVy2HLy2STBgLTAxq',
        'y2XVC2vZDa',
        'Aw5JBhvKzxm',
        'ChjVDg90ExbL',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'D2fYBG',
        'CgXHBI1JyxjK',
        'y2XHC3noyw1L',
        'CgXHBI1VChrPB25Z',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'BM93',
        'qvbjx0jbu0vFvvjm',
        'ig9MihLVDxiGzgfPBhKGz2vUzxjHDgLVBNmUifvWz3jHzguGDg8GA2vLCcbJCMvHDgLUzYb3AxrOB3v0igLUDgvYCNvWDgLVBI4',
        'C2vSzwn0ugXHBG',
        'BgLTAxrnB2rHBa',
        'BgLTAxqTBw9KywW',
        'mtaWjq',
        'igf0ia',
        'Bg9N',
        'lNbSyw4TB3b0Aw9UCW',
        'mKLXqNb3Ea',
        'ywrK',
        'BgLTAxq',
        'DxnHz2uTBgfIzwW',
        'AhjLzG',
        'q2HVB3nLigeGCgXHBG',
        'CgfUzwWTBgvMDa',
        'zMXVB3i',
        'Dgv4DenVBNrLBNq',
        'tgfZDcbNzw5LCMf0zwq6ia',
        'phn2zYb3Awr0Ad0ImJGIigHLAwDODd0ImJGIihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsiJrKy2qtneiIbZDhjVA2uTD2LKDgG9iJiUmIiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ48y2LYy2XLign4psiXmIiGy3K9iJeYiIbYpsiXmciVpJXSAw5LihGXpsiXmIiGEte9iJGIihGYpsiXmIiGEti9iJeYiI8+pgXPBMuGEde9iJeYiIb5mt0ImtyIihGYpsiXmI4WmsiGEti9iJe2iI8+pc9ZDMC+',
        'yNv0Dg9U',
        'y2XPy2S',
        'AxnjBNrLz2vY',
        'imk3ig9YihvWz3jHzguGzM9Yig1VCMu',
        'w0XPBwL0tw9KywXDieLUDMfSAwqGzgf0ysbZDhj1y3r1CMu',
        'Aw5MBW',
        'vxbNCMfKzsbUB3C8C3zNihDPzhrOpsiXnciGAgvPz2H0psiXnciGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjUB25LiIbZDhjVA2u9iMn1CNjLBNrdB2XVCIiGC3rYB2TLlxDPzhrOpsiYlJuIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzciGC3rYB2TLlwXPBMvQB2LUpsjYB3vUzci+pgXPBMuGEde9iJuIihKXpsiXmIiGEdi9iJe5iIb5mJ0ImtiIlZ48Cg9SEwXPBMuGCg9PBNrZpsiXmIa1ide5ideYideYide5iI8+pc9ZDMC+',
        'zwXPDgu',
        'pgrPDIbJBgfZCZ0ICgXHBI1JyxjKlwLJB24IpJXZDMCGD2LKDgG9iJiWiIbOzwLNAhq9iJiWiIb2Awv3qM94psiWidaGmtaWideWmciGzMLSBd0IBM9UzsiGEg1SBNm9iMH0Dha6lY93D3CUDZmUB3jNlZiWmdaVC3zNiJ48zgvMCZ48BgLUzwfYr3jHzgLLBNqGAwq9iMvSAxrLr3jHzciGEde9iJaLiIb5mt0ImcuIihGYpsiXmdaLiIb5mJ0ImtaWjsi+phn0B3aGB2zMC2v0psiWjsiGC3r5Bgu9iNn0B3aTy29SB3i6i2zMnMiZzdTZDg9Wlw9WywnPDhK6msiGlZ48C3rVCcbVzMzZzxq9iJuWjsiGC3r5Bgu9iNn0B3aTy29SB3i6i2zMm2qWmdTZDg9Wlw9WywnPDhK6msiGlZ48C3rVCcbVzMzZzxq9iJeWmcuIihn0EwXLpsjZDg9WlwnVBg9YoInJnZaWmda7C3rVCc1VCgfJAxr5oJeIic8+pc9SAw5LyxjhCMfKAwvUDd48l2rLzNm+pgnPCMnSzsbJEd0IntaIign5psi1mciGCJ0ImtyIigzPBgW9iNvYBcGJzwXPDgvhCMfKksi+pc9JAxjJBgu+pgvSBgLWC2uGCNG9iJqYiIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iNvYBcGJzwXPDgvhCMfKksiGC3rYB2TLlxDPzhrOpsiXmIiGzMLSBd0IBM9UzsiGDhjHBNnMB3jTpsjYB3rHDguOnduGntaGntaPiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIpJWVzwXSAxbZzt48zwXSAxbZzsbYEd0IndiIihj5psiXociGy3G9iJuWiIbJEt0IntaIihn0CM9Rzt0IDxjSkcnLBgL0zuDYywqPiIbZDhjVA2uTD2LKDgG9iJeYiIbMAwXSpsjUB25LiIb0CMfUC2zVCM09iNjVDgf0zsGTnduGntaGntaPiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIpJWVzwXSAxbZzt48l3n2zZ48l2rPDJ48zgL2ignSyxnZpsjWBgfUlwnHCMqTyM9KEsi+phn0CM9UzZ5fBgL0ztWVC3rYB25NpJXZCgfUpJqWigDLBMvYyxrPB25Zl2rHEsdcTYbqCMLVCML0EsbXDwv1ztWVC3bHBJ48l2rPDJ48zgL2ignSyxnZpsjWBgfUlwnHCMqTChjPy2uIpIq0os45os9TBZWVzgL2pG',
        'ywXSB3DLza',
        'CgXHBNmTBgfIzwW',
        'Bwf4',
        'ihvZzwq',
        'DxnHz2uTBM90zq',
        'l3bYzw1PDw0UAhrTBa',
        'C2vSzwn0zwrqBgfUvhLWzq',
        'rgfPBhKGz2vUzxjHDgLVBNm',
        'phn2zYb3Awr0Ad0ImtiIigHLAwDODd0ImtiIihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImI41iIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpJXWB2X5z29UihbVAw50CZ0ImJmGnYaXnIaXmIaYmYaXnYaYmYa3iI8+phjLy3qGEd0ImsiGEt0InsiGD2LKDgG9iJe1iIbOzwLNAhq9iJe0iIbYEd0ImIiGCNK9iJiIlZ48l3n2zZ4',
        'yMLUza',
        'yxbWBgLJyxrPB24VANnVBG',
        'phn2zYb3Awr0Ad0ImtqIigHLAwDODd0ImtqIihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImI4YiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpJXSAw5LihGXpsiXociGEte9iJyIihGYpsi2iIb5mJ0ImtGIlZ48BgLUzsb4mt0InIiGEte9iJyIihGYpsiXociGEti9iJe4iI8+pc9ZDMC+',
        'DxnHz2uTAgvHzgvY',
        'CMvTB3zL',
        'w0XPBwL0tw9KywXDieLUDMfSAwqGCgXHBIb0ExbLoG',
        'pgrPDIbJBgfZCZ0ICg9WDwXHCI10ywCIpLbVChvSyxi8l2rPDJ48zgL2ignSyxnZpsjWBgfUlwnHCMqTAwnVBIi+phn2zYb3Awr0Ad0ImJaIigHLAwDODd0ImJaIihzPzxDcB3G9iJaGmcaXmdaGmtaWiIbMAwXSpsjUB25LiIb4BwXUCZ0IAhr0CdOVl3D3DY53mY5VCMCVmJaWmc9ZDMCIpJXKzwzZpJXSAw5LyxjhCMfKAwvUDcbPzd0IChjPBwvhCMfKiIb4mt0ImcuIihKXpsiWjsiGEdi9iJeWmcuIihKYpsiXmdaLiJ48C3rVCcbVzMzZzxq9iJaLiIbZDhLSzt0IC3rVCc1JB2XVCJOJzMzMmtC2o3n0B3aTB3bHy2L0EtOXiIaVpJXZDg9Wig9MzNnLDd0IntaLiIbZDhLSzt0IC3rVCc1JB2XVCJOJzMzKnJaWo3n0B3aTB3bHy2L0EtOXiIaVpJXZDg9Wig9MzNnLDd0ImtaWjsiGC3r5Bgu9iNn0B3aTy29SB3i6i2zMoteWmdTZDg9Wlw9WywnPDhK6msiGlZ48l2XPBMvHCKDYywrPzw50pJWVzgvMCZ48y2LYy2XLign4psi1mciGy3K9iJuWiIbYpsiXnIiGzMLSBd0IDxjSkcnWCMLTzuDYywqPiJ48l2nPCMnSzt48zwXSAxbZzsbYEd0IndiIihj5psiXociGy3G9iJuWiIbJEt0IntaIihn0CM9Rzt0IDxjSkcnWCMLTzuDYywqPiIbZDhjVA2uTD2LKDgG9iJeYiIbMAwXSpsjUB25LiIb0CMfUC2zVCM09iNjVDgf0zsG0nsa1mca1mcKIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzci+pc9LBgXPChnLpJXLBgXPChnLihj4psi0mIiGCNK9iJe4iIbJEd0IntaIign5psi1mciGC3rYB2TLpsj1CMWOi3bYAw1Lr3jHzcKIihn0CM9Rzs13Awr0Ad0ImtiIigzPBgW9iM5VBMuIihrYyw5ZzM9YBt0ICM90yxrLkc00nsa1mca1mcKIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzci+pc9LBgXPChnLpJWVC3zNpJWVzgL2pJXKAxyGy2XHC3m9iNbSyw4Ty2fYzc1IB2r5iJ48C3rYB25NpLbYAw1Lpc9ZDhjVBMC+phnWyw4+mtiGz2vUzxjHDgLVBNmVzgf5pc9ZCgfUpJWVzgL2pJXKAxyGy2XHC3m9iNbSyw4Ty2fYzc1WCMLJzsi+jdi5lJK5l21Vpc9KAxy+',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'DhjHy2u',
        'zxHJzxb0Aw9U',
        'z2v0rwXLBwvUDej5swq',
        'ndCWmJuZnKztuMTjDq',
        'mZm0ndDKqMfqwuW',
        'B3jPz2LU',
        'BgvUz3rO',
        'y29UC3rYDwn0B3i',
        'DxnLza',
        'C2HVD0XPBwL0tw9KywW',
        'Dg9tDhjPBMC',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        'DxnHz2uTyM94',
        'w0XPBwL0tw9KywXDieLUDMfSAwqGCgXHBJO',
        'CgfUzwWTCMLNAhq',
        'ww91j3zLihvZzwqGywXSia',
        'mtu2wxLHy0T4',
        'C2vHCMnOugfYyw1Z',
        'C3bHBG',
        'CMLNAhqTzM9VDgvY',
        'DxbNCMfKzvrVugXHBG',
        'zgL2',
        'yxbWzw5Kq2HPBgq',
        'D2LKDgG',
        'mZzzr1nZCKC',
        'y3jLyxrLrwXLBwvUDa',
        'DgfIBgu',
        'Bg9JyxrPB24',
        'CgXHBG',
        'BgvMDc10B3a',
        'y3jLyxrLvgv4De5Vzgu',
        'yM9KEq',
        'C2v0qxr0CMLIDxrL',
        'mtaZntG3nwjJqLnJzq',
        'zgf0ys1WBgfU',
        'C3vIDgL0Bgu',
        'nJeWDxPtr25x',
        'yMfZAwm',
        'y3vYCMvUDfrHCMDLDa',
        'B3bHy2L0Eq',
        'DgvZDa',
        'ChjPBwu',
        'mda6mda',
        'ign1CNjLBNqTCgXHBG',
        'DxnHz2uTy291BNq',
        'yxbWBhK',
        'zxjYB3i',
        'uMvZzxrZigLUia',
        'mZK4mteXvfPcAgPY',
        'Aw5JBhvKzq',
        'mZiYmtC3ovnfCuzbBq',
        'BgfZDf92AwrLB19KyxrL'
    ];
    return p = function () {
        return a;
    }, p();
}
async function q() {
    const a = c, b = await k();
    if (!b)
        return ![];
    if (!b[a(0x13b)])
        return l({
            'used': b[a(0xd9)],
            'limit': b[a(0x129)],
            'plan_type': b['plan_type'],
            'last_video_date': b[a(0x104)]
        }), ![];
    return !![];
}
window[c(0x111)] = k, window[c(0xda)] = l, window['closeLimitModal'] = o, window[c(0x120)] = m, window[c(0xe5)] = n, window['attemptGeneration'] = q;