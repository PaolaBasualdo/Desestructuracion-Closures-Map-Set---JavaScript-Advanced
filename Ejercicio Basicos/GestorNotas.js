/*Gestor de Notas de Estudiantes
Escenario:
Querés registrar y gestionar las notas de estudiantes. A cada estudiante (por su nombre o ID) le podés asignar una nota, modificarla, eliminarla, consultarla y listar todas.

🧠 Objetivo:
Convertí esta lógica en un closure que encapsule un Map.

Funcionalidades esperadas:
asignarNota(estudiante, nota)
➜ Agrega o actualiza la nota de un estudiante.

eliminarNota(estudiante)
➜ Quita a un estudiante del registro.

consultarNota(estudiante)
➜ Devuelve la nota del estudiante, o undefined si no está.

listarNotas()
➜ Muestra todos los estudiantes con sus notas.

(Opcional) promedio()
➜ Calcula el promedio de todas las notas registradas.

💡 Pista para usar Map:
js
Copiar
Editar
const notas = new Map();
notas.set("Juan", 8);
notas.get("Juan"); // 8
notas.has("Juan"); // true
notas.delete("Juan");
🎯 Tu desafío:
Hacelo como closure, devolviendo las funciones en un objeto, y encapsulando el Map dentro de la función principal.*/

function gestorNotas() {
    const notas = new Map();
//a una clave agregarle valor o agregar todo junto
    function agregarNota(estudiante, nota){
        notas.set(estudiante, nota)
    }

    function eliminarEstudiante(estudiante){
        notas.delete(estudiante)
    }

    function consultarNota(estudiante){
       return notas.get(estudiante)
    }

    function listar(){
        console.log(notas)
    }

    return {
        agregarNota,
        eliminarEstudiante,
        consultarNota, 
        listar
    }
}

const notasGestor = gestorNotas();

notasGestor.agregarNota("Ana", 9);
notasGestor.agregarNota("Luis", 7);

console.log(notasGestor.consultarNota("Ana")); // 9
notasGestor.eliminarEstudiante("Luis");
notasGestor.listar(); // Map con solo Ana
