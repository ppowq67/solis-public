const _0x4b2410 = _0x8a0b;
(function (_0x2340e9, _0xd33b14) {
    const _0x3e418c = _0x8a0b, _0x1dc453 = _0x2340e9();
    while (!![]) {
        try {
            const _0x140686 = -parseInt(_0x3e418c(0x16b)) / 0x1 + parseInt(_0x3e418c(0x1c6)) / 0x2 * (-parseInt(_0x3e418c(0x17a)) / 0x3) + -parseInt(_0x3e418c(0x180)) / 0x4 + -parseInt(_0x3e418c(0x191)) / 0x5 * (parseInt(_0x3e418c(0x17e)) / 0x6) + parseInt(_0x3e418c(0x182)) / 0x7 * (-parseInt(_0x3e418c(0x18e)) / 0x8) + -parseInt(_0x3e418c(0x16f)) / 0x9 * (parseInt(_0x3e418c(0x1d3)) / 0xa) + parseInt(_0x3e418c(0x1c4)) / 0xb;
            if (_0x140686 === _0xd33b14)
                break;
            else
                _0x1dc453['push'](_0x1dc453['shift']());
        } catch (_0x2caa07) {
            _0x1dc453['push'](_0x1dc453['shift']());
        }
    }
}(_0x342c, 0x65bd8));
const API_BASE = window['API_BASE_URL'] || 'http://127.0.0.1:5500/api', LimitModalState = { 'selectedPlanType': _0x4b2410(0x186) }, VALID_PLANS = [
        _0x4b2410(0x1a1),
        _0x4b2410(0x186),
        'elite'
    ];
