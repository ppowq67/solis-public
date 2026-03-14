const _0x2079fd = _0x3658;
(function (_0x27bd9e, _0x31c5f2) {
    const _0x1e2490 = _0x3658, _0x418f07 = _0x27bd9e();
    while (!![]) {
        try {
            const _0x59047d = parseInt(_0x1e2490(0x134)) / 0x1 * (-parseInt(_0x1e2490(0x196)) / 0x2) + parseInt(_0x1e2490(0x173)) / 0x3 * (parseInt(_0x1e2490(0x127)) / 0x4) + -parseInt(_0x1e2490(0x13a)) / 0x5 + -parseInt(_0x1e2490(0x143)) / 0x6 + parseInt(_0x1e2490(0x1a2)) / 0x7 + parseInt(_0x1e2490(0x156)) / 0x8 * (-parseInt(_0x1e2490(0x14d)) / 0x9) + -parseInt(_0x1e2490(0x15d)) / 0xa * (-parseInt(_0x1e2490(0x198)) / 0xb);
            if (_0x59047d === _0x31c5f2)
                break;
            else
                _0x418f07['push'](_0x418f07['shift']());
        } catch (_0x3fd8e3) {
            _0x418f07['push'](_0x418f07['shift']());
        }
    }
}(_0x249d, 0x345e8), console[_0x2079fd(0x1a1)](_0x2079fd(0x1b8)));
function escapeHtml(_0x39a495) {
    const _0x2d1a7c = _0x2079fd;
    if (typeof _0x39a495 !== _0x2d1a7c(0x136))
        return '';
    const _0x34b5b7 = {
        '&': _0x2d1a7c(0x17f),
        '<': _0x2d1a7c(0x19a),
        '>': _0x2d1a7c(0x12b),
        '\x22': '&quot;',
        '\x27': '&#x27;',
        '/': _0x2d1a7c(0x16c)
    };
    return _0x39a495[_0x2d1a7c(0x13b)](/[&<>"'\/]/g, _0x521d0a => _0x34b5b7[_0x521d0a] || _0x521d0a);
}
function isValidImageUrl(_0x29ebc3) {
    const _0x46749d = _0x2079fd;
    if (typeof _0x29ebc3 !== _0x46749d(0x136) || _0x29ebc3[_0x46749d(0x1a3)] === 0x0)
        return ![];
    if (_0x29ebc3['length'] > 0x800)
        return ![];
    try {
        const _0x1a38a0 = new URL(_0x29ebc3);
        if (!/^https?:$/[_0x46749d(0x17e)](_0x1a38a0[_0x46749d(0x197)]))
            return ![];
        if (_0x29ebc3[_0x46749d(0x13f)]()[_0x46749d(0x141)](_0x46749d(0x182)))
            return ![];
        if (_0x29ebc3[_0x46749d(0x13f)]()[_0x46749d(0x141)](_0x46749d(0x1bc)))
            return ![];
        if (_0x29ebc3[_0x46749d(0x13f)]()[_0x46749d(0x141)]('vbscript:'))
            return ![];
        return !![];
    } catch {
        return ![];
    }
}
function safeSetText(_0x3b32d3, _0x251f5c) {
    const _0x5a6903 = _0x2079fd;
    _0x3b32d3 && typeof _0x251f5c === 'string' && (_0x3b32d3[_0x5a6903(0x195)] = _0x251f5c);
}
function safeSetImage(_0x5ec54c, _0x24e687, _0x439cd3 = '') {
    const _0x38f535 = _0x2079fd;
    if (!_0x5ec54c)
        return;
    if (!isValidImageUrl(_0x24e687)) {
        console[_0x38f535(0x18f)]('Invalid\x20image\x20URL');
        return;
    }
    const _0x3e2919 = document[_0x38f535(0x192)](_0x38f535(0x172));
    _0x3e2919[_0x38f535(0x1b7)](_0x38f535(0x132), _0x24e687), _0x3e2919[_0x38f535(0x1b7)](_0x38f535(0x18c), escapeHtml(_0x439cd3)), _0x3e2919['style'][_0x38f535(0x1bb)] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;';
    while (_0x5ec54c[_0x38f535(0x137)]) {
        _0x5ec54c['removeChild'](_0x5ec54c[_0x38f535(0x137)]);
    }
    _0x5ec54c[_0x38f535(0x12c)](_0x3e2919);
}
function validateUserObject(_0x3b246c) {
    const _0x3c7970 = _0x2079fd;
    if (!_0x3b246c || typeof _0x3b246c !== _0x3c7970(0x146))
        return { 'valid': ![] };
    const _0x530853 = _0x3b246c['id'] || _0x3b246c[_0x3c7970(0x18a)] || _0x3b246c[_0x3c7970(0x14f)], _0x48cf38 = _0x3b246c['email'] || _0x3b246c[_0x3c7970(0x152)] || _0x3b246c[_0x3c7970(0x19b)];
    if (_0x530853 || _0x48cf38)
        return {
            'valid': !![],
            'user': _0x3b246c
        };
    return { 'valid': ![] };
}
let notificationSystem = {
    'unreadCount': 0x0,
    'notifications': [],
    'bellElement': null,
    'profileElement': null,
    'notificationsDropdown': null,
    'profileDropdown': null,
    'initialized': ![]
};
function initializeNotificationSystem() {
    const _0x456ea5 = _0x2079fd;
    if (notificationSystem[_0x456ea5(0x160)])
        return;
    console[_0x456ea5(0x1a1)](_0x456ea5(0x158)), notificationSystem['bellElement'] = document['getElementById'](_0x456ea5(0x15f)), notificationSystem[_0x456ea5(0x16b)] = document[_0x456ea5(0x191)](_0x456ea5(0x1af)), notificationSystem[_0x456ea5(0x12f)] = document['getElementById'](_0x456ea5(0x12f));
    if (!notificationSystem[_0x456ea5(0x1a5)] || !notificationSystem[_0x456ea5(0x16b)]) {
        console['warn'](_0x456ea5(0x19e));
        return;
    }
    console[_0x456ea5(0x1a1)](_0x456ea5(0x163)), attachNotificationEventListeners(), loadNotificationsFromStorage(), syncProfileButton(), notificationSystem[_0x456ea5(0x160)] = !![], syncProfileButton();
}
function syncProfileButton() {
    const _0x54d7e4 = _0x2079fd, _0x53ed2a = document[_0x54d7e4(0x191)]('profileAvatarBtn');
    if (!_0x53ed2a)
        return;
    let _0x54d295 = null;
    try {
        if (typeof window !== _0x54d7e4(0x1b5) && window['currentUser'])
            _0x54d295 = window[_0x54d7e4(0x14e)];
        else {
            const _0x1f9dc1 = localStorage[_0x54d7e4(0x181)](_0x54d7e4(0x14e));
            if (_0x1f9dc1) {
                const _0x1c380d = _0x1f9dc1[_0x54d7e4(0x164)]();
                _0x1c380d['startsWith']('{') && _0x1c380d['endsWith']('}') && (_0x54d295 = JSON[_0x54d7e4(0x176)](_0x1f9dc1));
            }
        }
    } catch (_0x342324) {
        console[_0x54d7e4(0x1a4)](_0x54d7e4(0x18e), _0x342324), _0x54d295 = null;
    }
    const _0x52a66f = validateUserObject(_0x54d295);
    if (!_0x52a66f || !_0x52a66f[_0x54d7e4(0x18b)]) {
        console['warn'](_0x54d7e4(0x16e));
        return;
    }
    const _0x10154e = _0x52a66f['user'], _0x46a244 = (_0x10154e[_0x54d7e4(0x194)] || '')[_0x54d7e4(0x190)]()[_0x54d7e4(0x13f)](), _0x42505e = _0x10154e[_0x54d7e4(0x199)] || _0x10154e['avatar'] || null, _0x531bd6 = _0x54d7e4(0x129);
    while (_0x53ed2a[_0x54d7e4(0x137)]) {
        _0x53ed2a[_0x54d7e4(0x1b2)](_0x53ed2a[_0x54d7e4(0x137)]);
    }
    if (_0x46a244[_0x54d7e4(0x141)](_0x54d7e4(0x14b)))
        console[_0x54d7e4(0x1a1)](_0x54d7e4(0x177)), _0x53ed2a[_0x54d7e4(0x17b)] = _0x531bd6;
    else
        _0x42505e && typeof _0x42505e === _0x54d7e4(0x136) && (isValidImageUrl(_0x42505e) ? safeSetImage(_0x53ed2a, _0x42505e, _0x54d7e4(0x148)) : console[_0x54d7e4(0x18f)](_0x54d7e4(0x184)));
}
function attachNotificationEventListeners() {
    const _0x2f41f2 = _0x2079fd, _0x3eef80 = notificationSystem[_0x2f41f2(0x1a5)], _0x363d77 = notificationSystem['notificationsDropdown'];
    _0x3eef80[_0x2f41f2(0x17d)](_0x2f41f2(0x135), _0x16c576 => {
        const _0x3a87c1 = _0x2f41f2;
        _0x16c576[_0x3a87c1(0x122)]();
        const _0x57ac54 = _0x363d77[_0x3a87c1(0x19d)]['contains']('open');
        closeAllDropdowns(), !_0x57ac54 && (_0x363d77[_0x3a87c1(0x19d)][_0x3a87c1(0x1ba)]('open'), clearUnreadStatus());
    }), document[_0x2f41f2(0x17d)](_0x2f41f2(0x135), closeAllDropdowns);
    const _0x46f994 = document['getElementById'](_0x2f41f2(0x19c));
    _0x46f994 && _0x46f994['addEventListener'](_0x2f41f2(0x135), _0x37cb42 => {
        const _0x20a3d7 = _0x2f41f2;
        _0x37cb42[_0x20a3d7(0x17c)](), clearUnreadStatus();
    });
}
function closeAllDropdowns() {
    const _0x53c604 = _0x2079fd, _0x2e5e44 = notificationSystem[_0x53c604(0x12f)];
    if (_0x2e5e44)
        _0x2e5e44['classList']['remove'](_0x53c604(0x144));
}
function loadNotificationsFromStorage() {
    const _0x47668f = _0x2079fd;
    try {
        const _0x4b7eaa = localStorage[_0x47668f(0x181)](_0x47668f(0x131));
        if (_0x4b7eaa) {
            const _0x28bcd6 = JSON[_0x47668f(0x176)](_0x4b7eaa);
            notificationSystem[_0x47668f(0x149)] = _0x28bcd6['notifications'] || [], notificationSystem[_0x47668f(0x1a9)] = _0x28bcd6['unreadCount'] || 0x0, updateNotificationDisplay();
        }
    } catch (_0x48dbd4) {
        console[_0x47668f(0x1a4)](_0x47668f(0x159), _0x48dbd4);
    }
}
function _0x249d() {
    const _0x4a7620 = [
        'querySelector',
        'setAttribute',
        'profile-notifications.js\x20loaded',
        'user',
        'add',
        'cssText',
        'data:',
        'stroke-linecap',
        'loading',
        'Video\x20Ready!',
        'stopPropagation',
        'View\x20Video',
        'Error\x20saving\x20notifications:',
        'notif-sender',
        'floor',
        '668uzTbBq',
        'icon',
        '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22currentColor\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22><rect\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22/><path\x20d=\x22M20\x204H4C2.9\x204\x202.01\x204.9\x202.01\x206L2\x2018c0\x201.1.9\x202\x202\x202h16c1.1\x200\x202-.9\x202-2V6c0-1.1-.9-2-2-2zm0\x204l-8\x205-8-5V6l8\x205\x208-5v2z\x22\x20fill=\x22#EA4335\x22/></svg>',
        'default',
        '&gt;',
        'appendChild',
        'stroke',
        'show',
        'notificationsDropdown',
        'className',
        'notificationSystem',
        'src',
        'currentColor',
        '1631Sqjpfy',
        'click',
        'string',
        'firstChild',
        'readyState',
        '.video-generated-message',
        '602095QySIjr',
        'replace',
        'height',
        'New\x20notification',
        '<path\x20d=\x22M10.29\x203.86L1.82\x2018a2\x202\x200\x200\x200\x201.71\x203.05h16.94a2\x202\x200\x200\x200\x201.71-3.05L13.71\x203.86a2\x202\x200\x200\x200-3.42\x200z\x22></path><line\x20x1=\x2212\x22\x20y1=\x229\x22\x20x2=\x2212\x22\x20y2=\x2213\x22></line><line\x20x1=\x2212\x22\x20y1=\x2217\x22\x20x2=\x2212.01\x22\x20y2=\x2217\x22></line>',
        'toLowerCase',
        'substring',
        'includes',
        'div',
        '887124GmUQFr',
        'open',
        'profileNameDisplay',
        'object',
        'onclick',
        'User\x20Avatar',
        'notifications',
        'Video\x20Generated',
        'google',
        'm\x20ago',
        '28647NkCjpP',
        'currentUser',
        'sub',
        '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><line\x20x1=\x2215\x22\x20y1=\x229\x22\x20x2=\x229\x22\x20y2=\x2215\x22></line><line\x20x1=\x229\x22\x20y1=\x229\x22\x20x2=\x2215\x22\x20y2=\x2215\x22></line>',
        'setItem',
        'name',
        'slice',
        'svg',
        'round',
        '776RFhgIp',
        'DOMContentLoaded',
        'Initializing\x20notification\x20system...',
        'Error\x20loading\x20notifications:',
        'Invalid\x20notification\x20object',
        'viewBox',
        'startsWith',
        '10lXTESK',
        'avatar',
        'bellBtn',
        'initialized',
        'notif-content',
        'notif-message',
        '✅\x20Notification\x20elements\x20found',
        'trim',
        'toUpperCase',
        'unshift',
        'timestamp',
        '.video-generated-title',
        'title',
        'Error\x20reading\x20user\x20data:',
        'profileElement',
        '&#x2F;',
        'has-unread',
        'Invalid\x20user\x20object',
        'style',
        'fill',
        'Video\x20generated\x20overlay\x20elements\x20not\x20found',
        'img',
        '2196eOJhNw',
        'videoGeneratedBackdrop',
        'No\x20notifications',
        'parse',
        'Displaying\x20Gmail\x20icon\x20for\x20Google\x20OAuth\x20user',
        'toLocaleDateString',
        'message',
        'warning',
        'innerHTML',
        'preventDefault',
        'addEventListener',
        'test',
        '&amp;',
        'd\x20ago',
        'getItem',
        'javascript:',
        'remove',
        'Invalid\x20avatar\x20URL',
        'info',
        'Your\x20video\x20\x22',
        'width',
        'Notification',
        '\x22\x20has\x20been\x20successfully\x20created\x20and\x20is\x20ready\x20to\x20download.',
        'user_id',
        'valid',
        'alt',
        'plan',
        'Error\x20syncing\x20profile:',
        'warn',
        'toString',
        'getElementById',
        'createElement',
        'notificationsList',
        'auth_provider',
        'textContent',
        '516RgrQSA',
        'protocol',
        '11139205kHYzMa',
        'picture',
        '&lt;',
        'displayName',
        'markAsRead',
        'classList',
        'Required\x20notification\x20elements\x20not\x20found',
        'tier',
        'email',
        'log',
        '541989aTBgCA',
        'length',
        'error',
        'bellElement',
        'forEach',
        'Free\x20Plan',
        '🎬\x20Showing\x20video\x20generated\x20notification',
        'unreadCount',
        'check',
        '0\x200\x2024\x2024',
        '<path\x20d=\x22M22\x2011.08V12a10\x2010\x200\x201\x201-5.93-9.14\x22></path><polyline\x20points=\x2222\x204\x2012\x2014.01\x209\x2011.01\x22></polyline>',
        'videoGeneratedOverlay',
        'read',
        'profileAvatarBtn',
        'User',
        '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><path\x20d=\x22M12\x2016v-4M12\x208h.01\x22></path>',
        'removeChild',
        'none',
        'padding:\x2020px;\x20text-align:\x20center;\x20color:\x20#718096;',
        'undefined'
    ];
    _0x249d = function () {
        return _0x4a7620;
    };
    return _0x249d();
}
function saveNotificationsToStorage() {
    const _0xf7fb58 = _0x2079fd;
    try {
        localStorage[_0xf7fb58(0x151)](_0xf7fb58(0x131), JSON['stringify']({
            'notifications': notificationSystem[_0xf7fb58(0x149)],
            'unreadCount': notificationSystem['unreadCount']
        }));
    } catch (_0x4e839a) {
        console[_0xf7fb58(0x1a4)](_0xf7fb58(0x124), _0x4e839a);
    }
}
function addNotification(_0x3f2977) {
    const _0x20e958 = _0x2079fd;
    if (!_0x3f2977 || typeof _0x3f2977 !== _0x20e958(0x146))
        return console[_0x20e958(0x1a4)](_0x20e958(0x15a)), null;
    const _0x146866 = (_0x3b41f5, _0x1b014a = 0x1f4) => {
            const _0x2970c2 = _0x20e958;
            if (typeof _0x3b41f5 !== _0x2970c2(0x136))
                return '';
            return escapeHtml(_0x3b41f5[_0x2970c2(0x140)](0x0, _0x1b014a));
        }, _0x537414 = {
            'id': Date['now'](),
            'title': _0x146866(_0x3f2977[_0x20e958(0x169)] || _0x20e958(0x188), 0x64),
            'message': _0x146866(_0x3f2977['message'] || _0x20e958(0x13d), 0x1f4),
            'icon': _0x3f2977[_0x20e958(0x128)] || _0x20e958(0x185),
            'timestamp': _0x3f2977[_0x20e958(0x167)] || new Date(),
            'read': _0x3f2977[_0x20e958(0x1ae)] === !![],
            ..._0x3f2977
        }, _0x13fe82 = [
            _0x20e958(0x1aa),
            _0x20e958(0x185),
            _0x20e958(0x17a),
            _0x20e958(0x1a4),
            _0x20e958(0x12a)
        ];
    return !_0x13fe82[_0x20e958(0x141)](_0x537414[_0x20e958(0x128)]) && (_0x537414[_0x20e958(0x128)] = _0x20e958(0x12a)), notificationSystem[_0x20e958(0x149)][_0x20e958(0x166)](_0x537414), notificationSystem['unreadCount']++, notificationSystem[_0x20e958(0x149)]['length'] > 0x32 && (notificationSystem[_0x20e958(0x149)] = notificationSystem[_0x20e958(0x149)][_0x20e958(0x153)](0x0, 0x32)), saveNotificationsToStorage(), updateNotificationDisplay(), _0x537414;
}
function showVideoGeneratedNotification(_0xcab5d9 = {}) {
    const _0x467c58 = _0x2079fd;
    console[_0x467c58(0x1a1)](_0x467c58(0x1a8), _0xcab5d9);
    const {
        videoTitle: videoTitle = _0x467c58(0x14a),
        videoUrl: videoUrl = '#',
        thumbnailUrl: thumbnailUrl = null,
        duration: duration = 0x0
    } = _0xcab5d9;
    showVideoGeneratedOverlay(videoTitle, videoUrl), addNotification({
        'title': _0x467c58(0x14a),
        'message': _0x467c58(0x186) + videoTitle + _0x467c58(0x189),
        'icon': 'check',
        'action': {
            'label': _0x467c58(0x123),
            'url': videoUrl
        }
    });
}
function showVideoGeneratedOverlay(_0x4f1e32 = _0x2079fd(0x121), _0x2a66c1 = '#') {
    const _0x19cf3a = _0x2079fd, _0x1fa254 = document[_0x19cf3a(0x191)](_0x19cf3a(0x174)), _0x2b900f = document[_0x19cf3a(0x191)](_0x19cf3a(0x1ad));
    if (!_0x1fa254 || !_0x2b900f) {
        console[_0x19cf3a(0x18f)](_0x19cf3a(0x171));
        return;
    }
    const _0xe15fa8 = _0x2b900f[_0x19cf3a(0x1b6)](_0x19cf3a(0x168)), _0x2240e7 = _0x2b900f[_0x19cf3a(0x1b6)](_0x19cf3a(0x139)), _0x8dd7b8 = _0x2b900f[_0x19cf3a(0x1b6)]('[data-action=\x22view\x22]');
    if (_0xe15fa8)
        _0xe15fa8[_0x19cf3a(0x195)] = _0x4f1e32;
    if (_0x2240e7)
        _0x2240e7['textContent'] = 'Your\x20video\x20has\x20been\x20successfully\x20generated\x20and\x20is\x20ready\x20to\x20download\x20or\x20share.';
    _0x8dd7b8 && (_0x8dd7b8[_0x19cf3a(0x147)] = () => {
        const _0x38de6d = _0x19cf3a;
        _0x2a66c1 !== '#' && window[_0x38de6d(0x144)](_0x2a66c1, '_blank'), hideVideoGeneratedOverlay();
    }), _0x1fa254['classList']['add']('show'), _0x2b900f[_0x19cf3a(0x19d)]['add'](_0x19cf3a(0x12e)), setTimeout(hideVideoGeneratedOverlay, 0x1f40);
}
function hideVideoGeneratedOverlay() {
    const _0x32faaf = _0x2079fd, _0x3ca465 = document[_0x32faaf(0x191)]('videoGeneratedBackdrop'), _0x2b81f5 = document[_0x32faaf(0x191)]('videoGeneratedOverlay');
    if (_0x3ca465)
        _0x3ca465[_0x32faaf(0x19d)][_0x32faaf(0x183)]('show');
    if (_0x2b81f5)
        _0x2b81f5[_0x32faaf(0x19d)][_0x32faaf(0x183)](_0x32faaf(0x12e));
}
function _0x3658(_0x2e1241, _0x292bb4) {
    _0x2e1241 = _0x2e1241 - 0x120;
    const _0x249d62 = _0x249d();
    let _0x3658d6 = _0x249d62[_0x2e1241];
    return _0x3658d6;
}
function updateNotificationDisplay() {
    const _0x85576e = _0x2079fd, _0x656768 = notificationSystem[_0x85576e(0x1a5)];
    if (!_0x656768)
        return;
    const _0x3ddcca = notificationSystem[_0x85576e(0x1a9)] > 0x0;
    _0x3ddcca ? _0x656768[_0x85576e(0x19d)][_0x85576e(0x1ba)]('has-unread') : _0x656768[_0x85576e(0x19d)][_0x85576e(0x183)](_0x85576e(0x16d)), renderNotificationsList();
}
function renderNotificationsList() {
    const _0x51d9ac = _0x2079fd, _0x535ab6 = document[_0x51d9ac(0x191)](_0x51d9ac(0x193));
    if (!_0x535ab6)
        return;
    while (_0x535ab6[_0x51d9ac(0x137)]) {
        _0x535ab6[_0x51d9ac(0x1b2)](_0x535ab6[_0x51d9ac(0x137)]);
    }
    if (notificationSystem[_0x51d9ac(0x149)][_0x51d9ac(0x1a3)] === 0x0) {
        const _0x189d82 = document[_0x51d9ac(0x192)]('div');
        _0x189d82[_0x51d9ac(0x16f)][_0x51d9ac(0x1bb)] = _0x51d9ac(0x1b4), safeSetText(_0x189d82, _0x51d9ac(0x175)), _0x535ab6[_0x51d9ac(0x12c)](_0x189d82);
        return;
    }
    notificationSystem[_0x51d9ac(0x149)]['forEach'](_0x276d28 => {
        const _0x4a8133 = _0x51d9ac;
        if (!_0x276d28 || typeof _0x276d28 !== 'object')
            return;
        const _0x38ad4f = document['createElement']('div');
        _0x38ad4f[_0x4a8133(0x130)] = 'notif-item';
        const _0x47e50d = document[_0x4a8133(0x192)](_0x4a8133(0x142));
        _0x47e50d['className'] = 'notif-icon';
        const _0x26e117 = document['createElement'](_0x4a8133(0x154));
        _0x26e117[_0x4a8133(0x1b7)](_0x4a8133(0x187), '18'), _0x26e117[_0x4a8133(0x1b7)](_0x4a8133(0x13c), '18'), _0x26e117[_0x4a8133(0x1b7)](_0x4a8133(0x15b), _0x4a8133(0x1ab)), _0x26e117[_0x4a8133(0x1b7)](_0x4a8133(0x170), _0x4a8133(0x1b3)), _0x26e117[_0x4a8133(0x1b7)](_0x4a8133(0x12d), _0x4a8133(0x133)), _0x26e117['setAttribute'](_0x4a8133(0x1bd), 'round'), _0x26e117[_0x4a8133(0x1b7)]('stroke-linejoin', _0x4a8133(0x155)), _0x26e117[_0x4a8133(0x17b)] = getNotificationIcon(_0x276d28[_0x4a8133(0x128)]), _0x47e50d[_0x4a8133(0x12c)](_0x26e117);
        const _0x236774 = document[_0x4a8133(0x192)](_0x4a8133(0x142));
        _0x236774['className'] = _0x4a8133(0x161);
        const _0x568833 = document['createElement']('div');
        _0x568833[_0x4a8133(0x130)] = _0x4a8133(0x125), safeSetText(_0x568833, _0x276d28[_0x4a8133(0x169)]);
        const _0x10da3e = document[_0x4a8133(0x192)](_0x4a8133(0x142));
        _0x10da3e[_0x4a8133(0x130)] = _0x4a8133(0x162), safeSetText(_0x10da3e, _0x276d28[_0x4a8133(0x179)]);
        const _0x2faecd = document[_0x4a8133(0x192)](_0x4a8133(0x142));
        _0x2faecd['className'] = 'notif-time', safeSetText(_0x2faecd, formatTime(_0x276d28[_0x4a8133(0x167)])), _0x236774[_0x4a8133(0x12c)](_0x568833), _0x236774[_0x4a8133(0x12c)](_0x10da3e), _0x236774['appendChild'](_0x2faecd), _0x38ad4f['appendChild'](_0x47e50d), _0x38ad4f['appendChild'](_0x236774), _0x535ab6['appendChild'](_0x38ad4f);
    });
}
function getNotificationIcon(_0x3063ef) {
    const _0x46b974 = _0x2079fd, _0x4d1533 = {
            'check': _0x46b974(0x1ac),
            'info': '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line><line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212.01\x22\x20y2=\x228\x22></line>',
            'warning': _0x46b974(0x13e),
            'error': _0x46b974(0x150),
            'default': _0x46b974(0x1b1)
        };
    return _0x4d1533[_0x3063ef] || _0x4d1533[_0x46b974(0x12a)];
}
function clearUnreadStatus() {
    const _0x4fa4c5 = _0x2079fd;
    notificationSystem[_0x4fa4c5(0x1a9)] = 0x0, notificationSystem[_0x4fa4c5(0x149)][_0x4fa4c5(0x1a6)](_0x346b5f => _0x346b5f['read'] = !![]), saveNotificationsToStorage(), updateNotificationDisplay();
}
function formatTime(_0x14256f) {
    const _0x4c4660 = _0x2079fd;
    typeof _0x14256f === _0x4c4660(0x136) && (_0x14256f = new Date(_0x14256f));
    const _0x2b0e84 = new Date(), _0x5aa9dd = _0x2b0e84 - _0x14256f, _0x3ee25f = Math[_0x4c4660(0x126)](_0x5aa9dd / 0x3e8), _0x3aec38 = Math[_0x4c4660(0x126)](_0x3ee25f / 0x3c), _0x59ae27 = Math[_0x4c4660(0x126)](_0x3aec38 / 0x3c), _0x16b482 = Math[_0x4c4660(0x126)](_0x59ae27 / 0x18);
    if (_0x3ee25f < 0x3c)
        return 'just\x20now';
    if (_0x3aec38 < 0x3c)
        return _0x3aec38 + _0x4c4660(0x14c);
    if (_0x59ae27 < 0x18)
        return _0x59ae27 + 'h\x20ago';
    if (_0x16b482 < 0x7)
        return _0x16b482 + _0x4c4660(0x180);
    return _0x14256f[_0x4c4660(0x178)]();
}
function updateProfileInfo() {
    const _0x56e030 = _0x2079fd, _0x2946ad = document[_0x56e030(0x191)](_0x56e030(0x145)), _0x21fc3b = document['getElementById']('profilePlanDisplay'), _0x1c174f = document[_0x56e030(0x191)]('profileAvatarDisplay');
    let _0x21b92c = null;
    try {
        if (typeof window !== _0x56e030(0x1b5) && window[_0x56e030(0x14e)])
            _0x21b92c = window[_0x56e030(0x14e)];
        else {
            const _0x5c3ba7 = localStorage[_0x56e030(0x181)](_0x56e030(0x14e));
            if (_0x5c3ba7) {
                const _0x362cfb = _0x5c3ba7['trim']();
                _0x362cfb[_0x56e030(0x15c)]('{') && _0x362cfb['endsWith']('}') && (_0x21b92c = JSON['parse'](_0x5c3ba7));
            }
        }
    } catch (_0x11271d) {
        console[_0x56e030(0x1a4)](_0x56e030(0x16a), _0x11271d), _0x21b92c = null;
    }
    const _0x548593 = validateUserObject(_0x21b92c);
    if (!_0x548593 || !_0x548593[_0x56e030(0x18b)]) {
        console[_0x56e030(0x18f)](_0x56e030(0x16e));
        return;
    }
    const _0x514799 = _0x548593[_0x56e030(0x1b9)], _0xb2e847 = escapeHtml((_0x514799[_0x56e030(0x152)] || _0x514799[_0x56e030(0x19b)] || _0x514799[_0x56e030(0x1a0)] || _0x56e030(0x1b0))[_0x56e030(0x190)]()[_0x56e030(0x140)](0x0, 0x64)), _0x4b181b = escapeHtml((_0x514799[_0x56e030(0x19f)] || _0x514799[_0x56e030(0x18d)] || _0x56e030(0x1a7))[_0x56e030(0x190)]()[_0x56e030(0x165)]()['substring'](0x0, 0x32)), _0x2f7a4f = _0x514799['picture'] || _0x514799[_0x56e030(0x15e)] || null;
    _0x2946ad && safeSetText(_0x2946ad, _0xb2e847), _0x21fc3b && safeSetText(_0x21fc3b, _0x4b181b), _0x1c174f && _0x2f7a4f && typeof _0x2f7a4f === _0x56e030(0x136) && (isValidImageUrl(_0x2f7a4f) && safeSetImage(_0x1c174f, _0x2f7a4f, _0xb2e847));
}
function initWhenReady() {
    const _0x54ac64 = _0x2079fd;
    document[_0x54ac64(0x138)] === _0x54ac64(0x120) ? document[_0x54ac64(0x17d)](_0x54ac64(0x157), initializeNotificationSystem) : initializeNotificationSystem();
}
initWhenReady(), window[_0x2079fd(0x131)] = {
    'add': addNotification,
    'showVideoGenerated': showVideoGeneratedNotification,
    'clearUnread': clearUnreadStatus,
    'closeDropdowns': closeAllDropdowns
};