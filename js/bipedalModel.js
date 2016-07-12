'use strict';

//Browserify
const Type = require('../js/type');
const Advantage = require('../js/statGen.js');


//Define model functions for Drones with attack advantages
let bipedalAttack = function(name) {
  this.name = name;
  this.model = 'Attack Bipedal';
  this.attack = this.attack + Advantage.skillAdvantage();
  this.health = this.health +
  Advantage.defaultAdvantage();
  this.weapon = 'Saw';
};

//Define model functions for Drones with defense advantages
let bipedalDefense = function(name) {
  this.name = name;
  this.model = 'Defense Bipedal';
  this.attack = this.attack + Advantage.defaultAdvantage();
  this.health = this.health + Advantage.skillAdvantage();
  this.weapon = 'Saw';
};

bipedalAttack.prototype = new Type.Bipedal();
bipedalDefense.prototype = new Type.Bipedal();

module.exports = { bipedalAttack, bipedalDefense };
