// Assignment Code
document.getElementById("password"). value = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
var generatePassword="";
var upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase ='abcdefghijklmnopqrstuvwxyz';
var numbers ='0123456789'
var specialChar ='@#$_';
var str="";
var len=0;
var indx;
len =prompt("please set the  the length of the password");

for(;len < 8 || len > 128 ; ){

  len =prompt("Please choose a length of at least 8 characters and no more than 128 characters");
  
}
var chooseChars ="";
var choice;

for(;chooseChars=="";){
chooseChars= prompt("Enter you choice lowercase, uppercase, numeric, and/or special characters");
 choice =chooseChars.split(",");

}
console.log(choice);
for( var x in choice){
  var uppercaseChoise =choice[x].toUpperCase();
  console.log(x);
if(uppercaseChoise=="LOWERCASE"|| uppercaseChoise.match(/LOW/g)){
    // str=str.concat(lowerCase);
    indx=Math.floor(Math.random() * lowerCase.length) +1;
    generatePassword = generatePassword.concat(lowerCase.charAt(indx));

}else if(uppercaseChoise =="UPPERCASE"|| uppercaseChoise.match(/UP/g)){
  // str=str.concat(upperCase);
  indx =Math.floor(Math.random() * upperCase.length) +1;
  generatePassword = generatePassword.concat(upperCase.charAt(indx));

}
else if(uppercaseChoise =="NUMERIC"|| uppercaseChoise.match(/NUM/g) ){
  // str=str.concat(numbers);
  indx =Math.floor(Math.random() * numbers.length) +1;
  generatePassword = generatePassword.concat(numbers.charAt(indx));

}
else if(uppercaseChoise =="SPECIAL"|| uppercaseChoise.match(/SPEC/g)|| uppercaseChoise.match(/CHA/g)){
  // str=str.concat(specialChar);
  indx =Math.floor(Math.random() * specialChar.length) +1;
  generatePassword = generatePassword.concat(specialChar.charAt(indx));

}
}

// for(var i=0;i< len ;i++) {
//   var indx =Math.floor(Math.random() * str.length) +1;
//     generatePassword = generatePassword.concat(str.charAt(indx));

// }

console.log(len);
console.log(generatePassword);
return generatePassword;

}