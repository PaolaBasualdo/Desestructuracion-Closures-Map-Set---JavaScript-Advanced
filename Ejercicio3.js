/*
Ejercicio 3: Creador de Funciones de Filtrado
Escribe una función crearFiltroPorPropiedad que sea una factory function (utilice
closures). Esta función debe tomar un nombrePropiedad como argumento. Debe devolver
otra función. Esta función devuelta tomará un valorEsperado y un array de objetos.
Finalmente, filtrará el array de objetos, devolviendo solo aquellos objetos donde la propiedad
(especificada por nombrePropiedad en la factory) sea igual al valorEsperado.
Ejemplo de uso: const filtrarPorCiudad =
crearFiltroPorPropiedad("ciudad"); const residentesMadrid =
filtrarPorCiudad("Madrid", [{nombre: "Ana", ciudad: "Madrid"},
{nombre: "Luis", ciudad: "Barcelona"}]); // residentesMadrid debería
ser [{nombre: "Ana", ciudad: "Madrid"}]
Pistas:
● La función externa "recordará" nombrePropiedad gracias al closure.
● La función interna usará este nombrePropiedad para acceder dinámicamente a la
propiedad del objeto.*/
function crearFiltroPorPropiedad(nombrePropiedad) {
  
    function filtrarPorPropiedad(valorEsperado, arrayObjetos) {
        let objetoConPropiedad = arrayObjetos.filter(obj => obj[nombrePropiedad] === valorEsperado);
        return objetoConPropiedad
    };
    
    return filtrarPorPropiedad
  
}