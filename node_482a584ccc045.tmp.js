import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", data => message(data, ws)); 
 // ws.on("close", close());

  ws.send("something");
});

function close() {
    console.log('client disconect');
}

function message(data, ws) {
    console.log("received: ", data);
    ws.send(data);
}





