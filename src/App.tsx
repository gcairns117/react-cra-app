import { useState, useEffect } from 'react';
import { Task } from "./types.ts";
import ToDoApp from './components/ToDoApp.tsx';
import { TaskListContext } from "./Context.ts"

const App = () => { 
  // Retrieves the taskList value from sessionStorage or uses an empty array as default value
  const storedTaskList = sessionStorage.getItem('taskList');
  const [taskList, setTaskList] = useState<Task[]>(storedTaskList ? JSON.parse(storedTaskList) : []);

  // useEffect updates sessionStorage whenever taskList changes
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
