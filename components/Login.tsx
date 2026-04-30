import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginValidation } from "@/app/store/asyncExample";

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
    <form
      className="flex flex-col w-[30%] h-full gap-5 mt-10 m-3"
      id="form-rhf-demo-1"
      onSubmit={form.handleSubmit(handleSubmit, (error) => {
        console.log("form submission failed", error);
      })}
    >
      <h1 className="text-2xl">Login</h1>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            error={fieldState.invalid}
            id="outlined-error-helper-text"
            label="Enter your email address"
            helperText={fieldState.error?.message}
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
      <Button
        variant="contained"
        disabled={!form.formState.isValid}
        type = "submit"
     >
        Login
      </Button>
    </form>
  );
}
