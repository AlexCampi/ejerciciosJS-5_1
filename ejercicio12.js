let num = window.prompt("Dime un número de tres cifras")
let suma = 0

for(let i = 0; i<num.length; i++){
    suma+= parseInt(num.substring(i,i+1))
}
window.alert(suma)