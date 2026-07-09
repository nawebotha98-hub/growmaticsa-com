import logoWordmark from "@/assets/logo-wordmark.png";

const Logo = ({ height = 36, className = "" }: { height?: number; className?: string }) => (
  <img
    src={logoWordmark}
    alt="GrowMatic SA"
    className={`block w-auto ${className}`}
    style={{ height }}
  />
);

export default Logo;
