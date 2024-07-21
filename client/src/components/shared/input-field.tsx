import React from "react";
import { cn } from "../../lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputField = ({
  label,
  error,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <div className="mb-6">
      <label className="text-base font-normal leading-6" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={cn(
          "w-full h-10 p-2 border rounded-[5px] border-solid border-[#383838] mt-2",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[red] mt-1">{error}</p>}
    </div>
  );
};
