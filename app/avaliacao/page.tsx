import { PageIntro } from '@/components/site-shell';
import { Assessment } from '@/components/assessment';
export const metadata = {
  title: 'Autoavaliação NEXUS',
  robots: { index: false, follow: true },
};
export default function Avaliacao() {
  return (
    <>
      <PageIntro
        label="PARTICIPAÇÃO VOLUNTÁRIA · VERSÃO 1.1"
        title="Conhecer suas forças. Desenvolver possibilidades."
      >
        Uma reflexão sobre os valores NEXUS para apoiar a conversa de
        integração. Toda decisão depende de avaliação humana, contexto e
        convivência.
      </PageIntro>
      <Assessment />
    </>
  );
}

export const dynamic = 'force-static';
