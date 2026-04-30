// "use client";

// import { Button } from "@/components/ui/button";
import Link from "@/components/Link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../styles/profile";
import { CardSmall } from "@/components/ui/smallCard";
import { Body } from "../styles/profile";
import Navbar from "@/components/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export const revalidate = 10;

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      const filter_res = res.slice(0, 6);
      console.log("fetch called");
      return filter_res;
    })
    .catch((err) => console.log(err));

  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {data.map((card: { id: number; title: string; body: string }) => (
          <Link key={card.id} href={"/stories/" + card.id}>
            <Card
              sx={{
                minWidth: 275,
                minHeight: 220,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  // bgcolor: "",
                  boxShadow: 1,
                  transform: "scale(1.02)"
                },
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
        ))}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
