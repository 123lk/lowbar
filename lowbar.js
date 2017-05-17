const _ = {};

_.identity = function (value) {
  return value;
};

_.first = function (arr, n) {
  if (!arguments.length || arr.length === 0) return undefined;
  if (arguments.length === 1) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
};

_.last = function (arr, n) {
  if (arguments.length === 1) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(n - 1);
  }
};

_.each = function (list, iteratee) {
  if (Array.isArray(list) || typeof list === 'string') {
    for (let i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  }
  else if (typeof list === 'object' && !Array.isArray(list)) {
    for (let key in list) {
      iteratee(list[key], key, list);
    }
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
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (predicate(list[i])) result.push(list[i]);
    }
    return result;
  } else {
    for (let key in list) {
      if (predicate(list[key])) result.push(list[key]);
    }
    return result;
  }
};

_.reject = function (list, predicate) {
  let result = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i])) result.push(list[i]);
    }
    return result;
  } else {
    for (let key in list) {
      if (!predicate(list[key])) result.push(list[key]);
    }
    return result;
  }
};

_.uniq = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (_.indexOf(result, array[i]) === -1) {
      result.push(array[i]);
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
  return _.map(list, (element) => {
    return element[propertyName];
  });
};

_.reduce = function (list, iteratee, acc) {
  acc = acc || 0;
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

_.contains = function (list, value) {
  if (Array.isArray(list)) {
    if (_.indexOf(list, value) !== -1) return true;
  } else {
    for (let key in list) {
      if (list[key] === value) return true;
    }
  }
  return false;
};

_.every = function (list, predicate) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i])) return false;
    }
  } else {
    for (let key in list) {
      if (!predicate(list[key])) return false;
    }
  }
  return true;
};

_.some = function (list, predicate) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (predicate(list[i])) return true;
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      if (predicate(list[key])) return true;
    }
  }
  return false;
};

_.extend = function (destination, source) {
  return Object.assign(destination, source);
};

_.defaults = function (object, defaults) {
  for (let key in defaults) {
    if (!object.hasOwnProperty(key)) {
      object[key] = defaults[key];
    }
  }
  return object;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}


