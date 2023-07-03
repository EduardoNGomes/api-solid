# App

GymPass style app.

## Rfs (Requisistos Funcionais)

- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se autenticar;
- [] Deve ser possivel obter o perfil de um usuario logado
- [] Deve ser possivel obter o numero de check-ins realizado pelo usuario logado;
- [] Deve ser ser possivel o usuario obter seu historico de check-ins;
- [] Deve ser possivel o usuario buscar academias proximas;
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [] Deve ser possivel o usuario realizar check-in em uma academia;
- [] Deve ser possivel o validar o check-in de um usuario;

## Rns (Regras de Negocio)

- [] O usuario nao deve poder se cadastrar com um e-mail duplicado;
- [] O usuario nao pode fazer dois check-ins no mesmo dia;
- [] O usuario nao pode fazer check-in se nao estiver perto(100m) da academia;
- [] O check-in so pode ser validado ate 20 minutos apos ser criado;
- [] O check-in so pode ser validado por administradores;
- [] A academia so pode ser cadastrada por administradores;
