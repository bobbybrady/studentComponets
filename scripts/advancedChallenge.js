const toHTML = document.querySelector(`#messages`)
const fragment = document.createDocumentFragment()
let messages = [`Are we doing fireworks this year?`, `After last year's "tree incident", should we?`, `The fire fighters put it out in like a minute. Wasn't even a real fire.`, `We can set them off in the street.`, `Our neighbors' houses are flammable, too`]
const createSection1 = (array) => {
    array.forEach(message => {
        const section = document.createElement('section')
        section.className = "message"
        section.textContent = message
        fragment.appendChild(section)
        
    });
    toHTML.appendChild(fragment)
}
createSection1(messages)