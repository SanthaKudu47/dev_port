import { useEffect, useRef, useState } from "react";

function useScroll(): [number, "down" | "up"] {
  const [currentPosition, setCurrentPosition] = useState(0);
  let isEventListenerAdded = useRef(false);
  let direction = useRef<"down" | "up">("down");

  function updateScrollPosition(position: number) {
    setCurrentPosition((old) => {
      if (position > old) {
        direction.current = "down";
      } else {
        direction.current = "up";
      }
      return position;
    });
  }

  function eventHandler() {
    updateScrollPosition(window.scrollY);
  }
  useEffect(() => {
    if (isEventListenerAdded.current === true) return;
    document.addEventListener("scroll", eventHandler);
    isEventListenerAdded.current = true;

    return () => {
      document.removeEventListener("scroll", eventHandler);
      isEventListenerAdded.current = false;
    };
  }, []);

  return [currentPosition, direction.current];
}

export default useScroll;
