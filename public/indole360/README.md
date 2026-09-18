# ÍNDOLE 360° — piloto público v1.1.0

**Idealização:** Aldenir Rocha. **Base documental:** 17/09/2026.
Adaptação editorial e técnica do protocolo ÍNDOLE 360° v1.0 fornecido pelo autor. Esta área é independente do portal NEXUS Brasil e não altera seus outros projetos.

## O que esta versão faz

Consulta por empresa, marca, tipo de produto e ticker; filtro por setor; fichas com fontes; comparação documental; séries financeiras com lacunas explícitas; metodologia HONRA × MÉRITO; roteiro de pesquisa e oficina privada de pontuação. Exporta dados e rascunhos JSON, copia links e permite imprimir a visão selecionada.

**Base inicial: HP e Nubank. Duas fichas parciais; zero avaliações socioambientais completas.** Não existe nota pública, ranking ético, selo de redenção ou recomendação de investimento concedido a essas empresas. Campos sem pesquisa ficam N/D. Não ter processos cadastrados não significa inexistência de processos.

O campo de busca consulta somente `data.json`. A oficina gera instruções para uma pesquisa posterior, não executa agentes nem chama serviços de IA. Não há monitoramento automático, API financeira, cotação em tempo real, leitura de código de barras ou rastreabilidade de cada produto. Resultados financeiros de 2026 ainda não foram integrados. Para usar o gerador com outra IA, é necessário executar e conferir a pesquisa nesse serviço separadamente.

## Fontes iniciais e limites

- HP: comunicado oficial de resultados anuais de 2025, publicado em 25/11/2025. Séries 2024–2025 e quadros financeiros do comunicado; os quadros são identificados como não auditados. Não atribuir à publicação a natureza de demonstração auditada examinada pelo projeto.
- Nu: comunicado oficial anual de 2025, publicado em 25/02/2026; lucro arredondado. Valores comparativos de 2023–2024 são de resultado indexado do comunicado corporativo anterior; sua reabertura direta e reconciliação com os 20-F permanecem pendentes, como informado na ficha.
- URLs, datas, editor e ressalvas estão em `data.json` e na aba Fontes. Data desconhecida permanece nula. Informação declarada pela companhia não significa asseguração independente do projeto.

## Correções metodológicas da v1.1

Lucro é resultado por competência; fluxo de caixa distingue operação, investimento e financiamento. P&D, treinamento e doações podem ser despesas anteriores ao lucro; caixa é estoque. Essas rubricas **não** são fatias exclusivas somáveis a 100% do lucro. O site não produz uma rosca contábil enganosa. Soma de lucros anuais não é saldo de lucros acumulados no balanço.

Dividendos e recompras não demonstram má conduta por si. Distribuir mais que o lucro anual não prova endividamento; é necessário avaliar reservas, caixa e sustentabilidade. Razões com lucro zero, negativo ou ausente ficam indisponíveis. O código não usa o IRent original como diagnóstico moral.

Social próprio, benefício fiscal, obrigação reparatória e despesa operacional precisam de identificação separada. A origem incentivada não invalida automaticamente um impacto social verificado. Acordo não é sinônimo universal de confissão: conferir o instrumento e a jurisdição. Acusação, andamento, decisão recorrível, decisão definitiva, acordo, arquivamento e prescrição exigem contextualização.

Falta de dado não recebe zero nem nota neutra inventada. O placar é uma convenção editorial não validada cientificamente. Não mede a personalidade de dirigentes nem prevê comportamento futuro. Prevenção de danos, direitos humanos e animais e reparações pendentes não podem ser compensados apenas por filantropia.

Referências metodológicas:
- IAS 7: https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/
- CGU, acordos de leniência: https://www.gov.br/cgu/pt-br/assuntos/integridade-privada/acordo-leniencia/como-fazer-um-acordo
- Hospedagem: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Arquivos

- `index.html`: interface, estilos e metodologia pública.
- `app.mjs`: consulta, renderização, comparação e oficina.
- `core.mjs`: regras puras, validações, fórmulas e gerador de roteiro.
- `data.json`: catálogo curado e registro de fontes.
- `README.md`: escopo, limites e manutenção.
- `../../../tests/indole360.test.mjs`: testes de regressão no repositório.

Nenhuma dependência externa, biblioteca via CDN, chave ou segredo é necessário para esta área estática. Ela exige um servidor HTTP/HTTPS para importar os módulos e carregar o JSON; abrir o HTML diretamente pelo gerenciador de arquivos pode não funcionar.

## Manutenção e publicação

Os arquivos ficam em `public/indole360/`. O fluxo existente do NEXUS-BRASIL compila para `dist/client/` e publica no GitHub Pages. Antes de considerar o site publicado, verificar o workflow e a resposta de `/NEXUS-BRASIL/indole360/`.

Para testar no repositório: `node --test tests/indole360.test.mjs`. Para desenvolvimento isolado: `python -m http.server 8000 --directory public/indole360`, então abrir `http://localhost:8000`.

Novos dados devem entrar por alteração revisada no GitHub, nunca pelo formulário público. Preservar identificadores de fontes, entidade consolidada, moeda, unidade, exercícios, competência, data-base, arredondamentos e campos nulos. Revisar fontes, contraditório e comparabilidade antes de qualquer avaliação. Não marcar `review.status` como `reviewed` sem revisão editorial real de todas as dimensões. O bloqueio de pontuação por campos não substitui essa revisão.

A futura publicação de avaliações completas exige também expandir a apresentação atual (histórico, justificativas, projetos e casos), que neste piloto informa explicitamente não revisado. Não basta alterar um sinalizador em `data.json`. Os 12 papéis do protocolo são uma organização de trabalho proposta; não processos autônomos executados neste site.

## Privacidade e correções

O rascunho só é salvo após comando explícito, na chave local `indole360.draft.v1`. O botão de apagar remove apenas essa chave. Outros sites na mesma origem podem compartilhar o armazenamento: não use rascunhos para informação sensível. Não há servidor de contribuições, autenticação, analytics próprio, afiliados ou integração de corretora. A hospedagem e serviços externos podem registrar acesso técnico.

O botão de correção abre uma proposta no GitHub, sujeita à confirmação do visitante. Não envia automaticamente. Não inclua CPF, dados clínicos, endereços, documentos privados ou acusações não documentadas. O mantenedor deve registrar a fonte da correção, a resposta da organização e o histórico da alteração. A publicação depende de revisão, sem garantia de prazo de resposta nesta versão.

## Verificações desta entrega

14 testes de núcleo: limites, valores ausentes, fórmulas, fontes obrigatórias, exemplo fictício, soma parcial, URLs seguras, reparação e dados do piloto. 47 verificações de DOM, interface e lógica em Chromium, incluindo larguras de 320, 390, 768 e 1440 pixels e inspeção visual de telas desktop e móvel.

Limitação do teste de interface: a política do navegador de testes impediu navegação HTTP/file; os documentos foram renderizados em memória. Carregamento do JSON, persistência e destino do download usaram adaptadores simulados. Isso não comprova rede, persistência real, todos os navegadores ou publicação. A confirmação do GitHub Pages é uma etapa separada.
