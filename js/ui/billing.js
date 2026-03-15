class _0x4d9bee {
    constructor() {
            this['billingPanel'] = document['getElementById']('billingPanel'), this['billingBackdrop'] = document['getElementById']('billingBackdrop'), this['closeBillingBtn'] = document['getElementById']('closeBilling'), this['upgradePlanBtn'] = document['getElementById']('upgradePlanBtn'), this['cancelSubscriptionBtn'] = document['getElementById']('cancelSubscriptionBtn'), this['init']();
        }
    ['init']() {
            console['log']('⚙️\x20Billing\x20Panel\x20init()\x20running...');
            this['closeBillingBtn'] ? (this['closeBillingBtn']['addEventListener']('click', () => this['closeBilling']()), console['log']('✅\x20Close\x20button\x20listener\x20attached')) : console['warn']('⚠️\x20Close\x20button\x20not\x20found');
            this['billingBackdrop'] ? (this['billingBackdrop']['addEventListener']('click', () => this['closeBilling']()), console['log']('✅\x20Backdrop\x20listener\x20attached')) : console['warn']('⚠️\x20Backdrop\x20not\x20found');
            this['upgradePlanBtn'] ? (this['upgradePlanBtn']['addEventListener']('click', () => this['upgradePlan']()), console['log']('✅\x20Upgrade\x20button\x20listener\x20attached')) : console['warn']('⚠️\x20Upgrade\x20button\x20not\x20found');
            this['cancelSubscriptionBtn'] ? (this['cancelSubscriptionBtn']['addEventListener']('click', () => this['showCancelConfirmation']()), console['log']('✅\x20Cancel\x20button\x20listener\x20attached')) : console['warn']('⚠️\x20Cancel\x20button\x20not\x20found');
            const _0x3010d8 = document['getElementById']('dropdownBilling');
            _0x3010d8 ? (_0x3010d8['addEventListener']('click', _0x57476c => {
                console['log']('🎯\x20Billing\x20dropdown\x20clicked'), _0x57476c['preventDefault'](), _0x57476c['stopPropagation'](), this['openBilling']();
            }), console['log']('✅\x20Billing\x20dropdown\x20listener\x20attached')) : (console['error']('❌\x20CRITICAL:\x20dropdownBilling\x20element\x20not\x20found!'), console['error']('\x20\x20\x20Check\x20that\x20#dropdownBilling\x20exists\x20in\x20dashboard.html')), console['log']('✅\x20init()\x20completed');
        }
    async ['openBilling']() {
            console['log']('📊\x20Opening\x20Billing\x20Panel');
            if (!this['billingPanel'] || !this['billingBackdrop']) {
                console['error']('❌\x20Billing\x20panel\x20elements\x20not\x20found\x20in\x20DOM'), alert('❌\x20Error:\x20Billing\x20panel\x20not\x20initialized.\x20Please\x20refresh\x20the\x20page.');
                return;
            }
            const _0x5b73c5 = document['getElementById']('profileDropdown');
            _0x5b73c5 && _0x5b73c5['classList']['contains']('open') && (_0x5b73c5['classList']['remove']('open'), console['log']('✅\x20Closed\x20profile\x20dropdown')), this['billingPanel']['classList']['add']('open'), this['billingBackdrop']['classList']['add']('open'), document['body']['style']['overflow'] = 'hidden', console['log']('✅\x20Panel\x20opened'), await this['fetchBillingData']();
        }
    ['closeBilling']() {
            console['log']('❌\x20Closing\x20Billing\x20Panel'), this['billingPanel'] && this['billingPanel']['classList']['remove']('open'), this['billingBackdrop'] && this['billingBackdrop']['classList']['remove']('open'), document['body']['style']['overflow'] = '', console['log']('✅\x20Panel\x20closed');
        }
    async ['fetchBillingData']() {
            try {
                console['log']('🔄\x20Fetching\x20billing\x20data\x20from\x20/api/user/billing...');
                const _0x256b71 = document['querySelector']('meta[name=\x22csrf-token\x22]')?.['getAttribute']('content');
                console['log']('🔐\x20CSRF\x20Token\x20present:', !!_0x256b71);
                const _0x3db462 = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
                _0x256b71 && (_0x3db462['X-CSRF-Token'] = _0x256b71);
                console['log']('📤\x20Sending\x20request\x20with\x20headers:', Object['keys'](_0x3db462));
                const _0x421dac = await fetch('/api/user/billing', {
                    'method': 'GET',
                    'credentials': 'include',
                    'headers': _0x3db462
                });
                console['log']('📥\x20Response\x20status:', _0x421dac['status'], _0x421dac['statusText']);
                if (!_0x421dac['ok']) {
                    const _0x54c625 = await _0x421dac['text']();
                    console['error']('❌\x20API\x20Error:', _0x421dac['status'], _0x54c625);
                    if (_0x421dac['status'] === 0x191) {
                        console['error']('⚠️\x20Unauthorized\x20-\x20Token\x20may\x20be\x20invalid'), alert('⚠️\x20Session\x20expired.\x20Please\x20refresh\x20the\x20page.');
                        return;
                    } else
                        _0x421dac['status'] === 0x193 && console['error']('⚠️\x20Forbidden\x20-\x20Access\x20denied');
                    this['showDefaultBillingData']();
                    return;
                }
                const _0x57d5d7 = await _0x421dac['json']();
                console['log']('✅\x20Billing\x20data\x20received:', _0x57d5d7);
                if (!_0x57d5d7 || typeof _0x57d5d7 !== 'object') {
                    console['error']('❌\x20Invalid\x20response\x20structure:', _0x57d5d7), this['showDefaultBillingData']();
                    return;
                }
                if (!_0x57d5d7['planName'] || !_0x57d5d7['status']) {
                    console['error']('❌\x20Missing\x20critical\x20billing\x20fields:', _0x57d5d7), this['showDefaultBillingData']();
                    return;
                }
                this['populateBillingData'](_0x57d5d7);
            } catch (_0x40db3b) {
                console['error']('❌\x20Network/Fetch\x20Error:', _0x40db3b['message']), console['error']('Stack:', _0x40db3b['stack']), this['showDefaultBillingData']();
            }
        }
    ['populateBillingData'](_0x20db3d) {
            console['log']('📊\x20Populating\x20billing\x20data\x20with\x20validation...');
            const _0x2c1c7b = _0x3ce015 => {
                    if (typeof _0x3ce015 !== 'string' && _0x3ce015 !== null)
                        return '';
                    if (!_0x3ce015)
                        return '';
                    const _0x54f322 = document['createElement']('div');
                    return _0x54f322['textContent'] = _0x3ce015, _0x54f322['innerHTML'];
                },
                _0x5926e7 = document['getElementById']('billingCurrentPlan');
            if (_0x5926e7 && _0x20db3d['planName']) {
                const _0x1a1899 = _0x2c1c7b(_0x20db3d['planName']);
                _0x5926e7['textContent'] = _0x1a1899, console['log']('✅\x20Plan\x20name\x20set:', _0x1a1899);
            }
            const _0x194f21 = document['getElementById']('billingNextDate');
            if (_0x194f21) {
                if (_0x20db3d['nextBillingDate'])
                    try {
                        const _0x348308 = new Date(_0x20db3d['nextBillingDate']);
                        isNaN(_0x348308['getTime']()) ? (console['warn']('⚠️\x20Invalid\x20date\x20format:', _0x20db3d['nextBillingDate']), _0x194f21['textContent'] = 'Date\x20unavailable') : (_0x194f21['textContent'] = _0x348308['toLocaleDateString']('en-US', {
                            'year': 'numeric',
                            'month': 'long',
                            'day': 'numeric'
                        }), console['log']('✅\x20Billing\x20date\x20formatted:', _0x194f21['textContent']));
                    } catch (_0x477e70) {
                        console['error']('❌\x20Date\x20formatting\x20error:', _0x477e70), _0x194f21['textContent'] = 'No\x20active\x20subscription';
                    }
                else
                    _0x194f21['textContent'] = 'No\x20active\x20subscription';
            }
            const _0x332d46 = document['getElementById']('billingStatus');
            if (_0x332d46 && _0x20db3d['status']) {
                const _0x3cfb74 = [
                    'active',
                    'inactive',
                    'cancelled'
                ],
                    _0x48efd0 = _0x2c1c7b(_0x20db3d['status'])['toLowerCase']();
                !_0x3cfb74['includes'](_0x48efd0) && console['warn']('⚠️\x20Unknown\x20status\x20value:', _0x20db3d['status']), _0x332d46['textContent'] = _0x48efd0['charAt'](0x0)['toUpperCase']() + _0x48efd0['slice'](0x1), _0x332d46['classList']['remove']('active', 'inactive', 'cancelled'), _0x332d46['classList']['add'](_0x48efd0), console['log']('✅\x20Status\x20badge\x20set:', _0x48efd0);
            }
            const _0x3a32ea = document['getElementById']('billingPrice');
            if (_0x3a32ea && _0x20db3d['price'])
                try {
                    const _0x6834be = parseFloat(_0x20db3d['price']);
                    !isNaN(_0x6834be) && (_0x3a32ea['textContent'] = '$' + _0x6834be['toFixed'](0x2) + '/month', console['log']('✅\x20Price\x20set:', _0x3a32ea['textContent']));
                } catch (_0x10b465) {
                    console['warn']('⚠️\x20Price\x20parsing\x20error:', _0x10b465);
                }
            const _0x1beb31 = document['getElementById']('paymentMethod');
            if (_0x1beb31 && _0x20db3d['paymentMethod']) {
                const _0x53b24c = _0x2c1c7b(_0x20db3d['paymentMethod']);
                _0x1beb31['textContent'] = _0x53b24c, console['log']('✅\x20Payment\x20method\x20set:', _0x53b24c);
            }
            const _0x3b1073 = !_0x20db3d['currentPlan'] || _0x20db3d['currentPlan'] === 'free',
                _0x4f7fc7 = _0x20db3d['status'] === 'active';
            this['upgradePlanBtn'] && (this['upgradePlanBtn']['style']['display'] = _0x3b1073 ? 'flex' : 'none', console['log']('✅\x20Upgrade\x20button\x20visibility:', _0x3b1073)), this['cancelSubscriptionBtn'] && (this['cancelSubscriptionBtn']['style']['display'] = _0x4f7fc7 && !_0x3b1073 ? 'flex' : 'none', console['log']('✅\x20Cancel\x20button\x20visibility:', _0x4f7fc7 && !_0x3b1073)), console['log']('✅\x20All\x20data\x20populated\x20successfully');
        }
    ['showDefaultBillingData']() {
            const _0x34a97c = document['getElementById']('billingCurrentPlan'),
                _0x331327 = document['getElementById']('billingNextDate'),
                _0x35f981 = document['getElementById']('billingStatus');
            if (_0x34a97c)
                _0x34a97c['textContent'] = 'Free';
            if (_0x331327)
                _0x331327['textContent'] = 'No\x20active\x20subscription';
            _0x35f981 && (_0x35f981['textContent'] = 'Inactive', _0x35f981['classList']['add']('inactive'));
            if (this['upgradePlanBtn'])
                this['upgradePlanBtn']['style']['display'] = 'flex';
            if (this['cancelSubscriptionBtn'])
                this['cancelSubscriptionBtn']['style']['display'] = 'none';
        }
    ['upgradePlan']() {
            console['log']('⬆️\x20Redirecting\x20to\x20upgrade\x20plan'), window['location']['href'] = '/premium.html';
        }
    ['showCancelConfirmation']() {
            const _0x28b599 = confirm('⚠️\x20Are\x20you\x20sure\x20you\x20want\x20to\x20cancel\x20your\x20subscription?\x0a\x0a' + 'You\x20will\x20lose\x20access\x20to\x20premium\x20features\x20when\x20your\x20current\x20billing\x20period\x20ends.');
            _0x28b599 && this['cancelSubscription']();
        }
    async ['cancelSubscription']() {
        try {
            console['log']('⚠️\x20Attempting\x20to\x20cancel\x20subscription...');
            const _0x4e03c3 = document['querySelector']('meta[name=\x22csrf-token\x22]')?.['getAttribute']('content'),
                _0x56988b = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
            _0x4e03c3 && (_0x56988b['X-CSRF-Token'] = _0x4e03c3);
            console['log']('📤\x20Sending\x20cancellation\x20request...');
            const _0x29bf42 = await fetch('/api/billing/cancel', {
                'method': 'POST',
                'credentials': 'include',
                'headers': _0x56988b,
                'body': JSON['stringify']({})
            });
            console['log']('📥\x20Response\x20status:', _0x29bf42['status']);
            if (!_0x29bf42['ok']) {
                const _0x5b4a55 = await _0x29bf42['text']();
                console['error']('❌\x20Cancel\x20failed:', _0x29bf42['status'], _0x5b4a55);
                if (_0x29bf42['status'] === 0x191)
                    alert('⚠️\x20Session\x20expired.\x20Please\x20refresh\x20and\x20try\x20again.');
                else
                    _0x29bf42['status'] === 0x190 ? alert('⚠️\x20No\x20active\x20subscription\x20to\x20cancel.') : alert('❌\x20Failed\x20to\x20cancel\x20subscription.\x20Please\x20try\x20again.');
                return;
            }
            const _0x4f6216 = await _0x29bf42['json']();
            console['log']('✅\x20Response\x20received:', _0x4f6216);
            if (!_0x4f6216['success']) {
                console['error']('❌\x20Server\x20indicated\x20failure:', _0x4f6216), alert('❌\x20Cancellation\x20failed:\x20' + (_0x4f6216['message'] || 'Unknown\x20error'));
                return;
            }
            console['log']('✅\x20Subscription\x20cancelled\x20successfully'), alert('✅\x20Your\x20subscription\x20has\x20been\x20cancelled.\x20You\x20will\x20lose\x20access\x20to\x20premium\x20features\x20when\x20your\x20current\x20billing\x20period\x20ends.'), await this['fetchBillingData']();
        } catch (_0x12e118) {
            console['error']('❌\x20Error\x20cancelling\x20subscription:', _0x12e118['message']), console['error']('Stack:', _0x12e118['stack']), alert('❌\x20Error\x20cancelling\x20subscription.\x20Please\x20try\x20again.');
        }
    }
}
document['addEventListener']('DOMContentLoaded', () => {
    console['log']('🔄\x20Initializing\x20Billing\x20Panel...');
    const _0x380142 = document['getElementById']('billingPanel'),
        _0x561f88 = document['getElementById']('billingBackdrop'),
        _0x352d9e = document['getElementById']('dropdownBilling');
    console['log']('🔍\x20Billing\x20elements\x20check:', {
        'billingPanel': !!_0x380142,
        'billingBackdrop': !!_0x561f88,
        'dropdownBilling': !!_0x352d9e
    });
    if (!_0x380142 || !_0x561f88) {
        console['error']('❌\x20CRITICAL:\x20Billing\x20panel\x20HTML\x20elements\x20not\x20found!'), console['error']('\x20\x20\x20-\x20Make\x20sure\x20billing\x20panel\x20HTML\x20is\x20in\x20dashboard.html'), console['error']('\x20\x20\x20-\x20Check\x20browser\x20DevTools\x20(F12)\x20>\x20Elements\x20tab');
        return;
    }!_0x352d9e && (console['error']('❌\x20WARNING:\x20dropdownBilling\x20element\x20not\x20found!'), console['error']('\x20\x20\x20-\x20Billing\x20menu\x20link\x20may\x20not\x20be\x20clickable'));
    try {
        window['billingPanel'] = new _0x4d9bee(), console['log']('✅\x20Billing\x20Panel\x20initialized\x20successfully');
    } catch (_0x324ad5) {
        console['error']('❌\x20Error\x20initializing\x20BillingPanel:', _0x324ad5), console['error']('Stack:', _0x324ad5['stack']);
    }
});