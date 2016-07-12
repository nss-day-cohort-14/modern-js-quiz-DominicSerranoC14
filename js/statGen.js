'use strict';

//function which gives models with attack types an attack advantage
function skillAdvantage() {
  return Math.floor(Math.random() * (25 - 10) + 10);
}

function defaultAdvantage() {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

module.exports = { skillAdvantage, defaultAdvantage };
