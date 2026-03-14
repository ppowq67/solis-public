function _0x5d89(_0x1d1fb4, _0x53fb39) {
    _0x1d1fb4 = _0x1d1fb4 - 0x159;
    const _0x54a6c6 = _0x54a6();
    let _0x5d89d7 = _0x54a6c6[_0x1d1fb4];
    return _0x5d89d7;
}
const _0x15b821 = _0x5d89;
function _0x54a6() {
    const _0x4c9926 = [
        'loading',
        '9579178bAzQvp',
        'length',
        'libraryItems',
        'timeSavedValue',
        'partnersValue',
        'partnerCount',
        '[data-stat=\x22members\x22]\x20.portal-stat-value',
        '249rmycnE',
        '7989642zpAMfC',
        'loadPortalStats',
        'membersValue',
        'refresh',
        'readyState',
        'getElementById',
        'portalManager',
        'status',
        'scheduledValue',
        'views',
        '/portal/members',
        'clipsStudio',
        'GET',
        '/portal/stats',
        'application/json',
        'stats',
        'success',
        'loadMembersOnly',
        'initElements',
        'error',
        'analyticsData',
        '12057152swwolW',
        'memberCount',
        '6851200cBNLbh',
        'updateUI',
        'addEventListener',
        'querySelector',
        'initialized',
        'Error\x20loading\x20members\x20count:',
        'init',
        'json',
        'partners',
        '90941cZmbfo',
        'round',
        'DOMContentLoaded',
        'textContent',
        'scheduled',
        'members',
        '2290jtLcaA',
        'HTTP\x20error!\x20status:\x20',
        'interactive',
        'scheduledCount',
        'viralScoreValue',
        'include',
        '2608176QUrvCS'
    ];
    _0x54a6 = function () {
        return _0x4c9926;
    };
    return _0x54a6();
}
(function (_0x368965, _0x4dae8a) {
    const _0x3be5dd = _0x5d89, _0x57f0f9 = _0x368965();
    while (!![]) {
        try {
            const _0x567846 = parseInt(_0x3be5dd(0x18b)) / 0x1 + parseInt(_0x3be5dd(0x15b)) / 0x2 * (parseInt(_0x3be5dd(0x16a)) / 0x3) + parseInt(_0x3be5dd(0x161)) / 0x4 + parseInt(_0x3be5dd(0x182)) / 0x5 + -parseInt(_0x3be5dd(0x16b)) / 0x6 + parseInt(_0x3be5dd(0x163)) / 0x7 + -parseInt(_0x3be5dd(0x180)) / 0x8;
            if (_0x567846 === _0x4dae8a)
                break;
            else
                _0x57f0f9['push'](_0x57f0f9['shift']());
        } catch (_0x5d769c) {
            _0x57f0f9['push'](_0x57f0f9['shift']());
        }
    }
}(_0x54a6, 0xb42ab));
class PortalManager {
    constructor() {
        const _0x28cf66 = _0x5d89;
        this[_0x28cf66(0x186)] = ![], this['memberCount'] = 0x0, this[_0x28cf66(0x168)] = 0x0, this[_0x28cf66(0x15e)] = 0x0, this[_0x28cf66(0x17d)]();
    }
    [_0x15b821(0x17d)]() {
        const _0x3bb312 = _0x15b821;
        this[_0x3bb312(0x16d)] = document[_0x3bb312(0x185)](_0x3bb312(0x169)), this[_0x3bb312(0x167)] = document[_0x3bb312(0x185)]('[data-stat=\x22partners\x22]\x20.portal-stat-value'), this[_0x3bb312(0x173)] = document[_0x3bb312(0x185)]('[data-stat=\x22scheduled\x22]\x20.portal-stat-value'), this[_0x3bb312(0x166)] = document[_0x3bb312(0x170)]('timeSavedValue'), this['viralScoreValue'] = document[_0x3bb312(0x170)](_0x3bb312(0x15f));
    }
    async [_0x15b821(0x16c)]() {
        const _0x1572ba = _0x15b821;
        try {
            const _0x1320f0 = await fetch(API_BASE_URL + _0x1572ba(0x178), {
                'method': _0x1572ba(0x177),
                'credentials': 'include',
                'headers': { 'Content-Type': _0x1572ba(0x179) }
            });
            if (!_0x1320f0['ok'])
                throw new Error(_0x1572ba(0x15c) + _0x1320f0['status']);
            const _0x560019 = await _0x1320f0['json']();
            _0x560019[_0x1572ba(0x17b)] && _0x560019[_0x1572ba(0x17a)] && (this[_0x1572ba(0x181)] = _0x560019[_0x1572ba(0x17a)][_0x1572ba(0x15a)] || 0x0, this[_0x1572ba(0x168)] = _0x560019[_0x1572ba(0x17a)][_0x1572ba(0x18a)] || 0x0, this[_0x1572ba(0x15e)] = _0x560019[_0x1572ba(0x17a)][_0x1572ba(0x159)] || 0x0, this[_0x1572ba(0x183)]());
        } catch (_0x29f952) {
            console[_0x1572ba(0x17e)]('Error\x20loading\x20portal\x20stats:', _0x29f952), await this[_0x1572ba(0x17c)]();
        }
    }
    async ['loadMembersOnly']() {
        const _0x2bca6f = _0x15b821;
        try {
            const _0x23bc05 = await fetch(API_BASE_URL + _0x2bca6f(0x175), {
                'method': _0x2bca6f(0x177),
                'credentials': _0x2bca6f(0x160),
                'headers': { 'Content-Type': 'application/json' }
            });
            if (!_0x23bc05['ok'])
                throw new Error('HTTP\x20error!\x20status:\x20' + _0x23bc05[_0x2bca6f(0x172)]);
            const _0x394670 = await _0x23bc05[_0x2bca6f(0x189)]();
            _0x394670[_0x2bca6f(0x17b)] && _0x394670[_0x2bca6f(0x15a)] && (this[_0x2bca6f(0x181)] = _0x394670[_0x2bca6f(0x15a)]['total'] || 0x0, this['updateUI']());
        } catch (_0x27278a) {
            console['error'](_0x2bca6f(0x187), _0x27278a);
        }
    }
    [_0x15b821(0x183)]() {
        const _0x387e3f = _0x15b821;
        this[_0x387e3f(0x16d)] && (this[_0x387e3f(0x16d)]['textContent'] = this[_0x387e3f(0x181)]);
        this[_0x387e3f(0x167)] && (this[_0x387e3f(0x167)][_0x387e3f(0x18e)] = this[_0x387e3f(0x168)]);
        this[_0x387e3f(0x173)] && (this[_0x387e3f(0x173)]['textContent'] = this[_0x387e3f(0x15e)]);
        if (this[_0x387e3f(0x166)]) {
            const _0xd59a6a = window[_0x387e3f(0x176)]?.[_0x387e3f(0x165)]?.[_0x387e3f(0x164)] || 0x0, _0xddae78 = 0.5, _0xa756a = Math[_0x387e3f(0x18c)](_0xd59a6a * _0xddae78);
            this['timeSavedValue'][_0x387e3f(0x18e)] = _0xa756a + 'h';
        }
        if (this[_0x387e3f(0x15f)]) {
            const _0x10677b = window['analyticsManager']?.[_0x387e3f(0x17f)], _0x243b0b = _0x10677b?.['views'] > 0x0 ? Math['round'](_0x10677b[_0x387e3f(0x174)] / 0x3e8 * 0xa) : 0x0;
            this[_0x387e3f(0x15f)][_0x387e3f(0x18e)] = _0x243b0b;
        }
    }
    async [_0x15b821(0x188)]() {
        const _0x489866 = _0x15b821;
        if (this[_0x489866(0x186)])
            return;
        document[_0x489866(0x16f)] === _0x489866(0x162) ? document[_0x489866(0x184)]('DOMContentLoaded', () => this['loadPortalStats']()) : await this[_0x489866(0x16c)](), this['initialized'] = !![];
    }
    async [_0x15b821(0x16e)]() {
        const _0x2a003a = _0x15b821;
        await this[_0x2a003a(0x16c)]();
    }
}
window[_0x15b821(0x184)](_0x15b821(0x18d), () => {
    const _0x2bda92 = _0x15b821;
    window[_0x2bda92(0x171)] = new PortalManager(), window[_0x2bda92(0x171)]['init']();
});
(document[_0x15b821(0x16f)] === _0x15b821(0x15d) || document[_0x15b821(0x16f)] === 'complete') && (window[_0x15b821(0x171)] = new PortalManager(), window['portalManager'][_0x15b821(0x188)]());