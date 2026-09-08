export const VERSION = '1.1.0';
export const DIMENSIONS = {
  coragem: 'Coragem',
  humildade: 'Humildade',
  resiliencia: 'Resiliência',
  disciplina: 'Disciplina',
  lealdade: 'Lealdade',
  identidade: 'Identidade NEXUS',
};
export function normalizeIdentity(v) {
  return String(v)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}
export function addThreeMonths(value) {
  const d = new Date(value);
  if (!Number.isFinite(d.getTime())) throw new Error('Data inválida');
  const day = d.getUTCDate();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + 3);
  const last = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0),
  ).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return d.toISOString();
}
export function assess(questions, answers, seconds) {
  if (
    !Array.isArray(questions) ||
    questions.length !== 30 ||
    !Number.isFinite(seconds) ||
    seconds < 0
  )
    throw new Error('Avaliação inválida');
  const scores = Object.fromEntries(Object.keys(DIMENSIONS).map((k) => [k, 0]));
  const adjusted = Array(30);
  for (const q of questions) {
    const v = answers[q.id];
    if (!Number.isInteger(v) || v < 1 || v > 5 || !(q.dimension in scores))
      throw new Error('Responda todas as 30 questões');
    const a = q.reverse ? 6 - v : v;
    adjusted[q.id] = a;
    scores[q.dimension] += a;
  }
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const pairs = [
    [0, 1],
    [2, 3],
    [5, 6],
    [7, 8],
    [10, 11],
    [13, 14],
    [15, 16],
    [18, 19],
    [20, 21],
    [22, 23],
    [26, 28],
  ];
  const inconsistencies = pairs.filter(
    ([a, b]) => Math.abs(adjusted[a] - adjusted[b]) > 2,
  ).length;
  const idealized = adjusted.filter((v) => v === 5).length;
  const score = Math.max(
    0,
    Math.min(
      100,
      100 -
        inconsistencies * 12 -
        Math.max(0, idealized - 24) * 6 -
        (seconds < 180 ? 15 : 0) -
        (seconds < 90 ? 25 : 0),
    ),
  );
  const level = score >= 80 ? 'Alta' : score >= 60 ? 'Moderada' : 'Baixa';
  const flags = [];
  if (inconsistencies)
    flags.push(`${inconsistencies} diferenças entre itens relacionados`);
  if (idealized > 24)
    flags.push(`${idealized} respostas na direção máxima desejável`);
  if (seconds < 180)
    flags.push('Duração curta segundo a regra exploratória do instrumento');
  const min = Math.min(...Object.values(scores));
  let status = 'Perfil em desenvolvimento';
  if (level === 'Baixa') status = 'Tentativa não utilizável para ingresso';
  else if (total >= 135 && min >= 19 && level === 'Alta')
    status = 'Forte alinhamento declarado — validar';
  else if (total >= 120 && min >= 17)
    status =
      level === 'Moderada'
        ? 'Pontuação compatível — validar'
        : 'Alinhamento declarado — avançar à conversa';
  else if (total >= 120 && min < 17)
    status = 'Desenvolvimento de dimensões específicas';
  else if (total >= 105) status = 'Potencial em desenvolvimento';
  else if (total >= 90) status = 'Alinhamento parcial';
  return {
    scores,
    total,
    status,
    integrity: {
      score,
      level,
      flags,
      inconsistencies,
      idealized,
      seconds: Math.round(seconds),
    },
    version: VERSION,
  };
}
export function isLocked(record, now = Date.now()) {
  return record && Date.parse(record.eligibleAfter) > now;
}
export function latestActiveLock(records, now = Date.now()) {
  return (
    records
      .filter((r) => isLocked(r, now))
      .sort(
        (a, b) => Date.parse(b.eligibleAfter) - Date.parse(a.eligibleAfter),
      )[0] || null
  );
}
export function formatDate(value) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Fortaleza',
  }).format(new Date(value));
}
export function resultText(r) {
  return `NEXUS Brasil — autoavaliação ${r.version}\nNome: ${r.name}\nE-mail: ${r.email}\nCódigo de referência: ${r.id}\nConcluída: ${formatDate(r.completedAt)} (Fortaleza)\nNova avaliação: ${formatDate(r.eligibleAfter)} (Fortaleza)\nResultado: ${r.total}/150 — ${r.status}\nConsistência exploratória: ${r.integrity.score}/100 (${r.integrity.level})\n${Object.entries(
    r.scores,
  )
    .map(([k, v]) => `${DIMENSIONS[k]}: ${v}/25`)
    .join(
      '\n',
    )}\nObservações: ${r.integrity.flags.join('; ') || 'Sem sinalizações pela regra atual'}\n\nInstrumento não validado psicometricamente. Não mede honestidade ou valor pessoal. Registro local, sem confirmação central e sem assinatura digital. Toda decisão requer validação humana. Respostas individuais não foram armazenadas.`;
}
