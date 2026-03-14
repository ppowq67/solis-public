const _0x25434b = _0x31ac;
(function (_0x405434, _0x3ef99d) {
    const _0x4c5e27 = _0x31ac, _0x2e1047 = _0x405434();
    while (!![]) {
        try {
            const _0x57b592 = -parseInt(_0x4c5e27(0x142)) / 0x1 * (-parseInt(_0x4c5e27(0x144)) / 0x2) + parseInt(_0x4c5e27(0x19c)) / 0x3 * (parseInt(_0x4c5e27(0x19b)) / 0x4) + parseInt(_0x4c5e27(0x1a8)) / 0x5 + parseInt(_0x4c5e27(0x19e)) / 0x6 + parseInt(_0x4c5e27(0x179)) / 0x7 + parseInt(_0x4c5e27(0x168)) / 0x8 * (-parseInt(_0x4c5e27(0x16f)) / 0x9) + -parseInt(_0x4c5e27(0x18f)) / 0xa;
            if (_0x57b592 === _0x3ef99d)
                break;
            else
                _0x2e1047['push'](_0x2e1047['shift']());
        } catch (_0x21ebab) {
            _0x2e1047['push'](_0x2e1047['shift']());
        }
    }
}(_0x42c6, 0x41e4a), window['addEventListener']('load', () => {
    const _0x194ed0 = _0x31ac, _0x4a9610 = document[_0x194ed0(0x155)](_0x194ed0(0x161)), _0x148c47 = document[_0x194ed0(0x155)](_0x194ed0(0x16c)), _0x47fba7 = parseInt(localStorage[_0x194ed0(0x174)](_0x194ed0(0x19a)) || '0');
    _0x4a9610 && _0x148c47 && (_0x47fba7 === 0x0 ? (_0x4a9610[_0x194ed0(0x12f)]['add'](_0x194ed0(0x198)), _0x148c47['classList'][_0x194ed0(0x13a)]('hidden'), _0x4a9610[_0x194ed0(0x16d)]['cssText'] = 'display:\x20flex\x20!important;\x20visibility:\x20visible\x20!important;\x20opacity:\x201\x20!important;\x20pointer-events:\x20all\x20!important;\x20z-index:\x201000\x20!important;') : (_0x4a9610[_0x194ed0(0x12f)]['remove'](_0x194ed0(0x198)), _0x148c47[_0x194ed0(0x12f)]['add'](_0x194ed0(0x16a)), _0x4a9610['style'][_0x194ed0(0x17d)] = 'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;'));
}), window['handleDeleteAllClips'] = async function () {
    const _0x5bddf8 = _0x31ac, _0x47b6a4 = confirm(_0x5bddf8(0x137));
    if (!_0x47b6a4)
        return;
    const _0x372258 = confirm(_0x5bddf8(0x184));
    if (!_0x372258)
        return;
    try {
        if (window[_0x5bddf8(0x14c)] && window[_0x5bddf8(0x14c)][_0x5bddf8(0x150)] && window[_0x5bddf8(0x14c)]['libraryItems'][_0x5bddf8(0x195)] > 0x0) {
            const _0x502387 = window[_0x5bddf8(0x14c)][_0x5bddf8(0x150)][_0x5bddf8(0x195)];
            let _0xfb42f6 = 0x0;
            for (const _0x3ffff0 of window[_0x5bddf8(0x14c)][_0x5bddf8(0x150)]) {
                try {
                    await fetch(_0x5bddf8(0x181) + _0x3ffff0['id'], {
                        'method': 'DELETE',
                        'headers': { 'Authorization': _0x5bddf8(0x172) + (localStorage[_0x5bddf8(0x174)](_0x5bddf8(0x199)) || '') }
                    }), _0xfb42f6++;
                } catch (_0xf74472) {
                    console[_0x5bddf8(0x18c)](_0x5bddf8(0x1a4) + _0x3ffff0['id'] + ':', _0xf74472);
                }
            }
            window[_0x5bddf8(0x14c)]['libraryItems'] = [], window[_0x5bddf8(0x14c)][_0x5bddf8(0x164)](), window[_0x5bddf8(0x14c)][_0x5bddf8(0x14e)](), updateStorageBadgeDisplay(), window[_0x5bddf8(0x14c)][_0x5bddf8(0x173)]('✅\x20Deleted\x20' + _0xfb42f6 + '/' + _0x502387 + '\x20clips\x20successfully', _0x5bddf8(0x12c)), console['log']('✅\x20Successfully\x20deleted\x20' + _0xfb42f6 + _0x5bddf8(0x17f));
        } else
            window[_0x5bddf8(0x14c)][_0x5bddf8(0x173)]('No\x20clips\x20to\x20delete', _0x5bddf8(0x15f));
    } catch (_0x4fbe1c) {
        console[_0x5bddf8(0x18c)]('Error\x20deleting\x20all\x20clips:', _0x4fbe1c), window['clipsStudio'] && window[_0x5bddf8(0x14c)][_0x5bddf8(0x173)](_0x5bddf8(0x15e) + _0x4fbe1c[_0x5bddf8(0x18e)], _0x5bddf8(0x18c));
    }
}, window['updateStorageBadgeDisplay'] = async function () {
    const _0x315522 = _0x31ac;
    try {
        console[_0x315522(0x186)](_0x315522(0x148));
        const _0x52ae66 = await fetch('/api/auth/subscription', {
            'method': _0x315522(0x171),
            'credentials': _0x315522(0x1a5),
            'headers': { 'Content-Type': 'application/json' }
        });
        if (!_0x52ae66['ok'])
            throw new Error(_0x315522(0x1a3) + _0x52ae66[_0x315522(0x146)]);
        const _0x4c5cbf = await _0x52ae66[_0x315522(0x193)](), _0x13159a = _0x4c5cbf[_0x315522(0x170)];
        console[_0x315522(0x186)](_0x315522(0x17b), _0x13159a);
        const _0x42964a = document[_0x315522(0x167)](_0x315522(0x162)), _0x23fa14 = document[_0x315522(0x167)](_0x315522(0x18d)), _0x527253 = document['getElementById'](_0x315522(0x185)), _0x4b367b = document[_0x315522(0x167)](_0x315522(0x192)), _0x777099 = document['getElementById'](_0x315522(0x14b)), _0x440558 = document[_0x315522(0x167)](_0x315522(0x151));
        console[_0x315522(0x186)]('🔍\x20[Badge\x20Update]\x20DOM\x20Elements\x20check:', {
            'storageUsedBadge': !!_0x42964a,
            'storageTotalBadge': !!_0x23fa14,
            'storagePlanBadge': !!_0x527253,
            'storageBadge': !!_0x440558
        });
        const _0x5ea4d7 = _0x13159a[_0x315522(0x154)] || 0x0, _0x2d1589 = _0x13159a[_0x315522(0x135)] || 0x2, _0x2699e7 = _0x13159a[_0x315522(0x17e)] || _0x315522(0x16e), _0x20dcc8 = _0x5ea4d7 >= _0x2d1589;
        _0x42964a && (_0x42964a[_0x315522(0x191)] = _0x5ea4d7, _0x42964a[_0x315522(0x16d)][_0x315522(0x163)] = _0x20dcc8 ? _0x315522(0x180) : _0x315522(0x197)), _0x23fa14 && (_0x23fa14[_0x315522(0x191)] = _0x2d1589, _0x23fa14['style']['color'] = _0x20dcc8 ? _0x315522(0x180) : _0x315522(0x197)), _0x527253 && (_0x527253[_0x315522(0x191)] = _0x2699e7[_0x315522(0x13f)](0x0)[_0x315522(0x130)]() + _0x2699e7[_0x315522(0x13c)](0x1)), _0x4b367b && (_0x4b367b['style'][_0x315522(0x14f)] = _0x20dcc8 ? _0x315522(0x16b) : _0x315522(0x18a)), _0x777099 && (_0x777099[_0x315522(0x16d)][_0x315522(0x14f)] = _0x20dcc8 ? _0x315522(0x15d) : _0x315522(0x18a)), _0x440558 && (_0x20dcc8 ? (_0x440558[_0x315522(0x16d)][_0x315522(0x13d)] = _0x315522(0x180), _0x440558[_0x315522(0x16d)][_0x315522(0x140)] = _0x315522(0x141)) : (_0x440558['style']['borderColor'] = '', _0x440558[_0x315522(0x16d)][_0x315522(0x140)] = '')), console[_0x315522(0x186)](_0x315522(0x169) + _0x5ea4d7 + '\x20/\x20' + _0x2d1589 + '\x20(' + _0x2699e7 + ')\x20' + (_0x20dcc8 ? '⚠️\x20FULL' : '✅\x20OK'));
    } catch (_0x18dc57) {
        console[_0x315522(0x18c)](_0x315522(0x183), _0x18dc57);
    }
}, window[_0x25434b(0x1a0)] = function () {
    const _0x29dd64 = _0x25434b, _0xdedcef = document[_0x29dd64(0x167)](_0x29dd64(0x177));
    _0xdedcef && (_0xdedcef[_0x29dd64(0x16d)][_0x29dd64(0x14f)] = _0x29dd64(0x18a));
}, window[_0x25434b(0x14a)] = function (_0x14af26 = _0x25434b(0x145), _0x4d1eca = 'Your\x20video\x20exceeds\x20your\x20plan\x20limit.\x20Upgrade\x20to\x20process\x20longer\x20videos\x20and\x20unlock\x20premium\x20features.') {
    const _0x4f3e85 = _0x25434b, _0x2fa106 = document[_0x4f3e85(0x167)](_0x4f3e85(0x177)), _0x1c135c = document[_0x4f3e85(0x167)](_0x4f3e85(0x178)), _0x37e1f0 = document[_0x4f3e85(0x167)](_0x4f3e85(0x187));
    if (_0x2fa106) {
        if (_0x1c135c)
            _0x1c135c[_0x4f3e85(0x191)] = _0x14af26;
        if (_0x37e1f0)
            _0x37e1f0['innerHTML'] = _0x4d1eca;
        _0x2fa106['style']['display'] = _0x4f3e85(0x19d);
    }
}, document[_0x25434b(0x159)]('DOMContentLoaded', function () {
    const _0x2a9d15 = _0x25434b, _0x392cec = sessionStorage['getItem'](_0x2a9d15(0x18b));
    if (_0x392cec) {
        try {
            const _0x5e582a = JSON[_0x2a9d15(0x196)](_0x392cec);
            console[_0x2a9d15(0x186)](_0x2a9d15(0x136), _0x5e582a['plan']);
            const _0x2996df = JSON['parse'](localStorage[_0x2a9d15(0x174)](_0x2a9d15(0x138)) || '{}');
            _0x2996df && (_0x2996df[_0x2a9d15(0x17e)] = _0x5e582a[_0x2a9d15(0x17e)], localStorage[_0x2a9d15(0x156)](_0x2a9d15(0x138), JSON[_0x2a9d15(0x17c)](_0x2996df)), console[_0x2a9d15(0x186)](_0x2a9d15(0x149), _0x5e582a[_0x2a9d15(0x17e)]));
        } catch (_0x4657b9) {
            console['error'](_0x2a9d15(0x132), _0x4657b9);
        }
        sessionStorage[_0x2a9d15(0x134)](_0x2a9d15(0x18b));
    }
    async function _0x2ac68f() {
        const _0xa7474e = _0x2a9d15;
        try {
            const _0x1ea7dc = await fetch(_0xa7474e(0x12e), {
                'method': _0xa7474e(0x171),
                'credentials': _0xa7474e(0x1a5)
            });
            if (_0x1ea7dc['ok']) {
                const _0x529c5e = await _0x1ea7dc[_0xa7474e(0x193)](), _0x2f1a99 = _0x529c5e[_0xa7474e(0x15b)], _0x4885d8 = document[_0xa7474e(0x167)](_0xa7474e(0x182)), _0x125cdd = document[_0xa7474e(0x167)]('tierInfo');
                _0x4885d8 && (_0x4885d8['textContent'] = _0x2f1a99['tier_name']);
                if (_0x125cdd) {
                    const _0x477c92 = _0x2f1a99[_0xa7474e(0x13b)][_0xa7474e(0x143)];
                    _0x125cdd[_0xa7474e(0x191)] = _0x477c92 + '\x20gens\x20left\x20today';
                }
            }
        } catch (_0x3d9411) {
            console[_0xa7474e(0x186)]('Could\x20not\x20load\x20tier\x20info:', _0x3d9411);
        }
    }
    _0x2ac68f();
    async function _0x1e94e1() {
        const _0x4375b7 = _0x2a9d15;
        try {
            const _0x41edf2 = await fetch('/api/auth/subscription', {
                'method': 'GET',
                'credentials': _0x4375b7(0x1a5)
            });
            if (_0x41edf2['ok']) {
                const _0x36cee5 = await _0x41edf2[_0x4375b7(0x193)](), _0x5f4059 = _0x36cee5[_0x4375b7(0x170)];
                localStorage[_0x4375b7(0x156)](_0x4375b7(0x152), JSON[_0x4375b7(0x17c)](_0x5f4059)), console[_0x4375b7(0x186)](_0x4375b7(0x157), _0x5f4059['plan']), _0x1c8f6b(_0x5f4059);
            } else
                console[_0x4375b7(0x14d)]('⚠️\x20Could\x20not\x20fetch\x20subscription\x20from\x20backend:', _0x41edf2[_0x4375b7(0x146)]);
        } catch (_0x1898f5) {
            console[_0x4375b7(0x18c)](_0x4375b7(0x1a1), _0x1898f5);
        }
    }
    function _0x1c8f6b(_0x5301c8) {
        const _0x99e792 = _0x2a9d15;
        if (!_0x5301c8)
            return;
        const _0x45bbd8 = document[_0x99e792(0x167)](_0x99e792(0x18d)), _0xc8576e = document[_0x99e792(0x167)]('storagePlanBadge'), _0x69b83f = document[_0x99e792(0x167)]('currentPlanDesc'), _0x3dc8b5 = _0x5301c8[_0x99e792(0x135)] || _0x5301c8[_0x99e792(0x12d)] || 0x2, _0x18b321 = _0x5301c8[_0x99e792(0x17e)] || 'free', _0x339203 = _0x18b321['charAt'](0x0)[_0x99e792(0x130)]() + _0x18b321[_0x99e792(0x13c)](0x1);
        _0x45bbd8 && (_0x45bbd8[_0x99e792(0x191)] = _0x3dc8b5), _0xc8576e && (_0xc8576e['textContent'] = _0x339203), _0x69b83f && (_0x69b83f[_0x99e792(0x191)] = _0x339203 + _0x99e792(0x188)), console[_0x99e792(0x186)](_0x99e792(0x15a), {
            'plan': _0x18b321,
            'videoLimit': _0x3dc8b5
        });
    }
    _0x1e94e1(), updateStorageBadgeDisplay();
    const _0x509f83 = document[_0x2a9d15(0x167)]('disclaimerBtn'), _0x21f4b0 = document[_0x2a9d15(0x155)](_0x2a9d15(0x13e)), _0x565bed = document['querySelector'](_0x2a9d15(0x166)), _0x40d8b4 = document[_0x2a9d15(0x155)]('.url-submit-btn'), _0x96bc9c = document[_0x2a9d15(0x155)]('.checkmark-icon'), _0x44b8de = _0x2a9d15(0x194), _0x11e765 = 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
    if (_0x509f83 && _0x21f4b0) {
        const _0x706719 = localStorage[_0x2a9d15(0x174)](_0x44b8de), _0x3394af = Date[_0x2a9d15(0x153)]();
        let _0x28746c = ![];
        if (!_0x706719)
            _0x28746c = !![];
        else {
            const _0xe55f96 = _0x3394af - parseInt(_0x706719);
            _0xe55f96 > _0x11e765 && (_0x28746c = !![]);
        }
        if (!_0x28746c) {
            _0x21f4b0[_0x2a9d15(0x12f)][_0x2a9d15(0x1a7)](_0x2a9d15(0x16a)), _0x509f83[_0x2a9d15(0x12f)][_0x2a9d15(0x1a7)](_0x2a9d15(0x198));
            if (_0x96bc9c)
                _0x96bc9c['style'][_0x2a9d15(0x14f)] = _0x2a9d15(0x133);
            if (_0x565bed)
                _0x565bed[_0x2a9d15(0x16d)]['filter'] = _0x2a9d15(0x18a);
            if (_0x40d8b4)
                _0x40d8b4[_0x2a9d15(0x16d)][_0x2a9d15(0x17a)] = _0x2a9d15(0x18a);
            if (_0x565bed)
                _0x565bed[_0x2a9d15(0x16d)][_0x2a9d15(0x190)] = 'auto';
            if (_0x40d8b4)
                _0x40d8b4['style']['pointerEvents'] = _0x2a9d15(0x15c);
        }
        _0x509f83[_0x2a9d15(0x159)](_0x2a9d15(0x158), function () {
            const _0x5d63e5 = _0x2a9d15;
            if (!this[_0x5d63e5(0x12f)][_0x5d63e5(0x165)](_0x5d63e5(0x198))) {
                this[_0x5d63e5(0x12f)][_0x5d63e5(0x1a7)](_0x5d63e5(0x198));
                if (_0x96bc9c)
                    _0x96bc9c[_0x5d63e5(0x16d)][_0x5d63e5(0x14f)] = 'block';
                setTimeout(() => {
                    const _0x2522d3 = _0x5d63e5;
                    _0x21f4b0[_0x2522d3(0x12f)]['add'](_0x2522d3(0x16a));
                    if (_0x565bed)
                        _0x565bed[_0x2522d3(0x16d)]['filter'] = _0x2522d3(0x18a);
                    if (_0x40d8b4)
                        _0x40d8b4[_0x2522d3(0x16d)]['filter'] = _0x2522d3(0x18a);
                    if (_0x565bed)
                        _0x565bed[_0x2522d3(0x16d)][_0x2522d3(0x190)] = 'auto';
                    if (_0x40d8b4)
                        _0x40d8b4[_0x2522d3(0x16d)][_0x2522d3(0x190)] = _0x2522d3(0x15c);
                    localStorage[_0x2522d3(0x156)](_0x44b8de, Date['now']()['toString']());
                }, 0x12c);
            }
        });
    }
}));
function switchClipsTab(_0x106a92, _0x5bb481) {
    const _0x3738a0 = _0x25434b, _0x5b6fc0 = document[_0x3738a0(0x175)](_0x3738a0(0x160));
    _0x5b6fc0[_0x3738a0(0x139)](_0x1bbfb2 => _0x1bbfb2[_0x3738a0(0x12f)][_0x3738a0(0x13a)](_0x3738a0(0x198))), _0x5bb481[_0x3738a0(0x12f)][_0x3738a0(0x1a7)](_0x3738a0(0x198));
    const _0xe8ad3f = document[_0x3738a0(0x175)](_0x3738a0(0x1a2));
    _0xe8ad3f[_0x3738a0(0x139)](_0x3837c6 => {
        const _0x6ac8af = _0x3738a0;
        _0x3837c6[_0x6ac8af(0x12f)]['remove'](_0x6ac8af(0x198)), _0x3837c6[_0x6ac8af(0x16d)][_0x6ac8af(0x14f)] = 'none';
    });
    const _0x401637 = {
            'templates': _0x3738a0(0x19f),
            'create': _0x3738a0(0x131),
            'library': _0x3738a0(0x1a6)
        }, _0x3e6d23 = document['getElementById'](_0x401637[_0x106a92]);
    _0x3e6d23 && (_0x3e6d23[_0x3738a0(0x12f)][_0x3738a0(0x1a7)](_0x3738a0(0x198)), _0x3e6d23[_0x3738a0(0x16d)][_0x3738a0(0x14f)] = 'block');
    const _0x1eae91 = document[_0x3738a0(0x167)](_0x3738a0(0x176));
    if (_0x1eae91) {
        const _0x1bae88 = Array['from'](_0x5b6fc0)['indexOf'](_0x5bb481), _0xf6707 = document[_0x3738a0(0x155)](_0x3738a0(0x147)), _0xc39009 = _0xf6707[_0x3738a0(0x12b)](), _0x30c998 = _0x5bb481['getBoundingClientRect'](), _0x236d0a = _0x30c998[_0x3738a0(0x189)] - _0xc39009['left'];
        _0x1eae91['style'][_0x3738a0(0x189)] = _0x236d0a + 'px';
    }
}
function _0x31ac(_0x3502d3, _0x116110) {
    _0x3502d3 = _0x3502d3 - 0x12b;
    const _0x42c618 = _0x42c6();
    let _0x31ac9e = _0x42c618[_0x3502d3];
    return _0x31ac9e;
}
function _0x42c6() {
    const _0x4a6a4c = [
        'warn',
        'updateLibraryView',
        'display',
        'libraryItems',
        'storageBadge',
        'userSubscription',
        'now',
        'active_videos',
        'querySelector',
        'setItem',
        '✅\x20Dashboard\x20fetched\x20fresh\x20subscription\x20from\x20backend:',
        'click',
        'addEventListener',
        '📊\x20Storage\x20badges\x20updated\x20from\x20backend:',
        'data',
        'auto',
        'inline',
        'Error\x20deleting\x20clips:\x20',
        'info',
        '.clips-sub-item',
        '.input-section',
        'storageUsedBadge',
        'color',
        'saveLibraryItems',
        'contains',
        '.url-input',
        'getElementById',
        '334864OlWiFi',
        '✅\x20Storage\x20Badge\x20SUCCESSFULLY\x20Updated:\x20',
        'hidden',
        'inline-flex',
        '.input-container',
        'style',
        'free',
        '18TRhqJA',
        'subscription',
        'GET',
        'Bearer\x20',
        'showNotification',
        'getItem',
        'querySelectorAll',
        'clipsSubPane',
        'upgradeModalOverlay',
        'upgradeModalTitle',
        '2600878ScYdkQ',
        'filter',
        '✅\x20[Badge\x20Update]\x20Backend\x20response:',
        'stringify',
        'cssText',
        'plan',
        '\x20clips',
        '#ff4444',
        '/api/clips/',
        'currentTier',
        '❌\x20Failed\x20to\x20fetch\x20storage\x20info\x20from\x20backend:',
        '🚨\x20FINAL\x20WARNING:\x20This\x20will\x20permanently\x20delete\x20ALL\x20your\x20stored\x20clips.\x20Are\x20you\x20100%\x20sure?',
        'storagePlanBadge',
        'log',
        'upgradeModalSubtitle',
        '\x20Plan',
        'left',
        'none',
        'paymentSuccess',
        'error',
        'storageTotalBadge',
        'message',
        '11999650JlDOwA',
        'pointerEvents',
        'textContent',
        'deleteAllClipsBtn',
        'json',
        'disclaimerAcceptedTime',
        'length',
        'parse',
        'inherit',
        'active',
        'token',
        'sidebarActiveIndex',
        '49380aCdcmG',
        '78pIcARA',
        'flex',
        '286548HjUYWF',
        'templatesSection',
        'closeUpgradeModal',
        '❌\x20Dashboard\x20failed\x20to\x20fetch\x20subscription:',
        '.clips-section',
        'Failed\x20to\x20fetch\x20subscription:\x20',
        'Failed\x20to\x20delete\x20clip\x20',
        'include',
        'librarySection',
        'add',
        '2247035nuPjGZ',
        'getBoundingClientRect',
        'success',
        'videos_space_limit',
        '/api/tier/info',
        'classList',
        'toUpperCase',
        'createSection',
        'Failed\x20to\x20parse\x20payment\x20success\x20data:',
        'block',
        'removeItem',
        'video_limit',
        '🎉\x20Payment\x20detected,\x20new\x20plan:',
        '⚠️\x20This\x20will\x20DELETE\x20ALL\x20your\x20clips.\x20Are\x20you\x20absolutely\x20sure?\x20This\x20cannot\x20be\x20undone.',
        'currentUser',
        'forEach',
        'remove',
        'generations',
        'slice',
        'borderColor',
        '.url-input-overlay',
        'charAt',
        'backgroundColor',
        'rgba(255,\x2068,\x2068,\x200.05)',
        '2wLtUdk',
        'remaining',
        '363890IncDSW',
        'Video\x20Too\x20Long',
        'status',
        '.clips-sub-pill',
        '🔄\x20[Badge\x20Update]\x20Fetching\x20fresh\x20subscription\x20from\x20backend...',
        '✅\x20Updated\x20currentUser\x20plan\x20to:',
        'showUpgradeModal',
        'needMoreUpgradeText',
        'clipsStudio'
    ];
    _0x42c6 = function () {
        return _0x4a6a4c;
    };
    return _0x42c6();
}