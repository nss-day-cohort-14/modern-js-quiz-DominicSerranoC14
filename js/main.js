'use strict';

//Browserify requirements
const userInterface = require('./ui');
const Robot = require('./robot');
const Type = require('./type');
const Drone = require('./droneModel');
const Bipedal = require('./bipedalModel');
const ATV = require('./atvModel.js');
const $ = require('jquery');

//Test for instantiation of drones
let arroney = new Drone.droneAttack();
let droney = new Drone.droneDefense();
console.log(arroney);
console.log(droney);

//Test for instantiation of bipedals
let bipedalAtt = new Bipedal.bipedalAttack();
let bipedalDef = new Bipedal.bipedalDefense();
console.log(bipedalAtt);
console.log(bipedalDef);

//Test for instantiation of atvs
let atvAtt = new ATV.atvAttack();
let atvDef = new ATV.atvDefense();
console.log(atvAtt);
console.log(atvDef);
