import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Confirmation = (props: any) => {
  return (
    <Dialog open={props.open} onClose={() => props.handleClose()}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose()} color="error">
          Cancel
        </Button>
        <Button onClick={() => props.handleDelete(props.id)} color="success">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
