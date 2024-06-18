   while (true) {
        var opcion = prompt("¿Deseas comprar un juego o ver el catalogo? (escribe 'comprar' o 'catalogo')");

        if (opcion === 'catalogo') {
           
            var plataforma = prompt("¿Que plataforma prefieres? (ej. Xbox, PC, PlayStation)");

           
            
            var genero = prompt("¿Que tipo de juego buscas? (ej. accion, deporte, suspenso, estrategia)");

          
            mostrarJuegos(plataforma, genero);
            break;  
        } else if (opcion === 'comprar' || opcion === 'Comprar' || opcion === 'COMPRAR') {
            alert("la funcion de compra no esta disponible en este momento.");
            break;  
        } else {
            alert("Opción no válida. Por favor, selecciona 'comprar' o 'catalogo'.");
            
        }
    }


function mostrarJuegos(plataforma, genero) {
    var mensaje = "Juegos encontrados: ";

    if (plataforma === "Xbox" && genero === "accion") {
        mensaje += "- Halo Infinite, - Gears 5, ";
    }
    if (plataforma === "PlayStation" && genero === "deporte") {
        mensaje += "- FIFA 22";
    }
    if (plataforma === "PC" && genero === "estrategia") {
        mensaje += "- Civilization VI";
    }

    if (mensaje === "Juegos encontrados: ") {
        alert("No se encontraron juegos.");
    } else {
        
        mensaje = mensaje;
        alert(mensaje);
    }
}


