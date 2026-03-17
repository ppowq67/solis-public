console['log']('menu.js\x20file\x20loaded');
let _0x1f1029, _0x3a0996;

function _0x433691(_0xb54075) {
    if (!_0xb54075 || typeof _0xb54075 !== 'string')
        return ![];
    const _0x1c8388 = _0xb54075['trim']()['toLowerCase']();
    if (_0x1c8388['startsWith']('javascript:') || _0x1c8388['startsWith']('data:') || _0x1c8388['startsWith']('vbscript:'))
        return ![];
    return _0x1c8388['startsWith']('http://') || _0x1c8388['startsWith']('https://') || !_0x1c8388['includes'](':');
}

function _0x108c61(_0x1efaf7) {
    if (typeof _0x1efaf7 !== 'string')
        return '';
    const _0x352522 = document['createElement']('div');
    return _0x352522['textContent'] = _0x1efaf7, _0x352522['innerHTML'];
}
const _0x4d8a11 = {
    'userProfile': null,
    'userProfileTime': 0x0,
    'CACHE_DURATION': 0x493e0,
    'getUserProfile'() {
        const _0x2e5fd5 = Date['now']();
        if (this['userProfile'] && _0x2e5fd5 - this['userProfileTime'] < this['CACHE_DURATION'])
            return console['log']('💾\x20Using\x20cached\x20user\x20profile'), this['userProfile'];
        return null;
    },
    'setUserProfile'(_0x57112f) {
        this['userProfile'] = _0x57112f, this['userProfileTime'] = Date['now'](), console['log']('💾\x20Cached\x20user\x20profile');
    }
};
async function _0x587a19() {
    try {
        if (window['currentUser']) {
            console['log']('✅\x20User\x20already\x20loaded\x20in\x20window.currentUser');
            !window['currentUser']['auth_provider'] && await _0x3f9223();
            return;
        }
        const _0x4161ae = _0x4d8a11['getUserProfile']();
        if (_0x4161ae) {
            window['currentUser'] = _0x4161ae, console['log']('✅\x20User\x20loaded\x20from\x20cache'), _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x32);
            return;
        }
        const _0xcb239a = localStorage['getItem']('currentUser');
        if (_0xcb239a)
            try {
                window['currentUser'] = JSON['parse'](_0xcb239a), console['log']('✅\x20User\x20loaded\x20from\x20localStorage');
                !window['currentUser']['auth_provider'] && await _0x3f9223();
                _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x32);
                return;
            } catch (_0x1b1275) {
                console['warn']('Failed\x20to\x20parse\x20saved\x20currentUser', _0x1b1275);
            }
        let _0x80aa1a = {};
        typeof getAuthHeaders === 'function' && (_0x80aa1a = getAuthHeaders());
        console['log']('📡\x20Fetching\x20user\x20profile\x20with\x20headers:', Object['keys'](_0x80aa1a));
        const _0xb655da = await fetch('/api/user/profile', {
            'method': 'GET',
            'headers': _0x80aa1a,
            'credentials': 'include'
        });
        if (_0xb655da['ok']) {
            const _0x4d5b86 = await _0xb655da['json']();
            console['log']('✅\x20Fetched\x20user\x20profile:', _0x4d5b86), console['log']('📸\x20Picture\x20field:', _0x4d5b86['picture'] || _0x4d5b86['avatar'] || _0x4d5b86['photo']), console['log']('🔐\x20Auth\x20provider:', _0x4d5b86['auth_provider']), window['currentUser'] = _0x4d5b86, localStorage['setItem']('currentUser', JSON['stringify'](_0x4d5b86)), _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x64);
        } else
            console['warn']('Failed\x20to\x20fetch\x20user\x20profile:', _0xb655da['status']), await _0x3f9223(), _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x64);
    } catch (_0x359454) {
        console['error']('Error\x20loading\x20current\x20user:', _0x359454), await _0x3f9223(), _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x64);
    }
}
async function _0x3f9223() {
    try {
        let _0x1d0af1 = {};
        typeof getAuthHeaders === 'function' && (_0x1d0af1 = getAuthHeaders());
        const _0x848aa3 = await fetch('/api/user/auth-provider', {
            'method': 'GET',
            'credentials': 'include',
            'headers': _0x1d0af1,
            'credentials': 'include'
        });
        if (_0x848aa3['ok']) {
            const _0x533749 = await _0x848aa3['json']();
            console['log']('✅\x20Fetched\x20auth\x20provider:', _0x533749['auth_provider']), window['currentUser'] && (window['currentUser']['auth_provider'] = _0x533749['auth_provider'], localStorage['setItem']('currentUser', JSON['stringify'](window['currentUser'])), _0x3c3ec0());
        }
    } catch (_0x41954c) {
        console['error']('Error\x20fetching\x20auth\x20provider:', _0x41954c);
    }
}

