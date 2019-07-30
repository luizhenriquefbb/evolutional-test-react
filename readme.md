# Teste Evolucional

## Sobre o teste

As instruções podem ser lidas na íntegra [aqui](Instruções.txt), mas em resumo foi pedido que eu fizesse duas telas dado um conjunto de JSONs.

### Tela 1

- Uma listagem de alunos. Mostrar os alunos e suas respectivas classes e séries.

- É preciso que essa listagem seja editável também!

- Ainda na **tela 1**, foi pedido uma ferramenta que gere registros de alunos, mas os registros não podem estar relacionados a só uma turma, eles tem que ser distribuídos. Como extra, eu fiz um gráfico mostrando "o quão aleatório" os alunos foram criados.

> Aqui vale uma desculpa: Como vocês podem ver, existem duas séries no qual nenhum cliente é criado. Isso acontece porque, pelos JSONs recebidos, essas séries não possuem nenhuma classe associada (e estudantes devem pertencer a uma classe)

- Resumo

> Parte 1

>> Criar combo de filtro a base dos JSONs 'degrees','classes'

>> Popular a tela com as informações de students e suas relações (trazendo nome do degree, nome do class)

>> Dar opção para editar o nome dos students e a class atribuída ao mesmo

>> Filtrar conforme combo sempre levando em consideração os dados pós-alteração

> Parte 2

>> Criar botão que gera mais 300 students e os distribui entre os degrees e classes

>> Gerar gráfico com a quantidade de students por degree

### Tela 2

- Uma lista de professores. Precisamos saber quem são, em que degrees (série) dão aula, em que classes (classe) dão aula e além disso, ter uma opçãozinha que ao clicarmos, magicamente trás os alunos relacionados aquela série.

- Também editável

- Função de cadastrar novo professor

- Resumo

> Parte 1

>> Criar combo filtro a base dos JSONs 'degrees','classes'

>> Popular a tela utilizando o JSON relationships. Nessa tela será necessária a visualização os seguintes itens:nome do professor, nome da matéria, todos os nomes dos degrees relacionados, todos os nomes de classe de cada class relacionada ao degree

>> Criar botão que ao clicar, trás os students relacionados ao degree em questão

> Parte 2

>> Criar formulário para gerar um novo registro do relationships. O registro deverá ser passivel as operações da parte 1 da tela 2

## Como rodar

O projeto já está hospedado no **github pages**, [aqui](http://luizhenriquefbb.github.io/evolutional-test-react), mas se quiser, você pode executar os seguintes comandos:


Primeiro, você deve ter [react instalado](instalando_react.md).

A partir da raíz do projeto:

```sh
npm install

npm start
```
