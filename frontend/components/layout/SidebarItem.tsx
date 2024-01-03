import { ActiveNav } from "@/lib/hooks/useActiveNav";
import { Navlink } from "@/lib/navlinks";
import Link from "next/link";

interface Props {
  item: Navlink;
  onClick: (data: ActiveNav) => void;
  activeIndex: number;
}

export default function SidebarItem({ item, onClick, activeIndex }: Props) {
  return (
    <div key={item.slug} className="w-full flex flex-col gap-6 items-start">
      <div className="text-secondary font-thin px-4">{item.title}</div>

      <div className="relative w-full flex flex-col items-start gap-4">
        {item.links.map(({ name, icon: Icon, linkIndex, link }) => (
          <Link
            onClick={() => {
              onClick({
                index: linkIndex,
                section: item.slug,
              });
            }}
            href={link}
            key={linkIndex}
            className="w-full px-4 py-2 hover:bg-gray-100 rounded-md flex items-center gap-3 cursor-pointer"
          >
            <Icon
              size={20}
              variant={activeIndex === linkIndex ? "Bold" : "Bulk"}
              color={activeIndex === linkIndex ? "#FF7E3A" : "#2E3271"}
              className="z-10"
            />
            <div
              className="text-secondary z-10 text-sm font-thin"
              style={{
                color: activeIndex === linkIndex ? "#FF7E3A" : "#2E3271",
              }}
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
