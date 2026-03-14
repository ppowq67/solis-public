const _0x17f6f7 = _0x26e9;
function _0x26e9(_0x3d5b7c, _0x140b3a) {
    _0x3d5b7c = _0x3d5b7c - 0x1cf;
    const _0x4ca509 = _0x4ca5();
    let _0x26e95f = _0x4ca509[_0x3d5b7c];
    return _0x26e95f;
}
(function (_0x380176, _0x19e754) {
    const _0x3afb40 = _0x26e9, _0x1a34ce = _0x380176();
    while (!![]) {
        try {
            const _0x4f203c = parseInt(_0x3afb40(0x1d2)) / 0x1 + -parseInt(_0x3afb40(0x243)) / 0x2 * (-parseInt(_0x3afb40(0x221)) / 0x3) + parseInt(_0x3afb40(0x21b)) / 0x4 * (parseInt(_0x3afb40(0x204)) / 0x5) + -parseInt(_0x3afb40(0x234)) / 0x6 + parseInt(_0x3afb40(0x257)) / 0x7 * (-parseInt(_0x3afb40(0x24f)) / 0x8) + -parseInt(_0x3afb40(0x207)) / 0x9 + parseInt(_0x3afb40(0x22b)) / 0xa;
            if (_0x4f203c === _0x19e754)
                break;
            else
                _0x1a34ce['push'](_0x1a34ce['shift']());
        } catch (_0x93eeac) {
            _0x1a34ce['push'](_0x1a34ce['shift']());
        }
    }
}(_0x4ca5, 0xdc750));
class BillingPanel {
    constructor() {
        const _0x2c4a0b = _0x26e9;
        this['billingPanel'] = document['getElementById'](_0x2c4a0b(0x22a)), this[_0x2c4a0b(0x256)] = document[_0x2c4a0b(0x24a)](_0x2c4a0b(0x256)), this[_0x2c4a0b(0x1eb)] = document['getElementById']('closeBilling'), this[_0x2c4a0b(0x211)] = document['getElementById'](_0x2c4a0b(0x211)), this[_0x2c4a0b(0x217)] = document[_0x2c4a0b(0x24a)](_0x2c4a0b(0x217)), this[_0x2c4a0b(0x224)]();
    }
    ['init']() {
        const _0x37f9ea = _0x26e9;
        console[_0x37f9ea(0x1fb)](_0x37f9ea(0x21f));
        this['closeBillingBtn'] ? (this[_0x37f9ea(0x1eb)][_0x37f9ea(0x25a)]('click', () => this[_0x37f9ea(0x255)]()), console[_0x37f9ea(0x1fb)]('✅\x20Close\x20button\x20listener\x20attached')) : console[_0x37f9ea(0x233)]('⚠️\x20Close\x20button\x20not\x20found');
        this[_0x37f9ea(0x256)] ? (this['billingBackdrop'][_0x37f9ea(0x25a)]('click', () => this['closeBilling']()), console[_0x37f9ea(0x1fb)]('✅\x20Backdrop\x20listener\x20attached')) : console[_0x37f9ea(0x233)]('⚠️\x20Backdrop\x20not\x20found');
        this['upgradePlanBtn'] ? (this[_0x37f9ea(0x211)][_0x37f9ea(0x25a)]('click', () => this[_0x37f9ea(0x1e1)]()), console[_0x37f9ea(0x1fb)](_0x37f9ea(0x206))) : console['warn']('⚠️\x20Upgrade\x20button\x20not\x20found');
        this[_0x37f9ea(0x217)] ? (this['cancelSubscriptionBtn'][_0x37f9ea(0x25a)](_0x37f9ea(0x1d5), () => this[_0x37f9ea(0x1f5)]()), console[_0x37f9ea(0x1fb)]('✅\x20Cancel\x20button\x20listener\x20attached')) : console[_0x37f9ea(0x233)](_0x37f9ea(0x1da));
        const _0x120e0b = document[_0x37f9ea(0x24a)](_0x37f9ea(0x21d));
        _0x120e0b ? (_0x120e0b[_0x37f9ea(0x25a)]('click', _0x5807eb => {
            const _0x1ac1eb = _0x37f9ea;
            console[_0x1ac1eb(0x1fb)](_0x1ac1eb(0x205)), _0x5807eb[_0x1ac1eb(0x249)](), _0x5807eb[_0x1ac1eb(0x244)](), this[_0x1ac1eb(0x242)]();
        }), console[_0x37f9ea(0x1fb)](_0x37f9ea(0x235))) : (console[_0x37f9ea(0x232)](_0x37f9ea(0x23f)), console[_0x37f9ea(0x232)]('\x20\x20\x20Check\x20that\x20#dropdownBilling\x20exists\x20in\x20dashboard.html')), console[_0x37f9ea(0x1fb)]('✅\x20init()\x20completed');
    }
    async [_0x17f6f7(0x242)]() {
        const _0x1cbcc5 = _0x17f6f7;
        console[_0x1cbcc5(0x1fb)](_0x1cbcc5(0x23e));
        if (!this[_0x1cbcc5(0x22a)] || !this[_0x1cbcc5(0x256)]) {
            console[_0x1cbcc5(0x232)]('❌\x20Billing\x20panel\x20elements\x20not\x20found\x20in\x20DOM'), alert('❌\x20Error:\x20Billing\x20panel\x20not\x20initialized.\x20Please\x20refresh\x20the\x20page.');
            return;
        }
        const _0xbba0a3 = document[_0x1cbcc5(0x24a)](_0x1cbcc5(0x1f4));
        _0xbba0a3 && _0xbba0a3[_0x1cbcc5(0x1f7)]['contains'](_0x1cbcc5(0x227)) && (_0xbba0a3[_0x1cbcc5(0x1f7)][_0x1cbcc5(0x210)](_0x1cbcc5(0x227)), console[_0x1cbcc5(0x1fb)]('✅\x20Closed\x20profile\x20dropdown')), this['billingPanel'][_0x1cbcc5(0x1f7)][_0x1cbcc5(0x1cf)](_0x1cbcc5(0x227)), this[_0x1cbcc5(0x256)][_0x1cbcc5(0x1f7)][_0x1cbcc5(0x1cf)](_0x1cbcc5(0x227)), document[_0x1cbcc5(0x1ed)][_0x1cbcc5(0x1db)][_0x1cbcc5(0x201)] = _0x1cbcc5(0x200), console[_0x1cbcc5(0x1fb)](_0x1cbcc5(0x1dc)), await this['fetchBillingData']();
    }
    [_0x17f6f7(0x255)]() {
        const _0x191591 = _0x17f6f7;
        console['log'](_0x191591(0x23b)), this[_0x191591(0x22a)] && this['billingPanel'][_0x191591(0x1f7)]['remove']('open'), this[_0x191591(0x256)] && this['billingBackdrop'][_0x191591(0x1f7)][_0x191591(0x210)](_0x191591(0x227)), document[_0x191591(0x1ed)][_0x191591(0x1db)][_0x191591(0x201)] = '', console[_0x191591(0x1fb)](_0x191591(0x1f8));
    }
    async [_0x17f6f7(0x228)]() {
        const _0x12ae7b = _0x17f6f7;
        try {
            console[_0x12ae7b(0x1fb)](_0x12ae7b(0x251));
            const _0x17c6ac = document['querySelector'](_0x12ae7b(0x1ff))?.[_0x12ae7b(0x1ea)](_0x12ae7b(0x226));
            console[_0x12ae7b(0x1fb)](_0x12ae7b(0x22e), !!_0x17c6ac);
            const _0x455951 = {
                'Content-Type': _0x12ae7b(0x1e4),
                'Accept': _0x12ae7b(0x1e4)
            };
            _0x17c6ac && (_0x455951[_0x12ae7b(0x254)] = _0x17c6ac);
            console[_0x12ae7b(0x1fb)]('📤\x20Sending\x20request\x20with\x20headers:', Object[_0x12ae7b(0x219)](_0x455951));
            const _0x9a467b = await fetch(_0x12ae7b(0x24b), {
                'method': 'GET',
                'credentials': _0x12ae7b(0x1fe),
                'headers': _0x455951
            });
            console['log']('📥\x20Response\x20status:', _0x9a467b[_0x12ae7b(0x208)], _0x9a467b['statusText']);
            if (!_0x9a467b['ok']) {
                const _0x39820b = await _0x9a467b[_0x12ae7b(0x24c)]();
                console[_0x12ae7b(0x232)]('❌\x20API\x20Error:', _0x9a467b[_0x12ae7b(0x208)], _0x39820b);
                if (_0x9a467b[_0x12ae7b(0x208)] === 0x191) {
                    console[_0x12ae7b(0x232)]('⚠️\x20Unauthorized\x20-\x20Token\x20may\x20be\x20invalid'), alert('⚠️\x20Session\x20expired.\x20Please\x20refresh\x20the\x20page.');
                    return;
                } else
                    _0x9a467b[_0x12ae7b(0x208)] === 0x193 && console[_0x12ae7b(0x232)](_0x12ae7b(0x21e));
                this[_0x12ae7b(0x250)]();
                return;
            }
            const _0x4e297a = await _0x9a467b[_0x12ae7b(0x20b)]();
            console[_0x12ae7b(0x1fb)](_0x12ae7b(0x22d), _0x4e297a);
            if (!_0x4e297a || typeof _0x4e297a !== _0x12ae7b(0x1d7)) {
                console[_0x12ae7b(0x232)]('❌\x20Invalid\x20response\x20structure:', _0x4e297a), this[_0x12ae7b(0x250)]();
                return;
            }
            if (!_0x4e297a[_0x12ae7b(0x218)] || !_0x4e297a[_0x12ae7b(0x208)]) {
                console[_0x12ae7b(0x232)](_0x12ae7b(0x21c), _0x4e297a), this['showDefaultBillingData']();
                return;
            }
            this[_0x12ae7b(0x214)](_0x4e297a);
        } catch (_0x324945) {
            console[_0x12ae7b(0x232)]('❌\x20Network/Fetch\x20Error:', _0x324945[_0x12ae7b(0x1fa)]), console['error'](_0x12ae7b(0x216), _0x324945['stack']), this[_0x12ae7b(0x250)]();
        }
    }
    [_0x17f6f7(0x214)](_0x139069) {
        const _0x580812 = _0x17f6f7;
        console[_0x580812(0x1fb)](_0x580812(0x23a));
        const _0xcee553 = _0x37945b => {
                const _0x42f901 = _0x580812;
                if (typeof _0x37945b !== _0x42f901(0x1ef) && _0x37945b !== null)
                    return '';
                if (!_0x37945b)
                    return '';
                const _0x22a0d3 = document['createElement'](_0x42f901(0x1e8));
                return _0x22a0d3[_0x42f901(0x20e)] = _0x37945b, _0x22a0d3['innerHTML'];
            }, _0x1c96fe = document['getElementById'](_0x580812(0x231));
        if (_0x1c96fe && _0x139069[_0x580812(0x218)]) {
            const _0x38eaf1 = _0xcee553(_0x139069[_0x580812(0x218)]);
            _0x1c96fe[_0x580812(0x20e)] = _0x38eaf1, console[_0x580812(0x1fb)]('✅\x20Plan\x20name\x20set:', _0x38eaf1);
        }
        const _0x9b46dd = document['getElementById']('billingNextDate');
        if (_0x9b46dd) {
            if (_0x139069['nextBillingDate'])
                try {
                    const _0x25a685 = new Date(_0x139069[_0x580812(0x1df)]);
                    isNaN(_0x25a685[_0x580812(0x1f0)]()) ? (console[_0x580812(0x233)](_0x580812(0x202), _0x139069[_0x580812(0x1df)]), _0x9b46dd[_0x580812(0x20e)] = _0x580812(0x1f9)) : (_0x9b46dd['textContent'] = _0x25a685[_0x580812(0x1d9)](_0x580812(0x20f), {
                        'year': 'numeric',
                        'month': _0x580812(0x252),
                        'day': _0x580812(0x1f2)
                    }), console[_0x580812(0x1fb)](_0x580812(0x1e3), _0x9b46dd[_0x580812(0x20e)]));
                } catch (_0x1a5092) {
                    console[_0x580812(0x232)](_0x580812(0x1d6), _0x1a5092), _0x9b46dd[_0x580812(0x20e)] = 'No\x20active\x20subscription';
                }
            else
                _0x9b46dd[_0x580812(0x20e)] = 'No\x20active\x20subscription';
        }
        const _0x25a6d0 = document[_0x580812(0x24a)](_0x580812(0x237));
        if (_0x25a6d0 && _0x139069['status']) {
            const _0x5c7be9 = [
                    _0x580812(0x25c),
                    _0x580812(0x229),
                    'cancelled'
                ], _0x2bc2a4 = _0xcee553(_0x139069[_0x580812(0x208)])[_0x580812(0x259)]();
            !_0x5c7be9['includes'](_0x2bc2a4) && console[_0x580812(0x233)](_0x580812(0x246), _0x139069[_0x580812(0x208)]), _0x25a6d0[_0x580812(0x20e)] = _0x2bc2a4['charAt'](0x0)[_0x580812(0x247)]() + _0x2bc2a4[_0x580812(0x1d4)](0x1), _0x25a6d0[_0x580812(0x1f7)]['remove']('active', _0x580812(0x229), _0x580812(0x1fc)), _0x25a6d0[_0x580812(0x1f7)][_0x580812(0x1cf)](_0x2bc2a4), console['log']('✅\x20Status\x20badge\x20set:', _0x2bc2a4);
        }
        const _0x41c0e9 = document[_0x580812(0x24a)](_0x580812(0x225));
        if (_0x41c0e9 && _0x139069[_0x580812(0x1e7)])
            try {
                const _0x225757 = parseFloat(_0x139069[_0x580812(0x1e7)]);
                !isNaN(_0x225757) && (_0x41c0e9[_0x580812(0x20e)] = '$' + _0x225757[_0x580812(0x236)](0x2) + '/month', console['log'](_0x580812(0x223), _0x41c0e9['textContent']));
            } catch (_0x593d23) {
                console[_0x580812(0x233)]('⚠️\x20Price\x20parsing\x20error:', _0x593d23);
            }
        const _0x358c08 = document[_0x580812(0x24a)]('paymentMethod');
        if (_0x358c08 && _0x139069[_0x580812(0x1e9)]) {
            const _0x59ce75 = _0xcee553(_0x139069[_0x580812(0x1e9)]);
            _0x358c08['textContent'] = _0x59ce75, console[_0x580812(0x1fb)](_0x580812(0x20a), _0x59ce75);
        }
        const _0x40b111 = !_0x139069['currentPlan'] || _0x139069[_0x580812(0x24d)] === 'free', _0x5d0fad = _0x139069[_0x580812(0x208)] === _0x580812(0x25c);
        this[_0x580812(0x211)] && (this[_0x580812(0x211)][_0x580812(0x1db)][_0x580812(0x215)] = _0x40b111 ? _0x580812(0x248) : _0x580812(0x1ee), console[_0x580812(0x1fb)](_0x580812(0x1de), _0x40b111)), this[_0x580812(0x217)] && (this[_0x580812(0x217)][_0x580812(0x1db)][_0x580812(0x215)] = _0x5d0fad && !_0x40b111 ? _0x580812(0x248) : _0x580812(0x1ee), console['log']('✅\x20Cancel\x20button\x20visibility:', _0x5d0fad && !_0x40b111)), console['log']('✅\x20All\x20data\x20populated\x20successfully');
    }
    [_0x17f6f7(0x250)]() {
        const _0x1ba44c = _0x17f6f7, _0xfdaaeb = document[_0x1ba44c(0x24a)]('billingCurrentPlan'), _0x1d4c34 = document[_0x1ba44c(0x24a)](_0x1ba44c(0x1e2)), _0x2102c1 = document[_0x1ba44c(0x24a)]('billingStatus');
        if (_0xfdaaeb)
            _0xfdaaeb[_0x1ba44c(0x20e)] = _0x1ba44c(0x240);
        if (_0x1d4c34)
            _0x1d4c34[_0x1ba44c(0x20e)] = _0x1ba44c(0x220);
        _0x2102c1 && (_0x2102c1[_0x1ba44c(0x20e)] = _0x1ba44c(0x1e0), _0x2102c1[_0x1ba44c(0x1f7)][_0x1ba44c(0x1cf)](_0x1ba44c(0x229)));
        if (this[_0x1ba44c(0x211)])
            this[_0x1ba44c(0x211)][_0x1ba44c(0x1db)][_0x1ba44c(0x215)] = 'flex';
        if (this[_0x1ba44c(0x217)])
            this[_0x1ba44c(0x217)][_0x1ba44c(0x1db)][_0x1ba44c(0x215)] = _0x1ba44c(0x1ee);
    }
    [_0x17f6f7(0x1e1)]() {
        const _0x1d6941 = _0x17f6f7;
        console['log'](_0x1d6941(0x1e6)), window[_0x1d6941(0x22f)][_0x1d6941(0x23c)] = _0x1d6941(0x20c);
    }
    [_0x17f6f7(0x1f5)]() {
        const _0x207a4d = _0x17f6f7, _0x4e9753 = confirm(_0x207a4d(0x238) + _0x207a4d(0x1d3));
        _0x4e9753 && this[_0x207a4d(0x1f1)]();
    }
    async [_0x17f6f7(0x1f1)]() {
        const _0x1dad2e = _0x17f6f7;
        try {
            console['log']('⚠️\x20Attempting\x20to\x20cancel\x20subscription...');
            const _0x208060 = document[_0x1dad2e(0x21a)](_0x1dad2e(0x1ff))?.[_0x1dad2e(0x1ea)](_0x1dad2e(0x226)), _0x5bcc7d = {
                    'Content-Type': _0x1dad2e(0x1e4),
                    'Accept': _0x1dad2e(0x1e4)
                };
            _0x208060 && (_0x5bcc7d['X-CSRF-Token'] = _0x208060);
            console['log']('📤\x20Sending\x20cancellation\x20request...');
            const _0x3ebf4c = await fetch(_0x1dad2e(0x222), {
                'method': _0x1dad2e(0x23d),
                'credentials': 'include',
                'headers': _0x5bcc7d,
                'body': JSON[_0x1dad2e(0x24e)]({})
            });
            console[_0x1dad2e(0x1fb)](_0x1dad2e(0x209), _0x3ebf4c[_0x1dad2e(0x208)]);
            if (!_0x3ebf4c['ok']) {
                const _0x132281 = await _0x3ebf4c[_0x1dad2e(0x24c)]();
                console[_0x1dad2e(0x232)](_0x1dad2e(0x1f3), _0x3ebf4c[_0x1dad2e(0x208)], _0x132281);
                if (_0x3ebf4c['status'] === 0x191)
                    alert(_0x1dad2e(0x1ec));
                else
                    _0x3ebf4c[_0x1dad2e(0x208)] === 0x190 ? alert(_0x1dad2e(0x213)) : alert(_0x1dad2e(0x258));
                return;
            }
            const _0x239208 = await _0x3ebf4c['json']();
            console[_0x1dad2e(0x1fb)]('✅\x20Response\x20received:', _0x239208);
            if (!_0x239208['success']) {
                console[_0x1dad2e(0x232)](_0x1dad2e(0x1d0), _0x239208), alert(_0x1dad2e(0x1e5) + (_0x239208[_0x1dad2e(0x1fa)] || _0x1dad2e(0x245)));
                return;
            }
            console[_0x1dad2e(0x1fb)]('✅\x20Subscription\x20cancelled\x20successfully'), alert(_0x1dad2e(0x1f6)), await this[_0x1dad2e(0x228)]();
        } catch (_0x36e62f) {
            console[_0x1dad2e(0x232)](_0x1dad2e(0x25b), _0x36e62f[_0x1dad2e(0x1fa)]), console[_0x1dad2e(0x232)](_0x1dad2e(0x216), _0x36e62f[_0x1dad2e(0x212)]), alert(_0x1dad2e(0x203));
        }
    }
}
document[_0x17f6f7(0x25a)](_0x17f6f7(0x22c), () => {
    const _0x374a9b = _0x17f6f7;
    console[_0x374a9b(0x1fb)](_0x374a9b(0x241));
    const _0x170e32 = document[_0x374a9b(0x24a)]('billingPanel'), _0x2a7b2e = document[_0x374a9b(0x24a)](_0x374a9b(0x256)), _0x4ce000 = document['getElementById'](_0x374a9b(0x21d));
    console[_0x374a9b(0x1fb)](_0x374a9b(0x230), {
        'billingPanel': !!_0x170e32,
        'billingBackdrop': !!_0x2a7b2e,
        'dropdownBilling': !!_0x4ce000
    });
    if (!_0x170e32 || !_0x2a7b2e) {
        console[_0x374a9b(0x232)](_0x374a9b(0x253)), console[_0x374a9b(0x232)](_0x374a9b(0x1d8)), console['error'](_0x374a9b(0x1fd));
        return;
    }
    !_0x4ce000 && (console['error'](_0x374a9b(0x20d)), console['error'](_0x374a9b(0x1dd)));
    try {
        window[_0x374a9b(0x22a)] = new BillingPanel(), console[_0x374a9b(0x1fb)](_0x374a9b(0x1d1));
    } catch (_0x55e7b3) {
        console[_0x374a9b(0x232)](_0x374a9b(0x239), _0x55e7b3), console[_0x374a9b(0x232)](_0x374a9b(0x216), _0x55e7b3[_0x374a9b(0x212)]);
    }
});
function _0x4ca5() {
    const _0x20deab = [
        'display',
        'Stack:',
        'cancelSubscriptionBtn',
        'planName',
        'keys',
        'querySelector',
        '12ykuYwO',
        '❌\x20Missing\x20critical\x20billing\x20fields:',
        'dropdownBilling',
        '⚠️\x20Forbidden\x20-\x20Access\x20denied',
        '⚙️\x20Billing\x20Panel\x20init()\x20running...',
        'No\x20active\x20subscription',
        '4155yqPdJb',
        '/api/billing/cancel',
        '✅\x20Price\x20set:',
        'init',
        'billingPrice',
        'content',
        'open',
        'fetchBillingData',
        'inactive',
        'billingPanel',
        '4064390QGcysv',
        'DOMContentLoaded',
        '✅\x20Billing\x20data\x20received:',
        '🔐\x20CSRF\x20Token\x20present:',
        'location',
        '🔍\x20Billing\x20elements\x20check:',
        'billingCurrentPlan',
        'error',
        'warn',
        '2833104FjYotM',
        '✅\x20Billing\x20dropdown\x20listener\x20attached',
        'toFixed',
        'billingStatus',
        '⚠️\x20Are\x20you\x20sure\x20you\x20want\x20to\x20cancel\x20your\x20subscription?\x0a\x0a',
        '❌\x20Error\x20initializing\x20BillingPanel:',
        '📊\x20Populating\x20billing\x20data\x20with\x20validation...',
        '❌\x20Closing\x20Billing\x20Panel',
        'href',
        'POST',
        '📊\x20Opening\x20Billing\x20Panel',
        '❌\x20CRITICAL:\x20dropdownBilling\x20element\x20not\x20found!',
        'Free',
        '🔄\x20Initializing\x20Billing\x20Panel...',
        'openBilling',
        '2446VtKude',
        'stopPropagation',
        'Unknown\x20error',
        '⚠️\x20Unknown\x20status\x20value:',
        'toUpperCase',
        'flex',
        'preventDefault',
        'getElementById',
        '/api/user/billing',
        'text',
        'currentPlan',
        'stringify',
        '7504EmOaKD',
        'showDefaultBillingData',
        '🔄\x20Fetching\x20billing\x20data\x20from\x20/api/user/billing...',
        'long',
        '❌\x20CRITICAL:\x20Billing\x20panel\x20HTML\x20elements\x20not\x20found!',
        'X-CSRF-Token',
        'closeBilling',
        'billingBackdrop',
        '13391KFwvcO',
        '❌\x20Failed\x20to\x20cancel\x20subscription.\x20Please\x20try\x20again.',
        'toLowerCase',
        'addEventListener',
        '❌\x20Error\x20cancelling\x20subscription:',
        'active',
        'add',
        '❌\x20Server\x20indicated\x20failure:',
        '✅\x20Billing\x20Panel\x20initialized\x20successfully',
        '1035405lgWFqB',
        'You\x20will\x20lose\x20access\x20to\x20premium\x20features\x20when\x20your\x20current\x20billing\x20period\x20ends.',
        'slice',
        'click',
        '❌\x20Date\x20formatting\x20error:',
        'object',
        '\x20\x20\x20-\x20Make\x20sure\x20billing\x20panel\x20HTML\x20is\x20in\x20dashboard.html',
        'toLocaleDateString',
        '⚠️\x20Cancel\x20button\x20not\x20found',
        'style',
        '✅\x20Panel\x20opened',
        '\x20\x20\x20-\x20Billing\x20menu\x20link\x20may\x20not\x20be\x20clickable',
        '✅\x20Upgrade\x20button\x20visibility:',
        'nextBillingDate',
        'Inactive',
        'upgradePlan',
        'billingNextDate',
        '✅\x20Billing\x20date\x20formatted:',
        'application/json',
        '❌\x20Cancellation\x20failed:\x20',
        '⬆️\x20Redirecting\x20to\x20upgrade\x20plan',
        'price',
        'div',
        'paymentMethod',
        'getAttribute',
        'closeBillingBtn',
        '⚠️\x20Session\x20expired.\x20Please\x20refresh\x20and\x20try\x20again.',
        'body',
        'none',
        'string',
        'getTime',
        'cancelSubscription',
        'numeric',
        '❌\x20Cancel\x20failed:',
        'profileDropdown',
        'showCancelConfirmation',
        '✅\x20Your\x20subscription\x20has\x20been\x20cancelled.\x20You\x20will\x20lose\x20access\x20to\x20premium\x20features\x20when\x20your\x20current\x20billing\x20period\x20ends.',
        'classList',
        '✅\x20Panel\x20closed',
        'Date\x20unavailable',
        'message',
        'log',
        'cancelled',
        '\x20\x20\x20-\x20Check\x20browser\x20DevTools\x20(F12)\x20>\x20Elements\x20tab',
        'include',
        'meta[name=\x22csrf-token\x22]',
        'hidden',
        'overflow',
        '⚠️\x20Invalid\x20date\x20format:',
        '❌\x20Error\x20cancelling\x20subscription.\x20Please\x20try\x20again.',
        '2482415bHfKaU',
        '🎯\x20Billing\x20dropdown\x20clicked',
        '✅\x20Upgrade\x20button\x20listener\x20attached',
        '13100202pIdWVw',
        'status',
        '📥\x20Response\x20status:',
        '✅\x20Payment\x20method\x20set:',
        'json',
        '/premium.html',
        '❌\x20WARNING:\x20dropdownBilling\x20element\x20not\x20found!',
        'textContent',
        'en-US',
        'remove',
        'upgradePlanBtn',
        'stack',
        '⚠️\x20No\x20active\x20subscription\x20to\x20cancel.',
        'populateBillingData'
    ];
    _0x4ca5 = function () {
        return _0x20deab;
    };
    return _0x4ca5();
}