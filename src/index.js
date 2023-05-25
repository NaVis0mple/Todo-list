import { form, submitbutton } from './formEnter'
import _ from 'lodash'
import { undoList, pushInList, PushEditedPiece, getUndoList, setUndoList } from './add'
import { format, parseISO } from 'date-fns'
import {
  content,
  finishedList,
  setFinishedList,
  getFinishedList,
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
import { setStorage,getStorage } from './localstorage'
let pageStatusTodo = true
let sortStatus = 'title'
function setSortStatus (value){
  sortStatus = value
}

window.addEventListener('load',()=>{
  getStorage()
  generateContent(getShallowCopylist())
})

// when add a piece show todolist page
function generateLogic (){
  if (sortStatus === 'title'){
    setSortByTitleAsc(true)
    const sortByTitleList = createNewListSortByTitle(getUndoList())
    generateContent(sortByTitleList)
    setShallowCopyList(sortByTitleList)
    setSortByTitleAsc(false)
  }else if (sortStatus ==='date') {
    setSortByDateAsc(true)
    const sortByDateList = createNewListSortByDate(getUndoList())
    generateContent(sortByDateList)
    setShallowCopyList(sortByDateList)
    setSortByDateAsc(false)
  }else if (sortStatus==='description'){
    setSortByDescriptionAsc(true)
    const sortByDescriptionList = createNewListSortByDescription(getUndoList())
    generateContent(sortByDescriptionList)
    setShallowCopyList(sortByDescriptionList)
    setSortByDescriptionAsc(false)
  }else {
    generateContent(getUndoList())
    setShallowCopyList(getUndoList())
  }
}


submitbutton.addEventListener('click', () => {
  if (editStatus) {
    PushEditedPiece()
    generateLogic()
    setEditStatus(false)
    setStorage()
  } else {
    pushInList()
    generateLogic ()
    setStorage ()
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
  generateFinishedContent(getFinishedList())
})

// render  -sortbydate  to 2pages

const sortByDateButton = document.querySelector('.sortByDate')
sortByDateButton.addEventListener('click', () => {

  setSortStatus('date')
  const sortByTodo = createNewListSortByDate(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByDate(getFinishedList())
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
  setSortStatus('title')
  const sortByTodo = createNewListSortByTitle(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByTitle(getFinishedList())
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
  setSortStatus('description')
  const sortByTodo = createNewListSortByDescription(getUndoList())
  setShallowCopyList(sortByTodo)
  const sortByDone = createNewListSortByDescription(getFinishedList())
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  } else {
    generateFinishedContent(sortByDone)
  }
  setSortByDescriptionAsc(!sortByDescriptionAsc)
})