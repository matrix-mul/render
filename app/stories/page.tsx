"use client";
import Link from "@/components/Link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../styles/profile";
import { Body } from "../styles/profile";
import Navbar from "@/components/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import instance from "../axiosConfig";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useOnInView } from "react-intersection-observer";

export default function Page() {
  const fetchStories = async ({ pageParam }: { pageParam: number }) => {
    const res = await instance.get(`/?page=${pageParam}`);
    return res.data;
  };

  const inViewRef = useOnInView((inView, entry) => {
    if (inView) {
      fetchNextPage()
    } else {
      console.log("Element left view", entry.target);
    }
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchStories,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.next,
  });

  console.log(data?.pages);
  if (isPending) {
    return (
      <Main>
        <Navbar />
        <Separator className={"bg-black mt-2.5"} />
        <Body>
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <Card
              key={card}
              sx={{
                minWidth: 275,
                minHeight: "30vh",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(900px)",
                border: "1px solid rgba(255, 255, 255, 0.3) ",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="animate-pulse"
            >
              <CardContent></CardContent>
            </Card>
          ))}
        </Body>
        <Separator className={"bg-black mt-2.5"} />
      </Main>
    );
  }
  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {data?.pages.map((value) =>
          value.data.map(
            (card: { id: number; title: string; body: string }) => (
              <Link key={card.id} href={"/stories/" + card.id}>
                <Card
                  sx={{
                    minWidth: 275,
                    minHeight: "30vh",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(900px)",
                    border: "1px solid rgba(255, 255, 255, 0.3) ",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Stories
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.body}</Typography>
                  </CardContent>
                </Card>
              </Link>
            ),
          ),
        )}
        <h1 ref={inViewRef}>{hasNextPage?"Loading....":""}</h1>
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
