export function renderDashboard() {
  const root = document.getElementById("view-root");

  root.innerHTML = `
    <div class="dashboard-grid">
      <section class="metrics-grid">
        ${metricCard("Leads novos", "0", "Aguardando atendimento")}
        ${metricCard("Clientes ativos", "0", "Base inicial")}
        ${metricCard("Prazos próximos", "0", "Próximos 7 dias")}
        ${metricCard("Publicações novas", "0", "Aguardando análise")}
      </section>

      <section class="dashboard-columns">
        <div class="card">
          <div class="card-header">
            <h2>Prazos e tarefas próximos</h2>
            <button class="btn btn-outline">Ver todos</button>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Cliente/Caso</th>
                  <th>Responsável</th>
                  <th>Data limite</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="5">Nenhum prazo cadastrado no momento.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h2>Ações rápidas</h2>
          </div>
          <div class="card-body">
            <div class="quick-actions">
              ${quickAction("Novo atendimento", "CRM")}
              ${quickAction("Novo cliente", "Clientes")}
              ${quickAction("Novo caso/processo", "Jurídico")}
              ${quickAction("Registrar prazo", "Controladoria")}
              ${quickAction("Importar publicações", "Intimações")}
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-header">
          <h2>Publicações e intimações recentes</h2>
          <button class="btn btn-outline">Abrir módulo</button>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Tribunal</th>
                <th>Órgão</th>
                <th>Processo</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="6">Nenhuma publicação importada no momento.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function metricCard(label, value, note) {
  return `
    <article class="card metric-card">
      <p class="metric-label">${label}</p>
      <p class="metric-value">${value}</p>
      <p class="metric-note">${note}</p>
    </article>
  `;
}

function quickAction(title, area) {
  return `
    <button class="quick-action">
      <span>${title}</span>
      <small>${area}</small>
    </button>
  `;
}
