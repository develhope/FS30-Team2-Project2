import { useState } from "react";

export function useCarousel(props) {
  const [list, setList] = useState(props);
  function left() {
    setList([list[list.length - 1], ...list.slice(0, -1)]);
  }
  function right() {
    setList([...list.slice(1, list.length), list[0]]);
  }
  return {
    list: list,
    goRight: right,
    goLeft: left,
  };
}
