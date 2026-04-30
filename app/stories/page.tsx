// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../styles/profile";
import { CardSmall } from "@/components/ui/smallCard";
import { Body } from "../styles/profile";
import Navbar from "@/components/Navbar";

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
      <Navbar/>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {data.map((card: { id: number; title: string; body: string }) => (
          <Link key={card.id} href={"/stories/" + card.id}>
          <CardSmall skel={false} key={card.id} title={card.title} body={card.body} />
          </Link>
        ))}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
