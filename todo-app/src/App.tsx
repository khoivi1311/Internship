import Box from "@mui/material/Box";
import "./css/styles.css";
import Header from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataGird from "./components/DataGridComponent";

function App() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Header />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<TodoList />} />
    //       <Route path="/todos/:id" element={<Todo />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Box>
    <DataGird/>
  );
}

export default App;
