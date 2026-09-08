import { PageIntro } from '@/components/site-shell';
import { ProposalCatalog } from '@/components/proposal-catalog';
import { pathTo } from '@/lib/site';
export const metadata = { title: 'Laboratório de propostas' };
export default function Propostas() {
  return (
    <>
      <PageIntro
        label="LABORATÓRIO DE PROPOSTAS"
        title="Ideias que merecem ser estudadas."
      >
        Explore 40 ideias da construção anterior do NEXUS e seis propostas
        iniciais de estudo para Sobral. Encontre um tema em que você pode
        contribuir.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="notice">
          <strong>Um catálogo de possibilidades</strong>As fichas são propostas
          para discussão, sem orçamento, equipe ou execução confirmados. Ideias
          anteriores com análise preliminar permanecem sujeitas à revisão das
          fontes. Só avançaremos para piloto com responsáveis, recursos, riscos
          e métricas definidos.
        </div>
        <ProposalCatalog />
        <div className="actions">
          <a
            className="text-link"
            href={pathTo('/propostas.json')}
            download="nexus-propostas.json"
          >
            Baixar catálogo em JSON ↓
          </a>
          <a className="text-link" href={pathTo('/ferramentas/')}>
            Estruturar uma nova ideia →
          </a>
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
