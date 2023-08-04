// shortcut way of doing code below, if first value is truthy itll 
// save score from local storage, if falsy, itll default set score 
// to the object
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
  };

/*  does the same thing as code above
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    draws: 0
  };
}
*/

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;

  localStorage.removeItem('score');
  
  updateScoreElem();
}

localStorage.getItem('score');

function playGame(playerMove) {
  const computerMove = pickComputerMove();

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

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();

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

function updateScoreElem() {
  document.querySelector('.gameScore')
    .innerHTML = `Wins: ${score.wins}, Draws: ${score.draws}, Losses: ${score.losses}`;

}