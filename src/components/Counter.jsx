import { useEffect, useState } from "react";

function Counter({ target, duration = 2000, suffix = "" }) {
  const targetNumber = parseInt(target, 10);
  const isText = isNaN(targetNumber);

  const [count, setCount] = useState(isText ? target : 0);

  useEffect(() => {
    if (isText) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutQuad = progress * (2 - progress);

      setCount(Math.floor(easeOutQuad * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber, isText, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
