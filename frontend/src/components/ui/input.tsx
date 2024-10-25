import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={`h-10 w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
