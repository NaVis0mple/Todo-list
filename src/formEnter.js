import { format, parseISO } from 'date-fns'
import flatpickr from 'flatpickr'

// create a form to user input
const form = document.createElement('div')
form.classList.add('form')

// Input and Label
const titleInput = document.createElement('input')
titleInput.id = 'title'
titleInput.type = 'text'
const titleLabel = document.createElement('label')
titleLabel.textContent = 'title'
titleLabel.htmlFor = 'title'
form.appendChild(titleLabel)
form.appendChild(titleInput)

const descriptionInput = document.createElement('input')
descriptionInput.id = 'description'
descriptionInput.type = 'text'
const descriptionLabel = document.createElement('label')
descriptionLabel.textContent = 'description'
descriptionLabel.htmlFor = 'description'
form.appendChild(descriptionLabel)
form.appendChild(descriptionInput)

const dateInput = document.createElement('input')
dateInput.id = 'date'
const fp = flatpickr(dateInput, {})
const dateLabel = document.createElement('label')
dateLabel.textContent = 'DueDate'
dateLabel.htmlFor = 'date'
form.appendChild(dateLabel)
form.appendChild(dateInput)

const priorityTextInput = document.createElement('input')
priorityTextInput.id = 'priorityText'
priorityTextInput.type = 'color'
const priorityTextLabel = document.createElement('label')
priorityTextLabel.textContent = 'textColor'
priorityTextLabel.htmlFor = 'priorityText'
form.appendChild(priorityTextLabel)
form.appendChild(priorityTextInput)

const priorityBackgroundInput = document.createElement('input')
priorityBackgroundInput.id = 'priorityBackground'
priorityBackgroundInput.type = 'color'
const priorityBackgroundLabel = document.createElement('label')
priorityBackgroundLabel.textContent = 'backgroundColor'
priorityBackgroundLabel.htmlFor = 'priorityBackground'
form.appendChild(priorityBackgroundLabel)
form.appendChild(priorityBackgroundInput)

const styleshowcase = document.createElement('div')
titleInput.addEventListener('input',(e)=>{
  styleshowcase.textContent = e.target.value
  showcasecolor()
})
form.appendChild(styleshowcase)

const showcasecolor = () => {
  styleshowcase.style.color = `${priorityTextInput.value}`
  styleshowcase.style.backgroundColor = `${priorityBackgroundInput.value}`
}
priorityBackgroundInput.addEventListener('input', () => showcasecolor())
priorityTextInput.addEventListener('input', () => showcasecolor())

// submitbutton
const submitbutton = document.createElement('button')
submitbutton.textContent = 'done'
form.appendChild(submitbutton)

// form hide toggle
const addlistbutton = document.querySelector('.addlist')
addlistbutton.addEventListener('click', () => {
  form.classList.toggle('hideform')
  document.body.appendChild(form)
})

export { form, submitbutton, titleInput, descriptionInput, dateInput, priorityTextInput, priorityBackgroundInput }

// maybe add function to add input?
