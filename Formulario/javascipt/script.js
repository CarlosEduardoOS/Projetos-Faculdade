function conferirErros(event) {
    let temErro = false; // isso aqui a gente vai usar pra ser o retorno de todos os erros, assim todos os erros podem disparar ao mesmo tempo


    //data
    let nascimento = parseFloat(document.querySelector('input#iData').value);
    if (nascimento < 1900 || nascimento > 2024) {
        document.querySelector("span.erroData").style.opacity = "1";
        document.querySelector("#iData").style.borderColor = "red";
        document.querySelector("#iData").style.boxShadow = "0px 0px 5px red";
        temErro = true;
    } else {
        document.querySelector("span.erroData").style.opacity = "0";
        document.querySelector("#iData").style.borderColor = "var(--preto)";
        document.querySelector("#iData").style.boxShadow = "0px 0px 5px var(--preto)";
    }

    //cidade
    let cidade = document.querySelector('#iCidade').value;
    if (cidade === " ") { 
        document.querySelector("span.erroCidade").style.opacity = "1";
        document.querySelector("#iCidade").style.borderColor = "red";
        document.querySelector("#iCidade").style.boxShadow = "0px 0px 5px red";
        temErro = true;
    } else {
        document.querySelector("span.erroCidade").style.opacity = "0";
        document.querySelector("#iCidade").style.borderColor = "var(--preto)";
        document.querySelector("#iCidade").style.boxShadow = "0px 0px 5px var(--preto)";
    }

    //senhas
    let senha = document.querySelector("#iSenha").value;
    let csenha = document.querySelector("#iCsenha").value;
    if (senha !== csenha) {
        document.querySelector("span.erroSenha").style.opacity = "1";
        document.querySelector("#iSenha").style.borderColor = "red";
        document.querySelector("#iCsenha").style.borderColor = "red";
        document.querySelector("#iSenha").style.boxShadow = "0px 0px 5px red";
        document.querySelector("#iCsenha").style.boxShadow = "0px 0px 5px red";
        temErro = true;
    } else {
        document.querySelector("span.erroSenha").style.opacity = "0";
        document.querySelector("#iSenha").style.borderColor = "var(--preto)";
        document.querySelector("#iCsenha").style.borderColor = "var(--preto)";
        document.querySelector("#iSenha").style.boxShadow = "0px 0px 5px var(--preto)";
        document.querySelector("#iCsenha").style.boxShadow = "0px 0px 5px var(--preto)";
    }

    if (temErro) {
        event.preventDefault(); // Impede o envio do formulário
    }
}


function mudarCidades() {
    const estadoSelect = document.getElementById("iEstado");
    const cidadeSelect = document.getElementById("iCidade");
    cidadeSelect.innerHTML = '<option value=" ">Selecione uma cidade</option>';

    const estado = estadoSelect.value;

    let opcoesCidades;
    if (estado === "SP") {
        opcoesCidades = ["São Paulo", "Guarulhos", "Campinas", "Osasco", "Santo André"];
    } else if (estado === "MG") {
        opcoesCidades = ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"];
    } else if (estado === "RJ") {
        opcoesCidades = ["Rio de Janeiro", "Niterói", "Petrópolis"];
    } else if (estado === "BA") {
        opcoesCidades = ["Salvador", "Feira de Santana", "Vitória da Conquista"];
    } else if (estado === "PR") {
        opcoesCidades = ["Curitiba", "Londrina", "Maringá"];
    }

    if (opcoesCidades) {
        opcoesCidades.forEach(cidade => {
            const novaOpcao = document.createElement("option");
            novaOpcao.value = cidade;
            novaOpcao.textContent = cidade;
            cidadeSelect.appendChild(novaOpcao);
        });
    }
}

function mostrarSenha(inputId, icon) {
const input = document.getElementById(inputId);
if (input.type === "password") {
    input.type = "text";
    icon.innerHTML = '<i class="fas fa-eye-slash" style="font-size: .8em;"></i>';
} else {
    input.type = "password";
    icon.innerHTML = '<i class="fas fa-eye" style="font-size: .8em;"></i>';
}
}