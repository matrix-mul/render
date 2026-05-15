"use client";
import { Separator } from "@/components/ui/separator";
import { DragDropProvider } from "@dnd-kit/react";
import { Card, Containers2, Main } from "../styles/about_us";
import { Body } from "../styles/about_us";
import Navbar from "@/components/Navbar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import DCard from "./DCard";
import { DColumn } from "./DCols";
import { useDispatch, useSelector } from "react-redux";
import { addCard, moveCard } from "../slice/boardSlice";
import { RootState } from "../store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type priority = "HIGH" | "LOW" | "MID" | "";
export interface Card {
  title: string;
  priority: priority;
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
    dispatch(addCard(data));
    form.reset();
  };

  const [filter, setFilter] = useState<priority>("");
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as priority);
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
            <div className="flex justify-between w-[90%] mr-5">
              <h1 className="m-5">TODO</h1>
              <FormControl className="w-[70%]">
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  // className="h-[80%]"
                  variant="standard"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Priority"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <MenuItem value={"HIGH"}>HIGH</MenuItem>
                  <MenuItem value={"MID"}>MID</MenuItem>
                  <MenuItem value={"LOW"}>LOW</MenuItem>
                  <MenuItem value={""}>ALL</MenuItem>
                </Select>
              </FormControl>
            </div>
            {board.todo
              .filter((data) => {
                if (filter == "") return true;
                return data.priority == filter;
              })
              .map((data, index) => (
                <DCard
                  key={data.title}
                  id={data.title}
                  index={index}
                  cardData={data}
                />
              ))}
          </DColumn>
          <DColumn id="inProg">
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
            className="flex flex-col w-[60%] h-full gap-5 mt-10 m-3"
            id="form-rhf-demo-1"
            onSubmit={form.handleSubmit(handleSubmit, (error) => {
              console.log("form submission failed", error);
            })}
          >
            <h1 className="text-2xl">Create a Ticket</h1>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  id="outlined-error-helper-text"
                  label="Title for the ticket."
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="priority"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormControl {...field}>
                  <FormLabel id={`label`}>Priority</FormLabel>
                  <RadioGroup
                    aria-labelledby={`$label`}
                    value={field.value || ""}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="HIGH"
                      control={<Radio />}
                      label="HIGH"
                    />
                    <FormControlLabel
                      value="MID"
                      control={<Radio />}
                      label="MID"
                    />
                    <FormControlLabel
                      value="LOW"
                      control={<Radio />}
                      label="LOW"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              variant="blackBtn"
            >
              Create
            </Button>
          </form>
        </Containers2>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
