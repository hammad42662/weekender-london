import Button from "../ReusableComponents/Button";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
const categories = [
  {
    id: 11,
    names: "Men Bags",
    path: "../public/images/men-bag.jpg",
  },
  {
    id: 22,
    names: "Women Bags",
    path: "../public/images/women-bag.jpg",
  },
  {
    id: 33,
    names: "Accessories",
    path: "../public/images/accessory.jpg",
  },
];
function Categories() {
  return (
    <section className={styles.categoryCon}>
      <h1 className={styles.title}>Categories</h1>
      <ul className={styles.categoriesListContainer}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoriesList}>
            <img src={category.path} alt="categories image" />

            <p>{category.names}</p>
            <Link
              to={
                category.id === 11
                  ? "/menbags"
                  : category.id === 22
                  ? "/womenbags"
                  : "/accessories"
              }
            >
              <Button margin="10px 0px 0px 0px">
                {category.id === 11
                  ? "Shop Men's Bags"
                  : category.id === 22
                  ? "Shop Women's Bags"
                  : "Shop Accessories"}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Categories;
