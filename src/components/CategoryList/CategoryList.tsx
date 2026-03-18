import styles from "./CategoryList.module.scss";
import CategoryListItem from "./CategoryListItem/CategoryListItem";

export default function CategoryList() {
  return (
    <div className={styles.categoryList}>
      <CategoryListItem text="Новости" href="/" />
      <CategoryListItem text="Посты" href="/posts" />
    </div>
  );
}
