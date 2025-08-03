import { useEffect, useState } from 'react'
import {
  TodoContextProvider,
} from "./context/index"
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
function App() {
  //todos in an array of objects
  const [Todos, setTodos] = useState([]);

  const addTodo = (actualTodo) => {

    // now as we have array of objects (TODOS) we are going to this todo Inside of it 
    // take all prev, return prev + New TODO
    // ...prev  means spread all prev an update after comma so like we added an entire newTodo here
    setTodos((prev) => [...prev, actualTodo])
  }
  //when updating todo we wont clear the entire input field we will be needing the prev text 
  const updateTodo = (id, todo) => {

    // find it by id and then update
    setTodos((prev) => prev.map((prevtodos) => (prevtodos.id === id ? todo : prevtodos)))

  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevtodo) => (
      prevtodo.id === id ? { ...prevtodo, isCompleted: !prevtodo.isCompleted } : prevtodo
    )))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => (
      prevtodo.id != id
    )))
  }

  // now get the info store in local storage
  useEffect(() => {

    const data = localStorage.getItem("todo");
    if (data) {
      setTodos(JSON.parse(data))
    }

  }, [])
  // this one will set data whenver todos is changed
  useEffect(() => {
    if (Todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(Todos))

    }
  }, [Todos])

  return (
    <TodoContextProvider value={{ Todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                {/* todoitem is just a comp, and here we are passing a val in its props */}
                {/* everyTodo has their ToDo-Item with them and Todo-Item is basically controlling all the options */}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </TodoContextProvider>
  )
}



export default App
