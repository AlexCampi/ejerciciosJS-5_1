let limit = 10
let suma = 0
for (let i = 1; i <= limit; i++) {
    let num = parseInt(window.prompt("Dime un número"))
    suma += num
}

console.log(`La media de todos los valores introducidos es ${suma/limit}`)