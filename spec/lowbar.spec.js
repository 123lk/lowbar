/* global describe, it */
const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');

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
      actual = _.identity([1, 2, 3]);
      expected = [1, 2, 3];
    });
  });

  describe('first', () => {
    it('is a function', () => {
      expect(_.first).to.be.a('function');
    });
    it('returns the first element', () => {
      let actual = _.first([1, 2, 3]);
      let expected = 1;
      expect(actual).to.equal(expected);
      actual = _.first('hello');
      expected = 'h';
      expect(actual).to.equal(expected);
    });
    it('should return the first n elements if n is passed', function () {
      let actual = _.first([1, 2, 3, 4, 5], 3);
      let expected = [1, 2, 3];
      expect(actual).to.eql(expected);
    });
    it('should return undefined if no argument or an empty array is passed', function () {
      let actual = _.first();
      let expected = undefined;
      expect(actual).to.eql(expected);
      actual = _.first([]);
      expected = undefined;
      expect(actual).to.eql(expected);
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
    it('returns the last n elements of the array if passed an n argument', function () {
      let actual = _.last([1, 2, 3], 2);
      let expected = [2, 3];
      expect(actual).to.eql(expected);
    });
  });

  describe('each', () => {
    it('is a function', () => {
      expect(_.each).to.be.a('function');
    });
    it('returns the list that was passed as an argument', () => {
      let list = [1, 2, 3];
      let iteratee = function (n) { n + 1; };
      let actual = _.each(list, iteratee);
      let expected = list;
      expect(actual).to.eql(expected);
    });
    it('calls the iteratee function with each element from the list', () => {
      let spy = sinon.spy();
      _.each([1, 2, 3], spy);
      _.each({one: 1, two: 2, three: 3}, spy);
      expect(spy.callCount).to.equal(6);
    });
    it('works for objects as well as arrays', () => {
      let actual = [];
      let expected = [1, 2, 3];
      _.each({ one: 1, two: 2, three: 3 }, function (num) { return actual.push(num); });
      expect(actual).to.eql(expected);
    });
  });

  describe('indexOf', () => {
    it('is a function', () => {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns the index at which value can be found in the array', () => {
      let actual = _.indexOf([1, 2, 3], 1);
      let expected = 0;
      actual = _.indexOf(['b', 'a', 'r'], 'r');
      expected = 2;
      expect(actual).to.equal(expected);
    });
    it('returns -1 if value is not present in the array', () => {
      let actual = _.indexOf([1, 2, 3], 4);
      let expected = -1;
      actual = _.indexOf(['f', 'o', 'o'], 'z');
      expected = -1;
      expect(actual).to.equal(expected);
    });
    it('uses a binary search if true is passed as an argument for isSorted', () => {
      let actual = _.indexOf([1, 2, 3, 4, 5], 3, true);
      let expected = 2;
      actual = _.indexOf(['a', 'b', 'c', 'd'], 'c', true);
      expected = 2;
      actual = _.indexOf([1,2,2,3], 2, true);
      expected = 1;
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
    it('works when the list is an object or an array', () => {
      let list = { one: 1, two: 2, three: 3 };
      let predicate = function (n) { return n > 2 };
      let actual = _.filter(list, predicate);
      let expected = [3];
      expect(actual).to.eql(expected);
    });
    it('returns an empty array if passed an invalid type', () => {
      let list = 'hello';
      let predicate = function (n) { return n > 2 };
      let actual = _.filter(list, predicate);
      let expected = [];
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
    it('works when the list is an object or an array', () => {
      let list = {one: 1, two: 2, three: 3};
      let predicate = function (n) { return n >= 2; };
      let actual = _.reject(list, predicate);
      let expected = [1];
      expect(actual).to.eql(expected);
    });
  });

  describe('uniq', () => {
    it('is a function', () => {
      expect(_.uniq).to.be.a('function');
    });
    it('produces a duplicate-free version of the array passed as an argument', () => {
      let actual = _.uniq([7, 10, 10, 2]);
      let expected = [7, 10, 2];
      actual = _.uniq(['a', 'b', 'b', 'b', 'c']);
      expected = _.uniq(['a', 'b', 'c']);
      expect(actual).to.eql(expected);
    });
  });

  describe('map', () => {
    it('is a function', () => {
      expect(_.map).to.be.a('function');
    });
    it('produces a new array of values by mapping each value in list', () => {
      let list = [1, 2, 3];
      let iteratee = function (num) { return num + 1; };
      let actual = _.map(list, iteratee);
      let expected = [2, 3, 4];
      expect(actual).to.eql(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = { one: 1, two: 2, three: 3 };
      let iteratee = function (num) { return num + 1; };
      let actual = _.map(list, iteratee);
      let expected = [2, 3, 4];
      expect(actual).to.eql(expected);
    });
    it('passes each element of an array to the iteratee function', () => {
      let spy = sinon.spy();
      _.map([1,2,3], spy);
      expect(spy.callCount).to.equal(3);
    });
    it('passes each element of an object to the iteratee function', () => {
      let spy = sinon.spy();
      _.map({one: 1, two: 2, three: 3, four: 4}, spy);
      expect(spy.callCount).to.equal(4);
    });
  });

  describe('pluck', () => {
    it('is a function', () => {
      expect(_.pluck).to.be.a('function');
    });
    it('extracts a list of property values and returns them as an array', () => {
      let list = [{ name: 'Laura' }, { name: 'Sarah' }, { name: 'Dave' }];
      let actual = _.pluck(list, 'name');
      let expected = ['Laura', 'Sarah', 'Dave'];
      expect(actual).to.eql(expected);
    });
    it('returns an empty array when an invalid type is passed as an argument', () => {
      let actual = _.pluck(1, 'name');
      let expected = [];
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
      let actual = _.reduce({ one: 1, two: 2, three: 3 }, function (acc, val) { return acc + val; }, 0);
      let expected = 6;
      expect(actual).to.equal(expected);
    });
    it('passes each element of an array to the iteratee function', () => {
      let spy = sinon.spy();
      _.reduce([1,2,3], spy);
      expect(spy.callCount).to.equal(3);
    });
    it('passes each element of an object to the iteratee function', () => {
      let spy = sinon.spy();
      _.reduce({one: 1, two: 2, three: 3, four: 4}, spy);
      expect(spy.callCount).to.equal(4);
    });
  });

  describe('contains', () => {
    it('is a function', () => {
      expect(_.contains).to.be.a('function');
    });
    it('returns true if values is present in the list', () => {
      let actual = _.contains([1, 2, 3], 1);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('returns false if value is not present in the list', () => {
      let actual = _.contains([1, 2, 3], 4);
      let expected = false;
      expect(actual).to.equal(expected);
    });
    it('works with objects as well as arrays', () => {
      let actual = _.contains({one: 1, two: 2}, 2);
      let expected = true;
      expect(actual).to.equal(expected);
      actual = _.contains({one: 1, two: 2}, 3);
      expect(actual).to.equal(false);
    });
  });

  describe('every', () => {
    it('is a function', () => {
      expect(_.every).to.be.a('function');
    });
    it('returns true if all of the values in the list pass the predicate truth test', () => {
      let list = [1, 2, 3];
      let predicate = function (num) { return num > 0; };
      let actual = _.every(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = { one: 1, two: 2, three: 3 };
      let predicate = function (num) { return num > 0; };
      let actual = _.every(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('short-circuits and stops traversing the list if a false element is found', () => {
      let list = [1, 2, 3];
      let predicate = function (num) { return num < 3; };
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
      let list = [1, 2, 3];
      let predicate = function (num) { return num > 2; };
      let actual = _.some(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('works for objects as well as arrays', () => {
      let list = { one: 1, two: 2, three: 3 };
      let predicate = function (num) { return num > 2; };
      let actual = _.some(list, predicate);
      let expected = true;
      expect(actual).to.equal(expected);
    });
    it('returns false if no values in the list pass the predicate truth test', () => {
      let list = [1, 2, 3];
      let predicate = function (num) { return num > 5; };
      let actual = _.some(list, predicate);
      let expected = false;
      expect(actual).to.equal(expected);
    });
  });

  describe('extend', () => {
    it('is a function', () => {
      expect(_.extend).to.be.a('function');
    });
    it('shallowly copies all of the properties in the source objects over to the destination object, and returns the destination object', () => {
      let actual = _.extend({ name: 'laura' }, { pet: 'tiger' });
      let expected = { name: 'laura', pet: 'tiger' };
      expect(actual).to.eql(expected);
    });
    it('updates the destination object if the source has the same key', () => {
      let actual = _.extend({ name: 'laura', pet: 'tiger' }, { pet: 'penguin' });
      let expected = { name: 'laura', pet: 'penguin' };
      expect(actual).to.eql(expected);
    });
    it('returns the destination when not passed a second argument', () => {
      let actual = _.extend({name: 'Laura'});
      let expected = {name: 'Laura'};
      expect(actual).to.eql(expected);
    });
  });

  describe('defaults', () => {
    it('is a function', () => {
      expect(_.defaults).to.be.a('function');
    });
    it('fills in undefined properties in object with the first value present in the list of defaults objects', function () {
      let actual = _.defaults({ name: 'laura' }, { name: 'lisa', age: 31 });
      let expected = { name: 'laura', age: 31 };
      expect(actual).to.eql(expected);
      actual = _.defaults({ flavour: 'chocolate' }, { flavour: 'vanilla', sprinkles: 'lots' });
      expected = { flavour: 'chocolate', sprinkles: 'lots' };
      expect(actual).to.eql(expected);
    });
  });

});