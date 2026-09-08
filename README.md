# NEXUS Brasil

Portal cívico de pessoas, ideias e soluções. Iniciativa em construção, com foco inicial em Sobral e expansão responsável para Ceará e Brasil.

## Conteúdo

- Identidade, missão, valores, manifesto e governança.
- Método NEXUS e roteiro de implantação de 12 meses.
- Panorama de Sobral com três indicadores históricos e fontes oficiais.
- Catálogo com 40 ideias anteriores e seis propostas iniciais para Sobral.
- Biblioteca institucional, canvas editável, pauta, RACI, scorecard e adesão.
- Autoavaliação voluntária com 30 itens, seis dimensões, resultado privado e carência local de três meses.

## Executar

Node.js 22.13 ou superior e npm. No diretório do projeto:

```sh
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npm run verify
```

O resultado estático fica em `dist/client/`. O workflow publica exclusivamente essa pasta. Arquivos originais enviados para pesquisa, resultados pessoais, credenciais, registros clínicos e dossiês não pertencem a este repositório.

## Publicar no GitHub Pages

O workflow `.github/workflows/pages.yml` valida, compila e publica a branch `main`. A configuração administrativa inicial é **Settings → Pages → Source → GitHub Actions**. A publicação só está confirmada após execução bem-sucedida e resposta da URL pública.

O caminho `/NEXUS-BRASIL` é aplicado pelo workflow a links e arquivos estáticos. Para outra hospedagem, use as variáveis vazias (padrão). A configuração Sites oferece uma prévia separada; não substitui a confirmação do GitHub Pages.

## Proteção de dados

A avaliação opera somente no navegador, mediante consentimento. Armazena resultado final, identificação e datas; não armazena respostas individuais. Não há registro central, e-mail verificado, administração de candidatos ou bloqueio entre dispositivos. Nenhuma mensagem é enviada automaticamente. O botão de e-mail prepara um rascunho para revisão voluntária.

O índice de consistência é heurístico e não mede honestidade. O instrumento não tem validação psicométrica apresentada. Nenhuma decisão de ingresso é automática.

## Revisão editorial

Propostas não são realizações. Não publicar acusações, dados sigilosos ou estatísticas sem fonte direta e data-base. Custos e responsáveis desconhecidos ficam como pendentes. Não presumir composição de cargos, parcerias, registro jurídico ou prestação de contas realizada.

Consulte `docs/ENTREGA.md`, `SECURITY.md` e `CONTRIBUTING.md` para manutenção e limitações.
