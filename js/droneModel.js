'use strict';

//Browserify
const Type = require('../js/type');
const Advantage = require('../js/statGen.js');


//Define model functions for Drones with attack advantages
function droneAttack() {
  this.model = 'Attack Drone';
  this.attack = this.attack + Advantage.skillAdvantage();
  this.health = this.health +
  Advantage.defaultAdvantage();
}

function droneDefense() {
  this.model = 'Defense Drone';
  this.attack = this.attack + Advantage.defaultAdvantage();
  this.health = this.health + Advantage.skillAdvantage();
}

droneAttack.prototype = new Type.Drone();
droneDefense.prototype = new Type.Drone();

module.exports = { droneAttack, droneDefense};
