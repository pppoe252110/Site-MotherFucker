var wrongpass = document.getElementById("wrongpassword");
var pass = document.getElementById("Password");
wrongpass.style.visibility="hidden";
function CheckPassword()
{
if(pass.value.length>5){
    wrongpass.style.visibility="hidden";
    return false;
}
else{
    wrongpass.style.visibility="visible";
    return true;
}
}
function Send(){
if(CheckPassword()==false){
    alert("Thanks for password: "+document.getElementById("Password").value+"!");
}else{
    alert("Incorrect password!");
}
}