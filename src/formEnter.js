import {  format, parseISO } from "date-fns"
import flatpickr from "flatpickr"

//create a form to user input
const form = document.createElement('div')
form.classList.add('form')


//Input and Label
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
const fp = flatpickr(dateInput,{})
const dateLabel = document.createElement('label')
dateLabel.textContent = 'DueDate'
dateLabel.htmlFor = 'date'
form.appendChild(dateLabel)
form.appendChild(dateInput)

const priorityInput = document.createElement('input')
priorityInput.id = 'priority'
priorityInput.type = 'color'
const priorityLabel = document.createElement('label')
priorityLabel.textContent = 'priority'
priorityLabel.htmlFor = 'priority'
form.appendChild(priorityLabel)
form.appendChild(priorityInput)

//button
const submitbutton = document.createElement('button')
submitbutton.textContent = 'done'
form.appendChild(submitbutton)

export {form ,submitbutton,titleInput,descriptionInput,dateInput,priorityInput}



//maybe add function to add input?