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

// membalikkan angka
function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('')

  return parseInt(revString) * Math.sign(int)
}

// Membuat huruf kapital di setiap awal kata
function capitalizeLatters(str) {
  const strArr = str.toLowerCase().split(' ')

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
  }
  return strArr.join(' ')
}




// console.log(reverseString("hello"));
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('hello'))
// console.log(reverseInt(-521))
console.log(capitalizeLatters('i love javascript'))

