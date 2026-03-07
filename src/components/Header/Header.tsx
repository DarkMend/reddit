import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wraper}>
        <div className={styles.logo}>
          <Image src="/logo.svg" width={20} height={20} alt="logo" />
        </div>
        <div className={styles.nav}></div>
      </div>
    </div>
  );
}
