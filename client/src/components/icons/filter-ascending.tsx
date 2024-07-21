import { cn } from "../../lib/utils";

export const FilterAscendingIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-3 h-3", className)}
    >
      <path
        d="M7.6709 5.2858V2.30081C7.6709 1.47695 8.04104 1.10681 8.8649 1.10681C9.68875 1.10681 10.0589 1.47695 10.0589 2.30081V5.2858M10.0589 3.49481H7.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0589 11.8528H7.6709L10.0589 7.6738H7.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.104 8.27081L2.895 10.0618L4.686 8.27081"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.89502 2.8978V10.0618"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
