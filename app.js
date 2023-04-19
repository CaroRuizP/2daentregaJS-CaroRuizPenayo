let carrito = []; 


function cargarUnProducto() {

    const nuevoProducto = new Producto();
    nuevoProducto.marca = prompt('Ingresá la Marca del Producto');
    nuevoProducto.precio = Number(prompt('Ingresá su Precio'));
    nuevoProducto.cantidad = Number(prompt('Cuantas unidades?'));

    return nuevoProducto;
}

const cargarProducto = () => {
    let seguir;
    let nuevoProducto;
    do {
        nuevoProducto= cargarUnProducto();
        carrito.push(nuevoProducto); 
        seguir = prompt('Desea ingresar otro Producto si/no');

    }while (seguir == 'si');
}

function mostrarCarrito() {
    let ticket = '';
    let totalTicket = 0;
        carrito.forEach((producto) => {
            ticket = ticket + `precio: ${producto.precio} \n cantidad: ${producto.cantidad} \n marca: ${producto.marca} \n subtotal: ${producto.subTotal()} \n\n`;
        });

    totalTicket = carrito.reduce((total,producto) => {
        return total + producto.subTotal();
    },0);

    alert(ticket + `Total: ${totalTicket}`);
}

cargarProducto();
mostrarCarrito();