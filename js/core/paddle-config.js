const _0xee45fe = _0x5337;
(function (_0x3e4006, _0x3aec31) {
    const _0x183529 = _0x5337, _0x3208d3 = _0x3e4006();
    while (!![]) {
        try {
            const _0xf7b358 = -parseInt(_0x183529(0xd0)) / 0x1 + parseInt(_0x183529(0xc9)) / 0x2 * (parseInt(_0x183529(0xf8)) / 0x3) + -parseInt(_0x183529(0xc7)) / 0x4 + parseInt(_0x183529(0xe0)) / 0x5 + parseInt(_0x183529(0xe4)) / 0x6 + parseInt(_0x183529(0xdd)) / 0x7 + -parseInt(_0x183529(0xf0)) / 0x8 * (parseInt(_0x183529(0xcc)) / 0x9);
            if (_0xf7b358 === _0x3aec31)
                break;
            else
                _0x3208d3['push'](_0x3208d3['shift']());
        } catch (_0x8a677a) {
            _0x3208d3['push'](_0x3208d3['shift']());
        }
    }
}(_0x20ac, 0xf0043));
class PaddleManager {
    constructor() {
        const _0x68e194 = _0x5337;
        this[_0x68e194(0xf6)] = ![], this[_0x68e194(0xf5)] = null, this[_0x68e194(0xe1)] = null, this[_0x68e194(0xe9)] = null;
    }
    async [_0xee45fe(0xe2)]() {
        const _0x41a3c9 = _0xee45fe;
        try {
            const _0x1123e1 = await fetch(window[_0x41a3c9(0xf9)] + _0x41a3c9(0xf3), {
                'method': _0x41a3c9(0xee),
                'credentials': _0x41a3c9(0xfa),
                'headers': { 'Content-Type': _0x41a3c9(0xd3) }
            });
            if (!_0x1123e1['ok'])
                return console[_0x41a3c9(0xde)](_0x41a3c9(0xdf)), ![];
            const _0x5a1ff4 = await _0x1123e1[_0x41a3c9(0xc5)]();
            if (!_0x5a1ff4[_0x41a3c9(0xe1)] || !_0x5a1ff4[_0x41a3c9(0xe9)])
                return console[_0x41a3c9(0xde)](_0x41a3c9(0xd7)), ![];
            return this['environment'] = _0x5a1ff4['environment'], this[_0x41a3c9(0xe9)] = _0x5a1ff4['clientToken'], this[_0x41a3c9(0xe1)] === 'production' && Object[_0x41a3c9(0xe3)](this), console['log'](_0x41a3c9(0xd5), this[_0x41a3c9(0xe1)]), !![];
        } catch (_0x19acdb) {
            return console[_0x41a3c9(0xde)](_0x41a3c9(0xca), _0x19acdb), ![];
        }
    }
    async [_0xee45fe(0xcf)]() {
        const _0x4bf14f = _0xee45fe;
        if (this[_0x4bf14f(0xf6)])
            return !![];
        const _0x206fbe = await this[_0x4bf14f(0xe2)]();
        if (!_0x206fbe)
            return console[_0x4bf14f(0xde)](_0x4bf14f(0xe6)), ![];
        let _0x4e34b6 = 0x0;
        while (typeof Paddle === _0x4bf14f(0xcb) && _0x4e34b6 < 0xa) {
            await new Promise(_0x132735 => setTimeout(_0x132735, 0x64)), _0x4e34b6++;
        }
        if (typeof Paddle === _0x4bf14f(0xcb))
            return console['error'](_0x4bf14f(0xea)), ![];
        try {
            return Paddle[_0x4bf14f(0xf4)][_0x4bf14f(0xec)](this['environment']), Paddle[_0x4bf14f(0xc8)]({
                'token': this[_0x4bf14f(0xe9)],
                'eventCallback': _0x4a0ecf => this[_0x4bf14f(0xeb)](_0x4a0ecf)
            }), this['paddle'] = Paddle, this[_0x4bf14f(0xf6)] = !![], console[_0x4bf14f(0xd4)](_0x4bf14f(0xcd)), !![];
        } catch (_0x488612) {
            return console['error']('❌\x20Error\x20initializing\x20Paddle:', _0x488612), ![];
        }
    }
    ['_handlePaddleEvent'](_0x14c2a6) {
        const _0xf15571 = _0xee45fe;
        if (_0x14c2a6['name'] === _0xf15571(0xef))
            window['dispatchEvent'](new CustomEvent('paddle:checkoutComplete', { 'detail': _0x14c2a6['data'] }));
        else
            _0x14c2a6[_0xf15571(0xf1)] === _0xf15571(0xdc) && window['dispatchEvent'](new CustomEvent(_0xf15571(0xce), { 'detail': _0x14c2a6['data'] }));
    }
    async [_0xee45fe(0xe8)](_0x28863d, _0x4d3ca3) {
        const _0x293caa = _0xee45fe;
        if (!this['initialized'])
            return console['error'](_0x293caa(0xf7)), ![];
        try {
            const _0x3dcf06 = await this['_verifyPriceId'](_0x28863d, _0x4d3ca3);
            if (!_0x3dcf06)
                return console[_0x293caa(0xde)](_0x293caa(0xdb)), ![];
            return Paddle[_0x293caa(0xf2)]['open']({
                'items': [{
                        'priceId': _0x28863d,
                        'quantity': 0x1
                    }],
                'customer': { 'email': window['currentAuthenticatedUser']?.[_0x293caa(0xed)] || '' }
            }), window['pendingPlanUpgrade'] = _0x4d3ca3, !![];
        } catch (_0x33c331) {
            return console[_0x293caa(0xde)](_0x293caa(0xda), _0x33c331), ![];
        }
    }
    async [_0xee45fe(0xd9)](_0x56d895, _0xc819c5) {
        const _0x5b8414 = _0xee45fe;
        try {
            const _0x393026 = await fetch(window['API_BASE_URL'] + '/payment/verify-price', {
                'method': 'POST',
                'credentials': _0x5b8414(0xfa),
                'headers': {
                    'Content-Type': _0x5b8414(0xd3),
                    'X-CSRF-Token': this[_0x5b8414(0xe5)]()
                },
                'body': JSON[_0x5b8414(0xd8)]({
                    'priceId': _0x56d895,
                    'planName': _0xc819c5
                })
            });
            return _0x393026['ok'];
        } catch (_0x17816a) {
            return console[_0x5b8414(0xde)](_0x5b8414(0xd6), _0x17816a), ![];
        }
    }
    ['_getCsrfToken']() {
        const _0x4b5bc9 = _0xee45fe, _0x4fd5fb = document['querySelector'](_0x4b5bc9(0xc6));
        return _0x4fd5fb ? _0x4fd5fb[_0x4b5bc9(0xe7)](_0x4b5bc9(0xd1)) : '';
    }
}
window[_0xee45fe(0xd2)] = new PaddleManager();
function _0x5337(_0x1c6925, _0x58a502) {
    _0x1c6925 = _0x1c6925 - 0xc5;
    const _0x20aca9 = _0x20ac();
    let _0x533736 = _0x20aca9[_0x1c6925];
    return _0x533736;
}
function _0x20ac() {
    const _0x26d621 = [
        '❌\x20Price\x20verification\x20failed:',
        '❌\x20Invalid\x20Paddle\x20config\x20from\x20server',
        'stringify',
        '_verifyPriceId',
        '❌\x20Error\x20opening\x20checkout:',
        '❌\x20Invalid\x20price\x20ID',
        'checkout.closed',
        '4660019gcxiHa',
        'error',
        '❌\x20Failed\x20to\x20fetch\x20Paddle\x20configuration',
        '6895230MkQUCV',
        'environment',
        'fetchPaddleConfig',
        'freeze',
        '11448810tnZFTa',
        '_getCsrfToken',
        '❌\x20Cannot\x20initialize\x20Paddle\x20-\x20no\x20valid\x20config',
        'getAttribute',
        'openCheckout',
        'clientToken',
        '❌\x20Paddle\x20SDK\x20failed\x20to\x20load',
        '_handlePaddleEvent',
        'set',
        'email',
        'GET',
        'checkout.completed',
        '10199936NqCeLt',
        'name',
        'Checkout',
        '/payment/paddle-config',
        'Environment',
        'paddle',
        'initialized',
        '❌\x20Paddle\x20not\x20initialized',
        '7053QKMPxW',
        'API_BASE_URL',
        'include',
        'json',
        'meta[name=\x22csrf-token\x22]',
        '1469952RrdpmQ',
        'Initialize',
        '1438bkxsXa',
        '❌\x20Error\x20fetching\x20Paddle\x20config:',
        'undefined',
        '18osifTc',
        '✅\x20Paddle\x20initialized\x20successfully',
        'paddle:checkoutClosed',
        'init',
        '1742688fuaXlB',
        'content',
        'paddleManager',
        'application/json',
        'log',
        '✅\x20Paddle\x20environment:'
    ];
    _0x20ac = function () {
        return _0x26d621;
    };
    return _0x20ac();
}