import { cn } from "../../lib/utils";

export const TrashIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-2.5 h-2.5", className)}
    >
      <path
        d="M1 2.5H9"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.5V7.5"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4.5V7.5"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 2.5L2 8.5C2 8.76522 2.10536 9.01957 2.29289 9.20711C2.48043 9.39464 2.73478 9.5 3 9.5H7C7.26522 9.5 7.51957 9.39464 7.70711 9.20711C7.89464 9.01957 8 8.76522 8 8.5L8.5 2.5"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 2.5V1C3.5 0.867392 3.55268 0.740215 3.64645 0.646447C3.74021 0.552678 3.86739 0.5 4 0.5H6C6.13261 0.5 6.25978 0.552678 6.35355 0.646447C6.44732 0.740215 6.5 0.867392 6.5 1V2.5"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};