function _0xbb1fb4() {
    console['log']('openUserMenu\x20called\x20from\x20profile\x20button');
    !_0x1f1029 && (_0x1f1029 = document['getElementById']('userMenuPanel'));
    !_0x3a0996 && (_0x3a0996 = document['getElementById']('userMenuBackdrop'));
    if (!_0x1f1029 || !_0x3a0996) {
        console['error']('Menu\x20elements\x20not\x20found');
        return;
    }
    console['log']('openUserMenu\x20called\x20-\x20adding\x20active\x20class'), _0x1f1029['classList']['add']('active'), _0x3a0996['classList']['add']('active');
    const _0x311b14 = window['innerWidth'] <= 0x300 ? '100%' : '420px',
        _0x44fce4 = window['innerWidth'] <= 0x300 ? '-100%' : '-420px';
    _0x1f1029['style']['cssText'] = 'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20right:\x200\x20!important;\x20width:\x20' + _0x311b14 + '\x20!important;\x20height:\x20100vh\x20!important;\x20z-index:\x209999\x20!important;\x20display:\x20flex\x20!important;\x20flex-direction:\x20column\x20!important;\x20background:\x20white\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;', _0x3a0996['style']['cssText'] = 'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20background:\x20rgba(28,\x2025,\x2023,\x200.5)\x20!important;\x20z-index:\x209998\x20!important;\x20display:\x20block\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;\x20pointer-events:\x20auto\x20!important;', document['body']['style']['overflow'] = 'hidden', console['log']('Menu\x20opened\x20-\x20panel\x20right:', _0x1f1029['style']['right'], 'backdrop\x20opacity:', _0x3a0996['style']['opacity']), _0x5c222e(), setTimeout(() => _0x3c3ec0(), 0x32);
}

function _0x45a6da() {
    if (!_0x1f1029)
        _0x1f1029 = document['getElementById']('userMenuPanel');
    if (!_0x3a0996)
        _0x3a0996 = document['getElementById']('userMenuBackdrop');
    _0x1f1029['classList']['remove']('active'), _0x3a0996['classList']['remove']('active');
    const _0x43cee2 = window['innerWidth'] <= 0x300 ? '100%' : '420px',
        _0x1e178e = window['innerWidth'] <= 0x300 ? '-100%' : '-420px';
    _0x1f1029['style']['cssText'] = 'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20right:\x20' + _0x1e178e + '\x20!important;\x20width:\x20' + _0x43cee2 + '\x20!important;\x20height:\x20100vh\x20!important;\x20z-index:\x209999\x20!important;\x20display:\x20flex\x20!important;\x20flex-direction:\x20column\x20!important;\x20background:\x20white\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;', _0x3a0996['style']['cssText'] = 'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20background:\x20rgba(28,\x2025,\x2023,\x200.5)\x20!important;\x20z-index:\x209998\x20!important;\x20display:\x20block\x20!important;\x20opacity:\x200\x20!important;\x20visibility:\x20hidden\x20!important;\x20pointer-events:\x20none\x20!important;', document['body']['style']['overflow'] = '', console['log']('Menu\x20closed\x20-\x20panel\x20right:', _0x1f1029['style']['right']);
}

