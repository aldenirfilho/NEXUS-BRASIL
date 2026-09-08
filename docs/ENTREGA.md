# Entrega NEXUS Brasil 4.0

08/09/2026. Fonte canônica: https://github.com/aldenirfilho/NEXUS-BRASIL

## Implementado

11 páginas principais e página 404; identidade responsiva, navegação acessível, método, governança, panorama de Sobral, 46 fichas de propostas com pesquisa e filtros, biblioteca e instrumentos editáveis. Autoavaliação com 30 itens, seis blocos embaralhados, regras anteriores de pontuação preservadas, código aleatório, relatório baixável, e-mail preparado pelo usuário, carência de três meses e validação humana. Campos da avaliação não são enviados automaticamente.

## Verificações

- Tipagem TypeScript.
- Sete testes automatizados da pontuação, casos extremos, carência e relatório.
- Build estático de todas as rotas, inclusive 404.
- Links e assets locais conferidos no pacote exportado.
- Compilação com prefixo `/NEXUS-BRASIL` testada para GitHub Pages.
- Auditoria das dependências corrigida até zero vulnerabilidades reportadas nesta data.
- Fontes públicas do panorama conferidas, com datas preservadas.
- GitHub Pages ativado em 08/09/2026, com HTTPS obrigatório e implantação bem-sucedida do commit `c4c5ad124ccf5c898aa9d8314af2a762c610710e`.
- Endereço público, 11 páginas principais e amostra de documentos/arquivos responderam HTTP 200; catálogo servido com 46 propostas e SHA-256 igual ao repositório.

## Limitações e próximos gates

- Não foi realizado ensaio visual e de cliques em navegador; não foi explicitamente solicitado. O acesso à rota local para verificar a integração WebMCP foi bloqueado pelo navegador (`ERR_BLOCKED_BY_CLIENT`), portanto o filtro WebMCP não foi validado. Busca e filtros visuais usam o mesmo estado React.
- Nenhum registro central, autenticação de membros, verificação de e-mail ou bloqueio entre dispositivos está ativo. Não há importação automática dos resultados do site anterior.
- Dados de candidatos, históricos privados e respostas individuais não estão no repositório. O questionário não foi validado psicometricamente.
- GitHub Pages e URL pública foram confirmados; detalhes e evidência da execução estão no [registro de publicação](PUBLICACAO.md).
- A prévia Sites usa audiência privada do proprietário; isso não equivale a publicação pública no GitHub Pages.
- O site não confirma composição institucional, parcerias, receitas, despesas, estatuto registrado ou execução de pilotos.

## Retomada

1. Abrir o [site público](https://aldenirfilho.github.io/NEXUS-BRASIL/) e consultar o último workflow em GitHub Actions.
2. Realizar revisão visual e de interação em computador e celular, incluindo filtros e avaliação, sem usar dados reais de candidatos.
3. Definir a próxima revisão editorial e institucional antes de ampliar funcionalidades de cadastro.

Não duplicar o projeto nem copiar materiais brutos para a pasta pública. Futuras mudanças devem preservar as versões e as limitações da avaliação.
