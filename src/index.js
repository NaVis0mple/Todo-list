import { form } from './formEnter'
import { submitbutton, itemList, pushInList } from './add'
import { format, parseISO } from 'date-fns'
import {
  content,
  finishedList,
  createDiv,
  createDeleteButton,
  createFinishedButton,
  generateContent,
  generateContentSortByDate,
  generateContentSortByTitle,
  generateContentSortByDescription,
  generateFinishedContent,
  sortByDateAsc,
  sortByTitleAsc,
  sortByDescriptionAsc,
  setSortByDateAsc,
  setSortByDescriptionAsc,
  setSortByTitleAsc
} from './listPrint'

let pageStatusTodo = true

// when add a piece show todolist page
submitbutton.addEventListener('click', () => {
  pushInList()
  generateContent(itemList)
})

// render  todo page
const sidebarTodoPage = document.querySelector('.todolist')
sidebarTodoPage.addEventListener('click', () => {
  pageStatusTodo = true
  setSortByDateAsc(true)
  generateContent(itemList)
})

// render  done page
const sidebarDonePage = document.querySelector('.done')
sidebarDonePage.addEventListener('click', () => {
  pageStatusTodo = false
  setSortByDateAsc(true)
  generateFinishedContent(finishedList)
})

// render  -sortbydate  to 2pages
const sortByDateButton = document.querySelector('.sortByDate')
sortByDateButton.addEventListener('click', () => {
  const sortByTodo = generateContentSortByDate(itemList)
  const sortByDone = generateContentSortByDate(finishedList)
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
  const sortByTodo = generateContentSortByTitle(itemList)
  const sortByDone = generateContentSortByTitle(finishedList)
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
  const sortByTodo = generateContentSortByDescription(itemList)
  const sortByDone = generateContentSortByDescription(finishedList)
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  } else {
    generateFinishedContent(sortByDone)
  }
  setSortByDescriptionAsc(!sortByDescriptionAsc)
})
