class _0x1d72a4 {
    constructor() {
            this['apiBase'] = window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space', this['usageChartInstance'] = null, this['platformChartInstance'] = null, this['securityConfig'] = {
                'MAX_RESPONSE_SIZE': 0xa * 0x400 * 0x400,
                'MAX_ARRAY_LENGTH': 0x2710,
                'MAX_STRING_LENGTH': 0x1388,
                'REQUIRE_CSRF_TOKEN': !![],
                'CSRF_HEADER': 'X-CSRF-Token',
                'ENABLE_CONTENT_VALIDATION': !![],
                'SECURITY_LOG_ENABLED': !![],
                'MAX_LOG_ENTRIES': 0x64,
                'REQUEST_TIMEOUT': 0x7530,
                'SAFE_DOMAINS': [window['location']['origin']],
                'CHART_INSTANCE_LIMIT': 0x5,
                'AUTO_REFRESH_INTERVAL': 0x493e0,
                'ENABLE_SRI_VALIDATION': !![],
                'CHART_JS_INTEGRITY': 'sha384-aZS6tFgzrDd/fMJyEZZLPDZZ0pOLxrVfvlIa8F3XvKU6aMhIvDlFBQ5JhMPSLRFf',
                'SRI_ALGORITHMS': [
                'sha256',
                'sha384',
                'sha512'
            ],
                'ENABLE_REQUEST_SIGNING': !![],
                'SIGNATURE_ALGORITHM': 'HMAC-SHA256',
                'SIGNATURE_HEADER': 'X-Request-Signature',
                'TIMESTAMP_HEADER': 'X-Request-Timestamp',
                'NONCE_HEADER': 'X-Request-Nonce',
                'REQUEST_TTL': 0x493e0,
                'REQUIRE_CRYPTO_API': !![]
            }, this['analyticsData'] = {
                'monetization': 0x0,
                'subscribers': 0x0,
                'views': 0x0,
                'clipsCreated': 0x0,
                'dailyViews': [],
                'weeklyViews': [],
                'monthlyViews': [],
                'currentPeriod': 'week',
                'platformViews': {
                    'youtube': 0x0,
                    'tiktok': 0x0,
                    'all': 0x0
                },
                'currentPlatform': 'all'
            }, this['previousMetrics'] = {
                'views': 0x0,
                'subscribers': 0x0
            }, this['securityState'] = {
                'csrfToken': this['_getCSRFToken'](),
                'chartInstances': 0x0,
                'securityLog': []
            }, this['loadAnalyticsData'](), this['setupFilterButtons'](), this['observeClipsStudio'](), this['startAutoRefresh']();
        }
    ['_getCSRFToken']() {
            const _0x2a5cd8 = document['querySelector']('meta[name=\x22csrf-token\x22]');
            return _0x2a5cd8 ? _0x2a5cd8['getAttribute']('content') : null;
        }
    ['_constantTimeCompare'](_0x555bc1, _0x908e) {
            if (_0x555bc1['length'] !== _0x908e['length'])
                return ![];
            let _0x1afdc6 = 0x0;
            for (let _0xb3dd4e = 0x0; _0xb3dd4e < _0x555bc1['length']; _0xb3dd4e++) {
                _0x1afdc6 |= _0x555bc1['charCodeAt'](_0xb3dd4e) ^ _0x908e['charCodeAt'](_0xb3dd4e);
            }
            return _0x1afdc6 === 0x0;
        }
    ['_sanitizeString'](_0x364c94, _0x24561c = this['securityConfig']['MAX_STRING_LENGTH']) {
            if (typeof _0x364c94 !== 'string')
                return '';
            let _0x34ff00 = _0x364c94['replace'](/[\x00-\x1F\x7F]/g, '');
            const _0x231588 = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '\x22': '&quot;',
                '\x27': '&#39;'
            };
            return _0x34ff00 = _0x34ff00['replace'](/[&<>"']/g, _0x3af8ab => _0x231588[_0x3af8ab]), _0x34ff00['slice'](0x0, _0x24561c);
        }
    ['_validateNumber'](_0x56c6ec, _0x74e8a7 = 0x0, _0x9832ee = Number['MAX_SAFE_INTEGER']) {
            const _0x240bdf = Number(_0x56c6ec);
            if (!Number['isFinite'](_0x240bdf))
                return 0x0;
            return Math['max'](_0x74e8a7, Math['min'](_0x9832ee, _0x240bdf));
        }
    ['_validateArray'](_0x12a419, _0x473d93 = this['securityConfig']['MAX_ARRAY_LENGTH']) {
            if (!Array['isArray'](_0x12a419))
                return [];
            return _0x12a419['slice'](0x0, _0x473d93);
        }
    ['_validateResponseSize'](_0x2304bf) {
            const _0x2b5837 = _0x2304bf['headers']['get']('content-length');
            if (_0x2b5837 && parseInt(_0x2b5837) > this['securityConfig']['MAX_RESPONSE_SIZE'])
                return this['_logSecurityEvent']('RESPONSE_SIZE_EXCEEDED', {
                    'size': _0x2b5837,
                    'max': this['securityConfig']['MAX_RESPONSE_SIZE']
                }), ![];
            return !![];
        }
    ['_validateAnalyticsResponse'](_0x555102) {
            if (!_0x555102 || typeof _0x555102 !== 'object')
                return this['_logSecurityEvent']('INVALID_RESPONSE_TYPE', {
                    'received': typeof _0x555102
                }), null;
            const _0x4f9de7 = {
                'monetization': this['_validateNumber'](_0x555102['monetization'], 0x0, 0x3b9ac9ff),
                'subscribers': this['_validateNumber'](_0x555102['subscribers'], 0x0, 0x3b9ac9ff),
                'views': this['_validateNumber'](_0x555102['views'], 0x0, 0x3b9ac9ff),
                'dailyViews': this['_validateArray'](_0x555102['dailyViews']),
                'weeklyViews': this['_validateArray'](_0x555102['weeklyViews']),
                'monthlyViews': this['_validateArray'](_0x555102['monthlyViews']),
                'platformViews': this['_validatePlatformViews'](_0x555102['platformViews']),
                'connected': typeof _0x555102['connected'] === 'boolean' ? _0x555102['connected'] : ![],
                'connections': this['_validateConnections'](_0x555102['connections'])
            };
            return _0x4f9de7['dailyViews'] = _0x4f9de7['dailyViews']['map'](_0x45aa4f => this['_validateMetricItem'](_0x45aa4f)), _0x4f9de7['weeklyViews'] = _0x4f9de7['weeklyViews']['map'](_0x43354d => this['_validateMetricItem'](_0x43354d)), _0x4f9de7['monthlyViews'] = _0x4f9de7['monthlyViews']['map'](_0x2a5580 => this['_validateMetricItem'](_0x2a5580)), _0x4f9de7;
        }
    ['_validateMetricItem'](_0x3af0f2) {
            return {
                'views': this['_validateNumber'](_0x3af0f2['views'], 0x0),
                'revenue': this['_validateNumber'](_0x3af0f2['revenue'] || _0x3af0f2['estimatedRevenue'], 0x0),
                'estimatedRevenue': this['_validateNumber'](_0x3af0f2['estimatedRevenue'], 0x0),
                'subscribers': this['_validateNumber'](_0x3af0f2['subscribers'], 0x0),
                'day': this['_sanitizeString'](_0x3af0f2['day'] || '', 0x32),
                'week': this['_sanitizeString'](_0x3af0f2['week'] || '', 0x32),
                'month': this['_sanitizeString'](_0x3af0f2['month'] || '', 0x32)
            };
        }
    ['_validatePlatformViews'](_0x545eba) {
            return {
                'youtube': this['_validateNumber']((_0x545eba || {})['youtube'], 0x0),
                'tiktok': this['_validateNumber']((_0x545eba || {})['tiktok'], 0x0),
                'all': this['_validateNumber']((_0x545eba || {})['all'], 0x0)
            };
        }
    ['_validateConnections'](_0x2570c7) {
            if (!_0x2570c7 || typeof _0x2570c7 !== 'object')
                return {};
            return {
                'youtube': _0x2570c7['youtube'] ? {
                    'connected': typeof _0x2570c7['youtube']['connected'] === 'boolean' ? _0x2570c7['youtube']['connected'] : ![],
                    'username': this['_sanitizeString'](_0x2570c7['youtube']['username'] || '', 0x64)
                } : null
            };
        }
    ['_logSecurityEvent'](_0x3a50a2, _0x269a0d = {}) {
            if (!this['securityConfig']['SECURITY_LOG_ENABLED'])
                return;
            const _0x4e4a8c = {
                'timestamp': new Date()['toISOString'](),
                'type': _0x3a50a2,
                'details': _0x269a0d,
                'url': window['location']['pathname']
            };
            this['securityState']['securityLog']['push'](_0x4e4a8c), this['securityState']['securityLog']['length'] > this['securityConfig']['MAX_LOG_ENTRIES'] && this['securityState']['securityLog']['shift'](), (window['location']['hostname'] === 'localhost' || window['location']['hostname'] === '127.0.0.1') && ((_0x3a50a2['includes']('ERROR') || _0x3a50a2['includes']('FAILED') || _0x3a50a2['includes']('EXCEEDED')) && console['warn']('[Analytics\x20Security]\x20' + _0x3a50a2, _0x269a0d));
        }
    ['_safeSetTextContent'](_0x5375dc, _0x40d4b1) {
            if (!_0x5375dc)
                return;
            try {
                _0x5375dc['textContent'] = this['_sanitizeString'](String(_0x40d4b1));
            } catch (_0x3929a8) {
                this['_logSecurityEvent']('DOM_UPDATE_ERROR', {
                    'error': _0x3929a8['message']
                });
            }
        }
    ['_validateSRI'](_0x9a2351, _0x1b20cb) {
            if (!this['securityConfig']['ENABLE_SRI_VALIDATION'])
                return !![];
            try {
                const _0x5544a8 = document['querySelectorAll']('script[src]');
                let _0x1ac637 = null;
                for (const _0x218a38 of _0x5544a8) {
                    if (_0x218a38['src'] === _0x9a2351) {
                        _0x1ac637 = _0x218a38;
                        break;
                    }
                }
                if (!_0x1ac637)
                    return this['_logSecurityEvent']('SRI_SCRIPT_NOT_FOUND', {
                        'url': _0x9a2351
                    }), ![];
                const _0x5e8cf9 = _0x1ac637['getAttribute']('integrity');
                if (!_0x5e8cf9 && _0x1b20cb)
                    return this['_logSecurityEvent']('SRI_MISSING_INTEGRITY', {
                        'url': _0x9a2351
                    }), ![];
                const _0x442d6f = this['securityConfig']['SRI_ALGORITHMS']['some'](_0x49524e => _0x5e8cf9['startsWith'](_0x49524e + '-'));
                if (!_0x442d6f)
                    return this['_logSecurityEvent']('SRI_INVALID_ALGORITHM', {
                        'url': _0x9a2351,
                        'integrity': _0x5e8cf9
                    }), ![];
                return this['_logSecurityEvent']('SRI_VALIDATION_SUCCESS', {
                    'url': _0x9a2351
                }), !![];
            } catch (_0x1dd545) {
                return this['_logSecurityEvent']('SRI_VALIDATION_ERROR', {
                    'error': _0x1dd545 instanceof Error ? _0x1dd545['message'] : 'Unknown\x20error'
                }), ![];
            }
        }
    ['_generateNonce']() {
            const _0x460e8b = new Uint8Array(0x10);
            return crypto['getRandomValues'](_0x460e8b), Array['from'](_0x460e8b, _0xa36cd => _0xa36cd['toString'](0x10)['padStart'](0x2, '0'))['join']('');
        }
    async ['_signRequest'](_0x3d4195, _0x3f1b38, _0x41af36 = null) {
        if (!this['securityConfig']['ENABLE_REQUEST_SIGNING'])
            return {
                'signature': null,
                'timestamp': Date['now'](),
                'nonce': this['_generateNonce']()
            };
        try {
            if (!window['crypto'] || !window['crypto']['subtle']) {
                this['_logSecurityEvent']('CRYPTO_API_UNAVAILABLE', {});
                if (this['securityConfig']['REQUIRE_CRYPTO_API'])
                    return null;
                return {
                    'signature': null,
                    'timestamp': Date['now'](),
                    'nonce': this['_generateNonce']()
                };
            }
            const _0x374bbe = Date['now']()['toString'](),
                _0x513bd9 = this['_generateNonce'](),
                _0x2efb74 = await this['_hashData'](_0x41af36 || ''),
                _0x45a6dc = _0x3d4195 + '|' + _0x3f1b38 + '|' + _0x374bbe + '|' + _0x513bd9 + '|' + _0x2efb74,
                _0x1a4d89 = await this['_getDerivedKey'](),
                _0x2fa164 = new TextEncoder(),
                _0x44c9e2 = _0x2fa164['encode'](_0x45a6dc),
                _0x32812a = await window['crypto']['subtle']['sign']('HMAC', _0x1a4d89, _0x44c9e2),
                _0x2190ca = Array['from'](new Uint8Array(_0x32812a))['map'](_0x513522 => _0x513522['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            return this['_logSecurityEvent']('REQUEST_SIGNED_SUCCESS', {
                'endpoint': _0x3f1b38,
                'timestamp': _0x374bbe
            }), {
                'signature': _0x2190ca,
                'timestamp': _0x374bbe,
                'nonce': _0x513bd9
            };
        } catch (_0x343c02) {
            return this['_logSecurityEvent']('REQUEST_SIGNING_ERROR', {
                'error': _0x343c02 instanceof Error ? _0x343c02['message'] : 'Unknown\x20error'
            }), null;
        }
    }
    async ['_hashData'](_0x415391) {
        try {
            if (!window['crypto'] || !window['crypto']['subtle'])
                return 'no-hash';
            const _0x4b1ee4 = new TextEncoder(),
                _0x2fe7b4 = _0x4b1ee4['encode'](String(_0x415391)),
                _0x1c48fc = await window['crypto']['subtle']['digest']('SHA-256', _0x2fe7b4),
                _0x36bd6b = Array['from'](new Uint8Array(_0x1c48fc));
            return _0x36bd6b['map'](_0x12e80a => _0x12e80a['toString'](0x10)['padStart'](0x2, '0'))['join']('');
        } catch (_0x312873) {
            return this['_logSecurityEvent']('HASH_ERROR', {
                'error': _0x312873 instanceof Error ? _0x312873['message'] : 'Unknown\x20error'
            }), 'hash-error';
        }
    }
    async ['_getDerivedKey']() {
            try {
                if (!window['crypto'] || !window['crypto']['subtle'])
                    throw new Error('Web\x20Crypto\x20API\x20not\x20available');
                const _0x47c064 = this['securityState']['csrfToken'] || 'fallback-key',
                    _0x29fd16 = new TextEncoder(),
                    _0x23e8c2 = await window['crypto']['subtle']['importKey']('raw', _0x29fd16['encode'](_0x47c064), {
                        'name': 'HMAC',
                        'hash': 'SHA-256'
                    }, ![], [
                    'sign',
                    'verify'
                ]);
                return _0x23e8c2;
            } catch (_0x23976d) {
                return this['_logSecurityEvent']('KEY_DERIVATION_ERROR', {
                    'error': _0x23976d instanceof Error ? _0x23976d['message'] : 'Unknown\x20error'
                }), null;
            }
        }
    ['observeClipsStudio']() {
            setInterval(() => {
                if (window['clipsStudio'] && Array['isArray'](window['clipsStudio']['libraryItems'])) {
                    const _0x4e33d6 = this['_validateNumber'](window['clipsStudio']['libraryItems']['length'], 0x0, 0xf423f);
                    _0x4e33d6 !== this['analyticsData']['clipsCreated'] && (this['analyticsData']['clipsCreated'] = _0x4e33d6, this['updateDashboard']());
                }
            }, 0x1388);
        }
    ['setupFilterButtons']() {
            document['querySelectorAll']('.period-btn')['forEach'](_0x235f05 => {
                _0x235f05['addEventListener']('click', () => {
                    const _0x5b0527 = _0x235f05['dataset']['period'];
                    this['setTimePeriod'](_0x5b0527);
                });
            }), document['querySelectorAll']('.platform-btn')['forEach'](_0x38a6d2 => {
                _0x38a6d2['addEventListener']('click', () => {
                    const _0x5dd5a0 = _0x38a6d2['dataset']['platform'];
                    this['setPlatformFilter'](_0x5dd5a0);
                });
            });
        }
    ['setTimePeriod'](_0xe6bcbb) {
            this['analyticsData']['currentPeriod'] = _0xe6bcbb, document['querySelectorAll']('.period-btn')['forEach'](_0x4943dd => {
                _0x4943dd['classList']['remove']('active'), _0x4943dd['dataset']['period'] === _0xe6bcbb && _0x4943dd['classList']['add']('active');
            }), this['updateDashboard']();
        }
    ['setPlatformFilter'](_0x25cd95) {
            this['analyticsData']['currentPlatform'] = _0x25cd95, document['querySelectorAll']('.platform-btn')['forEach'](_0x2dc70a => {
                _0x2dc70a['classList']['remove']('active'), _0x2dc70a['dataset']['platform'] === _0x25cd95 && _0x2dc70a['classList']['add']('active');
            }), this['updateCharts']();
        }
    ['startAutoRefresh']() {
            setInterval(() => {
                this['isConnected'] && this['fetchAnalyticsFromServer']()['catch'](_0x5af9a1 => {
                    this['_logSecurityEvent']('AUTO_REFRESH_ERROR', {
                        'error': _0x5af9a1 instanceof Error ? _0x5af9a1['message'] : 'Unknown\x20error'
                    });
                });
            }, this['securityConfig']['AUTO_REFRESH_INTERVAL']);
        }
    ['animateNumber'](_0x475f7f, _0x17c841, _0x38738b = 0x3e8, _0xbe2608 = '', _0x470094 = '') {
            if (!_0x475f7f)
                return;
            try {
                const _0x38fdf2 = 0x0,
                    _0x4caec8 = Date['now'](),
                    _0x157dbc = () => {
                        const _0x552208 = Date['now']() - _0x4caec8,
                            _0x10ac04 = Math['min'](_0x552208 / _0x38738b, 0x1),
                            _0x35bb67 = _0x224626 => 0x1 - (0x1 - _0x224626) * (0x1 - _0x224626),
                            _0x2275f5 = _0x35bb67(_0x10ac04),
                            _0x2c4e97 = Math['floor'](_0x38fdf2 + (_0x17c841 - _0x38fdf2) * _0x2275f5),
                            _0x5083f0 = _0xbe2608 + this['formatNumber'](_0x2c4e97) + _0x470094;
                        this['_safeSetTextContent'](_0x475f7f, _0x5083f0);
                        if (_0x10ac04 < 0x1)
                            requestAnimationFrame(_0x157dbc);
                        else {
                            const _0x4fe7ba = _0xbe2608 + this['formatNumber'](_0x17c841) + _0x470094;
                            this['_safeSetTextContent'](_0x475f7f, _0x4fe7ba);
                        }
                    };
                requestAnimationFrame(_0x157dbc);
            } catch (_0x1d5a08) {
                this['_logSecurityEvent']('ANIMATION_ERROR', {
                    'error': _0x1d5a08 instanceof Error ? _0x1d5a08['message'] : 'Unknown\x20error'
                });
                const _0x5015bb = _0xbe2608 + this['formatNumber'](_0x17c841) + _0x470094;
                this['_safeSetTextContent'](_0x475f7f, _0x5015bb);
            }
        }
    async ['fetchAnalyticsFromServer']() {
        try {
            const _0x1a08f0 = {
                'Content-Type': 'application/json'
            };
            this['securityState']['csrfToken'] && this['securityConfig']['REQUIRE_CSRF_TOKEN'] && (_0x1a08f0[this['securityConfig']['CSRF_HEADER']] = this['securityState']['csrfToken']);
            const _0x11f624 = this['apiBase'] + '/analytics/dashboard';
            if (this['securityConfig']['ENABLE_REQUEST_SIGNING']) {
                const _0x22c447 = await this['_signRequest']('GET', _0x11f624);
                _0x22c447 && (_0x22c447['signature'] && (_0x1a08f0[this['securityConfig']['SIGNATURE_HEADER']] = _0x22c447['signature']), _0x1a08f0[this['securityConfig']['TIMESTAMP_HEADER']] = _0x22c447['timestamp'], _0x1a08f0[this['securityConfig']['NONCE_HEADER']] = _0x22c447['nonce']);
            }
            const _0x402877 = new AbortController(),
                _0x5f3447 = setTimeout(() => _0x402877['abort'](), this['securityConfig']['REQUEST_TIMEOUT']),
                _0x5bfb08 = await fetch(_0x11f624, {
                    'method': 'GET',
                    'headers': _0x1a08f0,
                    'credentials': 'include',
                    'signal': _0x402877['signal']
                });
            clearTimeout(_0x5f3447);
            if (!this['_validateResponseSize'](_0x5bfb08)) {
                this['isConnected'] = ![], this['updateDashboard']();
                return;
            }
            if (!_0x5bfb08['ok']) {
                this['_logSecurityEvent']('ANALYTICS_FETCH_FAILED', {
                    'status': _0x5bfb08['status'],
                    'statusText': _0x5bfb08['statusText']
                }), this['isConnected'] = ![], this['updateDashboard']();
                return;
            }
            const _0x2aad33 = await _0x5bfb08['json'](),
                _0x2bc704 = this['_validateAnalyticsResponse'](_0x2aad33);
            if (!_0x2bc704) {
                this['_logSecurityEvent']('RESPONSE_VALIDATION_FAILED', {}), this['isConnected'] = ![], this['updateDashboard']();
                return;
            }
            const _0x1f0bae = _0x2bc704['connected'] || _0x2bc704['connections']?.['youtube']?.['connected'] === !![];
            _0x1f0bae || _0x2bc704['dailyViews']?.['length'] > 0x0 ? (this['isConnected'] = !![], this['analyticsData']['monetization'] = _0x2bc704['monetization'], this['analyticsData']['subscribers'] = _0x2bc704['subscribers'], this['analyticsData']['views'] = _0x2bc704['views'], this['analyticsData']['dailyViews'] = _0x2bc704['dailyViews'], this['analyticsData']['weeklyViews'] = _0x2bc704['weeklyViews'], this['analyticsData']['monthlyViews'] = _0x2bc704['monthlyViews'], this['analyticsData']['platformViews'] = _0x2bc704['platformViews'], _0x2bc704['connections'] && Object['defineProperty'](window, 'platformConnections', {
                'value': Object['freeze'](_0x2bc704['connections']),
                'writable': ![],
                'configurable': ![]
            }), this['_logSecurityEvent']('ANALYTICS_FETCH_SUCCESS', {}), this['updateDashboard']()) : (this['isConnected'] = ![], this['updateDashboard']());
        } catch (_0x169d70) {
            _0x169d70['name'] === 'AbortError' ? this['_logSecurityEvent']('REQUEST_TIMEOUT', {}) : this['_logSecurityEvent']('ANALYTICS_FETCH_ERROR', {
                'error': _0x169d70 instanceof Error ? _0x169d70['message'] : 'Unknown\x20error'
            }), this['isConnected'] = ![], this['updateDashboard']();
        }
    }
    async ['loadAnalyticsData']() {
            try {
                const _0x41bfa9 = {
                    'Content-Type': 'application/json'
                };
                this['securityState']['csrfToken'] && this['securityConfig']['REQUIRE_CSRF_TOKEN'] && (_0x41bfa9[this['securityConfig']['CSRF_HEADER']] = this['securityState']['csrfToken']);
                const _0x448744 = this['apiBase'] + '/analytics/dashboard';
                if (this['securityConfig']['ENABLE_REQUEST_SIGNING']) {
                    const _0x531c35 = await this['_signRequest']('GET', _0x448744);
                    _0x531c35 && (_0x531c35['signature'] && (_0x41bfa9[this['securityConfig']['SIGNATURE_HEADER']] = _0x531c35['signature']), _0x41bfa9[this['securityConfig']['TIMESTAMP_HEADER']] = _0x531c35['timestamp'], _0x41bfa9[this['securityConfig']['NONCE_HEADER']] = _0x531c35['nonce']);
                }
                const _0x337adc = new AbortController(),
                    _0x2e3897 = setTimeout(() => _0x337adc['abort'](), this['securityConfig']['REQUEST_TIMEOUT']);
                try {
                    const _0x1e8ddd = await fetch(_0x448744, {
                        'method': 'GET',
                        'headers': _0x41bfa9,
                        'credentials': 'include',
                        'signal': _0x337adc['signal']
                    });
                    clearTimeout(_0x2e3897);
                    if (_0x1e8ddd['ok']) {
                        if (!this['_validateResponseSize'](_0x1e8ddd)) {
                            this['isConnected'] = ![], this['updateDashboard']();
                            return;
                        }
                        const _0x1829f8 = await _0x1e8ddd['json'](),
                            _0x2673e1 = this['_validateAnalyticsResponse'](_0x1829f8);
                        if (!_0x2673e1) {
                            this['_logSecurityEvent']('INITIAL_LOAD_VALIDATION_FAILED', {}), this['isConnected'] = ![], this['updateDashboard']();
                            return;
                        }
                        const _0x36fde8 = _0x2673e1['connected'] || _0x2673e1['connections']?.['youtube']?.['connected'] === !![];
                        this['isConnected'] = _0x36fde8, _0x2673e1 && (this['analyticsData']['monetization'] = _0x2673e1['monetization'], this['analyticsData']['subscribers'] = _0x2673e1['subscribers'], this['analyticsData']['views'] = _0x2673e1['views'], this['analyticsData']['dailyViews'] = _0x2673e1['dailyViews'], this['analyticsData']['weeklyViews'] = _0x2673e1['weeklyViews'], this['analyticsData']['monthlyViews'] = _0x2673e1['monthlyViews'], this['analyticsData']['platformViews'] = _0x2673e1['platformViews']), this['_logSecurityEvent']('INITIAL_LOAD_SUCCESS', {}), this['updateDashboard']();
                    } else
                        _0x1e8ddd['status'] === 0x191 ? (this['_logSecurityEvent']('UNAUTHORIZED_ACCESS', {
                            'status': 0x191
                        }), this['isConnected'] = ![], this['updateDashboard']()) : (this['_logSecurityEvent']('DASHBOARD_LOAD_ERROR', {
                            'status': _0x1e8ddd['status'],
                            'statusText': _0x1e8ddd['statusText']
                        }), this['isConnected'] = ![], this['updateDashboard']());
                } catch (_0x33ac99) {
                    _0x33ac99['name'] === 'AbortError' ? this['_logSecurityEvent']('INITIAL_LOAD_TIMEOUT', {}) : this['_logSecurityEvent']('INITIAL_LOAD_ERROR', {
                        'error': _0x33ac99 instanceof Error ? _0x33ac99['message'] : 'Unknown\x20error'
                    }), this['isConnected'] = ![], this['updateDashboard']();
                }
            } catch (_0x191ea8) {
                this['_logSecurityEvent']('LOAD_ANALYTICS_ERROR', {
                    'error': _0x191ea8 instanceof Error ? _0x191ea8['message'] : 'Unknown\x20error'
                }), this['isConnected'] = ![], this['updateDashboard']();
            }
            setTimeout(() => {
                this['updateCharts']();
            }, 0x64);
        }
    ['updateDashboard']() {
            if (!this['isConnected']) {
                const _0x480df3 = document['querySelector']('[data-card=\x22monetization\x22]\x20.card-value');
                if (_0x480df3)
                    this['_safeSetTextContent'](_0x480df3, '€0');
                const _0x12db9f = document['querySelector']('[data-card=\x22subscribers\x22]\x20.card-value');
                if (_0x12db9f)
                    this['_safeSetTextContent'](_0x12db9f, '0');
                const _0x50ec91 = document['querySelector']('[data-card=\x22views\x22]\x20.card-value');
                if (_0x50ec91)
                    this['_safeSetTextContent'](_0x50ec91, '0');
                document['querySelectorAll']('.card-trend\x20span')['forEach'](_0x196411 => {
                    this['_safeSetTextContent'](_0x196411, '0%'), _0x196411['parentElement']['className'] = 'card-trend\x20trend-neutral';
                    const _0x10208a = _0x196411['parentElement']['querySelector']('i');
                    if (_0x10208a)
                        _0x10208a['className'] = 'fas\x20fa-minus';
                });
                const _0x43b362 = document['querySelector']('[data-card=\x22clips\x22]\x20.card-value');
                if (_0x43b362) {
                    const _0x3a736c = window['clipsStudio']?.['libraryItems']?.['length'] || 0x0;
                    this['_safeSetTextContent'](_0x43b362, this['_validateNumber'](_0x3a736c, 0x0));
                }
                return;
            }
            const _0x551714 = document['querySelector']('[data-card=\x22monetization\x22]\x20.card-value');
            _0x551714 && this['animateNumber'](_0x551714, this['analyticsData']['monetization'], 0x320, '€', '');
            const _0xabe6ab = document['querySelector']('[data-card=\x22subscribers\x22]\x20.card-value');
            _0xabe6ab && this['animateNumber'](_0xabe6ab, this['analyticsData']['subscribers'], 0x320, '', '');
            const _0x3257e0 = document['querySelector']('[data-card=\x22views\x22]\x20.card-value');
            _0x3257e0 && this['animateNumber'](_0x3257e0, this['analyticsData']['views'], 0x320, '', '');
            const _0x4bde5f = document['querySelector']('[data-card=\x22clips\x22]\x20.card-value');
            if (_0x4bde5f) {
                const _0x2685b5 = window['clipsStudio']?.['libraryItems']?.['length'] || this['analyticsData']['clipsCreated'] || 0x0;
                this['_safeSetTextContent'](_0x4bde5f, this['_validateNumber'](_0x2685b5, 0x0));
            }
            this['updateTrends'](), this['updateCharts']();
        }
    ['updateTrends']() {
            if (!this['isConnected']) {
                document['querySelectorAll']('.card-trend')['forEach'](_0x31f11f => {
                    _0x31f11f['className'] = 'card-trend\x20trend-neutral';
                    const _0x20c0a0 = _0x31f11f['querySelector']('span');
                    if (_0x20c0a0)
                        _0x20c0a0['textContent'] = '0%';
                    const _0x3934c1 = _0x31f11f['querySelector']('i');
                    if (_0x3934c1)
                        _0x3934c1['className'] = 'fas\x20fa-minus';
                });
                return;
            }
            let _0xc7a31d = [];
            if (this['analyticsData']['currentPeriod'] === 'day' && this['analyticsData']['dailyViews']?.['length'] >= 0x2)
                _0xc7a31d = this['analyticsData']['dailyViews'];
            else {
                if (this['analyticsData']['currentPeriod'] === 'week' && this['analyticsData']['weeklyViews']?.['length'] >= 0x2)
                    _0xc7a31d = this['analyticsData']['weeklyViews'];
                else
                    this['analyticsData']['currentPeriod'] === 'month' && this['analyticsData']['monthlyViews']?.['length'] >= 0x2 ? _0xc7a31d = this['analyticsData']['monthlyViews'] : _0xc7a31d = this['analyticsData']['weeklyViews'];
            }
            const _0x550d1c = {
                    'monetization': this['calculateTrend'](_0xc7a31d, 'revenue'),
                    'subscribers': this['calculateTrend'](_0xc7a31d, 'subscribers'),
                    'views': this['calculateTrend'](_0xc7a31d, 'views'),
                    'clips': 0x0
                },
                _0x4e4beb = {
                    'monetization': _0x550d1c['monetization'],
                    'subscribers': _0x550d1c['subscribers'],
                    'views': _0x550d1c['views'],
                    'clips': _0x550d1c['clips']
                };
            for (const [_0x26a427, _0x2a156d] of Object['entries'](_0x4e4beb)) {
                const _0x54701c = document['querySelector']('[data-card=\x22' + _0x26a427 + '\x22]');
                if (_0x54701c) {
                    const _0x1232c4 = _0x54701c['querySelector']('.card-trend');
                    if (_0x1232c4) {
                        const _0x36f75f = _0x1232c4['querySelector']('span'),
                            _0x4e9b4e = Math['abs'](_0x2a156d);
                        if (_0x36f75f)
                            _0x36f75f['textContent'] = _0x4e9b4e + '%';
                        const _0xe65ad0 = _0x1232c4['querySelector']('i');
                        if (_0x2a156d > 0x0) {
                            _0x1232c4['className'] = 'card-trend\x20trend-up';
                            if (_0xe65ad0)
                                _0xe65ad0['className'] = 'fas\x20fa-arrow-up';
                        } else {
                            if (_0x2a156d < 0x0) {
                                _0x1232c4['className'] = 'card-trend\x20trend-down';
                                if (_0xe65ad0)
                                    _0xe65ad0['className'] = 'fas\x20fa-arrow-down';
                            } else {
                                _0x1232c4['className'] = 'card-trend\x20trend-neutral';
                                if (_0xe65ad0)
                                    _0xe65ad0['className'] = 'fas\x20fa-minus';
                            }
                        }
                    }
                }
            }
        }
    ['calculateTrend'](_0xbe32e0, _0x38659b) {
            if (!Array['isArray'](_0xbe32e0) || _0xbe32e0['length'] < 0x2)
                return 0x0;
            const _0xabddab = _0xbe32e0[_0xbe32e0['length'] - 0x1] || {},
                _0x13dd3d = _0xbe32e0[_0xbe32e0['length'] - 0x2] || {};
            let _0x34362f = 0x0,
                _0x3976b0 = 0x0;
            if (_0x38659b === 'revenue')
                _0x34362f = this['_validateNumber'](_0xabddab['revenue'] || _0xabddab['estimatedRevenue'] || 0x0, 0x0), _0x3976b0 = this['_validateNumber'](_0x13dd3d['revenue'] || _0x13dd3d['estimatedRevenue'] || 0x0, 0x0);
            else {
                if (_0x38659b === 'subscribers')
                    _0x34362f = this['_validateNumber'](_0xabddab['subscribers'] || 0x0, 0x0), _0x3976b0 = this['_validateNumber'](_0x13dd3d['subscribers'] || 0x0, 0x0);
                else
                    _0x38659b === 'views' && (_0x34362f = this['_validateNumber'](_0xabddab['views'] || 0x0, 0x0), _0x3976b0 = this['_validateNumber'](_0x13dd3d['views'] || 0x0, 0x0));
            }
            if (_0x3976b0 === 0x0 && _0x34362f === 0x0)
                return 0x0;
            if (_0x3976b0 === 0x0)
                return 0x64;
            return Math['round']((_0x34362f - _0x3976b0) / _0x3976b0 * 0x64);
        }
    ['updateCharts']() {
            this['drawUsageChart'](), this['drawPlatformChart']();
        }
    ['drawUsageChart']() {
            const _0xdb9d87 = document['getElementById']('usageChart');
            if (!_0xdb9d87)
                return;
            if (typeof Chart === 'undefined') {
                this['_logSecurityEvent']('CHART_LIB_UNAVAILABLE', {}), setTimeout(() => this['drawUsageChart'](), 0x64);
                return;
            }
            if (this['securityConfig']['ENABLE_SRI_VALIDATION']) {
                const _0x33f698 = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
                !this['_validateSRI'](_0x33f698, this['securityConfig']['CHART_JS_INTEGRITY']) && this['_logSecurityEvent']('CHART_INTEGRITY_CHECK_FAILED', {
                    'library': 'Chart.js'
                });
            }
            this['usageChartInstance'] && (this['usageChartInstance']['destroy'](), this['securityState']['chartInstances']--);
            if (this['securityState']['chartInstances'] >= this['securityConfig']['CHART_INSTANCE_LIMIT']) {
                this['_logSecurityEvent']('CHART_INSTANCE_LIMIT_EXCEEDED', {
                    'limit': this['securityConfig']['CHART_INSTANCE_LIMIT']
                });
                return;
            }
            let _0x21216c = [],
                _0x5cf4cf = [];
            if (this['analyticsData']['currentPeriod'] === 'day' && this['analyticsData']['dailyViews']?.['length'])
                _0x21216c = this['analyticsData']['dailyViews']['map'](_0x267e44 => this['_validateNumber'](_0x267e44['views'], 0x0)), _0x5cf4cf = this['analyticsData']['dailyViews']['map'](_0x4b0847 => this['_sanitizeString'](_0x4b0847['day'] || '-', 0x32));
            else
                this['analyticsData']['currentPeriod'] === 'month' && this['analyticsData']['monthlyViews']?.['length'] ? (_0x21216c = this['analyticsData']['monthlyViews']['map'](_0x37a00d => this['_validateNumber'](_0x37a00d['views'], 0x0)), _0x5cf4cf = this['analyticsData']['monthlyViews']['map'](_0x1ba816 => this['_sanitizeString'](_0x1ba816['month'] || '-', 0x32))) : (_0x21216c = (this['analyticsData']['weeklyViews'] || [])['map'](_0x5b6c96 => this['_validateNumber'](_0x5b6c96['views'], 0x0)), _0x5cf4cf = (this['analyticsData']['weeklyViews'] || [])['map'](_0x56d6cb => this['_sanitizeString'](_0x56d6cb['week'] || '-', 0x32)));
            !_0x21216c['length'] && (_0x21216c = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ], _0x5cf4cf = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ]);
            const _0x589a78 = _0xdb9d87['getContext']('2d'),
                _0x21f1f0 = _0x589a78['createLinearGradient'](0x0, 0x0, 0x0, 0x12c);
            _0x21f1f0['addColorStop'](0x0, 'rgba(255,\x20107,\x2053,\x200.3)'), _0x21f1f0['addColorStop'](0x1, 'rgba(255,\x20107,\x2053,\x200.01)');
            try {
                this['usageChartInstance'] = new Chart(_0x589a78, {
                    'type': 'line',
                    'data': {
                        'labels': _0x5cf4cf,
                        'datasets': [{
                            'label': 'Views',
                            'data': _0x21216c,
                            'backgroundColor': _0x21f1f0,
                            'borderColor': '#ff6b35',
                            'borderWidth': 0x2,
                            'tension': 0.4,
                            'fill': !![],
                            'pointBackgroundColor': '#ff6b35',
                            'pointBorderColor': '#fff',
                            'pointBorderWidth': 0x2,
                            'pointRadius': 0x4,
                            'pointHoverRadius': 0x6
                        }]
                    },
                    'options': {
                        'responsive': !![],
                        'maintainAspectRatio': ![],
                        'plugins': {
                            'legend': {
                                'display': !![],
                                'labels': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xc,
                                        'weight': '600'
                                    },
                                    'color': '#666',
                                    'padding': 0xf,
                                    'usePointStyle': !![],
                                    'pointStyle': 'circle'
                                }
                            },
                            'tooltip': {
                                'backgroundColor': 'rgba(0,\x200,\x200,\x200.8)',
                                'padding': 0xc,
                                'titleFont': {
                                    'family': 'Poppins,\x20sans-serif',
                                    'size': 0xd,
                                    'weight': 'bold'
                                },
                                'bodyFont': {
                                    'family': 'Poppins,\x20sans-serif',
                                    'size': 0xc
                                },
                                'borderColor': '#ff6b35',
                                'borderWidth': 0x1,
                                'displayColors': !![],
                                'callbacks': {
                                    'label': function(_0x27f5c0) {
                                        const _0x5585ee = _0x27f5c0['parsed']['y'];
                                        return 'Views:\x20' + _0x5585ee['toLocaleString']();
                                    }
                                }
                            }
                        },
                        'scales': {
                            'y': {
                                'beginAtZero': !![],
                                'grid': {
                                    'color': 'rgba(200,\x20200,\x20200,\x200.1)',
                                    'drawBorder': ![]
                                },
                                'ticks': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xb
                                    },
                                    'color': '#999',
                                    'callback': function(_0x39984a) {
                                        if (_0x39984a >= 0xf4240)
                                            return (_0x39984a / 0xf4240)['toFixed'](0x1) + 'M';
                                        if (_0x39984a >= 0x3e8)
                                            return (_0x39984a / 0x3e8)['toFixed'](0x1) + 'K';
                                        return _0x39984a;
                                    }
                                }
                            },
                            'x': {
                                'grid': {
                                    'display': ![]
                                },
                                'ticks': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xb
                                    },
                                    'color': '#999'
                                }
                            }
                        }
                    }
                }), this['securityState']['chartInstances']++;
            } catch (_0x391a0a) {
                this['_logSecurityEvent']('CHART_RENDERING_ERROR', {
                    'error': _0x391a0a instanceof Error ? _0x391a0a['message'] : 'Unknown\x20error'
                });
            }
        }
    ['drawPlatformChart']() {
            const _0xbcaf0a = document['getElementById']('platformChart');
            if (!_0xbcaf0a)
                return;
            if (typeof Chart === 'undefined') {
                this['_logSecurityEvent']('CHART_LIB_UNAVAILABLE', {}), setTimeout(() => this['drawPlatformChart'](), 0x64);
                return;
            }
            if (this['securityConfig']['ENABLE_SRI_VALIDATION']) {
                const _0x167adc = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
                !this['_validateSRI'](_0x167adc, this['securityConfig']['CHART_JS_INTEGRITY']) && this['_logSecurityEvent']('CHART_INTEGRITY_CHECK_FAILED', {
                    'library': 'Chart.js'
                });
            }
            this['platformChartInstance'] && (this['platformChartInstance']['destroy'](), this['securityState']['chartInstances']--);
            if (this['securityState']['chartInstances'] >= this['securityConfig']['CHART_INSTANCE_LIMIT']) {
                this['_logSecurityEvent']('CHART_INSTANCE_LIMIT_EXCEEDED', {
                    'limit': this['securityConfig']['CHART_INSTANCE_LIMIT']
                });
                return;
            }
            let _0x3353b3 = [],
                _0xb89806 = [],
                _0x2e3424 = [];
            if (this['analyticsData']['currentPeriod'] === 'day' && this['analyticsData']['dailyViews']?.['length'])
                _0xb89806 = this['analyticsData']['dailyViews']['map'](_0x485856 => this['_validateNumber'](_0x485856['views'], 0x0)), _0x3353b3 = this['analyticsData']['dailyViews']['map'](_0x2bedb2 => this['_sanitizeString'](_0x2bedb2['day'] || '-', 0x32)), _0x2e3424 = [];
            else {
                if (this['analyticsData']['currentPeriod'] === 'month' && this['analyticsData']['monthlyViews']?.['length'])
                    _0xb89806 = this['analyticsData']['monthlyViews']['map'](_0xdd42c4 => this['_validateNumber'](_0xdd42c4['views'], 0x0)), _0x3353b3 = this['analyticsData']['monthlyViews']['map'](_0x2a78e2 => this['_sanitizeString'](_0x2a78e2['month'] || '-', 0x32)), _0x2e3424 = [];
                else
                    this['analyticsData']['weeklyViews']?.['length'] ? (_0xb89806 = this['analyticsData']['weeklyViews']['map'](_0xa8d691 => this['_validateNumber'](_0xa8d691['views'], 0x0)), _0x3353b3 = this['analyticsData']['weeklyViews']['map'](_0x284d19 => this['_sanitizeString'](_0x284d19['week'] || '-', 0x32)), _0x2e3424 = []) : (_0xb89806 = [
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x3353b3 = [
                    'Week\x201',
                    'Week\x202',
                    'Week\x203',
                    'Week\x204'
                ], _0x2e3424 = [
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ]);
            }
            const _0x2a69c0 = _0xbcaf0a['getContext']('2d'),
                _0x169327 = _0x2a69c0['createLinearGradient'](0x0, 0x0, 0x0, 0x12c);
            _0x169327['addColorStop'](0x0, 'rgba(255,\x20107,\x2053,\x200.3)'), _0x169327['addColorStop'](0x1, 'rgba(255,\x20107,\x2053,\x200.01)');
            const _0x449b55 = _0x2a69c0['createLinearGradient'](0x0, 0x0, 0x0, 0x12c);
            _0x449b55['addColorStop'](0x0, 'rgba(79,\x2070,\x20229,\x200.3)'), _0x449b55['addColorStop'](0x1, 'rgba(79,\x2070,\x20229,\x200.01)');
            try {
                this['platformChartInstance'] = new Chart(_0x2a69c0, {
                    'type': 'line',
                    'data': {
                        'labels': _0x3353b3,
                        'datasets': [
                            {
                                'label': 'YouTube\x20Views',
                                'data': _0xb89806,
                                'backgroundColor': _0x169327,
                                'borderColor': '#ff6b35',
                                'borderWidth': 0x2,
                                'tension': 0.4,
                                'fill': !![],
                                'pointBackgroundColor': '#ff6b35',
                                'pointBorderColor': '#fff',
                                'pointBorderWidth': 0x2,
                                'pointRadius': 0x4,
                                'pointHoverRadius': 0x6
                        },
                            {
                                'label': 'TikTok\x20Views',
                                'data': _0x2e3424,
                                'backgroundColor': _0x449b55,
                                'borderColor': '#4f46e5',
                                'borderWidth': 0x2,
                                'tension': 0.4,
                                'fill': !![],
                                'pointBackgroundColor': '#4f46e5',
                                'pointBorderColor': '#fff',
                                'pointBorderWidth': 0x2,
                                'pointRadius': 0x4,
                                'pointHoverRadius': 0x6
                        }
                    ]
                    },
                    'options': {
                        'responsive': !![],
                        'maintainAspectRatio': ![],
                        'interaction': {
                            'mode': 'index',
                            'intersect': ![]
                        },
                        'plugins': {
                            'legend': {
                                'display': !![],
                                'labels': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xc,
                                        'weight': '600'
                                    },
                                    'color': '#666',
                                    'padding': 0xf,
                                    'usePointStyle': !![],
                                    'pointStyle': 'circle'
                                }
                            },
                            'tooltip': {
                                'backgroundColor': 'rgba(0,\x200,\x200,\x200.8)',
                                'padding': 0xc,
                                'titleFont': {
                                    'family': 'Poppins,\x20sans-serif',
                                    'size': 0xd,
                                    'weight': 'bold'
                                },
                                'bodyFont': {
                                    'family': 'Poppins,\x20sans-serif',
                                    'size': 0xc
                                },
                                'borderColor': '#ff6b35',
                                'borderWidth': 0x1
                            }
                        },
                        'scales': {
                            'y': {
                                'beginAtZero': !![],
                                'grid': {
                                    'color': 'rgba(0,\x200,\x200,\x200.05)'
                                },
                                'ticks': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xb
                                    },
                                    'color': '#999',
                                    'callback': function(_0x233f85) {
                                        if (_0x233f85 >= 0xf4240)
                                            return (_0x233f85 / 0xf4240)['toFixed'](0x1) + 'M';
                                        if (_0x233f85 >= 0x3e8)
                                            return (_0x233f85 / 0x3e8)['toFixed'](0x1) + 'K';
                                        return _0x233f85;
                                    }
                                }
                            },
                            'x': {
                                'grid': {
                                    'display': ![]
                                },
                                'ticks': {
                                    'font': {
                                        'family': 'Poppins,\x20sans-serif',
                                        'size': 0xb
                                    },
                                    'color': '#999'
                                }
                            }
                        }
                    }
                }), this['securityState']['chartInstances']++;
            } catch (_0x400f95) {
                this['_logSecurityEvent']('CHART_RENDERING_ERROR', {
                    'error': _0x400f95 instanceof Error ? _0x400f95['message'] : 'Unknown\x20error'
                });
            }
        }
    ['formatNumber'](_0x2c8222) {
            if (_0x2c8222 >= 0xf4240)
                return (_0x2c8222 / 0xf4240)['toFixed'](0x1) + 'M';
            else {
                if (_0x2c8222 >= 0x3e8)
                    return (_0x2c8222 / 0x3e8)['toFixed'](0x1) + 'K';
            }
            return _0x2c8222['toString']();
        }
}
document['addEventListener']('DOMContentLoaded', () => {
    window['analyticsManager'] = new _0x1d72a4();
});
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', () => {
    !window['analyticsManager'] && (window['analyticsManager'] = new _0x1d72a4());
}) : !window['analyticsManager'] && (window['analyticsManager'] = new _0x1d72a4());