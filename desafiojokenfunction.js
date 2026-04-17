/*É aqui que as coisas funcionam */
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
machineScore -> Camel case
GAME_OPTIONS -> Snake case */

const GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}

const playhuman = (humanChoice) => {   /*Aqui é eu tenho que clicar nas opções */
  gamePlay(humanChoice, playMachine())

}

const playMachine = () => {
  const choices = ['paper', 'rock', 'scissors']
  /*Sempre usar o random para funções de aleatoriedade
  Math.floor() = arredonda para baixo
  Math.ceil() = arredonda para cima os dois é usado no: random
  Máquina = “não sabe o que escolher” → usa array + random 
  para sortear*/
  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}
/*3º Ato*/
const gamePlay = (human, machine) => {
  console.log('Humano: ' + human + 'Maquina: ' + machine)

  if (human === machine) {
    result.innerHTML = 'Empatou'

  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = 'Você ganhou'
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber

    result.innerHTML = 'Você perdeu'
  }

}

