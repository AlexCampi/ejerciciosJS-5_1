let num = parseInt(window.prompt("Dime un número")) 
let suma = 0
do{
    if(num<0){
        window.alert("Se ignoran los valores negativos")
    } else{
        suma += num
    }
    num = parseInt(window.prompt("Dime un número"))
} while(num!==0)

window.alert(suma)