console.log("hello world!");


// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	    var stack = "";
    for (var i = 0; i < theAlphabetArray.length; i++) {
      if(i % 3 === 0 && i > 0){
        stack += " " + theAlphabetArray[i];
        console.log(stack);
      } else {
        stack += theAlphabetArray[i];
        console.log(stack);
    }
  }
}                   
stackLetters(alphabet);























