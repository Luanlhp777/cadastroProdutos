# React + JSON Server — V1

Projeto desenvolvido para praticar **React consumindo uma API REST simulada com JSON Server**.

A proposta é trabalhar a integração entre frontend e uma API mockada antes da implementação de um backend real.

---

## Tecnologias utilizadas

* React
* JavaScript
* Vite
* JSON Server
* Fetch API
* Node.js
* npm

---

## Estrutura principal

```text
ReactComJSONServerV1/
├── src/
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Instalação

Abra o terminal dentro da pasta do projeto:

```bash
npm install
```

---

## Rodar o JSON Server

Abra um terminal e execute:

```bash
npm run server
```

O backend simulado ficará disponível em:

```text
http://localhost:3001
```

Para visualizar diretamente os dados das tarefas:

```text
http://localhost:3001/tarefas
```

---

## Rodar o React

Abra outro terminal:

```bash
npm run dev
```

O Vite normalmente disponibiliza o frontend em:

```text
http://localhost:5173
```

---

# Aula 1 — Consumo da API

Na primeira etapa, o foco está no consumo dos dados disponibilizados pelo JSON Server.

## Conteúdos trabalhados

* dados mockados;
* JSON Server;
* método `GET`;
* Fetch API;
* `async/await`;
* `useEffect`;
* `useState`;
* organização em camada de service;
* renderização de listas.

---

## Fluxo da Aula 1

```text
React
  ↓
tarefaService.js
  ↓
fetch()
  ↓
GET /tarefas
  ↓
JSON Server
  ↓
db.json
```

O React não acessa diretamente o arquivo `db.json`.

A aplicação consome os dados através de uma API criada pelo JSON Server.

---

## Camada Service

A comunicação com a API é organizada em uma camada de serviço:

```text
Componente React
      ↓
tarefaService.js
      ↓
JSON Server
```

Essa organização ajuda a separar:

* interface;
* estado;
* regras de interação;
* acesso à API.

---

# Aula 2 — CRUD

Na segunda etapa, a aplicação evolui para trabalhar com outras operações HTTP.

## Conteúdos trabalhados

* `POST`;
* `PATCH`;
* `DELETE`;
* atualização do estado;
* CRUD;
* comunicação com API;
* independência entre frontend e backend.

---

## Rotas utilizadas

```text
GET    /tarefas
POST   /tarefas
PATCH  /tarefas/:id
DELETE /tarefas/:id
```

| Método   | Operação                      |
| -------- | ----------------------------- |
| `GET`    | Listar tarefas                |
| `POST`   | Criar tarefa                  |
| `PATCH`  | Atualizar parte de uma tarefa |
| `DELETE` | Excluir tarefa                |

---

## CRUD

As operações trabalhadas correspondem a:

```text
CREATE
  ↓
POST

READ
  ↓
GET

UPDATE
  ↓
PATCH

DELETE
  ↓
DELETE
```

---

## JSON Server

O JSON Server utiliza:

```text
db.json
```

como uma base de dados simulada.

Durante o desenvolvimento, a arquitetura utilizada é:

```text
React
  ↓
Service
  ↓
JSON Server
  ↓
db.json
```

---

## Ideia principal

Um dos objetivos do projeto é demonstrar que o desenvolvimento do frontend pode avançar mesmo quando o backend definitivo ainda não está pronto.

Durante o desenvolvimento:

```text
React
  ↓
Service
  ↓
JSON Server
```

Posteriormente, o backend simulado pode ser substituído:

```text
React
  ↓
Service
  ↓
Backend real
  ↓
Banco de Dados
```

A camada de service reduz o acoplamento entre os componentes React e a implementação do backend.

---

## Fluxo geral

```text
Usuário
   ↓
React
   ↓
Componente
   ↓
Service
   ↓
Fetch API
   ↓
JSON Server
   ↓
db.json
   ↓
Resposta JSON
   ↓
Estado atualizado
   ↓
Interface renderizada
```

---

## Conceitos praticados

* React
* Vite
* JSON Server
* API REST
* Fetch API
* JSON
* dados mockados
* `useState`
* `useEffect`
* `async/await`
* Services
* métodos HTTP
* CRUD
* gerenciamento de estado
* renderização de listas
* integração com API
* separação de responsabilidades

---

## Autor

**Luan Araujo**

Projeto acadêmico desenvolvido para prática de **React, JSON Server e consumo de APIs REST**.
