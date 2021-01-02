function isPalindrome(word) {
  // Insert code here;
var reverseString = "";

for(var i = word.length-1; i >= 0; i--){
	reverseString += word[i];
}

if(word === reverseString)
	return true;
else
	return false;
		

}
isPalindrome("racecar")
// Do not edit this line;
module.exports = isPalindrome;