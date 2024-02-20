import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export const FormInputDataPicker = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            onChange={(date) => {
              onChange(date ? date.format("YYYY-MM-DD") : null);
            }}
            value={value ? dayjs(value) : null}
          />
        )}
      />
    </LocalizationProvider>
  );
};
