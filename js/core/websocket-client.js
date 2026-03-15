class _0x275d2e {
    constructor(_0x722faa = null, _0x38b50d = {}) {
            this['serverUrl'] = _0x722faa || this['_detectServerUrl'](), this['socket'] = null, this['userId'] = null, this['securityManager'] = null, this['HEARTBEAT_INTERVAL'] = _0x38b50d['heartbeatInterval'] || 0x7530, this['HEALTH_CHECK_INTERVAL'] = _0x38b50d['healthCheckInterval'] || 0x2710, this['MAX_MISSED_HEARTBEATS'] = 0x3, this['CLEANUP_INTERVAL'] = _0x38b50d['cleanupInterval'] || 0x493e0, this['STATE_ENTRY_MAX_AGE'] = _0x38b50d['stateMaxAge'] || 0x36ee80, this['connectionHealthCheck'] = {
                'lastHeartbeatTime': null,
                'missedHeartbeats': 0x0,
                'maxMissedHeartbeats': this['MAX_MISSED_HEARTBEATS'],
                'healthCheckInterval': null
            }, this['circuitBreaker'] = {
                'state': 'closed',
                'failureCount': 0x0,
                'failureThreshold': _0x38b50d['circuitBreakerThreshold'] || 0x5,
                'resetTimeout': _0x38b50d['circuitBreakerResetTimeout'] || 0xea60,
                'nextAttemptTime': null
            }, this['messageQueue'] = [], this['maxQueueSize'] = _0x38b50d['maxQueueSize'] || 0x3e8, this['queuedOperations'] = new Map(), this['messageBatch'] = [], this['batchSize'] = _0x38b50d['batchSize'] || 0xa, this['batchTimeout'] = _0x38b50d['batchTimeout'] || 0x3e8, this['batchTimer'] = null, this['debouncedOperations'] = new Map(), this['debounceDelay'] = _0x38b50d['debounceDelay'] || 0x12c, this['activeTasks'] = new Map(), this['automationSessions'] = new Map(), this['renderingJobs'] = new Map(), this['analyticsStreams'] = new Map(), this['aiOperations'] = new Map(), this['pendingOperations'] = new Map(), this['cleanupTimers'] = new Map(), this['maxStateSize'] = _0x38b50d['maxStateSize'] || 0x2710, this['callbacks'] = new Map(), this['reconnectConfig'] = {
                'attempts': 0x0,
                'maxAttempts': _0x38b50d['maxReconnectAttempts'] || 0xa,
                'initialDelay': 0x3e8,
                'maxDelay': 0x7530,
                'multiplier': 1.5
            }, this['isManuallyDisconnected'] = ![], this['heartbeatInterval'] = null, console['log']('🔌\x20WebSocket\x20Client\x20v2\x20initialized');
        }
    ['_detectServerUrl']() {
            try {
                const _0x4b223c = new URL(window['API_BASE_URL'] || 'https://api.solisai.video/api'),
                    _0x47f286 = _0x4b223c['protocol'] === 'https:' ? 'wss:' : 'ws:';
                return _0x47f286 + '//' + _0x4b223c['host'];
            } catch (_0x22c22d) {
                return console['error']('Invalid\x20API_BASE_URL:', _0x22c22d), 'wss://api.solisai.video';
            }
        }
    ['connect'](_0x523798, _0x2318c4 = null) {
            if (!_0x523798)
                return console['error']('❌\x20UserId\x20required\x20to\x20connect'), ![];
            this['userId'] = _0x523798, this['isManuallyDisconnected'] = ![];
            !_0x2318c4 && typeof WebSocketSecurityManager !== 'undefined' && (_0x2318c4 = new WebSocketSecurityManager());
            if (!_0x2318c4)
                return console['error']('❌\x20Security\x20manager\x20unavailable'), ![];
            this['securityManager'] = _0x2318c4, this['securityManager']['init'](this['_getAuthToken'](), _0x523798);
            if (typeof io === 'undefined')
                return console['error']('❌\x20Socket.IO\x20not\x20loaded'), ![];
            if (this['circuitBreaker']['state'] === 'open') {
                const _0x4bb2a9 = Date['now']();
                if (_0x4bb2a9 < this['circuitBreaker']['nextAttemptTime'])
                    return console['warn']('⚠️\x20Circuit\x20breaker\x20open,\x20cannot\x20connect'), this['_queueOperation']('connect', {
                        'userId': _0x523798
                    }), ![];
                this['circuitBreaker']['state'] = 'half-open';
            }
            try {
                const _0x34ff67 = this['_buildAuthConfig']();
                return this['socket'] = io(this['serverUrl'], {
                    'reconnection': !![],
                    'reconnectionDelay': this['reconnectConfig']['initialDelay'],
                    'reconnectionDelayMax': this['reconnectConfig']['maxDelay'],
                    'reconnectionAttempts': this['reconnectConfig']['maxAttempts'],
                    'transports': [
                    'websocket',
                    'polling'
                ],
                    'upgrade': ![],
                    'forceNew': !![],
                    'rememberUpgrade': ![],
                    'sync\x20disconnect\x20on\x20unload': !![],
                    'autoConnect': !![],
                    'auth': _0x34ff67
                }), this['_setupEventListeners'](), this['_startHeartbeat'](), this['_startConnectionHealthCheck'](), this['_startCleanupProcess'](), console['log']('✅\x20WebSocket\x20connected\x20successfully'), !![];
            } catch (_0x5bb5c2) {
                return console['error']('❌\x20WebSocket\x20connection\x20failed:', _0x5bb5c2), this['_handleConnectionFailure'](), ![];
            }
        }
    ['_buildAuthConfig']() {
            const _0x1cad8b = this['_getAuthToken']();
            if (!_0x1cad8b)
                throw new Error('No\x20authentication\x20token\x20available');
            return this['securityManager'] && !this['securityManager']['sessionIdRefreshed'] && (this['securityManager']['sessionId'] = this['securityManager']['_generateSecureId'](), this['securityManager']['sessionIdRefreshed'] = !![]), {
                'token': _0x1cad8b,
                'userId': this['userId'],
                'timestamp': Date['now'](),
                'sessionId': this['securityManager']?.['sessionId']
            };
        }
    ['_getAuthToken']() {
            return sessionStorage['getItem']('auth_token') || document['cookie']['split'](';\x20')['find'](_0x319c2e => _0x319c2e['startsWith']('auth_token='))?.['split']('=')[0x1] || null;
        }
    ['_handleConnectionFailure']() {
            this['circuitBreaker']['failureCount']++, this['circuitBreaker']['failureCount'] >= this['circuitBreaker']['failureThreshold'] && (console['warn']('⚠️\x20Circuit\x20breaker\x20opened\x20due\x20to\x20excessive\x20failures'), this['circuitBreaker']['state'] = 'open', this['circuitBreaker']['failureCount'] = 0x0, this['circuitBreaker']['nextAttemptTime'] = Date['now']() + this['circuitBreaker']['resetTimeout']), this['securityManager']?.['_logSecurityEvent']('connection_failure', {
                'failureCount': this['circuitBreaker']['failureCount']
            });
        }
    ['_startHeartbeat']() {
            this['_stopHeartbeat'](), this['heartbeatInterval'] = setInterval(() => {
                this['socket']?.['connected'] && (this['socket']['emit']('heartbeat', {
                    'timestamp': Date['now'](),
                    'sessionId': this['securityManager']?.['sessionId']
                }), this['connectionHealthCheck']['lastHeartbeatTime'] = Date['now']());
            }, this['HEARTBEAT_INTERVAL']);
        }
    ['_stopHeartbeat']() {
            this['heartbeatInterval'] && (clearInterval(this['heartbeatInterval']), this['heartbeatInterval'] = null);
        }
    ['_startConnectionHealthCheck']() {
            this['_stopConnectionHealthCheck'](), this['connectionHealthCheck']['healthCheckInterval'] = setInterval(() => {
                !this['socket']?.['connected'] ? (this['connectionHealthCheck']['missedHeartbeats']++, this['connectionHealthCheck']['missedHeartbeats'] >= this['MAX_MISSED_HEARTBEATS'] && (console['warn']('⚠️\x20Connection\x20health\x20degraded,\x20forcing\x20reconnect'), this['socket']?.['disconnect'](), this['socket']?.['connect']())) : this['connectionHealthCheck']['missedHeartbeats'] = 0x0;
            }, this['HEALTH_CHECK_INTERVAL']);
        }
    ['_stopConnectionHealthCheck']() {
            this['connectionHealthCheck']['healthCheckInterval'] && (clearInterval(this['connectionHealthCheck']['healthCheckInterval']), this['connectionHealthCheck']['healthCheckInterval'] = null);
        }
    ['_startCleanupProcess']() {
            setInterval(() => {
                this['_performCleanup']();
            }, this['CLEANUP_INTERVAL']);
        }
    ['_performCleanup']() {
            const _0x3ecd19 = Date['now']();
            this['_cleanupMap'](this['activeTasks'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19), this['_cleanupMap'](this['automationSessions'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19), this['_cleanupMap'](this['renderingJobs'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19), this['_cleanupMap'](this['analyticsStreams'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19), this['_cleanupMap'](this['aiOperations'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19), this['_cleanupMap'](this['pendingOperations'], this['STATE_ENTRY_MAX_AGE'], _0x3ecd19);
            for (const [_0x47171e, _0x3ced8b] of this['cleanupTimers']) {
                _0x3ced8b['createdAt'] && _0x3ecd19 - _0x3ced8b['createdAt'] > this['STATE_ENTRY_MAX_AGE'] && (clearTimeout(_0x3ced8b['id']), this['cleanupTimers']['delete'](_0x47171e));
            }
            console['log']('🧹\x20Cleanup\x20completed');
        }
    ['_cleanupMap'](_0x1d9dd8, _0x1be1ae, _0x1978f3) {
            const _0x40a1b8 = [];
            for (const [_0x2bcc1d, _0x580ee5] of _0x1d9dd8) {
                const _0x62925d = _0x580ee5?.['timestamp'] || _0x580ee5?.['startTime'] || _0x1978f3;
                _0x62925d && _0x1978f3 - _0x62925d > _0x1be1ae && _0x40a1b8['push'](_0x2bcc1d);
            }
            _0x40a1b8['forEach'](_0x3853e9 => _0x1d9dd8['delete'](_0x3853e9));
            if (_0x1d9dd8['size'] > this['maxStateSize']) {
                const _0x59146d = _0x1d9dd8['size'] - this['maxStateSize'];
                let _0x46db92 = 0x0;
                const _0x5f39a2 = Array['from'](_0x1d9dd8['entries']())['map'](([_0x33a9e9, _0xbdcc76]) => ({
                    'key': _0x33a9e9,
                    'age': _0x1978f3 - (_0xbdcc76?.['timestamp'] || _0xbdcc76?.['startTime'] || _0x1978f3)
                }))['sort']((_0x1e377c, _0x268c8c) => _0x268c8c['age'] - _0x1e377c['age'])['slice'](0x0, _0x59146d);
                _0x5f39a2['forEach'](({
                    key: _0x5c9106
                }) => {
                    _0x1d9dd8['delete'](_0x5c9106), _0x46db92++;
                }), _0x46db92 > 0x0 && console['warn']('⚠️\x20Removed\x20' + _0x46db92 + '\x20entries\x20due\x20to\x20size\x20limit');
            }
        }
    ['_setupEventListeners']() {
            this['socket']['on']('connect', () => {
                console['log']('✅\x20Connected\x20to\x20WebSocket\x20server'), this['circuitBreaker']['failureCount'] = 0x0, this['circuitBreaker']['state'] = 'closed', this['_joinUserRoom'](), this['_processQueuedMessages']();
            }), this['socket']['on']('disconnect', () => {
                console['warn']('⚠️\x20Disconnected\x20from\x20WebSocket\x20server');
            }), this['socket']['on']('connect_error', _0x52ad16 => {
                console['error']('❌\x20Connection\x20error:', _0x52ad16), this['_handleConnectionFailure']();
            }), this['socket']['on']('processing_update', _0x14a7cc => this['_handleProgressUpdate'](_0x14a7cc)), this['socket']['on']('processing_complete', _0x28f452 => this['_handleComplete'](_0x28f452)), this['socket']['on']('processing_error', _0x3b3cfe => this['_handleError'](_0x3b3cfe)), this['socket']['on']('automation_update', _0x236f08 => this['_handleAutomationUpdate'](_0x236f08)), this['socket']['on']('automation_complete', _0x23bd5f => this['_handleAutomationComplete'](_0x23bd5f)), this['socket']['on']('automation_error', _0x1e7c56 => this['_handleAutomationError'](_0x1e7c56)), this['socket']['on']('rendering_update', _0x4611d6 => this['_handleRenderingUpdate'](_0x4611d6)), this['socket']['on']('rendering_complete', _0x5d0ddb => this['_handleRenderingComplete'](_0x5d0ddb)), this['socket']['on']('rendering_error', _0x26b9f4 => this['_handleRenderingError'](_0x26b9f4)), this['socket']['on']('analytics_update', _0x496c62 => this['_handleAnalyticsUpdate'](_0x496c62)), this['socket']['on']('ai_operation_update', _0x55247b => this['_handleAIOperationUpdate'](_0x55247b)), this['socket']['on']('ai_operation_complete', _0x4dcb64 => this['_handleAIOperationComplete'](_0x4dcb64)), this['socket']['on']('ai_operation_error', _0x35837a => this['_handleAIOperationError'](_0x35837a)), this['socket']['on']('batch_operations', _0x1c5d9f => this['_handleBatchOperations'](_0x1c5d9f)), this['socket']['on']('room_joined', _0xe884b => {
                console['log']('✅\x20Joined\x20user\x20room:', _0xe884b['user_id']);
            }), this['socket']['on']('clip_deleted', _0x23d78a => this['_handleClipDeleted'](_0x23d78a)), this['socket']['on']('reconnect', () => {
                console['log']('✅\x20Reconnected\x20to\x20server'), this['reconnectConfig']['attempts'] = 0x0, this['_joinUserRoom']();
            }), this['socket']['on']('reconnect_attempt', () => {
                this['reconnectConfig']['attempts']++, console['log']('⚠️\x20Reconnection\x20attempt\x20' + this['reconnectConfig']['attempts']);
            });
        }
    ['_joinUserRoom']() {
            this['socket']?.['connected'] && this['userId'] && this['socket']['emit']('join_user_room', {
                'user_id': this['userId']
            });
        }
    ['_queueOperation'](_0x2c6081, _0x33afde) {
            this['messageQueue']['length'] >= this['maxQueueSize'] && (console['warn']('⚠️\x20Message\x20queue\x20full,\x20dropping\x20oldest\x20message'), this['messageQueue']['shift']());
            const _0x563421 = {
                'operation': _0x2c6081,
                'data': _0x33afde,
                'timestamp': Date['now'](),
                'retries': 0x0,
                'maxRetries': 0x3
            };
            this['messageQueue']['push'](_0x563421), this['queuedOperations']['set'](_0x2c6081 + '_' + Date['now'](), _0x563421), console['log']('📤\x20Queued\x20operation:\x20' + _0x2c6081);
        }
    ['_processQueuedMessages']() {
            if (this['messageQueue']['length'] === 0x0)
                return;
            console['log']('📨\x20Processing\x20' + this['messageQueue']['length'] + '\x20queued\x20messages');
            while (this['messageQueue']['length'] > 0x0) {
                const _0x45a964 = this['messageQueue']['shift']();
                try {
                    this['_executeQueuedOperation'](_0x45a964);
                } catch (_0x44a831) {
                    console['error']('❌\x20Error\x20processing\x20queued\x20operation:', _0x44a831), _0x45a964['retries'] < _0x45a964['maxRetries'] && (_0x45a964['retries']++, this['messageQueue']['push'](_0x45a964));
                }
            }
        }
    ['_executeQueuedOperation'](_0x13b6f3) {
            const {
                operation: _0x523556,
                data: _0x59cb8d
            } = _0x13b6f3;
            switch (_0x523556) {
                case 'delete_clip':
                    this['emitClipDeletion'](_0x59cb8d['itemId'], _0x59cb8d['projectId']);
                    break;
                case 'register_task':
                    this['registerTask'](_0x59cb8d['taskId'], _0x59cb8d['taskType']);
                    break;
                default:
                    console['warn']('Unknown\x20queued\x20operation:\x20' + _0x523556);
            }
        }
    ['registerTask'](_0x2b00ea, _0x3d0cc3 = 'processing') {
            const _0x284b02 = {
                'id': _0x2b00ea,
                'type': _0x3d0cc3,
                'startTime': Date['now'](),
                'timestamp': Date['now'](),
                'progress': 0x0,
                'status': 'started'
            };
            this['activeTasks']['set'](_0x2b00ea, _0x284b02), console['log']('📝\x20Task\x20registered:\x20' + _0x2b00ea);
        }
    ['_handleProgressUpdate'](_0x40f329) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x40f329)) {
                console['warn']('⚠️\x20Progress\x20update\x20failed\x20security\x20validation');
                return;
            }
            const {
                taskId: _0x2092bc,
                status: _0x294ed3,
                progress: _0x3280ad,
                step: _0x5dfd45
            } = _0x40f329;
            if (this['activeTasks']['has'](_0x2092bc)) {
                const _0x1b0ba1 = this['activeTasks']['get'](_0x2092bc);
                _0x1b0ba1['progress'] = _0x3280ad, _0x1b0ba1['status'] = _0x294ed3, _0x1b0ba1['currentStep'] = _0x5dfd45, _0x1b0ba1['timestamp'] = Date['now'](), this['_emitCallback']('progress', {
                    'taskId': _0x2092bc,
                    'progress': _0x3280ad,
                    'step': _0x5dfd45,
                    'status': _0x294ed3
                }), console['log']('⏳\x20' + _0x2092bc + ':\x20' + _0x3280ad + '%\x20-\x20' + _0x5dfd45);
            }
        }
    ['_handleComplete'](_0xd2086d) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0xd2086d))
                return;
            const {
                taskId: _0x2becd6,
                result: _0x59bda2
            } = _0xd2086d;
            if (this['activeTasks']['has'](_0x2becd6)) {
                const _0x24c19d = this['activeTasks']['get'](_0x2becd6);
                _0x24c19d['status'] = 'completed', _0x24c19d['progress'] = 0x64, _0x24c19d['result'] = _0x59bda2, _0x24c19d['timestamp'] = Date['now'](), this['_emitCallback']('complete', {
                    'taskId': _0x2becd6,
                    'result': _0x59bda2,
                    'duration': Date['now']() - _0x24c19d['startTime']
                }), console['log']('✅\x20Task\x20completed:\x20' + _0x2becd6);
            }
        }
    ['_handleError'](_0x53adea) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x53adea))
                return;
            const {
                taskId: _0x253f64,
                error: _0x2b776a
            } = _0x53adea;
            if (this['activeTasks']['has'](_0x253f64)) {
                const _0x3454b0 = this['activeTasks']['get'](_0x253f64);
                _0x3454b0['status'] = 'error', _0x3454b0['error'] = _0x2b776a, _0x3454b0['timestamp'] = Date['now'](), this['_emitCallback']('error', {
                    'taskId': _0x253f64,
                    'error': _0x2b776a
                }), console['error']('❌\x20Task\x20error:\x20' + _0x253f64 + '\x20-\x20' + _0x2b776a);
            }
        }
    ['_handleClipDeleted'](_0x582f34) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x582f34)) {
                console['warn']('⚠️\x20Clip\x20deletion\x20failed\x20validation');
                return;
            }
            const {
                itemId: _0xf705e7,
                projectId: _0x48da5a,
                timestamp: _0x5b8f51
            } = _0x582f34;
            this['_debounce']('clip_delete_' + _0xf705e7, () => {
                this['_performClipDeletion'](_0xf705e7, _0x48da5a, _0x5b8f51);
            }, this['debounceDelay']);
        }
    ['_performClipDeletion'](_0x3a6b27, _0x5d1b8b, _0x56dc11) {
            try {
                this['activeTasks']['delete'](_0x3a6b27), this['automationSessions']['delete'](_0x3a6b27), this['renderingJobs']['delete'](_0x5d1b8b), this['_emitCallback']('clip_deleted', {
                    'itemId': _0x3a6b27,
                    'projectId': _0x5d1b8b,
                    'timestamp': _0x56dc11
                }), this['securityManager']?.['_logSecurityEvent']('clip_deleted_handled', {
                    'itemId': _0x3a6b27,
                    'projectId': _0x5d1b8b
                }), console['log']('🗑️\x20Clip\x20deleted:\x20ID=' + _0x3a6b27 + ',\x20Project=' + _0x5d1b8b);
            } catch (_0x502c56) {
                console['error']('❌\x20Error\x20handling\x20clip\x20deletion:', _0x502c56);
            }
        }
    ['_debounce'](_0xc4eb76, _0x40ab3d, _0x55e7d5) {
            this['debouncedOperations']['has'](_0xc4eb76) && clearTimeout(this['debouncedOperations']['get'](_0xc4eb76)['timerId']);
            const _0x9dda0d = setTimeout(() => {
                _0x40ab3d(), this['debouncedOperations']['delete'](_0xc4eb76);
            }, _0x55e7d5);
            this['debouncedOperations']['set'](_0xc4eb76, {
                'timerId': _0x9dda0d,
                'createdAt': Date['now']()
            });
        }
    ['_handleAutomationUpdate'](_0x8c4761) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x8c4761))
                return;
            const {
                sessionId: _0x54ae0a,
                status: _0x3cab77,
                progress: _0xa4a44,
                step: _0x580bb6,
                automationType: _0x2f308a
            } = _0x8c4761;
            this['automationSessions']['set'](_0x54ae0a, {
                'id': _0x54ae0a,
                'type': _0x2f308a,
                'status': _0x3cab77,
                'progress': _0xa4a44,
                'step': _0x580bb6,
                'timestamp': Date['now']()
            }), this['_emitCallback']('automation_update', {
                'sessionId': _0x54ae0a,
                'status': _0x3cab77,
                'progress': _0xa4a44,
                'step': _0x580bb6,
                'automationType': _0x2f308a
            });
        }
    ['_handleAutomationComplete'](_0x121a9c) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x121a9c))
                return;
            const {
                sessionId: _0x2d4500,
                result: _0x7054c4
            } = _0x121a9c;
            if (this['automationSessions']['has'](_0x2d4500)) {
                const _0x1c53fb = this['automationSessions']['get'](_0x2d4500);
                _0x1c53fb['status'] = 'completed', _0x1c53fb['result'] = _0x7054c4, _0x1c53fb['timestamp'] = Date['now']();
            }
            this['_emitCallback']('automation_complete', {
                'sessionId': _0x2d4500,
                'result': _0x7054c4
            });
        }
    ['_handleAutomationError'](_0x511214) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x511214))
                return;
            const {
                sessionId: _0x47377b,
                error: _0x1e668c
            } = _0x511214;
            if (this['automationSessions']['has'](_0x47377b)) {
                const _0x5c93e2 = this['automationSessions']['get'](_0x47377b);
                _0x5c93e2['status'] = 'error', _0x5c93e2['error'] = _0x1e668c, _0x5c93e2['timestamp'] = Date['now']();
            }
            this['_emitCallback']('automation_error', {
                'sessionId': _0x47377b,
                'error': _0x1e668c
            });
        }
    ['_handleRenderingUpdate'](_0x464d49) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x464d49))
                return;
            const {
                jobId: _0x4a521a,
                status: _0x5d16a8,
                progress: _0x5d0979,
                currentPhase: _0x196843,
                framesProcessed: _0x37821b,
                totalFrames: _0x3d4bd8
            } = _0x464d49;
            this['renderingJobs']['set'](_0x4a521a, {
                'id': _0x4a521a,
                'status': _0x5d16a8,
                'progress': _0x5d0979,
                'currentPhase': _0x196843,
                'framesProcessed': _0x37821b,
                'totalFrames': _0x3d4bd8,
                'timestamp': Date['now']()
            }), this['_emitCallback']('rendering_update', {
                'jobId': _0x4a521a,
                'status': _0x5d16a8,
                'progress': _0x5d0979,
                'currentPhase': _0x196843,
                'framesProcessed': _0x37821b,
                'totalFrames': _0x3d4bd8
            });
        }
    ['_handleRenderingComplete'](_0xc5eae4) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0xc5eae4))
                return;
            const {
                jobId: _0x11b85b,
                outputPath: _0x14b482,
                duration: _0x368cb2
            } = _0xc5eae4;
            if (this['renderingJobs']['has'](_0x11b85b)) {
                const _0x1b4e19 = this['renderingJobs']['get'](_0x11b85b);
                _0x1b4e19['status'] = 'completed', _0x1b4e19['outputPath'] = _0x14b482, _0x1b4e19['duration'] = _0x368cb2, _0x1b4e19['timestamp'] = Date['now']();
            }
            this['_emitCallback']('rendering_complete', {
                'jobId': _0x11b85b,
                'outputPath': _0x14b482,
                'duration': _0x368cb2
            });
        }
    ['_handleRenderingError'](_0x56f54c) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x56f54c))
                return;
            const {
                jobId: _0x2f45d7,
                error: _0x10fab6,
                phase: _0xb261c8
            } = _0x56f54c;
            if (this['renderingJobs']['has'](_0x2f45d7)) {
                const _0x18bc68 = this['renderingJobs']['get'](_0x2f45d7);
                _0x18bc68['status'] = 'error', _0x18bc68['error'] = _0x10fab6, _0x18bc68['failedPhase'] = _0xb261c8, _0x18bc68['timestamp'] = Date['now']();
            }
            this['_emitCallback']('rendering_error', {
                'jobId': _0x2f45d7,
                'error': _0x10fab6,
                'phase': _0xb261c8
            });
        }
    ['_handleAnalyticsUpdate'](_0x4c8bf3) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x4c8bf3))
                return;
            const {
                streamId: _0x5a270b,
                metrics: _0x2a5682,
                timestamp: _0x3f1f27
            } = _0x4c8bf3;
            this['analyticsStreams']['set'](_0x5a270b, {
                'id': _0x5a270b,
                'metrics': _0x2a5682,
                'timestamp': _0x3f1f27 || Date['now']()
            }), this['_emitCallback']('analytics_update', {
                'streamId': _0x5a270b,
                'metrics': _0x2a5682,
                'timestamp': _0x3f1f27
            });
        }
    ['_handleAIOperationUpdate'](_0x52cc98) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x52cc98))
                return;
            const {
                operationId: _0xded363,
                status: _0x5b5f4b,
                progress: _0x370f41,
                operation: _0x35191d,
                currentStep: _0x5d19cf
            } = _0x52cc98;
            this['aiOperations']['set'](_0xded363, {
                'id': _0xded363,
                'status': _0x5b5f4b,
                'progress': _0x370f41,
                'operation': _0x35191d,
                'currentStep': _0x5d19cf,
                'timestamp': Date['now']()
            }), this['_emitCallback']('ai_operation_update', {
                'operationId': _0xded363,
                'status': _0x5b5f4b,
                'progress': _0x370f41,
                'operation': _0x35191d,
                'currentStep': _0x5d19cf
            });
        }
    ['_handleAIOperationComplete'](_0x2fecea) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x2fecea))
                return;
            const {
                operationId: _0x104cbf,
                result: _0x3f3db9,
                output: _0x2ac438
            } = _0x2fecea;
            if (this['aiOperations']['has'](_0x104cbf)) {
                const _0x36d1d0 = this['aiOperations']['get'](_0x104cbf);
                _0x36d1d0['status'] = 'completed', _0x36d1d0['result'] = _0x3f3db9, _0x36d1d0['output'] = _0x2ac438, _0x36d1d0['timestamp'] = Date['now']();
            }
            this['_emitCallback']('ai_operation_complete', {
                'operationId': _0x104cbf,
                'result': _0x3f3db9,
                'output': _0x2ac438
            });
        }
    ['_handleAIOperationError'](_0x4c6758) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x4c6758))
                return;
            const {
                operationId: _0x270f79,
                error: _0x586d73
            } = _0x4c6758;
            if (this['aiOperations']['has'](_0x270f79)) {
                const _0x3c6005 = this['aiOperations']['get'](_0x270f79);
                _0x3c6005['status'] = 'error', _0x3c6005['error'] = _0x586d73, _0x3c6005['timestamp'] = Date['now']();
            }
            this['_emitCallback']('ai_operation_error', {
                'operationId': _0x270f79,
                'error': _0x586d73
            });
        }
    ['_handleBatchOperations'](_0x4b4663) {
            if (!this['securityManager']?.['validateIncomingMessage'](_0x4b4663))
                return;
            const {
                operations: _0x7893c0,
                type: _0x134322
            } = _0x4b4663;
            if (_0x134322 === 'processing')
                _0x7893c0['forEach'](_0x3d0aa3 => {
                    this['activeTasks']['set'](_0x3d0aa3['id'], {
                        ..._0x3d0aa3,
                        'timestamp': Date['now']()
                    });
                });
            else {
                if (_0x134322 === 'automation')
                    _0x7893c0['forEach'](_0x13cd7b => {
                        this['automationSessions']['set'](_0x13cd7b['id'], {
                            ..._0x13cd7b,
                            'timestamp': Date['now']()
                        });
                    });
                else {
                    if (_0x134322 === 'rendering')
                        _0x7893c0['forEach'](_0x5c9003 => {
                            this['renderingJobs']['set'](_0x5c9003['id'], {
                                ..._0x5c9003,
                                'timestamp': Date['now']()
                            });
                        });
                    else
                        _0x134322 === 'ai_operations' && _0x7893c0['forEach'](_0x1d8831 => {
                            this['aiOperations']['set'](_0x1d8831['id'], {
                                ..._0x1d8831,
                                'timestamp': Date['now']()
                            });
                        });
                }
            }
            console['log']('📦\x20Batch\x20operations\x20(' + _0x134322 + '):\x20' + _0x7893c0['length'] + '\x20items');
        }
    ['emitClipDeletion'](_0x1665b4, _0x3adedc) {
            if (!this['socket']?.['connected'])
                return this['_queueOperation']('delete_clip', {
                    'itemId': _0x1665b4,
                    'projectId': _0x3adedc
                }), ![];
            try {
                const _0x1e0239 = 'delete_clip',
                    _0x30771f = {
                        'itemId': _0x1665b4,
                        'projectId': _0x3adedc,
                        'timestamp': Date['now'](),
                        'userId': this['userId']
                    };
                if (!this['securityManager']['validateMessage'](_0x1e0239, _0x30771f))
                    return console['warn']('⚠️\x20Message\x20validation\x20failed'), ![];
                const _0xea6356 = this['securityManager']['createSecureEnvelope'](_0x1e0239, _0x30771f);
                return this['socket']['emit'](_0x1e0239, _0xea6356), console['log']('📤\x20Clip\x20deletion\x20emitted:\x20' + _0x1665b4), !![];
            } catch (_0x58b489) {
                return console['error']('❌\x20Error\x20emitting\x20clip\x20deletion:', _0x58b489), this['_queueOperation']('delete_clip', {
                    'itemId': _0x1665b4,
                    'projectId': _0x3adedc
                }), ![];
            }
        }
    ['registerAutomationSession'](_0x4ac645, _0x4d430c) {
            this['socket']?.['connected'] && (this['socket']['emit']('register_automation_session', {
                'session_id': _0x4ac645,
                'automation_type': _0x4d430c
            }), console['log']('📝\x20Automation\x20session\x20registered:\x20' + _0x4ac645));
        }
    ['registerRenderingJob'](_0x545e87, _0x2ad7d7, _0x1df595) {
            this['socket']?.['connected'] && (this['socket']['emit']('register_rendering_job', {
                'job_id': _0x545e87,
                'project_id': _0x2ad7d7,
                'ranks': _0x1df595
            }), console['log']('📝\x20Rendering\x20job\x20registered:\x20' + _0x545e87));
        }
    ['registerAnalyticsStream'](_0xc36d92, _0x56e3dc) {
            this['socket']?.['connected'] && (this['socket']['emit']('register_analytics_stream', {
                'stream_id': _0xc36d92,
                'source': _0x56e3dc
            }), console['log']('📝\x20Analytics\x20stream\x20registered:\x20' + _0xc36d92));
        }
    ['registerAIOperation'](_0x950c75, _0x243390) {
            this['socket']?.['connected'] && (this['socket']['emit']('register_ai_operation', {
                'operation_id': _0x950c75,
                'operation_type': _0x243390
            }), console['log']('📝\x20AI\x20operation\x20registered:\x20' + _0x950c75));
        }
    ['on'](_0x27bacb, _0xce3d3a) {
            !this['callbacks']['has'](_0x27bacb) && this['callbacks']['set'](_0x27bacb, []), this['callbacks']['get'](_0x27bacb)['push'](_0xce3d3a);
        }
    ['off'](_0x1105fe, _0x1a9e21) {
            if (!this['callbacks']['has'](_0x1105fe))
                return;
            const _0x5d98ac = this['callbacks']['get'](_0x1105fe),
                _0x9b29d1 = _0x5d98ac['indexOf'](_0x1a9e21);
            _0x9b29d1 > -0x1 && _0x5d98ac['splice'](_0x9b29d1, 0x1);
        }
    ['_emitCallback'](_0x5eb47, _0x4d52ff) {
            if (!this['callbacks']['has'](_0x5eb47))
                return;
            this['callbacks']['get'](_0x5eb47)['forEach'](_0x1a4f25 => {
                try {
                    _0x1a4f25(_0x4d52ff);
                } catch (_0x37e5a5) {
                    console['error']('Error\x20in\x20' + _0x5eb47 + '\x20callback:', _0x37e5a5);
                }
            });
        }
    ['getActiveTasks'](_0x18b4d7 = 0x0, _0x3a4d11 = 0x64) {
            const _0x3cbf47 = Array['from'](this['activeTasks']['values']()),
                _0x54a2f5 = _0x18b4d7 * _0x3a4d11,
                _0x546c16 = _0x54a2f5 + _0x3a4d11;
            return {
                'items': _0x3cbf47['slice'](_0x54a2f5, _0x546c16),
                'total': _0x3cbf47['length'],
                'page': _0x18b4d7,
                'pageSize': _0x3a4d11,
                'totalPages': Math['ceil'](_0x3cbf47['length'] / _0x3a4d11)
            };
        }
    ['getActiveAutomationSessions'](_0xee1afe = 0x0, _0xd0c55f = 0x64) {
            const _0x1b6bf8 = Array['from'](this['automationSessions']['values']()),
                _0xc7fdc4 = _0xee1afe * _0xd0c55f,
                _0x401d88 = _0xc7fdc4 + _0xd0c55f;
            return {
                'items': _0x1b6bf8['slice'](_0xc7fdc4, _0x401d88),
                'total': _0x1b6bf8['length'],
                'page': _0xee1afe,
                'pageSize': _0xd0c55f,
                'totalPages': Math['ceil'](_0x1b6bf8['length'] / _0xd0c55f)
            };
        }
    ['getActiveRenderingJobs'](_0x165552 = 0x0, _0x295d46 = 0x64) {
            const _0x4921c9 = Array['from'](this['renderingJobs']['values']()),
                _0x5ac772 = _0x165552 * _0x295d46,
                _0x26d20f = _0x5ac772 + _0x295d46;
            return {
                'items': _0x4921c9['slice'](_0x5ac772, _0x26d20f),
                'total': _0x4921c9['length'],
                'page': _0x165552,
                'pageSize': _0x295d46,
                'totalPages': Math['ceil'](_0x4921c9['length'] / _0x295d46)
            };
        }
    ['getActiveAIOperations'](_0x1c3af2 = 0x0, _0x2f49f6 = 0x64) {
            const _0x3cfdd4 = Array['from'](this['aiOperations']['values']()),
                _0x256a74 = _0x1c3af2 * _0x2f49f6,
                _0x404039 = _0x256a74 + _0x2f49f6;
            return {
                'items': _0x3cfdd4['slice'](_0x256a74, _0x404039),
                'total': _0x3cfdd4['length'],
                'page': _0x1c3af2,
                'pageSize': _0x2f49f6,
                'totalPages': Math['ceil'](_0x3cfdd4['length'] / _0x2f49f6)
            };
        }
    ['getAnalyticsStreams'](_0x137143 = 0x0, _0x4f45f7 = 0x64) {
            const _0x27d02e = Array['from'](this['analyticsStreams']['values']()),
                _0x4e0a31 = _0x137143 * _0x4f45f7,
                _0x32ec45 = _0x4e0a31 + _0x4f45f7;
            return {
                'items': _0x27d02e['slice'](_0x4e0a31, _0x32ec45),
                'total': _0x27d02e['length'],
                'page': _0x137143,
                'pageSize': _0x4f45f7,
                'totalPages': Math['ceil'](_0x27d02e['length'] / _0x4f45f7)
            };
        }
    ['isConnected']() {
            return this['socket']?.['connected'] || ![];
        }
    ['getConnectionStatus']() {
            return {
                'connected': this['isConnected'](),
                'userId': this['userId'],
                'circuitBreakerState': this['circuitBreaker']['state'],
                'queuedMessages': this['messageQueue']['length'],
                'reconnectAttempts': this['reconnectConfig']['attempts'],
                'activeTasks': this['activeTasks']['size'],
                'activeAutomation': this['automationSessions']['size']
            };
        }
    ['disconnect']() {
            this['isManuallyDisconnected'] = !![], this['_stopHeartbeat'](), this['_stopConnectionHealthCheck'](), this['socket'] && this['socket']['disconnect'](), this['activeTasks']['clear'](), this['automationSessions']['clear'](), this['renderingJobs']['clear'](), this['analyticsStreams']['clear'](), this['aiOperations']['clear'](), this['pendingOperations']['clear'](), this['messageQueue'] = [], this['debouncedOperations']['clear'](), this['securityManager']?.['destroy'](), console['log']('🔌\x20WebSocket\x20disconnected\x20gracefully');
        }
}
typeof module !== 'undefined' && module['exports'] && (module['exports'] = _0x275d2e);
typeof window !== 'undefined' && (window['SolisAIWebSocketClient'] = _0x275d2e);