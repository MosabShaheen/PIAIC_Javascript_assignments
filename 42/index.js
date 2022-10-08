var magicians_name = ["David Blaine", "Penn", "Jerry Sadowitz", "Dynamo", "Apollo Robbins"]

for (var i = 0; i<magicians_name.length; i++){
    console.log(show_magicians(make_great(magicians_name[i])))
}
function show_magicians(a){
    return(a)
}
function make_great(z){
    var x = magicians_name
    x = ["Great "+z]
    return x;
}