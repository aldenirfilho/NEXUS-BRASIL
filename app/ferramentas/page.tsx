import { PageIntro } from '@/components/site-shell';
import { ProjectTools } from '@/components/project-tools';
export const metadata = { title: 'Canvas e ferramentas' };
export default function Ferramentas() {
  return (
    <>
      <PageIntro
        label="DA IDEIA AO PLANO"
        title="Ferramentas para construir juntos."
      >
        Organize um projeto, prepare uma reunião e distribua responsabilidades.
        Comece com um rascunho e avance com a equipe.
      </PageIntro>
      <div className="wrap content-wrap">
        <ProjectTools />
      </div>
    </>
  );
}

export const dynamic = 'force-static';
