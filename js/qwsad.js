((async () => {
    const _0x472ff5 = window['API_BASE_URL'] || 'https://api.solisai.video/api';
    try {
        const _0x2e919e = await fetch(_0x472ff5 + '/auth/verify', {
            'method': 'GET',
            'credentials': 'include'
        });
        !_0x2e919e['ok'] && (window['location']['href'] = '/welcome.html');
    } catch (_0x300ab1) {
        window['location']['href'] = '/login.html';
    }
})());