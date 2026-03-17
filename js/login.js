async function _0x5f5564() {
    return new Promise(_0x11f867 => {
        if (window['SOLIS_INITIALIZED'] && window['API_BASE_URL'])
            _0x11f867();
        else {
            const _0x21c0ab = setInterval(() => {
                window['SOLIS_INITIALIZED'] && window['API_BASE_URL'] && (clearInterval(_0x21c0ab), _0x11f867());
            }, 0x32);
            setTimeout(() => {
                clearInterval(_0x21c0ab), _0x11f867();
            }, 0x1388);
        }
    });
}
let _0x1beee6, _0x33b63e;
async function _0x566dbc() {
    try {
        const _0x8a0c1d = window['API_BASE_URL'];
        console.log(`[CSRF] Fetching from: ${_0x8a0c1d}`);
        const _0x4793a7 = await fetch(_0x8a0c1d, {
            'method': 'POST',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify({'action': 'csrf-token'}),
            'credentials': 'include'
        });
        console.log(`[CSRF] Response status: ${_0x4793a7.status}`);
        if (_0x4793a7['ok']) {
            const _0x19b820 = await _0x4793a7['json']();
            console.log(`[CSRF] Token received: ${_0x19b820['token']?.substring(0, 20)}...`);
            if (_0x19b820['token']) {
                const _0x7f885f = document['querySelector']('meta[name=\x22csrf-token\x22]');
                if (_0x7f885f)
                    _0x7f885f['setAttribute']('content', _0x19b820['token']);
            }
        }
    } catch (_0x199661) { console.error(`[CSRF] Error: ${_0x199661.message}`); }
}
async function _0xcc685c() {
    console.log('[Login] Initializing...');
    await _0x5f5564(), _0x1beee6 = document['getElementById']('googleLoginBtn'), _0x33b63e = document['getElementById']('googleBtnText');
    if (!_0x1beee6 || !_0x33b63e) {
        console.warn('[Login] Missing login button elements');
        return;
    }
    console.log('[Login] Fetching CSRF token...');
    await _0x566dbc();
    const _0x2c8d90 = new URLSearchParams(window['location']['search']);
    if (_0x2c8d90['has']('logout')) {
        try {
            const _0x187b1a = await fetch(window['API_BASE_URL'], {
                'method': 'POST',
                'headers': {'Content-Type': 'application/json'},
                'body': JSON.stringify({'action': 'logout'}),
                'credentials': 'include'
            });
            sessionStorage['clear'](), localStorage['removeItem']('user');
        } catch (_0x17efec) {}
        window['history']['replaceState']({}, document['title'], '/login.html');
    }
    try {
        const _0x41d8cb = await fetch(window['API_BASE_URL'], {
            'method': 'POST',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify({'action': 'check'}),
            'credentials': 'include'
        });
        if (_0x41d8cb['ok']) {
            const _0x1d5c07 = await _0x41d8cb['json']();
            if (_0x1d5c07['authenticated'] && _0x1d5c07['user']) {}
        }
    } catch (_0x3f1a3e) {}
    _0x460d29();
}

function _0x258184() {
    const _0x2191bb = document['querySelector']('meta[name=\x22csrf-token\x22]');
    return _0x2191bb && _0x2191bb['content'] && _0x2191bb['content']['length'] >= 0x20 ? _0x2191bb['content'] : null;
}

function _0x4b2740(_0x53a77a, _0x18ecff = 0x3) {
    _0x53a77a['disabled'] = !![];
    let _0x1cb523 = _0x18ecff;
    const _0xce216c = _0x53a77a['querySelector']('span')['textContent'],
        _0x22a218 = setInterval(() => {
            _0x53a77a['querySelector']('span')['textContent'] = 'Try\x20again\x20in\x20' + _0x1cb523 + 's', _0x1cb523--, _0x1cb523 < 0x0 && (clearInterval(_0x22a218), _0x53a77a['disabled'] = ![], _0x53a77a['querySelector']('span')['textContent'] = _0xce216c);
        }, 0x3e8);
}

function _0x460d29() {
    if (!_0x1beee6)
        return;
    _0x1beee6['addEventListener']('click', _0x351a2c);
}
async function _0x351a2c() {
    try {
        console.log('[Login] Click handler triggered - starting authentication...');
        _0x33b63e['textContent'] = 'Connecting…', _0x1beee6['disabled'] = !![];
        const _0x4f06e4 = await fetch(window['API_BASE_URL'], {
            'method': 'POST',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify({'action': 'google'}),
            'credentials': 'include'
        });
        console.log(`[Login] /auth/google response: ${_0x4f06e4.status}`);
        if (!_0x4f06e4['ok'])
            throw new Error('Server\x20error:\x20' + _0x4f06e4['status']);
        const _0x505ecf = await _0x4f06e4['json']();
        console.log(`[Login] Got auth URL: ${_0x505ecf['auth_url']?.substring(0, 50)}...`);
        if (_0x505ecf['auth_url'])
            window['location']['href'] = _0x505ecf['auth_url'];
        else
            throw new Error('Authentication\x20unavailable');
    } catch (_0x449a0d) {
        console['error']('❌\x20Login\x20error:', _0x449a0d), alert('Login\x20failed.\x20Please\x20check\x20your\x20connection\x20and\x20try\x20again.'), _0x33b63e['textContent'] = 'Continue\x20with\x20Google', _0x4b2740(_0x1beee6, 0x3);
    }
}
async function _0x277493(_0xc15afd, _0x19259d = {}) {
    const _0x219d00 = {};
    if (_0x19259d['method'] && [
            'POST',
            'PUT',
            'DELETE',
            'PATCH'
        ]['includes'](_0x19259d['method']['toUpperCase']())) {
        const _0x1c1fb8 = _0x258184();
        if (!_0x1c1fb8)
            throw new Error('CSRF\x20token\x20unavailable');
        _0x219d00['X-CSRF-Token'] = _0x1c1fb8;
    }
    return fetch(_0xc15afd, {
        ..._0x19259d,
        'credentials': 'include',
        'headers': {
            ..._0x219d00,
            ..._0x19259d['headers']
        }
    });
}
document['addEventListener']('DOMContentLoaded', _0xcc685c);