var person = "Mosab shaheen";
console.log(person.toUpperCase()+"\n");
console.log(person.toLowerCase()+"\n");
var a = person.toLowerCase().split(" ");
for (var i = 0; i<a.length; i++){
    a[i] = a[i][0].toUpperCase()+ a[i].slice(1);
}

console.log(a.join(" "))