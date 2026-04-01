const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];



// 1
console.log(productos[0].nombre);

// 2
for (const producto of productos) {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

// 3
productos.forEach((producto) => {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

// 4. Obtener solo los nombres con .map()
const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);

// 5. Filtrar por categoría con .filter()
const productosRopa = productos.filter((producto) => producto.categoria === "Ropa");
console.log(productosRopa);

// 6. Filtrar por precio con .filter()
const productosMayoresA3000 = productos.filter((producto) => producto.precio > 3000);
console.log(productosMayoresA3000);

// 7. Buscar un producto específico con .find()
const productoGorra = productos.find((producto) => producto.nombre === "Gorra");
console.log(productoGorra);