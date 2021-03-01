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
let scores, currentScore, currentPlayer, playing;

function init() {
  // allows you to play
  playing = true;
  // setting variables
  scores = [0, 0]
  currentScore = 0;
  currentPlayer = 0;
  // sets scores to 0 total
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[currentPlayer] = 0;
  scores[!currentPlayer] = 0;
  current0El.textContent = 0;
  current1El.textContent = 0
  //resets styling
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

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
  if(playing) {
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
  }
})

// hold button
btnHold.addEventListener('click', function() {
  if(playing) {
     // add current score to players score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];

    if(scores[currentPlayer] >= 100) {
      // finishes game
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// new game
btnNew.addEventListener('click', init);