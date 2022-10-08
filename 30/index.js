var usernames = ["admin", "mosab", "ashraf", "khalid", "abdullah"]

var check = "ashraf"

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
    }
    
}