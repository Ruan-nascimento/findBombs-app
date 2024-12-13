export default function ContentBoxPlate({label, title}: {label: string, title?: string}) {
  return (
    <div
    title={label}
    className="flex flex-col w-full h-10 bg-neutral-700 rounded-md items-center justify-center font-semibold overflow-clip
    duration-200 ease-in-out hover:bg-indigo-600/30"
    > 
      {title && 
      <span
      className="font-thin text-xs -mb-1 text-neutral-50/40 uppercase"
      >{title}</span>}
      {label}
    </div>
  );
}