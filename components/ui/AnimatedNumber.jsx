"use client";
import { useState, useEffect } from "react";
import { useInView } from "./useInView";

export default function AnimatedNumber({ value, suffix = "", duration = 1600 }) {
  const [display, setDisplay] = useState("0");
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;

    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = Math.round(num * ease);
      setDisplay(current.toString());
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
