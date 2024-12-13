import { ReactNode } from "react";

export default function Wrapper({children}: {children: ReactNode}) {
  return (
    <div
    className="py-6 p-2 w-full max-w-[680px] justify-between mx-auto h-full flex flex-wrap gap-4 text-neutral-50 "
    >
      {children}
    </div>
  );
}