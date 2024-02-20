import { useForm, FormProvider } from "react-hook-form";
import { Button, Paper } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputRadio } from "./form-components/FormInputRadio";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDataPicker } from "./form-components/FormInputDataPicker";

const defaultValues = {
  fullName: "",
  email: "",
  dateOfBirth: "",
  skills: [],
  gender: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Fullname is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  dateOfBirth: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  skills: Yup.array()
    .of(Yup.string())
    .test(
      "skills",
      "Skills must have at least 2 items",
      (value) => value.length >= 2
    ),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
});
export function FormDemo() {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
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
          <FormInputText name="fullName" label="Full name" />
          <FormInputText name="email" label="Email" />
          <FormInputDataPicker label="Date Of Birth" name="dateOfBirth" />
          <FormInputRadio
            label="Gender"
            name="gender"
            options={[
              {
                label: "Man",
                value: "man",
              },
              {
                label: "Woman",
                value: "woman",
              },
            ]}
          />
          <FormInputText name="password" label="Password" type="password" />
          <FormInputText
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <FormInputDropdown
            name="skills"
            label="Skills"
            options={[
              {
                label: "REACT",
                value: "REACT",
              },
              {
                label: "Angular",
                value: "angular",
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
