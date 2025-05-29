function gestorCarrito(productos) {
  let carrito = [];

  function comprar(codigo, cantidad) {
    const elegido = productos.find((producto) => producto.codigo === codigo); //Busco el producto por codigo en el catslogo

    const enCarrito = carrito.find(
      (producto) => producto.codigo === elegido.codigo
    );
    if (enCarrito) {
      enCarrito.cantidad += cantidad;
    } else {
      carrito.push({
        ...elegido, //elegido viene de producto que no tiene cantidad ...spread, copia o expande el resto de las propiedades
        cantidad: cantidad,
      });
    }
  }

  function eliminar(codigo) {
    carrito = carrito.filter((item) => item.codigo !== codigo);
    //se forma un nuevo carrito con los productos que no tienen el codigo igual
  }

  function editar(codigo, cantidad) {
    const aModificar = carrito.find((producto) => producto.codigo === codigo);

    if (aModificar) {
      aModificar.cantidad = cantidad;
    }
  }

  function mostrar() {
    console.log(carrito);
  }

  return {
    comprar,
    eliminar,
    editar,
    mostrar,
  };
}
