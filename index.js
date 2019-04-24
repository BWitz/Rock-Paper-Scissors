document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".play").addEventListener("click", () => {
        let audioObject = document.getElementById("background-music");
        audioObject.play();
    })
    
    document.querySelector(".pause").addEventListener("click", () => {
        let audioObject = document.getElementById("background-music");
        audioObject.pause();
    })
    
    document.querySelector(".play-button").addEventListener("click", () => playGame());
})

function addPlayerOptions() {
    let playerchoices = document.querySelector(".player-choices");
    playerchoices.innerHTML = `<button class="option option-one">Scissors</button>
    <button class="option option-two">Paper</button>
    <button class="option option-three">Rock</button>`;
}

function firstHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Rock_Hand_Signal.svg" alt="Rock-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Rock_Hand_Signal.svg" alt="Rock-Hand-Sign" height=350px  width=300px>`;
    setTimeout(() => {
        secondHandSign();
    }, 800);
}

function secondHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
    setTimeout(() => {
        thirdHandSign()
    }, 800);
}

function thirdHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
    setTimeout(() => {
        fourthHandSign();
    }, 800);
}

function fourthHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Neutral_Hand_Signal.svg" alt="Neutral-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Neutral_Hand_Signal.svg" alt="Neutral-Hand-Sign" height=350px  width=300px>`;
}

function setPlayerChoice() {
    let player_choice = "";

    let player_choice_scissors = document.querySelector(".option-one");
    let player_choice_paper = document.querySelector(".option-two");
    let player_choice_rock = document.querySelector(".option-three");

    player_choice_scissors.addEventListener("click", () => {
        return player_choice = "scissors";
    });
    player_choice_paper.addEventListener("click", () => {
        return player_choice = "paper";
    })
    player_choice_rock.addEventListener("click", () => {
        return player_choice = "rock";
    })

    setTimeout(() => {
        finalPlayerChoice(player_choice)
    }, 3500);
}

function finalPlayerChoice(player_choice) {
    let firstPlayerBox = document.querySelector(".left-box");
    switch(player_choice) {
        case "scissors":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Scissors_Hand_Signal.svg" name="scissors" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
        break;

        case "paper":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Paper_Hand_Signal.svg" name="paper" alt="Paper-Hand-Sign" height=350px  width=300px>`;
        break;

        case "rock":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Rock_Hand_Signal.svg" name="rock" alt="Rock-Hand-Sign" height=350px  width=300px>`;
        break;

        default:
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Neutral_Hand_Signal.svg" name="default-hand" alt="Neutral-Hand-Sign" height=350px  width=300px>`;
        break;
    }
}

generateRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRoundedDown = Math.floor(randomNumber);
    return randomNumberRoundedDown;
}

function generateComputerHandsign() {
    let randomNumber = this.generateRandomNumber(1, 4);
    let computerPlayerBox = document.querySelector(".right-box");
    switch(randomNumber) {
        case 1:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" name="scissors" height=350px  width=300px>`;
        break;
        case 2:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" name="paper" height=350px  width=300px>`;
        break;
        case 3:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Rock_Hand_Signal.svg" alt="Rock-Hand-Sign" name="rock" height=350px  width=300px>`;
        break;
        default:
        alert("Error! Computer did not play their hand! Try refreshing the site.");
    }
    removePlayerOptions();
    replacePlayButton();
}

function removePlayerOptions() {
    let playerchoices = document.querySelector(".player-choices");
    playerchoices.innerHTML = ``;
}

function removePlayButton() {
    let playButtonContainer = document.querySelector(".play-button-container");
    playButtonContainer.innerHTML = ``;
}

function replacePlayButton() {
    let playButtonContainer = document.querySelector(".play-button-container");
    playButtonContainer.innerHTML = `<button class="play-button">Play</button>`;
    document.querySelector(".play-button").addEventListener("click", () => playGame());
}

function evaluateWinner() {
    const playerChoice = document.querySelector(".player-one-hand-signal");
    const computerChoice = document.querySelector(".player-two-hand-signal");
    const outcomeDisplay = document.querySelector(".player-outcome");
    if (playerChoice.name === computerChoice.name) {
        outcomeDisplay.innerText = "Outcome: Draw!"
    } else if ((playerChoice.name === "scissors") && (computerChoice.name === "paper")) {
        outcomeDisplay.innerText = "Outcome: You won!";
        incrementWinStreak();
    } else if ((playerChoice.name === "paper") && (computerChoice.name === "rock")) {
        outcomeDisplay.innerText = "Outcome: You won!"
        incrementWinStreak();
    } else if ((playerChoice.name === "rock") && (computerChoice.name === "scissors")) {
        outcomeDisplay.innerText = "Outcome: You won!"
        incrementWinStreak();
    } else if (playerChoice.name === "default-hand"){
        alert("Please select Rock, Paper, or Scissors! They're located under the left-hand after you hit play, which will reveal your choice.")
    } else {
        outcomeDisplay.innerText = "Outcome: You lost."
        resetWinStreak();
    }
}

function incrementWinStreak() {
    const winstreak = document.querySelector(".streak");
    let previousStreakArray = winstreak.innerText.split(' ');
    let previousWinStreakNumber = parseInt(previousStreakArray[2], 10);
    let incrementedStreak = previousWinStreakNumber += 1;
    previousStreakArray.pop();
    previousStreakArray.push(incrementedStreak);
    let newStreak = previousStreakArray.join(' ')
    winstreak.innerText = `${newStreak}`;
}

function resetWinStreak() {
    const winstreak = document.querySelector(".streak");
    winstreak.innerText = `Win Streak: 0`;
}

function playGame(){
    removePlayButton();
    addPlayerOptions();
    firstHandSign();
    setPlayerChoice();
    setTimeout(() => {
        this.generateComputerHandsign();
    }, 3500);
    setTimeout(() => {
        evaluateWinner();
    }, 4000);
}