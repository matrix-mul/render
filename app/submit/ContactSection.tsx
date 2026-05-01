import {
  FormDataPayload,
  resetForm,
} from "../slice/formSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { AlertDemo } from "./Alert";
import { asyncExample } from "../store/asyncExample";
import Button from "@mui/material/Button";
const formSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
});

export type FormData = yup.InferType<typeof formSchema>;

export default function ContactSection() {
  const savedFormData: FormDataPayload = useSelector(
    (state: RootState) => state.form.formData,
  );
  const alertVisible: boolean = useSelector(
    (state: RootState) => state.alert.visible,
  );
  const dispatch = useDispatch();

  const form = useForm<FormData>({
    resolver: yupResolver(formSchema) as any,
    mode: "onTouched",
    defaultValues: {
      firstName: savedFormData.firstName,
      lastName: savedFormData.lastName,
    },
  });

  const handleNext = (data: FormData) => {
    dispatch(asyncExample(data) as any);
    // dispatch(updateFormData(data));
    // dispatch(nextStep());
  };

  useEffect(() => {
    console.log(savedFormData);
  }, [savedFormData]);

  return (
    <>
      {alertVisible && <AlertDemo />}
      <div className="flex w-full h-full">
        <form
          className="flex flex-col w-[30%] h-full gap-5 mt-10 m-3"
          id="form-rhf-demo-1"
          onSubmit={form.handleSubmit(handleNext, (error) => {
            console.log("form submission failed ", error);
          })}
        >
          <h1 className="text-2xl">Registration</h1>
          <Controller
            name="firstName"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                id="outlined-error-helper-text"
                label="Enter your first name"
                helperText={fieldState.error?.message}
                sx={{}}
              />
            )}
          />
          <Controller
            name="lastName"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                id="outlined-error-helper-text"
                label="Enter your last name"
                helperText={fieldState.error?.message}
              />
            )}
          />
          <div className="flex gap-3.5">
            <Button
              type="button"
              onClick={() => {
                form.reset();
                dispatch(resetForm());
              }}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
                "&:hover": {
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                },
                fontSize: "15px",
                padding: "10px 20px",
                minWidth: "6vw",
              }}
            >
              Reset
            </Button>

            <Button
              type="submit"
              form="form-rhf-demo-1"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
                "&:hover": {
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                },
                fontSize: "15px",
                padding: "10px 20px",
                 minWidth: "6vw"
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
