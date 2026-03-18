import styles from "./CategoryListItem.module.scss";
import Link from "next/link";

interface ICategoryListItem {
  text: string;
  href: string;
}

export default function CategoryListItem({ text, href }: ICategoryListItem) {
  return (
    <Link href={href} className={styles.item}>
      {text}
    </Link>
  );
}
