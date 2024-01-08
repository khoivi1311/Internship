import { useForm } from "react-hook-form";
import Input from "./form/InputComponent";
import Error from "./form/ErrorComponent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";

export default function FormDialog({
  open,
  action,
  fields,
  data,
  handleAction,
  handleClose,
}: {
  open: boolean;
  action: string | null;
  fields: any;
  data: any;
  handleAction: Function;
  handleClose: Function;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  const onSubmit = (data: any) => {
    handleAction(data);
    reset();
  };

  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "350px" }}>
          <DialogTitle>{action}</DialogTitle>
          <DialogContent>
            {fields.map((field: any) => (
              <div key={field}>
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
                handleClose();
                reset();
              }}
              color="error"
            >
              Cancel
            </Button>
            <Button type="submit" color="success">
              {action}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
