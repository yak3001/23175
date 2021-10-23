// C: create
// R: read
// U: update
// D: delete

class Perro {

    constructor(id, nombre, color, edad) {
        this.id = id
        this.nombre = nombre.toLowerCase()
        this.color = color.toLowerCase()
        this.edad = edad
    }

}

// Lista de perritos
let perritos = JSON.parse(localStorage.getItem('perritos')) || []


// Metodo que retorna la lista de perritos
const getAll = () => {
    return perritos;
}

// Metodo para agregar un perro a la lista
const create = (perrito) => {
    perritos.push(perrito)
    localStorage.setItem('perritos', JSON.stringify(perritos))
}

// Metodo para hallar un perro por id
const findOne = (id) => {

    const perro = perritos.find( perro => perro.id === id)

    if (!perro) {
        throw new Error(`No existe el perro de id #${id}`)
    }

    return perro

}

// Metodo para eliminar un perrito :'(
const remove = (id) => {

    const perro = findOne(id)
    const index = perritos.indexOf(perro)
    perritos.splice( index, 1)
    localStorage.setItem('perritos', JSON.stringify(perritos))

}


// Metodo para modificar un perrito
const update = (nombre, color) => {
    const perro = findOne(nombre)
    perro.color = color
}



// Obtener elmentos del DOM
const listaPerros = document.getElementById('lista-perros')
const formPerro = document.getElementById('form-perro')
const inputIdPerro = document.getElementById('input-id-perro')
const inputNombrePerro = document.getElementById('input-nombre-perro')
const inputColorPerro = document.getElementById('input-color-perro')
const inputEdadPerro = document.getElementById('input-edad-perro')

// Agregar perritos a la lista de perros para el browser

const renderPerritosList = () => {

    for (let perro of perritos) {

        let itemPerro = document.createElement('li')

        itemPerro.innerHTML = `
                                El nombre del perro es ${perro.nombre}
                                <span style="cursor:pointer" id="${perro.id}">x</span>
                                `

        listaPerros.appendChild(itemPerro)

        // TODO: desacoplar
        itemPerro.onclick = () => {
            remove(perro.id)
            document.location.reload()
        }
    }
}


renderPerritosList()

// Escuchar el evento submit del formulario
formPerro.addEventListener('submit', (event) => {
    // event.preventDefault()
    // console.log(event)
    // console.log("aca tengo que agregar el perro")

    const id = inputIdPerro.value
    const nombre = inputNombrePerro.value
    const color = inputColorPerro.value
    const edad = inputEdadPerro.value

    const perro = new Perro(id, nombre, color, edad)

    create(perro)


})
