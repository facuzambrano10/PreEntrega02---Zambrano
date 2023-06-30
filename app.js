let inicio;
let subtotal = 0;
let precioFinal = 0;

class Producto {
  constructor(categoria, nombre, precio) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
   
  }
}

class Factura {
  constructor(nombre, precio, cantidad, subtotal) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
  }
}

const catalogo = [
  new Producto('Hoodies', 'Black Hoodie', 22000,),
  new Producto('Pantalones', 'Cargo', 14000,),
  new Producto('Remeras', 'Remeron', 10000, ),
  new Producto('Accesorios', 'Gorra', 4500, ),
  new Producto('Zapatillas', 'Vans', 32000, ),
];

const arrayItems = [];




//funciones 

function productosTotal(precio, cantidad) {
  return precio * cantidad;
}

function carrito() {
  let eleccion = parseInt(prompt('Elija un producto:\n' + catalogo.map((producto, index) => `${index + 1} - ${producto.nombre}: $${producto.precio}`).join('\n')));
  
  while (eleccion <= 0 || eleccion > catalogo.length) {
    eleccion = parseInt(prompt('Producto inexsistente. Elija otro producto:\n' + catalogo.map((producto, index) => `${index + 1} - ${producto.nombre}: $${producto.precio}`).join('\n')));
  }
  
  let cantidad = parseInt(prompt('Introduzca la cantidad que quiere llevar:'));
  
  while (isNaN(cantidad) || cantidad < 0) {
    cantidad = parseInt(prompt('El valor ingresado no es válido. Introduzca la cantidad que desea llevar:'));
  }
  
  const productoSeleccionado = catalogo[eleccion - 1];
  const subtotal = productosTotal(productoSeleccionado.precio, cantidad);
  const nuevoItem = new Factura(productoSeleccionado.nombre, productoSeleccionado.precio, cantidad, subtotal);
  
  arrayItems.push(nuevoItem);
  precioFinal += subtotal;

  let seguir = prompt('Producto agregado al carrito. ¿Seguir comprando?');
  comenzar(seguir);
}

function comenzar(respuesta) {
  respuesta = respuesta.toLowerCase();
  
  while (respuesta !== 'no' && respuesta !== 'si') {
    respuesta = prompt('Valor ingresado no válido. Inténtelo nuevamente con si o no:');
    respuesta = respuesta.toLowerCase();
  }
  
  if (respuesta === 'si') {
    carrito();
  } else {
    const stringFactura = arrayItems.map((item, index) => `${index + 1} - Producto: ${item.nombre} | Precio: $${item.precio} | Cantidad: ${item.cantidad} | Subtotal: $${item.subtotal}`);
    
    alert('TICKET DE COMPRA\n\n' + stringFactura.join('\n\n')+ '\n\n' + 'Total a pagar = $' + precioFinal + '.');  
    }
}

inicio = prompt('Bienvenido al carrito de compras. ¿Desea continuar?');
comenzar(inicio);