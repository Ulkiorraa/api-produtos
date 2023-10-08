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
```
## Uso

1. Execute o servidor Node.js com o comando:
```bash
node app.js
```
2. O servidor estará rodando na porta 3000 por padrão. Você pode alterar a porta no arquivo `app.js` se desejar.
3. Você pode usar qualquer cliente HTTP ou uma interface de usuário para acessar a API e realizar as seguintes operações:

- Listar todos os produtos: `GET /produtos`
- Listar um produto por código: `GET /produtos/:codigo`
- Inserir um novo produto: `POST /produtos`
- Atualizar um produto (nome e/ou preço): `PUT /produtos/:codigo`
- Remover um produto: `DELETE /produtos/:codigo`

## Exemplo de Requisições

Aqui estão alguns exemplos de como fazer requisições para a API usando o `curl`:

- Listar todos os produtos:
```bash
curl curl http://localhost:3000/produtos/
```
- Listar um produto por código:
```bash
curl curl http://localhost:3000/produtos/1
```
- Inserir um novo produto:
```bash
  curl -X POST -H "Content-Type: application/json" -d '{"codigo": 4, "nome": "Produto 4", "preco": 19.99}' http://localhost:3000/produtos
```
- Atualizar um produto:
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"nome": "Novo Nome", "preco": 29.99}' http://localhost:3000/produtos/1
```
- Remover um produto:
```bash
curl -X DELETE http://localhost:3000/produtos/1
```