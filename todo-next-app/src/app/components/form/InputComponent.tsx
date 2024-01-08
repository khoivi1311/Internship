import TextField from "@mui/material/TextField";

export default function Input({
  label,
  defaultValue,
  register,
}: {
  label: string;
  defaultValue: string;
  register: any;
}) {
  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      autoFocus
      margin="dense"
      fullWidth
      variant="standard"
      {...register}
    />
  );
}
