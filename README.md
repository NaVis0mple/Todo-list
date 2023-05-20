# Todo-list
[theodinproject](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)
------
## problem
1. how to share toggle status between two module
```javascript
# module.js
export let sortByDateAsc = false
```
```javascript
# main.js
import {sortByDateAsc} from module.js
````
Answer : export as function
```javascript
# module.js
export let sortByDateAsc = false
export let sortByTitleAsc = false
export function setSortByDateAsc(value) {
    sortByDateAsc = value;
  }
  ```
