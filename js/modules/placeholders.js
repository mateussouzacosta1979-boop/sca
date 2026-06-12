const descriptions = {
  crm: "Controle de leads, atendimentos, origem, qualificação, propostas, contratos e conversão em cliente.",
  clientes: "Cadastro completo de pessoas físicas e jurídicas, dados de contato, documentos e histórico de relacionamento.",
  "processos-casos": "Núcleo jurídico do sistema: cada caso poderá ter ou não processo judicial/administrativo vinculado.",
  "tarefas-prazos": "Controle de prazos processuais, audiências, retornos ao cliente, protocolos e tarefas internas.",
  publicacoes: "Importação, consulta e tratamento de publicações/intimações recebidas via API do Diário Oficial/PJe.",
  documentos: "Organização de procurações, contratos, petições, notificações, provas e documentos do cliente.",
  financeiro: "Controle de honorários, parcelas, vencimentos, recebimentos, inadimplência, despesas e repasses.",
  relatorios: "Indicadores comerciais, jurídicos, financeiros, produtividade, prazos e desempenho por responsável.",
  usuarios: "Cadastro de usuários do sistema, status, vínculo operacional e permissões aplicáveis.",
  permissoes: "Configuração granular de acesso por módulo, ação e escopo de visualização.",
  configuracoes: "Parâmetros gerais do sistema, OABs monitoradas, áreas do direito, status e listas auxiliares."
};

export function renderModulePlaceholder(route, title) {
  const root = document.getElementById("view-root");
  const description = descriptions[route] || "Módulo em preparação.";

  root.innerHTML = `
    <section class="module-placeholder">
      <div class="card placeholder-panel">
        <span class="eyebrow">Módulo</span>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>

      <div class="card">
        <div class="card-header">
          <h2>Estrutura inicial</h2>
          <button class="btn btn-primary">Novo registro</button>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Registro</th>
                <th>Responsável</th>
                <th>Status</th>
                <th>Atualização</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base do módulo preparada</td>
                <td>Sistema</td>
                <td><span class="status neutral">Em desenvolvimento</span></td>
                <td>Agora</td>
                <td><button class="action-link">Visualizar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
