/*
// Funcion constructora
function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;

}

// Instaciación
const persona7 = new Persona('Mauricio', 19)

*/

class Producto {

    constructor( nombre, precio, enStock) {
    
        this.nombre = nombre;
        this.precio = precio;
        this.enStock = enStock;

    }

    getPrecioConIva() {
        return this.precio * 1.21
    }

    getPrecio() {
        return this.precio
    }

}

const producto1 = new Producto('Fernet', 500)

console.log(producto1.getPrecio());
console.log(producto1.getPrecioConIva())
