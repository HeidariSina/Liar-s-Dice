let players = {
  num: 2,
  player: null,
  profiles: [],
};
choises = {
  num: 0,
  dice: 0,
};

function makeFirstPage() {
  let main = document.querySelector(".main");
  main.innerHTML = "";
  let div = document.createElement("div");
  div.className = "textbox";
  let h = document.createElement("h1");
  h.className = "h1";
  h.innerText = "Welcome To Liar's Dice";
  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Start New Game";
  button.addEventListener("click", newGame);
  div.appendChild(h);
  div.appendChild(button);
  main.appendChild(div);
  players = {
    num: 2,
    player: null,
    profiles: [],
  };
}

function newGame() {
  let main = document.querySelector(".main");
  main.innerHTML = "";
  let div = document.createElement("div");
  div.className = "newGameBox";
  main.append(div);
  makeProfile();
  addAllPlayers();
  addAllButtons();
}

function addAllButtons() {
  let main = document.querySelector(".main");
  let div = document.createElement("div");
  div.className = "buttonBox";
  main.append(div);
  let Sbutton = document.createElement("button");
  Sbutton.className = "mainButton StartButton";
  Sbutton.innerText = "Start";
  div.append(Sbutton);
  let Cbutton = document.createElement("button");
  Cbutton.className = "mainButton CancleButton";
  Cbutton.innerText = "Cancle";
  Cbutton.addEventListener("click", makeFirstPage);
  div.append(Cbutton);
}

function addAllPlayers() {
  let main = document.querySelector(".newGameBox");
  main.innerHTML = "";
  for (let i = 0; i < players.num; i++) {
    if (i == 0) {
      addPlayerBox(i, "Player");
    } else {
      addPlayerBox(i, `A.I ${i}`);
    }
  }
  if (players.num < 6) {
    addNewPlayerBox();
  }
}
function addPlayerBox(index, text) {
  let main = document.querySelector(".newGameBox");
  let div = document.createElement("div");
  div.className = "box";
  let div3 = document.createElement("div");
  div3.className = "box2";
  div.appendChild(div3);
  let div4 = document.createElement("div");
  div4.className = "box3";
  div.appendChild(div4);
  let image = document.createElement("img");
  image.className = "pro";
  image.src = `assets/profile/${players.profiles[index]}.jpg`;
  div3.appendChild(image);
  let p = document.createElement("p");
  p.innerText = text;
  div4.appendChild(p);
  main.appendChild(div);
}

function addNewPlayerBox() {
  let main = document.querySelector(".newGameBox");
  let div = document.createElement("div");
  div.className = "box";
  let div2 = document.createElement("div");
  div2.className = "newPlayerBox";
  div.appendChild(div2);
  let button = document.createElement("button");
  button.className = "newplayerB";
  button.innerText = "+";
  let p = document.createElement("p");
  p.className = "newPlayerP";
  p.innerText = "Add New AI";
  div2.appendChild(button);
  div2.appendChild(p);
  main.append(div);
}

function makeProfile() {
  for (let i = 0; i < players.num; i++) {
    while (true) {
      let h = Math.floor(Math.random() * 8);
      let s = players.profiles.indexOf(h);
      if (s < 0) {
        players.profiles.push(h);
        break;
      }
    }
  }
}
function roll() {
  players.player = new Array(players.num);
  for (let i = 0; i < players.num; i++) {
    let roll = new Array(6);
    for (let j = 0; j < 6; j++) {
      roll[j] = Math.floor(Math.random() * 6 + 1);
    }
    players.player[i] = roll;
  }
}
makeFirstPage();
