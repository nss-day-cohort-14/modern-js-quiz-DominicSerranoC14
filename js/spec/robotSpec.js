// 'use strict';
//
// //Testing suite for main logic of robot quiz
//
// //Browserify requirements
// const Robot = require('../robot');
//
// //////////////////////////////////////
// ///////Begin defining functions///////
// /////////////////////////////////////
//
// //Test base robot function which is the prototype
// describe('Robot', function () {
// 	it('Should describe a base robot function', function () {
// 		expect(Robot).toBeDefined();
// 	});
// 	//Checks and makes sure that each Robot has a health property
// 	it('Rob should have a heatlh property', function () {
// 		let Rob = new Robot();
// 		expect(Rob.health).toEqual(50);
// 	});
//
// 	//Checks and makes sure that each Robot has an attack property
// 	it('Rob should have an attack property', function () {
// 		let Rob = new Robot();
// 		expect(Rob.attack).toEqual(10);
// 	});
//
// 	//Checks and makes sure that each Robot has a name property
// 	it('Rob should have a name property', function () {
// 		let Rob = new Robot();
// 		expect(Rob.name).toBe(null);
// 	});
//
// });//describe the robot function
