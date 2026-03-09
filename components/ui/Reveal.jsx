"use client";
import { useInView } from "./useInView";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  const delayClass = delay > 0 ? `reveal-d${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
