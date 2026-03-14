const _0x31a2c7 = _0x172a;
(function (_0x54235a, _0x4d24d9) {
    const _0x1b240f = _0x172a, _0x5c0990 = _0x54235a();
    while (!![]) {
        try {
            const _0xa75545 = -parseInt(_0x1b240f(0x2b8)) / 0x1 * (parseInt(_0x1b240f(0x25d)) / 0x2) + -parseInt(_0x1b240f(0x219)) / 0x3 * (-parseInt(_0x1b240f(0x25b)) / 0x4) + -parseInt(_0x1b240f(0x1ea)) / 0x5 + -parseInt(_0x1b240f(0x262)) / 0x6 + -parseInt(_0x1b240f(0x291)) / 0x7 * (parseInt(_0x1b240f(0x263)) / 0x8) + parseInt(_0x1b240f(0x278)) / 0x9 * (parseInt(_0x1b240f(0x244)) / 0xa) + -parseInt(_0x1b240f(0x272)) / 0xb * (-parseInt(_0x1b240f(0x1dc)) / 0xc);
            if (_0xa75545 === _0x4d24d9)
                break;
            else
                _0x5c0990['push'](_0x5c0990['shift']());
        } catch (_0x56d0d2) {
            _0x5c0990['push'](_0x5c0990['shift']());
        }
    }
}(_0x9fc9, 0x2d81b));
class SolisAIWebSocketClient {
    constructor(_0x3a6f7f = null, _0x23ed74 = {}) {
        const _0x778657 = _0x172a;
        this['serverUrl'] = _0x3a6f7f || this['_detectServerUrl'](), this[_0x778657(0x213)] = null, this['userId'] = null, this[_0x778657(0x2aa)] = null, this['HEARTBEAT_INTERVAL'] = _0x23ed74[_0x778657(0x235)] || 0x7530, this['HEALTH_CHECK_INTERVAL'] = _0x23ed74['healthCheckInterval'] || 0x2710, this[_0x778657(0x211)] = 0x3, this['CLEANUP_INTERVAL'] = _0x23ed74[_0x778657(0x1db)] || 0x493e0, this[_0x778657(0x27b)] = _0x23ed74[_0x778657(0x1da)] || 0x36ee80, this['connectionHealthCheck'] = {
            'lastHeartbeatTime': null,
            'missedHeartbeats': 0x0,
            'maxMissedHeartbeats': this[_0x778657(0x211)],
            'healthCheckInterval': null
        }, this[_0x778657(0x25f)] = {
            'state': 'closed',
            'failureCount': 0x0,
            'failureThreshold': _0x23ed74[_0x778657(0x282)] || 0x5,
            'resetTimeout': _0x23ed74[_0x778657(0x215)] || 0xea60,
            'nextAttemptTime': null
        }, this[_0x778657(0x28d)] = [], this['maxQueueSize'] = _0x23ed74[_0x778657(0x289)] || 0x3e8, this[_0x778657(0x287)] = new Map(), this['messageBatch'] = [], this['batchSize'] = _0x23ed74[_0x778657(0x231)] || 0xa, this[_0x778657(0x2b6)] = _0x23ed74['batchTimeout'] || 0x3e8, this[_0x778657(0x293)] = null, this['debouncedOperations'] = new Map(), this[_0x778657(0x2b9)] = _0x23ed74['debounceDelay'] || 0x12c, this['activeTasks'] = new Map(), this['automationSessions'] = new Map(), this[_0x778657(0x252)] = new Map(), this[_0x778657(0x1f9)] = new Map(), this[_0x778657(0x24d)] = new Map(), this['pendingOperations'] = new Map(), this[_0x778657(0x28a)] = new Map(), this[_0x778657(0x2a7)] = _0x23ed74[_0x778657(0x2a7)] || 0x2710, this[_0x778657(0x1df)] = new Map(), this['reconnectConfig'] = {
            'attempts': 0x0,
            'maxAttempts': _0x23ed74[_0x778657(0x20e)] || 0xa,
            'initialDelay': 0x3e8,
            'maxDelay': 0x7530,
            'multiplier': 1.5
        }, this[_0x778657(0x24a)] = ![], this[_0x778657(0x235)] = null, console['log']('🔌\x20WebSocket\x20Client\x20v2\x20initialized');
    }
    [_0x31a2c7(0x2a8)]() {
        const _0x4a6212 = _0x31a2c7, _0x5e9619 = localStorage['getItem']('backendPort') || _0x4a6212(0x265), _0x46ddd2 = localStorage[_0x4a6212(0x281)](_0x4a6212(0x1f8)) || 'localhost';
        return _0x4a6212(0x207) + _0x46ddd2 + ':' + _0x5e9619;
    }
    ['connect'](_0x4db9f5, _0x116902 = null) {
        const _0x1b82a4 = _0x31a2c7;
        if (!_0x4db9f5)
            return console[_0x1b82a4(0x200)](_0x1b82a4(0x21f)), ![];
        this[_0x1b82a4(0x25e)] = _0x4db9f5, this[_0x1b82a4(0x24a)] = ![];
        !_0x116902 && typeof WebSocketSecurityManager !== _0x1b82a4(0x221) && (_0x116902 = new WebSocketSecurityManager());
        if (!_0x116902)
            return console[_0x1b82a4(0x200)]('❌\x20Security\x20manager\x20unavailable'), ![];
        this[_0x1b82a4(0x2aa)] = _0x116902, this['securityManager'][_0x1b82a4(0x276)](this[_0x1b82a4(0x229)](), _0x4db9f5);
        if (typeof io === 'undefined')
            return console[_0x1b82a4(0x200)](_0x1b82a4(0x254)), ![];
        if (this[_0x1b82a4(0x25f)][_0x1b82a4(0x2b2)] === _0x1b82a4(0x28f)) {
            const _0x5cd9d3 = Date[_0x1b82a4(0x27d)]();
            if (_0x5cd9d3 < this[_0x1b82a4(0x25f)][_0x1b82a4(0x20b)])
                return console[_0x1b82a4(0x294)](_0x1b82a4(0x217)), this[_0x1b82a4(0x288)](_0x1b82a4(0x268), { 'userId': _0x4db9f5 }), ![];
            this[_0x1b82a4(0x25f)][_0x1b82a4(0x2b2)] = _0x1b82a4(0x214);
        }
        try {
            const _0x1d2cbf = this['_buildAuthConfig']();
            return this[_0x1b82a4(0x213)] = io(this[_0x1b82a4(0x21b)], {
                'reconnection': !![],
                'reconnectionDelay': this[_0x1b82a4(0x296)][_0x1b82a4(0x23a)],
                'reconnectionDelayMax': this[_0x1b82a4(0x296)]['maxDelay'],
                'reconnectionAttempts': this['reconnectConfig']['maxAttempts'],
                'transports': [
                    _0x1b82a4(0x29a),
                    _0x1b82a4(0x1f7)
                ],
                'upgrade': ![],
                'forceNew': !![],
                'rememberUpgrade': ![],
                'sync\x20disconnect\x20on\x20unload': !![],
                'autoConnect': !![],
                'auth': _0x1d2cbf
            }), this[_0x1b82a4(0x274)](), this[_0x1b82a4(0x202)](), this['_startConnectionHealthCheck'](), this[_0x1b82a4(0x1f4)](), console[_0x1b82a4(0x206)](_0x1b82a4(0x2b0)), !![];
        } catch (_0x2a723a) {
            return console[_0x1b82a4(0x200)](_0x1b82a4(0x2b7), _0x2a723a), this[_0x1b82a4(0x20c)](), ![];
        }
    }
    [_0x31a2c7(0x26b)]() {
        const _0x537279 = _0x31a2c7, _0x4f190c = this[_0x537279(0x229)]();
        if (!_0x4f190c)
            throw new Error(_0x537279(0x2a5));
        return this[_0x537279(0x2aa)] && !this[_0x537279(0x2aa)][_0x537279(0x299)] && (this[_0x537279(0x2aa)]['sessionId'] = this[_0x537279(0x2aa)][_0x537279(0x24e)](), this[_0x537279(0x2aa)]['sessionIdRefreshed'] = !![]), {
            'token': _0x4f190c,
            'userId': this[_0x537279(0x25e)],
            'timestamp': Date[_0x537279(0x27d)](),
            'sessionId': this[_0x537279(0x2aa)]?.[_0x537279(0x260)]
        };
    }
    ['_getAuthToken']() {
        const _0x27e9ea = _0x31a2c7;
        return sessionStorage[_0x27e9ea(0x281)](_0x27e9ea(0x1eb)) || document[_0x27e9ea(0x23f)]['split'](';\x20')[_0x27e9ea(0x2b5)](_0x4b7d7a => _0x4b7d7a[_0x27e9ea(0x1f3)]('auth_token='))?.[_0x27e9ea(0x266)]('=')[0x1] || null;
    }
    ['_handleConnectionFailure']() {
        const _0x2061b2 = _0x31a2c7;
        this[_0x2061b2(0x25f)]['failureCount']++, this[_0x2061b2(0x25f)][_0x2061b2(0x1e8)] >= this[_0x2061b2(0x25f)]['failureThreshold'] && (console[_0x2061b2(0x294)](_0x2061b2(0x29b)), this[_0x2061b2(0x25f)][_0x2061b2(0x2b2)] = _0x2061b2(0x28f), this[_0x2061b2(0x25f)][_0x2061b2(0x1e8)] = 0x0, this[_0x2061b2(0x25f)][_0x2061b2(0x20b)] = Date[_0x2061b2(0x27d)]() + this['circuitBreaker']['resetTimeout']), this['securityManager']?.['_logSecurityEvent'](_0x2061b2(0x269), { 'failureCount': this[_0x2061b2(0x25f)][_0x2061b2(0x1e8)] });
    }
    ['_startHeartbeat']() {
        const _0x4df0e3 = _0x31a2c7;
        this[_0x4df0e3(0x255)](), this['heartbeatInterval'] = setInterval(() => {
            const _0x3b8539 = _0x4df0e3;
            this['socket']?.[_0x3b8539(0x1dd)] && (this[_0x3b8539(0x213)][_0x3b8539(0x29c)](_0x3b8539(0x249), {
                'timestamp': Date['now'](),
                'sessionId': this[_0x3b8539(0x2aa)]?.[_0x3b8539(0x260)]
            }), this[_0x3b8539(0x20d)][_0x3b8539(0x210)] = Date[_0x3b8539(0x27d)]());
        }, this[_0x4df0e3(0x1f6)]);
    }
    [_0x31a2c7(0x255)]() {
        const _0x237adc = _0x31a2c7;
        this[_0x237adc(0x235)] && (clearInterval(this[_0x237adc(0x235)]), this['heartbeatInterval'] = null);
    }
    [_0x31a2c7(0x1ee)]() {
        const _0x5c74a9 = _0x31a2c7;
        this[_0x5c74a9(0x2a9)](), this['connectionHealthCheck']['healthCheckInterval'] = setInterval(() => {
            const _0x18c02d = _0x5c74a9;
            !this[_0x18c02d(0x213)]?.[_0x18c02d(0x1dd)] ? (this[_0x18c02d(0x20d)][_0x18c02d(0x1ec)]++, this[_0x18c02d(0x20d)][_0x18c02d(0x1ec)] >= this[_0x18c02d(0x211)] && (console[_0x18c02d(0x294)](_0x18c02d(0x277)), this['socket']?.[_0x18c02d(0x208)](), this['socket']?.[_0x18c02d(0x268)]())) : this[_0x18c02d(0x20d)][_0x18c02d(0x1ec)] = 0x0;
        }, this[_0x5c74a9(0x22b)]);
    }
    [_0x31a2c7(0x2a9)]() {
        const _0x579096 = _0x31a2c7;
        this['connectionHealthCheck']['healthCheckInterval'] && (clearInterval(this[_0x579096(0x20d)][_0x579096(0x1fb)]), this[_0x579096(0x20d)][_0x579096(0x1fb)] = null);
    }
    ['_startCleanupProcess']() {
        const _0x8d372b = _0x31a2c7;
        setInterval(() => {
            const _0x1de5d3 = _0x172a;
            this[_0x1de5d3(0x275)]();
        }, this[_0x8d372b(0x1fc)]);
    }
    [_0x31a2c7(0x275)]() {
        const _0x1396a6 = _0x31a2c7, _0x5633ed = Date['now']();
        this['_cleanupMap'](this['activeTasks'], this['STATE_ENTRY_MAX_AGE'], _0x5633ed), this[_0x1396a6(0x22e)](this['automationSessions'], this[_0x1396a6(0x27b)], _0x5633ed), this[_0x1396a6(0x22e)](this['renderingJobs'], this[_0x1396a6(0x27b)], _0x5633ed), this[_0x1396a6(0x22e)](this['analyticsStreams'], this[_0x1396a6(0x27b)], _0x5633ed), this['_cleanupMap'](this[_0x1396a6(0x24d)], this['STATE_ENTRY_MAX_AGE'], _0x5633ed), this['_cleanupMap'](this[_0x1396a6(0x1ef)], this[_0x1396a6(0x27b)], _0x5633ed);
        for (const [_0x15c752, _0xc03218] of this['cleanupTimers']) {
            _0xc03218[_0x1396a6(0x26e)] && _0x5633ed - _0xc03218[_0x1396a6(0x26e)] > this[_0x1396a6(0x27b)] && (clearTimeout(_0xc03218['id']), this[_0x1396a6(0x28a)]['delete'](_0x15c752));
        }
        console[_0x1396a6(0x206)](_0x1396a6(0x290));
    }
    [_0x31a2c7(0x22e)](_0x19d960, _0x3a3616, _0x2d20e4) {
        const _0x1dc80d = _0x31a2c7, _0x47444f = [];
        for (const [_0x30d5f7, _0x1be2d2] of _0x19d960) {
            const _0x137fd6 = _0x1be2d2?.[_0x1dc80d(0x2ba)] || _0x1be2d2?.[_0x1dc80d(0x238)] || _0x2d20e4;
            _0x137fd6 && _0x2d20e4 - _0x137fd6 > _0x3a3616 && _0x47444f[_0x1dc80d(0x1e9)](_0x30d5f7);
        }
        _0x47444f['forEach'](_0x5463f7 => _0x19d960['delete'](_0x5463f7));
        if (_0x19d960[_0x1dc80d(0x222)] > this['maxStateSize']) {
            const _0xb5b0f8 = _0x19d960[_0x1dc80d(0x222)] - this[_0x1dc80d(0x2a7)];
            let _0x1a5c08 = 0x0;
            const _0x30e3f7 = Array[_0x1dc80d(0x298)](_0x19d960[_0x1dc80d(0x27e)]())[_0x1dc80d(0x245)](([_0x4c8ebd, _0x43ea6c]) => ({
                'key': _0x4c8ebd,
                'age': _0x2d20e4 - (_0x43ea6c?.['timestamp'] || _0x43ea6c?.[_0x1dc80d(0x238)] || _0x2d20e4)
            }))[_0x1dc80d(0x1e6)]((_0x2764f4, _0x469037) => _0x469037[_0x1dc80d(0x22d)] - _0x2764f4['age'])[_0x1dc80d(0x2bc)](0x0, _0xb5b0f8);
            _0x30e3f7[_0x1dc80d(0x242)](({key: _0x36c689}) => {
                const _0x446beb = _0x1dc80d;
                _0x19d960[_0x446beb(0x1f1)](_0x36c689), _0x1a5c08++;
            }), _0x1a5c08 > 0x0 && console[_0x1dc80d(0x294)](_0x1dc80d(0x21a) + _0x1a5c08 + _0x1dc80d(0x256));
        }
    }
    ['_setupEventListeners']() {
        const _0x178e98 = _0x31a2c7;
        this[_0x178e98(0x213)]['on'](_0x178e98(0x268), () => {
            const _0x265be0 = _0x178e98;
            console[_0x265be0(0x206)]('✅\x20Connected\x20to\x20WebSocket\x20server'), this[_0x265be0(0x25f)]['failureCount'] = 0x0, this['circuitBreaker']['state'] = _0x265be0(0x2a3), this[_0x265be0(0x205)](), this[_0x265be0(0x216)]();
        }), this[_0x178e98(0x213)]['on'](_0x178e98(0x208), () => {
            const _0x3e390f = _0x178e98;
            console['warn'](_0x3e390f(0x2a4));
        }), this[_0x178e98(0x213)]['on'](_0x178e98(0x21c), _0x5a51dd => {
            const _0x2fcccf = _0x178e98;
            console[_0x2fcccf(0x200)](_0x2fcccf(0x240), _0x5a51dd), this[_0x2fcccf(0x20c)]();
        }), this['socket']['on'](_0x178e98(0x251), _0x4f0521 => this['_handleProgressUpdate'](_0x4f0521)), this[_0x178e98(0x213)]['on']('processing_complete', _0x5be293 => this['_handleComplete'](_0x5be293)), this[_0x178e98(0x213)]['on'](_0x178e98(0x1e2), _0x37bd69 => this[_0x178e98(0x280)](_0x37bd69)), this[_0x178e98(0x213)]['on'](_0x178e98(0x241), _0x54daa0 => this[_0x178e98(0x1e7)](_0x54daa0)), this['socket']['on']('automation_complete', _0x5da30f => this['_handleAutomationComplete'](_0x5da30f)), this[_0x178e98(0x213)]['on'](_0x178e98(0x25c), _0x3b41fb => this['_handleAutomationError'](_0x3b41fb)), this['socket']['on']('rendering_update', _0xba7dcf => this[_0x178e98(0x24c)](_0xba7dcf)), this[_0x178e98(0x213)]['on'](_0x178e98(0x284), _0x12a36e => this[_0x178e98(0x1f5)](_0x12a36e)), this[_0x178e98(0x213)]['on'](_0x178e98(0x29e), _0x1010db => this[_0x178e98(0x223)](_0x1010db)), this['socket']['on'](_0x178e98(0x2b3), _0x3c3cee => this['_handleAnalyticsUpdate'](_0x3c3cee)), this[_0x178e98(0x213)]['on'](_0x178e98(0x27c), _0x2da451 => this['_handleAIOperationUpdate'](_0x2da451)), this[_0x178e98(0x213)]['on'](_0x178e98(0x25a), _0x519329 => this['_handleAIOperationComplete'](_0x519329)), this[_0x178e98(0x213)]['on'](_0x178e98(0x28e), _0x3ac85a => this[_0x178e98(0x2ae)](_0x3ac85a)), this['socket']['on'](_0x178e98(0x22a), _0x582d4c => this[_0x178e98(0x2a1)](_0x582d4c)), this[_0x178e98(0x213)]['on'](_0x178e98(0x28c), _0x54c086 => {
            const _0x42aadd = _0x178e98;
            console['log']('✅\x20Joined\x20user\x20room:', _0x54c086[_0x42aadd(0x279)]);
        }), this[_0x178e98(0x213)]['on'](_0x178e98(0x232), _0x14bb0f => this['_handleClipDeleted'](_0x14bb0f)), this[_0x178e98(0x213)]['on'](_0x178e98(0x28b), () => {
            const _0x581021 = _0x178e98;
            console[_0x581021(0x206)](_0x581021(0x204)), this[_0x581021(0x296)][_0x581021(0x271)] = 0x0, this[_0x581021(0x205)]();
        }), this['socket']['on'](_0x178e98(0x230), () => {
            const _0x58a499 = _0x178e98;
            this[_0x58a499(0x296)]['attempts']++, console[_0x58a499(0x206)](_0x58a499(0x209) + this['reconnectConfig'][_0x58a499(0x271)]);
        });
    }
    ['_joinUserRoom']() {
        const _0x21cf35 = _0x31a2c7;
        this['socket']?.[_0x21cf35(0x1dd)] && this['userId'] && this[_0x21cf35(0x213)][_0x21cf35(0x29c)]('join_user_room', { 'user_id': this[_0x21cf35(0x25e)] });
    }
    ['_queueOperation'](_0x28f3b8, _0x1b94dd) {
        const _0x2dc700 = _0x31a2c7;
        this[_0x2dc700(0x28d)][_0x2dc700(0x20a)] >= this[_0x2dc700(0x289)] && (console['warn'](_0x2dc700(0x1e0)), this[_0x2dc700(0x28d)][_0x2dc700(0x24b)]());
        const _0x35bfb6 = {
            'operation': _0x28f3b8,
            'data': _0x1b94dd,
            'timestamp': Date[_0x2dc700(0x27d)](),
            'retries': 0x0,
            'maxRetries': 0x3
        };
        this[_0x2dc700(0x28d)][_0x2dc700(0x1e9)](_0x35bfb6), this[_0x2dc700(0x287)]['set'](_0x28f3b8 + '_' + Date[_0x2dc700(0x27d)](), _0x35bfb6), console['log'](_0x2dc700(0x1fe) + _0x28f3b8);
    }
    ['_processQueuedMessages']() {
        const _0x370902 = _0x31a2c7;
        if (this[_0x370902(0x28d)]['length'] === 0x0)
            return;
        console[_0x370902(0x206)](_0x370902(0x283) + this[_0x370902(0x28d)][_0x370902(0x20a)] + _0x370902(0x22c));
        while (this['messageQueue'][_0x370902(0x20a)] > 0x0) {
            const _0x2e6c1f = this[_0x370902(0x28d)][_0x370902(0x24b)]();
            try {
                this['_executeQueuedOperation'](_0x2e6c1f);
            } catch (_0x3a0100) {
                console[_0x370902(0x200)](_0x370902(0x23d), _0x3a0100), _0x2e6c1f[_0x370902(0x2af)] < _0x2e6c1f['maxRetries'] && (_0x2e6c1f[_0x370902(0x2af)]++, this[_0x370902(0x28d)][_0x370902(0x1e9)](_0x2e6c1f));
            }
        }
    }
    [_0x31a2c7(0x29d)](_0x29c0e3) {
        const _0x36e8e7 = _0x31a2c7, {
                operation: _0x3ddb06,
                data: _0xc4e0e6
            } = _0x29c0e3;
        switch (_0x3ddb06) {
        case _0x36e8e7(0x257):
            this[_0x36e8e7(0x21d)](_0xc4e0e6[_0x36e8e7(0x297)], _0xc4e0e6['projectId']);
            break;
        case 'register_task':
            this[_0x36e8e7(0x23e)](_0xc4e0e6[_0x36e8e7(0x2ac)], _0xc4e0e6['taskType']);
            break;
        default:
            console[_0x36e8e7(0x294)]('Unknown\x20queued\x20operation:\x20' + _0x3ddb06);
        }
    }
    ['registerTask'](_0x4a3c04, _0x8096ae = _0x31a2c7(0x1fd)) {
        const _0x4d834a = _0x31a2c7, _0x21a835 = {
                'id': _0x4a3c04,
                'type': _0x8096ae,
                'startTime': Date[_0x4d834a(0x27d)](),
                'timestamp': Date[_0x4d834a(0x27d)](),
                'progress': 0x0,
                'status': 'started'
            };
        this[_0x4d834a(0x1f2)][_0x4d834a(0x237)](_0x4a3c04, _0x21a835), console[_0x4d834a(0x206)](_0x4d834a(0x1ed) + _0x4a3c04);
    }
    ['_handleProgressUpdate'](_0x447d47) {
        const _0x1e1573 = _0x31a2c7;
        if (!this[_0x1e1573(0x2aa)]?.['validateIncomingMessage'](_0x447d47)) {
            console['warn'](_0x1e1573(0x203));
            return;
        }
        const {
            taskId: _0x10529b,
            status: _0x2d0f4f,
            progress: _0x54f413,
            step: _0x145d95
        } = _0x447d47;
        if (this[_0x1e1573(0x1f2)][_0x1e1573(0x228)](_0x10529b)) {
            const _0x2cdc11 = this[_0x1e1573(0x1f2)]['get'](_0x10529b);
            _0x2cdc11['progress'] = _0x54f413, _0x2cdc11[_0x1e1573(0x23c)] = _0x2d0f4f, _0x2cdc11[_0x1e1573(0x21e)] = _0x145d95, _0x2cdc11[_0x1e1573(0x2ba)] = Date[_0x1e1573(0x27d)](), this[_0x1e1573(0x243)](_0x1e1573(0x258), {
                'taskId': _0x10529b,
                'progress': _0x54f413,
                'step': _0x145d95,
                'status': _0x2d0f4f
            }), console[_0x1e1573(0x206)]('⏳\x20' + _0x10529b + ':\x20' + _0x54f413 + '%\x20-\x20' + _0x145d95);
        }
    }
    [_0x31a2c7(0x246)](_0x55757b) {
        const _0x24de38 = _0x31a2c7;
        if (!this['securityManager']?.[_0x24de38(0x220)](_0x55757b))
            return;
        const {
            taskId: _0x3d3761,
            result: _0x533127
        } = _0x55757b;
        if (this[_0x24de38(0x1f2)][_0x24de38(0x228)](_0x3d3761)) {
            const _0x17fc43 = this[_0x24de38(0x1f2)][_0x24de38(0x1fa)](_0x3d3761);
            _0x17fc43[_0x24de38(0x23c)] = _0x24de38(0x26f), _0x17fc43[_0x24de38(0x258)] = 0x64, _0x17fc43[_0x24de38(0x1de)] = _0x533127, _0x17fc43[_0x24de38(0x2ba)] = Date[_0x24de38(0x27d)](), this[_0x24de38(0x243)](_0x24de38(0x236), {
                'taskId': _0x3d3761,
                'result': _0x533127,
                'duration': Date[_0x24de38(0x27d)]() - _0x17fc43['startTime']
            }), console[_0x24de38(0x206)]('✅\x20Task\x20completed:\x20' + _0x3d3761);
        }
    }
    ['_handleError'](_0x484ddb) {
        const _0x15134d = _0x31a2c7;
        if (!this[_0x15134d(0x2aa)]?.[_0x15134d(0x220)](_0x484ddb))
            return;
        const {
            taskId: _0x5db5b6,
            error: _0x5b3348
        } = _0x484ddb;
        if (this[_0x15134d(0x1f2)][_0x15134d(0x228)](_0x5db5b6)) {
            const _0x345df1 = this[_0x15134d(0x1f2)]['get'](_0x5db5b6);
            _0x345df1[_0x15134d(0x23c)] = _0x15134d(0x200), _0x345df1[_0x15134d(0x200)] = _0x5b3348, _0x345df1[_0x15134d(0x2ba)] = Date[_0x15134d(0x27d)](), this[_0x15134d(0x243)](_0x15134d(0x200), {
                'taskId': _0x5db5b6,
                'error': _0x5b3348
            }), console['error']('❌\x20Task\x20error:\x20' + _0x5db5b6 + '\x20-\x20' + _0x5b3348);
        }
    }
    ['_handleClipDeleted'](_0x2da3eb) {
        const _0x297a1c = _0x31a2c7;
        if (!this[_0x297a1c(0x2aa)]?.[_0x297a1c(0x220)](_0x2da3eb)) {
            console[_0x297a1c(0x294)](_0x297a1c(0x218));
            return;
        }
        const {
            itemId: _0x40dc06,
            projectId: _0x362537,
            timestamp: _0xb3cc1d
        } = _0x2da3eb;
        this['_debounce'](_0x297a1c(0x2a2) + _0x40dc06, () => {
            const _0x277d1f = _0x297a1c;
            this[_0x277d1f(0x267)](_0x40dc06, _0x362537, _0xb3cc1d);
        }, this[_0x297a1c(0x2b9)]);
    }
    [_0x31a2c7(0x267)](_0x1758ae, _0x36ab46, _0x190787) {
        const _0x2739e7 = _0x31a2c7;
        try {
            this['activeTasks'][_0x2739e7(0x1f1)](_0x1758ae), this[_0x2739e7(0x23b)]['delete'](_0x1758ae), this[_0x2739e7(0x252)]['delete'](_0x36ab46), this['_emitCallback'](_0x2739e7(0x232), {
                'itemId': _0x1758ae,
                'projectId': _0x36ab46,
                'timestamp': _0x190787
            }), this[_0x2739e7(0x2aa)]?.['_logSecurityEvent']('clip_deleted_handled', {
                'itemId': _0x1758ae,
                'projectId': _0x36ab46
            }), console[_0x2739e7(0x206)]('🗑️\x20Clip\x20deleted:\x20ID=' + _0x1758ae + ',\x20Project=' + _0x36ab46);
        } catch (_0x380e42) {
            console[_0x2739e7(0x200)](_0x2739e7(0x1e3), _0x380e42);
        }
    }
    [_0x31a2c7(0x250)](_0x31d34b, _0x4a99b2, _0x1d33fd) {
        const _0x166db7 = _0x31a2c7;
        this[_0x166db7(0x226)][_0x166db7(0x228)](_0x31d34b) && clearTimeout(this[_0x166db7(0x226)][_0x166db7(0x1fa)](_0x31d34b)[_0x166db7(0x20f)]);
        const _0x402b60 = setTimeout(() => {
            const _0x2e63a6 = _0x166db7;
            _0x4a99b2(), this[_0x2e63a6(0x226)][_0x2e63a6(0x1f1)](_0x31d34b);
        }, _0x1d33fd);
        this[_0x166db7(0x226)][_0x166db7(0x237)](_0x31d34b, {
            'timerId': _0x402b60,
            'createdAt': Date[_0x166db7(0x27d)]()
        });
    }
    [_0x31a2c7(0x1e7)](_0x3e3e1c) {
        const _0x2e30e5 = _0x31a2c7;
        if (!this[_0x2e30e5(0x2aa)]?.[_0x2e30e5(0x220)](_0x3e3e1c))
            return;
        const {
            sessionId: _0x151065,
            status: _0x36ae60,
            progress: _0xafd1cc,
            step: _0x14a968,
            automationType: _0x1f4ff3
        } = _0x3e3e1c;
        this[_0x2e30e5(0x23b)][_0x2e30e5(0x237)](_0x151065, {
            'id': _0x151065,
            'type': _0x1f4ff3,
            'status': _0x36ae60,
            'progress': _0xafd1cc,
            'step': _0x14a968,
            'timestamp': Date[_0x2e30e5(0x27d)]()
        }), this[_0x2e30e5(0x243)](_0x2e30e5(0x241), {
            'sessionId': _0x151065,
            'status': _0x36ae60,
            'progress': _0xafd1cc,
            'step': _0x14a968,
            'automationType': _0x1f4ff3
        });
    }
    ['_handleAutomationComplete'](_0x50796a) {
        const _0x4ccd94 = _0x31a2c7;
        if (!this[_0x4ccd94(0x2aa)]?.[_0x4ccd94(0x220)](_0x50796a))
            return;
        const {
            sessionId: _0xb2b587,
            result: _0x319c32
        } = _0x50796a;
        if (this[_0x4ccd94(0x23b)][_0x4ccd94(0x228)](_0xb2b587)) {
            const _0x31d45a = this[_0x4ccd94(0x23b)][_0x4ccd94(0x1fa)](_0xb2b587);
            _0x31d45a[_0x4ccd94(0x23c)] = _0x4ccd94(0x26f), _0x31d45a[_0x4ccd94(0x1de)] = _0x319c32, _0x31d45a[_0x4ccd94(0x2ba)] = Date[_0x4ccd94(0x27d)]();
        }
        this[_0x4ccd94(0x243)](_0x4ccd94(0x2bb), {
            'sessionId': _0xb2b587,
            'result': _0x319c32
        });
    }
    [_0x31a2c7(0x239)](_0xe4e006) {
        const _0x44d259 = _0x31a2c7;
        if (!this[_0x44d259(0x2aa)]?.['validateIncomingMessage'](_0xe4e006))
            return;
        const {
            sessionId: _0x596231,
            error: _0x5c095e
        } = _0xe4e006;
        if (this['automationSessions']['has'](_0x596231)) {
            const _0x215be6 = this[_0x44d259(0x23b)][_0x44d259(0x1fa)](_0x596231);
            _0x215be6[_0x44d259(0x23c)] = _0x44d259(0x200), _0x215be6['error'] = _0x5c095e, _0x215be6[_0x44d259(0x2ba)] = Date[_0x44d259(0x27d)]();
        }
        this[_0x44d259(0x243)](_0x44d259(0x25c), {
            'sessionId': _0x596231,
            'error': _0x5c095e
        });
    }
    ['_handleRenderingUpdate'](_0x3b1a2f) {
        const _0x5b39ab = _0x31a2c7;
        if (!this[_0x5b39ab(0x2aa)]?.[_0x5b39ab(0x220)](_0x3b1a2f))
            return;
        const {
            jobId: _0x4a845e,
            status: _0x2c87ff,
            progress: _0x5de5bb,
            currentPhase: _0x575032,
            framesProcessed: _0x34baee,
            totalFrames: _0x5a1d5a
        } = _0x3b1a2f;
        this[_0x5b39ab(0x252)][_0x5b39ab(0x237)](_0x4a845e, {
            'id': _0x4a845e,
            'status': _0x2c87ff,
            'progress': _0x5de5bb,
            'currentPhase': _0x575032,
            'framesProcessed': _0x34baee,
            'totalFrames': _0x5a1d5a,
            'timestamp': Date['now']()
        }), this[_0x5b39ab(0x243)](_0x5b39ab(0x286), {
            'jobId': _0x4a845e,
            'status': _0x2c87ff,
            'progress': _0x5de5bb,
            'currentPhase': _0x575032,
            'framesProcessed': _0x34baee,
            'totalFrames': _0x5a1d5a
        });
    }
    [_0x31a2c7(0x1f5)](_0x332b8f) {
        const _0x33dcc0 = _0x31a2c7;
        if (!this['securityManager']?.[_0x33dcc0(0x220)](_0x332b8f))
            return;
        const {
            jobId: _0x2ffec0,
            outputPath: _0xf31047,
            duration: _0x22e31e
        } = _0x332b8f;
        if (this[_0x33dcc0(0x252)]['has'](_0x2ffec0)) {
            const _0x4efc46 = this[_0x33dcc0(0x252)][_0x33dcc0(0x1fa)](_0x2ffec0);
            _0x4efc46['status'] = _0x33dcc0(0x26f), _0x4efc46[_0x33dcc0(0x1d9)] = _0xf31047, _0x4efc46[_0x33dcc0(0x1e5)] = _0x22e31e, _0x4efc46[_0x33dcc0(0x2ba)] = Date[_0x33dcc0(0x27d)]();
        }
        this['_emitCallback']('rendering_complete', {
            'jobId': _0x2ffec0,
            'outputPath': _0xf31047,
            'duration': _0x22e31e
        });
    }
    [_0x31a2c7(0x223)](_0x37b7c0) {
        const _0x23c9ba = _0x31a2c7;
        if (!this[_0x23c9ba(0x2aa)]?.[_0x23c9ba(0x220)](_0x37b7c0))
            return;
        const {
            jobId: _0x40bf68,
            error: _0x446734,
            phase: _0x1fff9b
        } = _0x37b7c0;
        if (this[_0x23c9ba(0x252)][_0x23c9ba(0x228)](_0x40bf68)) {
            const _0x40b5b0 = this[_0x23c9ba(0x252)]['get'](_0x40bf68);
            _0x40b5b0[_0x23c9ba(0x23c)] = 'error', _0x40b5b0[_0x23c9ba(0x200)] = _0x446734, _0x40b5b0[_0x23c9ba(0x261)] = _0x1fff9b, _0x40b5b0[_0x23c9ba(0x2ba)] = Date['now']();
        }
        this[_0x23c9ba(0x243)]('rendering_error', {
            'jobId': _0x40bf68,
            'error': _0x446734,
            'phase': _0x1fff9b
        });
    }
    [_0x31a2c7(0x259)](_0x1c804f) {
        const _0x1c8bb4 = _0x31a2c7;
        if (!this[_0x1c8bb4(0x2aa)]?.[_0x1c8bb4(0x220)](_0x1c804f))
            return;
        const {
            streamId: _0x3b8a5d,
            metrics: _0x44045a,
            timestamp: _0x39869a
        } = _0x1c804f;
        this[_0x1c8bb4(0x1f9)][_0x1c8bb4(0x237)](_0x3b8a5d, {
            'id': _0x3b8a5d,
            'metrics': _0x44045a,
            'timestamp': _0x39869a || Date[_0x1c8bb4(0x27d)]()
        }), this[_0x1c8bb4(0x243)](_0x1c8bb4(0x2b3), {
            'streamId': _0x3b8a5d,
            'metrics': _0x44045a,
            'timestamp': _0x39869a
        });
    }
    ['_handleAIOperationUpdate'](_0x796e62) {
        const _0x2f9507 = _0x31a2c7;
        if (!this[_0x2f9507(0x2aa)]?.[_0x2f9507(0x220)](_0x796e62))
            return;
        const {
            operationId: _0x217586,
            status: _0x307281,
            progress: _0x2eb2c9,
            operation: _0x13de5c,
            currentStep: _0x473a9c
        } = _0x796e62;
        this[_0x2f9507(0x24d)][_0x2f9507(0x237)](_0x217586, {
            'id': _0x217586,
            'status': _0x307281,
            'progress': _0x2eb2c9,
            'operation': _0x13de5c,
            'currentStep': _0x473a9c,
            'timestamp': Date['now']()
        }), this[_0x2f9507(0x243)]('ai_operation_update', {
            'operationId': _0x217586,
            'status': _0x307281,
            'progress': _0x2eb2c9,
            'operation': _0x13de5c,
            'currentStep': _0x473a9c
        });
    }
    [_0x31a2c7(0x1f0)](_0x54670c) {
        const _0x5bd3f1 = _0x31a2c7;
        if (!this[_0x5bd3f1(0x2aa)]?.[_0x5bd3f1(0x220)](_0x54670c))
            return;
        const {
            operationId: _0x58b98c,
            result: _0x1e1e8d,
            output: _0x1eccff
        } = _0x54670c;
        if (this[_0x5bd3f1(0x24d)]['has'](_0x58b98c)) {
            const _0x159f7b = this[_0x5bd3f1(0x24d)][_0x5bd3f1(0x1fa)](_0x58b98c);
            _0x159f7b[_0x5bd3f1(0x23c)] = _0x5bd3f1(0x26f), _0x159f7b[_0x5bd3f1(0x1de)] = _0x1e1e8d, _0x159f7b['output'] = _0x1eccff, _0x159f7b['timestamp'] = Date[_0x5bd3f1(0x27d)]();
        }
        this[_0x5bd3f1(0x243)]('ai_operation_complete', {
            'operationId': _0x58b98c,
            'result': _0x1e1e8d,
            'output': _0x1eccff
        });
    }
    [_0x31a2c7(0x2ae)](_0x30dbbf) {
        const _0x101813 = _0x31a2c7;
        if (!this[_0x101813(0x2aa)]?.['validateIncomingMessage'](_0x30dbbf))
            return;
        const {
            operationId: _0xdbb41d,
            error: _0x3cac61
        } = _0x30dbbf;
        if (this[_0x101813(0x24d)][_0x101813(0x228)](_0xdbb41d)) {
            const _0x139e23 = this[_0x101813(0x24d)][_0x101813(0x1fa)](_0xdbb41d);
            _0x139e23[_0x101813(0x23c)] = 'error', _0x139e23[_0x101813(0x200)] = _0x3cac61, _0x139e23['timestamp'] = Date[_0x101813(0x27d)]();
        }
        this['_emitCallback'](_0x101813(0x28e), {
            'operationId': _0xdbb41d,
            'error': _0x3cac61
        });
    }
    [_0x31a2c7(0x2a1)](_0x524806) {
        const _0x308f55 = _0x31a2c7;
        if (!this['securityManager']?.[_0x308f55(0x220)](_0x524806))
            return;
        const {
            operations: _0x35ac04,
            type: _0x261c85
        } = _0x524806;
        if (_0x261c85 === 'processing')
            _0x35ac04[_0x308f55(0x242)](_0x4fb35e => {
                const _0x3baa58 = _0x308f55;
                this[_0x3baa58(0x1f2)][_0x3baa58(0x237)](_0x4fb35e['id'], {
                    ..._0x4fb35e,
                    'timestamp': Date['now']()
                });
            });
        else {
            if (_0x261c85 === _0x308f55(0x27f))
                _0x35ac04['forEach'](_0x171ee2 => {
                    const _0x89de81 = _0x308f55;
                    this[_0x89de81(0x23b)][_0x89de81(0x237)](_0x171ee2['id'], {
                        ..._0x171ee2,
                        'timestamp': Date[_0x89de81(0x27d)]()
                    });
                });
            else {
                if (_0x261c85 === 'rendering')
                    _0x35ac04[_0x308f55(0x242)](_0x41b507 => {
                        const _0x2284f1 = _0x308f55;
                        this['renderingJobs'][_0x2284f1(0x237)](_0x41b507['id'], {
                            ..._0x41b507,
                            'timestamp': Date['now']()
                        });
                    });
                else
                    _0x261c85 === 'ai_operations' && _0x35ac04[_0x308f55(0x242)](_0x20761b => {
                        const _0x440d4a = _0x308f55;
                        this[_0x440d4a(0x24d)][_0x440d4a(0x237)](_0x20761b['id'], {
                            ..._0x20761b,
                            'timestamp': Date[_0x440d4a(0x27d)]()
                        });
                    });
            }
        }
        console[_0x308f55(0x206)]('📦\x20Batch\x20operations\x20(' + _0x261c85 + _0x308f55(0x26a) + _0x35ac04[_0x308f55(0x20a)] + '\x20items');
    }
    [_0x31a2c7(0x21d)](_0x921abf, _0x2650d) {
        const _0x1dffbd = _0x31a2c7;
        if (!this[_0x1dffbd(0x213)]?.[_0x1dffbd(0x1dd)])
            return this[_0x1dffbd(0x288)]('delete_clip', {
                'itemId': _0x921abf,
                'projectId': _0x2650d
            }), ![];
        try {
            const _0x202d21 = _0x1dffbd(0x257), _0x55e659 = {
                    'itemId': _0x921abf,
                    'projectId': _0x2650d,
                    'timestamp': Date[_0x1dffbd(0x27d)](),
                    'userId': this[_0x1dffbd(0x25e)]
                };
            if (!this['securityManager'][_0x1dffbd(0x201)](_0x202d21, _0x55e659))
                return console['warn'](_0x1dffbd(0x1e1)), ![];
            const _0xca89dc = this[_0x1dffbd(0x2aa)][_0x1dffbd(0x227)](_0x202d21, _0x55e659);
            return this[_0x1dffbd(0x213)][_0x1dffbd(0x29c)](_0x202d21, _0xca89dc), console[_0x1dffbd(0x206)]('📤\x20Clip\x20deletion\x20emitted:\x20' + _0x921abf), !![];
        } catch (_0x1b96c5) {
            return console[_0x1dffbd(0x200)](_0x1dffbd(0x264), _0x1b96c5), this['_queueOperation'](_0x1dffbd(0x257), {
                'itemId': _0x921abf,
                'projectId': _0x2650d
            }), ![];
        }
    }
    [_0x31a2c7(0x212)](_0x5b76f6, _0x2c07ee) {
        const _0x32a0a5 = _0x31a2c7;
        this[_0x32a0a5(0x213)]?.[_0x32a0a5(0x1dd)] && (this['socket'][_0x32a0a5(0x29c)](_0x32a0a5(0x224), {
            'session_id': _0x5b76f6,
            'automation_type': _0x2c07ee
        }), console[_0x32a0a5(0x206)]('📝\x20Automation\x20session\x20registered:\x20' + _0x5b76f6));
    }
    [_0x31a2c7(0x1ff)](_0x368096, _0x1aa5e8, _0x583294) {
        const _0x2d220e = _0x31a2c7;
        this[_0x2d220e(0x213)]?.[_0x2d220e(0x1dd)] && (this[_0x2d220e(0x213)][_0x2d220e(0x29c)]('register_rendering_job', {
            'job_id': _0x368096,
            'project_id': _0x1aa5e8,
            'ranks': _0x583294
        }), console['log'](_0x2d220e(0x2b4) + _0x368096));
    }
    [_0x31a2c7(0x2a6)](_0x126107, _0x3f0c56) {
        const _0x2f7271 = _0x31a2c7;
        this['socket']?.[_0x2f7271(0x1dd)] && (this['socket'][_0x2f7271(0x29c)](_0x2f7271(0x273), {
            'stream_id': _0x126107,
            'source': _0x3f0c56
        }), console[_0x2f7271(0x206)](_0x2f7271(0x285) + _0x126107));
    }
    [_0x31a2c7(0x26d)](_0x1b3ffe, _0x372728) {
        const _0x37fc32 = _0x31a2c7;
        this[_0x37fc32(0x213)]?.[_0x37fc32(0x1dd)] && (this[_0x37fc32(0x213)][_0x37fc32(0x29c)](_0x37fc32(0x2b1), {
            'operation_id': _0x1b3ffe,
            'operation_type': _0x372728
        }), console[_0x37fc32(0x206)](_0x37fc32(0x27a) + _0x1b3ffe));
    }
    ['on'](_0x19b745, _0x37f43a) {
        const _0x20fe80 = _0x31a2c7;
        !this[_0x20fe80(0x1df)]['has'](_0x19b745) && this[_0x20fe80(0x1df)][_0x20fe80(0x237)](_0x19b745, []), this['callbacks'][_0x20fe80(0x1fa)](_0x19b745)['push'](_0x37f43a);
    }
    [_0x31a2c7(0x2ad)](_0x468107, _0x4c8cc5) {
        const _0x5b61d4 = _0x31a2c7;
        if (!this[_0x5b61d4(0x1df)]['has'](_0x468107))
            return;
        const _0x14953d = this[_0x5b61d4(0x1df)]['get'](_0x468107), _0x12e32e = _0x14953d['indexOf'](_0x4c8cc5);
        _0x12e32e > -0x1 && _0x14953d[_0x5b61d4(0x1e4)](_0x12e32e, 0x1);
    }
    ['_emitCallback'](_0x259294, _0x440e10) {
        const _0xdce24 = _0x31a2c7;
        if (!this[_0xdce24(0x1df)][_0xdce24(0x228)](_0x259294))
            return;
        this[_0xdce24(0x1df)]['get'](_0x259294)[_0xdce24(0x242)](_0x57f27d => {
            const _0x542e5d = _0xdce24;
            try {
                _0x57f27d(_0x440e10);
            } catch (_0x293656) {
                console['error'](_0x542e5d(0x26c) + _0x259294 + _0x542e5d(0x247), _0x293656);
            }
        });
    }
    [_0x31a2c7(0x2ab)](_0x443f20 = 0x0, _0x55e4fc = 0x64) {
        const _0x381fce = _0x31a2c7, _0x3c0641 = Array[_0x381fce(0x298)](this['activeTasks']['values']()), _0xdc8e40 = _0x443f20 * _0x55e4fc, _0x2f502b = _0xdc8e40 + _0x55e4fc;
        return {
            'items': _0x3c0641['slice'](_0xdc8e40, _0x2f502b),
            'total': _0x3c0641[_0x381fce(0x20a)],
            'page': _0x443f20,
            'pageSize': _0x55e4fc,
            'totalPages': Math[_0x381fce(0x270)](_0x3c0641[_0x381fce(0x20a)] / _0x55e4fc)
        };
    }
    [_0x31a2c7(0x29f)](_0x302d1e = 0x0, _0x3249f3 = 0x64) {
        const _0x2d98cf = _0x31a2c7, _0x72c09f = Array[_0x2d98cf(0x298)](this['automationSessions'][_0x2d98cf(0x233)]()), _0x24ef67 = _0x302d1e * _0x3249f3, _0xdbcc73 = _0x24ef67 + _0x3249f3;
        return {
            'items': _0x72c09f['slice'](_0x24ef67, _0xdbcc73),
            'total': _0x72c09f[_0x2d98cf(0x20a)],
            'page': _0x302d1e,
            'pageSize': _0x3249f3,
            'totalPages': Math['ceil'](_0x72c09f[_0x2d98cf(0x20a)] / _0x3249f3)
        };
    }
    [_0x31a2c7(0x234)](_0x55a559 = 0x0, _0xb0ad4 = 0x64) {
        const _0x87b670 = _0x31a2c7, _0x2847b3 = Array[_0x87b670(0x298)](this[_0x87b670(0x252)][_0x87b670(0x233)]()), _0x183dec = _0x55a559 * _0xb0ad4, _0x43704f = _0x183dec + _0xb0ad4;
        return {
            'items': _0x2847b3[_0x87b670(0x2bc)](_0x183dec, _0x43704f),
            'total': _0x2847b3['length'],
            'page': _0x55a559,
            'pageSize': _0xb0ad4,
            'totalPages': Math[_0x87b670(0x270)](_0x2847b3[_0x87b670(0x20a)] / _0xb0ad4)
        };
    }
    [_0x31a2c7(0x24f)](_0x2a025d = 0x0, _0x56e2c2 = 0x64) {
        const _0xbbb899 = _0x31a2c7, _0x502872 = Array[_0xbbb899(0x298)](this[_0xbbb899(0x24d)][_0xbbb899(0x233)]()), _0x39f310 = _0x2a025d * _0x56e2c2, _0x3d1200 = _0x39f310 + _0x56e2c2;
        return {
            'items': _0x502872['slice'](_0x39f310, _0x3d1200),
            'total': _0x502872[_0xbbb899(0x20a)],
            'page': _0x2a025d,
            'pageSize': _0x56e2c2,
            'totalPages': Math[_0xbbb899(0x270)](_0x502872[_0xbbb899(0x20a)] / _0x56e2c2)
        };
    }
    [_0x31a2c7(0x22f)](_0x2fa9d0 = 0x0, _0x542da2 = 0x64) {
        const _0x5f084a = _0x31a2c7, _0x3c4adf = Array[_0x5f084a(0x298)](this[_0x5f084a(0x1f9)][_0x5f084a(0x233)]()), _0x2ff179 = _0x2fa9d0 * _0x542da2, _0x188b49 = _0x2ff179 + _0x542da2;
        return {
            'items': _0x3c4adf[_0x5f084a(0x2bc)](_0x2ff179, _0x188b49),
            'total': _0x3c4adf[_0x5f084a(0x20a)],
            'page': _0x2fa9d0,
            'pageSize': _0x542da2,
            'totalPages': Math['ceil'](_0x3c4adf['length'] / _0x542da2)
        };
    }
    [_0x31a2c7(0x225)]() {
        const _0x3189b0 = _0x31a2c7;
        return this[_0x3189b0(0x213)]?.['connected'] || ![];
    }
    ['getConnectionStatus']() {
        const _0x27ef2b = _0x31a2c7;
        return {
            'connected': this['isConnected'](),
            'userId': this[_0x27ef2b(0x25e)],
            'circuitBreakerState': this[_0x27ef2b(0x25f)]['state'],
            'queuedMessages': this[_0x27ef2b(0x28d)][_0x27ef2b(0x20a)],
            'reconnectAttempts': this['reconnectConfig'][_0x27ef2b(0x271)],
            'activeTasks': this[_0x27ef2b(0x1f2)][_0x27ef2b(0x222)],
            'activeAutomation': this[_0x27ef2b(0x23b)][_0x27ef2b(0x222)]
        };
    }
    [_0x31a2c7(0x208)]() {
        const _0x113051 = _0x31a2c7;
        this[_0x113051(0x24a)] = !![], this[_0x113051(0x255)](), this[_0x113051(0x2a9)](), this[_0x113051(0x213)] && this[_0x113051(0x213)][_0x113051(0x208)](), this[_0x113051(0x1f2)][_0x113051(0x292)](), this[_0x113051(0x23b)][_0x113051(0x292)](), this[_0x113051(0x252)]['clear'](), this[_0x113051(0x1f9)][_0x113051(0x292)](), this[_0x113051(0x24d)]['clear'](), this['pendingOperations']['clear'](), this[_0x113051(0x28d)] = [], this[_0x113051(0x226)][_0x113051(0x292)](), this['securityManager']?.[_0x113051(0x248)](), console[_0x113051(0x206)](_0x113051(0x2a0));
    }
}
function _0x172a(_0x3c2a1b, _0x1af930) {
    _0x3c2a1b = _0x3c2a1b - 0x1d9;
    const _0x9fc9da = _0x9fc9();
    let _0x172aa9 = _0x9fc9da[_0x3c2a1b];
    return _0x172aa9;
}
function _0x9fc9() {
    const _0x2d32f8 = [
        'auth_token',
        'missedHeartbeats',
        '📝\x20Task\x20registered:\x20',
        '_startConnectionHealthCheck',
        'pendingOperations',
        '_handleAIOperationComplete',
        'delete',
        'activeTasks',
        'startsWith',
        '_startCleanupProcess',
        '_handleRenderingComplete',
        'HEARTBEAT_INTERVAL',
        'polling',
        'backendHost',
        'analyticsStreams',
        'get',
        'healthCheckInterval',
        'CLEANUP_INTERVAL',
        'processing',
        '📤\x20Queued\x20operation:\x20',
        'registerRenderingJob',
        'error',
        'validateMessage',
        '_startHeartbeat',
        '⚠️\x20Progress\x20update\x20failed\x20security\x20validation',
        '✅\x20Reconnected\x20to\x20server',
        '_joinUserRoom',
        'log',
        'http://',
        'disconnect',
        '⚠️\x20Reconnection\x20attempt\x20',
        'length',
        'nextAttemptTime',
        '_handleConnectionFailure',
        'connectionHealthCheck',
        'maxReconnectAttempts',
        'timerId',
        'lastHeartbeatTime',
        'MAX_MISSED_HEARTBEATS',
        'registerAutomationSession',
        'socket',
        'half-open',
        'circuitBreakerResetTimeout',
        '_processQueuedMessages',
        '⚠️\x20Circuit\x20breaker\x20open,\x20cannot\x20connect',
        '⚠️\x20Clip\x20deletion\x20failed\x20validation',
        '328035YgGBvH',
        '⚠️\x20Removed\x20',
        'serverUrl',
        'connect_error',
        'emitClipDeletion',
        'currentStep',
        '❌\x20UserId\x20required\x20to\x20connect',
        'validateIncomingMessage',
        'undefined',
        'size',
        '_handleRenderingError',
        'register_automation_session',
        'isConnected',
        'debouncedOperations',
        'createSecureEnvelope',
        'has',
        '_getAuthToken',
        'batch_operations',
        'HEALTH_CHECK_INTERVAL',
        '\x20queued\x20messages',
        'age',
        '_cleanupMap',
        'getAnalyticsStreams',
        'reconnect_attempt',
        'batchSize',
        'clip_deleted',
        'values',
        'getActiveRenderingJobs',
        'heartbeatInterval',
        'complete',
        'set',
        'startTime',
        '_handleAutomationError',
        'initialDelay',
        'automationSessions',
        'status',
        '❌\x20Error\x20processing\x20queued\x20operation:',
        'registerTask',
        'cookie',
        '❌\x20Connection\x20error:',
        'automation_update',
        'forEach',
        '_emitCallback',
        '1095520YlRDCI',
        'map',
        '_handleComplete',
        '\x20callback:',
        'destroy',
        'heartbeat',
        'isManuallyDisconnected',
        'shift',
        '_handleRenderingUpdate',
        'aiOperations',
        '_generateSecureId',
        'getActiveAIOperations',
        '_debounce',
        'processing_update',
        'renderingJobs',
        'SolisAIWebSocketClient',
        '❌\x20Socket.IO\x20not\x20loaded',
        '_stopHeartbeat',
        '\x20entries\x20due\x20to\x20size\x20limit',
        'delete_clip',
        'progress',
        '_handleAnalyticsUpdate',
        'ai_operation_complete',
        '4oROLpt',
        'automation_error',
        '66766FkZUXR',
        'userId',
        'circuitBreaker',
        'sessionId',
        'failedPhase',
        '1585464MfUJnz',
        '776yNqmrK',
        '❌\x20Error\x20emitting\x20clip\x20deletion:',
        '5500',
        'split',
        '_performClipDeletion',
        'connect',
        'connection_failure',
        '):\x20',
        '_buildAuthConfig',
        'Error\x20in\x20',
        'registerAIOperation',
        'createdAt',
        'completed',
        'ceil',
        'attempts',
        '12131306HTuIbO',
        'register_analytics_stream',
        '_setupEventListeners',
        '_performCleanup',
        'init',
        '⚠️\x20Connection\x20health\x20degraded,\x20forcing\x20reconnect',
        '9vcVgxa',
        'user_id',
        '📝\x20AI\x20operation\x20registered:\x20',
        'STATE_ENTRY_MAX_AGE',
        'ai_operation_update',
        'now',
        'entries',
        'automation',
        '_handleError',
        'getItem',
        'circuitBreakerThreshold',
        '📨\x20Processing\x20',
        'rendering_complete',
        '📝\x20Analytics\x20stream\x20registered:\x20',
        'rendering_update',
        'queuedOperations',
        '_queueOperation',
        'maxQueueSize',
        'cleanupTimers',
        'reconnect',
        'room_joined',
        'messageQueue',
        'ai_operation_error',
        'open',
        '🧹\x20Cleanup\x20completed',
        '19285CtgLbG',
        'clear',
        'batchTimer',
        'warn',
        'exports',
        'reconnectConfig',
        'itemId',
        'from',
        'sessionIdRefreshed',
        'websocket',
        '⚠️\x20Circuit\x20breaker\x20opened\x20due\x20to\x20excessive\x20failures',
        'emit',
        '_executeQueuedOperation',
        'rendering_error',
        'getActiveAutomationSessions',
        '🔌\x20WebSocket\x20disconnected\x20gracefully',
        '_handleBatchOperations',
        'clip_delete_',
        'closed',
        '⚠️\x20Disconnected\x20from\x20WebSocket\x20server',
        'No\x20authentication\x20token\x20available',
        'registerAnalyticsStream',
        'maxStateSize',
        '_detectServerUrl',
        '_stopConnectionHealthCheck',
        'securityManager',
        'getActiveTasks',
        'taskId',
        'off',
        '_handleAIOperationError',
        'retries',
        '✅\x20WebSocket\x20connected\x20successfully',
        'register_ai_operation',
        'state',
        'analytics_update',
        '📝\x20Rendering\x20job\x20registered:\x20',
        'find',
        'batchTimeout',
        '❌\x20WebSocket\x20connection\x20failed:',
        '7ALCPOv',
        'debounceDelay',
        'timestamp',
        'automation_complete',
        'slice',
        'outputPath',
        'stateMaxAge',
        'cleanupInterval',
        '12ZRamet',
        'connected',
        'result',
        'callbacks',
        '⚠️\x20Message\x20queue\x20full,\x20dropping\x20oldest\x20message',
        '⚠️\x20Message\x20validation\x20failed',
        'processing_error',
        '❌\x20Error\x20handling\x20clip\x20deletion:',
        'splice',
        'duration',
        'sort',
        '_handleAutomationUpdate',
        'failureCount',
        'push',
        '1850940CBfqHk'
    ];
    _0x9fc9 = function () {
        return _0x2d32f8;
    };
    return _0x9fc9();
}
typeof module !== _0x31a2c7(0x221) && module['exports'] && (module[_0x31a2c7(0x295)] = SolisAIWebSocketClient);
typeof window !== _0x31a2c7(0x221) && (window[_0x31a2c7(0x253)] = SolisAIWebSocketClient);