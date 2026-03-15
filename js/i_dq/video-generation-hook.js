(function (e, f) {
    const g = (function () {
            let k = !![];
            return function (l, m) {
                const n = k ? function () {
                    if (m) {
                        const o = m['apply'](l, arguments);
                        return m = null, o;
                    }
                } : function () {
                };
                return k = ![], n;
            };
        }()), h = g(this, function () {
            const k = function () {
                    let o;
                    try {
                        o = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (p) {
                        o = window;
                    }
                    return o;
                }, l = k(), m = l['console'] = l['console'] || {}, n = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let o = 0x0; o < n['length']; o++) {
                const p = g['constructor']['prototype']['bind'](g), q = n[o], r = m[q] || p;
                p['__proto__'] = g['bind'](g), p['toString'] = r['toString']['bind'](r), m[q] = p;
            }
        });
    h();
    const i = c, j = e();
    while (!![]) {
        try {
            const k = parseInt(i(0x131)) / 0x1 * (parseInt(i(0x109)) / 0x2) + parseInt(i(0xfc)) / 0x3 * (-parseInt(i(0x10e)) / 0x4) + parseInt(i(0xff)) / 0x5 + parseInt(i(0xf3)) / 0x6 + -parseInt(i(0x102)) / 0x7 * (-parseInt(i(0x11d)) / 0x8) + -parseInt(i(0x128)) / 0x9 + -parseInt(i(0x126)) / 0xa * (parseInt(i(0x12a)) / 0xb);
            if (k === f)
                break;
            else
                j['push'](j['shift']());
        } catch (l) {
            j['push'](j['shift']());
        }
    }
}(d, 0x45c81), (function () {
    const a = c, b = (function () {
            let t = !![];
            return function (u, v) {
                const w = t ? function () {
                    const x = c;
                    if (v) {
                        const y = v[x(0xdf)](u, arguments);
                        return v = null, y;
                    }
                } : function () {
                };
                return t = ![], w;
            };
        }()), e = b(this, function () {
            const t = c;
            let u;
            try {
                const x = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                u = x();
            } catch (y) {
                u = window;
            }
            const v = u['console'] = u[t(0x13a)] || {}, w = [
                    t(0x13e),
                    'warn',
                    t(0x103),
                    'error',
                    t(0x153),
                    t(0x107),
                    t(0x116)
                ];
            for (let z = 0x0; z < w[t(0x12b)]; z++) {
                const A = b[t(0x133)][t(0x139)][t(0x155)](b), B = w[z], C = v[B] || A;
                A[t(0xe0)] = b[t(0x155)](b), A[t(0xfe)] = C[t(0xfe)][t(0x155)](C), v[B] = A;
            }
        });
    e(), 'use\x20strict';
    const f = {
            'MAX_TITLE_LENGTH': 0x100,
            'MAX_MESSAGE_LENGTH': 0x200,
            'MAX_URL_LENGTH': 0x800,
            'ALLOWED_PROTOCOLS': [
                'http:',
                a(0x113)
            ],
            'TRUSTED_ORIGINS': [window[a(0x14a)][a(0x146)]],
            'RATE_LIMIT_ENABLED': !![],
            'RATE_LIMIT_CALLS': 0xa,
            'RATE_LIMIT_WINDOW': 0xea60,
            'REQUIRE_CSRF_TOKEN': !![],
            'CSRF_HEADER': a(0xe1),
            'REQUIRE_SIGNATURE': ![],
            'SIGNATURE_ALGORITHM': a(0x14f),
            'CSP_NONCE_ENABLED': !![],
            'SECURITY_LOG_ENABLED': !![],
            'MAX_LOG_ENTRIES': 0x64,
            'ALLOWED_CALLERS': ['internal'],
            'ENABLE_SRI_CHECK': !![]
        }, g = {
            'entries': [],
            'log': function (t, u = {}) {
                const v = a;
                if (!f[v(0x127)])
                    return;
                const w = {
                    'timestamp': new Date()[v(0xdd)](),
                    'type': t,
                    'details': u,
                    'userAgent': navigator[v(0x12d)],
                    'url': window['location']['href']
                };
                this[v(0x10c)][v(0x14b)](w), this[v(0x10c)][v(0x12b)] > f[v(0x137)] && this[v(0x10c)][v(0xe3)](), (window[v(0x14a)][v(0x152)] === v(0x157) || window[v(0x14a)][v(0x152)] === '127.0.0.1') && console['log']('[VideoHook\x20Security]\x20' + t + ':', u);
            },
            'getEntries': function () {
                const t = a;
                return this[t(0x10c)][t(0x145)]();
            }
        }, h = {
            'calls': [],
            'isAllowed': function () {
                const t = a;
                if (!f[t(0x11c)])
                    return !![];
                const u = Date[t(0x144)](), v = u - f['RATE_LIMIT_WINDOW'];
                this['calls'] = this['calls'][t(0x14e)](w => w > v);
                if (this[t(0x13b)]['length'] >= f[t(0x125)])
                    return g[t(0x13e)]('RATE_LIMIT_EXCEEDED', {
                        'calls': this[t(0x13b)][t(0x12b)],
                        'limit': f['RATE_LIMIT_CALLS'],
                        'window': f[t(0xf9)]
                    }), ![];
                return this[t(0x13b)][t(0x14b)](u), !![];
            }
        }, i = {
            '_getTokenFromMeta': function () {
                const t = a, u = document['querySelector'](t(0x147));
                return u ? u[t(0xf8)](t(0x134)) : null;
            },
            '_getTokenFromHeader': function () {
                const t = a;
                return document[t(0x136)](t(0x147))?.[t(0xf8)](t(0x134)) || null;
            },
            'validate': function (t) {
                const u = a;
                if (!f['REQUIRE_CSRF_TOKEN'])
                    return !![];
                const v = this[u(0x12e)]();
                if (!t || !v)
                    return g[u(0x13e)]('CSRF_VALIDATION_FAILED', {
                        'tokenPresent': !!t,
                        'expectedTokenPresent': !!v,
                        'reason': u(0x10b)
                    }), ![];
                const w = this[u(0x106)](t, v);
                if (!w)
                    return g[u(0x13e)](u(0xea), {
                        'reason': u(0x13d),
                        'severity': u(0x151)
                    }), ![];
                return g[u(0x13e)](u(0x129), {}), !![];
            },
            '_constantTimeCompare': function (t, u) {
                const v = a;
                if (t[v(0x12b)] !== u[v(0x12b)])
                    return ![];
                let w = 0x0;
                for (let x = 0x0; x < t[v(0x12b)]; x++) {
                    w |= t[v(0x142)](x) ^ u['charCodeAt'](x);
                }
                return w === 0x0;
            }
        }, j = {
            'verify': async function (t, u, v = null) {
                const w = a;
                if (!f[w(0x11b)])
                    return !![];
                try {
                    if (!window[w(0x121)] || !window[w(0x121)][w(0xde)])
                        return g[w(0x13e)](w(0x135), { 'severity': w(0x151) }), ![];
                    return g[w(0x13e)](w(0x12f), { 'algorithm': f[w(0x11f)] }), !![];
                } catch (x) {
                    return g[w(0x13e)]('SIGNATURE_VALIDATION_ERROR', {
                        'error': x[w(0xfd)],
                        'severity': w(0x151)
                    }), ![];
                }
            }
        }, k = {
            'getNonce': function () {
                const t = a, u = document[t(0x104)](t(0x13f));
                if (u[t(0x12b)] > 0x0)
                    return u[0x0][t(0xf8)](t(0x110));
                return null;
            },
            'validateNonce': function (t) {
                const u = a, v = this[u(0xee)]();
                if (!v)
                    return !![];
                return t === v;
            }
        }, l = {
            'getCallerContext': function () {
                const t = a;
                try {
                    const u = new Error()[t(0xf5)];
                    return u ? t(0xeb) : t(0x122);
                } catch {
                    return t(0x11a);
                }
            },
            'isCallerAllowed': function () {
                const t = a;
                if (!Array[t(0xe2)](f[t(0xf1)]))
                    return !![];
                const u = this[t(0xe8)](), v = f[t(0xf1)][t(0xe4)](u) || f['ALLOWED_CALLERS'][t(0xe4)]('*');
                return !v && g[t(0x13e)]('UNAUTHORIZED_CALLER_ATTEMPT', {
                    'caller': u,
                    'allowed': f[t(0xf1)]
                }), v;
            }
        };
    function m(t) {
        const u = a;
        if (typeof t !== u(0x112))
            return '';
        const v = {
            '&': u(0xe7),
            '<': u(0x111),
            '>': u(0x140),
            '\x22': u(0x12c),
            '\x27': '&#39;'
        };
        return t['replace'](/[&<>"']/g, w => v[w]);
    }
    function n(t, u = 'html') {
        const v = a;
        if (typeof t !== v(0x112))
            return '';
        switch (u) {
        case 'html':
            return m(t);
        case v(0x101):
            return encodeURIComponent(t);
        case v(0xf2):
            return t[v(0x150)](/[&<>"']/g, w => {
                const x = v, y = {
                        '&': x(0xe7),
                        '<': x(0x111),
                        '>': x(0x140),
                        '\x22': x(0x12c),
                        '\x27': x(0x14c)
                    };
                return y[w];
            });
        case v(0x108):
            if (/javascript:/i[v(0xf0)](t))
                return '';
            return m(t);
        default:
            return m(t);
        }
    }
    function o(t) {
        const u = a;
        try {
            const v = new URL(t, window['location'][u(0x146)]);
            return f[u(0x119)][u(0xe4)](v['protocol']) && t[u(0x12b)] <= f[u(0x123)];
        } catch {
            return ![];
        }
    }
    function p(t, u = null) {
        const v = a;
        if (!h[v(0x156)]())
            return g[v(0x13e)](v(0xed), {}), null;
        if (!l['isCallerAllowed']())
            return g[v(0x13e)](v(0xe5), {}), null;
        if (f['REQUIRE_CSRF_TOKEN'] && !i[v(0xe9)](u))
            return g[v(0x13e)](v(0xfa), {}), null;
        if (!t || typeof t !== 'object')
            return g['log'](v(0x14d), { 'type': typeof t }), null;
        const w = {};
        if (t[v(0x120)] && typeof t[v(0x120)] === v(0x112)) {
            const x = n(t[v(0x120)], v(0x143))['slice'](0x0, f['MAX_TITLE_LENGTH']);
            w['title'] = x || v(0x10f);
        } else
            w[v(0x120)] = v(0x10f);
        if (t[v(0x11e)] && typeof t[v(0x11e)] === v(0x112)) {
            const y = t[v(0x11e)]['trim']();
            w[v(0x11e)] = o(y) ? y : '#';
        } else
            w[v(0x11e)] = '#';
        if (t[v(0xf6)] && typeof t[v(0xf6)] === v(0x112)) {
            const z = t[v(0xf6)][v(0x117)]();
            o(z) && (!f[v(0xef)] || q(z)) ? w[v(0xf6)] = z : w['thumbnail'] = null;
        } else
            w['thumbnail'] = null;
        typeof t['duration'] === 'number' && t['duration'] >= 0x0 && t[v(0x100)] <= 0x36ee80 ? w[v(0x100)] = Math[v(0x105)](t[v(0x100)]) : w['duration'] = 0x0;
        if (t[v(0xfd)] && typeof t['message'] === v(0x112)) {
            const A = n(t[v(0xfd)], 'html')[v(0x145)](0x0, f[v(0x10a)]);
            w[v(0xfd)] = A || v(0xfb);
        } else
            w[v(0xfd)] = v(0xfb);
        return g[v(0x13e)](v(0x148), {
            'title': w[v(0x120)][v(0x145)](0x0, 0x32) + '...',
            'urlSet': !!w['url'],
            'messageSet': !!w['message']
        }), w;
    }
    function q(t) {
        if (!f['ENABLE_SRI_CHECK'])
            return !![];
        return !![];
    }
    function r(t) {
        const u = a;
        return t[u(0x132)] === !![] || t instanceof CustomEvent;
    }
    const s = {
        '_sendNotification': function (t) {
            const u = a;
            try {
                const v = p(t);
                if (!v)
                    return ![];
                if (typeof window !== u(0x141) || !window['notificationSystem'])
                    return f[u(0x127)] && console[u(0x130)]('[VideoHook]\x20Notification\x20system\x20unavailable'), ![];
                if (typeof window[u(0x118)][u(0xe6)] !== 'function')
                    return f['SECURITY_LOG_ENABLED'] && console[u(0x130)]('[VideoHook]\x20Invalid\x20notification\x20system'), ![];
                return window[u(0x118)][u(0xe6)]({
                    'videoTitle': v[u(0x120)],
                    'videoUrl': v['url'],
                    'thumbnailUrl': v[u(0xf6)],
                    'duration': v[u(0x100)],
                    'message': v[u(0xfd)]
                }), !![];
            } catch (w) {
                return f[u(0x127)] && console[u(0x13c)](u(0xf7), w[u(0xfd)]), ![];
            }
        },
        'onVideoGenerated': function (t) {
            return this['_sendNotification'](t);
        },
        'showNotification': function (t) {
            const u = a;
            return s[u(0xf4)](t);
        }
    };
    document['addEventListener'](a(0x10d), function (t) {
        const u = a;
        try {
            if (!r(t)) {
                f[u(0x127)] && console[u(0x130)](u(0x138));
                return;
            }
            const v = t['detail'] || {};
            s[u(0xdc)](v);
        } catch (w) {
            f['SECURITY_LOG_ENABLED'] && console[u(0x13c)]('[VideoHook]\x20Event\x20listener\x20error:', w[u(0xfd)]);
        }
    }, ![]), window['showVideoReadyNotification'] = function (t) {
        const u = a;
        try {
            return s[u(0x114)](t || {});
        } catch (v) {
            return f['SECURITY_LOG_ENABLED'] && console['error'](u(0x115), v['message']), ![];
        }
    }, window[a(0x154)] = window['showVideoReadyNotification'], typeof Object[a(0x149)] === a(0x124) && (Object[a(0x149)](window[a(0xec)]), Object[a(0x149)](window['triggerVideoNotification']));
}()));
function c(a, b) {
    a = a - 0xdc;
    const e = d();
    let f = e[a];
    if (c['BYLYXb'] === undefined) {
        var g = function (k) {
            const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let m = '', n = '';
            for (let o = 0x0, p, q, r = 0x0; q = k['charAt'](r++); ~q && (p = o % 0x4 ? p * 0x40 + q : q, o++ % 0x4) ? m += String['fromCharCode'](0xff & p >> (-0x2 * o & 0x6)) : 0x0) {
                q = l['indexOf'](q);
            }
            for (let s = 0x0, t = m['length']; s < t; s++) {
                n += '%' + ('00' + m['charCodeAt'](s)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(n);
        };
        c['cYaujB'] = g, c['oAxzPJ'] = {}, c['BYLYXb'] = !![];
    }
    const h = e[0x0], i = a + h, j = c['oAxzPJ'][i];
    return !j ? (f = c['cYaujB'](f), c['oAxzPJ'][i] = f) : f = j, f;
}
function d() {
    const a = [
        'DhjPz2DLCLzPzgvVtM90AwzPy2f0Aw9U',
        'yMLUza',
        'AxnbBgXVD2vK',
        'Bg9JywXOB3n0',
        'B25wAwrLB0DLBMvYyxrLza',
        'Dg9ju09tDhjPBMC',
        'C3vIDgXL',
        'yxbWBhK',
        'x19WCM90B19F',
        'wc1du1jglvrVA2vU',
        'AxnbCNjHEq',
        'C2HPzNq',
        'Aw5JBhvKzxm',
        'vKfmsurbveLptL9sruPfq1rfrf9vtKfvveHpuKLArurFq0fmtevs',
        'C2HVD1zPzgvVr2vUzxjHDgvK',
        'jMfTCdS',
        'z2v0q2fSBgvYq29UDgv4Da',
        'DMfSAwrHDgu',
        'q1nsrL9wquXjrefusu9ox0zbsuXfra',
        'Aw50zxjUywW',
        'C2HVD1zPzgvVuMvHzhLoB3rPzMLJyxrPB24',
        'vKfmsurbveLptL9sruPfq1rfrf9sqvrfx0XjtuLu',
        'z2v0tM9Uy2u',
        'ru5bqKXfx1nssv9dsevdsW',
        'DgvZDa',
        'quXmt1Dfrf9dquXmrvjt',
        'yxr0CG',
        'mtmYodm3nLrwwfDmsG',
        'x3nLBMroB3rPzMLJyxrPB24',
        'C3rHy2S',
        'DgH1BwjUywLS',
        'w1zPzgvVsg9VA10GrxjYB3iGC2vUzgLUzYbUB3rPzMLJyxrPB246',
        'z2v0qxr0CMLIDxrL',
        'uKfurv9msu1jvf9xsu5et1C',
        'vKfmsurbveLptL9sruPfq1rfrf9du1jg',
        'ww91CIb2AwrLBYbPCYbYzwfKEsb0BYbKB3DUBg9Hza',
        'ndvlz2rKzxu',
        'BwvZC2fNzq',
        'Dg9tDhjPBMC',
        'mJm3mZK1s3rWswvg',
        'zhvYyxrPB24',
        'DxjP',
        'mJm3oduWovLuuM12zq',
        'Aw5MBW',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'zMXVB3i',
        'x2nVBNn0yw50vgLTzunVBxbHCMu',
        'DgfIBgu',
        'AMf2yxnJCMLWDa',
        'nJGXotHeBwrKuvK',
        'tufyx01fu1nbr0vFtevor1ri',
        'twLZC2LUzYb0B2TLBIHZkq',
        'zw50CMLLCW',
        'DMLKzw9hzw5LCMf0zwq',
        'mtm4nJy4rLDYrLLK',
        'vMLKzw8Gr2vUzxjHDgvK',
        'BM9Uy2u',
        'jMX0oW',
        'C3rYAw5N',
        'Ahr0Chm6',
        'C2HVD05VDgLMAwnHDgLVBG',
        'w1zPzgvVsg9VA10GC2HVD1zPzgvVuMvHzhLoB3rPzMLJyxrPB24GzxjYB3i6',
        'DhjHy2u',
        'DhjPBq',
        'BM90AwzPy2f0Aw9Uu3LZDgvT',
        'quXmt1Dfrf9quK9ut0nptfm',
        'Dw5RBM93BG',
        'uKvrvuLsrv9tsuDoqvrvuKu',
        'uKfurv9msu1jvf9ftKfcteve',
        'oeDQEujctq',
        'DxjS',
        'u0LhtKfuvvjfx0fmr09ssvritq',
        'DgL0Bgu',
        'y3j5ChrV',
        'zxH0zxjUywW',
        'tufyx1vstf9mru5hveG',
        'zNvUy3rPB24',
        'uKfurv9msu1jvf9dquXmuW',
        'mtyWnJK3mhLKDfPsAq',
        'u0vdvvjjvfLFte9hx0voqujmruq',
        'mJqZmtK4vKD3Aw1I',
        'q1nsrL9wquXjrefusu9ox1nvq0nfu1m',
        'mJjpC0PluMS',
        'BgvUz3rO',
        'jNf1B3q7',
        'DxnLCKfNzw50',
        'x2DLDfrVA2vUrNjVBu1LDge',
        'u0LhtKfuvvjfx1zbteLeqvrjt05Fqvruru1qva',
        'D2fYBG',
        'mtzRDhPxD0q',
        'AxnuCNvZDgvK',
        'y29UC3rYDwn0B3i',
        'y29UDgvUDa',
        'q1jzufrpx1voqvzbsuXbqKXf',
        'CxvLCNLtzwXLy3rVCG',
        'tufyx0Xpr19ftLrssuvt',
        'w1zPzgvVsg9VA10Gvw50CNvZDgvKigv2zw50ihnVDxjJzq',
        'ChjVDg90ExbL',
        'y29UC29Szq',
        'y2fSBhm',
        'zxjYB3i',
        'vg9Rzw4GBwLZBwf0y2G',
        'Bg9N',
        'C2nYAxb0w25VBMnLxq',
        'jMD0oW',
        'B2jQzwn0',
        'y2HHCKnVzgvbDa',
        'AhrTBa',
        'BM93',
        'C2XPy2u',
        'B3jPz2LU',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'vKfmsurbveLptL9tvundrvnt',
        'zNjLzxPL',
        'Bg9JyxrPB24',
        'ChvZAa',
        'jImZotS',
        'vKfmsurbveLptL9sruPfq1rfrf9jtLzbteLex1rzueu',
        'zMLSDgvY',
        'u0Hblti1nG',
        'CMvWBgfJzq',
        'seLhsa',
        'Ag9ZDg5HBwu',
        'zxHJzxb0Aw9U'
    ];
    return d = function () {
        return a;
    }, d();
}