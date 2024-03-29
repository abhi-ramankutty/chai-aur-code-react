# How to set up a store for reduc/reduc-toolkit
1. Create a file say 'store.js'
2. Configure your Store by importing configureStore from reduxjs
```import {configureStore} from '@reduxjs/toolkit';```
3. Create and export a store using configureStore<br />
```export const store = configureStore({});```

4. Create a new file, a slice file to write you reducers which will give you functionality to access and update the store
'todoSlice.js' is this example
5. import "createSlice" from reduxjs <br />
```import {createSlice, nanoid} from '@reduxjs/toolkit';```
6. Create a slice using "createSlice". createSlice takes an object with some info.

- name, initialState, reducers
- reducers is an object where you can declare your reducer and it gives you a callback with (state, action)
- state is the current state of the store/data and action is the param that is passed from the calling. <br />
```
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {}
    }
});
```
7. You need to wrap the entire application in provider like you did with context api <br>
- import { Provider } from 'react-redux';
- import { store } from './app/store.js'; This is the store that you created
- ```<Provider store={store} > <App /> </Provider>```<br> Wrap your appliacation in this.

8. After creating you slice, export all the actions so that its easy to use in other components/files <br />
```export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;```

9. You need to export the reducers created via the slice <br />
This is done so that the store you created is aware of what all reducers it needs to handle

10. You need to use <b>useSelector()</b> to fetch/get the data stored in the store. <br/>
```const todos = useSelector(state => state.todos) ```

11. You need to use dispatch and reducers to add/update the data in the store <br/>
- You need to call useDispatch to create a dispatch instance
- You need to pass the <b>addTodo</b> reducer with the payload object to trigger dispatch 
```
const dispatch = useDispatch();
dispatch(addTodo(payloadObj))
```