# API REST para Gerenciamento de Produtos

Esta é uma API REST simples para gerenciamento de produtos, desenvolvida em Node.js, que permite realizar operações CRUD (Create, Read, Update, Delete) em uma tabela de produtos em um banco de dados MySQL.

## Pré-requisitos

- Node.js instalado na sua máquina.
- MySQL Server instalado e configurado.

## Instalação


1. Clone o repositório ou copie o código-fonte para o seu projeto.
2. No diretório do projeto, execute o comando `npm install` para instalar as dependências necessárias.

## Configuração do Banco de Dados

Certifique-se de que você configurou corretamente as informações de conexão com o banco de dados MySQL no arquivo `config.js`. Você deve fornecer o nome de host, usuário, senha e nome do banco de dados conforme necessário.

```javascript
// config.js

module.exports = {
  database: {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'sua_base_de_dados',
  },
};

## Uso