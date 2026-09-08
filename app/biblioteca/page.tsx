import { PageIntro } from '@/components/site-shell';
import { pathTo } from '@/lib/site';
export const metadata = { title: 'Biblioteca institucional' };
export default function Biblioteca() {
  return (
    <>
      <PageIntro
        label="BASE INSTITUCIONAL E APRENDIZADO"
        title="Conhecimento para consultar e compartilhar."
      >
        Princípios, métodos e modelos de trabalho. Conteúdo público para
        compreender como o NEXUS pretende se organizar.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="three-col">
          {[
            [
              'Ementa institucional',
              'Identidade, governança, projetos, participação, finanças e plano de implantação.',
              'Origem: v1.0 · 07/09/2026',
              '/documentos/ementa-nexus-brasil.md',
            ],
            [
              'Código de Conduta',
              'Compromissos de convivência, responsabilidade, privacidade e revisão de conduta.',
              'Versão pública · 08/09/2026',
              '/documentos/codigo-de-conduta.md',
            ],
            [
              'Metodologia da avaliação',
              'Estrutura, fórmula, critérios, limitações e regras de reavaliação.',
              'Versão 1.1.0 · 08/09/2026',
              '/documentos/metodologia-avaliacao.md',
            ],
          ].map(([t, d, v, u]) => (
            <article className="panel" key={t}>
              <span className="tag">Documento público</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <p className="count">{v}</p>
              <a className="button outline" href={pathTo(u)} download>
                Baixar texto editável ↓
              </a>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>O que estes documentos representam</strong>Os documentos
          descrevem a proposta institucional. Sua disponibilização não comprova
          registro jurídico, composição de cargos, aprovação formal ou início de
          atividades. Documentos privados, avaliações individuais e dossiês não
          integram esta biblioteca pública.
        </div>
        <div className="prose">
          <h2>Princípios essenciais</h2>
          <p>
            Legalidade, dignidade humana, liberdade de consciência, pensamento
            crítico, transparência, responsabilidade com recursos, proteção de
            dados e benefício público. A comunicação deve distinguir dado
            verificado, proposta, hipótese e opinião.
          </p>
          <h2>Modelos de trabalho</h2>
          <p>
            Canvas, pauta de reunião, matriz RACI (responsável, aprovador,
            consultado e informado), scorecard de desenvolvimento e minuta de
            adesão estão disponíveis em formato editável. Modelos preenchidos
            com dados pessoais precisam de armazenamento privado.
          </p>
          <a className="text-link" href={pathTo('/ferramentas/')}>
            Abrir as ferramentas →
          </a>
          <h2 id="metodologia">A avaliação precisa ser compreendida</h2>
          <p>
            O instrumento reúne 30 afirmações em seis dimensões. A pontuação
            orienta uma conversa sobre comportamentos declarados; não mede valor
            pessoal, competência profissional ou honestidade. Não foi
            apresentado estudo de validação psicométrica.
          </p>
          <details>
            <summary>Pontuação e regra de consistência</summary>
            <div>
              Cada dimensão tem cinco itens e varia de 5 a 25. O total varia de
              30 a 150. Itens inversos são corrigidos pela fórmula 6 − resposta.
              A consistência parte de 100, subtrai 12 por divergência maior que
              2 entre pares relacionados e 6 por cada resposta máxima além de
              24. Duração abaixo de 180 segundos subtrai 15; abaixo de 90
              segundos subtrai mais 25. O resultado fica entre 0 e 100.
            </div>
          </details>
          <details>
            <summary>Como interpretar os encaminhamentos</summary>
            <div>
              Consistência alta: 80 ou mais; moderada: 60–79; baixa: menos de
              60. Para encaminhamento por pontuação: ao menos 120/150 e 17/25 em
              todas as dimensões, com validação humana. Para forte alinhamento
              declarado: ao menos 135/150, 19/25 em todas as dimensões e
              consistência alta. Consistência baixa impede usar aquela tentativa
              para ingresso segundo a regra institucional, sem qualquer
              conclusão sobre honestidade ou valor pessoal.
            </div>
          </details>
          <details>
            <summary>Por que respostas máximas exigem contexto?</summary>
            <div>
              Um padrão máximo pode refletir diferentes fenômenos e, sozinho,
              não distingue alinhamento, idealização ou compreensão do padrão
              desejável. As regras atuais são heurísticas. Diferenças entre
              itens e tempo de preenchimento também podem ter explicações
              legítimas. Nenhuma sinalização comprova mentira.
            </div>
          </details>
          <details>
            <summary>Como a metodologia pode evoluir?</summary>
            <div>
              Revisões futuras podem estudar questões situacionais e escolhas
              entre alternativas plausíveis. Qualquer alteração requer
              documentação e versão. Revisão por inteligência artificial pode
              auxiliar, mas não equivale a validação científica, calibração
              psicométrica ou auditoria independente.
            </div>
          </details>
          <h2>Expansão com responsabilidade</h2>
          <p>
            O caminho previsto é Sobral → região Norte do Ceará → Ceará →
            Brasil. Expandir exige equipe, método documentado, sustentabilidade
            e avaliação. Os referenciais internacionais do NEXUS Mundo
            contribuem para uma cultura de direitos humanos, uso legítimo de
            fontes e proteção de pessoas; não constituem um serviço
            investigativo oferecido neste portal.
          </p>
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
