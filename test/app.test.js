const sum = require('../index');  // Importamos la función sum

test('suma 1 + 2 debe ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);  // Verificamos que 1 + 2 sea igual a 3
});
