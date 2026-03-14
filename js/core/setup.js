const _0x6f6aff = _0x250a;
(function (_0x5e4649, _0x5629f9) {
    const _0x551d07 = _0x250a, _0x15ab17 = _0x5e4649();
    while (!![]) {
        try {
            const _0x3d672a = parseInt(_0x551d07(0x280)) / 0x1 * (-parseInt(_0x551d07(0x1d0)) / 0x2) + -parseInt(_0x551d07(0x1cf)) / 0x3 * (parseInt(_0x551d07(0x209)) / 0x4) + -parseInt(_0x551d07(0x211)) / 0x5 * (-parseInt(_0x551d07(0x1be)) / 0x6) + -parseInt(_0x551d07(0x25f)) / 0x7 + parseInt(_0x551d07(0x25b)) / 0x8 * (-parseInt(_0x551d07(0x224)) / 0x9) + -parseInt(_0x551d07(0x205)) / 0xa * (parseInt(_0x551d07(0x241)) / 0xb) + -parseInt(_0x551d07(0x24b)) / 0xc * (-parseInt(_0x551d07(0x1d6)) / 0xd);
            if (_0x3d672a === _0x5629f9)
                break;
            else
                _0x15ab17['push'](_0x15ab17['shift']());
        } catch (_0xff329e) {
            _0x15ab17['push'](_0x15ab17['shift']());
        }
    }
}(_0x3147, 0xa2ef9), window['getApiBase'] = function () {
    const _0x3723d4 = _0x250a;
    return window[_0x3723d4(0x1dc)] || _0x3723d4(0x226);
});
function escapeHtml(_0x3e64de) {
    const _0x5b2bd6 = _0x250a;
    if (typeof _0x3e64de !== _0x5b2bd6(0x240))
        return '';
    const _0x3e2b50 = {
        '&': _0x5b2bd6(0x1d3),
        '<': _0x5b2bd6(0x228),
        '>': _0x5b2bd6(0x1ca),
        '\x22': '&quot;',
        '\x27': _0x5b2bd6(0x1f1),
        '/': _0x5b2bd6(0x25a)
    };
    return _0x3e64de['replace'](/[&<>"'\/]/g, _0x4990ed => _0x3e2b50[_0x4990ed] || _0x4990ed);
}
function getCsrfToken() {
    const _0x50c12f = _0x250a, _0x556f60 = document[_0x50c12f(0x259)](_0x50c12f(0x22c))?.['getAttribute'](_0x50c12f(0x1d8));
    if (!_0x556f60 || typeof _0x556f60 !== 'string' || _0x556f60[_0x50c12f(0x1f8)] < 0xa)
        return console[_0x50c12f(0x235)](_0x50c12f(0x1fc)), '';
    return _0x556f60[_0x50c12f(0x247)]();
}
function validateUserId(_0x62b5c9) {
    const _0x156979 = _0x250a;
    if (typeof _0x62b5c9 !== _0x156979(0x240) || _0x62b5c9[_0x156979(0x1f8)] === 0x0)
        return ![];
    if (_0x62b5c9[_0x156979(0x1f8)] > 0x64)
        return ![];
    return /^[a-zA-Z0-9_-]+$/[_0x156979(0x25c)](_0x62b5c9);
}
function validateAuthUrl(_0x1bdf4d) {
    const _0x219ff1 = _0x250a;
    if (typeof _0x1bdf4d !== _0x219ff1(0x240))
        return ![];
    try {
        const _0x32a50b = new URL(_0x1bdf4d);
        return /^https?:$/[_0x219ff1(0x25c)](_0x32a50b['protocol']);
    } catch {
        return ![];
    }
}
function validateAuthResponse(_0xc8de7e) {
    const _0x1d4047 = _0x250a;
    if (!_0xc8de7e || typeof _0xc8de7e !== _0x1d4047(0x1fd))
        return { 'valid': ![] };
    if (_0xc8de7e[_0x1d4047(0x1b6)])
        return {
            'valid': ![],
            'error': typeof _0xc8de7e['error'] === _0x1d4047(0x240) ? _0xc8de7e[_0x1d4047(0x1b6)] : _0x1d4047(0x21c)
        };
    if (!_0xc8de7e['auth_url'] || typeof _0xc8de7e['auth_url'] !== _0x1d4047(0x240))
        return {
            'valid': ![],
            'error': _0x1d4047(0x1b7)
        };
    if (!validateAuthUrl(_0xc8de7e[_0x1d4047(0x21f)]))
        return {
            'valid': ![],
            'error': _0x1d4047(0x1f3)
        };
    return { 'valid': !![] };
}
async function _signRequest(_0x1b56ff, _0x1794c9 = 'POST', _0x4d2ab1 = '') {
    const _0x1f1391 = _0x250a;
    try {
        const _0x3902a5 = Math[_0x1f1391(0x24a)](Date['now']() / 0x3e8)[_0x1f1391(0x1c8)](), _0x4bd0f0 = Array['from'](crypto[_0x1f1391(0x1b5)](new Uint8Array(0x10)))['map'](_0x10c02b => _0x10c02b[_0x1f1391(0x1c8)](0x10)[_0x1f1391(0x237)](0x2, '0'))[_0x1f1391(0x1ba)](''), _0x8d6feb = getCsrfToken();
        if (!_0x8d6feb)
            return {
                'timestamp': _0x3902a5,
                'nonce': _0x4bd0f0
            };
        const _0x525d45 = new TextEncoder(), _0x4228fc = _0x525d45['encode'](_0x8d6feb), _0x56576b = await crypto[_0x1f1391(0x267)][_0x1f1391(0x1e6)](_0x1f1391(0x23d), _0x4228fc, {
                'name': _0x1f1391(0x248),
                'hash': _0x1f1391(0x1ed)
            }, ![], [_0x1f1391(0x215)]), _0x57ccf3 = _0x525d45['encode'](_0x1b56ff + '|' + _0x1794c9 + '|' + _0x3902a5 + '|' + _0x4bd0f0), _0x461243 = await crypto[_0x1f1391(0x267)]['sign'](_0x1f1391(0x248), _0x56576b, _0x57ccf3), _0x42810c = Array[_0x1f1391(0x270)](new Uint8Array(_0x461243))['map'](_0x31c2f3 => _0x31c2f3['toString'](0x10)[_0x1f1391(0x237)](0x2, '0'))['join']('');
        return {
            'timestamp': _0x3902a5,
            'nonce': _0x4bd0f0,
            'signature': _0x42810c
        };
    } catch (_0x23b365) {
        return console[_0x1f1391(0x1b6)](_0x1f1391(0x273), _0x23b365), {};
    }
}
class SetupModal {
    constructor() {
        const _0x383181 = _0x250a;
        this[_0x383181(0x1ce)] = ![], this['setupComplete'] = ![], this['apiBase'] = window['getApiBase'](), this[_0x383181(0x1d2)] = this[_0x383181(0x1de)](), this[_0x383181(0x254)] = {}, this[_0x383181(0x1ac)](), this['loadConnectionStatus']();
    }
    async [_0x6f6aff(0x277)]() {
        const _0x527bd3 = _0x6f6aff;
        try {
            const _0x593007 = await fetch(this['apiBase'] + _0x527bd3(0x24c), {
                    'method': _0x527bd3(0x249),
                    'credentials': 'include'
                }), _0x4874ce = await _0x593007[_0x527bd3(0x1bc)]();
            this[_0x527bd3(0x254)] = _0x4874ce, localStorage[_0x527bd3(0x1da)](_0x527bd3(0x1dd), JSON['stringify'](_0x4874ce)), window['platformConnections'] = _0x4874ce;
        } catch (_0x28c26b) {
            console['error']('Error\x20loading\x20connection\x20status:', _0x28c26b);
        }
    }
    ['initBanner']() {
        const _0x2b261d = _0x6f6aff, _0x14aa4f = document[_0x2b261d(0x1ea)]('setupBanner');
        if (_0x14aa4f) {
            _0x14aa4f[_0x2b261d(0x231)](_0x2b261d(0x26d), () => this[_0x2b261d(0x27e)]());
            if (this[_0x2b261d(0x252)]) {
            }
        }
    }
    async [_0x6f6aff(0x1f7)]() {
        const _0x1a4817 = _0x6f6aff;
        if (this['isConnecting'])
            return;
        this[_0x1a4817(0x1ce)] = !![];
        const _0x43067d = document[_0x1a4817(0x1ea)](_0x1a4817(0x1e3));
        _0x43067d && (_0x43067d['textContent'] = _0x1a4817(0x1fb), _0x43067d[_0x1a4817(0x24f)] = !![]);
        try {
            const _0x46bb1d = this[_0x1a4817(0x1de)]();
            if (!validateUserId(_0x46bb1d))
                throw new Error(_0x1a4817(0x1c4));
            localStorage['setItem']('youtube_user_id', _0x46bb1d);
            const _0x1efb3a = getCsrfToken(), _0x3b8587 = await _signRequest(_0x1a4817(0x1bf), _0x1a4817(0x255), JSON['stringify']({ 'user_id': _0x46bb1d })), _0x1f4203 = await fetch(this['apiBase'] + _0x1a4817(0x1bf), {
                    'method': _0x1a4817(0x255),
                    'headers': {
                        'Content-Type': _0x1a4817(0x1e0),
                        'X-CSRF-Token': _0x1efb3a,
                        'X-Request-Timestamp': _0x3b8587['timestamp'] || '',
                        'X-Request-Nonce': _0x3b8587[_0x1a4817(0x212)] || '',
                        'X-Request-Signature': _0x3b8587[_0x1a4817(0x1b8)] || ''
                    },
                    'body': JSON[_0x1a4817(0x1e4)]({ 'user_id': _0x46bb1d }),
                    'credentials': 'include',
                    'signal': AbortSignal['timeout'](0x7530)
                });
            if (!_0x1f4203['ok'])
                throw new Error(_0x1a4817(0x257) + _0x1f4203['status']);
            const _0x54927c = _0x1f4203[_0x1a4817(0x1b0)]['get'](_0x1a4817(0x263));
            if (_0x54927c && parseInt(_0x54927c) > 0xc350)
                throw new Error(_0x1a4817(0x25e));
            const _0x22c9c3 = await _0x1f4203['text']();
            if (!_0x22c9c3 || _0x22c9c3[_0x1a4817(0x1f8)] === 0x0)
                throw new Error(_0x1a4817(0x230));
            if (_0x22c9c3[_0x1a4817(0x1f8)] > 0xc350)
                throw new Error(_0x1a4817(0x25e));
            let _0x2bfc0e;
            try {
                _0x2bfc0e = JSON[_0x1a4817(0x1a6)](_0x22c9c3);
            } catch (_0x1c3b79) {
                throw new Error(_0x1a4817(0x1bd));
            }
            const _0x28e0a1 = validateAuthResponse(_0x2bfc0e);
            if (!_0x28e0a1[_0x1a4817(0x24d)])
                throw new Error(_0x1a4817(0x258) + (_0x28e0a1['error'] || 'No\x20auth\x20URL'));
            if (_0x2bfc0e['auth_url'] && validateAuthUrl(_0x2bfc0e['auth_url'])) {
                const _0x46e989 = window['open'](_0x2bfc0e['auth_url'], 'YouTubeAuth', _0x1a4817(0x244));
                this['waitForAuth'](_0x46e989);
            } else
                this[_0x1a4817(0x210)](_0x1a4817(0x23b)), this[_0x1a4817(0x1ce)] = ![], _0x43067d && (_0x43067d[_0x1a4817(0x276)] = 'Connect\x20YouTube', _0x43067d[_0x1a4817(0x24f)] = ![]);
        } catch (_0x3a16b6) {
            console[_0x1a4817(0x1b6)](_0x1a4817(0x265), _0x3a16b6), this[_0x1a4817(0x210)]('Connection\x20failed:\x20' + _0x3a16b6['message']), this[_0x1a4817(0x1ce)] = ![], _0x43067d && (_0x43067d[_0x1a4817(0x276)] = _0x1a4817(0x1cc), _0x43067d[_0x1a4817(0x24f)] = ![]);
        }
    }
    [_0x6f6aff(0x274)](_0x451c23) {
        const _0x1216e6 = setInterval(() => {
            _0x451c23['closed'] && (clearInterval(_0x1216e6), setTimeout(() => {
                const _0xabf8da = _0x250a;
                if (localStorage[_0xabf8da(0x239)]('youtube_connected') === _0xabf8da(0x27f))
                    this[_0xabf8da(0x216)]();
                else {
                    this['isConnecting'] = ![];
                    const _0x27f5b3 = document[_0xabf8da(0x1ea)](_0xabf8da(0x1e3));
                    _0x27f5b3 && (_0x27f5b3[_0xabf8da(0x276)] = 'Connect\x20YouTube', _0x27f5b3['disabled'] = ![]);
                }
            }, 0x1f4));
        }, 0x1f4);
    }
    [_0x6f6aff(0x216)]() {
        const _0x36129d = _0x6f6aff;
        this[_0x36129d(0x252)] = !![], this[_0x36129d(0x254)][_0x36129d(0x243)] = {
            'connected': !![],
            'name': _0x36129d(0x219)
        }, localStorage[_0x36129d(0x1da)]('platform_connections', JSON['stringify'](this[_0x36129d(0x254)])), this[_0x36129d(0x25d)](_0x36129d(0x208));
        const _0x75b165 = document['getElementById'](_0x36129d(0x214));
        _0x75b165 && (_0x75b165[_0x36129d(0x1cd)][_0x36129d(0x1ad)] = _0x36129d(0x1d1)), setTimeout(() => {
            const _0x119758 = _0x36129d, _0x5b4f7a = document['getElementById'](_0x119758(0x1ec));
            if (_0x5b4f7a)
                _0x5b4f7a['remove']();
            window[_0x119758(0x1fa)] && (window[_0x119758(0x1fa)][_0x119758(0x1f2)] = !![], window['analyticsManager'][_0x119758(0x1d2)] = localStorage['getItem'](_0x119758(0x1e8)), window[_0x119758(0x1fa)][_0x119758(0x223)]());
        }, 0x7d0);
    }
    async [_0x6f6aff(0x269)](_0x2c9e40) {
        const _0x326ff9 = _0x6f6aff;
        if (_0x2c9e40 === _0x326ff9(0x243))
            try {
                if (!validateUserId(this[_0x326ff9(0x1d2)]))
                    throw new Error(_0x326ff9(0x1c4));
                const _0x32ed34 = getCsrfToken(), _0x2cc3ac = await _signRequest(_0x326ff9(0x202), _0x326ff9(0x255), JSON[_0x326ff9(0x1e4)]({ 'user_id': this[_0x326ff9(0x1d2)] })), _0x48e2bc = await fetch(this['apiBase'] + '/analytics/disconnect', {
                        'method': _0x326ff9(0x255),
                        'headers': {
                            'Content-Type': _0x326ff9(0x1e0),
                            'X-CSRF-Token': _0x32ed34,
                            'X-Request-Timestamp': _0x2cc3ac[_0x326ff9(0x22f)] || '',
                            'X-Request-Nonce': _0x2cc3ac[_0x326ff9(0x212)] || '',
                            'X-Request-Signature': _0x2cc3ac['signature'] || ''
                        },
                        'body': JSON['stringify']({ 'user_id': this[_0x326ff9(0x1d2)] }),
                        'credentials': _0x326ff9(0x225),
                        'signal': AbortSignal[_0x326ff9(0x1af)](0x7530)
                    });
                if (!_0x48e2bc['ok'] && _0x48e2bc[_0x326ff9(0x234)] !== 0xc8 && _0x48e2bc[_0x326ff9(0x234)] !== 0xcc)
                    throw new Error(_0x326ff9(0x1fe) + _0x48e2bc[_0x326ff9(0x234)]);
                localStorage[_0x326ff9(0x1ef)](_0x326ff9(0x1df)), localStorage[_0x326ff9(0x1ef)]('youtube_token_time'), localStorage[_0x326ff9(0x1ef)](_0x326ff9(0x204)), this[_0x326ff9(0x252)] = ![], this['connections'][_0x326ff9(0x243)] = {
                    'connected': ![],
                    'name': _0x326ff9(0x219)
                };
                typeof this['connections'] === _0x326ff9(0x1fd) && localStorage[_0x326ff9(0x1da)](_0x326ff9(0x1dd), JSON['stringify'](this[_0x326ff9(0x254)]));
                const _0x4b7127 = document['getElementById']('setupBanner');
                if (_0x4b7127)
                    _0x4b7127[_0x326ff9(0x1cd)]['display'] = _0x326ff9(0x207);
                window[_0x326ff9(0x1fa)] && (window[_0x326ff9(0x1fa)][_0x326ff9(0x1f2)] = ![], window[_0x326ff9(0x1fa)]['loadAnalyticsData']()), this['showSuccess'](_0x326ff9(0x1bb)), setTimeout(() => {
                    const _0x57b554 = _0x326ff9, _0x3af83f = document[_0x57b554(0x1ea)](_0x57b554(0x1ec));
                    _0x3af83f && (_0x3af83f['remove'](), this[_0x57b554(0x27e)]());
                }, 0x5dc);
            } catch (_0x5508fc) {
                this[_0x326ff9(0x210)](_0x326ff9(0x23f) + _0x5508fc[_0x326ff9(0x232)]);
            }
    }
    [_0x6f6aff(0x27e)]() {
        const _0x227b0a = _0x6f6aff, _0x36fc3c = document[_0x227b0a(0x1ea)](_0x227b0a(0x1ec));
        if (_0x36fc3c)
            _0x36fc3c['remove']();
        const _0x2bb7cc = document[_0x227b0a(0x1c9)](_0x227b0a(0x245));
        _0x2bb7cc['id'] = _0x227b0a(0x1ec), _0x2bb7cc[_0x227b0a(0x1cd)][_0x227b0a(0x1f0)] = _0x227b0a(0x1cb);
        const _0x16e933 = this['connections'][_0x227b0a(0x243)]?.[_0x227b0a(0x1c1)];
        _0x2bb7cc[_0x227b0a(0x22b)] = _0x227b0a(0x1b3) + (_0x16e933 ? _0x227b0a(0x246) : _0x227b0a(0x1a5)) + _0x227b0a(0x203) + (_0x16e933 ? _0x227b0a(0x1c0) : _0x227b0a(0x1ff)) + _0x227b0a(0x1eb) + (!_0x16e933 ? _0x227b0a(0x21b) : '') + _0x227b0a(0x1a7), document[_0x227b0a(0x20c)][_0x227b0a(0x1a9)](_0x2bb7cc), this[_0x227b0a(0x1c7)](), document[_0x227b0a(0x1ea)](_0x227b0a(0x23c))['addEventListener'](_0x227b0a(0x26d), () => {
            const _0xa17c70 = _0x227b0a, _0x5732d6 = _0x2bb7cc['querySelector'](_0xa17c70(0x1a8));
            if (_0x5732d6)
                _0x5732d6['classList'][_0xa17c70(0x20f)](_0xa17c70(0x1b4));
            setTimeout(() => _0x2bb7cc[_0xa17c70(0x22a)](), 0x12c);
        }), !_0x16e933 && document[_0x227b0a(0x1ea)]('connectYouTubeBtn')[_0x227b0a(0x231)](_0x227b0a(0x26d), () => {
            this['initiateYouTubeAuth']();
        }), _0x2bb7cc[_0x227b0a(0x231)](_0x227b0a(0x26d), _0x1509aa => {
            const _0x54fdcf = _0x227b0a;
            if (_0x1509aa[_0x54fdcf(0x278)] === _0x2bb7cc) {
                const _0x3f782c = _0x2bb7cc['querySelector'](_0x54fdcf(0x1a8));
                if (_0x3f782c)
                    _0x3f782c[_0x54fdcf(0x256)]['add']('closing');
                setTimeout(() => _0x2bb7cc[_0x54fdcf(0x22a)](), 0x12c);
            }
        });
    }
    ['populatePlatformsList']() {
        const _0x38e67f = _0x6f6aff, _0x52879a = document[_0x38e67f(0x1ea)](_0x38e67f(0x26e));
        if (!_0x52879a)
            return;
        _0x52879a[_0x38e67f(0x22b)] = _0x38e67f(0x26b) + (this[_0x38e67f(0x254)]['youtube']?.['connected'] ? '#d4edda' : '#e9ecef') + _0x38e67f(0x262) + (this[_0x38e67f(0x254)][_0x38e67f(0x243)]?.[_0x38e67f(0x1c1)] ? _0x38e67f(0x22d) : '#f8f9fa') + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22platform-icon\x22\x20style=\x22display:inline-flex;align-items:center;width:36px;height:24px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2028\x2020\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20aria-label=\x22YouTube\x22\x20role=\x22img\x22\x20style=\x22width:100%;height:100%;display:block;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M27.4313\x203.11C27.1213\x201.89\x2026.1313\x200.91\x2024.9113\x200.6C22.7313\x200\x2014.0013\x200\x2014.0013\x200C14.0013\x200\x205.27128\x200\x203.09128\x200.6C1.87128\x200.91\x200.881281\x201.89\x200.571281\x203.11C0.261281\x204.33\x200.00128174\x206.6\x200.00128174\x2010C0.00128174\x2013.4\x200.261281\x2015.67\x200.571281\x2016.89C0.881281\x2018.11\x201.87128\x2019.09\x203.09128\x2019.4C5.27128\x2020\x2014.0013\x2020\x2014.0013\x2020C14.0013\x2020\x2022.7313\x2020\x2024.9113\x2019.4C26.1313\x2019.09\x2027.1213\x2018.11\x2027.4313\x2016.89C27.7413\x2015.67\x2028.0013\x2013.4\x2028.0013\x2010C28.0013\x206.6\x2027.7413\x204.33\x2027.4313\x203.11Z\x22\x20fill=\x22#FF0000\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M11.2013\x2014.2V5.8L18.2013\x2010L11.2013\x2014.2Z\x22\x20fill=\x22white\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-weight:\x20600;\x20color:\x20#333;\x22>YouTube</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2012px;\x20color:\x20#666;\x22>' + (this[_0x38e67f(0x254)]['youtube']?.[_0x38e67f(0x1c1)] ? _0x38e67f(0x1ee) : _0x38e67f(0x218)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (this['connections'][_0x38e67f(0x243)]?.[_0x38e67f(0x1c1)] ? _0x38e67f(0x1f6) : '') + _0x38e67f(0x1c3), this[_0x38e67f(0x254)][_0x38e67f(0x243)]?.['connected'] && document[_0x38e67f(0x1ea)](_0x38e67f(0x1e2))[_0x38e67f(0x231)](_0x38e67f(0x26d), () => {
            const _0x5865a2 = _0x38e67f;
            confirm(_0x5865a2(0x213)) && this[_0x5865a2(0x269)](_0x5865a2(0x243));
        });
    }
    [_0x6f6aff(0x1de)]() {
        const _0xb73823 = _0x6f6aff;
        let _0x2e3c4f = localStorage[_0xb73823(0x239)]('youtube_user_id');
        return !_0x2e3c4f && (_0x2e3c4f = _0xb73823(0x1f4) + Math['random']()[_0xb73823(0x1c8)](0x24)[_0xb73823(0x1c5)](0x2, 0x9), localStorage[_0xb73823(0x1da)](_0xb73823(0x1e8), _0x2e3c4f)), _0x2e3c4f;
    }
    [_0x6f6aff(0x25d)](_0x45ef73) {
        const _0x3974f1 = _0x6f6aff, _0x3997d0 = document[_0x3974f1(0x1ea)]('setupNotification');
        _0x3997d0 && (_0x3997d0[_0x3974f1(0x276)] = _0x45ef73, _0x3997d0['style'][_0x3974f1(0x1ad)] = _0x3974f1(0x207), _0x3997d0[_0x3974f1(0x1cd)][_0x3974f1(0x1c2)] = _0x3974f1(0x1e1), _0x3997d0[_0x3974f1(0x1cd)][_0x3974f1(0x21e)] = _0x3974f1(0x27c));
    }
    [_0x6f6aff(0x210)](_0xf067f8) {
        const _0x50c1ba = _0x6f6aff, _0x34b727 = document[_0x50c1ba(0x1ea)](_0x50c1ba(0x1d9));
        _0x34b727 && (_0x34b727[_0x50c1ba(0x276)] = _0xf067f8, _0x34b727['style'][_0x50c1ba(0x1ad)] = _0x50c1ba(0x207), _0x34b727[_0x50c1ba(0x1cd)][_0x50c1ba(0x1c2)] = _0x50c1ba(0x217), _0x34b727[_0x50c1ba(0x1cd)][_0x50c1ba(0x21e)] = _0x50c1ba(0x1ab));
    }
}
document[_0x6f6aff(0x231)](_0x6f6aff(0x1c6), () => {
    const _0x7d71b4 = _0x6f6aff;
    window[_0x7d71b4(0x1ec)] = new SetupModal(), setTimeout(() => {
        handleUpgradeCardVisibility();
    }, 0x1f4), setTimeout(() => {
        handleUpgradeCardVisibility();
    }, 0x5dc);
});
document[_0x6f6aff(0x221)] !== _0x6f6aff(0x229) && (!window[_0x6f6aff(0x1ec)] && (window['setupModal'] = new SetupModal()), setTimeout(() => {
    handleUpgradeCardVisibility();
}, 0x1f4), setTimeout(() => {
    handleUpgradeCardVisibility();
}, 0x5dc));
function _0x250a(_0x102c6c, _0x5e5c79) {
    _0x102c6c = _0x102c6c - 0x1a5;
    const _0x314732 = _0x3147();
    let _0x250a3a = _0x314732[_0x102c6c];
    return _0x250a3a;
}
window[_0x6f6aff(0x231)](_0x6f6aff(0x1d4), () => {
    const _0x880286 = _0x6f6aff;
    !document[_0x880286(0x21d)] && (console[_0x880286(0x22e)](_0x880286(0x1d5)), setTimeout(() => {
        const _0x1ee50d = _0x880286;
        handleUpgradeCardVisibility();
        const _0xcf760c = document[_0x1ee50d(0x259)](_0x1ee50d(0x20b));
        _0xcf760c && (_0xcf760c[_0x1ee50d(0x1cd)][_0x1ee50d(0x1ad)] = _0x1ee50d(0x1d1), setTimeout(() => {
            const _0x1e82d6 = _0x1ee50d;
            _0xcf760c[_0x1e82d6(0x1cd)][_0x1e82d6(0x1ad)] = _0x1e82d6(0x27b);
        }, 0xa));
    }, 0x64));
}, ![]), window['addEventListener']('focus', () => {
    const _0x3d3559 = _0x6f6aff;
    console[_0x3d3559(0x22e)]('🔄\x20Window\x20focused\x20-\x20checking\x20upgrade\x20card\x20visibility'), setTimeout(() => {
        handleUpgradeCardVisibility();
    }, 0x64);
}, ![]);
function handleUpgradeCardVisibility() {
    const _0x57b23b = _0x6f6aff;
    let _0x11b705 = window['tier'] || localStorage[_0x57b23b(0x239)](_0x57b23b(0x1db)) || localStorage[_0x57b23b(0x239)](_0x57b23b(0x26f));
    if (!_0x11b705)
        try {
            const _0x1f887e = JSON[_0x57b23b(0x1a6)](localStorage[_0x57b23b(0x239)]('currentUser') || '{}');
            _0x11b705 = _0x1f887e[_0x57b23b(0x222)];
        } catch (_0x3fb68e) {
        }
    async function _0x533ffa() {
        const _0x201d7d = _0x57b23b;
        try {
            console['log'](_0x201d7d(0x268));
            const _0x20a43a = await fetch(_0x201d7d(0x251), {
                'method': _0x201d7d(0x249),
                'credentials': _0x201d7d(0x225)
            });
            if (!_0x20a43a['ok'])
                throw new Error(_0x201d7d(0x27d) + _0x20a43a[_0x201d7d(0x234)]);
            const _0x5d7044 = await _0x20a43a[_0x201d7d(0x1bc)]();
            if (!_0x5d7044 || typeof _0x5d7044 !== _0x201d7d(0x1fd) || !_0x5d7044[_0x201d7d(0x222)])
                throw new Error(_0x201d7d(0x206));
            const _0x1b1c8d = [
                    _0x201d7d(0x272),
                    _0x201d7d(0x250),
                    _0x201d7d(0x1b9),
                    _0x201d7d(0x1e9)
                ], _0x2176d9 = typeof _0x5d7044['plan'] === _0x201d7d(0x240) && _0x1b1c8d['includes'](_0x5d7044[_0x201d7d(0x222)]['toLowerCase']()) ? _0x5d7044[_0x201d7d(0x222)][_0x201d7d(0x27a)]() : _0x201d7d(0x272);
            console[_0x201d7d(0x22e)](_0x201d7d(0x201), _0x2176d9);
            const _0x2538d1 = document[_0x201d7d(0x259)](_0x201d7d(0x23e)), _0x5565b6 = document[_0x201d7d(0x233)]('.upgrade-unlock-card'), _0x1b4e84 = document[_0x201d7d(0x259)](_0x201d7d(0x238));
            console[_0x201d7d(0x22e)](_0x201d7d(0x21a), !!_0x2538d1, _0x201d7d(0x261), _0x5565b6['length'], 'upgradeContainer:', !!_0x1b4e84);
            if (_0x2176d9 === _0x201d7d(0x1b9) || _0x2176d9 === _0x201d7d(0x250))
                console[_0x201d7d(0x22e)]('✅\x20[HIDING]\x20Elite/Prime\x20user\x20-\x20hiding\x20all\x20upgrade\x20cards'), _0x1b4e84 && (_0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x1ad)] = _0x201d7d(0x227), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x279)] = _0x201d7d(0x21d), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x220)] = '0', _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x20d)] = _0x201d7d(0x21d), _0x1b4e84[_0x201d7d(0x1cd)]['padding'] = '0', _0x1b4e84['style'][_0x201d7d(0x20e)] = '0', _0x1b4e84[_0x201d7d(0x256)][_0x201d7d(0x20f)](_0x201d7d(0x271)), console[_0x201d7d(0x22e)]('✅\x20[HIDDEN]\x20upgradeContainer')), _0x2538d1 && (_0x2538d1['style'][_0x201d7d(0x1ad)] = _0x201d7d(0x1d1), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x279)] = _0x201d7d(0x21d), _0x2538d1['style'][_0x201d7d(0x220)] = '0', _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x200)] = '0', _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x20e)] = '0', _0x2538d1['style'][_0x201d7d(0x20d)] = _0x201d7d(0x21d), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x236)] = _0x201d7d(0x1d1), console[_0x201d7d(0x22e)](_0x201d7d(0x264))), _0x5565b6[_0x201d7d(0x266)]((_0xc083db, _0x1b22d6) => {
                    const _0x227414 = _0x201d7d;
                    _0xc083db['style'][_0x227414(0x1ad)] = 'none', _0xc083db['style'][_0x227414(0x279)] = _0x227414(0x21d), _0xc083db[_0x227414(0x1cd)][_0x227414(0x220)] = '0', _0xc083db[_0x227414(0x1cd)][_0x227414(0x20d)] = 'hidden', console[_0x227414(0x22e)](_0x227414(0x1e7), _0x1b22d6);
                });
            else {
                if (_0x2176d9 === _0x201d7d(0x272) || _0x2176d9 === _0x201d7d(0x1e9)) {
                    console[_0x201d7d(0x22e)](_0x201d7d(0x26c));
                    _0x1b4e84 && (_0x1b4e84[_0x201d7d(0x256)][_0x201d7d(0x22a)](_0x201d7d(0x271)), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x279)] = _0x201d7d(0x1b2), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x220)] = _0x201d7d(0x253), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x20d)] = _0x201d7d(0x1b2), _0x1b4e84[_0x201d7d(0x1cd)][_0x201d7d(0x200)] = _0x201d7d(0x1f9), _0x1b4e84[_0x201d7d(0x1cd)]['margin'] = _0x201d7d(0x1b1), console['log']('✅\x20[SHOWN]\x20upgradeContainer'));
                    if (_0x2176d9 === _0x201d7d(0x1e9) && _0x2538d1) {
                        console['log'](_0x201d7d(0x24e)), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x1ad)] = _0x201d7d(0x27b), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x279)] = _0x201d7d(0x1b2);
                        const _0x31ca06 = _0x2538d1[_0x201d7d(0x259)](_0x201d7d(0x1ae));
                        if (_0x31ca06 && _0x31ca06[_0x201d7d(0x259)]('h2')) {
                            _0x31ca06[_0x201d7d(0x259)]('h2')['textContent'] = _0x201d7d(0x275);
                            const _0x5c1cf7 = _0x31ca06[_0x201d7d(0x259)](_0x201d7d(0x20a)) || document[_0x201d7d(0x1c9)]('p');
                            !_0x31ca06[_0x201d7d(0x259)](_0x201d7d(0x20a)) && (_0x5c1cf7[_0x201d7d(0x1f5)] = _0x201d7d(0x260), _0x5c1cf7[_0x201d7d(0x1cd)][_0x201d7d(0x1f0)] = _0x201d7d(0x1d7), _0x31ca06['insertBefore'](_0x5c1cf7, _0x31ca06[_0x201d7d(0x259)](_0x201d7d(0x1aa)))), _0x5c1cf7[_0x201d7d(0x276)] = _0x201d7d(0x23a);
                        }
                    } else {
                        if (_0x2176d9 === _0x201d7d(0x272) && _0x2538d1) {
                            console[_0x201d7d(0x22e)](_0x201d7d(0x242)), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x1ad)] = _0x201d7d(0x27b), _0x2538d1[_0x201d7d(0x1cd)][_0x201d7d(0x279)] = 'visible';
                            const _0x22df5e = _0x2538d1[_0x201d7d(0x259)]('.card-content');
                            _0x22df5e && _0x22df5e[_0x201d7d(0x259)]('h2') && (_0x22df5e[_0x201d7d(0x259)]('h2')[_0x201d7d(0x276)] = _0x201d7d(0x1e5));
                        }
                    }
                    _0x5565b6['forEach']((_0x886bcb, _0x2e4ddc) => {
                        const _0x396010 = _0x201d7d;
                        _0x886bcb[_0x396010(0x1cd)][_0x396010(0x1ad)] = _0x396010(0x27b), _0x886bcb['style']['visibility'] = _0x396010(0x1b2), _0x886bcb[_0x396010(0x1cd)][_0x396010(0x220)] = _0x396010(0x253), _0x886bcb[_0x396010(0x1cd)][_0x396010(0x20d)] = 'visible', console[_0x396010(0x22e)](_0x396010(0x26a), _0x2e4ddc);
                    });
                }
            }
        } catch (_0x325f7c) {
            console['error']('❌\x20Error\x20fetching\x20user\x20plan\x20for\x20card\x20management:', _0x325f7c);
            const _0x2c7cf2 = document['querySelectorAll']('.upgrade-unlock-card');
            _0x2c7cf2[_0x201d7d(0x266)](_0x5bad6b => {
                const _0x58be39 = _0x201d7d;
                _0x5bad6b[_0x58be39(0x1cd)][_0x58be39(0x1ad)] = 'flex', _0x5bad6b[_0x58be39(0x1cd)][_0x58be39(0x279)] = _0x58be39(0x1b2);
            });
        }
    }
    document[_0x57b23b(0x231)](_0x57b23b(0x1c6), _0x533ffa), document['readyState'] === _0x57b23b(0x229) ? document[_0x57b23b(0x231)](_0x57b23b(0x1c6), _0x533ffa) : _0x533ffa();
}
function _0x3147() {
    const _0x7dc0d6 = [
        'userTier',
        'API_BASE_URL',
        'platform_connections',
        'generateUserId',
        'youtube_connected',
        'application/json',
        '#d4edda',
        'unlinkYouTube',
        'connectYouTubeBtn',
        'stringify',
        'Reveal\x20Your\x20Earning\x20Potential',
        'importKey',
        '✅\x20[HIDDEN]\x20upgradeUnlockCard',
        'youtube_user_id',
        'basic',
        'getElementById',
        '\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22modal-section\x22>\x0a\x20\x20\x20\x20\x20\x20<h3\x20class=\x22section-title\x22>Connected\x20Platforms</h3>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22platformsList\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20',
        'setupModal',
        'SHA-256',
        '✓\x20Connected',
        'removeItem',
        'cssText',
        '&#x27;',
        'isConnected',
        'Invalid\x20auth\x20URL\x20protocol',
        'user_',
        'className',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22unlinkYouTube\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f8d7da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#721c24;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f5c6cb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Unlink\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'initiateYouTubeAuth',
        'length',
        '20px',
        'analyticsManager',
        'Connecting...',
        'CSRF\x20token\x20not\x20found\x20or\x20invalid',
        'object',
        'Disconnect\x20failed:\x20',
        'Link\x20your\x20YouTube\x20account\x20to\x20access\x20real-time\x20analytics\x20and\x20performance\x20insights',
        'padding',
        '✅\x20[TIER\x20CHECK]\x20User\x20plan\x20from\x20backend:',
        '/analytics/disconnect',
        '\x0a\x20\x20\x20\x20\x20\x20</h2>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22modal-subtitle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'youtube_token',
        '847750HmVTah',
        'Invalid\x20response\x20structure',
        'block',
        'YouTube\x20connected\x20successfully!',
        '7660nmlYnX',
        '.card-subtitle',
        '.input-section',
        'body',
        'overflow',
        'margin',
        'add',
        'showError',
        '50kSnAwW',
        'nonce',
        'Are\x20you\x20sure\x20you\x20want\x20to\x20unlink\x20YouTube?',
        'setupBanner',
        'sign',
        'onAuthSuccess',
        '#f8d7da',
        '○\x20Not\x20connected',
        'YouTube',
        '🎯\x20[ELEMENTS\x20FOUND]\x20premiumCard:',
        '\x0a\x20\x20\x20\x20<div\x20class=\x22modal-section\x22>\x0a\x20\x20\x20\x20\x20\x20<h3\x20class=\x22section-title\x22>Features\x20You\x27ll\x20Unlock</h3>\x0a\x20\x20\x20\x20\x20\x20<ul\x20class=\x22features-list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22feature-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22checkmark\x22>✓</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Live\x20analytics\x20streaming\x20directly\x20from\x20your\x20YouTube\x20channel\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22feature-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22checkmark\x22>✓</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Comprehensive\x20view\x20tracking\x20across\x20daily,\x20weekly,\x20and\x20monthly\x20periods\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22feature-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22checkmark\x22>✓</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Detailed\x20subscriber\x20growth\x20and\x20revenue\x20analytics\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22feature-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22checkmark\x22>✓</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Cross-platform\x20performance\x20comparison\x20and\x20insights\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<button\x20id=\x22connectYouTubeBtn\x22\x20class=\x22connect-btn\x22>\x0a\x20\x20\x20\x20\x20\x20Connect\x20YouTube\x20Channel\x0a\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20<p\x20class=\x22security-note\x22>\x0a\x20\x20\x20\x20\x20\x20Your\x20data\x20is\x20protected\x20with\x20industry-standard\x20OAuth\x202.0\x20authentication.\x20We\x20never\x20store\x20your\x20password.\x0a\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20',
        'Unknown\x20error',
        'hidden',
        'color',
        'auth_url',
        'height',
        'readyState',
        'plan',
        'fetchAnalyticsFromServer',
        '18mIvZIC',
        'include',
        'http://127.0.0.1:5500/api',
        'none\x20!important',
        '&lt;',
        'loading',
        'remove',
        'innerHTML',
        'meta[name=\x22csrf-token\x22]',
        '#f1f8f4',
        'log',
        'timestamp',
        'Empty\x20response\x20from\x20server',
        'addEventListener',
        'message',
        'querySelectorAll',
        'status',
        'warn',
        'pointerEvents',
        'padStart',
        '.upgrade-container',
        'getItem',
        'Upgrade\x20to\x20Prime\x20or\x20Elite\x20for\x20unlimited\x20access,\x20advanced\x20automation,\x20and\x20exclusive\x20features.',
        'Failed\x20to\x20initialize\x20YouTube\x20authentication:\x20invalid\x20auth\x20URL',
        'closeSetupModal',
        'raw',
        '.premium-card',
        'Failed\x20to\x20disconnect:\x20',
        'string',
        '11Uzotpt',
        '✅\x20[UPDATING]\x20Free\x20tier\x20card\x20messaging',
        'youtube',
        'width=600,height=700,left=100,top=100',
        'div',
        'Analytics\x20Dashboard',
        'trim',
        'HMAC',
        'GET',
        'floor',
        '1608uZIvZj',
        '/analytics/status',
        'valid',
        '✅\x20[UPDATING]\x20Basic\x20tier\x20card\x20messaging',
        'disabled',
        'prime',
        '/api/user/profile',
        'setupComplete',
        'auto',
        'connections',
        'POST',
        'classList',
        'HTTP\x20error!\x20status:\x20',
        'Failed\x20to\x20initialize\x20YouTube\x20authentication:\x20',
        'querySelector',
        '&#x2F;',
        '3530936yHixcS',
        'test',
        'showSuccess',
        'Response\x20too\x20large',
        '4497920TvxvWI',
        'card-subtitle',
        'upgradeUnlockCards:',
        ';\x20border-radius:\x208px;\x20background:\x20',
        'content-length',
        '✅\x20[HIDDEN]\x20premiumCard',
        'Auth\x20error:',
        'forEach',
        'subtle',
        '🔄\x20Fetching\x20user\x20plan\x20from\x20backend\x20for\x20card\x20management...',
        'unlinkPlatform',
        '✅\x20[SHOWN]\x20upgradeUnlockCard',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x2015px;\x20border:\x202px\x20solid\x20',
        '✅\x20[SHOWING]\x20Free/Basic\x20user\x20-\x20showing\x20upgrade\x20cards',
        'click',
        'platformsList',
        'tier',
        'from',
        'hidden-permanently',
        'free',
        'Request\x20signing\x20error:',
        'waitForAuth',
        'Unlock\x20Even\x20More\x20Power?',
        'textContent',
        'loadConnectionStatus',
        'target',
        'visibility',
        'toLowerCase',
        'flex',
        '#155724',
        'Failed\x20to\x20fetch\x20user\x20profile:\x20',
        'openModal',
        'true',
        '5xzJphN',
        'Connect\x20Your\x20Channel',
        'parse',
        '\x0a\x0a\x20\x20\x20\x20<div\x20id=\x22setupNotification\x22\x20class=\x22setup-notification\x22></div>\x0a\x20\x20</div>\x0a',
        '.onboarding-container',
        'appendChild',
        '.features-list',
        '#721c24',
        'initBanner',
        'display',
        '.card-content',
        'timeout',
        'headers',
        '40px\x200\x200\x200',
        'visible',
        '\x0a\x20\x20<style>\x0a\x20\x20\x20\x20:root\x20{\x0a\x20\x20\x20\x20\x20\x20--modal-bg:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20--modal-card-bg:\x20#fff8f3;\x0a\x20\x20\x20\x20\x20\x20--modal-text-primary:\x20#1a1a1a;\x0a\x20\x20\x20\x20\x20\x20--modal-text-secondary:\x20#5a5a5a;\x0a\x20\x20\x20\x20\x20\x20--modal-text-tertiary:\x20#8a8a8a;\x0a\x20\x20\x20\x20\x20\x20--modal-border:\x20#f5e6d3;\x0a\x20\x20\x20\x20\x20\x20--modal-accent:\x20#ff7a56;\x0a\x20\x20\x20\x20\x20\x20--modal-accent-hover:\x20#ff6542;\x0a\x20\x20\x20\x20\x20\x20--modal-shadow:\x200\x2020px\x2060px\x20rgba(255,\x20122,\x2086,\x200.12);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20:root.dark\x20{\x0a\x20\x20\x20\x20\x20\x20--modal-bg:\x20#1a1a1a;\x0a\x20\x20\x20\x20\x20\x20--modal-card-bg:\x20#2d2520;\x0a\x20\x20\x20\x20\x20\x20--modal-text-primary:\x20#f5f5f5;\x0a\x20\x20\x20\x20\x20\x20--modal-text-secondary:\x20#c9c9c9;\x0a\x20\x20\x20\x20\x20\x20--modal-text-tertiary:\x20#8a8a8a;\x0a\x20\x20\x20\x20\x20\x20--modal-border:\x20#3d3530;\x0a\x20\x20\x20\x20\x20\x20--modal-accent:\x20#ff8c66;\x0a\x20\x20\x20\x20\x20\x20--modal-accent-hover:\x20#ff7a56;\x0a\x20\x20\x20\x20\x20\x20--modal-shadow:\x200\x2020px\x2060px\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20@keyframes\x20modalFadeIn\x20{\x0a\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.95)\x20translateY(-10px);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1)\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20@keyframes\x20modalFadeOut\x20{\x0a\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1)\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.95)\x20translateY(-10px);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20@keyframes\x20slideInUp\x20{\x0a\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(10px);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20@keyframes\x20checkmarkPop\x20{\x0a\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.8);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.1);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.onboarding-container\x20{\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-bg);\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x20var(--modal-shadow);\x0a\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20var(--modal-border);\x0a\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20850px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2070px\x2080px;\x0a\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20max-height:\x2085vh;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20animation:\x20modalFadeIn\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.onboarding-container.closing\x20{\x0a\x20\x20\x20\x20\x20\x20animation:\x20modalFadeOut\x200.3s\x20ease-out\x20forwards;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-close-btn\x20{\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20top:\x2028px;\x0a\x20\x20\x20\x20\x20\x20right:\x2028px;\x0a\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2032px;\x0a\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-tertiary);\x0a\x20\x20\x20\x20\x20\x20width:\x2044px;\x0a\x20\x20\x20\x20\x20\x20height:\x2044px;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-close-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-card-bg);\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-primary);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2050px;\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.4s\x20ease-out\x200.1s\x20both;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-title\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2036px;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2014px;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-primary);\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20letter-spacing:\x20-0.02em;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-subtitle\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-secondary);\x0a\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-section\x20{\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-card-bg);\x0a\x20\x20\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2028px;\x0a\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20var(--modal-border);\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.4s\x20ease-out\x200.2s\x20both;\x0a\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.modal-section:hover\x20{\x0a\x20\x20\x20\x20\x20\x20border-color:\x20var(--modal-accent);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.section-title\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2020px;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-primary);\x0a\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20letter-spacing:\x20-0.01em;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.features-list\x20{\x0a\x20\x20\x20\x20\x20\x20list-style:\x20none;\x0a\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.feature-item\x20{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2016px;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-secondary);\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20line-height:\x201.7;\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.4s\x20ease-out\x20both;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.feature-item:nth-child(1)\x20{\x20animation-delay:\x200.3s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(2)\x20{\x20animation-delay:\x200.35s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(3)\x20{\x20animation-delay:\x200.4s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(4)\x20{\x20animation-delay:\x200.45s;\x20}\x0a\x0a\x20\x20\x20\x20.feature-item:last-child\x20{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.checkmark\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20min-width:\x2024px;\x0a\x20\x20\x20\x20\x20\x20height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-accent);\x0a\x20\x20\x20\x20\x20\x20margin-right:\x2014px;\x0a\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20animation:\x20checkmarkPop\x200.4s\x20ease-out\x20both;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.feature-item:nth-child(1)\x20.checkmark\x20{\x20animation-delay:\x200.3s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(2)\x20.checkmark\x20{\x20animation-delay:\x200.35s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(3)\x20.checkmark\x20{\x20animation-delay:\x200.4s;\x20}\x0a\x20\x20\x20\x20.feature-item:nth-child(4)\x20.checkmark\x20{\x20animation-delay:\x200.45s;\x20}\x0a\x0a\x20\x20\x20\x20.connect-btn\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20padding:\x2018px\x2024px;\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-accent);\x0a\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2016px;\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.4s\x20ease-out\x200.5s\x20both;\x0a\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20letter-spacing:\x200.01em;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.connect-btn::before\x20{\x0a\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20left:\x20-100%;\x0a\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20transparent,\x20rgba(255,\x20255,\x20255,\x200.2),\x20transparent);\x0a\x20\x20\x20\x20\x20\x20transition:\x20left\x200.5s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.connect-btn:hover::before\x20{\x0a\x20\x20\x20\x20\x20\x20left:\x20100%;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.connect-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20background:\x20var(--modal-accent-hover);\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x200\x206px\x2020px\x20rgba(255,\x20122,\x2086,\x200.3);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.connect-btn:active\x20{\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.security-note\x20{\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--modal-text-tertiary);\x0a\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.4s\x20ease-out\x200.55s\x20both;\x0a\x20\x20\x20\x20\x20\x20line-height:\x201.5;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.setup-notification\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20margin-top:\x2024px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2018px;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20animation:\x20slideInUp\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20}\x0a\x20\x20</style>\x0a\x0a\x20\x20<div\x20class=\x22onboarding-container\x22>\x0a\x20\x20\x20\x20<button\x20id=\x22closeSetupModal\x22\x20class=\x22modal-close-btn\x22>×</button>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'closing',
        'getRandomValues',
        'error',
        'Invalid\x20auth\x20URL\x20format',
        'signature',
        'elite',
        'join',
        'YouTube\x20disconnected',
        'json',
        'Invalid\x20JSON\x20response',
        '416118ERODmd',
        '/analytics/youtube/auth',
        'Manage\x20and\x20monitor\x20all\x20your\x20platform\x20connections',
        'connected',
        'background',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Invalid\x20user\x20ID\x20format',
        'substr',
        'DOMContentLoaded',
        'populatePlatformsList',
        'toString',
        'createElement',
        '&gt;',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(5px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Connect\x20YouTube',
        'style',
        'isConnecting',
        '57APjrww',
        '470294NVPUiG',
        'none',
        'userId',
        '&amp;',
        'visibilitychange',
        '📱\x20Page\x20became\x20visible\x20-\x20refreshing\x20upgrade\x20card\x20visibility',
        '271258hrKjiQ',
        'font-size:\x2014px;\x20color:\x20#666;\x20margin-top:\x208px;\x20margin-bottom:\x2016px;',
        'content',
        'setupNotification',
        'setItem'
    ];
    _0x3147 = function () {
        return _0x7dc0d6;
    };
    return _0x3147();
}