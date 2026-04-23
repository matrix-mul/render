"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../../styles/profile";
import { CardSmall } from "@/components/ui/smallCard";
import { Body, Content, Title } from "../../styles/story_slug";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { title } from "process";
import { Spinner } from "@/components/ui/spinner";

// Client components can not be Async, intresting

export default function Page() {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [isGenerating, setGenerating] = useState(false);
  const params = useParams();
  const slug = params.slug as string;
  console.log(slug);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  const dummy = {
    title: "Loading new data.",
    body: "Loading new data."
  }

  function handleClick() {
    setGenerating(true);
    setData(dummy);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .finally(() => {
          setGenerating(false);
        });
    }, 5000);
  }

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
        <Title>Title: </Title>
        <Content>{data.title}</Content>
        <Title>Content: </Title>
        <Content>{data.body}</Content>
        {/*  */}
        <div className="flex flex-col-reverse h-full mb-5">
        <Button className="text-2xl p-10 rounded-2xl" variant="outline" disabled={isGenerating} onClick={handleClick}>
          {isGenerating == false ? (
            <>Generate</>
          ) : (
            <>
              <Spinner className="m-2" data-icon="inline-start" />
              Generating...
            </>
          )}
        </Button>
        </div>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
