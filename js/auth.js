const _0x167efd = {
    'API_BASE': window['location']['origin'] + '/api',
    'ACCESS_TOKEN_DURATION': 0x36ee80,
    'REFRESH_CHECK_INTERVAL': 0x32 * 0x3c * 0x3e8
};
let _0x578bdf = null,
    _0x25aa72 = null;

function _0x2122c0() {
    if (_0x25aa72)
        clearInterval(_0x25aa72);
    _0x25aa72 = setInterval(async () => {
        console['log']('[Auth]\x20Checking\x20if\x20token\x20needs\x20refresh...'), await _0x331499();
    }, _0x167efd['REFRESH_CHECK_INTERVAL']), console['log']('[Auth]\x20Auto-refresh\x20setup\x20complete\x20(checks\x20every\x2050\x20minutes)');
}
async function _0x331499() {
    try {
        const _0x1e4ca0 = await fetch(_0x167efd['API_BASE'] + '/auth/refresh', {
            'method': 'POST',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        if (_0x1e4ca0['ok']) {
            const _0x534902 = await _0x1e4ca0['json']();
            return console['log']('[Auth]\x20Token\x20refreshed\x20successfully'), !![];
        } else {
            if (_0x1e4ca0['status'] === 0x191)
                return console['warn']('[Auth]\x20Refresh\x20failed\x20-\x20session\x20expired,\x20redirecting\x20to\x20login'), _0x1defef(), ![];
        }
    } catch (_0x70a073) {
        console['error']('[Auth]\x20Refresh\x20error:', _0x70a073);
    }
    return ![];
}
async function _0x419871() {
    try {
        if (_0x578bdf)
            clearTimeout(_0x578bdf);
        if (_0x25aa72)
            clearInterval(_0x25aa72);
        await fetch(_0x167efd['API_BASE'] + '/', {
            'method': 'POST',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify({'action': 'logout'}),
            'method': 'POST',
            'credentials': 'include'
        }), console['log']('[Auth]\x20User\x20logged\x20out'), _0x1defef();
    } catch (_0x2b398b) {
        console['error']('[Auth]\x20Logout\x20error:', _0x2b398b), _0x1defef();
    }
}
async function _0x50c51a() {
    try {
        const _0x5751b2 = await fetch(_0x167efd['API_BASE'] + '/auth/check', {
            'method': 'GET',
            'credentials': 'include'
        });
        if (_0x5751b2['ok']) {
            const _0x2ff510 = await _0x5751b2['json']();
            return _0x2ff510['authenticated'] === !![];
        }
    } catch (_0x5689c3) {
        console['error']('[Auth]\x20Authentication\x20check\x20error:', _0x5689c3);
    }
    return ![];
}
async function _0x3bed66() {
    try {
        const _0x559705 = await fetch(_0x167efd['API_BASE'] + '/auth/check', {
            'method': 'GET',
            'credentials': 'include'
        });
        if (_0x559705['ok']) {
            const _0x3a28e4 = await _0x559705['json']();
            if (_0x3a28e4['authenticated'] && _0x3a28e4['user'])
                return _0x3a28e4['user'];
        }
    } catch (_0x20935d) {
        console['error']('[Auth]\x20Failed\x20to\x20get\x20current\x20user:', _0x20935d);
    }
    return null;
}

function _0x1defef() {
    !window['location']['pathname']['includes']('login') && (window['location']['href'] = '/login.html');
}
async function _0x405b0d(_0x3174c0, _0x25a72c = {}) {
    let _0x3ae2ec = await fetch(_0x3174c0, {
        ..._0x25a72c,
        'credentials': 'include'
    });
    if (_0x3ae2ec['status'] === 0x191) {
        console['log']('[Auth]\x20Got\x20401,\x20attempting\x20token\x20refresh...');
        const _0x56a47d = await _0x331499();
        _0x56a47d ? _0x3ae2ec = await fetch(_0x3174c0, {
            ..._0x25a72c,
            'credentials': 'include'
        }) : _0x1defef();
    }
    return _0x3ae2ec;
}

function _0x1edb51() {
    console['log']('[Auth]\x20Initializing\x20authentication...'), _0x2122c0(), _0x50c51a()['then'](_0x43c10a => {
        !_0x43c10a ? (console['warn']('[Auth]\x20Not\x20authenticated,\x20redirecting\x20to\x20login'), _0x1defef()) : console['log']('[Auth]\x20User\x20is\x20authenticated');
    }), console['log']('[Auth]\x20Initialization\x20complete');
}
window['Auth'] = {
    'setup': _0x2122c0,
    'refresh': _0x331499,
    'logout': _0x419871,
    'isAuthenticated': _0x50c51a,
    'getCurrentUser': _0x3bed66,
    'redirectToLogin': _0x1defef,
    'protectedFetch': _0x405b0d,
    'init': _0x1edb51
}, console['log']('[Auth]\x20Auth\x20utility\x20loaded');