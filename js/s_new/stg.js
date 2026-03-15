document['addEventListener']('DOMContentLoaded', () => {
    const _0x116e01 = document['getElementById']('stgBackdrop'),
        _0x14dece = document['getElementById']('stgModal'),
        _0x173990 = document['getElementById']('stgClose'),
        _0x5be728 = document['getElementById']('stgUpgradeBtn'),
        _0x3fc47d = document['getElementById']('dropdownSettings'),
        _0x4a2494 = document['getElementById']('stgLogoutBtn');
    console['log']('✅\x20STG\x20Modal\x20initialized:', {
        'stgBackdrop': _0x116e01,
        'stgModal': _0x14dece,
        'stgClose': _0x173990,
        'dropdownSettingsLink': _0x3fc47d
    });
    _0x3fc47d && _0x3fc47d['addEventListener']('click', _0x7a1401 => {
        _0x7a1401['preventDefault']();
        const _0xba9710 = document['getElementById']('profileDropdown');
        if (_0xba9710)
            _0xba9710['classList']['remove']('open');
        _0x156f61();
    });
    _0x173990 && _0x173990['addEventListener']('click', _0x38aad7);
    _0x116e01 && _0x116e01['addEventListener']('click', _0x38aad7);
    _0x14dece && _0x14dece['addEventListener']('click', _0x4cc974 => {
        _0x4cc974['stopPropagation']();
    });
    _0x4a2494 && _0x4a2494['addEventListener']('click', _0x32ae40 => {
        _0x32ae40['preventDefault']();
        if (typeof handleSecureLogout === 'function')
            handleSecureLogout();
        else
            typeof logout === 'function' ? logout() : (console['warn']('No\x20logout\x20function\x20available'), window['location']['href'] = '/login.html');
    });

    function _0x156f61() {
        _0x116e01['classList']['add']('open'), _0x14dece['classList']['add']('open');
        const _0x5aec8f = document['getElementById']('navWrapper');
        _0x5aec8f && _0x5aec8f['classList']['add']('disabled'), _0x1707c8();
    }

    function _0x38aad7() {
        _0x116e01['classList']['remove']('open'), _0x14dece['classList']['remove']('open');
        const _0x51294c = document['getElementById']('navWrapper');
        _0x51294c && _0x51294c['classList']['remove']('disabled');
    }
    async function _0x1707c8() {
        let _0x421207 = null;
        try {
            window['currentUser'] && (_0x421207 = window['validateUserObject'](window['currentUser']));
            if (!_0x421207) {
                const _0xef48a9 = localStorage['getItem']('currentUser');
                if (_0xef48a9)
                    try {
                        const _0x377667 = JSON['parse'](_0xef48a9);
                        _0x421207 = window['validateUserObject'](_0x377667);
                    } catch (_0x401f46) {
                        console['error']('Failed\x20to\x20parse\x20localStorage\x20currentUser:', _0x401f46);
                    }
            }
        } catch (_0x4b5663) {
            console['error']('Error\x20loading\x20user\x20data:', _0x4b5663);
        }
        if (!_0x421207) {
            console['warn']('No\x20valid\x20user\x20data\x20for\x20settings\x20modal');
            return;
        }
        const _0x4e6dd5 = document['getElementById']('stgName'),
            _0x11b226 = document['getElementById']('stgUserEmail'),
            _0x3a5d1b = document['getElementById']('stgAvatar'),
            _0x33bc82 = document['getElementById']('stgEmailAddress');
        _0x4e6dd5 && (_0x4e6dd5['textContent'] = _0x421207['name'] || _0x421207['username'] || 'Guest\x20User');
        _0x11b226 && (_0x11b226['textContent'] = _0x421207['email'] || 'unknown@email.com');
        _0x33bc82 && (_0x33bc82['textContent'] = _0x421207['email'] || 'unknown@email.com');
        if (_0x3a5d1b) {
            const _0x3dd51f = _0x421207['picture'] || _0x421207['avatar'] || null;
            if (_0x3dd51f && window['isValidImageUrl'](_0x3dd51f)) {
                const _0x31bcdb = document['createElement']('img');
                _0x31bcdb['src'] = _0x3dd51f, _0x31bcdb['alt'] = 'Profile', _0x31bcdb['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;', _0x31bcdb['onerror'] = () => {
                    console['warn']('Failed\x20to\x20load\x20profile\x20image'), _0x3a5d1b['innerHTML'] = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>';
                }, _0x3a5d1b['innerHTML'] = '', _0x3a5d1b['appendChild'](_0x31bcdb);
            } else
                _0x3a5d1b['innerHTML'] = '<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22><path\x20d=\x22M20\x2021v-2a4\x204\x200\x200\x200-4-4H8a4\x204\x200\x200\x200-4\x204v2\x22></path><circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22></circle></svg>';
        }
        const _0x3669de = document['getElementById']('stgCurrentPlan'),
            _0x2d460c = document['getElementById']('stgRenewalDate'),
            _0x1ac574 = document['getElementById']('stgVideosUsed'),
            _0x58e21c = document['getElementById']('stgStorage');
        _0x3669de && (_0x3669de['textContent'] = 'Loading...');
        try {
            const _0x4a3bd4 = await fetch('/api/user/profile', {
                'method': 'GET',
                'credentials': 'include',
                'headers': window['secureHeaders'] ? window['secureHeaders']() : {
                    'Content-Type': 'application/json'
                }
            });
            if (_0x4a3bd4['ok']) {
                const _0x2f6e4b = await _0x4a3bd4['json']();
                console['log']('📋\x20Real\x20subscription\x20data\x20from\x20backend');
                if (!_0x2f6e4b || typeof _0x2f6e4b !== 'object' || !_0x2f6e4b['plan'] || typeof _0x2f6e4b['plan'] !== 'string')
                    throw new Error('Invalid\x20response\x20structure\x20from\x20backend');
                if (!_0x2f6e4b['plan'] || typeof _0x2f6e4b['plan'] !== 'string')
                    throw new Error('Invalid\x20plan\x20value\x20from\x20backend');
                const _0x5ca9a7 = _0x2f6e4b['plan']['toLowerCase']();
                if (!VALIDATION['ALLOWED_PLANS']['includes'](_0x5ca9a7))
                    throw new Error('Invalid\x20plan\x20value\x20from\x20backend');
                const _0x4118a0 = _0x5ca9a7,
                    _0x2967fb = _0x4118a0['charAt'](0x0)['toUpperCase']() + _0x4118a0['slice'](0x1),
                    _0xe11a8b = _0x4118a0 === 'free';
                _0x3669de && (_0x3669de['textContent'] = _0x2967fb, console['log']('✅\x20Updated\x20plan\x20from\x20backend:', _0x2967fb));
                _0x5be728 && (_0xe11a8b ? _0x5be728['classList']['remove']('hidden') : _0x5be728['classList']['add']('hidden'));
                let _0x5e9d98 = 0x1,
                    _0x101531 = 0.5;
                if (typeof _0x2f6e4b['videos_limit'] === 'number')
                    _0x5e9d98 = window['validateNumber'](_0x2f6e4b['videos_limit'], 0x1, VALIDATION['MAX_VIDEOS_LIMIT'], 0x1);
                else {
                    if (_0x4118a0 === 'basic')
                        _0x5e9d98 = 0x5;
                    else {
                        if (_0x4118a0 === 'prime')
                            _0x5e9d98 = 0xa;
                        else
                            _0x4118a0 === 'elite' && (_0x5e9d98 = 0x14);
                    }
                }
                if (typeof _0x2f6e4b['storage_limit'] === 'number')
                    _0x101531 = window['validateNumber'](_0x2f6e4b['storage_limit'] / (0x400 * 0x400 * 0x400), 0x1, VALIDATION['MAX_STORAGE_GB'], 0.5);
                else {
                    if (_0x4118a0 === 'basic')
                        _0x101531 = 0x2;
                    else {
                        if (_0x4118a0 === 'prime')
                            _0x101531 = 0xa;
                        else
                            _0x4118a0 === 'elite' && (_0x101531 = 0x64);
                    }
                }
                if (_0x1ac574) {
                    const _0x2b3b03 = window['validateNumber'](_0x2f6e4b['videos_used'], 0x0, VALIDATION['MAX_VIDEOS_LIMIT'], 0x0),
                        _0x4e5bce = Math['max'](0x0, _0x5e9d98 - _0x2b3b03);
                    _0x1ac574['innerHTML'] = '';
                    const _0xc8cca8 = document['createElement']('div');
                    _0xc8cca8['style']['cssText'] = 'display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;';
                    const _0x1649ee = document['createElement']('span');
                    _0x1649ee['textContent'] = _0x2b3b03 + '\x20/\x20' + _0x5e9d98;
                    const _0x4104b2 = document['createElement']('span');
                    _0x4104b2['style']['cssText'] = 'font-size:\x200.85em;\x20color:\x20#888;', _0x4104b2['textContent'] = '(' + _0x4e5bce + '\x20remaining\x20today)', _0xc8cca8['appendChild'](_0x1649ee), _0xc8cca8['appendChild'](_0x4104b2), _0x1ac574['appendChild'](_0xc8cca8), console['log']('✅\x20Updated\x20videos\x20used:', _0x2b3b03, '/', _0x5e9d98);
                }
                if (_0x58e21c) {
                    const _0x1df5ec = window['validateNumber'](_0x2f6e4b['storage_used'], 0x0, VALIDATION['MAX_STORAGE_GB'] * 0x400 * 0x400 * 0x400, 0x0),
                        _0x21591a = _0x1df5ec / (0x400 * 0x400 * 0x400);
                    _0x58e21c['textContent'] = _0x21591a['toFixed'](0x1) + '\x20GB\x20/\x20' + _0x101531 + '\x20GB', console['log']('✅\x20Updated\x20storage:', _0x21591a['toFixed'](0x1), '/', _0x101531);
                }
                if (_0x2d460c) {
                    if (_0x2f6e4b['subscription_end_date'] && typeof _0x2f6e4b['subscription_end_date'] === 'string') {
                        const _0x3dc084 = Date['parse'](_0x2f6e4b['subscription_end_date']);
                        if (isNaN(_0x3dc084))
                            console['warn']('Invalid\x20subscription\x20end\x20date\x20from\x20backend'), _0x2d460c['textContent'] = 'Date\x20unavailable';
                        else {
                            const _0x4f3bf7 = new Date(_0x3dc084),
                                _0x198f8d = new Date(),
                                _0x1fdfa4 = Math['ceil']((_0x4f3bf7 - _0x198f8d) / (0x3e8 * 0x3c * 0x3c * 0x18));
                            if (_0x1fdfa4 < 0x0)
                                _0x2d460c['textContent'] = 'Expired';
                            else {
                                if (_0x1fdfa4 === 0x0)
                                    _0x2d460c['textContent'] = 'Expires\x20today';
                                else
                                    _0x1fdfa4 === 0x1 ? _0x2d460c['textContent'] = 'Expires\x20tomorrow' : _0x2d460c['textContent'] = 'Expires\x20in\x20' + _0x1fdfa4 + '\x20days';
                            }
                        }
                    } else
                        _0x4118a0 !== 'free' ? _0x2d460c['textContent'] = 'Active\x20-\x20No\x20expiration' : _0x2d460c['textContent'] = 'No\x20active\x20subscription';
                }
            } else
                console['error']('❌\x20Failed\x20to\x20fetch\x20profile:', _0x4a3bd4['status']), _0x3669de && (_0x3669de['textContent'] = 'Error\x20loading');
        } catch (_0x5158cd) {
            console['error']('❌\x20Error\x20fetching\x20user\x20profile:', _0x5158cd), _0x3669de && (_0x3669de['textContent'] = 'Error\x20loading');
        }
        const _0x276814 = document['getElementById']('stgYouTubeStatus');
        if (_0x276814 && _0x421207['youtube_connected']) {
            const _0x79ca4e = document['createElement']('span');
            _0x79ca4e['style']['cssText'] = 'color:\x20#22c55e;\x20font-weight:\x20600;', _0x79ca4e['textContent'] = '✓\x20Connected', _0x276814['innerHTML'] = '', _0x276814['appendChild'](_0x79ca4e);
        } else
            _0x276814 && (_0x276814['textContent'] = 'Not\x20connected');
    }
    window['openSettingsModal'] = _0x156f61, window['closeSettingsModal'] = _0x38aad7, window['updateSettingsModal'] = _0x1707c8, document['addEventListener']('keydown', _0x5ec1e0 => {
        _0x5ec1e0['key'] === 'Escape' && _0x14dece?.['classList']['contains']('open') && _0x38aad7();
    });
});