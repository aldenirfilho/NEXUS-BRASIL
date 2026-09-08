import { PageIntro, SectionHeading } from '@/components/site-shell';
import { sourceLinks, pathTo, updated } from '@/lib/site';
import { ArrowUpRight } from 'lucide-react';
export const metadata = { title: 'Sobral em foco' };
const rows = [
  [
    'Trabalho e renda',
    'Como aproximar formação, empresas e oportunidades de trabalho?',
    'Mapear demandas de qualificação e serviços de apoio já existentes.',
  ],
  [
    'Cidade e mobilidade',
    'Como priorizar rotas acessíveis, drenagem e espaços públicos?',
    'Definir recorte territorial e levantar informações urbanas atualizadas.',
  ],
  [
    'Saúde regional',
    'Como apoiar o acesso e a continuidade do cuidado entre os serviços?',
    'Mapear competências e fluxos com fontes públicas, sem dados de pacientes.',
  ],
  [
    'Educação e inovação',
    'Como conectar a aprendizagem a novos projetos e oportunidades?',
    'Consultar resultados por rede, etapa e ano; ouvir estudantes e educadores.',
  ],
  [
    'Água e ambiente',
    'Como acompanhar infraestrutura e qualidade dos serviços?',
    'Consultar planos, contratos, cronogramas e indicadores com data-base.',
  ],
  [
    'Segurança e cidadania',
    'Como fortalecer prevenção, convivência e participação?',
    'Comparar séries e contextos; evitar atribuir causalidade a uma ação isolada.',
  ],
];
export default function Sobral() {
  return (
    <>
      <PageIntro
        label="OBSERVATÓRIO · TERRITÓRIO INICIAL"
        title="Conhecer Sobral. Construir possibilidades."
      >
        Um ponto de encontro entre dados públicos, perguntas relevantes e ideias
        de solução. Com fontes abertas e respeito ao contexto.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="stats-grid">
          {[
            ['203.023', 'habitantes', 'Censo Demográfico · 2022'],
            [
              '98,98%',
              'escolarização de 6 a 14 anos',
              'Censo Demográfico · 2022',
            ],
            [
              'R$ 32.454,10',
              'Produto Interno Bruto por habitante',
              'PIB per capita · 2023',
            ],
          ].map(([v, l, d]) => (
            <article className="stat" key={l}>
              <span className="eyebrow">SOBRAL · IBGE</span>
              <strong>{v}</strong>
              <span>{l}</span>
              <small>{d}</small>
              <a
                className="source-link"
                href={sourceLinks.ibge}
                target="_blank"
                rel="noreferrer"
              >
                Consultar dado e fonte <ArrowUpRight size={13} />
              </a>
            </article>
          ))}
        </div>
        <p className="count">
          Instituto Brasileiro de Geografia e Estatística (IBGE). Conferência:{' '}
          {updated}. Os anos de referência são distintos; os dados não
          representam uma medição em tempo real.
        </p>
        <div className="notice">
          <strong>Um número abre uma pergunta.</strong>Escolarização mede
          matrícula e não, por si só, qualidade da aprendizagem. PIB per capita
          é uma medida da produção econômica por habitante; não equivale à renda
          individual ou ao salário médio.
        </div>
        <section className="section">
          <SectionHeading
            label="AGENDA DE ESTUDO"
            title="Onde podemos contribuir?"
            description="As frentes abaixo são perguntas de pesquisa. Não representam diagnósticos concluídos, denúncias ou projetos em execução."
          />
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Frente</th>
                  <th>Pergunta orientadora</th>
                  <th>Próximo passo</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c) => (
                      <td key={c}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a className="button" href={pathTo('/propostas/')}>
            Explorar as propostas <ArrowUpRight size={18} />
          </a>
        </section>
        <SectionHeading
          label="FONTES PARA VOCÊ CONSULTAR"
          title="A informação pública, mais perto."
        />
        <div className="three-col">
          {[
            [
              'Retrato do município',
              'População, educação, economia e outras séries com suas referências.',
              sourceLinks.ibge,
              'IBGE',
            ],
            [
              'Orçamento e contratos',
              'Consultar receitas, despesas, contratos e obras no portal municipal.',
              sourceLinks.transparencia,
              'Prefeitura de Sobral',
            ],
            [
              'Dados para análise',
              'Bases abertas por tema, período e formato de download.',
              sourceLinks.dados,
              'Prefeitura de Sobral',
            ],
            [
              'Educação em contexto',
              'Resultados do Índice de Desenvolvimento da Educação Básica (Ideb).',
              sourceLinks.inep,
              'Inep',
            ],
            [
              'Atos e decisões oficiais',
              'Pesquisa de publicações no Diário Oficial do Município.',
              sourceLinks.diario,
              'Prefeitura de Sobral',
            ],
            [
              'Serviços ao cidadão',
              'Informações sobre serviços e formas de acesso.',
              sourceLinks.servicos,
              'Prefeitura de Sobral',
            ],
          ].map(([t, d, url, org]) => (
            <article className="panel" key={t}>
              <span className="tag">{org}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <a
                className="source-link below"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Abrir fonte oficial <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
        <div className="notice spacer">
          <strong>Como acompanharemos projetos públicos</strong>Cada ficha
          deverá distinguir anúncio, contratação, execução, conclusão
          documentada e resultado medido. Valores, prazos e responsáveis só
          serão publicados com documentos verificáveis. O painel de obras e
          projetos ainda está em preparação.
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
