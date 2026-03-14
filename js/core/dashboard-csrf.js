function _0x3a55(_0xafd1cc, _0x4683c5) {
    _0xafd1cc = _0xafd1cc - 0x1c4;
    const _0x253820 = _0x2538();
    let _0x3a550f = _0x253820[_0xafd1cc];
    return _0x3a550f;
}
const _0x16102c = _0x3a55;
function _0x2538() {
    const _0x31a592 = [
        'json',
        'log',
        '5QGreyk',
        'localhost',
        'error',
        '249784QbreQk',
        '4079oIYqBq',
        'method',
        'GET',
        'setAttribute',
        'DELETE',
        '1707978CnlkKj',
        '4783360VMftlx',
        'token',
        'POST',
        'querySelector',
        'content',
        '⚠️\x20Warning:\x20Connection\x20is\x20not\x20secure.\x20Use\x20HTTPS\x20in\x20production.',
        'Error\x20initializing\x20CSRF\x20token:',
        'location',
        'status',
        'PUT',
        'protocol',
        '78974VlrODN',
        'length',
        '767701DrdzDl',
        'warn',
        'toUpperCase',
        '60MApJhq',
        '206eljrQf',
        '4422344aWKLfB',
        'CSRF\x20token\x20not\x20available\x20-\x20cannot\x20make\x20state-changing\x20request',
        'meta[name=\x22csrf-token\x22]',
        '9QaytdM',
        '127.0.0.1',
        'PATCH',
        '/api/auth/csrf-token',
        'headers',
        '150VTByWM',
        'include'
    ];
    _0x2538 = function () {
        return _0x31a592;
    };
    return _0x2538();
}
(function (_0x3d05bc, _0x377867) {
    const _0x1456d6 = _0x3a55, _0x55fc5b = _0x3d05bc();
    while (!![]) {
        try {
            const _0x3396f6 = -parseInt(_0x1456d6(0x1e1)) / 0x1 * (-parseInt(_0x1456d6(0x1d0)) / 0x2) + -parseInt(_0x1456d6(0x1e6)) / 0x3 + parseInt(_0x1456d6(0x1e0)) / 0x4 * (parseInt(_0x1456d6(0x1dd)) / 0x5) + parseInt(_0x1456d6(0x1d9)) / 0x6 * (-parseInt(_0x1456d6(0x1ca)) / 0x7) + -parseInt(_0x1456d6(0x1d1)) / 0x8 * (-parseInt(_0x1456d6(0x1d4)) / 0x9) + parseInt(_0x1456d6(0x1e7)) / 0xa + -parseInt(_0x1456d6(0x1cc)) / 0xb * (parseInt(_0x1456d6(0x1cf)) / 0xc);
            if (_0x3396f6 === _0x377867)
                break;
            else
                _0x55fc5b['push'](_0x55fc5b['shift']());
        } catch (_0x1cad7c) {
            _0x55fc5b['push'](_0x55fc5b['shift']());
        }
    }
}(_0x2538, 0x4c825), async function initializeCsrfToken() {
    const _0x3d5afc = _0x3a55;
    try {
        const _0x4225d4 = await fetch(_0x3d5afc(0x1d7), {
            'method': _0x3d5afc(0x1e3),
            'credentials': _0x3d5afc(0x1da)
        });
        if (_0x4225d4['ok']) {
            const _0x2e8c54 = await _0x4225d4[_0x3d5afc(0x1db)]();
            _0x2e8c54[_0x3d5afc(0x1e8)] && typeof _0x2e8c54[_0x3d5afc(0x1e8)] === 'string' && _0x2e8c54[_0x3d5afc(0x1e8)]['length'] >= 0x20 && (document[_0x3d5afc(0x1ea)](_0x3d5afc(0x1d3))[_0x3d5afc(0x1e4)](_0x3d5afc(0x1eb), _0x2e8c54['token']), console[_0x3d5afc(0x1dc)]('✅\x20CSRF\x20token\x20initialized'));
        } else
            console[_0x3d5afc(0x1cd)]('Failed\x20to\x20fetch\x20CSRF\x20token:', _0x4225d4[_0x3d5afc(0x1c7)]);
    } catch (_0x44f1a8) {
        console[_0x3d5afc(0x1df)](_0x3d5afc(0x1c5), _0x44f1a8);
    }
}());
function getCSRFToken() {
    const _0x563822 = _0x3a55, _0x560815 = document[_0x563822(0x1ea)]('meta[name=\x22csrf-token\x22]');
    if (_0x560815 && _0x560815[_0x563822(0x1eb)] && _0x560815[_0x563822(0x1eb)][_0x563822(0x1cb)] >= 0x20)
        return _0x560815[_0x563822(0x1eb)];
    return null;
}
async function secureFetch(_0x16ca99, _0x2203d2 = {}) {
    const _0x2e462b = _0x3a55, _0x2ef755 = {};
    if (_0x2203d2[_0x2e462b(0x1e2)] && [
            _0x2e462b(0x1e9),
            _0x2e462b(0x1c8),
            _0x2e462b(0x1e5),
            _0x2e462b(0x1d6)
        ]['includes'](_0x2203d2[_0x2e462b(0x1e2)][_0x2e462b(0x1ce)]())) {
        const _0x28ecf6 = getCSRFToken();
        if (!_0x28ecf6)
            throw new Error(_0x2e462b(0x1d2));
        _0x2ef755['X-CSRF-Token'] = _0x28ecf6;
    }
    return fetch(_0x16ca99, {
        ..._0x2203d2,
        'credentials': _0x2e462b(0x1da),
        'headers': {
            ..._0x2ef755,
            ..._0x2203d2[_0x2e462b(0x1d8)]
        }
    });
}
window['location'][_0x16102c(0x1c9)] === 'http:' && window[_0x16102c(0x1c6)]['hostname'] !== _0x16102c(0x1de) && window['location']['hostname'] !== _0x16102c(0x1d5) && console[_0x16102c(0x1cd)](_0x16102c(0x1c4));