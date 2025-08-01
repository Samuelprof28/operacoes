// for loop - matriz de multiplicação
console.log("Matriz");
const tamanhoMatriz = 4;
let matriz = [];

// criando e preenchendo a matriz
for (let linha = 0; linha < tamanhoMatriz; linha++) {
    matriz[linha] = [];
    
    for (let coluna = 0; coluna < tamanhoMatriz; coluna++) {
       matriz[linha][coluna] = (linha + 1) * (coluna + 1);
    }
}

// exibir a matriz formatada
console.log("Matriz de multiplicação 4x4:");
console.log(" ", "1", "2", "3", "4");
console.log("   +-----------");

for (let i = 0; i < tamanhoMatriz; i++) {
    let linhaFormatada = `${i + 1} |`;
// A AULA COMEÇA AQUI 26/06
    for (let j = 0; j < tamanhoMatriz; j++) {
        linhaFormatada += `${matriz[i][j].toString().padStart(2,'')}`;
    }
    console.log(linhaFormatada);
}

// Calcular a soma da diagonal principal
let somaDiagonal = 0;
for (let d = 0; d < tamanhoMatriz; d++) {
    somaDiagonal += matriz[d][d];
}
console.log(`\nSoma da diagonal principal: ${somaDiagonal}`);

// Testando 
console.log("\n===Exemplo Bônus: While com Break e Continue===");
let numeroAtual = 0;
let numerosPares = [];
let numerosImpares = [];

while (true) {
    numeroAtual++;
    if (numeroAtual > 20) {
        break; 
    }
    if (numeroAtual % 5 === 0) {
        console.log(`Pulando o número ${numeroAtual} (múltiplo de 5)`);
        continue;
    } //continua a partir daqui
    if (numeroAtual % 2 === 0) {
        numerosPares.push(numeroAtual);
    } else {
        numerosImpares.push(numeroAtual);
    }
}

console.log(`Números pares (exceto múltiplos de 5): [${numerosPares.join(",")}]`);
console.log(`Números ímpares (exceto múltiplos de 5): [${numerosImpares.join(",")}]`);

