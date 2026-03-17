let _0x464df4 = null;

function _0x739e78(_0x3523ed) {
    const _0x3b6bf3 = document['getElementById']('processUrlBtn');
    if (!_0x3b6bf3)
        return;
    _0x464df4 && clearInterval(_0x464df4);
    let _0x303f88 = Math['max'](0x0, _0x3523ed);
    const _0x212bbf = '<i\x20class=\x22fas\x20fa-arrow-right\x22></i>';
    _0x3b6bf3['disabled'] = !![], _0x3b6bf3['classList']['add']('is-generating'), _0x3b6bf3['style']['opacity'] = '0.5', _0x3b6bf3['style']['cursor'] = 'not-allowed', _0x3b6bf3['innerHTML'] = _0x303f88 + 's', _0x3b6bf3['style']['fontSize'] = '0.85em', _0x464df4 = setInterval(() => {
        _0x303f88--, _0x303f88 > 0x0 ? _0x3b6bf3['innerHTML'] = _0x303f88 + 's' : (clearInterval(_0x464df4), _0x464df4 = null, _0x3b6bf3['disabled'] = ![], _0x3b6bf3['classList']['remove']('is-generating'), _0x3b6bf3['style']['opacity'] = '1', _0x3b6bf3['style']['cursor'] = 'pointer', _0x3b6bf3['innerHTML'] = _0x212bbf, _0x3b6bf3['style']['fontSize'] = '1em');
    }, 0x3e8);
}
const _0x3ccd96 = document['getElementById']('solisWorkspacePanel'),
    _0x45ce66 = _0x3ccd96?.['querySelector']('.solis-close-btn'),
    _0x575b52 = document['getElementById']('appContainer'),
    _0x105b66 = document['querySelector']('.sidebar'),
    _0x4605d4 = document['getElementById']('userProfile'),
    _0x688d2f = document['getElementById']('userMenu'),
    _0x14bc7f = document['getElementById']('settingsBtn'),
    _0x4a8a3c = document['getElementById']('settingsPanel'),
    _0x1b3cc1 = document['getElementById']('closeSettings'),
    _0x2d297f = document['getElementById']('darkModeSettingsToggle'),
    _0x40877a = document['getElementById']('upgradeModal'),
    _0x23b1cb = document['getElementById']('closeUpgrade'),
    _0x5b02be = document['getElementById']('upgradeSettingsBtn'),
    _0x46d53b = document['querySelector']('.token-count'),
    _0x5ce4ea = document['querySelectorAll']('.nav-item'),
    _0xb7bf37 = document['getElementById']('signInBtn'),
    _0x526d88 = document['querySelector']('.nav-item.sign-in');
let _0x5dd870 = ![],
    _0x14ad9b = null,
    _0x41ee86 = [],
    _0x1de81c = ![],
    _0x4f96a8 = 'light',
    _0x4df7fe = 0x5dc,
    _0x574ddc = null,
    _0x3a262d = null,
    _0x227775 = [],
    _0x280151 = null,
    _0x48f244 = 0x0,
    _0x30e8e8 = null,
    _0x31d0b6 = 'minecraft_1',
    _0x1d25cf = [];

function _0x21018f(_0x25df5d) {
    _0x25df5d && (_0x25df5d['preventDefault'](), _0x25df5d['stopPropagation']());
    const _0x3b3d7 = document['getElementById']('navWrapper');
    if (!_0x3b3d7)
        return;
    const _0x135a4d = !_0x3b3d7['classList']['contains']('collapsed');
    if (_0x135a4d) {
        const _0xbcf386 = _0x3b3d7['querySelectorAll']('.nav-item:not(.nav-collapse-toggle)');
        _0xbcf386['forEach']((_0x129877, _0x4e3d29) => {
            _0x129877['style']['transitionDelay'] = _0x4e3d29 * 0x1e + 'ms';
        }), _0x3b3d7['classList']['add']('collapsed'), setTimeout(() => _0xbcf386['forEach'](_0x578800 => _0x578800['style']['transitionDelay'] = ''), 0x190);
    } else {
        _0x3b3d7['classList']['remove']('collapsed');
        const _0x36e7dc = _0x3b3d7['querySelectorAll']('.nav-item:not(.nav-collapse-toggle)');
        _0x36e7dc['forEach']((_0x42d6ec, _0x5c8cc2) => {
            _0x42d6ec['style']['transitionDelay'] = _0x5c8cc2 * 0x28 + 'ms';
        }), setTimeout(() => _0x36e7dc['forEach'](_0x1448f1 => _0x1448f1['style']['transitionDelay'] = ''), 0x190);
    }
}

function _0x2f8351(_0x3ad0cf) {
    _0x3ad0cf['preventDefault'](), _0x3ad0cf['stopPropagation']();
    const _0x3d277d = document['getElementById']('clipsExpansionActions');
    _0x3d277d && _0x3d277d['classList']['toggle']('expanded');
}

function _0x3046ed() {
    const _0x111d6d = document['getElementById']('clipsExpansionActions');
    _0x111d6d && _0x111d6d['classList']['remove']('expanded');
}

function _0x2935ce() {
    _0x3046ed();
    const _0xd4418f = document['querySelector']('[data-tab=\x22templates\x22]');
    if (_0xd4418f)
        _0xd4418f['click']();
    else {}
}

function _0x37dbdf() {
    _0x3046ed();
    const _0x1a5fc6 = document['querySelector']('.chips-nav-item');
    _0x1a5fc6 && handleNav(_0x1a5fc6, 0x3);
}

function _0x53a558() {
    _0x3046ed();
    const _0x3afc62 = document['querySelector']('[data-tab=\x22library\x22]');
    _0x3afc62 && _0x3afc62['click']();
}

function _0x5e0787() {
    const _0x2a23ea = document['querySelector']('.input-section'),
        _0x4ea3df = _0x2a23ea ? _0x2a23ea['querySelector']('.input-container') : null,
        _0x5a58dd = parseInt(localStorage['getItem']('sidebarActiveIndex') || '0');
    _0x4ea3df && _0x4ea3df['classList']['remove']('first-prompt', 'animate-down', 'animate-up'), _0x2a23ea && (_0x2a23ea['classList']['remove']('is-first-prompt'), _0x5a58dd === 0x0 ? _0x2a23ea['style']['cssText'] = 'display:\x20flex\x20!important;\x20visibility:\x20visible\x20!important;\x20opacity:\x201\x20!important;\x20pointer-events:\x20all\x20!important;\x20z-index:\x201000\x20!important;' : _0x2a23ea['style']['cssText'] = 'display:\x20none\x20!important;\x20visibility:\x20hidden\x20!important;\x20opacity:\x200\x20!important;\x20pointer-events:\x20none\x20!important;\x20z-index:\x20-10000\x20!important;');
}
window['dockInputInstantly'] = _0x5e0787;

function _0x433d53() {
    _0x4dd2b3('[Auth]\x20Initializing\x20authentication...'), _0x1e2245()['then'](_0x2b31c5 => {
        _0x280151 ? (_0x4dd2b3('[Auth]\x20User\x20authenticated:', _0x280151['email']), typeof updateProfileButton === 'function' && updateProfileButton()) : (_0x4dd2b3('[Auth]\x20User\x20not\x20authenticated,\x20showing\x20guest\x20UI'), _0x174c78());
    })['catch'](_0x1c1cf4 => {
        _0x4dd2b3('[Auth]\x20Unexpected\x20error\x20during\x20initialization:', _0x1c1cf4), _0x174c78();
    }), _0x4dd2b3('[Auth]\x20Initialization\x20started');
}

function _0x15078f(_0x4d96d9) {
    if (!_0x4d96d9)
        return 'Unknown\x20error';
    const _0x339c3d = String(_0x4d96d9['message'] || _0x4d96d9)['trim'](),
        _0x461a09 = [
            'timeout',
            'network',
            'failed',
            'unauthorized',
            'not\x20found',
            'invalid',
            'error'
        ],
        _0x15fc5d = _0x339c3d['toLowerCase']();
    if (_0x461a09['some'](_0x11e7b9 => _0x15fc5d['includes'](_0x11e7b9)))
        return _0x339c3d['substring'](0x0, 0x64);
    return 'An\x20error\x20occurred';
}

function _0x53f5ab(_0x1c0468, _0x298642 = 0x3e8, _0x568cce = 'input') {
    if (typeof _0x1c0468 !== 'string')
        return {
            'valid': ![],
            'error': _0x568cce + '\x20must\x20be\x20a\x20string'
        };
    if (_0x1c0468['length'] > _0x298642)
        return {
            'valid': ![],
            'error': _0x568cce + '\x20exceeds\x20' + _0x298642 + '\x20character\x20limit'
        };
    if (_0x1c0468['length'] === 0x0)
        return {
            'valid': ![],
            'error': _0x568cce + '\x20cannot\x20be\x20empty'
        };
    return {
        'valid': !![],
        'value': _0x1c0468['trim']()
    };
}

function _0x5b1131(_0x5ed39c, _0x5d59ea = 0x200) {
    const _0x532ec2 = _0x53f5ab(_0x5ed39c, _0x5d59ea, 'URL');
    if (!_0x532ec2['valid'])
        return _0x532ec2;
    try {
        const _0xedac02 = _0x532ec2['value']['startsWith']('http') ? _0x532ec2['value'] : 'https://' + _0x532ec2['value'],
            _0x254689 = new URL(_0xedac02);
        return {
            'valid': !![],
            'value': _0x532ec2['value']
        };
    } catch (_0xbc9092) {
        return {
            'valid': ![],
            'error': 'Invalid\x20URL\x20format'
        };
    }
}

function _0x596ec5() {
    const _0x3e0941 = document['querySelector']('meta[name=\x22csrf-token\x22]')?.['getAttribute']('content');
    if (!_0x3e0941 || _0x3e0941 === 'placeholder' || _0x3e0941['length'] < 0x20) {
        _0x4dd2b3('⚠️\x20WARNING:\x20CSRF\x20token\x20is\x20missing\x20or\x20invalid\x20(<32\x20chars).\x20Ensure:'), _0x4dd2b3('\x20\x20\x201.\x20Backend\x20sends\x20valid\x20CSRF\x20token\x20in\x20meta\x20tag'), _0x4dd2b3('\x20\x20\x202.\x20Backend\x20sets\x20SameSite=Strict\x20on\x20auth\x20cookie'), _0x4dd2b3('\x20\x20\x203.\x20Backend\x20validates\x20CSRF\x20token\x20on\x20state-changing\x20requests');
        const _0x12c93e = 'XSRF-TOKEN=',
            _0x3516e9 = decodeURIComponent(document['cookie']),
            _0xf9e075 = _0x3516e9['split'](';');
        for (let _0x30c35c of _0xf9e075) {
            _0x30c35c = _0x30c35c['trim']();
            if (_0x30c35c['startsWith'](_0x12c93e)) {
                const _0x4923da = _0x30c35c['substring'](_0x12c93e['length']);
                if (_0x4923da && _0x4923da['length'] >= 0x20 && _0x4923da !== 'placeholder')
                    return _0x4923da;
            }
        }
        return _0x4dd2b3('⚠️\x20CSRF\x20token\x20not\x20properly\x20configured\x20in\x20meta\x20tag\x20or\x20cookies'), '';
    }
    return _0x3e0941;
}

