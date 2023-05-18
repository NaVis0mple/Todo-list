import { form, submitbutton, titleInput, dateInput, descriptionInput, priorityBackgroundInput, priorityTextInput } from './formEnter'

const itemList = []
function additem (t, d, da, pt, pb) {
  const title = { title: t }
  const description = { description: d }
  const date = { date: da }
  const priorityT = { priorityT: pt }
  const priorityB = { priorityB: pb }

  return Object.assign({}, title, description, date, priorityT, priorityB)
}
    
function pushInList () {
  if (titleInput.value === '') {
    titleInput.classList.add('invalid')
    return
  }else {titleInput.classList.remove('invalid')}
  const x = additem(titleInput.value, descriptionInput.value, dateInput.value, priorityTextInput.value, priorityBackgroundInput.value)
  itemList.push(x)

  return itemList
}
export { submitbutton, itemList ,pushInList }
