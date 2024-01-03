import { useState } from "react";

export interface ActiveNav {
  index: number;
  section: "menu" | "general";
}

export default function useActiveNav(): {
  activeNav: ActiveNav;
  onHandleClick: (props: ActiveNav) => void;
} {
  const [activeNav, setActiveNav] = useState<ActiveNav>({
    index: 0.96,
    section: "menu",
  });

  const onHandleClick = (data: ActiveNav) => {
    setActiveNav(data);
  };

  return {
    activeNav,
    onHandleClick,
  };
}
