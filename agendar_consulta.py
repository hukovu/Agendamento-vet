from datetime import datetime

# Função para verificar se a data está livre para consulta
def verificar_disponibilidade(data, consultas_agendadas):
    for consulta in consultas_agendadas:
        if consulta["data"].day == data.day and consulta["data"].month == data.month:
            return False
    return True

# Função para perguntar os detalhes ao cliente
def obter_detalhes_cliente():
    nome = input("Digite o seu nome: ")
    cpf = input("Digite o seu CPF: ")
    raca = input("Digite a raça do animal: ")
    porte = input("Digite o porte do animal: ")
    vacinas = input("O animal possui a carteira de vacinação em dia? (Sim/Não): ")
    idade = int(input("Digite a idade do animal em meses: "))
    return nome, cpf, raca, porte, vacinas, idade

# Consultas já agendadas (simulando um banco de dados)
consultas_agendadas = []

# Contador para gerar IDs únicos para cada cliente
cliente_id = 1

# Entrada de dados
while True:
    try:
        data_str = input("Digite a data desejada para a consulta (formato: DD-MM): ")
        data = datetime.strptime(data_str, "%d-%m")

        if not verificar_disponibilidade(data, consultas_agendadas):
            print("Desculpe, esta data já está ocupada. Por favor, escolha outra data.")
            continue

        nome, cpf, raca, porte, vacinas, idade = obter_detalhes_cliente()

        consulta = {
            "id": cliente_id,
            "data": data,
            "nome_cliente": nome,
            "cpf": cpf,
            "raca_animal": raca,
            "porte_animal": porte,
            "carteira_vacinas": vacinas,
            "idade_animal": idade
        }

        consultas_agendadas.append(consulta)
        
        print("Consulta agendada com sucesso!")
        print("Detalhes da consulta:")
        print(consulta)
        
        cliente_id += 1
        
        continuar = input("Deseja agendar outra consulta? (Sim/Não): ")
        if continuar.lower() != 'sim':
            break

    except ValueError:
        print("Formato de data inválido. Por favor, tente novamente.")
