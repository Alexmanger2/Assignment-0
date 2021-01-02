function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < nums.length; i++){
  		if(nums[i] % 2 != 0){
  			count++;
  		}
  }
   return count;
}
sumOfAllOddNumbers([2,4,6,7,8,9,10])
// Do not edit this line;
module.exports = sumOfAllOddNumbers;