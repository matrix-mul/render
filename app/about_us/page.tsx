"use client";
import { Separator } from "@/components/ui/separator";
import { DragDropProvider } from "@dnd-kit/react";
import {
  Badge,
  Card,
  Containers,
  Content,
  Containers2,
  Main,
  Nav,
} from "../styles/about_us";
import { Body } from "../styles/about_us";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import DCard from "./DCard";
import { DColumn } from "./DCols";
import { useDispatch, useSelector } from "react-redux";
import { moveCard } from "../slice/boardSlice";
import { RootState } from "../store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

export interface Card {
  title: string;
  priority: "HIGH" | "LOW" | "MID";
}

export interface BoardState {
  todo: Card[];
  inProg: Card[];
  done: Card[];
}

const cardForm = yup.object({
  title: yup.string().required("Title is Required"),
  priority: yup
    .string()
    .required("Priority is required")
    .oneOf(["HIGH", "MID", "LOW"], "Invalid selection"),
});
export type CardForm = yup.InferType<typeof cardForm>;

export default function Page() {
  const board = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  const form = useForm<CardForm>({
    resolver: yupResolver(cardForm) as any,
    mode: "onTouched",
    defaultValues: {
      title: "",
      priority: "",
    },
  });
  const handleSubmit = (data: CardForm) => {
    // login.mutate(data, {
    //   onSuccess: () => {
    //     dispatch(submit(data));
    //     redirect("/stories");
    //   },
    // });
  };

  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <DragDropProvider
          onDragOver={(event) => {
            const activeId = event.operation?.source?.id;
            const overId = event.operation?.target?.id;

            dispatch(
              moveCard({
                activeId,
                overId,
              }),
            );
          }}
        >
          <DColumn id="todo">
            <h1 className="m-5">TODO</h1>
            {board.todo.map((data, index) => (
              <DCard
                key={data.title}
                id={data.title}
                index={index}
                cardData={data}
              />
            ))}
          </DColumn>
          <DColumn id="inProg">
            {" "}
            <h1 className="m-5">In Progress</h1>
            {board.inProg.map((data, index) => (
              <DCard
                key={data.title}
                id={data.title}
                index={index}
                cardData={data}
              />
            ))}
          </DColumn>
          <DColumn id="done">
            <h1 className="m-5">Done</h1>
            {board.done.map((data, index) => (
              <DCard
                key={data.title}
                id={data.title}
                index={index}
                cardData={data}
              />
            ))}
          </DColumn>
        </DragDropProvider>
        <Containers2>
          <form
            className="flex flex-col w-[30%] h-full gap-5 mt-10 m-3"
            id="form-rhf-demo-1"
            onSubmit={form.handleSubmit(handleSubmit, (error) => {
              console.log("form submission failed", error);
            })}
          >
            <h1 className="text-2xl">Login</h1>
            <Controller
              name="title"
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
            {/* <Controller
              name="priority"
              control={form.control}
              render={({ field, fieldState }) => (
                <>
                  <RadioGroup
                    {...field}
                    aria-labelledby={`label`}

                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="HIGH"
                      control={<Radio />}
                      label="HIGH"
                    />
                    <FormControlLabel
                      value="MIDasd"
                      control={<Radio />}
                      label="MID"
                    />
                    <FormControlLabel
                      value="LOW"
                      control={<Radio />}
                      label="LOW"
                    />
                  </RadioGroup>
                  {fieldState.error && (
                    <FormHelperText>{fieldState.error.message}</FormHelperText>
                  )}
                </>
              )}
            /> */}
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              variant="blackBtn"
            >
              Login
            </Button>
          </form>
        </Containers2>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
