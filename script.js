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
var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase ='abcdefghijklmnopqrstuvwxyz';
var numeric ='0123456789'
var specialCharacters ='@#$_';
var str="";
var len=0;
var indx;
len =prompt("How many characters would you like to contain?");
var choices=["lowercase", "uppercase", "numeric", "specialCharacters"];

for(;len < 8 || len > 128 ; ){

  len =prompt("Please choose a length of at least 8 characters and no more than 128 characters");
  
}

// var choice;

// for(;chooseChars=="";){
// chooseChars= prompt("Enter you choice lowercase, uppercase, numeric, and/or special characters");
//  choice =chooseChars.split(",");

// }
// console.log(choice);

for( var x in choices){
  var choice =choices[x];
  var toHave= confirm("Click Ok to confirm to include "+ choice );
 
  if(!toHave){
    continue; 
  }
  console.log(str);
  console.log(lowercase);
  console.log(choice);
  if(choice=="lowercase"){
    str= str.concat(lowercase);
    console.log(str);
  getRandomChar(lowercase);
  }
  else if(choice=="uppercase"){
    str= str.concat(uppercase);
    console.log(str);
    getRandomChar(uppercase);
  }
  else if(choice=="numeric"){
    str= str.concat(numeric);
    console.log(str);
    getRandomChar(numeric);
  }
  else if(choice=="specialCharacters"){
    str= str.concat(specialCharacters);
    console.log(str);
    getRandomChar(specialCharacters);
  }

}
// if(uppercaseChoise=="LOWERCASE"){
//       generatePassword = getRandomIndex(specialChar);

// }else if(uppercaseChoise =="UPPERCASE"|| uppercaseChoise.match(/UP/g)){
//   // str=str.concat(upperCase);
//   // indx =Math.floor(Math.random() * upperCase.length) +1;
//   // generatePassword = generatePassword.concat(upperCase.charAt(indx));
//   generatePassword = getRandomIndex(specialChar);

// }
// else if(uppercaseChoise =="NUMERIC"|| uppercaseChoise.match(/NUM/g) ){
//   // str=str.concat(numbers);
//   //indx =Math.floor(Math.random() * numbers.length) +1;
//  // generatePassword = generatePassword.concat(numbers.charAt(indx));
//  generatePassword = getRandomIndex(specialChar);

// }
// else if(uppercaseChoise =="SPECIAL"|| uppercaseChoise.match(/SPEC/g)|| uppercaseChoise.match(/CHA/g)){
//   // str=str.concat(specialChar);
//   //indx =getRandomIndex(specialChar);
//   generatePassword = getRandomIndex(specialChar);
// }

function getRandomChar(choice){

  indx = Math.floor(Math.random() * choice.length) +1;
 generatePassword = generatePassword.concat(choice.charAt(indx));
 
}

// for(var i=0;i< len ;i++) {
//   var indx =Math.floor(Math.random() * str.length) +1;
//     generatePassword = generatePassword.concat(str.charAt(indx));

// }
var remaining = len - generatePassword.length;
for (var x=0 ;x < remaining;x++){
  getRandomChar(str);
}
// console.log(str);
// console.log(len);//8
// console.log(remaining);//6
// console.log(generatePassword.length);//5
// console.log(generatePassword);
return generatePassword;

}