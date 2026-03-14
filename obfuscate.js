const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const excludeFiles = ['obfuscate.js', 'node_modules'];

function isExcluded(filePath) {
    return excludeFiles.some(exclude => filePath.includes(exclude));
}

function obfuscateDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            obfuscateDir(filePath);
        } else if (file.endsWith('.js') && !isExcluded(filePath)) {
            try {
                const code = fs.readFileSync(filePath, 'utf8');
                const obfuscated = JavaScriptObfuscator.obfuscate(code, {
                    compact: true,
                    controlFlowFlattening: true,
                    deadCodeInjection: true,
                    debugProtection: true,
                    debugProtectionInterval: true,
                    disableConsoleOutput: false,
                    identifierNamesGenerator: 'hexadecimal',
                    log: false,
                    renameGlobals: false,
                    rotateStringArray: true,
                    selfDefending: true,
                    stringArray: true,
                    stringArrayThreshold: 0.75
                }).obfuscatedCode;
                
                fs.writeFileSync(filePath, obfuscated);
                console.log(`✓ Obfuscated: ${filePath}`);
            } catch (error) {
                console.error(`✗ Error obfuscating ${filePath}:`, error.message);
            }
        }
    });
}

console.log('🔐 Starting JavaScript obfuscation...\n');
obfuscateDir(path.join(__dirname, 'js'));
console.log('\n✅ Obfuscation complete!');
