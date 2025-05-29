/*class Favoritos {
  constructor() {
    this.favoritos = new Set();
  }

  agregar(id) {
    this.favoritos.add(id);
  }

  quitar(id) {
    this.favoritos.delete(id);
  }

  estaEnFavoritos(id) {
    return this.favoritos.has(id);
  }

  listar() {
    return Array.from(this.favoritos);
  }
}
Escenario:
Tenés un sistema que maneja una lista de elementos (por ejemplo, productos, artículos, libros, etc.). Los usuarios pueden marcar elementos como "favoritos", quitarlos de favoritos, verificar si un elemento está entre sus favoritos, y ver la lista de favoritos.  
*/

function gestorFavoritos(){
    const favoritos = new Set()

    function agregar(elemento){
       favoritos.add(elemento)
    }

    function eliminar(elemento){
        favoritos.delete(elemento)
    }

    function esFavorito(elemento){
        return favoritos.has(elemento);
    }

    function listar(){
        console.log(favoritos)
    }

    return {
        agregar, 
        eliminar,
        esFavorito, 
        listar
    }

}
const favs = gestorFavoritos();

favs.agregar("Pan");
favs.agregar("Queso");
console.log(favs.esFavorito("Queso")); // true
favs.eliminar("Pan");
favs.listar(); // Set { 'Queso' }
