(function (_0x5ae1c2, _0x65658e) {
    const _0x1c49ab = _0x50ce, _0x14b1c6 = _0x5ae1c2();
    while (!![]) {
        try {
            const _0x31c03c = parseInt(_0x1c49ab(0x11e)) / 0x1 + -parseInt(_0x1c49ab(0x120)) / 0x2 * (-parseInt(_0x1c49ab(0x122)) / 0x3) + -parseInt(_0x1c49ab(0x110)) / 0x4 * (parseInt(_0x1c49ab(0x114)) / 0x5) + parseInt(_0x1c49ab(0x105)) / 0x6 + -parseInt(_0x1c49ab(0x11c)) / 0x7 + parseInt(_0x1c49ab(0xc0)) / 0x8 * (parseInt(_0x1c49ab(0x11f)) / 0x9) + parseInt(_0x1c49ab(0xc5)) / 0xa * (-parseInt(_0x1c49ab(0x117)) / 0xb);
            if (_0x31c03c === _0x65658e)
                break;
            else
                _0x14b1c6['push'](_0x14b1c6['shift']());
        } catch (_0x1e4480) {
            _0x14b1c6['push'](_0x14b1c6['shift']());
        }
    }
}(_0x46f2, 0x1dba0), (function () {
    'use strict';
    const _0x4d1ce5 = _0x50ce;
    const _0x1a0524 = {
            'MAX_TITLE_LENGTH': 0x100,
            'MAX_MESSAGE_LENGTH': 0x200,
            'MAX_URL_LENGTH': 0x800,
            'ALLOWED_PROTOCOLS': [
                _0x4d1ce5(0xfd),
                'https:'
            ],
            'TRUSTED_ORIGINS': [window['location']['origin']],
            'RATE_LIMIT_ENABLED': !![],
            'RATE_LIMIT_CALLS': 0xa,
            'RATE_LIMIT_WINDOW': 0xea60,
            'REQUIRE_CSRF_TOKEN': !![],
            'CSRF_HEADER': _0x4d1ce5(0xc3),
            'REQUIRE_SIGNATURE': ![],
            'SIGNATURE_ALGORITHM': _0x4d1ce5(0x100),
            'CSP_NONCE_ENABLED': !![],
            'SECURITY_LOG_ENABLED': !![],
            'MAX_LOG_ENTRIES': 0x64,
            'ALLOWED_CALLERS': ['internal'],
            'ENABLE_SRI_CHECK': !![]
        }, _0x781194 = {
            'entries': [],
            'log': function (_0x5a5e83, _0x4f8066 = {}) {
                const _0x4d58db = _0x4d1ce5;
                if (!_0x1a0524['SECURITY_LOG_ENABLED'])
                    return;
                const _0x49106e = {
                    'timestamp': new Date()[_0x4d58db(0xd5)](),
                    'type': _0x5a5e83,
                    'details': _0x4f8066,
                    'userAgent': navigator[_0x4d58db(0xb8)],
                    'url': window['location'][_0x4d58db(0xc1)]
                };
                this[_0x4d58db(0xd9)][_0x4d58db(0xd0)](_0x49106e), this['entries'][_0x4d58db(0x10a)] > _0x1a0524[_0x4d58db(0x106)] && this[_0x4d58db(0xd9)][_0x4d58db(0xe5)](), (window['location'][_0x4d58db(0xc7)] === _0x4d58db(0x101) || window['location'][_0x4d58db(0xc7)] === _0x4d58db(0xe8)) && console[_0x4d58db(0xe3)](_0x4d58db(0xc9) + _0x5a5e83 + ':', _0x4f8066);
            },
            'getEntries': function () {
                const _0x45184a = _0x4d1ce5;
                return this[_0x45184a(0xd9)][_0x45184a(0xfa)]();
            }
        }, _0x5aa0d3 = {
            'calls': [],
            'isAllowed': function () {
                const _0x1d8824 = _0x4d1ce5;
                if (!_0x1a0524[_0x1d8824(0xe7)])
                    return !![];
                const _0x409cc6 = Date[_0x1d8824(0xca)](), _0x35db74 = _0x409cc6 - _0x1a0524[_0x1d8824(0xd1)];
                this['calls'] = this[_0x1d8824(0x104)][_0x1d8824(0xcf)](_0x1369ea => _0x1369ea > _0x35db74);
                if (this[_0x1d8824(0x104)][_0x1d8824(0x10a)] >= _0x1a0524[_0x1d8824(0xd7)])
                    return _0x781194[_0x1d8824(0xe3)]('RATE_LIMIT_EXCEEDED', {
                        'calls': this['calls'][_0x1d8824(0x10a)],
                        'limit': _0x1a0524[_0x1d8824(0xd7)],
                        'window': _0x1a0524['RATE_LIMIT_WINDOW']
                    }), ![];
                return this['calls'][_0x1d8824(0xd0)](_0x409cc6), !![];
            }
        }, _0x225522 = {
            '_getTokenFromMeta': function () {
                const _0x573904 = _0x4d1ce5, _0x49a00a = document[_0x573904(0xef)](_0x573904(0xce));
                return _0x49a00a ? _0x49a00a['getAttribute'](_0x573904(0xde)) : null;
            },
            '_getTokenFromHeader': function () {
                const _0x817bc2 = _0x4d1ce5;
                return document[_0x817bc2(0xef)](_0x817bc2(0xce))?.[_0x817bc2(0xf3)](_0x817bc2(0xde)) || null;
            },
            'validate': function (_0x1b208a) {
                const _0x3f9f7f = _0x4d1ce5;
                if (!_0x1a0524['REQUIRE_CSRF_TOKEN'])
                    return !![];
                const _0x5dd0e4 = this['_getTokenFromMeta']();
                if (!_0x1b208a || !_0x5dd0e4)
                    return _0x781194['log']('CSRF_VALIDATION_FAILED', {
                        'tokenPresent': !!_0x1b208a,
                        'expectedTokenPresent': !!_0x5dd0e4,
                        'reason': 'Missing\x20token(s)'
                    }), ![];
                const _0x4309cf = this['_constantTimeCompare'](_0x1b208a, _0x5dd0e4);
                if (!_0x4309cf)
                    return _0x781194[_0x3f9f7f(0xe3)](_0x3f9f7f(0xb9), {
                        'reason': _0x3f9f7f(0xbd),
                        'severity': _0x3f9f7f(0x102)
                    }), ![];
                return _0x781194['log'](_0x3f9f7f(0xc8), {}), !![];
            },
            '_constantTimeCompare': function (_0x31de2b, _0x3112db) {
                const _0x154dd8 = _0x4d1ce5;
                if (_0x31de2b[_0x154dd8(0x10a)] !== _0x3112db[_0x154dd8(0x10a)])
                    return ![];
                let _0x2d6837 = 0x0;
                for (let _0xd8df93 = 0x0; _0xd8df93 < _0x31de2b[_0x154dd8(0x10a)]; _0xd8df93++) {
                    _0x2d6837 |= _0x31de2b['charCodeAt'](_0xd8df93) ^ _0x3112db[_0x154dd8(0x10c)](_0xd8df93);
                }
                return _0x2d6837 === 0x0;
            }
        }, _0x37d11f = {
            'verify': async function (_0x4dce9f, _0x559027, _0x180b8b = null) {
                const _0x517eac = _0x4d1ce5;
                if (!_0x1a0524[_0x517eac(0xda)])
                    return !![];
                try {
                    if (!window[_0x517eac(0xf2)] || !window['crypto'][_0x517eac(0xe0)])
                        return _0x781194[_0x517eac(0xe3)](_0x517eac(0xeb), { 'severity': _0x517eac(0x102) }), ![];
                    return _0x781194[_0x517eac(0xe3)](_0x517eac(0xcb), { 'algorithm': _0x1a0524[_0x517eac(0x121)] }), !![];
                } catch (_0x1bf103) {
                    return _0x781194['log'](_0x517eac(0xf0), {
                        'error': _0x1bf103['message'],
                        'severity': _0x517eac(0x102)
                    }), ![];
                }
            }
        }, _0x13d702 = {
            'getNonce': function () {
                const _0x3cc28e = _0x4d1ce5, _0x15a3cf = document[_0x3cc28e(0xb7)]('script[nonce]');
                if (_0x15a3cf[_0x3cc28e(0x10a)] > 0x0)
                    return _0x15a3cf[0x0][_0x3cc28e(0xf3)](_0x3cc28e(0xd6));
                return null;
            },
            'validateNonce': function (_0x5553e3) {
                const _0x51e51d = this['getNonce']();
                if (!_0x51e51d)
                    return !![];
                return _0x5553e3 === _0x51e51d;
            }
        }, _0x37c4a5 = {
            'getCallerContext': function () {
                const _0x2f37a1 = _0x4d1ce5;
                try {
                    const _0x463994 = new Error()[_0x2f37a1(0xf4)];
                    return _0x463994 ? _0x2f37a1(0xbe) : _0x2f37a1(0xed);
                } catch {
                    return _0x2f37a1(0xf1);
                }
            },
            'isCallerAllowed': function () {
                const _0x2cc71f = _0x4d1ce5;
                if (!Array[_0x2cc71f(0xea)](_0x1a0524[_0x2cc71f(0xc2)]))
                    return !![];
                const _0x581683 = this[_0x2cc71f(0xc6)](), _0x12f19f = _0x1a0524['ALLOWED_CALLERS']['includes'](_0x581683) || _0x1a0524[_0x2cc71f(0xc2)][_0x2cc71f(0xfb)]('*');
                return !_0x12f19f && _0x781194[_0x2cc71f(0xe3)](_0x2cc71f(0xe6), {
                    'caller': _0x581683,
                    'allowed': _0x1a0524[_0x2cc71f(0xc2)]
                }), _0x12f19f;
            }
        };
    function _0x477353(_0x105b33) {
        const _0x5dabcd = _0x4d1ce5;
        if (typeof _0x105b33 !== _0x5dabcd(0xd8))
            return '';
        const _0x58153b = {
            '&': _0x5dabcd(0x10e),
            '<': '&lt;',
            '>': _0x5dabcd(0xee),
            '\x22': _0x5dabcd(0x11d),
            '\x27': '&#39;'
        };
        return _0x105b33[_0x5dabcd(0x119)](/[&<>"']/g, _0x2637d0 => _0x58153b[_0x2637d0]);
    }
    function _0x4e25c5(_0x53c1f9, _0x2d6559 = _0x4d1ce5(0x118)) {
        const _0x22407e = _0x4d1ce5;
        if (typeof _0x53c1f9 !== _0x22407e(0xd8))
            return '';
        switch (_0x2d6559) {
        case 'html':
            return _0x477353(_0x53c1f9);
        case 'uri':
            return encodeURIComponent(_0x53c1f9);
        case _0x22407e(0xcc):
            return _0x53c1f9[_0x22407e(0x119)](/[&<>"']/g, _0x32a111 => {
                const _0x164967 = _0x22407e, _0x51284f = {
                        '&': _0x164967(0x10e),
                        '<': _0x164967(0xf7),
                        '>': '&gt;',
                        '\x22': _0x164967(0x11d),
                        '\x27': _0x164967(0xf5)
                    };
                return _0x51284f[_0x32a111];
            });
        case 'javascript':
            if (/javascript:/i[_0x22407e(0xba)](_0x53c1f9))
                return '';
            return _0x477353(_0x53c1f9);
        default:
            return _0x477353(_0x53c1f9);
        }
    }
    function _0x4d6d08(_0x10ad86) {
        const _0x355290 = _0x4d1ce5;
        try {
            const _0x5928c5 = new URL(_0x10ad86, window[_0x355290(0x11b)][_0x355290(0xc4)]);
            return _0x1a0524['ALLOWED_PROTOCOLS']['includes'](_0x5928c5['protocol']) && _0x10ad86[_0x355290(0x10a)] <= _0x1a0524[_0x355290(0x103)];
        } catch {
            return ![];
        }
    }
    function _0x56e851(_0x306072, _0x11634f = null) {
        const _0x5dc6de = _0x4d1ce5;
        if (!_0x5aa0d3[_0x5dc6de(0x113)]())
            return _0x781194[_0x5dc6de(0xe3)]('VALIDATION_REJECTED_RATE_LIMIT', {}), null;
        if (!_0x37c4a5[_0x5dc6de(0xf6)]())
            return _0x781194['log']('VALIDATION_REJECTED_UNAUTHORIZED_CALLER', {}), null;
        if (_0x1a0524[_0x5dc6de(0xb5)] && !_0x225522[_0x5dc6de(0xd3)](_0x11634f))
            return _0x781194[_0x5dc6de(0xe3)]('VALIDATION_REJECTED_CSRF', {}), null;
        if (!_0x306072 || typeof _0x306072 !== 'object')
            return _0x781194[_0x5dc6de(0xe3)](_0x5dc6de(0xb6), { 'type': typeof _0x306072 }), null;
        const _0x5f02b8 = {};
        if (_0x306072[_0x5dc6de(0xff)] && typeof _0x306072[_0x5dc6de(0xff)] === _0x5dc6de(0xd8)) {
            const _0x292bea = _0x4e25c5(_0x306072[_0x5dc6de(0xff)], _0x5dc6de(0x118))['slice'](0x0, _0x1a0524[_0x5dc6de(0x11a)]);
            _0x5f02b8[_0x5dc6de(0xff)] = _0x292bea || _0x5dc6de(0xf8);
        } else
            _0x5f02b8[_0x5dc6de(0xff)] = _0x5dc6de(0xf8);
        if (_0x306072[_0x5dc6de(0x112)] && typeof _0x306072[_0x5dc6de(0x112)] === 'string') {
            const _0x5abe7e = _0x306072[_0x5dc6de(0x112)][_0x5dc6de(0xbc)]();
            _0x5f02b8['url'] = _0x4d6d08(_0x5abe7e) ? _0x5abe7e : '#';
        } else
            _0x5f02b8[_0x5dc6de(0x112)] = '#';
        if (_0x306072[_0x5dc6de(0x115)] && typeof _0x306072[_0x5dc6de(0x115)] === _0x5dc6de(0xd8)) {
            const _0x28bce2 = _0x306072['thumbnail'][_0x5dc6de(0xbc)]();
            _0x4d6d08(_0x28bce2) && (!_0x1a0524[_0x5dc6de(0xcd)] || _0x402e89(_0x28bce2)) ? _0x5f02b8['thumbnail'] = _0x28bce2 : _0x5f02b8[_0x5dc6de(0x115)] = null;
        } else
            _0x5f02b8['thumbnail'] = null;
        typeof _0x306072['duration'] === _0x5dc6de(0xfc) && _0x306072[_0x5dc6de(0xe4)] >= 0x0 && _0x306072[_0x5dc6de(0xe4)] <= 0x36ee80 ? _0x5f02b8[_0x5dc6de(0xe4)] = Math[_0x5dc6de(0xd4)](_0x306072[_0x5dc6de(0xe4)]) : _0x5f02b8[_0x5dc6de(0xe4)] = 0x0;
        if (_0x306072['message'] && typeof _0x306072[_0x5dc6de(0xdd)] === _0x5dc6de(0xd8)) {
            const _0x4a3b74 = _0x4e25c5(_0x306072[_0x5dc6de(0xdd)], _0x5dc6de(0x118))[_0x5dc6de(0xfa)](0x0, _0x1a0524[_0x5dc6de(0x10f)]);
            _0x5f02b8[_0x5dc6de(0xdd)] = _0x4a3b74 || _0x5dc6de(0x108);
        } else
            _0x5f02b8[_0x5dc6de(0xdd)] = _0x5dc6de(0x108);
        return _0x781194['log']('VALIDATION_SUCCESS', {
            'title': _0x5f02b8['title'][_0x5dc6de(0xfa)](0x0, 0x32) + _0x5dc6de(0x116),
            'urlSet': !!_0x5f02b8['url'],
            'messageSet': !!_0x5f02b8[_0x5dc6de(0xdd)]
        }), _0x5f02b8;
    }
    function _0x402e89(_0x1f85dc) {
        const _0x2365f3 = _0x4d1ce5;
        if (!_0x1a0524[_0x2365f3(0xcd)])
            return !![];
        return !![];
    }
    function _0x15aefb(_0x1baa40) {
        const _0x4a541e = _0x4d1ce5;
        return _0x1baa40[_0x4a541e(0xbb)] === !![] || _0x1baa40 instanceof CustomEvent;
    }
    const _0x3a02c9 = {
        '_sendNotification': function (_0x54acdb) {
            const _0x4fbbc4 = _0x4d1ce5;
            try {
                const _0x427e12 = _0x56e851(_0x54acdb);
                if (!_0x427e12)
                    return ![];
                if (typeof window !== _0x4fbbc4(0xe2) || !window[_0x4fbbc4(0x10b)])
                    return _0x1a0524['SECURITY_LOG_ENABLED'] && console['warn']('[VideoHook]\x20Notification\x20system\x20unavailable'), ![];
                if (typeof window['notificationSystem'][_0x4fbbc4(0xdc)] !== 'function')
                    return _0x1a0524[_0x4fbbc4(0xdf)] && console[_0x4fbbc4(0xec)]('[VideoHook]\x20Invalid\x20notification\x20system'), ![];
                return window[_0x4fbbc4(0x10b)][_0x4fbbc4(0xdc)]({
                    'videoTitle': _0x427e12['title'],
                    'videoUrl': _0x427e12[_0x4fbbc4(0x112)],
                    'thumbnailUrl': _0x427e12[_0x4fbbc4(0x115)],
                    'duration': _0x427e12[_0x4fbbc4(0xe4)],
                    'message': _0x427e12['message']
                }), !![];
            } catch (_0x2ef3df) {
                return _0x1a0524[_0x4fbbc4(0xdf)] && console[_0x4fbbc4(0xf9)](_0x4fbbc4(0xe9), _0x2ef3df['message']), ![];
            }
        },
        'onVideoGenerated': function (_0x1193f0) {
            return this['_sendNotification'](_0x1193f0);
        },
        'showNotification': function (_0x105e3d) {
            const _0x52fb80 = _0x4d1ce5;
            return _0x3a02c9[_0x52fb80(0x109)](_0x105e3d);
        }
    };
    document['addEventListener'](_0x4d1ce5(0xd2), function (_0x2f5c84) {
        const _0x2c6aed = _0x4d1ce5;
        try {
            if (!_0x15aefb(_0x2f5c84)) {
                _0x1a0524['SECURITY_LOG_ENABLED'] && console[_0x2c6aed(0xec)]('[VideoHook]\x20Untrusted\x20event\x20source');
                return;
            }
            const _0xdb79ad = _0x2f5c84['detail'] || {};
            _0x3a02c9[_0x2c6aed(0xe1)](_0xdb79ad);
        } catch (_0x4cba83) {
            _0x1a0524[_0x2c6aed(0xdf)] && console[_0x2c6aed(0xf9)](_0x2c6aed(0x107), _0x4cba83[_0x2c6aed(0xdd)]);
        }
    }, ![]), window[_0x4d1ce5(0xfe)] = function (_0x3da922) {
        const _0x2a904f = _0x4d1ce5;
        try {
            return _0x3a02c9[_0x2a904f(0x111)](_0x3da922 || {});
        } catch (_0x5b8c61) {
            return _0x1a0524[_0x2a904f(0xdf)] && console[_0x2a904f(0xf9)](_0x2a904f(0xdb), _0x5b8c61[_0x2a904f(0xdd)]), ![];
        }
    }, window[_0x4d1ce5(0x10d)] = window['showVideoReadyNotification'], typeof Object[_0x4d1ce5(0xbf)] === 'function' && (Object['freeze'](window[_0x4d1ce5(0xfe)]), Object['freeze'](window[_0x4d1ce5(0x10d)]));
}()));
function _0x50ce(_0x120958, _0x185dd8) {
    _0x120958 = _0x120958 - 0xb5;
    const _0x46f218 = _0x46f2();
    let _0x50cebe = _0x46f218[_0x120958];
    return _0x50cebe;
}
function _0x46f2() {
    const _0x16eb9d = [
        '&amp;',
        'MAX_MESSAGE_LENGTH',
        '12536Cnzunw',
        'showNotification',
        'url',
        'isAllowed',
        '215XrFSOF',
        'thumbnail',
        '...',
        '11bCDqWM',
        'html',
        'replace',
        'MAX_TITLE_LENGTH',
        'location',
        '319361YvdGHK',
        '&quot;',
        '238935NuGIUu',
        '18MIyKSw',
        '292evnrmF',
        'SIGNATURE_ALGORITHM',
        '4038mWhEnA',
        'REQUIRE_CSRF_TOKEN',
        'VALIDATION_REJECTED_INVALID_TYPE',
        'querySelectorAll',
        'userAgent',
        'CSRF_VALIDATION_FAILED',
        'test',
        'isTrusted',
        'trim',
        'Token\x20mismatch',
        'internal',
        'freeze',
        '13472cmAUcs',
        'href',
        'ALLOWED_CALLERS',
        'X-CSRF-Token',
        'origin',
        '1728830ENgfmR',
        'getCallerContext',
        'hostname',
        'CSRF_VALIDATION_SUCCESS',
        '[VideoHook\x20Security]\x20',
        'now',
        'SIGNATURE_VALIDATION_ATTEMPT',
        'attr',
        'ENABLE_SRI_CHECK',
        'meta[name=\x22csrf-token\x22]',
        'filter',
        'push',
        'RATE_LIMIT_WINDOW',
        'videoGenerated',
        'validate',
        'floor',
        'toISOString',
        'nonce',
        'RATE_LIMIT_CALLS',
        'string',
        'entries',
        'REQUIRE_SIGNATURE',
        '[VideoHook]\x20showVideoReadyNotification\x20error:',
        'showVideoGenerated',
        'message',
        'content',
        'SECURITY_LOG_ENABLED',
        'subtle',
        'onVideoGenerated',
        'object',
        'log',
        'duration',
        'shift',
        'UNAUTHORIZED_CALLER_ATTEMPT',
        'RATE_LIMIT_ENABLED',
        '127.0.0.1',
        '[VideoHook]\x20Error\x20sending\x20notification:',
        'isArray',
        'CRYPTO_UNAVAILABLE',
        'warn',
        'external',
        '&gt;',
        'querySelector',
        'SIGNATURE_VALIDATION_ERROR',
        'unknown',
        'crypto',
        'getAttribute',
        'stack',
        '&#39;',
        'isCallerAllowed',
        '&lt;',
        'Video\x20Generated',
        'error',
        'slice',
        'includes',
        'number',
        'http:',
        'showVideoReadyNotification',
        'title',
        'SHA-256',
        'localhost',
        'HIGH',
        'MAX_URL_LENGTH',
        'calls',
        '217254RGqpZZ',
        'MAX_LOG_ENTRIES',
        '[VideoHook]\x20Event\x20listener\x20error:',
        'Your\x20video\x20is\x20ready\x20to\x20download',
        '_sendNotification',
        'length',
        'notificationSystem',
        'charCodeAt',
        'triggerVideoNotification'
    ];
    _0x46f2 = function () {
        return _0x16eb9d;
    };
    return _0x46f2();
}