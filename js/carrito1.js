// VARIABLES
let nombreusuario;
let agregar = confirm("Hola! Bienvenido a mundotrail, comencemos!");
let total = 0;
let carrito = "";
let comenzar;

const producto1 = "remera";
const producto1Precio = 2000;
const producto2 = "pantalón";
const producto2Precio = 4000;
const producto3 = "Medias";
const producto3Precio = 1000;


//FUNCIONES 

nombreusuario = prompt('Ingresa tu nombre')

if (nombreusuario != '') {
    comenzar = prompt('Bienvenid@ ' + nombreusuario + ' al carrito de compras, desea agregar productos? Si/No')
} else {
    nombreusuario = prompt('Por favor ingresa tu nombre para continuar');
    comenzar = prompt('Bienvenid@ ' + nombreusuario + ' al carrito de compras, desea agregar productos? Si/No');
}


const esProductoValido = (producto) => {
    return producto === 1 || producto === 2 || producto === 3;
};

const esCantidadInvalida = (cantidad) => {
    return isNaN(cantidad) || cantidad <= 0;
};

const pedirProducto = () => {
    let productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
    while (!esProductoValido(productoElegido)) {
        alert("Producto desconocido. Ingrese el número de producto");
        productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
    }
    return productoElegido;
};

const pedirCantidad = () => {
    let cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
    while (esCantidadInvalida(cantidad)) {
        alert("Ingrese una cantidad válida");
        cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
    }
    return cantidad;
};

const mostrarCarrito = () => {
    let mensaje = "";
    carrito.forEach((producto) => {
        mensaje += `Producto: ${producto.nombre} $${producto.precio}\n`;
    });
    mensaje += `Total: $${total}`;
    alert(mensaje);
};

while (agregar) {
    const producto = pedirProducto();
    const cantidad = pedirCantidad();
    switch (producto) {
        case 1:
            carrito += `${cantidad}u. producto: ${producto1}\n`;
            total += producto1Precio * cantidad;
            break;
        case 2:
            carrito += `${cantidad}u. producto: ${producto2}\n`;
            total += producto2Precio * cantidad;

            break;
        case 3:
            carrito += `${cantidad}u. producto: ${producto3}\n`;
            total += producto3Precio * cantidad;

            break;
    }
    agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
    let mensaje = carrito + `Total: $${total}`;
    alert(mensaje);
} else {
    alert("¡Qué tengas un buen día!");
}