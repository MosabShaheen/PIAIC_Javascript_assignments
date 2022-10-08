var fruits = ["banana", "orange", "graps"]
var check = "orange"
var a = fruits[0] == check;
var b = fruits[1] == check;
var c = fruits[2] == check;
if(a){
    console.log("You really like banana")
}
else if(b){
    console.log("You really like orange")
}
else if(c){
    console.log("You really like graps")
}
else{
    console.log("The fruite does't exist in array")
}