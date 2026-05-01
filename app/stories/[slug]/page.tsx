"use client";

import Button from "@mui/material/Button"
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../../styles/profile";
import { Body, Content, Title } from "../../styles/story_slug";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

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
      <Navbar/>
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Title>Title: </Title>
        <Content>{data.title}</Content>
        <Title>Content: </Title>
        <Content>{data.body}</Content>
        {/*  */}
        <div className="flex flex-col-reverse h-full mb-5">
        <Button disabled={isGenerating} onClick={handleClick} sx={
          {
            minHeight: 50,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3) ",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            fontSize: "30px",
            color: "black",
            fontFamily: "inherit"
          }
        }>
          {isGenerating == false ? (
            <>Generate</>
          ) : (
            <>
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
