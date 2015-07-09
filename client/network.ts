import * as io from "socket.io-client";
import gameData from "./gameData";
import * as ui from "./ui";

export let socket = io.connect(null, { transports: [ "websocket" ], reconnect: false });

socket.on("welcome", onWelcome);

function onWelcome(pub) {
  gameData.pub = pub;
  
  if (gameData.pub != null) {
    gameData.settlementsById = {};
  
    for (let settlement of gameData.pub.faction.settlements) {
      gameData.settlementsById[settlement.id] = settlement;
    }
  }
  
  ui.showGame();
}
