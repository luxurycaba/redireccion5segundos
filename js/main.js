        // Configuración de la redirección
        const redireccionarA = "https://wa.link/juegaygana";
        const tiempoTotal = 1; // Tiempo en segundos

        // Inicialización del contador
        let contador = tiempoTotal;
        const elementoContador = document.getElementById("contador");

        // Actualización del contador cada segundo
        const intervalo = setInterval(() => {
            contador--;
            elementoContador.textContent = contador;

            if (contador <= 0) {
                clearInterval(intervalo);
                window.location.href = redireccionarA;
            }
        }, 1000);