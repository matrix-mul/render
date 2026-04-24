import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardSmall({
  title,
  body,
  skel,
}: {
  title: any;
  body: any;
  skel: boolean;
}) {
  return skel === true ? (
    <Card
      size="sm"
      className={`animate-pulse text-l h-[25vh] rounded mx-auto w-full max-w-[30vw] min-h-[28vh] m-2`}
    >
      <CardHeader>
        <CardTitle className={"h-10 mb-2 rounded bg-gray-200"}></CardTitle>
        <CardDescription className="h-10 rounded bg-gray-200"></CardDescription>
      </CardHeader>
      <CardContent className="m-3 h-25 rounded bg-gray-200">
      </CardContent>
    </Card>
  ) : (
    <Card
      size="sm"
      className={`text-l h-[25vh] rounded mx-auto w-full max-w-[30vw] min-h-[28vh] m-2`}
    >
      <CardHeader>
        <CardTitle className={"text-2xl"}>Stories</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="p-2">{body}</p>
      </CardContent>
    </Card>
  );
}
