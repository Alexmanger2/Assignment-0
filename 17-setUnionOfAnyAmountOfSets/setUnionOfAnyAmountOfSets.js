function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  
var mySet = new Set();

for(var i = 0; i < args.length; i++){
	for(let value of args[i]){
		mySet.add(value);
	}
}
//console.log(mySet);
return mySet;

}


setUnionOfAnyAmountOfSets([ 1, 2, 4 ], [ 4, 5, 6 ], [ 6, 7, 8 ])

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;