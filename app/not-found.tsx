import { PageIntro } from '@/components/site-shell';
import { pathTo } from '@/lib/site';
export default function NotFound() {
  return (
    <>
      <PageIntro
        label="PÁGINA NÃO ENCONTRADA"
        title="Vamos encontrar o próximo caminho."
      >
        Este endereço não está disponível. Você pode voltar ao início ou
        conhecer as propostas.
      </PageIntro>
      <div className="wrap content-wrap actions">
        <a className="button" href={pathTo('/')}>
          Voltar ao início
        </a>
        <a className="button outline" href={pathTo('/propostas/')}>
          Ver propostas
        </a>
      </div>
    </>
  );
}
