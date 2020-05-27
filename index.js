import * as grab from 'crabby-grab';
let hasVisited = localStorage.getItem("hasVisited");
if (!hasVisited) {
  for (let i = 1; i < 5; i++) {
    window.localStorage.setItem("player" + i + "score", 0);
  }
  window.localStorage.setItem("hasVisited", true);
} else {
  updatePointValues();
}
grab.class("add-button", 0).addEventListener("click", addHandler);
grab.class("shade", 0).addEventListener("click", exitAdding);
grab.class("confirm-add", 0).addEventListener("click",
  finishAdding);
let islands = ["Agat", "Aniael (Eriel)", "Ar", "Ave-rar (Rote)", "Banda", "Bar-ona", "Barra (Nias)", "Barrow (Alva)", "Bel", "Belona (Vlarm)", "Blair (Agata)", "Ching (West Lungdo)", "Chong (East Lungdo)", "Elk", "Eta (Broland)", "Fandr (Adrar)", "Ged (Kidal)", "Jasper (Leticia)", "Kota (Nias)", "Kutai", "Lestor", "Mat (Fada)", "Mel", "Menna (Omskar)", "Morellia (Parl)", "Morlin (Sorong)", "Moura", "North Sinjai", "Oem (Dush)", "Olmstead (Ulei)", "Omskar City (Omskar)", "Sarmi", "Sonson (Enga)", "South Sinjai", "Sulina", "Surt (Adrar)", "Tavoy (Nias)", "Toba", "Ur", "Vale (Ti-ongon)", "Van (Dorgo)", "Won", "Wuhan (Ti-ongon)", "Yulinga (Dorgo)"];
let points = [20, 21, 4, 15, 24, 24, 18, 20, 8, 23, 16, 10, 10, 24, 13, 19, 17, 13, 15, 17, 24, 14, 22, 20, 25, 13, 12, 12, 15, 23, 18, 15, 9, 12, 14, 20, 15, 10, 5, 25, 25, 23, 25, 25]
for (let i = 0; i < islands.length; i++) {
  let o = document.createElement("option");
  o.appendChild(document.createTextNode(islands[i]));
  o.value = points[i];
  grab.id("islands").appendChild(o);
}

function addHandler() {
  grab.class("add", 0).classList.replace("unfocused", "focused");
  grab.class("shade", 0).classList.replace("invisible", "visible");
}

function exitAdding() {
  grab.class("add", 0).classList.replace("focused", "unfocused");
  grab.class("shade", 0).classList.replace("visible", "invisible");
}

function finishAdding() {
  let islandToAdd = grab.id("islands");
  let selectedPlayer = grab.id("players");
  let playerToAdd = selectedPlayer.options[selectedPlayer.selectedIndex].value;
  let pointsToAdd = parseInt(islandToAdd.options[islandToAdd.selectedIndex].value);
  pointsToAdd += parseInt(window.localStorage.getItem("player" + playerToAdd + "score"));
  window.localStorage.setItem("player" + playerToAdd + "score", pointsToAdd);
  exitAdding();
  updatePointValues();
}

function updatePointValues() {
  for (let i = 1; i < 5; i++) {
    grab.class("player-score", i - 1).innerText = window.localStorage.getItem("player" + i + "score");
  }
}