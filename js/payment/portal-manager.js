class _0x213d78 {
    constructor() {
            this['initialized'] = ![], this['memberCount'] = 0x0, this['partnerCount'] = 0x0, this['scheduledCount'] = 0x0, this['initElements']();
        }
    ['initElements']() {
            this['membersValue'] = document['querySelector']('[data-stat=\x22members\x22]\x20.portal-stat-value'), this['partnersValue'] = document['querySelector']('[data-stat=\x22partners\x22]\x20.portal-stat-value'), this['scheduledValue'] = document['querySelector']('[data-stat=\x22scheduled\x22]\x20.portal-stat-value'), this['timeSavedValue'] = document['getElementById']('timeSavedValue'), this['viralScoreValue'] = document['getElementById']('viralScoreValue');
        }
    async ['loadPortalStats']() {
        try {
            const _0x2fa6b9 = await fetch(API_BASE_URL + '/portal/stats', {
                'method': 'GET',
                'credentials': 'include',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if (!_0x2fa6b9['ok'])
                throw new Error('HTTP\x20error!\x20status:\x20' + _0x2fa6b9['status']);
            const _0xa76d3a = await _0x2fa6b9['json']();
            _0xa76d3a['success'] && _0xa76d3a['stats'] && (this['memberCount'] = _0xa76d3a['stats']['members'] || 0x0, this['partnerCount'] = _0xa76d3a['stats']['partners'] || 0x0, this['scheduledCount'] = _0xa76d3a['stats']['scheduled'] || 0x0, this['updateUI']());
        } catch (_0x47edd5) {
            console['error']('Error\x20loading\x20portal\x20stats:', _0x47edd5), await this['loadMembersOnly']();
        }
    }
    async ['loadMembersOnly']() {
            try {
                const _0x23ad90 = await fetch(API_BASE_URL + '/portal/members', {
                    'method': 'GET',
                    'credentials': 'include',
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                });
                if (!_0x23ad90['ok'])
                    throw new Error('HTTP\x20error!\x20status:\x20' + _0x23ad90['status']);
                const _0x50508d = await _0x23ad90['json']();
                _0x50508d['success'] && _0x50508d['members'] && (this['memberCount'] = _0x50508d['members']['total'] || 0x0, this['updateUI']());
            } catch (_0x480fa0) {
                console['error']('Error\x20loading\x20members\x20count:', _0x480fa0);
            }
        }
    ['updateUI']() {
            this['membersValue'] && (this['membersValue']['textContent'] = this['memberCount']);
            this['partnersValue'] && (this['partnersValue']['textContent'] = this['partnerCount']);
            this['scheduledValue'] && (this['scheduledValue']['textContent'] = this['scheduledCount']);
            if (this['timeSavedValue']) {
                const _0x2738c9 = window['clipsStudio']?.['libraryItems']?.['length'] || 0x0,
                    _0x96d9d0 = 0.5,
                    _0x130c7e = Math['round'](_0x2738c9 * _0x96d9d0);
                this['timeSavedValue']['textContent'] = _0x130c7e + 'h';
            }
            if (this['viralScoreValue']) {
                const _0x378004 = window['analyticsManager']?.['analyticsData'],
                    _0xc2b41b = _0x378004?.['views'] > 0x0 ? Math['round'](_0x378004['views'] / 0x3e8 * 0xa) : 0x0;
                this['viralScoreValue']['textContent'] = _0xc2b41b;
            }
        }
    async ['init']() {
        if (this['initialized'])
            return;
        document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', () => this['loadPortalStats']()) : await this['loadPortalStats'](), this['initialized'] = !![];
    }
    async ['refresh']() {
        await this['loadPortalStats']();
    }
}
window['addEventListener']('DOMContentLoaded', () => {
    window['portalManager'] = new _0x213d78(), window['portalManager']['init']();
});
(document['readyState'] === 'interactive' || document['readyState'] === 'complete') && (window['portalManager'] = new _0x213d78(), window['portalManager']['init']());