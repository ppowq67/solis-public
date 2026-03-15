const c = d;
function d(a, b) {
    a = a - 0x117;
    const i = h();
    let j = i[a];
    if (d['YSsmRc'] === undefined) {
        var k = function (o) {
            const p = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let q = '', r = '';
            for (let s = 0x0, t, u, v = 0x0; u = o['charAt'](v++); ~u && (t = s % 0x4 ? t * 0x40 + u : u, s++ % 0x4) ? q += String['fromCharCode'](0xff & t >> (-0x2 * s & 0x6)) : 0x0) {
                u = p['indexOf'](u);
            }
            for (let w = 0x0, x = q['length']; w < x; w++) {
                r += '%' + ('00' + q['charCodeAt'](w)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(r);
        };
        d['owMHBG'] = k, d['gdbVkz'] = {}, d['YSsmRc'] = !![];
    }
    const l = i[0x0], m = a + l, n = d['gdbVkz'][m];
    return !n ? (j = d['owMHBG'](j), d['gdbVkz'][m] = j) : j = n, j;
}
(function (i, j) {
    const k = (function () {
            let o = !![];
            return function (p, q) {
                const r = o ? function () {
                    if (q) {
                        const s = q['apply'](p, arguments);
                        return q = null, s;
                    }
                } : function () {
                };
                return o = ![], r;
            };
        }()), l = k(this, function () {
            let o;
            try {
                const r = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                o = r();
            } catch (s) {
                o = window;
            }
            const p = o['console'] = o['console'] || {}, q = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let t = 0x0; t < q['length']; t++) {
                const u = k['constructor']['prototype']['bind'](k), v = q[t], w = p[v] || u;
                u['__proto__'] = k['bind'](k), u['toString'] = w['toString']['bind'](w), p[v] = u;
            }
        });
    l();
    const m = d, n = i();
    while (!![]) {
        try {
            const o = parseInt(m(0x16f)) / 0x1 * (-parseInt(m(0x178)) / 0x2) + -parseInt(m(0x1ac)) / 0x3 * (-parseInt(m(0x192)) / 0x4) + -parseInt(m(0x158)) / 0x5 + parseInt(m(0x1b4)) / 0x6 + parseInt(m(0x144)) / 0x7 * (-parseInt(m(0x156)) / 0x8) + -parseInt(m(0x190)) / 0x9 + -parseInt(m(0x119)) / 0xa * (-parseInt(m(0x17a)) / 0xb);
            if (o === j)
                break;
            else
                n['push'](n['shift']());
        } catch (p) {
            n['push'](n['shift']());
        }
    }
}(h, 0xd099c));
const e = (function () {
        let a = !![];
        return function (b, i) {
            const j = a ? function () {
                const k = d;
                if (i) {
                    const l = i[k(0x166)](b, arguments);
                    return i = null, l;
                }
            } : function () {
            };
            return a = ![], j;
        };
    }()), f = e(this, function () {
        const a = d, b = function () {
                const l = d;
                let m;
                try {
                    m = Function(l(0x137) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (n) {
                    m = window;
                }
                return m;
            }, i = b(), j = i[a(0x143)] = i['console'] || {}, k = [
                a(0x165),
                'warn',
                a(0x168),
                'error',
                a(0x11b),
                a(0x19c),
                a(0x13c)
            ];
        for (let l = 0x0; l < k[a(0x16d)]; l++) {
            const m = e['constructor'][a(0x140)][a(0x185)](e), n = k[l], o = j[n] || m;
            m[a(0x189)] = e[a(0x185)](e), m[a(0x125)] = o[a(0x125)][a(0x185)](o), j[n] = m;
        }
    });
f();
class g {
    constructor() {
        const a = d;
        this[a(0x187)] = document[a(0x1a9)](a(0x187)), this[a(0x18d)] = document[a(0x1a9)](a(0x18d)), this['closeBillingBtn'] = document['getElementById'](a(0x18a)), this[a(0x19a)] = document[a(0x1a9)](a(0x19a)), this[a(0x14b)] = document['getElementById']('cancelSubscriptionBtn'), this[a(0x151)]();
    }
    [c(0x151)]() {
        const a = c;
        console[a(0x165)](a(0x171)), this[a(0x1b8)] ? (this[a(0x1b8)][a(0x17e)](a(0x12d), () => this[a(0x18a)]()), console[a(0x165)]('✅\x20Close\x20button\x20listener\x20attached')) : console[a(0x132)](a(0x120)), this[a(0x18d)] ? (this['billingBackdrop'][a(0x17e)](a(0x12d), () => this['closeBilling']()), console[a(0x165)](a(0x1b0))) : console['warn'](a(0x15d)), this[a(0x19a)] ? (this[a(0x19a)]['addEventListener'](a(0x12d), () => this[a(0x1a2)]()), console[a(0x165)]('✅\x20Upgrade\x20button\x20listener\x20attached')) : console[a(0x132)](a(0x133)), this[a(0x14b)] ? (this[a(0x14b)]['addEventListener'](a(0x12d), () => this[a(0x1ad)]()), console[a(0x165)](a(0x17f))) : console[a(0x132)](a(0x1a7));
        const b = document[a(0x1a9)](a(0x164));
        b ? (b[a(0x17e)](a(0x12d), i => {
            const j = a;
            console[j(0x165)](j(0x1a6)), i['preventDefault'](), i['stopPropagation'](), this['openBilling']();
        }), console[a(0x165)](a(0x173))) : (console[a(0x177)]('❌\x20CRITICAL:\x20dropdownBilling\x20element\x20not\x20found!'), console[a(0x177)]('\x20\x20\x20Check\x20that\x20#dropdownBilling\x20exists\x20in\x20dashboard.html')), console[a(0x165)]('✅\x20init()\x20completed');
    }
    async [c(0x147)]() {
        const a = c;
        console[a(0x165)](a(0x1ba));
        if (!this['billingPanel'] || !this['billingBackdrop']) {
            console[a(0x177)](a(0x129)), alert(a(0x18b));
            return;
        }
        const b = document[a(0x1a9)](a(0x13e));
        b && b[a(0x196)][a(0x199)]('open') && (b[a(0x196)][a(0x188)](a(0x117)), console[a(0x165)]('✅\x20Closed\x20profile\x20dropdown')), this[a(0x187)][a(0x196)][a(0x141)](a(0x117)), this[a(0x18d)]['classList'][a(0x141)](a(0x117)), document[a(0x194)][a(0x12f)][a(0x18e)] = 'hidden', console[a(0x165)](a(0x150)), await this[a(0x1a0)]();
    }
    [c(0x18a)]() {
        const a = c;
        console[a(0x165)]('❌\x20Closing\x20Billing\x20Panel'), this[a(0x187)] && this[a(0x187)][a(0x196)][a(0x188)](a(0x117)), this[a(0x18d)] && this['billingBackdrop']['classList'][a(0x188)]('open'), document[a(0x194)]['style'][a(0x18e)] = '', console[a(0x165)](a(0x126));
    }
    async [c(0x1a0)]() {
        const a = c;
        try {
            console['log'](a(0x176));
            const b = document[a(0x123)]('meta[name=\x22csrf-token\x22]')?.[a(0x1af)](a(0x1a1));
            console['log'](a(0x12b), !!b);
            const i = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            b && (i[a(0x130)] = b), console[a(0x165)](a(0x161), Object[a(0x139)](i));
            const j = await fetch(a(0x16b), {
                'method': a(0x138),
                'credentials': a(0x181),
                'headers': i
            });
            console[a(0x165)](a(0x135), j['status'], j[a(0x142)]);
            if (!j['ok']) {
                const l = await j[a(0x13a)]();
                console['error']('❌\x20API\x20Error:', j[a(0x1a3)], l);
                if (j['status'] === 0x191) {
                    console[a(0x177)](a(0x157)), alert(a(0x127));
                    return;
                } else
                    j[a(0x1a3)] === 0x193 && console[a(0x177)]('⚠️\x20Forbidden\x20-\x20Access\x20denied');
                this['showDefaultBillingData']();
                return;
            }
            const k = await j['json']();
            console[a(0x165)](a(0x16a), k);
            if (!k || typeof k !== a(0x1a5)) {
                console[a(0x177)](a(0x124), k), this[a(0x19f)]();
                return;
            }
            if (!k[a(0x182)] || !k[a(0x1a3)]) {
                console['error']('❌\x20Missing\x20critical\x20billing\x20fields:', k), this[a(0x19f)]();
                return;
            }
            this['populateBillingData'](k);
        } catch (m) {
            console[a(0x177)](a(0x11f), m[a(0x15f)]), console[a(0x177)](a(0x18c), m['stack']), this[a(0x19f)]();
        }
    }
    ['populateBillingData'](a) {
        const b = c;
        console['log'](b(0x155));
        const i = q => {
                const r = b;
                if (typeof q !== r(0x12e) && q !== null)
                    return '';
                if (!q)
                    return '';
                const s = document[r(0x180)](r(0x121));
                return s['textContent'] = q, s[r(0x145)];
            }, j = document['getElementById']('billingCurrentPlan');
        if (j && a[b(0x182)]) {
            const q = i(a[b(0x182)]);
            j[b(0x1b7)] = q, console[b(0x165)](b(0x14d), q);
        }
        const k = document[b(0x1a9)](b(0x134));
        if (k) {
            if (a[b(0x11a)])
                try {
                    const r = new Date(a['nextBillingDate']);
                    isNaN(r[b(0x14f)]()) ? (console[b(0x132)](b(0x195), a[b(0x11a)]), k[b(0x1b7)] = b(0x1a4)) : (k[b(0x1b7)] = r[b(0x154)](b(0x14a), {
                        'year': 'numeric',
                        'month': b(0x146),
                        'day': b(0x197)
                    }), console['log'](b(0x136), k[b(0x1b7)]));
                } catch (s) {
                    console[b(0x177)](b(0x17d), s), k['textContent'] = 'No\x20active\x20subscription';
                }
            else
                k['textContent'] = b(0x118);
        }
        const l = document[b(0x1a9)](b(0x15a));
        if (l && a[b(0x1a3)]) {
            const t = [
                    'active',
                    'inactive',
                    b(0x11e)
                ], u = i(a[b(0x1a3)])[b(0x14e)]();
            !t[b(0x15b)](u) && console[b(0x132)](b(0x12c), a[b(0x1a3)]), l[b(0x1b7)] = u[b(0x160)](0x0)[b(0x1b2)]() + u[b(0x12a)](0x1), l[b(0x196)][b(0x188)](b(0x14c), b(0x16e), b(0x11e)), l['classList'][b(0x141)](u), console[b(0x165)](b(0x131), u);
        }
        const m = document[b(0x1a9)](b(0x16c));
        if (m && a[b(0x17c)])
            try {
                const v = parseFloat(a[b(0x17c)]);
                !isNaN(v) && (m['textContent'] = '$' + v[b(0x1b5)](0x2) + b(0x149), console[b(0x165)](b(0x159), m[b(0x1b7)]));
            } catch (w) {
                console['warn'](b(0x1b6), w);
            }
        const n = document[b(0x1a9)]('paymentMethod');
        if (n && a[b(0x193)]) {
            const x = i(a[b(0x193)]);
            n[b(0x1b7)] = x, console[b(0x165)](b(0x1ae), x);
        }
        const o = !a['currentPlan'] || a[b(0x13b)] === 'free', p = a[b(0x1a3)] === b(0x14c);
        this[b(0x19a)] && (this['upgradePlanBtn'][b(0x12f)][b(0x13f)] = o ? b(0x198) : b(0x1a8), console[b(0x165)](b(0x1b3), o)), this[b(0x14b)] && (this['cancelSubscriptionBtn'][b(0x12f)][b(0x13f)] = p && !o ? b(0x198) : b(0x1a8), console[b(0x165)](b(0x148), p && !o)), console[b(0x165)](b(0x184));
    }
    ['showDefaultBillingData']() {
        const a = c, b = document[a(0x1a9)](a(0x191)), i = document[a(0x1a9)]('billingNextDate'), j = document[a(0x1a9)](a(0x15a));
        if (b)
            b[a(0x1b7)] = 'Free';
        if (i)
            i[a(0x1b7)] = a(0x118);
        j && (j[a(0x1b7)] = a(0x18f), j[a(0x196)][a(0x141)](a(0x16e)));
        if (this[a(0x19a)])
            this[a(0x19a)][a(0x12f)][a(0x13f)] = a(0x198);
        if (this['cancelSubscriptionBtn'])
            this[a(0x14b)]['style'][a(0x13f)] = a(0x1a8);
    }
    ['upgradePlan']() {
        const a = c;
        console[a(0x165)](a(0x153)), window[a(0x169)]['href'] = a(0x17b);
    }
    [c(0x1ad)]() {
        const a = c, b = confirm('⚠️\x20Are\x20you\x20sure\x20you\x20want\x20to\x20cancel\x20your\x20subscription?\x0a\x0a' + a(0x11c));
        b && this[a(0x15e)]();
    }
    async [c(0x15e)]() {
        const a = c;
        try {
            console[a(0x165)](a(0x19d));
            const b = document[a(0x123)](a(0x179))?.[a(0x1af)](a(0x1a1)), i = {
                    'Content-Type': 'application/json',
                    'Accept': a(0x1ab)
                };
            b && (i[a(0x130)] = b), console['log'](a(0x1b9));
            const j = await fetch('/api/billing/cancel', {
                'method': 'POST',
                'credentials': 'include',
                'headers': i,
                'body': JSON['stringify']({})
            });
            console['log'](a(0x135), j[a(0x1a3)]);
            if (!j['ok']) {
                const l = await j[a(0x13a)]();
                console[a(0x177)](a(0x162), j[a(0x1a3)], l);
                if (j[a(0x1a3)] === 0x191)
                    alert(a(0x122));
                else
                    j[a(0x1a3)] === 0x190 ? alert(a(0x175)) : alert(a(0x19b));
                return;
            }
            const k = await j[a(0x15c)]();
            console[a(0x165)](a(0x1aa), k);
            if (!k[a(0x128)]) {
                console[a(0x177)](a(0x152), k), alert(a(0x163) + (k[a(0x15f)] || 'Unknown\x20error'));
                return;
            }
            console[a(0x165)]('✅\x20Subscription\x20cancelled\x20successfully'), alert(a(0x174)), await this[a(0x1a0)]();
        } catch (m) {
            console['error']('❌\x20Error\x20cancelling\x20subscription:', m[a(0x15f)]), console[a(0x177)](a(0x18c), m['stack']), alert(a(0x167));
        }
    }
}
function h() {
    const a = [
        '8j+tPcbtzw5KAw5NihjLCxvLC3qGD2L0AcbOzwfKzxjZoG',
        '4P2mienHBMnLBcbMywLSzwq6',
        '4P2mienHBMnLBgXHDgLVBIbMywLSzwq6ia',
        'zhjVCgrVD25cAwXSAw5N',
        'Bg9N',
        'yxbWBhK',
        '4P2mievYCM9YignHBMnLBgXPBMCGC3vIC2nYAxb0Aw9UlIbqBgvHC2uGDhj5igfNywLUlG',
        'Aw5MBW',
        'Bg9JyxrPB24',
        '4PYfiejPBgXPBMCGzgf0ysbYzwnLAxzLzdO',
        'l2fWAs91C2vYl2jPBgXPBMC',
        'yMLSBgLUz1bYAwnL',
        'BgvUz3rO',
        'Aw5Hy3rPDMu',
        'mvfWqur4zG',
        '4P2mifDbuK5jtKC6igrYB3bKB3DUqMLSBgLUzYbLBgvTzw50ig5VDcbMB3vUzce',
        '4PQz77IpiejPBgXPBMCGugfUzwWGAw5PDcGPihj1BM5PBMCUlI4',
        're9nq29UDgvUDeXVywrLza',
        '4PYfiejPBgXPBMCGzhjVCgrVD24GBgLZDgvUzxiGyxr0ywnOzwq',
        '4PYfifLVDxiGC3vIC2nYAxb0Aw9UigHHCYbIzwvUignHBMnLBgXLzc4Gww91ihDPBgWGBg9ZzsbHy2nLC3mGDg8GChjLBwL1BsbMzwf0DxjLCYb3AgvUihLVDxiGy3vYCMvUDcbIAwXSAw5NihbLCMLVzcbLBMrZlG',
        '4PQG77Ipie5VigfJDgL2zsbZDwjZy3jPChrPB24GDg8Gy2fUy2vSlG',
        '8j+uHcbgzxrJAgLUzYbIAwXSAw5NigrHDgeGzNjVBsaVyxbPl3vZzxiVyMLSBgLUzY4UlG',
        'zxjYB3i',
        'nZG0mZrXAwrUwe8',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'mJGWotqZm0T4t0fcDW',
        'l3bYzw1PDw0UAhrTBa',
        'ChjPy2u',
        '4P2mierHDguGzM9YBwf0DgLUzYbLCNjVCJO',
        'ywrKrxzLBNrmAxn0zw5LCG',
        '4PYfienHBMnLBcbIDxr0B24GBgLZDgvUzxiGyxr0ywnOzwq',
        'y3jLyxrLrwXLBwvUDa',
        'Aw5JBhvKzq',
        'CgXHBK5HBwu',
        'C3rHy2S',
        '4PYfiefSBcbKyxrHihbVChvSyxrLzcbZDwnJzxnZzNvSBhK',
        'yMLUza',
        '8j+uJsbcAwXSAw5NigvSzw1LBNrZignOzwnRoG',
        'yMLSBgLUz1bHBMvS',
        'CMvTB3zL',
        'x19WCM90B19F',
        'y2XVC2vcAwXSAw5N',
        '4P2mievYCM9YoIbcAwXSAw5NihbHBMvSig5VDcbPBML0AwfSAxPLzc4GugXLyxnLihjLzNjLC2GGDgHLihbHz2uU',
        'u3rHy2S6',
        'yMLSBgLUz0jHy2TKCM9W',
        'B3zLCMzSB3C',
        'sw5Hy3rPDMu',
        'mtuWmZGZmZrnCfnUu3a',
        'yMLSBgLUz0n1CNjLBNrqBgfU',
        'mZeXoda3mNf6z1HVCG',
        'Cgf5BwvUDe1LDgHVza',
        'yM9KEq',
        '4PQG77IpieLUDMfSAwqGzgf0zsbMB3jTyxq6',
        'y2XHC3nmAxn0',
        'BNvTzxjPyW',
        'zMXLEa',
        'y29UDgfPBNm',
        'DxbNCMfKzvbSyw5cDg4',
        '4P2miezHAwXLzcb0BYbJyw5JzwWGC3vIC2nYAxb0Aw9UlIbqBgvHC2uGDhj5igfNywLUlG',
        'DgfIBgu',
        '4PQG77Ipief0DgvTChrPBMCGDg8Gy2fUy2vSihn1yNnJCMLWDgLVBI4UlG',
        '4P2mienssvrjq0fmoIbcAwXSAw5NihbHBMvSieHutuWGzwXLBwvUDhmGBM90igzVDw5Kiq',
        'C2HVD0rLzMf1BhrcAwXSAw5Nrgf0yq',
        'zMv0y2HcAwXSAw5Nrgf0yq',
        'y29UDgvUDa',
        'DxbNCMfKzvbSyw4',
        'C3rHDhvZ',
        'rgf0zsb1BMf2ywLSywjSzq',
        'B2jQzwn0',
        '8j+oRYbcAwXSAw5NigrYB3bKB3DUignSAwnRzwq',
        '4PQG77IpienHBMnLBcbIDxr0B24GBM90igzVDw5K',
        'BM9Uzq',
        'z2v0rwXLBwvUDej5swq',
        '4PYfifjLC3bVBNnLihjLy2vPDMvKoG',
        'yxbWBgLJyxrPB24VANnVBG',
        'nMT4uhDbBG',
        'C2HVD0nHBMnLBenVBMzPCM1HDgLVBG',
        '4PYfifbHEw1LBNqGBwv0Ag9KihnLDdO',
        'z2v0qxr0CMLIDxrL',
        '4PYfiejHy2TKCM9WigXPC3rLBMvYigf0DgfJAgvK',
        '4PYfiejPBgXPBMCGugfUzwWGAw5PDgLHBgL6zwqGC3vJy2vZC2z1BgX5',
        'Dg9vChbLCKnHC2u',
        '4PYfifvWz3jHzguGyNv0Dg9UihzPC2LIAwXPDhK6',
        'odi1otG1ogHgq3zdAG',
        'Dg9gAxHLza',
        '4PQG77IpifbYAwnLihbHCNnPBMCGzxjYB3i6',
        'Dgv4DenVBNrLBNq',
        'y2XVC2vcAwXSAw5NqNrU',
        '8j+tPcbtzw5KAw5NignHBMnLBgXHDgLVBIbYzxf1zxn0lI4U',
        '8j+tIIbpCgvUAw5NiejPBgXPBMCGugfUzwW',
        'B3bLBG',
        'tM8Gywn0AxzLihn1yNnJCMLWDgLVBG',
        'mZb1CuPfz0e',
        'BMv4DejPBgXPBMDeyxrL',
        'zxHJzxb0Aw9U',
        'ww91ihDPBgWGBg9ZzsbHy2nLC3mGDg8GChjLBwL1BsbMzwf0DxjLCYb3AgvUihLVDxiGy3vYCMvUDcbIAwXSAw5NihbLCMLVzcbLBMrZlG',
        'icaGlsbcAwXSAw5Nig1LBNuGBgLUAYbTyxKGBM90igjLignSAwnRywjSzq',
        'y2fUy2vSBgvK',
        '4P2mie5LDhDVCMSVrMv0y2GGrxjYB3i6',
        '4PQG77IpienSB3nLigj1DhrVBIbUB3qGzM91BMq',
        'zgL2',
        '4PQG77IpifnLC3nPB24GzxHWAxjLzc4GugXLyxnLihjLzNjLC2GGyw5KihrYEsbHz2fPBI4',
        'CxvLCNLtzwXLy3rVCG',
        '4P2mieLUDMfSAwqGCMvZCg9UC2uGC3rYDwn0DxjLoG',
        'Dg9tDhjPBMC',
        '4PYfifbHBMvSignSB3nLza',
        '4PQG77IpifnLC3nPB24GzxHWAxjLzc4GugXLyxnLihjLzNjLC2GGDgHLihbHz2uU',
        'C3vJy2vZCW',
        '4P2miejPBgXPBMCGCgfUzwWGzwXLBwvUDhmGBM90igzVDw5KigLUierptq',
        'C2XPy2u',
        '8j+uKcbdu1jgifrVA2vUihbYzxnLBNq6',
        '4PQG77IpifvUA25VD24GC3rHDhvZihzHBhvLoG',
        'y2XPy2S',
        'C3rYAw5N',
        'C3r5Bgu',
        'wc1du1jglvrVA2vU',
        '4PYfifn0yxr1CYbIywrNzsbZzxq6',
        'D2fYBG',
        '4PQG77IpifvWz3jHzguGyNv0Dg9Uig5VDcbMB3vUza',
        'yMLSBgLUz05LEhreyxrL',
        '8j+tPsbszxnWB25ZzsbZDgf0Dxm6',
        '4PYfiejPBgXPBMCGzgf0zsbMB3jTyxr0zwq6',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'r0vu',
        'A2v5CW',
        'Dgv4Da',
        'y3vYCMvUDfbSyw4',
        'DhjHy2u',
        'icaGlsbdAgvJAYbICM93C2vYierLDLrVB2XZicHgmtiPid4GrwXLBwvUDhmGDgfI',
        'ChjVzMLSzurYB3bKB3DU',
        'zgLZCgXHEq',
        'ChjVDg90ExbL',
        'ywrK',
        'C3rHDhvZvgv4Da',
        'y29UC29Szq',
        'mtu0n1zIqLrLBq',
        'Aw5Uzxjive1m',
        'Bg9UzW',
        'B3bLBKjPBgXPBMC',
        '4PYfienHBMnLBcbIDxr0B24GDMLZAwjPBgL0EtO',
        'l21VBNrO',
        'zw4Tvvm',
        'y2fUy2vSu3vIC2nYAxb0Aw9UqNrU',
        'ywn0AxzL',
        '4PYfifbSyw4GBMfTzsbZzxq6',
        'Dg9mB3DLCKnHC2u',
        'z2v0vgLTzq',
        '4PYfifbHBMvSig9Wzw5Lza',
        'Aw5PDa',
        '4P2mifnLCNzLCIbPBMrPy2f0zwqGzMfPBhvYztO',
        '4QYg77IpifjLzgLYzwn0Aw5NihrVihvWz3jHzguGCgXHBG',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        '8j+tIIbqB3b1Bgf0Aw5NigjPBgXPBMCGzgf0ysb3AxrOihzHBgLKyxrPB24UlI4',
        'mti5mdrKue1LCKS',
        '4PQG77IpifvUyxv0Ag9YAxPLzcaTifrVA2vUig1HEsbIzsbPBNzHBgLK',
        'mZKWndiYmgXTvLLfsW',
        '4PYfifbYAwnLihnLDdO',
        'yMLSBgLUz1n0yxr1CW',
        'Aw5JBhvKzxm',
        'ANnVBG',
        '4PQG77IpiejHy2TKCM9Wig5VDcbMB3vUza',
        'y2fUy2vSu3vIC2nYAxb0Aw9U',
        'BwvZC2fNzq',
        'y2HHCKf0'
    ];
    return h = function () {
        return a;
    }, h();
}
document[c(0x17e)](c(0x172), () => {
    const a = c;
    console[a(0x165)]('🔄\x20Initializing\x20Billing\x20Panel...');
    const b = document[a(0x1a9)](a(0x187)), i = document[a(0x1a9)](a(0x18d)), j = document[a(0x1a9)]('dropdownBilling');
    console[a(0x165)](a(0x186), {
        'billingPanel': !!b,
        'billingBackdrop': !!i,
        'dropdownBilling': !!j
    });
    if (!b || !i) {
        console[a(0x177)](a(0x19e)), console[a(0x177)]('\x20\x20\x20-\x20Make\x20sure\x20billing\x20panel\x20HTML\x20is\x20in\x20dashboard.html'), console['error'](a(0x13d));
        return;
    }
    !j && (console['error'](a(0x170)), console[a(0x177)](a(0x11d)));
    try {
        window[a(0x187)] = new g(), console['log'](a(0x1b1));
    } catch (k) {
        console[a(0x177)]('❌\x20Error\x20initializing\x20BillingPanel:', k), console[a(0x177)](a(0x18c), k[a(0x183)]);
    }
});