### Exercício 1

a) O comando ALTER TABLE serve para se alterar algo na tabela existente, o DROP COLUMN faria com que a coluna salary não existisse mais.
```
ALTER TABLE Actor DROP COLUMN salary;
```
b) Todo o comando abaixo faria com que na tablela Actor o item gender tivesse seu nome mudado para sex e que seu tipo virasse VARCHAR(6) com apenas seis caracteres limites.  
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c) Todo o comando abaixo faria com que na tablela Actor o item gender tivesse seu nome mudado de volta para gender e que seu tipo virasse VARCHAR(255) com duzentos e ciquenta e cinco caracteres limites padrões. 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d) Todo o comando abaixo faria com que na tablela Actor o item gender tivesse seu nome mudado para gender e que seu tipo virasse VARCHAR(100) com apenas cem caracteres limites.

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)
b)
c)
d)