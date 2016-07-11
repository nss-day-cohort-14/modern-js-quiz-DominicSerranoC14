'use strict';

//Testing suite for main logic of robot quiz

//Browserify requirements
var Robot = require('../robot.js');

//////////////////////////////////////
///////Begin defining functions///////
/////////////////////////////////////

//Test base robot function which is the prototype
describe('Robot', function () {
	it('Should describe a base robot function', function () {
		expect(Robot).toBeDefined();
	});
	//Checks and makes sure that each Robot has a health property
	it('Rob should have a heatlh property', function () {
		let Rob = new Robot();
		expect(Rob.health).toBe(null);
	});

	//Checks and makes sure that each Robot has an attack property
	it('Rob should have an attack property', function () {
		let Rob = new Robot();
		expect(Rob.attack).toBe(null);
	});

	//Checks and makes sure that each Robot has a name property
	it('Rob should have a name property', function () {
		let Rob = new Robot();
		expect(Rob.name).toBe(null);
	});

});//describe the robot function



//Test for a base type function, use this as template for each type of robot
describe('Test for base type function', function() {

});//end describe base type function
