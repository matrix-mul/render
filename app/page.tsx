import { Body, Content, Content2, Main, Nav, Footer } from "./styles/home";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Nav>
        <Button className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/"}>Home</Link>
        </Button>
        <Button className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/stories"}>Stories</Link>
        </Button>
        <Button className={"text-[25px] mr-2.5 ml-2.5"} variant="link">
          <Link href={"/about_us"}>About Us</Link>
        </Button>
      </Nav>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Content>Render</Content>
        <Content2>Leanring Rendering Patterns</Content2>
      </Body>
      <Separator className={"bg-black  mt-2.5"} />
    </Main>
  );
}
