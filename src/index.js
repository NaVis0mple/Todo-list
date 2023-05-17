import { form } from './formEnter'
import { submitbutton, itemList } from './add'

// main  home show todolist
const content = document.getElementById('content')

submitbutton.addEventListener('click', () => {
    createContent ()
})
// create a button to delete the list piece
function createDeleteButton (index) {
    const button = document.createElement('button')
    content.appendChild(button)
    button.classList.add(`no.${index}`)
    button.addEventListener('click', () => {
      itemList.splice(index,1)
      createContent ()  
    })
  }
//render new content
function createContent () {
    content.innerHTML = ''
  itemList.forEach((item,index) => {
    const div1 = document.createElement('div')
    div1.classList.add(`no.${index}`)
    div1.innerHTML = `${item.title}  ${item.description} ${item.date}`
    div1.style.color = `${item.priorityT}`
    div1.style.border = `solid 1px ${item.priorityB}`
    div1.style.backgroundColor = `${item.priorityB}`
    content.appendChild(div1)
    createDeleteButton(index)
})
}