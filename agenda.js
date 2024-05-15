
function validarFormulario() {
    var agendamento = {}
    agendamento.data = document.getElementById("data").value;
    agendamento.nome = document.getElementById("nome").value;
    agendamento.cpf = document.getElementById("cpf").value;
    agendamento.vacinas = document.getElementById("vacinas").value;
    agendamento.telefone = document.getElementById("telefone").value;
    agendamento.email = document.getElementById("e-mail").value;
    agendamento.horario = document.getElementById("horario").value;
    agendamento.nomepet = document.getElementById("nomepet").value;

    // Adicione aqui suas condições de validação, por exemplo:
    if (agendamento.data === "" || agendamento.nome === "" || agendamento.cpf === "" || agendamento.vacinas === "" || agendamento.telefone ==="" || agendamento.email ==="" || agendamento.horario ==="" || agendamento.nomepet ==="") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
// Pegar agendamentos existentes do localStorage
    var agendamentos = JSON.parse(localStorage.getItem('agendamentos') || 'Sem Agendamentos');
    
    // Adicionar o novo agendamento
    agendamentos.push(agendamento);
    
    // Armazenar de volta no localStorage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    console.log(agendamentos);

    return true; // Se todas as validações passarem, o formulário será enviado.
}
