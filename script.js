  // Aguarda o carregamento da página
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🍽️ Site do Restaurante Beira Rio carregado!');
    verificarSeEstaAberto();
    configurarFormulario();
});

// Função para rolar suavemente até uma seção
function rolarPara(secaoId) {
    const elemento = document.getElementById(secaoId);
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
        });
        mostrarMensagem(`Navegando para: ${secaoId.charAt(0).toUpperCase() + secaoId.slice(1)}`);
    }
}

// Verifica se o restaurante está aberto
function verificarSeEstaAberto() {
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = domingo, 1 = segunda...
    const hora = agora.getHours();
    
    let estaAberto = false;
    
    if (diaSemana >= 1 && diaSemana <= 5) { // Segunda a sexta
        estaAberto = hora >= 11 && hora < 22;
    } else { // Sábado e domingo
        estaAberto = hora >= 11 && hora < 23;
    }
    
    const elementoStatus = document.getElementById('statusRestaurante');
    if (estaAberto) {
        elementoStatus.innerHTML = '🟢 <span class="status-open">ABERTO AGORA</span>';
    } else {
        elementoStatus.innerHTML = '🔴 <span class="status-closed">FECHADO</span>';
    }
}

// Configura o formulário de contato
function configurarFormulario() {
    const formulario = document.getElementById('formularioContato');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Simula envio da mensagem
        mostrarMensagem(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`, 5000);
        
        // Limpa o formulário
        formulario.reset();
    });
}

// Mostra mensagens temporárias
function mostrarMensagem(texto, tempo = 3000) {
    // Remove mensagem anterior se existir
    const mensagemAnterior = document.querySelector('.mensagem-flutuante');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
    
    // Cria nova mensagem
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-flutuante';
    mensagem.textContent = texto;
    
    document.body.appendChild(mensagem);
    
    // Remove após o tempo especificado
    setTimeout(() => {
        if (mensagem) {
            mensagem.remove();
        }
    }, tempo);
}

// Efeito no header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(90deg, #2a9503, #3d8b40)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'linear-gradient(90deg, #30b504, #4caf50)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});

console.log('✅ Todas as funcionalidades carregadas com sucesso!');