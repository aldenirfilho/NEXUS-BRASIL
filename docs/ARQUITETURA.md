# Estrutura e manutenção do site

Referência da versão 4.0, organizada em 08/09/2026.

## Funcionamento

O NEXUS Brasil é um site estático construído com React, TypeScript e Vinext. A compilação gera HTML, estilos e scripts em `dist/client/`, pasta usada pela hospedagem. Não existe servidor de cadastro, banco de candidatos ou área administrativa de membros nesta versão.

O código e os documentos têm como origem principal este repositório. A configuração em `.openai/hosting.json` atende à prévia complementar; o GitHub Pages usa seu próprio fluxo em `.github/workflows/pages.yml`.

## Onde editar

| Área | Arquivos |
| --- | --- |
| Início | `app/page.tsx` |
| Identidade | `app/sobre/page.tsx` |
| Método e implantação | `app/metodo/page.tsx` |
| Sobral e referências | `app/sobral/page.tsx`, `docs/FONTES.md` |
| Propostas | `app/propostas/page.tsx`, `lib/proposals.json`, `public/propostas.json` |
| Biblioteca | `app/biblioteca/page.tsx`, `public/documentos/` |
| Integração | `app/participar/page.tsx` |
| Autoavaliação | `app/avaliacao/page.tsx`, `lib/questions.json`, `lib/assessment.mjs` |
| Transparência | `app/transparencia/page.tsx` |
| Privacidade | `app/privacidade/page.tsx` |
| Canvas e modelos | `components/project-tools.tsx`, `lib/templates.ts`, `public/documentos/` |
| Aparência e navegação | `app/globals.css`, `components/site-shell.tsx` |
| Caminho de hospedagem | `next.config.ts`, `lib/site.ts`, `scripts/prepare-export.mjs` |

Mantenha as duas cópias do catálogo de propostas iguais. Revise conjuntamente os modelos da interface e os arquivos de documentação correspondentes.

## Autoavaliação e dados pessoais

As respostas são processadas no navegador. Após consentimento, o registro local contém identificação, resultado agregado, código, versão e datas. As respostas individuais não são persistidas. O relatório pode ser baixado; o botão de e-mail prepara uma mensagem para revisão pelo participante.

A carência usa três meses de calendário. O bloqueio local pode ser contornado com outro dispositivo ou remoção dos dados do navegador. O código do relatório é um identificador aleatório, não uma assinatura digital. Uma futura central de registros exige arquitetura própria, controle de acesso e verificação de identidade.

Pontuação e consistência são critérios exploratórios descritos na [metodologia](../public/documentos/metodologia-avaliacao.md). Não equivalem a diagnóstico, medida de honestidade ou aprovação automática.

## Revisar uma alteração

1. Identifique o arquivo e registre o motivo da mudança.
2. Preserve fontes, datas, versões e limites metodológicos.
3. Execute `npm run typecheck`, `npm test`, `npm run build` e `npm run verify` quando alterar código ou conteúdo servido pelo site.
4. Confira a diferença no GitHub antes de incorporar a alteração em `main`.
5. Após publicar, verifique as rotas afetadas no endereço de produção.

Alterações apenas em documentos exigem revisão do texto e dos links. Mudanças na avaliação também exigem revisão dos testes e da versão do instrumento.
