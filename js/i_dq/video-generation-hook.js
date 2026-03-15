(function() {
    'use strict';
    const _0x2f1f4d = {
            'MAX_TITLE_LENGTH': 0x100,
            'MAX_MESSAGE_LENGTH': 0x200,
            'MAX_URL_LENGTH': 0x800,
            'ALLOWED_PROTOCOLS': [
                'http:',
                'https:'
            ],
            'TRUSTED_ORIGINS': [window['location']['origin']],
            'RATE_LIMIT_ENABLED': !![],
            'RATE_LIMIT_CALLS': 0xa,
            'RATE_LIMIT_WINDOW': 0xea60,
            'REQUIRE_CSRF_TOKEN': !![],
            'CSRF_HEADER': 'X-CSRF-Token',
            'REQUIRE_SIGNATURE': ![],
            'SIGNATURE_ALGORITHM': 'SHA-256',
            'CSP_NONCE_ENABLED': !![],
            'SECURITY_LOG_ENABLED': !![],
            'MAX_LOG_ENTRIES': 0x64,
            'ALLOWED_CALLERS': ['internal'],
            'ENABLE_SRI_CHECK': !![]
        },
        _0x2c019e = {
            'entries': [],
            'log': function(_0x14dd78, _0x245380 = {}) {
                if (!_0x2f1f4d['SECURITY_LOG_ENABLED'])
                    return;
                const _0x63c4be = {
                    'timestamp': new Date()['toISOString'](),
                    'type': _0x14dd78,
                    'details': _0x245380,
                    'userAgent': navigator['userAgent'],
                    'url': window['location']['href']
                };
                this['entries']['push'](_0x63c4be), this['entries']['length'] > _0x2f1f4d['MAX_LOG_ENTRIES'] && this['entries']['shift'](), (window['location']['hostname'] === 'localhost' || window['location']['hostname'] === '127.0.0.1') && console['log']('[VideoHook\x20Security]\x20' + _0x14dd78 + ':', _0x245380);
            },
            'getEntries': function() {
                return this['entries']['slice']();
            }
        },
        _0x2dd703 = {
            'calls': [],
            'isAllowed': function() {
                if (!_0x2f1f4d['RATE_LIMIT_ENABLED'])
                    return !![];
                const _0x3cf83c = Date['now'](),
                    _0x5c1020 = _0x3cf83c - _0x2f1f4d['RATE_LIMIT_WINDOW'];
                this['calls'] = this['calls']['filter'](_0x1830be => _0x1830be > _0x5c1020);
                if (this['calls']['length'] >= _0x2f1f4d['RATE_LIMIT_CALLS'])
                    return _0x2c019e['log']('RATE_LIMIT_EXCEEDED', {
                        'calls': this['calls']['length'],
                        'limit': _0x2f1f4d['RATE_LIMIT_CALLS'],
                        'window': _0x2f1f4d['RATE_LIMIT_WINDOW']
                    }), ![];
                return this['calls']['push'](_0x3cf83c), !![];
            }
        },
        _0x29c6df = {
            '_getTokenFromMeta': function() {
                const _0x36b5bb = document['querySelector']('meta[name=\x22csrf-token\x22]');
                return _0x36b5bb ? _0x36b5bb['getAttribute']('content') : null;
            },
            '_getTokenFromHeader': function() {
                return document['querySelector']('meta[name=\x22csrf-token\x22]')?.['getAttribute']('content') || null;
            },
            'validate': function(_0x2b9b0f) {
                if (!_0x2f1f4d['REQUIRE_CSRF_TOKEN'])
                    return !![];
                const _0x284b66 = this['_getTokenFromMeta']();
                if (!_0x2b9b0f || !_0x284b66)
                    return _0x2c019e['log']('CSRF_VALIDATION_FAILED', {
                        'tokenPresent': !!_0x2b9b0f,
                        'expectedTokenPresent': !!_0x284b66,
                        'reason': 'Missing\x20token(s)'
                    }), ![];
                const _0x297ec7 = this['_constantTimeCompare'](_0x2b9b0f, _0x284b66);
                if (!_0x297ec7)
                    return _0x2c019e['log']('CSRF_VALIDATION_FAILED', {
                        'reason': 'Token\x20mismatch',
                        'severity': 'HIGH'
                    }), ![];
                return _0x2c019e['log']('CSRF_VALIDATION_SUCCESS', {}), !![];
            },
            '_constantTimeCompare': function(_0x290b4f, _0x241b28) {
                if (_0x290b4f['length'] !== _0x241b28['length'])
                    return ![];
                let _0x1c0709 = 0x0;
                for (let _0x4cd99e = 0x0; _0x4cd99e < _0x290b4f['length']; _0x4cd99e++) {
                    _0x1c0709 |= _0x290b4f['charCodeAt'](_0x4cd99e) ^ _0x241b28['charCodeAt'](_0x4cd99e);
                }
                return _0x1c0709 === 0x0;
            }
        },
        _0x3758e9 = {
            'verify': async function(_0x2d2a82, _0x1197a5, _0x572e92 = null) {
                if (!_0x2f1f4d['REQUIRE_SIGNATURE'])
                    return !![];
                try {
                    if (!window['crypto'] || !window['crypto']['subtle'])
                        return _0x2c019e['log']('CRYPTO_UNAVAILABLE', {
                            'severity': 'HIGH'
                        }), ![];
                    return _0x2c019e['log']('SIGNATURE_VALIDATION_ATTEMPT', {
                        'algorithm': _0x2f1f4d['SIGNATURE_ALGORITHM']
                    }), !![];
                } catch (_0x118fb5) {
                    return _0x2c019e['log']('SIGNATURE_VALIDATION_ERROR', {
                        'error': _0x118fb5['message'],
                        'severity': 'HIGH'
                    }), ![];
                }
            }
        },
        _0x57393e = {
            'getNonce': function() {
                const _0x122fec = document['querySelectorAll']('script[nonce]');
                if (_0x122fec['length'] > 0x0)
                    return _0x122fec[0x0]['getAttribute']('nonce');
                return null;
            },
            'validateNonce': function(_0x346a83) {
                const _0x11391f = this['getNonce']();
                if (!_0x11391f)
                    return !![];
                return _0x346a83 === _0x11391f;
            }
        },
        _0x481364 = {
            'getCallerContext': function() {
                try {
                    const _0x3ad4a1 = new Error()['stack'];
                    return _0x3ad4a1 ? 'internal' : 'external';
                } catch {
                    return 'unknown';
                }
            },
            'isCallerAllowed': function() {
                if (!Array['isArray'](_0x2f1f4d['ALLOWED_CALLERS']))
                    return !![];
                const _0x2db0f8 = this['getCallerContext'](),
                    _0x420ff7 = _0x2f1f4d['ALLOWED_CALLERS']['includes'](_0x2db0f8) || _0x2f1f4d['ALLOWED_CALLERS']['includes']('*');
                return !_0x420ff7 && _0x2c019e['log']('UNAUTHORIZED_CALLER_ATTEMPT', {
                    'caller': _0x2db0f8,
                    'allowed': _0x2f1f4d['ALLOWED_CALLERS']
                }), _0x420ff7;
            }
        };

    function _0x485fed(_0x4ba83d) {
        if (typeof _0x4ba83d !== 'string')
            return '';
        const _0x5609ae = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '\x22': '&quot;',
            '\x27': '&#39;'
        };
        return _0x4ba83d['replace'](/[&<>"']/g, _0x225565 => _0x5609ae[_0x225565]);
    }

    function _0x1241b0(_0x9f4681, _0x29d70e = 'html') {
        if (typeof _0x9f4681 !== 'string')
            return '';
        switch (_0x29d70e) {
            case 'html':
                return _0x485fed(_0x9f4681);
            case 'uri':
                return encodeURIComponent(_0x9f4681);
            case 'attr':
                return _0x9f4681['replace'](/[&<>"']/g, _0x2ed60b => {
                    const _0x1fc366 = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '\x22': '&quot;',
                        '\x27': '&#39;'
                    };
                    return _0x1fc366[_0x2ed60b];
                });
            case 'javascript':
                if (/javascript:/i ['test'](_0x9f4681))
                    return '';
                return _0x485fed(_0x9f4681);
            default:
                return _0x485fed(_0x9f4681);
        }
    }

    function _0x552836(_0x1f52b0) {
        try {
            const _0x8d70f1 = new URL(_0x1f52b0, window['location']['origin']);
            return _0x2f1f4d['ALLOWED_PROTOCOLS']['includes'](_0x8d70f1['protocol']) && _0x1f52b0['length'] <= _0x2f1f4d['MAX_URL_LENGTH'];
        } catch {
            return ![];
        }
    }

    function _0x5bc884(_0x500432, _0x33a144 = null) {
        if (!_0x2dd703['isAllowed']())
            return _0x2c019e['log']('VALIDATION_REJECTED_RATE_LIMIT', {}), null;
        if (!_0x481364['isCallerAllowed']())
            return _0x2c019e['log']('VALIDATION_REJECTED_UNAUTHORIZED_CALLER', {}), null;
        if (_0x2f1f4d['REQUIRE_CSRF_TOKEN'] && !_0x29c6df['validate'](_0x33a144))
            return _0x2c019e['log']('VALIDATION_REJECTED_CSRF', {}), null;
        if (!_0x500432 || typeof _0x500432 !== 'object')
            return _0x2c019e['log']('VALIDATION_REJECTED_INVALID_TYPE', {
                'type': typeof _0x500432
            }), null;
        const _0x53f632 = {};
        if (_0x500432['title'] && typeof _0x500432['title'] === 'string') {
            const _0x11c5f7 = _0x1241b0(_0x500432['title'], 'html')['slice'](0x0, _0x2f1f4d['MAX_TITLE_LENGTH']);
            _0x53f632['title'] = _0x11c5f7 || 'Video\x20Generated';
        } else
            _0x53f632['title'] = 'Video\x20Generated';
        if (_0x500432['url'] && typeof _0x500432['url'] === 'string') {
            const _0x596a3b = _0x500432['url']['trim']();
            _0x53f632['url'] = _0x552836(_0x596a3b) ? _0x596a3b : '#';
        } else
            _0x53f632['url'] = '#';
        if (_0x500432['thumbnail'] && typeof _0x500432['thumbnail'] === 'string') {
            const _0xc144e6 = _0x500432['thumbnail']['trim']();
            _0x552836(_0xc144e6) && (!_0x2f1f4d['ENABLE_SRI_CHECK'] || _0x3146fe(_0xc144e6)) ? _0x53f632['thumbnail'] = _0xc144e6 : _0x53f632['thumbnail'] = null;
        } else
            _0x53f632['thumbnail'] = null;
        typeof _0x500432['duration'] === 'number' && _0x500432['duration'] >= 0x0 && _0x500432['duration'] <= 0x36ee80 ? _0x53f632['duration'] = Math['floor'](_0x500432['duration']) : _0x53f632['duration'] = 0x0;
        if (_0x500432['message'] && typeof _0x500432['message'] === 'string') {
            const _0x8781b0 = _0x1241b0(_0x500432['message'], 'html')['slice'](0x0, _0x2f1f4d['MAX_MESSAGE_LENGTH']);
            _0x53f632['message'] = _0x8781b0 || 'Your\x20video\x20is\x20ready\x20to\x20download';
        } else
            _0x53f632['message'] = 'Your\x20video\x20is\x20ready\x20to\x20download';
        return _0x2c019e['log']('VALIDATION_SUCCESS', {
            'title': _0x53f632['title']['slice'](0x0, 0x32) + '...',
            'urlSet': !!_0x53f632['url'],
            'messageSet': !!_0x53f632['message']
        }), _0x53f632;
    }

    function _0x3146fe(_0x2b1a74) {
        if (!_0x2f1f4d['ENABLE_SRI_CHECK'])
            return !![];
        return !![];
    }

    function _0x3e6e5b(_0x4a9f6f) {
        return _0x4a9f6f['isTrusted'] === !![] || _0x4a9f6f instanceof CustomEvent;
    }
    const _0x117661 = {
        '_sendNotification': function(_0xcbdb7d) {
            try {
                const _0x1fdc15 = _0x5bc884(_0xcbdb7d);
                if (!_0x1fdc15)
                    return ![];
                if (typeof window !== 'object' || !window['notificationSystem'])
                    return _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['warn']('[VideoHook]\x20Notification\x20system\x20unavailable'), ![];
                if (typeof window['notificationSystem']['showVideoGenerated'] !== 'function')
                    return _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['warn']('[VideoHook]\x20Invalid\x20notification\x20system'), ![];
                return window['notificationSystem']['showVideoGenerated']({
                    'videoTitle': _0x1fdc15['title'],
                    'videoUrl': _0x1fdc15['url'],
                    'thumbnailUrl': _0x1fdc15['thumbnail'],
                    'duration': _0x1fdc15['duration'],
                    'message': _0x1fdc15['message']
                }), !![];
            } catch (_0x384540) {
                return _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['error']('[VideoHook]\x20Error\x20sending\x20notification:', _0x384540['message']), ![];
            }
        },
        'onVideoGenerated': function(_0x144053) {
            return this['_sendNotification'](_0x144053);
        },
        'showNotification': function(_0x3de57d) {
            return _0x117661['_sendNotification'](_0x3de57d);
        }
    };
    document['addEventListener']('videoGenerated', function(_0xab5c38) {
        try {
            if (!_0x3e6e5b(_0xab5c38)) {
                _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['warn']('[VideoHook]\x20Untrusted\x20event\x20source');
                return;
            }
            const _0x66239d = _0xab5c38['detail'] || {};
            _0x117661['onVideoGenerated'](_0x66239d);
        } catch (_0x3061c3) {
            _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['error']('[VideoHook]\x20Event\x20listener\x20error:', _0x3061c3['message']);
        }
    }, ![]), window['showVideoReadyNotification'] = function(_0x3e1bc3) {
        try {
            return _0x117661['showNotification'](_0x3e1bc3 || {});
        } catch (_0x18eaff) {
            return _0x2f1f4d['SECURITY_LOG_ENABLED'] && console['error']('[VideoHook]\x20showVideoReadyNotification\x20error:', _0x18eaff['message']), ![];
        }
    }, window['triggerVideoNotification'] = window['showVideoReadyNotification'], typeof Object['freeze'] === 'function' && (Object['freeze'](window['showVideoReadyNotification']), Object['freeze'](window['triggerVideoNotification']));
}());