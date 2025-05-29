export default class Carrito {  
  codigo;
  nombre;
  precio;
  cantidad;
  imagen;
      
  constructor(codigo, nombre, precio, cantidad, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
    }
      
  static #elegidos = [];
  
  static { 
    const guardados = JSON.parse(localStorage.getItem("carrito")) || []; 
    guardados.forEach(({codigo, nombre, precio, cantidad, imagen}) => {
    this.#elegidos.push(new Carrito(codigo, nombre, precio, cantidad, imagen));
    });
  }
  
  static guardarEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(this.#elegidos));
  }
  
  static comprar(codigo, nombre, precio, cantidad, imagen) { 
    const productoExistente = this.#elegidos.find(elegido => elegido.codigo === codigo);
    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      const nuevoProducto = new Carrito(codigo, nombre, precio, cantidad, imagen);
      this.#elegidos.push(nuevoProducto);
    }
    
    this.guardarEnLocalStorage();
      
  }
  
  static eliminar(codigo) {
    this.#elegidos = this.#elegidos.filter(elegido=> elegido.codigo !== codigo);
    this.guardarEnLocalStorage();
  }
      
  static mostrarCarrito() {
    return this.#elegidos;
  }
  
  static editar(codigo, nuevaCantidad) {
    const seleccionado = this.#elegidos.find(elegido => elegido.codigo === codigo);
    if (seleccionado) {
      seleccionado.cantidad = nuevaCantidad;
      this.guardarEnLocalStorage();
    } else {
      console.error("Producto no encontrado en el carrito.");
    }
  }

  static calcularSubtotal(codigo) {
    const producto = this.#elegidos.find(elegido => elegido.codigo === codigo);
    return producto ? producto.precio * producto.cantidad : 0;
  }
  
  static calcularTotal() {
    let total = 0;    
    for (let elegido of this.#elegidos) {
      total += elegido.precio * elegido.cantidad; 
    }
  
    return total;  
  }
  
  static vaciar() {
    this.#elegidos = [];
    this.guardarEnLocalStorage();
  }

  
  static obtenerCantidadTotal() {
    console.log("Productos en el carrito:", this.#elegidos);
    return this.#elegidos.reduce((total, producto) => total + producto.cantidad, 0);
  }
  
  

  
  }
  