class _0x103f63 {
    constructor(_0x2c7a65 = {}) {
            this['authToken'] = null, this['refreshToken'] = null, this['tokenExpiresAt'] = null, this['userId'] = null, this['sessionId'] = this['_generateSecureId'](), this['nonceCache'] = new Set(), this['maxCachedNonces'] = 0x3e8, this['rateLimitMap'] = new Map(), this['rateLimits'] = _0x2c7a65['rateLimits'] || {
                'delete_clip': 0xa,
                'processing_update': 0x64,
                'default': 0x32
            }, this['validateIncomingMessages'] = _0x2c7a65['validateIncomingMessages'] !== ![], this['messageValidationQueue'] = [], this['maxValidationQueueSize'] = 0x64, this['securityLogs'] = [], this['maxSecurityLogs'] = 0x1f4, this['suspiciousActivityThreshold'] = _0x2c7a65['suspiciousActivityThreshold'] || 0xa, this['suspiciousActivityCount'] = 0x0, this['MAX_MESSAGE_SIZE'] = _0x2c7a65['maxMessageSize'] || 0x100 * 0x400, this['TIMESTAMP_VALIDITY_WINDOW'] = _0x2c7a65['timestampWindow'] || 0x493e0, this['TOKEN_REFRESH_THRESHOLD'] = _0x2c7a65['tokenRefreshThreshold'] || 0x493e0, this['NONCE_VALIDITY_DURATION'] = _0x2c7a65['nonceValidity'] || 0x36ee80, this['CLEANUP_INTERVAL'] = _0x2c7a65['cleanupInterval'] || 0x927c0, this['expectedOrigin'] = _0x2c7a65['expectedOrigin'] || window['location']['origin'], this['nonceTimestamps'] = new Map(), this['cleanupTask'] = null, console['log']('🔐\x20WebSocket\x20Security\x20Manager\x20v2\x20initialized');
        }
    ['init'](_0x2f3a9d, _0x50ec68, _0x4e424b = null) {
            if (!_0x2f3a9d || !_0x50ec68)
                return console['error']('❌\x20Invalid\x20credentials\x20for\x20security\x20init'), ![];
            this['authToken'] = _0x2f3a9d, this['userId'] = _0x50ec68, this['refreshToken'] = _0x4e424b;
            if (!this['_validateToken']())
                return console['error']('❌\x20Token\x20validation\x20failed'), ![];
            return console['log']('✅\x20Security\x20context\x20initialized'), this['_logSecurityEvent']('security_init', {
                'userId': _0x50ec68
            }), !![];
        }
    ['_validateToken']() {
            if (!this['authToken'])
                return console['warn']('⚠️\x20No\x20authentication\x20token'), ![];
            try {
                const _0x21ae10 = this['authToken']['split']('.');
                if (_0x21ae10['length'] !== 0x3)
                    throw new Error('Invalid\x20JWT\x20structure');
                const _0x2376d2 = JSON['parse'](atob(_0x21ae10[0x1]));
                if (_0x2376d2['exp']) {
                    const _0x2f9ec3 = _0x2376d2['exp'] * 0x3e8;
                    this['tokenExpiresAt'] = _0x2f9ec3;
                    if (_0x2f9ec3 < Date['now']())
                        return console['warn']('⚠️\x20Token\x20expired'), ![];
                    this['refreshToken'] && this['_scheduleTokenRefresh']();
                }
                return !![];
            } catch (_0x54de06) {
                return console['error']('❌\x20Token\x20validation\x20error:', _0x54de06), ![];
            }
        }
    ['_scheduleTokenRefresh']() {
            if (!this['tokenExpiresAt'])
                return;
            const _0x2e801d = this['tokenExpiresAt'] - Date['now']() - this['tokenRefreshThreshold'];
            _0x2e801d > 0x0 && setTimeout(() => this['_refreshToken'](), _0x2e801d);
        }
    async ['_refreshToken']() {
            if (!this['userId'])
                return;
            try {
                const _0x580816 = await fetch('/api/auth/refresh', {
                    'method': 'POST',
                    'credentials': 'include',
                    'headers': {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': this['_getCsrfToken']()
                    },
                    'body': JSON['stringify']({
                        'userId': this['userId']
                    })
                });
                if (_0x580816['ok']) {
                    const _0x365c9e = await _0x580816['json']();
                    this['authToken'] = _0x365c9e['authToken'], this['_validateToken'](), this['_logSecurityEvent']('token_refresh_success', {}), console['log']('✅\x20Token\x20refreshed\x20successfully');
                } else
                    this['_logSecurityEvent']('token_refresh_failed', {
                        'status': _0x580816['status']
                    }), console['error']('❌\x20Token\x20refresh\x20failed');
            } catch (_0x243a94) {
                this['_logSecurityEvent']('token_refresh_error', {
                    'error': _0x243a94['message']
                }), console['error']('❌\x20Token\x20refresh\x20error:', _0x243a94);
            }
        }
    ['_getCsrfToken']() {
            return document['querySelector']('meta[name=\x22csrf-token\x22]')?.['content'] || '';
        }
    ['_generateSecureId']() {
            if (typeof crypto !== 'undefined' && crypto['getRandomValues']) {
                const _0x59e6b4 = new Uint8Array(0x10);
                return crypto['getRandomValues'](_0x59e6b4), Array['from'](_0x59e6b4, _0x54ee94 => _0x54ee94['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            }
            return Math['random']()['toString'](0x24)['substring'](0x2) + Date['now']()['toString'](0x24);
        }
    ['_generateNonce']() {
            const _0x64679e = this['_generateSecureId'](),
                _0x281418 = Date['now']();
            this['nonceCache']['add'](_0x64679e), this['nonceTimestamps']['set'](_0x64679e, _0x281418);
            if (this['nonceCache']['size'] > this['maxCachedNonces']) {
                const _0x58f062 = Array['from'](this['nonceTimestamps']['entries']())['sort']((_0x494479, _0x23cfc1) => _0x494479[0x1] - _0x23cfc1[0x1])['slice'](0x0, this['nonceCache']['size'] - this['maxCachedNonces']);
                _0x58f062['forEach'](([_0x4f7c32, _0x4853fc]) => {
                    this['nonceCache']['delete'](_0x4f7c32), this['nonceTimestamps']['delete'](_0x4f7c32);
                });
            }
            return _0x64679e;
        }
    ['_validateNonce'](_0x19052a) {
            if (!_0x19052a || !this['nonceCache']['has'](_0x19052a))
                return ![];
            const _0x223337 = this['nonceTimestamps']['get'](_0x19052a);
            if (!_0x223337 || Date['now']() - _0x223337 > this['NONCE_VALIDITY_DURATION'])
                return this['nonceCache']['delete'](_0x19052a), this['nonceTimestamps']['delete'](_0x19052a), ![];
            return !![];
        }
    ['_cleanupExpiredNonces']() {
            const _0x4e0a65 = Date['now'](),
                _0x22ee6c = [];
            for (const [_0x563b0a, _0xf97ef0] of this['nonceTimestamps']) {
                _0x4e0a65 - _0xf97ef0 > this['NONCE_VALIDITY_DURATION'] && _0x22ee6c['push'](_0x563b0a);
            }
            _0x22ee6c['forEach'](_0x532971 => {
                this['nonceCache']['delete'](_0x532971), this['nonceTimestamps']['delete'](_0x532971);
            });
        }
    ['checkRateLimit'](_0x5c4694, _0x5c5e6b = null) {
            const _0x2d5f6a = _0x5c5e6b || this['rateLimits'][_0x5c4694] || this['rateLimits']['default'];
            !this['rateLimitMap']['has'](_0x5c4694) && this['rateLimitMap']['set'](_0x5c4694, []);
            const _0x2a246b = this['rateLimitMap']['get'](_0x5c4694),
                _0x36b131 = Date['now'](),
                _0x305042 = _0x36b131 - 0x3e8,
                _0x3873b6 = _0x2a246b['filter'](_0x462f54 => _0x462f54 > _0x305042);
            _0x3873b6['push'](_0x36b131);
            if (_0x3873b6['length'] > _0x2d5f6a)
                return this['_logSecurityEvent']('rate_limit_exceeded', {
                    'eventType': _0x5c4694,
                    'limit': _0x2d5f6a
                }), this['suspiciousActivityCount']++, ![];
            return this['rateLimitMap']['set'](_0x5c4694, _0x3873b6), !![];
        }
    ['sanitizeData'](_0x38f70a, _0x42689a = 0xa) {
            if (_0x42689a <= 0x0)
                return console['warn']('⚠️\x20Max\x20sanitization\x20depth\x20exceeded'), null;
            if (_0x38f70a === null || _0x38f70a === undefined)
                return _0x38f70a;
            if (typeof _0x38f70a === 'string') {
                if (_0x38f70a['length'] > 0xc350)
                    return console['warn']('⚠️\x20String\x20too\x20long,\x20truncating'), _0x38f70a['substring'](0x0, 0xc350);
                return this['_escapeHtml'](_0x38f70a);
            }
            if (typeof _0x38f70a === 'number' || typeof _0x38f70a === 'boolean')
                return _0x38f70a;
            if (Array['isArray'](_0x38f70a))
                return _0x38f70a['map']((_0x369ef8, _0xea56f6) => {
                    if (_0xea56f6 > 0x3e8)
                        return console['warn']('⚠️\x20Array\x20too\x20large,\x20truncating'), null;
                    return this['sanitizeData'](_0x369ef8, _0x42689a - 0x1);
                });
            if (typeof _0x38f70a === 'object') {
                const _0x25c2fd = {},
                    _0x1fd092 = Object['keys'](_0x38f70a);
                if (_0x1fd092['length'] > 0x64)
                    return console['warn']('⚠️\x20Object\x20has\x20too\x20many\x20keys'), null;
                for (const _0x6e3be4 of _0x1fd092) {
                    if (!/^[a-zA-Z_$][a-zA-Z0-9_$\-\.]*$/ ['test'](_0x6e3be4)) {
                        console['warn']('⚠️\x20Invalid\x20key\x20name:\x20' + _0x6e3be4);
                        continue;
                    }
                    _0x25c2fd[_0x6e3be4] = this['sanitizeData'](_0x38f70a[_0x6e3be4], _0x42689a - 0x1);
                }
                return _0x25c2fd;
            }
            return null;
        }
    async ['_encryptPayload'](_0x2c0be4) {
            if (!this['serverPublicKey'])
                return console['warn']('⚠️\x20No\x20server\x20public\x20key\x20configured\x20for\x20encryption'), null;
            try {
                const _0x1d0916 = new TextEncoder(),
                    _0x287b23 = _0x1d0916['encode'](JSON['stringify'](_0x2c0be4)),
                    _0x403906 = await crypto['subtle']['encrypt']({
                        'name': 'RSA-OAEP',
                        'hash': 'SHA-256'
                    }, this['serverPublicKey'], _0x287b23);
                return btoa(String['fromCharCode'](...new Uint8Array(_0x403906)));
            } catch (_0x12c84d) {
                return console['error']('❌\x20Encryption\x20failed:', _0x12c84d), this['_logSecurityEvent']('encryption_error', {
                    'error': _0x12c84d['message']
                }), null;
            }
        }
    ['_escapeHtml'](_0x1807db) {
            const _0x189fd2 = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '\x22': '&quot;',
                '\x27': '&#39;'
            };
            return _0x1807db['replace'](/[&<>"']/g, _0x5731cc => _0x189fd2[_0x5731cc]);
        }
    ['_containsSuspiciousContent'](_0x53b8c9) {
            const _0xd56625 = JSON['stringify'](_0x53b8c9)['toLowerCase']();
            if (/(\bunion\b|\bselect\b|\binsert\b|\bdelete\b|\bdrop\b|\bupdate\b|\bexec\b|\bexecute\b)/i ['test'](_0xd56625))
                return !![];
            if (/(<script|javascript:|onerror=|onclick=|onload=|eval\(|function\()/i ['test'](_0xd56625))
                return !![];
            if (/(setTimeout|setInterval|constructorFunction|__proto__|constructor)\s*(\(|=)/i ['test'](_0xd56625))
                return !![];
            return ![];
        }
    ['validateMessage'](_0xf98518, _0x9b4d8b) {
            if (!this['checkRateLimit'](_0xf98518))
                return ![];
            const _0x446032 = JSON['stringify'](_0x9b4d8b);
            if (_0x446032['length'] > this['MAX_MESSAGE_SIZE'])
                return console['warn']('⚠️\x20Message\x20too\x20large:\x20' + _0x446032['length'] + '\x20bytes\x20(max:\x20' + this['MAX_MESSAGE_SIZE'] + ')'), this['suspiciousActivityCount']++, ![];
            if (this['_containsSuspiciousContent'](_0x9b4d8b))
                return console['warn']('⚠️\x20Suspicious\x20content\x20detected'), this['suspiciousActivityCount']++, ![];
            return !![];
        }
    ['validateIncomingMessage'](_0x3ee29a) {
            if (!this['validateIncomingMessages'])
                return !![];
            if (!_0x3ee29a || typeof _0x3ee29a !== 'object')
                return ![];
            const {
                type: _0x3e8d5b,
                timestamp: _0x200086,
                nonce: _0x2eecf9,
                userId: _0x59d177,
                sessionId: _0x19c3f7
            } = _0x3ee29a;
            if (!_0x3e8d5b || !_0x200086 || !_0x2eecf9)
                return console['warn']('⚠️\x20Incomplete\x20message\x20structure'), ![];
            const _0x37a0f6 = Math['abs'](Date['now']() - _0x200086);
            if (_0x37a0f6 > this['TIMESTAMP_VALIDITY_WINDOW'])
                return console['warn']('⚠️\x20Message\x20timestamp\x20too\x20old'), this['_logSecurityEvent']('old_timestamp', {
                    'timeDiff': _0x37a0f6
                }), ![];
            if (!this['_validateNonce'](_0x2eecf9))
                return console['warn']('⚠️\x20Invalid\x20or\x20replayed\x20nonce'), this['_logSecurityEvent']('nonce_validation_failed', {
                    'nonce': _0x2eecf9
                }), ![];
            if (_0x59d177 && _0x59d177 !== this['userId'])
                return console['warn']('⚠️\x20Message\x20from\x20unauthorized\x20user'), this['_logSecurityEvent']('unauthorized_user', {
                    'messageUserId': _0x59d177
                }), ![];
            if (_0x19c3f7 && _0x19c3f7 !== this['sessionId'])
                return console['warn']('⚠️\x20Message\x20from\x20different\x20session'), ![];
            return !![];
        }
    ['createSecureEnvelope'](_0xe1a9ae, _0x1772b6) {
            const _0x2bf6cd = {
                'type': _0xe1a9ae,
                'payload': this['sanitizeData'](_0x1772b6),
                'timestamp': Date['now'](),
                'nonce': this['_generateNonce'](),
                'userId': this['userId'],
                'sessionId': this['sessionId'],
                'version': '2.0',
                'priority': _0x1772b6['priority'] || 'normal'
            };
            return _0x2bf6cd;
        }
    ['_securityNote']() {}
    ['isSuspiciousActivityDetected']() {
            return this['suspiciousActivityCount'] >= this['suspiciousActivityThreshold'];
        }
    ['resetSuspiciousActivityCounter']() {
            this['suspiciousActivityCount'] = 0x0;
        }
    ['_logSecurityEvent'](_0x5d0cee, _0x2801e7) {
            const _0x330939 = {
                'timestamp': new Date()['toISOString'](),
                'eventType': _0x5d0cee,
                'userId': this['userId'],
                'sessionId': this['sessionId'],
                'details': _0x2801e7
            };
            this['securityLogs']['push'](_0x330939), this['securityLogs']['length'] > this['maxSecurityLogs'] && this['securityLogs']['shift'](), console['log']('📊\x20Security:\x20' + _0x5d0cee, _0x2801e7);
        }
    ['getSecurityLogs'](_0x31ba08 = 0x32) {
            return this['securityLogs']['slice'](-_0x31ba08);
        }
    async ['flushLogsToServer']() {
            if (this['securityLogs']['length'] === 0x0)
                return;
            try {
                const _0x4d4628 = this['securityLogs']['slice']();
                await fetch('/api/audit/logs', {
                    'method': 'POST',
                    'credentials': 'include',
                    'headers': {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': this['_getCsrfToken']()
                    },
                    'body': JSON['stringify']({
                        'logs': _0x4d4628,
                        'sessionId': this['sessionId']
                    })
                }), this['securityLogs'] = [];
            } catch (_0x21d8c8) {
                console['error']('❌\x20Failed\x20to\x20flush\x20logs\x20to\x20server:', _0x21d8c8);
            }
        }
    ['startCleanupTask']() {
            if (this['cleanupTask'])
                clearInterval(this['cleanupTask']);
            this['cleanupTask'] = setInterval(() => this['_cleanupExpiredNonces'](), this['CLEANUP_INTERVAL']), console['log']('⏱️\x20Cleanup\x20task\x20started\x20(interval:\x20' + this['CLEANUP_INTERVAL'] + 'ms)');
        }
    ['stopCleanupTask']() {
            this['cleanupTask'] && (clearInterval(this['cleanupTask']), this['cleanupTask'] = null, console['log']('⏹️\x20Cleanup\x20task\x20stopped'));
        }
    ['destroy']() {
            this['stopCleanupTask'](), this['authToken'] = null, this['refreshToken'] = null, this['userId'] = null, this['nonceCache']['clear'](), this['nonceTimestamps']['clear'](), this['rateLimitMap']['clear'](), this['securityLogs'] = [], this['suspiciousActivityCount'] = 0x0, console['log']('🔒\x20Security\x20manager\x20destroyed');
        }
    ['getSecurityStatus']() {
            return {
                'isInitialized': !!this['userId'],
                'userId': this['userId'],
                'sessionId': this['sessionId'],
                'tokenValid': this['tokenExpiresAt'] > Date['now'](),
                'tokenExpiresAt': this['tokenExpiresAt'],
                'noncesCached': this['nonceCache']['size'],
                'rateLimitingActive': this['rateLimitMap']['size'] > 0x0,
                'suspiciousActivityDetected': this['isSuspiciousActivityDetected'](),
                'suspiciousActivityCount': this['suspiciousActivityCount']
            };
        }
}
typeof module !== 'undefined' && module['exports'] && (module['exports'] = _0x103f63);
typeof window !== 'undefined' && (window['WebSocketSecurityManager'] = _0x103f63);