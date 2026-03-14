(function (_0x452184, _0x3e80cf) {
    const _0x4b3f59 = _0x4767, _0x413736 = _0x452184();
    while (!![]) {
        try {
            const _0x1b5bd7 = -parseInt(_0x4b3f59(0x1c5)) / 0x1 + -parseInt(_0x4b3f59(0x1d0)) / 0x2 + parseInt(_0x4b3f59(0x1ce)) / 0x3 * (-parseInt(_0x4b3f59(0x1cc)) / 0x4) + parseInt(_0x4b3f59(0x1bd)) / 0x5 + -parseInt(_0x4b3f59(0x1c2)) / 0x6 + parseInt(_0x4b3f59(0x1c6)) / 0x7 + parseInt(_0x4b3f59(0x1bc)) / 0x8;
            if (_0x1b5bd7 === _0x3e80cf)
                break;
            else
                _0x413736['push'](_0x413736['shift']());
        } catch (_0x26ea50) {
            _0x413736['push'](_0x413736['shift']());
        }
    }
}(_0x57de, 0x27633), (function () {
    const _0x385707 = _0x4767, _0x4424f5 = '5500', _0x127879 = '127.0.0.1', _0x3e81b2 = document[_0x385707(0x1c7)](_0x385707(0x1c8));
    let _0x569059 = ![];
    const _0x126d27 = _0x385707(0x1d1) + _0x127879 + ':' + _0x4424f5 + '/socket.io/socket.io.js';
    _0x3e81b2[_0x385707(0x1c1)] = _0x126d27, _0x3e81b2[_0x385707(0x1ca)] = () => {
        const _0x5b6624 = _0x385707;
        _0x569059 = !![], console[_0x5b6624(0x1bf)]('✅\x20Socket.IO\x20loaded\x20from\x20backend');
    }, _0x3e81b2['onerror'] = () => {
        const _0x1cdb98 = _0x385707;
        if (!_0x569059) {
            console[_0x1cdb98(0x1cf)](_0x1cdb98(0x1c9));
            const _0x2db09f = document[_0x1cdb98(0x1c7)](_0x1cdb98(0x1c8));
            _0x2db09f['src'] = _0x1cdb98(0x1c3), _0x2db09f['onload'] = () => {
                const _0x49b958 = _0x1cdb98;
                _0x569059 = !![], console[_0x49b958(0x1bf)](_0x49b958(0x1c0));
            }, _0x2db09f[_0x1cdb98(0x1cb)] = () => {
                const _0x14bdca = _0x1cdb98;
                console[_0x14bdca(0x1c4)]('❌\x20Failed\x20to\x20load\x20Socket.IO\x20from\x20both\x20backend\x20and\x20CDN');
            }, document[_0x1cdb98(0x1be)][_0x1cdb98(0x1bb)](_0x2db09f);
        }
    }, document[_0x385707(0x1be)]['appendChild'](_0x3e81b2), setTimeout(() => {
        const _0x3c8e8d = _0x385707;
        if (!_0x569059 && typeof io === 'undefined') {
            console[_0x3c8e8d(0x1cf)](_0x3c8e8d(0x1cd));
            const _0x86e05a = document[_0x3c8e8d(0x1c7)](_0x3c8e8d(0x1c8));
            _0x86e05a['src'] = _0x3c8e8d(0x1c3), _0x86e05a[_0x3c8e8d(0x1ca)] = () => {
                const _0x9421b = _0x3c8e8d;
                _0x569059 = !![], console[_0x9421b(0x1bf)]('✅\x20Socket.IO\x20loaded\x20from\x20CDN\x20(timeout\x20fallback)');
            }, document[_0x3c8e8d(0x1be)][_0x3c8e8d(0x1bb)](_0x86e05a);
        }
    }, 0xbb8);
}()));
function _0x4767(_0x829ddd, _0x557b11) {
    _0x829ddd = _0x829ddd - 0x1bb;
    const _0x57dea9 = _0x57de();
    let _0x476732 = _0x57dea9[_0x829ddd];
    return _0x476732;
}
function _0x57de() {
    const _0x5b7a7b = [
        'script',
        '⚠️\x20Socket.IO\x20failed\x20to\x20load\x20from\x20backend,\x20falling\x20back\x20to\x20CDN...',
        'onload',
        'onerror',
        '4PzdKes',
        '⚠️\x20Socket.IO\x20still\x20not\x20loaded,\x20forcing\x20CDN\x20fallback...',
        '81705Dysfwz',
        'warn',
        '470046gBwknB',
        'http://',
        'appendChild',
        '2612960vIjvsu',
        '1090820GWCBpo',
        'head',
        'log',
        '✅\x20Socket.IO\x20loaded\x20from\x20CDN',
        'src',
        '1794198pYutPf',
        'https://cdn.socket.io/4.7.2/socket.io.min.js',
        'error',
        '121418FIopfa',
        '2094792aEIhtQ',
        'createElement'
    ];
    _0x57de = function () {
        return _0x5b7a7b;
    };
    return _0x57de();
}