function calcularMedia() {
    let nota1 = parseFloat(document.querySelector('input#nota1').value)
    let nota2 = parseFloat(document.querySelector('input#nota2').value)
    let nota3 = parseFloat(document.querySelector('input#nota3').value)
    let aluno = document.querySelector('input#aluno').value
    let freq = document.querySelector('input#freq').value

    let media = (nota1 + nota2 + nota3) / 3

    
    
    switch (true) {
        case(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)):
            window.alert('Por favor, insira o valor das três notas')
            break;
        case(nota1 > 10 || nota2 > 10 || nota3 > 10):
            window.alert('O valor de uma nota não pode ser maior do que 10')
            break;
        case(aluno.trim() === ''):
            window.alert('Por favor, informe o aluno que será avaliado')
            break;
        case(freq.trim() === ''):
            window.alert(`Por favor, insira a frequência de ${aluno}`)
            break;
        case(freq < 75 || media <7):
            document.querySelector('input#media').value = media.toFixed(1)
            document.querySelector('p#chamada').innerHTML = `${aluno} está REPROVADO(a), com uma média de ${media.toFixed(1)} pontos e frequência de ${freq}% `
            break; 
        case(freq >= 75 || media >=7):
            document.querySelector('input#media').value = media.toFixed(1)
            document.querySelector('p#chamada').innerHTML = `${aluno} está APROVADO(a), com uma média de ${media.toFixed(1)} pontos e frequência de ${freq}% `
            break;
    }
}

function limparInputs() {
    const inputs = document.querySelectorAll('#Formulario input');
    inputs.forEach(input => {input.value = '';});
}