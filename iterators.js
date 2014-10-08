var iterators = {

    globals: [],

    greaterThanOne:function(a){
      return a>1;
    },
    add1: function(a){
      return a+1;
    },
    add: function(a){
      return a+b;
    },
    subtract: function(a,b){
    return a-b;
    },
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (nums) {
      var min = Infinity;
      for (var i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
          min = nums[i];
        }
      }
      return min;
    },
    each: function(arr,callback){
      arr = arr || [];
      for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
      }
    },
    map: function(arr,callback){
      arr = arr || [];
      var newArr=[];
      for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    },
    filter: function(arr,callback){
      arr = arr || [];
      var newArr=[];
      for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])===true) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    reject: function(arr,callback){
      arr = arr || [];
      var newArr=[];
      for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])===false) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },





    // reduce: function(arr,callback,accumulator){
    //   arr = arr || [];
    //   for (var i = 0; i < arr.length; i++) {
    //     accumulator = callback(arr[i],accumulator);
    //   };
    // }


  }; // end of Iterators object

module.exports = iterators;


// var math = function(a,b,callback){
//   return callback(a,b);
// };

// math(1,2,add);;
// math(2,2,subtract);