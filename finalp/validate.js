function validateForm(){

/* 
Code for validating inputs as letters only is here: https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=You%20can%20write%20a%20JavaScript,HTML%20form%20contains%20only%20letters.&text=To%20get%20a%20string%20contains,%2F)%20which%20allows%20only%20letters. 
*/

  
//1) Create variable
var validFirstname=false;
var validLastname=false;
var validEmail=false;

  //2) read value from HTML
var lastname = document.getElementById("lastname").value;
var firstname = document.getElementById("firstname").value;
var userEmail = document.getElementById("email").value;
  

  //3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    window.alert("First name is invalid, please enter a name up to 20 letters.");
else if(!(/^[A-Za-z]+$/.test(firstname)))
    window.alert("First name is invalid, please use only letters.");
else
   validFirstname = true;
if (lastname==="null" || lastname==="" || lastname.length > 50)
    window.alert("Last name is invalid, please enter a name up to 50 letters.");
else if(!(/^[A-Za-z]+$/.test(lastname)))
    window.alert("Last name is invalid, please use only letters.");
else
   validLastname = true;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  window.alert("Email is invalid, please use format of email@emailaddress.com");
}
else
    validEmail = true;
  return validFirstname && validLastname && validEmail;
}
