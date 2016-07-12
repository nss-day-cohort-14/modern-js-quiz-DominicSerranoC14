'use strict';

//Browserify
const Type = require('../js/type');
const Advantage = require('../js/statGen.js');


//Define model functions for Drones with attack advantages
let atvAttack = function(name) {
  this.name = name;
  this.model = 'Attack ATV';
  this.attack = this.attack + Advantage.skillAdvantage();
  this.health = this.health +
  Advantage.defaultAdvantage();
  this.weapon = 'Turret';
};

let atvDefense = function(name) {
  this.name = name;
  this.model = 'Defense ATV';
  this.attack = this.attack + Advantage.defaultAdvantage();
  this.health = this.health + Advantage.skillAdvantage();
  this.weapon = 'Turret';
};

atvAttack.prototype = new Type.Atv();
atvDefense.prototype = new Type.Atv();

module.exports = { atvAttack, atvDefense };
