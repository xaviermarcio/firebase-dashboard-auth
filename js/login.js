import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import firebaseConfig from "../config.js";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seletores
const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");

// Função para exibir mensagens
function showMsg(msg, type = "error") {
  feedback.textContent = msg;
  feedback.className = type === "error" ? "text-red-600" : "text-green-600";
}

// Validação de e-mail
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Submit do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!isValidEmail(email)) return showMsg("E-mail inválido.");
  if (password.length < 6) return showMsg("A senha deve ter pelo menos 6 caracteres.");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showMsg("✅ Login realizado com sucesso!", "success");
    setTimeout(() => (window.location.href = "dashboard.html"), 1000);
  } catch (err) {
    showMsg("❌ Erro: " + (err.code || err.message));
  }
});
