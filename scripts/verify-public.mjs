import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve(process.argv[2] || 'dist/client');
const base = process.env.NEXUS_BASE_PATH || '';
const routes = [
  '',
  'sobre',
  'metodo',
  'sobral',
  'propostas',
  'biblioteca',
  'participar',
  'avaliacao',
  'transparencia',
  'privacidade',
  'ferramentas',
];
for (const r of routes) {
  const f = path.join(root, r, 'index.html');
  assert.ok(fs.existsSync(f), `Rota ausente: ${r}`);
  const html = fs.readFileSync(f, 'utf8');
  assert.ok(html.includes('pt-BR'), `Idioma: ${r}`);
  assert.ok(!html.includes('Untitled site'), `Título padrão: ${r}`);
  assert.ok(html.includes('NEXUS'), `Conteúdo: ${r}`);
}
const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)],
    );
for (const f of walk(root)) {
  assert.ok(!/\.(zip|docx|env|sqlite)$/.test(f), `Arquivo privado: ${f}`);
  if (!/\.(html|js|json|md)$/.test(f)) continue;
  const text = fs.readFileSync(f, 'utf8');
  for (const banned of ['ghp_', 'github_pat_', '-----BEGIN PRIVATE KEY'])
    assert.ok(!text.includes(banned), `Conteúdo restrito em ${f}`);
  if (f.endsWith('.html'))
    for (const m of text.matchAll(/(?:href|src)="([^"#]+)"/g)) {
      let url = m[1].replaceAll('&amp;', '&');
      if (!url.startsWith('/')) continue;
      if (base && url.startsWith(base + '/')) url = url.slice(base.length);
      url = url.split(/[?#]/)[0];
      const target = path.join(root, decodeURIComponent(url));
      assert.ok(
        fs.existsSync(target) || fs.existsSync(path.join(target, 'index.html')),
        `Link interno ausente: ${url} em ${f}`,
      );
    }
}
const proposals = JSON.parse(
  fs.readFileSync(path.join(root, 'propostas.json'), 'utf8'),
);
assert.equal(proposals.length, 46);
assert.equal(new Set(proposals.map((p) => p.id)).size, 46);
assert.equal(proposals.filter((p) => p.territory === 'Sobral').length, 6);
console.log(
  `Verificado: ${routes.length} rotas, links locais, 46 propostas e ausência dos marcadores privados.`,
);
