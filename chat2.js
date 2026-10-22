
console.log(todecimal("101",2))
console.log(todecimal("a121",16))
console.log(todecimal("777",8))
console.log(todecimal("zz",36))


function toBinary(deci,base){
     const alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSXYZ"
  let remainder = undefined
  let joined = ""
let array = []

if(deci === 0){
    return "0"
}

    while( deci > 0){
        remainder = deci % base
        deci = Math.floor(deci / base)
        array.push(alpha[remainder])
    }
 
 joined = array.reverse().join("")
return joined
}
console.log(toBinary(52,2))
console.log(toBinary(255,16))


function convert(value, fromBase, toBase) {
let negative = ""
if(value.includes("-")){
 negative = value.slice(0,1)
 value = value.slice(1) 
}
const alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSXYZ"
let converted = 0 
let joined = ""
let arrayold = value.toUpperCase().split("").reverse()
let remainder = undefined
let array = []

for(let i = 0; i < arrayold.length; i++){
    
 if(arrayold.indexOf(alpha[i]) >= fromBase){
return `${arrayold.indexOf(alpha[i])} is not a valid base ${fromBase}`
    }

converted += alpha.indexOf(arrayold[i]) * (fromBase ** i)
}
  let temp = converted
if(temp === 0){
    return "0"
}
while(temp > 0){
        remainder = temp % toBase
        temp  = Math.floor(temp / toBase)
        array.push(alpha[remainder])
    } 
joined = negative + array.reverse().join("")
return joined 
 
}

console.log(convert("-FF", 16, 2))
console.log(convert("-1010", 2, 10))