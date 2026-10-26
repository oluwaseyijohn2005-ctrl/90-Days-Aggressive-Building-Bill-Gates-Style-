function convert(value, fromBase, toBase) {
let array = []
let negative = "" 
if(value.startsWith("-")){
 negative = value.slice(0,1)
 value = value.slice(1) 
}
if(value === ""){
        return "Invalid Number"
    }
let pointSplit = []
if(value.includes(".")){
    pointSplit = value.split(".")
    if(pointSplit.length >= 3){
        return "Invalid Base"
    }
    value = pointSplit[0]
    if(pointSplit[0] === ""){
        value = "0"
    }
    if(pointSplit[0] === "" && pointSplit[1] === "" ){
        return "Invalid Number"
    }
    pointSplit = pointSplit[1].split("")
}
const alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let pointReminder = 0
let converted = 0 
let joined = ""
let arrayold = value.toUpperCase().split("").reverse()
let remainder = undefined


for(let i = 0; i < arrayold.length; i++){
    
 if(alpha.indexOf(arrayold[i]) >= fromBase || alpha.indexOf(arrayold[i]) === -1){
        return `Error: ${arrayold[i]} Is not a valid base ${fromBase}`
    }

converted += alpha.indexOf(arrayold[i]) * (fromBase ** i)

}
for(let i = 0; i < pointSplit.length; i++){
pointReminder += alpha.indexOf(pointSplit[i]) * 1 / fromBase ** (i + 1)

}
let countDown = 5 
let collected = [] 



while(pointReminder > 0 && countDown > 0){
pointReminder = pointReminder * toBase
collected.push(alpha[Math.floor(pointReminder)])
pointReminder = pointReminder - Math.floor(pointReminder)
countDown--
}



let fractions = collected.join("")
let temp = converted
  
if(temp === 0 && collected.length === 0){
    return "0"
}
if(temp === 0 && collected.length > 0){
    array.push("0")
}
while(temp > 0){
        remainder = temp % toBase
        temp  = Math.floor(temp / toBase)
        array.push(alpha[remainder])
    }
    let interPart = array.reverse().join("")
    let dot = fractions ? "." : ""
joined = negative + interPart + dot + fractions 
return joined 
 
}
console.log(convert("-FF", 16, 2))
console.log(convert("0.11", 2, 10))
console.log(convert("0", 16, 2))
console.log(convert("", 16, 2))
console.log(convert("10.", 10, 2))
console.log(convert(".11", 2, 10))
console.log(convert("0.75", 10, 2))
console.log(convert("10.11", 2, 10)) 
console.log(convert("-0.11", 2, 10))
console.log(convert("FF.FF", 16, 10))
console.log(convert("101.101", 2, 10))

console.log(convert("0.1", 10, 2))
console.log(convert("0.2", 10, 2))

console.log(convert(".", 2, 10))
console.log(convert("..", 2, 10))
console.log(convert("10..11", 2, 10))