'use strict';

// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//scores
let p0Score = 0;
let p1Score = 0;
let currentScore = 0;

// starting conditions
diceEl.classList.add('hidden');

// roll the dice
btnRoll.addEventListener('click', function() {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check for 1
  if(dice !== 1) {
  // add current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    current0El.textContent = 0
  // swtich to next player
  }

  console.log(dice);
})