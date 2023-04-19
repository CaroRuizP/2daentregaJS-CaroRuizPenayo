class Producto{
    
    precio;
    cantidad;
    marca;


    subTotal = () => {
        return this.precio*this.cantidad;
    }

}