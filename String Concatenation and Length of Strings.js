Description
You have been given two strings stringOne = ‘UpGrad’ and stringTwo = ‘Education’. You have to output a new string “UpGradEducation”. You also have to output the number of alphabets in the new string.
 
 
Sample
Output: 
UpGradEducation 
15 

Solution :->
  var stringOne = "UpGrad";
var stringTwo = "Education";
var newstring=stringOne+stringTwo;
// Print stringOne followed by stringTwo
console.log(newstring);
// Also find out the number of alphabets in the combined string, which is the one printed above
console.log(newstring.length);
