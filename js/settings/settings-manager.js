const c = l;
(function (a, b) {
    const p = l, q = a();
    while (!![]) {
        try {
            const r = parseInt(p(0x1cb)) / 0x1 + parseInt(p(0x19c)) / 0x2 * (-parseInt(p(0x1d3)) / 0x3) + parseInt(p(0x194)) / 0x4 * (parseInt(p(0x17c)) / 0x5) + -parseInt(p(0x1f3)) / 0x6 + -parseInt(p(0x1e4)) / 0x7 + parseInt(p(0x19b)) / 0x8 * (-parseInt(p(0x1e6)) / 0x9) + parseInt(p(0x173)) / 0xa * (parseInt(p(0x1cf)) / 0xb);
            if (r === b)
                break;
            else
                q['push'](q['shift']());
        } catch (s) {
            q['push'](q['shift']());
        }
    }
}(m, 0xe32dd));
const d = (function () {
        const p = (function () {
                let s = !![];
                return function (t, u) {
                    const v = s ? function () {
                        if (u) {
                            const w = u['apply'](t, arguments);
                            return u = null, w;
                        }
                    } : function () {
                    };
                    return s = ![], v;
                };
            }()), q = p(this, function () {
                const s = function () {
                        let w;
                        try {
                            w = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (x) {
                            w = window;
                        }
                        return w;
                    }, t = s(), u = t['console'] = t['console'] || {}, v = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let w = 0x0; w < v['length']; w++) {
                    const x = p['constructor']['prototype']['bind'](p), y = v[w], z = u[y] || x;
                    x['__proto__'] = p['bind'](p), x['toString'] = z['toString']['bind'](z), u[y] = x;
                }
            });
        q();
        let r = !![];
        return function (s, t) {
            const u = r ? function () {
                const v = l;
                if (t) {
                    const w = t[v(0x178)](s, arguments);
                    return t = null, w;
                }
            } : function () {
            };
            return r = ![], u;
        };
    }()), e = d(this, function () {
        const a = l;
        let b;
        try {
            const r = Function(a(0x1ac) + a(0x1e8) + ');');
            b = r();
        } catch (s) {
            b = window;
        }
        const p = b[a(0x18c)] = b[a(0x18c)] || {}, q = [
                a(0x1d0),
                a(0x1ae),
                'info',
                'error',
                'exception',
                a(0x1b0),
                a(0x1a1)
            ];
        for (let t = 0x0; t < q[a(0x189)]; t++) {
            const u = d[a(0x17f)]['prototype'][a(0x1f2)](d), v = q[t], w = p[v] || u;
            u[a(0x1a9)] = d[a(0x1f2)](d), u[a(0x1e7)] = w[a(0x1e7)][a(0x1f2)](w), p[v] = u;
        }
    });