function validateSeconds(_0x25c008) {
    const _0x473bf6 = _0x4b2410, _0x361e2b = Number(_0x25c008);
    if (!Number[_0x473bf6(0x1c3)](_0x361e2b) || _0x361e2b < 0x0)
        return 0x1e;
    return _0x361e2b;
}
async function checkGenerationLimit() {
    const _0x3e7bef = _0x4b2410;
    try {
        const _0x5e2502 = await fetch(API_BASE + _0x3e7bef(0x1a4), {
            'method': _0x3e7bef(0x1cd),
            'credentials': _0x3e7bef(0x17c),
            'headers': { 'Content-Type': 'application/json' }
        });
        if (!_0x5e2502['ok'])
            throw new Error('Failed\x20to\x20check\x20limit');
        const _0x21cb55 = await _0x5e2502[_0x3e7bef(0x185)]();
        return _0x21cb55;
    } catch (_0x1b9d8a) {
        return null;
    }
}
function showLimitModal(_0x470230) {
    const _0x855bf7 = _0x4b2410;
    try {
        if (!_0x470230 || typeof _0x470230 !== _0x855bf7(0x1c8)) {
            console[_0x855bf7(0x1b1)](_0x855bf7(0x1bd));
            return;
        }
        const {
                used: _0x3f05d3,
                limit: _0xc3a580,
                plan_type: _0x5a2ec7,
                last_video_date: _0x2464ea,
                cooldown_seconds: _0x256943,
                remaining_seconds: _0x609390
            } = _0x470230, _0x4c50ce = Number[_0x855bf7(0x1c3)](_0x3f05d3) ? Math[_0x855bf7(0x1d0)](0x0, _0x3f05d3) : 0x0, _0x41837e = Number[_0x855bf7(0x1c3)](_0xc3a580) ? Math['max'](0x1, _0xc3a580) : 0x1, _0x5c0508 = VALID_PLANS[_0x855bf7(0x1ad)](_0x5a2ec7) ? _0x5a2ec7 : _0x855bf7(0x192), _0x346c6c = validateSeconds(_0x609390) || validateSeconds(_0x256943);
        let _0x89baba = Math[_0x855bf7(0x1d0)](0x0, _0x346c6c), _0x328c79 = _0x855bf7(0x1a0);
        if (_0x89baba > 0x0) {
            const _0x13dc83 = Math[_0x855bf7(0x193)](_0x89baba / 0x3c), _0xb6feb3 = _0x89baba % 0x3c;
            _0x13dc83 > 0x0 ? _0x328c79 = _0x13dc83 + 'm\x20' + _0xb6feb3 + 's' : _0x328c79 = _0xb6feb3 + 's';
        }
        let _0x47f70d = 'Never';
        if (_0x2464ea && _0x2464ea !== _0x855bf7(0x173)) {
            const _0x3af89e = String(_0x2464ea)[_0x855bf7(0x1ae)]('\x20'), _0x2cce65 = _0x3af89e[0x0], _0x3f7272 = _0x3af89e[0x1] || _0x855bf7(0x1a8);
            /^\d{4}-\d{2}-\d{2}$/[_0x855bf7(0x172)](_0x2cce65) && /^\d{2}:\d{2}/[_0x855bf7(0x172)](_0x3f7272) && (_0x47f70d = _0x2cce65 + _0x855bf7(0x1a2) + _0x3f7272);
        }
        const _0x2a1056 = document['createElement'](_0x855bf7(0x1ca));
        _0x2a1056[_0x855bf7(0x1b2)] = _0x855bf7(0x19d), _0x2a1056['id'] = _0x855bf7(0x1c7);
        const _0x1e28c6 = document[_0x855bf7(0x1a6)]('div');
        _0x1e28c6['className'] = _0x855bf7(0x179);
        const _0x423317 = document['createElement']('div');
        _0x423317[_0x855bf7(0x1b2)] = _0x855bf7(0x16e);
        const _0x34ef92 = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x34ef92[_0x855bf7(0x1b2)] = _0x855bf7(0x1cc);
        const _0x2ba737 = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x2ba737[_0x855bf7(0x1b2)] = _0x855bf7(0x197), _0x2ba737['innerHTML'] = _0x855bf7(0x16d), _0x34ef92[_0x855bf7(0x19b)](_0x2ba737);
        const _0x1c3f09 = document[_0x855bf7(0x1a6)]('h1');
        _0x1c3f09[_0x855bf7(0x17f)] = _0x855bf7(0x17d), _0x34ef92[_0x855bf7(0x19b)](_0x1c3f09);
        const _0x22ee38 = document['createElement']('p');
        _0x22ee38[_0x855bf7(0x1b2)] = _0x855bf7(0x178), _0x22ee38['textContent'] = _0x855bf7(0x177) + _0x41837e + _0x855bf7(0x1bb), _0x34ef92[_0x855bf7(0x19b)](_0x22ee38), _0x423317['appendChild'](_0x34ef92);
        const _0x485816 = document[_0x855bf7(0x1a6)]('div');
        _0x485816[_0x855bf7(0x1b2)] = _0x855bf7(0x181);
        const _0x32b14f = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x32b14f[_0x855bf7(0x1b2)] = _0x855bf7(0x1ab);
        const _0x1e92ad = document[_0x855bf7(0x1a6)]('div');
        _0x1e92ad[_0x855bf7(0x1b2)] = _0x855bf7(0x176), _0x1e92ad[_0x855bf7(0x18c)] = _0x855bf7(0x168), _0x1e92ad[_0x855bf7(0x19b)](document[_0x855bf7(0x18f)]('Daily\x20generations')), _0x32b14f[_0x855bf7(0x19b)](_0x1e92ad);
        const _0xe17b40 = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0xe17b40[_0x855bf7(0x1b2)] = _0x855bf7(0x1af), _0xe17b40['textContent'] = _0x4c50ce + _0x855bf7(0x196) + _0x41837e + _0x855bf7(0x183), _0x32b14f[_0x855bf7(0x19b)](_0xe17b40), _0x485816['appendChild'](_0x32b14f);
        const _0x197b4b = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x197b4b[_0x855bf7(0x1b2)] = _0x855bf7(0x1b8);
        const _0x3df016 = document[_0x855bf7(0x1a6)]('div');
        _0x3df016[_0x855bf7(0x1b2)] = _0x855bf7(0x1c2), _0x3df016[_0x855bf7(0x1c9)][_0x855bf7(0x19c)] = _0x855bf7(0x18d), _0x197b4b[_0x855bf7(0x19b)](_0x3df016), _0x485816[_0x855bf7(0x19b)](_0x197b4b);
        const _0x16c9f6 = document[_0x855bf7(0x1a6)]('div');
        _0x16c9f6['className'] = _0x855bf7(0x18b), _0x16c9f6[_0x855bf7(0x17f)] = _0x855bf7(0x169);
        const _0x1bccb5 = document[_0x855bf7(0x1a6)]('span');
        _0x1bccb5[_0x855bf7(0x17f)] = _0x47f70d, _0x16c9f6['appendChild'](_0x1bccb5), _0x485816[_0x855bf7(0x19b)](_0x16c9f6);
        const _0x312171 = document[_0x855bf7(0x1a6)]('div');
        _0x312171[_0x855bf7(0x1b2)] = _0x855bf7(0x18b), _0x312171[_0x855bf7(0x17f)] = _0x855bf7(0x1b6);
        const _0x3e945c = document[_0x855bf7(0x1a6)]('span');
        _0x3e945c['textContent'] = _0x328c79, _0x312171['appendChild'](_0x3e945c), _0x312171[_0x855bf7(0x19b)](document['createTextNode']('\x20·\x20or\x20upgrade\x20for\x20more')), _0x485816[_0x855bf7(0x19b)](_0x312171), _0x423317[_0x855bf7(0x19b)](_0x485816), _0x1e28c6[_0x855bf7(0x19b)](_0x423317);
        const _0x4fff80 = document[_0x855bf7(0x1a6)]('div');
        _0x4fff80['className'] = 'panel-right';
        const _0x48ca2d = document[_0x855bf7(0x1a6)]('button');
        _0x48ca2d[_0x855bf7(0x1b2)] = 'close-btn', _0x48ca2d[_0x855bf7(0x19a)](_0x855bf7(0x1a7), closeLimitModal), _0x48ca2d[_0x855bf7(0x18c)] = _0x855bf7(0x18a), _0x4fff80[_0x855bf7(0x19b)](_0x48ca2d);
        const _0x1008ae = document['createElement'](_0x855bf7(0x1ca)), _0x5e5059 = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x5e5059[_0x855bf7(0x1b2)] = _0x855bf7(0x1a9), _0x5e5059[_0x855bf7(0x17f)] = _0x855bf7(0x1be), _0x1008ae[_0x855bf7(0x19b)](_0x5e5059);
        const _0x415709 = document['createElement']('div');
        _0x415709[_0x855bf7(0x1b2)] = 'plan-options';
        const _0x4862ca = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x4862ca['className'] = _0x855bf7(0x1bf) + (_0x5c0508 === _0x855bf7(0x192) ? _0x855bf7(0x17b) : ''), _0x4862ca[_0x855bf7(0x190)](_0x855bf7(0x1cf), _0x855bf7(0x1a1)), _0x4862ca[_0x855bf7(0x19a)](_0x855bf7(0x1a7), function (_0x3592e1) {
            const _0x42c9ea = _0x855bf7;
            selectPlan(_0x3592e1['currentTarget'], _0x42c9ea(0x1a1));
        }), _0x4862ca['innerHTML'] = '<div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22basicGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#f1f5f9;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#cbd5e1;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#94a3b8;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#basicGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Basic</strong><span>5\x20generations/day</span></div><div\x20class=\x22plan-card-price\x22>$18.99/mo</div>', _0x415709[_0x855bf7(0x19b)](_0x4862ca);
        const _0x1c290d = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x1c290d['className'] = _0x855bf7(0x174), _0x1c290d['setAttribute'](_0x855bf7(0x1cf), _0x855bf7(0x186)), _0x1c290d[_0x855bf7(0x19a)](_0x855bf7(0x1a7), function (_0x572a92) {
            const _0x3058f8 = _0x855bf7;
            selectPlan(_0x572a92[_0x3058f8(0x1bc)], _0x3058f8(0x186));
        }), _0x1c290d['innerHTML'] = '<div\x20class=\x22popular-tag\x22>Popular</div><div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22primeGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#fff176;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ffd600;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#ff9100;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#primeGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Prime</strong><span>12\x20generations/day</span></div><div\x20class=\x22plan-card-price\x22>$29.99/mo</div>', _0x415709[_0x855bf7(0x19b)](_0x1c290d);
        const _0x40dbdd = document[_0x855bf7(0x1a6)]('div');
        _0x40dbdd[_0x855bf7(0x1b2)] = _0x855bf7(0x1bf), _0x40dbdd['setAttribute'](_0x855bf7(0x1cf), _0x855bf7(0x195)), _0x40dbdd[_0x855bf7(0x19a)](_0x855bf7(0x1a7), function (_0x5e7a36) {
            const _0x33107d = _0x855bf7;
            selectPlan(_0x5e7a36[_0x33107d(0x1bc)], _0x33107d(0x195));
        }), _0x40dbdd[_0x855bf7(0x18c)] = _0x855bf7(0x1b5), _0x415709['appendChild'](_0x40dbdd), _0x1008ae[_0x855bf7(0x19b)](_0x415709), _0x4fff80[_0x855bf7(0x19b)](_0x1008ae);
        const _0x5ce399 = document[_0x855bf7(0x1a6)](_0x855bf7(0x1ca));
        _0x5ce399[_0x855bf7(0x1b2)] = _0x855bf7(0x1a5);
        const _0x51f37e = document[_0x855bf7(0x1a6)](_0x855bf7(0x1a3));
        _0x51f37e[_0x855bf7(0x1b2)] = _0x855bf7(0x1c1), _0x51f37e[_0x855bf7(0x19a)](_0x855bf7(0x1a7), upgradeToPlan), _0x51f37e[_0x855bf7(0x18c)] = 'Upgrade\x20now<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><line\x20x1=\x225\x22\x20y1=\x2212\x22\x20x2=\x2219\x22\x20y2=\x2212\x22/><polyline\x20points=\x2212\x205\x2019\x2012\x2012\x2019\x22/></svg>', _0x5ce399[_0x855bf7(0x19b)](_0x51f37e), _0x4fff80[_0x855bf7(0x19b)](_0x5ce399), _0x1e28c6[_0x855bf7(0x19b)](_0x4fff80), _0x2a1056[_0x855bf7(0x19b)](_0x1e28c6), document[_0x855bf7(0x1b4)][_0x855bf7(0x19b)](_0x2a1056), setTimeout(() => {
            const _0xa477e8 = _0x855bf7;
            _0x2a1056[_0xa477e8(0x1c9)][_0xa477e8(0x1b7)] = '1';
        }, 0xa);
    } catch (_0x44934b) {
        console[_0x855bf7(0x1b1)](_0x855bf7(0x1cb), _0x44934b);
    }
}
function selectPlan(_0x137a72, _0x32e020) {
    const _0x51b78d = _0x4b2410;
    if (!VALID_PLANS[_0x51b78d(0x1ad)](_0x32e020)) {
        console[_0x51b78d(0x187)](_0x51b78d(0x1aa), _0x32e020);
        return;
    }
    LimitModalState['selectedPlanType'] = _0x32e020;
    const _0xc048e = _0x137a72['closest'](_0x51b78d(0x1ba))[_0x51b78d(0x1b0)](_0x51b78d(0x16c));
    _0xc048e[_0x51b78d(0x1d2)](_0x48e19f => _0x48e19f[_0x51b78d(0x1c5)]['remove'](_0x51b78d(0x189))), _0x137a72[_0x51b78d(0x1c5)][_0x51b78d(0x1d1)]('highlighted');
}
function upgradeToPlan() {
    const _0x45f324 = _0x4b2410, _0x1fde35 = LimitModalState[_0x45f324(0x184)];
    if (!VALID_PLANS[_0x45f324(0x1ad)](_0x1fde35)) {
        console[_0x45f324(0x1b1)]('[LimitModal]\x20Invalid\x20plan:', _0x1fde35);
        return;
    }
    const _0x1025f0 = new URL('/premium.html', window[_0x45f324(0x1b3)][_0x45f324(0x170)]);
    _0x1025f0[_0x45f324(0x19f)]['set'](_0x45f324(0x175), _0x1fde35), window['location']['href'] = _0x1025f0[_0x45f324(0x1ac)]();
}
function closeLimitModal() {
    const _0x1dec38 = _0x4b2410, _0x25b11e = document[_0x1dec38(0x199)]('limitModal');
    _0x25b11e && (_0x25b11e[_0x1dec38(0x1c9)][_0x1dec38(0x1b7)] = '0', setTimeout(() => _0x25b11e[_0x1dec38(0x171)](), 0xfa));
}
async function attemptGeneration() {
    const _0x236a8a = _0x4b2410, _0xac74d9 = await checkGenerationLimit();
    if (!_0xac74d9)
        return ![];
    if (!_0xac74d9[_0x236a8a(0x198)])
        return showLimitModal({
            'used': _0xac74d9[_0x236a8a(0x19e)],
            'limit': _0xac74d9[_0x236a8a(0x1c0)],
            'plan_type': _0xac74d9[_0x236a8a(0x16a)],
            'last_video_date': _0xac74d9[_0x236a8a(0x188)]
        }), ![];
    return !![];
}
function _0x342c() {
    const _0x589f07 = [
        'highlighted',
        '<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><line\x20x1=\x2218\x22\x20y1=\x226\x22\x20x2=\x226\x22\x20y2=\x2218\x22/><line\x20x1=\x226\x22\x20y1=\x226\x22\x20x2=\x2218\x22\x20y2=\x2218\x22/></svg>',
        'usage-note',
        'innerHTML',
        '100%',
        '27080jYSfhG',
        'createTextNode',
        'setAttribute',
        '5vcmJxF',
        'free',
        'floor',
        'attemptGeneration',
        'elite',
        '\x20/\x20',
        'limit-wrap',
        'allowed',
        'getElementById',
        'addEventListener',
        'appendChild',
        'width',
        'limit-overlay',
        'used',
        'searchParams',
        'now',
        'basic',
        '\x20at\x20',
        'button',
        '/user/check-limit',
        'right-footer',
        'createElement',
        'click',
        '00:00',
        'plans-label',
        '[LimitModal]\x20Invalid\x20plan\x20type:',
        'usage-header',
        'toString',
        'includes',
        'split',
        'usage-count',
        'querySelectorAll',
        'error',
        'className',
        'location',
        'body',
        '<div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22eliteGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#ff6b3d;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ff3d00;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#c70000;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#eliteGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Elite</strong><span>40\x20generations/day\x20·\x20Priority\x20queue</span></div><div\x20class=\x22plan-card-price\x22>$49.99/mo</div>',
        'Resets\x20in\x20',
        'opacity',
        'usage-bar-track',
        'upgradeToPlan',
        '.plan-options',
        '\x20of\x20your\x20daily\x20generations.\x20Upgrade\x20to\x20keep\x20creating\x20without\x20interruption.',
        'currentTarget',
        '[LimitModal]\x20Invalid\x20data\x20structure',
        'Choose\x20a\x20plan',
        'plan-card',
        'limit',
        'cta-btn',
        'usage-bar-fill',
        'isInteger',
        '44575223eYwpjs',
        'classList',
        '118KuJauB',
        'limitModal',
        'object',
        'style',
        'div',
        '[LimitModal]\x20Error\x20rendering\x20modal:',
        'left-top',
        'GET',
        'showLimitModal',
        'data-plan',
        'max',
        'add',
        'forEach',
        '80ttzfmP',
        '<svg\x20width=\x2212\x22\x20height=\x2212\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><polygon\x20points=\x2223\x207\x2016\x2012\x2023\x2017\x2023\x207\x22/><rect\x20x=\x221\x22\x20y=\x225\x22\x20width=\x2215\x22\x20height=\x2214\x22\x20rx=\x222\x22\x20ry=\x222\x22/></svg>',
        'Last\x20generated:\x20',
        'plan_type',
        '534233kJNYmb',
        '.plan-card',
        '<svg\x20width=\x2228\x22\x20height=\x2228\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x2212\x22/><line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212.01\x22\x20y2=\x2216\x22/></svg>',
        'panel-left',
        '867204bQzYlq',
        'origin',
        'remove',
        'test',
        '1970-01-01',
        'plan-card\x20highlighted',
        'plan',
        'usage-label',
        'You\x27ve\x20used\x20all\x20',
        'subtitle',
        'limit-modal',
        '18645qSCKmN',
        '\x20current-plan',
        'include',
        'You\x27ve\x20hit\x20your\x0adaily\x20limit',
        '4793118rjKsiX',
        'textContent',
        '2317364OygvRd',
        'usage-box',
        '1211jSQuDq',
        '\x20used',
        'selectedPlanType',
        'json',
        'prime',
        'warn',
        'last_video_date'
    ];
    _0x342c = function () {
        return _0x589f07;
    };
    return _0x342c();
}
function _0x8a0b(_0x2eb1dc, _0x5779e6) {
    _0x2eb1dc = _0x2eb1dc - 0x168;
    const _0x342c02 = _0x342c();
    let _0x8a0bc5 = _0x342c02[_0x2eb1dc];
    return _0x8a0bc5;
}
window['checkGenerationLimit'] = checkGenerationLimit, window[_0x4b2410(0x1ce)] = showLimitModal, window['closeLimitModal'] = closeLimitModal, window['selectPlan'] = selectPlan, window[_0x4b2410(0x1b9)] = upgradeToPlan, window[_0x4b2410(0x194)] = attemptGeneration;