/*Ejercicio 2: Procesador de Listas de Invitados
Debes crear una función procesarListas que acepte un número variable de listas de
invitados (arrays de strings con nombres). La función debe:
1. Combinar todas las listas en una sola.
2. Eliminar nombres duplicados (cada invitado debe aparecer solo una vez).
3. Devolver un objeto con dos propiedades:
● invitadosUnicos: Un Set con los nombres únicos de los invitados.
● conteoTotalInvitados: El número total de nombres recibidos antes de la
deduplicación.
● conteoInvitadosUnicos: El número de invitados únicos.
Pistas:
● Usa el operador rest para aceptar múltiples listas.
● Usa el operador spread para combinar los arrays.
● Usa Set para obtener los nombres únicos.
*/

function procesarListas(...listas) { //(...)rest parameter listas es un array de arrays, junta argumentos
  // Paso 1: combinar todas las listas en un solo array
  const todosLosNombres = [].concat(...listas);//(...)spread parameter se expanden todos los elementos internos para formar uno
//con flat: function procesarListas(listas){
//const todosLosNombres = listas.flat()}
  // Paso 2: contar todos los nombres antes de eliminar duplicados
  const conteoTotalInvitados = todosLosNombres.length;//para saber el total aunque haya repetidos

  // Paso 3: crear un Set para eliminar duplicados
  const invitadosUnicos = new Set(todosLosNombres);//El Set automáticamente elimina los duplicados del array.

  // Paso 4: contar cuántos quedaron únicos
  const conteoInvitadosUnicos = invitadosUnicos.size;//.size, como .length que se usa en arrays.

  // Paso 5: devolver el objeto pedido
  return {
    invitadosUnicos,
    conteoTotalInvitados,
    conteoInvitadosUnicos
  };
}
//ejemplo de clousure la funcion procesarListas  crea la variable todosLosNombres y retorna tres funciones internas. uando ejecutamos esas funciones internas, dos de ellas recuerdan a la variable creada por lo tanto es un clousure.