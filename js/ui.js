'use strict';

//Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
//Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
//The Viper Drone defeated the Behemoth ATV with its flamethrower.

// Browserify
const $ = require('jquery');

//Variables and references
const playerOneDiv = $('#pOneID');
const playerTwoDiv = $('#pTwoID');

const playerOneSelect = $('#pOneSelect');
const playerTwoSelect = $('#pTwoSelect');

const attackButton = $('#attack-button');


////////Begin base functions for UI interaction


let stringValidation = function(playerId, playerSelect) {
  //Message displaying which player info hasn't been selected
  let message =`Please enter ${playerId.attr('name')}'s info to play.`;
  //tests if either player left text input or select menu blank
  if ( playerId.val() === "" || playerSelect.val() === "" ) {
    console.log(message);
  } else {
    //if all players info has been entered, run this function
    setPlayerInfo(playerId, playerSelect);
    }

};//end stringValidation function


//function that grabs player one's info
let setPlayerInfo = function( playerId, playerSelect ) {

    let store = {};
    let pID = playerId.val();
    let pSelect = playerSelect.val();
    store = { pID, pSelect };
    getPlayerInfo(store);

};//end getPlayerInfo function


let getPlayerInfo = function(store) {

  console.log(store);
  return store;

};//end getPlayerInfo function


//Event listener for attack function
attackButton.click( function() {
  //Collect player one info
  console.log(stringValidation( playerOneDiv, playerOneSelect));

  //Collect player two info
  console.log(stringValidation( playerTwoDiv, playerTwoSelect));
});//end attack button event listener


module.exports = getPlayerInfo;
