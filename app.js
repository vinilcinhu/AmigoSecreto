//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(nome) {
	let nomeAmigo = document.getElementById('amigo').value;
	if(nomeAmigo.trim() == '') { //o trim serve para remover espaços em branco no início e no final da string
		alert('Por favor, insira um nome válido.');
		return;
	}

	amigos.push(nomeAmigo); // Adiciona o nome do amigo ao array
	exibirAmigosTela(); // Atualiza a exibição da lista de amigos na tela
	console.log(`Amigo ${nomeAmigo} adicionado com sucesso!`);
	document.getElementById('amigo').value = ''; // Limpa o campo de entrada após adicionar
	document.getElementById('amigo').focus(); // Foca novamente no campo de entrada
}

function exibirAmigosTela (){
	let listaAmigos = document.getElementById('listaAmigos');
	listaAmigos.innerHTML = ''; // Limpa a lista antes de exibir os amigos

	for (let i = 0; i < amigos.length; i++) {
		let itemLista = document.createElement('li'); // Cria um novo item de lista
		itemLista.textContent = amigos[i]; // Define o texto do item como o nome do amigo
		listaAmigos.appendChild(itemLista); // Adiciona o item à lista de amigos
	}
}

function sortearAmigo() {
	if (amigos.length === 0) {
		alert('Por favor, adicione amigos antes de sortear.');
		return;
	}

	let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
	//math.floor arredonda o número para baixo, e math.random gera um número aleatório entre 0 e 1
	//ao multiplicar por amigos.length, garantimos que o índice esteja dentro do intervalo válido do array

	let amigoSorteado = amigos[indiceSorteado]; // Seleciona o amigo sorteado usando o índice aleatório
	
	let resultado = document.getElementById('resultado');

	resultado.innerHTML = `O amigo secreto sorteado é: **${amigoSorteado}**!` ; // Exibe o resultado do sorteio na tela
}