let valor = window.prompt("¿Quieres que muestre los números pares (P) o impares (I)?").toUpperCase()

do{
let num = 100
if(valor==="P"){
    for(let i = 1; i<= num; i++){
        if(i%2===0){
            console.log(`${i}`)
        }
    }
    valor = "X"
} else if(valor==="I"){
    for(let i = 1; i<= num; i++){
        if(i%2!==0){
            console.log(`${i}`)
        }
    }
    valor = "X"
} else{
    window.alert("Este valor no es correcto")
    valor = window.prompt("Quieres que muestre los números pares (P) o impares (I)").toUpperCase()
}
} while(valor === "P" || valor === "I")