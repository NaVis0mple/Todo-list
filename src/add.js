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
submitbutton.addEventListener('click', () => {
  // need add form validate
  const x = additem(titleInput.value, descriptionInput.value, dateInput.value, priorityTextInput.value, priorityBackgroundInput.value)
  itemList.push(x)
})

export { submitbutton, itemList }
