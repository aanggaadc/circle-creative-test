import { cn } from "../../lib/utils";

export const ChecklistIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4", className)}
    >
      <path
        d="M3.00098 7.69596L5.98597 10.681L11.956 4.71097"
        stroke="#4A4A4A"
        strokeLinecap="square"
      />
    </svg>
  );
};