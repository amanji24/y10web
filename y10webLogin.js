function SubmitId() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "y10web" && password == "los3amigos") {
        alert("access granted... welcome y10web!");
        window.location = "y10webonly.html";
    } else if (username == "y10web") {
        alert("access denied... incorrect password");
    } else { 
        alert("access denied");
    }
    
}

function y10webButton() {
            
    alert("Username: y10web  &&  Password: los3amigos");
            
}