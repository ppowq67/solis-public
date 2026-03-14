const _0x30b9d9 = _0x53a4;
(function (_0x2daade, _0x221d55) {
    const _0x11fc00 = _0x53a4, _0x4e7cc6 = _0x2daade();
    while (!![]) {
        try {
            const _0x4786cd = -parseInt(_0x11fc00(0x116)) / 0x1 + -parseInt(_0x11fc00(0x119)) / 0x2 * (-parseInt(_0x11fc00(0x10d)) / 0x3) + parseInt(_0x11fc00(0x112)) / 0x4 + -parseInt(_0x11fc00(0x102)) / 0x5 + -parseInt(_0x11fc00(0xfe)) / 0x6 + parseInt(_0x11fc00(0x11b)) / 0x7 + parseInt(_0x11fc00(0x11a)) / 0x8;
            if (_0x4786cd === _0x221d55)
                break;
            else
                _0x4e7cc6['push'](_0x4e7cc6['shift']());
        } catch (_0x52a57e) {
            _0x4e7cc6['push'](_0x4e7cc6['shift']());
        }
    }
}(_0x55f1, 0x58cd0));
const AUTH_CONFIG = {
    'API_BASE': window['location'][_0x30b9d9(0x103)] + '/api',
    'ACCESS_TOKEN_DURATION': 0x36ee80,
    'REFRESH_CHECK_INTERVAL': 0x32 * 0x3c * 0x3e8
};
let refreshTokenTimer = null, refeshCheckTimer = null;
function _0x53a4(_0x3dcfc9, _0x1a3dd8) {
    _0x3dcfc9 = _0x3dcfc9 - 0xf5;
    const _0x55f19b = _0x55f1();
    let _0x53a4a5 = _0x55f19b[_0x3dcfc9];
    return _0x53a4a5;
}
function setupAutoRefresh() {
    const _0xb6cea6 = _0x30b9d9;
    if (refeshCheckTimer)
        clearInterval(refeshCheckTimer);
    refeshCheckTimer = setInterval(async () => {
        const _0x406f42 = _0x53a4;
        console['log'](_0x406f42(0xf5)), await refreshTokenSilently();
    }, AUTH_CONFIG[_0xb6cea6(0x100)]), console[_0xb6cea6(0xf8)](_0xb6cea6(0x109));
}
async function refreshTokenSilently() {
    const _0x336690 = _0x30b9d9;
    try {
        const _0x34ae25 = await fetch(AUTH_CONFIG[_0x336690(0xfc)] + _0x336690(0x101), {
            'method': _0x336690(0x108),
            'credentials': _0x336690(0xf6),
            'headers': { 'Content-Type': _0x336690(0x115) }
        });
        if (_0x34ae25['ok']) {
            const _0xdbd7de = await _0x34ae25['json']();
            return console[_0x336690(0xf8)](_0x336690(0x10a)), !![];
        } else {
            if (_0x34ae25[_0x336690(0xfb)] === 0x191)
                return console[_0x336690(0x118)](_0x336690(0x113)), redirectToLogin(), ![];
        }
    } catch (_0x1e0ac2) {
        console['error'](_0x336690(0x114), _0x1e0ac2);
    }
    return ![];
}
async function logoutUser() {
    const _0x1979e3 = _0x30b9d9;
    try {
        if (refreshTokenTimer)
            clearTimeout(refreshTokenTimer);
        if (refeshCheckTimer)
            clearInterval(refeshCheckTimer);
        await fetch(AUTH_CONFIG[_0x1979e3(0xfc)] + _0x1979e3(0xf7), {
            'method': _0x1979e3(0x108),
            'credentials': _0x1979e3(0xf6)
        }), console[_0x1979e3(0xf8)](_0x1979e3(0x107)), redirectToLogin();
    } catch (_0x371a4c) {
        console['error'](_0x1979e3(0xfd), _0x371a4c), redirectToLogin();
    }
}
async function isAuthenticated() {
    const _0x2821a7 = _0x30b9d9;
    try {
        const _0xace206 = await fetch(AUTH_CONFIG[_0x2821a7(0xfc)] + '/auth/check', {
            'method': 'GET',
            'credentials': _0x2821a7(0xf6)
        });
        if (_0xace206['ok']) {
            const _0x2e633c = await _0xace206['json']();
            return _0x2e633c[_0x2821a7(0x117)] === !![];
        }
    } catch (_0x233db9) {
        console[_0x2821a7(0x10b)](_0x2821a7(0x11d), _0x233db9);
    }
    return ![];
}
async function getCurrentUser() {
    const _0x2f9caf = _0x30b9d9;
    try {
        const _0x54e27b = await fetch(AUTH_CONFIG['API_BASE'] + '/auth/check', {
            'method': 'GET',
            'credentials': _0x2f9caf(0xf6)
        });
        if (_0x54e27b['ok']) {
            const _0x1b0c84 = await _0x54e27b[_0x2f9caf(0x106)]();
            if (_0x1b0c84[_0x2f9caf(0x117)] && _0x1b0c84[_0x2f9caf(0x105)])
                return _0x1b0c84[_0x2f9caf(0x105)];
        }
    } catch (_0x432a77) {
        console[_0x2f9caf(0x10b)](_0x2f9caf(0x11c), _0x432a77);
    }
    return null;
}
function redirectToLogin() {
    const _0x327daa = _0x30b9d9;
    !window['location'][_0x327daa(0x104)][_0x327daa(0xf9)](_0x327daa(0x11e)) && (window['location'][_0x327daa(0x111)] = '/login.html');
}
function _0x55f1() {
    const _0x5bd923 = [
        'href',
        '1973168jPIwpI',
        '[Auth]\x20Refresh\x20failed\x20-\x20session\x20expired,\x20redirecting\x20to\x20login',
        '[Auth]\x20Refresh\x20error:',
        'application/json',
        '151631yGjcDB',
        'authenticated',
        'warn',
        '14pJPGai',
        '142808iAjFVW',
        '3899154yUQowe',
        '[Auth]\x20Failed\x20to\x20get\x20current\x20user:',
        '[Auth]\x20Authentication\x20check\x20error:',
        'login',
        '[Auth]\x20Checking\x20if\x20token\x20needs\x20refresh...',
        'include',
        '/auth/logout',
        'log',
        'includes',
        '[Auth]\x20Initializing\x20authentication...',
        'status',
        'API_BASE',
        '[Auth]\x20Logout\x20error:',
        '497670dSXxWG',
        'then',
        'REFRESH_CHECK_INTERVAL',
        '/auth/refresh',
        '3012485uLYoaz',
        'origin',
        'pathname',
        'user',
        'json',
        '[Auth]\x20User\x20logged\x20out',
        'POST',
        '[Auth]\x20Auto-refresh\x20setup\x20complete\x20(checks\x20every\x2050\x20minutes)',
        '[Auth]\x20Token\x20refreshed\x20successfully',
        'error',
        '[Auth]\x20Got\x20401,\x20attempting\x20token\x20refresh...',
        '56844sQDjVk',
        'Auth',
        '[Auth]\x20Not\x20authenticated,\x20redirecting\x20to\x20login',
        '[Auth]\x20User\x20is\x20authenticated'
    ];
    _0x55f1 = function () {
        return _0x5bd923;
    };
    return _0x55f1();
}
async function protectedFetch(_0x3a632c, _0x238df8 = {}) {
    const _0x73a0f0 = _0x30b9d9;
    let _0x66f60f = await fetch(_0x3a632c, {
        ..._0x238df8,
        'credentials': _0x73a0f0(0xf6)
    });
    if (_0x66f60f[_0x73a0f0(0xfb)] === 0x191) {
        console[_0x73a0f0(0xf8)](_0x73a0f0(0x10c));
        const _0x2adfda = await refreshTokenSilently();
        _0x2adfda ? _0x66f60f = await fetch(_0x3a632c, {
            ..._0x238df8,
            'credentials': _0x73a0f0(0xf6)
        }) : redirectToLogin();
    }
    return _0x66f60f;
}
function initAuth() {
    const _0x3f236a = _0x30b9d9;
    console[_0x3f236a(0xf8)](_0x3f236a(0xfa)), setupAutoRefresh(), isAuthenticated()[_0x3f236a(0xff)](_0x43b581 => {
        const _0x54230c = _0x3f236a;
        !_0x43b581 ? (console['warn'](_0x54230c(0x10f)), redirectToLogin()) : console['log'](_0x54230c(0x110));
    }), console[_0x3f236a(0xf8)]('[Auth]\x20Initialization\x20complete');
}
window[_0x30b9d9(0x10e)] = {
    'setup': setupAutoRefresh,
    'refresh': refreshTokenSilently,
    'logout': logoutUser,
    'isAuthenticated': isAuthenticated,
    'getCurrentUser': getCurrentUser,
    'redirectToLogin': redirectToLogin,
    'protectedFetch': protectedFetch,
    'init': initAuth
}, console[_0x30b9d9(0xf8)]('[Auth]\x20Auth\x20utility\x20loaded');