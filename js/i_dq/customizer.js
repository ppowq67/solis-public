class _0x2786d3 {
    constructor() {
            console['log']('[Customizer]\x20Init'), this['currentElement'] = null, this['selectedElements'] = [], this['panel'] = null, this['undoStack'] = [], this['redoStack'] = [], this['changeTracker'] = new Map(), this['init']();
        }
    ['init']() {
            this['createPanel'](), this['attachClickListeners'](), this['isClosing'] = ![];
            const _0xa48ed9 = document['getElementById']('templateVideoPreview');
            if (_0xa48ed9) {
                const _0x46599a = new MutationObserver(() => {
                    console['log']('[Customizer]\x20Template\x20changed,\x20reattaching\x20listeners'), this['attachClickListeners']();
                });
                _0x46599a['observe'](_0xa48ed9, {
                    'childList': !![],
                    'subtree': !![]
                });
            }
            document['addEventListener']('click', _0x45d203 => {
                if (this['isClosing'])
                    return;
                const _0x51537f = document['getElementById']('pill');
                if (!_0x51537f)
                    return;
                const _0x123197 = _0x51537f['contains'](_0x45d203['target']),
                    _0x59e455 = [
                    'textTrigger',
                    'fontTrigger',
                    'colorTrigger',
                    'undoTrigger',
                    'redoTrigger'
                ],
                    _0x1f6733 = _0x59e455['some'](_0x5cc452 => {
                        const _0x3439f4 = document['getElementById'](_0x5cc452);
                        return _0x3439f4 && _0x3439f4['contains'](_0x45d203['target']);
                    });
                !_0x123197 && !_0x1f6733 && (this['isClosing'] = !![], this['hidePanel'](), window['closePill'] && window['closePill'](), setTimeout(() => {
                    this['isClosing'] = ![];
                }, 0x12c));
            }, !![]);
        }
    ['createPanel']() {
            if (document['getElementById']('pill'))
                return;
            const _0x2f8b44 = this,
                _0x3d0d5c = document['createElement']('div');
            _0x3d0d5c['id'] = 'pill', _0x3d0d5c['className'] = 'pill-container', _0x3d0d5c['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pill-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22textTrigger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x207V4h16v3\x22/><path\x20d=\x22M9\x2020h6\x22/><path\x20d=\x22M12\x204v16\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Text</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divider\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22fontTrigger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x207V4h16v3\x22/><path\x20d=\x22M9\x2020h6\x22/><path\x20d=\x22M12\x204v16\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelFont\x22>Jakarta</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divider\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22colorTrigger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22m19\x2011-8-8-8.6\x208.6a2\x202\x200\x200\x200\x200\x202.8l5.2\x205.2c.8.8\x202\x20.8\x202.8\x200L19\x2011Z\x22/><path\x20d=\x22m5\x202\x205\x205\x22/><path\x20d=\x22M2\x2013h15\x22/><path\x20d=\x22M22\x2020a2\x202\x200\x201\x201-4\x200c0-1.6\x201.7-2.4\x202-4\x20.3\x201.6\x202\x202.4\x202\x204Z\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Color</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-dot\x22\x20id=\x22colorIndicator\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divider\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22undoTrigger\x22\x20title=\x22Undo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20style=\x22transform:\x20scaleX(-1)\x22><path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22/><path\x20d=\x22M3\x203v5h5\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22redoTrigger\x22\x20title=\x22Redo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22/><path\x20d=\x22M3\x203v5h5\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divider\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20id=\x22saveCustomizationsTrigger\x22\x20title=\x22Save\x20Customizations\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M19\x2021H5a2\x202\x200\x200\x201-2-2V5a2\x202\x200\x200\x201\x202-2h11l5\x205v11a2\x202\x200\x200\x201-2\x202z\x22/><polyline\x20points=\x2217\x2021\x2017\x2013\x207\x2013\x207\x2021\x22/><polyline\x20points=\x227\x203\x207\x208\x2015\x208\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Save</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pill-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22content-inner\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22textView\x22\x20class=\x22view\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TEXT\x20EDITING\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-label\x22>Edit\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22textInput\x22\x20placeholder=\x22Edit\x20text...\x22\x20style=\x22width:\x20100%;\x20padding:\x2012px\x2016px;\x20border:\x201px\x20solid\x20#e2e8f0;\x20border-radius:\x2012px;\x20font-size:\x200.95rem;\x20margin-bottom:\x2018px;\x20background:\x20white;\x20color:\x20#0f172a;\x20font-family:\x20\x27Plus\x20Jakarta\x20Sans\x27,\x20sans-serif;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TYPOGRAPHY\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-label\x22>Typography</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22fontPreviewContainer\x22\x20style=\x22display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x2010px;\x20margin-bottom:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-item\x20selected\x22\x20data-val=\x22Plus\x20Jakarta\x20Sans\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Jakarta\x20Sans</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22preview-jakarta\x22\x20style=\x22font-family:\x20\x27Plus\x20Jakarta\x20Sans\x27,\x20sans-serif;\x20font-size:\x201.2rem;\x20line-height:\x201.3;\x22>Sample\x20Text</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-item\x22\x20data-val=\x22Playfair\x20Display\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Playfair\x20Display</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22preview-playfair\x22\x20style=\x22font-family:\x20\x27Playfair\x20Display\x27,\x20serif;\x20font-size:\x201.2rem;\x20line-height:\x201.3;\x22>Sample\x20Text</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-item\x22\x20data-val=\x22JetBrains\x20Mono\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>JetBrains\x20Mono</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22preview-jetbrains\x22\x20style=\x22font-family:\x20\x27JetBrains\x20Mono\x27,\x20monospace;\x20font-size:\x201.2rem;\x20line-height:\x201.3;\x22>Sample\x20Text</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option-item\x22\x20data-val=\x22Luckiest\x20Guy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Luckiest\x20Guy</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22preview-lucky\x22\x20style=\x22font-family:\x20\x27Luckiest\x20Guy\x27,\x20cursive;\x20font-size:\x201.2rem;\x20line-height:\x201.3;\x22>Sample\x20Text</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20COLOR\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-label\x22>Accent\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22color-grid\x22\x20id=\x22colorGrid\x22\x20style=\x22margin-bottom:\x2012px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22custom-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22color-preview\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22hexPicker\x22\x20value=\x22#0f172a\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hex-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hex-label\x22>Custom\x20HEX</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22hex-value\x22\x20id=\x22hexVal\x22>#0F172A</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x3d0d5c['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document['body']['appendChild'](_0x3d0d5c), this['panel'] = _0x3d0d5c;
            const _0x282a63 = {
                    'text': document['getElementById']('textTrigger'),
                    'font': document['getElementById']('fontTrigger'),
                    'color': document['getElementById']('colorTrigger'),
                    'undo': document['getElementById']('undoTrigger'),
                    'redo': document['getElementById']('redoTrigger')
                },
                _0x4b5c0a = {
                    'text': document['getElementById']('textView')
                },
                _0x2cdb5b = document['getElementById']('colorIndicator'),
                _0x3dce8a = document['getElementById']('labelFont'),
                _0xb0c49 = document['getElementById']('hexVal'),
                _0x510f4d = document['getElementById']('hexPicker'),
                _0x227a04 = [
                '#0f172a',
                '#ff6b00',
                '#3b82f6',
                '#10b981',
                '#ef4444',
                '#8b5cf6',
                '#f59e0b',
                '#6366f1'
            ];
            let _0x162873 = null;
            const _0x4a4d5 = document['getElementById']('colorGrid');
            _0x227a04['forEach'](_0x34f1da => {
                const _0x1206e1 = document['createElement']('div');
                _0x1206e1['className'] = 'swatch', _0x1206e1['style']['background'] = _0x34f1da, _0x1206e1['addEventListener']('click', _0x2640da => {
                    _0x2640da['stopPropagation'](), console['log']('[ColorSwatch]\x20Clicked\x20color:', _0x34f1da), _0x2f8b44['selectedElements']['forEach'](_0x48a229 => {
                        _0x48a229['style']['setProperty']('color', _0x34f1da, 'important'), _0x2f8b44['trackChange']('color', {
                            'value': _0x34f1da
                        });
                    }), _0xb0c49['textContent'] = _0x34f1da['toUpperCase'](), _0x2cdb5b['style']['background'] = _0x34f1da, _0x510f4d['value'] = _0x34f1da, console['log']('[ColorSwatch]\x20Applied\x20color\x20to', _0x2f8b44['selectedElements']['length'], 'elements');
                }), _0x4a4d5['appendChild'](_0x1206e1);
            });
            const _0x381736 = _0x26dea4 => {
                    if (_0x162873 === _0x26dea4) {
                        _0x4ee040();
                        return;
                    }
                    Object['keys'](_0x282a63)['forEach'](_0x52b3df => {
                        _0x282a63[_0x52b3df]['classList']['remove']('active');
                    }), Object['keys'](_0x4b5c0a)['forEach'](_0x42f6c1 => {
                        _0x4b5c0a[_0x42f6c1]['classList']['remove']('visible'), _0x4b5c0a[_0x42f6c1]['style']['display'] = 'none';
                    }), _0x162873 = _0x26dea4, _0x282a63[_0x26dea4]['classList']['add']('active'), _0x4b5c0a[_0x26dea4]['classList']['add']('visible'), _0x4b5c0a[_0x26dea4]['style']['display'] = 'flex', _0x3d0d5c['style']['display'] = 'flex', _0x3d0d5c['classList']['add']('is-expanded'), _0x3d0d5c['classList']['remove']('slide-in'), _0x3d0d5c['classList']['remove']('gameplay-mode');
                    if (_0x26dea4 === 'text' && this['currentElement']) {
                        const _0x5b0149 = window['getComputedStyle'](this['currentElement'])['fontFamily'],
                            _0x243113 = window['getComputedStyle'](this['currentElement']),
                            _0x4eeffc = _0x243113['fontWeight'],
                            _0x3212dd = _0x243113['fontSize'],
                            _0x589f15 = _0x243113['textShadow'],
                            _0x5d8f4a = _0x243113['letterSpacing'],
                            _0x14a8b2 = _0x243113['lineHeight'],
                            _0x28b3de = _0x243113['textTransform'],
                            _0xabba75 = _0x243113['color'],
                            _0x4e774e = this['currentElement']['textContent'] || 'Sample\x20Text',
                            _0x5197f9 = {
                                'fontWeight': _0x4eeffc,
                                'fontSize': _0x3212dd,
                                'textShadow': _0x589f15,
                                'letterSpacing': _0x5d8f4a,
                                'lineHeight': _0x14a8b2,
                                'textTransform': _0x28b3de,
                                'color': _0xabba75
                            },
                            _0x189c6f = [
                                {
                                    'id': 'preview-jakarta',
                                    'dataVal': '\x27Plus\x20Jakarta\x20Sans\x27'
                            },
                                {
                                    'id': 'preview-playfair',
                                    'dataVal': '\x27Playfair\x20Display\x27'
                            },
                                {
                                    'id': 'preview-jetbrains',
                                    'dataVal': '\x27JetBrains\x20Mono\x27'
                            },
                                {
                                    'id': 'preview-lucky',
                                    'dataVal': '\x27Luckiest\x20Guy\x27'
                            }
                        ];
                        _0x189c6f['forEach'](_0x351bdf => {
                            const _0x8d15ae = document['getElementById'](_0x351bdf['id']);
                            _0x8d15ae && (_0x8d15ae['textContent'] = _0x4e774e, Object['keys'](_0x5197f9)['forEach'](_0x62d53b => {
                                _0x8d15ae['style'][_0x62d53b] = _0x5197f9[_0x62d53b];
                            }));
                        }), document['querySelectorAll']('#fontPreviewContainer\x20.option-item')['forEach'](_0x2f210a => {
                            const _0x4adca5 = _0x2f210a['dataset']['val']['replace'](/['"]/g, ''),
                                _0x3bf21c = _0x5b0149['replace'](/['"]/g, '')['split'](',')[0x0]['trim']();
                            _0x3bf21c['includes'](_0x4adca5) || _0x5b0149['includes'](_0x4adca5) ? _0x2f210a['classList']['add']('selected') : _0x2f210a['classList']['remove']('selected');
                        });
                    }
                },
                _0x4ee040 = () => {
                    _0x162873 = null, _0x3d0d5c['classList']['remove']('is-expanded'), _0x3d0d5c['classList']['remove']('slide-in'), _0x3d0d5c['classList']['remove']('gameplay-mode'), _0x3d0d5c['style']['position'] = '', _0x3d0d5c['style']['bottom'] = '', _0x3d0d5c['style']['right'] = '', _0x3d0d5c['style']['top'] = '', _0x3d0d5c['style']['left'] = '', _0x3d0d5c['style']['transform'] = '', _0x3d0d5c['style']['display'] = 'none', Object['keys'](_0x282a63)['forEach'](_0x47a1aa => {
                        _0x282a63[_0x47a1aa]['classList']['remove']('active');
                    }), Object['keys'](_0x4b5c0a)['forEach'](_0x536f57 => {
                        _0x4b5c0a[_0x536f57]['classList']['remove']('visible'), _0x4b5c0a[_0x536f57]['style']['display'] = 'none';
                    });
                };
            window['closePill'] = _0x4ee040, _0x282a63['text']['onclick'] = _0x580da6 => {
                _0x580da6['stopPropagation'](), _0x381736('text');
            }, _0x282a63['font']['onclick'] = _0x3e4336 => {
                _0x3e4336['stopPropagation'](), _0x381736('text'), setTimeout(() => {
                    const _0x1b48d4 = document['getElementById']('fontPreviewContainer');
                    _0x1b48d4 && _0x1b48d4['scrollIntoView']({
                        'behavior': 'smooth',
                        'block': 'nearest'
                    });
                }, 0x96);
            }, _0x282a63['color']['onclick'] = _0x2dd3b6 => {
                _0x2dd3b6['stopPropagation'](), _0x381736('text'), setTimeout(() => {
                    const _0x1c5494 = document['getElementById']('colorGrid');
                    _0x1c5494 && _0x1c5494['scrollIntoView']({
                        'behavior': 'smooth',
                        'block': 'nearest'
                    });
                }, 0x96);
            }, _0x282a63['undo']['onclick'] = _0x360937 => {
                _0x360937['stopPropagation'](), this['undo']();
            }, _0x282a63['redo']['onclick'] = _0x5d71d4 => {
                _0x5d71d4['stopPropagation'](), this['redo']();
            };
            const _0x4290e1 = document['getElementById']('saveCustomizationsTrigger');
            _0x4290e1 && (_0x4290e1['onclick'] = async _0x426140 => {
                _0x426140['stopPropagation']();
                const _0x2b95bb = _0x4290e1['querySelector']('span'),
                    _0xd970e4 = _0x2b95bb['textContent'];
                try {
                    _0x2b95bb['textContent'] = 'Saving...', _0x4290e1['disabled'] = !![], await _0x2f8b44['saveCustomizations']('ranking_moments'), _0x2b95bb['textContent'] = 'âœ“\x20Saved', setTimeout(() => {
                        _0x2b95bb['textContent'] = _0xd970e4, _0x4290e1['disabled'] = ![];
                    }, 0x7d0);
                } catch (_0x50bb22) {
                    _0x2b95bb['textContent'] = 'âœ—\x20Failed', console['error']('[Customizer]\x20Save\x20failed:', _0x50bb22), setTimeout(() => {
                        _0x2b95bb['textContent'] = _0xd970e4, _0x4290e1['disabled'] = ![];
                    }, 0x7d0);
                }
            });
            const _0x318b10 = document['getElementById']('fontPreviewContainer'),
                _0x2e89d6 = {
                    'Plus\x20Jakarta\x20Sans': '\x27Plus\x20Jakarta\x20Sans\x27,\x20sans-serif',
                    'Playfair\x20Display': '\x27Playfair\x20Display\x27,\x20serif',
                    'JetBrains\x20Mono': '\x27JetBrains\x20Mono\x27,\x20monospace',
                    'Luckiest\x20Guy': '\x27Luckiest\x20Guy\x27,\x20cursive'
                };
            _0x318b10 && _0x318b10['addEventListener']('click', _0x2bca0c => {
                const _0x2f43c8 = _0x2bca0c['target']['closest']('.option-item');
                if (!_0x2f43c8)
                    return;
                _0x2bca0c['stopPropagation'](), _0x2bca0c['preventDefault']();
                const _0x495380 = _0x2f43c8['dataset']['val'];
                console['log']('[Font]\x20Clicked\x20font:', _0x495380, 'Selected\x20elements:', _0x2f8b44['selectedElements']?.['length'] || 0x0);
                if (!_0x2f8b44['selectedElements'] || _0x2f8b44['selectedElements']['length'] === 0x0) {
                    console['warn']('[Font]\x20No\x20selected\x20elements!');
                    return;
                }
                const _0x356a42 = _0x2e89d6[_0x495380] || '\x27' + _0x495380 + '\x27,\x20sans-serif';
                console['log']('[Font]\x20Applying\x20font:', _0x356a42), _0x2f8b44['selectedElements']['forEach'](_0x39b982 => {
                    _0x2f8b44['trackChange']('font', {
                        'oldValue': _0x39b982['style']['fontFamily']
                    }), _0x39b982['style']['setProperty']('font-family', _0x356a42, 'important'), console['log']('[Font]\x20Applied\x20to\x20element:', _0x39b982['textContent']?.['substring'](0x0, 0x14));
                }), document['getElementById']('labelFont')['textContent'] = _0x495380, console['log']('[Font]\x20Updated\x20label\x20to:', _0x495380), _0x2f8b44['updateLivePreview'](), _0x318b10['querySelectorAll']('.option-item')['forEach'](_0x323bcd => _0x323bcd['classList']['remove']('selected')), _0x2f43c8['classList']['add']('selected'), console['log']('[Font]\x20Updated\x20selection\x20state');
            }, ![]);
            const _0x577607 = document['getElementById']('textInput');
            _0x577607 && (_0x577607['addEventListener']('input', _0x6c8900 => {
                console['log']('[TextInput]\x20Input\x20event,\x20updating\x20elements'), _0x2f8b44['selectedElements']['forEach'](_0x42a24d => {
                    _0x42a24d['textContent'] = _0x6c8900['target']['value'];
                }), _0x2f8b44['updateLivePreview']();
            }), _0x577607['addEventListener']('change', _0x1215a3 => {
                console['log']('[TextInput]\x20Change\x20event,\x20tracking\x20change'), _0x2f8b44['selectedElements']['forEach'](_0x18caf0 => {
                    _0x2f8b44['trackChange']('text');
                });
            }));
            _0x510f4d['addEventListener']('input', _0x439d11 => {
                _0x439d11['stopPropagation']();
                const _0x4e90e2 = _0x439d11['target']['value'];
                console['log']('[Color]\x20Input\x20event,\x20applying\x20color:', _0x4e90e2), _0x2f8b44['selectedElements']['forEach'](_0x10c57f => {
                    _0x10c57f['style']['setProperty']('color', _0x4e90e2, 'important');
                }), _0x2cdb5b['style']['background'] = _0x4e90e2, _0xb0c49['textContent'] = _0x4e90e2['toUpperCase']();
            }), _0x510f4d['addEventListener']('change', _0x2154b7 => {
                _0x2154b7['stopPropagation'](), console['log']('[Color]\x20Change\x20event,\x20tracking\x20color\x20change'), _0x2f8b44['selectedElements']['forEach'](_0x4f9a7e => {
                    _0x4f9a7e['style']['setProperty']('color', _0x2154b7['target']['value'], 'important'), _0x2f8b44['trackChange']('color', {
                        'value': _0x2154b7['target']['value']
                    });
                });
            });
            const _0x24fb3d = document['getElementById']('colorGrid');
            _0x24fb3d && _0x24fb3d['addEventListener']('click', _0x49a838 => {
                if (_0x49a838['target']['classList']['contains']('swatch')) {
                    _0x49a838['stopPropagation'](), _0x49a838['preventDefault']();
                    const _0x3538de = window['getComputedStyle'](_0x49a838['target'])['backgroundColor'];
                    console['log']('[ColorSwatch]\x20Clicked\x20color\x20swatch:', _0x3538de), _0x2f8b44['selectedElements']['forEach'](_0x7052ad => {
                        _0x2f8b44['trackChange']('color', {
                            'value': _0x3538de
                        }), _0x7052ad['style']['setProperty']('color', _0x3538de, 'important');
                    }), _0xb0c49['textContent'] = _0x3538de['toUpperCase'](), _0x2cdb5b['style']['background'] = _0x3538de, _0x510f4d['value'] = _0x3538de;
                }
            });
        }
    ['showPanel'](_0x453614, _0x61cb26, _0x468eb9) {
            this['clearSelection']();
            this['currentElement'] && this['currentElement'] !== _0x453614 && (this['currentElement']['style']['boxShadow'] = '', this['currentElement']['style']['borderRadius'] = '', this['currentElement']['style']['zIndex'] = '', this['currentElement']['style']['position'] = '');
            this['currentElement'] = _0x453614, this['selectedElements'] = [_0x453614];
            const _0xc07f93 = document['getElementById']('textInput'),
                _0x231bd3 = document['getElementById']('textView');
            _0x231bd3 && (_0x231bd3['style']['display'] = 'flex');
            if (_0xc07f93) {
                _0xc07f93['value'] = _0x453614['textContent'] || '';
                const _0x5bff18 = window['getComputedStyle'](_0x453614);
                _0xc07f93['style']['fontFamily'] = _0x5bff18['fontFamily'], _0xc07f93['style']['fontWeight'] = _0x5bff18['fontWeight'], _0xc07f93['style']['fontSize'] = _0x5bff18['fontSize'], _0xc07f93['style']['textShadow'] = _0x5bff18['textShadow'], _0xc07f93['style']['letterSpacing'] = _0x5bff18['letterSpacing'], _0xc07f93['style']['lineHeight'] = _0x5bff18['lineHeight'], _0xc07f93['style']['textTransform'] = _0x5bff18['textTransform'], _0xc07f93['style']['color'] = _0x5bff18['color'];
            }
            let _0x576fc2 = _0x61cb26 + 0xf,
                _0x4ebad3 = _0x468eb9 + 0xf;
            const _0x28b552 = 0x168,
                _0x5dc23a = 0x17c;
            _0x576fc2 + _0x28b552 > window['innerWidth'] && (_0x576fc2 = Math['max'](0xa, window['innerWidth'] - _0x28b552 - 0xa)), _0x4ebad3 + _0x5dc23a > window['innerHeight'] && (_0x4ebad3 = Math['max'](0xa, _0x468eb9 - _0x5dc23a - 0xf)), this['panel']['style']['left'] = _0x576fc2 + 'px', this['panel']['style']['top'] = _0x4ebad3 + 'px', this['panel']['style']['display'] = 'flex', this['panel']['classList']['add']('is-expanded'), this['updateLivePreview'](), _0x453614['style']['borderRadius'] = '12px', _0x453614['style']['boxShadow'] = '0\x200\x200\x202px\x20#ff6b3d', _0x453614['style']['position'] = 'relative', _0x453614['style']['zIndex'] = '9999';
        }
    ['hidePanel']() {
            this['panel'] && (this['panel']['style']['display'] = 'none', this['panel']['classList']['remove']('is-expanded')), this['currentElement'] && (this['currentElement']['style']['boxShadow'] = '', this['currentElement']['style']['borderRadius'] = '', this['currentElement']['style']['zIndex'] = '', this['currentElement']['style']['position'] = ''), this['clearSelection'](), this['currentElement'] = null;
        }
    ['updateLivePreview']() {
            if (!this['currentElement'])
                return;
            const _0x4ceb42 = window['getComputedStyle'](this['currentElement']),
                _0x6d760c = _0x4ceb42['fontFamily'],
                _0x50663d = this['currentElement']['textContent'] || 'Sample\x20Text',
                _0x1b46c7 = _0x4ceb42['fontWeight'],
                _0x1434a0 = _0x4ceb42['fontSize'],
                _0x49b9d3 = _0x4ceb42['textShadow'],
                _0x1c6da1 = _0x4ceb42['letterSpacing'],
                _0x220102 = _0x4ceb42['lineHeight'],
                _0x1c91fe = _0x4ceb42['textTransform'],
                _0x32cb99 = _0x4ceb42['color'],
                _0x4d8628 = [
                    {
                        'id': 'preview-jakarta',
                        'font': '\x27Plus\x20Jakarta\x20Sans\x27,\x20sans-serif'
                },
                    {
                        'id': 'preview-playfair',
                        'font': '\x27Playfair\x20Display\x27,\x20serif'
                },
                    {
                        'id': 'preview-jetbrains',
                        'font': '\x27JetBrains\x20Mono\x27,\x20monospace'
                },
                    {
                        'id': 'preview-lucky',
                        'font': '\x27Luckiest\x20Guy\x27,\x20cursive'
                }
            ];
            _0x4d8628['forEach'](_0x4f6a74 => {
                const _0x4bce30 = document['getElementById'](_0x4f6a74['id']);
                _0x4bce30 && (_0x4bce30['textContent'] = _0x50663d, _0x4bce30['style']['fontFamily'] = _0x4f6a74['font'], _0x4bce30['style']['fontWeight'] = _0x1b46c7, _0x4bce30['style']['fontSize'] = _0x1434a0, _0x4bce30['style']['textShadow'] = _0x49b9d3, _0x4bce30['style']['letterSpacing'] = _0x1c6da1, _0x4bce30['style']['lineHeight'] = _0x220102, _0x4bce30['style']['textTransform'] = _0x1c91fe, _0x4bce30['style']['color'] = _0x32cb99);
            });
            const _0x34852c = document['getElementById']('fontPreviewContainer');
            if (_0x34852c) {
                const _0x33c0fa = {
                    'Plus\x20Jakarta\x20Sans': 'Plus\x20Jakarta\x20Sans',
                    'Playfair\x20Display': 'Playfair\x20Display',
                    'JetBrains\x20Mono': 'JetBrains\x20Mono',
                    'Luckiest\x20Guy': 'Luckiest\x20Guy'
                };
                let _0x329549 = ![];
                _0x34852c['querySelectorAll']('.option-item')['forEach'](_0x385fce => {
                    const _0x23cb87 = _0x385fce['dataset']['val'],
                        _0x5b03ea = _0x6d760c['replace'](/['"]/g, '')['split'](',')[0x0]['trim']();
                    if (_0x23cb87 === _0x5b03ea || _0x6d760c['includes'](_0x23cb87)) {
                        _0x385fce['classList']['add']('selected');
                        const _0x4ee550 = _0x33c0fa[_0x23cb87] || _0x23cb87;
                        document['getElementById']('labelFont')['textContent'] = _0x4ee550, _0x329549 = !![];
                    } else
                        _0x385fce['classList']['remove']('selected');
                }), !_0x329549 && (document['getElementById']('labelFont')['textContent'] = 'Custom', _0x34852c['querySelectorAll']('.option-item')['forEach'](_0x4b4f62 => _0x4b4f62['classList']['remove']('selected')));
            }
            const _0x247979 = document['getElementById']('textInput');
            _0x247979 && (_0x247979['style']['fontFamily'] = _0x4ceb42['fontFamily'], _0x247979['style']['fontWeight'] = _0x1b46c7, _0x247979['style']['fontSize'] = _0x1434a0, _0x247979['style']['textShadow'] = _0x49b9d3, _0x247979['style']['letterSpacing'] = _0x1c6da1, _0x247979['style']['lineHeight'] = _0x220102, _0x247979['style']['textTransform'] = _0x1c91fe, _0x247979['style']['color'] = _0x32cb99);
        }
    ['isNumberedItem'](_0x43be22) {
            if (!_0x43be22 || !_0x43be22['textContent'])
                return ![];
            const _0x23bace = _0x43be22['textContent']['trim']();
            return /^\d+\./ ['test'](_0x23bace);
        }
    ['addToSelection'](_0x5d48a0) {
            !this['selectedElements']['includes'](_0x5d48a0) && (this['selectedElements']['push'](_0x5d48a0), _0x5d48a0['style']['outline'] = '2px\x20dashed\x20#ff6b3d', _0x5d48a0['style']['outlineOffset'] = '2px', console['log']('[Customizer]\x20Multi-select:\x20Added\x20element.\x20Total\x20selected:', this['selectedElements']['length'])), this['updateMultiSelectUI']();
        }
    ['clearSelection']() {
            this['selectedElements']['forEach'](_0x2e3661 => {
                _0x2e3661['style']['outline'] = '', _0x2e3661['style']['outlineOffset'] = '';
            }), this['selectedElements'] = [];
        }
    ['updateMultiSelectUI']() {
            const _0x243646 = document['getElementById']('pill');
            if (_0x243646 && this['selectedElements']['length'] > 0x1)
                _0x243646['classList']['add']('multi-select-mode');
            else
                _0x243646 && _0x243646['classList']['remove']('multi-select-mode');
        }
    ['trackChange'](_0x51a818, _0x25c02e = {}) {
            if (!this['currentElement'])
                return;
            const _0x38a0fe = {
                'type': _0x51a818,
                'element': this['currentElement'],
                'elementId': this['currentElement']['id'] || this['currentElement']['className'],
                'timestamp': Date['now']()
            };
            if (_0x51a818 === 'text')
                _0x38a0fe['oldText'] = this['currentElement']['textContent'];
            else {
                if (_0x51a818 === 'font')
                    _0x38a0fe['oldFont'] = _0x25c02e['oldValue'] || this['currentElement']['style']['fontFamily'], _0x38a0fe['newFont'] = this['currentElement']['style']['fontFamily'];
                else {
                    if (_0x51a818 === 'color')
                        _0x38a0fe['oldColor'] = this['getElementColor'](), _0x38a0fe['newColor'] = _0x25c02e['value'] || this['currentElement']['style']['color'];
                    else
                        _0x51a818 === 'delete' && (_0x38a0fe['deletedHTML'] = this['currentElement']['outerHTML'], _0x38a0fe['deletedParent'] = this['currentElement']['parentElement']);
                }
            }
            this['undoStack']['push'](_0x38a0fe), this['redoStack'] = [], console['log']('[Customizer]\x20Change\x20tracked:', _0x51a818, this['undoStack']['length'], 'items');
        }
    ['getElementColor']() {
            if (!this['currentElement'])
                return '#0f172a';
            return window['getComputedStyle'](this['currentElement'])['color'] || this['currentElement']['style']['color'] || '#0f172a';
        }
    ['undo']() {
            if (this['undoStack']['length'] === 0x0) {
                console['log']('[Customizer]\x20Nothing\x20to\x20undo');
                return;
            }
            const _0x4bb0bc = this['undoStack']['pop']();
            console['log']('[Customizer]\x20Undoing:', _0x4bb0bc['type']);
            const _0x471e13 = {
                ..._0x4bb0bc
            };
            if (_0x4bb0bc['type'] === 'text')
                _0x471e13['newText'] = _0x4bb0bc['element']['textContent'];
            else {
                if (_0x4bb0bc['type'] === 'font')
                    _0x471e13['currentFont'] = _0x4bb0bc['element']['style']['fontFamily'];
                else {
                    if (_0x4bb0bc['type'] === 'color')
                        _0x471e13['currentColor'] = _0x4bb0bc['element']['style']['color'];
                    else
                        _0x4bb0bc['type'] === 'delete' && (_0x471e13['deletionTime'] = Date['now']());
                }
            }
            this['redoStack']['push'](_0x471e13);
            switch (_0x4bb0bc['type']) {
                case 'text':
                    _0x4bb0bc['element']['textContent'] = _0x4bb0bc['oldText'];
                    break;
                case 'font':
                    _0x4bb0bc['element']['style']['setProperty']('font-family', _0x4bb0bc['oldFont'], 'important');
                    break;
                case 'color':
                    _0x4bb0bc['element']['style']['setProperty']('color', _0x4bb0bc['oldColor'], 'important');
                    break;
                case 'delete':
                    _0x4bb0bc['deletedParent'] && (_0x4bb0bc['deletedParent']['innerHTML'] += _0x4bb0bc['deletedHTML']);
                    break;
            }
            this['updatePanel']();
        }
    ['redo']() {
            if (this['redoStack']['length'] === 0x0) {
                console['log']('[Customizer]\x20Nothing\x20to\x20redo');
                return;
            }
            const _0x4fdf73 = this['redoStack']['pop']();
            console['log']('[Customizer]\x20Redoing:', _0x4fdf73['type']);
            const _0x3afda0 = {
                ..._0x4fdf73
            };
            this['undoStack']['push'](_0x3afda0);
            switch (_0x4fdf73['type']) {
                case 'text':
                    _0x4fdf73['element']['textContent'] = _0x4fdf73['newText'];
                    break;
                case 'font':
                    _0x4fdf73['element']['style']['setProperty']('font-family', _0x4fdf73['newFont'], 'important');
                    break;
                case 'color':
                    _0x4fdf73['element']['style']['setProperty']('color', _0x4fdf73['newColor'], 'important');
                    break;
                case 'delete':
                    _0x4fdf73['deletedParent'] && (_0x4fdf73['deletedParent']['innerHTML'] += _0x4fdf73['deletedHTML']);
                    break;
            }
            this['updatePanel']();
        }
    ['updatePanel']() {
            if (this['currentElement'] && this['panel'] && this['panel']['style']['display'] !== 'none') {
                const _0x1b2b67 = document['getElementById']('textInput');
                _0x1b2b67 && (_0x1b2b67['value'] = this['currentElement']['textContent'] || '');
                const _0x9242d4 = document['getElementById']('colorIndicator'),
                    _0x1b4fb9 = document['getElementById']('hexVal'),
                    _0x36df2d = window['getComputedStyle'](this['currentElement'])['color'] || '#0f172a';
                if (_0x9242d4)
                    _0x9242d4['style']['background'] = _0x36df2d;
                if (_0x1b4fb9)
                    _0x1b4fb9['textContent'] = this['rgbToHex'](_0x36df2d)['toUpperCase']();
            }
        }
    ['rgbToHex'](_0x58b967) {
            if (_0x58b967['startsWith']('#'))
                return _0x58b967;
            const _0x3c80a7 = _0x58b967['match'](/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!_0x3c80a7)
                return '#0f172a';
            const _0x207f9e = parseInt(_0x3c80a7[0x1])['toString'](0x10)['padStart'](0x2, '0'),
                _0x490efe = parseInt(_0x3c80a7[0x2])['toString'](0x10)['padStart'](0x2, '0'),
                _0x28f2a8 = parseInt(_0x3c80a7[0x3])['toString'](0x10)['padStart'](0x2, '0');
            return '#' + _0x207f9e + _0x490efe + _0x28f2a8;
        }
    ['attachClickListeners']() {
            console['log']('[Customizer]\x20Attaching\x20text\x20selection\x20system');
            const _0x10d60f = document['getElementById']('templateVideoPreview');
            if (!_0x10d60f) {
                console['log']('[Customizer]\x20Preview\x20not\x20found,\x20retrying...'), setTimeout(() => this['attachClickListeners'](), 0x3e8);
                return;
            }
            _0x10d60f['style']['userSelect'] = 'text', _0x10d60f['style']['WebkitUserSelect'] = 'text';
            const _0x2dbef1 = _0x284a98 => {
                const _0x2626cb = [
                    '.title',
                    '.ranking-list',
                    '.ranked-item',
                    '.funniest',
                    '.text-stroke',
                    '[class*=\x22rank-\x22]'
                ],
                    _0x5410b3 = _0x2626cb['some'](_0x181911 => _0x284a98['querySelector'](_0x181911));
                if (_0x5410b3) {
                    console['log']('[Customizer]\x20Skipping\x20text\x20wrapping\x20for\x20styled\x20template');
                    return;
                }
                const _0x2fe66e = document['createTreeWalker'](_0x284a98, NodeFilter['SHOW_TEXT'], null, ![]),
                    _0x1487ba = [];
                let _0x1e685c;
                while (_0x1e685c = _0x2fe66e['nextNode']()) {
                    if (_0x1e685c['textContent']['trim']()['length'] > 0x0 && _0x1e685c['parentElement'] !== _0x284a98) {
                        if (_0x1e685c['parentElement']['className'] && (_0x1e685c['parentElement']['className']['includes']('funniest') || _0x1e685c['parentElement']['className']['includes']('text-stroke') || _0x1e685c['parentElement']['className'] && !_0x1e685c['parentElement']['className']['includes']('text-node-wrapper')))
                            continue;
                        _0x1487ba['push'](_0x1e685c);
                    }
                }
                _0x1487ba['reverse']()['forEach'](_0x4fa202 => {
                    if (_0x4fa202['parentElement']['tagName'] === 'SPAN' && _0x4fa202['parentElement']['className'])
                        return;
                    const _0x53dc56 = document['createElement']('span');
                    _0x53dc56['className'] = 'text-node-wrapper', _0x4fa202['parentElement']['insertBefore'](_0x53dc56, _0x4fa202), _0x53dc56['appendChild'](_0x4fa202);
                });
            };
            _0x2dbef1(_0x10d60f), _0x10d60f['addEventListener']('mouseup', _0x233fbf => {
                if (_0x233fbf['target']['closest']('.solis-watermark'))
                    return;
                if (_0x233fbf['target']['closest']('[data-no-text-select=\x22true\x22]')) {
                    console['log']('[Customizer]\x20Skipped\x20gameplay\x20selector\x20area');
                    return;
                }
                const _0x606cf = _0x233fbf['shiftKey'];
                let _0x3b7140 = _0x233fbf['target'];
                if (_0x3b7140['classList']?.['contains']('text-node-wrapper'))
                    _0x3b7140 = _0x3b7140;
                else {
                    if (_0x3b7140 && _0x3b7140 !== _0x10d60f && !_0x3b7140['closest']('.solis-watermark')) {}
                }
                if (_0x3b7140 && _0x3b7140 !== _0x10d60f && !_0x3b7140['closest']('.solis-watermark')) {
                    if (_0x3b7140['textContent']?.['trim']() && _0x3b7140['textContent']['trim']()['length'] < 0xc8) {
                        _0x233fbf['stopPropagation'](), console['log']('[Customizer]\x20Selected\x20element:', _0x3b7140['textContent']['trim']()['substring'](0x0, 0x32));
                        _0x606cf && this['currentElement'] ? this['addToSelection'](_0x3b7140) : this['showPanel'](_0x3b7140, _0x233fbf['clientX'], _0x233fbf['clientY']);
                        return;
                    }
                }
                const _0x1c1004 = window['getSelection'](),
                    _0x575607 = _0x1c1004['toString']()['trim']();
                if (_0x575607 && _0x575607['length'] > 0x0) {
                    let _0x509809 = _0x1c1004['getRangeAt'](0x0),
                        _0x5d27a0 = _0x509809['commonAncestorContainer'];
                    _0x5d27a0['nodeType'] === Node['TEXT_NODE'] && (_0x5d27a0 = _0x5d27a0['parentElement']);
                    while (_0x5d27a0 && !_0x5d27a0['textContent']?.['trim']() && _0x5d27a0 !== _0x10d60f) {
                        _0x5d27a0 = _0x5d27a0['parentElement'];
                    }
                    _0x5d27a0 && _0x5d27a0 !== _0x10d60f && !_0x5d27a0['closest']('.solis-watermark') && (_0x233fbf['stopPropagation'](), console['log']('[Customizer]\x20Selected\x20text\x20from\x20drag:', _0x575607), _0x606cf && this['currentElement'] ? this['addToSelection'](_0x5d27a0) : this['showPanel'](_0x5d27a0, _0x233fbf['clientX'], _0x233fbf['clientY']));
                }
            }, !![]), _0x10d60f['addEventListener']('mouseover', _0x2ab4e3 => {
                const _0x441c9d = _0x2ab4e3['target'];
                _0x441c9d && _0x441c9d !== _0x10d60f && !_0x441c9d['closest']('.solis-watermark') && (_0x441c9d['textContent']?.['trim']() && _0x441c9d['textContent']['trim']()['length'] < 0xc8 && (_0x441c9d['style']['cursor'] = 'pointer', (!_0x441c9d['style']['background'] || _0x441c9d['style']['background'] === '') && (_0x441c9d['style']['transition'] = 'background\x200.15s\x20ease')));
            }), _0x10d60f['addEventListener']('mouseout', _0x2e1a67 => {
                const _0x41b434 = _0x2e1a67['target'];
                _0x41b434 && _0x41b434['_originalBg'] === undefined && _0x41b434['style']['background'] === 'rgba(255,\x20107,\x200,\x200.08)' && (_0x41b434['style']['background'] = '');
            });
        }
    ['collectCustomizations']() {
            const _0x130436 = {},
                _0x1657c6 = document['getElementById']('templateVideoPreview');
            if (!_0x1657c6)
                return console['log']('[Customizer]\x20Preview\x20not\x20found,\x20cannot\x20collect\x20customizations'), _0x130436;
            return _0x1657c6['querySelectorAll']('[data-template-element-id]')['forEach'](_0x2012e3 => {
                const _0x5f42d4 = _0x2012e3['getAttribute']('data-template-element-id');
                if (!_0x5f42d4)
                    return;
                const _0x3fec90 = window['getComputedStyle'](_0x2012e3),
                    _0x509c0a = {},
                    _0x585f47 = _0x2012e3['textContent']?.['trim']();
                _0x585f47 && _0x585f47['length'] > 0x0 && _0x585f47['length'] < 0x1f4 && (_0x509c0a['content'] = _0x585f47);
                const _0x1830e0 = _0x3fec90['color'];
                if (_0x1830e0 && _0x1830e0 !== 'rgb(255,\x20255,\x20255)') {
                    const _0x283b73 = _0x1830e0['match'](/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
                    _0x283b73 && (_0x509c0a['color'] = [
                    parseInt(_0x283b73[0x1]),
                    parseInt(_0x283b73[0x2]),
                    parseInt(_0x283b73[0x3]),
                    0xff
                ]);
                }
                const _0x1aaebd = _0x3fec90['fontFamily'];
                _0x1aaebd && _0x1aaebd['length'] > 0x0 && (_0x509c0a['font'] = _0x1aaebd['replace'](/['"]/g, '')['split'](',')[0x0]['trim']()), Object['keys'](_0x509c0a)['length'] > 0x0 && (_0x130436[_0x5f42d4] = _0x509c0a);
            }), console['log']('[Customizer]\x20Collected\x20customizations:', _0x130436), _0x130436;
        }
    async ['saveCustomizations'](_0x2b3ffd = 'ranking_moments') {
            try {
                const _0x5568bb = this['collectCustomizations']();
                if (Object['keys'](_0x5568bb)['length'] === 0x0)
                    return console['log']('[Customizer]\x20No\x20customizations\x20to\x20save'), null;
                const _0x5abd4a = window['API_BASE_URL'] || 'https://powq21-solisai-backend.hf.space',
                    _0x2d16fd = getAuthHeaders();
                console['log']('[Customizer]\x20Sending\x20customizations\x20to\x20backend...', {
                    'template_id': _0x2b3ffd,
                    'customizations': _0x5568bb
                });
                const _0x38318b = await fetch(_0x5abd4a + '/clips/apply-customizations', {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/json',
                        ..._0x2d16fd
                    },
                    'credentials': 'include',
                    'body': JSON['stringify']({
                        'template_id': _0x2b3ffd,
                        'customizations': _0x5568bb
                    })
                });
                if (!_0x38318b['ok']) {
                    const _0x5ae3db = await _0x38318b['json']();
                    console['error']('[Customizer]\x20Failed\x20to\x20save\x20customizations:', _0x5ae3db);
                    throw new Error(_0x5ae3db['error'] || 'Failed\x20to\x20save\x20customizations');
                }
                const _0x1a60a4 = await _0x38318b['json']();
                return console['log']('[Customizer]\x20âœ…\x20Customizations\x20saved:', _0x1a60a4['summary']), window['currentCustomizations'] = {
                    'template_id': _0x2b3ffd,
                    'customizations': _0x5568bb,
                    'timestamp': Date['now']()
                }, _0x1a60a4;
            } catch (_0x33d7e0) {
                console['error']('[Customizer]\x20Error\x20saving\x20customizations:', _0x33d7e0);
                throw _0x33d7e0;
            }
        }
    ['getCustomizationsForGeneration']() {
            if (!window['currentCustomizations'])
                return null;
            const _0x4401c5 = Date['now']() - window['currentCustomizations']['timestamp'];
            if (_0x4401c5 > 0x5 * 0x3c * 0x3e8)
                return window['currentCustomizations'] = null, null;
            return window['currentCustomizations']['customizations'];
        }
}
const _0x4f2870 = ((() => {
    let _0x58095c = null;
    const _0x4d946f = () => {
        if (_0x58095c)
            return _0x58095c;
        return _0x58095c = new _0x2786d3(), window['customizer'] = _0x58095c, _0x58095c;
    };
    window['showGameplayPanel'] = (_0x4a436d, _0x16c905) => {
        console['log']('[Gameplay\x20Panel]\x20Function\x20called\x20with\x20coords:', _0x4a436d, _0x16c905);
        const _0x32aff4 = document['getElementById']('pill');
        console['log']('[Gameplay\x20Panel]\x20Pill\x20found?', !!_0x32aff4);
        if (_0x32aff4 && _0x32aff4['classList']['contains']('is-expanded')) {
            console['log']('[Gameplay\x20Panel]\x20âš\u00a0ï¸\u008f\x20Text\x20customizer\x20is\x20active,\x20blocking\x20gameplay\x20panel');
            return;
        }
        console['log']('[Gameplay\x20Panel]\x20Pill\x20element:', _0x32aff4);
        if (!_0x32aff4) {
            console['error']('[Gameplay\x20Panel]\x20Pill\x20container\x20not\x20found');
            return;
        }
        const _0x1d4730 = 0x14,
            _0x22beb6 = 0x17c,
            _0x28967c = 0x96;
        let _0x573958 = _0x4a436d + _0x1d4730,
            _0x759836 = _0x16c905 - _0x28967c / 0x2;
        _0x573958 + _0x22beb6 > window['innerWidth'] && (_0x573958 = _0x4a436d - _0x22beb6 - _0x1d4730);
        _0x759836 = Math['max'](0x14, Math['min'](_0x759836, window['innerHeight'] - _0x28967c - 0x14)), _0x32aff4['classList']['remove']('gameplay-mode'), _0x32aff4['style']['position'] = 'fixed', _0x32aff4['style']['bottom'] = 'auto', _0x32aff4['style']['right'] = 'auto', _0x32aff4['style']['top'] = _0x759836 + 'px', _0x32aff4['style']['left'] = _0x573958 + 'px', _0x32aff4['style']['transform'] = 'none';
        const _0x109e24 = _0x32aff4['querySelector']('.pill-actions');
        _0x109e24 && (_0x109e24['style']['display'] = 'none');
        _0x32aff4['style']['display'] = 'flex', console['log']('[Gameplay\x20Panel]\x20Set\x20pill\x20display\x20to\x20flex');
        const _0x1d0296 = window['getComputedStyle'](_0x32aff4);
        console['log']('[Gameplay\x20Panel]\x20Pill\x20styles\x20-\x20display:', _0x1d0296['display'], 'position:', _0x1d0296['position'], 'visibility:', _0x1d0296['visibility']), console['log']('[Gameplay\x20Panel]\x20Creating/updating\x20gameplay\x20view');
        let _0x329856 = document['getElementById']('gameplayView'),
            _0x7cbf14 = !_0x329856 || !_0x329856['parentElement'];
        if (_0x329856 && !_0x7cbf14)
            console['log']('[Gameplay\x20Panel]\x20Reusing\x20existing\x20gameplay\x20view'), _0x329856['style']['display'] = 'flex', _0x329856['classList']['add']('visible');
        else {
            _0x329856 && _0x329856['remove']();
            _0x329856 = document['createElement']('div'), _0x329856['id'] = 'gameplayView', _0x329856['className'] = 'view', _0x329856['style']['cssText'] = 'display:\x20flex;\x20flex-direction:\x20column;\x20width:\x20100%;\x20gap:\x200;';
            const _0x289746 = _0x32aff4['querySelector']('.content-inner');
            console['log']('[Gameplay\x20Panel]\x20Content\x20inner\x20found?', !!_0x289746), _0x289746 && _0x289746['appendChild'](_0x329856), console['log']('[Gameplay\x20Panel]\x20Rendering\x20cards.\x20Clips\x20available:', availableGameplayClips['length']), _0x329856['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20loadingSpinner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.gameplay-loading\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.gameplay-loading.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.gameplay-spinner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20rgba(255,\x20107,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top-color:\x20#ff6b00;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20loadingSpinner\x200.6s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20grid;\x20grid-template-columns:\x20repeat(4,\x201fr);\x20gap:\x208px;\x20width:\x20100%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + availableGameplayClips['slice'](0x0, 0x4)['map'](_0xa7a456 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-clip-id=\x22' + _0xa7a456['id'] + '\x22\x20class=\x22gameplay-card-option\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22position:\x20relative;\x20width:\x20100%;\x20aspect-ratio:\x201;\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20cursor:\x20pointer;\x20border:\x202px\x20solid\x20#e2e8f0;\x20transition:\x20all\x200.3s;\x20' + (selectedGameplayClip === _0xa7a456['id'] ? 'border-color:\x20#ff6b00;\x20box-shadow:\x200\x204px\x2012px\x20rgba(255,\x20107,\x200,\x200.2);' : '') + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<video\x20style=\x22width:\x20100%;\x20height:\x20100%;\x20object-fit:\x20cover;\x20display:\x20block;\x22\x20muted\x20loop\x20playsinline\x20autoplay>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<source\x20src=\x22/assets/' + _0xa7a456['filename'] + '\x22\x20type=\x22video/mp4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</video>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gameplay-loading\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gameplay-spinner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', console['log']('[Gameplay\x20Panel]\x20Cards\x20rendered'), _0x329856['querySelectorAll']('.gameplay-card-option')['forEach'](_0x2ae2db => {
                _0x2ae2db['addEventListener']('click', _0x32572b => {
                    _0x32572b['stopPropagation']();
                    const _0x37e702 = _0x2ae2db['dataset']['clipId'],
                        _0x23b55c = availableGameplayClips['find'](_0x22aa52 => _0x22aa52['id'] === _0x37e702);
                    console['log']('[Gameplay\x20Panel]\x20Card\x20clicked:', _0x37e702, _0x23b55c), selectGameplayClip(_0x37e702), _0x329856['querySelectorAll']('.gameplay-card-option')['forEach'](_0x3717de => {
                        _0x3717de['style']['borderColor'] = '#e2e8f0', _0x3717de['style']['boxShadow'] = 'none';
                    }), _0x2ae2db['style']['borderColor'] = '#ff6b00', _0x2ae2db['style']['boxShadow'] = '0\x204px\x2012px\x20rgba(255,\x20107,\x200,\x200.2)';
                    const _0x2c093b = _0x2ae2db['querySelector']('.gameplay-loading');
                    if (_0x2c093b)
                        _0x2c093b['classList']['add']('active');
                    setTimeout(() => {
                        const _0x116db5 = document['getElementById']('splitscreenGameplayVideo');
                        if (_0x116db5 && _0x23b55c) {
                            const _0x300414 = _0x116db5['querySelector']('source');
                            _0x300414 ? _0x300414['src'] = '/assets/' + _0x23b55c['filename'] : _0x116db5['src'] = '/assets/' + _0x23b55c['filename'], _0x116db5['load'](), _0x116db5['play']()['catch'](_0x3bd34b => {
                                console['log']('[Gameplay\x20Panel]\x20Autoplay\x20failed\x20(expected\x20in\x20some\x20browsers):', _0x3bd34b);
                            });
                        }
                        if (_0x2c093b)
                            _0x2c093b['classList']['remove']('active');
                    }, 0x12c);
                });
            });
        }
        console['log']('[Gameplay\x20Panel]\x20Hiding\x20other\x20views\x20and\x20showing\x20gameplay');
        const _0x3ddc37 = _0x32aff4['querySelectorAll']('.view');
        console['log']('[Gameplay\x20Panel]\x20Found', _0x3ddc37['length'], 'views\x20total'), _0x3ddc37['forEach'](_0x533ebc => {
            _0x533ebc['classList']['remove']('visible'), _0x533ebc['style']['display'] = 'none';
        }), _0x329856['classList']['add']('visible'), _0x329856['style']['display'] = 'flex', _0x32aff4['classList']['add']('is-expanded'), _0x32aff4['classList']['add']('slide-in'), _0x32aff4['classList']['add']('gameplay-mode'), window['gameplayClickOutsideHandler'] && (document['removeEventListener']('click', window['gameplayClickOutsideHandler']), window['gameplayClickOutsideHandler'] = null), console['log']('[Gameplay\x20Panel]\x20Classes\x20added\x20to\x20pill:', _0x32aff4['className']), console['log']('[Gameplay\x20Panel]\x20âœ…\x20Panel\x20expanded\x20and\x20displayed');
    }, document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', () => {
        console['log']('[Customizer]\x20DOM\x20ready,\x20initializing\x20in\x20500ms'), setTimeout(() => {
            _0x4d946f(), window['customizer'] = _0x58095c;
        }, 0x1f4);
    }) : (console['log']('[Customizer]\x20DOM\x20already\x20loaded,\x20initializing\x20in\x20500ms'), setTimeout(() => {
        _0x4d946f(), window['customizer'] = _0x58095c;
    }, 0x1f4));
})());