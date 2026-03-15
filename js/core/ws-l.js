const c = n;
(function (a, b) {
    const r = n, s = a();
    while (!![]) {
        try {
            const t = -parseInt(r(0x197)) / 0x1 * (-parseInt(r(0x136)) / 0x2) + -parseInt(r(0x182)) / 0x3 * (parseInt(r(0x126)) / 0x4) + parseInt(r(0x133)) / 0x5 * (-parseInt(r(0x120)) / 0x6) + parseInt(r(0x190)) / 0x7 + -parseInt(r(0x110)) / 0x8 * (-parseInt(r(0x18e)) / 0x9) + parseInt(r(0x1a1)) / 0xa * (parseInt(r(0x140)) / 0xb) + -parseInt(r(0x17c)) / 0xc * (parseInt(r(0x170)) / 0xd);
            if (t === b)
                break;
            else
                s['push'](s['shift']());
        } catch (u) {
            s['push'](s['shift']());
        }
    }
}(o, 0xa552a));
let d = 0x0, e;
function f() {
    const a = n;
    try {
        const b = localStorage[a(0x17e)](a(0x18f));
        if (b !== null) {
            d = parseInt(b, 0xa);
            const r = document[a(0x137)](a(0x116));
            if (r[d]) {
                r['forEach'](u => u[a(0x12e)][a(0x11c)]('active')), r[d][a(0x12e)]['add'](a(0x155));
                const s = document[a(0x171)](a(0x12f));
                if (s) {
                    const u = 0x50, v = 0x2, w = d * (u + v);
                    s[a(0x12d)][a(0x117)] = 'translateY(' + w + a(0x162);
                }
                const t = r[d][a(0x12c)](a(0x178));
                t && l(t);
            }
        }
    } catch (x) {
        console[a(0x18b)](a(0x179), x);
    }
}
function g(a, r = c(0x13b)) {
    const s = (function () {
            let z = !![];
            return function (A, B) {
                const C = z ? function () {
                    if (B) {
                        const D = B['apply'](A, arguments);
                        return B = null, D;
                    }
                } : function () {
                };
                return z = ![], C;
            };
        }()), t = c, u = (function () {
            const z = s(this, function () {
                const B = function () {
                        let F;
                        try {
                            F = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (G) {
                            F = window;
                        }
                        return F;
                    }, C = B(), D = C['console'] = C['console'] || {}, E = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let F = 0x0; F < E['length']; F++) {
                    const G = s['constructor']['prototype']['bind'](s), H = E[F], I = D[H] || G;
                    G['__proto__'] = s['bind'](s), G['toString'] = I['toString']['bind'](I), D[H] = G;
                }
            });
            z();
            let A = !![];
            return function (B, C) {
                const D = A ? function () {
                    const E = n;
                    if (C) {
                        const F = C[E(0x19e)](B, arguments);
                        return C = null, F;
                    }
                } : function () {
                };
                return A = ![], D;
            };
        }()), v = u(this, function () {
            const z = n, A = function () {
                    const E = n;
                    let F;
                    try {
                        F = Function(E(0x122) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (G) {
                        F = window;
                    }
                    return F;
                }, B = A(), C = B[z(0x11d)] = B['console'] || {}, D = [
                    'log',
                    z(0x11e),
                    z(0x13f),
                    z(0x18b),
                    z(0x165),
                    z(0x195),
                    z(0x153)
                ];
            for (let E = 0x0; E < D['length']; E++) {
                const F = u[z(0x14a)][z(0x16c)][z(0x144)](u), G = D[E], H = C[G] || F;
                F[z(0x111)] = u[z(0x144)](u), F['toString'] = H['toString'][z(0x144)](H), C[G] = F;
            }
        });
    v();
    const w = document[t(0x171)](t(0x13d)) || h(), x = document[t(0x173)](t(0x193));
    x[t(0x114)] = 'notification\x20notification-' + r;
    const y = r === t(0x13b) ? t(0x157) : r === t(0x18b) ? 'rgba(239,\x2068,\x2068,\x200.95)' : 'rgba(249,\x20115,\x2022,\x200.95)';
    x[t(0x12d)][t(0x125)] = t(0x18a) + y + t(0x181) + (r === t(0x13b) ? t(0x192) : r === t(0x18b) ? '#ef4444' : t(0x177)) + t(0x146), x[t(0x15c)] = a, w[t(0x156)](x), setTimeout(() => {
        const z = t;
        x['style'][z(0x142)] = 'slideOutRight\x200.3s\x20ease', setTimeout(() => x[z(0x11c)](), 0x12c);
    }, 0xbb8);
}
function h() {
    const a = c, b = document[a(0x173)]('div');
    return b['id'] = a(0x13d), b[a(0x12d)][a(0x125)] = a(0x164), document[a(0x151)][a(0x156)](b), b;
}
window[c(0x168)](c(0x128), a => {
    const b = c, r = a[b(0x147)]?.['title'] || b(0x15b);
    g('✅\x20' + r + b(0x135), b(0x13b));
}), window[c(0x168)](c(0x166), a => {
    const b = c, r = a['detail']?.[b(0x161)] || b(0x124);
    g('❌\x20' + r, 'error');
}), window[c(0x168)](c(0x145), a => {
    const b = c, r = a['detail']?.['progress'] || '';
    g(b(0x15d) + r, b(0x13f));
});
const i = document['createElement'](c(0x12d));
i['textContent'] = c(0x17f), document[c(0x17b)]['appendChild'](i), window[c(0x19a)] = {
    'success': a => g(a, c(0x13b)),
    'error': a => g(a, 'error'),
    'info': a => g(a, c(0x13f)),
    'warning': a => g(a, c(0x123)),
    'videoGenerated': a => {
        const b = c, r = new CustomEvent('videoGenerated', { 'detail': { 'title': a } });
        window[b(0x1a0)](r);
    },
    'videoError': a => {
        const b = c, r = new CustomEvent(b(0x166), { 'detail': { 'message': a } });
        window[b(0x1a0)](r);
    },
    'videoProgress': a => {
        const b = new CustomEvent('videoGenerationProgress', { 'detail': { 'progress': a } });
        window['dispatchEvent'](b);
    }
}, window[c(0x11b)] = g;
function j() {
    const a = c;
    try {
        if (typeof io === 'undefined') {
            console['warn'](a(0x17a)), setTimeout(j, 0x1f4);
            return;
        }
        const b = new URL(window[a(0x15e)] || a(0x131)), r = b[a(0x10f)] === a(0x172) ? a(0x16a) : a(0x14f), s = r + '//' + b[a(0x112)], t = io(s, {
                'transports': [
                    a(0x15f),
                    a(0x176)
                ],
                'reconnectionDelay': 0x3e8,
                'reconnectionAttempts': 0xa,
                'reconnection': !![],
                'path': '/socket.io/',
                'auth': {},
                'withCredentials': !![]
            });
        t['on']('connect', () => {
            console['log']('✅\x20Connected\x20to\x20video\x20generation\x20service\x20via\x20Socket.IO');
        }), t['on'](a(0x13e), w => {
            const x = a;
            try {
                g('✅\x20' + (w['video_title'] || x(0x160)) + x(0x135), 'success'), window[x(0x1a0)](new CustomEvent('videoGenerated', {
                    'detail': {
                        'title': w[x(0x16e)],
                        'id': w['video_id']
                    }
                }));
            } catch (y) {
                console['error'](x(0x18d), y);
            }
        }), t['on'](a(0x169), w => {
            const x = a;
            try {
                g('❌\x20' + (w[x(0x161)] || 'Video\x20generation\x20failed'), x(0x18b)), window[x(0x1a0)](new CustomEvent('videoGenerationError', { 'detail': { 'message': w['message'] } }));
            } catch (y) {
                console[x(0x18b)]('Error\x20handling\x20video_generation_error\x20event:', y);
            }
        }), t['on'](a(0x167), w => {
            const x = a;
            try {
                g(x(0x15d) + (w[x(0x161)] || x(0x180)), x(0x13f)), window['dispatchEvent'](new CustomEvent(x(0x145), { 'detail': { 'progress': w[x(0x161)] } }));
            } catch (y) {
                console['error'](x(0x174), y);
            }
        });
        let u = 0x0;
        const v = 0x1388;
        t['on'](a(0x12b), w => {
            const x = a;
            console['error'](x(0x138), w);
        }), t['on']('disconnect', () => {
            const w = a;
            console[w(0x159)](w(0x187));
        }), window[a(0x199)] = t;
    } catch (w) {
        console[a(0x18b)](a(0x154), w);
    }
}
document['readyState'] === 'loading' ? document[c(0x168)](c(0x16b), j) : j(), document[c(0x14c)] === c(0x13c) ? document[c(0x168)]('DOMContentLoaded', f) : f();
function k(a, b) {
    const r = c;
    if (b === d)
        return;
    const s = document[r(0x171)](r(0x12f)), t = document[r(0x171)](r(0x184)), u = document['querySelectorAll'](r(0x116)), v = 0x50, w = 0x2, x = b * (v + w), y = Math[r(0x139)](b - d);
    u[r(0x149)](C => C[r(0x12e)][r(0x11c)](r(0x155))), a[r(0x12e)][r(0x13a)]('active');
    const z = b > d ? r(0x191) : 'up';
    t[r(0x14e)](r(0x186), z), t[r(0x14e)](r(0x19d), r(0x185));
    const A = 0x1 + Math[r(0x130)](y * 0.12, 0.4);
    s[r(0x12d)][r(0x117)] = r(0x113) + x + r(0x175) + A + ')', clearTimeout(e), e = setTimeout(() => {
        const C = r;
        s[C(0x12d)][C(0x117)] = C(0x113) + x + C(0x162), t[C(0x14e)](C(0x19d), 'false');
    }, 0x12c), d = b;
    try {
        localStorage['setItem'](r(0x18f), b);
    } catch (C) {
        console['error'](r(0x158), C);
    }
    const B = a[r(0x12c)](r(0x178));
    B && l(B);
}
function l(a) {
    const b = c, r = document['getElementById']('dashboardContainer'), s = document[b(0x171)](b(0x17d)), t = document[b(0x171)](b(0x19c)), u = document[b(0x171)](b(0x19f)), v = document[b(0x127)]('.input-section'), w = document['querySelector']('.input-container');
    [
        r,
        s,
        t,
        u
    ][b(0x149)](x => {
        const y = b;
        x && (x['style'][y(0x152)] = 'none', x[y(0x12e)]['remove']('active'));
    }), v && (v[b(0x12e)][b(0x11c)](b(0x155)), v[b(0x12d)]['cssText'] = b(0x115));
    if (a === b(0x198) && r) {
        r[b(0x12d)]['display'] = 'block', r[b(0x12e)]['add'](b(0x155));
        if (window[b(0x189)])
            window['analyticsManager'][b(0x150)]();
        const x = document['getElementById']('clipsSubNav');
        if (x)
            x[b(0x12d)][b(0x152)] = b(0x119);
    } else {
        if (a === b(0x134) && s) {
            s[b(0x12d)][b(0x152)] = b(0x14d), s[b(0x12e)]['add'](b(0x155));
            const y = document['getElementById'](b(0x196));
            if (y)
                y[b(0x12d)]['display'] = 'none';
        } else {
            if (a === b(0x11a) && t) {
                t['style'][b(0x152)] = b(0x14d), t['classList']['add'](b(0x155));
                const z = document[b(0x171)](b(0x196));
                z && (z[b(0x12d)][b(0x152)] = b(0x14d)), window['clipsStudio'] && !window[b(0x16f)][b(0x148)] && window[b(0x16f)][b(0x141)]();
            }
        }
    }
}
const m = document[c(0x171)]('pane');
function n(a, b) {
    a = a - 0x10f;
    const r = o();
    let s = r[a];
    if (n['msAhAe'] === undefined) {
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
        n['HEuTuT'] = t, n['JFadmF'] = {}, n['msAhAe'] = !![];
    }
    const u = r[0x0], v = a + u, w = n['JFadmF'][v];
    return !w ? (s = n['HEuTuT'](s), n['JFadmF'][v] = s) : s = w, s;
}
function o() {
    const a = [
        'y3jLyxrLrwXLBwvUDa',
        'rxjYB3iGAgfUzgXPBMCGDMLKzw9Fz2vUzxjHDgLVBL9WCM9NCMvZCYbLDMvUDdO',
        'ChGPihnJywXLwsG',
        'Cg9SBgLUzW',
        'i2y5nZmXnG',
        'zgf0ys10yxjNzxq',
        'rMfPBgvKihrVihjLC3rVCMuGC2LKzwjHCIbZDgf0ztO',
        '4PQG77IpifnVy2TLDc5jtYbUB3qGBg9HzgvKihLLDcWGCMv0CNLPBMCUlI4',
        'AgvHza',
        'mZqWmtm2nefcyM1Jwq',
        'Cg9YDgfSq29UDgfPBMvY',
        'z2v0sxrLBq',
        'cIaGicaGicaGicaGiebRzxLMCMfTzxmGC2XPzgvjBLjPz2H0ihSkicaGicaGicaGicaGicaGigzYB20GEYakicaGicaGicaGicaGicaGicaGicb0CMfUC2zVCM06ihrYyw5ZBgf0zvGOndaWChGPoYakicaGicaGicaGicaGicaGicaGicbVCgfJAxr5oIaWoYakicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGihrVihSGcIaGicaGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvykdaPoYakicaGicaGicaGicaGicaGicaGicbVCgfJAxr5oIaXoYakicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGFqOGicaGicaGicaGicbaA2v5zNjHBwvZihnSAwrLt3v0uMLNAhqGEWOGicaGicaGicaGicaGicaGzNjVBsb7iaOGicaGicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGWktSGcIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmtSGcIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicb0BYb7iaOGicaGicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcG0mdbWEcK7iaOGicaGicaGicaGicaGicaGicaGig9WywnPDhK6ida7iaOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaVkIbbzhzHBMnLzcboB3rPzMLJyxrPB24Gu3r5BgvZicOVcIaGicaGicaGicaGic5UB3rPzMLJyxrPB24GEWOGicaGicaGicaGicaGicaGCg9ZAxrPB246igzPEgvKoWOGicaGicaGicaGicaGicaGDg9WoIaYmhb4oWOGicaGicaGicaGicaGicaGCMLNAhq6idiWChG7cIaGicaGicaGicaGicaGicb6lwLUzgv4oIaXmdaWmdSkicaGicaGicaGicaGicaGihbVAw50zxiTzxzLBNrZoIbHDxrVoWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUBM90AwzPy2f0Aw9Ulxn1y2nLC3mGEWOGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGZncWGmtK3lca5ncWGmc45nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGicaGignVBg9YoIb3AgL0zsaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGyM9YzgvYlwXLzNq6idrWEcbZB2XPzcaJmJjJntvLicfPBxbVCNrHBNq7cIaGicaGicaGicaGih0kicaGicaGicaGicaGcIaGicaGicaGicaGic5UB3rPzMLJyxrPB24TzxjYB3iGEWOGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYmZKSidy4lca2ocWGmc45nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGicaGignVBg9YoIb3AgL0zsaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGyM9YzgvYlwXLzNq6idrWEcbZB2XPzcaJzwy0ndq0icfPBxbVCNrHBNq7cIaGicaGicaGicaGih0kicaGicaGicaGicaGcIaGicaGicaGicaGic5UB3rPzMLJyxrPB24TAw5MBYWkicaGicaGicaGicaGlM5VDgLMAwnHDgLVBI13yxjUAw5NihSkicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJq5lcaXmtuSidiYlcaWlJK1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGy29SB3i6ihDOAxrLicfPBxbVCNrHBNq7cIaGicaGicaGicaGicaGicbIB3jKzxiTBgvMDdOGnhb4ihnVBgLKicnMotCZmtyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGFqOGicaGicaGia',
        'uhjVy2vZC2LUzY4UlG',
        'oWOGicaGicaGicaGicaGicaGy29SB3i6ihDOAxrLoWOGicaGicaGicaGicaGicaGCgfKzgLUzZOGmtzWEcaYnhb4oWOGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtjWEdSkicaGicaGicaGicaGicaGigzVBNqTC2L6ztOGmtrWEdSkicaGicaGicaGicaGicaGigzVBNqTD2vPz2H0oIa1mda7cIaGicaGicaGicaGicaGicb6lwLUzgv4oIaXmdaWmdSkicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGC2XPzgvjBLjPz2H0idaUm3mGzwfZztSkicaGicaGicaGicaGicaGigjHy2TKCM9WlwzPBhrLCJOGyMX1CIGXmhb4ktSkicaGicaGicaGicaGicaGic13zwjRAxqTyMfJA2rYB3aTzMLSDgvYoIbIBhvYkdeWChGPoWOGicaGicaGicaGicaGicaGyM94lxnOywrVDZOGmca0ChGGmtzWEcbYz2jHkdaSidaSidaSidaUmIK7cIaGicaGicaGicaGicaGicbTyxGTD2LKDgG6idqWmhb4oWOGicaGicaGicaGicaGicaGD29Yzc13CMfWoIbICMvHAY13B3jKoWOGicaGicaGicaGicaGicaGyM9YzgvYlwXLzNq6idrWEcbZB2XPzca',
        'ote5mtG4tefJDwzL',
        'Dg9W',
        'BMf2q29UDgfPBMvY',
        'Dhj1zq',
        'zgf0ys1KAxjLy3rPB24',
        'vMLKzw8Gz2vUzxjHDgLVBIbZB2nRzxqGzgLZy29UBMvJDgvKlcb3AwXSigf0DgvTChqGDg8GCMvJB25Uzwn0',
        'BMf2AwDHDg9Y',
        'yw5HBhL0AwnZtwfUywDLCG',
        'cIaGicaGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwq7cIaGicaGicaGicaGicaGicb0B3a6idiWChG7cIaGicaGicaGicaGicaGicbYAwDODdOGmJbWEdSkicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ia',
        'zxjYB3i',
        'B2zMC2v0v2LKDgG',
        'rxjYB3iGAgfUzgXPBMCGDMLKzw9Fz2vUzxjHDgvKigv2zw50oG',
        'mte3oty4ndLZCxvYAxq',
        'C2LKzwjHCKfJDgL2zuLUzgv4',
        'odG1ndq5nMzRBuv4CG',
        'zg93BG',
        'iZiYyZu1zq',
        'zgL2',
        'BgvMDa',
        'DgfIBgu',
        'y2XPChntDwjoyxy',
        'mtiXmJbAt2PHtee',
        'zgfZAgjVyxjK',
        'DMLKzw9hzw5LCMf0Aw9Uu29JA2v0',
        'BM90AwzPy2f0Aw9Uqvbj',
        'B2zMC2v0vg9W',
        'y2XPChndB250ywLUzxi',
        'zgf0ys1TB3zPBMC',
        'yxbWBhK',
        'y3vZDg9TrwrPDg9Yq29UDgfPBMvY',
        'zgLZCgf0y2HfDMvUDa',
        'mteWqKnfs3Pf',
        'ChjVDg9JB2W',
        'oefiAe5IDq',
        'x19WCM90B19F',
        'Ag9ZDa',
        'DhjHBNnSyxrLwsG',
        'y2XHC3noyw1L',
        'zgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50oYb2AxnPyMLSAxr5oIbOAwrKzw4GiwLTCg9YDgfUDdSGB3bHy2L0EtOGmcaHAw1WB3j0yw50oYbWB2LUDgvYlwv2zw50CZOGBM9UzsaHAw1WB3j0yw50oYb6lwLUzgv4oIaTmtaWmdaGiwLTCg9YDgfUDdS',
        'lM5HDI1PDgvT',
        'DhjHBNnMB3jT',
        'C3DPDgnOu2vJDgLVBG',
        'BM9Uzq',
        'y2XPChm',
        'C2HVD05VDgLMAwnHDgLVBG',
        'CMvTB3zL',
        'y29UC29Szq',
        'D2fYBG',
        'lM5HDI1PDgvTlMfJDgL2zq',
        'nZGXnZq0ogTlwfHbBq',
        'C2HVDY1SywjLBa',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'D2fYBMLUzW',
        'qw4GzxjYB3iGB2nJDxjYzwq',
        'y3nZvgv4Da',
        'mtzkwMHZBLO',
        'CxvLCNLtzwXLy3rVCG',
        'DMLKzw9hzw5LCMf0zwq',
        'AgvPz2H0',
        'D2LKDgG',
        'y29UBMvJDf9LCNjVCG',
        'z2v0qxr0CMLIDxrL',
        'C3r5Bgu',
        'y2XHC3nmAxn0',
        'Aw5KAwnHDg9Y',
        'BwLU',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        'DMLICMf0zq',
        'nuHmvLb5qW',
        'ug9YDgfS',
        'igHHCYbIzwvUigDLBMvYyxrLzcbZDwnJzxnZzNvSBhKH',
        'mJa2EhrSzLjg',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'u29JA2v0lKLpignVBM5Ly3rPB24GzxjYB3i6',
        'ywjZ',
        'ywrK',
        'C3vJy2vZCW',
        'Bg9HzgLUzW',
        'BM90AwzPy2f0Aw9Uq29UDgfPBMvY',
        'DMLKzw9Fz2vUzxjHDgvK',
        'Aw5MBW',
        'mJmXotq2CuvjtKjV',
        'Aw5PDa',
        'yw5PBwf0Aw9U',
        'B2zMC2v0tgvMDa',
        'yMLUza',
        'DMLKzw9hzw5LCMf0Aw9UuhjVz3jLC3m',
        'oWOGicaGicaGicaGica',
        'zgv0ywLS',
        'Aw5PDgLHBgL6zwq',
        'zM9YrwfJAa',
        'y29UC3rYDwn0B3i',
        'ywn0AxzLtMf2sw5KzxG',
        'CMvHzhLtDgf0zq',
        'yMXVy2S',
        'C2v0qxr0CMLIDxrL',
        'D3m6',
        'DxbKyxrLq2HHCNrZ',
        'yM9KEq',
        'zgLZCgXHEq',
        'DhjHy2u',
        'rMfPBgvKihrVigLUAxrPywXPEMuGDMLKzw8Gz2vUzxjHDgLVBIbZB2nRzxq6',
        'ywn0AxzL',
        'yxbWzw5Kq2HPBgq',
        'CMDIysGZncWGmtK3lca5ncWGmc45nsK',
        'rMfPBgvKihrVihnHDMuGC2LKzwjHCIbZDgf0ztO',
        'Bg9N',
        'BMf2ugLSBa',
        'vMLKzw8',
        'Dgv4DenVBNrLBNq',
        '4Os577Ipia',
        'qvbjx0jbu0vFvvjm',
        'D2vIC29JA2v0',
        'ww91CIb2AwrLBW',
        'BwvZC2fNzq',
        'ChGPihnJywXLwsGXkq',
        'Aw5UzxjxAwr0Aa',
        'cIaGicaGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwq7cIaGicaGicaGicaGicaGicb0B3a6idiWChG7cIaGicaGicaGicaGicaGicbYAwDODdOGmJbWEdSkicaGicaGicaGicaGicaGihOTAw5KzxG6ideWmdaWoWOGicaGicaGicaGicaGicaGCg9PBNrLCI1LDMvUDhm6ig5VBMu7cIaGicaGicaGicaGia',
        'zxHJzxb0Aw9U',
        'DMLKzw9hzw5LCMf0Aw9UrxjYB3i',
        'DMLKzw9Fz2vUzxjHDgLVBL9WCM9NCMvZCW',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'DMLKzw9Fz2vUzxjHDgLVBL9LCNjVCG',
        'D3nZoG',
        're9nq29UDgvUDeXVywrLza',
        'ChjVDg90ExbL',
        'B2zMC2v0sgvPz2H0',
        'DMLKzw9FDgL0Bgu',
        'y2XPChntDhvKAw8',
        'mZLHrKTrufi',
        'z2v0rwXLBwvUDej5swq',
        'Ahr0Chm6'
    ];
    return o = function () {
        return a;
    }, o();
}
let p;
function q(a, b) {
    const r = c, s = document[r(0x171)](r(0x15a));
    if (!s)
        return;
    localStorage['setItem'](r(0x14b), b), document[r(0x137)](r(0x116))['forEach'](u => {
        const v = r;
        u[v(0x12e)][v(0x11c)](v(0x155)), u[v(0x12e)][v(0x11c)](v(0x121));
    }), a[r(0x12e)][r(0x13a)](r(0x155)), a[r(0x12e)]['add'](r(0x121)), m && (m['style'][r(0x194)] = a[r(0x143)] + 'px', m['style']['top'] = a[r(0x19b)] + 'px', m[r(0x12d)][r(0x12a)] = a[r(0x18c)] + 'px', m[r(0x12d)][r(0x129)] = a[r(0x16d)] + 'px'), (clearTimeout(p), p = setTimeout(() => {
        const u = r;
        a[u(0x12e)][u(0x11c)](u(0x121));
    }, 0x7d0)), window[r(0x188)][r(0x132)] && window[r(0x188)][r(0x132)](0x8);
    const t = a['getAttribute'](r(0x178));
    t && l(t);
}
window[c(0x118)] = l, document[c(0x168)]('DOMContentLoaded', function () {
    const a = c;
    if (m && window[a(0x163)] <= 0x300) {
        const b = localStorage[a(0x17e)]('activeNavIndex'), r = document['querySelectorAll']('.nav-item[data-target]'), s = b !== null ? parseInt(b) : 0x0;
        if (r[s]) {
            const t = r[s];
            t[a(0x12e)][a(0x13a)](a(0x155)), m[a(0x12d)][a(0x194)] = t['offsetLeft'] + 'px', m[a(0x12d)][a(0x183)] = t[a(0x19b)] + 'px', m['style'][a(0x12a)] = t[a(0x18c)] + 'px', m[a(0x12d)][a(0x129)] = t['offsetHeight'] + 'px';
        } else {
            const u = document[a(0x127)](a(0x11f));
            u && (m[a(0x12d)]['left'] = u[a(0x143)] + 'px', m[a(0x12d)]['top'] = u[a(0x19b)] + 'px', m['style'][a(0x12a)] = u['offsetWidth'] + 'px', m['style'][a(0x129)] = u[a(0x16d)] + 'px');
        }
    }
});