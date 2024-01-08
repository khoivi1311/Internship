import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Confirmation({
  id,
  open,
  message,
  handleDelete,
  handleClose,
}: {
  id: number;
  open: boolean;
  message: string | null;
  handleDelete: Function;
  handleClose: Function;
}) {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="error">
          Cancel
        </Button>
        <Button onClick={() => handleDelete(id)} color="success">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
