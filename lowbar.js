const _ = {};

_.identity = function (value) {
  return value;
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

_.filter = function (list, predicate) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) result.push(list[i]);
  }
  return result;

};

_.reject = function (list, predicate) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) result.push(list[i]);
  }
  return result;
};

_.uniq = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) result.push(array[i]);
    for (let j = 0; j < result.length; j++) {
      if (array[i] !== result[j] && j === result.length - 1) {
        result.push(array[i]);
      }
    }
  }
  return result;
};

_.map = function (list, iteratee) {
  let result = [];

  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      result.push(iteratee(list[i], i, list));
    }
  } else {
    for (let key in list) {
      result.push(iteratee(list[key], key, list));
    }
  }
  return result;
};

_.pluck = function (list, propertyName) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i][propertyName]);
  }
  return result;
};

_.reduce = function (list, iteratee) {
  let acc = 0;
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      acc = iteratee(acc, list[i], i, list);
    }
  } else {
    for (let key in list) {
      acc = iteratee(acc, list[key], key, list);
    }
  }
  return acc;
};


if (typeof module !== 'undefined') {
  module.exports = _;
}


