import CategoryList from "@/components/CategoryList/CategoryList";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.categoryList}>
            <CategoryList />
          </div>
        </div>
      </section>
    </>
  );
}
