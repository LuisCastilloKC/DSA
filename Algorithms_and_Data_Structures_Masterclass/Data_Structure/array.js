/* 

1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('array'));
console.log(is_array([1, 2, 4, 0]));
false
true */



var arr = function(array){
    if (toString.call(array) === "[object Array]")
        return true;
        return false;
   
};
 console.log(arr([1]))
console.log(arr("hello"))



// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));