const c = g;
(function (a, b) {
    const i = g, j = a();
    while (!![]) {
        try {
            const k = -parseInt(i(0x236)) / 0x1 * (parseInt(i(0x1ee)) / 0x2) + -parseInt(i(0x1fc)) / 0x3 * (parseInt(i(0x215)) / 0x4) + -parseInt(i(0x260)) / 0x5 + -parseInt(i(0x242)) / 0x6 * (parseInt(i(0x244)) / 0x7) + -parseInt(i(0x1d7)) / 0x8 + parseInt(i(0x249)) / 0x9 * (-parseInt(i(0x213)) / 0xa) + parseInt(i(0x23a)) / 0xb;
            if (k === b)
                break;
            else
                j['push'](j['shift']());
        } catch (l) {
            j['push'](j['shift']());
        }
    }
}(h, 0x54884));
const d = (function () {
        const i = (function () {
                let l = !![];
                return function (m, n) {
                    const o = l ? function () {
                        if (n) {
                            const p = n['apply'](m, arguments);
                            return n = null, p;
                        }
                    } : function () {
                    };
                    return l = ![], o;
                };
            }()), j = i(this, function () {
                const l = function () {
                        let p;
                        try {
                            p = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (q) {
                            p = window;
                        }
                        return p;
                    }, m = l(), n = m['console'] = m['console'] || {}, o = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let p = 0x0; p < o['length']; p++) {
                    const q = i['constructor']['prototype']['bind'](i), r = o[p], s = n[r] || q;
                    q['__proto__'] = i['bind'](i), q['toString'] = s['toString']['bind'](s), n[r] = q;
                }
            });
        j();
        let k = !![];
        return function (l, m) {
            const n = k ? function () {
                const o = g;
                if (m) {
                    const p = m[o(0x25e)](l, arguments);
                    return m = null, p;
                }
            } : function () {
            };
            return k = ![], n;
        };
    }()), e = d(this, function () {
        const a = g;
        let b;
        try {
            const k = Function(a(0x199) + a(0x259) + ');');
            b = k();
        } catch (l) {
            b = window;
        }
        const i = b[a(0x23c)] = b[a(0x23c)] || {}, j = [
                a(0x1eb),
                a(0x1a7),
                a(0x194),
                a(0x1c9),
                'exception',
                'table',
                a(0x21e)
            ];
        for (let m = 0x0; m < j['length']; m++) {
            const n = d['constructor'][a(0x19c)][a(0x241)](d), o = j[m], p = i[o] || n;
            n['__proto__'] = d[a(0x241)](d), n[a(0x23b)] = p[a(0x23b)][a(0x241)](p), i[o] = n;
        }
    });
