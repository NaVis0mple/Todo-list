import { form } from './formEnter'
import { submitbutton, itemList } from './add'

// main  home show todolist
const content = document.getElementById('content')


// create a button to delete the list piece
function createDeleteButton (index) {
    const button = document.createElement('button')
    button.classList.add(`no${index}`)
    button.addEventListener('click', () => {
      itemList.splice(index,1)
      generateContent ()  
    })
    return button
  }
//render new content
function generateContent () {
    content.innerHTML = ''
  itemList.forEach((item,index) => {
    const div1 = document.createElement('div')
    div1.classList.add(`no${index}`)
    div1.innerHTML = `${item.title}  ${item.description} ${item.date}`
    div1.style.color = `${item.priorityT}`
    div1.style.backgroundColor = `${item.priorityB}`
    const deletebutton = createDeleteButton(index)
    div1.appendChild(deletebutton)
    content.appendChild(div1)
    
})
}


submitbutton.addEventListener('click', () => {
  generateContent ()
})