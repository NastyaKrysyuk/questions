import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const FormInputText = ({ name, label, type, rules }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => {
          return (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              type={type}
              onChange={onChange}
              value={value}
              fullWidth
              label={label}
              variant="outlined"
              required
            />
          );
        }}
      />
    </>
  );
};
