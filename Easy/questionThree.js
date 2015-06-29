/*Using the JavaScript language, have the function LongestWord(sen) take
the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first
word from the string with that length. Ignore punctuation and assume sen
will not be empty.
*/

function LongestWord(sen) {
  var wordArray = sen.split(' ');
  wordArray.sort(function(a, b) {
      a = a.replace(/\W/g, '');
      b = b.replace(/\W/g, '');
      return b.length - a.length;
  })

  return wordArray[0];
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());
