# Case de uma aplicação para cadastrar motoristas 

O projeto consiste em uma interface capaz de cadastrar e listar motoristas.

# Backend

O backend da aplicação foi desenvolvido utilizando o node.js com o Typescript. Para auxiliar as rotas da aplicação foi utilizado o framework Express, sendo configurado para entender as requisições em formato de JSON. Também foi adicionado o CORS que permite configurar as URLs que possuem permissão para utilizar a API.

Foram criadas duas rotas do método GET ("/drivers" e "/drivers/:id") e uma rota do método POST("/drivers").

Na rota “/drivers” utilizando o método POST é realizado a inserção dos dados do motorista no banco de dados. Já na rota “/drivers” com o método GET é listado todos os motoristas encontrados. E na rota ”/drivers/:id” é possível visualizar apenas o motorista selecionado através do id.

# Banco de Dados

O banco de dados utilizado foi o SQLite pois ele possibilita a utilização sem a necessidade da instalação. Entretanto os comandos foram realizados utilizando o Knex, que permite escrever as instruções do banco de dados através de comandos em Javascript.

O banco de dados foi criado utilizando uma migrate.

# Iniciando a aplicação


Após realizar o clone do repositório (https://github.com/Rafael-Moraes/backend-drivers) será necessário entrar na pasta criada através do terminal de comando e realizar o comando yarn install ou npm install e após a finalização da instalação executar o yarn start ou npm run start para inicializar a aplicação.

# Futuras funcionalidades

Para as próximas implementações será permitido a edição e inativação dos motoristas.
