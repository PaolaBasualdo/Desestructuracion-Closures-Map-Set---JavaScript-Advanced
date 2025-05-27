const usuario = {
    id: 1,
    nombreCompleto: "Ana Pérez",
    email: "ana@example.com",
    detalles: {
        edad: 30,
        pais: "Argentina"
    }
};

// Usá desestructuración para obtener:
// - nombreCompleto como "nombre"
// - email como "correo"
// - detalles.edad como "edad"
// - detalles.pais como "pais", con valor por defecto "Desconocido"

const {
    nombreCompleto: nombre,
    email: correo,
    detalles: {edad, pais = 'Desconocido'},

}= usuario;

console.log(nombre, correo, edad, pais);




























