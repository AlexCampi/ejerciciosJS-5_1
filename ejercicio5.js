let num = parseInt(window.prompt("Dime un número"))
do{
let suma = 0

for(let i = 1; i<= num; i++){
    suma += i
}

console.log(suma)
num = parseInt(window.prompt("Dime un número"))
} while(num!==0)