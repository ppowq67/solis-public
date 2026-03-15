const c = d;
(function (o, p) {
    const q = (function () {
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
        }()), r = q(this, function () {
            let u;
            try {
                const x = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                u = x();
            } catch (y) {
                u = window;
            }
            const v = u['console'] = u['console'] || {}, w = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let z = 0x0; z < w['length']; z++) {
                const A = q['constructor']['prototype']['bind'](q), B = w[z], C = v[B] || A;
                A['__proto__'] = q['bind'](q), A['toString'] = C['toString']['bind'](C), v[B] = A;
            }
        });
    r();
    const s = d, t = o();
    while (!![]) {
        try {
            const u = -parseInt(s(0x19d)) / 0x1 * (parseInt(s(0x1aa)) / 0x2) + -parseInt(s(0x192)) / 0x3 * (parseInt(s(0x1cb)) / 0x4) + parseInt(s(0x185)) / 0x5 + parseInt(s(0x1b6)) / 0x6 + -parseInt(s(0x1be)) / 0x7 * (parseInt(s(0x1a4)) / 0x8) + -parseInt(s(0x199)) / 0x9 + -parseInt(s(0x1d0)) / 0xa * (-parseInt(s(0x1c6)) / 0xb);
            if (u === p)
                break;
            else
                t['push'](t['shift']());
        } catch (v) {
            t['push'](t['shift']());
        }
    }
}(j, 0xcb761));
function d(a, b) {
    a = a - 0x183;
    const o = j();
    let p = o[a];
    if (d['sdaWxZ'] === undefined) {
        var q = function (u) {
            const v = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let w = '', x = '';
            for (let y = 0x0, z, A, B = 0x0; A = u['charAt'](B++); ~A && (z = y % 0x4 ? z * 0x40 + A : A, y++ % 0x4) ? w += String['fromCharCode'](0xff & z >> (-0x2 * y & 0x6)) : 0x0) {
                A = v['indexOf'](A);
            }
            for (let C = 0x0, D = w['length']; C < D; C++) {
                x += '%' + ('00' + w['charCodeAt'](C)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(x);
        };
        d['aMWxER'] = q, d['nODnDg'] = {}, d['sdaWxZ'] = !![];
    }
    const r = o[0x0], s = a + r, t = d['nODnDg'][s];
    return !t ? (p = d['aMWxER'](p), d['nODnDg'][s] = p) : p = t, p;
}
const e = (function () {
        let a = !![];
        return function (b, o) {
            const p = a ? function () {
                if (o) {
                    const q = o['apply'](b, arguments);
                    return o = null, q;
                }
            } : function () {
            };
            return a = ![], p;
        };
    }()), f = e(this, function () {
        const a = d;
        let b;
        try {
            const q = Function('return\x20(function()\x20' + a(0x1ef) + ');');
            b = q();
        } catch (r) {
            b = window;
        }
        const o = b[a(0x1b2)] = b['console'] || {}, p = [
                'log',
                a(0x189),
                a(0x1ee),
                'error',
                a(0x1b8),
                a(0x1e7),
                a(0x1ae)
            ];
        for (let s = 0x0; s < p[a(0x1b1)]; s++) {
            const t = e[a(0x18a)][a(0x1ec)][a(0x1a7)](e), u = p[s], v = o[u] || t;
            t[a(0x1c7)] = e['bind'](e), t[a(0x1e5)] = v[a(0x1e5)][a(0x1a7)](v), o[u] = t;
        }
    });
f();
const g = {
    'data': null,
    'timestamp': 0x0,
    'ttl': 0x7530
};
window[c(0x1de)]('message', function (a) {
    const b = c;
    if (a[b(0x183)] !== window[b(0x1c1)][b(0x183)])
        return;
    if (a[b(0x1d2)] && a[b(0x1d2)][b(0x1dd)] === b(0x18f)) {
        console[b(0x1c3)]('🎉\x20Payment\x20success\x20message\x20received:', a[b(0x1d2)]);
        const {plan: o} = a['data'];
        h(o);
    }
});
async function h(a) {
    const b = c;
    console['log'](b(0x1bf), a);
    try {
        i(), k(a);
        try {
            const o = await fetch(window[b(0x1df)] + b(0x187), {
                'method': b(0x19e),
                'credentials': b(0x1e1),
                'headers': { 'Content-Type': 'application/json' }
            });
            if (o['ok']) {
                const p = await o[b(0x1e9)]();
                if (!p || typeof p !== b(0x19b) || !p[b(0x1e2)])
                    throw new Error('Invalid\x20subscription\x20response');
                console['log'](b(0x1a1), p), g['data'] = p['subscription'], g[b(0x18c)] = Date['now']();
                if (p[b(0x1e2)] && p[b(0x1e2)][b(0x1f3)] && typeof p[b(0x1e2)]['plan'] === b(0x1a9)) {
                    const q = JSON[b(0x1ea)](localStorage[b(0x18d)]('currentUser') || '{}');
                    q[b(0x1f3)] = p[b(0x1e2)][b(0x1f3)][b(0x1ac)](), localStorage[b(0x1c8)](b(0x1bb), JSON[b(0x1a2)](q));
                }
                l(p[b(0x1e2)]);
            } else
                throw new Error(b(0x1b9) + o['status']);
        } catch (r) {
            console[b(0x1cc)](b(0x1bc), r);
        }
    } catch (s) {
        console[b(0x1cc)]('❌\x20Error\x20in\x20payment\x20success\x20handler:', s);
    }
}
function i() {
    const a = c, b = [
            '#FF9671',
            '#FFD4C4',
            '#FF7A50',
            a(0x1d9),
            a(0x1dc),
            a(0x1f0),
            a(0x19f),
            a(0x1af),
            a(0x186),
            a(0x1e8),
            a(0x18b),
            '#FF4500'
        ], o = [
            a(0x1ba),
            a(0x1d7),
            'triangle'
        ], p = 0x64;
    for (let q = 0x0; q < p; q++) {
        const r = document[a(0x1d4)]('div');
        r[a(0x1cd)] = a(0x1eb);
        const s = o[Math['floor'](Math[a(0x1b4)]() * o['length'])], t = b[Math[a(0x1f1)](Math[a(0x1b4)]() * b[a(0x1b1)])], u = Math[a(0x1b4)]() * 0xc + 0x6;
        let v, w, x, y;
        const z = Math['floor'](Math['random']() * 0x3);
        if (z === 0x0)
            v = Math[a(0x1b4)]() * 0x64, w = -0xa, x = 0x2d + Math['random']() * 0xa, y = 0x28 + Math[a(0x1b4)]() * 0x14;
        else
            z === 0x1 ? (v = -0xa, w = 0x3c + Math[a(0x1b4)]() * 0x28, x = 0x2d + Math['random']() * 0xa, y = 0x28 + Math[a(0x1b4)]() * 0x14) : (v = 0x6e, w = 0x3c + Math[a(0x1b4)]() * 0x28, x = 0x2d + Math['random']() * 0xa, y = 0x28 + Math['random']() * 0x14);
        let A = '';
        if (s === a(0x1ba))
            A = 'border-radius:\x2050%;';
        else
            s === a(0x1b0) && (A = a(0x1f2));
        r[a(0x1b3)][a(0x1d3)] = a(0x193) + u + 'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20' + u + a(0x1e4) + t + a(0x195) + A + a(0x1b5) + v + a(0x1db) + w + '%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20confetti-explosion\x202.5s\x20ease-out\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation-delay:\x20' + Math[a(0x1b4)]() * 0.5 + a(0x1d1) + x + a(0x1c9) + y + a(0x1d8), document[a(0x1ce)]['appendChild'](r), setTimeout(() => r[a(0x1e0)](), 0xbb8);
    }
}
function j() {
    const a = [
        'zNjLzq',
        'DgfIBgu',
        'i0zgnJLcna',
        'ANnVBG',
        'CgfYC2u',
        'y29UzMv0DgKTCgfYDgLJBgu',
        'ChjVDg90ExbL',
        'yxbWBgLJyxrPB24VANnVBG',
        'Aw5MBW',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'iZzerendrG',
        'zMXVB3i',
        'y2XPCc1WyxrOoIbWB2X5z29UkduWjsaWjsWGmcuGmtaWjsWGmtaWjsaXmdaLktS',
        'CgXHBG',
        'B3jPz2LU',
        'ihbSyw4GzMvHDhvYzxmGyxjLig5VDYbHy3rPDMuGyw5KihjLywr5ihrVihvZzsekicaGicaGicaGicaGicaGidWVCd4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGiaOGicaGicaGicaGica8yNv0Dg9Uig9Uy2XPy2S9iMrVy3vTzw50lMDLDevSzw1LBNrcEuLKkcDKyxnOyM9HCMqTCgf5BwvUDc1ZDwnJzxnZlw1VzgfSjYKUCMvTB3zLkcK7iIbZDhLSzt0IcIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJrKy5nJCXlcaJrKy3qtuWktSkicaGicaGicaGicaGicaGignVBg9YoIb3AgL0ztSkicaGicaGicaGicaGicaGigjVCMrLCJOGBM9UztSkicaGicaGicaGicaGicaGihbHzgrPBMC6ide0ChGGmZjWEdSkicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideYChG7cIaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXCMvToWOGicaGicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUm3mGzwfZztSkicaGicaGicaGicaGicaGig1HCMDPBI10B3a6idi0ChG7cIaGicaGicaGicaGiciGB25TB3vZzw92zxi9iNrOAxmUC3r5BguUyMfJA2DYB3vUzca9icDSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJrKy3qtuWlcaJrKy1ntmZksCIig9UBw91C2vVDxq9iNrOAxmUC3r5BguUyMfJA2DYB3vUzca9icDSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJrKy5nJCXlcaJrKy3qtuWksCIpGOGicaGicaGicaGicaGicaGq29UDgLUDwuGDg8GrgfZAgjVyxjKcIaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGidWVzgL2pGOGicaG',
        'ndaXmJqZmfbJuKjLwG',
        'i0zgrdCWma',
        'l2f1DgGVC3vIC2nYAxb0Aw9U',
        'rxjYB3iGCMvMCMvZAgLUzYbZDwjZy3jPChrPB246',
        'D2fYBG',
        'y29UC3rYDwn0B3i',
        'iZaWq0vemq',
        'DgLTzxn0yw1W',
        'z2v0sxrLBq',
        'sw52ywXPzcbWBgfUig5HBwuGzM9Yig1VzgfS',
        'uefztuvovf9tvundrvnt',
        'Dg9vChbLCKnHC2u',
        'C3rVCMfNzvvZzwrcywrNzq',
        'mZiXndyYELnyALvm',
        'cIaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGD2LKDgG6ia',
        'cIaGicaGicaGCg9ZAxrPB246igzPEgvKoWOGicaGicaGihrVCdOGmdSkicaGicaGicbSzwz0oIaWoWOGicaGicaGihjPz2H0oIaWoWOGicaGicaGigjVDhrVBtOGmdSkicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdaSidaSidaSidaUoduPoWOGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicb6lwLUzgv4oIa5otK5otK7cIaGicaGicaGyw5PBwf0Aw9UoIbMywrLsw4Gmc4ZCYbLyxnLoWOGicaGicaGigjHy2TKCM9WlwzPBhrLCJOGyMX1CIG4ChGPoWOGicaG',
        'oWOGicaGicaGicaGica',
        'y2HHCKf0',
        'BgLICMfYEuL0zw1Z',
        'zgfZAgjVyxjKlxbHEw1LBNqTC3vJy2vZCY1TB2rHBa',
        'nZi5ndGWnNnAqwTdqq',
        'Dgv4DenVBNrLBNq',
        'B2jQzwn0',
        'DMLKzw9Zu3rVCMfNzq',
        'mZu3nZe2EMLVrvv4',
        'r0vu',
        'iZrfq0rdna',
        'z2v0rwXLBwvUDej5swq',
        '8j+tIIbvCgrHDgvKihn1yNnJCMLWDgLVBIbPBMzVoG',
        'C3rYAw5NAwz5',
        'AgvHza',
        'mty1otq0zwLYC3zw',
        'DMLKzw9FBgLTAxq',
        '8j+tIIbtDg9YywDLigrPC3bSyxKGDxbKyxrLzdO',
        'yMLUza',
        'y2XPChntDhvKAw8',
        'C3rYAw5N',
        'ne5tzuniAa',
        'Ew91CIbWBgfU',
        'Dg9mB3DLCKnHC2u',
        'cIaGicaGicaGqgTLEwzYyw1LCYbJB25Mzxr0As1LEhbSB3nPB24GEWOGicaGicaGicaGicaWjsb7cIaGicaGicaGicaGicaGicb0CMfUC2zVCM06ihrYyw5ZBgf0zsGWlcaWksbYB3rHDguOmgrLzYKGC2nHBguOmsK7cIaGicaGicaGicaGicaGicbVCgfJAxr5oIaXoWOGicaGicaGicaGicb9cIaGicaGicaGicaGidmWjsb7cIaGicaGicaGicaGicaGicb0CMfUC2zVCM06ihrYyw5ZBgf0zsH2yxiOls1LBMqTBgvMDcKSihzHCIGTlwvUzc10B3aPksbYB3rHDguOmtGWzgvNksbZy2fSzsGXlJiPoWOGicaGicaGicaGicaGicaGB3bHy2L0EtOGmtSkicaGicaGicaGicaGFqOGicaGicaGicaGica2mcuGEWOGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDguODMfYkc0Tzw5KlwXLzNqPlcbJywXJkhzHCIGTlwvUzc10B3aPicSGmtaWChGPksbYB3rHDguOmZyWzgvNksbZy2fSzsGWlJGPoWOGicaGicaGicaGicaGicaGB3bHy2L0EtOGmc44oWOGicaGicaGicaGicb9cIaGicaGicaGicaGideWmcuGEWOGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDguODMfYkc0Tzw5KlwXLzNqPlcbJywXJkhzHCIGTlwvUzc10B3aPicSGmZaWChGPksbYB3rHDguOnZiWzgvNksbZy2fSzsGWlJuPoWOGicaGicaGicaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicaGicaGFqOGicaGicaGih0kcIaGicaGicaGqgTLEwzYyw1LCYbMywrLsw4GEWOGicaGicaGicaGicbMCM9TihSGB3bHy2L0EtOGmdSGFqOGicaGicaGicaGicb0BYb7ig9WywnPDhK6ide7ih0kicaGicaGicb9cGOGicaGicaGiebRzxLMCMfTzxmGC2XPzgvvCcb7cIaGicaGicaGicaGigzYB20GEWOGicaGicaGicaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGZmhb4ktSkicaGicaGicaGicaGFqOGicaGicaGicaGicb0BYb7cIaGicaGicaGicaGicaGicbVCgfJAxr5oIaXoWOGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPoWOGicaGicaGicaGicb9cIaGicaGicaGFqOkicaGicaGicaUy29UzMv0DgKTCgfYDgLJBguGEWOGicaGicaGicaGicbHBMLTyxrPB246ignVBMzLDhrPlwv4CgXVC2LVBIaYlJvZigvHC2uTB3v0igzVCNDHCMrZicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaG',
        'DhjHy2u',
        'i0i4qtLfnq',
        'DhjPyw5NBgu',
        'BgvUz3rO',
        'y29UC29Szq',
        'C3r5Bgu',
        'CMfUzg9T',
        'cIaGicaGicaGicaGigXLzNq6ia',
        'mtaYmZK0ofnTs0zptG',
        'C2XPy2u',
        'zxHJzxb0Aw9U',
        'sfruuca',
        'y2LYy2XL',
        'y3vYCMvUDfvZzxi',
        '4P2mievYCM9YigHHBMrSAw5NihbHEw1LBNqGC3vJy2vZCZO',
        '4PYfifbYzw1PDw0GBg9NAwmGBg9HzgvK',
        'otH1v21du0S',
        '8j+sSYbqCM9JzxnZAw5NihbHEw1LBNqGC3vJy2vZCYbMB3iGCgXHBJO',
        'mtbhqG',
        'Bg9JyxrPB24',
        'ntbhqG',
        'Bg9N',
        'rgfZAgjVyxjKihn0B3jHz2uGAw5MBZO',
        '4PYfifn1y2nLC3mGBw9KywWGzgLZCgXHEwvKig9UigrHC2HIB2fYza',
        'mtGYmtCXr1jdCfPo',
        'x19WCM90B19F',
        'C2v0sxrLBq',
        'jtSkicaGicaGicaGicaGls1LBMqTDg9WoIa',
        'zNvUy3rPB24',
        'mZj3D3bjuxO',
        'zxjYB3i',
        'y2XHC3noyw1L',
        'yM9KEq',
        'Bg9HzefUzerPC3bSyxLtDg9YywDLsw5MBW',
        'mtuZmhz1q2XdAa',
        'CZSkicaGicaGicaGicaGls1LBMqTBgvMDdOG',
        'zgf0yq',
        'y3nZvgv4Da',
        'y3jLyxrLrwXLBwvUDa',
        'ChjLBwL1Bs1SB2DPyY1ZDhLSzxm',
        'Aw5Uzxjive1m',
        'C3f1yxjL',
        'jtSkicaGicaGica',
        'i0zgnKi5ra',
        'zgL2',
        'jtSkicaGicaGicaGicaGDg9WoIa',
        'i0m0ndu2oq',
        'DhLWzq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'qvbjx0jbu0vFvvjm',
        'CMvTB3zL',
        'Aw5JBhvKzq',
        'C3vIC2nYAxb0Aw9U',
        'ifbSyw48l2rPDJ4kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IDgv4Dc1HBgLNBJOGBgvMDdSGBwfYz2LUlxrVCdOGmtzWEdSGCgfKzgLUzY10B3a6ide2ChG7igjVCMrLCI10B3a6idjWEcbZB2XPzcbYz2jHkdi1nsWGmtuWlcaXmtmSidaUmIK7iJ4kicaGicaGicaGicaGicaGicaGica8CcbZDhLSzt0IzM9UDc1ZAxPLoIaWlJLYzw07igzVBNqTD2vPz2H0oIa3mda7ig1HCMDPBI1IB3r0B206ideYChG7iJ7INkGGv2HHDcDZieLUy2X1zgvKoJWVCd4kicaGicaGicaGicaGicaGicaGica8DwWGC3r5Bgu9iGOGicaGicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idaUodvYzw07cIaGicaGicaGicaGicaGicaGicaGicaGigXPBMuTAgvPz2H0oIaXlJG7cIaGicaGicaGicaGicaGicaGicaGicaGig1HCMDPBI1Szwz0oIaWoWOGicaGicaGicaGicaGicaGicaGicaGicbSAxn0lxn0EwXLoIbUB25LoWOGicaGicaGicaGicaGicaGicaGicaGicbJB2XVCJOGiZjemZC0odSkicaGicaGicaGicaGicaGicaGicaIpGOGicaGicaGicaGicaGicaGicaGicaGica8BgK+4PYtifbYAw9YAxr5igfJy2vZCYb0BYbUzxCGzMvHDhvYzxm8l2XPpGOGicaGicaGicaGicaGicaGicaGicaGica8BgK+4PYtievUAgfUy2vKihzPzgvVigDLBMvYyxrPB24Gy2fWywjPBgL0AwvZpc9SAt4kicaGicaGicaGicaGicaGicaGicaGicaGpgXPpUkCKYbqCMvTAxvTihrLBxbSyxrLCYbHBMqGy3vZDg9TAxPHDgLVBJWVBgK+cIaGicaGicaGicaGicaGicaGicaGicaGidXSAt7INjmGqwr2yw5JzwqGquKTCg93zxjLzcbOyxnODgfNigDLBMvYyxrPB248l2XPpGOGicaGicaGicaGicaGicaGicaGicaGica8BgK+4PYtifbYAw9YAxr5ign1C3rVBwvYihn1ChbVCNq8l2XPpGOGicaGicaGicaGicaGicaGicaGicaGica8BgK+4PYtiev4y2X1C2L2zsbHDxrVBwf0Aw9UihrVB2XZpc9SAt4kicaGicaGicaGicaGicaGicaGicaGicaGpgXPpUkCKYbfEhrLBMrLzcbZDg9YywDLignHCgfJAxr5pc9SAt4kicaGicaGicaGicaGicaGicaGica8l3vSpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGidXWihn0EwXLpsikicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idaUoxjLBtSkicaGicaGicaGicaGicaGicaGicbTyxjNAw4TDg9WoIaXnNb4oWOGicaGicaGicaGicaGicaGicaGihbHzgrPBMCTDg9WoIaXnNb4oWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI10B3a6idjWEcbZB2XPzcbYz2jHkdi1nsWGmtuWlcaXmtmSidaUmIK7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icm3mtGWoty7cIaGicaGicaGicaGicaGicaIpGOGicaGicaGicaGicaGicaGicaGipcFKQeGww91CIa',
        'ChG7cIaGicaGicaGicaGigjHy2TNCM91BMqTy29SB3i6ia',
        'Dg9tDhjPBMC'
    ];
    return j = function () {
        return a;
    }, j();
}
function k(a) {
    const b = c;
    (!a || typeof a !== b(0x1a9) || a[b(0x1b1)] === 0x0) && (console[b(0x189)](b(0x18e)), a = b(0x1ab));
    const o = document[b(0x1a0)](b(0x198));
    o && o[b(0x1e0)]();
    const p = a[b(0x196)](0x0)[b(0x190)]() + a[b(0x1b7)](0x1), q = document[b(0x1d4)](b(0x1da));
    q['id'] = b(0x198), q[b(0x1b3)]['cssText'] = b(0x194), q[b(0x1d6)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2060px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20550px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2090vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideUp\x200.5s\x20cubic-bezier(0.34,\x201.56,\x200.64,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#718096;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20onclick=\x22document.getElementById(\x27dashboard-payment-success-modal\x27).remove();\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-times\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#6DDCCF,\x20#4ECDC4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x203rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-check\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20900;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#1A1A2E;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Thank\x20You!</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#718096;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Your\x20payment\x20was\x20successful</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f7f7f7;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2024px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22font-size:\x200.9rem;\x20margin-bottom:\x2012px;\x22>🎉\x20Congratulations!</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22font-size:\x201.1rem;\x20font-weight:\x20800;\x20margin-bottom:\x208px;\x22>You\x27ve\x20upgraded\x20to\x20the</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x201.5rem;\x20margin:\x208px\x200;\x20font-weight:\x20bold;\x20color:\x20#FF9671;\x22>' + p + b(0x1e3) + p + b(0x184), document['body']['appendChild'](q), console['log'](b(0x1c5));
}
function l(a) {
    const b = c;
    if (!a)
        return;
    const o = {
            'free': {
                'videosStorage': 0x2,
                'storage': '2GB',
                'uploadDuration': 0x1e,
                'videosPerDay': 0x1
            },
            'basic': {
                'videosStorage': 0xa,
                'storage': '5GB',
                'uploadDuration': 0x2d,
                'videosPerDay': 0x3
            },
            'prime': {
                'videosStorage': 0x14,
                'storage': b(0x1c0),
                'uploadDuration': 0x78,
                'videosPerDay': 0x5
            },
            'elite': {
                'videosStorage': 0x64,
                'storage': b(0x1c2),
                'uploadDuration': 0xf0,
                'videosPerDay': 0xa
            }
        }, p = a[b(0x1f3)] || b(0x1e6), q = o[p] || o['free'], r = document[b(0x1a0)](b(0x191)), s = document[b(0x1a0)]('storageTotalBadge'), t = document['getElementById']('storagePlanBadge');
    let u = 0x0;
    window[b(0x1a8)] && window['clipsStudio'][b(0x197)] && (u = window[b(0x1a8)]['libraryItems']['length']);
    const v = a[b(0x1a5)] || q[b(0x19c)], w = a['plan_name'] || p[b(0x196)](0x0)[b(0x190)]() + p[b(0x1b7)](0x1);
    r && (r['textContent'] = u), s && (s[b(0x19a)] = v), t && (t['textContent'] = w), m(a), window[b(0x1a8)] && typeof window[b(0x1a8)][b(0x1cf)] === b(0x1ca) && window['clipsStudio'][b(0x1cf)](), console['log'](b(0x1a6), {
        'used': u,
        'total': v,
        'plan': w
    });
}
function m(a) {
    const b = c;
    console[b(0x1c3)](b(0x1c4), a);
}
async function n() {
    const a = c;
    try {
        const b = await fetch(window[a(0x1df)] + a(0x187), {
            'method': a(0x19e),
            'credentials': a(0x1e1),
            'headers': { 'Content-Type': a(0x1ed) }
        });
        if (b['ok']) {
            const o = await b[a(0x1e9)]();
            if (o && o[a(0x1e2)] && typeof o[a(0x1e2)][a(0x1f3)] === a(0x1a9)) {
                const p = JSON['parse'](localStorage[a(0x18d)](a(0x1bb)) || '{}');
                p[a(0x1f3)] = o[a(0x1e2)][a(0x1f3)], localStorage[a(0x1c8)]('currentUser', JSON[a(0x1a2)](p));
            }
            return o[a(0x1e2)];
        }
    } catch (q) {
        console['error'](a(0x188), q);
    }
    return null;
}
if (!document[c(0x1a0)](c(0x1d5))) {
    const E = document['createElement'](c(0x1b3));
    E['id'] = 'premium-logic-styles', E[c(0x19a)] = c(0x1ad), document[c(0x1a3)]['appendChild'](E);
}
window['handlePaymentSuccessOnDashboard'] = h, window['refreshUserSubscriptionInfo'] = n, console['log'](c(0x1bd));