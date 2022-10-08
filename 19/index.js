var names = ["Khalid", "Ashraf", "Akhtar", "Shafi"];
console.log(names[2]+"Can't come")
names[2] = ["Zohaib"]
var newGuest = names.push("Umer", "Awais", "Abdullah")
for(var i = 0; i<names.length; i++){
    console.log(names[i]+", I would like to invite you at the dinner of tonigh at my house");
}
console.log("I am inviting "+names.length+" people at dinner")