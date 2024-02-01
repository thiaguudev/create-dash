import clsx from "clsx";
import { useState } from "react";

export default function Question() {
  const [status, setStatus] = useState("question");

  const handleStatus = (newStatus) => () => setStatus(newStatus);

  return (
    <div className="flex flex-col bg-slate-50 h-full max-h-[164px] w-full max-w-[524px] gap-5">
      <div className="flex gap-5">
        <button
          onClick={handleStatus("question")}
          className={clsx(
            "border solid p-2 border-black rounded-full",
            status === "question" && "bg-black text-white"
          )}
        >
          Question
        </button>
        <button
          onClick={handleStatus("logic")}
          className={clsx(
            "border solid p-2 border-black rounded-full",
            status === "logic" && "bg-black text-white"
          )}
        >
          Logic
        </button>
        <button
          onClick={handleStatus("setting")}
          className={clsx(
            "border solid p-2 border-black rounded-full",
            status === "setting" && "bg-black text-white"
          )}
        >
          Setting
        </button>
      </div>

      <textarea value="Q1. How likely are you to recommend snowlash to a friend or colleague?" />
    </div>
  );
}
