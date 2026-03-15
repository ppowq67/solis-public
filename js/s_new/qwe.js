window['getCSRFToken'] = function() {
    const _0x5a3154 = document['querySelector']('meta[name=\x22csrf-token\x22]');
    if (_0x5a3154)
        return _0x5a3154['getAttribute']('content');
    const _0x2f7314 = 'csrf_token=',
        _0x2f74b6 = decodeURIComponent(document['cookie']),
        _0x36a153 = _0x2f74b6['split'](';');
    for (let _0x25cd66 of _0x36a153) {
        _0x25cd66 = _0x25cd66['trim']();
        if (_0x25cd66['indexOf'](_0x2f7314) === 0x0)
            return _0x25cd66['substring'](_0x2f7314['length']);
    }
    return null;
}, window['secureHeaders'] = function() {
    return {
        'Content-Type': 'application/json',
        ...window['getCSRFToken']() && {
            'X-CSRF-Token': window['getCSRFToken']()
        }
    };
}, window['createDebounce'] = function(_0x250dd1, _0x285d69) {
    let _0x302687;
    return function(..._0x1df6fb) {
        clearTimeout(_0x302687), _0x302687 = setTimeout(() => _0x250dd1(..._0x1df6fb), _0x285d69);
    };
}, window['addEventListener']('load', () => {
    const _0x50de32 = document['querySelector']('.input-section'),
        _0xd91540 = document['querySelector']('.input-container'),
        _0x3c1d76 = parseInt(localStorage['getItem']('sidebarActiveIndex') || '0');
    _0x50de32 && _0xd91540 && (_0x3c1d76 === 0x0 ? (_0x50de32['classList']['add']('active'), _0xd91540['classList']['remove']('hidden'), _0x50de32['style']['cssText'] = 'display:\x20flex\x20!important;\x20visibility:\x20visible\x20!important;\x20opacity:\x201\x20!important;\x20pointer-events:\x20all\x20!important;\x20z-index:\x201000\x20!important;') : (_0x50de32['classList']['remove']('active'), _0xd91540['classList']['add']('hidden'), _0x50de32['style']['cssText'] = 'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;'));
}), window['handleDeleteAllClips'] = async function() {
    const _0x2251fa = confirm('⚠️\x20This\x20will\x20DELETE\x20ALL\x20your\x20clips.\x20This\x20action\x20cannot\x20be\x20undone.');
    if (!_0x2251fa)
        return;
    const _0x1375f6 = confirm('🚨\x20FINAL\x20WARNING:\x20Permanently\x20delete\x20ALL\x20stored\x20clips?');
    if (!_0x1375f6)
        return;
    try {
        if (!window['clipsStudio'] || !window['clipsStudio']['libraryItems'] || window['clipsStudio']['libraryItems']['length'] === 0x0) {
            window['clipsStudio']?.['showNotification']('No\x20clips\x20to\x20delete', 'info');
            return;
        }
        const _0x2580ef = window['clipsStudio']['libraryItems']['length'],
            _0x382eff = window['clipsStudio']['libraryItems']['map'](_0x4de1cf => _0x4de1cf['id']);
        let _0x1b4cc5 = 0x0;
        console['log']('🗑️\x20Starting\x20bulk\x20delete\x20of\x20' + _0x2580ef + '\x20clips');
        try {
            const _0x5e9aca = await fetch('/api/clips/bulk-delete', {
                'method': 'DELETE',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json',
                    ...window['getCSRFToken'] && {
                        'X-CSRF-Token': window['getCSRFToken']()
                    }
                },
                'body': JSON['stringify']({
                    'clip_ids': _0x382eff
                })
            });
            if (!_0x5e9aca['ok']) {
                const _0x3c610a = await _0x5e9aca['json']()['catch'](() => ({})),
                    _0x20d00c = window['getSafeErrorMessage'](_0x3c610a);
                console['error']('Bulk\x20delete\x20failed:', _0x5e9aca['status'], _0x3c610a), window['clipsStudio']?.['showNotification']('Failed\x20to\x20delete\x20clips:\x20' + _0x20d00c, 'error');
                return;
            }
            const _0x316824 = await _0x5e9aca['json']();
            _0x1b4cc5 = _0x316824['deleted_count'] || _0x2580ef, console['log']('✅\x20Deleted\x20' + _0x1b4cc5 + '\x20clips\x20via\x20bulk\x20endpoint');
        } catch (_0x19d1e1) {
            console['warn']('Bulk\x20delete\x20endpoint\x20failed,\x20falling\x20back\x20to\x20individual\x20deletes:', _0x19d1e1);
            for (const _0x1d77f6 of window['clipsStudio']['libraryItems']) {
                try {
                    const _0x22f661 = await fetch('/api/clips/' + _0x1d77f6['id'], {
                        'method': 'DELETE',
                        'credentials': 'include',
                        'headers': {
                            'Content-Type': 'application/json',
                            ...window['getCSRFToken'] && {
                                'X-CSRF-Token': window['getCSRFToken']()
                            }
                        }
                    });
                    _0x22f661['ok'] ? _0x1b4cc5++ : console['error']('Failed\x20to\x20delete\x20clip\x20' + _0x1d77f6['id'] + ':\x20' + _0x22f661['status']), await new Promise(_0x1b3b6d => setTimeout(_0x1b3b6d, 0x64));
                } catch (_0x7bcd53) {
                    console['error']('Exception\x20deleting\x20clip\x20' + _0x1d77f6['id'] + ':', _0x7bcd53);
                }
            }
        }
        window['clipsStudio']['libraryItems'] = [], window['clipsStudio']['saveLibraryItems'](), window['clipsStudio']['updateLibraryView'](), updateStorageBadgeDisplay(), window['clipsStudio']?.['showNotification']('✅\x20Deleted\x20' + _0x1b4cc5 + '/' + _0x2580ef + '\x20clips', 'success'), console['log']('✅\x20Successfully\x20deleted\x20' + _0x1b4cc5 + '\x20clips'), setTimeout(() => {
            window['location']['reload']();
        }, 0x320);
    } catch (_0x3a476f) {
        console['error']('Error\x20deleting\x20all\x20clips:', _0x3a476f), window['clipsStudio']?.['showNotification']('Error:\x20Failed\x20to\x20delete\x20clips.\x20Please\x20try\x20again.', 'error');
    }
}, window['updateStorageBadgeDisplay'] = (function() {
    let _0x1af23f = async function() {
        try {
            console['log']('🔄\x20[Badge\x20Update]\x20Fetching\x20fresh\x20subscription\x20from\x20backend...');
            const _0x3c3fba = await fetch('/api/auth/subscription', {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if (!_0x3c3fba['ok'])
                throw new Error('Failed\x20to\x20fetch\x20subscription:\x20' + _0x3c3fba['status']);
            const _0x587a99 = await _0x3c3fba['json']();
            if (!_0x587a99 || typeof _0x587a99 !== 'object')
                throw new Error('Invalid\x20response\x20structure');
            const _0x128ecd = _0x587a99['subscription'];
            if (!_0x128ecd || typeof _0x128ecd !== 'object')
                throw new Error('Missing\x20subscription\x20in\x20response');
            console['log']('✅\x20[Badge\x20Update]\x20Backend\x20response\x20(validated):', _0x128ecd);
            const _0x3e9048 = window['validateNumber'](_0x128ecd['active_videos'], 0x0, VALIDATION['MAX_VIDEOS_LIMIT'], 0x0),
                _0x4220aa = window['validateNumber'](_0x128ecd['video_limit'], 0x1, VALIDATION['MAX_VIDEOS_LIMIT'], 0x2),
                _0x552c8e = _0x128ecd['plan'] || 'free',
                _0x40f027 = typeof _0x552c8e === 'string' && _0x552c8e['length'] > 0x0 && VALIDATION['ALLOWED_PLANS']['includes'](_0x552c8e['toLowerCase']()) ? _0x552c8e['toLowerCase']() : 'free',
                _0x168fba = _0x3e9048 >= _0x4220aa,
                _0x1a5355 = document['getElementById']('storageUsedBadge'),
                _0x2d2d11 = document['getElementById']('storageTotalBadge'),
                _0x5ae046 = document['getElementById']('storagePlanBadge'),
                _0x36c950 = document['getElementById']('deleteAllClipsBtn'),
                _0x371a2d = document['getElementById']('needMoreUpgradeText'),
                _0x43f91f = document['getElementById']('storageBadge');
            console['log']('🔍\x20[Badge\x20Update]\x20DOM\x20Elements\x20check:', {
                'storageUsedBadge': !!_0x1a5355,
                'storageTotalBadge': !!_0x2d2d11,
                'storagePlanBadge': !!_0x5ae046,
                'storageBadge': !!_0x43f91f
            }), _0x1a5355 && (_0x1a5355['textContent'] = _0x3e9048['toString'](), _0x1a5355['style']['color'] = _0x168fba ? '#ff4444' : 'inherit', console['log']('✏️\x20[Badge\x20Update]\x20Updated\x20storageUsedBadge:', _0x3e9048)), _0x2d2d11 && (_0x2d2d11['textContent'] = _0x4220aa['toString'](), _0x2d2d11['style']['color'] = _0x168fba ? '#ff4444' : 'inherit', console['log']('✏️\x20[Badge\x20Update]\x20Updated\x20storageTotalBadge:', _0x4220aa)), _0x5ae046 && (_0x5ae046['textContent'] = _0x40f027['charAt'](0x0)['toUpperCase']() + _0x40f027['slice'](0x1), console['log']('✏️\x20[Badge\x20Update]\x20Updated\x20storagePlanBadge:', _0x40f027)), _0x36c950 && (_0x36c950['style']['display'] = _0x168fba ? 'inline-flex' : 'none'), _0x371a2d && (_0x371a2d['style']['display'] = _0x168fba ? 'inline' : 'none'), _0x43f91f && (_0x168fba ? (_0x43f91f['style']['borderColor'] = '#ff4444', _0x43f91f['style']['backgroundColor'] = 'rgba(255,\x2068,\x2068,\x200.05)') : (_0x43f91f['style']['borderColor'] = '', _0x43f91f['style']['backgroundColor'] = '')), console['log']('✅\x20Storage\x20Badge\x20SUCCESSFULLY\x20Updated:\x20' + _0x3e9048 + '\x20/\x20' + _0x4220aa + '\x20(' + _0x40f027 + ')\x20' + (_0x168fba ? '⚠️\x20FULL' : '✅\x20OK'));
        } catch (_0x4c7bb7) {
            console['error']('❌\x20Failed\x20to\x20fetch\x20storage\x20info\x20from\x20backend:', _0x4c7bb7);
        }
    };
    return window['createDebounce'](_0x1af23f, 0x1f4);
}()), window['closeUpgradeModal'] = function() {
    const _0x3aad6d = document['getElementById']('upgradeModalOverlay');
    _0x3aad6d && (_0x3aad6d['style']['display'] = 'none');
}, window['showUpgradeModal'] = function(_0x1ea7ae = 'Video\x20Too\x20Long', _0xc12109 = 'Your\x20video\x20exceeds\x20your\x20plan\x20limit.\x20Upgrade\x20to\x20process\x20longer\x20videos\x20and\x20unlock\x20premium\x20features.') {
    const _0x555319 = document['getElementById']('upgradeModalOverlay'),
        _0x23593e = document['getElementById']('upgradeModalTitle'),
        _0x9e87c8 = document['getElementById']('upgradeModalSubtitle');
    if (_0x555319) {
        if (_0x23593e)
            _0x23593e['textContent'] = window['sanitizeString'](_0x1ea7ae);
        if (_0x9e87c8)
            _0x9e87c8['textContent'] = window['sanitizeString'](_0xc12109);
        _0x555319['style']['display'] = 'flex';
    }
}, document['addEventListener']('DOMContentLoaded', function() {
    const _0x50053a = sessionStorage['getItem']('paymentSuccess');
    if (_0x50053a) {
        try {
            const _0x5b711b = JSON['parse'](_0x50053a);
            console['log']('🎉\x20Payment\x20detected,\x20new\x20plan:', _0x5b711b['plan']);
            if (!_0x5b711b['plan'] || typeof _0x5b711b['plan'] !== 'string') {
                console['error']('❌\x20Invalid\x20payment\x20data:\x20plan\x20is\x20missing\x20or\x20not\x20a\x20string'), sessionStorage['removeItem']('paymentSuccess');
                return;
            }
            if (!VALIDATION['ALLOWED_PLANS']['includes'](_0x5b711b['plan']['toLowerCase']())) {
                console['error']('❌\x20Invalid\x20payment\x20data:\x20plan\x20not\x20in\x20allowed\x20list'), sessionStorage['removeItem']('paymentSuccess');
                return;
            }
            const _0x154e04 = JSON['parse'](localStorage['getItem']('currentUser') || '{}');
            _0x154e04 && (_0x154e04['plan'] = _0x5b711b['plan']['toLowerCase'](), localStorage['setItem']('currentUser', JSON['stringify'](_0x154e04)), console['log']('✅\x20Updated\x20currentUser\x20plan\x20to:', _0x154e04['plan']));
        } catch (_0x2a53f7) {
            console['error']('Failed\x20to\x20parse\x20payment\x20success\x20data:', _0x2a53f7);
        }
        sessionStorage['removeItem']('paymentSuccess');
    }
    async function _0x199191() {
        try {
            const _0x3b294f = await fetch('/api/tier/info', {
                'method': 'GET',
                'credentials': 'include'
            });
            if (_0x3b294f['ok']) {
                const _0x2cd647 = await _0x3b294f['json']();
                if (!_0x2cd647 || typeof _0x2cd647 !== 'object')
                    throw new Error('Invalid\x20response\x20structure');
                const _0x1ba473 = _0x2cd647['data'];
                if (!_0x1ba473 || typeof _0x1ba473 !== 'object')
                    throw new Error('Missing\x20tier\x20data\x20in\x20response');
                const _0x2ab6b4 = document['getElementById']('currentTier'),
                    _0x14f780 = document['getElementById']('tierInfo');
                _0x2ab6b4 && _0x1ba473['tier_name'] && typeof _0x1ba473['tier_name'] === 'string' && (_0x2ab6b4['textContent'] = window['sanitizeString'](_0x1ba473['tier_name']));
                if (_0x14f780 && _0x1ba473['generations'] && typeof _0x1ba473['generations']['remaining'] === 'number') {
                    const _0x294f38 = window['validateNumber'](_0x1ba473['generations']['remaining'], 0x0, 0xf423f, 0x0);
                    _0x14f780['textContent'] = _0x294f38 + '\x20gens\x20left\x20today';
                }
            }
        } catch (_0x28496f) {
            console['log']('Could\x20not\x20load\x20tier\x20info:', _0x28496f);
        }
    }
    _0x199191();
    async function _0x5e3fe6() {
        try {
            const _0x485485 = await fetch('/api/auth/subscription', {
                'method': 'GET',
                'credentials': 'include'
            });
            if (_0x485485['ok']) {
                const _0x477bad = await _0x485485['json']();
                if (!_0x477bad || typeof _0x477bad !== 'object')
                    throw new Error('Invalid\x20response\x20structure');
                const _0x1dd5a3 = _0x477bad['subscription'];
                if (!_0x1dd5a3 || typeof _0x1dd5a3 !== 'object')
                    throw new Error('Missing\x20subscription\x20in\x20response');
                console['log']('✅\x20Dashboard\x20fetched\x20fresh\x20subscription\x20from\x20backend\x20(validated):', _0x1dd5a3['plan']), _0x588b24(_0x1dd5a3);
            } else
                console['warn']('⚠️\x20Could\x20not\x20fetch\x20subscription\x20from\x20backend:', _0x485485['status']);
        } catch (_0x4e74ac) {
            console['error']('❌\x20Dashboard\x20failed\x20to\x20fetch\x20subscription:', _0x4e74ac);
        }
    }

    function _0x588b24(_0x478db7) {
        if (!_0x478db7 || typeof _0x478db7 !== 'object')
            return;
        const _0x5823f8 = document['getElementById']('storageTotalBadge'),
            _0x44180c = document['getElementById']('storagePlanBadge'),
            _0x3fd9e5 = document['getElementById']('currentPlanDesc'),
            _0x317fee = window['validateNumber'](_0x478db7['video_limit'] || _0x478db7['videos_space_limit'] || 0x2, 0x1, VALIDATION['MAX_VIDEOS_LIMIT'], 0x2),
            _0x4efe90 = _0x478db7['plan'] || 'free',
            _0x273a62 = typeof _0x4efe90 === 'string' && VALIDATION['ALLOWED_PLANS']['includes'](_0x4efe90['toLowerCase']()) ? _0x4efe90['toLowerCase']() : 'free',
            _0x5070e2 = _0x273a62['charAt'](0x0)['toUpperCase']() + _0x273a62['slice'](0x1);
        _0x5823f8 && (_0x5823f8['textContent'] = _0x317fee['toString']()), _0x44180c && (_0x44180c['textContent'] = _0x5070e2), _0x3fd9e5 && (_0x3fd9e5['textContent'] = _0x5070e2 + '\x20Plan'), console['log']('📊\x20Storage\x20badges\x20updated\x20from\x20backend\x20(validated):', {
            'plan': _0x273a62,
            'videoLimit': _0x317fee
        });
    }
    _0x5e3fe6(), updateStorageBadgeDisplay();
    const _0x5b31eb = document['getElementById']('disclaimerBtn'),
        _0xe71649 = document['querySelector']('.url-input-overlay'),
        _0x24a848 = document['querySelector']('.url-input'),
        _0x29e6f0 = document['querySelector']('.url-submit-btn'),
        _0xb0301d = document['querySelector']('.checkmark-icon'),
        _0x151105 = 'disclaimerAcceptedTime',
        _0x3a1576 = 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
    if (_0x5b31eb && _0xe71649) {
        const _0x203156 = localStorage['getItem'](_0x151105),
            _0x48bc96 = Date['now']();
        let _0x2377cc = ![];
        if (!_0x203156)
            _0x2377cc = !![];
        else {
            const _0x25c74d = _0x48bc96 - parseInt(_0x203156);
            _0x25c74d > _0x3a1576 && (_0x2377cc = !![]);
        }
        if (!_0x2377cc) {
            _0xe71649['classList']['add']('hidden'), _0x5b31eb['classList']['add']('active');
            if (_0xb0301d)
                _0xb0301d['style']['display'] = 'block';
            if (_0x24a848)
                _0x24a848['style']['filter'] = 'none';
            if (_0x29e6f0)
                _0x29e6f0['style']['filter'] = 'none';
            if (_0x24a848)
                _0x24a848['style']['pointerEvents'] = 'auto';
            if (_0x29e6f0)
                _0x29e6f0['style']['pointerEvents'] = 'auto';
        }
        _0x5b31eb['addEventListener']('click', function() {
            if (!this['classList']['contains']('active')) {
                this['classList']['add']('active');
                if (_0xb0301d)
                    _0xb0301d['style']['display'] = 'block';
                setTimeout(() => {
                    _0xe71649['classList']['add']('hidden');
                    if (_0x24a848)
                        _0x24a848['style']['filter'] = 'none';
                    if (_0x29e6f0)
                        _0x29e6f0['style']['filter'] = 'none';
                    if (_0x24a848)
                        _0x24a848['style']['pointerEvents'] = 'auto';
                    if (_0x29e6f0)
                        _0x29e6f0['style']['pointerEvents'] = 'auto';
                    localStorage['setItem'](_0x151105, Date['now']()['toString']());
                }, 0x12c);
            }
        });
    }
});

function _0x8ab8b4(_0xbbe64b, _0x550a3c) {
    const _0x54b752 = document['querySelectorAll']('.clips-sub-item');
    _0x54b752['forEach'](_0x5e84cd => _0x5e84cd['classList']['remove']('active')), _0x550a3c['classList']['add']('active');
    const _0x269915 = document['querySelectorAll']('.clips-section');
    _0x269915['forEach'](_0x50568c => {
        _0x50568c['classList']['remove']('active'), _0x50568c['style']['display'] = 'none';
    });
    const _0x16cebc = {
            'templates': 'templatesSection',
            'create': 'createSection',
            'library': 'librarySection'
        },
        _0x59363d = document['getElementById'](_0x16cebc[_0xbbe64b]);
    _0x59363d && (_0x59363d['classList']['add']('active'), _0x59363d['style']['display'] = 'block');
    const _0x3f1dea = document['getElementById']('clipsSubPane');
    if (_0x3f1dea) {
        const _0x378e36 = Array['from'](_0x54b752)['indexOf'](_0x550a3c),
            _0x256702 = document['querySelector']('.clips-sub-pill');
        if (!_0x256702) {
            console['warn']('⚠️\x20.clips-sub-pill\x20element\x20not\x20found');
            return;
        }
        const _0x5c651e = _0x256702['getBoundingClientRect'](),
            _0x3c9e8d = _0x550a3c['getBoundingClientRect'](),
            _0x4637a9 = _0x3c9e8d['left'] - _0x5c651e['left'];
        _0x3f1dea['style']['left'] = _0x4637a9 + 'px';
    }
}