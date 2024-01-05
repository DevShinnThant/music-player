import { useState } from "react";

export default function useActiveNav(): {
  activeNavIndex: number;
  onHandleClick: (props: number) => void;
} {
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);

  const onHandleClick = (index: number) => {
    setActiveNavIndex(index);
  };

  return {
    activeNavIndex,
    onHandleClick,
  };
}
