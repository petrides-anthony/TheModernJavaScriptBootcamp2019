let fahrenheit = 50 // 0c and 273.15k

// Calculate celsius and store in celsius variable
// Formula: Deduct 32, then multiply by 5, then divide by 
// print that value

let celsius = ((fahrenheit - 32) * 5) / 9
console.log(fahrenheit + "f" + " " + "is" + " " + celsius + "c" )

// calculate kelvin value and store in variable
// Formula: Deduct 32, then multiplay by 5, then divide by 9, then 273.15
// print that value

let kelvin = (((fahrenheit - 32) * 5) / 9) + 273.15
console.log(fahrenheit + "f" + " " + "is" + " " + kelvin + "k" )