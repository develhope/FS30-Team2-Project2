import { useEffect, useState } from "react";

export function useCarousel2(props, intervalTime = 4000) {
  const [list, setList] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  console.log(list);
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
  }
  function right() {
    setList((prevList) => {
      const lastItems = prevList.slice(0, 3);
      return [...prevList.slice(3), ...lastItems];
    });
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
  };
}
