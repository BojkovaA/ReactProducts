import { useEffect, useState } from 'react'
import './App.css'
import TodoInputComponent from './components/TodoInputComponent'
import TodoListComponent from './components/TodoListComponent'
import { ToastContainer } from 'react-toastify';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  useEffect(()=>{
    console.log(todoItems)
  },[todoItems])

  
  return (
    <>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-[60px] text-green-600 font-extrabold my-[30px]'>TODO APP</h1>
        <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems}/> 
        <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
