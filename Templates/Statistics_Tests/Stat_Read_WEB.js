const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile('Test_Stats.txt', (err,data) => {
    if(err){
        throw 'Stats is not created or not found!';
    };
    console.log('Statistics found!');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
}).listen(0003);