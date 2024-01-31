import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// подключённые клиенты
var clients = {};

wss.on('connection', function connection(ws) {  
  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', close);
});

function close() {
    console.log('client disconnect');
}