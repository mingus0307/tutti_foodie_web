const { createServer } = require('node:http'); 
const fs = require('fs'); 
const path = require('path'); 

const hostname = '0.0.0.0'; 
const port = 3000; 

const BASE_DIR = path.join(__dirname, '.');  // Das ist /app im Container

const server = createServer((req, res) => {

    let filePath = path.join(BASE_DIR, req.url);
    if (req.url === '/'){
        filePath = path.join(BASE_DIR, 'index.html'); 
    } 

    const extension = path.extname(filePath); 

    const contentType = {
        '.html': 'text/html', 
        '.css': 'text/css', 
        '.js': 'text/javascript'
    }[extension] || 'text/plain'; 

    fs.readFile(filePath, (err, content) => {
        if (err){
            res.writeHead(404); 
            res.end('File not in the directory lol: 404 \n'); 
        }else {
            // Header für PDFs optimieren
            const headers = {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600'
            };
            
            // Spezielle Header für PDFs
            if (extension === '.pdf') {
                headers['Content-Disposition'] = 'inline';
                headers['Accept-Ranges'] = 'bytes';
            }
            
            console.log(`200: ${filePath}`);
            res.writeHead(200, headers); 
            res.end(content);
        }
    })
}); 

server.listen(port, hostname, () => {
    console.log('Server running on at http://' + hostname + ':' + port + '/'); 
}); 