function verifyPw() {
    console.log("Password validation running");  
    var pw1 = document.getElementById("password1");
    var pw2 = document.getElementById("password2");
        if(pw1 !== pw2) {
            document.getElementById("message").innerHTML = "**passwords do not match";  
     return false;
        }
        else {
            console.log("Password is correct");  
         }  
}