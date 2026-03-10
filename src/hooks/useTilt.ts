"use client";
import { useRef, useCallback } from "react";

export function useTilt(intensity = 8) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(8px)`;
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}