# Cadastro de Produtos — React + Node.js + MySQL

> 🚧 **Projeto em desenvolvimento**

Aplicação Full Stack desenvolvida em aula para praticar a integração entre **React**, uma **API REST com Node.js e Express** e um banco de dados **MySQL**.

O projeto tem como objetivo evoluir um cadastro de produtos desde o consumo de uma API simulada até uma arquitetura com frontend, backend e banco de dados real.

Algumas funcionalidades e integrações ainda estão sendo ajustadas.

---

## Objetivo da aula

Praticar a construção de uma aplicação Full Stack utilizando:

* React no frontend;
* Node.js e Express no backend;
* API REST;
* Fetch API;
* MySQL;
* Stored Procedures;
* CORS;
* CRUD;
* integração entre frontend e backend.

O projeto também reforça a separação de responsabilidades entre as diferentes camadas da aplicação.

---

## Tecnologias utilizadas

### Frontend

* React
* JavaScript
* Vite
* Fetch API
* HTML
* CSS

### Backend

* Node.js
* Express
* JavaScript
* mysql2
* CORS

### Banco de dados

* MySQL
* SQL
* Stored Procedures

### Versionamento

* Git
* GitHub

---

# Estrutura do projeto

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
│   │   ├── services/
│   │   │   └── produtoService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── db.json
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── bancoCadastro.sql
└── .gitignore
```

---

# Arquitetura da aplicação

A proposta final da aplicação segue o fluxo:

```text
Usuário
   ↓
React
   ↓
Service
   ↓
Fetch API
   ↓
API REST
   ↓
Node.js + Express
   ↓
mysql2
   ↓
Stored Procedures
   ↓
MySQL
```

Essa separação permite que cada camada tenha uma responsabilidade específica.

---

# Frontend

O frontend foi desenvolvido com:

```text
React + Vite
```

A aplicação utiliza componentes separados e mantém a comunicação com a API através de uma camada de serviço.

Entre os principais arquivos estão:

```text
src/App.jsx
src/components/
src/services/produtoService.js
src/style.css
```

---

## Gerenciamento de estado

O componente principal utiliza:

```javascript
useState()
```

para controlar informações como:

```text
produtos
erro
carregando
```

Também é utilizado:

```javascript
useEffect()
```

para carregar os produtos quando a aplicação é iniciada.

---

## Componentes

A interface está organizada em componentes como:

```text
Header
FormProduto
ListaProduto
Footer
```

Essa divisão melhora a organização e reutilização do código.

---

# Service

A comunicação HTTP fica concentrada em:

```text
src/services/produtoService.js
```

A URL atualmente utilizada é:

```text
http://localhost:3000/produtos
```

Essa camada é responsável por intermediar a comunicação entre React e a API.

---

# Backend

O backend foi desenvolvido utilizando:

```text
Node.js
Express
mysql2
CORS
```

O servidor utiliza a porta:

```text
3000
```

e fica disponível em:

```text
http://localhost:3000
```

---

## CORS

O projeto utiliza:

```javascript
app.use(cors());
```

para permitir que o frontend realize requisições para a API durante o desenvolvimento.

---

## JSON

O middleware:

```javascript
app.use(express.json());
```

permite que o servidor receba dados em formato JSON através do corpo das requisições.

---

# Banco de dados

O backend está configurado para utilizar o banco:

```text
aula_crud
```

A conexão é realizada utilizando o pacote:

```text
mysql2
```

Configuração atual:

```javascript
host: 'localhost'
user: 'root'
port: 3302
database: 'aula_crud'
```

> A configuração pode precisar ser alterada dependendo do ambiente MySQL utilizado.

---

# CRUD de produtos

A API implementa operações para:

```text
CREATE
READ
UPDATE
DELETE
```

Rotas atualmente disponíveis no backend:

| Método   | Endpoint        | Operação          |
| -------- | --------------- | ----------------- |
| `GET`    | `/produtos`     | Listar produtos   |
| `POST`   | `/produtos`     | Cadastrar produto |
| `PUT`    | `/produtos/:id` | Atualizar produto |
| `DELETE` | `/produtos/:id` | Excluir produto   |

---

# GET — Listar produtos

```text
GET /produtos
```

A API executa:

```sql
CALL sp_listar_produtos()
```

Em caso de sucesso:

```text
200 OK
```

---

# POST — Cadastrar produto

```text
POST /produtos
```

Exemplo de requisição:

```json
{
  "nome": "Notebook",
  "preco": 3500.00
}
```

A API executa:

```sql
CALL sp_cadastrar_produto(?, ?)
```

Em caso de sucesso:

```text
201 Created
```

---

# PUT — Atualizar produto

```text
PUT /produtos/:id
```

Exemplo:

```text
PUT /produtos/1
```

Corpo:

```json
{
  "nome": "Notebook Gamer",
  "preco": 4500.00
}
```

A operação utiliza:

```sql
CALL sp_atualizar_produto(?, ?, ?)
```

---

# DELETE — Excluir produto

```text
DELETE /produtos/:id
```

Exemplo:

```text
DELETE /produtos/1
```

A exclusão utiliza:

```sql
CALL sp_excluir_produto(?)
```

Antes de excluir um produto pelo frontend, a aplicação solicita confirmação ao usuário.

---

# Stored Procedures

O banco utiliza procedures para manter as operações SQL organizadas.

Entre elas:

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
Tabela produtos
```

