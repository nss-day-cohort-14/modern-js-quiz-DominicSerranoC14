'use strict';

//Browserify
let Drone = require('../type');

////////////////////////
//Begin function testing
////////////////////////

//Test for a base type function, use this as template for each type of robot
describe('Test for base type function', function() {

  it('Should describe a base type function', function () {
		expect(Drone).toBeDefined();
	});

  it('Drone should have a health, attack, name property', function () {
    let little = new Drone.Drone();
		expect(little.health).toBe(50);
		expect(little.attack).toBe(10);
		expect(little.name).toBe(null);
	});

  it('Drone should have a type property', function () {
    let little = new Drone.Drone();
		expect(little.type).toBe('Drone');
	});

});//end describe base type function
