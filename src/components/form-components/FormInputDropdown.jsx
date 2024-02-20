import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

export const FormInputDropdown = ({ name, options, label }) => {
  const { control } = useFormContext();
  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, value = [] },
          fieldState: { error },
        }) => {
          return (
            <>
              <Select multiple onChange={onChange} value={value} required>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {error && (
                <FormHelperText style={{ color: "red" }}>
                  {error.message}
                </FormHelperText>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};
