import { PageIntro, SectionHeading } from '@/components/site-shell';
import { pathTo, contact, updated } from '@/lib/site';
export const metadata = { title: 'Transparência e governança' };
const governance = [
  [
    'Conselho de Direção',
    'Definir estratégia e prioridades com decisões colegiadas e registradas.',
  ],
  [
    'Coordenação Executiva',
    'Organizar cronogramas, recursos e acompanhamento das entregas.',
  ],
  [
    'Núcleos Temáticos',
    'Reunir pesquisa, projetos e formação por área de atuação.',
  ],
  [
    'Comitê de Integridade',
    'Revisar conflitos, proteção de dados e conduta com proporcionalidade.',
  ],
  [
    'Secretaria de Projetos',
    'Cuidar de documentos, reuniões, versões e indicadores.',
  ],
  [
    'Conselho Consultivo',
    'Ampliar a diversidade de perspectivas e a revisão especializada.',
  ],
];
export default function Transparencia() {
  return (
    <>
      <PageIntro
        label="GOVERNANÇA E PRESTAÇÃO DE CONTAS"
        title="Confiança se constrói à vista de todos."
      >
        Princípios claros, responsabilidades identificáveis e informação que
        pode ser conferida. Estes são os compromissos que orientam o NEXUS.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="notice">
          <strong>Estágio atual: organização e propostas preliminares.</strong>O
          site apresenta a base institucional, um catálogo de ideias e
          ferramentas de participação. Não há nesta publicação comprovação de
          pilotos executados, impacto mensurado, cargos preenchidos, parcerias
          formalizadas ou contas auditadas. Atualização: {updated}.
        </div>
        <section className="section">
          <SectionHeading
            label="ESTRUTURA PROPOSTA"
            title="Funções claras. Decisões compartilhadas."
            description="Modelo previsto na ementa. A composição nominal será publicada somente após confirmação, consentimento e registro das responsabilidades."
          />
          <div className="three-col">
            {governance.map(([t, d]) => (
              <article className="panel" key={t}>
                <span className="tag">Estrutura prevista</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="prose">
          <h2>Compromissos de governança</h2>
          <ul>
            <li>
              Registrar decisões, critérios, responsáveis e datas de revisão.
            </li>
            <li>
              Declarar conflitos de interesse antes de deliberações relevantes.
            </li>
            <li>
              Distribuir responsabilidades e prever substitutos e sucessão.
            </li>
            <li>
              Separar execução, aprovação financeira e revisão sempre que
              viável.
            </li>
            <li>
              Oferecer orientação, direito de resposta e revisão proporcional em
              situações de conduta.
            </li>
            <li>
              Proteger dados por necessidade de acesso e finalidade definida.
            </li>
          </ul>
          <h2>Recursos e gestão financeira</h2>
          <p>
            O site não recebe pagamentos nem solicita doações. Não há
            demonstrativo financeiro validado para publicação nesta versão. Isso
            significa ausência de informação publicada, não saldo zero nem
            ausência de movimentação.
          </p>
          <p>
            Quando houver atividade financeira institucional, o padrão previsto
            é registrar origem e destino de recursos, orçamento por projeto,
            critérios de aprovação, conflitos e prestação de contas periódica,
            separando recursos pessoais e institucionais.
          </p>
          <h2>O que acompanharemos</h2>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Indicadores previstos</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Entregas',
                  'Projetos com responsável, prazo, status e justificativa de mudanças.',
                ],
                [
                  'Impacto',
                  'Benefício observado, alcance, custo e efeitos não previstos.',
                ],
                [
                  'Aprendizado',
                  'Hipóteses testadas, correções e ciclos documentados.',
                ],
                [
                  'Pessoas',
                  'Participação, formação e feedback sem exposição individual.',
                ],
                [
                  'Integridade',
                  'Conflitos e incidentes tratados, com privacidade.',
                ],
                [
                  'Finanças',
                  'Orçamento, execução e origem de recursos verificados.',
                ],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                  <td>Coleta institucional a estruturar</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose">
          <h2>Publicação responsável e correções</h2>
          <p>
            Um dado público precisa de fonte direta, data-base e contexto.
            Propostas, hipóteses e fatos devem aparecer com seu respectivo
            status. Relatos privados não são publicados. O NEXUS não apresenta
            acusações ou conclusões sobre pessoas a partir de associações ou
            informações não verificadas.
          </p>
          <p>
            Encontrou uma informação que merece revisão? Envie a página, o
            trecho, a fonte pública e a correção sugerida. Evite anexar dados
            pessoais, documentos clínicos ou informações de terceiros.
          </p>
          <a
            className="button"
            href={`mailto:${contact}?subject=${encodeURIComponent('NEXUS — sugestão de correção pública')}`}
          >
            Preparar uma sugestão de correção →
          </a>
          <h2>Histórico público desta versão</h2>
          <p>
            <strong>08/09/2026 · Versão 4.0:</strong> novo portal no repositório
            NEXUS-BRASIL, catálogo anterior preservado, fichas locais para
            estudo, fontes oficiais de Sobral, instrumentos institucionais e
            nova interface da autoavaliação. Classificações anteriores de
            evidência permanecem sujeitas à revisão antes de reapresentação como
            análises verificadas.
          </p>
          <a className="text-link" href={pathTo('/biblioteca/')}>
            Consultar documentos e metodologia →
          </a>
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
