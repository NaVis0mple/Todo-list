import { form } from './formEnter'
import { submitbutton, itemList,pushInList} from './add'


const content = document.getElementById('content')


// create a button to delete the list piece
function createDeleteButton (index) {
    const button = document.createElement('button')
    button.classList.add(`no${index}`)
    button.classList.add('delete')
    button.addEventListener('click', () => {
      itemList.splice(index,1)
      generateContent ()  
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
    generateContent()
    finishedList.push(x)
    console.log(finishedList)
    console.log(x)
  })
  return button
}



//render new content about itemList 
function createDiv (item,index) {
  const div = document.createElement('div')
  div.classList.add(`no${index}`)
  div.innerHTML = `${item.title}  ${item.description} ${item.date}`
  div.style.color = `${item.priorityT}`
  div.style.backgroundColor = `${item.priorityB}`
  return div
} 

function generateContent () {
    content.innerHTML = ''
  itemList.forEach((item,index) => {
    const div = createDiv(item,index)
    const deleteButton = createDeleteButton(index)
    const finishedButton = createFinishedButton(index)
    div.appendChild(finishedButton)
    div.appendChild(deleteButton)
    content.appendChild(div)  
})
}
//render finished list
function generateFinishedContent () {
  content.innerHTML = ''
  finishedList.forEach((item,index) => {
  const div = createDiv(item,index)
  content.appendChild(div)  
})
}


// main  home show todolist
submitbutton.addEventListener('click', () => {
  pushInList()
  generateContent ()
})

//render sidebar todo page
const sidebarTodoPage = document.querySelector('.todolist')
sidebarTodoPage.addEventListener('click',()=>{
  generateContent ()
})

//render sidebar done page
const sidebarDonePage = document.querySelector('.done')
sidebarDonePage.addEventListener('click',()=>{
  generateFinishedContent ()
})






const sidebarHistorypage = document.querySelector('.history')

