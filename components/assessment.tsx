'use client';
import { useState, useRef, useEffect } from 'react';
import questions from '@/lib/questions.json';
import {
  DIMENSIONS,
  assess,
  addThreeMonths,
  normalizeIdentity,
  formatDate,
  resultText,
  latestActiveLock,
  VERSION,
} from '@/lib/assessment.mjs';
import type { RecordResult } from '@/lib/assessment.mjs';
import { downloadText } from '@/lib/download';
import { pathTo, contact } from '@/lib/site';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Mail,
  ShieldCheck,
} from 'lucide-react';
const prefix = 'nexus-v1.1-';
async function key(kind: string, v: string) {
  const bytes = new TextEncoder().encode(kind + ':' + normalizeIdentity(v));
  return (
    prefix +
    Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  );
}
function readRecord(k: string): RecordResult | null {
  const raw = localStorage.getItem(k);
  if (!raw) return null;
  const r = JSON.parse(raw);
  if (
    !r ||
    typeof r.id !== 'string' ||
    !Number.isFinite(Date.parse(r.eligibleAfter)) ||
    !r.integrity ||
    typeof r.integrity.score !== 'number'
  )
    throw new Error(
      'O registro local precisa ser conferido. Entre em contato com a coordenação.',
    );
  return r;
}
const actions: Record<string, string> = {
  coragem:
    'Prepare uma contribuição fundamentada para uma conversa e pratique discordar com respeito.',
  humildade:
    'Peça um feedback específico e registre uma ideia que mudou ao escutar outra pessoa.',
  resiliencia:
    'Após uma dificuldade, identifique o que está ao seu alcance e uma pequena ação possível.',
  disciplina:
    'Escolha um compromisso viável e utilize lembretes, apoio ou divisão de tarefas para cumpri-lo.',
  lealdade:
    'Revise um acordo, mantenha a confidencialidade legítima e comunique limites com clareza.',
  identidade:
    'Escolha uma pergunta sobre sua comunidade e percorra as primeiras etapas do método NEXUS.',
};
export function Assessment() {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [consent, setConsent] = useState(false),
    [priorDate, setPriorDate] = useState(''),
    [order, setOrder] = useState<number[]>([]),
    [answers, setAnswers] = useState<Record<number, number>>({}),
    [block, setBlock] = useState(0),
    [result, setResult] = useState<RecordResult | null>(null),
    [error, setError] = useState(''),
    [busy, setBusy] = useState(false),
    [saved, setSaved] = useState(false),
    [started, setStarted] = useState(false);
  const startedAt = useRef(0),
    submitting = useRef(false),
    keys = useRef<string[]>([]),
    heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (started) {
      heading.current?.focus();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [block, started, result]);
  useEffect(() => {
    if (!started || result) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [started, result]);
  async function start(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (busy || !consent) return;
    setBusy(true);
    try {
      if (priorDate) {
        const eligible = addThreeMonths(priorDate + 'T23:59:59-03:00');
        if (Date.parse(eligible) > Date.now())
          throw new Error(
            'A avaliação anterior deve ser respeitada. Por segurança, nova tentativa a partir de ' +
              formatDate(eligible) +
              '. Confirme o horário exato com a coordenação.',
          );
      }
      const ids = await Promise.all([key('name', name), key('email', email)]);
      const records = ids.map(readRecord).filter(Boolean) as RecordResult[];
      const locked = latestActiveLock(records);
      if (locked) {
        setResult(locked);
        setSaved(true);
        throw new Error(
          'Já existe uma avaliação em carência. Nova tentativa somente a partir de ' +
            formatDate(locked.eligibleAfter) +
            '. O resultado anterior está abaixo.',
        );
      }
      const testKey = prefix + 'storage-check';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
      keys.current = ids;
      const list = questions.map((q) => q.id);
      for (let i = list.length - 1; i > 0; i--) {
        const r = new Uint32Array(1);
        crypto.getRandomValues(r);
        const j = r[0] % (i + 1);
        [list[i], list[j]] = [list[j], list[i]];
      }
      setOrder(list);
      startedAt.current = performance.now();
      setStarted(true);
      setBlock(0);
      setAnswers({});
      setResult(null);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Não foi possível acessar o registro local. Confira as permissões do navegador.',
      );
    } finally {
      setBusy(false);
    }
  }
  function next() {
    if (order.slice(block * 5, block * 5 + 5).some((id) => !answers[id])) {
      setError('Responda às cinco afirmações deste bloco antes de continuar.');
      return;
    }
    setError('');
    setBlock((v) => v + 1);
  }
  async function finish() {
    if (submitting.current) return;
    submitting.current = true;
    setBusy(true);
    setError('');
    try {
      const complete = () => {
        const previous = latestActiveLock(
          keys.current.map(readRecord).filter(Boolean) as RecordResult[],
        );
        if (previous) {
          setResult(previous);
          setSaved(true);
          setAnswers({});
          setError(
            'Uma avaliação já foi concluída neste navegador. O registro anterior foi preservado.',
          );
          return;
        }
        const scored = assess(
          questions,
          answers,
          (performance.now() - startedAt.current) / 1000,
        );
        const completedAt = new Date().toISOString();
        const record: RecordResult = {
          ...scored,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          completedAt,
          eligibleAfter: addThreeMonths(completedAt),
          id: 'NEXUS-' + crypto.randomUUID().toUpperCase(),
        };
        let stored = true;
        try {
          for (const k of keys.current)
            localStorage.setItem(k, JSON.stringify(record));
        } catch {
          stored = false;
          setError(
            'O resultado foi calculado, mas o armazenamento local falhou. Baixe o relatório e solicite o registro à coordenação. Não foi confirmado nenhum registro central.',
          );
        }
        setSaved(stored);
        setResult(record);
        setAnswers({});
        setOrder([]);
      };
      if (navigator.locks)
        await navigator.locks.request('nexus-assessment-completion', complete);
      else complete();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Não foi possível concluir.');
    } finally {
      setBusy(false);
      submitting.current = false;
    }
  }
  if (result) {
    const lows = Object.entries(result.scores)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 2);
    return (
      <div className="quiz-shell">
        {error && (
          <div className="notice amber" role="alert">
            {error}
          </div>
        )}
        <div className="result-hero">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            SEU RELATÓRIO · SOMENTE NESTE NAVEGADOR
          </span>
          <h2 ref={heading} tabIndex={-1}>
            {result.status}
          </h2>
          <div className="score">
            {result.total}
            <small> / 150</small>
          </div>
          <p>Alinhamento declarado com os valores do grupo.</p>
        </div>
        <div className="notice">
          <strong>O resultado é um ponto de partida para uma conversa.</strong>
          Não é diagnóstico, prova de honestidade ou medida do seu valor.
          Fatores pessoais, acessibilidade e contexto podem influenciar
          respostas e duração. Nenhuma entrada é automática.
        </div>
        <div className="two-col">
          <div className="panel">
            <span className="eyebrow">CONSISTÊNCIA EXPLORATÓRIA</span>
            <h3>
              {result.integrity.score}/100 · {result.integrity.level}
            </h3>
            <p>
              Indicador chamado “integridade” na versão anterior. É uma regra
              heurística, sem validação psicométrica.
            </p>
            {result.integrity.flags.map((f) => (
              <p className="count" key={f}>
                • {f}
              </p>
            ))}
          </div>
          <div className="panel">
            <span className="eyebrow">NOVA AVALIAÇÃO PERMITIDA</span>
            <h3>{formatDate(result.eligibleAfter)}</h3>
            <p>
              Horário de Fortaleza. Carência de três meses para todos os
              resultados.
            </p>
          </div>
        </div>
        <div className="result-bars">
          {Object.entries(result.scores).map(([k, v]) => (
            <div className="result-bar" key={k}>
              <div>
                <span>{DIMENSIONS[k]}</span>
                <strong>{v}/25</strong>
              </div>
              <span>
                <i style={{ width: `${(v / 25) * 100}%` }} />
              </span>
            </div>
          ))}
        </div>
        <h3>Duas práticas para desenvolver</h3>
        <div className="two-col spacer">
          {lows.map(([k]) => (
            <div className="panel" key={k}>
              <h3>{DIMENSIONS[k]}</h3>
              <p>{actions[k]}</p>
            </div>
          ))}
        </div>
        <div className="notice amber">
          <strong>
            {saved
              ? 'Resultado salvo neste navegador.'
              : 'Armazenamento local não confirmado.'}
          </strong>
          Não existe registro central automático neste site. Para consideração
          no processo de ingresso, a coordenação precisa conferir o histórico,
          registrar o resultado e realizar a validação humana. O código
          identifica o relatório; não é uma assinatura digital.
        </div>
        <p className="count">
          {result.name} · Conclusão: {formatDate(result.completedAt)}
        </p>
        <p className="result-code">{result.id}</p>
        <div className="actions no-print">
          <Button
            className="button"
            onClick={() => downloadText(`${result.id}.txt`, resultText(result))}
          >
            <Download size={16} /> Baixar relatório
          </Button>
          <a
            className="button outline"
            href={`mailto:${contact}?subject=${encodeURIComponent('NEXUS — validação ' + result.id)}&body=${encodeURIComponent(resultText(result))}`}
          >
            <Mail size={16} /> Preparar e-mail
          </a>
          <Button variant="ghost" onClick={() => window.print()}>
            Imprimir
          </Button>
        </div>
        <p className="count">
          O e-mail será aberto para você revisar e enviar. Nenhuma mensagem é
          enviada automaticamente.
        </p>
      </div>
    );
  }
  if (!started)
    return (
      <div className="quiz-shell">
        <div className="notice">
          <strong>Antes de começar</strong>São 30 afirmações, apresentadas em
          seis blocos embaralhados. Responda considerando comportamentos reais.
          Você pode voltar a blocos anteriores. Não há limite de tempo; a
          duração é registrada como sinal exploratório, nunca como diagnóstico.
        </div>
        <form onSubmit={start} className="panel">
          <div className="form-grid">
            <label className="field">
              Nome
              <Input
                className="field-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={3}
                maxLength={120}
                autoComplete="name"
              />
            </label>
            <label className="field">
              E-mail
              <Input
                className="field-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={150}
                autoComplete="email"
              />
            </label>
            <label className="field full">
              Se já concluiu uma avaliação NEXUS, informe a data
              <Input
                className="field-input"
                type="date"
                value={priorDate}
                onChange={(e) => setPriorDate(e.target.value)}
              />
              <small>
                Inclui avaliações no site anterior ou em outro dispositivo. O
                histórico deve ser confirmado pela coordenação.
              </small>
            </label>
          </div>
          <label className="check-row">
            <Checkbox
              checked={consent}
              onCheckedChange={(v) => setConsent(v)}
            />
            <span>
              Li a{' '}
              <a className="source-link" href={pathTo('/privacidade/')}>
                política de privacidade
              </a>{' '}
              e concordo com o armazenamento local de nome, e-mail, resultado e
              datas para controle de carência. Entendo que esta autoavaliação
              não foi validada psicometricamente e que a próxima tentativa só
              será válida após três meses.
            </span>
          </label>
          {error && (
            <div className="notice amber" role="alert">
              {error}
            </div>
          )}
          <Button
            type="submit"
            className="button below"
            disabled={!consent || busy}
          >
            {busy ? 'Conferindo…' : 'Iniciar autoavaliação'}{' '}
            <ArrowRight size={17} />
          </Button>
        </form>
        <details>
          <summary>Como os dados são tratados?</summary>
          <div>
            Somente o relatório final fica neste navegador. As respostas ficam
            temporariamente na memória da página e são descartadas ao concluir
            ou fechar. Nenhum resultado é enviado automaticamente. Evite
            dispositivos compartilhados; mantenha sua cópia privada.
          </div>
        </details>
        <details>
          <summary>Como o resultado é calculado?</summary>
          <div>
            Seis dimensões de cinco itens, pontuados de 1 a 5, com inversão de
            itens. A regra exploratória considera divergências em pares, mais de
            24 respostas máximas e duração inferior a 180 segundos. A pontuação
            total e a menor dimensão orientam o encaminhamento.{' '}
            <a
              className="source-link"
              href={pathTo('/biblioteca/#metodologia')}
            >
              Consulte a metodologia completa.
            </a>
          </div>
        </details>
      </div>
    );
  const current = order.slice(block * 5, block * 5 + 5);
  const count = Object.keys(answers).length;
  return (
    <div className="quiz-shell">
      <span className="eyebrow">
        BLOCO {String.fromCharCode(65 + block)} · {block + 1} DE 6
      </span>
      <h2 ref={heading} tabIndex={-1} style={{ fontSize: 36, marginTop: 12 }}>
        Sobre como você costuma agir.
      </h2>
      <p className="count" role="status">
        {count} de 30 respondidas. Responda com liberdade e honestidade.
      </p>
      <div
        className="progressbar"
        role="progressbar"
        aria-label="Afirmações respondidas"
        aria-valuemin={0}
        aria-valuemax={30}
        aria-valuenow={count}
      >
        <span style={{ width: `${(count / 30) * 100}%` }} />
      </div>
      {current.map((id, i) => {
        const q = questions[id];
        return (
          <fieldset className="quiz-question" key={id}>
            <legend>
              {block * 5 + i + 1}. {q.text}
            </legend>
            <RadioGroup
              value={answers[id] || null}
              onValueChange={(v) =>
                setAnswers((a) => ({ ...a, [id]: Number(v) }))
              }
              aria-label={q.text}
            >
              {[
                'Discordo totalmente',
                'Discordo em parte',
                'Nem concordo, nem discordo',
                'Concordo em parte',
                'Concordo totalmente',
              ].map((label, n) => (
                <label className="quiz-option" key={n}>
                  <RadioGroupItem value={n + 1} />
                  <span>
                    {n + 1} · {label}
                  </span>
                </label>
              ))}
            </RadioGroup>
          </fieldset>
        );
      })}
      {error && (
        <div role="alert" className="notice amber">
          {error}
        </div>
      )}
      <div className="quiz-controls">
        <Button
          variant="outline"
          className="button outline"
          disabled={block === 0 || busy}
          onClick={() => {
            setError('');
            setBlock((v) => v - 1);
          }}
        >
          <ArrowLeft size={16} /> Voltar
        </Button>
        {block < 5 ? (
          <Button className="button" onClick={next}>
            Próximo bloco <ArrowRight size={16} />
          </Button>
        ) : (
          <Button
            className="button"
            disabled={busy || count < 30}
            onClick={finish}
          >
            {busy ? 'Concluindo…' : 'Concluir e gerar relatório'}{' '}
            <ShieldCheck size={17} />
          </Button>
        )}
      </div>
    </div>
  );
}
