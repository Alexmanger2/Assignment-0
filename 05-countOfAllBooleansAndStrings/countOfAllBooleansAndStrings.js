function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'boolean' || typeof arr[i] === 'string'){
			count++;
			}
	}
  return count;
}

countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]);
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;