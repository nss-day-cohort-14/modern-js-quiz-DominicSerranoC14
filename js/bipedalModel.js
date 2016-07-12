'use strict';

//Browserify
const Type = require('../js/type');
const Advantage = require('../js/statGen.js');


//Define model functions for Drones with attack advantages
function bipedalAttack() {
  this.model = 'Attack Bipedal';
  this.attack = this.attack + Advantage.skillAdvantage();
  this.health = this.health +
  Advantage.defaultAdvantage();
}

//Define model functions for Drones with defense advantages
function bipedalDefense() {
  this.model = 'Defense Bipedal';
  this.attack = this.attack + Advantage.defaultAdvantage();
  this.health = this.health + Advantage.skillAdvantage();
}

bipedalAttack.prototype = new Type.Bipedal();
bipedalDefense.prototype = new Type.Bipedal();

module.exports = { bipedalAttack, bipedalDefense};
