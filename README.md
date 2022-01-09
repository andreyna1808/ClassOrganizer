# PlannerGenerator
Onde eu fui amarrar meu jegue???

### Back-End
 Coordenador

 1 - CRIAR AS TURMAS POR TURNO E QUANTIDADE DE MATERIA
 1.1 - POST - http://localhost:3000/addClass

ano_turma - string
turno - string (matutino, vespertino, noturno)
materias - array
nome_professor - string
qtd_materia_por_turma - objeto{
    "": {
        "matematica": 3,
        "portugues": 5,                         
        "fisica": 2
    },
    "ANO_2": {
        "matematica": 3,
        "portugues": 5,
        "fisica": 2
    },
    "ANO_3": {
        "matematica": 3,
        "portugues": 5,
        "fisica": 2
    }
}

2 - ADICIONAR PROFESSOR
2.1 - POST - http://localhost:3000/addTeacher

materias_professor_leciona - array
turno_professor_leciona - string
turma_professor_leciona - string

### Condições Gerais
1 - sao 4 aulas por turma durante o dia(s-t-q-q-s)
2 - o mesmo professor pode lecionar até 2 aulas na mesma turma e dia (lembrando de nao repetir)
2.1 - Colocado o professor ele será removido p/ não ser coloado no mesmo turno em turma diferente (o mesmo ser não pode ocupar dois lugares no espaço ao mesmo tempo)
3 - Após gerado, pode ser alterado manualmente para pequenos ajustes.
4- A tabela deve ser gerada em cores diferentes (por área: natureza; exatas; humanas e linguagens)
5- Ter a possibilidade de ver (além do horário completo), todos os horários que foram gerado de algum professor ou turma em específico. 

### Front-End 
1- Página principal para vizualisar o projeto e fazer login.
2- Página de Dashboard (para vizualizar tudo que foi gerado ou criar uma nova tabela)
3- Opação de criar um gerador de tabela.
3.1 - Cadastramentos das turmas por turno, matéria e quantidade de matéria por turma - eLe vizualisar o adicionamento em tempo real, podendo excluir ou editar.
3.2 - Cadastramentos do nome do professor, matérias que ele leciona e as turmas que ele leciona (CheckBox) - ver tem tempo real, podendo excluir ou editar.
4 - Concluir e gerar a tabela (conforme as condições estabelecidas no back ou front).
5 - Gerar a tabela genérica com todas as informações de Matutino (nome da turma: e suas aulas de seg-sexta separadas em um bloco de 4 com o nome do professor e a matéria a ser lecionada no dia para a turma)
5.1 - Opção de salvar a tabela em PDF, Gerar novamente ou de Salvar e concluir.
5.1.1 - Ao salvar e concluir irá retornar para o dashboard com a atualização da tabela criada, sendo possível visualizar de diversas maneiras: pelo professor, pela turma ou por turnos (selecionado.)

6 - Lembrando que a tabela deve ficar visivel ao usuário e responsivo para ser utilizado em desktop ou mobile.
