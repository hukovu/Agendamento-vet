const mostrarMensagens = () => {
    const main = document.querySelector('main');
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');

    main.innerHTML = ''; // Limpa o conteúdo atual

    // Verifica se agendamentos é um array
    if (Array.isArray(agendamentos)) {
        agendamentos.forEach((agendamento, index) => {
            const card = document.createElement('div');
            card.classList.add('card'); // Adiciona a classe 'card' ao elemento div
            card.innerHTML = `
                <p>Nome do Responsável: ${escapeHTML(agendamento.nome)}</p>
                <p>Nome do PET: ${escapeHTML(agendamento.nomepet)}</p>
                <p>Especie do PET: ${escapeHTML(agendamento.especie)}</p>
                <p>CPF ou Número de Matrícula: ${escapeHTML(agendamento.cpf)}</p>
                <p>E-mail: ${escapeHTML(agendamento.email)}</p>
                <p>Número para Contato: ${escapeHTML(agendamento.telefone)}</p>
                <p>Serviço Desejado: ${escapeHTML(agendamento.serviço)}</p>
                <p>Horário Desejado: ${escapeHTML(agendamento.horario)}</p>
                <p>Dia Desejado: ${escapeHTML(agendamento.data)}</p>
                <button class="delete-button" data-index="${index}">Excluir</button>
            `;
            main.appendChild(card);
        });

        // Adiciona eventos de clique aos botões de excluir
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                excluirAgendamento(index);
            });
        });
    }
}

// Função para escapar caracteres especiais HTML
const escapeHTML = (str) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Função para excluir agendamento
const excluirAgendamento = (index) => {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');
    if (Array.isArray(agendamentos)) {
        agendamentos.splice(index, 1); // Remove o agendamento do array
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos)); // Atualiza o localStorage
        mostrarMensagens(); // Atualiza a exibição
    }
}

// Chama a função para exibir as mensagens quando a página carrega
document.addEventListener('DOMContentLoaded', mostrarMensagens);
