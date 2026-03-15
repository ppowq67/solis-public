const _0x329a0d = _0x2541;
(function (_0x2c9b87, _0x4f0a94) {
    const _0x4023da = _0x2541, _0x555d95 = _0x2c9b87();
    while (!![]) {
        try {
            const _0x108121 = -parseInt(_0x4023da(0x1a9)) / 0x1 * (-parseInt(_0x4023da(0x19c)) / 0x2) + parseInt(_0x4023da(0x1b3)) / 0x3 * (parseInt(_0x4023da(0x1a5)) / 0x4) + -parseInt(_0x4023da(0x178)) / 0x5 + -parseInt(_0x4023da(0x184)) / 0x6 * (-parseInt(_0x4023da(0x16a)) / 0x7) + parseInt(_0x4023da(0x1b7)) / 0x8 + parseInt(_0x4023da(0x18f)) / 0x9 + -parseInt(_0x4023da(0x17c)) / 0xa;
            if (_0x108121 === _0x4f0a94)
                break;
            else
                _0x555d95['push'](_0x555d95['shift']());
        } catch (_0x594679) {
            _0x555d95['push'](_0x555d95['shift']());
        }
    }
}(_0x1ffc, 0xeac55));
const _0x16d04a = (function () {
        let _0x3cfd35 = !![];
        return function (_0x228520, _0x458601) {
            const _0x51b477 = _0x3cfd35 ? function () {
                const _0x49e91f = _0x2541;
                if (_0x458601) {
                    const _0x2b4bcb = _0x458601[_0x49e91f(0x19d)](_0x228520, arguments);
                    return _0x458601 = null, _0x2b4bcb;
                }
            } : function () {
            };
            return _0x3cfd35 = ![], _0x51b477;
        };
    }()), _0x5549bd = _0x16d04a(this, function () {
        const _0x6f5a20 = _0x2541, _0x441c0c = function () {
                const _0x4b933d = _0x2541;
                let _0x1b5d2f;
                try {
                    _0x1b5d2f = Function(_0x4b933d(0x179) + _0x4b933d(0x177) + ');')();
                } catch (_0x1f883b) {
                    _0x1b5d2f = window;
                }
                return _0x1b5d2f;
            }, _0xf94861 = _0x441c0c(), _0x1c1943 = _0xf94861['console'] = _0xf94861[_0x6f5a20(0x17e)] || {}, _0x463367 = [
                _0x6f5a20(0x171),
                _0x6f5a20(0x1af),
                _0x6f5a20(0x170),
                _0x6f5a20(0x186),
                _0x6f5a20(0x175),
                _0x6f5a20(0x194),
                _0x6f5a20(0x187)
            ];
        for (let _0x1ddf70 = 0x0; _0x1ddf70 < _0x463367[_0x6f5a20(0x183)]; _0x1ddf70++) {
            const _0x2fb62a = _0x16d04a[_0x6f5a20(0x1ba)][_0x6f5a20(0x1a2)]['bind'](_0x16d04a), _0xd08612 = _0x463367[_0x1ddf70], _0x2896e8 = _0x1c1943[_0xd08612] || _0x2fb62a;
            _0x2fb62a[_0x6f5a20(0x1ab)] = _0x16d04a[_0x6f5a20(0x1a6)](_0x16d04a), _0x2fb62a['toString'] = _0x2896e8[_0x6f5a20(0x18b)][_0x6f5a20(0x1a6)](_0x2896e8), _0x1c1943[_0xd08612] = _0x2fb62a;
        }
    });
