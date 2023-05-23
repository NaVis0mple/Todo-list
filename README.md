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
Because 

That is how ES6 modules work - imports are constant([source](https://stackoverflow.com/questions/53617972/exported-variables-are-read-only)). Only the module that exports them can change them, which then propagates to all modules that import them.
