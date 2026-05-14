import { useSortable } from "@dnd-kit/react/sortable";
import {
  Badge,
  Card,
  Containers,
  Content,
  Content2,
  Main,
  Nav,
} from "../styles/about_us";
import { useDispatch } from "react-redux";
import { deleteCard } from "../slice/boardSlice";

export default function DCard({
  id,
  index,
  cardData,
}: {
  id: any;
  index: number;
  cardData: any;
}) {
  const { ref, handleRef } = useSortable({
    id: id,
    index,
    type: "item",
  });
  const dispatch = useDispatch();
  return (
    <Card ref={ref}>
      <div>{cardData.title}</div>

      <div className="flex w-[94%] justify-between">
        <Badge
          onClick={() => {
            dispatch(deleteCard(cardData.title));
          }}
          ref={handleRef}
          priority={"HIGH"}
        >
          Delete
        </Badge>
        <Badge ref={handleRef} priority={cardData.priority}>
          {cardData.priority}
        </Badge>
      </div>
    </Card>
  );
}
