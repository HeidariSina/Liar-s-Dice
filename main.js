let players = {
  num: 2,
  profiles: [],
  playersInfo: [
    {
      name: "Player",
      lives: 3,
      dice: [],
      profileNumber: 0,
      lastBet: { dice: 0, num: 0 },
    },
    {
      name: "A.I 1",
      lives: 3,
      dice: [],
      profileNumber: 0,
      lastBet: { dice: 0, num: 0 },
    },
  ],
};
let LastChoises = {
  turn: 0,
  num: 0,
  dice: 1,
};
let dices = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
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
    profiles: [],
    playersInfo: [
      {
        name: "Player",
        lives: 3,
        dice: [],
        profileNumber: 0,
        lastBet: { dice: 0, num: 0 },
      },
      {
        name: "A.I 1",
        lives: 3,
        dice: [],
        profileNumber: 0,
        lastBet: { dice: 0, num: 0 },
      },
    ],
  };
  dices = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  LastChoises = {
    turn: 0,
    num: 0,
    dice: 1,
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
function addNewPlayer() {
  players.num = players.num + 1;
  let h;
  while (true) {
    h = Math.floor(Math.random() * 8);
    let s = players.profiles.indexOf(h);
    if (s < 0) {
      players.profiles.push(h);
      break;
    }
  }
  players.playersInfo.push({
    lives: 3,
    name: `A.I ${players.num - 1}`,
    profileNumber: h,
    dice: [],
    lastBet: { dice: 0, num: 0 },
  });
  addAllPlayers();
}

function addAllButtons() {
  let main = document.querySelector(".main");
  let div = document.createElement("div");
  div.className = "buttonBox";
  main.append(div);
  let Sbutton = document.createElement("button");
  Sbutton.className = "mainButton StartButton";
  Sbutton.innerText = "Start";
  Sbutton.addEventListener("click", startGame);
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
      addPlayerBox(i);
    } else {
      addPlayerBox(i);
    }
  }
  if (players.num < 6) {
    addNewPlayerBox();
  }
}
function addPlayerBox(index) {
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
  image.src = `assets/profile/${players.playersInfo[index].profileNumber}.jpg`;
  div3.appendChild(image);
  let p = document.createElement("p");
  p.innerText = players.playersInfo[index].name;
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
  div.addEventListener("click", addNewPlayer);
  main.append(div);
}

function makeProfile() {
  for (let i = 0; i < players.num; i++) {
    while (true) {
      let h = Math.floor(Math.random() * 8);
      let s = players.profiles.indexOf(h);
      if (s < 0) {
        players.profiles.push(h);
        players.playersInfo[i].profileNumber = h;
        break;
      }
    }
  }
}
function roll() {
  players.playerDices = new Array(players.num);
  for (let i = 0; i < players.num; i++) {
    let roll = new Array(6);
    for (let j = 0; j < 6; j++) {
      let numm = Math.floor(Math.random() * 6 + 1);
      roll[j] = numm;
      switch (numm) {
        case 1:
          dices[1] = dices[1] + 1;
          break;
        case 2:
          dices[2] = dices[2] + 1;
          break;
        case 3:
          dices[3] = dices[3] + 1;
          break;
        case 4:
          dices[4] = dices[4] + 1;
          break;
        case 5:
          dices[5] = dices[5] + 1;
          break;
        case 6:
          dices[6] = dices[6] + 1;
          break;
      }
    }
    players.playersInfo[i].dice = roll;
  }
  console.log(players.playersInfo);
  console.log(dices);
}

function startGame() {
  roll();
  makeFirstPicker();
  makeFirstSection();
  makeSecondSection();
}

function makeFirstSection() {
  let main = document.querySelector(".main");
  main.innerHTML = "";

  let div = document.createElement("div");
  div.className = "playersBox";
  main.appendChild(div);

  let h2 = document.createElement("h2");
  h2.className = "h2";
  h2.innerText = `Turn: ${players.playersInfo[LastChoises.turn].name}`;
  div.appendChild(h2);
  makeAllcards();
  makePlayersButton();
}

