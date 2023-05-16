const refactorMal2 = require ('./refractorMal2'); 
let precioProducto = 3; 
let cantidadProducto = 2; 

test('Comprobar subtotal', () => {
  expect(calcularSubtotal(precioProducto, cantidadProducto)).toBe(num);
});