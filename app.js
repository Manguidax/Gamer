// APP.js - Lógica Geral e Navegação do Mangui d'Dax

// 1. Controlo das Abas (Tabs) da Página Inicial
function mostrarAba(categoria) {
    // Seleciona todos os botões de aba e remove a classe 'active'
    const botoes = document.querySelectorAll('.tab-btn');
    botoes.forEach(btn => btn.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    event.currentTarget.classList.add('active');

    // Aqui podes adicionar lógica para filtrar os jogos por categoria
    console.log("A navegar para: " + categoria);
    
    // Exemplo: Se for 'categoria', podes esconder o carrossel e mostrar apenas listas
    if(categoria === 'categoria') {
        document.querySelector('.hero-section').style.display = 'none';
    } else {
        document.querySelector('.hero-section').style.display = 'block';
    }
}

// 2. Navegação Inferior (Jogos, Apps, Pesquisa)
const botoesNav = document.querySelectorAll('.nav-btn');

botoesNav.forEach(botao => {
    botao.addEventListener('click', () => {
        // Simula a mudança de secção
        const destino = botao.innerText.replace(/[^\w\s]/gi, '').trim();
        console.log("Abrindo secção: " + destino);
        
        // Se tivesses páginas diferentes, podias usar:
        // window.location.href = destino.toLowerCase() + '.html';
    });
});

// 3. Função para o botão de Pesquisa (Básico)
function pesquisarJogo() {
    let termo = prompt("O que queres jogar hoje no Mangui d'Dax?");
    if (termo) {
        alert("A procurar por: " + termo);
        // Aqui poderias filtrar a lista de jogos no index.html
    }
}

// 4. Efeito de vibração ao clicar nos botões (estilo mobile)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Vibração curta de 10ms
        }
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log("Universo Gamer do Mangui d'Dax pronto!");
});
