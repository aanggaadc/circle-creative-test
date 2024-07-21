import { cn } from "../../lib/utils";

export const FilterDescendingIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-3 h-3", className)}
    >
      <path
        d="M7.6709 11.2447V8.25972C7.6709 7.43586 8.04104 7.06572 8.8649 7.06572C9.68875 7.06572 10.0589 7.43586 10.0589 8.25972V11.2447M10.0589 9.45372H7.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0589 4.67773H7.6709L10.0589 0.498734H7.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.104 7.66272L2.895 9.45372L4.686 7.66272"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.89502 2.28973V9.45372"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
