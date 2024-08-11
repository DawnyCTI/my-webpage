const fs = require('fs');
const path = require('path');

test('La página contiene "Practica Final Devops CI/CD"', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  expect(html).toContain('Practica Final Devops CI/CD');
});
