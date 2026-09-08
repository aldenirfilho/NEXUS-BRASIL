import { PageIntro, SectionHeading, JoinBand } from '@/components/site-shell';
import { pathTo } from '@/lib/site';
import { ArrowUpRight, Compass, Sprout, Users } from 'lucide-react';
export const metadata = { title: 'O NEXUS' };
const values = [
  [
    'Coragem',
    'Assumir responsabilidade e discordar com respeito, sem confundir firmeza com imprudência.',
  ],
  [
    'Humildade',
    'Reconhecer limites, escutar outras perspectivas e mudar de opinião diante de melhores evidências.',
  ],
  [
    'Resiliência',
    'Aprender com os reveses, pedir apoio quando necessário e retomar a contribuição possível.',
  ],
  [
    'Disciplina',
    'Construir compromissos realistas, usar ferramentas de organização e comunicar dificuldades.',
  ],
  [
    'Lealdade',
    'Cuidar da confiança e da confidencialidade legítima, com compromisso com princípios.',
  ],
  [
    'Espírito público',
    'Cooperar, respeitar as diferenças e colocar o benefício coletivo no centro das decisões.',
  ],
];
export default function Sobre() {
  return (
    <>
      <PageIntro
        label="IDENTIDADE E PROPÓSITO"
        title="Conectar hoje. Transformar amanhã."
      >
        Uma rede de pessoas dispostas a compreender, colaborar e servir. A nossa
        construção começa em Sobral e se orienta pelo benefício público.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="two-col">
          <article className="panel">
            <Compass size={28} />
            <h3>Nossa missão</h3>
            <p>
              Transformar conhecimento, trabalho e valores em soluções práticas
              que melhorem a vida das pessoas, com sustentabilidade,
              transparência e respeito à dignidade humana.
            </p>
          </article>
          <article className="panel">
            <Sprout size={28} />
            <h3>Nossa visão</h3>
            <p>
              Construir uma rede capaz de produzir conhecimento, formar
              lideranças e desenvolver projetos que permaneçam úteis para além
              de seus fundadores.
            </p>
          </article>
        </div>
        <section className="section prose">
          <span className="eyebrow">MANIFESTO FUNDADOR</span>
          <h2>Participar é uma forma de cuidar.</h2>
          <p>
            O Brasil se constrói nas relações entre as pessoas, nos serviços que
            usamos e nas escolhas que fazemos juntos. Quando nos aproximamos da
            vida pública, ampliamos a possibilidade de compreender o que precisa
            mudar e de contribuir para essa mudança.
          </p>
          <p>
            O NEXUS Brasil nasce do desejo de conectar talentos, experiências e
            conhecimento. Queremos pessoas com liberdade para pensar, coragem
            para propor e humildade para aprender. O diálogo exige escuta; uma
            proposta exige trabalho; a confiança exige tempo e coerência.
          </p>
          <p>
            Começamos por Sobral e pela região Norte do Ceará. Vamos estudar
            problemas concretos, ouvir diferentes perspectivas e testar soluções
            proporcionais à nossa capacidade. Resultados, limites e correções
            precisam ser visíveis.
          </p>
          <p>
            Cada pessoa pode encontrar uma forma de contribuir. Pesquisa,
            comunicação, organização, execução, criatividade e trabalho
            comunitário têm lugar nessa construção. As responsabilidades devem
            combinar interesse, competência e desenvolvimento.
          </p>
          <p>
            Queremos deixar conhecimento compartilhado, pessoas mais preparadas
            e soluções que façam diferença. Mesmo quando uma ideia não funciona,
            a experiência pode ensinar. Nosso compromisso é aprender e seguir
            servindo.
          </p>
        </section>
        <SectionHeading
          label="VALORES EM COMPORTAMENTOS"
          title="O que sustenta a nossa atuação."
        />
        <div className="three-col">
          {values.map(([title, text], i) => (
            <article className="panel" key={title}>
              <span className="tiny">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="notice spacer">
          <strong>Liberdade de consciência e participação democrática</strong>O
          NEXUS é uma iniciativa cívica pluralista, sem vinculação partidária
          obrigatória. O site não solicita votos nem apresenta candidaturas. A
          participação pública deve respeitar a legalidade, a dignidade humana e
          a escolha democrática.
        </div>
        <div className="prose">
          <h2>Uma base institucional em construção</h2>
          <p>
            A ementa de 7 de setembro de 2026 orienta identidade, governança,
            formação e projetos. O site apresenta compromissos e modelos de
            organização; cargos ocupados, parcerias e aprovações formais só
            serão anunciados após confirmação.
          </p>
          <a className="text-link" href={pathTo('/biblioteca/')}>
            Consultar a ementa e os documentos <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <JoinBand />
    </>
  );
}

export const dynamic = 'force-static';
