import logoIcon from "@/assets/logo-icon.png";

const LogoIcon = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
  <img
    src={logoIcon}
    alt="GrowMatic"
    className={`shrink-0 rounded-full object-cover bg-white ${className}`}
    style={{ width: size, height: size }}
  />
);

export default LogoIcon;
