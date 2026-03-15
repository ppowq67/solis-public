window['addEventListener']('load', () => {
    const _0x778059 = document['querySelector']('.input-section'),
        _0x99ee75 = document['querySelector']('.input-container'),
        _0x52ac85 = parseInt(localStorage['getItem']('sidebarActiveIndex') || '0');
    _0x778059 && _0x99ee75 && (_0x52ac85 === 0x0 ? (_0x778059['classList']['add']('active'), _0x99ee75['classList']['remove']('hidden'), _0x778059['style']['cssText'] = 'display:\x20flex\x20!important;\x20visibility:\x20visible\x20!important;\x20opacity:\x201\x20!important;\x20pointer-events:\x20all\x20!important;\x20z-index:\x201000\x20!important;') : (_0x778059['classList']['remove']('active'), _0x99ee75['classList']['add']('hidden'), _0x778059['style']['cssText'] = 'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;'));
}), window['handleDeleteAllClips'] = async function() {
    const _0x197fdb = confirm('⚠️\x20This\x20will\x20DELETE\x20ALL\x20your\x20clips.\x20Are\x20you\x20absolutely\x20sure?\x20This\x20cannot\x20be\x20undone.');
    if (!_0x197fdb)
        return;
    const _0x1488f8 = confirm('🚨\x20FINAL\x20WARNING:\x20This\x20will\x20permanently\x20delete\x20ALL\x20your\x20stored\x20clips.\x20Are\x20you\x20100%\x20sure?');
    if (!_0x1488f8)
        return;
    try {
        if (window['clipsStudio'] && window['clipsStudio']['libraryItems'] && window['clipsStudio']['libraryItems']['length'] > 0x0) {
            const _0x41ab1c = window['clipsStudio']['libraryItems']['length'];
            let _0x15d9a7 = 0x0;
            for (const _0x1c4506 of window['clipsStudio']['libraryItems']) {
                try {
                    await fetch('/api/clips/' + _0x1c4506['id'], {
                        'method': 'DELETE',
                        'credentials': 'include'
                    }), _0x15d9a7++;
                } catch (_0x20f2f8) {
                    console['error']('Failed\x20to\x20delete\x20clip\x20' + _0x1c4506['id'] + ':', _0x20f2f8);
                }
            }
            window['clipsStudio']['libraryItems'] = [], window['clipsStudio']['saveLibraryItems'](), window['clipsStudio']['updateLibraryView'](), updateStorageBadgeDisplay(), window['clipsStudio']['showNotification']('✅\x20Deleted\x20' + _0x15d9a7 + '/' + _0x41ab1c + '\x20clips\x20successfully', 'success'), console['log']('✅\x20Successfully\x20deleted\x20' + _0x15d9a7 + '\x20clips');
        } else
            window['clipsStudio']['showNotification']('No\x20clips\x20to\x20delete', 'info');
    } catch (_0x34a257) {
        console['error']('Error\x20deleting\x20all\x20clips:', _0x34a257), window['clipsStudio'] && window['clipsStudio']['showNotification']('Error\x20deleting\x20clips:\x20' + _0x34a257['message'], 'error');
    }
}, window['updateStorageBadgeDisplay'] = async function() {
    try {
        console['log']('🔄\x20[Badge\x20Update]\x20Fetching\x20fresh\x20subscription\x20from\x20backend...');
        const _0x131baa = await fetch('/api/auth/subscription', {
            'method': 'GET',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        if (!_0x131baa['ok'])
            throw new Error('Failed\x20to\x20fetch\x20subscription:\x20' + _0x131baa['status']);
        const _0x160420 = await _0x131baa['json'](),
            _0x5bc6ab = _0x160420['subscription'];
        console['log']('✅\x20[Badge\x20Update]\x20Backend\x20response:', _0x5bc6ab);
        const _0x16be78 = document['getElementById']('storageUsedBadge'),
            _0x15f076 = document['getElementById']('storageTotalBadge'),
            _0x525aec = document['getElementById']('storagePlanBadge'),
            _0xfbf3d0 = document['getElementById']('deleteAllClipsBtn'),
            _0x2fb7da = document['getElementById']('needMoreUpgradeText'),
            _0x4abdf7 = document['getElementById']('storageBadge');
        console['log']('🔍\x20[Badge\x20Update]\x20DOM\x20Elements\x20check:', {
            'storageUsedBadge': !!_0x16be78,
            'storageTotalBadge': !!_0x15f076,
            'storagePlanBadge': !!_0x525aec,
            'storageBadge': !!_0x4abdf7
        });
        const _0x11081b = _0x5bc6ab['active_videos'] || 0x0,
            _0x53affc = _0x5bc6ab['video_limit'] || 0x2,
            _0x2124c2 = _0x5bc6ab['plan'] || 'free',
            _0x230862 = _0x11081b >= _0x53affc;
        _0x16be78 && (_0x16be78['textContent'] = _0x11081b, _0x16be78['style']['color'] = _0x230862 ? '#ff4444' : 'inherit'), _0x15f076 && (_0x15f076['textContent'] = _0x53affc, _0x15f076['style']['color'] = _0x230862 ? '#ff4444' : 'inherit'), _0x525aec && (_0x525aec['textContent'] = _0x2124c2['charAt'](0x0)['toUpperCase']() + _0x2124c2['slice'](0x1)), _0xfbf3d0 && (_0xfbf3d0['style']['display'] = _0x230862 ? 'inline-flex' : 'none'), _0x2fb7da && (_0x2fb7da['style']['display'] = _0x230862 ? 'inline' : 'none'), _0x4abdf7 && (_0x230862 ? (_0x4abdf7['style']['borderColor'] = '#ff4444', _0x4abdf7['style']['backgroundColor'] = 'rgba(255,\x2068,\x2068,\x200.05)') : (_0x4abdf7['style']['borderColor'] = '', _0x4abdf7['style']['backgroundColor'] = '')), console['log']('✅\x20Storage\x20Badge\x20SUCCESSFULLY\x20Updated:\x20' + _0x11081b + '\x20/\x20' + _0x53affc + '\x20(' + _0x2124c2 + ')\x20' + (_0x230862 ? '⚠️\x20FULL' : '✅\x20OK'));
    } catch (_0x3969f6) {
        console['error']('❌\x20Failed\x20to\x20fetch\x20storage\x20info\x20from\x20backend:', _0x3969f6);
    }
}, window['closeUpgradeModal'] = function() {
    const _0x44c2e6 = document['getElementById']('upgradeModalOverlay');
    _0x44c2e6 && (_0x44c2e6['style']['display'] = 'none');
}, window['showUpgradeModal'] = function(_0x134b02 = 'Video\x20Too\x20Long', _0x4e95a2 = 'Your\x20video\x20exceeds\x20your\x20plan\x20limit.\x20Upgrade\x20to\x20process\x20longer\x20videos\x20and\x20unlock\x20premium\x20features.') {
    const _0x209f00 = document['getElementById']('upgradeModalOverlay'),
        _0x55a0c5 = document['getElementById']('upgradeModalTitle'),
        _0x1551f3 = document['getElementById']('upgradeModalSubtitle');
    if (_0x209f00) {
        if (_0x55a0c5)
            _0x55a0c5['textContent'] = _0x134b02;
        if (_0x1551f3)
            _0x1551f3['textContent'] = _0x4e95a2;
        _0x209f00['style']['display'] = 'flex';
    }
}, document['addEventListener']('DOMContentLoaded', function() {
    const _0x4766dd = sessionStorage['getItem']('paymentSuccess');
    if (_0x4766dd) {
        try {
            const _0x5e57fa = JSON['parse'](_0x4766dd);
            console['log']('🎉\x20Payment\x20detected,\x20new\x20plan:', _0x5e57fa['plan']);
            const _0x3b7566 = JSON['parse'](localStorage['getItem']('currentUser') || '{}');
            _0x3b7566 && (_0x3b7566['plan'] = _0x5e57fa['plan'], localStorage['setItem']('currentUser', JSON['stringify'](_0x3b7566)), console['log']('✅\x20Updated\x20currentUser\x20plan\x20to:', _0x5e57fa['plan']));
        } catch (_0x364475) {
            console['error']('Failed\x20to\x20parse\x20payment\x20success\x20data:', _0x364475);
        }
        sessionStorage['removeItem']('paymentSuccess');
    }
    async function _0x52d808() {
        try {
            const _0x55d6d1 = await fetch('/api/tier/info', {
                'method': 'GET',
                'credentials': 'include'
            });
            if (_0x55d6d1['ok']) {
                const _0x7c1590 = await _0x55d6d1['json'](),
                    _0x1ec518 = _0x7c1590['data'],
                    _0x17bfde = document['getElementById']('currentTier'),
                    _0x47df60 = document['getElementById']('tierInfo');
                _0x17bfde && (_0x17bfde['textContent'] = _0x1ec518['tier_name']);
                if (_0x47df60) {
                    const _0xb38d1e = _0x1ec518['generations']['remaining'];
                    _0x47df60['textContent'] = _0xb38d1e + '\x20gens\x20left\x20today';
                }
            }
        } catch (_0x2069f0) {
            console['log']('Could\x20not\x20load\x20tier\x20info:', _0x2069f0);
        }
    }
    _0x52d808();
    async function _0x1048bd() {
        try {
            const _0x3c86a7 = await fetch('/api/auth/subscription', {
                'method': 'GET',
                'credentials': 'include'
            });
            if (_0x3c86a7['ok']) {
                const _0x301ec6 = await _0x3c86a7['json'](),
                    _0x3fd97d = _0x301ec6['subscription'];
                localStorage['setItem']('userSubscription', JSON['stringify'](_0x3fd97d)), console['log']('✅\x20Dashboard\x20fetched\x20fresh\x20subscription\x20from\x20backend:', _0x3fd97d['plan']), _0x1bfcaa(_0x3fd97d);
            } else
                console['warn']('⚠️\x20Could\x20not\x20fetch\x20subscription\x20from\x20backend:', _0x3c86a7['status']);
        } catch (_0x41d215) {
            console['error']('❌\x20Dashboard\x20failed\x20to\x20fetch\x20subscription:', _0x41d215);
        }
    }

    function _0x1bfcaa(_0x2a0071) {
        if (!_0x2a0071)
            return;
        const _0x2c0d97 = document['getElementById']('storageTotalBadge'),
            _0x23429d = document['getElementById']('storagePlanBadge'),
            _0x3de7fc = document['getElementById']('currentPlanDesc'),
            _0x56ce04 = _0x2a0071['video_limit'] || _0x2a0071['videos_space_limit'] || 0x2,
            _0x431368 = _0x2a0071['plan'] || 'free',
            _0x2448b = _0x431368['charAt'](0x0)['toUpperCase']() + _0x431368['slice'](0x1);
        _0x2c0d97 && (_0x2c0d97['textContent'] = _0x56ce04), _0x23429d && (_0x23429d['textContent'] = _0x2448b), _0x3de7fc && (_0x3de7fc['textContent'] = _0x2448b + '\x20Plan'), console['log']('📊\x20Storage\x20badges\x20updated\x20from\x20backend:', {
            'plan': _0x431368,
            'videoLimit': _0x56ce04
        });
    }
    _0x1048bd(), updateStorageBadgeDisplay();
    const _0x41e3be = document['getElementById']('disclaimerBtn'),
        _0x18101b = document['querySelector']('.url-input-overlay'),
        _0x1e4550 = document['querySelector']('.url-input'),
        _0x2314e3 = document['querySelector']('.url-submit-btn'),
        _0x2afbcd = document['querySelector']('.checkmark-icon'),
        _0x108cd8 = 'disclaimerAcceptedTime',
        _0x208424 = 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
    if (_0x41e3be && _0x18101b) {
        const _0x5b90ce = localStorage['getItem'](_0x108cd8),
            _0x3f76b8 = Date['now']();
        let _0x5f1856 = ![];
        if (!_0x5b90ce)
            _0x5f1856 = !![];
        else {
            const _0x4777a9 = _0x3f76b8 - parseInt(_0x5b90ce);
            _0x4777a9 > _0x208424 && (_0x5f1856 = !![]);
        }
        if (!_0x5f1856) {
            _0x18101b['classList']['add']('hidden'), _0x41e3be['classList']['add']('active');
            if (_0x2afbcd)
                _0x2afbcd['style']['display'] = 'block';
            if (_0x1e4550)
                _0x1e4550['style']['filter'] = 'none';
            if (_0x2314e3)
                _0x2314e3['style']['filter'] = 'none';
            if (_0x1e4550)
                _0x1e4550['style']['pointerEvents'] = 'auto';
            if (_0x2314e3)
                _0x2314e3['style']['pointerEvents'] = 'auto';
        }
        _0x41e3be['addEventListener']('click', function() {
            if (!this['classList']['contains']('active')) {
                this['classList']['add']('active');
                if (_0x2afbcd)
                    _0x2afbcd['style']['display'] = 'block';
                setTimeout(() => {
                    _0x18101b['classList']['add']('hidden');
                    if (_0x1e4550)
                        _0x1e4550['style']['filter'] = 'none';
                    if (_0x2314e3)
                        _0x2314e3['style']['filter'] = 'none';
                    if (_0x1e4550)
                        _0x1e4550['style']['pointerEvents'] = 'auto';
                    if (_0x2314e3)
                        _0x2314e3['style']['pointerEvents'] = 'auto';
                    localStorage['setItem'](_0x108cd8, Date['now']()['toString']());
                }, 0x12c);
            }
        });
    }
});

function _0x1df492(_0xb5b7bf, _0x4ca343) {
    const _0x56bdcb = document['querySelectorAll']('.clips-sub-item');
    _0x56bdcb['forEach'](_0x1745a1 => _0x1745a1['classList']['remove']('active')), _0x4ca343['classList']['add']('active');
    const _0x5477e2 = document['querySelectorAll']('.clips-section');
    _0x5477e2['forEach'](_0x4ab0de => {
        _0x4ab0de['classList']['remove']('active'), _0x4ab0de['style']['display'] = 'none';
    });
    const _0x72189e = {
            'templates': 'templatesSection',
            'create': 'createSection',
            'library': 'librarySection'
        },
        _0x29b148 = document['getElementById'](_0x72189e[_0xb5b7bf]);
    _0x29b148 && (_0x29b148['classList']['add']('active'), _0x29b148['style']['display'] = 'block');
    const _0x140561 = document['getElementById']('clipsSubPane');
    if (_0x140561) {
        const _0x200948 = Array['from'](_0x56bdcb)['indexOf'](_0x4ca343),
            _0x3d4d89 = document['querySelector']('.clips-sub-pill'),
            _0x579433 = _0x3d4d89['getBoundingClientRect'](),
            _0x266518 = _0x4ca343['getBoundingClientRect'](),
            _0x2f5dfe = _0x266518['left'] - _0x579433['left'];
        _0x140561['style']['left'] = _0x2f5dfe + 'px';
    }
}