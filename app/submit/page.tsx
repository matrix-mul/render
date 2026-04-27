"use client";

import Link from "next/link";
import { Main, Nav } from "../styles/submit";
import { Body } from "../styles/submit";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

const formSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
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

const fields_per_step = [
  ["firstName", "lastName"],
  ["email", "password"],
] as const;

const STORAGE_KEY_DATA = "stepper_form_data";
const STORAGE_KEY_PAGE = "stepper_form_page";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);

    const savedStep = localStorage.getItem(STORAGE_KEY_PAGE);
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }

    const savedData = localStorage.getItem(STORAGE_KEY_DATA);
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  const [step, setStep] = useState(() => {
    if (isMounted) {
      const savedStep = localStorage.getItem(STORAGE_KEY_PAGE);
      return savedStep ? parseInt(savedStep, 10) : 0;
    } else return 0;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PAGE, step.toString());
  }, [step]);

  useEffect(() => {
    let timeStore: any

    const subscribe = form.watch((value) => {
      clearTimeout(timeStore);
      timeStore = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(value));
        console.log("Draft Saved");
      }, 500);
    });
    return () => {
      subscribe.unsubscribe();
      clearTimeout(timeStore);
    };
  }, [form.watch]);

  const handleNext = async () => {
    const validatingFields = fields_per_step[step];
    const isStepValid = await form.trigger(validatingFields);
    if (isStepValid) {
      setStep((step) => step + 1);
    }
  };

  const handleBack = () => {
    setStep((step) => step - 1);
  };

  const handleReset = () => {
    form.reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    localStorage.removeItem(STORAGE_KEY_DATA);
    localStorage.removeItem(STORAGE_KEY_PAGE);
    setStep(0);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data: ", data);
    console.log("page: ", step);
    localStorage.removeItem(STORAGE_KEY_DATA);
    localStorage.removeItem(STORAGE_KEY_PAGE);
    setStep(0);
    form.reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Main>
      <Nav>
        <Button asChild className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/"}>Home</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/stories"}>Stories</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5 ml-2.5"} variant="link">
          <Link href={"/about_us"}>About Us</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5 ml-2.5"} variant="link">
          <Link href={"/submit"}>Create Post</Link>
        </Button>
      </Nav>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Card className="w-full sm:max-w-md">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Account Creation Form</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="form-rhf-demo"
              onSubmit={form.handleSubmit(onSubmit, (error) => {
                console.log("form submission failed ", error);
              })}
            >
              <FieldGroup>
                {step == 0 && (
                  <>
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
                  </>
                )}
                {step == 1 && (
                  <>
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            Email
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
                      name="password"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            Password
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-title"
                            type="password"
                            aria-invalid={fieldState.invalid}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </>
                )}
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button type="button" onClick={handleReset}>
                Reset
              </Button>
              {step > 0 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 1 && (
                <Button type="button" variant="outline" onClick={handleNext}>
                  Next
                </Button>
              )}
              {step == 1 && (
                <Button type="submit" form="form-rhf-demo">
                  Submit
                </Button>
              )}
            </Field>
          </CardFooter>
        </Card>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
