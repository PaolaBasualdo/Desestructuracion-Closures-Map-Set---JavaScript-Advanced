/*Ejercicio 5: Transformador de Datos de API
Imagina que recibes datos de usuarios de una API en un formato y necesitas transformarlos. Los datos vienen como un array de objetos: [{ id: 1, nombre_completo: "Ana Pérez", email: "ana.perez@example.com", detalles: { edad: 30, pais_residencia: "ES" } }, ...]

Crea una función transformarYAgruparUsuarios(usuariosApi, ...propiedadesAdicionales):

usuariosApi: El array de objetos como el descrito.
...propiedadesAdicionales: Un rest parameter que contendrá nombres de propiedades a extraer directamente del objeto detalles (ej. "edad", "pais_residencia").
La función debe transformar cada objeto de usuario al siguiente formato: { userId: id, nombre: (solo el nombre, no el apellido), email, ... (las propiedades adicionales extraídas de 'detalles') }
Además, la función debe agrupar a los usuarios por pais_residencia (si esta propiedad se solicitó y existe). El resultado de la agrupación debe ser un Map donde la clave es el código del país y el valor es un Set de userIds de los usuarios de ese país.
La función debe devolver un objeto con:
usuariosTransformados: Array de los objetos de usuario transformados.
usuariosPorPais: El Map de la agrupación por país (o un Map vacío si "pais_residencia" no estaba en propiedadesAdicionales).

Pistas:

Usa desestructuración para acceder a las propiedades anidadas y para renombrar.
Usa el operador spread para construir los nuevos objetos de usuario de forma dinámica.
Itera sobre propiedadesAdicionales para construir el objeto transformado.
Usa Map y Set para la agrupación.*/

function transformarYAgruparUsuarios(usuariosApi, ...propiedadesAdicionales) {
  // Creamos un array para guardar los usuarios ya transformados
  const usuariosTransformados = [];

 //El operador rest (...) toma un número indefinido de argumentos y los convierte en un array. Sirve cuando no sabés cuántos parámetros va a recibir tu función. propiedadesAdicionales es un array de strings que indica qué propiedades extraer del objeto detalles de cada usuario
  const usuariosPorPais = new Map();//map de agrupacion por pais cuya clave es el pais y el valor un set de las ide de usuarios que viven en ese pais

   
    const incluirPais = propiedadesAdicionales.includes("pais_residencia");
    /*incluirPais es una variable booleana, su valor será: true si "pais_residencia" está dentro del array propiedadesAdicionales.*/

    if (incluirPais && detalles.pais_residencia) {//si e objeto actual tiene definido un valor para pais residencia
      const pais = detalles.pais_residencia;//guardamos en pais el valor de pais_residencia

      // si el objeto Map no tiene una clave aun para ese pais, crea in set para ese pais
      if (!usuariosPorPais.has(pais)) {//si el objeto Map no lo tiene al pais 
        usuariosPorPais.set(pais, new Set());//nueva entrada pais como clave y set como valor
      }

      // Agregamos el id del usuario al Set correspondiente por cada pais
      usuariosPorPais.get(pais).add(id);
    }
//Para cambiar de formato a los usuarios
  // bucle que toma a cada usuario de la Api y lo almacena como usuario para poder trabajar mas facil,  
  for (let i = 0; i < usuariosApi.length; i++) {
    const usuario = usuariosApi[i];

    // Desestructuramos las propiedades principales: tomar sus propiedades y guardarlas en variables con el  el nombre que uno elijas.
    const id = usuario.id;
    const nombreCompleto = usuario.nombre_completo;
    const email = usuario.email;
    const detalles = usuario.detalles;

    // Obtenemos solo el primer nombre (antes del espacio)
    const partesDelNombre = nombreCompleto.split(" "); //split convierte un string en un array de palabras y lo separa de acuardo al separador que en este caso es el espacio entre los nombre
    const nombre = partesDelNombre[0];//parte del nombre es un array de dos componentes el del indice 0 es el nombre y el del 1 es el apellido

    // Creamos un objeto vacío para guardar los datos extraídos de "detalles"
    const extras = {};

    // Recorremos cada propiedad adicional que nos pidieron (por ejemplo "edad")
    for (let j = 0; j < propiedadesAdicionales.length; j++) {
      const propiedad = propiedadesAdicionales[j];

      // Si esa propiedad existe dentro del objeto "detalles", la guardamos
      if (detalles.hasOwnProperty(propiedad)) {
        extras[propiedad] = detalles[propiedad];
      }
    }

    // Ahora armamos el nuevo objeto de usuario transformado
    const usuarioTransformado = {
      userId: id,
      nombre: nombre,
      email: email,
      ...extras // Agregamos las propiedades extra (edad, pais_residencia, etc.)
    };

    // Lo agregamos al array final
    usuariosTransformados.push(usuarioTransformado);

  
  }

  // Finalmente devolvemos el resultado como un objeto
  return {
    usuariosTransformados: usuariosTransformados,
    usuariosPorPais: usuariosPorPais
  };
}