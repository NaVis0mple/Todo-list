import { form, submitbutton, titleInput, dateInput, descriptionInput, priorityBackgroundInput, priorityTextInput } from './formEnter'
import _ from 'lodash'
import { currentIndex, getShallowCopylist, setShallowCopyList, shallowCopyList } from './listPrint'
const undoList = []
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
  } else { titleInput.classList.remove('invalid') }

  const x = additem(titleInput.value, descriptionInput.value, dateInput.value, priorityTextInput.value, priorityBackgroundInput.value)
  undoList.push(x)

  return undoList
}

function PushEditedPiece () {
  if (titleInput.value === '') {
    titleInput.classList.add('invalid')
    return
  } else { titleInput.classList.remove('invalid') }

  const x = additem(titleInput.value, descriptionInput.value, dateInput.value, priorityTextInput.value, priorityBackgroundInput.value)

  const list = getShallowCopylist()
  const editIndexinundoList = _.findIndex(undoList, { title: list[currentIndex].title, description: list[currentIndex].description, date: list[currentIndex].date })
  undoList.splice(editIndexinundoList, 1, x)
  setShallowCopyList(undoList)
  return undoList
}

export { submitbutton, undoList, pushInList, PushEditedPiece }
