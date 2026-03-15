const _0x3cd431 = '1.0.0';
async function _0x2f262f() {
    try {
        const _0xa3bebc = await fetch(window['API_BASE_URL'] + '/auth/csrf-token', {
            'method': 'GET',
            'credentials': 'include'
        });
        if (_0xa3bebc['ok']) {
            const _0x58e189 = await _0xa3bebc['json']();
            if (_0x58e189['token']) {
                const _0x2bf95b = document['querySelector']('meta[name=\x22csrf-token\x22]');
                _0x2bf95b && (_0x2bf95b['setAttribute']('content', _0x58e189['token']), console['log']('[OK]\x20CSRF\x20token\x20initialized'));
            }
        } else
            console['warn']('[WARNING]\x20Failed\x20to\x20fetch\x20CSRF\x20token');
    } catch (_0x15c309) {
        console['warn']('[WARNING]\x20CSRF\x20token\x20fetch\x20error:', _0x15c309);
    }
}

function _0x35525c() {
    const _0x8d72df = document['querySelector']('meta[name=\x22csrf-token\x22]');
    if (_0x8d72df && _0x8d72df['content'] && _0x8d72df['content']['length'] >= 0x20)
        return _0x8d72df['content'];
    return null;
}
async function _0xccb319(_0x2746da, _0x1cd87e = {}) {
    const _0x28f861 = {};
    if (_0x1cd87e['method'] && [
            'POST',
            'PUT',
            'DELETE',
            'PATCH'
        ]['includes'](_0x1cd87e['method']['toUpperCase']())) {
        const _0x431b82 = _0x35525c();
        if (!_0x431b82)
            throw new Error('CSRF\x20token\x20not\x20available\x20-\x20cannot\x20make\x20state-changing\x20request');
        _0x28f861['X-CSRF-Token'] = _0x431b82;
    }
    return fetch(_0x2746da, {
        ..._0x1cd87e,
        'credentials': 'include',
        'headers': {
            ..._0x28f861,
            ..._0x1cd87e['headers']
        }
    });
}
window['location']['protocol'] === 'http:' && window['location']['hostname'] !== 'localhost' && window['location']['hostname'] !== '127.0.0.1' && console['warn']('⚠️\x20Warning:\x20Connection\x20is\x20not\x20secure.\x20Use\x20HTTPS\x20in\x20production.');
document['addEventListener']('DOMContentLoaded', _0x2f262f);

function _0x2a83cb() {
    const _0x1d567a = sessionStorage['getItem']('solis_visited');
    return !_0x1d567a;
}

function _0x43c3d2() {
    sessionStorage['setItem']('solis_visited', 'true');
}

function _0x2eb6b0(_0x1ca75d) {
    if (!_0x1ca75d || typeof _0x1ca75d !== 'object')
        throw new Error('Invalid\x20user\x20object');
    const _0x1dda53 = [
            'id',
            'email',
            'name',
            'role',
            'picture',
            'plan',
            'auth_provider'
        ],
        _0x1f4149 = {};
    for (const _0x382d78 of _0x1dda53) {
        if (_0x382d78 in _0x1ca75d) {
            const _0x20473b = _0x1ca75d[_0x382d78];
            (typeof _0x20473b === 'string' || typeof _0x20473b === 'number') && (_0x1f4149[_0x382d78] = _0x20473b);
        }
    }
    return _0x1f4149;
}

function _0x5235d8() {
    const _0xb890b3 = sessionStorage['getItem']('appVersion');
    _0xb890b3 && _0xb890b3 !== _0x3cd431 && sessionStorage['setItem']('showVersionUpdate', 'true'), sessionStorage['setItem']('appVersion', _0x3cd431);
}
async function _0x133ff6() {
    try {
        const _0x20e0af = window['API_BASE_URL'] + '/auth/verify';
        console['log']('🔍\x20Verifying\x20session\x20at:', _0x20e0af);
        const _0x2a1065 = await _0xccb319(_0x20e0af, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        console['log']('📡\x20Verify\x20response\x20status:', _0x2a1065['status']);
        const _0x31ca5c = await _0x2a1065['json']();
        console['log']('📄\x20Verify\x20response\x20data:', _0x31ca5c);
        if (_0x2a1065['ok']) {
            if (!_0x31ca5c || typeof _0x31ca5c !== 'object' || !_0x31ca5c['user'])
                throw new Error('Invalid\x20API\x20response\x20format');
            const _0x1a472d = _0x2eb6b0(_0x31ca5c['user']);
            sessionStorage['setItem']('userId', String(_0x1a472d['id']));
            const _0x29607f = _0x2a83cb();
            _0x43c3d2(), _0x5235d8(), window['history']['replaceState']({}, document['title'], window['location']['pathname']), console['log']('✅\x20Session\x20verified,\x20redirecting\x20to:', _0x29607f ? 'welcome' : 'dashboard');
            const _0x469484 = _0x29607f ? '/welcome.html' : '/dashboard.html';
            setTimeout(() => {
                window['location']['href'] = _0x469484;
            }, 0x64);
        } else
            console['log']('❌\x20Session\x20invalid\x20(status\x20' + _0x2a1065['status'] + '),\x20redirecting\x20to\x20login'), console['log']('Response:', _0x31ca5c), setTimeout(() => {
                window['location']['href'] = '/login.html';
            }, 0x64);
    } catch (_0x5e2f3d) {
        console['error']('❌\x20Error\x20during\x20verification:', _0x5e2f3d['message'], _0x5e2f3d), setTimeout(() => {
            window['location']['href'] = '/login.html';
        }, 0x64);
    }
}
setTimeout(() => {
    _0x133ff6();
}, 0x1f4);