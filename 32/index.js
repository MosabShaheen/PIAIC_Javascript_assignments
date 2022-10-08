var current_users = ["admin", "mosab","khalid", "ashraf", "AKHTAR"]
var new_users = ["abdullah", "waqas", "Akhtar", "ASHRAF", "ahmad"]

for (var d=0; d<current_users.length;d++){
    current_users[d] = current_users[d].toLowerCase();
}

for (var i =0; i<new_users.length;i++){
    var a = current_users.includes(new_users[i].toLowerCase())
    if(a == true){
        console.log(new_users[i]+" please enter the new user name")
    }
    else if(a==false){
        console.log(new_users[i]+" the username is available")
    }
}