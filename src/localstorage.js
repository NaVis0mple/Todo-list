import { getUndoList, setUndoList } from './add'
import { getFinishedList, getShallowCopylist, setFinishedList, setShallowCopyList } from './listPrint'
// locale storage

export function setStorage () {
  localStorage.setItem('itemList', JSON.stringify(getUndoList()))
  localStorage.setItem('finishedList', JSON.stringify(getFinishedList()))
  localStorage.setItem('shallowCopyList', JSON.stringify(getShallowCopylist()))
}

export function getStorage () {
  const dataItemList = localStorage.getItem('itemList')
  const dataFinishedList = localStorage.getItem('finishedList')
  const dataShllowCopyList = localStorage.getItem('shallowCopyList')
  if (dataItemList) {
    setUndoList(JSON.parse(dataItemList))
  } else {
    setUndoList([])
  }
  if (dataFinishedList) {
    setFinishedList(JSON.parse(dataFinishedList))
  } else {
    setFinishedList([])
  }
  if (dataShllowCopyList) {
    setShallowCopyList(JSON.parse(dataShllowCopyList))
  } else {
    setShallowCopyList([])
  }
}