_0x5549bd();
const _0x3be75a = _0x329a0d(0x1b8);
async function _0x2ea2db() {
    const _0x425dce = _0x329a0d;
    try {
        const _0x23215c = await fetch(window[_0x425dce(0x1b0)] + _0x425dce(0x169), {
            'method': 'GET',
            'credentials': _0x425dce(0x181)
        });
        if (_0x23215c['ok']) {
            const _0x4865cf = await _0x23215c[_0x425dce(0x18c)]();
            if (_0x4865cf[_0x425dce(0x190)]) {
                const _0x1f3e5f = document[_0x425dce(0x1b1)]('meta[name=\x22csrf-token\x22]');
                _0x1f3e5f && (_0x1f3e5f[_0x425dce(0x192)](_0x425dce(0x17d), _0x4865cf[_0x425dce(0x190)]), console['log'](_0x425dce(0x18e)));
            }
        } else
            console[_0x425dce(0x1af)](_0x425dce(0x196));
    } catch (_0x2bde2d) {
        console[_0x425dce(0x1af)](_0x425dce(0x1a7), _0x2bde2d);
    }
}
function _0x3617cd() {
    const _0x44c406 = _0x329a0d, _0x41dc84 = document[_0x44c406(0x1b1)](_0x44c406(0x1bb));
    if (_0x41dc84 && _0x41dc84['content'] && _0x41dc84[_0x44c406(0x17d)][_0x44c406(0x183)] >= 0x20)
        return _0x41dc84[_0x44c406(0x17d)];
    return null;
}
async function _0x200de9(_0x581762, _0x5a67ff = {}) {
    const _0x5a521f = _0x329a0d, _0x412163 = {};
    if (_0x5a67ff[_0x5a521f(0x168)] && [
            'POST',
            'PUT',
            'DELETE',
            'PATCH'
        ]['includes'](_0x5a67ff['method'][_0x5a521f(0x1b4)]())) {
        const _0x114405 = _0x3617cd();
        if (!_0x114405)
            throw new Error('CSRF\x20token\x20not\x20available\x20-\x20cannot\x20make\x20state-changing\x20request');
        _0x412163[_0x5a521f(0x16c)] = _0x114405;
    }
    return fetch(_0x581762, {
        ..._0x5a67ff,
        'credentials': _0x5a521f(0x181),
        'headers': {
            ..._0x412163,
            ..._0x5a67ff['headers']
        }
    });
}
window[_0x329a0d(0x195)]['protocol'] === _0x329a0d(0x17b) && window[_0x329a0d(0x195)][_0x329a0d(0x193)] !== 'localhost' && window[_0x329a0d(0x195)][_0x329a0d(0x193)] !== _0x329a0d(0x176) && console[_0x329a0d(0x1af)]('⚠️\x20Warning:\x20Connection\x20is\x20not\x20secure.\x20Use\x20HTTPS\x20in\x20production.');
document[_0x329a0d(0x199)](_0x329a0d(0x19a), _0x2ea2db);
function _0x2541(_0x2f188a, _0x268150) {
    _0x2f188a = _0x2f188a - 0x168;
    const _0x4deb71 = _0x1ffc();
    let _0x135086 = _0x4deb71[_0x2f188a];
    if (_0x2541['JlZvyV'] === undefined) {
        var _0x3f8696 = function (_0x5e6735) {
            const _0x43f2be = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x2584fc = '', _0x2b3826 = '';
            for (let _0x47f3b6 = 0x0, _0x16327b, _0x16d04a, _0x5549bd = 0x0; _0x16d04a = _0x5e6735['charAt'](_0x5549bd++); ~_0x16d04a && (_0x16327b = _0x47f3b6 % 0x4 ? _0x16327b * 0x40 + _0x16d04a : _0x16d04a, _0x47f3b6++ % 0x4) ? _0x2584fc += String['fromCharCode'](0xff & _0x16327b >> (-0x2 * _0x47f3b6 & 0x6)) : 0x0) {
                _0x16d04a = _0x43f2be['indexOf'](_0x16d04a);
            }
            for (let _0x3be75a = 0x0, _0x2ea2db = _0x2584fc['length']; _0x3be75a < _0x2ea2db; _0x3be75a++) {
                _0x2b3826 += '%' + ('00' + _0x2584fc['charCodeAt'](_0x3be75a)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x2b3826);
        };
        _0x2541['ubCFWd'] = _0x3f8696, _0x2541['lwkLln'] = {}, _0x2541['JlZvyV'] = !![];
    }
    const _0x3a62f3 = _0x4deb71[0x0], _0x1ffcc6 = _0x2f188a + _0x3a62f3, _0x25411b = _0x2541['lwkLln'][_0x1ffcc6];
    return !_0x25411b ? (_0x135086 = _0x2541['ubCFWd'](_0x135086), _0x2541['lwkLln'][_0x1ffcc6] = _0x135086) : _0x135086 = _0x25411b, _0x135086;
}
function _0x5f52b9() {
    const _0x3ed2c5 = _0x329a0d, _0x3c03de = sessionStorage[_0x3ed2c5(0x172)](_0x3ed2c5(0x1b9));
    return !_0x3c03de;
}
function _0x2d8fa8() {
    const _0x344dbd = _0x329a0d;
    sessionStorage[_0x344dbd(0x182)](_0x344dbd(0x1b9), _0x344dbd(0x16d));
}
function _0x34a46e(_0x9e7b13) {
    const _0x5e43b6 = _0x329a0d;
    if (!_0x9e7b13 || typeof _0x9e7b13 !== _0x5e43b6(0x1a8))
        throw new Error(_0x5e43b6(0x174));
    const _0x43d3dc = [
            'id',
            _0x5e43b6(0x173),
            'name',
            'role',
            _0x5e43b6(0x1a4),
            _0x5e43b6(0x17f),
            _0x5e43b6(0x16b)
        ], _0x4bd3e2 = {};
    for (const _0x4eaa8f of _0x43d3dc) {
        if (_0x4eaa8f in _0x9e7b13) {
            const _0x3654d8 = _0x9e7b13[_0x4eaa8f];
            (typeof _0x3654d8 === _0x5e43b6(0x18a) || typeof _0x3654d8 === _0x5e43b6(0x1b5)) && (_0x4bd3e2[_0x4eaa8f] = _0x3654d8);
        }
    }
    return _0x4bd3e2;
}
function _0x1ea344() {
    const _0x24516e = _0x329a0d, _0x237135 = sessionStorage[_0x24516e(0x172)]('appVersion');
    _0x237135 && _0x237135 !== _0x3be75a && sessionStorage[_0x24516e(0x182)](_0x24516e(0x19f), _0x24516e(0x16d)), sessionStorage['setItem'](_0x24516e(0x1bc), _0x3be75a);
}
async function _0x18d58d() {
    const _0x2b5c54 = _0x329a0d;
    try {
        const _0x4406bd = window[_0x2b5c54(0x1b0)] + _0x2b5c54(0x188);
        console[_0x2b5c54(0x171)](_0x2b5c54(0x180), _0x4406bd);
        const _0x253021 = await _0x200de9(_0x4406bd, {
            'method': _0x2b5c54(0x198),
            'headers': { 'Content-Type': _0x2b5c54(0x191) }
        });
        console[_0x2b5c54(0x171)](_0x2b5c54(0x1a3), _0x253021[_0x2b5c54(0x197)]);
        const _0x46f472 = await _0x253021[_0x2b5c54(0x18c)]();
        console[_0x2b5c54(0x171)](_0x2b5c54(0x1b2), _0x46f472);
        if (_0x253021['ok']) {
            if (!_0x46f472 || typeof _0x46f472 !== 'object' || !_0x46f472[_0x2b5c54(0x1ac)])
                throw new Error(_0x2b5c54(0x189));
            const _0x258398 = _0x34a46e(_0x46f472['user']);
            sessionStorage[_0x2b5c54(0x182)](_0x2b5c54(0x18d), String(_0x258398['id']));
            const _0x2f3652 = _0x5f52b9();
            _0x2d8fa8(), _0x1ea344(), window[_0x2b5c54(0x1b6)][_0x2b5c54(0x19b)]({}, document[_0x2b5c54(0x1bd)], window[_0x2b5c54(0x195)][_0x2b5c54(0x1a0)]), console[_0x2b5c54(0x171)](_0x2b5c54(0x185), _0x2f3652 ? _0x2b5c54(0x1ae) : 'dashboard');
            const _0x3c4584 = _0x2f3652 ? '/welcome.html' : _0x2b5c54(0x16f);
            setTimeout(() => {
                const _0x4a80cc = _0x2b5c54;
                window[_0x4a80cc(0x195)][_0x4a80cc(0x19e)] = _0x3c4584;
            }, 0x64);
        } else
            console[_0x2b5c54(0x171)](_0x2b5c54(0x17a) + _0x253021['status'] + '),\x20redirecting\x20to\x20login'), console[_0x2b5c54(0x171)](_0x2b5c54(0x16e), _0x46f472), setTimeout(() => {
                const _0x3281f4 = _0x2b5c54;
                window[_0x3281f4(0x195)]['href'] = _0x3281f4(0x1a1);
            }, 0x64);
    } catch (_0x221731) {
        console[_0x2b5c54(0x186)](_0x2b5c54(0x1aa), _0x221731[_0x2b5c54(0x1ad)], _0x221731), setTimeout(() => {
            const _0x292835 = _0x2b5c54;
            window[_0x292835(0x195)]['href'] = _0x292835(0x1a1);
        }, 0x64);
    }
}
setTimeout(() => {
    _0x18d58d();
}, 0x1f4);
function _0x1ffc() {
    const _0x3c91fa = [
        'mZu3mtm0mZbLCKLUC1q',
        'y29UDgvUDa',
        'y29UC29Szq',
        'CgXHBG',
        '8j+uJsbwzxjPzNLPBMCGC2vZC2LVBIbHDdO',
        'Aw5JBhvKzq',
        'C2v0sxrLBq',
        'BgvUz3rO',
        'mtaWmJzby0v0rui',
        '4PYfifnLC3nPB24GDMvYAwzPzwqSihjLzgLYzwn0Aw5NihrVoG',
        'zxjYB3i',
        'DhjHy2u',
        'l2f1DgGVDMvYAwz5',
        'sw52ywXPzcbbueKGCMvZCg9UC2uGzM9YBwf0',
        'C3rYAw5N',
        'Dg9tDhjPBMC',
        'ANnVBG',
        'DxnLCKLK',
        'w09lxsbdu1jgihrVA2vUigLUAxrPywXPEMvK',
        'mtCYmZmYotLHEuXdrLy',
        'Dg9Rzw4',
        'yxbWBgLJyxrPB24VANnVBG',
        'C2v0qxr0CMLIDxrL',
        'Ag9ZDg5HBwu',
        'DgfIBgu',
        'Bg9JyxrPB24',
        'w1DbuK5jtKDDiezHAwXLzcb0BYbMzxrJAcbdu1jgihrVA2vU',
        'C3rHDhvZ',
        'r0vu',
        'ywrKrxzLBNrmAxn0zw5LCG',
        're9nq29UDgvUDeXVywrLza',
        'CMvWBgfJzvn0yxrL',
        'nJa4mNLtEg1Sqq',
        'yxbWBhK',
        'AhjLzG',
        'C2HVD1zLCNnPB25vCgrHDgu',
        'Cgf0Ag5HBwu',
        'l2XVz2LUlMH0BwW',
        'ChjVDg90ExbL',
        '8j+tOsbwzxjPzNKGCMvZCg9UC2uGC3rHDhvZoG',
        'CgLJDhvYzq',
        'mti3nZe3nNLsDhHjEa',
        'yMLUza',
        'w1DbuK5jtKDDientuKyGDg9Rzw4GzMv0y2GGzxjYB3i6',
        'B2jQzwn0',
        'mtCXBhboEKfY',
        '4P2mievYCM9Yigr1CMLUzYb2zxjPzMLJyxrPB246',
        'x19WCM90B19F',
        'DxnLCG',
        'BwvZC2fNzq',
        'D2vSy29Tzq',
        'D2fYBG',
        'qvbjx0jbu0vFvvjm',
        'CxvLCNLtzwXLy3rVCG',
        '8j+tHcbwzxjPzNKGCMvZCg9UC2uGzgf0ytO',
        'ou5cCxnNBW',
        'Dg9vChbLCKnHC2u',
        'BNvTyMvY',
        'AgLZDg9YEq',
        'nJe4mduZnMDmzM9jzW',
        'ms4WlJa',
        'C29SAxnFDMLZAxrLza',
        'y29UC3rYDwn0B3i',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'yxbWvMvYC2LVBG',
        'DgL0Bgu',
        'Bwv0Ag9K',
        'l2f1DgGVy3nYzI10B2TLBG',
        'mJe0ou9qEfLuDW',
        'yxv0Af9WCM92AwrLCG',
        'wc1du1jglvrVA2vU',
        'Dhj1zq',
        'uMvZCg9UC2u6',
        'l2rHC2HIB2fYzc5ODg1S',
        'Aw5MBW',
        'Bg9N',
        'z2v0sxrLBq',
        'zw1HAwW',
        'sw52ywXPzcb1C2vYig9IAMvJDa',
        'zxHJzxb0Aw9U',
        'mti3lJaUmc4X',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'nZi2ntiWEu5IAwns',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        '4P2mifnLC3nPB24GAw52ywXPzcaOC3rHDhvZia',
        'Ahr0CdO'
    ];
    _0x1ffc = function () {
        return _0x3c91fa;
    };
    return _0x1ffc();
}