const _0x5ddb4f = _0x12fe;
(function (_0x2bac8b, _0x5edf0d) {
    const _0x175ed5 = _0x12fe, _0x34c4ba = _0x2bac8b();
    while (!![]) {
        try {
            const _0x39d754 = parseInt(_0x175ed5(0xca)) / 0x1 + -parseInt(_0x175ed5(0xed)) / 0x2 * (-parseInt(_0x175ed5(0xc8)) / 0x3) + -parseInt(_0x175ed5(0x12e)) / 0x4 + parseInt(_0x175ed5(0x129)) / 0x5 + -parseInt(_0x175ed5(0x141)) / 0x6 + parseInt(_0x175ed5(0x11b)) / 0x7 * (-parseInt(_0x175ed5(0x113)) / 0x8) + -parseInt(_0x175ed5(0x122)) / 0x9;
            if (_0x39d754 === _0x5edf0d)
                break;
            else
                _0x34c4ba['push'](_0x34c4ba['shift']());
        } catch (_0x5603b1) {
            _0x34c4ba['push'](_0x34c4ba['shift']());
        }
    }
}(_0x2b83, 0x76ac6));
let currentIndex = 0x0, resetTimeout;
function initSidebarState() {
    const _0xc9e2b3 = _0x12fe;
    try {
        const _0x291049 = localStorage[_0xc9e2b3(0x140)](_0xc9e2b3(0x127));
        if (_0x291049 !== null) {
            currentIndex = parseInt(_0x291049, 0xa);
            const _0xc21c43 = document[_0xc9e2b3(0x139)](_0xc9e2b3(0xf9));
            if (_0xc21c43[currentIndex]) {
                _0xc21c43[_0xc9e2b3(0xc3)](_0x47755e => _0x47755e[_0xc9e2b3(0x11f)][_0xc9e2b3(0xdf)]('active')), _0xc21c43[currentIndex][_0xc9e2b3(0x11f)]['add'](_0xc9e2b3(0xf1));
                const _0x5752c4 = document[_0xc9e2b3(0xc7)](_0xc9e2b3(0xc4));
                if (_0x5752c4) {
                    const _0x2778de = 0x50, _0x4115b5 = 0x2, _0x5cf671 = currentIndex * (_0x2778de + _0x4115b5);
                    _0x5752c4[_0xc9e2b3(0x121)][_0xc9e2b3(0x149)] = 'translateY(' + _0x5cf671 + _0xc9e2b3(0x131);
                }
                const _0x10998a = _0xc21c43[currentIndex]['getAttribute'](_0xc9e2b3(0xd8));
                _0x10998a && switchSection(_0x10998a);
            }
        }
    } catch (_0x365c75) {
        console['error'](_0xc9e2b3(0xfa), _0x365c75);
    }
}
function showNotification(_0x2b1230, _0x495287 = _0x5ddb4f(0xf4)) {
    const _0x2d9cea = _0x5ddb4f, _0x56ec0f = document[_0x2d9cea(0xc7)](_0x2d9cea(0xec)) || createNotificationContainer(), _0x159426 = document[_0x2d9cea(0x112)](_0x2d9cea(0x11d));
    _0x159426[_0x2d9cea(0xdb)] = _0x2d9cea(0xc9) + _0x495287;
    const _0x104ea4 = _0x495287 === _0x2d9cea(0xf4) ? _0x2d9cea(0x12a) : _0x495287 === _0x2d9cea(0xf2) ? _0x2d9cea(0x130) : 'rgba(249,\x20115,\x2022,\x200.95)';
    _0x159426['style'][_0x2d9cea(0xde)] = _0x2d9cea(0x110) + _0x104ea4 + _0x2d9cea(0xe3) + (_0x495287 === _0x2d9cea(0xf4) ? _0x2d9cea(0x120) : _0x495287 === _0x2d9cea(0xf2) ? _0x2d9cea(0x132) : _0x2d9cea(0x10b)) + _0x2d9cea(0x115), _0x159426[_0x2d9cea(0x148)] = _0x2b1230, _0x56ec0f[_0x2d9cea(0xee)](_0x159426), setTimeout(() => {
        const _0x1d5a5e = _0x2d9cea;
        _0x159426['style']['animation'] = _0x1d5a5e(0x137), setTimeout(() => _0x159426[_0x1d5a5e(0xdf)](), 0x12c);
    }, 0xbb8);
}
function createNotificationContainer() {
    const _0xb7b44d = _0x5ddb4f, _0x734619 = document[_0xb7b44d(0x112)](_0xb7b44d(0x11d));
    return _0x734619['id'] = _0xb7b44d(0xec), _0x734619[_0xb7b44d(0x121)][_0xb7b44d(0xde)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', document['body']['appendChild'](_0x734619), _0x734619;
}
window[_0x5ddb4f(0xe6)](_0x5ddb4f(0x145), _0x4098ef => {
    const _0x5e71c8 = _0x5ddb4f, _0x377aa3 = _0x4098ef[_0x5e71c8(0x10a)]?.['title'] || _0x5e71c8(0x134);
    showNotification('✅\x20' + _0x377aa3 + _0x5e71c8(0xc2), _0x5e71c8(0xf4));
}), window[_0x5ddb4f(0xe6)]('videoGenerationError', _0x2c16e9 => {
    const _0x413eb6 = _0x5ddb4f, _0xcb87c0 = _0x2c16e9[_0x413eb6(0x10a)]?.[_0x413eb6(0xe4)] || _0x413eb6(0xc6);
    showNotification('❌\x20' + _0xcb87c0, _0x413eb6(0xf2));
}), window[_0x5ddb4f(0xe6)](_0x5ddb4f(0x124), _0x7edcfd => {
    const _0xc250ee = _0x5ddb4f, _0x33a42c = _0x7edcfd['detail']?.[_0xc250ee(0x100)] || '';
    showNotification(_0xc250ee(0x11e) + _0x33a42c, _0xc250ee(0xfe));
});
const style = document[_0x5ddb4f(0x112)](_0x5ddb4f(0x121));
style[_0x5ddb4f(0x148)] = _0x5ddb4f(0xc1), document[_0x5ddb4f(0x13a)][_0x5ddb4f(0xee)](style), window[_0x5ddb4f(0x125)] = {
    'success': _0x55251e => showNotification(_0x55251e, 'success'),
    'error': _0x1ccccf => showNotification(_0x1ccccf, 'error'),
    'info': _0x3d6265 => showNotification(_0x3d6265, _0x5ddb4f(0xfe)),
    'warning': _0x1ef2bc => showNotification(_0x1ef2bc, 'warning'),
    'videoGenerated': _0x2cfc93 => {
        const _0x5b3fa0 = _0x5ddb4f, _0x54cbe3 = new CustomEvent(_0x5b3fa0(0x145), { 'detail': { 'title': _0x2cfc93 } });
        window['dispatchEvent'](_0x54cbe3);
    },
    'videoError': _0x86a138 => {
        const _0x23d104 = new CustomEvent('videoGenerationError', { 'detail': { 'message': _0x86a138 } });
        window['dispatchEvent'](_0x23d104);
    },
    'videoProgress': _0x2f3b6d => {
        const _0x42333a = _0x5ddb4f, _0x4b2c29 = new CustomEvent('videoGenerationProgress', { 'detail': { 'progress': _0x2f3b6d } });
        window[_0x42333a(0x144)](_0x4b2c29);
    }
}, window[_0x5ddb4f(0xdd)] = showNotification;
function _0x2b83() {
    const _0x1ffefc = [
        'head',
        'analyticsManager',
        'init',
        '5500',
        'block',
        'localhost',
        'getItem',
        '4408716qogJWO',
        'Error\x20handling\x20video_generation_progress\x20event:',
        'video_title',
        'dispatchEvent',
        'videoGenerated',
        'dashboard',
        'height',
        'textContent',
        'transform',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideInRight\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideOutRight\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Advanced\x20Notification\x20Styles\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-success\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(34,\x20197,\x2094,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#22c55e\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-error\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#ef4444\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-info,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification-warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(249,\x20115,\x2022,\x200.95)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#f97316\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20has\x20been\x20generated\x20successfully!',
        'forEach',
        'indicator',
        'left',
        'An\x20error\x20occurred',
        'getElementById',
        '44934waiZoM',
        'notification\x20notification-',
        '836136YWDhaK',
        'activeNavIndex',
        'video_generation_progress',
        'Failed\x20to\x20initialize\x20video\x20generation\x20socket:',
        'navContainer',
        'clipsContainer',
        'clipsSubNav',
        'video_generated',
        'readyState',
        'video_generation_error',
        'false',
        'DOMContentLoaded',
        'Error\x20handling\x20video_generation_error\x20event:',
        'loading',
        'data-target',
        'getAttribute',
        'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;',
        'className',
        'customEditorContainer',
        'showNotification',
        'cssText',
        'remove',
        'auth_token',
        'setItem',
        '/socket.io/',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideInRight\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20',
        'message',
        '.nav-item.active',
        'addEventListener',
        'Error\x20handling\x20video_generated\x20event:',
        'vibrate',
        'connect_error',
        'Processing...',
        '.input-section',
        'notificationContainer',
        '90NZHpfQ',
        'appendChild',
        'undefined',
        'backendPort',
        'active',
        'error',
        'portalContainer',
        'success',
        'switchSection',
        'videoGenerationSocket',
        'offsetHeight',
        'data-moving',
        '.nav-item',
        'Failed\x20to\x20restore\x20sidebar\x20state:',
        '⚠️\x20Socket.IO\x20not\x20loaded\x20yet,\x20retrying...',
        'setAttribute',
        'add',
        'info',
        'dashboardContainer',
        'progress',
        'disconnect',
        'px)\x20scaleY(',
        'abs',
        'Portal',
        '.nav-item[data-target]',
        'clipsStudio',
        'video_id',
        'Failed\x20to\x20save\x20sidebar\x20state:',
        'display',
        'detail',
        '#f97316',
        'websocket',
        'clips',
        'pane',
        'backendHost',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20',
        'Socket.IO\x20connection\x20error:',
        'createElement',
        '16736ntvlDi',
        'offsetWidth',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Video\x20generation\x20failed',
        'data-direction',
        'navigator',
        'videoGenerationError',
        'offsetLeft',
        '147shqcVv',
        'width',
        'div',
        'ℹ️\x20',
        'classList',
        '#22c55e',
        'style',
        '574407GKliEA',
        'querySelector',
        'videoGenerationProgress',
        'notificationAPI',
        'translateY(',
        'sidebarActiveIndex',
        'top',
        '216070eSXoTE',
        'rgba(34,\x20197,\x2094,\x200.95)',
        'innerWidth',
        'offsetTop',
        'show-label',
        '898932QNSePH',
        'Video\x20generation\x20socket\x20disconnected,\x20will\x20attempt\x20to\x20reconnect',
        'rgba(239,\x2068,\x2068,\x200.95)',
        'px)\x20scaleY(1)',
        '#ef4444',
        'none',
        'Video',
        'min',
        'connect',
        'slideOutRight\x200.3s\x20ease',
        'log',
        'querySelectorAll'
    ];
    _0x2b83 = function () {
        return _0x1ffefc;
    };
    return _0x2b83();
}
function initializeVideoGenerationSocket() {
    const _0x137f94 = _0x5ddb4f;
    try {
        if (typeof io === _0x137f94(0xef)) {
            console['warn'](_0x137f94(0xfb)), setTimeout(initializeVideoGenerationSocket, 0x1f4);
            return;
        }
        const _0x1c9841 = localStorage[_0x137f94(0x140)](_0x137f94(0xf0)) || _0x137f94(0x13d), _0x497f13 = localStorage[_0x137f94(0x140)](_0x137f94(0x10f)) || _0x137f94(0x13f), _0x943aac = 'http://' + _0x497f13 + ':' + _0x1c9841, _0x250a28 = localStorage[_0x137f94(0x140)]('token') || localStorage[_0x137f94(0x140)](_0x137f94(0xe0)) || localStorage[_0x137f94(0x140)]('authToken'), _0x43aecd = io(_0x943aac, {
                'transports': [
                    _0x137f94(0x10c),
                    'polling'
                ],
                'reconnectionDelay': 0x3e8,
                'reconnectionAttempts': 0xa,
                'reconnection': !![],
                'path': _0x137f94(0xe2),
                'auth': { 'token': _0x250a28 }
            });
        _0x43aecd['on'](_0x137f94(0x136), () => {
            const _0x5f0040 = _0x137f94;
            console[_0x5f0040(0x138)]('✅\x20Connected\x20to\x20video\x20generation\x20service\x20via\x20Socket.IO');
        }), _0x43aecd['on'](_0x137f94(0xd1), _0x3dd4ae => {
            const _0x2de5ce = _0x137f94;
            try {
                showNotification('✅\x20' + (_0x3dd4ae[_0x2de5ce(0x143)] || 'Your\x20video') + _0x2de5ce(0xc2), 'success'), window[_0x2de5ce(0x144)](new CustomEvent('videoGenerated', {
                    'detail': {
                        'title': _0x3dd4ae[_0x2de5ce(0x143)],
                        'id': _0x3dd4ae[_0x2de5ce(0x107)]
                    }
                }));
            } catch (_0x8afdb) {
                console[_0x2de5ce(0xf2)](_0x2de5ce(0xe7), _0x8afdb);
            }
        }), _0x43aecd['on'](_0x137f94(0xd3), _0x661ced => {
            const _0x500438 = _0x137f94;
            try {
                showNotification('❌\x20' + (_0x661ced[_0x500438(0xe4)] || _0x500438(0x116)), _0x500438(0xf2)), window[_0x500438(0x144)](new CustomEvent(_0x500438(0x119), { 'detail': { 'message': _0x661ced[_0x500438(0xe4)] } }));
            } catch (_0x95b58b) {
                console[_0x500438(0xf2)](_0x500438(0xd6), _0x95b58b);
            }
        }), _0x43aecd['on'](_0x137f94(0xcc), _0x2db322 => {
            const _0x4369ed = _0x137f94;
            try {
                showNotification(_0x4369ed(0x11e) + (_0x2db322[_0x4369ed(0xe4)] || _0x4369ed(0xea)), 'info'), window[_0x4369ed(0x144)](new CustomEvent('videoGenerationProgress', { 'detail': { 'progress': _0x2db322['message'] } }));
            } catch (_0x17045e) {
                console[_0x4369ed(0xf2)](_0x4369ed(0x142), _0x17045e);
            }
        });
        let _0x2519c6 = 0x0;
        const _0xbaacc0 = 0x1388;
        _0x43aecd['on'](_0x137f94(0xe9), _0x145688 => {
            const _0x1e9eb3 = _0x137f94;
            console[_0x1e9eb3(0xf2)](_0x1e9eb3(0x111), _0x145688);
        }), _0x43aecd['on'](_0x137f94(0x101), () => {
            const _0x599866 = _0x137f94;
            console[_0x599866(0x138)](_0x599866(0x12f));
        }), window[_0x137f94(0xf6)] = _0x43aecd;
    } catch (_0x1d7686) {
        console['error'](_0x137f94(0xcd), _0x1d7686);
    }
}
document[_0x5ddb4f(0xd2)] === _0x5ddb4f(0xd7) ? document['addEventListener'](_0x5ddb4f(0xd5), initializeVideoGenerationSocket) : initializeVideoGenerationSocket();
document[_0x5ddb4f(0xd2)] === 'loading' ? document['addEventListener']('DOMContentLoaded', initSidebarState) : initSidebarState();
function navigate(_0xf0ff88, _0x26cd27) {
    const _0x53e1ee = _0x5ddb4f;
    if (_0x26cd27 === currentIndex)
        return;
    const _0x4570c5 = document['getElementById'](_0x53e1ee(0xc4)), _0x56233d = document[_0x53e1ee(0xc7)](_0x53e1ee(0xce)), _0x256a8b = document[_0x53e1ee(0x139)](_0x53e1ee(0xf9)), _0xc597bd = 0x50, _0x2f1938 = 0x2, _0x352c06 = _0x26cd27 * (_0xc597bd + _0x2f1938), _0xfacf14 = Math[_0x53e1ee(0x103)](_0x26cd27 - currentIndex);
    _0x256a8b[_0x53e1ee(0xc3)](_0x41c0d9 => _0x41c0d9[_0x53e1ee(0x11f)][_0x53e1ee(0xdf)]('active')), _0xf0ff88[_0x53e1ee(0x11f)][_0x53e1ee(0xfd)]('active');
    const _0x43884d = _0x26cd27 > currentIndex ? 'down' : 'up';
    _0x56233d[_0x53e1ee(0xfc)](_0x53e1ee(0x117), _0x43884d), _0x56233d[_0x53e1ee(0xfc)](_0x53e1ee(0xf8), 'true');
    const _0x41c41f = 0x1 + Math[_0x53e1ee(0x135)](_0xfacf14 * 0.12, 0.4);
    _0x4570c5[_0x53e1ee(0x121)][_0x53e1ee(0x149)] = 'translateY(' + _0x352c06 + _0x53e1ee(0x102) + _0x41c41f + ')', clearTimeout(resetTimeout), resetTimeout = setTimeout(() => {
        const _0xd6bd31 = _0x53e1ee;
        _0x4570c5['style'][_0xd6bd31(0x149)] = _0xd6bd31(0x126) + _0x352c06 + _0xd6bd31(0x131), _0x56233d['setAttribute'](_0xd6bd31(0xf8), _0xd6bd31(0xd4));
    }, 0x12c), currentIndex = _0x26cd27;
    try {
        localStorage[_0x53e1ee(0xe1)](_0x53e1ee(0x127), _0x26cd27);
    } catch (_0x35465f) {
        console[_0x53e1ee(0xf2)](_0x53e1ee(0x108), _0x35465f);
    }
    const _0x39b4fa = _0xf0ff88[_0x53e1ee(0xd9)]('data-target');
    _0x39b4fa && switchSection(_0x39b4fa);
}
function switchSection(_0x2cfeca) {
    const _0x3a17d8 = _0x5ddb4f, _0x364e64 = document[_0x3a17d8(0xc7)](_0x3a17d8(0xff)), _0x45f04d = document[_0x3a17d8(0xc7)](_0x3a17d8(0xf3)), _0x485d8a = document['getElementById'](_0x3a17d8(0xcf)), _0x1324f9 = document[_0x3a17d8(0xc7)](_0x3a17d8(0xdc)), _0x521f3f = document[_0x3a17d8(0x123)](_0x3a17d8(0xeb)), _0x11ddf5 = document[_0x3a17d8(0x123)]('.input-container');
    [
        _0x364e64,
        _0x45f04d,
        _0x485d8a,
        _0x1324f9
    ]['forEach'](_0x2a32da => {
        const _0x3ad7bb = _0x3a17d8;
        _0x2a32da && (_0x2a32da[_0x3ad7bb(0x121)][_0x3ad7bb(0x109)] = 'none', _0x2a32da[_0x3ad7bb(0x11f)][_0x3ad7bb(0xdf)](_0x3ad7bb(0xf1)));
    });
    _0x521f3f && (_0x521f3f[_0x3a17d8(0x11f)][_0x3a17d8(0xdf)]('active'), _0x521f3f['style'][_0x3a17d8(0xde)] = _0x3a17d8(0xda));
    if (_0x2cfeca === _0x3a17d8(0x146) && _0x364e64) {
        _0x364e64[_0x3a17d8(0x121)][_0x3a17d8(0x109)] = _0x3a17d8(0x13e), _0x364e64['classList']['add'](_0x3a17d8(0xf1));
        if (window[_0x3a17d8(0x13b)])
            window['analyticsManager']['updateCharts']();
        const _0x444af9 = document[_0x3a17d8(0xc7)]('clipsSubNav');
        if (_0x444af9)
            _0x444af9[_0x3a17d8(0x121)][_0x3a17d8(0x109)] = _0x3a17d8(0x133);
    } else {
        if (_0x2cfeca === _0x3a17d8(0x104) && _0x45f04d) {
            _0x45f04d[_0x3a17d8(0x121)][_0x3a17d8(0x109)] = _0x3a17d8(0x13e), _0x45f04d['classList'][_0x3a17d8(0xfd)]('active');
            const _0x235457 = document[_0x3a17d8(0xc7)](_0x3a17d8(0xd0));
            if (_0x235457)
                _0x235457[_0x3a17d8(0x121)][_0x3a17d8(0x109)] = _0x3a17d8(0x133);
        } else {
            if (_0x2cfeca === _0x3a17d8(0x10d) && _0x485d8a) {
                _0x485d8a['style'][_0x3a17d8(0x109)] = 'block', _0x485d8a[_0x3a17d8(0x11f)][_0x3a17d8(0xfd)]('active');
                const _0x4e10f1 = document[_0x3a17d8(0xc7)](_0x3a17d8(0xd0));
                _0x4e10f1 && (_0x4e10f1['style']['display'] = _0x3a17d8(0x13e)), window[_0x3a17d8(0x106)] && !window[_0x3a17d8(0x106)]['initialized'] && window[_0x3a17d8(0x106)][_0x3a17d8(0x13c)]();
            }
        }
    }
}
const pane = document['getElementById'](_0x5ddb4f(0x10e));
function _0x12fe(_0x13709d, _0x48c08c) {
    _0x13709d = _0x13709d - 0xc1;
    const _0x2b837e = _0x2b83();
    let _0x12fe06 = _0x2b837e[_0x13709d];
    return _0x12fe06;
}
let mobileNavLabelTimeout;
function handleNav(_0x3ae58f, _0x510672) {
    const _0x20c5bc = _0x5ddb4f, _0x3ddcdc = document[_0x20c5bc(0xc7)]('navPill');
    if (!_0x3ddcdc)
        return;
    localStorage['setItem'](_0x20c5bc(0xcb), _0x510672), document['querySelectorAll'](_0x20c5bc(0xf9))[_0x20c5bc(0xc3)](_0x2562b9 => {
        const _0x4c1dc0 = _0x20c5bc;
        _0x2562b9[_0x4c1dc0(0x11f)][_0x4c1dc0(0xdf)](_0x4c1dc0(0xf1)), _0x2562b9[_0x4c1dc0(0x11f)][_0x4c1dc0(0xdf)](_0x4c1dc0(0x12d));
    }), _0x3ae58f[_0x20c5bc(0x11f)][_0x20c5bc(0xfd)](_0x20c5bc(0xf1)), _0x3ae58f['classList'][_0x20c5bc(0xfd)](_0x20c5bc(0x12d));
    pane && (pane[_0x20c5bc(0x121)][_0x20c5bc(0xc5)] = _0x3ae58f[_0x20c5bc(0x11a)] + 'px', pane['style']['top'] = _0x3ae58f['offsetTop'] + 'px', pane[_0x20c5bc(0x121)][_0x20c5bc(0x11c)] = _0x3ae58f[_0x20c5bc(0x114)] + 'px', pane['style']['height'] = _0x3ae58f['offsetHeight'] + 'px');
    clearTimeout(mobileNavLabelTimeout), mobileNavLabelTimeout = setTimeout(() => {
        const _0xbf3c3c = _0x20c5bc;
        _0x3ae58f[_0xbf3c3c(0x11f)][_0xbf3c3c(0xdf)](_0xbf3c3c(0x12d));
    }, 0x7d0);
    window[_0x20c5bc(0x118)][_0x20c5bc(0xe8)] && window[_0x20c5bc(0x118)][_0x20c5bc(0xe8)](0x8);
    const _0x2d7016 = _0x3ae58f['getAttribute']('data-target');
    _0x2d7016 && switchSection(_0x2d7016);
}
window[_0x5ddb4f(0xf5)] = switchSection, document[_0x5ddb4f(0xe6)](_0x5ddb4f(0xd5), function () {
    const _0x3a830f = _0x5ddb4f;
    if (pane && window[_0x3a830f(0x12b)] <= 0x300) {
        const _0x104f8f = localStorage[_0x3a830f(0x140)](_0x3a830f(0xcb)), _0x48a596 = document[_0x3a830f(0x139)](_0x3a830f(0x105)), _0xf36b98 = _0x104f8f !== null ? parseInt(_0x104f8f) : 0x0;
        if (_0x48a596[_0xf36b98]) {
            const _0x9340c3 = _0x48a596[_0xf36b98];
            _0x9340c3[_0x3a830f(0x11f)][_0x3a830f(0xfd)](_0x3a830f(0xf1)), pane[_0x3a830f(0x121)]['left'] = _0x9340c3[_0x3a830f(0x11a)] + 'px', pane['style'][_0x3a830f(0x128)] = _0x9340c3[_0x3a830f(0x12c)] + 'px', pane[_0x3a830f(0x121)]['width'] = _0x9340c3[_0x3a830f(0x114)] + 'px', pane['style'][_0x3a830f(0x147)] = _0x9340c3[_0x3a830f(0xf7)] + 'px';
        } else {
            const _0x29c66f = document[_0x3a830f(0x123)](_0x3a830f(0xe5));
            _0x29c66f && (pane[_0x3a830f(0x121)][_0x3a830f(0xc5)] = _0x29c66f['offsetLeft'] + 'px', pane[_0x3a830f(0x121)][_0x3a830f(0x128)] = _0x29c66f[_0x3a830f(0x12c)] + 'px', pane[_0x3a830f(0x121)][_0x3a830f(0x11c)] = _0x29c66f[_0x3a830f(0x114)] + 'px', pane[_0x3a830f(0x121)][_0x3a830f(0x147)] = _0x29c66f[_0x3a830f(0xf7)] + 'px');
        }
    }
});