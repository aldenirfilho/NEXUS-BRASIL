export const normalize = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
export const axes = [
  ['todos', 'Todos os temas'],
  ['economia', 'Trabalho e renda'],
  ['cidade', 'Cidade e ambiente'],
  ['saude', 'Saúde'],
  ['educacao', 'Educação'],
  ['governanca', 'Transparência'],
  ['tecnologia', 'Ciência e IA'],
  ['cidadania', 'Cidadania e proteção'],
];
