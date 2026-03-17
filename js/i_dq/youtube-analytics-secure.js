class _0x40be7f {
    constructor() {
            this['isConnected'] = ![], this['accessToken'] = null, this['refreshToken'] = null, this['tokenExpiry'] = null, this['userInfo'] = null, this['channels'] = [], this['apiBase'] = window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space', this['reconnectAttempts'] = 0x0, this['maxReconnectAttempts'] = 0x3, this['loadStoredToken'](), this['checkConnectionStatus']();
        }
    ['loadStoredToken']() {
            try {
                const _0x33c559 = sessionStorage['getItem']('youtube_access_token'),
                    _0x11acda = sessionStorage['getItem']('youtube_token_expiry');
                if (_0x33c559 && _0x11acda) {
                    const _0x5346b5 = new Date(_0x11acda);
                    if (_0x5346b5 > new Date())
                        return this['accessToken'] = _0x33c559, this['tokenExpiry'] = _0x11acda, this['isConnected'] = !![], console['log']('✅\x20Loaded\x20valid\x20YouTube\x20token\x20from\x20storage'), !![];
                    else
                        this['clearStoredToken'](), console['log']('⚠️\x20YouTube\x20token\x20expired');
                }
            } catch (_0x332c39) {
                console['error']('Error\x20loading\x20YouTube\x20token:', _0x332c39);
            }
            return ![];
        }
    ['clearStoredToken']() {
            sessionStorage['removeItem']('youtube_access_token'), sessionStorage['removeItem']('youtube_token_expiry'), sessionStorage['removeItem']('youtube_refresh_token'), localStorage['removeItem']('youtube_connected'), localStorage['removeItem']('youtube_user_id'), this['accessToken'] = null, this['refreshToken'] = null, this['tokenExpiry'] = null, this['isConnected'] = ![];
        }
    async ['checkConnectionStatus']() {
        try {
            const _0x49ae2b = await fetch(this['apiBase'] + '/auth/youtube/status', {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if (_0x49ae2b['ok']) {
                const _0x2b136e = await _0x49ae2b['json']();
                this['isConnected'] = _0x2b136e['connected'] || ![], _0x2b136e['connected'] ? (console['log']('✅\x20YouTube\x20is\x20connected\x20on\x20backend'), this['updateAnalyticsUI']()) : (console['log']('⚠️\x20YouTube\x20not\x20connected\x20on\x20backend'), this['isConnected'] = ![]);
            }
        } catch (_0x2afc42) {
            console['error']('Error\x20checking\x20YouTube\x20connection\x20status:', _0x2afc42);
        }
    }
    async ['startOAuthFlow']() {
            try {
                const _0x4a2f9d = await fetch(this['apiBase'] + '/auth/youtube/authorize', {
                    'method': 'POST',
                    'credentials': 'include',
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                });
                if (!_0x4a2f9d['ok'])
                    throw new Error('OAuth\x20setup\x20failed:\x20' + _0x4a2f9d['status']);
                const _0x249017 = await _0x4a2f9d['json'](),
                    {
                        auth_url: _0x1efd87,
                        token_id: _0x96bc17
                    } = _0x249017;
                if (!_0x1efd87)
                    throw new Error('No\x20authorization\x20URL\x20received');
                return sessionStorage['setItem']('youtube_oauth_token_id', _0x96bc17), sessionStorage['setItem']('youtube_oauth_timestamp', Date['now']()['toString']()), this['openOAuthPopup'](_0x1efd87), console['log']('✅\x20OAuth\x20flow\x20started'), !![];
            } catch (_0x419030) {
                return console['error']('❌\x20Failed\x20to\x20start\x20OAuth\x20flow:', _0x419030), this['showNotification']('Failed\x20to\x20start\x20YouTube\x20connection', 'error'), ![];
            }
        }
    ['openOAuthPopup'](_0x337cc2) {
            const _0x4afbf9 = 0x1f4,
                _0x3db03f = 0x258,
                _0x24ac12 = (window['innerWidth'] - _0x4afbf9) / 0x2,
                _0xd0c637 = (window['innerHeight'] - _0x3db03f) / 0x2,
                _0x223fce = window['open'](_0x337cc2, 'youtube_oauth', 'width=' + _0x4afbf9 + ',height=' + _0x3db03f + ',left=' + _0x24ac12 + ',top=' + _0xd0c637);
            if (!_0x223fce) {
                this['showNotification']('Please\x20allow\x20pop-ups\x20to\x20connect\x20YouTube', 'error');
                return;
            }
            const _0x1d6223 = setInterval(() => {
                _0x223fce['closed'] && (clearInterval(_0x1d6223), console['log']('✓\x20OAuth\x20popup\x20closed,\x20checking\x20connection\x20status...'), setTimeout(() => this['checkConnectionStatus'](), 0x3e8));
            }, 0x1f4);
        }
    async ['handleOAuthCallback'](_0x40034e) {
        try {
            if (!_0x40034e || !_0x40034e['success'])
                return console['error']('❌\x20OAuth\x20callback\x20failed'), ![];
            const _0x3e8b38 = sessionStorage['getItem']('youtube_oauth_token_id');
            if (_0x40034e['token_id'] !== _0x3e8b38)
                return console['error']('❌\x20Token\x20ID\x20mismatch\x20-\x20possible\x20CSRF\x20attempt'), ![];
            return sessionStorage['setItem']('youtube_access_token', _0x40034e['access_token']), sessionStorage['setItem']('youtube_token_expiry', _0x40034e['expires_at']), this['accessToken'] = _0x40034e['access_token'], this['tokenExpiry'] = _0x40034e['expires_at'], this['isConnected'] = !![], this['updateAnalyticsUI'](), this['showNotification']('✅\x20YouTube\x20connected\x20successfully!', 'success'), console['log']('✅\x20OAuth\x20callback\x20handled\x20successfully'), !![];
        } catch (_0x292524) {
            return console['error']('Error\x20handling\x20OAuth\x20callback:', _0x292524), ![];
        }
    }
    async ['disconnect']() {
        try {
            const _0x127278 = await fetch(this['apiBase'] + '/auth/youtube/disconnect', {
                'method': 'POST',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if (!_0x127278['ok'])
                throw new Error('Disconnect\x20failed:\x20' + _0x127278['status']);
            return this['clearStoredToken'](), this['updateAnalyticsUI'](), this['showNotification']('✅\x20YouTube\x20disconnected', 'success'), console['log']('✅\x20YouTube\x20disconnected'), !![];
        } catch (_0x2b887f) {
            return console['error']('Error\x20disconnecting\x20YouTube:', _0x2b887f), this['showNotification']('Failed\x20to\x20disconnect\x20YouTube', 'error'), ![];
        }
    }
    async ['checkTokenExpiry']() {
        if (!this['tokenExpiry'])
            return;
        const _0x2a6cd0 = new Date(this['tokenExpiry']),
            _0x5bad8e = new Date(),
            _0x4ebaa3 = _0x2a6cd0 - _0x5bad8e,
            _0x1c0462 = 0x5 * 0x3c * 0x3e8;
        if (_0x4ebaa3 < _0x1c0462 && _0x4ebaa3 > 0x0)
            console['log']('⚠️\x20Token\x20expiring\x20soon,\x20attempting\x20refresh...'), await this['refreshToken']();
        else
            _0x4ebaa3 <= 0x0 && (console['log']('❌\x20Token\x20expired'), this['clearStoredToken'](), this['isConnected'] = ![]);
    }
    async ['refreshToken']() {
        try {
            const _0x23d6ef = await fetch(this['apiBase'] + '/auth/youtube/refresh-token', {
                'method': 'POST',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if (!_0x23d6ef['ok'])
                throw new Error('Token\x20refresh\x20failed:\x20' + _0x23d6ef['status']);
            const _0x237b9e = await _0x23d6ef['json']();
            return sessionStorage['setItem']('youtube_access_token', _0x237b9e['access_token']), sessionStorage['setItem']('youtube_token_expiry', _0x237b9e['expires_at']), this['accessToken'] = _0x237b9e['access_token'], this['tokenExpiry'] = _0x237b9e['expires_at'], console['log']('✅\x20YouTube\x20token\x20refreshed'), !![];
        } catch (_0x365048) {
            return console['error']('Error\x20refreshing\x20YouTube\x20token:', _0x365048), this['clearStoredToken'](), ![];
        }
    }
    async ['fetchAnalyticsData'](_0x1f68b7 = null, _0x442f38 = null) {
            try {
                if (!this['isConnected'] || !this['accessToken'])
                    return console['warn']('⚠️\x20Not\x20connected\x20to\x20YouTube'), null;
                await this['checkTokenExpiry']();
                if (!_0x1f68b7) {
                    const _0x1d8b21 = new Date();
                    _0x442f38 = new Date(), _0x1f68b7 = new Date(_0x1d8b21['setDate'](_0x1d8b21['getDate']() - 0x1e));
                }
                const _0x259b00 = _0x5592da => _0x5592da['toISOString']()['split']('T')[0x0],
                    _0x4cdd2a = await fetch(this['apiBase'] + '/analytics/dashboard', {
                        'method': 'POST',
                        'credentials': 'include',
                        'headers': {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer\x20' + this['accessToken']
                        },
                        'body': JSON['stringify']({
                            'start_date': _0x259b00(_0x1f68b7),
                            'end_date': _0x259b00(_0x442f38)
                        })
                    });
                if (!_0x4cdd2a['ok']) {
                    _0x4cdd2a['status'] === 0x191 && await this['refreshToken']();
                    throw new Error('Analytics\x20fetch\x20failed:\x20' + _0x4cdd2a['status']);
                }
                const _0x188b4f = await _0x4cdd2a['json']();
                return console['log']('✅\x20Analytics\x20data\x20fetched'), _0x188b4f;
            } catch (_0x39c027) {
                return console['error']('Error\x20fetching\x20analytics:', _0x39c027), null;
            }
        }
    ['updateAnalyticsUI']() {
            const _0x451f92 = document['getElementById']('connectYouTubeBtn'),
                _0x1066b4 = document['getElementById']('disconnectYouTubeBtn'),
                _0x5b6f34 = document['getElementById']('youtubeStatus');
            if (this['isConnected']) {
                if (_0x451f92)
                    _0x451f92['style']['display'] = 'none';
                if (_0x1066b4)
                    _0x1066b4['style']['display'] = 'flex';
                _0x5b6f34 && (_0x5b6f34['innerHTML'] = '<span\x20style=\x22color:\x20#4caf50;\x22>✓\x20YouTube\x20Connected</span>');
            } else {
                if (_0x451f92)
                    _0x451f92['style']['display'] = 'flex';
                if (_0x1066b4)
                    _0x1066b4['style']['display'] = 'none';
                _0x5b6f34 && (_0x5b6f34['innerHTML'] = '<span\x20style=\x22color:\x20#999;\x22>YouTube\x20Not\x20Connected</span>');
            }
        }
    ['showNotification'](_0x5a01c3, _0x1e317d = 'info') {
            const _0x4e9c43 = document['getElementById']('notificationContainer');
            if (!_0x4e9c43) {
                console['log']('[' + _0x1e317d['toUpperCase']() + ']\x20' + _0x5a01c3);
                return;
            }
            const _0x37b65b = document['createElement']('div');
            _0x37b65b['className'] = 'notification\x20notification-' + _0x1e317d, _0x37b65b['textContent'] = _0x5a01c3, _0x37b65b['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + (_0x1e317d === 'error' ? '#ff4444' : _0x1e317d === 'success' ? '#4caf50' : '#2196f3') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideInRight\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x4e9c43['appendChild'](_0x37b65b), setTimeout(() => {
                _0x37b65b['style']['animation'] = 'slideOutRight\x200.3s\x20ease', setTimeout(() => _0x37b65b['remove'](), 0x12c);
            }, 0xfa0);
        }
}
window['youtubeAnalyticsManager'] = new _0x40be7f(), window['connectYouTube'] = () => window['youtubeAnalyticsManager']['startOAuthFlow'](), window['disconnectYouTube'] = () => window['youtubeAnalyticsManager']['disconnect'](), setInterval(() => {
    window['youtubeAnalyticsManager'] && window['youtubeAnalyticsManager']['checkTokenExpiry']();
}, 0x5 * 0x3c * 0x3e8), window['addEventListener']('message', _0x2d6ead => {
    const _0xc54c90 = window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space/api',
        _0x318691 = _0xc54c90['split']('/api')[0x0];
    if (_0x2d6ead['origin'] !== _0x318691)
        return;
    _0x2d6ead['data']['type'] === 'youtube_oauth_callback' && (window['youtubeAnalyticsManager'] && window['youtubeAnalyticsManager']['handleOAuthCallback'](_0x2d6ead['data']['payload']));
});