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

// --- NOVO CÓDIGO PARA O ENTER ---

// 1. Obter uma referência ao campo de entrada (input)
let campoNomeAmigo = document.getElementById('amigo');

// 2. Adicionar um ouvinte de eventos para a tecla pressionada
campoNomeAmigo.addEventListener('keydown', function(event) {
    // 3. Verificar se a tecla pressionada foi 'Enter' (código 13 ou o mais moderno 'Enter')
    if (event.key === 'Enter') { // ou event.keyCode === 13 para navegadores mais antigos
        // 4. Se for Enter, chamar a função adicionarAmigo()
        adicionarAmigo();
        // Opcional: Impedir o comportamento padrão do Enter (que em alguns formulários recarrega a página)
        event.preventDefault(); 
    }
});