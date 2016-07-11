'use strict';

//Browserify
let Type = require('../droneModel');

////////////////////////
//Begin function testing
////////////////////////

//Test for a base type function, use this as template for each type of robot
describe('Should describe a base model function', function() {

  it('Should describe the base function', function () {
		expect(Type).toBeDefined();
	});

  it('Should describe a model name', function () {
    Type.model = 'Attack Drone';
		expect(Type.model).toBe('Attack Drone');
	});

});//end test for model functions
