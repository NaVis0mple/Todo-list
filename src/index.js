import { form } from "./formEnter";
import { submitbutton ,itemList } from "./add";


//main  home show todolist
const content = document.getElementById('content')
submitbutton.addEventListener('click',()=>{ 
    content.innerHTML = ''
    itemList.forEach(item=>{
        const div1 = document.createElement('div')
        div1.innerHTML = `${item.title}  ${item.description} ${item.date}`
        div1.style.color = `${item.priorityT}`
        div1.style.border = `solid 1px ${item.priorityB}`
        div1.style.backgroundColor = `${item.priorityB}`

        content.appendChild(div1)
    })
})


