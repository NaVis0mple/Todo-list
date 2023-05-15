import { form,submitbutton,titleInput,dateInput,descriptionInput,priorityInput} from "./formEnter"


const itemList = []
function additem (t,d,da,p) {
    const title = {title:t}
    const description = {description:d}
    const date ={date:da}
    const priority ={priority:p}


    return Object.assign({},title,description,date,priority)
}
submitbutton.addEventListener('click',()=>{
    const x = additem(titleInput.value,descriptionInput.value,dateInput.value,priorityInput.value)
    
    itemList.push(x)
    console.log(x)
    console.log(itemList)
})


export {submitbutton,itemList}