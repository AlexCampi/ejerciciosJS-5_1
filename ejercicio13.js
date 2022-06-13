let num = window.prompt("Dime tu fecha de nacimiento")
let day = parseInt(num.substring(0,2))
console.log(day)
let month = parseInt(num.substring(3,5))
let year = parseInt(num.substring(6,10))
let sum1 = (day+month+year).toString()
console.log(sum1)
let sum2 = 0
for(let i=0;i<sum1.length;i++){
    sum2+=parseInt(sum1.substring(i,i+1))
}
sum2.toString()
console.log(sum2)
let sum3 = 0
for(let i=1;i<=sum2.length;i++){
    sum3+= parseInt(sum2.substring(i,i+1))
}
console.log(sum3)
window.alert(`Tu número de la suerte es ${sum3}`)