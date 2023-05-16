const calcularIva = require('./refactorMal');

let precio = 899.97;
let resultat = 143.9952;
test('IVA de ' + precio + ' es igual a casi 144', () => {
  expect(calcularIva(precio)).toBe(resultat);
});
