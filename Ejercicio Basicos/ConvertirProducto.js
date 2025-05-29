function gestionarProducto() {
  let productos = [];

  function crearProducto(codigo, nombre, precio, descripcion) {
    const producto = {
      codigo: codigo,
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    };
    productos.push(producto);
  }

  function editarProducto(codigo, nuevoNombre, nuevoPrecio, nuevoDescripcion) {
    const producto = productos.find(item => item.codigo === codigo);
    if (producto) {
      producto.nombre = nuevoNombre;
      producto.precio = nuevoPrecio;
      producto.descripcion = nuevoDescripcion;
    } else {
      console.error("Producto no encontrado.");
    }
  }

  function eliminarProducto(codigo) {
    productos = productos.filter(producto => producto.codigo !== codigo);
  }

  function mostrarProducto(codigo) {
    const producto = productos.find(item => item.codigo === codigo);
    console.log(producto);
  }

  return {
    crearProducto,
    editarProducto,
    eliminarProducto,
    mostrarProducto
  };

  }

const gestor = gestionarProducto();
gestor.crearProducto(1, "esmalte", 1000, "base agua");
gestor.mostrarProducto(1)
