const _0xd702a8 = _0xb4d5;
(function (_0x99f15, _0x214150) {
    const _0x636845 = _0xb4d5, _0x47cef9 = _0x99f15();
    while (!![]) {
        try {
            const _0x1b2597 = parseInt(_0x636845(0x137)) / 0x1 + -parseInt(_0x636845(0x116)) / 0x2 + parseInt(_0x636845(0x170)) / 0x3 * (-parseInt(_0x636845(0x175)) / 0x4) + parseInt(_0x636845(0x142)) / 0x5 * (parseInt(_0x636845(0x129)) / 0x6) + -parseInt(_0x636845(0x138)) / 0x7 * (parseInt(_0x636845(0x164)) / 0x8) + parseInt(_0x636845(0x13f)) / 0x9 + parseInt(_0x636845(0xfa)) / 0xa;
            if (_0x1b2597 === _0x214150)
                break;
            else
                _0x47cef9['push'](_0x47cef9['shift']());
        } catch (_0x1e2c0b) {
            _0x47cef9['push'](_0x47cef9['shift']());
        }
    }
}(_0x2720, 0x6b0b0));
function escapeHtml(_0x7c04f) {
    const _0x4baaa8 = _0xb4d5;
    if (typeof _0x7c04f !== _0x4baaa8(0x111))
        return '';
    const _0x2d43e5 = {
        '&': '&amp;',
        '<': _0x4baaa8(0x165),
        '>': _0x4baaa8(0x10d),
        '\x22': _0x4baaa8(0x15d),
        '\x27': '&#x27;',
        '/': '&#x2F;'
    };
    return _0x7c04f['replace'](/[&<>"'\/]/g, _0x4e0119 => _0x2d43e5[_0x4e0119] || _0x4e0119);
}
function getCsrfToken() {
    const _0x412839 = _0xb4d5, _0x27bd08 = document['querySelector'](_0x412839(0xf9))?.[_0x412839(0x174)]('content');
    if (!_0x27bd08 || typeof _0x27bd08 !== _0x412839(0x111) || _0x27bd08[_0x412839(0xfb)] < 0xa)
        return '';
    return _0x27bd08[_0x412839(0x13b)]();
}
function validatePlatformName(_0x4ab0ee) {
    const _0x1cb07e = _0xb4d5;
    if (typeof _0x4ab0ee !== _0x1cb07e(0x111))
        return ![];
    if (_0x4ab0ee[_0x1cb07e(0xfb)] === 0x0 || _0x4ab0ee[_0x1cb07e(0xfb)] > 0x32)
        return ![];
    return /^[a-zA-Z0-9_-]{1,50}$/['test'](_0x4ab0ee);
}
function _0xb4d5(_0x42a074, _0xf374b1) {
    _0x42a074 = _0x42a074 - 0xf4;
    const _0x27209e = _0x2720();
    let _0xb4d5cb = _0x27209e[_0x42a074];
    return _0xb4d5cb;
}
function validateUserId(_0x4f9130) {
    const _0x451fdf = _0xb4d5;
    if (typeof _0x4f9130 !== _0x451fdf(0x111))
        return ![];
    if (_0x4f9130['length'] === 0x0 || _0x4f9130[_0x451fdf(0xfb)] > 0x64)
        return ![];
    return /^[a-zA-Z0-9_-]+$/[_0x451fdf(0x147)](_0x4f9130);
}
async function _signRequest(_0x5893ad, _0x369f5d = _0xd702a8(0x146), _0x594f2f = '') {
    const _0x5db6e1 = _0xd702a8;
    try {
        const _0x50cfec = Math[_0x5db6e1(0x10e)](Date[_0x5db6e1(0x143)]() / 0x3e8)['toString'](), _0x38fddf = Array['from'](crypto[_0x5db6e1(0x10a)](new Uint8Array(0x10)))[_0x5db6e1(0x12f)](_0x38f21c => _0x38f21c[_0x5db6e1(0x11c)](0x10)['padStart'](0x2, '0'))['join'](''), _0x9a50d5 = getCsrfToken();
        if (!_0x9a50d5)
            return {
                'timestamp': _0x50cfec,
                'nonce': _0x38fddf
            };
        const _0x377d46 = new TextEncoder(), _0x5c3b7b = _0x377d46[_0x5db6e1(0x108)](_0x9a50d5), _0x5ce03d = await crypto[_0x5db6e1(0x171)][_0x5db6e1(0x153)](_0x5db6e1(0x176), _0x5c3b7b, {
                'name': _0x5db6e1(0x16e),
                'hash': _0x5db6e1(0x110)
            }, ![], ['sign']), _0x4dad9a = _0x377d46[_0x5db6e1(0x108)](_0x5893ad + '|' + _0x369f5d + '|' + _0x50cfec + '|' + _0x38fddf), _0x5392f6 = await crypto['subtle'][_0x5db6e1(0xf7)](_0x5db6e1(0x16e), _0x5ce03d, _0x4dad9a), _0x400d75 = Array[_0x5db6e1(0x13e)](new Uint8Array(_0x5392f6))[_0x5db6e1(0x12f)](_0x5251bc => _0x5251bc[_0x5db6e1(0x11c)](0x10)[_0x5db6e1(0x11b)](0x2, '0'))[_0x5db6e1(0x102)]('');
        return {
            'timestamp': _0x50cfec,
            'nonce': _0x38fddf,
            'signature': _0x400d75
        };
    } catch (_0x39f1b7) {
        return console[_0x5db6e1(0xff)](_0x5db6e1(0x144), _0x39f1b7), {};
    }
}
function safeSetHTML(_0x34c07e, _0x2d9c04) {
    const _0x1a0ae1 = _0xd702a8;
    if (!_0x34c07e)
        return;
    typeof _0x2d9c04 === 'string' && _0x2d9c04[_0x1a0ae1(0xfb)] < 0xc350 && (_0x34c07e[_0x1a0ae1(0x178)] = _0x2d9c04);
}
class SettingsManager {
    constructor() {
        const _0x55e580 = _0xd702a8;
        this[_0x55e580(0x14e)] = window[_0x55e580(0x163)] || _0x55e580(0xf4), this[_0x55e580(0xfd)] = localStorage[_0x55e580(0x16d)](_0x55e580(0x12c)) || this['generateUserId'](), this[_0x55e580(0x16f)] = JSON[_0x55e580(0xf8)](localStorage['getItem'](_0x55e580(0x159)) || '{}'), this[_0x55e580(0x125)]();
    }
    [_0xd702a8(0x125)]() {
        const _0x3458fa = _0xd702a8;
        window[_0x3458fa(0x11d)]('storage', _0x27301d => {
            const _0x13d79b = _0x3458fa;
            _0x27301d[_0x13d79b(0x134)] === _0x13d79b(0x159) && (this[_0x13d79b(0x16f)] = JSON[_0x13d79b(0xf8)](_0x27301d[_0x13d79b(0x160)] || '{}'), this['updateConnectionsDisplay']());
        }), this['updateConnectionsDisplay']();
        const _0x785437 = document['getElementById'](_0x3458fa(0x128));
        _0x785437 && _0x785437[_0x3458fa(0x11d)]('click', () => {
            const _0x18315f = _0x3458fa;
            window[_0x18315f(0x168)] && window[_0x18315f(0x168)]['openModal']();
        });
    }
    [_0xd702a8(0x123)]() {
        const _0x98aa87 = _0xd702a8, _0x2471a0 = document[_0x98aa87(0x109)]('platformConnectionsContainer'), _0x2034b1 = _0x2471a0?.['parentElement'][_0x98aa87(0x148)](_0x98aa87(0x12d)), _0x15efd1 = Object['values'](this['connections'])[_0x98aa87(0x131)](_0x320f8e => _0x320f8e[_0x98aa87(0x12e)]);
        _0x2471a0 && _0x2034b1 && (_0x15efd1 ? (_0x2471a0[_0x98aa87(0x119)][_0x98aa87(0x15a)] = _0x98aa87(0x12b), _0x2034b1[_0x98aa87(0x119)][_0x98aa87(0x15a)] = _0x98aa87(0x114), this[_0x98aa87(0xf6)]()) : (_0x2471a0[_0x98aa87(0x119)][_0x98aa87(0x15a)] = 'none', _0x2034b1[_0x98aa87(0x119)][_0x98aa87(0x15a)] = 'block'));
    }
    [_0xd702a8(0xf6)]() {
        const _0xeb561d = _0xd702a8, _0x4a2e24 = document[_0xeb561d(0x109)](_0xeb561d(0x177));
        if (!_0x4a2e24)
            return;
        while (_0x4a2e24['firstChild']) {
            _0x4a2e24['removeChild'](_0x4a2e24[_0xeb561d(0x157)]);
        }
        const _0x15e347 = [{
                'key': 'youtube',
                'name': 'YouTube'
            }];
        _0x15e347[_0xeb561d(0x120)](_0x55bd78 => {
            const _0x443531 = _0xeb561d;
            if (!validatePlatformName(_0x55bd78[_0x443531(0x134)]) || !validatePlatformName(_0x55bd78['name']))
                return;
            const _0x226fd0 = this[_0x443531(0x16f)][_0x55bd78[_0x443531(0x134)]], _0x3e4106 = _0x226fd0?.[_0x443531(0x12e)] === !![], _0x1cbf1b = document[_0x443531(0x139)]('div');
            _0x1cbf1b[_0x443531(0x119)]['cssText'] = _0x443531(0x152) + (_0x3e4106 ? _0x443531(0x149) : _0x443531(0x166)) + _0x443531(0x145) + (_0x3e4106 ? '#f1f8f4' : _0x443531(0x122)) + _0x443531(0x11a);
            const _0x4d92c4 = document['createElement']('div');
            _0x4d92c4[_0x443531(0x119)][_0x443531(0x141)] = 'display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;';
            const _0xb08c1f = document[_0x443531(0x139)](_0x443531(0x113));
            _0xb08c1f['style'][_0x443531(0x141)] = _0x443531(0x140);
            const _0x588604 = document[_0x443531(0x139)](_0x443531(0x127));
            _0x588604[_0x443531(0x119)][_0x443531(0x141)] = 'font-size:\x2020px;\x20width:\x2024px;\x20height:\x2024px;\x20display:\x20inline-flex;\x20align-items:\x20center;\x20justify-content:\x20center;', _0x588604[_0x443531(0x178)] = '<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2028\x2020\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M27.4313\x203.11C27.1213\x201.89\x2026.1313\x200.91\x2024.9113\x200.6C22.7313\x200\x2014.0013\x200\x2014.0013\x200C14.0013\x200\x205.27128\x200\x203.09128\x200.6C1.87128\x200.91\x200.881281\x201.89\x200.571281\x203.11C0.261281\x204.33\x200.00128174\x206.6\x200.00128174\x2010C0.00128174\x2013.4\x200.261281\x2015.67\x200.571281\x2016.89C0.881281\x2018.11\x201.87128\x2019.09\x203.09128\x2019.4C5.27128\x2020\x2014.0013\x2020\x2014.0013\x2020C14.0013\x2020\x2022.7313\x2020\x2024.9113\x2019.4C26.1313\x2019.09\x2027.1213\x2018.11\x2027.4313\x2016.89C27.7413\x2015.67\x2028.0013\x2013.4\x2028.0013\x2010C28.0013\x206.6\x2027.7413\x204.33\x2027.4313\x203.11Z\x22\x20fill=\x22#FF0000\x22/><path\x20d=\x22M11.2013\x2014.2V5.8L18.2013\x2010L11.2013\x2014.2Z\x22\x20fill=\x22white\x22/></svg>';
            const _0x27bff5 = document[_0x443531(0x139)]('div'), _0x25aaa4 = document[_0x443531(0x139)]('div');
            _0x25aaa4[_0x443531(0x119)][_0x443531(0x141)] = 'font-family:\x20\x27Archivo\x20Black\x27,\x20sans-serif;\x20font-weight:\x20700;\x20color:\x20#333;\x20font-size:\x2014px;\x20text-transform:\x20uppercase;\x20letter-spacing:\x200.05em;', _0x25aaa4[_0x443531(0xfe)] = escapeHtml(_0x55bd78['name']);
            const _0x3c30ae = document[_0x443531(0x139)](_0x443531(0x113));
            _0x3c30ae[_0x443531(0x119)][_0x443531(0x141)] = 'font-size:\x2011px;\x20color:\x20#666;', _0x3c30ae[_0x443531(0xfe)] = _0x3e4106 ? _0x443531(0x16c) : _0x443531(0x107), _0x27bff5[_0x443531(0x136)](_0x25aaa4), _0x27bff5[_0x443531(0x136)](_0x3c30ae), _0xb08c1f[_0x443531(0x136)](_0x588604), _0xb08c1f[_0x443531(0x136)](_0x27bff5);
            if (_0x3e4106) {
                const _0x1d36d1 = document[_0x443531(0x139)](_0x443531(0x162));
                _0x1d36d1[_0x443531(0x130)] = _0x443531(0x13a), _0x1d36d1[_0x443531(0x112)](_0x443531(0x115), escapeHtml(_0x55bd78['key'])), _0x1d36d1['style'][_0x443531(0x141)] = _0x443531(0x15e), _0x1d36d1[_0x443531(0xfe)] = _0x443531(0x126), _0x1d36d1['addEventListener'](_0x443531(0x13d), () => {
                    const _0x235238 = _0x443531, _0x8b3c9f = _0x1d36d1['getAttribute'](_0x235238(0x115));
                    confirm(_0x235238(0x121) + escapeHtml(this[_0x235238(0x100)](_0x8b3c9f)) + '?') && this[_0x235238(0x13c)](_0x8b3c9f);
                }), _0x4d92c4[_0x443531(0x136)](_0xb08c1f), _0x4d92c4[_0x443531(0x136)](_0x1d36d1);
            } else
                _0x4d92c4['appendChild'](_0xb08c1f);
            _0x1cbf1b[_0x443531(0x136)](_0x4d92c4), _0x4a2e24['appendChild'](_0x1cbf1b);
        });
    }
    async [_0xd702a8(0x13c)](_0x34c3a6) {
        const _0x3d512b = _0xd702a8;
        try {
            if (!validatePlatformName(_0x34c3a6))
                throw new Error(_0x3d512b(0x104));
            if (!validateUserId(this[_0x3d512b(0xfd)]))
                throw new Error('Invalid\x20user\x20ID');
            const _0x590b88 = JSON[_0x3d512b(0x11f)]({ 'user_id': this[_0x3d512b(0xfd)] }), _0x5de9aa = getCsrfToken(), _0x59e534 = await _signRequest(_0x3d512b(0x118), _0x3d512b(0x146), _0x590b88);
            if (_0x34c3a6 === _0x3d512b(0x11e)) {
                const _0x1e4cc9 = await fetch(this[_0x3d512b(0x14e)] + _0x3d512b(0x118), {
                    'method': _0x3d512b(0x146),
                    'headers': {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': _0x5de9aa,
                        'X-Request-Timestamp': _0x59e534[_0x3d512b(0x14f)] || '',
                        'X-Request-Nonce': _0x59e534[_0x3d512b(0xf5)] || '',
                        'X-Request-Signature': _0x59e534[_0x3d512b(0x117)] || ''
                    },
                    'body': _0x590b88,
                    'credentials': _0x3d512b(0x10b),
                    'signal': AbortSignal['timeout'](0x7530)
                });
                if (!_0x1e4cc9['ok'] && _0x1e4cc9[_0x3d512b(0x15c)] !== 0xc8 && _0x1e4cc9[_0x3d512b(0x15c)] !== 0xcc)
                    throw new Error(_0x3d512b(0x16b) + _0x1e4cc9[_0x3d512b(0x15c)]);
                localStorage[_0x3d512b(0x155)](_0x3d512b(0x14b)), localStorage[_0x3d512b(0x155)](_0x3d512b(0x105)), localStorage['removeItem'](_0x3d512b(0x132));
            }
            this[_0x3d512b(0x16f)][_0x34c3a6] && (this[_0x3d512b(0x16f)][_0x34c3a6]['connected'] = ![]);
            typeof this['connections'] === _0x3d512b(0x167) && localStorage[_0x3d512b(0x135)]('platform_connections', JSON['stringify'](this['connections']));
            const _0x39be26 = document[_0x3d512b(0x109)](_0x3d512b(0x101));
            if (_0x39be26)
                _0x39be26['style'][_0x3d512b(0x15a)] = 'block';
            window[_0x3d512b(0x103)] && (window[_0x3d512b(0x103)][_0x3d512b(0x172)] = ![], window[_0x3d512b(0x103)][_0x3d512b(0x15b)]()), this[_0x3d512b(0x123)](), this[_0x3d512b(0x16a)](this[_0x3d512b(0x100)](_0x34c3a6) + _0x3d512b(0x133));
        } catch (_0x59c424) {
            this[_0x3d512b(0x16a)]('Failed\x20to\x20disconnect:\x20' + _0x59c424['message'], !![]);
        }
    }
    ['getPlatformName'](_0x313d1c) {
        const _0x5978c5 = _0xd702a8, _0x421971 = { 'youtube': _0x5978c5(0x10c) };
        return _0x421971[_0x313d1c] || _0x313d1c;
    }
    ['generateUserId']() {
        const _0xa22d20 = _0xd702a8;
        let _0x344c51 = localStorage[_0xa22d20(0x16d)](_0xa22d20(0x12c));
        return !_0x344c51 && (_0x344c51 = _0xa22d20(0x161) + Math[_0xa22d20(0x158)]()['toString'](0x24)['substr'](0x2, 0x9), localStorage[_0xa22d20(0x135)](_0xa22d20(0x12c), _0x344c51)), _0x344c51;
    }
    [_0xd702a8(0x16a)](_0x3e7452, _0x1c2041 = ![]) {
        const _0x5e1788 = _0xd702a8, _0x263324 = document[_0x5e1788(0x139)]('div');
        _0x263324[_0x5e1788(0x119)][_0x5e1788(0x141)] = _0x5e1788(0x173) + (_0x1c2041 ? _0x5e1788(0x10f) : _0x5e1788(0x149)) + _0x5e1788(0x14d) + (_0x1c2041 ? _0x5e1788(0x106) : _0x5e1788(0x154)) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20' + (_0x1c2041 ? _0x5e1788(0xfc) : _0x5e1788(0x150)) + _0x5e1788(0x169), _0x263324['textContent'] = _0x3e7452, document[_0x5e1788(0x156)]['appendChild'](_0x263324), setTimeout(() => {
            const _0x3f663e = _0x5e1788;
            _0x263324['style'][_0x3f663e(0x14a)] = _0x3f663e(0x124), setTimeout(() => _0x263324['remove'](), 0x12c);
        }, 0xbb8);
    }
}
document[_0xd702a8(0x11d)](_0xd702a8(0x12a), () => {
    const _0x9b55cb = _0xd702a8;
    window[_0x9b55cb(0x151)] = new SettingsManager();
});
const settingsStyle = document[_0xd702a8(0x139)]('style');
settingsStyle[_0xd702a8(0xfe)] = _0xd702a8(0x14c), document[_0xd702a8(0x15f)][_0xd702a8(0x136)](settingsStyle);
function _0x2720() {
    const _0x375eea = [
        'meta[name=\x22csrf-token\x22]',
        '3048880pEbrOp',
        'length',
        '#f5c6cb',
        'userId',
        'textContent',
        'error',
        'getPlatformName',
        'setupBanner',
        'join',
        'analyticsManager',
        'Invalid\x20platform\x20name',
        'youtube_token_time',
        '#721c24',
        '○\x20Not\x20connected',
        'encode',
        'getElementById',
        'getRandomValues',
        'include',
        'YouTube',
        '&gt;',
        'floor',
        '#f8d7da',
        'SHA-256',
        'string',
        'setAttribute',
        'div',
        'none',
        'data-platform',
        '738960HxBUHX',
        'signature',
        '/analytics/disconnect',
        'style',
        ';\x20margin-bottom:\x2010px;',
        'padStart',
        'toString',
        'addEventListener',
        'youtube',
        'stringify',
        'forEach',
        'Unlink\x20',
        '#f8f9fa',
        'updateConnectionsDisplay',
        'slideOut\x200.3s\x20ease',
        'init',
        'Unlink',
        'span',
        'manageConnectionsBtn',
        '33804DynHpL',
        'DOMContentLoaded',
        'block',
        'youtube_user_id',
        'div:last-child',
        'connected',
        'map',
        'className',
        'some',
        'youtube_token',
        '\x20disconnected\x20successfully',
        'key',
        'setItem',
        'appendChild',
        '15306tXLJax',
        '63bKVBmS',
        'createElement',
        'unlink-btn',
        'trim',
        'unlinkPlatform',
        'click',
        'from',
        '5857902auYVbB',
        'display:\x20flex;\x20align-items:\x20center;\x20gap:\x2012px;',
        'cssText',
        '200kCjXOw',
        'now',
        'Request\x20signing\x20error:',
        ';\x20border-radius:\x208px;\x20background:\x20',
        'POST',
        'test',
        'querySelector',
        '#d4edda',
        'animation',
        'youtube_connected',
        '\x0a\x20\x20\x20\x20@keyframes\x20slideIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@keyframes\x20slideOut\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20',
        'apiBase',
        'timestamp',
        '#c3e6cb',
        'settingsManager',
        'padding:\x2015px;\x20border:\x202px\x20solid\x20',
        'importKey',
        '#155724',
        'removeItem',
        'body',
        'firstChild',
        'random',
        'platform_connections',
        'display',
        'loadAnalyticsData',
        'status',
        '&quot;',
        'padding:\x206px\x2012px;\x20background:\x20#f8d7da;\x20color:\x20#721c24;\x20border:\x201px\x20solid\x20#f5c6cb;\x20border-radius:\x206px;\x20cursor:\x20pointer;\x20font-size:\x2011px;\x20font-weight:\x20600;\x20transition:\x20all\x200.3s\x20ease;',
        'head',
        'newValue',
        'user_',
        'button',
        'API_BASE_URL',
        '6016alyLhF',
        '&lt;',
        '#e9ecef',
        'object',
        'setupModal',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'showNotification',
        'Disconnect\x20failed:\x20',
        '✓\x20Connected',
        'getItem',
        'HMAC',
        'connections',
        '3eaLyOZ',
        'subtle',
        'isConnected',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20',
        'getAttribute',
        '1526944UNwvkd',
        'raw',
        'platformsList',
        'innerHTML',
        'https://api.solisai.video/api',
        'nonce',
        'populatePlatformsList',
        'sign',
        'parse'
    ];
    _0x2720 = function () {
        return _0x375eea;
    };
    return _0x2720();
}