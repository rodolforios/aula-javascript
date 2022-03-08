## Diagramas entidade relacionamento(DER) ##

* Um diagrama entidade relacionamento (DER) é um tipo de fluxograma que ilustra como “entidades”, p. ex., pessoas, objetos ou conceitos, se relacionam entre si dentro de um sistema.

## Entidades ##

* Uma entidade é uma representação de um conjunto de informações sobre determinado conceito do sistema. Toda entidade possui ATRIBUTOS, que são as informações que referenciam a entidade.

Ex: 
**Entidade**: Livro.
**Atributos**:Titulo,Editora,Ano,Autor.

## Primary key(PK) ##

* A PRIMARY KEY identifica exclusivamente cada registro em uma tabela. As chaves primárias devem conter valores **ÚNICOS** e não podem conter valores **NULL**. Uma tabela pode ter apenas **UMA** chave primária; e na tabela, essa chave primária pode consistir em uma ou várias colunas (campos).


## Foreign key  (Chave estrangeira)

* No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

### Caracteristicas: ###

* Diferentemente da chave primária, a chave estrangeira: Pode ser nula (NOT NULL); É um campo em uma tabela que faz referência a um campo que é chave primária em outra tabela; É possível ter mais de uma (ou nenhuma) em uma tabela.

## Tipos de relação ##

### Existem três tipos de relacionamento entre entidades: ### 

* **um-para-um:** O relacionamento um-para-um é usado quando uma entidade **A** se relaciona com uma entidade **B** e vice-versa.

Este relacionamento é representado pelo sinal: **1:1**

O relacionamento um para um é bastante incomum e usado em casos bem específicos. Geralmente quando você tem duas tabelas paralelas que precisa fazer esse tipo de relacionamento, as vezes se pergunta se não seria melhor juntar as duas tabelas. Contudo por se tratar de alguma situação específica, se as duas precisarem serem mantidas, então justifica relacionar-se um para um nesse caso.

* **um-para-muitos:** O relacionamento um-para-muitos é usado quando uma entidade **A** pode se relacionar com uma ou mais entidades **B**.

Este relacionamento é representado pelo sinal: **1:N**

O relacionamento um para muitos é o tipo mais comum e que deve ser encontrado na maioria das tabelas que estão relacionadas. O que justifica esse tipo de relacionamento é o fato de que normalmente uma entidade tende a ser replicada muitas vezes em outra, como acontece por exemplo quando um produto é vendido N vezes, um cliente faz N compras, uma sala tem N alunos e assim por diante.

Desta forma o relacionamento um para muitos é aquele que representa de maneira muito realística o que acontece de fato dentro das organizações e no mundo real, portanto é uma representação bastante fiel dentro de um banco de dados para os sistemas de informação.

*muitos-para-muitos: O relacionamento muitos-para-muitos é usado quando várias entidades **A** se relacionam com várias entidades **B**.

Este relacionamento é representado pelo sinal: **N:N** ou **N:M**

* **Cardinalidade:** A cardinalidade é um conceito importante para ajudar a definir o relacionamento, ela define o número de ocorrências em um relacionamento.Para determinar a cardinalidade, deve-se fazer a pergunta relativa ao relacionamento em ambas as direções.

Um departamento possui quantos empregados?

- no mínimo 1 e no máximo N.

Um empregado está alocado em quantos departamentos?

- no mínimo em 1 e no máximo em 1

Somando-se as cardinalidades, definimos o resultado final do relacionamento, ou seja, 1:N