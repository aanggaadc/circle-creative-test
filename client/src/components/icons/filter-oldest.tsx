import { cn } from "../../lib/utils";

export const FilterOldestIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-3 h-3", className)}
    >
      <path
        d="M1.104 0.50589H5.283"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.104 4.08789H5.283"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.104 7.66986H6.47699"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6709 2.29689L9.4619 0.50589L11.2529 2.29689"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46191 0.50589V7.66988"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
