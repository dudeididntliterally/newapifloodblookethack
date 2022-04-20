let nameOfbot = prompt("Name of bots: ")
let gameId = prompt("Enter Game Pin: ");
let numberOfBots = prompt("How many Bots: ")
let botsToJoin;

for(botsToJoin = 0; botsToJoin < numberOfBots; botsToJoin++)

fetch("https://fb.blooket.com/c/firebase/join/id", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.blooket.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  //adding vars to body for correct values
  "body": "{\"id\":\"" + gameId+ "\",\"name\":\"" + nameOfbot + botsToJoin+ "\"}",
  "method": "PUT",
  "mode": "cors",
  "credentials": "omit"
});
