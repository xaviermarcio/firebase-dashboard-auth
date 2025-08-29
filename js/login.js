// js/login.js
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { app } from "../config.js";

const auth = getAuth(app);

// Seletores
const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");

// Função para exibir mensagens
function showMsg(msg, type = "error") {
  feedback.textContent = msg;
  feedback.className = type === "error" ? "text-red-600" : "text-green-600";
}

// Submit do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showMsg("✅ Login realizado com sucesso!", "success");
    setTimeout(() => (window.location.href = "dashboard.html"), 1500);
  } catch (err) {
    // Alguns erros comuns
    if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
      showMsg("❌ E-mail ou senha incorretos.");
    } else if (err.code === "auth/user-not-found") {
      showMsg("❌ Usuário não encontrado.");
    } else {
      showMsg("❌ Erro: " + (err.code || err.message));
    }
  }
});
