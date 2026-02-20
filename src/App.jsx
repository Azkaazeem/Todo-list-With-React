import AddTodo from './Comp/AddTodo'
import AppName from './Comp/AppName'
import Todo1 from './Comp/Todo1'
import Todo2 from './Comp/Todo2'

function App() {

  return (
    <>
      <center className='todo-container'>
        <AppName />
        <div className="item-container">
          <AddTodo />
          <Todo1 />
          <Todo2 />
        </div>
      </center>
    </>
  )
}

export default App
import './App.css'