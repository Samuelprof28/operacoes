class Cachorro {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
        //Criar métodos para o cachorro
        latir() {
            return `Quando o ${this.nome} late, ele faz AU AU!`;
        }
        dormir() {
            return `${this.nome} está dormindo... zzZzZZ`;
        }
        perguntar() {
            return `A raça ${this.raca} é muito conhecida.`;
        }
        comer() {
            return `Sua ração é específica para ${this.idade} anos.`;
        }
};

const dog1 = new Cachorro("Bartolomeu", 9, "Rottweiller");

console.log(dog1.latir());
console.log(dog1.dormir());
console.log(dog1.perguntar());
console.log(dog1.comer());