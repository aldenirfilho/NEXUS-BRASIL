export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const pathTo = (path: string) => `${basePath}${path}`;
export const contact = 'aldenirmed@gmail.com';
export const updated = '8 de setembro de 2026';
export const sourceLinks = {
  ibge: 'https://www.ibge.gov.br/cidades-e-estados/ce/sobral.html',
  transparencia: 'https://transparencia.sobral.ce.gov.br/',
  dados: 'https://transparencia.sobral.ce.gov.br/dadosAbertos',
  inep: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/ideb/resultados',
  diario: 'https://www.sobral.ce.gov.br/diario/pesquisa/index',
  servicos: 'https://cartadeservicos.sobral.ce.gov.br/',
};
export const steps = [
  [
    'Estudar',
    'Compreender antes de concluir.',
    'Definir a pergunta, buscar fontes primárias e registrar o que ainda não sabemos.',
    'Diagnóstico com fontes e limitações.',
  ],
  [
    'Escutar',
    'O conhecimento também está nas pessoas.',
    'Ouvir quem vive o problema, respeitando consentimento, contexto e privacidade.',
    'Mapa de necessidades sem exposição pessoal.',
  ],
  [
    'Propor',
    'Transformar uma intenção em um plano.',
    'Comparar alternativas, custos, responsabilidades e riscos.',
    'Proposta com objetivo, responsável e indicador.',
  ],
  [
    'Testar',
    'Começar com um piloto responsável.',
    'Confirmar equipe e recursos; definir limites e condições para interromper.',
    'Piloto de escopo reduzido.',
  ],
  [
    'Medir',
    'Observar o que realmente mudou.',
    'Acompanhar processo, resultado, custo e efeitos não previstos.',
    'Relatório que separa observação de causalidade.',
  ],
  [
    'Corrigir',
    'Mudar de ideia também é avançar.',
    'Revisar hipóteses e decidir entre ajustar, continuar, pausar ou encerrar.',
    'Decisão fundamentada e registrada.',
  ],
  [
    'Evoluir',
    'Compartilhar o que aprendemos.',
    'Documentar o método, formar pessoas e adaptar a solução a novos contextos.',
    'Versão aprimorada e replicável.',
  ],
  [
    'Servir',
    'O resultado precisa chegar às pessoas.',
    'Prestar contas do benefício público e sustentar as melhorias.',
    'Entrega verificável e confiança merecida.',
  ],
];
