import { getUndoList ,setUndoList} from "./add"
import { getFinishedList,getShallowCopylist,setFinishedList, setShallowCopyList } from "./listPrint"
//locale storage 

export function setStorage (){
    localStorage.setItem('itemList',JSON.stringify(getUndoList()))
    localStorage.setItem('finishedList',JSON.stringify(getFinishedList()))
    localStorage.setItem('shallowCopyList',JSON.stringify(getShallowCopylist()))
  }
  
export function getStorage() {
    setUndoList(JSON.parse(localStorage.getItem('itemList')))
    setFinishedList(JSON.parse(localStorage.getItem('finishedList')))
    setShallowCopyList(JSON.parse(localStorage.getItem('shallowCopyList')))
  }