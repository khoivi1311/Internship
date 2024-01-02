import Box from "@mui/material/Box";
import "./css/styles.css";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