e();
class f {
    constructor(a = null, b = {}) {
        const i = g;
        this[i(0x188)] = a || this[i(0x23e)](), this['socket'] = null, this[i(0x186)] = null, this[i(0x25f)] = null, this[i(0x202)] = b[i(0x1f7)] || 0x7530, this[i(0x223)] = b[i(0x22b)] || 0x2710, this[i(0x269)] = 0x3, this[i(0x1e1)] = b['cleanupInterval'] || 0x493e0, this[i(0x1b8)] = b[i(0x1b0)] || 0x36ee80, this['connectionHealthCheck'] = {
            'lastHeartbeatTime': null,
            'missedHeartbeats': 0x0,
            'maxMissedHeartbeats': this[i(0x269)],
            'healthCheckInterval': null
        }, this[i(0x21b)] = {
            'state': 'closed',
            'failureCount': 0x0,
            'failureThreshold': b['circuitBreakerThreshold'] || 0x5,
            'resetTimeout': b[i(0x1a4)] || 0xea60,
            'nextAttemptTime': null
        }, this['messageQueue'] = [], this[i(0x192)] = b[i(0x192)] || 0x3e8, this[i(0x1cc)] = new Map(), this[i(0x266)] = [], this[i(0x1dd)] = b[i(0x1dd)] || 0xa, this['batchTimeout'] = b['batchTimeout'] || 0x3e8, this['batchTimer'] = null, this[i(0x1a3)] = new Map(), this[i(0x1e0)] = b[i(0x1e0)] || 0x12c, this['activeTasks'] = new Map(), this[i(0x1dc)] = new Map(), this['renderingJobs'] = new Map(), this[i(0x1c5)] = new Map(), this['aiOperations'] = new Map(), this[i(0x1ad)] = new Map(), this[i(0x24d)] = new Map(), this[i(0x1f5)] = b['maxStateSize'] || 0x2710, this['callbacks'] = new Map(), this[i(0x1d8)] = {
            'attempts': 0x0,
            'maxAttempts': b['maxReconnectAttempts'] || 0xa,
            'initialDelay': 0x3e8,
            'maxDelay': 0x7530,
            'multiplier': 1.5
        }, this[i(0x1aa)] = ![], this['heartbeatInterval'] = null, console['log']('🔌\x20WebSocket\x20Client\x20v2\x20initialized');
    }
    [c(0x23e)]() {
        const a = c;
        try {
            const b = new URL(window[a(0x1c4)] || a(0x250)), i = b[a(0x196)] === a(0x18c) ? a(0x240) : a(0x1c3);
            return i + '//' + b[a(0x230)];
        } catch (j) {
            return console[a(0x1c9)](a(0x258), j), a(0x1de);
        }
    }
    [c(0x1d9)](a, b = null) {
        const i = c;
        if (!a)
            return console['error'](i(0x21c)), ![];
        this[i(0x186)] = a, this[i(0x1aa)] = ![], !b && typeof WebSocketSecurityManager !== 'undefined' && (b = new WebSocketSecurityManager());
        if (!b)
            return console['error'](i(0x26d)), ![];
        this[i(0x25f)] = b, this['securityManager'][i(0x1af)](this[i(0x1ef)](), a);
        if (typeof io === i(0x1a1))
            return console[i(0x1c9)](i(0x20b)), ![];
        if (this[i(0x21b)][i(0x1ca)] === i(0x265)) {
            const j = Date[i(0x208)]();
            if (j < this['circuitBreaker']['nextAttemptTime'])
                return console[i(0x1a7)](i(0x23d)), this[i(0x24c)](i(0x1d9), { 'userId': a }), ![];
            this[i(0x21b)][i(0x1ca)] = i(0x206);
        }
        try {
            const k = this[i(0x263)]();
            return this[i(0x270)] = io(this[i(0x188)], {
                'reconnection': !![],
                'reconnectionDelay': this[i(0x1d8)][i(0x24a)],
                'reconnectionDelayMax': this[i(0x1d8)][i(0x237)],
                'reconnectionAttempts': this[i(0x1d8)][i(0x210)],
                'transports': [
                    i(0x219),
                    i(0x1b4)
                ],
                'upgrade': ![],
                'forceNew': !![],
                'rememberUpgrade': ![],
                'sync\x20disconnect\x20on\x20unload': !![],
                'autoConnect': !![],
                'auth': k
            }), this[i(0x21d)](), this[i(0x1b1)](), this[i(0x1d2)](), this[i(0x1c7)](), console[i(0x1eb)](i(0x226)), !![];
        } catch (l) {
            return console[i(0x1c9)](i(0x252), l), this[i(0x1d3)](), ![];
        }
    }
    [c(0x263)]() {
        const a = c, b = this[a(0x1ef)]();
        if (!b)
            throw new Error('No\x20authentication\x20token\x20available');
        return this['securityManager'] && !this['securityManager']['sessionIdRefreshed'] && (this['securityManager'][a(0x1c8)] = this[a(0x25f)]['_generateSecureId'](), this[a(0x25f)][a(0x239)] = !![]), {
            'token': b,
            'userId': this[a(0x186)],
            'timestamp': Date[a(0x208)](),
            'sessionId': this[a(0x25f)]?.['sessionId']
        };
    }
    [c(0x1ef)]() {
        const a = c;
        return sessionStorage[a(0x26e)](a(0x22f)) || document[a(0x247)][a(0x181)](';\x20')[a(0x18e)](b => b[a(0x1e6)](a(0x1bb)))?.[a(0x181)]('=')[0x1] || null;
    }
    [c(0x1d3)]() {
        const a = c;
        this[a(0x21b)][a(0x1bf)]++, this[a(0x21b)][a(0x1bf)] >= this[a(0x21b)][a(0x238)] && (console[a(0x1a7)](a(0x222)), this[a(0x21b)][a(0x1ca)] = a(0x265), this[a(0x21b)][a(0x1bf)] = 0x0, this[a(0x21b)][a(0x1fd)] = Date[a(0x208)]() + this[a(0x21b)][a(0x253)]), this[a(0x25f)]?.['_logSecurityEvent'](a(0x220), { 'failureCount': this[a(0x21b)][a(0x1bf)] });
    }
    [c(0x1b1)]() {
        const a = c;
        this[a(0x193)](), this[a(0x1f7)] = setInterval(() => {
            const b = a;
            this[b(0x270)]?.[b(0x19e)] && (this[b(0x270)][b(0x1cb)]('heartbeat', {
                'timestamp': Date[b(0x208)](),
                'sessionId': this[b(0x25f)]?.[b(0x1c8)]
            }), this[b(0x1f0)]['lastHeartbeatTime'] = Date[b(0x208)]());
        }, this[a(0x202)]);
    }
    [c(0x193)]() {
        const a = c;
        this[a(0x1f7)] && (clearInterval(this[a(0x1f7)]), this['heartbeatInterval'] = null);
    }
    [c(0x1d2)]() {
        const a = c;
        this[a(0x184)](), this['connectionHealthCheck']['healthCheckInterval'] = setInterval(() => {
            const b = a;
            !this[b(0x270)]?.[b(0x19e)] ? (this[b(0x1f0)][b(0x204)]++, this['connectionHealthCheck']['missedHeartbeats'] >= this[b(0x269)] && (console[b(0x1a7)](b(0x20a)), this[b(0x270)]?.[b(0x18a)](), this['socket']?.[b(0x1d9)]())) : this[b(0x1f0)]['missedHeartbeats'] = 0x0;
        }, this[a(0x223)]);
    }
    [c(0x184)]() {
        const a = c;
        this[a(0x1f0)][a(0x22b)] && (clearInterval(this[a(0x1f0)][a(0x22b)]), this[a(0x1f0)][a(0x22b)] = null);
    }
    [c(0x1c7)]() {
        const a = c;
        setInterval(() => {
            const b = g;
            this[b(0x26b)]();
        }, this[a(0x1e1)]);
    }
    ['_performCleanup']() {
        const a = c, b = Date[a(0x208)]();
        this[a(0x274)](this[a(0x1ff)], this['STATE_ENTRY_MAX_AGE'], b), this[a(0x274)](this[a(0x1dc)], this[a(0x1b8)], b), this[a(0x274)](this['renderingJobs'], this[a(0x1b8)], b), this[a(0x274)](this['analyticsStreams'], this[a(0x1b8)], b), this[a(0x274)](this[a(0x1ed)], this[a(0x1b8)], b), this[a(0x274)](this[a(0x1ad)], this[a(0x1b8)], b);
        for (const [i, j] of this['cleanupTimers']) {
            j[a(0x20d)] && b - j['createdAt'] > this[a(0x1b8)] && (clearTimeout(j['id']), this['cleanupTimers'][a(0x1e7)](i));
        }
        console[a(0x1eb)]('🧹\x20Cleanup\x20completed');
    }
    [c(0x274)](a, b, i) {
        const j = c, k = [];
        for (const [l, m] of a) {
            const n = m?.[j(0x22d)] || m?.[j(0x197)] || i;
            n && i - n > b && k[j(0x261)](l);
        }
        k[j(0x1fa)](o => a[j(0x1e7)](o));
        if (a[j(0x1ea)] > this[j(0x1f5)]) {
            const o = a['size'] - this[j(0x1f5)];
            let p = 0x0;
            const q = Array[j(0x1c6)](a[j(0x221)]())[j(0x205)](([r, s]) => ({
                'key': r,
                'age': i - (s?.['timestamp'] || s?.[j(0x197)] || i)
            }))[j(0x209)]((r, s) => s['age'] - r[j(0x20f)])['slice'](0x0, o);
            q['forEach'](({key: r}) => {
                const s = j;
                a[s(0x1e7)](r), p++;
            }), p > 0x0 && console['warn']('⚠️\x20Removed\x20' + p + '\x20entries\x20due\x20to\x20size\x20limit');
        }
    }
    ['_setupEventListeners']() {
        const a = c;
        this[a(0x270)]['on']('connect', () => {
            const b = a;
            console[b(0x1eb)](b(0x251)), this[b(0x21b)][b(0x1bf)] = 0x0, this['circuitBreaker'][b(0x1ca)] = b(0x255), this[b(0x212)](), this[b(0x1ce)]();
        }), this[a(0x270)]['on'](a(0x18a), () => {
            const b = a;
            console[b(0x1a7)](b(0x20e));
        }), this[a(0x270)]['on'](a(0x19f), b => {
            const i = a;
            console[i(0x1c9)](i(0x207), b), this[i(0x1d3)]();
        }), this['socket']['on'](a(0x1e2), b => this[a(0x216)](b)), this[a(0x270)]['on'](a(0x233), b => this['_handleComplete'](b)), this['socket']['on'](a(0x257), b => this['_handleError'](b)), this[a(0x270)]['on'](a(0x22a), b => this[a(0x26c)](b)), this[a(0x270)]['on'](a(0x21a), b => this[a(0x1ec)](b)), this[a(0x270)]['on']('automation_error', b => this[a(0x1e8)](b)), this[a(0x270)]['on'](a(0x182), b => this[a(0x225)](b)), this['socket']['on']('rendering_complete', b => this['_handleRenderingComplete'](b)), this[a(0x270)]['on'](a(0x1a9), b => this['_handleRenderingError'](b)), this[a(0x270)]['on']('analytics_update', b => this[a(0x25a)](b)), this[a(0x270)]['on']('ai_operation_update', b => this[a(0x245)](b)), this[a(0x270)]['on'](a(0x1cf), b => this[a(0x1e5)](b)), this[a(0x270)]['on'](a(0x18b), b => this[a(0x1d0)](b)), this[a(0x270)]['on'](a(0x1a2), b => this[a(0x1ae)](b)), this[a(0x270)]['on'](a(0x195), b => {
            const i = a;
            console[i(0x1eb)]('✅\x20Joined\x20user\x20room:', b[i(0x22c)]);
        }), this[a(0x270)]['on'](a(0x273), b => this['_handleClipDeleted'](b)), this[a(0x270)]['on'](a(0x246), () => {
            const b = a;
            console[b(0x1eb)](b(0x1fb)), this[b(0x1d8)][b(0x1a6)] = 0x0, this['_joinUserRoom']();
        }), this[a(0x270)]['on'](a(0x1ab), () => {
            const b = a;
            this['reconnectConfig'][b(0x1a6)]++, console['log'](b(0x224) + this['reconnectConfig'][b(0x1a6)]);
        });
    }
    ['_joinUserRoom']() {
        const a = c;
        this[a(0x270)]?.[a(0x19e)] && this[a(0x186)] && this['socket'][a(0x1cb)](a(0x1ba), { 'user_id': this[a(0x186)] });
    }
    ['_queueOperation'](a, b) {
        const i = c;
        this[i(0x235)][i(0x1a8)] >= this[i(0x192)] && (console[i(0x1a7)](i(0x1e3)), this[i(0x235)][i(0x1d6)]());
        const j = {
            'operation': a,
            'data': b,
            'timestamp': Date[i(0x208)](),
            'retries': 0x0,
            'maxRetries': 0x3
        };
        this[i(0x235)][i(0x261)](j), this[i(0x1cc)]['set'](a + '_' + Date[i(0x208)](), j), console[i(0x1eb)]('📤\x20Queued\x20operation:\x20' + a);
    }
    [c(0x1ce)]() {
        const a = c;
        if (this['messageQueue'][a(0x1a8)] === 0x0)
            return;
        console[a(0x1eb)]('📨\x20Processing\x20' + this['messageQueue'][a(0x1a8)] + a(0x189));
        while (this['messageQueue'][a(0x1a8)] > 0x0) {
            const b = this[a(0x235)]['shift']();
            try {
                this[a(0x23f)](b);
            } catch (i) {
                console['error']('❌\x20Error\x20processing\x20queued\x20operation:', i), b[a(0x25d)] < b['maxRetries'] && (b[a(0x25d)]++, this['messageQueue'][a(0x261)](b));
            }
        }
    }
    [c(0x23f)](a) {
        const b = c, {
                operation: i,
                data: j
            } = a;
        switch (i) {
        case b(0x1b5):
            this[b(0x1b7)](j['itemId'], j[b(0x1cd)]);
            break;
        case 'register_task':
            this[b(0x1ac)](j[b(0x271)], j[b(0x1e9)]);
            break;
        default:
            console[b(0x1a7)](b(0x24f) + i);
        }
    }
    [c(0x1ac)](a, b = c(0x1b9)) {
        const i = c, j = {
                'id': a,
                'type': b,
                'startTime': Date['now'](),
                'timestamp': Date[i(0x208)](),
                'progress': 0x0,
                'status': i(0x190)
            };
        this[i(0x1ff)][i(0x1f9)](a, j), console['log'](i(0x1a5) + a);
    }
    ['_handleProgressUpdate'](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a)) {
            console[b(0x1a7)](b(0x243));
            return;
        }
        const {
            taskId: i,
            status: j,
            progress: k,
            step: l
        } = a;
        if (this['activeTasks'][b(0x227)](i)) {
            const m = this[b(0x1ff)][b(0x201)](i);
            m[b(0x22e)] = k, m[b(0x256)] = j, m['currentStep'] = l, m['timestamp'] = Date['now'](), this[b(0x211)](b(0x22e), {
                'taskId': i,
                'progress': k,
                'step': l,
                'status': j
            }), console['log']('⏳\x20' + i + ':\x20' + k + '%\x20-\x20' + l);
        }
    }
    [c(0x185)](a) {
        const b = c;
        if (!this['securityManager']?.['validateIncomingMessage'](a))
            return;
        const {
            taskId: i,
            result: j
        } = a;
        if (this[b(0x1ff)]['has'](i)) {
            const k = this[b(0x1ff)][b(0x201)](i);
            k['status'] = b(0x1f3), k[b(0x22e)] = 0x64, k['result'] = j, k['timestamp'] = Date[b(0x208)](), this['_emitCallback'](b(0x1bd), {
                'taskId': i,
                'result': j,
                'duration': Date['now']() - k['startTime']
            }), console[b(0x1eb)]('✅\x20Task\x20completed:\x20' + i);
        }
    }
    [c(0x18f)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            taskId: i,
            error: j
        } = a;
        if (this[b(0x1ff)][b(0x227)](i)) {
            const k = this[b(0x1ff)][b(0x201)](i);
            k[b(0x256)] = b(0x1c9), k[b(0x1c9)] = j, k[b(0x22d)] = Date[b(0x208)](), this[b(0x211)](b(0x1c9), {
                'taskId': i,
                'error': j
            }), console['error'](b(0x264) + i + '\x20-\x20' + j);
        }
    }
    [c(0x203)](a) {
        const b = c;
        if (!this['securityManager']?.[b(0x1f2)](a)) {
            console[b(0x1a7)](b(0x1bc));
            return;
        }
        const {
            itemId: i,
            projectId: j,
            timestamp: k
        } = a;
        this[b(0x1f4)]('clip_delete_' + i, () => {
            const l = b;
            this[l(0x1df)](i, j, k);
        }, this[b(0x1e0)]);
    }
    [c(0x1df)](a, b, i) {
        const j = c;
        try {
            this[j(0x1ff)]['delete'](a), this[j(0x1dc)][j(0x1e7)](a), this[j(0x217)][j(0x1e7)](b), this[j(0x211)]('clip_deleted', {
                'itemId': a,
                'projectId': b,
                'timestamp': i
            }), this[j(0x25f)]?.[j(0x1a0)]('clip_deleted_handled', {
                'itemId': a,
                'projectId': b
            }), console[j(0x1eb)](j(0x19d) + a + j(0x1c2) + b);
        } catch (k) {
            console[j(0x1c9)](j(0x1fe), k);
        }
    }
    ['_debounce'](a, b, i) {
        const j = c;
        this['debouncedOperations'][j(0x227)](a) && clearTimeout(this[j(0x1a3)][j(0x201)](a)[j(0x1da)]);
        const k = setTimeout(() => {
            const l = j;
            b(), this[l(0x1a3)][l(0x1e7)](a);
        }, i);
        this[j(0x1a3)][j(0x1f9)](a, {
            'timerId': k,
            'createdAt': Date[j(0x208)]()
        });
    }
    [c(0x26c)](a) {
        const b = c;
        if (!this['securityManager']?.['validateIncomingMessage'](a))
            return;
        const {
            sessionId: i,
            status: j,
            progress: k,
            step: l,
            automationType: m
        } = a;
        this['automationSessions'][b(0x1f9)](i, {
            'id': i,
            'type': m,
            'status': j,
            'progress': k,
            'step': l,
            'timestamp': Date[b(0x208)]()
        }), this[b(0x211)](b(0x22a), {
            'sessionId': i,
            'status': j,
            'progress': k,
            'step': l,
            'automationType': m
        });
    }
    [c(0x1ec)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            sessionId: i,
            result: j
        } = a;
        if (this[b(0x1dc)][b(0x227)](i)) {
            const k = this[b(0x1dc)]['get'](i);
            k[b(0x256)] = b(0x1f3), k[b(0x1b3)] = j, k[b(0x22d)] = Date[b(0x208)]();
        }
        this['_emitCallback'](b(0x21a), {
            'sessionId': i,
            'result': j
        });
    }
    [c(0x1e8)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            sessionId: i,
            error: j
        } = a;
        if (this[b(0x1dc)][b(0x227)](i)) {
            const k = this[b(0x1dc)]['get'](i);
            k['status'] = b(0x1c9), k[b(0x1c9)] = j, k[b(0x22d)] = Date['now']();
        }
        this['_emitCallback'](b(0x187), {
            'sessionId': i,
            'error': j
        });
    }
    [c(0x225)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            jobId: i,
            status: j,
            progress: k,
            currentPhase: l,
            framesProcessed: m,
            totalFrames: n
        } = a;
        this['renderingJobs'][b(0x1f9)](i, {
            'id': i,
            'status': j,
            'progress': k,
            'currentPhase': l,
            'framesProcessed': m,
            'totalFrames': n,
            'timestamp': Date[b(0x208)]()
        }), this[b(0x211)]('rendering_update', {
            'jobId': i,
            'status': j,
            'progress': k,
            'currentPhase': l,
            'framesProcessed': m,
            'totalFrames': n
        });
    }
    [c(0x1e4)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            jobId: i,
            outputPath: j,
            duration: k
        } = a;
        if (this[b(0x217)]['has'](i)) {
            const l = this[b(0x217)][b(0x201)](i);
            l['status'] = 'completed', l[b(0x1b2)] = j, l[b(0x254)] = k, l['timestamp'] = Date['now']();
        }
        this[b(0x211)](b(0x26f), {
            'jobId': i,
            'outputPath': j,
            'duration': k
        });
    }
    ['_handleRenderingError'](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            jobId: i,
            error: j,
            phase: k
        } = a;
        if (this[b(0x217)][b(0x227)](i)) {
            const l = this[b(0x217)][b(0x201)](i);
            l[b(0x256)] = 'error', l[b(0x1c9)] = j, l[b(0x1b6)] = k, l['timestamp'] = Date[b(0x208)]();
        }
        this[b(0x211)](b(0x1a9), {
            'jobId': i,
            'error': j,
            'phase': k
        });
    }
    [c(0x25a)](a) {
        const b = c;
        if (!this[b(0x25f)]?.[b(0x1f2)](a))
            return;
        const {
            streamId: i,
            metrics: j,
            timestamp: k
        } = a;
        this[b(0x1c5)]['set'](i, {
            'id': i,
            'metrics': j,
            'timestamp': k || Date[b(0x208)]()
        }), this[b(0x211)](b(0x20c), {
            'streamId': i,
            'metrics': j,
            'timestamp': k
        });
    }
    [c(0x245)](a) {
        const b = c;
        if (!this['securityManager']?.[b(0x1f2)](a))
            return;
        const {
            operationId: i,
            status: j,
            progress: k,
            operation: l,
            currentStep: m
        } = a;
        this[b(0x1ed)][b(0x1f9)](i, {
            'id': i,
            'status': j,
            'progress': k,
            'operation': l,
            'currentStep': m,
            'timestamp': Date['now']()
        }), this['_emitCallback'](b(0x1f6), {
            'operationId': i,
            'status': j,
            'progress': k,
            'operation': l,
            'currentStep': m
        });
    }
    ['_handleAIOperationComplete'](a) {
        const b = c;
        if (!this[b(0x25f)]?.['validateIncomingMessage'](a))
            return;
        const {
            operationId: i,
            result: j,
            output: k
        } = a;
        if (this[b(0x1ed)][b(0x227)](i)) {
            const l = this[b(0x1ed)][b(0x201)](i);
            l[b(0x256)] = b(0x1f3), l['result'] = j, l[b(0x21f)] = k, l[b(0x22d)] = Date[b(0x208)]();
        }
        this[b(0x211)](b(0x1cf), {
            'operationId': i,
            'result': j,
            'output': k
        });
    }
    [c(0x1d0)](a) {
        const b = c;
        if (!this['securityManager']?.['validateIncomingMessage'](a))
            return;
        const {
            operationId: i,
            error: j
        } = a;
        if (this[b(0x1ed)][b(0x227)](i)) {
            const k = this[b(0x1ed)]['get'](i);
            k[b(0x256)] = b(0x1c9), k[b(0x1c9)] = j, k[b(0x22d)] = Date[b(0x208)]();
        }
        this[b(0x211)]('ai_operation_error', {
            'operationId': i,
            'error': j
        });
    }
    [c(0x1ae)](a) {
        const b = c;
        if (!this['securityManager']?.['validateIncomingMessage'](a))
            return;
        const {
            operations: i,
            type: j
        } = a;
        if (j === b(0x1b9))
            i[b(0x1fa)](k => {
                const l = b;
                this[l(0x1ff)]['set'](k['id'], {
                    ...k,
                    'timestamp': Date[l(0x208)]()
                });
            });
        else {
            if (j === 'automation')
                i['forEach'](k => {
                    const l = b;
                    this[l(0x1dc)][l(0x1f9)](k['id'], {
                        ...k,
                        'timestamp': Date[l(0x208)]()
                    });
                });
            else {
                if (j === b(0x1c1))
                    i['forEach'](k => {
                        const l = b;
                        this[l(0x217)][l(0x1f9)](k['id'], {
                            ...k,
                            'timestamp': Date[l(0x208)]()
                        });
                    });
                else
                    j === 'ai_operations' && i[b(0x1fa)](k => {
                        const l = b;
                        this[l(0x1ed)]['set'](k['id'], {
                            ...k,
                            'timestamp': Date[l(0x208)]()
                        });
                    });
            }
        }
        console[b(0x1eb)](b(0x19a) + j + b(0x200) + i[b(0x1a8)] + b(0x268));
    }
    [c(0x1b7)](a, b) {
        const i = c;
        if (!this[i(0x270)]?.['connected'])
            return this[i(0x24c)]('delete_clip', {
                'itemId': a,
                'projectId': b
            }), ![];
        try {
            const j = 'delete_clip', k = {
                    'itemId': a,
                    'projectId': b,
                    'timestamp': Date['now'](),
                    'userId': this[i(0x186)]
                };
            if (!this[i(0x25f)][i(0x1d1)](j, k))
                return console['warn'](i(0x198)), ![];
            const l = this[i(0x25f)][i(0x25c)](j, k);
            return this[i(0x270)][i(0x1cb)](j, l), console['log']('📤\x20Clip\x20deletion\x20emitted:\x20' + a), !![];
        } catch (m) {
            return console[i(0x1c9)]('❌\x20Error\x20emitting\x20clip\x20deletion:', m), this[i(0x24c)](i(0x1b5), {
                'itemId': a,
                'projectId': b
            }), ![];
        }
    }
    [c(0x272)](a, b) {
        const i = c;
        this[i(0x270)]?.[i(0x19e)] && (this[i(0x270)][i(0x1cb)](i(0x24e), {
            'session_id': a,
            'automation_type': b
        }), console[i(0x1eb)](i(0x248) + a));
    }
    [c(0x19b)](a, b, i) {
        const j = c;
        this[j(0x270)]?.[j(0x19e)] && (this[j(0x270)][j(0x1cb)](j(0x234), {
            'job_id': a,
            'project_id': b,
            'ranks': i
        }), console[j(0x1eb)]('📝\x20Rendering\x20job\x20registered:\x20' + a));
    }
    ['registerAnalyticsStream'](a, b) {
        const i = c;
        this[i(0x270)]?.[i(0x19e)] && (this[i(0x270)]['emit']('register_analytics_stream', {
            'stream_id': a,
            'source': b
        }), console[i(0x1eb)](i(0x18d) + a));
    }
    ['registerAIOperation'](a, b) {
        const i = c;
        this[i(0x270)]?.['connected'] && (this[i(0x270)]['emit'](i(0x1c0), {
            'operation_id': a,
            'operation_type': b
        }), console['log'](i(0x191) + a));
    }
    ['on'](a, b) {
        const i = c;
        !this[i(0x1be)][i(0x227)](a) && this[i(0x1be)][i(0x1f9)](a, []), this[i(0x1be)]['get'](a)[i(0x261)](b);
    }
    ['off'](a, b) {
        const i = c;
        if (!this[i(0x1be)][i(0x227)](a))
            return;
        const j = this[i(0x1be)][i(0x201)](a), k = j[i(0x232)](b);
        k > -0x1 && j['splice'](k, 0x1);
    }
    [c(0x211)](a, b) {
        const i = c;
        if (!this['callbacks'][i(0x227)](a))
            return;
        this[i(0x1be)][i(0x201)](a)[i(0x1fa)](j => {
            const k = i;
            try {
                j(b);
            } catch (l) {
                console[k(0x1c9)](k(0x229) + a + k(0x1db), l);
            }
        });
    }
    [c(0x24b)](a = 0x0, b = 0x64) {
        const i = c, j = Array[i(0x1c6)](this[i(0x1ff)][i(0x231)]()), k = a * b, l = k + b;
        return {
            'items': j[i(0x214)](k, l),
            'total': j[i(0x1a8)],
            'page': a,
            'pageSize': b,
            'totalPages': Math[i(0x183)](j[i(0x1a8)] / b)
        };
    }
    [c(0x262)](a = 0x0, b = 0x64) {
        const i = c, j = Array[i(0x1c6)](this[i(0x1dc)][i(0x231)]()), k = a * b, l = k + b;
        return {
            'items': j[i(0x214)](k, l),
            'total': j[i(0x1a8)],
            'page': a,
            'pageSize': b,
            'totalPages': Math[i(0x183)](j['length'] / b)
        };
    }
    ['getActiveRenderingJobs'](a = 0x0, b = 0x64) {
        const i = c, j = Array[i(0x1c6)](this['renderingJobs']['values']()), k = a * b, l = k + b;
        return {
            'items': j['slice'](k, l),
            'total': j[i(0x1a8)],
            'page': a,
            'pageSize': b,
            'totalPages': Math[i(0x183)](j[i(0x1a8)] / b)
        };
    }
    [c(0x1d4)](a = 0x0, b = 0x64) {
        const i = c, j = Array[i(0x1c6)](this['aiOperations'][i(0x231)]()), k = a * b, l = k + b;
        return {
            'items': j[i(0x214)](k, l),
            'total': j[i(0x1a8)],
            'page': a,
            'pageSize': b,
            'totalPages': Math[i(0x183)](j['length'] / b)
        };
    }
    [c(0x25b)](a = 0x0, b = 0x64) {
        const i = c, j = Array[i(0x1c6)](this[i(0x1c5)][i(0x231)]()), k = a * b, l = k + b;
        return {
            'items': j[i(0x214)](k, l),
            'total': j[i(0x1a8)],
            'page': a,
            'pageSize': b,
            'totalPages': Math['ceil'](j[i(0x1a8)] / b)
        };
    }
    [c(0x267)]() {
        const a = c;
        return this[a(0x270)]?.[a(0x19e)] || ![];
    }
    [c(0x26a)]() {
        const a = c;
        return {
            'connected': this[a(0x267)](),
            'userId': this['userId'],
            'circuitBreakerState': this['circuitBreaker'][a(0x1ca)],
            'queuedMessages': this[a(0x235)][a(0x1a8)],
            'reconnectAttempts': this[a(0x1d8)][a(0x1a6)],
            'activeTasks': this[a(0x1ff)][a(0x1ea)],
            'activeAutomation': this[a(0x1dc)][a(0x1ea)]
        };
    }
    ['disconnect']() {
        const a = c;
        this[a(0x1aa)] = !![], this[a(0x193)](), this[a(0x184)](), this[a(0x270)] && this['socket'][a(0x18a)](), this[a(0x1ff)][a(0x1d5)](), this[a(0x1dc)][a(0x1d5)](), this[a(0x217)][a(0x1d5)](), this[a(0x1c5)][a(0x1d5)](), this[a(0x1ed)][a(0x1d5)](), this[a(0x1ad)][a(0x1d5)](), this[a(0x235)] = [], this['debouncedOperations']['clear'](), this[a(0x25f)]?.[a(0x1f1)](), console[a(0x1eb)](a(0x218));
    }
}
typeof module !== c(0x1a1) && module[c(0x1f8)] && (module[c(0x1f8)] = f), typeof window !== c(0x1a1) && (window[c(0x228)] = f);
function g(a, b) {
    a = a - 0x181;
    const i = h();
    let j = i[a];
    if (g['qgGvAW'] === undefined) {
        var k = function (o) {
            const p = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let q = '', r = '';
            for (let s = 0x0, t, u, v = 0x0; u = o['charAt'](v++); ~u && (t = s % 0x4 ? t * 0x40 + u : u, s++ % 0x4) ? q += String['fromCharCode'](0xff & t >> (-0x2 * s & 0x6)) : 0x0) {
                u = p['indexOf'](u);
            }
            for (let w = 0x0, x = q['length']; w < x; w++) {
                r += '%' + ('00' + q['charCodeAt'](w)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(r);
        };
        g['dtKvdP'] = k, g['OBpKaY'] = {}, g['qgGvAW'] = !![];
    }
    const l = i[0x0], m = a + l, n = g['OBpKaY'][m];
    return !n ? (j = g['dtKvdP'](j), g['OBpKaY'][m] = j) : j = n, j;
}
function h() {
    const a = [
        'y29TCgXLDgvK',
        'x2rLyM91BMnL',
        'Bwf4u3rHDgvtAxPL',
        'ywLFB3bLCMf0Aw9Ux3vWzgf0zq',
        'AgvHCNrIzwf0sw50zxj2ywW',
        'zxHWB3j0CW',
        'C2v0',
        'zM9YrwfJAa',
        '4PYfifjLy29UBMvJDgvKihrVihnLCNzLCG',
        'ndGZodi4tNjJDK1n',
        'BMv4Def0DgvTChruAw1L',
        '4P2mievYCM9YigHHBMrSAw5NignSAxaGzgvSzxrPB246',
        'ywn0AxzLvgfZA3m',
        'ktOG',
        'z2v0',
        'sevbuLrcrufux0LovevsvKfm',
        'x2HHBMrSzunSAxbezwXLDgvK',
        'BwLZC2vKsgvHCNrIzwf0CW',
        'BwfW',
        'AgfSzI1VCgvU',
        '4P2mienVBM5Ly3rPB24GzxjYB3i6',
        'BM93',
        'C29YDa',
        '4PQG77IpienVBM5Ly3rPB24GAgvHBhrOigrLz3jHzgvKlcbMB3jJAw5NihjLy29UBMvJDa',
        '4P2mifnVy2TLDc5jtYbUB3qGBg9HzgvK',
        'yw5HBhL0AwnZx3vWzgf0zq',
        'y3jLyxrLzef0',
        '4PQG77IpierPC2nVBM5Ly3rLzcbMCM9TifDLyLnVy2TLDcbZzxj2zxi',
        'ywDL',
        'Bwf4qxr0zw1WDhm',
        'x2vTAxrdywXSyMfJAW',
        'x2PVAw5vC2vYuM9VBq',
        'mti3mtbjrefbweO',
        'C2XPy2u',
        'mtzhvKnrDMK',
        'x2HHBMrSzvbYB2DYzxnZvxbKyxrL',
        'CMvUzgvYAw5NsM9ICW',
        '8j+uJcbxzwjtB2nRzxqGzgLZy29UBMvJDgvKigDYywnLzNvSBhK',
        'D2vIC29JA2v0',
        'yxv0B21HDgLVBL9JB21WBgv0zq',
        'y2LYy3vPDejYzwfRzxi',
        '4P2mifvZzxjjzcbYzxf1AxjLzcb0BYbJB25Uzwn0',
        'x3nLDhvWrxzLBNrmAxn0zw5LCNm',
        'DhjHy2u',
        'B3v0Chv0',
        'y29UBMvJDgLVBL9MywLSDxjL',
        'zw50CMLLCW',
        '4PQG77IpienPCMn1AxqGyNjLywTLCIbVCgvUzwqGzhvLihrVigv4y2vZC2L2zsbMywLSDxjLCW',
        'sevbtfrix0nirunlx0LovevsvKfm',
        '4PQG77IpifjLy29UBMvJDgLVBIbHDhrLBxb0ia',
        'x2HHBMrSzvjLBMrLCMLUz1vWzgf0zq',
        '4PYfifDLyLnVy2TLDcbJB25Uzwn0zwqGC3vJy2vZC2z1BgX5',
        'AgfZ',
        'u29SAxnbsvDLyLnVy2TLDenSAwvUDa',
        'rxjYB3iGAw4G',
        'yxv0B21HDgLVBL91CgrHDgu',
        'AgvHBhrOq2HLy2TjBNrLCNzHBa',
        'DxnLCL9Pza',
        'DgLTzxn0yw1W',
        'ChjVz3jLC3m',
        'yxv0Af90B2TLBG',
        'Ag9ZDa',
        'DMfSDwvZ',
        'Aw5KzxHpzG',
        'ChjVy2vZC2LUz19JB21WBgv0zq',
        'CMvNAxn0zxjFCMvUzgvYAw5Nx2PVyG',
        'BwvZC2fNzvf1zxvL',
        'mZa4nJHqzfjLte0',
        'Bwf4rgvSyxK',
        'zMfPBhvYzvrOCMvZAg9Sza',
        'C2vZC2LVBKLKuMvMCMvZAgvK',
        'mZi2mdu4mtvluNrPq3C',
        'Dg9tDhjPBMC',
        'y29UC29Szq',
        '4PQG77IpienPCMn1AxqGyNjLywTLCIbVCgvUlcbJyw5UB3qGy29UBMvJDa',
        'x2rLDgvJDfnLCNzLCLvYBa',
        'x2v4zwn1DgvrDwv1zwrpCgvYyxrPB24',
        'D3nZoG',
        'yMLUza',
        'nda4mZu0q3vtrwXM',
        '4PQG77IpifbYB2DYzxnZihvWzgf0zsbMywLSzwqGC2vJDxjPDhKGDMfSAwrHDgLVBG',
        'ntzps1ffs0K',
        'x2HHBMrSzufjt3bLCMf0Aw9UvxbKyxrL',
        'CMvJB25Uzwn0',
        'y29VA2LL',
        '8j+tNsbbDxrVBwf0Aw9UihnLC3nPB24GCMvNAxn0zxjLzdOG',
        'mJGYnLHNs3DnAW',
        'Aw5PDgLHBerLBgf5',
        'z2v0qwn0AxzLvgfZA3m',
        'x3f1zxvLt3bLCMf0Aw9U',
        'y2XLyw51CfrPBwvYCW',
        'CMvNAxn0zxjFyxv0B21HDgLVBL9ZzxnZAw9U',
        'vw5RBM93BIbXDwv1zwqGB3bLCMf0Aw9UoIa',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        '4PYfienVBM5Ly3rLzcb0BYbxzwjtB2nRzxqGC2vYDMvY',
        '4P2mifDLyLnVy2TLDcbJB25Uzwn0Aw9UigzHAwXLzdO',
        'CMvZzxruAw1LB3v0',
        'zhvYyxrPB24',
        'y2XVC2vK',
        'C3rHDhvZ',
        'ChjVy2vZC2LUz19LCNjVCG',
        'sw52ywXPzcbbueLFqKftrv9vuKW6',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'x2HHBMrSzufUywX5DgLJC1vWzgf0zq',
        'z2v0qw5HBhL0AwnZu3rYzwfTCW',
        'y3jLyxrLu2vJDxjLrw52zwXVCgu',
        'CMv0CMLLCW',
        'yxbWBhK',
        'C2vJDxjPDhLnyw5Hz2vY',
        'mJaZnZGZnwvvEejYyq',
        'ChvZAa',
        'z2v0qwn0AxzLqxv0B21HDgLVBLnLC3nPB25Z',
        'x2j1AwXKqxv0AenVBMzPzW',
        '4P2mifrHC2SGzxjYB3i6ia',
        'B3bLBG',
        'BwvZC2fNzujHDgnO',
        'AxndB25Uzwn0zwq',
        'igL0zw1Z',
        'tufyx01ju1nfrf9irufsvejfqvrt',
        'z2v0q29UBMvJDgLVBLn0yxr1CW',
        'x3bLCMzVCM1dBgvHBNvW',
        'x2HHBMrSzuf1Dg9TyxrPB25vCgrHDgu',
        '4P2mifnLy3vYAxr5ig1HBMfNzxiGDw5HDMfPBgfIBgu',
        'z2v0sxrLBq',
        'CMvUzgvYAw5Nx2nVBxbSzxrL',
        'C29JA2v0',
        'DgfZA0LK',
        'CMvNAxn0zxjbDxrVBwf0Aw9Uu2vZC2LVBG',
        'y2XPCf9KzwXLDgvK',
        'x2nSzwfUDxbnyxa',
        'C3bSAxq',
        'CMvUzgvYAw5Nx3vWzgf0zq',
        'y2vPBa',
        'x3n0B3bdB25Uzwn0Aw9UsgvHBhrOq2HLy2S',
        'x2HHBMrSzunVBxbSzxrL',
        'DxnLCKLK',
        'yxv0B21HDgLVBL9LCNjVCG',
        'C2vYDMvYvxjS',
        'ihf1zxvLzcbTzxnZywDLCW',
        'zgLZy29UBMvJDa',
        'ywLFB3bLCMf0Aw9Ux2vYCM9Y',
        'Ahr0Chm6',
        '8j+tNsbbBMfSExrPy3mGC3rYzwfTihjLz2LZDgvYzwq6ia',
        'zMLUza',
        'x2HHBMrSzuvYCM9Y',
        'C3rHCNrLza',
        '8j+tNsbbssbVCgvYyxrPB24GCMvNAxn0zxjLzdOG',
        'Bwf4uxvLDwvtAxPL',
        'x3n0B3bizwfYDgjLyxq',
        'Aw5MBW',
        'CM9VBv9QB2LUzwq',
        'ChjVDg9JB2W',
        'C3rHCNruAw1L',
        '4PQG77Ipie1LC3nHz2uGDMfSAwrHDgLVBIbMywLSzwq',
        'CMv0DxjUicHMDw5JDgLVBIGPia',
        '8j+tPIbcyxrJAcbVCgvYyxrPB25ZicG',
        'CMvNAxn0zxjszw5KzxjPBMDkB2i',
        'ChjVDg90ExbL',
        '8j+xKE+4JYbdBgLWigrLBgv0zwq6ieLepq',
        'y29UBMvJDgvK',
        'y29UBMvJDf9LCNjVCG',
        'x2XVz1nLy3vYAxr5rxzLBNq',
        'Dw5KzwzPBMvK',
        'yMf0y2HFB3bLCMf0Aw9UCW',
        'zgvIB3vUy2vKt3bLCMf0Aw9UCW',
        'y2LYy3vPDejYzwfRzxjszxnLDfrPBwvVDxq',
        '8j+tNsbuyxnRihjLz2LZDgvYzwq6ia',
        'yxr0zw1WDhm',
        'D2fYBG',
        'BgvUz3rO',
        'CMvUzgvYAw5Nx2vYCM9Y',
        'Axnnyw51ywXSEurPC2nVBM5Ly3rLza',
        'CMvJB25Uzwn0x2f0DgvTChq',
        'CMvNAxn0zxjuyxnR',
        'CgvUzgLUz09WzxjHDgLVBNm',
        'x2HHBMrSzujHDgnOt3bLCMf0Aw9UCW',
        'Aw5PDa',
        'C3rHDgvnyxHbz2u',
        'x3n0yxj0sgvHCNrIzwf0',
        'B3v0Chv0ugf0Aa',
        'CMvZDwX0',
        'Cg9SBgLUzW',
        'zgvSzxrLx2nSAxa',
        'zMfPBgvKugHHC2u',
        'zw1PDenSAxbezwXLDgLVBG',
        'u1rbvevFru5uuLLFtufyx0fhrq',
        'ChjVy2vZC2LUzW',
        'AM9PBL91C2vYx3jVB20',
        'yxv0Af90B2TLBJ0',
        '4PQG77IpienSAxaGzgvSzxrPB24GzMfPBgvKihzHBgLKyxrPB24',
        'y29TCgXLDgu',
        'y2fSBgjHy2TZ',
        'zMfPBhvYzunVDw50',
        'CMvNAxn0zxjFywLFB3bLCMf0Aw9U',
        'CMvUzgvYAw5N',
        'lcbqCM9Qzwn0pq',
        'D3m6',
        'qvbjx0jbu0vFvvjm',
        'yw5HBhL0AwnZu3rYzwfTCW',
        'zNjVBq',
        'x3n0yxj0q2XLyw51CfbYB2nLC3m',
        'C2vZC2LVBKLK',
        'zxjYB3i',
        'C3rHDgu',
        'zw1PDa',
        'CxvLDwvKt3bLCMf0Aw9UCW',
        'ChjVAMvJDeLK',
        'x3bYB2nLC3nrDwv1zwrnzxnZywDLCW',
        'ywLFB3bLCMf0Aw9Ux2nVBxbSzxrL',
        'x2HHBMrSzufjt3bLCMf0Aw9UrxjYB3i',
        'DMfSAwrHDgvnzxnZywDL',
        'x3n0yxj0q29UBMvJDgLVBKHLywX0AenOzwnR',
        'x2HHBMrSzunVBM5Ly3rPB25gywLSDxjL',
        'z2v0qwn0AxzLquLpCgvYyxrPB25Z',
        'y2XLyxi',
        'C2HPzNq',
        'mtC2mZiWmffxvw51vq',
        'CMvJB25Uzwn0q29UzMLN',
        'y29UBMvJDa',
        'DgLTzxjjza',
        'ignHBgXIywnRoG',
        'yxv0B21HDgLVBLnLC3nPB25Z',
        'yMf0y2HtAxPL',
        'D3nZoI8VyxbPlNnVBgLZywKUDMLKzw8',
        'x3bLCMzVCM1dBgLWrgvSzxrPB24',
        'zgvIB3vUy2vezwXHEq',
        'q0Xfqu5vuf9jtLrfuLzbta',
        'ChjVy2vZC2LUz191CgrHDgu',
        '4PQG77Ipie1LC3nHz2uGCxvLDwuGzNvSBcWGzhjVChbPBMCGB2XKzxn0ig1LC3nHz2u',
        'x2HHBMrSzvjLBMrLCMLUz0nVBxbSzxrL',
        'x2HHBMrSzufjt3bLCMf0Aw9Uq29TCgXLDgu',
        'C3rHCNrZv2L0Aa',
        'zgvSzxrL',
        'x2HHBMrSzuf1Dg9TyxrPB25fCNjVCG',
        'DgfZA1r5Cgu',
        'C2L6zq',
        'Bg9N',
        'x2HHBMrSzuf1Dg9TyxrPB25dB21WBgv0zq',
        'ywLpCgvYyxrPB25Z',
        'mJzWv2XHvKW',
        'x2DLDef1DgHuB2TLBG',
        'y29UBMvJDgLVBKHLywX0AenOzwnR',
        'zgvZDhjVEq',
        'DMfSAwrHDgvjBMnVBwLUz01LC3nHz2u'
    ];
    return h = function () {
        return a;
    }, h();
}