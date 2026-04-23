// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../styles/profile";
import { CardSmall } from "@/components/ui/smallCard";
import { Body } from "../styles/profile";
export const revalidate = 10;

export default async function Page() {

  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      const filter_res = res.slice(0, 6);
      console.log("fetch called")
      return filter_res;
    })
    .catch((err) => console.log(err));

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
      </Nav>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {data.map((card: { id: number; title: string; body: string }) => (
          <Link key={card.id} href={"/stories/" + card.id}>
          <CardSmall key={card.id} title={card.title} body={card.body} />
          </Link>
        ))}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
