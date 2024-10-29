import { useState } from "react";

export function useCarousel2(props) {
  const [list, setList] = useState(props);
  function left() {
    setList([
      list[list.length - 3],
      list[list.length - 2],
      list[list.length - 1],
      ...list.slice(0, -3),
    ]);
  }
  function right() {
    setList([...list.slice(3, list.length), list[0], list[1], list[2]]);
  }
  return {
    list: list,
    goRight: right,
    goLeft: left,
  };
}
