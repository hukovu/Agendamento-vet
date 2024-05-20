//Aplicando mascara para cpf e telefone
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cpf').addEventListener('input', aplicarMascaraCPF);
    document.getElementById('telefone').addEventListener('input', aplicarMascaraTelefone);
});

//Aplicando mascara para cpf e telefone
function aplicarMascaraCPF(event) {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    event.target.value = value;
}
//Aplicando mascara para cpf e telefone
function aplicarMascaraTelefone(event) {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
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
    const vacinas = document.getElementById("vacinas");
    agendamento.vacinas = vacinas.value
    const telefone = document.getElementById("telefone");
    agendamento.telefone = telefone.value
    const email = document.getElementById("e-mail");
    agendamento.email = email.value
    const horario = document.getElementById("horario");
    agendamento.horario = horario.value
    const nomepet = document.getElementById("nomepet");
    agendamento.nomepet = nomepet.value

 

    // Adicione aqui suas condições de validação, por exemplo:
    if (agendamento.data === "" || agendamento.nome === "" || agendamento.cpf === ""  || agendamento.telefone ==="" || agendamento.email ==="" || agendamento.horario ==="" || agendamento.nomepet ==="") {
        alert("Por favor, preencha todos os campos.");
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