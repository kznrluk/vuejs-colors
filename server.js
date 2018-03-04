// learn js freamwork server

const server    = require('http').createServer(handler);
const fs        = require('fs')
const EE        = require('events').EventEmitter;
const input     = new EE();

const colors = ['#0D47A1','#1B5E20','#d32f2f','#3D5AFE','#FFAB00','#9CCC65','#42A5F5']
process.stdin.resume();
process.stdin.setEncoding('utf8');

const changeColor = () => {
    resJson.color = colors[Math.floor(Math.random() * colors.length)]
}

const handler = () => console.log(resJson.color)
let resJson = {};

server.on('request', (req, res) => {
    const response = (data, contentType) => {
        res.writeHead(200,{ 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
        res.write(data);
        res.end();
    }

    if(req.url === '/API/COLOR'){
        response(JSON.stringify(resJson, 'text/plain'));
        changeColor();
    }
});

process.stdin.on('data', chunk => {
    if(chunk.indexOf('SET') >= 0){
        resJson.color = chunk.split(/\/|\s/)[1]
        console.log('SET OK')
    }
});

server.listen(3000);
console.log('localhost:3000');