const numeroSenha = Document.querySelector('parametro-senha__texto');
let tamanhoSenha = 12;]
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;