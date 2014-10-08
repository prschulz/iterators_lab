# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`
Higher order functions are those that operate on other functions, either as arguments or returning a function. This makes them particularly useful in abstracting functions to make code more terse and readable.

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
The Math.max function returns the largest of zero or more numbers.
ex:
  Math.max(10,5);
  //returns 10

* `min`
The Math.min function returns the smallest of zero or more numbers
ex:
  Math.min(10,5);
  //returns 5

* `each`
forEach must be called on an array. It executes a callback that is invoked with 3 args: element value, element index, & the array being traversed.
ex:
  myArr=[1,2,3];
  myArr.forEach(function(a){
    console.log(a*2)
  };
  //will return 2,4,6

* `map`
map() must be called on an array. The map() method will create a new array with the results of calling a function on every element in a given array.
ex:
  var foods = ["pasta","cheese"];
  var cased = foods.map(function(a){
    return person.toUpperCase();
  });
  //outputs ["PASTA","CHEESE"]

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Filter will create a new array with all the elements that pass a test given by a provided function.
ex:
  var canDrink=function(a){
    return a >= 21;
  }
  var ages = [20,15,25,35];
  var drinkers = ages.filter(canDrink);
  //drinkers=[25,35]


* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.
ex:
  var add = function(a,b){
    return a+b;
  };
  var oneAndOnly = [1,2,3,4].reduce(add);
  // 10

* `reject`: [note](http://underscorejs.org/#reject)
reject will create a new array with all the elements that don't pass a test given by a provided function.
 var canDrink=function(a){
    return a >= 21;
  }
  var ages = [20,15,25,35];
  var drinkers = ages.reject(canDrink);
  //drinkers=[15,20]


Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

