document['addEventListener']('DOMContentLoaded', function() {
    const _0x1d893c = document['getElementById']('platformConnectionsContainer'),
        _0x280b09 = document['getElementById']('platformOnboarding'),
        _0x261082 = document['getElementById']('connectFirstPlatformBtn');

    function _0x32130c() {
        return window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space/api';
    }
    const _0x570d44 = _0x32130c();
    console['log']('🎯\x20[platform-connections.js]\x20Initialized\x20with\x20API_BASE:', _0x570d44);
    async function _0x3e5605() {
        console['log']('🎯\x20[fetchConnectionStatus]\x20Fetching\x20connection\x20status...');
        try {
            const _0x79680 = await fetch(_0x570d44 + '/analytics/status', {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            console['log']('🎯\x20[fetchConnectionStatus]\x20Response\x20status:', _0x79680['status']);
            if (_0x79680['ok']) {
                const _0x44c1c4 = await _0x79680['json']();
                if (!_0x44c1c4 || typeof _0x44c1c4 !== 'object')
                    throw new Error('Invalid\x20response\x20structure');
                console['log']('🎯\x20[fetchConnectionStatus]\x20Connection\x20data:', _0x44c1c4), console['log']('🎯\x20[fetchConnectionStatus]\x20YouTube\x20field:', _0x44c1c4['youtube']), console['log']('🎯\x20[fetchConnectionStatus]\x20YouTube\x20connected:', _0x44c1c4['youtube']?.['connected']), console['log']('🎯\x20[fetchConnectionStatus]\x20analyticsManager\x20available:', !!window['analyticsManager']), _0x2a3ba3(_0x44c1c4), _0x44c1c4['youtube']?.['connected'] ? (console['log']('🎯\x20[fetchConnectionStatus]\x20YouTube\x20IS\x20connected!'), localStorage['setItem']('youtube_connected', 'true'), window['analyticsManager'] ? (console['log']('🎯\x20[fetchConnectionStatus]\x20Updating\x20analytics\x20manager...'), await window['analyticsManager']['loadAnalyticsData']()) : console['log']('🎯\x20[fetchConnectionStatus]\x20AnalyticsManager\x20not\x20available\x20yet,\x20will\x20load\x20on\x20next\x20init')) : console['log']('🎯\x20[fetchConnectionStatus]\x20YouTube\x20not\x20connected:', _0x44c1c4['youtube']);
            } else
                throw new Error('Endpoint\x20not\x20available');
        } catch (_0x2ffd29) {
            const _0x1ec8e1 = localStorage['getItem']('platform_connections');
            if (_0x1ec8e1)
                try {
                    const _0x5468b8 = JSON['parse'](_0x1ec8e1);
                    _0x2a3ba3(_0x5468b8);
                } catch (_0x265bd5) {
                    _0xc06b4a();
                }
            else
                _0xc06b4a();
        }
    }

    function _0x2a3ba3(_0x5e7112) {
        _0x1d893c['innerHTML'] = '';
        let _0x4ad455 = ![];
        if (!_0x5e7112 || typeof _0x5e7112 !== 'object') {
            console['error']('Invalid\x20statusData:', _0x5e7112), _0xc06b4a();
            return;
        }
        const _0x6f1030 = Object['values'](_0x5e7112)['filter'](_0x100945 => _0x100945 && typeof _0x100945 === 'object');
        _0x6f1030['forEach'](_0x542df4 => {
            if (!_0x542df4 || !_0x542df4['platform']) {
                console['warn']('Skipping\x20invalid\x20platform:', _0x542df4);
                return;
            }
            _0x4ad455 = !![];
            const _0x5dfeb7 = document['createElement']('div');
            _0x5dfeb7['className'] = 'settings-option\x20platform-connection-item', _0x5dfeb7['dataset']['platform'] = _0x542df4['platform']['toLowerCase'](), _0x5dfeb7['dataset']['connected'] = _0x542df4['connected'] ? 'true' : 'false', _0x5dfeb7['style']['cursor'] = _0x542df4['connected'] ? 'default' : 'pointer', _0x542df4['connected'] ? _0x5dfeb7['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-option-icon\x22>' + (_0x542df4['icon'] || '') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-name\x22>' + _0x542df4['platform'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-description\x22\x20style=\x22color:\x20#22c55e;\x22>Connected</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22disconnect-btn\x22\x20data-platform=\x22' + _0x542df4['platform']['toLowerCase']() + '\x22>Disconnect</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : _0x5dfeb7['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-option-icon\x22>' + (_0x542df4['icon'] || '') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-name\x22>' + _0x542df4['platform'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-description\x22\x20style=\x22color:\x20#999;\x22>Click\x20to\x20connect</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22background:\x20#0066ff;\x20color:\x20white;\x20border:\x20none;\x20padding:\x206px\x2012px;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x20font-size:\x2012px;\x20font-weight:\x20600;\x22>Connect</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x1d893c['appendChild'](_0x5dfeb7);
        }), _0x4ad455 ? (_0x280b09['style']['display'] = 'none', _0x1d893c['style']['display'] = 'block') : _0xc06b4a();
    }

    function _0xc06b4a() {
        _0x1d893c['style']['display'] = 'none', _0x280b09['style']['display'] = 'block';
    }
    window['connectYouTube'] = async function() {
        console['log']('🎬\x20[connectYouTube]\x20Connect\x20YouTube\x20clicked'), console['log']('🎬\x20[connectYouTube]\x20API_BASE:', _0x570d44);
        const _0x3a55dd = new Promise(_0x7a5c9 => {
            const _0x5ab246 = _0x45df95 => {
                console['log']('🎬\x20[connectYouTube]\x20Message\x20received\x20from\x20popup:', _0x45df95['data']), _0x45df95['data'] && _0x45df95['data']['type'] === 'YOUTUBE_AUTH_SUCCESS' && (console['log']('🎬\x20[connectYouTube]\x20YouTube\x20auth\x20success!\x20Cleaning\x20up\x20listener...'), window['removeEventListener']('message', _0x5ab246), _0x7a5c9(!![]));
            };
            window['addEventListener']('message', _0x5ab246), console['log']('🎬\x20[connectYouTube]\x20Message\x20listener\x20attached');
        });
        try {
            const _0x318dbe = _0x570d44 + '/analytics/youtube/auth';
            console['log']('🎬\x20[connectYouTube]\x20Fetching\x20from:', _0x318dbe);
            const _0x46dd52 = await fetch(_0x318dbe, {
                'method': 'POST',
                'headers': {
                    'Authorization': 'Bearer\x20' + token,
                    'Content-Type': 'application/json'
                }
            });
            console['log']('🎬\x20[connectYouTube]\x20Response\x20status:', _0x46dd52['status']);
            if (!_0x46dd52['ok']) {
                const _0xdfb211 = await _0x46dd52['json']()['catch'](() => ({
                    'error': 'An\x20unknown\x20server\x20error\x20occurred.'
                }));
                console['error']('🎬\x20[connectYouTube]\x20Backend\x20error:', _0xdfb211);
                throw new Error(_0xdfb211['error'] || 'HTTP\x20error!\x20status:\x20' + _0x46dd52['status']);
            }
            const _0x15b8b1 = await _0x46dd52['json']();
            console['log']('🎬\x20[connectYouTube]\x20Received\x20auth\x20data:', _0x15b8b1);
            if (_0x15b8b1['auth_url']) {
                console['log']('🎬\x20[connectYouTube]\x20Opening\x20auth\x20window\x20with\x20URL:', _0x15b8b1['auth_url']['substring'](0x0, 0x64) + '...');
                const _0x34ca5f = window['open'](_0x15b8b1['auth_url'], 'authWindow', 'width=600,height=700');
                console['log']('🎬\x20[connectYouTube]\x20Auth\x20window\x20opened:', !!_0x34ca5f);
                if (!_0x34ca5f) {
                    alert('Please\x20allow\x20popups\x20to\x20connect\x20YouTube'), console['error']('🎬\x20[connectYouTube]\x20Popup\x20was\x20blocked!');
                    return;
                }
                const _0x1db0a9 = new Promise(_0x81e8d5 => {
                    setTimeout(() => {
                        console['log']('🎬\x20[connectYouTube]\x20Message\x20timeout\x20-\x20checking\x20connection\x20status\x20anyway...'), _0x81e8d5(![]);
                    }, 0xbb8);
                });
                Promise['race']([
                    _0x3a55dd,
                    _0x1db0a9
                ])['then'](() => {
                    console['log']('🎬\x20[connectYouTube]\x20Auth\x20flow\x20completed,\x20fetching\x20connection\x20status...'), setTimeout(() => {
                        _0x3e5605();
                    }, 0x1f4);
                });
            } else
                console['error']('🎬\x20[connectYouTube]\x20No\x20auth_url\x20in\x20response'), alert('Failed\x20to\x20get\x20authentication\x20URL');
        } catch (_0x4652f6) {
            console['error']('🎬\x20[connectYouTube]\x20Connection\x20failed:', _0x4652f6), alert('Connection\x20failed:\x20' + _0x4652f6['message']);
        }
    };
    async function _0x9f1e5f(_0x5cdb7) {
        if (!_0x5cdb7 || typeof _0x5cdb7 !== 'string' || _0x5cdb7['length'] === 0x0) {
            console['error']('Invalid\x20platform\x20name');
            return;
        }
        const _0x1a7b5b = document['getElementById']('disconnectConfirmationModal'),
            _0x1f04f8 = document['getElementById']('confirmDisconnectBtn'),
            _0x119812 = document['getElementById']('disconnectConfirmationText'),
            _0x477c18 = _0x5cdb7['replace'](/[<>"']/g, '');
        _0x119812['textContent'] = 'Are\x20you\x20sure\x20you\x20want\x20to\x20disconnect\x20' + _0x477c18 + '?', _0x1a7b5b['classList']['add']('show');
        const _0x24df95 = async () => {
            _0x1f04f8['removeEventListener']('click', _0x24df95), _0x1a7b5b['classList']['remove']('show');
            const _0x226587 = await fetch(_0x570d44 + '/analytics/disconnect', {
                'method': 'POST',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON['stringify']({
                    'platform': _0x5cdb7
                })
            });
            _0x226587['ok'] ? (showNotification(_0x5cdb7 + '\x20disconnected\x20successfully', 'success'), _0x3e5605()) : showNotification('Failed\x20to\x20disconnect.\x20Please\x20try\x20again.', 'error');
        };
        _0x1f04f8['addEventListener']('click', _0x24df95);
    }
    _0x261082['addEventListener']('click', function() {
        console['log']('connectFirstPlatformBtn\x20clicked'), window['connectYouTube']();
    });
    _0x261082 && _0xc06b4a();
    _0x1d893c['addEventListener']('click', _0xbc65bb => {
        console['log']('Clicked\x20on\x20connections\x20container', _0xbc65bb['target']);
        const _0x4d1119 = _0xbc65bb['target']['closest']('.disconnect-btn'),
            _0x33d983 = _0xbc65bb['target']['closest']('.platform-connection-item');
        if (_0x4d1119)
            console['log']('Disconnect\x20button\x20clicked\x20for', _0x4d1119['dataset']['platform']), _0x9f1e5f(_0x4d1119['dataset']['platform']);
        else {
            if (_0x33d983 && _0x33d983['dataset']['connected'] === 'false') {
                const _0x5e6910 = _0x33d983['dataset']['platform'];
                console['log']('Connection\x20item\x20clicked\x20for\x20platform:', _0x5e6910), _0x5e6910 === 'youtube' && (console['log']('Triggering\x20YouTube\x20connect...'), window['connectYouTube']());
            }
        }
    });
    const _0x5c74d1 = document['getElementById']('getStartedBadge');
    if (_0x5c74d1)
        _0x5c74d1['addEventListener']('click', function(_0x4d1b4d) {
            _0x4d1b4d['preventDefault'](), _0x4d1b4d['stopPropagation']();
            const _0x57daf3 = document['getElementById']('userMenuPanel'),
                _0x10716a = document['getElementById']('userMenuBackdrop');
            _0x57daf3 && _0x57daf3['classList']['remove']('active');
            _0x10716a && _0x10716a['classList']['remove']('active');
            if (window['setupModal'])
                window['setupModal']['openModal'](), console['log']('Opened\x20onboarding\x20modal');
            else {}
        });
    else {}
    _0x3e5605(), console['log']('\x20Checking\x20for\x20payment\x20success...');
    const _0x254617 = sessionStorage['getItem']('paymentSuccess');
    if (_0x254617) {
        console['log']('\x20Payment\x20detected\x20in\x20sessionStorage');
        try {
            const _0x57a36a = JSON['parse'](_0x254617);
            console['log']('\x20Plan\x20upgraded\x20to:', _0x57a36a['plan']), showPaymentSuccessModal(), createConfetti(), window['clipsStudio'] && (console['log']('📊\x20Updating\x20storage\x20display...'), clipsStudio['loadAndDisplayStorageInfo']()), sessionStorage['removeItem']('paymentSuccess');
        } catch (_0x3ae579) {
            console['error']('❌\x20Error\x20parsing\x20payment\x20success\x20data:', _0x3ae579);
        }
    } else
        console['log']('ℹ️\x20No\x20payment\x20success\x20data\x20found');
    const _0x261e63 = document['getElementById']('DeleteALLBtn');
    _0x261e63 && _0x261e63['addEventListener']('click', () => {
        const _0x3009b6 = document['getElementById']('processingList'),
            _0x5cf259 = _0x3009b6['querySelectorAll']('.processing-item:not(.processing)');
        if (_0x5cf259['length'] === 0x0) {
            alert('No\x20completed\x20or\x20failed\x20items\x20to\x20delete.');
            return;
        }
        if (confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20' + _0x5cf259['length'] + '\x20item(s)?\x20This\x20action\x20cannot\x20be\x20undone.')) {
            _0x5cf259['forEach'](_0x6c6d42 => {
                _0x6c6d42['remove']();
            });
            const _0x532d37 = _0x3009b6['querySelectorAll']('.processing-item'),
                _0x446430 = document['getElementById']('emptyProcessingState');
            _0x532d37['length'] === 0x0 && _0x446430 && (_0x446430['style']['display'] = 'block');
        }
    });
    const _0x13c8ba = document['getElementById']('processingList'),
        _0x34eeb4 = document['getElementById']('emptyProcessingState');
    if (_0x13c8ba && _0x34eeb4) {
        const _0x2248a1 = new MutationObserver(() => {
            const _0x316a23 = _0x13c8ba['querySelector']('.processing-item');
            _0x34eeb4['style']['display'] = _0x316a23 ? 'none' : 'flex';
        });
        _0x2248a1['observe'](_0x13c8ba, {
            'childList': !![]
        });
    }
});