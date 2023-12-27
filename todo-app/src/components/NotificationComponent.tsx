import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Notification = (props: any) => {
  return (
    <Snackbar
      open={props.open}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      autoHideDuration={6000}
      onClose={() => props.handleClose()}
    >
      <Alert
        onClose={() => props.handleClose()}
        severity={props.status}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
