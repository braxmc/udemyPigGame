'use strict';

// selecting elements
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//scores
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

function switchPlayer() {
      // swtich to next player, reset score to 0
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}

// starting conditions
diceEl.classList.add('hidden');

// roll the dice
btnRoll.addEventListener('click', function() {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolling 1
  if(dice !== 1) {
  // add current score
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }

  console.log(dice);
})

btnHold.addEventListener('click', function() {
  // add current score to players score
  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
  switchPlayer();
})