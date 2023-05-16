
// Definir variables globales
let subtotal = 0;
let iva = 0;
let total = 0;
const tasaIva = 0.16;

// Función para calcular el IVA
function calcularIva(precio) {
  return precio * tasaIva;
}

// Función para agregar un artículo al carrito
function agregarArticulo(articulo, precio) {
  subtotal += precio;
  console.log("Artículo agregado: " + articulo + " - $" + precio.toFixed(2));
}

// Función para calcular el total de la compra
function calcularTotal() {
  iva = calcularIva(subtotal);
  total = subtotal + iva;
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("IVA: $" + iva.toFixed(2));
  console.log("Total: $" + total.toFixed(2));
}

// Agregar artículos al carrito
agregarArticulo("Camisa", 299.99);
agregarArticulo("Pantalón", 499.99);
agregarArticulo("Calcetines", 99.99);

// Calcular total de la compra
calcularTotal();

module.exports = calcularIva;