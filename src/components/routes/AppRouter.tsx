import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home.tsx'
import Todo from '../pages/todo/Todo.jsx'

const AppRouter = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={<Home/>}
            />
            <Route 
                path="/"
                element={<Todo/>}
            />
        </Routes>
    );
}

export default AppRouter;