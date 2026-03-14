const _0x1322e9 = _0x244d;
(function (_0x59166d, _0xe85f56) {
    const _0x2ccac1 = _0x244d, _0x25412c = _0x59166d();
    while (!![]) {
        try {
            const _0x543183 = parseInt(_0x2ccac1(0x6b)) / 0x1 * (-parseInt(_0x2ccac1(0x70)) / 0x2) + parseInt(_0x2ccac1(0x82)) / 0x3 * (-parseInt(_0x2ccac1(0x7c)) / 0x4) + -parseInt(_0x2ccac1(0x79)) / 0x5 + parseInt(_0x2ccac1(0x78)) / 0x6 + parseInt(_0x2ccac1(0x7a)) / 0x7 * (parseInt(_0x2ccac1(0x7e)) / 0x8) + parseInt(_0x2ccac1(0x8b)) / 0x9 * (parseInt(_0x2ccac1(0x83)) / 0xa) + -parseInt(_0x2ccac1(0x85)) / 0xb * (parseInt(_0x2ccac1(0x8c)) / 0xc);
            if (_0x543183 === _0xe85f56)
                break;
            else
                _0x25412c['push'](_0x25412c['shift']());
        } catch (_0x3595ef) {
            _0x25412c['push'](_0x25412c['shift']());
        }
    }
}(_0x2e5e, 0xd892c));
class ProcessingProgressUI {
    constructor() {
        const _0x37bdb0 = _0x244d;
        this[_0x37bdb0(0x76)] = _0x37bdb0(0x75), this[_0x37bdb0(0x93)] = new Map();
    }
    [_0x1322e9(0x87)](_0x51f270) {
        const _0x34d3f3 = _0x1322e9;
        if (typeof _0x51f270 !== 'string')
            return '';
        const _0x468a22 = document[_0x34d3f3(0x6f)](_0x34d3f3(0x71));
        return _0x468a22['textContent'] = _0x51f270, _0x468a22[_0x34d3f3(0x72)];
    }
    [_0x1322e9(0x6e)]() {
        const _0x588c12 = _0x1322e9;
        let _0x350aff = document['getElementById'](this[_0x588c12(0x76)]);
        return !_0x350aff && (_0x350aff = document[_0x588c12(0x6f)]('div'), _0x350aff['id'] = this[_0x588c12(0x76)], _0x350aff[_0x588c12(0x7d)][_0x588c12(0x64)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Poppins\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', document[_0x588c12(0x6d)][_0x588c12(0x65)](_0x350aff)), _0x350aff;
    }
    [_0x1322e9(0x7b)](_0x241dc8, _0x49107e = _0x1322e9(0x95)) {
        const _0x52ab87 = _0x1322e9, _0x3fa12a = this[_0x52ab87(0x6e)](), _0x34f5e9 = document['createElement'](_0x52ab87(0x71));
        _0x34f5e9[_0x52ab87(0x91)](_0x52ab87(0x73), _0x241dc8), _0x34f5e9[_0x52ab87(0x7d)][_0x52ab87(0x64)] = _0x52ab87(0x77);
        const _0x39009e = this[_0x52ab87(0x87)](_0x49107e);
        _0x34f5e9[_0x52ab87(0x72)] = _0x52ab87(0x68) + _0x39009e + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22\x20style=\x22color:\x20#e0e0e0;\x20font-size:\x2011px;\x22>0%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x20100%;\x20height:\x206px;\x20background:\x20rgba(100,\x20150,\x20255,\x200.1);\x20border-radius:\x203px;\x20overflow:\x20hidden;\x20margin-bottom:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22\x20style=\x22width:\x200%;\x20height:\x20100%;\x20background:\x20linear-gradient(90deg,\x20#6496ff\x200%,\x20#4980ff\x20100%);\x20transition:\x20width\x200.3s\x20ease;\x20border-radius:\x203px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-step\x22\x20style=\x22color:\x20rgba(255,\x20255,\x20255,\x200.6);\x20font-size:\x2011px;\x20min-height:\x2014px;\x22>Initializing...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x3fa12a[_0x52ab87(0x65)](_0x34f5e9), this['taskElements'][_0x52ab87(0x92)](_0x241dc8, _0x34f5e9);
        if (!document['querySelector'](_0x52ab87(0x84))) {
            const _0x1b77d3 = document['createElement']('style');
            _0x1b77d3[_0x52ab87(0x91)]('data-solis-progress', 'true'), _0x1b77d3['textContent'] = _0x52ab87(0x81), document[_0x52ab87(0x8e)][_0x52ab87(0x65)](_0x1b77d3);
        }
    }
    ['updateProgress'](_0xdc4aa, _0x3f6e5f, _0x354895 = '') {
        const _0x19385f = _0x1322e9, _0x167ca1 = this[_0x19385f(0x93)][_0x19385f(0x8f)](_0xdc4aa);
        if (_0x167ca1) {
            const _0x98e515 = _0x167ca1[_0x19385f(0x66)]('.progress-bar'), _0x4c957e = _0x167ca1[_0x19385f(0x66)]('.status-text'), _0x1a77dd = _0x167ca1['querySelector'](_0x19385f(0x90));
            _0x98e515 && (_0x98e515[_0x19385f(0x7d)][_0x19385f(0x88)] = _0x3f6e5f + '%'), _0x4c957e && (_0x4c957e[_0x19385f(0x74)] = _0x3f6e5f + '%'), _0x1a77dd && _0x354895 && (_0x1a77dd['textContent'] = _0x354895);
        }
    }
    [_0x1322e9(0x80)](_0x2e06c2) {
        const _0x49dc3e = _0x1322e9, _0x3a778e = this['taskElements'][_0x49dc3e(0x8f)](_0x2e06c2);
        if (_0x3a778e) {
            const _0x45a3a7 = _0x3a778e[_0x49dc3e(0x66)](_0x49dc3e(0x7f)), _0x199831 = _0x3a778e[_0x49dc3e(0x66)](_0x49dc3e(0x6c)), _0x7d4db0 = _0x3a778e[_0x49dc3e(0x66)]('.status-step');
            _0x45a3a7 && _0x45a3a7[_0x49dc3e(0x8a)][_0x49dc3e(0x67)]('complete'), _0x199831 && (_0x199831[_0x49dc3e(0x74)] = '100%'), _0x7d4db0 && (_0x7d4db0[_0x49dc3e(0x74)] = _0x49dc3e(0x69)), setTimeout(() => {
                this['removeTask'](_0x2e06c2);
            }, 0xbb8);
        }
    }
    ['markError'](_0x12f518, _0x47cb0d = 'Error\x20occurred') {
        const _0x393f6e = _0x1322e9, _0x299c5f = this['taskElements'][_0x393f6e(0x8f)](_0x12f518);
        if (_0x299c5f) {
            const _0x23ddbd = _0x299c5f[_0x393f6e(0x66)](_0x393f6e(0x7f)), _0xa4622e = _0x299c5f[_0x393f6e(0x66)](_0x393f6e(0x90));
            _0x23ddbd && _0x23ddbd[_0x393f6e(0x8a)][_0x393f6e(0x67)]('error'), _0xa4622e && (_0xa4622e[_0x393f6e(0x74)] = '❌\x20' + _0x47cb0d), setTimeout(() => {
                this['removeTask'](_0x12f518);
            }, 0x1388);
        }
    }
    [_0x1322e9(0x89)](_0x8f2304) {
        const _0x34fed9 = _0x1322e9, _0xcda6b5 = this[_0x34fed9(0x93)][_0x34fed9(0x8f)](_0x8f2304);
        _0xcda6b5 && (_0xcda6b5[_0x34fed9(0x7d)][_0x34fed9(0x86)] = _0x34fed9(0x8d), setTimeout(() => {
            const _0x1bef4d = _0x34fed9;
            _0xcda6b5[_0x1bef4d(0x6a)](), this[_0x1bef4d(0x93)][_0x1bef4d(0x94)](_0x8f2304);
        }, 0x12c));
    }
}
function _0x244d(_0x12b4d6, _0x4f3c68) {
    _0x12b4d6 = _0x12b4d6 - 0x64;
    const _0x2e5e78 = _0x2e5e();
    let _0x244da8 = _0x2e5e78[_0x12b4d6];
    return _0x244da8;
}
function _0x2e5e() {
    const _0x5add6d = [
        'style',
        '8jgvxyJ',
        '.progress-bar',
        'markComplete',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20slideIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(400px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%,\x20100%\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20opacity:\x200.5;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar.complete\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#4ade80\x200%,\x20#22c55e\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar.error\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#f87171\x200%,\x20#ef4444\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '37755MOcMDy',
        '1580tkNLGO',
        'style[data-solis-progress]',
        '11dnloVz',
        'animation',
        '_escapeHtml',
        'width',
        'removeTask',
        'classList',
        '59490Wpsfas',
        '14665284LcpatL',
        'slideIn\x200.3s\x20ease\x20reverse',
        'head',
        'get',
        '.status-step',
        'setAttribute',
        'set',
        'taskElements',
        'delete',
        'Processing',
        'cssText',
        'appendChild',
        'querySelector',
        'add',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-bottom:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#6496ff;\x20font-weight:\x20600;\x20font-size:\x2013px;\x22>',
        '✅\x20Complete!',
        'remove',
        '1803rfvgXz',
        '.status-text',
        'body',
        'init',
        'createElement',
        '58fghRnb',
        'div',
        'innerHTML',
        'data-task-id',
        'textContent',
        'processing-progress-container',
        'progressContainerId',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20rgba(20,\x2020,\x2040,\x200.95)\x200%,\x20rgba(30,\x2030,\x2050,\x200.95)\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(20px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(100,\x20150,\x20255,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2032px\x20rgba(0,\x200,\x200,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '4759566dYlzHd',
        '2669710NwqsDA',
        '8030638qMEuTa',
        'showProgress',
        '92aMbQxe'
    ];
    _0x2e5e = function () {
        return _0x5add6d;
    };
    return _0x2e5e();
}
const progressUI = new ProcessingProgressUI();