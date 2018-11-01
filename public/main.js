let playerChoice = ''
let computerChoiceArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let computerChoice =
  computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]

const winner = () => {
  let resultsText = document.querySelector('.results-section h2')
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    resultsText.textContent = "It's a tie!"
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    resultsText.textContent = 'Paper covers rock! Computer wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    resultsText.textContent = 'Rock crushes scissors! Player wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'lizard') {
    resultsText.textContent = 'Rock crushes lizard! Player wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'spock') {
    resultsText.textContent = 'Spock vaporizes rock! Computer wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    resultsText.textContent = 'Paper covers rock! Player wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'paper') {
    resultsText.textContent = "It's a tie!"
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    resultsText.textContent = 'Scissors cuts paper! Computer wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'lizard') {
    resultsText.textContent = 'Lizard eats paper! Computer wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'spock') {
    resultsText.textContent = 'Paper disproves Spock! Player wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    resultsText.textContent = 'Rock crushes scissors! Computer wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    resultsText.textContent = 'Scissors cuts paper! Player wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    resultsText.textContent = "It's a tie!"
  } else if (playerChoice === 'scissors' && computerChoice === 'lizard') {
    resultsText.textContent = 'Scissors decapitates lizard! Player wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'spock') {
    resultsText.textContent = 'Spock smashes scissors! Computer wins!'
  } else if (playerChoice === 'lizard' && computerChoice === 'rock') {
    resultsText.textContent = 'Rock crushes lizard! Player wins!'
  } else if (playerChoice === 'lizard' && computerChoice === 'paper') {
    resultsText.textContent = 'Lizard eats paper! Player wins!'
  } else if (playerChoice === 'lizard' && computerChoice === 'scissors') {
    resultsText.textContent = 'Scissors decapitates lizard! Computer wins!'
  } else if (playerChoice === 'lizard' && computerChoice === 'lizard') {
    resultsText.textContent = "It's a tie!"
  } else if (playerChoice === 'lizard' && computerChoice === 'spock') {
    resultsText.textContent = 'Lizard poisons Spock! Player wins!'
  } else if (playerChoice === 'spock' && computerChoice === 'rock') {
    resultsText.textContent = 'Spock vaporizes rock! Player wins!'
  } else if (playerChoice === 'spock' && computerChoice === 'paper') {
    resultsText.textContent = 'Paper disproves Spock! Computer wins!'
  } else if (playerChoice === 'spock' && computerChoice === 'scissors') {
    resultsText.textContent = 'Spock smashes scissors! Player wins!'
  } else if (playerChoice === 'spock' && computerChoice === 'lizard') {
    resultsText.textContent = 'Lizard poisons Spock! Computer wins!'
  } else if (playerChoice === 'spock' && computerChoice === 'spock') {
    resultsText.textContent = "It's a tie!"
  } else {
    resultsText.textContent = 'Something went wrong.'
  }

  document
    .querySelector(`.player-section .${playerChoice}`)
    .classList.add('big-green-ring')

  document
    .querySelector(`.computer-section .${computerChoice}`)
    .classList.add('big-red-ring')
}

let playerClickRock = () => {
  playerChoice = 'rock'
  winner()
}

let playerClickScissors = () => {
  playerChoice = 'scissors'
  winner()
}

let playerClickPaper = () => {
  playerChoice = 'paper'
  winner()
}

let playerClickLizard = () => {
  playerChoice = 'lizard'
  winner()
}

let playerClickSpock = () => {
  playerChoice = 'spock'
  winner()
}

const main = () => {
  document
    .querySelector('.player-section .rock')
    .addEventListener('click', playerClickRock)
  document
    .querySelector('.player-section .paper')
    .addEventListener('click', playerClickPaper)
  document
    .querySelector('.player-section .scissors')
    .addEventListener('click', playerClickScissors)
  document
    .querySelector('.player-section .lizard')
    .addEventListener('click', playerClickLizard)
  document
    .querySelector('.player-section .spock')
    .addEventListener('click', playerClickSpock)
}

document.addEventListener('DOMContentLoaded', main)
