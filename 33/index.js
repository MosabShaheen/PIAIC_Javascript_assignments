var ordinal_num = [1,2,3,4,5,6,7,8,9]
var a = ordinal_num[0]
a = true
var b = ordinal_num[1]
b = true
var c = ordinal_num[2]
c = true

for (var i = 0; i<ordinal_num.length; i++){
    if(a){
        console.log(ordinal_num[i]+"st")
        a = false;
    }
    else if(b){
        console.log(ordinal_num[i]+"nd")
        b = false
        
    }
    else if(c){
        console.log(ordinal_num[i]+"rd")
        c = false
    }
    else{
        console.log(ordinal_num[i]+"th")
    }
}