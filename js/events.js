const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

console.log(btn1)

// Primera opción
btn1.addEventListener('click', () => {
    console.log('Hiciste click - Opcion1')
})

// Segunda opción
btn2.onclick = () => {
    console.log('Hiciste click - Opcion2')
}

const form = document.getElementById('form')
const inputName = document.getElementById('input-name')
const checkBox = document.getElementById('check-box')

let gustaMate = false

/*
checkBox.onchange = () => {
    gustaMate = !gustaMate
    console.log(`Gusta mate: ${gustaMate}`)
}
*/

form.onsubmit = (event) => {
    event.preventDefault()

    let message
    let name = inputName.value

    // console.log(checkBox.checked)

    if (checkBox.checked) {
        message = `A ${name} le gusta el mate`
    } else {
        message = `A ${name} NO le gusta el mate`
    }
    alert(message)
}

// Eventos del mouse
btn3.onmouseleave = () => {
    console.log('No te vayas chavo')
    btn3.className = 'btn-rojo'

}

btn3.onmouseover = () => {
    console.log('Has vuelto!')
    btn3.className = 'btn-azul'
}

inputName.onkeydown = (event) => {
    console.log(event.key)
    console.log(' Presionaste una tecla')
}

inputName.onkeyup = () => {
    console.log('Levantaste el dedo')
}

inputName.onfocus = () => {
    inputName.placeholder = ''
    console.log('On focus!')
}

inputName.onblur = () => {
    if (inputName.value.length < 4) {
        console.log('El nombre debe tener al menos cuatro caracteres')
    }
}
