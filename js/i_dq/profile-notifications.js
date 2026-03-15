const _0x1dc86d = _0x3ae8;
(function (_0x51d09d, _0x38c73f) {
    const _0x4f167d = _0x3ae8, _0x12839a = _0x51d09d();
    while (!![]) {
        try {
            const _0x12dff5 = parseInt(_0x4f167d(0x1c2)) / 0x1 * (parseInt(_0x4f167d(0x1e1)) / 0x2) + -parseInt(_0x4f167d(0x1f7)) / 0x3 + -parseInt(_0x4f167d(0x228)) / 0x4 + parseInt(_0x4f167d(0x1ee)) / 0x5 + -parseInt(_0x4f167d(0x1ca)) / 0x6 * (parseInt(_0x4f167d(0x21e)) / 0x7) + parseInt(_0x4f167d(0x24d)) / 0x8 + -parseInt(_0x4f167d(0x222)) / 0x9 * (-parseInt(_0x4f167d(0x23a)) / 0xa);
            if (_0x12dff5 === _0x38c73f)
                break;
            else
                _0x12839a['push'](_0x12839a['shift']());
        } catch (_0xf555be) {
            _0x12839a['push'](_0x12839a['shift']());
        }
    }
}(_0x1ce8, 0xe0f2a), console[_0x1dc86d(0x1da)](_0x1dc86d(0x23d)));
function _0x3bb572(_0x409a8a) {
    const _0x35e6d8 = _0x1dc86d;
    if (typeof _0x409a8a !== 'string')
        return '';
    const _0x3de37b = {
        '&': _0x35e6d8(0x20a),
        '<': '&lt;',
        '>': _0x35e6d8(0x1e6),
        '\x22': '&quot;',
        '\x27': _0x35e6d8(0x21a),
        '/': _0x35e6d8(0x1c1)
    };
    return _0x409a8a['replace'](/[&<>"'\/]/g, _0x3b3d30 => _0x3de37b[_0x3b3d30] || _0x3b3d30);
}
function _0x796998(_0x331384) {
    const _0x2911ec = _0x1dc86d;
    if (typeof _0x331384 !== 'string' || _0x331384['length'] === 0x0)
        return ![];
    if (_0x331384[_0x2911ec(0x231)] > 0x800)
        return ![];
    try {
        const _0x175fd6 = new URL(_0x331384);
        if (!/^https?:$/['test'](_0x175fd6['protocol']))
            return ![];
        if (_0x331384[_0x2911ec(0x1e2)]()[_0x2911ec(0x237)]('javascript:'))
            return ![];
        if (_0x331384[_0x2911ec(0x1e2)]()[_0x2911ec(0x237)](_0x2911ec(0x204)))
            return ![];
        if (_0x331384['toLowerCase']()[_0x2911ec(0x237)]('vbscript:'))
            return ![];
        return !![];
    } catch {
        return ![];
    }
}
function _0x3bcddf(_0x4de022, _0x56fa72) {
    const _0x457abe = _0x1dc86d;
    _0x4de022 && typeof _0x56fa72 === _0x457abe(0x216) && (_0x4de022[_0x457abe(0x23b)] = _0x56fa72);
}
function _0x220f55(_0x38ea7f, _0x5c3d13, _0x2ff83b = '') {
    const _0x1599e2 = _0x1dc86d;
    if (!_0x38ea7f)
        return;
    if (!_0x796998(_0x5c3d13)) {
        console[_0x1599e2(0x221)](_0x1599e2(0x205));
        return;
    }
    const _0x958ab5 = document[_0x1599e2(0x1e8)](_0x1599e2(0x1f1));
    _0x958ab5[_0x1599e2(0x1e0)](_0x1599e2(0x1d6), _0x5c3d13), _0x958ab5[_0x1599e2(0x1e0)](_0x1599e2(0x1cd), _0x3bb572(_0x2ff83b)), _0x958ab5['style']['cssText'] = _0x1599e2(0x253);
    while (_0x38ea7f[_0x1599e2(0x245)]) {
        _0x38ea7f['removeChild'](_0x38ea7f['firstChild']);
    }
    _0x38ea7f[_0x1599e2(0x241)](_0x958ab5);
}
function _0x228b08(_0x575cd7) {
    const _0x26606a = _0x1dc86d;
    if (!_0x575cd7 || typeof _0x575cd7 !== _0x26606a(0x1d9))
        return { 'valid': ![] };
    const _0x3bbf62 = _0x575cd7['id'] || _0x575cd7[_0x26606a(0x259)] || _0x575cd7['sub'], _0x3d73df = _0x575cd7[_0x26606a(0x230)] || _0x575cd7[_0x26606a(0x1f8)] || _0x575cd7[_0x26606a(0x239)];
    if (_0x3bbf62 || _0x3d73df)
        return {
            'valid': !![],
            'user': _0x575cd7
        };
    return { 'valid': ![] };
}
let _0x4c2c69 = {
    'unreadCount': 0x0,
    'notifications': [],
    'bellElement': null,
    'profileElement': null,
    'notificationsDropdown': null,
    'profileDropdown': null,
    'initialized': ![]
};
function _0x55f90f() {
    const _0xea9101 = _0x1dc86d;
    if (_0x4c2c69[_0xea9101(0x25a)])
        return;
    console['log']('Initializing\x20notification\x20system...'), _0x4c2c69[_0xea9101(0x1d2)] = document['getElementById'](_0xea9101(0x1cb)), _0x4c2c69[_0xea9101(0x251)] = document[_0xea9101(0x1d4)](_0xea9101(0x1ff)), _0x4c2c69[_0xea9101(0x1d3)] = document[_0xea9101(0x1d4)]('notificationsDropdown');
    if (!_0x4c2c69['bellElement'] || !_0x4c2c69['profileElement']) {
        console[_0xea9101(0x221)](_0xea9101(0x24a));
        return;
    }
    console[_0xea9101(0x1da)]('✅\x20Notification\x20elements\x20found'), _0x39a772(), _0x5723f0(), _0x14b3c3(), _0x4c2c69[_0xea9101(0x25a)] = !![], _0x14b3c3();
}
function _0x14b3c3() {
    const _0x3b0a7a = _0x1dc86d, _0x37b87c = document['getElementById'](_0x3b0a7a(0x1ff));
    if (!_0x37b87c)
        return;
    let _0x5c065f = null;
    try {
        if (typeof window !== _0x3b0a7a(0x211) && window[_0x3b0a7a(0x1c3)])
            _0x5c065f = window['currentUser'];
        else {
            const _0x50cd87 = localStorage[_0x3b0a7a(0x1f3)](_0x3b0a7a(0x1c3));
            if (_0x50cd87) {
                const _0x35fc26 = _0x50cd87[_0x3b0a7a(0x220)]();
                _0x35fc26[_0x3b0a7a(0x218)]('{') && _0x35fc26['endsWith']('}') && (_0x5c065f = JSON[_0x3b0a7a(0x23c)](_0x50cd87));
            }
        }
    } catch (_0x48414d) {
        console[_0x3b0a7a(0x1fa)](_0x3b0a7a(0x20d), _0x48414d), _0x5c065f = null;
    }
    const _0x583556 = _0x228b08(_0x5c065f);
    if (!_0x583556 || !_0x583556[_0x3b0a7a(0x203)]) {
        console[_0x3b0a7a(0x221)](_0x3b0a7a(0x219));
        return;
    }
    const _0x3b595a = _0x583556[_0x3b0a7a(0x1df)], _0x309b46 = (_0x3b595a['auth_provider'] || '')['toString']()[_0x3b0a7a(0x1e2)](), _0x3bae24 = _0x3b595a[_0x3b0a7a(0x1fc)] || _0x3b595a[_0x3b0a7a(0x1fb)] || null, _0x20388d = _0x3b0a7a(0x213);
    while (_0x37b87c[_0x3b0a7a(0x245)]) {
        _0x37b87c['removeChild'](_0x37b87c[_0x3b0a7a(0x245)]);
    }
    if (_0x309b46[_0x3b0a7a(0x237)](_0x3b0a7a(0x20b)))
        console[_0x3b0a7a(0x1da)](_0x3b0a7a(0x225)), _0x37b87c[_0x3b0a7a(0x226)] = _0x20388d;
    else
        _0x3bae24 && typeof _0x3bae24 === _0x3b0a7a(0x216) && (_0x796998(_0x3bae24) ? _0x220f55(_0x37b87c, _0x3bae24, 'User\x20Avatar') : console[_0x3b0a7a(0x221)]('Invalid\x20avatar\x20URL'));
}
function _0x39a772() {
    const _0x1f7053 = _0x1dc86d, _0x5b6611 = _0x4c2c69[_0x1f7053(0x1d2)], _0x3a97e5 = _0x4c2c69[_0x1f7053(0x1d3)];
    _0x5b6611['addEventListener'](_0x1f7053(0x20f), _0xecfeef => {
        const _0x82d840 = _0x1f7053;
        _0xecfeef[_0x82d840(0x23f)]();
        const _0x3e73ae = _0x3a97e5[_0x82d840(0x1cf)]['contains'](_0x82d840(0x1dd));
        _0x468bff(), !_0x3e73ae && (_0x3a97e5['classList'][_0x82d840(0x22d)]('open'), _0x369b1f());
    }), document[_0x1f7053(0x200)](_0x1f7053(0x20f), _0x468bff);
    const _0x3b9a49 = document[_0x1f7053(0x1d4)]('markAsRead');
    _0x3b9a49 && _0x3b9a49[_0x1f7053(0x200)]('click', _0x173777 => {
        _0x173777['preventDefault'](), _0x369b1f();
    });
}
function _0x468bff() {
    const _0x5e49c6 = _0x1dc86d, _0x3f3242 = _0x4c2c69['notificationsDropdown'];
    if (_0x3f3242)
        _0x3f3242[_0x5e49c6(0x1cf)][_0x5e49c6(0x1d7)](_0x5e49c6(0x1dd));
}
function _0x5723f0() {
    const _0x4cd5f6 = _0x1dc86d;
    try {
        const _0x9ffe4 = localStorage[_0x4cd5f6(0x1f3)]('notificationSystem');
        if (_0x9ffe4) {
            const _0x4858b7 = JSON['parse'](_0x9ffe4);
            _0x4c2c69['notifications'] = _0x4858b7[_0x4cd5f6(0x254)] || [], _0x4c2c69[_0x4cd5f6(0x21d)] = _0x4858b7[_0x4cd5f6(0x21d)] || 0x0, _0x8044e1();
        }
    } catch (_0x48c605) {
        console['error'](_0x4cd5f6(0x246), _0x48c605);
    }
}
function _0x16b4e8() {
    const _0x443122 = _0x1dc86d;
    try {
        localStorage[_0x443122(0x20e)]('notificationSystem', JSON['stringify']({
            'notifications': _0x4c2c69['notifications'],
            'unreadCount': _0x4c2c69[_0x443122(0x21d)]
        }));
    } catch (_0xd9b91e) {
        console[_0x443122(0x1fa)]('Error\x20saving\x20notifications:', _0xd9b91e);
    }
}
function _0x369e98(_0x17a7fd) {
    const _0xe4f056 = _0x1dc86d;
    if (!_0x17a7fd || typeof _0x17a7fd !== _0xe4f056(0x1d9))
        return console[_0xe4f056(0x1fa)](_0xe4f056(0x207)), null;
    const _0xe2f55e = (_0x5614a9, _0x100210 = 0x1f4) => {
            const _0x4003d9 = _0xe4f056;
            if (typeof _0x5614a9 !== _0x4003d9(0x216))
                return '';
            return _0x3bb572(_0x5614a9[_0x4003d9(0x236)](0x0, _0x100210));
        }, _0x4cb089 = {
            'id': Date['now'](),
            'title': _0xe2f55e(_0x17a7fd[_0xe4f056(0x22b)] || _0xe4f056(0x1c5), 0x64),
            'message': _0xe2f55e(_0x17a7fd[_0xe4f056(0x240)] || _0xe4f056(0x1c4), 0x1f4),
            'icon': _0x17a7fd[_0xe4f056(0x248)] || 'info',
            'timestamp': _0x17a7fd[_0xe4f056(0x1d8)] || new Date(),
            'read': _0x17a7fd[_0xe4f056(0x215)] === !![],
            ..._0x17a7fd
        }, _0x48a87b = [
            _0xe4f056(0x255),
            _0xe4f056(0x243),
            _0xe4f056(0x242),
            _0xe4f056(0x1fa),
            _0xe4f056(0x235)
        ];
    return !_0x48a87b[_0xe4f056(0x237)](_0x4cb089[_0xe4f056(0x248)]) && (_0x4cb089[_0xe4f056(0x248)] = 'default'), _0x4c2c69[_0xe4f056(0x254)][_0xe4f056(0x214)](_0x4cb089), _0x4c2c69['unreadCount']++, _0x4c2c69[_0xe4f056(0x254)][_0xe4f056(0x231)] > 0x32 && (_0x4c2c69[_0xe4f056(0x254)] = _0x4c2c69['notifications'][_0xe4f056(0x24f)](0x0, 0x32)), _0x16b4e8(), _0x8044e1(), _0x4cb089;
}
function _0x126a2b(_0x18e9f9 = {}) {
    const _0xe0c55 = _0x1dc86d;
    console[_0xe0c55(0x1da)](_0xe0c55(0x1ea), _0x18e9f9);
    const {
        videoTitle: videoTitle = _0xe0c55(0x233),
        videoUrl: videoUrl = '#',
        thumbnailUrl: thumbnailUrl = null,
        duration: duration = 0x0
    } = _0x18e9f9;
    _0x185a3e(videoTitle, videoUrl), _0x369e98({
        'title': _0xe0c55(0x233),
        'message': _0xe0c55(0x1fe) + videoTitle + _0xe0c55(0x24e),
        'icon': _0xe0c55(0x255),
        'action': {
            'label': _0xe0c55(0x1d5),
            'url': videoUrl
        }
    });
}
function _0x1ce8() {
    const _0x24df6b = [
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
    _0x1ce8 = function () {
        return _0x24df6b;
    };
    return _0x1ce8();
}
function _0x185a3e(_0x5c3eb2 = _0x1dc86d(0x20c), _0x507569 = '#') {
    const _0x18c60d = _0x1dc86d, _0x4d7daa = document[_0x18c60d(0x1d4)](_0x18c60d(0x22c)), _0x27e9b3 = document[_0x18c60d(0x1d4)](_0x18c60d(0x1fd));
    if (!_0x4d7daa || !_0x27e9b3) {
        console[_0x18c60d(0x221)]('Video\x20generated\x20overlay\x20elements\x20not\x20found');
        return;
    }
    const _0x940b3 = _0x27e9b3[_0x18c60d(0x1ec)]('.video-generated-title'), _0x4428e1 = _0x27e9b3['querySelector']('.video-generated-message'), _0x2e864b = _0x27e9b3['querySelector'](_0x18c60d(0x212));
    if (_0x940b3)
        _0x940b3['textContent'] = _0x5c3eb2;
    if (_0x4428e1)
        _0x4428e1[_0x18c60d(0x23b)] = _0x18c60d(0x1f5);
    _0x2e864b && (_0x2e864b[_0x18c60d(0x229)] = () => {
        const _0x403202 = _0x18c60d;
        _0x507569 !== '#' && window[_0x403202(0x1dd)](_0x507569, '_blank'), _0x272572();
    }), _0x4d7daa[_0x18c60d(0x1cf)]['add'](_0x18c60d(0x24b)), _0x27e9b3['classList'][_0x18c60d(0x22d)](_0x18c60d(0x24b)), setTimeout(_0x272572, 0x1f40);
}
function _0x272572() {
    const _0x53dcd3 = _0x1dc86d, _0x20117e = document[_0x53dcd3(0x1d4)]('videoGeneratedBackdrop'), _0x1699ee = document['getElementById'](_0x53dcd3(0x1fd));
    if (_0x20117e)
        _0x20117e[_0x53dcd3(0x1cf)]['remove'](_0x53dcd3(0x24b));
    if (_0x1699ee)
        _0x1699ee[_0x53dcd3(0x1cf)][_0x53dcd3(0x1d7)](_0x53dcd3(0x24b));
}
function _0x8044e1() {
    const _0x56b81c = _0x1dc86d, _0x140a25 = _0x4c2c69[_0x56b81c(0x1d2)];
    if (!_0x140a25)
        return;
    const _0x43a228 = _0x4c2c69[_0x56b81c(0x21d)] > 0x0;
    _0x43a228 ? _0x140a25['classList'][_0x56b81c(0x22d)](_0x56b81c(0x244)) : _0x140a25[_0x56b81c(0x1cf)]['remove'](_0x56b81c(0x244)), _0x14f325();
}
function _0x14f325() {
    const _0x3d98b0 = _0x1dc86d, _0xaba93e = document[_0x3d98b0(0x1d4)]('notificationsList');
    if (!_0xaba93e)
        return;
    while (_0xaba93e[_0x3d98b0(0x245)]) {
        _0xaba93e['removeChild'](_0xaba93e[_0x3d98b0(0x245)]);
    }
    if (_0x4c2c69[_0x3d98b0(0x254)][_0x3d98b0(0x231)] === 0x0) {
        const _0x16cf94 = document['createElement'](_0x3d98b0(0x22f));
        _0x16cf94[_0x3d98b0(0x25c)][_0x3d98b0(0x206)] = _0x3d98b0(0x21c), _0x3bcddf(_0x16cf94, _0x3d98b0(0x1cc)), _0xaba93e[_0x3d98b0(0x241)](_0x16cf94);
        return;
    }
    _0x4c2c69[_0x3d98b0(0x254)][_0x3d98b0(0x1f9)](_0x21b755 => {
        const _0x213477 = _0x3d98b0;
        if (!_0x21b755 || typeof _0x21b755 !== 'object')
            return;
        const _0x3d258d = document[_0x213477(0x1e8)](_0x213477(0x22f));
        _0x3d258d[_0x213477(0x1ce)] = 'notif-item';
        const _0x54a667 = document['createElement'](_0x213477(0x22f));
        _0x54a667['className'] = _0x213477(0x1ed);
        const _0x51bf3c = document[_0x213477(0x1e8)](_0x213477(0x1c6));
        _0x51bf3c['setAttribute'](_0x213477(0x208), '18'), _0x51bf3c['setAttribute'](_0x213477(0x249), '18'), _0x51bf3c[_0x213477(0x1e0)](_0x213477(0x217), _0x213477(0x1e9)), _0x51bf3c[_0x213477(0x1e0)](_0x213477(0x1c8), _0x213477(0x1e3)), _0x51bf3c[_0x213477(0x1e0)](_0x213477(0x25b), 'currentColor'), _0x51bf3c[_0x213477(0x1e0)](_0x213477(0x238), _0x213477(0x1c9)), _0x51bf3c['setAttribute'](_0x213477(0x227), 'round'), _0x51bf3c[_0x213477(0x226)] = _0x248f60(_0x21b755[_0x213477(0x248)]), _0x54a667['appendChild'](_0x51bf3c);
        const _0x4142ea = document[_0x213477(0x1e8)](_0x213477(0x22f));
        _0x4142ea[_0x213477(0x1ce)] = _0x213477(0x1f6);
        const _0x2bb4f3 = document[_0x213477(0x1e8)]('div');
        _0x2bb4f3[_0x213477(0x1ce)] = _0x213477(0x23e), _0x3bcddf(_0x2bb4f3, _0x21b755['title']);
        const _0x4ebdad = document[_0x213477(0x1e8)](_0x213477(0x22f));
        _0x4ebdad[_0x213477(0x1ce)] = _0x213477(0x1f0), _0x3bcddf(_0x4ebdad, _0x21b755[_0x213477(0x240)]);
        const _0x5c7f78 = document[_0x213477(0x1e8)]('div');
        _0x5c7f78['className'] = _0x213477(0x1de), _0x3bcddf(_0x5c7f78, _0xec3ca9(_0x21b755[_0x213477(0x1d8)])), _0x4142ea[_0x213477(0x241)](_0x2bb4f3), _0x4142ea[_0x213477(0x241)](_0x4ebdad), _0x4142ea['appendChild'](_0x5c7f78), _0x3d258d['appendChild'](_0x54a667), _0x3d258d[_0x213477(0x241)](_0x4142ea), _0xaba93e[_0x213477(0x241)](_0x3d258d);
    });
}
function _0x248f60(_0x163c31) {
    const _0x2504d9 = _0x1dc86d, _0xd755a5 = {
            'check': _0x2504d9(0x1f2),
            'info': _0x2504d9(0x234),
            'warning': '<path\x20d=\x22M10.29\x203.86L1.82\x2018a2\x202\x200\x200\x200\x201.71\x203.05h16.94a2\x202\x200\x200\x200\x201.71-3.05L13.71\x203.86a2\x202\x200\x200\x200-3.42\x200z\x22></path><line\x20x1=\x2212\x22\x20y1=\x229\x22\x20x2=\x2212\x22\x20y2=\x2213\x22></line><line\x20x1=\x2212\x22\x20y1=\x2217\x22\x20x2=\x2212.01\x22\x20y2=\x2217\x22></line>',
            'error': _0x2504d9(0x256),
            'default': _0x2504d9(0x22a)
        };
    return _0xd755a5[_0x163c31] || _0xd755a5['default'];
}
function _0x369b1f() {
    const _0x1ca467 = _0x1dc86d;
    _0x4c2c69['unreadCount'] = 0x0, _0x4c2c69[_0x1ca467(0x254)][_0x1ca467(0x1f9)](_0x349e4b => _0x349e4b['read'] = !![]), _0x16b4e8(), _0x8044e1();
}
function _0xec3ca9(_0x25941a) {
    const _0x58136d = _0x1dc86d;
    typeof _0x25941a === 'string' && (_0x25941a = new Date(_0x25941a));
    const _0x2c4b11 = new Date(), _0x56efa4 = _0x2c4b11 - _0x25941a, _0x4fd1fb = Math['floor'](_0x56efa4 / 0x3e8), _0x9729f5 = Math[_0x58136d(0x250)](_0x4fd1fb / 0x3c), _0x5826f7 = Math['floor'](_0x9729f5 / 0x3c), _0x1ad015 = Math['floor'](_0x5826f7 / 0x18);
    if (_0x4fd1fb < 0x3c)
        return 'just\x20now';
    if (_0x9729f5 < 0x3c)
        return _0x9729f5 + _0x58136d(0x202);
    if (_0x5826f7 < 0x18)
        return _0x5826f7 + _0x58136d(0x232);
    if (_0x1ad015 < 0x7)
        return _0x1ad015 + _0x58136d(0x257);
    return _0x25941a[_0x58136d(0x1c7)]();
}
function _0x3ae8(_0x3a01b9, _0xe138f9) {
    _0x3a01b9 = _0x3a01b9 - 0x1c1;
    const _0x402a87 = _0x1ce8();
    let _0x3aab91 = _0x402a87[_0x3a01b9];
    if (_0x3ae8['LxyKul'] === undefined) {
        var _0x3c6221 = function (_0x219039) {
            const _0x57bd06 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x40cc07 = '', _0x42c9e1 = '';
            for (let _0x17c467 = 0x0, _0x26191f, _0x3bb572, _0x796998 = 0x0; _0x3bb572 = _0x219039['charAt'](_0x796998++); ~_0x3bb572 && (_0x26191f = _0x17c467 % 0x4 ? _0x26191f * 0x40 + _0x3bb572 : _0x3bb572, _0x17c467++ % 0x4) ? _0x40cc07 += String['fromCharCode'](0xff & _0x26191f >> (-0x2 * _0x17c467 & 0x6)) : 0x0) {
                _0x3bb572 = _0x57bd06['indexOf'](_0x3bb572);
            }
            for (let _0x3bcddf = 0x0, _0x220f55 = _0x40cc07['length']; _0x3bcddf < _0x220f55; _0x3bcddf++) {
                _0x42c9e1 += '%' + ('00' + _0x40cc07['charCodeAt'](_0x3bcddf)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x42c9e1);
        };
        _0x3ae8['GAQNzg'] = _0x3c6221, _0x3ae8['bGGkQP'] = {}, _0x3ae8['LxyKul'] = !![];
    }
    const _0x58b6a3 = _0x402a87[0x0], _0x1ce890 = _0x3a01b9 + _0x58b6a3, _0x3ae89f = _0x3ae8['bGGkQP'][_0x1ce890];
    return !_0x3ae89f ? (_0x3aab91 = _0x3ae8['GAQNzg'](_0x3aab91), _0x3ae8['bGGkQP'][_0x1ce890] = _0x3aab91) : _0x3aab91 = _0x3ae89f, _0x3aab91;
}
function _0x5d0b29() {
    const _0x7c9fc4 = _0x1dc86d, _0x2a7d06 = document[_0x7c9fc4(0x1d4)](_0x7c9fc4(0x1e4)), _0x144a0d = document[_0x7c9fc4(0x1d4)]('profilePlanDisplay'), _0x417fb9 = document[_0x7c9fc4(0x1d4)](_0x7c9fc4(0x209));
    let _0x5512d5 = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0x5512d5 = window['currentUser'];
        else {
            const _0x363b33 = localStorage['getItem'](_0x7c9fc4(0x1c3));
            if (_0x363b33) {
                const _0xb4dedf = _0x363b33[_0x7c9fc4(0x220)]();
                _0xb4dedf['startsWith']('{') && _0xb4dedf[_0x7c9fc4(0x1ef)]('}') && (_0x5512d5 = JSON[_0x7c9fc4(0x23c)](_0x363b33));
            }
        }
    } catch (_0x518854) {
        console['error']('Error\x20reading\x20user\x20data:', _0x518854), _0x5512d5 = null;
    }
    const _0xf8e035 = _0x228b08(_0x5512d5);
    if (!_0xf8e035 || !_0xf8e035[_0x7c9fc4(0x203)]) {
        console[_0x7c9fc4(0x221)]('Invalid\x20user\x20object');
        return;
    }
    const _0xe0679e = _0xf8e035[_0x7c9fc4(0x1df)], _0x15af84 = _0x3bb572((_0xe0679e['name'] || _0xe0679e[_0x7c9fc4(0x239)] || _0xe0679e[_0x7c9fc4(0x230)] || _0x7c9fc4(0x224))[_0x7c9fc4(0x252)]()[_0x7c9fc4(0x236)](0x0, 0x64)), _0x3d0ae3 = _0x3bb572((_0xe0679e['tier'] || _0xe0679e[_0x7c9fc4(0x1e7)] || _0x7c9fc4(0x1d1))[_0x7c9fc4(0x252)]()[_0x7c9fc4(0x210)]()[_0x7c9fc4(0x236)](0x0, 0x32)), _0x44beab = _0xe0679e[_0x7c9fc4(0x1fc)] || _0xe0679e[_0x7c9fc4(0x1fb)] || null;
    _0x2a7d06 && _0x3bcddf(_0x2a7d06, _0x15af84), _0x144a0d && _0x3bcddf(_0x144a0d, _0x3d0ae3), _0x417fb9 && _0x44beab && typeof _0x44beab === _0x7c9fc4(0x216) && (_0x796998(_0x44beab) && _0x220f55(_0x417fb9, _0x44beab, _0x15af84));
}
function _0x589170() {
    const _0x33fded = _0x1dc86d, _0x3f15b9 = (function () {
            let _0xa7f9cc = !![];
            return function (_0x1083be, _0x29811c) {
                const _0x4e0e48 = _0xa7f9cc ? function () {
                    const _0x344cfd = _0x3ae8;
                    if (_0x29811c) {
                        const _0x3a5f80 = _0x29811c[_0x344cfd(0x24c)](_0x1083be, arguments);
                        return _0x29811c = null, _0x3a5f80;
                    }
                } : function () {
                };
                return _0xa7f9cc = ![], _0x4e0e48;
            };
        }()), _0x36b070 = _0x3f15b9(this, function () {
            const _0x5b004a = _0x3ae8;
            let _0x2526d0;
            try {
                const _0x7ec825 = Function(_0x5b004a(0x21f) + _0x5b004a(0x1f4) + ');');
                _0x2526d0 = _0x7ec825();
            } catch (_0x4e1cd9) {
                _0x2526d0 = window;
            }
            const _0x52a8f9 = _0x2526d0[_0x5b004a(0x1d0)] = _0x2526d0['console'] || {}, _0x3befbb = [
                    _0x5b004a(0x1da),
                    _0x5b004a(0x221),
                    'info',
                    'error',
                    _0x5b004a(0x247),
                    'table',
                    _0x5b004a(0x258)
                ];
            for (let _0x21ec35 = 0x0; _0x21ec35 < _0x3befbb[_0x5b004a(0x231)]; _0x21ec35++) {
                const _0x3fce2f = _0x3f15b9[_0x5b004a(0x1db)][_0x5b004a(0x223)][_0x5b004a(0x22e)](_0x3f15b9), _0xa1975e = _0x3befbb[_0x21ec35], _0x5e7224 = _0x52a8f9[_0xa1975e] || _0x3fce2f;
                _0x3fce2f[_0x5b004a(0x1e5)] = _0x3f15b9['bind'](_0x3f15b9), _0x3fce2f[_0x5b004a(0x252)] = _0x5e7224[_0x5b004a(0x252)][_0x5b004a(0x22e)](_0x5e7224), _0x52a8f9[_0xa1975e] = _0x3fce2f;
            }
        });
    _0x36b070(), document[_0x33fded(0x21b)] === _0x33fded(0x1eb) ? document['addEventListener'](_0x33fded(0x1dc), _0x55f90f) : _0x55f90f();
}
_0x589170(), window[_0x1dc86d(0x201)] = {
    'add': _0x369e98,
    'showVideoGenerated': _0x126a2b,
    'clearUnread': _0x369b1f,
    'closeDropdowns': _0x468bff
};