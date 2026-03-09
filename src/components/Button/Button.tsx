import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: IButton) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
