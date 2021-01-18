### Exercício 1

a) 
1. O id é VARCHAR(255) por ter sido escolhido para ser representado como string e também como PRIMARY KEY para ser único e inalterável.
2. O name é VARCHAR(255) por ser do tipo string e NOT NULL, pois deve ser obrigatoriamente preechido. 
3. O birth_date é DATE por ser do tipo data e NOT NULL, pois deve ser obrigatoriamente preechido.

b) 
1. O comando SHOW DATABASES mostra todas os bancos de dados existentes.
2. O comando SHOW TABLES mostra todas as tablelas criadas até o presente momento.

c) O comando DESCRIBE Actor mostra uma tablela com os dados fornecidos com as variáveis e seus tipos.

```
CREATE TABLE Actor
(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;
```

### Exercício 2

a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) O error 1062 descreve que existe entradas duplicadas para o id 002 que é uma PRIMARY KEY, ou seja, não é possível adicionar outro usuário/ator que tenha o id igual já que o mesmo é único.

c) O error 1136 descreve que existem itens na coluna que não existem na linha 1. Basicamente estou tentando inserir três 2 itens que não estão descritos nos parametros da tabela Actor, necessitando a adição de birth_date e gender.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O error 1364 descreve que o campo name não tem um valor padrão, ou seja, não colocamos seu valor que é necessariamente obrigatório.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) O error 1292 descreve que o valor de DATE está incorreto, ou seja, nesse caso é pelo motivo que ele está sendo lido como INT sem ser de tal tipo, e como ele é uma string lhe faltam as aspas. 

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
  "006", 
  "Vitória Strada",
  120000,
  "1996-08-12", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
  "007", 
  "Hugo Bonemer",
  200000,
  "1987-07-25", 
  "male"
);

```



