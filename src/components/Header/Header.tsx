import Image from "next/image";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Link from "next/link";
import IconButton from "../IconButton/IconButton";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.svg" width={20} height={20} alt="logo" />
            </Link>
          </div>
          <menu className={styles.nav}>
            <IconButton>
              <User />
            </IconButton>
          </menu>
        </div>
      </Container>
    </div>
  );
}
