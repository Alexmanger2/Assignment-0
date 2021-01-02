function pairSum(nums, target) {
  // Insert code here;
  
  if(nums.length < 2){
    throw "Array length is less than 2";
  }
 
  for(var i = 0; i < nums.length; i++){
    for(var j = i+1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
              return true;
      }
    }
  }
  return false;



}
pairSum([0,1,2,3,4,5], 8)
// Do not edit this line;
module.exports = pairSum;