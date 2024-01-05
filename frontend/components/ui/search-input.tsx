import React from "react";
import { InputProps } from "./input";
import { cn } from "@/lib/utils";
import { SearchNormal1 } from "iconsax-react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex gap-2 h-full items-center rounded-full bg-secondary px-4 text-sm focus-within:ring-0 focus-within:ring-offset-0",
          className
        )}
      >
        <SearchNormal1 color="#919693" size={18} />
        <input
          {...props}
          type="text"
          ref={ref}
          className="w-full text-xs text-textPrimary bg-transparent p-2 focus:outline-0 focus:ring-0 focus:ring-offset-0 placeholder:text-textPrimary placeholder:text-[11px] placeholder:tracking-wider  disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
