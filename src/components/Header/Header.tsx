import Image from "next/image";
import styles from "./Header.module.scss";
import { User } from "lucide-react";
import Container from "../Container/Container";

export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/logo.svg" width={20} height={20} alt="logo" />
          </div>
          <menu className={styles.nav}>
            <a href="">
              <User />
            </a>
          </menu>
        </div>
      </Container>
    </div>
  );
}
