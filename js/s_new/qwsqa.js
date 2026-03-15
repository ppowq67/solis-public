const _0x4ca0d7 = {
    'MAX_STRING_LENGTH': 0x1f4,
    'MAX_EMAIL_LENGTH': 0xfe,
    'MAX_USERNAME_LENGTH': 0x64,
    'MAX_ERROR_MSG_LENGTH': 0xc8,
    'ALLOWED_PLANS': [
        'free',
        'prime',
        'elite'
    ],
    'MAX_VIDEOS_LIMIT': 0x3e8,
    'MAX_STORAGE_GB': 0x2710
};
window['sanitizeString'] = function(_0x20f272) {
    if (typeof _0x20f272 !== 'string')
        return '';
    const _0x3fd4a7 = _0x20f272['substring'](0x0, _0x4ca0d7['MAX_STRING_LENGTH']),
        _0x265d94 = document['createElement']('div');
    return _0x265d94['textContent'] = _0x3fd4a7, _0x265d94['innerHTML'];
}, window['validateNumber'] = function(_0x121b39, _0x576464 = 0x0, _0x32ed03 = Infinity, _0x5c9e89 = 0x0) {
    if (typeof _0x121b39 !== 'number' || isNaN(_0x121b39))
        return _0x5c9e89;
    return Math['max'](_0x576464, Math['min'](_0x32ed03, _0x121b39));
}, window['getSafeErrorMessage'] = function(_0x1a7ad6) {
    if (!_0x1a7ad6)
        return 'An\x20error\x20occurred';
    if (_0x1a7ad6['code'] === 'RATE_LIMIT')
        return 'Too\x20many\x20requests.\x20Please\x20try\x20again\x20later.';
    if (_0x1a7ad6['code'] === 'AUTH_FAILED')
        return 'Authentication\x20failed.\x20Please\x20log\x20in\x20again.';
    if (_0x1a7ad6['code'] === 'PERMISSION_DENIED')
        return 'You\x20do\x20not\x20have\x20permission\x20for\x20this\x20action.';
    if (_0x1a7ad6['code'] === 'SERVER_ERROR')
        return 'Server\x20error.\x20Please\x20try\x20again\x20later.';
    return 'Operation\x20failed.\x20Please\x20try\x20again.';
}, window['isValidImageUrl'] = function(_0x40c6b7) {
    if (!_0x40c6b7 || typeof _0x40c6b7 !== 'string')
        return ![];
    try {
        const _0x18284d = new URL(_0x40c6b7, window['location']['href']);
        return [
            'https:',
            'http:',
            'data:'
        ]['includes'](_0x18284d['protocol']);
    } catch {
        return ![];
    }
}, window['validateUserObject'] = function(_0x5bef64) {
    if (!_0x5bef64 || typeof _0x5bef64 !== 'object')
        return null;
    const _0x581a1b = [
            'name',
            'email',
            'username',
            'picture',
            'avatar',
            'photo',
            'plan',
            'id',
            'tier',
            'youtube_connected'
        ],
        _0x23db2d = {};
    for (const _0x151f63 of _0x581a1b) {
        if (_0x5bef64['hasOwnProperty'](_0x151f63)) {
            const _0x1e8b07 = _0x5bef64[_0x151f63];
            if (_0x151f63 === 'email' && typeof _0x1e8b07 === 'string') {
                if (_0x1e8b07['length'] > _0x4ca0d7['MAX_EMAIL_LENGTH'])
                    return null;
                _0x23db2d[_0x151f63] = window['sanitizeString'](_0x1e8b07);
            } else {
                if (_0x151f63 === 'username' && typeof _0x1e8b07 === 'string') {
                    if (_0x1e8b07['length'] > _0x4ca0d7['MAX_USERNAME_LENGTH'])
                        return null;
                    _0x23db2d[_0x151f63] = window['sanitizeString'](_0x1e8b07);
                } else {
                    if ((_0x151f63 === 'name' || _0x151f63 === 'picture' || _0x151f63 === 'avatar' || _0x151f63 === 'photo') && typeof _0x1e8b07 === 'string') {
                        if (_0x1e8b07['length'] > _0x4ca0d7['MAX_STRING_LENGTH'])
                            return null;
                        _0x23db2d[_0x151f63] = window['sanitizeString'](_0x1e8b07);
                    } else {
                        if (_0x151f63 === 'plan' && typeof _0x1e8b07 === 'string') {
                            if (!_0x4ca0d7['ALLOWED_PLANS']['includes'](_0x1e8b07['toLowerCase']()))
                                return null;
                            _0x23db2d[_0x151f63] = _0x1e8b07['toLowerCase']();
                        } else {
                            if ((_0x151f63 === 'id' || _0x151f63 === 'tier') && (typeof _0x1e8b07 === 'string' || typeof _0x1e8b07 === 'number'))
                                _0x23db2d[_0x151f63] = _0x1e8b07;
                            else
                                _0x151f63 === 'youtube_connected' && typeof _0x1e8b07 === 'boolean' && (_0x23db2d[_0x151f63] = _0x1e8b07);
                        }
                    }
                }
            }
        }
    }
    if (!_0x23db2d['id'] && !_0x23db2d['email'])
        return null;
    return _0x23db2d;
}, window['handleSecureLogout'] = async function() {
    try {
        const _0x4607f0 = await fetch('/api/auth/logout', {
            'method': 'POST',
            'credentials': 'include',
            'headers': window['secureHeaders']()
        });
        !_0x4607f0['ok'] && console['warn']('Logout\x20endpoint\x20returned\x20status:', _0x4607f0['status']);
    } catch (_0x1c484c) {
        console['error']('Error\x20during\x20logout:', _0x1c484c);
    } finally {
        localStorage['removeItem']('token'), localStorage['removeItem']('auth_token'), localStorage['removeItem']('currentUser'), localStorage['removeItem']('userSubscription'), sessionStorage['clear'](), window['currentUser'] && (window['currentUser'] = null), window['location']['href'] = '/login.html?logout=1';
    }
};
async function _0x7305d2(_0x4f7a11) {
    if (!_0x4f7a11) {
        console['warn']('No\x20user\x20provided\x20to\x20updateProfileDropdown');
        return;
    }
    const _0x9a2bee = window['validateUserObject'](_0x4f7a11);
    if (!_0x9a2bee) {
        console['warn']('User\x20object\x20failed\x20validation,\x20skipping\x20dropdown\x20update');
        return;
    }
    console['log']('🔄\x20Updating\x20profile\x20dropdown\x20with\x20validated\x20user');
    const _0x53c945 = document['getElementById']('dropdownUserName'),
        _0x4bf8bd = document['getElementById']('dropdownUserPlan'),
        _0x23807d = document['getElementById']('dropdownUserAvatar');
    if (_0x53c945) {
        const _0x56833f = _0x9a2bee['name'] || _0x9a2bee['username'] || _0x9a2bee['email'] || 'Guest\x20User';
        _0x53c945['textContent'] = _0x56833f, console['log']('✅\x20Updated\x20dropdown\x20name\x20to:', _0x56833f);
    }
    let _0x388541 = 'Free';
    try {
        const _0x163d5f = await fetch('/api/user/profile', {
            'method': 'GET',
            'credentials': 'include',
            'headers': window['secureHeaders']()
        });
        if (_0x163d5f['ok']) {
            const _0x278535 = await _0x163d5f['json']();
            if (_0x278535 && typeof _0x278535 === 'object' && _0x278535['plan'] && typeof _0x278535['plan'] === 'string' && _0x278535['plan']['length'] > 0x0) {
                const _0x1a9250 = _0x278535['plan']['toLowerCase']();
                _0x4ca0d7['ALLOWED_PLANS']['includes'](_0x1a9250) ? (_0x388541 = _0x1a9250, console['log']('📡\x20Fetched\x20plan\x20from\x20backend\x20(validated):', _0x388541)) : console['warn']('⚠️\x20Invalid\x20plan\x20from\x20backend:', _0x278535['plan']);
            } else
                console['warn']('⚠️\x20Invalid\x20response\x20structure\x20from\x20/api/user/profile');
        } else
            console['warn']('Failed\x20to\x20fetch\x20profile\x20from\x20backend:', _0x163d5f['status']);
    } catch (_0x565735) {
        console['warn']('Could\x20not\x20fetch\x20plan\x20from\x20backend,\x20using\x20safe\x20default:', _0x565735);
    }
    if (_0x4bf8bd && typeof _0x388541 === 'string' && _0x388541['length'] > 0x0) {
        const _0x1a9370 = _0x388541['charAt'](0x0)['toUpperCase']() + _0x388541['slice'](0x1)['toLowerCase'](),
            _0x2f792c = _0x1a9370 + '\x20Plan';
        _0x4bf8bd['textContent'] = _0x2f792c, console['log']('✅\x20Updated\x20dropdown\x20plan\x20to:', _0x2f792c);
    }
    const _0x573646 = _0x9a2bee['picture'] || _0x9a2bee['avatar'] || _0x9a2bee['photo'] || null;
    if (_0x23807d) {
        if (_0x573646 && window['isValidImageUrl'](_0x573646)) {
            console['log']('✅\x20Setting\x20dropdown\x20avatar\x20(URL\x20validated)'), _0x23807d['innerHTML'] = '';
            const _0x1e103b = document['createElement']('img');
            _0x1e103b['src'] = _0x573646, _0x1e103b['alt'] = _0x9a2bee['name'] || 'Profile', _0x1e103b['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;', _0x1e103b['onerror'] = () => {
                console['warn']('Failed\x20to\x20load\x20profile\x20image'), _0x23807d['innerHTML'] = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>';
            }, _0x23807d['appendChild'](_0x1e103b);
        } else
            console['log']('⚠️\x20No\x20valid\x20picture\x20URL\x20for\x20avatar\x20(must\x20be\x20https,\x20http,\x20or\x20data:)'), _0x23807d['innerHTML'] = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>';
    }
}
window['updateProfileDropdown'] = _0x7305d2, document['addEventListener']('DOMContentLoaded', () => {
    const _0x414a17 = document['getElementById']('profileAvatarBtn'),
        _0x5a9463 = document['getElementById']('profileDropdown'),
        _0x53940b = document['getElementById']('profileDropdownWr');
    _0x414a17 ? (_0x414a17['addEventListener']('click', _0x1f0659 => {
        _0x1f0659['stopPropagation'](), _0x5a9463 && _0x5a9463['classList']['toggle']('open');
    }), console['log']('✅\x20Profile\x20avatar\x20button\x20click\x20listener\x20attached')) : console['warn']('⚠️\x20profileAvatarBtn\x20element\x20not\x20found');
    document['addEventListener']('click', _0x53d1c9 => {
        if (_0x53940b && _0x53940b['contains'](_0x53d1c9['target']))
            return;
        _0x5a9463 && _0x5a9463['classList']['remove']('open');
    });
    const _0xff126c = document['getElementById']('dropdownBilling'),
        _0xa7ac3b = document['getElementById']('dropdownPricing'),
        _0x1110d3 = document['getElementById']('dropdownLogout');
    _0xa7ac3b && _0xa7ac3b['addEventListener']('click', _0x1f4b7e => {
        _0x1f4b7e['preventDefault']();
        if (_0x5a9463)
            _0x5a9463['classList']['remove']('open');
        window['location']['href'] = '/premium.html';
    });
    _0x1110d3 && _0x1110d3['addEventListener']('click', _0x11f440 => {
        _0x11f440['preventDefault']();
        if (_0x5a9463)
            _0x5a9463['classList']['remove']('open');
        typeof logout === 'function' ? logout() : handleSecureLogout();
    });
    let _0xe8d745 = null;
    try {
        window['currentUser'] && (_0xe8d745 = window['validateUserObject'](window['currentUser']));
        if (!_0xe8d745) {
            const _0x56bfd9 = localStorage['getItem']('currentUser');
            if (_0x56bfd9)
                try {
                    const _0x3ac512 = JSON['parse'](_0x56bfd9);
                    _0xe8d745 = window['validateUserObject'](_0x3ac512);
                } catch (_0x5db652) {
                    console['error']('Failed\x20to\x20parse\x20localStorage\x20currentUser:', _0x5db652);
                }
        }
        _0xe8d745 ? (_0x7305d2(_0xe8d745), console['log']('✅\x20Profile\x20dropdown\x20loaded\x20successfully')) : console['warn']('No\x20valid\x20user\x20data\x20available\x20for\x20dropdown');
    } catch (_0x5e2230) {
        console['error']('Error\x20loading\x20user\x20data\x20for\x20dropdown:', _0x5e2230);
    }
});