// Assignment Code

const generateButton = document.getElementById('generateBtn')
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




var passwordLength = prompt("You needa enter how many characters my boi");

  var minimumCount = 0;
  var maximumCount = 12;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
