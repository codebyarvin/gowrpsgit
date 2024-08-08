const game = () => {
  let playerscore = 0;
  let computerscore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Add shaking animation
        playerHand.style.animation = "shake 1s ease";
        computerHand.style.animation = "shake 1s ease";

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;

          compareHands(this.textContent, computerChoice);

          // Remove animations after completion
          playerHand.style.animation = "";
          computerHand.style.animation = "";
        }, 1000);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = playerscore;
    computerScore.textContent = computerscore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    // Add the animate class to trigger the animation
    winner.classList.add("animate");

    // Set a timeout to remove the animate class after the animation duration
    setTimeout(() => {
      winner.classList.remove("animate");
    }, 1000); // Match the duration of the animation

    if (playerChoice === computerChoice) {
      winner.textContent = "Match tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerscore++;
      } else {
        winner.textContent = "Computer Wins";
        computerscore++;
      }
      updateScore();
      return;
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        computerscore++;
      } else {
        winner.textContent = "Player Wins";
        playerscore++;
      }
      updateScore();
      return;
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        computerscore++;
      } else {
        winner.textContent = "Player Wins";
        playerscore++;
      }
      updateScore();
      return;
    }
  };

  startGame();
  playMatch();
};

game();