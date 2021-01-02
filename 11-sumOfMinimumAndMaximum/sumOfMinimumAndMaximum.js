function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
var min = nums[0];
var max = nums[0];
var sum = 0;
for(var i = 0; i < nums.length; i++){
	if(min > nums[i])
		min = nums[i];
	if(max < nums[i])
		max = nums[i];
}
	sum = max + min;

return sum;
}
sumOfMinimumAndMaximum([2,4,5,6,23])
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;