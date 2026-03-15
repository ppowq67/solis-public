const _0x340789 = _0x4003;
(function (_0x2fdad7, _0x127ded) {
    const _0xef87a = _0x4003, _0x39147b = _0x2fdad7();
    while (!![]) {
        try {
            const _0x256ad3 = -parseInt(_0xef87a(0x236)) / 0x1 * (parseInt(_0xef87a(0x1ee)) / 0x2) + -parseInt(_0xef87a(0x1fc)) / 0x3 * (parseInt(_0xef87a(0x215)) / 0x4) + -parseInt(_0xef87a(0x260)) / 0x5 + -parseInt(_0xef87a(0x242)) / 0x6 * (parseInt(_0xef87a(0x244)) / 0x7) + -parseInt(_0xef87a(0x1d7)) / 0x8 + parseInt(_0xef87a(0x249)) / 0x9 * (-parseInt(_0xef87a(0x213)) / 0xa) + parseInt(_0xef87a(0x23a)) / 0xb;
            if (_0x256ad3 === _0x127ded)
                break;
            else
                _0x39147b['push'](_0x39147b['shift']());
        } catch (_0x25d90d) {
            _0x39147b['push'](_0x39147b['shift']());
        }
    }
}(_0x32c3, 0x54884));
const _0xaad644 = (function () {
        let _0x23292d = !![];
        return function (_0x16182c, _0x326d03) {
            const _0x16fe3c = _0x23292d ? function () {
                const _0x27200c = _0x4003;
                if (_0x326d03) {
                    const _0x171cb6 = _0x326d03[_0x27200c(0x25e)](_0x16182c, arguments);
                    return _0x326d03 = null, _0x171cb6;
                }
            } : function () {
            };
            return _0x23292d = ![], _0x16fe3c;
        };
    }()), _0x3b2150 = _0xaad644(this, function () {
        const _0x2c4077 = _0x4003;
        let _0x357397;
        try {
            const _0x56caa6 = Function(_0x2c4077(0x199) + _0x2c4077(0x259) + ');');
            _0x357397 = _0x56caa6();
        } catch (_0x269719) {
            _0x357397 = window;
        }
        const _0x436a26 = _0x357397[_0x2c4077(0x23c)] = _0x357397[_0x2c4077(0x23c)] || {}, _0x15cc90 = [
                _0x2c4077(0x1eb),
                _0x2c4077(0x1a7),
                _0x2c4077(0x194),
                _0x2c4077(0x1c9),
                'exception',
                'table',
                _0x2c4077(0x21e)
            ];
        for (let _0x5a3edc = 0x0; _0x5a3edc < _0x15cc90['length']; _0x5a3edc++) {
            const _0x29ca51 = _0xaad644['constructor'][_0x2c4077(0x19c)][_0x2c4077(0x241)](_0xaad644), _0x20d991 = _0x15cc90[_0x5a3edc], _0x5cdb45 = _0x436a26[_0x20d991] || _0x29ca51;
            _0x29ca51['__proto__'] = _0xaad644[_0x2c4077(0x241)](_0xaad644), _0x29ca51[_0x2c4077(0x23b)] = _0x5cdb45[_0x2c4077(0x23b)][_0x2c4077(0x241)](_0x5cdb45), _0x436a26[_0x20d991] = _0x29ca51;
        }
    });
