import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Content, Content2, Main, Nav } from "../styles/about_us";
import { Body } from "../styles/about_us";
import Navbar from "@/components/Navbar";

export default async function Page() {

  return (
    <Main>
      <Navbar/>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Content>
            About
        </Content>
        <Content2>
            This website aims to understand different rendering patterns used in Websites.
        </Content2>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
