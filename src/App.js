import React from 'react'
import List from './List'
import AddTask from './AddTask'


function App() {

const[taskList, setTaskList] = React.useState([
  {id:1, done: false, text: "Это первая и тестовая задача. Удали ее и начинай пользоваться приложением."}
])

function addTask(formText){
  setTaskList(taskList.concat([{id:(taskList.length +1), done: false, text: formText}]))
}

function deleteTask(id){
  setTaskList(taskList.filter(task => task.id !== id))
}

function completeTask(id){
  setTaskList(taskList.map(task => {
    if (task.id == id){
      task.done = !task.done
    }
    return task
  }))
}
  return (
    <div className="App">
      <h1>Список задач</h1>
      <AddTask addTask={addTask}/>
      <List taskList={taskList} completeTask={completeTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
