alert("En NACE vas a encontrar lo mejor en indumentaria, a continuacíon te vamos a mostrar nuestro catálogo");

const categorias = [
    "pantalones",
    "remeras",
    "buzos"
];

const catalogo = {
    pantalones: {
        1: "Pantalones Ripped $8400",
        2: "Pantalones Black $7600",
        3: "Pantalones Mom $7500",
      },

    remeras: {
        1: "Remera Change $7500",
        2: "Remera Unknown $7800",
        3: "Remera Eternal $6200",
        4: "Remera Babygirl $6000",
        5: "Remera Caution $8200",
      },

    buzos: {
        1: "Buzo Onward $12600",
        2: "Buzo Trapstar $13200",
        3: "Buzo Love $11300",
        4: "Buzo Represent $14500"
    },
};

function mostrarCatalogoCategoria(categoria) {
    let mensaje = `Nuestro catálogo en "${categoria}":\n`;
    for (let num in catalogo[categoria]) {
      mensaje += `${num}. ${catalogo[categoria][num]}\n`;
    }
  
    const seleccion = parseInt(prompt(mensaje));
  
    if (seleccion >= 1 && seleccion <= Object.keys(catalogo[categoria]).length) {
      const productoElegido = catalogo[categoria][seleccion];
      return productoElegido;
    } else {
      alert("Número de producto no válido.");
      return null;
    }
  }
  
  function mostrarCarrito(carrito) {
    if (carrito.length === 0) {
      alert("El carrito de compras está vacío.");
    } else {
      let car = "Productos agregados a mi carrito:\n";
      for (let i = 0; i < carrito.length; i++) {
        car += `${i + 1}. ${carrito[i]}\n`;
      }
      alert(car);
    }
  }

  function filtrarPorPrecioMaximo(carrito, precioMaximo) {
    return carrito.filter(item => item.precio <= precioMaximo);
  }

  function busquedaOcarrito() {
    const carrito = [];
  
    while (true) {
      const categoria = prompt("Ingresa la categoría que buscas o ingresa la palabra `carrito` para ver los productos que tenes en tu carrito:");
      
      if (categoria === "carrito") {
        mostrarCarrito(carrito);
      } else if (catalogo[categoria]) {
        const productoElegido = mostrarCatalogoCategoria(categoria);
        if (productoElegido) {
          carrito.push(productoElegido);
          alert(`Has añadido "${productoElegido}" al carrito.`);
        }
      } else {
        alert("Categoría no encontrada.");
      }

    alert("A continuación podra filtrar sus productos dentro de su carrito por precio maximo");

    const precioMaximo = parseFloat(prompt("Ingresa el precio máximo para filtrar productos:"));
    if (!isNaN(precioMaximo)) {
      const productosFiltrados = filtrarPorPrecioMaximo(carrito, precioMaximo);
      alert(`Productos en el carrito con precio menor o igual a $${precioMaximo}:`);
      mostrarCarrito(productosFiltrados);
    } else {
      alert("Precio no válido. No se ha realizado ningún filtro.");
    }
  }
}

busquedaOcarrito();




















