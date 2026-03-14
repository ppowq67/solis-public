function _0x5d5b(_0x3c998b, _0x431492) {
    _0x3c998b = _0x3c998b - 0x9f;
    const _0x1cc8de = _0x1cc8();
    let _0x5d5ba7 = _0x1cc8de[_0x3c998b];
    return _0x5d5ba7;
}
const _0x492a99 = _0x5d5b;
(function (_0x798496, _0x294dc1) {
    const _0x3eb23f = _0x5d5b, _0x43d9f1 = _0x798496();
    while (!![]) {
        try {
            const _0x24d0d8 = parseInt(_0x3eb23f(0xbb)) / 0x1 + -parseInt(_0x3eb23f(0xad)) / 0x2 + -parseInt(_0x3eb23f(0x10f)) / 0x3 * (-parseInt(_0x3eb23f(0xac)) / 0x4) + -parseInt(_0x3eb23f(0xda)) / 0x5 * (parseInt(_0x3eb23f(0xb3)) / 0x6) + parseInt(_0x3eb23f(0x11b)) / 0x7 * (parseInt(_0x3eb23f(0x111)) / 0x8) + -parseInt(_0x3eb23f(0x106)) / 0x9 + parseInt(_0x3eb23f(0xf3)) / 0xa * (parseInt(_0x3eb23f(0xc6)) / 0xb);
            if (_0x24d0d8 === _0x294dc1)
                break;
            else
                _0x43d9f1['push'](_0x43d9f1['shift']());
        } catch (_0x5cd6a8) {
            _0x43d9f1['push'](_0x43d9f1['shift']());
        }
    }
}(_0x1cc8, 0xcfa5e));
class YouTubeAnalyticsManager {
    constructor() {
        const _0x443fed = _0x5d5b;
        this[_0x443fed(0x104)] = ![], this[_0x443fed(0x103)] = null, this[_0x443fed(0xd9)] = null, this[_0x443fed(0xbc)] = null, this[_0x443fed(0xb9)] = null, this[_0x443fed(0xa2)] = [], this[_0x443fed(0xbd)] = window[_0x443fed(0xaa)] || _0x443fed(0xa5), this['reconnectAttempts'] = 0x0, this['maxReconnectAttempts'] = 0x3, this['loadStoredToken'](), this[_0x443fed(0xa4)]();
    }
    [_0x492a99(0xd4)]() {
        const _0x4adca0 = _0x492a99;
        try {
            const _0x4b1692 = sessionStorage[_0x4adca0(0xff)]('youtube_access_token'), _0x561275 = sessionStorage[_0x4adca0(0xff)](_0x4adca0(0xea));
            if (_0x4b1692 && _0x561275) {
                const _0x47ac05 = new Date(_0x561275);
                if (_0x47ac05 > new Date())
                    return this[_0x4adca0(0x103)] = _0x4b1692, this[_0x4adca0(0xbc)] = _0x561275, this[_0x4adca0(0x104)] = !![], console['log'](_0x4adca0(0x114)), !![];
                else
                    this[_0x4adca0(0x11c)](), console[_0x4adca0(0xca)](_0x4adca0(0xfc));
            }
        } catch (_0x5f4b64) {
            console['error'](_0x4adca0(0xe8), _0x5f4b64);
        }
        return ![];
    }
    [_0x492a99(0x11c)]() {
        const _0x406632 = _0x492a99;
        sessionStorage['removeItem']('youtube_access_token'), sessionStorage[_0x406632(0xf9)]('youtube_token_expiry'), sessionStorage[_0x406632(0xf9)]('youtube_refresh_token'), localStorage[_0x406632(0xf9)](_0x406632(0x109)), localStorage[_0x406632(0xf9)](_0x406632(0xb5)), this[_0x406632(0x103)] = null, this[_0x406632(0xd9)] = null, this[_0x406632(0xbc)] = null, this[_0x406632(0x104)] = ![];
    }
    async ['checkConnectionStatus']() {
        const _0x557966 = _0x492a99;
        try {
            const _0x4c7894 = await fetch(this['apiBase'] + _0x557966(0x113), {
                'method': _0x557966(0xec),
                'credentials': _0x557966(0xfe),
                'headers': { 'Content-Type': _0x557966(0xf5) }
            });
            if (_0x4c7894['ok']) {
                const _0x4f473b = await _0x4c7894[_0x557966(0xe3)]();
                this['isConnected'] = _0x4f473b[_0x557966(0xee)] || ![], _0x4f473b[_0x557966(0xee)] ? (console['log']('✅\x20YouTube\x20is\x20connected\x20on\x20backend'), this[_0x557966(0xeb)]()) : (console['log'](_0x557966(0xcf)), this['isConnected'] = ![]);
            }
        } catch (_0x379e8f) {
            console[_0x557966(0xab)](_0x557966(0xd0), _0x379e8f);
        }
    }
    async [_0x492a99(0xe6)]() {
        const _0x5cc142 = _0x492a99;
        try {
            const _0xe4d65c = await fetch(this[_0x5cc142(0xbd)] + _0x5cc142(0x115), {
                'method': 'POST',
                'credentials': 'include',
                'headers': { 'Content-Type': 'application/json' }
            });
            if (!_0xe4d65c['ok'])
                throw new Error(_0x5cc142(0xe9) + _0xe4d65c[_0x5cc142(0xd5)]);
            const _0x39a4b0 = await _0xe4d65c[_0x5cc142(0xe3)](), {
                    auth_url: _0x3fdb95,
                    token_id: _0x4f56b
                } = _0x39a4b0;
            if (!_0x3fdb95)
                throw new Error(_0x5cc142(0xb7));
            return sessionStorage['setItem'](_0x5cc142(0xf2), _0x4f56b), sessionStorage[_0x5cc142(0x105)](_0x5cc142(0xfb), Date[_0x5cc142(0x108)]()[_0x5cc142(0xdf)]()), this['openOAuthPopup'](_0x3fdb95), console['log'](_0x5cc142(0xae)), !![];
        } catch (_0x24b8c9) {
            return console[_0x5cc142(0xab)]('❌\x20Failed\x20to\x20start\x20OAuth\x20flow:', _0x24b8c9), this[_0x5cc142(0xb6)](_0x5cc142(0xfa), 'error'), ![];
        }
    }
    [_0x492a99(0xce)](_0x3090bb) {
        const _0x28b54f = _0x492a99, _0x51816e = 0x1f4, _0x16ade5 = 0x258, _0x141cdf = (window[_0x28b54f(0xa7)] - _0x51816e) / 0x2, _0x1c550c = (window[_0x28b54f(0xe0)] - _0x16ade5) / 0x2, _0x391e26 = window['open'](_0x3090bb, _0x28b54f(0xa8), _0x28b54f(0x10b) + _0x51816e + _0x28b54f(0xd1) + _0x16ade5 + _0x28b54f(0xf4) + _0x141cdf + _0x28b54f(0x118) + _0x1c550c);
        if (!_0x391e26) {
            this['showNotification'](_0x28b54f(0x107), 'error');
            return;
        }
        const _0x2a491a = setInterval(() => {
            const _0x6a1c9a = _0x28b54f;
            _0x391e26['closed'] && (clearInterval(_0x2a491a), console[_0x6a1c9a(0xca)](_0x6a1c9a(0xc0)), setTimeout(() => this[_0x6a1c9a(0xa4)](), 0x3e8));
        }, 0x1f4);
    }
    async [_0x492a99(0xb4)](_0x1a4e44) {
        const _0x1b8cbc = _0x492a99;
        try {
            if (!_0x1a4e44 || !_0x1a4e44['success'])
                return console[_0x1b8cbc(0xab)](_0x1b8cbc(0xb1)), ![];
            const _0x47f670 = sessionStorage[_0x1b8cbc(0xff)](_0x1b8cbc(0xf2));
            if (_0x1a4e44[_0x1b8cbc(0xbe)] !== _0x47f670)
                return console[_0x1b8cbc(0xab)](_0x1b8cbc(0xb2)), ![];
            return sessionStorage[_0x1b8cbc(0x105)]('youtube_access_token', _0x1a4e44[_0x1b8cbc(0xd3)]), sessionStorage['setItem']('youtube_token_expiry', _0x1a4e44[_0x1b8cbc(0xf8)]), this[_0x1b8cbc(0x103)] = _0x1a4e44['access_token'], this['tokenExpiry'] = _0x1a4e44[_0x1b8cbc(0xf8)], this['isConnected'] = !![], this[_0x1b8cbc(0xeb)](), this[_0x1b8cbc(0xb6)]('✅\x20YouTube\x20connected\x20successfully!', _0x1b8cbc(0xc2)), console[_0x1b8cbc(0xca)]('✅\x20OAuth\x20callback\x20handled\x20successfully'), !![];
        } catch (_0x4f5db1) {
            return console[_0x1b8cbc(0xab)]('Error\x20handling\x20OAuth\x20callback:', _0x4f5db1), ![];
        }
    }
    async [_0x492a99(0x10d)]() {
        const _0xfef912 = _0x492a99;
        try {
            const _0x463d98 = await fetch(this['apiBase'] + _0xfef912(0xc1), {
                'method': 'POST',
                'credentials': _0xfef912(0xfe),
                'headers': { 'Content-Type': _0xfef912(0xf5) }
            });
            if (!_0x463d98['ok'])
                throw new Error(_0xfef912(0xd2) + _0x463d98[_0xfef912(0xd5)]);
            return this['clearStoredToken'](), this[_0xfef912(0xeb)](), this[_0xfef912(0xb6)](_0xfef912(0xa9), _0xfef912(0xc2)), console[_0xfef912(0xca)](_0xfef912(0xa9)), !![];
        } catch (_0x20c51d) {
            return console[_0xfef912(0xab)](_0xfef912(0xfd), _0x20c51d), this[_0xfef912(0xb6)](_0xfef912(0xe2), _0xfef912(0xab)), ![];
        }
    }
    async [_0x492a99(0xde)]() {
        const _0x171833 = _0x492a99;
        if (!this[_0x171833(0xbc)])
            return;
        const _0x3f3b98 = new Date(this[_0x171833(0xbc)]), _0x497cc3 = new Date(), _0x3b6944 = _0x3f3b98 - _0x497cc3, _0x1e65b4 = 0x5 * 0x3c * 0x3e8;
        if (_0x3b6944 < _0x1e65b4 && _0x3b6944 > 0x0)
            console['log'](_0x171833(0xa6)), await this[_0x171833(0xd9)]();
        else
            _0x3b6944 <= 0x0 && (console[_0x171833(0xca)](_0x171833(0xdd)), this[_0x171833(0x11c)](), this[_0x171833(0x104)] = ![]);
    }
    async ['refreshToken']() {
        const _0x274d65 = _0x492a99;
        try {
            const _0x155167 = await fetch(this['apiBase'] + '/auth/youtube/refresh-token', {
                'method': _0x274d65(0xf6),
                'credentials': _0x274d65(0xfe),
                'headers': { 'Content-Type': _0x274d65(0xf5) }
            });
            if (!_0x155167['ok'])
                throw new Error(_0x274d65(0x9f) + _0x155167[_0x274d65(0xd5)]);
            const _0x2d12da = await _0x155167[_0x274d65(0xe3)]();
            return sessionStorage[_0x274d65(0x105)]('youtube_access_token', _0x2d12da['access_token']), sessionStorage['setItem'](_0x274d65(0xea), _0x2d12da['expires_at']), this[_0x274d65(0x103)] = _0x2d12da[_0x274d65(0xd3)], this[_0x274d65(0xbc)] = _0x2d12da['expires_at'], console[_0x274d65(0xca)]('✅\x20YouTube\x20token\x20refreshed'), !![];
        } catch (_0x343239) {
            return console[_0x274d65(0xab)]('Error\x20refreshing\x20YouTube\x20token:', _0x343239), this[_0x274d65(0x11c)](), ![];
        }
    }
    async [_0x492a99(0xc4)](_0x1ab4aa = null, _0x5a12a6 = null) {
        const _0x49951c = _0x492a99;
        try {
            if (!this[_0x49951c(0x104)] || !this[_0x49951c(0x103)])
                return console[_0x49951c(0x100)](_0x49951c(0x10a)), null;
            await this['checkTokenExpiry']();
            if (!_0x1ab4aa) {
                const _0x8a92f1 = new Date();
                _0x5a12a6 = new Date(), _0x1ab4aa = new Date(_0x8a92f1[_0x49951c(0xf1)](_0x8a92f1['getDate']() - 0x1e));
            }
            const _0x2b5448 = _0x3a8c5 => _0x3a8c5[_0x49951c(0xba)]()[_0x49951c(0x101)]('T')[0x0], _0x60e914 = await fetch(this[_0x49951c(0xbd)] + _0x49951c(0xb0), {
                    'method': 'POST',
                    'credentials': _0x49951c(0xfe),
                    'headers': {
                        'Content-Type': _0x49951c(0xf5),
                        'Authorization': _0x49951c(0xd8) + this[_0x49951c(0x103)]
                    },
                    'body': JSON[_0x49951c(0x117)]({
                        'start_date': _0x2b5448(_0x1ab4aa),
                        'end_date': _0x2b5448(_0x5a12a6)
                    })
                });
            if (!_0x60e914['ok']) {
                _0x60e914[_0x49951c(0xd5)] === 0x191 && await this[_0x49951c(0xd9)]();
                throw new Error(_0x49951c(0xc7) + _0x60e914['status']);
            }
            const _0x2a5959 = await _0x60e914[_0x49951c(0xe3)]();
            return console[_0x49951c(0xca)](_0x49951c(0xc8)), _0x2a5959;
        } catch (_0x45880d) {
            return console['error'](_0x49951c(0xed), _0x45880d), null;
        }
    }
    [_0x492a99(0xeb)]() {
        const _0x182ddf = _0x492a99, _0x52ea44 = document[_0x182ddf(0xe1)](_0x182ddf(0x11a)), _0x5c22a2 = document[_0x182ddf(0xe1)](_0x182ddf(0xd7)), _0xed5c28 = document[_0x182ddf(0xe1)]('youtubeStatus');
        if (this[_0x182ddf(0x104)]) {
            if (_0x52ea44)
                _0x52ea44['style'][_0x182ddf(0xbf)] = _0x182ddf(0xd6);
            if (_0x5c22a2)
                _0x5c22a2[_0x182ddf(0xc5)][_0x182ddf(0xbf)] = _0x182ddf(0x10e);
            _0xed5c28 && (_0xed5c28[_0x182ddf(0xf0)] = '<span\x20style=\x22color:\x20#4caf50;\x22>✓\x20YouTube\x20Connected</span>');
        } else {
            if (_0x52ea44)
                _0x52ea44[_0x182ddf(0xc5)][_0x182ddf(0xbf)] = 'flex';
            if (_0x5c22a2)
                _0x5c22a2[_0x182ddf(0xc5)][_0x182ddf(0xbf)] = _0x182ddf(0xd6);
            _0xed5c28 && (_0xed5c28[_0x182ddf(0xf0)] = _0x182ddf(0xc9));
        }
    }
    ['showNotification'](_0xed1c66, _0x223a85 = 'info') {
        const _0x25c8df = _0x492a99, _0x1cfd7b = document['getElementById'](_0x25c8df(0xcc));
        if (!_0x1cfd7b) {
            console[_0x25c8df(0xca)]('[' + _0x223a85[_0x25c8df(0xe7)]() + ']\x20' + _0xed1c66);
            return;
        }
        const _0x2a3856 = document[_0x25c8df(0xb8)](_0x25c8df(0x102));
        _0x2a3856['className'] = _0x25c8df(0xa1) + _0x223a85, _0x2a3856[_0x25c8df(0xcd)] = _0xed1c66, _0x2a3856[_0x25c8df(0xc5)][_0x25c8df(0xdc)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + (_0x223a85 === _0x25c8df(0xab) ? _0x25c8df(0x110) : _0x223a85 === _0x25c8df(0xc2) ? _0x25c8df(0xef) : _0x25c8df(0xc3)) + _0x25c8df(0x112), _0x1cfd7b[_0x25c8df(0xcb)](_0x2a3856), setTimeout(() => {
            const _0xadb7ab = _0x25c8df;
            _0x2a3856['style'][_0xadb7ab(0xa3)] = _0xadb7ab(0xa0), setTimeout(() => _0x2a3856[_0xadb7ab(0xf7)](), 0x12c);
        }, 0xfa0);
    }
}
window['youtubeAnalyticsManager'] = new YouTubeAnalyticsManager(), window['connectYouTube'] = () => window[_0x492a99(0xe5)][_0x492a99(0xe6)](), window[_0x492a99(0x10c)] = () => window['youtubeAnalyticsManager']['disconnect'](), setInterval(() => {
    const _0x2a6a76 = _0x492a99;
    window[_0x2a6a76(0xe5)] && window['youtubeAnalyticsManager'][_0x2a6a76(0xde)]();
}, 0x5 * 0x3c * 0x3e8), window[_0x492a99(0xe4)]('message', _0x28c766 => {
    const _0xab898e = _0x492a99, _0x490a31 = window[_0xab898e(0xaa)] || _0xab898e(0xa5), _0x10952d = _0x490a31['split'](_0xab898e(0x116))[0x0];
    if (_0x28c766['origin'] !== _0x10952d)
        return;
    _0x28c766[_0xab898e(0x119)][_0xab898e(0xaf)] === 'youtube_oauth_callback' && (window[_0xab898e(0xe5)] && window[_0xab898e(0xe5)][_0xab898e(0xb4)](_0x28c766['data'][_0xab898e(0xdb)]));
});
function _0x1cc8() {
    const _0x534677 = [
        '⚠️\x20Token\x20expiring\x20soon,\x20attempting\x20refresh...',
        'innerWidth',
        'youtube_oauth',
        '✅\x20YouTube\x20disconnected',
        'API_BASE_URL',
        'error',
        '532PbnuqK',
        '984876nVWGRY',
        '✅\x20OAuth\x20flow\x20started',
        'type',
        '/analytics/dashboard',
        '❌\x20OAuth\x20callback\x20failed',
        '❌\x20Token\x20ID\x20mismatch\x20-\x20possible\x20CSRF\x20attempt',
        '60PhapKJ',
        'handleOAuthCallback',
        'youtube_user_id',
        'showNotification',
        'No\x20authorization\x20URL\x20received',
        'createElement',
        'userInfo',
        'toISOString',
        '769749UdFQko',
        'tokenExpiry',
        'apiBase',
        'token_id',
        'display',
        '✓\x20OAuth\x20popup\x20closed,\x20checking\x20connection\x20status...',
        '/auth/youtube/disconnect',
        'success',
        '#2196f3',
        'fetchAnalyticsData',
        'style',
        '517NTumWb',
        'Analytics\x20fetch\x20failed:\x20',
        '✅\x20Analytics\x20data\x20fetched',
        '<span\x20style=\x22color:\x20#999;\x22>YouTube\x20Not\x20Connected</span>',
        'log',
        'appendChild',
        'notificationContainer',
        'textContent',
        'openOAuthPopup',
        '⚠️\x20YouTube\x20not\x20connected\x20on\x20backend',
        'Error\x20checking\x20YouTube\x20connection\x20status:',
        ',height=',
        'Disconnect\x20failed:\x20',
        'access_token',
        'loadStoredToken',
        'status',
        'none',
        'disconnectYouTubeBtn',
        'Bearer\x20',
        'refreshToken',
        '173130uvzRKy',
        'payload',
        'cssText',
        '❌\x20Token\x20expired',
        'checkTokenExpiry',
        'toString',
        'innerHeight',
        'getElementById',
        'Failed\x20to\x20disconnect\x20YouTube',
        'json',
        'addEventListener',
        'youtubeAnalyticsManager',
        'startOAuthFlow',
        'toUpperCase',
        'Error\x20loading\x20YouTube\x20token:',
        'OAuth\x20setup\x20failed:\x20',
        'youtube_token_expiry',
        'updateAnalyticsUI',
        'GET',
        'Error\x20fetching\x20analytics:',
        'connected',
        '#4caf50',
        'innerHTML',
        'setDate',
        'youtube_oauth_token_id',
        '66540PxVvnk',
        ',left=',
        'application/json',
        'POST',
        'remove',
        'expires_at',
        'removeItem',
        'Failed\x20to\x20start\x20YouTube\x20connection',
        'youtube_oauth_timestamp',
        '⚠️\x20YouTube\x20token\x20expired',
        'Error\x20disconnecting\x20YouTube:',
        'include',
        'getItem',
        'warn',
        'split',
        'div',
        'accessToken',
        'isConnected',
        'setItem',
        '10531386CAUCsk',
        'Please\x20allow\x20pop-ups\x20to\x20connect\x20YouTube',
        'now',
        'youtube_connected',
        '⚠️\x20Not\x20connected\x20to\x20YouTube',
        'width=',
        'disconnectYouTube',
        'disconnect',
        'flex',
        '16101VXMbrA',
        '#ff4444',
        '576BLjuwg',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideInRight\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '/auth/youtube/status',
        '✅\x20Loaded\x20valid\x20YouTube\x20token\x20from\x20storage',
        '/auth/youtube/authorize',
        '/api',
        'stringify',
        ',top=',
        'data',
        'connectYouTubeBtn',
        '103355egHeEl',
        'clearStoredToken',
        'Token\x20refresh\x20failed:\x20',
        'slideOutRight\x200.3s\x20ease',
        'notification\x20notification-',
        'channels',
        'animation',
        'checkConnectionStatus',
        'http://127.0.0.1:5500/api'
    ];
    _0x1cc8 = function () {
        return _0x534677;
    };
    return _0x1cc8();
}