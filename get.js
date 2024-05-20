const mostrarMensagens = () => {
    const main = document.querySelector('main');
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');

    main.innerHTML = ''; // Limpa o conteúdo atual

    // Verifica se agendamentos é um array
    if (Array.isArray(agendamentos)) {
        agendamentos.forEach(agendamento => {
            const card = document.createElement('div');
            card.classList.add('card'); // Adiciona a classe 'card' ao elemento div
            card.innerHTML = `
                <p>Nome do Responsável: ${escapeHTML(agendamento.nome)}</p>
                <p>Nome do PET: ${escapeHTML(agendamento.nomepet)}</p>
                <p>CPF ou Número de Matrícula: ${escapeHTML(agendamento.cpf)}</p>
                <p>E-mail: ${escapeHTML(agendamento.email)}</p>
                <p>Número para Contato: ${escapeHTML(agendamento.telefone)}</p>
                <p>Horário Desejado: ${escapeHTML(agendamento.horario)}</p>
                <p>Dia Desejado: ${escapeHTML(agendamento.data)}</p>
            `;
            main.appendChild(card);
        });
    }
}

// Função para escapar caracteres especiais HTML
const escapeHTML = (str) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Chama a função para exibir as mensagens quando a página carrega
document.addEventListener('DOMContentLoaded', mostrarMensagens);
