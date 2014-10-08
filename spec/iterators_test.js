var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });// end of #max

  // #min tests
  describe("#min", function(){

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it("should return the minimum of an array",function(){
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it("should return Infinity for an empty array",function(){
      expect(Iterators.min([])).to.equal(Infinity);
    });
  });//end of #min

  // #each tests
  describe("#each", function(){
    it("should return each number in array +1",function(){
      var local = [];
      Iterators.each([1,2], function(num){
        local.push(num);
      });
      expect(local).to.include.members([1,2]);
    });
  });


  //Map tests
  describe("#map", function(){
    var myArr;

    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it("should return each number in array + 1",function(){
      expect(Iterators.map(myArr,Iterators.add1)).to.include.members([67,23,68,35]);
    });
    it("should return empty array when passed an empty array",function(){
      expect(Iterators.map([],Iterators.add1)).to.include.members([]);
    });
  });

  //Filter tests
  describe("#filter", function(){
    var myArr;

    beforeEach(function () {
      myArr = [0,1,2,3];
    });

    it("should return each number in array greater than 1",function(){
      expect(Iterators.filter(myArr,Iterators.greaterThanOne)).to.include.members([2,3]);
    });
    it("should return empty array when passed an empty array",function(){
      expect(Iterators.filter([],Iterators.greaterThanOne)).to.include.members([]);
    });
  });

  //reject tests
  describe("#reject", function(){
    var myArr;

    beforeEach(function () {
      myArr = [0,1,2,3];
    });

    it("should return each number in array greater than 1",function(){
      expect(Iterators.reject(myArr,Iterators.greaterThanOne)).to.include.members([0,1]);
    });
    it("should return empty array when passed an empty array",function(){
      expect(Iterators.reject([],Iterators.greaterThanOne)).to.include.members([]);
    });
  });

   //reduce tests
  // describe("#reduce", function(){
  //   var myArr;

  //   beforeEach(function () {
  //     myArr = [1,2,3,4];
  //   });

  //   it("should return each number in array added together",function(){
  //     expect(Iterators.reduce(myArr,Iterators.add)).to.equal(10);
  //   });
  //   it("should return zero when passed an empty array",function(){
  //     expect(Iterators.reduce([],Iterators.add)).to.include.members(0);
  //   });
  // });

}); // end of Iterators description
