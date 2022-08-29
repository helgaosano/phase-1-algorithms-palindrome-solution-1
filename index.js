function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord = reverseString(word);
  return word === reversedWord;
}
isPalindrome("racecar");

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here

  reverse the input string
  if the input string is equal to the input reversed string
  return true
  else return false
*/

/*
  Add written explanation of your solution here

  function reverseString splits the input string, reverses the array and
  joins the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
