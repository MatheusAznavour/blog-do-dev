# 🚀 **Blog de Projetos e Artigos - Backend**

Este projeto é um **blog** desenvolvido com o objetivo de consolidar conhecimentos em **backend**. Ele abrange diversas funcionalidades, como **autenticação baseada em sessão**, **segurança de rotas com RBAC**, **gerenciamento de posts**, **sistema de likes**, **upload de imagens** e muito mais! Tudo isso implementado com tecnologias modernas como **Express**, **bcrypt**, **Cloudinary** e **Handlebars**.

## 💡 **Funcionalidades**

* **Autenticação de Usuário**: Sistema de login, registro e logout utilizando sessões para autenticação segura.
* **Criação e Gestão de Posts**: Criação, edição e exclusão de **artigos** e **projetos** com suporte a **WYSIWYG** (What You See Is What You Get), e geração automática de **slugs**.
* **Sistema de Likes**: Funcionalidade para curtir/descurtir artigos, projetos e perfis.
* **Painel de Administração**: Gestão de posts e usuários através de um painel de administração completo, onde é possível editar ou excluir qualquer conteúdo.
* **Uploads de Imagens**: Integração com **Cloudinary** para o upload e gerenciamento de imagens.
* **Segurança**: Utilização de **bcrypt** para criptografar senhas de maneira segura.

## 🔧 **Tecnologias Usadas**

* **Express**: Framework minimalista para construção de APIs e gerenciamento de rotas.
* **MySQL**: Sistema de gerenciamento de banco de dados relacional robusto e amplamente utilizado.
* **bcrypt**: Criptografia de senhas para garantir a segurança dos dados dos usuários.
* **Handlebars**: Template engine para gerar views dinâmicas no lado do servidor.
* **Cloudinary**: Serviço de upload e gerenciamento de imagens.
* **WYSIWYG Editor**: Editor de conteúdo rico para criação de artigos com formatação visual.
* **RBAC (Role-Based Access Control)**: Controle de acesso baseado em funções para garantir a segurança das rotas.

## 🛠 **Principais Funcionalidades**

### 📜 **Posts**

* **/posts?postType**: Define o tipo do post (projeto ou artigo).
* **/posts/project/create**: Criação de um novo projeto.
* **/posts/project/:id/:slug**: Exibição de um projeto.
* **/posts/project/:id/:slug/edit**: Edição de um projeto.
* **/posts/project/:id/:slug/delete**: Exclusão de um projeto.
* **/posts/article/create**: Criação de um novo artigo (com suporte a WYSIWYG).
* **/posts/article/:id/:slug**: Exibição de um artigo.
* **/posts/article/:id/:slug/edit**: Edição de um artigo.
* **/posts/article/:id/:slug/delete**: Exclusão de um artigo.

### ❤️ **Interação**

* **/posts/article/:id/:slug/like**: Curtir ou descurtir um artigo.
* **/posts/project/:id/:slug/like**: Curtir ou descurtir um projeto.
* **/profile/:id/:username/like**: Curtir ou descurtir um perfil de usuário.

### 🧑‍💻 **Painel de Administração**

* **/admin/posts?limit=10&offset=0**: Listagem de posts no painel de administração.
* **/admin/posts/project/:id/:slug**: Detalhes de um projeto no painel admin.
* **/admin/posts/article/:id/:slug**: Detalhes de um artigo no painel admin.
* **/admin/users?limit=10&offset=0**: Listagem de usuários no painel de administração.
* **/admin/users/:username:/givePrivillieges**: Conceder privilégios de administrador a um usuário.

### 🏠 **Usuário**

* **/profile/:id/:username**: Exibição do perfil público de um usuário.
* **/profile/dashboard/**: Exibição de todos os posts do usuário logado.
* **/profile/settings/change-photo**: Alterar a foto de perfil.
* **/profile/settings/edit-profile**: Editar informações como descrição, formação e experiência profissional.

### 🔑 **Autenticação**

* **/login**: Login de usuário.
* **/signup**: Registro de um novo usuário.
* **/logout**: Logout de usuário.

## 🚀 **Como Rodar o Projeto**

### Pré-requisitos

* **Node.js** (v14 ou superior)
* **MySQL** (ou banco de dados compatível)
* **Conta no Cloudinary** para upload de imagens

### Passos para rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MatheusAznavour/blog-do-dev
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:**

   ```env
    DATABASE_HOST=localhost
    DATABASE_USER=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_PORT=3306
    DATABASE_DB=blogdodev01
    SESSION_SECRET=your_secret

    # Cloudinary

    CLOUD_NAME=cloud_name
    CLOUDINARY_API_KEY=cloud_key
    CLOUDINARY_API_SECRET=cloud_secret
   ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```

5. **Acesse a aplicação** em `http://localhost:3000`.

## 🤝 **Contribuições**

Contribuições são bem-vindas! Se você tem sugestões, correções ou melhorias, fique à vontade para abrir uma **issue** ou enviar um **pull request**.
