const http = require('http');
const fs = require('fs');
const url = require('url');
const multer = require('multer');


const server = http.createServer(function (req,res){


    if (req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("This is Home Page");
        res.end();

    }
    else if(req.url=="/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is About Page");
        res.end();

    }
    else if(req.url=="/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is Contact Page");
        res.end();

    }
    else if(req.url=="/file-write") {

        fs.writeFile('demo.txt', 'hello world', function (error) {


            if (error) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write fail");
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write Success");
                res.end();
            }
        });
    }

    else if ( req.url == '/uploads') {

        const upload = multer({ dest: 'uploads/' });

        upload.single('file')(req, res, (err) => {
            if (err) {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.write('Error uploading file');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File uploaded successfully');
                res.end();
            }
        });
    }



});



server.listen(5500);
console.log('server run success ,it is listening port 5500')


