class _0x20932a {
    constructor() {
            this['wrapper'] = document['getElementById']('generationProgressWrapper'), this['progressCircle'] = document['getElementById']('progressCircle'), this['progressText'] = document['getElementById']('generationProgressText'), this['activeGenerations'] = new Map(), this['CIRCLE_CIRCUMFERENCE'] = 75.36, this['STORAGE_KEY'] = 'solisAI_activeGenerations', this['restoreFromLocalStorage'](), typeof solisWSClient !== 'undefined' && this['setupWebSocketHandlers']();
        }
    ['restoreFromLocalStorage']() {
            try {
                const _0x441fae = localStorage['getItem'](this['STORAGE_KEY']);
                if (!_0x441fae)
                    return;
                const _0x20a3d8 = JSON['parse'](_0x441fae);
                console['log']('🔄\x20Restoring\x20' + _0x20a3d8['length'] + '\x20active\x20generation(s)...'), _0x20a3d8['forEach'](_0x2add80 => {
                    this['verifyProjectStatus'](_0x2add80);
                });
            } catch (_0x2d2762) {
                console['warn']('⚠️\x20Failed\x20to\x20restore\x20from\x20localStorage:', _0x2d2762), localStorage['removeItem'](this['STORAGE_KEY']);
            }
        }
    ['verifyProjectStatus'](_0x1fe10a) {
            fetch('/api/clips/status/' + _0x1fe10a, {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            })['then'](_0x247317 => _0x247317['json']())['then'](_0x33421c => {
                if (_0x33421c['status'] === 'processing' || _0x33421c['status'] === 'queued')
                    console['log']('✅\x20Project\x20' + _0x1fe10a + '\x20still\x20processing\x20(' + _0x33421c['progress'] + '%)'), this['activeGenerations']['set'](_0x1fe10a, {
                        'startTime': Date['now'](),
                        'progress': _0x33421c['progress'] || 0x0,
                        'message': _0x33421c['message'] || 'Resuming...'
                    }), this['wrapper'] && (this['wrapper']['style']['display'] = 'flex'), this['updateProgress'](_0x1fe10a, _0x33421c['progress'] || 0x0, '🔄\x20Resuming\x20generation...');
                else {
                    if (_0x33421c['status'] === 'completed')
                        this['removeFromLocalStorage'](_0x1fe10a);
                    else
                        _0x33421c['status'] === 'error' && (console['error']('❌\x20Project\x20error:\x20' + _0x33421c['message']), this['removeFromLocalStorage'](_0x1fe10a));
                }
            })['catch'](_0x3f49f5 => {
                console['warn']('⚠️\x20Failed\x20to\x20verify\x20project\x20status\x20for\x20' + _0x1fe10a + ':', _0x3f49f5);
            });
        }
    ['saveToLocalStorage'](_0x14bcbb) {
            try {
                const _0x5175c4 = localStorage['getItem'](this['STORAGE_KEY']) || '[]',
                    _0x137472 = JSON['parse'](_0x5175c4);
                !_0x137472['includes'](_0x14bcbb) && (_0x137472['push'](_0x14bcbb), localStorage['setItem'](this['STORAGE_KEY'], JSON['stringify'](_0x137472)), console['log']('💾\x20Saved\x20to\x20localStorage:\x20' + _0x14bcbb));
            } catch (_0x110414) {
                console['warn']('⚠️\x20Failed\x20to\x20save\x20to\x20localStorage:', _0x110414);
            }
        }
    ['removeFromLocalStorage'](_0xa5bde0) {
            try {
                const _0x469d4b = localStorage['getItem'](this['STORAGE_KEY']) || '[]';
                let _0xf8e1f = JSON['parse'](_0x469d4b);
                _0xf8e1f = _0xf8e1f['filter'](_0x521989 => _0x521989 !== _0xa5bde0), _0xf8e1f['length'] > 0x0 ? localStorage['setItem'](this['STORAGE_KEY'], JSON['stringify'](_0xf8e1f)) : localStorage['removeItem'](this['STORAGE_KEY']), console['log']('🗑️\x20Removed\x20from\x20localStorage:\x20' + _0xa5bde0);
            } catch (_0x1d8e21) {
                console['warn']('⚠️\x20Failed\x20to\x20remove\x20from\x20localStorage:', _0x1d8e21);
            }
        }
    ['setupWebSocketHandlers']() {
            console['log']('🎯\x20Setting\x20up\x20moment\x20progress\x20handlers'), solisWSClient['on']('moment_detected', _0x449f20 => {
                const {
                    project_id: _0x52aa0e,
                    moment_count: _0x10ee02,
                    progress: _0x2d9475,
                    moment: _0x304bc8
                } = _0x449f20;
                console['log']('📊\x20Moment\x20' + _0x10ee02 + '\x20detected:', _0x304bc8?.['title'], '(' + _0x2d9475 + '%)'), this['updateProgress'](_0x52aa0e, _0x2d9475, 'Moment\x20' + _0x10ee02 + '\x20detected');
            }), solisWSClient['on']('compilation_progress', _0x370da7 => {
                const {
                    project_id: _0x4e24a1,
                    progress: _0x3a9fad,
                    step: _0x52a552
                } = _0x370da7;
                if (this['activeGenerations']['has'](_0x4e24a1)) {
                    const _0x68260a = this['activeGenerations']['get'](_0x4e24a1)['progress'];
                    _0x3a9fad > _0x68260a && (console['log']('📊\x20Generation\x20progress:\x20' + _0x3a9fad + '%\x20-\x20' + _0x52a552), this['updateProgress'](_0x4e24a1, _0x3a9fad, _0x52a552 || 'Processing...'));
                }
            }), solisWSClient['on']('video_ready', _0x3de2ab => {
                const {
                    project_id: _0x21d113
                } = _0x3de2ab;
                console['log']('✅\x20Video\x20ready\x20for\x20project:\x20' + _0x21d113), this['completeGeneration'](_0x21d113);
            }), solisWSClient['on']('error', _0x196d4e => {
                const {
                    taskId: _0x1659ed,
                    error: _0x31a3dd
                } = _0x196d4e;
                console['error']('❌\x20Generation\x20error\x20for\x20' + _0x1659ed + ':\x20' + _0x31a3dd), this['failGeneration'](_0x1659ed);
            });
        }
    ['startGeneration'](_0x1dccd9, _0x1fc8ad = '🎬\x20Starting\x20generation...') {
            this['verifyWebSocketAccess'](_0x1dccd9, _0x3c1765 => {
                if (!_0x3c1765) {
                    console['error']('❌\x20Access\x20denied\x20to\x20project\x20' + _0x1dccd9), this['failGeneration'](_0x1dccd9);
                    return;
                }
                console['log']('✅\x20Access\x20verified\x20for\x20project\x20' + _0x1dccd9), this['wrapper'] && (this['wrapper']['style']['display'] = 'flex'), this['activeGenerations']['set'](_0x1dccd9, {
                    'startTime': Date['now'](),
                    'progress': 0x0,
                    'message': _0x1fc8ad
                }), this['saveToLocalStorage'](_0x1dccd9), this['updateProgress'](_0x1dccd9, 0x0, _0x1fc8ad), console['log']('🎯\x20Started\x20progress\x20tracking\x20for\x20' + _0x1dccd9);
            });
        }
    ['verifyWebSocketAccess'](_0x39b420, _0x2a78d7) {
            fetch('/api/clips/verify-access/' + _0x39b420, {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            })['then'](_0x549c3 => _0x549c3['json']())['then'](_0x1d07c6 => {
                _0x1d07c6['allowed'] ? (console['log']('✅\x20WebSocket\x20access\x20verified\x20for\x20project\x20' + _0x39b420), _0x2a78d7(!![])) : (console['error']('❌\x20WebSocket\x20access\x20denied:\x20' + _0x1d07c6['error']), _0x2a78d7(![]));
            })['catch'](_0x3324d5 => {
                console['error']('❌\x20Error\x20verifying\x20WebSocket\x20access:', _0x3324d5), _0x2a78d7(![]);
            });
        }
    ['updateProgress'](_0x438b32, _0x747126, _0x27632e = '') {
            _0x747126 = Math['max'](0x0, Math['min'](0x64, Math['floor'](_0x747126)));
            if (this['activeGenerations']['has'](_0x438b32)) {
                const _0x347b44 = this['activeGenerations']['get'](_0x438b32);
                if (_0x747126 <= _0x347b44['progress'])
                    return;
                _0x347b44['progress'] = _0x747126, _0x347b44['message'] = _0x27632e;
            }
            const _0x2dd598 = Math['max'](...[...this['activeGenerations']['values']()]['map'](_0x4ce78b => _0x4ce78b['progress']) || [0x0]),
                _0xc01b58 = [...this['activeGenerations']['entries']()]['sort']((_0xe16b0d, _0x3063ec) => _0x3063ec[0x1]['progress'] - _0xe16b0d[0x1]['progress'])[0x0];
            _0xc01b58 && this['displayProgress'](_0xc01b58[0x1]['progress'], _0xc01b58[0x1]['message']);
        }
    ['displayProgress'](_0x3186ee, _0x2627df = '') {
            if (!this['wrapper'] || !this['progressCircle'] || !this['progressText'])
                return;
            this['wrapper']['style']['display'] = 'flex';
            const _0x233777 = _0x3186ee / 0x64 * this['CIRCLE_CIRCUMFERENCE'];
            this['progressCircle']['style']['strokeDasharray'] = _0x233777 + '\x20' + this['CIRCLE_CIRCUMFERENCE'], this['progressText']['textContent'] = _0x3186ee + '%';
            if (_0x3186ee < 0x19)
                this['progressCircle']['style']['stroke'] = '#ff6b6b';
            else {
                if (_0x3186ee < 0x32)
                    this['progressCircle']['style']['stroke'] = '#ffa500';
                else {
                    if (_0x3186ee < 0x4b)
                        this['progressCircle']['style']['stroke'] = '#ffd700';
                    else
                        _0x3186ee < 0x64 ? this['progressCircle']['style']['stroke'] = '#4ade80' : this['progressCircle']['style']['stroke'] = '#22c55e';
                }
            }
            safeLog('📊\x20Progress:\x20' + _0x3186ee + '%\x20' + (_0x2627df ? '-\x20' + _0x2627df : ''));
        }
    ['completeGeneration'](_0x4ea842) {
            this['activeGenerations']['has'](_0x4ea842) && this['activeGenerations']['delete'](_0x4ea842), this['removeFromLocalStorage'](_0x4ea842), this['activeGenerations']['size'] === 0x0 && setTimeout(() => {
                this['hide']();
            }, 0x5dc), console['log']('✅\x20Generation\x20complete\x20for\x20' + _0x4ea842);
        }
    ['failGeneration'](_0x3db7f3) {
            this['activeGenerations']['has'](_0x3db7f3) && this['activeGenerations']['delete'](_0x3db7f3), this['removeFromLocalStorage'](_0x3db7f3), this['progressCircle'] && (this['progressCircle']['style']['stroke'] = '#ef4444'), this['progressText'] && (this['progressText']['textContent'] = '❌'), setTimeout(() => {
                this['hide']();
            }, 0x7d0), console['error']('❌\x20Generation\x20failed\x20for\x20' + _0x3db7f3);
        }
    ['hide']() {
            this['wrapper'] && (this['wrapper']['style']['display'] = 'none'), this['progressCircle'] && (this['progressCircle']['style']['strokeDasharray'] = '0\x20' + this['CIRCLE_CIRCUMFERENCE'], this['progressCircle']['style']['stroke'] = '#ff7a50'), this['progressText'] && (this['progressText']['textContent'] = '0%');
        }
    ['getStatus']() {
            return {
                'isActive': this['activeGenerations']['size'] > 0x0,
                'activeCount': this['activeGenerations']['size'],
                'generations': Object['fromEntries'](this['activeGenerations'])
            };
        }
}
let _0x5994d1 = null;

function _0x2cce49() {
    document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', () => {
        _0x5994d1 = new _0x20932a(), console['log']('✅\x20Generation\x20Progress\x20Spinner\x20initialized');
    }) : (_0x5994d1 = new _0x20932a(), console['log']('✅\x20Generation\x20Progress\x20Spinner\x20initialized'));
}
if (document['currentScript'] && document['currentScript']['src'])
    _0x2cce49();
else
    typeof module !== 'undefined' && module['hot'] ? _0x2cce49() : document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x2cce49) : _0x2cce49();
typeof module !== 'undefined' && module['exports'] && (module['exports'] = {
    'GenerationProgressSpinner': _0x20932a,
    'generationProgressSpinner': _0x5994d1
});