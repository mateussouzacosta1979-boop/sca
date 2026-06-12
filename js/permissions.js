// Serviço inicial de permissões.
// A regra será: cargo não libera acesso automaticamente;
// permissões específicas definem módulo, ação e escopo de dados.

export const permissionRules = {
  dashboard: ["view"],
  crm: ["view", "create", "edit", "delete", "view_all"],
  clientes: ["view", "create", "edit", "delete", "view_all"],
  processosCasos: ["view", "create", "edit", "delete", "view_all"],
  tarefasPrazos: ["view", "create", "edit", "delete", "complete", "view_all"],
  publicacoes: ["view", "import", "link_case", "generate_deadline", "view_all"],
  financeiro: ["view", "create", "edit", "delete", "view_all"],
  usuarios: ["view", "create", "edit", "delete"],
  permissoes: ["view", "edit"],
  configuracoes: ["view", "edit"]
};

export function can(userPermissions = {}, moduleKey, action) {
  return Boolean(userPermissions?.[moduleKey]?.[action]);
}
