import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Content, Content2, Main, Nav } from "../styles/about_us";
import { Body } from "../styles/about_us";

export default async function Page() {

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
