import Box from "@mui/material/Box";
import "./css/styles.css";
import Header from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/TodoComponent";
import TodoList from "./components/TodoListComponent";

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
