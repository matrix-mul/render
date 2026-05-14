import { useDroppable } from "@dnd-kit/react";
import {
  Badge,
  Card,
  Containers,
  Content,
  Content2,
  Main,
  Nav,
} from "../styles/about_us";

export function DColumn({ children, id }: { children: any; id: any }) {
  const { ref } = useDroppable({
    id,
    accept: "item",
  });

  return (
    <Containers className="Column" ref={ref}>
      {children}
    </Containers>
  );
}
