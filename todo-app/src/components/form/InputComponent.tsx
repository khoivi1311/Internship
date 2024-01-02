import TextField from "@mui/material/TextField";

const Input = (props: any) => {
  const { label, defaultValue, register } = props;
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
};

export default Input;
