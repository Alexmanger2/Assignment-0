function fizzBuzz(start, end) {
  // Insert code here;
  var myArr = [];

  for(var i = start; i <= end; i++) {

    if((i % 3 == 0) && (i % 5 == 0)) {
      myArr.push("FizzBuzz");
    
    }
    else if(i % 5 == 0) {
      myArr.push("Buzz");
    }
    else if(i % 3 == 0) {
     myArr.push("Fizz");
    }
    else {
     myArr.push(i);
    
    }
  }
  
  return myArr;
}
fizzBuzz(1,15);
// Do not edit this line;
module.exports = fizzBuzz;