import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Users,
  Sprout,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  ShieldCheck,
  MoveUpRight,
} from 'lucide-react';
import { pathTo, steps } from '@/lib/site';
import { JoinBand, SectionHeading } from '@/components/site-shell';
const focus = [
  {
    icon: BriefcaseBusiness,
    title: 'Trabalho e renda',
    desc: 'Conectar formação, empreendedorismo e oportunidades.',
    key: 'economia',
  },
  {
    icon: MapPin,
    title: 'Cidade e mobilidade',
    desc: 'Pensar ruas, acessibilidade, drenagem e espaços de encontro.',
    key: 'cidade',
  },
  {
    icon: HeartPulse,
    title: 'Saúde e cuidado',
    desc: 'Estudar acesso, continuidade do cuidado e integração regional.',
    key: 'saude',
  },
  {
    icon: GraduationCap,
    title: 'Educação e futuro',
    desc: 'Transformar aprendizagem em autonomia e novas possibilidades.',
    key: 'educacao',
  },
];
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> UM CONVITE PARA VOLTAR A PARTICIPAR
          </span>
          <h1>
            O Brasil que
            <br />
            queremos começa
            <br />
            <em>com a gente.</em>
          </h1>
          <p>
            Conectamos pessoas, conhecimento e ação para construir soluções que
            melhorem a vida em sociedade. Com diálogo, evidências e disposição
            para servir.
          </p>
          <div className="actions">
            <a href={pathTo('/participar/')} className="button">
              Encontre seu lugar <ArrowUpRight size={18} />
            </a>
            <a href={pathTo('/sobre/')} className="text-link">
              Conheça o NEXUS <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-foot">
            <span className="tiny">PESSOAS · IDEIAS · SOLUÇÕES</span>
            <span className="tiny">
              <MapPin size={13} /> De Sobral para o Brasil
            </span>
          </div>
        </div>
        <div className="hero-art">
          <img
            className="hero-image"
            src={pathTo('/hero-brasil.webp')}
            alt="Ilustração gerada por IA de uma paisagem imaginária do interior nordestino"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="art-caption">
            PAISAGEM ILUSTRATIVA · GERADA POR IA
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <Sprout size={24} />
            </span>
            <div>
              <span>O futuro é uma construção coletiva.</span>
              <small>E toda transformação começa perto.</small>
            </div>
            <MoveUpRight size={23} />
          </div>
        </div>
      </section>
      <div className="belief-strip">
        <div className="wrap">
          <span>
            <BookOpen size={18} /> Conhecimento para compreender
          </span>
          <span>
            <Users size={18} /> Diálogo para conectar
          </span>
          <span>
            <Sprout size={18} /> Ação para transformar
          </span>
        </div>
      </div>
      <section className="section wrap">
        <div className="intro-grid">
          <span className="eyebrow">POR QUE EXISTIMOS</span>
          <div>
            <h2>
              A vida pública também
              <br />
              precisa do seu olhar.
            </h2>
            <p className="large-copy">
              Uma rua melhor, uma oportunidade de trabalho, um serviço que
              funciona. A política está nas decisões que atravessam o nosso dia.
            </p>
            <p>
              O NEXUS Brasil nasce para aproximar as pessoas dessas decisões.
              Somos uma iniciativa cívica, profissional e educacional, aberta ao
              pensamento plural e à participação democrática. Reunimos talentos
              para estudar problemas, escutar a sociedade e transformar boas
              ideias em propostas responsáveis.
            </p>
            <a className="text-link" href={pathTo('/sobre/')}>
              Leia nossa carta de princípios <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <SectionHeading
            label="NOSSO JEITO DE CONSTRUIR"
            title="Boas intenções. Método. Ação."
            description="Um ciclo simples para transformar conhecimento em benefício público — e aprender em cada etapa."
          />
          <div className="method-track">
            {steps.map(([name], i) => (
              <a href={pathTo(`/metodo/#etapa-${i + 1}`)} key={name}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{name}</strong>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
          <div className="section-foot">
            <span>
              Escutar, medir e corrigir fazem parte de qualquer solução.
            </span>
            <a href={pathTo('/metodo/')} className="text-link">
              Explore o método <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          label="SOBRAL É O NOSSO PONTO DE PARTIDA"
          title="Começar perto. Pensar adiante."
          description="Frentes iniciais de estudo para conectar as necessidades locais à capacidade de construir soluções."
        />
        <div className="focus-grid">
          {focus.map(({ icon: Icon, title, desc, key }, i) => (
            <a
              className="focus-card"
              href={pathTo(`/propostas/?eixo=${key}`)}
              key={key}
            >
              <div>
                <Icon size={25} />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="card-link">
                Conheça as propostas <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
        <a className="text-link below" href={pathTo('/sobral/')}>
          Conheça Sobral em foco <ArrowRight size={17} />
        </a>
      </section>
      <section className="principle-block">
        <div className="wrap principle-grid">
          <div>
            <span className="eyebrow">A CONFIANÇA SE CONSTRÓI</span>
            <h2>
              Coragem para propor.
              <br />
              Humildade para ouvir.
              <br />
              <em>Responsabilidade para agir.</em>
            </h2>
          </div>
          <div>
            <ShieldCheck size={33} />
            <p>
              Nosso compromisso é com as pessoas e com o que pode ser
              verificado. Cada dado precisa de contexto. Cada proposta precisa
              de limites claros. Cada decisão precisa de responsabilidade.
            </p>
            <a className="text-link light" href={pathTo('/transparencia/')}>
              Veja nossos compromissos <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <JoinBand />
    </>
  );
}