function _0x5db2ba(_0x209fcf = !![]) {
    const _0x5bb24c = {
        'Content-Type': 'application/json'
    };
    if (_0x209fcf) {
        const _0x94caf5 = _0x596ec5();
        _0x94caf5 && (_0x5bb24c['X-CSRF-Token'] = _0x94caf5);
    }
    return _0x5bb24c;
}
async function _0x4f7a1e() {
    try {
        const _0xede1c4 = await fetch(API_BASE_URL + '/auth/csrf-token', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
        if (!_0xede1c4['ok'])
            return _0x4dd2b3('⚠️\x20Failed\x20to\x20fetch\x20CSRF\x20token:', _0xede1c4['status']), ![];
        const _0x20bf15 = await _0xede1c4['json']();
        if (_0x20bf15['csrf_token'] && _0x20bf15['csrf_token']['length'] >= 0x20) {
            const _0x223ffc = document['querySelector']('meta[name=\x22csrf-token\x22]');
            if (_0x223ffc)
                return _0x223ffc['setAttribute']('content', _0x20bf15['csrf_token']), _0x4dd2b3('✅\x20CSRF\x20token\x20initialized\x20successfully'), !![];
        }
    } catch (_0x29d6cd) {
        _0x4dd2b3('Error\x20initializing\x20CSRF\x20token:', _0x29d6cd);
    }
    return ![];
}
document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x4f7a1e) : _0x4f7a1e();
async function _0x1e2245() {
    try {
        const _0x23cf5a = await fetch(API_BASE_URL + '/auth/verify', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
        if (!_0x23cf5a['ok']) {
            _0x4dd2b3('Auth\x20verification\x20error:', _0x23cf5a['status']);
            throw new Error('Authentication\x20verification\x20failed');
        }
        const _0x8a632f = await _0x23cf5a['json']();
        _0x280151 = _0x8a632f['user'], window['currentUser'] = _0x280151, _0x22bf0a(), typeof updateProfileButton === 'function' && setTimeout(() => updateProfileButton(), 0x0), typeof updateMenuUserInfo === 'function' && updateMenuUserInfo(), typeof updateProfileDropdown === 'function' && updateProfileDropdown(_0x280151)['catch'](_0x1bd1cb => console['warn']('Profile\x20dropdown\x20update\x20error:', _0x1bd1cb)), _0xc5f94d(), await _0x1942a1();
    } catch (_0x27cad8) {
        _0x4dd2b3('[Auth]\x20Verification\x20error:', _0x27cad8['message']);
        _0x27cad8['message'] && (_0x27cad8['message']['includes']('Token\x20invalid') || _0x27cad8['message']['includes']('401') || _0x27cad8['message']['includes']('403')) ? (_0x4dd2b3('[Auth]\x20Token\x20is\x20invalid,\x20redirecting\x20to\x20login\x20in\x202\x20seconds'), _0x280151 = null, window['currentUser'] = null, setTimeout(() => {
            window['location']['href'] = '/login.html';
        }, 0x7d0)) : (_0x4dd2b3('[Auth]\x20Network\x20error,\x20allowing\x20guest\x20access:', _0x27cad8['message']), _0x174c78(), typeof _0x4c4d4d === 'function' && _0x4c4d4d('⚠️\x20Could\x20not\x20verify\x20session.\x20Continuing\x20in\x20guest\x20mode.', 'warning'));
        throw _0x27cad8;
    }
}

function _0x22bf0a() {
    const _0x256e90 = document['querySelector']('.user-name'),
        _0x5dce78 = document['querySelector']('.user-email'),
        _0x7788b8 = document['querySelector']('.user-avatar');
    if (_0x256e90)
        _0x256e90['textContent'] = _0x280151['name'];
    if (_0x5dce78)
        _0x5dce78['textContent'] = _0x280151['email'];
    if (_0x7788b8) {
        if (_0x280151['picture']) {
            const _0x332280 = document['createElement']('img');
            _0x332280['src'] = _0x280151['picture'], _0x332280['alt'] = _0x280151['name'], _0x332280['style']['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20border-radius:\x2050%;\x20object-fit:\x20cover;', _0x7788b8['innerHTML'] = '', _0x7788b8['appendChild'](_0x332280);
        } else
            _0x7788b8['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2\x2021a8\x208\x200\x200\x201\x2011.873-7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2210\x22\x20cy=\x228\x22\x20r=\x225\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m17\x2017\x205\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m22\x2017-5\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
    }
    if (_0x526d88)
        _0x526d88['style']['display'] = 'none';
    _0xb7bf37 && (_0xb7bf37['innerHTML'] = '<i\x20class=\x22fas\x20fa-sign-out-alt\x22></i><span>Sign\x20out</span>', _0xb7bf37['onclick'] = _0x1a5a20), _0x47dbd1();
}

function _0x174c78() {
    const _0x25959b = document['querySelector']('.user-name'),
        _0x5bfc91 = document['querySelector']('.user-email'),
        _0x482b80 = document['querySelector']('.user-avatar');
    if (_0x25959b)
        _0x25959b['textContent'] = 'Guest\x20User';
    if (_0x5bfc91)
        _0x5bfc91['textContent'] = 'Sign\x20in\x20to\x20continue';
    _0x482b80 && (_0x482b80['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2\x2021a8\x208\x200\x200\x201\x2011.873-7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2210\x22\x20cy=\x228\x22\x20r=\x225\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m17\x2017\x205\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m22\x2017-5\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
    if (_0x526d88)
        _0x526d88['style']['display'] = 'flex';
    _0xb7bf37 && (_0xb7bf37['innerHTML'] = '<i\x20class=\x22fas\x20fa-sign-in\x22></i><span>Sign\x20in</span>', _0xb7bf37['onclick'] = _0x3c8d02), _0xfe0d05();
}

function _0x47dbd1() {
    const _0x2d65a3 = document['querySelector']('.settings-option\x20.option-name'),
        _0xba3509 = document['querySelector']('.settings-option\x20.option-description');
    if (_0x2d65a3)
        _0x2d65a3['textContent'] = 'Account\x20Settings';
    if (_0xba3509)
        _0xba3509['textContent'] = 'Signed\x20in\x20as\x20' + _0x280151['email'];
    _0x38d46c();
}
async function _0x38d46c() {
    try {
        const _0x7f2984 = await fetch(API_BASE_URL + '/api/subscription?t=' + Date['now'](), {
            'method': 'GET',
            'headers': _0x5db2ba(),
            'credentials': 'include',
            'cache': 'no-store'
        });
        if (!_0x7f2984['ok'])
            throw new Error('Failed\x20to\x20fetch\x20subscription\x20info');
        const _0x3cbf88 = await _0x7f2984['json']();
        if (_0x3cbf88['success'] && _0x3cbf88['subscription']) {
            const _0x2e42d8 = _0x3cbf88['subscription'];
            window['tier'] = _0x2e42d8['plan'];
            const _0x595add = document['querySelectorAll']('.settings-option');
            _0x595add['forEach'](_0x2aa5f5 => {
                const _0x3bdd5e = _0x2aa5f5['querySelector']('.option-name');
                if (_0x3bdd5e && _0x3bdd5e['textContent'] === 'Subscription\x20Status') {
                    const _0x5699dc = _0x2aa5f5['querySelector']('.option-description');
                    if (_0x5699dc) {
                        const _0x5ad958 = _0x2e42d8['plan_name'] + '\x20Plan\x20-\x20' + _0x2e42d8['videos_per_day_limit'] + '\x20videos/day,\x20' + _0x2e42d8['storage_limit_gb'] + 'GB\x20storage';
                        _0x5699dc['textContent'] = _0x5ad958;
                    }
                }
                if (_0x3bdd5e && _0x3bdd5e['textContent'] === 'Current\x20Plan') {
                    const _0x2a94e7 = _0x2aa5f5['querySelector']('.option-description');
                    _0x2a94e7 && (_0x2a94e7['textContent'] = _0x2e42d8['plan_name']);
                }
            });
        }
    } catch (_0x59268d) {
        const _0x34a072 = document['querySelectorAll']('.settings-option');
        _0x34a072['forEach'](_0x3807ae => {
            const _0x1f92c3 = _0x3807ae['querySelector']('.option-name');
            if (_0x1f92c3 && _0x1f92c3['textContent'] === 'Subscription\x20Status') {
                const _0x1e8f37 = _0x3807ae['querySelector']('.option-description');
                _0x1e8f37 && (_0x1e8f37['textContent'] = 'Free\x20Plan\x20-\x20Limited\x20access');
            }
        });
    }
}

function _0xfe0d05() {
    const _0x2007e3 = document['querySelector']('.settings-option\x20.option-name'),
        _0x4b73c5 = document['querySelector']('.settings-option\x20.option-description');
    if (_0x2007e3)
        _0x2007e3['textContent'] = 'Sign\x20in?';
    if (_0x4b73c5)
        _0x4b73c5['textContent'] = 'Want\x20to\x20unlock\x20full\x20feature\x20access?\x20Sign\x20in\x20today';
}

function _0x3c8d02() {
    window['location']['href'] = '/login.html';
}

function _0x1a5a20() {
    _0x280151 = null, _0x174c78(), _0x9aef72(), window['dispatchEvent'](new CustomEvent('userDisconnected', {
        'detail': {}
    })), _0x4c4d4d('Signed\x20out\x20successfully', 'success'), _0x3c8d02();
}

function _0x390945() {
    return console['warn']('⚠️\x20DEPRECATED:\x20getHeaders()\x20called\x20-\x20use\x20getAuthHeaders()\x20instead\x20for\x20CSRF\x20protection'), _0x5db2ba(!![]);
}
async function _0x8d51d5() {
    try {
        const _0xf49d20 = await fetch('/api/gameplay/available', {
            'method': 'GET',
            'headers': _0x390945()
        });
        if (_0xf49d20['ok']) {
            const _0x691ee8 = await _0xf49d20['json']();
            return _0x1d25cf = _0x691ee8['clips'] || [], _0x1d25cf;
        } else
            return _0x4dd2b3('Failed\x20to\x20load\x20gameplay\x20clips\x20from\x20backend'), _0x1d25cf = [], _0x1d25cf;
    } catch (_0x3ab150) {
        return _0x4dd2b3('❌\x20Error\x20loading\x20gameplay\x20clips:', _0x3ab150), _0x1d25cf = [], _0x1d25cf;
    }
}
async function _0x1942a1() {
    try {
        const _0x135bff = await fetch(API_BASE_URL + '/api/subscription', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
        if (_0x135bff['ok']) {
            const _0x5f5926 = await _0x135bff['json'](),
                _0x141c91 = _0x5f5926['subscription'],
                _0x7a92ba = document['getElementById']('currentTier');
            if (_0x7a92ba) {
                const _0x567cf4 = _0x141c91['plan_name'] || _0x141c91['plan'];
                _0x7a92ba['textContent'] = _0x567cf4['charAt'](0x0)['toUpperCase']() + _0x567cf4['slice'](0x1);
            }
            const _0x3b977a = document['getElementById']('currentTierExpiry');
            if (_0x3b977a) {
                if (_0x141c91['plan'] === 'free')
                    _0x3b977a['textContent'] = 'Lifetime';
                else {
                    if (_0x141c91['plan_expires_at']) {
                        const _0x1e7008 = new Date(_0x141c91['plan_expires_at']),
                            _0x492275 = new Date(),
                            _0x504760 = Math['ceil']((_0x1e7008 - _0x492275) / (0x3e8 * 0x3c * 0x3c * 0x18));
                        if (_0x504760 < 0x0)
                            _0x3b977a['textContent'] = 'Expired';
                        else {
                            if (_0x504760 === 0x0)
                                _0x3b977a['textContent'] = 'Expires\x20today';
                            else
                                _0x504760 === 0x1 ? _0x3b977a['textContent'] = 'Expires\x20tomorrow' : _0x3b977a['textContent'] = 'Expires\x20in\x20' + _0x504760 + '\x20days';
                        }
                    } else
                        _0x3b977a['textContent'] = '';
                }
            }
            return typeof updateStorageDisplayOnDashboard === 'function' && updateStorageDisplayOnDashboard(_0x141c91), _0x141c91;
        } else
            _0x4dd2b3('⚠️\x20Could\x20not\x20load\x20tier\x20info');
    } catch (_0x8c81c4) {
        _0x4dd2b3('❌\x20Error\x20loading\x20tier\x20info:', _0x8c81c4);
    }
}

function _0x4ca025(_0x219d3c) {
    _0x4dd2b3('🎮\x20Gameplay\x20selector\x20clicked!');
    _0x1d25cf['length'] === 0x0 && (_0x4dd2b3('Loading\x20gameplay\x20clips...'), _0x8d51d5());
    const _0x9b25ed = _0x219d3c ? _0x219d3c['clientX'] : window['innerWidth'] / 0x2,
        _0x1a1347 = _0x219d3c ? _0x219d3c['clientY'] : window['innerHeight'] / 0x2;
    setTimeout(() => {
        window['showGameplayPanel'] ? window['showGameplayPanel'](_0x9b25ed, _0x1a1347) : _0x4dd2b3('❌\x20showGameplayPanel\x20not\x20available');
    }, 0x64);
}

function _0x4dd105(_0x2733b3) {
    _0x31d0b6 = _0x2733b3;
}

function _0xc8aa06() {
    const _0x4efcef = document['getElementById']('splitscreenDivider'),
        _0x358f3e = document['getElementById']('dividerLine'),
        _0x4e53c7 = document['getElementById']('dividerHandle');
    if (!_0x4efcef || !_0x358f3e || !_0x4e53c7) {
        _0x4dd2b3('⚠️\x20Missing\x20divider\x20elements');
        return;
    }
    let _0x52270f = ![],
        _0x1aa10 = ![];
    _0x4efcef['addEventListener']('mouseenter', () => {
        !_0x52270f && (_0x358f3e['style']['background'] = 'rgba(255,\x20107,\x200,\x200.8)', _0x358f3e['style']['height'] = '3px', _0x4e53c7 && (_0x4e53c7['style']['opacity'] = '1', _0x4e53c7['style']['background'] = 'rgba(255,\x20107,\x200,\x200.8)'));
    }), _0x4efcef['addEventListener']('mouseleave', () => {
        !_0x52270f && (_0x358f3e['style']['background'] = 'rgba(255,\x20255,\x20255,\x200.4)', _0x358f3e['style']['height'] = '2px', _0x4e53c7 && (_0x4e53c7['style']['opacity'] = '0'));
    }), _0x4efcef['addEventListener']('mousedown', _0x217717 => {
        _0x52270f = !![];
        _0x4e53c7 && (_0x4e53c7['style']['opacity'] = '1', _0x4e53c7['style']['background'] = 'rgba(255,\x20107,\x200,\x201)');
        const _0x3e0ba2 = _0x4efcef['parentElement'],
            _0x4b71a7 = _0x3e0ba2['children'][0x0],
            _0x3f38c = _0x3e0ba2['children'][0x2],
            _0x19125a = _0x217717['clientY'],
            _0x453dac = _0x3e0ba2['offsetHeight'];
        let _0x1fb239 = 0x0;
        const _0x558e37 = _0x467d16 => {
                _0x1fb239 = _0x467d16['clientY'] - _0x19125a;
                const _0x15b25e = _0x453dac * 0.15;
                if (_0x1fb239 < -_0x15b25e)
                    _0x4b71a7['style']['opacity'] = '0.5', _0x3f38c['style']['opacity'] = '1';
                else
                    _0x1fb239 > _0x15b25e ? (_0x4b71a7['style']['opacity'] = '1', _0x3f38c['style']['opacity'] = '0.5') : (_0x4b71a7['style']['opacity'] = '1', _0x3f38c['style']['opacity'] = '1');
            },
            _0x2e5c1c = () => {
                _0x52270f = ![], _0x358f3e['style']['background'] = 'rgba(255,\x20255,\x20255,\x200.4)', _0x358f3e['style']['height'] = '2px';
                _0x4e53c7 && (_0x4e53c7['style']['opacity'] = '0');
                const _0x1121a1 = _0x453dac * 0.15;
                _0x1fb239 < -_0x1121a1 ? (_0x1aa10 = !![], _0x4b71a7['style']['flex'] = '0', _0x4b71a7['style']['display'] = 'none', _0x3f38c['style']['flex'] = '1') : (_0x1aa10 = ![], _0x4b71a7['style']['flex'] = '1', _0x4b71a7['style']['display'] = 'flex', _0x3f38c['style']['flex'] = '1'), _0x4b71a7['style']['opacity'] = '1', _0x3f38c['style']['opacity'] = '1', document['removeEventListener']('mousemove', _0x558e37), document['removeEventListener']('mouseup', _0x2e5c1c);
            };
        document['addEventListener']('mousemove', _0x558e37), document['addEventListener']('mouseup', _0x2e5c1c);
    });
}
document['addEventListener']('DOMContentLoaded', () => {
    setTimeout(() => {
        _0xc8aa06();
    }, 0x1f4);
});
const _0x1dd1ac = setInterval(() => {
    const _0x369aac = document['getElementById']('splitscreenDivider');
    _0x369aac && !_0x369aac['hasAttribute']('data-initialized') && (_0x369aac['setAttribute']('data-initialized', 'true'), _0xc8aa06(), clearInterval(_0x1dd1ac));
}, 0x64);

function _0x5cfed7() {}

function _0x2611d0() {
    _0x5cfed7(), _0x4c4d4d('Selected:\x20' + _0x1d25cf['find'](_0x509ed9 => _0x509ed9['id'] === _0x31d0b6)?.['title'], 'success');
}

function _0x4c4d4d(_0x459a96, _0x4fc6c6 = 'info') {
    let _0x1795f3 = document['querySelector']('.notification');
    !_0x1795f3 && (_0x1795f3 = document['createElement']('div'), _0x1795f3['className'] = 'notification', document['body']['appendChild'](_0x1795f3));
    _0x1795f3['className'] = 'notification\x20' + _0x4fc6c6 + '\x20show';
    const _0x4521c7 = _0x4fc6c6 === 'success' ? 'check' : _0x4fc6c6 === 'error' ? 'exclamation' : 'info';
    _0x1795f3['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22notification-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-' + _0x4521c7 + '-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22notificationMessage\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', document['getElementById']('notificationMessage')['textContent'] = _0x459a96, setTimeout(() => {
        _0x1795f3['classList']['remove']('show');
    }, _0x26962a['UI']['NOTIFICATION_DURATION_MS']);
}

function _0x31b689() {
    const _0x836d0e = new URLSearchParams(window['location']['search']),
        _0x51c0b5 = _0x836d0e['get']('error');
    if (_0x51c0b5) {
        _0x4dd2b3('OAuth\x20error:', _0x51c0b5), _0x4c4d4d('Authentication\x20failed:\x20' + _0x51c0b5, 'error'), setTimeout(() => window['location']['href'] = '/login.html', 0x7d0);
        return;
    }
    _0x1e2245()['then'](() => {
        window['dispatchEvent'](new CustomEvent('userConnected', {
            'detail': {
                'user': _0x280151
            }
        })), window['history']['replaceState']({}, document['title'], window['location']['pathname']), window['location']['href'] = '/dashboard.html';
    })['catch'](() => {
        _0x4dd2b3('❌\x20Authentication\x20verification\x20failed'), _0x4c4d4d('Authentication\x20failed.\x20Please\x20try\x20again.', 'error'), setTimeout(() => window['location']['href'] = '/login.html', 0x7d0);
    });
}

function _0xdd18df(_0x288d1b) {
    const _0x514675 = _0x206168(_0x288d1b);
    return _0x514675['replace'](/\*\*(.*?)\*\*/g, '<strong>$1</strong>')['replace'](/\*(.*?)\*/g, '<em>$1</em>');
}

function _0x3e44df() {
    const _0x1b5979 = localStorage['getItem']('theme') || 'light';
    document['documentElement']['setAttribute']('data-theme', _0x1b5979), _0x4f96a8 = _0x1b5979;
    const _0x589364 = new URLSearchParams(window['location']['search']),
        _0x13f7af = _0x589364['get']('token');
    if (_0x13f7af) {
        _0x31b689();
        return;
    }
    _0x433d53(), setTimeout(() => {
        typeof updateProfileButton === 'function' && updateProfileButton();
    }, 0x64), chatHistory = [], _0x4f6837(), _0x1d1ab4();
    const _0x1d1837 = localStorage['getItem']('sidebarExpanded');
    _0x1d1837 === 'true' && _0x105b66['classList']['add']('expanded');
    const _0x32e3a6 = document['querySelector']('.input-section'),
        _0x1827f2 = _0x32e3a6 ? _0x32e3a6['querySelector']('.input-container') : null;
    _0x1827f2 && _0x1827f2['classList']['add']('first-prompt');
    _0x32e3a6 && _0x32e3a6['classList']['add']('is-first-prompt');
    _0x45c651();
    const _0x3edb86 = document['getElementById']('plusFeaturesBtn');
    _0x3edb86 && _0x3edb86['addEventListener']('click', function(_0x336fee) {
        _0x336fee['stopPropagation']();
        const _0x14b862 = document['getElementById']('featuresTabContainer');
        _0x14b862 && (_0x14b862['classList']['toggle']('active'), this['classList']['toggle']('active'));
    });
    document['addEventListener']('click', function(_0x5964b5) {
        const _0x19b2ef = document['getElementById']('featuresTabContainer'),
            _0x261571 = document['getElementById']('plusFeaturesBtn');
        if (_0x19b2ef && !_0x5964b5['target']['closest']('#featuresTabContainer') && !_0x5964b5['target']['closest']('#plusFeaturesBtn')) {
            _0x19b2ef['classList']['remove']('active');
            if (_0x261571)
                _0x261571['classList']['remove']('active');
        }
    });
    const _0x1913a2 = document['createElement']('link');
    _0x1913a2['href'] = 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap', _0x1913a2['rel'] = 'stylesheet', document['head']['appendChild'](_0x1913a2);
}
const _0x26962a = {
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
    'SECURITY': {
        'MAX_CONSOLE_LOGS': 0x0
    }
};

function _0x206168(_0x2d7ba0) {
    if (typeof _0x2d7ba0 !== 'string')
        return '';
    const _0x3977ca = document['createElement']('div');
    return _0x3977ca['textContent'] = _0x2d7ba0, _0x3977ca['innerHTML'];
}

function _0x333175(_0x8cb56e) {
    if (!_0x8cb56e || typeof _0x8cb56e !== 'string')
        return ![];
    try {
        if (_0x8cb56e['startsWith']('javascript:') || _0x8cb56e['startsWith']('data:'))
            return _0x4dd2b3('🔒\x20Blocked\x20invalid\x20URL\x20scheme:', _0x8cb56e['substring'](0x0, 0x14)), ![];
        const _0x47fd8f = new URL(_0x8cb56e, window['location']['href']);
        return _0x47fd8f['protocol'] === 'https:' || _0x47fd8f['protocol'] === 'http:';
    } catch (_0x329981) {
        return _0x4dd2b3('Invalid\x20URL\x20format:', _0x8cb56e), ![];
    }
}

function _0x13f631(_0x4a0e43, _0x5d18e3) {
    let _0x3d6dde, _0x44db8a = 0x0;
    return function _0x2771bc(..._0x1510c2) {
        const _0x390072 = Date['now'](),
            _0x51835c = _0x390072 - _0x44db8a;
        clearTimeout(_0x3d6dde), _0x51835c >= _0x5d18e3 ? (_0x44db8a = _0x390072, _0x4a0e43['apply'](this, _0x1510c2)) : _0x3d6dde = setTimeout(() => {
            _0x44db8a = Date['now'](), _0x4a0e43['apply'](this, _0x1510c2);
        }, _0x5d18e3 - _0x51835c);
    };
}
const _0x3203b8 = _0x26962a['SECURITY']['MAX_CONSOLE_LOGS'] !== 0x0;

function _0x4dd2b3(..._0x5ea921) {
    _0x3203b8 && console['log'](..._0x5ea921);
}
async function _0x43731d(_0x23c3c0, _0x10c05e = {}, _0x2d10eb = 0x2710) {
    const _0x324e5a = new AbortController(),
        _0x4edb80 = setTimeout(() => _0x324e5a['abort'](), _0x2d10eb);
    try {
        const _0x7c1ecf = await fetch(_0x23c3c0, {
            ..._0x10c05e,
            'signal': _0x324e5a['signal']
        });
        return clearTimeout(_0x4edb80), _0x7c1ecf;
    } catch (_0x907113) {
        clearTimeout(_0x4edb80);
        if (_0x907113['name'] === 'AbortError')
            throw new Error('Request\x20timeout\x20after\x20' + _0x2d10eb + 'ms');
        throw _0x907113;
    }
}
class _0x20fbb1 {
    constructor() {
            this['slots'] = {
                0x1: null,
                0x2: null,
                0x3: null,
                0x4: null,
                0x5: null
            }, this['totalClips'] = 0x0;
        }
    ['addClip'](_0x5d93d2) {
            const _0x46dd94 = Object['values'](this['slots'])['filter'](_0x5420a4 => _0x5420a4 !== null)['length'];
            if (_0x46dd94 < 0x5) {
                const _0x36cb7c = 0x5 - _0x46dd94;
                this['slots'][_0x36cb7c] = {
                    ..._0x5d93d2,
                    'slotNumber': _0x36cb7c,
                    'addedAt': new Date()['toISOString']()
                };
            } else {
                for (let _0x3ab31a = 0x1; _0x3ab31a < 0x5; _0x3ab31a++) {
                    this['slots'][_0x3ab31a] = this['slots'][_0x3ab31a + 0x1], this['slots'][_0x3ab31a] && (this['slots'][_0x3ab31a]['slotNumber'] = _0x3ab31a);
                }
                this['slots'][0x5] = {
                    ..._0x5d93d2,
                    'slotNumber': 0x5,
                    'addedAt': new Date()['toISOString']()
                };
            }
            return this['totalClips']++, this['slots'];
        }
    ['getSlots']() {
            return this['slots'];
        }
    ['getSlot'](_0x28dae1) {
            return this['slots'][_0x28dae1];
        }
    ['clearSlot'](_0x40534b) {
            return this['slots'][_0x40534b] = null, this['slots'];
        }
    ['getFilledSlots']() {
            return Object['entries'](this['slots'])['filter'](([_0x34d44c, _0x47b211]) => _0x47b211 !== null)['map'](([_0x305b54, _0x2dc2e0]) => ({
                'slotNum': parseInt(_0x305b54),
                'data': _0x2dc2e0
            }));
        }
}
class _0x4101c7 {
    constructor() {
        this['currentTab'] = 'templates', this['processingItems'] = [], this['libraryItems'] = [], this['initialized'] = ![], this['currentProjectId'] = null, this['selectedTemplate'] = null, this['templates'] = {}, this['isMonitoring'] = ![], this['monitoringIntervals'] = new Map(), this['currentEditingProject'] = null, this['slotSystem'] = new _0x20fbb1(), this['currentSlotState'] = null, this['useSlotSystem'] = !![], this['subscriptionCache'] = null, this['libraryPollingInterval'] = null, this['lastYouTubeProcessTime'] = 0x0;
    }
    async ['init']() {
            if (this['initialized'])
                return;
            try {
                this['bindEvents'](), this['loadTemplates'](), await this['loadLibraryItems'](), await this['loadProcessingItems'](), this['initialized'] = !![], this['enforceUrlButtonRateLimitOnLoad'](), this['initializeWebSocket'](), this['startLibraryPolling']();
                const _0x46b024 = localStorage['getItem']('clipsStudioCurrentTab');
                _0x46b024 && [
                'templates',
                'create',
                'processing',
                'library',
                'editor'
            ]['includes'](_0x46b024) ? this['switchTab'](_0x46b024) : this['switchTab']('templates');
            } catch (_0x5c6cc0) {
                _0x4dd2b3('Failed\x20to\x20initialize\x20Clips\x20Studio:', _0x5c6cc0);
            }
        }
    ['initializeWebSocket']() {
            try {
                if (!window['SolisAIWebSocketClient']) {
                    _0x4dd2b3('⚠️\x20WebSocket\x20client\x20class\x20not\x20available');
                    return;
                }
                if (!_0x280151) {
                    _0x4dd2b3('⚠️\x20User\x20not\x20authenticated\x20-\x20WebSocket\x20skipped');
                    return;
                }
                _0x30e8e8 = new SolisAIWebSocketClient(), _0x30e8e8['connect'](), _0x4dd2b3('✅\x20WebSocket\x20client\x20initialized\x20with\x20httpOnly\x20auth'), setTimeout(() => {
                    this['setupWebSocketHandlers']();
                }, 0x1f4);
            } catch (_0x1370a6) {
                _0x4dd2b3('❌\x20Failed\x20to\x20initialize\x20WebSocket:', _0x1370a6);
            }
        }
    ['updateRecentActivity']() {
            const _0x1ab565 = document['getElementById']('activityList');
            if (!_0x1ab565)
                return;
            const _0x21bee0 = _0x1ab565['querySelector']('.activity-item'),
                _0x1a4763 = this['libraryItems']['sort']((_0x40b69a, _0x39d7a3) => _0x39d7a3['timestamp'] - _0x40b69a['timestamp'])['slice'](0x0, 0x3);
            _0x1a4763['forEach'](_0x188279 => {
                const _0x5cab1e = this['getTimeAgo'](_0x188279['timestamp']),
                    _0x3010a3 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-video\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-title\x22>Created\x20a\x20clip</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-description\x22>' + (_0x188279['name'] || 'Untitled\x20Clip') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22activity-time\x22>' + _0x5cab1e + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                _0x1ab565['insertAdjacentHTML']('beforeend', _0x3010a3);
            });
        }
    ['getTimeAgo'](_0x5669c4) {
            const _0x33fbde = new Date(),
                _0x530770 = _0x33fbde - new Date(_0x5669c4),
                _0x540325 = Math['floor'](_0x530770 / 0xea60),
                _0x248fa1 = Math['floor'](_0x530770 / 0x36ee80),
                _0x232a6a = Math['floor'](_0x530770 / 0x5265c00);
            if (_0x540325 < 0x1)
                return '0\x20minutes\x20ago';
            if (_0x540325 < 0x3c)
                return _0x540325 + '\x20minute' + (_0x540325 > 0x1 ? 's' : '') + '\x20ago';
            if (_0x248fa1 < 0x18)
                return _0x248fa1 + '\x20hour' + (_0x248fa1 > 0x1 ? 's' : '') + '\x20ago';
            if (_0x232a6a < 0x7)
                return _0x232a6a + '\x20day' + (_0x232a6a > 0x1 ? 's' : '') + '\x20ago';
            return _0x5669c4['toLocaleDateString']();
        }
    async ['loadTemplates']() {
            try {
                const _0x2d3d14 = _0x5db2ba(),
                    _0x465676 = await fetch(API_BASE_URL + '/clips/templates', {
                        'method': 'GET',
                        'headers': _0x2d3d14,
                        'credentials': 'include'
                    });
                if (_0x465676['ok']) {
                    const _0x1ac724 = await _0x465676['json']();
                    this['templates'] = _0x1ac724['templates'] || _0x1ac724, _0x4dd2b3('✅\x20Templates\x20loaded:', Object['keys'](this['templates']));
                } else
                    _0x465676['status'] === 0x191 ? (_0x4dd2b3('Not\x20authenticated\x20for\x20templates,\x20using\x20defaults'), this['setDefaultTemplates']()) : (_0x4dd2b3('Failed\x20to\x20load\x20templates,\x20status:', _0x465676['status']), this['setDefaultTemplates']());
            } catch (_0x543c94) {
                _0x4dd2b3('Failed\x20to\x20load\x20templates:', _0x543c94), this['setDefaultTemplates']();
            }
        }
    ['setDefaultTemplates']() {
            this['templates'] = {
                'ranked_compilation': {
                    'name': 'Ranking\x20Compilation',
                    'description': 'Top\x205\x20moments\x20ranked\x20compilation',
                    'duration': '15-60s',
                    'type': 'ranking',
                    'supportsSlotSystem': !![]
                },
                'splitscreen': {
                    'name': 'Split\x20Screen',
                    'description': 'Side-by-side\x20video\x20comparison',
                    'duration': '15-30s',
                    'type': 'splitscreen',
                    'supportsSlotSystem': !![]
                }
            };
        }
    ['bindEvents']() {
            this['safeAddEventListener']('.clips-tab', 'click', _0x271d74 => {
                this['switchTab'](_0x271d74['currentTarget']['dataset']['tab']);
            }), this['safeAddEventListener']('.template-card', 'click', _0x16599f => {
                const _0x56089c = _0x16599f['currentTarget'],
                    _0x4daa04 = _0x56089c['dataset']['template'];
                _0x4daa04 === 'splitscreen' ? (_0x16599f['preventDefault'](), _0x16599f['stopPropagation'](), this['checkTemplateAccess'](_0x4daa04)) : this['openTemplatePreviewModal'](_0x4daa04, _0x56089c);
            }), this['safeAddEventListenerById']('closeProFeatureModal', 'click', () => {
                this['closeProFeatureModal']();
            }), this['safeAddEventListenerById']('closeTemplatePreviewBtn', 'click', () => {
                this['closeTemplatePreviewModal']();
            }), this['safeAddEventListenerById']('templateSheetHandle', 'click', () => {
                const _0x27e3c6 = document['querySelector']('.template-preview-sidebar');
                _0x27e3c6 && _0x27e3c6['classList']['toggle']('expanded');
            }), this['safeAddEventListenerById']('confirmUseTemplateBtn', 'click', () => {
                this['confirmTemplateUse']();
            }), this['safeAddEventListenerById']('processUrlBtn', 'click', _0x456da6 => {
                _0x456da6['preventDefault'](), _0x456da6['stopPropagation'](), this['processYouTubeUrl']();
            });
            const _0x233c26 = document['getElementById']('youtubeUrlInput');
            _0x233c26 && _0x233c26['addEventListener']('keypress', _0x4dc2d8 => {
                _0x4dc2d8['key'] === 'Enter' && (_0x4dc2d8['preventDefault'](), this['processYouTubeUrl']());
            }), this['safeAddEventListenerById']('confirmTemplateBtn', 'click', () => {
                this['confirmTemplateSelection']();
            }), this['safeAddEventListenerById']('cancelTemplateBtn', 'click', () => {
                this['cancelTemplateSelection']();
            }), this['safeAddEventListenerById']('generateClipBtn', 'click', () => {
                this['generateClipWithSlotSystem']();
            }), this['safeAddEventListenerById']('refreshProcessingBtn', 'click', () => {
                this['manualRefresh']();
            }), this['safeAddEventListenerById']('libraryFilter', 'change', _0x4c17d0 => {
                this['filterLibrary'](_0x4c17d0['target']['value']);
            }), this['safeAddEventListenerById']('newClipBtn', 'click', () => {
                const _0x303161 = document['querySelector']('.nav-item[data-target=\x22clips\x22]');
                _0x303161 && _0x303161['click'](), setTimeout(() => {
                    this['switchTab']('create'), setTimeout(() => this['openEditor'](), 0x12c);
                }, 0x12c);
            }), this['safeAddEventListenerById']('createFirstClipBtn', 'click', () => {
                this['switchTab']('create');
            }), this['safeAddEventListenerById']('renderFinalBtn', 'click', () => {
                this['renderFinalVideo']();
            }), this['safeAddEventListenerById']('viewAllActivityBtn', 'click', () => {
                this['switchTab']('library');
            }), document['addEventListener']('visibilitychange', () => {
                document['hidden'] && this['stopAllMonitoring']();
            });
        }
    ['switchTab'](_0x211ff2) {
            this['currentTab'] === 'processing' && _0x211ff2 !== 'processing' && this['stopAllMonitoring']();
            document['querySelectorAll']('.clips-tab')['forEach'](_0x814bb => {
                _0x814bb['classList']['toggle']('active', _0x814bb['dataset']['tab'] === _0x211ff2);
            }), document['querySelectorAll']('.clips-section')['forEach'](_0x13fbcc => {
                _0x13fbcc['classList']['toggle']('active', _0x13fbcc['id'] === _0x211ff2 + 'Section');
            }), this['currentTab'] = _0x211ff2, localStorage['setItem']('clipsStudioCurrentTab', _0x211ff2);
            if (_0x211ff2 === 'processing')
                this['updateProcessingView'](), this['startSmartMonitoring']();
            else {
                if (_0x211ff2 === 'library')
                    this['updateLibraryView']();
                else
                    _0x211ff2 === 'editor' && this['loadEditorData']();
            }
        }
    ['selectTemplate'](_0x545b7a, _0x435f98) {
            document['querySelectorAll']('.template-card')['forEach'](_0x3c5afb => {
                _0x3c5afb['classList']['remove']('selected');
            }), _0x435f98['classList']['add']('selected'), this['selectedTemplate'] = _0x545b7a, this['showConfirmationButtons'](!![]);
            const _0x1eb960 = this['templates'][_0x545b7a];
            _0x1eb960 && _0x1eb960['supportsSlotSystem'] && this['showSlotSystemInfo']();
        }
    async ['checkTemplateAccess'](_0x282933) {
            try {
                const _0x2ad5e2 = window['API_BASE_URL'] || 'https://api.solisai.video/api',
                    _0x2b5436 = _0x5db2ba();
                try {
                    const _0x5e4109 = await fetch(_0x2ad5e2 + '/api/subscription', {
                        'method': 'GET',
                        'headers': _0x2b5436,
                        'credentials': 'include'
                    });
                    if (!_0x5e4109['ok']) {
                        this['showProFeatureModal'](_0x282933);
                        return;
                    }
                    const _0x3cc5ab = await _0x5e4109['json'](),
                        _0x47c250 = _0x3cc5ab['subscription']?.['plan'] || 'free';
                    if (_0x47c250 === 'free')
                        this['showProFeatureModal'](_0x282933);
                    else {
                        const _0x2b014d = document['querySelector']('[data-template=\x22' + _0x282933 + '\x22]');
                        this['openTemplatePreviewModal'](_0x282933, _0x2b014d);
                    }
                } catch (_0xa6982c) {
                    this['showProFeatureModal'](_0x282933);
                }
            } catch (_0xb115c) {
                this['showProFeatureModal'](_0x282933);
            }
        }
    ['showProFeatureModal'](_0x395579, _0x2a7810) {
            const _0x1583d9 = document['querySelector']('.pro-modal-overlay');
            if (_0x1583d9)
                _0x1583d9['remove']();
            if (!document['getElementById']('pro-modal-styles')) {
                const _0x3a0696 = document['createElement']('style');
                _0x3a0696['id'] = 'pro-modal-styles', _0x3a0696['textContent'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeInOverlay\x20{\x20to\x20{\x20opacity:\x201;\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20translateY(18px)\x20scale(0.97);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20translateY(0)\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20popIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0)\x20rotate(-15deg);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2060%\x20{\x20transform:\x20scale(1.1)\x20rotate(4deg);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2080%\x20{\x20transform:\x20scale(0.95)\x20rotate(-2deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1)\x20rotate(0deg);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeUpAnim\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20translateY(8px);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20translateY(0);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.3)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(8px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-backdrop-filter:\x20blur(8px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeInOverlay\x200.3s\x20ease\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2028px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20820px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2032px\x2080px\x20rgba(0,0,0,0.12),\x200\x200\x200\x201px\x20rgba(0,0,0,0.05);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(18px)\x20scale(0.97);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideUp\x200.45s\x20cubic-bezier(0.34,1.4,0.64,1)\x200.1s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x20440px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2052%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FDF6F3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2044px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x20-70px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20-70px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-50px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20-50px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20160px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20160px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-left-top\x20{\x20position:\x20relative;\x20z-index:\x201;\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-lock-wrap\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2064px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2064px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(255,106,61,0.12);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20popIn\x200.5s\x20cubic-bezier(0.34,1.56,0.64,1)\x200.4s\x20both;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Instrument\x20Serif\x27,\x20serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x20-0.4px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.55s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-subtitle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.65;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20270px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.63s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-template-preview\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.72s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-preview\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#F5F4F2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2090px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-pro\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20strong\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-tpb-info\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-locked-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(253,246,243,0.55);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2048%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2044px\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-close-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-close-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#F5F5F5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plans-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.3s\x20ease\x200.7s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-options\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.78s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201.5px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2013px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.18s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(3px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FFF3EF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-shrink:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#FFD0C2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20.pro-plan-card-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20strong\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-body\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card-price\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-plan-card.highlighted\x20.pro-plan-card-price\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-popular-tag\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x209px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200\x200\x206px\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-right-footer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeUpAnim\x200.35s\x20ease\x200.88s\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF6A3D;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Geist\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(255,106,61,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#e85c30;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x206px\x2020px\x20rgba(255,106,61,0.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-cta-btn:active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#AAA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20underline;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-underline-offset:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-fine-print\x20a:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#555;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#EBEBEB;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.pro-panel-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', document['head']['appendChild'](_0x3a0696);
            }
            const _0x5eb8c7 = document['createElement']('div');
            _0x5eb8c7['className'] = 'pro-modal-overlay';
            const _0x203854 = {
                    'splitscreen': {
                        'title': 'This\x20is\x20a\x20Pro\x20template',
                        'subtitle': 'Split\x20Screen\x20is\x20only\x20available\x20on\x20paid\x20plans.\x20Upgrade\x20to\x20unlock\x20it',
                        'templateName': 'Split\x20Screen',
                        'templateDesc': 'Video\x20+\x20Gameplay\x20stacked'
                    }
                },
                _0x5dd4b3 = _0x203854[_0x395579] || _0x203854['splitscreen'];
            _0x5eb8c7['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-panel-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-left-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-lock-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2228\x22\x20height=\x2228\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x2010\x200v4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22pro-title\x22>' + _0x5dd4b3['title'] + '</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22pro-subtitle\x22>' + _0x5dd4b3['subtitle'] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-template-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-pro\x22>PRO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2240\x22\x20height=\x2240\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#C8C4BE\x22\x20stroke-width=\x221.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x227\x22\x20height=\x2218\x22\x20rx=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x2214\x22\x20y=\x223\x22\x20width=\x227\x22\x20height=\x2218\x22\x20rx=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-locked-overlay\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x2010\x200v4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-tpb-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>' + _0x5dd4b3['templateName'] + '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:block;margin-top:2px;font-size:11px;color:#AAA\x22>' + _0x5dd4b3['templateDesc'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:11px;color:#FF6A3D;font-weight:600;background:#FFF3EF;padding:3px\x209px;border-radius:100px;border:1px\x20solid\x20#FFD0C2\x22>PRO</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-panel-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22pro-close-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2218\x22\x20y1=\x226\x22\x20x2=\x226\x22\x20y2=\x2218\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x226\x22\x20y1=\x226\x22\x20x2=\x2218\x22\x20y2=\x2218\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plans-label\x22>Unlock\x20with\x20a\x20plan</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22basicGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#f1f5f9;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#cbd5e1;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#94a3b8;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#basicGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Basic</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>PRO\x20templates\x20·\x20No\x20watermark</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$18.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x20highlighted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-popular-tag\x22>Popular</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22primeGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#fff176;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ffd600;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#ff9100;stop-opacity:1\x22></stop>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#primeGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Prime</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>PRO\x20templates\x20+\x20Basic\x20Overpurpose</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$29.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22eliteGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20style=\x22stop-color:#ff6b3d;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ff3d00;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#c70000;stop-opacity:1\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#eliteGrad)\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Elite</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Everything\x20+\x20Priority\x20queue</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-plan-card-price\x22>$49.99/mo</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pro-right-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22pro-cta-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x2211\x22\x20width=\x2218\x22\x20height=\x2211\x22\x20rx=\x222\x22\x20ry=\x222\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M7\x2011V7a5\x205\x200\x200\x201\x209.9-1\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Unlock\x20Split\x20Screen\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22pro-fine-print\x22>Cancel\x20anytime\x20·\x20No\x20commitment\x20·\x20<a>Maybe\x20later</a></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x5eb8c7['querySelector']('.pro-close-btn')['addEventListener']('click', () => {
                _0x5eb8c7['style']['opacity'] = '0', _0x5eb8c7['style']['transition'] = 'opacity\x200.25s\x20ease', setTimeout(() => _0x5eb8c7['remove'](), _0x26962a['UI']['MODAL_TRANSITION_MS']);
            }), _0x5eb8c7['querySelectorAll']('.pro-plan-card')['forEach'](_0x231b91 => {
                _0x231b91['addEventListener']('click', () => {
                    _0x5eb8c7['querySelectorAll']('.pro-plan-card')['forEach'](_0x323364 => _0x323364['classList']['remove']('highlighted')), _0x231b91['classList']['add']('highlighted');
                });
            }), _0x5eb8c7['querySelector']('.pro-cta-btn')['addEventListener']('click', () => {}), _0x5eb8c7['querySelector']('.pro-fine-print\x20a')['addEventListener']('click', () => {
                _0x5eb8c7['style']['opacity'] = '0', _0x5eb8c7['style']['transition'] = 'opacity\x200.25s\x20ease', setTimeout(() => _0x5eb8c7['remove'](), _0x26962a['UI']['MODAL_TRANSITION_MS']);
            }), _0x5eb8c7['addEventListener']('click', _0x501cbc => {
                _0x501cbc['target'] === _0x5eb8c7 && (_0x5eb8c7['style']['opacity'] = '0', _0x5eb8c7['style']['transition'] = 'opacity\x200.25s\x20ease', setTimeout(() => _0x5eb8c7['remove'](), _0x26962a['UI']['MODAL_TRANSITION_MS']));
            }), document['body']['appendChild'](_0x5eb8c7), _0x4dd2b3('✅\x20Pro\x20feature\x20modal\x20shown\x20for:', _0x395579);
        }
    ['closeProFeatureModal']() {
            const _0x16945e = document['getElementById']('proFeatureModal');
            _0x16945e && (_0x16945e['style']['display'] = 'none');
        }
    ['openTemplatePreviewModal'](_0xac9a2e, _0x1d0511) {
            const _0x17e536 = document['getElementById']('templatePreviewModal'),
                _0x316e17 = document['getElementById']('templatePreviewLoading');
            if (!_0x17e536)
                return;
            _0x4dd2b3('📋\x20Opening\x20template\x20preview\x20for:\x20' + _0xac9a2e);
            _0x316e17 && (_0x316e17['style']['display'] = 'flex');
            const _0x233811 = document['getElementById']('previewTemplateName'),
                _0x40c9cb = document['getElementById']('previewTemplateDescription'),
                _0x2e1aae = document['getElementById']('previewVideoDuration'),
                _0x1af2c0 = document['getElementById']('previewVideoFormat');
            _0x4dd2b3('Elements\x20found:', {
                'nameEl': !!_0x233811,
                'descEl': !!_0x40c9cb,
                'durationEl': !!_0x2e1aae,
                'formatEl': !!_0x1af2c0
            });
            if (_0x233811) {
                const _0x580edb = _0xac9a2e['replace'](/_/g, '\x20')['replace'](/\b\w/g, _0x190042 => _0x190042['toUpperCase']());
                _0x233811['textContent'] = _0x580edb || 'Template', _0x4dd2b3('✅\x20Template\x20name\x20set\x20to:', _0x580edb);
            } else
                _0x4dd2b3('⚠️\x20nameEl\x20not\x20found');
            const _0x381a38 = document['getElementById']('youtubeUrlInput')?.['value']['trim']();
            if (_0x381a38) {
                if (_0x40c9cb)
                    _0x40c9cb['textContent'] = 'Loading\x20video\x20info...';
                if (_0x2e1aae)
                    _0x2e1aae['textContent'] = '~60s';
                if (_0x1af2c0)
                    _0x1af2c0['textContent'] = 'TikTok\x20/\x20Shorts';
            } else {
                if (_0x40c9cb)
                    _0x40c9cb['textContent'] = 'Paste\x20a\x20YouTube\x20URL\x20to\x20see\x20video\x20details';
                if (_0x2e1aae)
                    _0x2e1aae['textContent'] = '~60s';
                if (_0x1af2c0)
                    _0x1af2c0['textContent'] = 'TikTok\x20/\x20Shorts';
            }
            _0x17e536['classList']['add']('active'), _0x17e536['style']['display'] = 'flex', _0x17e536['style']['visibility'] = 'visible', _0x17e536['style']['opacity'] = '1', document['body']['classList']['add']('modal-open'), _0x4dd2b3('✅\x20Modal\x20displayed');
            const _0x2f88e0 = document['getElementById']('navWrapper'),
                _0x144cf2 = document['querySelector']('.profile-notif-wrapper');
            _0x2f88e0 && _0x2f88e0['classList']['add']('disabled');
            _0x144cf2 && _0x144cf2['classList']['add']('disabled');
            const _0x2b0c42 = document['querySelector']('.template-preview-sheet');
            _0x2b0c42 && _0x2b0c42['classList']['remove']('expanded'), setTimeout(() => {
                _0x316e17 && (_0x316e17['style']['display'] = 'none');
                const _0x53b022 = this['templates'][_0xac9a2e] || {},
                    _0x2eb4f9 = document['getElementById']('watermarkToggle'),
                    _0x5d758c = _0x2eb4f9 ? _0x2eb4f9['checked'] : !![];
                this['currentTemplateForPreview'] = {
                    'id': _0xac9a2e,
                    'card': _0x1d0511,
                    'data': _0x53b022,
                    'addWatermark': _0x5d758c,
                    'videoQuality': 'auto',
                    'videoUrl': _0x381a38
                };
                const _0x3f6839 = document['getElementById']('aiPromptInput');
                _0x3f6839 && (_0x3f6839['value'] = '', document['getElementById']('charCountDisplay')['textContent'] = '0');
                const _0x56662d = document['getElementById']('aiResponseArea');
                _0x56662d && (_0x56662d['style']['display'] = 'none');
                this['loadVideoPreviewWithTemplate']();
                if (_0x381a38) {
                    const _0x4a1aa2 = document['getElementById']('previewTemplateDescription'),
                        _0x5e6d75 = document['getElementById']('previewVideoDuration'),
                        _0x98573c = document['getElementById']('previewVideoFormat');
                    this['fetchVideoMetadata'](_0x381a38, _0x5e6d75, _0x98573c, _0x4a1aa2);
                }
            }, 0x64);
        }
    ['updateWatermarkDisplay']() {
            const _0x317592 = document['getElementById']('watermarkToggle'),
                _0x318a1f = document['querySelector']('.solis-watermark');
            if (!_0x317592 || !_0x318a1f)
                return;
            _0x317592['checked'] ? (_0x318a1f['style']['display'] = 'flex', _0x4dd2b3('✅\x20Watermark\x20VISIBLE')) : (_0x318a1f['style']['display'] = 'none', _0x4dd2b3('❌\x20Watermark\x20HIDDEN'));
        }
    ['setupWatermarkToggle']() {
            const _0x2cd54c = document['getElementById']('watermarkToggleLabel'),
                _0x1f1d5a = document['getElementById']('watermarkUpgradeBtn'),
                _0x302d4b = document['getElementById']('watermarkNotice'),
                _0xc0fb22 = document['getElementById']('watermarkToggle');
            if (!_0xc0fb22)
                return;
            const _0x52f3f2 = window['currentUser'] && window['currentUser']['plan'] && window['currentUser']['plan'] !== 'free';
            _0x2cd54c && (_0x2cd54c['style']['display'] = _0x52f3f2 ? 'flex' : 'none'), _0x1f1d5a && (_0x1f1d5a['style']['display'] = _0x52f3f2 ? 'none' : 'flex'), _0x302d4b && !_0x52f3f2 && (_0x302d4b['style']['display'] = 'block'), _0x52f3f2 && _0xc0fb22['addEventListener']('change', () => {
                this['updateWatermarkDisplay'](), _0x4dd2b3('🔄\x20Watermark\x20toggled:\x20' + (_0xc0fb22['checked'] ? 'ON' : 'OFF'));
            });
        }
    ['loadVideoPreviewWithTemplate']() {
            const _0x5bf212 = document['getElementById']('templateVideoPreview');
            if (!_0x5bf212)
                return;
            const _0x1db7f6 = this['currentTemplateForPreview']?.['id'];
            if (!_0x1db7f6) {
                _0x5bf212['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-video-placeholder\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20template\x20selected</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                return;
            }
            this['fetchTemplatePreview'](_0x5bf212, _0x1db7f6);
        }
    async ['fetchTemplatePreview'](_0x40f20a, _0x5c0826) {
        try {
            const _0x122a2a = this['templates'][_0x5c0826];
            if (!_0x122a2a) {
                _0x4dd2b3('Template\x20\x22' + _0x5c0826 + '\x22\x20not\x20found\x20in\x20this.templates', Object['keys'](this['templates']));
                const _0xacdecd = {
                    'id': _0x5c0826,
                    'name': _0x5c0826?.['replace'](/_/g, '\x20')['replace'](/\b\w/g, _0x35691f => _0x35691f['toUpperCase']()) || 'Template',
                    'description': 'Video\x20template\x20preview',
                    'type': _0x5c0826 || 'default'
                };
                return await this['renderTemplatePreview'](_0x40f20a, _0xacdecd);
            }
            return _0x122a2a['id'] = _0x5c0826, await this['renderTemplatePreview'](_0x40f20a, _0x122a2a);
        } catch (_0x10564b) {
            _0x4dd2b3('Error\x20in\x20fetchTemplatePreview:', _0x10564b), _0x40f20a['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-video-placeholder\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20loading\x20preview</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        }
    }
    async ['renderTemplatePreview'](_0x438702, _0xd73bb2) {
            if (_0xd73bb2?.['id'] && (_0xd73bb2['id']['includes']('..') || _0xd73bb2['id']['includes']('/') || _0xd73bb2['id']['includes']('\x5c') || _0xd73bb2['id']['includes'](':'))) {
                console['error']('❌\x20SECURITY:\x20Attempted\x20path\x20traversal\x20in\x20template.id:', _0xd73bb2['id']), _0x4c4d4d('Invalid\x20template', 'error');
                return;
            }
            const _0x252ebe = _0xd73bb2?.['id'] ? String(_0xd73bb2['id'])['replace'](/[<>"']/g, '') : 'unknown';
            _0x4dd2b3('🎨\x20renderTemplatePreview\x20called\x20with\x20container:', !!_0x438702, 'template:', _0x252ebe);
            const _0x2bf48f = this['generateTemplatePreviewHTML'](_0xd73bb2);
            let _0x174b08 = '';
            try {
                const _0x43ca90 = await fetch(window['API_BASE_URL'] + '/auth/watermark-check', {
                    'headers': _0x5db2ba(),
                    'credentials': 'include',
                    'cache': 'no-store'
                });
                _0x4dd2b3('📡\x20Watermark-check\x20response\x20status:', _0x43ca90['status'], 'ok:', _0x43ca90['ok']);
                if (_0x43ca90['ok']) {
                    const _0x110195 = await _0x43ca90['json']();
                    _0x4dd2b3('🔍\x20Watermark\x20check\x20response:', _0x110195);
                    if (_0x110195['watermark_required'] === !![]) {
                        _0x4dd2b3('📌\x20watermark_required\x20is\x20TRUE\x20-\x20showing\x20upgrade\x20button\x20in\x20controls');
                        const _0x3fc42b = document['getElementById']('watermarkUpgradeBtn');
                        _0x3fc42b && (_0x3fc42b['style']['display'] = 'flex'), _0x174b08 = '';
                    } else
                        _0x4dd2b3('📌\x20watermark_required\x20is\x20FALSE\x20-\x20no\x20preview\x20toggle\x20needed'), _0x174b08 = '';
                } else
                    _0x4dd2b3('❌\x20Watermark-check\x20API\x20returned\x20non-ok\x20status:', _0x43ca90['status']);
            } catch (_0x108846) {
                _0x4dd2b3('🚨\x20Error\x20checking\x20watermark\x20eligibility:', _0x108846);
            }
            const _0x2d419a = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20relative;\x20width:\x20100%;\x20height:\x20100%;\x20background:\x20#3a3a3a;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x2bf48f + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22solis-watermark\x22\x20style=\x22position:\x20absolute;\x20bottom:\x2012px;\x20right:\x2012px;\x20z-index:\x20100;\x20pointer-events:\x20none;\x20display:\x20flex;\x20flex-direction:\x20column;\x20align-items:\x20flex-end;\x20color:\x20#ffffff;\x20user-select:\x20none;\x20filter:\x20drop-shadow(0px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.5));\x20font-family:\x20\x27Plus\x20Jakarta\x20Sans\x27,\x20-apple-system,\x20BlinkMacSystemFont,\x20\x27Segoe\x20UI\x27,\x20sans-serif;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x2028px;\x20height:\x2028px;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20flex-shrink:\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20width=\x2228\x22\x20height=\x2228\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2212\x22\x20fill=\x22currentColor\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2244\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke-width=\x226\x22\x20transform=\x22rotate(45\x2050\x2050)\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20rx=\x2244\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke-width=\x226\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22></ellipse>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2015px;\x20font-weight:\x20800;\x20letter-spacing:\x20-0.02em;\x20text-transform:\x20uppercase;\x20line-height:\x201;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Solis\x20<span\x20style=\x22opacity:\x200.85;\x20font-weight:\x20700;\x22>AI</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x174b08 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
            _0x4dd2b3('📝\x20Setting\x20watermarked\x20HTML\x20to\x20container'), _0x4dd2b3('🔍\x20controlHTML\x20length:', _0x174b08['length']), _0x4dd2b3('🔍\x20controlHTML\x20includes\x20toggle:', _0x174b08['includes']('previewWatermarkToggle')), _0x4dd2b3('🔍\x20watermarkedHTML\x20includes\x20toggle:', _0x2d419a['includes']('previewWatermarkToggle')), _0x438702['innerHTML'] = _0x2d419a, _0x4dd2b3('✅\x20Watermarked\x20HTML\x20set', 'Has\x20watermark\x20element:', !!_0x438702['querySelector']('.solis-watermark')), setTimeout(() => {
                const _0x1ea88a = _0x438702['querySelector']('#previewWatermarkToggle');
                if (_0x1ea88a) {
                    _0x4dd2b3('✅\x20Watermark\x20toggle\x20found\x20in\x20preview,\x20adding\x20event\x20listeners'), _0x1ea88a['addEventListener']('change', _0x33beef => {
                        const _0x2364c8 = _0x33beef['target']['checked'],
                            _0x10471f = _0x438702['querySelector']('.watermark-toggle-bg'),
                            _0x35cab8 = _0x438702['querySelector']('.watermark-toggle-slider');
                        _0x10471f && (_0x10471f['style']['backgroundColor'] = _0x2364c8 ? '#4F46E5' : '#888');
                        _0x35cab8 && (_0x35cab8['style']['left'] = _0x2364c8 ? '26px' : '2px');
                        localStorage['setItem']('solisAIWatermarkEnabled', _0x2364c8 ? 'true' : 'false');
                        this['currentTemplateForPreview'] && (this['currentTemplateForPreview']['addWatermark'] = _0x2364c8);
                        const _0x55e618 = _0x438702['querySelector']('.solis-watermark');
                        _0x55e618 && (_0x55e618['style']['display'] = _0x2364c8 ? 'flex' : 'none', _0x4dd2b3('✅\x20Watermark\x20' + (_0x2364c8 ? 'ENABLED' : 'DISABLED') + '\x20in\x20preview'));
                    });
                    const _0x111671 = _0x438702['querySelector']('.solis-watermark');
                    _0x111671 && !_0x1ea88a['checked'] && (_0x111671['style']['display'] = 'none', _0x4dd2b3('✅\x20Watermark\x20initially\x20hidden\x20(toggle\x20off)'));
                } else
                    _0x4dd2b3('⚠️\x20Watermark\x20toggle\x20checkbox\x20NOT\x20found\x20in\x20preview!');
            }, 0x0), _0x4dd2b3('[Template\x20Preview]\x20Content\x20loaded,\x20triggering\x20customizer...'), window['FloatingCustomizeBar'] && window['customizer'] && setTimeout(() => {
                window['initializeFloatingCustomizer'] && window['initializeFloatingCustomizer'](!![]);
            }, 0x64);
        }
    ['generateTemplatePreviewHTML'](_0x5045d8) {
            const _0xcfbabb = {
                    'ranked_compilation': () => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.text-stroke\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20-1.5px\x200\x20#000,\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20-1.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-2px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20\x202px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20-2px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203px\x20\x203px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.5px\x203.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204px\x20\x204px\x200\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.1rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.funniest\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ff0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranking-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20list-style:\x20none;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-number\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-1\x20{\x20color:\x20#ffd700;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-2\x20{\x20color:\x20#c0c0c0;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-3\x20{\x20color:\x20#cd7f32;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-4\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-5\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.metadata\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20rgba(255,255,255,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x200.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap\x22\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-preview-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22title\x20text-stroke\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22title_ranking\x22\x20style=\x22color:\x20white;\x22>RANKING</span>\x20<span\x20data-template-element-id=\x22title_funniest\x22\x20class=\x22funniest\x22\x20style=\x22color:\x20#ff0000;\x22>FUNNIEST</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-template-element-id=\x22title_channel\x22\x20style=\x22font-size:\x201.4rem;\x20text-align:\x20center;\x20margin:\x20-10px\x200\x2030px\x200;\x20color:\x20white\x20!important;\x20background:\x20transparent\x20!important;\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x22\x20class=\x22text-stroke\x22>{CHANNEL}\x20MOMENTS</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22ranking-list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_number\x22\x20class=\x22rank-number\x20text-stroke\x22>1.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_number\x22\x20class=\x22rank-number\x20text-stroke\x22>2.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_number\x22\x20class=\x22rank-number\x20text-stroke\x22>3.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_number\x22\x20class=\x22rank-number\x20text-stroke\x22>4.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_number\x22\x20class=\x22rank-number\x20text-stroke\x22>5.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'splitscreen': () => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-direction:\x20column;\x20align-items:\x20center;\x20justify-content:\x20center;\x20height:\x20100%;\x20padding:\x200;\x20text-align:\x20center;\x20background:\x20#000;\x20color:\x20white;\x20font-family:\x20\x27Montserrat\x27,\x20Arial,\x20sans-serif;\x20border-radius:\x208px;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TOP:\x20Video\x20Preview\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:\x201;\x20width:\x20100%;\x20background:\x20linear-gradient(135deg,\x20#1a1a2e\x200%,\x20#16213e\x20100%);\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20absolute;\x20width:\x20100%;\x20height:\x20100%;\x20background:\x20repeating-linear-gradient(45deg,\x20#ff6a3d\x200px,\x20#ff6a3d\x202px,\x20transparent\x202px,\x20transparent\x2010px);\x20opacity:\x200.05;\x20pointer-events:\x20none;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20position:\x20relative;\x20z-index:\x202;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2012px;\x20color:\x20#ff6a3d;\x20font-weight:\x20700;\x20text-transform:\x20uppercase;\x20letter-spacing:\x201px;\x20margin-bottom:\x208px;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20gap:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22width:\x206px;\x20height:\x206px;\x20background:\x20#ff6a3d;\x20border-radius:\x2050%;\x20animation:\x20splitscreen-pulse\x202s\x20infinite;\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📹\x20Video\x20Preview\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2014px;\x20font-weight:\x20800;\x20color:\x20#fff;\x20text-transform:\x20uppercase;\x20letter-spacing:\x200.5px;\x22>Your\x20Content</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20DIVIDER\x20LINE\x20-\x20Draggable\x20with\x20Handle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22splitscreenDivider\x22\x20style=\x22width:\x20100%;\x20height:\x208px;\x20background:\x20rgba(20,\x2020,\x2020,\x201);\x20z-index:\x2050;\x20cursor:\x20row-resize;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x20transition:\x20all\x200.2s\x20ease;\x20padding:\x204px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x20100%;\x20height:\x202px;\x20background:\x20rgba(255,\x20255,\x20255,\x200.4);\x20transition:\x20all\x200.2s\x20ease;\x22\x20id=\x22dividerLine\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:\x20absolute;\x20width:\x2040px;\x20height:\x205px;\x20background:\x20rgba(255,\x20107,\x200,\x200.6);\x20border-radius:\x202.5px;\x20transition:\x20all\x200.2s\x20ease;\x20left:\x2050%;\x20transform:\x20translateX(-50%);\x20opacity:\x200;\x22\x20id=\x22dividerHandle\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20BOTTOM:\x20Gameplay\x20with\x20Video\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-no-text-select=\x22true\x22\x20onclick=\x22showGameplayClipSelector(event)\x22\x20style=\x22flex:\x201;\x20width:\x20100%;\x20background:\x20#000;\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20position:\x20relative;\x20overflow:\x20hidden;\x20cursor:\x20pointer;\x20transition:\x20all\x200.2s\x20ease;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onmouseover=\x22this.style.opacity\x20=\x20\x270.8\x27;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onmouseout=\x22this.style.opacity\x20=\x20\x271\x27;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<video\x20style=\x22width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20display:\x20block;\x20pointer-events:\x20none;\x22\x20autoplay\x20muted\x20loop\x20playsinline\x20id=\x22splitscreenGameplayVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<source\x20src=\x22/assets/Minecraft_1.mp4\x22\x20type=\x22video/mp4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Your\x20browser\x20doesn\x27t\x20support\x20HTML5\x20video.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</video>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20splitscreen-pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%,\x20100%\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20opacity:\x200.5;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                },
                _0x2b5edb = _0xcfbabb[_0x5045d8['id']] || _0xcfbabb[_0x5045d8['type']] || _0xcfbabb['ranked_compilation'];
            return '<style>@keyframes\x20pulse\x20{\x200%,\x20100%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x2050%\x20{\x20transform:\x20scale(1.1);\x20opacity:\x200.7;\x20}\x20}</style>' + _0x2b5edb();
        }
    async ['loadYouTubeSubtitles'](_0x214b4f) {
            try {
                const _0x17143a = document['getElementById']('youtubeSubtitleStatus');
                _0x17143a && (_0x17143a['textContent'] = 'Loading...');
                const _0x9e5a71 = await fetch('/api/youtube/subtitles', {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    'body': JSON['stringify']({
                        'video_id': _0x214b4f
                    })
                });
                let _0x355c3d = [];
                if (_0x9e5a71['ok']) {
                    const _0xe266fb = await _0x9e5a71['json']();
                    _0x355c3d = _0xe266fb['subtitles'] || [];
                }
                _0x17143a && (_0x17143a['textContent'] = _0x355c3d['length'] > 0x0 ? 'Ready' : 'No\x20subs'), typeof captionSystem !== 'undefined' && (captionSystem['initializeCaptions'](_0x355c3d), captionSystem['playAnimation']());
            } catch (_0x4262d9) {
                _0x4dd2b3('Error\x20loading\x20YouTube\x20subtitles:', _0x4262d9);
                const _0x372172 = document['getElementById']('youtubeSubtitleStatus');
                _0x372172 && (_0x372172['textContent'] = 'Error');
            }
        }
    ['extractYouTubeVideoId'](_0x3961d) {
            const _0x422949 = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&]+)/
        ];
            for (const _0x2d4d88 of _0x422949) {
                const _0x4f35a7 = _0x3961d['match'](_0x2d4d88);
                if (_0x4f35a7 && _0x4f35a7[0x1]) {
                    const _0x1804e6 = _0x4f35a7[0x1];
                    if (/^[a-zA-Z0-9_-]{11}$/ ['test'](_0x1804e6))
                        return _0x1804e6;
                }
            }
            return null;
        }
    ['isYouTubeShort'](_0x3a90dd) {
            return /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\// ['test'](_0x3a90dd);
        }
    async ['fetchVideoMetadata'](_0xc96323, _0x308756, _0x31f30b, _0x26bfa9) {
            try {
                const _0x1bf9a2 = this['extractYouTubeVideoId'](_0xc96323);
                if (!_0x1bf9a2) {
                    if (_0x26bfa9)
                        _0x26bfa9['textContent'] = 'Invalid\x20YouTube\x20URL';
                    return;
                }
                const _0x48941f = window['API_BASE_URL'] || 'https://api.solisai.video/api';
                try {
                    const _0x1ba7ae = await fetch(_0x48941f + '/youtube/get-metadata/' + _0x1bf9a2, {
                        'signal': AbortSignal['timeout'](0xbb8)
                    });
                    if (_0x1ba7ae['ok']) {
                        const _0x535d64 = await _0x1ba7ae['json']();
                        _0x26bfa9 && _0x535d64['title'] && (_0x26bfa9['textContent'] = _0x535d64['title']);
                        if (_0x308756 && _0x535d64['duration']) {
                            let _0x408f20 = _0x535d64['duration'];
                            typeof _0x535d64['duration'] === 'number' && (_0x408f20 = '~' + Math['floor'](_0x535d64['duration'] / 0x3c) + 'm\x20' + _0x535d64['duration'] % 0x3c + 's'), _0x308756['textContent'] = _0x408f20;
                        }
                        if (_0x31f30b) {
                            const _0x1c777d = this['isYouTubeShort'](_0xc96323) ? 'YouTube\x20Shorts' : 'TikTok\x20/\x20Shorts';
                            _0x31f30b['textContent'] = _0x1c777d;
                        }
                        return;
                    }
                } catch (_0x1c40ca) {
                    _0x4dd2b3('Backend\x20metadata\x20fetch\x20failed,\x20using\x20fallback:', _0x1c40ca['message']);
                }
                if (_0x26bfa9)
                    _0x26bfa9['textContent'] = 'YouTube\x20Video\x20(ID:\x20' + _0x1bf9a2['substring'](0x0, 0x8) + '...)';
                if (_0x31f30b)
                    _0x31f30b['textContent'] = this['isYouTubeShort'](_0xc96323) ? 'YouTube\x20Shorts' : 'TikTok\x20/\x20Shorts';
                if (_0x308756)
                    _0x308756['textContent'] = '~60s';
            } catch (_0x58154a) {
                _0x4dd2b3('Error\x20in\x20fetchVideoMetadata:', _0x58154a);
                if (_0x26bfa9)
                    _0x26bfa9['textContent'] = 'Unable\x20to\x20fetch\x20video\x20info';
            }
        }
    ['closeTemplatePreviewModal']() {
            const _0x5c6e33 = document['getElementById']('templatePreviewModal');
            _0x5c6e33 && (_0x5c6e33['classList']['remove']('active'), _0x5c6e33['style']['display'] = 'none', _0x5c6e33['style']['visibility'] = 'hidden', _0x5c6e33['style']['opacity'] = '0', document['body']['classList']['remove']('modal-open'));
            const _0x19f78a = document['querySelector']('.template-preview-sidebar');
            _0x19f78a && _0x19f78a['classList']['remove']('expanded');
            const _0x315283 = document['getElementById']('navWrapper'),
                _0xc168cd = document['querySelector']('.profile-notif-wrapper');
            _0x315283 && _0x315283['classList']['remove']('disabled'), _0xc168cd && _0xc168cd['classList']['remove']('disabled'), this['currentTemplateForPreview'] = null;
        }
    async ['updateWatermarkToggleState']() {
            const _0x56760e = document['getElementById']('watermarkFreeNotice'),
                _0x1a4f72 = document['getElementById']('watermarkPaidSection'),
                _0x2bf8d9 = document['getElementById']('watermarkToggle');
            if (!_0x2bf8d9)
                return;
            try {
                const _0x353f23 = await fetch(API_BASE_URL + '/api/subscription?t=' + Date['now'](), {
                    'headers': _0x5db2ba(),
                    'credentials': 'include',
                    'cache': 'no-store'
                });
                if (_0x353f23['ok']) {
                    const _0x7b3c4f = await _0x353f23['json'](),
                        _0x31657b = _0x7b3c4f['subscription']?.['plan_name']?.['toLowerCase']() || 'free',
                        _0x5cd32b = [
                        'basic',
                        'prime',
                        'elite'
                    ]['includes'](_0x31657b);
                    if (_0x5cd32b) {
                        if (_0x1a4f72)
                            _0x1a4f72['style']['display'] = 'block';
                        if (_0x56760e)
                            _0x56760e['style']['display'] = 'none';
                        _0x2bf8d9['disabled'] = ![], _0x2bf8d9['checked'] = ![], this['currentTemplateForPreview']['addWatermark'] = ![];
                    } else {
                        if (_0x56760e)
                            _0x56760e['style']['display'] = 'block';
                        if (_0x1a4f72)
                            _0x1a4f72['style']['display'] = 'none';
                        this['currentTemplateForPreview']['addWatermark'] = !![];
                    }
                }
            } catch (_0x377998) {
                _0x4dd2b3('Error\x20checking\x20watermark\x20eligibility:', _0x377998);
                if (_0x1a4f72)
                    _0x1a4f72['style']['display'] = 'block';
                if (_0x56760e)
                    _0x56760e['style']['display'] = 'none';
            }
        }
    ['handleWatermarkToggle'](_0x3e2d9f) {
            if (!this['currentTemplateForPreview'])
                return;
            const _0x294477 = document['getElementById']('watermarkToggle'),
                _0x14d7fd = _0x294477['checked'];
            this['currentTemplateForPreview']['addWatermark'] = _0x14d7fd;
        }
    ['confirmTemplateUse']() {
            if (!this['currentTemplateForPreview']) {
                _0x4c4d4d('Please\x20select\x20a\x20template', 'error');
                return;
            }
            const _0x1d7e33 = this['currentTemplateForPreview']['id'],
                _0x99d9e0 = this['templates'][_0x1d7e33];
            _0x4dd2b3('🔍\x20confirmTemplateUse:', {
                'templateId': _0x1d7e33,
                'availableTemplates': Object['keys'](this['templates']),
                'foundTemplate': !!_0x99d9e0,
                'cachedData': this['currentTemplateForPreview']['data']
            });
            if (!_0x99d9e0 && !this['currentTemplateForPreview']['data']) {
                _0x4dd2b3('❌\x20Template\x20not\x20found:', _0x1d7e33, 'Available:', Object['keys'](this['templates'])), _0x4c4d4d('Template\x20\x22' + _0x1d7e33 + '\x22\x20not\x20found.\x20Available:\x20' + Object['keys'](this['templates'])['join'](',\x20'), 'error');
                return;
            }
            const _0x445e51 = document['getElementById']('aiPromptInput')?.['value']['trim']() || '';
            this['currentAIPrompt'] = _0x445e51;
            const _0x242429 = document['getElementById']('youtubeUrlInput')?.['value']['trim']();
            if (!_0x242429) {
                _0x4c4d4d('Please\x20enter\x20a\x20YouTube\x20URL\x20first', 'error');
                return;
            }
            this['closeTemplatePreviewModal'](), this['startClipProcessingWithSlots'](_0x242429, _0x1d7e33);
        }
    ['showSlotSystemInfo']() {
            let _0x47cfe2 = document['getElementById']('slotSystemInfo');
            if (!_0x47cfe2) {
                _0x47cfe2 = document['createElement']('div'), _0x47cfe2['id'] = 'slotSystemInfo', _0x47cfe2['className'] = 'slot-system-info';
                const _0x1e276a = document['getElementById']('templatesSection');
                _0x1e276a && _0x1e276a['appendChild'](_0x47cfe2);
            }
            _0x47cfe2['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-layer-group\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-system-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Slot\x20System\x20Active</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>This\x20template\x20uses\x20the\x20dynamic\x201-5\x20slot\x20system.\x20New\x20clips\x20will\x20fill\x20from\x20slot\x205\x20upward.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visualization\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x221\x22>1</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x222\x22>2</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x223\x22>3</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x224\x22>4</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-visual\x22\x20data-slot=\x225\x22>5</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slot-labels\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>New\x20clips\x20start\x20here\x20→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        }
    ['showConfirmationButtons'](_0x37e606) {
            const _0x460e85 = document['getElementById']('confirmTemplateBtn'),
                _0x501841 = document['getElementById']('cancelTemplateBtn');
            _0x460e85 && _0x501841 && (_0x37e606 ? (_0x460e85['style']['display'] = 'flex', _0x501841['style']['display'] = 'flex') : (_0x460e85['style']['display'] = 'none', _0x501841['style']['display'] = 'none'));
        }
    async ['confirmTemplateSelection']() {
            if (!this['selectedTemplate']) {
                _0x4c4d4d('Please\x20select\x20a\x20template\x20first', 'error');
                return;
            }
            const _0x16d890 = document['getElementById']('youtubeUrlInput')?.['value']['trim']();
            if (!_0x16d890) {
                _0x4c4d4d('Please\x20enter\x20a\x20YouTube\x20URL\x20first', 'error');
                return;
            }
            this['showTemplateConfirmation'](this['selectedTemplate'], _0x16d890);
        }
    ['showTemplateConfirmation'](_0xe8bdce, _0x3bfda4) {
            const _0x38c083 = this['templates'][_0xe8bdce];
            if (!_0x38c083) {
                _0x4c4d4d('Template\x20not\x20found', 'error');
                return;
            }
            const _0x5ea9af = _0x38c083['supportsSlotSystem'] ? '\x0a\x0a🎯\x20Using\x20Slot\x20System:\x20New\x20clips\x20will\x20fill\x20from\x20slot\x205\x20upward' : '';
            confirm('Create\x20\x22' + _0x38c083['name'] + '\x22\x20from\x20this\x20YouTube\x20URL?\x0a\x0aURL:\x20' + _0x3bfda4 + '\x0a\x0a' + _0x38c083['description'] + '\x0a' + _0x38c083['duration'] + _0x5ea9af + '\x0a\x0aThis\x20may\x20take\x20a\x20few\x20minutes\x20to\x20process.') && this['startClipProcessingWithSlots'](_0x3bfda4, _0xe8bdce);
        }
    ['cancelTemplateSelection']() {
            this['selectedTemplate'] = null, document['querySelectorAll']('.template-card')['forEach'](_0x4a0d5a => {
                _0x4a0d5a['classList']['remove']('selected');
            }), this['showConfirmationButtons'](![]);
            const _0xe188be = document['getElementById']('slotSystemInfo');
            _0xe188be && _0xe188be['remove']();
        }
    async ['startClipProcessingWithSlots'](_0x442ec0, _0xdc42fa) {
            try {
                const _0x24254b = document['getElementById']('watermarkToggle'),
                    _0x2558d4 = _0x24254b ? _0x24254b['checked'] : !![],
                    _0x242053 = _0x5db2ba();
                let _0x3bbd63 = null;
                window['customizer'] && typeof window['customizer']['collectCustomizations'] === 'function' && (_0x3bbd63 = window['customizer']['collectCustomizations']());
                const _0x1574cd = {
                    'url': _0x442ec0,
                    'template_id': _0xdc42fa,
                    'use_slot_system': !![],
                    'watermark_enabled': _0x2558d4
                };
                _0x3bbd63 && Object['keys'](_0x3bbd63)['length'] > 0x0 && (_0x1574cd['customizations'] = _0x3bbd63, _0x4dd2b3('📝\x20Sending\x20customizations\x20with\x20video\x20generation:', _0x3bbd63));
                const _0x20de30 = await fetch(API_BASE_URL + '/clips/start', {
                    'method': 'POST',
                    'headers': _0x242053,
                    'credentials': 'include',
                    'body': JSON['stringify'](_0x1574cd)
                });
                if (!_0x20de30['ok']) {
                    const _0x35f8c4 = await _0x20de30['json']();
                    if (_0x20de30['status'] === 0x1ad) {
                        if (_0x35f8c4['error_code'] === 'GENERATION_COOLDOWN') {
                            const _0x24668c = _0x35f8c4['remaining_seconds'] || _0x35f8c4['cooldown_seconds'] || 0x1e,
                                _0x28c040 = Math['floor'](_0x24668c / 0x3c),
                                _0x9643d7 = _0x24668c % 0x3c;
                            _0x739e78(_0x24668c);
                            const _0x5886a1 = document['getElementById']('durationErrorMessage');
                            if (_0x5886a1) {
                                const _0x4a0141 = document['getElementById']('errorDurationText');
                                if (_0x4a0141) {
                                    let _0x277d7e = '';
                                    _0x28c040 > 0x0 ? _0x277d7e = _0x28c040 + 'm\x20' + _0x9643d7 + 's' : _0x277d7e = _0x24668c + 's', _0x4a0141['textContent'] = 'You\x20can\x20generate\x20another\x20video\x20in\x20' + _0x277d7e + '.';
                                }
                                _0x5886a1['style']['display'] = 'flex';
                            }
                            _0x4c4d4d(_0x35f8c4['error'], 'error');
                            return;
                        }
                        if (_0x35f8c4['error_code'] === 'DAILY_LIMIT_REACHED') {
                            showLimitModal({
                                'used': _0x35f8c4['daily_count'],
                                'limit': _0x35f8c4['daily_limit'],
                                'plan_type': 'free',
                                'last_video_date': _0x35f8c4['last_video_date'],
                                'cooldown_hours': _0x35f8c4['cooldown_hours'] || 0x60
                            });
                            return;
                        } else {
                            if (_0x35f8c4['error_code'] === 'VIDEO_LIMIT_REACHED') {
                                showLimitModal({
                                    'used': _0x35f8c4['storage_info']?.['current_video_count'],
                                    'limit': _0x35f8c4['storage_info']?.['plan_info']?.['videos_space'],
                                    'plan_type': _0x35f8c4['plan_type'],
                                    'last_video_date': _0x35f8c4['last_video_date'],
                                    'cooldown_hours': _0x35f8c4['cooldown_hours'] || 0x60
                                });
                                return;
                            } else {
                                _0x4c4d4d(_0x35f8c4['error'] || 'Rate\x20limit\x20reached.\x20Please\x20try\x20again\x20later.', 'error');
                                return;
                            }
                        }
                    } else {
                        if (_0x35f8c4['error_code'] === 'VIDEO_TOO_LONG') {
                            const _0x5f3a2c = _0x35f8c4['video_minutes'] || 0x0,
                                _0x30cad9 = _0x35f8c4['max_duration_minutes'] || 0x0;
                            _0x4c4d4d('Video\x20too\x20long\x20(' + _0x5f3a2c + 'm).\x20Maximum\x20is\x20' + _0x30cad9 + 'm\x20for\x20your\x20plan.', 'error');
                            return;
                        } else {
                            const _0x2cdc27 = _0x35f8c4['error'] || 'Failed\x20to\x20start\x20processing';
                            _0x4c4d4d(_0x2cdc27, 'error');
                            throw new Error(_0x2cdc27);
                        }
                    }
                }
                const _0x333854 = await _0x20de30['json']();
                this['currentProjectId'] = _0x333854['project_id'];
                const _0x31a19d = {
                    'id': Date['now'](),
                    'projectId': this['currentProjectId'],
                    'name': _0x333854['template']['name'] + '\x20from\x20YouTube',
                    'template': _0xdc42fa,
                    'templateName': _0x333854['template']['name'],
                    'status': 'processing',
                    'progress': 0x0,
                    'message': 'Starting\x20download...',
                    'timestamp': new Date(),
                    'lastChecked': Date['now'](),
                    'slotNumber': null,
                    'useSlotSystem': !![],
                    'isSlotSystem': !![]
                };
                await this['addProcessingItem'](_0x31a19d);
                const _0x1ba63d = document['getElementById']('generationProgressWrapper');
                if (_0x1ba63d) {
                    _0x1ba63d['style']['display'] = 'flex';
                    const _0x541fb7 = document['getElementById']('progressCircle'),
                        _0x2c6329 = document['getElementById']('generationProgressText');
                    _0x541fb7 && (_0x541fb7['style']['strokeDasharray'] = '0\x2075.36'), _0x2c6329 && (_0x2c6329['textContent'] = '0%');
                }
                _0x30e8e8 && _0x333854['project_id'] && _0x30e8e8['registerTask'](_0x333854['project_id'], 'processing');
                const _0x34b36e = document['getElementById']('processUrlBtn');
                _0x34b36e && (_0x34b36e['disabled'] = !![], _0x34b36e['classList']['add']('is-generating')), this['switchTab']('library'), this['startMonitoring'](_0x31a19d['id']);
            } catch (_0x18e753) {
                _0x4dd2b3('startClipProcessingWithSlots\x20error:', _0x18e753), _0x4c4d4d('Failed\x20to\x20start\x20processing:\x20' + _0x18e753['message'], 'error');
            }
        }
    ['startMonitoring'](_0x533675) {
            this['stopMonitoring'](_0x533675);
            const _0x4663a7 = setInterval(async () => {
                const _0x2877d0 = this['processingItems']['find'](_0x2cfc8d => _0x2cfc8d['id'] === _0x533675);
                if (!_0x2877d0) {
                    this['stopMonitoring'](_0x533675);
                    return;
                }
                _0x2877d0['status'] === 'processing' ? await this['checkItemStatus'](_0x533675) : this['stopMonitoring'](_0x533675);
            }, 0xbb8);
            this['monitoringIntervals']['set'](_0x533675, _0x4663a7);
        }
    ['stopMonitoring'](_0x1393d) {
            this['monitoringIntervals']['has'](_0x1393d) && (clearInterval(this['monitoringIntervals']['get'](_0x1393d)), this['monitoringIntervals']['delete'](_0x1393d));
        }
    ['stopAllMonitoring']() {
            this['monitoringIntervals']['forEach']((_0x21724c, _0x4ff726) => {
                clearInterval(_0x21724c);
            }), this['monitoringIntervals']['clear']();
        }
    async ['checkItemStatus'](_0x18e27a) {
            try {
                const _0x3ed0d1 = this['processingItems']['find'](_0x3a751f => _0x3a751f['id'] === _0x18e27a);
                if (!_0x3ed0d1)
                    return;
                const _0x5b5c1c = _0x5db2ba(),
                    _0x2197b7 = await fetch(API_BASE_URL + '/clips/status/' + _0x3ed0d1['projectId'], {
                        'headers': _0x5b5c1c,
                        'credentials': 'include'
                    });
                if (!_0x2197b7['ok'])
                    return;
                const _0x5c867a = await _0x2197b7['json'](),
                    _0x50ec53 = _0x3ed0d1['status'] !== _0x5c867a['status'] || _0x3ed0d1['progress'] !== _0x5c867a['progress'];
                _0x50ec53 && (_0x3ed0d1['status'] = _0x5c867a['status'], _0x3ed0d1['progress'] = _0x5c867a['progress'], _0x3ed0d1['message'] = _0x5c867a['message'], _0x3ed0d1['lastChecked'] = Date['now'](), _0x5c867a['slot_number'] && _0x3ed0d1['isSlotSystem'] && (_0x3ed0d1['slotNumber'] = _0x5c867a['slot_number'], _0x3ed0d1['name'] = _0x3ed0d1['templateName'] + '\x20(Slot\x20' + _0x5c867a['slot_number'] + ')'), this['updateProcessingView'](), this['currentTab'] === 'library' && this['updateLibraryView'](), this['saveProcessingItems']());
                if (_0x5c867a['status'] === 'completed') {
                    _0x3ed0d1['status'] = 'completed', this['moveToLibrary'](_0x3ed0d1), this['stopMonitoring'](_0x18e27a), _0x4c4d4d('Clip\x20created\x20successfully!', 'success');
                    const _0x482b07 = document['getElementById']('processUrlBtn');
                    _0x482b07 && (_0x482b07['disabled'] = ![], _0x482b07['classList']['remove']('is-generating')), _0x3ed0d1['isSlotSystem'] && _0x3ed0d1['slotNumber'] && _0x4c4d4d('Clip\x20added\x20to\x20Slot\x20' + _0x3ed0d1['slotNumber'], 'info'), this['switchTab']('library'), this['updateProcessingView'](), this['saveProcessingItems']();
                } else {
                    if (_0x5c867a['status'] === 'error') {
                        _0x3ed0d1['status'] = 'failed', _0x3ed0d1['message'] = _0x5c867a['message'], this['stopMonitoring'](_0x18e27a);
                        const _0x139c2a = document['getElementById']('processUrlBtn');
                        _0x139c2a && (_0x139c2a['disabled'] = ![], _0x139c2a['classList']['remove']('is-generating'));
                        setTimeout(() => {
                            this['processingItems'] = this['processingItems']['filter'](_0x32c1f2 => _0x32c1f2['id'] !== _0x18e27a), this['updateLibraryView'](), this['saveProcessingItems']();
                        }, 0x1388);
                        const _0x4ebb56 = _0x5c867a['message'] || '';
                        _0x4dd2b3('Processing\x20error\x20detected:', _0x4ebb56);
                        const _0x2f4efc = /Video is too long\. Maximum allowed:\s*(\d+)\s*minutes\. Your video:\s*(\d+)\s*minutes/i,
                            _0x31dfdf = /Maximum allowed:\s*(\d+)\s*minutes.*Your video:\s*(\d+)\s*minutes/i,
                            _0x48db59 = /too long|duration limit/i;
                        let _0x59fcee = _0x4ebb56['match'](_0x2f4efc);
                        _0x4dd2b3('Pattern\x201\x20match:', _0x59fcee);
                        if (_0x59fcee && _0x59fcee['length'] >= 0x3) {
                            const _0x1573e3 = parseInt(_0x59fcee[0x1]),
                                _0x3cc10a = parseInt(_0x59fcee[0x2]);
                            _0x4dd2b3('✓\x20Video\x20too\x20long\x20detected\x20(pattern\x201):', _0x3cc10a, 'max:', _0x1573e3), setTimeout(() => {
                                window && typeof window['openVideoTooLongModal'] === 'function' && window['openVideoTooLongModal'](_0x3cc10a, _0x1573e3);
                            }, 0x64);
                        } else {
                            _0x59fcee = _0x4ebb56['match'](_0x31dfdf), _0x4dd2b3('Pattern\x202\x20match:', _0x59fcee);
                            if (_0x59fcee && _0x59fcee['length'] >= 0x3) {
                                const _0x36c431 = parseInt(_0x59fcee[0x1]),
                                    _0x461fab = parseInt(_0x59fcee[0x2]);
                                _0x4dd2b3('✓\x20Video\x20too\x20long\x20detected\x20(pattern\x202):', _0x461fab, 'max:', _0x36c431), setTimeout(() => {
                                    window && typeof window['openVideoTooLongModal'] === 'function' && window['openVideoTooLongModal'](_0x461fab, _0x36c431);
                                }, 0x64);
                            } else {
                                if (_0x48db59['test'](_0x4ebb56)) {
                                    _0x4dd2b3('Pattern\x203\x20match\x20(keywords\x20found),\x20trying\x20number\x20extraction...');
                                    const _0x2482ac = _0x4ebb56['match'](/\d+/g);
                                    if (_0x2482ac && _0x2482ac['length'] >= 0x2) {
                                        const _0x25ef77 = parseInt(_0x2482ac[_0x2482ac['length'] - 0x2]),
                                            _0x3b8a79 = parseInt(_0x2482ac[_0x2482ac['length'] - 0x1]);
                                        _0x25ef77 > 0x0 && _0x3b8a79 > 0x0 && _0x25ef77 > _0x3b8a79 && (_0x4dd2b3('✓\x20Video\x20too\x20long\x20detected\x20(fallback):', _0x25ef77, 'max:', _0x3b8a79), setTimeout(() => {
                                            window && typeof window['openVideoTooLongModal'] === 'function' && window['openVideoTooLongModal'](_0x25ef77, _0x3b8a79);
                                        }, 0x64));
                                    }
                                }
                            }
                        }
                        _0x4c4d4d('Clip\x20creation\x20failed:\x20' + _0x5c867a['message'], 'error');
                    }
                }
            } catch (_0x5ba3dd) {
                _0x4dd2b3('Error\x20checking\x20status\x20for\x20item', _0x18e27a, _0x5ba3dd);
            }
        }
    ['startSmartMonitoring']() {
            this['processingItems']['forEach'](_0x33140b => {
                _0x33140b['status'] === 'processing' && this['startMonitoring'](_0x33140b['id']);
            });
        }
    ['isValidYouTubeUrl'](_0x2c05f9) {
            try {
                const _0x1c31e1 = new URL(_0x2c05f9['startsWith']('http') ? _0x2c05f9 : 'https://' + _0x2c05f9),
                    _0x4e3d72 = _0x1c31e1['hostname']['toLowerCase'](),
                    _0x364dc9 = _0x1c31e1['pathname']['toLowerCase'](),
                    _0x1ff55f = new Set([
                    'youtube.com',
                    'www.youtube.com',
                    'youtu.be',
                    'www.youtu.be'
                ]);
                if (!_0x1ff55f['has'](_0x4e3d72))
                    return ![];
                if (_0x364dc9['includes']('..') || _0x364dc9['includes']('//'))
                    return ![];
                if (!_0x364dc9 || _0x364dc9 === '/')
                    return ![];
                const _0x3cc218 = this['extractYouTubeVideoId'](_0x2c05f9);
                if (!_0x3cc218)
                    return ![];
                return /^[a-zA-Z0-9_-]{11}$/ ['test'](_0x3cc218);
            } catch (_0x5ace86) {
                return ![];
            }
        }
    ['validateProjectId'](_0xef6118) {
            if (!_0xef6118 || typeof _0xef6118 !== 'string')
                return ![];
            if (_0xef6118['match'](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
                return ![];
            return /^[a-zA-Z0-9_-]+$/ ['test'](_0xef6118);
        }
    ['validateItemId'](_0x140a28) {
            if (!_0x140a28 || typeof _0x140a28 !== 'string')
                return ![];
            if (_0x140a28['match'](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
                return ![];
            return /^[a-zA-Z0-9_.-]+$/ ['test'](_0x140a28);
        }
    ['toggleUrlButtonLoading'](_0x1753d0) {
            const _0x3f0aa4 = document['getElementById']('processUrlBtn');
            if (!_0x3f0aa4)
                return;
            _0x1753d0 ? (_0x3f0aa4['classList']['add']('loading'), _0x3f0aa4['disabled'] = !![], sessionStorage['setItem']('urlButtonLockeduntil', Date['now']()['toString']()), sessionStorage['setItem']('urlButtonLocked', 'true')) : (_0x3f0aa4['classList']['remove']('loading'), _0x3f0aa4['disabled'] = ![], sessionStorage['removeItem']('urlButtonLocked'), sessionStorage['removeItem']('urlButtonLockeduntil'));
        }
    ['enforceUrlButtonRateLimitOnLoad']() {
            const _0x604b75 = document['getElementById']('processUrlBtn');
            if (!_0x604b75)
                return;
            const _0x4d71ab = sessionStorage['getItem']('urlButtonLocked') === 'true',
                _0x4f8629 = sessionStorage['getItem']('urlButtonLockeduntil');
            if (_0x4d71ab && _0x4f8629) {
                const _0x1fb869 = parseInt(_0x4f8629, 0xa),
                    _0x48c22b = Date['now'](),
                    _0x5b92eb = _0x1fb869 - _0x48c22b;
                if (_0x5b92eb > 0x0) {
                    const _0x5704d8 = _0x26962a['RATE_LIMITING']['YOUTUBE_PROCESS_MIN_MS'] || 0xbb8;
                    if (_0x5b92eb < _0x5704d8 + 0x1388) {
                        _0x604b75['disabled'] = !![], _0x604b75['style']['cursor'] = 'not-allowed', _0x604b75['style']['opacity'] = '0.5', _0x604b75['classList']['add']('loading');
                        const _0x21a8b7 = setTimeout(() => {
                            _0x604b75['disabled'] = ![], _0x604b75['style']['cursor'] = 'pointer', _0x604b75['style']['opacity'] = '1', _0x604b75['classList']['remove']('loading'), sessionStorage['removeItem']('urlButtonLocked'), sessionStorage['removeItem']('urlButtonLockeduntil');
                        }, _0x5b92eb);
                        _0x604b75['_unlockTimer'] = _0x21a8b7;
                    }
                } else
                    sessionStorage['removeItem']('urlButtonLocked'), sessionStorage['removeItem']('urlButtonLockeduntil');
            }
        }
    async ['processYouTubeUrl']() {
        const _0x3c1d1d = Date['now']();
        if (_0x3c1d1d - this['lastYouTubeProcessTime'] < _0x26962a['RATE_LIMITING']['YOUTUBE_PROCESS_MIN_MS']) {
            _0x4c4d4d('Please\x20wait\x20a\x20moment\x20before\x20trying\x20again', 'warning');
            return;
        }
        this['lastYouTubeProcessTime'] = _0x3c1d1d;
        const _0x1e5b0d = document['getElementById']('youtubeUrlInput');
        if (!_0x1e5b0d)
            return;
        const _0x411ad8 = _0x1e5b0d['value']['trim']();
        if (!_0x411ad8) {
            _0x4c4d4d('Please\x20enter\x20a\x20YouTube\x20URL', 'error');
            return;
        }
        if (!this['isValidYouTubeUrl'](_0x411ad8)) {
            _0x4c4d4d('Please\x20enter\x20a\x20valid\x20YouTube\x20URL\x20(youtube.com\x20or\x20youtu.be)', 'error');
            return;
        }
        this['toggleUrlButtonLoading'](!![]);
        try {
            const _0x85ed3 = await this['checkVideoDurationBeforeTemplates'](_0x411ad8);
            if (!_0x85ed3['allowed']) {
                this['toggleUrlButtonLoading'](![]);
                return;
            }
            const _0x123716 = _0x5db2ba();
            try {
                const _0x3ac50a = await fetch(API_BASE_URL + '/clips/check-limits', {
                    'method': 'GET',
                    'headers': _0x123716,
                    'credentials': 'include'
                });
                if (_0x3ac50a['ok']) {
                    const _0x3a572b = await _0x3ac50a['json']();
                    if (_0x3a572b['is_generating']) {
                        _0x4c4d4d('A\x20video\x20is\x20already\x20being\x20generated.\x20Please\x20wait\x20for\x20it\x20to\x20complete\x20before\x20starting\x20another\x20one.', 'warning');
                        const _0x28eb44 = document['getElementById']('processUrlBtn');
                        _0x28eb44 && (_0x28eb44['disabled'] = !![], _0x28eb44['style']['opacity'] = '0.5', _0x28eb44['style']['cursor'] = 'not-allowed', _0x28eb44['classList']['add']('is-generating'));
                        this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                    if (!_0x3a572b['can_generate']) {
                        showLimitModal({
                            'used': _0x3a572b['daily']?.['used'] || 0x0,
                            'limit': _0x3a572b['daily']?.['limit'] || 0x1,
                            'plan_type': _0x3a572b['plan']?.['name']?.['toLowerCase']() || 'free',
                            'last_video_date': _0x3a572b['last_video_date'] || '1970-01-01',
                            'cooldown_hours': _0x3a572b['generation']?.['cooldown_hours'] || 0x60
                        }), this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                    if (_0x3a572b['daily_limit_reached']) {
                        showLimitModal({
                            'used': _0x3a572b['daily_count'],
                            'limit': _0x3a572b['daily_limit'],
                            'plan_type': 'free',
                            'last_video_date': _0x3a572b['last_video_date'] || '1970-01-01',
                            'cooldown_hours': _0x3a572b['generation']?.['cooldown_hours'] || 0x60
                        }), this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                    if (_0x3a572b['storage_limit_reached']) {
                        showLimitModal({
                            'used': _0x3a572b['current_video_count'],
                            'limit': _0x3a572b['plan_video_limit'],
                            'plan_type': _0x3a572b['plan']?.['name']?.['toLowerCase']() || 'free',
                            'last_video_date': _0x3a572b['last_video_date'] || '1970-01-01',
                            'cooldown_hours': _0x3a572b['generation']?.['cooldown_hours'] || 0x60
                        }), this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                }
            } catch (_0xeaa6b4) {}
            this['switchTab']('templates'), _0x4c4d4d('YouTube\x20URL\x20validated.\x20Please\x20select\x20a\x20template.', 'success');
            const _0x134eb6 = document['getElementById']('clipPreviewContainer');
            _0x134eb6 && (_0x134eb6['style']['display'] = 'block');
        } finally {
            this['toggleUrlButtonLoading'](![]);
        }
    }
    async ['checkVideoDurationBeforeTemplates'](_0x331628) {
        try {
            const _0x88f07e = _0x5db2ba(),
                _0x4db6f4 = await fetch(API_BASE_URL + '/clips/check-duration', {
                    'method': 'POST',
                    'headers': _0x88f07e,
                    'credentials': 'include',
                    'body': JSON['stringify']({
                        'url': _0x331628
                    })
                }),
                _0x1b41ad = await _0x4db6f4['json']();
            if (!_0x4db6f4['ok']) {
                if (_0x1b41ad['error_code'] === 'VIDEO_TOO_LONG') {
                    const _0x508720 = _0x1b41ad['video_minutes'] || 0x0,
                        _0x5003c2 = _0x1b41ad['max_duration_minutes'] || 0x0;
                    _0x4dd2b3('Video\x20too\x20long\x20detected\x20at\x20URL\x20input:', _0x508720, 'max:', _0x5003c2);
                    const _0xe69364 = document['getElementById']('durationErrorMessage'),
                        _0x23e3fa = document['getElementById']('errorDurationText');
                    return _0xe69364 && _0x23e3fa && (_0x23e3fa['textContent'] = 'You\x20cannot\x20post\x20a\x20video\x20above\x20' + _0x5003c2 + '\x20minutes.\x20Your\x20video\x20is\x20' + _0x508720 + '\x20minutes.\x20Upgrade\x20to\x20unlock\x20longer\x20videos.', _0xe69364['style']['display'] = 'block'), {
                        'allowed': ![]
                    };
                } else
                    return _0x4c4d4d('Error\x20checking\x20video:\x20' + (_0x1b41ad['error'] || 'Unknown\x20error'), 'error'), {
                        'allowed': ![]
                    };
            }
            const _0x590e6e = document['getElementById']('durationErrorMessage');
            return _0x590e6e && (_0x590e6e['style']['display'] = 'none'), {
                'allowed': !![],
                'duration': _0x1b41ad['duration_minutes'],
                'maxAllowed': _0x1b41ad['max_duration_minutes']
            };
        } catch (_0x4122e3) {
            _0x4dd2b3('Error\x20checking\x20video\x20duration:', _0x4122e3);
            const _0xc3e9d4 = document['getElementById']('durationErrorMessage');
            return _0xc3e9d4 && (_0xc3e9d4['style']['display'] = 'none'), {
                'allowed': !![]
            };
        }
    }
    async ['generateClipWithSlotSystem']() {
            const _0x37f1a6 = document['getElementById']('youtubeUrlInput');
            if (!_0x37f1a6)
                return;
            const _0x1eff81 = _0x37f1a6['value']['trim']();
            if (!_0x1eff81) {
                _0x4c4d4d('Please\x20process\x20a\x20YouTube\x20URL\x20first', 'error');
                return;
            }
            if (!this['selectedTemplate']) {
                _0x4c4d4d('Please\x20select\x20a\x20template\x20first', 'error');
                return;
            }
            this['startClipProcessingWithSlots'](_0x1eff81, this['selectedTemplate']);
        }
    ['addProcessingItem'](_0x71c869) {
            this['processingItems']['unshift'](_0x71c869), this['saveProcessingItems'](), this['currentTab'] === 'library' && this['updateLibraryView']();
        }
    ['updateProcessingView']() {
            if (this['currentTab'] === 'library') {
                this['updateLibraryView']();
                return;
            }
            this['processingItems']['forEach'](_0x3062b5 => {
                const _0x3a10bd = _0x3062b5['progress'] || 0x0,
                    _0x4d1eb7 = 0x64 - _0x3a10bd,
                    _0x3429ff = document['querySelector']('[data-loading-id=\x22' + _0x3062b5['id'] + '\x22]\x20.loading-percentage');
                _0x3429ff && (_0x3429ff['textContent'] = _0x4d1eb7 + '%\x20left');
                const _0x4d1180 = document['querySelectorAll']('[data-loading-id=\x22' + _0x3062b5['id'] + '\x22]\x20.loader-part');
                _0x4d1180['forEach']((_0x1a71e2, _0x2259e7) => {
                    const _0x134594 = (_0x2259e7 + 0x1) * 0x19;
                    _0x1a71e2['style']['opacity'] = _0x4d1eb7 >= _0x134594 ? '1' : '0';
                });
            });
        }
    ['oldUpdateProcessingView_old']() {
            const _0x96a74f = document['getElementById']('processingList'),
                _0x297b42 = document['getElementById']('processingSection'),
                _0x481cda = document['getElementById']('emptyProcessingState');
            if (!_0x96a74f || !_0x481cda || !_0x297b42)
                return;
            if (this['processingItems']['length'] === 0x0) {
                _0x481cda['style']['display'] = 'block', _0x96a74f['innerHTML'] = '', _0x297b42['style']['display'] = 'none';
                return;
            }
            _0x481cda['style']['display'] = 'none', _0x297b42['style']['display'] = 'block', _0x96a74f['innerHTML'] = this['processingItems']['map'](_0x242106 => {
                const _0x587a1e = _0x242106['progress'] || 0x0;
                return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-item\x22\x20data-id=\x22' + _0x242106['id'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Thumbnail\x20with\x20video\x20icon\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-thumbnail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polygon\x20points=\x2223\x207\x2016\x2012\x2023\x2017\x2023\x207\x22></polygon>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x221\x22\x20y=\x225\x22\x20width=\x2215\x22\x20height=\x2214\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Progressive\x20circular\x20loader\x20(only\x20show\x20if\x20processing)\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x242106['status'] === 'processing' ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + this['renderLoaderParts'](_0x587a1e) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Info\x20section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-name\x22>' + _0x242106['name'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-status\x20' + _0x242106['status'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-' + this['getStatusIcon'](_0x242106['status']) + '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + this['formatStatus'](_0x242106['status']) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x242106['message'] && _0x242106['status'] === 'processing' ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-message\x22>' + _0x242106['message'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x242106['status'] === 'processing' ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-percentage\x22>' + _0x587a1e + '%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            })['join']('');
        }
    ['getStatusIcon'](_0x358bf1) {
            const _0x4ef8d7 = {
                'processing': 'spinner',
                'completed': 'check',
                'failed': 'exclamation'
            };
            return _0x4ef8d7[_0x358bf1] || 'question';
        }
    ['formatStatus'](_0x47587c) {
            return _0x47587c['charAt'](0x0)['toUpperCase']() + _0x47587c['slice'](0x1);
        }
    ['renderLoaderParts'](_0x5cd453) {
            const _0x497972 = 0x64 - _0x5cd453,
                _0xe3cb72 = [
                    {
                        'opacity': _0x497972 >= 0x19 ? 0x1 : 0x0
                    },
                    {
                        'opacity': _0x497972 >= 0x32 ? 0x1 : 0x0
                    },
                    {
                        'opacity': _0x497972 >= 0x4b ? 0x1 : 0x0
                    },
                    {
                        'opacity': _0x497972 >= 0x64 ? 0x1 : 0x0
                    }
            ];
            return _0xe3cb72['map']((_0x534841, _0x4512d1) => '<div\x20class=\x22loader-part\x20loader-part-' + (_0x4512d1 + 0x1) + '\x22\x20style=\x22opacity:\x20' + _0x534841['opacity'] + ';\x20transition:\x20opacity\x200.4s\x20ease;\x22></div>')['join']('');
        }
    async ['downloadClip'](_0x4efe5f) {
            try {
                console['log']('📥\x20Download\x20initiated\x20for\x20projectId:', _0x4efe5f);
                const _0x5daa3b = _0x5db2ba(),
                    _0x40eada = API_BASE_URL + '/clips/download/' + _0x4efe5f;
                console['log']('📥\x20Fetching\x20from:', _0x40eada);
                const _0x5f521c = await fetch(_0x40eada, {
                    'headers': _0x5daa3b,
                    'credentials': 'include'
                });
                console['log']('📥\x20Response\x20status:', _0x5f521c['status']);
                if (_0x5f521c['ok']) {
                    const _0x36c005 = await _0x5f521c['blob'](),
                        _0x19c929 = window['URL']['createObjectURL'](_0x36c005),
                        _0x57c466 = document['createElement']('a');
                    _0x57c466['style']['display'] = 'none', _0x57c466['href'] = _0x19c929;
                    const _0x260154 = _0x5f521c['headers']['get']('content-disposition');
                    let _0x1c8086 = 'clip.mp4';
                    if (_0x260154) {
                        const _0x194636 = _0x260154['match'](/filename="(.+)"/);
                        _0x194636 && (_0x1c8086 = _0x194636[0x1]);
                    }
                    _0x57c466['download'] = _0x1c8086, document['body']['appendChild'](_0x57c466), _0x57c466['click'](), window['URL']['revokeObjectURL'](_0x19c929), document['body']['removeChild'](_0x57c466), console['log']('✅\x20Download\x20completed:', _0x1c8086), _0x4c4d4d('Download\x20started!', 'success');
                } else {
                    console['log']('❌\x20Download\x20failed,\x20status:', _0x5f521c['status']);
                    throw new Error('Download\x20failed\x20with\x20status\x20' + _0x5f521c['status']);
                }
            } catch (_0x1393eb) {
                console['error']('❌\x20Download\x20error:', _0x1393eb), _0x4c4d4d('Download\x20failed:\x20' + _0x1393eb['message'], 'error');
            }
        }
    ['cancelProcessing'](_0x30a686) {
            const _0x442a89 = this['processingItems']['find'](_0x44774e => _0x44774e['id'] === _0x30a686);
            _0x442a89 && (_0x442a89['status'] = 'cancelled', this['stopMonitoring'](_0x30a686), this['updateProcessingView'](), this['saveProcessingItems'](), _0x4c4d4d('Processing\x20cancelled', 'info'));
        }
    ['deleteProcessingItem'](_0x48cac2) {
            const _0x1495c5 = this['processingItems']['findIndex'](_0x5db2b8 => _0x5db2b8['id'] === _0x48cac2);
            if (_0x1495c5 !== -0x1) {
                const _0x2169ce = this['processingItems'][_0x1495c5];
                if (_0x2169ce['status'] === 'processing') {
                    _0x4c4d4d('Cannot\x20delete\x20items\x20while\x20processing.\x20Wait\x20for\x20completion\x20or\x20cancel\x20first.', 'warning');
                    return;
                }
                this['deleteProjectFromServer'](_0x2169ce['projectId']), this['processingItems']['splice'](_0x1495c5, 0x1), this['stopMonitoring'](_0x48cac2), this['updateProcessingView'](), this['saveProcessingItems'](), _0x4c4d4d(_0x2169ce['name'] + '\x20deleted\x20successfully', 'success');
            }
        }
    ['retryProcessing'](_0x5132ef) {
            const _0x4c5ff0 = this['processingItems']['find'](_0x2177fa => _0x2177fa['id'] === _0x5132ef);
            _0x4c5ff0 && (_0x4c5ff0['status'] = 'processing', _0x4c5ff0['progress'] = 0x0, this['updateProcessingView'](), this['saveProcessingItems'](), this['startMonitoring'](_0x5132ef), _0x4c4d4d('Retrying\x20processing...', 'info'));
        }
    ['moveToLibrary'](_0x2a69be) {
            if (!this['validateProjectId'](_0x2a69be['projectId'])) {
                _0x4dd2b3('❌\x20SECURITY:\x20Invalid\x20projectId\x20format\x20rejected:\x20' + _0x2a69be['projectId']);
                return;
            }
            const _0x5d403b = {
                    'id': _0x2a69be['id'],
                    'projectId': _0x2a69be['projectId'],
                    'name': _0x2a69be['name'],
                    'template': _0x2a69be['template'],
                    'templateName': _0x2a69be['templateName'],
                    'timestamp': _0x2a69be['timestamp'],
                    'status': 'completed',
                    'slotNumber': _0x2a69be['slotNumber'],
                    'isSlotSystem': _0x2a69be['isSlotSystem']
                },
                _0x2b8ac0 = document['querySelector']('[data-processing-id=\x22' + _0x2a69be['id'] + '\x22]');
            _0x2b8ac0 && (_0x2b8ac0['style']['transition'] = 'all\x200.5s\x20ease', _0x2b8ac0['style']['opacity'] = '0.5', setTimeout(() => {
                _0x2b8ac0['innerHTML'] = '';
                const _0x2af7f3 = _0x206168(_0x5d403b['name']),
                    _0x3aac92 = _0x333175(_0x5d403b['thumbnailUrl']) ? _0x5d403b['thumbnailUrl'] : 'https://via.placeholder.com/1000x600?text=No+Image',
                    _0x3514a8 = document['createElement']('div');
                _0x3514a8['className'] = 'card-preview', _0x3514a8['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-pill\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22>Ready</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x3aac92 + '\x22\x20alt=\x22Asset\x20Preview\x22\x20onerror=\x22this.src=\x27https://via.placeholder.com/1000x600?text=No+Image\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22card-action-btn\x20library-delete-btn\x22\x20title=\x22Delete\x20clip\x22\x20tabindex=\x220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x206h18\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M19\x206v14c0\x201-1\x202-2\x202H7c-1\x200-2-1-2-2V6\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x206V4c0-1\x201-2\x202-2h4c1\x200\x202\x201\x202\x202v2\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2210\x22\x20y1=\x2211\x22\x20x2=\x2210\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2214\x22\x20y1=\x2211\x22\x20x2=\x2214\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                const _0x387066 = document['createElement']('div');
                _0x387066['className'] = 'card-content';
                const _0x369d1e = document['createElement']('div');
                _0x369d1e['className'] = 'info-group';
                const _0x15931b = document['createElement']('h2');
                _0x15931b['className'] = 'card-title', _0x15931b['textContent'] = _0x2af7f3;
                const _0x492052 = document['createElement']('div');
                _0x492052['className'] = 'card-footer', _0x492052['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22duration-text\x22>' + _0x206168(_0x5d403b['duration'] || '0s') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                const _0x46f978 = document['createElement']('button');
                _0x46f978['className'] = 'export-btn\x20library-download-btn', _0x46f978['title'] = 'Download\x20clip', _0x46f978['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x369d1e['appendChild'](_0x15931b), _0x369d1e['appendChild'](_0x492052), _0x387066['appendChild'](_0x369d1e), _0x387066['appendChild'](_0x46f978), _0x2b8ac0['appendChild'](_0x3514a8), _0x2b8ac0['appendChild'](_0x387066), _0x2b8ac0['removeAttribute']('data-processing-id'), _0x2b8ac0['setAttribute']('data-id', _0x5d403b['id']), _0x2b8ac0['setAttribute']('data-project-id', _0x5d403b['projectId']), _0x2b8ac0['classList']['remove']('processing-card'), _0x2b8ac0['style']['opacity'] = '0', _0x2b8ac0['style']['transition'] = 'opacity\x200.3s\x20ease', setTimeout(() => {
                    _0x2b8ac0['style']['opacity'] = '1';
                }, 0xa), this['attachLibraryCardListeners'](_0x2b8ac0, _0x5d403b['id'], _0x5d403b['projectId']), this['fetchAndUpdateDuration'](_0x2b8ac0, _0x5d403b['projectId']);
            }, 0x12c)), this['processingItems'] = this['processingItems']['filter'](_0x1a4ff9 => _0x1a4ff9['id'] !== _0x2a69be['id']), this['libraryItems']['unshift'](_0x5d403b), this['saveProcessingItems'](), this['saveLibraryItems'](), this['loadAndDisplayStorageInfo'](), this['updateRecentActivity'](), _0x4dd2b3('✅\x20Card\x20transformed:\x20' + _0x2a69be['name']);
        }
    ['fetchAndUpdateDuration'](_0x14cb88, _0x505555) {
            if (!this['validateProjectId'](_0x505555)) {
                _0x4dd2b3('❌\x20SECURITY:\x20Invalid\x20projectId\x20in\x20fetchAndUpdateDuration');
                return;
            }
            fetch('/api/clips/duration/' + encodeURIComponent(_0x505555), {
                'method': 'GET',
                'credentials': 'include'
            })['then'](_0x1e9e6f => {
                if (!_0x1e9e6f['ok'])
                    throw new Error('HTTP\x20' + _0x1e9e6f['status']);
                return _0x1e9e6f['json']();
            })['then'](_0x4cceb2 => {
                if (_0x4cceb2['duration_formatted'] && _0x14cb88) {
                    const _0x39c2be = _0x14cb88['querySelector']('.duration-text');
                    _0x39c2be && (_0x39c2be['textContent'] = _0x4cceb2['duration_formatted']);
                }
            })['catch'](_0x143871 => _0x4dd2b3('Could\x20not\x20fetch\x20duration:', _0x143871));
        }
    ['attachLibraryCardListeners'](_0x4e00a5, _0x43fdd2, _0x14003b) {
            const _0x4b1b50 = _0x4e00a5['querySelector']('.library-download-btn'),
                _0x4c33e1 = _0x4e00a5['querySelector']('.library-delete-btn');
            _0x4b1b50 && _0x4b1b50['addEventListener']('click', _0x4e194f => {
                _0x4e194f['preventDefault'](), _0x4e194f['stopPropagation'](), _0x14003b && this['validateProjectId'](_0x14003b) && clipsStudio ? clipsStudio['downloadClip'](_0x14003b) : _0x4dd2b3('❌\x20SECURITY:\x20Invalid\x20projectId\x20for\x20download:\x20' + _0x14003b);
            }), _0x4c33e1 && _0x4c33e1['addEventListener']('click', _0x1721ae => {
                _0x1721ae['preventDefault'](), _0x1721ae['stopPropagation'](), _0x43fdd2 && this['validateItemId'](_0x43fdd2) && clipsStudio ? clipsStudio['deleteClip'](_0x43fdd2) : _0x4dd2b3('❌\x20SECURITY:\x20Invalid\x20itemId\x20for\x20delete:\x20' + _0x43fdd2);
            });
        }
    async ['loadLibraryItems']() {
            try {
                const _0x1e2bbc = _0x5db2ba(),
                    _0x248705 = await fetch(API_BASE_URL + '/clips/projects', {
                        'headers': _0x1e2bbc,
                        'credentials': 'include'
                    });
                if (_0x248705['ok']) {
                    const _0xd02154 = await _0x248705['json']();
                    this['libraryItems'] = _0xd02154['projects']['map'](_0x504818 => ({
                        'id': _0x504818['id'],
                        'projectId': _0x504818['id'],
                        'name': _0x504818['template_name'] || 'Clip',
                        'template': _0x504818['template'],
                        'templateName': _0x504818['template_name'],
                        'timestamp': new Date(_0x504818['created_at']),
                        'status': 'completed',
                        'url': _0x504818['url'],
                        'thumbnailUrl': _0x504818['thumbnail_url'],
                        'slotNumber': _0x504818['slot_number'],
                        'isSlotSystem': _0x504818['slots'] ? !![] : ![],
                        'slots': _0x504818['slots']
                    })), this['updateLibraryView'](), this['updateRecentActivity'](), this['saveLibraryItems']();
                }
            } catch (_0xe82305) {
                _0x4dd2b3('Failed\x20to\x20load\x20library\x20items:', _0xe82305), this['loadLibraryItemsFromStorage']();
            }
        }
    ['startLibraryPolling']() {
            this['libraryPollingInterval'] && clearInterval(this['libraryPollingInterval']), this['libraryPollingInterval'] = setInterval(async () => {
                try {
                    await this['loadLibraryItems']()['catch'](_0x27f79 => _0x4dd2b3('Auto-refresh\x20library\x20failed:', _0x27f79));
                    if (this['processingItems']['length'] > 0x0) {
                        const _0x2390d6 = [];
                        for (const _0x2d532d of this['processingItems']) {
                            try {
                                const _0x4caccd = _0x5db2ba(),
                                    _0x5f44c6 = await fetch(API_BASE_URL + '/clips/status/' + _0x2d532d['projectId'], {
                                        'headers': _0x4caccd,
                                        'credentials': 'include',
                                        'timeout': 0xbb8
                                    });
                                if (_0x5f44c6['ok']) {
                                    const _0x2e7d83 = await _0x5f44c6['json']();
                                    _0x2e7d83['status'] && [
                                    'processing',
                                    'waiting',
                                    'pending',
                                    'queued'
                                ]['includes'](_0x2e7d83['status']) ? _0x2390d6['push'](_0x2d532d) : _0x4dd2b3('🧹\x20Removing\x20stale\x20card\x20during\x20polling:\x20' + _0x2d532d['name'] + '\x20(status:\x20' + _0x2e7d83['status'] + ')');
                                } else
                                    _0x4dd2b3('🧹\x20Backend\x20check\x20failed\x20for\x20' + _0x2d532d['name'] + ',\x20removing\x20from\x20processing');
                            } catch (_0x265e1a) {
                                _0x4dd2b3('⚠️\x20Error\x20validating\x20' + _0x2d532d['name'] + '\x20during\x20polling\x20-\x20removing:\x20' + _0x265e1a['message']);
                            }
                        }
                        _0x2390d6['length'] !== this['processingItems']['length'] && (this['processingItems'] = _0x2390d6, this['saveProcessingItems'](), this['updateLibraryView'](), _0x4dd2b3('🧹\x20Polling\x20cleanup:\x20' + this['processingItems']['length'] + '\x20active\x20items\x20remaining'));
                    }
                } catch (_0x44dc64) {
                    _0x4dd2b3('Auto-polling\x20error:', _0x44dc64);
                }
            }, 0x1388), _0x4dd2b3('📡\x20Library\x20auto-polling\x20started\x20(every\x205s\x20with\x20processing\x20card\x20validation)');
        }
    ['stopLibraryPolling']() {
            this['libraryPollingInterval'] && (clearInterval(this['libraryPollingInterval']), this['libraryPollingInterval'] = null, _0x4dd2b3('📡\x20Library\x20auto-polling\x20stopped'));
        }
    async ['loadAndDisplayStorageInfo']() {
            try {
                const _0x587984 = _0x280151?.['id'];
                if (!_0x587984)
                    return;
                const _0x2a3a67 = _0x5db2ba();
                _0x4dd2b3('🔄\x20Fetching\x20fresh\x20subscription\x20info\x20from\x20backend\x20-\x20NO\x20CACHE...');
                const _0x2e731f = await fetch(API_BASE_URL + '/api/subscription', {
                    'method': 'GET',
                    'headers': _0x2a3a67,
                    'credentials': 'include'
                });
                if (_0x2e731f['ok']) {
                    const _0x1826bd = await _0x2e731f['json']();
                    _0x1826bd['success'] && _0x1826bd['subscription'] && (this['updateStorageDisplay'](_0x1826bd['subscription']), _0x4dd2b3('✅\x20Storage\x20display\x20updated\x20with\x20fresh\x20backend\x20data'));
                } else
                    _0x4dd2b3('Failed\x20to\x20fetch\x20subscription\x20info,\x20status:', _0x2e731f['status']);
            } catch (_0x590893) {
                _0x4dd2b3('Error\x20loading\x20storage\x20info:', _0x590893);
            }
        }
    ['updateStorageDisplay'](_0x5a2121) {
            const _0x110032 = document['getElementById']('storageUsedBadge'),
                _0x2ec5cb = document['getElementById']('storageTotalBadge'),
                _0xe8ca88 = document['getElementById']('storagePlanBadge'),
                _0x1da56d = document['getElementById']('storageBadge'),
                _0x5c4d24 = document['getElementById']('deleteAllClipsBtn'),
                _0x172f90 = document['getElementById']('needMoreUpgradeText'),
                _0x2932e0 = this['libraryItems']['length'],
                _0x22175d = _0x5a2121['video_limit'] || _0x5a2121['videos_space_limit'] || 0x2,
                _0x310a2a = _0x5a2121['plan_name'] || (_0x5a2121['plan'] ? _0x5a2121['plan']['charAt'](0x0)['toUpperCase']() + _0x5a2121['plan']['slice'](0x1) : 'Free');
            if (_0x110032)
                _0x110032['textContent'] = _0x2932e0;
            if (_0x2ec5cb)
                _0x2ec5cb['textContent'] = _0x22175d;
            if (_0xe8ca88)
                _0xe8ca88['textContent'] = _0x310a2a;
            const _0x6027c5 = _0x2932e0 >= _0x22175d;
            if (_0x6027c5) {
                if (_0x110032)
                    _0x110032['style']['color'] = '#ff4444';
                if (_0x2ec5cb)
                    _0x2ec5cb['style']['color'] = '#ff4444';
                _0x1da56d && (_0x1da56d['style']['borderColor'] = '#ff4444', _0x1da56d['style']['backgroundColor'] = 'rgba(255,\x2068,\x2068,\x200.05)');
                if (_0x5c4d24)
                    _0x5c4d24['style']['display'] = 'inline-flex';
                if (_0x172f90)
                    _0x172f90['style']['display'] = 'inline';
            } else {
                if (_0x110032)
                    _0x110032['style']['color'] = 'inherit';
                if (_0x2ec5cb)
                    _0x2ec5cb['style']['color'] = 'inherit';
                _0x1da56d && (_0x1da56d['style']['borderColor'] = '', _0x1da56d['style']['backgroundColor'] = '');
                if (_0x5c4d24)
                    _0x5c4d24['style']['display'] = 'none';
                if (_0x172f90)
                    _0x172f90['style']['display'] = 'none';
            }
            _0x4dd2b3('📊\x20Library\x20storage:\x20' + _0x2932e0 + '\x20/\x20' + _0x22175d + '\x20videos\x20(' + _0x310a2a + ')\x20-\x20' + (_0x6027c5 ? '⚠️\x20AT\x20LIMIT' : '✅\x20OK'));
        }
    ['handleSubscriptionExpiration']() {
            if (!this['loadAndDisplayStorageInfo'])
                return;
            this['loadAndDisplayStorageInfo']()['then'](_0x34e8ab => {
                if (!_0x34e8ab || !_0x34e8ab['subscription_end_date'])
                    return;
                const _0x1d5d5d = new Date(_0x34e8ab['subscription_end_date']),
                    _0x58e018 = new Date();
                _0x58e018 > _0x1d5d5d && _0x34e8ab['plan'] !== 'free' && (_0x4c4d4d('Your\x20subscription\x20has\x20expired.\x20You\x20are\x20now\x20on\x20the\x20Free\x20plan.', 'warning'), this['libraryItems'] && this['libraryItems']['length'] > 0x2 && _0x4c4d4d('Your\x20storage\x20has\x20been\x20limited\x20to\x202\x20videos\x20per\x20the\x20Free\x20plan.', 'warning'));
            })['catch'](_0x3faab5 => {
                _0x4dd2b3('Error\x20checking\x20subscription\x20expiration:', _0x3faab5);
            });
        }
    ['updateLibraryView']() {
            this['loadAndDisplayStorageInfo'](), this['handleSubscriptionExpiration']();
            const _0x37cdc5 = document['getElementById']('libraryGrid'),
                _0x53ff2b = document['getElementById']('emptyLibraryState');
            if (!_0x37cdc5 || !_0x53ff2b)
                return;
            !Array['isArray'](this['libraryItems']) && (this['libraryItems'] = []);
            !Array['isArray'](this['processingItems']) && (this['processingItems'] = []);
            if (this['libraryItems']['length'] === 0x0 && this['processingItems']['length'] === 0x0) {
                _0x53ff2b['style']['display'] = 'block', _0x37cdc5['innerHTML'] = '', _0x37cdc5['appendChild'](_0x53ff2b);
                return;
            }
            _0x53ff2b['style']['display'] = 'none';
            let _0x46f0e3 = '';
            this['processingItems']['length'] > 0x0 && (_0x46f0e3 = this['processingItems']['map'](_0x45a681 => {
                return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22library-card\x20processing-card\x22\x20data-processing-id=\x22' + _0x45a681['id'] + '\x22\x20data-project-id=\x22' + _0x45a681['projectId'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-preview\x20processing-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-blur-overlay\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-spinner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22card-title\x22\x20data-item-name=\x22' + _0x206168(_0x45a681['name'] || 'Processing...') + '\x22>' + _0x206168(_0x45a681['name'] || 'Processing...') + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22\x20style=\x22opacity:\x200.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Processing...\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22export-btn\x22\x20disabled\x20style=\x22opacity:\x200.6;\x20cursor:\x20not-allowed;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            })['join']('')), _0x37cdc5['innerHTML'] = _0x46f0e3 + this['libraryItems']['map'](_0x291b06 => {
                const _0x15fe44 = _0x206168(_0x291b06['name']),
                    _0x499754 = _0x206168(_0x291b06['templateName'] || _0x291b06['template'] || ''),
                    _0x277324 = _0x333175(_0x291b06['thumbnailUrl']) ? _0x291b06['thumbnailUrl'] : 'https://via.placeholder.com/1000x600?text=No+Image';
                return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22library-card\x22\x20data-id=\x22' + _0x291b06['id'] + '\x22\x20data-project-id=\x22' + _0x291b06['projectId'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-pill\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22>Click\x20me</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x277324 + '\x22\x20alt=\x22Asset\x20Preview\x22\x20onerror=\x22this.src=\x27https://via.placeholder.com/1000x600?text=No+Image\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22card-action-btn\x20library-delete-btn\x22\x20data-item-id=\x22' + _0x291b06['id'] + '\x22\x20title=\x22Delete\x20clip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x206h18\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M19\x206v14c0\x201-1\x202-2\x202H7c-1\x200-2-1-2-2V6\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x206V4c0-1\x201-2\x202-2h4c1\x200\x202\x201\x202\x202v2\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2210\x22\x20y1=\x2211\x22\x20x2=\x2210\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2214\x22\x20y1=\x2211\x22\x20x2=\x2214\x22\x20y2=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22card-title\x22>' + _0x15fe44 + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x291b06['duration'] || '0s') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22export-btn\x20library-download-btn\x22\x20data-project-id=\x22' + _0x291b06['projectId'] + '\x22\x20title=\x22Download\x20clip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20tray\x20[\x20]\x20that\x20stays\x20still\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20arrow\x20that\x20bounces\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
            })['join'](''), setTimeout(() => {
                const _0x87f0cf = document['querySelectorAll']('.library-grid\x20.library-card[data-id]');
                _0x87f0cf['forEach'](_0xe4c130 => {
                    const _0x17167f = _0xe4c130['getAttribute']('data-id'),
                        _0x5258b0 = _0xe4c130['getAttribute']('data-project-id');
                    if (_0x17167f && typeof storeLibraryCard === 'function') {
                        const _0x220b81 = {
                            'id': _0x17167f,
                            'html': _0xe4c130['innerHTML'],
                            'classList': _0xe4c130['className'],
                            'dataAttributes': {
                                'data-id': _0x17167f
                            }
                        };
                        storeLibraryCard(_0x17167f, _0x220b81);
                    }
                    _0x5258b0 && fetch('/api/clips/duration/' + _0x5258b0, {
                        'method': 'GET',
                        'credentials': 'include'
                    })['then'](_0x2bdffc => _0x2bdffc['json']())['then'](_0xb2e403 => {
                        if (_0xb2e403['duration_formatted']) {
                            const _0x8783a9 = _0xe4c130['querySelector']('.badge');
                            if (_0x8783a9) {
                                const _0x45fea4 = _0x8783a9['querySelector']('svg')['nextElementSibling'];
                                if (_0x45fea4)
                                    _0x45fea4['textContent'] = _0xb2e403['duration_formatted'];
                                else {
                                    const _0x148d19 = _0x8783a9['querySelector']('svg')['outerHTML'];
                                    _0x8783a9['innerHTML'] = _0x148d19 + _0xb2e403['duration_formatted'];
                                }
                            }
                        }
                    })['catch'](_0x456323 => console['log']('Could\x20not\x20fetch\x20duration:', _0x456323));
                }), this['setupWebSocketHandlers']();
                const _0xb90d8d = document['querySelector']('.library-grid');
                _0xb90d8d && !_0xb90d8d['_hasClickListener'] && (_0xb90d8d['_hasClickListener'] = !![], _0xb90d8d['addEventListener']('click', _0x5cc308 => {
                    console['log']('Library\x20grid\x20click\x20detected\x20on:', _0x5cc308['target']);
                    const _0x3b9428 = _0x5cc308['target']['closest']('.library-download-btn');
                    if (_0x3b9428) {
                        _0x5cc308['preventDefault'](), _0x5cc308['stopPropagation']();
                        const _0x47ff9f = _0x3b9428['getAttribute']('data-project-id');
                        console['log']('Download\x20button\x20clicked,\x20projectId:', _0x47ff9f);
                        _0x47ff9f && clipsStudio ? clipsStudio['downloadClip'](_0x47ff9f) : console['log']('Missing\x20projectId\x20or\x20clipsStudio:', {
                            'projectId': _0x47ff9f,
                            'clipsStudio': !!clipsStudio
                        });
                        return;
                    }
                    const _0x105e96 = _0x5cc308['target']['closest']('.library-delete-btn');
                    if (_0x105e96) {
                        _0x5cc308['preventDefault'](), _0x5cc308['stopPropagation']();
                        const _0x5950bf = _0x105e96['getAttribute']('data-item-id');
                        _0x5950bf && clipsStudio && clipsStudio['deleteClip'](_0x5950bf);
                        return;
                    }
                }));
            }, 0x0);
        }
    ['deleteClip'](_0x292a1) {
            _0x4dd2b3('🗑️\x20Delete\x20initiated\x20for\x20item:\x20' + _0x292a1);
            const _0x53473f = this['libraryItems']['find'](_0x1a12ff => _0x1a12ff['id'] == _0x292a1) || this['processingItems']['find'](_0x2911b0 => _0x2911b0['id'] == _0x292a1);
            if (!_0x53473f) {
                _0x4dd2b3('❌\x20Item\x20not\x20found:\x20' + _0x292a1), _0x4c4d4d('Clip\x20not\x20found', 'error');
                return;
            }
            _0x4dd2b3('📍\x20Item\x20found:', _0x53473f);
            if (_0x53473f['status'] === 'processing') {
                _0x4dd2b3('⚠️\x20Cannot\x20delete\x20processing\x20item:\x20' + _0x292a1), _0x4c4d4d('Cannot\x20delete\x20items\x20while\x20processing.\x20Wait\x20for\x20completion\x20or\x20cancel\x20first.', 'warning');
                return;
            }
            const _0x1e9907 = document['getElementById']('deleteConfirmationModal'),
                _0xb33b55 = document['getElementById']('deleteConfirmationText');
            let _0x344ec2 = document['getElementById']('confirmDeleteBtn');
            if (!_0x1e9907 || !_0xb33b55 || !_0x344ec2) {
                _0x4c4d4d('Error:\x20Delete\x20modal\x20not\x20available', 'error');
                return;
            }
            _0x4dd2b3('✅\x20Modal\x20elements\x20found,\x20showing\x20confirmation'), _0xb33b55['textContent'] = 'Delete\x20\x22' + _0x53473f['name'] + '\x22?';
            _0x344ec2['_eventControllers'] && (Object['values'](_0x344ec2['_eventControllers'])['forEach'](_0x5a7bd7 => {
                try {
                    _0x5a7bd7['abort']();
                } catch (_0x5762bf) {}
            }), _0x344ec2['_eventControllers'] = {});
            const _0x43fcb2 = new AbortController();
            if (!_0x344ec2['_eventControllers'])
                _0x344ec2['_eventControllers'] = {};
            _0x344ec2['_eventControllers']['click'] = _0x43fcb2, _0x344ec2['addEventListener']('click', async () => {
                _0x4dd2b3('🔄\x20Confirm\x20button\x20clicked\x20for\x20item:\x20' + _0x292a1), _0x43fcb2['abort']();
                try {
                    _0x1e9907['style']['display'] = 'none', _0x4c4d4d('Deleting\x20clip...', 'info'), _0x53473f['projectId'] && (_0x4dd2b3('📤\x20Deleting\x20project\x20from\x20server:\x20' + _0x53473f['projectId']), await this['deleteProjectFromServer'](_0x53473f['projectId'])), _0x4dd2b3('🗄️\x20Removing\x20from\x20local\x20arrays'), this['libraryItems'] = this['libraryItems']['filter'](_0x26a96e => _0x26a96e['id'] != _0x292a1), this['processingItems'] = this['processingItems']['filter'](_0x254ec5 => _0x254ec5['id'] != _0x292a1), _0x53473f['projectId'] && (this['processingItems'] = this['processingItems']['filter'](_0x1fe588 => _0x1fe588['projectId'] != _0x53473f['projectId'])), _0x4dd2b3('🔄\x20Updating\x20views\x20and\x20saving'), this['updateLibraryView'](), this['updateProcessingView'](), this['updateRecentActivity'](), this['saveLibraryItems'](), this['saveProcessingItems'](), _0x4dd2b3('📊\x20Updating\x20storage\x20badge\x20from\x20backend'), typeof updateStorageBadgeDisplay === 'function' && await updateStorageBadgeDisplay(), _0x4dd2b3('✅\x20Clip\x20deleted\x20successfully'), _0x4c4d4d('✅\x20Clip\x20deleted\x20successfully', 'success'), setTimeout(() => {
                        window['location']['reload']();
                    }, 0x320);
                } catch (_0x27545d) {
                    _0x4c4d4d('Failed\x20to\x20delete\x20clip:\x20' + _0x27545d['message'], 'error');
                } finally {
                    _0x1e9907['style']['display'] = 'none';
                }
            }, {
                'once': !![]
            }), _0x1e9907['style']['display'] = 'block', _0x1e9907['style']['visibility'] = 'visible', _0x1e9907['style']['opacity'] = '1', _0x1e9907['style']['pointerEvents'] = 'auto', _0x4dd2b3('📋\x20Modal\x20displayed');
            const _0x5f36b7 = _0x891e0e => {
                _0x891e0e['target'] === _0x1e9907 && (_0x4dd2b3('🚫\x20Modal\x20closed\x20by\x20backdrop\x20click'), _0x1e9907['style']['display'] = 'none', document['removeEventListener']('click', _0x5f36b7));
            };
            document['addEventListener']('click', _0x5f36b7);
        }
    async ['deleteProjectFromServer'](_0x18b179) {
            try {
                if (!_0x18b179 || typeof _0x18b179 !== 'string')
                    throw new Error('Invalid\x20project\x20ID\x20format');
                if (!/^[a-zA-Z0-9_-]+$/ ['test'](_0x18b179) || _0x18b179['length'] < 0xa)
                    throw new Error('Invalid\x20project\x20ID\x20format');
                const _0x4b3de3 = _0x5db2ba(),
                    _0x2cd9c8 = await fetch(API_BASE_URL + '/clips/project/' + _0x18b179, {
                        'method': 'DELETE',
                        'headers': _0x4b3de3,
                        'credentials': 'include'
                    });
                if (!_0x2cd9c8['ok']) {
                    const _0x19c2fb = await _0x2cd9c8['json']()['catch'](() => ({}));
                    throw new Error(_0x19c2fb['error'] || 'Server\x20error:\x20' + _0x2cd9c8['status']);
                }
                const _0x3b2105 = await _0x2cd9c8['json']();
                return !![];
            } catch (_0x4b5dd8) {
                const _0x5aaf5e = _0x15078f(_0x4b5dd8);
                return _0x4c4d4d('Warning:\x20Failed\x20to\x20delete\x20files\x20on\x20server', 'warning'), _0x4dd2b3('Delete\x20error\x20(sanitized\x20for\x20user):', _0x5aaf5e), ![];
            }
        }
    ['filterLibrary'](_0x520165) {
            const _0x3e74cd = this['libraryItems']['filter'](_0x561e75 => {
                if (_0x520165 === 'all')
                    return !![];
                if (_0x520165 === 'recent') {
                    const _0x4f94de = new Date();
                    return _0x4f94de['setDate'](_0x4f94de['getDate']() - 0x7), new Date(_0x561e75['timestamp']) > _0x4f94de;
                }
                if (_0x520165 === 'favorites')
                    return !![];
                return !![];
            });
            _0x4c4d4d('Filtered\x20by:\x20' + _0x520165, 'info');
        }
    ['manualRefresh']() {
            this['loadLibraryItems'](), this['loadProcessingItems'](), _0x4c4d4d('Library\x20refreshed', 'info');
        }
    ['saveProcessingItems']() {
            try {
                if (!this['processingItems'] || this['processingItems']['length'] === 0x0) {
                    localStorage['removeItem']('clipsProcessing');
                    return;
                }
                const _0x21b5ad = JSON['stringify'](this['processingItems']);
                localStorage['setItem']('clipsProcessing', _0x21b5ad), _0x4dd2b3('✓\x20Saved\x20' + this['processingItems']['length'] + '\x20processing\x20item(s)');
            } catch (_0x26dcd4) {
                if (_0x26dcd4['name'] === 'QuotaExceededError') {
                    _0x4dd2b3('Storage\x20quota\x20exceeded\x20-\x20clearing\x20old\x20data'), this['clearOldProcessingData']();
                    try {
                        localStorage['setItem']('clipsProcessing', JSON['stringify'](this['processingItems']));
                    } catch (_0x139588) {
                        _0x4dd2b3('Failed\x20to\x20save\x20even\x20after\x20cleanup:', _0x139588);
                    }
                } else
                    _0x4dd2b3('Failed\x20to\x20save\x20processing\x20items:', _0x26dcd4);
            }
        }
    async ['loadProcessingItems']() {
            try {
                const _0x1e10a7 = localStorage['getItem']('clipsProcessing');
                if (_0x1e10a7) {
                    this['processingItems'] = JSON['parse'](_0x1e10a7);
                    const _0x5d35f6 = Date['now'](),
                        _0x3339cc = 0x18 * 0x3c * 0x3c * 0x3e8;
                    this['processingItems'] = this['processingItems']['filter'](_0x58e26a => {
                        if (_0x58e26a['status'] === 'completed' || _0x58e26a['status'] === 'failed')
                            return _0x4dd2b3('🧹\x20Cleaning\x20up\x20' + _0x58e26a['status'] + '\x20item:\x20' + _0x58e26a['name']), ![];
                        const _0x531e5a = _0x5d35f6 - (_0x58e26a['timestamp'] ? new Date(_0x58e26a['timestamp'])['getTime']() : _0x5d35f6);
                        if (_0x531e5a > _0x3339cc)
                            return _0x4dd2b3('🧹\x20Removing\x20stale\x20processing\x20item\x20(' + Math['round'](_0x531e5a / 0x3e8 / 0x3c) + '\x20min\x20old):\x20' + _0x58e26a['name']), ![];
                        return !![];
                    }), this['saveProcessingItems'](), this['updateProcessingView'](), this['updateLibraryView'](), _0x4dd2b3('✓\x20Loaded\x20' + this['processingItems']['length'] + '\x20processing\x20item(s)');
                }
            } catch (_0xa5fcc) {
                _0x4dd2b3('Failed\x20to\x20load\x20processing\x20items:', _0xa5fcc), this['processingItems'] = [], this['saveProcessingItems'](), this['updateLibraryView']();
            }
        }
    ['saveLibraryItems']() {
            try {
                if (!this['libraryItems'] || this['libraryItems']['length'] === 0x0) {
                    localStorage['removeItem']('clipsLibrary');
                    return;
                }
                const _0xf36588 = JSON['stringify'](this['libraryItems']);
                localStorage['setItem']('clipsLibrary', _0xf36588), _0x4dd2b3('✓\x20Saved\x20' + this['libraryItems']['length'] + '\x20library\x20item(s)');
            } catch (_0x402932) {
                if (_0x402932['name'] === 'QuotaExceededError') {
                    _0x4dd2b3('Storage\x20quota\x20exceeded\x20-\x20clearing\x20old\x20data'), this['clearOldLibraryData']();
                    try {
                        localStorage['setItem']('clipsLibrary', JSON['stringify'](this['libraryItems']));
                    } catch (_0x4b4b62) {
                        _0x4dd2b3('Failed\x20to\x20save\x20even\x20after\x20cleanup:', _0x4b4b62);
                    }
                } else
                    _0x4dd2b3('Failed\x20to\x20save\x20library\x20items:', _0x402932);
            }
        }
    ['clearProcessingItems']() {
            _0x4dd2b3('🧹\x20Clearing\x20' + this['processingItems']['length'] + '\x20processing\x20items'), this['processingItems'] = [], this['stopAllMonitoring'](), this['saveProcessingItems'](), this['updateLibraryView'](), _0x4c4d4d('Cleared\x20all\x20processing\x20items', 'info');
        }
    ['loadLibraryItemsFromStorage']() {
            try {
                const _0x5a50c1 = localStorage['getItem']('clipsLibrary');
                _0x5a50c1 && (this['libraryItems'] = JSON['parse'](_0x5a50c1), this['updateLibraryView'](), this['updateRecentActivity'](), _0x4dd2b3('✓\x20Loaded\x20' + this['libraryItems']['length'] + '\x20library\x20item(s)'));
            } catch (_0x528a74) {
                _0x4dd2b3('Failed\x20to\x20load\x20library\x20items:', _0x528a74), this['libraryItems'] = [];
            }
        }
    ['clearOldLibraryData']() {
            this['libraryItems']['length'] > 0x32 && (this['libraryItems'] = this['libraryItems']['sort']((_0x49fa85, _0x19b542) => new Date(_0x19b542['timestamp']) - new Date(_0x49fa85['timestamp']))['slice'](0x0, 0x32), _0x4dd2b3('Cleaned\x20up\x20old\x20library\x20items,\x20keeping\x2050\x20most\x20recent'));
        }
    ['clearOldProcessingData']() {
            const _0xa4e3f = Date['now']() - 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
            this['processingItems'] = this['processingItems']['filter'](_0x50cccc => {
                if (_0x50cccc['status'] === 'completed' && _0x50cccc['timestamp'] < _0xa4e3f)
                    return ![];
                return !![];
            }), _0x4dd2b3('Cleaned\x20up\x20old\x20processing\x20items');
        }
    ['setupWebSocketHandlers']() {
            if (!_0x30e8e8) {
                _0x4dd2b3('WebSocket\x20client\x20not\x20available\x20yet,\x20retrying...'), setTimeout(() => this['setupWebSocketHandlers'](), 0x3e8);
                return;
            }
            _0x30e8e8['on']('progress', _0x33647 => {
                const {
                    taskId: _0x3d35ec,
                    progress: _0x419c1e,
                    step: _0x26609c,
                    status: _0x55ef70
                } = _0x33647;
                if (typeof _0x419c1e !== 'number' || isNaN(_0x419c1e) || _0x419c1e < 0x0 || _0x419c1e > 0x64) {
                    _0x4dd2b3('⚠️\x20Invalid\x20progress\x20value\x20received:\x20' + _0x419c1e);
                    return;
                }
                const _0xbbb376 = document['querySelector']('[data-processing-id=\x22' + _0x3d35ec + '\x22]');
                _0xbbb376 && _0x4dd2b3('⏳\x20Processing\x20' + _0x3d35ec + ':\x20' + Math['round'](_0x419c1e) + '%\x20-\x20' + (_0x26609c || ''));
                const _0x21d0e1 = document['getElementById']('generationProgressWrapper'),
                    _0x2d0e9a = document['getElementById']('progressCircle'),
                    _0xfe316c = document['getElementById']('generationProgressText');
                if (_0x21d0e1 && _0x2d0e9a && _0xfe316c) {
                    this['processingItems']['length'] > 0x0 && (_0x21d0e1['style']['display'] = 'flex');
                    const _0x2e2e34 = 75.36,
                        _0x401d20 = _0x419c1e / 0x64 * _0x2e2e34;
                    _0x2d0e9a['style']['strokeDasharray'] = _0x401d20 + '\x20' + _0x2e2e34, _0xfe316c['textContent'] = Math['round'](_0x419c1e) + '%', _0x4dd2b3('📊\x20Progress:\x20' + Math['round'](_0x419c1e) + '%');
                }
            }), _0x30e8e8['on']('complete', _0x14d5b1 => {
                const {
                    taskId: _0x21bcb7,
                    result: _0x395338
                } = _0x14d5b1;
                _0x4dd2b3('✅\x20Video\x20' + _0x21bcb7 + '\x20completed,\x20moving\x20to\x20library...');
                const _0x33152d = this['processingItems']['findIndex'](_0x24ba4c => _0x24ba4c['id'] === _0x21bcb7);
                if (_0x33152d === -0x1) {
                    _0x4dd2b3('❌\x20Processing\x20item\x20not\x20found:\x20' + _0x21bcb7);
                    return;
                }
                const _0x2fa62a = this['processingItems'][_0x33152d],
                    _0x43882b = document['querySelector']('[data-processing-id=\x22' + _0x21bcb7 + '\x22]');
                _0x43882b && (_0x43882b['classList']['add']('unblurring'), setTimeout(() => {
                    this['processingItems']['splice'](_0x33152d, 0x1), this['saveProcessingItems']();
                    const _0x394884 = {
                        'id': _0x395338['project_id'] || _0x21bcb7,
                        'projectId': _0x395338['project_id'] || _0x21bcb7,
                        'name': _0x2fa62a['name'],
                        'template': _0x2fa62a['templateName'] || _0x2fa62a['template'] || 'Clip',
                        'templateName': _0x2fa62a['templateName'] || _0x2fa62a['template'] || 'Clip',
                        'thumbnailUrl': _0x395338['thumbnail_url'] || _0x2fa62a['thumbnailUrl'] || '',
                        'duration': _0x395338['duration'] || _0x2fa62a['duration'] || '0s',
                        'timestamp': new Date()['toISOString'](),
                        'status': 'completed'
                    };
                    this['libraryItems']['unshift'](_0x394884), this['saveLibraryItems'](), this['updateLibraryView'](), this['loadStorageInfo']();
                    if (this['processingItems']['length'] === 0x0) {
                        const _0xdb55c = document['getElementById']('generationProgressWrapper');
                        if (_0xdb55c) {
                            _0xdb55c['style']['display'] = 'none';
                            const _0x201392 = document['getElementById']('progressCircle');
                            _0x201392 && (_0x201392['style']['strokeDasharray'] = '0\x2075.36');
                        }
                    }
                    _0x4dd2b3('✅\x20Moved\x20' + _0x2fa62a['name'] + '\x20to\x20library');
                }, 0x258));
            }), _0x30e8e8['on']('error', _0x125b8d => {
                const {
                    taskId: _0x18cdcd,
                    error: _0x4f186c
                } = _0x125b8d;
                _0x4dd2b3('❌\x20Video\x20' + _0x18cdcd + '\x20failed:\x20' + _0x4f186c);
                const _0x4671f2 = document['querySelector']('[data-processing-id=\x22' + _0x18cdcd + '\x22]');
                if (_0x4671f2) {
                    _0x4671f2['style']['opacity'] = '0.5';
                    const _0x2d8d0c = _0x4671f2['querySelector']('.card-title');
                    _0x2d8d0c && (_0x2d8d0c['textContent'] = 'Failed\x20-\x20' + _0x2d8d0c['textContent']);
                }
                const _0x5da084 = this['processingItems']['findIndex'](_0x2f4681 => _0x2f4681['id'] === _0x18cdcd);
                if (_0x5da084 !== -0x1) {
                    this['processingItems']['splice'](_0x5da084, 0x1), this['saveProcessingItems']();
                    if (this['processingItems']['length'] === 0x0) {
                        const _0x322241 = document['getElementById']('generationProgressWrapper');
                        if (_0x322241) {
                            _0x322241['style']['display'] = 'none';
                            const _0x12064a = document['getElementById']('progressCircle');
                            _0x12064a && (_0x12064a['style']['strokeDasharray'] = '0\x2075.36');
                        }
                    }
                }
            }), _0x30e8e8['on']('processing_error', _0x4d203c => {
                const {
                    taskId: _0x153372,
                    error: _0x1c0c6c,
                    message: _0x1ee5e4
                } = _0x4d203c, _0x1adbf5 = _0x1ee5e4 || _0x1c0c6c || 'Unknown\x20processing\x20error';
                _0x4dd2b3('❌\x20Processing\x20failed:\x20' + _0x1adbf5);
                const _0x17fef7 = document['querySelector']('[data-processing-id=\x22' + _0x153372 + '\x22]');
                if (_0x17fef7) {
                    _0x17fef7['style']['opacity'] = '0.5', _0x17fef7['style']['borderColor'] = '#ef4444', _0x17fef7['style']['borderWidth'] = '2px';
                    const _0x1fee0b = _0x17fef7['querySelector']('.card-title');
                    _0x1fee0b && (_0x1fee0b['textContent'] = '❌\x20Failed');
                    const _0x12ac56 = _0x17fef7['querySelector']('.card-subtitle') || _0x17fef7['querySelector']('.card-status');
                    if (_0x12ac56) {
                        let _0x492bbe = _0x1adbf5;
                        if (_0x1adbf5['includes']('Video\x20is\x20too\x20long')) {
                            const _0x144c8a = _0x1adbf5['match'](/(\d+)\s*minute/g);
                            _0x492bbe = _0x1adbf5;
                        }
                        _0x12ac56['textContent'] = _0x492bbe['substring'](0x0, 0x64), _0x12ac56['title'] = _0x492bbe;
                    }
                }
                const _0x2065c3 = this['processingItems']['findIndex'](_0x26b521 => _0x26b521['id'] === _0x153372);
                if (_0x2065c3 !== -0x1) {
                    this['processingItems']['splice'](_0x2065c3, 0x1), this['saveProcessingItems']();
                    if (this['processingItems']['length'] === 0x0) {
                        const _0x4617b4 = document['getElementById']('generationProgressWrapper');
                        if (_0x4617b4) {
                            _0x4617b4['style']['display'] = 'none';
                            const _0x7ecc53 = document['getElementById']('progressCircle');
                            _0x7ecc53 && (_0x7ecc53['style']['strokeDasharray'] = '0\x2075.36');
                            const _0x211e6e = document['getElementById']('generationProgressText');
                            _0x211e6e && (_0x211e6e['textContent'] = '0%');
                        }
                    }
                }
            }), _0x4dd2b3('✅\x20WebSocket\x20handlers\x20initialized');
        }
    ['safeAddEventListener'](_0x2ae003, _0x4a46a0, _0x1a2178) {
            const _0xdbcc2c = document['querySelectorAll'](_0x2ae003);
            _0xdbcc2c['forEach'](_0x5e69cf => {
                if (!_0x5e69cf['_eventControllers'])
                    _0x5e69cf['_eventControllers'] = {};
                const _0x321d7f = _0x4a46a0 + '_' + _0x2ae003;
                _0x5e69cf['_eventControllers'][_0x321d7f] && _0x5e69cf['_eventControllers'][_0x321d7f]['abort']();
                const _0x46239f = new AbortController();
                _0x5e69cf['_eventControllers'][_0x321d7f] = _0x46239f, _0x5e69cf['addEventListener'](_0x4a46a0, _0x1a2178, {
                    'signal': _0x46239f['signal']
                });
            });
        }
    ['safeAddEventListenerById'](_0x424511, _0x1583b6, _0x494690) {
            const _0x297822 = document['getElementById'](_0x424511);
            if (_0x297822) {
                _0x4dd2b3('✅\x20Found\x20element\x20with\x20id:\x20' + _0x424511);
                !_0x297822['_eventControllers'] && (_0x297822['_eventControllers'] = {});
                const _0x440aa5 = _0x1583b6 + '_' + _0x424511;
                _0x297822['_eventControllers'][_0x440aa5] && _0x297822['_eventControllers'][_0x440aa5]['abort']();
                const _0x26a1a4 = new AbortController();
                _0x297822['_eventControllers'][_0x440aa5] = _0x26a1a4, _0x297822['addEventListener'](_0x1583b6, _0x494690, {
                    'signal': _0x26a1a4['signal']
                });
            } else
                _0x4dd2b3('❌\x20Element\x20with\x20id\x20\x22' + _0x424511 + '\x22\x20not\x20found');
        }
}

function _0x45c651() {
    !window['clipsStudio'] && (clipsStudio = new _0x4101c7(), clipsStudio['init'](), window['clipsStudio'] = clipsStudio, setTimeout(() => {}, 0x1f4));
}

function _0x1a5a20() {
    fetch(API_BASE_URL + '/api/logout', {
        'method': 'POST',
        'credentials': 'include'
    })['then'](_0x44de38 => {
        localStorage['removeItem']('auth_token'), localStorage['removeItem']('userId'), localStorage['removeItem']('userEmail'), localStorage['removeItem']('currentUser'), _0x4dd2b3('✅\x20Logged\x20out\x20successfully'), window['location']['href'] = '/login.html';
    })['catch'](_0x15932c => {
        _0x4dd2b3('❌\x20Logout\x20error:', _0x15932c), setTimeout(() => {
            window['location']['href'] = '/login.html';
        }, 0x3e8);
    });
}

function _0x4f6837() {
    const _0xe58878 = document['getElementById']('userSettingsBtn');
    _0xe58878 && _0xe58878['addEventListener']('click', _0x3706d8 => {
        _0x3706d8['stopPropagation'](), _0x47d818(_0x3706d8);
    });
    const _0x3375f1 = document['getElementById']('dropdownLogout');
    _0x3375f1 && _0x3375f1['addEventListener']('click', _0x28e5ad => {
        _0x28e5ad['preventDefault'](), _0x28e5ad['stopPropagation'](), _0x1a5a20();
    });
    const _0x1003a5 = document['getElementById']('menuSettings');
    _0x1003a5 && _0x1003a5['addEventListener']('click', _0x8ce9fb => {
        _0x8ce9fb['stopPropagation'](), _0x3a108a();
    });
    _0x14bc7f && _0x14bc7f['addEventListener']('click', _0x3a108a);
    _0x1b3cc1 && _0x1b3cc1['addEventListener']('click', _0x5ea8b1);
    const _0x547a84 = document['getElementById']('clearChatHistoryBtn');
    _0x547a84 && _0x547a84['addEventListener']('click', () => {
        confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20all\x20chat\x20history?\x20This\x20action\x20cannot\x20be\x20undone.') && (_0x9aef72(), clipsStudio['showNotification']('Chat\x20history\x20cleared', 'success'));
    });
    const _0x30835e = document['querySelector']('.settings-backdrop');
    _0x30835e && _0x30835e['addEventListener']('click', _0x5ea8b1);
    const _0x3d8922 = localStorage['getItem']('theme');
    _0x3d8922 && (_0x4a2740(_0x3d8922), _0x2d297f && (_0x2d297f['checked'] = _0x3d8922 === 'dark'));
    _0x2d297f && (_0x4dd2b3('setupEventListeners():\x20darkModeSettingsToggle\x20element\x20found.'), (_0x2d297f['tagName'] !== 'INPUT' || _0x2d297f['type'] !== 'checkbox') && _0x4dd2b3('setupEventListeners():\x20darkModeSettingsToggle\x20is\x20not\x20an\x20input\x20checkbox.\x20Dark\x20mode\x20functionality\x20may\x20be\x20impaired.'), _0x2d297f['addEventListener']('change', () => {
        const _0x4fc3fa = _0x2d297f['checked'] ? 'dark' : 'light';
        _0x4dd2b3('darkModeSettingsToggle\x20change\x20event\x20fired.\x20New\x20theme:', _0x4fc3fa), _0x4a2740(_0x4fc3fa);
    }));
    const _0x3a6bfd = document['getElementById']('shuffleIdeasBtn');
    _0x3a6bfd && _0x3a6bfd['addEventListener']('click', _0x28f3bd);
    const _0x43f8ce = document['getElementById']('watermarkToggle');
    _0x43f8ce && (_0x43f8ce['checked'] = !![], localStorage['setItem']('solisAIWatermarkEnabled', 'true'), _0x43f8ce['addEventListener']('change', _0x1addd8 => {
        const _0x2e10a4 = _0x1addd8['target']['checked'];
        localStorage['setItem']('solisAIWatermarkEnabled', _0x2e10a4 ? 'true' : 'false'), window['clipsStudio'] && window['clipsStudio']['currentTemplateForPreview'] && (window['clipsStudio']['currentTemplateForPreview']['addWatermark'] = _0x2e10a4), window['clipsStudio'] && window['clipsStudio']['updateWatermarkDisplay'](), _0x4dd2b3('Watermark\x20' + (_0x2e10a4 ? 'ENABLED' : 'DISABLED') + '\x20by\x20user');
    }));
    const _0x43da9a = document['getElementById']('connectYouTubeButton');
    _0x43da9a && _0x43da9a['addEventListener']('click', _0x5f1296), _0xc5f94d();
}
_0x5b02be && _0x5b02be['addEventListener']('click', _0x3a99d3);
_0x23b1cb && _0x23b1cb['addEventListener']('click', _0x54dc1d);
const _0x70bbd7 = document['getElementById']('clips-toggle');
_0x70bbd7 && _0x70bbd7['addEventListener']('click', function(_0x1f81ac) {
    _0x1f81ac['stopPropagation']();
    const _0x2ab380 = document['getElementById']('clips-submenu'),
        _0x1fbf76 = this['querySelector']('.chevron-icon');
    if (_0x2ab380)
        _0x2ab380['classList']['toggle']('open');
    if (_0x1fbf76)
        _0x1fbf76['classList']['toggle']('rotated');
});
_0x5ce4ea['forEach'](_0x1688c6 => {
    _0x1688c6['addEventListener']('click', () => {
        !_0x1688c6['closest']('.clips-submenu') && (_0x5ce4ea['forEach'](_0x2ec2fc => {
            _0x2ec2fc['id'] !== 'clips-toggle' && !_0x2ec2fc['closest']('.clips-submenu') && _0x2ec2fc['classList']['remove']('active');
        }), _0x1688c6['id'] !== 'clips-toggle' && _0x1688c6['classList']['add']('active'));
        const _0x516bf5 = _0x1688c6['dataset']['target'];
        _0x516bf5 && (_0x2faba3(_0x516bf5), window['innerWidth'] <= 0x300 && _0x105b66['classList']['contains']('expanded') && _0x105b66['classList']['remove']('expanded'));
    });
}), document['addEventListener']('click', _0x344e83 => {
    _0x688d2f && !_0x688d2f['contains'](_0x344e83['target']) && _0x4605d4 && !_0x4605d4['contains'](_0x344e83['target']) && (_0x688d2f['classList']['remove']('active'), _0x4605d4['classList']['remove']('menu-open')), _0x40877a && !_0x40877a['contains'](_0x344e83['target']) && _0x344e83['target'] !== _0x5b02be && _0x54dc1d(), _0x344e83['target']['classList']['contains']('feature-modal') && (_0x344e83['target']['style']['display'] = 'none');
}), document['addEventListener']('visibilitychange', () => {
    try {
        document['hidden'] && _0x5e0787();
    } catch (_0x23b317) {
        _0x4dd2b3('visibilitychange\x20handler\x20error', _0x23b317);
    }
}), document['addEventListener']('keydown', _0x712563 => {
    (_0x712563['ctrlKey'] || _0x712563['metaKey']) && _0x712563['key'] === 'k' && (_0x712563['preventDefault'](), _0x206ea7());
});

function _0x206ea7() {
    _0x105b66['classList']['toggle']('expanded');
    const _0x5aede9 = _0x105b66['classList']['contains']('expanded');
    localStorage['setItem']('sidebarExpanded', _0x5aede9);
}

function _0x47d818(_0x265860) {
    _0x4dd2b3('toggleUserMenu\x20called\x20but\x20deprecated\x20-\x20use\x20menu.js\x20instead');
    if (!_0x688d2f || !_0x4605d4)
        return;
    _0x265860['stopPropagation']();
}

function _0x3a108a() {
    if (!_0x4a8a3c)
        return;
    _0x4a8a3c['classList']['add']('open');
    const _0x2c0495 = document['getElementById']('settingsBackdrop');
    _0x2c0495 && (_0x2c0495['style']['opacity'] = '1', _0x2c0495['style']['visibility'] = 'visible');
    if (_0x688d2f)
        _0x688d2f['classList']['remove']('active');
    _0x280151 && _0x38d46c();
}

function _0x5ea8b1() {
    if (!_0x4a8a3c)
        return;
    _0x4a8a3c['classList']['remove']('open');
    const _0x3fffe4 = document['getElementById']('settingsBackdrop');
    _0x3fffe4 && (_0x3fffe4['style']['opacity'] = '0', _0x3fffe4['style']['visibility'] = 'hidden');
}
async function _0xc5f94d() {
    const _0x3d3eeb = document['getElementById']('analyticsLockOverlay'),
        _0x57b163 = document['getElementById']('dashboardGrid'),
        _0xf0bd33 = document['querySelector']('.dashboard-charts');
    if (!_0x3d3eeb)
        return;
    try {
        const _0x280d1d = await fetch(window['API_BASE_URL'] + '/auth/youtube/status', {
            'method': 'GET',
            'headers': {
                'X-CSRF-Token': _0x596ec5() || '',
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
        if (!_0x280d1d['ok']) {
            _0x4dd2b3('⚠️\x20Failed\x20to\x20check\x20YouTube\x20status:', _0x280d1d['status']), _0x3d3eeb['style']['display'] = 'flex';
            return;
        }
        const _0x5d8bcc = await _0x280d1d['json'](),
            _0x473cbb = _0x5d8bcc['connected'] === !![];
        _0x4dd2b3('🔍\x20YouTube\x20Connection\x20Status\x20(from\x20backend):', _0x473cbb);
        !_0x473cbb ? (_0x3d3eeb['style']['display'] = 'flex', _0x57b163 && _0x57b163['classList']['add']('analytics-locked'), _0xf0bd33 && _0xf0bd33['classList']['add']('analytics-locked')) : (_0x3d3eeb['style']['display'] = 'none', _0x57b163 && _0x57b163['classList']['remove']('analytics-locked'), _0xf0bd33 && _0xf0bd33['classList']['remove']('analytics-locked'));
        if (!_0x280151)
            _0x280151 = {};
        _0x280151['youtube_connected'] = _0x473cbb;
    } catch (_0xcffcf5) {
        _0x4dd2b3('❌\x20Error\x20checking\x20YouTube\x20connection:', _0xcffcf5), _0x3d3eeb['style']['display'] = 'flex';
    }
}

function _0x5f1296() {
    if (!_0x280151) {
        alert('Please\x20log\x20in\x20first\x20to\x20connect\x20YouTube');
        return;
    }
    const _0x314a18 = _0x596ec5();
    fetch(window['API_BASE_URL'] + '/auth/youtube', {
        'method': 'GET',
        'headers': {
            'X-CSRF-Token': _0x314a18 || '',
            'Content-Type': 'application/json'
        },
        'credentials': 'include'
    })['then'](_0x528a25 => {
        if (!_0x528a25['ok'])
            throw new Error('HTTP\x20' + _0x528a25['status'] + ':\x20' + _0x528a25['statusText']);
        return _0x528a25['json']();
    })['then'](_0x2baeed => {
        if (!_0x2baeed['auth_url'])
            throw new Error('No\x20authorization\x20URL\x20received\x20from\x20server');
        _0x4dd2b3('✓\x20Got\x20OAuth\x20URL\x20from\x20backend');
        const _0x1c0164 = 0x1f4,
            _0x363537 = 0x258,
            _0x558096 = (window['innerWidth'] - _0x1c0164) / 0x2,
            _0x121a9f = (window['innerHeight'] - _0x363537) / 0x2,
            _0x3a7ca0 = window['open'](_0x2baeed['auth_url'], 'YouTubeOAuth', 'width=' + _0x1c0164 + ',height=' + _0x363537 + ',left=' + _0x558096 + ',top=' + _0x121a9f + ',noopener,noreferrer');
        if (!_0x3a7ca0)
            _0x4dd2b3('⚠️\x20Popup\x20blocked,\x20falling\x20back\x20to\x20redirect'), window['location']['href'] = _0x2baeed['auth_url'];
        else {
            _0x4dd2b3('✓\x20OAuth\x20window\x20opened');
            const _0x5d3946 = function _0x338d11(_0x30a29d) {
                const _0x28631b = [window['location']['origin']];
                if (!_0x28631b['includes'](_0x30a29d['origin'])) {
                    _0x4dd2b3('🔒\x20Blocked\x20postMessage\x20from\x20untrusted\x20origin:', _0x30a29d['origin']);
                    return;
                }
                if (_0x30a29d['data']['type'] === 'YOUTUBE_AUTH_SUCCESS')
                    _0x4dd2b3('✅\x20YouTube\x20authentication\x20successful!'), window['removeEventListener']('message', _0x338d11), clearInterval(_0x3e8469), setTimeout(() => {
                        _0xc5f94d(), typeof analyticsManager !== 'undefined' && analyticsManager && analyticsManager['loadAnalyticsData'](), _0x4c4d4d('✅\x20YouTube\x20connected\x20successfully!', 'success');
                    }, 0x3e8);
                else
                    _0x30a29d['data']['type'] === 'YOUTUBE_AUTH_ERROR' && (_0x4dd2b3('✗\x20Authentication\x20error:', _0x30a29d['data']['error']), window['removeEventListener']('message', _0x338d11), clearInterval(_0x3e8469), _0x4c4d4d('✗\x20YouTube\x20connection\x20failed:\x20' + _0x30a29d['data']['error'], 'error'));
            };
            window['addEventListener']('message', _0x5d3946);
            let _0x3e8469 = setInterval(() => {
                try {
                    _0x3a7ca0['closed'] && (clearInterval(_0x3e8469), _0x4dd2b3('🔄\x20OAuth\x20window\x20closed,\x20verifying\x20connection...'), window['removeEventListener']('message', _0x5d3946), setTimeout(() => {
                        _0x1e2245(), _0xc5f94d();
                    }, 0x7d0));
                } catch (_0x472616) {}
            }, 0x1f4);
        }
    })['catch'](_0x44067c => {
        _0x4dd2b3('❌\x20YouTube\x20connection\x20error:', _0x44067c), _0x4c4d4d('✗\x20Failed\x20to\x20initiate\x20YouTube\x20connection:\x20' + _0x44067c['message'], 'error');
    });
}

function _0x4a2740(_0x485a4d) {
    _0x4f96a8 = _0x485a4d, _0x4dd2b3('setTheme():\x20Applying\x20theme:', _0x485a4d), document['documentElement']['setAttribute']('data-theme', _0x485a4d), localStorage['setItem']('theme', _0x485a4d), _0x4dd2b3('setTheme():\x20Theme\x20saved\x20to\x20localStorage.\x20Current\x20stored\x20theme:', localStorage['getItem']('theme'));
}
async function _0x7f076e(_0x4aefc3, _0x494d8b) {
    try {
        if (!_0x280151) {
            _0x3c0b4a('ai', '❌\x20Please\x20log\x20in\x20to\x20create\x20clip\x20compilations.\x20Click\x20the\x20login\x20button\x20in\x20the\x20top\x20right.');
            return;
        }
        _0xadbd82(_0x4aefc3, _0x494d8b);
    } catch (_0x5e0d50) {
        _0x4dd2b3('Clip\x20compilation\x20error:', _0x5e0d50), _0x3c0b4a('ai', '❌\x20Error:\x20' + _0x5e0d50['message']);
    }
}

function _0xadbd82(_0xa4f185, _0x167e4b) {
    const _0x39d1d8 = document['createElement']('div');
    _0x39d1d8['className'] = 'clip-confirm-modal', _0x39d1d8['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeIn\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20var(--surface);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20420px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideUp\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2020px\x2060px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20transform:\x20translateY(20px);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20translateY(0);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-header\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--text);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-content\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2012px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-url\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20107,\x2053,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-break:\x20break-all;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-confirm-actions\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-reject\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--muted);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-reject:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-accept\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-btn-accept:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(255,\x20107,\x2053,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-dialog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2020px;\x22>🎬</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Create\x20Clip\x20Compilation</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Ready\x20to\x20create\x20a\x20clip\x20compilation\x20from\x20your\x20YouTube\x20video?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-url\x22\x20id=\x22urlDisplay\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2012px;\x20font-size:\x2012px;\x20opacity:\x200.7;\x22>This\x20may\x20take\x20a\x20few\x20minutes.\x20You\x20can\x20monitor\x20progress\x20in\x20the\x20Processing\x20tab.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-confirm-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22clip-btn\x20clip-btn-reject\x22\x20id=\x22clipConfirmCancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✕\x20Cancel\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22clip-btn\x20clip-btn-accept\x22\x20id=\x22clipConfirmAccept\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✓\x20Create\x20Compilation\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', document['body']['appendChild'](_0x39d1d8);
    const _0x521f82 = document['getElementById']('urlDisplay');
    _0x521f82 && (_0x521f82['textContent'] = _0x167e4b), document['getElementById']('clipConfirmCancel')['addEventListener']('click', () => {
        _0x39d1d8['remove']();
    }), document['getElementById']('clipConfirmAccept')['addEventListener']('click', async () => {
        _0x39d1d8['remove'](), window['location']['hash'] = '#/clips', setTimeout(() => {
            _0x4574d7(_0x167e4b);
        }, 0x1f4);
    }), _0x39d1d8['addEventListener']('click', _0x216346 => {
        _0x216346['target'] === _0x39d1d8 && _0x39d1d8['remove']();
    });
}
async function _0x4574d7(_0x49a3b5) {
    try {
        const _0x50356f = _0x5db2ba(),
            _0x5e2abf = clipsStudio ? clipsStudio['extractYouTubeVideoId'](_0x49a3b5) : null;
        sessionStorage['setItem']('clipProcessing', JSON['stringify']({
            'videoId': _0x5e2abf,
            'startTime': Date['now']()
        }));
        const _0x2aadba = document['createElement']('div');
        _0x2aadba['id'] = 'clip-processing-modal', _0x2aadba['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#clip-processing-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#fff5eb\x200%,\x20#ffe4d1\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-processing-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-atom\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20140px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20140px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-atom\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20drop-shadow(0\x200\x2020px\x20rgba(255,\x20107,\x2053,\x200.3));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-nucleus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20nucleusPulse\x201.5s\x20ease-in-out\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20nucleusPulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0.8);\x20opacity:\x200.6;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(0.8);\x20opacity:\x200.6;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x2050px\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-dasharray:\x20300;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-dashoffset:\x20300;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit-1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(75deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20drawOrbit\x201.5s\x20ease-in-out\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-orbit-2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-20deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20drawOrbit\x201.5s\x20ease-in-out\x200.3s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20drawOrbit\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20stroke-dashoffset:\x20300;\x20opacity:\x200.3;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20stroke-dashoffset:\x200;\x20opacity:\x200.7;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20stroke-dashoffset:\x20300;\x20opacity:\x200.3;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2028px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#1a1a1a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-subtitle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#666;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20280px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-progress-fill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.4s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stats\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20107,\x2053,\x200.08);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat-value\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ff6b35;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.clip-stat-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.05em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-processing-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-atom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x22140\x22\x20height=\x22140\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22clip-nucleus\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x228\x22\x20fill=\x22#ff6b35\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2212\x22\x20fill=\x22#ff6b35\x22\x20opacity=\x220.3\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20class=\x22clip-orbit\x20clip-orbit-1\x22\x20rx=\x2245\x22\x20ry=\x2225\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22#ff6b35\x22\x20stroke-width=\x222.5\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20opacity=\x220.7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ellipse\x20class=\x22clip-orbit\x20clip-orbit-2\x22\x20rx=\x2245\x22\x20ry=\x2225\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22#ff6b35\x22\x20stroke-width=\x222.5\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20opacity=\x220.7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22clip-title\x22>Cooking!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22clip-subtitle\x22\x20id=\x22clipStatus\x22>HAHAHAHA</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-progress-fill\x22\x20id=\x22clipProgressFill\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20gap:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22clipProgress\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#999;\x22>0%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22clipTimeLeft\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#999;\x22>--:--</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatDownload\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Downloading</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatProcessing\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Processing</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-value\x22\x20id=\x22clipStatRendering\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clip-stat-label\x22>Rendering</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document['body']['appendChild'](_0x2aadba);
        const _0x48b3b = await fetch(API_BASE_URL + '/clips/start', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                ..._0x50356f
            },
            'credentials': 'include',
            'body': JSON['stringify']({
                'url': _0x49a3b5,
                'template_id': 'splitscreen',
                'gameplay_clip_id': _0x31d0b6
            })
        });
        if (!_0x48b3b['ok']) {
            let _0xa2b4c4 = 'Failed\x20to\x20start\x20processing',
                _0x47575c = '';
            try {
                const _0xee27ce = await _0x48b3b['json']();
                _0xa2b4c4 = _0xee27ce['error'] || _0xa2b4c4, _0x47575c = _0xee27ce['error_code'] || '';
            } catch (_0x596106) {
                _0xa2b4c4 = 'Server\x20error:\x20' + _0x48b3b['status'];
            }
            if (_0x47575c === 'GENERATION_COOLDOWN') {
                const _0x21b268 = await _0x48b3b['json'](),
                    _0x11a807 = _0x21b268['remaining_seconds'] || _0x21b268['cooldown_seconds'] || 0x1e,
                    _0x21fa50 = Math['floor'](_0x11a807 / 0x3c),
                    _0x30c784 = _0x11a807 % 0x3c;
                _0x739e78(_0x11a807);
                let _0x41bbd8 = '';
                _0x21fa50 > 0x0 ? _0x41bbd8 = 'in\x20' + _0x21fa50 + 'm\x20' + _0x30c784 + 's' : _0x41bbd8 = 'in\x20' + _0x11a807 + 's', _0xa2b4c4 = 'You\x20can\x20generate\x20another\x20video\x20' + _0x41bbd8 + '.';
            }
            _0x2aadba['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>❌</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Error</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>' + _0xa2b4c4 + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove()\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            return;
        }
        const _0x162342 = await _0x48b3b['json'](),
            _0x561c4f = _0x162342['project_id'];
        let _0x4b6ca9 = ![],
            _0x54c6ff = 0x0;
        const _0xe46786 = 0x12c;
        let _0x4993a6 = Date['now'](),
            _0x25f813 = null;
        while (!_0x4b6ca9 && _0x54c6ff < _0xe46786) {
            _0x54c6ff++;
            try {
                const _0x5960e6 = await fetch(API_BASE_URL + '/clips/status/' + _0x561c4f, {
                    'headers': _0x50356f,
                    'credentials': 'include'
                });
                if (_0x5960e6['ok']) {
                    let _0x45d1bf;
                    try {
                        _0x45d1bf = await _0x5960e6['json']();
                    } catch (_0x5c173d) {
                        _0x4dd2b3('Status\x20JSON\x20parse\x20error:', _0x5c173d), await new Promise(_0x458fc1 => setTimeout(_0x458fc1, 0x7d0));
                        continue;
                    }
                    const _0x367672 = _0x45d1bf['status'] || 'processing',
                        _0xbf1738 = _0x45d1bf['progress'] || 0x0,
                        _0x393877 = Date['now']() - _0x4993a6,
                        _0x37ffaf = _0x393877 / 0x3e8;
                    _0xbf1738 > 0x0 && !_0x25f813 && (_0x25f813 = _0x37ffaf / _0xbf1738 * 0x64);
                    const _0x33829a = _0x25f813 ? _0x25f813 * (0x64 - _0xbf1738) / 0x64 * 0x3e8 : 0x0,
                        _0x854efe = Math['floor'](_0x33829a / 0xea60),
                        _0x5e0bfe = Math['floor'](_0x33829a % 0xea60 / 0x3e8),
                        _0x2d703b = document['getElementById']('clipStatus');
                    if (_0x2d703b) {
                        const _0x23ac67 = {
                                'downloading': [
                                    'LOLOL',
                                    'BRUH',
                                    'OK\x20WAIT',
                                    'NO\x20WAY',
                                    'LEMME\x20GET\x20THIS'
                                ],
                                'processing': [
                                    'HAHAHAHA',
                                    'OK\x20THIS\x20IS\x20INSANE',
                                    'STOP\x20IT',
                                    'WHAT\x20IS\x20HAPPENING',
                                    'I\x20CANT'
                                ],
                                'rendering': [
                                    'LMAOOO',
                                    'YOOO',
                                    'IM\x20DYING',
                                    'TOO\x20GOOD',
                                    'STOP\x20STOP'
                                ],
                                'completed': [
                                    'YESSS',
                                    'LETS\x20GOOOO',
                                    'FIRE\x20FIRE\x20FIRE',
                                    'POGGGG',
                                    'SHEEEESH'
                                ]
                            },
                            _0x112d5d = _0x23ac67[_0x367672] || [
                                'LOL',
                                'HAHAHAHA',
                                'LMAOOO'
                            ];
                        _0x2d703b['textContent'] = _0x112d5d[Math['floor'](Math['random']() * _0x112d5d['length'])];
                    }
                    document['getElementById']('clipProgressFill')['style']['width'] = Math['min'](_0xbf1738, 0x63) + '%', document['getElementById']('clipProgress')['textContent'] = Math['min'](_0xbf1738, 0x63) + '%', document['getElementById']('clipTimeLeft')['textContent'] = _0x854efe > 0x0 ? _0x854efe + ':' + _0x5e0bfe['toString']()['padStart'](0x2, '0') : _0x5e0bfe + 's';
                    if (_0x367672 === 'downloading')
                        document['getElementById']('clipStatDownload')['textContent'] = Math['min'](_0xbf1738, 0x63) + '%';
                    else {
                        if (_0x367672 === 'processing')
                            document['getElementById']('clipStatProcessing')['textContent'] = Math['min'](_0xbf1738, 0x63) + '%';
                        else
                            _0x367672 === 'rendering' && (document['getElementById']('clipStatRendering')['textContent'] = Math['min'](_0xbf1738, 0x63) + '%');
                    }
                    if (_0x367672 === 'completed')
                        _0x4b6ca9 = !![], sessionStorage['removeItem']('clipProcessing'), _0x2aadba['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20animation:\x20slideUp\x200.3s\x20ease;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2080px;\x20margin-bottom:\x2016px;\x20animation:\x20popIn\x200.4s\x20cubic-bezier(0.34,\x201.56,\x200.64,\x201);\x22>✅</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2032px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x20font-weight:\x20700;\x22>Compilation\x20Ready!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2032px;\x22>Your\x20video\x20is\x20ready\x20to\x20edit\x20and\x20publish</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20document.getElementById(\x27clip-processing-modal\x27).remove();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.location.hash\x20=\x20\x27#/clips\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20onmouseover=\x22this.style.transform=\x27translateY(-2px);\x20this.style.boxShadow=\x270\x204px\x2012px\x20rgba(255,\x20107,\x2053,\x200.3)\x27\x22\x20onmouseout=\x22this.style.transform=\x27translateY(0)\x27;\x20this.style.boxShadow=\x27none\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📎\x20Open\x20Project\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20popIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0.3);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2070%\x20{\x20transform:\x20scale(1.1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideUp\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20transform:\x20translateY(20px);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20translateY(0);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                    else
                        _0x367672 === 'failed' && (_0x4b6ca9 = !![], sessionStorage['removeItem']('clipProcessing'), _0x2aadba['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>❌</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Processing\x20Failed</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>' + (_0x45d1bf['message'] || 'Unknown\x20error') + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove()\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                }
            } catch (_0x2b26bf) {
                _0x4dd2b3('Status\x20poll\x20error:', _0x2b26bf);
            }!_0x4b6ca9 && await new Promise(_0x1873cf => setTimeout(_0x1873cf, 0x7d0));
        }!_0x4b6ca9 && (sessionStorage['removeItem']('clipProcessing'), _0x2aadba['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>⏱️</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Processing\x20Timeout</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>Your\x20compilation\x20is\x20still\x20being\x20processed.\x20Check\x20back\x20in\x20a\x20moment.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove();\x20window.location.hash\x20=\x20\x27#/clips\x27\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>View\x20in\x20Clips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
    } catch (_0x2f7982) {
        _0x4dd2b3('Clip\x20compilation\x20error:', _0x2f7982), document['getElementById']('clip-processing-modal')?.['remove'](), _0x3c0b4a('ai', '❌\x20Error:\x20' + _0x2f7982['message']);
    }
}
async function _0x28f3bd() {
    const _0x45669e = [
            'Create\x20a\x20fast-paced\x20gaming\x20montage\x20with\x20epic\x20plays\x20and\x20reactions',
            'Make\x20a\x2030-second\x20motivational\x20workout\x20compilation\x20with\x20trending\x20music',
            'Put\x20together\x20viral\x20dance\x20clips\x20from\x20your\x20latest\x20YouTube\x20video',
            'Compile\x20your\x20best\x20commentary\x20moments\x20into\x20shareable\x20shorts',
            'Create\x20a\x20highlight\x20reel\x20of\x20epic\x20fails\x20and\x20funny\x20moments',
            'Make\x20a\x20trending\x20audio\x20mashup\x20with\x20video\x20clips\x20synced\x20to\x20the\x20beat',
            'Compile\x20before\x20and\x20after\x20transformation\x20clips',
            'Create\x20a\x20speed\x20painting\x20or\x20creation\x20process\x20video',
            'Make\x20a\x20\x22Day\x20in\x20my\x20life\x22\x20quick\x20clips\x20compilation',
            'Create\x20a\x20tutorial\x20snippet\x20series\x20from\x20your\x20longer\x20videos',
            'Compile\x20your\x20best\x20one-liners\x20and\x20funny\x20quotes',
            'Make\x20a\x20seasonal/holiday\x20themed\x20clip\x20collection',
            'Create\x20a\x20reaction\x20compilation\x20video',
            'Compile\x20jaw-dropping\x20moments\x20and\x20plot\x20twists',
            'Make\x20a\x20\x22Top\x2010\x20moments\x22\x20video\x20from\x20your\x20content'
        ],
        _0x4cb2d1 = _0x45669e[Math['floor'](Math['random']() * _0x45669e['length'])];
    userInput && (userInput['value'] = _0x4cb2d1, userInput['focus'](), userInput['dispatchEvent'](new Event('input')));
    const _0x530166 = document['getElementById']('shuffleIdeasBtn');
    _0x530166 && (_0x530166['style']['animation'] = 'none', setTimeout(() => {
        _0x530166['style']['animation'] = 'spin\x200.6s\x20ease-in-out';
    }, 0xa));
}

function _0x3c0b4a(_0x134404, _0x4c3bbf) {
    if (!chatContainer)
        return;
    const _0x5b2cd6 = document['createElement']('div');
    _0x5b2cd6['className'] = 'message-row\x20' + _0x134404 + '-message-row';
    const _0xbcea98 = document['createElement']('div');
    _0xbcea98['className'] = 'message\x20' + _0x134404 + '-message', _0xbcea98['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + formatMessageContent(_0x4c3bbf) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22message-action\x20copy-btn\x22\x20title=\x22Copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.75\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20class=\x22lucide\x20lucide-copy-icon\x20lucide-copy\x22><rect\x20width=\x2214\x22\x20height=\x2214\x22\x20x=\x228\x22\x20y=\x228\x22\x20rx=\x222\x22\x20ry=\x222\x22/><path\x20d=\x22M4\x2016c-1.1\x200-2-.9-2-2V4c0-1.1.9-2\x202-2h10c1.1\x200\x202\x20.9\x202\x202\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    const _0x2ca5e1 = _0xbcea98['querySelector']('.copy-btn');
    _0x2ca5e1['addEventListener']('click', () => {
        navigator['clipboard']['writeText'](_0x4c3bbf)['then'](() => {
            _0x2ca5e1['classList']['add']('copied'), _0x2ca5e1['innerHTML'] = '<i\x20class=\x22fas\x20fa-check\x22></i>', setTimeout(() => {
                _0x2ca5e1['classList']['remove']('copied'), _0x2ca5e1['innerHTML'] = '<i\x20class=\x22fas\x20fa-copy\x22></i>';
            }, 0x7d0);
        })['catch'](_0x2925fa => {
            _0x4dd2b3('Failed\x20to\x20copy:', _0x2925fa);
        });
    }), _0x5b2cd6['appendChild'](_0xbcea98), chatContainer['appendChild'](_0x5b2cd6), chatContainer['scrollTop'] = chatContainer['scrollHeight'], window['dispatchEvent'](new CustomEvent('messageAdded')), (_0x134404 === 'user' || !_0x1de81c) && (chatHistory['push']({
        'sender': _0x134404,
        'content': _0x4c3bbf,
        'timestamp': new Date()['toISOString']()
    }), localStorage['setItem']('chatHistory', JSON['stringify'](chatHistory)));
}

function _0x106117() {
    (chatContainer && chatContainer['children']['length'] > 0x1 || welcomeCard && !welcomeCard['classList']['contains']('hidden')) && (confirm('Start\x20a\x20new\x20chat?\x20Current\x20chat\x20will\x20be\x20cleared.') && _0x9aef72());
}

function _0x9aef72() {
    if (!chatContainer)
        return;
    while (chatContainer['firstChild']) {
        chatContainer['removeChild'](chatContainer['firstChild']);
    }
    welcomeCard && (chatContainer['appendChild'](welcomeCard), welcomeCard['classList']['remove']('hidden'));
    _0x227775 = [];
    const _0x29f87f = document['getElementById']('filePreviewContainer');
    _0x29f87f && (_0x29f87f['innerHTML'] = '', _0x29f87f['classList']['remove']('active'));
    _0x48f244 = 0x0;
    const _0x1a7f8d = document['querySelector']('.input-section'),
        _0x1f57fd = _0x1a7f8d ? _0x1a7f8d['querySelector']('.input-container') : null;
    _0x1f57fd && _0x1f57fd['classList']['add']('first-prompt'), _0x1a7f8d && _0x1a7f8d['classList']['add']('is-first-prompt'), chatHistory = [], localStorage['removeItem']('chatHistory');
}

function _0x3a99d3() {
    if (!_0x40877a)
        return;
    _0x40877a['classList']['add']('active');
}

function _0x54dc1d() {
    if (!_0x40877a)
        return;
    _0x40877a['classList']['remove']('active');
}

function _0x2faba3(_0x3645ba) {
    _0x5ce4ea['forEach'](_0x41f506 => {
        _0x41f506['classList']['remove']('active'), _0x41f506['dataset']['target'] === _0x3645ba && _0x41f506['classList']['add']('active');
    });
    switch (_0x3645ba) {
        case 'chat':
            if (_0x48f244 === 0x0) {
                const _0x20dbe4 = document['querySelector']('.input-section'),
                    _0x12ace8 = _0x20dbe4 ? _0x20dbe4['querySelector']('.input-container') : null;
                _0x12ace8 && _0x12ace8['classList']['add']('first-prompt'), _0x20dbe4 && _0x20dbe4['classList']['add']('is-first-prompt');
            }
            break;
        case 'history':
            openHistory();
            break;
        case 'saved':
            openSaved();
            break;
        default:
            break;
    }
}

function _0x1d1ab4() {
    _0x46d53b && (_0x46d53b['textContent'] = _0x4df7fe['toLocaleString']());
}

function _0x24fd30() {
    const _0x4899c1 = '💡\x20You\x20have\x20' + _0x4df7fe + '\x20tokens\x20remaining.\x20Running\x20low?\x20<a\x20href=\x22/premium.html\x22\x20style=\x22color:\x20#ff6b35;\x20font-weight:\x20700;\x20text-decoration:\x20underline;\x22>Upgrade\x20now</a>\x20for\x20unlimited\x20access!';
    _0x3c0b4a('ai', _0x4899c1);
}

function _0x3957b0() {
    if (!_0x280151)
        return _0x4c4d4d('Please\x20sign\x20in\x20to\x20access\x20premium\x20features', 'error'), ![];
    if (_0x280151['plan'] === 'free')
        return _0x4c4d4d('This\x20is\x20a\x20premium\x20feature.\x20Please\x20upgrade\x20your\x20plan.', 'error'), ![];
    return !![];
}

function _0x265792() {
    const _0x250018 = document['getElementById']('savedList');
    if (!_0x250018)
        return;
    const _0x1b330a = JSON['parse'](localStorage['getItem']('savedResults') || '[]');
    if (_0x1b330a['length'] === 0x0) {
        _0x250018['innerHTML'] = '<p>No\x20saved\x20items.</p>';
        return;
    }
    _0x250018['innerHTML'] = _0x1b330a['map']((_0x13a243, _0x245372) => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-type\x22>' + _0x13a243['type'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-preview\x22>' + _0x13a243['content']['substring'](0x0, 0x64) + '...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-date\x22>' + new Date(_0x13a243['timestamp'])['toLocaleDateString']() + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22viewSavedItem(' + _0x245372 + ')\x22>View</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20')['join']('');
}

function _0x3d9455(_0x66ec4) {
    const _0x4c14ca = JSON['parse'](localStorage['getItem']('savedResults') || '[]'),
        _0x59c02b = _0x4c14ca[_0x66ec4];
    _0x59c02b && alert('Saved\x20' + _0x59c02b['type'] + ':\x0a\x0a' + _0x59c02b['content']);
}

function _0x9bf52d(_0x686605, _0x4e0342) {
    const _0x52af57 = document['getElementById'](_0x686605);
    if (!_0x52af57)
        return;
    _0x52af57['style']['display'] = 'block', _0x52af57['innerHTML'] = '';
    const _0x3a72de = document['createElement']('div');
    _0x3a72de['className'] = 'error-message', _0x3a72de['textContent'] = _0x4e0342, _0x52af57['appendChild'](_0x3a72de);
}

function _0x647496(_0x30d206) {
    navigator['clipboard']['writeText'](_0x30d206)['then'](() => {
        _0x4c4d4d('Copied\x20to\x20clipboard!', 'success');
    });
}

function _0x41cab6(_0x458830, _0x2a74f2) {
    const _0x1c4a6a = JSON['parse'](localStorage['getItem']('savedResults') || '[]');
    _0x1c4a6a['push']({
        'type': _0x458830,
        'content': _0x2a74f2,
        'timestamp': new Date()['toISOString']()
    }), localStorage['setItem']('savedResults', JSON['stringify'](_0x1c4a6a)), _0x4c4d4d('Saved\x20successfully!', 'success');
}
(function() {
    const _0x95ce09 = localStorage['getItem']('theme') || 'light';
    document['documentElement']['setAttribute']('data-theme', _0x95ce09);
}()), window['testTemplatePreview'] = function() {
    const _0x227cc7 = document['getElementById']('previewTemplateName'),
        _0x2c9722 = document['getElementById']('previewTemplateDescription'),
        _0x3a4ab9 = document['getElementById']('previewVideoDuration'),
        _0x257971 = document['getElementById']('previewVideoFormat');
    _0x4dd2b3('🧪\x20TEMPLATE\x20PREVIEW\x20TEST:'), _0x4dd2b3('\x20\x20previewTemplateName:', _0x227cc7 ? '✅\x20FOUND' : '❌\x20NOT\x20FOUND'), _0x4dd2b3('\x20\x20previewTemplateDescription:', _0x2c9722 ? '✅\x20FOUND' : '❌\x20NOT\x20FOUND'), _0x4dd2b3('\x20\x20previewVideoDuration:', _0x3a4ab9 ? '✅\x20FOUND' : '❌\x20NOT\x20FOUND'), _0x4dd2b3('\x20\x20previewVideoFormat:', _0x257971 ? '✅\x20FOUND' : '❌\x20NOT\x20FOUND'), _0x227cc7 && (_0x227cc7['textContent'] = 'TEST:\x20Ranking\x20Moments', _0x4dd2b3('\x20\x20✅\x20Updated\x20template\x20name')), _0x2c9722 && (_0x2c9722['textContent'] = 'TEST:\x20This\x20is\x20a\x20test\x20video\x20title', _0x4dd2b3('\x20\x20✅\x20Updated\x20template\x20description')), _0x3a4ab9 && (_0x3a4ab9['textContent'] = '~3m\x2020s', _0x4dd2b3('\x20\x20✅\x20Updated\x20duration')), _0x257971 && (_0x257971['textContent'] = 'YouTube\x20Shorts', _0x4dd2b3('\x20\x20✅\x20Updated\x20format')), _0x4dd2b3('If\x20you\x20see\x20the\x20TEST\x20values\x20in\x20the\x20template\x20preview,\x20the\x20elements\x20work!');
}, _0x4dd2b3('✅\x20testTemplatePreview()\x20is\x20ready\x20-\x20run\x20it\x20in\x20console'), document['addEventListener']('DOMContentLoaded', () => {
    const _0xcc5e25 = sessionStorage['getItem']('clipProcessing');
    if (_0xcc5e25)
        try {
            const _0x33ef1e = JSON['parse'](_0xcc5e25);
            setTimeout(() => {
                _0x4574d7(_0x33ef1e['url']);
            }, 0x1f4);
        } catch (_0x412d77) {
            _0x4dd2b3('Failed\x20to\x20restore\x20clip\x20processing:', _0x412d77), sessionStorage['removeItem']('clipProcessing');
        }
    _0x8d51d5(), _0x1942a1(), typeof clipsStudio !== 'undefined' && clipsStudio && typeof clipsStudio['init'] === 'function' ? (clipsStudio['init'](), typeof clipsStudio['setupWatermarkToggle'] === 'function' && clipsStudio['setupWatermarkToggle']()) : _0x3e44df();
}), window['getWatermarkState'] = function() {
    const _0x4b11b7 = localStorage['getItem']('solisAIWatermarkEnabled');
    return _0x4b11b7 !== 'false';
}, window['getWatermarkParams'] = function() {
    return {
        'add_watermark': window['getWatermarkState']()
    };
};