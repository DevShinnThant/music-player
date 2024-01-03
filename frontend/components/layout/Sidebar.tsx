// API
import Image from "next/image";

// Logo
import Logo from "@/public/soundcloud-logo.png";

// Links
import { navlinks } from "@/lib/navlinks";

// Hooks
import useActiveNav from "@/lib/hooks/useActiveNav";

// Component
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { activeNav, onHandleClick } = useActiveNav();

  return (
    <div className="w-80 h-full px-3 py-5 flex justify-center bg-primary">
      <div className="w-full flex flex-col items-center gap-12">
        {/* Logo */}
        <div className="w-full flex p-4 justify-start items-center gap-4">
          <Image src={Logo} alt="Sound Cloud" />
          <div className="text-xl font-medium">Soundcloud</div>
        </div>
        {/* Logo */}

        <div className="relative w-full flex flex-col items-center gap-12">
          {navlinks.map((nav) => {
            return (
              <SidebarItem
                key={nav.slug}
                activeIndex={activeNav.index}
                item={nav}
                onClick={onHandleClick}
              />
            );
          })}

          <div
            style={{
              top: `calc(${activeNav.index} * ${51}px)`,
            }}
            className="absolute w-full h-[38px] rounded-md bg-gray-100 transition-[top]"
          >
            <span
              className={
                "absolute right-0 w-[3px] h-7 mt-[4px] rounded-lg bg-active"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
