class _0x5151ec {
    constructor() {
        this['videoCache'] = new Map(), this['activeStreams'] = new Map(), this['chunkSize'] = 0x400 * 0x400, this['maxConcurrentRequests'] = 0x3, this['maxCacheSize'] = 0x32 * 0x400 * 0x400, this['currentCacheSize'] = 0x0, this['networkTimeout'] = 0x7530, this['retryAttempts'] = 0x3, this['videoLoadStrategies'] = new Map(), this['preloadQueue'] = [];
    }
    async ['initializeVideoStreams']() {
        const _0x402963 = [
            {
                'id': 'minecraft_1',
                'src': '/assets/Minecraft_1.mp4',
                'name': 'Minecraft\x20Clip\x201'
            },
            {
                'id': 'minecraft_2',
                'src': '/assets/Minecraft_2.mp4',
                'name': 'Minecraft\x20Clip\x202'
            },
            {
                'id': 'minecraft_3',
                'src': '/assets/Minecraft_3.mp4',
                'name': 'Minecraft\x20Clip\x203'
            },
            {
                'id': 'minecraft_4',
                'src': '/assets/Minecraft_4.mp4',
                'name': 'Minecraft\x20Clip\x204'
            }
        ];
        console['log']('🎥\x20Initializing\x20video\x20streams...');
        const _0x471ca3 = _0x402963['map'](_0x84488d => this['fetchVideoMetadata'](_0x84488d));
        return await Promise['all'](_0x471ca3), this['setupPreloadingStrategy'](_0x402963), console['log']('✅\x20Video\x20streams\x20initialized'), _0x402963;
    }
    async ['fetchVideoMetadata'](_0x524e4f) {
            try {
                const _0x45011f = await fetch(_0x524e4f['src'], {
                    'method': 'HEAD',
                    'signal': AbortSignal['timeout'](0x1388)
                });
                if (!_0x45011f['ok'])
                    throw new Error('HTTP\x20' + _0x45011f['status']);
                const _0x1d44ea = {
                    'id': _0x524e4f['id'],
                    'src': _0x524e4f['src'],
                    'name': _0x524e4f['name'],
                    'size': parseInt(_0x45011f['headers']['get']('content-length') || 0x0),
                    'type': _0x45011f['headers']['get']('content-type'),
                    'supportsRangeRequests': _0x45011f['headers']['get']('accept-ranges') === 'bytes',
                    'eTag': _0x45011f['headers']['get']('etag'),
                    'lastModified': _0x45011f['headers']['get']('last-modified'),
                    'timestamp': Date['now'](),
                    'cached': ![],
                    'cachedSize': 0x0
                };
                return this['videoCache']['set'](_0x524e4f['id'], _0x1d44ea), console['log']('✅\x20Metadata\x20loaded\x20for\x20' + _0x524e4f['name'] + ':\x20' + this['formatBytes'](_0x1d44ea['size'])), _0x1d44ea;
            } catch (_0x34251c) {
                return console['error']('❌\x20Failed\x20to\x20load\x20metadata\x20for\x20' + _0x524e4f['id'] + ':', _0x34251c), null;
            }
        }
    ['setupPreloadingStrategy'](_0x404d16) {
            const _0x111c7c = {
                'primary': _0x404d16[0x0],
                'secondary': _0x404d16[0x1],
                'tertiary': [
                _0x404d16[0x2],
                _0x404d16[0x3]
            ]
            };
            this['videoLoadStrategies'] = _0x111c7c, _0x111c7c['primary'] && this['preloadFirstChunk'](_0x111c7c['primary']['id']);
        }
    async ['preloadFirstChunk'](_0x2acf38) {
        try {
            const _0x5f406b = this['videoCache']['get'](_0x2acf38);
            if (!_0x5f406b || !_0x5f406b['supportsRangeRequests']) {
                console['warn']('⚠️\x20Video\x20' + _0x2acf38 + '\x20doesn\x27t\x20support\x20range\x20requests');
                return;
            }
            console['log']('📥\x20Preloading\x20first\x20chunk\x20of\x20' + _0x2acf38 + '...');
            const _0x350b2c = Math['min'](0x100 * 0x400, _0x5f406b['size']),
                _0x183304 = await fetch(_0x5f406b['src'], {
                    'headers': {
                        'Range': 'bytes=0-' + (_0x350b2c - 0x1)
                    },
                    'signal': AbortSignal['timeout'](this['networkTimeout'])
                });
            if (_0x183304['status'] === 0xce || _0x183304['status'] === 0xc8) {
                const _0x188dc6 = await _0x183304['blob']();
                this['cacheVideoChunk'](_0x2acf38, 0x0, _0x188dc6), _0x5f406b['cached'] = !![], _0x5f406b['cachedSize'] = _0x188dc6['size'], console['log']('✅\x20First\x20chunk\x20cached:\x20' + this['formatBytes'](_0x188dc6['size']));
            }
        } catch (_0x1ae0db) {
            console['warn']('⚠️\x20Preload\x20failed\x20for\x20' + _0x2acf38 + ':', _0x1ae0db);
        }
    }
    async ['loadVideoStream'](_0xa160e5, _0x190164 = null) {
        const _0x1391fd = this['videoCache']['get'](_0xa160e5);
        if (!_0x1391fd)
            throw new Error('Video\x20' + _0xa160e5 + '\x20not\x20found');
        if (this['activeStreams']['has'](_0xa160e5))
            return console['warn']('⚠️\x20Video\x20' + _0xa160e5 + '\x20is\x20already\x20loading'), this['activeStreams']['get'](_0xa160e5);
        const _0x55c5c6 = this['_performStreamLoad'](_0xa160e5, _0x1391fd, _0x190164);
        this['activeStreams']['set'](_0xa160e5, _0x55c5c6);
        try {
            const _0x5d4789 = await _0x55c5c6;
            return _0x5d4789;
        } finally {
            this['activeStreams']['delete'](_0xa160e5);
        }
    }
    async ['_performStreamLoad'](_0x4f64cd, _0x557fbe, _0xb79590) {
        if (!_0x557fbe['supportsRangeRequests'])
            return this['_loadWithoutRangeRequests'](_0x4f64cd, _0x557fbe, _0xb79590);
        const _0x4ad143 = _0x557fbe['size'],
            _0x7d055 = Math['ceil'](_0x4ad143 / this['chunkSize']),
            _0x5e719f = [];
        console['log']('📥\x20Loading\x20' + _0x4f64cd + ':\x20' + _0x7d055 + '\x20chunks\x20(' + this['formatBytes'](_0x4ad143) + ')');
        for (let _0x5876f8 = 0x0; _0x5876f8 < _0x7d055; _0x5876f8++) {
            const _0x4d05af = _0x5876f8 * this['chunkSize'],
                _0x51262a = Math['min'](_0x4d05af + this['chunkSize'] - 0x1, _0x4ad143 - 0x1);
            try {
                const _0x36ad12 = await fetch(_0x557fbe['src'], {
                    'headers': {
                        'Range': 'bytes=' + _0x4d05af + '-' + _0x51262a
                    },
                    'signal': AbortSignal['timeout'](this['networkTimeout'])
                });
                if (_0x36ad12['status'] !== 0xce)
                    throw new Error('Expected\x20206,\x20got\x20' + _0x36ad12['status']);
                const _0x5506d6 = await _0x36ad12['blob']();
                _0x5e719f['push'](_0x5506d6);
                const _0x34d0bf = (_0x5876f8 + 0x1) / _0x7d055 * 0x64;
                _0xb79590 && _0xb79590({
                    'percent': Math['round'](_0x34d0bf),
                    'chunk': _0x5876f8 + 0x1,
                    'totalChunks': _0x7d055,
                    'bytesLoaded': (_0x5876f8 + 0x1) * this['chunkSize'],
                    'totalBytes': _0x4ad143
                }), console['log']('✅\x20Chunk\x20' + (_0x5876f8 + 0x1) + '/' + _0x7d055 + '\x20loaded'), (_0x5876f8 + 0x1) % this['maxConcurrentRequests'] === 0x0 && await new Promise(_0x321b45 => setTimeout(_0x321b45, 0x64));
            } catch (_0xd73829) {
                console['error']('❌\x20Chunk\x20' + _0x5876f8 + '\x20load\x20failed:', _0xd73829);
                throw _0xd73829;
            }
        }
        return this['cacheVideoMetadata'](_0x4f64cd, {
            'chunksLoaded': _0x7d055
        }), new Blob(_0x5e719f, {
            'type': 'video/mp4'
        });
    }
    async ['_loadWithoutRangeRequests'](_0x32f8a6, _0x16c37d, _0x5ab940) {
            console['warn']('⚠️\x20' + _0x32f8a6 + '\x20doesn\x27t\x20support\x20range\x20requests,\x20using\x20standard\x20loading');
            try {
                const _0x2b281b = await fetch(_0x16c37d['src'], {
                    'signal': AbortSignal['timeout'](this['networkTimeout'])
                });
                if (!_0x2b281b['ok'])
                    throw new Error('HTTP\x20' + _0x2b281b['status']);
                const _0x41d642 = _0x2b281b['body']['getReader'](),
                    _0x37af03 = [];
                let _0x250cf6 = 0x0;
                const _0x5b9c5a = parseInt(_0x2b281b['headers']['get']('content-length') || 0x0);
                while (!![]) {
                    const {
                        done: _0x13f3a3,
                        value: _0x1327e0
                    } = await _0x41d642['read']();
                    if (_0x13f3a3)
                        break;
                    _0x37af03['push'](_0x1327e0), _0x250cf6 += _0x1327e0['length'], _0x5ab940 && _0x5b9c5a > 0x0 && _0x5ab940({
                        'percent': Math['round'](_0x250cf6 / _0x5b9c5a * 0x64),
                        'bytesLoaded': _0x250cf6,
                        'totalBytes': _0x5b9c5a
                    });
                }
                return new Blob(_0x37af03, {
                    'type': 'video/mp4'
                });
            } catch (_0x99a7e3) {
                console['error']('❌\x20Load\x20failed\x20for\x20' + _0x32f8a6 + ':', _0x99a7e3);
                throw _0x99a7e3;
            }
        }
    ['getOptimizedVideoElement'](_0x25fe45, _0x4f2253 = {}) {
            const _0x2c1a08 = document['createElement']('video');
            return _0x2c1a08['id'] = _0x25fe45, _0x2c1a08['controls'] = !![], _0x2c1a08['preload'] = 'none', Object['assign'](_0x2c1a08, {
                'controlsList': 'nodownload',
                'crossOrigin': 'anonymous',
                'playsinline': !![]
            }), Object['assign'](_0x2c1a08, _0x4f2253), _0x2c1a08;
        }
    async ['switchVideo'](_0x46ddb4, _0x4d159a, _0x80af8) {
            try {
                const _0x32d01e = this['videoCache']['get'](_0x4d159a);
                if (!_0x32d01e)
                    throw new Error('Video\x20' + _0x4d159a + '\x20not\x20found');
                console['log']('🔄\x20Switching\x20from\x20' + _0x46ddb4 + '\x20to\x20' + _0x4d159a);
                _0x80af8['src'] && (_0x80af8['pause'](), _0x80af8['src'] = '');
                const _0x3289d5 = await this['loadVideoStream'](_0x4d159a, _0x52269d => {
                        this['_updateLoadingUI'](_0x4d159a, _0x52269d);
                    }),
                    _0x736e80 = URL['createObjectURL'](_0x3289d5);
                return _0x80af8['src'] = _0x736e80, setTimeout(() => {
                    _0x80af8['src'] === _0x736e80 && URL['revokeObjectURL'](_0x736e80);
                }, 0x1388), console['log']('✅\x20Video\x20switched\x20to\x20' + _0x4d159a), _0x80af8;
            } catch (_0x49f71d) {
                console['error']('❌\x20Video\x20switch\x20failed:', _0x49f71d);
                throw _0x49f71d;
            }
        }
    ['cacheVideoChunk'](_0x1f1db0, _0x3349ed, _0x47f855) {
            const _0xba0d19 = _0x1f1db0 + '-chunk-' + _0x3349ed,
                _0x467103 = _0x47f855['size'];
            this['currentCacheSize'] + _0x467103 > this['maxCacheSize'] && this['_evictLRUCacheEntries'](_0x467103), this['videoCache']['set'](_0xba0d19, {
                'type': 'chunk',
                'blob': _0x47f855,
                'timestamp': Date['now']()
            }), this['currentCacheSize'] += _0x467103;
        }
    ['cacheVideoMetadata'](_0x436c11, _0x232413) {
            const _0x23f89e = this['videoCache']['get'](_0x436c11) || {};
            this['videoCache']['set'](_0x436c11, {
                ..._0x23f89e,
                ..._0x232413
            });
        }
    ['_evictLRUCacheEntries'](_0xbf5b18) {
            const _0x4248f6 = Array['from'](this['videoCache']['entries']())['filter'](([_0x306c4]) => _0x306c4['includes']('chunk'))['map'](([_0x31c1c4, _0x487257]) => ({
                'key': _0x31c1c4,
                'timestamp': _0x487257['timestamp'] || 0x0
            }))['sort']((_0x58406a, _0xbcbe43) => _0x58406a['timestamp'] - _0xbcbe43['timestamp']);
            let _0x8641b7 = 0x0;
            for (const {
                    key: _0x244ceb
                }
                of _0x4248f6) {
                if (_0x8641b7 >= _0xbf5b18)
                    break;
                const _0x53a077 = this['videoCache']['get'](_0x244ceb);
                _0x53a077?.['blob'] && (_0x8641b7 += _0x53a077['blob']['size']), this['videoCache']['delete'](_0x244ceb);
            }
            console['log']('🗑️\x20Cache\x20evicted:\x20' + this['formatBytes'](_0x8641b7));
        }
    ['clearCache'](_0x278099 = null) {
            if (_0x278099) {
                const _0x204b0c = Array['from'](this['videoCache']['keys']())['filter'](_0x190da9 => _0x190da9['startsWith'](_0x278099));
                _0x204b0c['forEach'](_0x11f47b => this['videoCache']['delete'](_0x11f47b)), console['log']('✅\x20Cache\x20cleared\x20for\x20' + _0x278099);
            } else
                this['videoCache']['clear'](), this['currentCacheSize'] = 0x0, console['log']('✅\x20All\x20cache\x20cleared');
        }
    ['_updateLoadingUI'](_0x4c3f35, _0x9cf1d6) {
            const _0x2b9644 = document['getElementById'](_0x4c3f35 + '-loading');
            _0x2b9644 && (_0x2b9644['textContent'] = 'Loading:\x20' + _0x9cf1d6['percent'] + '%');
        }
    ['formatBytes'](_0x267d5f) {
            if (_0x267d5f === 0x0)
                return '0\x20Bytes';
            const _0x236ebe = 0x400,
                _0x1b64e8 = [
                'Bytes',
                'KB',
                'MB',
                'GB'
            ],
                _0x151330 = Math['floor'](Math['log'](_0x267d5f) / Math['log'](_0x236ebe));
            return Math['round'](_0x267d5f / Math['pow'](_0x236ebe, _0x151330) * 0x64) / 0x64 + '\x20' + _0x1b64e8[_0x151330];
        }
    ['getCacheStats']() {
            return {
                'cachedVideos': Array['from'](this['videoCache']['keys']())['filter'](_0x4e4c46 => !_0x4e4c46['includes']('chunk')),
                'cachedChunks': Array['from'](this['videoCache']['keys']())['filter'](_0x3c90f8 => _0x3c90f8['includes']('chunk'))['length'],
                'cacheSize': this['formatBytes'](this['currentCacheSize']),
                'maxCacheSize': this['formatBytes'](this['maxCacheSize']),
                'utilizationPercent': Math['round'](this['currentCacheSize'] / this['maxCacheSize'] * 0x64)
            };
        }
}
window['OptimizedVideoStreamingManager'] = _0x5151ec, window['videoStreamingManager'] = null;