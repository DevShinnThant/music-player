import { Navlink } from "@/lib/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  item: Navlink;
  onClick: (index: number) => void;
  isActive: boolean;
  index: number;
}

export default function SidebarItem({
  item: { icon: Icon, name, link },
  isActive,
  index,
  onClick,
}: Props) {
  return (
    <div
      onClick={() => onClick(index)}
      className={cn(
        `relative w-full p-2 pl-6 flex items-center gap-4  cursor-pointer`,
        isActive
          ? "before:absolute before:z-20 before:left-0  before:w-full before:h-full  before:border-l-[5px]  before:border-l-active"
          : "border-none",
        index == 3 ? "mt-8" : "mt-0"
      )}
    >
      <Icon
        variant="Outline"
        size={20}
        color={isActive ? "#0C90EE" : "#E2F4F3"}
      />
      <div
        className={cn(
          `text-[13px]`,
          isActive ? "text-active font-medium" : "text-textSecondary"
        )}
      >
        {name}
      </div>
    </div>
  );
}
