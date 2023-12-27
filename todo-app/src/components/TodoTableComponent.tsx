import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoTable = (props: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ width: "15px" }}>
              No.
            </TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center" style={{ width: "15px" }}>
              Completed
            </TableCell>
            <TableCell align="center" style={{ width: "250px" }}>
              Optional
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map((todo: any) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{todo.id}</TableCell>
              <TableCell align="center">{todo.title}</TableCell>
              <TableCell align="center">{todo.description}</TableCell>
              <TableCell align="center">
                <Checkbox
                  checked={todo.isComplete}
                  onChange={() => props.isCompleteChange(todo)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginRight: "15px" }}
                  onClick={()=>props.updateTodoClicked(todo)}
                  startIcon={<EditIcon />}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => props.deleteTodoClicked(todo)}
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

export default TodoTable;
