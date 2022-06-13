let num = window.prompt("Dime un número")
while(num>0){

    if(num>0){
        let numReverse = num.split("").reverse().join("")
        console.log(parseInt(numReverse))
        num = window.prompt("Dime un número")
    } else if(num===0){
        console.log(num)
    }
} 