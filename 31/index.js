var usernames = ["admin", "mosab", "ashraf", "khalid", "abdullah"]

var check = "ashraf"

var x = usernames.length
for (var z = 0; z<x; z++){
    usernames.pop()
}
if(usernames.length>0){
    console.log("We have found some user")
}
else{
    console.log("we need some useres")
}
for (var i = 0; i<usernames.length; i++){
    var a = usernames.includes(check)
    if (check == "admin"){
        console.log("Hello "+check+", would you like to see report")
        break;
    }
    else if(a){
        console.log("Hello "+check+ ", thank you for logging in again")
        break;
    }
    else{
        break;
    };
    
}