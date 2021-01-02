function frequencyCounter(word) {
  // Insert code here;  

var object = {}; // object key:value
    for (var i = 0; i < word.length; i++) {
        if (object[word[i]]) { //if letter is seen again increase value
           object[word[i]]++;
        } 
        else { // if letter is only seen once, value = 1
           object[word[i]] = 1;
        }
    }

   return object;

}
frequencyCounter("apple")
// Do not edit this line;
module.exports = frequencyCounter;