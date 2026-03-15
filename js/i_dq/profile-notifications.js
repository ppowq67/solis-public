const c = z;
(function (C, D) {
    const E = (function () {
            let I = !![];
            return function (J, K) {
                const L = I ? function () {
                    if (K) {
                        const M = K['apply'](J, arguments);
                        return K = null, M;
                    }
                } : function () {
                };
                return I = ![], L;
            };
        }()), F = E(this, function () {
            let I;
            try {
                const L = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                I = L();
            } catch (M) {
                I = window;
            }
            const J = I['console'] = I['console'] || {}, K = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let N = 0x0; N < K['length']; N++) {
                const O = E['constructor']['prototype']['bind'](E), P = K[N], Q = J[P] || O;
                O['__proto__'] = E['bind'](E), O['toString'] = Q['toString']['bind'](Q), J[P] = O;
            }
        });
    F();
    const G = z, H = C();
    while (!![]) {
        try {
            const I = parseInt(G(0x1c2)) / 0x1 * (parseInt(G(0x1e1)) / 0x2) + -parseInt(G(0x1f7)) / 0x3 + -parseInt(G(0x228)) / 0x4 + parseInt(G(0x1ee)) / 0x5 + -parseInt(G(0x1ca)) / 0x6 * (parseInt(G(0x21e)) / 0x7) + parseInt(G(0x24d)) / 0x8 + -parseInt(G(0x222)) / 0x9 * (-parseInt(G(0x23a)) / 0xa);
            if (I === D)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(r, 0xe0f2a), console[c(0x1da)](c(0x23d)));
function d(a) {
    const b = c;
    if (typeof a !== 'string')
        return '';
    const C = {
        '&': b(0x20a),
        '<': '&lt;',
        '>': b(0x1e6),
        '\x22': '&quot;',
        '\x27': b(0x21a),
        '/': b(0x1c1)
    };
    return a['replace'](/[&<>"'\/]/g, D => C[D] || D);
}
function e(a) {
    const b = c;
    if (typeof a !== 'string' || a['length'] === 0x0)
        return ![];
    if (a[b(0x231)] > 0x800)
        return ![];
    try {
        const C = new URL(a);
        if (!/^https?:$/['test'](C['protocol']))
            return ![];
        if (a[b(0x1e2)]()[b(0x237)]('javascript:'))
            return ![];
        if (a[b(0x1e2)]()[b(0x237)](b(0x204)))
            return ![];
        if (a['toLowerCase']()[b(0x237)]('vbscript:'))
            return ![];
        return !![];
    } catch {
        return ![];
    }
}
function f(a, b) {
    const C = c;
    a && typeof b === C(0x216) && (a[C(0x23b)] = b);
}
function g(a, b, C = '') {
    const D = c;
    if (!a)
        return;
    if (!e(b)) {
        console[D(0x221)](D(0x205));
        return;
    }
    const E = document[D(0x1e8)](D(0x1f1));
    E[D(0x1e0)](D(0x1d6), b), E[D(0x1e0)](D(0x1cd), d(C)), E['style']['cssText'] = D(0x253);
    while (a[D(0x245)]) {
        a['removeChild'](a['firstChild']);
    }
    a[D(0x241)](E);
}
function h(a) {
    const b = c;
    if (!a || typeof a !== b(0x1d9))
        return { 'valid': ![] };
    const C = a['id'] || a[b(0x259)] || a['sub'], D = a[b(0x230)] || a[b(0x1f8)] || a[b(0x239)];
    if (C || D)
        return {
            'valid': !![],
            'user': a
        };
    return { 'valid': ![] };
}
let i = {
    'unreadCount': 0x0,
    'notifications': [],
    'bellElement': null,
    'profileElement': null,
    'notificationsDropdown': null,
    'profileDropdown': null,
    'initialized': ![]
};
function j() {
    const a = c;
    if (i[a(0x25a)])
        return;
    console['log']('Initializing\x20notification\x20system...'), i[a(0x1d2)] = document['getElementById'](a(0x1cb)), i[a(0x251)] = document[a(0x1d4)](a(0x1ff)), i[a(0x1d3)] = document[a(0x1d4)]('notificationsDropdown');
    if (!i['bellElement'] || !i['profileElement']) {
        console[a(0x221)](a(0x24a));
        return;
    }
    console[a(0x1da)]('✅\x20Notification\x20elements\x20found'), l(), n(), k(), i[a(0x25a)] = !![], k();
}
function k() {
    const a = c, b = document['getElementById'](a(0x1ff));
    if (!b)
        return;
    let C = null;
    try {
        if (typeof window !== a(0x211) && window[a(0x1c3)])
            C = window['currentUser'];
        else {
            const I = localStorage[a(0x1f3)](a(0x1c3));
            if (I) {
                const J = I[a(0x220)]();
                J[a(0x218)]('{') && J['endsWith']('}') && (C = JSON[a(0x23c)](I));
            }
        }
    } catch (K) {
        console[a(0x1fa)](a(0x20d), K), C = null;
    }
    const D = h(C);
    if (!D || !D[a(0x203)]) {
        console[a(0x221)](a(0x219));
        return;
    }
    const E = D[a(0x1df)], F = (E['auth_provider'] || '')['toString']()[a(0x1e2)](), G = E[a(0x1fc)] || E[a(0x1fb)] || null, H = a(0x213);
    while (b[a(0x245)]) {
        b['removeChild'](b[a(0x245)]);
    }
    if (F[a(0x237)](a(0x20b)))
        console[a(0x1da)](a(0x225)), b[a(0x226)] = H;
    else
        G && typeof G === a(0x216) && (e(G) ? g(b, G, 'User\x20Avatar') : console[a(0x221)]('Invalid\x20avatar\x20URL'));
}
function l() {
    const a = c, b = i[a(0x1d2)], C = i[a(0x1d3)];
    b['addEventListener'](a(0x20f), E => {
        const F = a;
        E[F(0x23f)]();
        const G = C[F(0x1cf)]['contains'](F(0x1dd));
        m(), !G && (C['classList'][F(0x22d)]('open'), x());
    }), document[a(0x200)](a(0x20f), m);
    const D = document[a(0x1d4)]('markAsRead');
    D && D[a(0x200)]('click', E => {
        E['preventDefault'](), x();
    });
}
function m() {
    const a = c, b = i['notificationsDropdown'];
    if (b)
        b[a(0x1cf)][a(0x1d7)](a(0x1dd));
}
function n() {
    const a = c;
    try {
        const b = localStorage[a(0x1f3)]('notificationSystem');
        if (b) {
            const C = JSON['parse'](b);
            i['notifications'] = C[a(0x254)] || [], i[a(0x21d)] = C[a(0x21d)] || 0x0, u();
        }
    } catch (D) {
        console['error'](a(0x246), D);
    }
}
function o() {
    const a = c;
    try {
        localStorage[a(0x20e)]('notificationSystem', JSON['stringify']({
            'notifications': i['notifications'],
            'unreadCount': i[a(0x21d)]
        }));
    } catch (b) {
        console[a(0x1fa)]('Error\x20saving\x20notifications:', b);
    }
}
function p(a) {
    const b = c;
    if (!a || typeof a !== b(0x1d9))
        return console[b(0x1fa)](b(0x207)), null;
    const C = (F, G = 0x1f4) => {
            const H = b;
            if (typeof F !== H(0x216))
                return '';
            return d(F[H(0x236)](0x0, G));
        }, D = {
            'id': Date['now'](),
            'title': C(a[b(0x22b)] || b(0x1c5), 0x64),
            'message': C(a[b(0x240)] || b(0x1c4), 0x1f4),
            'icon': a[b(0x248)] || 'info',
            'timestamp': a[b(0x1d8)] || new Date(),
            'read': a[b(0x215)] === !![],
            ...a
        }, E = [
            b(0x255),
            b(0x243),
            b(0x242),
            b(0x1fa),
            b(0x235)
        ];
    return !E[b(0x237)](D[b(0x248)]) && (D[b(0x248)] = 'default'), i[b(0x254)][b(0x214)](D), i['unreadCount']++, i[b(0x254)][b(0x231)] > 0x32 && (i[b(0x254)] = i['notifications'][b(0x24f)](0x0, 0x32)), o(), u(), D;
}
function q(a = {}) {
    const b = c;
    console[b(0x1da)](b(0x1ea), a);
    const {
        videoTitle: videoTitle = b(0x233),
        videoUrl: videoUrl = '#',
        thumbnailUrl: thumbnailUrl = null,
        duration: duration = 0x0
    } = a;
    s(videoTitle, videoUrl), p({
        'title': b(0x233),
        'message': b(0x1fe) + videoTitle + b(0x24e),
        'icon': b(0x255),
        'action': {
            'label': b(0x1d5),
            'url': videoUrl
        }
    });
}
function r() {
    const a = [
        'mteXndi1nZzbEM13sui',
        'iIbOyxmGyMvLBIbZDwnJzxnZzNvSBhKGy3jLyxrLzcbHBMqGAxmGCMvHzhKGDg8Gzg93BMXVywqU',
        'C2XPy2u',
        'zMXVB3i',
        'ChjVzMLSzuvSzw1LBNq',
        'Dg9tDhjPBMC',
        'D2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGB2jQzwn0lwzPDdOGy292zxi7igjVCMrLCI1YywrPDxm6iduWjtS',
        'BM90AwzPy2f0Aw9UCW',
        'y2HLy2S',
        'pgnPCMnSzsbJEd0ImtiIign5psiXmIiGCJ0ImtaIpJWVy2LYy2XLpJXSAw5LihGXpsiXnsiGEte9iJKIihGYpsi5iIb5mJ0ImtuIpJWVBgLUzt48BgLUzsb4mt0IosiGEte9iJKIihGYpsiXnsiGEti9iJe1iJ48l2XPBMu+',
        'zcbHz28',
        'DhjHy2u',
        'DxnLCL9Pza',
        'Aw5PDgLHBgL6zwq',
        'C3rYB2TL',
        'C3r5Bgu',
        'jIn4mKy7',
        'mNbswwTqvq',
        'y3vYCMvUDfvZzxi',
        'tMv3ig5VDgLMAwnHDgLVBG',
        'tM90AwzPy2f0Aw9U',
        'C3zN',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'zMLSBa',
        'CM91BMq',
        'mtjkug9lvMG',
        'yMvSBej0BG',
        'tM8GBM90AwzPy2f0Aw9UCW',
        'ywX0',
        'y2XHC3noyw1L',
        'y2XHC3nmAxn0',
        'y29UC29Szq',
        'rNjLzsbqBgfU',
        'yMvSBevSzw1LBNq',
        'BM90AwzPy2f0Aw9UC0rYB3bKB3DU',
        'z2v0rwXLBwvUDej5swq',
        'vMLLDYbwAwrLBW',
        'C3jJ',
        'CMvTB3zL',
        'DgLTzxn0yw1W',
        'B2jQzwn0',
        'Bg9N',
        'y29UC3rYDwn0B3i',
        're9nq29UDgvUDeXVywrLza',
        'B3bLBG',
        'BM90AwyTDgLTzq',
        'DxnLCG',
        'C2v0qxr0CMLIDxrL',
        'ota4mtqYwfnkCg9z',
        'Dg9mB3DLCKnHC2u',
        'BM9Uzq',
        'ChjVzMLSzu5HBwveAxnWBgf5',
        'x19WCM90B19F',
        'jMD0oW',
        'CgXHBG',
        'y3jLyxrLrwXLBwvUDa',
        'mcaWidi0idi0',
        '8j+oRcbtAg93Aw5NihzPzgvVigDLBMvYyxrLzcbUB3rPzMLJyxrPB24',
        'Bg9HzgLUzW',
        'CxvLCNLtzwXLy3rVCG',
        'BM90AwyTAwnVBG',
        'mta4nda1nu9KyNfRAa',
        'zw5KC1DPDgG',
        'BM90AwyTBwvZC2fNzq',
        'Aw1N',
        'phbHDgGGzd0IttiYideXlJa4vJeYyteWideWidaGmsaXltuUotmTos4Xnci+pc9WyxrOpJXWB2X5BgLUzsbWB2LUDhm9iJiYidqGmtiGmtqUmdeGosaXms4Wmsi+pc9WB2X5BgLUzt4',
        'z2v0sxrLBq',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'ww91CIb2AwrLBYbOyxmGyMvLBIbZDwnJzxnZzNvSBhKGz2vUzxjHDgvKigfUzcbPCYbYzwfKEsb0BYbKB3DUBg9HzcbVCIbZAgfYzs4',
        'BM90AwyTy29UDgvUDa',
        'mtyZnti3m0XXvNnnBW',
        'BMfTzq',
        'zM9YrwfJAa',
        'zxjYB3i',
        'yxzHDgfY',
        'CgLJDhvYzq',
        'DMLKzw9hzw5LCMf0zwrpDMvYBgf5',
        'ww91CIb2AwrLBYaI',
        'ChjVzMLSzuf2yxrHCKj0BG',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'BM90AwzPy2f0Aw9Uu3LZDgvT',
        'BsbHz28',
        'DMfSAwq',
        'zgf0ytO',
        'sw52ywXPzcbPBwfNzsbvuKW',
        'y3nZvgv4Da',
        'sw52ywXPzcbUB3rPzMLJyxrPB24GB2jQzwn0',
        'D2LKDgG',
        'ChjVzMLSzuf2yxrHCKrPC3bSyxK',
        'jMfTCdS',
        'z29Vz2XL',
        'vMLKzw8GuMvHzhKH',
        'rxjYB3iGC3LUy2LUzYbWCM9MAwXLoG',
        'C2v0sxrLBq',
        'y2XPy2S',
        'Dg9vChbLCKnHC2u',
        'Dw5KzwzPBMvK',
        'w2rHDgeTywn0Aw9Upsj2Awv3iL0',
        'phn2zYb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iMn1CNjLBNrdB2XVCIiGEg1SBNm9iMH0Dha6lY93D3CUDZmUB3jNlZiWmdaVC3zNiIbZDhLSzt0ID2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSIpJXYzwn0ihDPzhrOpsiYnciGAgvPz2H0psiYnciGzMLSBd0IBM9UzsiVpJXWyxrOigq9iK0Ymca0sdrdmI45idqGmI4Wmsa0lJKGmI4Wmsa2tdiGmtHJmcaXlJeUosaYidiGmMGXnMmXlJeGmcaYls45idiTmLy2yZaTms4Xls45ltiTmI0YEM0WidrSltGGns04ltvwnMW4iduGoc01DJj6iIbMAwXSpsiJrue0mZm1iI8+pc9ZDMC+',
        'Dw5ZAgLMDa',
        'CMvHza',
        'C3rYAw5N',
        'DMLLD0jVEa',
        'C3rHCNrZv2L0Aa',
        'sw52ywXPzcb1C2vYig9IAMvJDa',
        'jIn4mJC7',
        'CMvHzhLtDgf0zq',
        'CgfKzgLUzZOGmJbWEdSGDgv4Dc1HBgLNBJOGy2vUDgvYoYbJB2XVCJOGiZCXoda5nJS',
        'Dw5YzwfKq291BNq',
        'mtu1mZa0og9NAvPRAq',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        'DhjPBq',
        'D2fYBG',
        'nZq3nZGWm0v0Dezuwq',
        'ChjVDg90ExbL',
        'vxnLCG',
        'rgLZCgXHEwLUzYbhBwfPBcbPy29UigzVCIbhB29NBguGt0f1DgGGDxnLCG',
        'Aw5Uzxjive1m',
        'C3rYB2TLlwXPBMvQB2LU',
        'ntC1mZC0ogPZAg9RAq',
        'B25JBgLJAW',
        'pgnPCMnSzsbJEd0ImtiIign5psiXmIiGCJ0ImtaIpJWVy2LYy2XLpJXWyxrOigq9iK0XmIaXnNyTne0XmIa4Ac4Wmsi+pc9WyxrOpG',
        'DgL0Bgu',
        'DMLKzw9hzw5LCMf0zwrcywnRzhjVCa',
        'ywrK',
        'yMLUza',
        'zgL2',
        'zw1HAwW',
        'BgvUz3rO',
        'AcbHz28',
        'vMLKzw8Gr2vUzxjHDgvK',
        'pgnPCMnSzsbJEd0ImtiIign5psiXmIiGCJ0ImtaIpJWVy2LYy2XLpJXSAw5LihGXpsiXmIiGEte9iJe2iIb4mJ0ImtiIihKYpsiXmIi+pc9SAw5LpJXSAw5LihGXpsiXmIiGEte9iJGIihGYpsiXmI4WmsiGEti9iJGIpJWVBgLUzt4',
        'zgvMyxvSDa',
        'C3vIC3rYAw5N',
        'Aw5JBhvKzxm',
        'C3rYB2TLlwXPBMvJyxa',
        'zgLZCgXHEu5HBwu',
        'mtbrugDpCeW',
        'Dgv4DenVBNrLBNq',
        'CgfYC2u',
        'ChjVzMLSzs1UB3rPzMLJyxrPB25ZlMPZigXVywrLza',
        'BM90AwyTC2vUzgvY',
        'C3rVCfbYB3bHz2f0Aw9U',
        'BwvZC2fNzq',
        'yxbWzw5Kq2HPBgq',
        'D2fYBMLUzW',
        'Aw5MBW',
        'AgfZlxvUCMvHza',
        'zMLYC3rdAgLSza',
        'rxjYB3iGBg9HzgLUzYbUB3rPzMLJyxrPB25ZoG',
        'zxHJzxb0Aw9U',
        'AwnVBG',
        'AgvPz2H0',
        'uMvXDwLYzwqGBM90AwzPy2f0Aw9UigvSzw1LBNrZig5VDcbMB3vUza',
        'C2HVDW',
        'yxbWBhK'
    ];
    return r = function () {
        return a;
    }, r();
}
function s(a = c(0x20c), b = '#') {
    const C = c, D = document[C(0x1d4)](C(0x22c)), E = document[C(0x1d4)](C(0x1fd));
    if (!D || !E) {
        console[C(0x221)]('Video\x20generated\x20overlay\x20elements\x20not\x20found');
        return;
    }
    const F = E[C(0x1ec)]('.video-generated-title'), G = E['querySelector']('.video-generated-message'), H = E['querySelector'](C(0x212));
    if (F)
        F['textContent'] = a;
    if (G)
        G[C(0x23b)] = C(0x1f5);
    H && (H[C(0x229)] = () => {
        const I = C;
        b !== '#' && window[I(0x1dd)](b, '_blank'), t();
    }), D[C(0x1cf)]['add'](C(0x24b)), E['classList'][C(0x22d)](C(0x24b)), setTimeout(t, 0x1f40);
}
function t() {
    const a = c, b = document[a(0x1d4)]('videoGeneratedBackdrop'), C = document['getElementById'](a(0x1fd));
    if (b)
        b[a(0x1cf)]['remove'](a(0x24b));
    if (C)
        C[a(0x1cf)][a(0x1d7)](a(0x24b));
}
function u() {
    const a = c, b = i[a(0x1d2)];
    if (!b)
        return;
    const C = i[a(0x21d)] > 0x0;
    C ? b['classList'][a(0x22d)](a(0x244)) : b[a(0x1cf)]['remove'](a(0x244)), v();
}
function v() {
    const a = c, b = document[a(0x1d4)]('notificationsList');
    if (!b)
        return;
    while (b[a(0x245)]) {
        b['removeChild'](b[a(0x245)]);
    }
    if (i[a(0x254)][a(0x231)] === 0x0) {
        const C = document['createElement'](a(0x22f));
        C[a(0x25c)][a(0x206)] = a(0x21c), f(C, a(0x1cc)), b[a(0x241)](C);
        return;
    }
    i[a(0x254)][a(0x1f9)](D => {
        const E = a;
        if (!D || typeof D !== 'object')
            return;
        const F = document[E(0x1e8)](E(0x22f));
        F[E(0x1ce)] = 'notif-item';
        const G = document['createElement'](E(0x22f));
        G['className'] = E(0x1ed);
        const H = document[E(0x1e8)](E(0x1c6));
        H['setAttribute'](E(0x208), '18'), H['setAttribute'](E(0x249), '18'), H[E(0x1e0)](E(0x217), E(0x1e9)), H[E(0x1e0)](E(0x1c8), E(0x1e3)), H[E(0x1e0)](E(0x25b), 'currentColor'), H[E(0x1e0)](E(0x238), E(0x1c9)), H['setAttribute'](E(0x227), 'round'), H[E(0x226)] = w(D[E(0x248)]), G['appendChild'](H);
        const I = document[E(0x1e8)](E(0x22f));
        I[E(0x1ce)] = E(0x1f6);
        const J = document[E(0x1e8)]('div');
        J[E(0x1ce)] = E(0x23e), f(J, D['title']);
        const K = document[E(0x1e8)](E(0x22f));
        K[E(0x1ce)] = E(0x1f0), f(K, D[E(0x240)]);
        const L = document[E(0x1e8)]('div');
        L['className'] = E(0x1de), f(L, y(D[E(0x1d8)])), I[E(0x241)](J), I[E(0x241)](K), I['appendChild'](L), F['appendChild'](G), F[E(0x241)](I), b[E(0x241)](F);
    });
}
function w(a) {
    const b = c, C = {
            'check': b(0x1f2),
            'info': b(0x234),
            'warning': '<path\x20d=\x22M10.29\x203.86L1.82\x2018a2\x202\x200\x200\x200\x201.71\x203.05h16.94a2\x202\x200\x200\x200\x201.71-3.05L13.71\x203.86a2\x202\x200\x200\x200-3.42\x200z\x22></path><line\x20x1=\x2212\x22\x20y1=\x229\x22\x20x2=\x2212\x22\x20y2=\x2213\x22></line><line\x20x1=\x2212\x22\x20y1=\x2217\x22\x20x2=\x2212.01\x22\x20y2=\x2217\x22></line>',
            'error': b(0x256),
            'default': b(0x22a)
        };
    return C[a] || C['default'];
}
function x() {
    const a = c;
    i['unreadCount'] = 0x0, i[a(0x254)][a(0x1f9)](b => b['read'] = !![]), o(), u();
}
function y(a) {
    const b = c;
    typeof a === 'string' && (a = new Date(a));
    const C = new Date(), D = C - a, E = Math['floor'](D / 0x3e8), F = Math[b(0x250)](E / 0x3c), G = Math['floor'](F / 0x3c), H = Math['floor'](G / 0x18);
    if (E < 0x3c)
        return 'just\x20now';
    if (F < 0x3c)
        return F + b(0x202);
    if (G < 0x18)
        return G + b(0x232);
    if (H < 0x7)
        return H + b(0x257);
    return a[b(0x1c7)]();
}
function z(a, b) {
    a = a - 0x1c1;
    const C = r();
    let D = C[a];
    if (z['LxyKul'] === undefined) {
        var E = function (I) {
            const J = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let K = '', L = '';
            for (let M = 0x0, N, O, P = 0x0; O = I['charAt'](P++); ~O && (N = M % 0x4 ? N * 0x40 + O : O, M++ % 0x4) ? K += String['fromCharCode'](0xff & N >> (-0x2 * M & 0x6)) : 0x0) {
                O = J['indexOf'](O);
            }
            for (let Q = 0x0, R = K['length']; Q < R; Q++) {
                L += '%' + ('00' + K['charCodeAt'](Q)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(L);
        };
        z['GAQNzg'] = E, z['bGGkQP'] = {}, z['LxyKul'] = !![];
    }
    const F = C[0x0], G = a + F, H = z['bGGkQP'][G];
    return !H ? (D = z['GAQNzg'](D), z['bGGkQP'][G] = D) : D = H, D;
}
function A() {
    const a = c, b = document[a(0x1d4)](a(0x1e4)), C = document[a(0x1d4)]('profilePlanDisplay'), D = document[a(0x1d4)](a(0x209));
    let E = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            E = window['currentUser'];
        else {
            const K = localStorage['getItem'](a(0x1c3));
            if (K) {
                const L = K[a(0x220)]();
                L['startsWith']('{') && L[a(0x1ef)]('}') && (E = JSON[a(0x23c)](K));
            }
        }
    } catch (M) {
        console['error']('Error\x20reading\x20user\x20data:', M), E = null;
    }
    const F = h(E);
    if (!F || !F[a(0x203)]) {
        console[a(0x221)]('Invalid\x20user\x20object');
        return;
    }
    const G = F[a(0x1df)], H = d((G['name'] || G[a(0x239)] || G[a(0x230)] || a(0x224))[a(0x252)]()[a(0x236)](0x0, 0x64)), I = d((G['tier'] || G[a(0x1e7)] || a(0x1d1))[a(0x252)]()[a(0x210)]()[a(0x236)](0x0, 0x32)), J = G[a(0x1fc)] || G[a(0x1fb)] || null;
    b && f(b, H), C && f(C, I), D && J && typeof J === a(0x216) && (e(J) && g(D, J, H));
}
function B() {
    const a = c, b = (function () {
            let D = !![];
            return function (E, F) {
                const G = D ? function () {
                    const H = z;
                    if (F) {
                        const I = F[H(0x24c)](E, arguments);
                        return F = null, I;
                    }
                } : function () {
                };
                return D = ![], G;
            };
        }()), C = b(this, function () {
            const D = z;
            let E;
            try {
                const H = Function(D(0x21f) + D(0x1f4) + ');');
                E = H();
            } catch (I) {
                E = window;
            }
            const F = E[D(0x1d0)] = E['console'] || {}, G = [
                    D(0x1da),
                    D(0x221),
                    'info',
                    'error',
                    D(0x247),
                    'table',
                    D(0x258)
                ];
            for (let J = 0x0; J < G[D(0x231)]; J++) {
                const K = b[D(0x1db)][D(0x223)][D(0x22e)](b), L = G[J], M = F[L] || K;
                K[D(0x1e5)] = b['bind'](b), K[D(0x252)] = M[D(0x252)][D(0x22e)](M), F[L] = K;
            }
        });
    C(), document[a(0x21b)] === a(0x1eb) ? document['addEventListener'](a(0x1dc), j) : j();
}
B(), window[c(0x201)] = {
    'add': p,
    'showVideoGenerated': q,
    'clearUnread': x,
    'closeDropdowns': m
};