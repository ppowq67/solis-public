const c = d;
function d(a, b) {
    a = a - 0x108;
    const j = i();
    let k = j[a];
    if (d['FLuVYZ'] === undefined) {
        var l = function (p) {
            const q = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let r = '', s = '';
            for (let t = 0x0, u, v, w = 0x0; v = p['charAt'](w++); ~v && (u = t % 0x4 ? u * 0x40 + v : v, t++ % 0x4) ? r += String['fromCharCode'](0xff & u >> (-0x2 * t & 0x6)) : 0x0) {
                v = q['indexOf'](v);
            }
            for (let x = 0x0, y = r['length']; x < y; x++) {
                s += '%' + ('00' + r['charCodeAt'](x)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(s);
        };
        d['SlIczB'] = l, d['EAYUVF'] = {}, d['FLuVYZ'] = !![];
    }
    const m = j[0x0], n = a + m, o = d['EAYUVF'][n];
    return !o ? (k = d['SlIczB'](k), d['EAYUVF'][n] = k) : k = o, k;
}
(function (j, k) {
    const l = (function () {
            let p = !![];
            return function (q, r) {
                const s = p ? function () {
                    if (r) {
                        const t = r['apply'](q, arguments);
                        return r = null, t;
                    }
                } : function () {
                };
                return p = ![], s;
            };
        }()), m = l(this, function () {
            let p;
            try {
                const s = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                p = s();
            } catch (t) {
                p = window;
            }
            const q = p['console'] = p['console'] || {}, r = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let u = 0x0; u < r['length']; u++) {
                const v = l['constructor']['prototype']['bind'](l), w = r[u], x = q[w] || v;
                v['__proto__'] = l['bind'](l), v['toString'] = x['toString']['bind'](x), q[w] = v;
            }
        });
    m();
    const n = d, o = j();
    while (!![]) {
        try {
            const p = -parseInt(n(0x134)) / 0x1 * (parseInt(n(0x11a)) / 0x2) + -parseInt(n(0x127)) / 0x3 + -parseInt(n(0x13d)) / 0x4 * (-parseInt(n(0x132)) / 0x5) + -parseInt(n(0x121)) / 0x6 + -parseInt(n(0x12b)) / 0x7 + parseInt(n(0x13b)) / 0x8 * (-parseInt(n(0x11d)) / 0x9) + parseInt(n(0x108)) / 0xa;
            if (p === k)
                break;
            else
                o['push'](o['shift']());
        } catch (q) {
            o['push'](o['shift']());
        }
    }
}(i, 0x5d9fb));
const e = (function () {
        let a = !![];
        return function (b, j) {
            const k = a ? function () {
                if (j) {
                    const l = j['apply'](b, arguments);
                    return j = null, l;
                }
            } : function () {
            };
            return a = ![], k;
        };
    }()), f = e(this, function () {
        const a = d;
        let b;
        try {
            const l = Function(a(0x135) + a(0x131) + ');');
            b = l();
        } catch (m) {
            b = window;
        }
        const j = b[a(0x142)] = b['console'] || {}, k = [
                a(0x123),
                a(0x12e),
                'info',
                a(0x109),
                a(0x13c),
                a(0x12d),
                a(0x111)
            ];
        for (let n = 0x0; n < k['length']; n++) {
            const o = e['constructor'][a(0x147)][a(0x125)](e), p = k[n], q = j[p] || o;
            o[a(0x113)] = e[a(0x125)](e), o[a(0x120)] = q[a(0x120)][a(0x125)](q), j[p] = o;
        }
    });
f();
class g {
    constructor() {
        const a = d;
        this[a(0x11e)] = a(0x112), this[a(0x12a)] = new Map();
    }
    ['_escapeHtml'](a) {
        const b = d;
        if (typeof a !== 'string')
            return '';
        const j = document[b(0x141)](b(0x140));
        return j[b(0x12f)] = a, j[b(0x129)];
    }
    [c(0x126)]() {
        const a = c;
        let b = document[a(0x128)](this[a(0x11e)]);
        return !b && (b = document[a(0x141)]('div'), b['id'] = this[a(0x11e)], b['style'][a(0x137)] = a(0x139), document[a(0x11b)][a(0x10f)](b)), b;
    }
    [c(0x13f)](a, b = 'Processing') {
        const j = c, k = this[j(0x126)](), l = document[j(0x141)](j(0x140));
        l[j(0x11f)]('data-task-id', a), l['style']['cssText'] = j(0x133);
        const m = this[j(0x136)](b);
        l[j(0x129)] = j(0x130) + m + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22\x20style=\x22color:\x20#e0e0e0;\x20font-size:\x2011px;\x22>0%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x20100%;\x20height:\x206px;\x20background:\x20rgba(100,\x20150,\x20255,\x200.1);\x20border-radius:\x203px;\x20overflow:\x20hidden;\x20margin-bottom:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22\x20style=\x22width:\x200%;\x20height:\x20100%;\x20background:\x20linear-gradient(90deg,\x20#6496ff\x200%,\x20#4980ff\x20100%);\x20transition:\x20width\x200.3s\x20ease;\x20border-radius:\x203px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-step\x22\x20style=\x22color:\x20rgba(255,\x20255,\x20255,\x200.6);\x20font-size:\x2011px;\x20min-height:\x2014px;\x22>Initializing...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', k['appendChild'](l), this[j(0x12a)][j(0x122)](a, l);
        if (!document[j(0x119)](j(0x143))) {
            const n = document[j(0x141)](j(0x144));
            n['setAttribute'](j(0x148), j(0x10e)), n[j(0x12f)] = j(0x11c), document[j(0x13e)][j(0x10f)](n);
        }
    }
    [c(0x14a)](a, b, j = '') {
        const k = c, l = this[k(0x12a)][k(0x110)](a);
        if (l) {
            const m = l[k(0x119)](k(0x124)), n = l[k(0x119)](k(0x13a)), o = l[k(0x119)](k(0x138));
            m && (m[k(0x144)][k(0x146)] = b + '%'), n && (n['textContent'] = b + '%'), o && j && (o[k(0x12f)] = j);
        }
    }
    [c(0x114)](a) {
        const b = c, j = this['taskElements']['get'](a);
        if (j) {
            const k = j[b(0x119)](b(0x124)), l = j[b(0x119)](b(0x13a)), m = j[b(0x119)](b(0x138));
            k && k['classList'][b(0x10c)](b(0x10d)), l && (l[b(0x12f)] = b(0x118)), m && (m[b(0x12f)] = b(0x116)), setTimeout(() => {
                const n = b;
                this[n(0x10a)](a);
            }, 0xbb8);
        }
    }
    [c(0x145)](a, b = c(0x10b)) {
        const j = c, k = this[j(0x12a)][j(0x110)](a);
        if (k) {
            const l = k['querySelector'](j(0x124)), m = k[j(0x119)](j(0x138));
            l && l[j(0x117)][j(0x10c)](j(0x109)), m && (m[j(0x12f)] = '❌\x20' + b), setTimeout(() => {
                const n = j;
                this[n(0x10a)](a);
            }, 0x1388);
        }
    }
    ['removeTask'](a) {
        const b = c, j = this['taskElements'][b(0x110)](a);
        j && (j[b(0x144)][b(0x149)] = b(0x115), setTimeout(() => {
            const k = b;
            j[k(0x12c)](), this[k(0x12a)]['delete'](a);
        }, 0x12c));
    }
}
const h = new g();
function i() {
    const a = [
        'z2v0',
        'DhjHy2u',
        'ChjVy2vZC2LUzY1WCM9NCMvZCY1JB250ywLUzxi',
        'x19WCM90B19F',
        'BwfYA0nVBxbSzxrL',
        'C2XPzgvjBIaWlJnZigvHC2uGCMv2zxjZzq',
        '4PYfienVBxbSzxrLiq',
        'y2XHC3nmAxn0',
        'mtaWjq',
        'CxvLCNLtzwXLy3rVCG',
        'nKP4q1Hera',
        'yM9KEq',
        'cIaGicaGicaGicaGicaGicbaA2v5zNjHBwvZihnSAwrLsw4GEWOGicaGicaGicaGicaGicaGicaGigzYB20GEWOGicaGicaGicaGicaGicaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGicaGicaGicaGicaGicaGicb0CMfUC2zVCM06ihrYyw5ZBgf0zvGOndaWChGPoWOGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGicaGicb0BYb7cIaGicaGicaGicaGicaGicaGicaGicaGig9WywnPDhK6ide7cIaGicaGicaGicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGWktSkicaGicaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGiebRzxLMCMfTzxmGChvSC2uGEWOGicaGicaGicaGicaGicaGicaGidaLlcaXmdaLihSGB3bHy2L0EtOGmtSGFqOGicaGicaGicaGicaGicaGicaGiduWjsb7ig9WywnPDhK6idaUntSGFqOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaUChjVz3jLC3mTyMfYlMnVBxbSzxrLihSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOotbKzwCSicm0ywrLodaGmcuSicmYmMm1nwuGmtaWjsK7cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGic5WCM9NCMvZCY1IyxiUzxjYB3iGEWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcG5mgrLzYWGi2y4nZe3msaWjsWGi2vMndq0ncaXmdaLktSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaG',
        'mJC5zK9rA05P',
        'ChjVz3jLC3ndB250ywLUzxjjza',
        'C2v0qxr0CMLIDxrL',
        'Dg9tDhjPBMC',
        'mta5otK5ofjgyuHsza',
        'C2v0',
        'Bg9N',
        'lNbYB2DYzxnZlwjHCG',
        'yMLUza',
        'Aw5PDa',
        'nZKYmZe4CLH4DwPZ',
        'z2v0rwXLBwvUDej5swq',
        'Aw5Uzxjive1m',
        'DgfZA0vSzw1LBNrZ',
        'oda2nZvyvhjjBKm',
        'CMvTB3zL',
        'DgfIBgu',
        'D2fYBG',
        'Dgv4DenVBNrLBNq',
        'cIaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSGBwfYz2LUlwjVDhrVBtOGohb4oYi+cIaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0Iy29SB3i6icm2ndK2zMy7igzVBNqTD2vPz2H0oIa2mda7igzVBNqTC2L6ztOGmtnWEdSIpG',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'mtKZodm4nxDZsM1WBa',
        'cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOmJaSidiWlca0mcWGmc45nsKGmcuSihjNyMeOmZaSidmWlca1mcWGmc45nsKGmtaWjsK7cIaGicaGicaGicaGigjHy2TKCM9WlwzPBhrLCJOGyMX1CIGYmhb4ktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGXmdaSide1mcWGmJu1lcaWlJmPoWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaXmNb4oWOGicaGicaGicaGicbWywrKAw5NoIaXnNb4oWOGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIaXmNb4oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidHWEcaZmNb4ihjNyMeOmcWGmcWGmcWGmc40ktSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZBgLKzuLUidaUm3mGzwfZztSkicaGicaGica',
        'mJm1mdG0AMXHyM9s',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'x2vZy2fWzuH0BwW',
        'y3nZvgv4Da',
        'lNn0yxr1CY1ZDgvW',
        'cIaGicaGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwq7cIaGicaGicaGicaGicaGicb0B3a6idiWChG7cIaGicaGicaGicaGicaGicbYAwDODdOGmJbWEdSkicaGicaGicaGicaGicaGig1HEc13Awr0AdOGndaWChG7cIaGicaGicaGicaGicaGicb6lwLUzgv4oIaXmdaWmdSkicaGicaGicaGicaGicaGigzVBNqTzMfTAwX5oIaNug9WCgLUCYCSihnHBNmTC2vYAwy7cIaGicaGicaGicaGia',
        'lNn0yxr1CY10zxH0',
        'mtGYmtiWEfbbue9u',
        'zxHJzxb0Aw9U',
        'nfDfzxbJvq',
        'AgvHza',
        'C2HVD1bYB2DYzxnZ',
        'zgL2',
        'y3jLyxrLrwXLBwvUDa',
        'y29UC29Szq',
        'C3r5BgvBzgf0ys1ZB2XPCY1WCM9NCMvZC10',
        'C3r5Bgu',
        'BwfYA0vYCM9Y',
        'D2LKDgG',
        'ChjVDg90ExbL',
        'zgf0ys1ZB2XPCY1WCM9NCMvZCW',
        'yw5PBwf0Aw9U',
        'DxbKyxrLuhjVz3jLC3m',
        'mtG2ntCZnZbhuhL5Ag8',
        'zxjYB3i',
        'CMvTB3zLvgfZAW',
        'rxjYB3iGB2nJDxjYzwq',
        'ywrK',
        'y29TCgXLDgu',
        'Dhj1zq',
        'yxbWzw5Kq2HPBgq'
    ];
    return i = function () {
        return a;
    }, i();
}