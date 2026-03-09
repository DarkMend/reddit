import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.scss";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function IconButton({ children, ...props }: IIconButton) {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.buttonWrapper}>{children}</div>
    </button>
  );
}
