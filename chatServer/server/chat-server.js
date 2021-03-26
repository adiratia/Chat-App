const WebSocket= require('ws');
var models = require('./server.js').models;

const ws= new WebSocket.Server({port:4444});

ws.on('connection' ,(ws)=>{
    ws.on('message', (message)=>{
        console.log('Got message ', JSON.parse(message));
    });
})