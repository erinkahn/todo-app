import React, {useState, useEffect} from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";
import {Route, Switch} from 'react-router-dom';
import About from "./pages/About.js";
import NotMatch from "./pages/NotMatch.js";
import Navbar from "./Navbar";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = (id) => {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }
  
  const deleteToDo = (id) => {
    setTodos([
      ...todos.filter(todo => {
          return todo.id !== id;
        })
    ])
  }

  const addTodoItem = title => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newToDo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) { // update state todos title whose id matches the edited text input
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  useEffect(() => {
    console.log('test')

    //get stored items
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [setTodos])


  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  return ( <>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <div className="container">
          <div className="inner">
            <Header/>

            <InputTodo addtodoprops={addTodoItem}/>

            <br/>

            <TodosList 
              todos={todos} 
              handleChangeProps={handleChange} 
              deleteTodoProps={deleteToDo}
              setUpdate={setUpdate}
            />
          </div>
        </div>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="*">
        <NotMatch/>
      </Route>
    </Switch>

    
  </>)
}

export default TodoContainer