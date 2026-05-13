"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Badge,
  Card,
  Containers,
  Content,
  Content2,
  Main,
  Nav,
} from "../styles/about_us";
import { Body } from "../styles/about_us";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { Droppable } from "./droppable";
import { Draggable } from "./draggable";

export interface Card {
  title: string;
  priority: "HIGH" | "LOW" | "MID";
}

export default function Page() {
  const [isDropped, setIsDropped] = useState(false);
  const [todo, setTodo] = useState<Card[]>([
    {
      title: "Create Boards",
      priority: "HIGH",
    },
    {
      title: "Create Animations",
      priority: "MID",
    },
    {
      title: "Improve UX",
      priority: "LOW",
    },
  ]);
  const [inProg, setInProg] = useState<Card[]>([]);
  const [done, setDone] = useState<Card[]>([]);
  const addTodo = (data: Card) => {
    setTodo((prevTodos) => [...prevTodos, data]);
  };
  const addInProg = (data: Card) => {
    setInProg((prevInProgs) => [...prevInProgs, data]);
  };
  const addDone = (data: Card) => {
    setDone((prevDones) => [...prevDones, data]);
  };

  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {/* <DragDropProvider
          onDragEnd={(e) => {
            if (e.canceled) return;
            const { target } = e.operation;
            setIsDropped(target?.id === "droppable");
          }}
        >
          {!isDropped && <Draggable />}
          <Droppable id="droppable">{isDropped && <Draggable />}</Droppable>
        </DragDropProvider> */}
        <Containers>
          <h1 className="m-5">TODO</h1>
          {todo.map((data) => (
            <Card key={data.priority}>
              <div>{data.title}</div>

              <div className="flex w-full mr-5 justify-end">
                <Badge priority={data.priority}>{data.priority}</Badge>
              </div>
            </Card>
          ))}
        </Containers>
        <Containers>
          {" "}
          <h1 className="m-5">In-Progress</h1>
        </Containers>
        <Containers>
          {" "}
          <h1 className="m-5">Done</h1>
        </Containers>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
