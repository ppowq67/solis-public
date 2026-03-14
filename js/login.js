const _0x1a501d = _0xe8b8;
(function (_0x52e86b, _0x1261cc) {
    const _0x20479a = _0xe8b8, _0x3b6509 = _0x52e86b();
    while (!![]) {
        try {
            const _0x504d31 = parseInt(_0x20479a(0x1af)) / 0x1 * (-parseInt(_0x20479a(0x1a4)) / 0x2) + -parseInt(_0x20479a(0x17c)) / 0x3 + parseInt(_0x20479a(0x1ae)) / 0x4 * (-parseInt(_0x20479a(0x1b5)) / 0x5) + -parseInt(_0x20479a(0x192)) / 0x6 + -parseInt(_0x20479a(0x18f)) / 0x7 + -parseInt(_0x20479a(0x176)) / 0x8 + parseInt(_0x20479a(0x1a3)) / 0x9;
            if (_0x504d31 === _0x1261cc)
                break;
            else
                _0x3b6509['push'](_0x3b6509['shift']());
        } catch (_0x41a3b5) {
            _0x3b6509['push'](_0x3b6509['shift']());
        }
    }
}(_0x3005, 0x20e90));
async function waitForInitialization() {
    return new Promise(_0x5e7c56 => {
        const _0x23f628 = _0xe8b8;
        if (window[_0x23f628(0x1ad)] && window[_0x23f628(0x1aa)])
            _0x5e7c56();
        else {
            const _0x255a5c = setInterval(() => {
                const _0x1ac6db = _0x23f628;
                window[_0x1ac6db(0x1ad)] && window['API_BASE_URL'] && (clearInterval(_0x255a5c), _0x5e7c56());
            }, 0x32);
            setTimeout(() => {
                clearInterval(_0x255a5c), _0x5e7c56();
            }, 0x1388);
        }
    });
}
let googleLoginBtn, googleBtnText;
function _0x3005() {
    const _0x2d47db = [
        '656yAuuuW',
        '242955BxYzOG',
        'token',
        'http:',
        'disabled',
        '/dashboard.html',
        'location',
        '3720FVwGRW',
        'error',
        'meta[name=\x22csrf-token\x22]',
        '/auth/csrf-token',
        '/login.html',
        'Server\x20error:\x20',
        '✅\x20User\x20already\x20authenticated',
        '727024YFspAc',
        'localhost',
        'warn',
        'DOMContentLoaded',
        'include',
        '✅\x20Logout\x20successful',
        '779664ELJvKp',
        '⚠️\x20Logout\x20error:',
        'title',
        '❌\x20Login\x20error:',
        'GET',
        '⚠️\x20CSRF\x20fetch\x20error:',
        'clear',
        'auth_url',
        'status',
        'Connecting…',
        'googleBtnText',
        'textContent',
        'Authentication\x20unavailable',
        'search',
        'Redirecting\x20to\x20dashboard...',
        'Try\x20again\x20in\x20',
        '🔐\x20Logout\x20requested\x20-\x20clearing\x20session',
        'json',
        'addEventListener',
        '968044jEAMMf',
        'Login\x20failed.\x20Please\x20check\x20your\x20connection\x20and\x20try\x20again.',
        'length',
        '233598hnvEoG',
        'includes',
        'has',
        'DELETE',
        'span',
        'method',
        'getElementById',
        'content',
        'href',
        '⚠️\x20Auth\x20check\x20failed:',
        'PATCH',
        '/auth/check',
        'POST',
        'querySelector',
        '❌\x20Login\x20button\x20elements\x20not\x20found',
        'log',
        'hostname',
        '9249858vSUEoI',
        '2ubZGTU',
        'test',
        'history',
        '⚠️\x20Not\x20HTTPS\x20—\x20use\x20HTTPS\x20in\x20production.',
        'headers',
        'user',
        'API_BASE_URL',
        '/auth/logout',
        '/auth/google',
        'SOLIS_INITIALIZED'
    ];
    _0x3005 = function () {
        return _0x2d47db;
    };
    return _0x3005();
}
async function initializeCSRFToken() {
    const _0x5d42a6 = _0xe8b8;
    try {
        const _0x9a5fbc = await fetch(window['API_BASE_URL'] + _0x5d42a6(0x1b8), {
            'method': 'GET',
            'credentials': _0x5d42a6(0x17a)
        });
        if (_0x9a5fbc['ok']) {
            const _0x1ed0e7 = await _0x9a5fbc[_0x5d42a6(0x18d)]();
            if (_0x1ed0e7[_0x5d42a6(0x1b0)]) {
                const _0x1a8a7a = document['querySelector'](_0x5d42a6(0x1b7));
                if (_0x1a8a7a)
                    _0x1a8a7a['setAttribute'](_0x5d42a6(0x199), _0x1ed0e7['token']);
            }
        }
    } catch (_0x11d27c) {
        console[_0x5d42a6(0x178)](_0x5d42a6(0x181), _0x11d27c);
    }
}
async function setupLoginPage() {
    const _0x1dd93d = _0xe8b8;
    await waitForInitialization(), googleLoginBtn = document['getElementById']('googleLoginBtn'), googleBtnText = document[_0x1dd93d(0x198)](_0x1dd93d(0x186));
    if (!googleLoginBtn || !googleBtnText) {
        console[_0x1dd93d(0x1b6)](_0x1dd93d(0x1a0));
        return;
    }
    await initializeCSRFToken();
    const _0x107586 = new URLSearchParams(window['location'][_0x1dd93d(0x189)]);
    if (_0x107586[_0x1dd93d(0x194)]('logout')) {
        console['log'](_0x1dd93d(0x18c));
        try {
            const _0x4d96cd = await fetch(window[_0x1dd93d(0x1aa)] + _0x1dd93d(0x1ab), {
                'method': _0x1dd93d(0x19e),
                'credentials': _0x1dd93d(0x17a)
            });
            console['log'](_0x1dd93d(0x17b)), sessionStorage[_0x1dd93d(0x182)](), localStorage['removeItem'](_0x1dd93d(0x1a9));
        } catch (_0x26fc63) {
            console[_0x1dd93d(0x178)](_0x1dd93d(0x17d), _0x26fc63);
        }
        window[_0x1dd93d(0x1a6)]['replaceState']({}, document[_0x1dd93d(0x17e)], _0x1dd93d(0x1b9));
    }
    try {
        const _0x31b093 = await fetch(window[_0x1dd93d(0x1aa)] + _0x1dd93d(0x19d), {
            'method': 'GET',
            'credentials': _0x1dd93d(0x17a)
        });
        if (_0x31b093['ok']) {
            const _0x168a7a = await _0x31b093[_0x1dd93d(0x18d)]();
            _0x168a7a['authenticated'] && _0x168a7a[_0x1dd93d(0x1a9)] && (console[_0x1dd93d(0x1a1)](_0x1dd93d(0x1bb)), !_0x107586['has'](_0x1dd93d(0x1a5)) ? (console[_0x1dd93d(0x1a1)](_0x1dd93d(0x18a)), window['location'][_0x1dd93d(0x19a)] = _0x1dd93d(0x1b3)) : console[_0x1dd93d(0x1a1)]('Test\x20mode:\x20Auto-redirect\x20disabled.\x20User\x20can\x20test\x20login\x20page.'));
        }
    } catch (_0x5a898e) {
        console[_0x1dd93d(0x178)](_0x1dd93d(0x19b), _0x5a898e);
    }
    setupEventListeners();
}
function getCSRFToken() {
    const _0x18d322 = _0xe8b8, _0x1fc761 = document[_0x18d322(0x19f)](_0x18d322(0x1b7));
    return _0x1fc761 && _0x1fc761['content'] && _0x1fc761[_0x18d322(0x199)][_0x18d322(0x191)] >= 0x20 ? _0x1fc761[_0x18d322(0x199)] : null;
}
function disableButtonWithCountdown(_0x22383c, _0x1d21b0 = 0x3) {
    const _0x3fee8a = _0xe8b8;
    _0x22383c[_0x3fee8a(0x1b2)] = !![];
    let _0x34f956 = _0x1d21b0;
    const _0x1fc1f7 = _0x22383c[_0x3fee8a(0x19f)](_0x3fee8a(0x196))['textContent'], _0x3f9265 = setInterval(() => {
            const _0x5126a4 = _0x3fee8a;
            _0x22383c['querySelector'](_0x5126a4(0x196))[_0x5126a4(0x187)] = _0x5126a4(0x18b) + _0x34f956 + 's', _0x34f956--, _0x34f956 < 0x0 && (clearInterval(_0x3f9265), _0x22383c['disabled'] = ![], _0x22383c[_0x5126a4(0x19f)](_0x5126a4(0x196))[_0x5126a4(0x187)] = _0x1fc1f7);
        }, 0x3e8);
}
function setupEventListeners() {
    if (!googleLoginBtn)
        return;
    googleLoginBtn['addEventListener']('click', handleGoogleLogin);
}
async function handleGoogleLogin() {
    const _0x367aba = _0xe8b8;
    try {
        googleBtnText['textContent'] = _0x367aba(0x185), googleLoginBtn['disabled'] = !![];
        const _0x38c08b = await fetch(window['API_BASE_URL'] + _0x367aba(0x1ac), {
            'method': _0x367aba(0x180),
            'credentials': _0x367aba(0x17a)
        });
        if (!_0x38c08b['ok'])
            throw new Error(_0x367aba(0x1ba) + _0x38c08b[_0x367aba(0x184)]);
        const _0x3271f9 = await _0x38c08b[_0x367aba(0x18d)]();
        if (_0x3271f9[_0x367aba(0x183)])
            window['location'][_0x367aba(0x19a)] = _0x3271f9['auth_url'];
        else
            throw new Error(_0x367aba(0x188));
    } catch (_0x557fc5) {
        console[_0x367aba(0x1b6)](_0x367aba(0x17f), _0x557fc5), alert(_0x367aba(0x190)), googleBtnText[_0x367aba(0x187)] = 'Continue\x20with\x20Google', disableButtonWithCountdown(googleLoginBtn, 0x3);
    }
}
async function secureFetch(_0x36dd3c, _0x57b17c = {}) {
    const _0x406494 = _0xe8b8, _0x5d73e2 = {};
    if (_0x57b17c[_0x406494(0x197)] && [
            _0x406494(0x19e),
            'PUT',
            _0x406494(0x195),
            _0x406494(0x19c)
        ][_0x406494(0x193)](_0x57b17c[_0x406494(0x197)]['toUpperCase']())) {
        const _0x3752dc = getCSRFToken();
        if (!_0x3752dc)
            throw new Error('CSRF\x20token\x20unavailable');
        _0x5d73e2['X-CSRF-Token'] = _0x3752dc;
    }
    return fetch(_0x36dd3c, {
        ..._0x57b17c,
        'credentials': _0x406494(0x17a),
        'headers': {
            ..._0x5d73e2,
            ..._0x57b17c[_0x406494(0x1a8)]
        }
    });
}
window[_0x1a501d(0x1b4)]['protocol'] === _0x1a501d(0x1b1) && ![
    _0x1a501d(0x177),
    '127.0.0.1'
]['includes'](window[_0x1a501d(0x1b4)][_0x1a501d(0x1a2)]) && console[_0x1a501d(0x178)](_0x1a501d(0x1a7));
function _0xe8b8(_0x30e128, _0x49ed58) {
    _0x30e128 = _0x30e128 - 0x176;
    const _0x30050b = _0x3005();
    let _0xe8b8d = _0x30050b[_0x30e128];
    return _0xe8b8d;
}
document[_0x1a501d(0x18e)](_0x1a501d(0x179), setupLoginPage);