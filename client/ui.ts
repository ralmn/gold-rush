import * as network from "./network";
import gameData from "./gameData";

let startDiv = <HTMLDivElement>document.querySelector("body > .start");
(<HTMLFormElement>startDiv.querySelector("form")).addEventListener("submit", onStartFormSubmit);

let gameDiv = <HTMLDivElement>document.querySelector("body > .game");
let userDiv = <HTMLDivElement>document.querySelector("body > header .user");

export function showGame() {
  (<HTMLDivElement>document.querySelector("body > .connecting")).hidden = true;
  
  if (gameData.pub != null) {
    gameDiv.hidden = false;
    userDiv.hidden = false;
  } else {
    startDiv.hidden = false;
  }
}

function onStartFormSubmit(event: Event) {
  let form = <HTMLFormElement>this;
  if (!form.checkValidity()) return;
  
  event.preventDefault();
  
  let displayName = (<HTMLInputElement>form.querySelector("input[type=text]")).value;
  network.socket.emit("setDisplayName", displayName);
}
