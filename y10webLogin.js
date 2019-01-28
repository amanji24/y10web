    function Homepage() {
        
        window.location = "index.html";
        
    }
    
    var y10web = true;
    
    function y10webEnd() {
        y10web = true;
    }
    
    function Y10WebEnd() {
        y10web = false;
    }
    
    function SubmitUrl() {
        
        var UrlName = document.getElementById("UrlInput").value;
        if (y10web) {
            window.location = "http://" + UrlName + ".github.io/y10web"
        } else {
            window.location = "http://" + UrlName + ".github.io/Y10Web"
        }
    
    }
    
    function SubmitUrl2() {
        
        var UrlName2 = document.getElementById("UrlInput2").value;
        window.location = UrlName2;
        
    }

    function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
        }
        function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
    }





var Usernames = ["amanji24", "y10web"];
var Passwords = ["#fakePword", "los3amigos"];
sessionStorage.HasUsername = false;
var CorUN = false;

function SubmitId() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for (i = 0; i < Usernames.length; i++) {
        if (Usernames[i] == username && Passwords[i] == password) {
            alert("access granted... welcome " + username);
            window.location = "y10webonly.html";
            sessionStorage.username = username;
            sessionStorage.HasUsername = true;
            CorUN = true;
        } else if (Usernames[i] == username) {
            alert("access denied... incorrect password for " + username);
            CorUN = true;
        }
    }
    
    if (!CorUN) {
        alert("access denied");
    } else {
        CorUN = false;
    }
    
}

function y10webButton() {
            
    alert("Username: y10web  &&  Password: los3amigos");
            
}

function SubmitUrl3() {
    var UrlName3 = document.getElementById("UrlInput3").value;
    var RealUser = false;
    
    for (i = 0; i < Usernames.length; i++) {
        if (Usernames[i] == UrlName3) {
            RealUser = true;
        }
    }
    
    if (RealUser) {
        document.getElementById("SearchedUName").innerHTML = "User: " + UrlName3;
        document.getElementById("UserInfo").innerHTML = localStorage.getItem(UrlName3 + "Bio");
        document.getElementById("SearchedStatus").innerHTML = localStorage.getItem(UrlName3 + "Status");
        document.getElementById("SearchedProfilePic").innerHTML = "";
        var SearchedPP = document.createElement("img");
        SearchedPP.src = localStorage.getItem(UrlName3 + "ProfilePic");
        document.getElementById("SearchedProfilePic").appendChild(SearchedPP);
    } else {
        alert("User cannot be found");
    }
}

function y10webLoad() {
    
    if ( !/Chrome/i.test(navigator.userAgent) ) {
        alert("Sorry! Only Chrome is supported... for now");
    }
    
    startTime();
    
    var Verified = false;
    
    for (i = 0; i < Usernames.length; i++) {
        if (Usernames[i] == sessionStorage.username) {
            Verified = true;
        }
    }
    
    if (!Verified) {
        document.getElementById("UsernameSlot").innerHTML = "Sign in (Homepage)";
    } else {
        document.getElementById("UsernameSlot").innerHTML = sessionStorage.username;
        
        document.getElementById("CurrentUserBio").innerHTML = localStorage.getItem(sessionStorage.username + "Bio");
        
        document.getElementById("CurrentUserStatus").innerHTML = localStorage.getItem(sessionStorage.username + "Status");

        document.getElementById("UserBio").placeholder = "Type new bio here..";
        
        document.getElementById("UserStatus").placeholder = "Type new status here..";
        
        document.getElementById("UserUName").innerHTML = "Username: " + sessionStorage.username;
        
        document.getElementById("NewProfilePic").placeholder = "Type/paste new image address here";
        
        var UserPP = document.createElement("img");
        UserPP.src = localStorage.getItem(sessionStorage.username + "ProfilePic");
        document.getElementById("UserProfilePic").appendChild(UserPP);
    }
    
}

/*localStorage.y10webBio = "This is the user which represents the y10web community at UCC. This specific account was created by Amanji24, the creator and owner of this Web Page. Thanks for stopping by!";

localStorage.amanji24Bio = "Hello! Amanji24 here, creator and owner of this web page. I am just testing out some cool features of web storage in my effort of becoming a true full stack developer. I have figured out login info and bio's, hopefully more to come. :)";*/

var Testing = false;

function SubmitBio() {
    if (sessionStorage.username != "y10web" || Testing) {
        var NewBio = document.getElementById("UserBio").value;
        localStorage.setItem(sessionStorage.username + "Bio", NewBio);
        document.getElementById("CurrentUserBio").innerHTML = localStorage.getItem(sessionStorage.username + "Bio");
    } 
}

function SubmitStatus() {
    if (sessionStorage.username != "y10web" || Testing) {
        var NewStatus = document.getElementById("UserStatus").value;
        var d = new Date();
        localStorage.setItem(sessionStorage.username + "Status", NewStatus + " ||| Posted " + d);
        document.getElementById("CurrentUserStatus").innerHTML = localStorage.getItem(sessionStorage.username + "Status");
    } 
}

function SubmitProfilePic() {
    if (sessionStorage.username != "y10web" || Testing) {
        document.getElementById("UserProfilePic").innerHTML = "";
        var NewProfilePic = document.createElement("img");
        NewProfilePic.src = document.getElementById("NewProfilePic").value;
        localStorage.setItem(sessionStorage.username + "ProfilePic", document.getElementById("NewProfilePic").value);
        document.getElementById("UserProfilePic").appendChild(NewProfilePic);
    } 
}
