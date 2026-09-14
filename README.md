# Cadastro de Produtos — React + Node.js + MySQL

> ✅ **Projeto concluído**

Aplicação Full Stack desenvolvida em aula para praticar a integração entre **React**, uma **API REST com Node.js e Express** e um banco de dados **MySQL**.

O projeto implementa um cadastro de produtos com operações CRUD, comunicação entre frontend e backend e persistência dos dados utilizando Stored Procedures.

---

## Objetivo

Praticar o desenvolvimento de uma aplicação Full Stack utilizando:

- React;
- Node.js;
- Express;
- API REST;
- Fetch API;
- MySQL;
- mysql2;
- Stored Procedures;
- CORS;
- CRUD;
- integração entre frontend, backend e banco de dados.

---

## Tecnologias utilizadas

### Frontend

- React
- JavaScript
- Vite
- Fetch API
- HTML
- CSS

### Backend

- Node.js
- Express
- JavaScript
- mysql2
- CORS

### Banco de Dados

- MySQL
- SQL
- Stored Procedures

### Versionamento

- Git
- GitHub

---

## Estrutura do projeto

```text
cadastroProdutos/
├── backend/
│   ├── Contrato API Produtos.pdf
│   ├── app.js
│   ├── banco.sql
│   ├── dados.json
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FormProduto.jsx
│   │   │   └── ListaProduto.jsx
│   │   ├── services/
│   │   │   └── produtoService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── db.json
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── bancoCadastro.sql
└── README.md
```

---

## Arquitetura

O fluxo principal da aplicação é:

```text
Usuário
   ↓
React
   ↓
Service
   ↓
Fetch API
   ↓
Node.js + Express
   ↓
mysql2
   ↓
Stored Procedures
   ↓
MySQL
```

A separação em camadas facilita a organização do código e mantém o frontend independente dos detalhes de acesso ao banco de dados.

---

## Funcionalidades

A aplicação trabalha com as principais operações de um CRUD:

- cadastrar produtos;
- listar produtos;
- atualizar produtos;
- excluir produtos;
- comunicação com API REST;
- persistência dos dados no MySQL;
- tratamento de erros;
- confirmação antes da exclusão;
- carregamento dos dados ao iniciar a aplicação.

---

## API REST

O backend utiliza a porta:

```text
3000
```

URL base:

```text
http://localhost:3000
```

### Endpoints

| Método | Endpoint | Operação |
|---|---|---|
| `GET` | `/produtos` | Listar produtos |
| `POST` | `/produtos` | Cadastrar produto |
| `PUT` | `/produtos/:id` | Atualizar produto |
| `DELETE` | `/produtos/:id` | Excluir produto |

---

## Banco de Dados

O backend utiliza o banco:

```text
aula_crud
```

As operações são realizadas através das Stored Procedures:

```text
sp_listar_produtos
sp_cadastrar_produto
sp_atualizar_produto
sp_excluir_produto
```

Fluxo:

```text
API
 ↓
mysql2
 ↓
Stored Procedure
 ↓
MySQL
```

---

## Exemplo de cadastro

```http
POST /produtos
```

Corpo da requisição:

```json
{
  "nome": "Notebook",
  "preco": 3500.00
}
```

Em caso de sucesso:

```text
201 Created
```

---

## Exemplo de atualização

```http
PUT /produtos/1
```

Corpo:

```json
{
  "nome": "Notebook Gamer",
  "preco": 4500.00
}
```

---

## Exemplo de exclusão

```http
DELETE /produtos/1
```

Em caso de sucesso, a API retorna a confirmação da exclusão.

---

## Frontend

O frontend foi desenvolvido com **React + Vite**.

A interface foi organizada em componentes:

```text
Header
FormProduto
ListaProduto
Footer
```

O componente principal utiliza:

```javascript
useState()
```

para gerenciamento dos estados da aplicação e:

```javascript
useEffect()
```

para carregar os produtos ao iniciar a página.

A comunicação com a API está concentrada em:

```text
src/services/produtoService.js
```

---

## Como executar o backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o script SQL do projeto no MySQL e ajuste, se necessário, as configurações de conexão em `app.js`.

Depois inicie o servidor:

```bash
node app.js
```

ou:

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## Como executar o frontend

Abra outro terminal:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

O Vite normalmente disponibilizará a aplicação em:

```text
http://localhost:5173
```

---

## Conceitos praticados

- React
- Vite
- Node.js
- Express
- MySQL
- mysql2
- API REST
- CRUD
- Fetch API
- Stored Procedures
- CORS
- JSON
- `useState`
- `useEffect`
- componentes
- services
- `async/await`
- métodos HTTP
- arquitetura em camadas
- integração frontend/backend
- integração com banco de dados

---

## Status

✅ **Projeto concluído para os objetivos propostos na atividade.**

O projeto representa a evolução de exercícios anteriores com API simulada para uma aplicação integrada com backend real e persistência em MySQL.

---

## Autor

**Luan Araujo**

Projeto acadêmico desenvolvido para prática de **React, Node.js, Express, MySQL, APIs REST e desenvolvimento Full Stack**.