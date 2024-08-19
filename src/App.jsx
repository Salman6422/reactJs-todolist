import { useEffect, useState } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, settodoValue] = useState('') 

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList);
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    settodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }
  useEffect(() => {
    if (!window.localStorage) {
      return;
    }
  
    const localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
  
    const parsedTodos = JSON.parse(localTodos);
    setTodos(parsedTodos.todos);
  }, []);
  
  return (
    <>
      <TodoInput todoValue={todoValue} settodoValue={settodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodos={handleDeleteTodos}/>
    </>
  )
}

export default App
