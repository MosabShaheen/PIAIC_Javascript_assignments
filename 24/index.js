// test for equality and inequality with strings
console.log("test for equality and inequality with strings")
var a = "string"
var b = "string"
var c = a == b;
console.log(c)
var e = a != b;
console.log(e)
// test using the lower case function
console.log("test using the lower case function")
var f = a == a.toLowerCase()
console.log(f)
var g = a!= a.toLowerCase()
console.log(g)
// Numerical test involving equality and inequality.
console.log("Numerical test involving equality and inequality")
var h = 5;
var i = h == 5;
console.log(i)
var j = h!=5;
console.log(j)
// greater than and less than
console.log("greater than and less than")
var k = h <10;
console.log(k)
var l = h >10;
console.log(l)
// less than or equal to
console.log("less than or equal to")
var m = h <=10;
console.log(m)
var n = h <= 4;
console.log(n)
// greater than or equal to
console.log("greater than or equal to")
var o = h>= 4;
console.log(o)
var p = h>= 10
console.log(p)
// testing using "and" and "or" operators
console.log("testing using \"and\" and \"or\" operators")
var q = h>4 && h<10;
console.log(q)
var r = h>2 && h<4;
console.log(r)
var s = h>2 || h<4
console.log(s)
var t = h>6 || h<2;
console.log(t)
// test whether an item is in a array
console.log("test whether an item is in a array")
var u = ["Sunday", "Monday", "Friday"]
var v = u.includes("Monday")
console.log(v)
// test weather item not in array
console.log("test weather item not in array")
var w = u.includes("Satureday")
console.log(w)