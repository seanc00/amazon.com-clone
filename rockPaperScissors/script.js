const score = {
  wins: 0,
  draws: 0,
  losses: 0
};

function playGame(playerMove) {
  computerMove = pickComputerMove();

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose!';
    } else if (computerMove === 'Paper') {
      result = 'You Win!';
    } else if (computerMove === 'Scissors') {
      result = 'Draw!';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Draw!';
    } else if (computerMove === 'Paper') {
      result = 'You Lose!'
    } else if (computerMove === 'Scissors') {
      result = 'You Win!'
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win!';
    } else if (computerMove === 'Paper') {
      result = 'Draw!'
    } else if (computerMove === 'Scissors') {
      result = 'You Lose!'
    }
  }

  if (result === 'You Win!') {
    score.wins++;
  } else if (result === 'You Lose!') {
    score.losses++;
  } else if (result === 'Draw!') {
    score.draws++;
  }

  console.log(score);
  alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}`);
  return result;

}

function pickComputerMove() {
  //random number from 0-1
  const randomNumber = Math.random();

  // code to randomise computer move
  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
    computerMove = 'Scissors';
  } else  if (randomNumber > 2/3 && randomNumber < 1) {
    computerMove = 'Paper';
  }

  return computerMove;
  // check to see if code works
  //console.log(computerMove);
}