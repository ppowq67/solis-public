function c(a, b) {
    a = a - 0x15e;
    const u = p();
    let v = u[a];
    if (c['FHVEQe'] === undefined) {
        var w = function (A) {
            const B = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let C = '', D = '';
            for (let E = 0x0, F, G, H = 0x0; G = A['charAt'](H++); ~G && (F = E % 0x4 ? F * 0x40 + G : G, E++ % 0x4) ? C += String['fromCharCode'](0xff & F >> (-0x2 * E & 0x6)) : 0x0) {
                G = B['indexOf'](G);
            }
            for (let I = 0x0, J = C['length']; I < J; I++) {
                D += '%' + ('00' + C['charCodeAt'](I)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(D);
        };
        c['zKzPLo'] = w, c['kWJzrJ'] = {}, c['FHVEQe'] = !![];
    }
    const x = u[0x0], y = a + x, z = c['kWJzrJ'][y];
    return !z ? (v = c['zKzPLo'](v), c['kWJzrJ'][y] = v) : v = z, v;
}
const d = c;
(function (a, b) {
    const u = c, v = a();
    while (!![]) {
        try {
            const w = parseInt(u(0x1db)) / 0x1 + -parseInt(u(0x1ee)) / 0x2 * (parseInt(u(0x1a6)) / 0x3) + -parseInt(u(0x1b1)) / 0x4 * (parseInt(u(0x179)) / 0x5) + parseInt(u(0x206)) / 0x6 + parseInt(u(0x211)) / 0x7 * (parseInt(u(0x1dd)) / 0x8) + parseInt(u(0x208)) / 0x9 * (-parseInt(u(0x1be)) / 0xa) + -parseInt(u(0x189)) / 0xb * (-parseInt(u(0x1c5)) / 0xc);
            if (w === b)
                break;
            else
                v['push'](v['shift']());
        } catch (x) {
            v['push'](v['shift']());
        }
    }
}(p, 0x5e0be), console[d(0x1d2)](d(0x20e)));
let e, f;
function g(a) {
    const b = d;
    if (!a || typeof a !== b(0x1c8))
        return ![];
    const u = a['trim']()['toLowerCase']();
    if (u[b(0x18f)](b(0x17f)) || u[b(0x18f)](b(0x1bc)) || u[b(0x18f)]('vbscript:'))
        return ![];
    return u[b(0x18f)](b(0x16c)) || u[b(0x18f)](b(0x222)) || !u['includes'](':');
}
function h(a) {
    const b = d;
    if (typeof a !== b(0x1c8))
        return '';
    const u = document[b(0x162)](b(0x1b8));
    return u[b(0x1e9)] = a, u[b(0x170)];
}
const i = {
    'userProfile': null,
    'userProfileTime': 0x0,
    'CACHE_DURATION': 0x493e0,
    'getUserProfile'() {
        const a = d, b = Date[a(0x1e0)]();
        if (this[a(0x1aa)] && b - this[a(0x1f7)] < this[a(0x169)])
            return console[a(0x1d2)](a(0x221)), this[a(0x1aa)];
        return null;
    },
    'setUserProfile'(a) {
        const b = d;
        this[b(0x1aa)] = a, this['userProfileTime'] = Date[b(0x1e0)](), console[b(0x1d2)](b(0x1af));
    }
};
async function j() {
    const a = d;
    try {
        if (window[a(0x1cf)]) {
            console[a(0x1d2)](a(0x18b)), !window[a(0x1cf)][a(0x1cc)] && await k();
            return;
        }
        const b = i['getUserProfile']();
        if (b) {
            window[a(0x1cf)] = b, console[a(0x1d2)](a(0x1a2)), q(), setTimeout(() => n(), 0x32);
            return;
        }
        const u = localStorage['getItem'](a(0x1cf));
        if (u)
            try {
                window['currentUser'] = JSON[a(0x1d7)](u), console[a(0x1d2)](a(0x1ef)), !window[a(0x1cf)][a(0x1cc)] && await k(), (q(), setTimeout(() => n(), 0x32));
                return;
            } catch (x) {
                console['warn'](a(0x175), x);
            }
        let v = {};
        typeof getAuthHeaders === a(0x1f9) && (v = getAuthHeaders()), console['log'](a(0x1ed), Object[a(0x1a3)](v));
        const w = await fetch(a(0x1ac), {
            'method': a(0x1bf),
            'headers': v,
            'credentials': a(0x187)
        });
        if (w['ok']) {
            const y = await w[a(0x19d)]();
            console['log'](a(0x16f), y), console[a(0x1d2)](a(0x16a), y['picture'] || y[a(0x1c4)] || y[a(0x191)]), console[a(0x1d2)](a(0x1d5), y[a(0x1cc)]), window[a(0x1cf)] = y, localStorage[a(0x199)]('currentUser', JSON[a(0x1eb)](y)), q(), setTimeout(() => n(), 0x64);
        } else
            console['warn']('Failed\x20to\x20fetch\x20user\x20profile:', w['status']), await k(), q(), setTimeout(() => n(), 0x64);
    } catch (z) {
        console[a(0x1f0)](a(0x1d9), z), await k(), q(), setTimeout(() => n(), 0x64);
    }
}
async function k() {
    const a = d;
    try {
        let b = {};
        typeof getAuthHeaders === a(0x1f9) && (b = getAuthHeaders());
        const u = await fetch(a(0x1f1), {
            'method': a(0x1bf),
            'credentials': 'include',
            'headers': b,
            'credentials': a(0x187)
        });
        if (u['ok']) {
            const v = await u['json']();
            console[a(0x1d2)](a(0x1e5), v[a(0x1cc)]), window[a(0x1cf)] && (window[a(0x1cf)]['auth_provider'] = v['auth_provider'], localStorage[a(0x199)](a(0x1cf), JSON[a(0x1eb)](window['currentUser'])), n());
        }
    } catch (w) {
        console['error'](a(0x1fb), w);
    }
}
function l() {
    const a = d;
    console['log'](a(0x1ec)), !e && (e = document[a(0x16e)](a(0x186))), !f && (f = document[a(0x16e)]('userMenuBackdrop'));
    if (!e || !f) {
        console[a(0x1f0)](a(0x161));
        return;
    }
    console[a(0x1d2)](a(0x163)), e['classList'][a(0x193)](a(0x194)), f['classList'][a(0x193)](a(0x194));
    const b = window[a(0x1cb)] <= 0x300 ? a(0x19a) : '420px', u = window[a(0x1cb)] <= 0x300 ? a(0x1a5) : '-420px';
    e[a(0x1d6)][a(0x20a)] = a(0x168) + b + a(0x20b), f[a(0x1d6)]['cssText'] = 'position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20background:\x20rgba(28,\x2025,\x2023,\x200.5)\x20!important;\x20z-index:\x209998\x20!important;\x20display:\x20block\x20!important;\x20opacity:\x201\x20!important;\x20visibility:\x20visible\x20!important;\x20pointer-events:\x20auto\x20!important;', document['body'][a(0x1d6)][a(0x1a7)] = a(0x21a), console[a(0x1d2)](a(0x1f5), e[a(0x1d6)]['right'], a(0x18d), f[a(0x1d6)][a(0x174)]), q(), setTimeout(() => n(), 0x32);
}
function m() {
    const a = d;
    if (!e)
        e = document[a(0x16e)](a(0x186));
    if (!f)
        f = document['getElementById'](a(0x19e));
    e[a(0x21e)][a(0x166)](a(0x194)), f['classList']['remove']('active');
    const b = window['innerWidth'] <= 0x300 ? '100%' : '420px', u = window[a(0x1cb)] <= 0x300 ? a(0x1a5) : '-420px';
    e[a(0x1d6)][a(0x20a)] = a(0x1ce) + u + a(0x1fc) + b + a(0x20b), f[a(0x1d6)][a(0x20a)] = a(0x16b), document['body']['style'][a(0x1a7)] = '', console[a(0x1d2)](a(0x1df), e['style'][a(0x1f8)]);
}
function n() {
    const a = d, b = document[a(0x16e)](a(0x173));
    if (!b) {
        console[a(0x21b)](a(0x185));
        return;
    }
    let u = null;
    try {
        if (typeof window !== 'undefined' && window[a(0x1cf)])
            u = window['currentUser'];
        else {
            const y = localStorage[a(0x1bd)](a(0x1cf));
            if (y)
                u = JSON[a(0x1d7)](y);
        }
    } catch (z) {
        console[a(0x1f0)](a(0x1c2), z);
        return;
    }
    console[a(0x1d2)](a(0x178), u);
    const v = u?.[a(0x15f)] || u?.['avatar'] || u?.['photo'] || u?.[a(0x1d0)] || null, w = u?.['name'] || u?.[a(0x17b)] || u?.['email'] || 'User', x = u?.[a(0x1cc)] || a(0x1fd);
    console['log'](a(0x1b6), v), console[a(0x1d2)]('👤\x20User\x20name:', w), console['log']('🔐\x20Auth\x20provider:', x);
    if (x && x[a(0x19b)]()[a(0x167)](a(0x1e7))) {
        console[a(0x1d2)](a(0x190)), b[a(0x170)] = a(0x19f);
        return;
    }
    if (u && v && v[a(0x201)]() !== '' && g(v)) {
        console[a(0x1d2)](a(0x204));
        const A = document[a(0x162)](a(0x1e3));
        A[a(0x1b5)] = v, A[a(0x1da)] = w, A[a(0x1d6)][a(0x20a)] = a(0x1b4), A['onerror'] = () => {
            const C = a;
            console[C(0x21b)](C(0x219));
        }, A[a(0x1ff)] = () => {
            const C = a;
            console[C(0x1d2)](C(0x1ad));
        };
        const B = document[a(0x162)](a(0x1b8));
        B['appendChild'](A), b[a(0x170)] = B['innerHTML'];
    } else
        console[a(0x1d2)](a(0x1a8), !!u, a(0x17e), v);
}
async function o() {
    const a = d, b = document[a(0x16e)]('dropdownUserName'), u = document['getElementById'](a(0x188)), v = document['getElementById'](a(0x223));
    console['log']('🔍\x20updateProfileDropdown\x20called\x20-\x20Elements\x20found:', {
        'dropdownUserName': !!b,
        'dropdownUserPlan': !!u,
        'dropdownUserAvatar': !!v
    });
    let w = null;
    try {
        if (typeof window !== a(0x172) && window['currentUser'])
            w = window['currentUser'];
        else {
            const z = localStorage[a(0x1bd)](a(0x1cf));
            if (z)
                w = JSON[a(0x1d7)](z);
        }
    } catch (A) {
        console[a(0x1f0)](a(0x183), A);
        return;
    }
    console[a(0x1d2)](a(0x20d), w);
    if (!w) {
        if (b)
            b[a(0x1e9)] = a(0x17c);
        if (u)
            u[a(0x1e9)] = a(0x1e8);
        return;
    }
    const x = w[a(0x210)] || w[a(0x17b)] || w[a(0x1fd)] || a(0x1b7);
    if (b)
        b[a(0x1e9)] = x;
    try {
        const B = await fetch(a(0x1ac), {
            'method': a(0x1bf),
            'credentials': a(0x187)
        });
        if (B['ok']) {
            const C = await B[a(0x19d)](), D = C[a(0x1cd)] || w[a(0x1cd)] || 'Free', E = D['charAt'](0x0)[a(0x1c9)]() + D[a(0x220)](0x1) + a(0x192), F = document[a(0x16e)](a(0x188));
            F && (F[a(0x1e9)] = E);
            if (window[a(0x1cf)])
                window['currentUser'][a(0x1cd)] = D;
        } else {
            const G = w[a(0x1cd)] || a(0x1e4), H = G[a(0x15e)](0x0)[a(0x1c9)]() + G['slice'](0x1) + a(0x192), I = document[a(0x16e)](a(0x188));
            I && (I['textContent'] = H);
        }
    } catch (J) {
        console[a(0x1f0)](a(0x1e1), J);
        const K = w[a(0x1cd)] || a(0x1e4), L = K[a(0x15e)](0x0)['toUpperCase']() + K[a(0x220)](0x1) + a(0x192), M = document['getElementById'](a(0x188));
        M && (M[a(0x1e9)] = L, console[a(0x1d2)](a(0x203), L));
    }
    const y = w?.[a(0x15f)] || w?.[a(0x1c4)] || w?.[a(0x191)] || null;
    if (v) {
        if (y && y[a(0x201)]() !== '') {
            console['log'](a(0x1d8), y);
            const N = document[a(0x162)](a(0x1e3));
            N[a(0x1b5)] = y, N[a(0x1da)] = x, N[a(0x1d6)][a(0x20a)] = a(0x1b4), N[a(0x18c)] = () => {
                const O = a;
                console['warn'](O(0x1b3));
            }, v[a(0x170)] = '', v[a(0x1b0)](N);
        }
    }
}
function p() {
    const a = [
        'BM93',
        'rMfPBgvKihrVigzLDgnOihbSyw4GAw5MBZO',
        'Bg9JyxrPB24',
        'Aw1N',
        'rNjLzq',
        '4PYfiezLDgnOzwqGyxv0AcbWCM92AwrLCJO',
        'CxvLCNLtzwXLy3rVCG',
        'z29Vz2XL',
        'rNjLzsbqBgfU',
        'Dgv4DenVBNrLBNq',
        'x2jSyw5R',
        'C3rYAw5NAwz5',
        'B3bLBLvZzxjnzw51ignHBgXLzcbMCM9TihbYB2zPBguGyNv0Dg9U',
        '8j+tOsbgzxrJAgLUzYb1C2vYihbYB2zPBguGD2L0AcbOzwfKzxjZoG',
        'mNLcDLf3vq',
        '4PYfifvZzxiGBg9HzgvKigzYB20GBg9JywXtDg9YywDL',
        'zxjYB3i',
        'l2fWAs91C2vYl2f1DgGTChjVDMLKzxi',
        'zMLYC3royw1L',
        'BwvUDvn1yNnJCMLWDgLVBG',
        'BwvUDuXVz291Da',
        'twvUDsbVCgvUzwqGlsbWyw5LBcbYAwDODdO',
        'C29SAxnHAv8',
        'DxnLCLbYB2zPBgvuAw1L',
        'CMLNAhq',
        'zNvUy3rPB24',
        'rxjYB3iGy2XLyxjPBMCGDxnLCIbKyxrHoG',
        'rxjYB3iGzMv0y2HPBMCGyxv0AcbWCM92AwrLCJO',
        'icfPBxbVCNrHBNq7ihDPzhrOoIa',
        'zw1HAwW',
        '4PQG77IpieXVz291DcbbueKGy2fSBcbMywLSzwq6',
        'B25SB2fK',
        'DxnLCI1SB2DPBG',
        'DhjPBq',
        'BwvUDvvZzxjfBwfPBa',
        '8j+uHcbfCNjVCIbMywXSyMfJAZOGvxbKyxrLzcbKCM9Wzg93BLvZzxjqBgfUihrVoG',
        '4PYfifnLDhrPBMCGChjVzMLSzsbWAwn0DxjLigzYB20GDMfSAwrHDgvKifvsta',
        'BwvUDtOGzMfPBgvKihrVihjLywqGy3vYCMvUDfvZzxi',
        'mZy4mZmWneniA0zhCa',
        'q2XVC2uGyNv0Dg9UignSAwnRzwq',
        'mtC2ote2nKLtwvHxAa',
        'BwvUDvbYzwzLCMvUy2vZ',
        'y3nZvgv4Da',
        'icfPBxbVCNrHBNq7igHLAwDODdOGmtaWDMGGiwLTCg9YDgfUDdSGEI1PBMrLEdOGotK5osaHAw1WB3j0yw50oYbKAxnWBgf5oIbMBgv4icfPBxbVCNrHBNq7igzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw4GiwLTCg9YDgfUDdSGyMfJA2DYB3vUzdOGD2HPDguGiwLTCg9YDgfUDdSGB3bHy2L0EtOGmsaHAw1WB3j0yw50oYb2AxnPyMLSAxr5oIb2AxnPyMXLicfPBxbVCNrHBNq7',
        'C3rVCfbYB3bHz2f0Aw9U',
        '8j+rPcbJDxjYzw50vxnLCIbVyMPLy3q6',
        'BwvUDs5QCYbMAwXLigXVywrLza',
        '4PQG77Ipie5VihbPy3r1CMuGB3iGAw52ywXPzcbvuKWGzM9Yig1LBNuGyxzHDgfY',
        'BMfTzq',
        'n1bczuzAAq',
        'm3b4',
        'DxnLCM5HBwu',
        'l2f1DgGVBg9NB3v0',
        '8j+tJsbszwrPCMvJDgLUzYb0BYbSB2DPBI4UlG',
        'y3vYCMvUDfvZzxiGy2HHBMDLzcbPBIbSB2nHBfn0B3jHz2uSihvWzgf0Aw5NihbYB2zPBguGyNv0Dg9U',
        'C3rVCMfNzq',
        're9nq29UDgvUDeXVywrLza',
        'rMfPBgvKihrVigXVywqGChjVzMLSzsbPBwfNzsWGA2vLCgLUzYbtvKC',
        'AgLKzgvU',
        'D2fYBG',
        'zwrPDevTywLSqNrU',
        '8j+tUcbnzw51igf2yxrHCIbWAwn0DxjLifvstdO',
        'y2XHC3nmAxn0',
        'vxnLCIbSB2DNzwqGB3v0lcbYzxnLDhrPBMCGChjVzMLSzsbIDxr0B24',
        'C2XPy2u',
        '8j+sVIbvC2LUzYbJywnOzwqGDxnLCIbWCM9MAwXL',
        'Ahr0Chm6lY8',
        'zhjVCgrVD25vC2vYqxzHDgfY',
        'DxnLCG',
        'y2HHCKf0',
        'CgLJDhvYzq',
        'q2HHBMDLihbHC3n3B3jKignSAwnRzwq',
        'twvUDsbLBgvTzw50CYbUB3qGzM91BMq',
        'y3jLyxrLrwXLBwvUDa',
        'B3bLBLvZzxjnzw51ignHBgXLzcaTigfKzgLUzYbHy3rPDMuGy2XHC3m',
        'mJfWEa',
        'Dw5RBM93BKbNBwfPBc5JB20',
        'CMvTB3zL',
        'Aw5JBhvKzxm',
        'Cg9ZAxrPB246igzPEgvKicfPBxbVCNrHBNq7ihrVCdOGmcaHAw1WB3j0yw50oYbYAwDODdOGmcaHAw1WB3j0yw50oYb3Awr0AdOG',
        'q0fdsevFrfvsqvrjt04',
        '8j+tUcbqAwn0DxjLigzPzwXKoG',
        'Cg9ZAxrPB246igzPEgvKicfPBxbVCNrHBNq7ihrVCdOGmcaHAw1WB3j0yw50oYbSzwz0oIaWicfPBxbVCNrHBNq7ihDPzhrOoIaXmdaLicfPBxbVCNrHBNq7igHLAwDODdOGmtaWjsaHAw1WB3j0yw50oYbIywnRz3jVDw5KoIbYz2jHkdi4lcaYnsWGmJmSidaUnsKGiwLTCg9YDgfUDdSGEI1PBMrLEdOGotK5ocaHAw1WB3j0yw50oYbKAxnWBgf5oIbIBg9JAYaHAw1WB3j0yw50oYbVCgfJAxr5oIaWicfPBxbVCNrHBNq7ihzPC2LIAwXPDhK6igHPzgrLBIaHAw1WB3j0yw50oYbWB2LUDgvYlwv2zw50CZOGBM9UzsaHAw1WB3j0yw50oW',
        'Ahr0CdOVlW',
        'Ahr0Chm6lY9KAxnJB3jKlMDNl3z0ueP0uwHQtNK',
        'z2v0rwXLBwvUDej5swq',
        '4PYfiezLDgnOzwqGDxnLCIbWCM9MAwXLoG',
        'Aw5Uzxjive1m',
        'yxv0AfrVA2vU',
        'Dw5KzwzPBMvK',
        'ChjVzMLSzuf2yxrHCKj0BG',
        'B3bHy2L0Eq',
        'rMfPBgvKihrVihbHCNnLihnHDMvKign1CNjLBNrvC2vY',
        'BwvUDu15q29UDgvUDa',
        'BM90AwzPy2f0Aw9UC1rVz2DSzq',
        '8j+uJsb1CgrHDgvqCM9MAwXLqNv0Dg9Uic0GDxnLCK9IAJO',
        'nwnkwgn2zG',
        'rMfPBgvKihrVigXVywqGBwvUDsbHDMf0yxiGAw1Hz2u',
        'zgLZCgXHEu5HBwu',
        'r3vLC3qGvxnLCG',
        'ChjVzMLSzu5HBwveAxnWBgf5',
        'CgLJDhvYzsbMAwvSzdO',
        'AMf2yxnJCMLWDdO',
        'BwvUDuHLBha',
        'tM90AwzPy2f0Aw9UCYb0B2DNBguGy2XPy2TLza',
        'l2XVz2LUlMH0BwW/Bg9NB3v0pte',
        'rMfPBgvKihrVihjLywqGy3vYCMvUDfvZzxiGzM9YigrYB3bKB3DU',
        'BwvUDvzPzxDqCM9MAwXL',
        '4PQG77IpihbYB2zPBgvbDMf0yxjcDg4GzwXLBwvUDcbUB3qGzM91BMq',
        'DxnLCK1LBNvqyw5LBa',
        'Aw5JBhvKzq',
        'zhjVCgrVD25vC2vYugXHBG',
        'mtqYoduXnvHetLrwtW',
        'BwvUDvvZzxjbDMf0yxi',
        '4PYfifvZzxiGywXYzwfKEsbSB2fKzwqGAw4GD2LUzg93lMn1CNjLBNrvC2vY',
        'B25LCNjVCG',
        'yMfJA2rYB3aGB3bHy2L0EtO',
        'zw1HAwXeAxnWBgf5',
        'C3rHCNrZv2L0Aa',
        '4PYfierPC3bSyxLPBMCGr21HAwWGAwnVBIbMB3iGr29Vz2XLie9bDxrOihvZzxi',
        'CgHVDg8',
        'ifbSyw4',
        'ywrK',
        'ywn0AxzL',
        'rg9JDw1LBNqGCMvHzhKGC3rHDgu6',
        'q2XVC2uGyNv0Dg9UigzVDw5KlcbHDhrHy2HPBMCGBgLZDgvUzxi',
        'B3bLBG',
        'Bg9HzgLUzW',
        'C2v0sxrLBq',
        'mtaWjq',
        'Dg9mB3DLCKnHC2u',
        'DxnLCI1SB2DVDxq',
        'ANnVBG',
        'DxnLCK1LBNvcywnRzhjVCa',
        'cIaGicaGicaGicaGidXZDMCGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjJDxjYzw50q29SB3iIihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYi+cIaGicaGicaGicaGicaGica8is0TieDTywLSl0DVB2DSzsbPy29Uic0TpGOGicaGicaGicaGicaGicaGphjLy3qGD2LKDgG9iJi0iIbOzwLNAhq9iJi0iIbMAwXSpsjUB25LiI8+cIaGicaGicaGicaGicaGica8Cgf0AcbKpsjnmJaGneG0qZiUosa0idiUmdeGnc45idiUmdeGnKWYide4yZaGms4XlJKGmIaYidjOmtzJms4XidaGmI0UosaYltjwnMmWlteUms0Uos0YltiTmNPTmca0Bc04iduToc01vJzSoca1idGTnxyYEIiGzMLSBd0Ii0vbndmZnsiVpGOGicaGicaGicaGica8l3n2zZ4kicaGicaGica',
        'qvbjx0jbu0vFvvjm',
        'uhjLzMvYzw5JzxmGy2XPy2TLza',
        '4PYfifvZzxiGBg9HzgvKigzYB20Gy2fJAgu',
        'A2v5CW',
        'vMLLDYbTEsbJB250zw50',
        'lteWmcu',
        'mtK4nZC3m0v3Exzlyq',
        'B3zLCMzSB3C',
        '4PQG77Ipie5VihvZzxiGCgLJDhvYzsbMB3vUzcaTihvZzxjpyMOGzxHPC3rZoG',
        'y2XPy2S',
        'DxnLCLbYB2zPBgu',
        'y2XLyxi',
        'l2fWAs91C2vYl3bYB2zPBgu',
        '4PYfifbYB2zPBguGAw1Hz2uGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'y2HHBMDLugfZC3DVCMrcDg4',
        '8j+sVIbdywnOzwqGDxnLCIbWCM9MAwXL',
        'yxbWzw5Kq2HPBgq',
        'mJi2ntu0ofHjAMzUAq',
        'y29UDgfPBNm',
        'rMfPBgvKihrVigXVywqGzhjVCgrVD24GyxzHDgfYigLTywDL',
        'D2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGyM9YzgvYlxjHzgL1CZOGntaLoYbVyMPLy3qTzML0oIbJB3zLCJSGzgLZCgXHEtOGyMXVy2S7',
        'C3jJ',
        '8j+tUcbqCM9MAwXLihbPy3r1CMuGvvjmoG',
        'vxnLCG',
        'zgL2',
        'rwrPDcbWCM9MAwXLig5HBwuGy2XPy2TLza',
        'twvUDsbHBhjLywr5igLUAxrPywXPEMvKlcbZA2LWCgLUzW',
        '8j+uJsb1CgrHDgvnzw51vxnLCKLUzM8Glsb1C2vYt2jQoG',
        'zgf0ytO',
        'z2v0sxrLBq',
        'mJbnEMTWtw4',
        'r0vu',
        'CMvHzhLtDgf0zq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'rMfPBgvKihrVihjLywqGy3vYCMvUDfvZzxiGzM9YihbYB2zPBguGyNv0Dg9U',
        'vxnLCIbSB2DNzwqGAw4SihvWzgf0Aw5NihbYB2zPBguGyNv0Dg9U',
        'yxzHDgfY',
        'mtjSz1fkwhi',
        'q2XVC2uGyNv0Dg9UigvSzw1LBNqGBM90igzVDw5KihDPDgGGsuq6ignSB3nLvxnLCK1LBNu',
        'Aw5PDfvZzxjnzw51ignHBgXLza',
        'C3rYAw5N',
        'Dg9vChbLCKnHC2u',
        'CMvTB3zLsxrLBq',
        'Aw5UzxjxAwr0Aa',
        'yxv0Af9WCM92AwrLCG',
        'CgXHBG',
        'Cg9ZAxrPB246igzPEgvKicfPBxbVCNrHBNq7ihrVCdOGmcaHAw1WB3j0yw50oYbYAwDODdOG',
        'y3vYCMvUDfvZzxi',
        'ChjVzMLSzvbPy3r1CMu',
        'BwvUDuzLzwrIywnR',
        'Bg9N',
        'BwvUDvvZzxjoyw1L',
        'AhjLzG',
        '8j+uKcbbDxrOihbYB3zPzgvYoG',
        'C3r5Bgu',
        'CgfYC2u',
        '4PYfifnLDhrPBMCGzhjVCgrVD24GyxzHDgfYigzYB206',
        'rxjYB3iGBg9HzgLUzYbJDxjYzw50ihvZzxi6',
        'ywX0',
        'nJC2otCZv1LUrhzO',
        't3bLBIbMzwvKyMfJAW',
        'ndy5mJK0ngfxDNrWua',
        'C29SAxnnzw51rgvIDwC',
        'twvUDsbJBg9ZzwqGlsbWyw5LBcbYAwDODdO'
    ];
    return p = function () {
        return a;
    }, p();
}
function q() {
    const a = d, b = document[a(0x16e)](a(0x1d3)), u = document[a(0x16e)](a(0x202)), v = document[a(0x16e)](a(0x18a)), w = document[a(0x16e)](a(0x17d)), x = document[a(0x16e)](a(0x18e));
    let y = null;
    try {
        if (typeof window !== a(0x172) && window['currentUser'])
            y = window[a(0x1cf)];
        else {
            const A = localStorage[a(0x1bd)](a(0x1cf));
            if (A)
                y = JSON[a(0x1d7)](A);
        }
    } catch (B) {
        console[a(0x1f0)](a(0x205), B), y = null;
    }
    console[a(0x1d2)](a(0x1bb), y);
    const z = y?.[a(0x15f)] || y?.['avatar'] || y?.['photo'] || y?.[a(0x1d0)] || null;
    console['log'](a(0x21d), z);
    if (y) {
        const C = y[a(0x210)] || y[a(0x17b)] || y['first_name'] || y[a(0x1f2)] || a(0x1b7), D = y[a(0x1fd)] || y[a(0x213)] || '';
        if (b)
            b[a(0x1e9)] = C;
        if (u)
            u[a(0x1e9)] = D;
        if (w)
            w[a(0x1e9)] = C;
        if (x)
            x[a(0x1e9)] = D;
        if (v) {
            if (z && g(z)) {
                console[a(0x1d2)]('✅\x20Setting\x20menu\x20avatar\x20from\x20validated\x20URL'), v['innerHTML'] = '';
                const E = document[a(0x162)](a(0x1e3));
                E['src'] = z, E['alt'] = C, E[a(0x1d6)]['cssText'] = 'width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20border-radius:\x2050%;', E['onerror'] = () => {
                    const F = a;
                    console[F(0x21b)](F(0x17a));
                }, v[a(0x1b0)](E);
            } else
                console['log'](a(0x20f));
        }
    } else {
        if (b)
            b[a(0x1e9)] = a(0x17c);
        if (u)
            u[a(0x1e9)] = a(0x165);
        if (w)
            w[a(0x1e9)] = a(0x17c);
        if (x)
            x[a(0x1e9)] = a(0x165);
    }
    o();
}
function r() {
    const a = d;
    console['log'](a(0x1c7)), console[a(0x1d2)](a(0x195), document['readyState']), e = document[a(0x16e)](a(0x186)), f = document[a(0x16e)](a(0x19e));
    const b = document[a(0x16e)]('closeUserMenu');
    console[a(0x1d2)]('Elements\x20found:', {
        'userMenuPanel': !!e,
        'userMenuBackdrop': !!f,
        'closeUserMenuBtn': !!b
    });
    const u = document[a(0x16e)](a(0x1f3)), v = document['getElementById'](a(0x209)), w = document[a(0x16e)](a(0x180)), x = document[a(0x16e)](a(0x1d1)), y = document[a(0x16e)](a(0x1f4)), z = document[a(0x16e)](a(0x184)), A = document['getElementById'](a(0x176)), B = document['getElementById']('editProfileNameBtn'), C = document[a(0x16e)](a(0x21c)), D = document[a(0x16e)](a(0x1ae));
    if (!e) {
        console[a(0x1f0)]('menu:\x20ERROR\x20-\x20userMenuPanel\x20not\x20found!');
        return;
    }
    n(), o(), j(), b ? (console[a(0x1d2)](a(0x196)), b[a(0x1c1)](a(0x1a9), F => {
        const G = a;
        console[G(0x1d2)](G(0x207)), F['stopPropagation'](), m();
    })) : console['warn'](a(0x1c6)), f && f[a(0x1c1)]('click', m), v && v['addEventListener'](a(0x1a9), () => {
        const F = a;
        console[F(0x1d2)](F(0x1a1));
    });
    const E = document[a(0x16e)](a(0x177));
    E && E['addEventListener']('click', F => {
        const G = a;
        F['stopPropagation'](), console['log'](G(0x181)), E[G(0x21e)]['toggle']('active');
        const H = E[G(0x1e6)](G(0x1b8));
        H && (E['classList']['contains'](G(0x194)) ? H['style']['right'] = G(0x212) : H[G(0x1d6)]['right'] = G(0x164));
    });
    if (E && E[a(0x21e)][a(0x1b2)](a(0x194))) {
        const F = E[a(0x1e6)](a(0x1b8));
        if (F)
            F[a(0x1d6)]['right'] = a(0x212);
    }
    B && B[a(0x1c1)](a(0x1a9), G => {
        const H = a;
        G['stopPropagation'](), console[H(0x1d2)](H(0x1b9));
    }), C && C[a(0x1c1)](a(0x1a9), G => {
        const H = a;
        G[H(0x20c)](), console[H(0x1d2)]('Edit\x20email\x20clicked');
    }), D && D['addEventListener'](a(0x1a9), G => {
        const H = a;
        G[H(0x20c)](), console['log'](H(0x160));
    }), w && w[a(0x1c1)]('click', () => {
        const G = a;
        m(), window[G(0x197)](G(0x16d), G(0x1ea));
    }), x && x[a(0x1c1)]('click', () => {
        const G = a;
        m(), console[G(0x1d2)](G(0x1dc));
    }), z && z[a(0x1c1)](a(0x1a9), () => {
        const G = a;
        m(), window[G(0x1e2)][G(0x1d4)] = '/dashboard.html';
    }), A && A[a(0x1c1)](a(0x1a9), () => {
        const G = a;
        m(), console[G(0x1d2)](G(0x1a4));
    }), y && y[a(0x1c1)]('click', async () => {
        const G = a;
        m();
        try {
            typeof clearUserData === 'function' && clearUserData();
        } catch (H) {
            console[G(0x1f0)](G(0x1fa), H);
        }
        console[G(0x1d2)]('🔐\x20Logging\x20out...');
        try {
            localStorage[G(0x1ca)](G(0x171)), localStorage[G(0x1ca)](G(0x1cf));
            const I = Object['keys'](localStorage);
            I['forEach'](J => {
                const K = G;
                (J[K(0x167)](K(0x1f6)) || J[K(0x167)]('auth') || J['includes'](K(0x224))) && localStorage['removeItem'](J);
            }), sessionStorage[G(0x1ab)](), window[G(0x1a0)] && await fetch(window[G(0x1a0)] + G(0x214), {
                'method': 'POST',
                'credentials': 'include'
            });
        } catch (J) {
            console[G(0x21b)](G(0x1fe), J);
        }
        console[G(0x1d2)](G(0x215)), window[G(0x1e2)]['href'] = G(0x182);
    }), window[a(0x1c1)](a(0x217), G => {
        const H = a;
        G['key'] === H(0x1cf) && (console[H(0x1d2)](H(0x216)), n());
    }), document[a(0x1c1)](a(0x200), () => {
        const G = a;
        console['log'](G(0x1c3)), n();
    }), document['addEventListener'](a(0x19c), () => {
        const G = a;
        console[G(0x1d2)](G(0x21f)), n();
    }), window[a(0x1de)] = {
        'openUserMenu': l,
        'closeUserMenuPanel': m,
        'userMenuPanel': e,
        'userMenuBackdrop': f,
        'updateProfileButton': n,
        'closeUserMenuBtn': b
    };
}
let s = ![];
function t() {
    const u = (function () {
            let x = !![];
            return function (y, z) {
                const A = x ? function () {
                    if (z) {
                        const B = z['apply'](y, arguments);
                        return z = null, B;
                    }
                } : function () {
                };
                return x = ![], A;
            };
        }()), v = u(this, function () {
            let x;
            try {
                const A = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                x = A();
            } catch (B) {
                x = window;
            }
            const y = x['console'] = x['console'] || {}, z = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let C = 0x0; C < z['length']; C++) {
                const D = u['constructor']['prototype']['bind'](u), E = z[C], F = y[E] || D;
                D['__proto__'] = u['bind'](u), D['toString'] = F['toString']['bind'](F), y[E] = D;
            }
        });
    v();
    const w = d;
    if (s) {
        console[w(0x1d2)](w(0x1ba));
        return;
    }
    s = !![], console['log']('Initializing\x20menu\x20system'), r();
}
document[d(0x1c0)] === d(0x198) ? document[d(0x1c1)](d(0x218), t) : t();