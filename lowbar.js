const _ = {};

_.identity = function (x) {
  return x;
};

_.first = function (array) {
  return array[0];
};

_.last = function (array) {
  return array[array.length - 1];
};

if (typeof module !== 'undefined') {
  module.exports = _;
}


