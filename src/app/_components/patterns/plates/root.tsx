import { ReactNode } from "react";

export default function RootPlate({children}: {children: ReactNode}) {
  return (
    <div
    className="flex flex-col justify-center w-52 h-52 rounded-md border border-transparent p-4 bg-neutral-700/30 gap-2
    duration-200 cursor-pointer ease-in-out hover:backdrop-opacity-20 hover:shadow-md hover:border-indigo-600"
    >{children}</div>
  );
}