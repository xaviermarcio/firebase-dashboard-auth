// js/register.js
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { app } from "../config.js";

const auth = getAuth(app);

// Seletores
const form = document.getElementById("registerForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("password");
const checklistContainer = document.getElementById("passwordChecklist");

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
  let hasError = false;

  // Comprimento mínimo
  if (value.length >= 8) {
    checklist.length.textContent = "✔ Pelo menos 8 caracteres";
    checklist.length.className = "text-green-600";
  } else {
    checklist.length.textContent = "✘ Pelo menos 8 caracteres";
    checklist.length.className = "text-red-600";
    hasError = true;
  }

  // Maiúscula
  if (/[A-Z]/.test(value)) {
    checklist.uppercase.textContent = "✔ Uma letra maiúscula";
    checklist.uppercase.className = "text-green-600";
  } else {
    checklist.uppercase.textContent = "✘ Uma letra maiúscula";
    checklist.uppercase.className = "text-red-600";
    hasError = true;
  }

  // Minúscula
  if (/[a-z]/.test(value)) {
    checklist.lowercase.textContent = "✔ Uma letra minúscula";
    checklist.lowercase.className = "text-green-600";
  } else {
    checklist.lowercase.textContent = "✘ Uma letra minúscula";
    checklist.lowercase.className = "text-red-600";
    hasError = true;
  }

  // Número
  if (/\d/.test(value)) {
    checklist.number.textContent = "✔ Um número";
    checklist.number.className = "text-green-600";
  } else {
    checklist.number.textContent = "✘ Um número";
    checklist.number.className = "text-red-600";
    hasError = true;
  }

  // Caractere especial
  if (/[\W_]/.test(value)) {
    checklist.special.textContent = "✔ Um caractere especial";
    checklist.special.className = "text-green-600";
  } else {
    checklist.special.textContent = "✘ Um caractere especial";
    checklist.special.className = "text-red-600";
    hasError = true;
  }

  // Exibe checklist se houver erro, oculta se estiver tudo certo
  if (value.length > 0 && hasError) {
    checklistContainer.classList.remove("hidden");
  } else {
    checklistContainer.classList.add("hidden");
  }
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
    setTimeout(() => (window.location.href = "login.html"), 2000);
  } catch (err) {
    showMsg("❌ Erro: " + (err.code || err.message));
  }
});