e();
function f(a) {
    const b = l;
    if (typeof a !== b(0x187))
        return '';
    const p = {
        '&': b(0x1a7),
        '<': b(0x1c4),
        '>': '&gt;',
        '\x22': '&quot;',
        '\x27': b(0x1ea),
        '/': b(0x1b4)
    };
    return a[b(0x1a5)](/[&<>"'\/]/g, q => p[q] || q);
}
function g() {
    const a = l, b = document[a(0x1bc)](a(0x1aa))?.[a(0x181)](a(0x1cc));
    if (!b || typeof b !== a(0x187) || b[a(0x189)] < 0xa)
        return '';
    return b['trim']();
}
function h(a) {
    const b = l;
    if (typeof a !== b(0x187))
        return ![];
    if (a['length'] === 0x0 || a['length'] > 0x32)
        return ![];
    return /^[a-zA-Z0-9_-]{1,50}$/[b(0x202)](a);
}
function i(a) {
    const b = l;
    if (typeof a !== 'string')
        return ![];
    if (a['length'] === 0x0 || a[b(0x189)] > 0x64)
        return ![];
    return /^[a-zA-Z0-9_-]+$/['test'](a);
}
async function j(a, b = c(0x1c1), p = '') {
    const q = c;
    try {
        const r = Math['floor'](Date[q(0x16c)]() / 0x3e8)[q(0x1e7)](), s = Array[q(0x1a6)](crypto['getRandomValues'](new Uint8Array(0x10)))[q(0x1ef)](A => A[q(0x1e7)](0x10)[q(0x201)](0x2, '0'))[q(0x170)](''), t = g();
        if (!t)
            return {
                'timestamp': r,
                'nonce': s
            };
        const u = new TextEncoder(), v = u[q(0x1e0)](t), w = await crypto['subtle'][q(0x1f6)](q(0x1db), v, {
                'name': q(0x1df),
                'hash': q(0x1ec)
            }, ![], [q(0x1f0)]), x = u['encode'](a + '|' + b + '|' + r + '|' + s), y = await crypto[q(0x1f9)][q(0x1f0)](q(0x1df), w, x), z = Array['from'](new Uint8Array(y))[q(0x1ef)](A => A[q(0x1e7)](0x10)[q(0x201)](0x2, '0'))[q(0x170)]('');
        return {
            'timestamp': r,
            'nonce': s,
            'signature': z
        };
    } catch (A) {
        return console[q(0x1ee)](q(0x1a0), A), {};
    }
}
function k(a, b) {
    const p = c;
    if (!a)
        return;
    typeof b === p(0x187) && b[p(0x189)] < 0xc350 && (a[p(0x1b8)] = b);
}
function l(a, b) {
    a = a - 0x16c;
    const p = m();
    let q = p[a];
    if (l['gvFJKV'] === undefined) {
        var r = function (v) {
            const w = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let x = '', y = '';
            for (let z = 0x0, A, B, C = 0x0; B = v['charAt'](C++); ~B && (A = z % 0x4 ? A * 0x40 + B : B, z++ % 0x4) ? x += String['fromCharCode'](0xff & A >> (-0x2 * z & 0x6)) : 0x0) {
                B = w['indexOf'](B);
            }
            for (let D = 0x0, E = x['length']; D < E; D++) {
                y += '%' + ('00' + x['charCodeAt'](D)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(y);
        };
        l['CRppkx'] = r, l['dqcfwB'] = {}, l['gvFJKV'] = !![];
    }
    const s = p[0x0], t = a + s, u = l['dqcfwB'][t];
    return !u ? (q = l['CRppkx'](q), l['dqcfwB'][t] = q) : q = u, q;
}
function m() {
    const a = [
        'ngnsuLz2Cq',
        '4PElie5VDcbJB25Uzwn0zwq',
        'y2XHC3noyw1L',
        'z2vUzxjHDgvvC2vYswq',
        'zgL2oMXHC3qTy2HPBgq',
        'igrPC2nVBM5Ly3rLzcbZDwnJzxnZzNvSBhK',
        'zM9YrwfJAa',
        'mti4qK5gzeDi',
        'mJCYmKr1svzeAq',
        'Cg9WDwXHDgvqBgf0zM9YBxnmAxn0',
        'CMfUzg9T',
        'y3jLyxrLrwXLBwvUDa',
        'uMvXDwvZDcbZAwDUAw5NigvYCM9YoG',
        'DhjHy2u',
        'CgXHDgzVCM1dB25Uzwn0Aw9UC0nVBNrHAw5LCG',
        'i2yXzJHMna',
        'AxndB25Uzwn0zwq',
        'CMvWBgfJzq',
        'zNjVBq',
        'jMfTCdS',
        'oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa4ChG7cIaGicaGicaGicaGihOTAw5KzxG6idK5otK7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtrWEdSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZBgLKzuLUidaUm3mGzwfZztSkicaGicaGica',
        'x19WCM90B19F',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'AgvHza',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'vw5SAw5Ria',
        'D2fYBG',
        'i2q0zwrKyq',
        'DgfIBgu',
        'y29UBMvJDgvK',
        'CgXHDgzVCM1Fy29UBMvJDgLVBNm',
        'yw5HBhL0AwnZtwfUywDLCG',
        'jIn4mKy7',
        'C2v0qxr0CMLIDxrL',
        'CMvTB3zL',
        'zgL2',
        'Aw5Uzxjive1m',
        'CMvTB3zLsxrLBq',
        'zgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoW',
        'zgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIaXmNb4oW',
        'CxvLCNLtzwXLy3rVCG',
        're9nq29UDgvUDeXVywrLza',
        'Dw5SAw5Rlwj0BG',
        'C3rHDhvZ',
        'C2LNBMf0DxjL',
        'ue9tva',
        'oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzca',
        'C3rYAw5NAwz5',
        'jMX0oW',
        'zgf0ys1WBgf0zM9YBq',
        'y2XPy2S',
        'iZCYmwmYna',
        'CgfYC2u',
        'oYbIB3jKzxiTCMfKAxvZoIa4ChG7igjHy2TNCM91BMq6ia',
        'BwfUywDLq29UBMvJDgLVBNncDg4',
        'ntmYmZKWvuvkthjr',
        'y29UDgvUDa',
        'Ew91DhvIzv91C2vYx2LK',
        'rgLZy29UBMvJDcbMywLSzwq6ia',
        'mtfusM5brKu',
        'Bg9N',
        'ww91vhvIzq',
        'C2v0Dxbcyw5Uzxi',
        'mJyXnNf0zMvItq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'CgfKzgLUzZOGnNb4ideYChG7igjHy2TNCM91BMq6icnMogq3zge7ignVBg9YoIaJnZiXyZi0oYbIB3jKzxi6idfWEcbZB2XPzcaJzJvJnMnIoYbIB3jKzxiTCMfKAxvZoIa2ChG7ign1CNnVCJOGCg9PBNrLCJSGzM9UDc1ZAxPLoIaXmxb4oYbMB250lxDLAwDODdOGnJaWoYb0CMfUC2L0Aw9UoIbHBgWGmc4ZCYbLyxnLoW',
        'DgLTzw91Da',
        'BM9Uzq',
        'z2v0sxrLBq',
        'zM9UDc1ZAxPLoIaYmhb4oYb3Awr0AdOGmJrWEdSGAgvPz2H0oIaYnhb4oYbKAxnWBgf5oIbPBMXPBMuTzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGANvZDgLMEs1JB250zw50oIbJzw50zxi7',
        'C2v0DgLUz3nnyw5Hz2vY',
        'CMf3',
        'z2v0ugXHDgzVCM1oyw1L',
        'zMLYC3rdAgLSza',
        'yxbWBgLJyxrPB24VANnVBG',
        'se1bqW',
        'zw5JB2rL',
        'yMXVy2S',
        'sw52ywXPzcbWBgf0zM9YBsbUyw1L',
        'BMfTzq',
        'mZm4odm2neniu2j5BW',
        'i2y4zJLMyq',
        'odC2ota2qMvhyNjK',
        'Dg9tDhjPBMC',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'B2jQzwn0',
        'jIn4mJC7',
        'yNv0Dg9U',
        'u0Hblti1nG',
        'CgXHDgzVCM1ZtgLZDa',
        'zxjYB3i',
        'BwfW',
        'C2LNBG',
        'z2v0rwXLBwvUDej5swq',
        'yMLUza',
        'otq3nJa4ohD3ugPjCG',
        'yxbWzw5Kq2HPBgq',
        'Ew91DhvIzv90B2TLBL90Aw1L',
        'Aw1WB3j0s2v5',
        'Dw5SAw5RugXHDgzVCM0',
        'C3r5Bgu',
        'C3vIDgXL',
        'C3bHBG',
        'DxbKyxrLq29UBMvJDgLVBNneAxnWBgf5',
        'Ew91DhvIzv9JB25Uzwn0zwq',
        'Bg9HzefUywX5DgLJC0rHDge',
        'l2fUywX5DgLJCY9KAxnJB25Uzwn0',
        'i2u5zwnLzG',
        'i2y1yZzJyG',
        'CgfKu3rHCNq',
        'DgvZDa',
        'Dgv4DenVBNrLBNq',
        'DxnLCL8',
        'BM93',
        'oWOGicaGicaGicaGicbJB2XVCJOG',
        'A2v5',
        'Ew91DhvIzq',
        'AM9PBG',
        'C2HVD05VDgLMAwnHDgLVBG',
        'iZe1ntCYna',
        'ndC0ntK0nZbyuwXiEu0',
        'y29UBMvJDgLVBNm',
        'BM9Uy2u',
        'cIaGicbaA2v5zNjHBwvZihnSAwrLsw4GEWOGicaGicaGigzYB20GEWOGicaGicaGicaGicb0CMfUC2zVCM06ihrYyw5ZBgf0zvGOndaWChGPoWOGicaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGih0kicaGicaGicb0BYb7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGWktSkicaGicaGicaGicaGB3bHy2L0EtOGmtSkicaGicaGicb9cIaGicb9cIaGicbaA2v5zNjHBwvZihnSAwrLt3v0ihSkicaGicaGicbMCM9TihSkicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvykdaPoWOGicaGicaGicaGicbVCgfJAxr5oIaXoWOGicaGicaGih0kicaGicaGicb0BYb7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcG0mdbWEcK7cIaGicaGicaGicaGig9WywnPDhK6ida7cIaGicaGicaGFqOGicaGFqO',
        'rMfPBgvKihrVigrPC2nVBM5Ly3q6ia',
        'yxbWBhK',
        'phn2zYb3Awr0Ad0ImJqIigHLAwDODd0ImJqIihzPzxDcB3G9iJaGmcaYocaYmciGzMLSBd0IBM9UzsiGEg1SBNm9iMH0Dha6lY93D3CUDZmUB3jNlZiWmdaVC3zNiJ48Cgf0AcbKpsjnmJCUndmXmYaZlJeXqZi3lJeYmtmGms44osaYnI4XmZeZidaUoteGmJqUoteXmYaWlJzdmJiUnZmXmYaWide0lJaWmtmGmcaXnc4WmdeZidbdmtqUmdaXmYaWiduUmJCXmJGGmcaZlJa5mti4idaUnKmXlJG3mti4idaUoteGmc44odeYodeGms44osaWlJu3mti4msaZlJeXqZaUmJyXmJGXidqUmZmGmc4WmdeYode3nca2lJyGmc4WmdeYode3ncaXmemWlJaWmti4mtC0ideZlJqGmc4YnJeYodeGmtuUnJCGmc41nZeYodeGmtyUodLdmc44odeYodeGmtGUmteGms44nZeYocaXos4WosaZlJa5mti4ide5lJrdns4YnZeYocaYmcaXnc4WmdeZidiWide0lJaWmtmGmJbdmtqUmdaXmYaYmcaYmI43mZeZidiWidi0lJKXmtmGmtKUnemYnI4XmZeZide5lJa5idi3lJeYmtmGmtGUmteGmJCUndmXmYaXnI44oumYnY43ndeZide1lJy3idi4lJaWmtmGmtmUncaYoc4WmdeZideWqZi4lJaWmtmGnI42idi3lJC0mtmGnc4ZmYaYnY40mZeZidmUmtfAiIbMAwXSpsiJrKyWmdaWiI8+phbHDgGGzd0ItteXlJiWmtmGmtqUmLy1lJHmmtGUmJaXmYaXmeWXms4YmdeZide0lJjAiIbMAwXSpsj3AgL0zsiVpJWVC3zNpG',
        'zgLZCgXHEq',
        'B3bLBK1VzgfS',
        'mJmWnJyYmgHNvw5nzq',
        'yxbPqMfZzq',
        'Ew91DhvIzv90B2TLBG',
        'y29UC3rYDwn0B3i',
        'oYbTyxjNAw4TyM90Dg9ToIaXmhb4oW',
        'z2v0qxr0CMLIDxrL',
        'i2y4zdDKyq',
        'C2v0sxrLBq',
        'BMv3vMfSDwu',
        'C3rVCMfNzq',
        'zM9UDc1ZAxPLoIaXmxb4oYbJB2XVCJOGiZy2nJS',
        'C3rYAw5N',
        'CMvTB3zLq2HPBgq',
        'BgvUz3rO',
        'y3nZvgv4Da',
        'zM9UDc1Myw1PBhK6icDbCMnOAxzViejSywnRjYWGC2fUCY1ZzxjPzJSGzM9UDc13zwLNAhq6idCWmdSGy29SB3i6icmZmZm7igzVBNqTC2L6ztOGmtrWEdSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBgv0DgvYlxnWywnPBMC6idaUmdvLBtS',
        'y29UC29Szq',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        'C29Tzq',
        'DMfSDwvZ',
        'DxnLCKLK',
        'Aw5PDa',
        'Aw5JBhvKzq',
        'C2v0DxbnB2rHBa'
    ];
    return m = function () {
        return a;
    }, m();
}
class n {
    constructor() {
        const a = c;
        this[a(0x17d)] = window['API_BASE_URL'] || a(0x18d), this[a(0x190)] = localStorage[a(0x1d8)](a(0x1cd)) || this[a(0x197)](), this[a(0x174)] = JSON[a(0x1c8)](localStorage['getItem'](a(0x1b2)) || '{}'), this[a(0x191)]();
    }
    [c(0x191)]() {
        const a = c;
        window[a(0x1d4)](a(0x185), p => {
            const q = a;
            p[q(0x16e)] === 'platform_connections' && (this[q(0x174)] = JSON['parse'](p[q(0x184)] || '{}'), this[q(0x1fb)]());
        }), this[a(0x1fb)]();
        const b = document['getElementById'](a(0x1ca));
        b && b[a(0x1d4)](a(0x1c6), () => {
            const p = a;
            window[p(0x193)] && window[p(0x193)][p(0x17b)]();
        });
    }
    ['updateConnectionsDisplay']() {
        const a = c, b = document[a(0x1f1)](a(0x1a2)), p = b?.['parentElement'][a(0x1bc)](a(0x198)), q = Object[a(0x18f)](this['connections'])[a(0x18e)](r => r[a(0x1b1)]);
        b && p && (q ? (b[a(0x1f8)][a(0x17a)] = a(0x1e1), p[a(0x1f8)][a(0x17a)] = a(0x1d7), this['populatePlatformsList']()) : (b['style'][a(0x17a)] = a(0x1d7), p['style'][a(0x17a)] = 'block'));
    }
    [c(0x19d)]() {
        const a = c, b = document[a(0x1f1)](a(0x1ed));
        if (!b)
            return;
        while (b[a(0x1dd)]) {
            b[a(0x188)](b[a(0x1dd)]);
        }
        const p = [{
                'key': 'youtube',
                'name': a(0x1d1)
            }];
        p[a(0x19a)](q => {
            const r = a;
            if (!h(q[r(0x16e)]) || !h(q['name']))
                return;
            const s = this[r(0x174)][q[r(0x16e)]], t = s?.[r(0x1b1)] === !![], u = document[r(0x19f)](r(0x1b7));
            u[r(0x1f8)][r(0x18a)] = 'padding:\x2015px;\x20border:\x202px\x20solid\x20' + (t ? '#d4edda' : r(0x1ff)) + r(0x1c9) + (t ? r(0x1a3) : r(0x1e5)) + r(0x180);
            const v = document['createElement']('div');
            v[r(0x1f8)][r(0x18a)] = r(0x1ba);
            const w = document['createElement']('div');
            w['style'][r(0x18a)] = r(0x1bb);
            const x = document['createElement'](r(0x1fa));
            x[r(0x1f8)]['cssText'] = r(0x1d9), x[r(0x1b8)] = r(0x179);
            const y = document['createElement'](r(0x1b7)), z = document[r(0x19f)](r(0x1b7));
            z[r(0x1f8)]['cssText'] = r(0x18b), z[r(0x203)] = f(q[r(0x1e3)]);
            const A = document['createElement'](r(0x1b7));
            A[r(0x1f8)][r(0x18a)] = r(0x186), A['textContent'] = t ? '✓\x20Connected' : r(0x195), y['appendChild'](z), y[r(0x1f4)](A), w['appendChild'](x), w[r(0x1f4)](y);
            if (t) {
                const B = document[r(0x19f)](r(0x1eb));
                B[r(0x196)] = r(0x1be), B[r(0x1b5)](r(0x1c5), f(q[r(0x16e)])), B['style']['cssText'] = r(0x1d5), B['textContent'] = 'Unlink', B[r(0x1d4)](r(0x1c6), () => {
                    const C = r, D = B['getAttribute']('data-platform');
                    confirm(C(0x1ad) + f(this[C(0x1dc)](D)) + '?') && this[C(0x1f7)](D);
                }), v[r(0x1f4)](w), v[r(0x1f4)](B);
            } else
                v[r(0x1f4)](w);
            u['appendChild'](v), b[r(0x1f4)](u);
        });
    }
    async [c(0x1f7)](a) {
        const b = c;
        try {
            if (!h(a))
                throw new Error(b(0x1e2));
            if (!i(this['userId']))
                throw new Error('Invalid\x20user\x20ID');
            const p = JSON[b(0x1c3)]({ 'user_id': this['userId'] }), q = g(), r = await j('/analytics/disconnect', 'POST', p);
            if (a === b(0x16f)) {
                const t = await fetch(this[b(0x17d)] + b(0x1fe), {
                    'method': b(0x1c1),
                    'headers': {
                        'Content-Type': b(0x1de),
                        'X-CSRF-Token': q,
                        'X-Request-Timestamp': r['timestamp'] || '',
                        'X-Request-Nonce': r[b(0x175)] || '',
                        'X-Request-Signature': r[b(0x1c0)] || ''
                    },
                    'body': p,
                    'credentials': b(0x192),
                    'signal': AbortSignal[b(0x1d6)](0x7530)
                });
                if (!t['ok'] && t[b(0x1bf)] !== 0xc8 && t[b(0x1bf)] !== 0xcc)
                    throw new Error(b(0x1ce) + t[b(0x1bf)]);
                localStorage[b(0x1b9)](b(0x1fc)), localStorage[b(0x1b9)](b(0x1f5)), localStorage['removeItem'](b(0x17e));
            }
            this[b(0x174)][a] && (this['connections'][a][b(0x1b1)] = ![]), typeof this['connections'] === b(0x1e9) && localStorage[b(0x183)](b(0x1b2), JSON[b(0x1c3)](this['connections']));
            const s = document[b(0x1f1)](b(0x1d2));
            if (s)
                s[b(0x1f8)][b(0x17a)] = b(0x1e1);
            window['analyticsManager'] && (window[b(0x1b3)][b(0x1a4)] = ![], window['analyticsManager'][b(0x1fd)]()), this['updateConnectionsDisplay'](), this[b(0x171)](this[b(0x1dc)](a) + b(0x199));
        } catch (u) {
            this[b(0x171)](b(0x177) + u['message'], !![]);
        }
    }
    [c(0x1dc)](a) {
        const b = c, p = { 'youtube': b(0x1d1) };
        return p[a] || a;
    }
    [c(0x197)]() {
        const a = c;
        let b = localStorage[a(0x1d8)](a(0x1cd));
        return !b && (b = a(0x204) + Math[a(0x19e)]()[a(0x1e7)](0x24)['substr'](0x2, 0x9), localStorage[a(0x183)]('youtube_user_id', b)), b;
    }
    [c(0x171)](a, b = ![]) {
        const p = c, q = document[p(0x19f)]('div');
        q['style'][p(0x18a)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + (b ? p(0x182) : p(0x1af)) + p(0x16d) + (b ? p(0x1c7) : p(0x172)) + p(0x1c2) + (b ? p(0x200) : '#c3e6cb') + p(0x1a8), q['textContent'] = a, document['body'][p(0x1f4)](q), setTimeout(() => {
            const r = p;
            q[r(0x1f8)]['animation'] = 'slideOut\x200.3s\x20ease', setTimeout(() => q[r(0x1b6)](), 0x12c);
        }, 0xbb8);
    }
}
document[c(0x1d4)](c(0x1bd), () => {
    const a = c;
    window[a(0x1da)] = new n();
});
const o = document[c(0x19f)](c(0x1f8));
o['textContent'] = c(0x176), document[c(0x1ab)]['appendChild'](o);