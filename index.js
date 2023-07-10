// Player name and scores
var player1 = {
    name: "Player 1",
    score: 0
  };
  var player2 = {
    name: "Player 2",
    score: 0
  };
  
  // Function to change the player name
  function editNames() {
    player1.name = prompt("Change Player 1 name");
    player2.name = prompt("Change Player 2 name");
  
    document.querySelector("p.Player1").innerHTML = player1.name;
    document.querySelector("p.Player2").innerHTML = player2.name;
  }
  
  // Function to roll the dice
  function rollTheDice() {
    setTimeout(function () {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
      document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");
  
      if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
      } else if (randomNumber1 < randomNumber2) {
        player2.score++;
        document.querySelector("h1").innerHTML = (player2.name + " WINS!🚩");
        document.querySelector("#scorePlayer2").innerHTML = player2.score;
      } else {
        player1.score++;
        document.querySelector("h1").innerHTML = ("🚩" + player1.name + " WINS!");
        document.querySelector("#scorePlayer1").innerHTML = player1.score;
      }
    }, 2500);
  }
  