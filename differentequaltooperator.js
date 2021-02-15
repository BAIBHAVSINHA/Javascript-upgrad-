Q:-> Which of the equality operators do you think is better for comparing two values in JavaScript, == or ===?

  Solution:->
    == operator just checks for the value whereas === checks for value as well as the data type.
    So, imagine a case where you have to check if the variable is number 0 or not.
The == operator will just check for the value and imagine if someone passes a string zero('0'), 
it'll pass the check too as the value of '0' will be equal to the value of number 0, which is obviously wrong.
The same case won't happen with === operator as it will check for both the value as well as data type, as although the value of number 0 and string '0' is the same,
the data type is different, as one is a number and the other is a string
So in most of the cases === operator is a better choice as it performs a more comprehensive check, checking for both data type and value.
