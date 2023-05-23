import _ from 'lodash'
import { itemList } from './add'
import { callAddList, titleInput, descriptionInput, dateInput, priorityTextInput, priorityBackgroundInput } from './formEnter'
// the toggle status need to use function to export
export let sortByDateAsc = false
export let sortByTitleAsc = false
export let sortByDescriptionAsc = false
export let currentIndex
export let editStatus = false
export let shallowCopyList = []
export function setShallowCopyList (value) {
  shallowCopyList = [...value]
}
export function getShallowCopylist () {
  return shallowCopyList
}
export function setSortByDateAsc (value) {
  sortByDateAsc = value
}
export function setSortByTitleAsc (value) {
  sortByTitleAsc = value
}
export function setSortByDescriptionAsc (value) {
  sortByDescriptionAsc = value
}
export function setEditStatus (value) {
  editStatus = value
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

// create edit button ,if click edit the list piece

export function createEditButton (index) {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('edit')
  button.addEventListener('click', (e) => {
    callAddList()
    currentIndex = index
    // show origin value in form input
    const list = getShallowCopylist()
    titleInput.value = list[currentIndex].title
    descriptionInput.value = list[currentIndex].description
    dateInput.value = list[currentIndex].date
    priorityTextInput.value = list[currentIndex].priorityT
    priorityBackgroundInput.value = list[currentIndex].priorityB
    setEditStatus(true)
  })

  return button
}

// create a div to print value
export function createDiv (item, index) {
  const div = document.createElement('div')
  div.classList.add(`no${index}`)
  div.classList.add('listContainer')
  const titleDiv = document.createElement('div')
  const descriptionDiv = document.createElement('div')
  const dateDiv = document.createElement('div')
  div.append(titleDiv, descriptionDiv, dateDiv)
  titleDiv.innerHTML = `${item.title}`
  descriptionDiv.innerHTML = `${item.description}`
  dateDiv.innerHTML = `${item.date}`
  titleDiv.classList.add('title')
  titleDiv.title = `${item.title}`
  descriptionDiv.classList.add('description')
  dateDiv.classList.add('date')
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
    const editButton = createEditButton(index)
    div.appendChild(editButton)
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
  const List = [...list].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return sortByDateAsc ? dateA - dateB : dateB - dateA
  })
  return List
}

// generate -sortbytitle
export function generateContentSortByTitle (list) {
  content.innerHTML = ''
  const List = [...list].sort((a, b) => {
    const titleA = a.title
    const titleB = b.title
    return sortByTitleAsc ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB)
  })
  return List
}

// generate -sortbyDescription
export function generateContentSortByDescription (list) {
  content.innerHTML = ''
  const List = [...list].sort((a, b) => {
    const descriptionA = a.description
    const descriptionB = b.description
    return sortByDescriptionAsc ? descriptionB.localeCompare(descriptionA) : descriptionA.localeCompare(descriptionB)
  })
  return List
}
