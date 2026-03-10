const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("Servidor WebSocket rodando na porta 8080");

wss.on('connection', (ws) => {
    console.log("Cliente conectado");

    ws.send("Bem-vindo ao servidor WebSocket!");

    ws.on('message', (message) => {
        console.log("Mensagem recebida:", message.toString());

        ws.send("Servidor recebeu: " + message);
    });

    ws.on('close', () => {
        console.log("Cliente desconectado");
    });
});