/* global describe, it */
const path = require('path');
const expect = require('chai').expect;

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
      let actual = _.first([1,2,3]);
      let expected = 1;
      expect(actual).to.equal(expected);
    });
  });

  describe('last', () => {
    it('is a function', () => {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of an array', () => {
      let actual = _.last([1,2,3]);
      let expected = 3;
      expect(actual).to.equal(expected);
    });
  });

});