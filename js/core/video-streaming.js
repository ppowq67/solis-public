function _0x2fb5(_0x4bec51, _0x1ce49f) {
    _0x4bec51 = _0x4bec51 - 0x1d6;
    const _0x21058a = _0x2105();
    let _0x2fb535 = _0x21058a[_0x4bec51];
    return _0x2fb535;
}
const _0x474dac = _0x2fb5;
(function (_0x4073f1, _0xd8bff1) {
    const _0x47d1c5 = _0x2fb5, _0x54d855 = _0x4073f1();
    while (!![]) {
        try {
            const _0xb68674 = parseInt(_0x47d1c5(0x1f9)) / 0x1 * (-parseInt(_0x47d1c5(0x207)) / 0x2) + parseInt(_0x47d1c5(0x22d)) / 0x3 * (parseInt(_0x47d1c5(0x1de)) / 0x4) + -parseInt(_0x47d1c5(0x218)) / 0x5 + parseInt(_0x47d1c5(0x232)) / 0x6 + -parseInt(_0x47d1c5(0x1da)) / 0x7 * (-parseInt(_0x47d1c5(0x1f2)) / 0x8) + -parseInt(_0x47d1c5(0x1eb)) / 0x9 + parseInt(_0x47d1c5(0x213)) / 0xa;
            if (_0xb68674 === _0xd8bff1)
                break;
            else
                _0x54d855['push'](_0x54d855['shift']());
        } catch (_0x52ec1e) {
            _0x54d855['push'](_0x54d855['shift']());
        }
    }
}(_0x2105, 0xcdd69));
class OptimizedVideoStreamingManager {
    constructor() {
        const _0x2b8bc7 = _0x2fb5;
        this[_0x2b8bc7(0x1e9)] = new Map(), this[_0x2b8bc7(0x239)] = new Map(), this[_0x2b8bc7(0x24d)] = 0x400 * 0x400, this[_0x2b8bc7(0x1fe)] = 0x3, this[_0x2b8bc7(0x243)] = 0x32 * 0x400 * 0x400, this['currentCacheSize'] = 0x0, this['networkTimeout'] = 0x7530, this['retryAttempts'] = 0x3, this['videoLoadStrategies'] = new Map(), this[_0x2b8bc7(0x1ef)] = [];
    }
    async [_0x474dac(0x222)]() {
        const _0x494702 = _0x474dac, _0x582345 = [
                {
                    'id': _0x494702(0x21f),
                    'src': _0x494702(0x24f),
                    'name': _0x494702(0x228)
                },
                {
                    'id': _0x494702(0x1f1),
                    'src': _0x494702(0x21b),
                    'name': _0x494702(0x1e2)
                },
                {
                    'id': _0x494702(0x1f5),
                    'src': _0x494702(0x209),
                    'name': _0x494702(0x229)
                },
                {
                    'id': _0x494702(0x244),
                    'src': _0x494702(0x1e4),
                    'name': _0x494702(0x1ec)
                }
            ];
        console[_0x494702(0x236)](_0x494702(0x1fc));
        const _0x4bcbc8 = _0x582345[_0x494702(0x1ed)](_0x33fbf3 => this['fetchVideoMetadata'](_0x33fbf3));
        return await Promise[_0x494702(0x235)](_0x4bcbc8), this[_0x494702(0x249)](_0x582345), console[_0x494702(0x236)](_0x494702(0x211)), _0x582345;
    }
    async [_0x474dac(0x24e)](_0x3c3527) {
        const _0x3e97c7 = _0x474dac;
        try {
            const _0x2fdf69 = await fetch(_0x3c3527[_0x3e97c7(0x1d6)], {
                'method': 'HEAD',
                'signal': AbortSignal['timeout'](0x1388)
            });
            if (!_0x2fdf69['ok'])
                throw new Error(_0x3e97c7(0x219) + _0x2fdf69[_0x3e97c7(0x23a)]);
            const _0x1a3cdc = {
                'id': _0x3c3527['id'],
                'src': _0x3c3527[_0x3e97c7(0x1d6)],
                'name': _0x3c3527[_0x3e97c7(0x1f0)],
                'size': parseInt(_0x2fdf69['headers'][_0x3e97c7(0x1d8)](_0x3e97c7(0x238)) || 0x0),
                'type': _0x2fdf69[_0x3e97c7(0x23f)][_0x3e97c7(0x1d8)]('content-type'),
                'supportsRangeRequests': _0x2fdf69[_0x3e97c7(0x23f)][_0x3e97c7(0x1d8)](_0x3e97c7(0x20f)) === _0x3e97c7(0x241),
                'eTag': _0x2fdf69['headers'][_0x3e97c7(0x1d8)]('etag'),
                'lastModified': _0x2fdf69[_0x3e97c7(0x23f)]['get']('last-modified'),
                'timestamp': Date[_0x3e97c7(0x1fb)](),
                'cached': ![],
                'cachedSize': 0x0
            };
            return this[_0x3e97c7(0x1e9)]['set'](_0x3c3527['id'], _0x1a3cdc), console['log'](_0x3e97c7(0x237) + _0x3c3527['name'] + ':\x20' + this[_0x3e97c7(0x1ee)](_0x1a3cdc[_0x3e97c7(0x215)])), _0x1a3cdc;
        } catch (_0x3c1cd9) {
            return console[_0x3e97c7(0x1e6)](_0x3e97c7(0x206) + _0x3c3527['id'] + ':', _0x3c1cd9), null;
        }
    }
    [_0x474dac(0x249)](_0x56e90c) {
        const _0x21a1b2 = _0x474dac, _0x4dbd5d = {
                'primary': _0x56e90c[0x0],
                'secondary': _0x56e90c[0x1],
                'tertiary': [
                    _0x56e90c[0x2],
                    _0x56e90c[0x3]
                ]
            };
        this[_0x21a1b2(0x212)] = _0x4dbd5d, _0x4dbd5d['primary'] && this[_0x21a1b2(0x1f3)](_0x4dbd5d[_0x21a1b2(0x214)]['id']);
    }
    async [_0x474dac(0x1f3)](_0x546881) {
        const _0x234132 = _0x474dac;
        try {
            const _0x425873 = this[_0x234132(0x1e9)][_0x234132(0x1d8)](_0x546881);
            if (!_0x425873 || !_0x425873[_0x234132(0x225)]) {
                console[_0x234132(0x224)](_0x234132(0x202) + _0x546881 + _0x234132(0x20c));
                return;
            }
            console['log'](_0x234132(0x23e) + _0x546881 + '...');
            const _0x34a1a4 = Math[_0x234132(0x20d)](0x100 * 0x400, _0x425873[_0x234132(0x215)]), _0xaa1fbe = await fetch(_0x425873['src'], {
                    'headers': { 'Range': 'bytes=0-' + (_0x34a1a4 - 0x1) },
                    'signal': AbortSignal[_0x234132(0x1d9)](this[_0x234132(0x227)])
                });
            if (_0xaa1fbe[_0x234132(0x23a)] === 0xce || _0xaa1fbe[_0x234132(0x23a)] === 0xc8) {
                const _0x101e3e = await _0xaa1fbe[_0x234132(0x1dc)]();
                this[_0x234132(0x23b)](_0x546881, 0x0, _0x101e3e), _0x425873['cached'] = !![], _0x425873['cachedSize'] = _0x101e3e[_0x234132(0x215)], console[_0x234132(0x236)](_0x234132(0x223) + this[_0x234132(0x1ee)](_0x101e3e[_0x234132(0x215)]));
            }
        } catch (_0x4fa391) {
            console[_0x234132(0x224)]('⚠️\x20Preload\x20failed\x20for\x20' + _0x546881 + ':', _0x4fa391);
        }
    }
    async [_0x474dac(0x1e5)](_0x5945a2, _0x4d129b = null) {
        const _0x549934 = _0x474dac, _0x231202 = this[_0x549934(0x1e9)][_0x549934(0x1d8)](_0x5945a2);
        if (!_0x231202)
            throw new Error(_0x549934(0x1fd) + _0x5945a2 + _0x549934(0x221));
        if (this[_0x549934(0x239)][_0x549934(0x200)](_0x5945a2))
            return console[_0x549934(0x224)](_0x549934(0x202) + _0x5945a2 + '\x20is\x20already\x20loading'), this['activeStreams'][_0x549934(0x1d8)](_0x5945a2);
        const _0x954aab = this[_0x549934(0x1e1)](_0x5945a2, _0x231202, _0x4d129b);
        this[_0x549934(0x239)][_0x549934(0x20b)](_0x5945a2, _0x954aab);
        try {
            const _0x1d5b5a = await _0x954aab;
            return _0x1d5b5a;
        } finally {
            this['activeStreams'][_0x549934(0x1ea)](_0x5945a2);
        }
    }
    async [_0x474dac(0x1e1)](_0x1bd249, _0x5c500f, _0x547afe) {
        const _0x67b6ef = _0x474dac;
        if (!_0x5c500f[_0x67b6ef(0x225)])
            return this[_0x67b6ef(0x1f7)](_0x1bd249, _0x5c500f, _0x547afe);
        const _0x2bad63 = _0x5c500f[_0x67b6ef(0x215)], _0x1c3fc4 = Math['ceil'](_0x2bad63 / this[_0x67b6ef(0x24d)]), _0x3d46b7 = [];
        console['log'](_0x67b6ef(0x1e7) + _0x1bd249 + ':\x20' + _0x1c3fc4 + _0x67b6ef(0x21c) + this[_0x67b6ef(0x1ee)](_0x2bad63) + ')');
        for (let _0x1ac1b6 = 0x0; _0x1ac1b6 < _0x1c3fc4; _0x1ac1b6++) {
            const _0x42cc30 = _0x1ac1b6 * this[_0x67b6ef(0x24d)], _0x1bef70 = Math[_0x67b6ef(0x20d)](_0x42cc30 + this[_0x67b6ef(0x24d)] - 0x1, _0x2bad63 - 0x1);
            try {
                const _0x15df4e = await fetch(_0x5c500f[_0x67b6ef(0x1d6)], {
                    'headers': { 'Range': 'bytes=' + _0x42cc30 + '-' + _0x1bef70 },
                    'signal': AbortSignal[_0x67b6ef(0x1d9)](this['networkTimeout'])
                });
                if (_0x15df4e[_0x67b6ef(0x23a)] !== 0xce)
                    throw new Error('Expected\x20206,\x20got\x20' + _0x15df4e[_0x67b6ef(0x23a)]);
                const _0x5044d7 = await _0x15df4e[_0x67b6ef(0x1dc)]();
                _0x3d46b7['push'](_0x5044d7);
                const _0x390c54 = (_0x1ac1b6 + 0x1) / _0x1c3fc4 * 0x64;
                _0x547afe && _0x547afe({
                    'percent': Math[_0x67b6ef(0x1d7)](_0x390c54),
                    'chunk': _0x1ac1b6 + 0x1,
                    'totalChunks': _0x1c3fc4,
                    'bytesLoaded': (_0x1ac1b6 + 0x1) * this[_0x67b6ef(0x24d)],
                    'totalBytes': _0x2bad63
                }), console[_0x67b6ef(0x236)]('✅\x20Chunk\x20' + (_0x1ac1b6 + 0x1) + '/' + _0x1c3fc4 + _0x67b6ef(0x245)), (_0x1ac1b6 + 0x1) % this[_0x67b6ef(0x1fe)] === 0x0 && await new Promise(_0xa3d8c1 => setTimeout(_0xa3d8c1, 0x64));
            } catch (_0x532543) {
                console[_0x67b6ef(0x1e6)](_0x67b6ef(0x21e) + _0x1ac1b6 + _0x67b6ef(0x24a), _0x532543);
                throw _0x532543;
            }
        }
        return this[_0x67b6ef(0x20e)](_0x1bd249, { 'chunksLoaded': _0x1c3fc4 }), new Blob(_0x3d46b7, { 'type': _0x67b6ef(0x248) });
    }
    async [_0x474dac(0x1f7)](_0x479a39, _0x3cbb81, _0x330002) {
        const _0x55ca5c = _0x474dac;
        console[_0x55ca5c(0x224)]('⚠️\x20' + _0x479a39 + _0x55ca5c(0x242));
        try {
            const _0x48a0e3 = await fetch(_0x3cbb81[_0x55ca5c(0x1d6)], { 'signal': AbortSignal['timeout'](this[_0x55ca5c(0x227)]) });
            if (!_0x48a0e3['ok'])
                throw new Error(_0x55ca5c(0x219) + _0x48a0e3[_0x55ca5c(0x23a)]);
            const _0x40a4ef = _0x48a0e3[_0x55ca5c(0x1fa)][_0x55ca5c(0x20a)](), _0x27327a = [];
            let _0x10dd7e = 0x0;
            const _0x53963d = parseInt(_0x48a0e3[_0x55ca5c(0x23f)][_0x55ca5c(0x1d8)](_0x55ca5c(0x238)) || 0x0);
            while (!![]) {
                const {
                    done: _0x2ccb3e,
                    value: _0x19d5cf
                } = await _0x40a4ef[_0x55ca5c(0x201)]();
                if (_0x2ccb3e)
                    break;
                _0x27327a['push'](_0x19d5cf), _0x10dd7e += _0x19d5cf[_0x55ca5c(0x1e3)], _0x330002 && _0x53963d > 0x0 && _0x330002({
                    'percent': Math[_0x55ca5c(0x1d7)](_0x10dd7e / _0x53963d * 0x64),
                    'bytesLoaded': _0x10dd7e,
                    'totalBytes': _0x53963d
                });
            }
            return new Blob(_0x27327a, { 'type': _0x55ca5c(0x248) });
        } catch (_0x354a91) {
            console[_0x55ca5c(0x1e6)](_0x55ca5c(0x1f6) + _0x479a39 + ':', _0x354a91);
            throw _0x354a91;
        }
    }
    [_0x474dac(0x240)](_0x518315, _0x4698b9 = {}) {
        const _0x546500 = _0x474dac, _0x1ec91d = document[_0x546500(0x23d)](_0x546500(0x216));
        return _0x1ec91d['id'] = _0x518315, _0x1ec91d[_0x546500(0x1df)] = !![], _0x1ec91d[_0x546500(0x233)] = _0x546500(0x21d), Object['assign'](_0x1ec91d, {
            'controlsList': _0x546500(0x247),
            'crossOrigin': 'anonymous',
            'playsinline': !![]
        }), Object[_0x546500(0x205)](_0x1ec91d, _0x4698b9), _0x1ec91d;
    }
    async [_0x474dac(0x22c)](_0x416efb, _0x1d9859, _0x18e027) {
        const _0x282341 = _0x474dac;
        try {
            const _0x3564a0 = this[_0x282341(0x1e9)][_0x282341(0x1d8)](_0x1d9859);
            if (!_0x3564a0)
                throw new Error(_0x282341(0x1fd) + _0x1d9859 + _0x282341(0x221));
            console[_0x282341(0x236)]('🔄\x20Switching\x20from\x20' + _0x416efb + '\x20to\x20' + _0x1d9859);
            _0x18e027[_0x282341(0x1d6)] && (_0x18e027[_0x282341(0x230)](), _0x18e027[_0x282341(0x1d6)] = '');
            const _0x413f58 = await this['loadVideoStream'](_0x1d9859, _0x1429f3 => {
                    const _0x2d7f09 = _0x282341;
                    this[_0x2d7f09(0x1e8)](_0x1d9859, _0x1429f3);
                }), _0x3b70d4 = URL[_0x282341(0x24b)](_0x413f58);
            return _0x18e027['src'] = _0x3b70d4, setTimeout(() => {
                const _0x97cf5d = _0x282341;
                _0x18e027[_0x97cf5d(0x1d6)] === _0x3b70d4 && URL[_0x97cf5d(0x24c)](_0x3b70d4);
            }, 0x1388), console['log'](_0x282341(0x1e0) + _0x1d9859), _0x18e027;
        } catch (_0x22484e) {
            console[_0x282341(0x1e6)](_0x282341(0x22f), _0x22484e);
            throw _0x22484e;
        }
    }
    [_0x474dac(0x23b)](_0x431b25, _0x453f29, _0x3c624f) {
        const _0x9a0d3b = _0x474dac, _0x5d96d9 = _0x431b25 + '-chunk-' + _0x453f29, _0x222226 = _0x3c624f['size'];
        this['currentCacheSize'] + _0x222226 > this[_0x9a0d3b(0x243)] && this['_evictLRUCacheEntries'](_0x222226), this[_0x9a0d3b(0x1e9)][_0x9a0d3b(0x20b)](_0x5d96d9, {
            'type': 'chunk',
            'blob': _0x3c624f,
            'timestamp': Date[_0x9a0d3b(0x1fb)]()
        }), this['currentCacheSize'] += _0x222226;
    }
    [_0x474dac(0x20e)](_0x11e2ee, _0x270020) {
        const _0x17d475 = _0x474dac, _0xe80ace = this[_0x17d475(0x1e9)][_0x17d475(0x1d8)](_0x11e2ee) || {};
        this[_0x17d475(0x1e9)]['set'](_0x11e2ee, {
            ..._0xe80ace,
            ..._0x270020
        });
    }
    [_0x474dac(0x1f4)](_0x306167) {
        const _0x24a101 = _0x474dac, _0x1c0ac3 = Array[_0x24a101(0x22b)](this[_0x24a101(0x1e9)]['entries']())[_0x24a101(0x234)](([_0x25ce60]) => _0x25ce60[_0x24a101(0x1dd)](_0x24a101(0x1ff)))[_0x24a101(0x1ed)](([_0xe16cb, _0x109864]) => ({
                'key': _0xe16cb,
                'timestamp': _0x109864[_0x24a101(0x1db)] || 0x0
            }))['sort']((_0x5094fe, _0x1065eb) => _0x5094fe[_0x24a101(0x1db)] - _0x1065eb[_0x24a101(0x1db)]);
        let _0x8984b0 = 0x0;
        for (const {key: _0x2408b6} of _0x1c0ac3) {
            if (_0x8984b0 >= _0x306167)
                break;
            const _0x3a02b9 = this[_0x24a101(0x1e9)]['get'](_0x2408b6);
            _0x3a02b9?.[_0x24a101(0x1dc)] && (_0x8984b0 += _0x3a02b9[_0x24a101(0x1dc)][_0x24a101(0x215)]), this[_0x24a101(0x1e9)][_0x24a101(0x1ea)](_0x2408b6);
        }
        console[_0x24a101(0x236)]('🗑️\x20Cache\x20evicted:\x20' + this['formatBytes'](_0x8984b0));
    }
    [_0x474dac(0x23c)](_0x39c930 = null) {
        const _0x2f37ff = _0x474dac;
        if (_0x39c930) {
            const _0x413c96 = Array[_0x2f37ff(0x22b)](this['videoCache']['keys']())[_0x2f37ff(0x234)](_0x1b0498 => _0x1b0498[_0x2f37ff(0x226)](_0x39c930));
            _0x413c96[_0x2f37ff(0x21a)](_0x151822 => this[_0x2f37ff(0x1e9)][_0x2f37ff(0x1ea)](_0x151822)), console[_0x2f37ff(0x236)]('✅\x20Cache\x20cleared\x20for\x20' + _0x39c930);
        } else
            this['videoCache'][_0x2f37ff(0x217)](), this['currentCacheSize'] = 0x0, console['log'](_0x2f37ff(0x246));
    }
    [_0x474dac(0x1e8)](_0x20f7b1, _0x4f2c16) {
        const _0xe70a70 = _0x474dac, _0x58adf1 = document[_0xe70a70(0x210)](_0x20f7b1 + _0xe70a70(0x22e));
        _0x58adf1 && (_0x58adf1[_0xe70a70(0x22a)] = 'Loading:\x20' + _0x4f2c16['percent'] + '%');
    }
    [_0x474dac(0x1ee)](_0x579018) {
        const _0x4d34f1 = _0x474dac;
        if (_0x579018 === 0x0)
            return '0\x20Bytes';
        const _0x1bff9f = 0x400, _0x91f573 = [
                'Bytes',
                'KB',
                'MB',
                'GB'
            ], _0x228d7b = Math[_0x4d34f1(0x204)](Math[_0x4d34f1(0x236)](_0x579018) / Math['log'](_0x1bff9f));
        return Math['round'](_0x579018 / Math[_0x4d34f1(0x203)](_0x1bff9f, _0x228d7b) * 0x64) / 0x64 + '\x20' + _0x91f573[_0x228d7b];
    }
    ['getCacheStats']() {
        const _0x369702 = _0x474dac;
        return {
            'cachedVideos': Array[_0x369702(0x22b)](this[_0x369702(0x1e9)][_0x369702(0x220)]())[_0x369702(0x234)](_0x3b304f => !_0x3b304f[_0x369702(0x1dd)](_0x369702(0x1ff))),
            'cachedChunks': Array['from'](this[_0x369702(0x1e9)]['keys']())[_0x369702(0x234)](_0x51b97f => _0x51b97f[_0x369702(0x1dd)]('chunk'))['length'],
            'cacheSize': this[_0x369702(0x1ee)](this['currentCacheSize']),
            'maxCacheSize': this[_0x369702(0x1ee)](this[_0x369702(0x243)]),
            'utilizationPercent': Math[_0x369702(0x1d7)](this[_0x369702(0x1f8)] / this[_0x369702(0x243)] * 0x64)
        };
    }
}
window[_0x474dac(0x208)] = OptimizedVideoStreamingManager, window[_0x474dac(0x231)] = null;
function _0x2105() {
    const _0x16921f = [
        '_updateLoadingUI',
        'videoCache',
        'delete',
        '2864628essKhj',
        'Minecraft\x20Clip\x204',
        'map',
        'formatBytes',
        'preloadQueue',
        'name',
        'minecraft_2',
        '8ioyCPG',
        'preloadFirstChunk',
        '_evictLRUCacheEntries',
        'minecraft_3',
        '❌\x20Load\x20failed\x20for\x20',
        '_loadWithoutRangeRequests',
        'currentCacheSize',
        '456201RPNmEr',
        'body',
        'now',
        '🎥\x20Initializing\x20video\x20streams...',
        'Video\x20',
        'maxConcurrentRequests',
        'chunk',
        'has',
        'read',
        '⚠️\x20Video\x20',
        'pow',
        'floor',
        'assign',
        '❌\x20Failed\x20to\x20load\x20metadata\x20for\x20',
        '2uTSFvI',
        'OptimizedVideoStreamingManager',
        '/assets/Minecraft_3.mp4',
        'getReader',
        'set',
        '\x20doesn\x27t\x20support\x20range\x20requests',
        'min',
        'cacheVideoMetadata',
        'accept-ranges',
        'getElementById',
        '✅\x20Video\x20streams\x20initialized',
        'videoLoadStrategies',
        '8704550MPAqYG',
        'primary',
        'size',
        'video',
        'clear',
        '5086765tPARJg',
        'HTTP\x20',
        'forEach',
        '/assets/Minecraft_2.mp4',
        '\x20chunks\x20(',
        'none',
        '❌\x20Chunk\x20',
        'minecraft_1',
        'keys',
        '\x20not\x20found',
        'initializeVideoStreams',
        '✅\x20First\x20chunk\x20cached:\x20',
        'warn',
        'supportsRangeRequests',
        'startsWith',
        'networkTimeout',
        'Minecraft\x20Clip\x201',
        'Minecraft\x20Clip\x203',
        'textContent',
        'from',
        'switchVideo',
        '3mieJyK',
        '-loading',
        '❌\x20Video\x20switch\x20failed:',
        'pause',
        'videoStreamingManager',
        '2375016lYvGXB',
        'preload',
        'filter',
        'all',
        'log',
        '✅\x20Metadata\x20loaded\x20for\x20',
        'content-length',
        'activeStreams',
        'status',
        'cacheVideoChunk',
        'clearCache',
        'createElement',
        '📥\x20Preloading\x20first\x20chunk\x20of\x20',
        'headers',
        'getOptimizedVideoElement',
        'bytes',
        '\x20doesn\x27t\x20support\x20range\x20requests,\x20using\x20standard\x20loading',
        'maxCacheSize',
        'minecraft_4',
        '\x20loaded',
        '✅\x20All\x20cache\x20cleared',
        'nodownload',
        'video/mp4',
        'setupPreloadingStrategy',
        '\x20load\x20failed:',
        'createObjectURL',
        'revokeObjectURL',
        'chunkSize',
        'fetchVideoMetadata',
        '/assets/Minecraft_1.mp4',
        'src',
        'round',
        'get',
        'timeout',
        '5366445bBDIET',
        'timestamp',
        'blob',
        'includes',
        '2408132LeGAnq',
        'controls',
        '✅\x20Video\x20switched\x20to\x20',
        '_performStreamLoad',
        'Minecraft\x20Clip\x202',
        'length',
        '/assets/Minecraft_4.mp4',
        'loadVideoStream',
        'error',
        '📥\x20Loading\x20'
    ];
    _0x2105 = function () {
        return _0x16921f;
    };
    return _0x2105();
}