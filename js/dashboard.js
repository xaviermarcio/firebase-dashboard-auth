import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import firebaseConfig from "../config.js";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Referências
const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName || "Usuário";
    const email = user.email;
    userInfo.textContent = `Olá, ${name} (${email}) 👋`;
  } else {
    // Se não estiver logado, volta pro login
    window.location.href = "login.html";
  }
});

// Logout
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "index.html";
  } catch (err) {
    alert("Erro ao sair: " + err.message);
  }
});
