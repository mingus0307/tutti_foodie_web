const { createServer } = require('node:http'); 
const fs = require('fs'); 
const path = require('path'); 

const hostname = '127.0.0.1'; 
const port = 3000; 

const server = createServer((req, res) => {

    let filePath = '.' + req.url;
    if (filePath === './'){
        filePath = './index.html'; 
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
            res.end('File not in the directory lol'); 
        }else {
            res.writeHead(200, {'Content-Type': contentType}); 
            res.end(content)
        }
    })
}); 

server.listen(port, hostname, () => {
    console.log('Server running on at http://' + hostname + ':' + port + '/'); 
}); 