import * as fs from "fs";
import * as express from "express";
import * as http from "http";
import * as sio from "socket.io";

let app = express();
app.set("port", 6541);

app.use("/", express.static("../public"));

let server = http.createServer(app);
let io = sio(server);

server.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}.`);
});
