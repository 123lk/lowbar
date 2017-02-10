/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
  });
  it('should return the same value that is used as the argument', function(){
    var actual = _.identity(1);
    var expected = 1;
    expect(actual).to.equal(expected);
    actual = _.identity();
    expected = undefined;
    expect(actual).to.equal(expected);
  });
  describe('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
  });
  it('should return the first element', function(){
    var actual = _.first([1, 2, 3]);
    var expected = 1;
    expect(actual).to.equal(expected); 
    actual = _.first('hello');
    expected = 'h'; 
    expect(actual).to.equal(expected);
  }); 
  it('should return the first n elements if n is passed', function(){
    var actual = _.first([1, 2, 3, 4, 5], 3);
    var expected = [1, 2, 3];
    expect(actual).to.eqls(expected); 
  });
  it('should return undefined if no argument or an empty array is passed', function(){
    var actual = _.first();
    var expected = undefined;
    expect(actual).to.eqls(expected); 
    actual = _.first([]);
    expected = undefined;
    expect(actual).to.eqls(expected); 
  });
describe('#last', function () {
    it('is a function', function() {
      expect(_.last).to.be.a('function');
    });
it('should return the last element', function(){
    var actual = _.last([1, 2, 3]);
    var expected = 3;
    expect(actual).to.equal(expected); 
    actual = _.last('hello');
    expected = 'o'; 
    expect(actual).to.equal(expected);
  }); 

   it('should return the last n elements if n is passed', function(){
    var actual = _.last([1, 2, 3, 4, 5], 3);
    var expected = [3, 4, 5];
    expect(actual).to.eqls(expected); 
  });
  it('should return undefined if no argument or an empty array is passed', function(){
    var actual = _.last();
    var expected = undefined;
    expect(actual).to.eqls(expected); 
    actual = _.last([]);
    expected = undefined;
    expect(actual).to.eqls(expected); 
  });
  });
  describe('#each', function () {
    it('is a function', function() {
      expect(_.each).to.be.a('function');
    });
    it('should return an empty array if passed one argument that is an empty array', function(){
    var actual = _.each([]);
    var expected = [];
    expect(actual).to.eqls(expected);
  });
  it('should return the exact number when passed a number as only one argument', function(){
    var actual = _.each(2);
    var expected = 2;
    expect(actual).to.equal(expected); 
  });
  //add a test to check the iteratee function using sinon(?)
});

describe('#indexOf', function () {
    it('is a function', function() {
      expect(_.indexOf).to.be.a('function');
    });
    it('should return -1 unless the val is found in the array', function(){
    var actual = _.indexOf();
    var expected = -1;
    expect(actual).to.eqls(expected); 
    actual = _.indexOf([]);
    expected = -1;
    expect(actual).to.eqls(expected); 
  });
it('should return index at which the val is found in the array', function(){
    var actual = _.indexOf([1,2,3],2);
    var expected = 1;
    expect(actual).to.eqls(expected); 
    actual = _.indexOf([1,1,2,2,2,3],2);
    expected = 2;
    expect(actual).to.eqls(expected); 
    actual = _.indexOf(['a','b','c'],'c');
    expected = 2;
    expect(actual).to.eqls(expected); 
    actual = _.indexOf(['a','a','a','b','c'],'a');
    expected = 0;
    expect(actual).to.eqls(expected); 
  });

  });


  describe('#filter', function () {
    it('is a function', function() {
      expect(_.filter).to.be.a('function');
    });
    it('should return an empty array if passed a number or nothing', function(){
    var actual = _.filter();
    var expected = [];
    expect(actual).to.eqls(expected); 
    actual = _.filter(989);
    expected = [];
    expect(actual).to.eqls(expected);
    actual = _.filter([1,2,3]);
    expected = [1,2,3];
    expect(actual).to.eqls(expected);  
  });
  it('should return the filtered elements based on the condition function', function(){
    var actual = _.filter([1,2,3], function (num){if(num === 2){return num}});
    var expected = [2];  
    actual = _.filter(['a', 'b', 'a', 'c'], function (str){if(str === 'a'){ return str}});
    expected = ['a', 'a'];
    expect(actual).to.eqls(expected); 
  });
});

describe('#reject', function (){
  it('is a function', function(){
    expect(_.reject).to.be.a('function');
  });
   it('should return the rejected elements based on the condition function', function(){
    var actual = _.reject([1,2,3], function (num){if(num === 2){return num}});
    var expected = [1, 3];  
    actual = _.reject(['a', 'b', 'a', 'c'], function (str){if(str === 'a'){ return str}});
    expected = ['b', 'c'];
    expect(actual).to.eqls(expected); 
    actual = _.reject(1, function (str){if(str === 'a'){ return str}});
    expected = [];
    expect(actual).to.eqls(expected); 
  }); 
});

describe('#uniq', function (){
  it('is a function', function(){
    expect(_.uniq).to.be.a('function');
  });
  // it('should only return the unique elements of the array', function (){
  //   var actual = _.uniq([1,2,1,3,1,4]);
  //   var expected = [1,2,3,4];
  //   expect(actual).to.eqls(expected); 
  // });
});
  
});