# App

GymPass style app.

## Rfs (Requisistos Funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possivel obter o perfil de um usuario logado
- [] Deve ser possivel obter o numero de check-ins realizado pelo usuario logado;
- [] Deve ser ser possivel o usuario obter seu historico de check-ins;
- [] Deve ser possivel o usuario buscar academias proximas;
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [x] Deve ser possivel o usuario realizar check-in em uma academia;
- [] Deve ser possivel o validar o check-in de um usuario;
- [x] Deve ser possivel cadastrar uma academia

## Rns (Regras de Negocio)

- [x] O usuario nao deve poder se cadastrar com um e-mail duplicado;
- [x] O usuario nao pode fazer dois check-ins no mesmo dia;
- [x] O usuario nao pode fazer check-in se nao estiver perto(100m) da academia;
- [] O check-in so pode ser validado ate 20 minutos apos ser criado;
- [] O check-in so pode ser validado por administradores;
- [] A academia so pode ser cadastrada por administradores;

## RFNs (Requisitos nao-funcionais)

- [x] A senha do usuario precisa estar criptografada;
- [x] Os dados da aplicacao precisam estar persistidos em um banco PostgreSql;
- [] Todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [] O usuario deve ser identificado por um JWT(JSON Web Token)
