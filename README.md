# PetNode - API em Node.js com TypeScript

Projeto desenvolvido durante o módulo do curso de **Node.js com TypeScript**, focado na criação de uma aplicação simples para gerenciamento de uma agropecuaria.

## Dependências

### Dependências principais:

- **dotenv**: Biblioteca para carregar variáveis de ambiente de arquivos `.env`.
- **express**: Framework minimalista para criação de aplicações web e APIs.
- **mustache-express**: Motor de templates Mustache para Express.

### Dependências de Desenvolvimento:

- **@types/express**: Tipagens do TypeScript para o Express.
- **@types/mustache-express**: Tipagens do TypeScript para `mustache-express`.
- **@types/node**: Tipagens do TypeScript para o Node.js.

## Como Instalar as Dependências

### Para instalar as dependências principais e de desenvolvimento, execute o seguinte comando no seu terminal:

```bash
npm install dotenv express mustache-express
npm install --save-dev @types/express @types/mustache-express @types/node
```

## Pré-requisitos Globais

Antes de iniciar, certifique-se de ter os seguintes pacotes instalados globalmente:

```bash
npm i -g nodemon typescript ts-node
```

## Instalação

**Clone este repositório:**

```bash
git clone https://github.com/matheuszuge/NodePet

cd seu-repositorio
```

- Instale as dependências

```bash
npm install
```

**Executando o Projeto**

- Para iniciar o servidor em modo de desenvolvimento, utilize:

```bash
npm run start-dev
```

- O servidor rodará em http://localhost:3000/ 🚀
