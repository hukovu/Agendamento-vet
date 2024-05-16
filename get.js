const mostrarMensagens = () => {
    const main = document.querySelector('main');
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');

    main.innerHTML = ''; // Limpa o conteúdo atual

    agendamentos.forEach(agendamento => {
        const card = document.createElement('div');
        card.classList.add('card'); // Adiciona a classe 'card' ao elemento div
        card.innerHTML = `
            <p>Nome do Responsável: ${agendamento.nome}</p>
            <p>Nome do PET: ${agendamento.nomepet}</p>
            <p>CPF ou Número de Matrícula: ${agendamento.cpf}</p>
            <p>E-mail: ${agendamento.email}</p>
            <p>Número para Contato: ${agendamento.telefone}</p>
            <p>Horário Desejado: ${agendamento.horario}</p>
            <p>Dia Desejado: ${agendamento.data}</p>
        `;
        main.appendChild(card);
    });
}