import React, { createContext, useState, useEffect } from 'react';
import { Task } from "./types";

interface ITaskListContext {
  taskList: Task[]; 
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskListContext = createContext<ITaskListContext>({
  taskList: [],
  setTaskList: () => {},
});
