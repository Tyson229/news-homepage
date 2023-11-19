import { useEffect, useRef } from "react";

const useClickOutside = (
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (isOpen && !sidebarRef.current?.contains(event.target as Node))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return sidebarRef;
};

export default useClickOutside;
