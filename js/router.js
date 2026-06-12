import { renderDashboard } from "./modules/dashboard.js";
import { renderModulePlaceholder } from "./modules/placeholders.js";

const titles = {
  dashboard: "Dashboard",
  crm: "CRM / Atendimentos",
  clientes: "Clientes",
  "processos-casos": "Processos e Casos",
  "tarefas-prazos": "Prazos e Tarefas",
  publicacoes: "Publicações e Intimações",
  documentos: "Documentos",
  financeiro: "Financeiro",
  relatorios: "Relatórios",
  usuarios: "Usuários",
  permissoes: "Permissões",
  configuracoes: "Configurações"
};

export function initRouter() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      navigateTo(button.dataset.route);
    });
  });
}

export function navigateTo(route) {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });

  document.getElementById("page-title").textContent = titles[route] || "SCA Legal System";

  if (route === "dashboard") {
    renderDashboard();
    return;
  }

  renderModulePlaceholder(route, titles[route] || route);
}
