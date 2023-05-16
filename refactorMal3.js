// Lista de libros (estructura de datos global)
var libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "1984", autor: "George Orwell", año: 1949 },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943 }
];

// Función para mostrar la lista de libros
function mostrarLibros() {
  console.log("----- Lista de Libros -----");
  for (var i = 0; i < libros.length; i++) {
    var libro = libros[i];
    console.log("Título: " + libro.titulo);
    console.log("Autor: " + libro.autor);
    console.log("Año: " + libro.año);
    console.log("---------------------------");
  }
}


// Función para agregar un libro a la lista
function agregarLibro(titulo, autor, año) {
  var nuevoLibro = { titulo: titulo, autor: autor, año: año };
  libros.push(nuevoLibro);
  console.log("Libro agregado exitosamente");
}

// Mostrar lista de libros
mostrarLibros();

// Agregar un nuevo libro
agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);

// Mostrar lista de libros actualizada
mostrarLibros();
