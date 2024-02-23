const passwordBox =document.getElementById("password");
// const length=8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const symbol="~`!@#$%^&*()_+{}[]|\:;',./<>?";
const allChars=upperCase+lowerCase+number+symbol; 
const l2=12;
const l3=16;
console.log("flag")

    


function createPasswordLength8(){
    let password="";
   
    l=document.getElementById("lengthInput").value;
    console.log(l)
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(l>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;

    
}


function copyPassword(){
    passwordBox.select();
    //document.execCommand("copy");
    navigator.clipboard.writeText(passwordBox.value);
    //alert("Copied the text: " + passwordBox.value);
}