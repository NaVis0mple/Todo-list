import { form, submitbutton, titleInput, dateInput, descriptionInput, priorityBackgroundInput, priorityTextInput } from './formEnter'
import _ from 'lodash'
import { currentIndex, getShallowCopylist, setShallowCopyList, shallowCopyList } from './listPrint'
export let undoList = []
export function setUndoList (newList) {
  undoList = [...newList]
}
export function getUndoList () {
  return undoList
}
function additem (t, d, da, pt, pb) {
  const title = { title: t }
  const description = { description: d }
  const date = { date: da }
  const priorityT = { priorityT: pt }
  const priorityB = { priorityB: pb }

  return Object.assign({}, title, description, date, priorityT, priorityB)
}

export function pushInList () {
  if (titleInput.value === '') {
    titleInput.classList.add('invalid')
    return
  } else { titleInput.classList.remove('invalid') }

  const x = additem(titleInput.value,
    descriptionInput.value,
    dateInput.value,
    priorityTextInput.value,
    priorityBackgroundInput.value)
  getUndoList().push(x)

  return getUndoList()
}

export function PushEditedPiece () {
  if (titleInput.value === '') {
    titleInput.classList.add('invalid')
    return
  } else { titleInput.classList.remove('invalid') }

  const x = additem(titleInput.value,
    descriptionInput.value,
    dateInput.value,
    priorityTextInput.value,
    priorityBackgroundInput.value)

  const list = getShallowCopylist()
  const editIndexinundoList = _.findIndex(getUndoList(),
    {
      title: list[currentIndex].title,
      description: list[currentIndex].description,
      date: list[currentIndex].date
    })
  getUndoList().splice(editIndexinundoList, 1, x)
  setUndoList(getUndoList())
  setShallowCopyList(getUndoList())
  return getUndoList()
}
