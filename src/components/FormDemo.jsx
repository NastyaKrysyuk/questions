import { useForm, FormProvider } from "react-hook-form";
import { Button, Paper } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputRadio } from "./form-components/FormInputRadio";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDataPicker } from "./form-components/FormInputDataPicker";
const defaultValues = {
  textValue: "",
  radioValue: "",
  dateValue: dayjs().format("YYYY-MM-DD"),
  dropdownValue: [],
};

export function FormDemo() {
  const methods = useForm({
    defaultValues,
  });
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 300px",
        }}
      >
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <FormInputText name="textValue" label="Text Input" />
          <FormInputDataPicker label="Data Picker" name="dateValue" />
          <FormInputRadio
            label="Radio Input"
            name="radioValue"
            options={[
              {
                id: 1,
                label: "Option 1",
                value: "1",
              },
              {
                id: 2,
                label: "Option 2",
                value: "2",
              },
            ]}
          />
          <FormInputDropdown
            name="dropdownValue"
            label="Dropdown"
            options={[
              {
                label: "Option 1",
                value: "1",
              },
              {
                label: "Option 2",
                value: "2",
              },
            ]}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </FormProvider>
  );
}
