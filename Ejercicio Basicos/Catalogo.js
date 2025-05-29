/*🧩 Ejercicio Propuesto
🧺 Catálogo de Productos con precios y stock
Vas a tener un Map donde cada clave es un código de producto y el valor es un objeto con varias propiedades, por ejemplo:


{
  nombre: "Miel de abejas",
  precio: 1500,
  stock: 10
}
🧠 Objetivo
Crear un gestor (con o sin closure) que permita:

Agregar productos nuevos al catálogo.

Actualizar stock o precio de un producto.

Listar todos los productos usando desestructuración para acceder a los datos.

Consultar producto por código.

🧪 Bonus:
Usá desestructuración al acceder a cada producto para imprimir sus datos.

💡 Ejemplo de uso de desestructuración:

const producto = {
  nombre: "Miel",
  precio: 1500,
  stock: 10
};

const { nombre, precio, stock } = producto;
console.log(nombre, precio, stock);

🎯 Desafío
Convertilo en una función gestorCatalogo() (closure) si querés practicar el encapsulamiento, o simplemente implementalo como funciones sueltas. Vos elegís el enfoque.

*/

function gestorCatalogo(){
    const catalogo = new Map();

//Agregar productos nuevos al catálogo.
    function agregar(codigo, producto){
        const {nombre, precio, stock} = producto;
       
        if(catalogo.has(codigo)){
            console.log("Stock Actualizado")
            const productoEnCatalogo = catalogo.get(codigo)

            productoEnCatalogo.stock += stock

        }else{
        catalogo.set(codigo, producto)}

    }
//Actualizar stock o precio de un producto.

    function actualizar(codigo, precio, stock) {
        const productoAEditar = catalogo.get(codigo);//obtengo el valor a partirde la clave codigo
        if (!productoAEditar) {
        console.log('Producto no encontrado');
        return;
        }
        productoAEditar.precio = precio;
        productoAEditar.stock = stock;
    }
//Listar todos los productos usando desestructuración para acceder a los datos.


    function listar(){
        for (let [codigo, { nombre, precio, stock }] of catalogo) {
            console.log(`Código: ${codigo}, Nombre: ${nombre}, Precio: $${precio}, Stock: ${stock}`);
        }
        
    }

    function consultarPorCodigo(codigo) {
        if(catalogo.has(codigo)){ 
            return catalogo.get(codigo)
        }else{
            console.log("Producto no encontrado")
        }

    }
    
    
    
    return{
        agregar,
        actualizar,
        listar,
        consultarPorCodigo
    }
}