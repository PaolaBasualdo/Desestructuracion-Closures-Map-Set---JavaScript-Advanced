export default class Producto {  
  codigo;
  nombre;
  precio;
  descripcion;
  imagen;
    
  constructor(codigo, nombre, precio, descripcion, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
    
  static #items = [];

  static { //bloque ejecutado una única vez cuando la clase se carga por primera vez, y permite rellenar #items con productos guardados en localStorage
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || []; 
    productosGuardados.forEach(({codigo, nombre, precio, descripcion, imagen}) => {
      this.#items.push(new Producto(codigo, nombre, precio, descripcion, imagen));
    });
  }

  static guardarEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(this.#items));
  }

  static agregar(codigo, nombre, precio, descripcion, imagen) {
    const productoExistente = this.#items.find(item => item.codigo === codigo);
    if (productoExistente) {
      alert('El código ya existe, no se puede agregar el producto.');
      return false;
    }

    const producto = new Producto(codigo, nombre, precio, descripcion, imagen);
    this.#items.push(producto);
    this.guardarEnLocalStorage();
    return true;
  }

  static eliminar(codigo) {
    this.#items = this.#items.filter(item => item.codigo !== codigo);
    this.guardarEnLocalStorage();
  }
    
  static mostrarArray() {
    return this.#items;
  }

  static editar(codigo, nuevoNombre, nuevoPrecio, nuevaDescripcion, nuevaImagen) {
    const producto = this.#items.find(item => item.codigo === codigo);
    if (producto) {
      producto.nombre = nuevoNombre;
      producto.precio = nuevoPrecio;
      producto.descripcion = nuevaDescripcion;
      producto.imagen = nuevaImagen;
      this.guardarEnLocalStorage();
    } else {
      console.error('Producto no encontrado.');
    }
  }
}
