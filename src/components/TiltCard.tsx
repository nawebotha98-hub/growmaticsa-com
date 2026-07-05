import { useRef, useState, useCallback, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
};

const TiltCard = ({ children, className = "", max = 6 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const rx = (-py * max).toFixed(2);
      const ry = (px * max).toFixed(2);
      setStyle({
        transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`,
        transition: "transform 120ms ease-out",
      });
    },
    [isMobile, max]
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 400ms ease",
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
};

export default TiltCard;
