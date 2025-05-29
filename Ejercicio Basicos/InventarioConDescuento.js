/*Ejercicio: Inventario de productos con descuentos
Tenés un Map llamado catalogo donde cada clave es el código del producto (número o string), y cada valor es un objeto con las propiedades:

js
Copiar
Editar
{
  nombre: string,
  precio: number,
  stock: number,
  categoria: string
}
Objetivo
Crear una función listarProductos() que muestre en consola todos los productos, listando sus datos.

Crear una función aplicarDescuentoPorCategoria(categoria, porcentaje) que:

Reciba una categoría y un porcentaje (ej: 10 para 10%).

Itere sobre el Map y aplique el descuento sólo a los productos de esa categoría.

Actualice el precio en el objeto del Map.

Crear una función productosConStockMinimo(minStock) que:

Devuelva un array con los códigos de los productos que tengan stock igual o mayor a minStock.*/
function gestionInventario(){
    const inventario = new Map();

    function agregarProducto(codigo, producto) {
        if (inventario.has(codigo)) {
            console.log("El producto ya existe");
        } else {
            inventario.set(codigo, producto);
        }
    }
    //que muestre en consola todos los productos, listando sus datos.


    function listarProductos(){

        for (let [codigo, producto] of inventario){
            const {nombre, precio, stock, categoria} = producto;
            console.log(`codigo: ${codigo}\n nombre: ${nombre}\n precio: ${precio}\n stock: ${stock}\n categoria: ${categoria}`)
        }
    }

    //función aplicarDescuentoPorCategoria(categoria, porcentaje) que: Reciba una categoría y un porcentaje

    function aplicarDescuentoPorCategoria(categoria, descuento){
        for (let producto of inventario.values()) {
            const {precio} = producto;
            if(producto.categoria === categoria){
                producto.precio = precio -(precio*descuento/100)
            }}

    }

    //Actualice el precio en el objeto del Map.

    function actualizarPrecio(codigo, nuevoPrecio){
        if (inventario.has(codigo)){
            const producto = inventario.get(codigo)
            producto.precio = nuevoPrecio 
        }else {
            console.log("Producto no encontrado")
        } 
    
    }
    return{
        agregarProducto,
        listarProductos,
        aplicarDescuentoPorCategoria,
        actualizarPrecio
    }


}
const inventario = gestionInventario();

// Agregar productos
inventario.agregarProducto("A1", { nombre: "Miel", precio: 1200, stock: 10, categoria: "Alimentos" });
inventario.agregarProducto("B2", { nombre: "Jabón artesanal", precio: 800, stock: 20, categoria: "Higiene" });
inventario.agregarProducto("C3", { nombre: "Aceite de oliva", precio: 1500, stock: 15, categoria: "Alimentos" });

// Listar
inventario.listarProductos();

// Aplicar descuento del 10% a Alimentos
inventario.aplicarDescuentoPorCategoria("Alimentos", 10);

// Actualizar precio individual
inventario.actualizarPrecio("B2", 750);

// Ver cambios
console.log("\n--- Después de descuentos y actualización ---\n");
inventario.listarProductos();

