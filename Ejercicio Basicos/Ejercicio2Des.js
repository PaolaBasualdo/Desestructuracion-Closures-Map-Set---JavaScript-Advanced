const persona = {
  nombre: "María",
  edad: 28,
  ciudad: "Córdoba"
};

const{
    nombre = 'Maria',
    edad = 28, 
    ciudad = 'Cordoba'

}= persona;

console.log(nombre); // Debería mostrar "María"
console.log(edad);   // Debería mostrar 28