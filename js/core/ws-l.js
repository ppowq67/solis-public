let _0x242b69 = 0x0,
    _0x2937a2;

function _0x5372fc() {
    try {
        const _0x351dd7 = localStorage['getItem']('sidebarActiveIndex');
        if (_0x351dd7 !== null) {
            _0x242b69 = parseInt(_0x351dd7, 0xa);
            const _0x270469 = document['querySelectorAll']('.nav-item');
            if (_0x270469[_0x242b69]) {
                _0x270469['forEach'](_0x3d2f06 => _0x3d2f06['classList']['remove']('active')), _0x270469[_0x242b69]['classList']['add']('active');
                const _0x2ab899 = document['getElementById']('indicator');
                if (_0x2ab899) {
                    const _0x13e293 = 0x50,
                        _0xba84e1 = 0x2,
                        _0x3c9f02 = _0x242b69 * (_0x13e293 + _0xba84e1);
                    _0x2ab899['style']['transform'] = 'translateY(' + _0x3c9f02 + 'px)\x20scaleY(1)';
                }
                const _0x573e78 = _0x270469[_0x242b69]['getAttribute']('data-target');
                _0x573e78 && _0x2e38ba(_0x573e78);
            }
        }
    } catch (_0x4e8906) {
        console['error']('Failed\x20to\x20restore\x20sidebar\x20state:', _0x4e8906);
    }
}

