function chooseRock() {
  let result = '';
  //code to determine winner
  if (computerMove === 'Rock') {
    result = 'Draw';
  } else if (computerMove === 'Paper') {
    result = 'You Lose!'
  } else if (computerMove === 'Scissors') {
    result = 'You Win!'
  }
  // check code to see if works
  //console.log(result);
  
  computerMove.toUpperCase;
  alert(`You picked Rock, Computer picked ${computerMove}. ${result}`);
  return result;

}

function choosePaper() {
  let result = '';
  //code to determine winner
  if (computerMove === 'Rock') {
    result = 'You Win!';
  } else if (computerMove === 'Paper') {
    result = 'Draw!'
  } else if (computerMove === 'Scissors') {
    result = 'You Lose!'
  }
  // check code to see if works
  //console.log(result);
  computerMove.toUpperCase;
  alert(`You picked Paper, Computer picked ${computerMove}. ${result}`);
  return result;
}

function chooseScissors() {
  let result = '';
  //code to determine winner
  if (computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'You Win!'
  } else if (computerMove === 'Scissors') {
    result = 'Draw!'
  }
  // check code to see if works
  //console.log(result);

  alert(`You picked Scissors, Computer picked ${computerMove}. ${result}`);
  return result;
}

const randomNumber = Math.random();
let computerMove = '';

function PickComputerMove() {
  // code to randomise computer move
  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
    computerMove = 'Scissors';
  } else  if (randomNumber > 2/3 && randomNumber < 1) {
    computerMove = 'Paper';
  }
  // check to see if code works
  //console.log(computerMove);
}