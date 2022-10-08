var city = ["Karachi", "Lahore", "London"]
var default_country = "Pakistan"
var country = [default_country, default_country, 'England']
for (var i = 0; i<city.length; i++){
    console.log(describe_city(city[i], country[i]))
}

function describe_city( city, country){
    return(city+" is in "+country)
}