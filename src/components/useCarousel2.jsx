import { useEffect, useState } from "react";

export function useCarousel2(props, intervalTime, buttons) {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = buttons.length;

  useEffect(() => {
    if (props && props.length > 0) {
      setList(props);
    }
  }, [props]);

  function left() {
    setList((prevList) => {
      const lastItems = prevList.slice(-3);
      return [...lastItems, ...prevList.slice(0, -3)];
    });
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }
  function right() {
    setList((prevList) => {
      const lastItems = prevList.slice(0, 3);
      return [...prevList.slice(3), ...lastItems];
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        right();
      }, intervalTime);
      setIntervalId(interval);
      return () => clearInterval(interval);
    }
  }, [isHovered, intervalTime]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return {
    list: list,
    goRight: right,
    goLeft: left,
    handleMouseEnter,
    handleMouseLeave,
    currentItem: button[currentIndex],
  };
}
