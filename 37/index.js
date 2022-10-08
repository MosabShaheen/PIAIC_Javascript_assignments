var size = [30, 32, 28]
var c = "I love JavaScript"
var message = [c, c,"This is the shirt of famous brand"]
for (var i = 0; i<size.length; i++){
    console.log(make_shirt(size[i], message[i]))
}
function make_shirt(a, b){
    return("Size = "+a+", "+b)
}

