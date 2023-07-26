"use strict";

const computerOutcome = () => {
    let array = ['Rock', 'Paper', 'Scissors']
    let index = Math.floor(Math.random() * 3)
    return array[index]
}

const singleRound = (computer, human) => {
    if (computer === 'Rock') {
        if (human === 'Paper') {
            return `You Win! Paper beats Rock`
        }
        else if (human === 'Scissors') {
            return `You Lose! Rock beats Scissors`
        }
        else {
            return `It's a tie`
        }
    }
    else if (computer === `Paper`) {
        if (human === 'Rock') {
            return `You Lose! Paper beats Rock`
        }
        else if (human === `Scissors`) {
            return `You Win! Scissors beats Paper`
        }
        else {
            return `It's a tie`
        }
    }
    else {
        if (human === `Rock`) {
            return `You Win! Rock beats Scissors`
        }
        else if (human === `Paper`) {
            return `You Lose! Scissors beats Paper`
        }
        else {
            return `It's a tie`
        }
    }
}

const game = () => {
    let humanScore = 0;
    let computerScore = 0
    while (humanScore < 5 && computerScore < 5) {
        let human = prompt("Enter the input")
        let computer = computerOutcome()
        let outcome = singleRound(computer, human)
        console.log(outcome)
        if (outcome.substring(4, 7) === `Win`) {
            humanScore++
        }
        else if (outcome.substring(4, 8) === `Lose`) {
            computerScore++
        }
    }
    if (humanScore == 5) {
        console.log("You won against computer")
    }
    else {
        console.log("Computer won against you")
    }

}

game()