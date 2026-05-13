import { useDroppable } from "@dnd-kit/react";

export function Droppable({ id, children }) {
  const { ref } = useDroppable({ id });
  return (
    <div className="w-30 h-30 bg-fuchsia-50 rounded-2xl fixed" ref={ref}>
      {children}
    </div>
  );
}
