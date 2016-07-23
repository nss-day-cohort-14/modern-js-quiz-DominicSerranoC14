'use strict';

//Browserify
const $ = require('jquery');

//references
const outputDiv = $('#output-div');


////////Begin base functions for fight logic


//function chooses player with lower health to attack first
let determinePlayer = function(pOne, pTwo) {

  let currentPlayer;
  let playerOne = pOne.player;
  let playerTwo = pTwo.player;

  // determine which player has a higher health, assigns the opposite player first move
  currentPlayer = playerOne.health > playerTwo.health ? playerTwo : playerOne;

  fightPlayer(currentPlayer, playerOne, playerTwo);


};//end determinePlayer function


//function that 'fights' each player until one players health is < 0
let fightPlayer = function( currentPlayer, playerOne, playerTwo ) {

  //test that both players health is above 0
  while ( playerOne.health > 0 && playerTwo.health > 0 ) {

    //determines which player is the currentPlayer, then subtracts currentPlayer health by other player
    let test = currentPlayer === playerOne ?
    ((playerTwo.health = playerTwo.health - playerOne.attack),
    (currentPlayer = playerTwo)) :

    ((playerOne.health = playerOne.health - playerTwo.attack),
    (currentPlayer = playerOne));

    //Logs current health and current player each attack
    let messageOne = "";
    messageOne += `<p>Current Attacker is: ${currentPlayer.name}</p>`;
    messageOne += `<p>`;
    messageOne += `  ${playerOne.name} Health: ${playerOne.health} |`;
    messageOne += `  ${playerTwo.name} Health:  ${playerTwo.health}`;
    messageOne += `</p>`;
    outputDiv.prepend(messageOne);

  }

  determineWinner( playerOne, playerTwo );

};//end fightPlayer function


let determineWinner = function(playerOne, playerTwo) {

  //Determines which player has a health below 0 and displays them as winner
  let message;

  let other = playerOne.health <= 0 ? message = `Game over! ${playerTwo.name} defeated ${playerOne.name} with its ${playerTwo.weapon}!` :
  message = `Game over! ${playerOne.name} defeated ${playerTwo.name} with its ${playerOne.weapon}!`;

  message = `<p id="winner-p"> ${message} </p>`;
  outputDiv.prepend(message);

};//end determineWinner function



module.exports = { determinePlayer, fightPlayer };
