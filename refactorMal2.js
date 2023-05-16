// Variables globales
let totalCompra = 0;
let carritoCompra = [];

let precioProducto = {
    "manzanas": 2.5,
    "peras": 3,
    "kiwis": 4
};

function AnadirProductoAlCarrito(nombreProducto, cantidad)
{
  if(existeProducto(nombreProducto))
  {
    let precio = precioProducto[nombreProducto]; 
    let subtotal  = calcularSubtotal(precio, cantidad); 
    carritoCompra.push({
        nombre: nombreProducto,
        cantidad: cantidad,
        subtotal: subtotal
      });

    sumaTotal(subtotal);
  }
  else
  {
    console.log("Producto no válido");
  }
  
}

function existeProducto(nombreProducto) {
  if(precioProducto[nombreProducto])
  {
    return true; 
  }
  return false; 
}

function sumaTotal(subtotalAnadir)
{
  totalCompra += subtotalAnadir; 
}

function calcularSubtotal(precio, cantidad)
{
  let subtotal = precio * cantidad; 

  return subtotal; 
}
// // Función para agregar productos al carrito
// function agregarAlCarrito(producto, cantidad) {
//   if (producto === "manzanas") {
//     var precio = 2.5;
//     var subtotal = precio * cantidad;
//     total += subtotal;
//     carrito.push({
//       producto: producto,
//       cantidad: cantidad,
//       subtotal: subtotal
//     });
//   } else if (producto === "peras") {
//     var precio = 3;
//     var subtotal = precio * cantidad;
//     total += subtotal;
//     carrito.push({
//       producto: producto,
//       cantidad: cantidad,
//       subtotal: subtotal
//     });
//   } else if (producto === "kiwis") {
//     var precio = 4;
//     var subtotal = precio * cantidad;
//     total += subtotal;
//     carrito.push({
//       producto: producto,
//       cantidad: cantidad,
//       subtotal: subtotal
//     });
//   } else {
//     console.log("Producto no válido");
//   }
// }

// // Función para mostrar el carrito de compras
function getTotal() {
  return total
}

function mostrarCarritoCompraPorConsola() {
  console.log("---- Carrito de Compras ----");
  for (var i = 0; i < carritoCompra.length; i++) {
    var producto = carritoCompra[i];
    console.log(
      "Producto: " + producto.nombre +
      " - Cantidad: " + producto.cantidad +
      " - Subtotal: " + producto.subtotal.toFixed(2)
    );
  }
  console.log("-----------------------------");
  console.log("Total: " + totalCompra.toFixed(2));
}

AnadirProductoAlCarrito("manzanas", 2);
AnadirProductoAlCarrito("peras", 3);
AnadirProductoAlCarrito("kiwis", 1);
AnadirProductoAlCarrito("naranjas", 4); // Producto no válido

mostrarCarritoCompraPorConsola();
