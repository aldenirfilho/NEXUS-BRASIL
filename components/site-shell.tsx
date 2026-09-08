'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pathTo, contact } from '@/lib/site';
const links = [
  ['O NEXUS', '/sobre/'],
  ['Nosso método', '/metodo/'],
  ['Sobral em foco', '/sobral/'],
  ['Propostas', '/propostas/'],
  ['Transparência', '/transparencia/'],
];
export function Brand() {
  return (
    <a href={pathTo('/')} className="brand" aria-label="NEXUS Brasil, início">
      <span className="brand-symbol" aria-hidden="true">
        N<span>↗</span>
      </span>
      <span>
        NEXUS<small>BRASIL</small>
      </span>
    </a>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav
          aria-label="Navegação principal"
          className={open ? 'navigation open' : 'navigation'}
        >
          {links.map(([label, url]) => (
            <a href={pathTo(url)} key={url} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button compact" href={pathTo('/participar/')}>
            Faça parte <ArrowUpRight size={16} />
          </a>
        </nav>
        <Button
          variant="ghost"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Brand />
            <p>
              Conhecimento que conecta.
              <br />
              Participação que transforma.
            </p>
            <span className="tiny">SOBRAL · CEARÁ · BRASIL</span>
          </div>
          <div>
            <h3>Conheça</h3>
            <a href={pathTo('/sobre/')}>Identidade e princípios</a>
            <a href={pathTo('/metodo/')}>Método NEXUS</a>
            <a href={pathTo('/biblioteca/')}>Biblioteca institucional</a>
          </div>
          <div>
            <h3>Construa com a gente</h3>
            <a href={pathTo('/propostas/')}>Laboratório de propostas</a>
            <a href={pathTo('/ferramentas/')}>Canvas e ferramentas</a>
            <a href={pathTo('/participar/')}>Participação e admissão</a>
          </div>
          <div>
            <h3>Diálogo aberto</h3>
            <a href={`mailto:${contact}`}>
              {contact} <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/aldenirfilho/NEXUS-BRASIL"
              target="_blank"
              rel="noreferrer"
            >
              Código do projeto <ArrowUpRight size={14} />
            </a>
            <a href={pathTo('/privacidade/')}>Privacidade e uso responsável</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NEXUS Brasil. Iniciativa cívica em construção.</span>
          <span>Pluralismo. Evidências. Serviço.</span>
        </div>
      </div>
    </footer>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro wrap">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <div className="lead">{children}</div>
    </div>
  );
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function JoinBand() {
  return (
    <section className="join-band wrap">
      <div>
        <span className="eyebrow">O PRÓXIMO PASSO É COLETIVO</span>
        <h2>
          Seu conhecimento pode
          <br />
          fazer parte da mudança.
        </h2>
        <p>Comece com curiosidade. Encontre a sua forma de contribuir.</p>
      </div>
      <a className="button yellow" href={pathTo('/participar/')}>
        Quero participar <MoveUpRight size={20} />
      </a>
    </section>
  );
}
