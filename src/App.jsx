import AddTodo from './Comp/AddTodo'
import AppName from './Comp/AppName'
import Todo1 from './Comp/Todo1'
import Todo2 from './Comp/Todo2'
import Footer from './Comp/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className='container wrapper'>
        <div className='todo-container'>
          <AppName />
          <AddTodo />
          <div className="items-container">
            <Todo1 />
            <Todo2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App