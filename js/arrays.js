//const arr = new Array(4)

const animales = ['gato', 'perro', 'elefante', 'cebra']

// Acceder a una posicion
// console.log(animales[0]);


// Iteración de arrays

// for

/*
for( let index = 0; index < animales.length; index++) {
    
    console.log(animales[index]);

}
*/

// for ... of

/*
for (const animal of animales) {
    console.log(animal);
}
*/

// length -> indica la longitud de un array
// console.log(animales.length)


// toString() -> para convertir en un string al array
//console.log(animales.toString());


// push -> para agregar elementos al array
animales.push('Leon')
animales.unshift('Cobra')
console.log(animales);


// join -> convierte los elementos de un array a un string, separados por el caracter indicado
// console.log(animales.join(';'));

// concat -> concatenar dos arrays

const frutas = ['uva', 'frutilla', 'manzana']
// console.log( animales.concat(frutas));


// slice -> genera un array de elementos desde y hasta los indices indicados
// console.log( animales.slice(1,4));


// indexOf
// console.log(animales.indexOf('Leon'));
// console.log(animales.indexOf('Ballena'));


// splice
// animales.splice(0, 2)


/// ej practico. Quiero borrar la cebra
// const indexCebra = animales.indexOf('cebra')
// animales.splice(indexCebra, 1)
// console.log(animales);


// forEach
animales.forEach( (elemento, index, array) => {
    console.log(elemento);
    console.log(index);
    console.log(array);
})