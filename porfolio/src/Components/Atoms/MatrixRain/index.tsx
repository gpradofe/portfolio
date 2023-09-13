// MatrixRain.tsx
import React, { useEffect, useRef } from "react";
import { MatrixRainCanvas } from "./styles";

const MatrixRain: React.FC<{ duration?: number }> = ({ duration = 2 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const columns = canvas.width / 10; // changed from 14 to 10

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = "10px Courier New";

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(65 + Math.random() * 33);
        ctx.fillText(text, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 130); // increased from 100ms to 130ms
    setTimeout(() => clearInterval(interval), duration * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        width: "50%",
      }}
    >
      <MatrixRainCanvas ref={canvasRef} />
    </div>
  );
};
export default MatrixRain;
