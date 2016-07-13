'use strict';

//Browserify requirements
const userInterface = require('./ui');
const $ = require('jquery');
const PlayerInfo = require('./ui.js');
const FightPlayer = require('./fight.js');


//Variables and references
const playerOneDiv = $('#pOneID');
const playerTwoDiv = $('#pTwoID');

const playerOneSelect = $('#pOneSelect');
const playerTwoSelect = $('#pTwoSelect');

const attackButton = $('#attack-button');


//event listener for attack button
attackButton.click(function() {

  //grabs player one info
  PlayerInfo.stringValidation(playerOneDiv, playerOneSelect);

  let pOne = PlayerInfo.getPlayerObj();

  //grabs player two info
  PlayerInfo.stringValidation(playerTwoDiv, playerTwoSelect);

  let pTwo = PlayerInfo.getPlayerObj();

  //check if player objects are defined
  //use loop to determine

  //Execute fight logic
  FightPlayer.determinePlayer(pOne, pTwo);

});//end event listener
