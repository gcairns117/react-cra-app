import { useState, useEffect } from 'react';
import { Task } from "./types.ts";
import ToDoApp from './components/ToDoApp.tsx';
import { TaskListContext } from "./Context.ts"

const App = () => { 
  // Retrieve the value from sessionStorage or use a default value
  const storedTaskList = sessionStorage.getItem('taskList');
  const [taskList, setTaskList] = useState<Task[]>(storedTaskList ? JSON.parse(storedTaskList) : []);

  // useEffect to update sessionStorage whenever myValue changes
  useEffect(() => {
    sessionStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TaskListContext.Provider value={{taskList, setTaskList}}>
      <ToDoApp />
    </TaskListContext.Provider>
  );
}

export default App;
