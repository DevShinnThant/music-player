// Links
import { navlinks } from "@/lib/navlinks";

// Hooks
import useActiveNav from "@/lib/hooks/useActiveNav";

// Component
import SidebarItem from "./SidebarItem";
import { AddSquare, RecordCircle } from "iconsax-react";

export default function Sidebar() {
  const { activeNavIndex, onHandleClick } = useActiveNav();

  return (
    <div className="w-80 h-full py-5 flex justify-center bg-primary">
      <div className="w-full flex flex-col items-center gap-16">
        {/* Logo */}
        <div className="relative w-full flex px-10 py-4 justify-start items-center gap-4">
          <div className="absolute bottom-7 left-8 w-5 h-5 rounded-full bg-active" />
          <div className="text-xl z-10 font-medium text-white tracking-wider">
            Echo Music
          </div>
        </div>
        {/* Logo */}

        {/* Links */}
        <div className="relative w-full flex flex-col items-center gap-6">
          {navlinks.map((nav, index) => {
            return (
              <SidebarItem
                key={nav.link}
                isActive={activeNavIndex === index}
                item={nav}
                index={index}
                onClick={onHandleClick}
              />
            );
          })}
        </div>
        {/* Links */}

        {/* Playlist */}
        <div className="w-full px-7 flex flex-col items-center gap-5">
          <div className="w-full flex items-center justify-between">
            <div className="text-textSecondary text-[12px]">Playlists</div>
            <AddSquare className="cursor-pointer" color="#0C90EE" />
          </div>
          <div className=" w-full flex flex-col items-start gap-4">
            <div className="flex items-center gap-4 cursor-pointer">
              <RecordCircle size={18} color="#919693" />
              <div className="text-textPrimary text-[12px]">Rock & Roll</div>
            </div>
            <div className="flex items-center gap-4">
              <RecordCircle size={18} color="#919693" />
              <div className="text-textPrimary text-[12px]">Best of 90s</div>
            </div>
            <div className="flex items-center gap-4">
              <RecordCircle size={18} color="#919693" />
              <div className="text-textPrimary text-[12px]">Work Time</div>
            </div>
            <div className="flex items-center gap-4">
              <RecordCircle size={18} color="#919693" />
              <div className="text-textPrimary text-[12px]">Exercise mode</div>
            </div>
          </div>
        </div>
        {/* Playlist */}
      </div>
    </div>
  );
}
