import { createSlice, nanoid } from "@reduxjs/toolkit";
import { BoardState } from "../about_us/page";

const initialState: BoardState = {
  todo: [
    { title: "Create Boards", priority: "HIGH" },
    { title: "Create Animations", priority: "MID" },
    { title: "Improve UX", priority: "LOW" },
  ],
  inProg: [],
  done: [],
};

const findContainer = (board: BoardState, id: string) => {
  if (board.todo.find((item: any) => item.title === id)) return "todo";
  if (board.inProg.find((item: any) => item.title === id)) return "inProg";
  if (board.done.find((item: any) => item.title === id)) return "done";
  return null;
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addCard: (state, action) => {
      //   const cardData = action.payload;
      //   const newCardId = `card-${nanoid()}`;
      //   state.cards[newCardId] = {
      //     title: cardData.title,
      //     priority: cardData.priority,
      //   };
    },
    deleteCard: (state, action) => {
      const id = action.payload;
      console.log(id);
      const container = findContainer(state, id as string);
      if (container == null) return;
      state[container].splice(
        state[container].findIndex((card) => card.title === id),
        1,
      );
    },
    moveCard: (state, action) => {
      console.log("Payload: ", action.payload);
      const activeId = action.payload.activeId;
      const overId = action.payload.overId;

      const activeContainter = findContainer(state, activeId as string);
      let finalContainter = findContainer(state, overId as string);
      if (finalContainter === null && overId != undefined)
        finalContainter = overId;

      console.log(" Active Container : ", activeContainter);
      console.log(" Destination Contatiner : ", finalContainter);

      if (
        activeContainter === null ||
        finalContainter === null ||
        activeContainter == finalContainter
      )
        return;

      const prevSourceContainerItems = state[activeContainter];
      const prevDestinationContainerItems = state[finalContainter];
      const indexInPrevSourceContainterItems =
        prevSourceContainerItems.findIndex((item) => item.title === activeId);
      const indexInPrevDestinationContainterItems =
        prevDestinationContainerItems.findIndex(
          (item) => item.title === overId,
        );
      const [movedItem] = prevSourceContainerItems.splice(
        indexInPrevSourceContainterItems,
        1,
      );
      if (indexInPrevDestinationContainterItems == -1) {
        prevDestinationContainerItems.splice(
          prevDestinationContainerItems.length,
          0,
          movedItem,
        );
      } else {
        prevDestinationContainerItems.splice(
          indexInPrevDestinationContainterItems,
          0,
          movedItem,
        );
      }
    },
  },
});

export const { addCard, deleteCard, moveCard } = boardSlice.actions;
export default boardSlice.reducer;