function _0x3c3ec0() {
    const _0x2c2a55 = document['getElementById']('profileAvatarBtn');
    if (!_0x2c2a55) {
        console['warn']('⚠️\x20profileAvatarBtn\x20element\x20not\x20found');
        return;
    }
    let _0x2136c0 = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0x2136c0 = window['currentUser'];
        else {
            const _0x3f64ea = localStorage['getItem']('currentUser');
            if (_0x3f64ea)
                _0x2136c0 = JSON['parse'](_0x3f64ea);
        }
    } catch (_0x870436) {
        console['error']('Failed\x20to\x20read\x20currentUser\x20for\x20profile\x20button', _0x870436);
        return;
    }
    console['log']('🔍\x20updateProfileButton\x20-\x20userObj:', _0x2136c0);
    const _0x599a11 = _0x2136c0?.['picture'] || _0x2136c0?.['avatar'] || _0x2136c0?.['photo'] || _0x2136c0?.['profilePicture'] || null,
        _0x1f62a8 = _0x2136c0?.['name'] || _0x2136c0?.['displayName'] || _0x2136c0?.['email'] || 'User',
        _0x3e3821 = _0x2136c0?.['auth_provider'] || 'email';
    console['log']('📸\x20Profile\x20picture\x20URL:', _0x599a11), console['log']('👤\x20User\x20name:', _0x1f62a8), console['log']('🔐\x20Auth\x20provider:', _0x3e3821);
    if (_0x3e3821 && _0x3e3821['toLowerCase']()['includes']('google')) {
        console['log']('✅\x20Displaying\x20Gmail\x20icon\x20for\x20Google\x20OAuth\x20user'), _0x2c2a55['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22currentColor\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Gmail/Google\x20icon\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20\x204H4C2.9\x204\x202.01\x204.9\x202.01\x206L2\x2018c0\x201.1.9\x202\x202\x202h16c1.1\x200\x202-.9\x202-2V6c0-1.1-.9-2-2-2zm0\x204l-8\x205-8-5V6l8\x205\x208-5v2z\x22\x20fill=\x22#EA4335\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        return;
    }
    if (_0x2136c0 && _0x599a11 && _0x599a11['trim']() !== '' && _0x433691(_0x599a11)) {
        console['log']('✅\x20Setting\x20profile\x20picture\x20from\x20validated\x20URL');
        const _0x17e5d3 = document['createElement']('img');
        _0x17e5d3['src'] = _0x599a11, _0x17e5d3['alt'] = _0x1f62a8, _0x17e5d3['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;\x20display:\x20block;', _0x17e5d3['onerror'] = () => {
            console['warn']('Failed\x20to\x20load\x20profile\x20image,\x20keeping\x20SVG');
        }, _0x17e5d3['onload'] = () => {
            console['log']('✅\x20Profile\x20image\x20loaded\x20successfully');
        };
        const _0x5d10eb = document['createElement']('div');
        _0x5d10eb['appendChild'](_0x17e5d3), _0x2c2a55['innerHTML'] = _0x5d10eb['innerHTML'];
    } else
        console['log']('⚠️\x20No\x20user\x20picture\x20found\x20-\x20userObj\x20exists:', !!_0x2136c0, 'picture\x20field:', _0x599a11);
}
async function _0x5357bd() {
    const _0x452608 = document['getElementById']('dropdownUserName'),
        _0x21c47f = document['getElementById']('dropdownUserPlan'),
        _0x4bc0cb = document['getElementById']('dropdownUserAvatar');
    console['log']('🔍\x20updateProfileDropdown\x20called\x20-\x20Elements\x20found:', {
        'dropdownUserName': !!_0x452608,
        'dropdownUserPlan': !!_0x21c47f,
        'dropdownUserAvatar': !!_0x4bc0cb
    });
    let _0x8ec923 = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0x8ec923 = window['currentUser'];
        else {
            const _0x1e168f = localStorage['getItem']('currentUser');
            if (_0x1e168f)
                _0x8ec923 = JSON['parse'](_0x1e168f);
        }
    } catch (_0x598acd) {
        console['error']('Failed\x20to\x20read\x20currentUser\x20for\x20dropdown', _0x598acd);
        return;
    }
    console['log']('👤\x20currentUser\x20object:', _0x8ec923);
    if (!_0x8ec923) {
        if (_0x452608)
            _0x452608['textContent'] = 'Guest\x20User';
        if (_0x21c47f)
            _0x21c47f['textContent'] = 'Free\x20Plan';
        return;
    }
    const _0x147caa = _0x8ec923['name'] || _0x8ec923['displayName'] || _0x8ec923['email'] || 'User';
    if (_0x452608)
        _0x452608['textContent'] = _0x147caa;
    try {
        const _0x2c34c6 = await fetch('/api/user/profile', {
            'method': 'GET',
            'credentials': 'include'
        });
        if (_0x2c34c6['ok']) {
            const _0x5b6221 = await _0x2c34c6['json']();
            console['log']('📋\x20API\x20Response\x20for\x20profile:', _0x5b6221);
            const _0x91bfdd = _0x5b6221['plan'] || _0x8ec923['plan'] || 'Free',
                _0x501ccc = _0x91bfdd['charAt'](0x0)['toUpperCase']() + _0x91bfdd['slice'](0x1) + '\x20Plan';
            console['log']('💰\x20Plan\x20display\x20text:', _0x501ccc);
            const _0x1acf36 = document['getElementById']('dropdownUserPlan');
            _0x1acf36 ? (_0x1acf36['textContent'] = _0x501ccc, console['log']('✅\x20Updated\x20dropdownUserPlan\x20to:', _0x501ccc)) : console['warn']('⚠️\x20dropdownUserPlan\x20element\x20not\x20found!');
            if (window['currentUser'])
                window['currentUser']['plan'] = _0x91bfdd;
        } else {
            console['warn']('❌\x20Profile\x20API\x20returned\x20non-ok\x20status:', _0x2c34c6['status']);
            const _0x26a414 = _0x8ec923['plan'] || 'Free',
                _0x3a96aa = _0x26a414['charAt'](0x0)['toUpperCase']() + _0x26a414['slice'](0x1) + '\x20Plan',
                _0x4c54a2 = document['getElementById']('dropdownUserPlan');
            _0x4c54a2 && (_0x4c54a2['textContent'] = _0x3a96aa, console['log']('📝\x20Fallback:\x20Updated\x20dropdownUserPlan\x20to:', _0x3a96aa));
        }
    } catch (_0x5a7d89) {
        console['error']('Failed\x20to\x20fetch\x20plan\x20info:', _0x5a7d89);
        const _0x360170 = _0x8ec923['plan'] || 'Free',
            _0x278ad4 = _0x360170['charAt'](0x0)['toUpperCase']() + _0x360170['slice'](0x1) + '\x20Plan',
            _0x423f87 = document['getElementById']('dropdownUserPlan');
        _0x423f87 && (_0x423f87['textContent'] = _0x278ad4, console['log']('🔄\x20Error\x20fallback:\x20Updated\x20dropdownUserPlan\x20to:', _0x278ad4));
    }
    const _0x19a1ca = _0x8ec923?.['picture'] || _0x8ec923?.['avatar'] || _0x8ec923?.['photo'] || null;
    if (_0x4bc0cb) {
        if (_0x19a1ca && _0x19a1ca['trim']() !== '') {
            console['log']('✅\x20Setting\x20dropdown\x20avatar\x20from:', _0x19a1ca);
            const _0x11f3ef = document['createElement']('img');
            _0x11f3ef['src'] = _0x19a1ca, _0x11f3ef['alt'] = _0x147caa, _0x11f3ef['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;\x20display:\x20block;', _0x11f3ef['onerror'] = () => {
                console['warn']('Failed\x20to\x20load\x20dropdown\x20avatar\x20image');
            }, _0x4bc0cb['innerHTML'] = '', _0x4bc0cb['appendChild'](_0x11f3ef);
        }
    }
}

function _0x5c222e() {
    const _0x2f937a = document['getElementById']('menuUserName'),
        _0x2a0247 = document['getElementById']('menuUserEmail'),
        _0x3e05d6 = document['getElementById']('menuUserAvatar'),
        _0x40d62b = document['getElementById']('profileNameDisplay'),
        _0xca8ec6 = document['getElementById']('emailDisplay');
    let _0x3d6411 = null;
    try {
        if (typeof window !== 'undefined' && window['currentUser'])
            _0x3d6411 = window['currentUser'];
        else {
            const _0x3a7b9c = localStorage['getItem']('currentUser');
            if (_0x3a7b9c)
                _0x3d6411 = JSON['parse'](_0x3a7b9c);
        }
    } catch (_0x222ecd) {
        console['error']('menu:\x20failed\x20to\x20read\x20currentUser', _0x222ecd), _0x3d6411 = null;
    }
    console['log']('🔍\x20updateMenuUserInfo\x20-\x20userObj:', _0x3d6411);
    const _0x861e50 = _0x3d6411?.['picture'] || _0x3d6411?.['avatar'] || _0x3d6411?.['photo'] || _0x3d6411?.['profilePicture'] || null;
    console['log']('📸\x20Menu\x20avatar\x20picture\x20URL:', _0x861e50);
    if (_0x3d6411) {
        const _0xe9a18 = _0x3d6411['name'] || _0x3d6411['displayName'] || _0x3d6411['first_name'] || _0x3d6411['firstName'] || 'User',
            _0x5ed3b5 = _0x3d6411['email'] || _0x3d6411['username'] || '';
        if (_0x2f937a)
            _0x2f937a['textContent'] = _0xe9a18;
        if (_0x2a0247)
            _0x2a0247['textContent'] = _0x5ed3b5;
        if (_0x40d62b)
            _0x40d62b['textContent'] = _0xe9a18;
        if (_0xca8ec6)
            _0xca8ec6['textContent'] = _0x5ed3b5;
        if (_0x3e05d6) {
            if (_0x861e50 && _0x433691(_0x861e50)) {
                console['log']('✅\x20Setting\x20menu\x20avatar\x20from\x20validated\x20URL'), _0x3e05d6['innerHTML'] = '';
                const _0xe761fc = document['createElement']('img');
                _0xe761fc['src'] = _0x861e50, _0xe761fc['alt'] = _0xe9a18, _0xe761fc['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;', _0xe761fc['onerror'] = () => {
                    console['warn']('Failed\x20to\x20load\x20menu\x20avatar\x20image');
                }, _0x3e05d6['appendChild'](_0xe761fc);
            } else
                console['log']('⚠️\x20No\x20picture\x20or\x20invalid\x20URL\x20for\x20menu\x20avatar');
        }
    } else {
        if (_0x2f937a)
            _0x2f937a['textContent'] = 'Guest\x20User';
        if (_0x2a0247)
            _0x2a0247['textContent'] = 'unknown@gmail.com';
        if (_0x40d62b)
            _0x40d62b['textContent'] = 'Guest\x20User';
        if (_0xca8ec6)
            _0xca8ec6['textContent'] = 'unknown@gmail.com';
    }
    _0x5357bd();
}

function _0x11a40e() {
    console['log']('initUserMenu\x20called'), console['log']('Document\x20ready\x20state:', document['readyState']), _0x1f1029 = document['getElementById']('userMenuPanel'), _0x3a0996 = document['getElementById']('userMenuBackdrop');
    const _0x47cf06 = document['getElementById']('closeUserMenu');
    console['log']('Elements\x20found:', {
        'userMenuPanel': !!_0x1f1029,
        'userMenuBackdrop': !!_0x3a0996,
        'closeUserMenuBtn': !!_0x47cf06
    });
    const _0x5ef964 = document['getElementById']('menuSubscription'),
        _0x349205 = document['getElementById']('menuPreferences'),
        _0x3680c1 = document['getElementById']('menuHelp'),
        _0x428339 = document['getElementById']('menuFeedback'),
        _0x543704 = document['getElementById']('menuLogout'),
        _0x597d1c = document['getElementById']('menuViewProfile'),
        _0x49d166 = document['getElementById']('menuMyContent'),
        _0x3f6042 = document['getElementById']('editProfileNameBtn'),
        _0x18af9d = document['getElementById']('editEmailBtn'),
        _0x12d87f = document['getElementById']('changePasswordBtn');
    if (!_0x1f1029) {
        console['error']('menu:\x20ERROR\x20-\x20userMenuPanel\x20not\x20found!');
        return;
    }
    _0x3c3ec0(), _0x5357bd(), _0x587a19();
    _0x47cf06 ? (console['log']('Close\x20button\x20found,\x20attaching\x20listener'), _0x47cf06['addEventListener']('click', _0x373c66 => {
        console['log']('Close\x20button\x20clicked'), _0x373c66['stopPropagation'](), _0x45a6da();
    })) : console['warn']('Close\x20button\x20element\x20not\x20found\x20with\x20ID:\x20closeUserMenu');
    _0x3a0996 && _0x3a0996['addEventListener']('click', _0x45a6da);
    _0x349205 && _0x349205['addEventListener']('click', () => {
        console['log']('Preferences\x20clicked');
    });
    const _0x5eb777 = document['getElementById']('notificationsToggle');
    _0x5eb777 && _0x5eb777['addEventListener']('click', _0x95eea7 => {
        _0x95eea7['stopPropagation'](), console['log']('Notifications\x20toggle\x20clicked'), _0x5eb777['classList']['toggle']('active');
        const _0x717d1e = _0x5eb777['querySelector']('div');
        _0x717d1e && (_0x5eb777['classList']['contains']('active') ? _0x717d1e['style']['right'] = '3px' : _0x717d1e['style']['right'] = '21px');
    });
    if (_0x5eb777 && _0x5eb777['classList']['contains']('active')) {
        const _0x4fd986 = _0x5eb777['querySelector']('div');
        if (_0x4fd986)
            _0x4fd986['style']['right'] = '3px';
    }
    _0x3f6042 && _0x3f6042['addEventListener']('click', _0x5b3d67 => {
        _0x5b3d67['stopPropagation'](), console['log']('Edit\x20profile\x20name\x20clicked');
    }), _0x18af9d && _0x18af9d['addEventListener']('click', _0x3f7ebf => {
        _0x3f7ebf['stopPropagation'](), console['log']('Edit\x20email\x20clicked');
    }), _0x12d87f && _0x12d87f['addEventListener']('click', _0x494893 => {
        _0x494893['stopPropagation'](), console['log']('Change\x20password\x20clicked');
    }), _0x3680c1 && _0x3680c1['addEventListener']('click', () => {
        _0x45a6da(), window['open']('https://discord.gg/vtPJtQhjNy', '_blank');
    }), _0x428339 && _0x428339['addEventListener']('click', () => {
        _0x45a6da(), console['log']('Open\x20feedback');
    }), _0x597d1c && _0x597d1c['addEventListener']('click', () => {
        _0x45a6da(), window['location']['href'] = '/dashboard.html';
    }), _0x49d166 && _0x49d166['addEventListener']('click', () => {
        _0x45a6da(), console['log']('View\x20my\x20content');
    }), _0x543704 && _0x543704['addEventListener']('click', async () => {
        _0x45a6da();
        try {
            typeof clearUserData === 'function' && clearUserData();
        } catch (_0x38ecc6) {
            console['error']('Error\x20clearing\x20user\x20data:', _0x38ecc6);
        }
        console['log']('🔐\x20Logging\x20out...');
        try {
            localStorage['removeItem']('authToken'), localStorage['removeItem']('currentUser');
            const _0x1939b7 = Object['keys'](localStorage);
            _0x1939b7['forEach'](_0xd69a23 => {
                (_0xd69a23['includes']('solisai_') || _0xd69a23['includes']('auth') || _0xd69a23['includes']('user')) && localStorage['removeItem'](_0xd69a23);
            }), sessionStorage['clear'](), window['API_BASE_URL'] && await fetch(window['API_BASE_URL'] + '/?action=logout', {
                'method': 'POST',
                'credentials': 'include'
            });
        } catch (_0x4eee80) {
            console['warn']('⚠️\x20Logout\x20API\x20call\x20failed:', _0x4eee80);
        }
        console['log']('📍\x20Redirecting\x20to\x20login...'), window['location']['href'] = '/login.html?logout=1';
    }), window['addEventListener']('storage', _0x1fde35 => {
        _0x1fde35['key'] === 'currentUser' && (console['log']('currentUser\x20changed\x20in\x20localStorage,\x20updating\x20profile\x20button'), _0x3c3ec0());
    }), document['addEventListener']('user-login', () => {
        console['log']('User\x20logged\x20in,\x20updating\x20profile\x20button'), _0x3c3ec0();
    }), document['addEventListener']('user-logout', () => {
        console['log']('User\x20logged\x20out,\x20resetting\x20profile\x20button'), _0x3c3ec0();
    }), window['solisMenuDebug'] = {
        'openUserMenu': _0xbb1fb4,
        'closeUserMenuPanel': _0x45a6da,
        'userMenuPanel': _0x1f1029,
        'userMenuBackdrop': _0x3a0996,
        'updateProfileButton': _0x3c3ec0,
        'closeUserMenuBtn': _0x47cf06
    };
}
let _0x143f21 = ![];

function _0x1a7f00() {
    if (_0x143f21) {
        console['log']('Menu\x20already\x20initialized,\x20skipping');
        return;
    }
    _0x143f21 = !![], console['log']('Initializing\x20menu\x20system'), _0x11a40e();
}
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x1a7f00) : _0x1a7f00();