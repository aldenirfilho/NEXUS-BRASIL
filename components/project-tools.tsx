'use client';
import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { templates } from '@/lib/templates';
import { downloadText } from '@/lib/download';
import { Download } from 'lucide-react';
const fields = [
  ['titulo', 'Nome do projeto'],
  ['problema', 'Problema ou pergunta'],
  ['publico', 'Público beneficiado'],
  ['evidencia', 'Fonte pública, data e evidência'],
  ['existente', 'O que já existe'],
  ['lacuna', 'Lacuna a verificar'],
  ['objetivo', 'Objetivo e meta'],
  ['alternativas', 'Alternativas consideradas'],
  ['solucao', 'Proposta e piloto'],
  ['recursos', 'Recursos e custo estimado'],
  ['responsavel', 'Responsável e competência'],
  ['riscos', 'Riscos e proteção de dados'],
  ['indicador', 'Indicador e linha de base'],
  ['criterio', 'Continuar, corrigir, pausar ou encerrar'],
  ['prazo', 'Prazo e data de revisão'],
  ['contas', 'Como prestar contas'],
];
const docs = [
  [
    'pauta',
    'Pauta de reunião',
    'Conduza conversas com objetivo, evidências e decisões registradas.',
  ],
  [
    'raci',
    'Matriz RACI',
    'Defina quem executa, aprova, é consultado e é informado.',
  ],
  [
    'scorecard',
    'Desenvolvimento de membros',
    'Converse sobre comportamento, contexto, apoios e uma próxima ação.',
  ],
  [
    'adesao',
    'Termo de adesão',
    'Minuta para leitura, aceite voluntário e validação institucional.',
  ],
] as const;
export function ProjectTools() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');
  const hasContent = Object.values(values).some((v) => v.trim());
  useEffect(() => {
    if (!hasContent) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [hasContent]);
  function download() {
    if (!values.titulo?.trim()) {
      setStatus('Preencha o nome do projeto para identificar o arquivo.');
      return;
    }
    const text =
      '# Canvas NEXUS de projeto\n\nRascunho local — não submetido, aprovado ou publicado.\nGerado em ' +
      new Date().toLocaleDateString('pt-BR') +
      '\n\n' +
      fields
        .map(
          ([id, label]) =>
            '## ' + label + '\n' + (values[id]?.trim() || 'A definir') + '\n',
        )
        .join('\n');
    downloadText('canvas-nexus.md', text, 'text/markdown;charset=utf-8');
    setStatus(
      'Arquivo preparado para download no seu dispositivo. Nada foi enviado ou publicado.',
    );
  }
  return (
    <Tabs defaultValue="canvas">
      <TabsList className="tabs-list">
        <TabsTrigger value="canvas">Canvas de projeto</TabsTrigger>
        <TabsTrigger value="modelos">Modelos institucionais</TabsTrigger>
        <TabsTrigger value="matriz">Impacto × esforço</TabsTrigger>
      </TabsList>
      <TabsContent value="canvas">
        <div className="notice">
          <strong>Estruture uma ideia, um campo por vez.</strong>O rascunho fica
          apenas na memória desta página. Baixe para guardar antes de fechar.
          Não inclua dados sigilosos ou identificáveis de terceiros.
        </div>
        <div className="form-grid">
          {fields.map(([id, label]) => (
            <label className="field" key={id}>
              {label}
              <Textarea
                className="field-input"
                value={values[id] || ''}
                onChange={(e) => {
                  setValues((v) => ({ ...v, [id]: e.target.value }));
                  setStatus('');
                }}
                maxLength={4000}
                placeholder={
                  id === 'evidencia'
                    ? 'URL pública + data-base + contexto'
                    : id === 'recursos'
                      ? 'Se desconhecido, registre “a estimar”'
                      : 'Descreva de forma clara e objetiva'
                }
              />
            </label>
          ))}
        </div>
        <div className="actions">
          <Button className="button" onClick={download}>
            <Download size={17} /> Baixar canvas editável
          </Button>
          <Button
            variant="outline"
            className="button outline"
            onClick={() => window.print()}
          >
            Imprimir
          </Button>
        </div>
        <p role="status" className="count">
          {status}
        </p>
      </TabsContent>
      <TabsContent value="modelos">
        <div className="two-col">
          {docs.map(([id, title, desc]) => (
            <article className="panel" key={id}>
              <span className="tag">Modelo editável · Markdown</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Button
                variant="outline"
                className="button outline below"
                onClick={() =>
                  downloadText(
                    `nexus-${id}.md`,
                    templates[id],
                    'text/markdown;charset=utf-8',
                  )
                }
              >
                Baixar modelo <Download size={16} />
              </Button>
            </article>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="matriz">
        <div className="two-col">
          {[
            [
              'Alto impacto · Baixo esforço',
              'Priorizar',
              'Começar pequeno, medir e documentar.',
            ],
            [
              'Alto impacto · Alto esforço',
              'Planejar',
              'Dividir em etapas, garantir equipe, recursos e governança.',
            ],
            [
              'Baixo impacto · Baixo esforço',
              'Avaliar oportunidade',
              'Considerar somente se não competir com prioridades.',
            ],
            [
              'Baixo impacto · Alto esforço',
              'Reformular',
              'Rever o desenho ou encerrar, salvo justificativa consistente.',
            ],
          ].map(([a, b, c]) => (
            <article className="panel" key={a}>
              <span className="tag">{a}</span>
              <h3>{b}</h3>
              <p>{c}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          Impacto e esforço são estimativas iniciais, não resultados medidos.
          Explique os critérios, as incertezas e as informações que poderiam
          mudar a prioridade.
        </div>
      </TabsContent>
    </Tabs>
  );
}
