import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import firebaseConfig from "../config.js";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seletores
const form = document.getElementById("registerForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("password");

// Checklist
const checklist = {
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  lowercase: document.getElementById("lowercase"),
  number: document.getElementById("number"),
  special: document.getElementById("special"),
};

// Função para exibir mensagens
function showMsg(msg, type = "error") {
  feedback.textContent = msg;
  feedback.className = type === "error" ? "text-red-600" : "text-green-600";
}

// Validação dinâmica da senha
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  // Comprimento mínimo
  checklist.length.textContent = value.length >= 8 ? "✔ Pelo menos 8 caracteres" : "✘ Pelo menos 8 caracteres";
  checklist.length.className = value.length >= 8 ? "text-green-600" : "text-red-600";

  // Maiúscula
  checklist.uppercase.textContent = /[A-Z]/.test(value) ? "✔ Uma letra maiúscula" : "✘ Uma letra maiúscula";
  checklist.uppercase.className = /[A-Z]/.test(value) ? "text-green-600" : "text-red-600";

  // Minúscula
  checklist.lowercase.textContent = /[a-z]/.test(value) ? "✔ Uma letra minúscula" : "✘ Uma letra minúscula";
  checklist.lowercase.className = /[a-z]/.test(value) ? "text-green-600" : "text-red-600";

  // Número
  checklist.number.textContent = /\d/.test(value) ? "✔ Um número" : "✘ Um número";
  checklist.number.className = /\d/.test(value) ? "text-green-600" : "text-red-600";

  // Caractere especial
  checklist.special.textContent = /[\W_]/.test(value) ? "✔ Um caractere especial" : "✘ Um caractere especial";
  checklist.special.className = /[\W_]/.test(value) ? "text-green-600" : "text-red-600";
});

// Função auxiliar para validar senha forte
function isStrongPassword(pw) {
  return (
    pw.length >= 8 &&
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /\d/.test(pw) &&
    /[\W_]/.test(pw)
  );
}

// Submit do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const confirmEmail = document.getElementById("confirmEmail").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (email !== confirmEmail) return showMsg("Os e-mails não coincidem.");
  if (password !== confirmPassword) return showMsg("As senhas não coincidem.");
  if (!isStrongPassword(password)) return showMsg("A senha não atende aos requisitos de segurança.");

  try {
    // Cria o usuário no Firebase
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: `${firstName} ${lastName}` });

    showMsg("✅ Conta criada com sucesso!", "success");
    setTimeout(() => (window.location.href = "login.html"), 1500);
  } catch (err) {
    showMsg("❌ Erro: " + (err.code || err.message));
  }
});
