// character arrays
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = ['!', '@', '#', '$', '%', '&', '*', '?', '"', "'", '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']',  '^', '_', '`', '{', '}', '~'];


var generatePassword = function()
{
  var promptLength = window.prompt("How many characters long would you like your password to be? Please enter a number between '8' and '128'");
   
   if (promptLength === "" || promptLength === null) {
     window.alert("You must enter a valid number.")
     return generatePassword();
   }

  if (promptLength <8) {
    window.alert("You must enter at least 8.");
    return generatePassword();    
  }

  if (promptLength >128) {
    window.alert("You can only select up to 128 characters.");
    return generatePassword();   
  };

  //Array for accepted characters
  var passwordElements = [];

  // confirm windows to accept or decline characters included
  var lowerCase = window.confirm("Would you like to include Lowercase characters?");
  if (lowerCase===true) {
     passwordElements= passwordElements.concat(lowerCaseArray)
  };

  var upperCase = window.confirm("Would you like to include Uppercase characters?");
  if (upperCase===true) {
    passwordElements=passwordElements.concat(upperCaseArray);
  };
 
  var numeric = window.confirm("Would you like to include Numbers?");
  if (numeric===true) {
    passwordElements=passwordElements.concat(numericArray);
  };
 
  var specialCharacters = window.confirm("Would you like to include Special characters?"); 
  if (specialCharacters===true) {
    passwordElements=passwordElements.concat(specialCharactersArray);
  };

  // generates password based upon approved characters
let password="";
if (passwordElements.length === 0) return "";

for (let i = 0; i < promptLength; i++) { 
    var passwordIndex = Math.floor(Math.random() * passwordElements.length);
    password += passwordElements[passwordIndex];
  }

return password;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
