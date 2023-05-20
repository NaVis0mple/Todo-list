import { itemList } from './add'

// the toggle status need to use function to export
export let sortByDateAsc = false
export let sortByTitleAsc = false
export let sortByDescriptionAsc = false

export function setSortByDateAsc (value) {
  sortByDateAsc = value
}
export function setSortByTitleAsc (value) {
  sortByTitleAsc = value
}
export function setSortByDescriptionAsc (value) {
  sortByDescriptionAsc = value
}

// create a button to delete the list piece
export const content = document.getElementById('content')
export function createDeleteButton (index) {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('delete')
  button.addEventListener('click', () => {
    itemList.splice(index, 1)
    generateContent(itemList)
  })
  return button
}

// create a finished button,if click move list piece to done page
export const finishedList = []
export function createFinishedButton (index) {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('finished')
  button.addEventListener('click', () => {
    const x = itemList.splice(index, 1)[0] || {}
    finishedList.push(x)
    generateContent(itemList)
  })
  return button
}

// create a div to print value
export function createDiv (item, index) {
  const div = document.createElement('div')
  div.classList.add(`no${index}`)
  div.innerHTML = `${item.title}  ${item.description} ${item.date}`
  div.style.color = `${item.priorityT}`
  div.style.backgroundColor = `${item.priorityB}`
  return div
}

// generate with deleted and finished button
export function generateContent (list) {
  content.innerHTML = ''
  list.forEach((item, index) => {
    const div = createDiv(item, index)
    const deleteButton = createDeleteButton(index)
    const finishedButton = createFinishedButton(index)
    div.appendChild(finishedButton)
    div.appendChild(deleteButton)
    content.appendChild(div)
  })
}

// generate finished list (without button)
export function generateFinishedContent (list) {
  content.innerHTML = ''
  list.forEach((item, index) => {
    const div = createDiv(item, index)
    content.appendChild(div)
  })
}

// generate  -sortbydate
export function generateContentSortByDate (list) {
  const shallowCopy = [...list].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return sortByDateAsc ? dateA - dateB : dateB - dateA
  })
  return shallowCopy
}

// generate -sortbytitle
export function generateContentSortByTitle (list) {
  content.innerHTML = ''
  const shallowCopy = [...list].sort((a, b) => {
    const titleA = a.title
    const titleB = b.title
    return sortByTitleAsc ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB)
  })
  return shallowCopy
}

// generate -sortbyDescription
export function generateContentSortByDescription (list) {
  content.innerHTML = ''
  const shallowCopy = [...list].sort((a, b) => {
    const descriptionA = a.description
    const descriptionB = b.description
    return sortByDescriptionAsc ? descriptionB.localeCompare(descriptionA) : descriptionA.localeCompare(descriptionB)
  })
  return shallowCopy
}
