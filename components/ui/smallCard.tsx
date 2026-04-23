import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardSmall({title, body}: {title: any, body: any}) {
  return (
    <Card size="sm" className=" text-l h-[25vh] rounded mx-auto w-full max-w-[30vw] min-h-[28vh] m-2">
      <CardHeader>
        <CardTitle className={"text-2xl"}>Stories</CardTitle>
        <CardDescription>
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="p-2">
          {body}
        </p>
      </CardContent>
    </Card>
  )
}
