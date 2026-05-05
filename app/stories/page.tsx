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
import instance from "../axiosConfig";

export default async function Page() {
  const data = await instance
    .get("/")
    .then((response) => response.data)
    .catch((error) => console.log(error));
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
        ))}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
