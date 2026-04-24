import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Main, Nav } from "../styles/profile";
import { CardSmall } from "@/components/ui/smallCard";
import { Body } from "../styles/profile";


export default  function Loading() {

  const data = [1,2,3,4,5,6]

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
        {data.map(card => <CardSmall title="" body="" key={card} skel={true}/>)}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
