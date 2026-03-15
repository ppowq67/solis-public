const c = aS;
(function (a, b) {
    const aY = aS, aZ = a();
    while (!![]) {
        try {
            const b0 = -parseInt(aY(0x1c8)) / 0x1 + -parseInt(aY(0x3ec)) / 0x2 * (parseInt(aY(0x3f0)) / 0x3) + parseInt(aY(0x403)) / 0x4 + parseInt(aY(0x251)) / 0x5 * (parseInt(aY(0x205)) / 0x6) + parseInt(aY(0x51b)) / 0x7 + parseInt(aY(0x444)) / 0x8 * (-parseInt(aY(0x37c)) / 0x9) + parseInt(aY(0x23c)) / 0xa;
            if (b0 === b)
                break;
            else
                aZ['push'](aZ['shift']());
        } catch (b1) {
            aZ['push'](aZ['shift']());
        }
    }
}(X, 0x266f4));
const d = (function () {
        let a = !![];
        return function (b, aY) {
            const aZ = a ? function () {
                if (aY) {
                    const b0 = aY['apply'](b, arguments);
                    return aY = null, b0;
                }
            } : function () {
            };
            return a = ![], aZ;
        };
    }()), e = d(this, function () {
        const a = aS, b = function () {
                const b1 = aS;
                let b2;
                try {
                    b2 = Function('return\x20(function()\x20' + b1(0x1d8) + ');')();
                } catch (b3) {
                    b2 = window;
                }
                return b2;
            }, aY = b(), aZ = aY[a(0x39b)] = aY[a(0x39b)] || {}, b0 = [
                a(0x275),
                a(0x440),
                a(0x52d),
                a(0x302),
                a(0x32a),
                a(0x1c2),
                a(0x362)
            ];
        for (let b1 = 0x0; b1 < b0[a(0x56d)]; b1++) {
            const b2 = d[a(0x40c)]['prototype']['bind'](d), b3 = b0[b1], b4 = aZ[b3] || b2;
            b2[a(0x231)] = d['bind'](d), b2['toString'] = b4['toString'][a(0x332)](b4), aZ[b3] = b2;
        }
    });
