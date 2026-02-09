document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Please fill all fields");
    }else{
        alert("Login Successful (Demo)");
        // yahan backend ya API connect hota hai
    }
});
