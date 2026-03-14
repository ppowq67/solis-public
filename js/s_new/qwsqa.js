const _0x24ac34 = _0x14ba;
(function (_0x1fa210, _0x1129eb) {
    const _0x179423 = _0x14ba, _0x2a6b1a = _0x1fa210();
    while (!![]) {
        try {
            const _0x321209 = -parseInt(_0x179423(0x14a)) / 0x1 * (parseInt(_0x179423(0x15b)) / 0x2) + -parseInt(_0x179423(0x137)) / 0x3 + parseInt(_0x179423(0x18b)) / 0x4 + parseInt(_0x179423(0x13c)) / 0x5 + -parseInt(_0x179423(0x16b)) / 0x6 * (-parseInt(_0x179423(0x179)) / 0x7) + parseInt(_0x179423(0x144)) / 0x8 + -parseInt(_0x179423(0x17a)) / 0x9 * (-parseInt(_0x179423(0x142)) / 0xa);
            if (_0x321209 === _0x1129eb)
                break;
            else
                _0x2a6b1a['push'](_0x2a6b1a['shift']());
        } catch (_0x4bb3ed) {
            _0x2a6b1a['push'](_0x2a6b1a['shift']());
        }
    }
}(_0x1f3f, 0x6dd6e));
const VALIDATION = {
    'MAX_STRING_LENGTH': 0x1f4,
    'MAX_EMAIL_LENGTH': 0xfe,
    'MAX_USERNAME_LENGTH': 0x64,
    'MAX_ERROR_MSG_LENGTH': 0xc8,
    'ALLOWED_PLANS': [
        _0x24ac34(0x160),
        _0x24ac34(0x185),
        _0x24ac34(0x16e)
    ],
    'MAX_VIDEOS_LIMIT': 0x3e8,
    'MAX_STORAGE_GB': 0x2710
};
window[_0x24ac34(0x150)] = function (_0x5c3713) {
    const _0xdbc6be = _0x24ac34;
    if (typeof _0x5c3713 !== _0xdbc6be(0x143))
        return '';
    const _0x349cf1 = _0x5c3713[_0xdbc6be(0x125)](0x0, VALIDATION[_0xdbc6be(0x191)]), _0x4545d5 = document[_0xdbc6be(0x134)](_0xdbc6be(0x14e));
    return _0x4545d5['textContent'] = _0x349cf1, _0x4545d5[_0xdbc6be(0x176)];
}, window[_0x24ac34(0x164)] = function (_0x518c9f, _0xeb591f = 0x0, _0x6971fd = Infinity, _0x127458 = 0x0) {
    const _0x36eb69 = _0x24ac34;
    if (typeof _0x518c9f !== _0x36eb69(0x14f) || isNaN(_0x518c9f))
        return _0x127458;
    return Math[_0x36eb69(0x132)](_0xeb591f, Math[_0x36eb69(0x16c)](_0x6971fd, _0x518c9f));
}, window[_0x24ac34(0x177)] = function (_0x7e456) {
    const _0x49ea4a = _0x24ac34;
    if (!_0x7e456)
        return 'An\x20error\x20occurred';
    if (_0x7e456[_0x49ea4a(0x139)] === 'RATE_LIMIT')
        return 'Too\x20many\x20requests.\x20Please\x20try\x20again\x20later.';
    if (_0x7e456[_0x49ea4a(0x139)] === 'AUTH_FAILED')
        return _0x49ea4a(0x166);
    if (_0x7e456[_0x49ea4a(0x139)] === _0x49ea4a(0x124))
        return _0x49ea4a(0x155);
    if (_0x7e456['code'] === 'SERVER_ERROR')
        return 'Server\x20error.\x20Please\x20try\x20again\x20later.';
    return 'Operation\x20failed.\x20Please\x20try\x20again.';
}, window['isValidImageUrl'] = function (_0x1203ae) {
    const _0x51f75e = _0x24ac34;
    if (!_0x1203ae || typeof _0x1203ae !== 'string')
        return ![];
    try {
        const _0x126851 = new URL(_0x1203ae, window[_0x51f75e(0x149)][_0x51f75e(0x173)]);
        return [
            _0x51f75e(0x186),
            _0x51f75e(0x12e),
            _0x51f75e(0x17c)
        ]['includes'](_0x126851['protocol']);
    } catch {
        return ![];
    }
}, window['validateUserObject'] = function (_0x433466) {
    const _0x23cb26 = _0x24ac34;
    if (!_0x433466 || typeof _0x433466 !== _0x23cb26(0x17f))
        return null;
    const _0x16feea = [
            _0x23cb26(0x158),
            'email',
            'username',
            _0x23cb26(0x15e),
            'avatar',
            _0x23cb26(0x172),
            _0x23cb26(0x18c),
            'id',
            _0x23cb26(0x138),
            _0x23cb26(0x14b)
        ], _0xe65faa = {};
    for (const _0x5d1ef8 of _0x16feea) {
        if (_0x433466[_0x23cb26(0x136)](_0x5d1ef8)) {
            const _0x1a0f37 = _0x433466[_0x5d1ef8];
            if (_0x5d1ef8 === _0x23cb26(0x16d) && typeof _0x1a0f37 === 'string') {
                if (_0x1a0f37[_0x23cb26(0x152)] > VALIDATION[_0x23cb26(0x145)])
                    return null;
                _0xe65faa[_0x5d1ef8] = window[_0x23cb26(0x150)](_0x1a0f37);
            } else {
                if (_0x5d1ef8 === 'username' && typeof _0x1a0f37 === _0x23cb26(0x143)) {
                    if (_0x1a0f37[_0x23cb26(0x152)] > VALIDATION[_0x23cb26(0x192)])
                        return null;
                    _0xe65faa[_0x5d1ef8] = window[_0x23cb26(0x150)](_0x1a0f37);
                } else {
                    if ((_0x5d1ef8 === 'name' || _0x5d1ef8 === _0x23cb26(0x15e) || _0x5d1ef8 === 'avatar' || _0x5d1ef8 === _0x23cb26(0x172)) && typeof _0x1a0f37 === 'string') {
                        if (_0x1a0f37['length'] > VALIDATION[_0x23cb26(0x191)])
                            return null;
                        _0xe65faa[_0x5d1ef8] = window[_0x23cb26(0x150)](_0x1a0f37);
                    } else {
                        if (_0x5d1ef8 === 'plan' && typeof _0x1a0f37 === _0x23cb26(0x143)) {
                            if (!VALIDATION['ALLOWED_PLANS'][_0x23cb26(0x167)](_0x1a0f37[_0x23cb26(0x195)]()))
                                return null;
                            _0xe65faa[_0x5d1ef8] = _0x1a0f37[_0x23cb26(0x195)]();
                        } else {
                            if ((_0x5d1ef8 === 'id' || _0x5d1ef8 === _0x23cb26(0x138)) && (typeof _0x1a0f37 === _0x23cb26(0x143) || typeof _0x1a0f37 === _0x23cb26(0x14f)))
                                _0xe65faa[_0x5d1ef8] = _0x1a0f37;
                            else
                                _0x5d1ef8 === _0x23cb26(0x14b) && typeof _0x1a0f37 === _0x23cb26(0x19b) && (_0xe65faa[_0x5d1ef8] = _0x1a0f37);
                        }
                    }
                }
            }
        }
    }
    if (!_0xe65faa['id'] && !_0xe65faa['email'])
        return null;
    return _0xe65faa;
}, window[_0x24ac34(0x128)] = async function () {
    const _0x477d53 = _0x24ac34;
    try {
        const _0x65f280 = await fetch(_0x477d53(0x15c), {
            'method': _0x477d53(0x19a),
            'credentials': _0x477d53(0x174),
            'headers': window['secureHeaders']()
        });
        !_0x65f280['ok'] && console[_0x477d53(0x193)]('Logout\x20endpoint\x20returned\x20status:', _0x65f280['status']);
    } catch (_0x30e9a3) {
        console[_0x477d53(0x182)](_0x477d53(0x170), _0x30e9a3);
    } finally {
        localStorage[_0x477d53(0x12b)](_0x477d53(0x198)), localStorage['removeItem'](_0x477d53(0x187)), localStorage[_0x477d53(0x12b)](_0x477d53(0x127)), localStorage[_0x477d53(0x12b)](_0x477d53(0x141)), sessionStorage['clear'](), window[_0x477d53(0x127)] && (window['currentUser'] = null), window[_0x477d53(0x149)][_0x477d53(0x173)] = _0x477d53(0x13e);
    }
};
function _0x14ba(_0x285d3b, _0x2875d7) {
    _0x285d3b = _0x285d3b - 0x124;
    const _0x1f3feb = _0x1f3f();
    let _0x14ba50 = _0x1f3feb[_0x285d3b];
    return _0x14ba50;
}
async function updateProfileDropdown(_0x4e1649) {
    const _0x2e7fe9 = _0x24ac34;
    if (!_0x4e1649) {
        console[_0x2e7fe9(0x193)](_0x2e7fe9(0x13f));
        return;
    }
    const _0x367c21 = window[_0x2e7fe9(0x189)](_0x4e1649);
    if (!_0x367c21) {
        console[_0x2e7fe9(0x193)](_0x2e7fe9(0x162));
        return;
    }
    console[_0x2e7fe9(0x13a)](_0x2e7fe9(0x18f));
    const _0x2efade = document[_0x2e7fe9(0x199)](_0x2e7fe9(0x17e)), _0x4fac56 = document[_0x2e7fe9(0x199)](_0x2e7fe9(0x140)), _0x4a6480 = document[_0x2e7fe9(0x199)]('dropdownUserAvatar');
    if (_0x2efade) {
        const _0x2b7e44 = _0x367c21[_0x2e7fe9(0x158)] || _0x367c21['username'] || _0x367c21[_0x2e7fe9(0x16d)] || _0x2e7fe9(0x129);
        _0x2efade[_0x2e7fe9(0x17d)] = _0x2b7e44, console[_0x2e7fe9(0x13a)]('✅\x20Updated\x20dropdown\x20name\x20to:', _0x2b7e44);
    }
    let _0x4b10b7 = 'Free';
    try {
        const _0x4893d5 = await fetch(_0x2e7fe9(0x18a), {
            'method': 'GET',
            'credentials': 'include',
            'headers': window[_0x2e7fe9(0x181)]()
        });
        if (_0x4893d5['ok']) {
            const _0x248d67 = await _0x4893d5[_0x2e7fe9(0x165)]();
            if (_0x248d67 && typeof _0x248d67 === 'object' && _0x248d67[_0x2e7fe9(0x18c)] && typeof _0x248d67[_0x2e7fe9(0x18c)] === _0x2e7fe9(0x143) && _0x248d67[_0x2e7fe9(0x18c)][_0x2e7fe9(0x152)] > 0x0) {
                const _0x1e3e56 = _0x248d67[_0x2e7fe9(0x18c)]['toLowerCase']();
                VALIDATION[_0x2e7fe9(0x17b)][_0x2e7fe9(0x167)](_0x1e3e56) ? (_0x4b10b7 = _0x1e3e56, console['log']('📡\x20Fetched\x20plan\x20from\x20backend\x20(validated):', _0x4b10b7)) : console[_0x2e7fe9(0x193)]('⚠️\x20Invalid\x20plan\x20from\x20backend:', _0x248d67[_0x2e7fe9(0x18c)]);
            } else
                console[_0x2e7fe9(0x193)](_0x2e7fe9(0x18d));
        } else
            console[_0x2e7fe9(0x193)](_0x2e7fe9(0x13d), _0x4893d5[_0x2e7fe9(0x147)]);
    } catch (_0x3936b4) {
        console[_0x2e7fe9(0x193)](_0x2e7fe9(0x12c), _0x3936b4);
    }
    if (_0x4fac56 && typeof _0x4b10b7 === 'string' && _0x4b10b7[_0x2e7fe9(0x152)] > 0x0) {
        const _0x1088c0 = _0x4b10b7['charAt'](0x0)[_0x2e7fe9(0x151)]() + _0x4b10b7[_0x2e7fe9(0x196)](0x1)[_0x2e7fe9(0x195)](), _0x3bf659 = _0x1088c0 + _0x2e7fe9(0x175);
        _0x4fac56[_0x2e7fe9(0x17d)] = _0x3bf659, console[_0x2e7fe9(0x13a)](_0x2e7fe9(0x156), _0x3bf659);
    }
    const _0x28e6a1 = _0x367c21['picture'] || _0x367c21[_0x2e7fe9(0x126)] || _0x367c21[_0x2e7fe9(0x172)] || null;
    if (_0x4a6480) {
        if (_0x28e6a1 && window['isValidImageUrl'](_0x28e6a1)) {
            console['log'](_0x2e7fe9(0x12f)), _0x4a6480[_0x2e7fe9(0x176)] = '';
            const _0xd8e7f4 = document[_0x2e7fe9(0x134)](_0x2e7fe9(0x171));
            _0xd8e7f4[_0x2e7fe9(0x15a)] = _0x28e6a1, _0xd8e7f4[_0x2e7fe9(0x133)] = _0x367c21[_0x2e7fe9(0x158)] || _0x2e7fe9(0x157), _0xd8e7f4[_0x2e7fe9(0x131)][_0x2e7fe9(0x130)] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;', _0xd8e7f4[_0x2e7fe9(0x13b)] = () => {
                const _0x8c7ed1 = _0x2e7fe9;
                console[_0x8c7ed1(0x193)](_0x8c7ed1(0x154)), _0x4a6480[_0x8c7ed1(0x176)] = _0x8c7ed1(0x188);
            }, _0x4a6480[_0x2e7fe9(0x14c)](_0xd8e7f4);
        } else
            console[_0x2e7fe9(0x13a)](_0x2e7fe9(0x169)), _0x4a6480[_0x2e7fe9(0x176)] = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>';
    }
}
window[_0x24ac34(0x16f)] = updateProfileDropdown, document[_0x24ac34(0x180)](_0x24ac34(0x178), () => {
    const _0x4dfc52 = _0x24ac34, _0x2d64a0 = document[_0x4dfc52(0x199)]('profileAvatarBtn'), _0x1fc6eb = document['getElementById']('profileDropdown'), _0x27afb4 = document[_0x4dfc52(0x199)](_0x4dfc52(0x153));
    _0x2d64a0 ? (_0x2d64a0['addEventListener'](_0x4dfc52(0x183), _0x42e589 => {
        const _0x5e81a8 = _0x4dfc52;
        _0x42e589[_0x5e81a8(0x135)](), _0x1fc6eb && _0x1fc6eb['classList'][_0x5e81a8(0x159)](_0x5e81a8(0x16a));
    }), console[_0x4dfc52(0x13a)](_0x4dfc52(0x18e))) : console[_0x4dfc52(0x193)](_0x4dfc52(0x15d));
    document['addEventListener']('click', _0x50a437 => {
        const _0x26fc2b = _0x4dfc52;
        if (_0x27afb4 && _0x27afb4[_0x26fc2b(0x148)](_0x50a437[_0x26fc2b(0x15f)]))
            return;
        _0x1fc6eb && _0x1fc6eb[_0x26fc2b(0x168)]['remove'](_0x26fc2b(0x16a));
    });
    const _0x5f51ed = document[_0x4dfc52(0x199)](_0x4dfc52(0x12a)), _0x112fde = document[_0x4dfc52(0x199)](_0x4dfc52(0x161)), _0x525a18 = document['getElementById'](_0x4dfc52(0x190));
    _0x112fde && _0x112fde[_0x4dfc52(0x180)](_0x4dfc52(0x183), _0x241f1e => {
        const _0x4604b6 = _0x4dfc52;
        _0x241f1e['preventDefault']();
        if (_0x1fc6eb)
            _0x1fc6eb[_0x4604b6(0x168)][_0x4604b6(0x163)]('open');
        window[_0x4604b6(0x149)][_0x4604b6(0x173)] = '/premium.html';
    });
    _0x525a18 && _0x525a18[_0x4dfc52(0x180)](_0x4dfc52(0x183), _0x57064e => {
        const _0x41fcfa = _0x4dfc52;
        _0x57064e[_0x41fcfa(0x12d)]();
        if (_0x1fc6eb)
            _0x1fc6eb[_0x41fcfa(0x168)][_0x41fcfa(0x163)](_0x41fcfa(0x16a));
        typeof logout === _0x41fcfa(0x14d) ? logout() : handleSecureLogout();
    });
    let _0x596a9e = null;
    try {
        window['currentUser'] && (_0x596a9e = window[_0x4dfc52(0x189)](window[_0x4dfc52(0x127)]));
        if (!_0x596a9e) {
            const _0x923748 = localStorage[_0x4dfc52(0x184)]('currentUser');
            if (_0x923748)
                try {
                    const _0x3c4bbe = JSON[_0x4dfc52(0x197)](_0x923748);
                    _0x596a9e = window['validateUserObject'](_0x3c4bbe);
                } catch (_0x14e891) {
                    console['error'](_0x4dfc52(0x194), _0x14e891);
                }
        }
        _0x596a9e ? (updateProfileDropdown(_0x596a9e), console['log'](_0x4dfc52(0x146))) : console[_0x4dfc52(0x193)]('No\x20valid\x20user\x20data\x20available\x20for\x20dropdown');
    } catch (_0x42db21) {
        console[_0x4dfc52(0x182)]('Error\x20loading\x20user\x20data\x20for\x20dropdown:', _0x42db21);
    }
});
function _0x1f3f() {
    const _0x436887 = [
        '🔄\x20Updating\x20profile\x20dropdown\x20with\x20validated\x20user',
        'dropdownLogout',
        'MAX_STRING_LENGTH',
        'MAX_USERNAME_LENGTH',
        'warn',
        'Failed\x20to\x20parse\x20localStorage\x20currentUser:',
        'toLowerCase',
        'slice',
        'parse',
        'token',
        'getElementById',
        'POST',
        'boolean',
        'PERMISSION_DENIED',
        'substring',
        'avatar',
        'currentUser',
        'handleSecureLogout',
        'Guest\x20User',
        'dropdownBilling',
        'removeItem',
        'Could\x20not\x20fetch\x20plan\x20from\x20backend,\x20using\x20safe\x20default:',
        'preventDefault',
        'http:',
        '✅\x20Setting\x20dropdown\x20avatar\x20(URL\x20validated)',
        'cssText',
        'style',
        'max',
        'alt',
        'createElement',
        'stopPropagation',
        'hasOwnProperty',
        '2456031enJnyo',
        'tier',
        'code',
        'log',
        'onerror',
        '1251135pjTnEm',
        'Failed\x20to\x20fetch\x20profile\x20from\x20backend:',
        '/login.html?logout=1',
        'No\x20user\x20provided\x20to\x20updateProfileDropdown',
        'dropdownUserPlan',
        'userSubscription',
        '91750jlFjoX',
        'string',
        '3276600QEqWKZ',
        'MAX_EMAIL_LENGTH',
        '✅\x20Profile\x20dropdown\x20loaded\x20successfully',
        'status',
        'contains',
        'location',
        '55851xxUkYG',
        'youtube_connected',
        'appendChild',
        'function',
        'div',
        'number',
        'sanitizeString',
        'toUpperCase',
        'length',
        'profileDropdownWr',
        'Failed\x20to\x20load\x20profile\x20image',
        'You\x20do\x20not\x20have\x20permission\x20for\x20this\x20action.',
        '✅\x20Updated\x20dropdown\x20plan\x20to:',
        'Profile',
        'name',
        'toggle',
        'src',
        '28mLqGSM',
        '/api/auth/logout',
        '⚠️\x20profileAvatarBtn\x20element\x20not\x20found',
        'picture',
        'target',
        'free',
        'dropdownPricing',
        'User\x20object\x20failed\x20validation,\x20skipping\x20dropdown\x20update',
        'remove',
        'validateNumber',
        'json',
        'Authentication\x20failed.\x20Please\x20log\x20in\x20again.',
        'includes',
        'classList',
        '⚠️\x20No\x20valid\x20picture\x20URL\x20for\x20avatar\x20(must\x20be\x20https,\x20http,\x20or\x20data:)',
        'open',
        '5322864sZIjhN',
        'min',
        'email',
        'elite',
        'updateProfileDropdown',
        'Error\x20during\x20logout:',
        'img',
        'photo',
        'href',
        'include',
        '\x20Plan',
        'innerHTML',
        'getSafeErrorMessage',
        'DOMContentLoaded',
        '7jeZtUp',
        '18ABmdpt',
        'ALLOWED_PLANS',
        'data:',
        'textContent',
        'dropdownUserName',
        'object',
        'addEventListener',
        'secureHeaders',
        'error',
        'click',
        'getItem',
        'prime',
        'https:',
        'auth_token',
        '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>',
        'validateUserObject',
        '/api/user/profile',
        '1940788DzsxpW',
        'plan',
        '⚠️\x20Invalid\x20response\x20structure\x20from\x20/api/user/profile',
        '✅\x20Profile\x20avatar\x20button\x20click\x20listener\x20attached'
    ];
    _0x1f3f = function () {
        return _0x436887;
    };
    return _0x1f3f();
}