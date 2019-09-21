// Membalikan huruf
function reverseString(str) {
  // return str
  //   .split()
  //   .reverse()
  //   .join();
  ///////////////////////////////////////////////////////////
  // let revString = "";
  // for (let i = str.length-1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;
  // /////////////////////////////////////////////////////
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString
  // }
  // return revString;
  ////////////////////////////////////////////////////////
  // let revString = "";
  // for (let char of str) {
  //   console.log(char);
  //   revString = char + revString;
  // }
  // return revString;
  //////////////////////////////////////////////////////////
  // let revString = ''
  // str.split('').forEach(char => revString = char + revString)

  // return revString
  //////////////////////////////////////////////////////////
  return str.split("").reduce((revString, char) => char + revString, "");
}

// Huruf atau angka yang sama susunannya  yg dapat dibaca sama baik dari depan maupun belakang
function isPalindrome(str) {
  const revString = str.split('').reverse().join('')
  console.log(revString);
  

  return revString === str
}




// console.log(reverseString("hello"));
console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))

