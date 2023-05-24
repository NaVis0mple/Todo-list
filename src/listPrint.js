import _ from 'lodash'
import { undoList, getUndoList, setUndoList } from './add'
import { callAddList, titleInput, descriptionInput, dateInput, priorityTextInput, priorityBackgroundInput } from './formEnter'
import { setStorage } from './localstorage'
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
export let finishedList = []
export function setFinishedList (newList) {
  finishedList = [...newList]
}
export function getFinishedList () {
  return finishedList
}
// create a button to delete the undolist piece
export const content = document.getElementById('content')
export function createDeleteButton (index) {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('delete')
  button.addEventListener('click', () => {
    getUndoList().splice(index, 1)
    setUndoList(getUndoList())
    generateContent(getUndoList())
    setStorage()
  })
  return button
}

// create a finished button to move undolist piece to finishedlist
export function createFinishedButton (index) {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('finished')
  button.addEventListener('click', () => {
    const x = getUndoList().splice(index, 1)[0]
    getFinishedList().push(x)
    setUndoList(getUndoList())
    generateContent(getUndoList())
    setStorage()
  })
  return button
}

// create edit button to call addlist and show undolist piece in form input
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
    setStorage()
  })

  return button
}

// create div'listContainer' ,and print each object from list
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

// generate with deleted and finished and edit button
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

//  create a new list to sort the given list
export function createNewListSortByDate (list) {
  const List = [...list].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return sortByDateAsc ? dateA - dateB : dateB - dateA
  })
  return List
}

export function createNewListSortByTitle (list) {
  const List = [...list].sort((a, b) => {
    const titleA = a.title
    const titleB = b.title
    return sortByTitleAsc ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB)
  })
  return List
}

export function createNewListSortByDescription (list) {
  const List = [...list].sort((a, b) => {
    const descriptionA = a.description
    const descriptionB = b.description
    return sortByDescriptionAsc ? descriptionB.localeCompare(descriptionA) : descriptionA.localeCompare(descriptionB)
  })
  return List
}
