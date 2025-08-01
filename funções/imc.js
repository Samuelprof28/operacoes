// Calcular o IMC (Índice de massa corporal)
function calcularIMC(peso, altura, mostrarCategoria = true) { 
const imc = peso / (altura * altura);
    if (!mostrarCategoria) {
        return imc.toFixed(2);
    }
// Determinar a categoria do IMC
let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc < 35) {
        categoria = "Obesidade grau I";
    } else if (imc < 40) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    return {
        imc:imc.toFixed(2),
        categoria: categoria
    };
}
    console.log(calcularIMC(70, 1.75));
    console.log(calcularIMC(96, 1.62));
    console.log(calcularIMC(120, 1.89));
    console.log(calcularIMC(90, 1.80));
    console.log(calcularIMC(50, 1.85));
    console.log(calcularIMC(160, 1.63));

  
