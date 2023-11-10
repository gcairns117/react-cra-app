import { Routes, Route } from "react-router-dom";
import Todo from '../pages/todo/Todo.tsx'

const AppRouter = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={<Todo/>}
            />
        </Routes>
    );
}

export default AppRouter;