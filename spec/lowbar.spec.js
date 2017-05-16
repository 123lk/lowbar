/* global describe, it */
const path = require('path');
const expect = require('chai').expect;
const spy = require('sinon').spy();

const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', () => {
  'use strict';
  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  describe('identity', () => {
    it('is a function', () => {
      expect(_.identity).to.be.a('function');
    });
    it('returns the same value that is used as the argument', () => {
      let actual = _.identity('foo');
      let expected = 'foo';
      expect(actual).to.equal(expected);
    });
  });

  describe('first', () => {
    it('is a function', () => {
      expect(_.first).to.be.a('function');
    });
    it('returns the first element of an array', () => {
      let actual = _.first([1, 2, 3]);
      let expected = 1;
      expect(actual).to.equal(expected);
    });
  });

  describe('last', () => {
    it('is a function', () => {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of an array', () => {
      let actual = _.last([1, 2, 3]);
      let expected = 3;
      expect(actual).to.equal(expected);
    });
  });

  describe('each', () => {
    it('is a function', () => {
      expect(_.each).to.be.a('function');
    });
    it('returns the list that was passed as an argument', () => {
      let list = [1, 2, 3];
      let iteratee = function num (n) { n + 1; };
      let actual = _.each(list, iteratee);
      let expected = list;
      expect(actual).to.eql(expected);
    });
    it('calls the iteratee function with each element of the list', () => {
      _.each([1, 2, 3], spy);
      expect(spy.callCount).to.equal(3);
    });
  });

  describe('indexOf', () => {
    it('is a function', () => {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns the index at which value can be found in the array', () => {
      let actual = _.indexOf([1, 2, 3], 1);
      let expected = 0;
      expect(actual).to.equal(expected);
    });
    it('returns -1 if value is not present in the array', () => {
      let actual = _.indexOf([1, 2, 3], 4);
      let expected = -1;
      expect(actual).to.equal(expected);
    });
    it('uses a binary search if true is passed as an argument for isSorted', () => {
      let actual = _.indexOf([1, 2, 3, 4, 5], 3, true);
      let expected = 2;
      expect(actual).to.equal(expected);
    });
  });

  describe('filter', () => {
    it('is a function', () => {
      expect(_.filter).to.be.a('function');
    });
    it('looks through each value in the list, returning an array of all the values that pass a truth test (predicate)', () => {
      let list = [1, 2, 3, 4, 5];
      let predicate = function (n) { return n > 2; };
      let actual = _.filter(list, predicate);
      let expected = [3, 4, 5];
      expect(actual).to.eql(expected);
    });
  });

  describe('reject', () => {
    it('is a function', () => {
      expect(_.reject).to.be.a('function');
    });
    it('returns the values in a list that do not pass the predicate truth test', () => {
      let list = [1, 2, 3, 4, 5];
      let predicate = function (n) { return n > 2; };
      let actual = _.reject(list, predicate);
      let expected = [1, 2];
      expect(actual).to.eql(expected);
    });
  });

  describe('uniq', () => {
    it('is a function', () => {
      expect(_.uniq).to.be.a('function');
    });
    it('produces a duplicate-free version of the array passed as an argument', () => {
      let actual = _.uniq([1, 2, 2, 3]);
      let expected = [1, 2, 3];
      actual = _.uniq(['a', 'b', 'c', 'c', 'c']);
      expected = ['a', 'b', 'c'];
      expect(actual).to.eql(expected);
    });
  });

  describe('map', () => {
    it('is a function', () => {
      expect(_.map).to.be.a('function');
    });
    it('produces a new array of values by mapping each value in list through a transformation function (iteratee)', () => {
      let list = [1, 2, 3];
      let iteratee = function (num) { return num + 1; };
      let actual = _.map(list, iteratee);
      let expected = [2, 3, 4];
      expect(actual).to.eql(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = {one: 1, two: 2, three: 3};
      let iteratee = function (num) { return num + 1; };
      let actual = _.map(list, iteratee);
      let expected = [2, 3, 4];
      expect(actual).to.eql(expected);
    });
  });

  describe('pluck', () => {
    it('is a function', () => {
      expect(_.pluck).to.be.a('function');
    });
    it('extracts a list of property values and returns them as an array', () => {
      let list = [{name: 'Laura'}, {name: 'Sarah'}, {name: 'Dave'}];
      let actual = _.pluck(list, 'name');
      let expected = ['Laura', 'Sarah', 'Dave'];
      expect(actual).to.eql(expected);
    });
  });

  describe('reduce', () => {
    it('is a function', () => {
      expect(_.reduce).to.be.a('function');
    });
    it('applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value', () => {
      let actual = _.reduce([1, 2, 3], function (acc, val) { return acc + val; }, 0);
      let expected = 6;
      expect(actual).to.equal(expected);
    });
    it('works for objects as well as arrays', () => {
      let actual = _.reduce({one: 1, two:  2, three: 3}, function (acc, val) { return acc + val; }, 0);
      let expected = 6;
      expect(actual).to.equal(expected);
    });
  });

  describe('contains', () => {
    it('is a function', () => {
      expect(_.contains).to.be.a('function');
    });
    it('returns true if values is present in the list', () => {
      let actual = _.contains([1,2,3], 1);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('returns false if value is not present in the list', () => {
      let actual = _.contains([1,2,3], 4);
      let expected = false;
      expect(actual).to.equal(expected);
    });
  });

  describe('every', () => {
    it('is a function', () => {
      expect(_.every).to.be.a('function');
    });
    it('returns true if all of the values in the list pass the predicate truth test', () => {
      let list = [1,2,3];
      let predicate = function (num) {return num > 0;};
      let actual = _.every(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = {one: 1,two: 2,three: 3};
      let predicate = function (num) {return num > 0;};
      let actual = _.every(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('short-circuits and stops traversing the list if a false element is found', () => {
      let list = [1,2,3];
      let predicate = function (num) {return num < 3;};
      let actual = _.every(list, predicate);
      let expected = false;
      expect(actual).to.equal(expected);
    });
  });

  describe('some', () => {
    it('is a function', () => {
      expect(_.some).to.be.a('function');
    });
    it('returns true if any of the values in the list pass the predicate truth test', () => {
      let list = [1,2,3];
      let predicate = function (num) {return num > 2;};
      let actual = _.some(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = {one: 1,two: 2,three: 3};
      let predicate = function (num) {return num > 2;};
      let actual = _.some(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('returns false if no values in the list pass the predicate truth test', () => {
      let list = [1,2,3];
      let predicate = function (num) {return num > 5;};
      let actual = _.some(list, predicate);
      let expected = false;
      expect(actual).to.equal(expected);
    });
  });

});