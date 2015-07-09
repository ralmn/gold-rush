import * as fs from "fs";
import * as express from "express";
import * as http from "http";
import * as sio from "socket.io";

import log from "./log";

let app = express();
app.set("port", 6541);

app.use("/", express.static("../public"));

let server = http.createServer(app);
let io = sio(server);

io.on("connection", (socket) => {
  socket.emit("welcome", null);
  
  socket.on("setDisplayName", (displayName: string) => { log(socket.id, displayName); })
});

server.listen(app.get("port"), () => {
  log(`Server started on port ${app.get("port")}.`);
});
