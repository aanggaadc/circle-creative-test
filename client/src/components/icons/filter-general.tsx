import { cn } from "../../lib/utils";

export const FilterGeneralIcon = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4", className)}
    >
      <path
        d="M1 3.99999L3.66667 1.33333M3.66667 1.33333L6.33333 3.99999M3.66667 1.33333V10.6667"
        stroke={color ?? "#888888"}
        strokeLinecap="square"
      />
      <path
        d="M12.9998 8L10.3332 10.6667M10.3332 10.6667L7.6665 8M10.3332 10.6667V1.33333"
        stroke={color ?? "#888888"}
        strokeLinecap="square"
      />
    </svg>
  );
};
