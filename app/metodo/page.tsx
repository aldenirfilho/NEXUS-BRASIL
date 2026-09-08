import { PageIntro, SectionHeading } from '@/components/site-shell';
import { pathTo, steps } from '@/lib/site';
export const metadata = { title: 'Método NEXUS' };
export default function Metodo() {
  return (
    <>
      <PageIntro
        label="DO CONHECIMENTO AO BENEFÍCIO PÚBLICO"
        title="Um método para fazer acontecer."
      >
        Uma proposta ganha força quando é estudada, escutada, testada e
        revisada. O método NEXUS organiza esse caminho.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="prose">
          {steps.map(([name, subtitle, body, output], i) => (
            <article className="list-line" id={`etapa-${i + 1}`} key={name}>
              <span className="number">0{i + 1}</span>
              <div>
                <h3>
                  {name} <span style={{ fontWeight: 400 }}>· {subtitle}</span>
                </h3>
                <p>{body}</p>
                <small>Entrega: {output}</small>
              </div>
            </article>
          ))}
        </div>
        <section className="section">
          <SectionHeading
            label="CONFIANÇA E CONTINUIDADE"
            title="O serviço vem antes da representação."
            description="A cadeia institucional também contempla conquistar confiança, representar, governar e deixar legado."
          />
          <div className="notice">
            Confiança deve ser merecida por entregas e coerência. Representar e
            governar dependem de legitimidade, processos democráticos e regras
            legais. O método não confere mandato nem autoridade pública a
            qualquer integrante.
          </div>
          <div className="two-col">
            <div className="panel">
              <h3>Antes de iniciar um piloto</h3>
              <ul className="plain-list">
                <li>Problema, público beneficiado e objetivo definidos.</li>
                <li>Fonte pública, contexto e limitações registrados.</li>
                <li>Alternativas, recursos e responsável confirmados.</li>
                <li>Riscos e condições para interromper documentados.</li>
                <li>Indicador de resultado e prazo de revisão acordados.</li>
              </ul>
            </div>
            <div className="panel">
              <h3>Para ampliar o que funciona</h3>
              <p>
                A expansão depende de um ciclo de avaliação documentado,
                capacidade de equipe, recursos e adaptação ao território. Uma
                experiência positiva isolada não garante o mesmo resultado em
                outro contexto.
              </p>
              <a className="text-link below" href={pathTo('/ferramentas/')}>
                Preencher um canvas de projeto →
              </a>
            </div>
          </div>
        </section>
        <SectionHeading
          label="PLANO DE IMPLANTAÇÃO"
          title="Doze meses de construção."
          description="Roteiro relativo ao início formal. As etapas abaixo são planejamento, sem confirmação de execução."
        />
        <div className="roadmap">
          {[
            [
              '1–2',
              'Fundação',
              'Organizar papéis, regras de dados, documentos e calendário.',
            ],
            [
              '3–4',
              'Formação e diagnóstico',
              'Ouvir a comunidade, mapear perguntas e selecionar pilotos.',
            ],
            [
              '5–6',
              'Primeiros pilotos',
              'Planejar 2–3 experiências, mediante equipe, recursos e revisão.',
            ],
            [
              '7–9',
              'Consolidação',
              'Corrigir, documentar e desenvolver parcerias e lideranças.',
            ],
            [
              '10–12',
              'Avaliar e planejar',
              'Prestar contas, revisar governança e definir o próximo ciclo.',
            ],
          ].map(([m, t, d]) => (
            <div key={m}>
              <span className="tiny">MESES {m}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
