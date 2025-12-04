import { ReactNode } from "react";
import styles from "./Button.module.css";

type Button = {
  text?: string;
  icon?: ReactNode;
  color?: string | "var(--background)";
  background?: string | "var(--foreground)";
  borderColor?: string | "var(--border-color)";
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export default function Button({
  onClick,
  text,
  icon,
  background,
  color,
  borderColor,
}: Button) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        backgroundColor: background,
        color: color,
        border: `1px solid ${borderColor}`,
      }}>
      {icon && <div className={styles.button__icon}>{icon}</div>}
      {text && <p>{text}</p>}
    </button>
  );
}