_0x3b2150();
class _0x1899f3 {
    constructor(_0x478b1d = null, _0x3dcdd5 = {}) {
        const _0x81abb2 = _0x4003;
        this[_0x81abb2(0x188)] = _0x478b1d || this[_0x81abb2(0x23e)](), this['socket'] = null, this[_0x81abb2(0x186)] = null, this[_0x81abb2(0x25f)] = null, this[_0x81abb2(0x202)] = _0x3dcdd5[_0x81abb2(0x1f7)] || 0x7530, this[_0x81abb2(0x223)] = _0x3dcdd5[_0x81abb2(0x22b)] || 0x2710, this[_0x81abb2(0x269)] = 0x3, this[_0x81abb2(0x1e1)] = _0x3dcdd5['cleanupInterval'] || 0x493e0, this[_0x81abb2(0x1b8)] = _0x3dcdd5[_0x81abb2(0x1b0)] || 0x36ee80, this['connectionHealthCheck'] = {
            'lastHeartbeatTime': null,
            'missedHeartbeats': 0x0,
            'maxMissedHeartbeats': this[_0x81abb2(0x269)],
            'healthCheckInterval': null
        }, this[_0x81abb2(0x21b)] = {
            'state': 'closed',
            'failureCount': 0x0,
            'failureThreshold': _0x3dcdd5['circuitBreakerThreshold'] || 0x5,
            'resetTimeout': _0x3dcdd5[_0x81abb2(0x1a4)] || 0xea60,
            'nextAttemptTime': null
        }, this['messageQueue'] = [], this[_0x81abb2(0x192)] = _0x3dcdd5[_0x81abb2(0x192)] || 0x3e8, this[_0x81abb2(0x1cc)] = new Map(), this[_0x81abb2(0x266)] = [], this[_0x81abb2(0x1dd)] = _0x3dcdd5[_0x81abb2(0x1dd)] || 0xa, this['batchTimeout'] = _0x3dcdd5['batchTimeout'] || 0x3e8, this['batchTimer'] = null, this[_0x81abb2(0x1a3)] = new Map(), this[_0x81abb2(0x1e0)] = _0x3dcdd5[_0x81abb2(0x1e0)] || 0x12c, this['activeTasks'] = new Map(), this[_0x81abb2(0x1dc)] = new Map(), this['renderingJobs'] = new Map(), this[_0x81abb2(0x1c5)] = new Map(), this['aiOperations'] = new Map(), this[_0x81abb2(0x1ad)] = new Map(), this[_0x81abb2(0x24d)] = new Map(), this[_0x81abb2(0x1f5)] = _0x3dcdd5['maxStateSize'] || 0x2710, this['callbacks'] = new Map(), this[_0x81abb2(0x1d8)] = {
            'attempts': 0x0,
            'maxAttempts': _0x3dcdd5['maxReconnectAttempts'] || 0xa,
            'initialDelay': 0x3e8,
            'maxDelay': 0x7530,
            'multiplier': 1.5
        }, this[_0x81abb2(0x1aa)] = ![], this['heartbeatInterval'] = null, console['log']('🔌\x20WebSocket\x20Client\x20v2\x20initialized');
    }
    [_0x340789(0x23e)]() {
        const _0x22e0f5 = _0x340789;
        try {
            const _0x1f11bf = new URL(window[_0x22e0f5(0x1c4)] || _0x22e0f5(0x250)), _0x40c66c = _0x1f11bf[_0x22e0f5(0x196)] === _0x22e0f5(0x18c) ? _0x22e0f5(0x240) : _0x22e0f5(0x1c3);
            return _0x40c66c + '//' + _0x1f11bf[_0x22e0f5(0x230)];
        } catch (_0x2d38b5) {
            return console[_0x22e0f5(0x1c9)](_0x22e0f5(0x258), _0x2d38b5), _0x22e0f5(0x1de);
        }
    }
    [_0x340789(0x1d9)](_0x35daab, _0x4bb306 = null) {
        const _0x44e213 = _0x340789;
        if (!_0x35daab)
            return console['error'](_0x44e213(0x21c)), ![];
        this[_0x44e213(0x186)] = _0x35daab, this[_0x44e213(0x1aa)] = ![];
        !_0x4bb306 && typeof WebSocketSecurityManager !== 'undefined' && (_0x4bb306 = new WebSocketSecurityManager());
        if (!_0x4bb306)
            return console['error'](_0x44e213(0x26d)), ![];
        this[_0x44e213(0x25f)] = _0x4bb306, this['securityManager'][_0x44e213(0x1af)](this[_0x44e213(0x1ef)](), _0x35daab);
        if (typeof io === _0x44e213(0x1a1))
            return console[_0x44e213(0x1c9)](_0x44e213(0x20b)), ![];
        if (this[_0x44e213(0x21b)][_0x44e213(0x1ca)] === _0x44e213(0x265)) {
            const _0x4a8745 = Date[_0x44e213(0x208)]();
            if (_0x4a8745 < this['circuitBreaker']['nextAttemptTime'])
                return console[_0x44e213(0x1a7)](_0x44e213(0x23d)), this[_0x44e213(0x24c)](_0x44e213(0x1d9), { 'userId': _0x35daab }), ![];
            this[_0x44e213(0x21b)][_0x44e213(0x1ca)] = _0x44e213(0x206);
        }
        try {
            const _0x23414a = this[_0x44e213(0x263)]();
            return this[_0x44e213(0x270)] = io(this[_0x44e213(0x188)], {
                'reconnection': !![],
                'reconnectionDelay': this[_0x44e213(0x1d8)][_0x44e213(0x24a)],
                'reconnectionDelayMax': this[_0x44e213(0x1d8)][_0x44e213(0x237)],
                'reconnectionAttempts': this[_0x44e213(0x1d8)][_0x44e213(0x210)],
                'transports': [
                    _0x44e213(0x219),
                    _0x44e213(0x1b4)
                ],
                'upgrade': ![],
                'forceNew': !![],
                'rememberUpgrade': ![],
                'sync\x20disconnect\x20on\x20unload': !![],
                'autoConnect': !![],
                'auth': _0x23414a
            }), this[_0x44e213(0x21d)](), this[_0x44e213(0x1b1)](), this[_0x44e213(0x1d2)](), this[_0x44e213(0x1c7)](), console[_0x44e213(0x1eb)](_0x44e213(0x226)), !![];
        } catch (_0x5057b4) {
            return console[_0x44e213(0x1c9)](_0x44e213(0x252), _0x5057b4), this[_0x44e213(0x1d3)](), ![];
        }
    }
    [_0x340789(0x263)]() {
        const _0x3273e9 = _0x340789, _0x3c88da = this[_0x3273e9(0x1ef)]();
        if (!_0x3c88da)
            throw new Error('No\x20authentication\x20token\x20available');
        return this['securityManager'] && !this['securityManager']['sessionIdRefreshed'] && (this['securityManager'][_0x3273e9(0x1c8)] = this[_0x3273e9(0x25f)]['_generateSecureId'](), this[_0x3273e9(0x25f)][_0x3273e9(0x239)] = !![]), {
            'token': _0x3c88da,
            'userId': this[_0x3273e9(0x186)],
            'timestamp': Date[_0x3273e9(0x208)](),
            'sessionId': this[_0x3273e9(0x25f)]?.['sessionId']
        };
    }
    [_0x340789(0x1ef)]() {
        const _0x24568b = _0x340789;
        return sessionStorage[_0x24568b(0x26e)](_0x24568b(0x22f)) || document[_0x24568b(0x247)][_0x24568b(0x181)](';\x20')[_0x24568b(0x18e)](_0x2831a2 => _0x2831a2[_0x24568b(0x1e6)](_0x24568b(0x1bb)))?.[_0x24568b(0x181)]('=')[0x1] || null;
    }
    [_0x340789(0x1d3)]() {
        const _0x259a0e = _0x340789;
        this[_0x259a0e(0x21b)][_0x259a0e(0x1bf)]++, this[_0x259a0e(0x21b)][_0x259a0e(0x1bf)] >= this[_0x259a0e(0x21b)][_0x259a0e(0x238)] && (console[_0x259a0e(0x1a7)](_0x259a0e(0x222)), this[_0x259a0e(0x21b)][_0x259a0e(0x1ca)] = _0x259a0e(0x265), this[_0x259a0e(0x21b)][_0x259a0e(0x1bf)] = 0x0, this[_0x259a0e(0x21b)][_0x259a0e(0x1fd)] = Date[_0x259a0e(0x208)]() + this[_0x259a0e(0x21b)][_0x259a0e(0x253)]), this[_0x259a0e(0x25f)]?.['_logSecurityEvent'](_0x259a0e(0x220), { 'failureCount': this[_0x259a0e(0x21b)][_0x259a0e(0x1bf)] });
    }
    [_0x340789(0x1b1)]() {
        const _0xa968bb = _0x340789;
        this[_0xa968bb(0x193)](), this[_0xa968bb(0x1f7)] = setInterval(() => {
            const _0x2edd99 = _0xa968bb;
            this[_0x2edd99(0x270)]?.[_0x2edd99(0x19e)] && (this[_0x2edd99(0x270)][_0x2edd99(0x1cb)]('heartbeat', {
                'timestamp': Date[_0x2edd99(0x208)](),
                'sessionId': this[_0x2edd99(0x25f)]?.[_0x2edd99(0x1c8)]
            }), this[_0x2edd99(0x1f0)]['lastHeartbeatTime'] = Date[_0x2edd99(0x208)]());
        }, this[_0xa968bb(0x202)]);
    }
    [_0x340789(0x193)]() {
        const _0x395ecc = _0x340789;
        this[_0x395ecc(0x1f7)] && (clearInterval(this[_0x395ecc(0x1f7)]), this['heartbeatInterval'] = null);
    }
    [_0x340789(0x1d2)]() {
        const _0x2b5209 = _0x340789;
        this[_0x2b5209(0x184)](), this['connectionHealthCheck']['healthCheckInterval'] = setInterval(() => {
            const _0x15d25c = _0x2b5209;
            !this[_0x15d25c(0x270)]?.[_0x15d25c(0x19e)] ? (this[_0x15d25c(0x1f0)][_0x15d25c(0x204)]++, this['connectionHealthCheck']['missedHeartbeats'] >= this[_0x15d25c(0x269)] && (console[_0x15d25c(0x1a7)](_0x15d25c(0x20a)), this[_0x15d25c(0x270)]?.[_0x15d25c(0x18a)](), this['socket']?.[_0x15d25c(0x1d9)]())) : this[_0x15d25c(0x1f0)]['missedHeartbeats'] = 0x0;
        }, this[_0x2b5209(0x223)]);
    }
    [_0x340789(0x184)]() {
        const _0x509ebc = _0x340789;
        this[_0x509ebc(0x1f0)][_0x509ebc(0x22b)] && (clearInterval(this[_0x509ebc(0x1f0)][_0x509ebc(0x22b)]), this[_0x509ebc(0x1f0)][_0x509ebc(0x22b)] = null);
    }
    [_0x340789(0x1c7)]() {
        const _0x180da6 = _0x340789;
        setInterval(() => {
            const _0x3bab8a = _0x4003;
            this[_0x3bab8a(0x26b)]();
        }, this[_0x180da6(0x1e1)]);
    }
    ['_performCleanup']() {
        const _0x22443c = _0x340789, _0x53c46b = Date[_0x22443c(0x208)]();
        this[_0x22443c(0x274)](this[_0x22443c(0x1ff)], this['STATE_ENTRY_MAX_AGE'], _0x53c46b), this[_0x22443c(0x274)](this[_0x22443c(0x1dc)], this[_0x22443c(0x1b8)], _0x53c46b), this[_0x22443c(0x274)](this['renderingJobs'], this[_0x22443c(0x1b8)], _0x53c46b), this[_0x22443c(0x274)](this['analyticsStreams'], this[_0x22443c(0x1b8)], _0x53c46b), this[_0x22443c(0x274)](this[_0x22443c(0x1ed)], this[_0x22443c(0x1b8)], _0x53c46b), this[_0x22443c(0x274)](this[_0x22443c(0x1ad)], this[_0x22443c(0x1b8)], _0x53c46b);
        for (const [_0x2d93c5, _0x99231c] of this['cleanupTimers']) {
            _0x99231c[_0x22443c(0x20d)] && _0x53c46b - _0x99231c['createdAt'] > this[_0x22443c(0x1b8)] && (clearTimeout(_0x99231c['id']), this['cleanupTimers'][_0x22443c(0x1e7)](_0x2d93c5));
        }
        console[_0x22443c(0x1eb)]('🧹\x20Cleanup\x20completed');
    }
    [_0x340789(0x274)](_0x1fc45e, _0x1a8257, _0x2562cb) {
        const _0x1a264e = _0x340789, _0x3b5e8b = [];
        for (const [_0x30db59, _0x4ffd3b] of _0x1fc45e) {
            const _0x51ce94 = _0x4ffd3b?.[_0x1a264e(0x22d)] || _0x4ffd3b?.[_0x1a264e(0x197)] || _0x2562cb;
            _0x51ce94 && _0x2562cb - _0x51ce94 > _0x1a8257 && _0x3b5e8b[_0x1a264e(0x261)](_0x30db59);
        }
        _0x3b5e8b[_0x1a264e(0x1fa)](_0x568b17 => _0x1fc45e[_0x1a264e(0x1e7)](_0x568b17));
        if (_0x1fc45e[_0x1a264e(0x1ea)] > this[_0x1a264e(0x1f5)]) {
            const _0x287dd2 = _0x1fc45e['size'] - this[_0x1a264e(0x1f5)];
            let _0x8746dc = 0x0;
            const _0x2b8d74 = Array[_0x1a264e(0x1c6)](_0x1fc45e[_0x1a264e(0x221)]())[_0x1a264e(0x205)](([_0x303d36, _0x452ea5]) => ({
                'key': _0x303d36,
                'age': _0x2562cb - (_0x452ea5?.['timestamp'] || _0x452ea5?.[_0x1a264e(0x197)] || _0x2562cb)
            }))[_0x1a264e(0x209)]((_0x4140a3, _0x289485) => _0x289485['age'] - _0x4140a3[_0x1a264e(0x20f)])['slice'](0x0, _0x287dd2);
            _0x2b8d74['forEach'](({key: _0x45265c}) => {
                const _0x15037d = _0x1a264e;
                _0x1fc45e[_0x15037d(0x1e7)](_0x45265c), _0x8746dc++;
            }), _0x8746dc > 0x0 && console['warn']('⚠️\x20Removed\x20' + _0x8746dc + '\x20entries\x20due\x20to\x20size\x20limit');
        }
    }
    ['_setupEventListeners']() {
        const _0x2fdcb7 = _0x340789;
        this[_0x2fdcb7(0x270)]['on']('connect', () => {
            const _0x331a0b = _0x2fdcb7;
            console[_0x331a0b(0x1eb)](_0x331a0b(0x251)), this[_0x331a0b(0x21b)][_0x331a0b(0x1bf)] = 0x0, this['circuitBreaker'][_0x331a0b(0x1ca)] = _0x331a0b(0x255), this[_0x331a0b(0x212)](), this[_0x331a0b(0x1ce)]();
        }), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x18a), () => {
            const _0x46aaf1 = _0x2fdcb7;
            console[_0x46aaf1(0x1a7)](_0x46aaf1(0x20e));
        }), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x19f), _0x380fa8 => {
            const _0x462a35 = _0x2fdcb7;
            console[_0x462a35(0x1c9)](_0x462a35(0x207), _0x380fa8), this[_0x462a35(0x1d3)]();
        }), this['socket']['on'](_0x2fdcb7(0x1e2), _0x3d1c3d => this[_0x2fdcb7(0x216)](_0x3d1c3d)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x233), _0x42055b => this['_handleComplete'](_0x42055b)), this['socket']['on'](_0x2fdcb7(0x257), _0x1c79c9 => this['_handleError'](_0x1c79c9)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x22a), _0x28d2f0 => this[_0x2fdcb7(0x26c)](_0x28d2f0)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x21a), _0x5e5807 => this[_0x2fdcb7(0x1ec)](_0x5e5807)), this[_0x2fdcb7(0x270)]['on']('automation_error', _0x28d7c4 => this[_0x2fdcb7(0x1e8)](_0x28d7c4)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x182), _0x233ad3 => this[_0x2fdcb7(0x225)](_0x233ad3)), this['socket']['on']('rendering_complete', _0x569a78 => this['_handleRenderingComplete'](_0x569a78)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x1a9), _0x59475b => this['_handleRenderingError'](_0x59475b)), this[_0x2fdcb7(0x270)]['on']('analytics_update', _0xe76db9 => this[_0x2fdcb7(0x25a)](_0xe76db9)), this[_0x2fdcb7(0x270)]['on']('ai_operation_update', _0x1b0d35 => this[_0x2fdcb7(0x245)](_0x1b0d35)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x1cf), _0x16dd7c => this[_0x2fdcb7(0x1e5)](_0x16dd7c)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x18b), _0x57118e => this[_0x2fdcb7(0x1d0)](_0x57118e)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x1a2), _0x493c05 => this[_0x2fdcb7(0x1ae)](_0x493c05)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x195), _0x551994 => {
            const _0x16e85d = _0x2fdcb7;
            console[_0x16e85d(0x1eb)]('✅\x20Joined\x20user\x20room:', _0x551994[_0x16e85d(0x22c)]);
        }), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x273), _0xb05cad => this['_handleClipDeleted'](_0xb05cad)), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x246), () => {
            const _0x4fe97f = _0x2fdcb7;
            console[_0x4fe97f(0x1eb)](_0x4fe97f(0x1fb)), this[_0x4fe97f(0x1d8)][_0x4fe97f(0x1a6)] = 0x0, this['_joinUserRoom']();
        }), this[_0x2fdcb7(0x270)]['on'](_0x2fdcb7(0x1ab), () => {
            const _0x6197aa = _0x2fdcb7;
            this['reconnectConfig'][_0x6197aa(0x1a6)]++, console['log'](_0x6197aa(0x224) + this['reconnectConfig'][_0x6197aa(0x1a6)]);
        });
    }
    ['_joinUserRoom']() {
        const _0x113d7b = _0x340789;
        this[_0x113d7b(0x270)]?.[_0x113d7b(0x19e)] && this[_0x113d7b(0x186)] && this['socket'][_0x113d7b(0x1cb)](_0x113d7b(0x1ba), { 'user_id': this[_0x113d7b(0x186)] });
    }
    ['_queueOperation'](_0x15466c, _0x274280) {
        const _0x5bf7d2 = _0x340789;
        this[_0x5bf7d2(0x235)][_0x5bf7d2(0x1a8)] >= this[_0x5bf7d2(0x192)] && (console[_0x5bf7d2(0x1a7)](_0x5bf7d2(0x1e3)), this[_0x5bf7d2(0x235)][_0x5bf7d2(0x1d6)]());
        const _0x3749f1 = {
            'operation': _0x15466c,
            'data': _0x274280,
            'timestamp': Date[_0x5bf7d2(0x208)](),
            'retries': 0x0,
            'maxRetries': 0x3
        };
        this[_0x5bf7d2(0x235)][_0x5bf7d2(0x261)](_0x3749f1), this[_0x5bf7d2(0x1cc)]['set'](_0x15466c + '_' + Date[_0x5bf7d2(0x208)](), _0x3749f1), console[_0x5bf7d2(0x1eb)]('📤\x20Queued\x20operation:\x20' + _0x15466c);
    }
    [_0x340789(0x1ce)]() {
        const _0x2b072d = _0x340789;
        if (this['messageQueue'][_0x2b072d(0x1a8)] === 0x0)
            return;
        console[_0x2b072d(0x1eb)]('📨\x20Processing\x20' + this['messageQueue'][_0x2b072d(0x1a8)] + _0x2b072d(0x189));
        while (this['messageQueue'][_0x2b072d(0x1a8)] > 0x0) {
            const _0x16ae60 = this[_0x2b072d(0x235)]['shift']();
            try {
                this[_0x2b072d(0x23f)](_0x16ae60);
            } catch (_0x4d1ed0) {
                console['error']('❌\x20Error\x20processing\x20queued\x20operation:', _0x4d1ed0), _0x16ae60[_0x2b072d(0x25d)] < _0x16ae60['maxRetries'] && (_0x16ae60[_0x2b072d(0x25d)]++, this['messageQueue'][_0x2b072d(0x261)](_0x16ae60));
            }
        }
    }
    [_0x340789(0x23f)](_0xb7283d) {
        const _0x4dc706 = _0x340789, {
                operation: _0x29271b,
                data: _0x47ff4e
            } = _0xb7283d;
        switch (_0x29271b) {
        case _0x4dc706(0x1b5):
            this[_0x4dc706(0x1b7)](_0x47ff4e['itemId'], _0x47ff4e[_0x4dc706(0x1cd)]);
            break;
        case 'register_task':
            this[_0x4dc706(0x1ac)](_0x47ff4e[_0x4dc706(0x271)], _0x47ff4e[_0x4dc706(0x1e9)]);
            break;
        default:
            console[_0x4dc706(0x1a7)](_0x4dc706(0x24f) + _0x29271b);
        }
    }
    [_0x340789(0x1ac)](_0x5bc0a5, _0x31a180 = _0x340789(0x1b9)) {
        const _0x428120 = _0x340789, _0x1daa05 = {
                'id': _0x5bc0a5,
                'type': _0x31a180,
                'startTime': Date['now'](),
                'timestamp': Date[_0x428120(0x208)](),
                'progress': 0x0,
                'status': _0x428120(0x190)
            };
        this[_0x428120(0x1ff)][_0x428120(0x1f9)](_0x5bc0a5, _0x1daa05), console['log'](_0x428120(0x1a5) + _0x5bc0a5);
    }
    ['_handleProgressUpdate'](_0x28d4f5) {
        const _0x2d1434 = _0x340789;
        if (!this[_0x2d1434(0x25f)]?.[_0x2d1434(0x1f2)](_0x28d4f5)) {
            console[_0x2d1434(0x1a7)](_0x2d1434(0x243));
            return;
        }
        const {
            taskId: _0x5be35b,
            status: _0x2d58af,
            progress: _0x102518,
            step: _0x2c4b79
        } = _0x28d4f5;
        if (this['activeTasks'][_0x2d1434(0x227)](_0x5be35b)) {
            const _0x3f54b7 = this[_0x2d1434(0x1ff)][_0x2d1434(0x201)](_0x5be35b);
            _0x3f54b7[_0x2d1434(0x22e)] = _0x102518, _0x3f54b7[_0x2d1434(0x256)] = _0x2d58af, _0x3f54b7['currentStep'] = _0x2c4b79, _0x3f54b7['timestamp'] = Date['now'](), this[_0x2d1434(0x211)](_0x2d1434(0x22e), {
                'taskId': _0x5be35b,
                'progress': _0x102518,
                'step': _0x2c4b79,
                'status': _0x2d58af
            }), console['log']('⏳\x20' + _0x5be35b + ':\x20' + _0x102518 + '%\x20-\x20' + _0x2c4b79);
        }
    }
    [_0x340789(0x185)](_0x455430) {
        const _0x86349 = _0x340789;
        if (!this['securityManager']?.['validateIncomingMessage'](_0x455430))
            return;
        const {
            taskId: _0x3406c3,
            result: _0x30c43f
        } = _0x455430;
        if (this[_0x86349(0x1ff)]['has'](_0x3406c3)) {
            const _0x24bb92 = this[_0x86349(0x1ff)][_0x86349(0x201)](_0x3406c3);
            _0x24bb92['status'] = _0x86349(0x1f3), _0x24bb92[_0x86349(0x22e)] = 0x64, _0x24bb92['result'] = _0x30c43f, _0x24bb92['timestamp'] = Date[_0x86349(0x208)](), this['_emitCallback'](_0x86349(0x1bd), {
                'taskId': _0x3406c3,
                'result': _0x30c43f,
                'duration': Date['now']() - _0x24bb92['startTime']
            }), console[_0x86349(0x1eb)]('✅\x20Task\x20completed:\x20' + _0x3406c3);
        }
    }
    [_0x340789(0x18f)](_0x49a77e) {
        const _0x4f47c3 = _0x340789;
        if (!this[_0x4f47c3(0x25f)]?.[_0x4f47c3(0x1f2)](_0x49a77e))
            return;
        const {
            taskId: _0x493b9c,
            error: _0x58ad3c
        } = _0x49a77e;
        if (this[_0x4f47c3(0x1ff)][_0x4f47c3(0x227)](_0x493b9c)) {
            const _0x2c8a0a = this[_0x4f47c3(0x1ff)][_0x4f47c3(0x201)](_0x493b9c);
            _0x2c8a0a[_0x4f47c3(0x256)] = _0x4f47c3(0x1c9), _0x2c8a0a[_0x4f47c3(0x1c9)] = _0x58ad3c, _0x2c8a0a[_0x4f47c3(0x22d)] = Date[_0x4f47c3(0x208)](), this[_0x4f47c3(0x211)](_0x4f47c3(0x1c9), {
                'taskId': _0x493b9c,
                'error': _0x58ad3c
            }), console['error'](_0x4f47c3(0x264) + _0x493b9c + '\x20-\x20' + _0x58ad3c);
        }
    }
    [_0x340789(0x203)](_0x1202bc) {
        const _0x54fa0a = _0x340789;
        if (!this['securityManager']?.[_0x54fa0a(0x1f2)](_0x1202bc)) {
            console[_0x54fa0a(0x1a7)](_0x54fa0a(0x1bc));
            return;
        }
        const {
            itemId: _0x5240ee,
            projectId: _0x4f367f,
            timestamp: _0xe63d44
        } = _0x1202bc;
        this[_0x54fa0a(0x1f4)]('clip_delete_' + _0x5240ee, () => {
            const _0x4be5f8 = _0x54fa0a;
            this[_0x4be5f8(0x1df)](_0x5240ee, _0x4f367f, _0xe63d44);
        }, this[_0x54fa0a(0x1e0)]);
    }
    [_0x340789(0x1df)](_0x23e306, _0x48b705, _0x1daa58) {
        const _0x5b31f5 = _0x340789;
        try {
            this[_0x5b31f5(0x1ff)]['delete'](_0x23e306), this[_0x5b31f5(0x1dc)][_0x5b31f5(0x1e7)](_0x23e306), this[_0x5b31f5(0x217)][_0x5b31f5(0x1e7)](_0x48b705), this[_0x5b31f5(0x211)]('clip_deleted', {
                'itemId': _0x23e306,
                'projectId': _0x48b705,
                'timestamp': _0x1daa58
            }), this[_0x5b31f5(0x25f)]?.[_0x5b31f5(0x1a0)]('clip_deleted_handled', {
                'itemId': _0x23e306,
                'projectId': _0x48b705
            }), console[_0x5b31f5(0x1eb)](_0x5b31f5(0x19d) + _0x23e306 + _0x5b31f5(0x1c2) + _0x48b705);
        } catch (_0x56865f) {
            console[_0x5b31f5(0x1c9)](_0x5b31f5(0x1fe), _0x56865f);
        }
    }
    ['_debounce'](_0x3c4d09, _0x5ec265, _0x17668a) {
        const _0x59aa7a = _0x340789;
        this['debouncedOperations'][_0x59aa7a(0x227)](_0x3c4d09) && clearTimeout(this[_0x59aa7a(0x1a3)][_0x59aa7a(0x201)](_0x3c4d09)[_0x59aa7a(0x1da)]);
        const _0x1ae0a8 = setTimeout(() => {
            const _0x18dcfe = _0x59aa7a;
            _0x5ec265(), this[_0x18dcfe(0x1a3)][_0x18dcfe(0x1e7)](_0x3c4d09);
        }, _0x17668a);
        this[_0x59aa7a(0x1a3)][_0x59aa7a(0x1f9)](_0x3c4d09, {
            'timerId': _0x1ae0a8,
            'createdAt': Date[_0x59aa7a(0x208)]()
        });
    }
    [_0x340789(0x26c)](_0x5aac43) {
        const _0x4f83eb = _0x340789;
        if (!this['securityManager']?.['validateIncomingMessage'](_0x5aac43))
            return;
        const {
            sessionId: _0x12ee1d,
            status: _0x1243a4,
            progress: _0x41810b,
            step: _0x576673,
            automationType: _0xc849e2
        } = _0x5aac43;
        this['automationSessions'][_0x4f83eb(0x1f9)](_0x12ee1d, {
            'id': _0x12ee1d,
            'type': _0xc849e2,
            'status': _0x1243a4,
            'progress': _0x41810b,
            'step': _0x576673,
            'timestamp': Date[_0x4f83eb(0x208)]()
        }), this[_0x4f83eb(0x211)](_0x4f83eb(0x22a), {
            'sessionId': _0x12ee1d,
            'status': _0x1243a4,
            'progress': _0x41810b,
            'step': _0x576673,
            'automationType': _0xc849e2
        });
    }
    [_0x340789(0x1ec)](_0x1b01eb) {
        const _0x43f8db = _0x340789;
        if (!this[_0x43f8db(0x25f)]?.[_0x43f8db(0x1f2)](_0x1b01eb))
            return;
        const {
            sessionId: _0x151378,
            result: _0xe7c023
        } = _0x1b01eb;
        if (this[_0x43f8db(0x1dc)][_0x43f8db(0x227)](_0x151378)) {
            const _0x4f474e = this[_0x43f8db(0x1dc)]['get'](_0x151378);
            _0x4f474e[_0x43f8db(0x256)] = _0x43f8db(0x1f3), _0x4f474e[_0x43f8db(0x1b3)] = _0xe7c023, _0x4f474e[_0x43f8db(0x22d)] = Date[_0x43f8db(0x208)]();
        }
        this['_emitCallback'](_0x43f8db(0x21a), {
            'sessionId': _0x151378,
            'result': _0xe7c023
        });
    }
    [_0x340789(0x1e8)](_0x2907cf) {
        const _0x34ff4a = _0x340789;
        if (!this[_0x34ff4a(0x25f)]?.[_0x34ff4a(0x1f2)](_0x2907cf))
            return;
        const {
            sessionId: _0x2338c0,
            error: _0x5794cb
        } = _0x2907cf;
        if (this[_0x34ff4a(0x1dc)][_0x34ff4a(0x227)](_0x2338c0)) {
            const _0x34d99f = this[_0x34ff4a(0x1dc)]['get'](_0x2338c0);
            _0x34d99f['status'] = _0x34ff4a(0x1c9), _0x34d99f[_0x34ff4a(0x1c9)] = _0x5794cb, _0x34d99f[_0x34ff4a(0x22d)] = Date['now']();
        }
        this['_emitCallback'](_0x34ff4a(0x187), {
            'sessionId': _0x2338c0,
            'error': _0x5794cb
        });
    }
    [_0x340789(0x225)](_0x5f3b76) {
        const _0x2a4783 = _0x340789;
        if (!this[_0x2a4783(0x25f)]?.[_0x2a4783(0x1f2)](_0x5f3b76))
            return;
        const {
            jobId: _0x1eada8,
            status: _0x531102,
            progress: _0x74f6ec,
            currentPhase: _0x1801bb,
            framesProcessed: _0x41f62a,
            totalFrames: _0x50a799
        } = _0x5f3b76;
        this['renderingJobs'][_0x2a4783(0x1f9)](_0x1eada8, {
            'id': _0x1eada8,
            'status': _0x531102,
            'progress': _0x74f6ec,
            'currentPhase': _0x1801bb,
            'framesProcessed': _0x41f62a,
            'totalFrames': _0x50a799,
            'timestamp': Date[_0x2a4783(0x208)]()
        }), this[_0x2a4783(0x211)]('rendering_update', {
            'jobId': _0x1eada8,
            'status': _0x531102,
            'progress': _0x74f6ec,
            'currentPhase': _0x1801bb,
            'framesProcessed': _0x41f62a,
            'totalFrames': _0x50a799
        });
    }
    [_0x340789(0x1e4)](_0x53c119) {
        const _0x309008 = _0x340789;
        if (!this[_0x309008(0x25f)]?.[_0x309008(0x1f2)](_0x53c119))
            return;
        const {
            jobId: _0x4305ef,
            outputPath: _0x270079,
            duration: _0x3a9367
        } = _0x53c119;
        if (this[_0x309008(0x217)]['has'](_0x4305ef)) {
            const _0x50d784 = this[_0x309008(0x217)][_0x309008(0x201)](_0x4305ef);
            _0x50d784['status'] = 'completed', _0x50d784[_0x309008(0x1b2)] = _0x270079, _0x50d784[_0x309008(0x254)] = _0x3a9367, _0x50d784['timestamp'] = Date['now']();
        }
        this[_0x309008(0x211)](_0x309008(0x26f), {
            'jobId': _0x4305ef,
            'outputPath': _0x270079,
            'duration': _0x3a9367
        });
    }
    ['_handleRenderingError'](_0x28b5b4) {
        const _0x3961a3 = _0x340789;
        if (!this[_0x3961a3(0x25f)]?.[_0x3961a3(0x1f2)](_0x28b5b4))
            return;
        const {
            jobId: _0x2221af,
            error: _0x16bd85,
            phase: _0x447503
        } = _0x28b5b4;
        if (this[_0x3961a3(0x217)][_0x3961a3(0x227)](_0x2221af)) {
            const _0x42004a = this[_0x3961a3(0x217)][_0x3961a3(0x201)](_0x2221af);
            _0x42004a[_0x3961a3(0x256)] = 'error', _0x42004a[_0x3961a3(0x1c9)] = _0x16bd85, _0x42004a[_0x3961a3(0x1b6)] = _0x447503, _0x42004a['timestamp'] = Date[_0x3961a3(0x208)]();
        }
        this[_0x3961a3(0x211)](_0x3961a3(0x1a9), {
            'jobId': _0x2221af,
            'error': _0x16bd85,
            'phase': _0x447503
        });
    }
    [_0x340789(0x25a)](_0x2fbf49) {
        const _0x4818fd = _0x340789;
        if (!this[_0x4818fd(0x25f)]?.[_0x4818fd(0x1f2)](_0x2fbf49))
            return;
        const {
            streamId: _0x525235,
            metrics: _0x2e8ba9,
            timestamp: _0xc5d8c9
        } = _0x2fbf49;
        this[_0x4818fd(0x1c5)]['set'](_0x525235, {
            'id': _0x525235,
            'metrics': _0x2e8ba9,
            'timestamp': _0xc5d8c9 || Date[_0x4818fd(0x208)]()
        }), this[_0x4818fd(0x211)](_0x4818fd(0x20c), {
            'streamId': _0x525235,
            'metrics': _0x2e8ba9,
            'timestamp': _0xc5d8c9
        });
    }
    [_0x340789(0x245)](_0x1f806f) {
        const _0x7bae57 = _0x340789;
        if (!this['securityManager']?.[_0x7bae57(0x1f2)](_0x1f806f))
            return;
        const {
            operationId: _0x5ac7a6,
            status: _0x204275,
            progress: _0xed37cb,
            operation: _0xe7464b,
            currentStep: _0x38d197
        } = _0x1f806f;
        this[_0x7bae57(0x1ed)][_0x7bae57(0x1f9)](_0x5ac7a6, {
            'id': _0x5ac7a6,
            'status': _0x204275,
            'progress': _0xed37cb,
            'operation': _0xe7464b,
            'currentStep': _0x38d197,
            'timestamp': Date['now']()
        }), this['_emitCallback'](_0x7bae57(0x1f6), {
            'operationId': _0x5ac7a6,
            'status': _0x204275,
            'progress': _0xed37cb,
            'operation': _0xe7464b,
            'currentStep': _0x38d197
        });
    }
    ['_handleAIOperationComplete'](_0x5129f3) {
        const _0x45abc9 = _0x340789;
        if (!this[_0x45abc9(0x25f)]?.['validateIncomingMessage'](_0x5129f3))
            return;
        const {
            operationId: _0x13eacf,
            result: _0x32b39c,
            output: _0x365f31
        } = _0x5129f3;
        if (this[_0x45abc9(0x1ed)][_0x45abc9(0x227)](_0x13eacf)) {
            const _0x13a1e4 = this[_0x45abc9(0x1ed)][_0x45abc9(0x201)](_0x13eacf);
            _0x13a1e4[_0x45abc9(0x256)] = _0x45abc9(0x1f3), _0x13a1e4['result'] = _0x32b39c, _0x13a1e4[_0x45abc9(0x21f)] = _0x365f31, _0x13a1e4[_0x45abc9(0x22d)] = Date[_0x45abc9(0x208)]();
        }
        this[_0x45abc9(0x211)](_0x45abc9(0x1cf), {
            'operationId': _0x13eacf,
            'result': _0x32b39c,
            'output': _0x365f31
        });
    }
    [_0x340789(0x1d0)](_0x4d0003) {
        const _0xd2a14a = _0x340789;
        if (!this['securityManager']?.['validateIncomingMessage'](_0x4d0003))
            return;
        const {
            operationId: _0x4bd9b7,
            error: _0x53c450
        } = _0x4d0003;
        if (this[_0xd2a14a(0x1ed)][_0xd2a14a(0x227)](_0x4bd9b7)) {
            const _0x55fe31 = this[_0xd2a14a(0x1ed)]['get'](_0x4bd9b7);
            _0x55fe31[_0xd2a14a(0x256)] = _0xd2a14a(0x1c9), _0x55fe31[_0xd2a14a(0x1c9)] = _0x53c450, _0x55fe31[_0xd2a14a(0x22d)] = Date[_0xd2a14a(0x208)]();
        }
        this[_0xd2a14a(0x211)]('ai_operation_error', {
            'operationId': _0x4bd9b7,
            'error': _0x53c450
        });
    }
    [_0x340789(0x1ae)](_0x540a4d) {
        const _0x1492c7 = _0x340789;
        if (!this['securityManager']?.['validateIncomingMessage'](_0x540a4d))
            return;
        const {
            operations: _0x2cc97c,
            type: _0x80aa1f
        } = _0x540a4d;
        if (_0x80aa1f === _0x1492c7(0x1b9))
            _0x2cc97c[_0x1492c7(0x1fa)](_0x4ff3e9 => {
                const _0xf65cec = _0x1492c7;
                this[_0xf65cec(0x1ff)]['set'](_0x4ff3e9['id'], {
                    ..._0x4ff3e9,
                    'timestamp': Date[_0xf65cec(0x208)]()
                });
            });
        else {
            if (_0x80aa1f === 'automation')
                _0x2cc97c['forEach'](_0x271dc1 => {
                    const _0x483179 = _0x1492c7;
                    this[_0x483179(0x1dc)][_0x483179(0x1f9)](_0x271dc1['id'], {
                        ..._0x271dc1,
                        'timestamp': Date[_0x483179(0x208)]()
                    });
                });
            else {
                if (_0x80aa1f === _0x1492c7(0x1c1))
                    _0x2cc97c['forEach'](_0x5a88d0 => {
                        const _0x255d93 = _0x1492c7;
                        this[_0x255d93(0x217)][_0x255d93(0x1f9)](_0x5a88d0['id'], {
                            ..._0x5a88d0,
                            'timestamp': Date[_0x255d93(0x208)]()
                        });
                    });
                else
                    _0x80aa1f === 'ai_operations' && _0x2cc97c[_0x1492c7(0x1fa)](_0x166b11 => {
                        const _0x14ede2 = _0x1492c7;
                        this[_0x14ede2(0x1ed)]['set'](_0x166b11['id'], {
                            ..._0x166b11,
                            'timestamp': Date[_0x14ede2(0x208)]()
                        });
                    });
            }
        }
        console[_0x1492c7(0x1eb)](_0x1492c7(0x19a) + _0x80aa1f + _0x1492c7(0x200) + _0x2cc97c[_0x1492c7(0x1a8)] + _0x1492c7(0x268));
    }
    [_0x340789(0x1b7)](_0x4d828e, _0xfe40b0) {
        const _0x4b77c9 = _0x340789;
        if (!this[_0x4b77c9(0x270)]?.['connected'])
            return this[_0x4b77c9(0x24c)]('delete_clip', {
                'itemId': _0x4d828e,
                'projectId': _0xfe40b0
            }), ![];
        try {
            const _0x248486 = 'delete_clip', _0x49134d = {
                    'itemId': _0x4d828e,
                    'projectId': _0xfe40b0,
                    'timestamp': Date['now'](),
                    'userId': this[_0x4b77c9(0x186)]
                };
            if (!this[_0x4b77c9(0x25f)][_0x4b77c9(0x1d1)](_0x248486, _0x49134d))
                return console['warn'](_0x4b77c9(0x198)), ![];
            const _0x2f4360 = this[_0x4b77c9(0x25f)][_0x4b77c9(0x25c)](_0x248486, _0x49134d);
            return this[_0x4b77c9(0x270)][_0x4b77c9(0x1cb)](_0x248486, _0x2f4360), console['log']('📤\x20Clip\x20deletion\x20emitted:\x20' + _0x4d828e), !![];
        } catch (_0x2cdb39) {
            return console[_0x4b77c9(0x1c9)]('❌\x20Error\x20emitting\x20clip\x20deletion:', _0x2cdb39), this[_0x4b77c9(0x24c)](_0x4b77c9(0x1b5), {
                'itemId': _0x4d828e,
                'projectId': _0xfe40b0
            }), ![];
        }
    }
    [_0x340789(0x272)](_0x3229ff, _0x573466) {
        const _0x45a8b8 = _0x340789;
        this[_0x45a8b8(0x270)]?.[_0x45a8b8(0x19e)] && (this[_0x45a8b8(0x270)][_0x45a8b8(0x1cb)](_0x45a8b8(0x24e), {
            'session_id': _0x3229ff,
            'automation_type': _0x573466
        }), console[_0x45a8b8(0x1eb)](_0x45a8b8(0x248) + _0x3229ff));
    }
    [_0x340789(0x19b)](_0x54a84a, _0x1b4fd9, _0x6625b0) {
        const _0x148505 = _0x340789;
        this[_0x148505(0x270)]?.[_0x148505(0x19e)] && (this[_0x148505(0x270)][_0x148505(0x1cb)](_0x148505(0x234), {
            'job_id': _0x54a84a,
            'project_id': _0x1b4fd9,
            'ranks': _0x6625b0
        }), console[_0x148505(0x1eb)]('📝\x20Rendering\x20job\x20registered:\x20' + _0x54a84a));
    }
    ['registerAnalyticsStream'](_0x240ce4, _0xb6d1a1) {
        const _0x462b53 = _0x340789;
        this[_0x462b53(0x270)]?.[_0x462b53(0x19e)] && (this[_0x462b53(0x270)]['emit']('register_analytics_stream', {
            'stream_id': _0x240ce4,
            'source': _0xb6d1a1
        }), console[_0x462b53(0x1eb)](_0x462b53(0x18d) + _0x240ce4));
    }
    ['registerAIOperation'](_0x3c0817, _0x36e8f4) {
        const _0x4b4ef5 = _0x340789;
        this[_0x4b4ef5(0x270)]?.['connected'] && (this[_0x4b4ef5(0x270)]['emit'](_0x4b4ef5(0x1c0), {
            'operation_id': _0x3c0817,
            'operation_type': _0x36e8f4
        }), console['log'](_0x4b4ef5(0x191) + _0x3c0817));
    }
    ['on'](_0x1efc75, _0x40d66f) {
        const _0x4fcfec = _0x340789;
        !this[_0x4fcfec(0x1be)][_0x4fcfec(0x227)](_0x1efc75) && this[_0x4fcfec(0x1be)][_0x4fcfec(0x1f9)](_0x1efc75, []), this[_0x4fcfec(0x1be)]['get'](_0x1efc75)[_0x4fcfec(0x261)](_0x40d66f);
    }
    ['off'](_0x476c4b, _0x53ce04) {
        const _0x269808 = _0x340789;
        if (!this[_0x269808(0x1be)][_0x269808(0x227)](_0x476c4b))
            return;
        const _0x4e9f27 = this[_0x269808(0x1be)][_0x269808(0x201)](_0x476c4b), _0x50bf90 = _0x4e9f27[_0x269808(0x232)](_0x53ce04);
        _0x50bf90 > -0x1 && _0x4e9f27['splice'](_0x50bf90, 0x1);
    }
    [_0x340789(0x211)](_0x1b2f13, _0x40298b) {
        const _0x4a09dc = _0x340789;
        if (!this['callbacks'][_0x4a09dc(0x227)](_0x1b2f13))
            return;
        this[_0x4a09dc(0x1be)][_0x4a09dc(0x201)](_0x1b2f13)[_0x4a09dc(0x1fa)](_0x1180f3 => {
            const _0x40f88b = _0x4a09dc;
            try {
                _0x1180f3(_0x40298b);
            } catch (_0x1dfa4e) {
                console[_0x40f88b(0x1c9)](_0x40f88b(0x229) + _0x1b2f13 + _0x40f88b(0x1db), _0x1dfa4e);
            }
        });
    }
    [_0x340789(0x24b)](_0x4fa3d5 = 0x0, _0x30171c = 0x64) {
        const _0x1134d9 = _0x340789, _0x251bdf = Array[_0x1134d9(0x1c6)](this[_0x1134d9(0x1ff)][_0x1134d9(0x231)]()), _0x499421 = _0x4fa3d5 * _0x30171c, _0x5ef50b = _0x499421 + _0x30171c;
        return {
            'items': _0x251bdf[_0x1134d9(0x214)](_0x499421, _0x5ef50b),
            'total': _0x251bdf[_0x1134d9(0x1a8)],
            'page': _0x4fa3d5,
            'pageSize': _0x30171c,
            'totalPages': Math[_0x1134d9(0x183)](_0x251bdf[_0x1134d9(0x1a8)] / _0x30171c)
        };
    }
    [_0x340789(0x262)](_0x4f4a7d = 0x0, _0x4a2507 = 0x64) {
        const _0x407dff = _0x340789, _0x42c28c = Array[_0x407dff(0x1c6)](this[_0x407dff(0x1dc)][_0x407dff(0x231)]()), _0x4ffd09 = _0x4f4a7d * _0x4a2507, _0xf269fc = _0x4ffd09 + _0x4a2507;
        return {
            'items': _0x42c28c[_0x407dff(0x214)](_0x4ffd09, _0xf269fc),
            'total': _0x42c28c[_0x407dff(0x1a8)],
            'page': _0x4f4a7d,
            'pageSize': _0x4a2507,
            'totalPages': Math[_0x407dff(0x183)](_0x42c28c['length'] / _0x4a2507)
        };
    }
    ['getActiveRenderingJobs'](_0x4f1da1 = 0x0, _0x32d989 = 0x64) {
        const _0x29ce80 = _0x340789, _0x1f6344 = Array[_0x29ce80(0x1c6)](this['renderingJobs']['values']()), _0x23189e = _0x4f1da1 * _0x32d989, _0x1c1fd3 = _0x23189e + _0x32d989;
        return {
            'items': _0x1f6344['slice'](_0x23189e, _0x1c1fd3),
            'total': _0x1f6344[_0x29ce80(0x1a8)],
            'page': _0x4f1da1,
            'pageSize': _0x32d989,
            'totalPages': Math[_0x29ce80(0x183)](_0x1f6344[_0x29ce80(0x1a8)] / _0x32d989)
        };
    }
    [_0x340789(0x1d4)](_0x3b161c = 0x0, _0x22dd31 = 0x64) {
        const _0x396878 = _0x340789, _0xdef1f = Array[_0x396878(0x1c6)](this['aiOperations'][_0x396878(0x231)]()), _0x107eaf = _0x3b161c * _0x22dd31, _0x2c3bba = _0x107eaf + _0x22dd31;
        return {
            'items': _0xdef1f[_0x396878(0x214)](_0x107eaf, _0x2c3bba),
            'total': _0xdef1f[_0x396878(0x1a8)],
            'page': _0x3b161c,
            'pageSize': _0x22dd31,
            'totalPages': Math[_0x396878(0x183)](_0xdef1f['length'] / _0x22dd31)
        };
    }
    [_0x340789(0x25b)](_0x2cc990 = 0x0, _0x48a9e5 = 0x64) {
        const _0x1981eb = _0x340789, _0x2c3fa3 = Array[_0x1981eb(0x1c6)](this[_0x1981eb(0x1c5)][_0x1981eb(0x231)]()), _0x36c185 = _0x2cc990 * _0x48a9e5, _0x3981bf = _0x36c185 + _0x48a9e5;
        return {
            'items': _0x2c3fa3[_0x1981eb(0x214)](_0x36c185, _0x3981bf),
            'total': _0x2c3fa3[_0x1981eb(0x1a8)],
            'page': _0x2cc990,
            'pageSize': _0x48a9e5,
            'totalPages': Math['ceil'](_0x2c3fa3[_0x1981eb(0x1a8)] / _0x48a9e5)
        };
    }
    [_0x340789(0x267)]() {
        const _0x5ecfae = _0x340789;
        return this[_0x5ecfae(0x270)]?.[_0x5ecfae(0x19e)] || ![];
    }
    [_0x340789(0x26a)]() {
        const _0x5ae538 = _0x340789;
        return {
            'connected': this[_0x5ae538(0x267)](),
            'userId': this['userId'],
            'circuitBreakerState': this['circuitBreaker'][_0x5ae538(0x1ca)],
            'queuedMessages': this[_0x5ae538(0x235)][_0x5ae538(0x1a8)],
            'reconnectAttempts': this[_0x5ae538(0x1d8)][_0x5ae538(0x1a6)],
            'activeTasks': this[_0x5ae538(0x1ff)][_0x5ae538(0x1ea)],
            'activeAutomation': this[_0x5ae538(0x1dc)][_0x5ae538(0x1ea)]
        };
    }
    ['disconnect']() {
        const _0xdd36f9 = _0x340789;
        this[_0xdd36f9(0x1aa)] = !![], this[_0xdd36f9(0x193)](), this[_0xdd36f9(0x184)](), this[_0xdd36f9(0x270)] && this['socket'][_0xdd36f9(0x18a)](), this[_0xdd36f9(0x1ff)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x1dc)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x217)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x1c5)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x1ed)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x1ad)][_0xdd36f9(0x1d5)](), this[_0xdd36f9(0x235)] = [], this['debouncedOperations']['clear'](), this[_0xdd36f9(0x25f)]?.[_0xdd36f9(0x1f1)](), console[_0xdd36f9(0x1eb)](_0xdd36f9(0x218));
    }
}
typeof module !== _0x340789(0x1a1) && module[_0x340789(0x1f8)] && (module[_0x340789(0x1f8)] = _0x1899f3);
typeof window !== _0x340789(0x1a1) && (window[_0x340789(0x228)] = _0x1899f3);
function _0x4003(_0x2356d4, _0x2bc836) {
    _0x2356d4 = _0x2356d4 - 0x181;
    const _0x2250a3 = _0x32c3();
    let _0x5ea50f = _0x2250a3[_0x2356d4];
    if (_0x4003['qgGvAW'] === undefined) {
        var _0x2425bb = function (_0x1d1ff6) {
            const _0x3d4d72 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x1af777 = '', _0x235989 = '';
            for (let _0x3a412d = 0x0, _0x35471c, _0xaad644, _0x3b2150 = 0x0; _0xaad644 = _0x1d1ff6['charAt'](_0x3b2150++); ~_0xaad644 && (_0x35471c = _0x3a412d % 0x4 ? _0x35471c * 0x40 + _0xaad644 : _0xaad644, _0x3a412d++ % 0x4) ? _0x1af777 += String['fromCharCode'](0xff & _0x35471c >> (-0x2 * _0x3a412d & 0x6)) : 0x0) {
                _0xaad644 = _0x3d4d72['indexOf'](_0xaad644);
            }
            for (let _0x1899f3 = 0x0, _0x23292d = _0x1af777['length']; _0x1899f3 < _0x23292d; _0x1899f3++) {
                _0x235989 += '%' + ('00' + _0x1af777['charCodeAt'](_0x1899f3)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x235989);
        };
        _0x4003['dtKvdP'] = _0x2425bb, _0x4003['OBpKaY'] = {}, _0x4003['qgGvAW'] = !![];
    }
    const _0x247aef = _0x2250a3[0x0], _0x32c3aa = _0x2356d4 + _0x247aef, _0x4003e6 = _0x4003['OBpKaY'][_0x32c3aa];
    return !_0x4003e6 ? (_0x5ea50f = _0x4003['dtKvdP'](_0x5ea50f), _0x4003['OBpKaY'][_0x32c3aa] = _0x5ea50f) : _0x5ea50f = _0x4003e6, _0x5ea50f;
}
function _0x32c3() {
    const _0x331846 = [
        'y29TCgXLDgvK',
        'x2rLyM91BMnL',
        'Bwf4u3rHDgvtAxPL',
        'ywLFB3bLCMf0Aw9Ux3vWzgf0zq',
        'AgvHCNrIzwf0sw50zxj2ywW',
        'zxHWB3j0CW',
        'C2v0',
        'zM9YrwfJAa',
        '4PYfifjLy29UBMvJDgvKihrVihnLCNzLCG',
        'ndGZodi4tNjJDK1n',
        'BMv4Def0DgvTChruAw1L',
        '4P2mievYCM9YigHHBMrSAw5NignSAxaGzgvSzxrPB246',
        'ywn0AxzLvgfZA3m',
        'ktOG',
        'z2v0',
        'sevbuLrcrufux0LovevsvKfm',
        'x2HHBMrSzunSAxbezwXLDgvK',
        'BwLZC2vKsgvHCNrIzwf0CW',
        'BwfW',
        'AgfSzI1VCgvU',
        '4P2mienVBM5Ly3rPB24GzxjYB3i6',
        'BM93',
        'C29YDa',
        '4PQG77IpienVBM5Ly3rPB24GAgvHBhrOigrLz3jHzgvKlcbMB3jJAw5NihjLy29UBMvJDa',
        '4P2mifnVy2TLDc5jtYbUB3qGBg9HzgvK',
        'yw5HBhL0AwnZx3vWzgf0zq',
        'y3jLyxrLzef0',
        '4PQG77IpierPC2nVBM5Ly3rLzcbMCM9TifDLyLnVy2TLDcbZzxj2zxi',
        'ywDL',
        'Bwf4qxr0zw1WDhm',
        'x2vTAxrdywXSyMfJAW',
        'x2PVAw5vC2vYuM9VBq',
        'mti3mtbjrefbweO',
        'C2XPy2u',
        'mtzhvKnrDMK',
        'x2HHBMrSzvbYB2DYzxnZvxbKyxrL',
        'CMvUzgvYAw5NsM9ICW',
        '8j+uJcbxzwjtB2nRzxqGzgLZy29UBMvJDgvKigDYywnLzNvSBhK',
        'D2vIC29JA2v0',
        'yxv0B21HDgLVBL9JB21WBgv0zq',
        'y2LYy3vPDejYzwfRzxi',
        '4P2mifvZzxjjzcbYzxf1AxjLzcb0BYbJB25Uzwn0',
        'x3nLDhvWrxzLBNrmAxn0zw5LCNm',
        'DhjHy2u',
        'B3v0Chv0',
        'y29UBMvJDgLVBL9MywLSDxjL',
        'zw50CMLLCW',
        '4PQG77IpienPCMn1AxqGyNjLywTLCIbVCgvUzwqGzhvLihrVigv4y2vZC2L2zsbMywLSDxjLCW',
        'sevbtfrix0nirunlx0LovevsvKfm',
        '4PQG77IpifjLy29UBMvJDgLVBIbHDhrLBxb0ia',
        'x2HHBMrSzvjLBMrLCMLUz1vWzgf0zq',
        '4PYfifDLyLnVy2TLDcbJB25Uzwn0zwqGC3vJy2vZC2z1BgX5',
        'AgfZ',
        'u29SAxnbsvDLyLnVy2TLDenSAwvUDa',
        'rxjYB3iGAw4G',
        'yxv0B21HDgLVBL91CgrHDgu',
        'AgvHBhrOq2HLy2TjBNrLCNzHBa',
        'DxnLCL9Pza',
        'DgLTzxn0yw1W',
        'ChjVz3jLC3m',
        'yxv0Af90B2TLBG',
        'Ag9ZDa',
        'DMfSDwvZ',
        'Aw5KzxHpzG',
        'ChjVy2vZC2LUz19JB21WBgv0zq',
        'CMvNAxn0zxjFCMvUzgvYAw5Nx2PVyG',
        'BwvZC2fNzvf1zxvL',
        'mZa4nJHqzfjLte0',
        'Bwf4rgvSyxK',
        'zMfPBhvYzvrOCMvZAg9Sza',
        'C2vZC2LVBKLKuMvMCMvZAgvK',
        'mZi2mdu4mtvluNrPq3C',
        'Dg9tDhjPBMC',
        'y29UC29Szq',
        '4PQG77IpienPCMn1AxqGyNjLywTLCIbVCgvUlcbJyw5UB3qGy29UBMvJDa',
        'x2rLDgvJDfnLCNzLCLvYBa',
        'x2v4zwn1DgvrDwv1zwrpCgvYyxrPB24',
        'D3nZoG',
        'yMLUza',
        'nda4mZu0q3vtrwXM',
        '4PQG77IpifbYB2DYzxnZihvWzgf0zsbMywLSzwqGC2vJDxjPDhKGDMfSAwrHDgLVBG',
        'ntzps1ffs0K',
        'x2HHBMrSzufjt3bLCMf0Aw9UvxbKyxrL',
        'CMvJB25Uzwn0',
        'y29VA2LL',
        '8j+tNsbbDxrVBwf0Aw9UihnLC3nPB24GCMvNAxn0zxjLzdOG',
        'mJGYnLHNs3DnAW',
        'Aw5PDgLHBerLBgf5',
        'z2v0qwn0AxzLvgfZA3m',
        'x3f1zxvLt3bLCMf0Aw9U',
        'y2XLyw51CfrPBwvYCW',
        'CMvNAxn0zxjFyxv0B21HDgLVBL9ZzxnZAw9U',
        'vw5RBM93BIbXDwv1zwqGB3bLCMf0Aw9UoIa',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        '4PYfienVBM5Ly3rLzcb0BYbxzwjtB2nRzxqGC2vYDMvY',
        '4P2mifDLyLnVy2TLDcbJB25Uzwn0Aw9UigzHAwXLzdO',
        'CMvZzxruAw1LB3v0',
        'zhvYyxrPB24',
        'y2XVC2vK',
        'C3rHDhvZ',
        'ChjVy2vZC2LUz19LCNjVCG',
        'sw52ywXPzcbbueLFqKftrv9vuKW6',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'x2HHBMrSzufUywX5DgLJC1vWzgf0zq',
        'z2v0qw5HBhL0AwnZu3rYzwfTCW',
        'y3jLyxrLu2vJDxjLrw52zwXVCgu',
        'CMv0CMLLCW',
        'yxbWBhK',
        'C2vJDxjPDhLnyw5Hz2vY',
        'mJaZnZGZnwvvEejYyq',
        'ChvZAa',
        'z2v0qwn0AxzLqxv0B21HDgLVBLnLC3nPB25Z',
        'x2j1AwXKqxv0AenVBMzPzW',
        '4P2mifrHC2SGzxjYB3i6ia',
        'B3bLBG',
        'BwvZC2fNzujHDgnO',
        'AxndB25Uzwn0zwq',
        'igL0zw1Z',
        'tufyx01ju1nfrf9irufsvejfqvrt',
        'z2v0q29UBMvJDgLVBLn0yxr1CW',
        'x3bLCMzVCM1dBgvHBNvW',
        'x2HHBMrSzuf1Dg9TyxrPB25vCgrHDgu',
        '4P2mifnLy3vYAxr5ig1HBMfNzxiGDw5HDMfPBgfIBgu',
        'z2v0sxrLBq',
        'CMvUzgvYAw5Nx2nVBxbSzxrL',
        'C29JA2v0',
        'DgfZA0LK',
        'CMvNAxn0zxjbDxrVBwf0Aw9Uu2vZC2LVBG',
        'y2XPCf9KzwXLDgvK',
        'x2nSzwfUDxbnyxa',
        'C3bSAxq',
        'CMvUzgvYAw5Nx3vWzgf0zq',
        'y2vPBa',
        'x3n0B3bdB25Uzwn0Aw9UsgvHBhrOq2HLy2S',
        'x2HHBMrSzunVBxbSzxrL',
        'DxnLCKLK',
        'yxv0B21HDgLVBL9LCNjVCG',
        'C2vYDMvYvxjS',
        'ihf1zxvLzcbTzxnZywDLCW',
        'zgLZy29UBMvJDa',
        'ywLFB3bLCMf0Aw9Ux2vYCM9Y',
        'Ahr0Chm6',
        '8j+tNsbbBMfSExrPy3mGC3rYzwfTihjLz2LZDgvYzwq6ia',
        'zMLUza',
        'x2HHBMrSzuvYCM9Y',
        'C3rHCNrLza',
        '8j+tNsbbssbVCgvYyxrPB24GCMvNAxn0zxjLzdOG',
        'Bwf4uxvLDwvtAxPL',
        'x3n0B3bizwfYDgjLyxq',
        'Aw5MBW',
        'CM9VBv9QB2LUzwq',
        'ChjVDg9JB2W',
        'C3rHCNruAw1L',
        '4PQG77Ipie1LC3nHz2uGDMfSAwrHDgLVBIbMywLSzwq',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        '8j+tPIbcyxrJAcbVCgvYyxrPB25ZicG',
        'CMvNAxn0zxjszw5KzxjPBMDkB2i',
        'ChjVDg90ExbL',
        '8j+xKE+4JYbdBgLWigrLBgv0zwq6ieLepq',
        'y29UBMvJDgvK',
        'y29UBMvJDf9LCNjVCG',
        'x2XVz1nLy3vYAxr5rxzLBNq',
        'Dw5KzwzPBMvK',
        'yMf0y2HFB3bLCMf0Aw9UCW',
        'zgvIB3vUy2vKt3bLCMf0Aw9UCW',
        'y2LYy3vPDejYzwfRzxjszxnLDfrPBwvVDxq',
        '8j+tNsbuyxnRihjLz2LZDgvYzwq6ia',
        'yxr0zw1WDhm',
        'D2fYBG',
        'BgvUz3rO',
        'CMvUzgvYAw5Nx2vYCM9Y',
        'Axnnyw51ywXSEurPC2nVBM5Ly3rLza',
        'CMvJB25Uzwn0x2f0DgvTChq',
        'CMvNAxn0zxjuyxnR',
        'CgvUzgLUz09WzxjHDgLVBNm',
        'x2HHBMrSzujHDgnOt3bLCMf0Aw9UCW',
        'Aw5PDa',
        'C3rHDgvnyxHbz2u',
        'x3n0yxj0sgvHCNrIzwf0',
        'B3v0Chv0ugf0Aa',
        'CMvZDwX0',
        'Cg9SBgLUzW',
        'zgvSzxrLx2nSAxa',
        'zMfPBgvKugHHC2u',
        'zw1PDenSAxbezwXLDgLVBG',
        'u1rbvevFru5uuLLFtufyx0fhrq',
        'ChjVy2vZC2LUzW',
        'AM9PBL91C2vYx3jVB20',
        'yxv0Af90B2TLBJ0',
        '4PQG77IpienSAxaGzgvSzxrPB24GzMfPBgvKihzHBgLKyxrPB24',
        'y29TCgXLDgu',
        'y2fSBgjHy2TZ',
        'zMfPBhvYzunVDw50',
        'CMvNAxn0zxjFywLFB3bLCMf0Aw9U',
        'CMvUzgvYAw5N',
        'lcbqCM9Qzwn0pq',
        'D3m6',
        'qvbjx0jbu0vFvvjm',
        'yw5HBhL0AwnZu3rYzwfTCW',
        'zNjVBq',
        'x3n0yxj0q2XLyw51CfbYB2nLC3m',
        'C2vZC2LVBKLK',
        'zxjYB3i',
        'C3rHDgu',
        'zw1PDa',
        'CxvLDwvKt3bLCMf0Aw9UCW',
        'ChjVAMvJDeLK',
        'x3bYB2nLC3nrDwv1zwrnzxnZywDLCW',
        'ywLFB3bLCMf0Aw9Ux2nVBxbSzxrL',
        'x2HHBMrSzufjt3bLCMf0Aw9UrxjYB3i',
        'DMfSAwrHDgvnzxnZywDL',
        'x3n0yxj0q29UBMvJDgLVBKHLywX0AenOzwnR',
        'x2HHBMrSzunVBM5Ly3rPB25gywLSDxjL',
        'z2v0qwn0AxzLquLpCgvYyxrPB25Z',
        'y2XLyxi',
        'C2HPzNq',
        'mtC2mZiWmffxvw51vq',
        'CMvJB25Uzwn0q29UzMLN',
        'y29UBMvJDa',
        'DgLTzxjjza',
        'ignHBgXIywnRoG',
        'yxv0B21HDgLVBLnLC3nPB25Z',
        'yMf0y2HtAxPL',
        'D3nZoI8VyxbPlNnVBgLZywKUDMLKzw8',
        'x3bLCMzVCM1dBgLWrgvSzxrPB24',
        'zgvIB3vUy2vezwXHEq',
        'q0Xfqu5vuf9jtLrfuLzbta',
        'ChjVy2vZC2LUz191CgrHDgu',
        '4PQG77Ipie1LC3nHz2uGCxvLDwuGzNvSBcWGzhjVChbPBMCGB2XKzxn0ig1LC3nHz2u',
        'x2HHBMrSzvjLBMrLCMLUz0nVBxbSzxrL',
        'x2HHBMrSzufjt3bLCMf0Aw9Uq29TCgXLDgu',
        'C3rHCNrZv2L0Aa',
        'zgvSzxrL',
        'x2HHBMrSzuf1Dg9TyxrPB25fCNjVCG',
        'DgfZA1r5Cgu',
        'C2L6zq',
        'Bg9N',
        'x2HHBMrSzuf1Dg9TyxrPB25dB21WBgv0zq',
        'ywLpCgvYyxrPB25Z',
        'mJzWv2XHvKW',
        'x2DLDef1DgHuB2TLBG',
        'y29UBMvJDgLVBKHLywX0AenOzwnR',
        'zgvZDhjVEq',
        'DMfSAwrHDgvjBMnVBwLUz01LC3nHz2u'
    ];
    _0x32c3 = function () {
        return _0x331846;
    };
    return _0x32c3();
}