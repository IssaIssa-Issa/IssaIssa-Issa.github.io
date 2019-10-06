var genPassword = document.getElementById("generate");
var copyText = document.getElementById("copy"); 
var passwordField = document.getElementById("password");

alert(document.getElementById("copy"));

function clipboard() {
  copyText = document.getElementById("password").textContent;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
    
    
}

document.getElementById("copy").addEventListener("click", clipboard);
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {

    userChoice  = prompt("Please choose a character length between 8 and 128.");
      

      if (userChoice > 128) {
      
        alert("You must pick a character count equal to or less than 128 characters!"); return false;
      }
      else if (userChoice < 8) {
        alert("You must pick a character count equal to or greater than 8 characters!");
      }
      else{
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        copyText = "";
      
      
    for (var i = 0; i < userChoice; ++i) {
        copyText += charset.charAt(Math.random() * i);
    }
      document.getElementById("password").innerHTML = copyText;
      }
      
  };



