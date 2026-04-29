import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 4) {
          return ".";
        }
        return prevDots + ".";
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex w-full justify-center items-center z-30 backdrop-blur-[9px]">
      <div className="grid w-full max-w-md items-start gap-4">
        <Alert className="p-4 rounded-xl">
          <AlertTitle className="text-2xl">Redux Thunk</AlertTitle>
          <AlertDescription>
            Right now, a middleware function is being executed
            <div className="inline-block w-[4ch]">{dots}</div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
