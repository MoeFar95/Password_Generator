// Assignment Code

// Add character arrays for lowercase, uppercase, numeric, and special characters.



var upperBois = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerBois = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbBois = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterBois = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

console.log(upperBois[0])
// Write password to the #password input

function userPrompt() {
  var passwordLength = prompt("You need to enter the amount of characters");
  console.log(passwordLength)

  if (passwordLength < 8) { alert("You need at least eight characters"); return null;
    
  };

  if (passwordLength > 128) { alert("This is too much!"); return null};

  var lowercase = confirm("Do you want lowercase?");
  var uppercase = confirm("Do you want uppercase?");
  var numbers = confirm("Do you want numbers?");
  var characters = confirm("Do you want special characters?");

  if (lowercase === false && uppercase === false && numbers === false && characters === false) { alert("You need at least one type of character"); return null;
    
  }

  var userChoice = {
    passwordLength: passwordLength,
    uppercase: uppercase,
    lowercase: lowercase,
    numbers: numbers,
    characters: characters,
  }
return userChoice;
};

function randomGenerator(arrays) {
  var randomindex = Math.floor(Math.random() * arrays.length)
  var randomCharacter = arrays[randomindex];
 return randomCharacter;
};
console.log(randomGenerator(numbBois));



function generatePassword() {
  var passwordconfirmation = userPrompt();
  console.log(passwordconfirmation)
  var securepassword = []; 
  
  if (passwordconfirmation.uppercase) {
    securepassword.push(randomGenerator(upperBois))
  }
  
  if (passwordconfirmation.lowercase) {
    securepassword.push(randomGenerator(lowerBois))
  }

  if (passwordconfirmation.numbers) {
    securepassword.push(randomGenerator(numbBois))
  }

  if (passwordconfirmation.characters) {
    securepassword.push(randomGenerator(characterBois))
  }


  return securepassword.join('')

};




var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
