function _0x5a0e89(_0x3faebb) {
    if (typeof _0x3faebb !== 'string')
        return '';
    const _0x4680f7 = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\x22': '&quot;',
        '\x27': '&#x27;',
        '/': '&#x2F;'
    };
    return _0x3faebb['replace'](/[&<>"'\/]/g, _0x10cdcb => _0x4680f7[_0x10cdcb] || _0x10cdcb);
}

function _0x3a2be7() {
    const _0x346d1d = document['querySelector']('meta[name=\x22csrf-token\x22]')?.['getAttribute']('content');
    if (!_0x346d1d || typeof _0x346d1d !== 'string' || _0x346d1d['length'] < 0xa)
        return '';
    return _0x346d1d['trim']();
}

function _0x5f2610(_0x56b65e) {
    if (typeof _0x56b65e !== 'string')
        return ![];
    if (_0x56b65e['length'] === 0x0 || _0x56b65e['length'] > 0x32)
        return ![];
    return /^[a-zA-Z0-9_-]{1,50}$/ ['test'](_0x56b65e);
}

function _0x1030db(_0x3d45b4) {
    if (typeof _0x3d45b4 !== 'string')
        return ![];
    if (_0x3d45b4['length'] === 0x0 || _0x3d45b4['length'] > 0x64)
        return ![];
    return /^[a-zA-Z0-9_-]+$/ ['test'](_0x3d45b4);
}
async function _0x191951(_0x60868d, _0x30bf3f = 'POST', _0xfa3b3b = '') {
    try {
        const _0x1c94e6 = Math['floor'](Date['now']() / 0x3e8)['toString'](),
            _0x350c16 = Array['from'](crypto['getRandomValues'](new Uint8Array(0x10)))['map'](_0x4fcc85 => _0x4fcc85['toString'](0x10)['padStart'](0x2, '0'))['join'](''),
            _0x2c6cf5 = _0x3a2be7();
        if (!_0x2c6cf5)
            return {
                'timestamp': _0x1c94e6,
                'nonce': _0x350c16
            };
        const _0x4cff8f = new TextEncoder(),
            _0xb88880 = _0x4cff8f['encode'](_0x2c6cf5),
            _0x46a866 = await crypto['subtle']['importKey']('raw', _0xb88880, {
                'name': 'HMAC',
                'hash': 'SHA-256'
            }, ![], ['sign']),
            _0x32aa9e = _0x4cff8f['encode'](_0x60868d + '|' + _0x30bf3f + '|' + _0x1c94e6 + '|' + _0x350c16),
            _0x36729c = await crypto['subtle']['sign']('HMAC', _0x46a866, _0x32aa9e),
            _0x221792 = Array['from'](new Uint8Array(_0x36729c))['map'](_0x73cb1c => _0x73cb1c['toString'](0x10)['padStart'](0x2, '0'))['join']('');
        return {
            'timestamp': _0x1c94e6,
            'nonce': _0x350c16,
            'signature': _0x221792
        };
    } catch (_0x3e3e4a) {
        return console['error']('Request\x20signing\x20error:', _0x3e3e4a), {};
    }
}

function _0x35c74(_0x3191e8, _0x191c7a) {
    if (!_0x3191e8)
        return;
    typeof _0x191c7a === 'string' && _0x191c7a['length'] < 0xc350 && (_0x3191e8['innerHTML'] = _0x191c7a);
}
class _0x1993f2 {
    constructor() {
            this['apiBase'] = window['API_BASE_URL'] || 'https://api.solisai.video/api', this['userId'] = localStorage['getItem']('youtube_user_id') || this['generateUserId'](), this['connections'] = JSON['parse'](localStorage['getItem']('platform_connections') || '{}'), this['init']();
        }
    ['init']() {
            window['addEventListener']('storage', _0x11dee1 => {
                _0x11dee1['key'] === 'platform_connections' && (this['connections'] = JSON['parse'](_0x11dee1['newValue'] || '{}'), this['updateConnectionsDisplay']());
            }), this['updateConnectionsDisplay']();
            const _0x255bea = document['getElementById']('manageConnectionsBtn');
            _0x255bea && _0x255bea['addEventListener']('click', () => {
                window['setupModal'] && window['setupModal']['openModal']();
            });
        }
    ['updateConnectionsDisplay']() {
            const _0x1bf0a2 = document['getElementById']('platformConnectionsContainer'),
                _0xb70f4a = _0x1bf0a2?.['parentElement']['querySelector']('div:last-child'),
                _0x5f2deb = Object['values'](this['connections'])['some'](_0x2bb772 => _0x2bb772['connected']);
            _0x1bf0a2 && _0xb70f4a && (_0x5f2deb ? (_0x1bf0a2['style']['display'] = 'block', _0xb70f4a['style']['display'] = 'none', this['populatePlatformsList']()) : (_0x1bf0a2['style']['display'] = 'none', _0xb70f4a['style']['display'] = 'block'));
        }
    ['populatePlatformsList']() {
            const _0x5d54a1 = document['getElementById']('platformsList');
            if (!_0x5d54a1)
                return;
            while (_0x5d54a1['firstChild']) {
                _0x5d54a1['removeChild'](_0x5d54a1['firstChild']);
            }
            const _0x1d2f2c = [{
                'key': 'youtube',
                'name': 'YouTube'
            }];
            _0x1d2f2c['forEach'](_0x3fe703 => {
                if (!_0x5f2610(_0x3fe703['key']) || !_0x5f2610(_0x3fe703['name']))
                    return;
                const _0x6593a = this['connections'][_0x3fe703['key']],
                    _0x29fae4 = _0x6593a?.['connected'] === !![],
                    _0x2b4cf3 = document['createElement']('div');
                _0x2b4cf3['style']['cssText'] = 'padding:\x2015px;\x20border:\x202px\x20solid\x20' + (_0x29fae4 ? '#d4edda' : '#e9ecef') + ';\x20border-radius:\x208px;\x20background:\x20' + (_0x29fae4 ? '#f1f8f4' : '#f8f9fa') + ';\x20margin-bottom:\x2010px;';
                const _0xa7d8c6 = document['createElement']('div');
                _0xa7d8c6['style']['cssText'] = 'display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;';
                const _0x359c4e = document['createElement']('div');
                _0x359c4e['style']['cssText'] = 'display:\x20flex;\x20align-items:\x20center;\x20gap:\x2012px;';
                const _0x2afc02 = document['createElement']('span');
                _0x2afc02['style']['cssText'] = 'font-size:\x2020px;\x20width:\x2024px;\x20height:\x2024px;\x20display:\x20inline-flex;\x20align-items:\x20center;\x20justify-content:\x20center;', _0x2afc02['innerHTML'] = '<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2028\x2020\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M27.4313\x203.11C27.1213\x201.89\x2026.1313\x200.91\x2024.9113\x200.6C22.7313\x200\x2014.0013\x200\x2014.0013\x200C14.0013\x200\x205.27128\x200\x203.09128\x200.6C1.87128\x200.91\x200.881281\x201.89\x200.571281\x203.11C0.261281\x204.33\x200.00128174\x206.6\x200.00128174\x2010C0.00128174\x2013.4\x200.261281\x2015.67\x200.571281\x2016.89C0.881281\x2018.11\x201.87128\x2019.09\x203.09128\x2019.4C5.27128\x2020\x2014.0013\x2020\x2014.0013\x2020C14.0013\x2020\x2022.7313\x2020\x2024.9113\x2019.4C26.1313\x2019.09\x2027.1213\x2018.11\x2027.4313\x2016.89C27.7413\x2015.67\x2028.0013\x2013.4\x2028.0013\x2010C28.0013\x206.6\x2027.7413\x204.33\x2027.4313\x203.11Z\x22\x20fill=\x22#FF0000\x22/><path\x20d=\x22M11.2013\x2014.2V5.8L18.2013\x2010L11.2013\x2014.2Z\x22\x20fill=\x22white\x22/></svg>';
                const _0x1e9429 = document['createElement']('div'),
                    _0x41a7fe = document['createElement']('div');
                _0x41a7fe['style']['cssText'] = 'font-family:\x20\x27Archivo\x20Black\x27,\x20sans-serif;\x20font-weight:\x20700;\x20color:\x20#333;\x20font-size:\x2014px;\x20text-transform:\x20uppercase;\x20letter-spacing:\x200.05em;', _0x41a7fe['textContent'] = _0x5a0e89(_0x3fe703['name']);
                const _0x3508b3 = document['createElement']('div');
                _0x3508b3['style']['cssText'] = 'font-size:\x2011px;\x20color:\x20#666;', _0x3508b3['textContent'] = _0x29fae4 ? '✓\x20Connected' : '○\x20Not\x20connected', _0x1e9429['appendChild'](_0x41a7fe), _0x1e9429['appendChild'](_0x3508b3), _0x359c4e['appendChild'](_0x2afc02), _0x359c4e['appendChild'](_0x1e9429);
                if (_0x29fae4) {
                    const _0x4b3121 = document['createElement']('button');
                    _0x4b3121['className'] = 'unlink-btn', _0x4b3121['setAttribute']('data-platform', _0x5a0e89(_0x3fe703['key'])), _0x4b3121['style']['cssText'] = 'padding:\x206px\x2012px;\x20background:\x20#f8d7da;\x20color:\x20#721c24;\x20border:\x201px\x20solid\x20#f5c6cb;\x20border-radius:\x206px;\x20cursor:\x20pointer;\x20font-size:\x2011px;\x20font-weight:\x20600;\x20transition:\x20all\x200.3s\x20ease;', _0x4b3121['textContent'] = 'Unlink', _0x4b3121['addEventListener']('click', () => {
                        const _0x20bdc2 = _0x4b3121['getAttribute']('data-platform');
                        confirm('Unlink\x20' + _0x5a0e89(this['getPlatformName'](_0x20bdc2)) + '?') && this['unlinkPlatform'](_0x20bdc2);
                    }), _0xa7d8c6['appendChild'](_0x359c4e), _0xa7d8c6['appendChild'](_0x4b3121);
                } else
                    _0xa7d8c6['appendChild'](_0x359c4e);
                _0x2b4cf3['appendChild'](_0xa7d8c6), _0x5d54a1['appendChild'](_0x2b4cf3);
            });
        }
    async ['unlinkPlatform'](_0xd449b9) {
            try {
                if (!_0x5f2610(_0xd449b9))
                    throw new Error('Invalid\x20platform\x20name');
                if (!_0x1030db(this['userId']))
                    throw new Error('Invalid\x20user\x20ID');
                const _0x229c50 = JSON['stringify']({
                        'user_id': this['userId']
                    }),
                    _0xfe12e = _0x3a2be7(),
                    _0x415468 = await _0x191951('/analytics/disconnect', 'POST', _0x229c50);
                if (_0xd449b9 === 'youtube') {
                    const _0x92c9 = await fetch(this['apiBase'] + '/analytics/disconnect', {
                        'method': 'POST',
                        'headers': {
                            'Content-Type': 'application/json',
                            'X-CSRF-Token': _0xfe12e,
                            'X-Request-Timestamp': _0x415468['timestamp'] || '',
                            'X-Request-Nonce': _0x415468['nonce'] || '',
                            'X-Request-Signature': _0x415468['signature'] || ''
                        },
                        'body': _0x229c50,
                        'credentials': 'include',
                        'signal': AbortSignal['timeout'](0x7530)
                    });
                    if (!_0x92c9['ok'] && _0x92c9['status'] !== 0xc8 && _0x92c9['status'] !== 0xcc)
                        throw new Error('Disconnect\x20failed:\x20' + _0x92c9['status']);
                    localStorage['removeItem']('youtube_connected'), localStorage['removeItem']('youtube_token_time'), localStorage['removeItem']('youtube_token');
                }
                this['connections'][_0xd449b9] && (this['connections'][_0xd449b9]['connected'] = ![]);
                typeof this['connections'] === 'object' && localStorage['setItem']('platform_connections', JSON['stringify'](this['connections']));
                const _0x4b6c9c = document['getElementById']('setupBanner');
                if (_0x4b6c9c)
                    _0x4b6c9c['style']['display'] = 'block';
                window['analyticsManager'] && (window['analyticsManager']['isConnected'] = ![], window['analyticsManager']['loadAnalyticsData']()), this['updateConnectionsDisplay'](), this['showNotification'](this['getPlatformName'](_0xd449b9) + '\x20disconnected\x20successfully');
            } catch (_0x2d3fb2) {
                this['showNotification']('Failed\x20to\x20disconnect:\x20' + _0x2d3fb2['message'], !![]);
            }
        }
    ['getPlatformName'](_0x1febb8) {
            const _0x55f93e = {
                'youtube': 'YouTube'
            };
            return _0x55f93e[_0x1febb8] || _0x1febb8;
        }
    ['generateUserId']() {
            let _0x5ce26f = localStorage['getItem']('youtube_user_id');
            return !_0x5ce26f && (_0x5ce26f = 'user_' + Math['random']()['toString'](0x24)['substr'](0x2, 0x9), localStorage['setItem']('youtube_user_id', _0x5ce26f)), _0x5ce26f;
        }
    ['showNotification'](_0x31408b, _0x9ab12 = ![]) {
            const _0x203b68 = document['createElement']('div');
            _0x203b68['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + (_0x9ab12 ? '#f8d7da' : '#d4edda') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20' + (_0x9ab12 ? '#721c24' : '#155724') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20' + (_0x9ab12 ? '#f5c6cb' : '#c3e6cb') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x203b68['textContent'] = _0x31408b, document['body']['appendChild'](_0x203b68), setTimeout(() => {
                _0x203b68['style']['animation'] = 'slideOut\x200.3s\x20ease', setTimeout(() => _0x203b68['remove'](), 0x12c);
            }, 0xbb8);
        }
}
document['addEventListener']('DOMContentLoaded', () => {
    window['settingsManager'] = new _0x1993f2();
});
const _0x11b308 = document['createElement']('style');
_0x11b308['textContent'] = '\x0a\x20\x20\x20\x20@keyframes\x20slideIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@keyframes\x20slideOut\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a', document['head']['appendChild'](_0x11b308);