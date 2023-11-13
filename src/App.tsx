import React, { useState } from 'react';
import { Task } from "./types.ts";
import ToDoApp from './components/ToDoApp.tsx';
import { TaskListContext } from "./Context.ts"

const App = () => { 
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <TaskListContext.Provider value={{taskList, setTaskList}}>
      <ToDoApp />
    </TaskListContext.Provider>
  );
}

export default App;
