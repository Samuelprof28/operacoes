// Valida email

function validarEmail(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return {
            valido:false,
            mensagem: "Email deve conter @ e pelo menos um ponto."
        };
    }

    // Verificar se @ vem antes do ponto
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto) {
        return {
            valido:false,
            mensagem: "Formato de email inválido."
        }; 
    }

    return {
        valido:true,
        mensagem: "Email válido."
    };

}

console.log(validarEmail("annakethlyn@guaira.com.br"));
console.log(validarEmail("usuario"));
console.log(validarEmail("usuario_usariocom"));


