# 🔐 Firebase Dashboard Auth  

Sistema de autenticação com **Firebase Authentication** e **Dashboard Pessoal** utilizando **HTML**, **TailwindCSS** e **JavaScript**.  
Projeto desenvolvido passo a passo para fins de **aprendizado** e **portfólio**.  

---

## 🚀 Tecnologias utilizadas  

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)  

---

## 📊 Status do Projeto  

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)  
![Commits](https://img.shields.io/github/last-commit/seu-usuario/firebase-dashboard-auth?style=for-the-badge)  
![Tamanho](https://img.shields.io/github/repo-size/seu-usuario/firebase-dashboard-auth?style=for-the-badge)  
![Licença](https://img.shields.io/github/license/seu-usuario/firebase-dashboard-auth?style=for-the-badge)  

---

## 📂 Estrutura do projeto  

```
firebase-dashboard-auth/
│── assets/
│     └── images/
│         ├── tela_apos_login.png
│         ├── tela_cadastro.png
│         └── tela_login.png
│── css/
│     └── style.css
│── js/
│     ├── dashboard.js
│     ├── index.js
│     ├── login.js
│     └── register.js
│── dashboard.html
│── index.html
│── login.html
│── register.html
│── config.js
│── .gitignore
│── README.md
```

---

## ⚡ Funcionalidades  

- [x] Estrutura inicial com Tailwind  
- [x] Tela de Login com validação (Firebase Auth)  
- [x] Tela de Cadastro com checklist de senha dinâmica  
- [x] Dashboard protegido (somente logado acessa)  
- [x] Logout integrado ao Firebase  
- [x] Recuperação de senha  
- [ ] Integração com Firestore para dados extras  
- [x] Deploy no Firebase Hosting  

---

## 🛠 Como rodar o projeto  

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/firebase-dashboard-auth.git
   ```
2. Configure o arquivo `config.js` com suas credenciais do Firebase.  
3. Abra `index.html` ou rode via **Live Server** do VS Code.  

---

## 🔒 Segurança  

Este projeto utiliza um **.gitignore** para evitar que chaves sensíveis (`config.js`) sejam enviadas ao GitHub.  

---

## 📸 Prints  

### 🔑 Tela de Login  
![Login](/assets/images/tela_login.png)  

### 🔑 Tela de recuperar senha  
![Recuperar Senha](/assets/images/tela_recupera_senha.png)  

<p align="center"><i>
O Firebase já traz essa funcionalidade pronta via método.<br>
Isso dispara um email automático para o usuário redefinir a senha.<br>
Você não precisa criar tela de redefinição, só uma tela simples( já criada reset.html) onde ele digita o email.
</i></p>

### 📝 Tela de Cadastro  
![Cadastro](/assets/images/tela_cadastro.png)  

<p align="center"><i>
Checklist dinâmico de senha
</i></p>
### 📊 Dashboard (após login)  
![Dashboard](/assets/images/tela_apos_login.png)  

### 🔑 Tela de Login - Mobile  
![Login](/assets/images/mobile_login.jpg)  

### 📝 Tela de Cadastro  - Mobile
![Cadastro](/assets/images/mobile_cadastro.jpg)  
---

## 👨‍💻 Autor  

Projeto desenvolvido por **Márcio Xavier** 🚀  

## 🚀 Deploy
O projeto está disponível em produção no Firebase Hosting:

👉 [https://fir-dashboard-auth-18644.web.app](https://fir-dashboard-auth-18644.web.app)

