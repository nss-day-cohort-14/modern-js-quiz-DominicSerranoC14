'use strict';

//Browserify
const Type = require('../js/type');



//Define model functions for Drones
function droneAttack() {
  this.model = 'Attack Drone';
  this.attack = this.attack;
}

function droneDefense() {
  this.model = 'Defense Drone';
}

droneAttack.prototype = new Type.Drone();
droneDefense.prototype = new Type.Drone();

module.exports = droneAttack;
