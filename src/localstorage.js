import { getUndoList ,setUndoList} from "./add"
import { getFinishedList,setFinishedList } from "./listPrint"
//locale storage 

export function setStorage (){
    localStorage.setItem('itemList',JSON.stringify(getUndoList()))
    localStorage.setItem('finishedList',JSON.stringify(getFinishedList()))
  }
  
export function getStorage() {
    setUndoList(JSON.parse(localStorage.getItem('itemList')))
    setFinishedList(JSON.parse(localStorage.getItem('finishedList')))
  }