// Atencao aa sintaxe
function somar(a:number = 0, b:number = 0) :number{
    return a + b;
}

var resultado = somar(3, 5);
console.log("Result: " + resultado);
resultado =  somar(3, 6);
console.log("Result: " + resultado);
resultado = somar(5);
console.log("Result: " + resultado);
resultado = somar();
console.log("Result: " + resultado);