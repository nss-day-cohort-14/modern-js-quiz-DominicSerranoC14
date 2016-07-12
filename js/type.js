'use strict';

//Browserify
let Robot = require('../js/robot');

//Define type functions
function Drone() {
  this.type = 'Drone';
}

function Bipedal() {
  this.type = 'Bipedal';
}

function Atv() {
  this.type = 'Atv';
}

//Chain types to robot
Drone.prototype = new Robot();
Bipedal.prototype = new Robot();
Atv.prototype = new Robot();

module.exports = {Drone, Bipedal, Atv};
