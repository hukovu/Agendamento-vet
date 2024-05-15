
function validarFormulario() {
    var agendamendoto = {}
    agendamendoto.data = document.getElementById("data").value;
    agendamendoto.nome = document.getElementById("nome").value;
    agendamendoto.cpf = document.getElementById("cpf").value;
    agendamendoto.vacinas = document.getElementById("vacinas").value;
    agendamendoto.telefone = document.getElementById("telefone").value;
    agendamendoto.email = document.getElementById("e-mail").value;
    agendamendoto.horario = document.getElementById("horario").value;
    agendamendoto.nomepet = document.getElementById("nomepet").value;

    // Adicione aqui suas condições de validação, por exemplo:
    if (agendamendoto.data === "" || agendamendoto.nome === "" || agendamendoto.cpf === "" || agendamendoto.vacinas === "" || agendamendoto.telefone ==="" || agendamendoto.email ==="" || agendamendoto.horario ==="" || agendamendoto.nomepet ==="") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

   
    console.log(agendamendoto)

    return true; // Se todas as validações passarem, o formulário será enviado.
}
