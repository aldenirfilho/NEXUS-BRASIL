# Publicação pelo GitHub e recuperação de versões

## Estado registrado em 08/09/2026

O código completo da versão 4.0 está em `main`, no commit `bc8744baba0bdc7571a83a6dca58f751d49a09da`. A [execução de implantação dessa versão](https://github.com/aldenirfilho/NEXUS-BRASIL/actions/runs/34207064429) concluiu a etapa de validação e compilação. A etapa de configuração do Pages falhou com `Not Found`, indicando que a configuração administrativa precisava ser concluída.

Este é um registro histórico daquela execução. Consulte [GitHub Actions](https://github.com/aldenirfilho/NEXUS-BRASIL/actions) para o estado atual. A existência dos arquivos no repositório não confirma que um endereço público do site esteja ativo.

## Ativação inicial do Pages

1. Entre no GitHub com uma conta que administre o repositório.
2. Abra [Settings → Pages](https://github.com/aldenirfilho/NEXUS-BRASIL/settings/pages).
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Abra a execução do workflow de publicação em **Actions** e use **Re-run all jobs**, ou execute o workflow manualmente.
5. Aguarde as etapas de compilação e implantação terminarem com sucesso.
6. Abra o endereço apresentado pelo próprio GitHub Pages e confira início, propostas, biblioteca, ferramentas e avaliação.

O workflow já aplica o prefixo `/NEXUS-BRASIL` aos links e arquivos estáticos. Publica somente `dist/client/`. Não envie a pasta inteira de trabalho como artefato de hospedagem.

## Atualizações

Mudanças incorporadas em `main` disparam o fluxo de publicação. A etapa de compilação instala as dependências pelo arquivo de versões travadas, confere tipagem, executa os testes, compila e verifica a exportação estática. Uma falha deve ser investigada no passo correspondente antes de afirmar que a atualização foi publicada.

Documentos em `public/documentos/` acompanham o pacote do site. Documentos de manutenção em `docs/` permanecem disponíveis no repositório. A prévia complementar é uma implantação separada e não substitui a publicação pelo Pages.

## Recuperar uma versão

1. Identifique, no histórico do GitHub, o commit que introduziu o problema e a última versão funcional.
2. Crie uma alteração de reversão, preservando o histórico; evite forçar a branch ou apagar commits.
3. Execute as verificações aplicáveis e revise os arquivos afetados.
4. Incorpore a reversão em `main` e acompanhe a nova implantação.
5. Confira o resultado no endereço público.

Uma reversão de código não recupera dados apagados do navegador. Nenhum histórico central de avaliações está ativo nesta versão.
