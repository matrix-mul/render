import {
  nextStep,
  resetForm,
  updateFormData,
  prevStep,
} from "../slice/formSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../store/store";

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

export default function NameSection() {
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema) as any,
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const savedFormData = useSelector<RootState>((state) => state.form.formData);

  const handleNext = (data: FormData) => {
    dispatch(updateFormData(data));
    dispatch(nextStep());
  };

  useEffect(() => {
    console.log(savedFormData);
  }, [savedFormData]);

  return (
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
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              id="outlined-error-helper-text"
              label="Enter your email here"
              helperText={fieldState.error?.message}
              sx={{}}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              id="outlined-error-helper-text"
              label="Password"
              type="password"
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
              minWidth: "6vw",
            }}
            onClick={() => {
              dispatch(prevStep())
            }}
          >
            Prev
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
              minWidth: "6vw",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
