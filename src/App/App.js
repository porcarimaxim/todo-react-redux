import React from "react";
import {Provider} from 'react-redux'
import store from './redux/store'
import AddTodo from './AddTodo'
import VisibleTodoList from './TodoList'
import Footer from './Footer'

const App = () => {
  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </Provider>
  )
};

export default App;
