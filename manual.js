// manual.js - Lógica de Comentários e Sessões

// 1. Sistema de Estrelas
let estrelasSelecionadas = 0;

function avaliar(n) {
    estrelasSelecionadas = n;
    const estrelas = document.querySelectorAll('#star-rating span');
    
    // Limpa todas as estrelas e ativa até o número clicado
    estrelas.forEach((estrela, index) => {
        if (index < n) {
            estrela.classList.add('active');
            estrela.innerHTML = '★'; // Estrela cheia
        } else {
            estrela.classList.remove('active');
            estrela.innerHTML = '☆'; // Estrela vazia
        }
    });

    // Mostra a caixa para escrever o comentário
    document.getElementById('area-comentario').style.display = 'block';
}

// 2. Enviar Comentário e Guardar no Navegador
function enviarComentario() {
    const nome = document.getElementById('nome-user').value;
    const msg = document.getElementById('msg-user').value;

    if (nome.trim() === "" || msg.trim() === "") {
        alert("Para o Mangui d'Dax aprovar, precisas de colocar o teu nome e comentário!");
        return;
    }

    const lista = document.getElementById('lista-comentarios');
    
    // Cria o elemento do comentário
    const novoDiv = document.createElement('div');
    novoDiv.className = 'comment-card';
    
    // Gera as estrelas em texto para o comentário
    let estrelasTexto = '★'.repeat(estrelasSelecionadas) + '☆'.repeat(5 - estrelasSelecionadas);

    novoDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <b style="color: #202124;">${nome}</b><br>
                <span style="color: #01875f; font-size: 12px;">${estrelasTexto}</span>
                <p style="margin: 5px 0; color: #5f6368;">${msg}</p>
            </div>
            <button class="delete-btn" onclick="eliminarComentario(this)">⋮</button>
        </div>
    `;

    // Adiciona no topo da lista
    lista.prepend(novoDiv);

    // Limpa os campos e esconde a caixa
    document.getElementById('nome-user').value = "";
    document.getElementById('msg-user').value = "";
    document.getElementById('area-comentario').style.display = 'none';
    
    alert("Comentário enviado com sucesso!");
}

// 3. Função para os "3 pontinhos" (Eliminar/Ocultar)
function eliminarComentario(botao) {
    if(confirm("Desejas ocultar ou eliminar este comentário?")) {
        botao.closest('.comment-card').style.opacity = '0.3';
        setTimeout(() => {
            botao.closest('.comment-card').remove();
        }, 500);
    }
}

// 4. Lógica para abrir as sessões (Requisitos, Sobre, etc)
function abrirSeccao(id) {
    const todosConteúdos = document.querySelectorAll('.content');
    const elemento = document.getElementById(id);
    
    // Fecha as outras se quiseres um efeito sanfona, ou deixa abrir várias
    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}