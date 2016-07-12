'use strict';

//Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
//Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
//The Viper Drone defeated the Behemoth ATV with its flamethrower.

// Browserify
const $ = require('jquery');
const Drone = require('./droneModel');
const Bipedal = require('./bipedalModel');
const ATV = require('./atvModel.js');


let store = {};
let newP;


////////Begin base functions for UI interaction


let stringValidation = function(playerId, playerSelect) {
  //Message displaying which player info hasn't been selected
  let message =`Please enter ${playerId.attr('name')}'s info to play.`;
  //tests if either player left text input or select menu blank
  if ( playerId.val() === "" || playerSelect.val() === "" ) {
    window.alert(message);
  } else {
    //if all players info has been entered, run this function
    setPlayerObj(playerId, playerSelect);
    }

};//end stringValidation function


//function that grabs player one's info
let setPlayerObj = function( playerID, playerSelect ) {

  //Store each model obj in an array
  let Types = [ Drone, Bipedal, ATV ];

    //loop through each obj in array
    $(Types).each(function(each) {
      //store current obj here
      let pObj = Types[each];
      // console.log(pObj);
      //loop  through each key in current obj
      for ( let key in pObj) {
        //if player select option equal obj key, use the current object and instantiate a new player obj
        if ( playerSelect.val() === key ) {
          newP = new pObj[key](playerID.val());
          store = { newP };
        }//end conditional
      }//end for in loop
    });//end .each method

};//end getPlayerInfo function


let getPlayerObj = function() {

  return store;

};//end getPlayerInfo function


module.exports = { stringValidation, getPlayerObj };
