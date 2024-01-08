import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Notification({
  open,
  message,
  status,
  handleClose,
}: {
  open: boolean;
  message: string | null;
  status: any;
  handleClose: Function;
}) {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      onClose={() => handleClose()}
    >
      <Alert
        onClose={() => handleClose()}
        severity={status}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
