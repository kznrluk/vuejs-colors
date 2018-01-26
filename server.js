// learn js freamwork server

const handler = () => console.log(resJson.color)
const server    = require('http').createServer(handler);
const fs = require('fs')
const EventEmitter = require('events').EventEmitter;
const input = new EventEmitter();

const colors = ['#0D47A1','#1B5E20','#d32f2f','#3D5AFE','#FFAB00','#9CCC65','#42A5F5']

const changeColor = () => {
    resJson.color = colors[Math.floor(Math.random() * colors.length)]
}

server.on('request', (req, res) => {
    const response = data => {
        res.writeHead(200,{ 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
        res.write(data);
        res.end();
    }

    if(req.url === '/REST/COLOR'){
        response(JSON.stringify(resJson));
        changeColor();
    }
});

let resJson = {};

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
    if(chunk.indexOf('SET') >= 0){
        resJson.color = chunk.split(/\/|\s/)[1]
        console.log('SET OK')
    }
});

server.listen(3000);
console.log('localhost:3000');