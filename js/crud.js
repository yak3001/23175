// C: create
// R: read
// U: update
// D: delete

class Perro {

    constructor(nombre, color, edad) {
        this.nombre = nombre.toLowerCase()
        this.color = color.toLowerCase()
        this.edad = edad
    }

}

// Lista de perritos
const perritos = []

// Metodo que retorna la lista de perritos
const getAll = () => {
    return perritos;
}

// Metodo para agregar un perro a la lista
const create = (perrito) => {
    perritos.push(perrito)
}

// Metodo para hallar un perro por nombre
const findOne = (nombre) => {

    nombre = nombre.toLowerCase()

    const perro = perritos.find( perro => perro.nombre === nombre)

    if (!perro) {
        throw new Error(`No existe ${nombre}`)
    }

    return perro

}

// Metodo para eliminar un perrito :'(
const remove = (nombre) => {

    const perro = findOne(nombre)
    const index = perritos.indexOf(perro)
    perritos.splice( index, 1)

}


// Metodo para modificar un perrito
const update = (nombre, color) => {
    const perro = findOne(nombre)
    perro.color = color
}



// Paso 1
// crear un nuevo perro como instancia de la clase Perro
const perro1 = new Perro('Molo', 'marron', 1)
const perro2 = new Perro('Malena', 'negro', 25)
const perro3 = new Perro('Argos', 'negro', 20)
const perro4 = new Perro('Pacha', 'Marron', 15)

// Paso 2
// agregar perro1 a la lista
create(perro1)
create(perro2)
create(perro3)
create(perro4)

// Paso 3
// Busco un perro por su nombre
// console.log(findOne('argos'))


// Eliminar un perro por su nombre
remove('Argos')

// Actualizar el color de un perro 
// update('Argos', 'blanco')

// Obtener la lista completa de perros
console.log(getAll())