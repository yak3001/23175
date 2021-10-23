const renderMessage = (message) => {
    const element = document.createElement('p')
    element.innerHTML = `
                           ${message}
                        `
    document.body.prepend(element)
}

const logger = (message) => {
    console.log(message)
}

export {
    renderMessage,
    logger
}
