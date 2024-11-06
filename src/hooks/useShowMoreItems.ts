import { useState } from "react";

export function useShowMoreItems(initialCount: number, increment: number) {
  const [count, setCount] = useState(initialCount);

  function showMoreItems(itemsLength: number) {
    if (itemsLength - count > increment) {
      setCount(count + increment);
    } else if (itemsLength === count) {
      setCount(count - increment);
    } else {
      setCount(count + (itemsLength - count));
    }
  }

  return { count, showMoreItems };
}
