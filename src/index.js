import { form } from './formEnter'
import { submitbutton, itemList } from './add'


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
function generateContent () {
    content.innerHTML = ''
  itemList.forEach((item,index) => {
    const div1 = document.createElement('div')
    div1.classList.add(`no${index}`)
    div1.innerHTML = `${item.title}  ${item.description} ${item.date}`
    div1.style.color = `${item.priorityT}`
    div1.style.backgroundColor = `${item.priorityB}`
    const deleteButton = createDeleteButton(index)
    const finishedButton = createFinishedButton(index)
    div1.appendChild(finishedButton)
    div1.appendChild(deleteButton)
    content.appendChild(div1)  
})
}
//render finished list
function generateFinishedContent () {
  content.innerHTML = ''
  finishedList.forEach((item,index) => {
  const div1 = document.createElement('div')
  div1.classList.add(`no${index}`)
  div1.innerHTML = `${item.title}  ${item.description} ${item.date}`
  div1.style.color = `${item.priorityT}`
  div1.style.backgroundColor = `${item.priorityB}`
  content.appendChild(div1)  
})
}


// main  home show todolist
submitbutton.addEventListener('click', () => {
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

