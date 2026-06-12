import { initAuth } from "./auth.js";
import { initRouter, navigateTo } from "./router.js";
import { renderDashboard } from "./modules/dashboard.js";

const loginScreen = document.getElementById("login-screen");
const appShell = document.getElementById("app-shell");

function showApp() {
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderDashboard();
  navigateTo("dashboard");
}

function showLogin() {
  appShell.classList.add("hidden");
  loginScreen.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initAuth({ onLogin: showApp, onLogout: showLogin });

  // Estado provisório para desenvolvimento visual.
  // Quando o Firebase Auth estiver configurado, isso será substituído pela sessão real.
  showLogin();
});
