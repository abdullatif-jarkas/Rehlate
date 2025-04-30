import { LogoProps } from "../../types/Logo";

export default function Logo({ src, to, styles }: LogoProps) {
  return (
    <div>
      <img src={src} alt={to} className={styles} />
    </div>
  );
}
