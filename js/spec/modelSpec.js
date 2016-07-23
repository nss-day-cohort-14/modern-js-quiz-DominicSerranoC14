'use strict';

//Browserify
let DroneType = require('../droneModel');

////////////////////////
//Begin function testing
////////////////////////

//These tests will pass with each model type, the default model type is the droneAttack model, but all models are based on each other

//Test for a base type function, use this as template for each type of robot
describe('Should describe a base model function', function() {

  it('Should describe the base function', function () {
    let droney = new DroneType.droneAttack();
		expect(droney).toBeDefined();
	});

    //function should have a method that is its model name
    it('Should describe a model name', function () {
    let droney = new DroneType.droneAttack();
    droney.model = 'Attack Drone';
		expect(droney.model).toBe('Attack Drone');
	});

  //function should have an attack > 10
  it('Attack should be > 10, <= 30', function () {
    let droney = new DroneType.droneAttack();
    droney.attack = droney.attack + Math.floor(Math.random() * (20 - 10) + 10);
		expect(droney.attack).toBeGreaterThan(10);
    expect(droney.attack).toBeLessThan(55);
	});

  //function should have a min health > 50
  it('Defense should be > 50, <=60', function () {
    let droney = new DroneType.droneAttack();
    droney.health = droney.health + Math.floor(Math.random() * (20 - 1) + 1);
    expect(droney.health).toBeGreaterThan(50);
    expect(droney.health).toBeLessThan(90);
  });

});//end test for model functions
