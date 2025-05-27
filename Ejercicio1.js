/*Ejercicio 1: Gestor de Tareas Mejorado
Crea un gestor de tareas que utilice Map para almacenar las tareas, donde la clave sea un ID único y el valor sea un objeto de tarea. Cada tarea tendrá id, descripcion, completada (booleano) y un Set de etiquetas.*/

/*Implementa las siguientes funciones:

agregarTarea({ id, descripcion, etiquetas = [] }):
Debe usar desestructuración para los parámetros.
Si el id ya existe, no debe sobrescribir la tarea existente y podría devolver un mensaje de error o false.
Las etiquetas deben almacenarse en un Set dentro del objeto de la tarea.
La tarea se guarda en un Map global o encapsulado.
marcarCompletada(id): Cambia el estado completada de la tarea a true.
obtenerTareasPorEtiqueta(etiqueta): Devuelve un array con las descripciones de las tareas que contengan la etiqueta especificada.
obtenerResumenTareas(): Devuelve un objeto con { total, completadas, pendientes }.

Pistas:

Puedes usar un closure para encapsular el Map de tareas si lo deseas.
Para obtenerTareasPorEtiqueta, necesitarás iterar el Map y luego verificar el Set de etiquetas de cada tarea.*/


function crearGestorDeTareas() {
    const tareas = new Map();  
    
/* Encapsulado en el closure No es accesible desde fuera directamente. Solo pueden accederla las funciones internas.
Estas funciones internas forman un closure porque recuerdan (y pueden usar) la variable tareas, incluso después de que crearGestorDeTareas() ya terminó su ejecución.
Estructura Map: funciona como una lista de pares clave valor: ID de la tarea como clave, y un objeto con datos como valor.*/    


    function agregarTarea({ id, descripcion, etiquetas = [] }) {//el objeto tarea desdestructurado
        if (tareas.has(id)) {//metodo de map para  verificar si una clave existe. Para no sobreescribir la tarea
            console.log("❌ Ya existe una tarea con ese ID");
            return false;//valor de retorno: Devolver true o false te permite saber si la operación funcionó o falló
        }

        tareas.set(id, { //metodo map para agregar un elemento nuevo o actualizar uno existente
            id, /*id es la clave del Map El valor que guardás es otro objeto que también contiene el id (además de descripcion, etc.)*/
            descripcion,
            completada: false,
            etiquetas: new Set(etiquetas)
        });

        return true;
    }

    function marcarCompletada(id) {
        const tarea = tareas.get(id);
        if (!tarea) return false;

        tarea.completada = true;
        return true;
    }

    function obtenerTareasPorEtiqueta(etiqueta) {
        const resultado = [];

        for (const tarea of tareas.values()) {//itera sobre los valores de map (no hace desestructuración explícita, pero toma cada valor como un objeto tarea completo).
            if (tarea.etiquetas.has(etiqueta)) { //El Set de etiquetas de esta tarea contiene la etiqueta?
                resultado.push(tarea.descripcion);//agrega a resultado la descripcion de la tarea cuya descripcion coincida
            }
        }

        return resultado;
    }

    function obtenerResumenTareas() {
        let total = 0, completadas = 0;//contadores

        for (const tarea of tareas.values()) {//itero sobre los valores de tareas
            total++;
            if (tarea.completada) completadas++;//si completadas es true
        }

        return {
            total,
            completadas,
            pendientes: total - completadas
        };
    }

    return {
        agregarTarea,
        marcarCompletada,
        obtenerTareasPorEtiqueta,
        obtenerResumenTareas
    };
}

const gestor = crearGestorDeTareas();

gestor.agregarTarea({
    id: 1,
    descripcion: "Aprender closures",
    etiquetas: ["javascript", "estudio"]
});

gestor.agregarTarea({
    id: 2,
    descripcion: "Regar las plantas",
    etiquetas: ["hogar"]
});

gestor.marcarCompletada(1);

console.log(gestor.obtenerTareasPorEtiqueta("javascript")); 
// 👉 ["Aprender closures"]

console.log(gestor.obtenerResumenTareas()); 
// 👉 { total: 2, completadas: 1, pendientes: 1 }

