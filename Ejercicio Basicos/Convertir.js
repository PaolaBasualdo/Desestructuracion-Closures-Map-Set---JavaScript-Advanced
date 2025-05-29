/*class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    return `${this.nombre} cuesta $${this.precio}`;
  }
}*/
function crearProducto(nombre, precio){
    const _nombre = nombre; //_nombre variableinterna o privada 
    const _precio = precio; 

    function mostrarInfo(){
        console.log(`El producto ${nombre} cuesta ${_precio}`)
    }
    function aplicarDescuento(descuento){
       let precioDescuento = _precio*descuento;
       return precioDescuento
    }

    function obtenerPrecio(){
        return _precio
    }

    return {
        mostrarInfo,
        aplicarDescuento,
        obtenerPrecio

    }
}