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

_.each = function (list, iteratee) {

  for (let i = 0; i < list.length; i++) {
    iteratee(list[i]);
  }
  return list;
};

_.indexOf = function (array, value, isSorted) {

  isSorted = isSorted || false;

  if (isSorted) {

    let first = 0;
    let last = array.length - 1;
    let mid;

    while (first < last) {
      mid = Math.floor((first + last) / 2);
      if (array[mid] === value) {
        return mid;
      }
      if (value < array[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }
    return -1;
  }

  else {

    let counter = array.length;

    while (counter > 0) {
      for (let i = 0; i < array.length; i++) {
        counter--;
        if (array[i] === value) return i;
      }
    }
    return -1;
  }

};

if (typeof module !== 'undefined') {
  module.exports = _;
}


