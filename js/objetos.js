
// Crear objeto a partir de la instanciación de Object
const persona1 = new Object({
    nombre: 'Andres'
})


// Literal
const persona2 = {

    // Propiedades
    nombre: 'Andres',
    edad: 25,

    // Metodo
    saludar: function () {
        console.log('Hola, qué tal?')
    }
}


// Operador in
console.log('nombre' in persona2)
console.log('apellido' in persona2)


// for... in
for(const prop in persona2) {
    console.log(prop)
}

console.log(Object.getOwnPropertyNames(persona2))

/*
console.log(typeof persona1)
console.log(typeof persona2)

console.log(persona1)
*/

/*
console.log(persona2)


// Accediendo propiedades

// Ntacion de punto
console.log(persona2.edad)

// Notación de corchetes
console.log(persona2['nombre'])

// Ejecutar un método
persona2.saludar()

persona2.profesion = 'Desarrollador'
// persona2['profesion'] = 'Desarrollador'

console.log(persona2)

*/

// Funcion constructora
function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;

}

// let nombre = prompt('Pone tu nombre')
// let edad = prompt('Pone tu edad')

const persona7 = new Persona('Mauricio', 19)
const persona8 = new Persona('Roger', 23)

console.log(persona7)
console.log(persona8)

