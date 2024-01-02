import { useForm } from "react-hook-form";
import Input from "./form/InputComponent";
import Error from "./form/ErrorComponent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";

const FormDialog = (props: any) => {
  const { fields, data } = props;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (props.open) {
      reset();
    }
  }, [props.open]);

  const onSubmit = (data: any) => {
    props.handleAction(data);
    reset();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.handleClose()}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "350px" }}>
          <DialogTitle>{props.action}</DialogTitle>
          <DialogContent>
            {fields.map((field: any) => (
              <div>
                <Input
                  label={field.label}
                  defaultValue={data[field.name]}
                  register={{ ...register(`${field.name}`, field.rules) }}
                />
                {errors[field.name] && (
                  <Error message="This field is required" />
                )}
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                props.handleClose();
                reset();
              }}
              color="error"
            >
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

export default FormDialog;
