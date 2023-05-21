import flatpickr from 'flatpickr'

// create a form to user input
const form = document.createElement('div')
form.classList.add('form')

// create Input and Label function
const createInput = (id, type) => {
  const input = document.createElement('input')
  input.id = id
  input.type = type
  return input
}
const createLabel = (htmlFor) => {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  return label
}

const titleInput = createInput('title', 'text')
const titleLabel = createLabel('title')
form.appendChild(titleLabel)
form.appendChild(titleInput)

const descriptionInput = createInput('description', 'text')
const descriptionLabel = createLabel('description')
form.appendChild(descriptionLabel)
form.appendChild(descriptionInput)

const dateInput = createInput('date', 'text')
const fp = flatpickr(dateInput, {})
const dateLabel = createLabel('date')
form.appendChild(dateLabel)
form.appendChild(dateInput)

const priorityTextInput = createInput('priorityText', 'color')

const priorityTextLabel = createLabel('priorityText')
form.appendChild(priorityTextLabel)
form.appendChild(priorityTextInput)

const priorityBackgroundInput = createInput('priorityBackground', 'color')

const priorityBackgroundLabel = createLabel('priorityBackground')
form.appendChild(priorityBackgroundLabel)
form.appendChild(priorityBackgroundInput)

// showcase control
const styleshowcase = document.createElement('span')
priorityTextInput.value = '#00FF59'
priorityTextInput.value = '#000000'

styleshowcase.innerHTML = 'preview'
form.appendChild(styleshowcase)

titleInput.addEventListener('input', (e) => {
  styleshowcase.textContent = e.target.value
  showcasecolor()
})

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
  document.getElementById('dropdowncontainer').appendChild(form)
})

export { form, submitbutton, titleInput, descriptionInput, dateInput, priorityTextInput, priorityBackgroundInput }

// for me : There is moudle https://www.ag-grid.com/javascript-data-grid/getting-started/ can give a try
