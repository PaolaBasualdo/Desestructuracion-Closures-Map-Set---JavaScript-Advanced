/*Ejercicio 4: Registro de Eventos con Timestamps Únicos
Crea un sistema para registrar eventos. Cada evento debe tener un timestamp como clave y
una descripción como valor.
1. Usa un Map para almacenar los eventos.
2. Crea una función registrarEvento(descripcion):
● Debe generar un timestamp (puedes usar Date.now()).
● Para asegurar la unicidad del timestamp como clave (en caso de llamadas muy
rápidas), si el timestamp ya existe en el Map, intenta con el siguiente milisegundo
hasta encontrar uno libre.
● Guarda el evento en el Map.
3. Crea una función obtenerEventosEntre({ inicio, fin }) que use
desestructuración para los parámetros inicio y fin (timestamps). Debe devolver un
array de objetos { timestamp, descripcion } para los eventos dentro de ese
rango.
Pistas:
● Un while loop puede ser útil para encontrar un timestamp único.
● Para obtenerEventosEntre, itera sobre las claves (timestamps) del Map.
*/
function crearRegistroDeEventos() {
  const eventos = new Map(); //objeto Map 

  function registrarEvento(descripcion) {
    let timestamp = Date.now(); //marca de tiempo aplicando el metodo etatico del objeto global Date 
    
    // Asegurar que el timestamp sea único
    while (eventos.has(timestamp)) { //si la marca de tiempo ya existe en el objeto map, por llamadas muy rapidas consecutivas
      timestamp++; // avanzar 1 milisegundo hasta encontrar uno libre, date.Now devuelve la marca de tiempo en milisegundos, asi que va sumando, permanece en el bucle hasta que encuentra uno libre
    }

    eventos.set(timestamp, descripcion);//al que encntro que no esta en el Map Eventos lo agrega al objeto
  }

  function obtenerEventosEntre({ inicio, fin }) {//el evento esta desestructurado inicio= marca de tiempo de inicio y fin, marca de tiempo de fin
    const resultado = [];

    for (const [timestamp, descripcion] of eventos) {//recorre el Map Eventos seria const evento of eventos, pero desestructura evento en su clave (Marca de tiempo) valor (descripcion)
      if (timestamp >= inicio && timestamp <= fin) {
        resultado.push({ timestamp, descripcion });// si lo encuentra dentro del rango inicio-fin lo incorpora al array resultado
      }
    }

    return resultado;
  }

  return {//objeto de funciones cuya clave es el nombre y el valor es la funcion
    registrarEvento,
    obtenerEventosEntre
  };
}
