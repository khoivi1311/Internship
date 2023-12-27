import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const TodoForm = (props: any) => {
  const submit = (e: any) => {
    e.preventDefault();
    props.handleAction(props.action);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.handleClose()}>
        <form onSubmit={(e) => submit(e)}>
          <DialogTitle>{props.action}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required={true}
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.title}
              onChange={(e) => props.handleTitleChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.description}
              onChange={(e) => props.handleDescriptionChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => props.handleClose()} color="error">
              Cancel
            </Button>
            <Button type="submit" color="success">
              {props.action}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default TodoForm;
