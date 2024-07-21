import { cn } from "../../lib/utils";

export const WarningIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-15.5 h-15.5", className)}
    >
      <path
        d="M31 38.75V38.7758M31 23.25V28.4167V23.25Z"
        stroke="#ED4C5C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9168 49.0842H49.0834C49.9264 49.0783 50.7551 48.8663 51.4973 48.4665C52.2394 48.0668 52.8725 47.4915 53.3413 46.7909C53.8101 46.0902 54.1003 45.2856 54.1867 44.447C54.273 43.6085 54.1529 42.7615 53.8368 41.9801L35.4951 10.3342C35.0483 9.52669 34.3933 8.85356 33.5983 8.38483C32.8032 7.9161 31.8972 7.66888 30.9742 7.66888C30.0513 7.66888 29.1453 7.9161 28.3502 8.38483C27.5552 8.85356 26.9002 9.52669 26.4534 10.3342L8.11175 41.9801C7.8016 42.7437 7.67861 43.5703 7.75306 44.3911C7.8275 45.2119 8.09721 46.003 8.53968 46.6983C8.98215 47.3936 9.58454 47.973 10.2965 48.388C11.0086 48.8031 11.8095 49.0418 12.6326 49.0842"
        stroke="#ED4C5C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
