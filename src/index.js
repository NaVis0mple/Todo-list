import { form, submitbutton } from './formEnter'
import _ from 'lodash'
import { undoList, pushInList, PushEditedPiece, getUndoList, setUndoList } from './add'
import { format, parseISO } from 'date-fns'
import {
  content,
  finishedList,
  createDiv,
  createDeleteButton,
  createFinishedButton,
  createEditButton,
  generateContent,
  createNewListSortByDate,
  createNewListSortByTitle,
  createNewListSortByDescription,
  generateFinishedContent,
  sortByDateAsc,
  sortByTitleAsc,
  sortByDescriptionAsc,
  setSortByDateAsc,
  setSortByDescriptionAsc,
  setSortByTitleAsc,
  setEditStatus,
  editStatus,
  shallowCopyList,
  setShallowCopyList,
  getShallowCopylist,
  currentIndex
} from './listPrint'

let pageStatusTodo = true

// when add a piece show todolist page
submitbutton.addEventListener('click', () => {
  if (editStatus) {
    PushEditedPiece()
    generateContent(getUndoList())
    setShallowCopyList(getUndoList())
    setEditStatus(false)
  } else {
    pushInList()
    generateContent(getUndoList())
    setShallowCopyList(getUndoList())
  }
})

// render  todo page
const sidebarTodoPage = document.querySelector('.todolist')
sidebarTodoPage.addEventListener('click', () => {
  pageStatusTodo = true
  generateContent(getUndoList())
})

// render  done page
const sidebarDonePage = document.querySelector('.done')
sidebarDonePage.addEventListener('click', () => {
  pageStatusTodo = false
  generateFinishedContent(finishedList)
})

// render  -sortbydate  to 2pages
const sortByDateButton = document.querySelector('.sortByDate')
sortByDateButton.addEventListener('click', () => {
  const sortByTodo = createNewListSortByDate(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByDate(finishedList)
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  } else {
    generateFinishedContent(sortByDone)
  }
  setSortByDateAsc(!sortByDateAsc)
})

// render  -sortbyTitle  to 2pages
const sortByTitleButton = document.querySelector('.sortByTitle')
sortByTitleButton.addEventListener('click', () => {
  const sortByTodo = createNewListSortByTitle(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByTitle(finishedList)
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  } else {
    generateFinishedContent(sortByDone)
  }
  setSortByTitleAsc(!sortByTitleAsc)
})

// render  -sortbyDescription  to 2pages
const sortByDescriptionButton = document.querySelector('.sortByDescription')
sortByDescriptionButton.addEventListener('click', () => {
  const sortByTodo = createNewListSortByDescription(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByDescription(finishedList)
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  } else {
    generateFinishedContent(sortByDone)
  }
  setSortByDescriptionAsc(!sortByDescriptionAsc)
})
