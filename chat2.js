function convert(value, fromBase, toBase) {
let negative = ""
if(value.startsWith("-")){
 negative = value.slice(0,1)
 value = value.slice(1) 
}
let pointSplit = ""
if(value.includes(".")){
    pointSplit = value.split(".")
    if(pointSplit.length >= 3){
        return "Inavlid Base"
    }
    value = pointSplit[0]
    if(value === ""){
        value = "0"
    }
    pointSplit = pointSplit[1].split("")
}
console.log(pointSplit)
const alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let pointReminder = 0
let converted = 0 
let joined = ""
let arrayold = value.toUpperCase().split("").reverse()
let remainder = undefined
let array = []

for(let i = 0; i < arrayold.length; i++){
    
 if(alpha.indexOf(arrayold[i]) >= fromBase || alpha.indexOf(arrayold[i]) === -1){
        return `Error: ${arrayold[i]} Is not a valid base ${fromBase}`
    }

converted += alpha.indexOf(arrayold[i]) * (fromBase ** i)
}
for(let i = 0; i < pointSplit.length; i++){
    pointReminder += alpha.indexOf(pointSplit[i]) * (1 / fromBase ** (i + 1))
}
console.log(pointReminder)
  let temp = converted
// if(temp === 0){
//     return "0"
// }
while(temp > 0){
        remainder = temp % toBase
        temp  = Math.floor(temp / toBase)
        array.push(alpha[remainder])
    } 
joined = negative + array.reverse().join("") + pointReminder 
return joined 
 
}
console.log(convert("-FF", 16, 2))
console.log(convert("0.11", 2, 10))

