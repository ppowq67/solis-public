const _0x1b33fa = _0x162e;
(function (_0x35736c, _0x2fdb4d) {
    const _0x485a04 = _0x162e, _0x1fe281 = _0x35736c();
    while (!![]) {
        try {
            const _0x67c934 = parseInt(_0x485a04(0xfe)) / 0x1 * (parseInt(_0x485a04(0x282)) / 0x2) + parseInt(_0x485a04(0x218)) / 0x3 + -parseInt(_0x485a04(0x3ba)) / 0x4 + -parseInt(_0x485a04(0x32d)) / 0x5 * (parseInt(_0x485a04(0x276)) / 0x6) + parseInt(_0x485a04(0x19a)) / 0x7 + parseInt(_0x485a04(0x170)) / 0x8 + parseInt(_0x485a04(0xd0)) / 0x9 * (-parseInt(_0x485a04(0x1fc)) / 0xa);
            if (_0x67c934 === _0x2fdb4d)
                break;
            else
                _0x1fe281['push'](_0x1fe281['shift']());
        } catch (_0x324215) {
            _0x1fe281['push'](_0x1fe281['shift']());
        }
    }
}(_0x2161, 0x48927), window[_0x1b33fa(0x3e3)] = _0x1b33fa(0xab));
let cooldownTimer = null;
function startCooldownTimer(_0xeea586) {
    const _0x942e8f = _0x1b33fa, _0x5843dc = document[_0x942e8f(0x30f)](_0x942e8f(0x2e9));
    if (!_0x5843dc)
        return;
    cooldownTimer && clearInterval(cooldownTimer);
    let _0x3ffb19 = Math[_0x942e8f(0x48d)](0x0, _0xeea586);
    const _0x5613f3 = _0x942e8f(0x1eb);
    _0x5843dc[_0x942e8f(0x371)] = !![], _0x5843dc[_0x942e8f(0x2e4)][_0x942e8f(0xe1)](_0x942e8f(0x1b4)), _0x5843dc[_0x942e8f(0x48c)][_0x942e8f(0x14d)] = _0x942e8f(0x31f), _0x5843dc[_0x942e8f(0x48c)]['cursor'] = _0x942e8f(0xa4), _0x5843dc['innerHTML'] = _0x3ffb19 + 's', _0x5843dc[_0x942e8f(0x48c)][_0x942e8f(0x4ac)] = _0x942e8f(0x192), cooldownTimer = setInterval(() => {
        const _0x15b19a = _0x942e8f;
        _0x3ffb19--, _0x3ffb19 > 0x0 ? _0x5843dc[_0x15b19a(0x1a5)] = _0x3ffb19 + 's' : (clearInterval(cooldownTimer), cooldownTimer = null, _0x5843dc[_0x15b19a(0x371)] = ![], _0x5843dc[_0x15b19a(0x2e4)][_0x15b19a(0x35f)](_0x15b19a(0x1b4)), _0x5843dc[_0x15b19a(0x48c)]['opacity'] = '1', _0x5843dc[_0x15b19a(0x48c)][_0x15b19a(0x427)] = _0x15b19a(0x242), _0x5843dc[_0x15b19a(0x1a5)] = _0x5613f3, _0x5843dc[_0x15b19a(0x48c)][_0x15b19a(0x4ac)] = _0x15b19a(0x335));
    }, 0x3e8);
}
const workspacePanel = document[_0x1b33fa(0x30f)](_0x1b33fa(0x234)), closeWorkspaceBtn = workspacePanel?.[_0x1b33fa(0x44d)](_0x1b33fa(0x482)), appContainer = document[_0x1b33fa(0x30f)](_0x1b33fa(0x231)), sidebar = document[_0x1b33fa(0x44d)]('.sidebar'), userProfile = document[_0x1b33fa(0x30f)](_0x1b33fa(0x1a6)), userMenu = document['getElementById']('userMenu'), settingsBtn = document['getElementById']('settingsBtn'), settingsPanel = document[_0x1b33fa(0x30f)](_0x1b33fa(0x9d)), closeSettings = document[_0x1b33fa(0x30f)](_0x1b33fa(0x155)), darkModeSettingsToggle = document['getElementById'](_0x1b33fa(0x443)), upgradeModal = document[_0x1b33fa(0x30f)](_0x1b33fa(0x1e5)), closeUpgrade = document['getElementById'](_0x1b33fa(0x3f7)), upgradeSettingsBtn = document['getElementById'](_0x1b33fa(0x166)), tokenCount = document[_0x1b33fa(0x44d)](_0x1b33fa(0x1d3)), navItems = document[_0x1b33fa(0x150)](_0x1b33fa(0x26b)), signInBtn = document[_0x1b33fa(0x30f)](_0x1b33fa(0x41e)), signInDisplay = document[_0x1b33fa(0x44d)](_0x1b33fa(0x437));
let isRecording = ![], mediaRecorder = null, audioChunks = [], isGenerating = ![], currentTheme = 'light', tokens = 0x5dc, currentChatId = null, currentAbortController = null, uploadedFiles = [], currentUser = null, promptCount = 0x0, solisWSClient = null, selectedGameplayClip = _0x1b33fa(0x13d), availableGameplayClips = [];
function toggleNavWrapperCollapse(_0x33896a) {
    const _0x1304d0 = _0x1b33fa;
    _0x33896a && (_0x33896a[_0x1304d0(0xc6)](), _0x33896a[_0x1304d0(0x336)]());
    const _0x26518c = document[_0x1304d0(0x30f)](_0x1304d0(0x453));
    if (!_0x26518c)
        return;
    const _0x76c68d = !_0x26518c['classList'][_0x1304d0(0x18e)]('collapsed');
    if (_0x76c68d) {
        const _0x430980 = _0x26518c[_0x1304d0(0x150)](_0x1304d0(0x4b0));
        _0x430980['forEach']((_0x44c1e4, _0x33892a) => {
            _0x44c1e4['style']['transitionDelay'] = _0x33892a * 0x1e + 'ms';
        }), _0x26518c[_0x1304d0(0x2e4)][_0x1304d0(0xe1)](_0x1304d0(0xce)), setTimeout(() => _0x430980[_0x1304d0(0x302)](_0x3dc194 => _0x3dc194[_0x1304d0(0x48c)][_0x1304d0(0x1a1)] = ''), 0x190);
    } else {
        _0x26518c['classList'][_0x1304d0(0x35f)](_0x1304d0(0xce));
        const _0x1463e4 = _0x26518c['querySelectorAll'](_0x1304d0(0x4b0));
        _0x1463e4[_0x1304d0(0x302)]((_0x283c23, _0x4286ab) => {
            const _0xe0cabb = _0x1304d0;
            _0x283c23['style'][_0xe0cabb(0x1a1)] = _0x4286ab * 0x28 + 'ms';
        }), setTimeout(() => _0x1463e4['forEach'](_0x59998e => _0x59998e['style'][_0x1304d0(0x1a1)] = ''), 0x190);
    }
}
function toggleClipsExpansion(_0x44375e) {
    const _0x2729f3 = _0x1b33fa;
    _0x44375e[_0x2729f3(0xc6)](), _0x44375e['stopPropagation']();
    const _0xcb2e4e = document[_0x2729f3(0x30f)](_0x2729f3(0x11a));
    _0xcb2e4e && _0xcb2e4e[_0x2729f3(0x2e4)][_0x2729f3(0x3ca)]('expanded');
}
function closeClipsExpansion() {
    const _0x5a29c8 = _0x1b33fa, _0x4d97f9 = document[_0x5a29c8(0x30f)](_0x5a29c8(0x11a));
    _0x4d97f9 && _0x4d97f9['classList'][_0x5a29c8(0x35f)](_0x5a29c8(0x147));
}
function navigateToClipsTemplates() {
    const _0x385dda = _0x1b33fa;
    closeClipsExpansion();
    const _0xdf83a5 = document[_0x385dda(0x44d)](_0x385dda(0x404));
    if (_0xdf83a5)
        _0xdf83a5['click']();
    else {
    }
}
function navigateToClipsCreate() {
    const _0x3a9a5c = _0x1b33fa;
    closeClipsExpansion();
    const _0x50baa6 = document[_0x3a9a5c(0x44d)](_0x3a9a5c(0x450));
    _0x50baa6 && handleNav(_0x50baa6, 0x3);
}
function navigateToClipsLibrary() {
    const _0x4d8a05 = _0x1b33fa;
    closeClipsExpansion();
    const _0x1c1ef5 = document[_0x4d8a05(0x44d)](_0x4d8a05(0x15b));
    _0x1c1ef5 && _0x1c1ef5[_0x4d8a05(0x259)]();
}
function dockInputInstantly() {
    const _0x558696 = _0x1b33fa, _0x278f76 = document['querySelector'](_0x558696(0x2b1)), _0xa3fa32 = _0x278f76 ? _0x278f76[_0x558696(0x44d)]('.input-container') : null, _0xa85a43 = parseInt(localStorage['getItem'](_0x558696(0x35d)) || '0');
    _0xa3fa32 && _0xa3fa32[_0x558696(0x2e4)]['remove'](_0x558696(0x361), _0x558696(0x22d), _0x558696(0x356)), _0x278f76 && (_0x278f76['classList'][_0x558696(0x35f)](_0x558696(0x265)), _0xa85a43 === 0x0 ? _0x278f76[_0x558696(0x48c)][_0x558696(0x3e6)] = _0x558696(0x35e) : _0x278f76['style'][_0x558696(0x3e6)] = _0x558696(0x1e4));
}
window[_0x1b33fa(0x48e)] = dockInputInstantly;
function initAuth() {
    const _0xf71525 = _0x1b33fa;
    safeLog('[Auth]\x20Initializing\x20authentication...'), verifyToken()[_0xf71525(0x4a0)](_0x3d4707 => {
        const _0x1d3ae1 = _0xf71525;
        currentUser ? (safeLog('[Auth]\x20User\x20authenticated:', currentUser[_0x1d3ae1(0x211)]), typeof updateProfileButton === 'function' && updateProfileButton()) : (safeLog(_0x1d3ae1(0x1ac)), updateUIForGuest());
    })[_0xf71525(0x2c4)](_0x208f85 => {
        const _0x1876f0 = _0xf71525;
        safeLog(_0x1876f0(0x1af), _0x208f85), updateUIForGuest();
    }), safeLog(_0xf71525(0x358));
}
function sanitizeErrorMessage(_0x2ae6e5) {
    const _0x51d180 = _0x1b33fa;
    if (!_0x2ae6e5)
        return _0x51d180(0x47c);
    const _0x57490d = String(_0x2ae6e5[_0x51d180(0x110)] || _0x2ae6e5)[_0x51d180(0xd4)](), _0x1ccd86 = [
            _0x51d180(0xfd),
            'network',
            _0x51d180(0x3ef),
            _0x51d180(0x319),
            'not\x20found',
            _0x51d180(0x37f),
            _0x51d180(0x2b7)
        ], _0x2a593b = _0x57490d['toLowerCase']();
    if (_0x1ccd86[_0x51d180(0x339)](_0x47db91 => _0x2a593b['includes'](_0x47db91)))
        return _0x57490d[_0x51d180(0x3d0)](0x0, 0x64);
    return _0x51d180(0x1d5);
}
function validateInputLength(_0x34e781, _0x2864a2 = 0x3e8, _0x4ea7d4 = _0x1b33fa(0x399)) {
    const _0x1be71d = _0x1b33fa;
    if (typeof _0x34e781 !== 'string')
        return {
            'valid': ![],
            'error': _0x4ea7d4 + _0x1be71d(0x23f)
        };
    if (_0x34e781['length'] > _0x2864a2)
        return {
            'valid': ![],
            'error': _0x4ea7d4 + _0x1be71d(0x1c0) + _0x2864a2 + _0x1be71d(0xb3)
        };
    if (_0x34e781[_0x1be71d(0x392)] === 0x0)
        return {
            'valid': ![],
            'error': _0x4ea7d4 + _0x1be71d(0x460)
        };
    return {
        'valid': !![],
        'value': _0x34e781[_0x1be71d(0xd4)]()
    };
}
function validateURLInput(_0x3287b6, _0x36ca41 = 0x200) {
    const _0x53597c = _0x1b33fa, _0x10d83e = validateInputLength(_0x3287b6, _0x36ca41, _0x53597c(0x35a));
    if (!_0x10d83e[_0x53597c(0x379)])
        return _0x10d83e;
    try {
        const _0x23d278 = _0x10d83e[_0x53597c(0xf4)][_0x53597c(0xd9)](_0x53597c(0x398)) ? _0x10d83e[_0x53597c(0xf4)] : 'https://' + _0x10d83e[_0x53597c(0xf4)], _0x8ac95 = new URL(_0x23d278);
        return {
            'valid': !![],
            'value': _0x10d83e['value']
        };
    } catch (_0x132f09) {
        return {
            'valid': ![],
            'error': 'Invalid\x20URL\x20format'
        };
    }
}
function getCSRFToken() {
    const _0xd55eff = _0x1b33fa, _0x290204 = document[_0xd55eff(0x44d)](_0xd55eff(0x3f6))?.['getAttribute'](_0xd55eff(0xe8));
    if (!_0x290204 || _0x290204 === _0xd55eff(0x446) || _0x290204['length'] < 0x20) {
        safeLog('⚠️\x20WARNING:\x20CSRF\x20token\x20is\x20missing\x20or\x20invalid\x20(<32\x20chars).\x20Ensure:'), safeLog('\x20\x20\x201.\x20Backend\x20sends\x20valid\x20CSRF\x20token\x20in\x20meta\x20tag'), safeLog(_0xd55eff(0x495)), safeLog(_0xd55eff(0x2d0));
        const _0x191671 = _0xd55eff(0x273), _0x58e734 = decodeURIComponent(document[_0xd55eff(0x278)]), _0x23cda5 = _0x58e734['split'](';');
        for (let _0x354a9a of _0x23cda5) {
            _0x354a9a = _0x354a9a[_0xd55eff(0xd4)]();
            if (_0x354a9a[_0xd55eff(0xd9)](_0x191671)) {
                const _0x5ae38c = _0x354a9a[_0xd55eff(0x3d0)](_0x191671[_0xd55eff(0x392)]);
                if (_0x5ae38c && _0x5ae38c[_0xd55eff(0x392)] >= 0x20 && _0x5ae38c !== _0xd55eff(0x446))
                    return _0x5ae38c;
            }
        }
        return safeLog('⚠️\x20CSRF\x20token\x20not\x20properly\x20configured\x20in\x20meta\x20tag\x20or\x20cookies'), '';
    }
    return _0x290204;
}
function getAuthHeaders(_0x2793cb = !![]) {
    const _0xecb2ad = _0x1b33fa, _0x59f24b = { 'Content-Type': _0xecb2ad(0x42a) };
    if (_0x2793cb) {
        const _0x5024d5 = getCSRFToken();
        _0x5024d5 && (_0x59f24b[_0xecb2ad(0x39e)] = _0x5024d5);
    }
    return _0x59f24b;
}
async function initializeCSRFToken() {
    const _0x2797a2 = _0x1b33fa;
    try {
        const _0x2644d5 = await fetch(API_BASE_URL + _0x2797a2(0x327), {
            'method': _0x2797a2(0x2cc),
            'headers': { 'Content-Type': _0x2797a2(0x42a) },
            'credentials': _0x2797a2(0x1d9)
        });
        if (!_0x2644d5['ok'])
            return safeLog('⚠️\x20Failed\x20to\x20fetch\x20CSRF\x20token:', _0x2644d5[_0x2797a2(0xa8)]), ![];
        const _0x20054d = await _0x2644d5[_0x2797a2(0x2d2)]();
        if (_0x20054d[_0x2797a2(0x10d)] && _0x20054d[_0x2797a2(0x10d)][_0x2797a2(0x392)] >= 0x20) {
            const _0x397941 = document[_0x2797a2(0x44d)]('meta[name=\x22csrf-token\x22]');
            if (_0x397941)
                return _0x397941[_0x2797a2(0xf9)](_0x2797a2(0xe8), _0x20054d[_0x2797a2(0x10d)]), safeLog(_0x2797a2(0x4a7)), !![];
        }
    } catch (_0x34ea68) {
        safeLog(_0x2797a2(0x3c6), _0x34ea68);
    }
    return ![];
}
document[_0x1b33fa(0xbe)] === 'loading' ? document[_0x1b33fa(0x1b7)](_0x1b33fa(0x299), initializeCSRFToken) : initializeCSRFToken();
async function verifyToken() {
    const _0x18f6e6 = _0x1b33fa;
    try {
        const _0x38ea73 = await fetch(API_BASE_URL + '/auth/verify', {
            'method': _0x18f6e6(0x2cc),
            'headers': { 'Content-Type': 'application/json' },
            'credentials': _0x18f6e6(0x1d9)
        });
        if (!_0x38ea73['ok']) {
            safeLog('Auth\x20verification\x20error:', _0x38ea73[_0x18f6e6(0xa8)]);
            throw new Error('Authentication\x20verification\x20failed');
        }
        const _0xfcdea4 = await _0x38ea73[_0x18f6e6(0x2d2)]();
        currentUser = _0xfcdea4[_0x18f6e6(0x2c5)], window[_0x18f6e6(0x357)] = currentUser, updateUIForLoggedInUser(), typeof updateProfileButton === _0x18f6e6(0x44e) && setTimeout(() => updateProfileButton(), 0x0), typeof updateMenuUserInfo === _0x18f6e6(0x44e) && updateMenuUserInfo(), typeof updateProfileDropdown === _0x18f6e6(0x44e) && updateProfileDropdown(currentUser)[_0x18f6e6(0x2c4)](_0x541c8e => console[_0x18f6e6(0x421)](_0x18f6e6(0x3f8), _0x541c8e)), checkYouTubeConnection(), await loadTierInfo();
    } catch (_0x4e3021) {
        safeLog(_0x18f6e6(0x32e), _0x4e3021[_0x18f6e6(0x110)]);
        _0x4e3021[_0x18f6e6(0x110)] && (_0x4e3021[_0x18f6e6(0x110)][_0x18f6e6(0x44c)]('Token\x20invalid') || _0x4e3021[_0x18f6e6(0x110)][_0x18f6e6(0x44c)](_0x18f6e6(0x28b)) || _0x4e3021[_0x18f6e6(0x110)][_0x18f6e6(0x44c)](_0x18f6e6(0x193))) ? (safeLog(_0x18f6e6(0x2f6)), currentUser = null, window[_0x18f6e6(0x357)] = null, setTimeout(() => {
            const _0x208449 = _0x18f6e6;
            window[_0x208449(0x3a4)]['href'] = _0x208449(0x9a);
        }, 0x7d0)) : (safeLog(_0x18f6e6(0x485), _0x4e3021[_0x18f6e6(0x110)]), updateUIForGuest(), typeof showNotification === _0x18f6e6(0x44e) && showNotification(_0x18f6e6(0x12a), _0x18f6e6(0x168)));
        throw _0x4e3021;
    }
}
function updateUIForLoggedInUser() {
    const _0xd3a0d1 = _0x1b33fa, _0xa062d1 = document[_0xd3a0d1(0x44d)](_0xd3a0d1(0x2d1)), _0x215b07 = document[_0xd3a0d1(0x44d)](_0xd3a0d1(0x457)), _0x32b5df = document[_0xd3a0d1(0x44d)](_0xd3a0d1(0x2a6));
    if (_0xa062d1)
        _0xa062d1[_0xd3a0d1(0x22f)] = currentUser['name'];
    if (_0x215b07)
        _0x215b07['textContent'] = currentUser[_0xd3a0d1(0x211)];
    if (_0x32b5df) {
        if (currentUser['picture']) {
            const _0x777a35 = document[_0xd3a0d1(0x38b)]('img');
            _0x777a35[_0xd3a0d1(0x395)] = currentUser[_0xd3a0d1(0x377)], _0x777a35[_0xd3a0d1(0x179)] = currentUser[_0xd3a0d1(0x35c)], _0x777a35[_0xd3a0d1(0x48c)][_0xd3a0d1(0x3e6)] = _0xd3a0d1(0x17f), _0x32b5df[_0xd3a0d1(0x1a5)] = '', _0x32b5df[_0xd3a0d1(0x20b)](_0x777a35);
        } else
            _0x32b5df[_0xd3a0d1(0x1a5)] = _0xd3a0d1(0x36e);
    }
    if (signInDisplay)
        signInDisplay[_0xd3a0d1(0x48c)]['display'] = 'none';
    signInBtn && (signInBtn['innerHTML'] = _0xd3a0d1(0x3e5), signInBtn[_0xd3a0d1(0xb0)] = logout), updateSettingsForLoggedInUser();
}
function updateUIForGuest() {
    const _0x3b9020 = _0x1b33fa, _0x35d4a0 = document['querySelector'](_0x3b9020(0x2d1)), _0x5f46ab = document[_0x3b9020(0x44d)]('.user-email'), _0x3595b9 = document[_0x3b9020(0x44d)]('.user-avatar');
    if (_0x35d4a0)
        _0x35d4a0[_0x3b9020(0x22f)] = 'Guest\x20User';
    if (_0x5f46ab)
        _0x5f46ab['textContent'] = _0x3b9020(0x124);
    _0x3595b9 && (_0x3595b9['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2\x2021a8\x208\x200\x200\x201\x2011.873-7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2210\x22\x20cy=\x228\x22\x20r=\x225\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m17\x2017\x205\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m22\x2017-5\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
    if (signInDisplay)
        signInDisplay[_0x3b9020(0x48c)][_0x3b9020(0x17d)] = _0x3b9020(0x121);
    signInBtn && (signInBtn[_0x3b9020(0x1a5)] = '<i\x20class=\x22fas\x20fa-sign-in\x22></i><span>Sign\x20in</span>', signInBtn[_0x3b9020(0xb0)] = redirectToLogin), updateSettingsForGuest();
}
function updateSettingsForLoggedInUser() {
    const _0x5ae212 = _0x1b33fa, _0x10d4e9 = document[_0x5ae212(0x44d)](_0x5ae212(0x1ad)), _0x80e4e3 = document[_0x5ae212(0x44d)](_0x5ae212(0x1bb));
    if (_0x10d4e9)
        _0x10d4e9['textContent'] = _0x5ae212(0x283);
    if (_0x80e4e3)
        _0x80e4e3[_0x5ae212(0x22f)] = 'Signed\x20in\x20as\x20' + currentUser['email'];
    fetchAndUpdateSubscriptionStatus();
}
async function fetchAndUpdateSubscriptionStatus() {
    const _0x2724ca = _0x1b33fa;
    try {
        const _0x211433 = await fetch(API_BASE_URL + _0x2724ca(0x369) + Date[_0x2724ca(0x269)](), {
            'method': _0x2724ca(0x2cc),
            'headers': getAuthHeaders(),
            'credentials': 'include',
            'cache': _0x2724ca(0xf7)
        });
        if (!_0x211433['ok'])
            throw new Error(_0x2724ca(0x1fb));
        const _0x3ac304 = await _0x211433[_0x2724ca(0x2d2)]();
        if (_0x3ac304[_0x2724ca(0x1db)] && _0x3ac304['subscription']) {
            const _0x5d3eef = _0x3ac304['subscription'];
            window[_0x2724ca(0x12b)] = _0x5d3eef[_0x2724ca(0x25d)];
            const _0x177f14 = document[_0x2724ca(0x150)](_0x2724ca(0x163));
            _0x177f14[_0x2724ca(0x302)](_0x440a86 => {
                const _0x524892 = _0x2724ca, _0x563d9f = _0x440a86[_0x524892(0x44d)](_0x524892(0x2e7));
                if (_0x563d9f && _0x563d9f[_0x524892(0x22f)] === _0x524892(0x25a)) {
                    const _0x2a4dfd = _0x440a86[_0x524892(0x44d)](_0x524892(0x205));
                    if (_0x2a4dfd) {
                        const _0x17d67d = _0x5d3eef[_0x524892(0x201)] + _0x524892(0x307) + _0x5d3eef['videos_per_day_limit'] + _0x524892(0x243) + _0x5d3eef[_0x524892(0x1b1)] + _0x524892(0x1e3);
                        _0x2a4dfd['textContent'] = _0x17d67d;
                    }
                }
                if (_0x563d9f && _0x563d9f['textContent'] === _0x524892(0x4ae)) {
                    const _0x5c9e54 = _0x440a86[_0x524892(0x44d)](_0x524892(0x205));
                    _0x5c9e54 && (_0x5c9e54['textContent'] = _0x5d3eef[_0x524892(0x201)]);
                }
            });
        }
    } catch (_0x4ed507) {
        const _0x3ed87d = document[_0x2724ca(0x150)](_0x2724ca(0x163));
        _0x3ed87d[_0x2724ca(0x302)](_0x1e06c8 => {
            const _0x1c20b8 = _0x2724ca, _0x115477 = _0x1e06c8[_0x1c20b8(0x44d)](_0x1c20b8(0x2e7));
            if (_0x115477 && _0x115477[_0x1c20b8(0x22f)] === _0x1c20b8(0x25a)) {
                const _0x256101 = _0x1e06c8['querySelector']('.option-description');
                _0x256101 && (_0x256101[_0x1c20b8(0x22f)] = 'Free\x20Plan\x20-\x20Limited\x20access');
            }
        });
    }
}
function updateSettingsForGuest() {
    const _0x5eb41c = _0x1b33fa, _0x446212 = document['querySelector']('.settings-option\x20.option-name'), _0x46fa5c = document[_0x5eb41c(0x44d)]('.settings-option\x20.option-description');
    if (_0x446212)
        _0x446212[_0x5eb41c(0x22f)] = _0x5eb41c(0x274);
    if (_0x46fa5c)
        _0x46fa5c['textContent'] = 'Want\x20to\x20unlock\x20full\x20feature\x20access?\x20Sign\x20in\x20today';
}
function redirectToLogin() {
    const _0x4997ea = _0x1b33fa;
    window[_0x4997ea(0x3a4)][_0x4997ea(0x2c8)] = _0x4997ea(0x9a);
}
function _0x162e(_0x1d9904, _0x42d952) {
    _0x1d9904 = _0x1d9904 - 0x99;
    const _0x216155 = _0x2161();
    let _0x162e60 = _0x216155[_0x1d9904];
    return _0x162e60;
}
function logout() {
    const _0xb28765 = _0x1b33fa;
    currentUser = null, updateUIForGuest(), clearChat(), window[_0xb28765(0x416)](new CustomEvent(_0xb28765(0x3af), { 'detail': {} })), showNotification(_0xb28765(0x23a), 'success'), redirectToLogin();
}
function getHeaders() {
    const _0x28e805 = _0x1b33fa;
    return console[_0x28e805(0x421)](_0x28e805(0x2ba)), getAuthHeaders(!![]);
}
async function loadAvailableGameplayClips() {
    const _0x344f9b = _0x1b33fa;
    try {
        const _0xed4569 = await fetch(_0x344f9b(0x298), {
            'method': _0x344f9b(0x2cc),
            'headers': getHeaders()
        });
        if (_0xed4569['ok']) {
            const _0x2610e5 = await _0xed4569['json']();
            return availableGameplayClips = _0x2610e5['clips'] || [], availableGameplayClips;
        } else
            return safeLog(_0x344f9b(0x272)), availableGameplayClips = [], availableGameplayClips;
    } catch (_0x1f0dda) {
        return safeLog(_0x344f9b(0x3a8), _0x1f0dda), availableGameplayClips = [], availableGameplayClips;
    }
}
async function loadTierInfo() {
    const _0x2324df = _0x1b33fa;
    try {
        const _0x38c139 = await fetch(API_BASE_URL + _0x2324df(0x442), {
            'method': _0x2324df(0x2cc),
            'headers': { 'Content-Type': 'application/json' },
            'credentials': _0x2324df(0x1d9)
        });
        if (_0x38c139['ok']) {
            const _0x53d815 = await _0x38c139[_0x2324df(0x2d2)](), _0xc31bf7 = _0x53d815['subscription'], _0x1d0d74 = document[_0x2324df(0x30f)](_0x2324df(0x1d1));
            if (_0x1d0d74) {
                const _0x4cb4b6 = _0xc31bf7['plan_name'] || _0xc31bf7[_0x2324df(0x25d)];
                _0x1d0d74[_0x2324df(0x22f)] = _0x4cb4b6[_0x2324df(0x11b)](0x0)[_0x2324df(0x3f9)]() + _0x4cb4b6[_0x2324df(0x1b8)](0x1);
            }
            const _0x2bc097 = document[_0x2324df(0x30f)](_0x2324df(0x1de));
            if (_0x2bc097) {
                if (_0xc31bf7[_0x2324df(0x25d)] === 'free')
                    _0x2bc097[_0x2324df(0x22f)] = _0x2324df(0x20f);
                else {
                    if (_0xc31bf7[_0x2324df(0x31d)]) {
                        const _0x12ec56 = new Date(_0xc31bf7['plan_expires_at']), _0x6a9506 = new Date(), _0x4b49d7 = Math[_0x2324df(0x3e9)]((_0x12ec56 - _0x6a9506) / (0x3e8 * 0x3c * 0x3c * 0x18));
                        if (_0x4b49d7 < 0x0)
                            _0x2bc097['textContent'] = _0x2324df(0x38d);
                        else {
                            if (_0x4b49d7 === 0x0)
                                _0x2bc097[_0x2324df(0x22f)] = _0x2324df(0x497);
                            else
                                _0x4b49d7 === 0x1 ? _0x2bc097[_0x2324df(0x22f)] = 'Expires\x20tomorrow' : _0x2bc097['textContent'] = _0x2324df(0x479) + _0x4b49d7 + '\x20days';
                        }
                    } else
                        _0x2bc097[_0x2324df(0x22f)] = '';
                }
            }
            return typeof updateStorageDisplayOnDashboard === 'function' && updateStorageDisplayOnDashboard(_0xc31bf7), _0xc31bf7;
        } else
            safeLog(_0x2324df(0x19b));
    } catch (_0x3c5b39) {
        safeLog(_0x2324df(0x2f2), _0x3c5b39);
    }
}
function showGameplayClipSelector(_0x584557) {
    const _0x4b2319 = _0x1b33fa;
    safeLog(_0x4b2319(0x3bd));
    availableGameplayClips[_0x4b2319(0x392)] === 0x0 && (safeLog(_0x4b2319(0x2df)), loadAvailableGameplayClips());
    const _0x22799f = _0x584557 ? _0x584557['clientX'] : window[_0x4b2319(0x4ab)] / 0x2, _0x36f467 = _0x584557 ? _0x584557[_0x4b2319(0x2aa)] : window[_0x4b2319(0xa3)] / 0x2;
    setTimeout(() => {
        const _0x4ea02a = _0x4b2319;
        window['showGameplayPanel'] ? window[_0x4ea02a(0x3e2)](_0x22799f, _0x36f467) : safeLog(_0x4ea02a(0x2a9));
    }, 0x64);
}
function selectGameplayClip(_0x5c7d26) {
    selectedGameplayClip = _0x5c7d26;
}
function initializeSplitscreenDivider() {
    const _0x49b11d = _0x1b33fa, _0x33d9ed = document[_0x49b11d(0x30f)](_0x49b11d(0x108)), _0x4e7280 = document[_0x49b11d(0x30f)]('dividerLine'), _0x49aae3 = document[_0x49b11d(0x30f)](_0x49b11d(0x13f));
    if (!_0x33d9ed || !_0x4e7280 || !_0x49aae3) {
        safeLog(_0x49b11d(0x266));
        return;
    }
    let _0xefc549 = ![], _0x300b70 = ![];
    _0x33d9ed[_0x49b11d(0x1b7)](_0x49b11d(0x2a2), () => {
        const _0x139d67 = _0x49b11d;
        !_0xefc549 && (_0x4e7280[_0x139d67(0x48c)]['background'] = _0x139d67(0x2f9), _0x4e7280[_0x139d67(0x48c)][_0x139d67(0x3b4)] = _0x139d67(0x1a2), _0x49aae3 && (_0x49aae3[_0x139d67(0x48c)]['opacity'] = '1', _0x49aae3['style']['background'] = _0x139d67(0x2f9)));
    }), _0x33d9ed[_0x49b11d(0x1b7)](_0x49b11d(0x321), () => {
        const _0x4c1942 = _0x49b11d;
        !_0xefc549 && (_0x4e7280[_0x4c1942(0x48c)][_0x4c1942(0x13c)] = 'rgba(255,\x20255,\x20255,\x200.4)', _0x4e7280[_0x4c1942(0x48c)][_0x4c1942(0x3b4)] = _0x4c1942(0x31c), _0x49aae3 && (_0x49aae3[_0x4c1942(0x48c)][_0x4c1942(0x14d)] = '0'));
    }), _0x33d9ed[_0x49b11d(0x1b7)]('mousedown', _0x2f06f5 => {
        const _0x7765dd = _0x49b11d;
        _0xefc549 = !![];
        _0x49aae3 && (_0x49aae3[_0x7765dd(0x48c)][_0x7765dd(0x14d)] = '1', _0x49aae3[_0x7765dd(0x48c)]['background'] = _0x7765dd(0xc8));
        const _0x17a0f4 = _0x33d9ed['parentElement'], _0x42b591 = _0x17a0f4['children'][0x0], _0x2b3a76 = _0x17a0f4[_0x7765dd(0x445)][0x2], _0x269f5d = _0x2f06f5[_0x7765dd(0x2aa)], _0x1e81af = _0x17a0f4[_0x7765dd(0x463)];
        let _0xfed5fd = 0x0;
        const _0x42e867 = _0x379651 => {
                const _0x2f318c = _0x7765dd;
                _0xfed5fd = _0x379651[_0x2f318c(0x2aa)] - _0x269f5d;
                const _0x28514c = _0x1e81af * 0.15;
                if (_0xfed5fd < -_0x28514c)
                    _0x42b591[_0x2f318c(0x48c)]['opacity'] = '0.5', _0x2b3a76[_0x2f318c(0x48c)][_0x2f318c(0x14d)] = '1';
                else
                    _0xfed5fd > _0x28514c ? (_0x42b591[_0x2f318c(0x48c)][_0x2f318c(0x14d)] = '1', _0x2b3a76[_0x2f318c(0x48c)][_0x2f318c(0x14d)] = '0.5') : (_0x42b591[_0x2f318c(0x48c)][_0x2f318c(0x14d)] = '1', _0x2b3a76[_0x2f318c(0x48c)][_0x2f318c(0x14d)] = '1');
            }, _0x32e994 = () => {
                const _0x49febc = _0x7765dd;
                _0xefc549 = ![], _0x4e7280[_0x49febc(0x48c)]['background'] = _0x49febc(0x44f), _0x4e7280[_0x49febc(0x48c)][_0x49febc(0x3b4)] = _0x49febc(0x31c);
                _0x49aae3 && (_0x49aae3[_0x49febc(0x48c)]['opacity'] = '0');
                const _0x583d77 = _0x1e81af * 0.15;
                _0xfed5fd < -_0x583d77 ? (_0x300b70 = !![], _0x42b591[_0x49febc(0x48c)][_0x49febc(0x121)] = '0', _0x42b591[_0x49febc(0x48c)][_0x49febc(0x17d)] = _0x49febc(0x415), _0x2b3a76[_0x49febc(0x48c)][_0x49febc(0x121)] = '1') : (_0x300b70 = ![], _0x42b591[_0x49febc(0x48c)][_0x49febc(0x121)] = '1', _0x42b591[_0x49febc(0x48c)][_0x49febc(0x17d)] = _0x49febc(0x121), _0x2b3a76[_0x49febc(0x48c)][_0x49febc(0x121)] = '1'), _0x42b591['style'][_0x49febc(0x14d)] = '1', _0x2b3a76[_0x49febc(0x48c)][_0x49febc(0x14d)] = '1', document[_0x49febc(0xf8)](_0x49febc(0x2f3), _0x42e867), document[_0x49febc(0xf8)](_0x49febc(0x3a3), _0x32e994);
            };
        document[_0x7765dd(0x1b7)]('mousemove', _0x42e867), document[_0x7765dd(0x1b7)](_0x7765dd(0x3a3), _0x32e994);
    });
}
document[_0x1b33fa(0x1b7)]('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeSplitscreenDivider();
    }, 0x1f4);
});
const dividerInitCheck = setInterval(() => {
    const _0x211efd = _0x1b33fa, _0x36e185 = document['getElementById'](_0x211efd(0x108));
    _0x36e185 && !_0x36e185['hasAttribute'](_0x211efd(0xae)) && (_0x36e185[_0x211efd(0xf9)](_0x211efd(0xae), 'true'), initializeSplitscreenDivider(), clearInterval(dividerInitCheck));
}, 0x64);
function closeGameplayClipSelector() {
}
function confirmGameplayClip() {
    const _0x562e9f = _0x1b33fa;
    closeGameplayClipSelector(), showNotification(_0x562e9f(0x1f1) + availableGameplayClips['find'](_0x3f446c => _0x3f446c['id'] === selectedGameplayClip)?.[_0x562e9f(0x34a)], _0x562e9f(0x1db));
}
function showNotification(_0x1b8e06, _0xa057f0 = _0x1b33fa(0x27a)) {
    const _0x235522 = _0x1b33fa;
    let _0x4ecb2e = document[_0x235522(0x44d)](_0x235522(0x1a8));
    !_0x4ecb2e && (_0x4ecb2e = document[_0x235522(0x38b)]('div'), _0x4ecb2e[_0x235522(0x40f)] = 'notification', document[_0x235522(0x3aa)]['appendChild'](_0x4ecb2e));
    _0x4ecb2e[_0x235522(0x40f)] = 'notification\x20' + _0xa057f0 + _0x235522(0x328);
    const _0x57b426 = _0xa057f0 === _0x235522(0x1db) ? _0x235522(0x29c) : _0xa057f0 === 'error' ? _0x235522(0x2f7) : _0x235522(0x27a);
    _0x4ecb2e[_0x235522(0x1a5)] = _0x235522(0x467) + _0x57b426 + '-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22notificationMessage\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', document[_0x235522(0x30f)](_0x235522(0x238))[_0x235522(0x22f)] = _0x1b8e06, setTimeout(() => {
        const _0x3c8136 = _0x235522;
        _0x4ecb2e[_0x3c8136(0x2e4)][_0x3c8136(0x35f)](_0x3c8136(0x101));
    }, CONFIG['UI'][_0x235522(0x2e1)]);
}
function handleGoogleCallback() {
    const _0x2cbb4a = _0x1b33fa, _0x68f237 = new URLSearchParams(window[_0x2cbb4a(0x3a4)][_0x2cbb4a(0x30c)]), _0x406e93 = _0x68f237[_0x2cbb4a(0x14b)](_0x2cbb4a(0x2b7));
    if (_0x406e93) {
        safeLog('OAuth\x20error:', _0x406e93), showNotification(_0x2cbb4a(0x12c) + _0x406e93, 'error'), setTimeout(() => window[_0x2cbb4a(0x3a4)][_0x2cbb4a(0x2c8)] = _0x2cbb4a(0x9a), 0x7d0);
        return;
    }
    verifyToken()[_0x2cbb4a(0x4a0)](() => {
        const _0x3e8381 = _0x2cbb4a;
        window[_0x3e8381(0x416)](new CustomEvent(_0x3e8381(0x1fe), { 'detail': { 'user': currentUser } })), window[_0x3e8381(0x2a4)][_0x3e8381(0x104)]({}, document[_0x3e8381(0x34a)], window['location'][_0x3e8381(0x132)]), window[_0x3e8381(0x3a4)][_0x3e8381(0x2c8)] = _0x3e8381(0x251);
    })[_0x2cbb4a(0x2c4)](() => {
        const _0x300fe2 = _0x2cbb4a;
        safeLog(_0x300fe2(0x480)), showNotification(_0x300fe2(0x49e), _0x300fe2(0x2b7)), setTimeout(() => window[_0x300fe2(0x3a4)][_0x300fe2(0x2c8)] = _0x300fe2(0x9a), 0x7d0);
    });
}
function parseMarkdown(_0x27005e) {
    const _0x2ba6fd = _0x1b33fa, _0x425aca = sanitizeHTML(_0x27005e);
    return _0x425aca[_0x2ba6fd(0x477)](/\*\*(.*?)\*\*/g, _0x2ba6fd(0x3d1))[_0x2ba6fd(0x477)](/\*(.*?)\*/g, _0x2ba6fd(0x1c6));
}
function init() {
    const _0x28fdb7 = _0x1b33fa, _0x106755 = localStorage[_0x28fdb7(0x1e7)](_0x28fdb7(0x351)) || _0x28fdb7(0x159);
    document[_0x28fdb7(0xc3)]['setAttribute']('data-theme', _0x106755), currentTheme = _0x106755;
    const _0x752cf6 = new URLSearchParams(window[_0x28fdb7(0x3a4)][_0x28fdb7(0x30c)]), _0x547b99 = _0x752cf6[_0x28fdb7(0x14b)](_0x28fdb7(0x413));
    if (_0x547b99) {
        handleGoogleCallback();
        return;
    }
    initAuth(), setTimeout(() => {
        const _0x45965d = _0x28fdb7;
        typeof updateProfileButton === _0x45965d(0x44e) && updateProfileButton();
    }, 0x64), chatHistory = [], setupEventListeners(), updateTokenDisplay();
    const _0x4da54c = localStorage[_0x28fdb7(0x1e7)](_0x28fdb7(0x49b));
    _0x4da54c === _0x28fdb7(0x43f) && sidebar[_0x28fdb7(0x2e4)]['add'](_0x28fdb7(0x147));
    const _0xa4352a = document[_0x28fdb7(0x44d)](_0x28fdb7(0x2b1)), _0x4356bc = _0xa4352a ? _0xa4352a[_0x28fdb7(0x44d)](_0x28fdb7(0x1ba)) : null;
    _0x4356bc && _0x4356bc[_0x28fdb7(0x2e4)][_0x28fdb7(0xe1)](_0x28fdb7(0x361));
    _0xa4352a && _0xa4352a[_0x28fdb7(0x2e4)][_0x28fdb7(0xe1)]('is-first-prompt');
    initClipsStudio();
    const _0x179895 = document[_0x28fdb7(0x30f)]('plusFeaturesBtn');
    _0x179895 && _0x179895[_0x28fdb7(0x1b7)]('click', function (_0x48af0d) {
        const _0xcdc5a5 = _0x28fdb7;
        _0x48af0d[_0xcdc5a5(0x336)]();
        const _0x2e1c1f = document[_0xcdc5a5(0x30f)](_0xcdc5a5(0x488));
        _0x2e1c1f && (_0x2e1c1f[_0xcdc5a5(0x2e4)][_0xcdc5a5(0x3ca)](_0xcdc5a5(0x3fd)), this[_0xcdc5a5(0x2e4)][_0xcdc5a5(0x3ca)](_0xcdc5a5(0x3fd)));
    });
    document[_0x28fdb7(0x1b7)](_0x28fdb7(0x259), function (_0x5672e8) {
        const _0x139e5a = _0x28fdb7, _0x48f50a = document[_0x139e5a(0x30f)](_0x139e5a(0x488)), _0x3b051c = document[_0x139e5a(0x30f)](_0x139e5a(0x19e));
        if (_0x48f50a && !_0x5672e8[_0x139e5a(0x18d)]['closest'](_0x139e5a(0x2e3)) && !_0x5672e8['target']['closest'](_0x139e5a(0x34e))) {
            _0x48f50a[_0x139e5a(0x2e4)][_0x139e5a(0x35f)](_0x139e5a(0x3fd));
            if (_0x3b051c)
                _0x3b051c[_0x139e5a(0x2e4)]['remove'](_0x139e5a(0x3fd));
        }
    });
    const _0x11bfa6 = document[_0x28fdb7(0x38b)](_0x28fdb7(0x3ff));
    _0x11bfa6[_0x28fdb7(0x2c8)] = _0x28fdb7(0x3ce), _0x11bfa6['rel'] = _0x28fdb7(0x396), document[_0x28fdb7(0xb1)][_0x28fdb7(0x20b)](_0x11bfa6);
}
const CONFIG = {
    'PROCESSING': {
        'MAX_TIME_MS': 0x6 * 0x3c * 0x3c * 0x3e8,
        'POLL_INTERVAL_MS': 0xbb8,
        'COMPLETED_REMOVE_DELAY_MS': 0x1388,
        'CLEANUP_INTERVAL_MS': 0xea60
    },
    'UI': {
        'NOTIFICATION_DURATION_MS': 0xfa0,
        'ANIMATION_DELAY_MS': 0x64,
        'MODAL_TRANSITION_MS': 0xfa,
        'TYPING_INDICATOR_DELAY_MS': 0x5dc
    },
    'RATE_LIMITING': {
        'YOUTUBE_PROCESS_MIN_MS': 0x7d0,
        'POLLING_INTERVAL_MS': 0x1388
    },
    'SECURITY': { 'MAX_CONSOLE_LOGS': 0x0 }
};
function sanitizeHTML(_0x43c338) {
    const _0x2a158e = _0x1b33fa;
    if (typeof _0x43c338 !== _0x2a158e(0x18b))
        return '';
    const _0x56919a = document[_0x2a158e(0x38b)](_0x2a158e(0x1ec));
    return _0x56919a[_0x2a158e(0x22f)] = _0x43c338, _0x56919a[_0x2a158e(0x1a5)];
}
function isValidImageUrl(_0x193ec0) {
    const _0x1a2952 = _0x1b33fa;
    if (!_0x193ec0 || typeof _0x193ec0 !== _0x1a2952(0x18b))
        return ![];
    try {
        if (_0x193ec0[_0x1a2952(0xd9)]('javascript:') || _0x193ec0[_0x1a2952(0xd9)](_0x1a2952(0x178)))
            return safeLog('🔒\x20Blocked\x20invalid\x20URL\x20scheme:', _0x193ec0[_0x1a2952(0x3d0)](0x0, 0x14)), ![];
        const _0x470f90 = new URL(_0x193ec0, window[_0x1a2952(0x3a4)][_0x1a2952(0x2c8)]);
        return _0x470f90[_0x1a2952(0x452)] === _0x1a2952(0x130) || _0x470f90[_0x1a2952(0x452)] === _0x1a2952(0x21f);
    } catch (_0x2b6215) {
        return safeLog(_0x1a2952(0x4a9), _0x193ec0), ![];
    }
}
function debounce(_0x5d1faf, _0xdf40db) {
    let _0x461ee7, _0xd7917d = 0x0;
    return function _0x4bc3ee(..._0x2583f6) {
        const _0x22b010 = _0x162e, _0x37eca7 = Date[_0x22b010(0x269)](), _0x383bc5 = _0x37eca7 - _0xd7917d;
        clearTimeout(_0x461ee7), _0x383bc5 >= _0xdf40db ? (_0xd7917d = _0x37eca7, _0x5d1faf['apply'](this, _0x2583f6)) : _0x461ee7 = setTimeout(() => {
            const _0xf9337d = _0x22b010;
            _0xd7917d = Date['now'](), _0x5d1faf[_0xf9337d(0x12d)](this, _0x2583f6);
        }, _0xdf40db - _0x383bc5);
    };
}
const DEBUG_ENABLED = CONFIG['SECURITY'][_0x1b33fa(0x47a)] !== 0x0;
function safeLog(..._0x5d6203) {
    const _0x3fade6 = _0x1b33fa;
    DEBUG_ENABLED && console[_0x3fade6(0x11f)](..._0x5d6203);
}
async function fetchWithTimeout(_0x34e239, _0x155073 = {}, _0x19c198 = 0x2710) {
    const _0x14af60 = _0x1b33fa, _0x35ae15 = new AbortController(), _0x30956a = setTimeout(() => _0x35ae15[_0x14af60(0x4b2)](), _0x19c198);
    try {
        const _0x467674 = await fetch(_0x34e239, {
            ..._0x155073,
            'signal': _0x35ae15[_0x14af60(0xd3)]
        });
        return clearTimeout(_0x30956a), _0x467674;
    } catch (_0x4f732a) {
        clearTimeout(_0x30956a);
        if (_0x4f732a[_0x14af60(0x35c)] === 'AbortError')
            throw new Error('Request\x20timeout\x20after\x20' + _0x19c198 + 'ms');
        throw _0x4f732a;
    }
}
class ClipSlotSystem {
    constructor() {
        const _0x292338 = _0x1b33fa;
        this['slots'] = {
            0x1: null,
            0x2: null,
            0x3: null,
            0x4: null,
            0x5: null
        }, this[_0x292338(0x32c)] = 0x0;
    }
    [_0x1b33fa(0x449)](_0x2ada89) {
        const _0x1653f7 = _0x1b33fa, _0x5d61c2 = Object['values'](this[_0x1653f7(0x486)])[_0x1653f7(0x10f)](_0x14d0a6 => _0x14d0a6 !== null)[_0x1653f7(0x392)];
        if (_0x5d61c2 < 0x5) {
            const _0x3d17c4 = 0x5 - _0x5d61c2;
            this[_0x1653f7(0x486)][_0x3d17c4] = {
                ..._0x2ada89,
                'slotNumber': _0x3d17c4,
                'addedAt': new Date()[_0x1653f7(0x456)]()
            };
        } else {
            for (let _0x4857f2 = 0x1; _0x4857f2 < 0x5; _0x4857f2++) {
                this[_0x1653f7(0x486)][_0x4857f2] = this[_0x1653f7(0x486)][_0x4857f2 + 0x1], this[_0x1653f7(0x486)][_0x4857f2] && (this[_0x1653f7(0x486)][_0x4857f2][_0x1653f7(0xcc)] = _0x4857f2);
            }
            this['slots'][0x5] = {
                ..._0x2ada89,
                'slotNumber': 0x5,
                'addedAt': new Date()[_0x1653f7(0x456)]()
            };
        }
        return this['totalClips']++, this[_0x1653f7(0x486)];
    }
    [_0x1b33fa(0x373)]() {
        return this['slots'];
    }
    [_0x1b33fa(0x2d8)](_0x4033e8) {
        const _0x2dd697 = _0x1b33fa;
        return this[_0x2dd697(0x486)][_0x4033e8];
    }
    [_0x1b33fa(0x39f)](_0x1bad17) {
        const _0x5a1f8b = _0x1b33fa;
        return this['slots'][_0x1bad17] = null, this[_0x5a1f8b(0x486)];
    }
    [_0x1b33fa(0xef)]() {
        const _0x454a79 = _0x1b33fa;
        return Object[_0x454a79(0x11c)](this[_0x454a79(0x486)])[_0x454a79(0x10f)](([_0x463fe2, _0x739b6]) => _0x739b6 !== null)[_0x454a79(0x286)](([_0x164551, _0x101929]) => ({
            'slotNum': parseInt(_0x164551),
            'data': _0x101929
        }));
    }
}
class ClipsStudio {
    constructor() {
        const _0x2bfca1 = _0x1b33fa;
        this['currentTab'] = _0x2bfca1(0xff), this[_0x2bfca1(0x309)] = [], this['libraryItems'] = [], this['initialized'] = ![], this[_0x2bfca1(0x3eb)] = null, this[_0x2bfca1(0x46c)] = null, this['templates'] = {}, this[_0x2bfca1(0x1f2)] = ![], this['monitoringIntervals'] = new Map(), this['currentEditingProject'] = null, this[_0x2bfca1(0x10a)] = new ClipSlotSystem(), this[_0x2bfca1(0x45d)] = null, this[_0x2bfca1(0x28c)] = !![], this[_0x2bfca1(0xb8)] = null, this[_0x2bfca1(0xe2)] = null, this[_0x2bfca1(0x4a8)] = 0x0;
    }
    async [_0x1b33fa(0x337)]() {
        const _0x5a2b8e = _0x1b33fa;
        if (this[_0x5a2b8e(0x1f7)])
            return;
        try {
            this[_0x5a2b8e(0x409)](), this['loadTemplates'](), await this[_0x5a2b8e(0x1d0)](), await this[_0x5a2b8e(0x33e)](), this[_0x5a2b8e(0x1f7)] = !![], this[_0x5a2b8e(0x45b)](), this[_0x5a2b8e(0x27b)](), this[_0x5a2b8e(0x1fa)]();
            const _0x1d1387 = localStorage[_0x5a2b8e(0x1e7)]('clipsStudioCurrentTab');
            _0x1d1387 && [
                _0x5a2b8e(0xff),
                _0x5a2b8e(0x14c),
                'processing',
                _0x5a2b8e(0x209),
                _0x5a2b8e(0xc0)
            ]['includes'](_0x1d1387) ? this[_0x5a2b8e(0x25b)](_0x1d1387) : this[_0x5a2b8e(0x25b)](_0x5a2b8e(0xff));
        } catch (_0x1c3e4d) {
            safeLog(_0x5a2b8e(0x384), _0x1c3e4d);
        }
    }
    [_0x1b33fa(0x27b)]() {
        const _0x472339 = _0x1b33fa;
        try {
            if (!window['SolisAIWebSocketClient']) {
                safeLog(_0x472339(0x119));
                return;
            }
            if (!currentUser) {
                safeLog(_0x472339(0x465));
                return;
            }
            solisWSClient = new SolisAIWebSocketClient(), solisWSClient['connect'](), safeLog(_0x472339(0x1a0)), setTimeout(() => {
                const _0x294073 = _0x472339;
                this[_0x294073(0x125)]();
            }, 0x1f4);
        } catch (_0x4a3c5a) {
            safeLog('❌\x20Failed\x20to\x20initialize\x20WebSocket:', _0x4a3c5a);
        }
    }
    [_0x1b33fa(0x4a5)]() {
        const _0x4e304f = _0x1b33fa, _0x84121a = document[_0x4e304f(0x30f)](_0x4e304f(0x2de));
        if (!_0x84121a)
            return;
        const _0x21b337 = _0x84121a[_0x4e304f(0x44d)](_0x4e304f(0x4a2)), _0xaf96ce = this[_0x4e304f(0x2cf)][_0x4e304f(0x22b)]((_0x16717c, _0x4bb1be) => _0x4bb1be[_0x4e304f(0x425)] - _0x16717c['timestamp'])[_0x4e304f(0x1b8)](0x0, 0x3);
        _0xaf96ce[_0x4e304f(0x302)](_0x9f33a9 => {
            const _0xc1dabc = _0x4e304f, _0x55853d = this['getTimeAgo'](_0x9f33a9[_0xc1dabc(0x425)]), _0x23af30 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-video\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-title\x22>Created\x20a\x20clip</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-description\x22>' + (_0x9f33a9[_0xc1dabc(0x35c)] || _0xc1dabc(0x432)) + _0xc1dabc(0x1f3) + _0x55853d + _0xc1dabc(0x17c);
            _0x84121a[_0xc1dabc(0x114)](_0xc1dabc(0x46f), _0x23af30);
        });
    }
    [_0x1b33fa(0x18f)](_0x496be1) {
        const _0x1d4b2d = _0x1b33fa, _0x160e2e = new Date(), _0x2769ca = _0x160e2e - new Date(_0x496be1), _0x2ecd06 = Math[_0x1d4b2d(0xd7)](_0x2769ca / 0xea60), _0x1bd61b = Math['floor'](_0x2769ca / 0x36ee80), _0xaee457 = Math[_0x1d4b2d(0xd7)](_0x2769ca / 0x5265c00);
        if (_0x2ecd06 < 0x1)
            return '0\x20minutes\x20ago';
        if (_0x2ecd06 < 0x3c)
            return _0x2ecd06 + _0x1d4b2d(0x476) + (_0x2ecd06 > 0x1 ? 's' : '') + _0x1d4b2d(0x2dc);
        if (_0x1bd61b < 0x18)
            return _0x1bd61b + _0x1d4b2d(0x2af) + (_0x1bd61b > 0x1 ? 's' : '') + _0x1d4b2d(0x2dc);
        if (_0xaee457 < 0x7)
            return _0xaee457 + _0x1d4b2d(0x15f) + (_0xaee457 > 0x1 ? 's' : '') + _0x1d4b2d(0x2dc);
        return _0x496be1[_0x1d4b2d(0x1d7)]();
    }
    async ['loadTemplates']() {
        const _0x42cea3 = _0x1b33fa;
        try {
            const _0x71df4e = getAuthHeaders(), _0x5222b2 = await fetch(API_BASE_URL + '/clips/templates', {
                    'method': _0x42cea3(0x2cc),
                    'headers': _0x71df4e,
                    'credentials': _0x42cea3(0x1d9)
                });
            if (_0x5222b2['ok']) {
                const _0x431751 = await _0x5222b2[_0x42cea3(0x2d2)]();
                this[_0x42cea3(0xff)] = _0x431751['templates'] || _0x431751, safeLog(_0x42cea3(0x29a), Object[_0x42cea3(0x138)](this[_0x42cea3(0xff)]));
            } else
                _0x5222b2[_0x42cea3(0xa8)] === 0x191 ? (safeLog(_0x42cea3(0x45c)), this[_0x42cea3(0x26f)]()) : (safeLog(_0x42cea3(0x43d), _0x5222b2[_0x42cea3(0xa8)]), this['setDefaultTemplates']());
        } catch (_0x42a858) {
            safeLog(_0x42cea3(0x444), _0x42a858), this[_0x42cea3(0x26f)]();
        }
    }
    ['setDefaultTemplates']() {
        const _0x1d4bbd = _0x1b33fa;
        this[_0x1d4bbd(0xff)] = {
            'ranked_compilation': {
                'name': _0x1d4bbd(0xf2),
                'description': 'Top\x205\x20moments\x20ranked\x20compilation',
                'duration': _0x1d4bbd(0x3d4),
                'type': _0x1d4bbd(0x3b6),
                'supportsSlotSystem': !![]
            },
            'splitscreen': {
                'name': _0x1d4bbd(0x1e1),
                'description': 'Side-by-side\x20video\x20comparison',
                'duration': _0x1d4bbd(0x498),
                'type': _0x1d4bbd(0x28f),
                'supportsSlotSystem': !![]
            }
        };
    }
    [_0x1b33fa(0x409)]() {
        const _0x1cdfeb = _0x1b33fa;
        this[_0x1cdfeb(0x2e5)](_0x1cdfeb(0x2d7), _0x1cdfeb(0x259), _0x5b8076 => {
            const _0x533318 = _0x1cdfeb;
            this[_0x533318(0x25b)](_0x5b8076[_0x533318(0x255)][_0x533318(0x481)][_0x533318(0xc1)]);
        }), this[_0x1cdfeb(0x2e5)](_0x1cdfeb(0x49f), _0x1cdfeb(0x259), _0x243313 => {
            const _0x122e8c = _0x1cdfeb, _0x37374b = _0x243313['currentTarget'], _0x4eb16a = _0x37374b[_0x122e8c(0x481)][_0x122e8c(0x306)];
            _0x4eb16a === _0x122e8c(0x28f) ? (_0x243313[_0x122e8c(0xc6)](), _0x243313[_0x122e8c(0x336)](), this[_0x122e8c(0x43c)](_0x4eb16a)) : this['openTemplatePreviewModal'](_0x4eb16a, _0x37374b);
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x4b1), _0x1cdfeb(0x259), () => {
            const _0x26a7a6 = _0x1cdfeb;
            this[_0x26a7a6(0x4b1)]();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x408), _0x1cdfeb(0x259), () => {
            this['closeTemplatePreviewModal']();
        }), this[_0x1cdfeb(0x431)]('templateSheetHandle', 'click', () => {
            const _0x4a3322 = _0x1cdfeb, _0x3c2693 = document[_0x4a3322(0x44d)](_0x4a3322(0x171));
            _0x3c2693 && _0x3c2693[_0x4a3322(0x2e4)][_0x4a3322(0x3ca)](_0x4a3322(0x147));
        }), this[_0x1cdfeb(0x431)]('confirmUseTemplateBtn', 'click', () => {
            const _0x5eecef = _0x1cdfeb;
            this[_0x5eecef(0x419)]();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x2e9), _0x1cdfeb(0x259), _0x5d14b5 => {
            const _0x1e40b5 = _0x1cdfeb;
            _0x5d14b5['preventDefault'](), _0x5d14b5[_0x1e40b5(0x336)](), this[_0x1e40b5(0x109)]();
        });
        const _0x4b15de = document[_0x1cdfeb(0x30f)](_0x1cdfeb(0x1f8));
        _0x4b15de && _0x4b15de[_0x1cdfeb(0x1b7)](_0x1cdfeb(0xc2), _0x5cb38b => {
            const _0x210c61 = _0x1cdfeb;
            _0x5cb38b[_0x210c61(0x3a1)] === _0x210c61(0x194) && (_0x5cb38b[_0x210c61(0xc6)](), this['processYouTubeUrl']());
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0xba), _0x1cdfeb(0x259), () => {
            const _0x360234 = _0x1cdfeb;
            this[_0x360234(0x230)]();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x2e8), 'click', () => {
            this['cancelTemplateSelection']();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x3e0), _0x1cdfeb(0x259), () => {
            const _0x3df406 = _0x1cdfeb;
            this[_0x3df406(0x169)]();
        }), this[_0x1cdfeb(0x431)]('refreshProcessingBtn', _0x1cdfeb(0x259), () => {
            this['manualRefresh']();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x36f), 'change', _0x514de2 => {
            const _0x56a72f = _0x1cdfeb;
            this[_0x56a72f(0x293)](_0x514de2[_0x56a72f(0x18d)]['value']);
        }), this['safeAddEventListenerById'](_0x1cdfeb(0x1dc), _0x1cdfeb(0x259), () => {
            const _0xc6d479 = _0x1cdfeb, _0x438274 = document[_0xc6d479(0x44d)](_0xc6d479(0x3c2));
            _0x438274 && _0x438274[_0xc6d479(0x259)](), setTimeout(() => {
                const _0x4d29c6 = _0xc6d479;
                this[_0x4d29c6(0x25b)]('create'), setTimeout(() => this[_0x4d29c6(0x260)](), 0x12c);
            }, 0x12c);
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x23d), _0x1cdfeb(0x259), () => {
            const _0xb79c0f = _0x1cdfeb;
            this['switchTab'](_0xb79c0f(0x14c));
        }), this['safeAddEventListenerById'](_0x1cdfeb(0x372), _0x1cdfeb(0x259), () => {
            const _0x9caf55 = _0x1cdfeb;
            this[_0x9caf55(0x397)]();
        }), this[_0x1cdfeb(0x431)](_0x1cdfeb(0x2c6), _0x1cdfeb(0x259), () => {
            const _0x15ac50 = _0x1cdfeb;
            this[_0x15ac50(0x25b)](_0x15ac50(0x209));
        }), document['addEventListener'](_0x1cdfeb(0x174), () => {
            const _0x1d9180 = _0x1cdfeb;
            document[_0x1d9180(0x215)] && this['stopAllMonitoring']();
        });
    }
    [_0x1b33fa(0x25b)](_0x52694e) {
        const _0x5986e9 = _0x1b33fa;
        this[_0x5986e9(0x190)] === _0x5986e9(0x12e) && _0x52694e !== _0x5986e9(0x12e) && this[_0x5986e9(0x100)]();
        document[_0x5986e9(0x150)](_0x5986e9(0x2d7))[_0x5986e9(0x302)](_0x1a2fc1 => {
            const _0x18a3eb = _0x5986e9;
            _0x1a2fc1[_0x18a3eb(0x2e4)][_0x18a3eb(0x3ca)](_0x18a3eb(0x3fd), _0x1a2fc1[_0x18a3eb(0x481)][_0x18a3eb(0xc1)] === _0x52694e);
        }), document['querySelectorAll'](_0x5986e9(0x3a6))['forEach'](_0x1d45bd => {
            const _0x232141 = _0x5986e9;
            _0x1d45bd[_0x232141(0x2e4)][_0x232141(0x3ca)](_0x232141(0x3fd), _0x1d45bd['id'] === _0x52694e + _0x232141(0x324));
        }), this[_0x5986e9(0x190)] = _0x52694e, localStorage[_0x5986e9(0x204)](_0x5986e9(0x403), _0x52694e);
        if (_0x52694e === 'processing')
            this[_0x5986e9(0x401)](), this[_0x5986e9(0x38e)]();
        else {
            if (_0x52694e === 'library')
                this[_0x5986e9(0x2d3)]();
            else
                _0x52694e === 'editor' && this[_0x5986e9(0x16f)]();
        }
    }
    [_0x1b33fa(0x385)](_0x1cab8c, _0x2a61a5) {
        const _0x3840cd = _0x1b33fa;
        document['querySelectorAll'](_0x3840cd(0x49f))[_0x3840cd(0x302)](_0x413cd8 => {
            const _0x522cb8 = _0x3840cd;
            _0x413cd8['classList'][_0x522cb8(0x35f)]('selected');
        }), _0x2a61a5[_0x3840cd(0x2e4)]['add'](_0x3840cd(0x330)), this[_0x3840cd(0x46c)] = _0x1cab8c, this['showConfirmationButtons'](!![]);
        const _0x4996e8 = this[_0x3840cd(0xff)][_0x1cab8c];
        _0x4996e8 && _0x4996e8[_0x3840cd(0x107)] && this['showSlotSystemInfo']();
    }
    async [_0x1b33fa(0x43c)](_0x25f1c2) {
        const _0x427b10 = _0x1b33fa;
        try {
            const _0x335e96 = window[_0x427b10(0x3e3)] || _0x427b10(0xab), _0x506af9 = getAuthHeaders();
            try {
                const _0x298781 = await fetch(_0x335e96 + _0x427b10(0x442), {
                    'method': _0x427b10(0x2cc),
                    'headers': _0x506af9,
                    'credentials': _0x427b10(0x1d9)
                });
                if (!_0x298781['ok']) {
                    this[_0x427b10(0x14a)](_0x25f1c2);
                    return;
                }
                const _0x89b488 = await _0x298781[_0x427b10(0x2d2)](), _0x35f462 = _0x89b488[_0x427b10(0x493)]?.[_0x427b10(0x25d)] || _0x427b10(0x199);
                if (_0x35f462 === _0x427b10(0x199))
                    this['showProFeatureModal'](_0x25f1c2);
                else {
                    const _0x348650 = document[_0x427b10(0x44d)]('[data-template=\x22' + _0x25f1c2 + '\x22]');
                    this[_0x427b10(0x42f)](_0x25f1c2, _0x348650);
                }
            } catch (_0xaadbee) {
                this[_0x427b10(0x14a)](_0x25f1c2);
            }
        } catch (_0x48ec75) {
            this[_0x427b10(0x14a)](_0x25f1c2);
        }
    }
    [_0x1b33fa(0x14a)](_0x5d6420, _0x1ac0be) {
        const _0x5ea570 = _0x1b33fa, _0x364020 = document['querySelector'](_0x5ea570(0x386));
        if (_0x364020)
            _0x364020[_0x5ea570(0x35f)]();
        if (!document[_0x5ea570(0x30f)](_0x5ea570(0x499))) {
            const _0x462b69 = document[_0x5ea570(0x38b)](_0x5ea570(0x48c));
            _0x462b69['id'] = _0x5ea570(0x499), _0x462b69[_0x5ea570(0x22f)] = _0x5ea570(0xda), document[_0x5ea570(0xb1)][_0x5ea570(0x20b)](_0x462b69);
        }
        const _0x1b6ea5 = document[_0x5ea570(0x38b)](_0x5ea570(0x1ec));
        _0x1b6ea5[_0x5ea570(0x40f)] = _0x5ea570(0x2ab);
        const _0x3b536f = {
                'splitscreen': {
                    'title': _0x5ea570(0x40c),
                    'subtitle': _0x5ea570(0x331),
                    'templateName': _0x5ea570(0x1e1),
                    'templateDesc': _0x5ea570(0x338)
                }
            }, _0x4684b1 = _0x3b536f[_0x5d6420] || _0x3b536f[_0x5ea570(0x28f)];
        _0x1b6ea5[_0x5ea570(0x1a5)] = _0x5ea570(0x2fb) + _0x4684b1['title'] + _0x5ea570(0x28d) + _0x4684b1[_0x5ea570(0x380)] + _0x5ea570(0x426) + _0x4684b1[_0x5ea570(0x3e1)] + _0x5ea570(0x367) + _0x4684b1[_0x5ea570(0x478)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:11px;color:#FF6A3D;font-weight:600;background:#FFF3EF;padding:3px\x209px;border-radius:100px;border:1px\x20solid\x20#FFD0C2\x22>PRO</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-panel-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22pro-close-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2218\x22\x20y1=\x226\x22\x20x2=\x226\x22\x20y2=\x2218\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x226\x22\x20y1=\x226\x22\x20x2=\x2218\x22\x20y2=\x2218\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plans-label\x22>Unlock\x20with\x20a\x20plan</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22basicGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#f1f5f9;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#cbd5e1;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#94a3b8;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#basicGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Basic</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>PRO\x20templates\x20·\x20No\x20watermark</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$18.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x20highlighted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-popular-tag\x22>Popular</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22primeGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#fff176;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ffd600;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#ff9100;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#primeGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Prime</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>PRO\x20templates\x20+\x20Basic\x20Overpurpose</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$29.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22eliteGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#ff6b3d;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ff3d00;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#c70000;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#eliteGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Elite</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Everything\x20+\x20Priority\x20queue</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$49.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-right-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22pro-cta-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x209.9-1\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Unlock\x20Split\x20Screen\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22pro-fine-print\x22>Cancel\x20anytime\x20·\x20No\x20commitment\x20·\x20<a>Maybe\x20later</a></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x1b6ea5[_0x5ea570(0x44d)](_0x5ea570(0x414))[_0x5ea570(0x1b7)](_0x5ea570(0x259), () => {
            const _0x4f3b54 = _0x5ea570;
            _0x1b6ea5['style']['opacity'] = '0', _0x1b6ea5[_0x4f3b54(0x48c)][_0x4f3b54(0x46d)] = _0x4f3b54(0x2a0), setTimeout(() => _0x1b6ea5[_0x4f3b54(0x35f)](), CONFIG['UI'][_0x4f3b54(0x33f)]);
        }), _0x1b6ea5[_0x5ea570(0x150)]('.pro-plan-card')[_0x5ea570(0x302)](_0x4aead1 => {
            const _0x5d1ce2 = _0x5ea570;
            _0x4aead1[_0x5d1ce2(0x1b7)](_0x5d1ce2(0x259), () => {
                const _0xe371bb = _0x5d1ce2;
                _0x1b6ea5[_0xe371bb(0x150)](_0xe371bb(0x30b))['forEach'](_0x21dcd4 => _0x21dcd4[_0xe371bb(0x2e4)]['remove'](_0xe371bb(0x195))), _0x4aead1[_0xe371bb(0x2e4)][_0xe371bb(0xe1)](_0xe371bb(0x195));
            });
        }), _0x1b6ea5[_0x5ea570(0x44d)]('.pro-cta-btn')[_0x5ea570(0x1b7)](_0x5ea570(0x259), () => {
        }), _0x1b6ea5[_0x5ea570(0x44d)](_0x5ea570(0x3b9))[_0x5ea570(0x1b7)](_0x5ea570(0x259), () => {
            const _0x144e10 = _0x5ea570;
            _0x1b6ea5['style']['opacity'] = '0', _0x1b6ea5[_0x144e10(0x48c)][_0x144e10(0x46d)] = _0x144e10(0x2a0), setTimeout(() => _0x1b6ea5[_0x144e10(0x35f)](), CONFIG['UI']['MODAL_TRANSITION_MS']);
        }), _0x1b6ea5[_0x5ea570(0x1b7)](_0x5ea570(0x259), _0x2b56b3 => {
            const _0x2c0a7b = _0x5ea570;
            _0x2b56b3[_0x2c0a7b(0x18d)] === _0x1b6ea5 && (_0x1b6ea5[_0x2c0a7b(0x48c)][_0x2c0a7b(0x14d)] = '0', _0x1b6ea5[_0x2c0a7b(0x48c)][_0x2c0a7b(0x46d)] = _0x2c0a7b(0x2a0), setTimeout(() => _0x1b6ea5['remove'](), CONFIG['UI'][_0x2c0a7b(0x33f)]));
        }), document[_0x5ea570(0x3aa)][_0x5ea570(0x20b)](_0x1b6ea5), safeLog(_0x5ea570(0x2e6), _0x5d6420);
    }
    [_0x1b33fa(0x4b1)]() {
        const _0x344e79 = _0x1b33fa, _0x5c4fdd = document[_0x344e79(0x30f)]('proFeatureModal');
        _0x5c4fdd && (_0x5c4fdd[_0x344e79(0x48c)][_0x344e79(0x17d)] = _0x344e79(0x415));
    }
    ['openTemplatePreviewModal'](_0x21242e, _0x29ae6f) {
        const _0x4c8a74 = _0x1b33fa, _0x1534bc = document[_0x4c8a74(0x30f)]('templatePreviewModal'), _0x440c4e = document['getElementById'](_0x4c8a74(0x314));
        if (!_0x1534bc)
            return;
        safeLog(_0x4c8a74(0x49a) + _0x21242e);
        _0x440c4e && (_0x440c4e[_0x4c8a74(0x48c)][_0x4c8a74(0x17d)] = _0x4c8a74(0x121));
        const _0x51d0e7 = document[_0x4c8a74(0x30f)]('previewTemplateName'), _0x3c0d76 = document[_0x4c8a74(0x30f)](_0x4c8a74(0x241)), _0x3c335e = document['getElementById'](_0x4c8a74(0xc7)), _0x15e01c = document[_0x4c8a74(0x30f)](_0x4c8a74(0xe4));
        safeLog(_0x4c8a74(0xbb), {
            'nameEl': !!_0x51d0e7,
            'descEl': !!_0x3c0d76,
            'durationEl': !!_0x3c335e,
            'formatEl': !!_0x15e01c
        });
        if (_0x51d0e7) {
            const _0x1952cf = _0x21242e[_0x4c8a74(0x477)](/_/g, '\x20')[_0x4c8a74(0x477)](/\b\w/g, _0x4e2058 => _0x4e2058['toUpperCase']());
            _0x51d0e7[_0x4c8a74(0x22f)] = _0x1952cf || 'Template', safeLog(_0x4c8a74(0x29f), _0x1952cf);
        } else
            safeLog(_0x4c8a74(0x141));
        const _0x105712 = document[_0x4c8a74(0x30f)](_0x4c8a74(0x1f8))?.['value'][_0x4c8a74(0xd4)]();
        if (_0x105712) {
            if (_0x3c0d76)
                _0x3c0d76[_0x4c8a74(0x22f)] = _0x4c8a74(0xb4);
            if (_0x3c335e)
                _0x3c335e[_0x4c8a74(0x22f)] = _0x4c8a74(0x32a);
            if (_0x15e01c)
                _0x15e01c[_0x4c8a74(0x22f)] = _0x4c8a74(0x3cc);
        } else {
            if (_0x3c0d76)
                _0x3c0d76[_0x4c8a74(0x22f)] = _0x4c8a74(0x197);
            if (_0x3c335e)
                _0x3c335e[_0x4c8a74(0x22f)] = _0x4c8a74(0x32a);
            if (_0x15e01c)
                _0x15e01c[_0x4c8a74(0x22f)] = _0x4c8a74(0x3cc);
        }
        _0x1534bc[_0x4c8a74(0x2e4)][_0x4c8a74(0xe1)](_0x4c8a74(0x3fd)), _0x1534bc[_0x4c8a74(0x48c)]['display'] = 'flex', _0x1534bc[_0x4c8a74(0x48c)]['visibility'] = _0x4c8a74(0x1ed), _0x1534bc[_0x4c8a74(0x48c)]['opacity'] = '1', document[_0x4c8a74(0x3aa)][_0x4c8a74(0x2e4)][_0x4c8a74(0xe1)]('modal-open'), safeLog(_0x4c8a74(0x436));
        const _0x3c77c8 = document[_0x4c8a74(0x30f)](_0x4c8a74(0x453)), _0x5a52d6 = document['querySelector']('.profile-notif-wrapper');
        _0x3c77c8 && _0x3c77c8[_0x4c8a74(0x2e4)][_0x4c8a74(0xe1)]('disabled');
        _0x5a52d6 && _0x5a52d6[_0x4c8a74(0x2e4)][_0x4c8a74(0xe1)](_0x4c8a74(0x371));
        const _0x2f972b = document[_0x4c8a74(0x44d)](_0x4c8a74(0x3be));
        _0x2f972b && _0x2f972b[_0x4c8a74(0x2e4)][_0x4c8a74(0x35f)](_0x4c8a74(0x147)), setTimeout(() => {
            const _0x416741 = _0x4c8a74;
            _0x440c4e && (_0x440c4e[_0x416741(0x48c)][_0x416741(0x17d)] = _0x416741(0x415));
            const _0x42d86d = this[_0x416741(0xff)][_0x21242e] || {}, _0x34c254 = document[_0x416741(0x30f)](_0x416741(0x1cb)), _0x1fc318 = _0x34c254 ? _0x34c254[_0x416741(0x146)] : !![];
            this['currentTemplateForPreview'] = {
                'id': _0x21242e,
                'card': _0x29ae6f,
                'data': _0x42d86d,
                'addWatermark': _0x1fc318,
                'videoQuality': _0x416741(0x405),
                'videoUrl': _0x105712
            };
            const _0x10b92e = document['getElementById'](_0x416741(0x21b));
            _0x10b92e && (_0x10b92e[_0x416741(0xf4)] = '', document[_0x416741(0x30f)]('charCountDisplay')[_0x416741(0x22f)] = '0');
            const _0x3edf68 = document[_0x416741(0x30f)](_0x416741(0x23e));
            _0x3edf68 && (_0x3edf68[_0x416741(0x48c)][_0x416741(0x17d)] = _0x416741(0x415));
            this['loadVideoPreviewWithTemplate']();
            if (_0x105712) {
                const _0x35664d = document['getElementById'](_0x416741(0x241)), _0x301902 = document[_0x416741(0x30f)](_0x416741(0xc7)), _0x4dc79c = document['getElementById'](_0x416741(0xe4));
                this['fetchVideoMetadata'](_0x105712, _0x301902, _0x4dc79c, _0x35664d);
            }
        }, 0x64);
    }
    [_0x1b33fa(0x3fa)]() {
        const _0x4a73c9 = _0x1b33fa, _0x5b532d = document[_0x4a73c9(0x30f)]('watermarkToggle'), _0x4c1ab9 = document[_0x4a73c9(0x44d)](_0x4a73c9(0x184));
        if (!_0x5b532d || !_0x4c1ab9)
            return;
        _0x5b532d[_0x4a73c9(0x146)] ? (_0x4c1ab9['style'][_0x4a73c9(0x17d)] = _0x4a73c9(0x121), safeLog('✅\x20Watermark\x20VISIBLE')) : (_0x4c1ab9[_0x4a73c9(0x48c)][_0x4a73c9(0x17d)] = _0x4a73c9(0x415), safeLog(_0x4a73c9(0xad)));
    }
    ['setupWatermarkToggle']() {
        const _0x1dfcf0 = _0x1b33fa, _0x1e1da8 = document[_0x1dfcf0(0x30f)](_0x1dfcf0(0x37c)), _0x37a721 = document['getElementById'](_0x1dfcf0(0x464)), _0x1de66f = document[_0x1dfcf0(0x30f)](_0x1dfcf0(0x35b)), _0x3f3249 = document[_0x1dfcf0(0x30f)](_0x1dfcf0(0x1cb));
        if (!_0x3f3249)
            return;
        const _0x5a7ad1 = window['currentUser'] && window[_0x1dfcf0(0x357)][_0x1dfcf0(0x25d)] && window[_0x1dfcf0(0x357)][_0x1dfcf0(0x25d)] !== _0x1dfcf0(0x199);
        _0x1e1da8 && (_0x1e1da8[_0x1dfcf0(0x48c)][_0x1dfcf0(0x17d)] = _0x5a7ad1 ? _0x1dfcf0(0x121) : _0x1dfcf0(0x415)), _0x37a721 && (_0x37a721[_0x1dfcf0(0x48c)][_0x1dfcf0(0x17d)] = _0x5a7ad1 ? _0x1dfcf0(0x415) : _0x1dfcf0(0x121)), _0x1de66f && !_0x5a7ad1 && (_0x1de66f['style'][_0x1dfcf0(0x17d)] = 'block'), _0x5a7ad1 && _0x3f3249[_0x1dfcf0(0x1b7)](_0x1dfcf0(0x466), () => {
            const _0x559e87 = _0x1dfcf0;
            this[_0x559e87(0x3fa)](), safeLog('🔄\x20Watermark\x20toggled:\x20' + (_0x3f3249[_0x559e87(0x146)] ? 'ON' : 'OFF'));
        });
    }
    [_0x1b33fa(0x32f)]() {
        const _0x25ac26 = _0x1b33fa, _0xe4736 = document[_0x25ac26(0x30f)](_0x25ac26(0xb6));
        if (!_0xe4736)
            return;
        const _0x53ddb3 = this[_0x25ac26(0x491)]?.['id'];
        if (!_0x53ddb3) {
            _0xe4736[_0x25ac26(0x1a5)] = _0x25ac26(0x2d9);
            return;
        }
        this['fetchTemplatePreview'](_0xe4736, _0x53ddb3);
    }
    async [_0x1b33fa(0x240)](_0x185dd8, _0x5e3240) {
        const _0x5a6167 = _0x1b33fa;
        try {
            const _0x424809 = this[_0x5a6167(0xff)][_0x5e3240];
            if (!_0x424809) {
                safeLog(_0x5a6167(0x46e) + _0x5e3240 + _0x5a6167(0x20a), Object[_0x5a6167(0x138)](this[_0x5a6167(0xff)]));
                const _0x27351b = {
                    'id': _0x5e3240,
                    'name': _0x5e3240?.[_0x5a6167(0x477)](/_/g, '\x20')['replace'](/\b\w/g, _0x5c6fd2 => _0x5c6fd2[_0x5a6167(0x3f9)]()) || _0x5a6167(0x275),
                    'description': 'Video\x20template\x20preview',
                    'type': _0x5e3240 || _0x5a6167(0x2ea)
                };
                return await this[_0x5a6167(0x318)](_0x185dd8, _0x27351b);
            }
            return _0x424809['id'] = _0x5e3240, await this['renderTemplatePreview'](_0x185dd8, _0x424809);
        } catch (_0x33f852) {
            safeLog(_0x5a6167(0x349), _0x33f852), _0x185dd8[_0x5a6167(0x1a5)] = _0x5a6167(0x2e0);
        }
    }
    async [_0x1b33fa(0x318)](_0x2a6629, _0x3d8328) {
        const _0x32615b = _0x1b33fa;
        if (_0x3d8328?.['id'] && (_0x3d8328['id'][_0x32615b(0x44c)]('..') || _0x3d8328['id'][_0x32615b(0x44c)]('/') || _0x3d8328['id'][_0x32615b(0x44c)]('\x5c') || _0x3d8328['id']['includes'](':'))) {
            console[_0x32615b(0x2b7)](_0x32615b(0x131), _0x3d8328['id']), showNotification('Invalid\x20template', _0x32615b(0x2b7));
            return;
        }
        const _0xdac447 = _0x3d8328?.['id'] ? String(_0x3d8328['id'])[_0x32615b(0x477)](/[<>"']/g, '') : 'unknown';
        safeLog(_0x32615b(0x3c5), !!_0x2a6629, _0x32615b(0x123), _0xdac447);
        const _0x54af6e = this[_0x32615b(0xe9)](_0x3d8328);
        let _0x46da3e = '';
        try {
            const _0x2253a8 = await fetch(window[_0x32615b(0x3e3)] + '/auth/watermark-check', {
                'headers': getAuthHeaders(),
                'credentials': _0x32615b(0x1d9),
                'cache': _0x32615b(0xf7)
            });
            safeLog(_0x32615b(0x322), _0x2253a8[_0x32615b(0xa8)], _0x32615b(0x2b3), _0x2253a8['ok']);
            if (_0x2253a8['ok']) {
                const _0x5a429b = await _0x2253a8[_0x32615b(0x2d2)]();
                safeLog(_0x32615b(0x19c), _0x5a429b);
                if (_0x5a429b[_0x32615b(0x99)] === !![]) {
                    safeLog(_0x32615b(0x180));
                    const _0xd3ac05 = document['getElementById']('watermarkUpgradeBtn');
                    _0xd3ac05 && (_0xd3ac05['style'][_0x32615b(0x17d)] = _0x32615b(0x121)), _0x46da3e = '';
                } else
                    safeLog('📌\x20watermark_required\x20is\x20FALSE\x20-\x20no\x20preview\x20toggle\x20needed'), _0x46da3e = '';
            } else
                safeLog(_0x32615b(0x135), _0x2253a8[_0x32615b(0xa8)]);
        } catch (_0x3805bb) {
            safeLog('🚨\x20Error\x20checking\x20watermark\x20eligibility:', _0x3805bb);
        }
        const _0x24a848 = _0x32615b(0x1be) + _0x54af6e + _0x32615b(0x3b2) + _0x46da3e + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        safeLog('📝\x20Setting\x20watermarked\x20HTML\x20to\x20container'), safeLog(_0x32615b(0x217), _0x46da3e['length']), safeLog(_0x32615b(0x33d), _0x46da3e[_0x32615b(0x44c)]('previewWatermarkToggle')), safeLog('🔍\x20watermarkedHTML\x20includes\x20toggle:', _0x24a848[_0x32615b(0x44c)](_0x32615b(0x3d6))), _0x2a6629[_0x32615b(0x1a5)] = _0x24a848, safeLog(_0x32615b(0x312), _0x32615b(0x248), !!_0x2a6629[_0x32615b(0x44d)](_0x32615b(0x184))), setTimeout(() => {
            const _0x21dbe5 = _0x32615b, _0x63f3ed = _0x2a6629['querySelector']('#previewWatermarkToggle');
            if (_0x63f3ed) {
                safeLog(_0x21dbe5(0x21c)), _0x63f3ed[_0x21dbe5(0x1b7)](_0x21dbe5(0x466), _0x4bb5ee => {
                    const _0x48841a = _0x21dbe5, _0x5a7417 = _0x4bb5ee[_0x48841a(0x18d)][_0x48841a(0x146)], _0x400ab6 = _0x2a6629[_0x48841a(0x44d)](_0x48841a(0x175)), _0x3db248 = _0x2a6629['querySelector']('.watermark-toggle-slider');
                    _0x400ab6 && (_0x400ab6[_0x48841a(0x48c)][_0x48841a(0x2c9)] = _0x5a7417 ? _0x48841a(0x2c1) : _0x48841a(0x239));
                    _0x3db248 && (_0x3db248[_0x48841a(0x48c)][_0x48841a(0x3f1)] = _0x5a7417 ? _0x48841a(0x173) : '2px');
                    localStorage[_0x48841a(0x204)](_0x48841a(0x1bf), _0x5a7417 ? 'true' : 'false');
                    this[_0x48841a(0x491)] && (this[_0x48841a(0x491)][_0x48841a(0x2d6)] = _0x5a7417);
                    const _0x43dd42 = _0x2a6629[_0x48841a(0x44d)](_0x48841a(0x184));
                    _0x43dd42 && (_0x43dd42[_0x48841a(0x48c)][_0x48841a(0x17d)] = _0x5a7417 ? _0x48841a(0x121) : _0x48841a(0x415), safeLog('✅\x20Watermark\x20' + (_0x5a7417 ? _0x48841a(0x472) : 'DISABLED') + '\x20in\x20preview'));
                });
                const _0x204533 = _0x2a6629['querySelector'](_0x21dbe5(0x184));
                _0x204533 && !_0x63f3ed[_0x21dbe5(0x146)] && (_0x204533['style'][_0x21dbe5(0x17d)] = _0x21dbe5(0x415), safeLog(_0x21dbe5(0x47e)));
            } else
                safeLog(_0x21dbe5(0x19d));
        }, 0x0), safeLog('[Template\x20Preview]\x20Content\x20loaded,\x20triggering\x20customizer...'), window[_0x32615b(0x3a0)] && window[_0x32615b(0x167)] && setTimeout(() => {
            const _0x254cae = _0x32615b;
            window[_0x254cae(0x11e)] && window[_0x254cae(0x11e)](!![]);
        }, 0x64);
    }
    [_0x1b33fa(0xe9)](_0x14ae66) {
        const _0x4364a6 = _0x1b33fa, _0x27d5ac = {
                'ranked_compilation': () => _0x4364a6(0x45a),
                'splitscreen': () => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-direction:\x20column;\x20align-items:\x20center;\x20justify-content:\x20center;\x20height:\x20100%;\x20padding:\x200;\x20text-align:\x20center;\x20background:\x20#000;\x20color:\x20white;\x20font-family:\x20\x27Montserrat\x27,\x20Arial,\x20sans-serif;\x20border-radius:\x208px;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TOP:\x20Video\x20Preview\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:\x201;\x20width:\x20100%;\x20background:\x20linear-gradient(135deg,\x20#1a1a2e\x200%,\x20#16213e\x20100%);\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20absolute;\x20width:\x20100%;\x20height:\x20100%;\x20background:\x20repeating-linear-gradient(45deg,\x20#ff6a3d\x200px,\x20#ff6a3d\x202px,\x20transparent\x202px,\x20transparent\x2010px);\x20opacity:\x200.05;\x20pointer-events:\x20none;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20position:\x20relative;\x20z-index:\x202;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2012px;\x20color:\x20#ff6a3d;\x20font-weight:\x20700;\x20text-transform:\x20uppercase;\x20letter-spacing:\x201px;\x20margin-bottom:\x208px;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20gap:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22width:\x206px;\x20height:\x206px;\x20background:\x20#ff6a3d;\x20border-radius:\x2050%;\x20animation:\x20splitscreen-pulse\x202s\x20infinite;\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📹\x20Video\x20Preview\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2014px;\x20font-weight:\x20800;\x20color:\x20#fff;\x20text-transform:\x20uppercase;\x20letter-spacing:\x200.5px;\x22>Your\x20Content</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20DIVIDER\x20LINE\x20-\x20Draggable\x20with\x20Handle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22splitscreenDivider\x22\x20style=\x22width:\x20100%;\x20height:\x208px;\x20background:\x20rgba(20,\x2020,\x2020,\x201);\x20z-index:\x2050;\x20cursor:\x20row-resize;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x20transition:\x20all\x200.2s\x20ease;\x20padding:\x204px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x20100%;\x20height:\x202px;\x20background:\x20rgba(255,\x20255,\x20255,\x200.4);\x20transition:\x20all\x200.2s\x20ease;\x22\x20id=\x22dividerLine\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20absolute;\x20width:\x2040px;\x20height:\x205px;\x20background:\x20rgba(255,\x20107,\x200,\x200.6);\x20border-radius:\x202.5px;\x20transition:\x20all\x200.2s\x20ease;\x20left:\x2050%;\x20transform:\x20translateX(-50%);\x20opacity:\x200;\x22\x20id=\x22dividerHandle\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20BOTTOM:\x20Gameplay\x20with\x20Video\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-no-text-select=\x22true\x22\x20onclick=\x22showGameplayClipSelector(event)\x22\x20style=\x22flex:\x201;\x20width:\x20100%;\x20background:\x20#000;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x20overflow:\x20hidden;\x20cursor:\x20pointer;\x20transition:\x20all\x200.2s\x20ease;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onmouseover=\x22this.style.opacity\x20=\x20\x270.8\x27;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onmouseout=\x22this.style.opacity\x20=\x20\x271\x27;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<video\x20style=\x22width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20display:\x20block;\x20pointer-events:\x20none;\x22\x20autoplay\x20muted\x20loop\x20playsinline\x20id=\x22splitscreenGameplayVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<source\x20src=\x22/assets/Minecraft_1.mp4\x22\x20type=\x22video/mp4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Your\x20browser\x20doesn\x27t\x20support\x20HTML5\x20video.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</video>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20splitscreen-pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%,\x20100%\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20opacity:\x200.5;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
            }, _0x187060 = _0x27d5ac[_0x14ae66['id']] || _0x27d5ac[_0x14ae66[_0x4364a6(0x187)]] || _0x27d5ac[_0x4364a6(0x1e2)];
        return _0x4364a6(0x3dd) + _0x187060();
    }
    async [_0x1b33fa(0x24c)](_0x858e45) {
        const _0x43cc41 = _0x1b33fa;
        try {
            const _0x140283 = document[_0x43cc41(0x30f)]('youtubeSubtitleStatus');
            _0x140283 && (_0x140283[_0x43cc41(0x22f)] = _0x43cc41(0x1e8));
            const _0xc04f30 = await fetch('/api/youtube/subtitles', {
                'method': 'POST',
                'headers': { 'Content-Type': _0x43cc41(0x42a) },
                'body': JSON[_0x43cc41(0x296)]({ 'video_id': _0x858e45 })
            });
            let _0x3f9ade = [];
            if (_0xc04f30['ok']) {
                const _0x1d5999 = await _0xc04f30[_0x43cc41(0x2d2)]();
                _0x3f9ade = _0x1d5999[_0x43cc41(0x246)] || [];
            }
            _0x140283 && (_0x140283[_0x43cc41(0x22f)] = _0x3f9ade[_0x43cc41(0x392)] > 0x0 ? _0x43cc41(0x2cb) : _0x43cc41(0x2fd)), typeof captionSystem !== _0x43cc41(0x118) && (captionSystem['initializeCaptions'](_0x3f9ade), captionSystem[_0x43cc41(0x376)]());
        } catch (_0x396c8a) {
            safeLog(_0x43cc41(0x1b2), _0x396c8a);
            const _0x91a14e = document[_0x43cc41(0x30f)]('youtubeSubtitleStatus');
            _0x91a14e && (_0x91a14e[_0x43cc41(0x22f)] = 'Error');
        }
    }
    [_0x1b33fa(0x417)](_0x1d7448) {
        const _0x32123e = _0x1b33fa, _0x33077e = [
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&]+)/
            ];
        for (const _0x1ec613 of _0x33077e) {
            const _0x305b49 = _0x1d7448[_0x32123e(0x16b)](_0x1ec613);
            if (_0x305b49 && _0x305b49[0x1]) {
                const _0x20cd37 = _0x305b49[0x1];
                if (/^[a-zA-Z0-9_-]{11}$/[_0x32123e(0x294)](_0x20cd37))
                    return _0x20cd37;
            }
        }
        return null;
    }
    [_0x1b33fa(0x258)](_0x553484) {
        const _0xb30213 = _0x1b33fa;
        return /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\//[_0xb30213(0x294)](_0x553484);
    }
    async [_0x1b33fa(0x1cd)](_0x8c0e45, _0x25fa8d, _0x1aa76c, _0x3e77bc) {
        const _0x2611ae = _0x1b33fa;
        try {
            const _0x3c369f = this['extractYouTubeVideoId'](_0x8c0e45);
            if (!_0x3c369f) {
                if (_0x3e77bc)
                    _0x3e77bc['textContent'] = _0x2611ae(0x41d);
                return;
            }
            const _0x30d807 = window[_0x2611ae(0x3e3)] || _0x2611ae(0xab);
            try {
                const _0x2ab948 = await fetch(_0x30d807 + _0x2611ae(0x22c) + _0x3c369f, { 'signal': AbortSignal['timeout'](0xbb8) });
                if (_0x2ab948['ok']) {
                    const _0x4b61c4 = await _0x2ab948[_0x2611ae(0x2d2)]();
                    _0x3e77bc && _0x4b61c4[_0x2611ae(0x34a)] && (_0x3e77bc[_0x2611ae(0x22f)] = _0x4b61c4['title']);
                    if (_0x25fa8d && _0x4b61c4[_0x2611ae(0x3a5)]) {
                        let _0x38d258 = _0x4b61c4[_0x2611ae(0x3a5)];
                        typeof _0x4b61c4['duration'] === _0x2611ae(0x17b) && (_0x38d258 = '~' + Math[_0x2611ae(0xd7)](_0x4b61c4['duration'] / 0x3c) + 'm\x20' + _0x4b61c4[_0x2611ae(0x3a5)] % 0x3c + 's'), _0x25fa8d['textContent'] = _0x38d258;
                    }
                    if (_0x1aa76c) {
                        const _0x2e1625 = this[_0x2611ae(0x258)](_0x8c0e45) ? _0x2611ae(0x17a) : _0x2611ae(0x3cc);
                        _0x1aa76c[_0x2611ae(0x22f)] = _0x2e1625;
                    }
                    return;
                }
            } catch (_0x17c07a) {
                safeLog(_0x2611ae(0xf0), _0x17c07a[_0x2611ae(0x110)]);
            }
            if (_0x3e77bc)
                _0x3e77bc['textContent'] = 'YouTube\x20Video\x20(ID:\x20' + _0x3c369f[_0x2611ae(0x3d0)](0x0, 0x8) + _0x2611ae(0x3b7);
            if (_0x1aa76c)
                _0x1aa76c[_0x2611ae(0x22f)] = this[_0x2611ae(0x258)](_0x8c0e45) ? 'YouTube\x20Shorts' : 'TikTok\x20/\x20Shorts';
            if (_0x25fa8d)
                _0x25fa8d['textContent'] = _0x2611ae(0x32a);
        } catch (_0x5d7b50) {
            safeLog(_0x2611ae(0x1dd), _0x5d7b50);
            if (_0x3e77bc)
                _0x3e77bc[_0x2611ae(0x22f)] = 'Unable\x20to\x20fetch\x20video\x20info';
        }
    }
    [_0x1b33fa(0x162)]() {
        const _0x7d3971 = _0x1b33fa, _0x237784 = document[_0x7d3971(0x30f)](_0x7d3971(0x15d));
        _0x237784 && (_0x237784[_0x7d3971(0x2e4)]['remove'](_0x7d3971(0x3fd)), _0x237784[_0x7d3971(0x48c)][_0x7d3971(0x17d)] = 'none', _0x237784[_0x7d3971(0x48c)][_0x7d3971(0x334)] = 'hidden', _0x237784[_0x7d3971(0x48c)]['opacity'] = '0', document[_0x7d3971(0x3aa)][_0x7d3971(0x2e4)][_0x7d3971(0x35f)](_0x7d3971(0x31b)));
        const _0x507197 = document[_0x7d3971(0x44d)](_0x7d3971(0x171));
        _0x507197 && _0x507197[_0x7d3971(0x2e4)][_0x7d3971(0x35f)](_0x7d3971(0x147));
        const _0x32a003 = document[_0x7d3971(0x30f)](_0x7d3971(0x453)), _0x34b28d = document[_0x7d3971(0x44d)](_0x7d3971(0x189));
        _0x32a003 && _0x32a003['classList'][_0x7d3971(0x35f)](_0x7d3971(0x371)), _0x34b28d && _0x34b28d['classList'][_0x7d3971(0x35f)](_0x7d3971(0x371)), this[_0x7d3971(0x491)] = null;
    }
    async ['updateWatermarkToggleState']() {
        const _0x2e8d56 = _0x1b33fa, _0x50e54d = document[_0x2e8d56(0x30f)](_0x2e8d56(0xdf)), _0xbe849 = document[_0x2e8d56(0x30f)]('watermarkPaidSection'), _0x4d69c8 = document[_0x2e8d56(0x30f)](_0x2e8d56(0x1cb));
        if (!_0x4d69c8)
            return;
        try {
            const _0x14459a = await fetch(API_BASE_URL + _0x2e8d56(0x369) + Date[_0x2e8d56(0x269)](), {
                'headers': getAuthHeaders(),
                'credentials': _0x2e8d56(0x1d9),
                'cache': _0x2e8d56(0xf7)
            });
            if (_0x14459a['ok']) {
                const _0x7fce34 = await _0x14459a[_0x2e8d56(0x2d2)](), _0x35aba0 = _0x7fce34[_0x2e8d56(0x493)]?.[_0x2e8d56(0x201)]?.[_0x2e8d56(0x40e)]() || _0x2e8d56(0x199), _0x2aa818 = [
                        _0x2e8d56(0x262),
                        _0x2e8d56(0x247),
                        _0x2e8d56(0xdb)
                    ][_0x2e8d56(0x44c)](_0x35aba0);
                if (_0x2aa818) {
                    if (_0xbe849)
                        _0xbe849[_0x2e8d56(0x48c)][_0x2e8d56(0x17d)] = _0x2e8d56(0xfc);
                    if (_0x50e54d)
                        _0x50e54d[_0x2e8d56(0x48c)][_0x2e8d56(0x17d)] = _0x2e8d56(0x415);
                    _0x4d69c8[_0x2e8d56(0x371)] = ![], _0x4d69c8['checked'] = ![], this[_0x2e8d56(0x491)][_0x2e8d56(0x2d6)] = ![];
                } else {
                    if (_0x50e54d)
                        _0x50e54d[_0x2e8d56(0x48c)][_0x2e8d56(0x17d)] = 'block';
                    if (_0xbe849)
                        _0xbe849[_0x2e8d56(0x48c)][_0x2e8d56(0x17d)] = _0x2e8d56(0x415);
                    this[_0x2e8d56(0x491)]['addWatermark'] = !![];
                }
            }
        } catch (_0x1b7b47) {
            safeLog('Error\x20checking\x20watermark\x20eligibility:', _0x1b7b47);
            if (_0xbe849)
                _0xbe849['style'][_0x2e8d56(0x17d)] = _0x2e8d56(0xfc);
            if (_0x50e54d)
                _0x50e54d['style'][_0x2e8d56(0x17d)] = _0x2e8d56(0x415);
        }
    }
    ['handleWatermarkToggle'](_0xc9bac0) {
        const _0x1b3ac3 = _0x1b33fa;
        if (!this[_0x1b3ac3(0x491)])
            return;
        const _0x96fdf1 = document[_0x1b3ac3(0x30f)](_0x1b3ac3(0x1cb)), _0x5971af = _0x96fdf1['checked'];
        this[_0x1b3ac3(0x491)][_0x1b3ac3(0x2d6)] = _0x5971af;
    }
    [_0x1b33fa(0x419)]() {
        const _0x187a6c = _0x1b33fa;
        if (!this[_0x187a6c(0x491)]) {
            showNotification(_0x187a6c(0x10e), _0x187a6c(0x2b7));
            return;
        }
        const _0x16c665 = this[_0x187a6c(0x491)]['id'], _0x5dfce1 = this[_0x187a6c(0xff)][_0x16c665];
        safeLog(_0x187a6c(0x38c), {
            'templateId': _0x16c665,
            'availableTemplates': Object[_0x187a6c(0x138)](this[_0x187a6c(0xff)]),
            'foundTemplate': !!_0x5dfce1,
            'cachedData': this[_0x187a6c(0x491)][_0x187a6c(0x2c0)]
        });
        if (!_0x5dfce1 && !this['currentTemplateForPreview']['data']) {
            safeLog(_0x187a6c(0x410), _0x16c665, _0x187a6c(0x208), Object[_0x187a6c(0x138)](this[_0x187a6c(0xff)])), showNotification(_0x187a6c(0x46e) + _0x16c665 + _0x187a6c(0x224) + Object[_0x187a6c(0x138)](this[_0x187a6c(0xff)])[_0x187a6c(0x229)](',\x20'), _0x187a6c(0x2b7));
            return;
        }
        const _0x38051c = document[_0x187a6c(0x30f)](_0x187a6c(0x21b))?.[_0x187a6c(0xf4)][_0x187a6c(0xd4)]() || '';
        this[_0x187a6c(0x37d)] = _0x38051c;
        const _0x28875c = document[_0x187a6c(0x30f)]('youtubeUrlInput')?.[_0x187a6c(0xf4)]['trim']();
        if (!_0x28875c) {
            showNotification(_0x187a6c(0xcd), _0x187a6c(0x2b7));
            return;
        }
        this[_0x187a6c(0x162)](), this[_0x187a6c(0x2db)](_0x28875c, _0x16c665);
    }
    [_0x1b33fa(0x1c7)]() {
        const _0x2f8724 = _0x1b33fa;
        let _0x3d2e2e = document[_0x2f8724(0x30f)]('slotSystemInfo');
        if (!_0x3d2e2e) {
            _0x3d2e2e = document[_0x2f8724(0x38b)](_0x2f8724(0x1ec)), _0x3d2e2e['id'] = _0x2f8724(0x3c3), _0x3d2e2e[_0x2f8724(0x40f)] = _0x2f8724(0x41a);
            const _0x5ef32b = document[_0x2f8724(0x30f)](_0x2f8724(0x261));
            _0x5ef32b && _0x5ef32b[_0x2f8724(0x20b)](_0x3d2e2e);
        }
        _0x3d2e2e[_0x2f8724(0x1a5)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-layer-group\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Slot\x20System\x20Active</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>This\x20template\x20uses\x20the\x20dynamic\x201-5\x20slot\x20system.\x20New\x20clips\x20will\x20fill\x20from\x20slot\x205\x20upward.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visualization\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x221\x22>1</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x222\x22>2</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x223\x22>3</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x224\x22>4</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x225\x22>5</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-labels\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>New\x20clips\x20start\x20here\x20→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
    }
    [_0x1b33fa(0xbf)](_0xa577e2) {
        const _0x1269c4 = _0x1b33fa, _0x22a271 = document[_0x1269c4(0x30f)](_0x1269c4(0xba)), _0x4531b0 = document[_0x1269c4(0x30f)](_0x1269c4(0x2e8));
        _0x22a271 && _0x4531b0 && (_0xa577e2 ? (_0x22a271[_0x1269c4(0x48c)]['display'] = _0x1269c4(0x121), _0x4531b0[_0x1269c4(0x48c)][_0x1269c4(0x17d)] = _0x1269c4(0x121)) : (_0x22a271[_0x1269c4(0x48c)]['display'] = _0x1269c4(0x415), _0x4531b0[_0x1269c4(0x48c)]['display'] = _0x1269c4(0x415)));
    }
    async [_0x1b33fa(0x230)]() {
        const _0x3fa866 = _0x1b33fa;
        if (!this[_0x3fa866(0x46c)]) {
            showNotification(_0x3fa866(0x316), _0x3fa866(0x2b7));
            return;
        }
        const _0x43bcda = document[_0x3fa866(0x30f)](_0x3fa866(0x1f8))?.[_0x3fa866(0xf4)][_0x3fa866(0xd4)]();
        if (!_0x43bcda) {
            showNotification(_0x3fa866(0xcd), _0x3fa866(0x2b7));
            return;
        }
        this[_0x3fa866(0x366)](this[_0x3fa866(0x46c)], _0x43bcda);
    }
    [_0x1b33fa(0x366)](_0x57ffa2, _0x4a503c) {
        const _0x16ed08 = _0x1b33fa, _0x26ffd9 = this[_0x16ed08(0xff)][_0x57ffa2];
        if (!_0x26ffd9) {
            showNotification('Template\x20not\x20found', 'error');
            return;
        }
        const _0x759e24 = _0x26ffd9[_0x16ed08(0x107)] ? _0x16ed08(0x212) : '';
        confirm(_0x16ed08(0x43a) + _0x26ffd9['name'] + _0x16ed08(0xbc) + _0x4a503c + '\x0a\x0a' + _0x26ffd9[_0x16ed08(0x4a6)] + '\x0a' + _0x26ffd9['duration'] + _0x759e24 + '\x0a\x0aThis\x20may\x20take\x20a\x20few\x20minutes\x20to\x20process.') && this[_0x16ed08(0x2db)](_0x4a503c, _0x57ffa2);
    }
    [_0x1b33fa(0x470)]() {
        const _0x2351a7 = _0x1b33fa;
        this[_0x2351a7(0x46c)] = null, document[_0x2351a7(0x150)](_0x2351a7(0x49f))[_0x2351a7(0x302)](_0x23c124 => {
            const _0x16eba6 = _0x2351a7;
            _0x23c124[_0x16eba6(0x2e4)][_0x16eba6(0x35f)](_0x16eba6(0x330));
        }), this[_0x2351a7(0xbf)](![]);
        const _0x33f486 = document['getElementById'](_0x2351a7(0x3c3));
        _0x33f486 && _0x33f486[_0x2351a7(0x35f)]();
    }
    async [_0x1b33fa(0x2db)](_0xb7ae2e, _0x52993e) {
        const _0x4a84e0 = _0x1b33fa;
        try {
            const _0x445116 = document[_0x4a84e0(0x30f)](_0x4a84e0(0x1cb)), _0x3f89bf = _0x445116 ? _0x445116['checked'] : !![], _0x25353d = getAuthHeaders();
            let _0x2d562f = null;
            window[_0x4a84e0(0x167)] && typeof window[_0x4a84e0(0x167)]['collectCustomizations'] === _0x4a84e0(0x44e) && (_0x2d562f = window['customizer'][_0x4a84e0(0x3b0)]());
            const _0x475209 = {
                'url': _0xb7ae2e,
                'template_id': _0x52993e,
                'use_slot_system': !![],
                'watermark_enabled': _0x3f89bf
            };
            _0x2d562f && Object[_0x4a84e0(0x138)](_0x2d562f)['length'] > 0x0 && (_0x475209[_0x4a84e0(0x3d5)] = _0x2d562f, safeLog(_0x4a84e0(0x263), _0x2d562f));
            const _0x17a66c = await fetch(API_BASE_URL + _0x4a84e0(0x492), {
                'method': _0x4a84e0(0x3ea),
                'headers': _0x25353d,
                'credentials': _0x4a84e0(0x1d9),
                'body': JSON['stringify'](_0x475209)
            });
            if (!_0x17a66c['ok']) {
                const _0x1b4c31 = await _0x17a66c['json']();
                if (_0x17a66c[_0x4a84e0(0xa8)] === 0x1ad) {
                    if (_0x1b4c31[_0x4a84e0(0x102)] === _0x4a84e0(0x47d)) {
                        const _0x5ea832 = _0x1b4c31[_0x4a84e0(0x350)] || _0x1b4c31[_0x4a84e0(0x45e)] || 0x1e, _0x320bcc = Math[_0x4a84e0(0xd7)](_0x5ea832 / 0x3c), _0xbf1a5e = _0x5ea832 % 0x3c;
                        startCooldownTimer(_0x5ea832);
                        const _0x5b3c84 = document[_0x4a84e0(0x30f)](_0x4a84e0(0x3c4));
                        if (_0x5b3c84) {
                            const _0x507669 = document[_0x4a84e0(0x30f)]('errorDurationText');
                            if (_0x507669) {
                                let _0x509f97 = '';
                                _0x320bcc > 0x0 ? _0x509f97 = _0x320bcc + 'm\x20' + _0xbf1a5e + 's' : _0x509f97 = _0x5ea832 + 's', _0x507669[_0x4a84e0(0x22f)] = 'You\x20can\x20generate\x20another\x20video\x20in\x20' + _0x509f97 + '.';
                            }
                            _0x5b3c84[_0x4a84e0(0x48c)]['display'] = _0x4a84e0(0x121);
                        }
                        showNotification(_0x1b4c31[_0x4a84e0(0x2b7)], _0x4a84e0(0x2b7));
                        return;
                    }
                    if (_0x1b4c31[_0x4a84e0(0x102)] === _0x4a84e0(0xa0)) {
                        showLimitModal({
                            'used': _0x1b4c31[_0x4a84e0(0x3df)],
                            'limit': _0x1b4c31[_0x4a84e0(0x430)],
                            'plan_type': _0x4a84e0(0x199),
                            'last_video_date': _0x1b4c31[_0x4a84e0(0x332)],
                            'cooldown_hours': _0x1b4c31['cooldown_hours'] || 0x60
                        });
                        return;
                    } else {
                        if (_0x1b4c31[_0x4a84e0(0x102)] === _0x4a84e0(0x2bd)) {
                            showLimitModal({
                                'used': _0x1b4c31[_0x4a84e0(0x202)]?.[_0x4a84e0(0x10c)],
                                'limit': _0x1b4c31['storage_info']?.['plan_info']?.['videos_space'],
                                'plan_type': _0x1b4c31[_0x4a84e0(0x140)],
                                'last_video_date': _0x1b4c31['last_video_date'],
                                'cooldown_hours': _0x1b4c31[_0x4a84e0(0x29b)] || 0x60
                            });
                            return;
                        } else {
                            showNotification(_0x1b4c31[_0x4a84e0(0x2b7)] || _0x4a84e0(0x206), _0x4a84e0(0x2b7));
                            return;
                        }
                    }
                } else {
                    if (_0x1b4c31[_0x4a84e0(0x102)] === _0x4a84e0(0x45f)) {
                        const _0x176db5 = _0x1b4c31['video_minutes'] || 0x0, _0x337aff = _0x1b4c31[_0x4a84e0(0x20e)] || 0x0;
                        showNotification('Video\x20too\x20long\x20(' + _0x176db5 + 'm).\x20Maximum\x20is\x20' + _0x337aff + _0x4a84e0(0x347), _0x4a84e0(0x2b7));
                        return;
                    } else {
                        const _0x3bd94d = _0x1b4c31['error'] || _0x4a84e0(0x441);
                        showNotification(_0x3bd94d, _0x4a84e0(0x2b7));
                        throw new Error(_0x3bd94d);
                    }
                }
            }
            const _0x322d5b = await _0x17a66c['json']();
            this[_0x4a84e0(0x3eb)] = _0x322d5b[_0x4a84e0(0x490)];
            const _0x499719 = {
                'id': Date['now'](),
                'projectId': this['currentProjectId'],
                'name': _0x322d5b['template'][_0x4a84e0(0x35c)] + _0x4a84e0(0x279),
                'template': _0x52993e,
                'templateName': _0x322d5b[_0x4a84e0(0x306)][_0x4a84e0(0x35c)],
                'status': _0x4a84e0(0x12e),
                'progress': 0x0,
                'message': _0x4a84e0(0x2e2),
                'timestamp': new Date(),
                'lastChecked': Date[_0x4a84e0(0x269)](),
                'slotNumber': null,
                'useSlotSystem': !![],
                'isSlotSystem': !![]
            };
            await this[_0x4a84e0(0x37a)](_0x499719);
            const _0x240376 = document['getElementById'](_0x4a84e0(0x2fa));
            if (_0x240376) {
                _0x240376['style'][_0x4a84e0(0x17d)] = _0x4a84e0(0x121);
                const _0x54a263 = document['getElementById'](_0x4a84e0(0xb5)), _0x4c8345 = document[_0x4a84e0(0x30f)](_0x4a84e0(0x29e));
                _0x54a263 && (_0x54a263[_0x4a84e0(0x48c)]['strokeDasharray'] = _0x4a84e0(0x1b5)), _0x4c8345 && (_0x4c8345['textContent'] = '0%');
            }
            solisWSClient && _0x322d5b[_0x4a84e0(0x490)] && solisWSClient[_0x4a84e0(0x2b4)](_0x322d5b[_0x4a84e0(0x490)], _0x4a84e0(0x12e));
            const _0x279e96 = document[_0x4a84e0(0x30f)](_0x4a84e0(0x2e9));
            _0x279e96 && (_0x279e96[_0x4a84e0(0x371)] = !![], _0x279e96[_0x4a84e0(0x2e4)][_0x4a84e0(0xe1)](_0x4a84e0(0x1b4))), this[_0x4a84e0(0x25b)](_0x4a84e0(0x209)), this[_0x4a84e0(0x244)](_0x499719['id']);
        } catch (_0x428db2) {
            safeLog(_0x4a84e0(0xbd), _0x428db2), showNotification(_0x4a84e0(0x23b) + _0x428db2[_0x4a84e0(0x110)], 'error');
        }
    }
    [_0x1b33fa(0x244)](_0x44259d) {
        const _0x28397f = _0x1b33fa;
        this[_0x28397f(0x9f)](_0x44259d);
        const _0x15a172 = setInterval(async () => {
            const _0x1e7b9c = _0x28397f, _0x30d290 = this[_0x1e7b9c(0x309)][_0x1e7b9c(0x26c)](_0x12055b => _0x12055b['id'] === _0x44259d);
            if (!_0x30d290) {
                this[_0x1e7b9c(0x9f)](_0x44259d);
                return;
            }
            _0x30d290[_0x1e7b9c(0xa8)] === _0x1e7b9c(0x12e) ? await this['checkItemStatus'](_0x44259d) : this[_0x1e7b9c(0x9f)](_0x44259d);
        }, 0xbb8);
        this['monitoringIntervals'][_0x28397f(0x2fc)](_0x44259d, _0x15a172);
    }
    [_0x1b33fa(0x9f)](_0xd38d4c) {
        const _0x36cb06 = _0x1b33fa;
        this[_0x36cb06(0x3d2)][_0x36cb06(0x423)](_0xd38d4c) && (clearInterval(this['monitoringIntervals'][_0x36cb06(0x14b)](_0xd38d4c)), this['monitoringIntervals']['delete'](_0xd38d4c));
    }
    [_0x1b33fa(0x100)]() {
        const _0x409ac8 = _0x1b33fa;
        this['monitoringIntervals'][_0x409ac8(0x302)]((_0x57cbc3, _0x52dd9a) => {
            clearInterval(_0x57cbc3);
        }), this[_0x409ac8(0x3d2)][_0x409ac8(0x47f)]();
    }
    async ['checkItemStatus'](_0x5c4c33) {
        const _0x489662 = _0x1b33fa;
        try {
            const _0x22c1a9 = this[_0x489662(0x309)][_0x489662(0x26c)](_0x12929e => _0x12929e['id'] === _0x5c4c33);
            if (!_0x22c1a9)
                return;
            const _0x205c43 = getAuthHeaders(), _0x455a52 = await fetch(API_BASE_URL + _0x489662(0x1ea) + _0x22c1a9[_0x489662(0x22e)], {
                    'headers': _0x205c43,
                    'credentials': _0x489662(0x1d9)
                });
            if (!_0x455a52['ok'])
                return;
            const _0x4aadc7 = await _0x455a52[_0x489662(0x2d2)](), _0x398ac6 = _0x22c1a9[_0x489662(0xa8)] !== _0x4aadc7[_0x489662(0xa8)] || _0x22c1a9[_0x489662(0x41c)] !== _0x4aadc7[_0x489662(0x41c)];
            _0x398ac6 && (_0x22c1a9[_0x489662(0xa8)] = _0x4aadc7[_0x489662(0xa8)], _0x22c1a9[_0x489662(0x41c)] = _0x4aadc7[_0x489662(0x41c)], _0x22c1a9[_0x489662(0x110)] = _0x4aadc7[_0x489662(0x110)], _0x22c1a9['lastChecked'] = Date[_0x489662(0x269)](), _0x4aadc7[_0x489662(0x29d)] && _0x22c1a9[_0x489662(0x31e)] && (_0x22c1a9[_0x489662(0xcc)] = _0x4aadc7[_0x489662(0x29d)], _0x22c1a9[_0x489662(0x35c)] = _0x22c1a9[_0x489662(0x3e1)] + _0x489662(0x310) + _0x4aadc7[_0x489662(0x29d)] + ')'), this[_0x489662(0x401)](), this[_0x489662(0x190)] === _0x489662(0x209) && this[_0x489662(0x2d3)](), this[_0x489662(0x4af)]());
            if (_0x4aadc7['status'] === 'completed') {
                _0x22c1a9[_0x489662(0xa8)] = 'completed', this['moveToLibrary'](_0x22c1a9), this[_0x489662(0x9f)](_0x5c4c33), showNotification(_0x489662(0x3c0), _0x489662(0x1db));
                const _0x1a3129 = document[_0x489662(0x30f)](_0x489662(0x2e9));
                _0x1a3129 && (_0x1a3129['disabled'] = ![], _0x1a3129[_0x489662(0x2e4)]['remove']('is-generating')), _0x22c1a9[_0x489662(0x31e)] && _0x22c1a9[_0x489662(0xcc)] && showNotification(_0x489662(0x285) + _0x22c1a9[_0x489662(0xcc)], _0x489662(0x27a)), this[_0x489662(0x25b)](_0x489662(0x209)), this[_0x489662(0x401)](), this[_0x489662(0x4af)]();
            } else {
                if (_0x4aadc7['status'] === 'error') {
                    _0x22c1a9[_0x489662(0xa8)] = _0x489662(0x3ef), _0x22c1a9['message'] = _0x4aadc7[_0x489662(0x110)], this[_0x489662(0x9f)](_0x5c4c33);
                    const _0x28cb1f = document['getElementById'](_0x489662(0x2e9));
                    _0x28cb1f && (_0x28cb1f[_0x489662(0x371)] = ![], _0x28cb1f['classList']['remove'](_0x489662(0x1b4)));
                    setTimeout(() => {
                        const _0xea67c5 = _0x489662;
                        this[_0xea67c5(0x309)] = this['processingItems']['filter'](_0x5562f7 => _0x5562f7['id'] !== _0x5c4c33), this['updateLibraryView'](), this[_0xea67c5(0x4af)]();
                    }, 0x1388);
                    const _0x41dc2a = _0x4aadc7[_0x489662(0x110)] || '';
                    safeLog(_0x489662(0x2bf), _0x41dc2a);
                    const _0x65e37 = /Video is too long\. Maximum allowed:\s*(\d+)\s*minutes\. Your video:\s*(\d+)\s*minutes/i, _0x1f9826 = /Maximum allowed:\s*(\d+)\s*minutes.*Your video:\s*(\d+)\s*minutes/i, _0x310755 = /too long|duration limit/i;
                    let _0x5d66e7 = _0x41dc2a[_0x489662(0x16b)](_0x65e37);
                    safeLog(_0x489662(0x277), _0x5d66e7);
                    if (_0x5d66e7 && _0x5d66e7['length'] >= 0x3) {
                        const _0x5ad74b = parseInt(_0x5d66e7[0x1]), _0x2e14d9 = parseInt(_0x5d66e7[0x2]);
                        safeLog(_0x489662(0x21e), _0x2e14d9, _0x489662(0x1b6), _0x5ad74b), setTimeout(() => {
                            const _0x1485b6 = _0x489662;
                            window && typeof window['openVideoTooLongModal'] === _0x1485b6(0x44e) && window[_0x1485b6(0x19f)](_0x2e14d9, _0x5ad74b);
                        }, 0x64);
                    } else {
                        _0x5d66e7 = _0x41dc2a[_0x489662(0x16b)](_0x1f9826), safeLog(_0x489662(0x3e7), _0x5d66e7);
                        if (_0x5d66e7 && _0x5d66e7['length'] >= 0x3) {
                            const _0x38d52b = parseInt(_0x5d66e7[0x1]), _0x1dea0c = parseInt(_0x5d66e7[0x2]);
                            safeLog('✓\x20Video\x20too\x20long\x20detected\x20(pattern\x202):', _0x1dea0c, _0x489662(0x1b6), _0x38d52b), setTimeout(() => {
                                const _0x4c7dea = _0x489662;
                                window && typeof window[_0x4c7dea(0x19f)] === _0x4c7dea(0x44e) && window[_0x4c7dea(0x19f)](_0x1dea0c, _0x38d52b);
                            }, 0x64);
                        } else {
                            if (_0x310755[_0x489662(0x294)](_0x41dc2a)) {
                                safeLog(_0x489662(0x383));
                                const _0x206f9e = _0x41dc2a[_0x489662(0x16b)](/\d+/g);
                                if (_0x206f9e && _0x206f9e[_0x489662(0x392)] >= 0x2) {
                                    const _0x64cde7 = parseInt(_0x206f9e[_0x206f9e[_0x489662(0x392)] - 0x2]), _0x1fa1b0 = parseInt(_0x206f9e[_0x206f9e[_0x489662(0x392)] - 0x1]);
                                    _0x64cde7 > 0x0 && _0x1fa1b0 > 0x0 && _0x64cde7 > _0x1fa1b0 && (safeLog(_0x489662(0x28a), _0x64cde7, 'max:', _0x1fa1b0), setTimeout(() => {
                                        const _0x470fdf = _0x489662;
                                        window && typeof window['openVideoTooLongModal'] === _0x470fdf(0x44e) && window[_0x470fdf(0x19f)](_0x64cde7, _0x1fa1b0);
                                    }, 0x64));
                                }
                            }
                        }
                    }
                    showNotification(_0x489662(0x468) + _0x4aadc7[_0x489662(0x110)], _0x489662(0x2b7));
                }
            }
        } catch (_0x151e77) {
            safeLog('Error\x20checking\x20status\x20for\x20item', _0x5c4c33, _0x151e77);
        }
    }
    [_0x1b33fa(0x38e)]() {
        const _0x302b86 = _0x1b33fa;
        this[_0x302b86(0x309)]['forEach'](_0x53b311 => {
            const _0x152ea5 = _0x302b86;
            _0x53b311[_0x152ea5(0xa8)] === _0x152ea5(0x12e) && this['startMonitoring'](_0x53b311['id']);
        });
    }
    [_0x1b33fa(0x149)](_0x579fd0) {
        const _0x269996 = _0x1b33fa;
        try {
            const _0xbe4ca8 = new URL(_0x579fd0[_0x269996(0xd9)](_0x269996(0x398)) ? _0x579fd0 : 'https://' + _0x579fd0), _0x5e2c3a = _0xbe4ca8[_0x269996(0x3f4)][_0x269996(0x40e)](), _0xf8aaa = _0xbe4ca8['pathname'][_0x269996(0x40e)](), _0x3db8a3 = new Set([
                    _0x269996(0x1ab),
                    _0x269996(0x487),
                    _0x269996(0x1fd),
                    _0x269996(0x291)
                ]);
            if (!_0x3db8a3[_0x269996(0x423)](_0x5e2c3a))
                return ![];
            if (_0xf8aaa[_0x269996(0x44c)]('..') || _0xf8aaa[_0x269996(0x44c)]('//'))
                return ![];
            if (!_0xf8aaa || _0xf8aaa === '/')
                return ![];
            const _0x10cac3 = this[_0x269996(0x417)](_0x579fd0);
            if (!_0x10cac3)
                return ![];
            return /^[a-zA-Z0-9_-]{11}$/['test'](_0x10cac3);
        } catch (_0x1005eb) {
            return ![];
        }
    }
    [_0x1b33fa(0x27e)](_0x17e35b) {
        const _0x2817e1 = _0x1b33fa;
        if (!_0x17e35b || typeof _0x17e35b !== _0x2817e1(0x18b))
            return ![];
        if (_0x17e35b[_0x2817e1(0x16b)](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
            return ![];
        return /^[a-zA-Z0-9_-]+$/[_0x2817e1(0x294)](_0x17e35b);
    }
    [_0x1b33fa(0x1f5)](_0x2cfa08) {
        const _0x385526 = _0x1b33fa;
        if (!_0x2cfa08 || typeof _0x2cfa08 !== _0x385526(0x18b))
            return ![];
        if (_0x2cfa08[_0x385526(0x16b)](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
            return ![];
        return /^[a-zA-Z0-9_.-]+$/[_0x385526(0x294)](_0x2cfa08);
    }
    ['toggleUrlButtonLoading'](_0x5c390e) {
        const _0x4d9b22 = _0x1b33fa, _0x1f131b = document['getElementById'](_0x4d9b22(0x2e9));
        if (!_0x1f131b)
            return;
        _0x5c390e ? (_0x1f131b[_0x4d9b22(0x2e4)][_0x4d9b22(0xe1)](_0x4d9b22(0x3ec)), _0x1f131b[_0x4d9b22(0x371)] = !![], sessionStorage[_0x4d9b22(0x204)]('urlButtonLockeduntil', Date['now']()['toString']()), sessionStorage['setItem'](_0x4d9b22(0x3ed), _0x4d9b22(0x43f))) : (_0x1f131b[_0x4d9b22(0x2e4)][_0x4d9b22(0x35f)]('loading'), _0x1f131b[_0x4d9b22(0x371)] = ![], sessionStorage[_0x4d9b22(0x183)](_0x4d9b22(0x3ed)), sessionStorage['removeItem']('urlButtonLockeduntil'));
    }
    [_0x1b33fa(0x45b)]() {
        const _0x2cbf4a = _0x1b33fa, _0x4618aa = document['getElementById'](_0x2cbf4a(0x2e9));
        if (!_0x4618aa)
            return;
        const _0x55dedb = sessionStorage['getItem'](_0x2cbf4a(0x3ed)) === _0x2cbf4a(0x43f), _0x23648c = sessionStorage['getItem'](_0x2cbf4a(0x320));
        if (_0x55dedb && _0x23648c) {
            const _0x324ab2 = parseInt(_0x23648c, 0xa), _0x22f5bc = Date[_0x2cbf4a(0x269)](), _0x294966 = _0x324ab2 - _0x22f5bc;
            if (_0x294966 > 0x0) {
                const _0x3faa47 = CONFIG[_0x2cbf4a(0x461)][_0x2cbf4a(0x36c)] || 0xbb8;
                if (_0x294966 < _0x3faa47 + 0x1388) {
                    _0x4618aa[_0x2cbf4a(0x371)] = !![], _0x4618aa[_0x2cbf4a(0x48c)][_0x2cbf4a(0x427)] = 'not-allowed', _0x4618aa['style'][_0x2cbf4a(0x14d)] = _0x2cbf4a(0x31f), _0x4618aa[_0x2cbf4a(0x2e4)]['add'](_0x2cbf4a(0x3ec));
                    const _0x1f0a75 = setTimeout(() => {
                        const _0x5d4d72 = _0x2cbf4a;
                        _0x4618aa[_0x5d4d72(0x371)] = ![], _0x4618aa[_0x5d4d72(0x48c)][_0x5d4d72(0x427)] = _0x5d4d72(0x242), _0x4618aa[_0x5d4d72(0x48c)]['opacity'] = '1', _0x4618aa[_0x5d4d72(0x2e4)][_0x5d4d72(0x35f)]('loading'), sessionStorage[_0x5d4d72(0x183)](_0x5d4d72(0x3ed)), sessionStorage[_0x5d4d72(0x183)](_0x5d4d72(0x320));
                    }, _0x294966);
                    _0x4618aa[_0x2cbf4a(0x2cd)] = _0x1f0a75;
                }
            } else
                sessionStorage['removeItem']('urlButtonLocked'), sessionStorage[_0x2cbf4a(0x183)](_0x2cbf4a(0x320));
        }
    }
    async ['processYouTubeUrl']() {
        const _0x166fca = _0x1b33fa, _0x1e0e34 = Date[_0x166fca(0x269)]();
        if (_0x1e0e34 - this[_0x166fca(0x4a8)] < CONFIG['RATE_LIMITING'][_0x166fca(0x36c)]) {
            showNotification(_0x166fca(0x364), _0x166fca(0x168));
            return;
        }
        this[_0x166fca(0x4a8)] = _0x1e0e34;
        const _0xfe37e5 = document[_0x166fca(0x30f)]('youtubeUrlInput');
        if (!_0xfe37e5)
            return;
        const _0x5910fb = _0xfe37e5['value'][_0x166fca(0xd4)]();
        if (!_0x5910fb) {
            showNotification(_0x166fca(0x37e), _0x166fca(0x2b7));
            return;
        }
        if (!this[_0x166fca(0x149)](_0x5910fb)) {
            showNotification(_0x166fca(0xdc), _0x166fca(0x2b7));
            return;
        }
        this[_0x166fca(0x1ca)](!![]);
        try {
            const _0x3c2ff0 = await this['checkVideoDurationBeforeTemplates'](_0x5910fb);
            if (!_0x3c2ff0[_0x166fca(0x20c)]) {
                this[_0x166fca(0x1ca)](![]);
                return;
            }
            const _0x4fcf6b = getAuthHeaders();
            try {
                const _0x268b01 = await fetch(API_BASE_URL + '/clips/check-limits', {
                    'method': _0x166fca(0x2cc),
                    'headers': _0x4fcf6b,
                    'credentials': _0x166fca(0x1d9)
                });
                if (_0x268b01['ok']) {
                    const _0x4bc52e = await _0x268b01[_0x166fca(0x2d2)]();
                    if (_0x4bc52e[_0x166fca(0x144)]) {
                        showNotification(_0x166fca(0x2be), _0x166fca(0x168));
                        const _0x165d1b = document[_0x166fca(0x30f)](_0x166fca(0x2e9));
                        _0x165d1b && (_0x165d1b['disabled'] = !![], _0x165d1b[_0x166fca(0x48c)]['opacity'] = _0x166fca(0x31f), _0x165d1b['style'][_0x166fca(0x427)] = 'not-allowed', _0x165d1b[_0x166fca(0x2e4)]['add'](_0x166fca(0x1b4)));
                        this[_0x166fca(0x1ca)](![]);
                        return;
                    }
                    if (!_0x4bc52e[_0x166fca(0x26e)]) {
                        showLimitModal({
                            'used': _0x4bc52e['daily']?.[_0x166fca(0x3d3)] || 0x0,
                            'limit': _0x4bc52e[_0x166fca(0x24d)]?.[_0x166fca(0xde)] || 0x1,
                            'plan_type': _0x4bc52e[_0x166fca(0x25d)]?.[_0x166fca(0x35c)]?.[_0x166fca(0x40e)]() || _0x166fca(0x199),
                            'last_video_date': _0x4bc52e['last_video_date'] || '1970-01-01',
                            'cooldown_hours': _0x4bc52e['generation']?.['cooldown_hours'] || 0x60
                        }), this[_0x166fca(0x1ca)](![]);
                        return;
                    }
                    if (_0x4bc52e['daily_limit_reached']) {
                        showLimitModal({
                            'used': _0x4bc52e['daily_count'],
                            'limit': _0x4bc52e[_0x166fca(0x430)],
                            'plan_type': _0x166fca(0x199),
                            'last_video_date': _0x4bc52e[_0x166fca(0x332)] || _0x166fca(0x185),
                            'cooldown_hours': _0x4bc52e['generation']?.[_0x166fca(0x29b)] || 0x60
                        }), this[_0x166fca(0x1ca)](![]);
                        return;
                    }
                    if (_0x4bc52e[_0x166fca(0x27c)]) {
                        showLimitModal({
                            'used': _0x4bc52e['current_video_count'],
                            'limit': _0x4bc52e[_0x166fca(0x2a5)],
                            'plan_type': _0x4bc52e[_0x166fca(0x25d)]?.[_0x166fca(0x35c)]?.[_0x166fca(0x40e)]() || 'free',
                            'last_video_date': _0x4bc52e['last_video_date'] || _0x166fca(0x185),
                            'cooldown_hours': _0x4bc52e['generation']?.[_0x166fca(0x29b)] || 0x60
                        }), this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                }
            } catch (_0x1109f4) {
            }
            this[_0x166fca(0x25b)](_0x166fca(0xff)), showNotification(_0x166fca(0x220), _0x166fca(0x1db));
            const _0x17bc70 = document[_0x166fca(0x30f)](_0x166fca(0x116));
            _0x17bc70 && (_0x17bc70['style'][_0x166fca(0x17d)] = 'block');
        } finally {
            this[_0x166fca(0x1ca)](![]);
        }
    }
    async ['checkVideoDurationBeforeTemplates'](_0x3b86c3) {
        const _0x2e0867 = _0x1b33fa;
        try {
            const _0x4ca763 = getAuthHeaders(), _0x36223a = await fetch(API_BASE_URL + '/clips/check-duration', {
                    'method': 'POST',
                    'headers': _0x4ca763,
                    'credentials': 'include',
                    'body': JSON['stringify']({ 'url': _0x3b86c3 })
                }), _0x81a07d = await _0x36223a[_0x2e0867(0x2d2)]();
            if (!_0x36223a['ok']) {
                if (_0x81a07d[_0x2e0867(0x102)] === _0x2e0867(0x45f)) {
                    const _0x3508f9 = _0x81a07d['video_minutes'] || 0x0, _0x5d9e36 = _0x81a07d[_0x2e0867(0x20e)] || 0x0;
                    safeLog(_0x2e0867(0x18a), _0x3508f9, _0x2e0867(0x1b6), _0x5d9e36);
                    const _0x5588fe = document[_0x2e0867(0x30f)](_0x2e0867(0x3c4)), _0xb4bac9 = document['getElementById'](_0x2e0867(0x458));
                    return _0x5588fe && _0xb4bac9 && (_0xb4bac9[_0x2e0867(0x22f)] = 'You\x20cannot\x20post\x20a\x20video\x20above\x20' + _0x5d9e36 + _0x2e0867(0x256) + _0x3508f9 + '\x20minutes.\x20Upgrade\x20to\x20unlock\x20longer\x20videos.', _0x5588fe[_0x2e0867(0x48c)][_0x2e0867(0x17d)] = 'block'), { 'allowed': ![] };
                } else
                    return showNotification('Error\x20checking\x20video:\x20' + (_0x81a07d[_0x2e0867(0x2b7)] || 'Unknown\x20error'), _0x2e0867(0x2b7)), { 'allowed': ![] };
            }
            const _0xd31445 = document[_0x2e0867(0x30f)](_0x2e0867(0x3c4));
            return _0xd31445 && (_0xd31445[_0x2e0867(0x48c)][_0x2e0867(0x17d)] = _0x2e0867(0x415)), {
                'allowed': !![],
                'duration': _0x81a07d[_0x2e0867(0x1d2)],
                'maxAllowed': _0x81a07d[_0x2e0867(0x20e)]
            };
        } catch (_0xe9a381) {
            safeLog(_0x2e0867(0x26a), _0xe9a381);
            const _0x4f3278 = document[_0x2e0867(0x30f)](_0x2e0867(0x3c4));
            return _0x4f3278 && (_0x4f3278[_0x2e0867(0x48c)][_0x2e0867(0x17d)] = _0x2e0867(0x415)), { 'allowed': !![] };
        }
    }
    async [_0x1b33fa(0x169)]() {
        const _0x21a708 = _0x1b33fa, _0x50e691 = document[_0x21a708(0x30f)](_0x21a708(0x1f8));
        if (!_0x50e691)
            return;
        const _0x39a64f = _0x50e691['value']['trim']();
        if (!_0x39a64f) {
            showNotification('Please\x20process\x20a\x20YouTube\x20URL\x20first', _0x21a708(0x2b7));
            return;
        }
        if (!this['selectedTemplate']) {
            showNotification(_0x21a708(0x316), _0x21a708(0x2b7));
            return;
        }
        this['startClipProcessingWithSlots'](_0x39a64f, this[_0x21a708(0x46c)]);
    }
    [_0x1b33fa(0x37a)](_0x39c56c) {
        const _0x564d63 = _0x1b33fa;
        this[_0x564d63(0x309)]['unshift'](_0x39c56c), this[_0x564d63(0x4af)](), this['currentTab'] === 'library' && this[_0x564d63(0x2d3)]();
    }
    [_0x1b33fa(0x401)]() {
        const _0x21c02b = _0x1b33fa;
        if (this[_0x21c02b(0x190)] === _0x21c02b(0x209)) {
            this[_0x21c02b(0x2d3)]();
            return;
        }
        this['processingItems'][_0x21c02b(0x302)](_0x84b702 => {
            const _0x3e9224 = _0x21c02b, _0x272a65 = _0x84b702[_0x3e9224(0x41c)] || 0x0, _0x112f7d = 0x64 - _0x272a65, _0x52199a = document['querySelector'](_0x3e9224(0x1a4) + _0x84b702['id'] + _0x3e9224(0x3e4));
            _0x52199a && (_0x52199a['textContent'] = _0x112f7d + '%\x20left');
            const _0x52f173 = document[_0x3e9224(0x150)]('[data-loading-id=\x22' + _0x84b702['id'] + '\x22]\x20.loader-part');
            _0x52f173['forEach']((_0x1e4f16, _0x2cff8d) => {
                const _0x454ee7 = _0x3e9224, _0xb06827 = (_0x2cff8d + 0x1) * 0x19;
                _0x1e4f16[_0x454ee7(0x48c)][_0x454ee7(0x14d)] = _0x112f7d >= _0xb06827 ? '1' : '0';
            });
        });
    }
    [_0x1b33fa(0x3bf)]() {
        const _0x173df0 = _0x1b33fa, _0x4643ad = document[_0x173df0(0x30f)](_0x173df0(0x157)), _0x375efc = document[_0x173df0(0x30f)](_0x173df0(0x483)), _0x1f83c8 = document[_0x173df0(0x30f)]('emptyProcessingState');
        if (!_0x4643ad || !_0x1f83c8 || !_0x375efc)
            return;
        if (this[_0x173df0(0x309)]['length'] === 0x0) {
            _0x1f83c8[_0x173df0(0x48c)][_0x173df0(0x17d)] = _0x173df0(0xfc), _0x4643ad['innerHTML'] = '', _0x375efc[_0x173df0(0x48c)][_0x173df0(0x17d)] = _0x173df0(0x415);
            return;
        }
        _0x1f83c8[_0x173df0(0x48c)][_0x173df0(0x17d)] = _0x173df0(0x415), _0x375efc['style'][_0x173df0(0x17d)] = _0x173df0(0xfc), _0x4643ad['innerHTML'] = this[_0x173df0(0x309)][_0x173df0(0x286)](_0x2dc2ba => {
            const _0x332f7d = _0x173df0, _0x2be9da = _0x2dc2ba[_0x332f7d(0x41c)] || 0x0;
            return _0x332f7d(0x128) + _0x2dc2ba['id'] + _0x332f7d(0x176) + (_0x2dc2ba['status'] === _0x332f7d(0x12e) ? _0x332f7d(0x325) + this[_0x332f7d(0x394)](_0x2be9da) + _0x332f7d(0x2f8) : '') + _0x332f7d(0x308) + _0x2dc2ba['name'] + _0x332f7d(0x2eb) + _0x2dc2ba[_0x332f7d(0xa8)] + _0x332f7d(0x126) + this[_0x332f7d(0xd6)](_0x2dc2ba[_0x332f7d(0xa8)]) + '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + this[_0x332f7d(0x1e9)](_0x2dc2ba['status']) + _0x332f7d(0x1c8) + (_0x2dc2ba[_0x332f7d(0x110)] && _0x2dc2ba[_0x332f7d(0xa8)] === 'processing' ? _0x332f7d(0x235) + _0x2dc2ba[_0x332f7d(0x110)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + _0x332f7d(0x368) + (_0x2dc2ba[_0x332f7d(0xa8)] === _0x332f7d(0x12e) ? _0x332f7d(0x2b8) + _0x2be9da + _0x332f7d(0x345) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        })[_0x173df0(0x229)]('');
    }
    ['getStatusIcon'](_0xa69df5) {
        const _0x19a04e = _0x1b33fa, _0x128264 = {
                'processing': _0x19a04e(0xe6),
                'completed': _0x19a04e(0x29c),
                'failed': _0x19a04e(0x2f7)
            };
        return _0x128264[_0xa69df5] || _0x19a04e(0x2c3);
    }
    [_0x1b33fa(0x1e9)](_0x12ea88) {
        const _0x338647 = _0x1b33fa;
        return _0x12ea88[_0x338647(0x11b)](0x0)[_0x338647(0x3f9)]() + _0x12ea88[_0x338647(0x1b8)](0x1);
    }
    [_0x1b33fa(0x394)](_0x44ee4a) {
        const _0x47b949 = _0x1b33fa, _0x4a3b1b = 0x64 - _0x44ee4a, _0x54f88a = [
                { 'opacity': _0x4a3b1b >= 0x19 ? 0x1 : 0x0 },
                { 'opacity': _0x4a3b1b >= 0x32 ? 0x1 : 0x0 },
                { 'opacity': _0x4a3b1b >= 0x4b ? 0x1 : 0x0 },
                { 'opacity': _0x4a3b1b >= 0x64 ? 0x1 : 0x0 }
            ];
        return _0x54f88a[_0x47b949(0x286)]((_0x5232b3, _0x4d9376) => '<div\x20class=\x22loader-part\x20loader-part-' + (_0x4d9376 + 0x1) + _0x47b949(0x3ee) + _0x5232b3[_0x47b949(0x14d)] + _0x47b949(0x271))['join']('');
    }
    async ['downloadClip'](_0x6aa823) {
        const _0x14613c = _0x1b33fa;
        try {
            console[_0x14613c(0x11f)](_0x14613c(0x3f5), _0x6aa823);
            const _0x381dc4 = getAuthHeaders(), _0x19dcc4 = API_BASE_URL + _0x14613c(0x2b2) + _0x6aa823;
            console[_0x14613c(0x11f)]('📥\x20Fetching\x20from:', _0x19dcc4);
            const _0x366f98 = await fetch(_0x19dcc4, {
                'headers': _0x381dc4,
                'credentials': _0x14613c(0x1d9)
            });
            console[_0x14613c(0x11f)]('📥\x20Response\x20status:', _0x366f98[_0x14613c(0xa8)]);
            if (_0x366f98['ok']) {
                const _0x74b3f9 = await _0x366f98[_0x14613c(0x22a)](), _0x40d2af = window[_0x14613c(0x35a)][_0x14613c(0x484)](_0x74b3f9), _0x1bda30 = document['createElement']('a');
                _0x1bda30['style'][_0x14613c(0x17d)] = 'none', _0x1bda30[_0x14613c(0x2c8)] = _0x40d2af;
                const _0x20dffe = _0x366f98['headers']['get'](_0x14613c(0x289));
                let _0x8e54c2 = 'clip.mp4';
                if (_0x20dffe) {
                    const _0x16980b = _0x20dffe['match'](/filename="(.+)"/);
                    _0x16980b && (_0x8e54c2 = _0x16980b[0x1]);
                }
                _0x1bda30[_0x14613c(0x40b)] = _0x8e54c2, document[_0x14613c(0x3aa)][_0x14613c(0x20b)](_0x1bda30), _0x1bda30['click'](), window[_0x14613c(0x35a)]['revokeObjectURL'](_0x40d2af), document['body'][_0x14613c(0x2c7)](_0x1bda30), console[_0x14613c(0x11f)](_0x14613c(0x489), _0x8e54c2), showNotification(_0x14613c(0xd1), _0x14613c(0x1db));
            } else {
                console[_0x14613c(0x11f)](_0x14613c(0x33a), _0x366f98[_0x14613c(0xa8)]);
                throw new Error(_0x14613c(0x36b) + _0x366f98[_0x14613c(0xa8)]);
            }
        } catch (_0x1323d4) {
            console[_0x14613c(0x2b7)](_0x14613c(0x381), _0x1323d4), showNotification(_0x14613c(0x16d) + _0x1323d4[_0x14613c(0x110)], 'error');
        }
    }
    [_0x1b33fa(0x30e)](_0x1c7d95) {
        const _0x30a57b = _0x1b33fa, _0x9bcc93 = this[_0x30a57b(0x309)][_0x30a57b(0x26c)](_0x2711eb => _0x2711eb['id'] === _0x1c7d95);
        _0x9bcc93 && (_0x9bcc93['status'] = 'cancelled', this['stopMonitoring'](_0x1c7d95), this[_0x30a57b(0x401)](), this['saveProcessingItems'](), showNotification('Processing\x20cancelled', _0x30a57b(0x27a)));
    }
    [_0x1b33fa(0x303)](_0x143b5a) {
        const _0x3833f3 = _0x1b33fa, _0x26e59c = this['processingItems'][_0x3833f3(0x428)](_0x3fcf49 => _0x3fcf49['id'] === _0x143b5a);
        if (_0x26e59c !== -0x1) {
            const _0x589881 = this[_0x3833f3(0x309)][_0x26e59c];
            if (_0x589881[_0x3833f3(0xa8)] === _0x3833f3(0x12e)) {
                showNotification('Cannot\x20delete\x20items\x20while\x20processing.\x20Wait\x20for\x20completion\x20or\x20cancel\x20first.', _0x3833f3(0x168));
                return;
            }
            this[_0x3833f3(0x343)](_0x589881[_0x3833f3(0x22e)]), this[_0x3833f3(0x309)][_0x3833f3(0x14e)](_0x26e59c, 0x1), this[_0x3833f3(0x9f)](_0x143b5a), this[_0x3833f3(0x401)](), this[_0x3833f3(0x4af)](), showNotification(_0x589881[_0x3833f3(0x35c)] + _0x3833f3(0x374), 'success');
        }
    }
    [_0x1b33fa(0x3b1)](_0x386d0c) {
        const _0x5f5d14 = _0x1b33fa, _0x3ed09a = this[_0x5f5d14(0x309)]['find'](_0x43cf79 => _0x43cf79['id'] === _0x386d0c);
        _0x3ed09a && (_0x3ed09a['status'] = 'processing', _0x3ed09a[_0x5f5d14(0x41c)] = 0x0, this[_0x5f5d14(0x401)](), this[_0x5f5d14(0x4af)](), this[_0x5f5d14(0x244)](_0x386d0c), showNotification(_0x5f5d14(0x227), 'info'));
    }
    [_0x1b33fa(0x315)](_0x44acfc) {
        const _0x16234f = _0x1b33fa;
        if (!this['validateProjectId'](_0x44acfc[_0x16234f(0x22e)])) {
            safeLog(_0x16234f(0x188) + _0x44acfc[_0x16234f(0x22e)]);
            return;
        }
        const _0x594679 = {
                'id': _0x44acfc['id'],
                'projectId': _0x44acfc['projectId'],
                'name': _0x44acfc[_0x16234f(0x35c)],
                'template': _0x44acfc['template'],
                'templateName': _0x44acfc['templateName'],
                'timestamp': _0x44acfc['timestamp'],
                'status': _0x16234f(0x2b0),
                'slotNumber': _0x44acfc[_0x16234f(0xcc)],
                'isSlotSystem': _0x44acfc[_0x16234f(0x31e)]
            }, _0x1616e3 = document[_0x16234f(0x44d)](_0x16234f(0x21a) + _0x44acfc['id'] + '\x22]');
        _0x1616e3 && (_0x1616e3[_0x16234f(0x48c)][_0x16234f(0x46d)] = 'all\x200.5s\x20ease', _0x1616e3[_0x16234f(0x48c)][_0x16234f(0x14d)] = _0x16234f(0x31f), setTimeout(() => {
            const _0x379f51 = _0x16234f;
            _0x1616e3[_0x379f51(0x1a5)] = '';
            const _0x2389b5 = sanitizeHTML(_0x594679[_0x379f51(0x35c)]), _0x3c1994 = isValidImageUrl(_0x594679[_0x379f51(0x387)]) ? _0x594679[_0x379f51(0x387)] : _0x379f51(0x3b5), _0x46c92f = document[_0x379f51(0x38b)](_0x379f51(0x1ec));
            _0x46c92f['className'] = _0x379f51(0x3d9), _0x46c92f['innerHTML'] = _0x379f51(0x3d7) + _0x3c1994 + _0x379f51(0x48b);
            const _0x23e546 = document['createElement']('div');
            _0x23e546[_0x379f51(0x40f)] = _0x379f51(0xa5);
            const _0x3225b5 = document[_0x379f51(0x38b)](_0x379f51(0x1ec));
            _0x3225b5[_0x379f51(0x40f)] = _0x379f51(0x2dd);
            const _0x22a240 = document['createElement']('h2');
            _0x22a240['className'] = _0x379f51(0x346), _0x22a240[_0x379f51(0x22f)] = _0x2389b5;
            const _0x3f999f = document['createElement'](_0x379f51(0x1ec));
            _0x3f999f[_0x379f51(0x40f)] = _0x379f51(0x323), _0x3f999f[_0x379f51(0x1a5)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22duration-text\x22>' + sanitizeHTML(_0x594679[_0x379f51(0x3a5)] || '0s') + _0x379f51(0xdd);
            const _0x2f3c22 = document[_0x379f51(0x38b)](_0x379f51(0x2c2));
            _0x2f3c22[_0x379f51(0x40f)] = 'export-btn\x20library-download-btn', _0x2f3c22[_0x379f51(0x34a)] = _0x379f51(0x407), _0x2f3c22[_0x379f51(0x1a5)] = _0x379f51(0x475), _0x3225b5[_0x379f51(0x20b)](_0x22a240), _0x3225b5[_0x379f51(0x20b)](_0x3f999f), _0x23e546['appendChild'](_0x3225b5), _0x23e546[_0x379f51(0x20b)](_0x2f3c22), _0x1616e3[_0x379f51(0x20b)](_0x46c92f), _0x1616e3[_0x379f51(0x20b)](_0x23e546), _0x1616e3[_0x379f51(0xec)](_0x379f51(0xa9)), _0x1616e3[_0x379f51(0xf9)]('data-id', _0x594679['id']), _0x1616e3[_0x379f51(0xf9)](_0x379f51(0x213), _0x594679[_0x379f51(0x22e)]), _0x1616e3['classList'][_0x379f51(0x35f)]('processing-card'), _0x1616e3[_0x379f51(0x48c)][_0x379f51(0x14d)] = '0', _0x1616e3[_0x379f51(0x48c)][_0x379f51(0x46d)] = 'opacity\x200.3s\x20ease', setTimeout(() => {
                const _0x55ee89 = _0x379f51;
                _0x1616e3[_0x55ee89(0x48c)][_0x55ee89(0x14d)] = '1';
            }, 0xa), this[_0x379f51(0x1f9)](_0x1616e3, _0x594679['id'], _0x594679['projectId']), this['fetchAndUpdateDuration'](_0x1616e3, _0x594679[_0x379f51(0x22e)]);
        }, 0x12c)), this[_0x16234f(0x309)] = this[_0x16234f(0x309)][_0x16234f(0x10f)](_0x2a65b0 => _0x2a65b0['id'] !== _0x44acfc['id']), this[_0x16234f(0x2cf)][_0x16234f(0x1c9)](_0x594679), this[_0x16234f(0x4af)](), this['saveLibraryItems'](), this[_0x16234f(0x41b)](), this[_0x16234f(0x4a5)](), safeLog('✅\x20Card\x20transformed:\x20' + _0x44acfc[_0x16234f(0x35c)]);
    }
    [_0x1b33fa(0x254)](_0x3b0217, _0x524c19) {
        const _0x55f21c = _0x1b33fa;
        if (!this[_0x55f21c(0x27e)](_0x524c19)) {
            safeLog(_0x55f21c(0x4a1));
            return;
        }
        fetch(_0x55f21c(0x440) + encodeURIComponent(_0x524c19), {
            'method': _0x55f21c(0x2cc),
            'credentials': _0x55f21c(0x1d9)
        })['then'](_0x543543 => {
            const _0x53f604 = _0x55f21c;
            if (!_0x543543['ok'])
                throw new Error(_0x53f604(0x1c5) + _0x543543[_0x53f604(0xa8)]);
            return _0x543543['json']();
        })[_0x55f21c(0x4a0)](_0x280f50 => {
            const _0x5dbc9d = _0x55f21c;
            if (_0x280f50[_0x5dbc9d(0x3a9)] && _0x3b0217) {
                const _0x38b0a8 = _0x3b0217[_0x5dbc9d(0x44d)](_0x5dbc9d(0x9b));
                _0x38b0a8 && (_0x38b0a8[_0x5dbc9d(0x22f)] = _0x280f50[_0x5dbc9d(0x3a9)]);
            }
        })[_0x55f21c(0x2c4)](_0x17f319 => safeLog(_0x55f21c(0x448), _0x17f319));
    }
    [_0x1b33fa(0x1f9)](_0x3c4ad9, _0x1f6169, _0x10967c) {
        const _0x31a121 = _0x1b33fa, _0x5dffba = _0x3c4ad9[_0x31a121(0x44d)](_0x31a121(0x1cf)), _0x54b633 = _0x3c4ad9[_0x31a121(0x44d)](_0x31a121(0x424));
        _0x5dffba && _0x5dffba[_0x31a121(0x1b7)]('click', _0x94c1e9 => {
            const _0x2055e9 = _0x31a121;
            _0x94c1e9[_0x2055e9(0xc6)](), _0x94c1e9[_0x2055e9(0x336)](), _0x10967c && this[_0x2055e9(0x27e)](_0x10967c) && clipsStudio ? clipsStudio[_0x2055e9(0x161)](_0x10967c) : safeLog(_0x2055e9(0x28e) + _0x10967c);
        }), _0x54b633 && _0x54b633[_0x31a121(0x1b7)](_0x31a121(0x259), _0x9b583b => {
            const _0x4e279a = _0x31a121;
            _0x9b583b[_0x4e279a(0xc6)](), _0x9b583b[_0x4e279a(0x336)](), _0x1f6169 && this['validateItemId'](_0x1f6169) && clipsStudio ? clipsStudio[_0x4e279a(0x2b5)](_0x1f6169) : safeLog(_0x4e279a(0x1da) + _0x1f6169);
        });
    }
    async [_0x1b33fa(0x1d0)]() {
        const _0x14e9d3 = _0x1b33fa;
        try {
            const _0x5d3401 = getAuthHeaders(), _0x12e070 = await fetch(API_BASE_URL + '/clips/projects', {
                    'headers': _0x5d3401,
                    'credentials': _0x14e9d3(0x1d9)
                });
            if (_0x12e070['ok']) {
                const _0xed3b24 = await _0x12e070[_0x14e9d3(0x2d2)]();
                this[_0x14e9d3(0x2cf)] = _0xed3b24[_0x14e9d3(0x44b)]['map'](_0x20abf6 => ({
                    'id': _0x20abf6['id'],
                    'projectId': _0x20abf6['id'],
                    'name': _0x20abf6['template_name'] || 'Clip',
                    'template': _0x20abf6[_0x14e9d3(0x306)],
                    'templateName': _0x20abf6[_0x14e9d3(0x301)],
                    'timestamp': new Date(_0x20abf6[_0x14e9d3(0x3da)]),
                    'status': _0x14e9d3(0x2b0),
                    'url': _0x20abf6[_0x14e9d3(0x418)],
                    'thumbnailUrl': _0x20abf6[_0x14e9d3(0x365)],
                    'slotNumber': _0x20abf6[_0x14e9d3(0x29d)],
                    'isSlotSystem': _0x20abf6[_0x14e9d3(0x486)] ? !![] : ![],
                    'slots': _0x20abf6[_0x14e9d3(0x486)]
                })), this[_0x14e9d3(0x2d3)](), this[_0x14e9d3(0x4a5)](), this[_0x14e9d3(0xac)]();
            }
        } catch (_0x1f67dc) {
            safeLog(_0x14e9d3(0x341), _0x1f67dc), this[_0x14e9d3(0x280)]();
        }
    }
    [_0x1b33fa(0x1fa)]() {
        const _0xc02f93 = _0x1b33fa;
        this[_0xc02f93(0xe2)] && clearInterval(this[_0xc02f93(0xe2)]), this['libraryPollingInterval'] = setInterval(async () => {
            const _0x36f13 = _0xc02f93;
            try {
                await this['loadLibraryItems']()[_0x36f13(0x2c4)](_0x3149c8 => safeLog(_0x36f13(0x249), _0x3149c8));
                if (this['processingItems'][_0x36f13(0x392)] > 0x0) {
                    const _0x1ac2b3 = [];
                    for (const _0x242f00 of this[_0x36f13(0x309)]) {
                        try {
                            const _0x5300bb = getAuthHeaders(), _0x3c785f = await fetch(API_BASE_URL + _0x36f13(0x1ea) + _0x242f00[_0x36f13(0x22e)], {
                                    'headers': _0x5300bb,
                                    'credentials': _0x36f13(0x1d9),
                                    'timeout': 0xbb8
                                });
                            if (_0x3c785f['ok']) {
                                const _0x2d91cb = await _0x3c785f[_0x36f13(0x2d2)]();
                                _0x2d91cb[_0x36f13(0xa8)] && [
                                    _0x36f13(0x12e),
                                    _0x36f13(0x290),
                                    _0x36f13(0x186),
                                    'queued'
                                ][_0x36f13(0x44c)](_0x2d91cb['status']) ? _0x1ac2b3['push'](_0x242f00) : safeLog('🧹\x20Removing\x20stale\x20card\x20during\x20polling:\x20' + _0x242f00[_0x36f13(0x35c)] + _0x36f13(0x353) + _0x2d91cb[_0x36f13(0xa8)] + ')');
                            } else
                                safeLog(_0x36f13(0x38f) + _0x242f00[_0x36f13(0x35c)] + ',\x20removing\x20from\x20processing');
                        } catch (_0x2cdd6a) {
                            safeLog(_0x36f13(0x393) + _0x242f00[_0x36f13(0x35c)] + '\x20during\x20polling\x20-\x20removing:\x20' + _0x2cdd6a[_0x36f13(0x110)]);
                        }
                    }
                    _0x1ac2b3[_0x36f13(0x392)] !== this[_0x36f13(0x309)][_0x36f13(0x392)] && (this[_0x36f13(0x309)] = _0x1ac2b3, this[_0x36f13(0x4af)](), this[_0x36f13(0x2d3)](), safeLog(_0x36f13(0x3ad) + this['processingItems'][_0x36f13(0x392)] + _0x36f13(0x236)));
                }
            } catch (_0x2f63e4) {
                safeLog(_0x36f13(0x494), _0x2f63e4);
            }
        }, 0x1388), safeLog(_0xc02f93(0x4a3));
    }
    [_0x1b33fa(0x137)]() {
        const _0x4c2737 = _0x1b33fa;
        this[_0x4c2737(0xe2)] && (clearInterval(this[_0x4c2737(0xe2)]), this[_0x4c2737(0xe2)] = null, safeLog('📡\x20Library\x20auto-polling\x20stopped'));
    }
    async [_0x1b33fa(0x41b)]() {
        const _0x5d741f = _0x1b33fa;
        try {
            const _0xdf7c1 = currentUser?.['id'];
            if (!_0xdf7c1)
                return;
            const _0x1aaf67 = getAuthHeaders();
            safeLog('🔄\x20Fetching\x20fresh\x20subscription\x20info\x20from\x20backend\x20-\x20NO\x20CACHE...');
            const _0x1c35bc = await fetch(API_BASE_URL + _0x5d741f(0x442), {
                'method': 'GET',
                'headers': _0x1aaf67,
                'credentials': _0x5d741f(0x1d9)
            });
            if (_0x1c35bc['ok']) {
                const _0x5a7da6 = await _0x1c35bc[_0x5d741f(0x2d2)]();
                _0x5a7da6[_0x5d741f(0x1db)] && _0x5a7da6[_0x5d741f(0x493)] && (this[_0x5d741f(0x447)](_0x5a7da6[_0x5d741f(0x493)]), safeLog(_0x5d741f(0x2ad)));
            } else
                safeLog(_0x5d741f(0x15a), _0x1c35bc[_0x5d741f(0xa8)]);
        } catch (_0xe4e814) {
            safeLog(_0x5d741f(0x25c), _0xe4e814);
        }
    }
    [_0x1b33fa(0x447)](_0x2890c1) {
        const _0x4f89b0 = _0x1b33fa, _0x251083 = document[_0x4f89b0(0x30f)](_0x4f89b0(0x313)), _0x40eca9 = document[_0x4f89b0(0x30f)](_0x4f89b0(0x120)), _0x1d7003 = document[_0x4f89b0(0x30f)]('storagePlanBadge'), _0x5c6690 = document['getElementById'](_0x4f89b0(0x16e)), _0x38329b = document[_0x4f89b0(0x30f)](_0x4f89b0(0x145)), _0x4d2199 = document['getElementById'](_0x4f89b0(0x1a3)), _0x1a046e = this[_0x4f89b0(0x2cf)]['length'], _0x39d4a6 = _0x2890c1[_0x4f89b0(0x1ae)] || _0x2890c1['videos_space_limit'] || 0x2, _0x537751 = _0x2890c1['plan_name'] || (_0x2890c1['plan'] ? _0x2890c1['plan']['charAt'](0x0)['toUpperCase']() + _0x2890c1[_0x4f89b0(0x25d)][_0x4f89b0(0x1b8)](0x1) : _0x4f89b0(0x359));
        if (_0x251083)
            _0x251083['textContent'] = _0x1a046e;
        if (_0x40eca9)
            _0x40eca9['textContent'] = _0x39d4a6;
        if (_0x1d7003)
            _0x1d7003[_0x4f89b0(0x22f)] = _0x537751;
        const _0x147243 = _0x1a046e >= _0x39d4a6;
        if (_0x147243) {
            if (_0x251083)
                _0x251083['style'][_0x4f89b0(0x23c)] = '#ff4444';
            if (_0x40eca9)
                _0x40eca9['style'][_0x4f89b0(0x23c)] = _0x4f89b0(0x3b8);
            _0x5c6690 && (_0x5c6690[_0x4f89b0(0x48c)][_0x4f89b0(0x2a7)] = _0x4f89b0(0x3b8), _0x5c6690['style'][_0x4f89b0(0x2c9)] = 'rgba(255,\x2068,\x2068,\x200.05)');
            if (_0x38329b)
                _0x38329b[_0x4f89b0(0x48c)][_0x4f89b0(0x17d)] = 'inline-flex';
            if (_0x4d2199)
                _0x4d2199[_0x4f89b0(0x48c)][_0x4f89b0(0x17d)] = _0x4f89b0(0x4aa);
        } else {
            if (_0x251083)
                _0x251083['style'][_0x4f89b0(0x23c)] = _0x4f89b0(0x3cf);
            if (_0x40eca9)
                _0x40eca9['style'][_0x4f89b0(0x23c)] = 'inherit';
            _0x5c6690 && (_0x5c6690[_0x4f89b0(0x48c)][_0x4f89b0(0x2a7)] = '', _0x5c6690[_0x4f89b0(0x48c)][_0x4f89b0(0x2c9)] = '');
            if (_0x38329b)
                _0x38329b[_0x4f89b0(0x48c)][_0x4f89b0(0x17d)] = _0x4f89b0(0x415);
            if (_0x4d2199)
                _0x4d2199[_0x4f89b0(0x48c)][_0x4f89b0(0x17d)] = 'none';
        }
        safeLog(_0x4f89b0(0x267) + _0x1a046e + _0x4f89b0(0xa7) + _0x39d4a6 + _0x4f89b0(0x469) + _0x537751 + _0x4f89b0(0x390) + (_0x147243 ? _0x4f89b0(0x1d4) : _0x4f89b0(0x117)));
    }
    [_0x1b33fa(0x18c)]() {
        const _0x46237a = _0x1b33fa;
        if (!this['loadAndDisplayStorageInfo'])
            return;
        this['loadAndDisplayStorageInfo']()[_0x46237a(0x4a0)](_0x2d3a9e => {
            const _0x3a69a1 = _0x46237a;
            if (!_0x2d3a9e || !_0x2d3a9e[_0x3a69a1(0x210)])
                return;
            const _0x170275 = new Date(_0x2d3a9e[_0x3a69a1(0x210)]), _0x2f311b = new Date();
            _0x2f311b > _0x170275 && _0x2d3a9e['plan'] !== _0x3a69a1(0x199) && (showNotification(_0x3a69a1(0x257), 'warning'), this[_0x3a69a1(0x2cf)] && this[_0x3a69a1(0x2cf)]['length'] > 0x2 && showNotification('Your\x20storage\x20has\x20been\x20limited\x20to\x202\x20videos\x20per\x20the\x20Free\x20plan.', _0x3a69a1(0x168)));
        })['catch'](_0xa1c5c8 => {
            const _0x561422 = _0x46237a;
            safeLog(_0x561422(0x2a1), _0xa1c5c8);
        });
    }
    [_0x1b33fa(0x2d3)]() {
        const _0xa76be4 = _0x1b33fa;
        this[_0xa76be4(0x41b)](), this[_0xa76be4(0x18c)]();
        const _0x29af1b = document['getElementById'](_0xa76be4(0x1f0)), _0x2aa945 = document[_0xa76be4(0x30f)](_0xa76be4(0xf1));
        if (!_0x29af1b || !_0x2aa945)
            return;
        !Array[_0xa76be4(0x228)](this[_0xa76be4(0x2cf)]) && (this['libraryItems'] = []);
        !Array[_0xa76be4(0x228)](this[_0xa76be4(0x309)]) && (this['processingItems'] = []);
        if (this[_0xa76be4(0x2cf)][_0xa76be4(0x392)] === 0x0 && this[_0xa76be4(0x309)][_0xa76be4(0x392)] === 0x0) {
            _0x2aa945[_0xa76be4(0x48c)][_0xa76be4(0x17d)] = 'block', _0x29af1b['innerHTML'] = '', _0x29af1b[_0xa76be4(0x20b)](_0x2aa945);
            return;
        }
        _0x2aa945[_0xa76be4(0x48c)]['display'] = _0xa76be4(0x415);
        let _0x126e9f = '';
        this['processingItems'][_0xa76be4(0x392)] > 0x0 && (_0x126e9f = this[_0xa76be4(0x309)][_0xa76be4(0x286)](_0x5451d8 => {
            const _0x3f1c47 = _0xa76be4;
            return _0x3f1c47(0x133) + _0x5451d8['id'] + _0x3f1c47(0x40a) + _0x5451d8[_0x3f1c47(0x22e)] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-preview\x20processing-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-blur-overlay\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-spinner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22card-title\x22\x20data-item-name=\x22' + sanitizeHTML(_0x5451d8['name'] || _0x3f1c47(0x9c)) + '\x22>' + sanitizeHTML(_0x5451d8[_0x3f1c47(0x35c)] || _0x3f1c47(0x9c)) + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22\x20style=\x22opacity:\x200.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Processing...\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22export-btn\x22\x20disabled\x20style=\x22opacity:\x200.6;\x20cursor:\x20not-allowed;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        })['join']('')), _0x29af1b[_0xa76be4(0x1a5)] = _0x126e9f + this[_0xa76be4(0x2cf)]['map'](_0x33bac2 => {
            const _0x98cfac = _0xa76be4, _0x391219 = sanitizeHTML(_0x33bac2[_0x98cfac(0x35c)]), _0x27d853 = sanitizeHTML(_0x33bac2['templateName'] || _0x33bac2[_0x98cfac(0x306)] || ''), _0x3245fb = isValidImageUrl(_0x33bac2[_0x98cfac(0x387)]) ? _0x33bac2[_0x98cfac(0x387)] : _0x98cfac(0x3b5);
            return _0x98cfac(0xb2) + _0x33bac2['id'] + '\x22\x20data-project-id=\x22' + _0x33bac2[_0x98cfac(0x22e)] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-pill\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22>Click\x20me</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x3245fb + _0x98cfac(0x3ae) + _0x33bac2['id'] + _0x98cfac(0xc5) + _0x391219 + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x33bac2[_0x98cfac(0x3a5)] || '0s') + _0x98cfac(0xfa) + _0x33bac2[_0x98cfac(0x22e)] + _0x98cfac(0x3f2);
        })[_0xa76be4(0x229)](''), setTimeout(() => {
            const _0x14cf69 = _0xa76be4, _0x5328f7 = document[_0x14cf69(0x150)](_0x14cf69(0x435));
            _0x5328f7['forEach'](_0x42387e => {
                const _0x9b9356 = _0x14cf69, _0x1af7e3 = _0x42387e[_0x9b9356(0x1c4)](_0x9b9356(0x122)), _0x5b2848 = _0x42387e[_0x9b9356(0x1c4)]('data-project-id');
                if (_0x1af7e3 && typeof storeLibraryCard === _0x9b9356(0x44e)) {
                    const _0x555b53 = {
                        'id': _0x1af7e3,
                        'html': _0x42387e['innerHTML'],
                        'classList': _0x42387e['className'],
                        'dataAttributes': { 'data-id': _0x1af7e3 }
                    };
                    storeLibraryCard(_0x1af7e3, _0x555b53);
                }
                _0x5b2848 && fetch(_0x9b9356(0x440) + _0x5b2848, {
                    'method': _0x9b9356(0x2cc),
                    'credentials': 'include'
                })[_0x9b9356(0x4a0)](_0x2c7dcf => _0x2c7dcf['json']())[_0x9b9356(0x4a0)](_0x4c27d8 => {
                    const _0x2bb5dd = _0x9b9356;
                    if (_0x4c27d8[_0x2bb5dd(0x3a9)]) {
                        const _0x288010 = _0x42387e['querySelector'](_0x2bb5dd(0x2ac));
                        if (_0x288010) {
                            const _0x588ac1 = _0x288010[_0x2bb5dd(0x44d)](_0x2bb5dd(0x42b))[_0x2bb5dd(0x454)];
                            if (_0x588ac1)
                                _0x588ac1[_0x2bb5dd(0x22f)] = _0x4c27d8['duration_formatted'];
                            else {
                                const _0x2cb26c = _0x288010[_0x2bb5dd(0x44d)](_0x2bb5dd(0x42b))[_0x2bb5dd(0x24b)];
                                _0x288010[_0x2bb5dd(0x1a5)] = _0x2cb26c + _0x4c27d8[_0x2bb5dd(0x3a9)];
                            }
                        }
                    }
                })['catch'](_0x34cba5 => console[_0x9b9356(0x11f)](_0x9b9356(0x448), _0x34cba5));
            }), this['setupWebSocketHandlers']();
            const _0x36975d = document[_0x14cf69(0x44d)](_0x14cf69(0x3fb));
            _0x36975d && !_0x36975d[_0x14cf69(0x3b3)] && (_0x36975d[_0x14cf69(0x3b3)] = !![], _0x36975d['addEventListener']('click', _0x533fe5 => {
                const _0x2913cd = _0x14cf69;
                console['log'](_0x2913cd(0x48f), _0x533fe5[_0x2913cd(0x18d)]);
                const _0x1d2ecf = _0x533fe5[_0x2913cd(0x18d)]['closest']('.library-download-btn');
                if (_0x1d2ecf) {
                    _0x533fe5['preventDefault'](), _0x533fe5[_0x2913cd(0x336)]();
                    const _0x1b24e3 = _0x1d2ecf[_0x2913cd(0x1c4)](_0x2913cd(0x213));
                    console[_0x2913cd(0x11f)](_0x2913cd(0x1a9), _0x1b24e3);
                    _0x1b24e3 && clipsStudio ? clipsStudio[_0x2913cd(0x161)](_0x1b24e3) : console[_0x2913cd(0x11f)](_0x2913cd(0x153), {
                        'projectId': _0x1b24e3,
                        'clipsStudio': !!clipsStudio
                    });
                    return;
                }
                const _0x1d378b = _0x533fe5['target']['closest'](_0x2913cd(0x424));
                if (_0x1d378b) {
                    _0x533fe5[_0x2913cd(0xc6)](), _0x533fe5[_0x2913cd(0x336)]();
                    const _0xf88d48 = _0x1d378b[_0x2913cd(0x1c4)](_0x2913cd(0x471));
                    _0xf88d48 && clipsStudio && clipsStudio[_0x2913cd(0x2b5)](_0xf88d48);
                    return;
                }
            }));
        }, 0x0);
    }
    ['deleteClip'](_0x2af889) {
        const _0x591ea7 = _0x1b33fa;
        safeLog(_0x591ea7(0x433) + _0x2af889);
        const _0x19377a = this[_0x591ea7(0x2cf)][_0x591ea7(0x26c)](_0x162eae => _0x162eae['id'] == _0x2af889) || this[_0x591ea7(0x309)]['find'](_0xd62afe => _0xd62afe['id'] == _0x2af889);
        if (!_0x19377a) {
            safeLog(_0x591ea7(0x2f5) + _0x2af889), showNotification(_0x591ea7(0x44a), _0x591ea7(0x2b7));
            return;
        }
        safeLog(_0x591ea7(0x245), _0x19377a);
        if (_0x19377a[_0x591ea7(0xa8)] === 'processing') {
            safeLog('⚠️\x20Cannot\x20delete\x20processing\x20item:\x20' + _0x2af889), showNotification(_0x591ea7(0x354), _0x591ea7(0x168));
            return;
        }
        const _0x5aaf35 = document[_0x591ea7(0x30f)](_0x591ea7(0x24f)), _0x41784f = document[_0x591ea7(0x30f)](_0x591ea7(0x164));
        let _0x5f1a1c = document[_0x591ea7(0x30f)](_0x591ea7(0x9e));
        if (!_0x5aaf35 || !_0x41784f || !_0x5f1a1c) {
            showNotification(_0x591ea7(0x200), _0x591ea7(0x2b7));
            return;
        }
        safeLog(_0x591ea7(0xd2)), _0x41784f['textContent'] = 'Delete\x20\x22' + _0x19377a['name'] + '\x22?';
        _0x5f1a1c[_0x591ea7(0x143)] && (Object[_0x591ea7(0x3e8)](_0x5f1a1c[_0x591ea7(0x143)])[_0x591ea7(0x302)](_0x4e4322 => {
            const _0xd5a68a = _0x591ea7;
            try {
                _0x4e4322[_0xd5a68a(0x4b2)]();
            } catch (_0x79d52b) {
            }
        }), _0x5f1a1c[_0x591ea7(0x143)] = {});
        const _0x39908d = new AbortController();
        if (!_0x5f1a1c[_0x591ea7(0x143)])
            _0x5f1a1c[_0x591ea7(0x143)] = {};
        _0x5f1a1c[_0x591ea7(0x143)][_0x591ea7(0x259)] = _0x39908d, _0x5f1a1c[_0x591ea7(0x1b7)](_0x591ea7(0x259), async () => {
            const _0x2ff8a5 = _0x591ea7;
            safeLog(_0x2ff8a5(0x27d) + _0x2af889), _0x39908d[_0x2ff8a5(0x4b2)]();
            try {
                _0x5aaf35[_0x2ff8a5(0x48c)][_0x2ff8a5(0x17d)] = _0x2ff8a5(0x415), showNotification(_0x2ff8a5(0x462), _0x2ff8a5(0x27a)), _0x19377a['projectId'] && (safeLog(_0x2ff8a5(0xa6) + _0x19377a[_0x2ff8a5(0x22e)]), await this[_0x2ff8a5(0x343)](_0x19377a[_0x2ff8a5(0x22e)])), safeLog(_0x2ff8a5(0x295)), this[_0x2ff8a5(0x2cf)] = this[_0x2ff8a5(0x2cf)]['filter'](_0x144e3f => _0x144e3f['id'] != _0x2af889), this[_0x2ff8a5(0x309)] = this[_0x2ff8a5(0x309)][_0x2ff8a5(0x10f)](_0x524661 => _0x524661['id'] != _0x2af889), _0x19377a[_0x2ff8a5(0x22e)] && (this[_0x2ff8a5(0x309)] = this['processingItems']['filter'](_0x1efcfb => _0x1efcfb['projectId'] != _0x19377a[_0x2ff8a5(0x22e)])), safeLog(_0x2ff8a5(0x2ed)), this[_0x2ff8a5(0x2d3)](), this[_0x2ff8a5(0x401)](), this[_0x2ff8a5(0x4a5)](), this['saveLibraryItems'](), this[_0x2ff8a5(0x4af)](), safeLog(_0x2ff8a5(0x196)), typeof updateStorageBadgeDisplay === 'function' && await updateStorageBadgeDisplay(), safeLog(_0x2ff8a5(0x148)), showNotification(_0x2ff8a5(0x148), _0x2ff8a5(0x1db)), setTimeout(() => {
                    const _0x1e6bbc = _0x2ff8a5;
                    window[_0x1e6bbc(0x3a4)]['reload']();
                }, 0x320);
            } catch (_0x13374c) {
                showNotification('Failed\x20to\x20delete\x20clip:\x20' + _0x13374c[_0x2ff8a5(0x110)], _0x2ff8a5(0x2b7));
            } finally {
                _0x5aaf35[_0x2ff8a5(0x48c)][_0x2ff8a5(0x17d)] = _0x2ff8a5(0x415);
            }
        }, { 'once': !![] }), _0x5aaf35[_0x591ea7(0x48c)][_0x591ea7(0x17d)] = _0x591ea7(0xfc), _0x5aaf35[_0x591ea7(0x48c)][_0x591ea7(0x334)] = _0x591ea7(0x1ed), _0x5aaf35[_0x591ea7(0x48c)][_0x591ea7(0x14d)] = '1', _0x5aaf35[_0x591ea7(0x48c)][_0x591ea7(0x42c)] = 'auto', safeLog(_0x591ea7(0x106));
        const _0x2eea80 = _0x1a6536 => {
            const _0x13853c = _0x591ea7;
            _0x1a6536[_0x13853c(0x18d)] === _0x5aaf35 && (safeLog(_0x13853c(0x382)), _0x5aaf35[_0x13853c(0x48c)][_0x13853c(0x17d)] = _0x13853c(0x415), document[_0x13853c(0xf8)](_0x13853c(0x259), _0x2eea80));
        };
        document['addEventListener'](_0x591ea7(0x259), _0x2eea80);
    }
    async [_0x1b33fa(0x343)](_0x379006) {
        const _0x49ca86 = _0x1b33fa;
        try {
            if (!_0x379006 || typeof _0x379006 !== _0x49ca86(0x18b))
                throw new Error(_0x49ca86(0xed));
            if (!/^[a-zA-Z0-9_-]+$/[_0x49ca86(0x294)](_0x379006) || _0x379006[_0x49ca86(0x392)] < 0xa)
                throw new Error(_0x49ca86(0xed));
            const _0x5cbb1e = getAuthHeaders(), _0x362339 = await fetch(API_BASE_URL + _0x49ca86(0x311) + _0x379006, {
                    'method': _0x49ca86(0x165),
                    'headers': _0x5cbb1e,
                    'credentials': 'include'
                });
            if (!_0x362339['ok']) {
                const _0x5b23c4 = await _0x362339['json']()[_0x49ca86(0x2c4)](() => ({}));
                throw new Error(_0x5b23c4['error'] || _0x49ca86(0x32b) + _0x362339[_0x49ca86(0xa8)]);
            }
            const _0x5643de = await _0x362339[_0x49ca86(0x2d2)]();
            return !![];
        } catch (_0x4faf0f) {
            const _0x39d1e4 = sanitizeErrorMessage(_0x4faf0f);
            return showNotification(_0x49ca86(0x13e), _0x49ca86(0x168)), safeLog(_0x49ca86(0x39b), _0x39d1e4), ![];
        }
    }
    [_0x1b33fa(0x293)](_0xeba382) {
        const _0x504411 = _0x1b33fa, _0x127e18 = this['libraryItems']['filter'](_0x1fe505 => {
                const _0x185266 = _0x162e;
                if (_0xeba382 === 'all')
                    return !![];
                if (_0xeba382 === 'recent') {
                    const _0x9f7da6 = new Date();
                    return _0x9f7da6[_0x185266(0x11d)](_0x9f7da6[_0x185266(0x49d)]() - 0x7), new Date(_0x1fe505['timestamp']) > _0x9f7da6;
                }
                if (_0xeba382 === _0x185266(0x233))
                    return !![];
                return !![];
            });
        showNotification(_0x504411(0x3c9) + _0xeba382, _0x504411(0x27a));
    }
    ['manualRefresh']() {
        const _0xe8b8 = _0x1b33fa;
        this['loadLibraryItems'](), this['loadProcessingItems'](), showNotification(_0xe8b8(0x2ae), _0xe8b8(0x27a));
    }
    ['saveProcessingItems']() {
        const _0x149bf7 = _0x1b33fa;
        try {
            if (!this[_0x149bf7(0x309)] || this['processingItems'][_0x149bf7(0x392)] === 0x0) {
                localStorage['removeItem']('clipsProcessing');
                return;
            }
            const _0x3d6d05 = JSON[_0x149bf7(0x296)](this[_0x149bf7(0x309)]);
            localStorage[_0x149bf7(0x204)](_0x149bf7(0x232), _0x3d6d05), safeLog(_0x149bf7(0x105) + this[_0x149bf7(0x309)][_0x149bf7(0x392)] + _0x149bf7(0xf5));
        } catch (_0x23892a) {
            if (_0x23892a[_0x149bf7(0x35c)] === _0x149bf7(0x474)) {
                safeLog(_0x149bf7(0x2ca)), this['clearOldProcessingData']();
                try {
                    localStorage[_0x149bf7(0x204)](_0x149bf7(0x232), JSON[_0x149bf7(0x296)](this[_0x149bf7(0x309)]));
                } catch (_0x42b159) {
                    safeLog(_0x149bf7(0x473), _0x42b159);
                }
            } else
                safeLog(_0x149bf7(0x333), _0x23892a);
        }
    }
    async [_0x1b33fa(0x33e)]() {
        const _0x254b1a = _0x1b33fa;
        try {
            const _0x1e6c4d = localStorage[_0x254b1a(0x1e7)]('clipsProcessing');
            if (_0x1e6c4d) {
                this[_0x254b1a(0x309)] = JSON[_0x254b1a(0x43b)](_0x1e6c4d);
                const _0x25e09a = Date[_0x254b1a(0x269)](), _0x7870 = 0x18 * 0x3c * 0x3c * 0x3e8;
                this[_0x254b1a(0x309)] = this[_0x254b1a(0x309)][_0x254b1a(0x10f)](_0x5dab88 => {
                    const _0x23b446 = _0x254b1a;
                    if (_0x5dab88[_0x23b446(0xa8)] === 'completed' || _0x5dab88[_0x23b446(0xa8)] === 'failed')
                        return safeLog('🧹\x20Cleaning\x20up\x20' + _0x5dab88['status'] + _0x23b446(0x304) + _0x5dab88[_0x23b446(0x35c)]), ![];
                    const _0x148a44 = _0x25e09a - (_0x5dab88['timestamp'] ? new Date(_0x5dab88[_0x23b446(0x425)])[_0x23b446(0x3c8)]() : _0x25e09a);
                    if (_0x148a44 > _0x7870)
                        return safeLog(_0x23b446(0x223) + Math[_0x23b446(0x13b)](_0x148a44 / 0x3e8 / 0x3c) + '\x20min\x20old):\x20' + _0x5dab88['name']), ![];
                    return !![];
                }), this[_0x254b1a(0x4af)](), this[_0x254b1a(0x401)](), this['updateLibraryView'](), safeLog(_0x254b1a(0xb9) + this[_0x254b1a(0x309)]['length'] + _0x254b1a(0xf5));
            }
        } catch (_0x3384a8) {
            safeLog('Failed\x20to\x20load\x20processing\x20items:', _0x3384a8), this[_0x254b1a(0x309)] = [], this[_0x254b1a(0x4af)](), this[_0x254b1a(0x2d3)]();
        }
    }
    [_0x1b33fa(0xac)]() {
        const _0x6010a6 = _0x1b33fa;
        try {
            if (!this[_0x6010a6(0x2cf)] || this[_0x6010a6(0x2cf)][_0x6010a6(0x392)] === 0x0) {
                localStorage[_0x6010a6(0x183)](_0x6010a6(0x270));
                return;
            }
            const _0x2be3b8 = JSON[_0x6010a6(0x296)](this[_0x6010a6(0x2cf)]);
            localStorage[_0x6010a6(0x204)](_0x6010a6(0x270), _0x2be3b8), safeLog(_0x6010a6(0x105) + this[_0x6010a6(0x2cf)][_0x6010a6(0x392)] + '\x20library\x20item(s)');
        } catch (_0x4f4624) {
            if (_0x4f4624[_0x6010a6(0x35c)] === _0x6010a6(0x474)) {
                safeLog(_0x6010a6(0x2ca)), this[_0x6010a6(0x46b)]();
                try {
                    localStorage[_0x6010a6(0x204)](_0x6010a6(0x270), JSON['stringify'](this['libraryItems']));
                } catch (_0x211666) {
                    safeLog('Failed\x20to\x20save\x20even\x20after\x20cleanup:', _0x211666);
                }
            } else
                safeLog('Failed\x20to\x20save\x20library\x20items:', _0x4f4624);
        }
    }
    [_0x1b33fa(0xa2)]() {
        const _0x357ca9 = _0x1b33fa;
        safeLog(_0x357ca9(0xa1) + this[_0x357ca9(0x309)]['length'] + _0x357ca9(0x111)), this[_0x357ca9(0x309)] = [], this[_0x357ca9(0x100)](), this['saveProcessingItems'](), this[_0x357ca9(0x2d3)](), showNotification(_0x357ca9(0xd5), _0x357ca9(0x27a));
    }
    [_0x1b33fa(0x280)]() {
        const _0x317e4d = _0x1b33fa;
        try {
            const _0x484b14 = localStorage[_0x317e4d(0x1e7)](_0x317e4d(0x270));
            _0x484b14 && (this[_0x317e4d(0x2cf)] = JSON[_0x317e4d(0x43b)](_0x484b14), this[_0x317e4d(0x2d3)](), this[_0x317e4d(0x4a5)](), safeLog('✓\x20Loaded\x20' + this[_0x317e4d(0x2cf)][_0x317e4d(0x392)] + '\x20library\x20item(s)'));
        } catch (_0x50a8af) {
            safeLog(_0x317e4d(0x341), _0x50a8af), this[_0x317e4d(0x2cf)] = [];
        }
    }
    ['clearOldLibraryData']() {
        const _0x7ca78d = _0x1b33fa;
        this['libraryItems'][_0x7ca78d(0x392)] > 0x32 && (this[_0x7ca78d(0x2cf)] = this[_0x7ca78d(0x2cf)]['sort']((_0x35671f, _0x284a56) => new Date(_0x284a56[_0x7ca78d(0x425)]) - new Date(_0x35671f[_0x7ca78d(0x425)]))[_0x7ca78d(0x1b8)](0x0, 0x32), safeLog(_0x7ca78d(0x3f3)));
    }
    [_0x1b33fa(0x342)]() {
        const _0x5e330a = _0x1b33fa, _0x3a871e = Date[_0x5e330a(0x269)]() - 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
        this['processingItems'] = this['processingItems'][_0x5e330a(0x10f)](_0x5f4529 => {
            const _0xd5907d = _0x5e330a;
            if (_0x5f4529[_0xd5907d(0xa8)] === 'completed' && _0x5f4529[_0xd5907d(0x425)] < _0x3a871e)
                return ![];
            return !![];
        }), safeLog(_0x5e330a(0x264));
    }
    ['setupWebSocketHandlers']() {
        const _0x1cf285 = _0x1b33fa;
        if (!solisWSClient) {
            safeLog('WebSocket\x20client\x20not\x20available\x20yet,\x20retrying...'), setTimeout(() => this[_0x1cf285(0x125)](), 0x3e8);
            return;
        }
        solisWSClient['on']('progress', _0x17f025 => {
            const _0x30a4a6 = _0x1cf285, {
                    taskId: _0x279462,
                    progress: _0x23ec36,
                    step: _0x112baf,
                    status: _0x59efeb
                } = _0x17f025;
            if (typeof _0x23ec36 !== _0x30a4a6(0x17b) || isNaN(_0x23ec36) || _0x23ec36 < 0x0 || _0x23ec36 > 0x64) {
                safeLog(_0x30a4a6(0x142) + _0x23ec36);
                return;
            }
            const _0x469934 = document['querySelector'](_0x30a4a6(0x21a) + _0x279462 + '\x22]');
            _0x469934 && safeLog(_0x30a4a6(0x3c1) + _0x279462 + ':\x20' + Math['round'](_0x23ec36) + '%\x20-\x20' + (_0x112baf || ''));
            const _0x5c65ad = document[_0x30a4a6(0x30f)](_0x30a4a6(0x2fa)), _0x9247c2 = document['getElementById']('progressCircle'), _0x3b1ff5 = document[_0x30a4a6(0x30f)](_0x30a4a6(0x29e));
            if (_0x5c65ad && _0x9247c2 && _0x3b1ff5) {
                this['processingItems'][_0x30a4a6(0x392)] > 0x0 && (_0x5c65ad[_0x30a4a6(0x48c)][_0x30a4a6(0x17d)] = _0x30a4a6(0x121));
                const _0x401fcf = 75.36, _0x4ffecd = _0x23ec36 / 0x64 * _0x401fcf;
                _0x9247c2['style'][_0x30a4a6(0x39d)] = _0x4ffecd + '\x20' + _0x401fcf, _0x3b1ff5['textContent'] = Math[_0x30a4a6(0x13b)](_0x23ec36) + '%', safeLog(_0x30a4a6(0x326) + Math[_0x30a4a6(0x13b)](_0x23ec36) + '%');
            }
        }), solisWSClient['on']('complete', _0x1001d9 => {
            const _0x2418d6 = _0x1cf285, {
                    taskId: _0x63992d,
                    result: _0x537486
                } = _0x1001d9;
            safeLog(_0x2418d6(0x34f) + _0x63992d + _0x2418d6(0x1df));
            const _0x5af05d = this['processingItems'][_0x2418d6(0x428)](_0x563ef2 => _0x563ef2['id'] === _0x63992d);
            if (_0x5af05d === -0x1) {
                safeLog('❌\x20Processing\x20item\x20not\x20found:\x20' + _0x63992d);
                return;
            }
            const _0x505587 = this['processingItems'][_0x5af05d], _0x27c0f4 = document[_0x2418d6(0x44d)](_0x2418d6(0x21a) + _0x63992d + '\x22]');
            _0x27c0f4 && (_0x27c0f4[_0x2418d6(0x2e4)][_0x2418d6(0xe1)](_0x2418d6(0xcf)), setTimeout(() => {
                const _0x4337ef = _0x2418d6;
                this[_0x4337ef(0x309)][_0x4337ef(0x14e)](_0x5af05d, 0x1), this[_0x4337ef(0x4af)]();
                const _0x1ae936 = {
                    'id': _0x537486[_0x4337ef(0x490)] || _0x63992d,
                    'projectId': _0x537486[_0x4337ef(0x490)] || _0x63992d,
                    'name': _0x505587[_0x4337ef(0x35c)],
                    'template': _0x505587[_0x4337ef(0x3e1)] || _0x505587[_0x4337ef(0x306)] || _0x4337ef(0x1c2),
                    'templateName': _0x505587[_0x4337ef(0x3e1)] || _0x505587[_0x4337ef(0x306)] || 'Clip',
                    'thumbnailUrl': _0x537486[_0x4337ef(0x365)] || _0x505587[_0x4337ef(0x387)] || '',
                    'duration': _0x537486['duration'] || _0x505587[_0x4337ef(0x3a5)] || '0s',
                    'timestamp': new Date()[_0x4337ef(0x456)](),
                    'status': _0x4337ef(0x2b0)
                };
                this[_0x4337ef(0x2cf)]['unshift'](_0x1ae936), this['saveLibraryItems'](), this[_0x4337ef(0x2d3)](), this[_0x4337ef(0x158)]();
                if (this[_0x4337ef(0x309)][_0x4337ef(0x392)] === 0x0) {
                    const _0x2e4f3b = document['getElementById']('generationProgressWrapper');
                    if (_0x2e4f3b) {
                        _0x2e4f3b[_0x4337ef(0x48c)][_0x4337ef(0x17d)] = _0x4337ef(0x415);
                        const _0x24de02 = document[_0x4337ef(0x30f)](_0x4337ef(0xb5));
                        _0x24de02 && (_0x24de02[_0x4337ef(0x48c)][_0x4337ef(0x39d)] = _0x4337ef(0x1b5));
                    }
                }
                safeLog('✅\x20Moved\x20' + _0x505587[_0x4337ef(0x35c)] + '\x20to\x20library');
            }, 0x258));
        }), solisWSClient['on'](_0x1cf285(0x2b7), _0x26c81d => {
            const _0x151a37 = _0x1cf285, {
                    taskId: _0x583c64,
                    error: _0x10ccdb
                } = _0x26c81d;
            safeLog(_0x151a37(0x455) + _0x583c64 + '\x20failed:\x20' + _0x10ccdb);
            const _0x5cca60 = document[_0x151a37(0x44d)](_0x151a37(0x21a) + _0x583c64 + '\x22]');
            if (_0x5cca60) {
                _0x5cca60[_0x151a37(0x48c)][_0x151a37(0x14d)] = _0x151a37(0x31f);
                const _0x386c31 = _0x5cca60[_0x151a37(0x44d)](_0x151a37(0x1b0));
                _0x386c31 && (_0x386c31[_0x151a37(0x22f)] = _0x151a37(0x305) + _0x386c31[_0x151a37(0x22f)]);
            }
            const _0x135652 = this['processingItems'][_0x151a37(0x428)](_0x33fb2e => _0x33fb2e['id'] === _0x583c64);
            if (_0x135652 !== -0x1) {
                this[_0x151a37(0x309)][_0x151a37(0x14e)](_0x135652, 0x1), this[_0x151a37(0x4af)]();
                if (this[_0x151a37(0x309)][_0x151a37(0x392)] === 0x0) {
                    const _0x149966 = document[_0x151a37(0x30f)]('generationProgressWrapper');
                    if (_0x149966) {
                        _0x149966[_0x151a37(0x48c)]['display'] = _0x151a37(0x415);
                        const _0x35ecd1 = document[_0x151a37(0x30f)](_0x151a37(0xb5));
                        _0x35ecd1 && (_0x35ecd1[_0x151a37(0x48c)][_0x151a37(0x39d)] = _0x151a37(0x1b5));
                    }
                }
            }
        }), solisWSClient['on'](_0x1cf285(0x1c1), _0x2bdd25 => {
            const _0x8ed551 = _0x1cf285, {
                    taskId: _0x394842,
                    error: _0x450996,
                    message: _0x26a1b4
                } = _0x2bdd25, _0x22c37e = _0x26a1b4 || _0x450996 || 'Unknown\x20processing\x20error';
            safeLog('❌\x20Processing\x20failed:\x20' + _0x22c37e);
            const _0x23c8ec = document[_0x8ed551(0x44d)](_0x8ed551(0x21a) + _0x394842 + '\x22]');
            if (_0x23c8ec) {
                _0x23c8ec[_0x8ed551(0x48c)]['opacity'] = _0x8ed551(0x31f), _0x23c8ec['style'][_0x8ed551(0x2a7)] = '#ef4444', _0x23c8ec['style'][_0x8ed551(0x378)] = '2px';
                const _0x1b73c6 = _0x23c8ec[_0x8ed551(0x44d)](_0x8ed551(0x1b0));
                _0x1b73c6 && (_0x1b73c6[_0x8ed551(0x22f)] = _0x8ed551(0x4a4));
                const _0x2e12d6 = _0x23c8ec[_0x8ed551(0x44d)]('.card-subtitle') || _0x23c8ec[_0x8ed551(0x44d)](_0x8ed551(0xca));
                if (_0x2e12d6) {
                    let _0x3c8522 = _0x22c37e;
                    if (_0x22c37e[_0x8ed551(0x44c)](_0x8ed551(0xe7))) {
                        const _0x3ad74d = _0x22c37e[_0x8ed551(0x16b)](/(\d+)\s*minute/g);
                        _0x3c8522 = _0x22c37e;
                    }
                    _0x2e12d6[_0x8ed551(0x22f)] = _0x3c8522['substring'](0x0, 0x64), _0x2e12d6['title'] = _0x3c8522;
                }
            }
            const _0x58e9c9 = this['processingItems'][_0x8ed551(0x428)](_0x598e1e => _0x598e1e['id'] === _0x394842);
            if (_0x58e9c9 !== -0x1) {
                this[_0x8ed551(0x309)][_0x8ed551(0x14e)](_0x58e9c9, 0x1), this[_0x8ed551(0x4af)]();
                if (this[_0x8ed551(0x309)][_0x8ed551(0x392)] === 0x0) {
                    const _0x177d0c = document[_0x8ed551(0x30f)](_0x8ed551(0x2fa));
                    if (_0x177d0c) {
                        _0x177d0c[_0x8ed551(0x48c)][_0x8ed551(0x17d)] = _0x8ed551(0x415);
                        const _0x277028 = document[_0x8ed551(0x30f)](_0x8ed551(0xb5));
                        _0x277028 && (_0x277028[_0x8ed551(0x48c)]['strokeDasharray'] = _0x8ed551(0x1b5));
                        const _0x3709cc = document[_0x8ed551(0x30f)](_0x8ed551(0x29e));
                        _0x3709cc && (_0x3709cc[_0x8ed551(0x22f)] = '0%');
                    }
                }
            }
        }), safeLog('✅\x20WebSocket\x20handlers\x20initialized');
    }
    [_0x1b33fa(0x2e5)](_0x427679, _0x168920, _0x36a052) {
        const _0x5b3c0b = _0x1b33fa, _0x42f66a = document['querySelectorAll'](_0x427679);
        _0x42f66a[_0x5b3c0b(0x302)](_0x318e8b => {
            const _0x532ed4 = _0x5b3c0b;
            if (!_0x318e8b['_eventControllers'])
                _0x318e8b['_eventControllers'] = {};
            const _0x55d416 = _0x168920 + '_' + _0x427679;
            _0x318e8b['_eventControllers'][_0x55d416] && _0x318e8b['_eventControllers'][_0x55d416][_0x532ed4(0x4b2)]();
            const _0x31f250 = new AbortController();
            _0x318e8b[_0x532ed4(0x143)][_0x55d416] = _0x31f250, _0x318e8b[_0x532ed4(0x1b7)](_0x168920, _0x36a052, { 'signal': _0x31f250[_0x532ed4(0xd3)] });
        });
    }
    ['safeAddEventListenerById'](_0x34f52b, _0x46cb55, _0x4ca1d3) {
        const _0x1f50ff = _0x1b33fa, _0x1de52d = document[_0x1f50ff(0x30f)](_0x34f52b);
        if (_0x1de52d) {
            safeLog(_0x1f50ff(0x388) + _0x34f52b);
            !_0x1de52d[_0x1f50ff(0x143)] && (_0x1de52d[_0x1f50ff(0x143)] = {});
            const _0x59a203 = _0x46cb55 + '_' + _0x34f52b;
            _0x1de52d[_0x1f50ff(0x143)][_0x59a203] && _0x1de52d[_0x1f50ff(0x143)][_0x59a203]['abort']();
            const _0x15381b = new AbortController();
            _0x1de52d[_0x1f50ff(0x143)][_0x59a203] = _0x15381b, _0x1de52d[_0x1f50ff(0x1b7)](_0x46cb55, _0x4ca1d3, { 'signal': _0x15381b[_0x1f50ff(0xd3)] });
        } else
            safeLog('❌\x20Element\x20with\x20id\x20\x22' + _0x34f52b + _0x1f50ff(0x21d));
    }
}
function initClipsStudio() {
    const _0x42c01d = _0x1b33fa;
    !window['clipsStudio'] && (clipsStudio = new ClipsStudio(), clipsStudio[_0x42c01d(0x337)](), window[_0x42c01d(0x429)] = clipsStudio, setTimeout(() => {
    }, 0x1f4));
}
function logout() {
    const _0x53aba9 = _0x1b33fa;
    fetch(API_BASE_URL + _0x53aba9(0x439), {
        'method': _0x53aba9(0x3ea),
        'credentials': _0x53aba9(0x1d9)
    })[_0x53aba9(0x4a0)](_0x53ccbb => {
        const _0x5cfac7 = _0x53aba9;
        localStorage['removeItem'](_0x5cfac7(0x33c)), localStorage[_0x5cfac7(0x183)]('userId'), localStorage['removeItem'](_0x5cfac7(0x281)), localStorage[_0x5cfac7(0x183)]('currentUser'), safeLog(_0x5cfac7(0x438)), window['location'][_0x5cfac7(0x2c8)] = _0x5cfac7(0x9a);
    })[_0x53aba9(0x2c4)](_0x28fbdd => {
        safeLog('❌\x20Logout\x20error:', _0x28fbdd), setTimeout(() => {
            const _0xdf7038 = _0x162e;
            window['location']['href'] = _0xdf7038(0x9a);
        }, 0x3e8);
    });
}
function setupEventListeners() {
    const _0xfeba4a = _0x1b33fa, _0x3656f2 = document[_0xfeba4a(0x30f)](_0xfeba4a(0x113));
    _0x3656f2 && _0x3656f2[_0xfeba4a(0x1b7)]('click', _0x11c05f => {
        const _0x42bc99 = _0xfeba4a;
        _0x11c05f[_0x42bc99(0x336)](), toggleUserMenu(_0x11c05f);
    });
    const _0x47c06b = document[_0xfeba4a(0x30f)](_0xfeba4a(0x434));
    _0x47c06b && _0x47c06b['addEventListener'](_0xfeba4a(0x259), _0x31bf6c => {
        const _0xcf9fc2 = _0xfeba4a;
        _0x31bf6c[_0xcf9fc2(0xc6)](), _0x31bf6c[_0xcf9fc2(0x336)](), logout();
    });
    const _0x1a28c4 = document['getElementById'](_0xfeba4a(0x1e6));
    _0x1a28c4 && _0x1a28c4[_0xfeba4a(0x1b7)](_0xfeba4a(0x259), _0x37a367 => {
        _0x37a367['stopPropagation'](), openSettings();
    });
    settingsBtn && settingsBtn['addEventListener'](_0xfeba4a(0x259), openSettings);
    closeSettings && closeSettings['addEventListener'](_0xfeba4a(0x259), closeSettingsPanel);
    const _0x49be81 = document[_0xfeba4a(0x30f)](_0xfeba4a(0x1c3));
    _0x49be81 && _0x49be81[_0xfeba4a(0x1b7)]('click', () => {
        const _0x1d51c1 = _0xfeba4a;
        confirm(_0x1d51c1(0x288)) && (clearChat(), clipsStudio['showNotification'](_0x1d51c1(0x24e), _0x1d51c1(0x1db)));
    });
    const _0x3d4b41 = document[_0xfeba4a(0x44d)](_0xfeba4a(0x3db));
    _0x3d4b41 && _0x3d4b41[_0xfeba4a(0x1b7)](_0xfeba4a(0x259), closeSettingsPanel);
    const _0x166525 = localStorage[_0xfeba4a(0x1e7)](_0xfeba4a(0x351));
    _0x166525 && (setTheme(_0x166525), darkModeSettingsToggle && (darkModeSettingsToggle[_0xfeba4a(0x146)] = _0x166525 === _0xfeba4a(0x329)));
    darkModeSettingsToggle && (safeLog(_0xfeba4a(0x268)), (darkModeSettingsToggle[_0xfeba4a(0x1ee)] !== _0xfeba4a(0x459) || darkModeSettingsToggle[_0xfeba4a(0x187)] !== 'checkbox') && safeLog(_0xfeba4a(0x222)), darkModeSettingsToggle[_0xfeba4a(0x1b7)](_0xfeba4a(0x466), () => {
        const _0x301773 = _0xfeba4a, _0x3e6be0 = darkModeSettingsToggle['checked'] ? 'dark' : _0x301773(0x159);
        safeLog(_0x301773(0x300), _0x3e6be0), setTheme(_0x3e6be0);
    }));
    const _0x41ba7f = document['getElementById'](_0xfeba4a(0x13a));
    _0x41ba7f && _0x41ba7f['addEventListener']('click', generateVideoIdeas);
    const _0x3ed62d = document[_0xfeba4a(0x30f)](_0xfeba4a(0x1cb));
    _0x3ed62d && (_0x3ed62d['checked'] = !![], localStorage[_0xfeba4a(0x204)]('solisAIWatermarkEnabled', _0xfeba4a(0x43f)), _0x3ed62d[_0xfeba4a(0x1b7)](_0xfeba4a(0x466), _0x4628d7 => {
        const _0x240a19 = _0xfeba4a, _0x6880bf = _0x4628d7[_0x240a19(0x18d)][_0x240a19(0x146)];
        localStorage[_0x240a19(0x204)](_0x240a19(0x1bf), _0x6880bf ? _0x240a19(0x43f) : 'false'), window[_0x240a19(0x429)] && window[_0x240a19(0x429)][_0x240a19(0x491)] && (window[_0x240a19(0x429)][_0x240a19(0x491)][_0x240a19(0x2d6)] = _0x6880bf), window['clipsStudio'] && window[_0x240a19(0x429)]['updateWatermarkDisplay'](), safeLog('Watermark\x20' + (_0x6880bf ? _0x240a19(0x472) : _0x240a19(0xeb)) + _0x240a19(0x225));
    }));
    const _0x27962f = document['getElementById'](_0xfeba4a(0x49c));
    _0x27962f && _0x27962f['addEventListener']('click', initiateYouTubeConnection), checkYouTubeConnection();
}
upgradeSettingsBtn && upgradeSettingsBtn[_0x1b33fa(0x1b7)](_0x1b33fa(0x259), openUpgradeModal);
closeUpgrade && closeUpgrade[_0x1b33fa(0x1b7)](_0x1b33fa(0x259), closeUpgradeModal);
const clipsToggle = document[_0x1b33fa(0x30f)](_0x1b33fa(0x16a));
clipsToggle && clipsToggle[_0x1b33fa(0x1b7)](_0x1b33fa(0x259), function (_0x19ab8e) {
    const _0xa1b16a = _0x1b33fa;
    _0x19ab8e['stopPropagation']();
    const _0x622d68 = document[_0xa1b16a(0x30f)](_0xa1b16a(0xf6)), _0x2d191b = this[_0xa1b16a(0x44d)](_0xa1b16a(0x400));
    if (_0x622d68)
        _0x622d68[_0xa1b16a(0x2e4)][_0xa1b16a(0x3ca)](_0xa1b16a(0x1ce));
    if (_0x2d191b)
        _0x2d191b[_0xa1b16a(0x2e4)]['toggle'](_0xa1b16a(0x2fe));
});
navItems['forEach'](_0x40b129 => {
    const _0xa3f33a = _0x1b33fa;
    _0x40b129['addEventListener'](_0xa3f33a(0x259), () => {
        const _0x43b90f = _0xa3f33a;
        !_0x40b129[_0x43b90f(0x37b)](_0x43b90f(0x1d8)) && (navItems[_0x43b90f(0x302)](_0x880242 => {
            const _0x4e1aba = _0x43b90f;
            _0x880242['id'] !== 'clips-toggle' && !_0x880242[_0x4e1aba(0x37b)]('.clips-submenu') && _0x880242[_0x4e1aba(0x2e4)][_0x4e1aba(0x35f)]('active');
        }), _0x40b129['id'] !== _0x43b90f(0x16a) && _0x40b129[_0x43b90f(0x2e4)][_0x43b90f(0xe1)](_0x43b90f(0x3fd)));
        const _0x299741 = _0x40b129[_0x43b90f(0x481)][_0x43b90f(0x18d)];
        _0x299741 && (navigateTo(_0x299741), window[_0x43b90f(0x4ab)] <= 0x300 && sidebar[_0x43b90f(0x2e4)][_0x43b90f(0x18e)](_0x43b90f(0x147)) && sidebar[_0x43b90f(0x2e4)]['remove'](_0x43b90f(0x147)));
    });
}), document['addEventListener']('click', _0x5c49e8 => {
    const _0x318dfe = _0x1b33fa;
    userMenu && !userMenu['contains'](_0x5c49e8[_0x318dfe(0x18d)]) && userProfile && !userProfile[_0x318dfe(0x18e)](_0x5c49e8['target']) && (userMenu[_0x318dfe(0x2e4)][_0x318dfe(0x35f)](_0x318dfe(0x3fd)), userProfile['classList'][_0x318dfe(0x35f)](_0x318dfe(0xd8))), upgradeModal && !upgradeModal[_0x318dfe(0x18e)](_0x5c49e8['target']) && _0x5c49e8[_0x318dfe(0x18d)] !== upgradeSettingsBtn && closeUpgradeModal(), _0x5c49e8[_0x318dfe(0x18d)][_0x318dfe(0x2e4)][_0x318dfe(0x18e)](_0x318dfe(0x348)) && (_0x5c49e8[_0x318dfe(0x18d)][_0x318dfe(0x48c)][_0x318dfe(0x17d)] = 'none');
}), document[_0x1b33fa(0x1b7)](_0x1b33fa(0x174), () => {
    const _0xa80d8f = _0x1b33fa;
    try {
        document['hidden'] && dockInputInstantly();
    } catch (_0x1ac43d) {
        safeLog(_0xa80d8f(0x1f6), _0x1ac43d);
    }
}), document['addEventListener'](_0x1b33fa(0x317), _0x5dc49f => {
    const _0x1773dd = _0x1b33fa;
    (_0x5dc49f[_0x1773dd(0x181)] || _0x5dc49f[_0x1773dd(0x3a2)]) && _0x5dc49f['key'] === 'k' && (_0x5dc49f[_0x1773dd(0xc6)](), toggleSidebar());
});
function toggleSidebar() {
    const _0x132b70 = _0x1b33fa;
    sidebar[_0x132b70(0x2e4)][_0x132b70(0x3ca)](_0x132b70(0x147));
    const _0x40f969 = sidebar['classList'][_0x132b70(0x18e)]('expanded');
    localStorage['setItem']('sidebarExpanded', _0x40f969);
}
function toggleUserMenu(_0x3a87eb) {
    safeLog('toggleUserMenu\x20called\x20but\x20deprecated\x20-\x20use\x20menu.js\x20instead');
    if (!userMenu || !userProfile)
        return;
    _0x3a87eb['stopPropagation']();
}
function openSettings() {
    const _0x57de92 = _0x1b33fa;
    if (!settingsPanel)
        return;
    settingsPanel[_0x57de92(0x2e4)][_0x57de92(0xe1)](_0x57de92(0x1ce));
    const _0x4f5fa6 = document[_0x57de92(0x30f)](_0x57de92(0x3de));
    _0x4f5fa6 && (_0x4f5fa6['style'][_0x57de92(0x14d)] = '1', _0x4f5fa6['style'][_0x57de92(0x334)] = _0x57de92(0x1ed));
    if (userMenu)
        userMenu['classList'][_0x57de92(0x35f)](_0x57de92(0x3fd));
    currentUser && fetchAndUpdateSubscriptionStatus();
}
function closeSettingsPanel() {
    const _0x4fba8d = _0x1b33fa;
    if (!settingsPanel)
        return;
    settingsPanel[_0x4fba8d(0x2e4)][_0x4fba8d(0x35f)](_0x4fba8d(0x1ce));
    const _0xa6a64d = document[_0x4fba8d(0x30f)]('settingsBackdrop');
    _0xa6a64d && (_0xa6a64d['style'][_0x4fba8d(0x14d)] = '0', _0xa6a64d[_0x4fba8d(0x48c)][_0x4fba8d(0x334)] = _0x4fba8d(0x215));
}
async function checkYouTubeConnection() {
    const _0xc7b16e = _0x1b33fa, _0x3f9876 = document['getElementById'](_0xc7b16e(0x177)), _0x6441f1 = document[_0xc7b16e(0x30f)](_0xc7b16e(0x252)), _0x152a88 = document[_0xc7b16e(0x44d)](_0xc7b16e(0x2b6));
    if (!_0x3f9876)
        return;
    try {
        const _0x5bd80b = await fetch(window[_0xc7b16e(0x3e3)] + '/auth/youtube/status', {
            'method': _0xc7b16e(0x2cc),
            'headers': {
                'X-CSRF-Token': getCSRFToken() || '',
                'Content-Type': 'application/json'
            },
            'credentials': _0xc7b16e(0x1d9)
        });
        if (!_0x5bd80b['ok']) {
            safeLog('⚠️\x20Failed\x20to\x20check\x20YouTube\x20status:', _0x5bd80b[_0xc7b16e(0xa8)]), _0x3f9876['style']['display'] = _0xc7b16e(0x121);
            return;
        }
        const _0x4ef49c = await _0x5bd80b[_0xc7b16e(0x2d2)](), _0x59d1ed = _0x4ef49c[_0xc7b16e(0x40d)] === !![];
        safeLog('🔍\x20YouTube\x20Connection\x20Status\x20(from\x20backend):', _0x59d1ed);
        !_0x59d1ed ? (_0x3f9876[_0xc7b16e(0x48c)]['display'] = _0xc7b16e(0x121), _0x6441f1 && _0x6441f1[_0xc7b16e(0x2e4)][_0xc7b16e(0xe1)](_0xc7b16e(0xc4)), _0x152a88 && _0x152a88[_0xc7b16e(0x2e4)][_0xc7b16e(0xe1)](_0xc7b16e(0xc4))) : (_0x3f9876['style'][_0xc7b16e(0x17d)] = 'none', _0x6441f1 && _0x6441f1['classList'][_0xc7b16e(0x35f)](_0xc7b16e(0xc4)), _0x152a88 && _0x152a88[_0xc7b16e(0x2e4)][_0xc7b16e(0x35f)](_0xc7b16e(0xc4)));
        if (!currentUser)
            currentUser = {};
        currentUser[_0xc7b16e(0x2ef)] = _0x59d1ed;
    } catch (_0x5eb34d) {
        safeLog(_0xc7b16e(0x284), _0x5eb34d), _0x3f9876[_0xc7b16e(0x48c)]['display'] = _0xc7b16e(0x121);
    }
}
function initiateYouTubeConnection() {
    const _0x2abb31 = _0x1b33fa;
    if (!currentUser) {
        alert(_0x2abb31(0x2bb));
        return;
    }
    const _0x9312da = getCSRFToken();
    fetch(window[_0x2abb31(0x3e3)] + _0x2abb31(0x112), {
        'method': _0x2abb31(0x2cc),
        'headers': {
            'X-CSRF-Token': _0x9312da || '',
            'Content-Type': _0x2abb31(0x42a)
        },
        'credentials': _0x2abb31(0x1d9)
    })[_0x2abb31(0x4a0)](_0x448494 => {
        const _0x5434c2 = _0x2abb31;
        if (!_0x448494['ok'])
            throw new Error(_0x5434c2(0x1c5) + _0x448494[_0x5434c2(0xa8)] + ':\x20' + _0x448494['statusText']);
        return _0x448494[_0x5434c2(0x2d2)]();
    })[_0x2abb31(0x4a0)](_0x4d6176 => {
        const _0x1d18a9 = _0x2abb31;
        if (!_0x4d6176['auth_url'])
            throw new Error(_0x1d18a9(0x31a));
        safeLog(_0x1d18a9(0x1aa));
        const _0x9a2dc3 = 0x1f4, _0x33540d = 0x258, _0x41e5ec = (window[_0x1d18a9(0x4ab)] - _0x9a2dc3) / 0x2, _0x4b9b6f = (window[_0x1d18a9(0xa3)] - _0x33540d) / 0x2, _0x430bba = window[_0x1d18a9(0x1ce)](_0x4d6176['auth_url'], 'YouTubeOAuth', 'width=' + _0x9a2dc3 + _0x1d18a9(0x1b3) + _0x33540d + _0x1d18a9(0x340) + _0x41e5ec + ',top=' + _0x4b9b6f + ',noopener,noreferrer');
        if (!_0x430bba)
            safeLog(_0x1d18a9(0x221)), window['location'][_0x1d18a9(0x2c8)] = _0x4d6176[_0x1d18a9(0x2bc)];
        else {
            safeLog('✓\x20OAuth\x20window\x20opened');
            const _0x4624f9 = function _0x391c37(_0x21aba5) {
                const _0x1bf187 = _0x1d18a9, _0xbffab3 = [window[_0x1bf187(0x3a4)][_0x1bf187(0x2f4)]];
                if (!_0xbffab3[_0x1bf187(0x44c)](_0x21aba5[_0x1bf187(0x2f4)])) {
                    safeLog(_0x1bf187(0x30d), _0x21aba5[_0x1bf187(0x2f4)]);
                    return;
                }
                if (_0x21aba5[_0x1bf187(0x2c0)][_0x1bf187(0x187)] === _0x1bf187(0x42e))
                    safeLog(_0x1bf187(0x3cb)), window['removeEventListener'](_0x1bf187(0x110), _0x391c37), clearInterval(_0x523063), setTimeout(() => {
                        const _0x492859 = _0x1bf187;
                        checkYouTubeConnection(), typeof analyticsManager !== _0x492859(0x118) && analyticsManager && analyticsManager[_0x492859(0x154)](), showNotification(_0x492859(0x36a), _0x492859(0x1db));
                    }, 0x3e8);
                else
                    _0x21aba5[_0x1bf187(0x2c0)]['type'] === 'YOUTUBE_AUTH_ERROR' && (safeLog(_0x1bf187(0x2ec), _0x21aba5[_0x1bf187(0x2c0)][_0x1bf187(0x2b7)]), window['removeEventListener']('message', _0x391c37), clearInterval(_0x523063), showNotification(_0x1bf187(0x214) + _0x21aba5['data'][_0x1bf187(0x2b7)], _0x1bf187(0x2b7)));
            };
            window[_0x1d18a9(0x1b7)](_0x1d18a9(0x110), _0x4624f9);
            let _0x523063 = setInterval(() => {
                const _0x3cff38 = _0x1d18a9;
                try {
                    _0x430bba['closed'] && (clearInterval(_0x523063), safeLog(_0x3cff38(0x3ab)), window[_0x3cff38(0xf8)](_0x3cff38(0x110), _0x4624f9), setTimeout(() => {
                        verifyToken(), checkYouTubeConnection();
                    }, 0x7d0));
                } catch (_0x133d6e) {
                }
            }, 0x1f4);
        }
    })[_0x2abb31(0x2c4)](_0x4abd6e => {
        const _0x596c33 = _0x2abb31;
        safeLog(_0x596c33(0x17e), _0x4abd6e), showNotification(_0x596c33(0x355) + _0x4abd6e[_0x596c33(0x110)], _0x596c33(0x2b7));
    });
}
function setTheme(_0x2e0d9f) {
    const _0x2c001f = _0x1b33fa;
    currentTheme = _0x2e0d9f, safeLog(_0x2c001f(0x2d5), _0x2e0d9f), document['documentElement'][_0x2c001f(0xf9)]('data-theme', _0x2e0d9f), localStorage['setItem']('theme', _0x2e0d9f), safeLog('setTheme():\x20Theme\x20saved\x20to\x20localStorage.\x20Current\x20stored\x20theme:', localStorage[_0x2c001f(0x1e7)](_0x2c001f(0x351)));
}
async function handleClipCompilationRequest(_0x16c0f0, _0x5d0676) {
    const _0x4aa85c = _0x1b33fa;
    try {
        if (!currentUser) {
            addMessageToChat('ai', '❌\x20Please\x20log\x20in\x20to\x20create\x20clip\x20compilations.\x20Click\x20the\x20login\x20button\x20in\x20the\x20top\x20right.');
            return;
        }
        showClipConfirmationDialog(_0x16c0f0, _0x5d0676);
    } catch (_0x2ceaf2) {
        safeLog('Clip\x20compilation\x20error:', _0x2ceaf2), addMessageToChat('ai', _0x4aa85c(0x1ff) + _0x2ceaf2['message']);
    }
}
function showClipConfirmationDialog(_0x2f130a, _0x2373a7) {
    const _0x4bc6ef = _0x1b33fa, _0x3192e0 = document['createElement'](_0x4bc6ef(0x1ec));
    _0x3192e0['className'] = _0x4bc6ef(0x127), _0x3192e0[_0x4bc6ef(0x1a5)] = _0x4bc6ef(0x2a3), document['body'][_0x4bc6ef(0x20b)](_0x3192e0);
    const _0x2a6b06 = document[_0x4bc6ef(0x30f)]('urlDisplay');
    _0x2a6b06 && (_0x2a6b06['textContent'] = _0x2373a7), document[_0x4bc6ef(0x30f)](_0x4bc6ef(0x3cd))[_0x4bc6ef(0x1b7)](_0x4bc6ef(0x259), () => {
        const _0x35364c = _0x4bc6ef;
        _0x3192e0[_0x35364c(0x35f)]();
    }), document['getElementById'](_0x4bc6ef(0x1a7))[_0x4bc6ef(0x1b7)](_0x4bc6ef(0x259), async () => {
        const _0x1e8403 = _0x4bc6ef;
        _0x3192e0[_0x1e8403(0x35f)](), window['location'][_0x1e8403(0x30a)] = _0x1e8403(0x1cc), setTimeout(() => {
            startClipCompilation(_0x2373a7);
        }, 0x1f4);
    }), _0x3192e0[_0x4bc6ef(0x1b7)]('click', _0x4c3c81 => {
        const _0x24e8b5 = _0x4bc6ef;
        _0x4c3c81['target'] === _0x3192e0 && _0x3192e0[_0x24e8b5(0x35f)]();
    });
}
async function startClipCompilation(_0x181513) {
    const _0x213b93 = _0x1b33fa;
    try {
        const _0x3fbc23 = getAuthHeaders(), _0x5209cb = clipsStudio ? clipsStudio[_0x213b93(0x417)](_0x181513) : null;
        sessionStorage[_0x213b93(0x204)](_0x213b93(0x27f), JSON[_0x213b93(0x296)]({
            'videoId': _0x5209cb,
            'startTime': Date['now']()
        }));
        const _0x185913 = document[_0x213b93(0x38b)](_0x213b93(0x1ec));
        _0x185913['id'] = 'clip-processing-modal', _0x185913['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#clip-processing-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#fff5eb\x200%,\x20#ffe4d1\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-processing-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-atom\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20140px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20140px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-atom\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20drop-shadow(0\x200\x2020px\x20rgba(255,\x20107,\x2053,\x200.3));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-nucleus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20nucleusPulse\x201.5s\x20ease-in-out\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20nucleusPulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0.8);\x20opacity:\x200.6;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(0.8);\x20opacity:\x200.6;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x2050px\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-dasharray:\x20300;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-dashoffset:\x20300;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit-1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(75deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20drawOrbit\x201.5s\x20ease-in-out\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit-2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-20deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20drawOrbit\x201.5s\x20ease-in-out\x200.3s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20drawOrbit\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20stroke-dashoffset:\x20300;\x20opacity:\x200.3;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20stroke-dashoffset:\x200;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20stroke-dashoffset:\x20300;\x20opacity:\x200.3;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2028px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#1a1a1a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-subtitle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#666;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20280px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-fill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.4s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stats\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.08);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat-value\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ff6b35;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.05em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-processing-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-atom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x22140\x22\x20height=\x22140\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22clip-nucleus\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x228\x22\x20fill=\x22#ff6b35\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2212\x22\x20fill=\x22#ff6b35\x22\x20opacity=\x220.3\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20class=\x22clip-orbit\x20clip-orbit-1\x22\x20rx=\x2245\x22\x20ry=\x2225\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22#ff6b35\x22\x20stroke-width=\x222.5\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20opacity=\x220.7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20class=\x22clip-orbit\x20clip-orbit-2\x22\x20rx=\x2245\x22\x20ry=\x2225\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22#ff6b35\x22\x20stroke-width=\x222.5\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20opacity=\x220.7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22clip-title\x22>Cooking!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22clip-subtitle\x22\x20id=\x22clipStatus\x22>HAHAHAHA</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-fill\x22\x20id=\x22clipProgressFill\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20gap:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22clipProgress\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#999;\x22>0%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22clipTimeLeft\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#999;\x22>--:--</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatDownload\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Downloading</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatProcessing\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Processing</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatRendering\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Rendering</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document[_0x213b93(0x3aa)][_0x213b93(0x20b)](_0x185913);
        const _0x5642b3 = await fetch(API_BASE_URL + _0x213b93(0x492), {
            'method': _0x213b93(0x3ea),
            'headers': {
                'Content-Type': 'application/json',
                ..._0x3fbc23
            },
            'credentials': _0x213b93(0x1d9),
            'body': JSON[_0x213b93(0x296)]({
                'url': _0x181513,
                'template_id': _0x213b93(0x28f),
                'gameplay_clip_id': selectedGameplayClip
            })
        });
        if (!_0x5642b3['ok']) {
            let _0x25276a = _0x213b93(0x441), _0x21d637 = '';
            try {
                const _0xedd095 = await _0x5642b3[_0x213b93(0x2d2)]();
                _0x25276a = _0xedd095[_0x213b93(0x2b7)] || _0x25276a, _0x21d637 = _0xedd095['error_code'] || '';
            } catch (_0x49703b) {
                _0x25276a = 'Server\x20error:\x20' + _0x5642b3[_0x213b93(0xa8)];
            }
            if (_0x21d637 === 'GENERATION_COOLDOWN') {
                const _0x316d44 = await _0x5642b3[_0x213b93(0x2d2)](), _0x334f36 = _0x316d44[_0x213b93(0x350)] || _0x316d44[_0x213b93(0x45e)] || 0x1e, _0x261dbd = Math[_0x213b93(0xd7)](_0x334f36 / 0x3c), _0x3f7e9e = _0x334f36 % 0x3c;
                startCooldownTimer(_0x334f36);
                let _0x1265d0 = '';
                _0x261dbd > 0x0 ? _0x1265d0 = _0x213b93(0x34d) + _0x261dbd + 'm\x20' + _0x3f7e9e + 's' : _0x1265d0 = _0x213b93(0x34d) + _0x334f36 + 's', _0x25276a = _0x213b93(0x253) + _0x1265d0 + '.';
            }
            _0x185913[_0x213b93(0x1a5)] = _0x213b93(0x1b9) + _0x25276a + _0x213b93(0x15c);
            return;
        }
        const _0x39850b = await _0x5642b3[_0x213b93(0x2d2)](), _0x1dd79f = _0x39850b['project_id'];
        let _0x10f3ca = ![], _0x59bd08 = 0x0;
        const _0x28aba0 = 0x12c;
        let _0x46820f = Date[_0x213b93(0x269)](), _0x2dd16c = null;
        while (!_0x10f3ca && _0x59bd08 < _0x28aba0) {
            _0x59bd08++;
            try {
                const _0x1d1886 = await fetch(API_BASE_URL + _0x213b93(0x1ea) + _0x1dd79f, {
                    'headers': _0x3fbc23,
                    'credentials': _0x213b93(0x1d9)
                });
                if (_0x1d1886['ok']) {
                    let _0x18d963;
                    try {
                        _0x18d963 = await _0x1d1886[_0x213b93(0x2d2)]();
                    } catch (_0x1349f3) {
                        safeLog(_0x213b93(0xaf), _0x1349f3), await new Promise(_0x259ed4 => setTimeout(_0x259ed4, 0x7d0));
                        continue;
                    }
                    const _0x31cfe8 = _0x18d963[_0x213b93(0xa8)] || _0x213b93(0x12e), _0x4d15c1 = _0x18d963[_0x213b93(0x41c)] || 0x0, _0x5917c0 = Date[_0x213b93(0x269)]() - _0x46820f, _0x3716b6 = _0x5917c0 / 0x3e8;
                    _0x4d15c1 > 0x0 && !_0x2dd16c && (_0x2dd16c = _0x3716b6 / _0x4d15c1 * 0x64);
                    const _0x353fcd = _0x2dd16c ? _0x2dd16c * (0x64 - _0x4d15c1) / 0x64 * 0x3e8 : 0x0, _0x2a01f1 = Math['floor'](_0x353fcd / 0xea60), _0xa8fe2f = Math[_0x213b93(0xd7)](_0x353fcd % 0xea60 / 0x3e8), _0xd17b8a = document[_0x213b93(0x30f)]('clipStatus');
                    if (_0xd17b8a) {
                        const _0x949833 = {
                                'downloading': [
                                    _0x213b93(0x43e),
                                    _0x213b93(0x39a),
                                    _0x213b93(0xe5),
                                    _0x213b93(0xf3),
                                    'LEMME\x20GET\x20THIS'
                                ],
                                'processing': [
                                    _0x213b93(0x216),
                                    _0x213b93(0x103),
                                    _0x213b93(0x451),
                                    _0x213b93(0x4b3),
                                    _0x213b93(0x2d4)
                                ],
                                'rendering': [
                                    'LMAOOO',
                                    _0x213b93(0x3a7),
                                    'IM\x20DYING',
                                    _0x213b93(0x3bb),
                                    _0x213b93(0x391)
                                ],
                                'completed': [
                                    _0x213b93(0x191),
                                    'LETS\x20GOOOO',
                                    'FIRE\x20FIRE\x20FIRE',
                                    _0x213b93(0x34c),
                                    _0x213b93(0x362)
                                ]
                            }, _0x3746e5 = _0x949833[_0x31cfe8] || [
                                'LOL',
                                _0x213b93(0x216),
                                _0x213b93(0x3fe)
                            ];
                        _0xd17b8a[_0x213b93(0x22f)] = _0x3746e5[Math[_0x213b93(0xd7)](Math[_0x213b93(0xea)]() * _0x3746e5[_0x213b93(0x392)])];
                    }
                    document['getElementById'](_0x213b93(0x360))[_0x213b93(0x48c)]['width'] = Math[_0x213b93(0x406)](_0x4d15c1, 0x63) + '%', document['getElementById']('clipProgress')['textContent'] = Math['min'](_0x4d15c1, 0x63) + '%', document[_0x213b93(0x30f)](_0x213b93(0x136))[_0x213b93(0x22f)] = _0x2a01f1 > 0x0 ? _0x2a01f1 + ':' + _0xa8fe2f[_0x213b93(0xe0)]()[_0x213b93(0x139)](0x2, '0') : _0xa8fe2f + 's';
                    if (_0x31cfe8 === 'downloading')
                        document[_0x213b93(0x30f)](_0x213b93(0x2b9))[_0x213b93(0x22f)] = Math['min'](_0x4d15c1, 0x63) + '%';
                    else {
                        if (_0x31cfe8 === _0x213b93(0x12e))
                            document[_0x213b93(0x30f)](_0x213b93(0xe3))[_0x213b93(0x22f)] = Math[_0x213b93(0x406)](_0x4d15c1, 0x63) + '%';
                        else
                            _0x31cfe8 === _0x213b93(0x237) && (document[_0x213b93(0x30f)](_0x213b93(0x20d))[_0x213b93(0x22f)] = Math['min'](_0x4d15c1, 0x63) + '%');
                    }
                    if (_0x31cfe8 === _0x213b93(0x2b0))
                        _0x10f3ca = !![], sessionStorage['removeItem']('clipProcessing'), _0x185913[_0x213b93(0x1a5)] = _0x213b93(0x48a);
                    else
                        _0x31cfe8 === _0x213b93(0x3ef) && (_0x10f3ca = !![], sessionStorage[_0x213b93(0x183)](_0x213b93(0x27f)), _0x185913['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>❌</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Processing\x20Failed</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>' + (_0x18d963['message'] || 'Unknown\x20error') + _0x213b93(0x156));
                }
            } catch (_0x1260f6) {
                safeLog(_0x213b93(0x160), _0x1260f6);
            }
            !_0x10f3ca && await new Promise(_0x128d3a => setTimeout(_0x128d3a, 0x7d0));
        }
        !_0x10f3ca && (sessionStorage[_0x213b93(0x183)](_0x213b93(0x27f)), _0x185913[_0x213b93(0x1a5)] = _0x213b93(0x203));
    } catch (_0x5c4c5b) {
        safeLog(_0x213b93(0x219), _0x5c4c5b), document[_0x213b93(0x30f)]('clip-processing-modal')?.[_0x213b93(0x35f)](), addMessageToChat('ai', _0x213b93(0x1ff) + _0x5c4c5b[_0x213b93(0x110)]);
    }
}
async function generateVideoIdeas() {
    const _0x55e417 = _0x1b33fa, _0x4e56bf = [
            _0x55e417(0xc9),
            _0x55e417(0x39c),
            _0x55e417(0x3bc),
            _0x55e417(0x115),
            _0x55e417(0x1bd),
            _0x55e417(0x3d8),
            'Compile\x20before\x20and\x20after\x20transformation\x20clips',
            _0x55e417(0x297),
            _0x55e417(0x25e),
            _0x55e417(0x134),
            'Compile\x20your\x20best\x20one-liners\x20and\x20funny\x20quotes',
            _0x55e417(0x1e0),
            _0x55e417(0x2ce),
            _0x55e417(0x46a),
            _0x55e417(0x2a8)
        ], _0x1f89df = _0x4e56bf[Math[_0x55e417(0xd7)](Math[_0x55e417(0xea)]() * _0x4e56bf[_0x55e417(0x392)])];
    userInput && (userInput[_0x55e417(0xf4)] = _0x1f89df, userInput['focus'](), userInput[_0x55e417(0x416)](new Event(_0x55e417(0x399))));
    const _0x530a2e = document['getElementById'](_0x55e417(0x13a));
    _0x530a2e && (_0x530a2e['style'][_0x55e417(0x402)] = _0x55e417(0x415), setTimeout(() => {
        const _0x55b2f2 = _0x55e417;
        _0x530a2e[_0x55b2f2(0x48c)][_0x55b2f2(0x402)] = _0x55b2f2(0x496);
    }, 0xa));
}
function addMessageToChat(_0x56208d, _0x7eee3c) {
    const _0xe8903b = _0x1b33fa;
    if (!chatContainer)
        return;
    const _0x472a97 = document[_0xe8903b(0x38b)](_0xe8903b(0x1ec));
    _0x472a97['className'] = _0xe8903b(0x4ad) + _0x56208d + _0xe8903b(0x344);
    const _0x839717 = document[_0xe8903b(0x38b)](_0xe8903b(0x1ec));
    _0x839717[_0xe8903b(0x40f)] = _0xe8903b(0x1ef) + _0x56208d + _0xe8903b(0x363), _0x839717[_0xe8903b(0x1a5)] = _0xe8903b(0x287) + formatMessageContent(_0x7eee3c) + _0xe8903b(0x352);
    const _0x5e63b5 = _0x839717['querySelector'](_0xe8903b(0x151));
    _0x5e63b5[_0xe8903b(0x1b7)](_0xe8903b(0x259), () => {
        const _0xf5e37c = _0xe8903b;
        navigator[_0xf5e37c(0x412)][_0xf5e37c(0x38a)](_0x7eee3c)['then'](() => {
            const _0x278ed3 = _0xf5e37c;
            _0x5e63b5[_0x278ed3(0x2e4)][_0x278ed3(0xe1)](_0x278ed3(0x1f4)), _0x5e63b5[_0x278ed3(0x1a5)] = _0x278ed3(0x25f), setTimeout(() => {
                const _0x5c989e = _0x278ed3;
                _0x5e63b5[_0x5c989e(0x2e4)][_0x5c989e(0x35f)](_0x5c989e(0x1f4)), _0x5e63b5[_0x5c989e(0x1a5)] = _0x5c989e(0x47b);
            }, 0x7d0);
        })[_0xf5e37c(0x2c4)](_0x5cfeb6 => {
            const _0x590332 = _0xf5e37c;
            safeLog(_0x590332(0x3ac), _0x5cfeb6);
        });
    }), _0x472a97[_0xe8903b(0x20b)](_0x839717), chatContainer[_0xe8903b(0x20b)](_0x472a97), chatContainer[_0xe8903b(0x422)] = chatContainer[_0xe8903b(0x129)], window[_0xe8903b(0x416)](new CustomEvent(_0xe8903b(0x12f))), (_0x56208d === _0xe8903b(0x2c5) || !isGenerating) && (chatHistory[_0xe8903b(0x375)]({
        'sender': _0x56208d,
        'content': _0x7eee3c,
        'timestamp': new Date()[_0xe8903b(0x456)]()
    }), localStorage[_0xe8903b(0x204)](_0xe8903b(0x33b), JSON[_0xe8903b(0x296)](chatHistory)));
}
function startNewChat() {
    const _0x17334b = _0x1b33fa;
    (chatContainer && chatContainer['children'][_0x17334b(0x392)] > 0x1 || welcomeCard && !welcomeCard[_0x17334b(0x2e4)][_0x17334b(0x18e)](_0x17334b(0x215))) && (confirm(_0x17334b(0xaa)) && clearChat());
}
function _0x2161() {
    const _0x58814b = [
        '.settings-backdrop',
        'setupWatermarkToggle',
        '<style>@keyframes\x20pulse\x20{\x200%,\x20100%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x2050%\x20{\x20transform:\x20scale(1.1);\x20opacity:\x200.7;\x20}\x20}</style>',
        'settingsBackdrop',
        'daily_count',
        'generateClipBtn',
        'templateName',
        'showGameplayPanel',
        'API_BASE_URL',
        '\x22]\x20.loading-percentage',
        '<i\x20class=\x22fas\x20fa-sign-out-alt\x22></i><span>Sign\x20out</span>',
        'cssText',
        'Pattern\x202\x20match:',
        'values',
        'ceil',
        'POST',
        'currentProjectId',
        'loading',
        'urlButtonLocked',
        '\x22\x20style=\x22opacity:\x20',
        'failed',
        'getWatermarkParams',
        'left',
        '\x22\x20title=\x22Download\x20clip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20tray\x20[\x20]\x20that\x20stays\x20still\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20arrow\x20that\x20bounces\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Cleaned\x20up\x20old\x20library\x20items,\x20keeping\x2050\x20most\x20recent',
        'hostname',
        '📥\x20Download\x20initiated\x20for\x20projectId:',
        'meta[name=\x22csrf-token\x22]',
        'closeUpgrade',
        'Profile\x20dropdown\x20update\x20error:',
        'toUpperCase',
        'updateWatermarkDisplay',
        '.library-grid',
        '...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-date\x22>',
        'active',
        'LMAOOO',
        'link',
        '.chevron-icon',
        'updateProcessingView',
        'animation',
        'clipsStudioCurrentTab',
        '[data-tab=\x22templates\x22]',
        'auto',
        'min',
        'Download\x20clip',
        'closeTemplatePreviewBtn',
        'bindEvents',
        '\x22\x20data-project-id=\x22',
        'download',
        'This\x20is\x20a\x20Pro\x20template',
        'connected',
        'toLowerCase',
        'className',
        '❌\x20Template\x20not\x20found:',
        'toLocaleString',
        'clipboard',
        'token',
        '.pro-close-btn',
        'none',
        'dispatchEvent',
        'extractYouTubeVideoId',
        'url',
        'confirmTemplateUse',
        'slot-system-info',
        'loadAndDisplayStorageInfo',
        'progress',
        'Invalid\x20YouTube\x20URL',
        'signInBtn',
        'filePreviewContainer',
        '\x20\x20✅\x20Updated\x20template\x20description',
        'warn',
        'scrollTop',
        'has',
        '.library-delete-btn',
        'timestamp',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-template-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-pro\x22>PRO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2240\x22\x20height=\x2240\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#C8C4BE\x22\x20stroke-width=\x221.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x227\x22\x20height=\x2218\x22\x20rx=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x2214\x22\x20y=\x223\x22\x20width=\x227\x22\x20height=\x2218\x22\x20rx=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-locked-overlay\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x2010\x200v4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>',
        'cursor',
        'findIndex',
        'clipsStudio',
        'application/json',
        'svg',
        'pointerEvents',
        '💡\x20You\x20have\x20',
        'YOUTUBE_AUTH_SUCCESS',
        'openTemplatePreviewModal',
        'daily_limit',
        'safeAddEventListenerById',
        'Untitled\x20Clip',
        '🗑️\x20Delete\x20initiated\x20for\x20item:\x20',
        'dropdownLogout',
        '.library-grid\x20.library-card[data-id]',
        '✅\x20Modal\x20displayed',
        '.nav-item.sign-in',
        '✅\x20Logged\x20out\x20successfully',
        '/auth/logout',
        'Create\x20\x22',
        'parse',
        'checkTemplateAccess',
        'Failed\x20to\x20load\x20templates,\x20status:',
        'LOLOL',
        'true',
        '/api/clips/duration/',
        'Failed\x20to\x20start\x20processing',
        '/auth/subscription',
        'darkModeSettingsToggle',
        'Failed\x20to\x20load\x20templates:',
        'children',
        'placeholder',
        'updateStorageDisplay',
        'Could\x20not\x20fetch\x20duration:',
        'addClip',
        'Clip\x20not\x20found',
        'projects',
        'includes',
        'querySelector',
        'function',
        'rgba(255,\x20255,\x20255,\x200.4)',
        '.chips-nav-item',
        'STOP\x20IT',
        'protocol',
        'navWrapper',
        'nextElementSibling',
        '❌\x20Video\x20',
        'toISOString',
        '.user-email',
        'errorDurationText',
        'INPUT',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.text-stroke\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20-1.5px\x200\x20#000,\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20-1.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-2px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20\x202px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20-2px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203px\x20\x203px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.5px\x203.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204px\x20\x204px\x200\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.1rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.funniest\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ff0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranking-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20list-style:\x20none;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-number\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-1\x20{\x20color:\x20#ffd700;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-2\x20{\x20color:\x20#c0c0c0;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-3\x20{\x20color:\x20#cd7f32;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-4\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-5\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.metadata\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20rgba(255,255,255,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x200.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap\x22\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-preview-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22title\x20text-stroke\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22title_ranking\x22\x20style=\x22color:\x20white;\x22>RANKING</span>\x20<span\x20data-template-element-id=\x22title_funniest\x22\x20class=\x22funniest\x22\x20style=\x22color:\x20#ff0000;\x22>FUNNIEST</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-template-element-id=\x22title_channel\x22\x20style=\x22font-size:\x201.4rem;\x20text-align:\x20center;\x20margin:\x20-10px\x200\x2030px\x200;\x20color:\x20white\x20!important;\x20background:\x20transparent\x20!important;\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x22\x20class=\x22text-stroke\x22>{CHANNEL}\x20MOMENTS</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22ranking-list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_number\x22\x20class=\x22rank-number\x20text-stroke\x22>1.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_number\x22\x20class=\x22rank-number\x20text-stroke\x22>2.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_number\x22\x20class=\x22rank-number\x20text-stroke\x22>3.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_number\x22\x20class=\x22rank-number\x20text-stroke\x22>4.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_number\x22\x20class=\x22rank-number\x20text-stroke\x22>5.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'enforceUrlButtonRateLimitOnLoad',
        'Not\x20authenticated\x20for\x20templates,\x20using\x20defaults',
        'currentSlotState',
        'cooldown_seconds',
        'VIDEO_TOO_LONG',
        '\x20cannot\x20be\x20empty',
        'RATE_LIMITING',
        'Deleting\x20clip...',
        'offsetHeight',
        'watermarkUpgradeBtn',
        '⚠️\x20User\x20not\x20authenticated\x20-\x20WebSocket\x20skipped',
        'change',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22notification-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-',
        'Clip\x20creation\x20failed:\x20',
        '\x20videos\x20(',
        'Compile\x20jaw-dropping\x20moments\x20and\x20plot\x20twists',
        'clearOldLibraryData',
        'selectedTemplate',
        'transition',
        'Template\x20\x22',
        'beforeend',
        'cancelTemplateSelection',
        'data-item-id',
        'ENABLED',
        'Failed\x20to\x20save\x20even\x20after\x20cleanup:',
        'QuotaExceededError',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20minute',
        'replace',
        'templateDesc',
        'Expires\x20in\x20',
        'MAX_CONSOLE_LOGS',
        '<i\x20class=\x22fas\x20fa-copy\x22></i>',
        'Unknown\x20error',
        'GENERATION_COOLDOWN',
        '✅\x20Watermark\x20initially\x20hidden\x20(toggle\x20off)',
        'clear',
        '❌\x20Authentication\x20verification\x20failed',
        'dataset',
        '.solis-close-btn',
        'processingSection',
        'createObjectURL',
        '[Auth]\x20Network\x20error,\x20allowing\x20guest\x20access:',
        'slots',
        'www.youtube.com',
        'featuresTabContainer',
        '✅\x20Download\x20completed:',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20animation:\x20slideUp\x200.3s\x20ease;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2080px;\x20margin-bottom:\x2016px;\x20animation:\x20popIn\x200.4s\x20cubic-bezier(0.34,\x201.56,\x200.64,\x201);\x22>✅</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2032px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x20font-weight:\x20700;\x22>Compilation\x20Ready!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2032px;\x22>Your\x20video\x20is\x20ready\x20to\x20edit\x20and\x20publish</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20document.getElementById(\x27clip-processing-modal\x27).remove();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.location.hash\x20=\x20\x27#/clips\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20onmouseover=\x22this.style.transform=\x27translateY(-2px);\x20this.style.boxShadow=\x270\x204px\x2012px\x20rgba(255,\x20107,\x2053,\x200.3)\x27\x22\x20onmouseout=\x22this.style.transform=\x27translateY(0)\x27;\x20this.style.boxShadow=\x27none\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📎\x20Open\x20Project\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20popIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0.3);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2070%\x20{\x20transform:\x20scale(1.1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20transform:\x20translateY(20px);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20translateY(0);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x22\x20alt=\x22Asset\x20Preview\x22\x20onerror=\x22this.src=\x27https://via.placeholder.com/1000x600?text=No+Image\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22card-action-btn\x20library-delete-btn\x22\x20title=\x22Delete\x20clip\x22\x20tabindex=\x220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x206h18\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M19\x206v14c0\x201-1\x202-2\x202H7c-1\x200-2-1-2-2V6\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x206V4c0-1\x201-2\x202-2h4c1\x200\x202\x201\x202\x202v2\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2210\x22\x20y1=\x2211\x22\x20x2=\x2210\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2214\x22\x20y1=\x2211\x22\x20x2=\x2214\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'style',
        'max',
        'dockInputInstantly',
        'Library\x20grid\x20click\x20detected\x20on:',
        'project_id',
        'currentTemplateForPreview',
        '/clips/start',
        'subscription',
        'Auto-polling\x20error:',
        '\x20\x20\x202.\x20Backend\x20sets\x20SameSite=Strict\x20on\x20auth\x20cookie',
        'spin\x200.6s\x20ease-in-out',
        'Expires\x20today',
        '15-30s',
        'pro-modal-styles',
        '📋\x20Opening\x20template\x20preview\x20for:\x20',
        'sidebarExpanded',
        'connectYouTubeButton',
        'getDate',
        'Authentication\x20failed.\x20Please\x20try\x20again.',
        '.template-card',
        'then',
        '❌\x20SECURITY:\x20Invalid\x20projectId\x20in\x20fetchAndUpdateDuration',
        '.activity-item',
        '📡\x20Library\x20auto-polling\x20started\x20(every\x205s\x20with\x20processing\x20card\x20validation)',
        '❌\x20Failed',
        'updateRecentActivity',
        'description',
        '✅\x20CSRF\x20token\x20initialized\x20successfully',
        'lastYouTubeProcessTime',
        'Invalid\x20URL\x20format:',
        'inline',
        'innerWidth',
        'fontSize',
        'message-row\x20',
        'Current\x20Plan',
        'saveProcessingItems',
        '.nav-item:not(.nav-collapse-toggle)',
        'closeProFeatureModal',
        'abort',
        'WHAT\x20IS\x20HAPPENING',
        'watermark_required',
        '/login.html',
        '.duration-text',
        'Processing...',
        'settingsPanel',
        'confirmDeleteBtn',
        'stopMonitoring',
        'DAILY_LIMIT_REACHED',
        '🧹\x20Clearing\x20',
        'clearProcessingItems',
        'innerHeight',
        'not-allowed',
        'card-content',
        '📤\x20Deleting\x20project\x20from\x20server:\x20',
        '\x20/\x20',
        'status',
        'data-processing-id',
        'Start\x20a\x20new\x20chat?\x20Current\x20chat\x20will\x20be\x20cleared.',
        'http://127.0.0.1:5500/api',
        'saveLibraryItems',
        '❌\x20Watermark\x20HIDDEN',
        'data-initialized',
        'Status\x20JSON\x20parse\x20error:',
        'onclick',
        'head',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22library-card\x22\x20data-id=\x22',
        '\x20character\x20limit',
        'Loading\x20video\x20info...',
        'progressCircle',
        'templateVideoPreview',
        '\x20tokens\x20remaining.\x20Running\x20low?\x20<a\x20href=\x22/premium.html\x22\x20style=\x22color:\x20#ff6b35;\x20font-weight:\x20700;\x20text-decoration:\x20underline;\x22>Upgrade\x20now</a>\x20for\x20unlimited\x20access!',
        'subscriptionCache',
        '✓\x20Loaded\x20',
        'confirmTemplateBtn',
        'Elements\x20found:',
        '\x22\x20from\x20this\x20YouTube\x20URL?\x0a\x0aURL:\x20',
        'startClipProcessingWithSlots\x20error:',
        'readyState',
        'showConfirmationButtons',
        'editor',
        'tab',
        'keypress',
        'documentElement',
        'analytics-locked',
        '\x22\x20title=\x22Delete\x20clip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x206h18\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M19\x206v14c0\x201-1\x202-2\x202H7c-1\x200-2-1-2-2V6\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x206V4c0-1\x201-2\x202-2h4c1\x200\x202\x201\x202\x202v2\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2210\x22\x20y1=\x2211\x22\x20x2=\x2210\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2214\x22\x20y1=\x2211\x22\x20x2=\x2214\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22card-title\x22>',
        'preventDefault',
        'previewVideoDuration',
        'rgba(255,\x20107,\x200,\x201)',
        'Create\x20a\x20fast-paced\x20gaming\x20montage\x20with\x20epic\x20plays\x20and\x20reactions',
        '.card-status',
        'Saved\x20successfully!',
        'slotNumber',
        'Please\x20enter\x20a\x20YouTube\x20URL\x20first',
        'collapsed',
        'unblurring',
        '1668159WnSSky',
        'Download\x20started!',
        '✅\x20Modal\x20elements\x20found,\x20showing\x20confirmation',
        'signal',
        'trim',
        'Cleared\x20all\x20processing\x20items',
        'getStatusIcon',
        'floor',
        'menu-open',
        'startsWith',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeInOverlay\x20{\x20to\x20{\x20opacity:\x201;\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20translateY(18px)\x20scale(0.97);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20translateY(0)\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20popIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0)\x20rotate(-15deg);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2060%\x20{\x20transform:\x20scale(1.1)\x20rotate(4deg);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2080%\x20{\x20transform:\x20scale(0.95)\x20rotate(-2deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1)\x20rotate(0deg);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeUpAnim\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20translateY(8px);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20translateY(0);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.3)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(8px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-backdrop-filter:\x20blur(8px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeInOverlay\x200.3s\x20ease\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2028px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20820px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2032px\x2080px\x20rgba(0,0,0,0.12),\x200\x200\x200\x201px\x20rgba(0,0,0,0.05);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(18px)\x20scale(0.97);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideUp\x200.45s\x20cubic-bezier(0.34,1.4,0.64,1)\x200.1s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x20440px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2052%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FDF6F3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2044px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x20-70px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20-70px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-50px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20-50px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20160px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20160px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-left-top\x20{\x20position:\x20relative;\x20z-index:\x201;\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-lock-wrap\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2064px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2064px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(255,106,61,0.12);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20popIn\x200.5s\x20cubic-bezier(0.34,1.56,0.64,1)\x200.4s\x20both;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Instrument\x20Serif\x27,\x20serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x20-0.4px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.55s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-subtitle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.65;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20270px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.63s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-template-preview\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.72s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-preview\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#F5F4F2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2090px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-pro\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20strong\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-locked-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(253,246,243,0.55);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2048%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2044px\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-close-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-close-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#F5F5F5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plans-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.3s\x20ease\x200.7s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-options\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.78s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201.5px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2013px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.18s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(3px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-shrink:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20.pro-plan-card-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20strong\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-price\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20.pro-plan-card-price\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-popular-tag\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200\x200\x206px\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-right-footer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.88s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Geist\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(255,106,61,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#e85c30;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x206px\x2020px\x20rgba(255,106,61,0.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn:active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20underline;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-underline-offset:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20a:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'elite',
        'Please\x20enter\x20a\x20valid\x20YouTube\x20URL\x20(youtube.com\x20or\x20youtu.be)',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'limit',
        'watermarkFreeNotice',
        'toString',
        'add',
        'libraryPollingInterval',
        'clipStatProcessing',
        'previewVideoFormat',
        'OK\x20WAIT',
        'spinner',
        'Video\x20is\x20too\x20long',
        'content',
        'generateTemplatePreviewHTML',
        'random',
        'DISABLED',
        'removeAttribute',
        'Invalid\x20project\x20ID\x20format',
        '✅\x20FOUND',
        'getFilledSlots',
        'Backend\x20metadata\x20fetch\x20failed,\x20using\x20fallback:',
        'emptyLibraryState',
        'Ranking\x20Compilation',
        'NO\x20WAY',
        'value',
        '\x20processing\x20item(s)',
        'clips-submenu',
        'no-store',
        'removeEventListener',
        'setAttribute',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22export-btn\x20library-download-btn\x22\x20data-project-id=\x22',
        'TEST:\x20This\x20is\x20a\x20test\x20video\x20title',
        'block',
        'timeout',
        '10303MnPvYU',
        'templates',
        'stopAllMonitoring',
        'show',
        'error_code',
        'OK\x20THIS\x20IS\x20INSANE',
        'replaceState',
        '✓\x20Saved\x20',
        '📋\x20Modal\x20displayed',
        'supportsSlotSystem',
        'splitscreenDivider',
        'processYouTubeUrl',
        'slotSystem',
        '\x20\x20previewVideoFormat:',
        'current_video_count',
        'csrf_token',
        'Please\x20select\x20a\x20template',
        'filter',
        'message',
        '\x20processing\x20items',
        '/auth/youtube',
        'userSettingsBtn',
        'insertAdjacentHTML',
        'Compile\x20your\x20best\x20commentary\x20moments\x20into\x20shareable\x20shorts',
        'clipPreviewContainer',
        '✅\x20OK',
        'undefined',
        '⚠️\x20WebSocket\x20client\x20class\x20not\x20available',
        'clipsExpansionActions',
        'charAt',
        'entries',
        'setDate',
        'initializeFloatingCustomizer',
        'log',
        'storageTotalBadge',
        'flex',
        'data-id',
        'template:',
        'Sign\x20in\x20to\x20continue',
        'setupWebSocketHandlers',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-',
        'clip-confirm-modal',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-item\x22\x20data-id=\x22',
        'scrollHeight',
        '⚠️\x20Could\x20not\x20verify\x20session.\x20Continuing\x20in\x20guest\x20mode.',
        'tier',
        'Authentication\x20failed:\x20',
        'apply',
        'processing',
        'messageAdded',
        'https:',
        '❌\x20SECURITY:\x20Attempted\x20path\x20traversal\x20in\x20template.id:',
        'pathname',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22library-card\x20processing-card\x22\x20data-processing-id=\x22',
        'Create\x20a\x20tutorial\x20snippet\x20series\x20from\x20your\x20longer\x20videos',
        '❌\x20Watermark-check\x20API\x20returned\x20non-ok\x20status:',
        'clipTimeLeft',
        'stopLibraryPolling',
        'keys',
        'padStart',
        'shuffleIdeasBtn',
        'round',
        'background',
        'minecraft_1',
        'Warning:\x20Failed\x20to\x20delete\x20files\x20on\x20server',
        'dividerHandle',
        'plan_type',
        '⚠️\x20nameEl\x20not\x20found',
        '⚠️\x20Invalid\x20progress\x20value\x20received:\x20',
        '_eventControllers',
        'is_generating',
        'deleteAllClipsBtn',
        'checked',
        'expanded',
        '✅\x20Clip\x20deleted\x20successfully',
        'isValidYouTubeUrl',
        'showProFeatureModal',
        'get',
        'create',
        'opacity',
        'splice',
        'getWatermarkState',
        'querySelectorAll',
        '.copy-btn',
        '\x20\x20✅\x20Updated\x20template\x20name',
        'Missing\x20projectId\x20or\x20clipsStudio:',
        'loadAnalyticsData',
        'closeSettings',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove()\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'processingList',
        'loadStorageInfo',
        'light',
        'Failed\x20to\x20fetch\x20subscription\x20info,\x20status:',
        '[data-tab=\x22library\x22]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove()\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'templatePreviewModal',
        '\x20\x20previewVideoDuration:',
        '\x20day',
        'Status\x20poll\x20error:',
        'downloadClip',
        'closeTemplatePreviewModal',
        '.settings-option',
        'deleteConfirmationText',
        'DELETE',
        'upgradeSettingsBtn',
        'customizer',
        'warning',
        'generateClipWithSlotSystem',
        'clips-toggle',
        'match',
        '\x20\x20✅\x20Updated\x20format',
        'Download\x20failed:\x20',
        'storageBadge',
        'loadEditorData',
        '3776032QdyShr',
        '.template-preview-sidebar',
        '❌\x20NOT\x20FOUND',
        '26px',
        'visibilitychange',
        '.watermark-toggle-bg',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Thumbnail\x20with\x20video\x20icon\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-thumbnail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polygon\x20points=\x2223\x207\x2016\x2012\x2023\x2017\x2023\x207\x22></polygon>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x221\x22\x20y=\x225\x22\x20width=\x2215\x22\x20height=\x2214\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Progressive\x20circular\x20loader\x20(only\x20show\x20if\x20processing)\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'analyticsLockOverlay',
        'data:',
        'alt',
        'YouTube\x20Shorts',
        'number',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'display',
        '❌\x20YouTube\x20connection\x20error:',
        'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;',
        '📌\x20watermark_required\x20is\x20TRUE\x20-\x20showing\x20upgrade\x20button\x20in\x20controls',
        'ctrlKey',
        ')\x22>View</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        'removeItem',
        '.solis-watermark',
        '1970-01-01',
        'pending',
        'type',
        '❌\x20SECURITY:\x20Invalid\x20projectId\x20format\x20rejected:\x20',
        '.profile-notif-wrapper',
        'Video\x20too\x20long\x20detected\x20at\x20URL\x20input:',
        'string',
        'handleSubscriptionExpiration',
        'target',
        'contains',
        'getTimeAgo',
        'currentTab',
        'YESSS',
        '0.85em',
        '403',
        'Enter',
        'highlighted',
        '📊\x20Updating\x20storage\x20badge\x20from\x20backend',
        'Paste\x20a\x20YouTube\x20URL\x20to\x20see\x20video\x20details',
        'testTemplatePreview',
        'free',
        '3755171jOXncn',
        '⚠️\x20Could\x20not\x20load\x20tier\x20info',
        '🔍\x20Watermark\x20check\x20response:',
        '⚠️\x20Watermark\x20toggle\x20checkbox\x20NOT\x20found\x20in\x20preview!',
        'plusFeaturesBtn',
        'openVideoTooLongModal',
        '✅\x20WebSocket\x20client\x20initialized\x20with\x20httpOnly\x20auth',
        'transitionDelay',
        '3px',
        'needMoreUpgradeText',
        '[data-loading-id=\x22',
        'innerHTML',
        'userProfile',
        'clipConfirmAccept',
        '.notification',
        'Download\x20button\x20clicked,\x20projectId:',
        '✓\x20Got\x20OAuth\x20URL\x20from\x20backend',
        'youtube.com',
        '[Auth]\x20User\x20not\x20authenticated,\x20showing\x20guest\x20UI',
        '.settings-option\x20.option-name',
        'video_limit',
        '[Auth]\x20Unexpected\x20error\x20during\x20initialization:',
        '.card-title',
        'storage_limit_gb',
        'Error\x20loading\x20YouTube\x20subtitles:',
        ',height=',
        'is-generating',
        '0\x2075.36',
        'max:',
        'addEventListener',
        'slice',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>❌</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Error</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>',
        '.input-container',
        '.settings-option\x20.option-description',
        '~3m\x2020s',
        'Create\x20a\x20highlight\x20reel\x20of\x20epic\x20fails\x20and\x20funny\x20moments',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20relative;\x20width:\x20100%;\x20height:\x20100%;\x20background:\x20#3a3a3a;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'solisAIWatermarkEnabled',
        '\x20exceeds\x20',
        'processing_error',
        'Clip',
        'clearChatHistoryBtn',
        'getAttribute',
        'HTTP\x20',
        '<em>$1</em>',
        'showSlotSystemInfo',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'unshift',
        'toggleUrlButtonLoading',
        'watermarkToggle',
        '#/clips',
        'fetchVideoMetadata',
        'open',
        '.library-download-btn',
        'loadLibraryItems',
        'currentTier',
        'duration_minutes',
        '.token-count',
        '⚠️\x20AT\x20LIMIT',
        'An\x20error\x20occurred',
        '\x20\x20✅\x20Updated\x20duration',
        'toLocaleDateString',
        '.clips-submenu',
        'include',
        '❌\x20SECURITY:\x20Invalid\x20itemId\x20for\x20delete:\x20',
        'success',
        'newClipBtn',
        'Error\x20in\x20fetchVideoMetadata:',
        'currentTierExpiry',
        '\x20completed,\x20moving\x20to\x20library...',
        'Make\x20a\x20seasonal/holiday\x20themed\x20clip\x20collection',
        'Split\x20Screen',
        'ranked_compilation',
        'GB\x20storage',
        'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;',
        'upgradeModal',
        'menuSettings',
        'getItem',
        'Loading...',
        'formatStatus',
        '/clips/status/',
        '<i\x20class=\x22fas\x20fa-arrow-right\x22></i>',
        'div',
        'visible',
        'tagName',
        'message\x20',
        'libraryGrid',
        'Selected:\x20',
        'isMonitoring',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-time\x22>',
        'copied',
        'validateItemId',
        'visibilitychange\x20handler\x20error',
        'initialized',
        'youtubeUrlInput',
        'attachLibraryCardListeners',
        'startLibraryPolling',
        'Failed\x20to\x20fetch\x20subscription\x20info',
        '50zgstIl',
        'youtu.be',
        'userConnected',
        '❌\x20Error:\x20',
        'Error:\x20Delete\x20modal\x20not\x20available',
        'plan_name',
        'storage_info',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>⏱️</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Processing\x20Timeout</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>Your\x20compilation\x20is\x20still\x20being\x20processed.\x20Check\x20back\x20in\x20a\x20moment.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove();\x20window.location.hash\x20=\x20\x27#/clips\x27\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>View\x20in\x20Clips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'setItem',
        '.option-description',
        'Rate\x20limit\x20reached.\x20Please\x20try\x20again\x20later.',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-preview\x22>',
        'Available:',
        'library',
        '\x22\x20not\x20found\x20in\x20this.templates',
        'appendChild',
        'allowed',
        'clipStatRendering',
        'max_duration_minutes',
        'Lifetime',
        'subscription_end_date',
        'email',
        '\x0a\x0a🎯\x20Using\x20Slot\x20System:\x20New\x20clips\x20will\x20fill\x20from\x20slot\x205\x20upward',
        'data-project-id',
        '✗\x20YouTube\x20connection\x20failed:\x20',
        'hidden',
        'HAHAHAHA',
        '🔍\x20controlHTML\x20length:',
        '997548WMAvJf',
        'Clip\x20compilation\x20error:',
        '[data-processing-id=\x22',
        'aiPromptInput',
        '✅\x20Watermark\x20toggle\x20found\x20in\x20preview,\x20adding\x20event\x20listeners',
        '\x22\x20not\x20found',
        '✓\x20Video\x20too\x20long\x20detected\x20(pattern\x201):',
        'http:',
        'YouTube\x20URL\x20validated.\x20Please\x20select\x20a\x20template.',
        '⚠️\x20Popup\x20blocked,\x20falling\x20back\x20to\x20redirect',
        'setupEventListeners():\x20darkModeSettingsToggle\x20is\x20not\x20an\x20input\x20checkbox.\x20Dark\x20mode\x20functionality\x20may\x20be\x20impaired.',
        '🧹\x20Removing\x20stale\x20processing\x20item\x20(',
        '\x22\x20not\x20found.\x20Available:\x20',
        '\x20by\x20user',
        'Copied\x20to\x20clipboard!',
        'Retrying\x20processing...',
        'isArray',
        'join',
        'blob',
        'sort',
        '/youtube/get-metadata/',
        'animate-down',
        'projectId',
        'textContent',
        'confirmTemplateSelection',
        'appContainer',
        'clipsProcessing',
        'favorites',
        'solisWorkspacePanel',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-message\x22>',
        '\x20active\x20items\x20remaining',
        'rendering',
        'notificationMessage',
        '#888',
        'Signed\x20out\x20successfully',
        'Failed\x20to\x20start\x20processing:\x20',
        'color',
        'createFirstClipBtn',
        'aiResponseArea',
        '\x20must\x20be\x20a\x20string',
        'fetchTemplatePreview',
        'previewTemplateDescription',
        'pointer',
        '\x20videos/day,\x20',
        'startMonitoring',
        '📍\x20Item\x20found:',
        'subtitles',
        'prime',
        'Has\x20watermark\x20element:',
        'Auto-refresh\x20library\x20failed:',
        'TEST:\x20Ranking\x20Moments',
        'outerHTML',
        'loadYouTubeSubtitles',
        'daily',
        'Chat\x20history\x20cleared',
        'deleteConfirmationModal',
        'savedResults',
        '/dashboard.html',
        'dashboardGrid',
        'You\x20can\x20generate\x20another\x20video\x20',
        'fetchAndUpdateDuration',
        'currentTarget',
        '\x20minutes.\x20Your\x20video\x20is\x20',
        'Your\x20subscription\x20has\x20expired.\x20You\x20are\x20now\x20on\x20the\x20Free\x20plan.',
        'isYouTubeShort',
        'click',
        'Subscription\x20Status',
        'switchTab',
        'Error\x20loading\x20storage\x20info:',
        'plan',
        'Make\x20a\x20\x22Day\x20in\x20my\x20life\x22\x20quick\x20clips\x20compilation',
        '<i\x20class=\x22fas\x20fa-check\x22></i>',
        'openEditor',
        'templatesSection',
        'basic',
        '📝\x20Sending\x20customizations\x20with\x20video\x20generation:',
        'Cleaned\x20up\x20old\x20processing\x20items',
        'is-first-prompt',
        '⚠️\x20Missing\x20divider\x20elements',
        '📊\x20Library\x20storage:\x20',
        'setupEventListeners():\x20darkModeSettingsToggle\x20element\x20found.',
        'now',
        'Error\x20checking\x20video\x20duration:',
        '.nav-item',
        'find',
        'false',
        'can_generate',
        'setDefaultTemplates',
        'clipsLibrary',
        ';\x20transition:\x20opacity\x200.4s\x20ease;\x22></div>',
        'Failed\x20to\x20load\x20gameplay\x20clips\x20from\x20backend',
        'XSRF-TOKEN=',
        'Sign\x20in?',
        'Template',
        '66HQNmFX',
        'Pattern\x201\x20match:',
        'cookie',
        '\x20from\x20YouTube',
        'info',
        'initializeWebSocket',
        'storage_limit_reached',
        '🔄\x20Confirm\x20button\x20clicked\x20for\x20item:\x20',
        'validateProjectId',
        'clipProcessing',
        'loadLibraryItemsFromStorage',
        'userEmail',
        '62mVnpoE',
        'Account\x20Settings',
        '❌\x20Error\x20checking\x20YouTube\x20connection:',
        'Clip\x20added\x20to\x20Slot\x20',
        'map',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20all\x20chat\x20history?\x20This\x20action\x20cannot\x20be\x20undone.',
        'content-disposition',
        '✓\x20Video\x20too\x20long\x20detected\x20(fallback):',
        '401',
        'useSlotSystem',
        '</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22pro-subtitle\x22>',
        '❌\x20SECURITY:\x20Invalid\x20projectId\x20for\x20download:\x20',
        'splitscreen',
        'waiting',
        'www.youtu.be',
        'firstChild',
        'filterLibrary',
        'test',
        '🗄️\x20Removing\x20from\x20local\x20arrays',
        'stringify',
        'Create\x20a\x20speed\x20painting\x20or\x20creation\x20process\x20video',
        '/api/gameplay/available',
        'DOMContentLoaded',
        '✅\x20Templates\x20loaded:',
        'cooldown_hours',
        'check',
        'slot_number',
        'generationProgressText',
        '✅\x20Template\x20name\x20set\x20to:',
        'opacity\x200.25s\x20ease',
        'Error\x20checking\x20subscription\x20expiration:',
        'mouseenter',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeIn\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20var(--surface);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20420px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideUp\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2020px\x2060px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20transform:\x20translateY(20px);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20translateY(0);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-header\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--text);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-content\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2012px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-url\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20107,\x2053,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-break:\x20break-all;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-actions\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-reject\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-reject:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-accept\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-accept:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(255,\x20107,\x2053,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-dialog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2020px;\x22>🎬</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Create\x20Clip\x20Compilation</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Ready\x20to\x20create\x20a\x20clip\x20compilation\x20from\x20your\x20YouTube\x20video?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-url\x22\x20id=\x22urlDisplay\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2012px;\x20font-size:\x2012px;\x20opacity:\x200.7;\x22>This\x20may\x20take\x20a\x20few\x20minutes.\x20You\x20can\x20monitor\x20progress\x20in\x20the\x20Processing\x20tab.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22clip-btn\x20clip-btn-reject\x22\x20id=\x22clipConfirmCancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✕\x20Cancel\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22clip-btn\x20clip-btn-accept\x22\x20id=\x22clipConfirmAccept\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✓\x20Create\x20Compilation\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        'history',
        'plan_video_limit',
        '.user-avatar',
        'borderColor',
        'Make\x20a\x20\x22Top\x2010\x20moments\x22\x20video\x20from\x20your\x20content',
        '❌\x20showGameplayPanel\x20not\x20available',
        'clientY',
        'pro-modal-overlay',
        '.badge',
        '✅\x20Storage\x20display\x20updated\x20with\x20fresh\x20backend\x20data',
        'Library\x20refreshed',
        '\x20hour',
        'completed',
        '.input-section',
        '/clips/download/',
        'ok:',
        'registerTask',
        'deleteClip',
        '.dashboard-charts',
        'error',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-percentage\x22>',
        'clipStatDownload',
        '⚠️\x20DEPRECATED:\x20getHeaders()\x20called\x20-\x20use\x20getAuthHeaders()\x20instead\x20for\x20CSRF\x20protection',
        'Please\x20log\x20in\x20first\x20to\x20connect\x20YouTube',
        'auth_url',
        'VIDEO_LIMIT_REACHED',
        'A\x20video\x20is\x20already\x20being\x20generated.\x20Please\x20wait\x20for\x20it\x20to\x20complete\x20before\x20starting\x20another\x20one.',
        'Processing\x20error\x20detected:',
        'data',
        '#4F46E5',
        'button',
        'question',
        'catch',
        'user',
        'viewAllActivityBtn',
        'removeChild',
        'href',
        'backgroundColor',
        'Storage\x20quota\x20exceeded\x20-\x20clearing\x20old\x20data',
        'Ready',
        'GET',
        '_unlockTimer',
        'Create\x20a\x20reaction\x20compilation\x20video',
        'libraryItems',
        '\x20\x20\x203.\x20Backend\x20validates\x20CSRF\x20token\x20on\x20state-changing\x20requests',
        '.user-name',
        'json',
        'updateLibraryView',
        'I\x20CANT',
        'setTheme():\x20Applying\x20theme:',
        'addWatermark',
        '.clips-tab',
        'getSlot',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-video-placeholder\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20template\x20selected</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'saved',
        'startClipProcessingWithSlots',
        '\x20ago',
        'info-group',
        'activityList',
        'Loading\x20gameplay\x20clips...',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-video-placeholder\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20loading\x20preview</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'NOTIFICATION_DURATION_MS',
        'Starting\x20download...',
        '#featuresTabContainer',
        'classList',
        'safeAddEventListener',
        '✅\x20Pro\x20feature\x20modal\x20shown\x20for:',
        '.option-name',
        'cancelTemplateBtn',
        'processUrlBtn',
        'default',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-status\x20',
        '✗\x20Authentication\x20error:',
        '🔄\x20Updating\x20views\x20and\x20saving',
        '🧪\x20TEMPLATE\x20PREVIEW\x20TEST:',
        'youtube_connected',
        'Saved\x20',
        '<p>No\x20saved\x20items.</p>',
        '❌\x20Error\x20loading\x20tier\x20info:',
        'mousemove',
        'origin',
        '❌\x20Item\x20not\x20found:\x20',
        '[Auth]\x20Token\x20is\x20invalid,\x20redirecting\x20to\x20login\x20in\x202\x20seconds',
        'exclamation',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'rgba(255,\x20107,\x200,\x200.8)',
        'generationProgressWrapper',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-panel-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-left-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-lock-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2228\x22\x20height=\x2228\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x2010\x200v4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22pro-title\x22>',
        'set',
        'No\x20subs',
        'rotated',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22viewSavedItem(',
        'darkModeSettingsToggle\x20change\x20event\x20fired.\x20New\x20theme:',
        'template_name',
        'forEach',
        'deleteProcessingItem',
        '\x20item:\x20',
        'Failed\x20-\x20',
        'template',
        '\x20Plan\x20-\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Info\x20section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-name\x22>',
        'processingItems',
        'hash',
        '.pro-plan-card',
        'search',
        '🔒\x20Blocked\x20postMessage\x20from\x20untrusted\x20origin:',
        'cancelProcessing',
        'getElementById',
        '\x20(Slot\x20',
        '/clips/project/',
        '✅\x20Watermarked\x20HTML\x20set',
        'storageUsedBadge',
        'templatePreviewLoading',
        'moveToLibrary',
        'Please\x20select\x20a\x20template\x20first',
        'keydown',
        'renderTemplatePreview',
        'unauthorized',
        'No\x20authorization\x20URL\x20received\x20from\x20server',
        'modal-open',
        '2px',
        'plan_expires_at',
        'isSlotSystem',
        '0.5',
        'urlButtonLockeduntil',
        'mouseleave',
        '📡\x20Watermark-check\x20response\x20status:',
        'card-footer',
        'Section',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '📊\x20Progress:\x20',
        '/auth/csrf-token',
        '\x20show',
        'dark',
        '~60s',
        'Server\x20error:\x20',
        'totalClips',
        '134370jeeEvW',
        '[Auth]\x20Verification\x20error:',
        'loadVideoPreviewWithTemplate',
        'selected',
        'Split\x20Screen\x20is\x20only\x20available\x20on\x20paid\x20plans.\x20Upgrade\x20to\x20unlock\x20it',
        'last_video_date',
        'Failed\x20to\x20save\x20processing\x20items:',
        'visibility',
        '1em',
        'stopPropagation',
        'init',
        'Video\x20+\x20Gameplay\x20stacked',
        'some',
        '❌\x20Download\x20failed,\x20status:',
        'chatHistory',
        'auth_token',
        '🔍\x20controlHTML\x20includes\x20toggle:',
        'loadProcessingItems',
        'MODAL_TRANSITION_MS',
        ',left=',
        'Failed\x20to\x20load\x20library\x20items:',
        'clearOldProcessingData',
        'deleteProjectFromServer',
        '-message-row',
        '%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'card-title',
        'm\x20for\x20your\x20plan.',
        'feature-modal',
        'Error\x20in\x20fetchTemplatePreview:',
        'title',
        'If\x20you\x20see\x20the\x20TEST\x20values\x20in\x20the\x20template\x20preview,\x20the\x20elements\x20work!',
        'POGGGG',
        'in\x20',
        '#plusFeaturesBtn',
        '✅\x20Video\x20',
        'remaining_seconds',
        'theme',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22message-action\x20copy-btn\x22\x20title=\x22Copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.75\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20class=\x22lucide\x20lucide-copy-icon\x20lucide-copy\x22><rect\x20width=\x2214\x22\x20height=\x2214\x22\x20x=\x228\x22\x20y=\x228\x22\x20rx=\x222\x22\x20ry=\x222\x22/><path\x20d=\x22M4\x2016c-1.1\x200-2-.9-2-2V4c0-1.1.9-2\x202-2h10c1.1\x200\x202\x20.9\x202\x202\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        '\x20(status:\x20',
        'Cannot\x20delete\x20items\x20while\x20processing.\x20Wait\x20for\x20completion\x20or\x20cancel\x20first.',
        '✗\x20Failed\x20to\x20initiate\x20YouTube\x20connection:\x20',
        'animate-up',
        'currentUser',
        '[Auth]\x20Initialization\x20started',
        'Free',
        'URL',
        'watermarkNotice',
        'name',
        'sidebarActiveIndex',
        'display:\x20flex\x20!important;\x20visibility:\x20visible\x20!important;\x20opacity:\x201\x20!important;\x20pointer-events:\x20all\x20!important;\x20z-index:\x201000\x20!important;',
        'remove',
        'clipProgressFill',
        'first-prompt',
        'SHEEEESH',
        '-message',
        'Please\x20wait\x20a\x20moment\x20before\x20trying\x20again',
        'thumbnail_url',
        'showTemplateConfirmation',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:block;margin-top:2px;font-size:11px;color:#AAA\x22>',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '/auth/subscription?t=',
        '✅\x20YouTube\x20connected\x20successfully!',
        'Download\x20failed\x20with\x20status\x20',
        'YOUTUBE_PROCESS_MIN_MS',
        'chat',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2\x2021a8\x208\x200\x200\x201\x2011.873-7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2210\x22\x20cy=\x228\x22\x20r=\x225\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m17\x2017\x205\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m22\x2017-5\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'libraryFilter',
        '\x20\x20previewTemplateDescription:',
        'disabled',
        'renderFinalBtn',
        'getSlots',
        '\x20deleted\x20successfully',
        'push',
        'playAnimation',
        'picture',
        'borderWidth',
        'valid',
        'addProcessingItem',
        'closest',
        'watermarkToggleLabel',
        'currentAIPrompt',
        'Please\x20enter\x20a\x20YouTube\x20URL',
        'invalid',
        'subtitle',
        '❌\x20Download\x20error:',
        '🚫\x20Modal\x20closed\x20by\x20backdrop\x20click',
        'Pattern\x203\x20match\x20(keywords\x20found),\x20trying\x20number\x20extraction...',
        'Failed\x20to\x20initialize\x20Clips\x20Studio:',
        'selectTemplate',
        '.pro-modal-overlay',
        'thumbnailUrl',
        '✅\x20Found\x20element\x20with\x20id:\x20',
        'This\x20is\x20a\x20premium\x20feature.\x20Please\x20upgrade\x20your\x20plan.',
        'writeText',
        'createElement',
        '🔍\x20confirmTemplateUse:',
        'Expired',
        'startSmartMonitoring',
        '🧹\x20Backend\x20check\x20failed\x20for\x20',
        ')\x20-\x20',
        'STOP\x20STOP',
        'length',
        '⚠️\x20Error\x20validating\x20',
        'renderLoaderParts',
        'src',
        'stylesheet',
        'renderFinalVideo',
        'http',
        'input',
        'BRUH',
        'Delete\x20error\x20(sanitized\x20for\x20user):',
        'Make\x20a\x2030-second\x20motivational\x20workout\x20compilation\x20with\x20trending\x20music',
        'strokeDasharray',
        'X-CSRF-Token',
        'clearSlot',
        'FloatingCustomizeBar',
        'key',
        'metaKey',
        'mouseup',
        'location',
        'duration',
        '.clips-section',
        'YOOO',
        '❌\x20Error\x20loading\x20gameplay\x20clips:',
        'duration_formatted',
        'body',
        '🔄\x20OAuth\x20window\x20closed,\x20verifying\x20connection...',
        'Failed\x20to\x20copy:',
        '🧹\x20Polling\x20cleanup:\x20',
        '\x22\x20alt=\x22Asset\x20Preview\x22\x20onerror=\x22this.src=\x27https://via.placeholder.com/1000x600?text=No+Image\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22card-action-btn\x20library-delete-btn\x22\x20data-item-id=\x22',
        'userDisconnected',
        'collectCustomizations',
        'retryProcessing',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solis-watermark\x22\x20style=\x22position:\x20absolute;\x20bottom:\x2012px;\x20right:\x2012px;\x20z-index:\x20100;\x20pointer-events:\x20none;\x20display:\x20flex;\x20flex-direction:\x20column;\x20align-items:\x20flex-end;\x20color:\x20#ffffff;\x20user-select:\x20none;\x20filter:\x20drop-shadow(0px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.5));\x20font-family:\x20\x27Plus\x20Jakarta\x20Sans\x27,\x20-apple-system,\x20BlinkMacSystemFont,\x20\x27Segoe\x20UI\x27,\x20sans-serif;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x2028px;\x20height:\x2028px;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20flex-shrink:\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20width=\x2228\x22\x20height=\x2228\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2212\x22\x20fill=\x22currentColor\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2244\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke-width=\x226\x22\x20transform=\x22rotate(45\x2050\x2050)\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2244\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke-width=\x226\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2015px;\x20font-weight:\x20800;\x20letter-spacing:\x20-0.02em;\x20text-transform:\x20uppercase;\x20line-height:\x201;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Solis\x20<span\x20style=\x22opacity:\x200.85;\x20font-weight:\x20700;\x22>AI</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '_hasClickListener',
        'height',
        'https://via.placeholder.com/1000x600?text=No+Image',
        'ranking',
        '...)',
        '#ff4444',
        '.pro-fine-print\x20a',
        '562968pgoVNV',
        'TOO\x20GOOD',
        'Put\x20together\x20viral\x20dance\x20clips\x20from\x20your\x20latest\x20YouTube\x20video',
        '🎮\x20Gameplay\x20selector\x20clicked!',
        '.template-preview-sheet',
        'oldUpdateProcessingView_old',
        'Clip\x20created\x20successfully!',
        '⏳\x20Processing\x20',
        '.nav-item[data-target=\x22clips\x22]',
        'slotSystemInfo',
        'durationErrorMessage',
        '🎨\x20renderTemplatePreview\x20called\x20with\x20container:',
        'Error\x20initializing\x20CSRF\x20token:',
        ':\x0a\x0a',
        'getTime',
        'Filtered\x20by:\x20',
        'toggle',
        '✅\x20YouTube\x20authentication\x20successful!',
        'TikTok\x20/\x20Shorts',
        'clipConfirmCancel',
        'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',
        'inherit',
        'substring',
        '<strong>$1</strong>',
        'monitoringIntervals',
        'used',
        '15-60s',
        'customizations',
        'previewWatermarkToggle',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-pill\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22>Ready</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'Make\x20a\x20trending\x20audio\x20mashup\x20with\x20video\x20clips\x20synced\x20to\x20the\x20beat',
        'card-preview',
        'created_at'
    ];
    _0x2161 = function () {
        return _0x58814b;
    };
    return _0x2161();
}
function clearChat() {
    const _0x2bf88b = _0x1b33fa;
    if (!chatContainer)
        return;
    while (chatContainer[_0x2bf88b(0x292)]) {
        chatContainer['removeChild'](chatContainer['firstChild']);
    }
    welcomeCard && (chatContainer['appendChild'](welcomeCard), welcomeCard[_0x2bf88b(0x2e4)][_0x2bf88b(0x35f)](_0x2bf88b(0x215)));
    uploadedFiles = [];
    const _0x127c02 = document['getElementById'](_0x2bf88b(0x41f));
    _0x127c02 && (_0x127c02[_0x2bf88b(0x1a5)] = '', _0x127c02[_0x2bf88b(0x2e4)][_0x2bf88b(0x35f)](_0x2bf88b(0x3fd)));
    promptCount = 0x0;
    const _0x4ec6a8 = document[_0x2bf88b(0x44d)](_0x2bf88b(0x2b1)), _0x371d82 = _0x4ec6a8 ? _0x4ec6a8[_0x2bf88b(0x44d)](_0x2bf88b(0x1ba)) : null;
    _0x371d82 && _0x371d82[_0x2bf88b(0x2e4)][_0x2bf88b(0xe1)]('first-prompt'), _0x4ec6a8 && _0x4ec6a8['classList']['add'](_0x2bf88b(0x265)), chatHistory = [], localStorage['removeItem'](_0x2bf88b(0x33b));
}
function openUpgradeModal() {
    const _0x620089 = _0x1b33fa;
    if (!upgradeModal)
        return;
    upgradeModal[_0x620089(0x2e4)]['add']('active');
}
function closeUpgradeModal() {
    const _0x27a586 = _0x1b33fa;
    if (!upgradeModal)
        return;
    upgradeModal['classList'][_0x27a586(0x35f)]('active');
}
function navigateTo(_0xe0d9a4) {
    const _0x44e30b = _0x1b33fa;
    navItems['forEach'](_0x92d8d3 => {
        const _0x76b24 = _0x162e;
        _0x92d8d3[_0x76b24(0x2e4)][_0x76b24(0x35f)](_0x76b24(0x3fd)), _0x92d8d3['dataset'][_0x76b24(0x18d)] === _0xe0d9a4 && _0x92d8d3[_0x76b24(0x2e4)][_0x76b24(0xe1)](_0x76b24(0x3fd));
    });
    switch (_0xe0d9a4) {
    case _0x44e30b(0x36d):
        if (promptCount === 0x0) {
            const _0x233e48 = document[_0x44e30b(0x44d)]('.input-section'), _0x24bc7f = _0x233e48 ? _0x233e48[_0x44e30b(0x44d)](_0x44e30b(0x1ba)) : null;
            _0x24bc7f && _0x24bc7f[_0x44e30b(0x2e4)][_0x44e30b(0xe1)]('first-prompt'), _0x233e48 && _0x233e48[_0x44e30b(0x2e4)][_0x44e30b(0xe1)](_0x44e30b(0x265));
        }
        break;
    case _0x44e30b(0x2a4):
        openHistory();
        break;
    case _0x44e30b(0x2da):
        openSaved();
        break;
    default:
        break;
    }
}
function updateTokenDisplay() {
    const _0x98ff95 = _0x1b33fa;
    tokenCount && (tokenCount[_0x98ff95(0x22f)] = tokens[_0x98ff95(0x411)]());
}
function showUpgradePrompt() {
    const _0x4a9493 = _0x1b33fa, _0x4d0b95 = _0x4a9493(0x42d) + tokens + _0x4a9493(0xb7);
    addMessageToChat('ai', _0x4d0b95);
}
function checkPremiumAccess() {
    const _0x23fa83 = _0x1b33fa;
    if (!currentUser)
        return showNotification('Please\x20sign\x20in\x20to\x20access\x20premium\x20features', _0x23fa83(0x2b7)), ![];
    if (currentUser[_0x23fa83(0x25d)] === _0x23fa83(0x199))
        return showNotification(_0x23fa83(0x389), _0x23fa83(0x2b7)), ![];
    return !![];
}
function loadSaved() {
    const _0x4eb72e = _0x1b33fa, _0x1a851a = document['getElementById']('savedList');
    if (!_0x1a851a)
        return;
    const _0x98a8c8 = JSON[_0x4eb72e(0x43b)](localStorage[_0x4eb72e(0x1e7)](_0x4eb72e(0x250)) || '[]');
    if (_0x98a8c8[_0x4eb72e(0x392)] === 0x0) {
        _0x1a851a['innerHTML'] = _0x4eb72e(0x2f1);
        return;
    }
    _0x1a851a[_0x4eb72e(0x1a5)] = _0x98a8c8[_0x4eb72e(0x286)]((_0x4934f1, _0x197020) => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-type\x22>' + _0x4934f1[_0x4eb72e(0x187)] + _0x4eb72e(0x207) + _0x4934f1[_0x4eb72e(0xe8)][_0x4eb72e(0x3d0)](0x0, 0x64) + _0x4eb72e(0x3fc) + new Date(_0x4934f1['timestamp'])['toLocaleDateString']() + _0x4eb72e(0x2ff) + _0x197020 + _0x4eb72e(0x182))[_0x4eb72e(0x229)]('');
}
function viewSavedItem(_0x192ef3) {
    const _0x615e39 = _0x1b33fa, _0x22620f = JSON[_0x615e39(0x43b)](localStorage[_0x615e39(0x1e7)]('savedResults') || '[]'), _0x15b95e = _0x22620f[_0x192ef3];
    _0x15b95e && alert(_0x615e39(0x2f0) + _0x15b95e['type'] + _0x615e39(0x3c7) + _0x15b95e[_0x615e39(0xe8)]);
}
function showError(_0x185852, _0x58d509) {
    const _0x14d5c1 = _0x1b33fa, _0x3bbf85 = document[_0x14d5c1(0x30f)](_0x185852);
    if (!_0x3bbf85)
        return;
    _0x3bbf85[_0x14d5c1(0x48c)][_0x14d5c1(0x17d)] = _0x14d5c1(0xfc), _0x3bbf85[_0x14d5c1(0x1a5)] = '';
    const _0x5217d9 = document[_0x14d5c1(0x38b)](_0x14d5c1(0x1ec));
    _0x5217d9[_0x14d5c1(0x40f)] = 'error-message', _0x5217d9[_0x14d5c1(0x22f)] = _0x58d509, _0x3bbf85[_0x14d5c1(0x20b)](_0x5217d9);
}
function copyToClipboard(_0x4d336e) {
    navigator['clipboard']['writeText'](_0x4d336e)['then'](() => {
        const _0x129b8e = _0x162e;
        showNotification(_0x129b8e(0x226), _0x129b8e(0x1db));
    });
}
function saveResult(_0x24986a, _0x54d252) {
    const _0x53c499 = _0x1b33fa, _0x5acf5a = JSON[_0x53c499(0x43b)](localStorage[_0x53c499(0x1e7)](_0x53c499(0x250)) || '[]');
    _0x5acf5a[_0x53c499(0x375)]({
        'type': _0x24986a,
        'content': _0x54d252,
        'timestamp': new Date()[_0x53c499(0x456)]()
    }), localStorage[_0x53c499(0x204)](_0x53c499(0x250), JSON[_0x53c499(0x296)](_0x5acf5a)), showNotification(_0x53c499(0xcb), _0x53c499(0x1db));
}
(function () {
    const _0x5d026b = _0x1b33fa, _0x7b55e1 = localStorage['getItem']('theme') || 'light';
    document[_0x5d026b(0xc3)][_0x5d026b(0xf9)]('data-theme', _0x7b55e1);
}()), window[_0x1b33fa(0x198)] = function () {
    const _0xad6076 = _0x1b33fa, _0x53082d = document[_0xad6076(0x30f)]('previewTemplateName'), _0x56c2ad = document[_0xad6076(0x30f)](_0xad6076(0x241)), _0x5f538f = document[_0xad6076(0x30f)](_0xad6076(0xc7)), _0x1d59d3 = document[_0xad6076(0x30f)](_0xad6076(0xe4));
    safeLog(_0xad6076(0x2ee)), safeLog('\x20\x20previewTemplateName:', _0x53082d ? _0xad6076(0xee) : _0xad6076(0x172)), safeLog(_0xad6076(0x370), _0x56c2ad ? _0xad6076(0xee) : '❌\x20NOT\x20FOUND'), safeLog(_0xad6076(0x15e), _0x5f538f ? _0xad6076(0xee) : _0xad6076(0x172)), safeLog(_0xad6076(0x10b), _0x1d59d3 ? '✅\x20FOUND' : _0xad6076(0x172)), _0x53082d && (_0x53082d[_0xad6076(0x22f)] = _0xad6076(0x24a), safeLog(_0xad6076(0x152))), _0x56c2ad && (_0x56c2ad[_0xad6076(0x22f)] = _0xad6076(0xfb), safeLog(_0xad6076(0x420))), _0x5f538f && (_0x5f538f[_0xad6076(0x22f)] = _0xad6076(0x1bc), safeLog(_0xad6076(0x1d6))), _0x1d59d3 && (_0x1d59d3[_0xad6076(0x22f)] = _0xad6076(0x17a), safeLog(_0xad6076(0x16c))), safeLog(_0xad6076(0x34b));
}, safeLog('✅\x20testTemplatePreview()\x20is\x20ready\x20-\x20run\x20it\x20in\x20console'), document[_0x1b33fa(0x1b7)](_0x1b33fa(0x299), () => {
    const _0xf5f008 = _0x1b33fa, _0x29405d = sessionStorage[_0xf5f008(0x1e7)](_0xf5f008(0x27f));
    if (_0x29405d)
        try {
            const _0xa3d1ad = JSON[_0xf5f008(0x43b)](_0x29405d);
            setTimeout(() => {
                const _0x33d374 = _0xf5f008;
                startClipCompilation(_0xa3d1ad[_0x33d374(0x418)]);
            }, 0x1f4);
        } catch (_0x3eccb6) {
            safeLog('Failed\x20to\x20restore\x20clip\x20processing:', _0x3eccb6), sessionStorage[_0xf5f008(0x183)](_0xf5f008(0x27f));
        }
    loadAvailableGameplayClips(), loadTierInfo(), typeof clipsStudio !== 'undefined' && clipsStudio && typeof clipsStudio['init'] === _0xf5f008(0x44e) ? (clipsStudio[_0xf5f008(0x337)](), typeof clipsStudio['setupWatermarkToggle'] === _0xf5f008(0x44e) && clipsStudio[_0xf5f008(0x3dc)]()) : init();
}), window[_0x1b33fa(0x14f)] = function () {
    const _0x357983 = _0x1b33fa, _0x57b40e = localStorage[_0x357983(0x1e7)](_0x357983(0x1bf));
    return _0x57b40e !== _0x357983(0x26d);
}, window[_0x1b33fa(0x3f0)] = function () {
    const _0x391025 = _0x1b33fa;
    return { 'add_watermark': window[_0x391025(0x14f)]() };
};