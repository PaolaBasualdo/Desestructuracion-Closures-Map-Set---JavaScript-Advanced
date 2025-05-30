function crearTemporizadorSesion(duracionSegundos, callbackAlFinalizar){//funcion factory
    //validaciones:
    if (typeof duracionSegundos !== 'number' || duracionSegundos <= 0) {

      throw new Error("La duración debe ser un número positivo de segundos.");

    }//como lo dice la condicion un numero positivo debe ser la duracion en segundos

    if (typeof callbackAlFinalizar !== 'function') {//el callback es la tarea para cuando el temporizador llegue a cero, una funcion que se ejecuta cuando se termina el tiempo

      throw new Error("Se requiere un callback para ejecutar al finalizar.");

    }//el callback debe ser una funcion

    //declarar las variables internas
    let duracionOriginal = duracionSegundos;
    let tiempoRestante = duracionSegundos;
    let callback = callbackAlFinalizar;
    let intervalId = null;
    let estaActivo = false;//el temporizador

    //declara las funciones
    /*Verifica si ya está activo o si el tiempo se agotó.



Usa setInterval para descontar el tiempo cada segundo.

Cuando llega a 0, detiene el intervalo y llama al callback.*/

    function iniciar(){
        if (estaActivo || tiempoRestante <= 0) {
        console.warn("El temporizador ya está activo o ha finalizado.");
        return;//Verifica si ya está activo o si el tiempo se agotó.
        }
        estaActivo = true;//Activa el temporizador (estaActivo = true).
        console.log(`Temporizador iniciado: ${tiempoRestante} segundos restantes.`);

        intervalId = setInterval(() => { //usa setInterval para descontar el tiempo cada segundo
        tiempoRestante--;
        if (tiempoRestante <= 0) {
        detener();
        callbackAlFinalizar();
      }

        }, 1000); 

    }/*setInterval(() => { ... }, 1000) ejecuta un bloque de código repetidamente cada cierto tiempo, 1000 milisegundos, o sea 1 segundo.La función que le pasamos se ejecutará una vez por segundo (hasta que la detengamos con clearInterval(...) en nuestro caso en detener() cuando llega a cero tiempo restante) Cada vez que se ejecuta el bloque (cada segundo), se resta 1 a la variable tiempoRestante. Cuando la variable llega a cero se ejecuta detener y llama a la funcion final*/


    function detener(){
        clearInterval(intervalId);
        intervalId = null;
        estaActivo = false;
    }
 
    function pausar(){
        if (!estaActivo) {
        console.warn("El temporizador no está activo para pausar.");
        return;
        }

        clearInterval(intervalId); 
        intervalId = null;
        estaActivo = false;
        
        console.log(`Temporizador pausado. Tiempo restante: ${tiempoRestante} segundos.`);

    }
  
    function resetear() {

    detener(); 

    tiempoRestante = duracionOriginal;
    estaActivo = false;
    console.log(`Temporizador reseteado a ${duracionOriginal} segundos.`);

    } 
    function obtenerTiempoRestante(){
        return tiempoRestante
    }

    return {
        iniciar,
        pausar,
        resetear, 
        obtenerTiempoRestante
    }
}

try {

  const miTimer = crearTemporizadorSesion(5, () => {

    console.log("¡TIEMPO FINALIZADO\! Cerrando sesión...");

  });

  console.log("Tiempo restante inicial:", miTimer.obtenerTiempoRestante()); // 5

  miTimer.iniciar(); // Temporizador iniciado: 5 segundos restantes.

  setTimeout(() => {

    miTimer.pausar(); // Temporizador pausado. Tiempo restante: X segundos. (Depende de cuándo se ejecute)

   console.log("Pausado en:", miTimer.obtenerTiempoRestante());

  }, 2000); // Pausar después de 2 segundos

  setTimeout(() => {

    miTimer.iniciar(); // Reanudar

  }, 3000); // Reanudar 1 segundo después de pausar

  // El callback se ejecutará cuando el tiempo llegue a 0

  // Si se quiere resetear antes:

  // setTimeout(() \=\> {

  //   miTimer.resetear();

  //   console.log("Reseteado a:", miTimer.obtenerTiempoRestante()); // 5

  //   miTimer.iniciar();

  // }, 1000);

} catch (e) {

  console.error("Error con el temporizador:", e.message);

}



