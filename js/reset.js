import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import firebaseConfig from "../config.js";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seletores
const form = document.getElementById("resetForm");
const feedback = document.getElementById("feedback");

// Evento de submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value.trim();

  try {
    await sendPasswordResetEmail(auth, email);
    feedback.textContent = "✅ Email de recuperação enviado!";
    feedback.className = "text-green-600 text-center text-sm";
  } catch (err) {
    feedback.textContent = "❌ Erro: " + (err.code || err.message);
    feedback.className = "text-red-600 text-center text-sm";
  }
});
