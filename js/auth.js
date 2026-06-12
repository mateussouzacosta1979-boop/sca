export function initAuth({ onLogin, onLogout }) {
  const form = document.getElementById("login-form");
  const feedback = document.getElementById("login-feedback");
  const logoutButton = document.getElementById("logout-button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
      feedback.textContent = "Informe e-mail e senha para acessar.";
      return;
    }

    // Login provisório para protótipo visual.
    // Depois será trocado por Firebase Authentication.
    feedback.textContent = "";
    onLogin();
  });

  logoutButton.addEventListener("click", () => {
    form.reset();
    onLogout();
  });
}
