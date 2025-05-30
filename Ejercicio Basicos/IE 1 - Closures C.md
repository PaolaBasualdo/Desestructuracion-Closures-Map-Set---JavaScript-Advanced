### Ejercicio: Temporizador de Sesión

**Contexto:** En JavaScript, antes de la introducción de la sintaxis de `class` (ES6), los patrones basados en closures eran una forma común de lograr encapsulación y crear objetos con estado y comportamiento "privado". Este ejercicio te pide que conviertas una clase moderna a este patrón clásico.

**Tarea:** Convierte la clase `TemporizadorSesion` en una función factory `crearTemporizadorSesion` usando closures. Implementa un temporizador que puede ser iniciado, pausado, reseteado y que ejecuta una acción al finalizar, usando closures para manejar su estado.

**Clase Original `TemporizadorSesion`:**

class TemporizadorSesion {

  constructor(duracionSegundos, callbackAlFinalizar) {

    if (typeof duracionSegundos \!== 'number' || duracionSegundos \<= 0\) {

      throw new Error("La duración debe ser un número positivo de segundos.");

    }

    if (typeof callbackAlFinalizar \!== 'function') {

      throw new Error("Se requiere un callback para ejecutar al finalizar.");

    }

    this.duracionOriginal \= duracionSegundos;

    this.tiempoRestante \= duracionSegundos;

    this.callback \= callbackAlFinalizar;

    this.intervalId \= null;

    this.estaActivo \= false;

  }

  iniciar() {

    if (this.estaActivo || this.tiempoRestante \<= 0\) {

      console.warn("El temporizador ya está activo o ha finalizado.");

      return;

    }

    this.estaActivo \= true;

    console.log(\`Temporizador iniciado: ${this.tiempoRestante} segundos restantes.\`);

    this.intervalId \= setInterval(() \=\> {

      this.tiempoRestante--;

      // console.log(\`Tiempo restante: ${this.tiempoRestante}s\`); // Opcional para depurar

      if (this.tiempoRestante \<= 0\) {

        this.detener();

        this.callback();

      }

    }, 1000); // Resta "tiempoRestante" en 1 por cada segundo que pasa

  }

  pausar() {

    if (\!this.estaActivo) {

      console.warn("El temporizador no está activo para pausar.");

      return;

    }

    clearInterval(this.intervalId); // Finaliza el setInterval(), pero al mantener el "tiempoRestante" puede reanudarse donde se quedó.

    this.intervalId \= null;

    this.estaActivo \= false;

    console.log(\`Temporizador pausado. Tiempo restante: ${this.tiempoRestante} segundos.\`);

  }

  resetear() {

    this.detener(); // Asegura que cualquier intervalo existente se limpie

    this.tiempoRestante \= this.duracionOriginal;

    this.estaActivo \= false;

    console.log(\`Temporizador reseteado a ${this.duracionOriginal} segundos.\`);

  }

  detener() { // Método interno para limpiar el intervalo

    if (this.intervalId) {

      clearInterval(this.intervalId);

      this.intervalId \= null;

    }

    this.estaActivo \= false; // Asegurar que se marca como inactivo

  }

  obtenerTiempoRestante() {

    return this.tiempoRestante;

  }

}

**Tu Implementación con Closures:**

Crea la función `crearTemporizadorSesion(duracionSegundos, callbackAlFinalizar)`:

1. Validará los parámetros de entrada.  
2. Devolverá un objeto con los métodos: `iniciar`, `pausar`, `resetear` y `obtenerTiempoRestante`.  
3. El estado (`duracionOriginal`, `tiempoRestante`, `callback`, `intervalId`, `estaActivo`) será privado.

**Espacio para tu solución:**

function crearTemporizadorSesion(duracionSegundos, callbackAlFinalizar) {

  // Tu código aquí

}

**Comportamiento Esperado (Ejemplo de uso):**

try {

  const miTimer \= crearTemporizadorSesion(5, () \=\> {

    console.log("¡TIEMPO FINALIZADO\! Cerrando sesión...");

  });

  console.log("Tiempo restante inicial:", miTimer.obtenerTiempoRestante()); // 5

  miTimer.iniciar(); // Temporizador iniciado: 5 segundos restantes.

  setTimeout(() \=\> {

    miTimer.pausar(); // Temporizador pausado. Tiempo restante: X segundos. (Depende de cuándo se ejecute)

    console.log("Pausado en:", miTimer.obtenerTiempoRestante());

  }, 2000); // Pausar después de 2 segundos

  setTimeout(() \=\> {

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

---

