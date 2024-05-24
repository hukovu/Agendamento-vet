document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('data');

    dateInput.addEventListener('input', () => {
        const selectedDate = new Date(dateInput.value);
        const dayOfWeek = selectedDate.getUTCDay();

         // Função para verificar se um dia é fim de semana
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            alert('Sábados e domingos não são permitidos. Por favor, escolha outro dia.');
            dateInput.value = ''; // Clear the input value
        }
    });
    // Função para definir o atributo "min" e "max" para o campo de data
    const setMinMaxDate = () => {
        const today = new Date();
        const maxDate = new Date(today.getFullYear() + 1, 11, 31); // 1 year ahead
        dateInput.setAttribute('min', today.toISOString().split('T')[0]);
        dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    };

    // Função para desabilitar fins de semana
    const disableWeekends = (event) => {
        const selectedDate = new Date(event.target.value);
        if (isWeekend(selectedDate)) {
            alert('Sábados e domingos não são permitidos. Por favor, escolha outro dia.');
            event.target.value = ''; // Clear the input value
        }
    };

    // Define o min e max date quando a página carrega
    setMinMaxDate();

    // Adiciona o event listener para verificar a data selecionada
    dateInput.addEventListener('input', disableWeekends);
});



//Aplicando mascara para cpf e telefone
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cpf').addEventListener('input', aplicarMascaraCPF);
    document.getElementById('telefone').addEventListener('input', aplicarMascaraTelefone);
});

//Aplicando mascara para cpf 
function aplicarMascaraCPF(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    event.target.value = value;
}
//Aplicando mascara para telefone
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

const agendamentos = []
function validarFormulario() {
    let agendamento = {}
    const data = document.getElementById("data");
    agendamento.data = data.value
    const nome = document.getElementById("nome");
    agendamento.nome = nome.value
    const cpf = document.getElementById("cpf");
    agendamento.cpf = cpf.value
    const serviço = document.getElementById("serviço");
    agendamento.serviço = serviço.value
    const telefone = document.getElementById("telefone");
    agendamento.telefone = telefone.value
    const email = document.getElementById("e-mail");
    agendamento.email = email.value
    const horario = document.getElementById("horario");
    agendamento.horario = horario.value
    const nomepet = document.getElementById("nomepet");
    agendamento.nomepet = nomepet.value

 

    // Adicione aqui suas condições de validação, por exemplo:
    if (agendamento.data === "" || agendamento.nome === "" || agendamento.cpf === ""  || agendamento.telefone ==="" || agendamento.email ==="" || agendamento.horario ==="" || agendamento.nomepet ===""
    || agendamento.serviço === "") {

        return false;
    }else{
        alert("Agendado com Sucesso");
        data.value = "";
        nome.value = "";
        cpf.value = "";
        telefone.value = "";
        email.value = "";
        horario.value = "";
        nomepet.value = "";
        serviço.value = "";

    }
    // Pegar agendamentos existentes do localStorage
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');

    // Adicionar o novo agendamento
    agendamentos.push(agendamento);

    // Armazenar de volta no localStorage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    console.log(agendamentos);

    return true; // Se todas as validações passarem, o formulário será enviado.
}