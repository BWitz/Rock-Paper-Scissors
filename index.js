document.addEventListener("DOMContentLoaded", () => {
    //We place the following functions under DOMContentLoaded because otherwise, the script
    //would return errors onLoad until the DOM mounts.
    document.querySelector(".play").addEventListener("click", () => {
        let audioObject = document.getElementById("background-music");
        audioObject.play();
    })
    
    document.querySelector(".pause").addEventListener("click", () => {
        let audioObject = document.getElementById("background-music");
        audioObject.pause();
    })
    // Lines 4-11 enable the play and pause functions to interact accordingly with the mp3 file
    // within index.html. A click on the respective button, and the function will carry out to 
    // play or pause music.
    
    document.querySelector(".play-button").addEventListener("click", () => playGame());
    // The play function is tied to the play button at the bottom of the screen. 
})

function addPlayerOptions() {
    let playerchoices = document.querySelector(".player-choices");
    playerchoices.innerHTML = `<button class="option option-one">Scissors</button>
    <button class="option option-two">Paper</button>
    <button class="option option-three">Rock</button>`;
}
// addPlayerOptions selects the container div within index.html that will house the buttons,
// and places the buttons there accordingly. They're able to be placed where they should be on
// on the screen due to pre-existing css selectors. 

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

// Lines 31-66 select the boxes on the left and right sides of the screen, and using setTimeOut
// to ensure that they happen synchronously, they change the image within each box to the beginning
// customs of Rock-Paper-Scissors (says shoot!).

function setPlayerChoice() {
    let player_choice = "";
    // The function begins as setting player_choice as an empty string, so
    // the player has time to select an option, which will replace the 
    // empty string. If no option is selected, the string will remain empty,
    // which will prompt an alert saying that an option must be chosen.

    let player_choice_scissors = document.querySelector(".option-one");
    let player_choice_paper = document.querySelector(".option-two");
    let player_choice_rock = document.querySelector(".option-three");
    // Lines 79-81 set variables for the options that appear on the screen.

    player_choice_scissors.addEventListener("click", () => {
        return player_choice = "scissors";
    });
    player_choice_paper.addEventListener("click", () => {
        return player_choice = "paper";
    })
    player_choice_rock.addEventListener("click", () => {
        return player_choice = "rock";
    })
    // Lines 84-92 add event listeners to each option, which upon clicking,
    // will set player_choice to the button's respective value.

    setTimeout(() => {
        finalPlayerChoice(player_choice)
    }, 3500);

    // Lines 96-98 will occur within 3.5 seconds, where a player must make their choice
    // of hand signal to play. finalPlayerChoice will take in the variable player_choice,
    // and return different images / responses based on what player_choice is.
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

// Lines 107 - 124 check what the argument of player_choice is to the function,
// and based on what is passed, returns a hand signal that the player chose. 
// If the argument passed is anything other than rock, paper, or scissors, 
// it will return an idle hand that the box began with, indicating no choice has
// been made. Based on the callback function, the only option that could hit default 
// is an empty string.

generateRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRoundedDown = Math.floor(randomNumber);
    return randomNumberRoundedDown;
}

// generateRandomNumber is a function that uses the math library to return a random 
// number between the parameters of arguments that it's given.

function generateComputerHandsign() {
    let randomNumber = this.generateRandomNumber(1, 4);
    // We use the function generateRandomNumber to set a variable, which we'll use to
    // make the computer player's handsign choice random. 
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
    // Based on the random number variable, the computer player will play rock, paper,
    // or scissors. The default is in place in case none of the cases are met.
    removePlayerOptions();
    replacePlayButton();
    // removePlayerOptions gets rid of the button options the player can select from.
    // replacePlayButton restores the play button on the screen, which is taken off
    // once the game begins.
}

function removePlayerOptions() {
    let playerchoices = document.querySelector(".player-choices");
    playerchoices.innerHTML = ``;
}

// removePlayerOptions is a function that gets rid of the player options when the game
// is over, so the player cannot change their hand after the computer has selected their option.

function removePlayButton() {
    let playButtonContainer = document.querySelector(".play-button-container");
    playButtonContainer.innerHTML = ``;
}

// removePlayerOptions is called once the game begins, to avoid asynchronous conflicts
// that occur when the play-button is selected multiple times in a row.

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

// evaluteWinner is a function that checks on the hand signal that the player chose,
// and the hand signal that the computer chose. Based on the conventional rules of 
// rock paper scissors, the streak element on the top of the page will be incremented
// via the incrementWinStreak function and the player outcome element will be updated 
// with "You won!". If no win condition is met, the streak element with be reset via
// the resetWinStreak function, and the outcome element will be updated with "You lost."

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

// the incrementWinStreak function selects the streak element within the navbar of the page,
// splits the text into an array of separate words, changes the initial string of 0
// into an integer, and then increments the integer value by 1. Afterwards, it joins
// the array into a string again, and replaces the previous string with a new string 
// that accurately depicts how many wins in a row the player has.

function resetWinStreak() {
    const winstreak = document.querySelector(".streak");
    winstreak.innerText = `Win Streak: 0`;
}

// the resetWinStreak function takes the streak element within the navbar,
// and replaces the innerText with "Win Streak: 0".

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

// the playGame function is attached to the play button at the bottom of the page.
// Once the game begins, the functions that are invoked immediately are removePlayButton,
// addPlayerOptions, firstHandSign, and setPlayerChoice. After 3.5 seconds of the player
// making their selection, generateComputerHandsign is invoked (Which will also remove the
// player's button options). After another half second, the winner is evaluted using 
// the evaluateWinner function. Based on the outcome, the streak and player-outcome 
// elements will be updated unless two outcomes occur. If the player did not make a choice 
// during the game, an alert will prompt them to select an option while the game is occurring.
// If there is a draw, the outcome element will be updated to reflect that, but the streak
// will be unaffected.