function makePlayersButton() {
  let main = document.querySelector(".playersBox");
  let div = document.createElement("div");
  div.className = "playerButtonBox";
  main.appendChild(div);
  let div2 = document.createElement("div");
  div2.innerText = "Dice: ";
  div.appendChild(div2);
  let in1 = document.createElement("input");
  in1.type = "number";
  in1.name = "dice";
  in1.id = "dice";
  in1.min = 1;
  in1.max = 6;
  div2.appendChild(in1);
  let div3 = document.createElement("div");
  div3.innerText = "Number: ";
  div.appendChild(div3);
  let in2 = document.createElement("input");
  in2.type = "number";
  in2.name = "num";
  in2.id = "num";
  if (LastChoises.num == 0) in2.min = 1;
  else in2.min = LastChoises.num;
  div3.appendChild(in2);
  let sButton = document.createElement("button");
  sButton.innerHTML = "Submit";
  sButton.className = "playerButton";
  div.appendChild(sButton);
  let lButton = document.createElement("button");
  lButton.innerHTML = "Lie";
  lButton.className = "playerButton";
  div.appendChild(lButton);
  let fButton = document.createElement("button");
  fButton.innerHTML = "FOLD";
  fButton.className = "foldButton";
  fButton.addEventListener("click", FOLD);
  div.appendChild(fButton);
}

function makeAllcards() {
  let main = document.querySelector(".playersBox");
  let div = document.createElement("div");
  div.className = "playerCards";
  main.appendChild(div);
  for (let j = 0; j < players.num; j++) {
    makeCards(j);
  }
}

function makeCards(index) {
  let main = document.querySelector(".playerCards");
  let div = document.createElement("div");
  div.className = "card";
  let image = document.createElement("img");
  image.className = "icon";
  image.src = `/assets/profile/${players.playersInfo[index].profileNumber}.jpg`;
  div.appendChild(image);
  let p = document.createElement("p");
  p.innerText = players.playersInfo[index].name;
  div.appendChild(p);
  let div2 = document.createElement("div");
  div2.className = "healthBar";
  div.appendChild(div2);
  for (let j = 0; j < 3; j++) {
    let Himage = document.createElement("img");
    Himage.className = "hearthIcon";
    if (players.playersInfo[index].lives >= j + 1) {
      Himage.src = "./assets/hearth/full.svg";
    } else {
      Himage.src = "./assets/hearth/lost.svg";
    }
    div2.appendChild(Himage);
  }
  let p2 = document.createElement("p");
  p2.innerText = "Last Bet:";
  div.appendChild(p2);
  if (players.playersInfo[index].lastBet.num == 0) {
    let p2 = document.createElement("p");
    p2.innerText = "Nothing";
    div.appendChild(p2);
  } else {
    let div2 = document.createElement("div");
    div2.className = "LastBet";
    div.appendChild(div2);

    let p2 = document.createElement("p");
    p2.innerText = `${players.playersInfo[index].lastBet.num} X`;
    div2.appendChild(p2);

    let image = document.createElement("img");
    image.className = "icon";
    image.src = `/assets/dice/dice${players.playersInfo[index].lastBet.dice}.jpg`;
    div2.appendChild(image);
  }
  main.appendChild(div);
}

function makeSecondSection() {
  let main = document.querySelector(".main");
  let div = document.createElement("div");
  div.className = "playerDiceBox";
  main.append(div);
  let p = document.createElement("p");
  p.className = "dicePText";
  p.innerText = "Your Dices:";
  div.append(p);
  let div2 = document.createElement("div");
  div2.className = "diceImageDiv";
  div.append(div2);
  for (let i = 0; i < 5; i++) {
    let image = document.createElement("img");
    image.className = "diceImage";
    image.src = `/assets/dice/dice${players.playersInfo[0].dice[i]}.png`;
    div2.append(image);
  }
}

function makeFirstPicker() {
  let numm = Math.floor(Math.random() * players.num);
  LastChoises.turn = numm;
}

function FOLD() {
  if (confirm("You Want to FOLD?") == true) {
    makeFirstPage();
  }
}
makeFirstPage();
