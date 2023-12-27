import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const TodoListTable = (props: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ width: "15px" }}>
              No.
            </TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center" style={{ width: "250px" }}>
              Optional
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todoLists.map((todoList: any) => (
            <TableRow
              key={todoList.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{todoList.id}</TableCell>
              <TableCell align="center">
                <Link to={"/todos/"+todoList.id}>{todoList.title}</Link>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginRight: "15px" }}
                  onClick={() => props.updateTodoListClicked(todoList)}
                  startIcon={<EditIcon />}
                >
                  Update
                </Button>
                <Button
                  disabled={todoList.todos != null ? true : false}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => props.deleteTodoListClicked(todoList)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoListTable;
