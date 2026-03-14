const _0x86b36b = _0xbf83;
(function (_0x49a785, _0x1f8389) {
    const _0x2460fa = _0xbf83, _0x26428a = _0x49a785();
    while (!![]) {
        try {
            const _0x50f45f = -parseInt(_0x2460fa(0x1a8)) / 0x1 + -parseInt(_0x2460fa(0x122)) / 0x2 * (-parseInt(_0x2460fa(0x1dd)) / 0x3) + parseInt(_0x2460fa(0x11f)) / 0x4 * (-parseInt(_0x2460fa(0x14b)) / 0x5) + parseInt(_0x2460fa(0x16e)) / 0x6 * (parseInt(_0x2460fa(0x142)) / 0x7) + -parseInt(_0x2460fa(0x133)) / 0x8 * (parseInt(_0x2460fa(0x1b2)) / 0x9) + -parseInt(_0x2460fa(0x184)) / 0xa * (-parseInt(_0x2460fa(0x1da)) / 0xb) + parseInt(_0x2460fa(0x187)) / 0xc;
            if (_0x50f45f === _0x1f8389)
                break;
            else
                _0x26428a['push'](_0x26428a['shift']());
        } catch (_0x4d1348) {
            _0x26428a['push'](_0x26428a['shift']());
        }
    }
}(_0x4a0d, 0xbea08), console[_0x86b36b(0x129)](_0x86b36b(0x1bf)));
let userMenuPanel, userMenuBackdrop;
function isValidImageUrl(_0x2eb720) {
    const _0x33292c = _0x86b36b;
    if (!_0x2eb720 || typeof _0x2eb720 !== 'string')
        return ![];
    const _0x8a9804 = _0x2eb720['trim']()[_0x33292c(0x1d0)]();
    if (_0x8a9804[_0x33292c(0x199)](_0x33292c(0x190)) || _0x8a9804['startsWith'](_0x33292c(0x148)) || _0x8a9804[_0x33292c(0x199)](_0x33292c(0x147)))
        return ![];
    return _0x8a9804[_0x33292c(0x199)](_0x33292c(0x192)) || _0x8a9804[_0x33292c(0x199)]('https://') || !_0x8a9804['includes'](':');
}
function escapeHtml(_0x4b4d5b) {
    const _0x38400f = _0x86b36b;
    if (typeof _0x4b4d5b !== _0x38400f(0x1ad))
        return '';
    const _0x351fbc = document[_0x38400f(0x141)](_0x38400f(0x16f));
    return _0x351fbc['textContent'] = _0x4b4d5b, _0x351fbc['innerHTML'];
}
const apiCache = {
    'userProfile': null,
    'userProfileTime': 0x0,
    'CACHE_DURATION': 0x493e0,
    'getUserProfile'() {
        const _0x1153c7 = _0x86b36b, _0x52edf8 = Date[_0x1153c7(0x18d)]();
        if (this['userProfile'] && _0x52edf8 - this[_0x1153c7(0x1bb)] < this[_0x1153c7(0x120)])
            return console[_0x1153c7(0x129)](_0x1153c7(0x150)), this[_0x1153c7(0x15b)];
        return null;
    },
    'setUserProfile'(_0x716fd0) {
        const _0x31b3ac = _0x86b36b;
        this[_0x31b3ac(0x15b)] = _0x716fd0, this['userProfileTime'] = Date[_0x31b3ac(0x18d)](), console['log'](_0x31b3ac(0x195));
    }
};
async function loadAndSetCurrentUser() {
    const _0x3757f5 = _0x86b36b;
    try {
        if (window[_0x3757f5(0x163)]) {
            console[_0x3757f5(0x129)](_0x3757f5(0x1e7));
            !window['currentUser']['auth_provider'] && await fetchAndAddAuthProvider();
            return;
        }
        const _0x40580f = apiCache[_0x3757f5(0x12f)]();
        if (_0x40580f) {
            window[_0x3757f5(0x163)] = _0x40580f, console['log'](_0x3757f5(0x1c1)), updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x32);
            return;
        }
        const _0x3b8e29 = localStorage['getItem'](_0x3757f5(0x163));
        if (_0x3b8e29)
            try {
                window['currentUser'] = JSON['parse'](_0x3b8e29), console[_0x3757f5(0x129)](_0x3757f5(0x13d));
                !window['currentUser']['auth_provider'] && await fetchAndAddAuthProvider();
                updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x32);
                return;
            } catch (_0x1ebccc) {
                console[_0x3757f5(0x154)]('Failed\x20to\x20parse\x20saved\x20currentUser', _0x1ebccc);
            }
        let _0x50f405 = {};
        typeof getAuthHeaders === _0x3757f5(0x1b7) && (_0x50f405 = getAuthHeaders());
        console[_0x3757f5(0x129)](_0x3757f5(0x19c), Object[_0x3757f5(0x12e)](_0x50f405));
        const _0x57aafe = await fetch('/api/user/profile', {
            'method': _0x3757f5(0x152),
            'headers': _0x50f405,
            'credentials': _0x3757f5(0x186)
        });
        if (_0x57aafe['ok']) {
            const _0x2c42aa = await _0x57aafe[_0x3757f5(0x1b0)]();
            console['log']('✅\x20Fetched\x20user\x20profile:', _0x2c42aa), console[_0x3757f5(0x129)](_0x3757f5(0x1ce), _0x2c42aa[_0x3757f5(0x177)] || _0x2c42aa[_0x3757f5(0x1af)] || _0x2c42aa[_0x3757f5(0x15c)]), console['log']('🔐\x20Auth\x20provider:', _0x2c42aa[_0x3757f5(0x157)]), window['currentUser'] = _0x2c42aa, localStorage[_0x3757f5(0x158)]('currentUser', JSON[_0x3757f5(0x1b5)](_0x2c42aa)), updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x64);
        } else
            console[_0x3757f5(0x154)](_0x3757f5(0x17d), _0x57aafe['status']), await fetchAndAddAuthProvider(), updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x64);
    } catch (_0x41c3c9) {
        console['error']('Error\x20loading\x20current\x20user:', _0x41c3c9), await fetchAndAddAuthProvider(), updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x64);
    }
}
async function fetchAndAddAuthProvider() {
    const _0x104d29 = _0x86b36b;
    try {
        let _0xe74008 = {};
        if (typeof getAuthHeaders === _0x104d29(0x1b7))
            _0xe74008 = getAuthHeaders();
        else {
            const _0x17bc8a = localStorage[_0x104d29(0x135)]('authToken') || sessionStorage[_0x104d29(0x135)](_0x104d29(0x14e));
            _0x17bc8a && (_0xe74008 = {
                'Authorization': _0x104d29(0x149) + _0x17bc8a,
                'Content-Type': _0x104d29(0x1ea)
            });
        }
        const _0x1a1a74 = await fetch('/api/user/auth-provider', {
            'method': 'GET',
            'headers': _0xe74008,
            'credentials': _0x104d29(0x186)
        });
        if (_0x1a1a74['ok']) {
            const _0xfce1b = await _0x1a1a74[_0x104d29(0x1b0)]();
            console[_0x104d29(0x129)](_0x104d29(0x1b6), _0xfce1b[_0x104d29(0x157)]), window[_0x104d29(0x163)] && (window[_0x104d29(0x163)]['auth_provider'] = _0xfce1b['auth_provider'], localStorage[_0x104d29(0x158)]('currentUser', JSON[_0x104d29(0x1b5)](window[_0x104d29(0x163)])), updateProfileButton());
        }
    } catch (_0xa46ca2) {
        console[_0x104d29(0x1ac)](_0x104d29(0x143), _0xa46ca2);
    }
}
function openUserMenu() {
    const _0x1a1b10 = _0x86b36b;
    console[_0x1a1b10(0x129)](_0x1a1b10(0x193));
    !userMenuPanel && (userMenuPanel = document[_0x1a1b10(0x1d1)](_0x1a1b10(0x128)));
    !userMenuBackdrop && (userMenuBackdrop = document[_0x1a1b10(0x1d1)](_0x1a1b10(0x13b)));
    if (!userMenuPanel || !userMenuBackdrop) {
        console[_0x1a1b10(0x1ac)](_0x1a1b10(0x1c9));
        return;
    }
    console[_0x1a1b10(0x129)]('openUserMenu\x20called\x20-\x20adding\x20active\x20class'), userMenuPanel[_0x1a1b10(0x197)][_0x1a1b10(0x1c8)](_0x1a1b10(0x124)), userMenuBackdrop[_0x1a1b10(0x197)]['add'](_0x1a1b10(0x124));
    const _0x350bd5 = window[_0x1a1b10(0x12b)] <= 0x300 ? _0x1a1b10(0x1e2) : _0x1a1b10(0x1bd), _0x5d7519 = window[_0x1a1b10(0x12b)] <= 0x300 ? _0x1a1b10(0x131) : '-420px';
    userMenuPanel['style'][_0x1a1b10(0x1b3)] = _0x1a1b10(0x1db) + _0x350bd5 + '\x20!important;\x20height:\x20100vh\x20!important;\x20z-index:\x209999\x20!important;\x20display:\x20flex\x20!important;\x20flex-direction:\x20column\x20!important;\x20background:\x20white\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;', userMenuBackdrop['style'][_0x1a1b10(0x1b3)] = _0x1a1b10(0x1d2), document[_0x1a1b10(0x1d8)][_0x1a1b10(0x15f)][_0x1a1b10(0x1c6)] = _0x1a1b10(0x1b4), console[_0x1a1b10(0x129)](_0x1a1b10(0x1e3), userMenuPanel['style'][_0x1a1b10(0x191)], _0x1a1b10(0x13f), userMenuBackdrop[_0x1a1b10(0x15f)][_0x1a1b10(0x17f)]), updateMenuUserInfo(), setTimeout(() => updateProfileButton(), 0x32);
}
function closeUserMenuPanel() {
    const _0x17737e = _0x86b36b;
    if (!userMenuPanel)
        userMenuPanel = document['getElementById'](_0x17737e(0x128));
    if (!userMenuBackdrop)
        userMenuBackdrop = document[_0x17737e(0x1d1)](_0x17737e(0x13b));
    userMenuPanel['classList'][_0x17737e(0x1d7)](_0x17737e(0x124)), userMenuBackdrop[_0x17737e(0x197)][_0x17737e(0x1d7)](_0x17737e(0x124));
    const _0xe5fbe7 = window[_0x17737e(0x12b)] <= 0x300 ? _0x17737e(0x1e2) : _0x17737e(0x1bd), _0x3def61 = window['innerWidth'] <= 0x300 ? _0x17737e(0x131) : _0x17737e(0x1d4);
    userMenuPanel[_0x17737e(0x15f)][_0x17737e(0x1b3)] = _0x17737e(0x146) + _0x3def61 + _0x17737e(0x12c) + _0xe5fbe7 + _0x17737e(0x18f), userMenuBackdrop[_0x17737e(0x15f)]['cssText'] = _0x17737e(0x196), document['body'][_0x17737e(0x15f)]['overflow'] = '', console[_0x17737e(0x129)](_0x17737e(0x185), userMenuPanel[_0x17737e(0x15f)][_0x17737e(0x191)]);
}
function updateProfileButton() {
    const _0x268f7d = _0x86b36b, _0x37cc1e = document[_0x268f7d(0x1d1)]('profileAvatarBtn');
    if (!_0x37cc1e) {
        console[_0x268f7d(0x154)](_0x268f7d(0x1cf));
        return;
    }
    let _0x1b1973 = null;
    try {
        if (typeof window !== _0x268f7d(0x1cb) && window[_0x268f7d(0x163)])
            _0x1b1973 = window[_0x268f7d(0x163)];
        else {
            const _0x2fb643 = localStorage[_0x268f7d(0x135)](_0x268f7d(0x163));
            if (_0x2fb643)
                _0x1b1973 = JSON['parse'](_0x2fb643);
        }
    } catch (_0x1b452c) {
        console[_0x268f7d(0x1ac)](_0x268f7d(0x171), _0x1b452c);
        return;
    }
    console[_0x268f7d(0x129)](_0x268f7d(0x1b1), _0x1b1973);
    const _0x3bbfe4 = _0x1b1973?.[_0x268f7d(0x177)] || _0x1b1973?.[_0x268f7d(0x1af)] || _0x1b1973?.['photo'] || _0x1b1973?.[_0x268f7d(0x13a)] || null, _0x30f523 = _0x1b1973?.[_0x268f7d(0x1a5)] || _0x1b1973?.[_0x268f7d(0x1a4)] || _0x1b1973?.[_0x268f7d(0x1c4)] || _0x268f7d(0x1dc), _0x41c8b9 = _0x1b1973?.[_0x268f7d(0x157)] || 'email';
    console['log'](_0x268f7d(0x127), _0x3bbfe4), console['log']('👤\x20User\x20name:', _0x30f523), console['log'](_0x268f7d(0x161), _0x41c8b9);
    if (_0x41c8b9 && _0x41c8b9['toLowerCase']()[_0x268f7d(0x140)]('google')) {
        console[_0x268f7d(0x129)](_0x268f7d(0x1bc)), _0x37cc1e['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22currentColor\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Gmail/Google\x20icon\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20\x204H4C2.9\x204\x202.01\x204.9\x202.01\x206L2\x2018c0\x201.1.9\x202\x202\x202h16c1.1\x200\x202-.9\x202-2V6c0-1.1-.9-2-2-2zm0\x204l-8\x205-8-5V6l8\x205\x208-5v2z\x22\x20fill=\x22#EA4335\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        return;
    }
    if (_0x1b1973 && _0x3bbfe4 && _0x3bbfe4[_0x268f7d(0x1cd)]() !== '' && isValidImageUrl(_0x3bbfe4)) {
        console['log']('✅\x20Setting\x20profile\x20picture\x20from\x20validated\x20URL');
        const _0x4c7eca = document[_0x268f7d(0x141)]('img');
        _0x4c7eca[_0x268f7d(0x1b8)] = _0x3bbfe4, _0x4c7eca[_0x268f7d(0x1e4)] = _0x30f523, _0x4c7eca['style'][_0x268f7d(0x1b3)] = 'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;\x20display:\x20block;', _0x4c7eca[_0x268f7d(0x1cc)] = () => {
            const _0x29b2fa = _0x268f7d;
            console[_0x29b2fa(0x154)](_0x29b2fa(0x167));
        }, _0x4c7eca[_0x268f7d(0x180)] = () => {
            const _0x4f91d6 = _0x268f7d;
            console['log'](_0x4f91d6(0x121));
        };
        const _0x35a0de = document['createElement'](_0x268f7d(0x16f));
        _0x35a0de['appendChild'](_0x4c7eca), _0x37cc1e['innerHTML'] = _0x35a0de[_0x268f7d(0x1de)];
    } else
        console['log'](_0x268f7d(0x17c), !!_0x1b1973, 'picture\x20field:', _0x3bbfe4);
}
async function updateProfileDropdown() {
    const _0x26ea80 = _0x86b36b, _0x4d39b3 = document[_0x26ea80(0x1d1)](_0x26ea80(0x1df)), _0x3db3b5 = document[_0x26ea80(0x1d1)](_0x26ea80(0x1a7)), _0x121cbb = document[_0x26ea80(0x1d1)](_0x26ea80(0x1be));
    console[_0x26ea80(0x129)](_0x26ea80(0x1a9), {
        'dropdownUserName': !!_0x4d39b3,
        'dropdownUserPlan': !!_0x3db3b5,
        'dropdownUserAvatar': !!_0x121cbb
    });
    let _0x49b64e = null;
    try {
        if (typeof window !== _0x26ea80(0x1cb) && window[_0x26ea80(0x163)])
            _0x49b64e = window['currentUser'];
        else {
            const _0x47f50e = localStorage[_0x26ea80(0x135)](_0x26ea80(0x163));
            if (_0x47f50e)
                _0x49b64e = JSON['parse'](_0x47f50e);
        }
    } catch (_0x50f192) {
        console['error'](_0x26ea80(0x165), _0x50f192);
        return;
    }
    console[_0x26ea80(0x129)]('👤\x20currentUser\x20object:', _0x49b64e);
    if (!_0x49b64e) {
        if (_0x4d39b3)
            _0x4d39b3[_0x26ea80(0x16d)] = 'Guest\x20User';
        if (_0x3db3b5)
            _0x3db3b5[_0x26ea80(0x16d)] = _0x26ea80(0x1e6);
        return;
    }
    const _0x2adca7 = _0x49b64e[_0x26ea80(0x1a5)] || _0x49b64e[_0x26ea80(0x1a4)] || _0x49b64e[_0x26ea80(0x1c4)] || 'User';
    if (_0x4d39b3)
        _0x4d39b3[_0x26ea80(0x16d)] = _0x2adca7;
    try {
        const _0x59c74e = localStorage[_0x26ea80(0x135)](_0x26ea80(0x13c));
        if (_0x59c74e) {
            const _0xda5331 = await fetch(_0x26ea80(0x16b), { 'headers': { 'Authorization': _0x26ea80(0x149) + _0x59c74e } });
            if (_0xda5331['ok']) {
                const _0x2f010b = await _0xda5331['json']();
                console[_0x26ea80(0x129)]('📋\x20API\x20Response\x20for\x20profile:', _0x2f010b);
                const _0x4f512a = _0x2f010b[_0x26ea80(0x144)] || _0x49b64e['plan'] || _0x26ea80(0x145), _0x3f10f1 = _0x4f512a['charAt'](0x0)[_0x26ea80(0x1a2)]() + _0x4f512a['slice'](0x1) + '\x20Plan';
                console['log'](_0x26ea80(0x1d3), _0x3f10f1);
                const _0x54b9ce = document[_0x26ea80(0x1d1)](_0x26ea80(0x1a7));
                _0x54b9ce ? (_0x54b9ce[_0x26ea80(0x16d)] = _0x3f10f1, console[_0x26ea80(0x129)](_0x26ea80(0x189), _0x3f10f1)) : console[_0x26ea80(0x154)](_0x26ea80(0x1c5));
                if (window[_0x26ea80(0x163)])
                    window[_0x26ea80(0x163)][_0x26ea80(0x144)] = _0x4f512a;
            } else {
                console[_0x26ea80(0x154)](_0x26ea80(0x134), _0xda5331[_0x26ea80(0x155)]);
                const _0x59819c = _0x49b64e[_0x26ea80(0x144)] || _0x26ea80(0x145), _0x3164a9 = _0x59819c['charAt'](0x0)[_0x26ea80(0x1a2)]() + _0x59819c[_0x26ea80(0x16c)](0x1) + _0x26ea80(0x1ca), _0x1ce0f1 = document[_0x26ea80(0x1d1)]('dropdownUserPlan');
                _0x1ce0f1 && (_0x1ce0f1[_0x26ea80(0x16d)] = _0x3164a9, console['log'](_0x26ea80(0x1e8), _0x3164a9));
            }
        } else {
            console[_0x26ea80(0x154)](_0x26ea80(0x164));
            const _0x504004 = _0x49b64e[_0x26ea80(0x144)] || _0x26ea80(0x145), _0x27540b = _0x504004[_0x26ea80(0x130)](0x0)['toUpperCase']() + _0x504004[_0x26ea80(0x16c)](0x1) + '\x20Plan', _0x33edd4 = document[_0x26ea80(0x1d1)]('dropdownUserPlan');
            _0x33edd4 && (_0x33edd4[_0x26ea80(0x16d)] = _0x27540b);
        }
    } catch (_0x41aeda) {
        console[_0x26ea80(0x1ac)](_0x26ea80(0x1b9), _0x41aeda);
        const _0x22c53c = _0x49b64e[_0x26ea80(0x144)] || _0x26ea80(0x145), _0xe292f = _0x22c53c[_0x26ea80(0x130)](0x0)[_0x26ea80(0x1a2)]() + _0x22c53c[_0x26ea80(0x16c)](0x1) + _0x26ea80(0x1ca), _0x5506af = document[_0x26ea80(0x1d1)](_0x26ea80(0x1a7));
        _0x5506af && (_0x5506af[_0x26ea80(0x16d)] = _0xe292f, console[_0x26ea80(0x129)](_0x26ea80(0x175), _0xe292f));
    }
    const _0x246479 = _0x49b64e?.['picture'] || _0x49b64e?.[_0x26ea80(0x1af)] || _0x49b64e?.[_0x26ea80(0x15c)] || null;
    if (_0x121cbb) {
        if (_0x246479 && _0x246479[_0x26ea80(0x1cd)]() !== '') {
            console[_0x26ea80(0x129)](_0x26ea80(0x1eb), _0x246479);
            const _0x48e17a = document[_0x26ea80(0x141)](_0x26ea80(0x1d9));
            _0x48e17a[_0x26ea80(0x1b8)] = _0x246479, _0x48e17a[_0x26ea80(0x1e4)] = _0x2adca7, _0x48e17a[_0x26ea80(0x15f)][_0x26ea80(0x1b3)] = _0x26ea80(0x18e), _0x48e17a[_0x26ea80(0x1cc)] = () => {
                const _0x10f851 = _0x26ea80;
                console['warn'](_0x10f851(0x181));
            }, _0x121cbb['innerHTML'] = '', _0x121cbb[_0x26ea80(0x182)](_0x48e17a);
        }
    }
}
function updateMenuUserInfo() {
    const _0x476fe0 = _0x86b36b, _0x2adf53 = document[_0x476fe0(0x1d1)](_0x476fe0(0x1ba)), _0x487fa8 = document[_0x476fe0(0x1d1)](_0x476fe0(0x179)), _0x2d24f2 = document[_0x476fe0(0x1d1)](_0x476fe0(0x188)), _0x1580ce = document['getElementById']('profileNameDisplay'), _0x7ef518 = document[_0x476fe0(0x1d1)](_0x476fe0(0x17a));
    let _0x3d932b = null;
    try {
        if (typeof window !== _0x476fe0(0x1cb) && window['currentUser'])
            _0x3d932b = window[_0x476fe0(0x163)];
        else {
            const _0x23187f = localStorage[_0x476fe0(0x135)](_0x476fe0(0x163));
            if (_0x23187f)
                _0x3d932b = JSON[_0x476fe0(0x17e)](_0x23187f);
        }
    } catch (_0x326611) {
        console[_0x476fe0(0x1ac)](_0x476fe0(0x160), _0x326611), _0x3d932b = null;
    }
    console[_0x476fe0(0x129)](_0x476fe0(0x183), _0x3d932b);
    const _0x2bcb92 = _0x3d932b?.[_0x476fe0(0x177)] || _0x3d932b?.['avatar'] || _0x3d932b?.[_0x476fe0(0x15c)] || _0x3d932b?.[_0x476fe0(0x13a)] || null;
    console[_0x476fe0(0x129)](_0x476fe0(0x151), _0x2bcb92);
    if (_0x3d932b) {
        const _0x102fb1 = _0x3d932b[_0x476fe0(0x1a5)] || _0x3d932b[_0x476fe0(0x1a4)] || _0x3d932b[_0x476fe0(0x19b)] || _0x3d932b[_0x476fe0(0x1a1)] || _0x476fe0(0x1dc), _0x97bca9 = _0x3d932b[_0x476fe0(0x1c4)] || _0x3d932b[_0x476fe0(0x132)] || '';
        if (_0x2adf53)
            _0x2adf53[_0x476fe0(0x16d)] = _0x102fb1;
        if (_0x487fa8)
            _0x487fa8['textContent'] = _0x97bca9;
        if (_0x1580ce)
            _0x1580ce[_0x476fe0(0x16d)] = _0x102fb1;
        if (_0x7ef518)
            _0x7ef518['textContent'] = _0x97bca9;
        if (_0x2d24f2) {
            if (_0x2bcb92 && isValidImageUrl(_0x2bcb92)) {
                console['log'](_0x476fe0(0x173)), _0x2d24f2[_0x476fe0(0x1de)] = '';
                const _0x597895 = document[_0x476fe0(0x141)](_0x476fe0(0x1d9));
                _0x597895['src'] = _0x2bcb92, _0x597895[_0x476fe0(0x1e4)] = _0x102fb1, _0x597895[_0x476fe0(0x15f)][_0x476fe0(0x1b3)] = _0x476fe0(0x137), _0x597895[_0x476fe0(0x1cc)] = () => {
                    const _0x4623ad = _0x476fe0;
                    console['warn'](_0x4623ad(0x1c7));
                }, _0x2d24f2[_0x476fe0(0x182)](_0x597895);
            } else
                console[_0x476fe0(0x129)]('⚠️\x20No\x20picture\x20or\x20invalid\x20URL\x20for\x20menu\x20avatar');
        }
    } else {
        if (_0x2adf53)
            _0x2adf53['textContent'] = _0x476fe0(0x174);
        if (_0x487fa8)
            _0x487fa8[_0x476fe0(0x16d)] = 'unknown@gmail.com';
        if (_0x1580ce)
            _0x1580ce[_0x476fe0(0x16d)] = _0x476fe0(0x174);
        if (_0x7ef518)
            _0x7ef518[_0x476fe0(0x16d)] = _0x476fe0(0x15e);
    }
    updateProfileDropdown();
}
function _0xbf83(_0x4002e9, _0x19a261) {
    _0x4002e9 = _0x4002e9 - 0x11f;
    const _0x4a0d30 = _0x4a0d();
    let _0xbf83eb = _0x4a0d30[_0x4002e9];
    return _0xbf83eb;
}
function _0x4a0d() {
    const _0x25b4df = [
        'keys',
        'getUserProfile',
        'charAt',
        '-100%',
        'username',
        '1369784ARVdkz',
        '❌\x20Profile\x20API\x20returned\x20non-ok\x20status:',
        'getItem',
        'menuHelp',
        'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;',
        'user',
        'solisai_',
        'profilePicture',
        'userMenuBackdrop',
        'auth_token',
        '✅\x20User\x20loaded\x20from\x20localStorage',
        'solisMenuDebug',
        'backdrop\x20opacity:',
        'includes',
        'createElement',
        '28BXLzJM',
        'Error\x20fetching\x20auth\x20provider:',
        'plan',
        'Free',
        'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20right:\x20',
        'vbscript:',
        'data:',
        'Bearer\x20',
        'loading',
        '55iOXxIw',
        '/login.html?logout=1',
        'href',
        'authToken',
        '3px',
        '💾\x20Using\x20cached\x20user\x20profile',
        '📸\x20Menu\x20avatar\x20picture\x20URL:',
        'GET',
        'menuViewProfile',
        'warn',
        'status',
        '/dashboard.html',
        'auth_provider',
        'setItem',
        '⚠️\x20Logout\x20API\x20call\x20failed:',
        'querySelector',
        'userProfile',
        'photo',
        '21px',
        'unknown@gmail.com',
        'style',
        'menu:\x20failed\x20to\x20read\x20currentUser',
        '🔐\x20Auth\x20provider:',
        'removeItem',
        'currentUser',
        '⚠️\x20No\x20auth\x20token\x20found',
        'Failed\x20to\x20read\x20currentUser\x20for\x20dropdown',
        'DOMContentLoaded',
        'Failed\x20to\x20load\x20profile\x20image,\x20keeping\x20SVG',
        'Error\x20clearing\x20user\x20data:',
        '🔐\x20Logging\x20out...',
        'View\x20my\x20content',
        '/api/user/profile',
        'slice',
        'textContent',
        '223932LpCuYa',
        'div',
        'https://discord.gg/vtPJtQhjNy',
        'Failed\x20to\x20read\x20currentUser\x20for\x20profile\x20button',
        'User\x20logged\x20out,\x20resetting\x20profile\x20button',
        '✅\x20Setting\x20menu\x20avatar\x20from\x20validated\x20URL',
        'Guest\x20User',
        '🔄\x20Error\x20fallback:\x20Updated\x20dropdownUserPlan\x20to:',
        'user-logout',
        'picture',
        'editProfileNameBtn',
        'menuUserEmail',
        'emailDisplay',
        'notificationsToggle',
        '⚠️\x20No\x20user\x20picture\x20found\x20-\x20userObj\x20exists:',
        'Failed\x20to\x20fetch\x20user\x20profile:',
        'parse',
        'opacity',
        'onload',
        'Failed\x20to\x20load\x20dropdown\x20avatar\x20image',
        'appendChild',
        '🔍\x20updateMenuUserInfo\x20-\x20userObj:',
        '1240270nFrLjA',
        'Menu\x20closed\x20-\x20panel\x20right:',
        'include',
        '4650120IbAcHl',
        'menuUserAvatar',
        '✅\x20Updated\x20dropdownUserPlan\x20to:',
        'API_BASE_URL',
        'stopPropagation',
        '📍\x20Redirecting\x20to\x20login...',
        'now',
        'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;\x20display:\x20block;',
        '\x20!important;\x20height:\x20100vh\x20!important;\x20z-index:\x209999\x20!important;\x20display:\x20flex\x20!important;\x20flex-direction:\x20column\x20!important;\x20background:\x20white\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;',
        'javascript:',
        'right',
        'http://',
        'openUserMenu\x20called\x20from\x20profile\x20button',
        'Menu\x20already\x20initialized,\x20skipping',
        '💾\x20Cached\x20user\x20profile',
        'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20background:\x20rgba(28,\x2025,\x2023,\x200.5)\x20!important;\x20z-index:\x209998\x20!important;\x20display:\x20block\x20!important;\x20opacity:\x200\x20!important;\x20visibility:\x20hidden\x20!important;\x20pointer-events:\x20none\x20!important;',
        'classList',
        'Preferences\x20clicked',
        'startsWith',
        '_blank',
        'first_name',
        '📡\x20Fetching\x20user\x20profile\x20with\x20headers:',
        'open',
        'Change\x20password\x20clicked',
        'POST',
        'currentUser\x20changed\x20in\x20localStorage,\x20updating\x20profile\x20button',
        'firstName',
        'toUpperCase',
        'click',
        'displayName',
        'name',
        'Open\x20feedback',
        'dropdownUserPlan',
        '380063kbszQE',
        '🔍\x20updateProfileDropdown\x20called\x20-\x20Elements\x20found:',
        'menuFeedback',
        'storage',
        'error',
        'string',
        'Close\x20button\x20element\x20not\x20found\x20with\x20ID:\x20closeUserMenu',
        'avatar',
        'json',
        '🔍\x20updateProfileButton\x20-\x20userObj:',
        '45hcKDRj',
        'cssText',
        'hidden',
        'stringify',
        '✅\x20Fetched\x20auth\x20provider:',
        'function',
        'src',
        'Failed\x20to\x20fetch\x20plan\x20info:',
        'menuUserName',
        'userProfileTime',
        '✅\x20Displaying\x20Gmail\x20icon\x20for\x20Google\x20OAuth\x20user',
        '420px',
        'dropdownUserAvatar',
        'menu.js\x20file\x20loaded',
        'Elements\x20found:',
        '✅\x20User\x20loaded\x20from\x20cache',
        'Edit\x20profile\x20name\x20clicked',
        'User\x20logged\x20in,\x20updating\x20profile\x20button',
        'email',
        '⚠️\x20dropdownUserPlan\x20element\x20not\x20found!',
        'overflow',
        'Failed\x20to\x20load\x20menu\x20avatar\x20image',
        'add',
        'Menu\x20elements\x20not\x20found',
        '\x20Plan',
        'undefined',
        'onerror',
        'trim',
        '📸\x20Picture\x20field:',
        '⚠️\x20profileAvatarBtn\x20element\x20not\x20found',
        'toLowerCase',
        'getElementById',
        'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20background:\x20rgba(28,\x2025,\x2023,\x200.5)\x20!important;\x20z-index:\x209998\x20!important;\x20display:\x20block\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;\x20pointer-events:\x20auto\x20!important;',
        '💰\x20Plan\x20display\x20text:',
        '-420px',
        'menuMyContent',
        'key',
        'remove',
        'body',
        'img',
        '77PqMKsv',
        'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20right:\x200\x20!important;\x20width:\x20',
        'User',
        '1449183nSgJyA',
        'innerHTML',
        'dropdownUserName',
        'toggle',
        'Close\x20button\x20found,\x20attaching\x20listener',
        '100%',
        'Menu\x20opened\x20-\x20panel\x20right:',
        'alt',
        'contains',
        'Free\x20Plan',
        '✅\x20User\x20already\x20loaded\x20in\x20window.currentUser',
        '📝\x20Fallback:\x20Updated\x20dropdownUserPlan\x20to:',
        'Close\x20button\x20clicked',
        'application/json',
        '✅\x20Setting\x20dropdown\x20avatar\x20from:',
        '128772plfYyI',
        'CACHE_DURATION',
        '✅\x20Profile\x20image\x20loaded\x20successfully',
        '4oWytXB',
        'addEventListener',
        'active',
        'editEmailBtn',
        'location',
        '📸\x20Profile\x20picture\x20URL:',
        'userMenuPanel',
        'log',
        'readyState',
        'innerWidth',
        '\x20!important;\x20width:\x20',
        'Initializing\x20menu\x20system'
    ];
    _0x4a0d = function () {
        return _0x25b4df;
    };
    return _0x4a0d();
}
function initUserMenu() {
    const _0x473dc5 = _0x86b36b;
    console[_0x473dc5(0x129)]('initUserMenu\x20called'), console[_0x473dc5(0x129)]('Document\x20ready\x20state:', document['readyState']), userMenuPanel = document[_0x473dc5(0x1d1)](_0x473dc5(0x128)), userMenuBackdrop = document[_0x473dc5(0x1d1)]('userMenuBackdrop');
    const _0x5167a5 = document[_0x473dc5(0x1d1)]('closeUserMenu');
    console[_0x473dc5(0x129)](_0x473dc5(0x1c0), {
        'userMenuPanel': !!userMenuPanel,
        'userMenuBackdrop': !!userMenuBackdrop,
        'closeUserMenuBtn': !!_0x5167a5
    });
    const _0x802ad7 = document[_0x473dc5(0x1d1)]('menuSubscription'), _0x1b824b = document[_0x473dc5(0x1d1)]('menuPreferences'), _0x81c073 = document[_0x473dc5(0x1d1)](_0x473dc5(0x136)), _0x53a13a = document['getElementById'](_0x473dc5(0x1aa)), _0x324fed = document[_0x473dc5(0x1d1)]('menuLogout'), _0x884d2e = document['getElementById'](_0x473dc5(0x153)), _0x57c6eb = document['getElementById'](_0x473dc5(0x1d5)), _0x12a2cc = document[_0x473dc5(0x1d1)](_0x473dc5(0x178)), _0x277748 = document['getElementById'](_0x473dc5(0x125)), _0x957aa3 = document['getElementById']('changePasswordBtn');
    if (!userMenuPanel) {
        console[_0x473dc5(0x1ac)]('menu:\x20ERROR\x20-\x20userMenuPanel\x20not\x20found!');
        return;
    }
    updateProfileButton(), updateProfileDropdown(), loadAndSetCurrentUser();
    _0x5167a5 ? (console[_0x473dc5(0x129)](_0x473dc5(0x1e1)), _0x5167a5[_0x473dc5(0x123)]('click', _0x441f96 => {
        const _0x1b476a = _0x473dc5;
        console[_0x1b476a(0x129)](_0x1b476a(0x1e9)), _0x441f96[_0x1b476a(0x18b)](), closeUserMenuPanel();
    })) : console[_0x473dc5(0x154)](_0x473dc5(0x1ae));
    userMenuBackdrop && userMenuBackdrop['addEventListener'](_0x473dc5(0x1a3), closeUserMenuPanel);
    _0x1b824b && _0x1b824b[_0x473dc5(0x123)](_0x473dc5(0x1a3), () => {
        const _0x4cb047 = _0x473dc5;
        console['log'](_0x4cb047(0x198));
    });
    const _0x47383c = document[_0x473dc5(0x1d1)](_0x473dc5(0x17b));
    _0x47383c && _0x47383c['addEventListener'](_0x473dc5(0x1a3), _0x3cc15f => {
        const _0x1fc25e = _0x473dc5;
        _0x3cc15f[_0x1fc25e(0x18b)](), console[_0x1fc25e(0x129)]('Notifications\x20toggle\x20clicked'), _0x47383c[_0x1fc25e(0x197)][_0x1fc25e(0x1e0)]('active');
        const _0x11596c = _0x47383c[_0x1fc25e(0x15a)](_0x1fc25e(0x16f));
        _0x11596c && (_0x47383c[_0x1fc25e(0x197)][_0x1fc25e(0x1e5)](_0x1fc25e(0x124)) ? _0x11596c['style'][_0x1fc25e(0x191)] = _0x1fc25e(0x14f) : _0x11596c[_0x1fc25e(0x15f)][_0x1fc25e(0x191)] = _0x1fc25e(0x15d));
    });
    if (_0x47383c && _0x47383c['classList'][_0x473dc5(0x1e5)]('active')) {
        const _0x2f4a3f = _0x47383c['querySelector']('div');
        if (_0x2f4a3f)
            _0x2f4a3f[_0x473dc5(0x15f)][_0x473dc5(0x191)] = _0x473dc5(0x14f);
    }
    _0x12a2cc && _0x12a2cc[_0x473dc5(0x123)](_0x473dc5(0x1a3), _0x1e6f96 => {
        const _0x3e6a9b = _0x473dc5;
        _0x1e6f96[_0x3e6a9b(0x18b)](), console[_0x3e6a9b(0x129)](_0x3e6a9b(0x1c2));
    }), _0x277748 && _0x277748[_0x473dc5(0x123)]('click', _0x2d6d87 => {
        const _0xd5cad9 = _0x473dc5;
        _0x2d6d87[_0xd5cad9(0x18b)](), console['log']('Edit\x20email\x20clicked');
    }), _0x957aa3 && _0x957aa3[_0x473dc5(0x123)](_0x473dc5(0x1a3), _0x3b976d => {
        const _0x1f8fb4 = _0x473dc5;
        _0x3b976d['stopPropagation'](), console['log'](_0x1f8fb4(0x19e));
    }), _0x81c073 && _0x81c073['addEventListener']('click', () => {
        const _0x30fa98 = _0x473dc5;
        closeUserMenuPanel(), window[_0x30fa98(0x19d)](_0x30fa98(0x170), _0x30fa98(0x19a));
    }), _0x53a13a && _0x53a13a[_0x473dc5(0x123)](_0x473dc5(0x1a3), () => {
        const _0x383b89 = _0x473dc5;
        closeUserMenuPanel(), console['log'](_0x383b89(0x1a6));
    }), _0x884d2e && _0x884d2e[_0x473dc5(0x123)](_0x473dc5(0x1a3), () => {
        const _0x1468b2 = _0x473dc5;
        closeUserMenuPanel(), window[_0x1468b2(0x126)][_0x1468b2(0x14d)] = _0x1468b2(0x156);
    }), _0x57c6eb && _0x57c6eb['addEventListener'](_0x473dc5(0x1a3), () => {
        const _0x3cf5c7 = _0x473dc5;
        closeUserMenuPanel(), console['log'](_0x3cf5c7(0x16a));
    }), _0x324fed && _0x324fed[_0x473dc5(0x123)](_0x473dc5(0x1a3), async () => {
        const _0x325b2d = _0x473dc5;
        closeUserMenuPanel();
        try {
            typeof clearUserData === _0x325b2d(0x1b7) && clearUserData();
        } catch (_0x37b32a) {
            console[_0x325b2d(0x1ac)](_0x325b2d(0x168), _0x37b32a);
        }
        console['log'](_0x325b2d(0x169));
        try {
            localStorage[_0x325b2d(0x162)](_0x325b2d(0x14e)), localStorage[_0x325b2d(0x162)](_0x325b2d(0x163));
            const _0x71bb3a = Object['keys'](localStorage);
            _0x71bb3a['forEach'](_0x3d750f => {
                const _0x30e732 = _0x325b2d;
                (_0x3d750f[_0x30e732(0x140)](_0x30e732(0x139)) || _0x3d750f[_0x30e732(0x140)]('auth') || _0x3d750f[_0x30e732(0x140)](_0x30e732(0x138))) && localStorage[_0x30e732(0x162)](_0x3d750f);
            }), sessionStorage['clear'](), window[_0x325b2d(0x18a)] && await fetch(window[_0x325b2d(0x18a)] + '/auth/logout', {
                'method': _0x325b2d(0x19f),
                'credentials': _0x325b2d(0x186)
            });
        } catch (_0x5a194d) {
            console[_0x325b2d(0x154)](_0x325b2d(0x159), _0x5a194d);
        }
        console[_0x325b2d(0x129)](_0x325b2d(0x18c)), window[_0x325b2d(0x126)][_0x325b2d(0x14d)] = _0x325b2d(0x14c);
    }), window['addEventListener'](_0x473dc5(0x1ab), _0x5f11f8 => {
        const _0x47c1bf = _0x473dc5;
        _0x5f11f8[_0x47c1bf(0x1d6)] === _0x47c1bf(0x163) && (console['log'](_0x47c1bf(0x1a0)), updateProfileButton());
    }), document[_0x473dc5(0x123)]('user-login', () => {
        const _0x4e18c1 = _0x473dc5;
        console['log'](_0x4e18c1(0x1c3)), updateProfileButton();
    }), document[_0x473dc5(0x123)](_0x473dc5(0x176), () => {
        const _0x534512 = _0x473dc5;
        console[_0x534512(0x129)](_0x534512(0x172)), updateProfileButton();
    }), window[_0x473dc5(0x13e)] = {
        'openUserMenu': openUserMenu,
        'closeUserMenuPanel': closeUserMenuPanel,
        'userMenuPanel': userMenuPanel,
        'userMenuBackdrop': userMenuBackdrop,
        'updateProfileButton': updateProfileButton,
        'closeUserMenuBtn': _0x5167a5
    };
}
let menuInitialized = ![];
function initializeMenu() {
    const _0x56b066 = _0x86b36b;
    if (menuInitialized) {
        console[_0x56b066(0x129)](_0x56b066(0x194));
        return;
    }
    menuInitialized = !![], console['log'](_0x56b066(0x12d)), initUserMenu();
}
document[_0x86b36b(0x12a)] === _0x86b36b(0x14a) ? document[_0x86b36b(0x123)](_0x86b36b(0x166), initializeMenu) : initializeMenu();