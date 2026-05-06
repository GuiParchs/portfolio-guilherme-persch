// Evento de carregamento
document.addEventListener('DOMContentLoaded', function() {
    // Formulário
    const form = document.getElementById('msg-form');

    // Modal
    const modal = document.getElementById('modal');
    const btnFechar = document.getElementById('modal-fechar');


    // Adiciona listener no formulário
    form.addEventListener('submit', validate_form);

    // Listener para fechar modal
    btnFechar.addEventListener('click', () => {
        modal.close();
        form.reset();
    });
})

// Função de validação
function validate_form(event) {
    // Desativa recarregamento da pag.
    event.preventDefault();

    // Valores do formulário
    const nome = document.getElementById('nome-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const msg = document.getElementById('mensagem-input').value.trim();

    // Modal
    const modal = document.getElementById('modal');

    // Validação
    if (nome === '' || email === '' || msg === '') {
        alert('Por favor, preencha todos campos antes de enviar o formulário!');
        return;

    } else if (nome.length < 3) {
        alert('Por favor, digite um nome válido.');
        return;

    } else if (msg.length < 10) {
        alert('Por favor, digite uma mensagem mais longa.');
        return;
    }

    // Ativar modal
    modal.showModal();
}