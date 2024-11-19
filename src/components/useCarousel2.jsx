import { useEffect, useState } from "react";

export function useCarousel2(props) {
  const [list, setList] = useState([]);
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

  return {
    list: list,
    goRight: right,
    goLeft: left,
  };
}
