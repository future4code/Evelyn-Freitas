### Exercício 1 

a) Creio que ao usar strings o aproveitamento em relação a segurança se torne maior, pois teremos a oportunidade de utilizar números, letras, caracteres, etc.

### Exercício 2

a) Primeiramente há a criação de uma constante com o nome da nova tabela chamada "User". Em seguida é trabalhada a iniciação da conexão mysql pelo knex com todas as informações necessárias. Abaixo temos a criação de mais uma constante para a criação de um novo usuário com os itens id, email e password como requisitos para serem inseridos na tabela userTableName, vulgo "User".

b) 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### Exercício 3

a) A linha "as String" está sendo utilizada para afirmar aquele processo como sendo uma string, não ocorrendo assim qualquer erro.

### Exercício 4 

a, b e c) Resposta encontrasse no código.

