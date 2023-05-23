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
it will show someing like this
```bash
index.js:39 Uncaught TypeError: Cannot set property (variablename) of #<Object> which has only a getter
```
Answer : export as function
```javascript
# module.js
export let sortByDateAsc = false
export let sortByTitleAsc = false
export function setSortByDateAsc(value) {
    sortByDateAsc = value;
  }
  ```
