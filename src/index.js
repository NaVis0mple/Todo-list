import { form } from './formEnter'
import { submitbutton, itemList,pushInList} from './add'
import { format, parseISO } from 'date-fns'


const content = document.getElementById('content')
let sortByDateAsc = false
let sortBytitleAsc = false
let pageStatusTodo = true
let pageStatusDone = false


// create a button to delete the list piece
function createDeleteButton (index) {
    const button = document.createElement('button')
    button.classList.add(`no${index}`)
    button.classList.add('delete')
    button.addEventListener('click', () => {
      itemList.splice(index,1)
      generateContent (itemList)  
    })
    return button
  }
//create a finished button,if click move list piece to done page
const finishedList = []
function createFinishedButton (index)  {
  const button = document.createElement('button')
  button.classList.add(`no${index}`)
  button.classList.add('finished')
  button.addEventListener('click',()=>{
    const x = itemList.splice(index,1)[0] || {}
    finishedList.push(x)
    generateContent(itemList)
  })
  return button
}



//create a div to print value 
function createDiv (item,index) {
  const div = document.createElement('div')
  div.classList.add(`no${index}`)
  div.innerHTML = `${item.title}  ${item.description} ${item.date}`
  div.style.color = `${item.priorityT}`
  div.style.backgroundColor = `${item.priorityB}`
  return div
} 

//generate with deleted and finished button
function generateContent (list) {
    content.innerHTML = ''
    list.forEach((item,index) => {
    const div = createDiv(item,index)
    const deleteButton = createDeleteButton(index)
    const finishedButton = createFinishedButton(index)
    div.appendChild(finishedButton)
    div.appendChild(deleteButton)
    content.appendChild(div)  
})
}
//generate finished list (without button)
function generateFinishedContent (list) {
  content.innerHTML = ''
  list.forEach((item,index) => {
  const div = createDiv(item,index)
  content.appendChild(div)  
})
}

//generate  -sortbydate
function generateContentSortByDate (list) {
  const shallowcopy = [...list].sort((a,b)=>{
    const dateA = new Date(a.date)
    const dateB = new Date (b.date)
    return sortByDateAsc ? dateB-dateA : dateA-dateB
  })
  return shallowcopy
}
//generate -sortbytitle 
function generateContentSortByTitle (list) {
  content.innerHTML = ''
  const shallowcopy = [...list].sort((a,b)=>{
    const titleA = a.title
    const titleB = b.title
    return sortBytitleAsc ? titleB-titleA : titleA-titleB
  })
  generateContent(shallowcopy)
}



// main  home show todolist
submitbutton.addEventListener('click', () => {
  pushInList()
  generateContent (itemList)
})

//render sidebar todo page
const sidebarTodoPage = document.querySelector('.todolist')
sidebarTodoPage.addEventListener('click',()=>{
  pageStatusTodo = true
  sortByDateAsc = true
  generateContent (itemList)
})

//render sidebar done page
const sidebarDonePage = document.querySelector('.done')
sidebarDonePage.addEventListener('click',()=>{
  pageStatusTodo = false
  sortByDateAsc = true
  generateFinishedContent (finishedList)
})

//render todolist -sortbydate 
const sortByDateButton = document.querySelector('.sortByDate')
sortByDateButton.addEventListener('click',()=>{
  const sortByTodo = generateContentSortByDate(itemList)
  const sortByDone = generateContentSortByDate(finishedList)
  if (pageStatusTodo) {
    generateContent(sortByTodo)
  }else {
    generateFinishedContent(sortByDone)
  }
  sortByDateAsc =!sortByDateAsc
})

const sidebarHistorypage = document.querySelector('.history')

