document.querySelector(".play").addEventListener("click", () => {
    let audioObject = document.getElementById("background-music");
    audioObject.play();
})

document.querySelector(".pause").addEventListener("click", () => {
    let audioObject = document.getElementById("background-music");
    audioObject.pause();
})

document.querySelector(".play-button").addEventListener("click", () => playGame());

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
    }, 1200);
}

function secondHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
    setTimeout(() => {
        thirdHandSign()
    }, 1200);
}

function thirdHandSign() {
    let firstPlayerBox = document.querySelector(".left-box");
    let computerPlayerBox = document.querySelector(".right-box");
    firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
    computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
    setTimeout(() => {
        fourthHandSign();
    }, 1200);
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
    }, 5000);
}

function finalPlayerChoice(player_choice) {
    let firstPlayerBox = document.querySelector(".left-box");
    switch(player_choice) {
        case "scissors":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
        break;

        case "paper":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
        break;

        case "rock":
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Rock_Hand_Signal.svg" alt="Rock-Hand-Sign" height=350px  width=300px>`;
        break;
        default:
            firstPlayerBox.innerHTML = `<img class="player-one-hand-signal" src="Assets/Neutral_Hand_Signal.svg" alt="Neutral-Hand-Sign" height=350px  width=300px>`;
        break;
    }
}

generateRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRoundedUp = Math.floor(randomNumber);
    return randomNumberRoundedUp;
}

function generateComputerHandsign() {
    let randomNumber = this.generateRandomNumber(1, 4);
    let computerPlayerBox = document.querySelector(".right-box");
    switch(randomNumber) {
        case 1:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
        break;
        case 2:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Paper_Hand_Signal.svg" alt="Paper-Hand-Sign" height=350px  width=300px>`;
        break;
        case 3:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Rock_Hand_Signal.svg" alt="Rock-Hand-Sign" height=350px  width=300px>`;
        break;
        default:
        computerPlayerBox.innerHTML = `<img class="player-two-hand-signal" src="Assets/Scissors_Hand_Signal.svg" alt="Scissors-Hand-Sign" height=350px  width=300px>`;
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

function playGame(){
    removePlayButton();
    addPlayerOptions();
    firstHandSign();
    setPlayerChoice();
    setTimeout(() => {
        this.generateComputerHandsign();
    }, 5000);
}