console['log']('profile-notifications.js\x20loaded');

function _0x249bf2(_0x433fd0) {
    if (typeof _0x433fd0 !== 'string')
        return '';
    const _0x5caed0 = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\x22': '&quot;',
        '\x27': '&#x27;',
        '/': '&#x2F;'
    };
    return _0x433fd0['replace'](/[&<>"'\/]/g, _0x4ad0d0 => _0x5caed0[_0x4ad0d0] || _0x4ad0d0);
}

function _0x2cef12(_0x5903d3) {
    if (typeof _0x5903d3 !== 'string' || _0x5903d3['length'] === 0x0)
        return ![];
    if (_0x5903d3['length'] > 0x800)
        return ![];
    try {
        const _0x303007 = new URL(_0x5903d3);
        if (!/^https?:$/ ['test'](_0x303007['protocol']))
            return ![];
        if (_0x5903d3['toLowerCase']()['includes']('javascript:'))
            return ![];
        if (_0x5903d3['toLowerCase']()['includes']('data:'))
            return ![];
        if (_0x5903d3['toLowerCase']()['includes']('vbscript:'))
            return ![];
        return !![];
    } catch {
        return ![];
    }
}

function _0x10db36(_0xd4ec68, _0x25ddbc) {
    _0xd4ec68 && typeof _0x25ddbc === 'string' && (_0xd4ec68['textContent'] = _0x25ddbc);
}

function _0x38eda2(_0x5a147d, _0x429559, _0x30a9b1 = '') {
    if (!_0x5a147d)
        return;
    if (!_0x2cef12(_0x429559)) {
        console['warn']('Invalid\x20image\x20URL');
        return;
    }
    const _0xb4beb0 = document['createElement']('img');
    _0xb4beb0['setAttribute']('src', _0x429559), _0xb4beb0['setAttribute']('alt', _0x249bf2(_0x30a9b1)), _0xb4beb0['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;';
    while (_0x5a147d['firstChild']) {
        _0x5a147d['removeChild'](_0x5a147d['firstChild']);
    }
    _0x5a147d['appendChild'](_0xb4beb0);
}

function _0xf9e1d3(_0x3b8551) {
    if (!_0x3b8551 || typeof _0x3b8551 !== 'object')
        return {
            'valid': ![]
        };
    const _0x3d63ac = _0x3b8551['id'] || _0x3b8551['user_id'] || _0x3b8551['sub'],
        _0x1e6786 = _0x3b8551['email'] || _0x3b8551['name'] || _0x3b8551['displayName'];
    if (_0x3d63ac || _0x1e6786)
        return {
            'valid': !![],
            'user': _0x3b8551
        };
    return {
        'valid': ![]
    };
}
let _0x591621 = {
    'unreadCount': 0x0,
    'notifications': [],
    'bellElement': null,
    'profileElement': null,
    'notificationsDropdown': null,
    'profileDropdown': null,
    'initialized': ![]
};

function _0x518740() {
    if (_0x591621['initialized'])
        return;
    console['log']('Initializing\x20notification\x20system...'), _0x591621['bellElement'] = document['getElementById']('bellBtn'), _0x591621['profileElement'] = document['getElementById']('profileAvatarBtn'), _0x591621['notificationsDropdown'] = document['getElementById']('notificationsDropdown');
    if (!_0x591621['bellElement'] || !_0x591621['profileElement']) {
        console['warn']('Required\x20notification\x20elements\x20not\x20found');
        return;
    }
    console['log']('✅\x20Notification\x20elements\x20found'), _0x31e643(), _0x2bba08(), _0x16a1d1(), _0x591621['initialized'] = !![], _0x16a1d1();
}

function _0x16a1d1() {
    const _0x24fd4f = document['getElementById']('profileAvatarBtn');
    if (!_0x24fd4f)
        return;
    let _0x3be7fe = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0x3be7fe = window['currentUser'];
        else {
            const _0x5caa83 = localStorage['getItem']('currentUser');
            if (_0x5caa83) {
                const _0x4bd1dc = _0x5caa83['trim']();
                _0x4bd1dc['startsWith']('{') && _0x4bd1dc['endsWith']('}') && (_0x3be7fe = JSON['parse'](_0x5caa83));
            }
        }
    } catch (_0x554e87) {
        console['error']('Error\x20syncing\x20profile:', _0x554e87), _0x3be7fe = null;
    }
    const _0x5b9162 = _0xf9e1d3(_0x3be7fe);
    if (!_0x5b9162 || !_0x5b9162['valid']) {
        console['warn']('Invalid\x20user\x20object');
        return;
    }
    const _0x1d39d0 = _0x5b9162['user'],
        _0x2452c7 = (_0x1d39d0['auth_provider'] || '')['toString']()['toLowerCase'](),
        _0x17a256 = _0x1d39d0['picture'] || _0x1d39d0['avatar'] || null,
        _0xde1b66 = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22currentColor\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22><rect\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22/><path\x20d=\x22M20\x204H4C2.9\x204\x202.01\x204.9\x202.01\x206L2\x2018c0\x201.1.9\x202\x202\x202h16c1.1\x200\x202-.9\x202-2V6c0-1.1-.9-2-2-2zm0\x204l-8\x205-8-5V6l8\x205\x208-5v2z\x22\x20fill=\x22#EA4335\x22/></svg>';
    while (_0x24fd4f['firstChild']) {
        _0x24fd4f['removeChild'](_0x24fd4f['firstChild']);
    }
    if (_0x2452c7['includes']('google'))
        console['log']('Displaying\x20Gmail\x20icon\x20for\x20Google\x20OAuth\x20user'), _0x24fd4f['innerHTML'] = _0xde1b66;
    else
        _0x17a256 && typeof _0x17a256 === 'string' && (_0x2cef12(_0x17a256) ? _0x38eda2(_0x24fd4f, _0x17a256, 'User\x20Avatar') : console['warn']('Invalid\x20avatar\x20URL'));
}

function _0x31e643() {
    const _0x5c6dae = _0x591621['bellElement'],
        _0x277d04 = _0x591621['notificationsDropdown'];
    _0x5c6dae['addEventListener']('click', _0x3a2787 => {
        _0x3a2787['stopPropagation']();
        const _0x4249a4 = _0x277d04['classList']['contains']('open');
        _0xc1cccd(), !_0x4249a4 && (_0x277d04['classList']['add']('open'), _0x6f264a());
    }), document['addEventListener']('click', _0xc1cccd);
    const _0x5b1f47 = document['getElementById']('markAsRead');
    _0x5b1f47 && _0x5b1f47['addEventListener']('click', _0x10b136 => {
        _0x10b136['preventDefault'](), _0x6f264a();
    });
}

function _0xc1cccd() {
    const _0x547d04 = _0x591621['notificationsDropdown'];
    if (_0x547d04)
        _0x547d04['classList']['remove']('open');
}

function _0x2bba08() {
    try {
        const _0x130c15 = localStorage['getItem']('notificationSystem');
        if (_0x130c15) {
            const _0x320028 = JSON['parse'](_0x130c15);
            _0x591621['notifications'] = _0x320028['notifications'] || [], _0x591621['unreadCount'] = _0x320028['unreadCount'] || 0x0, _0xa0c08d();
        }
    } catch (_0x2d045c) {
        console['error']('Error\x20loading\x20notifications:', _0x2d045c);
    }
}

function _0x5bb022() {
    try {
        localStorage['setItem']('notificationSystem', JSON['stringify']({
            'notifications': _0x591621['notifications'],
            'unreadCount': _0x591621['unreadCount']
        }));
    } catch (_0xc61e03) {
        console['error']('Error\x20saving\x20notifications:', _0xc61e03);
    }
}

function _0x44fc1e(_0x213d32) {
    if (!_0x213d32 || typeof _0x213d32 !== 'object')
        return console['error']('Invalid\x20notification\x20object'), null;
    const _0x31f89a = (_0x4fe6dd, _0xcbe1eb = 0x1f4) => {
            if (typeof _0x4fe6dd !== 'string')
                return '';
            return _0x249bf2(_0x4fe6dd['substring'](0x0, _0xcbe1eb));
        },
        _0x31fc45 = {
            'id': Date['now'](),
            'title': _0x31f89a(_0x213d32['title'] || 'Notification', 0x64),
            'message': _0x31f89a(_0x213d32['message'] || 'New\x20notification', 0x1f4),
            'icon': _0x213d32['icon'] || 'info',
            'timestamp': _0x213d32['timestamp'] || new Date(),
            'read': _0x213d32['read'] === !![],
            ..._0x213d32
        },
        _0x56c739 = [
            'check',
            'info',
            'warning',
            'error',
            'default'
        ];
    return !_0x56c739['includes'](_0x31fc45['icon']) && (_0x31fc45['icon'] = 'default'), _0x591621['notifications']['unshift'](_0x31fc45), _0x591621['unreadCount']++, _0x591621['notifications']['length'] > 0x32 && (_0x591621['notifications'] = _0x591621['notifications']['slice'](0x0, 0x32)), _0x5bb022(), _0xa0c08d(), _0x31fc45;
}

function _0x21ad75(_0xb06c3a = {}) {
    console['log']('🎬\x20Showing\x20video\x20generated\x20notification', _0xb06c3a);
    const {
        videoTitle: videoTitle = 'Video\x20Generated',
        videoUrl: videoUrl = '#',
        thumbnailUrl: thumbnailUrl = null,
        duration: duration = 0x0
    } = _0xb06c3a;
    _0x1eec09(videoTitle, videoUrl), _0x44fc1e({
        'title': 'Video\x20Generated',
        'message': 'Your\x20video\x20\x22' + videoTitle + '\x22\x20has\x20been\x20successfully\x20created\x20and\x20is\x20ready\x20to\x20download.',
        'icon': 'check',
        'action': {
            'label': 'View\x20Video',
            'url': videoUrl
        }
    });
}

function _0x1eec09(_0x3d6135 = 'Video\x20Ready!', _0x34c8a3 = '#') {
    const _0x474a1b = document['getElementById']('videoGeneratedBackdrop'),
        _0x1daade = document['getElementById']('videoGeneratedOverlay');
    if (!_0x474a1b || !_0x1daade) {
        console['warn']('Video\x20generated\x20overlay\x20elements\x20not\x20found');
        return;
    }
    const _0x196c1b = _0x1daade['querySelector']('.video-generated-title'),
        _0x55cb8d = _0x1daade['querySelector']('.video-generated-message'),
        _0xe2315b = _0x1daade['querySelector']('[data-action=\x22view\x22]');
    if (_0x196c1b)
        _0x196c1b['textContent'] = _0x3d6135;
    if (_0x55cb8d)
        _0x55cb8d['textContent'] = 'Your\x20video\x20has\x20been\x20successfully\x20generated\x20and\x20is\x20ready\x20to\x20download\x20or\x20share.';
    _0xe2315b && (_0xe2315b['onclick'] = () => {
        _0x34c8a3 !== '#' && window['open'](_0x34c8a3, '_blank'), _0x283c92();
    }), _0x474a1b['classList']['add']('show'), _0x1daade['classList']['add']('show'), setTimeout(_0x283c92, 0x1f40);
}

function _0x283c92() {
    const _0x3e60cd = document['getElementById']('videoGeneratedBackdrop'),
        _0x870230 = document['getElementById']('videoGeneratedOverlay');
    if (_0x3e60cd)
        _0x3e60cd['classList']['remove']('show');
    if (_0x870230)
        _0x870230['classList']['remove']('show');
}

function _0xa0c08d() {
    const _0x5047b2 = _0x591621['bellElement'];
    if (!_0x5047b2)
        return;
    const _0x2cd254 = _0x591621['unreadCount'] > 0x0;
    _0x2cd254 ? _0x5047b2['classList']['add']('has-unread') : _0x5047b2['classList']['remove']('has-unread'), _0x10d78a();
}

function _0x10d78a() {
    const _0x2e9ac1 = document['getElementById']('notificationsList');
    if (!_0x2e9ac1)
        return;
    while (_0x2e9ac1['firstChild']) {
        _0x2e9ac1['removeChild'](_0x2e9ac1['firstChild']);
    }
    if (_0x591621['notifications']['length'] === 0x0) {
        const _0x1f2874 = document['createElement']('div');
        _0x1f2874['style']['cssText'] = 'padding:\x2020px;\x20text-align:\x20center;\x20color:\x20#718096;', _0x10db36(_0x1f2874, 'No\x20notifications'), _0x2e9ac1['appendChild'](_0x1f2874);
        return;
    }
    _0x591621['notifications']['forEach'](_0x590975 => {
        if (!_0x590975 || typeof _0x590975 !== 'object')
            return;
        const _0x2396e2 = document['createElement']('div');
        _0x2396e2['className'] = 'notif-item';
        const _0x47e07c = document['createElement']('div');
        _0x47e07c['className'] = 'notif-icon';
        const _0x4946a3 = document['createElement']('svg');
        _0x4946a3['setAttribute']('width', '18'), _0x4946a3['setAttribute']('height', '18'), _0x4946a3['setAttribute']('viewBox', '0\x200\x2024\x2024'), _0x4946a3['setAttribute']('fill', 'none'), _0x4946a3['setAttribute']('stroke', 'currentColor'), _0x4946a3['setAttribute']('stroke-linecap', 'round'), _0x4946a3['setAttribute']('stroke-linejoin', 'round'), _0x4946a3['innerHTML'] = _0x55026e(_0x590975['icon']), _0x47e07c['appendChild'](_0x4946a3);
        const _0x44e7b0 = document['createElement']('div');
        _0x44e7b0['className'] = 'notif-content';
        const _0x122b41 = document['createElement']('div');
        _0x122b41['className'] = 'notif-sender', _0x10db36(_0x122b41, _0x590975['title']);
        const _0x12102e = document['createElement']('div');
        _0x12102e['className'] = 'notif-message', _0x10db36(_0x12102e, _0x590975['message']);
        const _0x12741b = document['createElement']('div');
        _0x12741b['className'] = 'notif-time', _0x10db36(_0x12741b, _0xea3cea(_0x590975['timestamp'])), _0x44e7b0['appendChild'](_0x122b41), _0x44e7b0['appendChild'](_0x12102e), _0x44e7b0['appendChild'](_0x12741b), _0x2396e2['appendChild'](_0x47e07c), _0x2396e2['appendChild'](_0x44e7b0), _0x2e9ac1['appendChild'](_0x2396e2);
    });
}

function _0x55026e(_0x1652e4) {
    const _0x3688bc = {
        'check': '<path\x20d=\x22M22\x2011.08V12a10\x2010\x200\x201\x201-5.93-9.14\x22></path><polyline\x20points=\x2222\x204\x2012\x2014.01\x209\x2011.01\x22></polyline>',
        'info': '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line><line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212.01\x22\x20y2=\x228\x22></line>',
        'warning': '<path\x20d=\x22M10.29\x203.86L1.82\x2018a2\x202\x200\x200\x200\x201.71\x203.05h16.94a2\x202\x200\x200\x200\x201.71-3.05L13.71\x203.86a2\x202\x200\x200\x200-3.42\x200z\x22></path><line\x20x1=\x2212\x22\x20y1=\x229\x22\x20x2=\x2212\x22\x20y2=\x2213\x22></line><line\x20x1=\x2212\x22\x20y1=\x2217\x22\x20x2=\x2212.01\x22\x20y2=\x2217\x22></line>',
        'error': '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><line\x20x1=\x2215\x22\x20y1=\x229\x22\x20x2=\x229\x22\x20y2=\x2215\x22></line><line\x20x1=\x229\x22\x20y1=\x229\x22\x20x2=\x2215\x22\x20y2=\x2215\x22></line>',
        'default': '<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle><path\x20d=\x22M12\x2016v-4M12\x208h.01\x22></path>'
    };
    return _0x3688bc[_0x1652e4] || _0x3688bc['default'];
}

function _0x6f264a() {
    _0x591621['unreadCount'] = 0x0, _0x591621['notifications']['forEach'](_0xee596a => _0xee596a['read'] = !![]), _0x5bb022(), _0xa0c08d();
}

function _0xea3cea(_0x18e98e) {
    typeof _0x18e98e === 'string' && (_0x18e98e = new Date(_0x18e98e));
    const _0x1d8e68 = new Date(),
        _0x574731 = _0x1d8e68 - _0x18e98e,
        _0x212d66 = Math['floor'](_0x574731 / 0x3e8),
        _0x984331 = Math['floor'](_0x212d66 / 0x3c),
        _0x4b9bb8 = Math['floor'](_0x984331 / 0x3c),
        _0x133b35 = Math['floor'](_0x4b9bb8 / 0x18);
    if (_0x212d66 < 0x3c)
        return 'just\x20now';
    if (_0x984331 < 0x3c)
        return _0x984331 + 'm\x20ago';
    if (_0x4b9bb8 < 0x18)
        return _0x4b9bb8 + 'h\x20ago';
    if (_0x133b35 < 0x7)
        return _0x133b35 + 'd\x20ago';
    return _0x18e98e['toLocaleDateString']();
}

function _0x36f4bb() {
    const _0x2df604 = document['getElementById']('profileNameDisplay'),
        _0x113130 = document['getElementById']('profilePlanDisplay'),
        _0x54ee70 = document['getElementById']('profileAvatarDisplay');
    let _0xd59efc = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0xd59efc = window['currentUser'];
        else {
            const _0x223565 = localStorage['getItem']('currentUser');
            if (_0x223565) {
                const _0x8ed463 = _0x223565['trim']();
                _0x8ed463['startsWith']('{') && _0x8ed463['endsWith']('}') && (_0xd59efc = JSON['parse'](_0x223565));
            }
        }
    } catch (_0x4fc7a9) {
        console['error']('Error\x20reading\x20user\x20data:', _0x4fc7a9), _0xd59efc = null;
    }
    const _0x55dad4 = _0xf9e1d3(_0xd59efc);
    if (!_0x55dad4 || !_0x55dad4['valid']) {
        console['warn']('Invalid\x20user\x20object');
        return;
    }
    const _0x5c4323 = _0x55dad4['user'],
        _0x36576b = _0x249bf2((_0x5c4323['name'] || _0x5c4323['displayName'] || _0x5c4323['email'] || 'User')['toString']()['substring'](0x0, 0x64)),
        _0x4d08cf = _0x249bf2((_0x5c4323['tier'] || _0x5c4323['plan'] || 'Free\x20Plan')['toString']()['toUpperCase']()['substring'](0x0, 0x32)),
        _0x4032ef = _0x5c4323['picture'] || _0x5c4323['avatar'] || null;
    _0x2df604 && _0x10db36(_0x2df604, _0x36576b), _0x113130 && _0x10db36(_0x113130, _0x4d08cf), _0x54ee70 && _0x4032ef && typeof _0x4032ef === 'string' && (_0x2cef12(_0x4032ef) && _0x38eda2(_0x54ee70, _0x4032ef, _0x36576b));
}

function _0x53abb8() {
    document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x518740) : _0x518740();
}
_0x53abb8(), window['notificationSystem'] = {
    'add': _0x44fc1e,
    'showVideoGenerated': _0x21ad75,
    'clearUnread': _0x6f264a,
    'closeDropdowns': _0xc1cccd
};