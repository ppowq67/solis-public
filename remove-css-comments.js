const fs = require('fs');
const path = require('path');

function removeCommentsFromCSS(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove all /* */ comments (including /** */)
        const originalLength = content.length;
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Clean up excess whitespace
        content = content.replace(/\n\s*\n/g, '\n');
        
        fs.writeFileSync(filePath, content);
        console.log(`  ✓ Removed comments (${originalLength} -> ${content.length} bytes)`);
    } catch (error) {
        console.error(`  ✗ Error processing ${filePath}:`, error.message);
    }
}

function processDirectory(dir) {
    try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDirectory(fullPath);
            } else if (file.endsWith('.css')) {
                removeCommentsFromCSS(fullPath);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
}

console.log('Starting CSS comment removal...\n');
processDirectory(path.join(__dirname, 'style'));
console.log('\n✓ CSS comment removal complete!');