e(), window[c(0x3c4)] = 'http://127.0.0.1:5500/api';
let f = null;
function g(a) {
    const b = c, aY = document[b(0x1b9)](b(0x2de));
    if (!aY)
        return;
    f && clearInterval(f);
    let aZ = Math['max'](0x0, a);
    const b0 = '<i\x20class=\x22fas\x20fa-arrow-right\x22></i>';
    aY[b(0x2ae)] = !![], aY[b(0x2d9)][b(0x3ed)](b(0x4a2)), aY['style'][b(0x415)] = b(0x3a7), aY[b(0x344)][b(0x3e6)] = b(0x472), aY['innerHTML'] = aZ + 's', aY[b(0x344)]['fontSize'] = b(0x435), f = setInterval(() => {
        const b1 = b;
        aZ--, aZ > 0x0 ? aY[b1(0x471)] = aZ + 's' : (clearInterval(f), f = null, aY[b1(0x2ae)] = ![], aY['classList'][b1(0x40f)]('is-generating'), aY['style']['opacity'] = '1', aY[b1(0x344)][b1(0x3e6)] = b1(0x375), aY[b1(0x471)] = b0, aY[b1(0x344)]['fontSize'] = b1(0x3b2));
    }, 0x3e8);
}
const h = document[c(0x1b9)](c(0x575)), i = h?.[c(0x1ff)](c(0x364)), j = document['getElementById'](c(0x21a)), k = document['querySelector'](c(0x286)), l = document[c(0x1b9)](c(0x35e)), m = document[c(0x1b9)](c(0x505)), n = document[c(0x1b9)](c(0x49f)), o = document[c(0x1b9)](c(0x221)), p = document['getElementById'](c(0x4ff)), q = document[c(0x1b9)](c(0x186)), r = document[c(0x1b9)]('upgradeModal'), s = document[c(0x1b9)](c(0x487)), t = document[c(0x1b9)](c(0x265)), u = document[c(0x1ff)]('.token-count'), v = document[c(0x350)](c(0x30b)), w = document[c(0x1b9)](c(0x542)), x = document[c(0x1ff)](c(0x4d9));
let y = ![], z = null, A = [], B = ![], C = c(0x42f), D = 0x5dc, E = null, F = null, G = [], H = null, I = 0x0, J = null, K = c(0x3ae), L = [];
function M(a) {
    const b = c;
    a && (a[b(0x212)](), a[b(0x4aa)]());
    const aY = document[b(0x1b9)](b(0x279));
    if (!aY)
        return;
    const aZ = !aY[b(0x2d9)]['contains'](b(0x24f));
    if (aZ) {
        const b0 = aY[b(0x350)]('.nav-item:not(.nav-collapse-toggle)');
        b0[b(0x321)]((b1, b2) => {
            const b3 = b;
            b1[b3(0x344)][b3(0x2a3)] = b2 * 0x1e + 'ms';
        }), aY[b(0x2d9)][b(0x3ed)](b(0x24f)), setTimeout(() => b0['forEach'](b1 => b1[b(0x344)][b(0x2a3)] = ''), 0x190);
    } else {
        aY[b(0x2d9)]['remove'](b(0x24f));
        const b1 = aY[b(0x350)]('.nav-item:not(.nav-collapse-toggle)');
        b1[b(0x321)]((b2, b3) => {
            const b4 = b;
            b2[b4(0x344)][b4(0x2a3)] = b3 * 0x28 + 'ms';
        }), setTimeout(() => b1[b(0x321)](b2 => b2[b(0x344)][b(0x2a3)] = ''), 0x190);
    }
}
function N(a) {
    const b = c;
    a['preventDefault'](), a['stopPropagation']();
    const aY = document[b(0x1b9)](b(0x557));
    aY && aY[b(0x2d9)][b(0x4dc)](b(0x4c0));
}
function O() {
    const a = c, b = document['getElementById'](a(0x557));
    b && b[a(0x2d9)][a(0x40f)](a(0x4c0));
}
function P() {
    const a = c;
    O();
    const b = document[a(0x1ff)](a(0x57f));
    if (b)
        b['click']();
    else {
    }
}
function Q() {
    const a = c;
    O();
    const b = document[a(0x1ff)](a(0x208));
    b && handleNav(b, 0x3);
}
function R() {
    const a = c;
    O();
    const b = document[a(0x1ff)](a(0x20d));
    b && b[a(0x185)]();
}
function S() {
    const a = c, b = document[a(0x1ff)]('.input-section'), aY = b ? b[a(0x1ff)]('.input-container') : null, aZ = parseInt(localStorage[a(0x394)]('sidebarActiveIndex') || '0');
    aY && aY[a(0x2d9)][a(0x40f)](a(0x51d), 'animate-down', a(0x498)), b && (b[a(0x2d9)][a(0x40f)]('is-first-prompt'), aZ === 0x0 ? b['style'][a(0x532)] = a(0x1a3) : b['style']['cssText'] = a(0x1d9));
}
window['dockInputInstantly'] = S;
function T() {
    const a = c;
    ar('[Auth]\x20Initializing\x20authentication...'), a1()[a(0x515)](b => {
        const aY = a;
        H ? (ar(aY(0x3b4), H['email']), typeof updateProfileButton === 'function' && updateProfileButton()) : (ar('[Auth]\x20User\x20not\x20authenticated,\x20showing\x20guest\x20UI'), a3());
    })[a(0x4f3)](b => {
        ar('[Auth]\x20Unexpected\x20error\x20during\x20initialization:', b), a3();
    }), ar(a(0x242));
}
function U(a) {
    const b = c;
    if (!a)
        return 'Unknown\x20error';
    const aY = String(a[b(0x45b)] || a)['trim'](), aZ = [
            b(0x2f6),
            'network',
            'failed',
            'unauthorized',
            b(0x4de),
            'invalid',
            'error'
        ], b0 = aY[b(0x3f2)]();
    if (aZ[b(0x577)](b1 => b0['includes'](b1)))
        return aY[b(0x51e)](0x0, 0x64);
    return b(0x1ae);
}
function V(a, b = 0x3e8, aY = c(0x200)) {
    const aZ = c;
    if (typeof a !== aZ(0x590))
        return {
            'valid': ![],
            'error': aY + '\x20must\x20be\x20a\x20string'
        };
    if (a[aZ(0x56d)] > b)
        return {
            'valid': ![],
            'error': aY + aZ(0x404) + b + '\x20character\x20limit'
        };
    if (a[aZ(0x56d)] === 0x0)
        return {
            'valid': ![],
            'error': aY + '\x20cannot\x20be\x20empty'
        };
    return {
        'valid': !![],
        'value': a[aZ(0x317)]()
    };
}
function W(a, b = 0x200) {
    const aY = c, aZ = V(a, b, aY(0x56f));
    if (!aZ[aY(0x58a)])
        return aZ;
    try {
        const b0 = aZ[aY(0x328)]['startsWith'](aY(0x2e7)) ? aZ['value'] : aY(0x327) + aZ[aY(0x328)], b1 = new URL(b0);
        return {
            'valid': !![],
            'value': aZ[aY(0x328)]
        };
    } catch (b2) {
        return {
            'valid': ![],
            'error': aY(0x4a8)
        };
    }
}
function X() {
    const a = [
        'y29TCgXLDgvK',
        'y29SB3i',
        'mtK3mc0Wms0Wmq',
        'Ag9ZDg5HBwu',
        'vw5RBM93BIbWCM9JzxnZAw5NigvYCM9Y',
        'Bwf4oG',
        'y2fYzc1MB290zxi',
        '4PYfiezpvu5e',
        'BgLNAhq',
        'y2XPCenVBMzPCM1by2nLChq',
        'DgvZDa',
        'zgfPBhLFBgLTAxq',
        'qxzHAwXHyMXLoG',
        'zgf0ys1PDgvTlwLK',
        'mc44nwvT',
        '4PYfifbYBYbMzwf0DxjLig1VzgfSihnOB3DUigzVCJO',
        'C3rVCefSBe1VBML0B3jPBMC',
        'C3rHCNrmAwjYyxj5ug9SBgLUzW',
        'rxjYB3iGAw5PDgLHBgL6Aw5NientuKyGDg9Rzw46',
        'pgrPDIbJBgfZCZ0IBg9HzgvYlxbHCNqGBg9HzgvYlxbHCNqT',
        'ig1PBIbVBgqPoIa',
        'u2f2zwqG',
        'AgfZ',
        'iIbZDhLSzt0IB3bHy2L0EtOG',
        'q29TCgLSzsbIzwzVCMuGyw5KigfMDgvYihrYyw5ZzM9YBwf0Aw9UignSAxbZ',
        'D2fYBG',
        'zgf0ys10AgvTzq',
        'mNb4',
        'q2XPCcbJB21WAwXHDgLVBIbLCNjVCJO',
        'mZeYzvbND25q',
        'zxjYB3jeDxjHDgLVBLrLEhq',
        'lNnLDhrPBMDZlw9WDgLVBG',
        'vgvTCgXHDguGBM90igzVDw5K',
        'l2f1DgGVC3vIC2nYAxb0Aw9U',
        'zNjLzq',
        'ww91vhvIzsbwAwrLBYaOsuq6ia',
        'zMXLEa',
        'tK8Gv0fz',
        'lNDHDgvYBwfYAY10B2DNBguTC2XPzgvY',
        'z2vUzxjHDgLVBLbYB2DYzxnZvgv4Da',
        'Bw92zvrVtgLICMfYEq',
        'Ahr0Chm6lY92AweUCgXHy2vOB2XKzxiUy29TlZeWmdb4nJaWp3rLEhq9tM8Rsw1Hz2u',
        'zMv0y2Huzw1WBgf0zvbYzxzPzxC',
        'Ew91DhuUyMu',
        'y29SBgvJDen1C3rVBwL6yxrPB25Z',
        '4PYfihrLC3ruzw1WBgf0zvbYzxzPzxCOksbPCYbYzwfKEsaTihj1BIbPDcbPBIbJB25ZB2XL',
        'BwfUDwfSuMvMCMvZAa',
        'iL0GlMXVywrPBMCTCgvYy2vUDgfNzq',
        'z2v0u3rHDhvZswnVBG',
        'rMfPBgvKihrVihnHDMuGBgLICMfYEsbPDgvTCZO',
        'y3jLyxrL',
        'rMfPBgvKihrVigLUAxrPywXPEMuGq2XPChmGu3r1zgLVoG',
        'BwvZC2fNzq',
        'jsaTia',
        'AxnnB25PDg9YAw5N',
        'rxjYB3iGBg9HzgLUzYbzB3vuDwjLihn1yNrPDgXLCZO',
        'u0vdvvjjvfK',
        'BMv3q2XPCej0BG',
        'Aw5UzxjizwLNAhq',
        '4PYfie1VzgfSigvSzw1LBNrZigzVDw5KlcbZAg93Aw5NignVBMzPCM1HDgLVBG',
        'DgfYz2v0',
        'zgvSzxrL',
        'zMLUza',
        't0SGv0fjva',
        '4PYtifzPzgvVihrVBYbSB25NigrLDgvJDgvKicHMywXSyMfJAYK6',
        'sw52ywXPzcb0zw1WBgf0zq',
        'ChjVAMvJDeLK',
        'ChjLDMLLD1zPzgvVrM9YBwf0',
        'DxnLu2XVDfn5C3rLBq',
        '4P2miezHAwXLzcb0BYbPBML0AwfSAxPLifDLyLnVy2TLDdO',
        'icaGmI4GqMfJA2vUzcbZzxrZifnHBwvtAxrLpvn0CMLJDcbVBIbHDxrOignVB2TPzq',
        'y2XPCfbYB2nLC3nPBMC',
        'zMvHDhvYzs1TB2rHBa',
        'C2LKzwjHCKv4CgfUzgvK',
        'Aw5Uzxjive1m',
        'BM90lwfSBg93zwq',
        '8j+tPcbezwXLDgLUzYbWCM9Qzwn0igzYB20GC2vYDMvYoIa',
        'Aw5SAw5LlwzSzxG',
        'lNnLDhrPBMDZlw9WDgLVBIaUB3b0Aw9UlwrLC2nYAxb0Aw9U',
        'ChjVlw1VzgfSlw92zxjSyxK',
        'w2rHDgeTDgvTCgXHDgu9iG',
        'zgfPBhLFy291BNq',
        'C2vSzwn0zwruzw1WBgf0zq',
        'C3jJ',
        'B3bHy2L0EsaWlJi1CYbLyxnL',
        'zg93BMXVywrdBgLW',
        'CgXHBL92AwrLB19SAw1PDa',
        'ChjLDMLLD1zPzgvVrhvYyxrPB24',
        'C3vIDgL0BgvZ',
        'Bg9Hzfn0B3jHz2vjBMzV',
        'w2rHDgeTBg9HzgLUzY1Pzd0I',
        'C3vIDgL0Bgu',
        'zhvYyxrPB24',
        'DMLLD0fSBefJDgL2Axr5qNrU',
        'z2v0u2XVDhm',
        'DMLKzw9FBwLUDxrLCW',
        'y2XVC2vvCgDYywrL',
        'Aw5PDgLHBgL6zvDLyLnVy2TLDa',
        'yNv0Dg9U',
        'zMXVB3i',
        'icdINiuGvxbKyxrLzcbMB3jTyxq',
        'BwfW',
        'l2nSAxbZl2nOzwnRlwXPBwL0CW',
        'l2f1DgGVEw91DhvIzs9ZDgf0Dxm',
        'D2LKDgG9',
        'C3rHCNrnB25PDg9YAw5N',
        'l2f1DgGVD2f0zxjTyxjRlwnOzwnR',
        'qwjVCNrfCNjVCG',
        'zhvYyxrPB25FBwLUDxrLCW',
        'ANnVBG',
        'C2v0DxbxyxrLCM1HCMTuB2DNBgu',
        'C3vIC2nYAxb0Aw9U',
        'Aw5PDgLHBgL6zwq',
        'yw5PBwf0zs11Ca',
        'zMLSDgvYtgLICMfYEq',
        'wu9vvfvcrv9bvvrix1nvq0nfu1m',
        'ugf0DgvYBIaYig1HDgnOoG',
        'y29UBMvJDfLVDvr1yMvcDxr0B24',
        'AgLNAgXPz2H0zwq',
        'y2XLyxjpBgrqCM9JzxnZAw5Nrgf0yq',
        'C2v0DgLUz3ncDg4',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        '4PYtifnHDMvKia',
        'AxmTz2vUzxjHDgLUzW',
        'CMfUA2vKx2nVBxbPBgf0Aw9U',
        '8j+tOsbmAwjYyxj5igf1Dg8TCg9SBgLUzYbZDg9WCgvK',
        'zgLZCgf0y2HfDMvUDa',
        'lNbYBY1WBgfUlwnHCMq',
        'y2XPCfn0yxrqCM9JzxnZAw5N',
        'sw52ywXPzcbvuKWGzM9YBwf0',
        'ChjVy2vZC1LVDvr1yMvvCMW',
        'C3rVCfbYB3bHz2f0Aw9U',
        'D2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGyM9YzgvYlxjHzgL1CZOGntaLoYbVyMPLy3qTzML0oIbJB3zLCJS',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iMv4Cg9YDc1IDg4GBgLICMfYEs1KB3DUBg9Hzc1IDg4IigrHDgeTChjVAMvJDc1Pzd0I',
        'Aw5Zzxj0qwrQywnLBNrive1m',
        '4P2mierVD25SB2fKigvYCM9YoG',
        'Bw91C2v1Ca',
        'q3jLyxrLigeGAgLNAgXPz2H0ihjLzwWGB2yGzxbPyYbMywLSCYbHBMqGzNvUBNKGBw9Tzw50CW',
        'y3vYCMvUDefjuhjVBxb0',
        '4PYfiezVDw5KigvSzw1LBNqGD2L0AcbPzdOG',
        'CMv2B2TLt2jQzwn0vvjm',
        '4P2mifDHDgvYBwfYAYbisureru4',
        'y2XLyxjqCM9JzxnZAw5NsxrLBxm',
        '8j+NUsbqB2XSAw5NignSzwfUDxa6ia',
        't0f1DgGGzxjYB3i6',
        'ChjLDMLLD1DHDgvYBwfYA1rVz2DSzq',
        'v2vIu29JA2v0ignSAwvUDcbUB3qGyxzHAwXHyMXLihLLDcWGCMv0CNLPBMCUlI4',
        'y3rYBeTLEq',
        'DgfNtMfTzq',
        'y2XPCfn0yxrszw5KzxjPBMC',
        'y2fYzc1WCMv2Awv3',
        'mtuTmZbZ',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iMXPyNjHCNKTy2fYzciGzgf0ys1Pzd0I',
        'zxHWyw5Kzwq',
        '8j+uKIbcBg9JA2vKihbVC3rnzxnZywDLigzYB20GDw50CNvZDgvKig9YAwDPBJO',
        'y3vYCMvUDf92AwrLB19JB3vUDa',
        'CMvWBgfJzvn0yxrL',
        'lNbYB2zPBguTBM90AwyTD3jHChbLCG',
        'u3rHDhvZiePtt04GCgfYC2uGzxjYB3i6',
        'ugXLyxnLigvUDgvYigeGww91vhvIzsbvuKWGzMLYC3q',
        '8j+xHo+4JYbszw1VDMLUzYbMCM9TigXVy2fSigfYCMf5CW',
        'vKLeru9Fve9px0XptKC',
        '4PYfie9l',
        'rMfPBgvKihrVigzLDgnOihn1yNnJCMLWDgLVBIbPBMzV',
        'vMLKzw8GDgvTCgXHDguGChjLDMLLDW',
        'Bg9HzgLUzW',
        'z2v0qxr0CMLIDxrL',
        '4PQG77IpiefuieXjtuLu',
        'lMXPyNjHCNKTzgvSzxrLlwj0BG',
        'y2XPCc1WCM9JzxnZAw5Nlw1VzgfS',
        'C3rYAw5NAwz5',
        'vw5RBM93BIbLCNjVCG',
        'y2XLyxi',
        'zw1HAwW',
        'C2v0DxbfDMvUDeXPC3rLBMvYCYGPoIbKyxjRtw9KzvnLDhrPBMDZvg9Nz2XLigLZig5VDcbHBIbPBNb1DcbJAgvJA2jVEc4GrgfYAYbTB2rLigz1BMn0Aw9UywXPDhKGBwf5igjLigLTCgfPCMvKlG',
        'cIaGicaGicaGicaGicaGica8C3zNihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYiGD2LKDgG9iJi0iIbOzwLNAhq9iJi0iIb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIbZDhjVA2uTD2LKDgG9iJiIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzciGC3rYB2TLlwXPBMvQB2LUpsjYB3vUzci+cIaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0IttiGmJfHoca4idaGmcaXideXlJG3mY03iI8+cIaGicaGicaGicaGicaGicaGicaGpgnPCMnSzsbJEd0ImtaIign5psi4iIbYpsi1iI8+cIaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0IBte3ide3iduGnsiVpGOGicaGicaGicaGicaGicaGicaGidXWyxrOigq9iM0YmIaXnY01iduIlZ4kicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGica',
        'mca3ns4ZnG',
        'BwvZC2fNzufKzgvK',
        'lM5HDI1PDgvTlNnPz24TAw4',
        'igrHEq',
        '4P2mifnfq1vssvrzoIbjBNzHBgLKigL0zw1jzcbMB3iGzgvSzxrLoIa',
        'Dg9Nz2XL',
        'l2fWAs9Nyw1LCgXHEs9HDMfPBgfIBgu',
        'BM90igzVDw5K',
        'iIb0AxrSzt0IrgvSzxrLignSAxaIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn2zYb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIbZDhjVA2uTD2LKDgG9iJiUnsiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Cgf0AcbKpsjnmYa2Ade4iI8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0Itte5idz2mtrJmcaXlteGmI0Yidjin2mTmsaWltiTms0YltjwnIiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWyxrOigq9iK04idzwngmWlteGms0YidiTmMG0yZeGmcaYideGmIaYDJiIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0ImtaIihKXpsiXmsiGEdi9iJeWiIb5mJ0ImtCIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0ImtqIihKXpsiXmsiGEdi9iJe0iIb5mJ0ImtCIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnHCMqTy29UDgvUDci+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IAw5MBY1NCM91Cci+cIaGicaGicaGicaGicaGicaGicaGicaGidXOmIbJBgfZCZ0Iy2fYzc10AxrSzsi+',
        'lNnLDhrPBMDZlwjHy2TKCM9W',
        'qxv0Acb2zxjPzMLJyxrPB24GzxjYB3i6',
        'sw52ywXPzcbzB3vuDwjLifvsta',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCMv2Awv3lxzPzgvVlxbSywnLAg9SzgvYiJ4kicaGicaGicaGicaGicaGicaGica8AsbJBgfZCZ0IzMfZigzHlwv4y2XHBwf0Aw9UlwnPCMnSzsi+pc9PpGOGicaGicaGicaGicaGicaGicaGidXWpKvYCM9YigXVywrPBMCGChjLDMLLDZWVCd4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica',
        'rMLSDgvYzwqGyNK6ia',
        'igrHExm',
        'l2fWAs9JBgLWCY9KDxjHDgLVBI8',
        'AgvHzgvYCW',
        'C3rVCMfNzv9PBMzV',
        'rMfPBgvKihrVihnHDMuGChjVy2vZC2LUzYbPDgvTCZO',
        'ChjVz3jLC3ndAxjJBgu',
        'u2LKzs1IEs1ZAwrLihzPzgvVignVBxbHCMLZB24',
        'rMfPBgvKihrVihnHDMuGzxzLBIbHzNrLCIbJBgvHBNvWoG',
        'C29SAxnbsvDHDgvYBwfYA0vUywjSzwq',
        'y2XLyxjdAgf0sgLZDg9YEuj0BG',
        'C2v0qxr0CMLIDxrL',
        'DMLZAwjPBgL0EwnOyw5NzsbOyw5KBgvYigvYCM9Y',
        'C3rHCNrtBwfYDe1VBML0B3jPBMC',
        'BgLICMfYEuDYAwq',
        'y2f0y2G',
        '4P2mievYCM9YoIa',
        'BM9Uzq',
        'lM9WDgLVBI1Uyw1L',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'yM9YzgvYq29SB3i',
        'Aw5UzxjxAwr0Aa',
        'q2XPCa',
        'BM90AwzPy2f0Aw9Uia',
        'DgL0Bgu',
        'DgH1BwjUywLSvxjS',
        'Dhj1zq',
        'y2XVC2vtzxr0Aw5NCW',
        'zwrPDg9Y',
        'uxvVDgffEgnLzwrLzevYCM9Y',
        '8j+NUsbdBgvHBMLUzYb1Cca',
        'C3rHDhvZvgv4Da',
        'zhvYyxrPB25FzM9YBwf0DgvK',
        'DxnLCK1LBNu',
        'q2HHDcbOAxn0B3j5ignSzwfYzwq',
        'su0GrfLjtKC',
        'B2zMC2v0sgvPz2H0',
        'zgfPBhK',
        'CgfKu3rHCNq',
        'zw50CMLLCW',
        '4PQG77IpienVDwXKig5VDcb2zxjPzNKGC2vZC2LVBI4Gq29UDgLUDwLUzYbPBIbNDwvZDcbTB2rLlG',
        'zgf0ys1PBML0AwfSAxPLza',
        'ugXLyxnLihDHAxqGysbTB21LBNqGyMvMB3jLihrYEwLUzYbHz2fPBG',
        'DMfSAwrHDgvqCM9Qzwn0swq',
        'zgvZy3jPChrPB24',
        'ywjVCNq',
        'BgLUAW',
        'y2XPChnmAwjYyxj5',
        'yMXVy2S',
        'DgHLBG',
        'C3bPBM5LCG',
        'vMLKzw8GDg9VigXVBMCGka',
        'y2XPCfbYzxzPzxDdB250ywLUzxi',
        'zg9JDw1LBNrfBgvTzw50',
        'Dw5RBM93BG',
        'mtK0mdrUs0zXv3G',
        'BgLTAxq',
        'zMLYC3qTChjVBxb0',
        'C3vIC3rYAw5N',
        'C3rHDhvZ',
        'igLUihbYzxzPzxC',
        'CMfUA2LUzW',
        'C3rVCe1VBML0B3jPBMC',
        'v2fYBMLUzZOGrMfPBgvKihrVigrLBgv0zsbMAwXLCYbVBIbZzxj2zxi',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        '4PQG77IpifvZzxiGBM90igf1DgHLBNrPy2f0zwqGlsbxzwjtB2nRzxqGC2TPChbLza',
        'y3vYCMvUDfrHCMDLDa',
        'zgvSzxrLuhjVy2vZC2LUz0L0zw0',
        'ywLqCM9TChrjBNb1Da',
        'y29UBMvJDgvK',
        'CMvTywLUAw5Nx3nLy29Uzhm',
        'DxbKyxrLv2f0zxjTyxjRvg9Nz2XLu3rHDgu',
        'C2XVDfn5C3rLBuLUzM8',
        'Aw5MBW',
        '4PQG77Ipig5HBwvfBcbUB3qGzM91BMq',
        'zgvSzxrLq29UzMLYBwf0Aw9Uvgv4Da',
        'BgLICMfYEq',
        'lgXLzNq9',
        'y3nZvgv4Da',
        '4P2mievYCM9YigXVywrPBMCGDgLLCIbPBMzVoG',
        'ugXLyxnLihbYB2nLC3mGysbzB3vuDwjLifvstcbMAxjZDa',
        'CM90yxrLza',
        'DxjSqNv0Dg9Utg9JA2vKDw50AwW',
        'z2v0rMLSBgvKu2XVDhm',
        'r0iGC3rVCMfNzq',
        'DxjSrgLZCgXHEq',
        'y2HLy2TwAwrLB0r1CMf0Aw9UqMvMB3jLvgvTCgXHDgvZ',
        'y2XVC2vuzw1WBgf0zvbYzxzPzxDcDg4',
        'rxjYB3iGy2HLy2TPBMCGD2f0zxjTyxjRigvSAwDPyMLSAxr5oG',
        'Dg90ywXdBgLWCW',
        '8j+NUsbdBgvHCMLUzYa',
        '4PYtieXVywrLzca',
        'DgvTCgXHDgvZ',
        'Bg9HzevKAxrVCKrHDge',
        'C2LNBKLUqNrU',
        'D2f0zxjTyxjRvg9Nz2XL',
        'z2v0v2f0zxjTyxjRugfYyw1Z',
        'cIaGicaGicaGicaGicaGicaGicaGphn2zYb3Awr0Ad0ImtGIigHLAwDODd0ImtGIihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImI41iIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpGOGicaGicaGicaGicaGicaGicaGicaGica8Cgf0AcbKpsjnmJeGmtv2ngeYidiGmcaWideTmIaYsdvHmIaYidaGmcaXltiTmNyTnciVpGOGicaGicaGicaGicaGicaGicaGicaGica8zYbJBgfZCZ0IzxHWB3j0lwfYCM93iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWB2X5BgLUzsbWB2LUDhm9iJCGmtaGmtiGmtuGmtCGmtaIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSAw5LihGXpsiXmIiGEte9iJe1iIb4mJ0ImtiIihKYpsiZiI8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzZ4kicaGicaGicaGicaGicaGicaGica8l3n2zZ4kicaGicaGicaGicaGicaGicaGicbfEhbVCNqkicaGicaGicaGicaGicaGia',
        'ywn0AxzPDhLmAxn0',
        'y2XPChnqCM9JzxnZAw5N',
        'sefiquHbsee',
        'C2HVD0DHBwvWBgf5ugfUzwW',
        'zMLSDgvY',
        'q3jLyxrLigeGDhv0B3jPywWGC25PChbLDcbZzxjPzxmGzNjVBsb5B3vYigXVBMDLCIb2AwrLB3m',
        'Ahr0Chm6lY9HCgKUC29SAxnHAs52AwrLBY9HCgK',
        'vgLRvg9Ric8Gu2HVCNrZ',
        'C2HVD1bYB0zLyxr1CMvnB2rHBa',
        'icHtBg90ia',
        'q29TCgLSzsbQyxCTzhjVChbPBMCGBw9Tzw50CYbHBMqGCgXVDcb0D2LZDhm',
        'u2vYDMvYigvYCM9YoIa',
        'y3jLyxrLzf9HDa',
        '8j+tIYbnB2rHBcbKAxnWBgf5zwq',
        'y2XPCfn0yxreB3DUBg9Hza',
        'cIaGicaGicaGicaGicaGicbaA2v5zNjHBwvZigzHzgvjBK92zxjSyxKGEYb0BYb7ig9WywnPDhK6ide7ih0GFqOGicaGicaGicaGicaGicaGqgTLEwzYyw1LCYbZBgLKzvvWihSGcIaGicaGicaGicaGicaGicaGicaGzNjVBsb7ig9WywnPDhK6ida7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGXohb4ksbZy2fSzsGWlJK3ktSGFqOGicaGicaGicaGicaGicaGicaGihrVihSGB3bHy2L0EtOGmtSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPihnJywXLkdePoYb9cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicbaA2v5zNjHBwvZihbVCeLUihSkicaGicaGicaGicaGicaGicaGicaWjsb7ihrYyw5ZzM9YBtOGC2nHBguOmcKGCM90yxrLkc0XnwrLzYK7ig9WywnPDhK6ida7ih0kicaGicaGicaGicaGicaGicaGica2mcuGEYb0CMfUC2zVCM06ihnJywXLkdeUmsKGCM90yxrLkdrKzwCPoYbVCgfJAxr5oIaXoYb9cIaGicaGicaGicaGicaGicaGicaGodaLihSGDhjHBNnMB3jToIbZy2fSzsGWlJK1ksbYB3rHDguOltjKzwCPoYb9cIaGicaGicaGicaGicaGicaGicaGmtaWjsb7ihrYyw5ZzM9YBtOGC2nHBguOmsKGCM90yxrLkdbKzwCPoYbVCgfJAxr5oIaXoYb9cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicbaA2v5zNjHBwvZigzHzgvvCefUAw0GEWOGicaGicaGicaGicaGicaGicaGigzYB20GEYbVCgfJAxr5oIaWoYb0CMfUC2zVCM06ihrYyw5ZBgf0zvKOohb4ktSGFqOGicaGicaGicaGicaGicaGicaGihrVihSGB3bHy2L0EtOGmtSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPoYb9cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1TB2rHBc1VDMvYBgf5ihSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGicaGicaGicbPBNnLDdOGmcaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWWldaSmc4ZksaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGicaGigjHy2TKCM9WlwzPBhrLCJOGyMX1CIG4ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicaGicaGicaGicaGlxDLyMTPDc1IywnRzhjVCc1MAwX0zxi6igjSDxiOohb4ksaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGicaGicaGicb6lwLUzgv4oIa5otK5icfPBxbVCNrHBNq7cIaGicaGicaGicaGicaGicaGicaGCgfKzgLUzZOGmJbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicaGicaGicaGig9WywnPDhK6ida7cIaGicaGicaGicaGicaGicaGicaGyw5PBwf0Aw9UoIbMywrLsw5pDMvYBgf5idaUm3mGzwfZzsbMB3j3yxjKCZSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlw1VzgfSihSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJzMzMoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idi4ChG7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6ideWmcu7cIaGicaGicaGicaGicaGicaGicaGBwf4lxDPzhrOoIa4mJbWEdSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmZjWEca4mhb4ihjNyMeOmcWWldaSmc4XmIKSidaGmcaWidfWEcbYz2jHkdaSmcWWldaUmduPoWOGicaGicaGicaGicaGicaGicaGig9WywnPDhK6ida7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvzkde4ChGPihnJywXLkdaUotCPoWOGicaGicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGC2XPzgvvCcaWlJq1CYbJDwjPyY1IzxPPzxiOmc4ZncWXlJqSmc42ncWXksaWlJfZigzVCNDHCMrZoWOGicaGicaGicaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGicaGicaGicaGBwLUlwHLAwDODdOGndqWChG7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1Wyw5LBc1Szwz0ihSkicaGicaGicaGicaGicaGicaGicb3Awr0AdOGntiLoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngrey2rJm7cIaGicaGicaGicaGicaGicaGicaGCgfKzgLUzZOGndrWEca0mhb4oWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGzMXLEc1KAxjLy3rPB246ignVBhvTBJSkicaGicaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGicaGicaGicaGCg9ZAxrPB246ihjLBgf0AxzLoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YAwDODdOGmxb4ihnVBgLKicnfqKvcrui7cIaGicaGicaGicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbHBMvSlwXLzNq6oMjLzM9Yzsb7cIaGicaGicaGicaGicaGicaGicaGy29UDgvUDdOGjYC7cIaGicaGicaGicaGicaGicaGicaGCg9ZAxrPB246igfIC29SDxrLoWOGicaGicaGicaGicaGicaGicaGigjVDhrVBtOGltCWChG7cIaGicaGicaGicaGicaGicaGicaGBgvMDdOGltCWChG7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6idi0mhb4oWOGicaGicaGicaGicaGicaGicaGigHLAwDODdOGmJqWChG7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGntaLoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngrKqWqZi7cIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmc4YntSkicaGicaGicaGicaGicaGicaGicbWB2LUDgvYlwv2zw50CZOGBM9UztSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbHBMvSlwXLzNq6oMfMDgvYihSkicaGicaGicaGicaGicaGicaGicbJB250zw50oIaNjZSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGywjZB2X1Dgu7cIaGicaGicaGicaGicaGicaGicaGDg9WoIaTntbWEdSkicaGicaGicaGicaGicaGicaGicbYAwDODdOGltuWChG7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6ide2mhb4oWOGicaGicaGicaGicaGicaGicaGigHLAwDODdOGmtyWChG7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGntaLoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngrKqWqZi7cIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmc4YoWOGicaGicaGicaGicaGicaGicaGihbVAw50zxiTzxzLBNrZoIbUB25LoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TBgvMDc10B3aGEYbWB3nPDgLVBJOGCMvSyxrPDMu7ihOTAw5KzxG6ide7ih0kcIaGicaGicaGicaGicaGicaUChjVlwXVy2STD3jHCcb7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6idy0ChG7cIaGicaGicaGicaGicaGicaGicaGAgvPz2H0oIa2nhb4oWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icnMzMy7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtHWEdSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGmJrWEdSkicaGicaGicaGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnNb4ihjNyMeOmJu1ldeWnIW2msWWlJeYktSkicaGicaGicaGicaGicaGicaGicbHBMLTyxrPB246ihbVCeLUidaUnxmGy3vIAwmTyMv6AwvYkdaUmZqSms41nIWWlJy0ldePidaUnhmGyM90AdSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxrPDgXLihSkicaGicaGicaGicaGicaGicaGicbMB250lwzHBwLSEtOGj0LUC3rYDw1LBNqGu2vYAwyNlcbZzxjPzJSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idmWChG7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icmXmte7cIaGicaGicaGicaGicaGicaGicaGBgLUzs1OzwLNAhq6ideUmJSkicaGicaGicaGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGltaUnhb4oWOGicaGicaGicaGicaGicaGicaGig1HCMDPBI1IB3r0B206ideWChG7cIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicaGicaGicaGicaGicbHBMLTyxrPB246igzHzgvvCefUAw0Gmc4ZnxmGzwfZzsaWlJu1CYbMB3j3yxjKCZSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxn1yNrPDgXLihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icm1ntu7cIaGicaGicaGicaGicaGicaGicaGBgLUzs1OzwLNAhq6ideUnJu7cIaGicaGicaGicaGicaGicaGicaGBwf4lxDPzhrOoIaYnZbWEdSkicaGicaGicaGicaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGzMfKzvvWqw5PBsaWlJm1CYbLyxnLidaUnJnZigzVCNDHCMrZoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TDgvTCgXHDguTChjLDMLLDYb7cIaGicaGicaGicaGicaGicaGicaGCg9ZAxrPB246ihjLBgf0AxzLoWOGicaGicaGicaGicaGicaGicaGihOTAw5KzxG6ide7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGi2zMzJSkicaGicaGicaGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJrujfqKvcoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ide2ChG7cIaGicaGicaGicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGzMfKzvvWqw5PBsaWlJm1CYbLyxnLidaUnZjZigzVCNDHCMrZoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TDhbIlxbYzxzPzxCGEWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngnuy0rJi7cIaGicaGicaGicaGicaGicaGicaGAgvPz2H0oIa5mhb4oWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGCMvSyxrPDMu7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY10CgiTChjVihSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGywjZB2X1Dgu7cIaGicaGicaGicaGicaGicaGicaGDg9WoIa4ChG7cIaGicaGicaGicaGicaGicaGicaGCMLNAhq6idHWEdSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJrKy2qtneoWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJzMzMoWOGicaGicaGicaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaWlJvWEdSkicaGicaGicaGicaGicaGicaGicbWywrKAw5NoIaZChGGoxb4oWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWmhb4oWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TDhbIlwLUzM8GEWOGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6ideYChGGmtrWEdSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TDhbIlwLUzM8GC3rYB25NihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ideZChG7cIaGicaGicaGicaGicaGicaGicaGzM9UDc13zwLNAhq6idyWmdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGiZeXmtSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxrWyI1PBMzVihnWyw4GEWOGicaGicaGicaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGi0fbqtSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlwXVy2TLzc1VDMvYBgf5ihSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGywjZB2X1Dgu7cIaGicaGicaGicaGicaGicaGicaGAw5Zzxq6ida7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYntmSmJq2ldi0mYWWlJu1ktSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1Wyw5LBc1YAwDODcb7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6idq4jtSkicaGicaGicaGicaGicaGicaGicbWywrKAw5NoIa0nhb4idm2ChG7cIaGicaGicaGicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoWOGicaGicaGicaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSkicaGicaGicaGicaGicaGicaGicbWB3nPDgLVBJOGCMvSyxrPDMu7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1JBg9Zzs1IDg4GEWOGicaGicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbHyNnVBhv0ztSkicaGicaGicaGicaGicaGicaGicb0B3a6ide4ChG7cIaGicaGicaGicaGicaGicaGicaGCMLNAhq6ide4ChG7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6idmYChG7cIaGicaGicaGicaGicaGicaGicaGAgvPz2H0oIaZmNb4oWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJrujfqKvcoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihrYyw5ZCgfYzw50oWOGicaGicaGicaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icnbque7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZoWOGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6ida7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1JBg9Zzs1IDg46Ag92zxiGEWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngnuy1rJu7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icmXmte7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUCY1SywjLBcb7cIaGicaGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicaGicaGicaGigzVBNqTD2vPz2H0oIa2mda7cIaGicaGicaGicaGicaGicaGicaGBgv0DgvYlxnWywnPBMC6idfWEdSkicaGicaGicaGicaGicaGicaGicb0zxH0lxrYyw5ZzM9YBtOGDxbWzxjJyxnLoWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJqufboWOGicaGicaGicaGicaGicaGicaGig1HCMDPBI1IB3r0B206ideYChG7cIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicaGicaGicaGicaGicbHBMLTyxrPB246igzHzgvvCefUAw0Gmc4ZCYbLyxnLidaUn3mGzM9YD2fYzhm7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUlw9WDgLVBNmGEWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGzMXLEc1KAxjLy3rPB246ignVBhvTBJSkicaGicaGicaGicaGicaGicaGicbNyxa6idHWEdSkicaGicaGicaGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicaGicaGicaGig1HCMDPBI1IB3r0B206idiWChG7cIaGicaGicaGicaGicaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicaGicaGicaGicaGicbHBMLTyxrPB246igzHzgvvCefUAw0Gmc4ZnxmGzwfZzsaWlJC4CYbMB3j3yxjKCZSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbSyw4Ty2fYzcb7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYoIaXlJvWEcbZB2XPzcaJrujfqKvcoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ide0ChG7cIaGicaGicaGicaGicaGicaGicaGCgfKzgLUzZOGmtnWEcaXnxb4oWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbNyxa6ideYChG7cIaGicaGicaGicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe4CZSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJzMzMoWOGicaGicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbYzwXHDgL2ztSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbSyw4Ty2fYzdPOB3zLCIb7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJrKzememYoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngrKyZruy7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvykdnWEcK7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUlwnHCMqUAgLNAgXPz2H0zwqGEWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi0zgnKeZrdSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJrKzgm0vgoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TCgXHBI1JyxjKlwLJB24GEWOGicaGicaGicaGicaGicaGicaGihDPzhrOoIaZnNb4oWOGicaGicaGicaGicaGicaGicaGigHLAwDODdOGmZzWEdSkicaGicaGicaGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa5ChG7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGi0zgrJnfrJSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGicaGicaGicaGzMXLEc1ZAhjPBMS6ida7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGi0zgrdbdmJSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbSyw4Ty2fYzc5OAwDOBgLNAhrLzcaUChjVlxbSyw4Ty2fYzc1Py29UihSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJrKy2qtneoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi0zgnKeZrdSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlxbSyw4Ty2fYzc1IB2r5ihSkicaGicaGicaGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TCgXHBI1JyxjKlwjVzhKGC3rYB25NihSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbIBg9JAZSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ideZChG7cIaGicaGicaGicaGicaGicaGicaGzM9UDc13zwLNAhq6idyWmdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGiZeXmtSkicaGicaGicaGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIaYChG7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUlwnHCMqTyM9KEsbZCgfUihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icnbque7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUlwnHCMqTChjPy2uGEWOGicaGicaGicaGicaGicaGicaGigzVBNqTC2L6ztOGmtnWEdSkicaGicaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnJaWoWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJntu1oWOGicaGicaGicaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1WBgfUlwnHCMqUAgLNAgXPz2H0zwqGlNbYBY1WBgfUlwnHCMqTChjPy2uGEWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJrKy2qtneoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8TCg9WDwXHCI10ywCGEWOGicaGicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbHyNnVBhv0ztSkicaGicaGicaGicaGicaGicaGicb0B3a6ic0XChG7cIaGicaGicaGicaGicaGicaGicaGCMLNAhq6ideYChG7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGi0zgnKeZrdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGi2zMzJSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idLWEdSkicaGicaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnJaWoWOGicaGicaGicaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaWlJvWEdSkicaGicaGicaGicaGicaGicaGicb0zxH0lxrYyw5ZzM9YBtOGDxbWzxjJyxnLoWOGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6idnWEca4ChG7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmcaWidzWEca2ChG7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1YAwDODc1MB290zxiGEWOGicaGicaGicaGicaGicaGicaGig9WywnPDhK6ida7cIaGicaGicaGicaGicaGicaGicaGyw5PBwf0Aw9UoIbMywrLvxbbBMLTidaUmZvZigvHC2uGmc44ohmGzM9YD2fYzhm7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1JDgeTyNrUihSkicaGicaGicaGicaGicaGicaGicb3Awr0AdOGmtaWjtSkicaGicaGicaGicaGicaGicaGicbWywrKAw5NoIaXnhb4oWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6icngrJzbm0q7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icnMzMy7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYoIbUB25LoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideZChG7cIaGicaGicaGicaGicaGicaGicaGzM9UDc1Myw1PBhK6icDhzwLZDcCSihnHBNmTC2vYAwy7cIaGicaGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXnhb4oWOGicaGicaGicaGicaGicaGicaGigzVBNqTD2vPz2H0oIa1mda7cIaGicaGicaGicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJjZoWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbNyxa6idHWEdSkicaGicaGicaGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIaXmhb4oWOGicaGicaGicaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGnhb4ide2ChGGCMDIysGYntuSmta2ldyXldaUmYK7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1JDgeTyNrUoMHVDMvYihSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJztG1yZmWoWOGicaGicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGTmxb4ktSkicaGicaGicaGicaGicaGicaGicbIB3GTC2HHzg93oIaWidzWEcaYmhb4ihjNyMeOmJu1ldeWnIW2msWWlJqPoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic5WCM8Ty3rHlwj0BJPHy3rPDMuGEWOGicaGicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGWktSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlwzPBMuTChjPBNqGEWOGicaGicaGicaGicaGicaGicaGihrLEhqTywXPz246ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ideYChG7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icnbque7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGlNbYBY1MAw5LlxbYAw50igeGEWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJqufboWOGicaGicaGicaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoWOGicaGicaGicaGicaGicaGicaGihrLEhqTDw5KzxjSAw5Llw9MzNnLDdOGmNb4oWOGicaGicaGicaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaUChjVlwzPBMuTChjPBNqGytPOB3zLCIb7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icm1ntu7cIaGicaGicaGicaGicaGicb9cGOGicaGicaGicaGicaGicaGqg1LzgLHicHTyxGTD2LKDgG6idC2ohb4ksb7cIaGicaGicaGicaGicaGicaGicaGlNbYBY1TB2rHBcb7cIaGicaGicaGicaGicaGicaGicaGicaGigzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47cIaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGicaGic5WCM8TCgfUzwWTBgvMDcb7cIaGicaGicaGicaGicaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicaGicaGicaGicaGicbIB3jKzxiTCMLNAhq6ig5VBMu7cIaGicaGicaGicaGicaGicaGicaGicaGigjVCMrLCI1IB3r0B206idfWEcbZB2XPzcaJrujfqKvcoWOGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGicaGicaUChjVlxbHBMvSlxjPz2H0ihSkicaGicaGicaGicaGicaGicaGicaGicaGD2LKDgG6ideWmcu7cIaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGica',
        'DxbKyxrLu3rVCMfNzurPC3bSyxK',
        'y2XPChnfEhbHBNnPB25by3rPB25Z',
        'Aw5PDgLHBgL6zuzSB2f0Aw5Nq3vZDg9TAxPLCG',
        'lNrLBxbSyxrLlxbYzxzPzxCTC2LKzwjHCG',
        'ue9tva',
        'y2HLy2S',
        'CgLJDhvYzq',
        'tu9equXFvfjbtLnjveLptL9nuW',
        'DgH1BwjUywLSx3vYBa',
        'y29UzMLYBvrLBxbSyxrLu2vSzwn0Aw9U',
        'qxv0BY1YzwzYzxnOigXPyNjHCNKGzMfPBgvKoG',
        'BgfZDfLVDvr1yMvqCM9JzxnZvgLTzq',
        'zgf0ys1WCM9JzxnZAw5NlwLK',
        'yxv0Af91CMW',
        'B3bLBLrLBxbSyxrLuhjLDMLLD01VzgfS',
        'CMvTB3zLqxr0CMLIDxrL',
        'yxr0ywnOtgLICMfYEunHCMrmAxn0zw5LCNm',
        'q29WAwvKihrVignSAxbIB2fYzce',
        '4P2mifDHDgvYBwfYAY1JAgvJAYbbueKGCMv0DxjUzwqGBM9Ulw9Rihn0yxr1CZO',
        'pgvTpIqXpc9LBt4',
        'u3rHCNrPBMCGzg93BMXVywqUlI4',
        'CMvHzhLtDgf0zq',
        'DxbKyxrLuhjVy2vZC2LUz1zPzxC',
        'BgvUz3rO',
        '4PYxief1DgHLBNrPy2f0Aw9UigvYCM9YoG',
        'vvjm',
        'Bg9HzefUzerPC3bSyxLtDg9YywDLsw5MBW',
        'twfRzsbHidmWlxnLy29UzcbTB3rPDMf0Aw9UywWGD29YA291DcbJB21WAwXHDgLVBIb3AxrOihrYzw5KAw5Nig11C2LJ',
        'ChjVy2vZC2LUz0XPC3q',
        'AhjLzG',
        'ChjVlw1VzgfSlxn0EwXLCW',
        'C29SAxnxB3jRC3bHy2vqyw5LBa',
        'ww91vhvIzsbtAg9YDhm',
        'C29Tzq',
        'igL0zw06ia',
        'y29VBgrVD25FAg91CNm',
        'vevtvdOGvgHPCYbPCYbHihrLC3qGDMLKzw8GDgL0Bgu',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNnSB3qTC3LZDgvTlwnHCMqIpGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc1ZExn0zw0TAwnVBIi+cIaGicaGicaGicaGicaGicaGicaGpgKGy2XHC3m9iMzHCYbMys1SyxLLCI1NCM91Cci+pc9PpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZBg90lxn5C3rLBs1JB250zw50iJ4kicaGicaGicaGicaGicaGicaGica8Adq+u2XVDcbtExn0zw0Gqwn0AxzLpc9Ond4kicaGicaGicaGicaGicaGicaGica8Cd5uAgLZihrLBxbSyxrLihvZzxmGDgHLigr5BMfTAwmGms01ihnSB3qGC3LZDgvTlIbozxCGy2XPChmGD2LSBcbMAwXSigzYB20GC2XVDca1ihvWD2fYzc48l3a+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywXPEMf0Aw9UiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc1YB3CIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywWIigrHDgeTC2XVDd0Imsi+mtWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywWIigrHDgeTC2XVDd0ImIi+mJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywWIigrHDgeTC2XVDd0ImYi+mZWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywWIigrHDgeTC2XVDd0Inci+ndWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc12Axn1ywWIigrHDgeTC2XVDd0Insi+ntWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC2XVDc1SywjLBhmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+tMv3ignSAxbZihn0yxj0igHLCMuG4OAspc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica8l2rPDJ4kicaGicaGica',
        'zg93BMXVywrPBMC',
        'DhjHBNnPDgLVBG',
        'DxnLCKLK',
        'w2rHDgeTDgfIpsj0zw1WBgf0zxmIxq',
        'A2v5ChjLC3m',
        'cIaGicaGicaGpgrPDIbJBgfZCZ0IC2f2zwqTAxrLBsi+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNnHDMvKlxr5CguIpG',
        'ihbYB2nLC3nPBMCGAxrLBsHZkq',
        '4PYfifDHDgvYBwfYAYb0B2DNBguGzM91BMqGAw4GChjLDMLLDYWGywrKAw5Nigv2zw50igXPC3rLBMvYCW',
        'vMLKzw8GkYbhyw1LCgXHEsbZDgfJA2vK',
        'C2XVDhm',
        'C2HVD1nSB3rtExn0zw1jBMzV',
        'w1rLBxbSyxrLifbYzxzPzxDDienVBNrLBNqGBg9HzgvKlcb0CMLNz2vYAw5Nign1C3rVBwL6zxiUlI4',
        'y29UzMLYBurLBgv0zuj0BG',
        '4P2mifbYB2nLC3nPBMCGzMfPBgvKoIa',
        'DMfSAwq',
        'y2XPCfbYB2DYzxnZ',
        'zgf0ys1Pza',
        'qMfJA2vUzcbTzxrHzgf0ysbMzxrJAcbMywLSzwqSihvZAw5NigzHBgXIywnRoG',
        'i2vMndq0na',
        'CMvUzgvYrMLUywXwAwrLBW',
        'C3rYAw5N',
        'C2v0rgvMyxvSDfrLBxbSyxrLCW',
        'sfruuca',
        'C2XVDe51BwjLCG',
        'DxbKyxrLuMvJzw50qwn0AxzPDhK',
        'rxHWAxjLCYb0B21VCNjVDW',
        'BM90AwzPy2f0Aw9U',
        'r0vu',
        'ihzPzgvVCYaO',
        'zMLUzeLUzgv4',
        'refjtfLFteLnsvrFuKvbq0Hfra',
        'lw1LC3nHz2u',
        'Bg9HzfbYB2nLC3nPBMDjDgvTCW',
        'C2XPy2u',
        'y3vYCMvUDfrLBxbSyxrLrM9YuhjLDMLLDW',
        '8j+tIIbvCgrHDgLUzYbZDg9YywDLigjHzgDLigzYB20GyMfJA2vUza',
        'zxjYB3iTBwvZC2fNzq',
        'DgvTCgXHDgvezxnJ',
        'y2fUy2vSuhjVy2vZC2LUzW',
        'lNnVBgLZlxDHDgvYBwfYAW',
        'B25JBgLJAW',
        'y2HLy2TLza',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'Bw9UAxrVCMLUz0LUDgvYDMfSCW',
        'wc1du1jglvrVA2vU',
        'zgLZCgXHEq',
        'l2nSAxbZl3bYB2PLy3qV',
        'Aw4G',
        'yMfJA2DYB3vUzenVBg9Y',
        'C2f2zwrszxn1BhrZ',
        'y2XPy2S',
        'zgfYA01Vzgvtzxr0Aw5NC1rVz2DSzq',
        'ugXLyxnLihnLBgvJDcbHihrLBxbSyxrLigzPCNn0',
        'igXPyNjHCNKGAxrLBsHZkq',
        'ue9hr0Dh',
        'ihnOB3C',
        'q2XLyw5Lzcb1CcbVBgqGChjVy2vZC2LUzYbPDgvTCW',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsj0zxH0lwfSAwDUoIbJzw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6idq4ChG7ig1HCMDPBI1IB3r0B206ide2ChG7iJ7INyW8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8AdeGC3r5Bgu9iMzVBNqTC2L6ztOGmJrWEdSGy29SB3i6ihzHCIGTlxrLEhqPoYbTyxjNAw4TyM90Dg9ToIa4ChG7iJ5qCM9JzxnZAw5NiezHAwXLzdWVAde+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphaGC3r5Bgu9iMnVBg9YoIb2yxiOls1TDxrLzcK7ig1HCMDPBI1IB3r0B206idi0ChG7iJ4',
        'B3bHy2L0EsaWlJnZigvHC2u',
        'zxHJBgfTyxrPB24',
        'D3D3lNLVDxr1yMuUy29T',
        'yMLUzev2zw50CW',
        'u3bSAxqGu2nYzwvU',
        'y2fUy2vSBgvK',
        'lMnVChKTyNrU',
        'cIaGicaGicaGicaGidXKAxyGC3r5Bgu9iNbVC2L0Aw9UoIbYzwXHDgL2ztSGD2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGyMfJA2DYB3vUzdOGiZnHm2eZytSIpGOGicaGicaGicaGicaGicaG',
        'icdINiuGvxbKyxrLzcbKDxjHDgLVBG',
        'B3v0zxjive1m',
        'lI4Upc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNnHDMvKlwrHDguIpG',
        'uMfUA2LUzYbdB21WAwXHDgLVBG',
        '8j+tIYbpCgvUAw5NihrLBxbSyxrLihbYzxzPzxCGzM9YoIa',
        'C3rVCMfNzujHzgDL',
        'CgXHBG',
        'z2v0rgf0zq',
        'AM9PBG',
        'iJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM9JzxnZAw5NlwnHCMqIpGOGicaGicaGicaGicaGicaGicaGicaGica8is0TifrODw1IBMfPBcb3AxrOihzPzgvVigLJB24Gls0+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYB2nLC3nPBMCTDgH1BwjUywLSiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDMCGEg1SBNm9iMH0Dha6lY93D3CUDZmUB3jNlZiWmdaVC3zNiIb3Awr0Ad0ImJqIigHLAwDODd0ImJqIihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImIiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Cg9SEwDVBIbWB2LUDhm9iJiZidCGmtyGmtiGmJmGmtCGmJmGnYi+pc9WB2X5z29UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihG9iJeIihK9iJuIihDPzhrOpsiXnsiGAgvPz2H0psiXnciGCNG9iJiIihj5psiYiJ48l3jLy3q+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l3n2zZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpceTlsbqCM9NCMvZC2L2zsbJAxjJDwXHCIbSB2fKzxiGkg9UBhKGC2HVDYbPzIbWCM9JzxnZAw5NksaTlt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        '4PQG77IpienVDwXKig5VDcbSB2fKihrPzxiGAw5MBW',
        'twfRzsbHihnLyxnVBMfSl2HVBgLKyxKGDgHLBwvKignSAxaGy29SBgvJDgLVBG',
        'ignVBxbSzxrLzcWGBw92Aw5NihrVigXPyNjHCNKUlI4',
        'CMvSB2fK',
        'zgLZCgXHEtOGzMXLEcaHAw1WB3j0yw50oYb2AxnPyMLSAxr5oIb2AxnPyMXLicfPBxbVCNrHBNq7ig9WywnPDhK6ideGiwLTCg9YDgfUDdSGCg9PBNrLCI1LDMvUDhm6igfSBcaHAw1WB3j0yw50oYb6lwLUzgv4oIaXmdaWicfPBxbVCNrHBNq7',
        '4P2mief1DgHLBNrPy2f0Aw9UihzLCMLMAwnHDgLVBIbMywLSzwq',
        'C3bSAxq',
        'C3vJy2vZCW',
        'z2v0v2f0zxjTyxjRu3rHDgu',
        'phn0CM9UzZ4KmtWVC3rYB25NpG',
        'w2rHDgeTChjVy2vZC2LUzY1Pzd0I',
        'yxbWBgLJyxrPB24VANnVBG',
        'iIbMCM9TihrOAxmGww91vhvIzsbvuKW/cGPvuKW6ia',
        'C3rHCNrdBgLWuhjVy2vZC2LUz1DPDgHtBg90CYbLCNjVCJO',
        'BgfZDf92AwrLB19KyxrL',
        'qw4GzxjYB3iGB2nJDxjYzwq',
        '4PYfifrLBxbSyxrLig5HBwuGC2v0ihrVoG',
        'C3vIC2nYAxb0Aw9Uq2fJAgu',
        'ugXLyxnLigXVzYbPBIbMAxjZDcb0BYbJB25Uzwn0ifLVDvr1yMu',
        'uhjVy2vZC2LUzYbJyw5JzwXSzwq',
        'CgfYC2u',
        'z2vUzxjHDgLVBLbYB2DYzxnZv3jHChbLCG',
        'ndaZ',
        'rMfPBgvKihrVigrLBgv0zsbJBgLWoIa',
        'CgXHy2vOB2XKzxi',
        'C3rHCNrdBgLWuhjVy2vZC2LUz1DPDgHtBg90CW',
        'z2v0rwXLBwvUDej5swq',
        '4PYfifn0B3jHz2uGzgLZCgXHEsb1CgrHDgvKihDPDgGGzNjLC2GGyMfJA2vUzcbKyxrH',
        'rMfPBgvKihrVigXVywqGBgLICMfYEsbPDgvTCZO',
        'iY9JBgLWCW',
        'ksaTia',
        't0zg',
        '4P2mihnOB3Dhyw1LCgXHEvbHBMvSig5VDcbHDMfPBgfIBgu',
        'zgfYAW',
        'y2HHBMDL',
        'DgfIBgu',
        '4P2mifnfq1vssvrzoIbjBNzHBgLKihbYB2PLy3rjzcbMB3iGzg93BMXVywq6ia',
        'z2v0u2XVDa',
        'CgvUzgLUzW',
        'rMfPBgvKihrVignVChK6',
        'y2XPCgjVyxjK',
        'odeZmtLvvKn3zKO',
        'vevtvdOGuMfUA2LUzYbnB21LBNrZ',
        'CxvLC3rPB24',
        'C2v0DxbxzwjtB2nRzxriyw5KBgvYCW',
        'ChjLDMLLD1rLBxbSyxrLtMfTzq',
        'oGOk',
        'DgvTCgXHDgvZu2vJDgLVBG',
        'DMfSAwrHDgvjDgvTswq',
        'zMv0y2HbBMrvCgrHDgveDxjHDgLVBG',
        '8j+NQIburu1qtefursbquKvwsuvxifrfu1q6',
        'igHVDxi',
        '4PQG77IpievYCM9YihzHBgLKyxrPBMCG',
        '4PYfifDHDgvYBwfYA2vKieHutuWGC2v0',
        'zhvYyxrPB25fCNjVCK1LC3nHz2u',
        'CMDIysGYntuSideWnYWGmcWGmsK',
        'icHZDgf0Dxm6ia',
        'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
        'zgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50oYb2AxnPyMLSAxr5oIbOAwrKzw4GiwLTCg9YDgfUDdSGB3bHy2L0EtOGmcaHAw1WB3j0yw50oYbWB2LUDgvYlwv2zw50CZOGBM9UzsaHAw1WB3j0yw50oYb6lwLUzgv4oIaTmtaWmdaGiwLTCg9YDgfUDdS',
        'y2XPCfbYB2DYzxnZrMLSBa',
        '8j+uJsbxyxrLCM1HCMSGy2HLy2SGCMvZCg9UC2u6',
        'y29VA2LL',
        'y29UzMLYBvvZzvrLBxbSyxrLqNrU',
        'l2nSAxbZl2nOzwnRlwr1CMf0Aw9U',
        'BM93',
        'DxbKyxrLv2f0zxjTyxjRrgLZCgXHEq',
        'yM9YzgvYv2LKDgG',
        'lNbYBY1JDgeTyNrU',
        'vw50AxrSzwqGq2XPCa',
        'r0vorvjbveLptL9dt09mre9xtG',
        'CMDIysGYntuSidy4lca2ocWGmc4WnsK',
        'pgKGy2XHC3m9iMzHCYbMys1ZAwDUlw91Dc1HBhqIpJWVAt48C3bHBJ5tAwDUig91DdWVC3bHBJ4',
        'Bw91C2vTB3zL',
        'rxjYB3iGAw4GzMv0y2HwAwrLB01LDgfKyxrHoG',
        'C3vWCg9YDhntBg90u3LZDgvT',
        'DMLZAwjSzq',
        'lhrVCd0',
        'Dg9Rzw4',
        'y2fUy2vSvgvTCgXHDgvcDg4',
        'u2f2zwqGC3vJy2vZC2z1BgX5iq',
        'DgHLBwu',
        'y2HHDeHPC3rVCNK',
        'zgf0yq',
        'B3bLBKvKAxrVCG',
        'Bg9HzeXPyNjHCNLjDgvTC0zYB21tDg9YywDL',
        '4P2mifzPzgvVia',
        'zMLYC3rdAgLSza',
        'zNvUy3rPB24',
        'BwvZC2fNzs1YB3CG',
        'C2vHCMnO',
        'C2XVDf9UDw1Izxi',
        'zgf0ytO',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZB2XPCY13yxrLCM1HCMSIihn0EwXLpsjWB3nPDgLVBJOGywjZB2X1Dgu7igjVDhrVBtOGmtjWEdSGCMLNAhq6ideYChG7ihOTAw5KzxG6ideWmdSGCg9PBNrLCI1LDMvUDhm6ig5VBMu7igrPC3bSyxK6igzSzxG7igzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47igfSAwDUlwL0zw1ZoIbMBgv4lwvUzdSGy29SB3i6icnMzMzMzMy7ihvZzxiTC2vSzwn0oIbUB25LoYbMAwX0zxi6igrYB3aTC2HHzg93kdbWEcaYChGGnhb4ihjNyMeOmcWGmcWGmcWGmc41ksK7igzVBNqTzMfTAwX5oIaNugX1CYbkywTHCNrHifnHBNmNlcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSicDtzwDVzsbvssCSihnHBNmTC2vYAwy7iJ4kicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idHWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsj3Awr0AdOGmJHWEdSGAgvPz2H0oIaYohb4oYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSGzMXLEc1ZAhjPBMS6ida7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDMCGDMLLD0jVEd0ImcaWideWmcaXmdaIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIb3Awr0Ad0ImJGIigHLAwDODd0ImJGIihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgnPCMnSzsbJEd0IntaIign5psi1mciGCJ0ImtiIigzPBgW9iMn1CNjLBNrdB2XVCIi+pc9JAxjJBgu+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgvSBgLWC2uGCNG9iJq0iIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2uTD2LKDgG9iJyIihrYyw5ZzM9YBt0ICM90yxrLkdq1iduWiduWksi+pc9LBgXPChnLpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXLBgXPChnLihj4psi0nciGCNK9iJe4iIbJEd0IntaIign5psi1mciGC3rYB2TLlxDPzhrOpsi2iIb0CMfUC2zVCM09iNjVDgf0zsGTnduGntaGntaPiJ48l2vSBgLWC2u+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l3n2zZ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtvWEdSGzM9UDc13zwLNAhq6idGWmdSGBgv0DgvYlxnWywnPBMC6ic0WlJaYzw07ihrLEhqTDhjHBNnMB3jToIb1ChbLCMnHC2u7igXPBMuTAgvPz2H0oIaXoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicbtB2XPCYa8C3bHBIbZDhLSzt0IB3bHy2L0EtOGmc44ntSGzM9UDc13zwLNAhq6idCWmdSIpKfjpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaG',
        'DgvZDfrLBxbSyxrLuhjLDMLLDW',
        '4P2miezHAwXLza',
        'pha+tM8GC2f2zwqGAxrLBxmUpc9WpG',
        'CxvLCNLtzwXLy3rVCG',
        'Aw5WDxq',
        'Bwf4x2r1CMf0Aw9Ux21PBNv0zxm',
        'DMLZAwjPBgL0Eq',
        '8j+uKIbcBg9JA2vKigLUDMfSAwqGvvjmihnJAgvTztO',
        '4PYfifDHDgvYBwfYAYbPBML0AwfSBhKGAgLKzgvUicH0B2DNBguGB2zMkq',
        'mte4ntm5meLvwgTSvG',
        '4PQG77IpifDLyLnVy2TLDcbJBgLLBNqGy2XHC3mGBM90igf2ywLSywjSzq',
        'DxnLza',
        'lMnOAxbZlw5HDI1PDgvT',
        'rxjYB3i',
        '4PQG77IpifDHDgvYBwfYAYb0B2DNBguGy2HLy2TIB3GGtK9uigzVDw5KigLUihbYzxzPzxCH',
        'y29UzMLYBvrLBxbSyxrLvxnL',
        'icaGmY4GqMfJA2vUzcb2ywXPzgf0zxmGq1nsrIb0B2TLBIbVBIbZDgf0zs1JAgfUz2LUzYbYzxf1zxn0CW',
        'w2rHDgeTDgfIpsjSAwjYyxj5iL0',
        'qxv0AgvUDgLJyxrPB24GDMvYAwzPy2f0Aw9UigzHAwXLza',
        'zgL2',
        'pc9ZDhjVBMC+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMrPC3bSyxK6yMXVy2S7BwfYz2LUlxrVCdOYChG7zM9UDc1ZAxPLoJeXChG7y29SB3i6i0fbqsi+',
        'rMfPBgvKihrVigzLDgnOihn1yNnJCMLWDgLVBIbPBMzVlcbZDgf0Dxm6',
        'ChjLDMvUDerLzMf1Bhq',
        'DxjSqNv0Dg9Utg9JA2vK',
        'pc9WpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM8TDgvTCgXHDguTChjLDMLLDYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY10CgiTChjLDMLLDYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM8TDhbIlxbYBYi+ufjppc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsi0mciGAgvPz2H0psi0mciGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjUB25LiIbZDhjVA2u9iIndoem0qKuIihn0CM9Rzs13Awr0Ad0Ims41iIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihG9iJmIihK9iJmIihDPzhrOpsi3iIbOzwLNAhq9iJe4iIbYEd0ImsiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihG9iJe0iIb5psiZiIb3Awr0Ad0InYiGAgvPz2H0psiXociGCNG9iJeIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlwXVy2TLzc1VDMvYBgf5iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsiYmciGAgvPz2H0psiYmciGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjUB25LiIbZDhjVA2u9iIngrJzbm0qIihn0CM9Rzs13Awr0Ad0ImIiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphjLy3qGEd0ImYiGEt0ImteIihDPzhrOpsiXociGAgvPz2H0psiXmsiGCNG9iJiIihj5psiYiI8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWyxrOigq9iK03ideXvJDHnsa1idaGmcaXideWidb2nciVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM8TDhbIlwLUzM8IpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rYB25NpG',
        'y3vYCMvUDfrHyG',
        'ywXSB3DLza',
        'qxv0BY1WB2XSAw5NigvYCM9YoG',
        '4PQG77IpientuKyGDg9Rzw4GBM90ihbYB3bLCMX5ignVBMzPz3vYzwqGAw4GBwv0ysb0ywCGB3iGy29VA2LLCW',
        'tufyx0nptLnptevFte9huW',
        'yxbWq29UDgfPBMvY',
        'y2HLy2Tuzw1WBgf0zufJy2vZCW',
        'y2fYzc1JB250zw50',
        'BwvUDs1VCgvU',
        'rMfPBgvKihrVigXVywqGChjVy2vZC2LUzYbPDgvTCZO',
        '4PYfifDLyLnVy2TLDcbOyw5KBgvYCYbPBML0AwfSAxPLza',
        'Aw5JBhvKzxm',
        'C2v0DgLUz3nqyw5LBa',
        'y3vYCMvUDfnSB3rtDgf0zq',
        'wuvtu1m',
        'A2v5',
        'rMfPBgvKihrVigXVywqGz2fTzxbSyxKGy2XPChmGzNjVBsbIywnRzw5K',
        '8j+uJsbJB25MAxjTvgvTCgXHDgvvC2u6',
        'y3jLyxrLrwXLBwvUDa',
        'uhv0ihrVz2v0AgvYihzPCMfSigrHBMnLignSAxbZigzYB20GEw91CIbSyxrLC3qGww91vhvIzsb2AwrLBW',
        'igfNBW',
        'y2XVC2vqCM9gzwf0DxjLtw9KywW',
        'Aw5SAw5L',
        'u3rVCMfNzsbXDw90ysbLEgnLzwrLzcaTignSzwfYAw5Nig9SzcbKyxrH',
        'Ew91DhvIzs5JB20',
        '8j+uHcbpqxv0Acb3Aw5KB3CGy2XVC2vKlcb2zxjPzNLPBMCGy29UBMvJDgLVBI4UlG',
        'Ahr0Chm6lY9MB250CY5NB29NBgvHCgLZlMnVBs9JC3mYp2zHBwLSEt1bCMnOAxzVk0jSywnRjMrPC3bSyxK9C3DHCa',
        'y3jLyxrLrMLYC3rdBgLWqNrU',
        'x19WCM90B19F',
        'lM5HDI1PDgvTw2rHDgeTDgfYz2v0psjJBgLWCYjD',
        'CgXHBL9Uyw1L',
        'lMrHC2HIB2fYzc1JAgfYDhm',
        'CMvUzgvYvgvTCgXHDgvqCMv2Awv3',
        'DgvTCgXHDgu6',
        'uhjVzMLSzsbKCM9Wzg93BIb1CgrHDguGzxjYB3i6',
        '4PQG77IpienHBM5VDcbKzwXLDguGChjVy2vZC2LUzYbPDgvToIa',
        'Dg9mB2nHBgvtDhjPBMC',
        'C2H1zMzSzuLKzwfZqNrU',
        'l2rHC2HIB2fYzc5ODg1S',
        'otKWntKWAg1jqNjL',
        'C3r5BgvZAgvLDa',
        'te1bt09p',
        '4PYtie9bDxrOihDPBMrVDYbVCgvUzwq',
        '4P2mieL0zw0GBM90igzVDw5KoIa',
        '4PYfieXVz2DLzcbVDxqGC3vJy2vZC2z1BgX5',
        'w0f1DgHDieLUAxrPywXPEMf0Aw9Uihn0yxj0zwq',
        'y2XLyxjpBgrmAwjYyxj5rgf0yq',
        '4PYtieDVDcbpqxv0AcbvuKWGzNjVBsbIywnRzw5K',
        'y2HHCKf0',
        'Dw5IBhvYCMLUzW',
        'v2fUDcb0BYb1BMXVy2SGzNvSBcbMzwf0DxjLigfJy2vZCZ8Gu2LNBIbPBIb0B2rHEq',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIa',
        'q2fUBM90igrLBgv0zsbPDgvTCYb3AgLSzsbWCM9JzxnZAw5NlIbxywL0igzVCIbJB21WBgv0Aw9Uig9YignHBMnLBcbMAxjZDc4',
        'iIbHBhq9iKfZC2v0ifbYzxzPzxCIig9UzxjYB3i9iNrOAxmUC3jJpsDODhrWCZOVl3zPys5WBgfJzwHVBgrLCI5JB20VmtaWmhG2mda/Dgv4Dd1oBYTjBwfNzsCIpGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnHCMqTywn0Aw9UCYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iMnHCMqTywn0Aw9Ulwj0BIbSAwjYyxj5lwrLBgv0zs1IDg4IihrPDgXLpsjezwXLDguGy2XPCciGDgfIAw5KzxG9iJaIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn2zYb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIbZDhjVA2uTD2LKDgG9iJiUnsiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Cgf0AcbKpsjnmYa2Ade4iI8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0Itte5idz2mtrJmcaXlteGmI0Yidjin2mTmsaWltiTms0YltjwnIiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWyxrOigq9iK04idzwngmWlteGms0YidiTmMG0yZeGmcaYideGmIaYDJiIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0ImtaIihKXpsiXmsiGEdi9iJeWiIb5mJ0ImtCIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0ImtqIihKXpsiXmsiGEdi9iJe0iIb5mJ0ImtCIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGia',
        'Dg9ju09tDhjPBMC',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsj0zxH0lwfSAwDUoIbJzw50zxi7igfUAw1HDgLVBJOGC2XPzgvvCcaWlJnZigvHC2u7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6idGWChG7ig1HCMDPBI1IB3r0B206ide2ChG7igfUAw1HDgLVBJOGCg9Wsw4Gmc40CYbJDwjPyY1IzxPPzxiOmc4ZncWGms41nIWGmc42ncWGmsK7iJ7INiu8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8AdeGC3r5Bgu9iMzVBNqTC2L6ztOGmZjWEdSGy29SB3i6ihzHCIGTlxrLEhqPoYbTyxjNAw4TyM90Dg9ToIa4ChG7igzVBNqTD2vPz2H0oIa3mda7iJ5dB21WAwXHDgLVBIbszwfKEse8l2GXpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWihn0EwXLpsjJB2XVCJOGDMfYkc0TBxv0zwqPoYbTyxjNAw4TyM90Dg9ToIaZmNb4oYi+ww91CIb2AwrLBYbPCYbYzwfKEsb0BYbLzgL0igfUzcbWDwjSAxnOpc9WpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GB25JBgLJAZ0IcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGigrVy3vTzw50lMDLDevSzw1LBNrcEuLKkcDJBgLWlxbYB2nLC3nPBMCTBw9KywWNks5Yzw1VDMuOktSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGD2LUzg93lMXVy2f0Aw9UlMHHC2GGpsaNiY9JBgLWCYC7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGiIbZDhLSzt0IcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6ideYChGGmJrWEdSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2zMnMiZnsaWjsWGi2zModG1nIaXmdaLktSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGy29SB3i6ihDOAxrLoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbIB3jKzxi6ig5VBMu7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnJaWoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJjZoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGiciGB25TB3vZzw92zxi9iNrOAxmUC3r5BguUDhjHBNnMB3jTpsD0CMfUC2XHDgvzkc0YChGPoYb0AgLZlNn0EwXLlMjVEfnOywrVDZ0Nmca0ChGGmtjWEcbYz2jHkdi1nsWGmta3lca1mYWGmc4ZksCIig9UBw91C2vVDxq9iNrOAxmUC3r5BguUDhjHBNnMB3jTpsD0CMfUC2XHDgvzkdaPjZSGDgHPCY5ZDhLSzs5IB3HtAgfKB3C9j25VBMuNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicdWN5ooie9Wzw4GuhjVAMvJDaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3r5Bgu+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGqgTLEwzYyw1LCYbWB3bjBIb7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidaLihSGDhjHBNnMB3jToIbZy2fSzsGWlJmPoYbVCgfJAxr5oIaWoYb9cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidCWjsb7ihrYyw5ZzM9YBtOGC2nHBguOms4XktSGFqOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaXmdaLihSGDhjHBNnMB3jToIbZy2fSzsGXktSGB3bHy2L0EtOGmtSGFqOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbaA2v5zNjHBwvZihnSAwrLvxaGEWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbMCM9TihSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdiWChGPoYbVCgfJAxr5oIaWoYb9cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGihrVihSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPoYbVCgfJAxr5oIaXoYb9cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDhLSzt4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'y2HHDa',
        'CMvTB3zLsxrLBq',
        'y29SBgfWC2vK',
        'ywrKv2f0zxjTyxjR',
        'nw1ns0flva',
        'lNrLBxbSyxrLlwnHCMq',
        'AgvHza',
        'rg93BMXVywqGzMfPBgvKoIa',
        'ihrVigXPyNjHCNK',
        'y29TCgXLDgu',
        'C2LNBMfS',
        'qwnJB3vUDcbtzxr0Aw5NCW',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVy2vZC2LUzY1WzxjJzw50ywDLiJ4',
        'DgvTCgXHDgvoyw1L',
        'sw52ywXPzcbWCM9Qzwn0ieLeigzVCM1HDa',
        'iJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnHCMqTChjLDMLLDYi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHDhvZlxbPBgWIpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgf0DxmTzg90iJ48l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0yxr1CY10zxH0iJ5dBgLJAYbTztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8Aw1NihnYyZ0I',
        'Aw5PDa',
        'tg9HzgLUzYbNyw1LCgXHEsbJBgLWCY4UlG',
        'u3rHDhvZihbVBgWGzxjYB3i6',
        'uMf0zsbSAw1PDcbYzwfJAgvKlIbqBgvHC2uGDhj5igfNywLUigXHDgvYlG',
        'y2HLy2TjDgvTu3rHDhvZ',
        'rxjYB3iGBg9HzgLUzYbZDg9YywDLigLUzM86',
        '8j+tOsbxyxrLCM1HCMSTy2HLy2SGCMvZCg9UC2uGC3rHDhvZoG',
        'ssbdqu5u',
        'DxbNCMfKzvnLDhrPBMDZqNrU',
        'lwnPCMnSzsi+pc9PpGOGicaGicaGicaGica8C3bHBIbPzd0IBM90AwzPy2f0Aw9UtwvZC2fNzsi+pc9ZCgfUpGOGicaGicaGidWVzgL2pGOGicaG',
        '4PQG77IpieLUDMfSAwqGChjVz3jLC3mGDMfSDwuGCMvJzwL2zwq6ia',
        'A2v5zg93BG',
        'CMvWBgfJzq',
        'r3vLC3qGvxnLCG',
        'igzHAwXLzdOG',
        'lMr1CMf0Aw9UlxrLEhq',
        'zMv0y2HwAwrLB01LDgfKyxrH',
        'tgLMzxrPBwu',
        'AxntBg90u3LZDgvT',
        'lMXPyNjHCNKTz3jPzcaUBgLICMfYEs1JyxjKw2rHDgeTAwrD',
        '4PYfienHCMqGDhjHBNnMB3jTzwq6ia',
        'y2vPBa',
        't0SGveHjuYbjuYbjtLnbtKu',
        'BwLU',
        'Bg9N',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjHy3rPDML0Es1PDgvTiJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjHy3rPDML0Es1Py29UiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgKGy2XHC3m9iMzHCYbMys12AwrLBYi+pc9PpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMfJDgL2Axr5lwnVBNrLBNqIpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjHy3rPDML0Es10AxrSzsi+q3jLyxrLzcbHignSAxa8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iywn0AxzPDhKTzgvZy3jPChrPB24IpG',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc1WCMv2Awv3ihbYB2nLC3nPBMCTChjLDMLLDYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM9JzxnZAw5NlwjSDxiTB3zLCMXHEsi+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM9JzxnZAw5NlxnWAw5UzxiIpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc1JB250zw50iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMLUzM8Tz3jVDxaIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXOmIbJBgfZCZ0Iy2fYzc10AxrSzsiGzgf0ys1PDgvTlw5HBwu9iG',
        'ihzPzgvVCY9KyxKSia',
        'BMf2v3jHChbLCG',
        'y2fUy2vSvgvTCgXHDgvtzwXLy3rPB24',
        'iZrgndzfnq',
        'y2XPChntDhvKAw8',
        'DhLWzq',
        'D3D3lNLVDxr1lMjL',
        'cIaGicaGicaGphn0EwXLpGOGicaGicaGicaGicaUy2XPCc1JB25MAxjTlw1VzgfSihSkicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGicaGihrVCdOGmdSkicaGicaGicaGicaGicaGigXLzNq6ida7cIaGicaGicaGicaGicaGicbYAwDODdOGmdSkicaGicaGicaGicaGicaGigjVDhrVBtOGmdSkicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWGmcWGmcWGmc42ktSkicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGicaGicb6lwLUzgv4oIaXmdaWmdSkicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGzMfKzuLUidaUmNmGzwfZztSkicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGqgTLEwzYyw1LCYbMywrLsw4GEWOGicaGicaGicaGicaGicaGzNjVBsb7ig9WywnPDhK6ida7ih0kicaGicaGicaGicaGicaGihrVihSGB3bHy2L0EtOGmtSGFqOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUy2XPCc1JB25MAxjTlwrPywXVzYb7cIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIb2yxiOls1ZDxjMywnLktSkicaGicaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKihzHCIGTlwjVCMrLCIK7cIaGicaGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaXmNb4oWOGicaGicaGicaGicaGicaGCgfKzgLUzZOGmZjWEdSkicaGicaGicaGicaGicaGig1HEc13Awr0AdOGndiWChG7cIaGicaGicaGicaGicaGicbHBMLTyxrPB246ihnSAwrLvxaGmc4ZCYbLyxnLoWOGicaGicaGicaGicaGicaGyM94lxnOywrVDZOGmcaYmhb4idyWChGGCMDIysGWlcaWlcaWlcaWlJmPoWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicbaA2v5zNjHBwvZihnSAwrLvxaGEWOGicaGicaGicaGicaGicaGzNjVBsb7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGYmhb4ktSGB3bHy2L0EtOGmdSGFqOGicaGicaGicaGicaGicaGDg8GEYb0CMfUC2zVCM06ihrYyw5ZBgf0zvKOmcK7ig9WywnPDhK6ide7ih0kicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGlMnSAxaTy29UzMLYBs1OzwfKzxiGEWOGicaGicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicbNyxa6ideYChG7cIaGicaGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIaXnNb4oWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUy2XPCc1JB25MAxjTlwHLywrLCIbOmIb7cIaGicaGicaGicaGicaGicbTyxjNAw46ida7cIaGicaGicaGicaGicaGicbMB250lxnPEMu6ide4ChG7cIaGicaGicaGicaGicaGicbJB2XVCJOGDMfYkc0TDgv4DcK7cIaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnJaWoWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUy2XPCc1JB25MAxjTlwnVBNrLBNqGEWOGicaGicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGmJrWEdSkicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGlMnSAxaTy29UzMLYBs1JB250zw50ihaGEWOGicaGicaGicaGicaGicaGBwfYz2LUoIaWidaGmtjWEcaWoWOGicaGicaGicaGicaGicaGy29SB3i6ihzHCIGTlw11DgvKktSkicaGicaGicaGicaGicaGigzVBNqTC2L6ztOGmtrWEdSkicaGicaGicaGicaGicaGigXPBMuTAgvPz2H0oIaXlJy7cIaGicaGicaGicaGih0kicaGicaGicaGicaGcIaGicaGicaGicaGic5JBgLWlwnVBMzPCM0TDxjSihSkicaGicaGicaGicaGicaGihbHzgrPBMC6ideYChG7cIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmta3lca1mYWGmc4XktSkicaGicaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmJu1lcaXmdCSiduZlcaWlJiPoWOGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnNb4oWOGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicaGicaGy29SB3i6ihzHCIGTlw11DgvKktSkicaGicaGicaGicaGicaGihDVCMqTyNjLywS6igjYzwfRlwfSBdSkicaGicaGicaGicaGicaGigzVBNqTzMfTAwX5oIbTB25VC3bHy2u7cIaGicaGicaGicaGih0kicaGicaGicaGicaGcIaGicaGicaGicaGic5JBgLWlwnVBMzPCM0Tywn0Aw9UCYb7cIaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGz2fWoIaXmNb4oWOGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbMBgv4lwvUzdSkicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGlMnSAxaTyNrUihSkicaGicaGicaGicaGicaGihbHzgrPBMC6ideWChGGmJbWEdSkicaGicaGicaGicaGicaGigjVCMrLCJOGBM9UztSkicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGicaGigzVBNqTD2vPz2H0oIa2mda7cIaGicaGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4YCYbLyxnLoWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUy2XPCc1IDg4TCMvQzwn0ihSkicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJu1lcaXmdCSiduZlcaWlJePoWOGicaGicaGicaGicaGicaGy29SB3i6ihzHCIGTlw11DgvKktSkicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGlMnSAxaTyNrUlxjLAMvJDdPOB3zLCIb7cIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmta3lca1mYWGmc4YktSkicaGicaGicaGicaGFqOGicaGicaGicaGicakicaGicaGicaGicaGlMnSAxaTyNrUlwfJy2vWDcb7cIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzMy2yJm1idaLlcaJzMy4odu2ideWmcuPoWOGicaGicaGicaGicaGicaGy29SB3i6ihDOAxrLoWOGicaGicaGicaGicb9cIaGicaGicaGicaGiaOGicaGicaGicaGicaUy2XPCc1IDg4TywnJzxb0oMHVDMvYihSkicaGicaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGTmNb4ktSkicaGicaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGnhb4ideYChGGCMDIysGYntuSideWnYWGntmSidaUmYK7cIaGicaGicaGicaGih0kicaGicaGica8l3n0EwXLpGOGicaGicaGiaOGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTy29UzMLYBs1KAwfSB2CIpGOGicaGicaGicaGica8zgL2ignSyxnZpsjJBgLWlwnVBMzPCM0TAgvHzgvYiJ4kicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6idiWChG7iJ7WN46Spc9ZCgfUpGOGicaGicaGicaGicaGicaGpgGYpKnYzwf0zsbdBgLWienVBxbPBgf0Aw9Upc9OmJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGiaOGicaGicaGicaGica8zgL2ignSyxnZpsjJBgLWlwnVBMzPCM0Ty29UDgvUDci+cIaGicaGicaGicaGicaGica8Cd5szwfKEsb0BYbJCMvHDguGysbJBgLWignVBxbPBgf0Aw9UigzYB20GEw91CIbzB3vuDwjLihzPzgvVpZWVCd4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTy29UzMLYBs11CMWIigLKpsj1CMXeAxnWBgf5iJ48l2rPDJ4kicaGicaGicaGicaGicaGidXWihn0EwXLpsjTyxjNAw4TDg9WoIaXmNb4oYbMB250lxnPEMu6ideYChG7ig9WywnPDhK6idaUnZSIpLrOAxmGBwf5ihrHA2uGysbMzxCGBwLUDxrLCY4Gww91ignHBIbTB25PDg9YihbYB2DYzxnZigLUihrOzsbqCM9JzxnZAw5NihrHyI48l3a+cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicakicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1JB25MAxjTlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0Iy2XPCc1IDg4Gy2XPCc1IDg4TCMvQzwn0iIbPzd0Iy2XPCenVBMzPCM1dyw5JzwWIpGOGicaGicaGicaGicaGicaGicaGiokCLsbdyw5JzwWkicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0Iy2XPCc1IDg4Gy2XPCc1IDg4TywnJzxb0iIbPzd0Iy2XPCenVBMzPCM1by2nLChqIpGOGicaGicaGicaGicaGicaGicaGiokCKYbdCMvHDguGq29TCgLSyxrPB24kicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGica8l2rPDJ4kicaGicaGica8l2rPDJ4kicaGia',
        'zw1WDhLmAwjYyxj5u3rHDgu',
        'zMvHDhvYzxnuywjdB250ywLUzxi',
        'zgf0ys1WCM9Qzwn0lwLK',
        'i3bSDxngzwf0DxjLC0j0BG',
        'zgL2AwrLCKHHBMrSzq',
        '8j+sOsbzB3uGAgf2zsa',
        'lNnPzgvIyxi',
        'ru5bqKXfra',
        'zg93BMXVywq',
        'ywn0AxzL',
        'iIbUB3qGzM91BMq',
        'l2nSAxbZl3n0yxj0',
        'twfRzsbHicjeyxKGAw4GBxKGBgLMzsiGCxvPy2SGy2XPChmGy29TCgLSyxrPB24',
        'ChjLDMLLD1rLBxbSyxrLrgvZy3jPChrPB24',
        'tgLICMfYEsbYzwzYzxnOzwq',
        'AxnbCNjHEq',
        '4PYtifzPzgvVihrVBYbSB25NigrLDgvJDgvKicHWyxr0zxjUidePoG',
        'lMnHCMqTDgL0Bgu',
        'y3vYCMvUDfbYB2PLy3rjza',
        'rMfPBgvKihrVigXVywqGDgvTCgXHDgvZoG',
        'DxnLCKnVBM5Ly3rLza',
        'y2XPChntDhvKAw9dDxjYzw50vgfI',
        'cIaGicaGicaGicaGidXZDhLSzt4kicaGicaGicaGicaGicaGicnJBgLWlxbYB2nLC3nPBMCTBw9KywWGEWOGicaGicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGicaGicaGicb0B3a6ida7cIaGicaGicaGicaGicaGicaGicaGBgvMDdOGmdSkicaGicaGicaGicaGicaGicaGicbYAwDODdOGmdSkicaGicaGicaGicaGicaGicaGicbIB3r0B206ida7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2zMzJvLyIaWjsWGi2zMztrKmsaXmdaLktSkicaGicaGicaGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicaGicaGicaGigzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47cIaGicaGicaGicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGicaGicaGicb6lwLUzgv4oIa5otK5otSkicaGicaGicaGicaGicaGicaGicbVDMvYzMXVDZOGAgLKzgvUoWOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaUy2XPCc1WCM9JzxnZAw5NlwnVBNrHAw5LCIb7cIaGicaGicaGicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGicaGicaGicaGicaGihbVC2L0Aw9UoIbYzwXHDgL2ztSkicaGicaGicaGicaGicaGicaGicb6lwLUzgv4oIaXmdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTyxrVBsb7cIaGicaGicaGicaGicaGicaGicaGD2LKDgG6ide0mhb4oWOGicaGicaGicaGicaGicaGicaGigHLAwDODdOGmtqWChG7cIaGicaGicaGicaGicaGicaGicaGBwfYz2LUoIaWigf1Dg8GmZjWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTyxrVBsbZDMCGEWOGicaGicaGicaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicaGicaGicaGigHLAwDODdOGmtaWjtSkicaGicaGicaGicaGicaGicaGicbMAwX0zxi6igrYB3aTC2HHzg93kdaGmcaYmhb4ihjNyMeOmJu1lcaXmdCSiduZlcaWlJmPktSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTBNvJBgv1CYb7cIaGicaGicaGicaGicaGicaGicaGyw5PBwf0Aw9UoIbUDwnSzxvZuhvSC2uGms41CYbLyxnLlwLUlw91DcbPBMzPBML0ztSkicaGicaGicaGicaGicaGicaGicb0CMfUC2zVCM0TB3jPz2LUoIbJzw50zxi7cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGiebRzxLMCMfTzxmGBNvJBgv1C1b1BhnLihSkicaGicaGicaGicaGicaGicaGicaWjsb7ihrYyw5ZzM9YBtOGC2nHBguOmc44ktSGB3bHy2L0EtOGmc42oYb9cIaGicaGicaGicaGicaGicaGicaGntaLihSGDhjHBNnMB3jToIbZy2fSzsGXktSGB3bHy2L0EtOGmtSGFqOGicaGicaGicaGicaGicaGicaGideWmcuGEYb0CMfUC2zVCM06ihnJywXLkdaUocK7ig9WywnPDhK6idaUnJSGFqOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaUy2XPCc1VCMjPDcb7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnMB3jTlw9YAwDPBJOGntbWEca1mhb4oWOGicaGicaGicaGicaGicaGicaGihn0CM9Rzs1KyxnOyxjYyxK6idmWmdSkicaGicaGicaGicaGicaGicaGicbZDhjVA2uTzgfZAg9MzNnLDdOGmZaWoWOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaUy2XPCc1VCMjPDc0XihSkicaGicaGicaGicaGicaGicaGicb0CMfUC2zVCM06ihjVDgf0zsG3nwrLzYK7cIaGicaGicaGicaGicaGicaGicaGyw5PBwf0Aw9UoIbKCMf3t3jIAxqGms41CYbLyxnLlwLUlw91DcbPBMzPBML0ztSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTB3jIAxqTmIb7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnMB3jToIbYB3rHDguOltiWzgvNktSkicaGicaGicaGicaGicaGicaGicbHBMLTyxrPB246igrYyxDpCMjPDcaXlJvZigvHC2uTAw4TB3v0idaUm3mGAw5MAw5PDgu7cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGiebRzxLMCMfTzxmGzhjHD09YyML0ihSkicaGicaGicaGicaGicaGicaGicaWjsb7ihn0CM9Rzs1KyxnOB2zMC2v0oIaZmda7ig9WywnPDhK6idaUmZSGFqOGicaGicaGicaGicaGicaGicaGiduWjsb7ihn0CM9Rzs1KyxnOB2zMC2v0oIaWoYbVCgfJAxr5oIaWlJC7ih0kicaGicaGicaGicaGicaGicaGicaXmdaLihSGC3rYB2TLlwrHC2HVzMzZzxq6idmWmdSGB3bHy2L0EtOGmc4ZoYb9cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGic5JBgLWlxrPDgXLihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idi4ChG7cIaGicaGicaGicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGiZfHmweXytSkicaGicaGicaGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIa4ChG7cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGic5JBgLWlxn1yNrPDgXLihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGicaGicaGicaGy29SB3i6icm2nJy7cIaGicaGicaGicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGmZjWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTChjVz3jLC3mTy29UDgfPBMvYihSkicaGicaGicaGicaGicaGicaGicb3Awr0AdOGmJGWChG7cIaGicaGicaGicaGicaGicaGicaGBwfYz2LUoIaWigf1Dg8GmJrWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTChjVz3jLC3mTyMfYihSkicaGicaGicaGicaGicaGicaGicb3Awr0AdOGmtaWjtSkicaGicaGicaGicaGicaGicaGicbOzwLNAhq6idrWEdSkicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmta3lca1mYWGmc4XnsK7cIaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmNb4oWOGicaGicaGicaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGmtjWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTChjVz3jLC3mTzMLSBcb7cIaGicaGicaGicaGicaGicaGicaGAgvPz2H0oIaXmdaLoWOGicaGicaGicaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcG5mgrLzYWGi2zMnMiZnsaWjsWGi2zModG1nIaXmdaLktSkicaGicaGicaGicaGicaGicaGicb3Awr0AdOGmcu7cIaGicaGicaGicaGicaGicaGicaGDhjHBNnPDgLVBJOGD2LKDgGGmc40CYbLyxnLoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idjWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTC3rHDhmGEWOGicaGicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoWOGicaGicaGicaGicaGicaGicaGigDHCdOGmJbWEdSkicaGicaGicaGicaGicaGicaGicbTyxjNAw4TDg9WoIaYnhb4oWOGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6ide2ChG7cIaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYntuSideWnYWGntmSidaUmdGPoWOGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTC3rHDcb7cIaGicaGicaGicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaUy2XPCc1ZDgf0lxzHBhvLihSkicaGicaGicaGicaGicaGicaGicbMB250lxnPEMu6idiWChG7cIaGicaGicaGicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGicaGicaGicbJB2XVCJOGi2zMnMiZntSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGlMnSAxaTC3rHDc1SywjLBcb7cIaGicaGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicaGicaGicaGignVBg9YoIaJotK5oWOGicaGicaGicaGicaGicaGicaGig1HCMDPBI10B3a6idrWEdSkicaGicaGicaGicaGicaGicaGicb0zxH0lxrYyw5ZzM9YBtOGDxbWzxjJyxnLoWOGicaGicaGicaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaWlJa1zw07cIaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGidWVC3r5Bgu+cIaGicaGicaGicaGiaOGicaGicaGicaGica8zgL2ignSyxnZpsjJBgLWlxbYB2nLC3nPBMCTy29UDgfPBMvYiJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTyxrVBsi+cIaGicaGicaGicaGicaGicaGicaGphn2zYb3Awr0Ad0ImtqWiIbOzwLNAhq9iJe0mciGDMLLD0jVEd0ImcaWideWmcaXmdaIigzPBgW9iM5VBMuIihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXNignSyxnZpsjJBgLWlw51y2XLDxmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgnPCMnSzsbJEd0IntaIign5psi1mciGCJ0IociGzMLSBd0Ii2zMnMiZnsiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgnPCMnSzsbJEd0IntaIign5psi1mciGCJ0ImtiIigzPBgW9iInMzJzImZuIig9WywnPDhK9iJaUmYiVpGOGicaGicaGicaGicaGicaGicaGicaGica8l2C+cIaGicaGicaGicaGicaGicaGicaGicaGidXLBgXPChnLignSyxnZpsjJBgLWlw9YyML0ignSAxaTB3jIAxqTmsiGCNG9iJq1iIbYEt0ImJuIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iInMzJzImZuIihn0CM9Rzs13Awr0Ad0ImI41iIbMAwXSpsjUB25LiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIig9WywnPDhK9iJaUnYiVpGOGicaGicaGicaGicaGicaGicaGicaGica8zwXSAxbZzsbJBgfZCZ0Iy2XPCc1VCMjPDcbJBgLWlw9YyML0ltiIihj4psi0nsiGCNK9iJi1iIbJEd0IntaIign5psi1mciGC3rYB2TLpsiJzMy2yJm1iIbZDhjVA2uTD2LKDgG9iJiUnsiGzMLSBd0IBM9UzsiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbVCgfJAxr5psiWlJCIlZ4kicaGicaGicaGicaGicaGicaGica8l3n2zZ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGica8AdeGy2XHC3m9iMnSAxaTDgL0BguIpKnVB2TPBMCHpc9Omt4kicaGicaGicaGicaGicaGidXWignSyxnZpsjJBgLWlxn1yNrPDgXLiIbPzd0Iy2XPCfn0yxr1CYi+sefiquHbsee8l3a+cIaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTChjVz3jLC3mTy29UDgfPBMvYiJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjJBgLWlxbYB2DYzxnZlwjHCIi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTChjVz3jLC3mTzMLSBciGAwq9iMnSAxbqCM9NCMvZC0zPBgWIpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGz2fWoIaXmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUigLKpsjJBgLWuhjVz3jLC3mIihn0EwXLpsjMB250lxnPEMu6ideYChG7ignVBg9YoIaJotK5oYi+mcu8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUigLKpsjJBgLWvgLTzuXLzNqIihn0EwXLpsjMB250lxnPEMu6ideYChG7ignVBg9YoIaJotK5oYi+ls06ls08l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGiaOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0CYi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0lxzHBhvLiIbPzd0Iy2XPCfn0yxreB3DUBg9Hzci+mcu8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0lwXHyMvSiJ5eB3DUBg9HzgLUzZWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTC3rHDci+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTC3rHDc12ywX1zsiGAwq9iMnSAxbtDgf0uhjVy2vZC2LUzYi+mcu8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0lwXHyMvSiJ5qCM9JzxnZAw5Npc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2XPCc1ZDgf0lxzHBhvLiIbPzd0Iy2XPCfn0yxrszw5KzxjPBMCIpJaLpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnSAxaTC3rHDc1SywjLBci+uMvUzgvYAw5Npc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'w0f1DgHDifzLCMLMAwnHDgLVBIbLCNjVCJO',
        'A2v5CW',
        'l2f1DgGVEw91DhvIzq',
        'C29YDa',
        'tM8Gyxv0Ag9YAxPHDgLVBIbvuKWGCMvJzwL2zwqGzNjVBsbZzxj2zxi',
        'u3rHCNqGysbUzxCGy2HHDd8Gq3vYCMvUDcbJAgf0ihDPBgWGyMuGy2XLyxjLzc4',
        'ywrKq2XPCa',
        'wfnsrI1ut0TftJ0',
        'ifbSyw4Glsa',
        'lMXPyNjHCNKTzg93BMXVywqTyNrU',
        'cIaGicaGicaGpgrPDIbJBgfZCZ0IBwvZC2fNzs1JB250zw50iJ4kicaGicaGicaGicaG',
        'DxnLCG',
        'DhjHBNnPDgLVBKrLBgf5',
        'cGPuAgLZig1HEsb0ywTLigeGzMv3ig1PBNv0zxmGDg8GChjVy2vZCY4',
        'y2XHC3noyw1L',
        'DgvTCgXHDgvqCMv2Awv3tw9KywW',
        'y2XPzw50wa',
        '4PQG77IpiezHAwXLzcb0BYbJAgvJAYbzB3vuDwjLihn0yxr1CZO',
        'Bg9HzeXPyNjHCNLjDgvTCW',
        'z2vUzxjHDgvdBgLWv2L0AfnSB3rtExn0zw0',
        'D2f0zxjTyxjRvxbNCMfKzuj0BG',
        'revmrvrf',
        'zM9JDxm',
        'zgLZywjSzwq',
        'DgvTCgXHDgvqCMv2Awv3tg9HzgLUzW',
        'z2v0',
        'B3bLBG',
        'BM90AwzPy2f0Aw9UtwvZC2fNzq',
        'AxmTzMLYC3qTChjVBxb0',
        'DMfSDwvZ',
        'Dg9Nz2XLvxnLCK1LBNuGy2fSBgvKigj1DcbKzxbYzwnHDgvKic0GDxnLig1LBNuUANmGAw5ZDgvHza',
        'lNbYBY1JBg9Zzs1IDg4',
        'q2XPCcbUB3qGzM91BMq',
        'y29VBgrVD25FC2vJB25KCW',
        'y2XPCc5TCdq',
        'lMXPyNjHCNKTz3jPza',
        'DgLTzxn0yw1W',
        'Bw91C2vKB3DU',
        '4PYfientuKyGDg9Rzw4GAw5PDgLHBgL6zwqGC3vJy2vZC2z1BgX5',
        'CMvUzgvYrMLUywXcDg4',
        'BgLICMfYEuzPBhrLCG',
        '4PYfienSAxaGzgvSzxrLzcbZDwnJzxnZzNvSBhK',
        'uMvXDwvZDcb0Aw1LB3v0igfMDgvYia',
        'DxbKyxrLtgLICMfYEvzPzxC',
        'ywX0',
        'Dg9Nz2XLvxjSqNv0Dg9Utg9HzgLUzW',
        'zxH0CMfJDfLVDvr1yMvwAwrLB0LK',
        'ChjVy2vZC2LUzY1JyxjK',
        'u2LNBMvKig91DcbZDwnJzxnZzNvSBhK',
        '4P2mieXVz291DcbLCNjVCJO',
        '8j+tJsbjDgvTigzVDw5KoG',
        'Bg9HzfLVDvr1yMvtDwj0AxrSzxm',
        'z2v0vgLTzq',
        'pc9OmJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjJyxjKlwzVB3rLCIiGC3r5Bgu9iM9WywnPDhK6idaUnJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjIywrNzsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImI41iIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpJXJAxjJBguGy3G9iJeYiIbJEt0ImtiIihi9iJeWiI8+phbVBhLSAw5LihbVAw50CZ0ImtiGnIaXmIaXmIaXnIaXnciVpJWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGuhjVy2vZC2LUzY4UlGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IzxHWB3j0lwj0BIiGzgLZywjSzwqGC3r5Bgu9iM9WywnPDhK6idaUnJSGy3vYC29YoIbUB3qTywXSB3DLzdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDMCGD2LKDgG9iJe4iIbOzwLNAhq9iJe4iIb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIbZDhjVA2uTD2LKDgG9iJiUnsiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0IttiXide1DJrHmIaYidaGmcaXltiGmKG1ytiGmIaWidaGms0Yltj2ltqIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgCGy2XHC3m9iMv4Cg9YDc1HCNjVDYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Cg9SEwXPBMuGCg9PBNrZpsi3ideWideYide1ide3ideWiI8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0ImtiIihKXpsiXnsiGEdi9iJeYiIb5mJ0ImYiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2C+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDMC+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGrxHWB3j0cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica',
        'ChjVDg9JB2W',
        'Aw1N',
        'ChjVAMvJDf9Pza',
        'CMvUzgvYAw5N',
        'sw52ywXPzcbvuKWGzM9YBwf0oG',
        'C2f2zvbYB2nLC3nPBMDjDgvTCW',
        'BgfZDenOzwnRzwq',
        'yMfZAwm',
        'l2nSAxbZl3n0yxr1CY8',
        '8j+oRIbhyw1LCgXHEsbZzwXLy3rVCIbJBgLJA2vKiq',
        'y3jLyxrLt2jQzwn0vvjm',
        'y29UDgvUDa',
        'y2XHC3nmAxn0',
        'rxjYB3iGy2HLy2TPBMCGDMLKzw8GzhvYyxrPB246',
        'y2XVC2vZDa',
        'AgfUzgXLv2f0zxjTyxjRvg9Nz2XL',
        'DMLKzw9Zx3bLCL9KyxLFBgLTAxq',
        'ChjVy2vZC1vYBej0BG',
        'Dg9tDhjPBMC',
        'C2f2zwq',
        '4P2mifbSzwfZzsbSB2CGAw4GDg8Gy3jLyxrLignSAxaGy29TCgLSyxrPB25ZlIbdBgLJAYb0AguGBg9NAw4GyNv0Dg9UigLUihrOzsb0B3aGCMLNAhqU',
        'C2v0vgHLBwuOktOGqxbWBhLPBMCGDgHLBwu6',
        'w0f1DgHDifrVA2vUigLZigLUDMfSAwqSihjLzgLYzwn0Aw5NihrVigXVz2LUigLUidiGC2vJB25KCW',
        'Bwf0y2G',
        'lNvZzxiTBMfTzq',
        'ig1PBNv0zxmUifvWz3jHzguGDg8GDw5SB2nRigXVBMDLCIb2AwrLB3mU',
        'Ahr0Ca',
        'zxjYB3jFy29Kzq',
        'D2fYBMLUzW',
        '4PYfifDHDgvYBwfYAYbwsvnjqKXf',
        'CM91BMq',
        'C2XVDc1ZExn0zw0TAw5MBW',
        'Cgf0Ag5HBwu',
        'y2XPChmTDg9Nz2XL',
        'ChjVrMvHDhvYzu1VzgfS',
        'rg93BMXVywqGC3rHCNrLzce',
        'rKLsrsbgsvjfiezjuKu',
        'Bg9JyxrPB24',
        'iJ48l2K+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'yMfJA2DYB3vUza',
        'q2XPCcbHzgrLzcb0BYbtBg90ia',
        'DgLTzw91Da',
        'i2zLyxr1CMvZvgfIq29UDgfPBMvY',
        'C2HVD1rLBxbSyxrLq29UzMLYBwf0Aw9U',
        'C2f2zuXPyNjHCNLjDgvTCW',
        'zhjVCgrVD25mB2DVDxq',
        'y3nYzL90B2TLBG',
        '8j+uHcbgzxrJAgLUzYbMCMvZAcbZDwjZy3jPChrPB24GAw5MBYbMCM9TigjHy2TLBMqGlsbotYbdqunirs4UlG',
        'lMnHCMqTC3rHDhvZ',
        'C3rHCNrZv2L0Aa',
        'AgLKzgvU',
        'tg9HzgLUzY4UlG',
        'DgvTCgXHDgvtAgvLDeHHBMrSzq',
        'zxjYB3i',
        'BgLICMfYEuL0zw1Z',
        'yxbWzw5Kq2HPBgq',
        'te9mt0W',
        'u2LNBIbPBJ8',
        'Dg9vChbLCKnHC2u',
        '4PYfifrLBxbSyxrLCYbSB2fKzwq6',
        'BgvMDa',
        'yxbWBhK',
        'lM5HDI1PDgvT',
        '4PYfifDHDgvYBwfYAYa',
        'rxHWAxjLza',
        'icdINiuGvxbKyxrLzcb0zw1WBgf0zsbUyw1L',
        'C2fMzufKzev2zw50tgLZDgvUzxjcEuLK',
        'cIaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsj0zxH0lwfSAwDUoIbJzw50zxi7iJ4kicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6idq4ChG7ig1HCMDPBI1IB3r0B206ide2ChG7iJ7IJ7hVUi88l2rPDJ4kicaGicaGicaGicaGicaGicaGica8AdeGC3r5Bgu9iMzVBNqTC2L6ztOGmJrWEdSGy29SB3i6ihzHCIGTlxrLEhqPoYbTyxjNAw4TyM90Dg9ToIa4ChG7iJ5qCM9JzxnZAw5NifrPBwvVDxq8l2GXpGOGicaGicaGicaGicaGicaGicaGidXWihn0EwXLpsjJB2XVCJOGDMfYkc0TBxv0zwqPoYbTyxjNAw4TyM90Dg9ToIaYnhb4oYi+ww91CIbJB21WAwXHDgLVBIbPCYbZDgLSBcbIzwLUzYbWCM9JzxnZzwqUienOzwnRigjHy2SGAw4GysbTB21LBNqUpc9WpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GB25JBgLJAZ0IDgHPCY5JBg9Zzxn0kcCJy2XPCc1WCM9JzxnZAw5Nlw1VzgfSjYKUCMvTB3zLkcK7ihDPBMrVDY5SB2nHDgLVBI5OyxnOid0GjYmVy2XPChmNiIbZDhLSzt0IcIaGicaGicaGicaGicaGicaGicaGicaGihbHzgrPBMC6ideWChGGmJbWEdSkicaGicaGicaGicaGicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2zMnMiZnsaWjsWGi2zModG1nIaXmdaLktSkicaGicaGicaGicaGicaGicaGicaGicaGy29SB3i6ihDOAxrLoWOGicaGicaGicaGicaGicaGicaGicaGicbIB3jKzxi6ig5VBMu7cIaGicaGicaGicaGicaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicaGicaGicaGicaGicbMB250lxDLAwDODdOGnJaWoWOGicaGicaGicaGicaGicaGicaGici+vMLLDYbPBIbdBgLWCZWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'twfRzsbHihrYzw5KAw5Nigf1zgLVig1HC2H1Ccb3AxrOihzPzgvVignSAxbZihn5BMnLzcb0BYb0AguGyMvHDa',
        'ChjVz3jLC3m',
        '4P2mifnfq1vssvrzoIbjBNzHBgLKihbYB2PLy3rjzcbPBIbMzxrJAefUzfvWzgf0zur1CMf0Aw9U',
        'u3vIC2nYAxb0Aw9Uifn0yxr1CW',
        'BMfTzq',
        'AxnFz2vUzxjHDgLUzW',
        'DhjPBq',
        'l2nSAxbZl2rVD25SB2fKlW',
        'cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGia',
        'rMfPBgvKihrVihn0yxj0ihbYB2nLC3nPBMC',
        'lMnOzxzYB24TAwnVBG',
        'pgKGy2XHC3m9iMzHCYbMys1ZAwDUlwLUiJ48l2K+phnWyw4+u2LNBIbPBJWVC3bHBJ4',
        '4P2mifLVDvr1yMuGy29UBMvJDgLVBIbLCNjVCJO',
        'v2f0zxjTyxjRia',
        'D2f0zxjTyxjRugfPzfnLy3rPB24',
        'igzYB20Gww91vhvIzq',
        'zM9YrwfJAa',
        'uKfurv9msu1jveLorW',
        'AgfZqxr0CMLIDxrL',
        'C3zN',
        'CMDIysGYntuSidi1nsWGmJu1lcaWlJqP',
        'B2XKvxbKyxrLuhjVy2vZC2LUz1zPzxDFB2XK',
        'Ahr0Chm6lY8',
        'DMfSDwu',
        'CMvUzgvYtg9HzgvYugfYDhm',
        'zxHJzxb0Aw9U',
        'yxv0BW',
        'C2nYB2XSsgvPz2H0',
        'ig1PBNv0zq',
        'CMDIysGYntuSideWnYWGmcWGmc44kq',
        'y29WAwvK',
        'CMv0CNLqCM9JzxnZAw5N',
        '8j+tNsbtzxr0Aw5NihDHDgvYBwfYA2vKieHutuWGDg8Gy29UDgfPBMvY',
        'yMLUza',
        '4PYfifDLyLnVy2TLDcbJBgLLBNqGAw5PDgLHBgL6zwqGD2L0AcbODhrWt25SEsbHDxrO',
        '4P2mievSzw1LBNqGD2L0AcbPzcaI',
        'tevuuYbht09ptW',
        'mcbTAw51DgvZigfNBW',
        'x2HHC0nSAwnRtgLZDgvUzxi',
        'lNbYBY1MAw5LlxbYAw50ige',
        '4P2mifnfq1vssvrzoIbbDhrLBxb0zwqGCgf0Acb0CMf2zxjZywWGAw4GDgvTCgXHDguUAwq6',
        'y2XPCenVBMzPCM1dyw5JzwW',
        'y3vYCMvUDfvZzxi',
        'lMLUChv0lxnLy3rPB24',
        'wu9vvfvcrv9bvvrix0vsuK9s',
        'ChvZAa',
        'q291BgqGBM90igzLDgnOigr1CMf0Aw9UoG',
        'zMfSC2u',
        'q3jLyxrLigeGCMvHy3rPB24Gy29TCgLSyxrPB24GDMLKzw8',
        'yMvMB3jLzw5K',
        'pc9Omt4kicaGicaGicaGicaGicaGicaGicaGicaGphaGy2XHC3m9iNbYBY1ZDwj0AxrSzsi+',
        'C3r5Bgu',
        'Dgv4DenVBNrLBNq',
        'DgvTCgXHDgvFBMfTzq',
        'C3rYB2TLrgfZAgfYCMf5',
        'pc9WpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GB25JBgLJAZ0IDgHPCY5JBg9Zzxn0kcCJy2XPCc1WCM9JzxnZAw5Nlw1VzgfSjYKUCMvTB3zLkcKIihn0EwXLpsikicaGicaGicaGicaGicaGicaGicaGicaGCgfKzgLUzZOGmtbWEcaYmhb4oWOGicaGicaGicaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzMy2yJm1idaLlcaJzMy4odu2ideWmcuPoWOGicaGicaGicaGicaGicaGicaGicaGicbJB2XVCJOGD2HPDgu7cIaGicaGicaGicaGicaGicaGicaGicaGigjVCMrLCJOGBM9UztSkicaGicaGicaGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGohb4oWOGicaGicaGicaGicaGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGicaGicaGicaGicaGigzVBNqTD2vPz2H0oIa2mda7cIaGicaGicaGicaGicaGicaGicaGiJ5dBg9ZztWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'C3bPBIaWlJzZigvHC2uTAw4TB3v0',
        '8j+tJcb3yxrLCM1HCMTFCMvXDwLYzwqGAxmGvfjvrsaTihnOB3DPBMCGDxbNCMfKzsbIDxr0B24GAw4Gy29UDhjVBhm',
        'lM9WDgLVBI1KzxnJCMLWDgLVBG',
        'uMvHzhK',
        'AxnwywXPzfLVDvr1yMvvCMW',
        'C3DPDgnOvgfI',
        'q3jLyxrLigeGC3bLzwqGCgfPBNrPBMCGB3iGy3jLyxrPB24GChjVy2vZCYb2AwrLBW',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'lNbYBY1TB2rHBc1VDMvYBgf5',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaG',
        'u2LNBIbPBIb0BYbJB250Aw51zq',
        '8j+uHcbdB25MAxjTigj1DhrVBIbJBgLJA2vKigzVCIbPDgvToIa',
        'C2nYB2XSvg9W',
        'BM8TC3rVCMu',
        'vg9Rzw4GAw52ywXPza',
        'BMvLze1VCMvvCgDYywrLvgv4Da',
        'q3vYCMvUDcbqBgfU',
        '8j+NUsbszw1VDMLUzYbZDgfSzsbJyxjKigr1CMLUzYbWB2XSAw5NoIa',
        'rxjYB3iGy2HLy2TPBMCGC3vIC2nYAxb0Aw9Uigv4CgLYyxrPB246',
        'ywrKuhjVy2vZC2LUz0L0zw0',
        'Bwv0yvTUyw1LpsjJC3jMlxrVA2vUiL0',
        'DxnLCLbYB2zPBgu',
        'Bg9HzfrLBxbSyxrLCW',
        'C3bSAxrZy3jLzw4',
        'B3bLBLzPzgvVvg9Vtg9Uz01VzgfS',
        'DhjHy2u',
        'DxjS',
        'lNnVBgLZlwnSB3nLlwj0BG',
        'Ahr0CdO',
        'lNvZzxiTyxzHDgfY',
        'BNvTyMvY',
        'ugf0DgvYBIaZig1HDgnOicHRzxL3B3jKCYbMB3vUzcKSihrYEwLUzYbUDw1IzxiGzxH0CMfJDgLVBI4UlG',
        'y29UDgfPBNm',
        'lMLUChv0lwnVBNrHAw5LCG',
        'rMfPBgvKihrVihjLC3rVCMuGy2XPCcbWCM9JzxnZAw5NoG',
        'D2f0zxjTyxjRtM90AwnL',
        'yw5PBwf0Aw9U',
        'x3vUBg9JA1rPBwvY',
        'Dw5KzwzPBMvK',
        'cIaGicaGicaGpgrPDIbJBgfZCZ0IBM90AwzPy2f0Aw9UlwnVBNrLBNqIpGOGicaGicaGicaGica8AsbJBgfZCZ0IzMfZigzHlq',
        'DgvTCgXHDgu',
        'rxjYB3i6ierLBgv0zsbTB2rHBcbUB3qGyxzHAwXHyMXL',
        'zw5MB3jJzvvYBej1DhrVBLjHDgvmAw1PDe9Utg9Hza',
        '8j+uHcbvCgrHDgLUzYb2Awv3CYbHBMqGC2f2Aw5N',
        'Cg9PBNrLCG',
        '4P2mie5pvcbgt1vora',
        'DMLZAwjPBgL0EwnOyw5Nzq',
        'DMLKzw9FBgLTAxq',
        'lcbYzw1VDMLUzYbMCM9TihbYB2nLC3nPBMC',
        'u29SAxnbsvDLyLnVy2TLDenSAwvUDa',
        'rxHWAxjLCYbPBIa',
        'mtGWotLuAhLdvum',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'l3LVDxr1yMuVz2v0lw1LDgfKyxrHlW',
        'rNjLzq',
        'CgXHBL9LEhbPCMvZx2f0',
        'uhjVy2vZC2LUzYbLCNjVCIbKzxrLy3rLzdO',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'C2fMzufKzev2zw50tgLZDgvUzxi',
        'yM9KEq',
        'C2v0',
        'ugXLyxnLihnLBgvJDcbHihrLBxbSyxrL',
        'AxnzB3vuDwjLu2HVCNq',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCMv2Awv3lxzPzgvVlxbSywnLAg9SzgvYiJ4kicaGicaGicaGicaGicaGicaGica8AsbJBgfZCZ0IzMfZigzHlwv4y2XHBwf0Aw9UlwnPCMnSzsi+pc9PpGOGicaGicaGicaGicaGicaGicaGidXWpK5VihrLBxbSyxrLihnLBgvJDgvKpc9WpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'igj5ihvZzxi',
        'lg5VB3bLBMvYlg5VCMvMzxjYzxi',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IBgLICMfYEs1JyxjKihbYB2nLC3nPBMCTy2fYzciGzgf0ys1WCM9JzxnZAw5NlwLKpsi',
        'AgvPz2H0',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1TB2rHBci+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM8TCgfUzwWTBgvMDci+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlwXLzNqTDg9WiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlwXVy2STD3jHCci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsiYociGAgvPz2H0psiYociGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjUB25LiIbZDhjVA2u9iIngrJzbm0qIihn0CM9Rzs13Awr0Ad0ImI4YiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihG9iJmIihK9iJeXiIb3Awr0Ad0ImtGIigHLAwDODd0ImteIihj4psiYiIbYEt0ImIiVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWyxrOigq9iK03ideXvJDHnsa1idaGmcaXideWidb2nciVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDMC+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8AdeGy2XHC3m9iNbYBY10AxrSzsi+',
        '4PQG77IpifbVChvWigjSB2nRzwqSigzHBgXPBMCGyMfJAYb0BYbYzwrPCMvJDa',
        'zMfPBgvK',
        'z2vUzxjHDgLVBG',
        'BwvZC2fNzsa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYB2nLC3nPBMCTBwvZC2fNzsi+',
        'ChjVy2vZC2LUz0L0zw1Z',
        'z2v0sxrLBq',
        'iZG4oa',
        'yxv0Af90B2TLBG',
        'lMnSAxbZlxrHyG',
        'DxnLCLnLDhrPBMDZqNrU',
        'u3bSAxqGu2nYzwvUigLZig9UBhKGyxzHAwXHyMXLig9UihbHAwqGCgXHBNmUifvWz3jHzguGDg8GDw5SB2nRigL0',
        'Bw9KywWTB3bLBG',
        'y29UC29Szq',
        'CgXHBL9PBMzV',
        'zgvSzxrLuhjVAMvJDezYB21tzxj2zxi',
        're9nq29UDgvUDeXVywrLza',
        'zwXPDgu',
        'ww91CIbZDwjZy3jPChrPB24GAgfZigv4CgLYzwqUifLVDsbHCMuGBM93ig9UihrOzsbgCMvLihbSyw4U',
        'u0Hfruvfu0G',
        'DgfI',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVy2vZC2LUzY1ZDgf0DxmG',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaG',
        'vgvTCgXHDgu',
        'C3bSAxrZy3jLzw5eAxzPzgvY',
        'mc41',
        'BgLICMfYEvbVBgXPBMDjBNrLCNzHBa',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0IzM9UDc1ZAxPLoJeXChG7y29SB3i6i0zgnKeZrdTMB250lxDLAwDODdO2mda7yMfJA2DYB3vUzdOJrKzgm0vgo3bHzgrPBMC6m3b4idLWEdTIB3jKzxiTCMfKAxvZoJeWmhb4o2jVCMrLCJOXChGGC29SAwqGi0zgrdbdmIi+ufjppc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1Wyw5LBc1YAwDODci+cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IChjVlwnSB3nLlwj0BIi+cIaGicaGicaGicaGicaGicaGicaGicaGidXZDMCGD2LKDgG9iJe0iIbOzwLNAhq9iJe0iIb2Awv3qM94psiWidaGmJqGmJqIigzPBgW9iM5VBMuIihn0CM9Rzt0Iy3vYCMvUDenVBg9YiIbZDhjVA2uTD2LKDgG9iJiUmIiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiIbZDhjVA2uTBgLUzwPVAw49iNjVDw5KiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSAw5LihGXpsiXociGEte9iJyIihGYpsi2iIb5mJ0ImtGIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSAw5LihGXpsi2iIb5mt0InIiGEdi9iJe4iIb5mJ0ImtGIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDMC+cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cGOGicaGicaGicaGicaGicaGicaGidXKAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUCY1SywjLBci+vw5SB2nRihDPDgGGysbWBgfUpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUlw9WDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzc1Py29UiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsiYmciGAgvPz2H0psiYmciGDMLLD0jVEd0ImcaWideWmcaXmdaIigzPBgW9iM5VBMuIihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKzwzZpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMvHCKDYywrPzw50igLKpsjIyxnPy0DYywqIihGXpsiWjsiGEte9iJaLiIb4mJ0ImtaWjsiGEti9iJeWmcuIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0ImcuIihn0EwXLpsjZDg9WlwnVBg9YoInMmwy1zJK7C3rVCc1VCgfJAxr5oJeIpJWVC3rVCd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJuWjsiGC3r5Bgu9iNn0B3aTy29SB3i6i2nIzdvLmtTZDg9Wlw9WywnPDhK6msi+pc9ZDg9WpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0ImtaWjsiGC3r5Bgu9iNn0B3aTy29SB3i6iZK0ytnIodTZDg9Wlw9WywnPDhK6msi+pc9ZDg9WpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9SAw5LyxjhCMfKAwvUDd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KzwzZpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8y2LYy2XLign4psi1mciGy3K9iJuWiIbYpsiXnIiGzMLSBd0IDxjSkcnIyxnPy0DYywqPiJ48l2nPCMnSzt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgvSBgLWC2uGCNG9iJqYiIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iNvYBcGJyMfZAwnhCMfKksiGC3rYB2TLlxDPzhrOpsiXmciGzMLSBd0IBM9UzsiGDhjHBNnMB3jTpsjYB3rHDguOnduGntaGntaPiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIpJWVzwXSAxbZzt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgvSBgLWC2uGCNG9iJqYiIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iNvYBcGJyMfZAwnhCMfKksiGC3rYB2TLlxDPzhrOpsiXmciGzMLSBd0IBM9UzsiGDhjHBNnMB3jTpsjYB3rHDguOltq1iduWiduWksiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiJ48l2vSBgLWC2u+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDMC+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzc1IB2r5iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0CM9UzZ5cyxnPyZWVC3rYB25NpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5quK8GDgvTCgXHDgvZimk3ie5VihDHDgvYBwfYAZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjWCM8TCgXHBI1JyxjKlxbYAwnLiJ4KmtGUotKVBw88l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUlwnHCMqGAgLNAgXPz2H0zwqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WB3b1BgfYlxrHzYi+ug9WDwXHCJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUlwnHCMqTAwnVBIi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn2zYb3Awr0Ad0ImJaIigHLAwDODd0ImJaIihzPzxDcB3G9iJaGmcaXmdaGmtaWiIbMAwXSpsjUB25LiIb4BwXUCZ0IAhr0CdOVl3D3DY53mY5VCMCVmJaWmc9ZDMCIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgvMCZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSAw5LyxjhCMfKAwvUDcbPzd0IChjPBwvhCMfKiIb4mt0ImcuIihKXpsiWjsiGEdi9iJeWmcuIihKYpsiXmdaLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaLiIbZDhLSzt0IC3rVCc1JB2XVCJOJzMzMmtC2o3n0B3aTB3bHy2L0EtOXiJ48l3n0B3a+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psi1mcuIihn0EwXLpsjZDg9WlwnVBg9YoInMzMq2mda7C3rVCc1VCgfJAxr5oJeIpJWVC3rVCd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJeWmcuIihn0EwXLpsjZDg9WlwnVBg9YoInMzJKXmda7C3rVCc1VCgfJAxr5oJeIpJWVC3rVCd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVBgLUzwfYr3jHzgLLBNq+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgvMCZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgnPCMnSzsbJEd0IntaIign5psi1mciGCJ0ImtyIigzPBgW9iNvYBcGJChjPBwvhCMfKksi+pc9JAxjJBgu+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXLBgXPChnLihj4psi0mIiGCNK9iJe4iIbJEd0IntaIign5psi1mciGC3rYB2TLpsj1CMWOi3bYAw1Lr3jHzcKIihn0CM9Rzs13Awr0Ad0ImtiIigzPBgW9iM5VBMuIihrYyw5ZzM9YBt0ICM90yxrLkdq1iduWiduWksiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiJ48l2vSBgLWC2u+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXLBgXPChnLihj4psi0mIiGCNK9iJe4iIbJEd0IntaIign5psi1mciGC3rYB2TLpsj1CMWOi3bYAw1Lr3jHzcKIihn0CM9Rzs13Awr0Ad0ImtiIigzPBgW9iM5VBMuIihrYyw5ZzM9YBt0ICM90yxrLkc00nsa1mca1mcKIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzci+pc9LBgXPChnLpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUlwnHCMqTyM9KEsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDhjVBMC+uhjPBwu8l3n0CM9UzZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+ufjpihrLBxbSyxrLCYaRiejHC2LJie92zxjWDxjWB3nLpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1WBgfUlwnHCMqTChjPy2uIpIqYos45os9TBZWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzc1Py29UiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsiYmciGAgvPz2H0psiYmciGDMLLD0jVEd0ImcaWideWmcaXmdaIigzPBgW9iM5VBMuIihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8YmdaWl3n2zYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKzwzZpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMvHCKDYywrPzw50igLKpsjLBgL0zuDYywqIihGXpsiWjsiGEte9iJaLiIb4mJ0ImtaWjsiGEti9iJeWmcuIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0ImcuIihn0EwXLpsjZDg9WlwnVBg9YoInMzJzIm2q7C3rVCc1VCgfJAxr5oJeIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psi1mcuIihn0EwXLpsjZDg9WlwnVBg9YoInMzJnKmda7C3rVCc1VCgfJAxr5oJeIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiXmdaLiIbZDhLSzt0IC3rVCc1JB2XVCJOJyZCWmdaWo3n0B3aTB3bHy2L0EtOXiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9SAw5LyxjhCMfKAwvUDd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KzwzZpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8y2LYy2XLign4psi1mciGy3K9iJuWiIbYpsiXnIiGzMLSBd0IDxjSkcnLBgL0zuDYywqPiJ48l2nPCMnSzt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgvSBgLWC2uGCNG9iJqYiIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iNvYBcGJzwXPDgvhCMfKksiGC3rYB2TLlxDPzhrOpsiXmIiGzMLSBd0IBM9UzsiGDhjHBNnMB3jTpsjYB3rHDguOnduGntaGntaPiIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIpJWVzwXSAxbZzt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgvSBgLWC2uGCNG9iJqYiIbYEt0ImtGIign4psi1mciGy3K9iJuWiIbZDhjVA2u9iNvYBcGJzwXPDgvhCMfKksiGC3rYB2TLlxDPzhrOpsiXmIiGzMLSBd0IBM9UzsiGDhjHBNnMB3jTpsjYB3rHDguOltq1iduWiduWksiGC3rYB2TLlwXPBMvJyxa9iNjVDw5KiJ48l2vSBgLWC2u+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZDMC+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzc1IB2r5iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0CM9UzZ5fBgL0ztWVC3rYB25NpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5fDMvYExrOAw5NicSGuhjPB3jPDhKGCxvLDwu8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IChjVlxbSyw4Ty2fYzc1WCMLJzsi+jdq5lJK5l21Vpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYBY1YAwDODc1MB290zxiIpGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjWCM8Ty3rHlwj0BIi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihDPzhrOpsiXnciGAgvPz2H0psiXnciGDMLLD0jVEd0ImcaWidi0idi0iIbMAwXSpsjUB25LiIbZDhjVA2u9iMn1CNjLBNrdB2XVCIiGC3rYB2TLlxDPzhrOpsiYlJuIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzciGC3rYB2TLlwXPBMvQB2LUpsjYB3vUzci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphjLy3qGEd0ImYiGEt0ImteIihDPzhrOpsiXociGAgvPz2H0psiXmsiGCNG9iJiIihj5psiYiI8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphbHDgGGzd0IttCGmtfwn2e1iduGmcaWideGos45lteIlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGvw5SB2nRifnWBgL0ifnJCMvLBGOGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGphaGy2XHC3m9iNbYBY1MAw5LlxbYAw50iJ5dyw5JzwWGyw55DgLTzsdcTYboBYbJB21TAxrTzw50imk3idXHpK1HEwjLigXHDgvYpc9HpJWVCd4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica8l2rPDJ4kicaGicaGica',
        'AMf2yxnJCMLWDdO',
        'mJzWEa',
        'ChjPBwu',
        'D3jPDgvuzxH0',
        'BwLUzwnYywz0xZe',
        'm3b4',
        'C2v0sxrLBq',
        'yw5HBhL0AwnZlwXVy2TLza',
        'mwvT',
        'ww91ignHBM5VDcbWB3n0igeGDMLKzw8GywjVDMuG',
        'w0f1DgHDifvZzxiGyxv0AgvUDgLJyxrLzdO',
        '8j+xKE+4JYbezwXLDguGAw5PDgLHDgvKigzVCIbPDgvToIa',
        'qLjvsa',
        'rMfPBgvKihrVigXVywqGDgvTCgXHDgvZlcbZDgf0Dxm6',
        '8j+oQcbYzw5Kzxjuzw1WBgf0zvbYzxzPzxCGy2fSBgvKihDPDgGGy29UDgfPBMvYoG',
        'u1rpucbtve9q',
        'vw5HyMXLihrVigzLDgnOihzPzgvVigLUzM8',
        'ywXS',
        'rgvSzxrLici',
        'lM5VDgLMAwnHDgLVBG',
        '4PYfie1VzgfSigrPC3bSyxLLza',
        '8j+tOsbmAwjYyxj5igf1Dg8TCg9SBgLUzYbZDgfYDgvKicHLDMvYEsa1CYb3AxrOihbYB2nLC3nPBMCGy2fYzcb2ywXPzgf0Aw9Ukq',
        '4PYxiezHAwXLzcb0BYbPBML0Awf0zsbzB3vuDwjLignVBM5Ly3rPB246ia',
        'lMjHzgDL',
        'x2v2zw50q29UDhjVBgXLCNm',
        'wu9vvfvcrv9quK9drvntx01jtL9nuW',
        'qvbjx0jbu0vFvvjm',
        'C2v0DxbfDMvUDeXPC3rLBMvYCYGPoIbKyxjRtw9KzvnLDhrPBMDZvg9Nz2XLigvSzw1LBNqGzM91BMqU',
        '8j+uJsb3yxrLCM1HCMTLzeHutuWGAw5JBhvKzxmGDg9Nz2XLoG',
        'y29UzMLYBvrLBxbSyxrLqNrU',
        'sgfZihDHDgvYBwfYAYbLBgvTzw50oG',
        'pc9OmJ4kicaGicaGicaGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnHCMqTzM9VDgvYiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMjHzgDLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3zNihzPzxDcB3G9iJaGmcaYncaYnciGzMLSBd0IBM9UzsiGC3rYB2TLpsjJDxjYzw50q29SB3iIihn0CM9Rzs13Awr0Ad0ImI41iIbZDhjVA2uTBgLUzwnHCd0ICM91BMqIihn0CM9Rzs1SAw5LAM9PBJ0ICM91BMqIpJXJAxjJBguGy3G9iJeYiIbJEt0ImtiIihi9iJeWiI8+phbVBhLSAw5LihbVAw50CZ0ImtiGnIaXmIaXmIaXnIaXnciVpJWVC3zNpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'icbWCMv2Awv3vgvTCgXHDgvoyw1LoG',
        'Aw5OzxjPDa',
        'ihbYB2nLC3nPBMCGAxrLBxm',
        'Aw5JBhvKzq',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKlIbqBgvHC2uGDhj5igfNywLUlG',
        '8j+AQYbnB2rHBcbJBg9ZzwqGyNKGyMfJA2rYB3aGy2XPy2S',
        'Ew91DhvIzv9JB25Uzwn0zwq',
        'C3bSAwnL',
        'igfJDgL2zsbPDgvTCYbYzw1HAw5PBMC',
        'ugXLyxnLigvUDgvYigeGww91vhvIzsbvuKW',
        'ywXSidaUnxmGzwfZzq',
        'rgvSzxrPBMCGy2XPCc4UlG',
        'vg9WiduGBw9Tzw50CYbYyw5RzwqGy29TCgLSyxrPB24',
        'Ew91DhvIzvvYBeLUChv0',
        'CMvTB3zLq2HPBgq',
        'u2LNBMvKigLUigfZia',
        'ig1PBNv0zxmUifLVDxiGDMLKzw8GAxmG',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGicaGicaGicaGpceTlsbjBMzVihnLy3rPB24Gls0+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYB2nLC3nPBMCTAw5MBYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNbYB2nLC3nPBMCTBMfTzsi+',
        'Ahr0Chm6',
        'zgf0yxnLDa',
        '4P2mievYCM9YigXVywrPBMCGz2fTzxbSyxKGy2XPChm6',
        'CgX1C0zLyxr1CMvZqNrU',
        'DMLKzw9Zx3nWywnL',
        'Dw5ZAgLMDa',
        'i2zMndq0na',
        'C3rVCMfNzv9SAw1PDf9YzwfJAgvK',
        'BMv4DevSzw1LBNrtAwjSAw5N',
        'twfRzsbHicjuB3aGmtaGBw9Tzw50CYiGDMLKzw8GzNjVBsb5B3vYignVBNrLBNq',
        'y3vYC29Y',
        '4PYxifLVDvr1yMuGy29UBMvJDgLVBIbMywLSzwq6ia',
        'vgHPCYbPCYbHihbYzw1PDw0GzMvHDhvYzs4GugXLyxnLihvWz3jHzguGEw91CIbWBgfUlG',
        'zgL2AwrLCKXPBMu',
        'CgXHBL90ExbL',
        '4O+ZifbYB2nLC3nPBMCG',
        'mtC2mNLisgz4ta',
        'ywrK',
        'C3vIC2nYAxb0Aw9Ux2vUzf9KyxrL',
        'v0HbvcbjuYbiqvbqru5jtKC',
        'odu1q2DYzgrV',
        'lNnLDhrPBMDZlw9WDgLVBIaUB3b0Aw9Ulw5HBwu',
        'Dg9mB3DLCKnHC2u',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iywn0AxzPDhKTDgLTzsi+',
        'Ew91DhvIzvn1yNrPDgXLu3rHDhvZ',
        'ChjVy2vZC2LUzW',
        'zgvSzxrLq2XPCa',
        'ihrVA2vUCYbYzw1HAw5PBMCUifj1BM5PBMCGBg93pYa8ysbOCMvMpsiVChjLBwL1Bs5ODg1SiIbZDhLSzt0Iy29SB3i6icnMzJzImZu7igzVBNqTD2vPz2H0oIa3mda7ihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoYi+vxbNCMfKzsbUB3C8l2e+igzVCIb1BMXPBwL0zwqGywnJzxnZiq',
        'FJyWCW',
        'AgLZDg9YEq',
        'zM9YBwf0u3rHDhvZ',
        'rxjYB3iGAw4GzMv0y2Huzw1WBgf0zvbYzxzPzxC6',
        'mtuTnJbZ',
        'rgvSzxrLigvYCM9YicHZyw5PDgL6zwqGzM9YihvZzxiPoG',
        '4PQG77Ipierfufjfq0furuq6igDLDeHLywrLCNmOksbJywXSzwqGlsb1C2uGz2v0qxv0AeHLywrLCNmOksbPBNn0zwfKigzVCIbdu1jgihbYB3rLy3rPB24',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'C2HVD05VDgLMAwnHDgLVBG',
        'y2fUx2DLBMvYyxrL',
        'tg9HzgLUzYb2AwrLBYbPBMzVlI4U',
        'mta3ntq2me1zqK9HDG',
        'igv4y2vLzhmG',
        'yMXVyG',
        'cIaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjKAxnWBgf5oIbMBgv4oYbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSGAgvPz2H0oIaXmdaLoYbWywrKAw5NoIaWoYb0zxH0lwfSAwDUoIbJzw50zxi7igjHy2TNCM91BMq6icmWmda7ignVBg9YoIb3AgL0ztSGzM9UDc1Myw1PBhK6icDnB250C2vYCMf0jYWGqxjPywWSihnHBNmTC2vYAwy7igjVCMrLCI1YywrPDxm6idHWEdSGB3zLCMzSB3C6igHPzgrLBJSIpGOGicaGicaGicaGicaGicaGicaGidWHls0Gve9qoIbwAwrLBYbqCMv2Awv3ic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzSzxG6ide7ihDPzhrOoIaXmdaLoYbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJmweXytjLidaLlcaJmtyYmtnLideWmcuPoYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSGCg9ZAxrPB246ihjLBgf0AxzLoYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iNbVC2L0Aw9UoIbHyNnVBhv0ztSGD2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGyMfJA2DYB3vUzdOGCMvWzwf0Aw5NlwXPBMvHCI1NCMfKAwvUDcG0nwrLzYWGi2zMnMeZzcaWChGSicnMzJzHm2qGmNb4lcb0CMfUC3bHCMvUDcaYChGSihrYyw5ZCgfYzw50ideWChGPoYbVCgfJAxr5oIaWlJa1oYbWB2LUDgvYlwv2zw50CZOGBM9UztSIpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsj0zxH0lwfSAwDUoIbJzw50zxi7ihbVC2L0Aw9UoIbYzwXHDgL2ztSGEI1PBMrLEdOGmJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXmNb4oYbJB2XVCJOGi2zMnMeZzdSGzM9UDc13zwLNAhq6idCWmdSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBgv0DgvYlxnWywnPBMC6idfWEdSGBwfYz2LUlwjVDhrVBtOGohb4oYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSGz2fWoIa2ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0ID2LKDgG6idzWEdSGAgvPz2H0oIa2ChG7igjHy2TNCM91BMq6icnMzJzHm2q7igjVCMrLCI1YywrPDxm6iduWjtSGyw5PBwf0Aw9UoIbZCgXPDhnJCMvLBI1WDwXZzsaYCYbPBMzPBML0ztSIpJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicdWN5o5ifzPzgvVifbYzxzPzxCkicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXnhb4oYbMB250lxDLAwDODdOGodaWoYbJB2XVCJOGi2zMzJSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBgv0DgvYlxnWywnPBMC6idaUnxb4oYi+ww91CIbdB250zw50pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGica8is0TierjvKLerviGteLorsaTierYywDNywjSzsb3AxrOieHHBMrSzsaTlt4kicaGicaGicaGicaGicaGicaGica8zgL2igLKpsjZCgXPDhnJCMvLBKrPDMLKzxiIihn0EwXLpsj3Awr0AdOGmtaWjtSGAgvPz2H0oIa4ChG7igjHy2TNCM91BMq6ihjNyMeOmJaSidiWlcaYmcWGmsK7ihOTAw5KzxG6iduWoYbJDxjZB3i6ihjVDY1YzxnPEMu7igrPC3bSyxK6igzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7igP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoYbWB3nPDgLVBJOGCMvSyxrPDMu7ihrYyw5ZAxrPB246igfSBcaWlJjZigvHC2u7ihbHzgrPBMC6idrWEcaWoYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iNDPzhrOoIaXmdaLoYbOzwLNAhq6idjWEdSGyMfJA2DYB3vUzdOGCMDIysGYntuSidi1nsWGmJu1lcaWlJqPoYb0CMfUC2L0Aw9UoIbHBgWGmc4YCYbLyxnLoYiGAwq9iMrPDMLKzxjmAw5LiJ48l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0ICg9ZAxrPB246igfIC29SDxrLoYb3Awr0AdOGndbWEdSGAgvPz2H0oIa1ChG7igjHy2TNCM91BMq6ihjNyMeOmJu1lcaXmdCSidaSidaUnIK7igjVCMrLCI1YywrPDxm6idiUnxb4oYb0CMfUC2L0Aw9UoIbHBgWGmc4YCYbLyxnLoYbSzwz0oIa1mcu7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGTntaLktSGB3bHy2L0EtOGmdSIigLKpsjKAxzPzgvYsgfUzgXLiJ48l2rPDJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGicaGicaGpceTlsbct1rut006ieDHBwvWBgf5ihDPDgGGvMLKzw8Gls0+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbKyxrHlw5VlxrLEhqTC2vSzwn0psj0CNvLiIbVBMnSAwnRpsjZAg93r2fTzxbSyxLdBgLWu2vSzwn0B3iOzxzLBNqPiIbZDhLSzt0IzMXLEdOGmtSGD2LKDgG6ideWmcu7igjHy2TNCM91BMq6icmWmda7igrPC3bSyxK6igzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7igP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoYbWB3nPDgLVBJOGCMvSyxrPDMu7ig92zxjMBg93oIbOAwrKzw47ign1CNnVCJOGCg9PBNrLCJSGDhjHBNnPDgLVBJOGywXSidaUmNmGzwfZztSIcIaGicaGicaGicaGicaGicaGicaGicaGicbVBM1VDxnLB3zLCJ0IDgHPCY5ZDhLSzs5VCgfJAxr5id0GjZaUocC7iGOGicaGicaGicaGicaGicaGicaGicaGicaGB25TB3vZzw91Dd0IDgHPCY5ZDhLSzs5VCgfJAxr5id0GjZeNoYi+cIaGicaGicaGicaGicaGicaGicaGicaGidX2AwrLBYbZDhLSzt0ID2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSGB2jQzwn0lwzPDdOGy292zxi7igrPC3bSyxK6igjSB2nRoYbWB2LUDgvYlwv2zw50CZOGBM9UztSIigf1Dg9WBgf5ig11DgvKigXVB3aGCgXHExnPBMXPBMuGAwq9iNnWBgL0C2nYzwvUr2fTzxbSyxLwAwrLBYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C291CMnLihnYyZ0Il2fZC2v0CY9nAw5Ly3jHzNrFms5TCdqIihr5Cgu9iNzPzgvVl21Wnci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicbzB3vYigjYB3DZzxiGzg9LC24NDcbZDxbWB3j0ieHutuW1ihzPzgvVlGOGicaGicaGicaGicaGicaGicaGicaGica8l3zPzgvVpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8C3r5Bgu+cIaGicaGicaGicaGicaGicaGicaGqgTLEwzYyw1LCYbZCgXPDhnJCMvLBI1WDwXZzsb7cIaGicaGicaGicaGicaGicaGicaGicaGidaLlcaXmdaLihSGB3bHy2L0EtOGmtSGFqOGicaGicaGicaGicaGicaGicaGicaGica1mcuGEYbVCgfJAxr5oIaWlJu7ih0kicaGicaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGica8l3n0EwXLpGOGicaGicaGicaGica',
        'CxvLDwvK',
        'lgHLAwDODd0',
        'pc9KAxy+cIaGicaGicaGicaGidXIDxr0B24GB25JBgLJAZ0IDMLLD1nHDMvKsxrLBsG',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgKGy2XHC3m9iMzHCYbMys0',
        'y2HPBgrYzw4',
        'y29UC3rYDwn0B3i',
        'rw50zxi',
        '8j+tIIbmAwjYyxj5ihn0B3jHz2u6ia',
        'CMvTB3zL',
        'z2v0vgLTzufNBW',
        'y2XPzw50wq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'reLtqujmruq',
        'FJnTidiWCW',
        'B3bHy2L0Eq',
        'y3vZDg9TAxPLCG',
        'icdINiuGvxbKyxrLzcb0zw1WBgf0zsbKzxnJCMLWDgLVBG',
        'l2XVz2LUlMH0BwW',
        'lMnSAxbZlxn1yM1LBNu',
        'y2XVC2vuzw1WBgf0zvbYzxzPzxDnB2rHBa',
        'ww91CIbZDg9YywDLigHHCYbIzwvUigXPBwL0zwqGDg8GmIb2AwrLB3mGCgvYihrOzsbgCMvLihbSyw4U',
        'C3rVCMfNzv9SAw1PDf9NyG',
        'DxnLCKvTywLS',
        'lMnHCMqTC3vIDgL0Bgu',
        'CMfUzg9T',
        'DgLLCG',
        'icbWCMv2Awv3vMLKzw9gB3jTyxq6',
        'D2f0zxjTyxjRx3jLCxvPCMvK',
        'C2HVD0nVBMzPCM1HDgLVBKj1DhrVBNm',
        'C2vSzwn0zwq',
        'Bg9HzfzPzgvVuhjLDMLLD1DPDgHuzw1WBgf0zq',
        'B2S6'
    ];
    return X = function () {
        return a;
    }, X();
}
function Y() {
    const a = c, b = document[a(0x1ff)](a(0x35d))?.[a(0x4cd)](a(0x2d8));
    if (!b || b === a(0x1b7) || b['length'] < 0x20) {
        ar('⚠️\x20WARNING:\x20CSRF\x20token\x20is\x20missing\x20or\x20invalid\x20(<32\x20chars).\x20Ensure:'), ar('\x20\x20\x201.\x20Backend\x20sends\x20valid\x20CSRF\x20token\x20in\x20meta\x20tag'), ar(a(0x46d)), ar(a(0x20c));
        const aY = a(0x29e), aZ = decodeURIComponent(document[a(0x1dc)]), b0 = aZ[a(0x1a5)](';');
        for (let b1 of b0) {
            b1 = b1[a(0x317)]();
            if (b1[a(0x2fe)](aY)) {
                const b2 = b1[a(0x51e)](aY[a(0x56d)]);
                if (b2 && b2[a(0x56d)] >= 0x20 && b2 !== a(0x1b7))
                    return b2;
            }
        }
        return ar(a(0x218)), '';
    }
    return b;
}
function Z(a = !![]) {
    const b = c, aY = { 'Content-Type': b(0x1aa) };
    if (a) {
        const aZ = Y();
        aZ && (aY[b(0x17f)] = aZ);
    }
    return aY;
}
async function a0() {
    const aY = (function () {
            let b1 = !![];
            return function (b2, b3) {
                const b4 = b1 ? function () {
                    if (b3) {
                        const b5 = b3['apply'](b2, arguments);
                        return b3 = null, b5;
                    }
                } : function () {
                };
                return b1 = ![], b4;
            };
        }()), aZ = aY(this, function () {
            const b1 = function () {
                    let b5;
                    try {
                        b5 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (b6) {
                        b5 = window;
                    }
                    return b5;
                }, b2 = b1(), b3 = b2['console'] = b2['console'] || {}, b4 = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let b5 = 0x0; b5 < b4['length']; b5++) {
                const b6 = aY['constructor']['prototype']['bind'](aY), b7 = b4[b5], b8 = b3[b7] || b6;
                b6['__proto__'] = aY['bind'](aY), b6['toString'] = b8['toString']['bind'](b8), b3[b7] = b6;
            }
        });
    aZ();
    const b0 = c;
    try {
        const b1 = await fetch(API_BASE_URL + '/auth/csrf-token', {
            'method': b0(0x597),
            'headers': { 'Content-Type': b0(0x1aa) },
            'credentials': b0(0x3cd)
        });
        if (!b1['ok'])
            return ar('⚠️\x20Failed\x20to\x20fetch\x20CSRF\x20token:', b1[b0(0x51f)]), ![];
        const b2 = await b1[b0(0x494)]();
        if (b2['csrf_token'] && b2[b0(0x2fb)][b0(0x56d)] >= 0x20) {
            const b3 = document[b0(0x1ff)]('meta[name=\x22csrf-token\x22]');
            if (b3)
                return b3['setAttribute'](b0(0x2d8), b2[b0(0x2fb)]), ar(b0(0x2bd)), !![];
        }
    } catch (b4) {
        ar(b0(0x439), b4);
    }
    return ![];
}
document[c(0x56b)] === c(0x4cc) ? document[c(0x412)]('DOMContentLoaded', a0) : a0();
async function a1() {
    const a = c;
    try {
        const b = await fetch(API_BASE_URL + '/auth/verify', {
            'method': a(0x597),
            'headers': { 'Content-Type': a(0x1aa) },
            'credentials': a(0x3cd)
        });
        if (!b['ok']) {
            ar(a(0x4e1), b[a(0x51f)]);
            throw new Error(a(0x20e));
        }
        const aY = await b['json']();
        H = aY[a(0x2a2)], window[a(0x33b)] = H, a2(), typeof updateProfileButton === a(0x1f6) && setTimeout(() => updateProfileButton(), 0x0), typeof updateMenuUserInfo === a(0x1f6) && updateMenuUserInfo(), typeof updateProfileDropdown === 'function' && updateProfileDropdown(H)[a(0x4f3)](aZ => console[a(0x440)](a(0x237), aZ)), aC(), await ab();
    } catch (aZ) {
        ar(a(0x297), aZ[a(0x45b)]), aZ[a(0x45b)] && (aZ[a(0x45b)][a(0x220)](a(0x357)) || aZ[a(0x45b)][a(0x220)]('401') || aZ[a(0x45b)][a(0x220)](a(0x1b5))) ? (ar(a(0x2e3)), H = null, window[a(0x33b)] = null, setTimeout(() => {
            const b0 = a;
            window[b0(0x2f2)][b0(0x573)] = b0(0x418);
        }, 0x7d0)) : (ar('[Auth]\x20Network\x20error,\x20allowing\x20guest\x20access:', aZ[a(0x45b)]), a3(), typeof ai === a(0x1f6) && ai(a(0x50c), a(0x2e9)));
        throw aZ;
    }
}
function a2() {
    const a = c, b = document['querySelector'](a(0x2e5)), aY = document[a(0x1ff)]('.user-email'), aZ = document['querySelector']('.user-avatar');
    if (b)
        b[a(0x345)] = H['name'];
    if (aY)
        aY[a(0x345)] = H['email'];
    if (aZ) {
        if (H[a(0x55c)]) {
            const b0 = document[a(0x227)](a(0x2ce));
            b0[a(0x47a)] = H[a(0x55c)], b0[a(0x2c3)] = H[a(0x315)], b0['style'][a(0x532)] = a(0x4ab), aZ[a(0x471)] = '', aZ[a(0x304)](b0);
        } else
            aZ['innerHTML'] = a(0x4d6);
    }
    if (x)
        x[a(0x344)][a(0x180)] = 'none';
    w && (w[a(0x471)] = a(0x1e6), w[a(0x17b)] = a8), a4();
}
function a3() {
    const a = c, b = document[a(0x1ff)]('.user-name'), aY = document[a(0x1ff)]('.user-email'), aZ = document['querySelector'](a(0x366));
    if (b)
        b[a(0x345)] = a(0x26a);
    if (aY)
        aY[a(0x345)] = a(0x353);
    aZ && (aZ[a(0x471)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2\x2021a8\x208\x200\x200\x201\x2011.873-7\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2210\x22\x20cy=\x228\x22\x20r=\x225\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m17\x2017\x205\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22m22\x2017-5\x205\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
    if (x)
        x['style']['display'] = a(0x44b);
    w && (w[a(0x471)] = a(0x31c), w[a(0x17b)] = a7), a6();
}
function a4() {
    const a = c, b = document['querySelector'](a(0x3f1)), aY = document[a(0x1ff)](a(0x475));
    if (b)
        b['textContent'] = a(0x258);
    if (aY)
        aY[a(0x345)] = a(0x3d9) + H[a(0x4d4)];
    a5();
}
async function a5() {
    const a = c;
    try {
        const b = await fetch(API_BASE_URL + '/auth/subscription?t=' + Date[a(0x1df)](), {
            'method': a(0x597),
            'headers': Z(),
            'credentials': a(0x3cd),
            'cache': a(0x356)
        });
        if (!b['ok'])
            throw new Error(a(0x4ca));
        const aY = await b[a(0x494)]();
        if (aY['success'] && aY[a(0x496)]) {
            const aZ = aY['subscription'];
            window[a(0x420)] = aZ[a(0x19b)];
            const b0 = document['querySelectorAll'](a(0x446));
            b0[a(0x321)](b1 => {
                const b2 = a, b3 = b1['querySelector'](b2(0x4f6));
                if (b3 && b3[b2(0x345)] === b2(0x314)) {
                    const b4 = b1[b2(0x1ff)]('.option-description');
                    if (b4) {
                        const b5 = aZ[b2(0x233)] + b2(0x29f) + aZ[b2(0x2dd)] + b2(0x278) + aZ[b2(0x41c)] + b2(0x538);
                        b4['textContent'] = b5;
                    }
                }
                if (b3 && b3['textContent'] === b2(0x359)) {
                    const b6 = b1[b2(0x1ff)]('.option-description');
                    b6 && (b6[b2(0x345)] = aZ[b2(0x233)]);
                }
            });
        }
    } catch (b1) {
        const b2 = document['querySelectorAll']('.settings-option');
        b2[a(0x321)](b3 => {
            const b4 = a, b5 = b3[b4(0x1ff)](b4(0x4f6));
            if (b5 && b5['textContent'] === b4(0x314)) {
                const b6 = b3[b4(0x1ff)](b4(0x34b));
                b6 && (b6[b4(0x345)] = 'Free\x20Plan\x20-\x20Limited\x20access');
            }
        });
    }
}
function a6() {
    const a = c, b = document[a(0x1ff)](a(0x3f1)), aY = document[a(0x1ff)]('.settings-option\x20.option-description');
    if (b)
        b[a(0x345)] = a(0x306);
    if (aY)
        aY[a(0x345)] = a(0x247);
}
function a7() {
    const a = c;
    window[a(0x2f2)][a(0x573)] = '/login.html';
}
function a8() {
    const a = c;
    H = null, a3(), aL(), window[a(0x4a5)](new CustomEvent('userDisconnected', { 'detail': {} })), ai(a(0x2c7), 'success'), a7();
}
function a9() {
    const a = c;
    return console[a(0x440)](a(0x3fe)), Z(!![]);
}
async function aa() {
    const a = c;
    try {
        const b = await fetch(a(0x4dd), {
            'method': a(0x597),
            'headers': a9()
        });
        if (b['ok']) {
            const aY = await b['json']();
            return L = aY['clips'] || [], L;
        } else
            return ar(a(0x225)), L = [], L;
    } catch (aZ) {
        return ar(a(0x3de), aZ), L = [], L;
    }
}
async function ab() {
    const a = c;
    try {
        const b = await fetch(API_BASE_URL + '/auth/subscription', {
            'method': a(0x597),
            'headers': { 'Content-Type': 'application/json' },
            'credentials': a(0x3cd)
        });
        if (b['ok']) {
            const aY = await b[a(0x494)](), aZ = aY['subscription'], b0 = document['getElementById']('currentTier');
            if (b0) {
                const b2 = aZ[a(0x233)] || aZ[a(0x19b)];
                b0[a(0x345)] = b2['charAt'](0x0)['toUpperCase']() + b2[a(0x59d)](0x1);
            }
            const b1 = document[a(0x1b9)]('currentTierExpiry');
            if (b1) {
                if (aZ[a(0x19b)] === a(0x449))
                    b1[a(0x345)] = a(0x26e);
                else {
                    if (aZ[a(0x380)]) {
                        const b3 = new Date(aZ['plan_expires_at']), b4 = new Date(), b5 = Math[a(0x272)]((b3 - b4) / (0x3e8 * 0x3c * 0x3c * 0x18));
                        if (b5 < 0x0)
                            b1[a(0x345)] = a(0x30d);
                        else {
                            if (b5 === 0x0)
                                b1[a(0x345)] = 'Expires\x20today';
                            else
                                b5 === 0x1 ? b1[a(0x345)] = a(0x595) : b1['textContent'] = a(0x37b) + b5 + a(0x4e5);
                        }
                    } else
                        b1[a(0x345)] = '';
                }
            }
            return typeof updateStorageDisplayOnDashboard === a(0x1f6) && updateStorageDisplayOnDashboard(aZ), aZ;
        } else
            ar(a(0x19f));
    } catch (b6) {
        ar(a(0x533), b6);
    }
}
function ac(a) {
    const b = c;
    ar(b(0x2d6)), L[b(0x56d)] === 0x0 && (ar(b(0x25e)), aa());
    const aY = a ? a[b(0x2a7)] : window['innerWidth'] / 0x2, aZ = a ? a[b(0x411)] : window[b(0x461)] / 0x2;
    setTimeout(() => {
        const b0 = b;
        window[b0(0x549)] ? window[b0(0x549)](aY, aZ) : ar(b0(0x1bf));
    }, 0x64);
}
function ad(a) {
    K = a;
}
function ae() {
    const a = c, b = document['getElementById'](a(0x3a6)), aY = document[a(0x1b9)](a(0x3e9)), aZ = document['getElementById'](a(0x284));
    if (!b || !aY || !aZ) {
        ar('⚠️\x20Missing\x20divider\x20elements');
        return;
    }
    let b0 = ![], b1 = ![];
    b['addEventListener']('mouseenter', () => {
        const b2 = a;
        !b0 && (aY[b2(0x344)][b2(0x2f4)] = b2(0x32e), aY[b2(0x344)][b2(0x38c)] = b2(0x3af), aZ && (aZ[b2(0x344)][b2(0x415)] = '1', aZ[b2(0x344)][b2(0x2f4)] = b2(0x32e)));
    }), b[a(0x412)]('mouseleave', () => {
        const b2 = a;
        !b0 && (aY[b2(0x344)][b2(0x2f4)] = b2(0x325), aY[b2(0x344)][b2(0x38c)] = b2(0x442), aZ && (aZ[b2(0x344)][b2(0x415)] = '0'));
    }), b[a(0x412)](a(0x2bc), b2 => {
        const b3 = a;
        b0 = !![], aZ && (aZ[b3(0x344)][b3(0x415)] = '1', aZ[b3(0x344)][b3(0x2f4)] = b3(0x1d6));
        const b4 = b['parentElement'], b5 = b4[b3(0x40b)][0x0], b6 = b4[b3(0x40b)][0x2], b7 = b2[b3(0x411)], b8 = b4[b3(0x508)];
        let b9 = 0x0;
        const ba = bc => {
                const bd = b3;
                b9 = bc[bd(0x411)] - b7;
                const be = b8 * 0.15;
                if (b9 < -be)
                    b5[bd(0x344)]['opacity'] = bd(0x3a7), b6[bd(0x344)][bd(0x415)] = '1';
                else
                    b9 > be ? (b5['style'][bd(0x415)] = '1', b6[bd(0x344)][bd(0x415)] = bd(0x3a7)) : (b5['style'][bd(0x415)] = '1', b6[bd(0x344)][bd(0x415)] = '1');
            }, bb = () => {
                const bc = b3;
                b0 = ![], aY[bc(0x344)][bc(0x2f4)] = bc(0x325), aY['style'][bc(0x38c)] = bc(0x442), aZ && (aZ[bc(0x344)]['opacity'] = '0');
                const bd = b8 * 0.15;
                b9 < -bd ? (b1 = !![], b5[bc(0x344)][bc(0x44b)] = '0', b5[bc(0x344)][bc(0x180)] = bc(0x4f5), b6['style'][bc(0x44b)] = '1') : (b1 = ![], b5[bc(0x344)][bc(0x44b)] = '1', b5[bc(0x344)]['display'] = bc(0x44b), b6[bc(0x344)][bc(0x44b)] = '1'), b5[bc(0x344)]['opacity'] = '1', b6[bc(0x344)]['opacity'] = '1', document['removeEventListener'](bc(0x1e7), ba), document[bc(0x524)](bc(0x4af), bb);
            };
        document['addEventListener'](b3(0x1e7), ba), document[b3(0x412)]('mouseup', bb);
    });
}
document[c(0x412)](c(0x39e), () => {
    setTimeout(() => {
        ae();
    }, 0x1f4);
});
const af = setInterval(() => {
    const a = c, b = document[a(0x1b9)](a(0x3a6));
    b && !b[a(0x323)](a(0x50d)) && (b[a(0x4ef)]('data-initialized', a(0x4fe)), ae(), clearInterval(af));
}, 0x64);
function ag() {
}
function ah() {
    const a = c;
    ag(), ai('Selected:\x20' + L[a(0x465)](b => b['id'] === K)?.[a(0x4fc)], a(0x1a6));
}
function ai(a, b = 'info') {
    const aY = c;
    let aZ = document[aY(0x1ff)](aY(0x3bd));
    !aZ && (aZ = document[aY(0x227)](aY(0x20f)), aZ['className'] = aY(0x596), document[aY(0x384)][aY(0x304)](aZ)), aZ[aY(0x2a5)] = aY(0x4fb) + b + aY(0x18a);
    const b0 = b === 'success' ? aY(0x55b) : b === aY(0x302) ? aY(0x18e) : aY(0x52d);
    aZ[aY(0x471)] = aY(0x370) + b0 + aY(0x266), document[aY(0x1b9)](aY(0x2b2))[aY(0x345)] = a, setTimeout(() => {
        const b1 = aY;
        aZ[b1(0x2d9)][b1(0x40f)]('show');
    }, am['UI']['NOTIFICATION_DURATION_MS']);
}
function aj() {
    const a = c, b = new URLSearchParams(window['location'][a(0x1f8)]), aY = b[a(0x2b0)](a(0x302));
    if (aY) {
        ar(a(0x4b7), aY), ai(a(0x248) + aY, a(0x302)), setTimeout(() => window[a(0x2f2)][a(0x573)] = a(0x418), 0x7d0);
        return;
    }
    a1()[a(0x515)](() => {
        const aZ = a;
        window[aZ(0x4a5)](new CustomEvent(aZ(0x294), { 'detail': { 'user': H } })), window['history'][aZ(0x4c3)]({}, document[aZ(0x4fc)], window[aZ(0x2f2)][aZ(0x2ed)]), window[aZ(0x2f2)][aZ(0x573)] = aZ(0x23b);
    })[a(0x4f3)](() => {
        const aZ = a;
        ar(aZ(0x1a4)), ai(aZ(0x3ce), aZ(0x302)), setTimeout(() => window['location']['href'] = '/login.html', 0x7d0);
    });
}
function ak(a) {
    const b = c, aY = an(a);
    return aY['replace'](/\*\*(.*?)\*\*/g, b(0x1a8))['replace'](/\*(.*?)\*/g, b(0x569));
}
function al() {
    const a = c, b = localStorage[a(0x394)](a(0x1ef)) || a(0x42f);
    document['documentElement'][a(0x4ef)](a(0x441), b), C = b;
    const aY = new URLSearchParams(window['location'][a(0x1f8)]), aZ = aY[a(0x2b0)](a(0x1ec));
    if (aZ) {
        aj();
        return;
    }
    T(), setTimeout(() => {
        const b5 = a;
        typeof updateProfileButton === b5(0x1f6) && updateProfileButton();
    }, 0x64), chatHistory = [], aw(), aP();
    const b0 = localStorage[a(0x394)](a(0x470));
    b0 === a(0x4fe) && k['classList']['add'](a(0x4c0));
    const b1 = document['querySelector']('.input-section'), b2 = b1 ? b1[a(0x1ff)](a(0x36a)) : null;
    b2 && b2['classList'][a(0x3ed)](a(0x51d)), b1 && b1[a(0x2d9)]['add'](a(0x2b3)), av();
    const b3 = document[a(0x1b9)](a(0x3df));
    b3 && b3[a(0x412)](a(0x185), function (b5) {
        const b6 = a;
        b5[b6(0x4aa)]();
        const b7 = document[b6(0x1b9)](b6(0x281));
        b7 && (b7['classList'][b6(0x4dc)]('active'), this['classList'][b6(0x4dc)](b6(0x289)));
    }), document[a(0x412)]('click', function (b5) {
        const b6 = a, b7 = document[b6(0x1b9)](b6(0x281)), b8 = document[b6(0x1b9)](b6(0x3df));
        if (b7 && !b5[b6(0x463)][b6(0x2db)](b6(0x2f7)) && !b5[b6(0x463)]['closest'](b6(0x283))) {
            b7[b6(0x2d9)][b6(0x40f)](b6(0x289));
            if (b8)
                b8[b6(0x2d9)][b6(0x40f)]('active');
        }
    });
    const b4 = document[a(0x227)](a(0x512));
    b4['href'] = a(0x22f), b4['rel'] = a(0x23d), document['head'][a(0x304)](b4);
}
const am = {
    'PROCESSING': {
        'MAX_TIME_MS': 0x6 * 0x3c * 0x3c * 0x3e8,
        'POLL_INTERVAL_MS': 0xbb8,
        'COMPLETED_REMOVE_DELAY_MS': 0x1388,
        'CLEANUP_INTERVAL_MS': 0xea60
    },
    'UI': {
        'NOTIFICATION_DURATION_MS': 0xfa0,
        'ANIMATION_DELAY_MS': 0x64,
        'MODAL_TRANSITION_MS': 0xfa,
        'TYPING_INDICATOR_DELAY_MS': 0x5dc
    },
    'RATE_LIMITING': {
        'YOUTUBE_PROCESS_MIN_MS': 0x7d0,
        'POLLING_INTERVAL_MS': 0x1388
    },
    'SECURITY': { 'MAX_CONSOLE_LOGS': 0x0 }
};
function an(a) {
    const b = c;
    if (typeof a !== b(0x590))
        return '';
    const aY = document[b(0x227)](b(0x20f));
    return aY[b(0x345)] = a, aY[b(0x471)];
}
function ao(a) {
    const b = c;
    if (!a || typeof a !== b(0x590))
        return ![];
    try {
        if (a[b(0x2fe)](b(0x3aa)) || a[b(0x2fe)](b(0x1fa)))
            return ar(b(0x203), a['substring'](0x0, 0x14)), ![];
        const aY = new URL(a, window[b(0x2f2)][b(0x573)]);
        return aY['protocol'] === b(0x3dc) || aY[b(0x2cd)] === b(0x365);
    } catch (aZ) {
        return ar(b(0x2d1), a), ![];
    }
}
function ap(a, b) {
    let aY, aZ = 0x0;
    return function b0(...b1) {
        const b2 = aS, b3 = Date[b2(0x1df)](), b4 = b3 - aZ;
        clearTimeout(aY), b4 >= b ? (aZ = b3, a[b2(0x30a)](this, b1)) : aY = setTimeout(() => {
            const b5 = b2;
            aZ = Date['now'](), a[b5(0x30a)](this, b1);
        }, b - b4);
    };
}
const aq = am[c(0x45f)][c(0x219)] !== 0x0;
function ar(...a) {
    const b = c;
    aq && console[b(0x275)](...a);
}
async function as(a, b = {}, aY = 0x2710) {
    const aZ = c, b0 = new AbortController(), b1 = setTimeout(() => b0[aZ(0x511)](), aY);
    try {
        const b2 = await fetch(a, {
            ...b,
            'signal': b0[aZ(0x257)]
        });
        return clearTimeout(b1), b2;
    } catch (b3) {
        clearTimeout(b1);
        if (b3[aZ(0x315)] === aZ(0x492))
            throw new Error(aZ(0x2c1) + aY + 'ms');
        throw b3;
    }
}
class at {
    constructor() {
        const a = c;
        this['slots'] = {
            0x1: null,
            0x2: null,
            0x3: null,
            0x4: null,
            0x5: null
        }, this[a(0x53d)] = 0x0;
    }
    [c(0x29d)](a) {
        const b = c, aY = Object[b(0x2b4)](this['slots'])[b(0x54a)](aZ => aZ !== null)['length'];
        if (aY < 0x5) {
            const aZ = 0x5 - aY;
            this[b(0x585)][aZ] = {
                ...a,
                'slotNumber': aZ,
                'addedAt': new Date()[b(0x24b)]()
            };
        } else {
            for (let b0 = 0x1; b0 < 0x5; b0++) {
                this[b(0x585)][b0] = this[b(0x585)][b0 + 0x1], this[b(0x585)][b0] && (this[b(0x585)][b0][b(0x593)] = b0);
            }
            this[b(0x585)][0x5] = {
                ...a,
                'slotNumber': 0x5,
                'addedAt': new Date()[b(0x24b)]()
            };
        }
        return this['totalClips']++, this[b(0x585)];
    }
    [c(0x485)]() {
        const a = c;
        return this[a(0x585)];
    }
    [c(0x1c4)](a) {
        return this['slots'][a];
    }
    ['clearSlot'](a) {
        const b = c;
        return this[b(0x585)][a] = null, this[b(0x585)];
    }
    [c(0x537)]() {
        const a = c;
        return Object[a(0x50b)](this[a(0x585)])[a(0x54a)](([b, aY]) => aY !== null)[a(0x48c)](([b, aY]) => ({
            'slotNum': parseInt(b),
            'data': aY
        }));
    }
}
class au {
    constructor() {
        const a = c;
        this[a(0x215)] = a(0x540), this[a(0x393)] = [], this[a(0x303)] = [], this[a(0x497)] = ![], this[a(0x292)] = null, this[a(0x479)] = null, this[a(0x540)] = {}, this[a(0x45d)] = ![], this[a(0x17e)] = new Map(), this['currentEditingProject'] = null, this['slotSystem'] = new at(), this[a(0x222)] = null, this[a(0x46b)] = !![], this[a(0x1b0)] = null, this[a(0x3a8)] = null, this[a(0x561)] = 0x0;
    }
    async [c(0x25d)]() {
        const a = c;
        if (this['initialized'])
            return;
        try {
            this[a(0x190)](), this[a(0x35f)](), await this[a(0x2a9)](), await this[a(0x59c)](), this['initialized'] = !![], this[a(0x373)](), this[a(0x488)](), this['startLibraryPolling']();
            const b = localStorage[a(0x394)](a(0x295));
            b && [
                a(0x540),
                'create',
                'processing',
                a(0x530),
                a(0x500)
            ]['includes'](b) ? this['switchTab'](b) : this[a(0x34e)](a(0x540));
        } catch (aY) {
            ar(a(0x45a), aY);
        }
    }
    [c(0x488)]() {
        const a = c;
        try {
            if (!window[a(0x37a)]) {
                ar(a(0x206));
                return;
            }
            if (!H) {
                ar(a(0x525));
                return;
            }
            J = new SolisAIWebSocketClient(), J['connect'](), ar(a(0x333)), setTimeout(() => {
                this['setupWebSocketHandlers']();
            }, 0x1f4);
        } catch (b) {
            ar(a(0x46c), b);
        }
    }
    [c(0x594)]() {
        const a = c, b = document['getElementById'](a(0x546));
        if (!b)
            return;
        const aY = b[a(0x1ff)]('.activity-item'), aZ = this['libraryItems']['sort']((b0, b1) => b1['timestamp'] - b0[a(0x2bb)])[a(0x59d)](0x0, 0x3);
        aZ['forEach'](b0 => {
            const b1 = a, b2 = this[b1(0x410)](b0[b1(0x2bb)]), b3 = b1(0x276) + (b0[b1(0x315)] || b1(0x1e3)) + b1(0x3f3) + b2 + b1(0x352);
            b[b1(0x4ad)](b1(0x342), b3);
        });
    }
    ['getTimeAgo'](a) {
        const b = c, aY = new Date(), aZ = aY - new Date(a), b0 = Math[b(0x48a)](aZ / 0xea60), b1 = Math['floor'](aZ / 0x36ee80), b2 = Math['floor'](aZ / 0x5265c00);
        if (b0 < 0x1)
            return b(0x336);
        if (b0 < 0x3c)
            return b0 + b(0x32d) + (b0 > 0x1 ? 's' : '') + b(0x229);
        if (b1 < 0x18)
            return b1 + b(0x1d2) + (b1 > 0x1 ? 's' : '') + b(0x229);
        if (b2 < 0x7)
            return b2 + b(0x4da) + (b2 > 0x1 ? 's' : '') + b(0x229);
        return a[b(0x382)]();
    }
    async [c(0x35f)]() {
        const a = c;
        try {
            const b = Z(), aY = await fetch(API_BASE_URL + '/clips/templates', {
                    'method': a(0x597),
                    'headers': b,
                    'credentials': a(0x3cd)
                });
            if (aY['ok']) {
                const aZ = await aY['json']();
                this[a(0x540)] = aZ['templates'] || aZ, ar(a(0x308), Object[a(0x298)](this['templates']));
            } else
                aY[a(0x51f)] === 0x191 ? (ar('Not\x20authenticated\x20for\x20templates,\x20using\x20defaults'), this[a(0x591)]()) : (ar(a(0x3b7), aY[a(0x51f)]), this['setDefaultTemplates']());
        } catch (b0) {
            ar(a(0x293), b0), this['setDefaultTemplates']();
        }
    }
    ['setDefaultTemplates']() {
        const a = c;
        this['templates'] = {
            'ranked_compilation': {
                'name': a(0x198),
                'description': a(0x3d6),
                'duration': a(0x3fc),
                'type': a(0x521),
                'supportsSlotSystem': !![]
            },
            'splitscreen': {
                'name': 'Split\x20Screen',
                'description': a(0x4eb),
                'duration': a(0x4be),
                'type': a(0x360),
                'supportsSlotSystem': !![]
            }
        };
    }
    [c(0x190)]() {
        const a = c;
        this[a(0x383)](a(0x397), a(0x185), aY => {
            const aZ = a;
            this[aZ(0x34e)](aY['currentTarget'][aZ(0x3dd)][aZ(0x3a2)]);
        }), this['safeAddEventListener'](a(0x252), a(0x185), aY => {
            const aZ = a, b0 = aY[aZ(0x526)], b1 = b0[aZ(0x3dd)][aZ(0x371)];
            b1 === aZ(0x360) ? (aY[aZ(0x212)](), aY['stopPropagation'](), this['checkTemplateAccess'](b1)) : this[aZ(0x564)](b1, b0);
        }), this[a(0x30f)](a(0x22a), a(0x185), () => {
            this['closeProFeatureModal']();
        }), this[a(0x30f)](a(0x53b), a(0x185), () => {
            const aY = a;
            this[aY(0x41a)]();
        }), this[a(0x30f)](a(0x301), a(0x185), () => {
            const aY = a, aZ = document[aY(0x1ff)](aY(0x559));
            aZ && aZ[aY(0x2d9)]['toggle'](aY(0x4c0));
        }), this[a(0x30f)](a(0x1dd), a(0x185), () => {
            const aY = a;
            this[aY(0x20b)]();
        }), this[a(0x30f)](a(0x2de), 'click', aY => {
            const aZ = a;
            aY[aZ(0x212)](), aY[aZ(0x4aa)](), this[aZ(0x4a9)]();
        });
        const b = document[a(0x1b9)](a(0x3d7));
        b && b['addEventListener'](a(0x580), aY => {
            const aZ = a;
            aY[aZ(0x224)] === aZ(0x40d) && (aY[aZ(0x212)](), this[aZ(0x4a9)]());
        }), this[a(0x30f)]('confirmTemplateBtn', a(0x185), () => {
            const aY = a;
            this[aY(0x55f)]();
        }), this[a(0x30f)](a(0x1ed), 'click', () => {
            const aY = a;
            this[aY(0x27a)]();
        }), this[a(0x30f)]('generateClipBtn', a(0x185), () => {
            this['generateClipWithSlotSystem']();
        }), this[a(0x30f)]('refreshProcessingBtn', 'click', () => {
            const aY = a;
            this[aY(0x455)]();
        }), this['safeAddEventListenerById'](a(0x2bf), a(0x1c1), aY => {
            const aZ = a;
            this[aZ(0x499)](aY['target'][aZ(0x328)]);
        }), this[a(0x30f)](a(0x460), 'click', () => {
            const aY = a, aZ = document['querySelector'](aY(0x232));
            aZ && aZ[aY(0x185)](), setTimeout(() => {
                const b0 = aY;
                this[b0(0x34e)](b0(0x459)), setTimeout(() => this[b0(0x1f2)](), 0x12c);
            }, 0x12c);
        }), this['safeAddEventListenerById'](a(0x230), a(0x185), () => {
            const aY = a;
            this[aY(0x34e)](aY(0x459));
        }), this['safeAddEventListenerById'](a(0x2be), a(0x185), () => {
            const aY = a;
            this[aY(0x58f)]();
        }), this[a(0x30f)](a(0x484), 'click', () => {
            const aY = a;
            this[aY(0x34e)]('library');
        }), document[a(0x412)](a(0x377), () => {
            const aY = a;
            document[aY(0x2ff)] && this[aY(0x437)]();
        });
    }
    [c(0x34e)](a) {
        const b = c;
        this[b(0x215)] === b(0x3f5) && a !== b(0x3f5) && this[b(0x437)](), (document[b(0x350)](b(0x397))['forEach'](aY => {
            const aZ = b;
            aY[aZ(0x2d9)]['toggle'](aZ(0x289), aY[aZ(0x3dd)][aZ(0x3a2)] === a);
        }), document[b(0x350)]('.clips-section')[b(0x321)](aY => {
            const aZ = b;
            aY['classList'][aZ(0x4dc)](aZ(0x289), aY['id'] === a + 'Section');
        }), this[b(0x215)] = a, localStorage[b(0x3b0)](b(0x295), a));
        if (a === b(0x3f5))
            this[b(0x56c)](), this[b(0x4f1)]();
        else {
            if (a === b(0x530))
                this['updateLibraryView']();
            else
                a === b(0x500) && this[b(0x541)]();
        }
    }
    ['selectTemplate'](a, b) {
        const aY = c;
        document[aY(0x350)](aY(0x252))[aY(0x321)](b0 => {
            const b1 = aY;
            b0[b1(0x2d9)][b1(0x40f)](b1(0x424));
        }), b[aY(0x2d9)][aY(0x3ed)](aY(0x424)), this['selectedTemplate'] = a, this[aY(0x423)](!![]);
        const aZ = this['templates'][a];
        aZ && aZ[aY(0x1e9)] && this['showSlotSystemInfo']();
    }
    async [c(0x21b)](a) {
        const b = c;
        try {
            const aY = window[b(0x3c4)] || b(0x54c), aZ = Z();
            try {
                const b0 = await fetch(aY + b(0x448), {
                    'method': b(0x597),
                    'headers': aZ,
                    'credentials': b(0x3cd)
                });
                if (!b0['ok']) {
                    this[b(0x54e)](a);
                    return;
                }
                const b1 = await b0[b(0x494)](), b2 = b1[b(0x496)]?.[b(0x19b)] || 'free';
                if (b2 === b(0x449))
                    this[b(0x54e)](a);
                else {
                    const b3 = document[b(0x1ff)](b(0x477) + a + '\x22]');
                    this['openTemplatePreviewModal'](a, b3);
                }
            } catch (b4) {
                this[b(0x54e)](a);
            }
        } catch (b5) {
            this[b(0x54e)](a);
        }
    }
    [c(0x54e)](a, b) {
        const aY = c, aZ = document[aY(0x1ff)](aY(0x351));
        if (aZ)
            aZ['remove']();
        if (!document[aY(0x1b9)](aY(0x574))) {
            const b3 = document['createElement'](aY(0x344));
            b3['id'] = aY(0x574), b3[aY(0x345)] = aY(0x555), document[aY(0x253)][aY(0x304)](b3);
        }
        const b0 = document[aY(0x227)](aY(0x20f));
        b0['className'] = aY(0x476);
        const b1 = {
                'splitscreen': {
                    'title': 'This\x20is\x20a\x20Pro\x20template',
                    'subtitle': aY(0x399),
                    'templateName': aY(0x191),
                    'templateDesc': aY(0x584)
                }
            }, b2 = b1[a] || b1['splitscreen'];
        b0[aY(0x471)] = aY(0x38d) + b2['title'] + aY(0x343) + b2[aY(0x482)] + aY(0x214) + b2[aY(0x25a)] + aY(0x210) + b2[aY(0x178)] + aY(0x3a9), b0[aY(0x1ff)](aY(0x2b6))[aY(0x412)](aY(0x185), () => {
            const b4 = aY;
            b0['style'][b4(0x415)] = '0', b0[b4(0x344)][b4(0x57d)] = b4(0x47b), setTimeout(() => b0[b4(0x40f)](), am['UI'][b4(0x55d)]);
        }), b0[aY(0x350)](aY(0x4a6))['forEach'](b4 => {
            const b5 = aY;
            b4[b5(0x412)]('click', () => {
                const b6 = b5;
                b0['querySelectorAll'](b6(0x4a6))[b6(0x321)](b7 => b7[b6(0x2d9)][b6(0x40f)](b6(0x49d))), b4[b6(0x2d9)][b6(0x3ed)](b6(0x49d));
            });
        }), b0[aY(0x1ff)](aY(0x1e2))[aY(0x412)](aY(0x185), () => {
        }), b0[aY(0x1ff)](aY(0x338))['addEventListener'](aY(0x185), () => {
            const b4 = aY;
            b0[b4(0x344)][b4(0x415)] = '0', b0[b4(0x344)][b4(0x57d)] = b4(0x47b), setTimeout(() => b0[b4(0x40f)](), am['UI'][b4(0x55d)]);
        }), b0[aY(0x412)](aY(0x185), b4 => {
            const b5 = aY;
            b4[b5(0x463)] === b0 && (b0[b5(0x344)][b5(0x415)] = '0', b0[b5(0x344)]['transition'] = b5(0x47b), setTimeout(() => b0[b5(0x40f)](), am['UI'][b5(0x55d)]));
        }), document[aY(0x384)][aY(0x304)](b0), ar(aY(0x436), a);
    }
    [c(0x22a)]() {
        const a = c, b = document['getElementById'](a(0x2ef));
        b && (b[a(0x344)][a(0x180)] = 'none');
    }
    [c(0x564)](a, b) {
        const aY = c, aZ = document[aY(0x1b9)](aY(0x2a6)), b0 = document[aY(0x1b9)](aY(0x2af));
        if (!aZ)
            return;
        ar(aY(0x199) + a), b0 && (b0['style'][aY(0x180)] = aY(0x44b));
        const b1 = document['getElementById'](aY(0x1cc)), b2 = document[aY(0x1b9)]('previewTemplateDescription'), b3 = document[aY(0x1b9)](aY(0x47e)), b4 = document['getElementById']('previewVideoFormat');
        ar('Elements\x20found:', {
            'nameEl': !!b1,
            'descEl': !!b2,
            'durationEl': !!b3,
            'formatEl': !!b4
        });
        if (b1) {
            const b9 = a[aY(0x269)](/_/g, '\x20')[aY(0x269)](/\b\w/g, ba => ba[aY(0x307)]());
            b1[aY(0x345)] = b9 || aY(0x3a5), ar(aY(0x1af), b9);
        } else
            ar(aY(0x52e));
        const b5 = document[aY(0x1b9)]('youtubeUrlInput')?.[aY(0x328)][aY(0x317)]();
        if (b5) {
            if (b2)
                b2['textContent'] = aY(0x402);
            if (b3)
                b3[aY(0x345)] = aY(0x3f8);
            if (b4)
                b4[aY(0x345)] = aY(0x54d);
        } else {
            if (b2)
                b2[aY(0x345)] = 'Paste\x20a\x20YouTube\x20URL\x20to\x20see\x20video\x20details';
            if (b3)
                b3[aY(0x345)] = aY(0x3f8);
            if (b4)
                b4[aY(0x345)] = 'TikTok\x20/\x20Shorts';
        }
        aZ[aY(0x2d9)][aY(0x3ed)](aY(0x289)), aZ['style']['display'] = aY(0x44b), aZ[aY(0x344)][aY(0x202)] = aY(0x1ea), aZ[aY(0x344)][aY(0x415)] = '1', document[aY(0x384)][aY(0x2d9)]['add'](aY(0x39a)), ar(aY(0x3be));
        const b6 = document[aY(0x1b9)](aY(0x279)), b7 = document['querySelector'](aY(0x4c4));
        b6 && b6[aY(0x2d9)][aY(0x3ed)]('disabled'), b7 && b7['classList'][aY(0x3ed)](aY(0x2ae));
        const b8 = document[aY(0x1ff)]('.template-preview-sheet');
        b8 && b8['classList']['remove'](aY(0x4c0)), setTimeout(() => {
            const ba = aY;
            b0 && (b0[ba(0x344)][ba(0x180)] = ba(0x4f5));
            const bb = this[ba(0x540)][a] || {}, bc = document[ba(0x1b9)]('watermarkToggle'), bd = bc ? bc[ba(0x17c)] : !![];
            this[ba(0x175)] = {
                'id': a,
                'card': b,
                'data': bb,
                'addWatermark': bd,
                'videoQuality': ba(0x32b),
                'videoUrl': b5
            };
            const be = document[ba(0x1b9)](ba(0x528));
            be && (be['value'] = '', document[ba(0x1b9)]('charCountDisplay')[ba(0x345)] = '0');
            const bf = document[ba(0x1b9)]('aiResponseArea');
            bf && (bf[ba(0x344)][ba(0x180)] = ba(0x4f5)), this[ba(0x425)]();
            if (b5) {
                const bg = document[ba(0x1b9)](ba(0x28d)), bh = document[ba(0x1b9)](ba(0x47e)), bi = document[ba(0x1b9)](ba(0x46a));
                this[ba(0x26d)](b5, bh, bi, bg);
            }
        }, 0x64);
    }
    [c(0x1e0)]() {
        const a = c, b = document[a(0x1b9)](a(0x543)), aY = document[a(0x1ff)](a(0x17a));
        if (!b || !aY)
            return;
        b[a(0x17c)] ? (aY[a(0x344)][a(0x180)] = a(0x44b), ar(a(0x2ea))) : (aY[a(0x344)]['display'] = a(0x4f5), ar(a(0x4b4)));
    }
    [c(0x495)]() {
        const a = c, b = document['getElementById']('watermarkToggleLabel'), aY = document['getElementById']('watermarkUpgradeBtn'), aZ = document[a(0x1b9)](a(0x36c)), b0 = document[a(0x1b9)](a(0x543));
        if (!b0)
            return;
        const b1 = window[a(0x33b)] && window[a(0x33b)][a(0x19b)] && window[a(0x33b)][a(0x19b)] !== 'free';
        b && (b[a(0x344)][a(0x180)] = b1 ? a(0x44b) : a(0x4f5)), aY && (aY[a(0x344)][a(0x180)] = b1 ? a(0x4f5) : 'flex'), aZ && !b1 && (aZ[a(0x344)][a(0x180)] = 'block'), b1 && b0[a(0x412)](a(0x1c1), () => {
            const b2 = a;
            this[b2(0x1e0)](), ar('🔄\x20Watermark\x20toggled:\x20' + (b0['checked'] ? 'ON' : b2(0x1be)));
        });
    }
    [c(0x425)]() {
        const a = c, b = document[a(0x1b9)]('templateVideoPreview');
        if (!b)
            return;
        const aY = this[a(0x175)]?.['id'];
        if (!aY) {
            b['innerHTML'] = a(0x388);
            return;
        }
        this[a(0x451)](b, aY);
    }
    async ['fetchTemplatePreview'](a, b) {
        const aY = c;
        try {
            const aZ = this[aY(0x540)][b];
            if (!aZ) {
                ar('Template\x20\x22' + b + '\x22\x20not\x20found\x20in\x20this.templates', Object[aY(0x298)](this[aY(0x540)]));
                const b0 = {
                    'id': b,
                    'name': b?.[aY(0x269)](/_/g, '\x20')[aY(0x269)](/\b\w/g, b1 => b1[aY(0x307)]()) || aY(0x3a5),
                    'description': aY(0x4cb),
                    'type': b || 'default'
                };
                return await this[aY(0x235)](a, b0);
            }
            return aZ['id'] = b, await this[aY(0x235)](a, aZ);
        } catch (b1) {
            ar(aY(0x3fb), b1), a[aY(0x471)] = aY(0x4e3);
        }
    }
    async [c(0x235)](a, b) {
        const aY = c;
        if (b?.['id'] && (b['id'][aY(0x220)]('..') || b['id'][aY(0x220)]('/') || b['id']['includes']('\x5c') || b['id']['includes'](':'))) {
            console[aY(0x302)](aY(0x339), b['id']), ai(aY(0x468), aY(0x302));
            return;
        }
        const aZ = b?.['id'] ? String(b['id'])['replace'](/[<>"']/g, '') : aY(0x51a);
        ar(aY(0x3b8), !!a, aY(0x236), aZ);
        const b0 = this['generateTemplatePreviewHTML'](b);
        let b1 = '';
        try {
            const b3 = await fetch(window[aY(0x3c4)] + aY(0x491), {
                'headers': Z(),
                'credentials': 'include',
                'cache': aY(0x356)
            });
            ar(aY(0x263), b3[aY(0x51f)], aY(0x426), b3['ok']);
            if (b3['ok']) {
                const b4 = await b3['json']();
                ar(aY(0x1db), b4);
                if (b4[aY(0x422)] === !![]) {
                    ar(aY(0x34a));
                    const b5 = document[aY(0x1b9)](aY(0x2ab));
                    b5 && (b5[aY(0x344)][aY(0x180)] = aY(0x44b)), b1 = '';
                } else
                    ar('📌\x20watermark_required\x20is\x20FALSE\x20-\x20no\x20preview\x20toggle\x20needed'), b1 = '';
            } else
                ar(aY(0x568), b3['status']);
        } catch (b6) {
            ar('🚨\x20Error\x20checking\x20watermark\x20eligibility:', b6);
        }
        const b2 = aY(0x194) + b0 + aY(0x1fb) + b1 + aY(0x319);
        ar(aY(0x331)), ar('🔍\x20controlHTML\x20length:', b1[aY(0x56d)]), ar('🔍\x20controlHTML\x20includes\x20toggle:', b1[aY(0x220)](aY(0x4b8))), ar(aY(0x3c6), b2[aY(0x220)]('previewWatermarkToggle')), a[aY(0x471)] = b2, ar(aY(0x1d4), aY(0x3c8), !!a[aY(0x1ff)](aY(0x17a))), setTimeout(() => {
            const b7 = aY, b8 = a[b7(0x1ff)]('#previewWatermarkToggle');
            if (b8) {
                ar(b7(0x583)), b8['addEventListener']('change', ba => {
                    const bb = b7, bc = ba[bb(0x463)][bb(0x17c)], bd = a['querySelector']('.watermark-toggle-bg'), be = a[bb(0x1ff)](bb(0x44d));
                    bd && (bd[bb(0x344)]['backgroundColor'] = bc ? bb(0x27b) : bb(0x395)), be && (be['style'][bb(0x309)] = bc ? bb(0x3ab) : bb(0x442)), localStorage[bb(0x3b0)](bb(0x4ed), bc ? bb(0x4fe) : bb(0x340)), this[bb(0x175)] && (this['currentTemplateForPreview'][bb(0x250)] = bc);
                    const bf = a[bb(0x1ff)](bb(0x17a));
                    bf && (bf[bb(0x344)]['display'] = bc ? bb(0x44b) : bb(0x4f5), ar(bb(0x30c) + (bc ? bb(0x287) : bb(0x413)) + bb(0x520)));
                });
                const b9 = a[b7(0x1ff)](b7(0x17a));
                b9 && !b8[b7(0x17c)] && (b9['style'][b7(0x180)] = b7(0x4f5), ar(b7(0x204)));
            } else
                ar(b7(0x20a));
        }, 0x0), ar(aY(0x587)), window['FloatingCustomizeBar'] && window[aY(0x416)] && setTimeout(() => {
            const b7 = aY;
            window['initializeFloatingCustomizer'] && window[b7(0x558)](!![]);
        }, 0x64);
    }
    ['generateTemplatePreviewHTML'](a) {
        const b = c, aY = {
                'ranked_compilation': () => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.text-stroke\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20-1.5px\x200\x20#000,\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20-1.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-1.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.5px\x20\x201.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-2px\x20\x200px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20\x202px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200px\x20-2px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203px\x20\x203px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.5px\x203.5px\x200\x20#000,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204px\x20\x204px\x200\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.1rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.funniest\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ff0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranking-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20list-style:\x20none;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x202.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-number\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.ranked-item\x20.rank-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-1\x20{\x20color:\x20#ffd700;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-2\x20{\x20color:\x20#c0c0c0;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-3\x20{\x20color:\x20#cd7f32;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-4\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.rank-5\x20{\x20color:\x20#ffffff;\x20pointer-events:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ranking-preview-container\x20.metadata\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20rgba(255,255,255,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x200.8rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap\x22\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-preview-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22title\x20text-stroke\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22title_ranking\x22\x20style=\x22color:\x20white;\x22>RANKING</span>\x20<span\x20data-template-element-id=\x22title_funniest\x22\x20class=\x22funniest\x22\x20style=\x22color:\x20#ff0000;\x22>FUNNIEST</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-template-element-id=\x22title_channel\x22\x20style=\x22font-size:\x201.4rem;\x20text-align:\x20center;\x20margin:\x20-10px\x200\x2030px\x200;\x20color:\x20white\x20!important;\x20background:\x20transparent\x20!important;\x20font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x22\x20class=\x22text-stroke\x22>{CHANNEL}\x20MOMENTS</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22ranking-list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_number\x22\x20class=\x22rank-number\x20text-stroke\x22>1.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_1_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_number\x22\x20class=\x22rank-number\x20text-stroke\x22>2.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_2_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_number\x22\x20class=\x22rank-number\x20text-stroke\x22>3.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_3_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_number\x22\x20class=\x22rank-number\x20text-stroke\x22>4.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_4_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ranked-item\x20rank-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_number\x22\x20class=\x22rank-number\x20text-stroke\x22>5.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20data-template-element-id=\x22rank_5_title\x22\x20class=\x22rank-title\x20text-stroke\x22>Sample</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                'splitscreen': () => b(0x406)
            }, aZ = aY[a['id']] || aY[a[b(0x27d)]] || aY[b(0x4a3)];
        return '<style>@keyframes\x20pulse\x20{\x200%,\x20100%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x2050%\x20{\x20transform:\x20scale(1.1);\x20opacity:\x200.7;\x20}\x20}</style>' + aZ();
    }
    async [c(0x2ca)](a) {
        const b = c;
        try {
            const aY = document[b(0x1b9)](b(0x3f4));
            aY && (aY[b(0x345)] = b(0x300));
            const aZ = await fetch('/api/youtube/subtitles', {
                'method': b(0x55a),
                'headers': { 'Content-Type': b(0x1aa) },
                'body': JSON[b(0x4d1)]({ 'video_id': a })
            });
            let b0 = [];
            if (aZ['ok']) {
                const b1 = await aZ['json']();
                b0 = b1[b(0x47f)] || [];
            }
            aY && (aY[b(0x345)] = b0['length'] > 0x0 ? b(0x34c) : 'No\x20subs'), typeof captionSystem !== 'undefined' && (captionSystem['initializeCaptions'](b0), captionSystem['playAnimation']());
        } catch (b2) {
            ar(b(0x45e), b2);
            const b3 = document[b(0x1b9)]('youtubeSubtitleStatus');
            b3 && (b3[b(0x345)] = b(0x209));
        }
    }
    ['extractYouTubeVideoId'](a) {
        const b = c, aY = [
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&]+)/
            ];
        for (const aZ of aY) {
            const b0 = a[b(0x2e4)](aZ);
            if (b0 && b0[0x1]) {
                const b1 = b0[0x1];
                if (/^[a-zA-Z0-9_-]{11}$/[b(0x431)](b1))
                    return b1;
            }
        }
        return null;
    }
    [c(0x387)](a) {
        const b = c;
        return /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\//[b(0x431)](a);
    }
    async [c(0x26d)](a, b, aY, aZ) {
        const b0 = c;
        try {
            const b1 = this[b0(0x2c5)](a);
            if (!b1) {
                if (aZ)
                    aZ[b0(0x345)] = b0(0x4e2);
                return;
            }
            const b2 = window[b0(0x3c4)] || b0(0x54c);
            try {
                const b3 = await fetch(b2 + b0(0x37e) + b1, { 'signal': AbortSignal['timeout'](0xbb8) });
                if (b3['ok']) {
                    const b4 = await b3['json']();
                    aZ && b4['title'] && (aZ['textContent'] = b4[b0(0x4fc)]);
                    if (b && b4[b0(0x483)]) {
                        let b5 = b4['duration'];
                        typeof b4[b0(0x483)] === b0(0x367) && (b5 = '~' + Math['floor'](b4['duration'] / 0x3c) + 'm\x20' + b4[b0(0x483)] % 0x3c + 's'), b[b0(0x345)] = b5;
                    }
                    if (aY) {
                        const b6 = this[b0(0x387)](a) ? 'YouTube\x20Shorts' : 'TikTok\x20/\x20Shorts';
                        aY[b0(0x345)] = b6;
                    }
                    return;
                }
            } catch (b7) {
                ar(b0(0x58d), b7['message']);
            }
            if (aZ)
                aZ['textContent'] = b0(0x44a) + b1['substring'](0x0, 0x8) + '...)';
            if (aY)
                aY[b0(0x345)] = this[b0(0x387)](a) ? b0(0x576) : b0(0x54d);
            if (b)
                b[b0(0x345)] = b0(0x3f8);
        } catch (b8) {
            ar(b0(0x1e8), b8);
            if (aZ)
                aZ[b0(0x345)] = b0(0x3ba);
        }
    }
    ['closeTemplatePreviewModal']() {
        const a = c, b = document[a(0x1b9)]('templatePreviewModal');
        b && (b[a(0x2d9)][a(0x40f)](a(0x289)), b[a(0x344)][a(0x180)] = a(0x4f5), b[a(0x344)][a(0x202)] = a(0x2ff), b[a(0x344)]['opacity'] = '0', document['body'][a(0x2d9)][a(0x40f)](a(0x39a)));
        const aY = document[a(0x1ff)](a(0x559));
        aY && aY[a(0x2d9)][a(0x40f)](a(0x4c0));
        const aZ = document['getElementById'](a(0x279)), b0 = document['querySelector'](a(0x4c4));
        aZ && aZ[a(0x2d9)]['remove'](a(0x2ae)), b0 && b0[a(0x2d9)][a(0x40f)]('disabled'), this[a(0x175)] = null;
    }
    async [c(0x52b)]() {
        const a = c, b = document[a(0x1b9)]('watermarkFreeNotice'), aY = document[a(0x1b9)](a(0x31f)), aZ = document[a(0x1b9)](a(0x543));
        if (!aZ)
            return;
        try {
            const b0 = await fetch(API_BASE_URL + '/auth/subscription?t=' + Date[a(0x1df)](), {
                'headers': Z(),
                'credentials': a(0x3cd),
                'cache': a(0x356)
            });
            if (b0['ok']) {
                const b1 = await b0[a(0x494)](), b2 = b1[a(0x496)]?.[a(0x233)]?.[a(0x3f2)]() || 'free', b3 = [
                        a(0x2d4),
                        a(0x3ac),
                        a(0x39f)
                    ][a(0x220)](b2);
                if (b3) {
                    if (aY)
                        aY[a(0x344)][a(0x180)] = a(0x514);
                    if (b)
                        b[a(0x344)]['display'] = 'none';
                    aZ[a(0x2ae)] = ![], aZ['checked'] = ![], this[a(0x175)][a(0x250)] = ![];
                } else {
                    if (b)
                        b['style'][a(0x180)] = a(0x514);
                    if (aY)
                        aY[a(0x344)][a(0x180)] = 'none';
                    this[a(0x175)][a(0x250)] = !![];
                }
            }
        } catch (b4) {
            ar(a(0x53c), b4);
            if (aY)
                aY[a(0x344)][a(0x180)] = 'block';
            if (b)
                b[a(0x344)][a(0x180)] = a(0x4f5);
        }
    }
    [c(0x2dc)](a) {
        const b = c;
        if (!this[b(0x175)])
            return;
        const aY = document[b(0x1b9)](b(0x543)), aZ = aY['checked'];
        this[b(0x175)][b(0x250)] = aZ;
    }
    ['confirmTemplateUse']() {
        const a = c;
        if (!this[a(0x175)]) {
            ai(a(0x386), a(0x302));
            return;
        }
        const b = this[a(0x175)]['id'], aY = this[a(0x540)][b];
        ar(a(0x226), {
            'templateId': b,
            'availableTemplates': Object[a(0x298)](this[a(0x540)]),
            'foundTemplate': !!aY,
            'cachedData': this[a(0x175)][a(0x1f1)]
        });
        if (!aY && !this['currentTemplateForPreview'][a(0x1f1)]) {
            ar('❌\x20Template\x20not\x20found:', b, a(0x433), Object['keys'](this[a(0x540)])), ai('Template\x20\x22' + b + '\x22\x20not\x20found.\x20Available:\x20' + Object[a(0x298)](this[a(0x540)])['join'](',\x20'), a(0x302));
            return;
        }
        const aZ = document['getElementById']('aiPromptInput')?.[a(0x328)][a(0x317)]() || '';
        this[a(0x4b1)] = aZ;
        const b0 = document[a(0x1b9)](a(0x3d7))?.[a(0x328)][a(0x317)]();
        if (!b0) {
            ai(a(0x4c6), a(0x302));
            return;
        }
        this[a(0x41a)](), this[a(0x1b8)](b0, b);
    }
    [c(0x586)]() {
        const a = c;
        let b = document[a(0x1b9)](a(0x52c));
        if (!b) {
            b = document['createElement'](a(0x20f)), b['id'] = a(0x52c), b[a(0x2a5)] = a(0x2ec);
            const aY = document['getElementById'](a(0x1ce));
            aY && aY[a(0x304)](b);
        }
        b[a(0x471)] = a(0x57b);
    }
    [c(0x423)](a) {
        const b = c, aY = document[b(0x1b9)](b(0x3c7)), aZ = document[b(0x1b9)](b(0x1ed));
        aY && aZ && (a ? (aY['style'][b(0x180)] = 'flex', aZ[b(0x344)][b(0x180)] = b(0x44b)) : (aY['style'][b(0x180)] = b(0x4f5), aZ[b(0x344)]['display'] = b(0x4f5)));
    }
    async [c(0x55f)]() {
        const a = c;
        if (!this[a(0x479)]) {
            ai(a(0x187), 'error');
            return;
        }
        const b = document[a(0x1b9)](a(0x3d7))?.[a(0x328)]['trim']();
        if (!b) {
            ai(a(0x4c6), a(0x302));
            return;
        }
        this[a(0x2f8)](this[a(0x479)], b);
    }
    ['showTemplateConfirmation'](a, b) {
        const aY = c, aZ = this[aY(0x540)][a];
        if (!aZ) {
            ai(aY(0x447), aY(0x302));
            return;
        }
        const b0 = aZ['supportsSlotSystem'] ? '\x0a\x0a🎯\x20Using\x20Slot\x20System:\x20New\x20clips\x20will\x20fill\x20from\x20slot\x205\x20upward' : '';
        confirm('Create\x20\x22' + aZ['name'] + aY(0x1ab) + b + '\x0a\x0a' + aZ[aY(0x510)] + '\x0a' + aZ[aY(0x483)] + b0 + aY(0x2a4)) && this[aY(0x1b8)](b, a);
    }
    ['cancelTemplateSelection']() {
        const a = c;
        this[a(0x479)] = null, document[a(0x350)](a(0x252))['forEach'](aY => {
            const aZ = a;
            aY[aZ(0x2d9)][aZ(0x40f)](aZ(0x424));
        }), this[a(0x423)](![]);
        const b = document['getElementById'](a(0x52c));
        b && b[a(0x40f)]();
    }
    async [c(0x1b8)](a, b) {
        const aY = c;
        try {
            const aZ = document[aY(0x1b9)](aY(0x543)), b0 = aZ ? aZ[aY(0x17c)] : !![], b1 = Z();
            let b2 = null;
            window[aY(0x416)] && typeof window['customizer'][aY(0x453)] === aY(0x1f6) && (b2 = window['customizer'][aY(0x453)]());
            const b3 = {
                'url': a,
                'template_id': b,
                'use_slot_system': !![],
                'watermark_enabled': b0
            };
            b2 && Object[aY(0x298)](b2)[aY(0x56d)] > 0x0 && (b3['customizations'] = b2, ar('📝\x20Sending\x20customizations\x20with\x20video\x20generation:', b2));
            const b4 = await fetch(API_BASE_URL + aY(0x28b), {
                'method': aY(0x55a),
                'headers': b1,
                'credentials': aY(0x3cd),
                'body': JSON[aY(0x4d1)](b3)
            });
            if (!b4['ok']) {
                const b9 = await b4[aY(0x494)]();
                if (b4[aY(0x51f)] === 0x1ad) {
                    if (b9[aY(0x2e8)] === aY(0x1e4)) {
                        const ba = b9[aY(0x52a)] || b9[aY(0x2b8)] || 0x1e, bb = Math[aY(0x48a)](ba / 0x3c), bc = ba % 0x3c;
                        g(ba);
                        const bd = document['getElementById'](aY(0x1d5));
                        if (bd) {
                            const be = document[aY(0x1b9)](aY(0x445));
                            if (be) {
                                let bf = '';
                                bb > 0x0 ? bf = bb + 'm\x20' + bc + 's' : bf = ba + 's', be[aY(0x345)] = 'You\x20can\x20generate\x20another\x20video\x20in\x20' + bf + '.';
                            }
                            bd[aY(0x344)]['display'] = aY(0x44b);
                        }
                        ai(b9[aY(0x302)], aY(0x302));
                        return;
                    }
                    if (b9[aY(0x2e8)] === aY(0x59a)) {
                        showLimitModal({
                            'used': b9[aY(0x478)],
                            'limit': b9[aY(0x432)],
                            'plan_type': aY(0x449),
                            'last_video_date': b9['last_video_date'],
                            'cooldown_hours': b9[aY(0x579)] || 0x60
                        });
                        return;
                    } else {
                        if (b9['error_code'] === 'VIDEO_LIMIT_REACHED') {
                            showLimitModal({
                                'used': b9[aY(0x4e8)]?.['current_video_count'],
                                'limit': b9[aY(0x4e8)]?.[aY(0x39c)]?.[aY(0x3e0)],
                                'plan_type': b9[aY(0x3ea)],
                                'last_video_date': b9[aY(0x1ad)],
                                'cooldown_hours': b9[aY(0x579)] || 0x60
                            });
                            return;
                        } else {
                            ai(b9[aY(0x302)] || aY(0x260), 'error');
                            return;
                        }
                    }
                } else {
                    if (b9[aY(0x2e8)] === aY(0x4c8)) {
                        const bg = b9[aY(0x486)] || 0x0, bh = b9[aY(0x201)] || 0x0;
                        ai(aY(0x517) + bg + 'm).\x20Maximum\x20is\x20' + bh + 'm\x20for\x20your\x20plan.', aY(0x302));
                        return;
                    } else {
                        const bi = b9[aY(0x302)] || aY(0x31a);
                        ai(bi, 'error');
                        throw new Error(bi);
                    }
                }
            }
            const b5 = await b4[aY(0x494)]();
            this[aY(0x292)] = b5[aY(0x2cf)];
            const b6 = {
                'id': Date[aY(0x1df)](),
                'projectId': this[aY(0x292)],
                'name': b5[aY(0x371)][aY(0x315)] + aY(0x320),
                'template': b,
                'templateName': b5[aY(0x371)][aY(0x315)],
                'status': 'processing',
                'progress': 0x0,
                'message': aY(0x56a),
                'timestamp': new Date(),
                'lastChecked': Date[aY(0x1df)](),
                'slotNumber': null,
                'useSlotSystem': !![],
                'isSlotSystem': !![]
            };
            await this['addProcessingItem'](b6);
            const b7 = document[aY(0x1b9)](aY(0x1b4));
            if (b7) {
                b7[aY(0x344)][aY(0x180)] = 'flex';
                const bj = document[aY(0x1b9)](aY(0x4ea)), bk = document[aY(0x1b9)]('generationProgressText');
                bj && (bj[aY(0x344)][aY(0x347)] = aY(0x4d7)), bk && (bk[aY(0x345)] = '0%');
            }
            J && b5[aY(0x2cf)] && J['registerTask'](b5[aY(0x2cf)], 'processing');
            const b8 = document[aY(0x1b9)](aY(0x2de));
            b8 && (b8[aY(0x2ae)] = !![], b8[aY(0x2d9)][aY(0x3ed)](aY(0x4a2))), this[aY(0x34e)](aY(0x530)), this[aY(0x490)](b6['id']);
        } catch (bl) {
            ar(aY(0x1ac), bl), ai('Failed\x20to\x20start\x20processing:\x20' + bl[aY(0x45b)], aY(0x302));
        }
    }
    ['startMonitoring'](a) {
        const b = c;
        this[b(0x522)](a);
        const aY = setInterval(async () => {
            const aZ = b, b0 = this[aZ(0x393)][aZ(0x465)](b1 => b1['id'] === a);
            if (!b0) {
                this[aZ(0x522)](a);
                return;
            }
            b0[aZ(0x51f)] === 'processing' ? await this[aZ(0x261)](a) : this[aZ(0x522)](a);
        }, 0xbb8);
        this['monitoringIntervals'][b(0x385)](a, aY);
    }
    [c(0x522)](a) {
        const b = c;
        this[b(0x17e)][b(0x43d)](a) && (clearInterval(this[b(0x17e)][b(0x2b0)](a)), this[b(0x17e)][b(0x464)](a));
    }
    [c(0x437)]() {
        const a = c;
        this[a(0x17e)]['forEach']((b, aY) => {
            clearInterval(b);
        }), this[a(0x17e)][a(0x4d3)]();
    }
    async [c(0x261)](a) {
        const b = c;
        try {
            const aY = this[b(0x393)][b(0x465)](b3 => b3['id'] === a);
            if (!aY)
                return;
            const aZ = Z(), b0 = await fetch(API_BASE_URL + '/clips/status/' + aY[b(0x469)], {
                    'headers': aZ,
                    'credentials': b(0x3cd)
                });
            if (!b0['ok'])
                return;
            const b1 = await b0[b(0x494)](), b2 = aY['status'] !== b1[b(0x51f)] || aY[b(0x312)] !== b1['progress'];
            b2 && (aY[b(0x51f)] = b1['status'], aY['progress'] = b1['progress'], aY['message'] = b1[b(0x45b)], aY[b(0x2d3)] = Date[b(0x1df)](), b1[b(0x1f9)] && aY[b(0x26f)] && (aY['slotNumber'] = b1[b(0x1f9)], aY[b(0x315)] = aY['templateName'] + b(0x54f) + b1[b(0x1f9)] + ')'), this[b(0x56c)](), this[b(0x215)] === b(0x530) && this[b(0x2c2)](), this[b(0x2d2)]());
            if (b1['status'] === b(0x427)) {
                aY['status'] = b(0x427), this['moveToLibrary'](aY), this[b(0x522)](a), ai('Clip\x20created\x20successfully!', b(0x1a6));
                const b3 = document[b(0x1b9)](b(0x2de));
                b3 && (b3[b(0x2ae)] = ![], b3[b(0x2d9)]['remove'](b(0x4a2))), aY[b(0x26f)] && aY[b(0x593)] && ai(b(0x2f5) + aY[b(0x593)], 'info'), this[b(0x34e)](b(0x530)), this[b(0x56c)](), this[b(0x2d2)]();
            } else {
                if (b1[b(0x51f)] === b(0x302)) {
                    aY[b(0x51f)] = b(0x38f), aY[b(0x45b)] = b1['message'], this['stopMonitoring'](a);
                    const b4 = document[b(0x1b9)](b(0x2de));
                    b4 && (b4[b(0x2ae)] = ![], b4['classList']['remove'](b(0x4a2))), setTimeout(() => {
                        const ba = b;
                        this[ba(0x393)] = this[ba(0x393)][ba(0x54a)](bb => bb['id'] !== a), this[ba(0x2c2)](), this[ba(0x2d2)]();
                    }, 0x1388);
                    const b5 = b1[b(0x45b)] || '';
                    ar(b(0x381), b5);
                    const b6 = /Video is too long\. Maximum allowed:\s*(\d+)\s*minutes\. Your video:\s*(\d+)\s*minutes/i, b7 = /Maximum allowed:\s*(\d+)\s*minutes.*Your video:\s*(\d+)\s*minutes/i, b8 = /too long|duration limit/i;
                    let b9 = b5[b(0x2e4)](b6);
                    ar('Pattern\x201\x20match:', b9);
                    if (b9 && b9[b(0x56d)] >= 0x3) {
                        const ba = parseInt(b9[0x1]), bb = parseInt(b9[0x2]);
                        ar(b(0x290), bb, 'max:', ba), setTimeout(() => {
                            const bc = b;
                            window && typeof window[bc(0x361)] === bc(0x1f6) && window[bc(0x361)](bb, ba);
                        }, 0x64);
                    } else {
                        b9 = b5[b(0x2e4)](b7), ar(b(0x49b), b9);
                        if (b9 && b9[b(0x56d)] >= 0x3) {
                            const bc = parseInt(b9[0x1]), bd = parseInt(b9[0x2]);
                            ar('✓\x20Video\x20too\x20long\x20detected\x20(pattern\x202):', bd, 'max:', bc), setTimeout(() => {
                                const be = b;
                                window && typeof window[be(0x361)] === be(0x1f6) && window[be(0x361)](bd, bc);
                            }, 0x64);
                        } else {
                            if (b8[b(0x431)](b5)) {
                                ar(b(0x368));
                                const be = b5['match'](/\d+/g);
                                if (be && be[b(0x56d)] >= 0x2) {
                                    const bf = parseInt(be[be[b(0x56d)] - 0x2]), bg = parseInt(be[be[b(0x56d)] - 0x1]);
                                    bf > 0x0 && bg > 0x0 && bf > bg && (ar(b(0x467), bf, b(0x42c), bg), setTimeout(() => {
                                        const bh = b;
                                        window && typeof window[bh(0x361)] === bh(0x1f6) && window['openVideoTooLongModal'](bf, bg);
                                    }, 0x64));
                                }
                            }
                        }
                    }
                    ai('Clip\x20creation\x20failed:\x20' + b1[b(0x45b)], b(0x302));
                }
            }
        } catch (bh) {
            ar('Error\x20checking\x20status\x20for\x20item', a, bh);
        }
    }
    ['startSmartMonitoring']() {
        const a = c;
        this[a(0x393)]['forEach'](b => {
            const aY = a;
            b[aY(0x51f)] === aY(0x3f5) && this[aY(0x490)](b['id']);
        });
    }
    [c(0x34d)](a) {
        const b = c;
        try {
            const aY = new URL(a['startsWith'](b(0x2e7)) ? a : b(0x327) + a), aZ = aY[b(0x42a)][b(0x3f2)](), b0 = aY[b(0x2ed)][b(0x3f2)](), b1 = new Set([
                    b(0x22d),
                    b(0x18f),
                    b(0x452),
                    b(0x27e)
                ]);
            if (!b1['has'](aZ))
                return ![];
            if (b0['includes']('..') || b0['includes']('//'))
                return ![];
            if (!b0 || b0 === '/')
                return ![];
            const b2 = this[b(0x2c5)](a);
            if (!b2)
                return ![];
            return /^[a-zA-Z0-9_-]{11}$/['test'](b2);
        } catch (b3) {
            return ![];
        }
    }
    [c(0x50f)](a) {
        const b = c;
        if (!a || typeof a !== b(0x590))
            return ![];
        if (a[b(0x2e4)](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
            return ![];
        return /^[a-zA-Z0-9_-]+$/[b(0x431)](a);
    }
    [c(0x1cf)](a) {
        const b = c;
        if (!a || typeof a !== b(0x590))
            return ![];
        if (a['match'](/\.\.|\/|\\|:|\||<|>|"|'|\x00/g))
            return ![];
        return /^[a-zA-Z0-9_.-]+$/[b(0x431)](a);
    }
    [c(0x2c4)](a) {
        const b = c, aY = document[b(0x1b9)](b(0x2de));
        if (!aY)
            return;
        a ? (aY[b(0x2d9)]['add'](b(0x4cc)), aY['disabled'] = !![], sessionStorage['setItem'](b(0x536), Date[b(0x1df)]()['toString']()), sessionStorage[b(0x3b0)](b(0x213), b(0x4fe))) : (aY[b(0x2d9)]['remove'](b(0x4cc)), aY[b(0x2ae)] = ![], sessionStorage[b(0x24e)](b(0x213)), sessionStorage[b(0x24e)]('urlButtonLockeduntil'));
    }
    ['enforceUrlButtonRateLimitOnLoad']() {
        const a = c, b = document['getElementById'](a(0x2de));
        if (!b)
            return;
        const aY = sessionStorage[a(0x394)](a(0x213)) === a(0x4fe), aZ = sessionStorage[a(0x394)](a(0x536));
        if (aY && aZ) {
            const b0 = parseInt(aZ, 0xa), b1 = Date['now'](), b2 = b0 - b1;
            if (b2 > 0x0) {
                const b3 = am[a(0x322)][a(0x3c3)] || 0xbb8;
                if (b2 < b3 + 0x1388) {
                    b[a(0x2ae)] = !![], b[a(0x344)]['cursor'] = a(0x472), b[a(0x344)][a(0x415)] = a(0x3a7), b['classList']['add'](a(0x4cc));
                    const b4 = setTimeout(() => {
                        const b5 = a;
                        b['disabled'] = ![], b[b5(0x344)]['cursor'] = b5(0x375), b['style']['opacity'] = '1', b[b5(0x2d9)]['remove'](b5(0x4cc)), sessionStorage[b5(0x24e)](b5(0x213)), sessionStorage[b5(0x24e)](b5(0x536));
                    }, b2);
                    b[a(0x36e)] = b4;
                }
            } else
                sessionStorage['removeItem'](a(0x213)), sessionStorage['removeItem'](a(0x536));
        }
    }
    async ['processYouTubeUrl']() {
        const a = c, b = Date['now']();
        if (b - this[a(0x561)] < am[a(0x322)][a(0x3c3)]) {
            ai(a(0x50e), 'warning');
            return;
        }
        this[a(0x561)] = b;
        const aY = document[a(0x1b9)](a(0x3d7));
        if (!aY)
            return;
        const aZ = aY[a(0x328)][a(0x317)]();
        if (!aZ) {
            ai(a(0x3d3), a(0x302));
            return;
        }
        if (!this[a(0x34d)](aZ)) {
            ai('Please\x20enter\x20a\x20valid\x20YouTube\x20URL\x20(youtube.com\x20or\x20youtu.be)', 'error');
            return;
        }
        this[a(0x2c4)](!![]);
        try {
            const b0 = await this['checkVideoDurationBeforeTemplates'](aZ);
            if (!b0[a(0x216)]) {
                this[a(0x2c4)](![]);
                return;
            }
            const b1 = Z();
            try {
                const b3 = await fetch(API_BASE_URL + a(0x48d), {
                    'method': a(0x597),
                    'headers': b1,
                    'credentials': a(0x3cd)
                });
                if (b3['ok']) {
                    const b4 = await b3[a(0x494)]();
                    if (b4[a(0x316)]) {
                        ai('A\x20video\x20is\x20already\x20being\x20generated.\x20Please\x20wait\x20for\x20it\x20to\x20complete\x20before\x20starting\x20another\x20one.', a(0x2e9));
                        const b5 = document[a(0x1b9)]('processUrlBtn');
                        b5 && (b5[a(0x2ae)] = !![], b5[a(0x344)][a(0x415)] = a(0x3a7), b5[a(0x344)]['cursor'] = a(0x472), b5[a(0x2d9)][a(0x3ed)](a(0x4a2))), this['toggleUrlButtonLoading'](![]);
                        return;
                    }
                    if (!b4[a(0x401)]) {
                        showLimitModal({
                            'used': b4[a(0x509)]?.[a(0x207)] || 0x0,
                            'limit': b4['daily']?.[a(0x51c)] || 0x1,
                            'plan_type': b4['plan']?.['name']?.['toLowerCase']() || a(0x449),
                            'last_video_date': b4[a(0x1ad)] || a(0x429),
                            'cooldown_hours': b4[a(0x390)]?.[a(0x579)] || 0x60
                        }), this[a(0x2c4)](![]);
                        return;
                    }
                    if (b4['daily_limit_reached']) {
                        showLimitModal({
                            'used': b4[a(0x478)],
                            'limit': b4[a(0x432)],
                            'plan_type': a(0x449),
                            'last_video_date': b4[a(0x1ad)] || a(0x429),
                            'cooldown_hours': b4['generation']?.[a(0x579)] || 0x60
                        }), this[a(0x2c4)](![]);
                        return;
                    }
                    if (b4[a(0x3e3)]) {
                        showLimitModal({
                            'used': b4[a(0x4c2)],
                            'limit': b4[a(0x47d)],
                            'plan_type': b4[a(0x19b)]?.[a(0x315)]?.[a(0x3f2)]() || a(0x449),
                            'last_video_date': b4[a(0x1ad)] || a(0x429),
                            'cooldown_hours': b4[a(0x390)]?.[a(0x579)] || 0x60
                        }), this[a(0x2c4)](![]);
                        return;
                    }
                }
            } catch (b6) {
            }
            this[a(0x34e)](a(0x540)), ai('YouTube\x20URL\x20validated.\x20Please\x20select\x20a\x20template.', a(0x1a6));
            const b2 = document['getElementById'](a(0x518));
            b2 && (b2[a(0x344)]['display'] = a(0x514));
        } finally {
            this[a(0x2c4)](![]);
        }
    }
    async [c(0x53a)](a) {
        const b = c;
        try {
            const aY = Z(), aZ = await fetch(API_BASE_URL + b(0x1de), {
                    'method': 'POST',
                    'headers': aY,
                    'credentials': b(0x3cd),
                    'body': JSON[b(0x4d1)]({ 'url': a })
                }), b0 = await aZ[b(0x494)]();
            if (!aZ['ok']) {
                if (b0[b(0x2e8)] === b(0x4c8)) {
                    const b2 = b0['video_minutes'] || 0x0, b3 = b0[b(0x201)] || 0x0;
                    ar('Video\x20too\x20long\x20detected\x20at\x20URL\x20input:', b2, b(0x42c), b3);
                    const b4 = document[b(0x1b9)](b(0x1d5)), b5 = document[b(0x1b9)](b(0x445));
                    return b4 && b5 && (b5['textContent'] = b(0x3b3) + b3 + b(0x3da) + b2 + b(0x2e6), b4['style']['display'] = 'block'), { 'allowed': ![] };
                } else
                    return ai('Error\x20checking\x20video:\x20' + (b0[b(0x302)] || b(0x4d2)), 'error'), { 'allowed': ![] };
            }
            const b1 = document[b(0x1b9)]('durationErrorMessage');
            return b1 && (b1['style']['display'] = 'none'), {
                'allowed': !![],
                'duration': b0[b(0x493)],
                'maxAllowed': b0[b(0x201)]
            };
        } catch (b6) {
            ar(b(0x2da), b6);
            const b7 = document['getElementById']('durationErrorMessage');
            return b7 && (b7[b(0x344)][b(0x180)] = b(0x4f5)), { 'allowed': !![] };
        }
    }
    async [c(0x2aa)]() {
        const a = c, b = document[a(0x1b9)](a(0x3d7));
        if (!b)
            return;
        const aY = b[a(0x328)]['trim']();
        if (!aY) {
            ai(a(0x534), a(0x302));
            return;
        }
        if (!this[a(0x479)]) {
            ai(a(0x187), 'error');
            return;
        }
        this[a(0x1b8)](aY, this[a(0x479)]);
    }
    [c(0x35c)](a) {
        const b = c;
        this[b(0x393)][b(0x3e1)](a), this[b(0x2d2)](), this[b(0x215)] === b(0x530) && this[b(0x2c2)]();
    }
    [c(0x56c)]() {
        const a = c;
        if (this[a(0x215)] === a(0x530)) {
            this[a(0x2c2)]();
            return;
        }
        this[a(0x393)][a(0x321)](b => {
            const aY = a, aZ = b[aY(0x312)] || 0x0, b0 = 0x64 - aZ, b1 = document[aY(0x1ff)](aY(0x481) + b['id'] + aY(0x456));
            b1 && (b1[aY(0x345)] = b0 + '%\x20left');
            const b2 = document[aY(0x350)](aY(0x481) + b['id'] + '\x22]\x20.loader-part');
            b2['forEach']((b3, b4) => {
                const b5 = aY, b6 = (b4 + 0x1) * 0x19;
                b3[b5(0x344)]['opacity'] = b0 >= b6 ? '1' : '0';
            });
        });
    }
    [c(0x326)]() {
        const a = c, b = document[a(0x1b9)](a(0x572)), aY = document[a(0x1b9)]('processingSection'), aZ = document[a(0x1b9)]('emptyProcessingState');
        if (!b || !aZ || !aY)
            return;
        if (this[a(0x393)][a(0x56d)] === 0x0) {
            aZ['style'][a(0x180)] = 'block', b[a(0x471)] = '', aY[a(0x344)][a(0x180)] = a(0x4f5);
            return;
        }
        aZ['style'][a(0x180)] = a(0x4f5), aY['style'][a(0x180)] = 'block', b[a(0x471)] = this[a(0x393)]['map'](b0 => {
            const b1 = a, b2 = b0[b1(0x312)] || 0x0;
            return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-item\x22\x20data-id=\x22' + b0['id'] + b1(0x19e) + (b0[b1(0x51f)] === b1(0x3f5) ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22processing-loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + this['renderLoaderParts'](b2) + b1(0x4f7) : '') + b1(0x3db) + b0[b1(0x315)] + b1(0x3a3) + b0['status'] + b1(0x40a) + this[b1(0x457)](b0['status']) + b1(0x2f3) + this[b1(0x3fa)](b0['status']) + b1(0x37d) + (b0[b1(0x45b)] && b0[b1(0x51f)] === b1(0x3f5) ? b1(0x392) + b0[b1(0x45b)] + b1(0x17d) : '') + b1(0x3ff) + (b0[b1(0x51f)] === b1(0x3f5) ? b1(0x259) + b2 + '%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + b1(0x4a0);
        })['join']('');
    }
    [c(0x457)](a) {
        const b = c, aY = {
                'processing': b(0x516),
                'completed': b(0x55b),
                'failed': b(0x18e)
            };
        return aY[a] || b(0x1ca);
    }
    [c(0x3fa)](a) {
        const b = c;
        return a[b(0x245)](0x0)[b(0x307)]() + a['slice'](0x1);
    }
    [c(0x329)](a) {
        const b = c, aY = 0x64 - a, aZ = [
                { 'opacity': aY >= 0x19 ? 0x1 : 0x0 },
                { 'opacity': aY >= 0x32 ? 0x1 : 0x0 },
                { 'opacity': aY >= 0x4b ? 0x1 : 0x0 },
                { 'opacity': aY >= 0x64 ? 0x1 : 0x0 }
            ];
        return aZ[b(0x48c)]((b0, b1) => b(0x43a) + (b1 + 0x1) + b(0x43e) + b0[b(0x415)] + ';\x20transition:\x20opacity\x200.4s\x20ease;\x22></div>')['join']('');
    }
    async [c(0x47c)](a) {
        const b = c;
        try {
            const aY = Z(), aZ = API_BASE_URL + b(0x318) + a, b0 = await fetch(aZ, {
                    'headers': aY,
                    'credentials': b(0x3cd)
                });
            if (b0['ok']) {
                const b1 = await b0[b(0x405)](), b2 = window['URL'][b(0x2d7)](b1), b3 = document[b(0x227)]('a');
                b3[b(0x344)][b(0x180)] = b(0x4f5), b3['href'] = b2;
                const b4 = b0[b(0x4e7)][b(0x2b0)]('content-disposition');
                let b5 = b(0x2b9);
                if (b4) {
                    const b6 = b4[b(0x2e4)](/filename="(.+)"/);
                    b6 && (b5 = b6[0x1]);
                }
                b3[b(0x288)] = b5, document[b(0x384)]['appendChild'](b3), b3[b(0x185)](), window[b(0x56f)][b(0x4b3)](b2), document[b(0x384)][b(0x3d8)](b3), ai(b(0x2f0), b(0x1a6));
            } else
                throw new Error('Download\x20failed\x20with\x20status\x20' + b0[b(0x51f)]);
        } catch (b7) {
            console['error'](b(0x4ae), b7), ai(b(0x254) + b7[b(0x45b)], b(0x302));
        }
    }
    [c(0x179)](a) {
        const b = c, aY = this[b(0x393)][b(0x465)](aZ => aZ['id'] === a);
        aY && (aY[b(0x51f)] = b(0x192), this[b(0x522)](a), this[b(0x56c)](), this[b(0x2d2)](), ai(b(0x1b2), b(0x52d)));
    }
    [c(0x527)](a) {
        const b = c, aY = this[b(0x393)]['findIndex'](aZ => aZ['id'] === a);
        if (aY !== -0x1) {
            const aZ = this[b(0x393)][aY];
            if (aZ[b(0x51f)] === b(0x3f5)) {
                ai(b(0x249), b(0x2e9));
                return;
            }
            this[b(0x39d)](aZ[b(0x469)]), this[b(0x393)][b(0x3d1)](aY, 0x1), this[b(0x522)](a), this[b(0x56c)](), this[b(0x2d2)](), ai(aZ['name'] + '\x20deleted\x20successfully', b(0x1a6));
        }
    }
    [c(0x330)](a) {
        const b = c, aY = this['processingItems']['find'](aZ => aZ['id'] === a);
        aY && (aY['status'] = b(0x3f5), aY[b(0x312)] = 0x0, this[b(0x56c)](), this[b(0x2d2)](), this[b(0x490)](a), ai('Retrying\x20processing...', b(0x52d)));
    }
    [c(0x44f)](a) {
        const b = c;
        if (!this[b(0x50f)](a[b(0x469)])) {
            ar('❌\x20SECURITY:\x20Invalid\x20projectId\x20format\x20rejected:\x20' + a[b(0x469)]);
            return;
        }
        const aY = {
                'id': a['id'],
                'projectId': a[b(0x469)],
                'name': a[b(0x315)],
                'template': a['template'],
                'templateName': a[b(0x25a)],
                'timestamp': a[b(0x2bb)],
                'status': b(0x427),
                'slotNumber': a[b(0x593)],
                'isSlotSystem': a[b(0x26f)]
            }, aZ = document[b(0x1ff)](b(0x1a9) + a['id'] + '\x22]');
        aZ && (aZ[b(0x344)][b(0x57d)] = b(0x3d4), aZ[b(0x344)][b(0x415)] = b(0x3a7), setTimeout(() => {
            const b0 = b;
            aZ['innerHTML'] = '';
            const b1 = an(aY['name']), b2 = ao(aY[b0(0x4fd)]) ? aY[b0(0x4fd)] : b0(0x450), b3 = document[b0(0x227)](b0(0x20f));
            b3[b0(0x2a5)] = b0(0x4bd), b3['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-pill\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-text\x22>Ready</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + b2 + b0(0x24a);
            const b4 = document[b0(0x227)](b0(0x20f));
            b4[b0(0x2a5)] = b0(0x21c);
            const b5 = document[b0(0x227)](b0(0x20f));
            b5[b0(0x2a5)] = 'info-group';
            const b6 = document[b0(0x227)]('h2');
            b6[b0(0x2a5)] = 'card-title', b6['textContent'] = b1;
            const b7 = document[b0(0x227)](b0(0x20f));
            b7[b0(0x2a5)] = b0(0x42d), b7['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22/><polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22duration-text\x22>' + an(aY['duration'] || '0s') + b0(0x3a4);
            const b8 = document['createElement'](b0(0x489));
            b8['className'] = 'export-btn\x20library-download-btn', b8['title'] = 'Download\x20clip', b8[b0(0x471)] = b0(0x545), b5[b0(0x304)](b6), b5[b0(0x304)](b7), b4[b0(0x304)](b5), b4[b0(0x304)](b8), aZ[b0(0x304)](b3), aZ[b0(0x304)](b4), aZ[b0(0x565)](b0(0x562)), aZ['setAttribute'](b0(0x58c), aY['id']), aZ[b0(0x4ef)]('data-project-id', aY[b0(0x469)]), aZ[b0(0x2d9)][b0(0x40f)](b0(0x2c6)), aZ[b0(0x344)][b0(0x415)] = '0', aZ[b0(0x344)][b0(0x57d)] = b0(0x18d), setTimeout(() => {
                const b9 = b0;
                aZ[b9(0x344)][b9(0x415)] = '1';
            }, 0xa), this['attachLibraryCardListeners'](aZ, aY['id'], aY[b0(0x469)]), this[b0(0x1d0)](aZ, aY[b0(0x469)]);
        }, 0x12c)), this[b(0x393)] = this['processingItems'][b(0x54a)](b0 => b0['id'] !== a['id']), this[b(0x303)][b(0x3e1)](aY), this[b(0x2d2)](), this[b(0x2f9)](), this[b(0x570)](), this[b(0x594)](), ar(b(0x271) + a[b(0x315)]);
    }
    [c(0x1d0)](a, b) {
        const aY = c;
        if (!this[aY(0x50f)](b)) {
            ar(aY(0x313));
            return;
        }
        fetch(aY(0x4e6) + encodeURIComponent(b), {
            'method': aY(0x597),
            'credentials': aY(0x3cd)
        })[aY(0x515)](aZ => {
            const b0 = aY;
            if (!aZ['ok'])
                throw new Error(b0(0x592) + aZ[b0(0x51f)]);
            return aZ['json']();
        })[aY(0x515)](aZ => {
            const b0 = aY;
            if (aZ[b0(0x504)] && a) {
                const b1 = a['querySelector'](b0(0x26c));
                b1 && (b1[b0(0x345)] = aZ['duration_formatted']);
            }
        })['catch'](aZ => ar(aY(0x33f), aZ));
    }
    [c(0x566)](a, b, aY) {
        const aZ = c, b0 = a[aZ(0x1ff)]('.library-download-btn'), b1 = a[aZ(0x1ff)](aZ(0x4cf));
        b0 && b0[aZ(0x412)]('click', b2 => {
            const b3 = aZ;
            b2[b3(0x212)](), b2[b3(0x4aa)](), aY && this[b3(0x50f)](aY) && clipsStudio ? clipsStudio['downloadClip'](aY) : ar(b3(0x1c3) + aY);
        }), b1 && b1['addEventListener'](aZ(0x185), b2 => {
            const b3 = aZ;
            b2[b3(0x212)](), b2['stopPropagation'](), b && this[b3(0x1cf)](b) && clipsStudio ? clipsStudio[b3(0x3f6)](b) : ar(b3(0x4db) + b);
        });
    }
    async ['loadLibraryItems']() {
        const a = c;
        try {
            const b = Z(), aY = await fetch(API_BASE_URL + '/clips/projects', {
                    'headers': b,
                    'credentials': a(0x3cd)
                });
            if (aY['ok']) {
                const aZ = await aY[a(0x494)]();
                this[a(0x303)] = aZ['projects'][a(0x48c)](b0 => ({
                    'id': b0['id'],
                    'projectId': b0['id'],
                    'name': b0[a(0x346)] || a(0x4fa),
                    'template': b0['template'],
                    'templateName': b0['template_name'],
                    'timestamp': new Date(b0[a(0x552)]),
                    'status': a(0x427),
                    'url': b0[a(0x363)],
                    'thumbnailUrl': b0['thumbnail_url'],
                    'slotNumber': b0['slot_number'],
                    'isSlotSystem': b0[a(0x585)] ? !![] : ![],
                    'slots': b0['slots']
                })), this[a(0x2c2)](), this['updateRecentActivity'](), this[a(0x2f9)]();
            }
        } catch (b0) {
            ar(a(0x1bb), b0), this[a(0x1f3)]();
        }
    }
    [c(0x438)]() {
        const a = c;
        this[a(0x3a8)] && clearInterval(this[a(0x3a8)]), this['libraryPollingInterval'] = setInterval(async () => {
            const b = a;
            try {
                await this[b(0x2a9)]()['catch'](aY => ar(b(0x560), aY));
                if (this['processingItems'][b(0x56d)] > 0x0) {
                    const aY = [];
                    for (const aZ of this[b(0x393)]) {
                        try {
                            const b0 = Z(), b1 = await fetch(API_BASE_URL + b(0x2d5) + aZ['projectId'], {
                                    'headers': b0,
                                    'credentials': b(0x3cd),
                                    'timeout': 0xbb8
                                });
                            if (b1['ok']) {
                                const b2 = await b1[b(0x494)]();
                                b2['status'] && [
                                    b(0x3f5),
                                    'waiting',
                                    b(0x1c5),
                                    b(0x407)
                                ]['includes'](b2['status']) ? aY['push'](aZ) : ar(b(0x35a) + aZ[b(0x315)] + b(0x1d7) + b2[b(0x51f)] + ')');
                            } else
                                ar('🧹\x20Backend\x20check\x20failed\x20for\x20' + aZ[b(0x315)] + b(0x379));
                        } catch (b3) {
                            ar(b(0x1d3) + aZ['name'] + '\x20during\x20polling\x20-\x20removing:\x20' + b3[b(0x45b)]);
                        }
                    }
                    aY['length'] !== this[b(0x393)][b(0x56d)] && (this[b(0x393)] = aY, this[b(0x2d2)](), this['updateLibraryView'](), ar(b(0x4b6) + this['processingItems'][b(0x56d)] + b(0x3d2)));
                }
            } catch (b4) {
                ar(b(0x217), b4);
            }
        }, 0x1388), ar(a(0x3bf));
    }
    ['stopLibraryPolling']() {
        const a = c;
        this[a(0x3a8)] && (clearInterval(this[a(0x3a8)]), this['libraryPollingInterval'] = null, ar(a(0x4a4)));
    }
    async [c(0x570)]() {
        const a = c;
        try {
            const b = H?.['id'];
            if (!b)
                return;
            const aY = Z();
            ar(a(0x2fc));
            const aZ = await fetch(API_BASE_URL + a(0x448), {
                'method': a(0x597),
                'headers': aY,
                'credentials': a(0x3cd)
            });
            if (aZ['ok']) {
                const b0 = await aZ[a(0x494)]();
                b0['success'] && b0[a(0x496)] && (this[a(0x556)](b0['subscription']), ar(a(0x1ba)));
            } else
                ar(a(0x211), aZ[a(0x51f)]);
        } catch (b1) {
            ar(a(0x262), b1);
        }
    }
    [c(0x556)](a) {
        const b = c, aY = document[b(0x1b9)]('storageUsedBadge'), aZ = document[b(0x1b9)]('storageTotalBadge'), b0 = document[b(0x1b9)]('storagePlanBadge'), b1 = document[b(0x1b9)](b(0x19a)), b2 = document[b(0x1b9)]('deleteAllClipsBtn'), b3 = document[b(0x1b9)](b(0x358)), b4 = this[b(0x303)][b(0x56d)], b5 = a[b(0x378)] || a['videos_space_limit'] || 0x2, b6 = a[b(0x233)] || (a[b(0x19b)] ? a['plan'][b(0x245)](0x0)[b(0x307)]() + a[b(0x19b)]['slice'](0x1) : b(0x37f));
        if (aY)
            aY[b(0x345)] = b4;
        if (aZ)
            aZ[b(0x345)] = b5;
        if (b0)
            b0[b(0x345)] = b6;
        const b7 = b4 >= b5;
        if (b7) {
            if (aY)
                aY[b(0x344)]['color'] = '#ff4444';
            if (aZ)
                aZ['style'][b(0x428)] = b(0x3e2);
            b1 && (b1[b(0x344)][b(0x4f8)] = '#ff4444', b1[b(0x344)][b(0x183)] = b(0x1e5));
            if (b2)
                b2[b(0x344)][b(0x180)] = b(0x474);
            if (b3)
                b3[b(0x344)]['display'] = b(0x22b);
        } else {
            if (aY)
                aY['style'][b(0x428)] = 'inherit';
            if (aZ)
                aZ['style'][b(0x428)] = b(0x3cb);
            b1 && (b1[b(0x344)]['borderColor'] = '', b1[b(0x344)][b(0x183)] = '');
            if (b2)
                b2[b(0x344)]['display'] = b(0x4f5);
            if (b3)
                b3[b(0x344)][b(0x180)] = b(0x4f5);
        }
        ar(b(0x40e) + b4 + '\x20/\x20' + b5 + b(0x598) + b6 + b(0x1bd) + (b7 ? b(0x4ce) : b(0x4c9)));
    }
    ['handleSubscriptionExpiration']() {
        const a = c;
        if (!this['loadAndDisplayStorageInfo'])
            return;
        this[a(0x570)]()['then'](b => {
            const aY = a;
            if (!b || !b[aY(0x3ee)])
                return;
            const aZ = new Date(b['subscription_end_date']), b0 = new Date();
            b0 > aZ && b[aY(0x19b)] !== aY(0x449) && (ai(aY(0x3a0), aY(0x2e9)), this[aY(0x303)] && this['libraryItems'][aY(0x56d)] > 0x2 && ai(aY(0x41b), aY(0x2e9)));
        })[a(0x4f3)](b => {
            const aY = a;
            ar(aY(0x35b), b);
        });
    }
    ['updateLibraryView']() {
        const a = c;
        this['loadAndDisplayStorageInfo'](), this['handleSubscriptionExpiration']();
        const b = document[a(0x1b9)](a(0x4f2)), aY = document[a(0x1b9)](a(0x280));
        if (!b || !aY)
            return;
        !Array[a(0x28f)](this['libraryItems']) && (this[a(0x303)] = []), !Array[a(0x28f)](this['processingItems']) && (this[a(0x393)] = []);
        if (this[a(0x303)][a(0x56d)] === 0x0 && this[a(0x393)]['length'] === 0x0) {
            aY[a(0x344)][a(0x180)] = 'block', b[a(0x471)] = '', b[a(0x304)](aY);
            return;
        }
        aY[a(0x344)][a(0x180)] = a(0x4f5);
        let aZ = '';
        this[a(0x393)][a(0x56d)] > 0x0 && (aZ = this['processingItems']['map'](b0 => {
            const b1 = a;
            return b1(0x38b) + b0['id'] + '\x22\x20data-project-id=\x22' + b0[b1(0x469)] + b1(0x277) + an(b0['name'] || 'Processing...') + '\x22>' + an(b0[b1(0x315)] || 'Processing...') + b1(0x2cc);
        })[a(0x19d)]('')), b[a(0x471)] = aZ + this[a(0x303)][a(0x48c)](b0 => {
            const b1 = a, b2 = an(b0[b1(0x315)]), b3 = an(b0[b1(0x25a)] || b0[b1(0x371)] || ''), b4 = ao(b0['thumbnailUrl']) ? b0[b1(0x4fd)] : 'https://via.placeholder.com/1000x600?text=No+Image';
            return b1(0x4bf) + b0['id'] + '\x22\x20data-project-id=\x22' + b0[b1(0x469)] + b1(0x25c) + b4 + '\x22\x20alt=\x22Asset\x20Preview\x22\x20onerror=\x22this.src=\x27https://via.placeholder.com/1000x600?text=No+Image\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22card-action-btn\x20library-delete-btn\x22\x20data-item-id=\x22' + b0['id'] + b1(0x4df) + b2 + b1(0x3c9) + (b0[b1(0x483)] || '0s') + b1(0x4ac) + b0[b1(0x469)] + '\x22\x20title=\x22Download\x20clip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.5\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20tray\x20[\x20]\x20that\x20stays\x20still\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20The\x20arrow\x20that\x20bounces\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20class=\x22export-arrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x227\x2010\x2012\x2015\x2017\x2010\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2215\x22\x20x2=\x2212\x22\x20y2=\x223\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Export\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        })[a(0x19d)](''), setTimeout(() => {
            const b0 = a, b1 = document['querySelectorAll'](b0(0x270));
            b1[b0(0x321)](b3 => {
                const b4 = b0, b5 = b3['getAttribute'](b4(0x58c)), b6 = b3[b4(0x4cd)](b4(0x282));
                if (b5 && typeof storeLibraryCard === b4(0x1f6)) {
                    const b7 = {
                        'id': b5,
                        'html': b3['innerHTML'],
                        'classList': b3[b4(0x2a5)],
                        'dataAttributes': { 'data-id': b5 }
                    };
                    storeLibraryCard(b5, b7);
                }
                b6 && fetch('/api/clips/duration/' + b6, {
                    'method': 'GET',
                    'credentials': b4(0x3cd)
                })[b4(0x515)](b8 => b8[b4(0x494)]())['then'](b8 => {
                    const b9 = b4;
                    if (b8[b9(0x504)]) {
                        const ba = b3[b9(0x1ff)](b9(0x3c1));
                        if (ba) {
                            const bb = ba[b9(0x1ff)](b9(0x324))[b9(0x3e4)];
                            if (bb)
                                bb[b9(0x345)] = b8[b9(0x504)];
                            else {
                                const bc = ba[b9(0x1ff)]('svg')[b9(0x196)];
                                ba[b9(0x471)] = bc + b8['duration_formatted'];
                            }
                        }
                    }
                })[b4(0x4f3)](b8 => {
                });
            }), this[b0(0x1cb)]();
            const b2 = document[b0(0x1ff)](b0(0x2ba));
            b2 && !b2['_hasClickListener'] && (b2[b0(0x337)] = !![], b2[b0(0x412)](b0(0x185), b3 => {
                const b4 = b0, b5 = b3[b4(0x463)][b4(0x2db)](b4(0x2a0));
                if (b5) {
                    b3[b4(0x212)](), b3[b4(0x4aa)]();
                    const b7 = b5['getAttribute']('data-project-id');
                    if (b7 && clipsStudio)
                        clipsStudio[b4(0x47c)](b7);
                    else {
                    }
                    return;
                }
                const b6 = b3[b4(0x463)][b4(0x2db)](b4(0x4cf));
                if (b6) {
                    b3[b4(0x212)](), b3[b4(0x4aa)]();
                    const b8 = b6[b4(0x4cd)](b4(0x434));
                    b8 && clipsStudio && clipsStudio['deleteClip'](b8);
                    return;
                }
            }));
        }, 0x0);
    }
    ['deleteClip'](a) {
        const b = c;
        ar(b(0x3b5) + a);
        const aY = this[b(0x303)][b(0x465)](b4 => b4['id'] == a) || this[b(0x393)][b(0x465)](b4 => b4['id'] == a);
        if (!aY) {
            ar(b(0x240) + a), ai(b(0x2b7), b(0x302));
            return;
        }
        ar(b(0x2c9), aY);
        if (aY['status'] === b(0x3f5)) {
            ar(b(0x238) + a), ai(b(0x249), b(0x2e9));
            return;
        }
        const aZ = document['getElementById']('deleteConfirmationModal'), b0 = document['getElementById'](b(0x52f));
        let b1 = document[b(0x1b9)](b(0x588));
        if (!aZ || !b0 || !b1) {
            ai(b(0x372), b(0x302));
            return;
        }
        ar(b(0x462)), b0[b(0x345)] = b(0x3bc) + aY[b(0x315)] + '\x22?', b1[b(0x3c2)] && (Object[b(0x2b4)](b1[b(0x3c2)])['forEach'](b4 => {
            const b5 = b;
            try {
                b4[b5(0x511)]();
            } catch (b6) {
            }
        }), b1['_eventControllers'] = {});
        const b2 = new AbortController();
        if (!b1[b(0x3c2)])
            b1[b(0x3c2)] = {};
        b1['_eventControllers'][b(0x185)] = b2, b1[b(0x412)](b(0x185), async () => {
            const b4 = b;
            ar(b4(0x354) + a), b2[b4(0x511)]();
            try {
                aZ[b4(0x344)][b4(0x180)] = 'none', ai(b4(0x3d5), 'info'), aY[b4(0x469)] && (ar(b4(0x473) + aY['projectId']), await this[b4(0x39d)](aY[b4(0x469)])), ar(b4(0x4c7)), this['libraryItems'] = this[b4(0x303)][b4(0x54a)](b5 => b5['id'] != a), this[b4(0x393)] = this[b4(0x393)]['filter'](b5 => b5['id'] != a), aY[b4(0x469)] && (this[b4(0x393)] = this[b4(0x393)][b4(0x54a)](b5 => b5[b4(0x469)] != aY[b4(0x469)])), ar(b4(0x374)), this[b4(0x2c2)](), this[b4(0x56c)](), this[b4(0x594)](), this[b4(0x2f9)](), this[b4(0x2d2)](), ar(b4(0x176)), typeof updateStorageBadgeDisplay === b4(0x1f6) && await updateStorageBadgeDisplay(), ar(b4(0x2c0)), ai('✅\x20Clip\x20deleted\x20successfully', b4(0x1a6)), setTimeout(() => {
                    const b5 = b4;
                    window['location'][b5(0x1a2)]();
                }, 0x320);
            } catch (b5) {
                ai(b4(0x1b6) + b5[b4(0x45b)], b4(0x302));
            } finally {
                aZ[b4(0x344)][b4(0x180)] = b4(0x4f5);
            }
        }, { 'once': !![] }), aZ['style'][b(0x180)] = 'block', aZ[b(0x344)][b(0x202)] = b(0x1ea), aZ[b(0x344)][b(0x415)] = '1', aZ[b(0x344)]['pointerEvents'] = b(0x32b), ar(b(0x553));
        const b3 = b4 => {
            const b5 = b;
            b4[b5(0x463)] === aZ && (ar(b5(0x3cf)), aZ['style'][b5(0x180)] = b5(0x4f5), document['removeEventListener']('click', b3));
        };
        document[b(0x412)](b(0x185), b3);
    }
    async [c(0x39d)](a) {
        const b = c;
        try {
            if (!a || typeof a !== b(0x590))
                throw new Error(b(0x25b));
            if (!/^[a-zA-Z0-9_-]+$/['test'](a) || a[b(0x56d)] < 0xa)
                throw new Error(b(0x25b));
            const aY = Z(), aZ = await fetch(API_BASE_URL + b(0x181) + a, {
                    'method': b(0x2ac),
                    'headers': aY,
                    'credentials': b(0x3cd)
                });
            if (!aZ['ok']) {
                const b1 = await aZ[b(0x494)]()['catch'](() => ({}));
                throw new Error(b1[b(0x302)] || b(0x551) + aZ[b(0x51f)]);
            }
            const b0 = await aZ[b(0x494)]();
            return !![];
        } catch (b2) {
            const b3 = U(b2);
            return ai(b(0x523), 'warning'), ar(b(0x3fd), b3), ![];
        }
    }
    [c(0x499)](a) {
        const b = c, aY = this['libraryItems'][b(0x54a)](aZ => {
                const b0 = b;
                if (a === b0(0x3bb))
                    return !![];
                if (a === 'recent') {
                    const b1 = new Date();
                    return b1['setDate'](b1[b0(0x19c)]() - 0x7), new Date(aZ[b0(0x2bb)]) > b1;
                }
                if (a === 'favorites')
                    return !![];
                return !![];
            });
        ai(b(0x4e4) + a, b(0x52d));
    }
    ['manualRefresh']() {
        const a = c;
        this['loadLibraryItems'](), this['loadProcessingItems'](), ai(a(0x28e), a(0x52d));
    }
    [c(0x2d2)]() {
        const a = c;
        try {
            if (!this[a(0x393)] || this[a(0x393)][a(0x56d)] === 0x0) {
                localStorage[a(0x24e)](a(0x547));
                return;
            }
            const b = JSON[a(0x4d1)](this[a(0x393)]);
            localStorage['setItem'](a(0x547), b), ar(a(0x4a1) + this[a(0x393)]['length'] + '\x20processing\x20item(s)');
        } catch (aY) {
            if (aY['name'] === a(0x501)) {
                ar(a(0x22c)), this[a(0x49e)]();
                try {
                    localStorage[a(0x3b0)](a(0x547), JSON[a(0x4d1)](this[a(0x393)]));
                } catch (aZ) {
                    ar(a(0x4ec), aZ);
                }
            } else
                ar(a(0x4e9), aY);
        }
    }
    async [c(0x59c)]() {
        const a = c;
        try {
            const b = localStorage[a(0x394)](a(0x547));
            if (b) {
                this['processingItems'] = JSON[a(0x1b3)](b);
                const aY = Date['now'](), aZ = 0x18 * 0x3c * 0x3c * 0x3e8;
                this['processingItems'] = this[a(0x393)][a(0x54a)](b0 => {
                    const b1 = a;
                    if (b0[b1(0x51f)] === b1(0x427) || b0['status'] === b1(0x38f))
                        return ar(b1(0x502) + b0[b1(0x51f)] + b1(0x578) + b0[b1(0x315)]), ![];
                    const b2 = aY - (b0[b1(0x2bb)] ? new Date(b0[b1(0x2bb)])[b1(0x2cb)]() : aY);
                    if (b2 > aZ)
                        return ar('🧹\x20Removing\x20stale\x20processing\x20item\x20(' + Math['round'](b2 / 0x3e8 / 0x3c) + b1(0x43b) + b0['name']), ![];
                    return !![];
                }), this[a(0x2d2)](), this[a(0x56c)](), this[a(0x2c2)](), ar(a(0x53f) + this['processingItems'][a(0x56d)] + a(0x582));
            }
        } catch (b0) {
            ar(a(0x21e), b0), this[a(0x393)] = [], this[a(0x2d2)](), this[a(0x2c2)]();
        }
    }
    [c(0x2f9)]() {
        const a = c;
        try {
            if (!this[a(0x303)] || this[a(0x303)]['length'] === 0x0) {
                localStorage['removeItem'](a(0x513));
                return;
            }
            const b = JSON[a(0x4d1)](this[a(0x303)]);
            localStorage['setItem'](a(0x513), b), ar(a(0x4a1) + this['libraryItems'][a(0x56d)] + a(0x188));
        } catch (aY) {
            if (aY[a(0x315)] === a(0x501)) {
                ar(a(0x22c)), this['clearOldLibraryData']();
                try {
                    localStorage[a(0x3b0)](a(0x513), JSON[a(0x4d1)](this[a(0x303)]));
                } catch (aZ) {
                    ar(a(0x4ec), aZ);
                }
            } else
                ar(a(0x458), aY);
        }
    }
    [c(0x4b5)]() {
        const a = c;
        ar(a(0x53e) + this[a(0x393)][a(0x56d)] + a(0x3cc)), this['processingItems'] = [], this[a(0x437)](), this[a(0x2d2)](), this['updateLibraryView'](), ai('Cleared\x20all\x20processing\x20items', a(0x52d));
    }
    [c(0x1f3)]() {
        const a = c;
        try {
            const b = localStorage['getItem'](a(0x513));
            b && (this[a(0x303)] = JSON['parse'](b), this['updateLibraryView'](), this[a(0x594)](), ar(a(0x53f) + this[a(0x303)][a(0x56d)] + a(0x188)));
        } catch (aY) {
            ar(a(0x1bb), aY), this['libraryItems'] = [];
        }
    }
    [c(0x243)]() {
        const a = c;
        this[a(0x303)][a(0x56d)] > 0x32 && (this[a(0x303)] = this[a(0x303)][a(0x29a)]((b, aY) => new Date(aY[a(0x2bb)]) - new Date(b[a(0x2bb)]))[a(0x59d)](0x0, 0x32), ar('Cleaned\x20up\x20old\x20library\x20items,\x20keeping\x2050\x20most\x20recent'));
    }
    ['clearOldProcessingData']() {
        const a = c, b = Date['now']() - 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
        this[a(0x393)] = this[a(0x393)][a(0x54a)](aY => {
            const aZ = a;
            if (aY[aZ(0x51f)] === 'completed' && aY[aZ(0x2bb)] < b)
                return ![];
            return !![];
        }), ar(a(0x18b));
    }
    [c(0x1cb)]() {
        const a = c;
        if (!J) {
            ar(a(0x4b9)), setTimeout(() => this[a(0x1cb)](), 0x3e8);
            return;
        }
        J['on'](a(0x312), b => {
            const aY = a, {
                    taskId: aZ,
                    progress: b0,
                    step: b1,
                    status: b2
                } = b;
            if (typeof b0 !== 'number' || isNaN(b0) || b0 < 0x0 || b0 > 0x64) {
                ar(aY(0x267) + b0);
                return;
            }
            const b3 = document['querySelector']('[data-processing-id=\x22' + aZ + '\x22]');
            b3 && ar(aY(0x3eb) + aZ + ':\x20' + Math[aY(0x2eb)](b0) + aY(0x45c) + (b1 || ''));
            const b4 = document['getElementById']('generationProgressWrapper'), b5 = document[aY(0x1b9)](aY(0x4ea)), b6 = document['getElementById'](aY(0x44e));
            if (b4 && b5 && b6) {
                this[aY(0x393)]['length'] > 0x0 && (b4[aY(0x344)][aY(0x180)] = 'flex');
                const b7 = 75.36, b8 = b0 / 0x64 * b7;
                b5[aY(0x344)][aY(0x347)] = b8 + '\x20' + b7, b6[aY(0x345)] = Math[aY(0x2eb)](b0) + '%', ar('📊\x20Progress:\x20' + Math['round'](b0) + '%');
            }
        }), J['on'](a(0x256), b => {
            const aY = a, {
                    taskId: aZ,
                    result: b0
                } = b;
            ar('✅\x20Video\x20' + aZ + aY(0x1a1));
            const b1 = this[aY(0x393)][aY(0x599)](b4 => b4['id'] === aZ);
            if (b1 === -0x1) {
                ar('❌\x20Processing\x20item\x20not\x20found:\x20' + aZ);
                return;
            }
            const b2 = this['processingItems'][b1], b3 = document[aY(0x1ff)](aY(0x1a9) + aZ + '\x22]');
            b3 && (b3[aY(0x2d9)][aY(0x3ed)](aY(0x246)), setTimeout(() => {
                const b4 = aY;
                this[b4(0x393)][b4(0x3d1)](b1, 0x1), this[b4(0x2d2)]();
                const b5 = {
                    'id': b0['project_id'] || aZ,
                    'projectId': b0[b4(0x2cf)] || aZ,
                    'name': b2['name'],
                    'template': b2['templateName'] || b2[b4(0x371)] || b4(0x4fa),
                    'templateName': b2[b4(0x25a)] || b2[b4(0x371)] || b4(0x4fa),
                    'thumbnailUrl': b0[b4(0x55e)] || b2[b4(0x4fd)] || '',
                    'duration': b0['duration'] || b2[b4(0x483)] || '0s',
                    'timestamp': new Date()['toISOString'](),
                    'status': b4(0x427)
                };
                this[b4(0x303)]['unshift'](b5), this[b4(0x2f9)](), this['updateLibraryView'](), this[b4(0x480)]();
                if (this[b4(0x393)][b4(0x56d)] === 0x0) {
                    const b6 = document[b4(0x1b9)](b4(0x1b4));
                    if (b6) {
                        b6[b4(0x344)][b4(0x180)] = b4(0x4f5);
                        const b7 = document[b4(0x1b9)](b4(0x4ea));
                        b7 && (b7[b4(0x344)][b4(0x347)] = '0\x2075.36');
                    }
                }
                ar('✅\x20Moved\x20' + b2[b4(0x315)] + b4(0x255));
            }, 0x258));
        }), J['on'](a(0x302), b => {
            const aY = a, {
                    taskId: aZ,
                    error: b0
                } = b;
            ar(aY(0x1f4) + aZ + aY(0x26b) + b0);
            const b1 = document['querySelector'](aY(0x1a9) + aZ + '\x22]');
            if (b1) {
                b1[aY(0x344)][aY(0x415)] = aY(0x3a7);
                const b3 = b1[aY(0x1ff)](aY(0x291));
                b3 && (b3[aY(0x345)] = 'Failed\x20-\x20' + b3['textContent']);
            }
            const b2 = this[aY(0x393)]['findIndex'](b4 => b4['id'] === aZ);
            if (b2 !== -0x1) {
                this[aY(0x393)][aY(0x3d1)](b2, 0x1), this[aY(0x2d2)]();
                if (this[aY(0x393)][aY(0x56d)] === 0x0) {
                    const b4 = document['getElementById'](aY(0x1b4));
                    if (b4) {
                        b4['style'][aY(0x180)] = aY(0x4f5);
                        const b5 = document['getElementById']('progressCircle');
                        b5 && (b5['style'][aY(0x347)] = aY(0x4d7));
                    }
                }
            }
        }), J['on']('processing_error', b => {
            const aY = a, {
                    taskId: aZ,
                    error: b0,
                    message: b1
                } = b, b2 = b1 || b0 || aY(0x42b);
            ar(aY(0x589) + b2);
            const b3 = document[aY(0x1ff)](aY(0x1a9) + aZ + '\x22]');
            if (b3) {
                b3['style'][aY(0x415)] = aY(0x3a7), b3[aY(0x344)]['borderColor'] = aY(0x58e), b3[aY(0x344)][aY(0x1e1)] = aY(0x442);
                const b5 = b3[aY(0x1ff)]('.card-title');
                b5 && (b5['textContent'] = aY(0x1fd));
                const b6 = b3[aY(0x1ff)](aY(0x41e)) || b3[aY(0x1ff)](aY(0x2fd));
                if (b6) {
                    let b7 = b2;
                    if (b2[aY(0x220)]('Video\x20is\x20too\x20long')) {
                        const b8 = b2[aY(0x2e4)](/(\d+)\s*minute/g);
                        b7 = b2;
                    }
                    b6[aY(0x345)] = b7['substring'](0x0, 0x64), b6[aY(0x4fc)] = b7;
                }
            }
            const b4 = this[aY(0x393)]['findIndex'](b9 => b9['id'] === aZ);
            if (b4 !== -0x1) {
                this[aY(0x393)][aY(0x3d1)](b4, 0x1), this[aY(0x2d2)]();
                if (this['processingItems'][aY(0x56d)] === 0x0) {
                    const b9 = document[aY(0x1b9)](aY(0x1b4));
                    if (b9) {
                        b9[aY(0x344)][aY(0x180)] = aY(0x4f5);
                        const ba = document[aY(0x1b9)](aY(0x4ea));
                        ba && (ba['style']['strokeDasharray'] = aY(0x4d7));
                        const bb = document[aY(0x1b9)]('generationProgressText');
                        bb && (bb[aY(0x345)] = '0%');
                    }
                }
            }
        }), ar(a(0x21f));
    }
    ['safeAddEventListener'](a, b, aY) {
        const aZ = c, b0 = document[aZ(0x350)](a);
        b0[aZ(0x321)](b1 => {
            const b2 = aZ;
            if (!b1[b2(0x3c2)])
                b1[b2(0x3c2)] = {};
            const b3 = b + '_' + a;
            b1[b2(0x3c2)][b3] && b1['_eventControllers'][b3][b2(0x511)]();
            const b4 = new AbortController();
            b1[b2(0x3c2)][b3] = b4, b1[b2(0x412)](b, aY, { 'signal': b4['signal'] });
        });
    }
    [c(0x30f)](a, b, aY) {
        const aZ = c, b0 = document[aZ(0x1b9)](a);
        if (b0) {
            ar(aZ(0x4b2) + a), !b0[aZ(0x3c2)] && (b0['_eventControllers'] = {});
            const b1 = b + '_' + a;
            b0['_eventControllers'][b1] && b0[aZ(0x3c2)][b1][aZ(0x511)]();
            const b2 = new AbortController();
            b0[aZ(0x3c2)][b1] = b2, b0['addEventListener'](b, aY, { 'signal': b2[aZ(0x257)] });
        } else
            ar(aZ(0x334) + a + aZ(0x28a));
    }
}
function av() {
    const a = c;
    !window[a(0x27c)] && (clipsStudio = new au(), clipsStudio[a(0x25d)](), window[a(0x27c)] = clipsStudio, setTimeout(() => {
    }, 0x1f4));
}
function a8() {
    const a = c;
    fetch(API_BASE_URL + '/auth/logout', {
        'method': a(0x55a),
        'credentials': a(0x3cd)
    })['then'](b => {
        const aY = a;
        localStorage[aY(0x24e)](aY(0x396)), localStorage[aY(0x24e)](aY(0x57e)), localStorage['removeItem'](aY(0x41d)), localStorage[aY(0x24e)](aY(0x33b)), ar(aY(0x241)), window[aY(0x2f2)][aY(0x573)] = aY(0x418);
    })[a(0x4f3)](b => {
        const aY = a;
        ar(aY(0x2c8), b), setTimeout(() => {
            const aZ = aY;
            window[aZ(0x2f2)][aZ(0x573)] = aZ(0x418);
        }, 0x3e8);
    });
}
function aw() {
    const a = c, b = document['getElementById'](a(0x398));
    b && b[a(0x412)](a(0x185), b6 => {
        const b7 = a;
        b6[b7(0x4aa)](), az(b6);
    });
    const aY = document[a(0x1b9)](a(0x2fa));
    aY && aY[a(0x412)](a(0x185), b6 => {
        const b7 = a;
        b6[b7(0x212)](), b6[b7(0x4aa)](), a8();
    });
    const aZ = document[a(0x1b9)]('menuSettings');
    aZ && aZ[a(0x412)]('click', b6 => {
        const b7 = a;
        b6[b7(0x4aa)](), aA();
    }), n && n[a(0x412)](a(0x185), aA), p && p['addEventListener'](a(0x185), aB);
    const b0 = document[a(0x1b9)](a(0x4ee));
    b0 && b0['addEventListener'](a(0x185), () => {
        const b6 = a;
        confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20all\x20chat\x20history?\x20This\x20action\x20cannot\x20be\x20undone.') && (aL(), clipsStudio[b6(0x400)](b6(0x506), 'success'));
    });
    const b1 = document[a(0x1ff)](a(0x4e0));
    b1 && b1[a(0x412)](a(0x185), aB);
    const b2 = localStorage[a(0x394)](a(0x1ef));
    b2 && (aE(b2), q && (q['checked'] = b2 === a(0x1c0))), q && (ar(a(0x3c5)), (q[a(0x4bb)] !== 'INPUT' || q[a(0x27d)] !== 'checkbox') && ar(a(0x4d5)), q[a(0x412)](a(0x1c1), () => {
        const b6 = a, b7 = q[b6(0x17c)] ? b6(0x1c0) : b6(0x42f);
        ar('darkModeSettingsToggle\x20change\x20event\x20fired.\x20New\x20theme:', b7), aE(b7);
    }));
    const b3 = document[a(0x1b9)](a(0x23a));
    b3 && b3[a(0x412)](a(0x185), aI);
    const b4 = document[a(0x1b9)](a(0x543));
    b4 && (b4[a(0x17c)] = !![], localStorage[a(0x3b0)](a(0x4ed), a(0x4fe)), b4[a(0x412)](a(0x1c1), b6 => {
        const b7 = a, b8 = b6['target']['checked'];
        localStorage[b7(0x3b0)](b7(0x4ed), b8 ? b7(0x4fe) : b7(0x340)), window[b7(0x27c)] && window[b7(0x27c)][b7(0x175)] && (window[b7(0x27c)][b7(0x175)][b7(0x250)] = b8), window[b7(0x27c)] && window[b7(0x27c)][b7(0x1e0)](), ar(b7(0x31e) + (b8 ? b7(0x287) : b7(0x413)) + b7(0x389));
    }));
    const b5 = document[a(0x1b9)](a(0x49c));
    b5 && b5['addEventListener'](a(0x185), aD), aC();
}
t && t[c(0x412)](c(0x185), aM), s && s[c(0x412)](c(0x185), aN);
const ax = document[c(0x1b9)]('clips-toggle');
ax && ax[c(0x412)](c(0x185), function (a) {
    const b = c;
    a[b(0x4aa)]();
    const aY = document[b(0x1b9)]('clips-submenu'), aZ = this['querySelector'](b(0x31b));
    if (aY)
        aY[b(0x2d9)][b(0x4dc)](b(0x2b1));
    if (aZ)
        aZ['classList']['toggle'](b(0x535));
}), (v[c(0x321)](a => {
    const b = c;
    a['addEventListener'](b(0x185), () => {
        const aY = b;
        !a[aY(0x2db)](aY(0x419)) && (v[aY(0x321)](b0 => {
            const b1 = aY;
            b0['id'] !== b1(0x2ee) && !b0[b1(0x2db)]('.clips-submenu') && b0[b1(0x2d9)][b1(0x40f)](b1(0x289));
        }), a['id'] !== aY(0x2ee) && a[aY(0x2d9)][aY(0x3ed)](aY(0x289)));
        const aZ = a[aY(0x3dd)]['target'];
        aZ && (aO(aZ), window[aY(0x4f9)] <= 0x300 && k[aY(0x2d9)][aY(0x369)](aY(0x4c0)) && k[aY(0x2d9)][aY(0x40f)]('expanded'));
    });
}), document[c(0x412)]('click', a => {
    const b = c;
    m && !m[b(0x369)](a['target']) && l && !l[b(0x369)](a['target']) && (m[b(0x2d9)][b(0x40f)](b(0x289)), l['classList'][b(0x40f)](b(0x21d))), r && !r[b(0x369)](a[b(0x463)]) && a['target'] !== t && aN(), a[b(0x463)][b(0x2d9)][b(0x369)](b(0x46f)) && (a[b(0x463)][b(0x344)]['display'] = b(0x4f5));
}), document[c(0x412)](c(0x377), () => {
    const a = c;
    try {
        document[a(0x2ff)] && S();
    } catch (b) {
        ar(a(0x4f0), b);
    }
}), document[c(0x412)](c(0x268), a => {
    const b = c;
    (a[b(0x4ba)] || a['metaKey']) && a[b(0x224)] === 'k' && (a[b(0x212)](), ay());
}));
function ay() {
    const a = c;
    k[a(0x2d9)][a(0x4dc)](a(0x4c0));
    const b = k[a(0x2d9)][a(0x369)](a(0x4c0));
    localStorage[a(0x3b0)](a(0x470), b);
}
function az(a) {
    const b = c;
    ar(b(0x2b5));
    if (!m || !l)
        return;
    a[b(0x4aa)]();
}
function aA() {
    const a = c;
    if (!o)
        return;
    o['classList']['add'](a(0x2b1));
    const b = document[a(0x1b9)]('settingsBackdrop');
    b && (b[a(0x344)][a(0x415)] = '1', b[a(0x344)][a(0x202)] = 'visible');
    if (m)
        m['classList'][a(0x40f)](a(0x289));
    H && a5();
}
function aB() {
    const a = c;
    if (!o)
        return;
    o['classList']['remove']('open');
    const b = document['getElementById']('settingsBackdrop');
    b && (b[a(0x344)][a(0x415)] = '0', b['style'][a(0x202)] = a(0x2ff));
}
async function aC() {
    const a = c, b = document['getElementById']('analyticsLockOverlay'), aY = document[a(0x1b9)]('dashboardGrid'), aZ = document[a(0x1ff)](a(0x234));
    if (!b)
        return;
    try {
        const b0 = await fetch(window[a(0x3c4)] + a(0x48e), {
            'method': a(0x597),
            'headers': {
                'X-CSRF-Token': Y() || '',
                'Content-Type': a(0x1aa)
            },
            'credentials': a(0x3cd)
        });
        if (!b0['ok']) {
            ar(a(0x2a8), b0[a(0x51f)]), b['style'][a(0x180)] = a(0x44b);
            return;
        }
        const b1 = await b0[a(0x494)](), b2 = b1[a(0x529)] === !![];
        ar('🔍\x20YouTube\x20Connection\x20Status\x20(from\x20backend):', b2), !b2 ? (b[a(0x344)][a(0x180)] = a(0x44b), aY && aY[a(0x2d9)][a(0x3ed)](a(0x3b1)), aZ && aZ['classList']['add'](a(0x3b1))) : (b['style'][a(0x180)] = 'none', aY && aY['classList'][a(0x40f)](a(0x3b1)), aZ && aZ['classList'][a(0x40f)](a(0x3b1)));
        if (!H)
            H = {};
        H[a(0x3d0)] = b2;
    } catch (b3) {
        ar('❌\x20Error\x20checking\x20YouTube\x20connection:', b3), b['style'][a(0x180)] = a(0x44b);
    }
}
function aD() {
    const a = c;
    if (!H) {
        alert(a(0x1b1));
        return;
    }
    const b = Y();
    fetch(window['API_BASE_URL'] + a(0x299), {
        'method': a(0x597),
        'headers': {
            'X-CSRF-Token': b || '',
            'Content-Type': 'application/json'
        },
        'credentials': 'include'
    })[a(0x515)](aY => {
        const aZ = a;
        if (!aY['ok'])
            throw new Error(aZ(0x592) + aY[aZ(0x51f)] + ':\x20' + aY[aZ(0x503)]);
        return aY['json']();
    })[a(0x515)](aY => {
        const aZ = a;
        if (!aY[aZ(0x563)])
            throw new Error(aZ(0x29b));
        ar(aZ(0x244));
        const b0 = 0x1f4, b1 = 0x258, b2 = (window['innerWidth'] - b0) / 0x2, b3 = (window[aZ(0x461)] - b1) / 0x2, b4 = window[aZ(0x2b1)](aY[aZ(0x563)], 'YouTubeOAuth', aZ(0x48f) + b0 + aZ(0x408) + b1 + aZ(0x531) + b2 + aZ(0x1eb) + b3 + aZ(0x38a));
        if (!b4)
            ar(aZ(0x38e)), window[aZ(0x2f2)]['href'] = aY[aZ(0x563)];
        else {
            ar(aZ(0x23f));
            const b5 = function b7(b8) {
                const b9 = aZ, ba = [window[b9(0x2f2)]['origin']];
                if (!ba[b9(0x220)](b8['origin'])) {
                    ar(b9(0x4c1), b8['origin']);
                    return;
                }
                if (b8[b9(0x1f1)][b9(0x27d)] === b9(0x49a))
                    ar('✅\x20YouTube\x20authentication\x20successful!'), window['removeEventListener']('message', b7), clearInterval(b6), setTimeout(() => {
                        const bb = b9;
                        aC(), typeof analyticsManager !== 'undefined' && analyticsManager && analyticsManager['loadAnalyticsData'](), ai('✅\x20YouTube\x20connected\x20successfully!', bb(0x1a6));
                    }, 0x3e8);
                else
                    b8['data'][b9(0x27d)] === b9(0x33d) && (ar(b9(0x56e), b8[b9(0x1f1)][b9(0x302)]), window[b9(0x524)](b9(0x45b), b7), clearInterval(b6), ai(b9(0x3e7) + b8[b9(0x1f1)][b9(0x302)], b9(0x302)));
            };
            window[aZ(0x412)](aZ(0x45b), b5);
            let b6 = setInterval(() => {
                const b8 = aZ;
                try {
                    b4['closed'] && (clearInterval(b6), ar(b8(0x22e)), window['removeEventListener'](b8(0x45b), b5), setTimeout(() => {
                        a1(), aC();
                    }, 0x7d0));
                } catch (b9) {
                }
            }, 0x1f4);
        }
    })[a(0x4f3)](aY => {
        const aZ = a;
        ar(aZ(0x31d), aY), ai(aZ(0x3c0) + aY[aZ(0x45b)], aZ(0x302));
    });
}
function aE(a) {
    const b = c;
    C = a, ar(b(0x2e2), a), document[b(0x519)][b(0x4ef)]('data-theme', a), localStorage[b(0x3b0)](b(0x1ef), a), ar('setTheme():\x20Theme\x20saved\x20to\x20localStorage.\x20Current\x20stored\x20theme:', localStorage[b(0x394)](b(0x1ef)));
}
async function aF(a, b) {
    const aY = c;
    try {
        if (!H) {
            aJ('ai', aY(0x2e1));
            return;
        }
        aG(a, b);
    } catch (aZ) {
        ar(aY(0x443), aZ), aJ('ai', aY(0x4f4) + aZ[aY(0x45b)]);
    }
}
function aG(a, b) {
    const aY = c, aZ = document[aY(0x227)]('div');
    aZ[aY(0x2a5)] = 'clip-confirm-modal', aZ[aY(0x471)] = aY(0x27f), document[aY(0x384)][aY(0x304)](aZ);
    const b0 = document['getElementById'](aY(0x539));
    b0 && (b0[aY(0x345)] = b), document[aY(0x1b9)](aY(0x33a))[aY(0x412)](aY(0x185), () => {
        aZ['remove']();
    }), document[aY(0x1b9)](aY(0x430))[aY(0x412)](aY(0x185), async () => {
        const b1 = aY;
        aZ['remove'](), window['location']['hash'] = b1(0x1bc), setTimeout(() => {
            aH(b);
        }, 0x1f4);
    }), aZ[aY(0x412)](aY(0x185), b1 => {
        const b2 = aY;
        b1[b2(0x463)] === aZ && aZ[b2(0x40f)]();
    });
}
async function aH(a) {
    const b = c;
    try {
        const aY = Z(), aZ = clipsStudio ? clipsStudio[b(0x2c5)](a) : null;
        sessionStorage[b(0x3b0)]('clipProcessing', JSON[b(0x4d1)]({
            'videoId': aZ,
            'startTime': Date[b(0x1df)]()
        }));
        const b0 = document['createElement'](b(0x20f));
        b0['id'] = b(0x4d0), b0['innerHTML'] = b(0x296), document[b(0x384)][b(0x304)](b0);
        const b1 = await fetch(API_BASE_URL + b(0x28b), {
            'method': 'POST',
            'headers': {
                'Content-Type': b(0x1aa),
                ...aY
            },
            'credentials': b(0x3cd),
            'body': JSON[b(0x4d1)]({
                'url': a,
                'template_id': b(0x360),
                'gameplay_clip_id': K
            })
        });
        if (!b1['ok']) {
            let b9 = b(0x31a), ba = '';
            try {
                const bb = await b1[b(0x494)]();
                b9 = bb['error'] || b9, ba = bb['error_code'] || '';
            } catch (bc) {
                b9 = b(0x551) + b1[b(0x51f)];
            }
            if (ba === b(0x1e4)) {
                const bd = await b1[b(0x494)](), be = bd['remaining_seconds'] || bd[b(0x2b8)] || 0x1e, bf = Math[b(0x48a)](be / 0x3c), bg = be % 0x3c;
                g(be);
                let bh = '';
                bf > 0x0 ? bh = b(0x182) + bf + 'm\x20' + bg + 's' : bh = b(0x182) + be + 's', b9 = 'You\x20can\x20generate\x20another\x20video\x20' + bh + '.';
            }
            b0[b(0x471)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2048px;\x20margin-bottom:\x2016px;\x22>❌</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22font-size:\x2024px;\x20color:\x20var(--text);\x20margin-bottom:\x208px;\x22>Error</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20var(--muted);\x20margin-bottom:\x2024px;\x22>' + b9 + b(0x348);
            return;
        }
        const b2 = await b1['json'](), b3 = b2[b(0x2cf)];
        let b4 = ![], b5 = 0x0;
        const b6 = 0x12c;
        let b7 = Date[b(0x1df)](), b8 = null;
        while (!b4 && b5 < b6) {
            b5++;
            try {
                const bi = await fetch(API_BASE_URL + b(0x2d5) + b3, {
                    'headers': aY,
                    'credentials': b(0x3cd)
                });
                if (bi['ok']) {
                    let bj;
                    try {
                        bj = await bi[b(0x494)]();
                    } catch (bs) {
                        ar(b(0x4c5), bs), await new Promise(bt => setTimeout(bt, 0x7d0));
                        continue;
                    }
                    const bk = bj[b(0x51f)] || b(0x3f5), bl = bj[b(0x312)] || 0x0, bm = Date[b(0x1df)]() - b7, bn = bm / 0x3e8;
                    bl > 0x0 && !b8 && (b8 = bn / bl * 0x64);
                    const bo = b8 ? b8 * (0x64 - bl) / 0x64 * 0x3e8 : 0x0, bp = Math['floor'](bo / 0xea60), bq = Math[b(0x48a)](bo % 0xea60 / 0x3e8), br = document[b(0x1b9)]('clipStatus');
                    if (br) {
                        const bt = {
                                'downloading': [
                                    b(0x305),
                                    b(0x3b6),
                                    b(0x466),
                                    b(0x44c),
                                    'LEMME\x20GET\x20THIS'
                                ],
                                'processing': [
                                    'HAHAHAHA',
                                    b(0x273),
                                    'STOP\x20IT',
                                    b(0x3ef),
                                    b(0x264)
                                ],
                                'rendering': [
                                    b(0x23e),
                                    'YOOO',
                                    b(0x507),
                                    'TOO\x20GOOD',
                                    b(0x3b9)
                                ],
                                'completed': [
                                    b(0x223),
                                    b(0x335),
                                    b(0x2f1),
                                    b(0x189),
                                    b(0x3a1)
                                ]
                            }, bu = bt[bk] || [
                                'LOL',
                                b(0x548),
                                b(0x23e)
                            ];
                        br[b(0x345)] = bu[Math[b(0x48a)](Math[b(0x41f)]() * bu[b(0x56d)])];
                    }
                    document[b(0x1b9)](b(0x1da))['style']['width'] = Math['min'](bl, 0x63) + '%', document[b(0x1b9)](b(0x58b))[b(0x345)] = Math[b(0x274)](bl, 0x63) + '%', document['getElementById']('clipTimeLeft')['textContent'] = bp > 0x0 ? bp + ':' + bq[b(0x2df)]()[b(0x50a)](0x2, '0') : bq + 's';
                    if (bk === b(0x57c))
                        document['getElementById'](b(0x554))[b(0x345)] = Math['min'](bl, 0x63) + '%';
                    else {
                        if (bk === b(0x3f5))
                            document[b(0x1b9)](b(0x4a7))['textContent'] = Math[b(0x274)](bl, 0x63) + '%';
                        else
                            bk === b(0x2d0) && (document['getElementById'](b(0x4bc))[b(0x345)] = Math[b(0x274)](bl, 0x63) + '%');
                    }
                    if (bk === b(0x427))
                        b4 = !![], sessionStorage['removeItem'](b(0x46e)), b0['innerHTML'] = b(0x24c);
                    else
                        bk === 'failed' && (b4 = !![], sessionStorage[b(0x24e)](b(0x46e)), b0['innerHTML'] = b(0x18c) + (bj[b(0x45b)] || b(0x4d2)) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.closest(\x27#clip-processing-modal\x27).remove()\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff6b35\x200%,\x20#ff8856\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                }
            } catch (bv) {
                ar(b(0x25f), bv);
            }
            !b4 && await new Promise(bw => setTimeout(bw, 0x7d0));
        }
        !b4 && (sessionStorage[b(0x24e)](b(0x46e)), b0[b(0x471)] = b(0x310));
    } catch (bw) {
        ar(b(0x443), bw), document['getElementById'](b(0x4d0))?.[b(0x40f)](), aJ('ai', '❌\x20Error:\x20' + bw[b(0x45b)]);
    }
}
async function aI() {
    const a = c, b = [
            'Create\x20a\x20fast-paced\x20gaming\x20montage\x20with\x20epic\x20plays\x20and\x20reactions',
            a(0x571),
            a(0x228),
            'Compile\x20your\x20best\x20commentary\x20moments\x20into\x20shareable\x20shorts',
            a(0x4b0),
            a(0x311),
            a(0x43f),
            a(0x34f),
            a(0x28c),
            a(0x54b),
            'Compile\x20your\x20best\x20one-liners\x20and\x20funny\x20quotes',
            a(0x1a0),
            a(0x341),
            a(0x550),
            a(0x3e5)
        ], aY = b[Math[a(0x48a)](Math[a(0x41f)]() * b[a(0x56d)])];
    userInput && (userInput[a(0x328)] = aY, userInput[a(0x2ad)](), userInput[a(0x4a5)](new Event(a(0x200))));
    const aZ = document[a(0x1b9)](a(0x23a));
    aZ && (aZ[a(0x344)][a(0x36d)] = a(0x4f5), setTimeout(() => {
        const b0 = a;
        aZ[b0(0x344)][b0(0x36d)] = b0(0x349);
    }, 0xa));
}
function aJ(a, b) {
    const aY = c;
    if (!chatContainer)
        return;
    const aZ = document[aY(0x227)](aY(0x20f));
    aZ[aY(0x2a5)] = aY(0x1f7) + a + '-message-row';
    const b0 = document['createElement'](aY(0x20f));
    b0[aY(0x2a5)] = aY(0x391) + a + aY(0x59b), b0[aY(0x471)] = aY(0x2a1) + formatMessageContent(b) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22message-action\x20copy-btn\x22\x20title=\x22Copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.75\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20class=\x22lucide\x20lucide-copy-icon\x20lucide-copy\x22><rect\x20width=\x2214\x22\x20height=\x2214\x22\x20x=\x228\x22\x20y=\x228\x22\x20rx=\x222\x22\x20ry=\x222\x22/><path\x20d=\x22M4\x2016c-1.1\x200-2-.9-2-2V4c0-1.1.9-2\x202-2h10c1.1\x200\x202\x20.9\x202\x202\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    const b1 = b0[aY(0x1ff)](aY(0x193));
    b1[aY(0x412)]('click', () => {
        const b2 = aY;
        navigator[b2(0x1c7)][b2(0x3ad)](b)[b2(0x515)](() => {
            const b3 = b2;
            b1[b3(0x2d9)][b3(0x3ed)](b3(0x32f)), b1[b3(0x471)] = '<i\x20class=\x22fas\x20fa-check\x22></i>', setTimeout(() => {
                const b4 = b3;
                b1['classList']['remove'](b4(0x32f)), b1[b4(0x471)] = '<i\x20class=\x22fas\x20fa-copy\x22></i>';
            }, 0x7d0);
        })[b2(0x4f3)](b3 => {
            const b4 = b2;
            ar(b4(0x1c6), b3);
        });
    }), aZ[aY(0x304)](b0), chatContainer[aY(0x304)](aZ), chatContainer[aY(0x355)] = chatContainer[aY(0x32c)], window['dispatchEvent'](new CustomEvent(aY(0x4d8))), (a === 'user' || !B) && (chatHistory[aY(0x33e)]({
        'sender': a,
        'content': b,
        'timestamp': new Date()[aY(0x24b)]()
    }), localStorage[aY(0x3b0)](aY(0x1f0), JSON[aY(0x4d1)](chatHistory)));
}
function aK() {
    const a = c;
    (chatContainer && chatContainer[a(0x40b)][a(0x56d)] > 0x1 || welcomeCard && !welcomeCard[a(0x2d9)][a(0x369)](a(0x2ff))) && (confirm(a(0x29c)) && aL());
}
function aL() {
    const a = c;
    if (!chatContainer)
        return;
    while (chatContainer[a(0x1f5)]) {
        chatContainer[a(0x3d8)](chatContainer[a(0x1f5)]);
    }
    welcomeCard && (chatContainer[a(0x304)](welcomeCard), welcomeCard[a(0x2d9)][a(0x40f)]('hidden')), G = [];
    const b = document[a(0x1b9)]('filePreviewContainer');
    b && (b[a(0x471)] = '', b[a(0x2d9)][a(0x40f)](a(0x289))), I = 0x0;
    const aY = document[a(0x1ff)]('.input-section'), aZ = aY ? aY[a(0x1ff)]('.input-container') : null;
    aZ && aZ[a(0x2d9)][a(0x3ed)](a(0x51d)), aY && aY[a(0x2d9)][a(0x3ed)](a(0x2b3)), chatHistory = [], localStorage['removeItem'](a(0x1f0));
}
function aM() {
    const a = c;
    if (!r)
        return;
    r[a(0x2d9)]['add'](a(0x289));
}
function aN() {
    const a = c;
    if (!r)
        return;
    r[a(0x2d9)][a(0x40f)](a(0x289));
}
function aO(a) {
    const b = c;
    v['forEach'](aY => {
        const aZ = aS;
        aY[aZ(0x2d9)][aZ(0x40f)](aZ(0x289)), aY[aZ(0x3dd)][aZ(0x463)] === a && aY[aZ(0x2d9)][aZ(0x3ed)]('active');
    });
    switch (a) {
    case b(0x24d):
        if (I === 0x0) {
            const aY = document[b(0x1ff)](b(0x33c)), aZ = aY ? aY[b(0x1ff)](b(0x36a)) : null;
            aZ && aZ[b(0x2d9)][b(0x3ed)](b(0x51d)), aY && aY['classList'][b(0x3ed)](b(0x2b3));
        }
        break;
    case b(0x3f9):
        openHistory();
        break;
    case b(0x2e0):
        openSaved();
        break;
    default:
        break;
    }
}
function aP() {
    const a = c;
    u && (u[a(0x345)] = D[a(0x239)]());
}
function aQ() {
    const a = c, b = a(0x285) + D + a(0x3f7);
    aJ('ai', b);
}
function aR() {
    const a = c;
    if (!H)
        return ai('Please\x20sign\x20in\x20to\x20access\x20premium\x20features', a(0x302)), ![];
    if (H[a(0x19b)] === a(0x449))
        return ai(a(0x3e8), a(0x302)), ![];
    return !![];
}
function aS(a, b) {
    a = a - 0x175;
    const aY = X();
    let aZ = aY[a];
    if (aS['yZKWRe'] === undefined) {
        var b0 = function (b4) {
            const b5 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let b6 = '', b7 = '';
            for (let b8 = 0x0, b9, ba, bb = 0x0; ba = b4['charAt'](bb++); ~ba && (b9 = b8 % 0x4 ? b9 * 0x40 + ba : ba, b8++ % 0x4) ? b6 += String['fromCharCode'](0xff & b9 >> (-0x2 * b8 & 0x6)) : 0x0) {
                ba = b5['indexOf'](ba);
            }
            for (let bc = 0x0, bd = b6['length']; bc < bd; bc++) {
                b7 += '%' + ('00' + b6['charCodeAt'](bc)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(b7);
        };
        aS['PNMGuH'] = b0, aS['FmzZuE'] = {}, aS['yZKWRe'] = !![];
    }
    const b1 = aY[0x0], b2 = a + b1, b3 = aS['FmzZuE'][b2];
    return !b3 ? (aZ = aS['PNMGuH'](aZ), aS['FmzZuE'][b2] = aZ) : aZ = b3, aZ;
}
function aT() {
    const a = c, b = document[a(0x1b9)]('savedList');
    if (!b)
        return;
    const aY = JSON['parse'](localStorage[a(0x394)]('savedResults') || '[]');
    if (aY['length'] === 0x0) {
        b[a(0x471)] = a(0x1fe);
        return;
    }
    b['innerHTML'] = aY[a(0x48c)]((aZ, b0) => a(0x581) + aZ[a(0x27d)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22saved-preview\x22>' + aZ[a(0x2d8)]['substring'](0x0, 0x64) + a(0x197) + new Date(aZ['timestamp'])[a(0x382)]() + a(0x409) + b0 + ')\x22>View</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20')[a(0x19d)]('');
}
function aU(a) {
    const b = c, aY = JSON['parse'](localStorage[b(0x394)](b(0x184)) || '[]'), aZ = aY[a];
    aZ && alert(b(0x43c) + aZ['type'] + b(0x1cd) + aZ['content']);
}
function aV(a, b) {
    const aY = c, aZ = document['getElementById'](a);
    if (!aZ)
        return;
    aZ['style'][aY(0x180)] = aY(0x514), aZ[aY(0x471)] = '';
    const b0 = document['createElement'](aY(0x20f));
    b0[aY(0x2a5)] = aY(0x177), b0[aY(0x345)] = b, aZ[aY(0x304)](b0);
}
function aW(a) {
    const b = c;
    navigator[b(0x1c7)]['writeText'](a)['then'](() => {
        const aY = b;
        ai(aY(0x567), aY(0x1a6));
    });
}
function aX(a, b) {
    const aY = c, aZ = JSON[aY(0x1b3)](localStorage[aY(0x394)]('savedResults') || '[]');
    aZ[aY(0x33e)]({
        'type': a,
        'content': b,
        'timestamp': new Date()['toISOString']()
    }), localStorage[aY(0x3b0)](aY(0x184), JSON[aY(0x4d1)](aZ)), ai(aY(0x1ee), 'success');
}
(function () {
    const a = c, b = localStorage['getItem'](a(0x1ef)) || a(0x42f);
    document['documentElement']['setAttribute'](a(0x441), b);
}()), window[c(0x1fc)] = function () {
    const a = c, b = document['getElementById'](a(0x1cc)), aY = document[a(0x1b9)](a(0x28d)), aZ = document[a(0x1b9)](a(0x47e)), b0 = document['getElementById'](a(0x46a));
    ar(a(0x1d1)), ar(a(0x3ca), b ? a(0x42e) : '❌\x20NOT\x20FOUND'), ar('\x20\x20previewTemplateDescription:', aY ? '✅\x20FOUND' : a(0x376)), ar('\x20\x20previewVideoDuration:', aZ ? '✅\x20FOUND' : a(0x376)), ar(a(0x421), b0 ? a(0x42e) : a(0x376)), b && (b[a(0x345)] = a(0x1c9), ar(a(0x30e))), aY && (aY[a(0x345)] = a(0x57a), ar(a(0x417))), aZ && (aZ['textContent'] = a(0x414), ar(a(0x195))), b0 && (b0[a(0x345)] = a(0x576), ar(a(0x48b))), ar('If\x20you\x20see\x20the\x20TEST\x20values\x20in\x20the\x20template\x20preview,\x20the\x20elements\x20work!');
}, ar(c(0x454)), document[c(0x412)](c(0x39e), () => {
    const a = c, b = sessionStorage['getItem'](a(0x46e));
    if (b)
        try {
            const aY = JSON[a(0x1b3)](b);
            setTimeout(() => {
                const aZ = a;
                aH(aY[aZ(0x363)]);
            }, 0x1f4);
        } catch (aZ) {
            ar(a(0x36b), aZ), sessionStorage[a(0x24e)](a(0x46e));
        }
    aa(), ab(), typeof clipsStudio !== a(0x36f) && clipsStudio && typeof clipsStudio[a(0x25d)] === a(0x1f6) ? (clipsStudio['init'](), typeof clipsStudio[a(0x495)] === a(0x1f6) && clipsStudio[a(0x495)]()) : al();
}), window[c(0x1a7)] = function () {
    const a = c, b = localStorage[a(0x394)](a(0x4ed));
    return b !== a(0x340);
}, window[c(0x544)] = function () {
    return { 'add_watermark': window['getWatermarkState']() };
};