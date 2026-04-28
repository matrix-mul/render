import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { resetAll } from "../store/globalAction";


export default function Acknowledgement() {
    const dispatch = useDispatch()
  return (
    <div className="text-2xl">
      Details Submitted Successfully.
      <div className="flex w-full h-full justify-center items-center">
        <Button size="lg" className="rounded-xl p-7 text-xl" onClick={() => {
            dispatch(resetAll())
        }}>
          Trigger a Global Reset Action.
        </Button>
      </div>
    </div>
  );
}
