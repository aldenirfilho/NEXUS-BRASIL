import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  assess,
  addThreeMonths,
  isLocked,
  latestActiveLock,
  normalizeIdentity,
  resultText,
} from '../lib/assessment.mjs';
const q = JSON.parse(
  fs.readFileSync(new URL('../lib/questions.json', import.meta.url)),
);
const max = Object.fromEntries(q.map((v) => [v.id, v.reverse ? 1 : 5]));
test('30 itens em seis dimensões e 150 máximo com consistência moderada', () => {
  assert.equal(q.length, 30);
  const r = assess(q, max, 400);
  assert.equal(r.total, 150);
  assert.equal(r.integrity.score, 64);
  assert.equal(r.integrity.level, 'Moderada');
  assert.equal(r.status, 'Pontuação compatível — validar');
  assert.ok(Object.values(r.scores).every((v) => v === 25));
  assert.equal('adjusted' in r, false);
});
test('tempo curto sinaliza, sem aprovação automática', () => {
  const r = assess(q, max, 60);
  assert.equal(r.integrity.score, 24);
  assert.match(r.status, /não utilizável/);
});
test('respostas incompletas e fora da escala são rejeitadas', () => {
  assert.throws(() => assess(q, {}, 300));
  assert.throws(() => assess(q, { ...max, 0: 6 }, 300));
  assert.throws(() => assess(q, { ...max, 0: NaN }, 300));
});
test('três meses de calendário preservam horário e corrigem fim de mês', () => {
  assert.equal(
    addThreeMonths('2026-09-07T15:20:30Z'),
    '2026-12-07T15:20:30.000Z',
  );
  assert.equal(
    addThreeMonths('2026-01-31T12:00:00Z'),
    '2026-04-30T12:00:00.000Z',
  );
  assert.equal(
    addThreeMonths('2026-11-30T12:00:00Z'),
    '2027-02-28T12:00:00.000Z',
  );
  assert.equal(
    addThreeMonths('2027-11-30T12:00:00Z'),
    '2028-02-29T12:00:00.000Z',
  );
  assert.throws(() => addThreeMonths('inválido'));
});
test('carência termina no instante exato; escolher o bloqueio mais longo', () => {
  const a = { eligibleAfter: '2026-12-07T15:20:30Z' },
    b = { eligibleAfter: '2026-12-08T15:20:30Z' };
  assert.ok(isLocked(a, Date.parse(a.eligibleAfter) - 1));
  assert.equal(isLocked(a, Date.parse(a.eligibleAfter)), false);
  assert.equal(latestActiveLock([a, b], Date.parse('2026-12-01')), b);
});
test('identificação normalizada e relatório sem respostas brutas', () => {
  assert.equal(normalizeIdentity('  ÁLICE   TESTE '), 'alice teste');
  const r = {
    ...assess(q, max, 400),
    name: 'Pessoa fictícia',
    email: 'teste@example.invalid',
    completedAt: '2026-09-08T12:00:00Z',
    eligibleAfter: '2026-12-08T12:00:00Z',
    id: 'TESTE-FICTICIO',
  };
  const text = resultText(r);
  assert.ok(text.includes('Registro local'));
  assert.ok(!text.includes(q[0].text));
  assert.ok(text.includes('não é') || text.includes('sem assinatura'));
});
test('limiar por dimensão evita recomendação apenas por total', () => {
  const a = { ...max };
  for (const v of q.filter((v) => v.dimension === 'disciplina')) a[v.id] = 3;
  const r = assess(q, a, 400);
  assert.equal(r.total, 140);
  assert.equal(r.scores.disciplina, 15);
  assert.match(r.status, /dimensões específicas/);
});
