import { useState } from "react";
import { Form, Icon, Button, Card } from "semantic-ui-react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./types";

const Todo = () => {

    // State
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask: Task = {
            id: uuidv4(),
            content: inputValue,
            completed: false,
            created_at: new Date(),
        };

        if (newTask.content) setTaskList((taskList) => [...taskList, newTask]);
        setInputValue('');
    }

    const AddTask = () => {
        return (
            <div className="AddToDo">
                <h2>Add a task:</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        name="input"
                        placeholder="Task..."
                        type="text"
                        autoComplete="off"
                        autoFocus={true}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="AddToDoBtn">
                        <Button type="submit" primary>
                            Add
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }

    const deleteTask = (taskId: string) => {
        const updatedTaskListed = taskList.filter((taskListItem) => taskListItem.id !== taskId);
        setTaskList(updatedTaskListed);
    }

    const handleCheckbox = (task: Task) => {
        const updatedTaskList = taskList.map((taskListItem) => {
            if (task.id === taskListItem.id) {
                return {
                    ...taskListItem,
                    completed: !taskListItem.completed,
                };
            }
            return taskListItem;
        });
        setTaskList(updatedTaskList);
    };

    const displayTasks = () => {
        let listItems: JSX.Element[] = [];
        taskList.forEach((taskListItem) => {
            listItems.push(
                <Card key={taskListItem.id} color={taskListItem.completed ? "green" : "grey"} raised>
                    <Card.Content>
                        <Icon className="DeleteBtn"
                            name="delete"
                            color="red"
                            onClick={() => deleteTask(taskListItem.id)}
                        />
                        <Card.Header className={taskListItem.completed ? "CompletedTask" : ""}>
                            {taskListItem.content}
                        </Card.Header>
                        <Card.Meta>Created at: {taskListItem.created_at.toUTCString().slice(17, -7)}</Card.Meta>
                        <Card.Description>
                            Completed: <input className="CompletedCheckbox"
                                name="complete"
                                type="checkbox"
                                checked={taskListItem.completed}
                                onChange={() => handleCheckbox(taskListItem)}
                            />
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        })
        return listItems;
    };

    const TaskList = () => {
        return (
            <div className="Tasks">
                <Card.Group centered stackable>
                    {taskList && displayTasks()}
                </Card.Group>
            </div>
        );
    };

    return (
        <>
            <div className="ToDoApp">
                <div className="AddTask">
                    <AddTask />
                </div>
                <div className="TaskList">
                    <TaskList />
                </div>
            </div>
        </>
    )
}

export default Todo;