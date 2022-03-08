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