module.exports = {
  doesntExist,
  thisVariableDoesntExist
};

var doesntExist = global.doesntExist;
var thisVariableDoesntExist = global.thisVariableDoesntExist;
var addAge = global.addAge;

module.exports = {
  doesntExist,
  thisVariableDoesntExist,
	addAge
};
