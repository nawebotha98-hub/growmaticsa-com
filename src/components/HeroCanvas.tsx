import { useEffect, useRef } from "react";

const SIGNAL = "31,157,92";

const HeroCanvas = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const dots = Array.from({ length: 22 }, (_, i) => ({
      a: (i / 22) * Math.PI * 2 + (i % 5) * 0.3,
      r: 0.5 + (i % 5) * 0.13,
      s: (0.04 + (i % 3) * 0.03) * (i % 2 === 0 ? 1 : -1),
      size: 1.5 + (i % 3),
      wob: (i % 4) * 0.6,
    }));

    const loop = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (el.width !== w || el.height !== h) {
        el.width = w;
        el.height = h;
      }
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.72 + mouse.x * 18;
      const cy = h * 0.42 + mouse.y * 14;
      const R = Math.min(w * 0.17, 250);
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.4);

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.4);
      glow.addColorStop(0, `rgba(${SIGNAL},${0.1 + pulse * 0.05})`);
      glow.addColorStop(1, `rgba(${SIGNAL},0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const glow2 = ctx.createRadialGradient(w * 0.12, h * 0.85, 0, w * 0.12, h * 0.85, R * 2);
      glow2.addColorStop(0, `rgba(${SIGNAL},0.05)`);
      glow2.addColorStop(1, `rgba(${SIGNAL},0)`);
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, w, h);

      const ring = (rx: number, ry: number, rot: number, alpha: number, cometSpeed: number) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${SIGNAL},${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        const ca = t * cometSpeed;
        for (let k = 0; k < 7; k++) {
          const a = ca - k * 0.055;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * rx, Math.sin(a) * ry, 2.4 - k * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${SIGNAL},${0.7 - k * 0.095})`;
          ctx.fill();
        }
        ctx.restore();
      };
      ring(R * 1.45, R * 0.5, t * 0.25, 0.28, 1.1);
      ring(R * 1.7, R * 0.42, -t * 0.18 + 0.9, 0.16, -0.8);

      for (let k = 0; k < 3; k++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.2 + k * 0.07) + k);
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const r = R * (0.55 - k * 0.09) * (1 + pulse * 0.03);
          if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r * 0.92);
          else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * 0.92);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(${SIGNAL},${0.42 - k * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        if (k === 0) {
          ctx.fillStyle = `rgba(${SIGNAL},${0.04 + pulse * 0.03})`;
          ctx.fill();
        }
        ctx.restore();
      }

      dots.forEach((d) => {
        const a = d.a + t * d.s;
        const wobble = Math.sin(t * 0.8 + d.wob) * R * 0.05;
        const x = cx + Math.cos(a) * (R * 1.9 * d.r + wobble);
        const y = cy + Math.sin(a) * (R * 0.9 * d.r + wobble);
        const dist = Math.hypot(x - cx, y - cy);
        if (dist < R * 1.6) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(cx + (x - cx) * 0.35, cy + (y - cy) * 0.35);
          ctx.strokeStyle = `rgba(${SIGNAL},${0.14 * (1 - dist / (R * 1.6))})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + t * 0.5);
        ctx.fillStyle = d.size > 2.5 ? `rgba(${SIGNAL},0.45)` : "rgba(10,10,10,0.35)";
        ctx.fillRect(-d.size / 2, -d.size / 2, d.size, d.size);
        ctx.restore();
      });

      t += 0.01;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default HeroCanvas;