function _0x247654(_0x30b136, _0x5d5b3e = 'success') {
    const _0x51d0a8 = document['getElementById']('notificationContainer') || _0x1733b2(),
        _0x41a878 = document['createElement']('div');
    _0x41a878['className'] = 'notification\x20notification-' + _0x5d5b3e;
    const _0x2109e0 = _0x5d5b3e === 'success' ? 'rgba(34,\x20197,\x2094,\x200.95)' : _0x5d5b3e === 'error' ? 'rgba(239,\x2068,\x2068,\x200.95)' : 'rgba(249,\x20115,\x2022,\x200.95)';
    _0x41a878['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + _0x2109e0 + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideInRight\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20' + (_0x5d5b3e === 'success' ? '#22c55e' : _0x5d5b3e === 'error' ? '#ef4444' : '#f97316') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x41a878['textContent'] = _0x30b136, _0x51d0a8['appendChild'](_0x41a878), setTimeout(() => {
        _0x41a878['style']['animation'] = 'slideOutRight\x200.3s\x20ease', setTimeout(() => _0x41a878['remove'](), 0x12c);
    }, 0xbb8);
}

function _0x1733b2() {
    const _0x37b3c4 = document['createElement']('div');
    return _0x37b3c4['id'] = 'notificationContainer', _0x37b3c4['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', document['body']['appendChild'](_0x37b3c4), _0x37b3c4;
}
window['addEventListener']('videoGenerated', _0x145798 => {
    const _0x438f51 = _0x145798['detail']?.['title'] || 'Video';
    _0x247654('✅\x20' + _0x438f51 + '\x20has\x20been\x20generated\x20successfully!', 'success');
}), window['addEventListener']('videoGenerationError', _0xc605 => {
    const _0x1ba6fb = _0xc605['detail']?.['message'] || 'An\x20error\x20occurred';
    _0x247654('❌\x20' + _0x1ba6fb, 'error');
}), window['addEventListener']('videoGenerationProgress', _0x22624d => {
    const _0x4253cf = _0x22624d['detail']?.['progress'] || '';
    _0x247654('ℹ️\x20' + _0x4253cf, 'info');
});
const _0x9485ce = document['createElement']('style');
_0x9485ce['textContent'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideInRight\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideOutRight\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Advanced\x20Notification\x20Styles\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-success\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(34,\x20197,\x2094,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#22c55e\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-error\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#ef4444\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-info,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(249,\x20115,\x2022,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#f97316\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document['head']['appendChild'](_0x9485ce), window['notificationAPI'] = {
    'success': _0x2bdf4a => _0x247654(_0x2bdf4a, 'success'),
    'error': _0xa39b1b => _0x247654(_0xa39b1b, 'error'),
    'info': _0x4643af => _0x247654(_0x4643af, 'info'),
    'warning': _0x263e8e => _0x247654(_0x263e8e, 'warning'),
    'videoGenerated': _0xf64f57 => {
        const _0x182acc = new CustomEvent('videoGenerated', {
            'detail': {
                'title': _0xf64f57
            }
        });
        window['dispatchEvent'](_0x182acc);
    },
    'videoError': _0x2af7e9 => {
        const _0x3c3057 = new CustomEvent('videoGenerationError', {
            'detail': {
                'message': _0x2af7e9
            }
        });
        window['dispatchEvent'](_0x3c3057);
    },
    'videoProgress': _0x31c0ea => {
        const _0x46dd9d = new CustomEvent('videoGenerationProgress', {
            'detail': {
                'progress': _0x31c0ea
            }
        });
        window['dispatchEvent'](_0x46dd9d);
    }
}, window['showNotification'] = _0x247654;

function _0x65d44f() {
    try {
        if (typeof io === 'undefined') {
            console['warn']('⚠️\x20Socket.IO\x20not\x20loaded\x20yet,\x20retrying...'), setTimeout(_0x65d44f, 0x1f4);
            return;
        }
        const _0x4893d0 = new URL(window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space'),
            _0xad3ad3 = _0x4893d0['protocol'] === 'https:' ? 'wss:' : 'ws:',
            _0x4e453f = _0xad3ad3 + '//' + _0x4893d0['host'],
            _0xfac466 = io(_0x4e453f, {
                'transports': [
                    'websocket',
                    'polling'
                ],
                'reconnectionDelay': 0x3e8,
                'reconnectionAttempts': 0xa,
                'reconnection': !![],
                'path': '/socket.io/',
                'auth': {},
                'withCredentials': !![]
            });
        _0xfac466['on']('connect', () => {
            console['log']('✅\x20Connected\x20to\x20video\x20generation\x20service\x20via\x20Socket.IO');
        }), _0xfac466['on']('video_generated', _0x1b682b => {
            try {
                _0x247654('✅\x20' + (_0x1b682b['video_title'] || 'Your\x20video') + '\x20has\x20been\x20generated\x20successfully!', 'success'), window['dispatchEvent'](new CustomEvent('videoGenerated', {
                    'detail': {
                        'title': _0x1b682b['video_title'],
                        'id': _0x1b682b['video_id']
                    }
                }));
            } catch (_0x118aa8) {
                console['error']('Error\x20handling\x20video_generated\x20event:', _0x118aa8);
            }
        }), _0xfac466['on']('video_generation_error', _0x3f20fe => {
            try {
                _0x247654('❌\x20' + (_0x3f20fe['message'] || 'Video\x20generation\x20failed'), 'error'), window['dispatchEvent'](new CustomEvent('videoGenerationError', {
                    'detail': {
                        'message': _0x3f20fe['message']
                    }
                }));
            } catch (_0x415a69) {
                console['error']('Error\x20handling\x20video_generation_error\x20event:', _0x415a69);
            }
        }), _0xfac466['on']('video_generation_progress', _0x51938d => {
            try {
                _0x247654('ℹ️\x20' + (_0x51938d['message'] || 'Processing...'), 'info'), window['dispatchEvent'](new CustomEvent('videoGenerationProgress', {
                    'detail': {
                        'progress': _0x51938d['message']
                    }
                }));
            } catch (_0x32d9a1) {
                console['error']('Error\x20handling\x20video_generation_progress\x20event:', _0x32d9a1);
            }
        });
        let _0x34b463 = 0x0;
        const _0x2bebe1 = 0x1388;
        _0xfac466['on']('connect_error', _0x16cb0b => {
            console['error']('Socket.IO\x20connection\x20error:', _0x16cb0b);
        }), _0xfac466['on']('disconnect', () => {
            console['log']('Video\x20generation\x20socket\x20disconnected,\x20will\x20attempt\x20to\x20reconnect');
        }), window['videoGenerationSocket'] = _0xfac466;
    } catch (_0x12fc8c) {
        console['error']('Failed\x20to\x20initialize\x20video\x20generation\x20socket:', _0x12fc8c);
    }
}
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x65d44f) : _0x65d44f();
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x5372fc) : _0x5372fc();

function _0x36bc90(_0x5d219e, _0x540098) {
    if (_0x540098 === _0x242b69)
        return;
    const _0x1f168b = document['getElementById']('indicator'),
        _0x253328 = document['getElementById']('navContainer'),
        _0xfdcc45 = document['querySelectorAll']('.nav-item'),
        _0x49ce4d = 0x50,
        _0x2b9863 = 0x2,
        _0x52281f = _0x540098 * (_0x49ce4d + _0x2b9863),
        _0x597b50 = Math['abs'](_0x540098 - _0x242b69);
    _0xfdcc45['forEach'](_0xbfdf0e => _0xbfdf0e['classList']['remove']('active')), _0x5d219e['classList']['add']('active');
    const _0x4e2fe7 = _0x540098 > _0x242b69 ? 'down' : 'up';
    _0x253328['setAttribute']('data-direction', _0x4e2fe7), _0x253328['setAttribute']('data-moving', 'true');
    const _0x18ed34 = 0x1 + Math['min'](_0x597b50 * 0.12, 0.4);
    _0x1f168b['style']['transform'] = 'translateY(' + _0x52281f + 'px)\x20scaleY(' + _0x18ed34 + ')', clearTimeout(_0x2937a2), _0x2937a2 = setTimeout(() => {
        _0x1f168b['style']['transform'] = 'translateY(' + _0x52281f + 'px)\x20scaleY(1)', _0x253328['setAttribute']('data-moving', 'false');
    }, 0x12c), _0x242b69 = _0x540098;
    try {
        localStorage['setItem']('sidebarActiveIndex', _0x540098);
    } catch (_0x200a06) {
        console['error']('Failed\x20to\x20save\x20sidebar\x20state:', _0x200a06);
    }
    const _0x45dc2b = _0x5d219e['getAttribute']('data-target');
    _0x45dc2b && _0x2e38ba(_0x45dc2b);
}

function _0x2e38ba(_0x246707) {
    const _0xb37f98 = document['getElementById']('dashboardContainer'),
        _0xc5f078 = document['getElementById']('portalContainer'),
        _0x472ff0 = document['getElementById']('clipsContainer'),
        _0x4c02f0 = document['getElementById']('customEditorContainer'),
        _0x2b421a = document['querySelector']('.input-section'),
        _0x27625e = document['querySelector']('.input-container');
    [
        _0xb37f98,
        _0xc5f078,
        _0x472ff0,
        _0x4c02f0
    ]['forEach'](_0x7c326b => {
        _0x7c326b && (_0x7c326b['style']['display'] = 'none', _0x7c326b['classList']['remove']('active'));
    });
    _0x2b421a && (_0x2b421a['classList']['remove']('active'), _0x2b421a['style']['cssText'] = 'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;');
    if (_0x246707 === 'dashboard' && _0xb37f98) {
        _0xb37f98['style']['display'] = 'block', _0xb37f98['classList']['add']('active');
        if (window['analyticsManager'])
            window['analyticsManager']['updateCharts']();
        const _0x1f7928 = document['getElementById']('clipsSubNav');
        if (_0x1f7928)
            _0x1f7928['style']['display'] = 'none';
    } else {
        if (_0x246707 === 'Portal' && _0xc5f078) {
            _0xc5f078['style']['display'] = 'block', _0xc5f078['classList']['add']('active');
            const _0x5b7af9 = document['getElementById']('clipsSubNav');
            if (_0x5b7af9)
                _0x5b7af9['style']['display'] = 'none';
        } else {
            if (_0x246707 === 'clips' && _0x472ff0) {
                _0x472ff0['style']['display'] = 'block', _0x472ff0['classList']['add']('active');
                const _0x45fb46 = document['getElementById']('clipsSubNav');
                _0x45fb46 && (_0x45fb46['style']['display'] = 'block'), window['clipsStudio'] && !window['clipsStudio']['initialized'] && window['clipsStudio']['init']();
            }
        }
    }
}
const _0x72e27f = document['getElementById']('pane');
let _0x567537;

function _0x5b1776(_0x3989f2, _0x5205e1) {
    const _0x2e182f = document['getElementById']('navPill');
    if (!_0x2e182f)
        return;
    localStorage['setItem']('activeNavIndex', _0x5205e1), document['querySelectorAll']('.nav-item')['forEach'](_0x873c4f => {
        _0x873c4f['classList']['remove']('active'), _0x873c4f['classList']['remove']('show-label');
    }), _0x3989f2['classList']['add']('active'), _0x3989f2['classList']['add']('show-label');
    _0x72e27f && (_0x72e27f['style']['left'] = _0x3989f2['offsetLeft'] + 'px', _0x72e27f['style']['top'] = _0x3989f2['offsetTop'] + 'px', _0x72e27f['style']['width'] = _0x3989f2['offsetWidth'] + 'px', _0x72e27f['style']['height'] = _0x3989f2['offsetHeight'] + 'px');
    clearTimeout(_0x567537), _0x567537 = setTimeout(() => {
        _0x3989f2['classList']['remove']('show-label');
    }, 0x7d0);
    window['navigator']['vibrate'] && window['navigator']['vibrate'](0x8);
    const _0x5e53e0 = _0x3989f2['getAttribute']('data-target');
    _0x5e53e0 && _0x2e38ba(_0x5e53e0);
}
window['switchSection'] = _0x2e38ba, document['addEventListener']('DOMContentLoaded', function() {
    if (_0x72e27f && window['innerWidth'] <= 0x300) {
        const _0x5cd19a = localStorage['getItem']('activeNavIndex'),
            _0x5bdb93 = document['querySelectorAll']('.nav-item[data-target]'),
            _0xb5cb53 = _0x5cd19a !== null ? parseInt(_0x5cd19a) : 0x0;
        if (_0x5bdb93[_0xb5cb53]) {
            const _0x4ec5a4 = _0x5bdb93[_0xb5cb53];
            _0x4ec5a4['classList']['add']('active'), _0x72e27f['style']['left'] = _0x4ec5a4['offsetLeft'] + 'px', _0x72e27f['style']['top'] = _0x4ec5a4['offsetTop'] + 'px', _0x72e27f['style']['width'] = _0x4ec5a4['offsetWidth'] + 'px', _0x72e27f['style']['height'] = _0x4ec5a4['offsetHeight'] + 'px';
        } else {
            const _0x29ef7c = document['querySelector']('.nav-item.active');
            _0x29ef7c && (_0x72e27f['style']['left'] = _0x29ef7c['offsetLeft'] + 'px', _0x72e27f['style']['top'] = _0x29ef7c['offsetTop'] + 'px', _0x72e27f['style']['width'] = _0x29ef7c['offsetWidth'] + 'px', _0x72e27f['style']['height'] = _0x29ef7c['offsetHeight'] + 'px');
        }
    }
});