import {
  FormDataPayload,
  nextStep,
  prevStep,
  resetForm,
  updateFormData,
} from "../slice/formSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AlertDemo } from "./Alert";
import { alertData } from "../slice/alertSlice";
import { asyncExample } from "../store/asyncExample";

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
    (state:RootState) => state.alert.visible
  )
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
    dispatch(asyncExample(data))
    // dispatch(updateFormData(data));
    // dispatch(nextStep());
  };

  useEffect(() => {
    console.log(savedFormData);
  }, [savedFormData]);

  return (
    <>
      { alertVisible && <AlertDemo/>}
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Account Creation Form</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(handleNext, (error) => {
              console.log("form submission failed ", error);
            })}
          >
            <FieldGroup>
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      First Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Last Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              onClick={() => {
                form.reset();
                dispatch(resetForm());
              }}
            >
              Reset
            </Button>

            <Button type="submit" variant="outline" form="form-rhf-demo">
              Next
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </>
  );
}
