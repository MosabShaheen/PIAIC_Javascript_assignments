var names = ["Khalid", "Ashraf", "Akhtar", "Shafi"];
console.log("Sorry, "+names[2]+" Can't come")
names[2] = ["Zohaib"]
var newGuest = names.push("Umer", "Awais", "Abdullah")
console.log("Sorry only tow people can come to dinner")
var shrink = names.pop()
console.log("Sorry, "+shrink+" You cannot come to dinner")
shrink = names.pop()
console.log("Sorry, "+shrink+" You cannot come to dinner")
shrink = names.pop()
console.log("Sorry, "+shrink+" You cannot come to dinner")
shrink = names.pop()
console.log("Sorry, "+shrink+" You cannot come to dinner")
shrink = names.pop()
console.log("Sorry, "+shrink+" You cannot come to dinner")

for(var i = 0; i<names.length; i++){
    console.log(names[i]+", You can come to dinner tonight");
}