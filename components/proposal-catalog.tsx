'use client';
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import proposals from '@/lib/proposals.json';
import { normalize, axes } from '@/lib/search';
import { pathTo } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpRight, Search } from 'lucide-react';
export function ProposalCatalog() {
  const [query, setQuery] = useState(''),
    [axis, setAxis] = useState('todos'),
    [territory, setTerritory] = useState('Todos');
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (axes.some((a) => a[0] === q.get('eixo'))) setAxis(q.get('eixo')!);
  }, []);
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (tool: unknown, options: unknown) => void;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const life = new AbortController();
    try {
      context.registerTool(
        {
          name: 'filtrar_propostas_nexus',
          title: 'Filtrar propostas NEXUS',
          description:
            'Atualiza os filtros visíveis do catálogo de propostas, sem enviar ou alterar registros.',
          inputSchema: {
            type: 'object',
            properties: {
              busca: { type: 'string' },
              eixo: { type: 'string', enum: axes.map((a) => a[0]) },
            },
            required: ['busca', 'eixo'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false },
          execute(input: unknown) {
            const v = input as { busca?: unknown; eixo?: unknown };
            if (
              typeof v?.busca !== 'string' ||
              v.busca.length > 200 ||
              !axes.some((a) => a[0] === v.eixo)
            )
              throw new Error('Filtros inválidos.');
            flushSync(() => {
              setQuery(v.busca as string);
              setAxis(v.eixo as string);
              setTerritory('Todos');
            });
            return {
              total: proposals.filter(
                (p) =>
                  (v.eixo === 'todos' || p.eixo === v.eixo) &&
                  normalize(
                    p.title + ' ' + p.summary + ' ' + p.territory,
                  ).includes(normalize(v.busca as string)),
              ).length,
            };
          },
        },
        { signal: life.signal },
      );
    } catch {}
    return () => life.abort();
  }, []);
  const filtered = proposals.filter(
    (p) =>
      (axis === 'todos' || p.eixo === axis) &&
      (territory === 'Todos' || p.territory === territory) &&
      normalize(p.title + ' ' + p.summary + ' ' + p.territory).includes(
        normalize(query),
      ),
  );
  return (
    <>
      <label className="field search-input">
        Pesquisar ideias
        <div style={{ position: 'relative' }}>
          <Input
            className="field-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busque por saúde, formação, mobilidade…"
            maxLength={200}
          />
        </div>
      </label>
      <div className="filter-row" aria-label="Filtrar por tema">
        {axes.map(([key, label]) => (
          <Button
            variant="ghost"
            className="filter"
            aria-pressed={axis === key}
            onClick={() => setAxis(key)}
            key={key}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="filter-row" aria-label="Filtrar por território">
        {['Todos', 'Sobral', 'Brasil'].map((t) => (
          <Button
            variant="ghost"
            className="filter"
            aria-pressed={territory === t}
            onClick={() => setTerritory(t)}
            key={t}
          >
            {t === 'Todos' ? 'Todos os territórios' : t}
          </Button>
        ))}
      </div>
      <p className="count" role="status">
        {filtered.length} de {proposals.length} propostas · Nenhum piloto ou
        impacto confirmado neste catálogo.
      </p>
      {filtered.length ? (
        <div className="three-col">
          {filtered.map((p) => (
            <article className="proposal-card" key={p.id} id={p.id}>
              <div>
                <span className="tag">{p.territory}</span>{' '}
                <span className="tag amber">{p.stage}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <details>
                <summary>Explorar a ficha completa</summary>
                <div>
                  <dl>
                    {[
                      ['Problema', p.problem],
                      ['O que existe', p.existing],
                      ['Lacuna', p.gap],
                      ['Proposta', p.proposal],
                      ['Custo', p.cost],
                      ['Responsável', p.owner],
                      ['Meta', p.target],
                      ['Indicador', p.indicator],
                      ['Riscos', p.risk],
                      ['Próximo passo', p.next],
                    ].map(([t, v]) => (
                      <div style={{ display: 'contents' }} key={t}>
                        <dt>{t}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {p.source ? (
                    <a
                      className="source-link below"
                      target="_blank"
                      rel="noreferrer"
                      href={p.source}
                    >
                      {p.sourceLabel} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <p className="count">
                      Sem evidência de eficácia publicada nesta ficha. A ideia
                      precisa de pesquisa e revisão antes de avançar.
                    </p>
                  )}
                  <p className="count">
                    Código: {p.id} · Versão editorial: 08/09/2026
                  </p>
                  <a className="text-link" href={pathTo('/ferramentas/')}>
                    Desenvolver no canvas →
                  </a>
                </div>
              </details>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty">
          <Search size={30} />
          <h3>Nenhuma proposta encontrada.</h3>
          <p>Tente outro termo ou remova os filtros.</p>
          <Button
            variant="outline"
            className="button outline below"
            onClick={() => {
              setQuery('');
              setAxis('todos');
              setTerritory('Todos');
            }}
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </>
  );
}
