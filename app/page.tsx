"use client";
import Login from "@/components/Login";
import { Body, Content, Content2, Main, Nav, Footer } from "./styles/home";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Login />
      </Body>
      <Separator className={"bg-black  mt-2.5"} />
    </Main>
  );
}
