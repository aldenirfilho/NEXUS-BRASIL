import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/components/site-shell';
export const metadata: Metadata = {
  title: {
    default: 'NEXUS Brasil · Pessoas, ideias e soluções',
    template: '%s · NEXUS Brasil',
  },
  description:
    'Um convite para voltar a participar. Conectamos pessoas, conhecimento e soluções com responsabilidade. De Sobral, Ceará, para o Brasil.',
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
