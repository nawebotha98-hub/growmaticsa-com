import { useEffect, useRef } from "react";

const FooterGrowthCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let progress = 0;
    let t = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            started = true;
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    const ease = (x: number) => 1 - Math.pow(1 - x, 3);

    const loop = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (el.width !== w || el.height !== h) {
        el.width = w;
        el.height = h;
      }
      ctx.clearRect(0, 0, w, h);
      if (started && progress < 1) progress = Math.min(1, progress + 0.008);
      const p = ease(progress);
      const base = h - 28;
      const n = 9;
      const bw = 30;
      const gap = 34;
      const total = n * bw + (n - 1) * gap;
      const x0 = (w - total) / 2;
      const sway = Math.sin(t * 0.9) * 0.06;

      for (let i = 0; i < n; i++) {
        const stagger = Math.min(1, Math.max(0, (p * (n + 2) - i) / 2));
        const bh = (0.18 + (i / (n - 1)) * 0.62) * (h - 60) * ease(stagger);
        const x = x0 + i * (bw + gap);
        ctx.fillStyle = `rgba(31,157,92,${0.16 + (i / (n - 1)) * 0.3})`;
        ctx.fillRect(x, base - bh, bw, bh);
      }

      const sx = x0 - 20;
      const sy = base;
      const exBase = x0 + total - bw / 2;
      const eyBase = base - (h - 60) * 0.86;
      const ex = exBase + Math.sin(t * 0.9) * 4 * p;
      const ey = eyBase + Math.cos(t * 0.7) * 2 * p;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(x0 + total * 0.35, base - 8, x0 + total * 0.55, base - (h - 60) * 0.4, ex, ey);
      ctx.strokeStyle = "#1f9d5c";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      const len = 1200;
      ctx.setLineDash([len]);
      ctx.lineDashOffset = len * (1 - p);
      ctx.stroke();
      ctx.setLineDash([]);

      const lp = Math.max(0, (progress - 0.8) / 0.2);
      if (lp > 0) {
        const leaf = (angle: number, size: number) => {
          ctx.save();
          ctx.translate(ex, ey);
          ctx.rotate(angle + sway);
          ctx.scale(ease(lp) * size, ease(lp) * size);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(10, -14, 26, -16, 34, -4);
          ctx.bezierCurveTo(24, 6, 8, 6, 0, 0);
          ctx.closePath();
          ctx.fillStyle = "#1f9d5c";
          ctx.fill();
          ctx.restore();
        };
        leaf(-1.9, 1);
        leaf(-0.9, 1.25);
      }
      t += 0.016;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="border-t border-hairline overflow-hidden select-none pointer-events-none">
      <canvas ref={canvasRef} className="block w-full" style={{ height: 180 }} />
    </div>
  );
};

export default FooterGrowthCanvas;
