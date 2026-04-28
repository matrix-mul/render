import { Main, Nav } from "../app/styles/home";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
