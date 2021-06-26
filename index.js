function diceRoll() {

  var imageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
    "images/dice4.png", "images/dice5.png", "images/dice6.png"
  ];

  var randomNumber1 = Math.floor(Math.random() * 6);
  var randomNumber2 = Math.floor(Math.random() * 6);


  document.querySelector(".img1").setAttribute("src", imageArray[randomNumber1]);
  document.querySelector(".img2").setAttribute("src", imageArray[randomNumber2]);

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 has won!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 has won!";
  } else {
    document.querySelector("h1").innerText = "It's a draw!";
  }
}




diceRoll();
