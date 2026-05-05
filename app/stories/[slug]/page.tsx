"use client";

import { Separator } from "@/components/ui/separator";
import { Main } from "../../styles/profile";
import { Body, Content, Title } from "../../styles/story_slug";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useGetID } from "@/app/hooks/useGet";

// Client components can not be Async, intresting

// export async function generateStaticParams() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((res) => {
//       const filter_res = res.slice(0, 6);
//       console.log("data fetching for static params...");
//       return filter_res;
//     })
//     .catch((err) => console.log(err));

//   return data.map((post: any) => ({
//     slug: post.id
//   }));
// }

export default function Page() {
  const params = useParams();
  const slug = params.slug;
  console.log(slug);

  const { data, isPending, isError } = useGetID(Number(slug));
  console.log(data);

  const dummy = {
    title: "Loading new data.",
    body: "Loading new data.",
  };

  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        <Title>Title: </Title>
        <Content>{isPending ? dummy.title : data.title}</Content>
        <Title>Content: </Title>
        <Content>{isPending ? dummy.body : data.body}</Content>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
