var animals = ["Eagle", "Cheetah", "Wolve"]

for (var i = 0; i<animals.length; i++){
    console.log(animals[i])
    if(animals[i]==animals[0]){
        console.log(animals[i]+" has Powerfull vision.")
    }
    else if(animals[i]==animals[1]){
        console.log("The legs of the "+animals[i]+" are long")
    }
    else if(animals[i]==animals[2]){
        console.log(animals[i]+" have over 200 million scent cells")
    }
}
console.log("These animals are fearless Hunters.")