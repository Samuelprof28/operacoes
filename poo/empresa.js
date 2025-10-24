function Funcionario(nome, salario, departamento) {
this.nome = nome;
this.salario = salario;
this.departamento = departamento;
this.ativo = true;
}

Funcionario.prototype.trabalhar = function() {
    console.log(`${this.nome} está trabalhando no departamento de ${this.departamento}`);
};

//PARÊNTESES (  ) · CHAVES {    } · CRÁSE ` (Ao contrário do acento agudo.)
//Herança clássica: baseada em classes, estrutura fixa, copia um comportamento e hierarquia rígida.
//Herança prototípica: baseada em objetos, estrutura dinâmica, delega comportamento e cadeia flexível.

Funcionario.prototype.receberSalario = function() {
    console.log(`${this.nome} recebeu o salário de R$ ${this.salario.toFixed(2)}`);
};

Funcionario.prototype.demitir = function() {
    this.ativo = false;
        console.log(`${this.nome} foi demitido(a)`);
};

Funcionario.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Funcionário: ${ this.nome} | Salário: R$ ${this.salario.toFixed(2)} | 
    Depto: ${this.departamento} | Status: ${this.status}`);
};

//Construtor derivado: Desenvolvedor
function Desenvolvedor(nome, salario, linguagem, senioridade) {
    Funcionario.call(this, nome, salario, "TI");
    this.linguagem = linguagem;
    this.senioridade = senioridade;
    this.projetos = [];
};

//Configurando a herança prototípica
Desenvolvedor.prototype = Object.create(Funcionario.prototype);
Desenvolvedor.prototype.constructor = Desenvolvedor;

Desenvolvedor.prototype.programar = function() {
    console.log(`${this.nome} está programando em ${this.linguagem}`);
};

//Criar um método p/ que o desenvolvedor faça projetos "adicionarProjetos"
Desenvolvedor.prototype.adicionarProjetos = function(projeto) { 
    this.projetos.push(projeto);
    console.log(`${this.nome} foi adicionado ao projeto: ${projeto}`);
};

Desenvolvedor.prototype.trabalhar = function() {
    console.log(`${this.nome} (${this.senioridade}) está desenvolvendo
        software`);
};

Desenvolvedor.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Desenvolvedor: ${this.nome} | ${this.senioridade} | 
        ${this.linguagem} | Projetos: ${this.projetos.length} | 
        ${this.status}`);
};

//Constructor derivado: Gerente
function Gerente(nome, salario, departamento, equipe) {
    Funcionario.call(this, nome, salario, departamento);
    this.equipe = equipe || [];
    this.bonus = 0;   
};

Gerente.prototype = Object.create(Funcionario.prototype);
Gerente.prototype.constructor = Gerente;

Gerente.prototype.gerenciar = function() {
    console.log(`${this.nome} está gerenciando uma equipe de ${this.equipe.length} 
        pessoas`);
};

Gerente.prototype.adicionarFuncionario = function(funcionario) {
    this.equipe.push(funcionario)
    console.log(`${funcionario} foi adicionado à equipe de ${this.nome}`);
};

Gerente.prototype.darBonus = function(valor) {
    this.bonus = valor;
    console.log(`${this.nome} recebeu um bônus de R$ ${valor.toFixed(2)}`);
};

Gerente.prototype.receberSalario = function() {
    const total = this.salario + this.bonus;
    console.log(`${this.nome} recebeu salário + bônus: R$ ${total.toFixed(2)}`);
    this.bonus = 0;
};

console.log("*** TESTANDO HERANÇA PROTOTÍPICA ***");

const funcionario1 = new Funcionario("Diana", 3000, "RH");
funcionario1.trabalhar();
funcionario1.receberSalario();
funcionario1.info();
console.log();

const dev = new Desenvolvedor("Pedro", 6000, "JavaScript", "Sênior");
dev.programar();
dev.adicionarProjetos("Sistema de E-Commerce");
dev.trabalhar();
dev.receberSalario();
console.log();

const gerente = new Gerente("Oscar", 10000, "Gerência", "TI");
gerente.adicionarFuncionario("Anna K.");
gerente.gerenciar();
gerente.darBonus(3000);
gerente.receberSalario();
