import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

export const FormInputRadio = ({ name, label, options }) => {
  const { control } = useFormContext();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <RadioGroup value={value} onChange={onChange}>
              {options.map((singleOption) => (
                <FormControlLabel
                  key={singleOption.value}
                  value={singleOption.value}
                  label={singleOption.label}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
            {error && (
              <FormHelperText style={{ color: "red" }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};
