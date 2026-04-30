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
import { RootState } from "../app/store/store";
import { loginValidation } from "@/app/store/asyncExample";
import { redirect } from "next/navigation";

const formSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 character long")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof formSchema>;

export default function Login() {
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema) as any,
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();

  const handleSubmit = (data: FormData) => {
    dispatch(loginValidation(data) as any);
  };

  return (
    <Card className="w-full rounded scale-140 sm:max-w-md">
      <CardHeader>
        <CardTitle>Login Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo-1"
          onSubmit={form.handleSubmit(handleSubmit, (error) => {
            console.log("form submission failed", error);
          })}
        >
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">E-mail</FieldLabel>
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
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
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
          <Button type="submit" variant="outline" form="form-rhf-demo-1">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
