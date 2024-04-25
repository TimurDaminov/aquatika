function createElement(tag = 'div', text = '', classList = [], attrs = {}) {
    let element = document.createElement(tag)
    element.classList.add(...classList)
    element.textContent = text
    for (const prop in attrs) {
        element[prop] = attrs[prop]
    }
    return element
}

const checkboxValues = [
    {
        text: 'Обучение дайвингу',
        value: '1',
        type: 'radio',
        name: 'checkbox',
        checked: true
    },
    {
        text: 'Подарочный сертификат',
        value: '2',
        type: 'radio',
        name: 'checkbox',
        checked: false
    },
    {
        text: 'Консультация',
        value: '3',
        type: 'radio',
        name: 'checkbox',
        checked: false
    }
]

const modalAnim = gsap.timeline()
    .pause()
    .fromTo('#feedback-modal', {visibility: 'hidden', opacity: 0}, {visibility: 'visible', opacity: 1, duration: .5})

const openBtn = document.getElementById('feedback-open')
const closeBtn = document.getElementById('feedback-close')
const modal = document.getElementById('feedback-modal')
openBtn.addEventListener('click', () => {
    modalAnim.play()
})

const heroModal = document.getElementById('hero-open')
heroModal.addEventListener('click', () => {
    modalAnim.play()
})

closeBtn.addEventListener('click', () => {
    modalAnim.reverse()
})
// Checkbox
const checkboxCont = document.getElementById('feedback-checkbox')

function createChecbox(array, values) {
    for (const item of values) {
        const label = createElement('label', '', ['feedback__checkbox'])
        const input = createElement('input', '', ['feedback__check'], {'value': item.value, 'name': item.name, 'type': item.type, 'id': item.name, 'checked': item.checked})
        const text = createElement('span', item.text, ['feedback__text'])
        const check = createElement('span', '', ['feedback__check-span'])
        text.append(check)
        label.append(input, text)
        array.append(label)
    }
}

const modalCompleteAnim = gsap.timeline()
    .pause()
    .fromTo('.feedback__descr', {opacity: 0}, {opacity: 1, duration: .5})

const submitForm = document.getElementById('feedback-submit')
submitForm.addEventListener('click', (event) => {
    event.preventDefault()
    modalCompleteAnim.play()
})

createChecbox(checkboxCont, checkboxValues)