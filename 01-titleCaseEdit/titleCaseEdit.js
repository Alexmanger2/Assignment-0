function titleCaseEdit(title) {
    //split string and convert all to lowercase
    var str = title.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++) {
             //change first letter to uppercase and add rest of string to it
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   
     }
     //put the string back together
     return str.join(' ');
 
 }
 console.log(titleCaseEdit('the moon is made of cheese'));
 // Do not edit this line;
 module.exports = titleCaseEdit;