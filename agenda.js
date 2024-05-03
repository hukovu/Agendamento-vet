
function validarFormulario() {
    var data = document.getElementById("data").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var raca = document.getElementById("raca").value;
    var vacinas = document.getElementById("vacinas").value;
    var idade = document.getElementById("idade").value;

    // Adicione aqui suas condições de validação, por exemplo:
    if (data === "" || nome === "" || cpf === "" || raca === "" || vacinas === "" || idade === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Exibir os dados no console para verificação
    console.log("Dados do Formulário:");
    console.log("Data da Consulta:", data);
    console.log("Nome Completo:", nome);
    console.log("CPF:", cpf);
    console.log("Raça do Animal:", raca);
    console.log("Carteira de Vacinação em Dia?", vacinas);
    console.log("Idade do Animal (em meses):", idade);

    return true; // Se todas as validações passarem, o formulário será enviado.
}
