import { cn } from "../../lib/utils";

export const ArrowLeftIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-5 h-5", className)}
    >
      <path
        d="M4.375 10.5L9.625 15.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M4.375 10.5L9.625 5.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
