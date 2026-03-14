const _0x4c141a = _0x3bac;
(function (_0x4e7348, _0x599b58) {
    const _0x5f1616 = _0x3bac, _0x551481 = _0x4e7348();
    while (!![]) {
        try {
            const _0x583866 = parseInt(_0x5f1616(0xce)) / 0x1 + parseInt(_0x5f1616(0x13c)) / 0x2 + -parseInt(_0x5f1616(0xd0)) / 0x3 + parseInt(_0x5f1616(0xfc)) / 0x4 + parseInt(_0x5f1616(0x101)) / 0x5 + -parseInt(_0x5f1616(0x128)) / 0x6 * (-parseInt(_0x5f1616(0xe2)) / 0x7) + parseInt(_0x5f1616(0xfe)) / 0x8 * (-parseInt(_0x5f1616(0x115)) / 0x9);
            if (_0x583866 === _0x599b58)
                break;
            else
                _0x551481['push'](_0x551481['shift']());
        } catch (_0x2b7880) {
            _0x551481['push'](_0x551481['shift']());
        }
    }
}(_0x520a, 0x5a1c7));
function _0x3bac(_0x1f9e88, _0x24ba30) {
    _0x1f9e88 = _0x1f9e88 - 0xc7;
    const _0x520aea = _0x520a();
    let _0x3bac09 = _0x520aea[_0x1f9e88];
    return _0x3bac09;
}
class GenerationProgressSpinner {
    constructor() {
        const _0x3af5c4 = _0x3bac;
        this[_0x3af5c4(0x13b)] = document['getElementById'](_0x3af5c4(0xe5)), this[_0x3af5c4(0xe3)] = document['getElementById'](_0x3af5c4(0xe3)), this[_0x3af5c4(0x120)] = document['getElementById'](_0x3af5c4(0x136)), this[_0x3af5c4(0xc8)] = new Map(), this[_0x3af5c4(0x12e)] = 75.36, this[_0x3af5c4(0xc7)] = _0x3af5c4(0xcb), this['restoreFromLocalStorage'](), typeof solisWSClient !== 'undefined' && this['setupWebSocketHandlers']();
    }
    [_0x4c141a(0x124)]() {
        const _0x55bbf2 = _0x4c141a;
        try {
            const _0xe328cd = localStorage[_0x55bbf2(0xd9)](this[_0x55bbf2(0xc7)]);
            if (!_0xe328cd)
                return;
            const _0xda914d = JSON[_0x55bbf2(0x12c)](_0xe328cd);
            console[_0x55bbf2(0x10b)](_0x55bbf2(0x12b) + _0xda914d[_0x55bbf2(0xf0)] + '\x20active\x20generation(s)...'), _0xda914d[_0x55bbf2(0xe9)](_0xb8d83c => {
                this['verifyProjectStatus'](_0xb8d83c);
            });
        } catch (_0x1c312c) {
            console[_0x55bbf2(0xd6)]('⚠️\x20Failed\x20to\x20restore\x20from\x20localStorage:', _0x1c312c), localStorage[_0x55bbf2(0x109)](this[_0x55bbf2(0xc7)]);
        }
    }
    ['verifyProjectStatus'](_0x1c26b1) {
        const _0x1a2a05 = _0x4c141a;
        fetch(_0x1a2a05(0x125) + _0x1c26b1, {
            'headers': {
                'Authorization': 'Bearer\x20' + localStorage[_0x1a2a05(0xd9)](_0x1a2a05(0x13a)),
                'Content-Type': _0x1a2a05(0x117)
            }
        })[_0x1a2a05(0xfd)](_0x144aee => _0x144aee[_0x1a2a05(0xf2)]())['then'](_0x873ff9 => {
            const _0x2b89a9 = _0x1a2a05;
            if (_0x873ff9['status'] === _0x2b89a9(0xe7) || _0x873ff9[_0x2b89a9(0x10d)] === 'queued')
                console[_0x2b89a9(0x10b)](_0x2b89a9(0x11a) + _0x1c26b1 + _0x2b89a9(0x104) + _0x873ff9[_0x2b89a9(0x138)] + '%)'), this[_0x2b89a9(0xc8)][_0x2b89a9(0x121)](_0x1c26b1, {
                    'startTime': Date[_0x2b89a9(0xd5)](),
                    'progress': _0x873ff9['progress'] || 0x0,
                    'message': _0x873ff9[_0x2b89a9(0xd3)] || _0x2b89a9(0xf3)
                }), this[_0x2b89a9(0x13b)] && (this[_0x2b89a9(0x13b)][_0x2b89a9(0x118)][_0x2b89a9(0xe0)] = 'flex'), this[_0x2b89a9(0xca)](_0x1c26b1, _0x873ff9[_0x2b89a9(0x138)] || 0x0, '🔄\x20Resuming\x20generation...');
            else {
                if (_0x873ff9[_0x2b89a9(0x10d)] === _0x2b89a9(0x119))
                    this[_0x2b89a9(0xe6)](_0x1c26b1);
                else
                    _0x873ff9[_0x2b89a9(0x10d)] === _0x2b89a9(0xf8) && (console[_0x2b89a9(0xf8)]('❌\x20Project\x20error:\x20' + _0x873ff9['message']), this['removeFromLocalStorage'](_0x1c26b1));
            }
        })[_0x1a2a05(0x133)](_0x424596 => {
            console['warn']('⚠️\x20Failed\x20to\x20verify\x20project\x20status\x20for\x20' + _0x1c26b1 + ':', _0x424596);
        });
    }
    [_0x4c141a(0x10f)](_0x58875b) {
        const _0x22849c = _0x4c141a;
        try {
            const _0x50edc4 = localStorage[_0x22849c(0xd9)](this[_0x22849c(0xc7)]) || '[]', _0x160ce7 = JSON[_0x22849c(0x12c)](_0x50edc4);
            !_0x160ce7['includes'](_0x58875b) && (_0x160ce7[_0x22849c(0x114)](_0x58875b), localStorage[_0x22849c(0xda)](this['STORAGE_KEY'], JSON[_0x22849c(0x111)](_0x160ce7)), console[_0x22849c(0x10b)](_0x22849c(0xfb) + _0x58875b));
        } catch (_0x2b31b1) {
            console[_0x22849c(0xd6)](_0x22849c(0xec), _0x2b31b1);
        }
    }
    [_0x4c141a(0xe6)](_0x20f819) {
        const _0x128de6 = _0x4c141a;
        try {
            const _0x21a500 = localStorage[_0x128de6(0xd9)](this['STORAGE_KEY']) || '[]';
            let _0x599b95 = JSON[_0x128de6(0x12c)](_0x21a500);
            _0x599b95 = _0x599b95[_0x128de6(0xed)](_0x440ead => _0x440ead !== _0x20f819), _0x599b95['length'] > 0x0 ? localStorage['setItem'](this['STORAGE_KEY'], JSON[_0x128de6(0x111)](_0x599b95)) : localStorage[_0x128de6(0x109)](this[_0x128de6(0xc7)]), console['log'](_0x128de6(0x12a) + _0x20f819);
        } catch (_0x494696) {
            console[_0x128de6(0xd6)](_0x128de6(0xe1), _0x494696);
        }
    }
    [_0x4c141a(0x129)]() {
        const _0x48751a = _0x4c141a;
        console[_0x48751a(0x10b)](_0x48751a(0x122)), solisWSClient['on'](_0x48751a(0xff), _0x3fe467 => {
            const _0x15a2e8 = _0x48751a, {
                    project_id: _0x15a57c,
                    moment_count: _0x2da556,
                    progress: _0x56946e,
                    moment: _0x3fcb92
                } = _0x3fe467;
            console[_0x15a2e8(0x10b)](_0x15a2e8(0xd2) + _0x2da556 + _0x15a2e8(0x137), _0x3fcb92?.[_0x15a2e8(0xf7)], '(' + _0x56946e + '%)'), this[_0x15a2e8(0xca)](_0x15a57c, _0x56946e, _0x15a2e8(0xef) + _0x2da556 + _0x15a2e8(0x11c));
        }), solisWSClient['on'](_0x48751a(0x103), _0x20fb44 => {
            const _0x36def4 = _0x48751a, {
                    project_id: _0x1c9369,
                    progress: _0x12d056,
                    step: _0x1d3d9b
                } = _0x20fb44;
            if (this['activeGenerations']['has'](_0x1c9369)) {
                const _0x2d337b = this[_0x36def4(0xc8)][_0x36def4(0x134)](_0x1c9369)[_0x36def4(0x138)];
                _0x12d056 > _0x2d337b && (console[_0x36def4(0x10b)](_0x36def4(0x10a) + _0x12d056 + _0x36def4(0x113) + _0x1d3d9b), this[_0x36def4(0xca)](_0x1c9369, _0x12d056, _0x1d3d9b || _0x36def4(0x11d)));
            }
        }), solisWSClient['on'](_0x48751a(0x135), _0x5d0c30 => {
            const _0x136d6c = _0x48751a, {project_id: _0x196693} = _0x5d0c30;
            console[_0x136d6c(0x10b)](_0x136d6c(0xf4) + _0x196693), this['completeGeneration'](_0x196693);
        }), solisWSClient['on'](_0x48751a(0xf8), _0x325476 => {
            const _0x4ed58b = _0x48751a, {
                    taskId: _0x234454,
                    error: _0x50ff46
                } = _0x325476;
            console['error'](_0x4ed58b(0x100) + _0x234454 + ':\x20' + _0x50ff46), this['failGeneration'](_0x234454);
        });
    }
    [_0x4c141a(0x11e)](_0x374818, _0x424816 = _0x4c141a(0x116)) {
        const _0x48c8be = _0x4c141a;
        this[_0x48c8be(0xf9)](_0x374818, _0x23b41e => {
            const _0x491e69 = _0x48c8be;
            if (!_0x23b41e) {
                console[_0x491e69(0xf8)](_0x491e69(0xea) + _0x374818), this[_0x491e69(0xd4)](_0x374818);
                return;
            }
            console[_0x491e69(0x10b)](_0x491e69(0xe8) + _0x374818), this['wrapper'] && (this['wrapper'][_0x491e69(0x118)]['display'] = _0x491e69(0xdd)), this[_0x491e69(0xc8)][_0x491e69(0x121)](_0x374818, {
                'startTime': Date[_0x491e69(0xd5)](),
                'progress': 0x0,
                'message': _0x424816
            }), this[_0x491e69(0x10f)](_0x374818), this['updateProgress'](_0x374818, 0x0, _0x424816), console['log'](_0x491e69(0x106) + _0x374818);
        });
    }
    [_0x4c141a(0xf9)](_0x2bfed5, _0x369e97) {
        const _0xfb9e23 = _0x4c141a;
        fetch('/api/clips/verify-access/' + _0x2bfed5, {
            'method': _0xfb9e23(0xc9),
            'headers': {
                'Authorization': _0xfb9e23(0xdc) + localStorage[_0xfb9e23(0xd9)](_0xfb9e23(0x13a)),
                'Content-Type': _0xfb9e23(0x117)
            }
        })[_0xfb9e23(0xfd)](_0x6c105e => _0x6c105e[_0xfb9e23(0xf2)]())['then'](_0x2e9793 => {
            const _0x52bfd5 = _0xfb9e23;
            _0x2e9793[_0x52bfd5(0x11f)] ? (console['log']('✅\x20WebSocket\x20access\x20verified\x20for\x20project\x20' + _0x2bfed5), _0x369e97(!![])) : (console['error'](_0x52bfd5(0x11b) + _0x2e9793[_0x52bfd5(0xf8)]), _0x369e97(![]));
        })['catch'](_0x182099 => {
            const _0x1a40a5 = _0xfb9e23;
            console[_0x1a40a5(0xf8)](_0x1a40a5(0xf5), _0x182099), _0x369e97(![]);
        });
    }
    ['updateProgress'](_0x192912, _0x285a5e, _0x3c6e0e = '') {
        const _0x390f55 = _0x4c141a;
        _0x285a5e = Math[_0x390f55(0xdf)](0x0, Math[_0x390f55(0xe4)](0x64, Math['floor'](_0x285a5e)));
        if (this[_0x390f55(0xc8)][_0x390f55(0x131)](_0x192912)) {
            const _0x29373c = this['activeGenerations'][_0x390f55(0x134)](_0x192912);
            if (_0x285a5e <= _0x29373c['progress'])
                return;
            _0x29373c[_0x390f55(0x138)] = _0x285a5e, _0x29373c[_0x390f55(0xd3)] = _0x3c6e0e;
        }
        const _0x519f1e = Math['max'](...[...this[_0x390f55(0xc8)]['values']()][_0x390f55(0x102)](_0x213a0e => _0x213a0e['progress']) || [0x0]), _0x1ecfe2 = [...this[_0x390f55(0xc8)]['entries']()][_0x390f55(0x132)]((_0x348770, _0x36fd1a) => _0x36fd1a[0x1][_0x390f55(0x138)] - _0x348770[0x1][_0x390f55(0x138)])[0x0];
        _0x1ecfe2 && this[_0x390f55(0x12d)](_0x1ecfe2[0x1][_0x390f55(0x138)], _0x1ecfe2[0x1][_0x390f55(0xd3)]);
    }
    ['displayProgress'](_0x3b8f3a, _0x11fc4c = '') {
        const _0x15cda8 = _0x4c141a;
        if (!this['wrapper'] || !this[_0x15cda8(0xe3)] || !this[_0x15cda8(0x120)])
            return;
        this[_0x15cda8(0x13b)][_0x15cda8(0x118)][_0x15cda8(0xe0)] = _0x15cda8(0xdd);
        const _0x27bcd8 = _0x3b8f3a / 0x64 * this[_0x15cda8(0x12e)];
        this[_0x15cda8(0xe3)][_0x15cda8(0x118)][_0x15cda8(0x12f)] = _0x27bcd8 + '\x20' + this['CIRCLE_CIRCUMFERENCE'], this['progressText']['textContent'] = _0x3b8f3a + '%';
        if (_0x3b8f3a < 0x19)
            this[_0x15cda8(0xe3)]['style'][_0x15cda8(0xdb)] = _0x15cda8(0xde);
        else {
            if (_0x3b8f3a < 0x32)
                this[_0x15cda8(0xe3)][_0x15cda8(0x118)][_0x15cda8(0xdb)] = _0x15cda8(0x107);
            else {
                if (_0x3b8f3a < 0x4b)
                    this[_0x15cda8(0xe3)][_0x15cda8(0x118)]['stroke'] = _0x15cda8(0x130);
                else
                    _0x3b8f3a < 0x64 ? this[_0x15cda8(0xe3)]['style'][_0x15cda8(0xdb)] = _0x15cda8(0xcf) : this['progressCircle'][_0x15cda8(0x118)][_0x15cda8(0xdb)] = '#22c55e';
            }
        }
        safeLog('📊\x20Progress:\x20' + _0x3b8f3a + '%\x20' + (_0x11fc4c ? '-\x20' + _0x11fc4c : ''));
    }
    ['completeGeneration'](_0x341e15) {
        const _0x325190 = _0x4c141a;
        this['activeGenerations'][_0x325190(0x131)](_0x341e15) && this[_0x325190(0xc8)][_0x325190(0xeb)](_0x341e15), this[_0x325190(0xe6)](_0x341e15), this['activeGenerations'][_0x325190(0x127)] === 0x0 && setTimeout(() => {
            const _0x43b6a6 = _0x325190;
            this[_0x43b6a6(0x10e)]();
        }, 0x5dc), console[_0x325190(0x10b)](_0x325190(0x10c) + _0x341e15);
    }
    ['failGeneration'](_0x450ae6) {
        const _0x59ccca = _0x4c141a;
        this[_0x59ccca(0xc8)][_0x59ccca(0x131)](_0x450ae6) && this[_0x59ccca(0xc8)]['delete'](_0x450ae6), this[_0x59ccca(0xe6)](_0x450ae6), this['progressCircle'] && (this['progressCircle'][_0x59ccca(0x118)][_0x59ccca(0xdb)] = _0x59ccca(0xee)), this['progressText'] && (this['progressText'][_0x59ccca(0xd1)] = '❌'), setTimeout(() => {
            const _0x5b8d5a = _0x59ccca;
            this[_0x5b8d5a(0x10e)]();
        }, 0x7d0), console[_0x59ccca(0xf8)](_0x59ccca(0x112) + _0x450ae6);
    }
    [_0x4c141a(0x10e)]() {
        const _0x1a4e2a = _0x4c141a;
        this['wrapper'] && (this['wrapper'][_0x1a4e2a(0x118)][_0x1a4e2a(0xe0)] = _0x1a4e2a(0x110)), this[_0x1a4e2a(0xe3)] && (this['progressCircle']['style']['strokeDasharray'] = '0\x20' + this[_0x1a4e2a(0x12e)], this[_0x1a4e2a(0xe3)][_0x1a4e2a(0x118)]['stroke'] = _0x1a4e2a(0x126)), this[_0x1a4e2a(0x120)] && (this[_0x1a4e2a(0x120)][_0x1a4e2a(0xd1)] = '0%');
    }
    [_0x4c141a(0x105)]() {
        const _0x405374 = _0x4c141a;
        return {
            'isActive': this[_0x405374(0xc8)][_0x405374(0x127)] > 0x0,
            'activeCount': this['activeGenerations'][_0x405374(0x127)],
            'generations': Object['fromEntries'](this['activeGenerations'])
        };
    }
}
let generationProgressSpinner = null;
function _0x520a() {
    const _0x50cd1e = [
        'now',
        'warn',
        'readyState',
        'hot',
        'getItem',
        'setItem',
        'stroke',
        'Bearer\x20',
        'flex',
        '#ff6b6b',
        'max',
        'display',
        '⚠️\x20Failed\x20to\x20remove\x20from\x20localStorage:',
        '53501VwrKXt',
        'progressCircle',
        'min',
        'generationProgressWrapper',
        'removeFromLocalStorage',
        'processing',
        '✅\x20Access\x20verified\x20for\x20project\x20',
        'forEach',
        '❌\x20Access\x20denied\x20to\x20project\x20',
        'delete',
        '⚠️\x20Failed\x20to\x20save\x20to\x20localStorage:',
        'filter',
        '#ef4444',
        'Moment\x20',
        'length',
        'loading',
        'json',
        'Resuming...',
        '✅\x20Video\x20ready\x20for\x20project:\x20',
        '❌\x20Error\x20verifying\x20WebSocket\x20access:',
        'undefined',
        'title',
        'error',
        'verifyWebSocketAccess',
        'exports',
        '💾\x20Saved\x20to\x20localStorage:\x20',
        '1267952xSjnlH',
        'then',
        '8XaGTjL',
        'moment_detected',
        '❌\x20Generation\x20error\x20for\x20',
        '731520sUpFmO',
        'map',
        'compilation_progress',
        '\x20still\x20processing\x20(',
        'getStatus',
        '🎯\x20Started\x20progress\x20tracking\x20for\x20',
        '#ffa500',
        'addEventListener',
        'removeItem',
        '📊\x20Generation\x20progress:\x20',
        'log',
        '✅\x20Generation\x20complete\x20for\x20',
        'status',
        'hide',
        'saveToLocalStorage',
        'none',
        'stringify',
        '❌\x20Generation\x20failed\x20for\x20',
        '%\x20-\x20',
        'push',
        '8783685GLsZlb',
        '🎬\x20Starting\x20generation...',
        'application/json',
        'style',
        'completed',
        '✅\x20Project\x20',
        '❌\x20WebSocket\x20access\x20denied:\x20',
        '\x20detected',
        'Processing...',
        'startGeneration',
        'allowed',
        'progressText',
        'set',
        '🎯\x20Setting\x20up\x20moment\x20progress\x20handlers',
        'currentScript',
        'restoreFromLocalStorage',
        '/api/clips/status/',
        '#ff7a50',
        'size',
        '414Qqvfec',
        'setupWebSocketHandlers',
        '🗑️\x20Removed\x20from\x20localStorage:\x20',
        '🔄\x20Restoring\x20',
        'parse',
        'displayProgress',
        'CIRCLE_CIRCUMFERENCE',
        'strokeDasharray',
        '#ffd700',
        'has',
        'sort',
        'catch',
        'get',
        'video_ready',
        'generationProgressText',
        '\x20detected:',
        'progress',
        'src',
        'token',
        'wrapper',
        '38714IPJwJt',
        'STORAGE_KEY',
        'activeGenerations',
        'GET',
        'updateProgress',
        'solisAI_activeGenerations',
        'DOMContentLoaded',
        '✅\x20Generation\x20Progress\x20Spinner\x20initialized',
        '511577VHAzxM',
        '#4ade80',
        '529599zDFNIa',
        'textContent',
        '📊\x20Moment\x20',
        'message',
        'failGeneration'
    ];
    _0x520a = function () {
        return _0x50cd1e;
    };
    return _0x520a();
}
function initGenerationProgressSpinner() {
    const _0x167573 = _0x4c141a;
    document[_0x167573(0xd7)] === _0x167573(0xf1) ? document[_0x167573(0x108)]('DOMContentLoaded', () => {
        const _0x33edac = _0x167573;
        generationProgressSpinner = new GenerationProgressSpinner(), console[_0x33edac(0x10b)](_0x33edac(0xcd));
    }) : (generationProgressSpinner = new GenerationProgressSpinner(), console[_0x167573(0x10b)](_0x167573(0xcd)));
}
if (document[_0x4c141a(0x123)] && document[_0x4c141a(0x123)][_0x4c141a(0x139)])
    initGenerationProgressSpinner();
else
    typeof module !== _0x4c141a(0xf6) && module[_0x4c141a(0xd8)] ? initGenerationProgressSpinner() : document[_0x4c141a(0xd7)] === _0x4c141a(0xf1) ? document[_0x4c141a(0x108)](_0x4c141a(0xcc), initGenerationProgressSpinner) : initGenerationProgressSpinner();
typeof module !== _0x4c141a(0xf6) && module[_0x4c141a(0xfa)] && (module[_0x4c141a(0xfa)] = {
    'GenerationProgressSpinner': GenerationProgressSpinner,
    'generationProgressSpinner': generationProgressSpinner
});