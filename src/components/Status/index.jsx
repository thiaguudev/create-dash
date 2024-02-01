import { Children } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

/* eslint-disable react/prop-types */
export default function Status({ pageTitle, config, children }) {
  return (
    <div className="flex h-[82px] justify-between items-center px-5 w-full">
      <h1 className="text-2xl font-bold italic">{pageTitle}</h1>
      <div className="flex gap-3">
        {Children.map(children, (child, index) => {
          return (
            <div className="flex gap-2 items-center cursor-pointer">
              <span
                className={clsx(
                  "w-8 h-8 rounded-full flex justify-center items-center text-white",
                  child.props.active ? "bg-blue-500" : "bg-gray-500"
                )}
              >
                {index + 1}
              </span>{" "}
              {child}
              {Children.count(children) !== index + 1 && (
                <ChevronRight size={32} />
              )}
            </div>
          );
        })}
      </div>

      {config}
    </div>
  );
}
