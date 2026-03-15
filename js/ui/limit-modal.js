const _0x4b08b6 = window['API_BASE_URL'] || 'https://api.solisai.video/api',
    _0x45d6db = {
        'selectedPlanType': 'prime'
    },
    _0x1118e0 = [
        'basic',
        'prime',
        'elite'
    ];

function _0x205b90(_0x4319b8) {
    const _0x54e34a = Number(_0x4319b8);
    if (!Number['isInteger'](_0x54e34a) || _0x54e34a < 0x0)
        return 0x1e;
    return _0x54e34a;
}
async function _0x575a02() {
    try {
        const _0xfa9919 = await fetch(_0x4b08b6 + '/user/check-limit', {
            'method': 'GET',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        if (!_0xfa9919['ok'])
            throw new Error('Failed\x20to\x20check\x20limit');
        const _0x5f4f0d = await _0xfa9919['json']();
        return _0x5f4f0d;
    } catch (_0x3de5a0) {
        return null;
    }
}

function _0x38ba63(_0x19c581) {
    try {
        if (!_0x19c581 || typeof _0x19c581 !== 'object') {
            console['error']('[LimitModal]\x20Invalid\x20data\x20structure');
            return;
        }
        const {
            used: _0x3750eb,
            limit: _0x3d620c,
            plan_type: _0x5a9b13,
            last_video_date: _0x3bd6c1,
            cooldown_seconds: _0x5e6b13,
            remaining_seconds: _0xdb50ea
        } = _0x19c581, _0x1896b8 = Number['isInteger'](_0x3750eb) ? Math['max'](0x0, _0x3750eb) : 0x0, _0x1c85da = Number['isInteger'](_0x3d620c) ? Math['max'](0x1, _0x3d620c) : 0x1, _0x8b61ef = _0x1118e0['includes'](_0x5a9b13) ? _0x5a9b13 : 'free', _0x7632c4 = _0x205b90(_0xdb50ea) || _0x205b90(_0x5e6b13);
        let _0x41fc6f = Math['max'](0x0, _0x7632c4),
            _0x522709 = 'now';
        if (_0x41fc6f > 0x0) {
            const _0x1ac600 = Math['floor'](_0x41fc6f / 0x3c),
                _0x216e2d = _0x41fc6f % 0x3c;
            _0x1ac600 > 0x0 ? _0x522709 = _0x1ac600 + 'm\x20' + _0x216e2d + 's' : _0x522709 = _0x216e2d + 's';
        }
        let _0x1f8869 = 'Never';
        if (_0x3bd6c1 && _0x3bd6c1 !== '1970-01-01') {
            const _0x1c5305 = String(_0x3bd6c1)['split']('\x20'),
                _0x3bb310 = _0x1c5305[0x0],
                _0x3f4ccb = _0x1c5305[0x1] || '00:00';
            /^\d{4}-\d{2}-\d{2}$/ ['test'](_0x3bb310) && /^\d{2}:\d{2}/ ['test'](_0x3f4ccb) && (_0x1f8869 = _0x3bb310 + '\x20at\x20' + _0x3f4ccb);
        }
        const _0x2ef82a = document['createElement']('div');
        _0x2ef82a['className'] = 'limit-overlay', _0x2ef82a['id'] = 'limitModal';
        const _0x1daff0 = document['createElement']('div');
        _0x1daff0['className'] = 'limit-modal';
        const _0x5b15f5 = document['createElement']('div');
        _0x5b15f5['className'] = 'panel-left';
        const _0x2e54a4 = document['createElement']('div');
        _0x2e54a4['className'] = 'left-top';
        const _0x3ff4d3 = document['createElement']('div');
        _0x3ff4d3['className'] = 'limit-wrap', _0x3ff4d3['innerHTML'] = '<svg\x20width=\x2228\x22\x20height=\x2228\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22#FF6A3D\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x2212\x22/><line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212.01\x22\x20y2=\x2216\x22/></svg>', _0x2e54a4['appendChild'](_0x3ff4d3);
        const _0x49f3f5 = document['createElement']('h1');
        _0x49f3f5['textContent'] = 'You\x27ve\x20hit\x20your\x0adaily\x20limit', _0x2e54a4['appendChild'](_0x49f3f5);
        const _0x48d394 = document['createElement']('p');
        _0x48d394['className'] = 'subtitle', _0x48d394['textContent'] = 'You\x27ve\x20used\x20all\x20' + _0x1c85da + '\x20of\x20your\x20daily\x20generations.\x20Upgrade\x20to\x20keep\x20creating\x20without\x20interruption.', _0x2e54a4['appendChild'](_0x48d394), _0x5b15f5['appendChild'](_0x2e54a4);
        const _0x281bfc = document['createElement']('div');
        _0x281bfc['className'] = 'usage-box';
        const _0x5addc0 = document['createElement']('div');
        _0x5addc0['className'] = 'usage-header';
        const _0x47a499 = document['createElement']('div');
        _0x47a499['className'] = 'usage-label', _0x47a499['innerHTML'] = '<svg\x20width=\x2212\x22\x20height=\x2212\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><polygon\x20points=\x2223\x207\x2016\x2012\x2023\x2017\x2023\x207\x22/><rect\x20x=\x221\x22\x20y=\x225\x22\x20width=\x2215\x22\x20height=\x2214\x22\x20rx=\x222\x22\x20ry=\x222\x22/></svg>', _0x47a499['appendChild'](document['createTextNode']('Daily\x20generations')), _0x5addc0['appendChild'](_0x47a499);
        const _0x3b6fb9 = document['createElement']('div');
        _0x3b6fb9['className'] = 'usage-count', _0x3b6fb9['textContent'] = _0x1896b8 + '\x20/\x20' + _0x1c85da + '\x20used', _0x5addc0['appendChild'](_0x3b6fb9), _0x281bfc['appendChild'](_0x5addc0);
        const _0x46d021 = document['createElement']('div');
        _0x46d021['className'] = 'usage-bar-track';
        const _0x48c11b = document['createElement']('div');
        _0x48c11b['className'] = 'usage-bar-fill', _0x48c11b['style']['width'] = '100%', _0x46d021['appendChild'](_0x48c11b), _0x281bfc['appendChild'](_0x46d021);
        const _0x131be3 = document['createElement']('div');
        _0x131be3['className'] = 'usage-note', _0x131be3['textContent'] = 'Last\x20generated:\x20';
        const _0x2eea3f = document['createElement']('span');
        _0x2eea3f['textContent'] = _0x1f8869, _0x131be3['appendChild'](_0x2eea3f), _0x281bfc['appendChild'](_0x131be3);
        const _0xc4693b = document['createElement']('div');
        _0xc4693b['className'] = 'usage-note', _0xc4693b['textContent'] = 'Resets\x20in\x20';
        const _0x99e0dd = document['createElement']('span');
        _0x99e0dd['textContent'] = _0x522709, _0xc4693b['appendChild'](_0x99e0dd), _0xc4693b['appendChild'](document['createTextNode']('\x20·\x20or\x20upgrade\x20for\x20more')), _0x281bfc['appendChild'](_0xc4693b), _0x5b15f5['appendChild'](_0x281bfc), _0x1daff0['appendChild'](_0x5b15f5);
        const _0x3f14d8 = document['createElement']('div');
        _0x3f14d8['className'] = 'panel-right';
        const _0x218355 = document['createElement']('button');
        _0x218355['className'] = 'close-btn', _0x218355['addEventListener']('click', _0x3aa0e5), _0x218355['innerHTML'] = '<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><line\x20x1=\x2218\x22\x20y1=\x226\x22\x20x2=\x226\x22\x20y2=\x2218\x22/><line\x20x1=\x226\x22\x20y1=\x226\x22\x20x2=\x2218\x22\x20y2=\x2218\x22/></svg>', _0x3f14d8['appendChild'](_0x218355);
        const _0x3a021f = document['createElement']('div'),
            _0xa49ac = document['createElement']('div');
        _0xa49ac['className'] = 'plans-label', _0xa49ac['textContent'] = 'Choose\x20a\x20plan', _0x3a021f['appendChild'](_0xa49ac);
        const _0x34b83c = document['createElement']('div');
        _0x34b83c['className'] = 'plan-options';
        const _0x4349c4 = document['createElement']('div');
        _0x4349c4['className'] = 'plan-card' + (_0x8b61ef === 'free' ? '\x20current-plan' : ''), _0x4349c4['setAttribute']('data-plan', 'basic'), _0x4349c4['addEventListener']('click', function(_0x1965d1) {
            _0x2fc33b(_0x1965d1['currentTarget'], 'basic');
        }), _0x4349c4['innerHTML'] = '<div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22basicGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#f1f5f9;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#cbd5e1;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#94a3b8;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#basicGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#basicGrad)\x22\x20stroke-width=\x2210\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Basic</strong><span>5\x20generations/day</span></div><div\x20class=\x22plan-card-price\x22>$18.99/mo</div>', _0x34b83c['appendChild'](_0x4349c4);
        const _0x4cbb2e = document['createElement']('div');
        _0x4cbb2e['className'] = 'plan-card\x20highlighted', _0x4cbb2e['setAttribute']('data-plan', 'prime'), _0x4cbb2e['addEventListener']('click', function(_0x73172b) {
            _0x2fc33b(_0x73172b['currentTarget'], 'prime');
        }), _0x4cbb2e['innerHTML'] = '<div\x20class=\x22popular-tag\x22>Popular</div><div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22primeGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#fff176;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ffd600;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#ff9100;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#primeGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#primeGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Prime</strong><span>12\x20generations/day</span></div><div\x20class=\x22plan-card-price\x22>$29.99/mo</div>', _0x34b83c['appendChild'](_0x4cbb2e);
        const _0x51302f = document['createElement']('div');
        _0x51302f['className'] = 'plan-card', _0x51302f['setAttribute']('data-plan', 'elite'), _0x51302f['addEventListener']('click', function(_0x46f6eb) {
            _0x2fc33b(_0x46f6eb['currentTarget'], 'elite');
        }), _0x51302f['innerHTML'] = '<div\x20class=\x22plan-card-icon\x22><svg\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><defs><linearGradient\x20id=\x22eliteGrad\x22\x20x1=\x220%\x22\x20y1=\x220%\x22\x20x2=\x22100%\x22\x20y2=\x22100%\x22><stop\x20offset=\x220%\x22\x20style=\x22stop-color:#ff6b3d;stop-opacity:1\x22\x20/><stop\x20offset=\x2250%\x22\x20style=\x22stop-color:#ff3d00;stop-opacity:1\x22\x20/><stop\x20offset=\x22100%\x22\x20style=\x22stop-color:#c70000;stop-opacity:1\x22\x20/></linearGradient></defs><circle\x20cx=\x2250\x22\x20cy=\x2250\x22\x20r=\x2216\x22\x20fill=\x22url(#eliteGrad)\x22></circle><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse><ellipse\x20rx=\x2242\x22\x20ry=\x2218\x22\x20cx=\x2250\x22\x20cy=\x2250\x22\x20stroke=\x22url(#eliteGrad)\x22\x20stroke-width=\x2212\x22\x20fill=\x22none\x22\x20transform=\x22rotate(-45\x2050\x2050)\x22\x20stroke-linecap=\x22round\x22></ellipse></svg></div><div\x20class=\x22plan-card-body\x22><strong>Elite</strong><span>40\x20generations/day\x20·\x20Priority\x20queue</span></div><div\x20class=\x22plan-card-price\x22>$49.99/mo</div>', _0x34b83c['appendChild'](_0x51302f), _0x3a021f['appendChild'](_0x34b83c), _0x3f14d8['appendChild'](_0x3a021f);
        const _0x1e5414 = document['createElement']('div');
        _0x1e5414['className'] = 'right-footer';
        const _0x12c9b1 = document['createElement']('button');
        _0x12c9b1['className'] = 'cta-btn', _0x12c9b1['addEventListener']('click', _0x20bb8f), _0x12c9b1['innerHTML'] = 'Upgrade\x20now<svg\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><line\x20x1=\x225\x22\x20y1=\x2212\x22\x20x2=\x2219\x22\x20y2=\x2212\x22/><polyline\x20points=\x2212\x205\x2019\x2012\x2012\x2019\x22/></svg>', _0x1e5414['appendChild'](_0x12c9b1), _0x3f14d8['appendChild'](_0x1e5414), _0x1daff0['appendChild'](_0x3f14d8), _0x2ef82a['appendChild'](_0x1daff0), document['body']['appendChild'](_0x2ef82a), setTimeout(() => {
            _0x2ef82a['style']['opacity'] = '1';
        }, 0xa);
    } catch (_0x13d976) {
        console['error']('[LimitModal]\x20Error\x20rendering\x20modal:', _0x13d976);
    }
}

function _0x2fc33b(_0x22302, _0x35c430) {
    if (!_0x1118e0['includes'](_0x35c430)) {
        console['warn']('[LimitModal]\x20Invalid\x20plan\x20type:', _0x35c430);
        return;
    }
    _0x45d6db['selectedPlanType'] = _0x35c430;
    const _0x12055c = _0x22302['closest']('.plan-options')['querySelectorAll']('.plan-card');
    _0x12055c['forEach'](_0x5c4af4 => _0x5c4af4['classList']['remove']('highlighted')), _0x22302['classList']['add']('highlighted');
}

function _0x20bb8f() {
    const _0xae2875 = _0x45d6db['selectedPlanType'];
    if (!_0x1118e0['includes'](_0xae2875)) {
        console['error']('[LimitModal]\x20Invalid\x20plan:', _0xae2875);
        return;
    }
    const _0x102c71 = new URL('/premium.html', window['location']['origin']);
    _0x102c71['searchParams']['set']('plan', _0xae2875), window['location']['href'] = _0x102c71['toString']();
}

function _0x3aa0e5() {
    const _0x48702c = document['getElementById']('limitModal');
    _0x48702c && (_0x48702c['style']['opacity'] = '0', setTimeout(() => _0x48702c['remove'](), 0xfa));
}
async function _0x39bb5() {
    const _0xce6379 = await _0x575a02();
    if (!_0xce6379)
        return ![];
    if (!_0xce6379['allowed'])
        return _0x38ba63({
            'used': _0xce6379['used'],
            'limit': _0xce6379['limit'],
            'plan_type': _0xce6379['plan_type'],
            'last_video_date': _0xce6379['last_video_date']
        }), ![];
    return !![];
}
window['checkGenerationLimit'] = _0x575a02, window['showLimitModal'] = _0x38ba63, window['closeLimitModal'] = _0x3aa0e5, window['selectPlan'] = _0x2fc33b, window['upgradeToPlan'] = _0x20bb8f, window['attemptGeneration'] = _0x39bb5;