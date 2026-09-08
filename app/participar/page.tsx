import { PageIntro, SectionHeading } from '@/components/site-shell';
import { pathTo, contact } from '@/lib/site';
import { ArrowUpRight, BookOpen, Users, Lightbulb } from 'lucide-react';
export const metadata = { title: 'Faça parte' };
const flow = [
  [
    'Indicação ou interesse',
    'Conheça os princípios e manifeste seu interesse de forma voluntária.',
  ],
  [
    'Autoavaliação',
    'Reflita sobre os valores do grupo. Respeite três meses entre avaliações concluídas.',
  ],
  [
    'Validação humana',
    'Converse sobre exemplos reais, contexto, pontos fortes e aspectos a desenvolver.',
  ],
  [
    'Integração',
    'Participe de uma tarefa de baixo risco, com acompanhamento e feedback.',
  ],
  [
    'Escolha de contribuição',
    'Escolha uma área de interesse e construa responsabilidades junto à equipe.',
  ],
];
export default function Participar() {
  return (
    <>
      <PageIntro
        label="CADA CONTRIBUIÇÃO IMPORTA"
        title="Há mais de um jeito de fazer parte."
      >
        Você pode começar conhecendo uma proposta, oferecendo uma habilidade ou
        participando de uma conversa. Curiosidade e disposição para aprender já
        são um primeiro passo.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="three-col">
          {[
            {
              icon: BookOpen,
              t: 'Estudar e compartilhar',
              d: 'Ajude a encontrar fontes, contextualizar dados e traduzir conhecimento para mais pessoas.',
            },
            {
              icon: Lightbulb,
              t: 'Propor e construir',
              d: 'Contribua com ideias, desenho de projetos, organização, tecnologia ou execução.',
            },
            {
              icon: Users,
              t: 'Escutar e conectar',
              d: 'Aproxime experiências, pessoas e necessidades. Ajude a construir diálogos respeitosos.',
            },
          ].map(({ icon: Icon, t, d }) => (
            <article className="panel" key={t}>
              <Icon size={27} />
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <section className="section">
          <SectionHeading
            label="INTEGRAÇÃO AO GRUPO"
            title="Um caminho com tempo para conhecer."
            description="Novos integrantes não são adicionados diretamente. Indicações passam pelo processo comum, com atenção à privacidade e à pessoa."
          />
          <div className="prose">
            {flow.map(([t, d], i) => (
              <div className="list-line" key={t}>
                <span className="number">0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <a className="button" href={pathTo('/avaliacao/')}>
              Fazer a autoavaliação <ArrowUpRight size={17} />
            </a>
            <a
              className="button outline"
              href={`mailto:${contact}?subject=${encodeURIComponent('Quero contribuir com o NEXUS Brasil')}`}
            >
              Conversar sobre participação
            </a>
          </div>
          <div className="notice">
            <strong>
              O teste não distribui cargos nem determina o seu valor.
            </strong>
            A escolha de área é voluntária e construída com base em interesse,
            experiência e possibilidade de desenvolvimento. Resultados são
            privados. Necessidades de acessibilidade e circunstâncias pessoais
            devem ser consideradas na validação humana.
          </div>
        </section>
        <div className="two-col">
          <div className="panel">
            <h3>Três meses para desenvolver</h3>
            <p>
              A carência vale para todas as avaliações concluídas, inclusive as
              que atingem o corte. Uma nova aplicação não deve ser antecipada
              para aprender o padrão de respostas esperado. O histórico anterior
              precisa ser conferido pela coordenação.
            </p>
          </div>
          <div className="panel">
            <h3>Autonomia com responsabilidade</h3>
            <p>
              Administrar um canal de conversa não concede automaticamente
              função institucional ou acesso a dados privados. Indicações seguem
              as mesmas etapas; responsabilidades e permissões devem ser
              registradas pela governança.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
