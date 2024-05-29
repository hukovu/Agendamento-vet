document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('data');
    const horarioInput = document.getElementById('horario');

    dateInput.addEventListener('input', () => {
        const selectedDate = new Date(dateInput.value);
        const dayOfWeek = selectedDate.getUTCDay();

        if (dayOfWeek === 6 || dayOfWeek === 0) {
            alert('Sábados e domingos não são permitidos. Por favor, escolha outro dia.');
            dateInput.value = ''; // Clear the input value
        }
    });

    const setMinMaxDate = () => {
        const today = new Date();
        const maxDate = new Date(today.getFullYear() + 1, 11, 31); // 1 year ahead
        dateInput.setAttribute('min', today.toISOString().split('T')[0]);
        dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    };

    const disableWeekends = (event) => {
        const selectedDate = new Date(event.target.value);
        if (isWeekend(selectedDate)) {
            alert('Sábados e domingos não são permitidos. Por favor, escolha outro dia.');
            event.target.value = ''; // Clear the input value
        }
    };

    const isWeekend = (date) => {
        const day = date.getUTCDay();
        return day === 6 || day === 0;
    };

    setMinMaxDate();
    dateInput.addEventListener('input', disableWeekends);

    document.getElementById('cpf').addEventListener('input', aplicarMascaraCPF);
    document.getElementById('telefone').addEventListener('input', aplicarMascaraTelefone);
});

function aplicarMascaraCPF(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    event.target.value = value;
}

function aplicarMascaraTelefone(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }
    event.target.value = value;
}

function validarFormulario() {
    let agendamento = {};
    const data = document.getElementById("data");
    agendamento.data = data.value;
    const nome = document.getElementById("nome");
    agendamento.nome = nome.value;
    const cpf = document.getElementById("cpf");
    agendamento.cpf = cpf.value;
    const serviço = document.getElementById("serviço");
    agendamento.serviço = serviço.value;
    const telefone = document.getElementById("telefone");
    agendamento.telefone = telefone.value;
    const email = document.getElementById("e-mail");
    agendamento.email = email.value;
    const horario = document.getElementById("horario");
    agendamento.horario = horario.value;
    const nomepet = document.getElementById("nomepet");
    agendamento.nomepet = nomepet.value;
    const especie = document.getElementById("especie");
    agendamento.especie = especie.value

    if (agendamento.data === "" || agendamento.nome === "" || agendamento.cpf === "" || agendamento.telefone === "" || agendamento.email === "" || agendamento.horario === "" || agendamento.nomepet === "" || agendamento.serviço === "" || agendamento.especie === "") {
        return false;
    } else {
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');
        
        // Verifica se o horário já foi agendado
        let horarioExistente = agendamentos.find(a => a.data === agendamento.data && a.horario === agendamento.horario);
        if (horarioExistente) {
            alert("Este horário já está agendado para a data selecionada. Por favor, escolha outro horário.");
            return false;
        }

        // Adicionar o novo agendamento
        agendamentos.push(agendamento);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        alert("Agendado com Sucesso");

        // Limpa os campos do formulário
        data.value = "";
        nome.value = "";
        cpf.value = "";
        telefone.value = "";
        email.value = "";
        horario.value = "";
        nomepet.value = "";
        serviço.value = "";
        especie.value = "";

        return true;
    }
}
