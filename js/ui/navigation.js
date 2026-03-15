function _0x43f8c8() {
    const _0x316ac2 = document['querySelectorAll']('.nav-item[data-target]'),
        _0x1087ad = document['getElementById']('dashboardContainer'),
        _0xc86bc4 = document['getElementById']('portalContainer'),
        _0x30e196 = document['getElementById']('clipsContainer'),
        _0x1e1ae2 = document['getElementById']('customEditorContainer'),
        _0x5dd333 = document['querySelector']('.input-section');

    function _0x3ed44f() {
        _0x1087ad && (_0x1087ad['style']['display'] = 'none', _0x1087ad['classList']['remove']('active')), _0xc86bc4 && (_0xc86bc4['style']['display'] = 'none', _0xc86bc4['classList']['remove']('active')), _0x30e196 && (_0x30e196['style']['display'] = 'none', _0x30e196['classList']['remove']('active')), _0x1e1ae2 && (_0x1e1ae2['style']['display'] = 'none', _0x1e1ae2['classList']['remove']('active'));
    }

    function _0x37e808(_0xa599d7) {
        _0x316ac2['forEach'](_0x3821f => {
            _0x3821f['classList']['remove']('active'), _0x3821f['getAttribute']('data-target') === _0xa599d7 && _0x3821f['classList']['add']('active');
        });
    }
    _0x3ed44f();
    const _0x43c3e1 = localStorage['getItem']('currentNavigationTarget');
    let _0x288dfd = 'dashboard';
    _0x43c3e1 && [
        'dashboard',
        'portal',
        'clips',
        'custom'
    ]['includes'](_0x43c3e1) && (_0x288dfd = _0x43c3e1);
    if (_0x288dfd === 'dashboard' && _0x1087ad)
        _0x1087ad['style']['display'] = 'block', _0x1087ad['classList']['add']('active'), _0x37e808('Dashboard'), setTimeout(() => {
            window['analyticsManager'] && window['analyticsManager']['updateCharts']();
        }, 0x64);
    else {
        if (_0x288dfd === 'portal' && _0xc86bc4)
            _0xc86bc4['style']['display'] = 'block', _0xc86bc4['classList']['add']('active'), _0x37e808('Portal');
        else {
            if (_0x288dfd === 'clips' && _0x30e196)
                _0x30e196['style']['display'] = 'block', _0x30e196['classList']['add']('active'), _0x37e808('Clips'), typeof window['clipsStudio'] !== 'undefined' && window['clipsStudio'] && !window['clipsStudio']['initialized'] && window['clipsStudio']['init']();
            else {
                if (_0x288dfd === 'custom' && _0x1e1ae2) {
                    _0x1e1ae2['style']['display'] = 'block', _0x1e1ae2['classList']['add']('active'), _0x37e808('Custom');
                    if (_0x5dd333)
                        _0x5dd333['style']['display'] = 'none';
                } else {
                    _0x1087ad && (_0x1087ad['style']['display'] = 'block', _0x1087ad['classList']['add']('active'));
                    _0x37e808('Dashboard');
                    if (_0x5dd333)
                        _0x5dd333['style']['display'] = 'none';
                }
            }
        }
    }
    _0x5dd333 && (_0x5dd333['style']['cssText'] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', _0x5dd333['classList']['remove']('is-first-prompt'));
    _0x316ac2['forEach'](_0x5b8e5e => {
        _0x5b8e5e['addEventListener']('click', _0xaab717 => {
            _0xaab717['preventDefault']();
            const _0x3f7f1a = _0x5b8e5e['getAttribute']('data-target') || '',
                _0x50d0a0 = String(_0x3f7f1a)['toLowerCase']();
            console['log']('Navigation\x20clicked:', _0x3f7f1a), _0x37e808(_0x3f7f1a), _0x3ed44f();
            _0x5dd333 && (_0x5dd333['style']['cssText'] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', _0x5dd333['classList']['remove']('is-first-prompt'));
            if (_0x50d0a0 === 'dashboard') {
                localStorage['setItem']('currentNavigationTarget', 'dashboard'), console['log']('Switching\x20to\x20dashboard\x20view');
                _0x1087ad && (_0x1087ad['style']['display'] = 'block', _0x1087ad['classList']['add']('active'), window['analyticsManager'] && setTimeout(() => {
                    window['analyticsManager']['updateCharts']();
                }, 0x32));
                if (_0x5dd333) {
                    _0x5dd333['style']['display'] = 'none';
                    try {
                        if (typeof window['dockInputInstantly'] === 'function')
                            window['dockInputInstantly'](!![]);
                    } catch (_0x3166ae) {
                        console['error']('Error\x20docking\x20input:', _0x3166ae);
                    }
                }
            } else {
                if (_0x50d0a0 === 'portal') {
                    localStorage['setItem']('currentNavigationTarget', 'portal'), console['log']('Switching\x20to\x20portal\x20view');
                    _0xc86bc4 && (_0xc86bc4['style']['display'] = 'block', _0xc86bc4['classList']['add']('active'));
                    if (_0x5dd333) {
                        _0x5dd333['style']['cssText'] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', _0x5dd333['classList']['remove']('is-first-prompt');
                        try {
                            if (typeof window['dockInputInstantly'] === 'function')
                                window['dockInputInstantly'](!![]);
                        } catch (_0x4dc8a4) {
                            console['error']('Error\x20docking\x20input:', _0x4dc8a4);
                        }
                    }
                } else {
                    if (_0x50d0a0 === 'clips' || _0x50d0a0 === 'clips-studio' || _0x50d0a0 === 'clipscontainer') {
                        localStorage['setItem']('currentNavigationTarget', 'clips'), console['log']('Switching\x20to\x20clips\x20view');
                        _0x30e196 && (_0x30e196['style']['display'] = 'block', _0x30e196['classList']['add']('active'), typeof window['clipsStudio'] !== 'undefined' && window['clipsStudio'] && !window['clipsStudio']['initialized'] && window['clipsStudio']['init']());
                        if (_0x5dd333) {
                            _0x5dd333['style']['cssText'] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', _0x5dd333['classList']['remove']('is-first-prompt');
                            try {
                                if (typeof window['dockInputInstantly'] === 'function')
                                    window['dockInputInstantly'](!![]);
                            } catch (_0x56a49e) {
                                console['error']('Error\x20docking\x20input:', _0x56a49e);
                            }
                        }
                    } else {
                        if (_0x50d0a0 === 'custom-edit' || _0x50d0a0 === 'custom') {
                            localStorage['setItem']('currentNavigationTarget', 'custom'), console['log']('Switching\x20to\x20custom\x20editor\x20view');
                            _0x1e1ae2 && (_0x1e1ae2['style']['display'] = 'block', _0x1e1ae2['classList']['add']('active'));
                            if (_0x5dd333) {
                                _0x5dd333['style']['cssText'] = 'display:\x20none\x20!important;\x20position:\x20absolute\x20!important;\x20visibility:\x20hidden\x20!important;\x20z-index:\x20-10000\x20!important;\x20pointer-events:\x20none\x20!important;', _0x5dd333['classList']['remove']('is-first-prompt');
                                try {
                                    if (typeof window['dockInputInstantly'] === 'function')
                                        window['dockInputInstantly'](!![]);
                                } catch (_0x5a7728) {
                                    console['error']('Error\x20docking\x20input:', _0x5a7728);
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    const _0x2158a6 = document['getElementById']('clips-toggle');
    _0x2158a6 && _0x2158a6['addEventListener']('click', function(_0x13a689) {
        _0x13a689['preventDefault'](), _0x13a689['stopPropagation']();
        const _0x44f99a = document['getElementById']('clips-submenu'),
            _0x143601 = this['querySelector']('.chevron-icon');
        if (_0x44f99a)
            _0x44f99a['classList']['toggle']('open');
        if (_0x143601)
            _0x143601['classList']['toggle']('rotated');
        if (!_0x44f99a || !_0x44f99a['contains'](_0x13a689['target'])) {
            const _0x32d9f1 = document['getElementById']('clipsContainer'),
                _0x3c32b2 = document['querySelector']('.input-section');
            document['querySelectorAll']('.dashboard-container,\x20.portal-container')['forEach'](_0x2a5755 => {
                _0x2a5755['style']['display'] = 'none', _0x2a5755['classList']['remove']('active');
            });
            _0x32d9f1 && (_0x32d9f1['style']['display'] = 'block', _0x32d9f1['classList']['add']('active'), typeof window['clipsStudio'] !== 'undefined' && window['clipsStudio'] && !window['clipsStudio']['initialized'] && window['clipsStudio']['init']());
            if (_0x3c32b2) {
                _0x3c32b2['style']['display'] = 'none';
                try {
                    if (typeof window['dockInputInstantly'] === 'function')
                        window['dockInputInstantly'](!![]);
                } catch (_0x213711) {
                    console['error']('Error\x20docking\x20input:', _0x213711);
                }
            }
            _0x37e808('clips');
        }
    });
    const _0x44d551 = document['querySelectorAll']('.clips-submenu\x20.nav-item');
    _0x44d551['forEach'](_0x305135 => {
        _0x305135['addEventListener']('click', function(_0x510ad5) {
            _0x510ad5['preventDefault']();
            const _0x206e73 = this['getAttribute']('data-target');
            if (_0x206e73 === 'clips-studio') {
                const _0x18a7c2 = document['getElementById']('clipsContainer'),
                    _0x3d1c90 = document['querySelector']('.input-section');
                document['querySelectorAll']('.dashboard-container,\x20.portal-container')['forEach'](_0x26c39f => {
                    _0x26c39f['style']['display'] = 'none', _0x26c39f['classList']['remove']('active');
                });
                _0x18a7c2 && (_0x18a7c2['style']['display'] = 'block', _0x18a7c2['classList']['add']('active'), typeof window['clipsStudio'] !== 'undefined' && window['clipsStudio'] && !window['clipsStudio']['initialized'] && window['clipsStudio']['init']());
                if (_0x3d1c90) {
                    _0x3d1c90['style']['display'] = 'none';
                    try {
                        if (typeof window['dockInputInstantly'] === 'function')
                            window['dockInputInstantly'](!![]);
                    } catch (_0x358b30) {
                        console['error']('Error\x20docking\x20input:', _0x358b30);
                    }
                }
                _0x37e808('clips');
                const _0x414458 = document['getElementById']('clips-submenu'),
                    _0x2051e8 = document['querySelector']('#clips-toggle\x20.chevron-icon');
                if (_0x414458)
                    _0x414458['classList']['remove']('open');
                if (_0x2051e8)
                    _0x2051e8['classList']['remove']('rotated');
            }
        });
    }), document['addEventListener']('click', function(_0x2c7985) {
        const _0x4fe277 = document['getElementById']('clips-toggle'),
            _0x562c4f = document['getElementById']('clips-submenu');
        if (_0x562c4f && _0x4fe277 && !_0x4fe277['contains'](_0x2c7985['target']) && !_0x562c4f['contains'](_0x2c7985['target'])) {
            _0x562c4f['classList']['remove']('open');
            const _0x28a433 = _0x4fe277['querySelector']('.chevron-icon');
            if (_0x28a433)
                _0x28a433['classList']['remove']('rotated');
        }
    });
    const _0x20183a = document['querySelector']('.nav-item[data-target=\x22Portal\x22]');
    _0x20183a && _0x20183a['addEventListener']('click', function(_0x431c57) {
        _0x431c57['preventDefault'](), console['log']('Portal\x20clicked');
        const _0x5b5463 = document['getElementById']('portalContainer'),
            _0x2d8528 = document['getElementById']('dashboardContainer'),
            _0x24368e = document['getElementById']('clipsContainer'),
            _0x82d698 = document['querySelector']('.input-section');
        _0x2d8528 && (_0x2d8528['style']['display'] = 'none', _0x2d8528['classList']['remove']('active')), _0x24368e && (_0x24368e['style']['display'] = 'none', _0x24368e['classList']['remove']('active')), _0x82d698 && (_0x82d698['style']['display'] = 'none'), _0x5b5463 && (_0x5b5463['style']['display'] = 'block', _0x5b5463['classList']['add']('active')), _0x37e808('Portal');
    }), document['addEventListener']('keydown', _0x2567b2 => {
        if ((_0x2567b2['ctrlKey'] || _0x2567b2['metaKey']) && _0x2567b2['key'] === 'k') {
            _0x2567b2['preventDefault']();
            const _0x305863 = document['querySelector']('.sidebar');
            if (_0x305863) {
                _0x305863['classList']['toggle']('expanded');
                const _0x3cadc3 = _0x305863['classList']['contains']('expanded');
                localStorage['setItem']('sidebarExpanded', _0x3cadc3);
            }
        }
    });
}
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x43f8c8) : _0x43f8c8();
typeof module !== 'undefined' && module['exports'] && (module['exports'] = {
    'initNavigation': _0x43f8c8
});