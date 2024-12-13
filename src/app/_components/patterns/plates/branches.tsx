import { ReactNode } from "react";

export default function BranchesPlate({children}: {children: ReactNode}) {
  return (
    <div
    className="w-full flex gap-2"
    >{children}</div>
  );
}