---

# Integração Frontend + Backend

A aplicação está sendo adaptada para substituir o backend simulado utilizado anteriormente pelo backend real em Node.js e MySQL.

Antes:

```text
React
  ↓
Service
  ↓
JSON Server
```

Objetivo atual:

```text
React
  ↓
Service
  ↓
Node.js + Express
  ↓
MySQL
```

A camada `produtoService.js` facilita essa transição porque os componentes React não precisam conhecer diretamente os detalhes do banco de dados.

---

# Status do projeto

> 🚧 **Em desenvolvimento**

A estrutura principal da aplicação já foi criada, mas alguns ajustes ainda estão pendentes.

### Já implementado

* estrutura de frontend com React;
* componentes separados;
* formulário de produtos;
* listagem de produtos;
* estado com `useState`;
* carregamento com `useEffect`;
* camada de service;
* backend em Node.js;
* Express;
* CORS;
* conexão com MySQL;
* cadastro de produtos;
* listagem de produtos;
* atualização de produtos no backend;
* exclusão de produtos;
* Stored Procedures.

### Em ajuste

* integração completa entre frontend e backend;
* adequação das operações do frontend às rotas reais da API;
* remoção de referências restantes ao JSON Server;
* revisão da atualização de produtos;
* tratamento de erros;
* ajustes finais de interface e funcionamento.

---

# Pontos ainda em evolução

Atualmente existe uma diferença entre uma operação utilizada pelo frontend e o contrato implementado no backend.

O frontend possui uma chamada:

```text
PATCH /produtos/:id
```

para atualizar um campo chamado:

```text
concluida
```

Esse comportamento veio de uma etapa anterior do projeto.

Já o backend atual trabalha com:

```text
PUT /produtos/:id
```

para atualização dos dados do produto.

Essa integração ainda deverá ser ajustada para que frontend e backend utilizem o mesmo contrato.

---

# Como executar o backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Certifique-se de que o MySQL esteja iniciado e que o banco e as procedures tenham sido criados.

Depois execute:

```bash
node app.js
```

O servidor deverá iniciar em:

```text
http://localhost:3000
```

---

# Como executar o frontend

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

# Conceitos praticados

* React
* Vite
* Node.js
* Express
* MySQL
* mysql2
* CORS
* API REST
* Fetch API
* CRUD
* Stored Procedures
* JSON
* `useState`
* `useEffect`
* componentes
* services
* `async/await`
* tratamento de erros
* métodos HTTP
* integração frontend/backend
* arquitetura em camadas
* separação de responsabilidades

---

# Próximas etapas

O projeto continuará sendo desenvolvido com foco em:

```text
Ajustar frontend
       ↓
Padronizar contrato da API
       ↓
Finalizar integração
       ↓
Testar CRUD completo
       ↓
Corrigir erros
       ↓
Finalizar aplicação
```

---

## Autor

**Luan Araujo**

Projeto acadêmico em desenvolvimento para prática de **React, Node.js, Express, APIs REST, MySQL e integração Full Stack**.
